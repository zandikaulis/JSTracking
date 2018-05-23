webpackJsonp([116], {
    "77kt": function(e, t, r) {
        "use strict";
        t.a = function(e, t) {
            var r, s = a.o.config.authSettings.clientID,
                i = t ? t.headers : {};
            if (Array.isArray(i)) {
                var c = (r = i.slice()).findIndex(function(e) {
                    return "Client-Id" === e[0]
                });
                c >= 0 && r.splice(c, 1), r.push(["Client-Id", s])
            } else i instanceof Headers ? (r = new Headers(i)).set("Client-Id", s) : r = n.__assign({}, i, {
                "Client-Id": s
            });
            return Object(o.a)(e, n.__assign({}, t, {
                headers: r
            }))
        };
        var n = r("TToO"),
            a = r("6sO2"),
            o = r("rYDZ")
    },
    TldM: function(e, t) {},
    dadB: function(e, t, r) {
        "use strict";
        var n = r("TToO"),
            a = r("GiK3"),
            o = r("2KeS"),
            s = r("6sO2"),
            i = r("CSlQ"),
            c = r("Odds"),
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.resetSecret = function(e) {
                        e.preventDefault(), t.props.onResetSecret && t.props.onResetSecret()
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(c._8, {
                        margin: {
                            bottom: 1
                        },
                        className: "dev-app-secret"
                    }, a.createElement(c._2, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(c.Q, {
                        type: c._49.H5
                    }, Object(s.d)("Client Secret", "DevAppSecret"))), a.createElement(c._2, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(c.Q, {
                        type: c._49.P,
                        color: c.K.Alt2
                    }, Object(s.d)("Passed to the token exchange endpoints to obtain a token. You must keep this confidential.", "DevAppSecret"))), this.props.showSecret && a.createElement(c._8, {
                        margin: {
                            bottom: 1
                        },
                        padding: {
                            x: 1
                        },
                        className: "dev-app-secret__secret"
                    }, this.props.secret), a.createElement(c.v, {
                        onClick: this.resetSecret,
                        "data-test-selector": "app-form-reset-secret-button"
                    }, Object(s.d)("New Secret", "DevAppSecret")))
                }, t
            }(a.Component),
            l = Object(i.d)("DevAppSecret", {
                autoReportInteractive: !0
            })(p),
            u = (r("TldM"), "app-form-other-category-input"),
            d = "app-form-extended-information",
            m = "app-form-submit-button",
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        id: t.props.app && t.props.app.id,
                        name: t.props.app && t.props.app.name || "",
                        redirectUrl: t.props.app && t.props.app.redirect_uri || "",
                        category: t.props.app && t.props.app.category_id.toString() || "",
                        categoryOther: t.props.app && t.props.app.category_other || "",
                        formValid: !1
                    }, t.renderSaveButton = function() {
                        var e;
                        e = t.props.succeeded ? Object(s.d)("Success", "DevAppForm") : t.props.app ? Object(s.d)("Save", "DevAppForm") : Object(s.d)("Create", "DevAppForm");
                        var r = t.props.succeeded ? c.B.Success : c.B.Default;
                        return a.createElement(c.v, {
                            disabled: !t.state.formValid,
                            onClick: t.onSave,
                            "data-test-selector": m,
                            type: r
                        }, e)
                    }, t.renderOtherCategoryField = function() {
                        return a.createElement(c._8, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(c.W, {
                            label: Object(s.d)("Other Details", "AppForm"),
                            hint: Object(s.d)("Developing something not in our list? Tell us about it!", "DevAppForm")
                        }, a.createElement(c._4, {
                            value: t.state.categoryOther,
                            type: c._5.Text,
                            onChange: t.setCategoryOther,
                            "data-test-selector": u
                        })))
                    }, t.renderExistingAppDetails = function() {
                        if (t.props.app) return a.createElement(c._8, {
                            "data-test-selector": d
                        }, a.createElement(c._8, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(c.W, {
                            label: Object(s.d)("Client ID", "AppForm"),
                            hint: Object(s.d)("Passed to authorization endpoints to identify your application. You cannot change your application's client id.", "DevAppForm")
                        }, a.createElement(c._4, {
                            value: t.state.id,
                            disabled: !0,
                            type: c._5.Text,
                            "data-test-selector": u
                        }))))
                    }, t.renderAppSecret = function() {
                        if (t.props.app) return a.createElement(l, {
                            showSecret: !!t.props.secret,
                            secret: t.props.secret,
                            onResetSecret: t.props.onResetSecret
                        })
                    }, t.renderErrorMessage = function() {
                        if (t.props.errorMessage) return a.createElement(c._8, {
                            className: "dev-app-form__error-message",
                            margin: {
                                bottom: 1
                            },
                            padding: 1
                        }, a.createElement(c._8, {
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(c.Q, {
                            type: c._49.H4
                        }, "Error")), a.createElement(c.Q, {
                            type: c._49.P
                        }, t.props.errorMessage))
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
                            formValid: e
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
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.categories.map(function(e) {
                            return a.createElement("option", {
                                value: e.id,
                                key: e.id
                            }, e.name)
                        }),
                        t = null;
                    "9" === this.state.category && (t = this.renderOtherCategoryField());
                    var r = this.renderErrorMessage(),
                        n = this.renderSaveButton();
                    return a.createElement(c._8, {
                        className: "dev-app-form"
                    }, a.createElement(c.Y, null, a.createElement(c.L, {
                        cols: {
                            default: 12,
                            md: 7
                        }
                    }, r, a.createElement("form", null, a.createElement(c._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(c.W, {
                        label: Object(s.d)("Name", "DevAppForm"),
                        hint: Object(s.d)("Displayed to users when authorizing your application.", "DevAppForm")
                    }, a.createElement(c._4, {
                        value: this.state.name,
                        required: !0,
                        type: c._5.Text,
                        onChange: this.setName,
                        "data-test-selector": "app-form-name-input"
                    }))), a.createElement(c._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(c.W, {
                        label: Object(s.d)("OAuth Redirect URL", "DevAppForm"),
                        hint: Object(s.d)("Will receive the result of all client authorizations: either an access token or a failure message. This must exactly match the redirect_uri parameter passed to the authorization endpoint. When testing locally, you can set this to http://localhost.", "DevAppForm")
                    }, a.createElement(c._4, {
                        value: this.state.redirectUrl,
                        required: !0,
                        type: c._5.Text,
                        onChange: this.setRedirectUrl,
                        "data-test-selector": "app-form-redirect-input"
                    }))), a.createElement(c._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(c.W, {
                        label: Object(s.d)("Category", "DevAppForm")
                    }, a.createElement(c._30, {
                        defaultValue: this.state.category,
                        onChange: this.setCategory,
                        "data-test-selector": "app-form-category-select"
                    }, a.createElement("option", {
                        key: "0",
                        value: "",
                        disabled: !0
                    }, Object(s.d)("Please select a category", "DevAppForm")), e))), t, this.renderExistingAppDetails(), this.renderAppSecret(), n))))
                }, t
            }(a.Component),
            g = Object(o.d)(Object(i.d)("DevAppForm", {
                autoReportInteractive: !0
            }))(h);
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
        }), r.d(t, "a", function() {
            return g
        })
    },
    "j7/Y": function(e, t, r) {
        "use strict";
        var n = r("TToO"),
            a = r("OAwv"),
            o = r("GiK3"),
            s = r("F8kA"),
            i = r("6sO2");

        function c(e) {
            return function(t) {
                var r = function(r) {
                    function s(t) {
                        var a = r.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = n.__assign({}, e.properties));
                                var r = n.__assign({}, a.props);
                                r.location && r.location.state && (t.medium = r.location.state.medium, t.content = r.location.state.content, t.content_index = r.location.state.content_index);
                                var o = a.referenceTracking,
                                    s = o.content,
                                    c = o.medium,
                                    p = o.content_index;
                                i.o.tracking.trackPageview(n.__assign({
                                    content: s,
                                    medium: c,
                                    content_index: p,
                                    location: e.location
                                }, t))
                            }
                        }, i.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : i.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return n.__extends(s, r), s.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, r) {
                            "REPLACE" !== r && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, s.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, s.prototype.render = function() {
                        return o.createElement(t, n.__assign({}, this.props))
                    }, s.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? a.parse(e.search) : {},
                            r = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, r.medium || r.content) {
                            var n = "",
                                o = a.stringify(t);
                            o.length > 0 && (n = "?" + o), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: n
                            })
                        }
                        return r
                    }, s
                }(o.Component);
                return Object(s.f)(r)
            }
        }
        r.d(t, "a", function() {
            return c
        })
    },
    lEOh: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("TToO"),
            a = r("GiK3"),
            o = r("CIox"),
            s = r("j7/Y"),
            i = r("mIvh"),
            c = r("w9tK"),
            p = r("vH/s"),
            l = r("CSlQ"),
            u = r("o8Qr"),
            d = r("Odds"),
            m = r("6sO2"),
            h = r("dadB"),
            g = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(d._8, null, a.createElement(d._2, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement("header", null, a.createElement(d._2, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(d.Q, {
                        type: d._49.H2
                    }, Object(m.d)("Register Your Application", "DevCreateApp"))), a.createElement(d.Q, {
                        type: d._49.P
                    }, Object(m.d)("Register a new application that uses the Twitch API to interact with Twitch", "DevCreateApp")))), a.createElement(h.a, {
                        onSave: this.props.onSave,
                        categories: this.props.categories,
                        errorMessage: this.props.errorMessage
                    }))
                }, t
            }(a.Component),
            f = Object(l.d)("DevAppCreateComponent")(g),
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        categories: [],
                        errorMessage: null
                    }, t.fetchCategories = function() {
                        return n.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return n.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 4, , 5]), [4, Object(u.a)(i.a + "/kraken/app_categories")];
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
                        return n.__awaiter(t, void 0, void 0, function() {
                            var t, r;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, Object(u.a)(i.a + "/kraken/apps", {
                                            method: "POST",
                                            body: JSON.stringify(e)
                                        })];
                                    case 1:
                                        return 200 !== (t = n.sent()).status ? [3, 2] : (this.props.history.push("/console/apps"), [3, 4]);
                                    case 2:
                                        return [4, t.json()];
                                    case 3:
                                        (r = n.sent()) && this.setState({
                                            errorMessage: r.message
                                        }), n.label = 4;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.fetchCategories()
                }, t.prototype.render = function() {
                    return this.state.categories ? a.createElement(f, {
                        categories: this.state.categories,
                        onSave: this.onSave,
                        errorMessage: this.state.errorMessage
                    }) : a.createElement(d._10, {
                        fillContent: !0
                    })
                }, t = n.__decorate([Object(l.d)("DevAppCreatePage", {
                    destination: c.a.DevSiteAppCreate
                }), Object(s.a)({
                    location: p.PageviewLocation.DevSiteAppCreate
                })], t)
            }(a.Component),
            _ = Object(o.f)(v);
        r.d(t, "DevAppCreatePage", function() {
            return _
        })
    },
    o8Qr: function(e, t, r) {
        "use strict";
        t.a = function(e, t) {
            var r, o = t ? t.headers : {};
            if (Array.isArray(o)) {
                var s = (r = o.slice()).findIndex(function(e) {
                    return "Content-Type" === e[0]
                });
                s >= 0 && r.splice(s, 1), r.push(["Content-Type", "application/json"]);
                var i = r.findIndex(function(e) {
                    return "Accept" === e[0]
                });
                i >= 0 && r.splice(i, 1), r.push(["Accept", "application/vnd.twitchtv.v5+json; charset=UTF-8"])
            } else o instanceof Headers ? ((r = new Headers(o)).set("Content-Type", "application/json"), r.set("Accept", "application/vnd.twitchtv.v5+json; charset=UTF-8")) : r = n.__assign({}, o, {
                "Content-Type": "application/json",
                Accept: "application/vnd.twitchtv.v5+json; charset=UTF-8"
            });
            return Object(a.a)(e, n.__assign({}, t, {
                headers: r
            }))
        };
        var n = r("TToO"),
            a = r("77kt")
    },
    rYDZ: function(e, t, r) {
        "use strict";
        t.a = function(e, t) {
            var r = Object(o.c)(a.o.store.getState());
            if (!r) return fetch(e, t);
            var i, c = t ? t.headers : {};
            if (Array.isArray(c)) {
                var p = (i = c.slice()).findIndex(function(e) {
                    return "Authorization" === e[0]
                });
                p >= 0 && i.splice(p, 1), i.push(["Authorization", s(r)])
            } else c instanceof Headers ? (i = new Headers(c)).set("Authorization", s(r)) : i = n.__assign({}, c, {
                Authorization: s(r)
            });
            return fetch(e, n.__assign({}, t, {
                headers: i
            }))
        };
        var n = r("TToO"),
            a = r("6sO2"),
            o = r("Aj/L");

        function s(e) {
            return "OAuth " + e.authToken
        }
    }
});
//# sourceMappingURL=sites.dev.pages.app-create-page-b8915e61bde2bd99b682e05dd3077e65.js.map