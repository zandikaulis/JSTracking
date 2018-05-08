webpackJsonp([41], {
    "+0KR": function(e, t, n) {
        "use strict";
        var r = n("oR9V");
        n.d(t, "a", function() {
            return r.a
        }), n.d(t, "b", function() {
            return r.b
        })
    },
    "+Aaf": function(e, t) {},
    "+bIS": function(e, t, n) {
        "use strict";

        function r(e) {
            return function() {
                return e
            }
        }
        var i = function() {};
        i.thatReturns = r, i.thatReturnsFalse = r(!1), i.thatReturnsTrue = r(!0), i.thatReturnsNull = r(null), i.thatReturnsThis = function() {
            return this
        }, i.thatReturnsArgument = function(e) {
            return e
        }, e.exports = i
    },
    "+cPc": function(e, t, n) {
        var r = n("CUG3"),
            i = n("n8KP"),
            a = n("/UYc");
        e.exports = function(e) {
            var t = i(e);
            return 1 == t.length && t[0][2] ? a(t[0][0], t[0][1]) : function(n) {
                return n === e || r(n, e, t)
            }
        }
    },
    "//bJ": function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, i = 0, a = []; ++n < r;) {
                var o = e[n];
                t(o, n, e) && (a[i++] = o)
            }
            return a
        }
    },
    "/MI9": function(e, t, n) {
        var r = n("fXkM"),
            i = n("11iS");
        e.exports = function(e, t) {
            return null != e && i(e, t, r)
        }
    },
    "/UYc": function(e, t) {
        e.exports = function(e, t) {
            return function(n) {
                return null != n && n[e] === t && (void 0 !== t || e in Object(n))
            }
        }
    },
    "/ewM": function(e, t, n) {
        var r = n("WFpE");
        e.exports = function(e, t, n) {
            for (var i = -1, a = e.criteria, o = t.criteria, s = a.length, c = n.length; ++i < s;) {
                var l = r(a[i], o[i]);
                if (l) return i >= c ? l : l * ("desc" == n[i] ? -1 : 1)
            }
            return e.index - t.index
        }
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
    "0cQv": function(e, t) {},
    "0e1M": function(e, t, n) {
        var r = n("eWqu"),
            i = n("wSgH")(r);
        e.exports = i
    },
    "0pjK": function(e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    "0zkw": function(e, t) {
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
    "11iS": function(e, t, n) {
        var r = n("aIUG"),
            i = n("H3TN"),
            a = n("mG6l"),
            o = n("cjOD"),
            s = n("2iRz"),
            c = n("F6hB");
        e.exports = function(e, t, n) {
            for (var l = -1, u = (t = r(t, e)).length, d = !1; ++l < u;) {
                var p = c(t[l]);
                if (!(d = null != e && n(e, p))) break;
                e = e[p]
            }
            return d || ++l != u ? d : !!(u = null == e ? 0 : e.length) && s(u) && o(p, u) && (a(e) || i(e))
        }
    },
    "1Sl2": function(e, t) {},
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
    "1nXM": function(e, t, n) {
        var r = n("g/lL"),
            i = n("pLne"),
            a = n("HMFB");
        e.exports = function(e) {
            return r(e, a, i)
        }
    },
    "1tEs": function(e, t, n) {
        (function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n
        }).call(t, n("DuR2"))
    },
    "2EIm": function(e, t, n) {
        var r = n("Bh6c");
        e.exports = function() {
            this.__data__ = new r, this.size = 0
        }
    },
    "2iRz": function(e, t) {
        var n = 9007199254740991;
        e.exports = function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
        }
    },
    "2oz3": function(e, t, n) {
        var r = n("INOA"),
            i = n("mAEY");
        e.exports = function e(t, n, a, o, s) {
            var c = -1,
                l = t.length;
            for (a || (a = i), s || (s = []); ++c < l;) {
                var u = t[c];
                n > 0 && a(u) ? n > 1 ? e(u, n - 1, a, o, s) : r(s, u) : o || (s[s.length] = u)
            }
            return s
        }
    },
    "2urJ": function(e, t) {
        e.exports = function(e) {
            return this.__data__.has(e)
        }
    },
    "3fb4": function(e, t) {},
    "43dD": function(e, t, n) {
        var r = n("JGv7"),
            i = n("H1YI"),
            a = n("OZxy"),
            o = "[object Null]",
            s = "[object Undefined]",
            c = r ? r.toStringTag : void 0;
        e.exports = function(e) {
            return null == e ? void 0 === e ? s : o : c && c in Object(e) ? i(e) : a(e)
        }
    },
    "4Q9N": function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e.ProfileImage = "profile_image", e.ProfileBanner = "profile_banner", e.ChannelOfflineImage = "channel_offline_image"
            }(r || (r = {}))
    },
    "4UmU": function(e, t, n) {
        var r = n("EpL8"),
            i = n("Czj7"),
            a = n("cjOD"),
            o = n("kl/u");
        e.exports = function(e, t, n) {
            if (!o(n)) return !1;
            var s = typeof t;
            return !!("number" == s ? i(n) && a(t, n.length) : "string" == s && t in n) && r(n[t], e)
        }
    },
    "4hEs": function(e, t, n) {
        var r = n("uIws");
        e.exports = function(e) {
            var t = this.__data__,
                n = r(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
    },
    "50Oj": function(e, t, n) {
        var r = n("HMFi"),
            i = n("SjFU"),
            a = n("Ro3v"),
            o = n("BhXZ"),
            s = n("usEs"),
            c = n("/ewM"),
            l = n("F3kA");
        e.exports = function(e, t, n) {
            var u = -1;
            t = r(t.length ? t : [l], s(i));
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
                return c(e, t, n)
            })
        }
    },
    "57tO": function(e, t, n) {
        var r = n("NDrF")(n("MygC"), "Set");
        e.exports = r
    },
    "5Y57": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("rCmJ"),
            o = n("6sO2"),
            s = n("Odds"),
            c = function() {
                return i.createElement(s._8, {
                    display: s.R.Flex,
                    flexDirection: s.T.Column,
                    justifyContent: s._7.Center,
                    alignItems: s.c.Center,
                    flexGrow: 1,
                    fullHeight: !0,
                    padding: {
                        y: 1
                    },
                    zIndex: s._62.Above
                }, i.createElement(s._35, {
                    color: s.K.Alt2,
                    textAlign: s._45.Center,
                    flexShrink: 1
                }, i.createElement(s._24, {
                    asset: s._25.DeadGlitch,
                    width: 46,
                    height: 48
                })), i.createElement(s._2, {
                    margin: {
                        top: 1
                    },
                    textAlign: s._45.Center
                }, i.createElement(s.Q, {
                    type: s._49.H4,
                    "data-test-selector": "search-error-message"
                }, Object(o.d)("Search is not available at this time", "DropdownSearchError"))), i.createElement(s.Q, {
                    type: s._49.P
                }, Object(o.d)("Please try again later", "DropdownSearchError")))
            },
            l = n("6BvN"),
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        focusSelectable: !1,
                        isOpen: !1
                    }, t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t.onKeyDown = function(e) {
                        e.keyCode === l.a.Esc ? t.setState({
                            isOpen: !1
                        }) : e.keyCode === l.a.Up ? t.focusNext(-1) : e.keyCode === l.a.Down && t.focusNext(1)
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
                    var e = this.props.isErrored ? i.createElement(c, null) : i.Children.only(this.props.children);
                    return i.createElement(a.a, {
                        onClickOut: this.onClickOut
                    }, i.createElement(s._27, {
                        onChange: this.handleChange,
                        onKeyDown: this.onKeyDown,
                        onFocus: this.props.onFocusInput,
                        placeholder: this.props.placeholder,
                        id: "nav-search-input",
                        "data-a-target": "nav-search-input",
                        spellCheck: !1,
                        refDelegate: this.getInputRef
                    }), i.createElement(s.q, r.__assign({
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
    "5hfY": function(e, t, n) {
        var r = n("L3k4");
        e.exports = function(e) {
            return function(t) {
                return r(t, e)
            }
        }
    },
    "5xsI": function(e, t) {},
    "6Exb": function(e, t) {
        e.exports = function(e, t) {
            return null == e ? void 0 : e[t]
        }
    },
    "6T7P": function(e, t, n) {
        e.exports = n.p + "assets/fallback-avatar-c3e7f53e20817a5c44b2b821729da1ee.png"
    },
    "6TIu": function(e, t, n) {
        var r = n("uIws");
        e.exports = function(e) {
            return r(this.__data__, e) > -1
        }
    },
    "8+dp": function(e, t) {},
    "81TE": function(e, t) {
        e.exports = function(e, t) {
            return function(n) {
                return e(t(n))
            }
        }
    },
    "831n": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UserSettings_AutohostSettings_CurrentUser"
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
                                    value: "primaryTeam"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 103
            }
        };
        n.loc.source = {
            body: "query UserSettings_AutohostSettings_CurrentUser {\ncurrentUser {\nid\nprimaryTeam {\nname\ndisplayName\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "8Wze": function(e, t, n) {
        var r, i = n("MA13"),
            a = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
        e.exports = function(e) {
            return !!a && a in e
        }
    },
    "8sB4": function(e, t, n) {
        var r = n("SjFU"),
            i = n("Czj7"),
            a = n("HMFB");
        e.exports = function(e) {
            return function(t, n, o) {
                var s = Object(t);
                if (!i(t)) {
                    var c = r(n, 3);
                    t = a(t), n = function(e) {
                        return c(s[e], e, s)
                    }
                }
                var l = e(t, n, o);
                return l > -1 ? s[c ? t[l] : l] : void 0
            }
        }
    },
    "8xms": function(e, t, n) {
        var r = n("w1Jz"),
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
    "9GW9": function(e, t) {
        e.exports = function(e) {
            return this.__data__.get(e)
        }
    },
    "9c95": function(e, t, n) {
        var r = n("8sB4")(n("i4TT"));
        e.exports = r
    },
    "9nrn": function(e, t, n) {
        var r = n("NDrF")(n("MygC"), "Map");
        e.exports = r
    },
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var r = n("TToO"),
            i = n("6sO2"),
            a = n("Aj/L"),
            o = function() {
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
                        var i, a, o, s;
                        return r.__generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), i = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, i), o = r.__assign({}, t, {
                                        body: a
                                    }), [4, this._fetch(e, o)];
                                case 1:
                                    return s = c.sent(), [4, this.constructLegacyAPIResponse(s)];
                                case 2:
                                    return [2, c.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var i, a;
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                case 1:
                                    if ((i = o.sent()).error || i.requestError) throw new Error("Error while making request");
                                    return a = r.__assign({}, i, {
                                        body: i.body
                                    }), [2, Promise.resolve(a)];
                                case 2:
                                    throw o.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, i.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, a;
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
                                    return i = r.sent(), e.headers && e.headers.get && (a = e.headers.get("Content-Type")) && -1 !== a.indexOf("application/json") && (t.requestError = i), [3, 4];
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
                    var o = Object(a.c)(n);
                    return o && (r.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (r["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        r[e] && delete r[e]
                    }), r
                }, e.logger = i.o.logger.withCategory("legacy-api"), e
            }()
    },
    A2t5: function(e, t, n) {
        var r = n("L3k4");
        e.exports = function(e, t, n) {
            var i = null == e ? void 0 : r(e, t);
            return void 0 === i ? n : i
        }
    },
    AJkw: function(e, t) {
        e.exports = function(e) {
            return function(t, n, r) {
                for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
                    var c = o[e ? s : ++i];
                    if (!1 === n(a[c], c, a)) break
                }
                return t
            }
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
    "AQc/": function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            i = n("Odds");

        function a(e) {
            var t = null;
            return e.description && (t = r.createElement(i._8, {
                margin: {
                    top: 1
                }
            }, r.createElement(i.Q, {
                color: i.K.Alt2
            }, e.description))), r.createElement(i._8, {
                margin: {
                    y: 2
                }
            }, r.createElement(i.Q, {
                type: i._49.H3,
                fontSize: i.V.Size2
            }, e.title), t)
        }
        n.d(t, "a", function() {
            return a
        })
    },
    Ao0V: function(e, t, n) {
        var r = n("JGv7"),
            i = n("yMkz"),
            a = n("EpL8"),
            o = n("qu3O"),
            s = n("zN4B"),
            c = n("pUak"),
            l = 1,
            u = 2,
            d = "[object Boolean]",
            p = "[object Date]",
            h = "[object Error]",
            m = "[object Map]",
            g = "[object Number]",
            f = "[object RegExp]",
            v = "[object Set]",
            b = "[object String]",
            y = "[object Symbol]",
            S = "[object ArrayBuffer]",
            k = "[object DataView]",
            _ = r ? r.prototype : void 0,
            E = _ ? _.valueOf : void 0;
        e.exports = function(e, t, n, r, _, C, w) {
            switch (n) {
                case k:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case S:
                    return !(e.byteLength != t.byteLength || !C(new i(e), new i(t)));
                case d:
                case p:
                case g:
                    return a(+e, +t);
                case h:
                    return e.name == t.name && e.message == t.message;
                case f:
                case b:
                    return e == t + "";
                case m:
                    var O = s;
                case v:
                    var x = r & l;
                    if (O || (O = c), e.size != t.size && !x) return !1;
                    var N = w.get(e);
                    if (N) return N == t;
                    r |= u, w.set(e, t);
                    var j = o(O(e), O(t), r, _, C, w);
                    return w.delete(e), j;
                case y:
                    if (E) return E.call(e) == E.call(t)
            }
            return !1
        }
    },
    BALR: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                if (t(e[n], n, e)) return !0;
            return !1
        }
    },
    BaEo: function(e, t) {
        e.exports = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
    },
    Bh6c: function(e, t, n) {
        var r = n("sBY2"),
            i = n("iLYB"),
            a = n("4hEs"),
            o = n("6TIu"),
            s = n("eGfi");

        function c(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = o, c.prototype.set = s, e.exports = c
    },
    BhXZ: function(e, t) {
        e.exports = function(e, t) {
            var n = e.length;
            for (e.sort(t); n--;) e[n] = e[n].value;
            return e
        }
    },
    Bxt2: function(e, t, n) {
        var r = n("DRNv");
        e.exports = function(e) {
            return r(this, e).get(e)
        }
    },
    CTFd: function(e, t, n) {
        var r = n("AJkw")();
        e.exports = r
    },
    CUG3: function(e, t, n) {
        var r = n("gKqb"),
            i = n("GVhz"),
            a = 1,
            o = 2;
        e.exports = function(e, t, n, s) {
            var c = n.length,
                l = c,
                u = !s;
            if (null == e) return !l;
            for (e = Object(e); c--;) {
                var d = n[c];
                if (u && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1
            }
            for (; ++c < l;) {
                var p = (d = n[c])[0],
                    h = e[p],
                    m = d[1];
                if (u && d[2]) {
                    if (void 0 === h && !(p in e)) return !1
                } else {
                    var g = new r;
                    if (s) var f = s(h, m, p, e, t, g);
                    if (!(void 0 === f ? i(m, h, a | o, s, g) : f)) return !1
                }
            }
            return !0
        }
    },
    CZUI: function(e, t, n) {
        var r = n("U2kw"),
            i = n("8Wze"),
            a = n("kl/u"),
            o = n("NuOc"),
            s = /^\[object .+?Constructor\]$/,
            c = Function.prototype,
            l = Object.prototype,
            u = c.toString,
            d = l.hasOwnProperty,
            p = RegExp("^" + u.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e.exports = function(e) {
            return !(!a(e) || i(e)) && (r(e) ? p : s).test(o(e))
        }
    },
    CePw: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BlockGiftedSubsSetting"
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
                                    value: "subscriptionSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "giftsToFollowedChannelsOnly"
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
                end: 104
            }
        };
        n.loc.source = {
            body: "query BlockGiftedSubsSetting {\ncurrentUser {\nid\nsubscriptionSettings {\ngiftsToFollowedChannelsOnly\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
    Czj7: function(e, t, n) {
        var r = n("U2kw"),
            i = n("2iRz");
        e.exports = function(e) {
            return null != e && i(e.length) && !r(e)
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
    D4QM: function(e, t, n) {
        var r = /^\./,
            i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            a = /\\(\\)?/g,
            o = n("ROCN")(function(e) {
                var t = [];
                return r.test(e) && t.push(""), e.replace(i, function(e, n, r, i) {
                    t.push(r ? i.replace(a, "$1") : n || e)
                }), t
            });
        e.exports = o
    },
    DRNv: function(e, t, n) {
        var r = n("enQx");
        e.exports = function(e, t) {
            var n = e.__data__;
            return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }
    },
    "DT0+": function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            i = n("wqO5");
        if (void 0 === r) throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");
        var a = (new r.Component).updater;
        e.exports = i(r.Component, r.isValidElement, a)
    },
    EQRc: function(e, t) {},
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
    EpL8: function(e, t) {
        e.exports = function(e, t) {
            return e === t || e != e && t != t
        }
    },
    F3kA: function(e, t) {
        e.exports = function(e) {
            return e
        }
    },
    F6hB: function(e, t, n) {
        var r = n("SCwa"),
            i = 1 / 0;
        e.exports = function(e) {
            if ("string" == typeof e || r(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -i ? "-0" : t
        }
    },
    Fbrx: function(e, t, n) {
        var r = n("GVhz"),
            i = n("A2t5"),
            a = n("/MI9"),
            o = n("QQy1"),
            s = n("am5H"),
            c = n("/UYc"),
            l = n("F6hB"),
            u = 1,
            d = 2;
        e.exports = function(e, t) {
            return o(e) && s(t) ? c(l(e), t) : function(n) {
                var o = i(n, e);
                return void 0 === o && o === t ? a(n, e) : r(t, o, u | d)
            }
        }
    },
    FsFC: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.b = function(e, t) {
            void 0 === t && (t = i.Humanized);
            var n;
            t === i.ClockAuto && (t = e >= 3600 ? i.ClockHMS : i.ClockMS);
            switch (t) {
                case i.ClockHM:
                case i.ClockHMS:
                    n = r.Hour;
                    break;
                case i.ClockMS:
                    n = r.Minute
            }
            var l = 2;
            t === i.ClockHMS && (l = 3);
            var u = function(e, t) {
                    void 0 === t && (t = r.Month);
                    var n = {};
                    if (n.seconds = e, e < 60 || t === r.Second) return n;
                    if (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === r.Minute) return n;
                    if (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === r.Hour) return n;
                    if (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === r.Day) return n;
                    if (n.days <= 26 || t === r.Week) return n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n;
                    return n.months = Math.round((n.days + 3) / 30), n
                }(e, n),
                d = Object.keys(u);
            if (d.forEach(function(e, n) {
                    t !== i.Humanized && t !== i.HumanizedShort || u[e] || delete u[e], n < d.length - l && delete u[e]
                }), t === i.Humanized) return function(e) {
                return e.months ? o(r.Month, e.months) : e.weeks && e.days ? o(r.Week, e.weeks) + " " + o(r.Day, e.days) : e.weeks ? o(r.Week, e.weeks) : e.days && e.hours ? o(r.Day, e.days) + " " + o(r.Hour, e.hours) : e.days ? o(r.Day, e.days) : e.hours && e.minutes ? o(r.Hour, e.hours) + " " + o(r.Minute, e.minutes) : e.hours ? o(r.Hour, e.hours) : e.minutes && e.seconds ? o(r.Minute, e.minutes) + " " + o(r.Second, e.seconds) : e.minutes ? o(r.Minute, e.minutes) : o(r.Second, e.seconds || 0)
            }(u);
            if (t === i.HumanizedShort) return function(e) {
                return e.months ? s(r.Month, e.months) : e.weeks && e.days ? "" + s(r.Week, e.weeks) + s(r.Day, e.days) : e.weeks ? s(r.Week, e.weeks) : e.days && e.hours ? "" + s(r.Day, e.days) + s(r.Hour, e.hours) : e.days ? s(r.Day, e.days) : e.hours && e.minutes ? "" + s(r.Hour, e.hours) + s(r.Minute, e.minutes) : e.hours ? s(r.Hour, e.hours) : e.minutes && e.seconds ? "" + s(r.Minute, e.minutes) + s(r.Second, e.seconds) : e.minutes ? s(r.Minute, e.minutes) : s(r.Second, e.seconds || 0)
            }(u);
            var p = ":",
                h = !1;
            switch (a.o.intl.getLanguageCode()) {
                case "cy":
                case "da":
                case "fi":
                case "id":
                case "nb":
                case "si":
                    p = ".";
                    break;
                case "af":
                case "fr":
                case "lt":
                    h = !0
            }
            var m = u.seconds || 0,
                g = u.minutes || 0,
                f = u.hours || 0;
            switch (t) {
                case i.ClockHM:
                case i.ClockHMS:
                    var v = h ? c(f, 2) : f,
                        b = v + p + c(g, 2);
                    return t === i.ClockHMS && (b += p + c(m, 2)), b;
                case i.ClockMS:
                    var v = h ? c(g, 2) : g;
                    return v + p + c(m, 2)
            }
        };
        var r, i, a = n("6sO2");

        function o(e, t) {
            switch (e) {
                case r.Second:
                    return Object(a.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                        secondCount: t
                    }, "formatDuration");
                case r.Minute:
                    return Object(a.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                        minuteCount: t
                    }, "formatDuration");
                case r.Hour:
                    return Object(a.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                        hourCount: t
                    }, "formatDuration");
                case r.Day:
                    return Object(a.d)("{dayCount, plural, one {# day} other {# days}}", {
                        dayCount: t
                    }, "formatDuration");
                case r.Week:
                    return Object(a.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                        weekCount: t
                    }, "formatDuration");
                case r.Month:
                    return Object(a.d)("{monthCount, plural, one {# month} other {# months}}", {
                        monthCount: t
                    }, "formatDuration");
                default:
                    return ""
            }
        }

        function s(e, t) {
            switch (e) {
                case r.Second:
                    return Object(a.d)("{secondCount}s", {
                        secondCount: t
                    }, "formatDuration");
                case r.Minute:
                    return Object(a.d)("{minuteCount}m", {
                        minuteCount: t
                    }, "formatDuration");
                case r.Hour:
                    return Object(a.d)("{hourCount}h", {
                        hourCount: t
                    }, "formatDuration");
                case r.Day:
                    return Object(a.d)("{dayCount}d", {
                        dayCount: t
                    }, "formatDuration");
                case r.Week:
                    return Object(a.d)("{weekCount}w", {
                        weekCount: t
                    }, "formatDuration");
                case r.Month:
                    return Object(a.d)("{monthCount}mo", {
                        monthCount: t
                    }, "formatDuration");
                default:
                    return ""
            }
        }

        function c(e, t) {
            var n = e.toString();
            return n.length < t ? "0".repeat(t - n.length) + n : n
        }! function(e) {
            e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
        }(r || (r = {})),
        function(e) {
            e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
        }(i || (i = {}))
    },
    FvmC: function(e, t, n) {
        var r = n("NDrF")(n("MygC"), "WeakMap");
        e.exports = r
    },
    Fy4Y: function(e, t, n) {
        var r = n("81TE")(Object.keys, Object);
        e.exports = r
    },
    "GH+X": function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            i = n("Odds"),
            a = (n("3fb4"), function(e) {
                var t = null;
                return e.footer && (t = r.createElement(i._35, {
                    padding: 2,
                    background: i.n.Alt2
                }, e.footer)), r.createElement(i._35, {
                    className: "settings-section",
                    background: i.n.Base,
                    margin: {
                        bottom: 4
                    },
                    borderRight: !0,
                    borderBottom: !0,
                    borderLeft: !0
                }, e.children, t)
            });
        n.d(t, "a", function() {
            return a
        })
    },
    GVhz: function(e, t, n) {
        var r = n("M+Mb"),
            i = n("VGcK");
        e.exports = function e(t, n, a, o, s) {
            return t === n || (null == t || null == n || !i(t) && !i(n) ? t != t && n != n : r(t, n, a, o, e, s))
        }
    },
    GWfv: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
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
            i = p(n("GiK3")),
            a = p(n("DT0+")),
            o = p(n("KSGD")),
            s = p(n("tZ8z")),
            c = p(n("HW6M")),
            l = p(n("z15t")),
            u = p(n("Iwjr")),
            d = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(n("K01h"));

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var h = (0, a.default)({
            mixins: [s.default],
            propTypes: {
                color: o.default.string.isRequired,
                onChange: o.default.func.isRequired
            },
            getDefaultProps: function() {
                return {
                    color: "rgba(0,0,0,1)",
                    opacitySlider: !1
                }
            },
            getInitialState: function() {
                return this.getStateFrom(this.props)
            },
            componentWillReceiveProps: function(e) {
                var t = this.getStateFrom(e);
                d.equals(this.state.color, t.color) || this.setState(t)
            },
            getStateFrom: function(e) {
                return {
                    color: d.parseToHsv(e.color)
                }
            },
            render: function() {
                var e = (0, c.default)("colorpicker", {
                        "with-opacity-slider": this.props.opacitySlider
                    }),
                    t = r(this.state.color, 3),
                    n = t[0],
                    a = t[1],
                    o = t[2];
                return i.default.createElement("div", {
                    className: e
                }, i.default.createElement("div", {
                    className: "hue-slider"
                }, i.default.createElement(u.default, {
                    vertical: !0,
                    value: n,
                    max: 360,
                    onChange: this.handleHueChange
                })), this.props.opacitySlider && i.default.createElement("div", {
                    className: "opacity-slider"
                }, i.default.createElement(u.default, {
                    vertical: !1,
                    value: this.getAlpha(),
                    max: 1,
                    background: this.getBackgroundGradient(),
                    onChange: this.handleAlphaChange
                })), i.default.createElement(l.default, {
                    x: a,
                    y: o,
                    max: 100,
                    className: d.isDark(this.state.color) ? "dark" : "light",
                    backgroundColor: this.getBackgroundHue(),
                    onChange: this.handleSaturationValueChange
                }))
            },
            getAlpha: function() {
                return void 0 === this.state.color[3] ? 1 : this.state.color[3]
            },
            getBackgroundGradient: function() {
                var e = r(this.state.color, 3),
                    t = e[0],
                    n = e[1],
                    i = e[2];
                return "linear-gradient(to right, rgba(0,0,0,0) 0%, " + d.toRgbString([t, n, i, 1]) + " 100%)"
            },
            getBackgroundHue: function() {
                return d.toRgbString([this.state.color[0], 100, 100])
            },
            handleAlphaChange: function(e) {
                var t = r(this.state.color, 3),
                    n = t[0],
                    i = t[1],
                    a = t[2];
                this.update([n, i, a, e])
            },
            handleHueChange: function(e) {
                var t = r(this.state.color, 4),
                    n = t[1],
                    i = t[2],
                    a = t[3];
                this.update([e, n, i, a])
            },
            handleSaturationValueChange: function(e, t) {
                var n = r(this.state.color, 4),
                    i = n[0],
                    a = n[3];
                this.update([i, e, t, a])
            },
            update: function(e) {
                this.setState({
                    color: e
                }), this.props.onChange(d.toRgbString(e))
            }
        });
        t.default = h
    },
    H1YI: function(e, t, n) {
        var r = n("JGv7"),
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
    H3TN: function(e, t, n) {
        var r = n("tobj"),
            i = n("VGcK"),
            a = Object.prototype,
            o = a.hasOwnProperty,
            s = a.propertyIsEnumerable,
            c = r(function() {
                return arguments
            }()) ? r : function(e) {
                return i(e) && o.call(e, "callee") && !s.call(e, "callee")
            };
        e.exports = c
    },
    HMFB: function(e, t, n) {
        var r = n("OScx"),
            i = n("r0iv"),
            a = n("Czj7");
        e.exports = function(e) {
            return a(e) ? r(e) : i(e)
        }
    },
    HMFi: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
            return i
        }
    },
    II0X: function(e, t) {
        e.exports = function(e, t, n) {
            return Math.min(Math.max(e, t), n)
        }
    },
    INOA: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
            return e
        }
    },
    Ii8z: function(e, t) {
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
    IjoR: function(e, t) {},
    Iwjr: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = l(n("GiK3")),
            i = l(n("DT0+")),
            a = l(n("KSGD")),
            o = l(n("tZ8z")),
            s = l(n("HW6M")),
            c = l(n("V/Pj"));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = (0, i.default)({
            mixins: [c.default, o.default],
            propTypes: {
                value: a.default.number.isRequired,
                vertical: a.default.bool,
                background: a.default.string
            },
            getDefaultProps: function() {
                return {
                    value: 0,
                    vertical: !1,
                    background: ""
                }
            },
            updatePosition: function(e, t, n) {
                var r = void 0;
                r = this.props.vertical ? (e.bottom - n) / e.height : (t - e.left) / e.width, this.props.onChange(this.getScaledValue(r))
            },
            getCss: function() {
                var e, t, n, r = this.props.vertical ? "bottom" : "left";
                return e = {}, t = r, n = this.getPercentageValue(this.props.value), t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            },
            render: function() {
                var e = (0, s.default)("slider", this.props.vertical ? "vertical" : "horizontal"),
                    t = this.props.background;
                return r.default.createElement("div", {
                    className: e,
                    onMouseDown: this.startUpdates,
                    onTouchStart: this.startUpdates
                }, r.default.createElement("div", {
                    className: "track",
                    style: {
                        background: t
                    }
                }), r.default.createElement("div", {
                    className: "pointer",
                    style: this.getCss()
                }))
            }
        });
        t.default = u
    },
    J0u9: function(e, t, n) {
        var r = n("2oz3"),
            i = n("50Oj"),
            a = n("L4AJ"),
            o = n("4UmU"),
            s = a(function(e, t) {
                if (null == e) return [];
                var n = t.length;
                return n > 1 && o(e, t[0], t[1]) ? t = [] : n > 2 && o(t[0], t[1], t[2]) && (t = [t[0]]), i(e, r(t, 1), [])
            });
        e.exports = s
    },
    J8WN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var r = n("TToO"),
            i = n("GiK3"),
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
                    return i.createElement(a.S, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, i.createElement(a._2, {
                        position: a._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: a._62.Above
                    }, i.createElement("input", {
                        "data-a-target": "file-picker-input",
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
            i.n.track(a.SpadeEventType.BrowserPushNotificationPrompt, e)
        }, t.b = function(e) {
            i.n.track(a.SpadeEventType.BrowserPushNotificationDisable, e)
        };
        var r, i = n("6sO2"),
            a = n("vH/s");
        ! function(e) {
            e.Settings = "settings", e.Channel = "channel"
        }(r || (r = {}))
    },
    JGv7: function(e, t, n) {
        var r = n("MygC").Symbol;
        e.exports = r
    },
    JYjH: function(e, t, n) {
        var r = n("m2wS"),
            i = n("5hfY"),
            a = n("QQy1"),
            o = n("F6hB");
        e.exports = function(e) {
            return a(e) ? r(o(e)) : i(e)
        }
    },
    Jo6h: function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            i = n("6sO2"),
            a = n("OjIq"),
            o = n("Odds"),
            s = (n("IjoR"), function(e) {
                return r.createElement(o._35, {
                    className: "settings-form-group"
                }, r.createElement(a.a, null, r.createElement(o.W, {
                    error: e.error,
                    errorMessage: e.errorMessage || Object(i.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
                    hint: e.hint,
                    id: e.id,
                    label: e.label,
                    labelOptional: e.labelOptional,
                    orientation: e.orientation || o.X.Horizontal
                }, e.children)))
            });
        n.d(t, "a", function() {
            return s
        })
    },
    K01h: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.parseToHsv = function(e) {
            e = (0, r.default)(e);
            var t = (0, i.default)(e),
                n = 4 === e.length ? e[3] : 1;
            return t.push(n), t
        }, t.toRgbString = l, t.equals = function(e, t) {
            return l(e) === l(t)
        }, t.isDark = function(e) {
            return (0, s.default)((0, a.default)(e)) <= 128
        };
        var r = c(n("s/Z0")),
            i = c(n("zwRn")),
            a = c(n("vEIR")),
            o = c(n("Qe41")),
            s = c(n("vzFj"));

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function l(e) {
            var t = (0, a.default)(e);
            return 4 === e.length && t.push(e[3]), (0, o.default)(t)
        }
    },
    K4jf: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("RH2O"),
            i = n("2KeS"),
            a = n("+xm8"),
            o = n("f2i/"),
            s = n("Aj/L"),
            c = n("TToO"),
            l = n("GiK3"),
            u = n("CIox"),
            d = n("6sO2"),
            p = n("yWCw"),
            h = n("CSlQ"),
            m = n("eXld"),
            g = n("2aoH"),
            f = n("QRuM"),
            v = n("j7/Y"),
            b = n("w9tK"),
            y = n("vH/s"),
            S = n("GH+X"),
            k = n("AQc/"),
            _ = n("Jo6h"),
            E = n("LIeg"),
            C = n("i61F"),
            w = n("HM6l"),
            O = n("9u8h"),
            x = n("5LoI"),
            N = n("MAZT"),
            j = n("5Y57"),
            T = n("kqTE"),
            U = n("zCIC"),
            D = n("HW6M"),
            I = n("5kgt"),
            P = n("puy8"),
            F = n("Odds"),
            A = (n("Pd+R"), function(e) {
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
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Remove", "UserSettingsAutohostListItem"),
                        t = !this.props.isSorting && this.state.hovered,
                        n = {
                            "autohost-list-item": !0,
                            "autohost-list-item--hovered": t
                        },
                        r = null;
                    t && (r = l.createElement(F._8, {
                        className: "autohost-list-item--remove",
                        padding: {
                            right: 1
                        },
                        display: F.R.Flex,
                        attachRight: !0
                    }, l.createElement(F._52, {
                        label: e,
                        direction: F._54.Left
                    }, l.createElement(F.w, {
                        "data-test-selector": "AUTO_HOST_REMOVE_BUTTON",
                        ariaLabel: e,
                        icon: F._25.Trash,
                        onClick: this.onRemoveClick,
                        overlay: !0
                    }))));
                    var i = this.props.user.avatar || Object(P.c)(this.props.user.id, 64);
                    return l.createElement(F._2, c.__assign({
                        className: D(n),
                        zIndex: F._62.Above,
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(I.a)(this.props)), l.createElement("div", {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }, l.createElement(F.C, {
                        row: !0
                    }, l.createElement(F._8, {
                        className: "autohost-list-item__avatar"
                    }, l.createElement(F.k, {
                        ratio: F.l.Aspect1x1
                    }, l.createElement("img", {
                        alt: this.props.user.name,
                        src: i,
                        draggable: !1
                    }))), l.createElement(F._8, {
                        flexGrow: 1,
                        display: F.R.Flex,
                        position: F._15.Relative
                    }, l.createElement(F._2, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, l.createElement(F.Q, {
                        type: F._49.Span,
                        ellipsis: !0
                    }, this.props.user.name))), r)))
                }, t
            }(l.Component)),
            R = Object(C.SortableElement)(function(e) {
                return l.createElement(A, c.__assign({}, e))
            }),
            M = (n("Y4as"), function(e) {
                return l.createElement(U.b, {
                    className: "autohost-list-edit",
                    suppressScrollX: !0
                }, l.createElement(F._8, null, e.autohostChannels && e.autohostChannels.map(function(t, n) {
                    return l.createElement(R, {
                        user: t,
                        key: t.id,
                        index: n,
                        onRemoveClick: e.onHostRemoved,
                        isSorting: e.isSorting
                    })
                })))
            }),
            L = Object(C.SortableContainer)(function(e) {
                return l.createElement(M, c.__assign({}, e))
            }),
            B = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onAddClick = function() {
                        t.props.onAddClick(t.props.user)
                    }, t.onAddedClick = function() {
                        t.props.onAddedClick(t.props.user)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    e = this.props.user.added ? l.createElement(F.v, {
                        onClick: this.onAddedClick,
                        "data-test-selector": "AUTO_HOST_REMOVE_BUTTON",
                        icon: F._25.Check,
                        statusAlertIcon: F._25.Trash,
                        statusAlertText: Object(d.d)("Remove", "UserSettingsAutohostUserResultCard")
                    }, Object(d.d)("Added", "UserSettingsAutohostUserResultCard")) : l.createElement(F.v, {
                        type: F.B.Hollow,
                        onClick: this.onAddClick,
                        "data-test-selector": "AUTO_HOST_ADD_BUTTON"
                    }, Object(d.d)("Add", "UserSettingsAutohostUserResultCard"));
                    var t = this.props.user.avatar || Object(P.c)(this.props.user.id, 64);
                    return l.createElement(F._8, c.__assign({
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(I.a)(this.props)), l.createElement(F.C, {
                        row: !0
                    }, l.createElement(F.E, {
                        alt: this.props.user.name,
                        src: t,
                        size: F.F.Size4,
                        aspect: F.l.Aspect1x1
                    }), l.createElement(F._8, {
                        flexGrow: 1,
                        display: F.R.Flex,
                        position: F._15.Relative
                    }, l.createElement(F._2, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, l.createElement(F.Q, {
                        type: F._49.Span,
                        ellipsis: !0
                    }, this.props.user.name))), e))
                }, t
            }(l.Component),
            z = (n("1Sl2"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.userSearch = null, t.setUserSearchRef = function(e) {
                        t.userSearch = e
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.userSearch && e.isUserSearchOpen !== this.props.isUserSearchOpen && this.userSearch.toggle(e.isUserSearchOpen)
                }, t.prototype.render = function() {
                    var e = this,
                        t = null;
                    return this.props.isWaiting ? t = l.createElement(F._10, {
                        fillContent: !0
                    }) : this.props.userResults && (t = this.props.userResults.map(function(t) {
                        return l.createElement(T.a, {
                            key: t.id
                        }, l.createElement(B, {
                            user: t,
                            onAddClick: e.props.onHostAdded,
                            onAddedClick: e.props.onHostRemoved,
                            key: t.id
                        }))
                    })), l.createElement(F._8, {
                        className: "autohost-list",
                        alignContent: F.b.Center
                    }, l.createElement(F._8, {
                        position: F._15.Relative,
                        margin: {
                            y: 1
                        }
                    }, l.createElement(j.a, {
                        onChange: this.props.onUserInputChange,
                        onFocusInput: this.props.onFocusInput,
                        ref: this.setUserSearchRef,
                        placeholder: Object(d.d)("Search channels to host", "UserSettingsAutohostList"),
                        balloonProps: {
                            show: this.props.isUserSearchOpen,
                            direction: F.r.Bottom,
                            size: F.s.Large
                        },
                        onClose: this.props.onSearchClose,
                        isErrored: this.props.isSearchErrored
                    }, l.createElement(F._8, {
                        className: "autohost-list__user-search"
                    }, l.createElement(U.b, {
                        contentClassName: "autohost-list__user-search-content",
                        suppressScrollX: !0
                    }, l.createElement(F._8, {
                        fullWidth: !0
                    }, t, l.createElement(U.a, {
                        enabled: !this.props.isWaiting && this.props.isUserSearchOpen,
                        loadMore: this.props.loadMore
                    })))))), l.createElement(L, {
                        onHostRemoved: this.props.onHostRemoved,
                        autohostChannels: this.props.autohostChannels,
                        onSortEnd: this.props.onSortEnd,
                        lockToContainerEdges: !0,
                        lockAxis: "y",
                        helperClass: "autohost-list-item--selected",
                        onSortStart: this.props.onSortStart,
                        isSorting: this.props.isSorting,
                        selectedIndex: this.props.selectedIndex,
                        distance: 20
                    }))
                }, t
            }(l.Component)),
            V = 100,
            H = "/kraken/streams/recommended",
            q = "kraken/autohost/list",
            G = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        userResults: [],
                        userTerm: "",
                        isUserSearchOpen: !1,
                        queryID: "",
                        isWaiting: !1,
                        autohostChannels: [],
                        recommendedChannels: null,
                        currentPage: 0
                    }, n.onUserInputChange = function(e) {
                        if (n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), n.props.onUserInput(), !e) return n.setRecommendedChannels(), void n.setState(function() {
                            return {
                                userTerm: "",
                                isWaiting: !1,
                                currentPage: 0
                            }
                        });
                        n.setState({
                            userTerm: e,
                            userResults: [],
                            isWaiting: !0,
                            currentPage: 0
                        }), n.inputTimer = setTimeout(function() {
                            return n.doUserSearch(e)
                        }, V)
                    }, n.loadMore = function() {
                        return c.__awaiter(n, void 0, void 0, function() {
                            var e, t, n, r, i, a = this;
                            return c.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!this.state.userTerm || this.state.queryID || this.state.isWaiting || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, t = null, o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(x.a.Users, this.state.userTerm, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = o.sent(), [3, 4];
                                    case 3:
                                        return n = o.sent(), d.j.error(n, "Algolia page search failed"), this.setState({
                                            isUserSearchOpen: !0
                                        }), this.props.onError(""), [2];
                                    case 4:
                                        return t && t.users ? (r = t.users.hits.filter(function(e) {
                                            return !a.props.user || e.objectID !== a.props.user.id
                                        }).map(function(e) {
                                            return {
                                                id: e.objectID,
                                                avatar: e.profile_image,
                                                login: e.login,
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
                    }, n.addChannel = function(e) {
                        return c.__awaiter(n, void 0, void 0, function() {
                            var t, n, r;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.state.autohostChannels) return [2];
                                        (t = this.state.autohostChannels.map(function(e) {
                                            return e.id
                                        })).push(e.id), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, O.a.putOrThrow(q, {
                                            body: {
                                                targets: t.join(",")
                                            }
                                        })];
                                    case 2:
                                        return i.sent(), [3, 4];
                                    case 3:
                                        return n = i.sent(), r = Object(d.d)("Unable to add user to auto host list", "UserSettingsAutohostList"), d.j.error(n, r, {
                                            target: e
                                        }), this.props.onError(r), [2];
                                    case 4:
                                        return this.setState(function(t) {
                                            var n = t.userResults.findIndex(function(t) {
                                                    return e.id === t.id
                                                }),
                                                r = t.userResults;
                                            t.userResults && n >= 0 && (r = E(t.userResults, function(e) {
                                                return e[n]
                                            }, function(e) {
                                                return e.added = !0, e
                                            }));
                                            var i = t.recommendedChannels ? t.recommendedChannels.findIndex(function(t) {
                                                    return e.id === t.id
                                                }) : -1,
                                                a = t.recommendedChannels;
                                            return t.recommendedChannels && i >= 0 && (a = E(t.recommendedChannels, function(e) {
                                                return e[i]
                                            }, function(e) {
                                                return e.added = !0, e
                                            })), {
                                                userResults: r,
                                                recommendedChannels: a,
                                                autohostChannels: t.autohostChannels.concat([e])
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, n.onFocusInput = function() {
                        n.state.userTerm ? n.state.isUserSearchOpen || n.setState({
                            isUserSearchOpen: !0
                        }) : n.setRecommendedChannels()
                    }, n.setRecommendedChannels = function() {
                        return c.__awaiter(n, void 0, void 0, function() {
                            var e, t, n, r = this;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.state.recommendedChannels) return this.setState(function(e) {
                                            return {
                                                userResults: e.recommendedChannels || [],
                                                isUserSearchOpen: !0
                                            }
                                        }), [2];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, O.a.getOrThrow(H)];
                                    case 2:
                                        return e = i.sent(), [3, 4];
                                    case 3:
                                        return t = i.sent(), d.j.error(t, "Unable to retrieve recomended channels"), [2];
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
                    }, n.onSearchClose = function() {
                        n.setState({
                            isUserSearchOpen: !1
                        })
                    }, n.fetchChannelsList = function() {
                        return c.__awaiter(n, void 0, void 0, function() {
                            var e, t, n, r;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, O.a.getOrThrow(q)];
                                    case 1:
                                        return e = i.sent(), [3, 3];
                                    case 2:
                                        return t = i.sent(), n = Object(d.d)("Unable to fetch auto host list", "UserSettingsAutohostList"), d.j.error(t, n), this.props.onError(n), [2];
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
                    }, n.removeChannel = function(e) {
                        return c.__awaiter(n, void 0, void 0, function() {
                            var t, n, r, i, a;
                            return c.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!this.state.autohostChannels) return [2];
                                        if (t = [], 1 !== this.state.autohostChannels.length) return [3, 5];
                                        o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, O.a.deleteOrThrow(q)];
                                    case 2:
                                        return o.sent(), [3, 4];
                                    case 3:
                                        return n = o.sent(), this.reportChannelError(e, n), [2];
                                    case 4:
                                        return [3, 9];
                                    case 5:
                                        if (t = this.state.autohostChannels.slice(), (r = t.findIndex(function(t) {
                                                return e.id === t.id
                                            })) < 0) return this.reportChannelError(e, new Error("User not found in auto host list")), [2];
                                        t.splice(r, 1), i = t.map(function(e) {
                                            return e.id
                                        }), o.label = 6;
                                    case 6:
                                        return o.trys.push([6, 8, , 9]), [4, O.a.putOrThrow(q, {
                                            body: {
                                                targets: i.join(",")
                                            }
                                        })];
                                    case 7:
                                        return o.sent(), [3, 9];
                                    case 8:
                                        return a = o.sent(), this.reportChannelError(e, a), [2];
                                    case 9:
                                        return this.setState(function(n) {
                                            var r = n.userResults.findIndex(function(t) {
                                                    return e.id === t.id
                                                }),
                                                i = n.userResults;
                                            n.userResults && r >= 0 && (i = E(n.userResults, function(e) {
                                                return e[r]
                                            }, function(e) {
                                                return e.added = !1, e
                                            }));
                                            var a = n.recommendedChannels ? n.recommendedChannels.findIndex(function(t) {
                                                    return e.id === t.id
                                                }) : -1,
                                                o = n.recommendedChannels;
                                            return n.recommendedChannels && a >= 0 && (o = E(n.recommendedChannels, function(e) {
                                                return e[a]
                                            }, function(e) {
                                                return e.added = !1, e
                                            })), {
                                                userResults: i,
                                                recommendedChannels: o,
                                                autohostChannels: t
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, n.onChannelOrderChange = function(e) {
                        return c.__awaiter(n, void 0, void 0, function() {
                            var t, n, r, i;
                            return c.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (e.newIndex === e.oldIndex) return this.setState({
                                            isSorting: !1
                                        }), [2];
                                        t = Object(C.arrayMove)(this.state.autohostChannels, e.oldIndex, e.newIndex), this.setState({
                                            autohostChannels: t,
                                            isSorting: !1
                                        }), n = t.map(function(e) {
                                            return e.id
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, O.a.putOrThrow(q, {
                                            body: {
                                                targets: n.join(",")
                                            }
                                        })];
                                    case 2:
                                        return a.sent(), [3, 4];
                                    case 3:
                                        return r = a.sent(), i = Object(d.d)("Unable to re order auto host list", "UserSettingsAutohostList"), d.j.error(r, i), this.props.onError(i), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.onChannelOrderChangeStart = function() {
                        n.setState({
                            isSorting: !0
                        })
                    }, n.searchClient = new N.a({
                        appId: d.a.algoliaApplicationID,
                        apiKey: d.a.algoliaAPIKey,
                        apolloClient: d.o.apollo.client,
                        logger: d.j,
                        config: d.a
                    }), n
                }
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        return c.__generator(this, function(e) {
                            return this.fetchChannelsList(), [2]
                        })
                    })
                }, t.prototype.render = function() {
                    return l.createElement(z, {
                        onUserInputChange: this.onUserInputChange,
                        isUserSearchOpen: this.state.isUserSearchOpen,
                        userResults: this.state.userResults,
                        onHostAdded: this.addChannel,
                        onFocusInput: this.onFocusInput,
                        autohostChannels: this.state.autohostChannels,
                        onHostRemoved: this.removeChannel,
                        isSearchErrored: this.props.isSearchErrored,
                        isWaiting: this.state.isWaiting,
                        onSearchClose: this.onSearchClose,
                        loadMore: this.loadMore,
                        onSortEnd: this.onChannelOrderChange,
                        onSortStart: this.onChannelOrderChangeStart,
                        isSorting: this.state.isSorting
                    })
                }, t.prototype.doUserSearch = function(e) {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, i, a = this;
                        return c.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    this.inputTimer = 0, t = Object(w.a)(), this.setState({
                                        queryID: t
                                    }), n = null, o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(x.a.Users, e, t)];
                                case 2:
                                    return n = o.sent(), [3, 4];
                                case 3:
                                    return r = o.sent(), d.j.error(r, "Algolia autohost user search failed"), this.setState({
                                        isWaiting: !1,
                                        isUserSearchOpen: !0
                                    }), this.props.onError(""), [2];
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
                    var n = Object(d.d)("Unable to remove channel from auto host list", "UserSettingsAutohostList");
                    d.j.error(t, n, {
                        target: e
                    }), this.props.onError(n)
                }, t
            }(l.Component);
        var W, Q = Object(r.b)(function(e) {
                return {
                    user: Object(s.c)(e)
                }
            })(G),
            K = n("7vx8"),
            Y = n("gLfK");
        ! function(e) {
            e.Random = "random", e.Ordered = "ordered"
        }(W || (W = {}));
        var X = {
            vodcastHosting: !1,
            enabled: !1,
            strategy: W.Random,
            teamHost: !1
        };

        function J(e) {
            var t = e.settings;
            return {
                vodcastHosting: !t.deprioritize_vodcast,
                enabled: t.enabled,
                strategy: t.strategy,
                teamHost: t.team_host
            }
        }
        var $, Z = n("831n");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.Success = 2] = "Success"
        }($ || ($ = {}));
        var ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        autohostSettings: X,
                        requestState: $.Loading
                    }, t.handleToggleEnabled = function(e) {
                        t.saveSettings({
                            enabled: e.currentTarget.checked
                        })
                    }, t.handleToggleTeamHost = function(e) {
                        t.saveSettings({
                            teamHost: e.currentTarget.checked
                        })
                    }, t.handleToggleVodcastHosting = function(e) {
                        t.saveSettings({
                            vodcastHosting: e.currentTarget.checked
                        })
                    }, t.handleSetRandomAutohostStrategy = function() {
                        t.saveSettings({
                            strategy: W.Random
                        })
                    }, t.handleSetOrderedAutohostStrategy = function() {
                        t.saveSettings({
                            strategy: W.Ordered
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, function() {
                                        return c.__awaiter(this, void 0, void 0, function() {
                                            var e;
                                            return c.__generator(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return [4, O.a.get("/kraken/autohost/settings")];
                                                    case 1:
                                                        return (e = t.sent()).error || e.requestError ? [2, {
                                                            isError: !0,
                                                            autohostSettings: void 0
                                                        }] : [2, {
                                                            isError: !1,
                                                            autohostSettings: J(e.body)
                                                        }]
                                                }
                                            })
                                        })
                                    }()];
                                case 1:
                                    return (e = t.sent()).isError ? this.setState({
                                        requestState: $.Error
                                    }) : this.setState({
                                        autohostSettings: e.autohostSettings,
                                        requestState: $.Success
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return l.createElement(l.Fragment, null, this.state.requestState === $.Error && l.createElement(F._8, {
                        margin: {
                            bottom: 3
                        }
                    }, l.createElement(F.Q, {
                        color: F.K.Error
                    }, Object(d.d)("Something went wrong. Give it another try later.", "UserSettingsAutohostSettings"))), l.createElement(_.a, {
                        orientation: F.X.Horizontal,
                        label: Object(d.d)("Auto host channels", "UserSettingsAutohostSettings")
                    }, l.createElement(F._51, {
                        name: "enabled",
                        disabled: this.state.requestState === $.Loading,
                        checked: this.state.autohostSettings.enabled,
                        onChange: this.handleToggleEnabled
                    }), l.createElement(Y.a, {
                        text: Object(d.d)("Automatically host channels from your host list when you're offline", "UserSettingsAutohostSettings")
                    })), l.createElement(_.a, {
                        orientation: F.X.Horizontal,
                        label: Object(d.d)("Host team channels", "UserSettingsAutohostSettings")
                    }, l.createElement(F._51, {
                        name: "teamHost",
                        disabled: this.state.requestState === $.Loading,
                        checked: this.state.autohostSettings.teamHost,
                        onChange: this.handleToggleTeamHost
                    }), l.createElement(Y.a, {
                        text: Object(d.d)("Include team channels in your host list", "UserSettingsAutohostSettings")
                    })), l.createElement(_.a, {
                        orientation: F.X.Horizontal,
                        label: Object(d.d)("Host pre-recorded videos", "UserSettingsAutohostSettings")
                    }, l.createElement(F._51, {
                        name: "vodcastHosting",
                        disabled: this.state.requestState === $.Loading,
                        checked: this.state.autohostSettings.vodcastHosting,
                        onChange: this.handleToggleVodcastHosting
                    }), l.createElement(Y.a, {
                        text: Object(d.d)("Include channels streaming pre-recorded video, like Premieres or Reruns", "UserSettingsAutohostSettings")
                    })), l.createElement(_.a, {
                        orientation: F.X.Horizontal,
                        label: Object(d.d)("Hosting priority", "UserSettingsAutohostSettings")
                    }, l.createElement(F._8, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(F._21, {
                        disabled: this.state.requestState === $.Loading,
                        checked: this.state.autohostSettings.strategy === W.Ordered,
                        onChange: this.handleSetOrderedAutohostStrategy,
                        label: Object(d.d)("Host channels by the order they appear in the list", "UserSettingsAutohostSettings"),
                        name: "hostPriority",
                        value: W.Ordered
                    })), l.createElement(F._21, {
                        disabled: this.state.requestState === $.Loading,
                        checked: this.state.autohostSettings.strategy === W.Random,
                        onChange: this.handleSetRandomAutohostStrategy,
                        label: Object(d.d)("Host channels randomly from the list", "UserSettingsAutohostSettings"),
                        name: "hostPriority",
                        value: W.Random
                    })))
                }, t.prototype.saveSettings = function(e) {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var t;
                        return c.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.setState({
                                        requestState: $.Loading
                                    }), [4, function(e) {
                                        return c.__awaiter(this, void 0, void 0, function() {
                                            var t;
                                            return c.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, O.a.put("/kraken/autohost/settings", {
                                                            body: (r = e, {
                                                                deprioritize_vodcast: !r.vodcastHosting,
                                                                enabled: r.enabled,
                                                                strategy: r.strategy,
                                                                team_host: r.teamHost
                                                            })
                                                        })];
                                                    case 1:
                                                        return (t = n.sent()).error || t.requestError ? [2, {
                                                            isError: !0,
                                                            autohostSettings: void 0
                                                        }] : [2, {
                                                            isError: !1,
                                                            autohostSettings: J(t.body)
                                                        }]
                                                }
                                                var r
                                            })
                                        })
                                    }(c.__assign({}, this.state.autohostSettings, e))];
                                case 1:
                                    return (t = n.sent()).isError ? this.setState({
                                        requestState: $.Error
                                    }) : this.setState({
                                        autohostSettings: t.autohostSettings,
                                        requestState: $.Success
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(l.Component),
            te = Object(K.a)(Z)(ee),
            ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.handleAutohostError = function(e) {
                        t.setState({
                            autohostError: e
                        })
                    }, t.handleAutohostInput = function() {
                        t.setState({
                            autohostError: void 0
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(F._8, null, l.createElement(k.a, {
                        title: Object(d.d)("Autohost Settings", "AutohostSection")
                    }), l.createElement(S.a, null, l.createElement(te, null), l.createElement(_.a, {
                        error: !!this.state.autohostError,
                        errorMessage: this.state.autohostError,
                        label: Object(d.d)("Host List", "AutohostSection")
                    }, l.createElement(Q, {
                        onError: this.handleAutohostError,
                        onUserInput: this.handleAutohostInput,
                        isSearchErrored: !!this.state.autohostError
                    }))))
                }, t
            }(l.Component),
            re = Object(h.d)("AutohostSection", {
                autoReportInteractive: !0
            })(ne),
            ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDashboardLink = function(e) {
                        return l.createElement(F.O, {
                            key: "link",
                            to: "/" + t.props.user.login + "/dashboard/settings/automod"
                        }, e)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(_.a, {
                        label: Object(d.d)("AutoMod", "AutomodSettingsLink")
                    }, this.props.user && Object(d.d)("AutoMod and blocked and permitted terms settings have moved. You can find them in <x:link>your dashboard</x:link>.", {
                        "x:link": this.renderDashboardLink
                    }, "AutomodSettingsLink"))
                }, t
            }(l.Component);
        var ae, oe = Object(r.b)(function(e) {
                return {
                    user: Object(s.c)(e)
                }
            })(ie),
            se = n("N221"),
            ce = n("nqey");
        n("LLwJ");
        ! function(e) {
            e.BannedUserName = "banned-chatters-component__user-name", e.BannedByMessage = "banned-chatters-component__banned-by-message"
        }(ae || (ae = {}));
        var le = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.currentUser && this.props.data.currentUser.bannedUsers && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.currentUser && this.props.data.currentUser.bannedUsers && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser && this.props.data.currentUser.bannedUsers && this.props.data.currentUser.bannedUsers.length > 0;
                    return l.createElement(_.a, {
                        label: Object(d.d)("Banned Chatters", "BannedChatters")
                    }, e ? this.renderBannedChatters() : this.renderEmptyMessage())
                }, t.prototype.renderBannedChatters = function() {
                    var e = this.props.data.currentUser && this.props.data.currentUser.bannedUsers;
                    if (!e) return null;
                    var t = e.filter(function(e) {
                        return e && e.bannedUser && e.bannedUser.id
                    });
                    return l.createElement(se.b, {
                        className: "banned-chatters__list",
                        autoHide: !1
                    }, l.createElement("table", null, l.createElement("tbody", null, t.map(function(e) {
                        var t = Object(d.d)("Banned by {modUserDisplayName} on {date}", {
                            modUserDisplayName: e.modUser && e.modUser.displayName || Object(d.d)("an unknown user", "BannedChatters"),
                            date: Object(d.c)(new Date(e.bannedAt))
                        }, "BannedChatters");
                        return l.createElement("tr", {
                            key: e.bannedUser.id
                        }, l.createElement("td", null, l.createElement(F._2, {
                            padding: {
                                right: 4,
                                bottom: .5
                            }
                        }, l.createElement(F.Q, {
                            ellipsis: !0,
                            bold: !0,
                            "data-test-selector": ae.BannedUserName
                        }, e.bannedUser && e.bannedUser.login))), l.createElement("td", null, l.createElement(F.Q, {
                            "data-test-selector": ae.BannedByMessage
                        }, t)))
                    }))))
                }, t.prototype.renderEmptyMessage = function() {
                    return l.createElement(F.Q, {
                        bold: !0
                    }, Object(d.d)("There are no users banned from your chat.", "BannedChatters"))
                }, t
            }(l.Component),
            ue = Object(i.d)(Object(K.a)(ce), Object(h.d)("BannedChatters"))(le),
            de = n("3zLD"),
            pe = n("oIkB"),
            he = n("bX1P");

        function me() {
            return function(e) {
                var t = function(t) {
                    function n() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.logger = d.o.logger.withCategory("with-chat-settings-update"), e.updateChatSettings = function(t) {
                            var n = e.props.channelID;
                            return 0 === n.length ? Promise.reject("No channelID - unable to update chat settings.") : (e.logger.debug("Updating chat settings", {
                                data: t,
                                channelID: n
                            }), e.props.updateChatSettings(Object(pe.a)(c.__assign({}, t, {
                                channelID: n
                            }))))
                        }, e
                    }
                    return c.__extends(n, t), n.prototype.render = function() {
                        var t = {
                            updateChatSettings: this.updateChatSettings
                        };
                        return l.createElement(e, c.__assign({}, this.props, t))
                    }, n.displayName = "WithChatSettingsUpdate(" + (e.displayName || e.name || "Component") + ")", n
                }(l.Component);
                return Object(i.d)(Object(r.b)(function(e) {
                    return {
                        channelID: e.session.user && e.session.user.id || ""
                    }
                }), Object(K.a)(he, {
                    name: "updateChatSettings"
                }))(t)
            }
        }
        var ge, fe = n("deXC"),
            ve = function(e) {
                var t = e.saving || e.errorLoading;
                return l.createElement(fe.a, {
                    id: "settings-channel-page-block-hyperlinks",
                    label: Object(d.d)("Block Hyperlinks", "BlockHyperlinksToggle"),
                    description: Object(d.d)("Your channel's chat will automatically delete posted URLs except for ones posted by you, moderators, and admins.", "BlockHyperlinksToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            be = n("ar1V"),
            ye = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        checked: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("chat-block-hyperlinks"), t.onChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateChatSettings(e)
                        })
                    }, t.updateChatSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, this.props.updateChatSettings({
                                            hideLinks: e
                                        })];
                                    case 1:
                                        return r.sent(), t = function(t) {
                                            var n = t && t.currentUser,
                                                r = n && n.chatSettings;
                                            return r ? {
                                                currentUser: c.__assign({}, n, {
                                                    chatSettings: c.__assign({}, r, {
                                                        blockLinks: e
                                                    })
                                                })
                                            } : t
                                        }, Object(pe.e)(be, {}, t), this.logger.debug("Updated chat setting", {
                                            hideLinks: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 3];
                                    case 2:
                                        return n = r.sent(), this.logger.warn("Failed to save chat setting", {
                                            err: n
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
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
                    var e = this.props.data.currentUser,
                        t = e && e.chatSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(ve, {
                        loading: this.props.data.loading,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange
                    })
                }, t
            }(l.Component),
            Se = Object(de.compose)(Object(h.d)("BlockHyperlinksToggle"), Object(K.a)(be, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), me())(ye),
            ke = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        var n = +e.currentTarget.value;
                        t.props.onChange(n)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.loading || this.props.saving || this.props.errorLoading,
                        n = [{
                            delay: 0,
                            label: Object(d.d)("Off", "ChatDelayRadioButtons"),
                            selected: 0 === this.props.chatDelayMs
                        }, {
                            delay: 2e3,
                            label: Object(d.d)("2 seconds", "ChatDelayRadioButtons"),
                            selected: 2e3 === this.props.chatDelayMs
                        }, {
                            delay: 4e3,
                            label: Object(d.d)("4 seconds", "ChatDelayRadioButtons"),
                            selected: 4e3 === this.props.chatDelayMs
                        }, {
                            delay: 6e3,
                            label: Object(d.d)("6 seconds", "ChatDelayRadioButtons"),
                            selected: 6e3 === this.props.chatDelayMs
                        }];
                    return l.createElement(_.a, {
                        orientation: F.X.Horizontal,
                        label: Object(d.d)("Non-Mod Chat Delay", "ChatDelayRadioButtons"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, l.createElement(F._8, {
                        display: F.R.Flex,
                        flexDirection: F.T.Row
                    }, n.map(function(n) {
                        var r = "chat-delay:" + n.label;
                        return l.createElement(F._8, {
                            key: r,
                            margin: {
                                right: 2
                            },
                            display: F.R.Flex,
                            flexDirection: F.T.Row
                        }, l.createElement(F._21, {
                            checked: n.selected,
                            value: n.delay.toString(),
                            label: n.label,
                            name: "Non-Mod Chat Delay: " + n.delay / 1e3 + "s",
                            onChange: e.onChange,
                            disabled: t,
                            "data-test-selector": "chat-delay-radio:" + n.delay
                        }))
                    })), l.createElement(Y.a, {
                        text: Object(d.d)("Adds a short delay before non-mods see messages. Any message that is timed out or banned during the delay is removed from chat completely.", "ChatDelayRadioButtons")
                    }))
                }, t
            }(l.Component),
            _e = n("D2cp"),
            Ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        chatDelayMs: 0
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("chat-delay"), t.onChange = function(e) {
                        var n = t.state.chatDelayMs;
                        t.setState({
                            chatDelayMs: e,
                            saving: !0
                        }, function() {
                            t.updateChatSettings(Math.floor(e), n)
                        })
                    }, t.updateChatSettings = function(e, n) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, r;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, this.props.updateChatSettings({
                                            chatDelayInMs: e
                                        })];
                                    case 1:
                                        return i.sent(), t = function(t) {
                                            var n = t && t.currentUser,
                                                r = n && n.chatSettings;
                                            return r ? {
                                                currentUser: c.__assign({}, n, {
                                                    chatSettings: c.__assign({}, r, {
                                                        chatDelayMs: e
                                                    })
                                                })
                                            } : t
                                        }, Object(pe.e)(_e, {}, t), this.logger.debug("Updated chat setting", {
                                            chatDelayInMs: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 3];
                                    case 2:
                                        return r = i.sent(), this.logger.warn("Failed to save chat setting", {
                                            err: r
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            chatDelayMs: n
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (!e.data.loading && this.props.data.loading) {
                        var t = this.getChatDelayFromProps(e);
                        this.setState({
                            chatDelayMs: t
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.chatSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(ke, {
                        chatDelayMs: this.state.chatDelayMs,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange
                    })
                }, t.prototype.getChatDelayFromProps = function(e) {
                    var t = e.data.currentUser;
                    return t && t.chatSettings && t.chatSettings.chatDelayMs || 0
                }, t
            }(l.Component),
            Ce = Object(de.compose)(Object(h.d)("ChatDelayRadioButtons"), Object(K.a)(_e, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), me())(Ee),
            we = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = this.props.loading || this.props.saving || this.props.errorLoading;
                    return (this.props.dirty || this.props.saving) && (e = l.createElement(F._8, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(F.v, {
                        onClick: this.props.onClickSave,
                        state: this.props.saving ? F.A.Loading : F.A.Default
                    }, Object(d.d)("Save Changes", "ChatRulesTextArea")))), l.createElement(_.a, {
                        orientation: F.X.Horizontal,
                        label: Object(d.d)("Chat Rules", "ChatRulesTextArea"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, l.createElement(F._46, {
                        disabled: t,
                        value: this.props.rules,
                        onChange: this.props.onChange,
                        placeholder: this.renderPlaceholderString(),
                        rows: 5
                    }), l.createElement(Y.a, {
                        text: Object(d.d)("Require first-time viewers to agree to your rules before chatting. One rule per line.", "ChatRulesTextArea")
                    }), e)
                }, t.prototype.renderPlaceholderString = function() {
                    return "- " + [Object(d.d)("Be excellent to each other.", "ChatRulesTextArea"), Object(d.d)("Have fun!", "ChatRulesTextArea")].join("\n- ")
                }, t
            }(l.Component),
            Oe = n("WaOj"),
            xe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        initialRules: "",
                        rules: ""
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("chat-rules"), t.onChange = function(e) {
                        t.setState({
                            rules: e.currentTarget.value
                        })
                    }, t.onClickSave = function() {
                        t.setState({
                            saving: !0
                        }, t.updateChatSettings)
                    }, t.updateChatSettings = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), e = this.state.rules.split("\n"), [4, this.props.updateChatSettings({
                                            rules: e
                                        })];
                                    case 1:
                                        return r.sent(), t = function(t) {
                                            var n = t && t.currentUser,
                                                r = n && n.chatSettings;
                                            return r ? {
                                                currentUser: c.__assign({}, n, {
                                                    chatSettings: c.__assign({}, r, {
                                                        rules: e
                                                    })
                                                })
                                            } : t
                                        }, Object(pe.e)(Oe, {}, t), this.logger.debug("Updated chat setting", {
                                            rules: e
                                        }), this.setState(function(e) {
                                            return {
                                                saving: !1,
                                                initialRules: e.rules,
                                                errorSaving: !1
                                            }
                                        }), [3, 3];
                                    case 2:
                                        return n = r.sent(), this.logger.warn("Failed to save chat setting", {
                                            err: n
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (!e.data.loading && this.props.data.loading) {
                        var t = this.getRulesFromProps(e);
                        this.setState({
                            rules: t,
                            initialRules: t
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.chatSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(we, {
                        rules: this.state.rules,
                        dirty: this.state.initialRules !== this.state.rules,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange,
                        onClickSave: this.onClickSave
                    })
                }, t.prototype.getRulesFromProps = function(e) {
                    var t = e.data.currentUser;
                    return t && t.chatSettings && t.chatSettings.rules.join("\n") || ""
                }, t
            }(l.Component),
            Ne = Object(de.compose)(Object(h.d)("ChatRulesTextArea"), Object(K.a)(Oe, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), me())(xe),
            je = function(e) {
                var t = e.saving || e.errorLoading;
                return l.createElement(fe.a, {
                    id: "settings-channel-page-email-verification",
                    label: Object(d.d)("Email Verification", "EmailVerificationToggle"),
                    description: Object(d.d)("Anyone that would like to send messages to your chat room must first verify their email address.", "EmailVerificationToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            Te = n("woYr"),
            Ue = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        checked: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("chat-require-verified-email"), t.onChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateChatSettings(e)
                        })
                    }, t.updateChatSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, this.props.updateChatSettings({
                                            requireVerifiedAccount: e
                                        })];
                                    case 1:
                                        return r.sent(), t = function(t) {
                                            var n = t && t.currentUser,
                                                r = n && n.chatSettings;
                                            return r ? {
                                                currentUser: c.__assign({}, n, {
                                                    chatSettings: c.__assign({}, r, {
                                                        requireVerifiedAccount: e
                                                    })
                                                })
                                            } : t
                                        }, Object(pe.e)(Te, {}, t), this.logger.debug("Updated chat setting", {
                                            requireVerifiedAccount: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 3];
                                    case 2:
                                        return n = r.sent(), this.logger.warn("Failed to save chat setting", {
                                            err: n
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
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
                    var e = this.props.data.currentUser,
                        t = e && e.chatSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(je, {
                        loading: this.props.data.loading,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        onChange: this.onChange,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving
                    })
                }, t
            }(l.Component),
            De = Object(de.compose)(Object(h.d)("EmailVerificationToggle"), Object(K.a)(Te, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), me())(Ue),
            Ie = function(e) {
                var t = e.saving || e.errorLoading;
                return l.createElement(fe.a, {
                    id: "settings-channel-page-mature-content",
                    label: Object(d.d)("Mature Content", "MatureContentToggle"),
                    description: Object(d.d)("Enable this setting if your stream contains content that may be inappropriate for younger audiences. You may never broadcast sexual activity, nudity, threats or extreme violence. Doing so will result in immediate, irrevocable termination of your account. Please make sure your content will comply with the <x:link>Terms of Service</x:link> before broadcasting", {
                        "x:link": function(e) {
                            return l.createElement("a", {
                                key: "mature-content-toggle-tos",
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
            Pe = n("UD8e"),
            Fe = n("oYVU"),
            Ae = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        checked: !1,
                        saving: !1,
                        errorSaving: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("mature-content"), t.onCheckBoxChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateBroadcastSettings(e)
                        })
                    }, t.updateBroadcastSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, r;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.logger.debug("Updating broadcast settings", {
                                                isMature: e
                                            }), !(t = this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update broadcast settings."), [2];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.updateBroadcastSettings(Object(pe.a)({
                                            userID: t,
                                            isMature: e
                                        }))];
                                    case 2:
                                        return i.sent(), n = function(t) {
                                            var n = t && t.currentUser,
                                                r = n && n.broadcastSettings;
                                            return r ? {
                                                currentUser: c.__assign({}, n, {
                                                    broadcastSettings: c.__assign({}, r, {
                                                        isMature: e
                                                    })
                                                })
                                            } : t
                                        }, Object(pe.e)(Fe, {}, n), this.logger.debug("Updated broadcast settings", {
                                            isMature: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 4];
                                    case 3:
                                        return r = i.sent(), this.logger.warn("Failed to update broadcast settings", {
                                            err: r
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data,
                        n = t.currentUser;
                    if (!t.loading && this.props.data.loading) {
                        var r = n && n.broadcastSettings && n.broadcastSettings.isMature || !1;
                        this.setState({
                            checked: r
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.broadcastSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(Ie, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onCheckBoxChange
                    })
                }, t
            }(l.Component),
            Re = Object(i.d)(Object(h.d)("MatureContentToggle"), Object(K.a)(Fe, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), Object(K.a)(Pe, {
                name: "updateBroadcastSettings"
            }))(Ae),
            Me = n("6T7P"),
            Le = n.n(Me),
            Be = (n("jtEV"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onDeclineClicked = function() {
                        t.props.declineInvitation(t.props.index)
                    }, t.onAcceptClick = function() {
                        t.props.acceptInvitation(t.props.index)
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(d.d)("Accept", "TeamInvitationsItem"),
                        t = Object(d.d)("Decline", "TeamInvitationsItem");
                    return l.createElement(F._8, c.__assign({
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(I.a)(this.props), {
                        className: "team-invitations-item"
                    }), l.createElement(F.C, {
                        row: !0
                    }, l.createElement(F._8, {
                        className: "team-invitations-item__avatar"
                    }, l.createElement(F.k, {
                        ratio: F.l.Aspect1x1
                    }, l.createElement(h.b, {
                        src: this.props.invitation.logo || Le.a,
                        alt: Object(d.d)("{displayName} Team Logo", {
                            displayName: this.props.invitation.displayName
                        }, "TeamInvitationsItem")
                    }))), l.createElement(F._8, {
                        flexGrow: 1,
                        display: F.R.Flex,
                        position: F._15.Relative
                    }, l.createElement(F._2, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, l.createElement(F.Q, {
                        type: F._49.Span,
                        ellipsis: !0
                    }, this.props.invitation.name))), l.createElement(F._8, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(F.v, {
                        ariaLabel: e,
                        onClick: this.onAcceptClick,
                        type: F.B.Success,
                        "data-test-selector": "TEAM_INVITATIONS_ITEM_ACCEPT_LINK"
                    }, e)), l.createElement(F._8, null, l.createElement(F.v, {
                        ariaLabel: t,
                        onClick: this.onDeclineClicked,
                        type: F.B.Alert,
                        "data-test-selector": "TEAM_INVITATIONS_ITEM_DECLINE_LINK"
                    }, t))))
                }, t = c.__decorate([Object(h.d)("TeamInvitationsItem")], t)
            }(l.Component)),
            ze = Object(h.d)("TeamInvitationsItem")(Be),
            Ve = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.invitations.length < 1 && !this.props.formErrorMessage ? null : l.createElement(_.a, {
                        label: Object(d.d)("Invitations", "TeamInvitations"),
                        error: !!this.props.formErrorMessage,
                        errorMessage: this.props.formErrorMessage
                    }, this.props.invitations.map(function(t, n) {
                        return l.createElement(ze, {
                            key: t.name,
                            invitation: t,
                            index: n,
                            acceptInvitation: e.props.acceptInvitation,
                            declineInvitation: e.props.declineInvitation
                        })
                    }))
                }, t
            }(l.Component),
            He = Object(h.d)("TeamInvitations")(Ve),
            qe = (n("yHYq"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return l.createElement(F._8, c.__assign({
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(I.a)(this.props), {
                        className: "team-manager-item"
                    }), l.createElement(F.C, {
                        row: !0
                    }, l.createElement(F._8, {
                        className: "team-manager-item__avatar"
                    }, l.createElement(F.k, {
                        ratio: F.l.Aspect1x1
                    }, l.createElement(h.b, {
                        src: this.props.team.logo || Le.a,
                        alt: Object(d.d)("{displayName} Team Logo", {
                            displayName: this.props.team.displayName
                        }, "TeamManagerItem")
                    }))), l.createElement(F._8, {
                        flexGrow: 1,
                        display: F.R.Flex,
                        position: F._15.Relative
                    }, l.createElement(F._2, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, l.createElement(F.Q, {
                        type: F._49.Span,
                        ellipsis: !0
                    }, this.props.team.name))), l.createElement(F._8, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(F.O, {
                        to: "https://www.twitch.tv/team/" + this.props.team.name + "/edit"
                    }, Object(d.d)("Edit", "TeamManagerItem"))), l.createElement(F._8, null, l.createElement(F.O, {
                        to: "https://www.twitch.tv/team/" + this.props.team.name
                    }, Object(d.d)("View", "TeamManagerItem")))))
                }, t
            }(l.Component)),
            Ge = Object(h.d)("TeamManagerItem")(qe),
            We = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.teams.length < 1 && !this.props.formErrorMessage ? null : l.createElement(_.a, {
                        label: Object(d.d)("Manager", "TeamManager"),
                        error: !!this.props.formErrorMessage,
                        errorMessage: this.props.formErrorMessage
                    }, this.props.teams.map(function(e) {
                        return l.createElement(Ge, {
                            key: e.name,
                            team: e
                        })
                    }))
                }, t
            }(l.Component),
            Qe = Object(h.d)("TeamManager")(We),
            Ke = n("V5M+"),
            Ye = n("+8VM");
        ! function(e) {
            e.Message = "confirmation-modal__message", e.ConfirmButton = "confirmation-modal__confirm-button"
        }(ge || (ge = {}));
        var Xe = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleCancelClick = function() {
                    t.props.closeModal()
                }, t.renderConfirmButton = function() {
                    return l.cloneElement(t.props.confirmButton, {
                        onClick: t.handleConfirmClick,
                        "data-test-selector": ge.ConfirmButton
                    })
                }, t.handleConfirmClick = function() {
                    t.props.closeModal(), t.props.onConfirmClick()
                }, t
            }
            return c.__extends(t, e), t.prototype.render = function() {
                return l.createElement(F._35, {
                    background: F.n.Base,
                    padding: {
                        x: 3,
                        top: 3,
                        bottom: 2
                    },
                    display: F.R.Flex,
                    flexDirection: F.T.Column
                }, l.createElement(F._8, {
                    "data-test-selector": ge.Message
                }, this.props.message), l.createElement(F._8, {
                    display: F.R.Flex,
                    flexDirection: F.T.Row,
                    justifyContent: F._7.Center,
                    padding: {
                        top: 2
                    }
                }, l.createElement(F._8, {
                    padding: {
                        right: .5
                    }
                }, l.createElement(F.v, {
                    type: F.B.Text,
                    onClick: this.handleCancelClick
                }, "Cancel")), l.createElement(F._8, {
                    padding: {
                        left: .5
                    }
                }, this.renderConfirmButton())), l.createElement(Ye.a, null))
            }, t
        }(l.Component);
        var Je = Object(r.b)(null, function(e) {
                return Object(i.b)({
                    closeModal: Ke.c
                }, e)
            })(Xe),
            $e = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClick = function() {
                        t.props.showModal({
                            message: t.props.message,
                            confirmButton: t.props.confirmButton,
                            onConfirmClick: t.props.onConfirmClick
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(F.w, c.__assign({}, this.props, {
                        onClick: this.handleClick
                    }))
                }, t
            }(l.Component);
        var Ze = Object(r.b)(null, function(e) {
                return {
                    showModal: function(t) {
                        return e(Object(Ke.d)(Je, t))
                    }
                }
            })($e),
            et = (n("zpQV"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickRemove = function() {
                        t.props.onClickRemove(t.props.index)
                    }, t.onChangeRevenue = function() {
                        t.props.onChangeRevenue(t.props.index)
                    }, t.onChangeStats = function() {
                        t.props.onChangeStats(t.props.index)
                    }, t.onChangePrimary = function() {
                        t.props.onChangePrimary(t.props.index)
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(d.d)("Remove", "TeamMembershipsItem"),
                        t = Object(d.d)("Do you want to remove yourself from this team?", "TeamMembershipsItem"),
                        n = null;
                    return this.props.showPrimaryInput && (n = l.createElement(F._8, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(F._21, {
                        "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_PRIMARY_INPUT",
                        name: "team-memberships-main-radio",
                        onChange: this.onChangePrimary,
                        label: Object(d.d)("Main", "TeamMembershipsItem"),
                        disabled: this.props.updating,
                        checked: this.props.membership.primary
                    }))), l.createElement(F._8, c.__assign({
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(I.a)(this.props), {
                        className: "team-memberships-item"
                    }), l.createElement(F.C, {
                        row: !0
                    }, l.createElement(F._8, {
                        className: "team-memberships-item__avatar",
                        flexShrink: 0
                    }, l.createElement(F.k, {
                        ratio: F.l.Aspect1x1
                    }, l.createElement(h.b, {
                        src: this.props.membership.team.logo || Le.a,
                        alt: Object(d.d)("{displayName} Team Logo", {
                            displayName: this.props.membership.team.displayName
                        }, "TeamMembershipsItem")
                    }))), l.createElement(F._8, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1,
                        position: F._15.Relative,
                        ellipsis: !0
                    }, l.createElement(F.O, {
                        to: "/team/" + this.props.membership.team.name
                    }, l.createElement(F.Q, {
                        type: F._49.Span,
                        ellipsis: !0
                    }, this.props.membership.team.displayName))), l.createElement(F._8, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(F.J, {
                        "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_STATS_INPUT",
                        onChange: this.onChangeStats,
                        label: Object(d.d)("Stats", "TeamMembershipsItem"),
                        disabled: this.props.updating,
                        checked: this.props.membership.statsRevealed
                    })), l.createElement(F._8, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(F.J, {
                        "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_REVENUE_INPUT",
                        onChange: this.onChangeRevenue,
                        label: Object(d.d)("Revenue", "TeamMembershipsItem"),
                        disabled: this.props.updating,
                        checked: this.props.membership.revenueRevealed
                    })), n, l.createElement(F._52, {
                        label: e
                    }, l.createElement(Ze, {
                        ariaLabel: e,
                        icon: F._25.Trash,
                        onConfirmClick: this.onClickRemove,
                        disabled: this.props.updating,
                        message: l.createElement(F.Q, {
                            fontSize: F.V.Size4
                        }, t),
                        confirmButton: l.createElement(F.v, {
                            type: F.B.Alert
                        }, Object(d.d)("Leave Team", "TeamMembershipsItem"))
                    }))))
                }, t
            }(l.Component)),
            tt = Object(h.d)("TeamMembershipsItem")(et),
            nt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.memberships.length < 1 && !this.props.formErrorMessage ? null : l.createElement(_.a, {
                        label: Object(d.d)("Member", "TeamMemberships"),
                        error: !!this.props.formErrorMessage,
                        errorMessage: this.props.formErrorMessage
                    }, this.props.memberships.map(function(t, n) {
                        return l.createElement(tt, {
                            index: n,
                            key: t.team.name,
                            onClickRemove: e.props.onClickRemove,
                            onChangeStats: e.props.onChangeStats,
                            onChangeRevenue: e.props.onChangeRevenue,
                            onChangePrimary: e.props.onChangePrimary,
                            showPrimaryInput: e.props.memberships.length > 1,
                            membership: t,
                            updating: e.props.updating
                        })
                    }))
                }, t
            }(l.Component),
            rt = Object(h.d)("TeamMemberships")(nt),
            it = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return l.createElement(S.a, null, l.createElement(Qe, {
                        teams: this.props.managedTeams,
                        formErrorMessage: this.props.managedError
                    }), l.createElement(He, {
                        invitations: this.props.invitations,
                        acceptInvitation: this.props.acceptInvitation,
                        declineInvitation: this.props.declineInvitation,
                        formErrorMessage: this.props.invitationsError
                    }), l.createElement(rt, {
                        memberships: this.props.memberships,
                        formErrorMessage: this.props.membershipsError,
                        onClickRemove: this.props.onClickRemove,
                        onChangeStats: this.props.onChangeStats,
                        onChangeRevenue: this.props.onChangeRevenue,
                        onChangePrimary: this.props.onChangePrimary,
                        updating: this.props.updatingToggles
                    }))
                }, t
            }(l.Component),
            at = Object(h.d)("TeamSettings")(it),
            ot = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        membershipsError: "",
                        memberships: [],
                        updatingToggles: !1,
                        invitationsError: "",
                        invitations: [],
                        updatingInvitations: !1,
                        managedError: "",
                        managedTeams: []
                    }, t.logger = d.o.logger.withCategory("team-settings"), t.deleteMembership = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, i, a, o, s;
                            return c.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (!this.props.user || 0 === this.state.memberships.length) return [2];
                                        this.setState({
                                            updatingToggles: !0
                                        }), i = this.state.memberships[e], a = "/v5/channels/" + this.props.user.id + "/teams/" + i.team.name + "/membership", c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 3, , 4]), [4, O.a.deleteOrThrow(a)];
                                    case 2:
                                        return r = c.sent(), [3, 4];
                                    case 3:
                                        return o = c.sent(), t = o, [3, 4];
                                    case 4:
                                        return r && r.error && (t = new Error("Team Memberships error"), n = r.error), t ? (s = Object(d.d)("Unable to remove team membership", "TeamMemberships"), this.logger.error(t, s, n), this.setState({
                                            membershipsError: s,
                                            updatingToggles: !1
                                        }), [2]) : (this.setState(function(t) {
                                            var n = t.memberships.slice();
                                            return n.splice(e, 1), {
                                                memberships: n,
                                                updatingToggles: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t.onChangePrimary = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, i, a, o = this;
                            return c.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (this.state.memberships[e].primary) return [2];
                                        this.setState({
                                            updatingToggles: !0
                                        }), s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), [4, this.putChannelsMembership(c.__assign({}, this.state.memberships[e], {
                                            primary: !0
                                        }))];
                                    case 2:
                                        return n = s.sent(), [3, 4];
                                    case 3:
                                        return i = s.sent(), t = i, [3, 4];
                                    case 4:
                                        return n && n.error && (t = new Error("Team Memberships error"), r = n.error), t ? (a = Object(d.d)("Unable to update main team", "TeamMemberships"), this.logger.error(t, a, r), this.setState({
                                            membershipsError: a,
                                            updatingToggles: !1
                                        }), [2]) : (this.setState(function(t) {
                                            var n = o.state.memberships.findIndex(function(e) {
                                                    return e.primary
                                                }),
                                                r = E(t.memberships, function(t) {
                                                    return t[e]
                                                }, function(e) {
                                                    return e.primary = !0, e
                                                });
                                            return n >= 0 && (r[n].primary = !1), {
                                                memberships: r,
                                                updatingToggles: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t.onChangeRevenue = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, i, a;
                            return c.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        this.setState({
                                            updatingToggles: !0
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.putChannelsMembership(c.__assign({}, this.state.memberships[e], {
                                            revenueRevealed: !this.state.memberships[e].revenueRevealed
                                        }))];
                                    case 2:
                                        return n = o.sent(), [3, 4];
                                    case 3:
                                        return i = o.sent(), t = i, [3, 4];
                                    case 4:
                                        return n && n.error && (t = new Error("Team Memberships error"), r = n.error), t ? (a = Object(d.d)("Unable to update revenue preferences", "TeamMemberships"), this.logger.error(t, a, r), this.setState({
                                            membershipsError: a,
                                            updatingToggles: !1
                                        }), [2]) : (this.setState(function(t) {
                                            return {
                                                memberships: E(t.memberships, function(t) {
                                                    return t[e]
                                                }, function(e) {
                                                    return e.revenueRevealed = !e.revenueRevealed, e
                                                }),
                                                updatingToggles: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t.onChangeStats = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, i, a;
                            return c.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        this.setState({
                                            updatingToggles: !0
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.putChannelsMembership(c.__assign({}, this.state.memberships[e], {
                                            statsRevealed: !this.state.memberships[e].statsRevealed
                                        }))];
                                    case 2:
                                        return n = o.sent(), [3, 4];
                                    case 3:
                                        return i = o.sent(), t = i, [3, 4];
                                    case 4:
                                        return n && n.error && (t = new Error("Team Memberships error"), r = n.error), t ? (a = Object(d.d)("Unable to update stats preferences", "TeamMemberships"), this.logger.error(t, a, r), this.setState({
                                            membershipsError: a,
                                            updatingToggles: !1
                                        }), [2]) : (this.setState(function(t) {
                                            return {
                                                memberships: E(t.memberships, function(t) {
                                                    return t[e]
                                                }, function(e) {
                                                    return e.statsRevealed = !e.statsRevealed, e
                                                }),
                                                updatingToggles: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t.putChannelsMembership = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.user ? (t = "/v5/channels/" + this.props.user.id + "/teams/" + e.team.name + "/membership", [4, O.a.put(t, {
                                            body: {
                                                primary: e.primary,
                                                revenue_revealed: e.revenueRevealed,
                                                stats_revealed: e.statsRevealed
                                            }
                                        })]) : [2];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, t.fetchTeamsMembership = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, i, a;
                            return c.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!this.props.user) return [2];
                                        r = "/v5/channels/" + this.props.user.id + "/memberships", o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, O.a.get(r)];
                                    case 2:
                                        return t = o.sent(), this.setState({
                                            memberships: this.deserializeMemberships(t),
                                            updatingToggles: !1
                                        }), [3, 4];
                                    case 3:
                                        return i = o.sent(), e = i, [3, 4];
                                    case 4:
                                        return t && t.error && (e = new Error("Team Memberships error"), n = t.error), e ? (a = Object(d.d)("Failed to load Team data.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to load Team data", n), this.setState({
                                            membershipsError: a
                                        }), [2]) : [2]
                                }
                            })
                        })
                    }, t.deserializeMemberships = function(e) {
                        return e.body ? e.body.memberships.map(function(e) {
                            return {
                                team: {
                                    name: e.team.name,
                                    displayName: e.team.display_name,
                                    logo: e.team.logo_url
                                },
                                primary: e.primary,
                                revenueRevealed: e.revenue_revealed,
                                statsRevealed: e.stats_revealed
                            }
                        }) : []
                    }, t.fetchInvitations = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.props.user) return [2];
                                        e = "/v5/channels/" + this.props.user.id + "/invitations", i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, O.a.getOrThrow(e)];
                                    case 2:
                                        return t = i.sent(), this.setState({
                                            invitations: this.deserializeInvitations(t)
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), r = Object(d.d)("Failed to load Team data.  Please refresh the page and try again", "TeamInvitations"), this.logger.error(n, "Failed to load Team data"), this.setState({
                                            invitationsError: r
                                        }), [2];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.declineInvitation = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.respondToInvitation(e, !1)];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }, t.acceptInvitation = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.respondToInvitation(e, !0)];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }, t.respondToInvitation = function(e, n) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, r, i, a, o, s, l;
                            return c.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        if (!this.props.user || 0 === this.state.invitations.length) return [2];
                                        this.setState({
                                            updatingInvitations: !0
                                        }), a = this.state.invitations[e], o = "/v5/channels/" + this.props.user.id + "/teams/" + a.name + "/invitation", u.label = 1;
                                    case 1:
                                        return u.trys.push([1, 3, , 4]), [4, O.a.put(o, {
                                            body: {
                                                accepted: n
                                            }
                                        })];
                                    case 2:
                                        return i = u.sent(), [3, 4];
                                    case 3:
                                        return s = u.sent(), t = s, [3, 4];
                                    case 4:
                                        return i && i.error && (t = new Error("Team Invitations error"), r = i.error), t ? (l = Object(d.d)("Unable to respond to invitation", "TeamInvitations"), this.logger.error(t, l, r), this.setState({
                                            invitationsError: l,
                                            updatingInvitations: !1
                                        }), [2]) : (this.setState(function(t) {
                                            var r = t.invitations.slice();
                                            r.splice(e, 1);
                                            var i = t.memberships.slice();
                                            return n && i.push({
                                                team: c.__assign({}, a),
                                                revenueRevealed: !1,
                                                statsRevealed: !1,
                                                primary: !1
                                            }), {
                                                memberships: i,
                                                invitations: r,
                                                updatingInvitations: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t.deserializeInvitations = function(e) {
                        return e.body ? e.body.invitations.map(function(e) {
                            return {
                                name: e.team.name,
                                displayName: e.team.display_name,
                                logo: e.team.logo_url
                            }
                        }) : []
                    }, t.fetchManagedTeams = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.props.user) return [2];
                                        e = "/v5/users/" + this.props.user.id + "/teams", i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, O.a.getOrThrow(e)];
                                    case 2:
                                        return t = i.sent(), this.setState({
                                            managedTeams: this.deserializeTeams(t)
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), r = Object(d.d)("Failed to load Team data.  Please refresh the page and try again", "TeamManager"), this.logger.error(n, "Failed to load Team data"), this.setState({
                                            managedError: r
                                        }), [2];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.deserializeTeams = function(e) {
                        return e.body ? e.body.teams.map(function(e) {
                            return {
                                name: e.name,
                                displayName: e.display_name,
                                logo: e.logo_url
                            }
                        }) : []
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.fetchTeamsMembership(), this.fetchInvitations(), this.fetchManagedTeams()
                }, t.prototype.render = function() {
                    return this.hasTeamContentToShow() ? l.createElement(l.Fragment, null, l.createElement(k.a, {
                        title: Object(d.d)("My Teams", "SettingsChannelPage"),
                        description: Object(d.d)("Manage your teams here", "SettingsChannelPage")
                    }), l.createElement(at, {
                        memberships: this.state.memberships,
                        membershipsError: this.state.membershipsError,
                        onClickRemove: this.deleteMembership,
                        onChangeStats: this.onChangeStats,
                        onChangeRevenue: this.onChangeRevenue,
                        onChangePrimary: this.onChangePrimary,
                        updatingToggles: this.state.updatingToggles,
                        managedTeams: this.state.managedTeams,
                        managedError: this.state.managedError,
                        invitations: this.state.invitations,
                        acceptInvitation: this.acceptInvitation,
                        declineInvitation: this.declineInvitation,
                        invitationsError: this.state.invitationsError
                    })) : null
                }, t.prototype.hasTeamContentToShow = function() {
                    return this.state.invitations.length > 0 || this.state.managedTeams.length > 0 || this.state.memberships.length > 0
                }, t
            }(l.Component);
        var st = Object(r.b)(function(e) {
                return {
                    user: Object(s.c)(e)
                }
            })(ot),
            ct = n("ebTC"),
            lt = n("4Q9N"),
            ut = n("J4ib"),
            dt = n("OjIq"),
            pt = n("vm+z"),
            ht = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        deletionError: !1,
                        working: !1
                    }, t.onClickDelete = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!(this.props.data && this.props.data.user && this.props.data.user.id)) return [2];
                                        this.setState({
                                            working: !0
                                        }), e = !1, t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, O.a.putOrThrow("/kraken/users/" + this.props.data.user.id + "/default_images?client_id=" + d.a.authSettings.clientID + "&api_version=" + d.a.defaultAPIVersion, {
                                            body: {
                                                default_channel_offline_image: "empty_channel_offline_image"
                                            }
                                        })];
                                    case 2:
                                        return t.sent(), Object(pe.e)(pt, {
                                            login: this.props.user && this.props.user.login
                                        }, function(e) {
                                            return e.user && (e.user.offlineImageURL = null), e
                                        }), [3, 4];
                                    case 3:
                                        return t.sent(), e = !0, [3, 4];
                                    case 4:
                                        return this.setState({
                                            deletionError: e,
                                            working: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t.showModal = function() {
                        t.props.user && t.props.showUploaderModal(t.props.user)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = null;
                    if (this.props.data && this.props.data.user && this.props.data.user.offlineImageURL) {
                        e = l.createElement("img", {
                            "data-test-selector": "test-channel-offline-image-selector",
                            height: 90,
                            width: 160,
                            src: this.props.data.user.offlineImageURL
                        });
                        var n = Object(ut.d)("Remove my Video Player Banner Image", "UploadVideoPlayerBanner");
                        t = l.createElement(F._8, {
                            margin: {
                                x: 2
                            }
                        }, l.createElement(F.w, {
                            ariaLabel: n,
                            disabled: this.state.working,
                            icon: F._25.Trash,
                            onClick: this.onClickDelete
                        }))
                    } else e = l.createElement(F._24, {
                        asset: F._25.Camera,
                        type: F._26.Alt2,
                        height: 90,
                        width: 160
                    });
                    return l.createElement(F._8, null, l.createElement(k.a, {
                        title: Object(ut.d)("Video Player Banner", "UploadVideoPlayerBanner"),
                        description: Object(ut.d)("This is displayed on the player when your channel is offline.", "UploadVideoPlayerBanner")
                    }), l.createElement(S.a, null, l.createElement(dt.a, null, l.createElement(F._8, {
                        display: F.R.Flex
                    }, e, l.createElement(F._8, {
                        padding: {
                            left: 2,
                            top: 1
                        }
                    }, l.createElement(F._8, {
                        display: F.R.Flex
                    }, l.createElement(F.v, {
                        "data-test-selector": "test-upload-video-player-banner-selector",
                        onClick: this.showModal,
                        type: F.B.Hollow
                    }, l.createElement(F._8, {
                        padding: {
                            x: 1
                        }
                    }, Object(ut.d)("Update", "UploadVideoPlayerBanner"))), t), l.createElement(Y.a, {
                        text: Object(ut.d)("Max 10mb GIF, JPG, or PNG", "UploadVideoPlayerBanner")
                    }), this.state.deletionError && l.createElement(F.Q, {
                        color: F.K.Error
                    }, Object(ut.d)("Sorry, something went wrong. Please try again later.", "UploadVideoPlayerBanner")))))))
                }, t = c.__decorate([Object(K.a)(pt, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.user && e.user.login
                            }
                        }
                    }
                })], t)
            }(l.Component);
        var mt, gt = Object(r.b)(function(e) {
                return {
                    user: Object(s.c)(e)
                }
            }, function(e) {
                return Object(i.b)({
                    showUploaderModal: function(e) {
                        return Object(Ke.d)(ct.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: lt.a.ChannelOfflineImage,
                            showCloser: !0
                        })
                    }
                }, e)
            })(ht),
            ft = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderContentSettingsSection = function() {
                        return l.createElement(F._8, null, l.createElement(k.a, {
                            title: Object(d.d)("Content Settings", "SettingsChannelPage"),
                            description: Object(d.d)("Choose how your channel will display for certain users", "SettingsChannelPage")
                        }), l.createElement(S.a, null, l.createElement(Re, null)))
                    }, t.renderChatSettingsSection = function() {
                        return l.createElement(F._8, null, l.createElement(k.a, {
                            title: Object(d.d)("Chat Options", "SettingsChannelPage"),
                            description: Object(d.d)("Moderate your channel's chat and who you allow in it", "SettingsChannelPage")
                        }), l.createElement(S.a, null, l.createElement(oe, null), l.createElement(Se, null), l.createElement(De, null), l.createElement(Ne, null), l.createElement(Ce, null), l.createElement(ue, null)))
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(f.b, {
                        name: "settings_channel_feature_flag"
                    }, this.renderPageContent())
                }, t.prototype.renderPageContent = function() {
                    return l.createElement(l.Fragment, null, l.createElement(gt, null), l.createElement(re, null), this.renderContentSettingsSection(), l.createElement(st, null), this.renderChatSettingsSection())
                }, t
            }(l.Component),
            vt = Object(i.d)(Object(h.d)("SettingsChannelPage", {
                autoReportInteractive: !0,
                destination: b.a.SettingsChannel
            }), Object(v.a)({
                location: y.PageviewLocation.SettingsPage
            }))(ft);
        n("EQRc");
        ! function(e) {
            e[e.Blizzard = 0] = "Blizzard", e[e.Facebook = 1] = "Facebook", e[e.LeagueOfLegends = 2] = "LeagueOfLegends", e[e.Roku = 3] = "Roku", e[e.PSN = 4] = "PSN", e[e.Twitter = 5] = "Twitter", e[e.Steam = 6] = "Steam", e[e.Xbox = 7] = "Xbox", e[e.Youtube = 8] = "Youtube", e[e.Amazon = 9] = "Amazon"
        }(mt || (mt = {}));
        var bt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = {
                        "connection-image": !0,
                        "connection-image--blizzard": this.props.type === mt.Blizzard,
                        "connection-image--facebook": this.props.type === mt.Facebook,
                        "connection-image--league-of-legends": this.props.type === mt.LeagueOfLegends,
                        "connection-image--roku": this.props.type === mt.Roku,
                        "connection-image--psn": this.props.type === mt.PSN,
                        "connection-image--steam": this.props.type === mt.Steam,
                        "connection-image--twitter": this.props.type === mt.Twitter,
                        "connection-image--xbox": this.props.type === mt.Xbox,
                        "connection-image--youtube": this.props.type === mt.Youtube,
                        "connection-image--amazon": this.props.type === mt.Amazon
                    };
                    return l.createElement("div", {
                        className: D(e)
                    })
                }, t
            }(l.Component),
            yt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClick = function() {
                        t.props.showModal({
                            message: t.props.message,
                            confirmButton: t.props.confirmButton,
                            onConfirmClick: t.props.onConfirmClick
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(F.v, c.__assign({}, this.props, {
                        onClick: this.handleClick
                    }))
                }, t
            }(l.Component);
        var St, kt = Object(r.b)(null, function(e) {
                return {
                    showModal: function(t) {
                        return e(Object(Ke.d)(Je, t))
                    }
                }
            })(yt),
            _t = (n("8+dp"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClick = function() {
                        t.props.onClick()
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(dt.a, null, l.createElement(F._8, {
                        className: "connection-component",
                        display: F.R.Flex,
                        flexDirection: F.T.Row
                    }, this.props.image && l.createElement(F._8, {
                        className: "connection-component__image",
                        "data-test-selector": "connection-image-test-selector",
                        padding: {
                            right: 1,
                            top: .5
                        },
                        flexShrink: 0
                    }, this.props.image), l.createElement(F._8, {
                        className: "connection-component__right",
                        padding: {
                            x: 1
                        },
                        display: F.R.Flex,
                        flexGrow: 1,
                        flexDirection: F.T.Column,
                        fullWidth: !0
                    }, l.createElement(F._8, {
                        className: "connection-component__header",
                        display: F.R.Flex,
                        flexDirection: F.T.Row,
                        alignItems: F.c.Center
                    }, l.createElement(F._8, {
                        className: "connection-component__header-text",
                        display: F.R.Flex,
                        flexDirection: F.T.Column,
                        flexGrow: 1
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size5,
                        "data-test-selector": "connection-title-test-selector",
                        bold: !0
                    }, this.renderTitle()), this.props.subtitle && l.createElement(F._2, {
                        padding: {
                            top: 1
                        }
                    }, l.createElement(F.Q, {
                        "data-test-selector": "connection-subtitle-test-selector"
                    }, this.props.subtitle))), this.renderButton()), this.renderError(), this.props.body && l.createElement(F._8, {
                        className: "connection-component__body",
                        "data-test-selector": "connection-body-test-selector",
                        padding: {
                            top: 2
                        }
                    }, this.props.body), this.props.footer && l.createElement(F._35, {
                        className: "connection-component__footer",
                        "data-test-selector": "connection-footer-test-selector",
                        color: F.K.Alt2,
                        padding: {
                            top: 2
                        }
                    }, this.props.footer))))
                }, t.prototype.renderError = function() {
                    if (this.props.error) {
                        var e = Object(d.d)("Failed to connect. Please try again.", "ThirdPartyConnection"),
                            t = Object(d.d)("Failed to disconnect. Please try again.", "ThirdPartyConnection"),
                            n = this.props.connected ? t : e;
                        return l.createElement(F._8, {
                            padding: {
                                top: .5
                            },
                            alignSelf: F.d.End,
                            "data-test-selector": "connection-error-test-selector"
                        }, l.createElement(F.Q, {
                            color: F.K.Error
                        }, n))
                    }
                }, t.prototype.renderTitle = function() {
                    return this.props.titleLink ? l.createElement(F.O, {
                        to: this.props.titleLink
                    }, this.props.title) : this.props.title
                }, t.prototype.renderButton = function() {
                    var e = Object(d.d)("Disconnect", "ThirdPartyConnection"),
                        t = Object(d.d)("Connect", "ThirdPartyConnection"),
                        n = this.props.working ? F.A.Loading : F.A.Default,
                        r = Object(d.d)("Are you sure you want to disconnect {platform}?", {
                            platform: l.createElement(l.Fragment, null, this.props.title)
                        }, "ThirdPartyConnection"),
                        i = l.createElement(F._2, {
                            padding: {
                                x: 2
                            }
                        }, l.createElement(F.Q, {
                            fontSize: F.V.Size4
                        }, r)),
                        a = l.createElement(F.v, {
                            type: F.B.Alert
                        }, Object(d.d)("Yes, Disconnect", "ThirdPartyConnection"));
                    return this.props.connected ? l.createElement(kt, {
                        type: F.B.Hollow,
                        onConfirmClick: this.handleClick,
                        confirmButton: a,
                        message: i
                    }, e) : l.createElement(F.v, {
                        type: F.B.Hollow,
                        state: n,
                        onClick: this.handleClick
                    }, t)
                }, t
            }(l.Component)),
            Et = n("jb/e"),
            Ct = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.logger = d.j.withCategory("AmazonConnection"), t.handleClick = function() {
                        t.setState({
                            error: !1
                        }), t.connected && t.disconnect()
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (!this.connected) return null;
                    var e = Object(d.d)("Amazon", "AmazonConnectionComponent"),
                        t = Object(d.d)("Connect your Amazon account", "AmazonConnectionComponent"),
                        n = Object(d.d)("When you choose to connect your Amazon account, the profile information connected to your Amazon account, including your name, may be used by Twitch. Twitch will not publicly display your Amazon account information.", "AmazonConnectionComponent"),
                        r = this.props.data.loading;
                    return l.createElement(_t, {
                        image: l.createElement(bt, {
                            type: mt.Amazon
                        }),
                        title: e,
                        subtitle: t,
                        footer: n,
                        error: this.state.error,
                        connected: this.connected,
                        onClick: this.handleClick,
                        working: this.state.working || r
                    })
                }, t.prototype.disconnect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return c.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (!this.userID) return this.logger.debug("Unable to disconnect from Amazon - current user's ID is unknown."), [2];
                                    this.setState({
                                        working: !0
                                    }), e = Object(pe.a)({
                                        userID: this.userID
                                    }), r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, 4, 5]), [4, this.props.unlinkAmazonConnection(e)];
                                case 2:
                                    return t = r.sent(), t.data.unlinkAmazonConnection && !!t.data.unlinkAmazonConnection.isSuccess ? (this.updateConnectionInCache(!1), [3, 5]) : (this.logger.warn("Failed to disconnect from Amazon"), this.setState({
                                        error: !0,
                                        working: !1
                                    }), [2]);
                                case 3:
                                    return n = r.sent(), this.logger.warn("Failed to disconnect from Amazon", {
                                        error: n
                                    }), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.updateConnectionInCache = function(e) {
                    Object(pe.e)(Et, {}, function(t) {
                        return t.currentUser && t.currentUser.accountConnections.hasConnectedAmazon && (t.currentUser.accountConnections.hasConnectedAmazon = e), t
                    })
                }, Object.defineProperty(t.prototype, "userID", {
                    get: function() {
                        return this.props.data.currentUser && this.props.data.currentUser.id
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "connected", {
                    get: function() {
                        return !(!this.props.data.currentUser || !this.props.data.currentUser.accountConnections.hasConnectedAmazon)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component),
            wt = n("Xj08"),
            Ot = Object(de.compose)(Object(K.a)(Et), Object(K.a)(wt, {
                name: "unlinkAmazonConnection"
            }))(Ct),
            xt = n("OAwv"),
            Nt = n("jF7o");
        n("ocV2");
        ! function(e) {
            e.NorthAmerica = "us", e.Europe = "eu", e.Korea = "kr", e.Taiwan = "tw", e.China = "cn", e.SouthEastAsia = "sea"
        }(St || (St = {}));
        var jt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1,
                        region: St.NorthAmerica
                    }, t.logger = d.j.withCategory("BlizzardConnection"), t.handleClick = function() {
                        t.setState({
                            error: !1
                        }), t.connected ? t.disconnect() : t.connect()
                    }, t.handleRegionSelect = function(e) {
                        switch (e.currentTarget.value) {
                            case St.NorthAmerica:
                                return void t.setState({
                                    region: St.NorthAmerica
                                });
                            case St.Europe:
                                return void t.setState({
                                    region: St.Europe
                                });
                            case St.Korea:
                                return void t.setState({
                                    region: St.Korea
                                });
                            case St.Taiwan:
                                return void t.setState({
                                    region: St.Taiwan
                                });
                            case St.China:
                                return void t.setState({
                                    region: St.China
                                });
                            case St.SouthEastAsia:
                                return void t.setState({
                                    region: St.SouthEastAsia
                                });
                            default:
                                return
                        }
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Blizzard Battle.net", "BlizzardConnection"),
                        t = Object(d.d)("By linking your accounts, you agree that Blizzard may provide Twitch with your Battle Tag and certain other account and game information such as your Battle.net ID and skill ranking, and Twitch may provide such things as your Twitch viewing activity to Blizzard. Such information shall be transferred to the companies' locations in the U.S. If you change your mind you must de-link your accounts through both Battle.net and Twitch for both sides to stop sharing data. Once you disconnect your accounts, each party will stop using your personally identifiable information provided by the other party.", "BlizzardConnection"),
                        n = this.props.data.loading;
                    return l.createElement(_t, {
                        image: l.createElement(bt, {
                            type: mt.Blizzard
                        }),
                        title: e,
                        subtitle: this.getSubtitle(),
                        body: this.renderBody(),
                        footer: t,
                        error: this.state.error,
                        connected: this.connected,
                        onClick: this.handleClick,
                        working: this.state.working || n
                    })
                }, t.prototype.renderBody = function() {
                    if (!this.connected) return l.createElement(F._8, {
                        display: F.R.Flex
                    }, l.createElement(F._8, {
                        className: "blizzard-connection__region-select"
                    }, l.createElement(F._30, {
                        value: this.state.region,
                        onChange: this.handleRegionSelect
                    }, l.createElement("option", {
                        value: St.NorthAmerica
                    }, this.getRegionText(St.NorthAmerica)), l.createElement("option", {
                        value: St.Europe
                    }, this.getRegionText(St.Europe)), l.createElement("option", {
                        value: St.Korea
                    }, this.getRegionText(St.Korea)), l.createElement("option", {
                        value: St.Taiwan
                    }, this.getRegionText(St.Taiwan)), l.createElement("option", {
                        value: St.China
                    }, this.getRegionText(St.China)), l.createElement("option", {
                        value: St.SouthEastAsia
                    }, this.getRegionText(St.SouthEastAsia)))))
                }, t.prototype.getSubtitle = function() {
                    return this.connected ? this.props.data.currentUser.blizzardAccount.battleTag + " - " + this.getRegionText(this.props.data.currentUser.blizzardAccount.region) : Object(d.d)("Connect your Blizzard games and Twitch activity", "BlizzardConnection")
                }, t.prototype.getRegionText = function(e) {
                    switch (e) {
                        case St.NorthAmerica:
                            return Object(d.d)("North America (US)", "BlizzardConnection");
                        case St.Europe:
                            return Object(d.d)("Europe (EU)", "BlizzardConnection");
                        case St.Korea:
                            return Object(d.d)("Korea (KR)", "BlizzardConnection");
                        case St.Taiwan:
                            return Object(d.d)("Taiwan (TW)", "BlizzardConnection");
                        case St.China:
                            return Object(d.d)("China (CN)", "BlizzardConnection");
                        case St.SouthEastAsia:
                            return Object(d.d)("South East Asia (SEA)", "BlizzardConnection");
                        default:
                            return
                    }
                }, t.prototype.disconnect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return c.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!this.userID) return this.logger.debug("Unable to disconnect from Blizzard - current user's ID is unknown."), [2];
                                    this.setState({
                                        working: !0
                                    }), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, 4, 5]), e = "/v5/blizzard/" + this.userID, [4, O.a.deleteOrThrow(e)];
                                case 2:
                                    return n.sent(), this.props.data.refetch(), [3, 5];
                                case 3:
                                    return t = n.sent(), this.logger.warn("Failed to disconnect from Blizzard", {
                                        error: t
                                    }), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.connect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, r = this;
                        return c.__generator(this, function(i) {
                            return this.userID ? (this.setState({
                                working: !0
                            }), e = xt.stringify({
                                region: this.state.region
                            }), t = d.a.apiBaseURL + "/v5/blizzard/" + this.userID + "/auth?" + e, this.logger.info(t), (n = window.open(t, "blizzardPopout", "width=480,height=640")) ? (Object(Nt.a)(n, function(e) {
                                r.logger.debug("Blizzard connection window closed", {
                                    success: e
                                }), r.setState({
                                    error: !e,
                                    working: !1
                                }), r.props.data.refetch()
                            }), [2]) : (this.setState({
                                working: !1,
                                error: !0
                            }), [2])) : (this.logger.debug("Unable to start Blizzard connection - current user's ID is unknown."), [2])
                        })
                    })
                }, Object.defineProperty(t.prototype, "userID", {
                    get: function() {
                        return this.props.data.currentUser && this.props.data.currentUser.id
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "connected", {
                    get: function() {
                        return !!(this.props.data.currentUser && this.props.data.currentUser.accountConnections.blizzard && this.props.data.currentUser.accountConnections.blizzard.battleTag && this.props.data.currentUser.blizzardAccount)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component),
            Tt = n("pkUp"),
            Ut = Object(K.a)(Tt)(jt),
            Dt = (n("XCQF"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickDisconnect = function() {
                        t.props.onClickDisconnect(t.props.id)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(_t, {
                        image: l.createElement(h.b, {
                            className: "extension-connection__icon",
                            src: this.iconOrFallback
                        }),
                        title: this.getTitle(),
                        titleLink: this.getLink(),
                        subtitle: this.props.author.length > 0 ? Object(d.d)("by {author}", {
                            author: this.props.author
                        }, "ExtensionConnection") : void 0,
                        footer: this.summaryOrFallbackMessage,
                        onClick: this.onClickDisconnect,
                        connected: !0,
                        error: this.props.disconnectError,
                        working: this.props.working
                    })
                }, t.prototype.getTitle = function() {
                    return 0 === this.props.name.length ? this.props.id : this.props.name
                }, t.prototype.getLink = function() {
                    if (0 !== this.props.name.length) return "/ext/" + this.props.id
                }, Object.defineProperty(t.prototype, "iconOrFallback", {
                    get: function() {
                        return this.props.iconURL.length > 0 ? this.props.iconURL : "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png"
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "summaryOrFallbackMessage", {
                    get: function() {
                        return this.props.summary.length > 0 ? this.props.summary : Object(d.d)("This extension no longer exists", "ExtensionConnection")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component)),
            It = Object(h.d)("ExtensionConnection", {
                autoReportInteractive: !0
            })(Dt),
            Pt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        fetchError: !1,
                        linkedExtensionsByID: {}
                    }, t.logger = d.j.withCategory("extension-connection-list"), t.onClickDisconnect = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        this.logger.debug("Disconnecting", {
                                            id: e
                                        }), this.setExtensionState(e, {
                                            working: !0
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, O.a.putOrThrow("/v5/extensions/" + e + "/auth/link_user", {
                                            body: {
                                                show_user: !1
                                            }
                                        })];
                                    case 2:
                                        return t.sent(), this.setState(function(t) {
                                            var n = c.__assign({}, t.linkedExtensionsByID);
                                            return delete n[e], {
                                                linkedExtensionsByID: n
                                            }
                                        }), [3, 4];
                                    case 3:
                                        return t.sent(), this.logger.warn("Failed to disconnect extension due to error", {
                                            sessionUser: this.props.sessionUser,
                                            extensionID: e
                                        }), this.setExtensionState(e, {
                                            disconnectError: !0,
                                            working: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchExtensionConnections()
                }, t.prototype.render = function() {
                    if (this.state.fetchError) return this.renderEmptyState(!0);
                    for (var e = [], t = 0, n = Object.keys(this.state.linkedExtensionsByID); t < n.length; t++) {
                        var r = n[t],
                            i = this.state.linkedExtensionsByID[r];
                        e.push(l.createElement(It, c.__assign({
                            key: i.id,
                            onClickDisconnect: this.onClickDisconnect
                        }, i)))
                    }
                    return 0 === e.length ? this.renderEmptyState(!1) : l.createElement(l.Fragment, null, e)
                }, t.prototype.renderEmptyState = function(e) {
                    var t = e ? Object(d.d)("Sorry, something went wrong fetching your extension connections. Please try again later.", "ExtensionConnectionList") : Object(d.d)("You have not shared your Twitch username with any extensions.", "ExtensionConnectionList");
                    return l.createElement(dt.a, null, l.createElement(F.Q, {
                        color: e ? F.K.Error : void 0
                    }, t))
                }, t.prototype.fetchExtensionConnections = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, r, i, a, o = this;
                        return c.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    e = {}, t = !1, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), [4, O.a.get("/v5/extensions/linked")];
                                case 2:
                                    if ((n = s.sent()) && n.body && n.body.extensions.length > 0)
                                        for (r = 0, i = n.body.extensions; r < i.length; r++) a = i[r], e[a.id] = {
                                            author: a.author_name,
                                            disconnectError: !1,
                                            iconURL: a.icon_url,
                                            id: a.id,
                                            name: a.name,
                                            summary: a.summary,
                                            working: !1
                                        };
                                    else {
                                        if (n && n.body && 0 === n.body.extensions.length) return this.props.latencyTracking.reportInteractive(), [2];
                                        this.logger.warn("Failed to fetch extension connections for user due to unexpected response", {
                                            sessionUser: this.props.sessionUser,
                                            response: n
                                        }), t = !0
                                    }
                                    return [3, 4];
                                case 3:
                                    return s.sent(), this.logger.warn("Failed to fetch extension connections for user due to network error", {
                                        sessionUser: this.props.sessionUser
                                    }), t = !0, [3, 4];
                                case 4:
                                    return this.setState({
                                        fetchError: t,
                                        linkedExtensionsByID: e
                                    }, function() {
                                        return o.props.latencyTracking.reportInteractive()
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.setExtensionState = function(e, t) {
                    this.setState(function(n) {
                        return {
                            linkedExtensionsByID: c.__assign({}, n.linkedExtensionsByID, (r = {}, r[e] = c.__assign({}, n.linkedExtensionsByID[e], t), r))
                        };
                        var r
                    })
                }, t
            }(l.Component),
            Ft = Object(h.d)("ExtensionsConnectionList")(Pt);
        var At, Rt = Object(r.b)(function(e) {
                return {
                    sessionUser: Object(s.c)(e)
                }
            })(Ft),
            Mt = n("h08i"),
            Lt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !t.facebookConnection
                    }, t.handleClick = function() {
                        t.setState({
                            error: !1
                        }), t.connected ? t.disconnect() : t.connect()
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    !this.facebookConnection && e.data.currentUser && this.setState({
                        working: !1
                    })
                }, t.prototype.render = function() {
                    var e = Object(d.d)("Facebook", "FacebookConnection"),
                        t = Object(d.d)("One-click log in to Twitch with your Facebook account", "FacebookConnection"),
                        n = Object(d.d)("By connecting your account with Facebook, you acknowledge and agree that information you choose to share will be uploaded to these services and may be viewed by these services and other users of these services.", "FacebookConnection");
                    return l.createElement(_t, {
                        image: l.createElement(bt, {
                            type: mt.Facebook
                        }),
                        title: e,
                        subtitle: t,
                        footer: n,
                        connected: this.connected,
                        onClick: this.handleClick,
                        error: this.state.error,
                        working: this.state.working
                    })
                }, Object.defineProperty(t.prototype, "connected", {
                    get: function() {
                        return !!this.facebookConnection
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "facebookConnection", {
                    get: function() {
                        return this.props.data.currentUser && this.props.data.currentUser.accountConnections && this.props.data.currentUser.accountConnections.facebook
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.connect = function() {
                    var e = this;
                    if (!this.connected) {
                        this.setState({
                            working: !0
                        });
                        var t = d.a.apiBaseURL + "/v5/facebook/" + this.props.data.currentUser.id + "/auth",
                            n = window.open(t, "Twitch", "width=1024,height=637");
                        n ? Object(Nt.a)(n, function(t) {
                            t && e.props.data.refetch(), e.setState({
                                error: !t,
                                working: !1
                            })
                        }) : this.setState({
                            working: !1,
                            error: !0
                        })
                    }
                }, t.prototype.disconnect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        return c.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    if (!this.connected) return [2];
                                    this.setState({
                                        working: !0
                                    }), e.label = 1;
                                case 1:
                                    return e.trys.push([1, 3, 4, 5]), [4, O.a.deleteOrThrow("/v5/facebook/" + this.props.data.currentUser.id)];
                                case 2:
                                    return e.sent(), this.removeConnectionInCache(), [3, 5];
                                case 3:
                                    return e.sent(), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.removeConnectionInCache = function() {
                    Object(pe.e)(Mt, {}, function(e) {
                        return e.currentUser && (e.currentUser.accountConnections.facebook = null), e
                    })
                }, t
            }(l.Component),
            Bt = Object(K.a)(Mt)(Lt);
        n("WKFf");
        ! function(e) {
            e.NorthAmerica = "na", e.Brazil = "br", e.EuropeWest = "euw", e.EuropeNordicAndEast = "eune", e.Japan = "jp", e.Korea = "kr", e.LatinAmericaNorth = "lan", e.LatinAmericaSouth = "las", e.Oceanic = "oce", e.Turkey = "tr", e.Russia = "ru", e.PublicBetaEnvironment = "pbe"
        }(At || (At = {}));
        var zt = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    connected: !1,
                    region: At.NorthAmerica,
                    summonerName: "",
                    error: !1,
                    working: !0
                }, t.logger = d.j.withCategory("LeagueOfLegendsConnection"), t.getData = function() {
                    return c.__awaiter(t, void 0, void 0, function() {
                        var e, t, n;
                        return c.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (!this.props.userID) return this.logger.info("Tried to get League of Legends connection info, but the user is not logged in."), [2];
                                    e = xt.stringify({
                                        user_id: this.props.userID
                                    }), t = "/api/lol/summonername?" + e, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, 4, 5]), [4, O.a.get(t)];
                                case 2:
                                    return (n = r.sent()).error || n.requestError ? this.setState({
                                        connected: !1
                                    }) : n.body && this.setState({
                                        connected: !0
                                    }), [3, 5];
                                case 3:
                                    return r.sent(), this.setState({
                                        connected: !1
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.disconnect = function() {
                    return c.__awaiter(t, void 0, void 0, function() {
                        var e, t, n, r;
                        return c.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (!this.props.userID) return this.logger.info("Tried to disconnect from League of Legends but user is not logged in."), [2];
                                    this.setState({
                                        error: !1,
                                        working: !0
                                    }), e = xt.stringify({
                                        user_id: this.props.userID,
                                        client_id: d.a.authSettings.clientID
                                    }), t = "/api/lol/delete?" + e, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, 4, 5]), [4, O.a.get(t)];
                                case 2:
                                    return (n = i.sent()).error || n.requestError ? (this.logger.warn("Failed to disconnect League of Legends account", {
                                        error: n.error,
                                        requestError: n.requestError
                                    }), this.setState({
                                        error: !0
                                    })) : this.setState({
                                        connected: !1
                                    }), [3, 5];
                                case 3:
                                    return r = i.sent(), this.logger.warn("Failed to disconnect League of Legends account", r), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.connect = function() {
                    return c.__awaiter(t, void 0, void 0, function() {
                        var e, t, n, r;
                        return c.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (!this.props.userID) return this.logger.info("Tried to connect to League of Legends but user is not logged in."), [2];
                                    this.setState({
                                        error: !1,
                                        working: !0
                                    }), e = xt.stringify({
                                        user_id: this.props.userID,
                                        client_id: d.a.authSettings.clientID,
                                        summoner: this.state.summonerName,
                                        region: this.state.region
                                    }), t = "/api/lol/verify?" + e, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, 4, 5]), [4, O.a.get(t)];
                                case 2:
                                    return n = i.sent(), n.error || n.requestError || !n.body || 0 === n.body.summoner_id || "" === n.body.summoner_name || "" === n.body.twitch_id ? (this.logger.warn("Failed to connect League of Legends account.", {
                                        error: n.error,
                                        requestError: n.requestError
                                    }), this.setState({
                                        error: !0
                                    })) : this.setState({
                                        connected: !0
                                    }), [3, 5];
                                case 3:
                                    return r = i.sent(), this.logger.warn("Failed to connect League of Legends account.", r), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.handleRegionSelect = function(e) {
                    t.setState({
                        region: e.currentTarget.value
                    })
                }, t.handleSummonerNameChange = function(e) {
                    t.setState({
                        summonerName: e.currentTarget.value
                    })
                }, t
            }
            return c.__extends(t, e), t.prototype.componentDidMount = function() {
                this.getData()
            }, t.prototype.render = function() {
                var e = Object(d.d)("League of Legends", "LeagueOfLegendsConnection"),
                    t = Object(d.d)("Show rank and live in-game information.", "LeagueOfLegendsConnection"),
                    n = Object(d.d)("By connecting your Riot [or, League of Legends] account, you agree to share with Twitch, and allow Twitch to make public, metadata regarding your user profile, gameplay history, and statistics associated with League of Legends. If you no longer want to share this information, please disconnect your accounts.", "LeagueOfLegendsConnection");
                return l.createElement(_t, {
                    image: l.createElement(bt, {
                        type: mt.LeagueOfLegends
                    }),
                    title: e,
                    subtitle: t,
                    body: this.renderBody(),
                    connected: this.state.connected,
                    onClick: this.state.connected ? this.disconnect : this.connect,
                    footer: n,
                    error: this.state.error,
                    working: this.state.working
                })
            }, t.prototype.renderBody = function() {
                var e = [{
                    label: Object(d.d)("North America", "LeagueOfLegendsConnection"),
                    value: At.NorthAmerica
                }, {
                    label: Object(d.d)("Brazil", "LeagueOfLegendsConnection"),
                    value: At.Brazil
                }, {
                    label: Object(d.d)("Europe West", "LeagueOfLegendsConnection"),
                    value: At.EuropeWest
                }, {
                    label: Object(d.d)("Europe Nordic & East", "LeagueOfLegendsConnection"),
                    value: At.EuropeNordicAndEast
                }, {
                    label: Object(d.d)("Japan", "LeagueOfLegendsConnection"),
                    value: At.Japan
                }, {
                    label: Object(d.d)("Korea", "LeagueOfLegendsConnection"),
                    value: At.Korea
                }, {
                    label: Object(d.d)("Latin America North", "LeagueOfLegendsConnection"),
                    value: At.LatinAmericaNorth
                }, {
                    label: Object(d.d)("Latin America South", "LeagueOfLegendsConnection"),
                    value: At.LatinAmericaSouth
                }, {
                    label: Object(d.d)("Oceanic", "LeagueOfLegendsConnection"),
                    value: At.Oceanic
                }, {
                    label: Object(d.d)("Turkey", "LeagueOfLegendsConnection"),
                    value: At.Turkey
                }, {
                    label: Object(d.d)("Russia", "LeagueOfLegendsConnection"),
                    value: At.Russia
                }, {
                    label: Object(d.d)("Public Beta Environment", "LeagueOfLegendsConnection"),
                    value: At.PublicBetaEnvironment
                }];
                return l.createElement(F._8, {
                    className: "league-of-legends-connection__body",
                    "data-test-selector": "league-connection-body"
                }, l.createElement(F._8, {
                    padding: {
                        bottom: 1
                    }
                }, l.createElement(F._8, null, Object(d.d)("1. Log into your League of Legends account. Go to the verification section of your settings, and copy the following into the field: {code}", {
                    code: l.createElement(F.Q, {
                        type: F._49.Span,
                        bold: !0
                    }, "ttv-" + this.props.userID)
                }, "LeagueOfLegendsConnection")), l.createElement(F._8, null, Object(d.d)("2. Enter your summoner name below, select your region, and press the connect button to link your accounts! Note, you may need to wait up to 30 seconds for your changes to take effect.", "LeagueOfLegendsConnection"))), l.createElement(F._8, {
                    display: F.R.Flex
                }, l.createElement(F._8, {
                    padding: {
                        right: 1
                    },
                    flexGrow: 1
                }, l.createElement(F._4, {
                    type: F._5.Text,
                    placeholder: Object(d.d)("Enter Summoner Name", "LeagueOfLegendsConnection"),
                    value: this.state.summonerName,
                    onChange: this.handleSummonerNameChange
                })), l.createElement(F._8, {
                    flexGrow: 1
                }, l.createElement(F._30, {
                    value: this.state.region,
                    onChange: this.handleRegionSelect
                }, e.map(function(e) {
                    return l.createElement("option", {
                        key: e.value,
                        value: e.value
                    }, e.label)
                })))))
            }, t
        }(l.Component);
        var Vt, Ht = Object(r.b)(function(e) {
                var t = Object(s.c)(e);
                return {
                    userID: t && t.id
                }
            })(zt),
            qt = n("rYDZ"),
            Gt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.onClickDisconnect = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        this.setState({
                                            error: !1,
                                            working: !0
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, Object(qt.a)("https://id.twitch.tv/oauth2/authorization/" + this.props.clientID, {
                                            method: "DELETE"
                                        })];
                                    case 2:
                                        if (!t.sent().ok) throw new Error("Non-OK response from id.twitch.tv");
                                        return this.props.onDisconnectSuccess(this.props.clientID), [3, 4];
                                    case 3:
                                        return e = t.sent(), d.j.withCategory("other-connection").warn("OWL client auth disconnect failed.", {
                                            error: e
                                        }), this.setState({
                                            error: !0,
                                            working: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(_t, {
                        connected: !0,
                        error: this.state.error,
                        onClick: this.onClickDisconnect,
                        title: this.props.name,
                        subtitle: this.renderSubtitle(),
                        working: this.state.working
                    })
                }, t.prototype.renderSubtitle = function() {
                    if (this.props.createdAt) return Object(d.d)("Connected {duration}", {
                        duration: Object(d.g)(new Date(this.props.createdAt))
                    }, "OtherConnection")
                }, t
            }(l.Component),
            Wt = n("WYac"),
            Qt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.data.currentUser && this.props.data.currentUser.clientAuthorizations ? 0 === this.props.data.currentUser.clientAuthorizations.length ? this.renderEmptyState(!1) : l.createElement(l.Fragment, null, this.props.data.currentUser.clientAuthorizations.map(function(t) {
                        return l.createElement(Gt, {
                            key: t.clientID,
                            clientID: t.clientID,
                            createdAt: t.createdAt,
                            name: t.clientName,
                            onDisconnectSuccess: e.onDisconnectSuccess
                        })
                    })) : this.props.data.loading ? l.createElement(F._14, null) : this.renderEmptyState(!0)
                }, t.prototype.renderEmptyState = function(e) {
                    var t = e ? Object(d.d)("Sorry, we couldn't fetch your authorized apps right now. Try again later.", "OtherConnectionsList") : Object(d.d)("You have not authorized any apps.", "OtherConnectionsList");
                    return l.createElement(dt.a, null, l.createElement(F.Q, {
                        color: e ? F.K.Error : void 0
                    }, t))
                }, t.prototype.onDisconnectSuccess = function(e) {
                    Object(pe.e)(Wt, {}, function(t) {
                        if (!t.currentUser || !t.currentUser.clientAuthorizations) return t;
                        var n = t.currentUser.clientAuthorizations.slice();
                        return n.splice(n.findIndex(function(t) {
                            return t.clientID === e
                        }), 1), {
                            currentUser: c.__assign({}, t.currentUser, {
                                clientAuthorizations: n
                            })
                        }
                    })
                }, t
            }(l.Component),
            Kt = Object(i.d)(Object(h.d)("OtherConnectionsList"), Object(K.a)(Wt))(Qt),
            Yt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.logger = d.j.withCategory("PSNConnection"), t.handleClick = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            error: !1,
                                            working: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, 4, 5]), [4, Promise.all([O.a.post("/api/platform/psn/disconnect"), O.a.post("/api/platform/psn_dev/disconnect"), O.a.post("/api/platform/psn_cert/disconnect")])];
                                    case 2:
                                        return e = n.sent(), e.every(function(e) {
                                            return !(!e.error && !e.requestError)
                                        }) ? (this.logger.warn("Failed to disconnect from PSN"), this.setState({
                                            error: !0
                                        })) : this.props.data && this.props.data.refetch(), [3, 5];
                                    case 3:
                                        return t = n.sent(), this.logger.warn("Failed to disconnect from PSN", t), this.setState({
                                            error: !0
                                        }), [3, 5];
                                    case 4:
                                        return this.setState({
                                            working: !1
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (!this.isUserConnected()) return null;
                    var e = Object(d.d)("PlayStation", "PSNConnectionPresentation"),
                        t = Object(d.d)("Log in on your PlayStation", "PSNConnectionPresentation");
                    return l.createElement(_t, {
                        image: l.createElement(bt, {
                            type: mt.PSN
                        }),
                        title: e,
                        subtitle: t,
                        connected: !0,
                        onClick: this.handleClick,
                        error: this.state.error,
                        working: this.state.working
                    })
                }, t.prototype.isUserConnected = function() {
                    return !!(this.props.data.currentUser && this.props.data.currentUser.ssoLinks && this.props.data.currentUser.ssoLinks[0] && this.props.data.currentUser.ssoLinks[0].app && this.props.data.currentUser.ssoLinks[0].ssoID)
                }, t
            }(l.Component),
            Xt = n("Op8X"),
            Jt = Object(K.a)(Xt)(Yt),
            $t = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.logger = d.j.withCategory("RokuConnection"), t.handleClick = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, i;
                            return c.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        this.setState({
                                            error: !1,
                                            working: !0
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, 4, 5]), e = "/api/roku/disconnect", [4, O.a.post(e)];
                                    case 2:
                                        return t = a.sent(), n = t.error, r = t.requestError, n || r ? (this.logger.warn("Failed to disconnect from Roku", {
                                            error: n,
                                            requestError: r
                                        }), this.setState({
                                            error: !0
                                        })) : this.props.data && this.props.data.refetch(), [3, 5];
                                    case 3:
                                        return i = a.sent(), this.logger.warn("Failed to disconnect from Roku", i), this.setState({
                                            error: !0
                                        }), [3, 5];
                                    case 4:
                                        return this.setState({
                                            working: !1
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (!this.isUserConnected()) return null;
                    var e = Object(d.d)("Roku", "RokuConnectionPresentation"),
                        t = Object(d.d)("Log in on your Roku", "RokuConnectionPresentation");
                    return l.createElement(_t, {
                        image: l.createElement(bt, {
                            type: mt.Roku
                        }),
                        title: e,
                        subtitle: t,
                        connected: !0,
                        onClick: this.handleClick,
                        error: this.state.error,
                        working: this.state.working
                    })
                }, t.prototype.isUserConnected = function() {
                    return !!(this.props.data && this.props.data.currentUser && this.props.data.currentUser.ssoLinks && this.props.data.currentUser.ssoLinks[0] && this.props.data.currentUser.ssoLinks[0].app && this.props.data.currentUser.ssoLinks[0].ssoID)
                }, t
            }(l.Component),
            Zt = n("iLlo"),
            en = Object(K.a)(Zt)($t),
            tn = n("jZb3"),
            nn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.logger = d.j.withCategory("SteamConnection"), t.handleClick = function() {
                        t.setState({
                            error: !1
                        }), t.connected ? t.disconnect() : t.connect()
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Steam", "SteamConnectionComponent"),
                        t = Object(d.d)("Share your game meta data when you go live", "SteamConnectionComponent"),
                        n = Object(d.d)("By connecting your Steam account, you acknowledge and agree that your Steam ID will be publicly visible in the Twitch API and that Steam will automatically receive information about the Steam content you view while your accounts are connected. If you do not want this information shared, please disconnect your accounts.", "SteamConnectionComponent"),
                        r = this.props.data.loading;
                    return l.createElement(_t, {
                        image: l.createElement(bt, {
                            type: mt.Steam
                        }),
                        title: e,
                        subtitle: t,
                        footer: n,
                        error: this.state.error,
                        connected: this.connected,
                        onClick: this.handleClick,
                        working: this.state.working || r
                    })
                }, t.prototype.disconnect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return c.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!this.userID) return this.logger.debug("Unable to disconnect from steam - current user's ID is unknown."), [2];
                                    this.setState({
                                        working: !0
                                    }), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, 4, 5]), e = "/v5/steam/" + this.userID, [4, O.a.deleteOrThrow(e)];
                                case 2:
                                    return n.sent(), this.removeConnectionInCache(), [3, 5];
                                case 3:
                                    return t = n.sent(), this.logger.warn("Failed to disconnect from Steam", {
                                        error: t
                                    }), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.connect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, r = this;
                        return c.__generator(this, function(i) {
                            return this.userID ? (this.setState({
                                working: !0
                            }), e = xt.stringify({
                                client_id: d.a.legacyClientID
                            }), t = d.a.apiBaseURL + "/v5/steam/" + this.userID + "/auth?" + e, (n = window.open(t, "steamPopout", "width=1024,height=780")) ? (Object(Nt.a)(n, function(e) {
                                r.logger.debug("Steam connection window closed", {
                                    success: e
                                }), r.setState({
                                    error: !e,
                                    working: !1
                                }), e && r.props.data.refetch()
                            }), [2]) : (this.setState({
                                working: !1,
                                error: !0
                            }), [2])) : (this.logger.debug("Unable to start Steam connection - current user's ID is unknown."), [2])
                        })
                    })
                }, t.prototype.removeConnectionInCache = function() {
                    Object(pe.e)(tn, {}, function(e) {
                        return e.currentUser && (e.currentUser.accountConnections.steam = null), e
                    })
                }, Object.defineProperty(t.prototype, "userID", {
                    get: function() {
                        return this.props.data.currentUser && this.props.data.currentUser.id
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "connected", {
                    get: function() {
                        return !(!this.props.data.currentUser || !this.props.data.currentUser.accountConnections.steam)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component),
            rn = Object(K.a)(tn)(nn),
            an = n("st1H"),
            on = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.logger = d.j.withCategory("TwitterConnection"), t.handleClick = function() {
                        t.setState({
                            error: !1
                        }), t.connected ? t.disconnect() : t.connect()
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Twitter", "TwitterConnection"),
                        t = Object(d.d)("Tweet your Channel Feed posts to your followers.", "TwitterConnection"),
                        n = Object(d.d)("By connecting your account with Twitter, you acknowledge and agree that information you choose to share will be uploaded to these services and may be viewed by these services and other users of these services.", "TwitterConnection"),
                        r = this.props.data.loading;
                    return l.createElement(_t, {
                        image: l.createElement(bt, {
                            type: mt.Twitter
                        }),
                        title: e,
                        subtitle: t,
                        footer: n,
                        error: this.state.error,
                        connected: this.connected,
                        working: this.state.working || r,
                        onClick: this.handleClick
                    })
                }, t.prototype.connect = function() {
                    var e = this;
                    if (this.userID) {
                        this.setState({
                            working: !0
                        });
                        var t = d.a.apiBaseURL + "/v5/twitter/" + this.userID + "/auth",
                            n = window.open(t, "twitterPopout", "width=760,height=760");
                        n ? Object(Nt.a)(n, function(t) {
                            e.logger.debug("Twitter connection window closed", {
                                success: t
                            }), e.setState({
                                error: !t,
                                working: !1
                            }), t && e.props.data.refetch()
                        }) : this.setState({
                            working: !1,
                            error: !0
                        })
                    } else this.logger.debug("Unable to start Twitter connection - current user's ID is unknown.")
                }, t.prototype.disconnect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return c.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!this.userID) return this.logger.debug("Unable to disconnect from Twitter - current user's ID is unknown."), [2];
                                    this.setState({
                                        working: !0
                                    }), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, 4, 5]), e = "/v5/twitter/" + this.userID, [4, O.a.deleteOrThrow(e)];
                                case 2:
                                    return n.sent(), this.removeConnectionInCache(), [3, 5];
                                case 3:
                                    return t = n.sent(), this.logger.warn("Failed to disconnect from Twitter", {
                                        error: t
                                    }), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.removeConnectionInCache = function() {
                    Object(pe.e)(an, {}, function(e) {
                        return e.currentUser && (e.currentUser.accountConnections.twitter = null), e
                    })
                }, Object.defineProperty(t.prototype, "userID", {
                    get: function() {
                        return this.props.data.currentUser && this.props.data.currentUser.id
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "connected", {
                    get: function() {
                        return !(!this.props.data.currentUser || !this.props.data.currentUser.accountConnections.twitter)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component),
            sn = Object(K.a)(an)(on),
            cn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1
                    }, t.logger = d.j.withCategory("Xbox360Connection"), t.handleClick = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, i, a;
                            return c.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        this.setState({
                                            error: !1
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), e = xt.stringify({
                                            app: "xb360"
                                        }), t = "/api/xbox/disconnect?" + e, [4, O.a.post(t)];
                                    case 2:
                                        return n = o.sent(), r = n.error, i = n.requestError, r || i ? (this.logger.warn("Failed to disconnect from Xbox 360", {
                                            error: r,
                                            requestError: i
                                        }), this.setState({
                                            error: !0
                                        })) : this.props.data && this.props.data.refetch(), [3, 4];
                                    case 3:
                                        return a = o.sent(), this.logger.warn("Failed to disconnect from Xbox 360", a), this.setState({
                                            error: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (!this.isUserConnected()) return null;
                    var e = Object(d.d)("Xbox 360", "Xbox360ConnectionPresentation"),
                        t = Object(d.d)("Log in on your Xbox 360", "Xbox360ConnectionPresentation");
                    return l.createElement(_t, {
                        image: l.createElement(bt, {
                            type: mt.Xbox
                        }),
                        title: e,
                        subtitle: t,
                        connected: !0,
                        onClick: this.handleClick,
                        error: this.state.error
                    })
                }, t.prototype.isUserConnected = function() {
                    return !!(this.props.data.currentUser && this.props.data.currentUser.ssoLinks && this.props.data.currentUser.ssoLinks[0] && this.props.data.currentUser.ssoLinks[0].app && this.props.data.currentUser.ssoLinks[0].ssoID)
                }, t
            }(l.Component),
            ln = n("upQt"),
            un = Object(K.a)(ln)(cn),
            dn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.logger = d.j.withCategory("XboxOneConnection"), t.handleClick = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, i, a;
                            return c.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        this.setState({
                                            error: !1,
                                            working: !0
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, 4, 5]), e = xt.stringify({
                                            app: "xb1"
                                        }), t = "/api/xbox/disconnect?" + e, [4, O.a.post(t)];
                                    case 2:
                                        return n = o.sent(), r = n.error, i = n.requestError, r || i ? (this.logger.warn("Failed to disconnect from Xbox One", {
                                            error: r,
                                            requestError: i
                                        }), this.setState({
                                            error: !0
                                        })) : this.props.data && this.props.data.refetch(), [3, 5];
                                    case 3:
                                        return a = o.sent(), this.logger.warn("Failed to disconnect from Xbox One", a), this.setState({
                                            error: !0
                                        }), [3, 5];
                                    case 4:
                                        return this.setState({
                                            working: !1
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (!this.isUserConnected()) return null;
                    var e = Object(d.d)("Xbox One", "XboxOneConnectionPresentation"),
                        t = Object(d.d)("Log in and Broadcast directly from your console", "XboxOneConnectionPresentation");
                    return l.createElement(_t, {
                        image: l.createElement(bt, {
                            type: mt.Xbox
                        }),
                        title: e,
                        subtitle: t,
                        connected: !0,
                        onClick: this.handleClick,
                        error: this.state.error,
                        working: this.state.working
                    })
                }, t.prototype.isUserConnected = function() {
                    return !!(this.props.data && this.props.data.currentUser && this.props.data.currentUser.ssoLinks && this.props.data.currentUser.ssoLinks[0] && this.props.data.currentUser.ssoLinks[0].app && this.props.data.currentUser.ssoLinks[0].ssoID)
                }, t
            }(l.Component),
            pn = n("UAbV"),
            hn = Object(K.a)(pn)(dn),
            mn = n("bHrU"),
            gn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.logger = d.j.withCategory("YoutubeConnection"), t.handleClick = function() {
                        t.setState({
                            error: !1
                        }), t.connected ? t.disconnect() : t.connect()
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Youtube", "YoutubeConnectionComponent"),
                        t = Object(d.d)("Export archives", "YoutubeConnectionComponent");
                    return l.createElement(_t, {
                        image: l.createElement(bt, {
                            type: mt.Youtube
                        }),
                        title: e,
                        subtitle: t,
                        connected: this.connected,
                        error: this.state.error,
                        working: this.state.working || this.props.data.loading,
                        onClick: this.handleClick
                    })
                }, Object.defineProperty(t.prototype, "connected", {
                    get: function() {
                        return !(!this.props.data.currentUser || !this.props.data.currentUser.accountConnections.youtube)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.connect = function() {
                    var e = this;
                    if (this.userID) {
                        this.setState({
                            working: !0
                        });
                        var t = d.a.apiBaseURL + "/v5/youtube/" + this.userID + "/auth",
                            n = window.open(t, "YoutubePopout", "width=768,height=640");
                        n ? Object(Nt.a)(n, function(t) {
                            e.logger.debug("Youtube connection window closed", {
                                success: t
                            }), e.setState({
                                error: !t,
                                working: !1
                            }), t && e.props.data.refetch()
                        }) : this.setState({
                            working: !1,
                            error: !0
                        })
                    }
                }, t.prototype.disconnect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!this.userID) return [2];
                                    this.setState({
                                        working: !0
                                    }), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, 4, 5]), [4, O.a.deleteOrThrow("/v5/youtube/" + this.userID)];
                                case 2:
                                    return t.sent(), this.removeConnectionInCache(), [3, 5];
                                case 3:
                                    return e = t.sent(), this.logger.warn("Failed to disconnect from youtube", {
                                        error: e
                                    }), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, Object.defineProperty(t.prototype, "userID", {
                    get: function() {
                        return this.props.data.currentUser && this.props.data.currentUser.id
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.removeConnectionInCache = function() {
                    Object(pe.e)(mn, {}, function(e) {
                        return e.currentUser && (e.currentUser.accountConnections.youtube = null), e
                    })
                }, t
            }(l.Component),
            fn = Object(K.a)(mn)(gn),
            vn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(f.b, {
                        name: "settings_connections_feature_flag"
                    }, this.renderPageContent())
                }, t.prototype.renderPageContent = function() {
                    return l.createElement("div", null, l.createElement(k.a, {
                        title: Object(d.d)("Recommended Connections", "SettingsConnectionsPage"),
                        description: Object(d.d)("Manage your connected accounts and services", "SettingsConnectionsPage")
                    }), l.createElement(S.a, null, l.createElement(Ot, null), l.createElement(Ut, null), l.createElement(rn, null), l.createElement(fn, null), l.createElement(Bt, null), l.createElement(sn, null), l.createElement(Ht, null), l.createElement(hn, null), l.createElement(un, null), l.createElement(Jt, null), l.createElement(en, null)), l.createElement(k.a, {
                        title: Object(d.d)("Extensions Connections", "SettingsConnectionsPage"),
                        description: Object(d.d)("You have shared your Twitch username with these extensions", "SettingsConnectionsPage")
                    }), l.createElement(S.a, null, l.createElement(Rt, null)), l.createElement(k.a, {
                        title: Object(d.d)("Other Connections", "SettingsConnectionsPage"),
                        description: Object(d.d)("You have authorized these apps to use your Twitch account", "SettingsConnectionsPage")
                    }), l.createElement(S.a, null, l.createElement(Kt, null)), l.createElement(k.a, {
                        title: Object(d.d)("Developer Applications", "SettingsConnectionsPage"),
                        description: Object(d.d)("Developer Application management has moved to {devPortalURL}", {
                            devPortalURL: l.createElement(F.O, {
                                to: "https://dev.twitch.tv"
                            }, "https://dev.twitch.tv")
                        }, "SettingsConnectionsPage")
                    }))
                }, t
            }(l.Component),
            bn = Object(i.d)(Object(h.d)("SettingsConnectionsPage", {
                autoReportInteractive: !0,
                destination: b.a.SettingsConnections
            }), Object(v.a)({
                location: y.PageviewLocation.SettingsPage
            }))(vn),
            yn = n("LBNC"),
            Sn = n("UbVv"),
            kn = n("F8kA"),
            _n = (n("hPJb"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.userId, t.props.isEnabled)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(F._35, {
                        className: "advanced-notification-settings-toggle",
                        display: F.R.Flex,
                        justifyContent: F._7.Between,
                        background: F.n.Base,
                        padding: {
                            x: 5,
                            y: 1
                        },
                        borderBottom: !0
                    }, l.createElement(F._8, {
                        margin: {
                            left: 5
                        },
                        display: F.R.Flex,
                        flexGrow: 1,
                        alignItems: F.c.Center,
                        flexWrap: F.U.NoWrap
                    }, l.createElement(F._8, {
                        display: F.R.Flex,
                        flexGrow: 1,
                        flexWrap: F.U.NoWrap
                    }, l.createElement(F._8, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, l.createElement(F._6, {
                        linkTo: "/" + this.props.login
                    }, l.createElement(F.m, {
                        src: this.props.thumbnail,
                        alt: this.props.text,
                        size: 40
                    }))), l.createElement(F._8, {
                        flexGrow: 1,
                        display: F.R.Flex,
                        flexDirection: F.T.Column
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size5
                    }, l.createElement(kn.a, {
                        to: "/" + this.props.login
                    }, this.props.text)), l.createElement(F.Q, {
                        type: F._49.Span,
                        color: F.K.Alt2
                    }, this.props.description))), l.createElement(F._8, {
                        display: F.R.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(F._8, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(F._51, {
                        checked: this.props.isEnabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector",
                        id: this.props.userId
                    })), l.createElement(F._8, {
                        className: this.props.saved ? "advanced-notification-settings-toggle__saved" : "advanced-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size5,
                        color: F.K.Link
                    }, Object(d.d)("Saved", "AdvancedNotificationSettingsToggle"))))))
                }, t
            }(l.Component)),
            En = n("AQCV"),
            Cn = (n("t4xU"), n("EaRL")),
            wn = function(e) {
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
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, r, i;
                            return c.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setAdvancedNotificationSetting ? (t = c.__assign({}, Object(pe.a)({
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
                                        }, Object(pe.e)(Cn, {
                                            limit: 50
                                        }, i), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return l.createElement(F._35, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, l.createElement(F._10, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return l.createElement(p.a, {
                        message: Object(d.d)("Error loading data.", "AdvancedNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return l.createElement(F._35, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, l.createElement(p.a, {
                        message: Object(d.d)("You must be logged in to update your settings", "AdvancedNotificationSettings")
                    }));
                    var e = Object(d.d)("{followCount, plural, one {You follow # channel} other {You follow # channels}}", {
                            followCount: this.props.data.currentUser.follows.totalCount
                        }, "AdvancedNotificationSettings"),
                        t = l.createElement(F._35, {
                            background: F.n.Alt2,
                            borderBottom: !0
                        }, l.createElement(F._6, {
                            onClick: this.toggleCollapse,
                            alpha: !0,
                            "data-test-selector": "header-selector"
                        }, l.createElement(F._8, {
                            display: F.R.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, l.createElement(F._8, {
                            className: "advanced-notification-settings__header",
                            flexGrow: 0
                        }, l.createElement(F.Q, {
                            fontSize: F.V.Size5,
                            color: F.K.Alt2,
                            bold: !0
                        }, Object(d.d)("Advanced", "AdvancedNotificationSettings"))), l.createElement(F._8, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, l.createElement(F.Q, {
                            "data-test-selector": "description-selector",
                            fontSize: F.V.Size5,
                            color: F.K.Alt2
                        }, e)), l.createElement(F._8, {
                            className: this.state.collapsed ? "advanced-notification-settings--collapse" : "advanced-notification-settings--expand",
                            flexGrow: 0,
                            flexShrink: 1,
                            display: F.R.Flex,
                            justifyContent: F._7.Center
                        }, l.createElement(F._24, {
                            asset: F._25.AngleRight,
                            type: F._26.Alt2
                        }))))),
                        n = !this.props.data.loading && !this.props.data.error && !!this.props.data.currentUser.follows.pageInfo.hasNextPage;
                    return this.props.data.currentUser.follows.totalCount > 0 ? this.state.collapsed ? l.createElement(F._35, null, t) : l.createElement(F._35, null, t, l.createElement(F._35, {
                        borderBottom: !0,
                        padding: 2
                    }, l.createElement(F._8, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size5,
                        color: F.K.Alt2
                    }, Object(d.d)("Manage which channels you receive notifications for.", "AdvancedNotificationSettings"))), l.createElement(F._8, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size4,
                        color: F.K.Alt
                    }, e)), l.createElement(F._35, {
                        className: "advanced-notification-settings__toggle-container",
                        borderTop: !0,
                        borderLeft: !0,
                        borderRight: !0,
                        margin: {
                            bottom: .5
                        }
                    }, this.renderToggles(), l.createElement(U.a, {
                        loadMore: this.props.loadMore,
                        enabled: n,
                        pixelThreshold: 200
                    })))) : null
                }, t.prototype.renderToggles = function() {
                    if (this.props.data && this.props.data.currentUser) {
                        for (var e = [], t = 0, n = this.props.data.currentUser.follows.edges; t < n.length; t++) {
                            var r = n[t];
                            r.node && r.node.id && r.node.followers && e.push(l.createElement(_n, {
                                userId: r.node.id,
                                text: r.node.displayName,
                                login: r.node.login,
                                description: Object(d.d)("{followerCount,number} followers", {
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
            }(l.Component),
            On = Object(i.d)(Object(K.a)(Cn, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 50
                        }
                    }
                },
                props: function(e) {
                    return c.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: Cn,
                                variables: c.__assign({}, e.data.variables, {
                                    cursor: e.data.currentUser && e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return e.currentUser && n.currentUser ? {
                                        currentUser: c.__assign({}, n.currentUser, {
                                            follows: c.__assign({}, n.currentUser.follows, {
                                                edges: Object(pe.c)(e.currentUser.follows.edges, n.currentUser.follows.edges)
                                            })
                                        })
                                    } : n
                                }
                            })
                        }
                    })
                }
            }), Object(K.a)(En, {
                name: "setAdvancedNotificationSetting"
            }), Object(h.d)("AdvancedNotificationSettings"))(wn),
            xn = n("OOv5"),
            Nn = n("JBcW"),
            jn = (n("mVHD"), d.o.logger.withCategory("browser-push-notifications-settings")),
            Tn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hide: !1,
                        loading: !0,
                        deciding: !0,
                        hasSubscription: !1
                    }, t.toggle = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.setState({
                                            deciding: !0
                                        }), [4, xn.a.hasPushSubscription()];
                                    case 1:
                                        if (!t.sent()) return [3, 6];
                                        t.label = 2;
                                    case 2:
                                        return t.trys.push([2, 4, , 5]), [4, xn.a.userUnsubscribe(Nn.a.Settings)];
                                    case 3:
                                        return t.sent(), [3, 5];
                                    case 4:
                                        return e = t.sent(), jn.error(e, "user unsubscribe failed"), [3, 5];
                                    case 5:
                                        return [3, 8];
                                    case 6:
                                        return [4, xn.a.userSubscribe(Nn.a.Settings)];
                                    case 7:
                                        if (t.sent(), Object(Sn.a)()) return this.setState({
                                            hide: !0
                                        }), [2];
                                        t.label = 8;
                                    case 8:
                                        return [4, this.updateSubscriptionState()];
                                    case 9:
                                        return t.sent(), this.setState({
                                            deciding: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 3, , 4]), [4, xn.a.initialize()];
                                case 1:
                                    return t.sent(), [4, this.updateSubscriptionState()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    return e = t.sent(), jn.error(e, "unexpected error initializing push manager"), this.setState({
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
                    var e = this.state.hasSubscription ? Object(d.d)("Turn Off", "BrowserPushNotificationsSettings") : Object(d.d)("Turn On", "BrowserPushNotificationsSettings");
                    return l.createElement(F._35, {
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
                    }, l.createElement(F._35, {
                        className: "browser-push-notification-settings",
                        padding: {
                            left: 5,
                            right: 4
                        },
                        display: F.R.Flex,
                        margin: {
                            x: 5
                        }
                    }, l.createElement(F._8, {
                        className: "browser-push-notification-settings__body",
                        display: F.R.Flex,
                        flexWrap: F.U.NoWrap,
                        flexGrow: 1
                    }, l.createElement(F._8, {
                        margin: {
                            right: 1
                        },
                        flexGrow: 1
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size4,
                        color: F.K.Alt
                    }, Object(d.d)("Receive Browser Notifications for this Device", "BrowserPushNotificationsSettings")), l.createElement(F._8, {
                        padding: {
                            top: .5
                        }
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size5,
                        color: F.K.Alt2
                    }, Object(d.d)("See notifications at the corner of your screen, even when you’re not on Twitch", "BrowserPushNotificationsSettings")))), l.createElement(F._8, {
                        flexShrink: 0
                    }, l.createElement(F.v, {
                        "data-test-selector": "qa-browser-push-notifications-settings-toggle",
                        disabled: this.state.deciding,
                        onClick: this.toggle
                    }, e)))))
                }, t.prototype.updateSubscriptionState = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, xn.a.hasPushSubscription()];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        hasSubscription: e
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(l.Component),
            Un = Object(de.compose)(Object(h.d)("BrowserPushNotificationsSettings"))(Tn),
            Dn = (n("iOZM"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.category, t.props.isEnabled)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(F._35, {
                        className: "platform-notification-settings-toggle",
                        display: F.R.Flex,
                        flexWrap: F.U.NoWrap,
                        alignItems: F.c.Start,
                        background: F.n.Alt,
                        margin: {
                            top: 1,
                            bottom: .5
                        },
                        padding: {
                            right: 5
                        }
                    }, l.createElement(F._8, {
                        className: "platform-notification-settings-toggle__body",
                        display: F.R.Flex,
                        flexDirection: F.T.Column,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, l.createElement(F._8, {
                        margin: {
                            bottom: .5
                        }
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size4
                    }, this.props.text)), l.createElement(F.Q, {
                        fontSize: F.V.Size5,
                        color: F.K.Alt2
                    }, this.props.description)), l.createElement(F._8, {
                        display: F.R.Flex,
                        margin: {
                            top: .5
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(F._8, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(F._51, {
                        checked: this.props.isEnabled,
                        disabled: this.props.disabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector"
                    })), l.createElement(F._8, {
                        className: this.props.saved ? "platform-notification-settings-toggle__saved" : "platform-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size5,
                        color: F.K.Link
                    }, Object(d.d)("Saved", "PlatformNotificationSettingsToggle")))))
                }, t
            }(l.Component)),
            In = n("g+dK"),
            Pn = (n("RC0U"), n("1f5k"));
        ! function(e) {
            e.onsite = "onsite", e.email = "email", e.push = "push"
        }(Vt || (Vt = {}));
        var Fn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collapsed: t.props.startCollapsed,
                        saved: new Set
                    }, t.VisibleSettings = [{
                        category: "LIVE",
                        name: Object(d.d)("Live", "PlatformNotificationSettings"),
                        description: Object(d.d)("When a streamer I follow goes Live", "PlatformNotificationSettings")
                    }, {
                        category: "VIDEOS",
                        name: Object(d.d)("Video Broadcast", "PlatformNotificationSettings"),
                        description: Object(d.d)("When a channel I follow starts a Vodcast. This also includes Video Comment notifications", "PlatformNotificationSettings")
                    }, {
                        category: "CLIPS",
                        name: Object(d.d)("Clips", "PlatformNotificationSettings"),
                        description: Object(d.d)("Receive notifications for clips you made and clips made by your viewers", "PlatformNotificationSettings")
                    }, {
                        category: "EVENTS",
                        name: Object(d.d)("Events", "PlatformNotificationSettings"),
                        description: Object(d.d)("Any time an event I follow starts", "PlatformNotificationSettings")
                    }, {
                        category: "CHAT",
                        name: Object(d.d)("Chat", "PlatformNotificationSettings"),
                        description: Object(d.d)("Any time there’s Rooms activity related to me.", "PlatformNotificationSettings")
                    }, {
                        category: "FRIENDS",
                        name: Object(d.d)("Friends", "PlatformNotificationSettings"),
                        description: Object(d.d)("When a friend sends me a message", "PlatformNotificationSettings")
                    }, {
                        category: "STREAMER",
                        name: Object(d.d)("Your Channel", "PlatformNotificationSettings"),
                        description: Object(d.d)("Receive notifications when viewers follow your channel or auto host you", "PlatformNotificationSettings")
                    }, {
                        category: "MODERATOR",
                        name: Object(d.d)("Moderator", "PlatformNotificationSettings"),
                        description: Object(d.d)("Any time I get a notification as a moderator", "PlatformNotificationSettings")
                    }, {
                        category: "COMMERCE",
                        name: Object(d.d)("Gifts and Rewards", "PlatformNotificationSettings"),
                        description: Object(d.d)("Receive notifications for drops, crates, and subscription gifts", "PlatformNotificationSettings")
                    }], t.toggleAll = function() {
                        t.toggleSettingCategory("ALL", t.getGlobalStateForPlatform())
                    }, t.toggleCollapse = function() {
                        t.setState(function(e) {
                            return {
                                collapsed: !e.collapsed
                            }
                        })
                    }, t.toggleSettingCategory = function(e, n) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, r, i, a, o = this;
                            return c.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setNotificationSetting ? (t = n ? "off" : "on", r = c.__assign({}, Object(pe.a)({
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
                                        }, Object(pe.e)(Pn, {}, a), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return l.createElement(F._8, {
                        padding: 1
                    }, l.createElement(F._10, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return l.createElement(p.a, {
                        message: Object(d.d)("Error loading data.", "PlatformNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return l.createElement(F._35, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(p.a, {
                        message: Object(d.d)("You must be logged in to update your settings.", "PlatformNotificationSettings")
                    }));
                    var e = l.createElement(F._35, {
                        background: F.n.Alt2,
                        borderBottom: !0
                    }, l.createElement(F._6, {
                        onClick: this.toggleCollapse,
                        alpha: !0
                    }, l.createElement(F._8, {
                        display: F.R.Flex,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, l.createElement(F._8, {
                        className: "platform-notification-settings__header",
                        flexGrow: 0,
                        "data-test-selector": "collapsible-header"
                    }, l.createElement(F.Q, {
                        "data-test-selector": "display-name",
                        fontSize: F.V.Size5,
                        color: F.K.Alt2,
                        bold: !0
                    }, this.props.displayName)), l.createElement(F._8, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size5,
                        color: F.K.Alt2
                    }, this.getSettingTurnedOnMessage())), l.createElement(F._8, {
                        className: this.state.collapsed ? "platform-notification-settings--collapse" : "platform-notification-settings--expand",
                        flexGrow: 0,
                        flexShrink: 1,
                        display: F.R.Flex,
                        justifyContent: F._7.Center
                    }, l.createElement(F._24, {
                        asset: F._25.AngleRight,
                        type: F._26.Alt2
                    })))));
                    return this.state.collapsed ? l.createElement(F._35, null, e) : l.createElement(F._35, null, e, l.createElement(F._35, {
                        padding: 2,
                        borderBottom: !0
                    }, l.createElement(F._8, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(F.Q, {
                        "data-test-selector": "description",
                        fontSize: F.V.Size5,
                        color: F.K.Alt2
                    }, this.props.description)), l.createElement(F._35, {
                        display: F.R.Flex,
                        margin: {
                            y: .5
                        },
                        borderBottom: !0
                    }, l.createElement(F._8, {
                        className: "platform-notification-settings__all",
                        display: F.R.Flex,
                        padding: {
                            bottom: 1,
                            right: 5
                        },
                        justifyContent: F._7.Center,
                        flexGrow: 1,
                        flexWrap: F.U.NoWrap
                    }, l.createElement(F._8, {
                        className: "platform-notification-settings__all-body",
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size4,
                        color: F.K.Alt,
                        "data-test-selector": "explanation"
                    }, this.props.explanation)), l.createElement(F._8, {
                        display: F.R.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(F._8, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(F._51, {
                        "data-test-selector": "all-toggle",
                        checked: this.getGlobalStateForPlatform(),
                        onChange: this.toggleAll
                    })), l.createElement(F._8, {
                        padding: {
                            x: 1
                        },
                        "data-test-selector": "saved-selector",
                        className: this.getDisplaySaved("ALL") ? "platform-notification-settings__saved" : "platform-notification-settings__saved--hide"
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size5,
                        color: F.K.Link
                    }, Object(d.d)("Saved", "PlatformNotificationSettings")))))), l.createElement(F._8, {
                        className: "platform-notification-settings__toggle-container",
                        display: F.R.Flex,
                        flexDirection: F.T.Column,
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
                    return 0 !== t && this.getGlobalStateForPlatform() ? t < e ? Object(d.d)("Some notifications turned on", "PlatformNotificationSettings") : Object(d.d)("All notifications turned on", "PlatformNotificationSettings") : Object(d.d)("All notifications turned off", "PlatformNotificationSettings")
                }, t.prototype.getGlobalStateForPlatform = function() {
                    var e = this.getSettingByCategory("ALL");
                    return !!e && e.isEnabled
                }, t.prototype.renderToggles = function() {
                    for (var e = [], t = 0, n = this.VisibleSettings; t < n.length; t++) {
                        var r = n[t],
                            i = this.getSettingByCategory(r.category);
                        i && e.push(l.createElement(Dn, {
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
            }(l.Component),
            An = Object(i.d)(Object(h.d)("PlatformNotificationSettings"), Object(K.a)(Pn, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network"
                    }
                }
            }), Object(K.a)(In, {
                name: "setNotificationSetting"
            }))(Fn),
            Rn = (n("nq6q"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e = "" !== location.search ? xt.parse(location.search) : {},
                        t = !!e["open-advanced"] && "true" === e["open-advanced"];
                    return l.createElement(F._35, {
                        className: "notification-settings__body",
                        borderRight: !0,
                        borderLeft: !0,
                        borderTop: !0
                    }, l.createElement(F._35, {
                        background: F.n.Alt,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, l.createElement(F._8, {
                        margin: {
                            bottom: .5
                        }
                    }, l.createElement(F.Q, {
                        fontSize: F.V.Size3,
                        color: F.K.Alt
                    }, Object(d.d)("Notifications", "SettingsNotificationsPage"))), l.createElement(F._8, null, l.createElement(F.Q, {
                        fontSize: F.V.Size5,
                        color: F.K.Alt2
                    }, Object(d.d)("Get the notifications you care about, where you want to see them.", "SettingsNotificationsPage")))), l.createElement(An, {
                        startCollapsed: t,
                        platformName: Vt.onsite,
                        displayName: Object(d.d)("On Twitch", "SettingsNotificationsPage"),
                        description: Object(d.d)("We'll always keep you informed on important updates to Twitch and your account.", "SettingsNotificationsPage"),
                        explanation: Object(d.d)("Send me notifications on Twitch about", "SettingsNotificationsPage"),
                        key: "onsite",
                        extraSettings: this.renderBrowserPushNotifications()
                    }), l.createElement(An, {
                        startCollapsed: !0,
                        platformName: Vt.email,
                        displayName: Object(d.d)("By Email", "SettingsNotificationsPage"),
                        description: Object(d.d)("Receive important notifications through email. You may receive additional emails about features and content on Twitch. You can turn off specific emails using the unsubscribe link included in each message.", "SettingsNotificationsPage"),
                        explanation: Object(d.d)("Send me emails about", "SettingsNotificationsPage"),
                        key: "email"
                    }), l.createElement(An, {
                        platformName: Vt.push,
                        startCollapsed: !0,
                        displayName: Object(d.d)("On Mobile", "SettingsNotificationsPage"),
                        description: Object(d.d)("Get Twitch updates on the go. Receive notifications right on your phone's home screen.", "SettingsNotificationsPage"),
                        explanation: Object(d.d)("Send me push notifications", "SettingsNotificationsPage"),
                        key: "push"
                    }), l.createElement(On, {
                        startCollapsed: !t
                    }))
                }, t.prototype.renderBrowserPushNotifications = function() {
                    return Object(yn.a)() && !Object(Sn.a)() ? l.createElement(Un, null) : null
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(h.d)("SettingsNotificationsPage", {
                    destination: b.a.NotificationSettingsPage
                }), Object(v.a)({
                    location: y.PageviewLocation.SettingsPage
                })], t)
            }(l.Component)),
            Mn = n("S1vB"),
            Ln = n("o6O8"),
            Bn = function(e) {
                var t = e.saving || e.errorLoading;
                return l.createElement(fe.a, {
                    id: "settings-prime-page-post-subscriptions",
                    label: Object(d.d)("Post Subscriptions", "PostSubscriptionsToggle"),
                    description: Object(d.d)("Share in chat when you use your free subscription benefit", "PostSubscriptionsToggle"),
                    extraDescription: Object(d.d)("Let your favorite streamer know your free subscription supports them. Turning this off will hide your subscription announcement in chat.", "PostSubscriptionsToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            zn = n("jfv9"),
            Vn = n("TubT"),
            Hn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        checked: !1,
                        saving: !1,
                        errorSaving: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("post-subscriptions-toggle"), t.onCheckBoxChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateSettings(e)
                        })
                    }, t.updateSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, r;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.logger.debug("Updating prime settings", {
                                                shouldEnableSubCreditChatNotification: e
                                            }), !(t = this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update prime settings."), [2];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.updatePostSubscriptions(Object(pe.a)({
                                            shouldEnableSubCreditChatNotification: e,
                                            userID: t
                                        }))];
                                    case 2:
                                        return i.sent(), n = function(t) {
                                            var n = t && t.currentUser,
                                                r = n && n.primeSettings;
                                            return r ? {
                                                currentUser: c.__assign({}, n, {
                                                    primeSettings: c.__assign({}, r, {
                                                        isSubCreditChatNotificationEnabled: e
                                                    })
                                                })
                                            } : t
                                        }, Object(pe.e)(Vn, {}, n), this.logger.debug("Updated prime settings", {
                                            shouldEnableSubCreditChatNotification: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 4];
                                    case 3:
                                        return r = i.sent(), this.logger.warn("Failed to update prime settings", {
                                            err: r
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data,
                        n = t.currentUser;
                    if (!t.loading && this.props.data.loading) {
                        var r = n && n.primeSettings && n.primeSettings.isSubCreditChatNotificationEnabled || !1;
                        this.setState({
                            checked: r
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.primeSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(Bn, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onCheckBoxChange
                    })
                }, t
            }(l.Component),
            qn = Object(i.d)(Object(h.d)("PostSubscriptionsToggle"), Object(K.a)(Vn, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), Object(K.a)(zn, {
                name: "updatePostSubscriptions"
            }))(Hn),
            Gn = n("UILf"),
            Wn = n("NXs7"),
            Qn = n("XdSf"),
            Kn = n("SZoP"),
            Yn = n("VAT8"),
            Xn = n("cAbv"),
            Jn = (n("OB6b"), n("vgA0")),
            $n = n("s/Z0"),
            Zn = [255, 255, 255],
            er = [32, 28, 43],
            tr = 3,
            nr = /^#[A-Fa-f0-9]{3,6}$/;

        function rr(e) {
            var t = [e[0], e[1], e[2]].map(function(e) {
                return (e /= 255) <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
            });
            return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
        }

        function ir(e, t) {
            return (rr(e) + .05) / (rr(t) + .05)
        }
        var ar, or, sr = "#b22222";
        ! function(e) {
            e.ConfirmButton = "confirm-button", e.ContrastWarning = "contrast-warning", e.InvalidWarning = "invalid-warning", e.SaveError = "save-error"
        }(ar || (ar = {})),
        function(e) {
            e.Empty = "empty", e.Dirty = "dirty", e.SaveError = "save-error", e.InvalidInput = "invalid-input", e.Success = "success", e.Loading = "loading"
        }(or || (or = {}));
        var cr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedColor: t.props.data.currentUser && t.props.data.currentUser.chatColor || sr,
                        inputColor: t.props.data.currentUser && t.props.data.currentUser.chatColor || sr,
                        status: or.Empty,
                        isHighContrast: !0
                    }, t.onChangeInput = function(e) {
                        var n = e.currentTarget.value.trim();
                        0 !== n.indexOf("#") && (n = "#" + n), t.validateColor(n), t.setState({
                            inputColor: n
                        })
                    }, t.onBlurInput = function() {
                        t.state.status !== or.InvalidInput && t.onChangeColor(t.state.inputColor)
                    }, t.onChangeColor = function(e) {
                        var n, r = (4 === (n = $n(e)).length && (n = [n[0], n[1], n[2]]), Jn(n));
                        t.validateColor(r), t.setState({
                            selectedColor: r,
                            inputColor: r
                        })
                    }, t.onClickSave = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (!this.state.selectedColor) return [2];
                                        this.setState({
                                            status: or.Loading
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.props.updateChatColorMutation(this.state.selectedColor)];
                                    case 2:
                                        return e.sent(), this.setState({
                                            status: or.Success
                                        }), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            status: or.SaveError
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.data.currentUser && e.data.currentUser && e.data.currentUser.chatColor && this.setState({
                        selectedColor: e.data.currentUser.chatColor,
                        inputColor: e.data.currentUser.chatColor
                    })
                }, t.prototype.render = function() {
                    if (!this.props.data.currentUser || this.props.data.networkStatus < 3) return null;
                    var e = Object(d.d)("Hex Color Code", "ChatColorPicker");
                    return l.createElement(F._8, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(k.a, {
                        title: Object(d.d)("Chat Color", "ChatColorPicker"),
                        description: Object(d.d)("Pick a color, any color! It may take several minutes for your color to update in the chat room.", "ChatColorPicker")
                    }), l.createElement(F._8, {
                        display: F.R.Flex,
                        margin: {
                            bottom: 1
                        },
                        className: "react-simple-colorpicker"
                    }, l.createElement(Gn, {
                        color: this.state.selectedColor,
                        onChange: this.onChangeColor
                    }), this.renderPreview(Object(d.d)("Light Mode", "ChatColorPicker"), this.props.data.currentUser, Wn.a.Light), this.renderPreview(Object(d.d)("Dark Mode", "ChatColorPicker"), this.props.data.currentUser, Wn.a.Dark)), l.createElement(F.W, {
                        id: "chat-color-picker__color-code-input",
                        label: e
                    }, l.createElement(F._8, {
                        padding: {
                            bottom: 1
                        },
                        className: "color-picker-input",
                        display: F.R.Flex,
                        alignItems: F.c.Center
                    }, l.createElement(F._4, {
                        id: "chat-color-picker__color-code-input",
                        "data-a-target": "color-picker-input",
                        type: F._5.Text,
                        value: this.state.inputColor,
                        onChange: this.onChangeInput,
                        onBlur: this.onBlurInput,
                        maxLength: 7
                    }), l.createElement(F._8, {
                        padding: {
                            left: 1
                        }
                    }, this.renderSaveButton())), this.renderStatus()))
                }, t.prototype.renderStatus = function() {
                    return this.state.status === or.SaveError ? l.createElement(F.Q, {
                        color: F.K.Error,
                        "data-test-selector": ar.SaveError
                    }, Object(d.d)("Oops, something went wrong. Please try again.", "ChatColorPicker")) : this.state.status === or.InvalidInput ? l.createElement(F.Q, {
                        color: F.K.Error,
                        "data-test-selector": ar.InvalidWarning
                    }, Object(d.d)("Please enter a valid hexadecimal color code.", "ChatColorPicker")) : this.state.isHighContrast ? void 0 : this.renderContrastWarning()
                }, t.prototype.renderContrastWarning = function() {
                    var e = 1,
                        t = Object(d.d)("<x:strong>Heads up!</x:strong> Some colors may be <x:strong>hard to read</x:strong> in light or dark themes. Check it here before chatting.", {
                            "x:strong": function(t) {
                                return l.createElement(F.Q, {
                                    key: "bold-text-" + e++,
                                    type: F._49.Span,
                                    bold: !0
                                }, t)
                            }
                        }, "ChatColorPicker"),
                        n = l.createElement(F._8, {
                            display: F.R.Inline,
                            verticalAlign: F._59.TextTop,
                            margin: {
                                right: .5
                            }
                        }, l.createElement(F._24, {
                            asset: F._25.Warning
                        }));
                    return l.createElement(F._8, {
                        "data-test-selector": ar.ContrastWarning
                    }, n, l.createElement(F.Q, {
                        type: F._49.Span,
                        color: F.K.Alt2
                    }, t))
                }, t.prototype.renderSaveButton = function() {
                    var e = this.state.status !== or.Dirty && this.state.status !== or.SaveError && this.state.status !== or.Success,
                        t = F.A.Default;
                    this.state.status === or.Loading ? t = F.A.Loading : this.state.status === or.Success && (t = F.A.Success);
                    var n = F.B.Default;
                    return this.state.status === or.Success && (n = F.B.Success), l.createElement(F.v, {
                        "data-test-selector": ar.ConfirmButton,
                        "data-a-target": "color-confirm-button",
                        disabled: e,
                        onClick: this.onClickSave,
                        state: t,
                        type: n
                    }, Object(d.d)("Confirm Color", "ChatColorPicker"))
                }, t.prototype.renderPreview = function(e, t, n) {
                    return l.createElement(F._8, {
                        display: F.R.Flex,
                        flexDirection: F.T.Column,
                        justifyContent: F._7.Center,
                        margin: {
                            left: 2
                        }
                    }, l.createElement(F.Q, {
                        color: F.K.Alt2
                    }, e), l.createElement("div", {
                        style: {
                            width: "165px",
                            height: "60px",
                            backgroundColor: this.state.selectedColor
                        }
                    }), l.createElement(F._8, {
                        className: Object(Yn.a)(n)
                    }, l.createElement(F._35, {
                        background: F.n.Base,
                        padding: {
                            y: 2
                        },
                        justifyContent: F._7.Center,
                        display: F.R.Flex
                    }, l.createElement(F._8, {
                        margin: {
                            right: .5
                        }
                    }, l.createElement("span", {
                        style: {
                            color: this.state.selectedColor
                        }
                    }, l.createElement(F.Q, {
                        bold: !0
                    }, Object(Kn.a)(t.login, t.displayName)))), l.createElement(F.Q, {
                        color: F.K.Base
                    }, Object(d.d)("Hi there!", "ChatColorPicker")))))
                }, t.prototype.validateColor = function(e) {
                    var t, n, r;
                    e && (r = e, nr.test(r.trim())) ? this.setState({
                        status: or.Dirty,
                        isHighContrast: (t = e, n = $n(t), ir(Zn, n) >= tr && ir(n, er) >= tr)
                    }) : this.setState({
                        status: or.InvalidInput
                    })
                }, t
            }(l.Component),
            lr = Object(de.compose)(Object(K.a)(Xn), Object(Qn.a)())(cr),
            ur = function(e) {
                if (!e.emote.id) return null;
                var t = "https://static-cdn.jtvnw.net/emoticons/v1/" + e.emote.id;
                return l.createElement(F.N, {
                    alt: e.emote.text || "",
                    src: t + "/1.0",
                    srcSet: {
                        "1x": t + "/1.0",
                        "1.5x": t + "/1.5",
                        "2x": t + "/2.0",
                        "3x": t + "/3.0",
                        "4x": t + "/4.0"
                    }
                })
            },
            dr = (n("0cQv"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.selectEmoteSet = function() {
                        !t.props.selected && t.props.selectEmoteSet && t.props.emoteSet && t.props.emoteSet.id && t.props.selectEmoteSet(t.props.emoteSet.id)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.emoteSet.id || !this.props.emoteSet.emotes) return null;
                    var e = this.props.emoteSet.emotes.slice(0, 3).map(function(e) {
                            return l.createElement(ur, {
                                key: e.id,
                                emote: e
                            })
                        }),
                        t = D({
                            "emote-set-button": !0,
                            "emote-set-button-unselected": !this.props.selected
                        });
                    return l.createElement(F._35, {
                        className: t,
                        "data-a-target": this.props.selected ? "emote-set-button" : "emote-set-button-unselected",
                        display: F.R.InlineFlex
                    }, l.createElement(F.v, {
                        onClick: this.selectEmoteSet,
                        "data-a-target": "emote-set-button-" + this.props.emoteSet.id,
                        type: F.B.Text
                    }, l.createElement(F._8, {
                        padding: {
                            top: .5
                        }
                    }, e)))
                }, t
            }(l.Component)),
            pr = (n("5xsI"), function(e) {
                if (!e.emoteSet.emotes) return null;
                var t = e.emoteSet.emotes.filter(function(e) {
                    return e.id && e.text
                }).map(function(t) {
                    return l.createElement(F._8, {
                        key: t.id,
                        "data-a-target": "emote-" + e.emoteSet.id,
                        display: F.R.InlineFlex,
                        flexDirection: F.T.Column,
                        alignItems: F.c.Center,
                        padding: 1
                    }, l.createElement(F._8, {
                        display: F.R.InlineFlex,
                        flexGrow: 1,
                        alignItems: F.c.Center
                    }, l.createElement(ur, {
                        emote: t
                    })), l.createElement(F.Q, null, t.text))
                });
                return l.createElement(F._8, {
                    className: "emote-set-preview",
                    "data-a-target": "emote-set-preview",
                    padding: {
                        top: 1
                    },
                    textAlign: F._45.Center,
                    display: F.R.Flex,
                    alignItems: F.c.Stretch,
                    justifyContent: F._7.Center,
                    flexWrap: F.U.Wrap
                }, t)
            }),
            hr = n("pNd4"),
            mr = n("cpRO");
        var gr, fr, vr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1
                    }, t.selectEmoteSet = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!this.props.selectEmoteSet) return [2];
                                        this.setState({
                                            error: !1
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.selectEmoteSet(e)];
                                    case 2:
                                        return t.sent(), [3, 4];
                                    case 3:
                                        return t.sent(), this.setState({
                                            error: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (!this.currentEmoteSet || !this.primeEmoticons || !this.primeEmoticons.emoticonSets) return l.createElement(F._14, {
                        width: 300,
                        height: 200
                    });
                    var t = this.primeEmoticons.emoticonSets.map(function(t) {
                        return l.createElement(dr, {
                            key: t.id,
                            selected: e.currentEmoteSet.id === t.id,
                            emoteSet: t,
                            selectEmoteSet: e.selectEmoteSet
                        })
                    });
                    return l.createElement(F._8, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(k.a, {
                        title: Object(d.d)("Emoticons", "PrimeEmotesSetPicker"),
                        description: Object(d.d)("Choose which set of emoticons you want to use while chatting. You can always change your mind later.", "PrimeEmotesSetPicker")
                    }), l.createElement(F._8, null, t, this.renderErrorMessage(), l.createElement(pr, {
                        emoteSet: this.currentEmoteSet
                    })))
                }, Object.defineProperty(t.prototype, "primeEmoticons", {
                    get: function() {
                        if (this.props.data.currentUser && this.props.data.currentUser.primeSettings && this.props.data.currentUser.primeSettings.primeEmoticons && this.props.data.currentUser.primeSettings.primeEmoticons.emoticonSets) return this.props.data.currentUser.primeSettings.primeEmoticons
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "currentEmoteSet", {
                    get: function() {
                        if (this.primeEmoticons) {
                            var e = this.primeEmoticons,
                                t = e.emoticonSets,
                                n = e.currentSetName;
                            return t.find(function(e) {
                                return e.id === n
                            })
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.renderErrorMessage = function() {
                    return this.state.error ? l.createElement(F._8, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(F.Q, {
                        color: F.K.Error
                    }, Object(d.d)("Sorry, something went wrong selecting emotes. Please try again later.", "PrimeEmotesSetPicker"))) : null
                }, t
            }(l.Component),
            br = Object(de.compose)(Object(K.a)(hr), function(e) {
                var t = this;
                return Object(K.a)(mr, {
                    props: function(n) {
                        return {
                            selectEmoteSet: function(r) {
                                return c.__awaiter(t, void 0, void 0, function() {
                                    var t, i, a;
                                    return c.__generator(this, function(o) {
                                        switch (o.label) {
                                            case 0:
                                                if (t = e(n.ownProps), i = t.currentUserID, a = t.primeSettings, !(i && a && a.primeEmoticons && a.primeEmoticons.emoticonSets && n.mutate)) throw new Error("selectEmoteSetMutation is not ready");
                                                o.label = 1;
                                            case 1:
                                                return o.trys.push([1, 3, , 4]), [4, n.mutate(c.__assign({}, Object(pe.a)({
                                                    primeEmoticonsSetName: r,
                                                    userID: i
                                                }), {
                                                    optimisticResponse: {
                                                        updatePrimeSettings: {
                                                            __typename: "UpdatePrimeSettingsPayload",
                                                            primeSettings: {
                                                                __typename: "PrimeSettings",
                                                                id: a.id,
                                                                primeEmoticons: {
                                                                    __typename: "PrimeEmoticons",
                                                                    currentSetName: r
                                                                }
                                                            }
                                                        }
                                                    }
                                                }))];
                                            case 2:
                                                if (o.sent().data.updatePrimeSettings.primeSettings.primeEmoticons.currentSetName !== r) throw new Error("Could not update prime settings.");
                                                return [3, 4];
                                            case 3:
                                                throw o.sent();
                                            case 4:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })
            }(function(e) {
                return {
                    primeSettings: e.data.currentUser && e.data.currentUser.primeSettings,
                    currentUserID: e.data.currentUser && e.data.currentUser.id
                }
            }))(vr),
            yr = n("cumT"),
            Sr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.shouldOpenURL = !0, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(f.b, {
                        name: "settings_premium_feature_flag"
                    }, this.renderPageContent())
                }, t.prototype.renderPageContent = function() {
                    return this.props.data.currentUser && this.props.data.requestInfo ? this.props.data.currentUser.hasPrime ? l.createElement(l.Fragment, null, l.createElement(lr, null), l.createElement(br, null), l.createElement(k.a, {
                        title: Object(d.d)("Subscriptions Settings", "SettingsPrimePage"),
                        description: Object(d.d)("Choose how your subscription activity will display in chat", "SettingsPrimePage")
                    }), l.createElement(S.a, null, l.createElement(qn, null))) : Object(Mn.a)(this.props.data.requestInfo.countryCode) ? (this.shouldOpenURL && (this.shouldOpenURL = !1, window.open("https://twitch.amazon.com/prime?ref_=sm_w_tsp_p_t")), l.createElement(Ln.a, null)) : l.createElement(u.b, {
                        to: "/settings/turbo"
                    }) : null
                }, t
            }(l.Component),
            kr = Object(i.d)(Object(h.d)("SettingsPrimePage", {
                autoReportInteractive: !0,
                destination: b.a.SettingsPrime
            }), Object(v.a)({
                location: y.PageviewLocation.SettingsPage
            }), Object(K.a)(yr))(Sr),
            _r = n("+0KR"),
            Er = n("WrTc"),
            Cr = function() {
                return l.createElement(p.a, {
                    message: Object(d.d)("Error loading user data. Please try again later.", "SettingsPageError")
                })
            },
            wr = function() {
                return l.createElement(_.a, {
                    label: Object(d.d)("Disable Your Twitch Account", "DisableAccountLink"),
                    orientation: F.X.Horizontal
                }, Object(d.d)("If you want to disable your Twitch account, you can do so from the <x:link>Disable Account</x:link> page.", {
                    "x:link": function(e) {
                        return l.createElement("a", {
                            key: "disable-account-link",
                            href: "https://www.twitch.tv/user/disable_account",
                            "data-a-target": "disable-account-link"
                        }, e)
                    }
                }, "DisableAccountLink"))
            },
            Or = 5e3;
        ! function(e) {
            e[e.InvalidAddress = 1] = "InvalidAddress", e[e.InvalidDomain = 2] = "InvalidDomain"
        }(gr || (gr = {})),
        function(e) {
            e[e.Error = 0] = "Error", e[e.CanSendVerificationEmail = 1] = "CanSendVerificationEmail", e[e.VerificationEmailSent = 2] = "VerificationEmailSent", e[e.Verified = 3] = "Verified"
        }(fr || (fr = {}));
        var xr, Nr = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = d.j.withCategory("email-setting"), n.onClickVerify = function() {
                        return c.__awaiter(n, void 0, void 0, function() {
                            var e, t = this;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            working: !0
                                        }), e = fr.Error, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, O.a.put("/kraken/users/" + this.props.id, {
                                            body: {
                                                email: this.props.email
                                            }
                                        })];
                                    case 2:
                                        return 200 === n.sent().status && (e = fr.VerificationEmailSent), [3, 4];
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
                                                    status: fr.CanSendVerificationEmail
                                                })
                                            }, Or)
                                        }), [2]
                                }
                            })
                        })
                    }, n.state = {
                        status: t.verified ? fr.Verified : fr.CanSendVerificationEmail,
                        working: !1
                    }, n
                }
                return c.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.feedbackTimerHandle && clearTimeout(this.feedbackTimerHandle)
                }, t.prototype.render = function() {
                    var e = !!this.props.error || this.state.status === fr.Error,
                        t = this.props.disabled || this.state.working;
                    return l.createElement(F._8, {
                        display: F.R.Flex,
                        flexWrap: F.U.NoWrap
                    }, l.createElement(_.a, {
                        id: "profile-account-info-setting__email-input",
                        error: e,
                        errorMessage: e ? this.renderEmailError() : void 0,
                        label: Object(d.d)("Email", "EmailSetting")
                    }, l.createElement(F._8, {
                        display: F.R.Flex
                    }, l.createElement(F._8, {
                        flexGrow: 1
                    }, l.createElement(F._4, {
                        id: "profile-account-info-setting__email-input",
                        type: F._5.Email,
                        disabled: t,
                        onChange: this.props.onChange,
                        required: !0,
                        value: this.props.email,
                        "data-a-target": "profile-email-input"
                    })), this.renderVerifyButton(t)), l.createElement(Y.a, {
                        text: this.renderVerificationMessage(),
                        textDataTarget: "profile-email-description"
                    })))
                }, t.prototype.renderVerifyButton = function(e) {
                    switch (this.state.status) {
                        case fr.CanSendVerificationEmail:
                            return l.createElement(F.v, {
                                type: F.B.Default,
                                disabled: this.props.dirty || e,
                                onClick: this.onClickVerify,
                                "data-a-target": "profile-email-verify-button"
                            }, Object(d.d)("Verify", "EmailSetting"));
                        case fr.VerificationEmailSent:
                            return l.createElement(F.v, {
                                type: F.B.Success,
                                disabled: !0,
                                "data-a-target": "profile-email-sent-button"
                            }, Object(d.d)("Email Sent", "EmailSetting"));
                        case fr.Error:
                            return l.createElement(F.v, {
                                type: F.B.Alert,
                                disabled: !0,
                                "data-a-target": "profile-email-error-button"
                            }, Object(d.d)("Error", "EmailSetting"));
                        case fr.Verified:
                        default:
                            return null
                    }
                }, t.prototype.renderVerificationMessage = function() {
                    switch (this.state.status) {
                        case fr.CanSendVerificationEmail:
                            return Object(d.d)("This email is linked to your account - please take a moment to verify", "EmailSetting");
                        case fr.VerificationEmailSent:
                            return Object(d.d)("Verification email sent!", "EmailSetting");
                        case fr.Verified:
                            return Object(d.d)("This email is linked to your account", "EmailSetting");
                        default:
                            return null
                    }
                }, t.prototype.renderEmailError = function() {
                    if (this.state.status === fr.Error) return Object(d.d)("Failed to send verification email - please try again later", "EmailSetting");
                    switch (this.props.error) {
                        case gr.InvalidAddress:
                            return Object(d.d)("Please provide a valid email address", "EmailSetting");
                        case gr.InvalidDomain:
                            return Object(d.d)("Admins must use their work email address", "EmailSetting");
                        default:
                            return
                    }
                }, t
            }(l.Component),
            jr = n("FuaS"),
            Tr = n("FsFC");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.Eligible = 2] = "Eligible", e[e.NotEligible = 3] = "NotEligible"
        }(xr || (xr = {}));
        var Ur = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: xr.Loading
                    }, t.logger = d.j.withCategory("username-setting"), t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.emailVerified && this.fetchChangeEligibility()
                }, t.prototype.componentDidUpdate = function(e) {
                    !e.emailVerified && this.props.emailVerified && this.fetchChangeEligibility()
                }, t.prototype.render = function() {
                    return l.createElement(F._8, {
                        display: F.R.Flex,
                        flexWrap: F.U.NoWrap
                    }, l.createElement(_.a, {
                        label: Object(d.d)("Username", "UsernameSetting"),
                        error: this.state.status === xr.Error,
                        errorMessage: this.state.status === xr.Error ? this.renderErrorMessage() : void 0
                    }, l.createElement(F._8, {
                        display: F.R.Flex
                    }, l.createElement(F._8, {
                        flexGrow: 1
                    }, l.createElement(F._4, {
                        type: F._5.Text,
                        disabled: !0,
                        value: this.props.login,
                        "data-a-target": "profile-username-input"
                    })), this.state.status === xr.Eligible && l.createElement(F.w, {
                        ariaLabel: Object(d.d)("Edit Username", "UsernameSetting"),
                        icon: F._25.Edit,
                        linkTo: "https://www.twitch.tv/logins/new",
                        "data-a-target": "profile-edit-username-button"
                    })), l.createElement(Y.a, {
                        textDataTarget: "profile-username-description",
                        text: this.renderChangeEligibilityMessage()
                    })))
                }, t.prototype.renderChangeEligibilityMessage = function() {
                    if (!1 === this.props.emailVerified) return Object(d.d)("You must have a verified email to update your username", "UsernameSetting");
                    switch (this.state.status) {
                        case xr.Loading:
                            return Object(d.d)("Loading username change eligibility...", "UsernameSetting");
                        case xr.Eligible:
                            return Object(d.d)("You may update your username", "UsernameSetting");
                        case xr.NotEligible:
                            return this.state.eligibilityTimeISO && Object(d.d)("You may update your username again in {distanceFromNow}", {
                                distanceFromNow: function(e) {
                                    var t = Date.now(),
                                        n = (new Date(e).getTime() - t) / 1e3;
                                    if (!(n <= 0)) return Object(Tr.b)(n)
                                }(this.state.eligibilityTimeISO) || ""
                            }, "UsernameSetting");
                        default:
                            return null
                    }
                }, t.prototype.renderErrorMessage = function() {
                    return Object(d.d)("We had trouble fetching your rename eligibility - please try again later", "UsernameSetting")
                }, t.prototype.fetchChangeEligibility = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, O.a.get("/kraken/user/rename_status?scope=user_read")];
                                case 1:
                                    return (e = t.sent()).body && e.body.is_rename_eligible ? this.setState({
                                        status: xr.Eligible
                                    }) : e.body && !1 === e.body.is_rename_eligible ? this.setState({
                                        status: xr.NotEligible,
                                        eligibilityTimeISO: e.body.rename_eligible_at
                                    }) : this.setState({
                                        status: xr.Error
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.logger.warn("Failed to fetch rename_status for user " + this.props.login), this.setState({
                                        status: xr.Error
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t
            }(l.Component),
            Dr = ["ko", "ja", "zh", "zh-cn", "zh-tw", "zh-hk"],
            Ir = "profile-account-info-setting__bio-input",
            Pr = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement("div", null, l.createElement(Nr, {
                        disabled: this.props.controlsDisabled,
                        dirty: this.props.emailDirty,
                        email: this.props.email,
                        id: this.props.id,
                        error: this.props.emailError,
                        login: this.props.login,
                        onChange: this.props.onEmailChange,
                        verified: this.props.emailVerified
                    }), l.createElement(Ur, {
                        emailVerified: this.props.emailVerified,
                        login: this.props.login
                    }), l.createElement(_.a, {
                        id: "profile-account-info-setting__displayname-input",
                        error: !!this.props.displayNameError,
                        errorMessage: this.props.displayNameError ? this.renderDisplayNameError() : void 0,
                        label: Object(d.d)("Display Name", "ProfileAccountInfo")
                    }, l.createElement(F._4, {
                        id: "profile-account-info-setting__displayname-input",
                        "data-a-target": "profile-displayname-input",
                        type: F._5.Text,
                        disabled: this.props.controlsDisabled,
                        onChange: this.props.onDisplayNameChange,
                        value: this.props.displayName
                    }), l.createElement(Y.a, {
                        textDataTarget: "profile-displayname-description",
                        text: this.renderDisplayNameDescription()
                    })), l.createElement(_.a, {
                        id: Ir,
                        error: !!this.props.bioError,
                        errorMessage: this.props.bioError ? this.renderBioError() : void 0,
                        label: Object(d.d)("Bio", "ProfileAccountInfo")
                    }, l.createElement(F._46, {
                        id: Ir,
                        disabled: this.props.controlsDisabled,
                        onChange: this.props.onBioChange,
                        maxLength: 300,
                        noResize: !0,
                        value: this.props.bio,
                        "data-a-target": "profile-bio-input"
                    }), l.createElement(Y.a, {
                        textDataTarget: "profile-bio-description",
                        text: Object(d.d)("Who you are in fewer than 300 characters", "ProfileAccountInfo")
                    })))
                }, t.prototype.renderDisplayNameDescription = function() {
                    return this.userHasCJKLanguageSet() ? Object(d.d)("Customize the capitalization of your display name or change it to contain English characters! Setting an English display name is a permanent change — requests to undo it will not be honored! Display names that do not adhere to Twitch Rules of Conduct may result in an indefinite suspension of your account.", "ProfleAccountInfo") : Object(d.d)("Customize capitalization for your username", "ProfileAccountInfo")
                }, t.prototype.renderBioError = function() {
                    return Object(d.d)("Your description is too long", "ProfileAccountInfo")
                }, t.prototype.renderDisplayNameError = function() {
                    return Object(d.d)("You may not change your display name, only the capitalization of it", "ProfileAccountInfo")
                }, t.prototype.userHasCJKLanguageSet = function() {
                    var e = Object(jr.a)();
                    return !!e && Dr.includes(e)
                }, t
            }(l.Component),
            Fr = n("E9Qg"),
            Ar = n.n(Fr),
            Rr = n("tL94"),
            Mr = (n("i1sU"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.currentUser;
                        e && t.props.showModal(ct.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: lt.a.ProfileBanner,
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
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.shouldReportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.shouldReportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data,
                        t = e && e.currentUser;
                    if (!e.loading && !t) return l.createElement(F.Q, {
                        type: F._49.Span,
                        color: F.K.Error
                    }, Object(d.d)("Sorry, something went wrong. Please try again later.", "ProfileBannerSetting"));
                    var n = Object(d.d)("Profile Banner", "ProfileBannerSetting"),
                        r = null;
                    return r = e.loading ? l.createElement(F._14, {
                        "data-test-selector": "profile-banner__placeholder",
                        "data-a-target": "profile-banner-image",
                        height: 140,
                        width: 440
                    }) : t && t.bannerImageURL ? l.createElement(h.b, {
                        src: t.bannerImageURL,
                        alt: n,
                        className: "profile-banner-setting__current-image",
                        "data-a-target": "profile-banner-image"
                    }) : l.createElement("div", {
                        className: "profile-banner-setting__current-image profile-banner-setting__current-image--default",
                        style: {
                            backgroundImage: "url(" + Ar.a + ")"
                        },
                        "data-a-target": "profile-banner-image"
                    }), l.createElement(F._8, {
                        className: "profile-banner-setting"
                    }, l.createElement(F._8, {
                        display: F.R.Flex,
                        flexDirection: F.T.Row
                    }, l.createElement(F._8, {
                        margin: {
                            right: 2
                        }
                    }, r), l.createElement(F._8, {
                        margin: {
                            y: "auto"
                        }
                    }, l.createElement(F.v, {
                        ariaLabel: Object(d.d)("Update Profile Banner", "ProfileBannerSetting"),
                        type: F.B.Hollow,
                        onClick: this.openModal,
                        "data-a-target": "profile-banner-upload-button",
                        "data-test-selector": "profile-banner-upload-button"
                    }, l.createElement(F._8, {
                        padding: {
                            x: 1
                        }
                    }, Object(d.d)("Update", "ProfileBannerSetting"))), l.createElement(Y.a, {
                        text: Object(d.d)("File format: JPEG, PNG, GIF (recommended 1200x380, max 10MB)", "ProfileBannerSetting")
                    }))))
                }, t
            }(l.Component)),
            Lr = Object(de.compose)(Object(h.d)("ProfileBannerSetting"), Object(K.a)(Rr))(Mr);
        var Br = Object(r.b)(null, function(e) {
                return Object(i.b)({
                    showModal: Ke.d
                }, e)
            })(Lr),
            zr = n("x9n8"),
            Vr = n("goep"),
            Hr = (n("eppJ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.currentUser;
                        e && t.props.showModal(zr.a, {
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
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(1)
                }, t.prototype.render = function() {
                    var e = this.props.data && this.props.data.currentUser,
                        t = l.createElement(F._14, {
                            height: 140,
                            width: 140
                        });
                    return e && e.profileImageURL && (t = l.createElement(h.b, {
                        src: e.profileImageURL,
                        alt: Object(d.d)("Profile Picture", "ProfileImageSetting"),
                        className: "profile-image-setting__current-image",
                        "data-a-target": "profile-image"
                    })), l.createElement(F._8, {
                        className: "profile-image-setting"
                    }, l.createElement(F._8, {
                        display: F.R.Flex,
                        flexDirection: F.T.Row
                    }, l.createElement(F._8, {
                        margin: {
                            right: 2
                        }
                    }, t), l.createElement(F._8, {
                        margin: {
                            y: "auto"
                        }
                    }, l.createElement(F.v, {
                        ariaLabel: Object(d.d)("Update Profile Picture", "ProfileImageSetting"),
                        type: F.B.Hollow,
                        onClick: this.openModal,
                        "data-a-target": "profile-image-upload-button",
                        "data-test-selector": "profile-image-upload-button"
                    }, l.createElement(F._8, {
                        padding: {
                            x: 1
                        }
                    }, Object(d.d)("Update", "ProfileImageSetting"))), l.createElement(Y.a, {
                        text: Object(d.d)("File format: JPEG, PNG, GIF (max size 256x256, 10MB)", "ProfileImageSetting")
                    }))))
                }, t
            }(l.Component)),
            qr = Object(de.compose)(Object(h.d)("ProfileImageSetting"), Object(K.a)(Vr))(Hr);
        var Gr, Wr = Object(r.b)(null, function(e) {
                return Object(i.b)({
                    showModal: Ke.d
                }, e)
            })(qr),
            Qr = n("OA9H");
        ! function(e) {
            e.Bio = "Error (403): Description specified is too long", e.DisplayName = "Error (403): You may not change your display name, only the capitalization of it.", e.EmailNotValid = "Error (403): Email address is not valid", e.EmailDomainNotAllowed = "Error (403): Admins must use their work email"
        }(Gr || (Gr = {}));
        var Kr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        bioError: !1,
                        displayNameError: !1,
                        saveStatus: _r.b.Working
                    }, t.logger = d.j.withCategory("settings-profile-page"), t.onClickSave = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, i, a, o = this;
                            return c.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (!this.props.data.currentUser) return [2];
                                        this.setState({
                                            saveStatus: _r.b.Working
                                        }), e = _r.b.Error, t = !1, n = !1, r = void 0, s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), [4, O.a.put("/kraken/users/" + this.props.data.currentUser.id, {
                                            body: this.buildRequestBody()
                                        })];
                                    case 2:
                                        if (200 === (i = s.sent()).status) e = _r.b.Success;
                                        else if (403 === i.status) switch (i.error && i.error.message) {
                                            case Gr.EmailNotValid:
                                                r = gr.InvalidAddress;
                                                break;
                                            case Gr.EmailDomainNotAllowed:
                                                r = gr.InvalidDomain;
                                                break;
                                            case Gr.DisplayName:
                                                t = !0;
                                                break;
                                            case Gr.Bio:
                                                n = !0;
                                                break;
                                            default:
                                                this.logErrorToSentinel(i)
                                        } else this.logErrorToSentinel(i);
                                        return [3, 4];
                                    case 3:
                                        return a = s.sent(), this.logger.warn("Network error submitting profile for user", {
                                            user: this.props.data.currentUser && this.props.data.currentUser.login,
                                            error: a
                                        }), [3, 4];
                                    case 4:
                                        return this.setState({
                                            saveStatus: e,
                                            bioError: n,
                                            displayNameError: t,
                                            emailError: r
                                        }, function() {
                                            e === _r.b.Success && o.props.data.refetch && o.props.data.refetch()
                                        }), [2]
                                }
                            })
                        })
                    }, t.onBioChange = function(e) {
                        return t.setState({
                            bio: e.currentTarget.value,
                            bioError: !1
                        }, t.checkForDirtyState)
                    }, t.onEmailChange = function(e) {
                        return t.setState({
                            email: e.currentTarget.value,
                            emailError: void 0
                        }, t.checkForDirtyState)
                    }, t.onDisplayNameChange = function(e) {
                        return t.setState({
                            displayName: e.currentTarget.value,
                            displayNameError: !1
                        }, t.checkForDirtyState)
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    !this.props.data.loading && this.props.data.currentUser && this.hydrateState(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.data.loading && !e.data.loading && e.data.currentUser && this.hydrateState(e)
                }, t.prototype.render = function() {
                    if (!this.props.data.currentUser) return this.props.data.loading ? l.createElement(F._10, {
                        fillContent: !0
                    }) : l.createElement(Cr, null);
                    var e = l.createElement(Er.a, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    });
                    return l.createElement("div", null, l.createElement(k.a, {
                        title: Object(d.d)("Profile Picture", "SettingsProfilePage")
                    }), l.createElement(S.a, null, l.createElement(dt.a, null, l.createElement(Wr, null))), l.createElement(k.a, {
                        title: Object(d.d)("Profile Banner", "SettingsProfilePage")
                    }), l.createElement(S.a, null, l.createElement(dt.a, null, l.createElement(Br, null))), l.createElement(k.a, {
                        title: Object(d.d)("Profile Settings", "SettingsProfilePage"),
                        description: Object(d.d)("Change identifying details for your account", "SettingsProfilePage")
                    }), l.createElement(S.a, {
                        footer: e
                    }, l.createElement(Pr, {
                        bio: this.state.bio || "",
                        bioError: this.state.bioError,
                        controlsDisabled: this.state.saveStatus === _r.b.Working,
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
                    })), l.createElement(k.a, {
                        title: Object(d.d)("Disabling Your Twitch Account", "SettingsProfilePage"),
                        description: Object(d.d)("Completely deactivate your account", "SettingsProfilePage")
                    }), l.createElement(S.a, null, l.createElement(wr, null)))
                }, t.prototype.hydrateState = function(e) {
                    e.data.currentUser && this.setState({
                        bio: e.data.currentUser.description,
                        displayName: e.data.currentUser.displayName,
                        email: e.data.currentUser.email,
                        saveStatus: _r.b.NoChanges
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
                        saveStatus: e ? _r.b.DirtyChanges : _r.b.NoChanges
                    })
                }, t
            }(l.Component),
            Yr = Object(de.compose)(Object(K.a)(Qr), Object(h.d)("SettingsProfilePage", {
                autoReportInteractive: !0,
                destination: b.a.SettingsProfile
            }), Object(v.a)({
                location: y.PageviewLocation.SettingsPage
            }))(Kr),
            Xr = function(e) {
                var t = e.saving || e.errorLoading;
                return l.createElement(fe.a, {
                    id: "settings-security-page-block-subs",
                    label: Object(d.d)("Block Receiving Gifts on Channels You don't Follow", "BlockGiftedSubsToggle"),
                    description: Object(d.d)("Block incoming gift subscriptions to channels you don't follow", "BlockGiftedSubsToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            Jr = n("sVk6"),
            $r = n("CePw"),
            Zr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        checked: !1,
                        saving: !1,
                        errorSaving: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("block-gifted-subs-toggle"), t.onCheckBoxChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateSettings(e)
                        })
                    }, t.updateSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.logger.debug("Updating subscription settings", {
                                                giftsInFollowedChannelsOnly: e
                                            }), !(this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update subscription settings."), [2];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.updateUserSubscriptionSettings(Object(pe.a)({
                                            giftsInFollowedChannelsOnly: e
                                        }))];
                                    case 2:
                                        return r.sent(), t = function(t) {
                                            var n = t && t.currentUser,
                                                r = n && n.subscriptionSettings;
                                            return r ? {
                                                currentUser: c.__assign({}, n, {
                                                    subscriptionSettings: c.__assign({}, r, {
                                                        giftsToFollowedChannelsOnly: e
                                                    })
                                                })
                                            } : t
                                        }, Object(pe.e)($r, {}, t), this.logger.debug("Updated subscription settings", {
                                            giftsInFollowedChannelsOnly: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 4];
                                    case 3:
                                        return n = r.sent(), this.logger.warn("Failed to update subscription settings", {
                                            err: n
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data,
                        n = t.currentUser;
                    if (!t.loading && this.props.data.loading) {
                        var r = n && n.subscriptionSettings && n.subscriptionSettings.giftsToFollowedChannelsOnly || !1;
                        this.setState({
                            checked: r
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.subscriptionSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(Xr, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onCheckBoxChange
                    })
                }, t
            }(l.Component),
            ei = Object(i.d)(Object(h.d)("BlockGiftedSubs"), Object(K.a)($r, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), Object(K.a)(Jr, {
                name: "updateUserSubscriptionSettings"
            }))(Zr),
            ti = "/v5/whispers/settings",
            ni = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        loading: !0,
                        updating: !1
                    }, t.onToggle = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            updating: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, O.a.post(ti, {
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
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, O.a.get(ti)];
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
                    return l.createElement(fe.a, {
                        id: "settings-security-page-block-whispers",
                        label: Object(d.d)("Block Whispers from Strangers", "SettingsSecurityPage"),
                        description: Object(d.d)("Block whispers from people you don't follow", "SettingsSecurityPage"),
                        checked: this.state.enabled,
                        showPlaceholder: this.state.loading,
                        disabled: this.state.updating,
                        error: this.state.error,
                        onChange: this.onToggle
                    })
                }, t
            }(l.Component);

        function ri() {
            return l.createElement(_.a, {
                label: Object(d.d)("Password", "ChangePasswordLink"),
                orientation: F.X.Horizontal
            }, l.createElement(F.Q, null, Object(d.d)("<x:link>Change password.</x:link> Improve your security with a strong password.", {
                "x:link": function(e) {
                    return l.createElement("a", {
                        key: "change-password-link",
                        href: "https://passport.twitch.tv/passwords/new?"
                    }, e)
                }
            }, "ChangePasswordLink")))
        }
        var ii = function(e) {
                return e.loading || e.errorLoading || !e.checked && !e.saving ? null : l.createElement(fe.a, {
                    id: "settings-security-hide-directory",
                    label: Object(d.d)("Hide channel from directory", "HideDirectoryToggle"),
                    description: Object(d.d)("Live video, past broadcasts, and highlights are listed publicly in the directory by default. Turning this off is irreversible.", "HideDirectoryToggle"),
                    error: e.errorSaving,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: e.saving
                })
            },
            ai = n("UIkr"),
            oi = n("j7X+"),
            si = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        checked: !1,
                        saving: !1,
                        errorSaving: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("hide-directory-toggle"), t.onCheckBoxChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateSettings(e)
                        })
                    }, t.updateSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.logger.debug("Updating user settings", {
                                                IsDirectoryHidden: e
                                            }), !(this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update user settings."), [2];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.updateUserDirectoryHidden(Object(pe.a)({
                                            IsDirectoryHidden: e
                                        }))];
                                    case 2:
                                        return r.sent(), t = function(t) {
                                            var n = t && t.currentUser,
                                                r = n && n.settings;
                                            return r ? {
                                                currentUser: c.__assign({}, n, {
                                                    settings: c.__assign({}, r, {
                                                        isDirectoryHidden: e
                                                    })
                                                })
                                            } : t
                                        }, Object(pe.e)(oi, {}, t), this.logger.debug("Updated user settings", {
                                            IsDirectoryHidden: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 4];
                                    case 3:
                                        return n = r.sent(), this.logger.warn("Failed to update user settings", {
                                            err: n
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data,
                        n = t.currentUser;
                    if (!t.loading && this.props.data.loading) {
                        var r = n && n.settings && n.settings.isDirectoryHidden || !1;
                        this.setState({
                            checked: r
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.settings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(ii, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onCheckBoxChange
                    })
                }, t
            }(l.Component),
            ci = Object(i.d)(Object(h.d)("HideDirectoryToggle"), Object(K.a)(oi, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), Object(K.a)(ai, {
                name: "updateUserDirectoryHidden"
            }))(si),
            li = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        loading: !0,
                        show: !1,
                        updating: !1
                    }, t.onToggle = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.setState({
                                            updating: !0,
                                            error: !1
                                        }), t = {
                                            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, O.a.put(this.hideLiveVideoEndpoint, {
                                            body: xt.stringify({
                                                "channel[private_video]": e
                                            }, {
                                                arrayFormat: "bracket"
                                            }),
                                            headers: t
                                        })];
                                    case 2:
                                        return n = r.sent(), this.setState(function(t) {
                                            return {
                                                enabled: 200 === n.status ? e : t.enabled,
                                                error: 200 !== n.status,
                                                updating: !1
                                            }
                                        }), [3, 4];
                                    case 3:
                                        return r.sent(), this.setState({
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
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, O.a.get(this.hideLiveVideoEndpoint)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        enabled: e.body && e.body.private_video || !1,
                                        error: 200 !== e.status,
                                        show: !!e.body && e.body.privacy_options_enabled,
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
                    return this.state.show ? l.createElement(fe.a, {
                        id: "settings-security-page-hide-live-video",
                        label: Object(d.d)("Hide Live Video", "HideLiveVideoSetting"),
                        description: Object(d.d)("Only allow your editors to view your live video", "HideLiveVideoSetting"),
                        checked: this.state.enabled,
                        disabled: this.state.updating,
                        error: this.state.error,
                        onChange: this.onToggle
                    }) : null
                }, Object.defineProperty(t.prototype, "hideLiveVideoEndpoint", {
                    get: function() {
                        return "/v5/channels/" + this.props.sessionUserID
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component);
        var ui = Object(r.b)(function(e) {
                var t = Object(s.c)(e);
                return {
                    sessionUserID: t && t.id
                }
            })(li),
            di = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        loading: !0,
                        show: !1,
                        updating: !1
                    }, t.onToggle = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            updating: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, O.a.put(this.hidePastBroadcastsEndpoint + "?hide_archives=" + e)];
                                    case 2:
                                        return t = n.sent(), this.setState(function(n) {
                                            return {
                                                enabled: 200 === t.status ? e : n.enabled,
                                                error: 200 !== t.status,
                                                show: 200 === t.status ? !!t.body && (t.body.hide_archives || t.body.hide_archives_enabled) : n.show,
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
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, O.a.get(this.hidePastBroadcastsEndpoint)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        enabled: e.body && e.body.hide_archives || !1,
                                        error: 200 !== e.status,
                                        show: !!e.body && (e.body.hide_archives || e.body.hide_archives_enabled),
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
                    return this.state.show ? l.createElement(fe.a, {
                        id: "settings-security-page-hide-past-broadcasts",
                        label: Object(d.d)("Hide Past Broadcasts", "HidePastBroadcastsSetting"),
                        description: Object(d.d)("Only allow your editors to view your past broadcasts", "HidePastBroadcastsSetting"),
                        checked: this.state.enabled,
                        disabled: this.state.updating,
                        error: this.state.error,
                        onChange: this.onToggle
                    }) : null
                }, Object.defineProperty(t.prototype, "hidePastBroadcastsEndpoint", {
                    get: function() {
                        return "/v5/channels/" + this.props.sessionUserID + "/user_video_privacy_properties"
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component);
        var pi, hi = Object(r.b)(function(e) {
                var t = Object(s.c)(e);
                return {
                    sessionUserID: t && t.id
                }
            })(di),
            mi = function(e) {
                var t = e.saving || e.errorLoading,
                    n = Object(d.d)("Hide Subscription Gift Purchase Count", "HideGiftedSubCountSettingsPresentation"),
                    r = Object(d.d)("Do not show the total number of Gift Subscriptions you have given in the channel when you purchase a Gift Subscription", "HideGiftedSubCountSettingPresentation");
                return l.createElement(fe.a, {
                    id: "settings-security-page-hide-subscription-gift-count",
                    label: n,
                    description: r,
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    disabled: t,
                    onChange: e.onChange,
                    showPlaceholder: e.loading
                })
            },
            gi = n("XhdA"),
            fi = n("KBYt"),
            vi = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        checked: !1,
                        errorSaving: !1,
                        loading: !1,
                        saving: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("hide-subscription-gift-count"), t.onToggleChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateSettings(e)
                        })
                    }, t.updateSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.logger.debug("Updating subscription settings", {
                                                isGiftCountHidden: e
                                            }), !(this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update subscription settings"), [2];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.updateUserSubscriptionSettings(Object(pe.a)({
                                            isGiftCountHidden: e
                                        }))];
                                    case 2:
                                        return r.sent(), t = function(t) {
                                            return t && t.currentUser && t.currentUser.subscriptionSettings && (t.currentUser.subscriptionSettings.isGiftCountHidden = e), t
                                        }, Object(pe.e)(fi, {}, t), this.logger.debug("Updated subscription settings", {
                                            isGiftCountHidden: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 4];
                                    case 3:
                                        return n = r.sent(), this.logger.warn("Failed to update subscription settings", {
                                            err: n
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data.currentUser;
                    if (this.props.data.loading && !e.data.loading) {
                        var n = t && t.subscriptionSettings && t.subscriptionSettings.isGiftCountHidden || !1;
                        this.setState({
                            checked: n
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.subscriptionSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(mi, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onToggleChange
                    })
                }, t
            }(l.Component),
            bi = Object(i.d)(Object(h.d)("HideSubscriptionGiftCountSetting"), Object(K.a)(fi, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), Object(K.a)(gi, {
                name: "updateUserSubscriptionSettings"
            }))(vi),
            yi = n("NoSW"),
            Si = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(_.a, {
                        label: Object(d.d)("Two-Factor Authentication", "TwoFactorAuthenticationSetting"),
                        orientation: F.X.Horizontal,
                        error: this.props.status === pi.Error,
                        errorMessage: Object(d.d)("Sorry, something went wrong. Please try again later.", "TwoFactorAuthenticationSetting")
                    }, this.renderBody())
                }, t.prototype.renderBody = function() {
                    switch (this.props.status) {
                        case pi.Loading:
                            return this.renderLoading();
                        case pi.Error:
                            return this.renderError();
                        case pi.UnverifiedEmail:
                            return this.renderVerifyEmail();
                        case pi.CanEnable:
                            return this.renderEnableButton();
                        case pi.Enabled:
                            return this.renderDisableButton();
                        case pi.EnabledAndRequired:
                            return this.renderEnabledAndRequired();
                        default:
                            return null
                    }
                }, t.prototype.renderLoading = function() {
                    return l.createElement(F._14, null)
                }, t.prototype.renderError = function() {
                    return null
                }, t.prototype.renderVerifyEmail = function() {
                    return l.createElement(F._8, null, l.createElement(F.Q, {
                        "data-a-target": "tfa-verify-email"
                    }, Object(d.d)("Just verify your email address and two-factor authentication can be enabled.", "TwoFactorAuthenticationSetting")))
                }, t.prototype.renderEnableButton = function() {
                    return l.createElement(F._8, null, l.createElement(F.v, {
                        linkTo: "https://passport.twitch.tv/register_2fa/new",
                        "data-a-target": "tfa-enable-button"
                    }, Object(d.d)("Set Up Two-Factor Authentication", "TwoFactorAuthenticationSetting")), l.createElement(Y.a, {
                        textDataTarget: "tfa-pitch-message",
                        text: Object(d.d)("It's dangerous to go alone. <x:link>Two-factor authentication</x:link> adds an extra layer of security to your Twitch account by requiring both a password and your mobile phone to login.", {
                            "x:link": function(e) {
                                return l.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://www.authy.com/learn-more",
                                    target: "_blank",
                                    "data-a-target": "tfa-authy-link"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    }))
                }, t.prototype.renderDisableButton = function() {
                    return l.createElement(F._8, null, l.createElement(F.v, {
                        linkTo: "https://passport.twitch.tv/disable_2fa/new",
                        "data-a-target": "tfa-disable-button"
                    }, Object(d.d)("Disable two-factor authentication", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledAndRequired = function() {
                    return l.createElement(F._8, null, l.createElement(F.Q, {
                        "data-a-target": "tfa-required-message"
                    }, Object(d.d)("You must have two-factor authentication enabled.", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledMessage = function() {
                    return l.createElement(Y.a, {
                        textDataTarget: "tfa-successful-message",
                        text: Object(d.d)("Woohoo! Two-factor authentication is enabled! To reset or change your phone, visit the Authy <x:link>phone reset form</x:link>.", {
                            "x:link": function(e) {
                                return l.createElement("a", {
                                    key: "phone-reset-link",
                                    href: "https://www.authy.com/phones/reset",
                                    "data-a-target": "tfa-authy-reset"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    })
                }, t
            }(l.Component),
            ki = n("Q6se");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.UnverifiedEmail = 2] = "UnverifiedEmail", e[e.CanEnable = 3] = "CanEnable", e[e.Enabled = 4] = "Enabled", e[e.EnabledAndRequired = 5] = "EnabledAndRequired"
        }(pi || (pi = {}));
        var _i, Ei = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: pi.Loading,
                        restLoading: !0,
                        restError: !1
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTwoFactorEnabled()
                }, t.prototype.componentDidUpdate = function(e, t) {
                    t.status === pi.Loading && this.state.status !== pi.Loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.status !== pi.Loading || e.data.loading || this.reconcileStatus(e)
                }, t.prototype.render = function() {
                    return l.createElement(Si, {
                        status: this.state.status
                    })
                }, t.prototype.fetchTwoFactorEnabled = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t, n = this;
                        return c.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    e = "/api/users/auth_validator?check_2fa=true&onsite=1", r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, O.a.get(e, {
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
                    e.data.loading || this.state.restLoading ? t = pi.Loading : !e.data.currentUser || this.state.restError ? t = pi.Error : this.state.twoFactorEnabled || e.data.currentUser.isEmailVerified ? !this.state.twoFactorEnabled && e.data.currentUser.isEmailVerified ? t = pi.CanEnable : this.state.twoFactorEnabled && !this.userRoleRequiresTwoFactor(e) ? t = pi.Enabled : this.state.twoFactorEnabled && this.userRoleRequiresTwoFactor(e) && (t = pi.EnabledAndRequired) : t = pi.UnverifiedEmail, t && this.setState({
                        status: t
                    })
                }, t.prototype.userRoleRequiresTwoFactor = function(e) {
                    var t = e.data.currentUser && e.data.currentUser.roles;
                    return !(!t || !(t.isGlobalMod || t.isSiteAdmin || t.isStaff))
                }, t
            }(l.Component),
            Ci = Object(de.compose)(Object(yi.a)("TwoFactorAuthenticationSetting"), Object(K.a)(ki))(Ei),
            wi = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement("div", null, l.createElement(k.a, {
                        title: Object(d.d)("Security", "SettingsSecurityPage"),
                        description: Object(d.d)("Keep your account safe and sound", "SettingsSecurityPage")
                    }), l.createElement(ri, null), l.createElement(Ci, null), l.createElement(k.a, {
                        title: Object(d.d)("Privacy", "SettingsSecurityPage")
                    }), l.createElement(ni, null), l.createElement(ei, null), l.createElement(bi, null), l.createElement(ci, null), l.createElement(hi, null), l.createElement(ui, null))
                }, t
            }(l.Component),
            Oi = Object(de.compose)(Object(h.d)("SettingsSecurityPage", {
                autoReportInteractive: !0,
                destination: b.a.SettingsSecurity
            }), Object(v.a)({
                location: y.PageviewLocation.SettingsPage
            }))(wi),
            xi = n("CkX/");
        ! function(e) {
            e.Channel = "channel", e.Notifications = "notifications", e.Profile = "profile", e.Security = "security", e.Connections = "connections", e.Prime = "prime", e.Turbo = "turbo"
        }(_i || (_i = {}));
        var Ni = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.loading ? null : l.createElement(F._8, {
                        className: "settings-tabs",
                        padding: {
                            x: Pi,
                            top: Pi
                        }
                    }, l.createElement(F._8, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(F.Q, {
                        type: F._49.H2
                    }, Object(d.d)("Settings", "SettingsTabs"))), l.createElement(F._8, null, l.createElement(F._37, null, l.createElement(F._36, {
                        linkTo: "/settings/profile",
                        active: this.props.tabName === _i.Profile,
                        "data-a-target": "profile-tab"
                    }, Object(d.d)("Profile", "SettingsTabs")), this.renderPremiumTab(), l.createElement(F._36, {
                        linkTo: "/settings/channel",
                        active: this.props.tabName === _i.Channel,
                        "data-a-target": "channel-tab"
                    }, Object(d.d)("Channel and Videos", "SettingsTabs")), l.createElement(F._36, {
                        linkTo: "/settings/security",
                        active: this.props.tabName === _i.Security,
                        "data-a-target": "security-tab"
                    }, Object(d.d)("Security and Privacy", "SettingsTabs")), l.createElement(F._36, {
                        linkTo: "/settings/notifications",
                        active: this.props.tabName === _i.Notifications,
                        "data-a-target": "notifications-tab"
                    }, Object(d.d)("Notifications", "SettingsTab")), l.createElement(F._36, {
                        linkTo: "/settings/connections",
                        active: this.props.tabName === _i.Connections,
                        "data-a-target": "connections-tab"
                    }, Object(d.d)("Connections", "SettingsTabs")))))
                }, t.prototype.renderPremiumTab = function() {
                    if (this.props.data.currentUser && this.props.data.requestInfo) {
                        var e = this.props.data.currentUser,
                            t = e.hasPrime;
                        return !e.hasTurbo && Object(Mn.a)(this.props.data.requestInfo.countryCode) || t ? l.createElement(F._36, {
                            linkTo: "/settings/prime",
                            active: this.props.tabName === _i.Prime,
                            "data-test-selector": "test-settings-prime-tab",
                            "data-a-target": "prime-tab"
                        }, Object(d.d)("Twitch Prime", "SettingsTabs")) : l.createElement(F._36, {
                            linkTo: "/settings/turbo",
                            active: this.props.tabName === _i.Turbo,
                            "data-test-selector": "test-settings-turbo-tab",
                            "data-a-target": "turbo-tab"
                        }, Object(d.d)("Twitch Turbo", "SettingsTabs"))
                    }
                }, t
            }(l.Component),
            ji = Object(de.compose)(Object(h.d)("SettingsTabs"), Object(K.a)(xi))(Ni),
            Ti = function() {
                return l.createElement(F._8, {
                    fullWidth: !0,
                    display: F.R.Flex,
                    flexDirection: F.T.Column,
                    alignItems: F.c.Center
                }, l.createElement(F.Q, {
                    fontSize: F.V.Size2
                }, Object(d.d)("You've gone Turbo!", "CancelTurboLink")), l.createElement(F.Q, null, Object(d.d)("We hope you're enjoying your new chat shwag and watching ad-free.", "CancelTurboLink")), l.createElement(F.O, {
                    to: "/products/turbo/ticket/edit"
                }, Object(d.d)("Cancel Turbo", "CancelTurboLink")))
            },
            Ui = n("hRPz"),
            Di = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(f.b, {
                        name: "settings_premium_feature_flag"
                    }, this.renderPageContent())
                }, t.prototype.renderPageContent = function() {
                    return this.props.data.currentUser ? this.props.data.currentUser.hasPrime ? l.createElement(u.b, {
                        to: "/settings/prime"
                    }) : this.props.data.currentUser.hasTurbo ? l.createElement(l.Fragment, null, l.createElement(S.a, null, l.createElement(dt.a, null, l.createElement(Ti, null))), l.createElement(lr, null), l.createElement(br, null)) : Object(Mn.a)(this.props.data.requestInfo.countryCode) ? l.createElement(u.b, {
                        to: "/settings/prime"
                    }) : (window.location.replace("https://www.twitch.tv/products/turbo/ticket"), null) : this.props.data.loading ? l.createElement(F._10, {
                        fillContent: !0
                    }) : l.createElement(Cr, null)
                }, t
            }(l.Component),
            Ii = Object(i.d)(Object(h.d)("SettingsTurboPage", {
                autoReportInteractive: !0,
                destination: b.a.SettingsTurbo
            }), Object(v.a)({
                location: y.PageviewLocation.SettingsPage
            }), Object(K.a)(Ui))(Di),
            Pi = 3,
            Fi = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.redirectToProfilePage = function() {
                        return l.createElement(u.b, {
                            to: "/settings/profile"
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    d.o.setPageTitle()
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? l.createElement(F._8, {
                        padding: {
                            x: Pi
                        },
                        fullHeight: !0,
                        fullWidth: !0,
                        display: F.R.Flex,
                        flexDirection: F.T.Column,
                        flexWrap: F.U.NoWrap
                    }, l.createElement(m.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), l.createElement(g.a, null, l.createElement(ji, {
                        tabName: this.props.match.params.tab
                    })), l.createElement(F._8, {
                        padding: {
                            y: 2
                        }
                    }, l.createElement(u.e, null, l.createElement(u.c, {
                        path: "/settings/profile",
                        component: Yr
                    }), l.createElement(u.c, {
                        path: "/settings/prime",
                        component: kr
                    }), l.createElement(u.c, {
                        path: "/settings/turbo",
                        component: Ii
                    }), l.createElement(u.c, {
                        path: "/settings/channel",
                        component: vt
                    }), l.createElement(u.c, {
                        path: "/settings/security",
                        component: Oi
                    }), l.createElement(u.c, {
                        path: "/settings/notifications",
                        component: Rn
                    }), l.createElement(u.c, {
                        path: "/settings/connections",
                        component: bn
                    }), l.createElement(u.c, {
                        path: "/settings",
                        render: this.redirectToProfilePage
                    })))) : (this.props.login(), l.createElement(p.a, {
                        message: Object(d.d)("You must be logged in to view this page", "SettingsRoot")
                    }))
                }, t = c.__decorate([Object(h.d)("SettingsRoot", {
                    autoReportInteractive: !0
                })], t)
            }(l.Component),
            Ai = Object(u.f)(Fi);
        var Ri = Object(r.b)(function(e) {
            return {
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(i.b)({
                login: function() {
                    return Object(o.f)(a.a.SettingsPage)
                }
            }, e)
        })(Ai);
        n.d(t, "SettingsRoot", function() {
            return Ri
        })
    },
    KBYt: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "HideSubscriptionGiftCountQuery"
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
                                    value: "subscriptionSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isGiftCountHidden"
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
                end: 102
            }
        };
        n.loc.source = {
            body: "query HideSubscriptionGiftCountQuery {\ncurrentUser {\nid\nsubscriptionSettings {\nisGiftCountHidden\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    KYFq: function(e, t, n) {
        var r = n("kl/u"),
            i = n("SCwa"),
            a = NaN,
            o = /^\s+|\s+$/g,
            s = /^[-+]0x[0-9a-f]+$/i,
            c = /^0b[01]+$/i,
            l = /^0o[0-7]+$/i,
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
            var n = c.test(e);
            return n || l.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? a : +e
        }
    },
    L3k4: function(e, t, n) {
        var r = n("aIUG"),
            i = n("F6hB");
        e.exports = function(e, t) {
            for (var n = 0, a = (t = r(t, e)).length; null != e && n < a;) e = e[i(t[n++])];
            return n && n == a ? e : void 0
        }
    },
    L4AJ: function(e, t, n) {
        var r = n("F3kA"),
            i = n("MVM9"),
            a = n("iAlu");
        e.exports = function(e, t) {
            return a(i(e, t, r), e + "")
        }
    },
    LBNC: function(e, t, n) {
        "use strict";
        t.a = function() {
            return "serviceWorker" in window.navigator && "PushManager" in window
        }
    },
    LLwJ: function(e, t) {},
    "M+Mb": function(e, t, n) {
        var r = n("gKqb"),
            i = n("qu3O"),
            a = n("Ao0V"),
            o = n("k6Ms"),
            s = n("bL9o"),
            c = n("mG6l"),
            l = n("mPnA"),
            u = n("YOyG"),
            d = 1,
            p = "[object Arguments]",
            h = "[object Array]",
            m = "[object Object]",
            g = Object.prototype.hasOwnProperty;
        e.exports = function(e, t, n, f, v, b) {
            var y = c(e),
                S = c(t),
                k = y ? h : s(e),
                _ = S ? h : s(t),
                E = (k = k == p ? m : k) == m,
                C = (_ = _ == p ? m : _) == m,
                w = k == _;
            if (w && l(e)) {
                if (!l(t)) return !1;
                y = !0, E = !1
            }
            if (w && !E) return b || (b = new r), y || u(e) ? i(e, t, n, f, v, b) : a(e, t, k, n, f, v, b);
            if (!(n & d)) {
                var O = E && g.call(e, "__wrapped__"),
                    x = C && g.call(t, "__wrapped__");
                if (O || x) {
                    var N = O ? e.value() : e,
                        j = x ? t.value() : t;
                    return b || (b = new r), v(N, j, n, f, b)
                }
            }
            return !!w && (b || (b = new r), o(e, t, n, f, v, b))
        }
    },
    M0TM: function(e, t, n) {
        var r = n("Bh6c"),
            i = n("9nrn"),
            a = n("ymQA"),
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
    },
    MA13: function(e, t, n) {
        var r = n("MygC")["__core-js_shared__"];
        e.exports = r
    },
    MKJo: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t, n) {
            return Math.min(Math.max(e, t), n)
        }
    },
    MVM9: function(e, t, n) {
        var r = n("Ii8z"),
            i = Math.max;
        e.exports = function(e, t, n) {
            return t = i(void 0 === t ? e.length - 1 : t, 0),
                function() {
                    for (var a = arguments, o = -1, s = i(a.length - t, 0), c = Array(s); ++o < s;) c[o] = a[t + o];
                    o = -1;
                    for (var l = Array(t + 1); ++o < t;) l[o] = a[o];
                    return l[t] = n(c), r(e, this, l)
                }
        }
    },
    McHv: function(e, t) {
        e.exports = function(e) {
            4 !== e.length && 5 !== e.length || (e = function(e) {
                for (var t = "#", n = 1; n < e.length; n++) {
                    var r = e.charAt(n);
                    t += r + r
                }
                return t
            }(e));
            var t = [parseInt(e.substring(1, 3), 16), parseInt(e.substring(3, 5), 16), parseInt(e.substring(5, 7), 16)];
            if (9 === e.length) {
                var n = parseFloat((parseInt(e.substring(7, 9), 16) / 255).toFixed(2));
                t.push(n)
            }
            return t
        }
    },
    MygC: function(e, t, n) {
        var r = n("1tEs"),
            i = "object" == typeof self && self && self.Object === Object && self,
            a = r || i || Function("return this")();
        e.exports = a
    },
    NDrF: function(e, t, n) {
        var r = n("CZUI"),
            i = n("6Exb");
        e.exports = function(e, t) {
            var n = i(e, t);
            return r(n) ? n : void 0
        }
    },
    NSoo: function(e, t) {
        e.exports = function(e) {
            return function() {
                return e
            }
        }
    },
    NuOc: function(e, t) {
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
    OB6b: function(e, t) {},
    OOv5: function(e, t, n) {
        "use strict";
        var r, i = n("TToO"),
            a = n("6sO2"),
            o = n("oIkB"),
            s = n("Aj/L");
        ! function(e) {
            e.NewSession = "new-session", e.ClearSession = "clear-session"
        }(r || (r = {}));
        var c = a.o.logger.withCategory("host-service-worker-messenger"),
            l = function() {
                function e() {}
                return e.syncSession = function() {
                    var e = Object(s.c)(a.o.store.getState());
                    if (e) {
                        var t = e.id;
                        this.sendMessage({
                            type: r.NewSession,
                            userId: t
                        })
                    } else this.sendMessage({
                        type: r.ClearSession
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
            u = function() {
                function e() {}
                return e.exists = function() {
                    return null !== a.o.storage.getOptional("browserPushNotificationsEnabled")
                }, e.isEnabled = function() {
                    return a.o.storage.get("browserPushNotificationsEnabled", !1)
                }, e.setEnabled = function() {
                    a.o.storage.set("browserPushNotificationsEnabled", !0)
                }, e.setDisabled = function() {
                    a.o.storage.set("browserPushNotificationsEnabled", !1)
                }, e
            }();
        var d = n("UbVv"),
            p = n("OtmA"),
            h = null;

        function m() {
            if (h) return h;
            var e = p.register({
                scope: "/"
            });
            return h = e || Promise.reject(new Error("service worker runtime not available"))
        }
        var g = n("JBcW"),
            f = n("TbkX");
        n.d(t, "a", function() {
            return b
        });
        var v = a.o.logger.withCategory("browser-push-notifications-manager"),
            b = function() {
                function e() {}
                return e.initialize = function() {
                    return this.initPromise ? this.initPromise : (this.initPromise = this.initializationLogic(), this.initPromise)
                }, e.initializationLogic = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return i.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return Object(d.a)() ? (v.debug("permissions have been denied. nothing to do here."), [2]) : [4, m()];
                                case 1:
                                    return n.sent(), e = Object(s.d)(a.o.store.getState()), [4, this.hasPushSubscription()];
                                case 2:
                                    return t = n.sent(), l.syncSession(), t ? u.exists() && !u.isEnabled() || !e ? [4, this.unsubscribe()] : [3, 4] : [3, 5];
                                case 3:
                                    n.sent(), n.label = 4;
                                case 4:
                                    return [3, 7];
                                case 5:
                                    return s.d ? !Object(d.b)() || u.exists() && !u.isEnabled() ? [3, 7] : [4, this.subscribe()] : [3, 7];
                                case 6:
                                    n.sent(), n.label = 7;
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.userSubscribe = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t;
                        return i.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    u.setEnabled(), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, this.subscribe()];
                                case 2:
                                    return n.sent(), [3, 4];
                                case 3:
                                    return t = n.sent(), Object(d.a)() || v.warn(t, "user subscribe failed", {
                                        context: e
                                    }), [3, 4];
                                case 4:
                                    return Object(g.c)({
                                        allowed: Object(d.b)(),
                                        context: e
                                    }), [2]
                            }
                        })
                    })
                }, e.userUnsubscribe = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return u.setDisabled(), [4, this.unsubscribe()];
                                case 1:
                                    return t.sent(), Object(g.b)({
                                        context: e
                                    }), [2]
                            }
                        })
                    })
                }, e.hasPushSubscription = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.getPushSubscription()];
                                case 1:
                                    return [2, null !== e.sent()]
                            }
                        })
                    })
                }, e.subscribe = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, r, c, l;
                        return i.__generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    if (Object(d.a)()) throw new Error("notification permission is denied");
                                    if (!Object(s.d)(a.o.store.getState())) throw new Error("cannot be enabled logged out");
                                    if (!(e = a.b.get("notification_app_server_public_key", ""))) throw new Error("application server public key is blank");
                                    return [4, m()];
                                case 1:
                                    return t = u.sent(), [4, this.getPushSubscription()];
                                case 2:
                                    return (n = u.sent()) ? [3, 4] : (r = function(e) {
                                        for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(t), r = new Uint8Array(n.length), i = 0; i < n.length; ++i) r[i] = n.charCodeAt(i);
                                        return r
                                    }(e), [4, t.pushManager.subscribe({
                                        userVisibleOnly: !0,
                                        applicationServerKey: r
                                    })]);
                                case 3:
                                    n = u.sent(), u.label = 4;
                                case 4:
                                    if (!(c = n.toJSON()).endpoint) throw new Error("push subscription 'endpoint' missing");
                                    if (!c.keys) throw new Error("push subscription 'keys' missing");
                                    if (!c.keys.auth) throw new Error("push subscription 'keys.auth' missing");
                                    if (!c.keys.p256dh) throw new Error("push subscription 'keys.p256dh' missing");
                                    return l = Object(o.a)({
                                        endpoint: c.endpoint,
                                        auth: c.keys.auth,
                                        p256DH: c.keys.p256dh
                                    }), [4, a.o.apollo.client.mutate(i.__assign({
                                        mutation: f
                                    }, l))];
                                case 5:
                                    return u.sent(), [2]
                            }
                        })
                    })
                }, e.unsubscribe = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
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
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, m()];
                                case 1:
                                    return [4, t.sent().pushManager.getSubscription()];
                                case 2:
                                    return (e = t.sent()) ? [2, e] : [2, null]
                            }
                        })
                    })
                }, e
            }()
    },
    OScx: function(e, t, n) {
        var r = n("YNJY"),
            i = n("H3TN"),
            a = n("mG6l"),
            o = n("mPnA"),
            s = n("cjOD"),
            c = n("YOyG"),
            l = Object.prototype.hasOwnProperty;
        e.exports = function(e, t) {
            var n = a(e),
                u = !n && i(e),
                d = !n && !u && o(e),
                p = !n && !u && !d && c(e),
                h = n || u || d || p,
                m = h ? r(e.length, String) : [],
                g = m.length;
            for (var f in e) !t && !l.call(e, f) || h && ("length" == f || d && ("offset" == f || "parent" == f) || p && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || s(f, g)) || m.push(f);
            return m
        }
    },
    OZxy: function(e, t) {
        var n = Object.prototype.toString;
        e.exports = function(e) {
            return n.call(e)
        }
    },
    OjIq: function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            i = n("Odds"),
            a = function(e) {
                var t = null;
                return e.title && (t = r.createElement(i._8, {
                    padding: {
                        bottom: 1
                    }
                }, r.createElement(i.Q, {
                    fontSize: i.V.Size6,
                    color: e.error ? i.K.Error : i.K.Base,
                    bold: !0
                }, e.title))), r.createElement(i._35, {
                    padding: 2,
                    borderTop: !0
                }, t, e.children, e.errorMessage && r.createElement(i.Q, {
                    color: i.K.Error,
                    fontSize: i.V.Size7
                }, e.errorMessage))
            };
        n.d(t, "a", function() {
            return a
        })
    },
    Op8X: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_PSNConnection"
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
                                    value: "ssoLinks"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "app"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "psn",
                                        block: !1
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "app"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "ssoID"
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
                end: 98
            }
        };
        n.loc.source = {
            body: 'query Settings_Connections_PSNConnection {\ncurrentUser {\nid\nssoLinks(app: "psn") {\napp\nssoID\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "P/Wu": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = function() {
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
            var t, n, h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
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
                        var a = (0, p.closest)(e.target, function(e) {
                            return null != e.sortableInfo
                        });
                        if (a && a.sortableInfo && t.nodeIsChild(a) && !t.state.sorting) {
                            var o = t.props.useDragHandle,
                                s = a.sortableInfo,
                                c = s.index,
                                l = s.collection;
                            if (o && !(0, p.closest)(e.target, function(e) {
                                    return null != e.sortableHandle
                                })) return;
                            t.manager.active = {
                                index: c,
                                collection: l
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
                                i = r.axis,
                                a = r.getHelperDimensions,
                                o = r.helperClass,
                                s = r.hideSortableGhost,
                                c = r.onSortStart,
                                l = r.useWindowAsScrollContainer,
                                u = n.node,
                                d = n.collection,
                                h = u.sortableInfo.index,
                                g = (0, p.getElementMargin)(u),
                                f = t.container.getBoundingClientRect(),
                                v = a({
                                    index: h,
                                    node: u,
                                    collection: d
                                });
                            t.node = u, t.margin = g, t.width = v.width, t.height = v.height, t.marginOffset = {
                                x: t.margin.left + t.margin.right,
                                y: Math.max(t.margin.top, t.margin.bottom)
                            }, t.boundingClientRect = u.getBoundingClientRect(), t.containerBoundingRect = f, t.index = h, t.newIndex = h, t.axis = {
                                x: i.indexOf("x") >= 0,
                                y: i.indexOf("y") >= 0
                            }, t.offsetEdge = t.getEdgeOffset(u), t.initialOffset = t.getOffset(e), t.initialScroll = {
                                top: t.scrollContainer.scrollTop,
                                left: t.scrollContainer.scrollLeft
                            }, t.initialWindowScroll = {
                                top: window.pageYOffset,
                                left: window.pageXOffset
                            };
                            var b, y = u.querySelectorAll("input, textarea, select"),
                                S = u.cloneNode(!0),
                                k = [].concat(m(S.querySelectorAll("input, textarea, select")));
                            if (k.forEach(function(e, t) {
                                    "file" !== e.type && y[t] && (e.value = y[t].value)
                                }), t.helper = t.document.body.appendChild(S), t.helper.style.position = "fixed", t.helper.style.top = t.boundingClientRect.top - g.top + "px", t.helper.style.left = t.boundingClientRect.left - g.left + "px", t.helper.style.width = t.width + "px", t.helper.style.height = t.height + "px", t.helper.style.boxSizing = "border-box", t.helper.style.pointerEvents = "none", s && (t.sortableGhost = u, u.style.visibility = "hidden", u.style.opacity = 0), t.minTranslate = {}, t.maxTranslate = {}, t.axis.x && (t.minTranslate.x = (l ? 0 : f.left) - t.boundingClientRect.left - t.width / 2, t.maxTranslate.x = (l ? t.contentWindow.innerWidth : f.left + f.width) - t.boundingClientRect.left - t.width / 2), t.axis.y && (t.minTranslate.y = (l ? 0 : f.top) - t.boundingClientRect.top - t.height / 2, t.maxTranslate.y = (l ? t.contentWindow.innerHeight : f.top + f.height) - t.boundingClientRect.top - t.height / 2), o)(b = t.helper.classList).add.apply(b, m(o.split(" ")));
                            t.listenerNode = e.touches ? u : t.contentWindow, p.events.move.forEach(function(e) {
                                return t.listenerNode.addEventListener(e, t.handleSortMove, !1)
                            }), p.events.end.forEach(function(e) {
                                return t.listenerNode.addEventListener(e, t.handleSortEnd, !1)
                            }), t.setState({
                                sorting: !0,
                                sortingIndex: h
                            }), c && c({
                                node: u,
                                index: h,
                                collection: d
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
                        t.listenerNode && (p.events.move.forEach(function(e) {
                            return t.listenerNode.removeEventListener(e, t.handleSortMove)
                        }), p.events.end.forEach(function(e) {
                            return t.listenerNode.removeEventListener(e, t.handleSortEnd)
                        })), t.helper.parentNode.removeChild(t.helper), r && t.sortableGhost && (t.sortableGhost.style.visibility = "", t.sortableGhost.style.opacity = "");
                        for (var o = t.manager.refs[a], s = 0, c = o.length; s < c; s++) {
                            var l = o[s],
                                u = l.node;
                            l.edgeOffset = null, u.style[p.vendorPrefix + "Transform"] = "", u.style[p.vendorPrefix + "TransitionDuration"] = ""
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
                            i = {
                                x: 10,
                                y: 10
                            };
                        e.y >= t.maxTranslate.y - t.height / 2 ? (n.y = 1, r.y = i.y * Math.abs((t.maxTranslate.y - t.height / 2 - e.y) / t.height)) : e.x >= t.maxTranslate.x - t.width / 2 ? (n.x = 1, r.x = i.x * Math.abs((t.maxTranslate.x - t.width / 2 - e.x) / t.width)) : e.y <= t.minTranslate.y + t.height / 2 ? (n.y = -1, r.y = i.y * Math.abs((e.y - t.height / 2 - t.minTranslate.y) / t.height)) : e.x <= t.minTranslate.x + t.width / 2 && (n.x = -1, r.x = i.x * Math.abs((e.x - t.width / 2 - t.minTranslate.x) / t.width)), t.autoscrollInterval && (clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.isAutoScrolling = !1), 0 === n.x && 0 === n.y || (t.autoscrollInterval = setInterval(function() {
                            t.isAutoScrolling = !0;
                            var e = {
                                left: 1 * r.x * n.x,
                                top: 1 * r.y * n.y
                            };
                            t.scrollContainer.scrollTop += e.top, t.scrollContainer.scrollLeft += e.left, t.translate.x += e.left, t.translate.y += e.top, t.animateNodes()
                        }, 5))
                    }, t.manager = new d.default, t.events = {
                        start: t.handleStart,
                        move: t.handleMove,
                        end: t.handleEnd
                    }, (0, u.default)(!(e.distance && e.pressDelay), "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time."), t.state = {}, t
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
                }(n, t), a(n, [{
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
                        this.container = "function" == typeof n ? n(this.getWrappedInstance()) : (0, l.findDOMNode)(this), this.document = this.container.ownerDocument || document, this.scrollContainer = r ? this.document.body : this.container, this.contentWindow = "function" == typeof i ? i() : i;
                        var a = function(t) {
                            e.events.hasOwnProperty(t) && p.events[t].forEach(function(n) {
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
                                e.events.hasOwnProperty(t) && p.events[t].forEach(function(n) {
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
                        Array.isArray(e) || (e = [e, e]), (0, u.default)(2 === e.length, "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s", e);
                        var t = e,
                            n = i(t, 2),
                            r = n[0],
                            a = n[1];
                        return [this.getLockPixelOffset(r), this.getLockPixelOffset(a)]
                    }
                }, {
                    key: "getLockPixelOffset",
                    value: function(e) {
                        var t = e,
                            n = e,
                            r = "px";
                        if ("string" == typeof e) {
                            var i = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(e);
                            (0, u.default)(null !== i, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', e), t = n = parseFloat(e), r = i[1]
                        }
                        return (0, u.default)(isFinite(t) && isFinite(n), "lockOffset value should be a finite. Given %s", e), "%" === r && (t = t * this.width / 100, n = n * this.height / 100), {
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
                            a = this.getOffset(e),
                            o = {
                                x: a.x - this.initialOffset.x,
                                y: a.y - this.initialOffset.y
                            };
                        if (o.y -= window.pageYOffset - this.initialWindowScroll.top, o.x -= window.pageXOffset - this.initialWindowScroll.left, this.translate = o, r) {
                            var s = this.getLockPixelOffsets(),
                                c = i(s, 2),
                                l = c[0],
                                u = c[1],
                                d = {
                                    x: this.width / 2 - l.x,
                                    y: this.height / 2 - l.y
                                },
                                h = {
                                    x: this.width / 2 - u.x,
                                    y: this.height / 2 - u.y
                                };
                            o.x = (0, p.limit)(this.minTranslate.x + d.x, this.maxTranslate.x - h.x, o.x), o.y = (0, p.limit)(this.minTranslate.y + d.y, this.maxTranslate.y - h.y, o.y)
                        }
                        "x" === n ? o.y = 0 : "y" === n && (o.x = 0), this.helper.style[p.vendorPrefix + "Transform"] = "translate3d(" + o.x + "px," + o.y + "px, 0)"
                    }
                }, {
                    key: "animateNodes",
                    value: function() {
                        var e = this.props,
                            t = e.transitionDuration,
                            n = e.hideSortableGhost,
                            r = this.manager.getOrderedRefs(),
                            i = {
                                left: this.scrollContainer.scrollLeft - this.initialScroll.left,
                                top: this.scrollContainer.scrollTop - this.initialScroll.top
                            },
                            a = {
                                left: this.offsetEdge.left + this.translate.x + i.left,
                                top: this.offsetEdge.top + this.translate.y + i.top
                            },
                            o = {
                                top: window.pageYOffset - this.initialWindowScroll.top,
                                left: window.pageXOffset - this.initialWindowScroll.left
                            };
                        this.newIndex = null;
                        for (var s = 0, c = r.length; s < c; s++) {
                            var l = r[s].node,
                                u = l.sortableInfo.index,
                                d = l.offsetWidth,
                                h = l.offsetHeight,
                                m = {
                                    width: this.width > d ? d / 2 : this.width / 2,
                                    height: this.height > h ? h / 2 : this.height / 2
                                },
                                g = {
                                    x: 0,
                                    y: 0
                                },
                                f = r[s].edgeOffset;
                            f || (r[s].edgeOffset = f = this.getEdgeOffset(l));
                            var v = s < r.length - 1 && r[s + 1],
                                b = s > 0 && r[s - 1];
                            v && !v.edgeOffset && (v.edgeOffset = this.getEdgeOffset(v.node)), u !== this.index ? (t && (l.style[p.vendorPrefix + "TransitionDuration"] = t + "ms"), this.axis.x ? this.axis.y ? u < this.index && (a.left + o.left - m.width <= f.left && a.top + o.top <= f.top + m.height || a.top + o.top + m.height <= f.top) ? (g.x = this.width + this.marginOffset.x, f.left + g.x > this.containerBoundingRect.width - m.width && (g.x = v.edgeOffset.left - f.left, g.y = v.edgeOffset.top - f.top), null === this.newIndex && (this.newIndex = u)) : u > this.index && (a.left + o.left + m.width >= f.left && a.top + o.top + m.height >= f.top || a.top + o.top + m.height >= f.top + h) && (g.x = -(this.width + this.marginOffset.x), f.left + g.x < this.containerBoundingRect.left + m.width && (g.x = b.edgeOffset.left - f.left, g.y = b.edgeOffset.top - f.top), this.newIndex = u) : u > this.index && a.left + o.left + m.width >= f.left ? (g.x = -(this.width + this.marginOffset.x), this.newIndex = u) : u < this.index && a.left + o.left <= f.left + m.width && (g.x = this.width + this.marginOffset.x, null == this.newIndex && (this.newIndex = u)) : this.axis.y && (u > this.index && a.top + o.top + m.height >= f.top ? (g.y = -(this.height + this.marginOffset.y), this.newIndex = u) : u < this.index && a.top + o.top <= f.top + m.height && (g.y = this.height + this.marginOffset.y, null == this.newIndex && (this.newIndex = u))), l.style[p.vendorPrefix + "Transform"] = "translate3d(" + g.x + "px," + g.y + "px,0)") : n && (this.sortableGhost = l, l.style.visibility = "hidden", l.style.opacity = 0)
                        }
                        null == this.newIndex && (this.newIndex = this.index)
                    }
                }, {
                    key: "getWrappedInstance",
                    value: function() {
                        return (0, u.default)(h.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"), this.refs.wrappedInstance
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = h.withRef ? "wrappedInstance" : null;
                        return s.default.createElement(e, r({
                            ref: t
                        }, (0, p.omit)(this.props, "contentWindow", "useWindowAsScrollContainer", "distance", "helperClass", "hideSortableGhost", "transitionDuration", "useDragHandle", "pressDelay", "pressThreshold", "shouldCancelStart", "onSortStart", "onSortMove", "onSortEnd", "axis", "lockAxis", "lockOffset", "lockToContainerEdges", "getContainer", "getHelperDimensions")))
                    }
                }]), n
            }(o.Component), t.displayName = (0, p.provideDisplayName)("sortableList", e), t.defaultProps = {
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
                axis: c.default.oneOf(["x", "y", "xy"]),
                distance: c.default.number,
                lockAxis: c.default.string,
                helperClass: c.default.string,
                transitionDuration: c.default.number,
                contentWindow: c.default.any,
                onSortStart: c.default.func,
                onSortMove: c.default.func,
                onSortEnd: c.default.func,
                shouldCancelStart: c.default.func,
                pressDelay: c.default.number,
                useDragHandle: c.default.bool,
                useWindowAsScrollContainer: c.default.bool,
                hideSortableGhost: c.default.bool,
                lockToContainerEdges: c.default.bool,
                lockOffset: c.default.oneOfType([c.default.number, c.default.string, c.default.arrayOf(c.default.oneOfType([c.default.number, c.default.string]))]),
                getContainer: c.default.func,
                getHelperDimensions: c.default.func
            }, t.childContextTypes = {
                manager: c.default.object.isRequired
            }, n
        };
        var o = n("GiK3"),
            s = h(o),
            c = h(n("qUKr")),
            l = n("O27J"),
            u = h(n("crWv")),
            d = h(n("xKuy")),
            p = n("Vgej");

        function h(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function m(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
    },
    PWbw: function(e, t) {
        e.exports = function(e) {
            return this.__data__.has(e)
        }
    },
    "Pd+R": function(e, t) {},
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
    QG23: function(e, t, n) {
        var r = n("w1Jz"),
            i = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            var t = this.__data__;
            return r ? void 0 !== t[e] : i.call(t, e)
        }
    },
    QQy1: function(e, t, n) {
        var r = n("mG6l"),
            i = n("SCwa"),
            a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            o = /^\w*$/;
        e.exports = function(e, t) {
            if (r(e)) return !1;
            var n = typeof e;
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !i(e)) || o.test(e) || !a.test(e) || null != t && e in Object(t)
        }
    },
    Qe41: function(e, t) {
        e.exports = function(e) {
            var t = "rgb";
            return 4 === e.length && (t += "a"), e[0] = Math.round(e[0]), e[1] = Math.round(e[1]), e[2] = Math.round(e[2]), t + "(" + e.join(",") + ")"
        }
    },
    QxUn: function(e, t, n) {
        var r = n("w1Jz"),
            i = "__lodash_hash_undefined__";
        e.exports = function(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? i : t, this
        }
    },
    RC0U: function(e, t) {},
    ROCN: function(e, t, n) {
        var r = n("idL5"),
            i = 500;
        e.exports = function(e) {
            var t = r(e, function(e) {
                    return n.size === i && n.clear(), e
                }),
                n = t.cache;
            return t
        }
    },
    RPon: function(e, t, n) {
        var r = n("a4Db"),
            i = n("II0X");

        function a(e, t) {
            switch (e = parseFloat(e), t) {
                case 0:
                    return i(e, 0, 360);
                case 1:
                case 2:
                    return i(e, 0, 100);
                case 3:
                    return i(e, 0, 1)
            }
        }
        e.exports = function(e) {
            return r(e).map(a)
        }
    },
    Ro3v: function(e, t, n) {
        var r = n("0e1M"),
            i = n("Czj7");
        e.exports = function(e, t) {
            var n = -1,
                a = i(e) ? Array(e.length) : [];
            return r(e, function(e, r, i) {
                a[++n] = t(e, r, i)
            }), a
        }
    },
    SCwa: function(e, t, n) {
        var r = n("43dD"),
            i = n("VGcK"),
            a = "[object Symbol]";
        e.exports = function(e) {
            return "symbol" == typeof e || i(e) && r(e) == a
        }
    },
    SVcC: function(e, t, n) {
        var r = n("KYFq"),
            i = 1 / 0,
            a = 1.7976931348623157e308;
        e.exports = function(e) {
            return e ? (e = r(e)) === i || e === -i ? (e < 0 ? -1 : 1) * a : e == e ? e : 0 : 0 === e ? e : 0
        }
    },
    ScRf: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Chat_UpdateChatColor"
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
                                value: "UpdateChatColorInput"
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
                            value: "updateChatColor"
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
                                    value: "user"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "chatColor"
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
                end: 117
            }
        };
        n.loc.source = {
            body: "mutation Chat_UpdateChatColor($input: UpdateChatColorInput!){\nupdateChatColor(input: $input) {\nuser {\nchatColor\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    SjFU: function(e, t, n) {
        var r = n("+cPc"),
            i = n("Fbrx"),
            a = n("F3kA"),
            o = n("mG6l"),
            s = n("JYjH");
        e.exports = function(e) {
            return "function" == typeof e ? e : null == e ? a : "object" == typeof e ? o(e) ? i(e[0], e[1]) : r(e) : s(e)
        }
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
            "" === t && (t = "png");
            return t
        }
    },
    TubT: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PostSubscriptionsToggle"
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
                                    value: "primeSettings"
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
                                            value: "isSubCreditChatNotificationEnabled"
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
                end: 108
            }
        };
        n.loc.source = {
            body: "query PostSubscriptionsToggle {\ncurrentUser {\nid\nprimeSettings {\nid\nisSubCreditChatNotificationEnabled\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    U2kw: function(e, t, n) {
        var r = n("43dD"),
            i = n("kl/u"),
            a = "[object AsyncFunction]",
            o = "[object Function]",
            s = "[object GeneratorFunction]",
            c = "[object Proxy]";
        e.exports = function(e) {
            if (!i(e)) return !1;
            var t = r(e);
            return t == o || t == s || t == a || t == c
        }
    },
    UAbV: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_XboxOneConnection"
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
                                    value: "ssoLinks"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "app"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "xb1",
                                        block: !1
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "app"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "ssoID"
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
                end: 102
            }
        };
        n.loc.source = {
            body: 'query Settings_Connections_XboxOneConnection {\ncurrentUser {\nid\nssoLinks(app: "xb1") {\napp\nssoID\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    UD8e: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpdateBroadcastSettings"
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
                                value: "UpdateBroadcastSettingsInput"
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
                            value: "updateBroadcastSettings"
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
                                    value: "broadcastSettings"
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
                                            value: "isMature"
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
                end: 152
            }
        };
        n.loc.source = {
            body: "mutation UpdateBroadcastSettings($input: UpdateBroadcastSettingsInput!) {\nupdateBroadcastSettings(input: $input) {\nbroadcastSettings {\nid\nisMature\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    UILf: function(e, t, n) {
        "use strict";
        var r, i = n("GWfv"),
            a = (r = i) && r.__esModule ? r : {
                default: r
            };
        e.exports = a.default
    },
    UIkr: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpdateUserDirectoryHiddenSetting"
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
                                value: "UpdateUserDirectoryHiddenInput"
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
                            value: "updateUserDirectoryHidden"
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
                                    value: "user"
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
                                            value: "settings"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isDirectoryHidden"
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
                end: 174
            }
        };
        n.loc.source = {
            body: "mutation UpdateUserDirectoryHiddenSetting($input: UpdateUserDirectoryHiddenInput!) {\nupdateUserDirectoryHidden(input: $input) {\nuser {\nid\nsettings {\nisDirectoryHidden\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "UT8+": function(e, t) {
        e.exports = function(e) {
            var t = this.__data__,
                n = t.delete(e);
            return this.size = t.size, n
        }
    },
    UbVv: function(e, t, n) {
        "use strict";
        t.c = function() {
            return window.Notification && "default" === window.Notification.permission
        }, t.a = function() {
            return window.Notification && "denied" === window.Notification.permission
        }, t.b = function() {
            return window.Notification && "granted" === window.Notification.permission
        }
    },
    "V/Pj": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        o(n("GiK3"));
        var r = o(n("O27J")),
            i = o(n("KSGD")),
            a = o(n("MKJo"));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s() {}
        var c = {
            propTypes: {
                onChange: i.default.func.isRequired,
                max: i.default.number
            },
            getDefaultProps: function() {
                return {
                    onChange: s,
                    max: 1
                }
            },
            getInitialState: function() {
                return {
                    active: !1
                }
            },
            componentDidMount: function() {
                this.document = r.default.findDOMNode(this).ownerDocument, this.rect = this.getBoundingRect()
            },
            startUpdates: function(e) {
                var t = this.document;
                t.addEventListener("mousemove", this.handleUpdate), t.addEventListener("touchmove", this.handleUpdate), t.addEventListener("mouseup", this.stopUpdates), t.addEventListener("touchend", this.stopUpdates), e.preventDefault();
                var n = this.getPosition(e),
                    r = n.x,
                    i = n.y;
                this.rect = this.getBoundingRect(), this.setState({
                    active: !0
                }), this.updatePosition(this.rect, r, i)
            },
            handleUpdate: function(e) {
                e.preventDefault();
                var t = this.getPosition(e),
                    n = t.x,
                    r = t.y;
                this.updatePosition(this.rect, n, r)
            },
            stopUpdates: function() {
                var e = this.document;
                e.removeEventListener("mousemove", this.handleUpdate), e.removeEventListener("touchmove", this.handleUpdate), e.removeEventListener("mouseup", this.stopUpdates), e.removeEventListener("touchend", this.stopUpdates), this.setState({
                    active: !1
                })
            },
            getPosition: function(e) {
                return e.touches && (e = e.touches[0]), {
                    x: e.clientX,
                    y: e.clientY
                }
            },
            getPercentageValue: function(e) {
                return e / this.props.max * 100 + "%"
            },
            getScaledValue: function(e) {
                return (0, a.default)(e, 0, 1) * this.props.max
            },
            getBoundingRect: function() {
                return r.default.findDOMNode(this).getBoundingClientRect()
            }
        };
        t.default = c
    },
    VEC5: function(e, t) {
        e.exports = function(e, t, n, r) {
            for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;)
                if (t(e[a], a, e)) return a;
            return -1
        }
    },
    VGcK: function(e, t) {
        e.exports = function(e) {
            return null != e && "object" == typeof e
        }
    },
    Vgej: function(e, t, n) {
        "use strict";
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
            if (n < e) return e;
            if (n > t) return t;
            return n
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
        }();

        function r(e) {
            return "px" === e.substr(-2) ? parseFloat(e) : 0
        }
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
            return fetch(i.a.krakenEndpoint + "/users/" + e + "/default_images?client_id=" + i.a.authSettings.clientID + "&api_version=" + i.a.defaultAPIVersion, {
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
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, fetch(i.a.krakenEndpoint + "/users/" + e + "/upload_image?client_id=" + i.a.authSettings.clientID + "&api_version=" + i.a.defaultAPIVersion + "&image_type=" + n + "&format=" + a, {
                                method: "POST",
                                headers: {
                                    Authorization: "OAuth " + t
                                }
                            })];
                        case 1:
                            return [2, r.sent().json()]
                    }
                })
            })
        };
        var r = n("TToO"),
            i = n("6sO2"),
            a = n("puy8")
    },
    WAou: function(e, t, n) {
        "use strict";
        var r = {};
        e.exports = r
    },
    WFpE: function(e, t, n) {
        var r = n("SCwa");
        e.exports = function(e, t) {
            if (e !== t) {
                var n = void 0 !== e,
                    i = null === e,
                    a = e == e,
                    o = r(e),
                    s = void 0 !== t,
                    c = null === t,
                    l = t == t,
                    u = r(t);
                if (!c && !u && !o && e > t || o && s && l && !c && !u || i && s && l || !n && l || !a) return 1;
                if (!i && !o && !u && e < t || u && n && a && !i && !o || c && n && a || !s && a || !l) return -1
            }
            return 0
        }
    },
    WKFf: function(e, t) {},
    WYac: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_OtherConnectionsList"
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
                                    value: "clientAuthorizations"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "clientID"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "clientName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "createdAt"
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
                end: 125
            }
        };
        n.loc.source = {
            body: "query Settings_Connections_OtherConnectionsList {\ncurrentUser {\nid\nclientAuthorizations {\nclientID\nclientName\ncreatedAt\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
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
    WlEI: function(e, t) {
        e.exports = function() {
            return !1
        }
    },
    WrTc: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("6sO2"),
            o = n("+0KR"),
            s = n("Odds"),
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    return this.props.onClickCancel && (e = i.createElement(s._8, {
                        padding: {
                            left: 1
                        },
                        display: s.R.Inline
                    }, i.createElement(s.v, {
                        disabled: !(this.props.status === o.b.DirtyChanges || this.props.status === o.b.Error),
                        size: s.z.Large,
                        type: s.B.Text,
                        "data-test-selector": "cancel-button-selector",
                        onClick: this.props.onClickCancel
                    }, Object(a.d)("Cancel", "SaveSettingsFooter")))), i.createElement(s._8, null, i.createElement(o.a, {
                        status: this.props.status,
                        size: s.z.Large,
                        onClick: this.props.onClickSave,
                        "data-a-target": "save-user-settings-button",
                        "data-test-selector": "save-button-selector"
                    }, this.props.status === o.b.Error ? Object(a.d)("Failed to save settings. Try again.", "SaveButton") : Object(a.d)("Save Changes", "SaveSettingsFooter")), e)
                }, t
            }(i.Component);
        n.d(t, !1, function() {
            return "save-button-selector"
        }), n.d(t, !1, function() {
            return "cancel-button-selector"
        }), n.d(t, "a", function() {
            return c
        })
    },
    XCQF: function(e, t) {},
    XdSf: function(e, t, n) {
        "use strict";
        t.a = function() {
            var e = this;
            return Object(i.a)(a, {
                props: function(t) {
                    return {
                        updateChatColorMutation: function(n) {
                            return r.__awaiter(e, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return t.mutate ? [4, t.mutate({
                                                variables: {
                                                    input: {
                                                        color: n
                                                    }
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return [2, e.sent().data];
                                        case 2:
                                            throw new Error("Update chat color mutation is not ready")
                                    }
                                })
                            })
                        }
                    }
                }
            })
        };
        var r = n("TToO"),
            i = n("7vx8"),
            a = n("ScRf");
        n.n(a)
    },
    XhdA: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpdateUserSubscriptionSettings"
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
                                value: "UpdateUserSubscriptionSettingsInput"
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
                            value: "updateUserSubscriptionSettings"
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
                                    value: "subscriptionSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isGiftCountHidden"
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
                end: 182
            }
        };
        n.loc.source = {
            body: "mutation UpdateUserSubscriptionSettings($input: UpdateUserSubscriptionSettingsInput!) {\nupdateUserSubscriptionSettings(input: $input) {\nsubscriptionSettings {\nisGiftCountHidden\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Xj08: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UnlinkAmazonConnectionStatusMutation"
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
                                value: "UnlinkAmazonConnectionInput"
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
                            value: "unlinkAmazonConnection"
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
                                    value: "isSuccess"
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
                end: 139
            }
        };
        n.loc.source = {
            body: "mutation UnlinkAmazonConnectionStatusMutation($input: UnlinkAmazonConnectionInput!) {\nunlinkAmazonConnection(input: $input) {\nisSuccess\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Y4as: function(e, t) {},
    YNJY: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }
    },
    YOyG: function(e, t, n) {
        var r = n("y5ks"),
            i = n("usEs"),
            a = n("skb1"),
            o = a && a.isTypedArray,
            s = o ? i(o) : r;
        e.exports = s
    },
    Zfct: function(e, t, n) {
        var r = n("oDbm"),
            i = n("Bh6c"),
            a = n("9nrn");
        e.exports = function() {
            this.size = 0, this.__data__ = {
                hash: new r,
                map: new(a || i),
                string: new r
            }
        }
    },
    Zh2I: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("6sO2"),
            o = n("Hs3O"),
            s = n("CSlQ"),
            c = n("Tr7p"),
            l = n("Odds"),
            u = (n("cTXP"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onTryPrimeClick = function() {
                        Object(c.j)({
                            buttonPosition: t.props.tracking.position
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.getLink = function() {
                    if (this.props.externalURI) return this.props.externalURI;
                    var e = this.props.externalReftag || o.c;
                    return Object(o.d)(e, window.location.pathname.substring(1))
                }, t.prototype.render = function() {
                    return i.createElement(l._8, {
                        className: "prime-upsell-button__subsite",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, i.createElement(l.v, {
                        fullWidth: !0,
                        size: l.z.Large,
                        linkTo: this.getLink(),
                        targetBlank: !0,
                        onClick: this.onTryPrimeClick
                    }, Object(a.d)("Try Twitch Prime", "TryPrimeButton")))
                }, t
            }(i.Component)),
            d = Object(s.d)("TryPrimeButton", {
                autoReportInteractive: !0
            })(u);
        n.d(t, "a", function() {
            return d
        })
    },
    "a/6q": function(e, t, n) {
        var r = n("DRNv");
        e.exports = function(e) {
            return r(this, e).has(e)
        }
    },
    a4Db: function(e, t) {
        var n = /-?\d+(\.\d+)?%?/g;
        e.exports = function(e) {
            return e.match(n)
        }
    },
    aIUG: function(e, t, n) {
        var r = n("mG6l"),
            i = n("QQy1"),
            a = n("D4QM"),
            o = n("kdNP");
        e.exports = function(e, t) {
            return r(e) ? e : i(e, t) ? [e] : a(o(e))
        }
    },
    am5H: function(e, t, n) {
        var r = n("kl/u");
        e.exports = function(e) {
            return e == e && !r(e)
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
    bHrU: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_YoutubeConnection"
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
                                    value: "accountConnections"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "youtube"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "channelURL"
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
                end: 113
            }
        };
        n.loc.source = {
            body: "query Settings_Connections_YoutubeConnection {\ncurrentUser {\nid\naccountConnections {\nyoutube {\nchannelURL\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    bL9o: function(e, t, n) {
        var r = n("t3nn"),
            i = n("9nrn"),
            a = n("uS5W"),
            o = n("57tO"),
            s = n("FvmC"),
            c = n("43dD"),
            l = n("NuOc"),
            u = l(r),
            d = l(i),
            p = l(a),
            h = l(o),
            m = l(s),
            g = c;
        (r && "[object DataView]" != g(new r(new ArrayBuffer(1))) || i && "[object Map]" != g(new i) || a && "[object Promise]" != g(a.resolve()) || o && "[object Set]" != g(new o) || s && "[object WeakMap]" != g(new s)) && (g = function(e) {
            var t = c(e),
                n = "[object Object]" == t ? e.constructor : void 0,
                r = n ? l(n) : "";
            if (r) switch (r) {
                case u:
                    return "[object DataView]";
                case d:
                    return "[object Map]";
                case p:
                    return "[object Promise]";
                case h:
                    return "[object Set]";
                case m:
                    return "[object WeakMap]"
            }
            return t
        }), e.exports = g
    },
    bX1P: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpdateChatSettings"
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
                                value: "UpdateChatSettingsInput"
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
                            value: "updateChatSettings"
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
                                            value: "autoModLevel"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "blockLinks"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "chatDelayMs"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isOptedOutOfGlobalBannedWordsList"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "requireVerifiedAccount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
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
                end: 219
            }
        };
        n.loc.source = {
            body: "mutation UpdateChatSettings($input: UpdateChatSettingsInput!) {\nupdateChatSettings(input: $input) {\nchatSettings {\nautoModLevel\nblockLinks\nchatDelayMs\nisOptedOutOfGlobalBannedWordsList\nrequireVerifiedAccount\nrules\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    cAbv: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChatColorPicker_CurrentUser"
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
                                    value: "chatColor"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 84
            }
        };
        n.loc.source = {
            body: "query ChatColorPicker_CurrentUser {\ncurrentUser {\nid\nlogin\nchatColor\ndisplayName\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    cTXP: function(e, t) {},
    cXqt: function(e, t, n) {
        var r = n("ymQA"),
            i = n("o3xN"),
            a = n("2urJ");

        function o(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.__data__ = new r; ++t < n;) this.add(e[t])
        }
        o.prototype.add = o.prototype.push = i, o.prototype.has = a, e.exports = o
    },
    cjOD: function(e, t) {
        var n = 9007199254740991,
            r = /^(?:0|[1-9]\d*)$/;
        e.exports = function(e, t) {
            return !!(t = null == t ? n : t) && ("number" == typeof e || r.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
    },
    cpRO: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "SettingsPrimePage_PrimeEmotesSetPicker_UpdatePrimeSettings"
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
                                value: "UpdatePrimeSettingsInput"
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
                            value: "updatePrimeSettings"
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
                                    value: "primeSettings"
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
                                            value: "primeEmoticons"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "currentSetName"
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
                end: 200
            }
        };
        n.loc.source = {
            body: "mutation SettingsPrimePage_PrimeEmotesSetPicker_UpdatePrimeSettings($input: UpdatePrimeSettingsInput!) {\nupdatePrimeSettings(input: $input) {\nprimeSettings {\nid\nprimeEmoticons {\ncurrentSetName\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
    deXC: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("gLfK"),
            o = n("Jo6h"),
            s = n("Odds"),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderBody = function() {
                        return t.props.showPlaceholder ? i.createElement(s._14, null) : i.createElement(s._8, null, i.createElement(s._51, {
                            checked: t.props.checked,
                            error: t.props.error,
                            disabled: t.props.disabled,
                            onChange: t.onChange,
                            name: t.props.name,
                            id: t.props.id
                        }), i.createElement(a.a, {
                            text: t.props.description,
                            extraText: t.props.extraDescription
                        }))
                    }, t.onChange = function(e) {
                        t.props.onChange && t.props.onChange(e.currentTarget.checked)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(o.a, {
                        id: this.props.id,
                        label: this.props.label,
                        error: this.props.error,
                        errorMessage: this.props.errorMessage,
                        orientation: s.X.Horizontal
                    }, this.renderBody())
                }, t
            }(i.Component);
        n.d(t, "a", function() {
            return c
        })
    },
    eGfi: function(e, t, n) {
        var r = n("uIws");
        e.exports = function(e, t) {
            var n = this.__data__,
                i = r(n, e);
            return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
        }
    },
    eWqu: function(e, t, n) {
        var r = n("CTFd"),
            i = n("HMFB");
        e.exports = function(e, t) {
            return e && r(e, t, i)
        }
    },
    eXGG: function(e, t, n) {
        "use strict";
        var r = function(e) {};
        e.exports = function(e, t, n, i, a, o, s, c) {
            if (r(t), !e) {
                var l;
                if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var u = [n, i, a, o, s, c],
                        d = 0;
                    (l = new Error(t.replace(/%s/g, function() {
                        return u[d++]
                    }))).name = "Invariant Violation"
                }
                throw l.framesToPop = 1, l
            }
        }
    },
    ebTC: function(e, t, n) {
        "use strict";
        var r = n("RH2O"),
            i = n("2KeS"),
            a = n("V5M+"),
            o = n("Aj/L"),
            s = n("TToO"),
            c = n("GiK3"),
            l = n("6sO2"),
            u = n("J8WN"),
            d = n("+8VM"),
            p = n("7vx8"),
            h = n("HZww"),
            m = n("4Q9N"),
            g = n("Tt3k"),
            f = n("W6ca"),
            v = n("xgnX"),
            b = n("CSlQ"),
            y = n("Odds"),
            S = (n("+Aaf"), n("0H+u")),
            k = ["image/*"],
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imageUpdated: !1,
                        loading: !1
                    }, t.currentImage = null, t.logger = l.j.withCategory("UserImageUploader"), t.onImageInputChange = function(e) {
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
                                                return s.trys.push([1, 3, , 4]), [4, Object(f.a)(this.props.userID, this.props.authToken, this.props.imageType, r)];
                                            case 2:
                                                return t = s.sent(), n = t.upload_url, i = t.upload_id, [3, 4];
                                            case 3:
                                                return a = s.sent(), this.logger.error(a, "Request for upload ID failed to get expected response from server."), this.setState({
                                                    statusMessage: v.b.UnexpectedError
                                                }), [2];
                                            case 4:
                                                return this.unsubscribe = l.k.subscribe({
                                                    topic: Object(h.j)(this.props.userID),
                                                    success: function() {
                                                        try {
                                                            Object(f.c)(n, o.currentImage)
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
                    var t = Object(l.d)("Editing profile banner for {userName}", {
                        userName: e
                    }, "UserImageUploader");
                    this.props.imageType === m.a.ChannelOfflineImage && (t = Object(l.d)("Editing video banner for {userName}", {
                        userName: e
                    }, "UserImageUploader"));
                    var n = null;
                    if (this.state.loading) n = c.createElement(y._8, {
                        className: "user-image-uploader__upload-svg--anim-fill",
                        position: y._15.Relative,
                        "data-test-selector": "loading-status"
                    }, c.createElement(y._24, {
                        asset: y._25.Upload,
                        type: y._26.Brand,
                        width: 99,
                        height: 76
                    }));
                    else {
                        var r = Object(l.d)("Recommended image size: 1200x380 and less than 10MB.", "UserImageUploader");
                        this.props.imageType === m.a.ChannelOfflineImage && (r = Object(l.d)("Recommended image size: 1920x1080 and less than 10MB.", "UserImageUploader")), n = c.createElement(y._8, null, c.createElement(y._8, {
                            className: "user-image-uploader__upload-info"
                        }, c.createElement(y._8, null, c.createElement(y._24, {
                            asset: y._25.Plus,
                            type: y._26.Alt2,
                            height: 20,
                            width: 20
                        })), c.createElement(y.Q, {
                            type: y._49.H3,
                            color: y.K.Alt2,
                            fontSize: y.V.Size4
                        }, Object(l.d)("Upload a Photo", "User Image Uploader"))), c.createElement(y._8, {
                            className: "user-image-uploader__upload-recommendation",
                            position: y._15.Absolute,
                            textAlign: y._45.Left,
                            attachLeft: !0,
                            attachBottom: !0,
                            margin: {
                                left: 3,
                                bottom: 1
                            }
                        }, c.createElement(y.Q, {
                            type: y._49.H6,
                            color: y.K.Alt2,
                            fontSize: y.V.Size8,
                            align: y._59.TextBottom
                        }, r)))
                    }
                    var i = null;
                    this.props.showCloser && (i = c.createElement(d.a, null));
                    var a = null;
                    if (null !== this.state.statusMessage) {
                        var o = Object(v.c)(this.state.statusMessage);
                        a = c.createElement(y._12, {
                            label: o.message,
                            type: o.type
                        })
                    }
                    return c.createElement(y._8, {
                        className: "user-image-uploader",
                        position: y._15.Relative,
                        fullHeight: !0
                    }, c.createElement(y._35, {
                        className: "user-image-uploader__background-container",
                        background: y.n.Base,
                        fullWidth: !0
                    }, c.createElement(y._8, {
                        padding: 2,
                        display: y.R.InlineBlock,
                        position: y._15.Relative,
                        textAlign: y._45.Center,
                        fullWidth: !0
                    }, c.createElement(y._35, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement(y.Q, {
                        type: y._49.H3,
                        fontSize: y.V.Size4
                    }, t)), c.createElement(y._8, {
                        className: "user-image-uploader__upload-container",
                        display: y.R.InlineBlock,
                        position: y._15.Relative,
                        textAlign: y._45.Center,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(y._8, {
                        className: "user-image-uploader__upload",
                        display: y.R.InlineBlock,
                        position: y._15.Relative,
                        textAlign: y._45.Center
                    }, c.createElement(u.a, {
                        allowedFileTypes: k,
                        onFilesSubmitted: this.onImageInputChange
                    }, n))), c.createElement(y._35, {
                        "data-test-selector": "status-message",
                        fontSize: y.V.Size4,
                        position: y._15.Relative,
                        textAlign: y._45.Center,
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
            }(c.Component),
            E = Object(b.d)("User Image Upload")(_);
        var C = Object(r.b)(function(e) {
            return {
                authToken: Object(o.a)(e)
            }
        }, function(e, t) {
            return Object(i.b)({
                closeModal: function() {
                    return t.successCallback && t.successCallback(), Object(a.c)()
                }
            }, e)
        })(E);
        n.d(t, "a", function() {
            return C
        })
    },
    enQx: function(e, t) {
        e.exports = function(e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
        }
    },
    eppJ: function(e, t) {},
    fVPD: function(e, t) {
        e.exports = function(e) {
            var t, n, r, i, a, o = e[0] / 360,
                s = e[1] / 100,
                c = e[2] / 100;
            if (0 == s) return [a = 255 * c, a, a];
            t = 2 * c - (n = c < .5 ? c * (1 + s) : c + s - c * s), i = [0, 0, 0];
            for (var l = 0; l < 3; l++)(r = o + 1 / 3 * -(l - 1)) < 0 && r++, r > 1 && r--, a = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t, i[l] = 255 * a;
            return i
        }
    },
    fXkM: function(e, t) {
        e.exports = function(e, t) {
            return null != e && t in Object(e)
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
    "g/lL": function(e, t, n) {
        var r = n("INOA"),
            i = n("mG6l");
        e.exports = function(e, t, n) {
            var a = t(e);
            return i(e) ? a : r(a, n(e))
        }
    },
    gKqb: function(e, t, n) {
        var r = n("Bh6c"),
            i = n("2EIm"),
            a = n("UT8+"),
            o = n("9GW9"),
            s = n("PWbw"),
            c = n("M0TM");

        function l(e) {
            var t = this.__data__ = new r(e);
            this.size = t.size
        }
        l.prototype.clear = i, l.prototype.delete = a, l.prototype.get = o, l.prototype.has = s, l.prototype.set = c, e.exports = l
    },
    gLfK: function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            i = n("Odds"),
            a = function(e) {
                return r.createElement(i._8, {
                    margin: {
                        top: 1
                    }
                }, r.createElement(i.Q, {
                    color: i.K.Alt,
                    "data-a-target": e.textDataTarget
                }, e.text), e.extraText && r.createElement(i._8, {
                    margin: {
                        top: .5
                    }
                }, r.createElement(i.Q, {
                    color: i.K.Alt2
                }, e.extraText)))
            };
        n.d(t, "a", function() {
            return a
        })
    },
    gfva: function(e, t, n) {
        var r = n("SVcC");
        e.exports = function(e) {
            var t = r(e),
                n = t % 1;
            return t == t ? n ? t - n : t : 0
        }
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
    h08i: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_FacebookConnection"
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
                                    value: "accountConnections"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "facebook"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "fullName"
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
                end: 113
            }
        };
        n.loc.source = {
            body: "query Settings_Connections_FacebookConnection {\ncurrentUser {\nid\naccountConnections {\nfacebook {\nfullName\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
    i1sU: function(e, t) {},
    i4TT: function(e, t, n) {
        var r = n("VEC5"),
            i = n("SjFU"),
            a = n("gfva"),
            o = Math.max;
        e.exports = function(e, t, n) {
            var s = null == e ? 0 : e.length;
            if (!s) return -1;
            var c = null == n ? 0 : a(n);
            return c < 0 && (c = o(s + c, 0)), r(e, i(t, 3), c)
        }
    },
    i61F: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.arrayMove = t.sortableHandle = t.sortableElement = t.sortableContainer = t.SortableHandle = t.SortableElement = t.SortableContainer = void 0;
        var r = n("Vgej");
        Object.defineProperty(t, "arrayMove", {
            enumerable: !0,
            get: function() {
                return r.arrayMove
            }
        });
        var i = s(n("P/Wu")),
            a = s(n("yauq")),
            o = s(n("tslQ"));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.SortableContainer = i.default, t.SortableElement = a.default, t.SortableHandle = o.default, t.sortableContainer = i.default, t.sortableElement = a.default, t.sortableHandle = o.default
    },
    iAlu: function(e, t, n) {
        var r = n("ndFl"),
            i = n("0zkw")(r);
        e.exports = i
    },
    iLYB: function(e, t, n) {
        var r = n("uIws"),
            i = Array.prototype.splice;
        e.exports = function(e) {
            var t = this.__data__,
                n = r(t, e);
            return !(n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0))
        }
    },
    iLlo: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_RokuConnection"
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
                                    value: "ssoLinks"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "app"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "roku",
                                        block: !1
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "app"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "ssoID"
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
            body: 'query Settings_Connections_RokuConnection {\ncurrentUser {\nid\nssoLinks(app: "roku") {\napp\nssoID\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    iOZM: function(e, t) {},
    idL5: function(e, t, n) {
        var r = n("ymQA"),
            i = "Expected a function";

        function a(e, t) {
            if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(i);
            var n = function() {
                var r = arguments,
                    i = t ? t.apply(this, r) : r[0],
                    a = n.cache;
                if (a.has(i)) return a.get(i);
                var o = e.apply(this, r);
                return n.cache = a.set(i, o) || a, o
            };
            return n.cache = new(a.Cache || r), n
        }
        a.Cache = r, e.exports = a
    },
    "j7/Y": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("OAwv"),
            a = n("GiK3"),
            o = n("F8kA"),
            s = n("6sO2");

        function c(e) {
            return function(t) {
                var n = function(n) {
                    function o(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = r.__assign({}, e.properties));
                                var n = r.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var a = i.referenceTracking,
                                    o = a.content,
                                    c = a.medium,
                                    l = a.content_index;
                                s.o.tracking.trackPageview(r.__assign({
                                    content: o,
                                    medium: c,
                                    content_index: l,
                                    location: e.location
                                }, t))
                            }
                        }, s.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return r.__extends(o, n), o.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, o.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, o.prototype.render = function() {
                        return a.createElement(t, r.__assign({}, this.props))
                    }, o.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? i.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var r = "",
                                a = i.stringify(t);
                            a.length > 0 && (r = "?" + a), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: r
                            })
                        }
                        return n
                    }, o
                }(a.Component);
                return Object(o.f)(n)
            }
        }
        n.d(t, "a", function() {
            return c
        })
    },
    "j7X+": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Security_HideDirectoryToggle"
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
                                    value: "settings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isDirectoryHidden"
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
                end: 97
            }
        };
        n.loc.source = {
            body: "query Settings_Security_HideDirectoryToggle {\ncurrentUser {\nid\nsettings {\nisDirectoryHidden\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jZb3: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_Steam"
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
                                    value: "accountConnections"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "steam"
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
            }],
            loc: {
                start: 0,
                end: 91
            }
        };
        n.loc.source = {
            body: "query Settings_Connections_Steam {\ncurrentUser {\nid\naccountConnections {\nsteam {\nid\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jZyZ: function(e, t) {
        e.exports = function(e, t) {
            return e.has(t)
        }
    },
    "jb/e": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_Amazon"
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
                                    value: "accountConnections"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasConnectedAmazon"
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
                end: 98
            }
        };
        n.loc.source = {
            body: "query Settings_Connections_Amazon {\ncurrentUser {\nid\naccountConnections {\nhasConnectedAmazon\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jfv9: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpdatePrimeSettings_PostSubscription"
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
                                value: "UpdatePrimeSettingsInput"
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
                            value: "updatePrimeSettings"
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
                                    value: "primeSettings"
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
                                            value: "isSubCreditChatNotificationEnabled"
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
                end: 179
            }
        };
        n.loc.source = {
            body: "mutation UpdatePrimeSettings_PostSubscription($input: UpdatePrimeSettingsInput!) {\nupdatePrimeSettings(input: $input) {\nprimeSettings {\nid\nisSubCreditChatNotificationEnabled\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jtEV: function(e, t) {},
    k6Ms: function(e, t, n) {
        var r = n("1nXM"),
            i = 1,
            a = Object.prototype.hasOwnProperty;
        e.exports = function(e, t, n, o, s, c) {
            var l = n & i,
                u = r(e),
                d = u.length;
            if (d != r(t).length && !l) return !1;
            for (var p = d; p--;) {
                var h = u[p];
                if (!(l ? h in t : a.call(t, h))) return !1
            }
            var m = c.get(e);
            if (m && c.get(t)) return m == t;
            var g = !0;
            c.set(e, t), c.set(t, e);
            for (var f = l; ++p < d;) {
                var v = e[h = u[p]],
                    b = t[h];
                if (o) var y = l ? o(b, v, h, t, e, c) : o(v, b, h, e, t, c);
                if (!(void 0 === y ? v === b || s(v, b, n, o, c) : y)) {
                    g = !1;
                    break
                }
                f || (f = "constructor" == h)
            }
            if (g && !f) {
                var S = e.constructor,
                    k = t.constructor;
                S != k && "constructor" in e && "constructor" in t && !("function" == typeof S && S instanceof S && "function" == typeof k && k instanceof k) && (g = !1)
            }
            return c.delete(e), c.delete(t), g
        }
    },
    kdNP: function(e, t, n) {
        var r = n("sa46");
        e.exports = function(e) {
            return null == e ? "" : r(e)
        }
    },
    kjxi: function(e, t, n) {
        var r = n("NDrF"),
            i = function() {
                try {
                    var e = r(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch (e) {}
            }();
        e.exports = i
    },
    "kl/u": function(e, t) {
        e.exports = function(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
    },
    kqTE: function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
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
    m2wS: function(e, t) {
        e.exports = function(e) {
            return function(t) {
                return null == t ? void 0 : t[e]
            }
        }
    },
    mAEY: function(e, t, n) {
        var r = n("JGv7"),
            i = n("H3TN"),
            a = n("mG6l"),
            o = r ? r.isConcatSpreadable : void 0;
        e.exports = function(e) {
            return a(e) || i(e) || !!(o && e && e[o])
        }
    },
    mG6l: function(e, t) {
        var n = Array.isArray;
        e.exports = n
    },
    mPnA: function(e, t, n) {
        (function(e) {
            var r = n("MygC"),
                i = n("WlEI"),
                a = "object" == typeof t && t && !t.nodeType && t,
                o = a && "object" == typeof e && e && !e.nodeType && e,
                s = o && o.exports === a ? r.Buffer : void 0,
                c = (s ? s.isBuffer : void 0) || i;
            e.exports = c
        }).call(t, n("3IRH")(e))
    },
    mVHD: function(e, t) {},
    n8KP: function(e, t, n) {
        var r = n("am5H"),
            i = n("HMFB");
        e.exports = function(e) {
            for (var t = i(e), n = t.length; n--;) {
                var a = t[n],
                    o = e[a];
                t[n] = [a, o, r(o)]
            }
            return t
        }
    },
    nVrf: function(e, t) {},
    ndFl: function(e, t, n) {
        var r = n("NSoo"),
            i = n("kjxi"),
            a = n("F3kA"),
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
    nqey: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_ChannelChat_BannedChatters"
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
                                    value: "bannedUsers"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "bannedAt"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "bannedUser"
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
                                            value: "modUser"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 140
            }
        };
        n.loc.source = {
            body: "query Settings_ChannelChat_BannedChatters {\ncurrentUser {\nid\nbannedUsers {\nbannedAt\nbannedUser {\nid\nlogin\n}\nmodUser {\nid\ndisplayName\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    o3xN: function(e, t) {
        var n = "__lodash_hash_undefined__";
        e.exports = function(e) {
            return this.__data__.set(e, n), this
        }
    },
    o6O8: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("6sO2"),
            o = n("CSlQ"),
            s = n("Tr7p"),
            c = n("Zh2I"),
            l = n("Odds"),
            u = (n("nVrf"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(l._35, {
                        "data-test-target": "prime-banner-upsell",
                        className: "prime-banner-upsell",
                        padding: {
                            x: 5,
                            y: 2
                        },
                        borderBottom: !0
                    }, i.createElement(l.Y, null, i.createElement(l.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 2,
                            lg: 2
                        }
                    }), i.createElement(l.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 4,
                            lg: 4
                        }
                    }, i.createElement(l._35, {
                        className: "prime-upsell__logo-container",
                        display: l.R.Flex,
                        padding: 2,
                        justifyContent: l._7.Center,
                        alignItems: l.c.Center,
                        textAlign: l._45.Center
                    }, i.createElement(l._24, {
                        asset: l._25.LogoTwitchPrime,
                        width: 330,
                        height: 150
                    }))), i.createElement(l.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 4,
                            lg: 4
                        }
                    }, i.createElement(l._35, {
                        display: l.R.Flex,
                        justifyContent: l._7.Center,
                        alignItems: l.c.Center,
                        textAlign: l._45.Center,
                        padding: 2
                    }, i.createElement(l._8, {
                        alignSelf: l.d.Center,
                        className: "prime-upsell__msg-container"
                    }, i.createElement(l.Q, {
                        type: l._49.P,
                        fontSize: l.V.Size4,
                        bold: !0
                    }, Object(a.d)("Free games, in-game loot, exclusives and surprises. New offers every month with Twitch Prime membership.", "PrimeUpsell")), i.createElement(c.a, {
                        externalReftag: this.props.externalReftag,
                        tracking: {
                            position: s.a.CenterBanner
                        }
                    }), i.createElement(l.Q, {
                        type: l._49.P,
                        fontSize: l.V.Size5
                    }, Object(a.d)("Powered by Amazon Prime", "PrimeUpsell")), i.createElement(l.N, {
                        src: "https://m.media-amazon.com/images/G/01/sm/twitchtv/assets/images/amazon_logo_SPOT_W_mono_2x.png",
                        alt: "Amazon Prime Logo"
                    })))), i.createElement(l.L, {
                        cols: {
                            default: 12,
                            sm: 12,
                            md: 2,
                            lg: 2
                        }
                    })))
                }, t
            }(i.Component)),
            d = Object(o.d)("TwitchPrimeBanner", {
                autoReportInteractive: !0
            })(u);
        n.d(t, !1, function() {
            return "prime-banner-upsell"
        }), n.d(t, "a", function() {
            return d
        })
    },
    oDbm: function(e, t, n) {
        var r = n("pgw8"),
            i = n("BaEo"),
            a = n("8xms"),
            o = n("QG23"),
            s = n("QxUn");

        function c(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = o, c.prototype.set = s, e.exports = c
    },
    oR9V: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return c
        });
        var r, i = n("TToO"),
            a = n("GiK3"),
            o = (n.n(a), n("6sO2")),
            s = n("Odds");
        ! function(e) {
            e[e.NoChanges = 0] = "NoChanges", e[e.DirtyChanges = 1] = "DirtyChanges", e[e.Working = 2] = "Working", e[e.Success = 3] = "Success", e[e.Error = 4] = "Error"
        }(r || (r = {}));
        var c = function(e) {
            var t = e.status,
                n = e.children,
                c = i.__rest(e, ["status", "children"]),
                l = s.A.Default,
                u = s.B.Default,
                d = !1;
            return t === r.Working ? l = s.A.Loading : t === r.Success ? l = s.A.Success : t === r.Error ? u = s.B.Alert : t === r.NoChanges && (d = !0), n || (n = t === r.Error ? Object(o.d)("Error", "Save Button") : Object(o.d)("Save", "Save Button")), a.createElement(s.v, i.__assign({
                disabled: d,
                state: l,
                type: u
            }, c), n)
        }
    },
    oYVU: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_ChannelVideo_MatureContent"
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
                                    value: "broadcastSettings"
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
                                            value: "isMature"
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
                end: 98
            }
        };
        n.loc.source = {
            body: "query Settings_ChannelVideo_MatureContent {\ncurrentUser {\nid\nbroadcastSettings {\nid\nisMature\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    ocV2: function(e, t) {},
    "p+QF": function(e, t) {
        var n = Object.prototype;
        e.exports = function(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || n)
        }
    },
    pLne: function(e, t, n) {
        var r = n("//bJ"),
            i = n("v6CG"),
            a = Object.prototype.propertyIsEnumerable,
            o = Object.getOwnPropertySymbols,
            s = o ? function(e) {
                return null == e ? [] : (e = Object(e), r(o(e), function(t) {
                    return a.call(e, t)
                }))
            } : i;
        e.exports = s
    },
    pNd4: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SettingsPrimePage_PrimeEmotesSetPicker"
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
                                    value: "primeSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "CurrentUserPrimeSettings"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "CurrentUserPrimeSettings"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "PrimeSettings"
                    }
                },
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
                            value: "primeEmoticons"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "currentSetName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "emoticonSets"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "PrimeEmoticonsSmiliesSet"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "PrimeEmoticonsSmiliesSet"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "SmiliesSet"
                    }
                },
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
                            value: "emotes"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "EmoteSetEmote"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "EmoteSetEmote"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Emote"
                    }
                },
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
                            value: "text"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 377
            }
        };
        n.loc.source = {
            body: "query SettingsPrimePage_PrimeEmotesSetPicker {\ncurrentUser {\nid\nprimeSettings {\n...CurrentUserPrimeSettings\n}\n}\n}\nfragment CurrentUserPrimeSettings on PrimeSettings {\nid\nprimeEmoticons {\ncurrentSetName\nemoticonSets {\n...PrimeEmoticonsSmiliesSet\n}\n}\n}\nfragment PrimeEmoticonsSmiliesSet on SmiliesSet {\nid\nemotes {\n...EmoteSetEmote\n}\n}\nfragment EmoteSetEmote on Emote {\nid\ntext\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    pUak: function(e, t) {
        e.exports = function(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(e) {
                n[++t] = e
            }), n
        }
    },
    pgw8: function(e, t, n) {
        var r = n("w1Jz");
        e.exports = function() {
            this.__data__ = r ? r(null) : {}, this.size = 0
        }
    },
    pkUp: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_Blizzard"
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
                                    value: "accountConnections"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "blizzard"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "battleTag"
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
                                    value: "blizzardAccount"
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
                                            value: "region"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "battleTag"
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
            body: "query Settings_Connections_Blizzard {\ncurrentUser {\nid\naccountConnections {\nblizzard {\nbattleTag\n}\n}\nblizzardAccount {\nid\nregion\nbattleTag\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    qUKr: function(e, t, n) {
        e.exports = n("xkKI")()
    },
    qu3O: function(e, t, n) {
        var r = n("cXqt"),
            i = n("BALR"),
            a = n("jZyZ"),
            o = 1,
            s = 2;
        e.exports = function(e, t, n, c, l, u) {
            var d = n & o,
                p = e.length,
                h = t.length;
            if (p != h && !(d && h > p)) return !1;
            var m = u.get(e);
            if (m && u.get(t)) return m == t;
            var g = -1,
                f = !0,
                v = n & s ? new r : void 0;
            for (u.set(e, t), u.set(t, e); ++g < p;) {
                var b = e[g],
                    y = t[g];
                if (c) var S = d ? c(y, b, g, t, e, u) : c(b, y, g, e, t, u);
                if (void 0 !== S) {
                    if (S) continue;
                    f = !1;
                    break
                }
                if (v) {
                    if (!i(t, function(e, t) {
                            if (!a(v, t) && (b === e || l(b, e, n, c, u))) return v.push(t)
                        })) {
                        f = !1;
                        break
                    }
                } else if (b !== y && !l(b, y, n, c, u)) {
                    f = !1;
                    break
                }
            }
            return u.delete(e), u.delete(t), f
        }
    },
    r0iv: function(e, t, n) {
        var r = n("p+QF"),
            i = n("Fy4Y"),
            a = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            if (!r(e)) return i(e);
            var t = [];
            for (var n in Object(e)) a.call(e, n) && "constructor" != n && t.push(n);
            return t
        }
    },
    r6UO: function(e, t, n) {
        var r = n("a4Db"),
            i = n("II0X");

        function a(e, t) {
            return t < 3 ? -1 != e.indexOf("%") ? Math.round(255 * i(parseInt(e, 10), 0, 100) / 100) : i(parseInt(e, 10), 0, 255) : i(parseFloat(e), 0, 1)
        }
        e.exports = function(e) {
            return r(e).map(a)
        }
    },
    rUMz: function(e, t, n) {
        "use strict";
        var r = function(e) {};
        e.exports = function(e, t, n, i, a, o, s, c) {
            if (r(t), !e) {
                var l;
                if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var u = [n, i, a, o, s, c],
                        d = 0;
                    (l = new Error(t.replace(/%s/g, function() {
                        return u[d++]
                    }))).name = "Invariant Violation"
                }
                throw l.framesToPop = 1, l
            }
        }
    },
    rYDZ: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            var n = Object(a.c)(i.o.store.getState());
            if (!n) return fetch(e, t);
            var s, c = t ? t.headers : {};
            if (Array.isArray(c)) {
                var l = (s = c.slice()).findIndex(function(e) {
                    return "Authorization" === e[0]
                });
                l >= 0 && s.splice(l, 1), s.push(["Authorization", o(n)])
            } else c instanceof Headers ? (s = new Headers(c)).set("Authorization", o(n)) : s = r.__assign({}, c, {
                Authorization: o(n)
            });
            return fetch(e, r.__assign({}, t, {
                headers: s
            }))
        };
        var r = n("TToO"),
            i = n("6sO2"),
            a = n("Aj/L");

        function o(e) {
            return "OAuth " + e.authToken
        }
    },
    "s/Z0": function(e, t, n) {
        var r = n("RPon"),
            i = n("McHv"),
            a = n("r6UO"),
            o = n("fVPD");
        var s = {
            "#": i,
            hsl: function(e) {
                var t = r(e),
                    n = o(t);
                return 4 === t.length && n.push(t[3]), n
            },
            rgb: a
        };

        function c(e) {
            for (var t in s)
                if (0 === e.indexOf(t)) return s[t](e)
        }
        c.rgb = a, c.hsl = r, c.hex = i, e.exports = c
    },
    sBY2: function(e, t) {
        e.exports = function() {
            this.__data__ = [], this.size = 0
        }
    },
    sVk6: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpdateUserSubscriptionSettings"
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
                                value: "UpdateUserSubscriptionSettingsInput"
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
                            value: "updateUserSubscriptionSettings"
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
                                    value: "subscriptionSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "giftsToFollowedChannelsOnly"
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
                end: 192
            }
        };
        n.loc.source = {
            body: "mutation UpdateUserSubscriptionSettings($input: UpdateUserSubscriptionSettingsInput!) {\nupdateUserSubscriptionSettings(input: $input) {\nsubscriptionSettings {\ngiftsToFollowedChannelsOnly\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    sa46: function(e, t, n) {
        var r = n("JGv7"),
            i = n("HMFi"),
            a = n("mG6l"),
            o = n("SCwa"),
            s = 1 / 0,
            c = r ? r.prototype : void 0,
            l = c ? c.toString : void 0;
        e.exports = function e(t) {
            if ("string" == typeof t) return t;
            if (a(t)) return i(t, e) + "";
            if (o(t)) return l ? l.call(t) : "";
            var n = t + "";
            return "0" == n && 1 / t == -s ? "-0" : n
        }
    },
    skb1: function(e, t, n) {
        (function(e) {
            var r = n("1tEs"),
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
    st1H: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_Twitter"
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
                                    value: "accountConnections"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "twitter"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "username"
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
                end: 101
            }
        };
        n.loc.source = {
            body: "query Settings_Connections_Twitter {\ncurrentUser {\nid\naccountConnections {\ntwitter {\nusername\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    t3nn: function(e, t, n) {
        var r = n("NDrF")(n("MygC"), "DataView");
        e.exports = r
    },
    t4xU: function(e, t) {},
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
    tZ8z: function(e, t, n) {
        "use strict";
        var r = n("sgb3");
        e.exports = {
            shouldComponentUpdate: function(e, t) {
                return !r(this.props, e) || !r(this.state, t)
            }
        }
    },
    tobj: function(e, t, n) {
        var r = n("43dD"),
            i = n("VGcK"),
            a = "[object Arguments]";
        e.exports = function(e) {
            return i(e) && r(e) == a
        }
    },
    tslQ: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = function() {
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
            var t, n, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
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
                }(n, t), i(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = (0, s.findDOMNode)(this);
                        e.sortableHandle = !0
                    }
                }, {
                    key: "getWrappedInstance",
                    value: function() {
                        return (0, c.default)(u.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"), this.refs.wrappedInstance
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = u.withRef ? "wrappedInstance" : null;
                        return o.default.createElement(e, r({
                            ref: t
                        }, this.props))
                    }
                }]), n
            }(a.Component), t.displayName = (0, l.provideDisplayName)("sortableHandle", e), n
        };
        var a = n("GiK3"),
            o = u(a),
            s = n("O27J"),
            c = u(n("crWv")),
            l = n("Vgej");

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    uIws: function(e, t, n) {
        var r = n("EpL8");
        e.exports = function(e, t) {
            for (var n = e.length; n--;)
                if (r(e[n][0], t)) return n;
            return -1
        }
    },
    uS5W: function(e, t, n) {
        var r = n("NDrF")(n("MygC"), "Promise");
        e.exports = r
    },
    upQt: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_Xbox360Connection"
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
                                    value: "ssoLinks"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "app"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "xb360",
                                        block: !1
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "app"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "ssoID"
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
                end: 104
            }
        };
        n.loc.source = {
            body: 'query Settings_Connections_Xbox360Connection {\ncurrentUser {\nid\nssoLinks(app: "xb360") {\napp\nssoID\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    usEs: function(e, t) {
        e.exports = function(e) {
            return function(t) {
                return e(t)
            }
        }
    },
    v6CG: function(e, t) {
        e.exports = function() {
            return []
        }
    },
    vEIR: function(e, t) {
        e.exports = function(e) {
            var t = e[0] / 60,
                n = e[1] / 100,
                r = e[2] / 100,
                i = Math.floor(t) % 6,
                a = t - Math.floor(t),
                o = 255 * r * (1 - n),
                s = 255 * r * (1 - n * a),
                c = 255 * r * (1 - n * (1 - a));
            switch (r *= 255, i) {
                case 0:
                    return [r, c, o];
                case 1:
                    return [s, r, o];
                case 2:
                    return [o, r, c];
                case 3:
                    return [o, s, r];
                case 4:
                    return [c, o, r];
                case 5:
                    return [r, o, s]
            }
        }
    },
    vgA0: function(e, t, n) {
        var r = n("II0X");

        function i(e) {
            var t = Math.round(r(e, 0, 255)).toString(16);
            return 1 == t.length ? "0" + t : t
        }
        e.exports = function(e) {
            var t = 4 === e.length ? i(255 * e[3]) : "";
            return "#" + i(e[0]) + i(e[1]) + i(e[2]) + t
        }
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
    vwDu: function(e, t, n) {
        var r = n("DRNv");
        e.exports = function(e) {
            var t = r(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
    },
    vzFj: function(e, t) {
        e.exports = function(e) {
            return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3
        }
    },
    w1Jz: function(e, t, n) {
        var r = n("NDrF")(Object, "create");
        e.exports = r
    },
    wSgH: function(e, t, n) {
        var r = n("Czj7");
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
    wVoL: function(e, t, n) {
        var r = n("DRNv");
        e.exports = function(e, t) {
            var n = r(this, e),
                i = n.size;
            return n.set(e, t), this.size += n.size == i ? 0 : 1, this
        }
    },
    weaG: function(e, t) {},
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
    wqO5: function(e, t, n) {
        "use strict";
        var r = n("BEQ0"),
            i = n("WAou"),
            a = n("rUMz"),
            o = "mixins";
        e.exports = function(e, t, n) {
            var s = [],
                c = {
                    mixins: "DEFINE_MANY",
                    statics: "DEFINE_MANY",
                    propTypes: "DEFINE_MANY",
                    contextTypes: "DEFINE_MANY",
                    childContextTypes: "DEFINE_MANY",
                    getDefaultProps: "DEFINE_MANY_MERGED",
                    getInitialState: "DEFINE_MANY_MERGED",
                    getChildContext: "DEFINE_MANY_MERGED",
                    render: "DEFINE_ONCE",
                    componentWillMount: "DEFINE_MANY",
                    componentDidMount: "DEFINE_MANY",
                    componentWillReceiveProps: "DEFINE_MANY",
                    shouldComponentUpdate: "DEFINE_ONCE",
                    componentWillUpdate: "DEFINE_MANY",
                    componentDidUpdate: "DEFINE_MANY",
                    componentWillUnmount: "DEFINE_MANY",
                    UNSAFE_componentWillMount: "DEFINE_MANY",
                    UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
                    UNSAFE_componentWillUpdate: "DEFINE_MANY",
                    updateComponent: "OVERRIDE_BASE"
                },
                l = {
                    getDerivedStateFromProps: "DEFINE_MANY_MERGED"
                },
                u = {
                    displayName: function(e, t) {
                        e.displayName = t
                    },
                    mixins: function(e, t) {
                        if (t)
                            for (var n = 0; n < t.length; n++) p(e, t[n])
                    },
                    childContextTypes: function(e, t) {
                        e.childContextTypes = r({}, e.childContextTypes, t)
                    },
                    contextTypes: function(e, t) {
                        e.contextTypes = r({}, e.contextTypes, t)
                    },
                    getDefaultProps: function(e, t) {
                        e.getDefaultProps ? e.getDefaultProps = m(e.getDefaultProps, t) : e.getDefaultProps = t
                    },
                    propTypes: function(e, t) {
                        e.propTypes = r({}, e.propTypes, t)
                    },
                    statics: function(e, t) {
                        ! function(e, t) {
                            if (t)
                                for (var n in t) {
                                    var r = t[n];
                                    if (t.hasOwnProperty(n)) {
                                        var i = n in u;
                                        a(!i, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', n);
                                        var o = n in e;
                                        if (o) {
                                            var s = l.hasOwnProperty(n) ? l[n] : null;
                                            return a("DEFINE_MANY_MERGED" === s, "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", n), void(e[n] = m(e[n], r))
                                        }
                                        e[n] = r
                                    }
                                }
                        }(e, t)
                    },
                    autobind: function() {}
                };

            function d(e, t) {
                var n = c.hasOwnProperty(t) ? c[t] : null;
                y.hasOwnProperty(t) && a("OVERRIDE_BASE" === n, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", t), e && a("DEFINE_MANY" === n || "DEFINE_MANY_MERGED" === n, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", t)
            }

            function p(e, n) {
                if (n) {
                    a("function" != typeof n, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."), a(!t(n), "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");
                    var r = e.prototype,
                        i = r.__reactAutoBindPairs;
                    for (var s in n.hasOwnProperty(o) && u.mixins(e, n.mixins), n)
                        if (n.hasOwnProperty(s) && s !== o) {
                            var l = n[s],
                                p = r.hasOwnProperty(s);
                            if (d(p, s), u.hasOwnProperty(s)) u[s](e, l);
                            else {
                                var h = c.hasOwnProperty(s);
                                if ("function" != typeof l || h || p || !1 === n.autobind)
                                    if (p) {
                                        var f = c[s];
                                        a(h && ("DEFINE_MANY_MERGED" === f || "DEFINE_MANY" === f), "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", f, s), "DEFINE_MANY_MERGED" === f ? r[s] = m(r[s], l) : "DEFINE_MANY" === f && (r[s] = g(r[s], l))
                                    } else r[s] = l;
                                else i.push(s, l), r[s] = l
                            }
                        }
                }
            }

            function h(e, t) {
                for (var n in a(e && t && "object" == typeof e && "object" == typeof t, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."), t) t.hasOwnProperty(n) && (a(void 0 === e[n], "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", n), e[n] = t[n]);
                return e
            }

            function m(e, t) {
                return function() {
                    var n = e.apply(this, arguments),
                        r = t.apply(this, arguments);
                    if (null == n) return r;
                    if (null == r) return n;
                    var i = {};
                    return h(i, n), h(i, r), i
                }
            }

            function g(e, t) {
                return function() {
                    e.apply(this, arguments), t.apply(this, arguments)
                }
            }

            function f(e, t) {
                var n = t.bind(e);
                return n
            }
            var v = {
                    componentDidMount: function() {
                        this.__isMounted = !0
                    }
                },
                b = {
                    componentWillUnmount: function() {
                        this.__isMounted = !1
                    }
                },
                y = {
                    replaceState: function(e, t) {
                        this.updater.enqueueReplaceState(this, e, t)
                    },
                    isMounted: function() {
                        return !!this.__isMounted
                    }
                },
                S = function() {};
            return r(S.prototype, e.prototype, y),
                function(e) {
                    var t = function(e, r, o) {
                        this.__reactAutoBindPairs.length && function(e) {
                            for (var t = e.__reactAutoBindPairs, n = 0; n < t.length; n += 2) {
                                var r = t[n],
                                    i = t[n + 1];
                                e[r] = f(e, i)
                            }
                        }(this), this.props = e, this.context = r, this.refs = i, this.updater = o || n, this.state = null;
                        var s = this.getInitialState ? this.getInitialState() : null;
                        a("object" == typeof s && !Array.isArray(s), "%s.getInitialState(): must return an object or null", t.displayName || "ReactCompositeComponent"), this.state = s
                    };
                    for (var r in t.prototype = new S, t.prototype.constructor = t, t.prototype.__reactAutoBindPairs = [], s.forEach(p.bind(null, t)), p(t, v), p(t, e), p(t, b), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), a(t.prototype.render, "createClass(...): Class specification must implement a `render` method."), c) t.prototype[r] || (t.prototype[r] = null);
                    return t
                }
        }
    },
    x9n8: function(e, t, n) {
        "use strict";
        var r = n("RH2O"),
            i = n("2KeS"),
            a = n("V5M+"),
            o = n("Aj/L"),
            s = n("TToO"),
            c = n("HW6M"),
            l = n("GiK3"),
            u = n("6sO2"),
            d = n("J8WN"),
            p = n("+8VM"),
            h = n("7vx8"),
            m = n("puy8"),
            g = n("HZww"),
            f = n("Odds"),
            v = (n("weaG"), function(e) {
                var t = {
                    "default-avatar__selected": e.selected,
                    "default-avatar": !0
                };
                return l.createElement(f._8, {
                    padding: {
                        bottom: 1
                    }
                }, l.createElement("div", {
                    onClick: function() {
                        e.onSelect(e.index)
                    },
                    "aria-label": Object(u.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, l.createElement(f._35, {
                    fullHeight: !0,
                    fullWidth: !0,
                    position: f._15.Relative,
                    className: c(t)
                }, l.createElement("img", {
                    alt: Object(u.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            }),
            b = n("4Q9N"),
            y = n("Tt3k"),
            S = n("W6ca"),
            k = n("xgnX"),
            _ = n("CSlQ"),
            E = (n("AL3x"), n("nmDn")),
            C = ["image/*"],
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imagePreviewURL: "",
                        profileUpdated: !1,
                        currentImageHasTallAspectRatio: !1,
                        imageFormat: ""
                    }, t.currentImage = null, t.logger = u.j.withCategory("ProfileImagePicker"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            n = e[0];
                            var r = Object(y.a)(n),
                                i = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(i, 10) > 10 ? t.setState({
                                statusMessage: k.b.BadSizeError
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
                            statusMessage: k.b.ImageNotSelected
                        })
                    }, t.onUpdateButtonClick = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, i, a = this;
                            return s.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (e.preventDefault(), void 0 !== this.state.selectedImageIndex) return this.setDefaultAvatar(), [2];
                                        if (!this.currentImage) return this.setState({
                                            statusMessage: k.b.ImageNotSelected
                                        }), [2];
                                        this.setState({
                                            statusMessage: k.b.Uploading
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, Object(S.a)(this.props.userID, this.props.authToken, b.a.ProfileImage, this.state.imageFormat)];
                                    case 2:
                                        return t = o.sent(), n = t.upload_url, r = t.upload_id, [3, 4];
                                    case 3:
                                        return i = o.sent(), this.logger.error(i, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: k.b.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = u.k.subscribe({
                                            topic: Object(g.j)(this.props.userID),
                                            success: function() {
                                                try {
                                                    Object(S.c)(n, a.currentImage)
                                                } catch (e) {
                                                    a.logger.error(e, "Profile Image upload failed."), a.unsubscribe(), a.setState({
                                                        statusMessage: k.b.UnexpectedError,
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
                                                    statusMessage: k.b.UnexpectedError,
                                                    selectedImageIndex: void 0,
                                                    imagePreviewURL: "",
                                                    currentImageHasTallAspectRatio: !1
                                                })
                                            },
                                            onMessage: function(e) {
                                                if (e.upload_id === r) {
                                                    clearTimeout(a.timeoutHandle);
                                                    var t = null;
                                                    t = e.status === k.a.Success ? k.b.Success : e.status === k.a.BadSize ? k.b.BadSizeError : e.status === k.a.NonImage ? k.b.NonImageError : e.status === k.a.WrongFormat ? k.b.WrongFormatError : k.b.UnexpectedError, a.unsubscribe && a.unsubscribe(), a.setState({
                                                        statusMessage: t
                                                    }), a.state.statusMessage === k.b.Success ? a.setState({
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
                            imagePreviewURL: Object(m.a)(m.b[e], 300)
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: k.b.TimeoutError
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
                        t = m.b.map(function(t, n) {
                            return l.createElement(v, {
                                key: t.id,
                                imageSrc: Object(m.a)(t, 300),
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
                        n = l.createElement(f._8, {
                            className: c(r),
                            "data-test-selector": "preview-image",
                            position: f._15.Relative
                        }, l.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var i = null;
                    "" === this.state.imagePreviewURL && (i = l.createElement(f._8, {
                        className: "profile-edit__upload-info"
                    }, l.createElement(f._8, null, l.createElement(f._24, {
                        asset: f._25.Plus,
                        type: f._26.Alt2,
                        height: 20,
                        width: 20
                    })), l.createElement(f.Q, {
                        type: f._49.H3,
                        color: f.K.Alt2,
                        fontSize: f.V.Size4
                    }, Object(u.d)("Upload a Photo", "Profile Edit"))));
                    var a = null;
                    this.props.showCloser && (a = l.createElement(p.a, null));
                    var o = null;
                    if (null !== this.state.statusMessage) {
                        var s = Object(k.c)(this.state.statusMessage),
                            h = s.message,
                            g = s.type;
                        o = l.createElement(f._12, {
                            label: h,
                            type: g
                        })
                    }
                    var b = this.props.login;
                    return this.props.displayName && (b = this.props.displayName), l.createElement(f._8, {
                        className: "profile-edit",
                        position: f._15.Relative,
                        fullHeight: !0
                    }, l.createElement(f._35, {
                        className: "profile-edit__background-container",
                        background: f.n.Base,
                        fullWidth: !0
                    }, l.createElement(f._8, {
                        padding: 2,
                        display: f.R.InlineBlock,
                        position: f._15.Relative,
                        textAlign: f._45.Center,
                        fullWidth: !0
                    }, l.createElement(f._35, {
                        textAlign: f._45.Left,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(f.Q, {
                        type: f._49.H3,
                        color: f.K.Alt2,
                        fontSize: f.V.Size4
                    }, Object(u.d)("Edit Profile Picture for {userName}", {
                        userName: b
                    }, "Profile Edit"), " ")), l.createElement(f._8, {
                        className: "profile-edit__upload-container",
                        display: f.R.InlineBlock,
                        position: f._15.Relative,
                        textAlign: f._45.Center,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(f._8, {
                        className: "profile-edit__upload",
                        display: f.R.InlineBlock,
                        position: f._15.Relative,
                        textAlign: f._45.Center
                    }, l.createElement(d.a, {
                        allowedFileTypes: C,
                        onFilesSubmitted: this.onImageInputChange
                    }, i), n)), l.createElement(f._35, {
                        "data-test-selector": "status-message",
                        fontSize: f.V.Size4,
                        position: f._15.Relative,
                        textAlign: f._45.Center,
                        className: "profile-edit__status-message"
                    }, o), l.createElement(f._35, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(f._8, {
                        textAlign: f._45.Left,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(f.Q, {
                        type: f._49.H3,
                        color: f.K.Alt2,
                        fontSize: f.V.Size5
                    }, Object(u.d)("Or select one of these", "Profile Edit"))), l.createElement(f._55, {
                        childWidth: f._56.ExtraSmall,
                        gutterSize: f._57.ExtraSmall,
                        placeholderItems: 3
                    }, t)), l.createElement(f._8, {
                        display: f.R.Flex,
                        justifyContent: f._7.Center
                    }, l.createElement(f.v, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick,
                        size: f.z.Large
                    }, Object(u.d)("Update", "Profile Edit"))))), a)
                }, t.prototype.setDefaultAvatar = function() {
                    return s.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return s.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    this.setState({
                                        statusMessage: k.b.Uploading
                                    }), e = k.b.UnexpectedError, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, Object(S.b)(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                case 2:
                                    return 204 === (t = r.sent()).status || 200 === t.status ? e = k.b.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                case 3:
                                    return n = r.sent(), this.logger.error(n, "Default Avatar PUT failed."), [3, 4];
                                case 4:
                                    return this.setState({
                                        statusMessage: e,
                                        profileUpdated: e === k.b.Success
                                    }), [2]
                            }
                        })
                    })
                }, t = s.__decorate([Object(h.a)(E, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(l.Component),
            O = Object(_.d)("Profile Edit")(w);
        var x = Object(r.b)(function(e) {
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
            return x
        })
    },
    xKuy: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
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
            i = o(n("9c95")),
            a = o(n("J0u9"));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.refs = {}
            }
            return r(e, [{
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
                    return (0, i.default)(this.refs[this.active.collection], function(t) {
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
                    return (0, a.default)(this.refs[e], function(e) {
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
            return i
        }), t.c = function(e) {
            switch (e) {
                case i.Success:
                    return {
                        message: Object(a.d)("Success!", "Profile Edit"),
                        type: o._13.Success
                    };
                case i.UnexpectedError:
                    return {
                        message: Object(a.d)("Unexpected error, please try again.", "Profile Edit"),
                        type: o._13.Alert
                    };
                case i.BadSizeError:
                    return {
                        message: Object(a.d)("Image might exceed 10MB.", "Profile Edit"),
                        type: o._13.Alert
                    };
                case i.NonImageError:
                    return {
                        message: Object(a.d)("You must upload an image.", "Profile Edit"),
                        type: o._13.Alert
                    };
                case i.WrongFormatError:
                    return {
                        message: Object(a.d)("You must select a valid image type.", "Profile Edit"),
                        type: o._13.Alert
                    };
                case i.TimeoutError:
                    return {
                        message: Object(a.d)("Upload timed-out. Please try again.", "Profile Edit"),
                        type: o._13.Alert
                    };
                case i.Uploading:
                    return {
                        message: Object(a.d)("Uploading....", "Profile Edit"),
                        type: o._13.Brand
                    };
                case i.ImageNotSelected:
                    return {
                        message: Object(a.d)("Select a image first.", "Profile Edit"),
                        type: o._13.Alert
                    };
                default:
                    return {
                        message: Object(a.d)("Please try again.", "Profile Edit"),
                        type: o._13.Alert
                    }
            }
        };
        var r, i, a = n("6sO2"),
            o = n("Odds");
        ! function(e) {
            e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
        }(r || (r = {})),
        function(e) {
            e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
        }(i || (i = {}))
    },
    xkKI: function(e, t, n) {
        "use strict";
        var r = n("+bIS"),
            i = n("eXGG"),
            a = n("0pjK");
        e.exports = function() {
            function e(e, t, n, r, o, s) {
                s !== a && i(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
            }

            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t
            };
            return n.checkPropTypes = r, n.PropTypes = n, n
        }
    },
    y5ks: function(e, t, n) {
        var r = n("43dD"),
            i = n("2iRz"),
            a = n("VGcK"),
            o = {};
        o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1, e.exports = function(e) {
            return a(e) && i(e.length) && !!o[r(e)]
        }
    },
    yHYq: function(e, t) {},
    yMkz: function(e, t, n) {
        var r = n("MygC").Uint8Array;
        e.exports = r
    },
    yU6t: function(e, t) {},
    yauq: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = function() {
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
            var t, n, d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
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
                }(n, t), i(n, [{
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
                            t = e.collection,
                            n = e.disabled;
                        n || this.removeDraggable(t)
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
                        return (0, l.default)(d.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"), this.refs.wrappedInstance
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = d.withRef ? "wrappedInstance" : null;
                        return o.default.createElement(e, r({
                            ref: t
                        }, (0, u.omit)(this.props, "collection", "disabled", "index")))
                    }
                }]), n
            }(a.Component), t.displayName = (0, u.provideDisplayName)("sortableElement", e), t.contextTypes = {
                manager: s.default.object.isRequired
            }, t.propTypes = {
                index: s.default.number.isRequired,
                collection: s.default.oneOfType([s.default.number, s.default.string]),
                disabled: s.default.bool
            }, t.defaultProps = {
                collection: 0
            }, n
        };
        var a = n("GiK3"),
            o = d(a),
            s = d(n("qUKr")),
            c = n("O27J"),
            l = d(n("crWv")),
            u = n("Vgej");

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    ymQA: function(e, t, n) {
        var r = n("Zfct"),
            i = n("vwDu"),
            a = n("Bxt2"),
            o = n("a/6q"),
            s = n("wVoL");

        function c(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = o, c.prototype.set = s, e.exports = c
    },
    z15t: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = l(n("GiK3")),
            i = l(n("DT0+")),
            a = l(n("KSGD")),
            o = l(n("tZ8z")),
            s = l(n("HW6M")),
            c = l(n("V/Pj"));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = (0, i.default)({
            mixins: [c.default, o.default],
            propTypes: {
                x: a.default.number.isRequired,
                y: a.default.number.isRequired,
                backgroundColor: a.default.string,
                className: a.default.string
            },
            getDefaultProps: function() {
                return {
                    x: 0,
                    y: 0,
                    backgroundColor: "transparent",
                    className: ""
                }
            },
            updatePosition: function(e, t, n) {
                var r = (t - e.left) / e.width,
                    i = (e.bottom - n) / e.height;
                this.props.onChange(this.getScaledValue(r), this.getScaledValue(i))
            },
            render: function() {
                var e = (0, s.default)("map", this.props.className, {
                        active: this.state.active
                    }),
                    t = this.props.backgroundColor;
                return r.default.createElement("div", {
                    className: e,
                    onMouseDown: this.startUpdates,
                    onTouchStart: this.startUpdates
                }, r.default.createElement("div", {
                    className: "background",
                    style: {
                        backgroundColor: t
                    }
                }), r.default.createElement("div", {
                    className: "pointer",
                    style: {
                        left: this.getPercentageValue(this.props.x),
                        bottom: this.getPercentageValue(this.props.y)
                    }
                }))
            }
        });
        t.default = u
    },
    zN4B: function(e, t) {
        e.exports = function(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(e, r) {
                n[++t] = [r, e]
            }), n
        }
    },
    zpQV: function(e, t) {},
    zwRn: function(e, t) {
        e.exports = function(e) {
            var t, n, r = e[0],
                i = e[1],
                a = e[2],
                o = Math.min(r, i, a),
                s = Math.max(r, i, a),
                c = s - o;
            return n = 0 == s ? 0 : c / s * 1e3 / 10, s == o ? t = 0 : r == s ? t = (i - a) / c : i == s ? t = 2 + (a - r) / c : a == s && (t = 4 + (r - i) / c), (t = Math.min(60 * t, 360)) < 0 && (t += 360), [t, n, s / 255 * 1e3 / 10]
        }
    }
});
//# sourceMappingURL=pages.settings-d024d383dc2b1c7a6653ce664144c2d1.js.map