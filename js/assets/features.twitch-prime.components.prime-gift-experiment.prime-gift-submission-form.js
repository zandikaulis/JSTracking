(window.webpackJsonp = window.webpackJsonp || []).push([
    [84], {
        "+Zk8": function(e, t, i) {
            "use strict";
            i.r(t);
            var n = i("mrSG"),
                r = i("q1tI"),
                a = i("oJmH"),
                s = i("/7QA"),
                o = i("yR8l"),
                l = i("geRD"),
                u = i("GnwI"),
                c = i("8Ad5"),
                d = i("f00E"),
                m = i("H/lO"),
                p = i("NZDK"),
                h = i("9kXc"),
                g = i("8/mp"),
                f = i("QVaV"),
                b = i("Ue10"),
                v = (i("Uloc"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            selectedUser: null
                        }, t.onUserClick = function(e) {
                            for (var i = e.target; i.parentElement && !i.dataset.user_id;) i = i.parentElement;
                            i.dataset.user_id && i.dataset.user_login && i.dataset.user_name ? t.setState({
                                selectedUser: {
                                    id: i.dataset.user_id || "",
                                    login: i.dataset.user_login || "",
                                    name: i.dataset.user_name || ""
                                }
                            }, function() {
                                return t.updateFormState()
                            }) : t.setState({
                                selectedUser: null
                            }, function() {
                                return t.updateFormState()
                            })
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        (e.isWaiting || e.isErrored || !e.hasInput) && this.setState({
                            selectedUser: null
                        })
                    }, t.prototype.render = function() {
                        var e;
                        return e = this.props.isWaiting ? r.createElement(b.Wa, {
                            fullHeight: !0
                        }, r.createElement(b.Ya, {
                            fillContent: !0
                        })) : this.props.hasInput ? this.props.isErrored ? this.getErrorMessage() : this.props.userResults && this.props.userResults.totalHits > 0 ? this.getUserResultContent() : this.getNoResultsMessage() : r.createElement(b.Wa, {
                            margin: 1
                        }, r.createElement(b.W, {
                            color: b.O.Alt2
                        }, Object(s.d)("Start typing to see a list of suggestions here.", "PrimeGiftExperiment"))), r.createElement("div", {
                            onKeyDown: this.props.onKeyDown
                        }, r.createElement(b.yb, {
                            className: "gift-recipient-search-result-view",
                            background: b.r.Alt,
                            position: b.eb.Relative,
                            overflow: b.Za.Hidden,
                            display: b.X.Block,
                            margin: {
                                bottom: 2
                            },
                            borderLeft: !0,
                            borderBottom: !0,
                            borderRight: !0
                        }, r.createElement(b.Oa, {
                            overflow: b.Za.Hidden,
                            position: b.eb.Relative
                        }, r.createElement(g.b, {
                            suppressScrollX: !0
                        }, r.createElement(b.Wa, null, e, r.createElement(g.a, {
                            enabled: !this.props.isWaiting && this.props.hasInput,
                            loadMore: this.props.loadMore
                        }))))))
                    }, t.prototype.getErrorMessage = function() {
                        return r.createElement(b.Wa, {
                            fullWidth: !0,
                            textAlign: b.Kb.Center,
                            justifyContent: b.Va.Center
                        }, r.createElement(b.W, null, Object(s.d)("Something went wrong", "PrimeGiftExperiment")))
                    }, t.prototype.getUserResultContent = function() {
                        var e = this;
                        return this.props.userResults ? this.props.userResults.results.map(function(t) {
                            var i = Object(f.a)(t.login || "", t.name || "");
                            return r.createElement(b.Ta, {
                                tabIndex: -1,
                                "data-ts_selectable": !0,
                                "data-tt_content": !0,
                                key: "git-recipient-result__" + t.id,
                                "data-user_id": t.id,
                                "data-user_login": t.login,
                                "data-user_name": t.name,
                                onClick: e.onUserClick,
                                "data-test-selector": "subscribe-button__gift_search_result",
                                selected: !!e.state.selectedUser && e.state.selectedUser.id === t.id
                            }, r.createElement(b.Wa, {
                                padding: .5
                            }, r.createElement(b.G, {
                                row: !0
                            }, r.createElement(b.I, {
                                alt: t.thumbnailAltText,
                                src: t.thumbnail ? t.thumbnail : "",
                                size: b.J.Size4,
                                aspect: b.p.Aspect1x1
                            }), r.createElement(b.H, {
                                overflow: b.Za.Hidden
                            }, r.createElement(b.Oa, {
                                padding: {
                                    x: 1
                                }
                            }, r.createElement(b.W, {
                                type: b.Ob.H5,
                                ellipsis: !0
                            }, i))))))
                        }) : r.createElement(b.db, null)
                    }, t.prototype.updateFormState = function() {
                        this.props.handleFormAction({
                            giftRecipient: this.state.selectedUser
                        })
                    }, t.prototype.getNoResultsMessage = function() {
                        return r.createElement(b.Wa, {
                            margin: 1
                        }, r.createElement(b.W, {
                            color: b.O.Alt2
                        }, Object(s.d)("No Results", "PrimeGiftExperiment")))
                    }, t
                }(r.Component)),
                y = Object(a.compose)(Object(u.b)("GiftRecipientSearchResultPanel", {
                    autoReportInteractive: !0
                }))(v),
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleChange = function(e) {
                            t.props.onChange(e.target.value)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return this.props.handleFormAction ? r.createElement(b.Wa, {
                            className: "subscription-gift-recipient-search",
                            display: b.X.Flex,
                            justifyContent: b.Va.Center,
                            padding: {
                                top: 1
                            },
                            fullWidth: !0
                        }, r.createElement(b.Oa, {
                            fullWidth: !0
                        }, r.createElement("div", null, r.createElement(b.qb, {
                            onChange: this.handleChange,
                            onKeyDown: this.props.onKeyDown,
                            id: "gift-recipient-search",
                            placeholder: Object(s.d)("Search for a Twitch ID", "PrimeGiftExperiment"),
                            "data-test-selector": "gift-recipient-search-input-selector"
                        }), r.createElement(y, {
                            hasInput: this.props.hasInput,
                            userResults: this.props.userResults,
                            isErrored: this.props.isErrored,
                            isWaiting: this.props.isWaiting,
                            loadMore: this.props.loadMore,
                            onKeyDown: this.props.onKeyDown,
                            handleFormAction: this.props.handleFormAction
                        })))) : r.createElement(b.db, null)
                    }, t
                }(r.Component),
                k = 50,
                _ = function(e) {
                    function t(t) {
                        var i = e.call(this, t) || this;
                        return i.onChange = function(e) {
                            i.inputTimer && (clearTimeout(i.inputTimer), i.inputTimer = 0), e ? (i.setState({
                                isWaiting: !0
                            }), i.inputTimer = setTimeout(function() {
                                return i.doSearch(e)
                            }, k)) : i.setState(i.getEmptyState())
                        }, i.loadMore = function() {
                            return n.__awaiter(i, void 0, void 0, function() {
                                var e, t, i;
                                return n.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                            e = this.state.currentPage + 1, r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(m.a.Users, this.state.term, "", {
                                                page: e
                                            })];
                                        case 2:
                                            return t = r.sent(), [3, 4];
                                        case 3:
                                            return r.sent(), this.setState(n.__assign({}, this.getEmptyState(), {
                                                isErrored: !0,
                                                hasInput: !0
                                            })), [2];
                                        case 4:
                                            return t ? (i = Object(h.b)({
                                                searchResults: t,
                                                append: e > 0,
                                                currentUserResults: this.state.currentUserResults
                                            }), this.setState({
                                                currentUserResults: i.currentUserResults,
                                                term: this.state.term,
                                                hasInput: !0,
                                                isWaiting: !1,
                                                currentPage: e,
                                                exhaustedHits: i.exhaustedHits
                                            }), [2]) : (this.setState(n.__assign({}, this.getEmptyState(), {
                                                isErrored: !0,
                                                hasInput: !0
                                            })), [2])
                                    }
                                })
                            })
                        }, i.onKeyDown = function(e) {
                            i.state.term && (e.keyCode === c.a.Esc ? i.setState({
                                hasInput: !1
                            }) : e.keyCode === c.a.Up ? i.focusNext(-1) : e.keyCode === c.a.Down && i.focusNext(1))
                        }, i.state = i.getEmptyState(), i.searchClient = new p.a({
                            appId: s.a.algoliaApplicationID,
                            apiKey: s.a.algoliaAPIKey,
                            apolloClient: s.p.apollo.client,
                            logger: s.k,
                            config: s.a,
                            stats: s.p.stats
                        }), i
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(S, {
                            onChange: this.onChange,
                            loadMore: this.loadMore,
                            onKeyDown: this.onKeyDown,
                            userResults: this.state.currentUserResults,
                            handleFormAction: this.props.handleFormAction,
                            hasInput: this.state.hasInput,
                            isErrored: this.state.isErrored,
                            isWaiting: this.state.isWaiting,
                            onBack: this.props.onBack
                        })
                    }, t.prototype.getEmptyState = function() {
                        return {
                            currentUserResults: {
                                totalHits: 0,
                                results: []
                            },
                            term: "",
                            hasInput: !1,
                            isErrored: !1,
                            queryID: "",
                            isWaiting: !1,
                            currentPage: -1,
                            focusSelectable: !1,
                            exhaustedHits: !1
                        }
                    }, t.prototype.doSearch = function(e) {
                        return n.__awaiter(this, void 0, void 0, function() {
                            var t, i, r, a, s;
                            return n.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        this.inputTimer = 0, t = -1, i = d.a(), r = "INPUT" === document.activeElement.tagName, this.setState({
                                            queryID: i,
                                            focusSelectable: !r && !!this.state.currentFocus
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(m.a.Users, e, i)];
                                    case 2:
                                        return a = o.sent(), [3, 4];
                                    case 3:
                                        return o.sent(), this.setState(n.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0,
                                            term: e
                                        })), [2];
                                    case 4:
                                        return a ? this.state.queryID !== a.id ? [2] : (s = Object(h.b)({
                                            searchResults: a,
                                            append: !1
                                        }), this.setState(function(i) {
                                            return n.__assign({}, i, s, {
                                                queryID: "",
                                                term: e,
                                                hasInput: !0,
                                                isWaiting: !1,
                                                currentPage: t
                                            })
                                        }), [2]) : (this.setState(n.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0,
                                            term: e
                                        })), [2])
                                }
                            })
                        })
                    }, t.prototype.focusNext = function(e) {
                        var t, i = document.querySelectorAll("[data-ts_selectable=true]"),
                            n = document.activeElement,
                            r = Array.prototype.indexOf.call(i, n);
                        if ((t = r < 0 ? e > 0 ? 0 : i.length - 1 : r + e) < 0 && (t = 0), !(t >= i.length)) {
                            var a = i.item(t);
                            a.focus(), a.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                                currentFocus: a
                            })
                        }
                    }, t
                }(r.Component),
                N = Object(a.compose)(Object(u.b)("GiftRecipientSearch", {
                    autoReportInteractive: !0
                }))(_),
                E = i("0KHE"),
                F = (i("g1hO"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            serverMessage: {},
                            isSubmitInTransit: !1,
                            isGiftSubmissionDisabled: !t.props.giftRecipient,
                            giftRecipient: t.props.giftRecipient
                        }, t.goBack = function() {
                            t.state.isSubmitInTransit
                        }, t.handleFormAction = function(e) {
                            t.setState({
                                isGiftSubmissionDisabled: !e.giftRecipient,
                                giftRecipient: e.giftRecipient,
                                giftSuccess: !1
                            })
                        }, t.onGiftClick = function() {
                            return n.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return n.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (this.state.isSubmitInTransit || !this.state.giftRecipient || !this.state.giftRecipient.id) return [2];
                                            this.setState({
                                                isSubmitInTransit: !0,
                                                error: !1,
                                                giftSuccess: !1
                                            }), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, this.props.giveGift(Object(l.a)({
                                                to: this.state.giftRecipient.id,
                                                offerID: this.props.offerID
                                            }))];
                                        case 2:
                                            return e = i.sent(), !(t = e.data) || !t.giftOffer || !t.giftOffer.gift || t.giftOffer.error && t.giftOffer.error.code ? this.setState({
                                                isSubmitInTransit: !1,
                                                error: !0
                                            }) : this.state.giftRecipient && (this.props.updateGiftRecipientList(this.state.giftRecipient.login), this.setState({
                                                isSubmitInTransit: !1,
                                                error: !1,
                                                giftSuccess: !0
                                            })), [3, 4];
                                        case 3:
                                            return i.sent(), this.setState({
                                                isSubmitInTransit: !1,
                                                error: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(b.yb, {
                            display: b.X.Flex,
                            flexDirection: b.Z.Column,
                            background: b.r.Base
                        }, this.renderHeader(), this.renderHorizontalRule(), this.renderBody(), this.renderFooter())
                    }, t.prototype.renderHorizontalRule = function() {
                        return r.createElement(b.yb, {
                            fullWidth: !0,
                            flexGrow: 1,
                            borderTop: !0
                        })
                    }, t.prototype.renderHeader = function() {
                        return r.createElement(b.Wa, {
                            display: b.X.Flex,
                            flexDirection: b.Z.Row,
                            justifyContent: b.Va.Center,
                            alignItems: b.f.Center,
                            padding: 2
                        }, r.createElement(b.W, {
                            fontSize: b.Ba.Size4,
                            bold: !0
                        }, Object(s.d)("Choose a Gift Recipient", "PrimeGiftExperimentSubmission")), r.createElement(b.Wa, {
                            display: b.X.InlineFlex,
                            margin: 1,
                            attachRight: !0
                        }, r.createElement(b.bb, {
                            label: Object(s.d)("Beta", "PrimeGiftExperiment")
                        })))
                    }, t.prototype.renderBody = function() {
                        return r.createElement(b.Wa, {
                            padding: {
                                x: 2
                            }
                        }, r.createElement(b.Wa, {
                            margin: {
                                top: 1
                            }
                        }, r.createElement(b.W, {
                            type: b.Ob.Span
                        }, Object(s.d)("The recipient will receive a notification and will need to claim the gift before the offer expires.", "PrimeGiftExperimentSubmission"))), r.createElement(N, {
                            key: "gift-recipient-search-page",
                            onBack: this.goBack,
                            handleFormAction: this.handleFormAction
                        }), this.renderRecipients())
                    }, t.prototype.renderRecipients = function() {
                        if (this.state.error) return r.createElement(b.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(b.W, {
                            color: b.O.Alt2,
                            italic: !0
                        }, Object(s.d)("Sorry, it looks like an error occured when we tried to send this gift. Help us improve this beta feature by <x:link>emailing us a bug report</x:link>", {
                            "x:link": function(e) {
                                return r.createElement("a", {
                                    href: "https://help.twitch.tv/customer/portal/emails/new?ticket[custom_category]=Twitch%20Prime&email[subject]=&email[body]=",
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                }, e)
                            }
                        }, "PrimeGiftExperimentSubmission")));
                        var e = this.props.getGiftRecipientList();
                        return e ? r.createElement(b.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(b.W, null, Object(s.d)("Sent gifts to <x:bold>{giftLogins}</x:bold>", {
                            "x:bold": function(e) {
                                return r.createElement(b.W, {
                                    type: b.Ob.Span,
                                    bold: !0
                                }, e)
                            },
                            giftLogins: e.join(", ")
                        }, "PrimeGiftExperimentSubmission"))) : null
                    }, t.prototype.renderFooter = function() {
                        var e = 10 - this.props.getGiftRecipientList().length;
                        return r.createElement(b.yb, {
                            display: b.X.Flex,
                            background: b.r.Alt2,
                            attachBottom: !0,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, r.createElement(b.Wa, {
                            display: b.X.Flex,
                            flexGrow: 1,
                            flexShrink: 1,
                            alignItems: b.f.Center
                        }, r.createElement(b.W, null, Object(s.d)("{remainingGifts,number} gifts remain", {
                            remainingGifts: e
                        }, "PrimeGiftExperimentSubmission"))), r.createElement(b.Wa, {
                            flexGrow: 0,
                            flexShrink: 0,
                            verticalAlign: b.Yb.Middle
                        }, r.createElement(b.i, {
                            duration: b.k.Medium,
                            enabled: this.state.giftSuccess,
                            type: b.n.Bounce
                        }, r.createElement(b.z, {
                            disabled: this.state.isGiftSubmissionDisabled || this.state.isSubmitInTransit || e <= 0 || this.state.giftSuccess,
                            "data-test-selector": "prime-send-gift-button",
                            state: this.state.isSubmitInTransit ? b.E.Loading : b.E.Default,
                            onClick: this.onGiftClick
                        }, Object(s.d)("Send as a Gift", "PrimeGiftExperimentSubmission")))))
                    }, t
                }(r.Component)),
                R = Object(a.compose)(Object(o.a)(E, {
                    name: "giveGift"
                }), Object(u.b)("GiftForm", {
                    autoReportInteractive: !0
                }))(F);
            i.d(t, "PRIME_SEND_GIFT_BUTTON_SELECTOR", function() {
                return "prime-send-gift-button"
            }), i.d(t, "GiftFormComponent", function() {
                return F
            }), i.d(t, "GiftForm", function() {
                return R
            })
        },
        "0KHE": function(e, t) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "PrimeGiftSubmission_GiveGiftMutation"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "input"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "GiftOfferInput"
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
                                value: "giftOffer"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "input"
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
                                        value: "gift"
                                    },
                                    arguments: [],
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
                                                value: "from"
                                            },
                                            arguments: [],
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
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "offerConnection"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "status"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "gifts"
                                                    },
                                                    arguments: [],
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
                                                        }]
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "to"
                                            },
                                            arguments: [],
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
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "error"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "code"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 204
                }
            };
            i.loc.source = {
                body: "mutation PrimeGiftSubmission_GiveGiftMutation($input: GiftOfferInput!) {\ngiftOffer(input: $input) {\ngift {\nid\nfrom {\nid\nlogin\n}\nofferConnection {\nstatus\ngifts {\nid\n}\n}\nto {\nid\nlogin\n}\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = i
        },
        "8Ad5": function(e, t, i) {
            "use strict";
            var n;
            i.d(t, "a", function() {
                    return n
                }),
                function(e) {
                    e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.Enter = 13] = "Enter", e[e.Esc = 27] = "Esc", e[e.Space = 32] = "Space", e[e.Left = 37] = "Left", e[e.Up = 38] = "Up", e[e.Right = 39] = "Right", e[e.Down = 40] = "Down", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.At = 64] = "At", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.Comma = 188] = "Comma", e[e.Period = 190] = "Period"
                }(n || (n = {}))
        },
        "9kXc": function(e, t, i) {
            "use strict";
            i.d(t, "b", function() {
                return l
            }), i.d(t, "a", function() {
                return u
            });
            var n = i("/7QA"),
                r = i("yLwq"),
                a = i("kduP"),
                s = i("2xye"),
                o = i("sLmD");

            function l(e) {
                var t, i, o, l, d = e.append,
                    m = void 0 !== d && d,
                    p = e.searchResults,
                    h = e.currentGameResults,
                    g = e.currentUserResults,
                    f = e.currentVideoResults,
                    b = e.currentLiveResults;
                if (p.games && (t = {
                        totalHits: p.games.totalHits,
                        results: m && h ? h.results : []
                    }, m && p.exhaustedHits && h && !p.games.totalHits && (t.totalHits = h.totalHits), t.results = t.results.concat(p.games.hits.map(function(e, t) {
                        var i, r = n.p.intl.getLanguageCode();
                        i = r && void 0 !== e.localizations && r in e.localizations ? e.localizations[r] : e.name;
                        var o = c(e.tags);
                        return {
                            title: i,
                            thumbnailAltText: e.name,
                            linkTo: {
                                pathname: Object(a.c)(e.name),
                                state: {
                                    content: s.PageviewContent.Game,
                                    content_index: t,
                                    medium: s.PageviewMedium.NavSearch
                                }
                            },
                            id: e.objectID,
                            popularity: e.popularity,
                            tags: o
                        }
                    }))), p.videos) {
                    var v = m && f ? f.results : [],
                        y = p.videos.totalHits;
                    m && p.exhaustedHits && f && !p.videos.totalHits && (y = f.totalHits), o = function(e, t, i) {
                        return {
                            results: e.concat(t.hits.map(u)),
                            totalHits: t.totalHits || i
                        }
                    }(v, p.videos, y)
                }
                return p.users && (i = {
                    totalHits: m && g ? g.totalHits : p.users.totalHits,
                    results: m && g ? g.results : []
                }, m && p.exhaustedHits && g && !p.users.totalHits && (i.totalHits = g.totalHits), i.results = i.results.concat(p.users.hits.map(function(e, t) {
                    return {
                        login: e.login,
                        name: e.name,
                        thumbnail: e.profile_image || Object(r.c)(e.objectID, 64),
                        thumbnailAltText: e.name,
                        linkTo: {
                            pathname: "/" + e.login,
                            state: {
                                content: s.PageviewContent.User,
                                content_index: t,
                                medium: s.PageviewMedium.NavSearch
                            }
                        },
                        id: e.objectID,
                        followers: e.followers
                    }
                }))), p.channels && ((l = {
                    totalHits: m && b ? b.totalHits : p.channels.totalHits,
                    results: m && b ? b.results : []
                }).results = l.results.concat(p.channels.hits.map(function(e, t) {
                    var i = c(e.graffiti);
                    return {
                        viewerCount: e.channel_count,
                        login: e.login,
                        name: e.name,
                        thumbnailAltText: e.status,
                        linkTo: {
                            pathname: "/" + e.login,
                            state: {
                                content: s.PageviewContent.Live,
                                content_index: t,
                                medium: s.PageviewMedium.NavSearch
                            }
                        },
                        id: e.objectID,
                        status: e.status,
                        tags: i
                    }
                }))), {
                    currentGameResults: t,
                    currentUserResults: i,
                    currentLiveResults: l,
                    currentVideoResults: o,
                    exhaustedHits: p.exhaustedHits
                }
            }

            function u(e, t) {
                return {
                    title: e.title,
                    thumbnail: e.thumbnail,
                    thumbnailAltText: e.title,
                    linkTo: {
                        pathname: "/videos/" + e.objectID,
                        state: {
                            content: s.PageviewContent.Video,
                            content_index: t,
                            medium: s.PageviewMedium.NavSearch
                        }
                    },
                    login: e.broadcaster_login,
                    name: e.broadcaster_name,
                    createdAt: e.created_at,
                    length: e.length,
                    id: e.objectID
                }
            }

            function c(e) {
                if (e) return e.map(function(e) {
                    var t, i = Object(o.a)();
                    return t = i && void 0 !== e.localizations && i in e.localizations ? e.localizations[i] : e.name, {
                        id: e.id,
                        isLanguageTag: e.name.includes("auto___lang"),
                        localizedName: t,
                        tagName: e.name
                    }
                })
            }
        },
        BSTw: function(e, t) {
            var i = {
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
            i.loc.source = {
                body: "query Algolia_RequestInfo {\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = i
        },
        "H/lO": function(e, t, i) {
            "use strict";
            var n;
            i.d(t, "a", function() {
                    return n
                }),
                function(e) {
                    e.Games = "game", e.Videos = "vod", e.Users = "user", e.Channels = "live_channel", e.StreamTags = "stream_tag", e.Tags = "tag"
                }(n || (n = {}))
        },
        NZDK: function(e, t, i) {
            "use strict";
            i.d(t, "a", function() {
                return m
            });
            var n = i("mrSG"),
                r = i("hnrd"),
                a = i("/7QA"),
                s = i("D7An"),
                o = i("H/lO"),
                l = i("vR4/"),
                u = i("BSTw"),
                c = i("Z9JJ"),
                d = {
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
                            return ["channel_count>10", "updated_on>" + h(p())]
                        },
                        get singleTypeNumericFilters() {
                            return ["updated_on>" + h(p())]
                        },
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
                m = function() {
                    function e(e) {
                        this.apolloClient = e.apolloClient, this.client = r(e.appId, e.apiKey), this.stats = e.stats, this.logger = e.logger.withCategory("search-client"), this.sendSearchRequestToForage = "variant" === a.p.experiments.getAssignment(s.b.NewSearchBackend), this.getCountryCode()
                    }
                    return e.prototype.queryTopResults = function(e, t) {
                        return n.__awaiter(this, void 0, void 0, function() {
                            var i, r, a, s;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return r = [], (i = []).push(this.getTopResult(d.games, e)), i.push(this.getTopResult(d.videos, e)), i.push(this.getTopResult(d.users, e)), i.push(this.getTopResult(d.channels, e)), r.push(this.getTotalResult(d.games, e)), r.push(this.getTotalResult(d.videos, e)), r.push(this.getTotalResult(d.users, e)), r.push(this.getTotalResult(d.channels, e)), [4, this.query(i.concat(r))];
                                    case 1:
                                        return (a = n.sent()) ? (s = a.results, [2, {
                                            id: t,
                                            games: {
                                                totalHits: s[4].nbHits,
                                                hits: s[0].hits
                                            },
                                            videos: {
                                                totalHits: s[5].nbHits,
                                                hits: s[1].hits
                                            },
                                            users: {
                                                totalHits: s[6].nbHits,
                                                hits: s[2].hits
                                            },
                                            channels: {
                                                totalHits: s[7].nbHits,
                                                hits: s[3].hits
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
                                                }
                                            }
                                        }(t)]
                                }
                            })
                        })
                    }, e.prototype.queryForType = function(e, t, i, r) {
                        var a = void 0 === r ? {} : r,
                            s = a.page,
                            l = void 0 === s ? 0 : s,
                            u = a.hitsPerPage,
                            c = void 0 === u ? 50 : u,
                            m = a.facetFilters,
                            p = void 0 === m ? "" : m,
                            h = a.numericFilters,
                            g = a.restrictSearchableAttributes,
                            f = void 0 === g ? [] : g;
                        return n.__awaiter(this, void 0, void 0, function() {
                            var r, a, s, u, m, g, b, v, y = this;
                            return n.__generator(this, function(S) {
                                switch (S.label) {
                                    case 0:
                                        switch (r = {
                                            id: i,
                                            currentPage: l
                                        }, a = function(e) {
                                            return n.__awaiter(y, void 0, void 0, function() {
                                                var i, a;
                                                return n.__generator(this, function(n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return i = {
                                                                indexName: e.indexName,
                                                                query: t,
                                                                params: {
                                                                    page: l,
                                                                    hitsPerPage: c,
                                                                    numericFilters: h || e.singleTypeNumericFilters,
                                                                    facets: "*",
                                                                    facetFilters: p,
                                                                    restrictSearchableAttributes: f
                                                                }
                                                            }, [4, this.query([i])];
                                                        case 1:
                                                            return (a = n.sent()) ? (r.exhaustedHits = !a.results[0].nbHits || a.results[0].hits.length < c, [2, {
                                                                totalHits: a.results[0].nbHits,
                                                                hits: a.results[0].hits
                                                            }]) : (r.exhaustedHits = !0, [2, {
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
                                            case o.a.StreamTags:
                                                return [3, 9];
                                            case o.a.Tags:
                                                return [3, 11]
                                        }
                                        return [3, 13];
                                    case 1:
                                        return s = r, [4, a(d.games)];
                                    case 2:
                                        return s.games = S.sent(), [3, 14];
                                    case 3:
                                        return u = r, [4, a(d.users)];
                                    case 4:
                                        return u.users = S.sent(), [3, 14];
                                    case 5:
                                        return m = r, [4, a(d.channels)];
                                    case 6:
                                        return m.channels = S.sent(), [3, 14];
                                    case 7:
                                        return g = r, [4, a(d.videos)];
                                    case 8:
                                        return g.videos = S.sent(), [3, 14];
                                    case 9:
                                        return b = r, [4, a(d.streamTags)];
                                    case 10:
                                        return b.streamTags = S.sent(), [3, 14];
                                    case 11:
                                        return v = r, [4, a(d.tags)];
                                    case 12:
                                        return v.tags = S.sent(), [3, 14];
                                    case 13:
                                        return [2, null];
                                    case 14:
                                        return [2, r]
                                }
                            })
                        })
                    }, e.prototype.queryVideos = function(e, t, i) {
                        return n.__awaiter(this, void 0, void 0, function() {
                            var r, a, s, u;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        switch (r = o.a.Videos, a = [], i.length) {
                                            case l.a.Short:
                                                a.push("length<=900");
                                                break;
                                            case l.a.Long:
                                                a.push("length>900")
                                        }
                                        switch (s = {
                                            indexName: r,
                                            query: e,
                                            params: {
                                                page: 0,
                                                hitsPerPage: 50,
                                                numericFilters: a,
                                                facets: "*",
                                                facetFilters: ""
                                            }
                                        }, i.type) {
                                            case l.b.PastBroadcasts:
                                                s.params.facetFilters = "broadcast_type:archive";
                                                break;
                                            case l.b.Uploads:
                                                s.params.facetFilters = "broadcast_type:upload";
                                                break;
                                            case l.b.Highlights:
                                                s.params.facetFilters = "broadcast_type:highlight"
                                        }
                                        return [4, this.query([s])];
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
                            i = {
                                query: e,
                                platform: "web"
                            };
                        return this.apolloClient.query({
                            query: c,
                            variables: i,
                            fetchPolicy: "network-only"
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
                            var t, i, r, a, s;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        i = Date.now(), a = !1, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 6, , 7]), this.sendSearchRequestToForage && e.length > 7 ? (s = e[0].query, [4, this.getSearchResults(s)]) : [3, 3];
                                    case 2:
                                        return t = n.sent(), [3, 5];
                                    case 3:
                                        return [4, this.client.search(e)];
                                    case 4:
                                        t = n.sent(), n.label = 5;
                                    case 5:
                                        return [3, 7];
                                    case 6:
                                        return n.sent(), a = !0, t = null, [3, 7];
                                    case 7:
                                        return r = Date.now(), this.countryCode && (a ? this.stats.recordSearchError(this.countryCode, r - i) : this.stats.recordSearchSuccess(this.countryCode, r - i)), [2, t]
                                }
                            })
                        })
                    }, e
                }();

            function p() {
                return Math.floor(((new Date).getTime() - 6e5) / 1e3)
            }

            function h(e) {
                return e <= 100 ? e : 100 * Math.round(e / 100)
            }
        },
        QVaV: function(e, t, i) {
            "use strict";
            i.d(t, "a", function() {
                return a
            }), i.d(t, "b", function() {
                return s
            });
            var n = i("q1tI"),
                r = /^[\x00-\x7F]*$/,
                a = function(e, t, i) {
                    return void 0 === i && (i = !1), t && e && !s(t) ? i ? t + " (" + e + ")" : n.createElement("span", null, t, " ", n.createElement("span", {
                        className: "intl-login"
                    }, "(" + e + ")")) : t || (e || "")
                };

            function s(e) {
                return r.test(e)
            }
        },
        Uloc: function(e, t, i) {},
        Z9JJ: function(e, t) {
            var i = {
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
            i.loc.source = {
                body: "query NavSearch($query: String! $platform: String!) {\nsearch(userQuery: $query platform: $platform) {\nresult\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = i
        },
        g1hO: function(e, t, i) {},
        kduP: function(e, t, i) {
            "use strict";

            function n(e) {
                return "/directory/game/" + encodeURIComponent(e)
            }

            function r(e) {
                return "/communities/" + encodeURIComponent(e)
            }

            function a(e) {
                return "/events/" + encodeURIComponent(e)
            }

            function s(e) {
                return "/" + encodeURIComponent(e) + "/manager"
            }
            i.d(t, "c", function() {
                return n
            }), i.d(t, "a", function() {
                return r
            }), i.d(t, "b", function() {
                return a
            }), i.d(t, "d", function() {
                return s
            })
        },
        sLmD: function(e, t, i) {
            "use strict";
            i.d(t, "b", function() {
                return s
            }), i.d(t, "a", function() {
                return o
            });
            var n = i("/7QA"),
                r = "en-us",
                a = {
                    bg: "bg-bg",
                    cs: "cs-cz",
                    da: "da-dk",
                    de: "de-de",
                    el: "el-gr",
                    en: r,
                    "en-gb": r,
                    es: "es-es",
                    "es-mx": "es-mx",
                    fi: "fi-fi",
                    fr: "fr-fr",
                    hu: "hu-hu",
                    it: "it-it",
                    ja: "ja-jp",
                    ko: "ko-kr",
                    nl: "nl-nl",
                    no: "no-no",
                    pl: "pl-pl",
                    "pt-br": "pt-br",
                    pt: "pt-pt",
                    ro: "ro-ro",
                    ru: "ru-ru",
                    sk: "sk-sk",
                    sv: "sv-se",
                    th: "th-th",
                    tr: "tr-tr",
                    vi: "vi-vn",
                    "zh-cn": "zh-cn",
                    "zh-tw": "zh-tw"
                },
                s = function(e) {
                    var t, i = o();
                    return t = function(e) {
                        return void 0 !== e.tag_id
                    }(e) ? {
                        id: e.tag_id,
                        isLanguageTag: e.tag_name.includes("auto___lang"),
                        localizedName: "",
                        tagName: e.tag_name
                    } : {
                        id: e.objectID,
                        tagName: e.tag_name,
                        isAutomated: e.automated || !1,
                        localizedDescription: e.description_localizations && e.description_localizations[i] || "",
                        localizedName: ""
                    }, e.localizations && e.localizations[i] ? t.localizedName = e.localizations[i] : e.localizations && e.localizations[r] ? t.localizedName = e.localizations[r] : t.localizedName = t.tagName, t
                };

            function o() {
                return a[n.p.intl.getLanguageCode() || ""] || r
            }
        },
        "vR4/": function(e, t, i) {
            "use strict";
            var n, r;
            i.d(t, "b", function() {
                    return n
                }), i.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.AllVideos = 0] = "AllVideos", e[e.PastBroadcasts = 1] = "PastBroadcasts", e[e.Uploads = 2] = "Uploads", e[e.Highlights = 3] = "Highlights"
                }(n || (n = {})),
                function(e) {
                    e[e.AnyLength = 0] = "AnyLength", e[e.Short = 1] = "Short", e[e.Long = 2] = "Long"
                }(r || (r = {}))
        },
        yLwq: function(e, t, i) {
            "use strict";
            i.d(t, "b", function() {
                return n
            }), i.d(t, "a", function() {
                return r
            }), i.d(t, "c", function() {
                return a
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

            function r(e, t) {
                var i = 70;
                return 300 === t ? i = 300 : 96 !== t && 80 !== t || (i = 150), "https://static-cdn.jtvnw.net/user-default-pictures/" + e.urlSlug + "-profile_image-" + i + "x" + i + ".jpg"
            }

            function a(e, t) {
                var i = parseInt(e, 10) % n.length;
                return r(n[i], t)
            }
        }
    }
]);