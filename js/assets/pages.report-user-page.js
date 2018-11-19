(window.webpackJsonp = window.webpackJsonp || []).push([
    [40], {
        "0hI/": function(e, t) {
            var r = {
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
            r.loc.source = {
                body: "query ReportUserModal_ReportUserData($targetUserID: ID!) {\ntargetUser: user(id: $targetUserID lookupType: ALL) {\nid\nlogin\ndisplayName\n}\ncurrentUser {\nid\nblockedUsers {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        "8GWH": function(e, t) {
            var r = {
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
                                value: "targetLogin"
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
                                    value: "login"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "targetLogin"
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
            r.loc.source = {
                body: "query ReportUserPage_User($targetLogin: String!) {\ntargetUser: user(login: $targetLogin lookupType: ALL) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        "8jSG": function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "blockedUsers"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "User"
                        }
                    },
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
                }],
                loc: {
                    start: 0,
                    end: 56
                }
            };
            r.loc.source = {
                body: "fragment blockedUsers on User {\nid\nblockedUsers {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        BhFH: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return l
            });
            var n = r("mrSG"),
                o = r("yR8l"),
                a = r("8jSG"),
                i = r("cMjZ"),
                s = r("kSkr");

            function l() {
                var e = this;
                return Object(o.a)(s, {
                    props: function(t) {
                        return {
                            blockUserMutation: function(r, o, s, l) {
                                return n.__awaiter(e, void 0, void 0, function() {
                                    return n.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: {
                                                            targetUserID: r,
                                                            sourceContext: s,
                                                            reason: o
                                                        }
                                                    },
                                                    optimisticResponse: {
                                                        blockUser: {
                                                            __typename: "BlockUserPayload",
                                                            targetUser: {
                                                                __typename: "User",
                                                                id: r
                                                            }
                                                        }
                                                    },
                                                    update: function(e) {
                                                        var t = e.readFragment({
                                                            id: Object(i.a)(l),
                                                            fragment: a
                                                        });
                                                        t && (t.blockedUsers.push({
                                                            id: r,
                                                            __typename: "User"
                                                        }), e.writeFragment({
                                                            id: Object(i.a)(l),
                                                            fragment: a,
                                                            data: t
                                                        }))
                                                    }
                                                })] : [3, 2];
                                            case 1:
                                                return e.sent(), [3, 3];
                                            case 2:
                                                throw new Error("blockUserMutation is not ready");
                                            case 3:
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
        MPK0: function(e, t, r) {},
        O3Y9: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return n
            }), r.d(t, "b", function() {
                return i
            });
            var n, o = r("/7QA"),
                a = r("2xye");

            function i(e) {
                o.p.tracking.track(a.SpadeEventType.WhisperIgnoreUser, {
                    ui_context: e.context,
                    from_login: e.currentUserLogin,
                    ignored_login: e.targetUserLogin
                })
            }! function(e) {
                e.ViewerCard = "chat_card", e.ReportWizard = "report_wizard"
            }(n || (n = {}))
        },
        RQ6e: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                o = r("TSYQ"),
                a = r("q1tI"),
                i = r("/7QA"),
                s = r("fvjX"),
                l = r("yR8l"),
                c = r("GnwI");
            var u = r("Ue10"),
                d = r("gIsd"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleChange = function(e) {
                            t.props.onChange && t.props.onChange(e.target.value)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null,
                            t = Object(i.d)("Select One...", "ReportUserModal");
                        this.props.data.loading ? e = [a.createElement("option", {
                            key: "Loading"
                        }, Object(i.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || [{
                            id: "other",
                            text: Object(i.d)("Other Terms of Service Violation", "ReportUserModal")
                        }]).map(function(e) {
                            return a.createElement("option", {
                                key: e.id,
                                value: e.id
                            }, e.text)
                        });
                        return a.createElement(u.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(u.Ea, {
                            id: "reporting-modal__select",
                            label: Object(i.d)("Select Reason (required)", "ReportUserModal")
                        }, a.createElement(u.Ab, {
                            id: "reporting-modal__select",
                            "data-test-selector": "reporting-modal.select",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.handleChange,
                            defaultValue: t
                        }, a.createElement("option", {
                            disabled: !0,
                            key: "default"
                        }, t), e)))
                    }, t
                }(a.Component),
                m = Object(s.compose)(Object(l.a)(d, {
                    options: function(e) {
                        return {
                            variables: {
                                content: e.reportContentType
                            }
                        }
                    }
                }), Object(c.b)("ReportReasonSelect"))(p);
            r("y4Ne");
            r.d(t, "a", function() {
                return g
            }), r.d(t, "b", function() {
                return h
            });
            var g;
            ! function(e) {
                e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError"
            }(g || (g = {}));
            var h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        description: "",
                        reason: null
                    }, t.headerMessage = Object(i.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: a.createElement("br", null),
                        tosLink: a.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(i.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.handleSubmit = function(e) {
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description) : t.props.onError(g.FormError)
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
                return n.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(u.Ya, {
                        display: u.X.Flex,
                        flexDirection: u.Aa.Column,
                        alignItems: u.f.Center,
                        justifyContent: u.Xa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === g.Success ? a.createElement("div", null, a.createElement(u.z, {
                        onClick: this.props.onClose
                    }, a.createElement(u.Ya, {
                        padding: {
                            x: 2
                        }
                    }, Object(i.d)("Close", "ReportUser")))) : a.createElement("div", null, a.createElement(u.Ya, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, a.createElement(u.W, {
                        type: u.Wb.H4
                    }, this.props.title), a.createElement(u.Fb, {
                        color: u.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), a.createElement("form", null, a.createElement(u.Fb, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, a.createElement(m, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), a.createElement(u.Ea, {
                        id: "reporting__text-area",
                        label: Object(i.d)("Description (required)", "ReportUser")
                    }, a.createElement(u.Tb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), a.createElement(u.Fb, {
                        display: u.X.Flex,
                        justifyContent: u.Xa.Center
                    }, a.createElement(u.z, {
                        onClick: this.handleSubmit
                    }, a.createElement(u.Ya, {
                        padding: {
                            x: 2
                        }
                    }, Object(i.d)("Send", "ReportUser"))))))
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case g.FormError:
                            e = Object(i.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case g.MutationError:
                            e = Object(i.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case g.Success:
                            e = Object(i.d)("Thank you for your report.", "ReportUser");
                            break;
                        case g.UserError:
                            e = Object(i.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = o({
                        "reporting__error-container": this.props.submitStatus !== g.Success,
                        "reporting__success-container": this.props.submitStatus === g.Success
                    });
                    return a.createElement(u.Fb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== g.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(a.Component)
        },
        cMjZ: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return o
            });
            var n = r("o4DC");

            function o(e) {
                return e && Object(n.c)(e) || ""
            }
        },
        dAHa: function(e, t, r) {
            "use strict";
            var n, o, a = r("mrSG"),
                i = r("q1tI"),
                s = r("/MKj"),
                l = r("fvjX"),
                c = r("/7QA"),
                u = r("yR8l"),
                d = r("BhFH"),
                p = r("iS14"),
                m = r("geRD"),
                g = r("O3Y9"),
                h = r("f00E"),
                v = r("D7An"),
                f = r("DMoW"),
                b = r("2xye"),
                k = r("GnwI"),
                y = r("QVaV"),
                R = r("Ue10"),
                T = (r("MPK0"), "report-wizard-block"),
                _ = "report-wizard-unblock",
                C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return i.createElement(R.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": T
                            }, i.createElement(R.Ya, {
                                display: R.X.Flex,
                                alignItems: R.f.Center
                            }, i.createElement(R.tb, {
                                type: R.vb.Brand,
                                asset: R.ub.Ban
                            }), i.createElement(R.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Block {user}", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return i.createElement(R.Ya, {
                                className: "reporting-wizard__block-actions",
                                display: R.X.Flex,
                                alignItems: R.f.Center
                            }, i.createElement(R.tb, {
                                type: R.vb.Success,
                                asset: R.ub.FollowCheck
                            }), i.createElement(R.Ya, {
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(R.W, {
                                className: "block-user__success",
                                type: R.Wb.Span
                            }, Object(c.d)("{user} blocked", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))), i.createElement(R.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": _
                            }, i.createElement(R.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Unblock", "ReportWizardBlockActions"))))
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
                        }, t.displayName = function() {
                            var e = t.props.targetUser.displayName,
                                r = t.props.targetUser.login;
                            return e || (r || "")
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(y.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return i.createElement(R.Fb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, i.createElement(R.Ya, null, Object(c.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), i.createElement(R.Fb, {
                            color: R.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, i.createElement(R.fc, {
                            baseFontSize: R.Ca.Size6
                        }, i.createElement("p", null, Object(c.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), i.createElement("ul", null, i.createElement("li", null, Object(c.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), i.createElement("li", null, Object(c.d)("Prevent them from hosting you", "ReportWizardBlockActions")), i.createElement("li", null, Object(c.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), i.createElement("li", null, Object(c.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), i.createElement(R.Ya, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(i.Component);
            ! function(e) {
                e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
            }(n || (n = {})),
            function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(o || (o = {}));
            var S, O = {
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
                M = {
                    input_description: {
                        getTitle: function() {
                            return Object(c.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: o.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(c.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: o.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(c.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: o.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: o.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(c.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: o.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: o.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(c.d)("Please submit a report to the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: o.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(c.d)("If you feel you are in immediate danger, please contact your local law enforcement.", "ReportModalWizard")
                        },
                        type: o.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(c.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: o.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(c.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: o.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(c.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: o.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(c.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: o.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(c.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: o.Link
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
                            return Object(c.d)("They're participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: n.Harassment
                    },
                    violence: {
                        getTitle: function() {
                            return Object(c.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: n.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(c.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: n.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(c.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: n.Other
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
                        reportReason: n.Spam
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
                        reportReason: n.Impersonation
                    },
                    underage: {
                        getTitle: function() {
                            return Object(c.d)("They're underage (12 or younger)", "ReportModalWizard")
                        },
                        value: "underage",
                        reportReason: n.Underaged
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
                        reportReason: n.Other
                    },
                    inappropriateBadge: {
                        getTitle: function() {
                            return Object(c.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                        },
                        value: "emote/subscriber badge",
                        reportReason: n.Other
                    },
                    noModeration: {
                        getTitle: function() {
                            return Object(c.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                        },
                        value: "not moderating chat",
                        reportReason: n.Other
                    },
                    inappropriateExtension: {
                        getTitle: function() {
                            return Object(c.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: n.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(c.d)("They're cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: n.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(c.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: n.BitsViolation
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(c.d)("Their content is labeled incorrectly", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: n.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(c.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: n.Miscategorized
                    },
                    video_general: {
                        getTitle: O.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(c.d)("They're using hate speech, hateful symbols, or hateful media", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: n.HatefulConduct
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(c.d)("They're harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: n.Harassment
                    },
                    abusiveViolence: {
                        getTitle: O.abusiveViolence,
                        value: "threatening violence",
                        reportReason: n.Harm
                    },
                    commitingViolence: {
                        getTitle: O.commitingViolence,
                        value: "committing violence",
                        reportReason: n.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(c.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: n.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(c.d)("They're purposely revealing personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: n.Harassment
                    },
                    threat_me: {
                        getTitle: function() {
                            return Object(c.d)("At me", "ReportModalWizard")
                        },
                        value: "against me",
                        reportReason: n.Harm
                    },
                    threat_person: {
                        getTitle: function() {
                            return Object(c.d)("At someone else", "ReportModalWizard")
                        },
                        value: "against another person",
                        reportReason: n.Harm
                    },
                    threat_group: {
                        getTitle: function() {
                            return Object(c.d)("At a group of people", "ReportModalWizard")
                        },
                        value: "against group of people",
                        reportReason: n.Harm
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
                        reportReason: n.Prohibited
                    },
                    sexuallyViolent: {
                        getTitle: function() {
                            return Object(c.d)("Violent sexual conduct", "ReportModalWizard")
                        },
                        value: "sexually violent",
                        reportReason: n.SexualViolence
                    },
                    childAnimal: {
                        getTitle: function() {
                            return Object(c.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                        },
                        value: "sexual conduct; child or animal",
                        reportReason: n.SexualViolence
                    },
                    pornographic: {
                        getTitle: function() {
                            return Object(c.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                        },
                        value: "pornographic",
                        reportReason: n.SexualContent
                    },
                    gory: {
                        getTitle: function() {
                            return Object(c.d)("Extreme violence or gore", "ReportModalWizard")
                        },
                        value: "gory",
                        reportReason: n.Gore
                    },
                    suggestive: {
                        getTitle: function() {
                            return Object(c.d)("Sexually suggestive content", "ReportModalWizard")
                        },
                        value: "sexually suggestive",
                        reportReason: n.SexualContent
                    },
                    nudity: {
                        getTitle: function() {
                            return Object(c.d)("Full or partial nudity", "ReportModalWizard")
                        },
                        value: "nudity",
                        reportReason: n.SexualContent
                    },
                    other: {
                        getTitle: function() {
                            return Object(c.d)("There's something else wrong with it...", "ReportModalWizard")
                        },
                        value: "other",
                        reportReason: n.Other
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
                        reportReason: n.TosBanEvasion
                    },
                    evasion_chat: {
                        getTitle: function() {
                            return Object(c.d)("A chat ban from one or more channels", "ReportModalWizard")
                        },
                        value: "chat ban",
                        reportReason: n.ChatBanEvasion
                    },
                    evasion_messaging: {
                        getTitle: function() {
                            return Object(c.d)("A block from messaging me", "ReportModalWizard")
                        },
                        value: "messaging block",
                        reportReason: n.ChatBanEvasion
                    },
                    impersonation_me: {
                        getTitle: O.me,
                        value: "impersonating me",
                        reportReason: n.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(c.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: n.Impersonation
                    },
                    impersonation_other: {
                        getTitle: O.someoneElse,
                        value: "impersonating someone else",
                        reportReason: n.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(c.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: n.SelfHarm
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
                        reportContext: f.N.WHISPER_REPORT
                    },
                    username: {
                        getTitle: function() {
                            return Object(c.d)("In the username", "ReportModalWizard")
                        },
                        value: "username",
                        reportReason: n.OffensiveUsername
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
                        reportReason: n.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: O.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: O.abusive,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: O.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: n.Harm
                    },
                    external_commitingViolence: {
                        getTitle: O.commitingViolence,
                        value: "external site; committing violence",
                        reportReason: n.Harm
                    },
                    conduct_impersonation: {
                        getTitle: function() {
                            return Object(c.d)("impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: n.Impersonation
                    },
                    spam: {
                        getTitle: function() {
                            return Object(c.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                        },
                        value: "spam",
                        reportReason: n.Spam
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
                U = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            var r = e.target,
                                n = r.name,
                                o = r.value;
                            t.props.onChangeText(n, o)
                        }, t.onSelect = function(e) {
                            if (t.props.currentCard.items && e.currentTarget.parentElement) {
                                var r = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                    n = t.props.currentCard.items[r];
                                t.props.onChangeRadio(n)
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? i.createElement(R.Ya, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return i.createElement(R.Ya, {
                            className: "reporting-wizard-card"
                        }, e, i.createElement(R.Ea, {
                            label: this.props.currentCard.getLabel ? this.props.currentCard.getLabel() : ""
                        }, this.renderCardItems()))
                    }, t.prototype.renderCardItems = function() {
                        var e = this,
                            t = this.props.currentCard,
                            r = [];
                        return t.items && t.type && (r = t.items.filter(function(e) {
                            return !!e
                        }).map(function(t, r) {
                            switch (t.type) {
                                case o.Text:
                                    return i.createElement(R.Ya, {
                                        key: r,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case o.Link:
                                    return i.createElement(R.Ya, {
                                        key: r,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, i.createElement(R.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, i.createElement(R.Ya, {
                                        display: R.X.Flex
                                    }, i.createElement(R.Ya, {
                                        display: R.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, i.createElement(R.tb, {
                                        asset: R.ub.Document
                                    })), t.getTitle())));
                                case o.Textarea:
                                    var n = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        a = t.required && (!n || !!n && 0 === n.trim().length);
                                    return i.createElement(R.Ya, {
                                        key: r,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, i.createElement(R.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(c.d)("Optional", "ReportModalWizardCard")
                                    }, i.createElement(R.Tb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && a,
                                        value: n,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case o.MultipleChoice:
                                default:
                                    return i.createElement(R.Ya, {
                                        key: r,
                                        padding: {
                                            y: .5
                                        }
                                    }, i.createElement(R.qb, {
                                        checked: !!e.props.currentSelection && e.props.currentSelection.value === t.value,
                                        onChange: e.onSelect,
                                        label: t.getTitle(e.props.targetUser.displayName),
                                        "data-a-index": r,
                                        name: "card",
                                        value: t.value
                                    }))
                            }
                        })), r
                    }, t
                }(i.Component),
                j = r("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(S || (S = {}));
            var w, x, z, E = {
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
                W = {
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
                I = {
                    getDescription: function() {
                        return Object(c.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: W.thanks,
                    type: S.Info,
                    value: "end card"
                },
                N = {
                    socialMedia: a.__assign({}, I, {
                        items: [M.endBlurb_socialmedia]
                    }),
                    violence: a.__assign({}, I, {
                        items: [M.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: W.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [M.endLink_DMCA, M.endLink_trademark, M.endLink_devAgreement],
                        type: S.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: W.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [M.endLink_selfharm],
                        type: S.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: W.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [M.endLink_eventCoC],
                        value: "twitch event end",
                        type: S.Info
                    }
                },
                D = {
                    getTitle: W.report,
                    getLabel: function() {
                        return Object(c.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [M.video, M.whisper, M.chat, M.room, M.profile, M.username, M.report_other],
                    type: S.MultipleChoice,
                    value: "content type"
                },
                A = {
                    identifyUser: {
                        getTitle: W.reportVideo,
                        getLabel: E.identifyUser,
                        items: [M.video_streamer, M.video_someoneElse, M.video_chatSomeone],
                        type: S.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: W.reportVideo,
                        getLabel: E.contentGeneral,
                        items: [M.revealPersonalInfo, M.video_labeling, M.video_inactive, M.video_general, M.report_ip, M.violateDevAgreement, M.selfharm],
                        type: S.MultipleChoice,
                        value: "video report reason"
                    },
                    general: {
                        getTitle: W.reportVideo,
                        getLabel: E.content,
                        items: [M.report_username, M.violence, M.abusive, M.cheating, M.scam, M.inappropriateContent, M.evasion, M.impersonation, M.underage, M.bitsViolation],
                        type: S.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                L = {
                    content: {
                        getTitle: W.reportMessage,
                        getLabel: E.contentGeneral,
                        items: [M.revealPersonalInfo, M.evasion, M.spam, M.maliciousRaid, M.report_username, M.messaging_general, M.selfharm],
                        type: S.MultipleChoice,
                        value: "message report reason"
                    },
                    general: {
                        getTitle: W.reportMessage,
                        getLabel: E.content,
                        items: [M.report_emotes, M.violence, M.abusive, M.inappropriateContent, M.impersonation, M.underage, M.bitsViolation],
                        type: S.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                B = a.__assign({}, L.content, {
                    getDescription: function() {
                        return Object(c.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                    }
                }),
                F = {
                    content: {
                        getTitle: W.reportProfile,
                        getLabel: E.contentGeneral,
                        items: [M.revealPersonalInfo, M.inappropriateBadge, M.inappropriateExtension, M.noModeration, M.profile_general, M.report_ip, M.violateDevAgreement, M.selfharm],
                        type: S.MultipleChoice,
                        value: "profile report reason"
                    },
                    general: {
                        getTitle: W.reportProfile,
                        getLabel: E.content,
                        items: [M.report_username, M.violence, M.abusive, M.scam, M.inappropriateContent, M.evasion, M.impersonation, M.underage, M.bitsViolation],
                        type: S.MultipleChoice,
                        value: "profile general report reason"
                    }
                },
                P = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: E.identifyUser,
                    items: [M.report_channelOwner, M.report_member],
                    value: "room report user",
                    type: S.MultipleChoice
                },
                V = {
                    getTitle: W.tellUsMore,
                    items: [M.input_description],
                    type: S.Confirm,
                    value: "tell us more"
                },
                Y = {
                    banEvasion: a.__assign({}, V, {
                        items: [M.input_usernames, M.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: a.__assign({}, V, {
                        items: [M.input_link, M.input_connection, M.input_description],
                        nextCard: N.socialMedia,
                        value: "social media tell us more"
                    })
                },
                H = {
                    content: {
                        getTitle: W.reportAbusive,
                        getLabel: E.relevantStatements,
                        items: [M.hateSpeech, M.harassment, M.abusiveViolence, M.commitingViolence, M.swatting, M.personalInfo],
                        type: S.MultipleChoice,
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
                        items: [M.threat_me, M.threat_person, M.threat_group, M.threat_selfharm],
                        type: S.MultipleChoice,
                        value: "violence type"
                    }
                },
                G = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(c.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [M.location_onTwitch, M.location_anotherSite, M.location_TwitchEvent],
                        type: S.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: E.thisPersonIs,
                        getDescription: function() {
                            return Object(c.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [M.external_incitingRaids, M.external_threatening, M.external_harassment],
                        type: S.MultipleChoice,
                        nextCard: Y.socialMedia,
                        value: "external site conduct"
                    },
                    external_violence: a.__assign({}, H.violence, {
                        items: [M.threat_me, M.threat_person, M.threat_group],
                        nextCard: Y.socialMedia
                    }),
                    external_abusive: a.__assign({}, H.content, {
                        items: [M.hateSpeech, M.harassment, M.external_abusiveViolence, M.external_commitingViolence, M.swatting, M.personalInfo],
                        nextCard: Y.socialMedia
                    })
                },
                q = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: E.contentGeneral,
                    items: [M.spam_bot, M.spam_scam, M.spam_repeated],
                    type: S.MultipleChoice,
                    value: "spam type"
                },
                Q = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: E.relevantStatements,
                    items: [M.inappropriate_game, M.gory, M.sexuallyViolent, M.childAnimal, M.pornographic, M.suggestive, M.nudity, M.other],
                    type: S.MultipleChoice,
                    value: "inappropriate content type"
                },
                X = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [M.evasion_chat, M.evasion_sitewide, M.evasion_messaging],
                    type: S.MultipleChoice,
                    nextCard: Y.banEvasion
                },
                $ = {
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
                    items: [M.impersonation_me, M.impersonation_brand, M.impersonation_other],
                    type: S.MultipleChoice,
                    value: "impersonation type"
                },
                K = D,
                Z = V,
                J = I,
                ee = {
                    video: A.identifyUser,
                    whisper: B,
                    chat: L.content,
                    profile: F.content,
                    room: P,
                    "somewhere else": G.identifyLocation,
                    streamer: A.content,
                    "someone else in video": A.content,
                    "someone in chat": L.content,
                    general_video: A.general,
                    general_messaging: L.general,
                    general_profile: F.general,
                    "channel owner": F.content,
                    "community member": L.content,
                    "on twitch": F.content,
                    "another site": G.externalSite,
                    "twitch event": N.twitchEvent,
                    "brigading/raids": Y.socialMedia,
                    threatening: G.external_violence,
                    "hateful/harassing": G.external_abusive,
                    "external site; threatening violence": G.external_violence,
                    "external site; committing violence": G.external_violence,
                    "external site; scam": Y.socialMedia,
                    "ban evasion": X,
                    spam: q,
                    hateful: H.content,
                    impersonation: $,
                    "violence/threats": H.violence,
                    "threatening violence": H.violence,
                    "committing violence": H.violence,
                    abusive: H.content,
                    "inappropriate content": Q,
                    "intellectual property": N.legal,
                    "violating developer agreement": N.legal
                },
                te = {
                    selfharm: N.selfharm,
                    harm: N.violence,
                    other: J
                },
                re = {
                    CHANNEL_FEED_POST_REPORT: F.content,
                    COMMUNITY_REPORT: F.content,
                    CHAT_REPORT: L.content,
                    CLIP_REPORT: A.content,
                    EVENT_REPORT: F.content,
                    EXTENSION_REPORT: F.content,
                    LIVE_UP_REPORT: F.content,
                    ROOM_REPORT: P,
                    WHISPER_REPORT: B,
                    VOD_COMMENT_REPORT: L.content
                },
                ne = "report-wizard-back",
                oe = "report-wizard-close",
                ae = "report-wizard-next",
                ie = "report-wizard-submit",
                se = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || re[t.props.reportContentType] || K,
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
                            return i.createElement(R.Ya, {
                                margin: {
                                    top: 1
                                }
                            }, i.createElement(R.W, null, Object(c.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(c.d)("Close", "ReportModalWizard"),
                                r = t.handleClose,
                                n = oe,
                                o = !1,
                                a = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case S.MultipleChoice:
                                    e = Object(c.d)("Next", "ReportModalWizard"), r = t.handleNext, n = ae, o = !t.state.currentSelection;
                                    break;
                                case S.Confirm:
                                    e = Object(c.d)("Submit Report", "ReportModalWizard"), r = t.handleSubmit, o = !t.state.userTextInput, n = ie
                            }
                            return i.createElement(R.Ya, null, a, i.createElement(R.z, {
                                onClick: r,
                                disabled: o,
                                "data-test-selector": n
                            }, i.createElement(R.Ya, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return i.createElement(R.Ya, {
                                margin: {
                                    right: 1
                                },
                                display: R.X.InlineBlock
                            }, i.createElement(R.z, {
                                type: R.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": ne
                            }, i.createElement(R.Ya, {
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
                                return t.props.trackClose(z.Finish, t.state.currentCard.value, t.getChoiceIndex())
                            }), t.props.onClose()
                        }, t.getChoiceIndex = function() {
                            var e = 0;
                            return t.state.currentCard && t.state.currentCard.items && (e = t.state.currentCard.items.findIndex(function(e) {
                                return t.state.currentSelection === e
                            }) + 1), e >= 1 ? e : void 0
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    r = t.state.prevCards.concat(e),
                                    n = t.state.prevSelections.concat(t.state.currentSelection),
                                    o = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    a = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    i = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = t.getChoiceIndex(),
                                    l = e.nextCard || Z;
                                ee[t.state.currentSelection.value] && (l = ee[t.state.currentSelection.value]);
                                var c = t.state.currentSelection.reportReason || t.state.reportReason,
                                    u = l.type === S.Info;
                                t.setState({
                                    currentCard: l,
                                    reportReason: c,
                                    prevCards: u ? [] : r,
                                    prevSelections: n,
                                    targetUnknown: a,
                                    currentSelection: o || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: i
                                }, function() {
                                    return t.trackNavigation(x.Next, e.value, s)
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
                                if (e.type !== o.Textarea || !e.required) return !1;
                                var r = t.state.userTextInput[e.value],
                                    n = r && 0 === r.trim().length;
                                return !r || n
                            }).length
                        }, t.handleSubmit = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, r, n, o, i = this;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e = Object(c.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", r = this.createReportDescription(), [4, this.props.onSubmit(t, r, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (a.sent(), this.props.submitStatus) {
                                                case j.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case j.a.Success:
                                                    n = J, te[t] && (n = te[t]), this.state.currentCard.nextCard && (n = this.state.currentCard.nextCard), o = this.getChoiceIndex(), this.setState({
                                                        currentCard: n,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return i.trackNavigation(x.Submit, void 0, o)
                                                    });
                                                    break;
                                                case j.a.UserError:
                                                    this.setState({
                                                        error: Object(c.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case j.a.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(c.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(j.a.FormError), this.setState({
                                                error: e
                                            }), a.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, r, n, o, i, s = this;
                                return a.__generator(this, function(a) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], r = this.state.prevSelections[this.state.prevSelections.length - 1], n = !r.differentTarget && this.state.targetUnknown, o = this.getChoiceIndex(), i = this.state.displacedSelections, this.state.currentSelection && (i = i.concat(this.state.currentSelection)), t && r && this.setState({
                                        currentCard: t,
                                        currentSelection: r,
                                        displacedSelections: i,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: n
                                    }, function() {
                                        return s.trackNavigation(x.Back, e.value, o)
                                    }), [2]
                                })
                            })
                        }, t.handleTextInput = function(e, r) {
                            var n = t.state.userTextInput;
                            n[e] = r, t.setState({
                                userTextInput: n
                            })
                        }, t.handleSelection = function(e) {
                            if (t.state.currentCard.items && e !== t.state.currentSelection) {
                                var r = t.state.targetUnknown;
                                if (r) r = 0 === t.state.displacedSelections.filter(function(e) {
                                    return e.differentTarget
                                }).length;
                                var n = t.state.reportContext;
                                (t.state.displacedSelections.filter(function(e) {
                                    return e.reportContext
                                }).length || t.state.currentSelection && t.state.currentSelection.reportContext) && (n = t.props.reportContentType), t.setState({
                                    currentSelection: e,
                                    displacedSelections: [],
                                    userTextInput: {},
                                    targetUnknown: r,
                                    reportContext: n
                                })
                            }
                        }, t.trackNavigation = function(e, r, n) {
                            t.props.trackAction(e, r, t.state.currentCard.value, n)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(z.Close, this.state.currentCard.value, this.getChoiceIndex())
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === S.Info && this.state.currentCard.blockPrompt ? i.createElement(C, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? i.createElement(R.Fb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            r = this.state.prevCards.length || this.state.currentCard.type === S.Info ? null : this.renderPrimer();
                        return i.createElement(R.Fb, {
                            className: "reporting-wizard",
                            display: R.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: R.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, i.createElement(R.W, {
                            bold: !0,
                            fontSize: R.Ca.Size4
                        }, this.getTitle()), r, i.createElement(R.Ya, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(U, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === j.a.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(i.Component),
                le = r("s8Ou"),
                ce = r("0hI/");
            r.d(t, "c", function() {
                    return x
                }), r.d(t, "a", function() {
                    return z
                }), r.d(t, "b", function() {
                    return de
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(w || (w = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(x || (x = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(z || (z = {}));
            var ue = function(e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    r.handleSubmit = function(e, t, n) {
                        return a.__awaiter(r, void 0, void 0, function() {
                            var r, o, i, s, l = this;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (r = n === f.N.WHISPER_REPORT ? n : this.props.reportContext.contentType, o = f.N[r], null === (i = {
                                                description: t,
                                                reason: e,
                                                content: o,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: j.a.UserError
                                        }), [2];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(m.a)(i))];
                                    case 2:
                                        return a.sent(), this.setState({
                                            submitStatus: j.a.Success
                                        }, function() {
                                            l.state.showWizard || l.trackAction(w.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return s = a.sent(), c.k.error(s, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: j.a.MutationError
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, r.handleChildError = function(e) {
                        return r.setState({
                            submitStatus: e
                        })
                    }, r.handleClose = function() {
                        r.props.onClose && r.props.onClose(r.state.submitStatus, r.state.userBlocked)
                    }, r.onBlock = function() {
                        r.props.blockUserMutation(r.props.data.targetUser.id, void 0, void 0, a.__assign({}, r.props.sessionUser, {
                            __typename: "User"
                        })), r.setState({
                            userBlocked: !0
                        }), r.props.sessionUser && r.props.sessionUser.login && r.props.data.targetUser && r.props.data.targetUser.login && Object(g.b)({
                            context: g.a.ReportWizard,
                            targetUserLogin: r.props.data.targetUser.login,
                            currentUserLogin: r.props.sessionUser.login
                        })
                    }, r.onUnblock = function() {
                        r.props.unblockUserMutation(r.props.data.targetUser.id, a.__assign({}, r.props.sessionUser, {
                            __typename: "User"
                        })), r.setState({
                            userBlocked: !1
                        })
                    }, r.trackOpen = function(e) {
                        r.state.openEventSent || (r.state.showWizard ? r.trackWizardAction(x.Open, void 0, e) : r.trackAction(w.Open), r.setState({
                            openEventSent: !0
                        }))
                    }, r.trackClose = function(e, t, n) {
                        r.state.closeEventSent || (r.state.showWizard ? r.trackWizardAction(x.Close, t, void 0, n, e) : r.trackAction(w.Close), r.setState({
                            closeEventSent: !0
                        }))
                    }, r.trackWizardAction = function(e, t, n, o, a) {
                        c.p.tracking.track(b.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: r.props.reportContext.contentType,
                            target_user_id: r.props.reportContext.targetUserID,
                            report_sent: r.state.submitStatus === j.a.Success,
                            modal_type: "wizard_v1",
                            extra_user_id: r.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: a,
                            report_session_id: r.reportID,
                            current_step: t,
                            navigated_to: n,
                            choice_index: o
                        })
                    }, r.trackAction = function(e) {
                        c.p.tracking.track(b.SpadeEventType.ReportFlowAction, {
                            ui_context: r.props.reportContext.contentType,
                            target_user_id: r.props.reportContext.targetUserID,
                            report_sent: r.state.submitStatus === j.a.Success,
                            extra_user_id: r.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: r.reportID
                        })
                    }, r.reportID = Object(h.a)();
                    var n = c.p.experiments.getAssignment(v.b.NewReportingWizard);
                    return r.state = {
                        submitStatus: j.a.Unsubmitted,
                        showWizard: "yes" === n,
                        openEventSent: !1,
                        closeEventSent: !1,
                        userBlocked: !1
                    }, r
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackOpen()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose(), this.state.showWizard || this.trackClose()
                }, t.prototype.render = function() {
                    if (this.props.data.error) return i.createElement(R.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(R.W, {
                        fontSize: R.Ca.Size5
                    }, Object(c.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return i.createElement(R.jb, {
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
                        return this.state.showWizard ? this.props.data.loading ? i.createElement(R.ab, null) : i.createElement(se, a.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : i.createElement(j.b, a.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return i.createElement(R.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(R.W, {
                        fontSize: R.Ca.Size5
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
            var de = Object(l.compose)(Object(u.a)(le, {
                name: "reportUser"
            }), Object(u.a)(ce, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(k.b)("ReportUser", {
                autoReportInteractive: !0
            }), Object(d.a)(), Object(p.a)(), Object(s.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(ue)
        },
        gIsd: function(e, t) {
            var r = {
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
            r.loc.source = {
                body: "query ReportUserModal_ReportReasons($content: ReportContentType!) {\nreportReasons(content: $content) {\nid\ntext\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        iS14: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return l
            });
            var n = r("mrSG"),
                o = r("yR8l"),
                a = r("8jSG"),
                i = r("cMjZ"),
                s = r("zixI");

            function l() {
                var e = this;
                return Object(o.a)(s, {
                    props: function(t) {
                        return {
                            unblockUserMutation: function(r, o) {
                                return n.__awaiter(e, void 0, void 0, function() {
                                    return n.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: {
                                                            targetUserID: r
                                                        }
                                                    },
                                                    optimisticResponse: {
                                                        unblockUser: {
                                                            __typename: "UnblockUserPayload",
                                                            targetUser: {
                                                                __typename: "User",
                                                                id: r
                                                            }
                                                        }
                                                    },
                                                    update: function(e) {
                                                        var t = e.readFragment({
                                                            id: Object(i.a)(o),
                                                            fragment: a
                                                        });
                                                        t && (t.blockedUsers = t.blockedUsers.filter(function(e) {
                                                            return null !== e && e.id !== r
                                                        }), e.writeFragment({
                                                            id: Object(i.a)(o),
                                                            fragment: a,
                                                            data: t
                                                        }))
                                                    }
                                                })] : [3, 2];
                                            case 1:
                                                return e.sent(), [3, 3];
                                            case 2:
                                                throw new Error("unblockUserMutation is not ready");
                                            case 3:
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
        juOe: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r("/MKj"),
                o = r("fvjX"),
                a = r("1/iK"),
                i = r("y5D0"),
                s = r("kRBY"),
                l = r("mrSG"),
                c = r("cr+I"),
                u = r("q1tI"),
                d = r("/7QA"),
                p = r("yR8l"),
                m = r("DMoW"),
                g = r("NvVO"),
                h = r("GnwI"),
                v = r("RQ6e"),
                f = r("dAHa"),
                b = r("Ue10"),
                k = r("8GWH"),
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getReportingContext = function() {
                            var e = c.parse(t.props.location.search);
                            return {
                                contentType: e.contentType ? e.contentType : m.N.USER_REPORT,
                                contentID: e.contentId,
                                targetUserID: t.props.data.targetUser.id
                            }
                        }, t.handleReportUserClose = function(e) {
                            e !== v.a.MutationError && e !== v.a.Success || t.props.history.push("/")
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.props.isLoggedIn || this.props.login()
                    }, t.prototype.render = function() {
                        return u.createElement(b.Ya, {
                            "data-test-selector": "report-user-page",
                            alignItems: b.f.Center,
                            display: b.X.Flex,
                            flexDirection: b.Aa.Column,
                            fullHeight: !0,
                            padding: 3
                        }, this.renderPage())
                    }, t.prototype.renderPage = function() {
                        return this.props.isLoggedIn ? this.props.data.error ? u.createElement(b.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(b.W, {
                            fontSize: b.Ca.Size5
                        }, Object(d.d)("There was an unexpected error. Please refresh the page and try again", "ReportUserPage"))) : !this.props.data || this.props.data.loading ? u.createElement(b.jb, {
                            lineCount: 3
                        }) : this.props.data.targetUser && this.props.data.targetUser.id ? u.createElement(f.b, {
                            onClose: this.handleReportUserClose,
                            reportContext: this.getReportingContext(),
                            title: Object(d.d)("Report {channelName}", {
                                channelName: this.props.match.params.channelName
                            }, "ReportUserPage")
                        }) : u.createElement(b.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(b.W, {
                            fontSize: b.Ca.Size5
                        }, Object(d.d)("The user you are trying to report does not exist", "ReportUserPage"))) : u.createElement(b.Ya, {
                            "data-test-selector": "report-user-page__logged-out",
                            alignItems: b.f.Center,
                            display: b.X.Flex,
                            flexDirection: b.Aa.Column
                        }, u.createElement(b.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(b.W, {
                            fontSize: b.Ca.Size5
                        }, Object(d.d)("You must be logged in to report {channelName}. Please log in to complete.", {
                            channelName: this.props.match.params.channelName
                        }, "ReportUserPage"))), u.createElement(b.z, {
                            onClick: this.props.login
                        }, Object(d.d)("Log in", "ReportUserPage")))
                    }, t = l.__decorate([Object(p.a)(k, {
                        options: function(e) {
                            return {
                                variables: {
                                    targetLogin: e.match.params.channelName
                                }
                            }
                        }
                    }), Object(h.b)("ReportUserPage", {
                        autoReportInteractive: !0,
                        destination: g.a.ReportUserPage
                    })], t)
                }(u.Component);
            var R = Object(n.connect)(function(e) {
                return {
                    isLoggedIn: Object(s.f)(e),
                    currentUser: Object(s.e)(e)
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    login: function() {
                        return Object(i.e)(a.a.ReportChannel)
                    }
                }, e)
            })(y);
            r.d(t, "ReportUserPage", function() {
                return R
            })
        },
        kSkr: function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "BlockUser"
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
                                    value: "BlockUserInput"
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
                                value: "blockUser"
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
                                        value: "targetUser"
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
                    end: 94
                }
            };
            r.loc.source = {
                body: "mutation BlockUser($input: BlockUserInput!) {\nblockUser(input: $input) {\ntargetUser {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        s8Ou: function(e, t) {
            var r = {
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
            r.loc.source = {
                body: "mutation ReportUserModal_ReportUser($input: ReportContentInput!) {\nreportContent(input: $input) {\ncontentID\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        y4Ne: function(e, t, r) {},
        zixI: function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UnblockUser"
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
                                    value: "UnblockUserInput"
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
                                value: "unblockUser"
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
                                        value: "targetUser"
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
                    end: 100
                }
            };
            r.loc.source = {
                body: "mutation UnblockUser($input: UnblockUserInput!) {\nunblockUser(input: $input) {\ntargetUser {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        }
    }
]);