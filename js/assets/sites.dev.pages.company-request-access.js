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
            }), a.o(n, "TwitchDataType") && a.d(t, "TwitchDataType", function() {
                return n.TwitchDataType
            })
        },
        AeNN: function(e, t, a) {
            "use strict";
            a.r(t);
            var n, s = a("mrSG"),
                o = a("q1tI"),
                r = a("/MKj"),
                c = a("fvjX"),
                i = a("/7QA"),
                m = a("V+GM"),
                u = a("Svt6"),
                l = a("NvVO"),
                p = a("kRBY"),
                g = a("GnwI"),
                d = a("1mFg"),
                h = a("haCv"),
                y = a("dEJ+"),
                v = a("Dtp2"),
                f = a("3lt/"),
                b = a("mLw1");
            ! function(e) {
                e.Developer = "1", e.Publisher = "2", e.Other = "3"
            }(n || (n = {}));
            var S = a("GD6M"),
                E = a("Ue10"),
                C = "company-request-access-form-company-name",
                T = "company-request-access-form-company-website",
                _ = "company-request-access-form-industry",
                q = "company-request-access-form-company-size",
                w = "company-request-access-form-city",
                j = "company-request-access-form-state",
                O = "company-request-access-form-country",
                R = "company-request-form-contact-first-name",
                D = "company-request-form-contact-last-name",
                k = "company-request-form-contact-title",
                A = "company-request-form-contact-email",
                G = "company-request-form-product-interest",
                N = "company-request-form-join-reason",
                P = function(e) {
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
                                joinReason: t.state.joinReason,
                                status: 1
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
                        return o.createElement(E.Ya, {
                            className: "company-request-access-form"
                        }, o.createElement(E.Ya, {
                            className: "company-request-access-form__form"
                        }, o.createElement(E.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(E.Ea, {
                            label: Object(i.d)("Company Name", "DevRequestAccess")
                        }, o.createElement(E.Sa, {
                            value: this.state.companyName,
                            required: !0,
                            type: E.Ua.Text,
                            onChange: this.setCompanyName,
                            "data-test-selector": C
                        }))), o.createElement(E.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(E.Ea, {
                            label: Object(i.d)("Company URL", "DevRequestAccess")
                        }, o.createElement(E.Sa, {
                            value: this.state.companyWebsite,
                            required: !0,
                            type: E.Ua.Text,
                            onChange: this.setCompanyWebsite,
                            "data-test-selector": T
                        }))), o.createElement(E.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(E.Ea, {
                            label: Object(i.d)("Company Type", "DevRequestAccess")
                        }, o.createElement(E.Ya, {
                            margin: {
                                y: 1
                            }
                        }, o.createElement(E.qb, {
                            name: "companytype",
                            label: Object(i.d)("Developer", "DevRequestAccess"),
                            value: n.Developer,
                            onChange: this.setCompanyType,
                            checked: this.state.companyType === n.Developer
                        })), o.createElement(E.Ya, {
                            margin: {
                                y: 1
                            }
                        }, o.createElement(E.qb, {
                            name: "companytype",
                            label: Object(i.d)("Publisher", "DevRequestAccess"),
                            value: n.Publisher,
                            onChange: this.setCompanyType,
                            checked: this.state.companyType === n.Publisher
                        })), o.createElement(E.Ya, {
                            margin: {
                                y: 1
                            }
                        }, o.createElement(E.qb, {
                            name: "companytype",
                            label: Object(i.d)("Other", "DevRequestAccess"),
                            value: n.Other,
                            onChange: this.setCompanyType,
                            checked: this.state.companyType === n.Other
                        })))), o.createElement(E.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(E.Ea, {
                            label: Object(i.d)("Games", "DevRequestAccess")
                        }, o.createElement(S.b, {
                            multi: !0,
                            onGameSelect: this.onGameSelect
                        }))), o.createElement(E.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(E.Ea, {
                            label: Object(i.d)("Industry", "DevRequestAccess")
                        }, o.createElement(E.Sa, {
                            value: this.state.industry,
                            required: !0,
                            type: E.Ua.Text,
                            onChange: this.setIndustry,
                            "data-test-selector": _
                        }))), o.createElement(E.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(E.Ea, {
                            label: Object(i.d)("What is the current size of your company?", "DevRequestAccess")
                        }, o.createElement(E.Sa, {
                            value: this.state.companySize,
                            required: !0,
                            type: E.Ua.Text,
                            onChange: this.setCompanySize,
                            "data-test-selector": q
                        }))), o.createElement(E.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(E.Ea, {
                            label: Object(i.d)("City", "DevRequestAccess")
                        }, o.createElement(E.Sa, {
                            value: this.state.city,
                            required: !0,
                            type: E.Ua.Text,
                            onChange: this.setCity,
                            "data-test-selector": w
                        }))), o.createElement(E.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(E.Ea, {
                            label: Object(i.d)("State", "DevRequestAccess")
                        }, o.createElement(E.Sa, {
                            value: this.state.state,
                            required: !0,
                            type: E.Ua.Text,
                            onChange: this.setFormState,
                            "data-test-selector": j
                        }))), o.createElement(E.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(E.Ea, {
                            label: Object(i.d)("Country", "DevRequestAccess")
                        }, o.createElement(E.Sa, {
                            value: this.state.country,
                            required: !0,
                            type: E.Ua.Text,
                            onChange: this.setCountry,
                            "data-test-selector": O
                        }))), o.createElement(E.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(E.Ea, {
                            label: Object(i.d)("First Name", "DevRequestAccess")
                        }, o.createElement(E.Sa, {
                            value: this.state.contactFirstName,
                            required: !0,
                            type: E.Ua.Text,
                            onChange: this.setContactFirstName,
                            "data-test-selector": R
                        }))), o.createElement(E.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(E.Ea, {
                            label: Object(i.d)("Last Name", "DevRequestAccess")
                        }, o.createElement(E.Sa, {
                            value: this.state.contactLastName,
                            required: !0,
                            type: E.Ua.Text,
                            onChange: this.setcontactLastName,
                            "data-test-selector": D
                        }))), o.createElement(E.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(E.Ea, {
                            label: Object(i.d)("Title", "DevRequestAccess")
                        }, o.createElement(E.Sa, {
                            value: this.state.contactTitle,
                            required: !0,
                            type: E.Ua.Text,
                            onChange: this.setContactTitle,
                            "data-test-selector": k
                        }))), o.createElement(E.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(E.Ea, {
                            label: Object(i.d)("Email", "DevRequestAccess"),
                            hint: Object(i.d)("Your Email Address Domain must match the domain of your company", "DevRequestAccess")
                        }, o.createElement(E.Sa, {
                            value: this.state.contactEmail,
                            required: !0,
                            type: E.Ua.Text,
                            onChange: this.setContactEmail,
                            "data-test-selector": A
                        }))), o.createElement(E.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(E.Ea, {
                            label: Object(i.d)("What products are you interested in?", "DevRequestAccess")
                        }, o.createElement(E.Sa, {
                            value: this.state.productInterest,
                            required: !0,
                            type: E.Ua.Text,
                            onChange: this.setProductInterest,
                            "data-test-selector": G
                        }))), o.createElement(E.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(E.Ea, {
                            label: Object(i.d)("What brought you to Twitch?", "DevRequestAccess")
                        }, o.createElement(E.Sa, {
                            value: this.state.joinReason,
                            required: !0,
                            type: E.Ua.Text,
                            onChange: this.setJoinReason,
                            "data-test-selector": N
                        })))), o.createElement(E.z, {
                            onClick: this.onSubmit,
                            disabled: !this.state.formValid,
                            type: e
                        }, Object(i.d)("Submit", "DevRequestAccess")))
                    }, t
                }(o.Component),
                F = Object(c.compose)(Object(g.b)("DevRequestAccessForm", {
                    autoReportInteractive: !0
                }))(P),
                x = "request-access-form-error",
                I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderErrorMessage = function() {
                            if (t.props.errorMessage) return o.createElement(E.Ya, {
                                "data-test-selector": x,
                                className: "dev-company-request-access__error-message",
                                margin: {
                                    bottom: 1
                                },
                                padding: 1
                            }, o.createElement(E.Ya, {
                                margin: {
                                    bottom: .5
                                }
                            }, o.createElement(E.W, {
                                type: E.Wb.H4
                            }, Object(i.d)("Error", "DevRequestAccess"))), o.createElement(E.W, {
                                type: E.Wb.P
                            }, t.props.errorMessage))
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return this.props.isLoggedIn ? this.props.company ? o.createElement(b.a, {
                            to: "/company"
                        }) : this.props.companyPendingApplication ? o.createElement(b.a, {
                            to: "/access-pending"
                        }) : o.createElement(E.Ya, {
                            className: "dev-company-request-access",
                            fullWidth: !0
                        }, o.createElement(E.sb, {
                            centered: !0
                        }, o.createElement(E.Ya, {
                            margin: {
                                x: 2,
                                y: 1
                            }
                        }, o.createElement(E.Qa, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement("header", null, o.createElement(E.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(E.W, {
                            type: E.Wb.H2
                        }, Object(i.d)("Register your company and game with Twitch", "DevRequestAccess"))), o.createElement(E.W, {
                            type: E.Wb.P
                        }, Object(i.d)("The Twitch Developer Console helps you to link and manage your games and their assets on Twitch. Before providing access, we just need to capture some simple details. We will need to confirm that you are authorized for the company you specify. Communications will be sent to the email you have on file with your Twitch.tv account.", "DevRequestAccess")))), o.createElement(E.Ja, null, o.createElement(E.P, {
                            cols: {
                                default: 12,
                                md: 9,
                                lg: 6
                            }
                        }, this.renderErrorMessage(), o.createElement(F, {
                            onSubmit: this.props.onSubmit
                        })))))) : o.createElement(b.a, {
                            to: "/login"
                        })
                    }, t
                }(o.Component),
                L = Object(c.compose)(Object(g.b)("DevCompanyRequestAccess", {
                    autoReportInteractive: !0
                }))(I);
            var Y = function(e) {
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
                                            t = Object(v.a)(e), s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 6, , 7]), [4, Object(d.a)(u.a + "/v5/rbac/companies/applications", {
                                                body: JSON.stringify(t),
                                                method: "POST"
                                            })];
                                        case 2:
                                            return 200 !== (a = s.sent()).status ? [3, 3] : (i.p.store.dispatch(Object(h.h)(t)), i.p.history.push("/access-pending"), [3, 5]);
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
                        return o.createElement(L, {
                            isLoggedIn: this.props.isLoggedIn,
                            onSubmit: this.handleApplicationSubmit,
                            errorMessage: this.state.error,
                            company: this.props.company,
                            companyPendingApplication: this.props.companyPendingApplication
                        })
                    }, t
                }(o.Component),
                W = Object(c.compose)(Object(r.connect)(function(e) {
                    return {
                        isLoggedIn: Object(p.f)(e),
                        company: Object(y.c)(e),
                        companyPendingApplication: Object(y.f)(e)
                    }
                }), Object(g.b)("DevCompanyRequest", {
                    autoReportInteractive: !0,
                    destination: l.a.DevSiteRequestAccess
                }), Object(m.a)({
                    location: f.PageviewLocation.DevSiteRequestCompanyAccess
                }))(Y);
            a.d(t, "DevCompanyRequestAccessContainer", function() {
                return Y
            }), a.d(t, "DevCompanyRequestAccessPage", function() {
                return W
            })
        },
        GD6M: function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                s = a("q1tI"),
                o = a("fvjX"),
                r = a("u5aL"),
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
                        return s.createElement(i.Va, {
                            onClick: this.onClick
                        }, s.createElement(i.Ya, {
                            padding: 1
                        }, s.createElement(i.W, null, this.props.game.name)))
                    }, t
                }(s.Component),
                u = Object(o.compose)(Object(c.b)("DevGameSuggestion", {
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
                        return s.createElement(i.Pb, {
                            onClick: this.onClick,
                            label: this.props.game.name
                        })
                    }, t
                }(s.Component),
                p = 100,
                g = "GAME_SEARCH_INPUT_SELECTOR",
                d = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            searchTerm: "",
                            showSuggestions: !1,
                            games: []
                        }, t.onGameSearch = function(e) {
                            e.preventDefault(), t.setState({
                                searchTerm: e.target.value,
                                showSuggestions: e.target.value.length > 0
                            }, function() {
                                t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), t.inputTimer = setTimeout(function() {
                                    return t.props.onInputChange(t.state.searchTerm)
                                }, p)
                            })
                        }, t.onClickOut = function() {
                            t.setState({
                                showSuggestions: !1
                            })
                        }, t.onFocus = function(e) {
                            e.preventDefault(), t.props.gameSuggestions.length && t.setState({
                                showSuggestions: !0
                            })
                        }, t.onLabelClick = function(e) {
                            t.setState(function(t) {
                                var a = t.games.findIndex(function(t) {
                                    return t._id === e._id
                                });
                                return a > -1 ? {
                                    games: t.games.slice(0, a).concat(t.games.slice(a + 1))
                                } : {
                                    games: t.games
                                }
                            }, t.reportGames)
                        }, t.renderSuggestions = function() {
                            return t.props.gameSuggestions.map(function(e, a) {
                                return s.createElement(u, {
                                    key: a,
                                    game: e,
                                    onClick: t.onSuggestionClick
                                })
                            })
                        }, t.renderSelections = function() {
                            return t.state.games.map(function(e) {
                                return s.createElement(i.Ya, {
                                    key: e._id,
                                    display: i.X.InlineBlock,
                                    padding: {
                                        right: .5
                                    }
                                }, s.createElement(l, {
                                    game: e,
                                    onLabelRemove: t.onLabelClick
                                }))
                            })
                        }, t.onSuggestionClick = function(e) {
                            t.props.multi ? t.setState(function(t) {
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
                            }, t.reportGames) : t.setState({
                                games: [e],
                                showSuggestions: !1,
                                searchTerm: ""
                            }, t.reportGames)
                        }, t.reportGames = function() {
                            t.props.onGameSelect(t.state.games)
                        }, t
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
                        var e = 0 === this.state.games.length || this.props.multi;
                        return s.createElement(i.Ya, null, s.createElement(r.a, {
                            onClickOut: this.onClickOut
                        }, s.createElement(i.Ya, {
                            position: i.kb.Relative,
                            padding: {
                                bottom: 1
                            }
                        }, e && s.createElement(i.Sa, {
                            "data-test-selector": g,
                            value: this.state.searchTerm,
                            onChange: this.onGameSearch,
                            type: i.Ua.Text,
                            onFocus: this.onFocus
                        }), s.createElement(i.u, {
                            show: this.state.showSuggestions
                        }, this.renderSuggestions())), s.createElement(i.Ya, {
                            padding: {
                                bottom: .5
                            }
                        }, this.renderSelections())))
                    }, t
                }(s.Component),
                h = Object(o.compose)(Object(c.b)("DevGameSearch", {
                    autoReportInteractive: !0
                }))(d),
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            gameSuggestions: t.props.gameSuggestions || []
                        }, t.findGames = function(e) {
                            return n.__awaiter(t, void 0, void 0, function() {
                                return n.__generator(this, function(t) {
                                    return e.length ? (this.setState({
                                        gameSuggestions: this.props.gameSuggestions.filter(function(t) {
                                            return t.name.toLowerCase().includes(e.toLowerCase())
                                        })
                                    }), [2]) : (this.setState({
                                        gameSuggestions: this.props.gameSuggestions
                                    }), [2])
                                })
                            })
                        }, t.onGameSelect = function(e) {
                            t.setState({
                                gameSuggestions: []
                            }), e.length || t.setState({
                                gameSuggestions: t.props.gameSuggestions
                            }), t.props.onGameSelect(e)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(h, {
                            gameSuggestions: this.state.gameSuggestions,
                            onGameSelect: this.onGameSelect,
                            onInputChange: this.findGames,
                            multi: this.props.multi
                        })
                    }, t
                }(s.Component),
                v = a("Svt6"),
                f = a("+GjP"),
                b = a("1mFg"),
                S = v.a + "/kraken/search/games",
                E = 7,
                C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            games: []
                        }, t.findGames = function(e) {
                            return n.__awaiter(t, void 0, void 0, function() {
                                var t, a, s, o;
                                return n.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 4, , 5]), e.length ? (t = Object(f.e)(S, {
                                                query: e.trim(),
                                                type: "suggest"
                                            }), [4, Object(b.a)(t)]) : (this.setState({
                                                games: []
                                            }), [2]);
                                        case 1:
                                            return a = n.sent(), s = [], 200 !== a.status ? [3, 3] : [4, a.json()];
                                        case 2:
                                            o = n.sent(), s = o.games, n.label = 3;
                                        case 3:
                                            return s = s.slice(0, this.props.limit || E), this.setState({
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
                        }, t.onGameSelect = function(e) {
                            t.setState({
                                games: []
                            }), t.props.onGameSelect(e)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(h, {
                            gameSuggestions: this.state.games,
                            onGameSelect: this.onGameSelect,
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
                o = a("q1tI"),
                r = a("wIs1"),
                c = a("/7QA");

            function i(e) {
                return function(t) {
                    var a = function(a) {
                        function r(t) {
                            var s = a.call(this, t) || this;
                            return s.tracked = !1, s.referenceTracking = {}, s.trackPageview = function() {
                                if (!(s.tracked || e.skip && e.skip(s.props))) {
                                    s.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(s.props) : e.properties && (t = n.__assign({}, e.properties));
                                    var a = n.__assign({}, s.props);
                                    a.location && a.location.state && (t.medium = a.location.state.medium, t.content = a.location.state.content, t.content_index = a.location.state.content_index, t.email_id = a.location.state.email_id);
                                    var o = s.referenceTracking,
                                        r = o.content,
                                        i = o.medium,
                                        m = o.content_index,
                                        u = o.email_id;
                                    c.p.tracking.trackPageview(n.__assign({
                                        content: r,
                                        medium: i,
                                        content_index: m,
                                        email_id: u,
                                        location: e.location
                                    }, t))
                                }
                            }, c.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), s
                        }
                        return n.__extends(r, a), r.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, a) {
                                "REPLACE" !== a && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, r.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, r.prototype.render = function() {
                            return o.createElement(t, n.__assign({}, this.props))
                        }, r.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? s.parse(e.search) : {},
                                a = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, a.medium || a.content || a.email_id) {
                                var n = "",
                                    o = s.stringify(t);
                                o.length > 0 && (n = "?" + o), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: n
                                })
                            }
                            return a
                        }, r
                    }(o.Component);
                    return Object(r.a)(a)
                }
            }
            a.d(t, "a", function() {
                return i
            })
        }
    }
]);