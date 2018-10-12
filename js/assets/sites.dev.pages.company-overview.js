(window.webpackJsonp = window.webpackJsonp || []).push([
    [103], {
        "1JmR": function(e, t, r) {},
        "8Ad5": function(e, t, r) {
            "use strict";
            var n;
            r.d(t, "a", function() {
                    return n
                }),
                function(e) {
                    e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.Enter = 13] = "Enter", e[e.Esc = 27] = "Esc", e[e.Space = 32] = "Space", e[e.Left = 37] = "Left", e[e.Up = 38] = "Up", e[e.Right = 39] = "Right", e[e.Down = 40] = "Down", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.At = 64] = "At", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.Comma = 188] = "Comma", e[e.Period = 190] = "Period"
                }(n || (n = {}))
        },
        BSTw: function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Algolia_RequestInfo"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "requestInfo"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 57
                }
            };
            r.loc.source = {
                body: "query Algolia_RequestInfo {\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        GIun: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = function(e) {
                    var t = n.Children.only(e.children);
                    return n.cloneElement(t, {
                        "data-selectable": !0,
                        tabIndex: -1
                    })
                };
            r.d(t, "a", function() {
                return a
            })
        },
        "H/lO": function(e, t, r) {
            "use strict";
            var n;
            r.d(t, "a", function() {
                    return n
                }),
                function(e) {
                    e.Games = "game", e.Videos = "vod", e.Users = "user", e.Channels = "live_channel", e.Communities = "community", e.StreamTags = "stream_tag", e.Tags = "tag"
                }(n || (n = {}))
        },
        LFRE: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                s = r("/MKj"),
                i = r("/7QA"),
                o = r("f00E"),
                c = r("kRBY"),
                u = r("H/lO"),
                l = r("NZDK"),
                p = r("fvjX"),
                d = r("N3I0"),
                m = r("GIun"),
                h = r("8/mp"),
                f = r("GnwI"),
                g = r("N0BP"),
                v = r("yLwq"),
                b = r("Ue10"),
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onSelect = function(e) {
                            e.preventDefault(), t.props.onSelect(t.props.user)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.user.avatar || Object(v.c)(this.props.user.id, 64);
                        return a.createElement(b.Va, n.__assign({
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(g.a)(this.props)), a.createElement(b.Sa, {
                            onClick: this.onSelect
                        }, a.createElement(b.G, {
                            row: !0
                        }, a.createElement(b.I, {
                            alt: this.props.user.name,
                            src: e,
                            size: b.J.Size4,
                            aspect: b.p.Aspect1x1
                        }), a.createElement(b.Va, {
                            flexGrow: 1,
                            display: b.W.Flex,
                            position: b.db.Relative
                        }, a.createElement(b.Na, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, a.createElement(b.V, {
                            type: b.Nb.Span,
                            ellipsis: !0
                        }, this.props.user.name))))))
                    }, t
                }(a.Component),
                _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.userSearch = null, t.renderSearchContent = function() {
                            var e = null;
                            return t.props.waiting ? e = a.createElement(b.Xa, {
                                fillContent: !0
                            }) : t.props.userResults && (e = t.props.userResults.map(function(e) {
                                return a.createElement(m.a, {
                                    key: e.id
                                }, a.createElement(y, {
                                    user: e,
                                    onSelect: t.onSelect
                                }))
                            })), e
                        }, t.onSelect = function(e) {
                            t.userSearch && t.userSearch.setValue(e.login), t.props.onUserSelect(e)
                        }, t.setUserSearchRef = function(e) {
                            t.userSearch = e
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.userSearch && e.open !== this.props.open && this.userSearch.toggle(e.open)
                    }, t.prototype.render = function() {
                        var e = this.renderSearchContent();
                        return a.createElement(b.Va, null, a.createElement(d.a, {
                            onChange: this.props.onInputChange,
                            onFocusInput: this.props.onFocusInput,
                            ref: this.setUserSearchRef,
                            placeholder: Object(i.d)("Search Users", "DevUserSearch"),
                            balloonProps: {
                                show: this.props.open,
                                direction: b.v.Bottom,
                                size: b.w.Large
                            },
                            onClose: this.props.onSearchClose
                        }, a.createElement(b.Va, {
                            className: "user-search__user-search"
                        }, a.createElement(h.b, {
                            contentClassName: "user-search__user-search-content",
                            suppressScrollX: !0
                        }, a.createElement(b.Va, {
                            fullWidth: !0
                        }, e)))))
                    }, t
                }(a.Component),
                S = Object(p.compose)(Object(f.c)("DevUserSearchDropdown", {
                    autoReportInteractive: !0
                }))(_),
                k = 100,
                C = function(e) {
                    function t(t) {
                        var r = e.call(this, t) || this;
                        return r.state = {
                            searchTerm: "",
                            userResult: [],
                            searchOpen: !1,
                            waiting: !1,
                            selected: !1
                        }, r.onInputChange = function(e) {
                            r.inputTimer && (clearTimeout(r.inputTimer), r.inputTimer = 0), r.props.onReset && r.props.onReset(), e ? (r.setState({
                                userResult: [],
                                searchTerm: e,
                                waiting: !0
                            }), r.inputTimer = setTimeout(function() {
                                return r.doUserSearch(e)
                            }, k)) : r.setState({
                                userResult: [],
                                waiting: !1,
                                searchTerm: ""
                            })
                        }, r.doUserSearch = function(e) {
                            return n.__awaiter(r, void 0, void 0, function() {
                                var t, r, a, s;
                                return n.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            this.inputTimer = 0, t = Object(o.a)(), r = null, n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(u.a.Users, e, t)];
                                        case 2:
                                            return r = n.sent(), [3, 4];
                                        case 3:
                                            return a = n.sent(), i.o.logger.error(a, "Algolia User Search failed"), this.setState({
                                                waiting: !1,
                                                searchOpen: !1
                                            }), [2];
                                        case 4:
                                            return r && r.users ? (s = this.deserializeUserResults(r), this.props.limit && (s = s.splice(0, this.props.limit)), this.setState({
                                                userResult: s,
                                                searchOpen: !0,
                                                waiting: !1
                                            }), [2]) : [2]
                                    }
                                })
                            })
                        }, r.deserializeUserResults = function(e) {
                            return e.users ? e.users.hits.filter(function(e) {
                                return !(r.props.user && !r.props.includeCurrentUser) || e.objectID !== r.props.user.id
                            }).map(function(e) {
                                return {
                                    id: e.objectID,
                                    avatar: e.profile_image,
                                    name: e.name,
                                    login: e.login
                                }
                            }) : []
                        }, r.onFocusInput = function() {
                            r.setState(function(e) {
                                return e.searchTerm && !e.searchOpen ? {
                                    searchOpen: !0
                                } : {
                                    searchOpen: e.searchOpen
                                }
                            })
                        }, r.onSearchClose = function() {
                            r.setState({
                                searchOpen: !1
                            })
                        }, r.onUserSelect = function(e) {
                            r.props.onUserSelect(e), r.setState({
                                userResult: [],
                                searchTerm: e.login,
                                searchOpen: !1,
                                waiting: !1,
                                selected: !0
                            })
                        }, r.searchClient = new l.a({
                            appId: i.o.config.algoliaApplicationID,
                            apiKey: i.o.config.algoliaAPIKey,
                            apolloClient: i.o.apollo.client,
                            logger: i.o.logger,
                            config: i.o.config,
                            stats: i.o.stats
                        }), r
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(S, {
                            userResults: this.state.userResult,
                            open: this.state.searchOpen,
                            waiting: this.state.waiting,
                            onInputChange: this.onInputChange,
                            onSearchClose: this.onSearchClose,
                            onFocusInput: this.onFocusInput,
                            onUserSelect: this.onUserSelect
                        })
                    }, t
                }(a.Component);
            var E = Object(s.connect)(function(e) {
                return {
                    user: Object(c.e)(e)
                }
            })(C);
            r.d(t, !1, function() {
                return k
            }), r.d(t, !1, function() {
                return C
            }), r.d(t, "a", function() {
                return E
            })
        },
        N3I0: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                s = r("u5aL"),
                i = r("/7QA"),
                o = r("Ue10"),
                c = function() {
                    return a.createElement(o.Va, {
                        display: o.W.Flex,
                        flexDirection: o.Y.Column,
                        justifyContent: o.Ua.Center,
                        alignItems: o.f.Center,
                        flexGrow: 1,
                        fullHeight: !0,
                        padding: {
                            y: 1
                        },
                        zIndex: o.ac.Above
                    }, a.createElement(o.xb, {
                        color: o.O.Alt2,
                        textAlign: o.Jb.Center,
                        flexShrink: 1
                    }, a.createElement(o.mb, {
                        asset: o.nb.DeadGlitch,
                        width: 46,
                        height: 48
                    })), a.createElement(o.Na, {
                        margin: {
                            top: 1
                        },
                        textAlign: o.Jb.Center
                    }, a.createElement(o.V, {
                        type: o.Nb.H4,
                        "data-test-selector": "search-error-message"
                    }, Object(i.d)("Search is not available at this time", "DropdownSearchError"))), a.createElement(o.V, {
                        type: o.Nb.P
                    }, Object(i.d)("Please try again later", "DropdownSearchError")))
                },
                u = r("8Ad5"),
                l = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            focusSelectable: !1,
                            isInputFocused: !1,
                            isOpen: !1
                        }, t.handleChange = function(e) {
                            t.props.onChange(e.target.value)
                        }, t.handleFocus = function() {
                            t.props.onFocusInput && t.props.onFocusInput(), t.setState({
                                isInputFocused: !0
                            })
                        }, t.handleBlur = function() {
                            t.setState({
                                isInputFocused: !1
                            })
                        }, t.onKeyDown = function(e) {
                            var r = function() {
                                e.preventDefault(), e.stopPropagation()
                            };
                            e.keyCode === u.a.Esc ? t.setState({
                                isOpen: !1
                            }) : e.keyCode === u.a.Up ? (r(), t.focusNext(-1)) : e.keyCode === u.a.Down && (r(), t.focusNext(1))
                        }, t.onClickOut = function() {
                            t.state.isOpen && t.setState({
                                isOpen: !1
                            }), t.props.onClose && t.props.onClose()
                        }, t.onMouseOver = function(e) {
                            var r = e.target.closest("[data-selectable]");
                            r && (r.focus(), r.tabIndex = 0, t.state.currentFocus && (t.state.currentFocus.tabIndex = -1), t.setState({
                                currentFocus: r
                            }), t.props.onFocusChange && t.props.onFocusChange(r))
                        }, t.getInputRef = function(e) {
                            t.inputRef = e
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = void 0 === this.props.showDropdown || this.props.showDropdown,
                            t = this.props.isErrored ? a.createElement(c, null) : a.Children.only(this.props.children),
                            r = a.createElement(o.pb, {
                                onChange: this.handleChange,
                                onKeyDown: this.onKeyDown,
                                onBlur: this.handleBlur,
                                onFocus: this.handleFocus,
                                placeholder: this.props.placeholder,
                                id: "nav-search-input",
                                "data-a-target": "nav-search-input",
                                spellCheck: !1,
                                refDelegate: this.getInputRef,
                                size: this.props.inputSize,
                                autoFocus: this.props.autoFocus
                            });
                        return this.props.inline ? a.createElement(s.a, {
                            onClickOut: this.onClickOut
                        }, a.createElement(o.xb, {
                            background: this.state.isInputFocused || this.state.isOpen ? o.r.Base : void 0,
                            borderRadius: o.x.Large,
                            padding: .5,
                            position: o.db.Relative,
                            elevation: this.state.isInputFocused || this.state.isOpen ? 3 : void 0
                        }, r, e && a.createElement(o.xb, {
                            attachLeft: !0,
                            background: o.r.Base,
                            borderRadius: o.x.Large,
                            display: this.state.isOpen ? o.W.Block : o.W.Hide,
                            fullWidth: !0,
                            padding: {
                                y: 1
                            },
                            position: o.db.Absolute,
                            zIndex: o.ac.Above,
                            elevation: 3
                        }, a.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))) : a.createElement(s.a, {
                            onClickOut: this.onClickOut
                        }, r, e && a.createElement(o.u, n.__assign({
                            noTail: !0
                        }, this.props.balloonProps, {
                            show: this.state.isOpen
                        }), a.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))
                    }, t.prototype.toggle = function(e) {
                        e !== this.state.isOpen && this.setState({
                            isOpen: e
                        })
                    }, t.prototype.setValue = function(e) {
                        this.inputRef.value = e
                    }, t.prototype.focusNext = function(e) {
                        var t, r = document.querySelectorAll("[data-selectable=true]"),
                            n = document.activeElement,
                            a = Array.prototype.indexOf.call(r, n);
                        if ((t = a < 0 ? e > 0 ? 0 : r.length - 1 : a + e) < 0 && (t = 0), !(t >= r.length)) {
                            var s = r.item(t);
                            s.focus(), s.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                                currentFocus: s
                            }), this.props.onFocusChange && this.props.onFocusChange(s)
                        }
                    }, t
                }(a.Component);
            r.d(t, "a", function() {
                return l
            })
        },
        NJd5: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r("mrSG"),
                a = r("/MKj"),
                s = r("fvjX"),
                i = r("aCAx"),
                o = r("q1tI"),
                c = r("/7QA"),
                u = r("cZKs"),
                l = r("GnwI");

            function p(e) {
                var t = e.match(/[a-z]+/gi);
                return t && t.length ? t.map(function(e) {
                    return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
                }).join(" ") : ""
            }
            var d, m = r("LFRE"),
                h = r("Ue10");
            r("1JmR");
            ! function(e) {
                e.Email = "devaddmembermodal-email", e.SeachUserFormGroup = "devaddmembermodal-user-formgroup"
            }(d || (d = {}));
            var f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            firstName: "",
                            lastName: "",
                            title: "",
                            email: "",
                            valid: !1,
                            errorMessage: ""
                        }, t.submitForm = function(e) {
                            return n.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return n.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e.preventDefault(), this.state.user ? [4, this.props.onSubmit(this.state.user.id, this.props.role, this.state.firstName, this.state.lastName, this.state.title, this.state.email)] : [3, 2];
                                        case 1:
                                            "" === (t = r.sent()) ? this.props.closeModal(): this.setState({
                                                errorMessage: t
                                            }), r.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }, t.setFirstName = function(e) {
                            e.preventDefault(), t.setState({
                                firstName: e.target.value
                            }, t.validate)
                        }, t.setLastName = function(e) {
                            e.preventDefault(), t.setState({
                                lastName: e.target.value
                            }, t.validate)
                        }, t.setTitle = function(e) {
                            e.preventDefault(), t.setState({
                                title: e.target.value
                            }, t.validate)
                        }, t.setEmail = function(e) {
                            e.preventDefault(), t.setState({
                                email: e.target.value
                            }, t.validate)
                        }, t.onUserSelect = function(e) {
                            t.setState({
                                user: e,
                                errorMessage: ""
                            }, t.validate)
                        }, t.onUserReset = function() {
                            t.setState({
                                user: null,
                                errorMessage: ""
                            }, t.validate)
                        }, t.validate = function() {
                            var e = !0;
                            t.state.firstName && t.state.firstName.length || (e = !1), t.state.lastName && t.state.lastName.length || (e = !1), t.state.title && t.state.title.length || (e = !1), t.state.email && t.state.email.length || (e = !1), t.state.user || (e = !1), t.setState({
                                valid: e
                            })
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = p(this.props.role),
                            t = Object(c.d)("Add {title}", {
                                title: e
                            }, "DevAddUserModal");
                        return o.createElement(h.Va, {
                            className: "dev-add-user-modal"
                        }, o.createElement(h.xb, {
                            background: h.r.Base,
                            padding: 2
                        }, o.createElement(h.Va, {
                            className: "dev-add-user-modal__form-container"
                        }, o.createElement("form", null, o.createElement(h.Va, null, o.createElement(h.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(h.Ca, {
                            "data-test-selector": d.SeachUserFormGroup,
                            error: "" !== this.state.errorMessage,
                            errorMessage: this.state.errorMessage,
                            label: Object(c.d)("Search User", "DevAddUserModal")
                        }, o.createElement(m.a, {
                            limit: 5,
                            onUserSelect: this.onUserSelect,
                            onReset: this.onUserReset
                        }))), o.createElement(h.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(h.Ca, {
                            label: Object(c.d)("First Name", "DevAddUserModal")
                        }, o.createElement(h.Pa, {
                            type: h.Ra.Text,
                            value: this.state.firstName,
                            onChange: this.setFirstName
                        }))), o.createElement(h.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(h.Ca, {
                            label: Object(c.d)("Last Name", "DevAddUserModal")
                        }, o.createElement(h.Pa, {
                            type: h.Ra.Text,
                            value: this.state.lastName,
                            onChange: this.setLastName
                        }))), o.createElement(h.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(h.Ca, {
                            label: Object(c.d)("Title", "DevAddUserModal")
                        }, o.createElement(h.Pa, {
                            type: h.Ra.Text,
                            value: this.state.title,
                            onChange: this.setTitle
                        }))), o.createElement(h.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(h.Ca, {
                            label: Object(c.d)("Email", "DevAddUserModal")
                        }, o.createElement(h.Pa, {
                            type: h.Ra.Email,
                            "data-test-selector": d.Email,
                            value: this.state.email,
                            onChange: this.setEmail
                        }))), o.createElement(h.z, {
                            fullWidth: !0,
                            disabled: !this.state.valid && "" === this.state.errorMessage,
                            onClick: this.submitForm,
                            type: this.state.errorMessage ? h.F.Alert : h.F.Default
                        }, this.state.errorMessage ? Object(c.d)("Error Adding User. See Fields Above", "DevAddUserModal") : t))))), o.createElement(u.a, null))
                    }, t
                }(o.Component),
                g = Object(s.compose)(Object(l.c)("DevAddMemberModal", {
                    autoReportInteractive: !0
                }))(f);
            var v = Object(a.connect)(null, function(e) {
                    return Object(s.bindActionCreators)({
                        closeModal: i.c
                    }, e)
                })(g),
                b = r("mLw1"),
                y = r("ZDlU"),
                _ = r("V+GM"),
                S = r("Svt6"),
                k = r("NvVO"),
                C = r("2xye"),
                E = r("1mFg"),
                w = r("uLRL"),
                O = r("Dtp2"),
                N = r("+GjP"),
                D = r("tl6o");

            function F(e, t) {
                return n.__awaiter(this, void 0, void 0, function() {
                    var r;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                r = Object(N.e)(S.a + "/v5/rbac/validate", {
                                    domain_id: D.c,
                                    permission_name: t,
                                    resource: e
                                }), n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, Object(E.a)(r)];
                            case 2:
                                return [2, 200 === n.sent().status];
                            case 3:
                                return n.sent(), [2, !1];
                            case 4:
                                return [2]
                        }
                    })
                })
            }
            var R = r("yR8l"),
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderRemoveButton = function() {
                            if (t.props.canRemoveUser) return o.createElement(h.A, {
                                icon: h.nb.Close,
                                onClick: t.onRemove,
                                ariaLabel: Object(c.d)("Remove User", "DevCompanyMember")
                            })
                        }, t.onRemove = function(e) {
                            e.preventDefault(), t.props.onRemoveClick(t.props.member.twitchId)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.member.firstName + " " + this.props.member.lastName,
                            t = this.renderRemoveButton();
                        return o.createElement(h.Va, {
                            display: h.W.Flex,
                            alignItems: h.f.Center
                        }, o.createElement(h.Va, {
                            padding: {
                                bottom: .5
                            }
                        }, o.createElement(h.q, {
                            src: this.props.member.profileImage,
                            size: 64,
                            alt: e
                        })), o.createElement(h.Va, {
                            fullWidth: !0,
                            margin: {
                                left: 2
                            }
                        }, o.createElement(h.V, null, e)), t)
                    }, t
                }(o.Component),
                U = Object(s.compose)(Object(l.c)("DevMemberItem", {
                    autoReportInteractive: !0
                }))(T);
            var x = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderMembers = function() {
                            return t.props.members.map(function(e) {
                                return o.createElement(h.P, {
                                    key: e.id,
                                    cols: {
                                        default: 12,
                                        sm: 6,
                                        md: 4,
                                        lg: 3
                                    }
                                }, o.createElement(h.Va, {
                                    margin: {
                                        y: 1
                                    },
                                    padding: {
                                        x: 1
                                    }
                                }, o.createElement(U, {
                                    member: e,
                                    canRemoveUser: t.props.canRemoveUser,
                                    onRemoveClick: t.onRemoveClick
                                })))
                            })
                        }, t.renderAddButton = function(e) {
                            if (t.props.canAddUser) return o.createElement(h.z, {
                                onClick: t.onAddClick
                            }, Object(c.d)("Add {title}", {
                                title: e
                            }, "DevMemberGroup"))
                        }, t.onAddClick = function(e) {
                            e.preventDefault(), t.props.onAddClick(t.props.title)
                        }, t.onRemoveClick = function(e) {
                            t.props.onRemoveClick(e, t.props.title)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = p(this.props.title),
                            t = this.renderMembers(),
                            r = this.renderAddButton(e);
                        return o.createElement(h.Va, {
                            className: "dev-member-Group",
                            margin: {
                                bottom: 3
                            }
                        }, o.createElement(h.Oa, {
                            background: h.r.Alt2,
                            padding: 2,
                            display: h.W.Flex,
                            justifyContent: h.Ua.Between
                        }, o.createElement("header", null, o.createElement(h.Qb, {
                            direction: h.Sb.Right,
                            label: function(e) {
                                var t = "";
                                switch (e) {
                                    case "administrator":
                                        t = Object(c.d)("Administrators can manage apps, games, drops, and adding and removing users.", "DevMemberGroupComponent");
                                        break;
                                    case "manager":
                                        t = Object(c.d)("Managers can manage apps, games, drops, and add users, but cannot remove users.", "DevMemberGroupComponent");
                                        break;
                                    case "marketer":
                                        t = Object(c.d)("Marketers can manage games, drops, and box art for a company.", "DevMemberGroupComponent");
                                        break;
                                    case "developer":
                                        t = Object(c.d)("Developers can set and configure drops for a company.", "DevMemberGroupComponent")
                                }
                                return t
                            }(this.props.title)
                        }, o.createElement(h.V, {
                            type: h.Nb.H4
                        }, e)), r)), o.createElement(h.Va, null, o.createElement(h.Ha, null, t)))
                    }, t
                }(o.Component),
                A = Object(s.compose)(Object(l.c)("DevMemberGroup", {
                    autoReportInteractive: !0
                }))(x),
                I = r("t04z"),
                j = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            members: {
                                administrator: [],
                                manager: [],
                                marketer: [],
                                developer: []
                            }
                        }, t.setMembers = function(e) {
                            var r = t.associateUsers(e);
                            t.setState({
                                members: r
                            })
                        }, t.renderGroups = function() {
                            return Object.keys(t.state.members).map(function(e) {
                                var r = t.state.members[e];
                                return o.createElement(A, {
                                    title: e,
                                    members: r,
                                    key: e,
                                    canAddUser: t.props.canAddUser,
                                    canRemoveUser: t.props.canRemoveUser,
                                    onRemoveClick: t.props.onRemoveClick,
                                    onAddClick: t.props.onAddClick
                                })
                            })
                        }, t.associateUsers = function(e) {
                            var r = {
                                administrator: [],
                                manager: [],
                                marketer: [],
                                developer: []
                            };
                            return Object.keys(t.props.members).forEach(function(n) {
                                var a = t.props.members[n].map(function(t) {
                                    var r = e.find(function(e) {
                                            return e.id === t.twitchId
                                        }),
                                        n = "";
                                    return r && (n = r.profileImageURL), Object.assign({}, t, {
                                        profileImage: n
                                    })
                                });
                                r[n] = a
                            }), r
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.data.users && this.setMembers(e.data.users)
                    }, t.prototype.componentDidMount = function() {
                        this.props.data.loading || this.props.data.error || !this.props.data.users || (this.setMembers(this.props.data.users), this.props.latencyTracking.reportInteractive())
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading || this.props.data.error) return o.createElement(h.Va, null);
                        var e = this.renderGroups();
                        return o.createElement(h.Va, null, e)
                    }, t
                }(o.Component),
                P = Object(s.compose)(Object(l.c)("DevCompanyMember"), Object(R.a)(I, {
                    options: function(e) {
                        return {
                            variables: {
                                ids: e.members.administrator.map(function(e) {
                                    return e.twitchId
                                }).concat(e.members.manager.map(function(e) {
                                    return e.twitchId
                                }), e.members.developer.map(function(e) {
                                    return e.twitchId
                                }), e.members.marketer.map(function(e) {
                                    return e.twitchId
                                }))
                            }
                        }
                    }
                }))(j),
                M = S.a + "/v5/rbac/users",
                V = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            members: {
                                administrator: [],
                                manager: [],
                                marketer: [],
                                developer: []
                            },
                            canAddUser: !1,
                            canRemoveUser: !1,
                            loadError: !1
                        }, t.getMembers = function(e) {
                            return n.__awaiter(t, void 0, void 0, function() {
                                var t, r;
                                return n.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 5, , 6]), [4, Object(E.a)(S.a + "/v5/rbac/companies/" + e.id + "/members")];
                                        case 1:
                                            return 200 !== (t = n.sent()).status ? [3, 3] : [4, t.json()];
                                        case 2:
                                            return r = n.sent(), this.setState({
                                                members: {
                                                    administrator: r.administrator.map(function(e) {
                                                        return Object(O.c)(e)
                                                    }),
                                                    manager: r.manager.map(function(e) {
                                                        return Object(O.c)(e)
                                                    }),
                                                    marketer: r.marketer.map(function(e) {
                                                        return Object(O.c)(e)
                                                    }),
                                                    developer: r.developer.map(function(e) {
                                                        return Object(O.c)(e)
                                                    })
                                                }
                                            }), [3, 4];
                                        case 3:
                                            this.setState({
                                                loadError: !0
                                            }), n.label = 4;
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            return n.sent(), this.setState({
                                                loadError: !0
                                            }), [2];
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }, t.getAddPermissions = function(e) {
                            return n.__awaiter(t, void 0, void 0, function() {
                                var t, r;
                                return n.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return t = e.identifier + "::addUser", [4, F(e.identifier + "::user::*", t)];
                                        case 1:
                                            return r = n.sent(), this.setState({
                                                canAddUser: r
                                            }), [2]
                                    }
                                })
                            })
                        }, t.getRemovePermissions = function(e) {
                            return n.__awaiter(t, void 0, void 0, function() {
                                var t, r;
                                return n.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return t = e.identifier + "::removeUser", [4, F(e.identifier + "::user::*", t)];
                                        case 1:
                                            return r = n.sent(), this.setState({
                                                canRemoveUser: r
                                            }), [2]
                                    }
                                })
                            })
                        }, t.onRemoveClick = function(e, r) {
                            return n.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return n.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.props.company) return [2];
                                            if ("administrator" === r && this.state.members.administrator.length < 2) return [2];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 5, , 6]), "administrator" === r && (r = "admin"), t = S.a + "/v5/rbac/companies/" + this.props.company.id + "/members/" + e + "/roles/" + this.props.company.identifier + "::" + r, [4, Object(E.a)(t, {
                                                method: "DELETE"
                                            })];
                                        case 2:
                                            return 204 !== n.sent().status ? [3, 4] : [4, this.getMembers(this.props.company)];
                                        case 3:
                                            n.sent(), n.label = 4;
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            return n.sent(), [2];
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onAddClick = function(e) {
                            t.props.showAddUserModal({
                                role: e,
                                onSubmit: t.onAddUser
                            })
                        }, t.onAddUser = function(e, r, a, s, i, o) {
                            return n.__awaiter(t, void 0, Promise, function() {
                                var t, u, l, p;
                                return n.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.props.company) return [2, Promise.resolve("")];
                                            t = {
                                                twitch_id: e,
                                                first_name: a,
                                                last_name: s,
                                                email: o,
                                                title: i
                                            }, u = Object(c.d)("Unexpected Failure", "DevCompanyOverview"), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 7, , 8]), [4, Object(E.a)(M, {
                                                method: "POST",
                                                body: JSON.stringify(t)
                                            })];
                                        case 2:
                                            return n.sent(), "administrator" === r && (r = "admin"), l = S.a + "/v5/rbac/companies/" + this.props.company.id + "/members/" + e + "/roles/" + this.props.company.identifier + "::" + r, [4, Object(E.a)(l, {
                                                method: "POST"
                                            })];
                                        case 3:
                                            return 200 !== (p = n.sent()).status ? [3, 5] : [4, this.getMembers(this.props.company)];
                                        case 4:
                                            return n.sent(), [3, 6];
                                        case 5:
                                            return 400 === p.status ? [2, Promise.resolve(Object(c.d)("User already belongs to company", "DevCompanyOverview"))] : [2, Promise.resolve(u)];
                                        case 6:
                                            return [3, 8];
                                        case 7:
                                            return n.sent(), [2, Promise.resolve(u)];
                                        case 8:
                                            return [2, Promise.resolve("")]
                                    }
                                })
                            })
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        return n.__awaiter(this, void 0, void 0, function() {
                            return n.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.getMembers(this.props.company)];
                                    case 1:
                                        return e.sent(), [4, this.getAddPermissions(this.props.company)];
                                    case 2:
                                        return e.sent(), [4, this.getRemovePermissions(this.props.company)];
                                    case 3:
                                        return e.sent(), this.props.latencyTracking.reportInteractive(), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        if (!this.state.members.administrator.length) return o.createElement(h.lb, {
                            centered: !0
                        }, o.createElement(h.Xa, null));
                        if (!this.props.company) return o.createElement(b.a, {
                            to: "/"
                        });
                        if (this.state.loadError) return o.createElement(y.a, null);
                        var e = this.props.company && this.props.company.companyName || "";
                        return o.createElement(h.lb, {
                            centered: !0
                        }, o.createElement(h.Va, {
                            margin: {
                                x: 2
                            }
                        }, o.createElement(h.Va, {
                            margin: {
                                top: 2,
                                bottom: 4
                            },
                            textAlign: h.Jb.Center
                        }, o.createElement(h.V, {
                            type: h.Nb.H1
                        }, Object(c.d)("{name} Role Management", {
                            name: e
                        }, "DevCompanyMembers"))), o.createElement(h.Va, null, o.createElement(P, {
                            members: this.state.members,
                            canAddUser: this.state.canAddUser,
                            canRemoveUser: this.state.canRemoveUser,
                            onAddClick: this.onAddClick,
                            onRemoveClick: this.onRemoveClick
                        }))))
                    }, t
                }(o.Component),
                q = Object(s.compose)(Object(l.c)("DevCompanyOverview", {
                    destination: k.a.DevSiteCompanyOverview
                }), Object(_.a)({
                    location: C.PageviewLocation.DevSiteCompanyOverview
                }), Object(w.a)())(V);
            var L = Object(a.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    showAddUserModal: function(e) {
                        var t = n.__rest(e, []);
                        return Object(i.d)(v, t)
                    }
                }, e)
            })(q);
            r.d(t, "DevCompanyOverviewPage", function() {
                return L
            })
        },
        NZDK: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return d
            });
            var n = r("mrSG"),
                a = r("hnrd"),
                s = r("/7QA"),
                i = r("D7An"),
                o = r("H/lO"),
                c = r("vR4/"),
                u = r("BSTw"),
                l = r("Z9JJ"),
                p = {
                    games: {
                        indexName: o.a.Games,
                        hitsPerPage: 2,
                        topNumericFilters: ["popularity>1"],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    videos: {
                        indexName: o.a.Videos,
                        hitsPerPage: 6,
                        get topNumericFilters() {
                            return ["created_at>" + h(function() {
                                var e = new Date;
                                return e.setMonth(e.getMonth() - 1), Math.floor(e.getTime() / 1e3)
                            }())]
                        },
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    users: {
                        indexName: o.a.Users,
                        hitsPerPage: 2,
                        topNumericFilters: ["followers>50"],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    channels: {
                        indexName: o.a.Channels,
                        hitsPerPage: 6,
                        get topNumericFilters() {
                            return ["channel_count>10", "updated_on>" + h(m())]
                        },
                        get singleTypeNumericFilters() {
                            return ["updated_on>" + h(m())]
                        },
                        optionalFacetFilters: ""
                    },
                    communities: {
                        indexName: o.a.Communities,
                        hitsPerPage: 2,
                        topNumericFilters: [],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    streamTags: {
                        indexName: o.a.StreamTags,
                        hitsPerPage: 2,
                        topNumericFilters: [],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    tags: {
                        indexName: o.a.Tags,
                        hitsPerPage: 2,
                        topNumericFilters: [],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    }
                },
                d = function() {
                    function e(e) {
                        this.apolloClient = e.apolloClient, this.client = a(e.appId, e.apiKey), this.stats = e.stats, this.logger = e.logger.withCategory("search-client"), this.sendSearchRequestToForage = "variant" === s.o.experiments.getAssignment(i.b.NewSearchBackend), this.getCountryCode()
                    }
                    return e.prototype.queryTopResults = function(e, t) {
                        return n.__awaiter(this, void 0, void 0, function() {
                            var r, a, s, i;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return a = [], (r = []).push(this.getTopResult(p.games, e)), r.push(this.getTopResult(p.videos, e)), r.push(this.getTopResult(p.users, e)), r.push(this.getTopResult(p.channels, e)), r.push(this.getTopResult(p.communities, e)), a.push(this.getTotalResult(p.games, e)), a.push(this.getTotalResult(p.videos, e)), a.push(this.getTotalResult(p.users, e)), a.push(this.getTotalResult(p.channels, e)), [4, this.query(r.concat(a))];
                                    case 1:
                                        return (s = n.sent()) ? (i = s.results, [2, {
                                            id: t,
                                            games: {
                                                totalHits: i[5].nbHits,
                                                hits: i[0].hits
                                            },
                                            videos: {
                                                totalHits: i[6].nbHits,
                                                hits: i[1].hits
                                            },
                                            users: {
                                                totalHits: i[7].nbHits,
                                                hits: i[2].hits
                                            },
                                            channels: {
                                                totalHits: i[8].nbHits,
                                                hits: i[3].hits
                                            },
                                            communities: {
                                                totalHits: i[4].nbHits,
                                                hits: i[4].hits
                                            }
                                        }]) : [2, function(e) {
                                            return {
                                                id: e,
                                                games: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                videos: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                users: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                channels: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                communities: {
                                                    totalHits: 0,
                                                    hits: []
                                                }
                                            }
                                        }(t)]
                                }
                            })
                        })
                    }, e.prototype.queryForType = function(e, t, r, a) {
                        var s = void 0 === a ? {} : a,
                            i = s.page,
                            c = void 0 === i ? 0 : i,
                            u = s.hitsPerPage,
                            l = void 0 === u ? 50 : u,
                            d = s.facetFilters,
                            m = void 0 === d ? "" : d,
                            h = s.numericFilters,
                            f = s.restrictSearchableAttributes,
                            g = void 0 === f ? [] : f;
                        return n.__awaiter(this, void 0, void 0, function() {
                            var a, s, i, u, d, f, v, b, y, _ = this;
                            return n.__generator(this, function(S) {
                                switch (S.label) {
                                    case 0:
                                        switch (a = {
                                            id: r,
                                            currentPage: c
                                        }, s = function(e) {
                                            return n.__awaiter(_, void 0, void 0, function() {
                                                var r, s;
                                                return n.__generator(this, function(n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return r = {
                                                                indexName: e.indexName,
                                                                query: t,
                                                                params: {
                                                                    page: c,
                                                                    hitsPerPage: l,
                                                                    numericFilters: h || e.singleTypeNumericFilters,
                                                                    facets: "*",
                                                                    facetFilters: m,
                                                                    restrictSearchableAttributes: g
                                                                }
                                                            }, [4, this.query([r])];
                                                        case 1:
                                                            return (s = n.sent()) ? (a.exhaustedHits = !s.results[0].nbHits || s.results[0].hits.length < l, [2, {
                                                                totalHits: s.results[0].nbHits,
                                                                hits: s.results[0].hits
                                                            }]) : (a.exhaustedHits = !0, [2, {
                                                                totalHits: 0,
                                                                hits: []
                                                            }])
                                                    }
                                                })
                                            })
                                        }, e) {
                                            case o.a.Games:
                                                return [3, 1];
                                            case o.a.Users:
                                                return [3, 3];
                                            case o.a.Channels:
                                                return [3, 5];
                                            case o.a.Videos:
                                                return [3, 7];
                                            case o.a.Communities:
                                                return [3, 9];
                                            case o.a.StreamTags:
                                                return [3, 11];
                                            case o.a.Tags:
                                                return [3, 13]
                                        }
                                        return [3, 15];
                                    case 1:
                                        return i = a, [4, s(p.games)];
                                    case 2:
                                        return i.games = S.sent(), [3, 16];
                                    case 3:
                                        return u = a, [4, s(p.users)];
                                    case 4:
                                        return u.users = S.sent(), [3, 16];
                                    case 5:
                                        return d = a, [4, s(p.channels)];
                                    case 6:
                                        return d.channels = S.sent(), [3, 16];
                                    case 7:
                                        return f = a, [4, s(p.videos)];
                                    case 8:
                                        return f.videos = S.sent(), [3, 16];
                                    case 9:
                                        return v = a, [4, s(p.communities)];
                                    case 10:
                                        return v.communities = S.sent(), [3, 16];
                                    case 11:
                                        return b = a, [4, s(p.streamTags)];
                                    case 12:
                                        return b.streamTags = S.sent(), [3, 16];
                                    case 13:
                                        return y = a, [4, s(p.tags)];
                                    case 14:
                                        return y.tags = S.sent(), [3, 16];
                                    case 15:
                                        return [2, null];
                                    case 16:
                                        return [2, a]
                                }
                            })
                        })
                    }, e.prototype.queryVideos = function(e, t, r) {
                        return n.__awaiter(this, void 0, void 0, function() {
                            var a, s, i, u;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        switch (a = o.a.Videos, s = [], r.length) {
                                            case c.a.Short:
                                                s.push("length<=900");
                                                break;
                                            case c.a.Long:
                                                s.push("length>900")
                                        }
                                        switch (i = {
                                            indexName: a,
                                            query: e,
                                            params: {
                                                page: 0,
                                                hitsPerPage: 50,
                                                numericFilters: s,
                                                facets: "*",
                                                facetFilters: ""
                                            }
                                        }, r.type) {
                                            case c.b.PastBroadcasts:
                                                i.params.facetFilters = "broadcast_type:archive";
                                                break;
                                            case c.b.Uploads:
                                                i.params.facetFilters = "broadcast_type:upload";
                                                break;
                                            case c.b.Highlights:
                                                i.params.facetFilters = "broadcast_type:highlight"
                                        }
                                        return [4, this.query([i])];
                                    case 1:
                                        return (u = n.sent()) ? [2, {
                                            id: t,
                                            totalHits: u.results[0].nbHits,
                                            hits: u.results[0].hits
                                        }] : [2, {
                                            id: t,
                                            totalHits: 0,
                                            hits: []
                                        }]
                                }
                            })
                        })
                    }, e.prototype.getCountryCode = function() {
                        var e = this;
                        this.apolloClient.query({
                            query: u
                        }).then(function(t) {
                            e.countryCode = t.data.requestInfo.countryCode
                        }).catch(function(t) {
                            e.logger.error(t, "Failed to get country code")
                        })
                    }, e.prototype.getSearchResults = function(e) {
                        var t = this,
                            r = {
                                query: e,
                                platform: "web"
                            };
                        return this.apolloClient.query({
                            query: l,
                            variables: r
                        }).then(function(e) {
                            if (e.data.search) return {
                                results: JSON.parse(e.data.search.result)
                            }
                        }).catch(function(e) {
                            return t.logger.error(e, "Failed to get search results"), e
                        })
                    }, e.prototype.getTopResult = function(e, t) {
                        return {
                            indexName: e.indexName,
                            query: t,
                            params: {
                                page: 0,
                                hitsPerPage: e.hitsPerPage,
                                numericFilters: e.topNumericFilters
                            }
                        }
                    }, e.prototype.getTotalResult = function(e, t) {
                        return {
                            indexName: e.indexName,
                            query: t,
                            params: {
                                hitsPerPage: 0,
                                numericFilters: e.singleTypeNumericFilters
                            }
                        }
                    }, e.prototype.query = function(e) {
                        return n.__awaiter(this, void 0, void 0, function() {
                            var t, r, a, s, i;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        r = Date.now(), s = !1, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 6, , 7]), this.sendSearchRequestToForage && e.length > 7 ? (i = e[0].query, [4, this.getSearchResults(i)]) : [3, 3];
                                    case 2:
                                        return t = n.sent(), [3, 5];
                                    case 3:
                                        return [4, this.client.search(e)];
                                    case 4:
                                        t = n.sent(), n.label = 5;
                                    case 5:
                                        return [3, 7];
                                    case 6:
                                        return n.sent(), s = !0, t = null, [3, 7];
                                    case 7:
                                        return a = Date.now(), this.countryCode && (s ? this.stats.recordSearchError(this.countryCode, a - r) : this.stats.recordSearchSuccess(this.countryCode, a - r)), [2, t]
                                }
                            })
                        })
                    }, e
                }();

            function m() {
                return Math.floor(((new Date).getTime() - 6e5) / 1e3)
            }

            function h(e) {
                return e <= 100 ? e : 100 * Math.round(e / 100)
            }
        },
        "V+GM": function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("cr+I"),
                s = r("q1tI"),
                i = r("wIs1"),
                o = r("/7QA");

            function c(e) {
                return function(t) {
                    var r = function(r) {
                        function i(t) {
                            var a = r.call(this, t) || this;
                            return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                                if (!(a.tracked || e.skip && e.skip(a.props))) {
                                    a.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = n.__assign({}, e.properties));
                                    var r = n.__assign({}, a.props);
                                    r.location && r.location.state && (t.medium = r.location.state.medium, t.content = r.location.state.content, t.content_index = r.location.state.content_index, t.email_id = r.location.state.email_id);
                                    var s = a.referenceTracking,
                                        i = s.content,
                                        c = s.medium,
                                        u = s.content_index,
                                        l = s.email_id;
                                    o.o.tracking.trackPageview(n.__assign({
                                        content: i,
                                        medium: c,
                                        content_index: u,
                                        email_id: l,
                                        location: e.location
                                    }, t))
                                }
                            }, o.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : o.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                        }
                        return n.__extends(i, r), i.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, r) {
                                "REPLACE" !== r && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, i.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, i.prototype.render = function() {
                            return s.createElement(t, n.__assign({}, this.props))
                        }, i.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? a.parse(e.search) : {},
                                r = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, r.medium || r.content || r.email_id) {
                                var n = "",
                                    s = a.stringify(t);
                                s.length > 0 && (n = "?" + s), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: n
                                })
                            }
                            return r
                        }, i
                    }(s.Component);
                    return Object(i.a)(r)
                }
            }
            r.d(t, "a", function() {
                return c
            })
        },
        Z9JJ: function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "NavSearch"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "query"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "platform"
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
                                value: "search"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "userQuery"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "query"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "platform"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "platform"
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
                                        value: "result"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 112
                }
            };
            r.loc.source = {
                body: "query NavSearch($query: String! $platform: String!) {\nsearch(userQuery: $query platform: $platform) {\nresult\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        t04z: function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DevCompanyMembers"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "ids"
                            }
                        },
                        type: {
                            kind: "ListType",
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
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "users"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "ids"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "ids"
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
                                        value: "id"
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
                                            value: "150"
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
                    end: 92
                }
            };
            r.loc.source = {
                body: "query DevCompanyMembers($ids: [ID!]) {\nusers(ids: $ids) {\nid\nprofileImageURL(width: 150)\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        tl6o: function(e, t, r) {
            "use strict";
            r.d(t, "c", function() {
                return n
            }), r.d(t, "b", function() {
                return a
            }), r.d(t, "a", function() {
                return s
            });
            var n = "d3b9f0d8-68e2-4557-8f73-dd0ea151eef3",
                a = 20,
                s = "https://gds-vhs-drops-campaign-images.twitch.tv"
        },
        uLRL: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return l
            });
            var n = r("mrSG"),
                a = r("q1tI"),
                s = r("/MKj"),
                i = r("mLw1"),
                o = r("2Ygb"),
                c = r("dEJ+"),
                u = r("Ue10");

            function l() {
                return function(e) {
                    var t = function(t) {
                        function r() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return n.__extends(r, t), r.prototype.render = function() {
                            if (this.props.loaded && this.props.company) {
                                var t = {
                                    company: this.props.company
                                };
                                return a.createElement(e, n.__assign({}, this.props, t))
                            }
                            return this.props.loaded && !this.props.company ? a.createElement(i.a, {
                                to: "/request-access"
                            }) : a.createElement(u.Xa, null)
                        }, r.displayName = Object(o.a)(r.name, e), r
                    }(a.Component);
                    return Object(s.connect)(function(e) {
                        return {
                            loaded: Object(c.b)(e),
                            company: Object(c.c)(e)
                        }
                    })(t)
                }
            }
        },
        "vR4/": function(e, t, r) {
            "use strict";
            var n, a;
            r.d(t, "b", function() {
                    return n
                }), r.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e[e.AllVideos = 0] = "AllVideos", e[e.PastBroadcasts = 1] = "PastBroadcasts", e[e.Uploads = 2] = "Uploads", e[e.Highlights = 3] = "Highlights"
                }(n || (n = {})),
                function(e) {
                    e[e.AnyLength = 0] = "AnyLength", e[e.Short = 1] = "Short", e[e.Long = 2] = "Long"
                }(a || (a = {}))
        },
        yLwq: function(e, t, r) {
            "use strict";
            r.d(t, "b", function() {
                return n
            }), r.d(t, "a", function() {
                return a
            }), r.d(t, "c", function() {
                return s
            });
            var n = [{
                id: "profile_image_001",
                urlSlug: "bb97f7e6-f11a-4194-9708-52bf5a5125e8"
            }, {
                id: "profile_image_002",
                urlSlug: "27103734-3cda-44d6-a384-f2ab71e4bb85"
            }, {
                id: "profile_image_003",
                urlSlug: "49988c7b-57bc-4dee-bd4f-6df4ad215d3a"
            }, {
                id: "profile_image_004",
                urlSlug: "0ecbb6c3-fecb-4016-8115-aa467b7c36ed"
            }, {
                id: "profile_image_005",
                urlSlug: "cd618d3e-f14d-4960-b7cf-094231b04735"
            }, {
                id: "profile_image_006",
                urlSlug: "4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5"
            }, {
                id: "profile_image_007",
                urlSlug: "b83b1794-7df9-4878-916c-88c2ad2e4f9f"
            }];

            function a(e, t) {
                var r = 70;
                return 300 === t ? r = 300 : 96 !== t && 80 !== t || (r = 150), "https://static-cdn.jtvnw.net/user-default-pictures/" + e.urlSlug + "-profile_image-" + r + "x" + r + ".jpg"
            }

            function s(e, t) {
                var r = parseInt(e, 10) % n.length;
                return a(n[r], t)
            }
        }
    }
]);