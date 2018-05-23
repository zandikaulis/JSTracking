webpackJsonp([60], {
    "/gww": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            o = n("2KeS"),
            r = n("V5M+"),
            a = n("TToO"),
            s = n("GiK3"),
            m = n("3zLD"),
            l = n("6sO2"),
            u = n("+8VM"),
            d = n("7vx8"),
            c = n("oIkB"),
            p = n("vH/s"),
            y = n("UQNI"),
            g = n("Odds"),
            h = n("nC3l"),
            v = (n("sJt0"), "error-message"),
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? s.createElement(g._8, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(g.Q, {
                            color: g.K.Error,
                            type: g._49.H4,
                            "data-test-selector": v
                        }, Object(y.a)(t.state.error))) : null
                    }, t.onReasonChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            reason: n
                        })
                    }, t.banUserFromCommunity = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.banUserFromCommunity ? (e = a.__assign({}, Object(c.a)({
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
                                        return null === (t = n.sent()).data.banUserFromCommunity.error ? (l.o.tracking.track(p.SpadeEventType.CommunityModeration, {
                                            community_id: this.props.communityID,
                                            name: this.props.communityName,
                                            is_official: !1,
                                            user_id: this.props.currentUserID,
                                            target_id: this.props.userID,
                                            action: "ban",
                                            reason: this.state.reason
                                        }), this.props.onSuccess && this.props.onSuccess(), this.props.onCloseModal()) : this.setState({
                                            error: t.data.banUserFromCommunity.error
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(g._2, {
                        position: g._15.Relative
                    }, s.createElement(g._35, {
                        background: g.n.Base,
                        className: "stream-ban-modal"
                    }, s.createElement(g._8, {
                        padding: 2
                    }, this.renderErrorMessage(), s.createElement(g._8, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(g.Q, {
                        type: g._49.H4
                    }, Object(l.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), s.createElement(g._35, {
                        borderTop: !0
                    }, s.createElement(g._8, {
                        margin: {
                            y: 2
                        }
                    }, s.createElement(g.Q, {
                        bold: !0
                    }, Object(l.d)("Reason (Required)", "StreamBanModal")), s.createElement(g._4, {
                        type: g._5.Text,
                        placeholder: Object(l.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), s.createElement(g._35, {
                        borderTop: !0
                    }, s.createElement(g._8, {
                        padding: {
                            top: 2
                        },
                        textAlign: g._45.Center
                    }, s.createElement(g._8, {
                        display: g.R.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(g.v, {
                        type: g.B.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(l.d)("Cancel", "StreamBanModal"))), s.createElement(g._8, {
                        display: g.R.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(g.v, {
                        onClick: this.banUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "ban-button"
                    }, Object(l.d)("Ban", "StreamBanModal")))))), s.createElement(u.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(s.Component),
            k = Object(m.compose)(Object(d.a)(h, {
                name: "banUserFromCommunity"
            }))(f);
        var b = Object(i.b)(null, function(e) {
            return Object(o.b)({
                onCloseModal: r.c
            }, e)
        })(k);
        n.d(t, "a", function() {
            return b
        })
    },
    "0w5y": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            o = n("2KeS"),
            r = n("V5M+"),
            a = n("TToO"),
            s = n("GiK3"),
            m = n("3zLD"),
            l = n("6sO2"),
            u = n("+8VM"),
            d = n("7vx8"),
            c = n("oIkB"),
            p = n("vH/s"),
            y = n("UQNI"),
            g = n("Odds"),
            h = (n("npyu"), n("plcU")),
            v = "error-message",
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        durationHours: 2,
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? s.createElement(g._8, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(g.Q, {
                            color: g.K.Error,
                            type: g._49.H4,
                            "data-test-selector": v
                        }, Object(y.a)(t.state.error))) : null
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
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.timeoutUserFromCommunity ? (e = a.__assign({}, Object(c.a)({
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
                                        return null === (t = n.sent()).data.timeoutUserFromCommunity.error ? (l.o.tracking.track(p.SpadeEventType.CommunityModeration, {
                                            community_id: this.props.communityID,
                                            name: this.props.communityName,
                                            is_official: !1,
                                            user_id: this.props.currentUserID,
                                            target_id: this.props.userID,
                                            action: "timeout",
                                            reason: this.state.reason,
                                            duration: this.state.durationHours
                                        }), this.props.onSuccess && this.props.onSuccess(), this.props.onCloseModal()) : this.setState({
                                            error: t.data.timeoutUserFromCommunity.error
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(g._2, {
                        position: g._15.Relative
                    }, s.createElement(g._35, {
                        background: g.n.Base,
                        className: "stream-timeout-modal"
                    }, s.createElement(g._8, {
                        padding: 2
                    }, this.renderErrorMessage(), s.createElement(g._8, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(g.Q, {
                        type: g._49.H4
                    }, Object(l.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), s.createElement(g._35, {
                        borderTop: !0
                    }, s.createElement(g._8, {
                        margin: {
                            y: 2
                        }
                    }, s.createElement(g.Q, {
                        bold: !0
                    }, Object(l.d)("Reason (Required)", "StreamTimeoutModal")), s.createElement(g._4, {
                        type: g._5.Text,
                        placeholder: Object(l.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), s.createElement(g._8, {
                        margin: {
                            y: 2
                        }
                    }, s.createElement(g.Q, {
                        bold: !0
                    }, Object(l.d)("Duration", "StreamTimeoutModal")), s.createElement(g._30, {
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
                    }, Object(l.d)("24 hours", "StreamTimeoutModal")))), s.createElement(g._35, {
                        borderTop: !0
                    }, s.createElement(g._8, {
                        padding: {
                            top: 2
                        },
                        textAlign: g._45.Center
                    }, s.createElement(g._8, {
                        display: g.R.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(g.v, {
                        type: g.B.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(l.d)("Cancel", "StreamTimeoutModal"))), s.createElement(g._8, {
                        display: g.R.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(g.v, {
                        onClick: this.timeoutUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "timeout-button"
                    }, Object(l.d)("Timeout", "StreamTimeoutModal")))))), s.createElement(u.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(s.Component),
            k = Object(m.compose)(Object(d.a)(h, {
                name: "timeoutUserFromCommunity"
            }))(f);
        var b = Object(i.b)(null, function(e) {
            return Object(o.b)({
                onCloseModal: r.c
            }, e)
        })(k);
        n.d(t, "a", function() {
            return b
        })
    },
    "1MwX": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpdateCommunityDisplayName"
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "error"
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
                end: 136
            }
        };
        n.loc.source = {
            body: "mutation UpdateCommunityDisplayName($input: EditCommunityInput!) {\neditCommunity(input: $input) {\ncommunity {\nid\ndisplayName\n}\nerror\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "2t7f": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UntimeoutUserFromCommunity"
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
                                value: "UntimeoutUserFromCommunityInput"
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
                            value: "untimeoutUserFromCommunity"
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
                                    value: "community"
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
                end: 144
            }
        };
        n.loc.source = {
            body: "mutation UntimeoutUserFromCommunity($input: UntimeoutUserFromCommunityInput!) {\nuntimeoutUserFromCommunity(input: $input) {\ncommunity {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "5ghP": function(e, t) {},
    A9xB: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CommunityModerationBanner"
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
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "loggedIn"
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "followersCount"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
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
                                        value: "107"
                                    }
                                }],
                                directives: []
                            }, {
                                kind: "Field",
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
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "self"
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
                                                value: "loggedIn"
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
                                            value: "follow"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 256
            }
        };
        n.loc.source = {
            body: "query CommunityModerationBanner($name: String! $loggedIn: Boolean!) {\ncommunity(name: $name) {\nid\ndisplayName\nfollowersCount\navatarURL(width: 80 height: 107)\ncoverURL(width: 1200 height: 180)\nself @include(if: $loggedIn) {\nfollow {\ncommunity {\nid\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    BBZ2: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CommunityEmail"
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                    value: "email"
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
                end: 76
            }
        };
        n.loc.source = {
            body: "query CommunityEmail($name: String!) {\ncommunity(name: $name) {\nid\nemail\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    UQNI: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var i = n("6sO2"),
            o = function(e) {
                switch (e) {
                    case "TARGET_USER_OWNER":
                        return Object(i.d)("You cannot ban or timeout the owner of this community", "BanTimeoutErrorMessages");
                    case "TARGET_USER_MOD":
                        return Object(i.d)("You cannot ban or timeout a moderator", "BanTimeoutErrorMessages");
                    case "TARGET_USER_SELF":
                        return Object(i.d)("You cannot ban or timeout yourself", "BanTimeoutErrorMessages");
                    case "TARGET_USER_STAFF":
                        return Object(i.d)("You cannot ban or timeout a staff member", "BanTimeoutErrorMessages");
                    case "NOT_PERMITTED":
                        return Object(i.d)("The user is already banned from this community", "BanTimeoutErrorMessages");
                    default:
                        return Object(i.d)("Something went wrong", "BanTimeoutErrorMessages")
                }
            }
    },
    "W/wc": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            o = n("2KeS"),
            r = n("+xm8"),
            a = n("f2i/"),
            s = n("Aj/L"),
            m = n("TToO"),
            l = n("GiK3"),
            u = n("6sO2"),
            d = n("7vx8"),
            c = n("oIkB"),
            p = n("vH/s"),
            y = n("CSlQ"),
            g = n("Odds"),
            h = n("qs/O"),
            v = n("odW7"),
            f = n("d+bE"),
            k = function(e) {
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
                            var n = "follow" === e ? p.SpadeEventType.CommunityFollow : p.SpadeEventType.CommunityUnfollow;
                            u.o.tracking.track(n, {
                                community_id: t.props.data.community.id,
                                name: t.props.data.community.name,
                                is_official: !1,
                                user_id: t.props.data.currentUser && t.props.data.currentUser.id
                            })
                        }
                    }, t.followChannel = function() {
                        return m.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i = this;
                            return m.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return this.props.followCommunity && this.props.data ? (e = m.__assign({}, Object(c.a)({
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
                                        return t = o.sent(), n = function(e) {
                                            return i.trackResponse("follow"), e.community.self.follow && (e.community.self.follow.followedAt = t.data.followCommunity.community.self.follow.followedAt), e
                                        }, Object(c.e)(h, {
                                            name: this.props.directoryName
                                        }, n), [2]
                                }
                            })
                        })
                    }, t.unfollowChannel = function() {
                        return m.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return m.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.props.unfollowCommunity && this.props.data ? (e = m.__assign({}, Object(c.a)({
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
                                        }, Object(c.e)(h, {
                                            name: this.props.directoryName
                                        }, t), [2]
                                }
                            })
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.data && !e.data.loading && !e.data.error && e.data.community && this.setState({
                        isFollowing: e.data.community.self && null !== e.data.community.self.follow
                    })
                }, t.prototype.render = function() {
                    var e = Object(u.d)("Follow", "DirectoryFollowButton");
                    return this.props.isLoggedIn ? !this.props.data || this.props.data.loading ? l.createElement(g._14, {
                        width: 70,
                        height: 30
                    }) : this.communityDataLoaded() ? this.state.isFollowing ? l.createElement(g._8, {
                        display: g.R.Flex,
                        margin: {
                            left: 1
                        },
                        className: "directory-follow-btn"
                    }, l.createElement(g.w, {
                        ariaLabel: Object(u.d)("Unfollow", "DirectoryFollowButton"),
                        onClick: this.toggleFollowing,
                        "data-a-target": "directory-unfollow-button",
                        "data-test-selector": "unfollow-button",
                        icon: g._25.Heart,
                        statusAlertIcon: g._25.Unheart
                    })) : l.createElement(g.v, m.__assign({
                        ariaLabel: e,
                        "data-a-target": "directory-follow-button",
                        "data-test-selector": "follow-button",
                        icon: g._25.Heart,
                        onClick: this.toggleFollowing
                    }, Object(g._63)(this.props)), e) : null : l.createElement(g.v, {
                        ariaLabel: e,
                        icon: g._25.Heart,
                        onClick: this.props.login,
                        "data-a-target": "directory-follow-button"
                    }, e)
                }, t.prototype.reportInteractive = function() {
                    this.props.isLoggedIn && this.props.directoryName && !this.communityDataLoaded() || this.props.latencyTracking.reportInteractive()
                }, t = m.__decorate([Object(d.a)(h, {
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
                }), Object(d.a)(v, {
                    name: "followCommunity"
                }), Object(d.a)(f, {
                    name: "unfollowCommunity"
                }), Object(y.d)("DirectoryFollowButton")], t)
            }(l.Component);
        var b = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(o.b)({
                login: function() {
                    return Object(a.f)(r.a.DirectoryFollowButton)
                }
            }, e)
        })(k);
        n.d(t, "a", function() {
            return b
        })
    },
    "Wn5/": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UnbanUserFromCommunity"
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
                                value: "UnbanUserFromCommunityInput"
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
                            value: "unbanUserFromCommunity"
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
                                    value: "community"
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
                end: 132
            }
        };
        n.loc.source = {
            body: "mutation UnbanUserFromCommunity($input: UnbanUserFromCommunityInput!) {\nunbanUserFromCommunity(input: $input) {\ncommunity {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "d+bE": function(e, t) {
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                        name: {
                                            kind: "Name",
                                            value: "followedAt"
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
                end: 144
            }
        };
        n.loc.source = {
            body: "mutation DirectoryFollowButton_UnfollowCommunity($input: UnfollowCommunityInput!) {\nunfollowCommunity(input: $input) {\nfollow {\nfollowedAt\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "eFj+": function(e, t) {},
    nC3l: function(e, t) {
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                name: {
                                    kind: "Name",
                                    value: "error"
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
                end: 121
            }
        };
        n.loc.source = {
            body: "mutation CommunityStreamBan_BanUser($input: BanUserFromCommunityInput!) {\nbanUserFromCommunity(input: $input) {\nerror\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    nSoa: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CommunityModeration"
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
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "loggedIn"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "log"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "settings"
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
                                    value: "name"
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
                                    value: "email"
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
                                                value: "settings"
                                            }
                                        }
                                    }]
                                }]
                            }, {
                                kind: "Field",
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
                                        name: {
                                            kind: "Name",
                                            value: "id"
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
                                                value: "loggedIn"
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
                                            value: "permissions"
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
                                                        value: "log"
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
                                                    value: "banning"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "timingOut"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
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
                                        value: "loggedIn"
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
                                            value: "isStaff"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 349
            }
        };
        n.loc.source = {
            body: "query CommunityModeration($name: String! $loggedIn: Boolean! $log: Boolean! $settings: Boolean!) {\ncommunity(name: $name) {\nid\nname\ndisplayName\nemail @include(if: $settings)\nowner {\nid\n}\nself @include(if: $loggedIn) {\npermissions @include(if: $log) {\nbanning\ntimingOut\n}\n}\n}\ncurrentUser @include(if: $loggedIn) {\nid\nroles {\nisStaff\nisSiteAdmin\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    npyu: function(e, t) {},
    odW7: function(e, t) {
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                                    value: "follow"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "followedAt"
                                                        },
                                                        arguments: [],
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
            }],
            loc: {
                start: 0,
                end: 161
            }
        };
        n.loc.source = {
            body: "mutation DirectoryFollowButton_FollowCommunity($input: FollowCommunityInput!) {\nfollowCommunity(input: $input) {\ncommunity {\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    plcU: function(e, t) {
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                            value: "name"
                                        },
                                        arguments: [],
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
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 159
            }
        };
        n.loc.source = {
            body: "mutation CommunityStreamTimeout_TimeoutUser($input: TimeoutUserFromCommunityInput!) {\ntimeoutUserFromCommunity(input: $input) {\ncommunity {\nid\nname\n}\nerror\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "qs/O": function(e, t) {
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                    value: "name"
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
                                            value: "follow"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "followedAt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
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
            body: "query DirectoryFollowButton_Community($name: String!) {\ncommunity(name: $name) {\nid\nname\nself {\nfollow {\nfollowedAt\n}\n}\n}\ncurrentUser {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    rujk: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o = n("GiK3"),
            r = n("CIox"),
            a = n("68hr"),
            s = n("TToO"),
            m = n("HW6M"),
            l = n("RH2O"),
            u = n("2KeS"),
            d = n("6sO2"),
            c = n("7vx8"),
            p = n("NXs7"),
            y = n("VAT8"),
            g = n("W/wc"),
            h = n("Odds"),
            v = n("A9xB"),
            f = (n("wyZy"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e, t, n, i = {};
                    this.props.data.loading || this.props.data.error || !this.props.data.community ? (e = o.createElement(h._14, {
                        width: 60,
                        height: 84
                    }), t = o.createElement(h._14, {
                        width: 300,
                        height: 29
                    }), n = o.createElement(h._14, {
                        width: 65,
                        height: 18
                    })) : (e = o.createElement(h.E, {
                        alt: Object(d.d)("Community Avatar", "CommunityModerationBanner"),
                        src: this.props.data.community.avatarURL || "",
                        size: h.F.Size6,
                        aspect: h.l.BoxArt
                    }), i = {
                        backgroundImage: "url(" + this.props.data.community.coverURL + ")"
                    }, t = o.createElement(h.Q, {
                        color: h.K.Overlay,
                        type: h._49.H3
                    }, this.props.data.community.displayName), n = o.createElement(h.Q, {
                        color: h.K.Overlay,
                        type: h._49.P
                    }, Object(d.d)("{followers, plural, one {# Follower} other {# Followers}}", {
                        followers: this.props.data.community.followersCount || 0
                    }, "CommunityModerationBanner")));
                    var r = m("community-moderation-banner", Object(y.c)(p.a.Dark));
                    return o.createElement(h._2, {
                        className: r,
                        position: h._15.Relative
                    }, o.createElement("div", {
                        style: i
                    }, o.createElement(h._8, {
                        position: h._15.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        attachTop: !0,
                        className: "community-moderation-banner__content",
                        padding: 3,
                        display: h.R.Flex,
                        flexDirection: h.T.Row,
                        justifyContent: h._7.Between,
                        alignItems: h.c.End
                    }, o.createElement(h._8, {
                        display: h.R.Flex,
                        flexDirection: h.T.Row,
                        alignItems: h.c.End
                    }, e, o.createElement(h._8, {
                        margin: {
                            left: 2
                        },
                        display: h.R.Flex,
                        flexDirection: h.T.Column
                    }, o.createElement(h.O, {
                        to: "/directory/communities"
                    }, o.createElement(h._24, {
                        asset: h._25.GlyphArrLeft,
                        height: 10,
                        width: 10
                    }), Object(d.d)("Communities", "CommunityModerationBanner")), t, n)), o.createElement(h._8, {
                        display: h.R.Flex,
                        flexDirection: h.T.Row,
                        alignItems: h.c.End
                    }, o.createElement(g.a, {
                        directoryName: this.props.communityName
                    }), o.createElement(h._8, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(h.v, {
                        icon: h._25.Check,
                        linkTo: "/communities/" + encodeURIComponent(this.props.communityName)
                    }, Object(d.d)("Done", "CommunityModerationBanner")))))))
                }, t
            }(o.Component)),
            k = Object(u.d)(Object(l.b)(function(e) {
                return {
                    isLoggedIn: !!e.session.user
                }
            }), Object(c.a)(v, {
                options: function(e) {
                    return {
                        variables: {
                            name: e.communityName,
                            loggedIn: e.isLoggedIn
                        }
                    }
                }
            }))(f),
            b = n("j7/Y"),
            _ = n("w9tK"),
            S = n("vH/s"),
            C = n("CSlQ"),
            N = n("oIkB"),
            E = n("V5M+"),
            w = n("9u8h"),
            O = n("/gww"),
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onSuccess = function() {
                        t.props.onSuccess(t.props.user)
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(O.a, {
                        communityID: this.props.communityID,
                        communityName: this.props.communityName,
                        userID: this.props.user.id,
                        username: this.props.user.login,
                        currentUserID: this.props.currentUserID,
                        onSuccess: this.onSuccess
                    })
                }, t
            }(o.Component),
            U = n("0w5y"),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onSuccess = function() {
                        t.props.onSuccess(t.props.user)
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(U.a, {
                        communityID: this.props.communityID,
                        communityName: this.props.communityName,
                        userID: this.props.user.id,
                        username: this.props.user.login,
                        currentUserID: this.props.currentUserID,
                        onSuccess: this.onSuccess
                    })
                }, t
            }(o.Component),
            F = n("zCIC"),
            I = n("puy8"),
            M = n("HM6l"),
            j = n("5LoI"),
            x = n("MAZT"),
            R = (n("5ghP"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        results: [],
                        searchText: "",
                        searching: !1
                    }, n.inputTimeout = 0, n.renderUsers = function(e) {
                        return o.createElement(h._8, {
                            padding: 1
                        }, e.map(function(e) {
                            return o.createElement(h._8, {
                                display: h.R.Flex,
                                flexDirection: h.T.Row,
                                key: "user-search-form-result:" + e.id,
                                justifyContent: h._7.Between,
                                alignItems: h.c.Center,
                                padding: {
                                    y: .5
                                }
                            }, o.createElement(h._8, {
                                display: h.R.Flex,
                                flexDirection: h.T.Row,
                                alignItems: h.c.Center
                            }, o.createElement(h._8, {
                                margin: {
                                    right: 1
                                }
                            }, o.createElement(h.m, {
                                src: e.avatarUrl,
                                size: 30,
                                alt: Object(d.d)("{user} Avatar", {
                                    user: e.displayName
                                }, "UserSearchForm")
                            })), o.createElement(h.Q, null, e.displayName)), o.createElement(h._8, {
                                display: h.R.Flex,
                                flexDirection: h.T.Row,
                                alignItems: h.c.Center
                            }, n.props.getUserContent(e)))
                        }))
                    }, n.onChange = function(e) {
                        var t = e.target.value;
                        clearTimeout(n.inputTimeout), n.setState({
                            searchText: t
                        }), t ? n.inputTimeout = setTimeout(function() {
                            return n.search(t)
                        }, 200) : n.setState({
                            searching: !1,
                            results: []
                        })
                    }, n.search = function(e) {
                        return s.__awaiter(n, void 0, void 0, function() {
                            var t, n;
                            return s.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.setState({
                                            searching: !0
                                        }), [4, this.searchClient.queryForType(j.a.Users, e, Object(M.a)(), {
                                            hitsPerPage: 10
                                        })];
                                    case 1:
                                        return t = i.sent(), this.inputTimeout && e === this.state.searchText && (n = t && t.users && this.normalizeSearchResults(t.users.hits) || [], this.setState({
                                            searching: !1,
                                            results: n
                                        })), [2]
                                }
                            })
                        })
                    }, n.normalizeSearchResults = function(e) {
                        return e.map(function(e) {
                            return {
                                id: e.objectID,
                                login: e.login,
                                displayName: e.name,
                                avatarUrl: e.profile_image || Object(I.c)(e.objectID, 30)
                            }
                        })
                    }, n.clearSearchText = function() {
                        n.setState({
                            searchText: "",
                            searching: !1,
                            results: []
                        })
                    }, n.searchClient = new x.a({
                        appId: d.a.algoliaApplicationID,
                        apiKey: d.a.algoliaAPIKey,
                        apolloClient: d.o.apollo.client,
                        logger: d.j,
                        config: d.a
                    }), t.clearSearchText && t.clearSearchText(n.clearSearchText), n
                }
                return s.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.clearSearchText && e.clearSearchText(this.clearSearchText)
                }, t.prototype.render = function() {
                    var e = m({
                        "user-search-form--disabled": this.state.searching || this.state.results.length > 0
                    });
                    return o.createElement(h._8, {
                        className: "user-search-form"
                    }, o.createElement(h._35, {
                        key: "user-search-form-input",
                        padding: 1,
                        border: !0
                    }, o.createElement(h._8, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(h.Q, {
                        fontSize: h.V.Size4
                    }, this.props.title)), this.props.description && o.createElement(h._8, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(h.Q, null, this.props.description)), o.createElement(h._8, {
                        margin: {
                            bottom: 1
                        },
                        position: h._15.Relative
                    }, o.createElement(h._4, {
                        type: h._5.Search,
                        placeholder: this.props.placeholder,
                        onChange: this.onChange,
                        icon: h._25.GlyphLive,
                        value: this.state.searchText
                    }), o.createElement(h.q, {
                        show: this.state.results.length > 0,
                        size: h.s.ExtraLarge,
                        direction: h.r.TopCenter
                    }, o.createElement(F.b, {
                        className: "user-search-form__results"
                    }, o.createElement(h._8, null, this.state.results.length > 0 && this.renderUsers(this.state.results)))))), this.props.displayUsers && this.props.displayUsers.length > 0 && o.createElement(h._35, {
                        key: "user-search-form-results",
                        className: e,
                        borderLeft: !0,
                        borderRight: !0,
                        borderBottom: !0
                    }, this.renderUsers(this.props.displayUsers)))
                }, t
            }(o.Component)),
            B = n("Wn5/"),
            A = n("2t7f"),
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        moderatedUsers: {}
                    }, t.logger = d.j.withCategory("community-channel-moderation"), t.clearSearchText = null, t.getButtonsForUser = function(e) {
                        var n = t.state.moderatedUsers[e.id];
                        if (n) {
                            var i = n.isBanned ? Object(d.d)("Unban", "CommunityChannelModeration") : Object(d.d)("Untimeout", "CommunityChannelModeration");
                            return t.renderButton(i, function() {
                                return t.unmoderateUser(n)
                            })
                        }
                        return o.createElement(h._8, {
                            display: h.R.Flex,
                            flexDirection: h.T.Row
                        }, t.props.userCanBan && t.renderButton(Object(d.d)("Ban", "CommunityChannelModeration"), function() {
                            return t.banUser(e)
                        }), t.props.userCanTimeout && t.renderButton(Object(d.d)("Timeout", "CommunityChannelModeration"), function() {
                            return t.timeoutUser(e)
                        }))
                    }, t.renderButton = function(e, t) {
                        return o.createElement(h._8, {
                            margin: {
                                left: .5
                            }
                        }, o.createElement(h.v, {
                            size: h.z.Small,
                            onClick: t,
                            type: h.B.Hollow,
                            blurAfterClick: !0
                        }, e))
                    }, t.fetchModeratedUsers = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, o;
                            return s.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.logger.debug("Loading moderated users"), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 4, , 5]), [4, w.a.get("/kraken/communities/" + e + "/bans?limit=100")];
                                    case 2:
                                        return t = r.sent(), [4, w.a.get("/kraken/communities/" + e + "/timeouts?limit=100")];
                                    case 3:
                                        return n = r.sent(), (t.error || t.requestError) && (n.error || n.requestError) ? (this.logger.warn("Error loading users", {
                                            banResponseError: t.error,
                                            banRequestError: t.requestError,
                                            timeoutResponseError: n.error,
                                            timeoutRequestError: n.requestError
                                        }), [2]) : (i = s.__assign({}, t.body && this.normalizeModeratedUsers(t.body.banned_users, !0), n.body && this.normalizeModeratedUsers(n.body.timed_out_users, !1)), this.setState({
                                            moderatedUsers: i
                                        }), this.logger.debug("Successfully loaded users"), [3, 5]);
                                    case 4:
                                        return o = r.sent(), this.logger.warn("Error loading users", o), [3, 5];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.normalizeModeratedUsers = function(e, t) {
                        return e.reduce(function(e, n) {
                            return e[n.user_id] = {
                                id: n.user_id,
                                login: n.name,
                                displayName: n.display_name,
                                avatarUrl: n.avatar_image_url,
                                isBanned: t
                            }, e
                        }, {})
                    }, t.banUser = function(e) {
                        t.props.showModal(T, {
                            user: e,
                            communityID: t.props.communityID,
                            communityName: t.props.communityName,
                            currentUserID: t.props.currentUserID,
                            onSuccess: t.onBanUserSuccess
                        })
                    }, t.timeoutUser = function(e) {
                        t.props.showModal(D, {
                            user: e,
                            communityID: t.props.communityID,
                            onSuccess: t.onTimeoutUserSuccess
                        })
                    }, t.onBanUserSuccess = function(e) {
                        t.clearSearchText && t.clearSearchText(), t.setState(function(t) {
                            var n = s.__assign({}, t.moderatedUsers);
                            return n[e.id] = s.__assign({}, e, {
                                isBanned: !0
                            }), {
                                moderatedUsers: n
                            }
                        })
                    }, t.onTimeoutUserSuccess = function(e) {
                        t.clearSearchText && t.clearSearchText(), t.setState(function(t) {
                            var n = s.__assign({}, t.moderatedUsers);
                            return n[e.id] = s.__assign({}, e, {
                                isBanned: !1
                            }), {
                                moderatedUsers: n
                            }
                        })
                    }, t.unmoderateUser = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return s.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        this.setState(function(t) {
                                            var n = s.__assign({}, t.moderatedUsers);
                                            return delete n[e.id], {
                                                moderatedUsers: n
                                            }
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), t = Object(N.a)({
                                            userID: e.id,
                                            communityID: this.props.communityID
                                        }), [4, (e.isBanned ? this.props.unbanUser : this.props.untimeoutUser)(t)];
                                    case 2:
                                        return i.sent(), this.props.track(S.SpadeEventType.CommunityModeration, {
                                            target_id: e.id,
                                            action: e.isBanned ? "unban" : "untimeout"
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), this.logger.warn("Could not unban user", n), this.setState(function(t) {
                                            var n;
                                            return {
                                                moderatedUsers: s.__assign({}, t.moderatedUsers, ((n = {})[e.id] = e, n))
                                            }
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.setClearSearchTextRef = function(e) {
                        return t.clearSearchText = e
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchModeratedUsers(this.props.communityID)
                }, t.prototype.render = function() {
                    var e = this,
                        t = Object.keys(this.state.moderatedUsers).map(function(t) {
                            return e.state.moderatedUsers[t]
                        });
                    return o.createElement(R, {
                        title: Object(d.d)("Channel Moderation", "CommunityChannelModeration"),
                        placeholder: Object(d.d)("Search to ban/timeout channels", "CommunityChannelModeration"),
                        displayUsers: t,
                        clearSearchText: this.setClearSearchTextRef,
                        getUserContent: this.getButtonsForUser,
                        description: Object(d.d)("If a channel is violating your rules, you can ban or timeout that channel from streaming to your community. Your moderation actions must adhere to our <x:link>Community Guidelines</x:link>.", {
                            "x:link": function(e) {
                                return o.createElement("a", {
                                    key: "community-guidelines",
                                    href: "https://www.twitch.tv/p/legal/community-guidelines/"
                                }, e)
                            }
                        }, "CommunityChannelModeration")
                    })
                }, t
            }(o.Component),
            V = Object(u.d)(Object(l.b)(null, function(e) {
                return Object(u.b)({
                    showModal: E.d
                }, e)
            }), Object(c.a)(B, {
                name: "unbanUser"
            }), Object(c.a)(A, {
                name: "untimeoutUser"
            }))(L),
            P = n("+xm8"),
            Q = n("f2i/"),
            q = "community-moderation-page-error-message";
        ! function(e) {
            e[e.Moderation = 0] = "Moderation", e[e.Settings = 1] = "Settings"
        }(i || (i = {}));
        var H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDefaultContent = function() {
                        return o.createElement(h._8, {
                            display: h.R.Flex,
                            flexDirection: h.T.Column
                        }, o.createElement(h._8, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(h.Q, {
                            type: h._49.H2
                        }, Object(d.d)("Moderation", "CommunityModerationPage"))), o.createElement(h._8, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(h._37, null, o.createElement(h._36, {
                            linkTo: "/communities/" + t.props.match.params.encodedCommunityName + "/moderation/log",
                            active: t.props.activeTab === i.Moderation
                        }, Object(d.d)("Moderation", "CommunityModerationPageTab")), t.props.showSettingsTab && o.createElement(h._36, {
                            linkTo: "/communities/" + t.props.match.params.encodedCommunityName + "/moderation/settings",
                            active: t.props.activeTab === i.Settings
                        }, Object(d.d)("Settings", "CommunityModerationPageTab")))), t.props.children)
                    }, t.renderErrorMessage = function(e) {
                        return o.createElement(h._8, {
                            display: h.R.Flex,
                            flexDirection: h.T.Row,
                            alignItems: h.c.Center,
                            justifyContent: h._7.Center,
                            padding: 5,
                            "data-test-selector": q
                        }, o.createElement(h.Q, {
                            italic: !0,
                            fontSize: h.V.Size4
                        }, e))
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.isLoggedIn || this.props.login()
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? this.props.loading ? o.createElement(h._10, {
                        fillContent: !0
                    }) : this.props.error ? this.renderErrorMessage(Object(d.d)("Error loading data. Please try again.", "CommunityModerationPage")) : this.props.userHasPermissionToView ? this.renderDefaultContent() : this.renderErrorMessage(Object(d.d)("You don't have permission to perform that action.", "CommunityModerationPage")) : this.renderErrorMessage(Object(d.d)("You're not logged in.", "CommunityModerationPage"))
                }, t
            }(o.Component),
            G = Object(u.d)(r.f, Object(l.b)(function(e) {
                return {
                    isLoggedIn: !!e.session.user
                }
            }, function(e) {
                return Object(u.b)({
                    login: function() {
                        return Object(Q.f)(P.a.CommunityModeration)
                    }
                }, e)
            }))(H),
            $ = n("nSoa");

        function z(e) {
            return function(t) {
                var n = function(e) {
                    function n() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.logger = d.j.withCategory("with-community-moderation"), t.track = function(e, n) {
                            var i = t.props.data.community,
                                o = t.props.currentUser,
                                r = t.props.data.currentUser && t.props.data.currentUser.roles;
                            if (i && o) {
                                var a = s.__assign({
                                    community_id: i.id,
                                    community_name: i.name,
                                    display_name: i.displayName,
                                    login: o.login,
                                    user_id: o.id,
                                    is_subadmin: r && r.isSiteAdmin || !1,
                                    is_admin: r && r.isStaff
                                }, n);
                                d.n.track(e, a)
                            } else t.logger.warn("Failed to track community moderation event")
                        }, t.isCommunityOwner = function() {
                            var e = t.props.data.community;
                            return e && t.props.currentUser && e.owner && e.owner.id === t.props.currentUser.id || !1
                        }, t
                    }
                    return s.__extends(n, e), n.prototype.render = function() {
                        var e = {
                            communityModeration: {
                                community: this.props.data.community,
                                currentUserID: this.props.currentUser && this.props.currentUser.id || "",
                                loading: this.props.data.loading,
                                error: this.props.data.error,
                                track: this.track,
                                isCommunityOwner: this.isCommunityOwner()
                            }
                        };
                        return o.createElement(t, s.__assign({}, e, this.props))
                    }, n
                }(o.Component);
                return Object(u.d)(r.f, Object(l.b)(function(e) {
                    return {
                        currentUser: e.session.user ? {
                            id: e.session.user.id,
                            login: e.session.user.login
                        } : null
                    }
                }), Object(c.a)($, {
                    options: function(t) {
                        return {
                            variables: {
                                name: decodeURIComponent(t.match.params.encodedCommunityName),
                                loggedIn: !!t.currentUser,
                                log: !!e.log,
                                settings: !!e.settings
                            }
                        }
                    }
                }))(n)
            }
        }
        var K, Y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.communityModeration.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function(e) {
                    e.communityModeration.loading && !this.props.communityModeration.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.communityModeration.community,
                        t = this.props.communityModeration.loading && !this.props.communityModeration.community,
                        n = !(this.props.communityModeration.loading || !this.props.communityModeration.error && this.props.communityModeration.community),
                        r = e && e.self && e.self.permissions,
                        a = r && (r.banning || r.timingOut) || !1,
                        s = null;
                    return e && (s = o.createElement(V, {
                        communityID: e.id,
                        communityName: e.name,
                        currentUserID: this.props.communityModeration.currentUserID,
                        userCanBan: r && r.banning || !1,
                        userCanTimeout: r && r.timingOut || !1,
                        track: this.props.communityModeration.track
                    })), o.createElement(G, {
                        loading: t,
                        error: n,
                        userHasPermissionToView: a,
                        activeTab: i.Moderation,
                        showSettingsTab: this.props.communityModeration.isCommunityOwner
                    }, s)
                }, t
            }(o.Component),
            W = Object(u.d)(Object(C.d)("CommunityModerationLogPage", {
                autoReportInteractive: !0,
                destination: _.a.CommunityModeration
            }), Object(b.a)({
                location: S.PageviewLocation.CommunityModerationLog
            }), z({
                log: !0
            }))(Y);
        ! function(e) {
            e.TwoFactor = "two_factor_not_enabled", e.EmailVerification = "unverified_email"
        }(K || (K = {}));
        var Z, J = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        working: !1,
                        error: null
                    }, t.logger = d.j.withCategory("community-leader-modal"), t.onClickSave = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, o;
                            return s.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.setState({
                                            working: !0,
                                            error: null
                                        }), e = Object(d.d)("Failed to save. Please try again.", "CommunityLeaderModal"), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), this.logger.debug("Saving new community leader"), [4, w.a.put("/kraken/communities/" + this.props.communityID, {
                                            headers: {
                                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                                            },
                                            body: "owner_user_id=" + this.props.user.id
                                        })];
                                    case 2:
                                        return t = r.sent(), n = null, t.requestError ? n = e : t.error && (i = t.error.message, n = i === K.TwoFactor ? Object(d.d)("User does not have Two Factor Authorization enabled.", "CommunityLeaderModal") : i === K.EmailVerification ? Object(d.d)("User has not verified their email.", "CommunityLeaderModal") : e), n ? (this.setState({
                                            working: !1,
                                            error: n
                                        }), [2]) : (this.props.closeModal(), this.props.onSuccess(this.props.user.id), [3, 4]);
                                    case 3:
                                        return o = r.sent(), this.logger.warn("Failed to change community leader", o), this.setState({
                                            working: !1,
                                            error: e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(h._35, {
                        padding: 2,
                        background: h.n.Base,
                        className: "ban-user-modal"
                    }, o.createElement(h.Q, {
                        fontSize: h.V.Size4
                    }, Object(d.d)("Are you sure you want to make {user} the new community leader?", {
                        user: this.props.user.displayName
                    }, "CommunityLeaderModal")), o.createElement(h._35, {
                        margin: {
                            y: 2
                        },
                        borderBottom: !0
                    }, o.createElement(h._8, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(h.Q, null, Object(d.d)("By changing this setting you will no longer be community leader. This action is irreversible.", "CommunityLeaderModal"))), this.state.error && o.createElement(h._8, {
                        margin: {
                            bottom: 1
                        },
                        "data-test-selector": "community-leader-modal-error"
                    }, o.createElement(h.Q, {
                        color: h.K.Error
                    }, this.state.error))), o.createElement(h._8, {
                        display: h.R.Flex,
                        flexDirection: h.T.Row,
                        alignItems: h.c.Center,
                        justifyContent: h._7.Center
                    }, o.createElement(h.v, {
                        type: h.B.Text,
                        onClick: this.props.closeModal
                    }, Object(d.d)("Cancel", "CommunityLeaderModal")), o.createElement(h._8, {
                        margin: {
                            left: 2
                        }
                    }, o.createElement(h.v, {
                        onClick: this.onClickSave,
                        state: this.state.working ? h.A.Loading : h.A.Default
                    }, Object(d.d)("Save", "CommunityLeaderModal")))))
                }, t
            }(o.Component),
            X = Object(l.b)(null, function(e) {
                return Object(u.b)({
                    closeModal: E.c
                }, e)
            })(J),
            ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getButtonForUser = function(e) {
                        if (e.id === t.props.currentUserID) return null;
                        return o.createElement(h._8, {
                            margin: {
                                left: .5
                            }
                        }, o.createElement(h.v, {
                            size: h.z.Small,
                            onClick: function() {
                                return t.onClickSave(e)
                            },
                            type: h.B.Hollow,
                            blurAfterClick: !0
                        }, Object(d.d)("Save", "CommunityLeader")))
                    }, t.onClickSave = function(e) {
                        t.props.showModal(X, {
                            user: e,
                            communityID: t.props.communityID,
                            onSuccess: t.props.onChange
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(R, {
                        title: Object(d.d)("Community Leader", "CommunityLeader"),
                        placeholder: Object(d.d)("Search to choose a different leader for this community", "CommunityLeader"),
                        getUserContent: this.getButtonForUser
                    })
                }, t
            }(o.Component),
            te = Object(l.b)(function(e) {
                return {
                    currentUserID: e.session.user && e.session.user.id || null
                }
            }, function(e) {
                return Object(u.b)({
                    showModal: E.d
                }, e)
            })(ee),
            ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        moderators: {}
                    }, t.logger = d.j.withCategory("community-moderators"), t.getButtonForUser = function(e) {
                        return t.state.moderators[e.id] ? t.renderButton(Object(d.d)("Remove", "CommunityModerators"), function() {
                            return t.onClickRemove(e)
                        }) : t.renderButton(Object(d.d)("Add", "CommunityModerators"), function() {
                            return t.onClickAdd(e)
                        })
                    }, t.renderButton = function(e, t) {
                        return o.createElement(h._8, {
                            margin: {
                                left: .5
                            }
                        }, o.createElement(h.v, {
                            size: h.z.Small,
                            onClick: t,
                            type: h.B.Hollow,
                            blurAfterClick: !0
                        }, e))
                    }, t.onClickAdd = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return s.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState(function(t) {
                                            var n = s.__assign({}, t.moderators);
                                            return n[e.id] = e, {
                                                moderators: n
                                            }
                                        }), this.logger.debug("Adding moderator"), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, w.a.putOrThrow("/kraken/communities/" + this.props.communityID + "/moderators/" + e.id)];
                                    case 2:
                                        return n.sent(), this.props.track(S.SpadeEventType.CommunityRoleEdit, {
                                            target_id: e.id,
                                            edit_role: "moderator",
                                            action: "add"
                                        }), this.logger.debug("Successfully added moderator"), [3, 4];
                                    case 3:
                                        return t = n.sent(), this.logger.warn("Failed to add moderator", {
                                            err: t
                                        }), this.setState(function(t) {
                                            var n = s.__assign({}, t.moderators);
                                            return delete n[e.id], {
                                                moderators: n
                                            }
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onClickRemove = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return s.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState(function(t) {
                                            var n = s.__assign({}, t.moderators);
                                            return delete n[e.id], {
                                                moderators: n
                                            }
                                        }), this.logger.debug("Removing moderator"), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, w.a.deleteOrThrow("/kraken/communities/" + this.props.communityID + "/moderators/" + e.id)];
                                    case 2:
                                        return n.sent(), this.props.track(S.SpadeEventType.CommunityRoleEdit, {
                                            target_id: e.id,
                                            edit_role: "moderator",
                                            action: "remove"
                                        }), this.logger.debug("Successfully removed moderator"), [3, 4];
                                    case 3:
                                        return t = n.sent(), this.logger.warn("Failed to remove moderator", {
                                            err: t
                                        }), this.setState(function(t) {
                                            var n = s.__assign({}, t.moderators);
                                            return n[e.id] = e, {
                                                moderators: n
                                            }
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.fetchModerators = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return s.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        this.logger.debug("Fetching moderators"), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, w.a.getOrThrow("/kraken/communities/" + this.props.communityID + "/moderators")];
                                    case 2:
                                        return e = i.sent(), t = this.normalizeModerators(e.body.moderators), this.setState({
                                            moderators: t
                                        }), this.logger.debug("Successfully fetched moderators"), [3, 4];
                                    case 3:
                                        return n = i.sent(), this.logger.warn("Failed fetching moderators", {
                                            err: n
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.normalizeModerators = function(e) {
                        return e.reduce(function(e, t) {
                            return e[t._id] = {
                                id: t._id,
                                login: t.name,
                                displayName: t.display_name,
                                avatarUrl: t.logo
                            }, e
                        }, {})
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchModerators()
                }, t.prototype.render = function() {
                    var e = this,
                        t = Object.keys(this.state.moderators).map(function(t) {
                            return e.state.moderators[t]
                        });
                    return o.createElement(R, {
                        title: Object(d.d)("Moderators", "CommunityModerators"),
                        placeholder: Object(d.d)("Search to add moderators", "CommunityModerators"),
                        description: Object(d.d)("Moderators can help you manage your community by banning or timing out channels that violate your rules.", "CommunityModerators"),
                        getUserContent: this.getButtonForUser,
                        displayUsers: t
                    })
                }, t
            }(o.Component),
            ie = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onInputChange = function(e) {
                        var t = e.target.value;
                        n.setState({
                            value: t
                        })
                    }, n.onClickSave = function() {
                        n.props.onClickSave(n.state.value)
                    }, n.state = {
                        value: t.initialValue
                    }, n
                }
                return s.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.initialValue !== this.props.initialValue && this.setState({
                        value: e.initialValue
                    })
                }, t.prototype.render = function() {
                    return o.createElement(h._8, null, o.createElement(h._8, {
                        margin: {
                            bottom: .5
                        }
                    }, o.createElement(h.Q, {
                        bold: !0
                    }, this.props.title)), this.props.description && o.createElement(h._8, {
                        margin: {
                            bottom: .5
                        }
                    }, o.createElement(h.Q, null, this.props.description)), o.createElement(h._8, {
                        display: h.R.Flex,
                        flexDirection: h.T.Row,
                        alignItems: h.c.Center,
                        justifyContent: h._7.Between
                    }, o.createElement(h._8, {
                        flexGrow: 1
                    }, o.createElement(h._4, {
                        type: h._5.Text,
                        value: this.state.value,
                        onChange: this.onInputChange
                    })), o.createElement(h._8, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(h.v, {
                        state: this.props.saving ? h.A.Loading : h.A.Default,
                        onClick: this.onClickSave,
                        disabled: !this.state.value || this.state.value === this.props.initialValue
                    }, Object(d.d)("Save", "CommunitySettingInput")))), this.props.error && o.createElement(h._8, {
                        margin: {
                            bottom: 1
                        },
                        "data-test-selector": "community-setting-input-error"
                    }, o.createElement(h.Q, {
                        color: h.K.Error
                    }, this.props.error)))
                }, t
            }(o.Component);
        ! function(e) {
            e.DESCRIPTION_TOO_LONG = "DESCRIPTION_TOO_LONG", e.DISPLAY_NAME_INVALID = "DISPLAY_NAME_INVALID", e.REQUESTING_USER_NOT_PERMITTED = "REQUESTING_USER_NOT_PERMITTED", e.RULES_TOO_LONG = "RULES_TOO_LONG", e.SUMMARY_TOO_LONG = "SUMMARY_TOO_LONG"
        }(Z || (Z = {}));
        var oe = n("1MwX"),
            re = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        error: null
                    }, t.logger = d.j.withCategory("display-name-input"), t.onClickSave = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, o;
                            return s.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.setState({
                                            saving: !0,
                                            error: null
                                        }), this.logger.debug("Saving community display name"), t = Object(d.d)("Failed to save. Please try again.", "DisplaynameInput"), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.updateCommunity(Object(N.a)({
                                            communityID: this.props.communityID,
                                            displayName: e
                                        }))];
                                    case 2:
                                        return n = r.sent(), i = null, n.data.editCommunity ? n.data.editCommunity.error && (i = n.data.editCommunity.error === Z.DISPLAY_NAME_INVALID ? Object(d.d)("Display name is invalid.", "DisplayNameInput") : t) : i = t, i ? (this.logger.warn("Failed saving community display name"), this.setState({
                                            saving: !1,
                                            error: i
                                        }), [2]) : (this.logger.debug("Success saving community display name"), this.setState({
                                            saving: !1,
                                            error: null
                                        }), [3, 4]);
                                    case 3:
                                        return o = r.sent(), this.logger.warn("Failed saving community display name", {
                                            err: o
                                        }), this.setState({
                                            saving: !1,
                                            error: t
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(ie, {
                        initialValue: this.props.displayName,
                        onClickSave: this.onClickSave,
                        saving: this.state.saving,
                        error: this.state.error,
                        title: Object(d.d)("Display Name", "DisplayNameInput")
                    })
                }, t
            }(o.Component),
            ae = Object(c.a)(oe, {
                name: "updateCommunity"
            })(re),
            se = n("OAwv"),
            me = n("BBZ2"),
            le = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        error: null
                    }, t.logger = d.j.withCategory("moderation-email-input"), t.onClickSave = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return s.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        this.setState({
                                            saving: !0,
                                            error: null
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), t = se.stringify({
                                            email: e
                                        }), [4, w.a.putOrThrow("/kraken/communities/" + this.props.communityID, {
                                            headers: {
                                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                                            },
                                            body: t
                                        })];
                                    case 2:
                                        return i.sent(), this.setState({
                                            saving: !1,
                                            error: null
                                        }), Object(N.e)(me, {
                                            name: this.props.communityName
                                        }, function(t) {
                                            return t.community ? s.__assign({}, t, {
                                                community: s.__assign({}, t.community, {
                                                    email: e
                                                })
                                            }) : t
                                        }), this.logger.debug("Successfully saved email."), [3, 4];
                                    case 3:
                                        return n = i.sent(), this.logger.warn("Failed saving email.", {
                                            err: n
                                        }), this.setState({
                                            saving: !1,
                                            error: Object(d.d)("Failed to save. Please try again.", "ModerationEmailInput")
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(ie, {
                        initialValue: this.props.email,
                        onClickSave: this.onClickSave,
                        saving: this.state.saving,
                        error: this.state.error,
                        title: Object(d.d)("Moderation email address", "ModerationEmailInput"),
                        description: Object(d.d)("Used to receive email notifications when channels are reported for violating your Community's rules or when a moderation action is taken. <x:link>Learn more</x:link>.", {
                            "x:link": function(e) {
                                return o.createElement("a", {
                                    href: "https://help.twitch.tv/customer/portal/articles/2737498-communities-policies-and-guide",
                                    key: "community-policy-link"
                                }, e)
                            }
                        }, "ModerationEmailInput")
                    })
                }, t
            }(o.Component),
            ue = (n("eFj+"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChangeCommunityLeader = function(e) {
                        t.props.communityModeration.track(S.SpadeEventType.CommunityRoleEdit, {
                            target_id: e,
                            edit_role: "owner",
                            action: "add"
                        }), t.props.history.push("/communities/" + t.props.match.params.encodedCommunityName)
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.communityModeration.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function(e) {
                    e.communityModeration.loading && !this.props.communityModeration.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.communityModeration.loading && !this.props.communityModeration.community,
                        t = !(this.props.communityModeration.loading || !this.props.communityModeration.error && this.props.communityModeration.community),
                        n = this.props.communityModeration.community,
                        r = n && n.id || "";
                    return o.createElement(G, {
                        loading: e,
                        error: t,
                        userHasPermissionToView: this.props.communityModeration.isCommunityOwner,
                        activeTab: i.Settings,
                        showSettingsTab: !0
                    }, o.createElement(te, {
                        communityID: r,
                        onChange: this.onChangeCommunityLeader
                    }), o.createElement(h._35, {
                        border: !0,
                        padding: 1,
                        margin: {
                            y: 1
                        },
                        className: "community-moderation-settings__inputs"
                    }, o.createElement(ae, {
                        displayName: n && n.displayName || "",
                        communityID: r
                    }), o.createElement(h._8, {
                        margin: {
                            top: 2
                        }
                    }, o.createElement(le, {
                        email: n && n.email || "",
                        communityID: r,
                        communityName: n && n.name || ""
                    }))), o.createElement(h._8, {
                        margin: {
                            top: 1
                        }
                    }, o.createElement(ne, {
                        communityID: r,
                        track: this.props.communityModeration.track
                    })))
                }, t
            }(o.Component)),
            de = Object(u.d)(Object(C.d)("CommunityModerationSettingsPage", {
                destination: _.a.CommunityModeration
            }), Object(b.a)({
                location: S.PageviewLocation.CommunityModerationSettings
            }), r.f, z({
                settings: !0
            }))(ue),
            ce = function(e) {
                return o.createElement(r.b, {
                    to: "/communities/" + e.match.params.encodedCommunityName + "/moderation/log"
                })
            },
            pe = function(e) {
                return e.match.params.page && "log" !== e.match.params.page && "settings" !== e.match.params.page ? o.createElement(a.a, null) : o.createElement(h._8, null, o.createElement(k, {
                    communityName: decodeURIComponent(e.match.params.encodedCommunityName)
                }), o.createElement(h._8, {
                    padding: 3
                }, o.createElement(r.e, null, o.createElement(r.c, {
                    path: "/communities/:encodedCommunityName/moderation/log",
                    component: W
                }), o.createElement(r.c, {
                    path: "/communities/:encodedCommunityName/moderation/settings",
                    component: de
                }), o.createElement(r.c, {
                    path: "/communities/:encodedCommunityName/moderation",
                    exact: !0,
                    render: ce
                }), o.createElement(r.c, {
                    path: "/communities/:encodedCommunityName/",
                    component: a.a
                }))))
            },
            ye = Object(r.f)(pe);
        n.d(t, "CommunityModerationRootPresentation", function() {
            return pe
        }), n.d(t, "CommunityModerationRoot", function() {
            return ye
        })
    },
    sJt0: function(e, t) {},
    wyZy: function(e, t) {}
});
//# sourceMappingURL=pages.community-moderation-154fd45d19ffdf996ba0915f19cef79d.js.map