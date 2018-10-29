(window.webpackJsonp = window.webpackJsonp || []).push([
    [76, 29], {
        "1txG": function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "UsernameValidator_User"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "username"
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
                                value: "isUsernameAvailable"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "username"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "username"
                                    }
                                }
                            }],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 93
                }
            };
            r.loc.source = {
                body: "query UsernameValidator_User($username: String!) {\nisUsernameAvailable(username: $username)\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        "4PHc": function(e, t, r) {},
        "4uwt": function(e, t, r) {
            "use strict";
            r.r(t);
            var n, o = r("mrSG"),
                a = r("q1tI"),
                s = r("/7QA"),
                i = r("MgK0"),
                c = r("XWOp");

            function u(e, t, r) {
                void 0 === t && (t = {});
                var n = r.logger;
                return o.__awaiter(this, void 0, void 0, function() {
                    return o.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, function(e, t) {
                                    var r = t.logger;
                                    return o.__awaiter(this, void 0, void 0, function() {
                                        var t, n, a, u;
                                        return o.__generator(this, function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    r.debug("Getting user data from GraphQL with new token"), t = s.p.apollo.authToken, o.label = 1;
                                                case 1:
                                                    return o.trys.push([1, 3, 4, 5]), s.p.apollo.authToken = e, [4, s.p.apollo.client.query({
                                                        fetchPolicy: "network-only",
                                                        query: c
                                                    })];
                                                case 2:
                                                    return (n = o.sent()).data.currentUser ? (a = {
                                                        authToken: e,
                                                        displayName: n.data.currentUser.displayName,
                                                        id: n.data.currentUser.id,
                                                        login: n.data.currentUser.login,
                                                        roles: {
                                                            isStaff: !!n.data.currentUser.roles && !!n.data.currentUser.roles.isStaff
                                                        }
                                                    }, Object(i.n)(a, {
                                                        config: s.a,
                                                        logger: r
                                                    }), [3, 5]) : (r.error(new Error("Failed to get user data from GraphQL, but there was no client error."), "Failed to get user data from GraphQL, but there was no client error."), [2]);
                                                case 3:
                                                    return u = o.sent(), r.error(u, "Failed to get user data from GraphQL."), [3, 5];
                                                case 4:
                                                    return s.p.apollo.authToken = t, [7];
                                                case 5:
                                                    return [2]
                                            }
                                        })
                                    })
                                }(e, {
                                    logger: n
                                })];
                            case 1:
                                return r.sent(), t && t.next ? (n.debug("Navigating to " + t.next), window.location.assign(t.next)) : (n.debug("'next' is not provided, reloading page"), window.location.reload()), [2]
                        }
                    })
                })
            }

            function l(e, t, r) {
                var n = r.logger;
                return o.__awaiter(this, void 0, Promise, function() {
                    var r, a, s, c, l, p;
                    return o.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                Object(i.i)() && (e += "?trusted_request=true"), r = null, o.label = 1;
                            case 1:
                                return o.trys.push([1, 3, , 4]), [4, fetch(e, {
                                    method: "POST",
                                    credentials: "include",
                                    body: JSON.stringify(t)
                                })];
                            case 2:
                                return r = o.sent(), [3, 4];
                            case 3:
                                return a = o.sent(), n.warn("Request to " + e + " failed.", {
                                    err: a
                                }), [2, {
                                    success: !1
                                }];
                            case 4:
                                if (200 !== r.status) return [3, 9];
                                o.label = 5;
                            case 5:
                                return o.trys.push([5, 7, , 8]), [4, r.json()];
                            case 6:
                                return s = o.sent(), [3, 8];
                            case 7:
                                return c = o.sent(), n.warn("Unable to parse response JSON", {
                                    err: c
                                }), [2, {
                                    success: !1
                                }];
                            case 8:
                                return n.debug("Received success response"), [2, {
                                    success: !0,
                                    complete: function(e) {
                                        return u(s.access_token, e, {
                                            logger: n
                                        })
                                    }
                                }];
                            case 9:
                                l = void 0, o.label = 10;
                            case 10:
                                return o.trys.push([10, 12, , 13]), [4, r.json()];
                            case 11:
                                return l = o.sent(), [3, 13];
                            case 12:
                                return p = o.sent(), n.warn("Unable to parse response JSON", {
                                    err: p
                                }), [2, {
                                    success: !1
                                }];
                            case 13:
                                return n.debug("Received error response", {
                                    response: l
                                }), [2, {
                                    success: !1,
                                    errorCode: l.error_code,
                                    errorDescription: l.error_description,
                                    captchaProof: l.captcha_proof,
                                    smsProof: l.sms_proof
                                }]
                        }
                    })
                })
            }! function(e) {
                e[e.DeviceCookieThrottleReached = 3009] = "DeviceCookieThrottleReached", e[e.FailedToDecodeJSON = 1002] = "FailedToDecodeJSON", e[e.FailedToVerifyAuthyToken = 3012] = "FailedToVerifyAuthyToken", e[e.IncorrectCaptcha = 1e3] = "IncorrectCaptcha", e[e.InvalidAuthyToken = 3013] = "InvalidAuthyToken", e[e.InvalidPassword = 2005] = "InvalidPassword", e[e.InvalidUsername = 2004] = "InvalidUsername", e[e.MissingAuthyToken = 3011] = "MissingAuthyToken", e[e.MultipleAccountsLinkedToEmail = 3004] = "MultipleAccountsLinkedToEmail", e[e.NoAccountLinkedToEmail = 3005] = "NoAccountLinkedToEmail", e[e.PasswordMissing = 3003] = "PasswordMissing", e[e.SuspendedUser = 3008] = "SuspendedUser", e[e.UnexpectedError = 3e3] = "UnexpectedError", e[e.UserCredentialsIncorrect = 3001] = "UserCredentialsIncorrect", e[e.UserDoesNotExist = 1014] = "UserDoesNotExist", e[e.UserHasBeenDeleted = 3007] = "UserHasBeenDeleted", e[e.UserNeedsPasswordReset = 3006] = "UserNeedsPasswordReset", e[e.UsernameMissing = 3002] = "UsernameMissing"
            }(n || (n = {}));
            var p, d = "https://passport.twitch.tv/login",
                h = "https://passport.internal.us-west-2.twitch.tv/login";
            ! function(e) {
                e[e.BlacklistedEmailDomain = 2002] = "BlacklistedEmailDomain", e[e.BlacklistedIP = 2001] = "BlacklistedIP", e[e.EmailThrottled = 2013] = "EmailThrottled", e[e.FailedToDecodeJSON = 1002] = "FailedToDecodeJSON", e[e.IPThrottled = 2014] = "IPThrottled", e[e.IncorrectCaptcha = 1e3] = "IncorrectCaptcha", e[e.InvalidBirthday = 2003] = "InvalidBirthday", e[e.InvalidPassword = 2005] = "InvalidPassword", e[e.InvalidUsername = 2004] = "InvalidUsername", e[e.MissingFields = 2006] = "MissingFields", e[e.MultiAccountDisabled = 2015] = "MultiAccountDisabled", e[e.PasswordMissing = 3003] = "PasswordMissing", e[e.TooManyUsersWithEmail = 2007] = "TooManyUsersWithEmail", e[e.UnexpectedIssue = 2e3] = "UnexpectedIssue", e[e.UserNameMissing = 3002] = "UserNameMissing", e[e.UserUnder13 = 2011] = "UserUnder13", e[e.UsernameExists = 2008] = "UsernameExists"
            }(p || (p = {}));
            var g, m = "https://passport.twitch.tv/register";
            ! function(e) {
                e[e.FailedToDecodeJSON = 1002] = "FailedToDecodeJSON", e[e.FailedToVerifyAuthyToken = 3012] = "FailedToVerifyAuthyToken", e[e.InvalidAuthyToken = 3013] = "InvalidAuthyToken", e[e.MissingAuthyToken = 3011] = "MissingAuthyToken", e[e.NoConnectedTwitchUser = 5004] = "NoConnectedTwitchUser", e[e.SuspendedUser = 3008] = "SuspendedUser", e[e.UnableToVerifyIdentity = 5003] = "UnableToVerifyIdentity", e[e.UnexpectedError = 3e3] = "UnexpectedError"
            }(g || (g = {}));
            var f, b = "https://passport.twitch.tv/facebook/login";
            ! function(e) {
                e[e.BlacklistedIP = 2001] = "BlacklistedIP", e[e.EmailThrottled = 2013] = "EmailThrottled", e[e.FacebookAccountAlreadyLinked = 5006] = "FacebookAccountAlreadyLinked", e[e.FailedToDecodeJSON = 1002] = "FailedToDecodeJSON", e[e.IPThrottled = 2014] = "IPThrottled", e[e.InvalidPassword = 2005] = "InvalidPassword", e[e.InvalidUsername = 2004] = "InvalidUsername", e[e.TooManyUsers = 2017] = "TooManyUsers", e[e.UnableToVerifyIdentity = 5003] = "UnableToVerifyIdentity", e[e.UnexpectedFacebookIssue = 5001] = "UnexpectedFacebookIssue", e[e.UnexpectedSignupIssue = 2e3] = "UnexpectedSignupIssue", e[e.UsernameExists = 2008] = "UsernameExists"
            }(f || (f = {}));
            var v, k = "https://passport.twitch.tv/facebook/register";
            ! function(e) {
                e[e.DeviceCookieThrottleReached = 3009] = "DeviceCookieThrottleReached", e[e.FacebookAccountAlreadyLinked = 5006] = "FacebookAccountAlreadyLinked", e[e.FailedToDecodeJSON = 1002] = "FailedToDecodeJSON", e[e.FailedToVerifyAuthyToken = 3012] = "FailedToVerifyAuthyToken", e[e.IncorrectCaptcha = 1e3] = "IncorrectCaptcha", e[e.InvalidAuthyToken = 3013] = "InvalidAuthyToken", e[e.InvalidPassword = 2005] = "InvalidPassword", e[e.InvalidUsername = 2004] = "InvalidUsername", e[e.MissingAuthyToken = 3011] = "MissingAuthyToken", e[e.MultipleAccountsLinkedToEmail = 3004] = "MultipleAccountsLinkedToEmail", e[e.NoAccountLinkedToEmail = 3005] = "NoAccountLinkedToEmail", e[e.PasswordMissing = 3003] = "PasswordMissing", e[e.SuspendedUser = 3008] = "SuspendedUser", e[e.UnableToConnect = 5005] = "UnableToConnect", e[e.UnexpectedError = 3e3] = "UnexpectedError", e[e.UnexpectedFacebookIssue = 5001] = "UnexpectedFacebookIssue", e[e.UserCredentialsIncorrect = 3001] = "UserCredentialsIncorrect", e[e.UserDoesNotExist = 1014] = "UserDoesNotExist", e[e.UserHasBeenDeleted = 3007] = "UserHasBeenDeleted", e[e.UserNeedsPasswordReset = 3006] = "UserNeedsPasswordReset", e[e.UsernameMissing = 3002] = "UsernameMissing"
            }(v || (v = {}));
            var S = "https://passport.twitch.tv/facebook/connect";
            var y = r("ZqP/"),
                F = r("Ue10"),
                E = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(F.Xa, {
                            display: F.X.Flex,
                            alignItems: F.f.Center,
                            justifyContent: F.Wa.Center
                        }, a.createElement(F.Xa, {
                            margin: {
                                right: .5
                            },
                            display: F.X.InlineFlex
                        }, a.createElement(F.ob, {
                            asset: F.pb.LogoGlitch,
                            width: 40,
                            height: 40,
                            type: F.qb.Brand
                        })), a.createElement(F.W, {
                            fontSize: F.Ca.Size4,
                            bold: !0
                        }, this.message))
                    }, Object.defineProperty(t.prototype, "message", {
                        get: function() {
                            switch (this.props.currentStep) {
                                case y.a.LoginCaptcha:
                                case y.a.StartLogin:
                                case y.a.FacebookLogin:
                                    return Object(s.d)("Log in to Twitch", "AuthFormHeader");
                                case y.a.FacebookSignup:
                                    return Object(s.d)("Sign up with Facebook", "AuthFormHeader");
                                case y.a.FacebookConnect:
                                case y.a.FacebookConnectCaptcha:
                                    return Object(s.d)("Connect your Facebook Account", "AuthFormHeader");
                                case y.a.StartSignup:
                                    return Object(s.d)("Join Twitch today", "AuthFormHeader");
                                case y.a.FacebookLoginTwoFactor:
                                    return Object(s.d)("Welcome back!", "AuthFormHeader");
                                case y.a.LoginTwoFactor:
                                case y.a.FacebookConnectTwoFactor:
                                    var e = void 0;
                                    if (e = this.props.currentStep === y.a.FacebookConnectTwoFactor ? this.props.fbConnectUsername : this.props.loginUsername) return Object(s.d)("Welcome back, {name}!", {
                                        name: e
                                    }, "AuthFormHeader");
                                    break;
                                default:
                                    return
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.PureComponent),
                w = r("imBb"),
                C = (r("VcSt"), r("/MKj")),
                T = r("kRBY"),
                O = r("TSYQ"),
                M = r("tKDy"),
                L = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            widgetId: null
                        }, t.onChange = function(e) {
                            Object(M.g)({
                                screen: t.props.screen,
                                target: M.d.Captcha,
                                action: M.a.Complete
                            }), t.props.onChange(e)
                        }, t.onExpired = function() {
                            t.props.onChange(null)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        if (this.props.refDelegate && this.props.refDelegate(this), window.onRecaptchaLoad = function() {
                                e.initRecaptcha()
                            }, document.querySelector("#recaptcha-script")) this.initRecaptcha();
                        else {
                            var t = document.createElement("script");
                            t.src = "https://recaptcha.net/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit&hl=" + this.props.languageCode, t.async = !0, t.id = "recaptcha-script", document.body.appendChild(t)
                        }
                    }, t.prototype.componentWillUnmount = function() {
                        window.onRecaptchaLoad = function() {}
                    }, t.prototype.render = function() {
                        var e = O({
                            "g-recaptcha": this.props.invisible
                        });
                        return a.createElement("div", {
                            id: "recaptcha-element-container",
                            className: e
                        })
                    }, t.prototype.reset = function() {
                        null !== this.state.widgetId && window.grecaptcha && window.grecaptcha.reset(this.state.widgetId)
                    }, t.prototype.execute = function() {
                        null !== this.state.widgetId && window.grecaptcha && this.props.invisible && window.grecaptcha.execute(this.state.widgetId)
                    }, t.prototype.initRecaptcha = function() {
                        if (window.grecaptcha) {
                            var e = window.grecaptcha.render("recaptcha-element-container", {
                                sitekey: this.props.invisible ? s.p.config.invisibleCaptchaKey : s.p.config.captchaKey,
                                callback: this.onChange,
                                theme: "light",
                                type: "image",
                                size: this.props.invisible ? "invisible" : "normal",
                                tabindex: 0,
                                hl: this.props.languageCode,
                                badge: "bottomright",
                                "expired-callback": this.onExpired
                            });
                            this.setState({
                                widgetId: e
                            })
                        }
                    }, t
                }(a.PureComponent);
            var j = Object(C.connect)(function(e) {
                    return {
                        languageCode: Object(T.b)(e)
                    }
                })(L),
                I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            Object(M.g)({
                                screen: t.props.screen,
                                target: t.props.target,
                                action: M.a.Click
                            }), t.props.onClick && t.props.onClick(e)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(F.z, o.__assign({}, this.props, {
                            onClick: this.onClick
                        }))
                    }, t
                }(a.Component),
                P = (r("pKR5"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onEnter = function() {
                            t.props.disableContinueButton || (Object(M.g)({
                                screen: M.c.Captcha,
                                target: M.d.Submit,
                                action: M.a.Enter
                            }), t.continue())
                        }, t.continue = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.props.disableContinueButton ? [3, 2] : [4, this.props.onContinueClicked()];
                                        case 1:
                                            e.sent(), this.captchaInstance && this.captchaInstance.reset(), e.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onCaptchaRefDelegate = function(e) {
                            t.captchaInstance = e
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        w.bindGlobal("enter", this.onEnter), Object(M.f)(M.c.Captcha)
                    }, t.prototype.componentWillUnmount = function() {
                        w.unbind("enter")
                    }, t.prototype.render = function() {
                        return a.createElement(F.Xa, null, a.createElement(F.W, {
                            type: F.Pb.Span,
                            bold: !0
                        }, Object(s.d)("We need to make sure you're not a robot!", "CaptchaForm")), " ", a.createElement(F.W, {
                            type: F.Pb.Span
                        }, Object(s.d)("Please complete the reCAPTCHA below.", "CaptchaForm")), a.createElement(F.Xa, {
                            margin: 2,
                            display: F.X.Flex,
                            justifyContent: F.Wa.Center,
                            className: "captcha-form__captcha"
                        }, a.createElement(j, {
                            screen: M.c.Captcha,
                            refDelegate: this.onCaptchaRefDelegate,
                            onChange: this.props.onCaptchaChanged
                        })), a.createElement(I, {
                            screen: M.c.Captcha,
                            target: M.d.Submit,
                            fullWidth: !0,
                            onClick: this.continue,
                            disabled: this.props.isLoading || this.props.disableContinueButton,
                            state: this.props.isLoading ? F.E.Loading : F.E.Default
                        }, Object(s.d)("Continue", "CaptchaForm")))
                    }, t
                }(a.PureComponent)),
                _ = r("CojT"),
                x = r.n(_),
                D = (r("sC5l"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onFacebookLoginClicked = function() {
                            Object(M.g)({
                                screen: t.props.screen,
                                target: M.d.FacebookFooter,
                                action: M.a.Click
                            })
                        }, t.handleCallback = function(e) {
                            e.id && e.accessToken && t.props.onFacebookConnected(o.__assign({}, e))
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(F.Xa, {
                            display: F.X.Flex,
                            flexDirection: F.Aa.Column,
                            alignItems: F.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(F.Xa, {
                            fullWidth: !0,
                            display: F.X.Flex,
                            alignItems: F.f.Center,
                            flexDirection: F.Aa.Row,
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(F.zb, {
                            borderBottom: !0,
                            flexGrow: 1,
                            margin: {
                                right: .5
                            }
                        }), a.createElement(F.W, {
                            color: F.O.Alt2
                        }, Object(s.d)("or", "FacebookConnectFooter")), a.createElement(F.zb, {
                            borderBottom: !0,
                            flexGrow: 1,
                            margin: {
                                left: .5
                            }
                        })), a.createElement(F.zb, {
                            color: F.O.Overlay,
                            fontSize: F.Ca.Size6,
                            "data-a-target": "facebook-button-div"
                        }, a.createElement(x.a, {
                            containerStyle: {
                                display: "block"
                            },
                            cssClass: "facebook-connect-button",
                            textButton: Object(s.d)("Connect with Facebook", "FacebookConnectFooter"),
                            scope: "email,user_friends",
                            appId: "161273083968709",
                            callback: this.handleCallback,
                            icon: a.createElement(F.ob, {
                                width: 30,
                                height: 30,
                                type: F.qb.Inherit,
                                asset: F.pb.Facebook
                            }),
                            onClick: this.onFacebookLoginClicked,
                            isDisabled: this.props.disableConnectButton,
                            language: this.props.facebookLocale
                        })))
                    }, t
                }(a.PureComponent));
            var A, V = Object(C.connect)(function(e) {
                    return {
                        facebookLocale: Object(T.d)(e).replace("-", "_")
                    }
                })(D),
                U = r("fvjX"),
                B = r("ZIMp"),
                N = (r("QRgD"), function(e) {
                    return a.createElement(F.zb, {
                        className: "facebook-info-card",
                        display: F.X.Flex,
                        flexDirection: F.Aa.Row,
                        borderRadius: F.x.Medium,
                        elevation: 1,
                        border: !0
                    }, a.createElement(F.Xa, {
                        className: "facebook-info-card__icon",
                        display: F.X.Flex
                    }, a.createElement(F.ob, {
                        asset: F.pb.Facebook,
                        type: F.qb.Inherit,
                        height: 50,
                        width: 50
                    })), a.createElement(F.Xa, {
                        display: F.X.Flex,
                        flexDirection: F.Aa.Column,
                        justifyContent: F.Wa.Center,
                        overflow: F.ab.Hidden,
                        padding: {
                            right: 1
                        }
                    }, a.createElement(F.W, {
                        type: F.Pb.Strong,
                        color: F.O.Base,
                        fontSize: F.Ca.Size6,
                        ellipsis: !0
                    }, e.facebookName), a.createElement(F.W, {
                        type: F.Pb.Span,
                        color: F.O.Alt2,
                        fontSize: F.Ca.Size7,
                        ellipsis: !0
                    }, Object(s.d)("On Facebook", "FacebookInfoCard"))))
                }),
                R = r("FsIG"),
                q = (r("ykwd"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            inputMessageHeight: null
                        }, t.setMessageContainerRef = function(e) {
                            return t.messageContainerRef = e
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        if (e.hint !== this.props.hint || e.error !== this.props.error || e.hintMessage !== this.props.hintMessage || e.errorMessage !== this.props.errorMessage) {
                            var t = this.messageContainerRef && this.messageContainerRef.getBoundingClientRect().height;
                            t !== this.state.inputMessageHeight && this.setState({
                                inputMessageHeight: t
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = null,
                            t = this.props.hintMessage && !this.props.error,
                            r = this.props.errorMessage;
                        if (t ? e = a.createElement(F.Ga, {
                                hint: Object(R.b)(this.props.hintMessage)
                            }) : r && (e = a.createElement(F.Da, {
                                errorMessage: Object(R.b)(this.props.errorMessage)
                            })), e) {
                            var n = this.props.hint && t || this.props.error && r,
                                o = this.props.skipGrowAnimation ? void 0 : "form-group-auth__animated-text",
                                s = n && this.state.inputMessageHeight ? this.state.inputMessageHeight : void 0;
                            e = a.createElement("div", {
                                className: o,
                                style: {
                                    height: s
                                }
                            }, a.createElement(F.i, {
                                type: F.n.FadeIn,
                                duration: F.k.Long,
                                delay: F.j.Short,
                                enabled: !!n
                            }, a.createElement(F.Xa, {
                                refDelegate: this.setMessageContainerRef,
                                padding: {
                                    top: .5
                                }
                            }, e)))
                        }
                        return a.createElement(F.Xa, null, a.createElement(F.Xa, {
                            margin: {
                                bottom: .5
                            },
                            display: F.X.Flex,
                            alignItems: F.f.Center
                        }, a.createElement(F.zb, {
                            flexGrow: 1
                        }, a.createElement(F.Ha, {
                            id: Object(R.b)(this.props.label),
                            label: Object(R.b)(this.props.label)
                        })), this.props.validationComponent), this.props.children, e)
                    }, t
                }(a.Component)),
                X = (r("T1dR"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onFocus = function(e) {
                            t.existingFocus = !0, t.trackAuthInteraction({
                                isFocusing: !0
                            }), t.props.onFocus && t.props.onFocus(e)
                        }, t.onBlur = function(e) {
                            t.existingFocus && (t.existingFocus = !1, t.trackAuthInteraction({
                                isFocusing: !1
                            })), t.props.onBlur && t.props.onBlur(e)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(F.Ra, o.__assign({}, this.props, {
                            onFocus: this.onFocus,
                            onBlur: this.onBlur
                        }))
                    }, t.prototype.componentWillUnmount = function() {
                        this.existingFocus && this.trackAuthInteraction({
                            isFocusing: !1
                        })
                    }, t.prototype.trackAuthInteraction = function(e) {
                        var t = e.isFocusing;
                        Object(M.g)({
                            screen: this.props.screen,
                            target: this.props.target,
                            action: t ? M.a.Focus : M.a.Blur
                        })
                    }, t
                }(a.Component)),
                W = function(e) {
                    return e.options.shouldShowLoading ? a.createElement(F.Za, {
                        size: F.xb.Small
                    }) : e.options.shouldShowNone ? null : e.options.shouldShowError ? a.createElement(F.ob, {
                        asset: F.pb.NotificationError,
                        type: F.qb.Alert,
                        width: 18,
                        height: 18
                    }) : e.options.shouldShowValid ? a.createElement(F.ob, {
                        asset: F.pb.NotificationSuccess,
                        type: F.qb.Success,
                        width: 18,
                        height: 18
                    }) : null
                },
                z = r("GxR5"),
                Y = (r("lP32"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isFocused: !1
                        }, t.onPasswordInputBlur = function() {
                            t.setState({
                                isFocused: !1
                            })
                        }, t.onPasswordInputFocus = function() {
                            t.setState({
                                isFocused: !0
                            })
                        }, t.onPasswordInputChanged = function(e) {
                            var r = e.currentTarget.value;
                            t.props.onChange(r)
                        }, t.onPasswordResetClicked = function() {
                            Object(M.g)({
                                screen: t.props.screen,
                                target: M.d.TroubleLoggingIn,
                                action: M.a.Click
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.isCapsLockOn && this.state.isFocused;
                        return a.createElement(F.Xa, {
                            className: "login-password-input"
                        }, a.createElement(q, {
                            label: Object(s.d)("Password", "LoginPasswordInput"),
                            validationComponent: this.renderValidIndicator(),
                            error: !!this.props.error,
                            hint: !1
                        }, a.createElement(F.Xa, {
                            position: F.fb.Relative
                        }, a.createElement(X, o.__assign({
                            autoComplete: "current-password",
                            screen: this.props.screen,
                            target: M.d.Password,
                            type: F.Ta.Password,
                            onChange: this.onPasswordInputChanged,
                            onBlur: this.onPasswordInputBlur,
                            onFocus: this.onPasswordInputFocus,
                            value: Object(R.b)(this.props.password),
                            error: this.props.error
                        }, Object(F.dc)(this.props))), a.createElement(F.zb, {
                            color: F.O.OverlayAlt,
                            padding: {
                                right: 1
                            },
                            position: F.fb.Absolute,
                            display: F.X.Flex,
                            alignItems: F.f.Center,
                            attachRight: !0,
                            attachTop: !0,
                            attachBottom: !0
                        }, e && a.createElement(F.ob, {
                            asset: F.pb.CapsLock,
                            type: F.qb.Inherit
                        })))), a.createElement(F.Xa, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(F.U, {
                            to: Object(z.e)(),
                            onClick: this.onPasswordResetClicked,
                            targetBlank: !0
                        }, a.createElement(F.W, {
                            fontSize: F.Ca.Size7
                        }, Object(s.d)("Trouble logging in?", "LoginPasswordInput")))))
                    }, t.prototype.renderValidIndicator = function() {
                        var e = {
                            shouldShowNone: void 0 === this.props.error,
                            shouldShowError: this.props.error
                        };
                        return a.createElement(W, {
                            options: e
                        })
                    }, t
                }(a.Component)),
                G = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onUsernameInputChanged = function(e) {
                            var r = e.currentTarget.value;
                            t.props.onChange(r)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(q, {
                            label: Object(s.d)("Username", "LoginForm"),
                            validationComponent: this.renderValidIndicator(),
                            error: !!this.props.error,
                            hint: !1
                        }, a.createElement(X, o.__assign({
                            autoComplete: "username",
                            screen: this.props.screen,
                            target: M.d.Username,
                            type: F.Ta.Text,
                            onChange: this.onUsernameInputChanged,
                            value: Object(R.b)(this.props.username),
                            error: this.props.error,
                            refDelegate: this.props.refDelegate,
                            autoFocus: !0
                        }, Object(F.dc)(this.props))))
                    }, t.prototype.renderValidIndicator = function() {
                        var e = {
                            shouldShowNone: void 0 === this.props.error,
                            shouldShowError: this.props.error
                        };
                        return a.createElement(W, {
                            options: e
                        })
                    }, t
                }(a.Component);
            ! function(e) {
                e.Valid = "Valid", e.Invalid = "Invalid"
            }(A || (A = {}));
            var H, J = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isFocused: !1,
                        isTyping: !1,
                        skipGrowAnimation: t.props.autoFocus
                    }, t.onChange = function(e) {
                        t.setState({
                            isTyping: !0
                        }), t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), t.inputTimer = setTimeout(function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, this.props.onValidationRequested()];
                                        case 1:
                                            return e.sent(), this.setState({
                                                isTyping: !1
                                            }), this.inputTimer = 0, [2]
                                    }
                                })
                            })
                        }, 500), t.props.onUsernameChanged(e.currentTarget.value)
                    }, t.onUsernameBlur = function() {
                        t.setState({
                            isFocused: !1,
                            skipGrowAnimation: !1
                        })
                    }, t.onUsernameFocus = function() {
                        t.setState({
                            isFocused: !0
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.inputTimer && clearTimeout(this.inputTimer)
                }, t.prototype.render = function() {
                    return a.createElement(q, {
                        error: this.isInvalid,
                        label: Object(s.d)("Username", "SignupUsernameFormGroup"),
                        validationComponent: this.renderValidIndicator(),
                        errorMessage: this.props.errorMessage,
                        hintMessage: Object(s.d)("This is the name people will know you by on Twitch. You can always change it later.", "SignupUsernameFormGroup"),
                        hint: this.state.isFocused,
                        skipGrowAnimation: this.state.skipGrowAnimation
                    }, a.createElement(X, o.__assign({
                        screen: this.props.screen,
                        target: M.d.Username,
                        type: F.Ta.Text,
                        onChange: this.onChange,
                        value: Object(R.b)(this.props.value),
                        error: this.isInvalid,
                        onFocus: this.onUsernameFocus,
                        onBlur: this.onUsernameBlur,
                        autoFocus: this.props.autoFocus,
                        refDelegate: this.props.refDelegate
                    }, Object(F.dc)(this.props))))
                }, t.prototype.renderValidIndicator = function() {
                    var e = {
                        shouldShowLoading: this.state.isTyping,
                        shouldShowNone: !this.props.validationState,
                        shouldShowError: this.props.validationState === A.Invalid,
                        shouldShowValid: this.props.validationState === A.Valid
                    };
                    return a.createElement(W, {
                        options: e
                    })
                }, Object.defineProperty(t.prototype, "isInvalid", {
                    get: function() {
                        return this.props.validationState === A.Invalid
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.Component);
            ! function(e) {
                e.None = "None", e.Passed = "Passed", e.Proved = " Proved"
            }(H || (H = {}));
            var K = r("1txG"),
                Q = new RegExp(/^[A-Za-z0-9][A-Za-z0-9_]*$/),
                Z = 4,
                $ = 25;

            function ee(e) {
                return te(e) && re(e)
            }

            function te(e) {
                return e.length >= Z && e.length <= $
            }

            function re(e) {
                return Q.test(e)
            }

            function ne(e) {
                return o.__awaiter(this, void 0, Promise, function() {
                    var t;
                    return o.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (!e) return [2, !1];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, s.p.apollo.client.query({
                                    query: K,
                                    variables: {
                                        username: e
                                    }
                                })];
                            case 2:
                                return [2, (t = r.sent()).data && !t.data.isUsernameAvailable];
                            case 3:
                                return r.sent(), [2, !1];
                            case 4:
                                return [2]
                        }
                    })
                })
            }

            function oe(e, t) {
                return e && te(e) ? re(e) ? t ? Object(s.d)("This username is unavailable.", "SignupUsernameFormGroup") : "" : Object(s.d)("Usernames must only contain alphanumeric characters.", "SignupUsernameFormGroup") : Object(s.d)("Usernames must be between 4 and 25 characters.", "SignupUsernameFormGroup")
            }

            function ae(e, t) {
                return !t.usernameError && !t.passwordError && (!!e.username && !!e.password)
            }

            function se(e) {
                return !!e.id && !!e.accessToken
            }

            function ie(e, t) {
                return !t.passwordError && !t.usernameError && (!!e.username && (!!e.password && (e.usernameValidationState !== A.Invalid && (!!ee(e.username) && !e.isPasswordInvalid))))
            }
            var ce = r("2Ygb");

            function ue() {
                return function(e) {
                    return function(t) {
                        function r() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.getRefDelegate = function(t) {
                                e.ref = t
                            }, e
                        }
                        return o.__extends(r, t), r.prototype.componentDidUpdate = function(e) {
                            e.isLoading && !this.props.isLoading && this.ref && this.ref.focus()
                        }, r.prototype.render = function() {
                            var t = {
                                refDelegate: this.getRefDelegate
                            };
                            return a.createElement(e, o.__assign({}, this.props, t))
                        }, r.displayName = Object(ce.a)(r.name, e), r
                    }(a.Component)
                }
            }
            var le, pe = r("GnwI"),
                de = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onSubmit = function(e) {
                            e.preventDefault(), t.canLogin && (Object(M.g)({
                                screen: M.c.FacebookConnect,
                                target: M.d.Connect,
                                action: M.a.Enter
                            }), t.login())
                        }, t.login = function() {
                            t.canLogin && t.props.onConnectRequested()
                        }, t.goToFacebookSignupForm = function() {
                            t.props.onFacebookFormTypeChanged(B.AuthFormStep.FacebookSignup)
                        }, t.onUsernameInputChanged = function(e) {
                            t.props.onFacebookConnectFormValuesChanged({
                                username: e
                            })
                        }, t.onPasswordInputChanged = function(e) {
                            t.props.onFacebookConnectFormValuesChanged({
                                password: e
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(F.zb, {
                            className: "facebook-connect-form",
                            background: F.r.Base,
                            flexDirection: F.Aa.Column,
                            display: F.X.Flex,
                            fullWidth: !0
                        }, this.renderHeader(), this.renderCenterText(), a.createElement("form", {
                            noValidate: !0,
                            onSubmit: this.onSubmit
                        }, this.renderUsername(), this.renderPassword(), this.renderCTA()), this.renderFooterLink())
                    }, t.prototype.renderHeader = function() {
                        return a.createElement(F.Xa, {
                            margin: {
                                top: 1
                            },
                            display: F.X.Flex,
                            justifyContent: F.Wa.Center
                        }, a.createElement(N, {
                            facebookName: this.props.facebookName
                        }))
                    }, t.prototype.renderCenterText = function() {
                        return a.createElement(F.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(F.W, {
                            fontSize: F.Ca.Size6
                        }, Object(s.d)("Please log into the Twitch account you want to connect with.", "FacebookConnectForm")))
                    }, t.prototype.renderUsername = function() {
                        return a.createElement(F.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(G, {
                            screen: M.c.FacebookConnect,
                            username: this.props.values.username,
                            error: this.props.serverErrors.usernameError,
                            onChange: this.onUsernameInputChanged,
                            refDelegate: this.props.refDelegate
                        }))
                    }, t.prototype.renderPassword = function() {
                        return a.createElement(F.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(Y, {
                            screen: M.c.FacebookConnect,
                            password: this.props.values.password,
                            error: this.props.serverErrors.passwordError,
                            onChange: this.onPasswordInputChanged,
                            isCapsLockOn: this.props.isCapsLockOn
                        }))
                    }, t.prototype.renderCTA = function() {
                        return a.createElement(F.Xa, {
                            "data-test-selector": "facebook-signup-form__cta",
                            margin: {
                                top: 2
                            }
                        }, a.createElement(F.z, {
                            disabled: this.props.isLoading || !ae(this.props.values, this.props.serverErrors),
                            state: this.props.isLoading ? F.E.Loading : F.E.Default,
                            fullWidth: !0
                        }, Object(s.d)("Connect My Account", "FacebookConnectForm")))
                    }, t.prototype.renderFooterLink = function() {
                        return a.createElement(F.Xa, {
                            "data-test-selector": "facebook-signup-form__footer",
                            textAlign: F.Lb.Center,
                            margin: {
                                top: 2
                            }
                        }, a.createElement(I, {
                            screen: M.c.FacebookConnect,
                            target: M.d.CreateAccount,
                            type: F.F.Text,
                            onClick: this.goToFacebookSignupForm
                        }, Object(s.d)("Create a new Twitch account instead", "FacebookConnectForm")))
                    }, Object.defineProperty(t.prototype, "canLogin", {
                        get: function() {
                            return ae(this.props.values, this.props.serverErrors)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                he = Object(U.compose)(Object(pe.b)("FacebookConnectForm", {
                    autoReportInteractive: !0
                }), ue())(de);
            r("JT9d");
            ! function(e) {
                e.Invalid = "invalid", e.Empty = "empty", e.Weak = "weak", e.Strong = "strong"
            }(le || (le = {}));
            var ge = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            "password-indicator": !0,
                            "password-indicator--invalid": this.props.indicatorStrength === le.Invalid,
                            "password-indicator--empty": this.props.indicatorStrength === le.Empty,
                            "password-indicator--weak": this.props.indicatorStrength === le.Weak,
                            "password-indicator--strong": this.props.indicatorStrength === le.Strong
                        };
                        return a.createElement(F.zb, {
                            className: O(e),
                            display: F.X.Flex,
                            alignItems: F.f.Center
                        }, this.renderIcon(), this.renderDescription(), a.createElement(F.Xa, {
                            className: "password-indicator__progress-bar"
                        }, a.createElement(F.ib, {
                            inherit: !0,
                            value: this.props.indicatorProgress,
                            mask: !0,
                            size: F.kb.Small
                        })))
                    }, t.prototype.renderIcon = function() {
                        var e;
                        switch (this.props.indicatorStrength) {
                            case le.Invalid:
                                e = a.createElement(F.ob, {
                                    asset: F.pb.NotificationError,
                                    type: F.qb.Alert
                                });
                                break;
                            case le.Weak:
                                e = a.createElement(F.ob, {
                                    asset: F.pb.NotificationWarning,
                                    type: F.qb.Inherit
                                });
                                break;
                            case le.Strong:
                                e = a.createElement(F.ob, {
                                    asset: F.pb.NotificationSuccess,
                                    type: F.qb.Success
                                });
                                break;
                            case le.Empty:
                                e = this.props.error ? a.createElement(F.ob, {
                                    asset: F.pb.NotificationError,
                                    type: F.qb.Alert
                                }) : null;
                                break;
                            default:
                                e = null
                        }
                        return e ? a.createElement(F.Xa, {
                            margin: {
                                right: .5
                            },
                            display: F.X.InlineFlex
                        }, e) : null
                    }, t.prototype.renderDescription = function() {
                        var e;
                        switch (this.props.indicatorStrength) {
                            case le.Weak:
                                e = Object(s.d)("Weak", "PasswordIndicator");
                                break;
                            case le.Strong:
                                e = Object(s.d)("Strong", "PasswordIndicator");
                                break;
                            default:
                                e = null
                        }
                        return e ? a.createElement(F.Xa, {
                            margin: {
                                right: 1
                            },
                            display: F.X.InlineFlex
                        }, a.createElement(F.W, {
                            color: F.O.Inherit,
                            bold: !0
                        }, e)) : null
                    }, t
                }(a.Component),
                me = r("yfE0"),
                fe = 8,
                be = 71;

            function ve(e) {
                return e.length >= fe && e.length <= be
            }

            function ke(e) {
                return e.length < fe ? Object(s.d)("Passwords must be at least 8 characters long.", "PasswordValidator") : e.length > be ? Object(s.d)("Passwords must be shorter than 72 characters.", "PasswordValidator") : void 0
            }
            var Se = (me.config({
                    maxLength: be,
                    minLength: fe,
                    minPhraseLength: 20,
                    allowPassphrases: !0
                }), function(e) {
                    if (!e || !e.length) return {
                        strength: le.Empty,
                        score: 0
                    };
                    if (!ve(e)) return {
                        strength: le.Invalid,
                        score: 0
                    };
                    var t = me.test(e);
                    if (t.isPassphrase) return {
                        strength: le.Strong,
                        score: 100
                    };
                    switch (t.optionalTestsPassed) {
                        case 1:
                            return {
                                strength: le.Weak,
                                score: 25
                            };
                        case 2:
                            return {
                                strength: le.Weak,
                                score: 50
                            };
                        case 3:
                            return {
                                strength: le.Strong,
                                score: 75
                            };
                        case 4:
                            return {
                                strength: le.Strong,
                                score: 100
                            };
                        default:
                            return {
                                strength: le.Invalid,
                                score: 0
                            }
                    }
                }),
                ye = (r("c8uT"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isFocused: !1,
                            isPasswordVisible: !1
                        }, t.onPasswordBlur = function() {
                            t.setState({
                                isFocused: !1
                            })
                        }, t.onPasswordFocus = function() {
                            t.setState({
                                isFocused: !0
                            })
                        }, t.toggleVisibility = function(e) {
                            e.preventDefault(), t.setState({
                                isPasswordVisible: !t.state.isPasswordVisible
                            }), t.inputRef && t.inputRef.focus()
                        }, t.getInputRef = function(e) {
                            t.inputRef = e
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = Se(this.props.value),
                            t = this.props.isCapsLockOn && this.state.isFocused;
                        return a.createElement(q, {
                            error: !!this.props.error,
                            errorMessage: this.props.errorMessage,
                            hint: this.shouldDisplayPasswordHint(e),
                            hintMessage: Object(s.d)("Strong passwords include a mix of lower case letters, upper case letters, and special characters.", "SignupPasswordFormGroup"),
                            label: Object(s.d)("Password", "SignupPasswordFormGroup"),
                            validationComponent: this.renderPasswordIndicator(e)
                        }, a.createElement(F.Xa, {
                            position: F.fb.Relative,
                            className: "signup-password-container"
                        }, a.createElement(X, o.__assign({
                            autoComplete: "new-password",
                            screen: this.props.screen,
                            target: M.d.Password,
                            type: this.state.isPasswordVisible ? F.Ta.Text : F.Ta.Password,
                            onChange: this.props.onChange,
                            onFocus: this.onPasswordFocus,
                            onBlur: this.onPasswordBlur,
                            value: Object(R.b)(this.props.value),
                            error: this.props.error,
                            refDelegate: this.getInputRef
                        }, Object(F.dc)(this.props))), a.createElement(F.zb, {
                            position: F.fb.Absolute,
                            display: F.X.Flex,
                            alignItems: F.f.Center,
                            color: F.O.OverlayAlt,
                            attachRight: !0,
                            attachTop: !0,
                            attachBottom: !0
                        }, t && a.createElement(F.ob, {
                            asset: F.pb.CapsLock,
                            type: F.qb.Inherit
                        }), a.createElement(F.A, {
                            icon: this.state.isPasswordVisible ? F.pb.VisibilityHidden : F.pb.GlyphViews,
                            onClick: this.toggleVisibility,
                            type: F.C.Secondary,
                            size: F.B.Small,
                            tabIndex: -1,
                            ariaLabel: Object(s.d)("Toggle password visibility", "SignupPasswordFormGroup")
                        }))))
                    }, t.prototype.renderPasswordIndicator = function(e) {
                        return a.createElement(ge, {
                            indicatorProgress: e.score,
                            indicatorStrength: e.strength,
                            error: !!this.props.error
                        })
                    }, t.prototype.shouldDisplayPasswordHint = function(e) {
                        return this.state.isFocused && e.strength !== le.Strong
                    }, t
                }(a.Component)),
                Fe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onSubmit = function(e) {
                            e.preventDefault(), t.canSignup && Object(M.g)({
                                screen: M.c.FacebookSignup,
                                target: M.d.Signup,
                                action: M.a.Enter
                            }), t.signup()
                        }, t.signup = function() {
                            t.canSignup && t.props.onSignupRequested()
                        }, t.goToFacebookConnectForm = function() {
                            t.props.onFacebookFormTypeChanged(B.AuthFormStep.FacebookConnect)
                        }, t.onUsernameInputChanged = function(e) {
                            t.props.onFacebookSignupFormValuesChanged({
                                username: e
                            })
                        }, t.onUsernameValidationRequested = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, r, n;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, ne(e = this.props.values.username)];
                                        case 1:
                                            return t = o.sent(), r = oe(e, t), n = r ? A.Invalid : A.Valid, this.props.onFacebookSignupFormValuesChanged({
                                                usernameValidationState: n,
                                                usernameErrorMessage: r
                                            }), [2]
                                    }
                                })
                            })
                        }, t.onPasswordInputChanged = function(e) {
                            var r = e.currentTarget.value,
                                n = !ve(r),
                                o = ke(r);
                            t.props.onFacebookSignupFormValuesChanged({
                                password: r,
                                isPasswordInvalid: n,
                                passwordErrorMessage: o
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(F.zb, {
                            className: "facebook-signup-form",
                            background: F.r.Base,
                            flexDirection: F.Aa.Column,
                            display: F.X.Flex,
                            fullWidth: !0
                        }, this.renderHeader(), this.renderCenterText(), a.createElement("form", {
                            noValidate: !0,
                            onSubmit: this.onSubmit
                        }, this.renderUsername(), this.renderPassword(), this.renderCTA()), this.renderFooterLink())
                    }, t.prototype.renderHeader = function() {
                        return a.createElement(F.Xa, {
                            margin: {
                                top: 1
                            },
                            display: F.X.Flex,
                            justifyContent: F.Wa.Center
                        }, a.createElement(N, {
                            facebookName: this.props.facebookName
                        }))
                    }, t.prototype.renderCenterText = function() {
                        return a.createElement(F.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(F.W, {
                            fontSize: F.Ca.Size6
                        }, Object(s.d)("Create a new Twitch username and password to connect with this account. Your Twitch ID will be your future login and public identity across all of Twitch.", "FacebookSignupForm")))
                    }, t.prototype.renderUsername = function() {
                        return a.createElement(F.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(J, {
                            screen: M.c.FacebookSignup,
                            onUsernameChanged: this.onUsernameInputChanged,
                            onValidationRequested: this.onUsernameValidationRequested,
                            value: this.props.values.username,
                            errorMessage: this.props.values.usernameErrorMessage,
                            validationState: this.props.serverErrors.usernameError ? A.Invalid : this.props.values.usernameValidationState,
                            autoFocus: !0,
                            refDelegate: this.props.refDelegate
                        }))
                    }, t.prototype.renderPassword = function() {
                        return a.createElement(F.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(ye, {
                            screen: M.c.FacebookSignup,
                            value: this.props.values.password,
                            onChange: this.onPasswordInputChanged,
                            error: this.props.values.isPasswordInvalid || this.props.serverErrors.passwordError,
                            errorMessage: this.props.values.passwordErrorMessage,
                            isCapsLockOn: this.props.isCapsLockOn
                        }))
                    }, t.prototype.renderCTA = function() {
                        return a.createElement(F.Xa, {
                            "data-test-selector": "facebook-signup-form__cta",
                            margin: {
                                top: 2
                            }
                        }, a.createElement(F.z, {
                            disabled: this.props.isLoading || !ie(this.props.values, this.props.serverErrors),
                            state: this.props.isLoading ? F.E.Loading : F.E.Default,
                            fullWidth: !0
                        }, Object(s.d)("Sign up", "FacebookSignupForm")))
                    }, t.prototype.renderFooterLink = function() {
                        return a.createElement(F.Xa, {
                            "data-test-selector": "facebook-signup-form__footer",
                            textAlign: F.Lb.Center,
                            margin: {
                                top: 2
                            }
                        }, a.createElement(I, {
                            screen: M.c.FacebookSignup,
                            target: M.d.LinkAccount,
                            type: F.F.Text,
                            onClick: this.goToFacebookConnectForm
                        }, Object(s.d)("Link an existing Twitch account instead", "FacebookSignupForm")))
                    }, Object.defineProperty(t.prototype, "canSignup", {
                        get: function() {
                            return ie(this.props.values, this.props.serverErrors)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                Ee = Object(U.compose)(Object(pe.b)("FacebookSignupForm", {
                    autoReportInteractive: !0
                }), ue())(Fe);

            function we(e, t) {
                return !t.usernameError && !t.passwordError && (!!e.username && !!e.password)
            }
            var Ce, Te = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onSubmit = function(e) {
                            e.preventDefault(), t.canLogin && (Object(M.g)({
                                screen: M.c.Login,
                                target: M.d.Login,
                                action: M.a.Enter
                            }), t.props.onLoginRequested())
                        }, t.onUsernameInputChanged = function(e) {
                            t.props.onLoginFormValuesChanged({
                                username: e
                            })
                        }, t.onPasswordInputChanged = function(e) {
                            t.props.onLoginFormValuesChanged({
                                password: e
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        Object(M.f)(M.c.Login)
                    }, t.prototype.render = function() {
                        return a.createElement("form", {
                            noValidate: !0,
                            onSubmit: this.onSubmit
                        }, a.createElement(F.zb, {
                            background: F.r.Base,
                            fullWidth: !0,
                            flexDirection: F.Aa.Column,
                            display: F.X.Flex
                        }, this.renderUsername(), this.renderPassword(), a.createElement(F.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(F.z, {
                            disabled: this.props.isLoading || !we(this.props.values, this.props.serverErrors),
                            state: this.props.isLoading ? F.E.Loading : F.E.Default,
                            fullWidth: !0,
                            "data-a-target": "passport-login-button"
                        }, Object(s.d)("Log In", "LoginForm")))))
                    }, t.prototype.renderUsername = function() {
                        return a.createElement(F.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(G, {
                            screen: M.c.Login,
                            username: this.props.values.username,
                            error: this.props.serverErrors.usernameError,
                            onChange: this.onUsernameInputChanged,
                            refDelegate: this.props.refDelegate,
                            "data-a-target": "login-username-input"
                        }))
                    }, t.prototype.renderPassword = function() {
                        return a.createElement(F.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(Y, {
                            screen: M.c.Login,
                            password: this.props.values.password,
                            error: this.props.serverErrors.passwordError,
                            onChange: this.onPasswordInputChanged,
                            "data-a-target": "login-password-input",
                            isCapsLockOn: this.props.isCapsLockOn
                        }))
                    }, Object.defineProperty(t.prototype, "canLogin", {
                        get: function() {
                            return we(this.props.values, this.props.serverErrors)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                Oe = Object(U.compose)(Object(pe.b)("LoginForm", {
                    autoReportInteractive: !0
                }), ue())(Te),
                Me = (r("4PHc"), function(e) {
                    if (!e.message) return null;
                    var t = void 0 === e.subMessage ? Object(s.d)("Please try again.", "ServerMessage") : e.subMessage;
                    return a.createElement(F.zb, {
                        className: O({
                            "server-message-success": e.isSuccessMessage,
                            "server-message-alert": !e.isSuccessMessage
                        }),
                        background: F.r.Alt2,
                        borderRadius: F.x.Large,
                        display: F.X.Flex,
                        margin: {
                            top: 2,
                            x: "auto"
                        },
                        padding: {
                            y: 1,
                            left: 1,
                            right: 2
                        },
                        position: F.fb.Relative,
                        fullWidth: !0
                    }, a.createElement(F.Xa, {
                        className: O({
                            "server-message-success__icon": e.isSuccessMessage,
                            "server-message-alert__icon": !e.isSuccessMessage
                        }),
                        alignItems: F.f.Start,
                        display: F.X.Flex
                    }, a.createElement(F.ob, {
                        asset: e.isSuccessMessage ? F.pb.NotificationSuccess : F.pb.NotificationError,
                        height: 30,
                        width: 30
                    })), a.createElement(F.Xa, {
                        display: F.X.Flex,
                        flexDirection: F.Aa.Column,
                        padding: {
                            left: .5
                        }
                    }, a.createElement(F.W, {
                        fontSize: F.Ca.Size6,
                        type: F.Pb.Strong
                    }, e.message), a.createElement(F.Xa, null, a.createElement(F.W, {
                        fontSize: F.Ca.Size6,
                        color: F.O.Alt2
                    }, t))))
                }),
                Le = r("YVDj"),
                je = Object.assign({}, Le, {
                    default: Le
                });
            ! function(e) {
                e.Day = "D", e.Month = "M", e.Year = "Y"
            }(Ce || (Ce = {}));
            r("qV8A");
            var Ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleMonthChange = function(e) {
                        Object(M.g)({
                            screen: M.c.Signup,
                            target: M.d.DateOfBirthMonth,
                            action: M.a.Click
                        }), t.props.onChanged(o.__assign({}, t.props.date, {
                            month: +e.target.value
                        }))
                    }, t.handleDayChange = function(e) {
                        t.props.onChanged(o.__assign({}, t.props.date, {
                            day: +e.target.value
                        }))
                    }, t.handleYearChange = function(e) {
                        t.props.onChanged(o.__assign({}, t.props.date, {
                            year: +e.target.value
                        }))
                    }, t.onDayFocus = function() {
                        t.props.onFocusChanged({
                            day: !0
                        })
                    }, t.onDayBlur = function() {
                        t.props.onFocusChanged({
                            day: !1
                        })
                    }, t.onMonthFocus = function() {
                        t.props.onFocusChanged({
                            month: !0
                        })
                    }, t.onMonthBlur = function() {
                        t.props.onFocusChanged({
                            month: !1
                        })
                    }, t.onYearFocus = function() {
                        t.props.onFocusChanged({
                            year: !0
                        })
                    }, t.onYearBlur = function() {
                        t.props.onFocusChanged({
                            year: !1
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = function(e) {
                        var t = je[e.toLowerCase()];
                        return e && t ? [t.substring(0, 1), t.substring(1, 2), t.substring(2, 3)] : [Ce.Month, Ce.Day, Ce.Year]
                    }(this.props.locale);
                    return a.createElement(F.Xa, {
                        display: F.X.Flex,
                        flexDirection: F.Aa.Row
                    }, this.renderBasedOnDateOrder(e[0]), a.createElement(F.Pa, {
                        margin: {
                            left: 1
                        }
                    }, this.renderBasedOnDateOrder(e[1])), a.createElement(F.Pa, {
                        margin: {
                            left: 1
                        }
                    }, this.renderBasedOnDateOrder(e[2])))
                }, t.prototype.renderBasedOnDateOrder = function(e) {
                    switch (e) {
                        case Ce.Day:
                            return this.renderDayInput();
                        case Ce.Month:
                            return this.renderMonthSelect();
                        case Ce.Year:
                            return this.renderYearInput();
                        default:
                            return null
                    }
                }, t.prototype.renderDayInput = function() {
                    return a.createElement(F.Xa, {
                        className: "birthday-picker__input"
                    }, a.createElement(X, {
                        screen: M.c.Signup,
                        target: M.d.DateOfBirthDay,
                        type: F.Ta.Text,
                        value: Object(R.a)(this.props.date && this.props.date.day),
                        placeholder: Object(s.d)("Day", "BirthdayPicker"),
                        onChange: this.handleDayChange,
                        error: !this.props.isTyping && this.props.dateValidation && this.props.dateValidation.dayInvalid,
                        maxLength: 2,
                        onFocus: this.onDayFocus,
                        onBlur: this.onDayBlur,
                        "data-a-target": "birthday-date-input"
                    }))
                }, t.prototype.renderYearInput = function() {
                    return a.createElement(F.Xa, {
                        className: "birthday-picker__input"
                    }, a.createElement(X, {
                        screen: M.c.Signup,
                        target: M.d.DateOfBirthYear,
                        type: F.Ta.Text,
                        value: Object(R.a)(this.props.date && this.props.date.year),
                        placeholder: Object(s.d)("Year", "BirthdayPicker"),
                        onChange: this.handleYearChange,
                        error: !this.props.isTyping && this.props.dateValidation && this.props.dateValidation.yearInvalid,
                        maxLength: 4,
                        onFocus: this.onYearFocus,
                        onBlur: this.onYearBlur,
                        "data-a-target": "birthday-year-input"
                    }))
                }, t.prototype.renderMonthSelect = function() {
                    return a.createElement(F.Xa, {
                        fullWidth: !0
                    }, a.createElement(F.vb, {
                        value: Object(R.a)(this.props.date && this.props.date.month),
                        onChange: this.handleMonthChange,
                        error: !this.props.isTyping && this.props.dateValidation && this.props.dateValidation.monthInvalid,
                        onFocus: this.onMonthFocus,
                        onBlur: this.onMonthBlur,
                        "data-a-target": "birthday-month-select"
                    }, a.createElement("option", {
                        value: "",
                        disabled: !0
                    }, Object(s.d)("Month", "BirthdayPicker")), a.createElement("option", {
                        value: 1
                    }, Object(s.d)("January", "BirthdayPicker")), a.createElement("option", {
                        value: 2
                    }, Object(s.d)("February", "BirthdayPicker")), a.createElement("option", {
                        value: 3
                    }, Object(s.d)("March", "BirthdayPicker")), a.createElement("option", {
                        value: 4
                    }, Object(s.d)("April", "BirthdayPicker")), a.createElement("option", {
                        value: 5
                    }, Object(s.d)("May", "BirthdayPicker")), a.createElement("option", {
                        value: 6
                    }, Object(s.d)("June", "BirthdayPicker")), a.createElement("option", {
                        value: 7
                    }, Object(s.d)("July", "BirthdayPicker")), a.createElement("option", {
                        value: 8
                    }, Object(s.d)("August", "BirthdayPicker")), a.createElement("option", {
                        value: 9
                    }, Object(s.d)("September", "BirthdayPicker")), a.createElement("option", {
                        value: 10
                    }, Object(s.d)("October", "BirthdayPicker")), a.createElement("option", {
                        value: 11
                    }, Object(s.d)("November", "BirthdayPicker")), a.createElement("option", {
                        value: 12
                    }, Object(s.d)("December", "BirthdayPicker"))))
                }, t
            }(a.Component);
            var Pe = Object(C.connect)(function(e) {
                    return {
                        locale: Object(T.d)(e)
                    }
                })(Ie),
                _e = {
                    1: 31,
                    2: 28,
                    3: 31,
                    4: 30,
                    5: 31,
                    6: 30,
                    7: 31,
                    8: 31,
                    9: 30,
                    10: 31,
                    11: 30,
                    12: 31
                },
                xe = 864e5;

            function De(e) {
                return !!e && (e.monthInvalid || e.dayInvalid || e.yearInvalid)
            }
            var Ae, Ve = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isTyping: !1,
                        birthdayPickerFocus: {
                            day: !1,
                            month: !1,
                            year: !1
                        }
                    }, t.onBirthdayPickerDateChanged = function(e) {
                        t.setState({
                            isTyping: !0
                        }), t.beginValidationTimer(), t.props.onBirthdayDateChange(e)
                    }, t.onBirthdayPickerFocusChanged = function(e) {
                        t.setState(function(t) {
                            return {
                                birthdayPickerFocus: o.__assign({}, t.birthdayPickerFocus, e)
                            }
                        }, t.beginValidationTimer)
                    }, t.beginValidationTimer = function() {
                        t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), t.inputTimer = setTimeout(function() {
                            t.isBirthdayPickerFocused() && t.isFullDateProvided() ? t.props.onValidationRequested() : !t.isBirthdayPickerFocused() && t.props.date && t.props.onValidationRequested(), t.setState({
                                isTyping: !1
                            }), t.inputTimer = 0
                        }, 500)
                    }, t.isBirthdayPickerFocused = function() {
                        return t.state.birthdayPickerFocus.day || t.state.birthdayPickerFocus.month || t.state.birthdayPickerFocus.year
                    }, t.isFullDateProvided = function() {
                        return t.props.date && t.props.date.day && t.props.date.month && t.props.date.year
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(q, {
                        label: Object(s.d)("Date of Birth", "BirthdayFormGroup"),
                        error: De(this.props.dateValidation) || this.props.serverError,
                        errorMessage: Object(s.d)("Please enter a valid date.", "BirthdayFormGroup"),
                        validationComponent: this.renderValidIndicator(),
                        hint: !1
                    }, a.createElement(Pe, {
                        date: this.props.date,
                        onChanged: this.onBirthdayPickerDateChanged,
                        onFocusChanged: this.onBirthdayPickerFocusChanged,
                        dateValidation: this.props.dateValidation,
                        isTyping: this.state.isTyping
                    }))
                }, t.prototype.componentWillUnmount = function() {
                    this.inputTimer && clearTimeout(this.inputTimer)
                }, t.prototype.renderValidIndicator = function() {
                    var e = De(this.props.dateValidation),
                        t = {
                            showShowLoading: this.state.isTyping,
                            shouldShowNone: void 0 === this.props.dateValidation,
                            shouldShowError: e,
                            shouldShowValid: !e
                        };
                    return a.createElement(W, {
                        options: t
                    })
                }, t
            }(a.Component);
            ! function(e) {
                e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
            }(Ae || (Ae = {}));
            var Ue = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isTyping: !1,
                            isFocused: !1
                        }, t.onChange = function(e) {
                            e.persist(), t.setState({
                                isTyping: !0
                            }), t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), t.inputTimer = setTimeout(function() {
                                t.props.onValidationRequested(), t.setState({
                                    isTyping: !1
                                }), t.inputTimer = 0
                            }, 500), t.props.onEmailChanged(e.currentTarget.value)
                        }, t.onEmailBlur = function() {
                            t.setState({
                                isFocused: !1
                            })
                        }, t.onEmailFocus = function() {
                            t.setState({
                                isFocused: !0
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(q, {
                            error: this.isInvalid,
                            errorMessage: this.props.errorMessage,
                            hint: this.state.isFocused,
                            hintMessage: Object(s.d)("You'll need to verify that you own this email account.", "SignupEmailFormGroup"),
                            label: Object(s.d)("Email", "SignupEmailFormGroup"),
                            validationComponent: this.renderValidIndicator()
                        }, a.createElement(X, {
                            screen: M.c.Signup,
                            target: M.d.Email,
                            type: F.Ta.Email,
                            onChange: this.onChange,
                            onFocus: this.onEmailFocus,
                            onBlur: this.onEmailBlur,
                            value: Object(R.b)(this.props.value),
                            error: this.isInvalid,
                            "data-a-target": "signup-email-input"
                        }))
                    }, t.prototype.componentWillUnmount = function() {
                        this.inputTimer && clearTimeout(this.inputTimer)
                    }, t.prototype.renderValidIndicator = function() {
                        var e = {
                            shouldShowLoading: this.state.isTyping,
                            shouldShowNone: !this.props.validationState,
                            shouldShowError: this.props.validationState === Ae.Invalid,
                            shouldShowValid: this.props.validationState === Ae.Valid
                        };
                        return a.createElement(W, {
                            options: e
                        })
                    }, Object.defineProperty(t.prototype, "isInvalid", {
                        get: function() {
                            return this.props.validationState === Ae.Invalid
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                Be = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

            function Ne(e) {
                if (! function(e) {
                        return !!e && Be.test(e)
                    }(e)) return Object(s.d)("Please enter a valid email.", "EmailValidator")
            }

            function Re(e, t) {
                return !(t.passwordError || t.usernameError || t.birthdayError || t.emailError) && (!!e.username && (!!e.password && (!!e.email && (!!e.birthdayDate && (!!e.birthdayDate.day && (!!e.birthdayDate.month && (!!e.birthdayDate.year && (e.usernameValidationState !== A.Invalid && (!!ee(e.username) && (!e.isPasswordInvalid && (e.emailValidationState === Ae.Valid && !(!e.birthdayValidation || De(e.birthdayValidation)))))))))))))
            }
            var qe, Xe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onSubmit = function(e) {
                            e.preventDefault(), t.captchaInstance ? t.captchaInstance.execute() : t.submit()
                        }, t.onBirthdayDateChanged = function(e) {
                            t.props.onSignupFormValuesChanged({
                                birthdayDate: e
                            })
                        }, t.onBirthdayDateValidationChange = function() {
                            var e = t.props.values.birthdayDate;
                            e && t.props.onSignupFormValuesChanged({
                                birthdayValidation: function(e, t, r) {
                                    if (!e || !t || !r) return {
                                        dayInvalid: !t,
                                        monthInvalid: !e,
                                        yearInvalid: !r
                                    };
                                    var n = {
                                            dayInvalid: !1,
                                            monthInvalid: !1,
                                            yearInvalid: !1
                                        },
                                        o = _e[e.toString()];
                                    2 === e && function(e) {
                                        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                                    }(r) && (o = 29);
                                    var a = new Date,
                                        s = new Date(r, e - 1, t);
                                    return (!o || t > o) && (n.monthInvalid = t <= 31, n.dayInvalid = !0), r < a.getFullYear() - 150 && (n.yearInvalid = !0), s.getTime() - a.getTime() >= -xe && (n.yearInvalid = !0), n
                                }(e.month, e.day, e.year)
                            })
                        }, t.onUsernameInputChanged = function(e) {
                            t.props.onSignupFormValuesChanged({
                                username: e
                            })
                        }, t.onUsernameValidationRequested = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, r, n;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, ne(e = this.props.values.username)];
                                        case 1:
                                            return t = o.sent(), r = oe(e, t), n = r ? A.Invalid : A.Valid, this.props.onSignupFormValuesChanged({
                                                usernameValidationState: n,
                                                usernameErrorMessage: r
                                            }), [2]
                                    }
                                })
                            })
                        }, t.onPasswordInputChanged = function(e) {
                            var r = e.currentTarget.value,
                                n = ke(r),
                                o = !!n;
                            t.props.onSignupFormValuesChanged({
                                password: r,
                                isPasswordInvalid: o,
                                passwordErrorMessage: n
                            })
                        }, t.onEmailInputChanged = function(e) {
                            t.props.onSignupFormValuesChanged({
                                email: e
                            })
                        }, t.onEmailValidationRequested = function() {
                            var e = Ne(t.props.values.email),
                                r = e ? Ae.Invalid : Ae.Valid;
                            t.props.onSignupFormValuesChanged({
                                emailErrorMessage: e,
                                emailValidationState: r
                            })
                        }, t.onCaptchaInputChanged = function(e) {
                            t.props.onSignupFormValuesChanged({
                                captchaValue: e
                            }), t.submit()
                        }, t.onCaptchaRefDelegate = function(e) {
                            t.captchaInstance = e
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        Object(M.f)(M.c.Signup)
                    }, t.prototype.render = function() {
                        return a.createElement("form", {
                            noValidate: !0,
                            onSubmit: this.onSubmit
                        }, a.createElement(F.zb, {
                            background: F.r.Base,
                            fullWidth: !0,
                            flexDirection: F.Aa.Column,
                            display: F.X.Flex
                        }, this.renderUsername(), this.renderPassword(), this.renderDateOfBirth(), this.renderEmail(), this.renderSignup(), this.renderCaptcha()))
                    }, t.prototype.renderUsername = function() {
                        return a.createElement(F.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(J, {
                            screen: M.c.Signup,
                            onUsernameChanged: this.onUsernameInputChanged,
                            onValidationRequested: this.onUsernameValidationRequested,
                            value: this.props.values.username,
                            errorMessage: this.props.values.usernameErrorMessage,
                            validationState: this.props.serverErrors.usernameError ? A.Invalid : this.props.values.usernameValidationState,
                            autoFocus: !0,
                            refDelegate: this.props.refDelegate,
                            "data-a-target": "signup-username-input"
                        }))
                    }, t.prototype.renderPassword = function() {
                        return a.createElement(F.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(ye, {
                            screen: M.c.Signup,
                            value: this.props.values.password,
                            onChange: this.onPasswordInputChanged,
                            error: this.props.values.isPasswordInvalid || !!this.props.serverErrors.passwordError,
                            errorMessage: this.props.values.passwordErrorMessage,
                            "data-a-target": "signup-password-input",
                            isCapsLockOn: this.props.isCapsLockOn
                        }))
                    }, t.prototype.renderDateOfBirth = function() {
                        return a.createElement(F.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(Ve, {
                            date: this.props.values.birthdayDate,
                            onBirthdayDateChange: this.onBirthdayDateChanged,
                            onValidationRequested: this.onBirthdayDateValidationChange,
                            dateValidation: this.props.values.birthdayValidation,
                            serverError: !!this.props.serverErrors.birthdayError
                        }))
                    }, t.prototype.renderEmail = function() {
                        return a.createElement(F.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(Ue, {
                            onEmailChanged: this.onEmailInputChanged,
                            onValidationRequested: this.onEmailValidationRequested,
                            value: this.props.values.email,
                            validationState: this.props.serverErrors.emailError ? Ae.Invalid : this.props.values.emailValidationState,
                            errorMessage: this.props.values.emailErrorMessage
                        }))
                    }, t.prototype.renderCaptcha = function() {
                        return a.createElement(j, {
                            screen: M.c.Signup,
                            refDelegate: this.onCaptchaRefDelegate,
                            onChange: this.onCaptchaInputChanged,
                            invisible: !0
                        })
                    }, t.prototype.renderSignup = function() {
                        return a.createElement(F.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(F.Xa, {
                            margin: {
                                bottom: 2
                            },
                            textAlign: F.Lb.Center
                        }, a.createElement(F.W, {
                            fontSize: F.Ca.Size7,
                            color: F.O.Alt2
                        }, Object(s.d)("By clicking Sign Up, you are indicating that you have read and agree to the <x:tos>Terms of Service</x:tos> and <x:pp>Privacy Policy</x:pp>.", {
                            "x:tos": function(e) {
                                return a.createElement("a", {
                                    target: "_blank",
                                    tabIndex: -1,
                                    href: "https://www.twitch.tv/p/legal/terms-of-service/"
                                }, e)
                            },
                            "x:pp": function(e) {
                                return a.createElement("a", {
                                    target: "_blank",
                                    tabIndex: -1,
                                    href: "https://www.twitch.tv/p/legal/privacy-policy/"
                                }, e)
                            }
                        }, "SignupForm"))), a.createElement(F.z, {
                            disabled: this.props.isLoading || !Re(this.props.values, this.props.serverErrors),
                            state: this.props.isLoading ? F.E.Loading : F.E.Default,
                            fullWidth: !0,
                            "data-a-target": "passport-signup-button"
                        }, Object(s.d)("Sign Up", "SignupForm")))
                    }, Object.defineProperty(t.prototype, "canSignup", {
                        get: function() {
                            return Re(this.props.values, this.props.serverErrors)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.submit = function() {
                        return o.__awaiter(this, void 0, void 0, function() {
                            return o.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.canSignup ? (Object(M.g)({
                                            screen: M.c.Signup,
                                            target: M.d.Signup,
                                            action: M.a.Enter
                                        }), [4, this.props.onSignupRequested()]) : [3, 2];
                                    case 1:
                                        e.sent(), this.captchaInstance && this.captchaInstance.reset(), e.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }(a.Component),
                We = Object(U.compose)(Object(pe.b)("SignupForm", {
                    autoReportInteractive: !0
                }), ue())(Xe);
            ! function(e) {
                e.None = "None", e.Loading = "Loading", e.Success = "Success"
            }(qe || (qe = {}));
            var ze = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isSMSSuccessVisible: !1
                        }, t.onEnter = function() {
                            t.props.values.token && (Object(M.g)({
                                screen: M.c.TwoFactor,
                                target: M.d.Submit,
                                action: M.a.Enter
                            }), t.submitToken())
                        }, t.onRememberMeToggled = function(e) {
                            Object(M.g)({
                                screen: M.c.TwoFactor,
                                target: M.d.RememberMe,
                                action: M.a.Click
                            }), t.props.onTwoFactorFormValuesChanged({
                                rememberMe: e.currentTarget.checked
                            })
                        }, t.submitToken = function() {
                            t.props.values.token && t.props.onTokenSubmitRequested()
                        }, t.onTokenInputChanged = function(e) {
                            var r = e.currentTarget.value;
                            t.props.onTwoFactorFormValuesChanged({
                                token: r
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        w.bindGlobal("enter", this.onEnter), Object(M.f)(M.c.TwoFactor)
                    }, t.prototype.componentWillUnmount = function() {
                        w.unbind("enter"), this.smsTimerHandle && clearTimeout(this.smsTimerHandle)
                    }, t.prototype.componentDidUpdate = function(e) {
                        var t = this;
                        e.smsRequestState === qe.Loading && this.props.smsRequestState === qe.Success && (this.smsTimerHandle && clearTimeout(this.smsTimerHandle), this.setState({
                            isSMSSuccessVisible: !0
                        }), this.smsTimerHandle = setTimeout(function() {
                            t.setState({
                                isSMSSuccessVisible: !1
                            })
                        }, 1e3))
                    }, t.prototype.render = function() {
                        return a.createElement(F.Xa, null, a.createElement(F.W, {
                            type: F.Pb.Span,
                            bold: !0
                        }, Object(s.d)("Enter the code sent to you by text message or found in the Authy app.", "TwoFactorForm")), " ", a.createElement(F.W, {
                            type: F.Pb.Span
                        }, Object(s.d)("If you've lost your phone, please contact <x:ts>Twitch Support</x:ts>.", {
                            "x:ts": function(e) {
                                return a.createElement("a", {
                                    target: "_blank",
                                    href: "https://help.twitch.tv/customer/en/portal/articles/2186271"
                                }, e)
                            }
                        }, "TwoFactorForm")), a.createElement(F.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(F.Ea, {
                            label: Object(s.d)("Token", "TwoFactorForm"),
                            orientation: F.Fa.Vertical
                        }, a.createElement(X, {
                            screen: M.c.TwoFactor,
                            target: M.d.Token,
                            type: F.Ta.Text,
                            onChange: this.onTokenInputChanged,
                            value: Object(R.b)(this.props.values.token),
                            refDelegate: this.props.refDelegate,
                            autoFocus: !0
                        }), a.createElement(F.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(F.N, {
                            checked: !!this.props.values.rememberMe,
                            label: Object(s.d)("Remember this computer for 30 days", "TwoFactorForm"),
                            onChange: this.onRememberMeToggled
                        })))), a.createElement(F.Xa, {
                            display: F.X.Flex,
                            justifyContent: F.Wa.Center,
                            margin: {
                                top: 2
                            }
                        }, a.createElement(I, {
                            screen: M.c.TwoFactor,
                            target: M.d.Submit,
                            onClick: this.submitToken,
                            disabled: this.props.isLoading || !this.props.values.token,
                            state: this.props.isLoading ? F.E.Loading : F.E.Default
                        }, Object(s.d)("Submit", "TwoFactorForm")), a.createElement(F.Xa, {
                            margin: {
                                left: 2
                            }
                        }, a.createElement(I, {
                            screen: M.c.TwoFactor,
                            target: M.d.Sms,
                            type: F.F.Hollow,
                            onClick: this.props.onSMSRequested,
                            disabled: this.props.smsRequestState === qe.Loading,
                            state: this.smsButtonState
                        }, Object(s.d)("Request SMS", "TwoFactorForm")))))
                    }, Object.defineProperty(t.prototype, "smsButtonState", {
                        get: function() {
                            switch (this.props.smsRequestState) {
                                case qe.Loading:
                                    return F.E.Loading;
                                case qe.Success:
                                    return this.state.isSMSSuccessVisible ? F.E.Success : F.E.Default;
                                case qe.None:
                                default:
                                    return F.E.Default
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                Ye = ue()(ze);

            function Ge(e, t) {
                return t ? {
                    type: H.Proved,
                    proof: t
                } : e.type === H.Proved ? e : {
                    type: H.None
                }
            }
            var He = r("ugtu");

            function Je(e, t, r, n, a, i, c) {
                return o.__assign({}, function(e, t, r, n) {
                    switch (n) {
                        case v.UsernameMissing:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("The username field is required.", "FacebookConnectError")
                                },
                                facebookConnectFormServerErrors: {
                                    usernameError: !0
                                },
                                currentStep: B.AuthFormStep.FacebookConnect
                            };
                        case v.PasswordMissing:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("The password field is required.", "FacebookConnectError")
                                },
                                facebookConnectFormServerErrors: {
                                    passwordError: !0
                                },
                                currentStep: B.AuthFormStep.FacebookConnect
                            };
                        case v.MultipleAccountsLinkedToEmail:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This email is linked to multiple accounts. Please log in with a username instead.", "FacebookConnectError"),
                                    subMessage: Object(He.e)()
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: B.AuthFormStep.FacebookConnect
                            };
                        case v.NoAccountLinkedToEmail:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This email is not linked to a Twitch account. Please log in with a username instead.", "FacebookConnectError"),
                                    subMessage: Object(He.e)()
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: B.AuthFormStep.FacebookConnect
                            };
                        case v.IncorrectCaptcha:
                            return e === B.AuthFormStep.FacebookConnectCaptcha ? {
                                serverMessage: {
                                    message: Object(s.d)("That reCAPTCHA did not work.", "FacebookConnectError")
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: B.AuthFormStep.FacebookConnectCaptcha
                            } : {
                                serverMessage: {},
                                facebookConnectFormServerErrors: {},
                                currentStep: B.AuthFormStep.FacebookConnectCaptcha
                            };
                        case v.InvalidUsername:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("We didn't recognize this username. Please try again.", "FacebookConnectError"),
                                    subMessage: Object(He.e)()
                                },
                                facebookConnectFormServerErrors: {
                                    usernameError: !0
                                },
                                currentStep: B.AuthFormStep.FacebookConnect
                            };
                        case v.InvalidPassword:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("That password was incorrect. Please try again.", "FacebookConnectError"),
                                    subMessage: Object(He.d)()
                                },
                                facebookConnectFormServerErrors: {
                                    passwordError: !0
                                },
                                currentStep: B.AuthFormStep.FacebookConnect
                            };
                        case v.UserDoesNotExist:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This username is unavailable.", "FacebookConnectError"),
                                    subMessage: Object(He.c)(t)
                                },
                                facebookConnectFormServerErrors: {
                                    usernameError: !0
                                },
                                currentStep: B.AuthFormStep.FacebookConnect
                            };
                        case v.UserCredentialsIncorrect:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This username or password was incorrect.", "FacebookConnectError")
                                },
                                facebookConnectFormServerErrors: {
                                    usernameError: !0,
                                    passwordError: !0
                                },
                                currentStep: B.AuthFormStep.FacebookConnect
                            };
                        case v.UserNeedsPasswordReset:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This account needs a password reset.", "FacebookConnectError"),
                                    subMessage: Object(He.h)()
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: B.AuthFormStep.FacebookConnect
                            };
                        case v.UserHasBeenDeleted:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This account has been deleted.", "FacebookConnectError"),
                                    subMessage: Object(He.b)()
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: B.AuthFormStep.FacebookConnect
                            };
                        case v.SuspendedUser:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This account has been suspended.", "FacebookConnectError"),
                                    subMessage: Object(He.i)()
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: B.AuthFormStep.FacebookConnect
                            };
                        case v.FacebookAccountAlreadyLinked:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This facebook account is already linked to a Twitch account.", "FacebookConnectError"),
                                    subMessage: Object(He.f)(r)
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: B.AuthFormStep.FacebookConnect
                            };
                        case v.DeviceCookieThrottleReached:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("You have attempted to log in too many times on this device.", "FacebookConnectError"),
                                    subMessage: Object(s.d)("Please try again later.", "FacebookConnectError")
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: B.AuthFormStep.FacebookConnect
                            };
                        case v.MissingAuthyToken:
                            return {
                                serverMessage: {},
                                facebookConnectFormServerErrors: {},
                                currentStep: B.AuthFormStep.FacebookConnectTwoFactor
                            };
                        case v.InvalidAuthyToken:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("That code was incorrect.", "FacebookConnectError")
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: B.AuthFormStep.FacebookConnectTwoFactor
                            };
                        case v.FailedToVerifyAuthyToken:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("We were unable to verify your Authy code.", "FacebookConnectError")
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: B.AuthFormStep.FacebookConnectTwoFactor
                            };
                        case v.UnexpectedFacebookIssue:
                        case v.UnableToConnect:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("Something went wrong while connecting your Facebook account.", "FacebookConnectError")
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: B.AuthFormStep.FacebookConnect
                            };
                        case v.FailedToDecodeJSON:
                        case v.UnexpectedError:
                        default:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("Something went wrong.", "FacebookConnectError")
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: B.AuthFormStep.FacebookConnect
                            }
                    }
                }(e, t, r, a), {
                    captchaState: Ge(n, i),
                    isSubmitInTransit: !1,
                    smsProof: c
                })
            }

            function Ke(e, t, r) {
                return o.__assign({}, function(e, t) {
                    switch (t) {
                        case g.NoConnectedTwitchUser:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("You can now connect this Facebook account to an existing Twitch ID.", "FacebookLoginError"),
                                    subMessage: Object(He.g)(e),
                                    isSuccessMessage: !0
                                },
                                currentStep: B.AuthFormStep.FacebookConnect
                            };
                        case g.SuspendedUser:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This account has been suspended.", "FacebookLoginError"),
                                    subMessage: Object(He.i)()
                                },
                                currentStep: B.AuthFormStep.FacebookLogin
                            };
                        case g.MissingAuthyToken:
                            return {
                                serverMessage: {},
                                currentStep: B.AuthFormStep.FacebookLoginTwoFactor
                            };
                        case g.InvalidAuthyToken:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("That code was incorrect.", "FacebookLoginError")
                                },
                                currentStep: B.AuthFormStep.FacebookLoginTwoFactor
                            };
                        case g.FailedToVerifyAuthyToken:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("We were unable to verify your Authy code.", "FacebookLoginError")
                                },
                                currentStep: B.AuthFormStep.FacebookLoginTwoFactor
                            };
                        case g.UnableToVerifyIdentity:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("We were unable to verify your Facebook identity.", "FacebookLoginError")
                                },
                                currentStep: B.AuthFormStep.FacebookLogin
                            };
                        case g.FailedToDecodeJSON:
                        case g.UnexpectedError:
                        default:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("Something went wrong.", "FacebookLoginError")
                                },
                                currentStep: B.AuthFormStep.FacebookLogin
                            }
                    }
                }(e, t), {
                    isSubmitInTransit: !1,
                    smsProof: r
                })
            }

            function Qe(e, t, r) {
                return o.__assign({}, function(e, t, r) {
                    switch (r) {
                        case f.BlacklistedIP:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("We've noticed suspicious activity from this IP address.", "FacebookSignupError"),
                                    subMessage: Ze()
                                },
                                facebookSignupFormServerErrors: {}
                            };
                        case f.InvalidUsername:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This username submission is invalid.", "FacebookSignupError")
                                },
                                facebookSignupFormServerErrors: {
                                    usernameError: !0
                                }
                            };
                        case f.UsernameExists:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This username is already taken.", "FacebookSignupError")
                                },
                                facebookSignupFormServerErrors: {
                                    usernameError: !0
                                }
                            };
                        case f.InvalidPassword:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("Passwords must be between 8 to 71 characters.", "FacebookSignupError")
                                },
                                facebookSignupFormServerErrors: {
                                    passwordError: !0
                                }
                            };
                        case f.FacebookAccountAlreadyLinked:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This facebook account is already linked to a Twitch account.", "FacebookSignupError"),
                                    subMessage: Object(He.f)(t)
                                },
                                facebookSignupFormServerErrors: {}
                            };
                        case f.EmailThrottled:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("The email linked to your Facebook account has been used to create too many accounts in the last 24 hours.", "FacebookSignupError"),
                                    subMessage: $e(e)
                                },
                                facebookSignupFormServerErrors: {}
                            };
                        case f.IPThrottled:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("You are creating accounts too quickly.", "FacebookSignupError"),
                                    subMessage: Ze()
                                },
                                facebookSignupFormServerErrors: {}
                            };
                        case f.TooManyUsers:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("The email linked to your Facebook account is associated with too many accounts.", "FacebookSignupError"),
                                    subMessage: $e(e)
                                },
                                facebookSignupFormServerErrors: {}
                            };
                        case f.UnexpectedFacebookIssue:
                        case f.UnableToVerifyIdentity:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("You cannot sign up with this Facebook account right now.", "FacebookSignupError"),
                                    subMessage: function(e) {
                                        return Object(s.d)("Please <x:click>create an account here</x:click> instead.", {
                                            "x:click": function(t) {
                                                return Object(He.l)(t, e)
                                            }
                                        }, "FacebookSignupError")
                                    }(e)
                                },
                                facebookSignupFormServerErrors: {}
                            };
                        case f.FailedToDecodeJSON:
                        case f.UnexpectedSignupIssue:
                        default:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("Something went wrong.", "FacebookSignupError")
                                },
                                facebookSignupFormServerErrors: {}
                            }
                    }
                }(e, t, r), {
                    isSubmitInTransit: !1
                })
            }

            function Ze() {
                return Object(s.d)("Please try again later.", "FacebookSignupError")
            }

            function $e(e) {
                return Object(s.d)("Want to <x:click>create a new account</x:click> with a different email instead?", {
                    "x:click": function(t) {
                        return Object(He.l)(t, e)
                    }
                }, "FacebookSignupError")
            }

            function et(e, t, r, a, i, c, u) {
                return o.__assign({}, function(e, t, r, o) {
                    void 0 === r && (r = !1);
                    switch (o) {
                        case n.UsernameMissing:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("The username field is required.", "LoginError")
                                },
                                loginFormServerErrors: {
                                    usernameError: !0
                                },
                                currentStep: B.AuthFormStep.StartLogin
                            };
                        case n.PasswordMissing:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("The password field is required.", "LoginError")
                                },
                                loginFormServerErrors: {
                                    passwordError: !0
                                },
                                currentStep: B.AuthFormStep.StartLogin
                            };
                        case n.MultipleAccountsLinkedToEmail:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This email is linked to multiple accounts. Please log in with a username instead.", "LoginError"),
                                    subMessage: Object(He.e)()
                                },
                                loginFormServerErrors: {},
                                currentStep: B.AuthFormStep.StartLogin
                            };
                        case n.NoAccountLinkedToEmail:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This email is not linked to a Twitch account. Please log in with a username instead.", "LoginError"),
                                    subMessage: Object(He.e)()
                                },
                                loginFormServerErrors: {},
                                currentStep: B.AuthFormStep.StartLogin
                            };
                        case n.IncorrectCaptcha:
                            return e === B.AuthFormStep.LoginCaptcha ? {
                                serverMessage: {
                                    message: Object(s.d)("That reCAPTCHA did not work.", "LoginError")
                                },
                                loginFormServerErrors: {},
                                currentStep: B.AuthFormStep.LoginCaptcha
                            } : {
                                serverMessage: {},
                                loginFormServerErrors: {},
                                currentStep: B.AuthFormStep.LoginCaptcha
                            };
                        case n.InvalidUsername:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("We didn't recognize this username. Please try again.", "LoginError"),
                                    subMessage: Object(He.e)()
                                },
                                loginFormServerErrors: {
                                    usernameError: !0
                                },
                                currentStep: B.AuthFormStep.StartLogin
                            };
                        case n.InvalidPassword:
                            return {
                                serverMessage: {
                                    message: r ? Object(s.d)("That password was incorrect. Please try again. It looks like your caps lock was on.", "LoginError") : Object(s.d)("That password was incorrect. Please try again.", "LoginError"),
                                    subMessage: Object(He.d)()
                                },
                                loginFormServerErrors: {
                                    passwordError: !0
                                },
                                currentStep: B.AuthFormStep.StartLogin
                            };
                        case n.UserDoesNotExist:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This username does not exist.", "LoginError"),
                                    subMessage: Object(He.c)(t)
                                },
                                loginFormServerErrors: {
                                    usernameError: !0
                                },
                                currentStep: B.AuthFormStep.StartLogin
                            };
                        case n.UserCredentialsIncorrect:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This username or password was incorrect.", "LoginError"),
                                    subMessage: r ? Object(s.d)("Please try again. It looks like your caps lock was on.", "LoginError") : Object(s.d)("Please try again.", "LoginError")
                                },
                                loginFormServerErrors: {
                                    usernameError: !0,
                                    passwordError: !0
                                },
                                currentStep: B.AuthFormStep.StartLogin
                            };
                        case n.UserNeedsPasswordReset:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This account needs a password reset.", "LoginError"),
                                    subMessage: Object(He.h)()
                                },
                                loginFormServerErrors: {},
                                currentStep: B.AuthFormStep.StartLogin
                            };
                        case n.UserHasBeenDeleted:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This account does not exist.", "LoginError"),
                                    subMessage: Object(He.b)()
                                },
                                loginFormServerErrors: {},
                                currentStep: B.AuthFormStep.StartLogin
                            };
                        case n.SuspendedUser:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This account has been suspended.", "LoginError"),
                                    subMessage: Object(He.i)()
                                },
                                loginFormServerErrors: {},
                                currentStep: B.AuthFormStep.StartLogin
                            };
                        case n.DeviceCookieThrottleReached:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("You have attempted to log in too many times on this device.", "LoginError"),
                                    subMessage: Object(s.d)("Please try again later.", "LoginError")
                                },
                                loginFormServerErrors: {},
                                currentStep: B.AuthFormStep.StartLogin
                            };
                        case n.MissingAuthyToken:
                            return {
                                serverMessage: {},
                                loginFormServerErrors: {},
                                currentStep: B.AuthFormStep.LoginTwoFactor
                            };
                        case n.InvalidAuthyToken:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("That code was incorrect.", "LoginError")
                                },
                                loginFormServerErrors: {},
                                currentStep: B.AuthFormStep.LoginTwoFactor
                            };
                        case n.FailedToVerifyAuthyToken:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("We were unable to verify your Authy code.", "LoginError")
                                },
                                loginFormServerErrors: {},
                                currentStep: B.AuthFormStep.LoginTwoFactor
                            };
                        case n.FailedToDecodeJSON:
                        case n.UnexpectedError:
                        default:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("Something went wrong.", "LoginError")
                                },
                                loginFormServerErrors: {},
                                currentStep: B.AuthFormStep.StartLogin
                            }
                    }
                }(e, t, a, i), {
                    captchaState: Ge(r, c),
                    isSubmitInTransit: !1,
                    smsProof: u
                })
            }
            var tt = r("p46w"),
                rt = r("7M8a"),
                nt = new RegExp(/@(((([^.]+)\.)+)([a-zA-Z]{3,}|[a-zA-Z.]{5,}))/);
            var ot = "under13";

            function at(e, t) {
                return o.__assign({}, function(e, t) {
                    switch (t) {
                        case p.UserNameMissing:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("The username field is required.", "SignupError")
                                },
                                signupFormServerErrors: {
                                    usernameError: !0
                                }
                            };
                        case p.PasswordMissing:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("The password field is required.", "SignupError")
                                },
                                signupFormServerErrors: {
                                    passwordError: !0
                                }
                            };
                        case p.IncorrectCaptcha:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("That reCAPTCHA did not work.", "SignupError")
                                },
                                signupFormServerErrors: {}
                            };
                        case p.BlacklistedIP:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("We've noticed suspicious activity from this IP address.", "SignupError")
                                },
                                signupFormServerErrors: {}
                            };
                        case p.BlacklistedEmailDomain:
                            return {
                                serverMessage: {
                                    message: Object(s.d)('Emails using the domain "{domain}" are not allowed.', {
                                        domain: function(e) {
                                            if (!e) return "";
                                            var t = nt.exec(e);
                                            return null === t ? "" : t[1]
                                        }(e)
                                    }, "SignupError"),
                                    subMessage: Object(s.d)("Please try again with a different email address", "SignupError")
                                },
                                signupFormServerErrors: {
                                    emailError: !0
                                }
                            };
                        case p.InvalidBirthday:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("That birthday doesn’t seem right.", "SignupError")
                                },
                                signupFormServerErrors: {
                                    birthdayError: !0
                                }
                            };
                        case p.InvalidUsername:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This username submission is invalid.", "SignupError")
                                },
                                signupFormServerErrors: {
                                    usernameError: !0
                                }
                            };
                        case p.InvalidPassword:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("Passwords must be between 8 and 71 characters.", "SignupError")
                                },
                                signupFormServerErrors: {
                                    passwordError: !0
                                }
                            };
                        case p.MissingFields:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("Some fields were missing.", "SignupError"),
                                    subMessage: Object(s.d)("Please complete all fields to continue.", "SignupError")
                                },
                                signupFormServerErrors: {}
                            };
                        case p.UsernameExists:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This username is unavailable.", "SignupError")
                                },
                                signupFormServerErrors: {
                                    usernameError: !0
                                }
                            };
                        case p.UserUnder13:
                            return tt.set(ot, "true"), {
                                serverMessage: {
                                    message: Object(s.d)("Sorry, you must be at least 13 years old to create an account.", "SignupError"),
                                    subMessage: Object(s.d)("Please read our <x:link>terms of service</x:link>.", {
                                        "x:link": function(e) {
                                            return Object(He.k)(e, z.d)
                                        }
                                    }, "SignupError")
                                },
                                signupFormServerErrors: {}
                            };
                        case p.EmailThrottled:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This email has been used to create too many accounts in the last 24 hours.", "SignupError"),
                                    subMessage: Object(s.d)("Please try again with a different email address or try again tomorrow.", "SignupError")
                                },
                                signupFormServerErrors: {
                                    emailError: !0
                                }
                            };
                        case p.IPThrottled:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("You are creating accounts too quickly.", "SignupError"),
                                    subMessage: Object(s.d)("Please try again later.", "SignupError")
                                },
                                signupFormServerErrors: {}
                            };
                        case p.TooManyUsersWithEmail:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This email is associated with too many accounts.", "SignupError"),
                                    subMessage: st()
                                },
                                signupFormServerErrors: {
                                    emailError: !0
                                }
                            };
                        case p.MultiAccountDisabled:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("Unable to create account.", "SignupError"),
                                    subMessage: st()
                                },
                                signupFormServerErrors: {
                                    emailError: !0
                                }
                            };
                        case p.FailedToDecodeJSON:
                        case p.UnexpectedIssue:
                        default:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("Something went wrong.", "SignupError")
                                },
                                signupFormServerErrors: {}
                            }
                    }
                }(e, t), {
                    isSubmitInTransit: !1
                })
            }

            function st() {
                return Object(s.d)("Please use a different email to continue. <x:link>Click here</x:link> for more details.", {
                    "x:link": function(e) {
                        return Object(He.k)(e, Object(rt.b)(rt.a.CreatingAccounts))
                    }
                }, "SignupError")
            }
            var it, ct = "https://passport.twitch.tv/twofactor/sms/new";
            ! function(e) {
                e[e.UnexpectedError = 3014] = "UnexpectedError", e[e.SMSThrottled = 3015] = "SMSThrottled"
            }(it || (it = {}));
            r("IisL");
            var ut = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentStep: t.props.initialStep,
                            rootStep: t.props.initialStep,
                            loginFormValues: {},
                            loginFormServerErrors: {},
                            facebookSignupFormValues: {},
                            facebookSignupFormServerErrors: {},
                            facebookConnectFormValues: {},
                            facebookConnectFormServerErrors: {},
                            signupFormValues: {},
                            signupFormServerErrors: {},
                            twoFactorFormValues: {},
                            facebookInfo: {},
                            captchaState: {
                                type: H.None
                            },
                            serverMessage: {},
                            isSubmitInTransit: !1,
                            smsRequestState: qe.None,
                            isCapsLockOn: !1
                        }, t.onKeyPressed = function(e) {
                            var r = t.state.isCapsLockOn,
                                n = function(e) {
                                    return e.getModifierState && e.getModifierState("CapsLock")
                                }(e);
                            n !== r && t.setState({
                                isCapsLockOn: n
                            })
                        }, t.goBack = function() {
                            t.state.isSubmitInTransit || (t.state.currentStep === y.a.FacebookConnectTwoFactor || t.state.currentStep === y.a.FacebookConnectCaptcha ? t.changeFacebookFormType(y.a.FacebookConnect) : t.state.rootStep === y.a.StartLogin ? t.startLogin() : t.startSignup())
                        }, t.isInitialStep = function(e) {
                            return void 0 === e && (e = t.state.currentStep), e === y.a.StartLogin || e === y.a.StartSignup || e === y.a.FacebookLogin
                        }, t.isLoginFlow = function(e) {
                            return void 0 === e && (e = t.state.currentStep), e === y.a.StartLogin || e === y.a.LoginTwoFactor || e === y.a.LoginCaptcha || e === y.a.FacebookLogin || e === y.a.FacebookLoginTwoFactor
                        }, t.onLoginTabClicked = function() {
                            t.state.isSubmitInTransit || t.state.currentStep === y.a.StartLogin || t.startLogin()
                        }, t.onSignupTabClicked = function() {
                            t.state.isSubmitInTransit || t.state.currentStep === y.a.StartSignup || t.startSignup()
                        }, t.startLogin = function() {
                            t.setState({
                                rootStep: y.a.StartLogin,
                                captchaState: {
                                    type: H.None
                                },
                                twoFactorFormValues: {},
                                serverMessage: {},
                                currentStep: y.a.StartLogin
                            })
                        }, t.startSignup = function() {
                            t.setState(function(e) {
                                return {
                                    rootStep: y.a.StartSignup,
                                    signupFormValues: o.__assign({}, e.signupFormValues, {
                                        captchaValue: void 0
                                    }),
                                    twoFactorFormValues: {},
                                    facebookSignupFormValues: {},
                                    serverMessage: {},
                                    currentStep: y.a.StartSignup
                                }
                            })
                        }, t.onLoginFormValuesChanged = function(e) {
                            t.setState(function(t) {
                                return {
                                    loginFormValues: o.__assign({}, t.loginFormValues, e),
                                    loginFormServerErrors: {},
                                    serverMessage: {}
                                }
                            })
                        }, t.changeFacebookSignupFormValues = function(e) {
                            t.setState(function(t) {
                                return {
                                    facebookSignupFormValues: o.__assign({}, t.facebookSignupFormValues, e),
                                    facebookSignupFormServerErrors: {},
                                    serverMessage: {}
                                }
                            })
                        }, t.changeFacebookConnectFormValues = function(e) {
                            t.setState(function(t) {
                                return {
                                    facebookConnectFormValues: o.__assign({}, t.facebookConnectFormValues, e),
                                    facebookConnectFormServerErrors: {},
                                    serverMessage: {}
                                }
                            })
                        }, t.onSignupFormValuesChanged = function(e) {
                            t.setState(function(t) {
                                return {
                                    signupFormValues: o.__assign({}, t.signupFormValues, e),
                                    signupFormServerErrors: {},
                                    serverMessage: {}
                                }
                            })
                        }, t.onTwoFactorFormValuesChanged = function(e) {
                            t.setState(function(t) {
                                return {
                                    twoFactorFormValues: o.__assign({}, t.twoFactorFormValues, e),
                                    serverMessage: {}
                                }
                            })
                        }, t.beginSMSRequest = function() {
                            return t.state.smsRequestState !== qe.Loading && (t.setState({
                                smsRequestState: qe.Loading
                            }), !0)
                        }, t.onSMSSubmit = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.state.smsProof && this.beginSMSRequest() ? [4, function(e) {
                                                return o.__awaiter(this, void 0, Promise, function() {
                                                    var t, r, n, a, s;
                                                    return o.__generator(this, function(o) {
                                                        switch (o.label) {
                                                            case 0:
                                                                return o.trys.push([0, 3, , 4]), (t = new FormData).append("code", e), [4, fetch(ct, {
                                                                    method: "POST",
                                                                    credentials: "include",
                                                                    body: t
                                                                })];
                                                            case 1:
                                                                return [4, (r = o.sent()).json()];
                                                            case 2:
                                                                return n = o.sent(), a = 200 === r.status, s = n && !a ? n.error_code : void 0, [2, {
                                                                    success: a,
                                                                    errorCode: s
                                                                }];
                                                            case 3:
                                                                return o.sent(), [2, {
                                                                    errorCode: it.UnexpectedError,
                                                                    success: !1
                                                                }];
                                                            case 4:
                                                                return [2]
                                                        }
                                                    })
                                                })
                                            }(this.state.smsProof)] : [3, 2];
                                        case 1:
                                            (e = t.sent()).success ? this.setState({
                                                smsRequestState: qe.Success
                                            }) : this.setState(o.__assign({}, function(e) {
                                                switch (e) {
                                                    case it.SMSThrottled:
                                                        return {
                                                            serverMessage: {
                                                                message: Object(s.d)("You have requested too many SMS messages.", "SMSError"),
                                                                subMessage: Object(s.d)("Try again later.", "SMSError")
                                                            }
                                                        };
                                                    case it.UnexpectedError:
                                                    default:
                                                        return {
                                                            serverMessage: {
                                                                message: Object(s.d)("Error encountered when sending SMS.", "SMSError")
                                                            }
                                                        }
                                                }
                                            }(e.errorCode), {
                                                smsRequestState: qe.None
                                            })), t.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onAuthSubmit = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return o.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            switch (t = this.state.currentStep, t) {
                                                case y.a.StartLogin:
                                                case y.a.LoginCaptcha:
                                                case y.a.LoginTwoFactor:
                                                    return [3, 1];
                                                case y.a.FacebookLogin:
                                                case y.a.FacebookLoginTwoFactor:
                                                    return [3, 3];
                                                case y.a.FacebookConnect:
                                                case y.a.FacebookConnectTwoFactor:
                                                case y.a.FacebookConnectCaptcha:
                                                    return [3, 5];
                                                case y.a.FacebookSignup:
                                                    return [3, 7];
                                                case y.a.StartSignup:
                                                    return [3, 9]
                                            }
                                            return [3, 11];
                                        case 1:
                                            return [4, this.login()];
                                        case 2:
                                            return e = r.sent(), [3, 12];
                                        case 3:
                                            return [4, this.facebookLogin()];
                                        case 4:
                                            return e = r.sent(), [3, 12];
                                        case 5:
                                            return [4, this.facebookConnect()];
                                        case 6:
                                            return e = r.sent(), [3, 12];
                                        case 7:
                                            return [4, this.facebookSignup()];
                                        case 8:
                                            return e = r.sent(), [3, 12];
                                        case 9:
                                            return [4, this.signup()];
                                        case 10:
                                            return e = r.sent(), [3, 12];
                                        case 11:
                                            return [2, void 0];
                                        case 12:
                                            return Object(M.i)({
                                                errorCode: e,
                                                step: t
                                            }), [2]
                                    }
                                })
                            })
                        }, t.beginSubmit = function() {
                            return !t.state.isSubmitInTransit && (t.setState({
                                isSubmitInTransit: !0
                            }), !0)
                        }, t.login = function() {
                            return o.__awaiter(t, void 0, Promise, function() {
                                var e;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return we(this.state.loginFormValues, this.state.loginFormServerErrors) && this.beginSubmit() ? [4, function(e) {
                                                var t = s.p.logger.withCategory("auth.login"),
                                                    r = {
                                                        username: e.username,
                                                        password: e.password,
                                                        remember_me: e.rememberMe,
                                                        client_id: s.p.config.authSettings.clientID
                                                    };
                                                return e.captchaProof ? r.captcha = {
                                                    proof: e.captchaProof
                                                } : e.captchaValue && (r.captcha = {
                                                    value: e.captchaValue,
                                                    key: s.p.config.captchaKey
                                                }), e.authyToken && (r.authy_token = e.authyToken), l(Object(i.d)() ? h : d, r, {
                                                    logger: t
                                                })
                                            }(function(e, t, r) {
                                                var n = {
                                                    username: e.username,
                                                    password: e.password
                                                };
                                                return t.token && (n.authyToken = t.token), t.rememberMe && (n.rememberMe = t.rememberMe), r.type === H.Passed ? n.captchaValue = r.value : r.type === H.Proved && (n.captchaProof = r.proof), n
                                            }(this.state.loginFormValues, this.state.twoFactorFormValues, this.state.captchaState))] : [3, 5];
                                        case 1:
                                            return (e = t.sent()).complete ? [4, e.complete()] : [3, 3];
                                        case 2:
                                            return t.sent(), Object(M.j)(), [3, 4];
                                        case 3:
                                            this.setState(et(this.state.currentStep, this.startSignup, this.state.captchaState, this.state.isCapsLockOn, e.errorCode, e.captchaProof, e.smsProof)), t.label = 4;
                                        case 4:
                                            return [2, e.errorCode];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t.facebookLogin = function() {
                            return o.__awaiter(t, void 0, Promise, function() {
                                var e, t, r, n = this;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return se(e = this.state.facebookInfo) && this.beginSubmit() ? (t = {
                                                facebook: {
                                                    userID: e.id,
                                                    accessToken: e.accessToken
                                                }
                                            }, this.state.twoFactorFormValues.token && (t.authyToken = this.state.twoFactorFormValues.token), [4, function(e) {
                                                var t = s.p.logger.withCategory("auth.facebook-login"),
                                                    r = {
                                                        facebook: {
                                                            access_token: e.facebook.accessToken,
                                                            user_id: e.facebook.userID
                                                        },
                                                        client_id: s.p.config.authSettings.clientID
                                                    };
                                                return e.authyToken && (r.authy_token = e.authyToken), l(b, r, {
                                                    logger: t
                                                })
                                            }(t)]) : [3, 5];
                                        case 1:
                                            return (r = o.sent()).complete ? [4, r.complete()] : [3, 3];
                                        case 2:
                                            return o.sent(), Object(M.j)(), [3, 4];
                                        case 3:
                                            this.setState(Ke(function() {
                                                return n.changeFacebookFormType(y.a.FacebookSignup)
                                            }, r.errorCode, r.smsProof)), o.label = 4;
                                        case 4:
                                            return [2, r.errorCode];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t.facebookSignup = function() {
                            return o.__awaiter(t, void 0, Promise, function() {
                                var e, t, r, n;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return e = this.state.facebookInfo, t = this.state.facebookSignupFormValues, r = this.state.facebookSignupFormServerErrors, se(e) && ie(t, r) && this.beginSubmit() ? [4, function(e) {
                                                var t = s.p.logger.withCategory("auth.facebook-register"),
                                                    r = {
                                                        username: e.username,
                                                        password: e.password,
                                                        facebook: {
                                                            access_token: e.facebook.accessToken,
                                                            user_id: e.facebook.userID
                                                        },
                                                        client_id: s.p.config.authSettings.clientID
                                                    };
                                                return l(k, r, {
                                                    logger: t
                                                })
                                            }(function(e, t) {
                                                return {
                                                    facebook: {
                                                        userID: t.id,
                                                        accessToken: t.accessToken
                                                    },
                                                    username: e.username,
                                                    password: e.password
                                                }
                                            }(t, e))] : [3, 5];
                                        case 1:
                                            return (n = o.sent()).complete ? [4, n.complete()] : [3, 3];
                                        case 2:
                                            return o.sent(), Object(M.k)(), [3, 4];
                                        case 3:
                                            this.setState(Qe(this.startSignup, this.facebookLogin, n.errorCode)), o.label = 4;
                                        case 4:
                                            return [2, n.errorCode];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t.facebookConnect = function() {
                            return o.__awaiter(t, void 0, Promise, function() {
                                var e, t, r, n;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return e = this.state.facebookInfo, t = this.state.facebookConnectFormServerErrors, ae(r = this.state.facebookConnectFormValues, t) && se(e) && this.beginSubmit() ? [4, function(e) {
                                                var t = s.p.logger.withCategory("auth.facebook-connect"),
                                                    r = {
                                                        username: e.username,
                                                        password: e.password,
                                                        facebook: {
                                                            access_token: e.facebook.accessToken,
                                                            user_id: e.facebook.userID
                                                        },
                                                        client_id: s.p.config.authSettings.clientID
                                                    };
                                                return e.authyToken && (r.authy_token = e.authyToken), e.captchaValue ? r.captcha = {
                                                    key: s.p.config.captchaKey,
                                                    value: e.captchaValue
                                                } : e.captchaProof && (r.captcha = {
                                                    proof: e.captchaProof
                                                }), l(S, r, {
                                                    logger: t
                                                })
                                            }(function(e, t, r, n) {
                                                var o = {
                                                    facebook: {
                                                        userID: e.id,
                                                        accessToken: e.accessToken
                                                    },
                                                    username: t.username,
                                                    password: t.password
                                                };
                                                return r.token && (o.authyToken = r.token), n.type === H.Passed ? o.captchaValue = n.value : n.type === H.Proved && (o.captchaProof = n.proof), o
                                            }(e, r, this.state.twoFactorFormValues, this.state.captchaState))] : [3, 5];
                                        case 1:
                                            return (n = o.sent()).complete ? [4, n.complete()] : [3, 3];
                                        case 2:
                                            return o.sent(), Object(M.j)(), [3, 4];
                                        case 3:
                                            this.setState(Je(this.state.currentStep, this.startSignup, this.facebookLogin, this.state.captchaState, n.errorCode, n.captchaProof, n.smsProof)), o.label = 4;
                                        case 4:
                                            return [2, n.errorCode];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t.signup = function() {
                            return o.__awaiter(t, void 0, Promise, function() {
                                var e, t = this;
                                return o.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return this.isReadyForSubmit(this.state.signupFormValues, this.state.signupFormServerErrors) && this.beginSubmit() ? [4, function(e) {
                                                var t = s.p.logger.withCategory("auth.register"),
                                                    r = {
                                                        username: e.username,
                                                        password: e.password,
                                                        email: e.email,
                                                        birthday: e.birthday,
                                                        client_id: s.p.config.authSettings.clientID,
                                                        captcha: {
                                                            key: s.p.config.invisibleCaptchaKey,
                                                            value: e.captchaValue
                                                        }
                                                    };
                                                return l(m, r, {
                                                    logger: t
                                                })
                                            }(function(e) {
                                                return {
                                                    username: e.username,
                                                    password: e.password,
                                                    email: e.email,
                                                    birthday: {
                                                        day: e.birthdayDate.day,
                                                        month: e.birthdayDate.month,
                                                        year: e.birthdayDate.year
                                                    },
                                                    captchaValue: e.captchaValue
                                                }
                                            }(this.state.signupFormValues))] : [3, 5];
                                        case 1:
                                            return (e = r.sent()).complete ? [4, e.complete()] : [3, 3];
                                        case 2:
                                            return r.sent(), Object(M.k)(), [3, 4];
                                        case 3:
                                            this.setState(function(r) {
                                                return o.__assign({
                                                    signupFormValues: o.__assign({}, r.signupFormValues, {
                                                        captchaValue: void 0
                                                    })
                                                }, at(t.state.signupFormValues.email, e.errorCode))
                                            }), r.label = 4;
                                        case 4:
                                            return [2, e.errorCode];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t.changeFacebookFormType = function(e) {
                            t.setState({
                                facebookSignupFormValues: {},
                                facebookConnectFormValues: {},
                                serverMessage: {},
                                currentStep: e
                            })
                        }, t.onFacebookConnected = function(e) {
                            var r = t.isLoginFlow() ? {} : {
                                message: Object(s.d)("You can now connect this Facebook account to a new Twitch ID.", "AuthForm"),
                                subMessage: Object(He.a)(function() {
                                    return t.changeFacebookFormType(y.a.FacebookConnect)
                                }),
                                isSuccessMessage: !0
                            };
                            t.setState({
                                facebookInfo: e,
                                serverMessage: r,
                                currentStep: t.isLoginFlow() ? y.a.FacebookLogin : y.a.FacebookSignup
                            }, t.facebookLoginCallback)
                        }, t.facebookLoginCallback = function() {
                            t.isLoginFlow() && t.onAuthSubmit()
                        }, t.onCaptchaChanged = function(e) {
                            e && t.setState({
                                captchaState: {
                                    type: H.Passed,
                                    value: e
                                },
                                serverMessage: {}
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentWillMount = function() {
                        document.addEventListener("keydown", this.onKeyPressed), document.addEventListener("keyup", this.onKeyPressed)
                    }, t.prototype.componentWillUnmount = function() {
                        document.removeEventListener("keyup", this.onKeyPressed), document.removeEventListener("keydown", this.onKeyPressed), Object(M.g)({
                            screen: Object(M.e)(this.state.currentStep),
                            target: M.d.Close,
                            action: M.a.Click
                        })
                    }, t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportCustomEvent(this.props.loadedLatencyEvent)
                    }, t.prototype.render = function() {
                        return a.createElement(F.zb, {
                            padding: {
                                x: 2,
                                y: 3
                            },
                            display: F.X.Flex,
                            flexDirection: F.Aa.Column,
                            background: F.r.Base
                        }, this.renderBackButton(), this.renderHeader(), this.renderNavigation(), this.renderServerMessage(), this.renderForm(), this.renderFooter())
                    }, t.prototype.renderBackButton = function() {
                        return this.isInitialStep() ? null : a.createElement(F.Xa, null, a.createElement(F.A, {
                            ariaLabel: Object(s.d)("Back", "AuthForm"),
                            icon: F.pb.AngleLeft,
                            onClick: this.goBack,
                            "data-test-selector": "auth-form-back"
                        }))
                    }, t.prototype.renderHeader = function() {
                        return a.createElement(E, {
                            currentStep: this.state.currentStep,
                            fbConnectUsername: this.state.facebookConnectFormValues.username,
                            loginUsername: this.state.loginFormValues.username
                        })
                    }, t.prototype.renderNavigation = function() {
                        return this.isInitialStep() ? a.createElement(F.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(F.Bb, null, a.createElement(F.Ab, {
                            active: this.isLoginFlow(),
                            onClick: this.onLoginTabClicked,
                            "data-a-target": "passport-login-tab"
                        }, a.createElement(F.W, {
                            fontSize: F.Ca.Size5
                        }, Object(s.d)("Log In", "AuthForm"))), a.createElement(F.Ab, {
                            active: !this.isLoginFlow(),
                            onClick: this.onSignupTabClicked,
                            "data-a-target": "passport-signup-tab"
                        }, a.createElement(F.W, {
                            fontSize: F.Ca.Size5
                        }, Object(s.d)("Sign Up", "AuthForm"))))) : null
                    }, t.prototype.renderServerMessage = function() {
                        return a.createElement(Me, o.__assign({}, this.state.serverMessage))
                    }, t.prototype.renderForm = function() {
                        switch (this.state.currentStep) {
                            case y.a.StartLogin:
                            case y.a.FacebookLogin:
                                return a.createElement(Oe, {
                                    values: this.state.loginFormValues,
                                    serverErrors: this.state.loginFormServerErrors,
                                    onLoginFormValuesChanged: this.onLoginFormValuesChanged,
                                    onLoginRequested: this.onAuthSubmit,
                                    isLoading: this.state.isSubmitInTransit,
                                    isCapsLockOn: this.state.isCapsLockOn
                                });
                            case y.a.StartSignup:
                                return a.createElement(We, {
                                    values: this.state.signupFormValues,
                                    serverErrors: this.state.signupFormServerErrors,
                                    onSignupFormValuesChanged: this.onSignupFormValuesChanged,
                                    onSignupRequested: this.onAuthSubmit,
                                    isLoading: this.state.isSubmitInTransit,
                                    isCapsLockOn: this.state.isCapsLockOn
                                });
                            case y.a.FacebookSignup:
                                return a.createElement(Ee, {
                                    facebookName: this.state.facebookInfo.name,
                                    values: this.state.facebookSignupFormValues,
                                    serverErrors: this.state.facebookSignupFormServerErrors,
                                    onFacebookSignupFormValuesChanged: this.changeFacebookSignupFormValues,
                                    onFacebookFormTypeChanged: this.changeFacebookFormType,
                                    onSignupRequested: this.onAuthSubmit,
                                    isLoading: this.state.isSubmitInTransit,
                                    isCapsLockOn: this.state.isCapsLockOn
                                });
                            case y.a.FacebookConnect:
                                return a.createElement(he, {
                                    facebookName: this.state.facebookInfo.name,
                                    values: this.state.facebookConnectFormValues,
                                    serverErrors: this.state.facebookConnectFormServerErrors,
                                    onFacebookConnectFormValuesChanged: this.changeFacebookConnectFormValues,
                                    onFacebookFormTypeChanged: this.changeFacebookFormType,
                                    onConnectRequested: this.onAuthSubmit,
                                    isLoading: this.state.isSubmitInTransit,
                                    isCapsLockOn: this.state.isCapsLockOn
                                });
                            case y.a.LoginTwoFactor:
                            case y.a.FacebookLoginTwoFactor:
                            case y.a.FacebookConnectTwoFactor:
                                return a.createElement(F.Xa, {
                                    margin: {
                                        top: 2
                                    }
                                }, a.createElement(Ye, {
                                    values: this.state.twoFactorFormValues,
                                    onTwoFactorFormValuesChanged: this.onTwoFactorFormValuesChanged,
                                    onTokenSubmitRequested: this.onAuthSubmit,
                                    onSMSRequested: this.onSMSSubmit,
                                    isLoading: this.state.isSubmitInTransit,
                                    smsRequestState: this.state.smsRequestState
                                }));
                            case y.a.LoginCaptcha:
                            case y.a.FacebookConnectCaptcha:
                                return a.createElement(F.Xa, {
                                    margin: {
                                        top: 2
                                    }
                                }, a.createElement(P, {
                                    onCaptchaChanged: this.onCaptchaChanged,
                                    disableContinueButton: this.state.captchaState.type !== H.Passed,
                                    onContinueClicked: this.onAuthSubmit,
                                    isLoading: this.state.isSubmitInTransit
                                }));
                            default:
                                return
                        }
                    }, t.prototype.renderFooter = function() {
                        return !this.isInitialStep() || s.p.integrations.app ? null : a.createElement(F.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(V, {
                            onFacebookConnected: this.onFacebookConnected,
                            screen: Object(M.e)(this.state.currentStep),
                            disableConnectButton: this.state.isSubmitInTransit
                        }))
                    }, t.prototype.isReadyForSubmit = function(e, t) {
                        return !(!Re(e, t) || !Object(i.i)() && !this.state.signupFormValues.captchaValue)
                    }, t
                }(a.Component),
                lt = Object(pe.b)("AuthForm", {
                    autoReportInteractive: !0
                })(ut);
            r.d(t, "AUTH_FORM_BACK_SELECTOR", function() {
                return "auth-form-back"
            }), r.d(t, "AuthFormPresentation", function() {
                return ut
            }), r.d(t, "AuthForm", function() {
                return lt
            })
        },
        "7M8a": function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return o
            }), r.d(t, "b", function() {
                return l
            });
            var n, o, a = r("/7QA"),
                s = r("kRBY"),
                i = {
                    da: "da",
                    de: "de",
                    en: "en",
                    "es-mx": "es",
                    es: "es_es",
                    fi: "fi",
                    fr: "fr",
                    it: "it",
                    ja: "ja",
                    ko: "ko",
                    nl: "nl",
                    no: "no",
                    pl: "pl",
                    "pt-br": "pt_br",
                    pt: "pt_br",
                    ru: "ru",
                    sv: "sv",
                    th: "th",
                    tr: "tr",
                    vi: "en",
                    "zh-cn": "zh_cn",
                    "zh-tw": "zh_tw"
                },
                c = Object.keys(i);
            ! function(e) {
                e.CreatingAccounts = "658863-creating-an-account", e.SmartNotifications = "2944759"
            }(o || (o = {}));
            var u = ((n = {})[o.CreatingAccounts] = ["en", "de"], n[o.SmartNotifications] = c, n);

            function l(e) {
                var t = Object(s.b)(a.p.store.getState()) || "en",
                    r = "en",
                    n = u[e];
                return n && n.includes(t) && (r = i[t]), "https://help.twitch.tv/customer/" + r + "/portal/articles/" + e
            }
        },
        CojT: function(e, t, r) {
            e.exports = function(e) {
                return function(e) {
                    function t(n) {
                        if (r[n]) return r[n].exports;
                        var o = r[n] = {
                            exports: {},
                            id: n,
                            loaded: !1
                        };
                        return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
                    }
                    var r = {};
                    return t.m = e, t.c = r, t.p = "", t(0)
                }([function(e, t, r) {
                    e.exports = r(9)
                }, function(e, t, r) {
                    e.exports = r(7)()
                }, function(t, r) {
                    t.exports = e
                }, function(e, t, r) {
                    "use strict";

                    function n(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function o(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var a = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        },
                        s = function() {
                            function e(e, t) {
                                for (var r = 0; r < t.length; r++) {
                                    var n = t[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                                }
                            }
                            return function(t, r, n) {
                                return r && e(t.prototype, r), n && e(t, n), t
                            }
                        }(),
                        i = r(2),
                        c = n(i),
                        u = r(1),
                        l = n(u),
                        p = r(4),
                        d = n(p),
                        h = function(e) {
                            function t() {
                                var e, r, n;
                                ! function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, t);
                                for (var s = arguments.length, i = Array(s), c = 0; c < s; c++) i[c] = arguments[c];
                                return r = n = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n.state = {
                                    isSdkLoaded: !1,
                                    isProcessing: !1
                                }, n.responseApi = function(e) {
                                    window.FB.api("/me", {
                                        locale: n.props.language,
                                        fields: n.props.fields
                                    }, function(t) {
                                        a(t, e), n.props.callback(t)
                                    })
                                }, n.checkLoginState = function(e) {
                                    n.setStateIfMounted({
                                        isProcessing: !1
                                    }), e.authResponse ? n.responseApi(e.authResponse) : n.props.onFailure ? n.props.onFailure({
                                        status: e.status
                                    }) : n.props.callback({
                                        status: e.status
                                    })
                                }, n.checkLoginAfterRefresh = function(e) {
                                    "connected" === e.status ? n.checkLoginState(e) : window.FB.login(function(e) {
                                        return n.checkLoginState(e)
                                    }, !0)
                                }, n.click = function(e) {
                                    if (n.state.isSdkLoaded && !n.state.isProcessing && !n.props.isDisabled) {
                                        n.setState({
                                            isProcessing: !0
                                        });
                                        var t = n.props,
                                            r = t.scope,
                                            o = t.appId,
                                            a = t.onClick,
                                            s = t.returnScopes,
                                            i = t.responseType,
                                            c = t.redirectUri,
                                            u = t.disableMobileRedirect,
                                            l = t.authType,
                                            p = t.state;
                                        if ("function" != typeof a || (a(e), !e.defaultPrevented)) {
                                            var h = {
                                                client_id: o,
                                                redirect_uri: c,
                                                state: p,
                                                return_scopes: s,
                                                scope: r,
                                                response_type: i,
                                                auth_type: l
                                            };
                                            n.props.isMobile && !u ? window.location.href = "//www.facebook.com/dialog/oauth" + (0, d.default)(h) : window.FB.login(n.checkLoginState, {
                                                scope: r,
                                                return_scopes: s,
                                                auth_type: h.auth_type
                                            })
                                        }
                                    }
                                }, o(n, r)
                            }
                            return function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                            }(t, e), s(t, [{
                                key: "componentDidMount",
                                value: function() {
                                    if (this._isMounted = !0, document.getElementById("facebook-jssdk")) this.sdkLoaded();
                                    else {
                                        this.setFbAsyncInit(), this.loadSdkAsynchronously();
                                        var e = document.getElementById("fb-root");
                                        e || ((e = document.createElement("div")).id = "fb-root", document.body.appendChild(e))
                                    }
                                }
                            }, {
                                key: "componentWillReceiveProps",
                                value: function(e) {
                                    this.state.isSdkLoaded && e.autoLoad && !this.props.autoLoad && window.FB.getLoginStatus(this.checkLoginAfterRefresh)
                                }
                            }, {
                                key: "componentWillUnmount",
                                value: function() {
                                    this._isMounted = !1
                                }
                            }, {
                                key: "setStateIfMounted",
                                value: function(e) {
                                    this._isMounted && this.setState(e)
                                }
                            }, {
                                key: "setFbAsyncInit",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        r = t.appId,
                                        n = t.xfbml,
                                        o = t.cookie,
                                        a = t.version,
                                        s = t.autoLoad,
                                        i = t.state;
                                    window.fbAsyncInit = function() {
                                        window.FB.init({
                                            version: "v" + a,
                                            appId: r,
                                            xfbml: n,
                                            cookie: o
                                        }), e.setStateIfMounted({
                                            isSdkLoaded: !0
                                        }), (s || -1 !== window.location.search.indexOf(i)) && window.FB.getLoginStatus(e.checkLoginAfterRefresh)
                                    }
                                }
                            }, {
                                key: "sdkLoaded",
                                value: function() {
                                    this.setState({
                                        isSdkLoaded: !0
                                    })
                                }
                            }, {
                                key: "loadSdkAsynchronously",
                                value: function() {
                                    var e = this.props.language;
                                    ! function(t, r, n) {
                                        var o = t.getElementsByTagName(r)[0],
                                            a = o,
                                            s = o;
                                        t.getElementById(n) || ((s = t.createElement(r)).id = n, s.src = "https://connect.facebook.net/" + e + "/sdk.js", a.parentNode.insertBefore(s, a))
                                    }(document, "script", "facebook-jssdk")
                                }
                            }, {
                                key: "render",
                                value: function() {
                                    var e = this.props.render;
                                    if (!e) throw new Error("ReactFacebookLogin requires a render prop to render");
                                    var t = {
                                        onClick: this.click,
                                        isDisabled: !!this.props.isDisabled,
                                        isProcessing: this.state.isProcessing,
                                        isSdkLoaded: this.state.isSdkLoaded
                                    };
                                    return this.props.render(t)
                                }
                            }]), t
                        }(c.default.Component);
                    h.propTypes = {
                        isDisabled: l.default.bool,
                        callback: l.default.func.isRequired,
                        appId: l.default.string.isRequired,
                        xfbml: l.default.bool,
                        cookie: l.default.bool,
                        authType: l.default.bool,
                        scope: l.default.string,
                        state: l.default.string,
                        responseType: l.default.string,
                        returnScopes: l.default.bool,
                        redirectUri: l.default.string,
                        autoLoad: l.default.bool,
                        disableMobileRedirect: l.default.bool,
                        isMobile: l.default.bool,
                        fields: l.default.string,
                        version: l.default.string,
                        language: l.default.string,
                        onClick: l.default.func,
                        onFailure: l.default.func,
                        render: l.default.func.isRequired
                    }, h.defaultProps = {
                        redirectUri: "undefined" != typeof window ? window.location.href : "/",
                        scope: "public_profile,email",
                        returnScopes: !1,
                        xfbml: !1,
                        cookie: !1,
                        authType: "",
                        fields: "name",
                        version: "2.3",
                        language: "en_US",
                        disableMobileRedirect: !1,
                        isMobile: function() {
                            var e = !1;
                            try {
                                e = !!(window.navigator && window.navigator.standalone || navigator.userAgent.match("CriOS") || navigator.userAgent.match(/mobile/i))
                            } catch (e) {}
                            return e
                        }(),
                        onFailure: null,
                        state: "facebookdirect",
                        responseType: "code"
                    }, t.default = h
                }, function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = function(e) {
                        return "?" + Object.keys(e).map(function(t) {
                            return t + "=" + encodeURIComponent(e[t])
                        }).join("&")
                    }
                }, function(e, t) {
                    "use strict";

                    function r(e) {
                        return function() {
                            return e
                        }
                    }
                    var n = function() {};
                    n.thatReturns = r, n.thatReturnsFalse = r(!1), n.thatReturnsTrue = r(!0), n.thatReturnsNull = r(null), n.thatReturnsThis = function() {
                        return this
                    }, n.thatReturnsArgument = function(e) {
                        return e
                    }, e.exports = n
                }, function(e, t, r) {
                    "use strict";
                    var n = function(e) {};
                    e.exports = function(e, t, r, o, a, s, i, c) {
                        if (n(t), !e) {
                            var u;
                            if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                            else {
                                var l = [r, o, a, s, i, c],
                                    p = 0;
                                (u = new Error(t.replace(/%s/g, function() {
                                    return l[p++]
                                }))).name = "Invariant Violation"
                            }
                            throw u.framesToPop = 1, u
                        }
                    }
                }, function(e, t, r) {
                    "use strict";
                    var n = r(5),
                        o = r(6),
                        a = r(8);
                    e.exports = function() {
                        function e(e, t, r, n, s, i) {
                            i !== a && o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
                        }

                        function t() {
                            return e
                        }
                        e.isRequired = e;
                        var r = {
                            array: e,
                            bool: e,
                            func: e,
                            number: e,
                            object: e,
                            string: e,
                            symbol: e,
                            any: e,
                            arrayOf: t,
                            element: e,
                            instanceOf: t,
                            node: e,
                            objectOf: t,
                            oneOf: t,
                            oneOfType: t,
                            shape: t,
                            exact: t
                        };
                        return r.checkPropTypes = n, r.PropTypes = r, r
                    }
                }, function(e, t) {
                    "use strict";
                    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                }, function(e, t, r) {
                    "use strict";

                    function n(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        },
                        a = function() {
                            function e(e, t) {
                                for (var r = 0; r < t.length; r++) {
                                    var n = t[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                                }
                            }
                            return function(t, r, n) {
                                return r && e(t.prototype, r), n && e(t, n), t
                            }
                        }(),
                        s = r(2),
                        i = n(s),
                        c = r(1),
                        u = n(c),
                        l = r(10),
                        p = n(l),
                        d = r(3),
                        h = n(d),
                        g = function(e) {
                            function t() {
                                return function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                    }(this, t),
                                    function(e, t) {
                                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                            }
                            return function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                            }(t, e), a(t, [{
                                key: "style",
                                value: function() {
                                    var e = this.constructor.defaultProps.cssClass;
                                    return this.props.cssClass === e && i.default.createElement("style", {
                                        dangerouslySetInnerHTML: {
                                            __html: p.default
                                        }
                                    })
                                }
                            }, {
                                key: "containerStyle",
                                value: function(e) {
                                    var t = e.isProcessing,
                                        r = e.isSdkLoaded,
                                        n = e.isDisabled,
                                        a = {
                                            transition: "opacity 0.5s"
                                        };
                                    return (t || !r || n) && (a.opacity = .6), o(a, this.props.containerStyle)
                                }
                            }, {
                                key: "renderOwnButton",
                                value: function(e) {
                                    var t = this.props,
                                        r = t.cssClass,
                                        n = t.size,
                                        a = t.icon,
                                        s = t.textButton,
                                        c = t.typeButton,
                                        u = t.buttonStyle,
                                        l = e.onClick,
                                        p = e.isDisabled,
                                        d = "string" == typeof a,
                                        h = {};
                                    return p && function(e) {
                                        return ["button", "input", "select", "textarea", "optgroup", "option", "fieldset"].indexOf((e + "").toLowerCase()) >= 0
                                    }(this.props.tag) && (h.disabled = !0), i.default.createElement("span", {
                                        style: this.containerStyle(e)
                                    }, d && i.default.createElement("link", {
                                        rel: "stylesheet",
                                        href: "//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
                                    }), i.default.createElement(this.props.tag, o({
                                        type: c,
                                        className: r + " " + n,
                                        style: u,
                                        onClick: l
                                    }, h), a && d && i.default.createElement("i", {
                                        className: "fa " + a
                                    }), a && !d && a, s), this.style())
                                }
                            }, {
                                key: "render",
                                value: function() {
                                    var e = this;
                                    return i.default.createElement(h.default, o({}, this.props, {
                                        render: function(t) {
                                            return e.renderOwnButton(t)
                                        }
                                    }))
                                }
                            }]), t
                        }(i.default.Component);
                    g.propTypes = {
                        textButton: u.default.string,
                        typeButton: u.default.string,
                        size: u.default.string,
                        cssClass: u.default.string,
                        icon: u.default.any,
                        containerStyle: u.default.object,
                        buttonStyle: u.default.object,
                        tag: u.default.oneOfType([u.default.node, u.default.func])
                    }, g.defaultProps = {
                        textButton: "Login with Facebook",
                        typeButton: "button",
                        size: "metro",
                        fields: "name",
                        cssClass: "kep-login-facebook",
                        tag: "button"
                    }, t.default = g
                }, function(e, t, r) {
                    (t = e.exports = r(11)()).push([e.id, ".kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}", ""]), t.locals = {
                        "kep-login-facebook": "kep-login-facebook",
                        small: "small",
                        medium: "medium",
                        metro: "metro",
                        fa: "fa"
                    }
                }, function(e, t) {
                    e.exports = function() {
                        var e = [];
                        return e.toString = function() {
                            for (var e = [], t = 0; t < this.length; t++) {
                                var r = this[t];
                                r[2] ? e.push("@media " + r[2] + "{" + r[1] + "}") : e.push(r[1])
                            }
                            return e.join("")
                        }, e.i = function(t, r) {
                            "string" == typeof t && (t = [
                                [null, t, ""]
                            ]);
                            for (var n = {}, o = 0; o < this.length; o++) {
                                var a = this[o][0];
                                "number" == typeof a && (n[a] = !0)
                            }
                            for (o = 0; o < t.length; o++) {
                                var s = t[o];
                                "number" == typeof s[0] && n[s[0]] || (r && !s[2] ? s[2] = r : r && (s[2] = "(" + s[2] + ") and (" + r + ")"), e.push(s))
                            }
                        }, e
                    }
                }])
            }(r("q1tI"))
        },
        FsIG: function(e, t, r) {
            "use strict";

            function n(e) {
                return e || ""
            }

            function o(e) {
                return e ? e.toString() : ""
            }
            r.d(t, "b", function() {
                return n
            }), r.d(t, "a", function() {
                return o
            })
        },
        GxR5: function(e, t, r) {
            "use strict";
            r.d(t, "b", function() {
                return o
            }), r.d(t, "a", function() {
                return a
            }), r.d(t, "c", function() {
                return s
            }), r.d(t, "d", function() {
                return i
            }), r.d(t, "e", function() {
                return c
            });
            var n = r("/7QA"),
                o = "https://passport.twitch.tv/forgot_username/new",
                a = "https://help.twitch.tv/customer/portal/emails/new",
                s = "https://help.twitch.tv/customer/portal/articles/1727973-about-site-suspensions-channel-bans-and-dmca",
                i = "https://www.twitch.tv/p/legal/terms-of-service/";

            function c() {
                return "https://passport.twitch.tv/password_resets/new?client_id=" + n.a.authSettings.clientID
            }
        },
        IisL: function(e, t, r) {},
        JT9d: function(e, t, r) {},
        QRgD: function(e, t, r) {},
        T1dR: function(e, t, r) {},
        VcSt: function(e, t) {
            ! function(e) {
                var t = {},
                    r = e.prototype.stopCallback;
                e.prototype.stopCallback = function(e, n, o, a) {
                    return !!this.paused || !t[o] && !t[a] && r.call(this, e, n, o)
                }, e.prototype.bindGlobal = function(e, r, n) {
                    if (this.bind(e, r, n), e instanceof Array)
                        for (var o = 0; o < e.length; o++) t[e[o]] = !0;
                    else t[e] = !0
                }, e.init()
            }(Mousetrap)
        },
        XWOp: function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CoreAuthCurrentUser"
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 84
                }
            };
            r.loc.source = {
                body: "query CoreAuthCurrentUser {\ncurrentUser {\ndisplayName\nid\nlogin\nroles {\nisStaff\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        YVDj: function(e) {
            e.exports = {
                "ar-sa": "DMY",
                "bg-bg": "DMY",
                "cs-cz": "DMY",
                "da-dk": "DMY",
                "de-de": "DMY",
                "el-gr": "DMY",
                "en-gb": "MDY",
                "en-us": "MDY",
                "es-es": "DMY",
                "es-mx": "DMY",
                "fi-fi": "DMY",
                "fr-fr": "DMY",
                "hi-in": "DMY",
                "hu-hu": "YMD",
                "it-it": "DMY",
                "ja-jp": "YMD",
                "ko-kr": "YMD",
                "nl-nl": "DMY",
                "no-no": "DMY",
                "pl-pl": "DMY",
                "pt-br": "DMY",
                "pt-pt": "DMY",
                "ro-ro": "DMY",
                "ru-ru": "DMY",
                "sk-sk": "DMY",
                "sv-se": "YMD",
                "th-th": "DMY",
                "tr-tr": "DMY",
                "vi-vn": "DMY",
                "zh-tw": "YMD",
                "zh-cn": "YMD"
            }
        },
        c8uT: function(e, t, r) {},
        lP32: function(e, t, r) {},
        mGa3: function(e, t, r) {},
        obJ3: function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DesktopFastLoginForm_User"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "id"
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
                                        value: "id"
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
                                        value: "profileImageURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "70"
                                        }
                                    }],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 108
                }
            };
            r.loc.source = {
                body: "query DesktopFastLoginForm_User($id: ID!) {\nuser(id: $id) {\nlogin\ndisplayName\nprofileImageURL(width: 70)\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        pKR5: function(e, t, r) {},
        q1NB: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r("mrSG"),
                o = r("q1tI"),
                a = r("fvjX"),
                s = r("/7QA"),
                i = r("8/mp"),
                c = r("V+GM"),
                u = r("1/iK"),
                l = r("NvVO"),
                p = r("2xye"),
                d = r("kz7j"),
                h = r("4uwt"),
                g = r("ZqP/"),
                m = r("tKDy"),
                f = r("GnwI"),
                b = r("oJmH"),
                v = r("yR8l"),
                k = r("QVaV"),
                S = r("Ue10"),
                y = function(e) {
                    var t = e.customButtonText || Object(s.d)("Try again", "DesktopLoginErrorForm");
                    return o.createElement(S.zb, {
                        background: S.r.Base,
                        fullWidth: !0,
                        flexDirection: S.Aa.Column,
                        display: S.X.Flex,
                        justifyContent: S.Wa.Center,
                        alignItems: S.f.Center
                    }, o.createElement(S.W, {
                        fontSize: S.Ca.Size3
                    }, Object(s.d)("Oops,", "DesktopLoginErrorForm")), o.createElement(S.W, {
                        fontSize: S.Ca.Size7,
                        color: S.O.Alt2
                    }, e.errorMessage), o.createElement(S.Xa, {
                        margin: 2,
                        fullWidth: !0
                    }, o.createElement(S.z, {
                        onClick: e.onTryAgain,
                        size: S.D.Large,
                        fullWidth: !0
                    }, t)))
                },
                F = r("Ideu"),
                E = r("obJ3"),
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            loading: !1
                        }, t.handleFastLoginClick = function() {
                            return n.__awaiter(t, void 0, void 0, function() {
                                return n.__generator(this, function(e) {
                                    return this.state.loading || !s.p.integrations.session ? [2] : (this.setState({
                                        loading: !0
                                    }, this.performFastLogin), [2])
                                })
                            })
                        }, t.onLoginComplete = function() {
                            window.location.reload()
                        }, t.performFastLogin = function() {
                            return n.__awaiter(t, void 0, void 0, function() {
                                var e, t, r;
                                return n.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!s.p.integrations.session || !s.p.integrations.session.requestFastLogin) return [2];
                                            if (!(e = this.getLoginName())) return [2];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, s.p.integrations.session.requestFastLogin({
                                                login: e
                                            })];
                                        case 2:
                                            return (t = n.sent()).statusCode === F.FastLoginStatusCode.Success ? (this.onLoginComplete(), [2]) : (t.statusCode === F.FastLoginStatusCode.Error && s.k.warn("FastLogin unsuccessful", {
                                                message: t.message
                                            }), [3, 4]);
                                        case 3:
                                            return r = n.sent(), s.k.error(r, "Error authenticating with FastLogin"), [3, 4];
                                        case 4:
                                            return this.setState({
                                                loading: !1,
                                                errorMessage: Object(s.d)("Looks like you were logged out of that account", "DesktopFastLoginForm")
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return this.state.errorMessage ? o.createElement(y, {
                            errorMessage: this.state.errorMessage,
                            onTryAgain: this.props.onBack,
                            customButtonText: Object(s.d)("Go to log in instead", "DesktopLoginErrorForm")
                        }) : o.createElement(S.zb, {
                            background: S.r.Base,
                            color: S.O.Base,
                            fullWidth: !0,
                            flexDirection: S.Aa.Column,
                            display: S.X.Flex,
                            justifyContent: S.Wa.Center,
                            alignItems: S.f.Center
                        }, o.createElement(S.ob, {
                            asset: S.pb.LogoGlitch,
                            width: 40,
                            height: 40,
                            type: S.qb.Brand
                        }), o.createElement(S.Xa, {
                            margin: {
                                top: 2,
                                left: 2,
                                right: 2
                            },
                            justifyContent: S.Wa.Center
                        }, this.renderLogInAs(), this.renderAvatarBox()), this.renderContinueButton(), o.createElement(S.Xa, {
                            padding: {
                                x: 2,
                                top: 2
                            }
                        }, this.renderGoBackLink()))
                    }, t.prototype.renderAvatarBox = function() {
                        var e = this.getFormattedDisplayNameString(),
                            t = this.props.data && this.props.data.user && this.props.data.user.profileImageURL,
                            r = e ? o.createElement(S.W, {
                                fontSize: S.Ca.Size7,
                                type: S.Pb.Strong
                            }, this.getFormattedDisplayNameHtml()) : o.createElement(S.eb, {
                                height: 10,
                                width: 100
                            }),
                            n = t && e ? o.createElement(S.q, {
                                alt: Object(s.d)("{username}'s profile image", {
                                    username: e
                                }, "DesktopFastLoginForm"),
                                src: t,
                                size: 40
                            }) : o.createElement(S.eb, {
                                height: 40,
                                width: 40
                            });
                        return o.createElement(S.zb, {
                            margin: 2,
                            padding: .5,
                            border: !0,
                            flexDirection: S.Aa.Row,
                            display: S.X.Flex
                        }, n, o.createElement(S.Xa, {
                            padding: {
                                left: .5
                            },
                            flexDirection: S.Aa.Column,
                            display: S.X.Flex,
                            alignItems: S.f.Start,
                            justifyContent: S.Wa.Center
                        }, r, o.createElement(S.W, {
                            fontSize: S.Ca.Size7,
                            color: S.O.Alt2
                        }, Object(s.d)("On Twitch", "DesktopFastLoginForm"))))
                    }, t.prototype.renderGoBackLink = function() {
                        return o.createElement(S.U, {
                            onClick: this.props.onBack,
                            type: S.V.Inherit,
                            hoverColorInherit: !0
                        }, Object(s.d)("Not you? Switch accounts", "DesktopFastLoginForm"))
                    }, t.prototype.renderLogInAs = function() {
                        var e = this.getFormattedDisplayNameString();
                        return e ? o.createElement(S.W, {
                            fontSize: S.Ca.Size4,
                            type: S.Pb.Strong
                        }, Object(s.d)("Log in as {username} ", {
                            username: e
                        }, "DesktopFastLoginForm")) : o.createElement(S.eb, {
                            height: 20,
                            width: 200
                        })
                    }, t.prototype.renderContinueButton = function() {
                        return o.createElement(S.z, {
                            disabled: this.state.loading,
                            onClick: this.handleFastLoginClick,
                            size: S.D.Large,
                            state: this.state.loading ? S.E.Loading : S.E.Default,
                            fullWidth: !0
                        }, Object(s.d)("Continue", "DesktopFastLoginForm"))
                    }, t.prototype.getDisplayName = function() {
                        return this.props.data && this.props.data.user && this.props.data.user.displayName ? this.props.data.user.displayName : null
                    }, t.prototype.getFormattedDisplayNameHtml = function() {
                        var e = this.getDisplayName(),
                            t = this.getLoginName();
                        return t && e ? Object(k.a)(t, e) : null
                    }, t.prototype.getFormattedDisplayNameString = function() {
                        var e = this.getDisplayName(),
                            t = this.getLoginName();
                        return t && e ? Object(k.a)(t, e, !0) : null
                    }, t.prototype.getLoginName = function() {
                        return this.props.data && this.props.data.user && this.props.data.user.login ? this.props.data.user.login : null
                    }, t
                }(o.Component),
                C = Object(b.compose)(Object(v.a)(E, {
                    options: function(e) {
                        return {
                            variables: {
                                id: e.userID
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.userID
                    }
                }))(w),
                T = (r("mGa3"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            loading: !0
                        }, t.loadedLatencyEvent = t.props.latencyTracking.registerCustomEvent({
                            benchmark: 1e3,
                            group: d.a.Passport,
                            label: d.c.Loaded,
                            start: d.d.Registration,
                            key: d.b.PassportLoginLoaded
                        }), t.disableFastLogin = function() {
                            t.setState({
                                fastLoginID: null
                            })
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        return n.__awaiter(this, void 0, void 0, function() {
                            var e, t;
                            return n.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (Object(m.h)({
                                                step: g.a.StartLogin,
                                                source: u.a.DesktopLogin,
                                                style: m.b.Native
                                            }), !s.p.integrations.session || !s.p.integrations.session.checkForFastLogin) return [3, 4];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, s.p.integrations.session.checkForFastLogin()];
                                    case 2:
                                        return e = r.sent(), this.setState({
                                            fastLoginID: e && e.fastLoginAvailable ? e.userId : void 0
                                        }), [3, 4];
                                    case 3:
                                        return t = r.sent(), s.k.error(t, "Error in checkForFastLogin"), [3, 4];
                                    case 4:
                                        return this.setState({
                                            loading: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return o.createElement(S.Ja, {
                            gutterSize: S.Ka.None,
                            fullHeight: !0
                        }, o.createElement(S.P, {
                            cols: 6
                        }, o.createElement(S.zb, {
                            background: S.r.Base,
                            color: S.O.Base,
                            fullHeight: !0,
                            display: S.X.Flex,
                            flexDirection: S.Aa.Column,
                            justifyContent: S.Wa.Center,
                            alignItems: S.f.Center
                        }, o.createElement(S.Pa, {
                            fullWidth: !0
                        }, o.createElement(i.b, {
                            suppressScrollX: !0,
                            className: "desktop-login-page__scroll"
                        }, o.createElement(S.Xa, {
                            padding: 2,
                            fullWidth: !0,
                            fullHeight: !0,
                            display: S.X.Flex,
                            flexDirection: S.Aa.Column,
                            justifyContent: S.Wa.Center,
                            alignItems: S.f.Center
                        }, o.createElement(S.zb, {
                            className: "desktop-login-page__container",
                            background: S.r.Base,
                            borderRadius: S.x.Medium,
                            overflow: S.ab.Hidden,
                            display: S.X.Flex,
                            flexDirection: S.Aa.Column,
                            justifyContent: S.Wa.Center
                        }, this.renderContents())))))), o.createElement(S.P, {
                            cols: 6
                        }, o.createElement(S.zb, {
                            background: S.r.Accent,
                            color: S.O.Overlay,
                            fullHeight: !0
                        })))
                    }, t.prototype.renderContents = function() {
                        return this.state.loading ? o.createElement(S.Za, {
                            fillContent: !0
                        }) : this.renderAuthForm()
                    }, t.prototype.renderAuthForm = function() {
                        return s.p.integrations.session && this.state.fastLoginID ? o.createElement(C, {
                            userID: this.state.fastLoginID,
                            onBack: this.disableFastLogin
                        }) : o.createElement(h.AuthForm, {
                            action: u.a.DesktopLogin,
                            initialStep: g.a.StartLogin,
                            loadedLatencyEvent: this.loadedLatencyEvent
                        })
                    }, t
                }(o.Component)),
                O = Object(a.compose)(Object(f.b)("DesktopLoginPage", {
                    destination: l.a.DesktopLoginPage,
                    autoReportInteractive: !0
                }), Object(c.a)({
                    location: p.PageviewLocation.DesktopLoginPage
                }))(T);
            r.d(t, "DesktopLoginPage", function() {
                return O
            })
        },
        qV8A: function(e, t, r) {},
        sC5l: function(e, t, r) {},
        ugtu: function(e, t, r) {
            "use strict";
            r.d(t, "j", function() {
                return i
            }), r.d(t, "k", function() {
                return c
            }), r.d(t, "l", function() {
                return u
            }), r.d(t, "e", function() {
                return l
            }), r.d(t, "d", function() {
                return p
            }), r.d(t, "h", function() {
                return d
            }), r.d(t, "b", function() {
                return h
            }), r.d(t, "i", function() {
                return g
            }), r.d(t, "c", function() {
                return m
            }), r.d(t, "f", function() {
                return f
            }), r.d(t, "g", function() {
                return b
            }), r.d(t, "a", function() {
                return v
            });
            var n = r("q1tI"),
                o = r("/7QA"),
                a = r("GxR5"),
                s = r("Ue10");

            function i(e) {
                return n.createElement(s.W, {
                    type: s.Pb.Strong
                }, e)
            }

            function c(e, t) {
                return n.createElement(s.U, {
                    to: t,
                    targetBlank: !0
                }, e)
            }

            function u(e, t) {
                return n.createElement(s.U, {
                    onClick: t
                }, e)
            }

            function l() {
                return Object(o.d)("<x:link>Forgot your username</x:link>?", {
                    "x:link": function(e) {
                        return c(e, a.b)
                    }
                }, "ServerMessage")
            }

            function p() {
                return Object(o.d)("<x:link>Forgot your password</x:link>?", {
                    "x:link": function(e) {
                        return c(e, Object(a.e)())
                    }
                }, "ServerMessage")
            }

            function d() {
                return Object(o.d)("Please <x:link>reset your password</x:link>.", {
                    "x:link": function(e) {
                        return c(e, Object(a.e)())
                    }
                }, "ServerMessage")
            }

            function h() {
                return Object(o.d)("Please <x:link>contact support</x:link> for assistance.", {
                    "x:link": function(e) {
                        return c(e, a.a)
                    }
                }, "ServerMessage")
            }

            function g() {
                return Object(o.d)("To learn more, please read <x:link>this article</x:link>.", {
                    "x:link": function(e) {
                        return c(e, a.c)
                    }
                }, "ServerMessage")
            }

            function m(e) {
                return Object(o.d)("Want to <x:click>create a new account</x:click>?", {
                    "x:click": function(t) {
                        return u(t, e)
                    }
                }, "ServerMessage")
            }

            function f(e) {
                return Object(o.d)("Want to <x:click>log in</x:click> instead?", {
                    "x:click": function(t) {
                        return u(t, e)
                    }
                }, "ServerMessage")
            }

            function b(e) {
                return Object(o.d)("If you need a Twitch account, you can <x:click>create one here</x:click>.", {
                    "x:click": function(t) {
                        return u(t, e)
                    }
                }, "ServerMessage")
            }

            function v(e) {
                return Object(o.d)("If you want to use an existing Twitch ID, you can <x:click>connect it here</x:click>.", {
                    "x:click": function(t) {
                        return u(t, e)
                    }
                }, "ServerMessage")
            }
        },
        yfE0: function(e, t, r) {
            var n, o, a;
            o = [], void 0 === (a = "function" == typeof(n = function() {
                var e = {
                    configs: {
                        allowPassphrases: !0,
                        maxLength: 128,
                        minLength: 10,
                        minPhraseLength: 20,
                        minOptionalTestsToPass: 4
                    },
                    config: function(e) {
                        for (var t in e) e.hasOwnProperty(t) && this.configs.hasOwnProperty(t) && (this.configs[t] = e[t])
                    }
                };
                return e.tests = {
                    required: [function(t) {
                        if (t.length < e.configs.minLength) return "The password must be at least " + e.configs.minLength + " characters long."
                    }, function(t) {
                        if (t.length > e.configs.maxLength) return "The password must be fewer than " + e.configs.maxLength + " characters."
                    }, function(e) {
                        if (/(.)\1{2,}/.test(e)) return "The password may not contain sequences of three or more repeated characters."
                    }],
                    optional: [function(e) {
                        if (!/[a-z]/.test(e)) return "The password must contain at least one lowercase letter."
                    }, function(e) {
                        if (!/[A-Z]/.test(e)) return "The password must contain at least one uppercase letter."
                    }, function(e) {
                        if (!/[0-9]/.test(e)) return "The password must contain at least one number."
                    }, function(e) {
                        if (!/[^A-Za-z0-9]/.test(e)) return "The password must contain at least one special character."
                    }]
                }, e.test = function(e) {
                    var t = {
                            errors: [],
                            failedTests: [],
                            passedTests: [],
                            requiredTestErrors: [],
                            optionalTestErrors: [],
                            isPassphrase: !1,
                            strong: !0,
                            optionalTestsPassed: 0
                        },
                        r = 0;
                    if (this.tests.required.forEach(function(n) {
                            var o = n(e);
                            "string" == typeof o ? (t.strong = !1, t.errors.push(o), t.requiredTestErrors.push(o), t.failedTests.push(r)) : t.passedTests.push(r), r++
                        }), !0 === this.configs.allowPassphrases && e.length >= this.configs.minPhraseLength && (t.isPassphrase = !0), !t.isPassphrase) {
                        var n = this.tests.required.length;
                        this.tests.optional.forEach(function(r) {
                            var o = r(e);
                            "string" == typeof o ? (t.errors.push(o), t.optionalTestErrors.push(o), t.failedTests.push(n)) : (t.optionalTestsPassed++, t.passedTests.push(n)), n++
                        })
                    }
                    return !t.isPassphrase && t.optionalTestsPassed < this.configs.minOptionalTestsToPass && (t.strong = !1), t
                }, e
            }) ? n.apply(t, o) : n) || (e.exports = a)
        },
        ykwd: function(e, t, r) {}
    }
]);