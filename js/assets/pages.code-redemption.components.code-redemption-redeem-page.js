(window.webpackJsonp = window.webpackJsonp || []).push([
    [190], {
        "5zXJ": function(e, t, n) {
            "use strict";
            n.d(t, "v", function() {
                return a
            }), n.d(t, "c", function() {
                return r
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "t", function() {
                return d
            }), n.d(t, "n", function() {
                return l
            }), n.d(t, "p", function() {
                return u
            }), n.d(t, "q", function() {
                return p
            }), n.d(t, "o", function() {
                return m
            }), n.d(t, "r", function() {
                return f
            }), n.d(t, "l", function() {
                return g
            }), n.d(t, "m", function() {
                return h
            }), n.d(t, "j", function() {
                return k
            }), n.d(t, "g", function() {
                return v
            }), n.d(t, "e", function() {
                return b
            }), n.d(t, "i", function() {
                return S
            }), n.d(t, "h", function() {
                return y
            }), n.d(t, "f", function() {
                return E
            }), n.d(t, "k", function() {
                return _
            }), n.d(t, "u", function() {
                return C
            }), n.d(t, "s", function() {
                return O
            }), n.d(t, "d", function() {
                return N
            });
            var i, o = n("uYEN"),
                a = {
                    ERROR_DISPLAY_TIMEOUT: 5e3,
                    GET_BALANCE_RATE_LIMIT: 5e3,
                    UNDO_PROMPT_DURATION: 5e3
                },
                r = "https://d3aqoihi2n8ty8.cloudfront.net",
                s = r + "/cheer",
                c = r + "/actions",
                d = "bonus",
                l = 8e5,
                u = 1e5,
                p = 25e4,
                m = 500,
                f = 1e3,
                g = "cheer",
                h = o.a.Purple,
                k = "UNKNOWN",
                v = "FIRST_PARTY",
                b = "CUSTOM",
                S = "SPONSORED",
                y = "THIRD_PARTY",
                E = "DISPLAY_ONLY",
                _ = ((i = {})[o.a.Gray] = "#979797", i[o.a.Purple] = "#9c3ee8", i[o.a.Green] = "#1db2a5", i[o.a.Blue] = "#0099fe", i[o.a.Red] = "#f43021", i[o.a.Yellow] = "#f3a71a", i),
                C = "bits_sponsored_cheermotes",
                O = "bits_sponsored_cheermotes_announcement",
                N = "bits_charity_event"
        },
        "8Ad5": function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.Enter = 13] = "Enter", e[e.Esc = 27] = "Esc", e[e.Space = 32] = "Space", e[e.Left = 37] = "Left", e[e.Up = 38] = "Up", e[e.Right = 39] = "Right", e[e.Down = 40] = "Down", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.At = 64] = "At", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.Comma = 188] = "Comma", e[e.Period = 190] = "Period"
                }(i || (i = {}))
        },
        "E2x/": function(e, t, n) {},
        JhNq: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "CodeRedemptionValidation_RedeemKey"
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
                                    value: "RedeemClaimableInput"
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
                                value: "redeemClaimable"
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
                                        value: "key"
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
                                                value: "type"
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
                                                        value: "id"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "canClaim"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "statusCode"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "description"
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
                    end: 173
                }
            };
            n.loc.source = {
                body: "mutation CodeRedemptionValidation_RedeemKey($input: RedeemClaimableInput!) {\nredeemClaimable(input: $input) {\nkey {\nid\ntype\nself {\nid\ncanClaim\nstatusCode\n}\ndescription\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        KXOz: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CodeRedemptionValidation_GetKeyStatus"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "code"
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
                                value: "key"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "code"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "code"
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
                                        value: "type"
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
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "canClaim"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "statusCode"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "description"
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
                body: "query CodeRedemptionValidation_GetKeyStatus($code: String!) {\nkey(code: $code) {\nid\ntype\nself {\nid\ncanClaim\nstatusCode\n}\ndescription\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "V+GM": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                o = n("cr+I"),
                a = n("q1tI"),
                r = n("wIs1"),
                s = n("/7QA");

            function c(e) {
                return function(t) {
                    var n = function(n) {
                        function r(t) {
                            var o = n.call(this, t) || this;
                            return o.tracked = !1, o.referenceTracking = {}, o.trackPageview = function() {
                                if (!(o.tracked || e.skip && e.skip(o.props))) {
                                    o.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(o.props) : e.properties && (t = i.__assign({}, e.properties));
                                    var n = i.__assign({}, o.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var a = o.referenceTracking,
                                        r = a.content,
                                        c = a.medium,
                                        d = a.content_index,
                                        l = a.email_id;
                                    s.p.tracking.trackPageview(i.__assign({
                                        content: r,
                                        medium: c,
                                        content_index: d,
                                        email_id: l,
                                        location: e.location
                                    }, t))
                                }
                            }, s.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), o
                        }
                        return i.__extends(r, n), r.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, r.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, r.prototype.render = function() {
                            return a.createElement(t, i.__assign({}, this.props))
                        }, r.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? o.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var i = "",
                                    a = o.stringify(t);
                                a.length > 0 && (i = "?" + a), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: i
                                })
                            }
                            return n
                        }, r
                    }(a.Component);
                    return Object(r.a)(n)
                }
            }
            n.d(t, "a", function() {
                return c
            })
        },
        gGri: function(e, t, n) {
            "use strict";
            n.r(t);
            var i, o = n("/MKj"),
                a = n("kRBY"),
                r = n("mrSG"),
                s = n("cr+I"),
                c = n("q1tI"),
                d = n("oJmH"),
                l = n("mLw1"),
                u = n("/7QA"),
                p = n("V+GM"),
                m = n("wUQP"),
                f = n("NvVO"),
                g = n("2xye"),
                h = n("5zXJ"),
                k = n("GnwI"),
                v = n("5ELF"),
                b = n("yR8l"),
                S = n("8Ad5"),
                y = n("geRD"),
                E = n("Ue10"),
                _ = function() {
                    return c.createElement(E.Wa, {
                        fullWidth: !0,
                        display: E.X.Flex,
                        margin: {
                            top: 1
                        }
                    }, c.createElement(E.W, {
                        fontSize: E.Ba.Size7,
                        color: E.O.Alt2
                    }, Object(u.d)("Fetching key status...", "RedeemPage")), c.createElement(E.Wa, {
                        margin: {
                            left: 2
                        }
                    }, c.createElement(E.Ya, null)))
                },
                C = n("KXOz");
            n("lAq8");
            ! function(e) {
                e.CannotClaimMessage = "claimed", e.ExpiredMessage = "expired_message"
            }(i || (i = {}));
            var O = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        var e = this.props.data;
                        e.loading || (e.error || !e.loading && !e.error && null !== e.key && e.key.self && !e.key.self.canClaim ? this.props.onInvalidCode() : e && !e.loading && !e.error && null !== e.key && e.key.self && e.key.self.canClaim && this.props.onValidCode(e.key.description))
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return c.createElement(_, null);
                        if (!this.props.data.loading && (this.props.data.error || null === this.props.data.key)) return c.createElement(E.Wa, {
                            fullWidth: !0,
                            margin: {
                                top: 1
                            }
                        }, c.createElement(E.W, {
                            fontSize: E.Ba.Size7,
                            color: E.O.Error
                        }, Object(u.d)("Could not find the key", "RedeemPage")));
                        if (!this.props.data.loading && null !== this.props.data.key) {
                            var e = this.props.data.key,
                                t = !1,
                                n = "";
                            return null !== e.self && (t = e.self.canClaim, n = e.self.statusCode ? e.self.statusCode : ""), c.createElement(c.Fragment, null, !t && "claimed" === n && c.createElement(E.Wa, {
                                fullWidth: !0,
                                margin: {
                                    top: 1
                                }
                            }, c.createElement(E.W, {
                                "data-test-selector": i.CannotClaimMessage,
                                fontSize: E.Ba.Size7,
                                color: E.O.Error
                            }, Object(u.d)("Oh no! Bummer, this code has already been redeemed.", "RedeemPage"))), !t && "invalidated" === n && c.createElement(E.Wa, {
                                fullWidth: !0,
                                margin: {
                                    top: 1
                                }
                            }, c.createElement(E.W, {
                                "data-test-selector": i.ExpiredMessage,
                                fontSize: E.Ba.Size7,
                                color: E.O.Error
                            }, Object(u.d)("Oh no! This code is expired.", "RedeemPage"))), t && c.createElement(E.Wa, {
                                fullWidth: !0
                            }, c.createElement(E.Wa, {
                                className: "code-redemption-validation__success",
                                attachLeft: !0,
                                margin: {
                                    top: 1
                                }
                            }, c.createElement(E.W, {
                                fontSize: E.Ba.Size7,
                                color: E.O.Alt2
                            }, Object(u.d)("This is a valid code for {keyType}. Select Redeem to add to your account.", {
                                keyType: e.description
                            }, "RedeemPage")))))
                        }
                    }, t
                }(c.Component),
                N = Object(d.compose)(Object(b.a)(C, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            skip: !e.user || "" === e.code,
                            variables: {
                                code: e.code
                            }
                        }
                    }
                }))(O);
            var w, R = Object(o.connect)(function(e) {
                    return {
                        user: Object(a.e)(e)
                    }
                })(N),
                D = n("fvjX"),
                P = n("1/iK"),
                T = n("y5D0");
            ! function(e) {
                e.LoginPrompt = "login_prompt_message", e.SuccessNotification = "success_notification_message", e.ErrorNotification = "error_notification_message"
            }(w || (w = {}));
            var j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.closeWindow = function() {
                        var e = t.props.closeNotification;
                        e && e()
                    }, t.onLoginClick = function(e) {
                        e.preventDefault(), t.props.login()
                    }, t.onSignUpClick = function(e) {
                        e.preventDefault(), t.props.signup()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = Object(u.d)("Login", "RedeemPage"),
                        t = Object(u.d)("Close", "RedeemPage"),
                        n = Object(u.d)("{description} have been redeemed to your account.", {
                            description: this.props.description ? this.props.description : "[No description provided]"
                        }, "RedeemPage"),
                        i = Object(u.d)("Bummer, this code is invalid ({description}). Please try again.", {
                            description: this.props.description ? this.props.description : "No description provided"
                        }, "RedeemPage");
                    return c.createElement(E.xb, {
                        elevation: 3,
                        margin: {
                            top: 1
                        },
                        color: E.O.Base
                    }, !this.props.user && c.createElement(E.Ma, {
                        closeButtonAriaLabel: t,
                        closeButtonOnClick: this.closeWindow,
                        title: e,
                        description: Object(u.d)("You must log in to an existing account or create a new account to redeem your code.", "RedeemPage"),
                        type: E.Na.Info,
                        actions: [{
                            children: e,
                            onClick: this.onLoginClick
                        }, {
                            children: Object(u.d)("Sign up", "RedeemPage"),
                            onClick: this.onSignUpClick
                        }],
                        "data-test-selector": w.LoginPrompt
                    }), this.props.user && this.props.success && c.createElement(E.Ma, {
                        closeButtonAriaLabel: t,
                        closeButtonOnClick: this.closeWindow,
                        description: n,
                        title: Object(u.d)("Success", "RedeemPage"),
                        type: E.Na.Success,
                        actions: [{
                            children: Object(u.d)("Back to Twitch", "RedeemPage"),
                            linkTo: {
                                pathname: "/"
                            }
                        }, {}],
                        "data-test-selector": w.SuccessNotification
                    }), this.props.user && !this.props.success && c.createElement(E.Ma, {
                        closeButtonAriaLabel: t,
                        closeButtonOnClick: this.closeWindow,
                        description: i,
                        title: Object(u.d)("Oh no!", "RedeemPage"),
                        type: E.Na.Info,
                        "data-test-selector": w.ErrorNotification
                    }))
                }, t
            }(c.Component);
            var V, W = Object(o.connect)(function(e) {
                    return {
                        user: Object(a.e)(e)
                    }
                }, function(e) {
                    return Object(D.bindActionCreators)({
                        login: function() {
                            return Object(T.e)(P.a.CodeRedemptionPage)
                        },
                        signup: function() {
                            return Object(T.g)(P.a.CodeRedemptionPage)
                        }
                    }, e)
                })(j),
                L = n("JhNq");
            ! function(e) {
                e.InputTitle = "input-title"
            }(V || (V = {}));
            var x, A = 15,
                I = 1e3;
            ! function(e) {
                e.Default = "default", e.FakeLoading = "fake_loading", e.Validation = "validation", e.Success = "success", e.Error = "error", e.Login = "login"
            }(x || (x = {}));
            var F = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.timeout = null, n.onChange = function(e) {
                            var t = n.sanitizeValue(e.currentTarget.value);
                            n.setState({
                                inputValue: t
                            }), t.length === A ? (n.setState({
                                workflowStep: x.FakeLoading
                            }), n.timeout = setTimeout(function() {
                                n.state.workflowStep === x.FakeLoading && n.setState({
                                    workflowStep: x.Validation
                                })
                            }, I)) : (n.timeout && clearTimeout(n.timeout), n.setState({
                                workflowStep: x.Default,
                                isCodeValid: !1,
                                codeErrorState: !1
                            }))
                        }, n.onValidCode = function(e) {
                            n.setState({
                                isCodeValid: !0,
                                description: e,
                                codeErrorState: !1
                            })
                        }, n.onInvalidCode = function() {
                            n.setState({
                                codeErrorState: !0
                            })
                        }, n.onInputSubmit = function() {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var e, t;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.props.user || !this.state.isCodeValid) return [2];
                                            e = {
                                                keyCode: this.state.inputValue
                                            }, this.setState({
                                                inputValue: "",
                                                isCodeValid: !1
                                            }), t = Object(y.a)(e), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.props.redeemKey(t)];
                                        case 2:
                                            return n.sent(), this.setState({
                                                workflowStep: x.Success,
                                                codeErrorState: !1
                                            }), [3, 4];
                                        case 3:
                                            return n.sent(), this.setState({
                                                workflowStep: x.Error,
                                                codeErrorState: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.onKeyDown = function(e) {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var t;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            switch (t = e.charCode || e.keyCode, t) {
                                                case S.a.Enter:
                                                    return [3, 1]
                                            }
                                            return [3, 4];
                                        case 1:
                                            return e.preventDefault(), this.state.isCodeValid ? [4, this.onInputSubmit()] : [3, 3];
                                        case 2:
                                            n.sent(), n.label = 3;
                                        case 3:
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.closeNotification = function() {
                            n.setState({
                                workflowStep: x.Default
                            })
                        }, n.sanitizeValue = function(e) {
                            return e.replace(/([^a-zA-Z0-9])+/gi, "").substring(0, A)
                        }, n.getDisplayValue = function(e) {
                            return (n.sanitizeValue(e).match(/.{1,5}/g) || []).join("-").toUpperCase()
                        };
                        var i = n.props.code ? n.sanitizeValue(n.props.code) : "",
                            o = x.Login;
                        return n.props.user && (o = x.Default, i.length === A && (o = x.Validation)), n.state = {
                            workflowStep: o,
                            inputValue: i,
                            isCodeValid: !1,
                            codeErrorState: !1,
                            description: ""
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return c.createElement(c.Fragment, null, c.createElement(E.Wa, {
                            padding: {
                                bottom: 4
                            },
                            textAlign: E.Jb.Left
                        }, c.createElement(E.W, {
                            bold: !0,
                            fontSize: E.Ba.Size1,
                            lineHeight: E.Xa.Heading,
                            color: E.O.Base
                        }, Object(u.d)("Redeem your Twitch code", "RedeemPage")), this.props.user && this.state.isCodeValid && c.createElement(E.Wa, {
                            padding: {
                                top: 1
                            }
                        }, c.createElement(E.W, {
                            color: E.O.Base
                        }, Object(u.d)("{item} will be added to your <x:bold></x:bold> account.", {
                            item: this.state.description,
                            "x:bold": function() {
                                return c.createElement(E.W, {
                                    bold: !0,
                                    type: E.Nb.Span
                                }, e.props.user.displayName)
                            }
                        }, "RedeemPage")))), c.createElement(E.Wa, {
                            className: "code-redemption-body__input",
                            fullWidth: !0
                        }, c.createElement(E.Wa, {
                            padding: {
                                bottom: 1
                            }
                        }, c.createElement(E.W, {
                            "data-test-selector": V.InputTitle,
                            bold: !0,
                            color: this.state.codeErrorState ? E.O.Error : E.O.Alt
                        }, Object(u.d)("Enter code", "RedeemPage"))), c.createElement(E.Ia, null, c.createElement(E.P, {
                            cols: {
                                default: 12,
                                sm: 9
                            }
                        }, c.createElement(E.Wa, {
                            margin: {
                                bottom: 1
                            },
                            textAlign: E.Jb.Left
                        }, c.createElement(E.Qa, {
                            placeholder: "00000-00000-00000",
                            autoFocus: !0,
                            disabled: !this.props.user,
                            onKeyDown: this.onKeyDown,
                            onChange: this.onChange,
                            type: E.Sa.Text,
                            maxLength: A + 2,
                            error: this.state.codeErrorState,
                            value: this.getDisplayValue(this.state.inputValue)
                        }))), c.createElement(E.P, {
                            cols: {
                                default: 12,
                                sm: 3
                            }
                        }, c.createElement(E.z, {
                            disabled: !this.props.user || !this.state.inputValue || !this.state.isCodeValid,
                            onClick: this.onInputSubmit,
                            fullWidth: !0
                        }, Object(u.d)("Redeem", "RedeemPage"))))), !this.props.user && this.state.workflowStep === x.Login && c.createElement(W, {
                            closeNotification: this.closeNotification
                        }), this.props.user && this.state.workflowStep === x.FakeLoading && c.createElement(_, null), this.props.user && this.state.workflowStep === x.Validation && c.createElement(R, {
                            code: this.state.inputValue,
                            onValidCode: this.onValidCode,
                            onInvalidCode: this.onInvalidCode
                        }), this.props.user && this.state.workflowStep === x.Success && c.createElement(W, {
                            success: !0,
                            description: this.state.description,
                            closeNotification: this.closeNotification
                        }), this.props.user && this.state.workflowStep === x.Error && c.createElement(W, {
                            success: !1,
                            description: this.state.description,
                            closeNotification: this.closeNotification
                        }))
                    }, t.prototype.componentWillUnmount = function() {
                        this.timeout && clearTimeout(this.timeout)
                    }, t
                }(c.Component),
                B = Object(d.compose)(Object(b.a)(L, {
                    name: "redeemKey"
                }))(F);
            var z = Object(o.connect)(function(e) {
                    return {
                        user: Object(a.e)(e)
                    }
                })(B),
                M = (n("E2x/"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        u.p.setPageTitle(Object(u.d)("Redeem Code", "RedeemPage"))
                    }, t.prototype.render = function() {
                        var e = u.b.get("code_redemption_redeem_page", m.a.Off);
                        if (e === m.a.Off) return c.createElement(l.a, {
                            to: "/"
                        });
                        if (!(e !== m.a.StaffOnly || this.props.user && this.props.user.roles && this.props.user.roles.isStaff)) return c.createElement(l.a, {
                            to: "/"
                        });
                        var t = s.parse(this.props.location.search);
                        return c.createElement(c.Fragment, null, c.createElement(v.a, {
                            darkModeEnabled: !0
                        }), c.createElement(E.xb, {
                            background: E.r.Alt,
                            className: "code-redemption-page",
                            fullWidth: !0,
                            fullHeight: !0,
                            alignContent: E.e.Center,
                            overflow: E.Za.Auto
                        }, c.createElement(E.Ia, {
                            fullHeight: !0
                        }, c.createElement(E.P, {
                            cols: {
                                default: 12,
                                xs: 6
                            },
                            order: {
                                default: E.Q.Last,
                                xs: E.Q.First
                            }
                        }, c.createElement("img", {
                            src: h.c + "/code-redemption/CodeRedemption-Image.jpg",
                            alt: ""
                        })), c.createElement(E.P, {
                            cols: {
                                default: 12,
                                xs: 6
                            },
                            order: {
                                default: E.Q.First,
                                xs: E.Q.Last
                            }
                        }, c.createElement(E.Wa, {
                            padding: {
                                top: 3
                            }
                        }, c.createElement(E.Wa, {
                            className: "code-redemption-page__body",
                            fullWidth: !0,
                            padding: {
                                left: 1,
                                right: 1,
                                bottom: 1
                            }
                        }, c.createElement(z, {
                            code: t.code
                        })))))))
                    }, t
                }(c.Component)),
                G = Object(d.compose)(Object(k.b)("RedeemPage", {
                    destination: f.a.CodeRedemptionPage,
                    autoReportInteractive: !0
                }), Object(p.a)({
                    location: g.PageviewLocation.CodeRedemptionPage
                }))(M);
            var U = Object(o.connect)(function(e) {
                return {
                    user: Object(a.e)(e)
                }
            })(G);
            n.d(t, "RedeemPageComponent", function() {
                return U
            })
        },
        lAq8: function(e, t, n) {},
        uYEN: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.Gray = 1] = "Gray", e[e.Purple = 100] = "Purple", e[e.Green = 1e3] = "Green", e[e.Blue = 5e3] = "Blue", e[e.Red = 1e4] = "Red", e[e.Yellow = 1e5] = "Yellow"
                }(i || (i = {}))
        },
        wUQP: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "c", function() {
                return d
            });
            var i, o, a = n("/7QA"),
                r = n("kRBY");

            function s(e) {
                var t = a.p.store.getState(),
                    n = a.b.get(e, i.Off);
                return !!(n === i.On || n === i.StaffOnly && Object(r.g)(t))
            }! function(e) {
                e.On = "on", e.Off = "off", e.StaffOnly = "staff"
            }(i || (i = {})),
            function(e) {
                e[e.Enabled = 1] = "Enabled", e[e.Disabled = 0] = "Disabled"
            }(o || (o = {}));
            var c = Math.pow(2, 32);

            function d(e) {
                var t = a.b.get(e, [0, o.Disabled]),
                    n = t[0],
                    i = t[1],
                    s = a.p.session.deviceID,
                    d = a.p.store.getState();
                return !(i !== o.Enabled || !Object(r.g)(d)) || function(e, t) {
                    for (var n = void 0 === t ? 2166136261 : t, i = 0, o = e.length; i < o; i++) n ^= e.charCodeAt(i), n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24);
                    return n >>> 0
                }(s + "-" + e) / c < n
            }
        }
    }
]);