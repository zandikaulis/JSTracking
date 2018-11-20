(window.webpackJsonp = window.webpackJsonp || []).push([
    [201], {
        "/HY+": function(e, t, r) {
            "use strict";
            var n = r("dAHa"),
                o = r("mrSG"),
                a = r("q1tI"),
                i = r("/MKj"),
                s = r("fvjX"),
                l = r("cZKs"),
                c = r("aCAx"),
                d = r("GnwI"),
                u = r("Ue10"),
                p = (r("Oy4H"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClose = function(e, r) {
                            t.props.closeModal(), t.props.onClose && t.props.onClose(e, r)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.Fb, {
                            className: "reporting-modal__container",
                            background: u.r.Base,
                            padding: {
                                x: 2,
                                y: 3
                            }
                        }, a.createElement(n.b, {
                            onClose: this.handleClose,
                            reportContext: this.props.reportContext,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        }), a.createElement(l.a, null))
                    }, t
                }(a.Component));
            var m = Object(s.compose)(Object(d.b)("ReportUserModal"), Object(i.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: c.c
                }, e)
            }))(p);
            r.d(t, !1, function() {}), r.d(t, !1, function() {
                return n.c
            }), r.d(t, !1, function() {
                return n.a
            }), r.d(t, !1, function() {}), r.d(t, !1, function() {
                return n.b
            }), r.d(t, !1, function() {
                return p
            }), r.d(t, "a", function() {
                return m
            })
        },
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
        "22qk": function(e, t, r) {
            "use strict";

            function n(e, t) {
                return "/ext/" + u(e, t)
            }

            function o(e, t, r) {
                return {
                    pathname: "" + i(e),
                    search: "?configure=true&extensionID=" + u(t, r)
                }
            }

            function a(e) {
                return "/" + e + "/dashboard/extensions"
            }

            function i(e) {
                return "/" + e + "/dashboard/extensions/manage"
            }

            function s(e) {
                return "/" + e + "/dashboard/extensions/whitelisted"
            }

            function l(e, t) {
                return {
                    pathname: "/" + e + "/dashboard/extensions/permissions",
                    state: t
                }
            }

            function c(e) {
                return "/ext/categories/" + e
            }

            function d(e) {
                return "/ext/search?q=" + encodeURIComponent(e)
            }

            function u(e, t) {
                return t ? e + "-" + t : e
            }
            r.d(t, "d", function() {
                return n
            }), r.d(t, "b", function() {
                return o
            }), r.d(t, "c", function() {
                return a
            }), r.d(t, "e", function() {
                return i
            }), r.d(t, "h", function() {
                return s
            }), r.d(t, "f", function() {
                return l
            }), r.d(t, "a", function() {
                return c
            }), r.d(t, "g", function() {
                return d
            })
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
        Oy4H: function(e, t, r) {},
        RQ6e: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                o = r("TSYQ"),
                a = r("q1tI"),
                i = r("/7QA"),
                s = r("fvjX"),
                l = r("yR8l"),
                c = r("GnwI");
            var d = r("Ue10"),
                u = r("gIsd"),
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
                        return a.createElement(d.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(d.Ea, {
                            id: "reporting-modal__select",
                            label: Object(i.d)("Select Reason (required)", "ReportUserModal")
                        }, a.createElement(d.Ab, {
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
                m = Object(s.compose)(Object(l.a)(u, {
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
                return h
            }), r.d(t, "b", function() {
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
                        br: a.createElement("br", null),
                        tosLink: a.createElement("a", {
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
                return n.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(d.Ya, {
                        display: d.X.Flex,
                        flexDirection: d.Aa.Column,
                        alignItems: d.f.Center,
                        justifyContent: d.Xa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === h.Success ? a.createElement("div", null, a.createElement(d.z, {
                        onClick: this.props.onClose
                    }, a.createElement(d.Ya, {
                        padding: {
                            x: 2
                        }
                    }, Object(i.d)("Close", "ReportUser")))) : a.createElement("div", null, a.createElement(d.Ya, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, a.createElement(d.W, {
                        type: d.Wb.H4
                    }, this.props.title), a.createElement(d.Fb, {
                        color: d.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), a.createElement("form", null, a.createElement(d.Fb, {
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
                    }), a.createElement(d.Ea, {
                        id: "reporting__text-area",
                        label: Object(i.d)("Description (required)", "ReportUser")
                    }, a.createElement(d.Tb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), a.createElement(d.Fb, {
                        display: d.X.Flex,
                        justifyContent: d.Xa.Center
                    }, a.createElement(d.z, {
                        onClick: this.handleSubmit
                    }, a.createElement(d.Ya, {
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
                    var t = o({
                        "reporting__error-container": this.props.submitStatus !== h.Success,
                        "reporting__success-container": this.props.submitStatus === h.Success
                    });
                    return a.createElement(d.Fb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== h.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(a.Component)
        },
        dAHa: function(e, t, r) {
            "use strict";
            var n, o, a = r("mrSG"),
                i = r("q1tI"),
                s = r("/MKj"),
                l = r("fvjX"),
                c = r("/7QA"),
                d = r("yR8l"),
                u = r("BhFH"),
                p = r("iS14"),
                m = r("geRD"),
                h = r("O3Y9"),
                g = r("f00E"),
                f = r("D7An"),
                v = r("DMoW"),
                b = r("2xye"),
                k = r("GnwI"),
                y = r("QVaV"),
                R = r("Ue10"),
                C = (r("MPK0"), "report-wizard-block"),
                T = "report-wizard-unblock",
                _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return i.createElement(R.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": C
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
                                "data-test-selector": T
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
            var O, x = {
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
                S = {
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
                            return Object(c.d)("Please submit a report on the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: o.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(c.d)("If you feel you are in immediate danger, please contact your local law enforcement. To protect yourself on Twitch, you may also block the user.", "ReportModalWizard")
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
                        getTitle: x.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: x.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(c.d)("Participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: n.Harassment
                    },
                    automod: {
                        getTitle: function() {
                            return Object(c.d)("It's being used to bypass AutoMod", "ReportModalWizard")
                        },
                        value: "bypass automod",
                        reportReason: n.Other
                    },
                    violence: {
                        getTitle: function() {
                            return Object(c.d)("Threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: n.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(c.d)("The username is inappropriate", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: n.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(c.d)("The emotes or badges", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: n.Other
                    },
                    emotes_break_guidelines: {
                        getTitle: function() {
                            return Object(c.d)("The emotes break Twitch's guidelines", "ReportModalWizard")
                        },
                        value: "emotes break guidelines",
                        reportReason: n.Other
                    },
                    abusive: {
                        getTitle: x.harassment,
                        value: "abusive"
                    },
                    scam: {
                        getTitle: x.scam,
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
                    impersonating: {
                        getTitle: function() {
                            return Object(c.d)("Impersonating someone", "ReportModalWizard")
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
                            return Object(c.d)("The extensions are inappropriate or malicious", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: n.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(c.d)("Cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: n.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(c.d)("They're breaking Twitch's Bits Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: n.BitsViolation
                    },
                    compromisedAccount: {
                        getTitle: function() {
                            return Object(c.d)("The account is stolen or compromised", "ReportModalWizard")
                        },
                        value: "account compromised",
                        reportReason: n.Other
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(c.d)("Their content is misclassified (wrong category or tags)", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: n.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(c.d)("There's no streamer, or the streamer is inactive", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: n.Miscategorized
                    },
                    video_general: {
                        getTitle: x.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeechSymbols: {
                        getTitle: function() {
                            return Object(c.d)("It contains hate speech or hate symbols", "ReportModalWizard")
                        },
                        value: "hate speech symbols",
                        reportReason: n.HatefulConduct
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(c.d)("Hate speech, hateful symbols, or other hateful conduct", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: n.HatefulConduct
                    },
                    harassing: {
                        getTitle: function() {
                            return Object(c.d)("It's harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: n.Harassment
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(c.d)("Harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: n.Harassment
                    },
                    abusiveViolence: {
                        getTitle: x.abusiveViolence,
                        value: "threatening violence",
                        reportReason: n.Harm
                    },
                    commitingViolence: {
                        getTitle: x.commitingViolence,
                        value: "committing violence",
                        reportReason: n.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(c.d)("Involvement in swatting or DDOS attacks", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: n.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(c.d)("Doxxing (purposely revealing personal information)", "ReportModalWizard")
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
                    sexuallyViolentChildAnimal: {
                        getTitle: function() {
                            return Object(c.d)("Sexual conduct involving violence, children, or animals", "ReportModalWizard")
                        },
                        value: "sexual conduct: violent, child, or animal",
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
                            return Object(c.d)("Evading a block, ban, or suspension", "ReportModalWizard")
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
                        getTitle: x.me,
                        value: "impersonating me",
                        reportReason: n.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(c.d)("Someone I represent, or a company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: n.Impersonation
                    },
                    impersonation_other: {
                        getTitle: x.someoneElse,
                        value: "Impersonating someone else",
                        reportReason: n.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(c.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: n.SelfHarm
                    },
                    video: {
                        getTitle: function() {
                            return Object(c.d)("In a live stream, video, or clip", "ReportModalWizard")
                        },
                        value: "video"
                    },
                    video_more_options: {
                        getTitle: x.moreOptions,
                        value: "video more options"
                    },
                    whisper: {
                        getTitle: function() {
                            return Object(c.d)("In a whisper (private message)", "ReportModalWizard")
                        },
                        value: "whisper",
                        reportContext: v.N.WHISPER_REPORT
                    },
                    whisper_more_options: {
                        getTitle: x.moreOptions,
                        value: "whisper more options"
                    },
                    chat: {
                        getTitle: function() {
                            return Object(c.d)("In a chat message or room", "ReportModalWizard")
                        },
                        value: "chat"
                    },
                    chat_more_options: {
                        getTitle: x.moreOptions,
                        value: "chat more options"
                    },
                    moderating: {
                        getTitle: function(e) {
                            return Object(c.d)("{username} isn't moderating their chat", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "moderating",
                        reportReason: n.Other
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
                        getTitle: x.moreOptions,
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
                        reportReason: n.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: x.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: x.harassment,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: x.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: n.Harm
                    },
                    external_commitingViolence: {
                        getTitle: x.commitingViolence,
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
                            return Object(c.d)("Spam, malicious links, or bot accounts", "ReportModalWizard")
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
                    spam_links: {
                        getTitle: function() {
                            return Object(c.d)("Sending malicious links", "ReportModalWizard")
                        },
                        value: "malicious links"
                    },
                    spam_scam: {
                        getTitle: x.scam,
                        value: "scam"
                    },
                    spam_repeated: {
                        getTitle: function() {
                            return Object(c.d)("Sending repeated messages (spam)", "ReportModalWizard")
                        },
                        value: "repeat messages"
                    }
                },
                M = function(e) {
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
                E = r("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(O || (O = {}));
            var w, W, j, z = {
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
                U = {
                    getDescription: function() {
                        return Object(c.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: I.thanks,
                    type: O.Info,
                    value: "end card"
                },
                N = {
                    socialMedia: a.__assign({}, U, {
                        items: [S.endBlurb_socialmedia]
                    }),
                    violence: a.__assign({}, U, {
                        items: [S.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: I.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [S.endLink_DMCA, S.endLink_trademark, S.endLink_devAgreement],
                        type: O.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: I.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [S.endLink_selfharm],
                        type: O.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: I.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [S.endLink_eventCoC],
                        value: "twitch event end",
                        type: O.Info
                    }
                },
                D = {
                    getTitle: I.report,
                    getLabel: function() {
                        return Object(c.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [S.video, S.whisper, S.chat, S.moderating, S.otherContent, S.report_username, S.report_other],
                    type: O.MultipleChoice,
                    value: "content type"
                },
                A = {
                    identifyUser: {
                        getTitle: I.reportVideo,
                        getLabel: z.identifyUser,
                        items: [S.video_streamer, S.video_someoneElse, S.video_chatSomeone],
                        type: O.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: I.reportVideo,
                        getLabel: z.contentGeneral,
                        items: [S.violence, S.abusive, S.video_inactive, S.video_labeling, S.inappropriateContent, S.selfharm, S.video_more_options],
                        type: O.MultipleChoice,
                        value: "video report reason"
                    },
                    moreOptions: {
                        getTitle: I.reportVideo,
                        getLabel: z.contentGeneral,
                        items: [S.revealPersonalInfo, S.cheating, S.impersonating, S.underage, S.bitsViolation, S.report_ip, S.other],
                        type: O.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                B = {
                    content: {
                        getTitle: I.reportMessage,
                        getLabel: z.contentGeneral,
                        items: [S.report_username, S.violence, S.abusive, S.evasion, S.spam, S.selfharm, S.chat_more_options],
                        type: O.MultipleChoice,
                        value: "message report reason"
                    },
                    moreOptions: {
                        getTitle: I.reportMessage,
                        getLabel: z.contentGeneral,
                        items: [S.emotes_break_guidelines, S.inappropriateContent, S.revealPersonalInfo, S.maliciousRaid, S.underage, S.bitsViolation, S.other],
                        type: O.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                F = {
                    general: {
                        getTitle: I.reportWhisper,
                        getLabel: z.contentGeneral,
                        items: [S.report_username, S.violence, S.abusive, S.spam, S.selfharm, S.whisper_more_options],
                        type: O.MultipleChoice,
                        value: "whisper report reason",
                        getDescription: function() {
                            return Object(c.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                        }
                    },
                    moreOptions: {
                        getTitle: I.reportWhisper,
                        getLabel: z.contentGeneral,
                        items: [S.emotes_break_guidelines, S.evasion, S.inappropriateContent, S.revealPersonalInfo, S.underage, S.other],
                        type: O.MultipleChoice,
                        value: "whisper general report reason"
                    }
                },
                L = {
                    profile: {
                        getTitle: I.reportProfile,
                        getLabel: z.contentGeneral,
                        items: [S.revealPersonalInfo, S.violence, S.abusive, S.inappropriateContent, S.selfharm, S.profile_more_options],
                        type: O.MultipleChoice,
                        value: "profile report reason"
                    },
                    profileMoreOptions: {
                        getTitle: I.reportProfile,
                        getLabel: z.contentGeneral,
                        items: [S.scam, S.evasion, S.impersonation, S.underage, S.report_ip, S.other],
                        type: O.MultipleChoice,
                        value: "profile general report reason"
                    },
                    emotes: {
                        getTitle: I.reportEmotesBadges,
                        getLabel: z.content,
                        items: [S.hateSpeechSymbols, S.harassing, S.itsInappropriateContent, S.automod, S.report_ip, S.other],
                        type: O.MultipleChoice,
                        value: "emote report reason"
                    },
                    general: {
                        getTitle: I.reportProfileOrOtherContent,
                        getLabel: z.content,
                        items: [S.report_username, S.profile, S.report_emotes, S.inappropriateExtension, S.compromisedAccount, S.violateDevAgreement],
                        type: O.MultipleChoice,
                        value: "profile content location"
                    }
                },
                P = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: z.identifyUser,
                    items: [S.report_channelOwner, S.report_member],
                    value: "room report user",
                    type: O.MultipleChoice
                },
                V = {
                    getTitle: I.tellUsMore,
                    items: [S.input_description],
                    type: O.Confirm,
                    value: "tell us more"
                },
                H = {
                    banEvasion: a.__assign({}, V, {
                        items: [S.input_usernames, S.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: a.__assign({}, V, {
                        items: [S.input_link, S.input_connection, S.input_description],
                        nextCard: N.socialMedia,
                        value: "social media tell us more"
                    })
                },
                Y = {
                    content: {
                        getTitle: I.reportAbusive,
                        getLabel: z.relevantStatements,
                        items: [S.hateSpeech, S.harassment, S.abusiveViolence, S.commitingViolence, S.swatting, S.personalInfo],
                        type: O.MultipleChoice,
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
                        items: [S.location_onTwitch, S.location_anotherSite, S.location_TwitchEvent],
                        type: O.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: z.contentGeneral,
                        getDescription: function() {
                            return Object(c.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [S.external_incitingRaids, S.external_threatening, S.external_harassment],
                        type: O.MultipleChoice,
                        nextCard: H.socialMedia,
                        value: "external site conduct"
                    },
                    external_abusive: a.__assign({}, Y.content, {
                        items: [S.hateSpeech, S.harassment, S.external_abusiveViolence, S.external_commitingViolence, S.swatting, S.personalInfo],
                        nextCard: H.socialMedia
                    })
                },
                G = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: z.contentGeneral,
                    items: [S.spam_bot, S.spam_scam, S.spam_links, S.spam_repeated],
                    type: O.MultipleChoice,
                    value: "spam type"
                },
                X = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: z.relevantStatements,
                    items: [S.inappropriate_game, S.gory, S.sexuallyViolentChildAnimal, S.pornographic, S.suggestive, S.nudity, S.other],
                    type: O.MultipleChoice,
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
                    items: [S.evasion_chat, S.evasion_sitewide, S.evasion_messaging],
                    type: O.MultipleChoice,
                    nextCard: H.banEvasion
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
                        return Object(c.d)("Please note that parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [S.impersonation_me, S.impersonation_brand, S.impersonation_other],
                    type: O.MultipleChoice,
                    value: "impersonation type"
                },
                K = D,
                J = V,
                Z = U,
                ee = {
                    video: A.content,
                    "video more options": A.moreOptions,
                    whisper: F.general,
                    "whisper more options": F.moreOptions,
                    chat: B.content,
                    "chat more options": B.moreOptions,
                    "other content": L.general,
                    profile: L.profile,
                    "profile more options": L.profileMoreOptions,
                    room: P,
                    "somewhere else": q.identifyLocation,
                    streamer: A.content,
                    "someone else in video": A.content,
                    "someone in chat": B.content,
                    general_video: A.moreOptions,
                    general_messaging: B.content,
                    general_profile: L.profile,
                    "channel owner": L.general,
                    "community member": B.content,
                    "on twitch": L.general,
                    "another site": q.externalSite,
                    "twitch event": N.twitchEvent,
                    "brigading/raids": H.socialMedia,
                    "hateful/harassing": q.external_abusive,
                    "external site; scam": H.socialMedia,
                    "ban evasion": Q,
                    spam: G,
                    hateful: Y.content,
                    impersonation: $,
                    abusive: Y.content,
                    "inappropriate content": X,
                    "inappropriate emotes": L.emotes,
                    "intellectual property": N.legal,
                    "violating developer agreement": N.legal
                },
                te = {
                    selfharm: N.selfharm,
                    harm: N.violence,
                    other: Z
                },
                re = {
                    CHANNEL_FEED_POST_REPORT: L.general,
                    COMMUNITY_REPORT: L.general,
                    CHAT_REPORT: B.content,
                    CLIP_REPORT: A.content,
                    EVENT_REPORT: L.general,
                    EXTENSION_REPORT: L.general,
                    LIVE_UP_REPORT: L.general,
                    ROOM_REPORT: P,
                    WHISPER_REPORT: F.general,
                    VOD_COMMENT_REPORT: B.content
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
                                case O.MultipleChoice:
                                    e = Object(c.d)("Next", "ReportModalWizard"), r = t.handleNext, n = ae, o = !t.state.currentSelection;
                                    break;
                                case O.Confirm:
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
                                return t.props.trackClose(j.Finish, t.state.currentCard.value, t.getChoiceIndex())
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
                                    l = e.nextCard || J;
                                ee[t.state.currentSelection.value] && (l = ee[t.state.currentSelection.value]);
                                var c = t.state.currentSelection.reportReason || t.state.reportReason,
                                    d = l.type === O.Info;
                                t.setState({
                                    currentCard: l,
                                    reportReason: c,
                                    prevCards: d ? [] : r,
                                    prevSelections: n,
                                    targetUnknown: a,
                                    currentSelection: o || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: i
                                }, function() {
                                    return t.trackNavigation(W.Next, e.value, s)
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
                                                case E.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case E.a.Success:
                                                    n = Z, te[t] && (n = te[t]), this.state.currentCard.nextCard && (n = this.state.currentCard.nextCard), o = this.getChoiceIndex(), this.setState({
                                                        currentCard: n,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return i.trackNavigation(W.Submit, void 0, o)
                                                    });
                                                    break;
                                                case E.a.UserError:
                                                    this.setState({
                                                        error: Object(c.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case E.a.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(c.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(E.a.FormError), this.setState({
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
                                        return s.trackNavigation(W.Back, e.value, o)
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
                        this.state.modalCloseTracked || this.props.trackClose(j.Close, this.state.currentCard.value, this.getChoiceIndex())
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === O.Info && this.state.currentCard.blockPrompt ? i.createElement(_, {
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
                            r = this.state.prevCards.length || this.state.currentCard.type === O.Info ? null : this.renderPrimer();
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
                        }, i.createElement(M, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === E.a.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(i.Component),
                le = r("s8Ou"),
                ce = r("0hI/");
            r.d(t, "c", function() {
                    return W
                }), r.d(t, "a", function() {
                    return j
                }), r.d(t, "b", function() {
                    return ue
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(w || (w = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(W || (W = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(j || (j = {}));
            var de = function(e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    r.handleSubmit = function(e, t, n) {
                        return a.__awaiter(r, void 0, void 0, function() {
                            var r, o, i, s, l = this;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (r = n === v.N.WHISPER_REPORT ? n : this.props.reportContext.contentType, o = v.N[r], null === (i = {
                                                description: t,
                                                reason: e,
                                                content: o,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: E.a.UserError
                                        }), [2];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(m.a)(i))];
                                    case 2:
                                        return a.sent(), this.setState({
                                            submitStatus: E.a.Success
                                        }, function() {
                                            l.state.showWizard || l.trackAction(w.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return s = a.sent(), c.k.error(s, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: E.a.MutationError
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
                        }), r.props.sessionUser && r.props.sessionUser.login && r.props.data.targetUser && r.props.data.targetUser.login && Object(h.b)({
                            context: h.a.ReportWizard,
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
                        r.state.openEventSent || (r.state.showWizard ? r.trackWizardAction(W.Open, void 0, e) : r.trackAction(w.Open), r.setState({
                            openEventSent: !0
                        }))
                    }, r.trackClose = function(e, t, n) {
                        r.state.closeEventSent || (r.state.showWizard ? r.trackWizardAction(W.Close, t, void 0, n, e) : r.trackAction(w.Close), r.setState({
                            closeEventSent: !0
                        }))
                    }, r.trackWizardAction = function(e, t, n, o, a) {
                        c.p.tracking.track(b.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: r.props.reportContext.contentType,
                            target_user_id: r.props.reportContext.targetUserID,
                            report_sent: r.state.submitStatus === E.a.Success,
                            modal_type: "wizard_v2",
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
                            report_sent: r.state.submitStatus === E.a.Success,
                            extra_user_id: r.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: r.reportID
                        })
                    }, r.reportID = Object(g.a)();
                    var n = c.p.experiments.getAssignment(f.b.NewReportingWizard);
                    return r.state = {
                        submitStatus: E.a.Unsubmitted,
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
                        })) : i.createElement(E.b, a.__assign({}, e, {
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
        n3tJ: function(e, t, r) {
            "use strict";
            r.r(t);
            var n, o = r("mrSG"),
                a = r("/MKj"),
                i = r("fvjX"),
                s = r("aCAx"),
                l = r("kRBY"),
                c = r("/HY+"),
                d = r("q1tI"),
                u = r("oJmH"),
                p = r("/7QA"),
                m = r("yR8l"),
                h = r("DMoW"),
                g = r("3GF+"),
                f = r("22qk"),
                v = r("Ue10"),
                b = r("uRZ1");
            ! function(e) {
                e.HideButton = "extension-message-card__hide", e.ReportButton = "extension-message-card__report", e.InfoButton = "extension-message-card__info", e.ErrorPlaceholder = "extension-message-card__error"
            }(n || (n = {}));
            var k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onReportClick = function() {
                            var e = t.props.extensionMessageCardData.extension;
                            e && t.props.showReportExtensionModal({
                                reportContext: {
                                    contentType: h.N.EXTENSION_REPORT,
                                    contentID: e.clientID + "-" + e.version,
                                    targetUserID: t.props.channelID
                                },
                                title: Object(p.d)("Report {extensionName}", {
                                    extensionName: e.name
                                }, "ExtensionMessageCard")
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.extensionMessageCardData,
                            t = e.loading,
                            r = e.error,
                            n = e.extension;
                        return t ? d.createElement(v.Fb, {
                            background: v.r.Base,
                            fullHeight: !0,
                            fullWidth: !0,
                            padding: 2
                        }, d.createElement(v.ab, {
                            fillContent: !0
                        })) : r || !n ? this.renderErrorPlaceHolder() : d.createElement(v.Fb, {
                            border: !0,
                            className: "viewer-card",
                            elevation: 1
                        }, d.createElement(v.Ra, {
                            background: v.r.AccentAlt2
                        }, d.createElement("div", {
                            className: "viewer-card__background"
                        }, d.createElement(v.Ya, {
                            display: v.X.Flex,
                            flexDirection: v.Aa.Column,
                            fullHeight: !0,
                            fullWidth: !0,
                            className: "viewer-card__overlay"
                        }, d.createElement(v.Fb, {
                            alignItems: v.f.Start,
                            background: v.r.Overlay,
                            className: "viewer-card__banner",
                            display: v.X.Flex,
                            flexDirection: v.Aa.Column,
                            flexGrow: 1,
                            fullWidth: !0,
                            justifyContent: v.Xa.Start,
                            padding: 1,
                            position: v.kb.Relative,
                            textAlign: v.Sb.Center
                        }, d.createElement(v.Ya, {
                            display: v.X.Flex,
                            flexDirection: v.Aa.Row,
                            fullWidth: !0,
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(g.a, null, d.createElement(v.q, {
                            src: n.iconURLs.square100,
                            size: 50,
                            alt: n.name
                        })), d.createElement(v.Ya, {
                            alignItems: v.f.Center,
                            textAlign: v.Sb.Left,
                            className: "viewer-card__display-name",
                            margin: {
                                x: 1
                            }
                        }, d.createElement("div", {
                            style: {
                                maxWidth: 200
                            }
                        }, d.createElement(g.a, null, d.createElement(v.W, {
                            color: v.O.Overlay,
                            type: v.Wb.H5
                        }, d.createElement(v.U, {
                            hoverUnderlineNone: !0,
                            targetBlank: !0,
                            to: Object(f.d)(n.clientID, n.version),
                            type: v.V.Inherit
                        }, n.name))), d.createElement(v.W, {
                            color: v.O.Overlay,
                            type: v.Wb.H6
                        }, n.authorName)))), d.createElement(v.Ya, {
                            display: v.X.Flex,
                            flexDirection: v.Aa.Row,
                            fullWidth: !0,
                            textAlign: v.Sb.Left
                        }, d.createElement(v.W, {
                            color: v.O.Overlay,
                            type: v.Wb.P
                        }, n.description)))))), this.renderControls())
                    }, t.prototype.renderControls = function() {
                        return d.createElement(v.Fb, {
                            className: "viewer-card__actions",
                            attachBottom: !0
                        }, d.createElement(v.Fb, {
                            display: v.X.Flex,
                            background: v.r.Base,
                            flexDirection: v.Aa.Row,
                            fullWidth: !0,
                            padding: {
                                y: 1,
                                left: 1,
                                right: .5
                            }
                        }, d.createElement(v.Ya, {
                            display: v.X.Flex,
                            flexGrow: 1
                        }, d.createElement(v.Ya, {
                            margin: {
                                right: .5
                            }
                        }, d.createElement(g.a, null, this.renderInfoButton())), d.createElement(v.Ya, {
                            margin: {
                                right: .5
                            }
                        }, d.createElement(g.a, null, this.renderReportButton())))))
                    }, t.prototype.renderInfoButton = function() {
                        var e = this.props.extensionMessageCardData.extension;
                        if (e) return d.createElement(v.z, {
                            type: v.F.Default,
                            linkTo: Object(f.d)(e.clientID, e.version),
                            "data-test-selector": n.InfoButton
                        }, Object(p.d)("Learn More", "ExtensionMessageCard"))
                    }, t.prototype.renderReportButton = function() {
                        return d.createElement(v.z, {
                            type: v.F.Default,
                            onClick: this.onReportClick,
                            "data-test-selector": n.ReportButton
                        }, Object(p.d)("Report", "ExtensionMessageCard"))
                    }, t.prototype.renderErrorPlaceHolder = function() {
                        return d.createElement(v.Fb, {
                            background: v.r.Base,
                            display: v.X.Flex,
                            flexWrap: v.Ba.NoWrap,
                            padding: .5
                        }, d.createElement(v.Fb, {
                            className: "chat-card__preview-img",
                            background: v.r.Alt2,
                            display: v.X.Flex,
                            alignItems: v.f.Center,
                            justifyContent: v.Xa.Center,
                            flexShrink: 0
                        }, d.createElement("img", {
                            "data-test-selector": n.ErrorPlaceholder,
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/58765/2.0",
                            className: "chat-card__error-img"
                        })), d.createElement(v.Ya, {
                            display: v.X.Flex,
                            alignItems: v.f.Center,
                            overflow: v.db.Hidden
                        }, d.createElement(v.Ya, {
                            padding: {
                                left: 1
                            },
                            fullWidth: !0
                        }, d.createElement(v.Ya, {
                            className: "chat-card__title",
                            ellipsis: !0
                        }, this.props.extensionMessageCardData.error))))
                    }, t
                }(d.Component),
                y = Object(u.compose)(Object(m.a)(b, {
                    name: "extensionMessageCardData",
                    options: function(e) {
                        return {
                            variables: {
                                extensionID: e.extensionID,
                                extensionVersion: e.extensionVersion
                            }
                        }
                    }
                }))(k);
            var R = Object(a.connect)(function(e) {
                return {
                    sessionUser: Object(l.e)(e),
                    isLoggedIn: Object(l.f)(e)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    showReportExtensionModal: function(e) {
                        var t = o.__rest(e, []);
                        return Object(s.d)(c.a, t)
                    }
                }, e)
            })(y);
            r.d(t, "PublicProps", function() {}), r.d(t, "ExtensionMessageCard", function() {
                return R
            })
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
        uRZ1: function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ExtensionMessageCard"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "extensionID"
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
                                value: "extensionVersion"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
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
                                value: "extension"
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
                                        value: "extensionID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "version"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "extensionVersion"
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
                                        value: "authorName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "clientID"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "description"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "iconURLs"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "square100"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
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
                                        value: "version"
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
                    end: 205
                }
            };
            r.loc.source = {
                body: "query ExtensionMessageCard($extensionID: ID! $extensionVersion: String) {\nextension(id: $extensionID version: $extensionVersion) {\nid\nauthorName\nclientID\ndescription\niconURLs {\nsquare100\n}\nname\nversion\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        y4Ne: function(e, t, r) {}
    }
]);