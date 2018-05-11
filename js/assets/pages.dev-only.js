webpackJsonp([75], {
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var r = n("TToO"),
            i = n("6sO2"),
            o = n("Aj/L"),
            a = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.getOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.putOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.postOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.deleteOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var i, o, a, s;
                        return r.__generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), i = t.headers ? t.headers["Content-Type"] : void 0, o = this.serialize(t.body, i), a = r.__assign({}, t, {
                                        body: o
                                    }), [4, this._fetch(e, a)];
                                case 1:
                                    return s = l.sent(), [4, this.constructLegacyAPIResponse(s)];
                                case 2:
                                    return [2, l.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var i, o;
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                case 1:
                                    if ((i = a.sent()).error || i.requestError) throw new Error("Error while making request");
                                    return o = r.__assign({}, i, {
                                        body: i.body
                                    }), [2, Promise.resolve(o)];
                                case 2:
                                    throw a.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, i.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, o;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return n = r.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                case 3:
                                    return i = r.sent(), e.headers && e.headers.get && (o = e.headers.get("Content-Type")) && -1 !== o.indexOf("application/json") && (t.requestError = i), [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
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
                        headers: r.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                        contentType: t
                    }), null) : null
                }, e.getDefaultHeaders = function(e, t) {
                    var n = i.o.store.getState(),
                        r = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": i.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                    var a = Object(o.c)(n);
                    return a && (r.Authorization = "OAuth " + a.authToken, a.legacyCSRFToken && (r["Twitch-Api-Token"] = a.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        r[e] && delete r[e]
                    }), r
                }, e.logger = i.o.logger.withCategory("legacy-api"), e
            }()
    },
    mZoE: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GDPRConsent"
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
                                    value: "isFromEEA"
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
                end: 47
            }
        };
        n.loc.source = {
            body: "query GDPRConsent {\nrequestInfo {\nisFromEEA\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    yMnN: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("GiK3"),
            i = n("CIox"),
            o = n("F8kA"),
            a = n("6sO2"),
            s = n("zCIC"),
            l = n("w9tK"),
            c = n("CSlQ"),
            u = n("TToO"),
            d = n("Odds"),
            h = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.loadMoreA = function() {
                        return n.setState({
                            loadingA: !0
                        }), new Promise(function(e) {
                            setTimeout(function() {
                                n.setState({
                                    loadingA: !1,
                                    colA: n.state.colA + 2
                                }), e()
                            }, 3e3)
                        })
                    }, n.loadMoreB = function() {
                        return new Promise(function(e) {
                            n.setState({
                                loadingB: !0
                            }), setTimeout(function() {
                                n.setState({
                                    loadingB: !1,
                                    colB: n.state.colB + 5
                                }), e()
                            }, 2e3)
                        })
                    }, n.state = {
                        colA: 5,
                        loadingA: !1,
                        colB: 6,
                        loadingB: !1
                    }, n
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    for (var e = [], t = 0; t < this.state.colA; t++) e.push(r.createElement(d._8, {
                        key: t,
                        display: d.R.Flex,
                        flexWrap: d.U.NoWrap,
                        margin: 1
                    }, r.createElement(d._8, {
                        margin: {
                            right: 1
                        }
                    }, r.createElement(d._14, {
                        height: 90,
                        width: 90
                    })), r.createElement(d._8, null, r.createElement(d._14, {
                        width: 300,
                        lineCount: 3
                    }))));
                    var n = [];
                    for (t = 0; t < this.state.colB; t++) n.push(r.createElement(d._8, {
                        key: t,
                        display: d.R.Flex,
                        flexWrap: d.U.NoWrap,
                        margin: 1
                    }, r.createElement(d._8, {
                        margin: {
                            right: 1
                        }
                    }, r.createElement(d._14, {
                        height: 90,
                        width: 90
                    })), r.createElement(d._8, null, r.createElement(d._14, {
                        width: 300,
                        lineCount: 3
                    }))));
                    var i = {
                        border: "solid 3px",
                        borderColor: this.state.loadingA || this.state.loadingB ? "yellow" : "green",
                        height: "500px"
                    };
                    return r.createElement("div", {
                        style: i
                    }, r.createElement(s.b, null, r.createElement(d._8, {
                        display: d.R.Flex,
                        flexWrap: d.U.NoWrap
                    }, r.createElement(d._8, {
                        margin: {
                            right: 1
                        }
                    }, e, this.state.loadingA && r.createElement(d._8, null, r.createElement(d._10, {
                        fillContent: !0
                    })), r.createElement(s.a, {
                        enabled: !0,
                        loadMore: this.loadMoreA,
                        pixelThreshold: 0
                    })), r.createElement(d._8, null, n, this.state.loadingB && r.createElement(d._8, null, r.createElement(d._10, {
                        fillContent: !0
                    })), r.createElement(s.a, {
                        contentLength: n.length,
                        enabled: !0,
                        loadMore: this.loadMoreB,
                        pixelThreshold: 100
                    })))))
                }, t
            }(r.Component),
            m = Object(c.d)("DevOnlyPage", {
                destination: l.a.DevOnly,
                autoReportInteractive: !0
            })(function() {
                return r.createElement(s.b, null, r.createElement("div", {
                    style: {
                        margin: "0 2rem"
                    }
                }, r.createElement("h1", {
                    style: {
                        margin: "2rem 0"
                    }
                }, "The Dev only page!"), r.createElement("p", null, "This page is only included in development. Use it for testing all the things that need testing."), r.createElement("h2", {
                    style: {
                        margin: "2rem 0"
                    }
                }, " Logging and error reporting"), r.createElement("div", null, r.createElement(d.v, {
                    onClick: p
                }, "Log a debug-level message"), " ", r.createElement(d.v, {
                    onClick: g
                }, "Log a info-level message"), " ", r.createElement(d.v, {
                    onClick: v
                }, "Log a warning-level message"), " ", r.createElement(d.v, {
                    onClick: E
                }, "Log an error-level message with error"), " ", r.createElement(d.v, {
                    onClick: _
                }, "Log a fatal-level message with error"), " ", r.createElement(d.v, {
                    onClick: f
                }, "Log message with unserializable argument"), " ", r.createElement(d.v, {
                    onClick: y
                }, "Throw an error")), r.createElement("h2", {
                    style: {
                        margin: "2rem 0"
                    }
                }, " Dynamic Settings"), r.createElement("ul", null, r.createElement("li", null, r.createElement("pre", null, "environment = ", JSON.stringify(a.b.get("environment", "<not set>")))), r.createElement("li", null, r.createElement("pre", null, "env_test = ", JSON.stringify(a.b.get("env_test", "<not set>")))), r.createElement("li", null, r.createElement("pre", null, "totally_invalid_key = ", JSON.stringify(a.b.get("totally_invalid_key", "<default value>")))), r.createElement("li", null, r.createElement("pre", null, "experiments (hidden) = ", JSON.stringify(a.b.get("experiments", "<default value>"))))), r.createElement("h2", {
                    style: {
                        margin: "2rem 0"
                    }
                }, " Link tests"), r.createElement("ul", null, r.createElement("li", null, r.createElement(o.a, {
                    to: "/_dev"
                }, "Full path")), r.createElement("li", null, r.createElement(o.a, {
                    to: "/_dev?qs"
                }, "Full path, query string")), r.createElement("li", null, r.createElement(o.a, {
                    to: "/_dev#hash"
                }, "Full path, hash")), r.createElement("li", null, r.createElement(o.a, {
                    to: "/_dev?qs#hash"
                }, "Full path, query string, hash")), r.createElement("li", null, r.createElement(o.a, {
                    to: "_dev"
                }, "Relative (identical) path")), r.createElement("li", null, r.createElement(o.a, {
                    to: "_dev?qs"
                }, "Relative path, query string")), r.createElement("li", null, r.createElement(o.a, {
                    to: "_dev#hash"
                }, "Relative path, hash")), r.createElement("li", null, r.createElement(o.a, {
                    to: "_dev?qs#hash"
                }, "Relative path, query string, hash")), r.createElement("li", null, r.createElement(o.a, {
                    to: "?qs"
                }, "Query string")), r.createElement("li", null, r.createElement(o.a, {
                    to: "#hash"
                }, "Hash")), r.createElement("li", null, r.createElement(o.a, {
                    to: "?qs#hash"
                }, "Query string and hash")), r.createElement("li", null, r.createElement(o.a, {
                    to: {
                        pathname: "/_dev"
                    }
                }, "Location with pathname")), r.createElement("li", null, r.createElement(o.a, {
                    to: {
                        pathname: "_dev"
                    }
                }, "Location with relative (identical) pathname")), r.createElement("li", null, r.createElement(o.a, {
                    to: {
                        search: "?qs"
                    }
                }, "Location with query string")), r.createElement("li", null, r.createElement(o.a, {
                    to: {
                        hash: "hash"
                    }
                }, "Location with hash")), r.createElement("li", null, r.createElement(o.a, {
                    to: "/pondelinp?foo=bar&tt_content=content&tt_medium=medium&tt_foo=extrafoo"
                }, "URL with query parameters, including tt_codes")), r.createElement("li", null, r.createElement(o.a, {
                    to: {
                        pathname: "/pondelinp",
                        state: {
                            content: "content",
                            medium: "medium"
                        }
                    }
                }, "Internal Link with location state, including tt_codes")), r.createElement("li", null, r.createElement(o.a, {
                    to: "/adamar/dashboard"
                }, "Legacy Link (dashbaord)"))), r.createElement(d._8, {
                    margin: {
                        top: 2
                    }
                }, r.createElement(d.Q, {
                    type: d._49.H2
                }, " Infinite Scroll Test"), r.createElement(h, null))))
            });

        function p() {
            a.j.debug("debug message")
        }

        function g() {
            a.j.info("info message")
        }

        function v() {
            a.j.warn("warn message")
        }

        function f() {
            var e = {};
            e.self = e, a.j.info("Can't serialize this arg, oh no.", e)
        }

        function E() {
            try {
                throw new Error("throwing an error.")
            } catch (e) {
                a.j.error(e, "Artisanal error handling.")
            }
        }

        function _() {
            try {
                throw new Error("throwing a super bad unrecoverable error.")
            } catch (e) {
                a.j.fatal(e, "Superb fatal error handling.")
            }
        }

        function y() {
            throw new Error("Throwing an uncaught error.")
        }
        var w = n("2KeS"),
            k = n("RH2O"),
            b = n("7vx8");

        function C() {
            var e = window;
            return !!(e.evidon && e.evidon.notice && e.evidon.notice.consentIsGiven)
        }
        var S, O = n("BzvE");
        ! function(e) {
            e.Consent = "consent", e.Close = "close"
        }(S || (S = {}));
        var T = function() {
                function e() {
                    var t = this;
                    this.logger = a.j.withCategory("evidon-manager"), this.scriptsLoaded = !1, this.eventEmitter = new O.EventEmitter, this.onConsentGivenCallback = function() {
                        t.logger.debug("consent given"), t.eventEmitter.emit(S.Consent, !0)
                    }, this.onConsentRevokedCallback = function() {
                        t.logger.debug("consent revoked"), t.eventEmitter.emit(S.Consent, !1)
                    }, this.onCloseCallback = function() {
                        t.eventEmitter.emit(S.Close)
                    }, e.instance && this.logger.error(new Error("More than one EvidonManager constructed"), "You may only construct one EvidonManager per session.")
                }
                return e.addListeners = function(t) {
                    e.instance || (e.instance = new e), e.instance.addListeners(t), e.instance.loadScripts()
                }, e.removeListeners = function(t) {
                    e.instance && e.instance.removeListeners(t)
                }, e.prototype.loadScripts = function() {
                    if (this.scriptsLoaded) this.logger.debug("Canceling loading Evidon scripts. A process may already be in flight, or the script has already completed loading.");
                    else {
                        this.scriptsLoaded = !0;
                        var e = "//c.evidon.com",
                            t = e + "/sitenotice";
                        window.evidon = {
                            id: "5419",
                            priorConsentCallback: this.onConsentGivenCallback,
                            closeCallback: this.onCloseCallback,
                            consentWithdrawnCallback: this.onConsentRevokedCallback
                        };
                        try {
                            this.appendScript("evidon-notice", t + "/evidon-sitenotice-tag.js"), this.appendScript("evidon-location", e + "/geo/country.js"), this.appendScript("evidon-themes", t + "/5419/snthemes.js"), this.appendScript("evidon-settings", t + "/5419/twitch/settings.js")
                        } catch (e) {
                            this.logger.error(e, "Failed loading the Evidon scripts.")
                        }
                    }
                }, e.prototype.addListeners = function(e) {
                    e.consent && (this.eventEmitter.addListener(S.Consent, e.consent), e.consent(C())), e.close && this.eventEmitter.addListener(S.Close, e.close)
                }, e.prototype.removeListeners = function(e) {
                    e.consent && this.eventEmitter.removeListener(S.Consent, e.consent), e.close && this.eventEmitter.removeListener(S.Close, e.close)
                }, e.prototype.appendScript = function(e, t) {
                    var n = document.getElementsByTagName("script")[0];
                    n || (n = document.head);
                    var r = document.createElement("script");
                    if (r.async = !0, r.id = e, r.src = t, !n.parentNode) throw new Error("Failed to insert " + e + " into document");
                    n.parentNode.insertBefore(r, n)
                }, e
            }(),
            L = n("mZoE");
        var q = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        consentRecord: [t.gdpr.consentGiven]
                    }, n
                }
                return u.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.setState(function(t) {
                        return {
                            consentRecord: t.consentRecord.concat([e.gdpr.consentGiven])
                        }
                    })
                }, t.prototype.render = function() {
                    var e = window.location.search.includes("gdpr_override"),
                        t = a.b.get("gdpr_consent_enabled", !1),
                        n = e || t;
                    return r.createElement(d._8, {
                        padding: 2
                    }, r.createElement(d.Q, {
                        fontSize: d.V.Size2
                    }, "GDPR Consent"), r.createElement(d.Q, null, "Testing our withGDPRConsent HOC. Each prop update will render the current GDPRConsent value in the section below."), r.createElement(d._8, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(d.Q, {
                        fontSize: d.V.Size4
                    }, n ? "Enabled" : "Disabled"), r.createElement(d.Q, {
                        color: e ? d.K.Base : d.K.Error
                    }, "Query String: ?gdpr_override"), r.createElement(d.Q, {
                        color: t ? d.K.Base : d.K.Error
                    }, "Dynamic Settings: gdpr_consent_enabled")), r.createElement(d._35, {
                        padding: {
                            y: 1
                        },
                        borderTop: !0,
                        borderBottom: !0,
                        flexDirection: d.T.Row,
                        display: d.R.Flex
                    }, this.state.consentRecord.map(function(e, t) {
                        return r.createElement(d._35, {
                            border: !0,
                            margin: {
                                right: 1
                            },
                            key: t,
                            padding: 1
                        }, r.createElement(d.Q, {
                            fontSize: d.V.Size4
                        }, e ? "Consent" : "No Consent"))
                    })), e && r.createElement(d._8, {
                        margin: {
                            top: 1
                        }
                    }, r.createElement(d.Q, {
                        italic: !0
                    }, "The query param override is enabled, which means you will see the consent notice even if you are not in an EEA country."), r.createElement(d.Q, {
                        italic: !0
                    }, "Use the dynamic settings override instead to simulate the scenario where our consent solution determines you do not need to see the notice since you are not in an EEA country.")))
                }, t
            }(r.Component),
            N = Object(w.d)(Object(c.d)("GDPRTestPage", {
                autoReportInteractive: !0,
                destination: l.a.Unknown
            }), function(e) {
                var t = function(t) {
                    function n() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {
                            consentGiven: C()
                        }, e.dynamicSettingsEnabled = a.b.get("gdpr_consent_enabled", !1), e.logger = a.j.withCategory("with-gdpr-consent"), e.initializeEvidon = function() {
                            e.logger.debug("Listening to EvidonManager", {
                                displayName: n.displayName
                            }), T.addListeners({
                                consent: e.onConsentChange
                            })
                        }, e.onConsentChange = function(t) {
                            e.setState({
                                consentGiven: t
                            })
                        }, e.canInitializeEvidon = function(t) {
                            return !!(e.isEnabled() && t.data && t.data.requestInfo && (t.data.requestInfo.isFromEEA || e.hasQueryParamOverride()))
                        }, e.isEnabled = function() {
                            return e.hasQueryParamOverride() || e.dynamicSettingsEnabled
                        }, e
                    }
                    return u.__extends(n, t), n.prototype.componentDidMount = function() {
                        this.canInitializeEvidon(this.props) && this.initializeEvidon()
                    }, n.prototype.componentDidUpdate = function(e) {
                        this.props.data && !this.props.data.loading && (!e.data || e.data.loading) && this.canInitializeEvidon(this.props) && this.initializeEvidon()
                    }, n.prototype.componentWillUnmount = function() {
                        T.removeListeners({
                            consent: this.onConsentChange
                        })
                    }, n.prototype.render = function() {
                        var t = !1,
                            n = this.props.data && this.props.data.requestInfo,
                            i = n && (n.isFromEEA || this.hasQueryParamOverride()),
                            o = n && !i;
                        (!this.isEnabled() || o || i && this.state.consentGiven) && (t = !0);
                        var a = {
                            gdpr: {
                                consentGiven: t
                            }
                        };
                        return r.createElement(e, u.__assign({}, a, this.props))
                    }, n.prototype.hasQueryParamOverride = function() {
                        return window.location.search.includes("gdpr_override")
                    }, n.displayName = "WithGDPRConsent(" + (e.displayName || e.name || "Component") + ")", n
                }(r.Component);
                return Object(w.d)(Object(k.b)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded
                    }
                }), Object(b.a)(L, {
                    options: function(e) {
                        return {
                            skip: !e.firstPageLoaded
                        }
                    }
                }))(t)
            })(q),
            D = n("3zLD"),
            R = n("z7vJ"),
            A = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return r.createElement("div", {
                        style: {
                            margin: "0 2rem"
                        }
                    }, r.createElement("p", null, "Testing GraphQL"))
                }, t
            }(r.Component),
            P = Object(D.compose)(Object(b.a)(R, {
                options: function(e) {
                    return {
                        variables: {
                            shouldSkip: e.shouldSkip
                        }
                    }
                }
            }), o.f)(A),
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        shouldSkip: !0
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    setTimeout(function() {
                        return e.setState({
                            shouldSkip: !1
                        }, function() {
                            return setTimeout(function() {
                                return e.setState({
                                    shouldSkip: !0
                                })
                            }, 1e3)
                        })
                    }, 1e3)
                }, t.prototype.render = function() {
                    return r.createElement(P, {
                        shouldSkip: this.state.shouldSkip
                    })
                }, t
            }(r.Component),
            j = n("9u8h"),
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.logger = a.o.logger.withCategory("legacy-api-test"), t.testFailingAPICall = function() {
                        return u.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return u.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, j.a.getOrThrow("/v5/some-bad-route/test.json")];
                                    case 1:
                                        return e = n.sent(), this.logger.debug("API success for a bad route", {
                                            response: e
                                        }), [3, 3];
                                    case 2:
                                        return t = n.sent(), this.logger.error(t, "API failure caught"), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.testFailingAPICall()
                }, t.prototype.render = function() {
                    return r.createElement("div", {
                        style: {
                            margin: "0 2rem"
                        }
                    }, r.createElement("p", null, "Testing LegacyAPI"))
                }, t
            }(r.Component),
            U = function() {
                return r.createElement(i.e, null, r.createElement(i.c, {
                    path: "/_dev/legacy-api",
                    component: x
                }), r.createElement(i.c, {
                    path: "/_dev/gql",
                    component: F
                }), r.createElement(i.c, {
                    path: "/_dev/gdpr",
                    component: N
                }), r.createElement(i.c, {
                    path: "/_dev",
                    component: m
                }))
            };
        n.d(t, "DevOnlyRoot", function() {
            return U
        })
    },
    z7vJ: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Dev_Only_GQL"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "shouldSkip"
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
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "includeUser"
                        },
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
                                        value: "shouldSkip"
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
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "skipUser"
                        },
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "skip"
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
                                        value: "shouldSkip"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 174
            }
        };
        n.loc.source = {
            body: "query Dev_Only_GQL($shouldSkip: Boolean!) {\ncurrentUser {\nid\n}\nincludeUser: currentUser @include(if: $shouldSkip) {\nid\n}\nskipUser: currentUser @skip(if: $shouldSkip) {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.dev-only-8705476408fc01e866b8a2b421ba23a4.js.map