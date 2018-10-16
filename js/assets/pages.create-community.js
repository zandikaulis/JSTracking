(window.webpackJsonp = window.webpackJsonp || []).push([
    [68], {
        "0yye": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "CreateCommunityPage_CreateCommunity"
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
                                    value: "CreateCommunityInput"
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
                                value: "createCommunity"
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
                    end: 142
                }
            };
            n.loc.source = {
                body: "mutation CreateCommunityPage_CreateCommunity($input: CreateCommunityInput!) {\ncreateCommunity(input: $input) {\ncommunity {\nid\nname\n}\nerror\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        FvFK: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, r = n("/MKj"),
                i = n("fvjX"),
                o = n("1/iK"),
                m = n("y5D0"),
                c = n("kRBY"),
                s = n("mrSG"),
                u = n("q1tI"),
                l = n("oJmH"),
                d = n("/7QA"),
                C = n("yR8l"),
                g = n("V+GM"),
                p = n("geRD"),
                h = n("NvVO"),
                y = n("2xye"),
                O = n("GnwI"),
                _ = n("Ue10"),
                E = (n("O9qh"), function() {
                    return u.createElement(_.Wa, {
                        className: "community-requirements",
                        flexGrow: 0,
                        flexShrink: 0
                    }, u.createElement(_.xb, {
                        border: !0,
                        background: _.r.Base,
                        padding: 1
                    }, u.createElement(_.Wb, null, u.createElement("h4", null, Object(d.d)("Requirements", "CommunityRequirements")), u.createElement("ul", {
                        className: "community-requirements__list"
                    }, u.createElement("li", null, Object(d.d)("Your account must be at least 90 days old", "CommunityRequirements")), u.createElement("li", null, Object(d.d)("You must have <x:link>two-factor authentication</x:link> enabled", {
                        "x:link": function(e) {
                            return u.createElement(_.U, {
                                to: "https://help.twitch.tv/customer/en/portal/articles/2186271-two-factor-authentication-with-authy",
                                targetBlank: !0
                            }, e)
                        }
                    }, "CommunityRequirements")), u.createElement("li", null, Object(d.d)("You cannot currently create more than 5 Communities", "CommunityRequirements")), u.createElement("li", null, Object(d.d)("You must agree to the <x:link>Twitch Community Guidelines</x:link>", {
                        "x:link": function(e) {
                            return u.createElement(_.U, {
                                to: "https://www.twitch.tv/p/legal/community-guidelines/",
                                targetBlank: !0
                            }, e)
                        }
                    }, "CommunityRequirements"))))))
                });
            ! function(e) {
                e.ACCOUNT_TOO_YOUNG = "ACCOUNT_TOO_YOUNG", e.COMMUNITY_NAME_EXISTS = "COMMUNITY_NAME_EXISTS", e.COMMUNITY_NAME_INVALID = "COMMUNITY_NAME_INVALID", e.COMMUNITY_NAME_RESERVED = "COMMUNITY_NAME_RESERVED", e.DESCRIPTION_TOO_LONG = "DESCRIPTION_TOO_LONG", e.DISPLAY_NAME_INVALID = "DISPLAY_NAME_INVALID", e.INVALID_LANGUAGE = "INVALID_LANGUAGE", e.OWN_TO_MANY_COMMUNITIES = "OWN_TO_MANY_COMMUNITIES", e.RULES_TOO_LONG = "RULES_TOO_LONG", e.SUMMARY_TOO_LONG = "SUMMARY_TOO_LONG", e.TWO_FACTOR_NOT_ENABLED = "TWO_FACTOR_NOT_ENABLED", e.UNVERIFIED_EMAIL = "UNVERIFIED_EMAIL"
            }(a || (a = {}));
            var N, b = n("0yye");
            n("eM/H");
            ! function(e) {
                e.Name = "create-community-page__name", e.DisplayName = "create-community-page__display-name", e.ShortDescription = "create-community-page__short-description", e.LongDescription = "create-community-long--description", e.Rules = "create-community-page__rules", e.CheckBox = "create-community-page__checkbox", e.ErrorWrapper = "create-community-page__error"
            }(N || (N = {}));
            var f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            saving: !1,
                            errorMessage: null
                        }, t.onClick = function() {
                            return s.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return s.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (!(this.state.longDescription && this.state.name && this.state.rules && this.state.shortDescription)) return [2];
                                            this.setState({
                                                saving: !0,
                                                errorMessage: null
                                            }), e = Object(d.d)("Something went wrong. Please try again later.", "CreateCommunityErrors"), r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.props.createCommunity(Object(p.a)({
                                                description: this.state.longDescription,
                                                displayName: this.state.displayName,
                                                name: this.state.name,
                                                rules: this.state.rules,
                                                summary: this.state.shortDescription
                                            }))];
                                        case 2:
                                            return (t = r.sent()).data.createCommunity && t.data.createCommunity.community && t.data.createCommunity.community.name ? (d.p.history.push("/communities/" + t.data.createCommunity.community.name), [2]) : (n = null, t.data.createCommunity ? t.data.createCommunity.error && (n = function(e) {
                                                var t = Object(d.d)("That name is unavailable", "CreateCommunityErrors");
                                                switch (e) {
                                                    case a.ACCOUNT_TOO_YOUNG:
                                                        return Object(d.d)("Your account must be at least 90 days old to create a Community", "CreateCommunityErrors");
                                                    case a.COMMUNITY_NAME_EXISTS:
                                                        return t;
                                                    case a.COMMUNITY_NAME_INVALID:
                                                        return Object(d.d)("That name contains invalid characters", "CreateCommunityErrors");
                                                    case a.COMMUNITY_NAME_RESERVED:
                                                        return t;
                                                    case a.DISPLAY_NAME_INVALID:
                                                        return Object(d.d)("That display name is invalid", "CreateCommunityErrors");
                                                    case a.DESCRIPTION_TOO_LONG:
                                                        return Object(d.d)("Your long description is too long", "CreateCommunityErrors");
                                                    case a.OWN_TO_MANY_COMMUNITIES:
                                                        return Object(d.d)("You cannot currently create more than 5 Communities", "CreateCommunityErrors");
                                                    case a.RULES_TOO_LONG:
                                                        return Object(d.d)("Your rules are too long", "CreateCommunityErrors");
                                                    case a.SUMMARY_TOO_LONG:
                                                        return Object(d.d)("Your short description is too long", "CreateCommunityErrors");
                                                    case a.TWO_FACTOR_NOT_ENABLED:
                                                        return Object(d.d)("You must have two-factor authentication enabled", "CreateCommunityErrors");
                                                    case a.UNVERIFIED_EMAIL:
                                                        return Object(d.d)("Your email must be verified to create a Community", "CreateCommunityErrors");
                                                    default:
                                                        return Object(d.d)("Something went wrong", "CreateCommunityErrors")
                                                }
                                            }(t.data.createCommunity.error)) : n = e, n && this.setState({
                                                saving: !1,
                                                errorMessage: n
                                            }), [3, 4]);
                                        case 3:
                                            return r.sent(), this.setState({
                                                saving: !1,
                                                errorMessage: e
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.shouldButtonDisable = function() {
                            return t.state.saving || !t.state.longDescription || !t.state.name || !t.state.rules || !t.state.shortDescription || !t.state.checked
                        }, t.getSupportsMarkdownText = function() {
                            return Object(d.d)("Supports <x:link>Markdown</x:link> (No HTML)", {
                                "x:link": function(e) {
                                    return u.createElement(_.U, {
                                        to: "https://help.twitch.tv/customer/portal/articles/839490-markdown-basics",
                                        targetBlank: !0
                                    }, e)
                                }
                            }, "CreateCommunityPage")
                        }, t.renderCreateButton = function(e) {
                            var n = t.props.isLoggedIn ? t.onClick : t.props.login;
                            return u.createElement(_.z, {
                                onClick: n,
                                disabled: t.shouldButtonDisable()
                            }, e)
                        }, t.onNameChange = function(e) {
                            t.setState({
                                name: e.target.value
                            })
                        }, t.onDisplayNameChange = function(e) {
                            t.setState({
                                displayName: e.target.value
                            })
                        }, t.onShortDescriptionChange = function(e) {
                            t.setState({
                                shortDescription: e.target.value
                            })
                        }, t.onLongDescriptionChange = function(e) {
                            t.setState({
                                longDescription: e.target.value
                            })
                        }, t.onRulesChange = function(e) {
                            t.setState({
                                rules: e.target.value
                            })
                        }, t.onCheckboxChange = function(e) {
                            t.setState({
                                checked: e.target.checked
                            })
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = Object(d.d)("Create a Community", "CreateCommunityPage"),
                            t = this.state.shortDescription ? this.state.shortDescription.length : 0,
                            n = Object(d.d)("{count}/160", {
                                count: t
                            }, "CreateCommunityPage"),
                            a = this.state.errorMessage && u.createElement(_.Wa, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                "data-test-selector": N.ErrorWrapper
                            }, u.createElement(_.W, {
                                color: _.O.Error
                            }, this.state.errorMessage));
                        return u.createElement(_.Wa, {
                            margin: 3
                        }, u.createElement(_.Wa, {
                            margin: {
                                bottom: 2
                            }
                        }, u.createElement(_.W, {
                            type: _.Nb.H2
                        }, e)), u.createElement(_.Wa, {
                            display: _.X.Flex,
                            flexDirection: _.Z.Row,
                            flexWrap: _.Aa.Wrap
                        }, u.createElement(_.xb, {
                            className: "create-community-page__form-wrapper",
                            background: _.r.Base,
                            flexShrink: 0,
                            flexGrow: 0,
                            border: !0,
                            padding: 2,
                            margin: {
                                right: 3
                            }
                        }, a, u.createElement(_.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(_.Da, {
                            id: "create-community-page__form-name",
                            label: Object(d.d)("Name *", "CreateCommunityPage")
                        }, u.createElement(_.Qa, {
                            id: "create-community-page__form-name",
                            onChange: this.onNameChange,
                            type: _.Sa.Text,
                            "data-test-selector": N.Name
                        }))), u.createElement(_.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(_.Da, {
                            id: "create-community-page__form-display-name",
                            label: Object(d.d)("Display Name", "CreateCommunityPage")
                        }, u.createElement(_.Qa, {
                            id: "create-community-page__form-display-name",
                            onChange: this.onDisplayNameChange,
                            type: _.Sa.Text,
                            "data-test-selector": N.DisplayName
                        }))), u.createElement(_.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(_.Da, {
                            id: "create-community-page__form-short-description",
                            label: Object(d.d)("Short Description *", "CreateCommunityPage"),
                            hint: n
                        }, Object(d.d)("A short description used in search results and social media links. 160 characters max.", "CreateCommunityPage"), u.createElement(_.Kb, {
                            id: "create-community-page__form-short-description",
                            onChange: this.onShortDescriptionChange,
                            "data-test-selector": N.ShortDescription
                        }))), u.createElement(_.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(_.Da, {
                            id: "create-community-page__form-long-description",
                            label: Object(d.d)("Long Description *", "CreateCommunityPage")
                        }, Object(d.d)("A long description that appears on the community page.", "CreateCommunityPage"), u.createElement(_.Kb, {
                            id: "create-community-page__form-long-description",
                            onChange: this.onLongDescriptionChange,
                            "data-test-selector": N.LongDescription
                        }), u.createElement(_.W, {
                            color: _.O.Alt2
                        }, this.getSupportsMarkdownText()))), u.createElement(_.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(_.Da, {
                            id: "create-community-page__form-rules",
                            label: Object(d.d)("Rules *", "CreateCommunityPage")
                        }, Object(d.d)("A set of rules outlining the types of games or content that is acceptable for this community. Must adhere to the <x:link>Twitch Terms of Service</x:link>.", {
                            "x:link": function(e) {
                                return u.createElement(_.U, {
                                    to: "https://twitch.tv/p/legal/terms-of-service/",
                                    targetBlank: !0
                                }, e)
                            }
                        }, "CreateCommunityPage"), u.createElement(_.Kb, {
                            id: "create-community-page__form-rules",
                            onChange: this.onRulesChange,
                            "data-test-selector": N.Rules
                        }), u.createElement(_.W, {
                            color: _.O.Alt2
                        }, this.getSupportsMarkdownText()))), u.createElement(_.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(_.N, {
                            label: Object(d.d)("I agree to the Twitch Community Guidelines", "CreateCommunityPage"),
                            onChange: this.onCheckboxChange,
                            "data-test-selector": N.CheckBox
                        })), this.renderCreateButton(e)), u.createElement(E, null)))
                    }, t
                }(u.Component),
                k = Object(l.compose)(Object(O.b)("CreateCommunityPage", {
                    autoReportInteractive: !0,
                    destination: h.a.CommunityCreate
                }), Object(C.a)(b, {
                    name: "createCommunity"
                }), Object(g.a)({
                    location: y.PageviewLocation.CommunityCreate
                }))(f);
            var M = Object(r.connect)(function(e) {
                return {
                    isLoggedIn: Object(c.f)(e)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    login: function() {
                        return Object(m.e)(o.a.CommunityCreate)
                    }
                }, e)
            })(k);
            n.d(t, "CreateCommunityPage", function() {
                return M
            })
        },
        O9qh: function(e, t, n) {},
        "eM/H": function(e, t, n) {}
    }
]);