(window.webpackJsonp = window.webpackJsonp || []).push([
    [29], {
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
                c = r("SFR8");
            ! function(e) {
                e[e.DeviceCookieThrottleReached = 3009] = "DeviceCookieThrottleReached", e[e.FailedToDecodeJSON = 1002] = "FailedToDecodeJSON", e[e.FailedToVerifyAuthyToken = 3012] = "FailedToVerifyAuthyToken", e[e.IncorrectCaptcha = 1e3] = "IncorrectCaptcha", e[e.InvalidAuthyToken = 3013] = "InvalidAuthyToken", e[e.InvalidPassword = 2005] = "InvalidPassword", e[e.InvalidUsername = 2004] = "InvalidUsername", e[e.MissingAuthyToken = 3011] = "MissingAuthyToken", e[e.MultipleAccountsLinkedToEmail = 3004] = "MultipleAccountsLinkedToEmail", e[e.NoAccountLinkedToEmail = 3005] = "NoAccountLinkedToEmail", e[e.PasswordMissing = 3003] = "PasswordMissing", e[e.SuspendedUser = 3008] = "SuspendedUser", e[e.UnexpectedError = 3e3] = "UnexpectedError", e[e.UserCredentialsIncorrect = 3001] = "UserCredentialsIncorrect", e[e.UserDoesNotExist = 1014] = "UserDoesNotExist", e[e.UserHasBeenDeleted = 3007] = "UserHasBeenDeleted", e[e.UserNeedsPasswordReset = 3006] = "UserNeedsPasswordReset", e[e.UsernameMissing = 3002] = "UsernameMissing"
            }(n || (n = {}));
            var u, p = "https://passport.twitch.tv/login",
                l = "https://passport.internal.us-west-2.twitch.tv/login";
            ! function(e) {
                e[e.BlacklistedEmailDomain = 2002] = "BlacklistedEmailDomain", e[e.BlacklistedIP = 2001] = "BlacklistedIP", e[e.EmailThrottled = 2013] = "EmailThrottled", e[e.FailedToDecodeJSON = 1002] = "FailedToDecodeJSON", e[e.IPThrottled = 2014] = "IPThrottled", e[e.IncorrectCaptcha = 1e3] = "IncorrectCaptcha", e[e.InvalidBirthday = 2003] = "InvalidBirthday", e[e.InvalidPassword = 2005] = "InvalidPassword", e[e.InvalidUsername = 2004] = "InvalidUsername", e[e.MissingFields = 2006] = "MissingFields", e[e.MultiAccountDisabled = 2015] = "MultiAccountDisabled", e[e.PasswordMissing = 3003] = "PasswordMissing", e[e.TooManyUsersWithEmail = 2007] = "TooManyUsersWithEmail", e[e.UnexpectedIssue = 2e3] = "UnexpectedIssue", e[e.UserNameMissing = 3002] = "UserNameMissing", e[e.UserUnder13 = 2011] = "UserUnder13", e[e.UsernameExists = 2008] = "UsernameExists"
            }(u || (u = {}));
            var d, h = "https://passport.twitch.tv/register";
            ! function(e) {
                e[e.FailedToDecodeJSON = 1002] = "FailedToDecodeJSON", e[e.FailedToVerifyAuthyToken = 3012] = "FailedToVerifyAuthyToken", e[e.InvalidAuthyToken = 3013] = "InvalidAuthyToken", e[e.MissingAuthyToken = 3011] = "MissingAuthyToken", e[e.NoConnectedTwitchUser = 5004] = "NoConnectedTwitchUser", e[e.SuspendedUser = 3008] = "SuspendedUser", e[e.UnableToVerifyIdentity = 5003] = "UnableToVerifyIdentity", e[e.UnexpectedError = 3e3] = "UnexpectedError"
            }(d || (d = {}));
            var g, m = "https://passport.twitch.tv/facebook/login";
            ! function(e) {
                e[e.BlacklistedIP = 2001] = "BlacklistedIP", e[e.EmailThrottled = 2013] = "EmailThrottled", e[e.FacebookAccountAlreadyLinked = 5006] = "FacebookAccountAlreadyLinked", e[e.FailedToDecodeJSON = 1002] = "FailedToDecodeJSON", e[e.IPThrottled = 2014] = "IPThrottled", e[e.InvalidPassword = 2005] = "InvalidPassword", e[e.InvalidUsername = 2004] = "InvalidUsername", e[e.TooManyUsers = 2017] = "TooManyUsers", e[e.UnableToVerifyIdentity = 5003] = "UnableToVerifyIdentity", e[e.UnexpectedFacebookIssue = 5001] = "UnexpectedFacebookIssue", e[e.UnexpectedSignupIssue = 2e3] = "UnexpectedSignupIssue", e[e.UsernameExists = 2008] = "UsernameExists"
            }(g || (g = {}));
            var f, b = "https://passport.twitch.tv/facebook/register";
            ! function(e) {
                e[e.DeviceCookieThrottleReached = 3009] = "DeviceCookieThrottleReached", e[e.FacebookAccountAlreadyLinked = 5006] = "FacebookAccountAlreadyLinked", e[e.FailedToDecodeJSON = 1002] = "FailedToDecodeJSON", e[e.FailedToVerifyAuthyToken = 3012] = "FailedToVerifyAuthyToken", e[e.IncorrectCaptcha = 1e3] = "IncorrectCaptcha", e[e.InvalidAuthyToken = 3013] = "InvalidAuthyToken", e[e.InvalidPassword = 2005] = "InvalidPassword", e[e.InvalidUsername = 2004] = "InvalidUsername", e[e.MissingAuthyToken = 3011] = "MissingAuthyToken", e[e.MultipleAccountsLinkedToEmail = 3004] = "MultipleAccountsLinkedToEmail", e[e.NoAccountLinkedToEmail = 3005] = "NoAccountLinkedToEmail", e[e.PasswordMissing = 3003] = "PasswordMissing", e[e.SuspendedUser = 3008] = "SuspendedUser", e[e.UnableToConnect = 5005] = "UnableToConnect", e[e.UnexpectedError = 3e3] = "UnexpectedError", e[e.UnexpectedFacebookIssue = 5001] = "UnexpectedFacebookIssue", e[e.UserCredentialsIncorrect = 3001] = "UserCredentialsIncorrect", e[e.UserDoesNotExist = 1014] = "UserDoesNotExist", e[e.UserHasBeenDeleted = 3007] = "UserHasBeenDeleted", e[e.UserNeedsPasswordReset = 3006] = "UserNeedsPasswordReset", e[e.UsernameMissing = 3002] = "UsernameMissing"
            }(f || (f = {}));
            var S = "https://passport.twitch.tv/facebook/connect";
            var v = r("ZqP/"),
                k = r("Ue10"),
                y = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(k.Xa, {
                            display: k.X.Flex,
                            alignItems: k.f.Center,
                            justifyContent: k.Wa.Center
                        }, a.createElement(k.Xa, {
                            margin: {
                                right: .5
                            },
                            display: k.X.InlineFlex
                        }, a.createElement(k.sb, {
                            asset: k.tb.LogoGlitch,
                            width: 40,
                            height: 40,
                            type: k.ub.Brand
                        })), a.createElement(k.W, {
                            fontSize: k.Ca.Size4,
                            bold: !0
                        }, this.message))
                    }, Object.defineProperty(t.prototype, "message", {
                        get: function() {
                            switch (this.props.currentStep) {
                                case v.a.LoginCaptcha:
                                case v.a.StartLogin:
                                case v.a.FacebookLogin:
                                    return Object(s.d)("Log in to Twitch", "AuthFormHeader");
                                case v.a.FacebookSignup:
                                    return Object(s.d)("Sign up with Facebook", "AuthFormHeader");
                                case v.a.FacebookConnect:
                                case v.a.FacebookConnectCaptcha:
                                    return Object(s.d)("Connect your Facebook Account", "AuthFormHeader");
                                case v.a.StartSignup:
                                    return Object(s.d)("Join Twitch today", "AuthFormHeader");
                                case v.a.FacebookLoginTwoFactor:
                                    return Object(s.d)("Welcome back!", "AuthFormHeader");
                                case v.a.LoginTwoFactor:
                                case v.a.FacebookConnectTwoFactor:
                                    var e = void 0;
                                    if (e = this.props.currentStep === v.a.FacebookConnectTwoFactor ? this.props.fbConnectUsername : this.props.loginUsername) return Object(s.d)("Welcome back, {name}!", {
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
                F = r("imBb"),
                E = (r("VcSt"), r("/MKj")),
                w = r("kRBY"),
                C = r("TSYQ"),
                T = r("tKDy"),
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            widgetId: null
                        }, t.onChange = function(e) {
                            Object(T.j)({
                                screen: t.props.screen,
                                target: T.g.Captcha,
                                action: T.a.Complete
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
                        var e = C({
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
            var M = Object(E.connect)(function(e) {
                    return {
                        languageCode: Object(w.b)(e)
                    }
                })(O),
                j = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            Object(T.j)({
                                screen: t.props.screen,
                                target: t.props.target,
                                action: T.a.Click
                            }), t.props.onClick && t.props.onClick(e)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(k.z, o.__assign({}, this.props, {
                            onClick: this.onClick
                        }))
                    }, t
                }(a.Component),
                I = (r("pKR5"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onEnter = function() {
                            t.props.disableContinueButton || (Object(T.j)({
                                screen: T.f.Captcha,
                                target: T.g.Submit,
                                action: T.a.Enter
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
                        F.bindGlobal("enter", this.onEnter), Object(T.i)(T.f.Captcha)
                    }, t.prototype.componentWillUnmount = function() {
                        F.unbind("enter")
                    }, t.prototype.render = function() {
                        return a.createElement(k.Xa, null, a.createElement(k.W, {
                            type: k.Vb.Span,
                            bold: !0
                        }, Object(s.d)("We need to make sure you're not a robot!", "CaptchaForm")), " ", a.createElement(k.W, {
                            type: k.Vb.Span
                        }, Object(s.d)("Please complete the reCAPTCHA below.", "CaptchaForm")), a.createElement(k.Xa, {
                            margin: 2,
                            display: k.X.Flex,
                            justifyContent: k.Wa.Center,
                            className: "captcha-form__captcha"
                        }, a.createElement(M, {
                            screen: T.f.Captcha,
                            refDelegate: this.onCaptchaRefDelegate,
                            onChange: this.props.onCaptchaChanged
                        })), a.createElement(j, {
                            screen: T.f.Captcha,
                            target: T.g.Submit,
                            fullWidth: !0,
                            onClick: this.continue,
                            disabled: this.props.isLoading || this.props.disableContinueButton,
                            state: this.props.isLoading ? k.E.Loading : k.E.Default
                        }, Object(s.d)("Continue", "CaptchaForm")))
                    }, t
                }(a.PureComponent)),
                P = r("CojT"),
                L = r.n(P),
                _ = (r("sC5l"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onFacebookLoginClicked = function() {
                            Object(T.j)({
                                screen: t.props.screen,
                                target: T.g.FacebookFooter,
                                action: T.a.Click
                            })
                        }, t.handleCallback = function(e) {
                            e.id && e.accessToken && t.props.onFacebookConnected(o.__assign({}, e))
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(k.Xa, {
                            display: k.X.Flex,
                            flexDirection: k.Aa.Column,
                            alignItems: k.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(k.Xa, {
                            fullWidth: !0,
                            display: k.X.Flex,
                            alignItems: k.f.Center,
                            flexDirection: k.Aa.Row,
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(k.Eb, {
                            borderBottom: !0,
                            flexGrow: 1,
                            margin: {
                                right: .5
                            }
                        }), a.createElement(k.W, {
                            color: k.O.Alt2
                        }, Object(s.d)("or", "FacebookConnectFooter")), a.createElement(k.Eb, {
                            borderBottom: !0,
                            flexGrow: 1,
                            margin: {
                                left: .5
                            }
                        })), a.createElement(k.Eb, {
                            color: k.O.Overlay,
                            fontSize: k.Ca.Size6,
                            "data-a-target": "facebook-button-div"
                        }, a.createElement(L.a, {
                            containerStyle: {
                                display: "block"
                            },
                            cssClass: "facebook-connect-button",
                            textButton: Object(s.d)("Connect with Facebook", "FacebookConnectFooter"),
                            scope: "email,user_friends",
                            appId: "161273083968709",
                            callback: this.handleCallback,
                            icon: a.createElement(k.sb, {
                                width: 30,
                                height: 30,
                                type: k.ub.Inherit,
                                asset: k.tb.Facebook
                            }),
                            onClick: this.onFacebookLoginClicked,
                            isDisabled: this.props.disableConnectButton,
                            language: this.props.facebookLocale
                        })))
                    }, t
                }(a.PureComponent));
            var x, A = Object(E.connect)(function(e) {
                    return {
                        facebookLocale: Object(w.d)(e).replace("-", "_")
                    }
                })(_),
                D = r("fvjX"),
                V = r("ZIMp"),
                U = (r("QRgD"), function(e) {
                    return a.createElement(k.Eb, {
                        className: "facebook-info-card",
                        display: k.X.Flex,
                        flexDirection: k.Aa.Row,
                        borderRadius: k.x.Medium,
                        elevation: 1,
                        border: !0
                    }, a.createElement(k.Xa, {
                        className: "facebook-info-card__icon",
                        display: k.X.Flex
                    }, a.createElement(k.sb, {
                        asset: k.tb.Facebook,
                        type: k.ub.Inherit,
                        height: 50,
                        width: 50
                    })), a.createElement(k.Xa, {
                        display: k.X.Flex,
                        flexDirection: k.Aa.Column,
                        justifyContent: k.Wa.Center,
                        overflow: k.cb.Hidden,
                        padding: {
                            right: 1
                        }
                    }, a.createElement(k.W, {
                        type: k.Vb.Strong,
                        color: k.O.Base,
                        fontSize: k.Ca.Size6,
                        ellipsis: !0
                    }, e.facebookName), a.createElement(k.W, {
                        type: k.Vb.Span,
                        color: k.O.Alt2,
                        fontSize: k.Ca.Size7,
                        ellipsis: !0
                    }, Object(s.d)("On Facebook", "FacebookInfoCard"))))
                }),
                R = r("FsIG"),
                B = (r("ykwd"), function(e) {
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
                        if (t ? e = a.createElement(k.Ga, {
                                hint: Object(R.b)(this.props.hintMessage)
                            }) : r && (e = a.createElement(k.Da, {
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
                            }, a.createElement(k.i, {
                                type: k.n.FadeIn,
                                duration: k.k.Long,
                                delay: k.j.Short,
                                enabled: !!n
                            }, a.createElement(k.Xa, {
                                refDelegate: this.setMessageContainerRef,
                                padding: {
                                    top: .5
                                }
                            }, e)))
                        }
                        return a.createElement(k.Xa, null, a.createElement(k.Xa, {
                            margin: {
                                bottom: .5
                            },
                            display: k.X.Flex,
                            alignItems: k.f.Center
                        }, a.createElement(k.Eb, {
                            flexGrow: 1
                        }, a.createElement(k.Ha, {
                            id: Object(R.b)(this.props.label),
                            label: Object(R.b)(this.props.label)
                        })), this.props.validationComponent), this.props.children, e)
                    }, t
                }(a.Component)),
                N = (r("T1dR"), function(e) {
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
                        return a.createElement(k.Ra, o.__assign({}, this.props, {
                            onFocus: this.onFocus,
                            onBlur: this.onBlur
                        }))
                    }, t.prototype.componentWillUnmount = function() {
                        this.existingFocus && this.trackAuthInteraction({
                            isFocusing: !1
                        })
                    }, t.prototype.trackAuthInteraction = function(e) {
                        var t = e.isFocusing;
                        Object(T.j)({
                            screen: this.props.screen,
                            target: this.props.target,
                            action: t ? T.a.Focus : T.a.Blur
                        })
                    }, t
                }(a.Component)),
                X = function(e) {
                    return e.options.shouldShowLoading ? a.createElement(k.Za, {
                        size: k.Cb.Small
                    }) : e.options.shouldShowNone ? null : e.options.shouldShowError ? a.createElement(k.sb, {
                        asset: k.tb.NotificationError,
                        type: k.ub.Alert,
                        width: 18,
                        height: 18
                    }) : e.options.shouldShowValid ? a.createElement(k.sb, {
                        asset: k.tb.NotificationSuccess,
                        type: k.ub.Success,
                        width: 18,
                        height: 18
                    }) : null
                },
                W = r("GxR5"),
                q = (r("lP32"), function(e) {
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
                            Object(T.j)({
                                screen: t.props.screen,
                                target: T.g.TroubleLoggingIn,
                                action: T.a.Click
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.isCapsLockOn && this.state.isFocused;
                        return a.createElement(k.Xa, {
                            className: "login-password-input"
                        }, a.createElement(B, {
                            label: Object(s.d)("Password", "LoginPasswordInput"),
                            validationComponent: this.renderValidIndicator(),
                            error: !!this.props.error,
                            hint: !1
                        }, a.createElement(k.Xa, {
                            position: k.jb.Relative
                        }, a.createElement(N, o.__assign({
                            autoComplete: "current-password",
                            screen: this.props.screen,
                            target: T.g.Password,
                            type: k.Ta.Password,
                            onChange: this.onPasswordInputChanged,
                            onBlur: this.onPasswordInputBlur,
                            onFocus: this.onPasswordInputFocus,
                            value: Object(R.b)(this.props.password),
                            error: this.props.error
                        }, Object(k.jc)(this.props))), a.createElement(k.Eb, {
                            color: k.O.OverlayAlt,
                            padding: {
                                right: 1
                            },
                            position: k.jb.Absolute,
                            display: k.X.Flex,
                            alignItems: k.f.Center,
                            attachRight: !0,
                            attachTop: !0,
                            attachBottom: !0
                        }, e && a.createElement(k.sb, {
                            asset: k.tb.CapsLock,
                            type: k.ub.Inherit
                        })))), a.createElement(k.Xa, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(k.U, {
                            to: Object(W.e)(),
                            onClick: this.onPasswordResetClicked,
                            targetBlank: !0
                        }, a.createElement(k.W, {
                            fontSize: k.Ca.Size7
                        }, Object(s.d)("Trouble logging in?", "LoginPasswordInput")))))
                    }, t.prototype.renderValidIndicator = function() {
                        var e = {
                            shouldShowNone: void 0 === this.props.error,
                            shouldShowError: this.props.error
                        };
                        return a.createElement(X, {
                            options: e
                        })
                    }, t
                }(a.Component)),
                Y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onUsernameInputChanged = function(e) {
                            var r = e.currentTarget.value;
                            t.props.onChange(r)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(B, {
                            label: Object(s.d)("Username", "LoginForm"),
                            validationComponent: this.renderValidIndicator(),
                            error: !!this.props.error,
                            hint: !1
                        }, a.createElement(N, o.__assign({
                            autoComplete: "username",
                            screen: this.props.screen,
                            target: T.g.Username,
                            type: k.Ta.Text,
                            onChange: this.onUsernameInputChanged,
                            value: Object(R.b)(this.props.username),
                            error: this.props.error,
                            refDelegate: this.props.refDelegate,
                            autoFocus: !0
                        }, Object(k.jc)(this.props))))
                    }, t.prototype.renderValidIndicator = function() {
                        var e = {
                            shouldShowNone: void 0 === this.props.error,
                            shouldShowError: this.props.error
                        };
                        return a.createElement(X, {
                            options: e
                        })
                    }, t
                }(a.Component);
            ! function(e) {
                e.Valid = "Valid", e.Invalid = "Invalid"
            }(x || (x = {}));
            var z, H = function(e) {
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
                    return a.createElement(B, {
                        error: this.isInvalid,
                        label: Object(s.d)("Username", "SignupUsernameFormGroup"),
                        validationComponent: this.renderValidIndicator(),
                        errorMessage: this.props.errorMessage,
                        hintMessage: Object(s.d)("This is the name people will know you by on Twitch. You can always change it later.", "SignupUsernameFormGroup"),
                        hint: this.state.isFocused,
                        skipGrowAnimation: this.state.skipGrowAnimation
                    }, a.createElement(N, o.__assign({
                        screen: this.props.screen,
                        target: T.g.Username,
                        type: k.Ta.Text,
                        onChange: this.onChange,
                        value: Object(R.b)(this.props.value),
                        error: this.isInvalid,
                        onFocus: this.onUsernameFocus,
                        onBlur: this.onUsernameBlur,
                        autoFocus: this.props.autoFocus,
                        refDelegate: this.props.refDelegate
                    }, Object(k.jc)(this.props))))
                }, t.prototype.renderValidIndicator = function() {
                    var e = {
                        shouldShowLoading: this.state.isTyping,
                        shouldShowNone: !this.props.validationState,
                        shouldShowError: this.props.validationState === x.Invalid,
                        shouldShowValid: this.props.validationState === x.Valid
                    };
                    return a.createElement(X, {
                        options: e
                    })
                }, Object.defineProperty(t.prototype, "isInvalid", {
                    get: function() {
                        return this.props.validationState === x.Invalid
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.Component);
            ! function(e) {
                e.None = "None", e.Passed = "Passed", e.Proved = " Proved"
            }(z || (z = {}));
            var G = r("1txG"),
                J = new RegExp(/^[A-Za-z0-9][A-Za-z0-9_]*$/),
                K = 4,
                Z = 25;

            function Q(e) {
                return $(e) && ee(e)
            }

            function $(e) {
                return e.length >= K && e.length <= Z
            }

            function ee(e) {
                return J.test(e)
            }

            function te(e) {
                return o.__awaiter(this, void 0, Promise, function() {
                    var t;
                    return o.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (!e) return [2, !1];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, s.p.apollo.client.query({
                                    query: G,
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

            function re(e, t) {
                return e && $(e) ? ee(e) ? t ? Object(s.d)("This username is unavailable.", "SignupUsernameFormGroup") : "" : Object(s.d)("Usernames must only contain alphanumeric characters.", "SignupUsernameFormGroup") : Object(s.d)("Usernames must be between 4 and 25 characters.", "SignupUsernameFormGroup")
            }

            function ne(e, t) {
                return !t.usernameError && !t.passwordError && (!!e.username && !!e.password)
            }

            function oe(e) {
                return !!e.id && !!e.accessToken
            }

            function ae(e, t) {
                return !t.passwordError && !t.usernameError && (!!e.username && (!!e.password && (e.usernameValidationState !== x.Invalid && (!!Q(e.username) && !e.isPasswordInvalid))))
            }
            var se = r("2Ygb");

            function ie() {
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
                        }, r.displayName = Object(se.a)(r.name, e), r
                    }(a.Component)
                }
            }
            var ce, ue = r("GnwI"),
                pe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onSubmit = function(e) {
                            e.preventDefault(), t.canLogin && (Object(T.j)({
                                screen: T.f.FacebookConnect,
                                target: T.g.Connect,
                                action: T.a.Enter
                            }), t.login())
                        }, t.login = function() {
                            t.canLogin && t.props.onConnectRequested()
                        }, t.goToFacebookSignupForm = function() {
                            t.props.onFacebookFormTypeChanged(V.AuthFormStep.FacebookSignup)
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
                        return a.createElement(k.Eb, {
                            className: "facebook-connect-form",
                            background: k.r.Base,
                            flexDirection: k.Aa.Column,
                            display: k.X.Flex,
                            fullWidth: !0
                        }, this.renderHeader(), this.renderCenterText(), a.createElement("form", {
                            noValidate: !0,
                            onSubmit: this.onSubmit
                        }, this.renderUsername(), this.renderPassword(), this.renderCTA()), this.renderFooterLink())
                    }, t.prototype.renderHeader = function() {
                        return a.createElement(k.Xa, {
                            margin: {
                                top: 1
                            },
                            display: k.X.Flex,
                            justifyContent: k.Wa.Center
                        }, a.createElement(U, {
                            facebookName: this.props.facebookName
                        }))
                    }, t.prototype.renderCenterText = function() {
                        return a.createElement(k.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(k.W, {
                            fontSize: k.Ca.Size6
                        }, Object(s.d)("Please log into the Twitch account you want to connect with.", "FacebookConnectForm")))
                    }, t.prototype.renderUsername = function() {
                        return a.createElement(k.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(Y, {
                            screen: T.f.FacebookConnect,
                            username: this.props.values.username,
                            error: this.props.serverErrors.usernameError,
                            onChange: this.onUsernameInputChanged,
                            refDelegate: this.props.refDelegate
                        }))
                    }, t.prototype.renderPassword = function() {
                        return a.createElement(k.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(q, {
                            screen: T.f.FacebookConnect,
                            password: this.props.values.password,
                            error: this.props.serverErrors.passwordError,
                            onChange: this.onPasswordInputChanged,
                            isCapsLockOn: this.props.isCapsLockOn
                        }))
                    }, t.prototype.renderCTA = function() {
                        return a.createElement(k.Xa, {
                            "data-test-selector": "facebook-signup-form__cta",
                            margin: {
                                top: 2
                            }
                        }, a.createElement(k.z, {
                            disabled: this.props.isLoading || !ne(this.props.values, this.props.serverErrors),
                            state: this.props.isLoading ? k.E.Loading : k.E.Default,
                            fullWidth: !0
                        }, Object(s.d)("Connect My Account", "FacebookConnectForm")))
                    }, t.prototype.renderFooterLink = function() {
                        return a.createElement(k.Xa, {
                            "data-test-selector": "facebook-signup-form__footer",
                            textAlign: k.Rb.Center,
                            margin: {
                                top: 2
                            }
                        }, a.createElement(j, {
                            screen: T.f.FacebookConnect,
                            target: T.g.CreateAccount,
                            type: k.F.Text,
                            onClick: this.goToFacebookSignupForm
                        }, Object(s.d)("Create a new Twitch account instead", "FacebookConnectForm")))
                    }, Object.defineProperty(t.prototype, "canLogin", {
                        get: function() {
                            return ne(this.props.values, this.props.serverErrors)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                le = Object(D.compose)(Object(ue.b)("FacebookConnectForm", {
                    autoReportInteractive: !0
                }), ie())(pe);
            r("JT9d");
            ! function(e) {
                e.Invalid = "invalid", e.Empty = "empty", e.Weak = "weak", e.Strong = "strong"
            }(ce || (ce = {}));
            var de = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            "password-indicator": !0,
                            "password-indicator--invalid": this.props.indicatorStrength === ce.Invalid,
                            "password-indicator--empty": this.props.indicatorStrength === ce.Empty,
                            "password-indicator--weak": this.props.indicatorStrength === ce.Weak,
                            "password-indicator--strong": this.props.indicatorStrength === ce.Strong
                        };
                        return a.createElement(k.Eb, {
                            className: C(e),
                            display: k.X.Flex,
                            alignItems: k.f.Center
                        }, this.renderIcon(), this.renderDescription(), a.createElement(k.Xa, {
                            className: "password-indicator__progress-bar"
                        }, a.createElement(k.mb, {
                            inherit: !0,
                            value: this.props.indicatorProgress,
                            mask: !0,
                            size: k.ob.Small
                        })))
                    }, t.prototype.renderIcon = function() {
                        var e;
                        switch (this.props.indicatorStrength) {
                            case ce.Invalid:
                                e = a.createElement(k.sb, {
                                    asset: k.tb.NotificationError,
                                    type: k.ub.Alert
                                });
                                break;
                            case ce.Weak:
                                e = a.createElement(k.sb, {
                                    asset: k.tb.NotificationWarning,
                                    type: k.ub.Inherit
                                });
                                break;
                            case ce.Strong:
                                e = a.createElement(k.sb, {
                                    asset: k.tb.NotificationSuccess,
                                    type: k.ub.Success
                                });
                                break;
                            case ce.Empty:
                                e = this.props.error ? a.createElement(k.sb, {
                                    asset: k.tb.NotificationError,
                                    type: k.ub.Alert
                                }) : null;
                                break;
                            default:
                                e = null
                        }
                        return e ? a.createElement(k.Xa, {
                            margin: {
                                right: .5
                            },
                            display: k.X.InlineFlex
                        }, e) : null
                    }, t.prototype.renderDescription = function() {
                        var e;
                        switch (this.props.indicatorStrength) {
                            case ce.Weak:
                                e = Object(s.d)("Weak", "PasswordIndicator");
                                break;
                            case ce.Strong:
                                e = Object(s.d)("Strong", "PasswordIndicator");
                                break;
                            default:
                                e = null
                        }
                        return e ? a.createElement(k.Xa, {
                            margin: {
                                right: 1
                            },
                            display: k.X.InlineFlex
                        }, a.createElement(k.W, {
                            color: k.O.Inherit,
                            bold: !0
                        }, e)) : null
                    }, t
                }(a.Component),
                he = r("yfE0"),
                ge = 8,
                me = 71;

            function fe(e) {
                return e.length >= ge && e.length <= me
            }

            function be(e) {
                return e.length < ge ? Object(s.d)("Passwords must be at least 8 characters long.", "PasswordValidator") : e.length > me ? Object(s.d)("Passwords must be shorter than 72 characters.", "PasswordValidator") : void 0
            }
            var Se = (he.config({
                    maxLength: me,
                    minLength: ge,
                    minPhraseLength: 20,
                    allowPassphrases: !0
                }), function(e) {
                    if (!e || !e.length) return {
                        strength: ce.Empty,
                        score: 0
                    };
                    if (!fe(e)) return {
                        strength: ce.Invalid,
                        score: 0
                    };
                    var t = he.test(e);
                    if (t.isPassphrase) return {
                        strength: ce.Strong,
                        score: 100
                    };
                    switch (t.optionalTestsPassed) {
                        case 1:
                            return {
                                strength: ce.Weak,
                                score: 25
                            };
                        case 2:
                            return {
                                strength: ce.Weak,
                                score: 50
                            };
                        case 3:
                            return {
                                strength: ce.Strong,
                                score: 75
                            };
                        case 4:
                            return {
                                strength: ce.Strong,
                                score: 100
                            };
                        default:
                            return {
                                strength: ce.Invalid,
                                score: 0
                            }
                    }
                }),
                ve = (r("c8uT"), function(e) {
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
                        return a.createElement(B, {
                            error: !!this.props.error,
                            errorMessage: this.props.errorMessage,
                            hint: this.shouldDisplayPasswordHint(e),
                            hintMessage: Object(s.d)("Strong passwords include a mix of lower case letters, upper case letters, and special characters.", "SignupPasswordFormGroup"),
                            label: Object(s.d)("Password", "SignupPasswordFormGroup"),
                            validationComponent: this.renderPasswordIndicator(e)
                        }, a.createElement(k.Xa, {
                            position: k.jb.Relative,
                            className: "signup-password-container"
                        }, a.createElement(N, o.__assign({
                            autoComplete: "new-password",
                            screen: this.props.screen,
                            target: T.g.Password,
                            type: this.state.isPasswordVisible ? k.Ta.Text : k.Ta.Password,
                            onChange: this.props.onChange,
                            onFocus: this.onPasswordFocus,
                            onBlur: this.onPasswordBlur,
                            value: Object(R.b)(this.props.value),
                            error: this.props.error,
                            refDelegate: this.getInputRef
                        }, Object(k.jc)(this.props))), a.createElement(k.Eb, {
                            position: k.jb.Absolute,
                            display: k.X.Flex,
                            alignItems: k.f.Center,
                            color: k.O.OverlayAlt,
                            attachRight: !0,
                            attachTop: !0,
                            attachBottom: !0
                        }, t && a.createElement(k.sb, {
                            asset: k.tb.CapsLock,
                            type: k.ub.Inherit
                        }), a.createElement(k.A, {
                            icon: this.state.isPasswordVisible ? k.tb.VisibilityHidden : k.tb.GlyphViews,
                            onClick: this.toggleVisibility,
                            type: k.C.Secondary,
                            size: k.B.Small,
                            tabIndex: -1,
                            ariaLabel: Object(s.d)("Toggle password visibility", "SignupPasswordFormGroup")
                        }))))
                    }, t.prototype.renderPasswordIndicator = function(e) {
                        return a.createElement(de, {
                            indicatorProgress: e.score,
                            indicatorStrength: e.strength,
                            error: !!this.props.error
                        })
                    }, t.prototype.shouldDisplayPasswordHint = function(e) {
                        return this.state.isFocused && e.strength !== ce.Strong
                    }, t
                }(a.Component)),
                ke = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onSubmit = function(e) {
                            e.preventDefault(), t.canSignup && Object(T.j)({
                                screen: T.f.FacebookSignup,
                                target: T.g.Signup,
                                action: T.a.Enter
                            }), t.signup()
                        }, t.signup = function() {
                            t.canSignup && t.props.onSignupRequested()
                        }, t.goToFacebookConnectForm = function() {
                            t.props.onFacebookFormTypeChanged(V.AuthFormStep.FacebookConnect)
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
                                            return [4, te(e = this.props.values.username)];
                                        case 1:
                                            return t = o.sent(), r = re(e, t), n = r ? x.Invalid : x.Valid, this.props.onFacebookSignupFormValuesChanged({
                                                usernameValidationState: n,
                                                usernameErrorMessage: r
                                            }), [2]
                                    }
                                })
                            })
                        }, t.onPasswordInputChanged = function(e) {
                            var r = e.currentTarget.value,
                                n = !fe(r),
                                o = be(r);
                            t.props.onFacebookSignupFormValuesChanged({
                                password: r,
                                isPasswordInvalid: n,
                                passwordErrorMessage: o
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(k.Eb, {
                            className: "facebook-signup-form",
                            background: k.r.Base,
                            flexDirection: k.Aa.Column,
                            display: k.X.Flex,
                            fullWidth: !0
                        }, this.renderHeader(), this.renderCenterText(), a.createElement("form", {
                            noValidate: !0,
                            onSubmit: this.onSubmit
                        }, this.renderUsername(), this.renderPassword(), this.renderCTA()), this.renderFooterLink())
                    }, t.prototype.renderHeader = function() {
                        return a.createElement(k.Xa, {
                            margin: {
                                top: 1
                            },
                            display: k.X.Flex,
                            justifyContent: k.Wa.Center
                        }, a.createElement(U, {
                            facebookName: this.props.facebookName
                        }))
                    }, t.prototype.renderCenterText = function() {
                        return a.createElement(k.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(k.W, {
                            fontSize: k.Ca.Size6
                        }, Object(s.d)("Create a new Twitch username and password to connect with this account. Your Twitch ID will be your future login and public identity across all of Twitch.", "FacebookSignupForm")))
                    }, t.prototype.renderUsername = function() {
                        return a.createElement(k.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(H, {
                            screen: T.f.FacebookSignup,
                            onUsernameChanged: this.onUsernameInputChanged,
                            onValidationRequested: this.onUsernameValidationRequested,
                            value: this.props.values.username,
                            errorMessage: this.props.values.usernameErrorMessage,
                            validationState: this.props.serverErrors.usernameError ? x.Invalid : this.props.values.usernameValidationState,
                            autoFocus: !0,
                            refDelegate: this.props.refDelegate
                        }))
                    }, t.prototype.renderPassword = function() {
                        return a.createElement(k.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(ve, {
                            screen: T.f.FacebookSignup,
                            value: this.props.values.password,
                            onChange: this.onPasswordInputChanged,
                            error: this.props.values.isPasswordInvalid || this.props.serverErrors.passwordError,
                            errorMessage: this.props.values.passwordErrorMessage,
                            isCapsLockOn: this.props.isCapsLockOn
                        }))
                    }, t.prototype.renderCTA = function() {
                        return a.createElement(k.Xa, {
                            "data-test-selector": "facebook-signup-form__cta",
                            margin: {
                                top: 2
                            }
                        }, a.createElement(k.z, {
                            disabled: this.props.isLoading || !ae(this.props.values, this.props.serverErrors),
                            state: this.props.isLoading ? k.E.Loading : k.E.Default,
                            fullWidth: !0
                        }, Object(s.d)("Sign up", "FacebookSignupForm")))
                    }, t.prototype.renderFooterLink = function() {
                        return a.createElement(k.Xa, {
                            "data-test-selector": "facebook-signup-form__footer",
                            textAlign: k.Rb.Center,
                            margin: {
                                top: 2
                            }
                        }, a.createElement(j, {
                            screen: T.f.FacebookSignup,
                            target: T.g.LinkAccount,
                            type: k.F.Text,
                            onClick: this.goToFacebookConnectForm
                        }, Object(s.d)("Link an existing Twitch account instead", "FacebookSignupForm")))
                    }, Object.defineProperty(t.prototype, "canSignup", {
                        get: function() {
                            return ae(this.props.values, this.props.serverErrors)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                ye = Object(D.compose)(Object(ue.b)("FacebookSignupForm", {
                    autoReportInteractive: !0
                }), ie())(ke);

            function Fe(e, t) {
                return !t.usernameError && !t.passwordError && (!!e.username && !!e.password)
            }
            var Ee, we = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onSubmit = function(e) {
                            e.preventDefault(), t.canLogin && (Object(T.j)({
                                screen: T.f.Login,
                                target: T.g.Login,
                                action: T.a.Enter
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
                        Object(T.i)(T.f.Login)
                    }, t.prototype.render = function() {
                        return a.createElement("form", {
                            noValidate: !0,
                            onSubmit: this.onSubmit
                        }, a.createElement(k.Eb, {
                            background: k.r.Base,
                            fullWidth: !0,
                            flexDirection: k.Aa.Column,
                            display: k.X.Flex
                        }, this.renderUsername(), this.renderPassword(), a.createElement(k.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(k.z, {
                            disabled: this.props.isLoading || !Fe(this.props.values, this.props.serverErrors),
                            state: this.props.isLoading ? k.E.Loading : k.E.Default,
                            fullWidth: !0,
                            "data-a-target": "passport-login-button"
                        }, Object(s.d)("Log In", "LoginForm")))))
                    }, t.prototype.renderUsername = function() {
                        return a.createElement(k.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(Y, {
                            screen: T.f.Login,
                            username: this.props.values.username,
                            error: this.props.serverErrors.usernameError,
                            onChange: this.onUsernameInputChanged,
                            refDelegate: this.props.refDelegate,
                            "data-a-target": "login-username-input"
                        }))
                    }, t.prototype.renderPassword = function() {
                        return a.createElement(k.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(q, {
                            screen: T.f.Login,
                            password: this.props.values.password,
                            error: this.props.serverErrors.passwordError,
                            onChange: this.onPasswordInputChanged,
                            "data-a-target": "login-password-input",
                            isCapsLockOn: this.props.isCapsLockOn
                        }))
                    }, Object.defineProperty(t.prototype, "canLogin", {
                        get: function() {
                            return Fe(this.props.values, this.props.serverErrors)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                Ce = Object(D.compose)(Object(ue.b)("LoginForm", {
                    autoReportInteractive: !0
                }), ie())(we),
                Te = (r("4PHc"), function(e) {
                    if (!e.message) return null;
                    var t = void 0 === e.subMessage ? Object(s.d)("Please try again.", "ServerMessage") : e.subMessage;
                    return a.createElement(k.Eb, {
                        className: C({
                            "server-message-success": e.isSuccessMessage,
                            "server-message-alert": !e.isSuccessMessage
                        }),
                        background: k.r.Alt2,
                        borderRadius: k.x.Large,
                        display: k.X.Flex,
                        margin: {
                            top: 2,
                            x: "auto"
                        },
                        padding: {
                            y: 1,
                            left: 1,
                            right: 2
                        },
                        position: k.jb.Relative,
                        fullWidth: !0
                    }, a.createElement(k.Xa, {
                        className: C({
                            "server-message-success__icon": e.isSuccessMessage,
                            "server-message-alert__icon": !e.isSuccessMessage
                        }),
                        alignItems: k.f.Start,
                        display: k.X.Flex
                    }, a.createElement(k.sb, {
                        asset: e.isSuccessMessage ? k.tb.NotificationSuccess : k.tb.NotificationError,
                        height: 30,
                        width: 30
                    })), a.createElement(k.Xa, {
                        display: k.X.Flex,
                        flexDirection: k.Aa.Column,
                        padding: {
                            left: .5
                        }
                    }, a.createElement(k.W, {
                        fontSize: k.Ca.Size6,
                        type: k.Vb.Strong
                    }, e.message), a.createElement(k.Xa, null, a.createElement(k.W, {
                        fontSize: k.Ca.Size6,
                        color: k.O.Alt2
                    }, t))))
                }),
                Oe = r("YVDj"),
                Me = Object.assign({}, Oe, {
                    default: Oe
                });
            ! function(e) {
                e.Day = "D", e.Month = "M", e.Year = "Y"
            }(Ee || (Ee = {}));
            r("qV8A");
            var je = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleMonthChange = function(e) {
                        Object(T.j)({
                            screen: T.f.Signup,
                            target: T.g.DateOfBirthMonth,
                            action: T.a.Click
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
                        var t = Me[e.toLowerCase()];
                        return e && t ? [t.substring(0, 1), t.substring(1, 2), t.substring(2, 3)] : [Ee.Month, Ee.Day, Ee.Year]
                    }(this.props.locale);
                    return a.createElement(k.Xa, {
                        display: k.X.Flex,
                        flexDirection: k.Aa.Row
                    }, this.renderBasedOnDateOrder(e[0]), a.createElement(k.Pa, {
                        margin: {
                            left: 1
                        }
                    }, this.renderBasedOnDateOrder(e[1])), a.createElement(k.Pa, {
                        margin: {
                            left: 1
                        }
                    }, this.renderBasedOnDateOrder(e[2])))
                }, t.prototype.renderBasedOnDateOrder = function(e) {
                    switch (e) {
                        case Ee.Day:
                            return this.renderDayInput();
                        case Ee.Month:
                            return this.renderMonthSelect();
                        case Ee.Year:
                            return this.renderYearInput();
                        default:
                            return null
                    }
                }, t.prototype.renderDayInput = function() {
                    return a.createElement(k.Xa, {
                        className: "birthday-picker__input"
                    }, a.createElement(N, {
                        screen: T.f.Signup,
                        target: T.g.DateOfBirthDay,
                        type: k.Ta.Text,
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
                    return a.createElement(k.Xa, {
                        className: "birthday-picker__input"
                    }, a.createElement(N, {
                        screen: T.f.Signup,
                        target: T.g.DateOfBirthYear,
                        type: k.Ta.Text,
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
                    return a.createElement(k.Xa, {
                        fullWidth: !0
                    }, a.createElement(k.zb, {
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
            var Ie = Object(E.connect)(function(e) {
                    return {
                        locale: Object(w.d)(e)
                    }
                })(je),
                Pe = {
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
                Le = 864e5;

            function _e(e) {
                return !!e && (e.monthInvalid || e.dayInvalid || e.yearInvalid)
            }
            var xe, Ae = function(e) {
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
                    return a.createElement(B, {
                        label: Object(s.d)("Date of Birth", "BirthdayFormGroup"),
                        error: _e(this.props.dateValidation) || this.props.serverError,
                        errorMessage: Object(s.d)("Please enter a valid date.", "BirthdayFormGroup"),
                        validationComponent: this.renderValidIndicator(),
                        hint: !1
                    }, a.createElement(Ie, {
                        date: this.props.date,
                        onChanged: this.onBirthdayPickerDateChanged,
                        onFocusChanged: this.onBirthdayPickerFocusChanged,
                        dateValidation: this.props.dateValidation,
                        isTyping: this.state.isTyping
                    }))
                }, t.prototype.componentWillUnmount = function() {
                    this.inputTimer && clearTimeout(this.inputTimer)
                }, t.prototype.renderValidIndicator = function() {
                    var e = _e(this.props.dateValidation),
                        t = {
                            showShowLoading: this.state.isTyping,
                            shouldShowNone: void 0 === this.props.dateValidation,
                            shouldShowError: e,
                            shouldShowValid: !e
                        };
                    return a.createElement(X, {
                        options: t
                    })
                }, t
            }(a.Component);
            ! function(e) {
                e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
            }(xe || (xe = {}));
            var De = function(e) {
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
                        return a.createElement(B, {
                            error: this.isInvalid,
                            errorMessage: this.props.errorMessage,
                            hint: this.state.isFocused,
                            hintMessage: Object(s.d)("You'll need to verify that you own this email account.", "SignupEmailFormGroup"),
                            label: Object(s.d)("Email", "SignupEmailFormGroup"),
                            validationComponent: this.renderValidIndicator()
                        }, a.createElement(N, {
                            screen: T.f.Signup,
                            target: T.g.Email,
                            type: k.Ta.Email,
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
                            shouldShowError: this.props.validationState === xe.Invalid,
                            shouldShowValid: this.props.validationState === xe.Valid
                        };
                        return a.createElement(X, {
                            options: e
                        })
                    }, Object.defineProperty(t.prototype, "isInvalid", {
                        get: function() {
                            return this.props.validationState === xe.Invalid
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                Ve = r("rACw");

            function Ue(e, t) {
                return !(t.passwordError || t.usernameError || t.birthdayError || t.emailError) && (!!e.username && (!!e.password && (!!e.email && (!!e.birthdayDate && (!!e.birthdayDate.day && (!!e.birthdayDate.month && (!!e.birthdayDate.year && (e.usernameValidationState !== x.Invalid && (!!Q(e.username) && (!e.isPasswordInvalid && (e.emailValidationState === xe.Valid && !(!e.birthdayValidation || _e(e.birthdayValidation)))))))))))))
            }
            var Re, Be = function(e) {
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
                                        o = Pe[e.toString()];
                                    2 === e && function(e) {
                                        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                                    }(r) && (o = 29);
                                    var a = new Date,
                                        s = new Date(r, e - 1, t);
                                    return (!o || t > o) && (n.monthInvalid = t <= 31, n.dayInvalid = !0), r < a.getFullYear() - 150 && (n.yearInvalid = !0), s.getTime() - a.getTime() >= -Le && (n.yearInvalid = !0), n
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
                                            return [4, te(e = this.props.values.username)];
                                        case 1:
                                            return t = o.sent(), r = re(e, t), n = r ? x.Invalid : x.Valid, this.props.onSignupFormValuesChanged({
                                                usernameValidationState: n,
                                                usernameErrorMessage: r
                                            }), [2]
                                    }
                                })
                            })
                        }, t.onPasswordInputChanged = function(e) {
                            var r = e.currentTarget.value,
                                n = be(r),
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
                            var e = t.props.values.email,
                                r = Object(Ve.a)(e),
                                n = r ? xe.Invalid : xe.Valid;
                            t.props.onSignupFormValuesChanged({
                                emailErrorMessage: r,
                                emailValidationState: n
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
                        Object(T.i)(T.f.Signup)
                    }, t.prototype.render = function() {
                        return a.createElement("form", {
                            noValidate: !0,
                            onSubmit: this.onSubmit
                        }, a.createElement(k.Eb, {
                            background: k.r.Base,
                            fullWidth: !0,
                            flexDirection: k.Aa.Column,
                            display: k.X.Flex
                        }, this.renderUsername(), this.renderPassword(), this.renderDateOfBirth(), this.renderEmail(), this.renderSignup(), this.renderCaptcha()))
                    }, t.prototype.renderUsername = function() {
                        return a.createElement(k.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(H, {
                            screen: T.f.Signup,
                            onUsernameChanged: this.onUsernameInputChanged,
                            onValidationRequested: this.onUsernameValidationRequested,
                            value: this.props.values.username,
                            errorMessage: this.props.values.usernameErrorMessage,
                            validationState: this.props.serverErrors.usernameError ? x.Invalid : this.props.values.usernameValidationState,
                            autoFocus: !0,
                            refDelegate: this.props.refDelegate,
                            "data-a-target": "signup-username-input"
                        }))
                    }, t.prototype.renderPassword = function() {
                        return a.createElement(k.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(ve, {
                            screen: T.f.Signup,
                            value: this.props.values.password,
                            onChange: this.onPasswordInputChanged,
                            error: this.props.values.isPasswordInvalid || !!this.props.serverErrors.passwordError,
                            errorMessage: this.props.values.passwordErrorMessage,
                            "data-a-target": "signup-password-input",
                            isCapsLockOn: this.props.isCapsLockOn
                        }))
                    }, t.prototype.renderDateOfBirth = function() {
                        return a.createElement(k.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(Ae, {
                            date: this.props.values.birthdayDate,
                            onBirthdayDateChange: this.onBirthdayDateChanged,
                            onValidationRequested: this.onBirthdayDateValidationChange,
                            dateValidation: this.props.values.birthdayValidation,
                            serverError: !!this.props.serverErrors.birthdayError
                        }))
                    }, t.prototype.renderEmail = function() {
                        return a.createElement(k.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(De, {
                            onEmailChanged: this.onEmailInputChanged,
                            onValidationRequested: this.onEmailValidationRequested,
                            value: this.props.values.email,
                            validationState: this.props.serverErrors.emailError ? xe.Invalid : this.props.values.emailValidationState,
                            errorMessage: this.props.values.emailErrorMessage
                        }))
                    }, t.prototype.renderCaptcha = function() {
                        return a.createElement(M, {
                            screen: T.f.Signup,
                            refDelegate: this.onCaptchaRefDelegate,
                            onChange: this.onCaptchaInputChanged,
                            invisible: !0
                        })
                    }, t.prototype.renderSignup = function() {
                        return a.createElement(k.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(k.Xa, {
                            margin: {
                                bottom: 2
                            },
                            textAlign: k.Rb.Center
                        }, a.createElement(k.W, {
                            fontSize: k.Ca.Size7,
                            color: k.O.Alt2
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
                        }, "SignupForm"))), a.createElement(k.z, {
                            disabled: this.props.isLoading || !Ue(this.props.values, this.props.serverErrors),
                            state: this.props.isLoading ? k.E.Loading : k.E.Default,
                            fullWidth: !0,
                            "data-a-target": "passport-signup-button"
                        }, Object(s.d)("Sign Up", "SignupForm")))
                    }, Object.defineProperty(t.prototype, "canSignup", {
                        get: function() {
                            return Ue(this.props.values, this.props.serverErrors)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.submit = function() {
                        return o.__awaiter(this, void 0, void 0, function() {
                            return o.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.canSignup ? (Object(T.j)({
                                            screen: T.f.Signup,
                                            target: T.g.Signup,
                                            action: T.a.Enter
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
                Ne = Object(D.compose)(Object(ue.b)("SignupForm", {
                    autoReportInteractive: !0
                }), ie())(Be);
            ! function(e) {
                e.None = "None", e.Loading = "Loading", e.Success = "Success"
            }(Re || (Re = {}));
            var Xe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isSMSSuccessVisible: !1
                        }, t.onEnter = function() {
                            t.props.values.token && (Object(T.j)({
                                screen: T.f.TwoFactor,
                                target: T.g.Submit,
                                action: T.a.Enter
                            }), t.submitToken())
                        }, t.onRememberMeToggled = function(e) {
                            Object(T.j)({
                                screen: T.f.TwoFactor,
                                target: T.g.RememberMe,
                                action: T.a.Click
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
                        F.bindGlobal("enter", this.onEnter), Object(T.i)(T.f.TwoFactor)
                    }, t.prototype.componentWillUnmount = function() {
                        F.unbind("enter"), this.smsTimerHandle && clearTimeout(this.smsTimerHandle)
                    }, t.prototype.componentDidUpdate = function(e) {
                        var t = this;
                        e.smsRequestState === Re.Loading && this.props.smsRequestState === Re.Success && (this.smsTimerHandle && clearTimeout(this.smsTimerHandle), this.setState({
                            isSMSSuccessVisible: !0
                        }), this.smsTimerHandle = setTimeout(function() {
                            t.setState({
                                isSMSSuccessVisible: !1
                            })
                        }, 1e3))
                    }, t.prototype.render = function() {
                        return a.createElement(k.Xa, null, a.createElement(k.W, {
                            type: k.Vb.Span,
                            bold: !0
                        }, Object(s.d)("Enter the code sent to you by text message or found in the Authy app.", "TwoFactorForm")), " ", a.createElement(k.W, {
                            type: k.Vb.Span
                        }, Object(s.d)("If you've lost your phone, please contact <x:ts>Twitch Support</x:ts>.", {
                            "x:ts": function(e) {
                                return a.createElement("a", {
                                    target: "_blank",
                                    href: "https://help.twitch.tv/customer/en/portal/articles/2186271"
                                }, e)
                            }
                        }, "TwoFactorForm")), a.createElement(k.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(k.Ea, {
                            label: Object(s.d)("Token", "TwoFactorForm"),
                            orientation: k.Fa.Vertical
                        }, a.createElement(N, {
                            screen: T.f.TwoFactor,
                            target: T.g.Token,
                            type: k.Ta.Text,
                            onChange: this.onTokenInputChanged,
                            value: Object(R.b)(this.props.values.token),
                            refDelegate: this.props.refDelegate,
                            autoFocus: !0
                        }), a.createElement(k.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(k.N, {
                            checked: !!this.props.values.rememberMe,
                            label: Object(s.d)("Remember this computer for 30 days", "TwoFactorForm"),
                            onChange: this.onRememberMeToggled
                        })))), a.createElement(k.Xa, {
                            display: k.X.Flex,
                            justifyContent: k.Wa.Center,
                            margin: {
                                top: 2
                            }
                        }, a.createElement(j, {
                            screen: T.f.TwoFactor,
                            target: T.g.Submit,
                            onClick: this.submitToken,
                            disabled: this.props.isLoading || !this.props.values.token,
                            state: this.props.isLoading ? k.E.Loading : k.E.Default
                        }, Object(s.d)("Submit", "TwoFactorForm")), a.createElement(k.Xa, {
                            margin: {
                                left: 2
                            }
                        }, a.createElement(j, {
                            screen: T.f.TwoFactor,
                            target: T.g.Sms,
                            type: k.F.Hollow,
                            onClick: this.props.onSMSRequested,
                            disabled: this.props.smsRequestState === Re.Loading,
                            state: this.smsButtonState
                        }, Object(s.d)("Request SMS", "TwoFactorForm")))))
                    }, Object.defineProperty(t.prototype, "smsButtonState", {
                        get: function() {
                            switch (this.props.smsRequestState) {
                                case Re.Loading:
                                    return k.E.Loading;
                                case Re.Success:
                                    return this.state.isSMSSuccessVisible ? k.E.Success : k.E.Default;
                                case Re.None:
                                default:
                                    return k.E.Default
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                We = ie()(Xe);

            function qe(e, t) {
                return t ? {
                    type: z.Proved,
                    proof: t
                } : e.type === z.Proved ? e : {
                    type: z.None
                }
            }
            var Ye = r("ugtu");

            function ze(e, t, r, n, a, i, c) {
                return o.__assign({}, function(e, t, r, n) {
                    switch (n) {
                        case f.UsernameMissing:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("The username field is required.", "FacebookConnectError")
                                },
                                facebookConnectFormServerErrors: {
                                    usernameError: !0
                                },
                                currentStep: V.AuthFormStep.FacebookConnect
                            };
                        case f.PasswordMissing:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("The password field is required.", "FacebookConnectError")
                                },
                                facebookConnectFormServerErrors: {
                                    passwordError: !0
                                },
                                currentStep: V.AuthFormStep.FacebookConnect
                            };
                        case f.MultipleAccountsLinkedToEmail:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This email is linked to multiple accounts. Please log in with a username instead.", "FacebookConnectError"),
                                    subMessage: Object(Ye.e)()
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: V.AuthFormStep.FacebookConnect
                            };
                        case f.NoAccountLinkedToEmail:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This email is not linked to a Twitch account. Please log in with a username instead.", "FacebookConnectError"),
                                    subMessage: Object(Ye.e)()
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: V.AuthFormStep.FacebookConnect
                            };
                        case f.IncorrectCaptcha:
                            return e === V.AuthFormStep.FacebookConnectCaptcha ? {
                                serverMessage: {
                                    message: Object(s.d)("That reCAPTCHA did not work.", "FacebookConnectError")
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: V.AuthFormStep.FacebookConnectCaptcha
                            } : {
                                serverMessage: {},
                                facebookConnectFormServerErrors: {},
                                currentStep: V.AuthFormStep.FacebookConnectCaptcha
                            };
                        case f.InvalidUsername:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("We didn't recognize this username. Please try again.", "FacebookConnectError"),
                                    subMessage: Object(Ye.e)()
                                },
                                facebookConnectFormServerErrors: {
                                    usernameError: !0
                                },
                                currentStep: V.AuthFormStep.FacebookConnect
                            };
                        case f.InvalidPassword:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("That password was incorrect. Please try again.", "FacebookConnectError"),
                                    subMessage: Object(Ye.d)()
                                },
                                facebookConnectFormServerErrors: {
                                    passwordError: !0
                                },
                                currentStep: V.AuthFormStep.FacebookConnect
                            };
                        case f.UserDoesNotExist:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This username is unavailable.", "FacebookConnectError"),
                                    subMessage: Object(Ye.c)(t)
                                },
                                facebookConnectFormServerErrors: {
                                    usernameError: !0
                                },
                                currentStep: V.AuthFormStep.FacebookConnect
                            };
                        case f.UserCredentialsIncorrect:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This username or password was incorrect.", "FacebookConnectError")
                                },
                                facebookConnectFormServerErrors: {
                                    usernameError: !0,
                                    passwordError: !0
                                },
                                currentStep: V.AuthFormStep.FacebookConnect
                            };
                        case f.UserNeedsPasswordReset:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This account needs a password reset.", "FacebookConnectError"),
                                    subMessage: Object(Ye.h)()
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: V.AuthFormStep.FacebookConnect
                            };
                        case f.UserHasBeenDeleted:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This account has been deleted.", "FacebookConnectError"),
                                    subMessage: Object(Ye.b)()
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: V.AuthFormStep.FacebookConnect
                            };
                        case f.SuspendedUser:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This account has been suspended.", "FacebookConnectError"),
                                    subMessage: Object(Ye.i)()
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: V.AuthFormStep.FacebookConnect
                            };
                        case f.FacebookAccountAlreadyLinked:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This facebook account is already linked to a Twitch account.", "FacebookConnectError"),
                                    subMessage: Object(Ye.f)(r)
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: V.AuthFormStep.FacebookConnect
                            };
                        case f.DeviceCookieThrottleReached:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("You have attempted to log in too many times on this device.", "FacebookConnectError"),
                                    subMessage: Object(s.d)("Please try again later.", "FacebookConnectError")
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: V.AuthFormStep.FacebookConnect
                            };
                        case f.MissingAuthyToken:
                            return {
                                serverMessage: {},
                                facebookConnectFormServerErrors: {},
                                currentStep: V.AuthFormStep.FacebookConnectTwoFactor
                            };
                        case f.InvalidAuthyToken:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("That code was incorrect.", "FacebookConnectError")
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: V.AuthFormStep.FacebookConnectTwoFactor
                            };
                        case f.FailedToVerifyAuthyToken:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("We were unable to verify your Authy code.", "FacebookConnectError")
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: V.AuthFormStep.FacebookConnectTwoFactor
                            };
                        case f.UnexpectedFacebookIssue:
                        case f.UnableToConnect:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("Something went wrong while connecting your Facebook account.", "FacebookConnectError")
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: V.AuthFormStep.FacebookConnect
                            };
                        case f.FailedToDecodeJSON:
                        case f.UnexpectedError:
                        default:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("Something went wrong.", "FacebookConnectError")
                                },
                                facebookConnectFormServerErrors: {},
                                currentStep: V.AuthFormStep.FacebookConnect
                            }
                    }
                }(e, t, r, a), {
                    captchaState: qe(n, i),
                    isSubmitInTransit: !1,
                    smsProof: c
                })
            }

            function He(e, t, r) {
                return o.__assign({}, function(e, t) {
                    switch (t) {
                        case d.NoConnectedTwitchUser:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("You can now connect this Facebook account to an existing Twitch ID.", "FacebookLoginError"),
                                    subMessage: Object(Ye.g)(e),
                                    isSuccessMessage: !0
                                },
                                currentStep: V.AuthFormStep.FacebookConnect
                            };
                        case d.SuspendedUser:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This account has been suspended.", "FacebookLoginError"),
                                    subMessage: Object(Ye.i)()
                                },
                                currentStep: V.AuthFormStep.FacebookLogin
                            };
                        case d.MissingAuthyToken:
                            return {
                                serverMessage: {},
                                currentStep: V.AuthFormStep.FacebookLoginTwoFactor
                            };
                        case d.InvalidAuthyToken:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("That code was incorrect.", "FacebookLoginError")
                                },
                                currentStep: V.AuthFormStep.FacebookLoginTwoFactor
                            };
                        case d.FailedToVerifyAuthyToken:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("We were unable to verify your Authy code.", "FacebookLoginError")
                                },
                                currentStep: V.AuthFormStep.FacebookLoginTwoFactor
                            };
                        case d.UnableToVerifyIdentity:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("We were unable to verify your Facebook identity.", "FacebookLoginError")
                                },
                                currentStep: V.AuthFormStep.FacebookLogin
                            };
                        case d.FailedToDecodeJSON:
                        case d.UnexpectedError:
                        default:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("Something went wrong.", "FacebookLoginError")
                                },
                                currentStep: V.AuthFormStep.FacebookLogin
                            }
                    }
                }(e, t), {
                    isSubmitInTransit: !1,
                    smsProof: r
                })
            }

            function Ge(e, t, r) {
                return o.__assign({}, function(e, t, r) {
                    switch (r) {
                        case g.BlacklistedIP:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("We've noticed suspicious activity from this IP address.", "FacebookSignupError"),
                                    subMessage: Je()
                                },
                                facebookSignupFormServerErrors: {}
                            };
                        case g.InvalidUsername:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This username submission is invalid.", "FacebookSignupError")
                                },
                                facebookSignupFormServerErrors: {
                                    usernameError: !0
                                }
                            };
                        case g.UsernameExists:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This username is already taken.", "FacebookSignupError")
                                },
                                facebookSignupFormServerErrors: {
                                    usernameError: !0
                                }
                            };
                        case g.InvalidPassword:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("Passwords must be between 8 to 71 characters.", "FacebookSignupError")
                                },
                                facebookSignupFormServerErrors: {
                                    passwordError: !0
                                }
                            };
                        case g.FacebookAccountAlreadyLinked:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This facebook account is already linked to a Twitch account.", "FacebookSignupError"),
                                    subMessage: Object(Ye.f)(t)
                                },
                                facebookSignupFormServerErrors: {}
                            };
                        case g.EmailThrottled:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("The email linked to your Facebook account has been used to create too many accounts in the last 24 hours.", "FacebookSignupError"),
                                    subMessage: Ke(e)
                                },
                                facebookSignupFormServerErrors: {}
                            };
                        case g.IPThrottled:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("You are creating accounts too quickly.", "FacebookSignupError"),
                                    subMessage: Je()
                                },
                                facebookSignupFormServerErrors: {}
                            };
                        case g.TooManyUsers:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("The email linked to your Facebook account is associated with too many accounts.", "FacebookSignupError"),
                                    subMessage: Ke(e)
                                },
                                facebookSignupFormServerErrors: {}
                            };
                        case g.UnexpectedFacebookIssue:
                        case g.UnableToVerifyIdentity:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("You cannot sign up with this Facebook account right now.", "FacebookSignupError"),
                                    subMessage: function(e) {
                                        return Object(s.d)("Please <x:click>create an account here</x:click> instead.", {
                                            "x:click": function(t) {
                                                return Object(Ye.l)(t, e)
                                            }
                                        }, "FacebookSignupError")
                                    }(e)
                                },
                                facebookSignupFormServerErrors: {}
                            };
                        case g.FailedToDecodeJSON:
                        case g.UnexpectedSignupIssue:
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

            function Je() {
                return Object(s.d)("Please try again later.", "FacebookSignupError")
            }

            function Ke(e) {
                return Object(s.d)("Want to <x:click>create a new account</x:click> with a different email instead?", {
                    "x:click": function(t) {
                        return Object(Ye.l)(t, e)
                    }
                }, "FacebookSignupError")
            }

            function Ze(e, t, r, a, i, c, u) {
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
                                currentStep: V.AuthFormStep.StartLogin
                            };
                        case n.PasswordMissing:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("The password field is required.", "LoginError")
                                },
                                loginFormServerErrors: {
                                    passwordError: !0
                                },
                                currentStep: V.AuthFormStep.StartLogin
                            };
                        case n.MultipleAccountsLinkedToEmail:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This email is linked to multiple accounts. Please log in with a username instead.", "LoginError"),
                                    subMessage: Object(Ye.e)()
                                },
                                loginFormServerErrors: {},
                                currentStep: V.AuthFormStep.StartLogin
                            };
                        case n.NoAccountLinkedToEmail:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This email is not linked to a Twitch account. Please log in with a username instead.", "LoginError"),
                                    subMessage: Object(Ye.e)()
                                },
                                loginFormServerErrors: {},
                                currentStep: V.AuthFormStep.StartLogin
                            };
                        case n.IncorrectCaptcha:
                            return e === V.AuthFormStep.LoginCaptcha ? {
                                serverMessage: {
                                    message: Object(s.d)("That reCAPTCHA did not work.", "LoginError")
                                },
                                loginFormServerErrors: {},
                                currentStep: V.AuthFormStep.LoginCaptcha
                            } : {
                                serverMessage: {},
                                loginFormServerErrors: {},
                                currentStep: V.AuthFormStep.LoginCaptcha
                            };
                        case n.InvalidUsername:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("We didn't recognize this username. Please try again.", "LoginError"),
                                    subMessage: Object(Ye.e)()
                                },
                                loginFormServerErrors: {
                                    usernameError: !0
                                },
                                currentStep: V.AuthFormStep.StartLogin
                            };
                        case n.InvalidPassword:
                            return {
                                serverMessage: {
                                    message: r ? Object(s.d)("That password was incorrect. Please try again. It looks like your caps lock was on.", "LoginError") : Object(s.d)("That password was incorrect. Please try again.", "LoginError"),
                                    subMessage: Object(Ye.d)()
                                },
                                loginFormServerErrors: {
                                    passwordError: !0
                                },
                                currentStep: V.AuthFormStep.StartLogin
                            };
                        case n.UserDoesNotExist:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This username does not exist.", "LoginError"),
                                    subMessage: Object(Ye.c)(t)
                                },
                                loginFormServerErrors: {
                                    usernameError: !0
                                },
                                currentStep: V.AuthFormStep.StartLogin
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
                                currentStep: V.AuthFormStep.StartLogin
                            };
                        case n.UserNeedsPasswordReset:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This account needs a password reset.", "LoginError"),
                                    subMessage: Object(Ye.h)()
                                },
                                loginFormServerErrors: {},
                                currentStep: V.AuthFormStep.StartLogin
                            };
                        case n.UserHasBeenDeleted:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This account does not exist.", "LoginError"),
                                    subMessage: Object(Ye.b)()
                                },
                                loginFormServerErrors: {},
                                currentStep: V.AuthFormStep.StartLogin
                            };
                        case n.SuspendedUser:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This account has been suspended.", "LoginError"),
                                    subMessage: Object(Ye.i)()
                                },
                                loginFormServerErrors: {},
                                currentStep: V.AuthFormStep.StartLogin
                            };
                        case n.DeviceCookieThrottleReached:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("You have attempted to log in too many times on this device.", "LoginError"),
                                    subMessage: Object(s.d)("Please try again later.", "LoginError")
                                },
                                loginFormServerErrors: {},
                                currentStep: V.AuthFormStep.StartLogin
                            };
                        case n.MissingAuthyToken:
                            return {
                                serverMessage: {},
                                loginFormServerErrors: {},
                                currentStep: V.AuthFormStep.LoginTwoFactor
                            };
                        case n.InvalidAuthyToken:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("That code was incorrect.", "LoginError")
                                },
                                loginFormServerErrors: {},
                                currentStep: V.AuthFormStep.LoginTwoFactor
                            };
                        case n.FailedToVerifyAuthyToken:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("We were unable to verify your Authy code.", "LoginError")
                                },
                                loginFormServerErrors: {},
                                currentStep: V.AuthFormStep.LoginTwoFactor
                            };
                        case n.FailedToDecodeJSON:
                        case n.UnexpectedError:
                        default:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("Something went wrong.", "LoginError")
                                },
                                loginFormServerErrors: {},
                                currentStep: V.AuthFormStep.StartLogin
                            }
                    }
                }(e, t, a, i), {
                    captchaState: qe(r, c),
                    isSubmitInTransit: !1,
                    smsProof: u
                })
            }
            var Qe = r("p46w"),
                $e = r("7M8a"),
                et = new RegExp(/@(((([^.]+)\.)+)([a-zA-Z]{3,}|[a-zA-Z.]{5,}))/);
            var tt = "under13";

            function rt(e, t) {
                return o.__assign({}, function(e, t) {
                    switch (t) {
                        case u.UserNameMissing:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("The username field is required.", "SignupError")
                                },
                                signupFormServerErrors: {
                                    usernameError: !0
                                }
                            };
                        case u.PasswordMissing:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("The password field is required.", "SignupError")
                                },
                                signupFormServerErrors: {
                                    passwordError: !0
                                }
                            };
                        case u.IncorrectCaptcha:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("That reCAPTCHA did not work.", "SignupError")
                                },
                                signupFormServerErrors: {}
                            };
                        case u.BlacklistedIP:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("We've noticed suspicious activity from this IP address.", "SignupError")
                                },
                                signupFormServerErrors: {}
                            };
                        case u.BlacklistedEmailDomain:
                            return {
                                serverMessage: {
                                    message: Object(s.d)('Emails using the domain "{domain}" are not allowed.', {
                                        domain: function(e) {
                                            if (!e) return "";
                                            var t = et.exec(e);
                                            return null === t ? "" : t[1]
                                        }(e)
                                    }, "SignupError"),
                                    subMessage: Object(s.d)("Please try again with a different email address", "SignupError")
                                },
                                signupFormServerErrors: {
                                    emailError: !0
                                }
                            };
                        case u.InvalidBirthday:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("That birthday doesn’t seem right.", "SignupError")
                                },
                                signupFormServerErrors: {
                                    birthdayError: !0
                                }
                            };
                        case u.InvalidUsername:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This username submission is invalid.", "SignupError")
                                },
                                signupFormServerErrors: {
                                    usernameError: !0
                                }
                            };
                        case u.InvalidPassword:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("Passwords must be between 8 and 71 characters.", "SignupError")
                                },
                                signupFormServerErrors: {
                                    passwordError: !0
                                }
                            };
                        case u.MissingFields:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("Some fields were missing.", "SignupError"),
                                    subMessage: Object(s.d)("Please complete all fields to continue.", "SignupError")
                                },
                                signupFormServerErrors: {}
                            };
                        case u.UsernameExists:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This username is unavailable.", "SignupError")
                                },
                                signupFormServerErrors: {
                                    usernameError: !0
                                }
                            };
                        case u.UserUnder13:
                            return Qe.set(tt, "true"), {
                                serverMessage: {
                                    message: Object(s.d)("Sorry, you must be at least 13 years old to create an account.", "SignupError"),
                                    subMessage: Object(s.d)("Please read our <x:link>terms of service</x:link>.", {
                                        "x:link": function(e) {
                                            return Object(Ye.k)(e, W.d)
                                        }
                                    }, "SignupError")
                                },
                                signupFormServerErrors: {}
                            };
                        case u.EmailThrottled:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This email has been used to create too many accounts in the last 24 hours.", "SignupError"),
                                    subMessage: Object(s.d)("Please try again with a different email address or try again tomorrow.", "SignupError")
                                },
                                signupFormServerErrors: {
                                    emailError: !0
                                }
                            };
                        case u.IPThrottled:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("You are creating accounts too quickly.", "SignupError"),
                                    subMessage: Object(s.d)("Please try again later.", "SignupError")
                                },
                                signupFormServerErrors: {}
                            };
                        case u.TooManyUsersWithEmail:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("This email is associated with too many accounts.", "SignupError"),
                                    subMessage: nt()
                                },
                                signupFormServerErrors: {
                                    emailError: !0
                                }
                            };
                        case u.MultiAccountDisabled:
                            return {
                                serverMessage: {
                                    message: Object(s.d)("Unable to create account.", "SignupError"),
                                    subMessage: nt()
                                },
                                signupFormServerErrors: {
                                    emailError: !0
                                }
                            };
                        case u.FailedToDecodeJSON:
                        case u.UnexpectedIssue:
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

            function nt() {
                return Object(s.d)("Please use a different email to continue. <x:link>Click here</x:link> for more details.", {
                    "x:link": function(e) {
                        return Object(Ye.k)(e, Object($e.b)($e.a.CreatingAccounts))
                    }
                }, "SignupError")
            }
            var ot, at = "https://passport.twitch.tv/twofactor/sms/new";
            ! function(e) {
                e[e.UnexpectedError = 3014] = "UnexpectedError", e[e.SMSThrottled = 3015] = "SMSThrottled"
            }(ot || (ot = {}));
            r("IisL");
            var st = function(e) {
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
                                type: z.None
                            },
                            serverMessage: {},
                            isSubmitInTransit: !1,
                            smsRequestState: Re.None,
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
                            t.state.isSubmitInTransit || (t.state.currentStep === v.a.FacebookConnectTwoFactor || t.state.currentStep === v.a.FacebookConnectCaptcha ? t.changeFacebookFormType(v.a.FacebookConnect) : t.state.rootStep === v.a.StartLogin ? t.startLogin() : t.startSignup())
                        }, t.isInitialStep = function(e) {
                            return void 0 === e && (e = t.state.currentStep), e === v.a.StartLogin || e === v.a.StartSignup || e === v.a.FacebookLogin
                        }, t.isLoginFlow = function(e) {
                            return void 0 === e && (e = t.state.currentStep), e === v.a.StartLogin || e === v.a.LoginTwoFactor || e === v.a.LoginCaptcha || e === v.a.FacebookLogin || e === v.a.FacebookLoginTwoFactor
                        }, t.onLoginTabClicked = function() {
                            t.state.isSubmitInTransit || t.state.currentStep === v.a.StartLogin || t.startLogin()
                        }, t.onSignupTabClicked = function() {
                            t.state.isSubmitInTransit || t.state.currentStep === v.a.StartSignup || t.startSignup()
                        }, t.startLogin = function() {
                            t.setState({
                                rootStep: v.a.StartLogin,
                                captchaState: {
                                    type: z.None
                                },
                                twoFactorFormValues: {},
                                serverMessage: {},
                                currentStep: v.a.StartLogin
                            })
                        }, t.startSignup = function() {
                            t.setState(function(e) {
                                return {
                                    rootStep: v.a.StartSignup,
                                    signupFormValues: o.__assign({}, e.signupFormValues, {
                                        captchaValue: void 0
                                    }),
                                    twoFactorFormValues: {},
                                    facebookSignupFormValues: {},
                                    serverMessage: {},
                                    currentStep: v.a.StartSignup
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
                            return t.state.smsRequestState !== Re.Loading && (t.setState({
                                smsRequestState: Re.Loading
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
                                                                return o.trys.push([0, 3, , 4]), (t = new FormData).append("code", e), [4, fetch(at, {
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
                                                                    errorCode: ot.UnexpectedError,
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
                                                smsRequestState: Re.Success
                                            }) : this.setState(o.__assign({}, function(e) {
                                                switch (e) {
                                                    case ot.SMSThrottled:
                                                        return {
                                                            serverMessage: {
                                                                message: Object(s.d)("You have requested too many SMS messages.", "SMSError"),
                                                                subMessage: Object(s.d)("Try again later.", "SMSError")
                                                            }
                                                        };
                                                    case ot.UnexpectedError:
                                                    default:
                                                        return {
                                                            serverMessage: {
                                                                message: Object(s.d)("Error encountered when sending SMS.", "SMSError")
                                                            }
                                                        }
                                                }
                                            }(e.errorCode), {
                                                smsRequestState: Re.None
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
                                                case v.a.StartLogin:
                                                case v.a.LoginCaptcha:
                                                case v.a.LoginTwoFactor:
                                                    return [3, 1];
                                                case v.a.FacebookLogin:
                                                case v.a.FacebookLoginTwoFactor:
                                                    return [3, 3];
                                                case v.a.FacebookConnect:
                                                case v.a.FacebookConnectTwoFactor:
                                                case v.a.FacebookConnectCaptcha:
                                                    return [3, 5];
                                                case v.a.FacebookSignup:
                                                    return [3, 7];
                                                case v.a.StartSignup:
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
                                            return Object(T.l)({
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
                                            return Fe(this.state.loginFormValues, this.state.loginFormServerErrors) && this.beginSubmit() ? [4, function(e) {
                                                var t = s.p.logger.withCategory("auth.login"),
                                                    r = {
                                                        username: e.username,
                                                        password: e.password,
                                                        remember_me: e.rememberMe,
                                                        client_id: s.p.config.authSettings.clientID
                                                    };
                                                e.captchaProof ? r.captcha = {
                                                    proof: e.captchaProof
                                                } : e.captchaValue && (r.captcha = {
                                                    value: e.captchaValue,
                                                    key: s.p.config.captchaKey
                                                }), e.authyToken && (r.authy_token = e.authyToken);
                                                var n = Object(i.d)() ? l : p;
                                                return Object(c.a)(n, r, {
                                                    config: s.a,
                                                    logger: t
                                                })
                                            }(function(e, t, r) {
                                                var n = {
                                                    username: e.username,
                                                    password: e.password
                                                };
                                                return t.token && (n.authyToken = t.token), t.rememberMe && (n.rememberMe = t.rememberMe), r.type === z.Passed ? n.captchaValue = r.value : r.type === z.Proved && (n.captchaProof = r.proof), n
                                            }(this.state.loginFormValues, this.state.twoFactorFormValues, this.state.captchaState))] : [3, 5];
                                        case 1:
                                            return (e = t.sent()).complete ? [4, e.complete({
                                                next: this.props.nextURL
                                            })] : [3, 3];
                                        case 2:
                                            return t.sent(), Object(T.m)(), [3, 4];
                                        case 3:
                                            this.setState(Ze(this.state.currentStep, this.startSignup, this.state.captchaState, this.state.isCapsLockOn, e.errorCode, e.captchaProof, e.smsProof)), t.label = 4;
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
                                            return oe(e = this.state.facebookInfo) && this.beginSubmit() ? (t = {
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
                                                return e.authyToken && (r.authy_token = e.authyToken), Object(c.a)(m, r, {
                                                    config: s.a,
                                                    logger: t
                                                })
                                            }(t)]) : [3, 5];
                                        case 1:
                                            return (r = o.sent()).complete ? [4, r.complete({
                                                next: this.props.nextURL
                                            })] : [3, 3];
                                        case 2:
                                            return o.sent(), Object(T.m)(), [3, 4];
                                        case 3:
                                            this.setState(He(function() {
                                                return n.changeFacebookFormType(v.a.FacebookSignup)
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
                                            return e = this.state.facebookInfo, t = this.state.facebookSignupFormValues, r = this.state.facebookSignupFormServerErrors, oe(e) && ae(t, r) && this.beginSubmit() ? [4, function(e) {
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
                                                return Object(c.a)(b, r, {
                                                    config: s.a,
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
                                            return (n = o.sent()).complete ? [4, n.complete({
                                                next: this.props.nextURL
                                            })] : [3, 3];
                                        case 2:
                                            return o.sent(), Object(T.p)(), [3, 4];
                                        case 3:
                                            this.setState(Ge(this.startSignup, this.facebookLogin, n.errorCode)), o.label = 4;
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
                                            return e = this.state.facebookInfo, t = this.state.facebookConnectFormServerErrors, ne(r = this.state.facebookConnectFormValues, t) && oe(e) && this.beginSubmit() ? [4, function(e) {
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
                                                }), Object(c.a)(S, r, {
                                                    config: s.a,
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
                                                return r.token && (o.authyToken = r.token), n.type === z.Passed ? o.captchaValue = n.value : n.type === z.Proved && (o.captchaProof = n.proof), o
                                            }(e, r, this.state.twoFactorFormValues, this.state.captchaState))] : [3, 5];
                                        case 1:
                                            return (n = o.sent()).complete ? [4, n.complete({
                                                next: this.props.nextURL
                                            })] : [3, 3];
                                        case 2:
                                            return o.sent(), Object(T.m)(), [3, 4];
                                        case 3:
                                            this.setState(ze(this.state.currentStep, this.startSignup, this.facebookLogin, this.state.captchaState, n.errorCode, n.captchaProof, n.smsProof)), o.label = 4;
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
                                                return Object(c.a)(h, r, {
                                                    config: s.a,
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
                                            return (e = r.sent()).complete ? [4, e.complete({
                                                next: this.props.nextURL
                                            })] : [3, 3];
                                        case 2:
                                            return r.sent(), Object(T.p)(), [3, 4];
                                        case 3:
                                            this.setState(function(r) {
                                                return o.__assign({
                                                    signupFormValues: o.__assign({}, r.signupFormValues, {
                                                        captchaValue: void 0
                                                    })
                                                }, rt(t.state.signupFormValues.email, e.errorCode))
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
                                subMessage: Object(Ye.a)(function() {
                                    return t.changeFacebookFormType(v.a.FacebookConnect)
                                }),
                                isSuccessMessage: !0
                            };
                            t.setState({
                                facebookInfo: e,
                                serverMessage: r,
                                currentStep: t.isLoginFlow() ? v.a.FacebookLogin : v.a.FacebookSignup
                            }, t.facebookLoginCallback)
                        }, t.facebookLoginCallback = function() {
                            t.isLoginFlow() && t.onAuthSubmit()
                        }, t.onCaptchaChanged = function(e) {
                            e && t.setState({
                                captchaState: {
                                    type: z.Passed,
                                    value: e
                                },
                                serverMessage: {}
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentWillMount = function() {
                        document.addEventListener("keydown", this.onKeyPressed), document.addEventListener("keyup", this.onKeyPressed)
                    }, t.prototype.componentWillUnmount = function() {
                        document.removeEventListener("keyup", this.onKeyPressed), document.removeEventListener("keydown", this.onKeyPressed), Object(T.j)({
                            screen: Object(T.h)(this.state.currentStep),
                            target: T.g.Close,
                            action: T.a.Click
                        })
                    }, t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportCustomEvent(this.props.loadedLatencyEvent)
                    }, t.prototype.render = function() {
                        return a.createElement(k.Eb, {
                            padding: {
                                x: 2,
                                y: 3
                            },
                            display: k.X.Flex,
                            flexDirection: k.Aa.Column,
                            background: k.r.Base
                        }, this.renderBackButton(), this.renderHeader(), this.renderNavigation(), this.renderServerMessage(), this.renderForm(), this.renderFooter())
                    }, t.prototype.renderBackButton = function() {
                        return this.isInitialStep() ? null : a.createElement(k.Xa, null, a.createElement(k.A, {
                            ariaLabel: Object(s.d)("Back", "AuthForm"),
                            icon: k.tb.AngleLeft,
                            onClick: this.goBack,
                            "data-test-selector": "auth-form-back"
                        }))
                    }, t.prototype.renderHeader = function() {
                        return a.createElement(y, {
                            currentStep: this.state.currentStep,
                            fbConnectUsername: this.state.facebookConnectFormValues.username,
                            loginUsername: this.state.loginFormValues.username
                        })
                    }, t.prototype.renderNavigation = function() {
                        return this.isInitialStep() ? a.createElement(k.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(k.Gb, null, a.createElement(k.Fb, {
                            active: this.isLoginFlow(),
                            onClick: this.onLoginTabClicked,
                            "data-a-target": "passport-login-tab"
                        }, a.createElement(k.W, {
                            fontSize: k.Ca.Size5
                        }, Object(s.d)("Log In", "AuthForm"))), a.createElement(k.Fb, {
                            active: !this.isLoginFlow(),
                            onClick: this.onSignupTabClicked,
                            "data-a-target": "passport-signup-tab"
                        }, a.createElement(k.W, {
                            fontSize: k.Ca.Size5
                        }, Object(s.d)("Sign Up", "AuthForm"))))) : null
                    }, t.prototype.renderServerMessage = function() {
                        return a.createElement(Te, o.__assign({}, this.state.serverMessage))
                    }, t.prototype.renderForm = function() {
                        switch (this.state.currentStep) {
                            case v.a.StartLogin:
                            case v.a.FacebookLogin:
                                return a.createElement(Ce, {
                                    values: this.state.loginFormValues,
                                    serverErrors: this.state.loginFormServerErrors,
                                    onLoginFormValuesChanged: this.onLoginFormValuesChanged,
                                    onLoginRequested: this.onAuthSubmit,
                                    isLoading: this.state.isSubmitInTransit,
                                    isCapsLockOn: this.state.isCapsLockOn
                                });
                            case v.a.StartSignup:
                                return a.createElement(Ne, {
                                    values: this.state.signupFormValues,
                                    serverErrors: this.state.signupFormServerErrors,
                                    onSignupFormValuesChanged: this.onSignupFormValuesChanged,
                                    onSignupRequested: this.onAuthSubmit,
                                    isLoading: this.state.isSubmitInTransit,
                                    isCapsLockOn: this.state.isCapsLockOn
                                });
                            case v.a.FacebookSignup:
                                return a.createElement(ye, {
                                    facebookName: this.state.facebookInfo.name,
                                    values: this.state.facebookSignupFormValues,
                                    serverErrors: this.state.facebookSignupFormServerErrors,
                                    onFacebookSignupFormValuesChanged: this.changeFacebookSignupFormValues,
                                    onFacebookFormTypeChanged: this.changeFacebookFormType,
                                    onSignupRequested: this.onAuthSubmit,
                                    isLoading: this.state.isSubmitInTransit,
                                    isCapsLockOn: this.state.isCapsLockOn
                                });
                            case v.a.FacebookConnect:
                                return a.createElement(le, {
                                    facebookName: this.state.facebookInfo.name,
                                    values: this.state.facebookConnectFormValues,
                                    serverErrors: this.state.facebookConnectFormServerErrors,
                                    onFacebookConnectFormValuesChanged: this.changeFacebookConnectFormValues,
                                    onFacebookFormTypeChanged: this.changeFacebookFormType,
                                    onConnectRequested: this.onAuthSubmit,
                                    isLoading: this.state.isSubmitInTransit,
                                    isCapsLockOn: this.state.isCapsLockOn
                                });
                            case v.a.LoginTwoFactor:
                            case v.a.FacebookLoginTwoFactor:
                            case v.a.FacebookConnectTwoFactor:
                                return a.createElement(k.Xa, {
                                    margin: {
                                        top: 2
                                    }
                                }, a.createElement(We, {
                                    values: this.state.twoFactorFormValues,
                                    onTwoFactorFormValuesChanged: this.onTwoFactorFormValuesChanged,
                                    onTokenSubmitRequested: this.onAuthSubmit,
                                    onSMSRequested: this.onSMSSubmit,
                                    isLoading: this.state.isSubmitInTransit,
                                    smsRequestState: this.state.smsRequestState
                                }));
                            case v.a.LoginCaptcha:
                            case v.a.FacebookConnectCaptcha:
                                return a.createElement(k.Xa, {
                                    margin: {
                                        top: 2
                                    }
                                }, a.createElement(I, {
                                    onCaptchaChanged: this.onCaptchaChanged,
                                    disableContinueButton: this.state.captchaState.type !== z.Passed,
                                    onContinueClicked: this.onAuthSubmit,
                                    isLoading: this.state.isSubmitInTransit
                                }));
                            default:
                                return
                        }
                    }, t.prototype.renderFooter = function() {
                        return !this.isInitialStep() || s.p.integrations.app ? null : a.createElement(k.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(A, {
                            onFacebookConnected: this.onFacebookConnected,
                            screen: Object(T.h)(this.state.currentStep),
                            disableConnectButton: this.state.isSubmitInTransit
                        }))
                    }, t.prototype.isReadyForSubmit = function(e, t) {
                        return !(!Ue(e, t) || !Object(i.i)() && !this.state.signupFormValues.captchaValue)
                    }, t
                }(a.Component),
                it = Object(ue.b)("AuthForm", {
                    autoReportInteractive: !0
                })(st);
            r.d(t, "AUTH_FORM_BACK_SELECTOR", function() {
                return "auth-form-back"
            }), r.d(t, "AuthFormPresentation", function() {
                return st
            }), r.d(t, "AuthForm", function() {
                return it
            })
        },
        "7M8a": function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return o
            }), r.d(t, "b", function() {
                return p
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

            function p(e) {
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
                        p = n(u),
                        l = r(4),
                        d = n(l),
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
                                            p = t.authType,
                                            l = t.state;
                                        if ("function" != typeof a || (a(e), !e.defaultPrevented)) {
                                            var h = {
                                                client_id: o,
                                                redirect_uri: c,
                                                state: l,
                                                return_scopes: s,
                                                scope: r,
                                                response_type: i,
                                                auth_type: p
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
                        isDisabled: p.default.bool,
                        callback: p.default.func.isRequired,
                        appId: p.default.string.isRequired,
                        xfbml: p.default.bool,
                        cookie: p.default.bool,
                        authType: p.default.bool,
                        scope: p.default.string,
                        state: p.default.string,
                        responseType: p.default.string,
                        returnScopes: p.default.bool,
                        redirectUri: p.default.string,
                        autoLoad: p.default.bool,
                        disableMobileRedirect: p.default.bool,
                        isMobile: p.default.bool,
                        fields: p.default.string,
                        version: p.default.string,
                        language: p.default.string,
                        onClick: p.default.func,
                        onFailure: p.default.func,
                        render: p.default.func.isRequired
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
                                var p = [r, o, a, s, i, c],
                                    l = 0;
                                (u = new Error(t.replace(/%s/g, function() {
                                    return p[l++]
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
                        p = r(10),
                        l = n(p),
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
                                            __html: l.default
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
                                        p = e.onClick,
                                        l = e.isDisabled,
                                        d = "string" == typeof a,
                                        h = {};
                                    return l && function(e) {
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
                                        onClick: p
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
        pKR5: function(e, t, r) {},
        qV8A: function(e, t, r) {},
        rACw: function(e, t, r) {
            "use strict";
            r.d(t, "b", function() {
                return a
            }), r.d(t, "a", function() {
                return s
            });
            var n = r("/7QA"),
                o = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

            function a(e) {
                return !!e && o.test(e)
            }

            function s(e) {
                if (!a(e)) return Object(n.d)("Please enter a valid email.", "EmailValidator")
            }
        },
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
                return p
            }), r.d(t, "d", function() {
                return l
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
                return S
            });
            var n = r("q1tI"),
                o = r("/7QA"),
                a = r("GxR5"),
                s = r("Ue10");

            function i(e) {
                return n.createElement(s.W, {
                    type: s.Vb.Strong
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

            function p() {
                return Object(o.d)("<x:link>Forgot your username</x:link>?", {
                    "x:link": function(e) {
                        return c(e, a.b)
                    }
                }, "ServerMessage")
            }

            function l() {
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

            function S(e) {
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