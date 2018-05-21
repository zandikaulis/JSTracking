webpackJsonp([60], {
    "/gww": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("2KeS"),
            o = n("V5M+"),
            a = n("TToO"),
            s = n("GiK3"),
            m = n("3zLD"),
            u = n("6sO2"),
            l = n("+8VM"),
            c = n("7vx8"),
            d = n("oIkB"),
            p = n("vH/s"),
            y = n("UQNI"),
            h = n("Odds"),
            g = n("nC3l"),
            v = (n("sJt0"), "error-message"),
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? s.createElement(h._8, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(h.Q, {
                            color: h.K.Error,
                            type: h._49.H4,
                            "data-test-selector": v
                        }, Object(y.a)(t.state.error))) : null
                    }, t.onReasonChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            reason: n
                        })
                    }, t.banUserFromCommunity = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.banUserFromCommunity ? (e = a.__assign({}, Object(d.a)({
                                            communityID: this.props.communityID,
                                            userID: this.props.userID,
                                            reason: this.state.reason
                                        }), {
                                            optimisticResponse: {
                                                banUserFromCommunity: {
                                                    error: null,
                                                    __typename: "BanUserFromCommunityPayload"
                                                }
                                            }
                                        }), [4, this.props.banUserFromCommunity(e)]) : [2];
                                    case 1:
                                        return null === (t = n.sent()).data.banUserFromCommunity.error ? (u.o.tracking.track(p.SpadeEventType.CommunityModeration, {
                                            community_id: this.props.communityID,
                                            name: this.props.communityName,
                                            is_official: !1,
                                            user_id: this.props.currentUserID,
                                            target_id: this.props.userID,
                                            action: "ban",
                                            reason: this.state.reason
                                        }), this.props.onSuccess && this.props.onSuccess(), this.props.onCloseModal()) : this.setState({
                                            error: t.data.banUserFromCommunity.error
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(h._2, {
                        position: h._15.Relative
                    }, s.createElement(h._35, {
                        background: h.n.Base,
                        className: "stream-ban-modal"
                    }, s.createElement(h._8, {
                        padding: 2
                    }, this.renderErrorMessage(), s.createElement(h._8, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(h.Q, {
                        type: h._49.H4
                    }, Object(u.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), s.createElement(h._35, {
                        borderTop: !0
                    }, s.createElement(h._8, {
                        margin: {
                            y: 2
                        }
                    }, s.createElement(h.Q, {
                        bold: !0
                    }, Object(u.d)("Reason (Required)", "StreamBanModal")), s.createElement(h._4, {
                        type: h._5.Text,
                        placeholder: Object(u.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), s.createElement(h._35, {
                        borderTop: !0
                    }, s.createElement(h._8, {
                        padding: {
                            top: 2
                        },
                        textAlign: h._45.Center
                    }, s.createElement(h._8, {
                        display: h.R.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(h.v, {
                        type: h.B.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(u.d)("Cancel", "StreamBanModal"))), s.createElement(h._8, {
                        display: h.R.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(h.v, {
                        onClick: this.banUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "ban-button"
                    }, Object(u.d)("Ban", "StreamBanModal")))))), s.createElement(l.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(s.Component),
            k = Object(m.compose)(Object(c.a)(g, {
                name: "banUserFromCommunity"
            }))(f);
        var _ = Object(i.b)(null, function(e) {
            return Object(r.b)({
                onCloseModal: o.c
            }, e)
        })(k);
        n.d(t, "a", function() {
            return _
        })
    },
    "0w5y": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("2KeS"),
            o = n("V5M+"),
            a = n("TToO"),
            s = n("GiK3"),
            m = n("3zLD"),
            u = n("6sO2"),
            l = n("+8VM"),
            c = n("7vx8"),
            d = n("oIkB"),
            p = n("vH/s"),
            y = n("UQNI"),
            h = n("Odds"),
            g = (n("npyu"), n("plcU")),
            v = "error-message",
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        durationHours: 2,
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? s.createElement(h._8, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(h.Q, {
                            color: h.K.Error,
                            type: h._49.H4,
                            "data-test-selector": v
                        }, Object(y.a)(t.state.error))) : null
                    }, t.onReasonChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            reason: n
                        })
                    }, t.onDurationHoursChange = function(e) {
                        var n = parseInt(e.target.value, 10);
                        t.setState({
                            durationHours: n
                        })
                    }, t.timeoutUserFromCommunity = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.timeoutUserFromCommunity ? (e = a.__assign({}, Object(d.a)({
                                            communityID: this.props.communityID,
                                            durationHours: this.state.durationHours,
                                            userID: this.props.userID,
                                            reason: this.state.reason
                                        }), {
                                            optimisticResponse: {
                                                timeoutUserFromCommunity: {
                                                    error: null,
                                                    __typename: "TimeoutUserFromCommunityPayload"
                                                }
                                            }
                                        }), [4, this.props.timeoutUserFromCommunity(e)]) : [2];
                                    case 1:
                                        return null === (t = n.sent()).data.timeoutUserFromCommunity.error ? (u.o.tracking.track(p.SpadeEventType.CommunityModeration, {
                                            community_id: this.props.communityID,
                                            name: this.props.communityName,
                                            is_official: !1,
                                            user_id: this.props.currentUserID,
                                            target_id: this.props.userID,
                                            action: "timeout",
                                            reason: this.state.reason,
                                            duration: this.state.durationHours
                                        }), this.props.onSuccess && this.props.onSuccess(), this.props.onCloseModal()) : this.setState({
                                            error: t.data.timeoutUserFromCommunity.error
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(h._2, {
                        position: h._15.Relative
                    }, s.createElement(h._35, {
                        background: h.n.Base,
                        className: "stream-timeout-modal"
                    }, s.createElement(h._8, {
                        padding: 2
                    }, this.renderErrorMessage(), s.createElement(h._8, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(h.Q, {
                        type: h._49.H4
                    }, Object(u.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), s.createElement(h._35, {
                        borderTop: !0
                    }, s.createElement(h._8, {
                        margin: {
                            y: 2
                        }
                    }, s.createElement(h.Q, {
                        bold: !0
                    }, Object(u.d)("Reason (Required)", "StreamTimeoutModal")), s.createElement(h._4, {
                        type: h._5.Text,
                        placeholder: Object(u.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), s.createElement(h._8, {
                        margin: {
                            y: 2
                        }
                    }, s.createElement(h.Q, {
                        bold: !0
                    }, Object(u.d)("Duration", "StreamTimeoutModal")), s.createElement(h._30, {
                        defaultValue: "2",
                        onChange: this.onDurationHoursChange
                    }, s.createElement("option", {
                        value: "2"
                    }, Object(u.d)("2 hours", "StreamTimeoutModal")), s.createElement("option", {
                        value: "4"
                    }, Object(u.d)("4 hours", "StreamTimeoutModal")), s.createElement("option", {
                        value: "8"
                    }, Object(u.d)("8 hours", "StreamTimeoutModal")), s.createElement("option", {
                        value: "12"
                    }, Object(u.d)("12 hours", "StreamTimeoutModal")), s.createElement("option", {
                        value: "24"
                    }, Object(u.d)("24 hours", "StreamTimeoutModal")))), s.createElement(h._35, {
                        borderTop: !0
                    }, s.createElement(h._8, {
                        padding: {
                            top: 2
                        },
                        textAlign: h._45.Center
                    }, s.createElement(h._8, {
                        display: h.R.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(h.v, {
                        type: h.B.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(u.d)("Cancel", "StreamTimeoutModal"))), s.createElement(h._8, {
                        display: h.R.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(h.v, {
                        onClick: this.timeoutUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "timeout-button"
                    }, Object(u.d)("Timeout", "StreamTimeoutModal")))))), s.createElement(l.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(s.Component),
            k = Object(m.compose)(Object(c.a)(g, {
                name: "timeoutUserFromCommunity"
            }))(f);
        var _ = Object(i.b)(null, function(e) {
            return Object(r.b)({
                onCloseModal: o.c
            }, e)
        })(k);
        n.d(t, "a", function() {
            return _
        })
    },
    "1MwX": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpdateCommunityDisplayName"
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
                                value: "EditCommunityInput"
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
                            value: "editCommunity"
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
                                    value: "community"
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
                                            value: "displayName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "error"
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
                end: 136
            }
        };
        n.loc.source = {
            body: "mutation UpdateCommunityDisplayName($input: EditCommunityInput!) {\neditCommunity(input: $input) {\ncommunity {\nid\ndisplayName\n}\nerror\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "2t7f": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UntimeoutUserFromCommunity"
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
                                value: "UntimeoutUserFromCommunityInput"
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
                            value: "untimeoutUserFromCommunity"
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
                                    value: "community"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 144
            }
        };
        n.loc.source = {
            body: "mutation UntimeoutUserFromCommunity($input: UntimeoutUserFromCommunityInput!) {\nuntimeoutUserFromCommunity(input: $input) {\ncommunity {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "5ghP": function(e, t) {},
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n("TToO"),
            r = n("6sO2"),
            o = n("Aj/L"),
            a = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.getOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.putOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.postOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.deleteOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var r, o, a, s;
                        return i.__generator(this, function(m) {
                            switch (m.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, o = this.serialize(t.body, r), a = i.__assign({}, t, {
                                        body: o
                                    }), [4, this._fetch(e, a)];
                                case 1:
                                    return s = m.sent(), [4, this.constructLegacyAPIResponse(s)];
                                case 2:
                                    return [2, m.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var r, o;
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                case 1:
                                    if ((r = a.sent()).error || r.requestError) throw new Error("Error while making request");
                                    return o = i.__assign({}, r, {
                                        body: r.body
                                    }), [2, Promise.resolve(o)];
                                case 2:
                                    throw a.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, r.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, o;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return n = i.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                case 3:
                                    return r = i.sent(), e.headers && e.headers.get && (o = e.headers.get("Content-Type")) && -1 !== o.indexOf("application/json") && (t.requestError = r), [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, fetch(this.getAPIURL(e).toString(), t)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.constructOptions = function(e, t) {
                    return e = Object.assign({}, e, {
                        headers: i.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                        contentType: t
                    }), null) : null
                }, e.getDefaultHeaders = function(e, t) {
                    var n = r.o.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": r.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                    var a = Object(o.c)(n);
                    return a && (i.Authorization = "OAuth " + a.authToken, a.legacyCSRFToken && (i["Twitch-Api-Token"] = a.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e.logger = r.o.logger.withCategory("legacy-api"), e
            }()
    },
    A9xB: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CommunityModerationBanner"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "name"
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
                            value: "loggedIn"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
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
                            value: "community"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "name"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "name"
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "followersCount"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "avatarURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "80"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "107"
                                    }
                                }],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "coverURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "1200"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "180"
                                    }
                                }],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "self"
                                },
                                arguments: [],
                                directives: [{
                                    kind: "Directive",
                                    name: {
                                        kind: "Name",
                                        value: "include"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "if"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "loggedIn"
                                            }
                                        }
                                    }]
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "follow"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "community"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 256
            }
        };
        n.loc.source = {
            body: "query CommunityModerationBanner($name: String! $loggedIn: Boolean!) {\ncommunity(name: $name) {\nid\ndisplayName\nfollowersCount\navatarURL(width: 80 height: 107)\ncoverURL(width: 1200 height: 180)\nself @include(if: $loggedIn) {\nfollow {\ncommunity {\nid\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    BBZ2: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CommunityEmail"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "name"
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
                            value: "community"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "name"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "name"
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
                                    value: "email"
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
                end: 76
            }
        };
        n.loc.source = {
            body: "query CommunityEmail($name: String!) {\ncommunity(name: $name) {\nid\nemail\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    UQNI: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("6sO2"),
            r = function(e) {
                switch (e) {
                    case "TARGET_USER_OWNER":
                        return Object(i.d)("You cannot ban or timeout the owner of this community", "BanTimeoutErrorMessages");
                    case "TARGET_USER_MOD":
                        return Object(i.d)("You cannot ban or timeout a moderator", "BanTimeoutErrorMessages");
                    case "TARGET_USER_SELF":
                        return Object(i.d)("You cannot ban or timeout yourself", "BanTimeoutErrorMessages");
                    case "TARGET_USER_STAFF":
                        return Object(i.d)("You cannot ban or timeout a staff member", "BanTimeoutErrorMessages");
                    case "NOT_PERMITTED":
                        return Object(i.d)("The user is already banned from this community", "BanTimeoutErrorMessages");
                    default:
                        return Object(i.d)("Something went wrong", "BanTimeoutErrorMessages")
                }
            }
    },
    "W/wc": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("2KeS"),
            o = n("+xm8"),
            a = n("f2i/"),
            s = n("Aj/L"),
            m = n("TToO"),
            u = n("GiK3"),
            l = n("6sO2"),
            c = n("7vx8"),
            d = n("oIkB"),
            p = n("vH/s"),
            y = n("CSlQ"),
            h = n("Odds"),
            g = n("qs/O"),
            v = n("odW7"),
            f = n("d+bE"),
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isFollowing: !1
                    }, t.communityDataLoaded = function() {
                        return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.community
                    }, t.toggleFollowing = function() {
                        t.state.isFollowing ? t.unfollowChannel() : t.followChannel(), t.setState(function(e) {
                            return {
                                isFollowing: !e.isFollowing
                            }
                        })
                    }, t.trackResponse = function(e) {
                        if (t.props.data) {
                            var n = "follow" === e ? p.SpadeEventType.CommunityFollow : p.SpadeEventType.CommunityUnfollow;
                            l.o.tracking.track(n, {
                                community_id: t.props.data.community.id,
                                name: t.props.data.community.name,
                                is_official: !1,
                                user_id: t.props.data.currentUser && t.props.data.currentUser.id
                            })
                        }
                    }, t.followChannel = function() {
                        return m.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i = this;
                            return m.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.props.followCommunity && this.props.data ? (e = m.__assign({}, Object(d.a)({
                                            communityID: this.props.data.community.id
                                        }), {
                                            optimisticResponse: {
                                                followCommunity: {
                                                    __typename: "FollowCommunityPayload",
                                                    community: {
                                                        self: {
                                                            follow: {
                                                                followedAt: (new Date).toISOString(),
                                                                __typename: "CommunityFollow"
                                                            },
                                                            __typename: "CommunitySelfConnection"
                                                        },
                                                        __typename: "Community"
                                                    }
                                                }
                                            }
                                        }), [4, this.props.followCommunity(e)]) : [2];
                                    case 1:
                                        return t = r.sent(), n = function(e) {
                                            return i.trackResponse("follow"), e.community.self.follow && (e.community.self.follow.followedAt = t.data.followCommunity.community.self.follow.followedAt), e
                                        }, Object(d.e)(g, {
                                            name: this.props.directoryName
                                        }, n), [2]
                                }
                            })
                        })
                    }, t.unfollowChannel = function() {
                        return m.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return m.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.props.unfollowCommunity && this.props.data ? (e = m.__assign({}, Object(d.a)({
                                            communityID: this.props.data.community.id
                                        }), {
                                            optimisticResponse: {
                                                unfollowCommunity: {
                                                    __typename: "UnfollowCommunityPayload",
                                                    follow: null
                                                }
                                            }
                                        }), [4, this.props.unfollowCommunity(e)]) : [2];
                                    case 1:
                                        return i.sent(), t = function(e) {
                                            return n.trackResponse("unfollow"), e.community.self.follow = null, e
                                        }, Object(d.e)(g, {
                                            name: this.props.directoryName
                                        }, t), [2]
                                }
                            })
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.data && !e.data.loading && !e.data.error && e.data.community && this.setState({
                        isFollowing: e.data.community.self && null !== e.data.community.self.follow
                    })
                }, t.prototype.render = function() {
                    var e = Object(l.d)("Follow", "DirectoryFollowButton");
                    return this.props.isLoggedIn ? !this.props.data || this.props.data.loading ? u.createElement(h._14, {
                        width: 70,
                        height: 30
                    }) : this.communityDataLoaded() ? this.state.isFollowing ? u.createElement(h._8, {
                        display: h.R.Flex,
                        margin: {
                            left: 1
                        },
                        className: "directory-follow-btn"
                    }, u.createElement(h.w, {
                        ariaLabel: Object(l.d)("Unfollow", "DirectoryFollowButton"),
                        onClick: this.toggleFollowing,
                        "data-a-target": "directory-unfollow-button",
                        "data-test-selector": "unfollow-button",
                        icon: h._25.Heart,
                        statusAlertIcon: h._25.Unheart
                    })) : u.createElement(h.v, m.__assign({
                        ariaLabel: e,
                        "data-a-target": "directory-follow-button",
                        "data-test-selector": "follow-button",
                        icon: h._25.Heart,
                        onClick: this.toggleFollowing
                    }, Object(h._63)(this.props)), e) : null : u.createElement(h.v, {
                        ariaLabel: e,
                        icon: h._25.Heart,
                        onClick: this.props.login,
                        "data-a-target": "directory-follow-button"
                    }, e)
                }, t.prototype.reportInteractive = function() {
                    this.props.isLoggedIn && this.props.directoryName && !this.communityDataLoaded() || this.props.latencyTracking.reportInteractive()
                }, t = m.__decorate([Object(c.a)(g, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.directoryName
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn || !e.directoryName
                    }
                }), Object(c.a)(v, {
                    name: "followCommunity"
                }), Object(c.a)(f, {
                    name: "unfollowCommunity"
                }), Object(y.d)("DirectoryFollowButton")], t)
            }(u.Component);
        var _ = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(r.b)({
                login: function() {
                    return Object(a.f)(o.a.DirectoryFollowButton)
                }
            }, e)
        })(k);
        n.d(t, "a", function() {
            return _
        })
    },
    "Wn5/": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UnbanUserFromCommunity"
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
                                value: "UnbanUserFromCommunityInput"
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
                            value: "unbanUserFromCommunity"
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
                                    value: "community"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 132
            }
        };
        n.loc.source = {
            body: "mutation UnbanUserFromCommunity($input: UnbanUserFromCommunityInput!) {\nunbanUserFromCommunity(input: $input) {\ncommunity {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "d+bE": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "DirectoryFollowButton_UnfollowCommunity"
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
                                value: "UnfollowCommunityInput"
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
                            value: "unfollowCommunity"
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
                                    value: "follow"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "followedAt"
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
                end: 144
            }
        };
        n.loc.source = {
            body: "mutation DirectoryFollowButton_UnfollowCommunity($input: UnfollowCommunityInput!) {\nunfollowCommunity(input: $input) {\nfollow {\nfollowedAt\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "eFj+": function(e, t) {},
    nC3l: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CommunityStreamBan_BanUser"
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
                                value: "BanUserFromCommunityInput"
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
                            value: "banUserFromCommunity"
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
                                    value: "error"
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
                end: 121
            }
        };
        n.loc.source = {
            body: "mutation CommunityStreamBan_BanUser($input: BanUserFromCommunityInput!) {\nbanUserFromCommunity(input: $input) {\nerror\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    nSoa: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CommunityModeration"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "name"
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
                            value: "loggedIn"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "log"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "settings"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
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
                            value: "community"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "name"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "name"
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
                                    value: "name"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "email"
                                },
                                arguments: [],
                                directives: [{
                                    kind: "Directive",
                                    name: {
                                        kind: "Name",
                                        value: "include"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "if"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "settings"
                                            }
                                        }
                                    }]
                                }]
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "owner"
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "self"
                                },
                                arguments: [],
                                directives: [{
                                    kind: "Directive",
                                    name: {
                                        kind: "Name",
                                        value: "include"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "if"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "loggedIn"
                                            }
                                        }
                                    }]
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "permissions"
                                        },
                                        arguments: [],
                                        directives: [{
                                            kind: "Directive",
                                            name: {
                                                kind: "Name",
                                                value: "include"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "if"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "log"
                                                    }
                                                }
                                            }]
                                        }],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "banning"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "timingOut"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "include"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "if"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "loggedIn"
                                    }
                                }
                            }]
                        }],
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
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
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
                end: 349
            }
        };
        n.loc.source = {
            body: "query CommunityModeration($name: String! $loggedIn: Boolean! $log: Boolean! $settings: Boolean!) {\ncommunity(name: $name) {\nid\nname\ndisplayName\nemail @include(if: $settings)\nowner {\nid\n}\nself @include(if: $loggedIn) {\npermissions @include(if: $log) {\nbanning\ntimingOut\n}\n}\n}\ncurrentUser @include(if: $loggedIn) {\nid\nroles {\nisStaff\nisSiteAdmin\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    npyu: function(e, t) {},
    odW7: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "DirectoryFollowButton_FollowCommunity"
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
                                value: "FollowCommunityInput"
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
                            value: "followCommunity"
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
                                    value: "community"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "self"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "follow"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "followedAt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 161
            }
        };
        n.loc.source = {
            body: "mutation DirectoryFollowButton_FollowCommunity($input: FollowCommunityInput!) {\nfollowCommunity(input: $input) {\ncommunity {\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    plcU: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CommunityStreamTimeout_TimeoutUser"
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
                                value: "TimeoutUserFromCommunityInput"
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
                            value: "timeoutUserFromCommunity"
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
                                    value: "community"
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
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "error"
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
                end: 159
            }
        };
        n.loc.source = {
            body: "mutation CommunityStreamTimeout_TimeoutUser($input: TimeoutUserFromCommunityInput!) {\ntimeoutUserFromCommunity(input: $input) {\ncommunity {\nid\nname\n}\nerror\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "qs/O": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryFollowButton_Community"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "name"
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
                            value: "community"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "name"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "name"
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
                                    value: "name"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "self"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "follow"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "followedAt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
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
            }],
            loc: {
                start: 0,
                end: 142
            }
        };
        n.loc.source = {
            body: "query DirectoryFollowButton_Community($name: String!) {\ncommunity(name: $name) {\nid\nname\nself {\nfollow {\nfollowedAt\n}\n}\n}\ncurrentUser {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    rujk: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, r = n("GiK3"),
            o = n("CIox"),
            a = n("68hr"),
            s = n("TToO"),
            m = n("HW6M"),
            u = n("RH2O"),
            l = n("2KeS"),
            c = n("6sO2"),
            d = n("7vx8"),
            p = n("NXs7"),
            y = n("VAT8"),
            h = n("W/wc"),
            g = n("Odds"),
            v = n("A9xB"),
            f = (n("wyZy"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e, t, n, i = {};
                    this.props.data.loading || this.props.data.error || !this.props.data.community ? (e = r.createElement(g._14, {
                        width: 60,
                        height: 84
                    }), t = r.createElement(g._14, {
                        width: 300,
                        height: 29
                    }), n = r.createElement(g._14, {
                        width: 65,
                        height: 18
                    })) : (e = r.createElement(g.E, {
                        alt: Object(c.d)("Community Avatar", "CommunityModerationBanner"),
                        src: this.props.data.community.avatarURL || "",
                        size: g.F.Size6,
                        aspect: g.l.BoxArt
                    }), i = {
                        backgroundImage: "url(" + this.props.data.community.coverURL + ")"
                    }, t = r.createElement(g.Q, {
                        color: g.K.Overlay,
                        type: g._49.H3
                    }, this.props.data.community.displayName), n = r.createElement(g.Q, {
                        color: g.K.Overlay,
                        type: g._49.P
                    }, Object(c.d)("{followers, plural, one {# Follower} other {# Followers}}", {
                        followers: this.props.data.community.followersCount || 0
                    }, "CommunityModerationBanner")));
                    var o = m("community-moderation-banner", Object(y.c)(p.a.Dark));
                    return r.createElement(g._2, {
                        className: o,
                        position: g._15.Relative
                    }, r.createElement("div", {
                        style: i
                    }, r.createElement(g._8, {
                        position: g._15.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        attachTop: !0,
                        className: "community-moderation-banner__content",
                        padding: 3,
                        display: g.R.Flex,
                        flexDirection: g.T.Row,
                        justifyContent: g._7.Between,
                        alignItems: g.c.End
                    }, r.createElement(g._8, {
                        display: g.R.Flex,
                        flexDirection: g.T.Row,
                        alignItems: g.c.End
                    }, e, r.createElement(g._8, {
                        margin: {
                            left: 2
                        },
                        display: g.R.Flex,
                        flexDirection: g.T.Column
                    }, r.createElement(g.O, {
                        to: "/directory/communities"
                    }, r.createElement(g._24, {
                        asset: g._25.GlyphArrLeft,
                        height: 10,
                        width: 10
                    }), Object(c.d)("Communities", "CommunityModerationBanner")), t, n)), r.createElement(g._8, {
                        display: g.R.Flex,
                        flexDirection: g.T.Row,
                        alignItems: g.c.End
                    }, r.createElement(h.a, {
                        directoryName: this.props.communityName
                    }), r.createElement(g._8, {
                        margin: {
                            left: 1
                        }
                    }, r.createElement(g.v, {
                        icon: g._25.Check,
                        linkTo: "/communities/" + encodeURIComponent(this.props.communityName)
                    }, Object(c.d)("Done", "CommunityModerationBanner")))))))
                }, t
            }(r.Component)),
            k = Object(l.d)(Object(u.b)(function(e) {
                return {
                    isLoggedIn: !!e.session.user
                }
            }), Object(d.a)(v, {
                options: function(e) {
                    return {
                        variables: {
                            name: e.communityName,
                            loggedIn: e.isLoggedIn
                        }
                    }
                }
            }))(f),
            _ = n("j7/Y"),
            b = n("w9tK"),
            S = n("vH/s"),
            C = n("CSlQ"),
            w = n("oIkB"),
            N = n("V5M+"),
            E = n("9u8h"),
            O = n("/gww"),
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onSuccess = function() {
                        t.props.onSuccess(t.props.user)
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(O.a, {
                        communityID: this.props.communityID,
                        communityName: this.props.communityName,
                        userID: this.props.user.id,
                        username: this.props.user.login,
                        currentUserID: this.props.currentUserID,
                        onSuccess: this.onSuccess
                    })
                }, t
            }(r.Component),
            U = n("0w5y"),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onSuccess = function() {
                        t.props.onSuccess(t.props.user)
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(U.a, {
                        communityID: this.props.communityID,
                        communityName: this.props.communityName,
                        userID: this.props.user.id,
                        username: this.props.user.login,
                        currentUserID: this.props.currentUserID,
                        onSuccess: this.onSuccess
                    })
                }, t
            }(r.Component),
            F = n("zCIC"),
            I = n("puy8"),
            M = n("HM6l"),
            j = n("5LoI"),
            R = n("MAZT"),
            x = (n("5ghP"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        results: [],
                        searchText: "",
                        searching: !1
                    }, n.inputTimeout = 0, n.renderUsers = function(e) {
                        return r.createElement(g._8, {
                            padding: 1
                        }, e.map(function(e) {
                            return r.createElement(g._8, {
                                display: g.R.Flex,
                                flexDirection: g.T.Row,
                                key: "user-search-form-result:" + e.id,
                                justifyContent: g._7.Between,
                                alignItems: g.c.Center,
                                padding: {
                                    y: .5
                                }
                            }, r.createElement(g._8, {
                                display: g.R.Flex,
                                flexDirection: g.T.Row,
                                alignItems: g.c.Center
                            }, r.createElement(g._8, {
                                margin: {
                                    right: 1
                                }
                            }, r.createElement(g.m, {
                                src: e.avatarUrl,
                                size: 30,
                                alt: Object(c.d)("{user} Avatar", {
                                    user: e.displayName
                                }, "UserSearchForm")
                            })), r.createElement(g.Q, null, e.displayName)), r.createElement(g._8, {
                                display: g.R.Flex,
                                flexDirection: g.T.Row,
                                alignItems: g.c.Center
                            }, n.props.getUserContent(e)))
                        }))
                    }, n.onChange = function(e) {
                        var t = e.target.value;
                        clearTimeout(n.inputTimeout), n.setState({
                            searchText: t
                        }), t ? n.inputTimeout = setTimeout(function() {
                            return n.search(t)
                        }, 200) : n.setState({
                            searching: !1,
                            results: []
                        })
                    }, n.search = function(e) {
                        return s.__awaiter(n, void 0, void 0, function() {
                            var t, n;
                            return s.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.setState({
                                            searching: !0
                                        }), [4, this.searchClient.queryForType(j.a.Users, e, Object(M.a)(), {
                                            hitsPerPage: 10
                                        })];
                                    case 1:
                                        return t = i.sent(), this.inputTimeout && e === this.state.searchText && (n = t && t.users && this.normalizeSearchResults(t.users.hits) || [], this.setState({
                                            searching: !1,
                                            results: n
                                        })), [2]
                                }
                            })
                        })
                    }, n.normalizeSearchResults = function(e) {
                        return e.map(function(e) {
                            return {
                                id: e.objectID,
                                login: e.login,
                                displayName: e.name,
                                avatarUrl: e.profile_image || Object(I.c)(e.objectID, 30)
                            }
                        })
                    }, n.clearSearchText = function() {
                        n.setState({
                            searchText: "",
                            searching: !1,
                            results: []
                        })
                    }, n.searchClient = new R.a({
                        appId: c.a.algoliaApplicationID,
                        apiKey: c.a.algoliaAPIKey,
                        apolloClient: c.o.apollo.client,
                        logger: c.j,
                        config: c.a
                    }), t.clearSearchText && t.clearSearchText(n.clearSearchText), n
                }
                return s.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.clearSearchText && e.clearSearchText(this.clearSearchText)
                }, t.prototype.render = function() {
                    var e = m({
                        "user-search-form--disabled": this.state.searching || this.state.results.length > 0
                    });
                    return r.createElement(g._8, {
                        className: "user-search-form"
                    }, r.createElement(g._35, {
                        key: "user-search-form-input",
                        padding: 1,
                        border: !0
                    }, r.createElement(g._8, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(g.Q, {
                        fontSize: g.V.Size4
                    }, this.props.title)), this.props.description && r.createElement(g._8, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(g.Q, null, this.props.description)), r.createElement(g._8, {
                        margin: {
                            bottom: 1
                        },
                        position: g._15.Relative
                    }, r.createElement(g._4, {
                        type: g._5.Search,
                        placeholder: this.props.placeholder,
                        onChange: this.onChange,
                        icon: g._25.GlyphLive,
                        value: this.state.searchText
                    }), r.createElement(g.q, {
                        show: this.state.results.length > 0,
                        size: g.s.ExtraLarge,
                        direction: g.r.TopCenter
                    }, r.createElement(F.b, {
                        className: "user-search-form__results"
                    }, r.createElement(g._8, null, this.state.results.length > 0 && this.renderUsers(this.state.results)))))), this.props.displayUsers && this.props.displayUsers.length > 0 && r.createElement(g._35, {
                        key: "user-search-form-results",
                        className: e,
                        borderLeft: !0,
                        borderRight: !0,
                        borderBottom: !0
                    }, this.renderUsers(this.props.displayUsers)))
                }, t
            }(r.Component)),
            B = n("Wn5/"),
            A = n("2t7f"),
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        moderatedUsers: {}
                    }, t.logger = c.j.withCategory("community-channel-moderation"), t.clearSearchText = null, t.getButtonsForUser = function(e) {
                        var n = t.state.moderatedUsers[e.id];
                        if (n) {
                            var i = n.isBanned ? Object(c.d)("Unban", "CommunityChannelModeration") : Object(c.d)("Untimeout", "CommunityChannelModeration");
                            return t.renderButton(i, function() {
                                return t.unmoderateUser(n)
                            })
                        }
                        return r.createElement(g._8, {
                            display: g.R.Flex,
                            flexDirection: g.T.Row
                        }, t.props.userCanBan && t.renderButton(Object(c.d)("Ban", "CommunityChannelModeration"), function() {
                            return t.banUser(e)
                        }), t.props.userCanTimeout && t.renderButton(Object(c.d)("Timeout", "CommunityChannelModeration"), function() {
                            return t.timeoutUser(e)
                        }))
                    }, t.renderButton = function(e, t) {
                        return r.createElement(g._8, {
                            margin: {
                                left: .5
                            }
                        }, r.createElement(g.v, {
                            size: g.z.Small,
                            onClick: t,
                            type: g.B.Hollow,
                            blurAfterClick: !0
                        }, e))
                    }, t.fetchModeratedUsers = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, r;
                            return s.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        this.logger.debug("Loading moderated users"), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 4, , 5]), [4, E.a.get("/kraken/communities/" + e + "/bans?limit=100")];
                                    case 2:
                                        return t = o.sent(), [4, E.a.get("/kraken/communities/" + e + "/timeouts?limit=100")];
                                    case 3:
                                        return n = o.sent(), (t.error || t.requestError) && (n.error || n.requestError) ? (this.logger.warn("Error loading users", {
                                            banResponseError: t.error,
                                            banRequestError: t.requestError,
                                            timeoutResponseError: n.error,
                                            timeoutRequestError: n.requestError
                                        }), [2]) : (i = s.__assign({}, t.body && this.normalizeModeratedUsers(t.body.banned_users, !0), n.body && this.normalizeModeratedUsers(n.body.timed_out_users, !1)), this.setState({
                                            moderatedUsers: i
                                        }), this.logger.debug("Successfully loaded users"), [3, 5]);
                                    case 4:
                                        return r = o.sent(), this.logger.warn("Error loading users", r), [3, 5];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.normalizeModeratedUsers = function(e, t) {
                        return e.reduce(function(e, n) {
                            return e[n.user_id] = {
                                id: n.user_id,
                                login: n.name,
                                displayName: n.display_name,
                                avatarUrl: n.avatar_image_url,
                                isBanned: t
                            }, e
                        }, {})
                    }, t.banUser = function(e) {
                        t.props.showModal(T, {
                            user: e,
                            communityID: t.props.communityID,
                            communityName: t.props.communityName,
                            currentUserID: t.props.currentUserID,
                            onSuccess: t.onBanUserSuccess
                        })
                    }, t.timeoutUser = function(e) {
                        t.props.showModal(D, {
                            user: e,
                            communityID: t.props.communityID,
                            onSuccess: t.onTimeoutUserSuccess
                        })
                    }, t.onBanUserSuccess = function(e) {
                        t.clearSearchText && t.clearSearchText(), t.setState(function(t) {
                            var n = s.__assign({}, t.moderatedUsers);
                            return n[e.id] = s.__assign({}, e, {
                                isBanned: !0
                            }), {
                                moderatedUsers: n
                            }
                        })
                    }, t.onTimeoutUserSuccess = function(e) {
                        t.clearSearchText && t.clearSearchText(), t.setState(function(t) {
                            var n = s.__assign({}, t.moderatedUsers);
                            return n[e.id] = s.__assign({}, e, {
                                isBanned: !1
                            }), {
                                moderatedUsers: n
                            }
                        })
                    }, t.unmoderateUser = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return s.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        this.setState(function(t) {
                                            var n = s.__assign({}, t.moderatedUsers);
                                            return delete n[e.id], {
                                                moderatedUsers: n
                                            }
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), t = Object(w.a)({
                                            userID: e.id,
                                            communityID: this.props.communityID
                                        }), [4, (e.isBanned ? this.props.unbanUser : this.props.untimeoutUser)(t)];
                                    case 2:
                                        return i.sent(), this.props.track(S.SpadeEventType.CommunityModeration, {
                                            target_id: e.id,
                                            action: e.isBanned ? "unban" : "untimeout"
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), this.logger.warn("Could not unban user", n), this.setState(function(t) {
                                            var n;
                                            return {
                                                moderatedUsers: s.__assign({}, t.moderatedUsers, ((n = {})[e.id] = e, n))
                                            }
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.setClearSearchTextRef = function(e) {
                        return t.clearSearchText = e
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchModeratedUsers(this.props.communityID)
                }, t.prototype.render = function() {
                    var e = this,
                        t = Object.keys(this.state.moderatedUsers).map(function(t) {
                            return e.state.moderatedUsers[t]
                        });
                    return r.createElement(x, {
                        title: Object(c.d)("Channel Moderation", "CommunityChannelModeration"),
                        placeholder: Object(c.d)("Search to ban/timeout channels", "CommunityChannelModeration"),
                        displayUsers: t,
                        clearSearchText: this.setClearSearchTextRef,
                        getUserContent: this.getButtonsForUser,
                        description: Object(c.d)("If a channel is violating your rules, you can ban or timeout that channel from streaming to your community. Your moderation actions must adhere to our <x:link>Community Guidelines</x:link>.", {
                            "x:link": function(e) {
                                return r.createElement("a", {
                                    key: "community-guidelines",
                                    href: "https://www.twitch.tv/p/legal/community-guidelines/"
                                }, e)
                            }
                        }, "CommunityChannelModeration")
                    })
                }, t
            }(r.Component),
            V = Object(l.d)(Object(u.b)(null, function(e) {
                return Object(l.b)({
                    showModal: N.d
                }, e)
            }), Object(d.a)(B, {
                name: "unbanUser"
            }), Object(d.a)(A, {
                name: "untimeoutUser"
            }))(L),
            P = n("+xm8"),
            q = n("f2i/"),
            Q = "community-moderation-page-error-message";
        ! function(e) {
            e[e.Moderation = 0] = "Moderation", e[e.Settings = 1] = "Settings"
        }(i || (i = {}));
        var H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDefaultContent = function() {
                        return r.createElement(g._8, {
                            display: g.R.Flex,
                            flexDirection: g.T.Column
                        }, r.createElement(g._8, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(g.Q, {
                            type: g._49.H2
                        }, Object(c.d)("Moderation", "CommunityModerationPage"))), r.createElement(g._8, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(g._37, null, r.createElement(g._36, {
                            linkTo: "/communities/" + t.props.match.params.encodedCommunityName + "/moderation/log",
                            active: t.props.activeTab === i.Moderation
                        }, Object(c.d)("Moderation", "CommunityModerationPageTab")), t.props.showSettingsTab && r.createElement(g._36, {
                            linkTo: "/communities/" + t.props.match.params.encodedCommunityName + "/moderation/settings",
                            active: t.props.activeTab === i.Settings
                        }, Object(c.d)("Settings", "CommunityModerationPageTab")))), t.props.children)
                    }, t.renderErrorMessage = function(e) {
                        return r.createElement(g._8, {
                            display: g.R.Flex,
                            flexDirection: g.T.Row,
                            alignItems: g.c.Center,
                            justifyContent: g._7.Center,
                            padding: 5,
                            "data-test-selector": Q
                        }, r.createElement(g.Q, {
                            italic: !0,
                            fontSize: g.V.Size4
                        }, e))
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.isLoggedIn || this.props.login()
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? this.props.loading ? r.createElement(g._10, {
                        fillContent: !0
                    }) : this.props.error ? this.renderErrorMessage(Object(c.d)("Error loading data. Please try again.", "CommunityModerationPage")) : this.props.userHasPermissionToView ? this.renderDefaultContent() : this.renderErrorMessage(Object(c.d)("You don't have permission to perform that action.", "CommunityModerationPage")) : this.renderErrorMessage(Object(c.d)("You're not logged in.", "CommunityModerationPage"))
                }, t
            }(r.Component),
            G = Object(l.d)(o.f, Object(u.b)(function(e) {
                return {
                    isLoggedIn: !!e.session.user
                }
            }, function(e) {
                return Object(l.b)({
                    login: function() {
                        return Object(q.f)(P.a.CommunityModeration)
                    }
                }, e)
            }))(H),
            z = n("nSoa");

        function $(e) {
            return function(t) {
                var n = function(e) {
                    function n() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.logger = c.j.withCategory("with-community-moderation"), t.track = function(e, n) {
                            var i = t.props.data.community,
                                r = t.props.currentUser,
                                o = t.props.data.currentUser && t.props.data.currentUser.roles;
                            if (i && r) {
                                var a = s.__assign({
                                    community_id: i.id,
                                    community_name: i.name,
                                    display_name: i.displayName,
                                    login: r.login,
                                    user_id: r.id,
                                    is_subadmin: o && o.isSiteAdmin || !1,
                                    is_admin: o && o.isStaff
                                }, n);
                                c.n.track(e, a)
                            } else t.logger.warn("Failed to track community moderation event")
                        }, t.isCommunityOwner = function() {
                            var e = t.props.data.community;
                            return e && t.props.currentUser && e.owner && e.owner.id === t.props.currentUser.id || !1
                        }, t
                    }
                    return s.__extends(n, e), n.prototype.render = function() {
                        var e = {
                            communityModeration: {
                                community: this.props.data.community,
                                currentUserID: this.props.currentUser && this.props.currentUser.id || "",
                                loading: this.props.data.loading,
                                error: this.props.data.error,
                                track: this.track,
                                isCommunityOwner: this.isCommunityOwner()
                            }
                        };
                        return r.createElement(t, s.__assign({}, e, this.props))
                    }, n
                }(r.Component);
                return Object(l.d)(o.f, Object(u.b)(function(e) {
                    return {
                        currentUser: e.session.user ? {
                            id: e.session.user.id,
                            login: e.session.user.login
                        } : null
                    }
                }), Object(d.a)(z, {
                    options: function(t) {
                        return {
                            variables: {
                                name: decodeURIComponent(t.match.params.encodedCommunityName),
                                loggedIn: !!t.currentUser,
                                log: !!e.log,
                                settings: !!e.settings
                            }
                        }
                    }
                }))(n)
            }
        }
        var K, Y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.communityModeration.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function(e) {
                    e.communityModeration.loading && !this.props.communityModeration.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.communityModeration.community,
                        t = this.props.communityModeration.loading && !this.props.communityModeration.community,
                        n = !(this.props.communityModeration.loading || !this.props.communityModeration.error && this.props.communityModeration.community),
                        o = e && e.self && e.self.permissions,
                        a = o && (o.banning || o.timingOut) || !1,
                        s = null;
                    return e && (s = r.createElement(V, {
                        communityID: e.id,
                        communityName: e.name,
                        currentUserID: this.props.communityModeration.currentUserID,
                        userCanBan: o && o.banning || !1,
                        userCanTimeout: o && o.timingOut || !1,
                        track: this.props.communityModeration.track
                    })), r.createElement(G, {
                        loading: t,
                        error: n,
                        userHasPermissionToView: a,
                        activeTab: i.Moderation,
                        showSettingsTab: this.props.communityModeration.isCommunityOwner
                    }, s)
                }, t
            }(r.Component),
            W = Object(l.d)(Object(C.d)("CommunityModerationLogPage", {
                autoReportInteractive: !0,
                destination: b.a.CommunityModeration
            }), Object(_.a)({
                location: S.PageviewLocation.CommunityModerationLog
            }), $({
                log: !0
            }))(Y);
        ! function(e) {
            e.TwoFactor = "two_factor_not_enabled", e.EmailVerification = "unverified_email"
        }(K || (K = {}));
        var J, X = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        working: !1,
                        error: null
                    }, t.logger = c.j.withCategory("community-leader-modal"), t.onClickSave = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, r;
                            return s.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        this.setState({
                                            working: !0,
                                            error: null
                                        }), e = Object(c.d)("Failed to save. Please try again.", "CommunityLeaderModal"), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), this.logger.debug("Saving new community leader"), [4, E.a.put("/kraken/communities/" + this.props.communityID, {
                                            headers: {
                                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                                            },
                                            body: "owner_user_id=" + this.props.user.id
                                        })];
                                    case 2:
                                        return t = o.sent(), n = null, t.requestError ? n = e : t.error && (i = t.error.message, n = i === K.TwoFactor ? Object(c.d)("User does not have Two Factor Authorization enabled.", "CommunityLeaderModal") : i === K.EmailVerification ? Object(c.d)("User has not verified their email.", "CommunityLeaderModal") : e), n ? (this.setState({
                                            working: !1,
                                            error: n
                                        }), [2]) : (this.props.closeModal(), this.props.onSuccess(this.props.user.id), [3, 4]);
                                    case 3:
                                        return r = o.sent(), this.logger.warn("Failed to change community leader", r), this.setState({
                                            working: !1,
                                            error: e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(g._35, {
                        padding: 2,
                        background: g.n.Base,
                        className: "ban-user-modal"
                    }, r.createElement(g.Q, {
                        fontSize: g.V.Size4
                    }, Object(c.d)("Are you sure you want to make {user} the new community leader?", {
                        user: this.props.user.displayName
                    }, "CommunityLeaderModal")), r.createElement(g._35, {
                        margin: {
                            y: 2
                        },
                        borderBottom: !0
                    }, r.createElement(g._8, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(g.Q, null, Object(c.d)("By changing this setting you will no longer be community leader. This action is irreversible.", "CommunityLeaderModal"))), this.state.error && r.createElement(g._8, {
                        margin: {
                            bottom: 1
                        },
                        "data-test-selector": "community-leader-modal-error"
                    }, r.createElement(g.Q, {
                        color: g.K.Error
                    }, this.state.error))), r.createElement(g._8, {
                        display: g.R.Flex,
                        flexDirection: g.T.Row,
                        alignItems: g.c.Center,
                        justifyContent: g._7.Center
                    }, r.createElement(g.v, {
                        type: g.B.Text,
                        onClick: this.props.closeModal
                    }, Object(c.d)("Cancel", "CommunityLeaderModal")), r.createElement(g._8, {
                        margin: {
                            left: 2
                        }
                    }, r.createElement(g.v, {
                        onClick: this.onClickSave,
                        state: this.state.working ? g.A.Loading : g.A.Default
                    }, Object(c.d)("Save", "CommunityLeaderModal")))))
                }, t
            }(r.Component),
            Z = Object(u.b)(null, function(e) {
                return Object(l.b)({
                    closeModal: N.c
                }, e)
            })(X),
            ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getButtonForUser = function(e) {
                        if (e.id === t.props.currentUserID) return null;
                        return r.createElement(g._8, {
                            margin: {
                                left: .5
                            }
                        }, r.createElement(g.v, {
                            size: g.z.Small,
                            onClick: function() {
                                return t.onClickSave(e)
                            },
                            type: g.B.Hollow,
                            blurAfterClick: !0
                        }, Object(c.d)("Save", "CommunityLeader")))
                    }, t.onClickSave = function(e) {
                        t.props.showModal(Z, {
                            user: e,
                            communityID: t.props.communityID,
                            onSuccess: t.props.onChange
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(x, {
                        title: Object(c.d)("Community Leader", "CommunityLeader"),
                        placeholder: Object(c.d)("Search to choose a different leader for this community", "CommunityLeader"),
                        getUserContent: this.getButtonForUser
                    })
                }, t
            }(r.Component),
            te = Object(u.b)(function(e) {
                return {
                    currentUserID: e.session.user && e.session.user.id || null
                }
            }, function(e) {
                return Object(l.b)({
                    showModal: N.d
                }, e)
            })(ee),
            ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        moderators: {}
                    }, t.logger = c.j.withCategory("community-moderators"), t.getButtonForUser = function(e) {
                        return t.state.moderators[e.id] ? t.renderButton(Object(c.d)("Remove", "CommunityModerators"), function() {
                            return t.onClickRemove(e)
                        }) : t.renderButton(Object(c.d)("Add", "CommunityModerators"), function() {
                            return t.onClickAdd(e)
                        })
                    }, t.renderButton = function(e, t) {
                        return r.createElement(g._8, {
                            margin: {
                                left: .5
                            }
                        }, r.createElement(g.v, {
                            size: g.z.Small,
                            onClick: t,
                            type: g.B.Hollow,
                            blurAfterClick: !0
                        }, e))
                    }, t.onClickAdd = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return s.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState(function(t) {
                                            var n = s.__assign({}, t.moderators);
                                            return n[e.id] = e, {
                                                moderators: n
                                            }
                                        }), this.logger.debug("Adding moderator"), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, E.a.putOrThrow("/kraken/communities/" + this.props.communityID + "/moderators/" + e.id)];
                                    case 2:
                                        return n.sent(), this.props.track(S.SpadeEventType.CommunityRoleEdit, {
                                            target_id: e.id,
                                            edit_role: "moderator",
                                            action: "add"
                                        }), this.logger.debug("Successfully added moderator"), [3, 4];
                                    case 3:
                                        return t = n.sent(), this.logger.warn("Failed to add moderator", {
                                            err: t
                                        }), this.setState(function(t) {
                                            var n = s.__assign({}, t.moderators);
                                            return delete n[e.id], {
                                                moderators: n
                                            }
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onClickRemove = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return s.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState(function(t) {
                                            var n = s.__assign({}, t.moderators);
                                            return delete n[e.id], {
                                                moderators: n
                                            }
                                        }), this.logger.debug("Removing moderator"), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, E.a.deleteOrThrow("/kraken/communities/" + this.props.communityID + "/moderators/" + e.id)];
                                    case 2:
                                        return n.sent(), this.props.track(S.SpadeEventType.CommunityRoleEdit, {
                                            target_id: e.id,
                                            edit_role: "moderator",
                                            action: "remove"
                                        }), this.logger.debug("Successfully removed moderator"), [3, 4];
                                    case 3:
                                        return t = n.sent(), this.logger.warn("Failed to remove moderator", {
                                            err: t
                                        }), this.setState(function(t) {
                                            var n = s.__assign({}, t.moderators);
                                            return n[e.id] = e, {
                                                moderators: n
                                            }
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.fetchModerators = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return s.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        this.logger.debug("Fetching moderators"), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, E.a.getOrThrow("/kraken/communities/" + this.props.communityID + "/moderators")];
                                    case 2:
                                        return e = i.sent(), t = this.normalizeModerators(e.body.moderators), this.setState({
                                            moderators: t
                                        }), this.logger.debug("Successfully fetched moderators"), [3, 4];
                                    case 3:
                                        return n = i.sent(), this.logger.warn("Failed fetching moderators", {
                                            err: n
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.normalizeModerators = function(e) {
                        return e.reduce(function(e, t) {
                            return e[t._id] = {
                                id: t._id,
                                login: t.name,
                                displayName: t.display_name,
                                avatarUrl: t.logo
                            }, e
                        }, {})
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchModerators()
                }, t.prototype.render = function() {
                    var e = this,
                        t = Object.keys(this.state.moderators).map(function(t) {
                            return e.state.moderators[t]
                        });
                    return r.createElement(x, {
                        title: Object(c.d)("Moderators", "CommunityModerators"),
                        placeholder: Object(c.d)("Search to add moderators", "CommunityModerators"),
                        description: Object(c.d)("Moderators can help you manage your community by banning or timing out channels that violate your rules.", "CommunityModerators"),
                        getUserContent: this.getButtonForUser,
                        displayUsers: t
                    })
                }, t
            }(r.Component),
            ie = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onInputChange = function(e) {
                        var t = e.target.value;
                        n.setState({
                            value: t
                        })
                    }, n.onClickSave = function() {
                        n.props.onClickSave(n.state.value)
                    }, n.state = {
                        value: t.initialValue
                    }, n
                }
                return s.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.initialValue !== this.props.initialValue && this.setState({
                        value: e.initialValue
                    })
                }, t.prototype.render = function() {
                    return r.createElement(g._8, null, r.createElement(g._8, {
                        margin: {
                            bottom: .5
                        }
                    }, r.createElement(g.Q, {
                        bold: !0
                    }, this.props.title)), this.props.description && r.createElement(g._8, {
                        margin: {
                            bottom: .5
                        }
                    }, r.createElement(g.Q, null, this.props.description)), r.createElement(g._8, {
                        display: g.R.Flex,
                        flexDirection: g.T.Row,
                        alignItems: g.c.Center,
                        justifyContent: g._7.Between
                    }, r.createElement(g._8, {
                        flexGrow: 1
                    }, r.createElement(g._4, {
                        type: g._5.Text,
                        value: this.state.value,
                        onChange: this.onInputChange
                    })), r.createElement(g._8, {
                        margin: {
                            left: 1
                        }
                    }, r.createElement(g.v, {
                        state: this.props.saving ? g.A.Loading : g.A.Default,
                        onClick: this.onClickSave,
                        disabled: !this.state.value || this.state.value === this.props.initialValue
                    }, Object(c.d)("Save", "CommunitySettingInput")))), this.props.error && r.createElement(g._8, {
                        margin: {
                            bottom: 1
                        },
                        "data-test-selector": "community-setting-input-error"
                    }, r.createElement(g.Q, {
                        color: g.K.Error
                    }, this.props.error)))
                }, t
            }(r.Component);
        ! function(e) {
            e.DESCRIPTION_TOO_LONG = "DESCRIPTION_TOO_LONG", e.DISPLAY_NAME_INVALID = "DISPLAY_NAME_INVALID", e.REQUESTING_USER_NOT_PERMITTED = "REQUESTING_USER_NOT_PERMITTED", e.RULES_TOO_LONG = "RULES_TOO_LONG", e.SUMMARY_TOO_LONG = "SUMMARY_TOO_LONG"
        }(J || (J = {}));
        var re = n("1MwX"),
            oe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        error: null
                    }, t.logger = c.j.withCategory("display-name-input"), t.onClickSave = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, r;
                            return s.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        this.setState({
                                            saving: !0,
                                            error: null
                                        }), this.logger.debug("Saving community display name"), t = Object(c.d)("Failed to save. Please try again.", "DisplaynameInput"), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.props.updateCommunity(Object(w.a)({
                                            communityID: this.props.communityID,
                                            displayName: e
                                        }))];
                                    case 2:
                                        return n = o.sent(), i = null, n.data.editCommunity ? n.data.editCommunity.error && (i = n.data.editCommunity.error === J.DISPLAY_NAME_INVALID ? Object(c.d)("Display name is invalid.", "DisplayNameInput") : t) : i = t, i ? (this.logger.warn("Failed saving community display name"), this.setState({
                                            saving: !1,
                                            error: i
                                        }), [2]) : (this.logger.debug("Success saving community display name"), this.setState({
                                            saving: !1,
                                            error: null
                                        }), [3, 4]);
                                    case 3:
                                        return r = o.sent(), this.logger.warn("Failed saving community display name", {
                                            err: r
                                        }), this.setState({
                                            saving: !1,
                                            error: t
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(ie, {
                        initialValue: this.props.displayName,
                        onClickSave: this.onClickSave,
                        saving: this.state.saving,
                        error: this.state.error,
                        title: Object(c.d)("Display Name", "DisplayNameInput")
                    })
                }, t
            }(r.Component),
            ae = Object(d.a)(re, {
                name: "updateCommunity"
            })(oe),
            se = n("OAwv"),
            me = n("BBZ2"),
            ue = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        error: null
                    }, t.logger = c.j.withCategory("moderation-email-input"), t.onClickSave = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return s.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        this.setState({
                                            saving: !0,
                                            error: null
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), t = se.stringify({
                                            email: e
                                        }), [4, E.a.putOrThrow("/kraken/communities/" + this.props.communityID, {
                                            headers: {
                                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                                            },
                                            body: t
                                        })];
                                    case 2:
                                        return i.sent(), this.setState({
                                            saving: !1,
                                            error: null
                                        }), Object(w.e)(me, {
                                            name: this.props.communityName
                                        }, function(t) {
                                            return t.community ? s.__assign({}, t, {
                                                community: s.__assign({}, t.community, {
                                                    email: e
                                                })
                                            }) : t
                                        }), this.logger.debug("Successfully saved email."), [3, 4];
                                    case 3:
                                        return n = i.sent(), this.logger.warn("Failed saving email.", {
                                            err: n
                                        }), this.setState({
                                            saving: !1,
                                            error: Object(c.d)("Failed to save. Please try again.", "ModerationEmailInput")
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(ie, {
                        initialValue: this.props.email,
                        onClickSave: this.onClickSave,
                        saving: this.state.saving,
                        error: this.state.error,
                        title: Object(c.d)("Moderation email address", "ModerationEmailInput"),
                        description: Object(c.d)("Used to receive email notifications when channels are reported for violating your Community's rules or when a moderation action is taken. <x:link>Learn more</x:link>.", {
                            "x:link": function(e) {
                                return r.createElement("a", {
                                    href: "https://help.twitch.tv/customer/portal/articles/2737498-communities-policies-and-guide",
                                    key: "community-policy-link"
                                }, e)
                            }
                        }, "ModerationEmailInput")
                    })
                }, t
            }(r.Component),
            le = (n("eFj+"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChangeCommunityLeader = function(e) {
                        t.props.communityModeration.track(S.SpadeEventType.CommunityRoleEdit, {
                            target_id: e,
                            edit_role: "owner",
                            action: "add"
                        }), t.props.history.push("/communities/" + t.props.match.params.encodedCommunityName)
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.communityModeration.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function(e) {
                    e.communityModeration.loading && !this.props.communityModeration.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.communityModeration.loading && !this.props.communityModeration.community,
                        t = !(this.props.communityModeration.loading || !this.props.communityModeration.error && this.props.communityModeration.community),
                        n = this.props.communityModeration.community,
                        o = n && n.id || "";
                    return r.createElement(G, {
                        loading: e,
                        error: t,
                        userHasPermissionToView: this.props.communityModeration.isCommunityOwner,
                        activeTab: i.Settings,
                        showSettingsTab: !0
                    }, r.createElement(te, {
                        communityID: o,
                        onChange: this.onChangeCommunityLeader
                    }), r.createElement(g._35, {
                        border: !0,
                        padding: 1,
                        margin: {
                            y: 1
                        },
                        className: "community-moderation-settings__inputs"
                    }, r.createElement(ae, {
                        displayName: n && n.displayName || "",
                        communityID: o
                    }), r.createElement(g._8, {
                        margin: {
                            top: 2
                        }
                    }, r.createElement(ue, {
                        email: n && n.email || "",
                        communityID: o,
                        communityName: n && n.name || ""
                    }))), r.createElement(g._8, {
                        margin: {
                            top: 1
                        }
                    }, r.createElement(ne, {
                        communityID: o,
                        track: this.props.communityModeration.track
                    })))
                }, t
            }(r.Component)),
            ce = Object(l.d)(Object(C.d)("CommunityModerationSettingsPage", {
                destination: b.a.CommunityModeration
            }), Object(_.a)({
                location: S.PageviewLocation.CommunityModerationSettings
            }), o.f, $({
                settings: !0
            }))(le),
            de = function(e) {
                return r.createElement(o.b, {
                    to: "/communities/" + e.match.params.encodedCommunityName + "/moderation/log"
                })
            },
            pe = function(e) {
                return e.match.params.page && "log" !== e.match.params.page && "settings" !== e.match.params.page ? r.createElement(a.a, null) : r.createElement(g._8, null, r.createElement(k, {
                    communityName: decodeURIComponent(e.match.params.encodedCommunityName)
                }), r.createElement(g._8, {
                    padding: 3
                }, r.createElement(o.e, null, r.createElement(o.c, {
                    path: "/communities/:encodedCommunityName/moderation/log",
                    component: W
                }), r.createElement(o.c, {
                    path: "/communities/:encodedCommunityName/moderation/settings",
                    component: ce
                }), r.createElement(o.c, {
                    path: "/communities/:encodedCommunityName/moderation",
                    exact: !0,
                    render: de
                }), r.createElement(o.c, {
                    path: "/communities/:encodedCommunityName/",
                    component: a.a
                }))))
            },
            ye = Object(o.f)(pe);
        n.d(t, "CommunityModerationRootPresentation", function() {
            return pe
        }), n.d(t, "CommunityModerationRoot", function() {
            return ye
        })
    },
    sJt0: function(e, t) {},
    wyZy: function(e, t) {}
});
//# sourceMappingURL=pages.community-moderation-2f6fdf94975779246745c911081a436f.js.map