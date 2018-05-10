webpackJsonp([70], {
    "5Arz": function(e, t) {},
    BAkg: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, a = n("RH2O"),
            i = n("2KeS"),
            o = n("+xm8"),
            c = n("f2i/"),
            s = n("Aj/L"),
            m = n("TToO"),
            u = n("GiK3"),
            l = n("3zLD"),
            d = n("6sO2"),
            p = n("7vx8"),
            _ = n("j7/Y"),
            g = n("oIkB"),
            C = n("w9tK"),
            h = n("vH/s"),
            y = n("CSlQ"),
            O = n("Odds"),
            E = (n("VR5Q"), function() {
                return u.createElement(O._8, {
                    className: "community-requirements",
                    flexGrow: 0,
                    flexShrink: 0
                }, u.createElement(O._35, {
                    border: !0,
                    background: O.n.Base,
                    padding: 1
                }, u.createElement(O._58, null, u.createElement("h4", null, Object(d.d)("Requirements", "CommunityRequirements")), u.createElement("ul", {
                    className: "community-requirements__list"
                }, u.createElement("li", null, Object(d.d)("Your account must be at least 90 days old", "CommunityRequirements")), u.createElement("li", null, Object(d.d)("You must have <x:link>two-factor authentication</x:link> enabled", {
                    "x:link": function(e) {
                        return u.createElement(O.O, {
                            key: "2fa",
                            to: "https://help.twitch.tv/customer/en/portal/articles/2186271-two-factor-authentication-with-authy",
                            targetBlank: !0
                        }, e)
                    }
                }, "CommunityRequirements")), u.createElement("li", null, Object(d.d)("You cannot currently create more than 5 Communities", "CommunityRequirements")), u.createElement("li", null, Object(d.d)("You must agree to the <x:link>Twitch Community Guidelines</x:link>", {
                    "x:link": function(e) {
                        return u.createElement(O.O, {
                            key: "agree",
                            to: "https://www.twitch.tv/p/legal/community-guidelines/",
                            targetBlank: !0
                        }, e)
                    }
                }, "CommunityRequirements"))))))
            });
        ! function(e) {
            e.ACCOUNT_TOO_YOUNG = "ACCOUNT_TOO_YOUNG", e.COMMUNITY_NAME_EXISTS = "COMMUNITY_NAME_EXISTS", e.COMMUNITY_NAME_INVALID = "COMMUNITY_NAME_INVALID", e.COMMUNITY_NAME_RESERVED = "COMMUNITY_NAME_RESERVED", e.DESCRIPTION_TOO_LONG = "DESCRIPTION_TOO_LONG", e.DISPLAY_NAME_INVALID = "DISPLAY_NAME_INVALID", e.INVALID_LANGUAGE = "INVALID_LANGUAGE", e.OWN_TO_MANY_COMMUNITIES = "OWN_TO_MANY_COMMUNITIES", e.RULES_TOO_LONG = "RULES_TOO_LONG", e.SUMMARY_TOO_LONG = "SUMMARY_TOO_LONG", e.TWO_FACTOR_NOT_ENABLED = "TWO_FACTOR_NOT_ENABLED", e.UNVERIFIED_EMAIL = "UNVERIFIED_EMAIL"
        }(r || (r = {}));
        var N, k = n("Nr/G");
        n("5Arz");
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
                        return m.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return m.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!(this.state.longDescription && this.state.name && this.state.rules && this.state.shortDescription)) return [2];
                                        this.setState({
                                            saving: !0,
                                            errorMessage: null
                                        }), e = Object(d.d)("Something went wrong. Please try again later.", "CreateCommunityErrors"), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.createCommunity(Object(g.a)({
                                            description: this.state.longDescription,
                                            displayName: this.state.displayName,
                                            name: this.state.name,
                                            rules: this.state.rules,
                                            summary: this.state.shortDescription
                                        }))];
                                    case 2:
                                        return (t = a.sent()).data.createCommunity && t.data.createCommunity.community && t.data.createCommunity.community.name ? (d.o.history.push("/communities/" + t.data.createCommunity.community.name), [2]) : (n = null, t.data.createCommunity ? t.data.createCommunity.error && (n = function(e) {
                                            var t = Object(d.d)("That name is unavailable", "CreateCommunityErrors");
                                            switch (e) {
                                                case r.ACCOUNT_TOO_YOUNG:
                                                    return Object(d.d)("Your account must be at least 90 days old to create a Community", "CreateCommunityErrors");
                                                case r.COMMUNITY_NAME_EXISTS:
                                                    return t;
                                                case r.COMMUNITY_NAME_INVALID:
                                                    return Object(d.d)("That name contains invalid characters", "CreateCommunityErrors");
                                                case r.COMMUNITY_NAME_RESERVED:
                                                    return t;
                                                case r.DISPLAY_NAME_INVALID:
                                                    return Object(d.d)("That display name is invalid", "CreateCommunityErrors");
                                                case r.DESCRIPTION_TOO_LONG:
                                                    return Object(d.d)("Your long description is too long", "CreateCommunityErrors");
                                                case r.OWN_TO_MANY_COMMUNITIES:
                                                    return Object(d.d)("You cannot currently create more than 5 Communities", "CreateCommunityErrors");
                                                case r.RULES_TOO_LONG:
                                                    return Object(d.d)("Your rules are too long", "CreateCommunityErrors");
                                                case r.SUMMARY_TOO_LONG:
                                                    return Object(d.d)("Your short description is too long", "CreateCommunityErrors");
                                                case r.TWO_FACTOR_NOT_ENABLED:
                                                    return Object(d.d)("You must have two-factor authentication enabled", "CreateCommunityErrors");
                                                case r.UNVERIFIED_EMAIL:
                                                    return Object(d.d)("Your email must be verified to create a Community", "CreateCommunityErrors");
                                                default:
                                                    return Object(d.d)("Something went wrong", "CreateCommunityErrors")
                                            }
                                        }(t.data.createCommunity.error)) : n = e, n && this.setState({
                                            saving: !1,
                                            errorMessage: n
                                        }), [3, 4]);
                                    case 3:
                                        return a.sent(), this.setState({
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
                                return u.createElement(O.O, {
                                    key: "markdown-link",
                                    to: "https://help.twitch.tv/customer/portal/articles/839490-markdown-basics",
                                    targetBlank: !0
                                }, e)
                            }
                        }, "CreateCommunityPage")
                    }, t.renderCreateButton = function(e) {
                        var n = t.props.isLoggedIn ? t.onClick : t.props.login;
                        return u.createElement(O.v, {
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
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Create a Community", "CreateCommunityPage"),
                        t = this.state.shortDescription ? this.state.shortDescription.length : 0,
                        n = Object(d.d)("{count}/160", {
                            count: t
                        }, "CreateCommunityPage"),
                        r = this.state.errorMessage && u.createElement(O._8, {
                            fullWidth: !0,
                            margin: {
                                bottom: 1
                            },
                            "data-test-selector": N.ErrorWrapper
                        }, u.createElement(O.Q, {
                            color: O.K.Error
                        }, this.state.errorMessage));
                    return u.createElement(O._8, {
                        margin: 3
                    }, u.createElement(O._8, {
                        margin: {
                            bottom: 2
                        }
                    }, u.createElement(O.Q, {
                        type: O._49.H2
                    }, e)), u.createElement(O._8, {
                        display: O.R.Flex,
                        flexDirection: O.T.Row,
                        flexWrap: O.U.Wrap
                    }, u.createElement(O._35, {
                        className: "create-community-page__form-wrapper",
                        background: O.n.Base,
                        flexShrink: 0,
                        flexGrow: 0,
                        border: !0,
                        padding: 2,
                        margin: {
                            right: 3
                        }
                    }, r, u.createElement(O._8, {
                        margin: {
                            bottom: 1
                        }
                    }, u.createElement(O.W, {
                        id: "create-community-page__form-name",
                        label: Object(d.d)("Name *", "CreateCommunityPage")
                    }, u.createElement(O._4, {
                        id: "create-community-page__form-name",
                        onChange: this.onNameChange,
                        type: O._5.Text,
                        "data-test-selector": N.Name
                    }))), u.createElement(O._8, {
                        margin: {
                            bottom: 1
                        }
                    }, u.createElement(O.W, {
                        id: "create-community-page__form-display-name",
                        label: Object(d.d)("Display Name", "CreateCommunityPage")
                    }, u.createElement(O._4, {
                        id: "create-community-page__form-display-name",
                        onChange: this.onDisplayNameChange,
                        type: O._5.Text,
                        "data-test-selector": N.DisplayName
                    }))), u.createElement(O._8, {
                        margin: {
                            bottom: 1
                        }
                    }, u.createElement(O.W, {
                        id: "create-community-page__form-short-description",
                        label: Object(d.d)("Short Description *", "CreateCommunityPage"),
                        hint: n
                    }, Object(d.d)("A short description used in search results and social media links. 160 characters max.", "CreateCommunityPage"), u.createElement(O._46, {
                        id: "create-community-page__form-short-description",
                        onChange: this.onShortDescriptionChange,
                        "data-test-selector": N.ShortDescription
                    }))), u.createElement(O._8, {
                        margin: {
                            bottom: 1
                        }
                    }, u.createElement(O.W, {
                        id: "create-community-page__form-long-description",
                        label: Object(d.d)("Long Description *", "CreateCommunityPage")
                    }, Object(d.d)("A long description that appears on the community page.", "CreateCommunityPage"), u.createElement(O._46, {
                        id: "create-community-page__form-long-description",
                        onChange: this.onLongDescriptionChange,
                        "data-test-selector": N.LongDescription
                    }), u.createElement(O.Q, {
                        color: O.K.Alt2
                    }, this.getSupportsMarkdownText()))), u.createElement(O._8, {
                        margin: {
                            bottom: 1
                        }
                    }, u.createElement(O.W, {
                        id: "create-community-page__form-rules",
                        label: Object(d.d)("Rules *", "CreateCommunityPage")
                    }, Object(d.d)("A set of rules outlining the types of games or content that is acceptable for this community. Must adhere to the <x:link>Twitch Terms of Service</x:link>.", {
                        "x:link": function(e) {
                            return u.createElement(O.O, {
                                key: "tos-link",
                                to: "/p/legal/terms-of-service/",
                                targetBlank: !0
                            }, e)
                        }
                    }, "CreateCommunityPage"), u.createElement(O._46, {
                        id: "create-community-page__form-rules",
                        onChange: this.onRulesChange,
                        "data-test-selector": N.Rules
                    }), u.createElement(O.Q, {
                        color: O.K.Alt2
                    }, this.getSupportsMarkdownText()))), u.createElement(O._8, {
                        margin: {
                            bottom: 1
                        }
                    }, u.createElement(O.J, {
                        label: Object(d.d)("I agree to the Twitch Community Guidelines", "CreateCommunityPage"),
                        onChange: this.onCheckboxChange,
                        "data-test-selector": N.CheckBox
                    })), this.renderCreateButton(e)), u.createElement(E, null)))
                }, t
            }(u.Component),
            b = Object(l.compose)(Object(y.d)("CreateCommunityPage", {
                autoReportInteractive: !0,
                destination: C.a.CommunityCreate
            }), Object(p.a)(k, {
                name: "createCommunity"
            }), Object(_.a)({
                location: h.PageviewLocation.CommunityCreate
            }))(f);
        var T = Object(a.b)(function(e) {
            return {
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(i.b)({
                login: function() {
                    return Object(c.f)(o.a.CommunityCreate)
                }
            }, e)
        })(b);
        n.d(t, "CreateCommunityPage", function() {
            return T
        })
    },
    "Nr/G": function(e, t) {
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
    VR5Q: function(e, t) {},
    "j7/Y": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("OAwv"),
            i = n("GiK3"),
            o = n("F8kA"),
            c = n("6sO2");

        function s(e) {
            return function(t) {
                var n = function(n) {
                    function o(t) {
                        var a = n.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = r.__assign({}, e.properties));
                                var n = r.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var i = a.referenceTracking,
                                    o = i.content,
                                    s = i.medium,
                                    m = i.content_index;
                                c.o.tracking.trackPageview(r.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: m,
                                    location: e.location
                                }, t))
                            }
                        }, c.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return r.__extends(o, n), o.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, o.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, o.prototype.render = function() {
                        return i.createElement(t, r.__assign({}, this.props))
                    }, o.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? a.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var r = "",
                                i = a.stringify(t);
                            i.length > 0 && (r = "?" + i), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: r
                            })
                        }
                        return n
                    }, o
                }(i.Component);
                return Object(o.f)(n)
            }
        }
        n.d(t, "a", function() {
            return s
        })
    }
});
//# sourceMappingURL=pages.create-community-a2a52f4d1a04a6bc091183b9a0520dd4.js.map