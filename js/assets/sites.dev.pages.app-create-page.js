webpackJsonp([112], {
    "9u8h": function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return i
        });
        var n = r("TToO"),
            o = r("6sO2"),
            a = r("Aj/L"),
            i = function() {
                function e() {}
                return e.get = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.request(e, n.__assign({}, t, {
                                        method: "GET"
                                    }), r)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, e.getOrThrow = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                        method: "GET"
                                    }), r)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.request(e, n.__assign({}, t, {
                                        method: "PUT"
                                    }), r)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, e.putOrThrow = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                        method: "PUT"
                                    }), r)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.request(e, n.__assign({}, t, {
                                        method: "POST"
                                    }), r)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, e.postOrThrow = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                        method: "POST"
                                    }), r)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.request(e, n.__assign({}, t, {
                                        method: "DELETE"
                                    }), r)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, e.deleteOrThrow = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                        method: "DELETE"
                                    }), r)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        var o, a, i, s;
                        return n.__generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return t = this.constructOptions(t, r), o = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, o), i = n.__assign({}, t, {
                                        body: a
                                    }), [4, this._fetch(e, i)];
                                case 1:
                                    return s = c.sent(), [4, this.constructLegacyAPIResponse(s)];
                                case 2:
                                    return [2, c.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        var o, a;
                        return n.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, this.request(e, t, r)];
                                case 1:
                                    if ((o = i.sent()).error || o.requestError) throw new Error("Error while making request");
                                    return a = n.__assign({}, o, {
                                        body: o.body
                                    }), [2, Promise.resolve(a)];
                                case 2:
                                    throw i.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, o.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var t, r, o, a;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return r = n.sent(), e.ok ? t.body = r : t.error = r, [3, 4];
                                case 3:
                                    return o = n.sent(), e.headers && e.headers.get && (a = e.headers.get("Content-Type")) && -1 !== a.indexOf("application/json") && (t.requestError = o), [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, fetch(this.getAPIURL(e).toString(), t)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.constructOptions = function(e, t) {
                    return e = Object.assign({}, e, {
                        headers: n.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                        contentType: t
                    }), null) : null
                }, e.getDefaultHeaders = function(e, t) {
                    var r = o.o.store.getState(),
                        n = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": o.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (n["Content-Type"] = "application/json; charset=UTF-8");
                    var i = Object(a.c)(r);
                    return i && (n.Authorization = "OAuth " + i.authToken, i.legacyCSRFToken && (n["Twitch-Api-Token"] = i.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        n[e] && delete n[e]
                    }), n
                }, e.logger = o.o.logger.withCategory("legacy-api"), e
            }()
    },
    TldM: function(e, t) {},
    dadB: function(e, t, r) {
        "use strict";
        var n = r("TToO"),
            o = r("GiK3"),
            a = r("2KeS"),
            i = r("6sO2"),
            s = r("CSlQ"),
            c = r("Odds"),
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.resetSecret = function(e) {
                        e.preventDefault(), t.props.onResetSecret && t.props.onResetSecret()
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(c._8, {
                        margin: {
                            bottom: 1
                        },
                        className: "dev-app-secret"
                    }, o.createElement(c._2, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(c.Q, {
                        type: c._46.H5
                    }, Object(i.d)("Client Secret", "DevAppSecret"))), o.createElement(c._2, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(c.Q, {
                        type: c._46.P,
                        color: c.K.Alt2
                    }, Object(i.d)("Passed to the token exchange endpoints to obtain a token. You must keep this confidential.", "DevAppSecret"))), this.props.showSecret && o.createElement(c._8, {
                        margin: {
                            bottom: 1
                        },
                        padding: {
                            x: 1
                        },
                        className: "dev-app-secret__secret"
                    }, this.props.secret), o.createElement(c.v, {
                        onClick: this.resetSecret,
                        "data-test-selector": "app-form-reset-secret-button"
                    }, Object(i.d)("New Secret", "DevAppSecret")))
                }, t
            }(o.Component),
            u = Object(s.d)("DevAppSecret", {
                autoReportInteractive: !0
            })(p),
            d = (r("TldM"), "app-form-other-category-input"),
            l = "app-form-extended-information",
            h = "app-form-submit-button",
            m = function(e) {
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
                        e = t.props.succeeded ? Object(i.d)("Success", "DevAppForm") : t.props.app ? Object(i.d)("Save", "DevAppForm") : Object(i.d)("Create", "DevAppForm");
                        var r = t.props.succeeded ? c.B.Success : c.B.Default;
                        return o.createElement(c.v, {
                            disabled: !t.state.formValid,
                            onClick: t.onSave,
                            "data-test-selector": h,
                            type: r
                        }, e)
                    }, t.renderOtherCategoryField = function() {
                        return o.createElement(c._8, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(c.W, {
                            label: Object(i.d)("Other Details", "AppForm"),
                            hint: Object(i.d)("Developing something not in our list? Tell us about it!", "DevAppForm")
                        }, o.createElement(c._4, {
                            value: t.state.categoryOther,
                            type: c._5.Text,
                            onChange: t.setCategoryOther,
                            "data-test-selector": d
                        })))
                    }, t.renderExistingAppDetails = function() {
                        if (t.props.app) return o.createElement(c._8, {
                            "data-test-selector": l
                        }, o.createElement(c._8, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(c.W, {
                            label: Object(i.d)("Client ID", "AppForm"),
                            hint: Object(i.d)("Passed to authorization endpoints to identify your application. You cannot change your application's client id.", "DevAppForm")
                        }, o.createElement(c._4, {
                            value: t.state.id,
                            disabled: !0,
                            type: c._5.Text,
                            "data-test-selector": d
                        }))))
                    }, t.renderAppSecret = function() {
                        if (t.props.app) return o.createElement(u, {
                            showSecret: !!t.props.secret,
                            secret: t.props.secret,
                            onResetSecret: t.props.onResetSecret
                        })
                    }, t.renderErrorMessage = function() {
                        if (t.props.errorMessage) return o.createElement(c._8, {
                            className: "dev-app-form__error-message",
                            margin: {
                                bottom: 1
                            },
                            padding: 1
                        }, o.createElement(c._8, {
                            margin: {
                                bottom: .5
                            }
                        }, o.createElement(c.Q, {
                            type: c._46.H4
                        }, "Error")), o.createElement(c.Q, {
                            type: c._46.P
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
                            return o.createElement("option", {
                                value: e.id,
                                key: e.id
                            }, e.name)
                        }),
                        t = null;
                    "9" === this.state.category && (t = this.renderOtherCategoryField());
                    var r = this.renderErrorMessage(),
                        n = this.renderSaveButton();
                    return o.createElement(c._8, {
                        className: "dev-app-form"
                    }, o.createElement(c.Y, null, o.createElement(c.L, {
                        cols: {
                            default: 12,
                            md: 7
                        }
                    }, r, o.createElement("form", null, o.createElement(c._8, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(c.W, {
                        label: Object(i.d)("Name", "DevAppForm"),
                        hint: Object(i.d)("Displayed to users when authorizing your application.", "DevAppForm")
                    }, o.createElement(c._4, {
                        value: this.state.name,
                        required: !0,
                        type: c._5.Text,
                        onChange: this.setName,
                        "data-test-selector": "app-form-name-input"
                    }))), o.createElement(c._8, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(c.W, {
                        label: Object(i.d)("OAuth Redirect URL", "DevAppForm"),
                        hint: Object(i.d)("Will receive the result of all client authorizations: either an access token or a failure message. This must exactly match the redirect_uri parameter passed to the authorization endpoint. When testing locally, you can set this to http://localhost.", "DevAppForm")
                    }, o.createElement(c._4, {
                        value: this.state.redirectUrl,
                        required: !0,
                        type: c._5.Text,
                        onChange: this.setRedirectUrl,
                        "data-test-selector": "app-form-redirect-input"
                    }))), o.createElement(c._8, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(c.W, {
                        label: Object(i.d)("Category", "DevAppForm")
                    }, o.createElement(c._28, {
                        defaultValue: this.state.category,
                        onChange: this.setCategory,
                        "data-test-selector": "app-form-category-select"
                    }, o.createElement("option", {
                        key: "0",
                        value: "",
                        disabled: !0
                    }, Object(i.d)("Please select a category", "DevAppForm")), e))), t, this.renderExistingAppDetails(), this.renderAppSecret(), n))))
                }, t
            }(o.Component),
            g = Object(a.d)(Object(s.d)("DevAppForm", {
                autoReportInteractive: !0
            }))(m);
        r.d(t, !1, function() {
            return "app-form-category-select"
        }), r.d(t, !1, function() {
            return d
        }), r.d(t, !1, function() {
            return l
        }), r.d(t, !1, function() {
            return h
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
            o = r("OAwv"),
            a = r("GiK3"),
            i = r("F8kA"),
            s = r("6sO2");

        function c(e) {
            return function(t) {
                var r = function(r) {
                    function i(t) {
                        var o = r.call(this, t) || this;
                        return o.tracked = !1, o.referenceTracking = {}, o.trackPageview = function() {
                            if (!(o.tracked || e.skip && e.skip(o.props))) {
                                o.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(o.props) : e.properties && (t = n.__assign({}, e.properties));
                                var r = n.__assign({}, o.props);
                                r.location && r.location.state && (t.medium = r.location.state.medium, t.content = r.location.state.content, t.content_index = r.location.state.content_index);
                                var a = o.referenceTracking,
                                    i = a.content,
                                    c = a.medium,
                                    p = a.content_index;
                                s.o.tracking.trackPageview(n.__assign({
                                    content: i,
                                    medium: c,
                                    content_index: p,
                                    location: e.location
                                }, t))
                            }
                        }, s.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), o
                    }
                    return n.__extends(i, r), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, r) {
                            "REPLACE" !== r && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return a.createElement(t, n.__assign({}, this.props))
                    }, i.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? o.parse(e.search) : {},
                            r = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, r.medium || r.content) {
                            var n = "",
                                a = o.stringify(t);
                            a.length > 0 && (n = "?" + a), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: n
                            })
                        }
                        return r
                    }, i
                }(a.Component);
                return Object(i.f)(r)
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
            o = r("GiK3"),
            a = r("CIox"),
            i = r("j7/Y"),
            s = r("w9tK"),
            c = r("9u8h"),
            p = r("vH/s"),
            u = r("CSlQ"),
            d = r("Odds"),
            l = r("6sO2"),
            h = r("dadB"),
            m = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(d._8, null, o.createElement(d._2, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement("header", null, o.createElement(d._2, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(d.Q, {
                        type: d._46.H2
                    }, Object(l.d)("Register Your Application", "DevCreateApp"))), o.createElement(d.Q, {
                        type: d._46.P
                    }, Object(l.d)("Register a new application that uses the Twitch API to interact with Twitch", "DevCreateApp")))), o.createElement(h.a, {
                        onSave: this.props.onSave,
                        categories: this.props.categories,
                        errorMessage: this.props.errorMessage
                    }))
                }, t
            }(o.Component),
            g = Object(u.d)("DevAppCreateComponent")(m),
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        categories: [],
                        errorMessage: null
                    }, t.fetchCategories = function() {
                        return n.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return n.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), [4, c.a.get("/kraken/app_categories")];
                                    case 1:
                                        return 200 === (e = t.sent()).status && e.body && this.setState({
                                            categories: e.body.categories
                                        }), [3, 3];
                                    case 2:
                                        return t.sent(), this.setState({
                                            categories: []
                                        }), [3, 3];
                                    case 3:
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
                                        return [4, c.a.post("/kraken/apps", {
                                            body: e
                                        })];
                                    case 1:
                                        return 200 === (t = n.sent()).status ? this.props.history.push("/console/apps") : t.error && (r = t.error.message, this.setState({
                                            errorMessage: r
                                        })), [2]
                                }
                            })
                        })
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.fetchCategories()
                }, t.prototype.render = function() {
                    return this.state.categories ? o.createElement(g, {
                        categories: this.state.categories,
                        onSave: this.onSave,
                        errorMessage: this.state.errorMessage
                    }) : o.createElement(d._10, {
                        fillContent: !0
                    })
                }, t = n.__decorate([Object(u.d)("DevAppCreatePage", {
                    destination: s.a.DevSiteAppCreate
                }), Object(i.a)({
                    location: p.PageviewLocation.DevSiteAppCreate
                })], t)
            }(o.Component),
            _ = Object(a.f)(f);
        r.d(t, "DevAppCreatePage", function() {
            return _
        })
    }
});
//# sourceMappingURL=sites.dev.pages.app-create-page-aa7ca694b517b6ed21be943b8a2f0c0e.js.map