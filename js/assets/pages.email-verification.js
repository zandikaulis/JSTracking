webpackJsonp([79], {
    Tj44: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r("TToO"),
            a = r("GiK3"),
            o = r("2KeS"),
            n = r("6sO2"),
            s = r("j7/Y"),
            c = r("w9tK"),
            l = r("vH/s"),
            u = r("CSlQ"),
            d = r("9u8h");
        var f = r("Odds"),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1,
                        isEmailVerified: !1,
                        errorMessage: ""
                    }, t.logger = n.o.logger.withCategory("email-verification"), t
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.verifyEmail().then(function() {})
                }, t.prototype.render = function() {
                    return a.createElement(f._8, {
                        padding: 3
                    }, a.createElement(f.Q, {
                        className: "title",
                        type: f._49.H2
                    }, Object(n.d)("Email Verification", "EmailVerification")), this.renderVerificationStatus())
                }, t.prototype.renderVerificationStatus = function() {
                    if (this.state.isLoading) return a.createElement(f._8, {
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "verify-loading"
                    }, a.createElement(f.Q, {
                        type: f._49.Strong
                    }, Object(n.d)("Verifying Email...", "EmailVerification")));
                    if (this.state.isEmailVerified) return a.createElement(f._8, {
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "verify-success"
                    }, Object(n.d)("Your email address has been successfully validated.", "EmailVerification"));
                    var e = Object(n.d)("Couldn't validate your email: {errorMessage}", {
                        errorMessage: this.maybeGetLocalizedErrorMessage(this.state.errorMessage)
                    }, "EmailVerification");
                    return a.createElement(f._8, {
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "verify-error"
                    }, a.createElement(f.Q, {
                        color: f.K.Error,
                        type: f._49.Strong
                    }, e))
                }, t.prototype.maybeGetLocalizedErrorMessage = function(e) {
                    return e ? "Not Found" === e ? Object(n.d)("Not Found", "EmailVerification") : e : Object(n.d)("Unknown Error", "EmailVerification")
                }, t.prototype.verifyEmail = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e, t, r, a;
                        return i.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    if (this.state.isLoading || this.state.isError) return [2];
                                    this.setState({
                                        isLoading: !0
                                    }), o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, , 4]), [4, function(e) {
                                        return i.__awaiter(this, void 0, void 0, function() {
                                            var t, r, a;
                                            return i.__generator(this, function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return t = !1, r = "", e ? [4, d.a.post("/v5/emailvalidator/" + e)] : [3, 2];
                                                    case 1:
                                                        a = i.sent(), t = a && (200 === a.status || 204 === a.status), r = a.error ? a.error.error : "", i.label = 2;
                                                    case 2:
                                                        return [2, Promise.resolve({
                                                            isEmailVerified: t,
                                                            errorMessage: r
                                                        })]
                                                }
                                            })
                                        })
                                    }(this.props.match.params.emailOpaqueId)];
                                case 2:
                                    return e = o.sent(), t = e.isEmailVerified, r = e.errorMessage, this.setState({
                                        isEmailVerified: t,
                                        errorMessage: r,
                                        isLoading: !1
                                    }), [3, 4];
                                case 3:
                                    return a = o.sent(), this.logger.error(a, "Failed to verify email"), this.setState({
                                        isError: !0,
                                        isLoading: !1
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t
            }(a.Component),
            g = Object(o.d)(Object(u.d)("EmailVerificationPage", {
                destination: c.a.EmailVerification
            }), Object(s.a)({
                location: l.PageviewLocation.EmailVerification
            }))(m);
        r.d(t, "EmailVerificationPage", function() {
            return g
        })
    }
});
//# sourceMappingURL=pages.email-verification-5fa6d016d20e9f3e31e5f88925912888.js.map