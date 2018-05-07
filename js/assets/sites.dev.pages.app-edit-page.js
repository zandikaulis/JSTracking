webpackJsonp([117], {
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
    "9u8h": function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return s
        });
        var n = r("TToO"),
            a = r("6sO2"),
            o = r("Aj/L"),
            s = function() {
                function e() {}
                return e.get = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, n.__assign({}, t, {
                                        method: "GET"
                                    }), r)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.getOrThrow = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                        method: "GET"
                                    }), r)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, n.__assign({}, t, {
                                        method: "PUT"
                                    }), r)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.putOrThrow = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                        method: "PUT"
                                    }), r)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, n.__assign({}, t, {
                                        method: "POST"
                                    }), r)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.postOrThrow = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                        method: "POST"
                                    }), r)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, n.__assign({}, t, {
                                        method: "DELETE"
                                    }), r)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.deleteOrThrow = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                        method: "DELETE"
                                    }), r)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        var a, o, s, i;
                        return n.__generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return t = this.constructOptions(t, r), a = t.headers ? t.headers["Content-Type"] : void 0, o = this.serialize(t.body, a), s = n.__assign({}, t, {
                                        body: o
                                    }), [4, this._fetch(e, s)];
                                case 1:
                                    return i = c.sent(), [4, this.constructLegacyAPIResponse(i)];
                                case 2:
                                    return [2, c.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        var a, o;
                        return n.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 2, , 3]), [4, this.request(e, t, r)];
                                case 1:
                                    if ((a = s.sent()).error || a.requestError) throw new Error("Error while making request");
                                    return o = n.__assign({}, a, {
                                        body: a.body
                                    }), [2, Promise.resolve(o)];
                                case 2:
                                    throw s.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, a.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var t, r, a, o;
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
                                    return a = n.sent(), e.headers && e.headers.get && (o = e.headers.get("Content-Type")) && -1 !== o.indexOf("application/json") && (t.requestError = a), [3, 4];
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
                    var r = a.o.store.getState(),
                        n = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": a.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (n["Content-Type"] = "application/json; charset=UTF-8");
                    var s = Object(o.c)(r);
                    return s && (n.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (n["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        n[e] && delete n[e]
                    }), n
                }, e.logger = a.o.logger.withCategory("legacy-api"), e
            }()
    },
    Az3k: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("TToO"),
            a = r("GiK3"),
            o = r("CIox"),
            s = r("j7/Y"),
            i = r("w9tK"),
            c = r("9u8h"),
            p = r("vH/s"),
            u = r("CSlQ"),
            d = r("o8Qr"),
            l = r("Odds"),
            h = r("2KeS"),
            f = r("6sO2"),
            g = r("dadB"),
            m = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(l._8, null, a.createElement(l._2, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement("header", null, a.createElement(l._2, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(l.Q, {
                        type: l._49.H2
                    }, Object(f.d)("Manage Application: ", "DevAppEdit"), " ", this.props.app.name)), a.createElement(l.Q, {
                        type: l._49.P
                    }, Object(f.d)("Register a new application that uses the Twitch API to interact with Twitch", "DevAppEdit")))), a.createElement(g.a, {
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
            }(a.Component),
            _ = Object(h.d)(Object(u.d)("DevAppEditPageComponent", {
                autoReportInteractive: !0
            }))(m),
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        app: null,
                        categories: [],
                        errorMessage: null,
                        succeeded: !1
                    }, t.loadApp = function() {
                        return n.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return n.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (!(e = this.props.match.params.id)) return [2];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, c.a.get("/kraken/apps/" + e)];
                                    case 2:
                                        return 200 === (t = r.sent()).status && t.body && this.setState({
                                            app: t.body
                                        }), [3, 4];
                                    case 3:
                                        return r.sent(), [2];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.fetchCategories = function() {
                        return n.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return n.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 4, , 5]), [4, Object(d.a)("https://api.twitch.tv/kraken/app_categories")];
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
                        return n.__awaiter(t, void 0, void 0, function() {
                            var t, r, a, o;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        t = this.props.match.params.id, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 7, , 8]), [4, Object(d.a)("https://api.twitch.tv/kraken/apps/" + t, {
                                            method: "PUT",
                                            body: JSON.stringify(e)
                                        })];
                                    case 2:
                                        return 200 !== (r = n.sent()).status ? [3, 4] : [4, r.json()];
                                    case 3:
                                        return (a = n.sent()) && this.setState({
                                            succeeded: !0,
                                            app: a
                                        }), [2];
                                    case 4:
                                        return [4, r.json()];
                                    case 5:
                                        (o = n.sent()) && this.setState({
                                            errorMessage: o.message
                                        }), n.label = 6;
                                    case 6:
                                        return [3, 8];
                                    case 7:
                                        return n.sent(), [2];
                                    case 8:
                                        return [2]
                                }
                            })
                        })
                    }, t.onResetSecret = function() {
                        return n.__awaiter(t, void 0, void 0, function() {
                            var e, t, r;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (e = this.props.match.params.id, !window.confirm("Are you sure you want to generate a new secret?")) return [3, 6];
                                        n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 5, , 6]), [4, Object(d.a)("https://api.twitch.tv/kraken/apps/" + e + "/reset_secret", {
                                            method: "POST"
                                        })];
                                    case 2:
                                        return 200 !== (t = n.sent()).status ? [3, 4] : [4, t.json()];
                                    case 3:
                                        r = n.sent(), this.setState({
                                            secret: r.client_secret
                                        }), n.label = 4;
                                    case 4:
                                        return [3, 6];
                                    case 5:
                                        return n.sent(), [2];
                                    case 6:
                                        return [2]
                                }
                            })
                        })
                    }, t.onFormChange = function() {
                        t.setState({
                            succeeded: !1
                        })
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    return n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(e) {
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
                    return this.state.app && this.state.categories ? a.createElement(_, {
                        app: this.state.app,
                        onUpdate: this.onUpdate,
                        onResetSecret: this.onResetSecret,
                        onFormChange: this.onFormChange,
                        secret: this.state.secret,
                        categories: this.state.categories,
                        errorMessage: this.state.errorMessage,
                        succeeded: this.state.succeeded
                    }) : a.createElement(l._10, {
                        fillContent: !0
                    })
                }, t = n.__decorate([Object(u.d)("DevAppEditPage", {
                    destination: i.a.DevSiteAppEdit
                }), Object(s.a)({
                    location: p.PageviewLocation.DevSiteAppEdit
                })], t)
            }(a.Component),
            y = Object(o.f)(v);
        r.d(t, "DevAppEditContainer", function() {
            return v
        }), r.d(t, "DevAppEditPage", function() {
            return y
        })
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
            u = Object(i.d)("DevAppSecret", {
                autoReportInteractive: !0
            })(p),
            d = (r("TldM"), "app-form-other-category-input"),
            l = "app-form-extended-information",
            h = "app-form-submit-button",
            f = function(e) {
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
                            "data-test-selector": h,
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
                            "data-test-selector": d
                        })))
                    }, t.renderExistingAppDetails = function() {
                        if (t.props.app) return a.createElement(c._8, {
                            "data-test-selector": l
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
                            "data-test-selector": d
                        }))))
                    }, t.renderAppSecret = function() {
                        if (t.props.app) return a.createElement(u, {
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
            }))(f);
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
//# sourceMappingURL=sites.dev.pages.app-edit-page-430523fae7e4f5ba2ddceedd9d5b0d1d.js.map