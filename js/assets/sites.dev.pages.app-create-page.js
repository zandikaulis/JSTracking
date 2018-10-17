(window.webpackJsonp = window.webpackJsonp || []).push([
    [202], {
        OfRZ: function(e, t, r) {
            "use strict";
            r.r(t);
            var a = r("mrSG"),
                n = r("q1tI"),
                o = r("oJmH"),
                i = r("9C/b"),
                s = r("V+GM"),
                c = r("Svt6"),
                p = r("NvVO"),
                l = r("2xye"),
                u = r("GnwI"),
                m = r("1mFg"),
                d = r("coZW"),
                h = r("Ue10"),
                g = r("/7QA"),
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
                            type: h.Ob.H2
                        }, Object(g.d)("Register Your Application", "DevCreateApp"))), n.createElement(h.W, {
                            type: h.Ob.P
                        }, Object(g.d)("Register a new application that uses the Twitch API to interact with Twitch", "DevCreateApp")))), n.createElement(f.a, {
                            onSave: this.props.onSave,
                            categories: this.props.categories,
                            errorMessage: this.props.errorMessage,
                            onFormChange: this.props.onFormChange
                        }))
                    }, t
                }(n.Component),
                y = Object(u.b)("DevAppCreateComponent")(v),
                b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            categories: [],
                            errorMessage: null
                        }, t.onFormChange = function() {
                            t.setState({
                                errorMessage: ""
                            })
                        }, t.fetchCategories = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return a.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 4, , 5]), [4, Object(m.a)(c.a + "/kraken/app_categories")];
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
                        }, t.onSave = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, r;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return [4, Object(m.a)(c.a + "/kraken/apps", {
                                                method: "POST",
                                                body: JSON.stringify(e)
                                            })];
                                        case 1:
                                            return 200 !== (t = a.sent()).status ? [3, 2] : (Object(d.d)(d.a.CreateApp), this.props.history.push("/console/apps"), [3, 4]);
                                        case 2:
                                            return [4, t.json()];
                                        case 3:
                                            (r = a.sent()) && this.setState({
                                                errorMessage: r.message
                                            }), a.label = 4;
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.fetchCategories()
                    }, t.prototype.render = function() {
                        return this.state.categories ? n.createElement(y, {
                            categories: this.state.categories,
                            onSave: this.onSave,
                            errorMessage: this.state.errorMessage,
                            onFormChange: this.onFormChange
                        }) : n.createElement(h.Za, {
                            fillContent: !0
                        })
                    }, t
                }(n.Component),
                E = Object(o.compose)(i.a, Object(u.b)("DevAppCreatePage", {
                    destination: p.a.DevSiteAppCreate
                }), Object(s.a)({
                    location: l.PageviewLocation.DevSiteAppCreate
                }))(b);
            r.d(t, "DevAppCreateContainer", function() {
                return b
            }), r.d(t, "DevAppCreatePage", function() {
                return E
            })
        },
        RDVj: function(e, t, r) {},
        "V+GM": function(e, t, r) {
            "use strict";
            var a = r("mrSG"),
                n = r("cr+I"),
                o = r("q1tI"),
                i = r("wIs1"),
                s = r("/7QA");

            function c(e) {
                return function(t) {
                    var r = function(r) {
                        function i(t) {
                            var n = r.call(this, t) || this;
                            return n.tracked = !1, n.referenceTracking = {}, n.trackPageview = function() {
                                if (!(n.tracked || e.skip && e.skip(n.props))) {
                                    n.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(n.props) : e.properties && (t = a.__assign({}, e.properties));
                                    var r = a.__assign({}, n.props);
                                    r.location && r.location.state && (t.medium = r.location.state.medium, t.content = r.location.state.content, t.content_index = r.location.state.content_index, t.email_id = r.location.state.email_id);
                                    var o = n.referenceTracking,
                                        i = o.content,
                                        c = o.medium,
                                        p = o.content_index,
                                        l = o.email_id;
                                    s.p.tracking.trackPageview(a.__assign({
                                        content: i,
                                        medium: c,
                                        content_index: p,
                                        email_id: l,
                                        location: e.location
                                    }, t))
                                }
                            }, s.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), n
                        }
                        return a.__extends(i, r), i.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, r) {
                                "REPLACE" !== r && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, i.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, i.prototype.render = function() {
                            return o.createElement(t, a.__assign({}, this.props))
                        }, i.prototype.stripTTParams = function(e) {
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
                        }, i
                    }(o.Component);
                    return Object(i.a)(r)
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
                i = r("/7QA"),
                s = r("GnwI"),
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
                            type: c.Ob.H5
                        }, Object(i.d)("Client Secret", "DevAppSecret"))), n.createElement(c.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, n.createElement(c.W, {
                            type: c.Ob.P,
                            color: c.O.Alt2
                        }, Object(i.d)("Passed to the token exchange endpoints to obtain a token. You must keep this confidential.", "DevAppSecret"))), this.props.showSecret && n.createElement(c.Xa, {
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
                        }, Object(i.d)("New Secret", "DevAppSecret")))
                    }, t
                }(n.Component),
                l = Object(s.b)("DevAppSecret", {
                    autoReportInteractive: !0
                })(p),
                u = (r("RDVj"), "app-form-other-category-input"),
                m = "app-form-extended-information",
                d = "app-form-submit-button",
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
                            e = t.props.succeeded ? Object(i.d)("Success", "DevAppForm") : t.props.app ? Object(i.d)("Save", "DevAppForm") : Object(i.d)("Create", "DevAppForm");
                            var r = t.props.succeeded ? c.F.Success : c.F.Default;
                            return n.createElement(c.z, {
                                disabled: !t.state.formValid,
                                onClick: t.onSave,
                                "data-test-selector": d,
                                type: r
                            }, e)
                        }, t.renderOtherCategoryField = function() {
                            return n.createElement(c.Xa, {
                                margin: {
                                    bottom: 1
                                }
                            }, n.createElement(c.Ea, {
                                label: Object(i.d)("Other Details", "AppForm"),
                                hint: Object(i.d)("Developing something not in our list? Tell us about it!", "DevAppForm")
                            }, n.createElement(c.Ra, {
                                value: t.state.categoryOther,
                                type: c.Ta.Text,
                                onChange: t.setCategoryOther,
                                "data-test-selector": u
                            })))
                        }, t.renderExistingAppDetails = function() {
                            if (t.props.app) return n.createElement(c.Xa, {
                                "data-test-selector": m
                            }, n.createElement(c.Xa, {
                                margin: {
                                    bottom: 1
                                }
                            }, n.createElement(c.Ea, {
                                label: Object(i.d)("Client ID", "AppForm"),
                                hint: Object(i.d)("Passed to authorization endpoints to identify your application. You cannot change your application's client id.", "DevAppForm")
                            }, n.createElement(c.Ra, {
                                value: t.state.id,
                                readOnly: !0,
                                type: c.Ta.Text,
                                "data-test-selector": u
                            }))))
                        }, t.isClientNameInvalidError = function() {
                            return "client name invalid" === t.props.errorMessage
                        }, t.clientNameInvalidErrorMessage = function() {
                            return t.isClientNameInvalidError ? Object(i.d)('Your application may not contain the word "Twitch".', "DevAppForm") : ""
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
                                return t.isClientNameInvalidError() && (e = Object(i.d)("We could not create the application due to an error with the fields below.", "DevAppForm")), n.createElement(c.Xa, {
                                    margin: {
                                        bottom: 1
                                    },
                                    padding: 1,
                                    "data-test-selector": h
                                }, n.createElement(c.Na, {
                                    type: c.Oa.Error,
                                    title: e || "",
                                    narrow: !0,
                                    description: Object(i.d)("Please try again", "DevAppForm"),
                                    closeButtonAriaLabel: Object(i.d)("Dismiss", "DevAppForm"),
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
                            label: Object(i.d)("Name", "DevAppForm"),
                            hint: Object(i.d)("Displayed to users when authorizing your application.", "DevAppForm"),
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
                            label: Object(i.d)("OAuth Redirect URL", "DevAppForm"),
                            hint: Object(i.d)("Will receive the result of all client authorizations: either an access token or a failure message. This must exactly match the redirect_uri parameter passed to the authorization endpoint. When testing locally, you can set this to http://localhost.", "DevAppForm")
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
                            label: Object(i.d)("Category", "DevAppForm")
                        }, n.createElement(c.ub, {
                            defaultValue: this.state.category,
                            onChange: this.setCategory,
                            "data-test-selector": "app-form-category-select"
                        }, n.createElement("option", {
                            key: "0",
                            value: "",
                            disabled: !0
                        }, Object(i.d)("Please select a category", "DevAppForm")), e))), t, this.renderExistingAppDetails(), this.renderAppSecret(), a))))
                    }, t
                }(n.Component),
                f = Object(o.compose)(Object(s.b)("DevAppForm", {
                    autoReportInteractive: !0
                }))(g);
            r.d(t, !1, function() {
                return "app-form-category-select"
            }), r.d(t, !1, function() {
                return u
            }), r.d(t, !1, function() {
                return m
            }), r.d(t, !1, function() {
                return d
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