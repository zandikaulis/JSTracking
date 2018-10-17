(window.webpackJsonp = window.webpackJsonp || []).push([
    [104], {
        "3lt/": function(e, t, a) {
            "use strict";
            a("mrSG"), a("uhBA");
            var n = a("L9xt");
            a.o(n, "PageviewContent") && a.d(t, "PageviewContent", function() {
                return n.PageviewContent
            }), a.o(n, "PageviewLocation") && a.d(t, "PageviewLocation", function() {
                return n.PageviewLocation
            }), a.o(n, "PageviewMedium") && a.d(t, "PageviewMedium", function() {
                return n.PageviewMedium
            }), a.o(n, "SpadeEventType") && a.d(t, "SpadeEventType", function() {
                return n.SpadeEventType
            })
        },
        AeNN: function(e, t, a) {
            "use strict";
            a.r(t);
            var n, s = a("mrSG"),
                r = a("q1tI"),
                o = a("/MKj"),
                c = a("fvjX"),
                i = a("/7QA"),
                m = a("V+GM"),
                u = a("Svt6"),
                l = a("NvVO"),
                p = a("kRBY"),
                g = a("GnwI"),
                d = a("1mFg"),
                h = a("dEJ+"),
                y = a("Dtp2"),
                v = a("3lt/"),
                f = a("mLw1");
            ! function(e) {
                e.Developer = "1", e.Publisher = "2", e.Other = "3"
            }(n || (n = {}));
            var b = a("GD6M"),
                E = a("Ue10"),
                S = "company-request-access-form-company-name",
                C = "company-request-access-form-company-website",
                T = "company-request-access-form-industry",
                _ = "company-request-access-form-company-size",
                R = "company-request-access-form-city",
                q = "company-request-access-form-state",
                w = "company-request-access-form-country",
                O = "company-request-form-contact-first-name",
                j = "company-request-form-contact-last-name",
                k = "company-request-form-contact-title",
                D = "company-request-form-contact-email",
                G = "company-request-form-product-interest",
                A = "company-request-form-join-reason",
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            companyName: "",
                            companyWebsite: "",
                            companyType: n.Developer,
                            industry: "",
                            companySize: "",
                            city: "",
                            state: "",
                            country: "",
                            contactFirstName: "",
                            contactLastName: "",
                            contactTitle: "",
                            contactEmail: "",
                            productInterest: "",
                            joinReason: "",
                            games: [],
                            formValid: !1,
                            submitted: !1
                        }, t.onSubmit = function(e) {
                            e.preventDefault();
                            var a = {
                                companyName: t.state.companyName,
                                companyUrl: t.state.companyWebsite,
                                companyType: t.state.companyType,
                                games: t.state.games,
                                industry: t.state.industry,
                                companySize: t.state.companySize,
                                city: t.state.city,
                                state: t.state.state,
                                country: t.state.country,
                                contactFirstName: t.state.contactFirstName,
                                contactLastName: t.state.contactLastName,
                                contactTitle: t.state.contactTitle,
                                contactEmail: t.state.contactEmail,
                                productInterest: t.state.productInterest,
                                joinReason: t.state.joinReason
                            };
                            t.props.onSubmit(a), t.setState({
                                submitted: !0
                            })
                        }, t.onGameSelect = function(e) {
                            t.setState({
                                games: e
                            }, t.validateForm)
                        }, t.setCompanyName = function(e) {
                            t.setState({
                                companyName: e.target.value
                            }, t.validateForm)
                        }, t.setCompanyWebsite = function(e) {
                            t.setState({
                                companyWebsite: e.target.value
                            }, t.validateForm)
                        }, t.setCompanyType = function(e) {
                            t.setState({
                                companyType: e.target.value
                            }, t.validateForm)
                        }, t.setIndustry = function(e) {
                            t.setState({
                                industry: e.target.value
                            }, t.validateForm)
                        }, t.setCompanySize = function(e) {
                            t.setState({
                                companySize: e.target.value
                            }, t.validateForm)
                        }, t.setCity = function(e) {
                            t.setState({
                                city: e.target.value
                            }, t.validateForm)
                        }, t.setFormState = function(e) {
                            t.setState({
                                state: e.target.value
                            }, t.validateForm)
                        }, t.setCountry = function(e) {
                            t.setState({
                                country: e.target.value
                            }, t.validateForm)
                        }, t.setContactFirstName = function(e) {
                            t.setState({
                                contactFirstName: e.target.value
                            }, t.validateForm)
                        }, t.setcontactLastName = function(e) {
                            t.setState({
                                contactLastName: e.target.value
                            }, t.validateForm)
                        }, t.setContactTitle = function(e) {
                            t.setState({
                                contactTitle: e.target.value
                            }, t.validateForm)
                        }, t.setContactEmail = function(e) {
                            t.setState({
                                contactEmail: e.target.value
                            })
                        }, t.setProductInterest = function(e) {
                            t.setState({
                                productInterest: e.target.value
                            }, t.validateForm)
                        }, t.setJoinReason = function(e) {
                            t.setState({
                                joinReason: e.target.value
                            }, t.validateForm)
                        }, t.validateForm = function() {
                            t.setState(function(e) {
                                return {
                                    formValid: [e.companyName, e.companyWebsite, e.industry, e.companySize, e.city, e.state, e.country, e.contactFirstName, e.contactLastName, e.contactTitle, e.contactEmail, e.productInterest, e.joinReason].every(function(e) {
                                        return e.length > 0
                                    }) && e.games.length > 0
                                }
                            })
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.submitted ? E.F.Success : E.F.Default;
                        return r.createElement(E.Xa, {
                            className: "company-request-access-form"
                        }, r.createElement(E.Xa, {
                            className: "company-request-access-form__form"
                        }, r.createElement(E.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(E.Ea, {
                            label: Object(i.d)("Company Name", "DevRequestAccess")
                        }, r.createElement(E.Ra, {
                            value: this.state.companyName,
                            required: !0,
                            type: E.Ta.Text,
                            onChange: this.setCompanyName,
                            "data-test-selector": S
                        }))), r.createElement(E.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(E.Ea, {
                            label: Object(i.d)("Company URL", "DevRequestAccess")
                        }, r.createElement(E.Ra, {
                            value: this.state.companyWebsite,
                            required: !0,
                            type: E.Ta.Text,
                            onChange: this.setCompanyWebsite,
                            "data-test-selector": C
                        }))), r.createElement(E.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(E.Ea, {
                            label: Object(i.d)("Company Type", "DevRequestAccess")
                        }, r.createElement(E.Xa, {
                            margin: {
                                y: 1
                            }
                        }, r.createElement(E.lb, {
                            name: "companytype",
                            label: Object(i.d)("Developer", "DevRequestAccess"),
                            value: n.Developer,
                            onChange: this.setCompanyType,
                            checked: this.state.companyType === n.Developer
                        })), r.createElement(E.Xa, {
                            margin: {
                                y: 1
                            }
                        }, r.createElement(E.lb, {
                            name: "companytype",
                            label: Object(i.d)("Publisher", "DevRequestAccess"),
                            value: n.Publisher,
                            onChange: this.setCompanyType,
                            checked: this.state.companyType === n.Publisher
                        })), r.createElement(E.Xa, {
                            margin: {
                                y: 1
                            }
                        }, r.createElement(E.lb, {
                            name: "companytype",
                            label: Object(i.d)("Other", "DevRequestAccess"),
                            value: n.Other,
                            onChange: this.setCompanyType,
                            checked: this.state.companyType === n.Other
                        })))), r.createElement(E.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(E.Ea, {
                            label: Object(i.d)("Games", "DevRequestAccess")
                        }, r.createElement(b.b, {
                            multi: !0,
                            onGameSelect: this.onGameSelect
                        }))), r.createElement(E.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(E.Ea, {
                            label: Object(i.d)("Industry", "DevRequestAccess")
                        }, r.createElement(E.Ra, {
                            value: this.state.industry,
                            required: !0,
                            type: E.Ta.Text,
                            onChange: this.setIndustry,
                            "data-test-selector": T
                        }))), r.createElement(E.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(E.Ea, {
                            label: Object(i.d)("What is the current size of your company?", "DevRequestAccess")
                        }, r.createElement(E.Ra, {
                            value: this.state.companySize,
                            required: !0,
                            type: E.Ta.Text,
                            onChange: this.setCompanySize,
                            "data-test-selector": _
                        }))), r.createElement(E.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(E.Ea, {
                            label: Object(i.d)("City", "DevRequestAccess")
                        }, r.createElement(E.Ra, {
                            value: this.state.city,
                            required: !0,
                            type: E.Ta.Text,
                            onChange: this.setCity,
                            "data-test-selector": R
                        }))), r.createElement(E.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(E.Ea, {
                            label: Object(i.d)("State", "DevRequestAccess")
                        }, r.createElement(E.Ra, {
                            value: this.state.state,
                            required: !0,
                            type: E.Ta.Text,
                            onChange: this.setFormState,
                            "data-test-selector": q
                        }))), r.createElement(E.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(E.Ea, {
                            label: Object(i.d)("Country", "DevRequestAccess")
                        }, r.createElement(E.Ra, {
                            value: this.state.country,
                            required: !0,
                            type: E.Ta.Text,
                            onChange: this.setCountry,
                            "data-test-selector": w
                        }))), r.createElement(E.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(E.Ea, {
                            label: Object(i.d)("First Name", "DevRequestAccess")
                        }, r.createElement(E.Ra, {
                            value: this.state.contactFirstName,
                            required: !0,
                            type: E.Ta.Text,
                            onChange: this.setContactFirstName,
                            "data-test-selector": O
                        }))), r.createElement(E.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(E.Ea, {
                            label: Object(i.d)("Last Name", "DevRequestAccess")
                        }, r.createElement(E.Ra, {
                            value: this.state.contactLastName,
                            required: !0,
                            type: E.Ta.Text,
                            onChange: this.setcontactLastName,
                            "data-test-selector": j
                        }))), r.createElement(E.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(E.Ea, {
                            label: Object(i.d)("Title", "DevRequestAccess")
                        }, r.createElement(E.Ra, {
                            value: this.state.contactTitle,
                            required: !0,
                            type: E.Ta.Text,
                            onChange: this.setContactTitle,
                            "data-test-selector": k
                        }))), r.createElement(E.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(E.Ea, {
                            label: Object(i.d)("Email", "DevRequestAccess"),
                            hint: Object(i.d)("Your Email Address Domain must match the domain of your company", "DevRequestAccess")
                        }, r.createElement(E.Ra, {
                            value: this.state.contactEmail,
                            required: !0,
                            type: E.Ta.Text,
                            onChange: this.setContactEmail,
                            "data-test-selector": D
                        }))), r.createElement(E.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(E.Ea, {
                            label: Object(i.d)("What products are you interested in?", "DevRequestAccess")
                        }, r.createElement(E.Ra, {
                            value: this.state.productInterest,
                            required: !0,
                            type: E.Ta.Text,
                            onChange: this.setProductInterest,
                            "data-test-selector": G
                        }))), r.createElement(E.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(E.Ea, {
                            label: Object(i.d)("What brought you to Twitch?", "DevRequestAccess")
                        }, r.createElement(E.Ra, {
                            value: this.state.joinReason,
                            required: !0,
                            type: E.Ta.Text,
                            onChange: this.setJoinReason,
                            "data-test-selector": A
                        })))), r.createElement(E.z, {
                            onClick: this.onSubmit,
                            disabled: !this.state.formValid,
                            type: e
                        }, Object(i.d)("Submit", "DevRequestAccess")))
                    }, t
                }(r.Component),
                F = Object(c.compose)(Object(g.b)("DevRequestAccessForm", {
                    autoReportInteractive: !0
                }))(N),
                x = "request-access-form-error",
                I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderErrorMessage = function() {
                            if (t.props.errorMessage) return r.createElement(E.Xa, {
                                "data-test-selector": x,
                                className: "dev-company-request-access__error-message",
                                margin: {
                                    bottom: 1
                                },
                                padding: 1
                            }, r.createElement(E.Xa, {
                                margin: {
                                    bottom: .5
                                }
                            }, r.createElement(E.W, {
                                type: E.Ob.H4
                            }, Object(i.d)("Error", "DevRequestAccess"))), r.createElement(E.W, {
                                type: E.Ob.P
                            }, t.props.errorMessage))
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.isLoggedIn) return r.createElement(f.a, {
                            to: "/login"
                        });
                        if (this.props.company) return r.createElement(f.a, {
                            to: "/company"
                        });
                        var e = null;
                        return this.props.errorMessage && this.props.errorMessage.length && (e = this.renderErrorMessage()), r.createElement(E.Xa, {
                            className: "dev-company-request-access",
                            fullWidth: !0
                        }, r.createElement(E.nb, {
                            centered: !0
                        }, r.createElement(E.Xa, {
                            margin: {
                                x: 2,
                                y: 1
                            }
                        }, r.createElement(E.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement("header", null, r.createElement(E.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(E.W, {
                            type: E.Ob.H2
                        }, Object(i.d)("Register your company and game with Twitch", "DevRequestAccess"))), r.createElement(E.W, {
                            type: E.Ob.P
                        }, Object(i.d)("The Twitch Developer Console helps you to link and manage your games and their assets on Twitch. Before providing access, we just need to capture some simple details. We will need to confirm that you are authorized for the company you specify. Communications will be sent to the email you have on file with your Twitch.tv account.", "DevRequestAccess")))), r.createElement(E.Ja, null, r.createElement(E.P, {
                            cols: {
                                default: 12,
                                md: 9,
                                lg: 6
                            }
                        }, e, r.createElement(F, {
                            onSubmit: this.props.onSubmit
                        }))))))
                    }, t
                }(r.Component),
                X = Object(c.compose)(Object(g.b)("DevCompanyRequestAccess", {
                    autoReportInteractive: !0
                }))(I);
            var L = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: ""
                        }, t.handleApplicationSubmit = function(e) {
                            return s.__awaiter(t, void 0, void 0, function() {
                                var t, a, n;
                                return s.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            t = Object(y.a)(e), s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 6, , 7]), [4, Object(d.a)(u.a + "/v5/rbac/companies/applications", {
                                                body: JSON.stringify(t),
                                                method: "POST"
                                            })];
                                        case 2:
                                            return 200 !== (a = s.sent()).status ? [3, 3] : (i.p.history.push("/access-pending"), [3, 5]);
                                        case 3:
                                            return [4, a.json()];
                                        case 4:
                                            n = s.sent(), this.setState({
                                                error: n.message
                                            }), s.label = 5;
                                        case 5:
                                            return [3, 7];
                                        case 6:
                                            return s.sent(), this.setState({
                                                error: "Failed to submit application"
                                            }), [3, 7];
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(X, {
                            isLoggedIn: this.props.isLoggedIn,
                            onSubmit: this.handleApplicationSubmit,
                            errorMessage: this.state.error,
                            company: this.props.company
                        })
                    }, t
                }(r.Component),
                P = Object(c.compose)(Object(o.connect)(function(e) {
                    return {
                        isLoggedIn: Object(p.f)(e),
                        company: Object(h.c)(e)
                    }
                }), Object(g.b)("DevCompanyRequest", {
                    autoReportInteractive: !0,
                    destination: l.a.DevSiteRequestAccess
                }), Object(m.a)({
                    location: v.PageviewLocation.DevSiteRequestCompanyAccess
                }))(L);
            a.d(t, "DevCompanyRequestAccessContainer", function() {
                return L
            }), a.d(t, "DevCompanyRequestAccessPage", function() {
                return P
            })
        },
        GD6M: function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                s = a("q1tI"),
                r = a("fvjX"),
                o = a("u5aL"),
                c = a("GnwI"),
                i = a("Ue10"),
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            e.preventDefault(), t.props.onClick(t.props.game)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(i.Ua, {
                            onClick: this.onClick
                        }, s.createElement(i.Xa, {
                            padding: 1
                        }, s.createElement(i.W, null, this.props.game.name)))
                    }, t
                }(s.Component),
                u = Object(r.compose)(Object(c.b)("DevGameSuggestion", {
                    autoReportInteractive: !0
                }))(m),
                l = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function() {
                            t.props.onLabelRemove(t.props.game)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(i.Hb, {
                            onClick: this.onClick,
                            label: this.props.game.name
                        })
                    }, t
                }(s.Component),
                p = 100,
                g = "GAME_SEARCH_INPUT_SELECTOR",
                d = function(e) {
                    function t(t) {
                        var a = e.call(this, t) || this;
                        return a.state = {
                            searchTerm: "",
                            showSuggestions: !1,
                            games: []
                        }, a.onGameSearch = function(e) {
                            e.preventDefault(), a.setState({
                                searchTerm: e.target.value,
                                showSuggestions: e.target.value.length > 0
                            }, function() {
                                a.inputTimer && (clearTimeout(a.inputTimer), a.inputTimer = 0), a.inputTimer = setTimeout(function() {
                                    return a.props.onInputChange(a.state.searchTerm)
                                }, p)
                            })
                        }, a.onClickOut = function() {
                            a.setState({
                                showSuggestions: !1
                            })
                        }, a.onFocus = function(e) {
                            e.preventDefault(), a.props.gameSuggestions.length && a.setState({
                                showSuggestions: !0
                            })
                        }, a.onLabelClick = function(e) {
                            a.setState(function(t) {
                                var a = t.games.findIndex(function(t) {
                                    return t._id === e._id
                                });
                                return a > -1 ? {
                                    games: t.games.slice(0, a).concat(t.games.slice(a + 1))
                                } : {
                                    games: t.games
                                }
                            }, a.reportGames)
                        }, a.renderSuggestions = function() {
                            return a.props.gameSuggestions.map(function(e, t) {
                                return s.createElement(u, {
                                    key: t,
                                    game: e,
                                    onClick: a.onSuggestionClick
                                })
                            })
                        }, a.renderSelections = function() {
                            return a.state.games.map(function(e, t) {
                                return s.createElement(i.Xa, {
                                    display: i.X.InlineBlock,
                                    padding: {
                                        right: .5
                                    }
                                }, s.createElement(l, {
                                    game: e,
                                    key: t,
                                    onLabelRemove: a.onLabelClick
                                }))
                            })
                        }, a.onSuggestionClick = function(e) {
                            a.props.multi ? a.setState(function(t) {
                                return t.games.some(function(t) {
                                    return t._id === e._id
                                }) ? {
                                    games: t.games,
                                    showSuggestions: !1,
                                    searchTerm: ""
                                } : {
                                    games: t.games.concat([e]),
                                    showSuggestions: !1,
                                    searchTerm: ""
                                }
                            }, a.reportGames) : a.setState({
                                games: [e],
                                showSuggestions: !1,
                                searchTerm: ""
                            }, a.reportGames)
                        }, a.reportGames = function() {
                            a.props.onGameSelect(a.state.games)
                        }, a.state.games = t.defaultGames || [], a
                    }
                    return n.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        var t = e.gameSuggestions.length !== this.props.gameSuggestions.length;
                        this.setState(function(a) {
                            return !t && a.showSuggestions || t && e.gameSuggestions.length > 0 ? {
                                showSuggestions: !0
                            } : {
                                showSuggestions: a.showSuggestions
                            }
                        })
                    }, t.prototype.render = function() {
                        var e = this.renderSuggestions(),
                            t = this.renderSelections(),
                            a = !this.props.multi && this.state.games.length > 0;
                        return s.createElement(i.Xa, null, s.createElement(o.a, {
                            onClickOut: this.onClickOut
                        }, s.createElement(i.Xa, {
                            position: i.fb.Relative,
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(i.Ra, {
                            "data-test-selector": g,
                            value: this.state.searchTerm,
                            onChange: this.onGameSearch,
                            type: i.Ta.Text,
                            onFocus: this.onFocus,
                            disabled: a
                        }), s.createElement(i.u, {
                            show: this.state.showSuggestions
                        }, e)), s.createElement(i.Xa, {
                            padding: {
                                bottom: .5
                            }
                        }, t)))
                    }, t
                }(s.Component),
                h = Object(r.compose)(Object(c.b)("DevGameSearch", {
                    autoReportInteractive: !0
                }))(d),
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            games: t.props.games || []
                        }, t.findGames = function(e) {
                            return n.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return n.__generator(this, function(a) {
                                    return e.length ? (t = this.props.games.filter(function(t) {
                                        return t.name.toLowerCase().includes(e.toLowerCase())
                                    }), this.setState({
                                        games: t
                                    }), [2]) : (this.setState({
                                        games: this.props.games
                                    }), [2])
                                })
                            })
                        }, t.onGameSelect = function(e) {
                            t.setState({
                                games: []
                            }), e.length || t.setState({
                                games: t.props.games
                            }), t.props.onGameSelect(e)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(h, {
                            onGameSelect: this.onGameSelect,
                            gameSuggestions: this.state.games,
                            onInputChange: this.findGames,
                            multi: this.props.multi,
                            defaultGames: this.props.defaultGames
                        })
                    }, t
                }(s.Component),
                v = a("Svt6"),
                f = a("+GjP"),
                b = a("1mFg"),
                E = v.a + "/kraken/search/games",
                S = 7,
                C = function(e) {
                    function t(t) {
                        var a = e.call(this, t) || this;
                        return a.state = {
                            games: []
                        }, a.findGames = function(e) {
                            return n.__awaiter(a, void 0, void 0, function() {
                                var t, a, s, r;
                                return n.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 4, , 5]), e.length ? (t = Object(f.e)(E, {
                                                query: e.trim(),
                                                type: "suggest"
                                            }), [4, Object(b.a)(t)]) : (this.setState({
                                                games: []
                                            }), [2]);
                                        case 1:
                                            return a = n.sent(), s = [], 200 !== a.status ? [3, 3] : [4, a.json()];
                                        case 2:
                                            r = n.sent(), s = r.games, n.label = 3;
                                        case 3:
                                            return s = s.slice(0, this.props.limit || S), this.setState({
                                                games: s
                                            }), [3, 5];
                                        case 4:
                                            return n.sent(), this.setState({
                                                games: []
                                            }), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, a.onGameSelect = function(e) {
                            a.setState({
                                games: []
                            }), a.props.onGameSelect(e)
                        }, a.state.games = t.defaultGames || [], a
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(h, {
                            onGameSelect: this.onGameSelect,
                            gameSuggestions: this.state.games,
                            onInputChange: this.findGames,
                            multi: this.props.multi
                        })
                    }, t
                }(s.Component);
            a.d(t, "a", function() {
                return y
            }), a.d(t, "b", function() {
                return C
            })
        },
        "V+GM": function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                s = a("cr+I"),
                r = a("q1tI"),
                o = a("wIs1"),
                c = a("/7QA");

            function i(e) {
                return function(t) {
                    var a = function(a) {
                        function o(t) {
                            var s = a.call(this, t) || this;
                            return s.tracked = !1, s.referenceTracking = {}, s.trackPageview = function() {
                                if (!(s.tracked || e.skip && e.skip(s.props))) {
                                    s.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(s.props) : e.properties && (t = n.__assign({}, e.properties));
                                    var a = n.__assign({}, s.props);
                                    a.location && a.location.state && (t.medium = a.location.state.medium, t.content = a.location.state.content, t.content_index = a.location.state.content_index, t.email_id = a.location.state.email_id);
                                    var r = s.referenceTracking,
                                        o = r.content,
                                        i = r.medium,
                                        m = r.content_index,
                                        u = r.email_id;
                                    c.p.tracking.trackPageview(n.__assign({
                                        content: o,
                                        medium: i,
                                        content_index: m,
                                        email_id: u,
                                        location: e.location
                                    }, t))
                                }
                            }, c.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), s
                        }
                        return n.__extends(o, a), o.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, a) {
                                "REPLACE" !== a && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, o.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, o.prototype.render = function() {
                            return r.createElement(t, n.__assign({}, this.props))
                        }, o.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? s.parse(e.search) : {},
                                a = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, a.medium || a.content || a.email_id) {
                                var n = "",
                                    r = s.stringify(t);
                                r.length > 0 && (n = "?" + r), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: n
                                })
                            }
                            return a
                        }, o
                    }(r.Component);
                    return Object(o.a)(a)
                }
            }
            a.d(t, "a", function() {
                return i
            })
        }
    }
]);