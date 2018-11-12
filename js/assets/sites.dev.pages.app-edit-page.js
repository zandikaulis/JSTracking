(window.webpackJsonp = window.webpackJsonp || []).push([
    [221], {
        AhYx: function(e, t, r) {
            "use strict";
            r.r(t);
            var a = r("mrSG"),
                n = r("q1tI"),
                o = r("9C/b"),
                s = r("/7QA"),
                i = r("V+GM"),
                c = r("Svt6"),
                p = r("NvVO"),
                l = r("2xye"),
                u = r("GnwI"),
                d = r("1mFg"),
                m = r("coZW"),
                h = r("Ue10"),
                g = r("fvjX"),
                f = r("aggE"),
                v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return n.createElement(h.Xa, null, n.createElement(h.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, n.createElement("header", null, n.createElement(h.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, n.createElement(h.W, {
                            type: h.Vb.H2
                        }, Object(s.d)("Manage Application: ", "DevAppEdit"), " ", this.props.app.name)), n.createElement(h.W, {
                            type: h.Vb.P
                        }, Object(s.d)("Register a new application that uses the Twitch API to interact with Twitch", "DevAppEdit")))), n.createElement(f.a, {
                            app: this.props.app,
                            onResetSecret: this.props.onResetSecret,
                            onSave: this.props.onUpdate,
                            onFormChange: this.props.onFormChange,
                            secret: this.props.secret,
                            categories: this.props.categories,
                            errorMessage: this.props.errorMessage,
                            succeeded: this.props.succeeded
                        }))
                    }, t
                }(n.Component),
                b = Object(g.compose)(Object(u.b)("DevAppEditPageComponent", {
                    autoReportInteractive: !0
                }))(v),
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            app: null,
                            categories: [],
                            errorMessage: null,
                            succeeded: !1
                        }, t.loadApp = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, r;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!(e = this.props.match.params.id)) return [2];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 5, , 6]), [4, Object(d.a)(c.a + "/kraken/apps/" + e)];
                                        case 2:
                                            return 200 !== (t = a.sent()).status ? [3, 4] : [4, t.json()];
                                        case 3:
                                            (r = a.sent()) && this.setState({
                                                app: r
                                            }), a.label = 4;
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            return a.sent(), [2];
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }, t.fetchCategories = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return a.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 4, , 5]), [4, Object(d.a)(c.a + "/kraken/app_categories")];
                                        case 1:
                                            return 200 !== (e = r.sent()).status ? [3, 3] : [4, e.json()];
                                        case 2:
                                            (t = r.sent()) && this.setState({
                                                categories: t.categories
                                            }), r.label = 3;
                                        case 3:
                                            return [3, 5];
                                        case 4:
                                            return r.sent(), this.setState({
                                                categories: []
                                            }), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onUpdate = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, r, n, o;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            t = this.props.match.params.id, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 7, , 8]), [4, Object(d.a)(c.a + "/kraken/apps/" + t, {
                                                method: "PUT",
                                                body: JSON.stringify(e)
                                            })];
                                        case 2:
                                            return 200 !== (r = a.sent()).status ? [3, 4] : [4, r.json()];
                                        case 3:
                                            return (n = a.sent()) && (Object(m.d)(m.a.EditApp, t), this.setState({
                                                succeeded: !0,
                                                app: n
                                            })), [3, 6];
                                        case 4:
                                            return [4, r.json()];
                                        case 5:
                                            (o = a.sent()) && this.setState({
                                                errorMessage: o.message
                                            }), a.label = 6;
                                        case 6:
                                            return [3, 8];
                                        case 7:
                                            return a.sent(), [2];
                                        case 8:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onResetSecret = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, r;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (e = this.props.match.params.id, !window.confirm(Object(s.d)("Are you sure you want to generate a new secret?", "DevAppEdit"))) return [3, 6];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 5, , 6]), [4, Object(d.a)(c.a + "/kraken/apps/" + e + "/reset_secret", {
                                                method: "POST"
                                            })];
                                        case 2:
                                            return 200 !== (t = a.sent()).status ? [3, 4] : (Object(m.d)(m.a.RefreshAppSecret, e), [4, t.json()]);
                                        case 3:
                                            r = a.sent(), this.setState({
                                                secret: r.client_secret
                                            }), a.label = 4;
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            return a.sent(), [2];
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onFormChange = function() {
                            t.setState({
                                succeeded: !1,
                                errorMessage: ""
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        return a.__awaiter(this, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.fetchCategories()];
                                    case 1:
                                        return e.sent(), [4, this.loadApp()];
                                    case 2:
                                        return e.sent(), this.props.latencyTracking.reportInteractive(), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return this.state.app && this.state.categories ? n.createElement(b, {
                            app: this.state.app,
                            onUpdate: this.onUpdate,
                            onResetSecret: this.onResetSecret,
                            onFormChange: this.onFormChange,
                            secret: this.state.secret,
                            categories: this.state.categories,
                            errorMessage: this.state.errorMessage,
                            succeeded: this.state.succeeded
                        }) : n.createElement(h.Za, {
                            fillContent: !0
                        })
                    }, t = a.__decorate([Object(u.b)("DevAppEditPage", {
                        destination: p.a.DevSiteAppEdit
                    }), Object(i.a)({
                        location: l.PageviewLocation.DevSiteAppEdit
                    })], t)
                }(n.Component),
                _ = Object(o.a)(y);
            r.d(t, "DevAppEditContainer", function() {
                return y
            }), r.d(t, "DevAppEditPage", function() {
                return _
            })
        },
        RDVj: function(e, t, r) {},
        "V+GM": function(e, t, r) {
            "use strict";
            var a = r("mrSG"),
                n = r("cr+I"),
                o = r("q1tI"),
                s = r("wIs1"),
                i = r("/7QA");

            function c(e) {
                return function(t) {
                    var r = function(r) {
                        function s(t) {
                            var n = r.call(this, t) || this;
                            return n.tracked = !1, n.referenceTracking = {}, n.trackPageview = function() {
                                if (!(n.tracked || e.skip && e.skip(n.props))) {
                                    n.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(n.props) : e.properties && (t = a.__assign({}, e.properties));
                                    var r = a.__assign({}, n.props);
                                    r.location && r.location.state && (t.medium = r.location.state.medium, t.content = r.location.state.content, t.content_index = r.location.state.content_index, t.email_id = r.location.state.email_id);
                                    var o = n.referenceTracking,
                                        s = o.content,
                                        c = o.medium,
                                        p = o.content_index,
                                        l = o.email_id;
                                    i.p.tracking.trackPageview(a.__assign({
                                        content: s,
                                        medium: c,
                                        content_index: p,
                                        email_id: l,
                                        location: e.location
                                    }, t))
                                }
                            }, i.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : i.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), n
                        }
                        return a.__extends(s, r), s.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, r) {
                                "REPLACE" !== r && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, s.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, s.prototype.render = function() {
                            return o.createElement(t, a.__assign({}, this.props))
                        }, s.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? n.parse(e.search) : {},
                                r = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, r.medium || r.content || r.email_id) {
                                var a = "",
                                    o = n.stringify(t);
                                o.length > 0 && (a = "?" + o), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: a
                                })
                            }
                            return r
                        }, s
                    }(o.Component);
                    return Object(s.a)(r)
                }
            }
            r.d(t, "a", function() {
                return c
            })
        },
        aggE: function(e, t, r) {
            "use strict";
            var a = r("mrSG"),
                n = r("q1tI"),
                o = r("fvjX"),
                s = r("/7QA"),
                i = r("GnwI"),
                c = r("Ue10"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.resetSecret = function(e) {
                            e.preventDefault(), t.props.onResetSecret && t.props.onResetSecret()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return n.createElement(c.Xa, {
                            margin: {
                                bottom: 1
                            },
                            className: "dev-app-secret"
                        }, n.createElement(c.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, n.createElement(c.W, {
                            type: c.Vb.H5
                        }, Object(s.d)("Client Secret", "DevAppSecret"))), n.createElement(c.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, n.createElement(c.W, {
                            type: c.Vb.P,
                            color: c.O.Alt2
                        }, Object(s.d)("Passed to the token exchange endpoints to obtain a token. You must keep this confidential.", "DevAppSecret"))), this.props.showSecret && n.createElement(c.Xa, {
                            margin: {
                                bottom: 1
                            },
                            padding: {
                                x: 1
                            },
                            className: "dev-app-secret__secret"
                        }, this.props.secret), n.createElement(c.z, {
                            onClick: this.resetSecret,
                            "data-test-selector": "app-form-reset-secret-button"
                        }, Object(s.d)("New Secret", "DevAppSecret")))
                    }, t
                }(n.Component),
                l = Object(i.b)("DevAppSecret", {
                    autoReportInteractive: !0
                })(p),
                u = (r("RDVj"), "app-form-other-category-input"),
                d = "app-form-extended-information",
                m = "app-form-submit-button",
                h = "app-form-error",
                g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            id: t.props.app && t.props.app.id,
                            name: t.props.app && t.props.app.name || "",
                            redirectUrl: t.props.app && t.props.app.redirect_uri || "",
                            category: t.props.app && t.props.app.category_id && t.props.app.category_id.toString() || "",
                            categoryOther: t.props.app && t.props.app.category_other || "",
                            formValid: !1,
                            isNotificationDismissed: !1
                        }, t.renderSaveButton = function() {
                            var e;
                            e = t.props.succeeded ? Object(s.d)("Success", "DevAppForm") : t.props.app ? Object(s.d)("Save", "DevAppForm") : Object(s.d)("Create", "DevAppForm");
                            var r = t.props.succeeded ? c.F.Success : c.F.Default;
                            return n.createElement(c.z, {
                                disabled: !t.state.formValid,
                                onClick: t.onSave,
                                "data-test-selector": m,
                                type: r
                            }, e)
                        }, t.renderOtherCategoryField = function() {
                            return n.createElement(c.Xa, {
                                margin: {
                                    bottom: 1
                                }
                            }, n.createElement(c.Ea, {
                                label: Object(s.d)("Other Details", "AppForm"),
                                hint: Object(s.d)("Developing something not in our list? Tell us about it!", "DevAppForm")
                            }, n.createElement(c.Ra, {
                                value: t.state.categoryOther,
                                type: c.Ta.Text,
                                onChange: t.setCategoryOther,
                                "data-test-selector": u
                            })))
                        }, t.renderExistingAppDetails = function() {
                            if (t.props.app) return n.createElement(c.Xa, {
                                "data-test-selector": d
                            }, n.createElement(c.Xa, {
                                margin: {
                                    bottom: 1
                                }
                            }, n.createElement(c.Ea, {
                                label: Object(s.d)("Client ID", "AppForm"),
                                hint: Object(s.d)("Passed to authorization endpoints to identify your application. You cannot change your application's client id.", "DevAppForm")
                            }, n.createElement(c.Ra, {
                                value: t.state.id,
                                readOnly: !0,
                                type: c.Ta.Text,
                                "data-test-selector": u
                            }))))
                        }, t.isClientNameInvalidError = function() {
                            return "client name invalid" === t.props.errorMessage
                        }, t.clientNameInvalidErrorMessage = function() {
                            return t.isClientNameInvalidError ? Object(s.d)('Your application may not contain the word "Twitch".', "DevAppForm") : ""
                        }, t.renderAppSecret = function() {
                            if (t.props.app) return n.createElement(l, {
                                showSecret: !!t.props.secret,
                                secret: t.props.secret,
                                onResetSecret: t.props.onResetSecret
                            })
                        }, t.handleNotificationCloseButtonClick = function() {
                            return t.setState({
                                isNotificationDismissed: !0
                            })
                        }, t.renderErrorMessage = function() {
                            if (t.state.isNotificationDismissed) return null;
                            if (t.props.errorMessage) {
                                var e = t.props.errorMessage;
                                return t.isClientNameInvalidError() && (e = Object(s.d)("We could not create the application due to an error with the fields below.", "DevAppForm")), n.createElement(c.Xa, {
                                    margin: {
                                        bottom: 1
                                    },
                                    padding: 1,
                                    "data-test-selector": h
                                }, n.createElement(c.Na, {
                                    type: c.Oa.Error,
                                    title: e || "",
                                    narrow: !0,
                                    description: Object(s.d)("Please try again", "DevAppForm"),
                                    closeButtonAriaLabel: Object(s.d)("Dismiss", "DevAppForm"),
                                    closeButtonOnClick: t.handleNotificationCloseButtonClick
                                }))
                            }
                        }, t.setName = function(e) {
                            t.setState({
                                name: e.target.value
                            }, t.handleFormChange)
                        }, t.setRedirectUrl = function(e) {
                            t.setState({
                                redirectUrl: e.target.value
                            }, t.handleFormChange)
                        }, t.setCategory = function(e) {
                            t.setState({
                                category: e.target.value
                            }, t.handleFormChange)
                        }, t.setCategoryOther = function(e) {
                            t.setState({
                                categoryOther: e.target.value
                            }, t.handleFormChange)
                        }, t.handleFormChange = function() {
                            t.props.onFormChange && t.props.onFormChange(), t.validateForm()
                        }, t.validateForm = function() {
                            var e = !0;
                            t.state.name.length || (e = !1), t.state.redirectUrl.length || (e = !1), t.state.category.length && "0" !== t.state.category || (e = !1), "9" !== t.state.category || t.state.categoryOther.length || (e = !1), t.setState({
                                formValid: e,
                                isNotificationDismissed: !1
                            })
                        }, t.onSave = function(e) {
                            if (e.preventDefault(), !t.props.succeeded) {
                                var r = {
                                    id: t.state.id,
                                    name: t.state.name,
                                    redirect_uri: t.state.redirectUrl,
                                    category_id: parseInt(t.state.category, 10),
                                    category_other: t.state.categoryOther
                                };
                                t.props.onSave(r)
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.categories.map(function(e) {
                                return n.createElement("option", {
                                    value: e.id,
                                    key: e.id
                                }, e.name)
                            }),
                            t = null;
                        "9" === this.state.category && (t = this.renderOtherCategoryField());
                        var r = this.renderErrorMessage(),
                            a = this.renderSaveButton();
                        return n.createElement(c.Xa, {
                            className: "dev-app-form"
                        }, n.createElement(c.Ja, null, n.createElement(c.P, {
                            cols: {
                                default: 12,
                                md: 7
                            }
                        }, r, n.createElement("form", null, n.createElement(c.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, n.createElement(c.Ea, {
                            label: Object(s.d)("Name", "DevAppForm"),
                            hint: Object(s.d)("Displayed to users when authorizing your application.", "DevAppForm"),
                            error: this.isClientNameInvalidError(),
                            errorMessage: this.clientNameInvalidErrorMessage()
                        }, n.createElement(c.Ra, {
                            value: this.state.name,
                            required: !0,
                            type: c.Ta.Text,
                            onChange: this.setName,
                            "data-test-selector": "app-form-name-input",
                            error: this.isClientNameInvalidError()
                        }))), n.createElement(c.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, n.createElement(c.Ea, {
                            label: Object(s.d)("OAuth Redirect URL", "DevAppForm"),
                            hint: Object(s.d)("Will receive the result of all client authorizations: either an access token or a failure message. This must exactly match the redirect_uri parameter passed to the authorization endpoint. When testing locally, you can set this to http://localhost.", "DevAppForm")
                        }, n.createElement(c.Ra, {
                            value: this.state.redirectUrl,
                            required: !0,
                            type: c.Ta.Text,
                            onChange: this.setRedirectUrl,
                            "data-test-selector": "app-form-redirect-input"
                        }))), n.createElement(c.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, n.createElement(c.Ea, {
                            label: Object(s.d)("Category", "DevAppForm")
                        }, n.createElement(c.zb, {
                            defaultValue: this.state.category,
                            onChange: this.setCategory,
                            "data-test-selector": "app-form-category-select"
                        }, n.createElement("option", {
                            key: "0",
                            value: "",
                            disabled: !0
                        }, Object(s.d)("Please select a category", "DevAppForm")), e))), t, this.renderExistingAppDetails(), this.renderAppSecret(), a))))
                    }, t
                }(n.Component),
                f = Object(o.compose)(Object(i.b)("DevAppForm", {
                    autoReportInteractive: !0
                }))(g);
            r.d(t, !1, function() {
                return "app-form-category-select"
            }), r.d(t, !1, function() {
                return u
            }), r.d(t, !1, function() {
                return d
            }), r.d(t, !1, function() {
                return m
            }), r.d(t, !1, function() {
                return "app-form-name-input"
            }), r.d(t, !1, function() {
                return "app-form-redirect-input"
            }), r.d(t, !1, function() {
                return h
            }), r.d(t, !1, function() {
                return g
            }), r.d(t, "a", function() {
                return f
            })
        }
    }
]);