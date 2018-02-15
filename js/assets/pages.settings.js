webpackJsonp([45], {
    "+66z": function(e, t) {
        var n = Object.prototype.toString;
        e.exports = function(e) {
            return n.call(e)
        }
    },
    "+Aaf": function(e, t) {},
    "+gg+": function(e, t, n) {
        var r = n("TQ3y")["__core-js_shared__"];
        e.exports = r
    },
    "/GnY": function(e, t, n) {
        var r = n("HT7L"),
            i = n("W529"),
            a = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            if (!r(e)) return i(e);
            var t = [];
            for (var n in Object(e)) a.call(e, n) && "constructor" != n && t.push(n);
            return t
        }
    },
    "/I3N": function(e, t) {
        e.exports = function(e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
        }
    },
    "037f": function(e, t, n) {
        var r = n("1oyr"),
            i = n("p0bc"),
            a = n("wSKX"),
            o = i ? function(e, t) {
                return i(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: r(t),
                    writable: !0
                })
            } : a;
        e.exports = o
    },
    "0H+u": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UserImageUploader"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
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
                            value: "user"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "login"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "login"
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
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "bannerImageURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "offlineImageURL"
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
                end: 108
            }
        };
        n.loc.source = {
            body: "query UserImageUploader($login: String!) {\nuser(login: $login) {\nid\nlogin\nbannerImageURL\nofflineImageURL\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "16tV": function(e, t, n) {
        var r = n("tO4o"),
            i = n("ktak");
        e.exports = function(e) {
            for (var t = i(e), n = t.length; n--;) {
                var a = t[n],
                    o = e[a];
                t[n] = [a, o, r(o)]
            }
            return t
        }
    },
    "1C79": function(e, t, n) {
        function r(e, t, n, o, s) {
            var l = -1,
                c = e.length;
            for (n || (n = a), s || (s = []); ++l < c;) {
                var u = e[l];
                t > 0 && n(u) ? t > 1 ? r(u, t - 1, n, o, s) : i(s, u) : o || (s[s.length] = u)
            }
            return s
        }
        var i = n("uIr7"),
            a = n("Qp3N");
        e.exports = r
    },
    "1Yb9": function(e, t, n) {
        var r = n("mgnk"),
            i = n("UnEC"),
            a = Object.prototype,
            o = a.hasOwnProperty,
            s = a.propertyIsEnumerable,
            l = r(function() {
                return arguments
            }()) ? r : function(e) {
                return i(e) && o.call(e, "callee") && !s.call(e, "callee")
            };
        e.exports = l
    },
    "1f5k": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PlatformNotificationSettings_User"
                },
                variableDefinitions: [],
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
                                    value: "notificationSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "category"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "platforms"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "platformName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "settingState"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isEnabled"
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
            }],
            loc: {
                start: 0,
                end: 158
            }
        };
        n.loc.source = {
            body: "query PlatformNotificationSettings_User {\ncurrentUser {\nid\ndisplayName\nnotificationSettings {\ncategory\nplatforms {\nplatformName\nsettingState\nisEnabled\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "1oyr": function(e, t) {
        e.exports = function(e) {
            return function() {
                return e
            }
        }
    },
    "22B7": function(e, t) {
        e.exports = function(e, t) {
            return e === t || e != e && t != t
        }
    },
    "2Hvv": function(e, t, n) {
        var r = n("imBK");
        e.exports = function(e) {
            return r(this.__data__, e) > -1
        }
    },
    "2X2u": function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                if (t(e[n], n, e)) return !0;
            return !1
        }
    },
    "3Did": function(e, t, n) {
        var r = n("uCi2");
        e.exports = function(e) {
            return function(t) {
                return r(t, e)
            }
        }
    },
    "4LC8": function(e, t) {},
    "4Q9N": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r;
        ! function(e) {
            e.ProfileImage = "profile_image", e.ProfileBanner = "profile_banner", e.ChannelOfflineImage = "channel_offline_image"
        }(r || (r = {}))
    },
    "5N57": function(e, t, n) {
        var r = n("ICSD")(n("TQ3y"), "Set");
        e.exports = r
    },
    "5Y57": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("U7vG"),
            a = n("rCmJ"),
            o = n("6sO2"),
            s = n("Odds"),
            l = function() {
                return i.createElement(s._2, {
                    display: s.N.Flex,
                    flexDirection: s.P.Column,
                    justifyContent: s._1.Center,
                    alignItems: s.c.Center,
                    flexGrow: 1,
                    fullHeight: !0,
                    padding: {
                        y: 1
                    },
                    zIndex: s._52.Above
                }, i.createElement(s._25, {
                    color: s.I.Alt2,
                    textAlign: s._36.Center,
                    flexShrink: 1
                }, i.createElement(s._15, {
                    asset: s._16.DeadGlitch,
                    width: 46,
                    height: 48
                })), i.createElement(s.W, {
                    margin: {
                        top: 1
                    },
                    textAlign: s._36.Center
                }, i.createElement(s._35, {
                    type: s._40.H4,
                    "data-test-selector": "search-error-message"
                }, Object(o.d)("Search is not available at this time", "DropdownSearchError"))), i.createElement(s._35, {
                    type: s._40.P
                }, Object(o.d)("Please try again later", "DropdownSearchError")))
            },
            c = n("6BvN"),
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        focusSelectable: !1,
                        isOpen: !1
                    }, t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t.onKeyDown = function(e) {
                        e.keyCode === c.a.Esc ? t.setState({
                            isOpen: !1
                        }) : e.keyCode === c.a.Up ? t.focusNext(-1) : e.keyCode === c.a.Down && t.focusNext(1)
                    }, t.onClickOut = function() {
                        t.state.isOpen && t.setState({
                            isOpen: !1
                        }), t.props.onClose && t.props.onClose()
                    }, t.onMouseOver = function(e) {
                        var n = e.target.closest("[data-selectable]");
                        n && (n.focus(), n.tabIndex = 0, t.state.currentFocus && (t.state.currentFocus.tabIndex = -1), t.setState({
                            currentFocus: n
                        }), t.props.onFocusChange && t.props.onFocusChange(n))
                    }, t.getInputRef = function(e) {
                        t.inputRef = e
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.isErrored ? i.createElement(l, null) : i.Children.only(this.props.children);
                    return i.createElement(a.a, {
                        onClickOut: this.onClickOut
                    }, i.createElement(s._18, {
                        onChange: this.handleChange,
                        onKeyDown: this.onKeyDown,
                        onFocus: this.props.onFocusInput,
                        placeholder: this.props.placeholder,
                        id: "nav-search-input",
                        "data-a-target": "nav-search-input",
                        spellCheck: !1,
                        refDelegate: this.getInputRef
                    }), i.createElement(s.p, r.__assign({
                        noTail: !0
                    }, this.props.balloonProps, {
                        show: this.state.isOpen
                    }), i.createElement("div", {
                        tabIndex: 0,
                        onKeyDown: this.onKeyDown,
                        onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                    }, e)))
                }, t.prototype.toggle = function(e) {
                    e !== this.state.isOpen && this.setState({
                        isOpen: e
                    })
                }, t.prototype.setValue = function(e) {
                    this.inputRef.value = e
                }, t.prototype.focusNext = function(e) {
                    var t, n = document.querySelectorAll("[data-selectable=true]"),
                        r = document.activeElement,
                        i = Array.prototype.indexOf.call(n, r);
                    if ((t = i < 0 ? e > 0 ? 0 : n.length - 1 : i + e) < 0 && (t = 0), !(t >= n.length)) {
                        var a = n.item(t);
                        a.focus(), a.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: a
                        }), this.props.onFocusChange && this.props.onFocusChange(a)
                    }
                }, t
            }(i.Component);
        n.d(t, "a", function() {
            return u
        })
    },
    "5Zxu": function(e, t, n) {
        var r = n("sBat");
        e.exports = function(e) {
            var t = r(e),
                n = t % 1;
            return t == t ? n ? t - n : t : 0
        }
    },
    "6MiT": function(e, t, n) {
        var r = n("aCM0"),
            i = n("UnEC"),
            a = "[object Symbol]";
        e.exports = function(e) {
            return "symbol" == typeof e || i(e) && r(e) == a
        }
    },
    "6kJs": function(e, t, n) {
        var r = n("Hxdr"),
            i = n("JyYQ"),
            a = n("yzuE"),
            o = n("gpZ8"),
            s = n("S7p9"),
            l = n("Oo6K"),
            c = n("wSKX");
        e.exports = function(e, t, n) {
            var u = -1;
            t = r(t.length ? t : [c], s(i));
            var d = a(e, function(e, n, i) {
                return {
                    criteria: r(t, function(t) {
                        return t(e)
                    }),
                    index: ++u,
                    value: e
                }
            });
            return o(d, function(e, t) {
                return l(e, t, n)
            })
        }
    },
    "7YkW": function(e, t, n) {
        function r(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.__data__ = new i; ++t < n;) this.add(e[t])
        }
        var i = n("YeCl"),
            a = n("Cskv"),
            o = n("aQOO");
        r.prototype.add = r.prototype.push = a, r.prototype.has = o, e.exports = r
    },
    "7e4z": function(e, t, n) {
        var r = n("uieL"),
            i = n("1Yb9"),
            a = n("NGEn"),
            o = n("ggOT"),
            s = n("ZGh9"),
            l = n("YsVG"),
            c = Object.prototype.hasOwnProperty;
        e.exports = function(e, t) {
            var n = a(e),
                u = !n && i(e),
                d = !n && !u && o(e),
                p = !n && !u && !d && l(e),
                f = n || u || d || p,
                h = f ? r(e.length, String) : [],
                g = h.length;
            for (var m in e) !t && !c.call(e, m) || f && ("length" == m || d && ("offset" == m || "parent" == m) || p && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || s(m, g)) || h.push(m);
            return h
        }
    },
    "8AZL": function(e, t) {
        e.exports = function(e, t, n) {
            switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }
    },
    "94sX": function(e, t, n) {
        var r = n("dCZQ");
        e.exports = function() {
            this.__data__ = r ? r(null) : {}, this.size = 0
        }
    },
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var r = n("TToO"),
            i = n("6sO2"),
            a = n("Aj/L"),
            o = "application/json; charset=UTF-8",
            s = function() {
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
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var i, a;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), i = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, i), [4, this._fetch(e, t)];
                                case 1:
                                    return a = r.sent(), [4, this.constructLegacyAPIResponse(a)];
                                case 2:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, i.n.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n, i;
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
                                    return i = r.sent(), t.requestError = i, [3, 4];
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
                    return t === o ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var n = i.n.store.getState(),
                        r = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": i.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = o);
                    var s = Object(a.c)(n);
                    return s && (r.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (r["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        r[e] && delete r[e]
                    }), r
                }, e
            }()
    },
    A9mX: function(e, t, n) {
        var r = n("pTUa");
        e.exports = function(e) {
            var t = r(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
    },
    AL3x: function(e, t) {},
    AQCV: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "GlobalNotificationSettings_SetChannelGlobalIsEnabled"
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
                                value: "FollowUserInput"
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
                            value: "followUser"
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
                                            value: "disableNotifications"
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
                end: 153
            }
        };
        n.loc.source = {
            body: "mutation GlobalNotificationSettings_SetChannelGlobalIsEnabled($input: FollowUserInput!) {\nfollowUser(input: $input) {\nfollow {\ndisableNotifications\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "Ai/T": function(e, t) {
        var n = Function.prototype.toString;
        e.exports = function(e) {
            if (null != e) {
                try {
                    return n.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }
    },
    C0hh: function(e, t) {
        e.exports = function() {
            return []
        }
    },
    CW5P: function(e, t, n) {
        var r = n("T/bE"),
            i = n("duB3"),
            a = n("POb3");
        e.exports = function() {
            this.size = 0, this.__data__ = {
                hash: new r,
                map: new(a || i),
                string: new r
            }
        }
    },
    "CkX/": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SettingsTabs_User"
                },
                variableDefinitions: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasTurbo"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
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
                end: 92
            }
        };
        n.loc.source = {
            body: "query SettingsTabs_User {\ncurrentUser {\nid\nhasTurbo\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Cskv: function(e, t) {
        var n = "__lodash_hash_undefined__";
        e.exports = function(e) {
            return this.__data__.set(e, n), this
        }
    },
    D2cp: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_ChannelVideo_ChatDelayRadioButtons"
                },
                variableDefinitions: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "chatSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "chatDelayMs"
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
                end: 101
            }
        };
        n.loc.source = {
            body: "query Settings_ChannelVideo_ChatDelayRadioButtons {\ncurrentUser {\nid\nchatSettings {\nchatDelayMs\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Dc0G: function(e, t, n) {
        (function(e) {
            var r = n("blYT"),
                i = "object" == typeof t && t && !t.nodeType && t,
                a = i && "object" == typeof e && e && !e.nodeType && e,
                o = a && a.exports === i && r.process,
                s = function() {
                    try {
                        return o && o.binding && o.binding("util")
                    } catch (e) {}
                }();
            e.exports = s
        }).call(t, n("3IRH")(e))
    },
    Dv2r: function(e, t, n) {
        var r = n("pTUa");
        e.exports = function(e, t) {
            var n = r(this, e),
                i = n.size;
            return n.set(e, t), this.size += n.size == i ? 0 : 1, this
        }
    },
    E4Hj: function(e, t) {
        e.exports = function(e) {
            return this.__data__.get(e)
        }
    },
    EHRO: function(e, t, n) {
        var r = n("NkRn"),
            i = n("qwTf"),
            a = n("22B7"),
            o = n("FhcP"),
            s = n("WFiI"),
            l = n("octw"),
            c = 1,
            u = 2,
            d = "[object Boolean]",
            p = "[object Date]",
            f = "[object Error]",
            h = "[object Map]",
            g = "[object Number]",
            m = "[object RegExp]",
            v = "[object Set]",
            b = "[object String]",
            y = "[object Symbol]",
            S = "[object ArrayBuffer]",
            _ = "[object DataView]",
            E = r ? r.prototype : void 0,
            k = E ? E.valueOf : void 0;
        e.exports = function(e, t, n, r, E, w, x) {
            switch (n) {
                case _:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case S:
                    return !(e.byteLength != t.byteLength || !w(new i(e), new i(t)));
                case d:
                case p:
                case g:
                    return a(+e, +t);
                case f:
                    return e.name == t.name && e.message == t.message;
                case m:
                case b:
                    return e == t + "";
                case h:
                    var O = s;
                case v:
                    var C = r & c;
                    if (O || (O = l), e.size != t.size && !C) return !1;
                    var N = x.get(e);
                    if (N) return N == t;
                    r |= u, x.set(e, t);
                    var j = o(O(e), O(t), r, E, w, x);
                    return x.delete(e), j;
                case y:
                    if (k) return k.call(e) == k.call(t)
            }
            return !1
        }
    },
    EaRL: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "AdvancedNotificationSettings_User"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "limit"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "cursor"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Cursor"
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "follows"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "after"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "cursor"
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
                                            value: "totalCount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "edges"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "node"
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
                                                                value: "70"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "login"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "followers"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "totalCount"
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
                                                    value: "notificationSettings"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isEnabled"
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
                                            value: "pageInfo"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "hasNextPage"
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
            }],
            loc: {
                start: 0,
                end: 303
            }
        };
        n.loc.source = {
            body: "query AdvancedNotificationSettings_User($limit: Int $cursor: Cursor) {\ncurrentUser {\nid\nfollows(first: $limit after: $cursor) {\ntotalCount\nedges {\ncursor\nnode {\nid\ndisplayName\nprofileImageURL(width: 70)\nlogin\nfollowers {\ntotalCount\n}\n}\nnotificationSettings {\nisEnabled\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    FCuZ: function(e, t, n) {
        var r = n("uIr7"),
            i = n("NGEn");
        e.exports = function(e, t, n) {
            var a = t(e);
            return i(e) ? a : r(a, n(e))
        }
    },
    FhcP: function(e, t, n) {
        var r = n("7YkW"),
            i = n("2X2u"),
            a = n("dmQx"),
            o = 1,
            s = 2;
        e.exports = function(e, t, n, l, c, u) {
            var d = n & o,
                p = e.length,
                f = t.length;
            if (p != f && !(d && f > p)) return !1;
            var h = u.get(e);
            if (h && u.get(t)) return h == t;
            var g = -1,
                m = !0,
                v = n & s ? new r : void 0;
            for (u.set(e, t), u.set(t, e); ++g < p;) {
                var b = e[g],
                    y = t[g];
                if (l) var S = d ? l(y, b, g, t, e, u) : l(b, y, g, e, t, u);
                if (void 0 !== S) {
                    if (S) continue;
                    m = !1;
                    break
                }
                if (v) {
                    if (!i(t, function(e, t) {
                            if (!a(v, t) && (b === e || c(b, e, n, l, u))) return v.push(t)
                        })) {
                        m = !1;
                        break
                    }
                } else if (b !== y && !c(b, y, n, l, u)) {
                    m = !1;
                    break
                }
            }
            return u.delete(e), u.delete(t), m
        }
    },
    FsFC: function(e, t, n) {
        "use strict";

        function r(e, t) {
            return e === i.SECOND ? Object(a.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                secondCount: t
            }, "formatDuration") : e === i.MINUTE ? Object(a.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                minuteCount: t
            }, "formatDuration") : e === i.DAY ? Object(a.d)("{dayCount, plural, one {# day} other {# days}}", {
                dayCount: t
            }, "formatDuration") : e === i.HOUR ? Object(a.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                hourCount: t
            }, "formatDuration") : e === i.WEEK ? Object(a.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                weekCount: t
            }, "formatDuration") : e === i.MONTH ? Object(a.d)("{monthCount, plural, one {# month} other {# months}}", {
                monthCount: t
            }, "formatDuration") : ""
        }
        t.a = function(e) {
            if (e < 60) return r(i.SECOND, e);
            var t = Math.floor(e / 60),
                n = e % 60;
            if (t < 60) return n ? r(i.MINUTE, t) + " " + r(i.SECOND, n) : r(i.MINUTE, t);
            var a = Math.floor(t / 60);
            if (t %= 60, a < 24) return t ? r(i.HOUR, a) + " " + r(i.MINUTE, t) : r(i.HOUR, a);
            var o = Math.floor(a / 24);
            if (a %= 24, o < 7) return a ? r(i.DAY, o) + " " + r(i.HOUR, a) : r(i.DAY, o);
            if (o <= 26) {
                var s = Math.floor(o / 7);
                return (o %= 7) ? r(i.WEEK, s) + " " + r(i.DAY, o) : r(i.WEEK, s)
            }
            var l = Math.round((o + 3) / 30);
            return r(i.MONTH, l)
        };
        var i, a = n("6sO2");
        ! function(e) {
            e[e.SECOND = 0] = "SECOND", e[e.MINUTE = 1] = "MINUTE", e[e.HOUR = 2] = "HOUR", e[e.DAY = 3] = "DAY", e[e.WEEK = 4] = "WEEK", e[e.MONTH = 5] = "MONTH"
        }(i || (i = {}))
    },
    G2xm: function(e, t) {
        e.exports = function(e) {
            return this.__data__.has(e)
        }
    },
    HT7L: function(e, t) {
        var n = Object.prototype;
        e.exports = function(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || n)
        }
    },
    Hxdr: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
            return i
        }
    },
    ICSD: function(e, t, n) {
        var r = n("ITwD"),
            i = n("mTAn");
        e.exports = function(e, t) {
            var n = i(e, t);
            return r(n) ? n : void 0
        }
    },
    IGcM: function(e, t, n) {
        var r = n("bIjD"),
            i = n("1Yb9"),
            a = n("NGEn"),
            o = n("ZGh9"),
            s = n("Rh28"),
            l = n("Ubhr");
        e.exports = function(e, t, n) {
            for (var c = -1, u = (t = r(t, e)).length, d = !1; ++c < u;) {
                var p = l(t[c]);
                if (!(d = null != e && n(e, p))) break;
                e = e[p]
            }
            return d || ++c != u ? d : !!(u = null == e ? 0 : e.length) && s(u) && o(p, u) && (a(e) || i(e))
        }
    },
    ITwD: function(e, t, n) {
        var r = n("gGqR"),
            i = n("eFps"),
            a = n("yCNF"),
            o = n("Ai/T"),
            s = /^\[object .+?Constructor\]$/,
            l = Function.prototype,
            c = Object.prototype,
            u = l.toString,
            d = c.hasOwnProperty,
            p = RegExp("^" + u.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e.exports = function(e) {
            return !(!a(e) || i(e)) && (r(e) ? p : s).test(o(e))
        }
    },
    J8WN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var r = n("TToO"),
            i = n("U7vG"),
            a = (n.n(i), n("Odds")),
            o = n("yU6t"),
            s = (n.n(o), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isDraggingOver: !1
                    }, t.onDragEnter = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !0
                        })
                    }, t.onDragLeave = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        })
                    }, t.onFileInputChange = function(e) {
                        e.preventDefault(), t.finalizeSelections(e.target.files), e.target.value = ""
                    }, t.onFileDrop = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        }), t.finalizeSelections(e.dataTransfer.files)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(a.O, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, i.createElement(a.W, {
                        position: a._9.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: a._52.Above
                    }, i.createElement("input", {
                        "data-test-selector": "file-picker-input",
                        className: "drag-and-drop-file-picker__input",
                        accept: this.props.allowedFileTypes.join(","),
                        multiple: this.props.multiFile || !1,
                        onChange: this.onFileInputChange,
                        type: "file",
                        onDragLeave: this.onDragLeave,
                        onDragEnter: this.onDragEnter,
                        onDrop: this.onFileDrop
                    })), this.props.children)
                }, t.prototype.finalizeSelections = function(e) {
                    e && this.props.onFilesSubmitted(Array.from(e))
                }, t
            }(i.Component))
    },
    JBcW: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), t.c = function(e) {
            i.m.track(a.SpadeEventType.BrowserPushNotificationPrompt, e)
        }, t.b = function(e) {
            i.m.track(a.SpadeEventType.BrowserPushNotificationDisable, e)
        };
        var r, i = n("6sO2"),
            a = n("vH/s");
        (r || (r = {})).Settings = "settings"
    },
    JBvZ: function(e, t, n) {
        var r = n("imBK");
        e.exports = function(e) {
            var t = this.__data__,
                n = r(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
    },
    JyYQ: function(e, t, n) {
        var r = n("d+aQ"),
            i = n("eKBv"),
            a = n("wSKX"),
            o = n("NGEn"),
            s = n("iL3P");
        e.exports = function(e) {
            return "function" == typeof e ? e : null == e ? a : "object" == typeof e ? o(e) ? i(e[0], e[1]) : r(e) : s(e)
        }
    },
    K4jf: function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = {
                time: Date.now(),
                location: "recommended",
                target_channel: t.targetChannel,
                action: e
            };
            m.n.tracking.track(w.SpadeEventType.AutoHostChannelUpdate, n)
        }

        function i(e) {
            var t = null;
            return e.description && (t = h.createElement(O._2, {
                margin: {
                    top: 1
                }
            }, h.createElement(O._35, {
                color: O.I.Alt2
            }, e.description))), h.createElement(O._2, {
                margin: {
                    top: 2,
                    bottom: 4
                }
            }, h.createElement(O._35, {
                type: O._40.H3,
                fontSize: O.R.Size2
            }, e.title), t)
        }

        function a(e, t) {
            var n = {
                time: Date.now(),
                new_value: t.newValue
            };
            m.n.tracking.track(e, n)
        }

        function o() {
            return h.createElement(Q, {
                label: Object(m.d)("Password", "ChangePasswordLink"),
                orientation: O.T.Horizontal
            }, h.createElement(O._35, null, Object(m.d)("<x:link>Change password.</x:link> Improve your security with a strong password.", {
                "x:link": function(e) {
                    return h.createElement("a", {
                        key: "change-password-link",
                        href: "https://passport.twitch.tv/passwords/new?"
                    }, e)
                }
            }, "ChangePasswordLink")))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s, l = n("RH2O"),
            c = n("2KeS"),
            u = n("+xm8"),
            d = n("f2i/"),
            p = n("Aj/L"),
            f = n("TToO"),
            h = n("U7vG"),
            g = n("CIox"),
            m = n("6sO2"),
            v = n("yWCw"),
            b = n("CSlQ"),
            y = n("eXld"),
            S = n("2aoH"),
            _ = n("j7/Y"),
            E = n("Ejve"),
            k = n("w9tK"),
            w = n("vH/s"),
            x = n("H4lr"),
            O = n("Odds");
        ! function(e) {
            e[e.NoChanges = 0] = "NoChanges", e[e.DirtyChanges = 1] = "DirtyChanges", e[e.Working = 2] = "Working", e[e.Success = 3] = "Success", e[e.Error = 4] = "Error"
        }(s || (s = {}));
        var C, N = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    var e = O.y.Default,
                        t = Object(m.d)("Save Changes", "SaveSettingsFooter"),
                        n = O.z.Default,
                        r = !1;
                    return this.props.status === s.Working ? e = O.y.Loading : this.props.status === s.Success ? e = O.y.Success : this.props.status === s.Error ? (n = O.z.Alert, t = Object(m.d)("Failed to save settings. Try again.", "SaveSettingsFooter")) : this.props.status === s.NoChanges && (r = !0), h.createElement(x.a, null, h.createElement(O._25, {
                        borderTop: !0,
                        display: O.N.Flex,
                        alignItems: O.c.Center,
                        justifyContent: O._1.Center,
                        padding: {
                            y: 2
                        },
                        margin: {
                            x: Xt
                        }
                    }, h.createElement(O.u, {
                        disabled: r,
                        size: O.x.Large,
                        state: e,
                        type: n,
                        onClick: this.props.onClickSave,
                        "data-a-target": "save-user-settings-button"
                    }, t)))
                }, t
            }(h.Component),
            j = n("9u8h"),
            T = n("LIeg"),
            P = n("i61F"),
            I = n("HM6l"),
            U = n("5LoI"),
            D = n("MAZT"),
            A = n("5Y57"),
            R = n("kqTE"),
            F = n("zCIC"),
            H = n("HW6M"),
            M = n("5kgt"),
            L = n("puy8"),
            B = (n("4LC8"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1
                    }, t.onRemoveClick = function() {
                        t.props.onRemoveClick(t.props.user)
                    }, t.onMouseEnter = function() {
                        t.setState({
                            hovered: !0
                        })
                    }, t.onMouseLeave = function() {
                        t.setState({
                            hovered: !1
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    var e = Object(m.d)("Remove", "AutoHostListItem"),
                        t = !this.props.isSorting && this.state.hovered,
                        n = {
                            "auto-host-list-item": !0,
                            "auto-host-list-item--hovered": t
                        },
                        r = null;
                    t && (r = h.createElement(O._2, {
                        className: "auto-host-list-item--remove",
                        padding: {
                            right: 1
                        },
                        display: O.N.Flex,
                        attachRight: !0
                    }, h.createElement(O._43, {
                        label: e,
                        direction: O._45.Left
                    }, h.createElement(O.v, {
                        "data-test-selector": "AUTO_HOST_REMOVE_BUTTON",
                        ariaLabel: e,
                        icon: O._16.Trash,
                        onClick: this.onRemoveClick,
                        overlay: !0
                    }))));
                    var i = this.props.user.avatar || Object(L.c)(this.props.user.id, 64);
                    return h.createElement(O.W, f.__assign({
                        className: H(n),
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(M.a)(this.props)), h.createElement("div", {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }, h.createElement(O.A, {
                        row: !0
                    }, h.createElement(O._2, {
                        className: "auto-host-list-item__avatar"
                    }, h.createElement(O.j, {
                        ratio: O.k.Aspect1x1
                    }, h.createElement("img", {
                        alt: this.props.user.name,
                        src: i,
                        draggable: !1
                    }))), h.createElement(O._2, {
                        flexGrow: 1,
                        display: O.N.Flex,
                        position: O._9.Relative
                    }, h.createElement(O.W, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, h.createElement(O._35, {
                        type: O._40.Span,
                        ellipsis: !0
                    }, this.props.user.name))), r)))
                }, t
            }(h.Component)),
            z = Object(P.SortableElement)(function(e) {
                return h.createElement(B, f.__assign({}, e))
            }),
            V = (n("wn44"), function(e) {
                return h.createElement(F.b, {
                    className: "auto-host-list-edit",
                    suppressScrollX: !0
                }, h.createElement(O._2, null, e.autohostChannels && e.autohostChannels.map(function(t, n) {
                    return h.createElement(z, {
                        user: t,
                        key: t.id,
                        index: n,
                        onRemoveClick: e.onHostRemoved,
                        isSorting: e.isSorting
                    })
                })))
            }),
            W = Object(P.SortableContainer)(function(e) {
                return h.createElement(V, f.__assign({}, e))
            }),
            G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onAddClick = function() {
                        t.props.onAddClick(t.props.user)
                    }, t.onAddedClick = function() {
                        t.props.onAddedClick(t.props.user)
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    e = this.props.user.added ? h.createElement(O.u, {
                        onClick: this.onAddedClick,
                        "data-test-selector": "AUTO_HOST_REMOVE_BUTTON",
                        icon: O._16.Check,
                        statusAlertIcon: O._16.Trash,
                        statusAlertText: Object(m.d)("Remove", "AutoHostUserResultCard")
                    }, Object(m.d)("Added", "AutoHostUserResultCard")) : h.createElement(O.u, {
                        type: O.z.Hollow,
                        onClick: this.onAddClick,
                        "data-test-selector": "AUTO_HOST_ADD_BUTTON"
                    }, Object(m.d)("Add", "AutoHostUserResultCard"));
                    var t = this.props.user.avatar || Object(L.c)(this.props.user.id, 64);
                    return h.createElement(O._2, f.__assign({
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(M.a)(this.props)), h.createElement(O.A, {
                        row: !0
                    }, h.createElement(O.C, {
                        alt: this.props.user.name,
                        src: t,
                        size: O.D.Size4,
                        aspect: O.k.Aspect1x1
                    }), h.createElement(O._2, {
                        flexGrow: 1,
                        display: O.N.Flex,
                        position: O._9.Relative
                    }, h.createElement(O.W, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, h.createElement(O._35, {
                        type: O._40.Span,
                        ellipsis: !0
                    }, this.props.user.name))), e))
                }, t
            }(h.Component),
            q = function(e) {
                return h.createElement(O._2, {
                    margin: {
                        top: 1
                    }
                }, h.createElement(O._35, {
                    color: O.I.Alt,
                    "data-a-target": e.dataTarget
                }, e.text))
            },
            Q = (n("l+ac"), function(e) {
                return h.createElement(O._2, {
                    className: "settings-form-group",
                    margin: {
                        bottom: 4
                    }
                }, h.createElement(O.S, {
                    error: e.error,
                    errorMessage: e.errorMessage || Object(m.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
                    hint: e.hint,
                    id: e.id,
                    label: e.label,
                    labelOptional: e.labelOptional,
                    orientation: e.orientation || O.T.Horizontal
                }, e.children))
            }),
            Y = (n("WYUS"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.userSearch = null, t.setUserSearchRef = function(e) {
                        t.userSearch = e
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.userSearch && e.isUserSearchOpen !== this.props.isUserSearchOpen && this.userSearch.toggle(e.isUserSearchOpen)
                }, t.prototype.render = function() {
                    var e = this,
                        t = null;
                    return this.props.isWaiting ? t = h.createElement(O._4, {
                        fillContent: !0
                    }) : this.props.userResults && (t = this.props.userResults.map(function(t) {
                        return h.createElement(R.a, {
                            key: t.id
                        }, h.createElement(G, {
                            user: t,
                            onAddClick: e.props.onHostAdded,
                            onAddedClick: e.props.onHostRemoved,
                            key: t.id
                        }))
                    })), h.createElement(Q, {
                        label: Object(m.d)("Currently Hosting", "SettingsChannelPage"),
                        error: !!this.props.formErrorMsg,
                        errorMessage: this.props.formErrorMsg || ""
                    }, h.createElement(q, {
                        text: Object(m.d)("Add and adjust your hosted channels", "SettingsChannelPage")
                    }), h.createElement(O._2, {
                        className: "auto-host-list",
                        alignContent: O.b.Center
                    }, h.createElement(O._2, {
                        position: O._9.Relative,
                        margin: {
                            y: 1
                        }
                    }, h.createElement(A.a, {
                        onChange: this.props.onUserInputChange,
                        onFocusInput: this.props.onFocusInput,
                        ref: this.setUserSearchRef,
                        placeholder: Object(m.d)("Search channels to host", "AutoHostList"),
                        balloonProps: {
                            show: this.props.isUserSearchOpen,
                            direction: O.q.Bottom,
                            size: O.r.Large
                        },
                        onClose: this.props.onSearchClose,
                        isErrored: this.props.isSearchErrored
                    }, h.createElement(O._2, {
                        className: "auto-host-list__user-search"
                    }, h.createElement(F.b, {
                        contentClassName: "auto-host-list__user-search-content",
                        suppressScrollX: !0
                    }, h.createElement(O._2, {
                        fullWidth: !0
                    }, t, h.createElement(F.a, {
                        enabled: !this.props.isWaiting && this.props.isUserSearchOpen,
                        loadMore: this.props.loadMore
                    })))))), h.createElement(W, {
                        onHostRemoved: this.props.onHostRemoved,
                        autohostChannels: this.props.autohostChannels,
                        onSortEnd: this.props.onSortEnd,
                        lockToContainerEdges: !0,
                        lockAxis: "y",
                        helperClass: "auto-host-list-item--selected",
                        onSortStart: this.props.onSortStart,
                        isSorting: this.props.isSorting,
                        selectedIndex: this.props.selectedIndex,
                        distance: 20
                    })))
                }, t
            }(h.Component)),
            K = 100,
            J = "/kraken/streams/recommended",
            Z = "kraken/autohost/list",
            X = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.state = {
                        userResults: [],
                        userTerm: "",
                        isUserSearchOpen: !1,
                        queryID: "",
                        isWaiting: !1,
                        autohostChannels: [],
                        isSearchErrored: !1,
                        recommendedChannels: null,
                        currentPage: 0
                    }, t.onUserInputChange = function(e) {
                        if (t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), !e) return t.setRecommendedChannels(), void t.setState(function() {
                            return {
                                userTerm: "",
                                isWaiting: !1,
                                isSearchErrored: !1,
                                formErrorMsg: "",
                                currentPage: 0
                            }
                        });
                        t.setState({
                            userTerm: e,
                            userResults: [],
                            isWaiting: !0,
                            isSearchErrored: !1,
                            currentPage: 0
                        }), t.inputTimer = setTimeout(function() {
                            return t.doUserSearch(e)
                        }, K)
                    }, t.loadMore = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, i, a = this;
                            return f.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!this.state.userTerm || this.state.queryID || this.state.isWaiting || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, t = null, o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(U.a.Users, this.state.userTerm, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = o.sent(), [3, 4];
                                    case 3:
                                        return n = o.sent(), m.i.error(n, "Algolia page search failed"), this.setState({
                                            isSearchErrored: !0,
                                            isUserSearchOpen: !0
                                        }), [2];
                                    case 4:
                                        return t && t.users ? (r = t.users.hits.filter(function(e) {
                                            return !a.props.user || e.objectID !== a.props.user.id
                                        }).map(function(e) {
                                            return {
                                                id: e.objectID,
                                                avatar: e.profile_image,
                                                name: e.name,
                                                added: !!a.state.autohostChannels.find(function(t) {
                                                    return t.id === e.objectID
                                                })
                                            }
                                        }), i = t.exhaustedHits, this.setState(function(t) {
                                            return {
                                                userResults: t.userResults.concat(r),
                                                isUserSearchOpen: !0,
                                                isWaiting: !1,
                                                currentPage: e,
                                                exhaustedHits: i
                                            }
                                        }), [2]) : [2]
                                }
                            })
                        })
                    }, t.addChannel = function(e) {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var t, n, i;
                            return f.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!this.state.autohostChannels) return [2];
                                        (t = this.state.autohostChannels.map(function(e) {
                                            return e.id
                                        })).push(e.id), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, j.a.put(Z, {
                                            body: {
                                                targets: t.join(",")
                                            }
                                        })];
                                    case 2:
                                        return a.sent(), [3, 4];
                                    case 3:
                                        return n = a.sent(), i = Object(m.d)("Unable to add user to auto host list", "AutoHostList"), m.i.error(n, i, {
                                            target: e
                                        }), this.setState({
                                            formErrorMsg: i
                                        }), [2];
                                    case 4:
                                        return function(e) {
                                            r("added", e)
                                        }({
                                            targetChannel: e.login
                                        }), this.setState(function(t) {
                                            var n = t.userResults.findIndex(function(t) {
                                                    return e.id === t.id
                                                }),
                                                r = t.userResults;
                                            t.userResults && n >= 0 && (r = T(t.userResults, function(e) {
                                                return e[n]
                                            }, function(e) {
                                                return e.added = !0, e
                                            }));
                                            var i = t.recommendedChannels ? t.recommendedChannels.findIndex(function(t) {
                                                    return e.id === t.id
                                                }) : -1,
                                                a = t.recommendedChannels;
                                            return t.recommendedChannels && i >= 0 && (a = T(t.recommendedChannels, function(e) {
                                                return e[i]
                                            }, function(e) {
                                                return e.added = !0, e
                                            })), {
                                                userResults: r,
                                                recommendedChannels: a,
                                                autohostChannels: t.autohostChannels.concat([e]),
                                                formErrorMsg: ""
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, t.onFocusInput = function() {
                        t.state.userTerm ? t.state.isUserSearchOpen || t.setState({
                            isUserSearchOpen: !0
                        }) : t.setRecommendedChannels()
                    }, t.setRecommendedChannels = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r = this;
                            return f.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.state.recommendedChannels) return this.setState(function(e) {
                                            return {
                                                userResults: e.recommendedChannels,
                                                isUserSearchOpen: !0
                                            }
                                        }), [2];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, j.a.get(J)];
                                    case 2:
                                        return e = i.sent(), [3, 4];
                                    case 3:
                                        return t = i.sent(), m.i.error(t, "Unable to retrieve recomended channels"), [2];
                                    case 4:
                                        return e.body && (n = e.body.recommended_streams.map(function(e) {
                                            var t = String(e.channel._id);
                                            return {
                                                id: t,
                                                name: e.channel.display_name,
                                                login: e.channel.name,
                                                avatar: e.channel.logo,
                                                added: !!r.state.autohostChannels.find(function(e) {
                                                    return e.id === t
                                                })
                                            }
                                        }), this.setState({
                                            recommendedChannels: n,
                                            userResults: n,
                                            isUserSearchOpen: !0
                                        })), [2]
                                }
                            })
                        })
                    }, t.onSearchClose = function() {
                        t.setState({
                            isUserSearchOpen: !1
                        })
                    }, t.fetchChannelsList = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r;
                            return f.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, j.a.get(Z)];
                                    case 1:
                                        return e = i.sent(), [3, 3];
                                    case 2:
                                        return t = i.sent(), n = Object(m.d)("Unable to fetch auto host list", "AutoHostList"), m.i.error(t, n), this.setState({
                                            formErrorMsg: n
                                        }), [2];
                                    case 3:
                                        return e.body && (r = e.body.targets.map(function(e) {
                                            return {
                                                id: String(e._id),
                                                name: e.display_name,
                                                login: e.name,
                                                avatar: e.logo
                                            }
                                        }), this.setState({
                                            autohostChannels: r
                                        })), [2]
                                }
                            })
                        })
                    }, t.removeChannel = function(e) {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, a, o;
                            return f.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (!this.state.autohostChannels) return [2];
                                        if (t = [], 1 !== this.state.autohostChannels.length) return [3, 5];
                                        s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), [4, j.a.delete(Z)];
                                    case 2:
                                        return s.sent(), [3, 4];
                                    case 3:
                                        return n = s.sent(), this.reportChannelError(e, n), [2];
                                    case 4:
                                        return [3, 9];
                                    case 5:
                                        if (t = this.state.autohostChannels.slice(), (i = t.findIndex(function(t) {
                                                return e.id === t.id
                                            })) < 0) return this.reportChannelError(e, new Error("User not found in auto host list")), [2];
                                        t.splice(i, 1), a = t.map(function(e) {
                                            return e.id
                                        }), s.label = 6;
                                    case 6:
                                        return s.trys.push([6, 8, , 9]), [4, j.a.put(Z, {
                                            body: {
                                                targets: a.join(",")
                                            }
                                        })];
                                    case 7:
                                        return s.sent(), [3, 9];
                                    case 8:
                                        return o = s.sent(), this.reportChannelError(e, o), [2];
                                    case 9:
                                        return function(e) {
                                            r("removed", e)
                                        }({
                                            targetChannel: e.login
                                        }), this.setState(function(n) {
                                            var r = n.userResults.findIndex(function(t) {
                                                    return e.id === t.id
                                                }),
                                                i = n.userResults;
                                            n.userResults && r >= 0 && (i = T(n.userResults, function(e) {
                                                return e[r]
                                            }, function(e) {
                                                return e.added = !1, e
                                            }));
                                            var a = n.recommendedChannels ? n.recommendedChannels.findIndex(function(t) {
                                                    return e.id === t.id
                                                }) : -1,
                                                o = n.recommendedChannels;
                                            return n.recommendedChannels && a >= 0 && (o = T(n.recommendedChannels, function(e) {
                                                return e[a]
                                            }, function(e) {
                                                return e.added = !1, e
                                            })), {
                                                userResults: i,
                                                recommendedChannels: o,
                                                autohostChannels: t,
                                                formErrorMsg: ""
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, t.onChannelOrderChange = function(e) {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, i;
                            return f.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (e.newIndex === e.oldIndex) return this.setState({
                                            isSorting: !1
                                        }), [2];
                                        t = Object(P.arrayMove)(this.state.autohostChannels, e.oldIndex, e.newIndex), this.setState({
                                            autohostChannels: t,
                                            isSorting: !1
                                        }), n = t.map(function(e) {
                                            return e.id
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, j.a.put(Z, {
                                            body: {
                                                targets: n.join(",")
                                            }
                                        })];
                                    case 2:
                                        return a.sent(), [3, 4];
                                    case 3:
                                        return r = a.sent(), i = Object(m.d)("Unable to re order auto host list", "AutoHostList"), m.i.error(r, i), this.setState({
                                            formErrorMsg: i
                                        }), [2];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onChannelOrderChangeStart = function() {
                        t.setState({
                            isSorting: !0
                        })
                    }, t.searchClient = new D.a(m.a.algoliaApplicationID, m.a.algoliaAPIKey), t
                }
                return f.__extends(t, e), t.prototype.componentWillMount = function() {
                    return f.__awaiter(this, void 0, void 0, function() {
                        return f.__generator(this, function(e) {
                            return this.fetchChannelsList(), [2]
                        })
                    })
                }, t.prototype.render = function() {
                    return h.createElement(Y, {
                        onUserInputChange: this.onUserInputChange,
                        isUserSearchOpen: this.state.isUserSearchOpen,
                        userResults: this.state.userResults,
                        onHostAdded: this.addChannel,
                        onFocusInput: this.onFocusInput,
                        autohostChannels: this.state.autohostChannels,
                        onHostRemoved: this.removeChannel,
                        isSearchErrored: this.state.isSearchErrored,
                        isWaiting: this.state.isWaiting,
                        onSearchClose: this.onSearchClose,
                        formErrorMsg: this.state.formErrorMsg,
                        loadMore: this.loadMore,
                        onSortEnd: this.onChannelOrderChange,
                        onSortStart: this.onChannelOrderChangeStart,
                        isSorting: this.state.isSorting
                    })
                }, t.prototype.doUserSearch = function(e) {
                    return f.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, i, a = this;
                        return f.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    this.inputTimer = 0, t = Object(I.a)(), this.setState({
                                        queryID: t
                                    }), n = null, o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(U.a.Users, e, t)];
                                case 2:
                                    return n = o.sent(), [3, 4];
                                case 3:
                                    return r = o.sent(), m.i.error(r, "Algolia auto-host user search failed"), this.setState({
                                        isSearchErrored: !0,
                                        isWaiting: !1,
                                        isUserSearchOpen: !0
                                    }), [2];
                                case 4:
                                    return n && n.users ? (i = n.users.hits.filter(function(e) {
                                        return !a.props.user || e.objectID !== a.props.user.id
                                    }).map(function(e) {
                                        return {
                                            id: e.objectID,
                                            avatar: e.profile_image,
                                            name: e.name,
                                            login: e.login,
                                            added: !!a.state.autohostChannels.find(function(t) {
                                                return t.id === e.objectID
                                            })
                                        }
                                    }), this.setState({
                                        userResults: i,
                                        isUserSearchOpen: !0,
                                        isWaiting: !1,
                                        exhaustedHits: n.exhaustedHits,
                                        queryID: ""
                                    }), [2]) : [2]
                            }
                        })
                    })
                }, t.prototype.reportChannelError = function(e, t) {
                    var n = Object(m.d)("Unable to remove channel from auto host list", "AutoHostList");
                    m.i.error(t, n, {
                        target: e
                    }), this.setState({
                        formErrorMsg: n
                    })
                }, t
            }(h.Component),
            $ = Object(l.b)(function(e) {
                return {
                    user: Object(p.c)(e)
                }
            })(X),
            ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderBody = function() {
                        return t.props.showPlaceholder ? h.createElement(O._8, null) : h.createElement(O._2, null, h.createElement(O._42, {
                            checked: t.props.checked,
                            error: t.props.error,
                            disabled: t.props.disabled,
                            onChange: t.onChange,
                            id: t.props.id
                        }), h.createElement(q, {
                            text: t.props.description
                        }))
                    }, t.onChange = function(e) {
                        t.props.onChange && t.props.onChange(e.currentTarget.checked)
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return h.createElement(Q, {
                        id: this.props.id,
                        label: this.props.label,
                        error: this.props.error,
                        errorMessage: this.props.errorMessage,
                        orientation: O.T.Horizontal
                    }, this.renderBody())
                }, t
            }(h.Component),
            te = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    var e = Object(m.d)("Auto Hosting", "AutoHostToggle"),
                        t = Object(m.d)("Toggle all forms of auto hosting: teammates, host list, and similar channels. <x:link>Learn more</x:link>", {
                            "x:link": function(e) {
                                return h.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://blog.twitch.tv/grow-your-community-with-auto-hosting-e80c1460f6e1"
                                }, h.createElement(O._35, {
                                    type: O._40.Span,
                                    bold: !0
                                }, e))
                            }
                        }, "AutoHostToggle");
                    return h.createElement(ee, {
                        id: "auto-host-toggle",
                        label: e,
                        description: t,
                        checked: this.props.enabled,
                        error: this.props.error,
                        disabled: this.props.updating,
                        onChange: this.props.onChange,
                        showPlaceholder: void 0 === this.props.enabled
                    })
                }, t
            }(h.Component);
        ! function(e) {
            e.Random = "random", e.Ordered = "ordered"
        }(C || (C = {}));
        var ne, re = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderBody = function() {
                        return void 0 === t.props.hostPriority ? h.createElement(O._8, null) : h.createElement(O._21, {
                            value: t.props.hostPriority,
                            onChange: t.onHostPriorityChange,
                            error: t.props.error,
                            disabled: t.props.updating
                        }, h.createElement("option", {
                            value: C.Random
                        }, Object(m.d)("Host channels randomly.", "SettingsHostPriority")), h.createElement("option", {
                            value: C.Ordered
                        }, Object(m.d)("Host channels by the order they appear in the list.", "SettingsHostPriority")))
                    }, t.onHostPriorityChange = function(e) {
                        switch (e.currentTarget.value) {
                            case C.Random:
                                t.props.onChange(C.Random);
                                break;
                            case C.Ordered:
                                t.props.onChange(C.Ordered)
                        }
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return h.createElement(Q, {
                        label: "Host Priority",
                        error: this.props.error
                    }, this.renderBody())
                }, t
            }(h.Component),
            ie = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    var e = Object(m.d)("Auto Host Channels Similar to Yours", "SimilarHostToggle"),
                        t = Object(m.d)("Streamers on your primary team and host list will be hosted first.", "SimilarHostToggle ");
                    return h.createElement(ee, {
                        id: "similar-host-toggle",
                        label: e,
                        description: t,
                        checked: this.props.enabled,
                        error: this.props.error,
                        disabled: this.props.updating,
                        onChange: this.props.onChange,
                        showPlaceholder: void 0 === this.props.enabled
                    })
                }, t
            }(h.Component),
            ae = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    var e = Object(m.d)("Team Hosting", "TeamHostToggle"),
                        t = Object(m.d)("Automatically host random channels from your team when you're not live. Team channels will be hosted before any channels in your host list.", "TeamHostToggle ");
                    return h.createElement(ee, {
                        id: "team-host-toggle",
                        label: e,
                        description: t,
                        checked: this.props.enabled,
                        error: this.props.error,
                        disabled: this.props.updating,
                        onChange: this.props.onChange,
                        showPlaceholder: void 0 === this.props.enabled
                    })
                }, t
            }(h.Component),
            oe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    var e = Object(m.d)("Vodcast Hosting", "VodcastToggle"),
                        t = Object(m.d)("Includes Vodcasts in auto host. <x:link>Learn about Vodcasts.</x:link>", {
                            "x:link": function(e) {
                                return h.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://blog.twitch.tv/vodcast-brings-the-twitch-community-experience-to-uploads-54098498715"
                                }, h.createElement(O._35, {
                                    type: O._40.Span,
                                    bold: !0
                                }, e))
                            }
                        }, "VodcastToggle");
                    return h.createElement(ee, {
                        id: "vodcast-host-toggle",
                        label: e,
                        description: t,
                        checked: this.props.enabled,
                        error: this.props.error,
                        disabled: this.props.updating,
                        onChange: this.props.onChange,
                        showPlaceholder: void 0 === this.props.enabled
                    })
                }, t
            }(h.Component),
            se = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return h.createElement(O._2, null, h.createElement(i, {
                        title: Object(m.d)("Auto Hosting", "AutoHostSettingsComponent"),
                        description: Object(m.d)("Host your friends and favorite channels while you're offline", "AutoHostSettingsComponent")
                    }), h.createElement(te, {
                        enabled: this.props.autoHostingEnabled,
                        error: this.props.autoHostingError,
                        updating: this.props.autoHostingUpdating,
                        onChange: this.props.onAutoHostingEnabledChange
                    }), h.createElement(ae, {
                        enabled: this.props.teamHostingEnabled,
                        error: this.props.teamHostingError,
                        updating: this.props.teamHostingUpdating,
                        onChange: this.props.onTeamHostingEnabledChange
                    }), h.createElement(oe, {
                        enabled: this.props.vodcastHostingEnabled,
                        error: this.props.vodcastHostingError,
                        updating: this.props.vodcastHostingUpdating,
                        onChange: this.props.onVodcastHostingEnabledChange
                    }), h.createElement($, null), h.createElement(re, {
                        hostPriority: this.props.hostPriority,
                        error: this.props.hostPriorityError,
                        updating: this.props.hostPriorityUpdating,
                        onChange: this.props.onHostPriorityChange
                    }), h.createElement(ie, {
                        enabled: this.props.similarHostingEnabled,
                        error: this.props.similarHostingError,
                        updating: this.props.similarHostingUpdating,
                        onChange: this.props.onSimilarHostingEnabledChange
                    }))
                }, t
            }(h.Component),
            le = "/kraken/autohost/settings",
            ce = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        autoHostingError: !1,
                        autoHostingUpdating: !1,
                        teamHostingError: !1,
                        teamHostingUpdating: !1,
                        vodcastHostingError: !1,
                        vodcastHostingUpdating: !1,
                        hostPriorityError: !1,
                        hostPriorityUpdating: !1,
                        similarHostingError: !1,
                        similarHostingUpdating: !1
                    }, t.deserialize = function(e) {
                        return e.body ? {
                            autoHostingEnabled: e.body.settings.enabled,
                            autoHostingError: !1,
                            autoHostingUpdating: !1,
                            teamHostingEnabled: e.body.settings.team_host,
                            teamHostingError: !1,
                            teamHostingUpdating: !1,
                            vodcastHostingEnabled: !e.body.settings.deprioritize_vodcast,
                            vodcastHostingError: !1,
                            vodcastHostingUpdating: !1,
                            hostPriority: e.body.settings.strategy,
                            hostPriorityError: !1,
                            hostPriorityUpdating: !1,
                            similarHostingEnabled: e.body.settings.recommended_host,
                            similarHostingError: !1,
                            similarHostingUpdating: !1
                        } : t.state
                    }, t.updateAutoHostSetting = function(e) {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return f.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, j.a.put(le, {
                                            body: e
                                        })];
                                    case 1:
                                        return t = n.sent(), this.setState(this.deserialize(t)), [2]
                                }
                            })
                        })
                    }, t.setAutoHostEnabled = function(e) {
                        return f.__awaiter(t, void 0, void 0, function() {
                            return f.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), this.setState({
                                            autoHostingUpdating: !0
                                        }), [4, this.updateAutoHostSetting({
                                            enabled: e
                                        })];
                                    case 1:
                                        return t.sent(),
                                            function(e) {
                                                a(w.SpadeEventType.AutoHostToggle, e)
                                            }({
                                                newValue: e
                                            }), [3, 3];
                                    case 2:
                                        return t.sent(), this.setState({
                                            autoHostingUpdating: !1,
                                            autoHostingError: !0
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.setTeamHostEnabled = function(e) {
                        return f.__awaiter(t, void 0, void 0, function() {
                            return f.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), this.setState({
                                            teamHostingUpdating: !0
                                        }), [4, this.updateAutoHostSetting({
                                            team_host: e
                                        })];
                                    case 1:
                                        return t.sent(),
                                            function(e) {
                                                a(w.SpadeEventType.TeamHostToggle, e)
                                            }({
                                                newValue: e
                                            }), [3, 3];
                                    case 2:
                                        return t.sent(), this.setState({
                                            teamHostingUpdating: !1,
                                            teamHostingError: !0
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.setVodcastHostEnabled = function(e) {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return f.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        t = !e, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), this.setState({
                                            vodcastHostingUpdating: !0
                                        }), [4, this.updateAutoHostSetting({
                                            deprioritize_vodcast: t
                                        })];
                                    case 2:
                                        return n.sent(),
                                            function(e) {
                                                a(w.SpadeEventType.DeprioritizeVodcastToggle, e)
                                            }({
                                                newValue: t
                                            }), [3, 4];
                                    case 3:
                                        return n.sent(), this.setState({
                                            vodcastHostingUpdating: !1,
                                            vodcastHostingError: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.setHostPriority = function(e) {
                        return f.__awaiter(t, void 0, void 0, function() {
                            return f.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), this.setState({
                                            hostPriorityUpdating: !0
                                        }), [4, this.updateAutoHostSetting({
                                            strategy: e
                                        })];
                                    case 1:
                                        return t.sent(), [3, 3];
                                    case 2:
                                        return t.sent(), this.setState({
                                            hostPriorityUpdating: !1,
                                            hostPriorityError: !0
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.setSimilarHostEnabled = function(e) {
                        return f.__awaiter(t, void 0, void 0, function() {
                            return f.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), this.setState({
                                            similarHostingUpdating: !0
                                        }), [4, this.updateAutoHostSetting({
                                            recommended_host: e
                                        })];
                                    case 1:
                                        return t.sent(),
                                            function(e) {
                                                a(w.SpadeEventType.SimilarHostToggle, e)
                                            }({
                                                newValue: e
                                            }), [3, 3];
                                    case 2:
                                        return t.sent(), this.setState({
                                            similarHostingUpdating: !1,
                                            similarHostingError: !0
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    return f.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return f.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, j.a.get(le)];
                                case 1:
                                    return e = t.sent(), this.props.latencyTracking.reportInteractive(), this.setState(this.deserialize(e)), [3, 3];
                                case 2:
                                    return t.sent(), this.setState({
                                        autoHostingEnabled: !1,
                                        autoHostingError: !0,
                                        teamHostingEnabled: !1,
                                        teamHostingError: !0,
                                        vodcastHostingEnabled: !1,
                                        vodcastHostingError: !0,
                                        hostPriority: C.Random,
                                        hostPriorityError: !0,
                                        similarHostingEnabled: !1,
                                        similarHostingError: !0
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return h.createElement(se, {
                        autoHostingEnabled: this.state.autoHostingEnabled,
                        autoHostingError: this.state.autoHostingError,
                        autoHostingUpdating: this.state.autoHostingUpdating,
                        onAutoHostingEnabledChange: this.setAutoHostEnabled,
                        teamHostingEnabled: this.state.teamHostingEnabled,
                        teamHostingError: this.state.teamHostingError,
                        teamHostingUpdating: this.state.teamHostingUpdating,
                        onTeamHostingEnabledChange: this.setTeamHostEnabled,
                        vodcastHostingEnabled: this.state.vodcastHostingEnabled,
                        vodcastHostingError: this.state.vodcastHostingError,
                        vodcastHostingUpdating: this.state.vodcastHostingUpdating,
                        onVodcastHostingEnabledChange: this.setVodcastHostEnabled,
                        hostPriority: this.state.hostPriority,
                        hostPriorityError: this.state.hostPriorityError,
                        hostPriorityUpdating: this.state.hostPriorityUpdating,
                        onHostPriorityChange: this.setHostPriority,
                        similarHostingEnabled: this.state.similarHostingEnabled,
                        similarHostingError: this.state.similarHostingError,
                        similarHostingUpdating: this.state.similarHostingUpdating,
                        onSimilarHostingEnabledChange: this.setSimilarHostEnabled
                    })
                }, t
            }(h.Component),
            ue = Object(b.d)("SettingsAutoHostContainer")(ce),
            de = n("3zLD"),
            pe = n("7vx8"),
            fe = function(e) {
                var t = e.saving || e.errorLoading;
                return h.createElement(ee, {
                    id: "settings-channel-page-block-hyperlinks",
                    label: Object(m.d)("Block Hyperlinks", "BlockHyperlinksToggle"),
                    description: Object(m.d)("Your channel's chat will automatically delete posted URLs except for ones posted by you, moderators, and admins.", "BlockHyperlinksToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            he = n("ar1V"),
            ge = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        checked: !1
                    }, t.onChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data,
                        n = t.currentUser;
                    if (!t.loading && this.props.data.loading) {
                        var r = n && n.chatSettings && n.chatSettings.blockLinks || !1;
                        this.setState({
                            checked: r
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser;
                    return h.createElement(fe, {
                        loading: this.props.data.loading && !e,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        errorLoading: !!this.props.data.error && !e,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange
                    })
                }, t
            }(h.Component),
            me = Object(de.compose)(Object(b.d)("BlockHyperlinksToggle"), Object(pe.a)(he))(ge),
            ve = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        var n = +e.currentTarget.value;
                        t.props.onChange(n)
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.loading || this.props.saving || this.props.errorLoading,
                        n = [{
                            delay: 0,
                            label: Object(m.d)("Off", "ChatDelayRadioButtons"),
                            selected: 0 === this.props.chatDelayMs
                        }, {
                            delay: 2e3,
                            label: Object(m.d)("2 seconds", "ChatDelayRadioButtons"),
                            selected: 2e3 === this.props.chatDelayMs
                        }, {
                            delay: 4e3,
                            label: Object(m.d)("4 seconds", "ChatDelayRadioButtons"),
                            selected: 4e3 === this.props.chatDelayMs
                        }, {
                            delay: 6e3,
                            label: Object(m.d)("6 seconds", "ChatDelayRadioButtons"),
                            selected: 6e3 === this.props.chatDelayMs
                        }];
                    return h.createElement(Q, {
                        orientation: O.T.Horizontal,
                        label: Object(m.d)("Non-Mod Chat Delay", "ChatDelayRadioButtons"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, h.createElement(O._2, {
                        display: O.N.Flex,
                        flexDirection: O.P.Row
                    }, n.map(function(n) {
                        var r = "chat-delay:" + n.label;
                        return h.createElement(O._2, {
                            key: r,
                            margin: {
                                right: 2
                            },
                            display: O.N.Flex,
                            flexDirection: O.P.Row
                        }, h.createElement(O._14, {
                            checked: n.selected,
                            value: n.delay.toString(),
                            label: n.label,
                            name: "Non-Mod Chat Delay: " + n.delay / 1e3 + "s",
                            onChange: e.onChange,
                            disabled: t,
                            "data-test-selector": "chat-delay-radio:" + n.delay
                        }))
                    })), h.createElement(q, {
                        text: Object(m.d)("Adds a short delay before non-mods see messages. Any message that is timed out or banned during the delay is removed from chat completely.", "ChatDelayRadioButtons")
                    }))
                }, t
            }(h.Component),
            be = n("D2cp"),
            ye = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        chatDelayMs: 0
                    }, t.onChange = function(e) {
                        t.setState({
                            chatDelayMs: e,
                            saving: !0
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (!e.data.loading && this.props.data.loading) {
                        var t = this.getChatDelayFromProps(e);
                        this.setState({
                            chatDelayMs: t
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser;
                    return h.createElement(ve, {
                        chatDelayMs: this.state.chatDelayMs,
                        saving: this.state.saving,
                        loading: this.props.data.loading && !e,
                        errorLoading: !!this.props.data.error && !e,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange
                    })
                }, t.prototype.getChatDelayFromProps = function(e) {
                    var t = e.data.currentUser;
                    return t && t.chatSettings && t.chatSettings.chatDelayMs || 0
                }, t
            }(h.Component),
            Se = Object(de.compose)(Object(b.d)("ChatDelayRadioButtons"), Object(pe.a)(be))(ye),
            _e = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = this.props.loading || this.props.saving || this.props.errorLoading;
                    return (this.props.dirty || this.props.saving) && (e = h.createElement(O._2, {
                        margin: {
                            top: 1
                        }
                    }, h.createElement(O.u, {
                        onClick: this.props.onClickSave,
                        state: this.props.saving ? O.y.Loading : O.y.Default
                    }, Object(m.d)("Save Changes", "ChatRulesTextArea")))), h.createElement(Q, {
                        orientation: O.T.Horizontal,
                        label: Object(m.d)("Chat Rules", "ChatRulesTextArea"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, h.createElement(O._37, {
                        disabled: t,
                        value: this.props.rules,
                        onChange: this.props.onChange,
                        rows: 5
                    }), h.createElement(q, {
                        text: Object(m.d)("Require first-time viewers to agree to your rules before chatting. One rule per line.", "ChatRulesTextArea")
                    }), e)
                }, t
            }(h.Component),
            Ee = n("WaOj"),
            ke = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        rules: ""
                    }, t.onChange = function(e) {
                        t.setState({
                            rules: e.currentTarget.value
                        })
                    }, t.onClickSave = function() {
                        t.setState({
                            saving: !0
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (!e.data.loading && this.props.data.loading) {
                        var t = this.getRulesFromProps(e);
                        this.setState({
                            rules: t
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = this.getRulesFromProps(this.props);
                    return h.createElement(_e, {
                        rules: this.state.rules,
                        dirty: t !== this.state.rules,
                        saving: this.state.saving,
                        loading: this.props.data.loading && !e,
                        errorLoading: !!this.props.data.error && !e,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange,
                        onClickSave: this.onClickSave
                    })
                }, t.prototype.getRulesFromProps = function(e) {
                    var t = e.data.currentUser;
                    return t && t.chatSettings && t.chatSettings.rules.join("\n") || ""
                }, t
            }(h.Component),
            we = Object(de.compose)(Object(b.d)("ChatRulesTextArea"), Object(pe.a)(Ee))(ke),
            xe = function(e) {
                var t = e.saving || e.errorLoading;
                return h.createElement(ee, {
                    id: "settings-channel-page-email-verification",
                    label: Object(m.d)("Email Verification", "EmailVerificationToggle"),
                    description: Object(m.d)("Anyone that would like to send messages to your chat room must first verify their email address.", "EmailVerificationToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            Oe = n("woYr"),
            Ce = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        checked: !1
                    }, t.onChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data,
                        n = t.currentUser;
                    if (!t.loading && this.props.data.loading) {
                        var r = n && n.chatSettings && n.chatSettings.requireVerifiedAccount || !1;
                        this.setState({
                            checked: r
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser;
                    return h.createElement(xe, {
                        loading: this.props.data.loading && !e,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        onChange: this.onChange,
                        errorLoading: !!this.props.data.error && !e,
                        errorSaving: this.state.errorSaving
                    })
                }, t
            }(h.Component),
            Ne = Object(de.compose)(Object(b.d)("EmailVerificationToggle"), Object(pe.a)(Oe))(Ce),
            je = function(e) {
                var t = e.errorSaving || e.errorLoading;
                return h.createElement(ee, {
                    id: "settings-channel-page-mature-content",
                    label: Object(m.d)("Mature Content", "MatureContentToggle"),
                    description: Object(m.d)("Enable this setting if your stream contains content that may be inappropriate for younger audiences. You may never broadcast sexual activity, nudity, threats or extreme violence. Doing so will result in immediate, irrevocable termination of your account. Please make sure your content will comply with the <x:link>Terms of Service</x:link> before broadcasting", {
                        "x:link": function(e) {
                            return h.createElement("a", {
                                href: "https://www.twitch.tv/p/terms-of-service/"
                            }, e)
                        }
                    }, "MatureContentToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            Te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        checked: !1,
                        saving: !1,
                        loading: !1,
                        errorSaving: !1,
                        errorLoading: !1
                    }, t.onCheckBoxChange = function(e) {
                        t.setState({
                            checked: e
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return h.createElement(je, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.state.loading,
                        errorLoading: this.state.errorLoading,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onCheckBoxChange
                    })
                }, t
            }(h.Component),
            Pe = n("V5M+"),
            Ie = n("ebTC"),
            Ue = n("4Q9N"),
            De = n("J4ib"),
            Ae = n("vm+z"),
            Re = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.showModal = function() {
                        t.props.user && t.props.showUploaderModal(t.props.user)
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = null;
                    if (this.props.data && this.props.data.user && this.props.data.user.offlineImageURL) {
                        e = h.createElement("img", {
                            "data-test-selector": "test-channel-offline-image-selector",
                            height: "90",
                            width: "160",
                            src: this.props.data.user.offlineImageURL
                        });
                        var n = Object(De.d)("Remove my Video Player Banner Image", "UploadVideoPlayerBanner");
                        t = h.createElement(O.v, {
                            icon: O._16.Trash,
                            ariaLabel: n
                        })
                    }
                    return h.createElement(O._2, null, h.createElement(i, {
                        title: Object(De.d)("Video Player Banner", "UploadVideoPlayerBanner"),
                        description: Object(De.d)("This is displayed on the player when your channel is offline.", "UploadVideoPlayerBanner")
                    }), h.createElement(O._2, {
                        display: O.N.Flex
                    }, e, h.createElement(O._2, {
                        padding: {
                            left: 1,
                            top: 1
                        }
                    }, h.createElement(O._2, {
                        display: O.N.Flex
                    }, h.createElement(O.u, {
                        "data-test-selector": "test-upload-video-player-banner-selector",
                        onClick: this.showModal
                    }, "Update"), t), h.createElement(q, {
                        text: Object(De.d)("Max 10mb GIF, JPG, or PNG", "UploadVideoPlayerBanner")
                    }))))
                }, t = f.__decorate([Object(pe.a)(Ae, {
                    options: function(e) {
                        return {
                            skip: !e.user,
                            variables: {
                                login: e.user && e.user.login
                            }
                        }
                    }
                })], t)
            }(h.Component),
            Fe = Object(l.b)(function(e) {
                return {
                    user: Object(p.c)(e)
                }
            }, function(e) {
                return Object(c.b)({
                    showUploaderModal: function(e) {
                        return Object(Pe.d)(Ie.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: Ue.a.ChannelOfflineImage,
                            showCloser: !0
                        })
                    }
                }, e)
            })(Re),
            He = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: s.NoChanges
                    }, t.renderContentSettingsSection = function() {
                        return h.createElement(O._2, null, h.createElement(i, {
                            title: Object(m.d)("Content Settings", "SettingsChannelPage"),
                            description: Object(m.d)("Choose how your channel will display for certain users", "SettingsChannelPage")
                        }), h.createElement(Te, null))
                    }, t.renderChatSettingsSection = function() {
                        return h.createElement(O._2, null, h.createElement(i, {
                            title: Object(m.d)("Chat Options", "SettingsChannelPage"),
                            description: Object(m.d)("Moderate your channel's chat and who you allow in it", "SettingsChannelPage")
                        }), h.createElement(me, null), h.createElement(Ne, null), h.createElement(we, null), h.createElement(Se, null))
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: s.Working
                        }, function() {})
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return m.a.buildType === E.a.Production ? null : h.createElement("div", null, h.createElement(Fe, null), h.createElement(ue, null), this.renderContentSettingsSection(), this.renderChatSettingsSection(), h.createElement(N, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = f.__decorate([Object(b.d)("SettingsChannelPage", {
                    autoReportInteractive: !0,
                    destination: k.a.SettingsChannel
                }), Object(_.a)({
                    location: w.PageviewLocation.SettingsPage
                })], t)
            }(h.Component),
            Me = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: s.NoChanges
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: s.Working
                        }, function() {})
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return m.a.buildType === E.a.Production ? null : h.createElement("div", null, h.createElement(N, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = f.__decorate([Object(b.d)("SettingsConnectionsPage", {
                    autoReportInteractive: !0,
                    destination: k.a.SettingsConnections
                }), Object(_.a)({
                    location: w.PageviewLocation.SettingsPage
                })], t)
            }(h.Component),
            Le = n("OAwv"),
            Be = n("LBNC"),
            ze = n("UbVv"),
            Ve = n("oIkB"),
            We = n("F8kA"),
            Ge = (n("hPJb"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.userId, t.props.isEnabled)
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return h.createElement(O._25, {
                        className: "advanced-notification-settings-toggle",
                        display: O.N.Flex,
                        justifyContent: O._1.Between,
                        background: O.m.Base,
                        padding: {
                            x: 5,
                            y: 1
                        },
                        borderBottom: !0
                    }, h.createElement(O._2, {
                        margin: {
                            left: 5
                        },
                        display: O.N.Flex,
                        flexGrow: 1,
                        alignItems: O.c.Center,
                        flexWrap: O.Q.NoWrap
                    }, h.createElement(O._2, {
                        display: O.N.Flex,
                        flexGrow: 1,
                        flexWrap: O.Q.NoWrap
                    }, h.createElement(O._2, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, h.createElement(O._0, {
                        linkTo: "/" + this.props.login
                    }, h.createElement(O.l, {
                        src: this.props.thumbnail,
                        alt: this.props.text,
                        size: 40
                    }))), h.createElement(O._2, {
                        flexGrow: 1,
                        display: O.N.Flex,
                        flexDirection: O.P.Column
                    }, h.createElement(O._35, {
                        fontSize: O.R.Size5
                    }, h.createElement(We.a, {
                        to: "/" + this.props.login
                    }, this.props.text)), h.createElement(O._35, {
                        type: O._40.Span,
                        color: O.I.Alt2
                    }, this.props.description))), h.createElement(O._2, {
                        display: O.N.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, h.createElement(O._2, {
                        margin: {
                            right: 1
                        }
                    }, h.createElement(O._42, {
                        checked: this.props.isEnabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector",
                        id: this.props.userId
                    })), h.createElement(O._2, {
                        className: this.props.saved ? "advanced-notification-settings-toggle__saved" : "advanced-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, h.createElement(O._35, {
                        fontSize: O.R.Size5,
                        color: O.I.Link
                    }, Object(m.d)("Saved", "AdvancedNotificationSettingsToggle"))))))
                }, t
            }(h.Component)),
            qe = n("AQCV"),
            Qe = (n("t4xU"), n("EaRL")),
            Ye = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collapsed: t.props.startCollapsed,
                        saved: new Set
                    }, t.toggleCollapse = function() {
                        t.setState(function(e) {
                            return {
                                collapsed: !e.collapsed
                            }
                        })
                    }, t.toggleChannelNotification = function(e, n) {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var t, r, i;
                            return f.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setAdvancedNotificationSetting ? (t = f.__assign({}, Object(Ve.a)({
                                            disableNotifications: n,
                                            targetID: e
                                        }), {
                                            optimisticResponse: {
                                                followUser: {
                                                    __typename: "FollowUserPayload",
                                                    follow: {
                                                        disableNotifications: n,
                                                        __typename: "Follow"
                                                    }
                                                }
                                            }
                                        }), [4, this.props.setAdvancedNotificationSetting(t)]) : [2];
                                    case 1:
                                        return r = a.sent(), i = function(t) {
                                            if (!t.currentUser) return t;
                                            for (var n = 0, i = t.currentUser.follows.edges; n < i.length; n++) {
                                                var a = i[n];
                                                a.node.id === e && (a.notificationSettings.isEnabled = !r.data.followUser.follow.disableNotifications)
                                            }
                                            return t
                                        }, Object(Ve.d)(Qe, {
                                            limit: 50
                                        }, i), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return h.createElement(O._25, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, h.createElement(O._4, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return h.createElement(v.a, {
                        message: Object(m.d)("Error loading data.", "AdvancedNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return h.createElement(O._25, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, h.createElement(v.a, {
                        message: Object(m.d)("You must be logged in to update your settings", "AdvancedNotificationSettings")
                    }));
                    var e = Object(m.d)("{followCount, plural, one {You follow # channel} other {You follow # channels}}", {
                            followCount: this.props.data.currentUser.follows.totalCount
                        }, "AdvancedNotificationSettings"),
                        t = h.createElement(O._25, {
                            background: O.m.Alt2,
                            borderBottom: !0
                        }, h.createElement(O._0, {
                            onClick: this.toggleCollapse,
                            alpha: !0,
                            "data-test-selector": "header-selector"
                        }, h.createElement(O._2, {
                            display: O.N.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, h.createElement(O._2, {
                            className: "advanced-notification-settings__header",
                            flexGrow: 0
                        }, h.createElement(O._35, {
                            fontSize: O.R.Size5,
                            color: O.I.Alt2,
                            bold: !0
                        }, Object(m.d)("Advanced", "AdvancedNotificationSettings"))), h.createElement(O._2, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, h.createElement(O._35, {
                            "data-test-selector": "description-selector",
                            fontSize: O.R.Size5,
                            color: O.I.Alt2
                        }, e)), h.createElement(O._2, {
                            className: this.state.collapsed ? "advanced-notification-settings--collapse" : "advanced-notification-settings--expand",
                            flexGrow: 0,
                            flexShrink: 1,
                            display: O.N.Flex,
                            justifyContent: O._1.Center
                        }, h.createElement(O._15, {
                            asset: O._16.AngleRight,
                            type: O._17.Alt2
                        }))))),
                        n = !this.props.data.loading && !this.props.data.error && !!this.props.data.currentUser.follows.pageInfo.hasNextPage;
                    return this.props.data.currentUser.follows.totalCount > 0 ? this.state.collapsed ? h.createElement(O._25, null, t) : h.createElement(O._25, null, t, h.createElement(O._25, {
                        borderBottom: !0,
                        padding: 2
                    }, h.createElement(O._2, {
                        padding: {
                            bottom: 1
                        }
                    }, h.createElement(O._35, {
                        fontSize: O.R.Size5,
                        color: O.I.Alt2
                    }, Object(m.d)("Manage which channels you receive notifications for.", "AdvancedNotificationSettings"))), h.createElement(O._2, {
                        padding: {
                            bottom: 1
                        }
                    }, h.createElement(O._35, {
                        fontSize: O.R.Size4,
                        color: O.I.Alt
                    }, e)), h.createElement(O._25, {
                        className: "advanced-notification-settings__toggle-container",
                        borderTop: !0,
                        borderLeft: !0,
                        borderRight: !0,
                        margin: {
                            bottom: .5
                        }
                    }, this.renderToggles(), h.createElement(F.a, {
                        loadMore: this.props.loadMore,
                        enabled: n,
                        pixelThreshold: 200
                    })))) : null
                }, t.prototype.renderToggles = function() {
                    if (this.props.data && !this.props.data.loading && this.props.data.currentUser) {
                        for (var e = [], t = 0, n = this.props.data.currentUser.follows.edges; t < n.length; t++) {
                            var r = n[t];
                            r.node && r.node.id && r.node.followers && e.push(h.createElement(Ge, {
                                userId: r.node.id,
                                text: r.node.displayName,
                                login: r.node.login,
                                description: Object(m.d)("{followerCount,number} followers", {
                                    followerCount: r.node.followers.totalCount
                                }, "AdvancedNotificationSettings"),
                                thumbnail: r.node.profileImageURL,
                                isEnabled: r.notificationSettings.isEnabled,
                                onChange: this.toggleChannelNotification,
                                saved: this.getDisplaySaved(r.node.id),
                                key: r.node.id
                            }))
                        }
                        return e
                    }
                }, t.prototype.markSaved = function(e) {
                    this.setState(function(t) {
                        return t.saved.add(e), {
                            saved: t.saved
                        }
                    }), setTimeout(this.clearSaved(e), 2e3)
                }, t.prototype.getDisplaySaved = function(e) {
                    return this.state.saved.has(e)
                }, t.prototype.clearSaved = function(e) {
                    var t = this;
                    return function() {
                        t.setState(function(t) {
                            return t.saved.delete(e), {
                                saved: t.saved
                            }
                        })
                    }
                }, t
            }(h.Component),
            Ke = Object(c.d)(Object(pe.a)(Qe, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 50
                        }
                    }
                },
                props: function(e) {
                    return f.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: Qe,
                                variables: f.__assign({}, e.data.variables, {
                                    cursor: e.data.currentUser && e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return e.currentUser && n.currentUser ? {
                                        currentUser: f.__assign({}, n.currentUser, {
                                            follows: f.__assign({}, n.currentUser.follows, {
                                                edges: Object(Ve.b)(e.currentUser.follows.edges, n.currentUser.follows.edges)
                                            })
                                        })
                                    } : n
                                }
                            })
                        }
                    })
                }
            }), Object(pe.a)(qe, {
                name: "setAdvancedNotificationSetting"
            }), Object(b.d)("AdvancedNotificationSettings"))(Ye),
            Je = n("OOv5"),
            Ze = n("JBcW"),
            Xe = (n("mVHD"), m.n.logger.withCategory("browser-push-notifications-settings")),
            $e = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hide: !1,
                        loading: !0,
                        deciding: !0,
                        hasSubscription: !1
                    }, t.toggle = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return f.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.setState({
                                            deciding: !0
                                        }), [4, Je.a.hasPushSubscription()];
                                    case 1:
                                        if (!n.sent()) return [3, 6];
                                        n.label = 2;
                                    case 2:
                                        return n.trys.push([2, 4, , 5]), [4, Je.a.userUnsubscribe(Ze.a.Settings)];
                                    case 3:
                                        return n.sent(), [3, 5];
                                    case 4:
                                        return e = n.sent(), Xe.error(e, "user unsubscribe failed"), [3, 5];
                                    case 5:
                                        return [3, 9];
                                    case 6:
                                        return n.trys.push([6, 8, , 9]), [4, Je.a.userSubscribe(Ze.a.Settings)];
                                    case 7:
                                        return n.sent(), [3, 9];
                                    case 8:
                                        return t = n.sent(), Object(ze.a)() ? (this.setState({
                                            hide: !0
                                        }), [2]) : (Xe.error(t, "user subscribe failed"), [3, 9]);
                                    case 9:
                                        return [4, this.updateSubscriptionState()];
                                    case 10:
                                        return n.sent(), this.setState({
                                            deciding: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    return f.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return f.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 3, , 4]), [4, Je.a.initialize()];
                                case 1:
                                    return t.sent(), [4, this.updateSubscriptionState()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    return e = t.sent(), Xe.error(e, "unexpected error initializing push manager"), this.setState({
                                        hide: !0
                                    }), [2];
                                case 4:
                                    return this.setState({
                                        loading: !1,
                                        deciding: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.componentDidUpdate = function(e, t) {
                    t.loading && !this.state.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.state.hide || this.state.loading) return null;
                    var e = this.state.hasSubscription ? Object(m.d)("Turn Off", "BrowserPushNotificationsSettings") : Object(m.d)("Turn On", "BrowserPushNotificationsSettings");
                    return h.createElement(O._25, {
                        borderTop: !0,
                        padding: {
                            right: 2,
                            y: 1
                        },
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "qa-browser-push-notifications-settings",
                        "data-a-target": "browser-push-notifications-settings"
                    }, h.createElement(O._25, {
                        className: "browser-push-notification-settings",
                        padding: {
                            left: 5,
                            right: 4
                        },
                        display: O.N.Flex,
                        margin: {
                            x: 5
                        }
                    }, h.createElement(O._2, {
                        className: "browser-push-notification-settings__body",
                        display: O.N.Flex,
                        flexWrap: O.Q.NoWrap,
                        flexGrow: 1
                    }, h.createElement(O._2, {
                        margin: {
                            right: 1
                        },
                        flexGrow: 1
                    }, h.createElement(O._35, {
                        fontSize: O.R.Size4,
                        color: O.I.Alt
                    }, Object(m.d)("Receive Browser Notifications for this Device", "BrowserPushNotificationsSettings")), h.createElement(O._2, {
                        padding: {
                            top: .5
                        }
                    }, h.createElement(O._35, {
                        fontSize: O.R.Size5,
                        color: O.I.Alt2
                    }, Object(m.d)("See notifications at the corner of your screen, even when you’re not on Twitch", "BrowserPushNotificationsSettings")))), h.createElement(O._2, {
                        flexShrink: 0
                    }, h.createElement(O.u, {
                        "data-test-selector": "qa-browser-push-notifications-settings-toggle",
                        disabled: this.state.deciding,
                        onClick: this.toggle
                    }, e)))))
                }, t.prototype.updateSubscriptionState = function() {
                    return f.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return f.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, Je.a.hasPushSubscription()];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        hasSubscription: e
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(h.Component),
            et = Object(de.compose)(Object(b.d)("BrowserPushNotificationsSettings"))($e),
            tt = (n("iOZM"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.category, t.props.isEnabled)
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return h.createElement(O._25, {
                        className: "platform-notification-settings-toggle",
                        display: O.N.Flex,
                        flexWrap: O.Q.NoWrap,
                        alignItems: O.c.Start,
                        background: O.m.Alt,
                        margin: {
                            top: 1,
                            bottom: .5
                        },
                        padding: {
                            right: 5
                        }
                    }, h.createElement(O._2, {
                        className: "platform-notification-settings-toggle__body",
                        display: O.N.Flex,
                        flexDirection: O.P.Column,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, h.createElement(O._2, {
                        margin: {
                            bottom: .5
                        }
                    }, h.createElement(O._35, {
                        fontSize: O.R.Size4
                    }, this.props.text)), h.createElement(O._35, {
                        fontSize: O.R.Size5,
                        color: O.I.Alt2
                    }, this.props.description)), h.createElement(O._2, {
                        display: O.N.Flex,
                        margin: {
                            top: .5
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, h.createElement(O._2, {
                        margin: {
                            right: 1
                        }
                    }, h.createElement(O._42, {
                        checked: this.props.isEnabled,
                        disabled: this.props.disabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector"
                    })), h.createElement(O._2, {
                        className: this.props.saved ? "platform-notification-settings-toggle__saved" : "platform-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, h.createElement(O._35, {
                        fontSize: O.R.Size5,
                        color: O.I.Link
                    }, Object(m.d)("Saved", "PlatformNotificationSettingsToggle")))))
                }, t
            }(h.Component)),
            nt = n("g+dK"),
            rt = (n("RC0U"), n("1f5k"));
        ! function(e) {
            e.onsite = "onsite", e.email = "email", e.push = "push"
        }(ne || (ne = {}));
        var it, at = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collapsed: t.props.startCollapsed,
                        saved: new Set
                    }, t.VisibleSettings = [{
                        category: "LIVE",
                        name: Object(m.d)("Live", "PlatformNotificationSettings"),
                        description: Object(m.d)("When a streamer I follow goes Live", "PlatformNotificationSettings")
                    }, {
                        category: "VIDEOS",
                        name: Object(m.d)("Video Broadcast", "PlatformNotificationSettings"),
                        description: Object(m.d)("When a channel I follow starts a Vodcast. This also includes Video Comment notifications", "PlatformNotificationSettings")
                    }, {
                        category: "CLIPS",
                        name: Object(m.d)("Clips", "PlatformNotificationSettings"),
                        description: Object(m.d)("Receive notifications for clips you made and clips made by your viewers", "PlatformNotificationSettings")
                    }, {
                        category: "EVENTS",
                        name: Object(m.d)("Events", "PlatformNotificationSettings"),
                        description: Object(m.d)("Any time an event I follow starts", "PlatformNotificationSettings")
                    }, {
                        category: "CHAT",
                        name: Object(m.d)("Chat", "PlatformNotificationSettings"),
                        description: Object(m.d)("Any time there’s Rooms activity related to me.", "PlatformNotificationSettings")
                    }, {
                        category: "FRIENDS",
                        name: Object(m.d)("Friends", "PlatformNotificationSettings"),
                        description: Object(m.d)("When a friend sends me a message", "PlatformNotificationSettings")
                    }, {
                        category: "STREAMER",
                        name: Object(m.d)("Your Channel", "PlatformNotificationSettings"),
                        description: Object(m.d)("Receive notifications when viewers follow your channel or auto host you", "PlatformNotificationSettings")
                    }, {
                        category: "MODERATOR",
                        name: Object(m.d)("Moderator", "PlatformNotificationSettings"),
                        description: Object(m.d)("Any time I get a notification as a moderator", "PlatformNotificationSettings")
                    }, {
                        category: "COMMERCE",
                        name: Object(m.d)("Gifts and Rewards", "PlatformNotificationSettings"),
                        description: Object(m.d)("Receive notifications for drops, crates, and subscription gifts", "PlatformNotificationSettings")
                    }], t.toggleAll = function() {
                        t.toggleSettingCategory("ALL", t.getGlobalStateForPlatform())
                    }, t.toggleCollapse = function() {
                        t.setState(function(e) {
                            return {
                                collapsed: !e.collapsed
                            }
                        })
                    }, t.toggleSettingCategory = function(e, n) {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var t, r, i, a, o = this;
                            return f.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setNotificationSetting ? (t = n ? "off" : "on", r = f.__assign({}, Object(Ve.a)({
                                            category: e,
                                            platform: this.props.platformName,
                                            settingState: t
                                        }), {
                                            optimisticResponse: {
                                                setNotificationSetting: {
                                                    settingState: t,
                                                    __typename: "SetNotificationSettingPayload"
                                                }
                                            }
                                        }), [4, this.props.setNotificationSetting(r)]) : [2];
                                    case 1:
                                        return i = s.sent(), a = function(t) {
                                            return t.currentUser ? (t.currentUser.notificationSettings = t.currentUser.notificationSettings.map(function(t) {
                                                return t.category === e && (t.platforms = t.platforms.map(function(e) {
                                                    return e.platformName === o.props.platformName && (e.isEnabled = "on" === i.data.setNotificationSetting.settingState, e.settingState = i.data.setNotificationSetting.settingState), e
                                                })), t
                                            }), t) : t
                                        }, Object(Ve.d)(rt, {}, a), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return h.createElement(O._2, {
                        padding: 1
                    }, h.createElement(O._4, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return h.createElement(v.a, {
                        message: Object(m.d)("Error loading data.", "PlatformNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return h.createElement(O._25, {
                        margin: {
                            top: 1
                        }
                    }, h.createElement(v.a, {
                        message: Object(m.d)("You must be logged in to update your settings.", "PlatformNotificationSettings")
                    }));
                    var e = h.createElement(O._25, {
                        background: O.m.Alt2,
                        borderBottom: !0
                    }, h.createElement(O._0, {
                        onClick: this.toggleCollapse,
                        alpha: !0
                    }, h.createElement(O._2, {
                        display: O.N.Flex,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, h.createElement(O._2, {
                        className: "platform-notification-settings__header",
                        flexGrow: 0,
                        "data-test-selector": "collapsible-header"
                    }, h.createElement(O._35, {
                        "data-test-selector": "display-name",
                        fontSize: O.R.Size5,
                        color: O.I.Alt2,
                        bold: !0
                    }, this.props.displayName)), h.createElement(O._2, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, h.createElement(O._35, {
                        fontSize: O.R.Size5,
                        color: O.I.Alt2
                    }, this.getSettingTurnedOnMessage())), h.createElement(O._2, {
                        className: this.state.collapsed ? "platform-notification-settings--collapse" : "platform-notification-settings--expand",
                        flexGrow: 0,
                        flexShrink: 1,
                        display: O.N.Flex,
                        justifyContent: O._1.Center
                    }, h.createElement(O._15, {
                        asset: O._16.AngleRight,
                        type: O._17.Alt2
                    })))));
                    return this.state.collapsed ? h.createElement(O._25, null, e) : h.createElement(O._25, null, e, h.createElement(O._25, {
                        padding: 2,
                        borderBottom: !0
                    }, h.createElement(O._2, {
                        padding: {
                            bottom: 1
                        }
                    }, h.createElement(O._35, {
                        "data-test-selector": "description",
                        fontSize: O.R.Size5,
                        color: O.I.Alt2
                    }, this.props.description)), h.createElement(O._25, {
                        display: O.N.Flex,
                        margin: {
                            y: .5
                        },
                        borderBottom: !0
                    }, h.createElement(O._2, {
                        className: "platform-notification-settings__all",
                        display: O.N.Flex,
                        padding: {
                            bottom: 1,
                            right: 5
                        },
                        justifyContent: O._1.Center,
                        flexGrow: 1,
                        flexWrap: O.Q.NoWrap
                    }, h.createElement(O._2, {
                        className: "platform-notification-settings__all-body",
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, h.createElement(O._35, {
                        fontSize: O.R.Size4,
                        color: O.I.Alt,
                        "data-test-selector": "explanation"
                    }, this.props.explanation)), h.createElement(O._2, {
                        display: O.N.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, h.createElement(O._2, {
                        margin: {
                            right: 1
                        }
                    }, h.createElement(O._42, {
                        "data-test-selector": "all-toggle",
                        checked: this.getGlobalStateForPlatform(),
                        onChange: this.toggleAll
                    })), h.createElement(O._2, {
                        padding: {
                            x: 1
                        },
                        "data-test-selector": "saved-selector",
                        className: this.getDisplaySaved("ALL") ? "platform-notification-settings__saved" : "platform-notification-settings__saved--hide"
                    }, h.createElement(O._35, {
                        fontSize: O.R.Size5,
                        color: O.I.Link
                    }, Object(m.d)("Saved", "PlatformNotificationSettings")))))), h.createElement(O._2, {
                        className: "platform-notification-settings__toggle-container",
                        display: O.N.Flex,
                        flexDirection: O.P.Column,
                        margin: {
                            left: 5
                        },
                        padding: {
                            left: 5
                        }
                    }, this.renderToggles()), this.props.extraSettings))
                }, t.prototype.getSettingByCategory = function(e) {
                    var t = null;
                    if (!this.props.data || !this.props.data.currentUser) return null;
                    for (var n = 0, r = this.props.data.currentUser.notificationSettings; n < r.length; n++) {
                        var i = r[n];
                        i.category === e && (t = i.platforms)
                    }
                    if (!t) return null;
                    for (var a = 0, o = t; a < o.length; a++) {
                        var s = o[a];
                        if (s.platformName === this.props.platformName) return s
                    }
                    return null
                }, t.prototype.getSettingTurnedOnMessage = function() {
                    for (var e = 0, t = 0, n = 0, r = this.VisibleSettings; n < r.length; n++) {
                        var i = r[n],
                            a = this.getSettingByCategory(i.category);
                        a && (e++, a.isEnabled && t++)
                    }
                    return 0 !== t && this.getGlobalStateForPlatform() ? t < e ? Object(m.d)("Some notifications turned on", "PlatformNotificationSettings") : Object(m.d)("All notifications turned on", "PlatformNotificationSettings") : Object(m.d)("All notifications turned off", "PlatformNotificationSettings")
                }, t.prototype.getGlobalStateForPlatform = function() {
                    var e = this.getSettingByCategory("ALL");
                    return !!e && e.isEnabled
                }, t.prototype.renderToggles = function() {
                    for (var e = [], t = 0, n = this.VisibleSettings; t < n.length; t++) {
                        var r = n[t],
                            i = this.getSettingByCategory(r.category);
                        i && e.push(h.createElement(tt, {
                            category: r.category,
                            text: r.name,
                            description: r.description,
                            isEnabled: i.isEnabled,
                            onChange: this.toggleSettingCategory,
                            disabled: !this.getGlobalStateForPlatform(),
                            key: r.category,
                            saved: this.getDisplaySaved(r.category)
                        }))
                    }
                    return e
                }, t.prototype.markSaved = function(e) {
                    this.setState(function(t) {
                        return t.saved.add(e), {
                            saved: t.saved
                        }
                    }), setTimeout(this.clearSaved(e), 2e3)
                }, t.prototype.getDisplaySaved = function(e) {
                    return this.state.saved.has(e)
                }, t.prototype.clearSaved = function(e) {
                    var t = this;
                    return function() {
                        t.setState(function(t) {
                            return t.saved.delete(e), {
                                saved: t.saved
                            }
                        })
                    }
                }, t
            }(h.Component),
            ot = Object(c.d)(Object(b.d)("PlatformNotificationSettings"), Object(pe.a)(rt, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network"
                    }
                }
            }), Object(pe.a)(nt, {
                name: "setNotificationSetting"
            }))(at),
            st = (n("nq6q"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e = "" !== location.search ? Le.parse(location.search) : {},
                        t = !!e["open-advanced"] && "true" === e["open-advanced"];
                    return h.createElement(O._25, {
                        className: "notification-settings__body",
                        borderRight: !0,
                        borderLeft: !0,
                        borderTop: !0
                    }, h.createElement(O._25, {
                        background: O.m.Alt,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, h.createElement(O._2, {
                        margin: {
                            bottom: .5
                        }
                    }, h.createElement(O._35, {
                        fontSize: O.R.Size3,
                        color: O.I.Alt
                    }, Object(m.d)("Notifications", "SettingsNotificationsPage"))), h.createElement(O._2, null, h.createElement(O._35, {
                        fontSize: O.R.Size5,
                        color: O.I.Alt2
                    }, Object(m.d)("Get the notifications you care about, where you want to see them.", "SettingsNotificationsPage")))), h.createElement(ot, {
                        startCollapsed: t,
                        platformName: ne.onsite,
                        displayName: Object(m.d)("On Twitch", "SettingsNotificationsPage"),
                        description: Object(m.d)("We'll always keep you informed on important updates to Twitch and your account.", "SettingsNotificationsPage"),
                        explanation: Object(m.d)("Send me notifications on Twitch about", "SettingsNotificationsPage"),
                        key: "onsite",
                        extraSettings: this.renderBrowserPushNotifications()
                    }), h.createElement(ot, {
                        startCollapsed: !0,
                        platformName: ne.email,
                        displayName: Object(m.d)("By Email", "SettingsNotificationsPage"),
                        description: Object(m.d)("Receive important notifications through email. You may receive additional emails about features and content on Twitch. You can turn off specific emails using the unsubscribe link included in each message.", "SettingsNotificationsPage"),
                        explanation: Object(m.d)("Send me emails about", "SettingsNotificationsPage"),
                        key: "email"
                    }), h.createElement(ot, {
                        platformName: ne.push,
                        startCollapsed: !0,
                        displayName: Object(m.d)("On Mobile", "SettingsNotificationsPage"),
                        description: Object(m.d)("Get Twitch updates on the go. Receive notifications right on your phone's home screen.", "SettingsNotificationsPage"),
                        explanation: Object(m.d)("Send me push notifications", "SettingsNotificationsPage"),
                        key: "push"
                    }), h.createElement(Ke, {
                        startCollapsed: !t
                    }))
                }, t.prototype.renderBrowserPushNotifications = function() {
                    return Object(Be.a)() && !Object(ze.a)() ? h.createElement(et, null) : null
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = f.__decorate([Object(b.d)("SettingsNotificationsPage", {
                    destination: k.a.NotificationSettingsPage
                }), Object(_.a)({
                    location: w.PageviewLocation.SettingsPage
                })], t)
            }(h.Component)),
            lt = n("S1vB"),
            ct = n("cumT"),
            ut = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: s.NoChanges
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: s.Working
                        }, function() {})
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return m.a.buildType === E.a.Production ? null : this.props.data.currentUser && this.props.data.requestInfo ? this.props.data.currentUser.hasPrime ? h.createElement("div", null, h.createElement(N, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    })) : Object(lt.a)(this.props.data.requestInfo.countryCode) ? (window.location.replace("https://twitch.amazon.com/prime?ref_=sm_w_tsp_p_t"), null) : h.createElement(g.a, {
                        to: "/settings/turbo"
                    }) : null
                }, t = f.__decorate([Object(b.d)("SettingsPrimePage", {
                    autoReportInteractive: !0,
                    destination: k.a.SettingsPrime
                }), Object(_.a)({
                    location: w.PageviewLocation.SettingsPage
                }), Object(pe.a)(ct)], t)
            }(h.Component),
            dt = function() {
                return h.createElement(v.a, {
                    message: Object(m.d)("Error loading user data. Please try again later.", "SettingsPageError")
                })
            },
            pt = function() {
                return h.createElement(Q, {
                    label: Object(m.d)("Disable Your Twitch Account", "DisableAccountLink"),
                    orientation: O.T.Horizontal
                }, Object(m.d)("If you want to disable your Twitch account, you can do so from the <x:link>Disable Account</x:link> page.", {
                    "x:link": function(e) {
                        return h.createElement("a", {
                            key: "disable-account-link",
                            href: "https://www.twitch.tv/user/disable_account",
                            "data-a-target": "disable-account-link"
                        }, e)
                    }
                }, "DisableAccountLink"))
            },
            ft = 5e3;
        ! function(e) {
            e[e.InvalidAddress = 1] = "InvalidAddress", e[e.InvalidDomain = 2] = "InvalidDomain"
        }(it || (it = {}));
        var ht;
        ! function(e) {
            e[e.Error = 0] = "Error", e[e.CanSendVerificationEmail = 1] = "CanSendVerificationEmail", e[e.VerificationEmailSent = 2] = "VerificationEmailSent", e[e.Verified = 3] = "Verified"
        }(ht || (ht = {}));
        var gt, mt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = m.i.withCategory("email-setting"), n.onClickVerify = function() {
                        return f.__awaiter(n, void 0, void 0, function() {
                            var e, t = this;
                            return f.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            working: !0
                                        }), e = ht.Error, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, j.a.put("/kraken/users/" + this.props.id, {
                                            body: {
                                                email: this.props.email
                                            }
                                        })];
                                    case 2:
                                        return 200 === n.sent().status && (e = ht.VerificationEmailSent), [3, 4];
                                    case 3:
                                        return n.sent(), this.logger.warn("Request to send verification email failed for user:", {
                                            login: this.props.login
                                        }), [3, 4];
                                    case 4:
                                        return this.setState({
                                            status: e,
                                            working: !1
                                        }, function() {
                                            return t.feedbackTimerHandle = setTimeout(function() {
                                                return t.setState({
                                                    status: ht.CanSendVerificationEmail
                                                })
                                            }, ft)
                                        }), [2]
                                }
                            })
                        })
                    }, n.state = {
                        status: t.verified ? ht.Verified : ht.CanSendVerificationEmail,
                        working: !1
                    }, n
                }
                return f.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.feedbackTimerHandle && clearTimeout(this.feedbackTimerHandle)
                }, t.prototype.render = function() {
                    var e = !!this.props.error || this.state.status === ht.Error,
                        t = this.props.disabled || this.state.working;
                    return h.createElement(O._2, {
                        display: O.N.Flex,
                        flexWrap: O.Q.NoWrap
                    }, h.createElement(Q, {
                        error: e,
                        errorMessage: e ? this.renderEmailError() : void 0,
                        label: Object(m.d)("Email", "EmailSetting")
                    }, h.createElement(O.Y, {
                        type: O.Z.Email,
                        disabled: t,
                        onChange: this.props.onChange,
                        required: !0,
                        value: this.props.email
                    }), h.createElement(q, {
                        text: this.renderVerificationMessage()
                    })), h.createElement(O._2, {
                        flexGrow: 0
                    }, this.renderVerifyButton(t)))
                }, t.prototype.renderVerifyButton = function(e) {
                    switch (this.state.status) {
                        case ht.CanSendVerificationEmail:
                            return h.createElement(O.u, {
                                type: O.z.Default,
                                disabled: this.props.dirty || e,
                                onClick: this.onClickVerify
                            }, Object(m.d)("Verify", "EmailSetting"));
                        case ht.VerificationEmailSent:
                            return h.createElement(O.u, {
                                type: O.z.Success,
                                disabled: e
                            }, Object(m.d)("Email Sent", "EmailSetting"));
                        case ht.Error:
                            return h.createElement(O.u, {
                                type: O.z.Alert,
                                disabled: !0
                            }, Object(m.d)("Error", "EmailSetting"));
                        case ht.Verified:
                        default:
                            return null
                    }
                }, t.prototype.renderVerificationMessage = function() {
                    switch (this.state.status) {
                        case ht.CanSendVerificationEmail:
                            return Object(m.d)("This email is linked to your account - please take a moment to verify", "EmailSetting");
                        case ht.VerificationEmailSent:
                            return Object(m.d)("Verification email sent!", "EmailSetting");
                        case ht.Verified:
                            return Object(m.d)("This email is linked to your account", "EmailSetting");
                        default:
                            return null
                    }
                }, t.prototype.renderEmailError = function() {
                    if (this.state.status === ht.Error) return Object(m.d)("Failed to send verification email - please try again later", "EmailSetting");
                    switch (this.props.error) {
                        case it.InvalidAddress:
                            return Object(m.d)("Please provide a valid email address", "EmailSetting");
                        case it.InvalidDomain:
                            return Object(m.d)("Admins must use their work email address", "EmailSetting");
                        default:
                            return
                    }
                }, t
            }(h.Component),
            vt = n("FuaS"),
            bt = n("FsFC");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.Eligible = 2] = "Eligible", e[e.NotEligible = 3] = "NotEligible"
        }(gt || (gt = {}));
        var yt, St = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: gt.Loading
                    }, t.logger = m.i.withCategory("username-setting"), t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.emailVerified && this.fetchChangeEligibility()
                }, t.prototype.render = function() {
                    return h.createElement(O._2, {
                        display: O.N.Flex,
                        flexWrap: O.Q.NoWrap
                    }, h.createElement(Q, {
                        label: Object(m.d)("Username", "UsernameSetting"),
                        error: this.state.status === gt.Error,
                        errorMessage: this.state.status === gt.Error ? this.renderErrorMessage() : void 0
                    }, h.createElement(O.Y, {
                        type: O.Z.Text,
                        disabled: !0,
                        value: this.props.login
                    }), h.createElement(q, {
                        text: this.renderChangeEligibilityMessage()
                    })), h.createElement(O._2, {
                        flexGrow: 0
                    }, this.state.status === gt.Eligible && h.createElement(O.v, {
                        ariaLabel: Object(m.d)("Edit Username", "UsernameSetting"),
                        icon: O._16.Edit,
                        linkTo: "https://www.twitch.tv/logins/new"
                    })))
                }, t.prototype.renderChangeEligibilityMessage = function() {
                    if (!this.props.emailVerified) return Object(m.d)("You must have a verified email to update your username", "UsernameSetting");
                    switch (this.state.status) {
                        case gt.Loading:
                            return Object(m.d)("Loading username change eligibility...", "UsernameSetting");
                        case gt.Eligible:
                            return Object(m.d)("You may update your username", "UsernameSetting");
                        case gt.NotEligible:
                            return this.state.eligibilityTimeISO && Object(m.d)("You may update your username again in {distanceFromNow}", {
                                distanceFromNow: function(e) {
                                    var t = Date.now(),
                                        n = (new Date(e).getTime() - t) / 1e3;
                                    if (!(n <= 0)) return Object(bt.a)(n)
                                }(this.state.eligibilityTimeISO) || ""
                            }, "UsernameSetting");
                        default:
                            return null
                    }
                }, t.prototype.renderErrorMessage = function() {
                    return Object(m.d)("We had trouble fetching your rename eligibility - please try again later", "UsernameSetting")
                }, t.prototype.fetchChangeEligibility = function() {
                    return f.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return f.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, j.a.get("/kraken/user/rename_status?scope=user_read")];
                                case 1:
                                    return (e = t.sent()).body && e.body.is_rename_eligible ? this.setState({
                                        status: gt.Eligible
                                    }) : e.body && !1 === e.body.is_rename_eligible ? this.setState({
                                        status: gt.NotEligible,
                                        eligibilityTimeISO: e.body.rename_eligible_at
                                    }) : this.setState({
                                        status: gt.Error
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.logger.warn("Failed to fetch rename_status for user " + this.props.login), this.setState({
                                        status: gt.Error
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t
            }(h.Component),
            _t = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return h.createElement("div", null, h.createElement(mt, {
                        disabled: this.props.controlsDisabled,
                        dirty: this.props.emailDirty,
                        email: this.props.email,
                        id: this.props.id,
                        error: this.props.emailError,
                        login: this.props.login,
                        onChange: this.props.onEmailChange,
                        verified: this.props.emailVerified
                    }), h.createElement(St, {
                        emailVerified: this.props.emailVerified,
                        login: this.props.login
                    }), h.createElement(Q, {
                        error: !!this.props.displayNameError,
                        errorMessage: this.props.displayNameError ? this.renderDisplayNameError() : void 0,
                        label: Object(m.d)("Display Name", "ProfileAccountInfo")
                    }, h.createElement(O.Y, {
                        "data-test-selector": "displayname-input",
                        type: O.Z.Text,
                        disabled: this.props.controlsDisabled,
                        onChange: this.props.onDisplayNameChange,
                        value: this.props.displayName
                    }), h.createElement(q, {
                        text: this.renderDisplayNameDescription()
                    })), h.createElement(Q, {
                        label: Object(m.d)("Bio", "ProfileAccountInfo")
                    }, h.createElement(O._37, {
                        disabled: this.props.controlsDisabled,
                        onChange: this.props.onBioChange,
                        maxLength: 300,
                        noResize: !0,
                        value: this.props.bio
                    }), h.createElement(q, {
                        text: Object(m.d)("Who you are in fewer than 300 characters", "ProfileAccountInfo") + (this.props.bio.length > 250 ? Object(m.d)("{chars, plural, one { (# character remaining)} other { (# characters remaining)}}", {
                            chars: 300 - this.props.bio.length
                        }, "ProfileAccountInfo") : "")
                    })))
                }, t.prototype.renderDisplayNameDescription = function() {
                    return this.userHasCJKLanguageSet() ? Object(m.d)("Customize the capitalization of your display name or change it to contain English characters! Setting an English display name is a permanent change — requests to undo it will not be honored! Display names that do not adhere to Twitch Rules of Conduct may result in an indefinite suspension of your account.", "ProfleAccountInfo") : Object(m.d)("Customize capitalization for your username", "ProfileAccountInfo")
                }, t.prototype.renderDisplayNameError = function() {
                    return Object(m.d)("You may not change your display name, only the capitalization of it", "ProfileAccountInfo")
                }, t.prototype.userHasCJKLanguageSet = function() {
                    var e = Object(vt.a)();
                    return !!e && ["ko", "ja", "zh", "zh-cn", "zh-tw", "zh-hk"].includes(e)
                }, t
            }(h.Component),
            Et = n("E9Qg"),
            kt = n.n(Et),
            wt = n("tL94"),
            xt = (n("i1sU"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.currentUser;
                        e && t.props.showModal(Ie.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: Ue.a.ProfileBanner,
                            showCloser: !0,
                            successCallback: t.imageUploaded
                        })
                    }, t.imageUploaded = function() {
                        t.props.data && t.props.data.refetch()
                    }, t.shouldReportInteractive = function() {
                        var e = t.props.data;
                        if (e && !e.loading) {
                            var n = e.currentUser;
                            n && n.bannerImageURL ? t.props.latencyTracking.reportInteractive(1) : t.props.latencyTracking.reportInteractive()
                        }
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.shouldReportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.shouldReportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data,
                        t = e && e.currentUser;
                    if (!e.loading && !t) return h.createElement(O._35, {
                        type: O._40.Span,
                        color: O.I.Error
                    }, Object(m.d)("Sorry, something went wrong. Please try again later.", "ProfileBannerSetting"));
                    var n = Object(m.d)("Profile Banner", "ProfileBannerSetting"),
                        r = null;
                    return r = e.loading ? h.createElement(O._8, {
                        "data-test-selector": "profile-banner__placeholder",
                        height: 140,
                        width: 440
                    }) : t && t.bannerImageURL ? h.createElement(b.b, {
                        src: t.bannerImageURL,
                        alt: n,
                        className: "profile-banner-setting__current-image"
                    }) : h.createElement("div", {
                        className: "profile-banner-setting__current-image profile-banner-setting__current-image--default",
                        style: {
                            backgroundImage: "url(" + kt.a + ")"
                        }
                    }), h.createElement(O._2, {
                        className: "profile-banner-setting",
                        margin: {
                            bottom: 4
                        }
                    }, h.createElement(O._2, {
                        display: O.N.Flex,
                        flexDirection: O.P.Row
                    }, h.createElement(O._2, {
                        margin: {
                            right: 2
                        }
                    }, r), h.createElement(O._2, {
                        margin: {
                            y: "auto"
                        }
                    }, h.createElement(O.u, {
                        ariaLabel: Object(m.d)("Update Profile Banner", "ProfileBannerSetting"),
                        onClick: this.openModal,
                        "data-test-selector": "profile-banner-upload-button"
                    }, h.createElement(O._2, {
                        padding: {
                            x: 1
                        }
                    }, Object(m.d)("Update", "ProfileBannerSetting"))), h.createElement(q, {
                        text: Object(m.d)("File format: JPEG, PNG, GIF (recommended 1200x380, max 10MB)", "ProfileBannerSetting")
                    }))))
                }, t
            }(h.Component)),
            Ot = Object(de.compose)(Object(b.d)("ProfileBannerSetting"), Object(pe.a)(wt))(xt),
            Ct = Object(l.b)(null, function(e) {
                return Object(c.b)({
                    showModal: Pe.d
                }, e)
            })(Ot),
            Nt = n("x9n8"),
            jt = n("goep"),
            Tt = (n("eppJ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.currentUser;
                        e && t.props.showModal(Nt.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            showCloser: !0,
                            successCallback: t.imageUploaded
                        })
                    }, t.imageUploaded = function() {
                        t.props.data && t.props.data.refetch()
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(1)
                }, t.prototype.render = function() {
                    var e = this.props.data && this.props.data.currentUser,
                        t = h.createElement(O._8, {
                            height: 140,
                            width: 140
                        });
                    return e && e.profileImageURL && (t = h.createElement(b.b, {
                        src: e.profileImageURL,
                        alt: Object(m.d)("Profile Picture", "ProfileImageSetting"),
                        className: "profile-image-setting__current-image"
                    })), h.createElement(O._2, {
                        className: "profile-image-setting",
                        margin: {
                            bottom: 4
                        }
                    }, h.createElement(O._2, {
                        display: O.N.Flex,
                        flexDirection: O.P.Row
                    }, h.createElement(O._2, {
                        margin: {
                            right: 2
                        }
                    }, t), h.createElement(O._2, {
                        margin: {
                            y: "auto"
                        }
                    }, h.createElement(O.u, {
                        ariaLabel: Object(m.d)("Update Profile Picture", "ProfileImageSetting"),
                        onClick: this.openModal,
                        "data-test-selector": "profile-image-upload-button"
                    }, h.createElement(O._2, {
                        padding: {
                            x: 1
                        }
                    }, Object(m.d)("Update", "ProfileImageSetting"))), h.createElement(q, {
                        text: Object(m.d)("File format: JPEG, PNG, GIF (max size 256x256, 10MB)", "ProfileImageSetting")
                    }))))
                }, t
            }(h.Component)),
            Pt = Object(de.compose)(Object(b.d)("ProfileImageSetting"), Object(pe.a)(jt))(Tt),
            It = Object(l.b)(null, function(e) {
                return Object(c.b)({
                    showModal: Pe.d
                }, e)
            })(Pt),
            Ut = n("OA9H");
        ! function(e) {
            e.DisplayName = "Error (403): You may not change your display name, only the capitalization of it.", e.EmailNotValid = "Error (403): Email address is not valid", e.EmailDomainNotAllowed = "Error (403): Admins must use their work email"
        }(yt || (yt = {}));
        var Dt, At = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: s.Working,
                        displayNameError: !1
                    }, t.logger = m.i.withCategory("settings-profile-page"), t.onClickSave = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, i, a = this;
                            return f.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!this.props.data.currentUser) return [2];
                                        this.setState({
                                            saveStatus: s.Working
                                        }), e = s.Error, t = !1, n = void 0, o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, j.a.put("/kraken/users/" + this.props.data.currentUser.id, {
                                            body: this.buildRequestBody()
                                        })];
                                    case 2:
                                        if (200 === (r = o.sent()).status) e = s.Success;
                                        else if (403 === r.status) switch (r.error && r.error.message) {
                                            case yt.EmailNotValid:
                                                n = it.InvalidAddress;
                                                break;
                                            case yt.EmailDomainNotAllowed:
                                                n = it.InvalidDomain;
                                                break;
                                            case yt.DisplayName:
                                                t = !0;
                                                break;
                                            default:
                                                this.logErrorToSentinel(r)
                                        } else this.logErrorToSentinel(r);
                                        return [3, 4];
                                    case 3:
                                        return i = o.sent(), this.logger.warn("Network error submitting profile for user", {
                                            user: this.props.data.currentUser && this.props.data.currentUser.login,
                                            error: i
                                        }), [3, 4];
                                    case 4:
                                        return this.setState({
                                            saveStatus: e,
                                            displayNameError: t,
                                            emailError: n
                                        }, function() {
                                            e === s.Success && a.props.data.refetch && a.props.data.refetch()
                                        }), [2]
                                }
                            })
                        })
                    }, t.onBioChange = function(e) {
                        return t.setState({
                            bio: e.currentTarget.value
                        }, t.checkForDirtyState)
                    }, t.onEmailChange = function(e) {
                        return t.setState({
                            email: e.currentTarget.value
                        }, t.checkForDirtyState)
                    }, t.onDisplayNameChange = function(e) {
                        return t.setState({
                            displayName: e.currentTarget.value
                        }, t.checkForDirtyState)
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    !this.props.data.loading && this.props.data.currentUser && this.hydrateState(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.data.loading && !e.data.loading && e.data.currentUser && this.hydrateState(e)
                }, t.prototype.render = function() {
                    return m.a.buildType === E.a.Production ? null : this.props.data.currentUser ? h.createElement("div", null, h.createElement(i, {
                        title: Object(m.d)("Profile Picture", "SettingsProfilePage")
                    }), h.createElement(It, null), h.createElement(i, {
                        title: Object(m.d)("Profile Banner", "SettingsProfilePage")
                    }), h.createElement(Ct, null), h.createElement(i, {
                        title: Object(m.d)("Profile Settings", "SettingsProfilePage"),
                        description: Object(m.d)("Change identifying details for your account", "SettingsProfilePage")
                    }), h.createElement(_t, {
                        bio: this.state.bio || "",
                        controlsDisabled: this.state.saveStatus === s.Working,
                        displayName: this.state.displayName || "",
                        displayNameError: this.state.displayNameError,
                        email: this.state.email || "",
                        emailDirty: this.state.email !== this.props.data.currentUser.email,
                        emailError: this.state.emailError,
                        emailVerified: this.props.data.currentUser.isEmailVerified,
                        id: this.props.data.currentUser.id,
                        login: this.props.data.currentUser.login || "",
                        onBioChange: this.onBioChange,
                        onDisplayNameChange: this.onDisplayNameChange,
                        onEmailChange: this.onEmailChange
                    }), h.createElement(i, {
                        title: Object(m.d)("Disabling Your Twitch Account", "SettingsProfilePage"),
                        description: Object(m.d)("Completely deactivate your account", "SettingsProfilePage")
                    }), h.createElement(pt, null), h.createElement(N, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    })) : this.props.data.loading ? h.createElement(O._4, {
                        fillContent: !0
                    }) : h.createElement(dt, null)
                }, t.prototype.hydrateState = function(e) {
                    e.data.currentUser && this.setState({
                        bio: e.data.currentUser.description,
                        displayName: e.data.currentUser.displayName,
                        email: e.data.currentUser.email,
                        saveStatus: s.NoChanges
                    })
                }, t.prototype.logErrorToSentinel = function(e) {
                    this.logger.error(e.requestError || new Error("Unrecognized User Service response error"), "Unrecognized erorr response submitting profile for user", {
                        user: this.props.data.currentUser && this.props.data.currentUser.login,
                        status: e.status,
                        error: e.error,
                        requestError: e.requestError
                    })
                }, t.prototype.buildRequestBody = function() {
                    return {
                        displayname: this.state.displayName,
                        email: this.state.email,
                        description: this.state.bio,
                        on_site: 1
                    }
                }, t.prototype.checkForDirtyState = function() {
                    if (!this.props.data.currentUser) return !1;
                    var e = this.state.bio !== this.props.data.currentUser.description || this.state.email !== this.props.data.currentUser.email || this.state.displayName !== this.props.data.currentUser.displayName;
                    this.setState({
                        saveStatus: e ? s.DirtyChanges : s.NoChanges
                    })
                }, t
            }(h.Component),
            Rt = Object(de.compose)(Object(pe.a)(Ut), Object(b.d)("SettingsProfilePage", {
                autoReportInteractive: !0,
                destination: k.a.SettingsProfile
            }), Object(_.a)({
                location: w.PageviewLocation.SettingsPage
            }))(At),
            Ft = "/v5/whispers/settings",
            Ht = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        loading: !0,
                        updating: !1
                    }, t.onToggle = function(e) {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return f.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            updating: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, j.a.post(Ft, {
                                            body: {
                                                restrict_whispers: e
                                            }
                                        })];
                                    case 2:
                                        return t = n.sent(), this.setState(function(n) {
                                            return {
                                                enabled: 200 === t.status ? e : n.enabled,
                                                error: 200 !== t.status,
                                                updating: !1
                                            }
                                        }), [3, 4];
                                    case 3:
                                        return n.sent(), this.setState({
                                            updating: !1,
                                            error: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentWillMount = function() {
                    return f.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return f.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, j.a.get(Ft)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        enabled: e.body && e.body.restrict_whispers || !1,
                                        error: 200 !== e.status,
                                        loading: !1
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.setState({
                                        enabled: !1,
                                        error: !0,
                                        loading: !1
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return h.createElement(ee, {
                        id: "settings-security-page-block-whispers",
                        label: Object(m.d)("Block Whispers from Stangers", "SettingsSecurityPage"),
                        description: Object(m.d)("Block whispers from people you don't follow", "SettingsSecurityPage"),
                        checked: this.state.enabled,
                        disabled: this.state.updating,
                        error: this.state.error,
                        onChange: this.onToggle
                    })
                }, t
            }(h.Component),
            Mt = n("NoSW"),
            Lt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return h.createElement(Q, {
                        label: Object(m.d)("Two-Factor Authentication", "TwoFactorAuthenticationSetting"),
                        orientation: O.T.Horizontal,
                        error: this.props.status === Dt.Error,
                        errorMessage: Object(m.d)("Sorry, something went wrong. Please try again later.", "TwoFactorAuthenticationSetting")
                    }, this.renderBody())
                }, t.prototype.renderBody = function() {
                    switch (this.props.status) {
                        case Dt.Loading:
                            return this.renderLoading();
                        case Dt.Error:
                            return this.renderError();
                        case Dt.UnverifiedEmail:
                            return this.renderVerifyEmail();
                        case Dt.CanEnable:
                            return this.renderEnableButton();
                        case Dt.Enabled:
                            return this.renderDisableButton();
                        case Dt.EnabledAndRequired:
                            return this.renderEnabledAndRequired();
                        default:
                            return null
                    }
                }, t.prototype.renderLoading = function() {
                    return h.createElement(O._8, null)
                }, t.prototype.renderError = function() {
                    return null
                }, t.prototype.renderVerifyEmail = function() {
                    return h.createElement(O._2, null, h.createElement(O._35, {
                        "data-a-target": "tfa-verify-email"
                    }, Object(m.d)("Just verify your email address and two-factor authentication can be enabled.", "TwoFactorAuthenticationSetting")))
                }, t.prototype.renderEnableButton = function() {
                    return h.createElement(O._2, null, h.createElement(O.u, {
                        linkTo: "https://passport.twitch.tv/register_2fa/new",
                        "data-a-target": "tfa-enable-button"
                    }, Object(m.d)("Set Up Two-Factor Authentication", "TwoFactorAuthenticationSetting")), h.createElement(q, {
                        dataTarget: "tfa-pitch-message",
                        text: Object(m.d)("It's dangerous to go alone. <x:link>Two-factor authentication</x:link> adds an extra layer of security to your Twitch account by requiring both a password and your mobile phone to login.", {
                            "x:link": function(e) {
                                return h.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://www.authy.com/learn-more",
                                    target: "_blank",
                                    "data-a-target": "tfa-authy-link"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    }))
                }, t.prototype.renderDisableButton = function() {
                    return h.createElement(O._2, null, h.createElement(O.u, {
                        linkTo: "https://passport.twitch.tv/disable_2fa/new",
                        "data-a-target": "tfa-disable-button"
                    }, Object(m.d)("Disable two-factor authentication", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledAndRequired = function() {
                    return h.createElement(O._2, null, h.createElement(O._35, {
                        "data-a-target": "tfa-required-message"
                    }, Object(m.d)("You must have two-factor authentication enabled.", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledMessage = function() {
                    return h.createElement(q, {
                        dataTarget: "tfa-successful-message",
                        text: Object(m.d)("Woohoo! Two-factor authentication is enabled! To reset or change your phone, visit the Authy <x:link>phone reset form</x:link>.", {
                            "x:link": function(e) {
                                return h.createElement("a", {
                                    key: "phone-reset-link",
                                    href: "https://www.authy.com/phones/reset",
                                    "data-a-target": "tfa-authy-reset"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    })
                }, t
            }(h.Component),
            Bt = n("Q6se");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.UnverifiedEmail = 2] = "UnverifiedEmail", e[e.CanEnable = 3] = "CanEnable", e[e.Enabled = 4] = "Enabled", e[e.EnabledAndRequired = 5] = "EnabledAndRequired"
        }(Dt || (Dt = {}));
        var zt, Vt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: Dt.Loading,
                        restLoading: !0,
                        restError: !1
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTwoFactorEnabled()
                }, t.prototype.componentDidUpdate = function(e, t) {
                    t.status === Dt.Loading && this.state.status !== Dt.Loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.status !== Dt.Loading || e.data.loading || this.reconcileStatus(e)
                }, t.prototype.render = function() {
                    return h.createElement(Lt, {
                        status: this.state.status
                    })
                }, t.prototype.fetchTwoFactorEnabled = function() {
                    return f.__awaiter(this, void 0, void 0, function() {
                        var e, t, n = this;
                        return f.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    e = "/api/users/auth_validator?check_2fa=true&onsite=1", r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, j.a.get(e, {
                                        credentials: "include"
                                    }, {
                                        version: 4
                                    })];
                                case 2:
                                    return t = r.sent(), this.setState({
                                        twoFactorEnabled: 204 === t.status || 401 === t.status,
                                        restError: 204 !== t.status && 403 !== t.status && 401 !== t.status,
                                        restLoading: !1
                                    }, function() {
                                        return n.reconcileStatus(n.props)
                                    }), [3, 4];
                                case 3:
                                    return r.sent(), this.setState({
                                        restLoading: !1,
                                        restError: !0
                                    }, function() {
                                        return n.reconcileStatus(n.props)
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.reconcileStatus = function(e) {
                    var t;
                    e.data.loading || this.state.restLoading ? t = Dt.Loading : !e.data.currentUser || this.state.restError ? t = Dt.Error : this.state.twoFactorEnabled || e.data.currentUser.isEmailVerified ? !this.state.twoFactorEnabled && e.data.currentUser.isEmailVerified ? t = Dt.CanEnable : this.state.twoFactorEnabled && !this.userRoleRequiresTwoFactor(e) ? t = Dt.Enabled : this.state.twoFactorEnabled && this.userRoleRequiresTwoFactor(e) && (t = Dt.EnabledAndRequired) : t = Dt.UnverifiedEmail, t && this.setState({
                        status: t
                    })
                }, t.prototype.userRoleRequiresTwoFactor = function(e) {
                    var t = e.data.currentUser && e.data.currentUser.roles;
                    return !(!t || !(t.isGlobalMod || t.isSiteAdmin || t.isStaff))
                }, t
            }(h.Component),
            Wt = Object(de.compose)(Object(Mt.a)("TwoFactorAuthenticationSetting"), Object(pe.a)(Bt))(Vt),
            Gt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return m.a.buildType === E.a.Production ? null : h.createElement("div", null, h.createElement(i, {
                        title: Object(m.d)("Security", "SettingsSecurityPage"),
                        description: Object(m.d)("Keep your account safe and sound", "SettingsSecurityPage")
                    }), h.createElement(o, null), h.createElement(Wt, null), h.createElement(i, {
                        title: Object(m.d)("Privacy", "SettingsSecurityPage"),
                        description: Object(m.d)("Choose who can message you", "SettingsSecurityPage")
                    }), h.createElement(Ht, null))
                }, t
            }(h.Component),
            qt = Object(de.compose)(Object(b.d)("SettingsSecurityPage", {
                autoReportInteractive: !0,
                destination: k.a.SettingsSecurity
            }), Object(_.a)({
                location: w.PageviewLocation.SettingsPage
            }))(Gt),
            Qt = n("CkX/");
        ! function(e) {
            e.Channel = "channel", e.Notifications = "notifications", e.Profile = "profile", e.Security = "security", e.Connections = "connections", e.Prime = "prime", e.Turbo = "turbo"
        }(zt || (zt = {}));
        var Yt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isPrimeVisible = function() {
                        return t.props.data.requestInfo && t.props.data.currentUser && (Object(lt.a)(t.props.data.requestInfo.countryCode) || t.props.data.currentUser.hasPrime)
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data.currentUser || !this.props.data.requestInfo) return null;
                    var e = null;
                    this.isPrimeVisible() && (e = h.createElement(O._26, {
                        linkTo: "/settings/prime",
                        active: this.props.tabName === zt.Prime,
                        "data-test-selector": "test-settings-prime-tab",
                        "data-a-target": "prime-tab"
                    }, Object(m.d)("Twitch Prime", "SettingsTabs")));
                    var t = null;
                    return !this.props.data.currentUser.hasTurbo && this.isPrimeVisible() || (t = h.createElement(O._26, {
                        linkTo: "/settings/turbo",
                        active: this.props.tabName === zt.Turbo,
                        "data-test-selector": "test-settings-turbo-tab",
                        "data-a-target": "turbo-tab"
                    }, Object(m.d)("Twitch Turbo", "SettingsTabs"))), h.createElement(O._2, {
                        className: "settings-tabs",
                        padding: {
                            x: Xt,
                            top: Xt
                        }
                    }, h.createElement(O._2, {
                        margin: {
                            bottom: 1
                        }
                    }, h.createElement(O._35, {
                        type: O._40.H2
                    }, Object(m.d)("Settings", "SettingsTabs"))), h.createElement(O._2, null, h.createElement(O._27, null, h.createElement(O._26, {
                        linkTo: "/settings/profile",
                        active: this.props.tabName === zt.Profile,
                        "data-a-target": "profile-tab"
                    }, Object(m.d)("Profile", "SettingsTabs")), e, t, h.createElement(O._26, {
                        linkTo: "/settings/channel",
                        active: this.props.tabName === zt.Channel,
                        "data-a-target": "channel-tab"
                    }, Object(m.d)("Channel and Videos", "SettingsTabs")), h.createElement(O._26, {
                        linkTo: "/settings/security",
                        active: this.props.tabName === zt.Security,
                        "data-a-target": "security-tab"
                    }, Object(m.d)("Security and Privacy", "SettingsTabs")), h.createElement(O._26, {
                        linkTo: "/settings/notifications",
                        active: this.props.tabName === zt.Notifications,
                        "data-a-target": "notifications-tab"
                    }, Object(m.d)("Notifications", "SettingsTab")), h.createElement(O._26, {
                        linkTo: "/settings/connections",
                        active: this.props.tabName === zt.Connections,
                        "data-a-target": "connections-tab"
                    }, Object(m.d)("Connections", "SettingsTabs")), h.createElement(O._26, {
                        linkTo: "/subscriptions",
                        active: !1,
                        "data-a-target": "subscriptions-tab"
                    }, Object(m.d)("Subscriptions", "SettingsTabs")))))
                }, t
            }(h.Component),
            Kt = Object(de.compose)(Object(b.d)("SettingsTabs"), Object(pe.a)(Qt))(Yt),
            Jt = n("hRPz"),
            Zt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: s.NoChanges
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: s.Working
                        }, function() {})
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return m.a.buildType === E.a.Production ? null : this.props.data.loading && !this.props.data.currentUser ? h.createElement(O._4, {
                        fillContent: !0
                    }) : this.props.data.loading || this.props.data.currentUser ? this.props.data.currentUser && !this.props.data.currentUser.hasTurbo ? this.props.data.currentUser.hasPrime || Object(lt.a)(this.props.data.requestInfo.countryCode) ? h.createElement(g.a, {
                        to: "/settings/prime"
                    }) : (window.location.replace("https://www.twitch.tv/products/turbo/ticket"), null) : h.createElement("div", null, h.createElement(N, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    })) : h.createElement(dt, null)
                }, t = f.__decorate([Object(b.d)("SettingsTurboPage", {
                    autoReportInteractive: !0,
                    destination: k.a.SettingsTurbo
                }), Object(_.a)({
                    location: w.PageviewLocation.SettingsPage
                }), Object(pe.a)(Jt)], t)
            }(h.Component),
            Xt = 3,
            $t = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.redirectToProfilePage = function() {
                        return h.createElement(g.a, {
                            to: "/settings/profile"
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? h.createElement(O._2, {
                        padding: {
                            x: Xt
                        },
                        fullHeight: !0,
                        fullWidth: !0,
                        display: O.N.Flex,
                        flexDirection: O.P.Column,
                        flexWrap: O.Q.NoWrap
                    }, h.createElement(y.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), h.createElement(S.a, null, h.createElement(Kt, {
                        tabName: this.props.match.params.tab
                    })), h.createElement(O._2, {
                        padding: {
                            y: 2
                        }
                    }, h.createElement(g.d, null, h.createElement(g.b, {
                        path: "/settings/profile",
                        component: Rt
                    }), h.createElement(g.b, {
                        path: "/settings/prime",
                        component: ut
                    }), h.createElement(g.b, {
                        path: "/settings/turbo",
                        component: Zt
                    }), h.createElement(g.b, {
                        path: "/settings/channel",
                        component: He
                    }), h.createElement(g.b, {
                        path: "/settings/security",
                        component: qt
                    }), h.createElement(g.b, {
                        path: "/settings/notifications",
                        component: st
                    }), h.createElement(g.b, {
                        path: "/settings/connections",
                        component: Me
                    }), h.createElement(g.b, {
                        path: "/settings",
                        render: this.redirectToProfilePage
                    })))) : (this.props.login(), h.createElement(v.a, {
                        message: Object(m.d)("You must be logged in to view this page", "SettingsRoot")
                    }))
                }, t = f.__decorate([Object(b.d)("SettingsRoot", {
                    autoReportInteractive: !0
                })], t)
            }(h.Component),
            en = Object(g.e)($t),
            tn = Object(l.b)(function(e) {
                return {
                    isLoggedIn: Object(p.d)(e)
                }
            }, function(e) {
                return Object(c.b)({
                    login: function() {
                        return Object(d.f)(u.a.SettingsPage)
                    }
                }, e)
            })(en);
        n.d(t, "SettingsRoot", function() {
            return tn
        })
    },
    KBYM: function(e, t, n) {
        var r = n("1C79"),
            i = n("6kJs"),
            a = n("YkxI"),
            o = n("zBOP"),
            s = a(function(e, t) {
                if (null == e) return [];
                var n = t.length;
                return n > 1 && o(e, t[0], t[1]) ? t = [] : n > 2 && o(t[0], t[1], t[2]) && (t = [t[0]]), i(e, r(t, 1), [])
            });
        e.exports = s
    },
    KgVm: function(e, t, n) {
        var r = n("cdq7"),
            i = n("JyYQ"),
            a = n("5Zxu"),
            o = Math.max;
        e.exports = function(e, t, n) {
            var s = null == e ? 0 : e.length;
            if (!s) return -1;
            var l = null == n ? 0 : a(n);
            return l < 0 && (l = o(s + l, 0)), r(e, i(t, 3), l)
        }
    },
    KmWZ: function(e, t, n) {
        var r = n("duB3");
        e.exports = function() {
            this.__data__ = new r, this.size = 0
        }
    },
    LBNC: function(e, t, n) {
        "use strict";
        t.a = function() {
            return "serviceWorker" in window.navigator && "PushManager" in window
        }
    },
    M6Wl: function(e, t, n) {
        var r = n("rpnb"),
            i = n("ktak");
        e.exports = function(e, t) {
            return e && r(e, t, i)
        }
    },
    MoMe: function(e, t, n) {
        var r = n("FCuZ"),
            i = n("l9Lx"),
            a = n("ktak");
        e.exports = function(e) {
            return r(e, a, i)
        }
    },
    NGEn: function(e, t) {
        var n = Array.isArray;
        e.exports = n
    },
    NkRn: function(e, t, n) {
        var r = n("TQ3y").Symbol;
        e.exports = r
    },
    NqZt: function(e, t) {
        e.exports = function(e) {
            var t = this.__data__,
                n = t.delete(e);
            return this.size = t.size, n
        }
    },
    OA9H: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SettingsProfilePage"
                },
                variableDefinitions: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "description"
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
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isEmailVerified"
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
            }],
            loc: {
                start: 0,
                end: 100
            }
        };
        n.loc.source = {
            body: "query SettingsProfilePage {\ncurrentUser {\nid\ndescription\ndisplayName\nemail\nisEmailVerified\nlogin\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    OOv5: function(e, t, n) {
        "use strict";

        function r() {
            if (g) return g;
            var e = h.register({
                scope: "/"
            });
            return g = e || Promise.reject(new Error("service worker runtime not available"))
        }
        var i, a = n("TToO"),
            o = n("6sO2"),
            s = n("oIkB"),
            l = n("Aj/L");
        ! function(e) {
            e.NewSession = "new-session", e.ClearSession = "clear-session"
        }(i || (i = {}));
        var c = o.n.logger.withCategory("host-service-worker-messenger"),
            u = function() {
                function e() {}
                return e.syncSession = function() {
                    var e = Object(l.c)(o.n.store.getState());
                    if (e) {
                        var t = e.id;
                        this.sendMessage({
                            type: i.NewSession,
                            userId: t
                        })
                    } else this.sendMessage({
                        type: i.ClearSession
                    })
                }, e.sendMessage = function(e) {
                    var t = this;
                    if (navigator.serviceWorker.controller) this.postMessage(e);
                    else {
                        c.debug("cannot postMessage immediately. waiting for a service worker to take control");
                        var n = function() {
                            c.debug("controller changed", {
                                controllerExists: !!navigator.serviceWorker.controller
                            }), navigator.serviceWorker.removeEventListener("controllerchange", n), t.postMessage(e)
                        };
                        navigator.serviceWorker.addEventListener("controllerchange", n)
                    }
                }, e.postMessage = function(e) {
                    navigator.serviceWorker.controller ? (c.debug("postMessage", e), navigator.serviceWorker.controller.postMessage(JSON.stringify(e))) : c.error(new Error("navigator.serviceWorker.controller is null"), "postMessage called with no controlling service worker")
                }, e
            }(),
            d = "browserPushNotificationsEnabled",
            p = function() {
                function e() {}
                return e.exists = function() {
                    return null !== o.n.storage.getOptional(d)
                }, e.isEnabled = function() {
                    return o.n.storage.get(d, !1)
                }, e.setEnabled = function() {
                    o.n.storage.set(d, !0)
                }, e.setDisabled = function() {
                    o.n.storage.set(d, !1)
                }, e
            }(),
            f = n("UbVv"),
            h = n("OtmA"),
            g = null,
            m = n("JBcW"),
            v = n("TbkX");
        n.d(t, "a", function() {
            return y
        });
        var b = o.n.logger.withCategory("browser-push-notifications-manager"),
            y = function() {
                function e() {}
                return e.initialize = function() {
                    return this.initPromise ? this.initPromise : (this.initPromise = this.initializationLogic(), this.initPromise)
                }, e.initializationLogic = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, i;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return Object(f.a)() ? (b.debug("permissions have been denied. nothing to do here."), [2]) : [4, r()];
                                case 1:
                                    return a.sent(), e = Object(l.d)(o.n.store.getState()), [4, this.hasPushSubscription()];
                                case 2:
                                    return t = a.sent(), u.syncSession(), t ? (n = p.exists() && !p.isEnabled(), i = !e, n || i ? [4, this.unsubscribe()] : [3, 4]) : [3, 5];
                                case 3:
                                    a.sent(), a.label = 4;
                                case 4:
                                    return [3, 7];
                                case 5:
                                    return l.d ? !Object(f.b)() || p.exists() && !p.isEnabled() ? [3, 7] : [4, this.subscribe()] : [3, 7];
                                case 6:
                                    a.sent(), a.label = 7;
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.userSubscribe = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return p.setEnabled(), [4, this.subscribe()];
                                case 1:
                                    return t.sent(), Object(m.c)({
                                        allowed: Object(f.b)(),
                                        context: e
                                    }), [2]
                            }
                        })
                    })
                }, e.userUnsubscribe = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return p.setDisabled(), [4, this.unsubscribe()];
                                case 1:
                                    return t.sent(), Object(m.b)({
                                        context: e
                                    }), [2]
                            }
                        })
                    })
                }, e.hasPushSubscription = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.getPushSubscription()];
                                case 1:
                                    return [2, null !== e.sent()]
                            }
                        })
                    })
                }, e.subscribe = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, i, c, u;
                        return a.__generator(this, function(d) {
                            switch (d.label) {
                                case 0:
                                    if (Object(f.a)()) throw new Error("notification permission is denied");
                                    if (!Object(l.d)(o.n.store.getState())) throw new Error("cannot be enabled logged out");
                                    if (!(e = o.b.get("notification_app_server_public_key", ""))) throw new Error("application server public key is blank");
                                    return [4, r()];
                                case 1:
                                    return t = d.sent(), [4, this.getPushSubscription()];
                                case 2:
                                    return (n = d.sent()) ? [3, 4] : (i = function(e) {
                                        for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(t), r = new Uint8Array(n.length), i = 0; i < n.length; ++i) r[i] = n.charCodeAt(i);
                                        return r
                                    }(e), [4, t.pushManager.subscribe({
                                        userVisibleOnly: !0,
                                        applicationServerKey: i
                                    })]);
                                case 3:
                                    n = d.sent(), d.label = 4;
                                case 4:
                                    if (!(c = n.toJSON()).endpoint) throw new Error("push subscription 'endpoint' missing");
                                    if (!c.keys) throw new Error("push subscription 'keys' missing");
                                    if (!c.keys.auth) throw new Error("push subscription 'keys.auth' missing");
                                    if (!c.keys.p256dh) throw new Error("push subscription 'keys.p256dh' missing");
                                    return u = Object(s.a)({
                                        endpoint: c.endpoint,
                                        auth: c.keys.auth,
                                        p256DH: c.keys.p256dh
                                    }), [4, o.n.apollo.client.mutate(a.__assign({
                                        mutation: v
                                    }, u))];
                                case 5:
                                    return d.sent(), [2]
                            }
                        })
                    })
                }, e.unsubscribe = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.getPushSubscription()];
                                case 1:
                                    return (e = t.sent()) ? [4, e.unsubscribe()] : [2];
                                case 2:
                                    if (!t.sent()) throw new Error("push subscription unsubscribe unexpectedly failed");
                                    return [2]
                            }
                        })
                    })
                }, e.getPushSubscription = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return a.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, r()];
                                case 1:
                                    return e = n.sent(), [4, e.pushManager.getSubscription()];
                                case 2:
                                    return (t = n.sent()) ? [2, t] : [2, null]
                            }
                        })
                    })
                }, e
            }()
    },
    Oo6K: function(e, t, n) {
        var r = n("nbsL");
        e.exports = function(e, t, n) {
            for (var i = -1, a = e.criteria, o = t.criteria, s = a.length, l = n.length; ++i < s;) {
                var c = r(a[i], o[i]);
                if (c) return i >= l ? c : c * ("desc" == n[i] ? -1 : 1)
            }
            return e.index - t.index
        }
    },
    "P/Wu": function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            o = function() {
                return function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var n = [],
                            r = !0,
                            i = !1,
                            a = void 0;
                        try {
                            for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, a = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return n
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();
        t.default = function(e) {
            var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                withRef: !1
            };
            return n = t = function(t) {
                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var t = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                    return t.handleStart = function(e) {
                        var n = t.props,
                            r = n.distance,
                            i = n.shouldCancelStart;
                        if (2 === e.button || i(e)) return !1;
                        t._touched = !0, t._pos = {
                            x: e.pageX,
                            y: e.pageY
                        };
                        var a = (0, h.closest)(e.target, function(e) {
                            return null != e.sortableInfo
                        });
                        if (a && a.sortableInfo && t.nodeIsChild(a) && !t.state.sorting) {
                            var o = t.props.useDragHandle,
                                s = a.sortableInfo,
                                l = s.index,
                                c = s.collection;
                            if (o && !(0, h.closest)(e.target, function(e) {
                                    return null != e.sortableHandle
                                })) return;
                            t.manager.active = {
                                index: l,
                                collection: c
                            }, "a" === e.target.tagName.toLowerCase() && e.preventDefault(), r || (0 === t.props.pressDelay ? t.handlePress(e) : t.pressTimer = setTimeout(function() {
                                return t.handlePress(e)
                            }, t.props.pressDelay))
                        }
                    }, t.nodeIsChild = function(e) {
                        return e.sortableInfo.manager === t.manager
                    }, t.handleMove = function(e) {
                        var n = t.props,
                            r = n.distance,
                            i = n.pressThreshold;
                        if (!t.state.sorting && t._touched) {
                            t._delta = {
                                x: t._pos.x - e.pageX,
                                y: t._pos.y - e.pageY
                            };
                            var a = Math.abs(t._delta.x) + Math.abs(t._delta.y);
                            r || i && !(i && a >= i) ? r && a >= r && t.manager.isActive() && t.handlePress(e) : (clearTimeout(t.cancelTimer), t.cancelTimer = setTimeout(t.cancel, 0))
                        }
                    }, t.handleEnd = function() {
                        var e = t.props.distance;
                        t._touched = !1, e || t.cancel()
                    }, t.cancel = function() {
                        t.state.sorting || (clearTimeout(t.pressTimer), t.manager.active = null)
                    }, t.handlePress = function(e) {
                        var n = t.manager.getActive();
                        if (n) {
                            var r = t.props,
                                a = r.axis,
                                o = r.getHelperDimensions,
                                s = r.helperClass,
                                l = r.hideSortableGhost,
                                c = r.onSortStart,
                                u = r.useWindowAsScrollContainer,
                                d = n.node,
                                p = n.collection,
                                f = d.sortableInfo.index,
                                g = (0, h.getElementMargin)(d),
                                m = t.container.getBoundingClientRect(),
                                v = o({
                                    index: f,
                                    node: d,
                                    collection: p
                                });
                            t.node = d, t.margin = g, t.width = v.width, t.height = v.height, t.marginOffset = {
                                x: t.margin.left + t.margin.right,
                                y: Math.max(t.margin.top, t.margin.bottom)
                            }, t.boundingClientRect = d.getBoundingClientRect(), t.containerBoundingRect = m, t.index = f, t.newIndex = f, t.axis = {
                                x: a.indexOf("x") >= 0,
                                y: a.indexOf("y") >= 0
                            }, t.offsetEdge = t.getEdgeOffset(d), t.initialOffset = t.getOffset(e), t.initialScroll = {
                                top: t.scrollContainer.scrollTop,
                                left: t.scrollContainer.scrollLeft
                            }, t.initialWindowScroll = {
                                top: window.pageYOffset,
                                left: window.pageXOffset
                            };
                            var b = d.querySelectorAll("input, textarea, select"),
                                y = d.cloneNode(!0);
                            if ([].concat(i(y.querySelectorAll("input, textarea, select"))).forEach(function(e, t) {
                                    "file" !== e.type && b[t] && (e.value = b[t].value)
                                }), t.helper = t.document.body.appendChild(y), t.helper.style.position = "fixed", t.helper.style.top = t.boundingClientRect.top - g.top + "px", t.helper.style.left = t.boundingClientRect.left - g.left + "px", t.helper.style.width = t.width + "px", t.helper.style.height = t.height + "px", t.helper.style.boxSizing = "border-box", t.helper.style.pointerEvents = "none", l && (t.sortableGhost = d, d.style.visibility = "hidden", d.style.opacity = 0), t.minTranslate = {}, t.maxTranslate = {}, t.axis.x && (t.minTranslate.x = (u ? 0 : m.left) - t.boundingClientRect.left - t.width / 2, t.maxTranslate.x = (u ? t.contentWindow.innerWidth : m.left + m.width) - t.boundingClientRect.left - t.width / 2), t.axis.y && (t.minTranslate.y = (u ? 0 : m.top) - t.boundingClientRect.top - t.height / 2, t.maxTranslate.y = (u ? t.contentWindow.innerHeight : m.top + m.height) - t.boundingClientRect.top - t.height / 2), s) {
                                var S;
                                (S = t.helper.classList).add.apply(S, i(s.split(" ")))
                            }
                            t.listenerNode = e.touches ? d : t.contentWindow, h.events.move.forEach(function(e) {
                                return t.listenerNode.addEventListener(e, t.handleSortMove, !1)
                            }), h.events.end.forEach(function(e) {
                                return t.listenerNode.addEventListener(e, t.handleSortEnd, !1)
                            }), t.setState({
                                sorting: !0,
                                sortingIndex: f
                            }), c && c({
                                node: d,
                                index: f,
                                collection: p
                            }, e)
                        }
                    }, t.handleSortMove = function(e) {
                        var n = t.props.onSortMove;
                        e.preventDefault(), t.updatePosition(e), t.animateNodes(), t.autoscroll(), n && n(e)
                    }, t.handleSortEnd = function(e) {
                        var n = t.props,
                            r = n.hideSortableGhost,
                            i = n.onSortEnd,
                            a = t.manager.active.collection;
                        t.listenerNode && (h.events.move.forEach(function(e) {
                            return t.listenerNode.removeEventListener(e, t.handleSortMove)
                        }), h.events.end.forEach(function(e) {
                            return t.listenerNode.removeEventListener(e, t.handleSortEnd)
                        })), t.helper.parentNode.removeChild(t.helper), r && t.sortableGhost && (t.sortableGhost.style.visibility = "", t.sortableGhost.style.opacity = "");
                        for (var o = t.manager.refs[a], s = 0, l = o.length; s < l; s++) {
                            var c = o[s],
                                u = c.node;
                            c.edgeOffset = null, u.style[h.vendorPrefix + "Transform"] = "", u.style[h.vendorPrefix + "TransitionDuration"] = ""
                        }
                        clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.manager.active = null, t.setState({
                            sorting: !1,
                            sortingIndex: null
                        }), "function" == typeof i && i({
                            oldIndex: t.index,
                            newIndex: t.newIndex,
                            collection: a
                        }, e), t._touched = !1
                    }, t.autoscroll = function() {
                        var e = t.translate,
                            n = {
                                x: 0,
                                y: 0
                            },
                            r = {
                                x: 1,
                                y: 1
                            },
                            i = 10,
                            a = 10;
                        e.y >= t.maxTranslate.y - t.height / 2 ? (n.y = 1, r.y = a * Math.abs((t.maxTranslate.y - t.height / 2 - e.y) / t.height)) : e.x >= t.maxTranslate.x - t.width / 2 ? (n.x = 1, r.x = i * Math.abs((t.maxTranslate.x - t.width / 2 - e.x) / t.width)) : e.y <= t.minTranslate.y + t.height / 2 ? (n.y = -1, r.y = a * Math.abs((e.y - t.height / 2 - t.minTranslate.y) / t.height)) : e.x <= t.minTranslate.x + t.width / 2 && (n.x = -1, r.x = i * Math.abs((e.x - t.width / 2 - t.minTranslate.x) / t.width)), t.autoscrollInterval && (clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.isAutoScrolling = !1), 0 === n.x && 0 === n.y || (t.autoscrollInterval = setInterval(function() {
                            t.isAutoScrolling = !0;
                            var e = 1 * r.x * n.x,
                                i = 1 * r.y * n.y;
                            t.scrollContainer.scrollTop += i, t.scrollContainer.scrollLeft += e, t.translate.x += e, t.translate.y += i, t.animateNodes()
                        }, 5))
                    }, t.manager = new f.default, t.events = {
                        start: t.handleStart,
                        move: t.handleMove,
                        end: t.handleEnd
                    }, (0, p.default)(!(e.distance && e.pressDelay), "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time."), t.state = {}, t
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(n, l.Component), s(n, [{
                    key: "getChildContext",
                    value: function() {
                        return {
                            manager: this.manager
                        }
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.getContainer,
                            r = t.useWindowAsScrollContainer,
                            i = this.props.contentWindow || window;
                        this.container = "function" == typeof n ? n(this.getWrappedInstance()) : (0, d.findDOMNode)(this), this.document = this.container.ownerDocument || document, this.scrollContainer = r ? this.document.body : this.container, this.contentWindow = "function" == typeof i ? i() : i;
                        var a = function(t) {
                            e.events.hasOwnProperty(t) && h.events[t].forEach(function(n) {
                                return e.container.addEventListener(n, e.events[t], !1)
                            })
                        };
                        for (var o in this.events) a(o)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this,
                            t = function(t) {
                                e.events.hasOwnProperty(t) && h.events[t].forEach(function(n) {
                                    return e.container.removeEventListener(n, e.events[t])
                                })
                            };
                        for (var n in this.events) t(n)
                    }
                }, {
                    key: "getEdgeOffset",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            top: 0,
                            left: 0
                        };
                        if (e) {
                            var n = {
                                top: t.top + e.offsetTop,
                                left: t.left + e.offsetLeft
                            };
                            return e.parentNode !== this.container ? this.getEdgeOffset(e.parentNode, n) : n
                        }
                    }
                }, {
                    key: "getOffset",
                    value: function(e) {
                        return {
                            x: e.touches ? e.touches[0].pageX : e.pageX,
                            y: e.touches ? e.touches[0].pageY : e.pageY
                        }
                    }
                }, {
                    key: "getLockPixelOffsets",
                    value: function() {
                        var e = this.props.lockOffset;
                        Array.isArray(e) || (e = [e, e]), (0, p.default)(2 === e.length, "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s", e);
                        var t = o(e, 2),
                            n = t[0],
                            r = t[1];
                        return [this.getLockPixelOffset(n), this.getLockPixelOffset(r)]
                    }
                }, {
                    key: "getLockPixelOffset",
                    value: function(e) {
                        var t = e,
                            n = e,
                            r = "px";
                        if ("string" == typeof e) {
                            var i = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(e);
                            (0, p.default)(null !== i, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', e), t = n = parseFloat(e), r = i[1]
                        }
                        return (0, p.default)(isFinite(t) && isFinite(n), "lockOffset value should be a finite. Given %s", e), "%" === r && (t = t * this.width / 100, n = n * this.height / 100), {
                            x: t,
                            y: n
                        }
                    }
                }, {
                    key: "updatePosition",
                    value: function(e) {
                        var t = this.props,
                            n = t.lockAxis,
                            r = t.lockToContainerEdges,
                            i = this.getOffset(e),
                            a = {
                                x: i.x - this.initialOffset.x,
                                y: i.y - this.initialOffset.y
                            };
                        if (a.y -= window.pageYOffset - this.initialWindowScroll.top, a.x -= window.pageXOffset - this.initialWindowScroll.left, this.translate = a, r) {
                            var s = this.getLockPixelOffsets(),
                                l = o(s, 2),
                                c = l[0],
                                u = l[1],
                                d = {
                                    x: this.width / 2 - c.x,
                                    y: this.height / 2 - c.y
                                },
                                p = {
                                    x: this.width / 2 - u.x,
                                    y: this.height / 2 - u.y
                                };
                            a.x = (0, h.limit)(this.minTranslate.x + d.x, this.maxTranslate.x - p.x, a.x), a.y = (0, h.limit)(this.minTranslate.y + d.y, this.maxTranslate.y - p.y, a.y)
                        }
                        "x" === n ? a.y = 0 : "y" === n && (a.x = 0), this.helper.style[h.vendorPrefix + "Transform"] = "translate3d(" + a.x + "px," + a.y + "px, 0)"
                    }
                }, {
                    key: "animateNodes",
                    value: function() {
                        var e = this.props,
                            t = e.transitionDuration,
                            n = e.hideSortableGhost,
                            r = this.manager.getOrderedRefs(),
                            i = this.scrollContainer.scrollLeft - this.initialScroll.left,
                            a = this.scrollContainer.scrollTop - this.initialScroll.top,
                            o = this.offsetEdge.left + this.translate.x + i,
                            s = this.offsetEdge.top + this.translate.y + a,
                            l = window.pageYOffset - this.initialWindowScroll.top,
                            c = window.pageXOffset - this.initialWindowScroll.left;
                        this.newIndex = null;
                        for (var u = 0, d = r.length; u < d; u++) {
                            var p = r[u].node,
                                f = p.sortableInfo.index,
                                g = p.offsetWidth,
                                m = p.offsetHeight,
                                v = {
                                    width: this.width > g ? g / 2 : this.width / 2,
                                    height: this.height > m ? m / 2 : this.height / 2
                                },
                                b = {
                                    x: 0,
                                    y: 0
                                },
                                y = r[u].edgeOffset;
                            y || (r[u].edgeOffset = y = this.getEdgeOffset(p));
                            var S = u < r.length - 1 && r[u + 1],
                                _ = u > 0 && r[u - 1];
                            S && !S.edgeOffset && (S.edgeOffset = this.getEdgeOffset(S.node)), f !== this.index ? (t && (p.style[h.vendorPrefix + "TransitionDuration"] = t + "ms"), this.axis.x ? this.axis.y ? f < this.index && (o + c - v.width <= y.left && s + l <= y.top + v.height || s + l + v.height <= y.top) ? (b.x = this.width + this.marginOffset.x, y.left + b.x > this.containerBoundingRect.width - v.width && (b.x = S.edgeOffset.left - y.left, b.y = S.edgeOffset.top - y.top), null === this.newIndex && (this.newIndex = f)) : f > this.index && (o + c + v.width >= y.left && s + l + v.height >= y.top || s + l + v.height >= y.top + m) && (b.x = -(this.width + this.marginOffset.x), y.left + b.x < this.containerBoundingRect.left + v.width && (b.x = _.edgeOffset.left - y.left, b.y = _.edgeOffset.top - y.top), this.newIndex = f) : f > this.index && o + c + v.width >= y.left ? (b.x = -(this.width + this.marginOffset.x), this.newIndex = f) : f < this.index && o + c <= y.left + v.width && (b.x = this.width + this.marginOffset.x, null == this.newIndex && (this.newIndex = f)) : this.axis.y && (f > this.index && s + l + v.height >= y.top ? (b.y = -(this.height + this.marginOffset.y), this.newIndex = f) : f < this.index && s + l <= y.top + v.height && (b.y = this.height + this.marginOffset.y, null == this.newIndex && (this.newIndex = f))), p.style[h.vendorPrefix + "Transform"] = "translate3d(" + b.x + "px," + b.y + "px,0)") : n && (this.sortableGhost = p, p.style.visibility = "hidden", p.style.opacity = 0)
                        }
                        null == this.newIndex && (this.newIndex = this.index)
                    }
                }, {
                    key: "getWrappedInstance",
                    value: function() {
                        return (0, p.default)(r.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"), this.refs.wrappedInstance
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = r.withRef ? "wrappedInstance" : null;
                        return c.default.createElement(e, a({
                            ref: t
                        }, (0, h.omit)(this.props, "contentWindow", "useWindowAsScrollContainer", "distance", "helperClass", "hideSortableGhost", "transitionDuration", "useDragHandle", "pressDelay", "pressThreshold", "shouldCancelStart", "onSortStart", "onSortMove", "onSortEnd", "axis", "lockAxis", "lockOffset", "lockToContainerEdges", "getContainer", "getHelperDimensions")))
                    }
                }]), n
            }(), t.displayName = (0, h.provideDisplayName)("sortableList", e), t.defaultProps = {
                axis: "y",
                transitionDuration: 300,
                pressDelay: 0,
                pressThreshold: 5,
                distance: 0,
                useWindowAsScrollContainer: !1,
                hideSortableGhost: !0,
                shouldCancelStart: function(e) {
                    if (-1 !== ["input", "textarea", "select", "option", "button"].indexOf(e.target.tagName.toLowerCase())) return !0
                },
                lockToContainerEdges: !1,
                lockOffset: "50%",
                getHelperDimensions: function(e) {
                    var t = e.node;
                    return {
                        width: t.offsetWidth,
                        height: t.offsetHeight
                    }
                }
            }, t.propTypes = {
                axis: u.default.oneOf(["x", "y", "xy"]),
                distance: u.default.number,
                lockAxis: u.default.string,
                helperClass: u.default.string,
                transitionDuration: u.default.number,
                contentWindow: u.default.any,
                onSortStart: u.default.func,
                onSortMove: u.default.func,
                onSortEnd: u.default.func,
                shouldCancelStart: u.default.func,
                pressDelay: u.default.number,
                useDragHandle: u.default.bool,
                useWindowAsScrollContainer: u.default.bool,
                hideSortableGhost: u.default.bool,
                lockToContainerEdges: u.default.bool,
                lockOffset: u.default.oneOfType([u.default.number, u.default.string, u.default.arrayOf(u.default.oneOfType([u.default.number, u.default.string]))]),
                getContainer: u.default.func,
                getHelperDimensions: u.default.func
            }, t.childContextTypes = {
                manager: u.default.object.isRequired
            }, n
        };
        var l = n("U7vG"),
            c = r(l),
            u = r(n("KSGD")),
            d = n("O27J"),
            p = r(n("crWv")),
            f = r(n("xKuy")),
            h = n("Vgej")
    },
    POb3: function(e, t, n) {
        var r = n("ICSD")(n("TQ3y"), "Map");
        e.exports = r
    },
    Q2wK: function(e, t, n) {
        var r = n("8AZL"),
            i = Math.max;
        e.exports = function(e, t, n) {
            return t = i(void 0 === t ? e.length - 1 : t, 0),
                function() {
                    for (var a = arguments, o = -1, s = i(a.length - t, 0), l = Array(s); ++o < s;) l[o] = a[t + o];
                    o = -1;
                    for (var c = Array(t + 1); ++o < t;) c[o] = a[o];
                    return c[t] = n(l), r(e, this, c)
                }
        }
    },
    Q6se: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TwoFactorAuthenticationSetting_CurrentUser"
                },
                variableDefinitions: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isEmailVerified"
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
                                            value: "isGlobalMod"
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
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
                end: 129
            }
        };
        n.loc.source = {
            body: "query TwoFactorAuthenticationSetting_CurrentUser {\ncurrentUser {\nid\nisEmailVerified\nroles {\nisGlobalMod\nisSiteAdmin\nisStaff\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Q7hp: function(e, t, n) {
        var r = n("uCi2");
        e.exports = function(e, t, n) {
            var i = null == e ? void 0 : r(e, t);
            return void 0 === i ? n : i
        }
    },
    Qp3N: function(e, t, n) {
        var r = n("NkRn"),
            i = n("1Yb9"),
            a = n("NGEn"),
            o = r ? r.isConcatSpreadable : void 0;
        e.exports = function(e) {
            return a(e) || i(e) || !!(o && e && e[o])
        }
    },
    RC0U: function(e, t) {},
    RGrk: function(e, t, n) {
        var r = n("dCZQ"),
            i = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            var t = this.__data__;
            return r ? void 0 !== t[e] : i.call(t, e)
        }
    },
    RfZv: function(e, t, n) {
        var r = n("SOZo"),
            i = n("IGcM");
        e.exports = function(e, t) {
            return null != e && i(e, t, r)
        }
    },
    Rh28: function(e, t) {
        var n = 9007199254740991;
        e.exports = function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
        }
    },
    S7p9: function(e, t) {
        e.exports = function(e) {
            return function(t) {
                return e(t)
            }
        }
    },
    SHWz: function(e, t, n) {
        var r = n("MoMe"),
            i = 1,
            a = Object.prototype.hasOwnProperty;
        e.exports = function(e, t, n, o, s, l) {
            var c = n & i,
                u = r(e),
                d = u.length;
            if (d != r(t).length && !c) return !1;
            for (var p = d; p--;) {
                var f = u[p];
                if (!(c ? f in t : a.call(t, f))) return !1
            }
            var h = l.get(e);
            if (h && l.get(t)) return h == t;
            var g = !0;
            l.set(e, t), l.set(t, e);
            for (var m = c; ++p < d;) {
                var v = e[f = u[p]],
                    b = t[f];
                if (o) var y = c ? o(b, v, f, t, e, l) : o(v, b, f, e, t, l);
                if (!(void 0 === y ? v === b || s(v, b, n, o, l) : y)) {
                    g = !1;
                    break
                }
                m || (m = "constructor" == f)
            }
            if (g && !m) {
                var S = e.constructor,
                    _ = t.constructor;
                S != _ && "constructor" in e && "constructor" in t && !("function" == typeof S && S instanceof S && "function" == typeof _ && _ instanceof _) && (g = !1)
            }
            return l.delete(e), l.delete(t), g
        }
    },
    SOZo: function(e, t) {
        e.exports = function(e, t) {
            return null != e && t in Object(e)
        }
    },
    "T/bE": function(e, t, n) {
        function r(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        var i = n("94sX"),
            a = n("ue/d"),
            o = n("eVIm"),
            s = n("RGrk"),
            l = n("Z2pD");
        r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = o, r.prototype.has = s, r.prototype.set = l, e.exports = r
    },
    TQ3y: function(e, t, n) {
        var r = n("blYT"),
            i = "object" == typeof self && self && self.Object === Object && self,
            a = r || i || Function("return this")();
        e.exports = a
    },
    TbkX: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "BrowserPushNotifications_AddBrowserPushSubscription"
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
                                value: "AddBrowserPushSubscriptionInput"
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
                            value: "addBrowserPushSubscription"
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
                                    value: "browserPushSubscriptionID"
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
                end: 178
            }
        };
        n.loc.source = {
            body: "mutation BrowserPushNotifications_AddBrowserPushSubscription($input: AddBrowserPushSubscriptionInput!) {\naddBrowserPushSubscription(input: $input) {\nbrowserPushSubscriptionID\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Tt3k: function(e, t, n) {
        "use strict";
        t.b = function(e, t, n) {
            var r = new FileReader;
            r.onloadend = function() {
                n && n(r.result)
            }, r.readAsDataURL(e);
            var i = new FileReader;
            i.onloadend = function() {
                t(i.result)
            }, i.readAsArrayBuffer(e)
        }, t.a = function(e) {
            var t = "";
            if (e && e.name) {
                var n = e.name;
                t = n.slice((Math.max(0, n.lastIndexOf(".")) || 1 / 0) + 1)
            }
            return "" === t && (t = "png"), t
        }
    },
    UbVv: function(e, t, n) {
        "use strict";
        t.a = function() {
            return window.Notification && "denied" === window.Notification.permission
        }, t.b = function() {
            return window.Notification && "granted" === window.Notification.permission
        }
    },
    Ubhr: function(e, t, n) {
        var r = n("6MiT"),
            i = 1 / 0;
        e.exports = function(e) {
            if ("string" == typeof e || r(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -i ? "-0" : t
        }
    },
    UnEC: function(e, t) {
        e.exports = function(e) {
            return null != e && "object" == typeof e
        }
    },
    UnLw: function(e, t, n) {
        var r = /^\./,
            i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            a = /\\(\\)?/g,
            o = n("fMqj")(function(e) {
                var t = [];
                return r.test(e) && t.push(""), e.replace(i, function(e, n, r, i) {
                    t.push(r ? i.replace(a, "$1") : n || e)
                }), t
            });
        e.exports = o
    },
    Uz1a: function(e, t, n) {
        var r = n("bJWQ"),
            i = n("FhcP"),
            a = n("EHRO"),
            o = n("SHWz"),
            s = n("gHOb"),
            l = n("NGEn"),
            c = n("ggOT"),
            u = n("YsVG"),
            d = 1,
            p = "[object Arguments]",
            f = "[object Array]",
            h = "[object Object]",
            g = Object.prototype.hasOwnProperty;
        e.exports = function(e, t, n, m, v, b) {
            var y = l(e),
                S = l(t),
                _ = y ? f : s(e),
                E = S ? f : s(t),
                k = (_ = _ == p ? h : _) == h,
                w = (E = E == p ? h : E) == h,
                x = _ == E;
            if (x && c(e)) {
                if (!c(t)) return !1;
                y = !0, k = !1
            }
            if (x && !k) return b || (b = new r), y || u(e) ? i(e, t, n, m, v, b) : a(e, t, _, n, m, v, b);
            if (!(n & d)) {
                var O = k && g.call(e, "__wrapped__"),
                    C = w && g.call(t, "__wrapped__");
                if (O || C) {
                    var N = O ? e.value() : e,
                        j = C ? t.value() : t;
                    return b || (b = new r), v(N, j, n, m, b)
                }
            }
            return !!x && (b || (b = new r), o(e, t, n, m, v, b))
        }
    },
    Vgej: function(e, t, n) {
        "use strict";

        function r(e) {
            return "px" === e.substr(-2) ? parseFloat(e) : 0
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.arrayMove = function(e, t, n) {
            var r = e.slice(0);
            if (n >= r.length)
                for (var i = n - r.length; 1 + i--;) r.push(void 0);
            return r.splice(n, 0, r.splice(t, 1)[0]), r
        }, t.omit = function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return Object.keys(e).reduce(function(t, r) {
                return -1 === n.indexOf(r) && (t[r] = e[r]), t
            }, {})
        }, t.closest = function(e, t) {
            for (; e;) {
                if (t(e)) return e;
                e = e.parentNode
            }
        }, t.limit = function(e, t, n) {
            return n < e ? e : n > t ? t : n
        }, t.getElementMargin = function(e) {
            var t = window.getComputedStyle(e);
            return {
                top: r(t.marginTop),
                right: r(t.marginRight),
                bottom: r(t.marginBottom),
                left: r(t.marginLeft)
            }
        }, t.provideDisplayName = function(e, t) {
            var n = t.displayName || t.name;
            return n ? e + "(" + n + ")" : e
        };
        t.events = {
            start: ["touchstart", "mousedown"],
            move: ["touchmove", "mousemove"],
            end: ["touchend", "touchcancel", "mouseup"]
        }, t.vendorPrefix = function() {
            if ("undefined" == typeof window || "undefined" == typeof document) return "";
            var e = window.getComputedStyle(document.documentElement, "") || ["-moz-hidden-iframe"],
                t = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1];
            switch (t) {
                case "ms":
                    return "ms";
                default:
                    return t && t.length ? t[0].toUpperCase() + t.substr(1) : ""
            }
        }()
    },
    W529: function(e, t, n) {
        var r = n("f931")(Object.keys, Object);
        e.exports = r
    },
    W6ca: function(e, t, n) {
        "use strict";
        t.c = function(e, t) {
            if (!t) throw new Error("Attempted to upload an empty file object.");
            var n = decodeURI(e);
            return fetch(n, {
                method: "PUT",
                body: new Blob([t])
            })
        }, t.b = function(e, t, n) {
            if (void 0 === n) throw new Error("No default avatar selected.");
            return fetch(i.a.krakenEndpoint + "/users/" + e + "/default_images?client_id=" + i.a.authClientID + "&api_version=" + i.a.defaultAPIVersion, {
                method: "PUT",
                headers: {
                    Authorization: "OAuth " + t,
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    default_profile_image: a.b[n].id
                })
            })
        }, t.a = function(e, t, n, a) {
            return r.__awaiter(this, void 0, void 0, function() {
                var o;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, fetch(i.a.krakenEndpoint + "/users/" + e + "/upload_image?client_id=" + i.a.authClientID + "&api_version=" + i.a.defaultAPIVersion + "&image_type=" + n + "&format=" + a, {
                                method: "POST",
                                headers: {
                                    Authorization: "OAuth " + t
                                }
                            })];
                        case 1:
                            return o = r.sent(), [2, o.json()]
                    }
                })
            })
        };
        var r = n("TToO"),
            i = n("6sO2"),
            a = n("puy8")
    },
    WFiI: function(e, t) {
        e.exports = function(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(e, r) {
                n[++t] = [r, e]
            }), n
        }
    },
    WHce: function(e, t, n) {
        var r = n("037f"),
            i = n("Zk5a")(r);
        e.exports = i
    },
    WYUS: function(e, t) {},
    WaOj: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_ChannelVideo_ChatRulesTextArea"
                },
                variableDefinitions: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "chatSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "rules"
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
                end: 91
            }
        };
        n.loc.source = {
            body: "query Settings_ChannelVideo_ChatRulesTextArea {\ncurrentUser {\nid\nchatSettings {\nrules\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    WxI4: function(e, t) {
        e.exports = function() {
            this.__data__ = [], this.size = 0
        }
    },
    YDHx: function(e, t, n) {
        function r(e, t, n, o, s) {
            return e === t || (null == e || null == t || !a(e) && !a(t) ? e != e && t != t : i(e, t, n, o, r, s))
        }
        var i = n("Uz1a"),
            a = n("UnEC");
        e.exports = r
    },
    YeCl: function(e, t, n) {
        function r(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        var i = n("CW5P"),
            a = n("A9mX"),
            o = n("v8Dt"),
            s = n("agim"),
            l = n("Dv2r");
        r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = o, r.prototype.has = s, r.prototype.set = l, e.exports = r
    },
    YkxI: function(e, t, n) {
        var r = n("wSKX"),
            i = n("Q2wK"),
            a = n("WHce");
        e.exports = function(e, t) {
            return a(i(e, t, r), e + "")
        }
    },
    YsVG: function(e, t, n) {
        var r = n("z4hc"),
            i = n("S7p9"),
            a = n("Dc0G"),
            o = a && a.isTypedArray,
            s = o ? i(o) : r;
        e.exports = s
    },
    Z2pD: function(e, t, n) {
        var r = n("dCZQ"),
            i = "__lodash_hash_undefined__";
        e.exports = function(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? i : t, this
        }
    },
    ZGh9: function(e, t) {
        var n = 9007199254740991,
            r = /^(?:0|[1-9]\d*)$/;
        e.exports = function(e, t) {
            return !!(t = null == t ? n : t) && ("number" == typeof e || r.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
    },
    ZT2e: function(e, t, n) {
        var r = n("o2mx");
        e.exports = function(e) {
            return null == e ? "" : r(e)
        }
    },
    Zk5a: function(e, t) {
        var n = 800,
            r = 16,
            i = Date.now;
        e.exports = function(e) {
            var t = 0,
                a = 0;
            return function() {
                var o = i(),
                    s = r - (o - a);
                if (a = o, s > 0) {
                    if (++t >= n) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
    },
    aCM0: function(e, t, n) {
        var r = n("NkRn"),
            i = n("uLhX"),
            a = n("+66z"),
            o = "[object Null]",
            s = "[object Undefined]",
            l = r ? r.toStringTag : void 0;
        e.exports = function(e) {
            return null == e ? void 0 === e ? s : o : l && l in Object(e) ? i(e) : a(e)
        }
    },
    aQOO: function(e, t) {
        e.exports = function(e) {
            return this.__data__.has(e)
        }
    },
    agim: function(e, t, n) {
        var r = n("pTUa");
        e.exports = function(e) {
            return r(this, e).has(e)
        }
    },
    ar1V: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_ChannelVideo_BlockHyperlinksToggle"
                },
                variableDefinitions: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "chatSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "blockLinks"
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
                end: 100
            }
        };
        n.loc.source = {
            body: "query Settings_ChannelVideo_BlockHyperlinksToggle {\ncurrentUser {\nid\nchatSettings {\nblockLinks\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    bGc4: function(e, t, n) {
        var r = n("gGqR"),
            i = n("Rh28");
        e.exports = function(e) {
            return null != e && i(e.length) && !r(e)
        }
    },
    bIbi: function(e, t, n) {
        var r = n("ICSD")(n("TQ3y"), "WeakMap");
        e.exports = r
    },
    bIjD: function(e, t, n) {
        var r = n("NGEn"),
            i = n("hIPy"),
            a = n("UnLw"),
            o = n("ZT2e");
        e.exports = function(e, t) {
            return r(e) ? e : i(e, t) ? [e] : a(o(e))
        }
    },
    bJWQ: function(e, t, n) {
        function r(e) {
            var t = this.__data__ = new i(e);
            this.size = t.size
        }
        var i = n("duB3"),
            a = n("KmWZ"),
            o = n("NqZt"),
            s = n("E4Hj"),
            l = n("G2xm"),
            c = n("zpVT");
        r.prototype.clear = a, r.prototype.delete = o, r.prototype.get = s, r.prototype.has = l, r.prototype.set = c, e.exports = r
    },
    bO0Y: function(e, t, n) {
        var r = n("ICSD")(n("TQ3y"), "Promise");
        e.exports = r
    },
    blYT: function(e, t, n) {
        (function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n
        }).call(t, n("DuR2"))
    },
    cdq7: function(e, t) {
        e.exports = function(e, t, n, r) {
            for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;)
                if (t(e[a], a, e)) return a;
            return -1
        }
    },
    cumT: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SettingsPrimePage_CurrentUser"
                },
                variableDefinitions: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
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
                end: 95
            }
        };
        n.loc.source = {
            body: "query SettingsPrimePage_CurrentUser {\ncurrentUser {\nid\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "d+aQ": function(e, t, n) {
        var r = n("hbAh"),
            i = n("16tV"),
            a = n("sJvV");
        e.exports = function(e) {
            var t = i(e);
            return 1 == t.length && t[0][2] ? a(t[0][0], t[0][1]) : function(n) {
                return n === e || r(n, e, t)
            }
        }
    },
    d4US: function(e, t, n) {
        var r = n("ICSD")(n("TQ3y"), "DataView");
        e.exports = r
    },
    dCZQ: function(e, t, n) {
        var r = n("ICSD")(Object, "create");
        e.exports = r
    },
    dFpP: function(e, t, n) {
        var r = n("imBK"),
            i = Array.prototype.splice;
        e.exports = function(e) {
            var t = this.__data__,
                n = r(t, e);
            return !(n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0))
        }
    },
    deUO: function(e, t, n) {
        var r = n("imBK");
        e.exports = function(e, t) {
            var n = this.__data__,
                i = r(n, e);
            return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
        }
    },
    dmQx: function(e, t) {
        e.exports = function(e, t) {
            return e.has(t)
        }
    },
    duB3: function(e, t, n) {
        function r(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        var i = n("WxI4"),
            a = n("dFpP"),
            o = n("JBvZ"),
            s = n("2Hvv"),
            l = n("deUO");
        r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = o, r.prototype.has = s, r.prototype.set = l, e.exports = r
    },
    eFps: function(e, t, n) {
        var r = n("+gg+"),
            i = function() {
                var e = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();
        e.exports = function(e) {
            return !!i && i in e
        }
    },
    "eG8/": function(e, t) {
        e.exports = function(e) {
            return function(t) {
                return null == t ? void 0 : t[e]
            }
        }
    },
    eHwr: function(e, t, n) {
        var r = n("JyYQ"),
            i = n("bGc4"),
            a = n("ktak");
        e.exports = function(e) {
            return function(t, n, o) {
                var s = Object(t);
                if (!i(t)) {
                    var l = r(n, 3);
                    t = a(t), n = function(e) {
                        return l(s[e], e, s)
                    }
                }
                var c = e(t, n, o);
                return c > -1 ? s[l ? t[c] : c] : void 0
            }
        }
    },
    eKBv: function(e, t, n) {
        var r = n("YDHx"),
            i = n("Q7hp"),
            a = n("RfZv"),
            o = n("hIPy"),
            s = n("tO4o"),
            l = n("sJvV"),
            c = n("Ubhr"),
            u = 1,
            d = 2;
        e.exports = function(e, t) {
            return o(e) && s(t) ? l(c(e), t) : function(n) {
                var o = i(n, e);
                return void 0 === o && o === t ? a(n, e) : r(t, o, u | d)
            }
        }
    },
    eVIm: function(e, t, n) {
        var r = n("dCZQ"),
            i = "__lodash_hash_undefined__",
            a = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            var t = this.__data__;
            if (r) {
                var n = t[e];
                return n === i ? void 0 : n
            }
            return a.call(t, e) ? t[e] : void 0
        }
    },
    ebTC: function(e, t, n) {
        "use strict";
        var r = n("RH2O"),
            i = n("2KeS"),
            a = n("V5M+"),
            o = n("Aj/L"),
            s = n("TToO"),
            l = n("U7vG"),
            c = n("6sO2"),
            u = n("J8WN"),
            d = n("+8VM"),
            p = n("7vx8"),
            f = n("HZww"),
            h = n("4Q9N"),
            g = n("Tt3k"),
            m = n("W6ca"),
            v = n("xgnX"),
            b = n("CSlQ"),
            y = n("Odds"),
            S = (n("+Aaf"), n("0H+u")),
            _ = ["image/*"],
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imageUpdated: !1,
                        loading: !1
                    }, t.currentImage = null, t.logger = c.i.withCategory("UserImageUploader"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            t.setState({
                                loading: !0
                            }), n = e[0];
                            var r = Object(g.a)(n),
                                i = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(i, 10) > 10 ? t.setState({
                                statusMessage: v.b.BadSizeError
                            }) : Object(g.b)(n, function(e) {
                                return s.__awaiter(t, void 0, void 0, function() {
                                    var t, n, i, a, o = this;
                                    return s.__generator(this, function(s) {
                                        switch (s.label) {
                                            case 0:
                                                this.currentImage = e, s.label = 1;
                                            case 1:
                                                return s.trys.push([1, 3, , 4]), [4, Object(m.a)(this.props.userID, this.props.authToken, this.props.imageType, r)];
                                            case 2:
                                                return t = s.sent(), n = t.upload_url, i = t.upload_id, [3, 4];
                                            case 3:
                                                return a = s.sent(), this.logger.error(a, "Request for upload ID failed to get expected response from server."), this.setState({
                                                    statusMessage: v.b.UnexpectedError
                                                }), [2];
                                            case 4:
                                                return this.unsubscribe = c.j.subscribe({
                                                    topic: Object(f.g)(this.props.userID),
                                                    success: function() {
                                                        try {
                                                            Object(m.c)(n, o.currentImage)
                                                        } catch (e) {
                                                            o.logger.error(e, "Image upload failed."), o.unsubscribe(), o.setState({
                                                                statusMessage: v.b.UnexpectedError,
                                                                loading: !1
                                                            })
                                                        }
                                                        o.timeoutHandle = setTimeout(function() {
                                                            return o.handlePubSubTimeout()
                                                        }, 1e4)
                                                    },
                                                    failure: function() {
                                                        o.setState({
                                                            statusMessage: v.b.UnexpectedError,
                                                            loading: !1
                                                        })
                                                    },
                                                    onMessage: function(e) {
                                                        if (e.upload_id === i) {
                                                            clearTimeout(o.timeoutHandle);
                                                            var t = null;
                                                            e.status === v.a.Success ? t = v.b.Success : e.status === v.a.BadSize ? (t = v.b.BadSizeError, o.currentImage = null) : e.status === v.a.NonImage ? (t = v.b.NonImageError, o.currentImage = null) : e.status === v.a.WrongFormat ? (t = v.b.WrongFormatError, o.currentImage = null) : (t = v.b.UnexpectedError, o.currentImage = null), o.unsubscribe && o.unsubscribe(), o.setState({
                                                                statusMessage: t,
                                                                loading: !1,
                                                                imageUpdated: e.status === v.a.Success
                                                            })
                                                        }
                                                    }
                                                }), [2]
                                        }
                                    })
                                })
                            })
                        } else t.setState({
                            statusMessage: v.b.ImageNotSelected
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: v.b.TimeoutError
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    void 0 !== this.unsubscribe && this.unsubscribe(), this.timeoutHandle && clearTimeout(this.timeoutHandle)
                }, t.prototype.componentDidUpdate = function() {
                    var e = this;
                    this.state.imageUpdated && setTimeout(function() {
                        e.props.data && e.props.data.refetch(), e.setState({
                            imageUpdated: !1
                        }), e.props.closeModal()
                    }, 1e3)
                }, t.prototype.render = function() {
                    var e = this.props.login;
                    this.props.displayName && (e = this.props.displayName);
                    var t = Object(c.d)("Editing profile banner for {userName}", {
                        userName: e
                    }, "UserImageUploader");
                    this.props.imageType === h.a.ChannelOfflineImage && (t = Object(c.d)("Editing video banner for {userName}", {
                        userName: e
                    }, "UserImageUploader"));
                    var n = null;
                    if (this.state.loading) n = l.createElement(y._2, {
                        className: "user-image-uploader__upload-svg--anim-fill",
                        position: y._9.Relative,
                        "data-test-selector": "loading-status"
                    }, l.createElement(y._15, {
                        asset: y._16.Upload,
                        type: y._17.Brand,
                        width: 99,
                        height: 76
                    }));
                    else {
                        var r = Object(c.d)("Recommended image size: 1200x380 and less than 10MB.", "UserImageUploader");
                        this.props.imageType === h.a.ChannelOfflineImage && (r = Object(c.d)("Recommended image size: 1920x1080 and less than 10MB.", "UserImageUploader")), n = l.createElement(y._2, null, l.createElement(y._2, {
                            className: "user-image-uploader__upload-info"
                        }, l.createElement(y._2, null, l.createElement(y._15, {
                            asset: y._16.Plus,
                            type: y._17.Alt2,
                            height: 20,
                            width: 20
                        })), l.createElement(y._35, {
                            type: y._40.H3,
                            color: y.I.Alt2,
                            fontSize: y.R.Size4
                        }, Object(c.d)("Upload a Photo", "User Image Uploader"))), l.createElement(y._2, {
                            className: "user-image-uploader__upload-recommendation",
                            position: y._9.Absolute,
                            textAlign: y._36.Left,
                            attachLeft: !0,
                            attachBottom: !0,
                            margin: {
                                left: 3,
                                bottom: 1
                            }
                        }, l.createElement(y._35, {
                            type: y._40.H6,
                            color: y.I.Alt2,
                            fontSize: y.R.Size8,
                            align: y._50.TextBottom
                        }, r)))
                    }
                    var i = null;
                    this.props.showCloser && (i = l.createElement(d.a, null));
                    var a = null;
                    if (null !== this.state.statusMessage) {
                        var o = Object(v.c)(this.state.statusMessage);
                        a = l.createElement(y._6, {
                            label: o.message,
                            type: o.type
                        })
                    }
                    return l.createElement(y._2, {
                        className: "user-image-uploader",
                        position: y._9.Relative,
                        fullHeight: !0
                    }, l.createElement(y._25, {
                        className: "user-image-uploader__background-container",
                        background: y.m.Base,
                        fullWidth: !0
                    }, l.createElement(y._2, {
                        padding: 2,
                        display: y.N.InlineBlock,
                        position: y._9.Relative,
                        textAlign: y._36.Center,
                        fullWidth: !0
                    }, l.createElement(y._25, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(y._35, {
                        type: y._40.H3,
                        fontSize: y.R.Size4
                    }, t)), l.createElement(y._2, {
                        className: "user-image-uploader__upload-container",
                        display: y.N.InlineBlock,
                        position: y._9.Relative,
                        textAlign: y._36.Center,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(y._2, {
                        className: "user-image-uploader__upload",
                        display: y.N.InlineBlock,
                        position: y._9.Relative,
                        textAlign: y._36.Center
                    }, l.createElement(u.a, {
                        allowedFileTypes: _,
                        onFilesSubmitted: this.onImageInputChange
                    }, n))), l.createElement(y._25, {
                        "data-test-selector": "status-message",
                        fontSize: y.R.Size4,
                        position: y._9.Relative,
                        textAlign: y._36.Center,
                        className: "user-image-uploader__status-message"
                    }, a))), i)
                }, t = s.__decorate([Object(p.a)(S, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(l.Component),
            k = Object(b.d)("User Image Upload")(E),
            w = Object(r.b)(function(e) {
                return {
                    authToken: Object(o.a)(e)
                }
            }, function(e, t) {
                return Object(i.b)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(a.c)()
                    }
                }, e)
            })(k);
        n.d(t, "a", function() {
            return w
        })
    },
    eppJ: function(e, t) {},
    f931: function(e, t) {
        e.exports = function(e, t) {
            return function(n) {
                return e(t(n))
            }
        }
    },
    fMqj: function(e, t, n) {
        var r = n("zGZ6"),
            i = 500;
        e.exports = function(e) {
            var t = r(e, function(e) {
                    return n.size === i && n.clear(), e
                }),
                n = t.cache;
            return t
        }
    },
    "g+dK": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "GlobalNotificationSettings_SetNotificationSetting"
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
                                value: "SetNotificationSettingInput"
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
                            value: "setNotificationSetting"
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
                                    value: "settingState"
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
                end: 155
            }
        };
        n.loc.source = {
            body: "mutation GlobalNotificationSettings_SetNotificationSetting($input: SetNotificationSettingInput!) {\nsetNotificationSetting(input: $input) {\nsettingState\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    gGqR: function(e, t, n) {
        var r = n("aCM0"),
            i = n("yCNF"),
            a = "[object AsyncFunction]",
            o = "[object Function]",
            s = "[object GeneratorFunction]",
            l = "[object Proxy]";
        e.exports = function(e) {
            if (!i(e)) return !1;
            var t = r(e);
            return t == o || t == s || t == a || t == l
        }
    },
    gHOb: function(e, t, n) {
        var r = n("d4US"),
            i = n("POb3"),
            a = n("bO0Y"),
            o = n("5N57"),
            s = n("bIbi"),
            l = n("aCM0"),
            c = n("Ai/T"),
            u = c(r),
            d = c(i),
            p = c(a),
            f = c(o),
            h = c(s),
            g = l;
        (r && "[object DataView]" != g(new r(new ArrayBuffer(1))) || i && "[object Map]" != g(new i) || a && "[object Promise]" != g(a.resolve()) || o && "[object Set]" != g(new o) || s && "[object WeakMap]" != g(new s)) && (g = function(e) {
            var t = l(e),
                n = "[object Object]" == t ? e.constructor : void 0,
                r = n ? c(n) : "";
            if (r) switch (r) {
                case u:
                    return "[object DataView]";
                case d:
                    return "[object Map]";
                case p:
                    return "[object Promise]";
                case f:
                    return "[object Set]";
                case h:
                    return "[object WeakMap]"
            }
            return t
        }), e.exports = g
    },
    ggOT: function(e, t, n) {
        (function(e) {
            var r = n("TQ3y"),
                i = n("gwcX"),
                a = "object" == typeof t && t && !t.nodeType && t,
                o = a && "object" == typeof e && e && !e.nodeType && e,
                s = o && o.exports === a ? r.Buffer : void 0,
                l = (s ? s.isBuffer : void 0) || i;
            e.exports = l
        }).call(t, n("3IRH")(e))
    },
    goep: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ProfileImageSetting"
                },
                variableDefinitions: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "login"
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
                                        value: "300"
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
                end: 94
            }
        };
        n.loc.source = {
            body: "query ProfileImageSetting {\ncurrentUser {\nid\nlogin\ndisplayName\nprofileImageURL(width: 300)\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    gpZ8: function(e, t) {
        e.exports = function(e, t) {
            var n = e.length;
            for (e.sort(t); n--;) e[n] = e[n].value;
            return e
        }
    },
    gwcX: function(e, t) {
        e.exports = function() {
            return !1
        }
    },
    hIPy: function(e, t, n) {
        var r = n("NGEn"),
            i = n("6MiT"),
            a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            o = /^\w*$/;
        e.exports = function(e, t) {
            if (r(e)) return !1;
            var n = typeof e;
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !i(e)) || o.test(e) || !a.test(e) || null != t && e in Object(t)
        }
    },
    hPJb: function(e, t) {},
    hRPz: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SettingsTurboPage"
                },
                variableDefinitions: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasTurbo"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
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
                end: 92
            }
        };
        n.loc.source = {
            body: "query SettingsTurboPage {\ncurrentUser {\nid\nhasPrime\nhasTurbo\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    hbAh: function(e, t, n) {
        var r = n("bJWQ"),
            i = n("YDHx"),
            a = 1,
            o = 2;
        e.exports = function(e, t, n, s) {
            var l = n.length,
                c = l,
                u = !s;
            if (null == e) return !c;
            for (e = Object(e); l--;) {
                var d = n[l];
                if (u && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1
            }
            for (; ++l < c;) {
                var p = (d = n[l])[0],
                    f = e[p],
                    h = d[1];
                if (u && d[2]) {
                    if (void 0 === f && !(p in e)) return !1
                } else {
                    var g = new r;
                    if (s) var m = s(f, h, p, e, t, g);
                    if (!(void 0 === m ? i(h, f, a | o, s, g) : m)) return !1
                }
            }
            return !0
        }
    },
    i1sU: function(e, t) {},
    i61F: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.arrayMove = t.sortableHandle = t.sortableElement = t.sortableContainer = t.SortableHandle = t.SortableElement = t.SortableContainer = void 0;
        var i = n("Vgej");
        Object.defineProperty(t, "arrayMove", {
            enumerable: !0,
            get: function() {
                return i.arrayMove
            }
        });
        var a = r(n("P/Wu")),
            o = r(n("yauq")),
            s = r(n("tslQ"));
        t.SortableContainer = a.default, t.SortableElement = o.default, t.SortableHandle = s.default, t.sortableContainer = a.default, t.sortableElement = o.default, t.sortableHandle = s.default
    },
    iL3P: function(e, t, n) {
        var r = n("eG8/"),
            i = n("3Did"),
            a = n("hIPy"),
            o = n("Ubhr");
        e.exports = function(e) {
            return a(e) ? r(o(e)) : i(e)
        }
    },
    iOZM: function(e, t) {},
    imBK: function(e, t, n) {
        var r = n("22B7");
        e.exports = function(e, t) {
            for (var n = e.length; n--;)
                if (r(e[n][0], t)) return n;
            return -1
        }
    },
    "j7/Y": function(e, t, n) {
        "use strict";

        function r(e) {
            return function(t) {
                var n = function(n) {
                    function r(t) {
                        var r = n.call(this, t) || this;
                        return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                            if (!(r.tracked || e.skip && e.skip(r.props))) {
                                r.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(r.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, r.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var a = r.referenceTracking,
                                    o = a.content,
                                    s = a.medium,
                                    c = a.content_index;
                                l.n.tracking.trackPageview(i.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, l.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
                    }
                    return i.__extends(r, n), r.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, r.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, r.prototype.render = function() {
                        return o.createElement(t, i.__assign({}, this.props))
                    }, r.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? a.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var r = "",
                                i = a.stringify(t);
                            i.length > 0 && (r = "?" + i), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: r
                            })
                        }
                        return n
                    }, r
                }(o.Component);
                return Object(s.f)(n)
            }
        }
        var i = n("TToO"),
            a = n("OAwv"),
            o = n("U7vG"),
            s = n("F8kA"),
            l = n("6sO2");
        n.d(t, "a", function() {
            return r
        })
    },
    "kbi+": function(e, t, n) {
        var r = n("eHwr")(n("KgVm"));
        e.exports = r
    },
    kqTE: function(e, t, n) {
        "use strict";
        var r = n("U7vG"),
            i = function(e) {
                var t = r.Children.only(e.children);
                return r.cloneElement(t, {
                    "data-selectable": !0,
                    tabIndex: -1
                })
            };
        n.d(t, "a", function() {
            return i
        })
    },
    ktak: function(e, t, n) {
        var r = n("7e4z"),
            i = n("/GnY"),
            a = n("bGc4");
        e.exports = function(e) {
            return a(e) ? r(e) : i(e)
        }
    },
    kxzG: function(e, t, n) {
        var r = n("yCNF"),
            i = n("6MiT"),
            a = NaN,
            o = /^\s+|\s+$/g,
            s = /^[-+]0x[0-9a-f]+$/i,
            l = /^0b[01]+$/i,
            c = /^0o[0-7]+$/i,
            u = parseInt;
        e.exports = function(e) {
            if ("number" == typeof e) return e;
            if (i(e)) return a;
            if (r(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = r(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(o, "");
            var n = l.test(e);
            return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? a : +e
        }
    },
    "l+ac": function(e, t) {},
    l9Lx: function(e, t, n) {
        var r = n("lb6C"),
            i = n("C0hh"),
            a = Object.prototype.propertyIsEnumerable,
            o = Object.getOwnPropertySymbols,
            s = o ? function(e) {
                return null == e ? [] : (e = Object(e), r(o(e), function(t) {
                    return a.call(e, t)
                }))
            } : i;
        e.exports = s
    },
    lb6C: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, i = 0, a = []; ++n < r;) {
                var o = e[n];
                t(o, n, e) && (a[i++] = o)
            }
            return a
        }
    },
    mTAn: function(e, t) {
        e.exports = function(e, t) {
            return null == e ? void 0 : e[t]
        }
    },
    mVHD: function(e, t) {},
    mgnk: function(e, t, n) {
        var r = n("aCM0"),
            i = n("UnEC"),
            a = "[object Arguments]";
        e.exports = function(e) {
            return i(e) && r(e) == a
        }
    },
    nbsL: function(e, t, n) {
        var r = n("6MiT");
        e.exports = function(e, t) {
            if (e !== t) {
                var n = void 0 !== e,
                    i = null === e,
                    a = e == e,
                    o = r(e),
                    s = void 0 !== t,
                    l = null === t,
                    c = t == t,
                    u = r(t);
                if (!l && !u && !o && e > t || o && s && c && !l && !u || i && s && c || !n && c || !a) return 1;
                if (!i && !o && !u && e < t || u && n && a && !i && !o || l && n && a || !s && a || !c) return -1
            }
            return 0
        }
    },
    nmDn: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UserProfileEditor"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
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
                            value: "user"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "login"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "login"
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
                                    value: "login"
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
                                        value: "70"
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
                end: 104
            }
        };
        n.loc.source = {
            body: "query UserProfileEditor($login: String!) {\nuser(login: $login) {\nid\nlogin\nprofileImageURL(width: 70)\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    nq6q: function(e, t) {},
    o2mx: function(e, t, n) {
        function r(e) {
            if ("string" == typeof e) return e;
            if (o(e)) return a(e, r) + "";
            if (s(e)) return u ? u.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -l ? "-0" : t
        }
        var i = n("NkRn"),
            a = n("Hxdr"),
            o = n("NGEn"),
            s = n("6MiT"),
            l = 1 / 0,
            c = i ? i.prototype : void 0,
            u = c ? c.toString : void 0;
        e.exports = r
    },
    octw: function(e, t) {
        e.exports = function(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(e) {
                n[++t] = e
            }), n
        }
    },
    p0bc: function(e, t, n) {
        var r = n("ICSD"),
            i = function() {
                try {
                    var e = r(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch (e) {}
            }();
        e.exports = i
    },
    pQJ6: function(e, t, n) {
        var r = n("bGc4");
        e.exports = function(e, t) {
            return function(n, i) {
                if (null == n) return n;
                if (!r(n)) return e(n, i);
                for (var a = n.length, o = t ? a : -1, s = Object(n);
                    (t ? o-- : ++o < a) && !1 !== i(s[o], o, s););
                return n
            }
        }
    },
    pTUa: function(e, t, n) {
        var r = n("/I3N");
        e.exports = function(e, t) {
            var n = e.__data__;
            return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }
    },
    qwTf: function(e, t, n) {
        var r = n("TQ3y").Uint8Array;
        e.exports = r
    },
    rpnb: function(e, t, n) {
        var r = n("tHks")();
        e.exports = r
    },
    sBat: function(e, t, n) {
        var r = n("kxzG"),
            i = 1 / 0,
            a = 1.7976931348623157e308;
        e.exports = function(e) {
            if (!e) return 0 === e ? e : 0;
            if ((e = r(e)) === i || e === -i) return (e < 0 ? -1 : 1) * a;
            return e == e ? e : 0
        }
    },
    sJvV: function(e, t) {
        e.exports = function(e, t) {
            return function(n) {
                return null != n && n[e] === t && (void 0 !== t || e in Object(n))
            }
        }
    },
    t4xU: function(e, t) {},
    tHks: function(e, t) {
        e.exports = function(e) {
            return function(t, n, r) {
                for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
                    var l = o[e ? s : ++i];
                    if (!1 === n(a[l], l, a)) break
                }
                return t
            }
        }
    },
    tL94: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ProfileBannerSetting"
                },
                variableDefinitions: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "login"
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
                                    value: "bannerImageURL"
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
                end: 82
            }
        };
        n.loc.source = {
            body: "query ProfileBannerSetting {\ncurrentUser {\nid\nlogin\ndisplayName\nbannerImageURL\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    tO4o: function(e, t, n) {
        var r = n("yCNF");
        e.exports = function(e) {
            return e == e && !r(e)
        }
    },
    tslQ: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();
        t.default = function(e) {
            var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                withRef: !1
            };
            return n = t = function(t) {
                function n() {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(n, o.Component), a(n, [{
                    key: "componentDidMount",
                    value: function() {
                        (0, l.findDOMNode)(this).sortableHandle = !0
                    }
                }, {
                    key: "getWrappedInstance",
                    value: function() {
                        return (0, c.default)(r.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"), this.refs.wrappedInstance
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = r.withRef ? "wrappedInstance" : null;
                        return s.default.createElement(e, i({
                            ref: t
                        }, this.props))
                    }
                }]), n
            }(), t.displayName = (0, u.provideDisplayName)("sortableHandle", e), n
        };
        var o = n("U7vG"),
            s = r(o),
            l = n("O27J"),
            c = r(n("crWv")),
            u = n("Vgej")
    },
    uCi2: function(e, t, n) {
        var r = n("bIjD"),
            i = n("Ubhr");
        e.exports = function(e, t) {
            for (var n = 0, a = (t = r(t, e)).length; null != e && n < a;) e = e[i(t[n++])];
            return n && n == a ? e : void 0
        }
    },
    uIr7: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
            return e
        }
    },
    uLhX: function(e, t, n) {
        var r = n("NkRn"),
            i = Object.prototype,
            a = i.hasOwnProperty,
            o = i.toString,
            s = r ? r.toStringTag : void 0;
        e.exports = function(e) {
            var t = a.call(e, s),
                n = e[s];
            try {
                e[s] = void 0;
                var r = !0
            } catch (e) {}
            var i = o.call(e);
            return r && (t ? e[s] = n : delete e[s]), i
        }
    },
    "ue/d": function(e, t) {
        e.exports = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
    },
    uieL: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }
    },
    v8Dt: function(e, t, n) {
        var r = n("pTUa");
        e.exports = function(e) {
            return r(this, e).get(e)
        }
    },
    v9aJ: function(e, t, n) {
        var r = n("M6Wl"),
            i = n("pQJ6")(r);
        e.exports = i
    },
    "vm+z": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UploadVideoPlayerBanner_User"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
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
                            value: "user"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "login"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "login"
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
                                    value: "offlineImageURL"
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
                end: 98
            }
        };
        n.loc.source = {
            body: "query UploadVideoPlayerBanner_User($login: String!) {\nuser(login: $login) {\nid\nofflineImageURL\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    wSKX: function(e, t) {
        e.exports = function(e) {
            return e
        }
    },
    weaG: function(e, t) {},
    wn44: function(e, t) {},
    woYr: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_ChannelVideo_EmailVerificationToggle"
                },
                variableDefinitions: [],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "chatSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "requireVerifiedAccount"
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
                end: 114
            }
        };
        n.loc.source = {
            body: "query Settings_ChannelVideo_EmailVerificationToggle {\ncurrentUser {\nid\nchatSettings {\nrequireVerifiedAccount\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    x9n8: function(e, t, n) {
        "use strict";
        var r = n("RH2O"),
            i = n("2KeS"),
            a = n("V5M+"),
            o = n("Aj/L"),
            s = n("TToO"),
            l = n("HW6M"),
            c = n("U7vG"),
            u = n("6sO2"),
            d = n("J8WN"),
            p = n("+8VM"),
            f = n("7vx8"),
            h = n("puy8"),
            g = n("HZww"),
            m = n("Odds"),
            v = (n("weaG"), function(e) {
                var t = {
                    "default-avatar__selected": e.selected,
                    "default-avatar": !0
                };
                return c.createElement(m._2, {
                    padding: {
                        bottom: 1
                    }
                }, c.createElement("div", {
                    onClick: function() {
                        e.onSelect(e.index)
                    },
                    "aria-label": Object(u.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, c.createElement(m._25, {
                    fullHeight: !0,
                    fullWidth: !0,
                    position: m._9.Relative,
                    className: l(t)
                }, c.createElement("img", {
                    alt: Object(u.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            }),
            b = n("4Q9N"),
            y = n("Tt3k"),
            S = n("W6ca"),
            _ = n("xgnX"),
            E = n("CSlQ"),
            k = (n("AL3x"), n("nmDn")),
            w = ["image/*"],
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imagePreviewURL: "",
                        profileUpdated: !1,
                        currentImageHasTallAspectRatio: !1,
                        imageFormat: ""
                    }, t.currentImage = null, t.logger = u.i.withCategory("ProfileImagePicker"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            n = e[0];
                            var r = Object(y.a)(n),
                                i = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(i, 10) > 10 ? t.setState({
                                statusMessage: _.b.BadSizeError
                            }) : (t.setState({
                                selectedImageIndex: void 0,
                                imagePreviewURL: "",
                                imageFormat: "",
                                currentImageHasTallAspectRatio: !1
                            }), Object(y.b)(n, function(e) {
                                t.currentImage = e, t.setState({
                                    statusMessage: null
                                })
                            }, function(e) {
                                var n = new Image,
                                    i = !1;
                                n.onload = function() {
                                    n.width < n.height && (i = !0), t.setState({
                                        currentImageHasTallAspectRatio: i
                                    })
                                }, n.src = e, t.setState({
                                    imagePreviewURL: e,
                                    imageFormat: r
                                })
                            }))
                        } else t.setState({
                            statusMessage: _.b.ImageNotSelected
                        })
                    }, t.onUpdateButtonClick = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, i, a = this;
                            return s.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (e.preventDefault(), void 0 !== this.state.selectedImageIndex) return this.setDefaultAvatar(), [2];
                                        if (!this.currentImage) return this.setState({
                                            statusMessage: _.b.ImageNotSelected
                                        }), [2];
                                        this.setState({
                                            statusMessage: _.b.Uploading
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, Object(S.a)(this.props.userID, this.props.authToken, b.a.ProfileImage, this.state.imageFormat)];
                                    case 2:
                                        return t = o.sent(), n = t.upload_url, r = t.upload_id, [3, 4];
                                    case 3:
                                        return i = o.sent(), this.logger.error(i, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: _.b.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = u.j.subscribe({
                                            topic: Object(g.g)(this.props.userID),
                                            success: function() {
                                                try {
                                                    Object(S.c)(n, a.currentImage)
                                                } catch (e) {
                                                    a.logger.error(e, "Profile Image upload failed."), a.unsubscribe(), a.setState({
                                                        statusMessage: _.b.UnexpectedError,
                                                        selectedImageIndex: void 0,
                                                        imagePreviewURL: "",
                                                        imageFormat: "",
                                                        currentImageHasTallAspectRatio: !1
                                                    })
                                                }
                                                a.timeoutHandle = setTimeout(function() {
                                                    return a.handlePubSubTimeout()
                                                }, 1e4)
                                            },
                                            failure: function() {
                                                a.setState({
                                                    statusMessage: _.b.UnexpectedError,
                                                    selectedImageIndex: void 0,
                                                    imagePreviewURL: "",
                                                    currentImageHasTallAspectRatio: !1
                                                })
                                            },
                                            onMessage: function(e) {
                                                if (e.upload_id === r) {
                                                    clearTimeout(a.timeoutHandle);
                                                    var t = null;
                                                    t = e.status === _.a.Success ? _.b.Success : e.status === _.a.BadSize ? _.b.BadSizeError : e.status === _.a.NonImage ? _.b.NonImageError : e.status === _.a.WrongFormat ? _.b.WrongFormatError : _.b.UnexpectedError, a.unsubscribe && a.unsubscribe(), a.setState({
                                                        statusMessage: t
                                                    }), a.state.statusMessage === _.b.Success ? a.setState({
                                                        profileUpdated: !0
                                                    }) : (a.setState({
                                                        profileUpdated: !1,
                                                        imagePreviewURL: "",
                                                        imageFormat: ""
                                                    }), a.currentImage = null)
                                                }
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, t.onDefaultImageSelected = function(e) {
                        t.setState({
                            selectedImageIndex: e,
                            imagePreviewURL: Object(h.a)(h.b[e], 300)
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: _.b.TimeoutError
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    void 0 !== this.unsubscribe && this.unsubscribe(), this.timeoutHandle && clearTimeout(this.timeoutHandle)
                }, t.prototype.componentDidUpdate = function() {
                    var e = this;
                    this.state.profileUpdated && setTimeout(function() {
                        e.props.data && e.props.data.refetch(), e.props.closeModal()
                    }, 1e3)
                }, t.prototype.render = function() {
                    var e = this,
                        t = h.b.map(function(t, n) {
                            return c.createElement(v, {
                                key: t.id,
                                imageSrc: Object(h.a)(t, 300),
                                index: n,
                                onSelect: e.onDefaultImageSelected,
                                selected: e.state.selectedImageIndex === n
                            })
                        }),
                        n = null;
                    if ("" !== this.state.imagePreviewURL) {
                        var r = {
                            "profile-edit__image-preview": !0,
                            "profile-edit__image-preview-tall": this.state.currentImageHasTallAspectRatio
                        };
                        n = c.createElement(m._2, {
                            className: l(r),
                            "data-test-selector": "preview-image",
                            position: m._9.Relative
                        }, c.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var i = null;
                    "" === this.state.imagePreviewURL && (i = c.createElement(m._2, {
                        className: "profile-edit__upload-info"
                    }, c.createElement(m._2, null, c.createElement(m._15, {
                        asset: m._16.Plus,
                        type: m._17.Alt2,
                        height: 20,
                        width: 20
                    })), c.createElement(m._35, {
                        type: m._40.H3,
                        color: m.I.Alt2,
                        fontSize: m.R.Size4
                    }, Object(u.d)("Upload a Photo", "Profile Edit"))));
                    var a = null;
                    this.props.showCloser && (a = c.createElement(p.a, null));
                    var o = null;
                    if (null !== this.state.statusMessage) {
                        var s = Object(_.c)(this.state.statusMessage),
                            f = s.message,
                            g = s.type;
                        o = c.createElement(m._6, {
                            label: f,
                            type: g
                        })
                    }
                    var b = this.props.login;
                    return this.props.displayName && (b = this.props.displayName), c.createElement(m._2, {
                        className: "profile-edit",
                        position: m._9.Relative,
                        fullHeight: !0
                    }, c.createElement(m._25, {
                        className: "profile-edit__background-container",
                        background: m.m.Base,
                        fullWidth: !0
                    }, c.createElement(m._2, {
                        padding: 2,
                        display: m.N.InlineBlock,
                        position: m._9.Relative,
                        textAlign: m._36.Center,
                        fullWidth: !0
                    }, c.createElement(m._25, {
                        textAlign: m._36.Left,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement(m._35, {
                        type: m._40.H3,
                        color: m.I.Alt2,
                        fontSize: m.R.Size4
                    }, Object(u.d)("Edit Profile Picture for {userName}", {
                        userName: b
                    }, "Profile Edit"), " ")), c.createElement(m._2, {
                        className: "profile-edit__upload-container",
                        display: m.N.InlineBlock,
                        position: m._9.Relative,
                        textAlign: m._36.Center,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(m._2, {
                        className: "profile-edit__upload",
                        display: m.N.InlineBlock,
                        position: m._9.Relative,
                        textAlign: m._36.Center
                    }, c.createElement(d.a, {
                        allowedFileTypes: w,
                        onFilesSubmitted: this.onImageInputChange
                    }, i), n)), c.createElement(m._25, {
                        "data-test-selector": "status-message",
                        fontSize: m.R.Size4,
                        position: m._9.Relative,
                        textAlign: m._36.Center,
                        className: "profile-edit__status-message"
                    }, o), c.createElement(m._25, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement(m._2, {
                        textAlign: m._36.Left,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(m._35, {
                        type: m._40.H3,
                        color: m.I.Alt2,
                        fontSize: m.R.Size5
                    }, Object(u.d)("Or select one of these", "Profile Edit"))), c.createElement(m._46, {
                        childWidth: m._47.ExtraSmall,
                        gutterSize: m._48.ExtraSmall,
                        placeholderItems: 3
                    }, t)), c.createElement(m._2, {
                        display: m.N.Flex,
                        justifyContent: m._1.Center
                    }, c.createElement(m.u, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick,
                        size: m.x.Large
                    }, Object(u.d)("Update", "Profile Edit"))))), a)
                }, t.prototype.setDefaultAvatar = function() {
                    return s.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return s.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    this.setState({
                                        statusMessage: _.b.Uploading
                                    }), e = _.b.UnexpectedError, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, Object(S.b)(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                case 2:
                                    return 204 === (t = r.sent()).status || 200 === t.status ? e = _.b.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                case 3:
                                    return n = r.sent(), this.logger.error(n, "Default Avatar PUT failed."), [3, 4];
                                case 4:
                                    return this.setState({
                                        statusMessage: e,
                                        profileUpdated: e === _.b.Success
                                    }), [2]
                            }
                        })
                    })
                }, t = s.__decorate([Object(f.a)(k, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(c.Component),
            O = Object(E.d)("Profile Edit")(x),
            C = Object(r.b)(function(e) {
                return {
                    authToken: Object(o.a)(e)
                }
            }, function(e, t) {
                return Object(i.b)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(a.c)()
                    }
                }, e)
            })(O);
        n.d(t, "a", function() {
            return C
        })
    },
    xKuy: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            a = r(n("kbi+")),
            o = r(n("KBYM")),
            s = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.refs = {}
                }
                return i(e, [{
                    key: "add",
                    value: function(e, t) {
                        this.refs[e] || (this.refs[e] = []), this.refs[e].push(t)
                    }
                }, {
                    key: "remove",
                    value: function(e, t) {
                        var n = this.getIndex(e, t); - 1 !== n && this.refs[e].splice(n, 1)
                    }
                }, {
                    key: "isActive",
                    value: function() {
                        return this.active
                    }
                }, {
                    key: "getActive",
                    value: function() {
                        var e = this;
                        return (0, a.default)(this.refs[this.active.collection], function(t) {
                            return t.node.sortableInfo.index == e.active.index
                        })
                    }
                }, {
                    key: "getIndex",
                    value: function(e, t) {
                        return this.refs[e].indexOf(t)
                    }
                }, {
                    key: "getOrderedRefs",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.active.collection;
                        return (0, o.default)(this.refs[e], function(e) {
                            return e.node.sortableInfo.index
                        })
                    }
                }]), e
            }();
        t.default = s
    },
    xgnX: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return o
        }), t.c = function(e) {
            switch (e) {
                case o.Success:
                    return {
                        message: Object(i.d)("Success!", "Profile Edit"),
                        type: a._7.Success
                    };
                case o.UnexpectedError:
                    return {
                        message: Object(i.d)("Unexpected error, please try again.", "Profile Edit"),
                        type: a._7.Alert
                    };
                case o.BadSizeError:
                    return {
                        message: Object(i.d)("Image might exceed 10MB.", "Profile Edit"),
                        type: a._7.Alert
                    };
                case o.NonImageError:
                    return {
                        message: Object(i.d)("You must upload an image.", "Profile Edit"),
                        type: a._7.Alert
                    };
                case o.WrongFormatError:
                    return {
                        message: Object(i.d)("You must select a valid image type.", "Profile Edit"),
                        type: a._7.Alert
                    };
                case o.TimeoutError:
                    return {
                        message: Object(i.d)("Upload timed-out. Please try again.", "Profile Edit"),
                        type: a._7.Alert
                    };
                case o.Uploading:
                    return {
                        message: Object(i.d)("Uploading....", "Profile Edit"),
                        type: a._7.Brand
                    };
                case o.ImageNotSelected:
                    return {
                        message: Object(i.d)("Select a image first.", "Profile Edit"),
                        type: a._7.Alert
                    };
                default:
                    return {
                        message: Object(i.d)("Please try again.", "Profile Edit"),
                        type: a._7.Alert
                    }
            }
        };
        var r, i = n("6sO2"),
            a = n("Odds");
        ! function(e) {
            e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
        }(r || (r = {}));
        var o;
        ! function(e) {
            e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
        }(o || (o = {}))
    },
    yCNF: function(e, t) {
        e.exports = function(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
    },
    yU6t: function(e, t) {},
    yauq: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();
        t.default = function(e) {
            var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                withRef: !1
            };
            return n = t = function(t) {
                function n() {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(n, o.Component), a(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this.props,
                            t = e.collection,
                            n = e.disabled,
                            r = e.index;
                        n || this.setDraggable(t, r)
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        if (this.props.index !== e.index && this.node && (this.node.sortableInfo.index = e.index), this.props.disabled !== e.disabled) {
                            var t = e.collection,
                                n = e.disabled,
                                r = e.index;
                            n ? this.removeDraggable(t) : this.setDraggable(t, r)
                        } else this.props.collection !== e.collection && (this.removeDraggable(this.props.collection), this.setDraggable(e.collection, e.index))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this.props,
                            t = e.collection;
                        e.disabled || this.removeDraggable(t)
                    }
                }, {
                    key: "setDraggable",
                    value: function(e, t) {
                        var n = this.node = (0, c.findDOMNode)(this);
                        n.sortableInfo = {
                            index: t,
                            collection: e,
                            manager: this.context.manager
                        }, this.ref = {
                            node: n
                        }, this.context.manager.add(e, this.ref)
                    }
                }, {
                    key: "removeDraggable",
                    value: function(e) {
                        this.context.manager.remove(e, this.ref)
                    }
                }, {
                    key: "getWrappedInstance",
                    value: function() {
                        return (0, u.default)(r.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"), this.refs.wrappedInstance
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = r.withRef ? "wrappedInstance" : null;
                        return s.default.createElement(e, i({
                            ref: t
                        }, (0, d.omit)(this.props, "collection", "disabled", "index")))
                    }
                }]), n
            }(), t.displayName = (0, d.provideDisplayName)("sortableElement", e), t.contextTypes = {
                manager: l.default.object.isRequired
            }, t.propTypes = {
                index: l.default.number.isRequired,
                collection: l.default.oneOfType([l.default.number, l.default.string]),
                disabled: l.default.bool
            }, t.defaultProps = {
                collection: 0
            }, n
        };
        var o = n("U7vG"),
            s = r(o),
            l = r(n("KSGD")),
            c = n("O27J"),
            u = r(n("crWv")),
            d = n("Vgej")
    },
    yzuE: function(e, t, n) {
        var r = n("v9aJ"),
            i = n("bGc4");
        e.exports = function(e, t) {
            var n = -1,
                a = i(e) ? Array(e.length) : [];
            return r(e, function(e, r, i) {
                a[++n] = t(e, r, i)
            }), a
        }
    },
    z4hc: function(e, t, n) {
        var r = n("aCM0"),
            i = n("Rh28"),
            a = n("UnEC"),
            o = {};
        o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1, e.exports = function(e) {
            return a(e) && i(e.length) && !!o[r(e)]
        }
    },
    zBOP: function(e, t, n) {
        var r = n("22B7"),
            i = n("bGc4"),
            a = n("ZGh9"),
            o = n("yCNF");
        e.exports = function(e, t, n) {
            if (!o(n)) return !1;
            var s = typeof t;
            return !!("number" == s ? i(n) && a(t, n.length) : "string" == s && t in n) && r(n[t], e)
        }
    },
    zGZ6: function(e, t, n) {
        function r(e, t) {
            if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(a);
            var n = function() {
                var r = arguments,
                    i = t ? t.apply(this, r) : r[0],
                    a = n.cache;
                if (a.has(i)) return a.get(i);
                var o = e.apply(this, r);
                return n.cache = a.set(i, o) || a, o
            };
            return n.cache = new(r.Cache || i), n
        }
        var i = n("YeCl"),
            a = "Expected a function";
        r.Cache = i, e.exports = r
    },
    zpVT: function(e, t, n) {
        var r = n("duB3"),
            i = n("POb3"),
            a = n("YeCl"),
            o = 200;
        e.exports = function(e, t) {
            var n = this.__data__;
            if (n instanceof r) {
                var s = n.__data__;
                if (!i || s.length < o - 1) return s.push([e, t]), this.size = ++n.size, this;
                n = this.__data__ = new a(s)
            }
            return n.set(e, t), this.size = n.size, this
        }
    }
});
//# sourceMappingURL=pages.settings-e9b6761aa8362b8a006caa0f98ff90cb.js.map