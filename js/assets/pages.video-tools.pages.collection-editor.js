webpackJsonp([96], {
    "+bIS": function(e, t, n) {
        "use strict";

        function i(e) {
            return function() {
                return e
            }
        }
        var o = function() {};
        o.thatReturns = i, o.thatReturnsFalse = i(!1), o.thatReturnsTrue = i(!0), o.thatReturnsNull = i(null), o.thatReturnsThis = function() {
            return this
        }, o.thatReturnsArgument = function(e) {
            return e
        }, e.exports = o
    },
    "+cPc": function(e, t, n) {
        var i = n("CUG3"),
            o = n("n8KP"),
            r = n("/UYc");
        e.exports = function(e) {
            var t = o(e);
            return 1 == t.length && t[0][2] ? r(t[0][0], t[0][1]) : function(n) {
                return n === e || i(n, e, t)
            }
        }
    },
    "//bJ": function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, i = null == e ? 0 : e.length, o = 0, r = []; ++n < i;) {
                var a = e[n];
                t(a, n, e) && (r[o++] = a)
            }
            return r
        }
    },
    "/Cz7": function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            var n = new URL("https://www.twitch.tv/collections/" + e);
            t && (n.search = o.stringify(t));
            return n.toString()
        }, t.b = function(e, t) {
            var n = new URL("https://www.twitch.tv/videos/" + e);
            t && (n.search = o.stringify(i.__assign({}, t, {
                t: "number" == typeof t.t ? Object(r.a)(t.t) : void 0
            })));
            return n.toString()
        };
        var i = n("TToO"),
            o = n("OAwv"),
            r = (n.n(o), n("Ryxq"))
    },
    "/MI9": function(e, t, n) {
        var i = n("fXkM"),
            o = n("11iS");
        e.exports = function(e, t) {
            return null != e && o(e, t, i)
        }
    },
    "/UYc": function(e, t) {
        e.exports = function(e, t) {
            return function(n) {
                return null != n && n[e] === t && (void 0 !== t || e in Object(n))
            }
        }
    },
    "/brc": function(e, t) {},
    "/ewM": function(e, t, n) {
        var i = n("WFpE");
        e.exports = function(e, t, n) {
            for (var o = -1, r = e.criteria, a = t.criteria, l = r.length, c = n.length; ++o < l;) {
                var s = i(r[o], a[o]);
                if (s) return o >= c ? s : s * ("desc" == n[o] ? -1 : 1)
            }
            return e.index - t.index
        }
    },
    "0e1M": function(e, t, n) {
        var i = n("eWqu"),
            o = n("wSgH")(i);
        e.exports = o
    },
    "0pjK": function(e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    "0zkw": function(e, t) {
        var n = 800,
            i = 16,
            o = Date.now;
        e.exports = function(e) {
            var t = 0,
                r = 0;
            return function() {
                var a = o(),
                    l = i - (a - r);
                if (r = a, l > 0) {
                    if (++t >= n) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
    },
    "11iS": function(e, t, n) {
        var i = n("aIUG"),
            o = n("H3TN"),
            r = n("mG6l"),
            a = n("cjOD"),
            l = n("2iRz"),
            c = n("F6hB");
        e.exports = function(e, t, n) {
            for (var s = -1, d = (t = i(t, e)).length, u = !1; ++s < d;) {
                var p = c(t[s]);
                if (!(u = null != e && n(e, p))) break;
                e = e[p]
            }
            return u || ++s != d ? u : !!(d = null == e ? 0 : e.length) && l(d) && a(p, d) && (r(e) || o(e))
        }
    },
    "164Z": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoShareBox_TrackingVideoContext"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoID"
                        }
                    },
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
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "video"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "videoID"
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
                                    value: "broadcastType"
                                },
                                arguments: [],
                                directives: []
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
                                                    value: "isPartner"
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
                                    value: "game"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 156
            }
        };
        n.loc.source = {
            body: "query VideoShareBox_TrackingVideoContext($videoID: ID!) {\nvideo(id: $videoID) {\nid\nbroadcastType\nowner {\nid\nlogin\nroles {\nisPartner\n}\n}\ngame {\nid\nname\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "1nXM": function(e, t, n) {
        var i = n("g/lL"),
            o = n("pLne"),
            r = n("HMFB");
        e.exports = function(e) {
            return i(e, r, o)
        }
    },
    "1tEs": function(e, t, n) {
        (function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n
        }).call(t, n("DuR2"))
    },
    "2EIm": function(e, t, n) {
        var i = n("Bh6c");
        e.exports = function() {
            this.__data__ = new i, this.size = 0
        }
    },
    "2hJ3": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = document.createElement("textarea");
            t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.fontSize = "12pt", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
            var n = !0;
            try {
                n = document.execCommand("copy")
            } catch (e) {
                n = !1
            }
            return document.body.removeChild(t), n
        }
    },
    "2iRz": function(e, t) {
        var n = 9007199254740991;
        e.exports = function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
        }
    },
    "2oz3": function(e, t, n) {
        var i = n("INOA"),
            o = n("mAEY");
        e.exports = function e(t, n, r, a, l) {
            var c = -1,
                s = t.length;
            for (r || (r = o), l || (l = []); ++c < s;) {
                var d = t[c];
                n > 0 && r(d) ? n > 1 ? e(d, n - 1, r, a, l) : i(l, d) : a || (l[l.length] = d)
            }
            return l
        }
    },
    "2urJ": function(e, t) {
        e.exports = function(e) {
            return this.__data__.has(e)
        }
    },
    "43dD": function(e, t, n) {
        var i = n("JGv7"),
            o = n("H1YI"),
            r = n("OZxy"),
            a = "[object Null]",
            l = "[object Undefined]",
            c = i ? i.toStringTag : void 0;
        e.exports = function(e) {
            return null == e ? void 0 === e ? l : a : c && c in Object(e) ? o(e) : r(e)
        }
    },
    "4UmU": function(e, t, n) {
        var i = n("EpL8"),
            o = n("Czj7"),
            r = n("cjOD"),
            a = n("kl/u");
        e.exports = function(e, t, n) {
            if (!a(n)) return !1;
            var l = typeof t;
            return !!("number" == l ? o(n) && r(t, n.length) : "string" == l && t in n) && i(n[t], e)
        }
    },
    "4hEs": function(e, t, n) {
        var i = n("uIws");
        e.exports = function(e) {
            var t = this.__data__,
                n = i(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
    },
    "4o7v": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        });
        var i = n("TToO"),
            o = n("GiK3"),
            r = (n.n(o), n("5kgt")),
            a = n("Odds"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = o.createElement(a._8, {
                            alignItems: a.c.Center,
                            display: a.R.Flex,
                            fullHeight: !0,
                            justifyContent: a._7.Center,
                            padding: 2
                        }, o.createElement(a._34, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        t = this.props.linkTo ? o.createElement(a._6, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return o.createElement(a._8, i.__assign({
                        display: a.R.InlineFlex,
                        fullHeight: !0
                    }, Object(r.a)(this.props)), t)
                }, t
            }(o.Component)
    },
    "50Oj": function(e, t, n) {
        var i = n("HMFi"),
            o = n("SjFU"),
            r = n("Ro3v"),
            a = n("BhXZ"),
            l = n("usEs"),
            c = n("/ewM"),
            s = n("F3kA");
        e.exports = function(e, t, n) {
            var d = -1;
            t = i(t.length ? t : [s], l(o));
            var u = r(e, function(e, n, o) {
                return {
                    criteria: i(t, function(t) {
                        return t(e)
                    }),
                    index: ++d,
                    value: e
                }
            });
            return a(u, function(e, t) {
                return c(e, t, n)
            })
        }
    },
    "57tO": function(e, t, n) {
        var i = n("NDrF")(n("MygC"), "Set");
        e.exports = i
    },
    "5RjZ": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t;
            switch (e.toUpperCase()) {
                case o.a.Upload:
                    t = Object(i.d)("Upload", "VideoManagerVideoCard");
                    break;
                case o.a.Archive:
                    t = Object(i.d)("Past Broadcast", "VideoManagerVideoCard");
                    break;
                case o.a.Highlight:
                    t = Object(i.d)("Highlight", "VideoManagerVideoCard");
                    break;
                case o.a.PastPremiere:
                    t = Object(i.d)("Past Premiere", "VideoManagerVideoCard");
                    break;
                case o.a.PremiereUpload:
                    t = Object(i.d)("Premiere Upload", "VideoManagerVideoCard");
                    break;
                default:
                    t = ""
            }
            return t
        }, t.b = function(e) {
            if (!e) return e;
            var t = e;
            switch (e.toUpperCase()) {
                case o.a.Upload:
                    t = [o.a.Upload, o.a.PremiereUpload].join(",")
            }
            return t.toLowerCase()
        };
        var i = n("6sO2"),
            o = n("6WAQ")
    },
    "5hfY": function(e, t, n) {
        var i = n("L3k4");
        e.exports = function(e) {
            return function(t) {
                return i(t, e)
            }
        }
    },
    "6Exb": function(e, t) {
        e.exports = function(e, t) {
            return null == e ? void 0 : e[t]
        }
    },
    "6TIu": function(e, t, n) {
        var i = n("uIws");
        e.exports = function(e) {
            return i(this.__data__, e) > -1
        }
    },
    "8/8b": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("GiK3"),
            r = n("Odds"),
            a = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(r._35, {
                        margin: {
                            bottom: 1
                        },
                        elevation: 1,
                        display: r.R.Flex,
                        flexWrap: r.U.NoWrap,
                        flexDirection: r.T.Row,
                        alignItems: r.c.Stretch
                    }, o.createElement(r._8, {
                        flexGrow: 1,
                        flexShrink: 1,
                        display: r.R.Flex,
                        flexWrap: r.U.NoWrap,
                        flexDirection: r.T.Column,
                        breakpointSmall: {
                            flexDirection: r.T.Row
                        }
                    }, o.createElement(r._8, {
                        fullWidth: !0
                    }, o.createElement(r.C, {
                        row: !0
                    }, o.createElement(r._8, null, o.createElement(r._14, {
                        height: 75,
                        width: 133
                    })), o.createElement(r.D, null, o.createElement(r._8, {
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, o.createElement(r.Q, null, o.createElement(r._14, {
                        width: 600,
                        lineCount: 1
                    }), o.createElement(r._14, {
                        width: 200,
                        lineCount: 1
                    })))))), o.createElement(r._8, {
                        display: r.R.Flex,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexWrap: r.U.NoWrap,
                        flexDirection: r.T.Row,
                        alignItems: r.c.Center
                    }, o.createElement(r._35, {
                        fullHeight: !0,
                        fullWidth: !0
                    }, o.createElement(r._8, {
                        display: r.R.InlineFlex,
                        fullHeight: !0
                    }, o.createElement(r._8, {
                        fullHeight: !0,
                        display: r.R.Flex,
                        alignItems: r.c.Center,
                        justifyContent: r._7.Center,
                        padding: 2
                    }, o.createElement(r.Q, null, o.createElement(r._14, {
                        width: 40,
                        lineCount: 1
                    })))))), o.createElement(r._8, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, o.createElement(r._8, {
                        fullHeight: !0,
                        display: r.R.Flex,
                        alignItems: r.c.Center,
                        justifyContent: r._7.Center,
                        padding: 1
                    }, o.createElement(r.Q, null, o.createElement(r._14, {
                        width: 20,
                        lineCount: 1
                    }))))))
                }, t
            }(o.PureComponent);
        n.d(t, "a", function() {
            return a
        })
    },
    "81TE": function(e, t) {
        e.exports = function(e, t) {
            return function(n) {
                return e(t(n))
            }
        }
    },
    "8Wuk": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return u
        });
        var i, o = n("TToO"),
            r = n("GiK3"),
            a = (n.n(r), n("6sO2")),
            l = n("2hJ3"),
            c = n("f6Cj"),
            s = n("Odds"),
            d = n("bdk8");
        n.n(d);
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput", e[e.Download = 6] = "Download"
        }(i || (i = {}));
        var u = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.props.type === i.Download ? r.createElement("a", o.__assign({
                        href: n.props.url,
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(s._63)(n.props), {
                        download: n.props.text
                    }), n.renderIcon()) : n.isLink() ? r.createElement("a", o.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(s._63)(n.props)), n.renderIcon()) : r.createElement("button", o.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(s._63)(n.props)), n.renderIcon())
                }, n.onShareClickHandler = function() {
                    n.props.onShareClick && n.props.onShareClick(n.props.type)
                }, n.clearIsCopiedStatus = function() {
                    n.setState({
                        isCopied: !1
                    })
                }, n.getUrl = function() {
                    return n.props.url || window.location.href
                }, n.copyPageUrl = function(e) {
                    e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(l.a)(n.getUrl()), n.setState({
                        isCopied: !0
                    })
                }, n.renderIcon = function() {
                    var e = n.getAssetFromType(),
                        t = n.getAssetSizeFromType();
                    return r.createElement(s._8, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon"),
                        display: s.R.Flex,
                        justifyContent: s._7.Center,
                        alignItems: s.c.Center
                    }, r.createElement(s._24, {
                        asset: e,
                        width: t,
                        height: t
                    }))
                }, n.isLink = function() {
                    return n.props.type !== i.Copy
                }, n.getAssetSizeFromType = function() {
                    switch (n.props.type) {
                        case i.Download:
                            return 20;
                        default:
                            return 30
                    }
                }, n.getTooltipFromType = function() {
                    switch (n.props.type) {
                        case i.Twitter:
                            return "Twitter";
                        case i.Reddit:
                            return "Reddit";
                        case i.Facebook:
                            return "Facebook";
                        case i.VKontakte:
                            return "VKontakte";
                        case i.Download:
                            return Object(a.d)("Download", "SocialButton");
                        case i.Copy:
                            return n.state.isCopied ? Object(a.d)("Copied", "SocialButton") : Object(a.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case i.Twitter:
                            return s._25.Twitter;
                        case i.Facebook:
                            return s._25.Facebook;
                        case i.VKontakte:
                            return s._25.VKontakte;
                        case i.Reddit:
                            return s._25.Reddit;
                        case i.Download:
                            return s._25.Download;
                        case i.Copy:
                        default:
                            return s._25.Copy
                    }
                }, n.addSocialClassModifier = function(e) {
                    switch (n.props.type) {
                        case i.Twitter:
                            return e + "--twitter";
                        case i.Reddit:
                            return e + "--reddit";
                        case i.Facebook:
                            return e + "--facebook";
                        case i.VKontakte:
                            return e + "--vkontakte";
                        case i.Download:
                            return e + "--download";
                        case i.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, n.getLinkTarget = function() {
                    var e = n.props,
                        t = e.text,
                        o = e.type,
                        r = n.getUrl(),
                        a = t || "";
                    switch (o) {
                        case i.Reddit:
                            return Object(c.b)(r, a);
                        case i.VKontakte:
                            return Object(c.d)(r);
                        case i.Facebook:
                            return Object(c.a)(r);
                        case i.Twitter:
                            return Object(c.c)(r, a);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return o.__extends(t, e), t.prototype.render = function() {
                return r.createElement(s._8, {
                    className: "social-button"
                }, r.createElement(s._52, {
                    label: this.getTooltipFromType(),
                    direction: s._54.Bottom
                }, this.renderLink()))
            }, t
        }(r.Component)
    },
    "8Wze": function(e, t, n) {
        var i, o = n("MA13"),
            r = (i = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "";
        e.exports = function(e) {
            return !!r && r in e
        }
    },
    "8sB4": function(e, t, n) {
        var i = n("SjFU"),
            o = n("Czj7"),
            r = n("HMFB");
        e.exports = function(e) {
            return function(t, n, a) {
                var l = Object(t);
                if (!o(t)) {
                    var c = i(n, 3);
                    t = r(t), n = function(e) {
                        return c(l[e], e, l)
                    }
                }
                var s = e(t, n, a);
                return s > -1 ? l[c ? t[s] : s] : void 0
            }
        }
    },
    "8wGL": function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CollectionEditor_AddCollectionItem"
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
                                value: "AddCollectionItemInput"
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
                            value: "addCollectionItem"
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
                                    value: "collection"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "collectionFields"
                                        },
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "itemConnection"
                                        },
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
                end: 413
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/collection-fragment.gql"\n#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/item-connection-fragment.gql"\nmutation CollectionEditor_AddCollectionItem($input: AddCollectionItemInput!) {\naddCollectionItem(input: $input) {\ncollection {\n...collectionFields\n...itemConnection\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var o = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !o[t] && (o[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("OEl7").definitions)), i.definitions = i.definitions.concat(r(n("9Gwb").definitions)), e.exports = i
    },
    "8xms": function(e, t, n) {
        var i = n("w1Jz"),
            o = "__lodash_hash_undefined__",
            r = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            var t = this.__data__;
            if (i) {
                var n = t[e];
                return n === o ? void 0 : n
            }
            return r.call(t, e) ? t[e] : void 0
        }
    },
    "9GW9": function(e, t) {
        e.exports = function(e) {
            return this.__data__.get(e)
        }
    },
    "9Gwb": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "itemConnection"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Collection"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "items"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "100"
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
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "Video"
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
                                                            value: "broadcastType"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isDeleted"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "lengthSeconds"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "previewThumbnailURL"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "240"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "135"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "publishedAt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "scope"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "viewCount"
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
                end: 395
            }
        };
        n.loc.source = {
            body: "fragment itemConnection on Collection {\n# Request the max (50 atm) because we support drag and drop\n# reordering which makes little sense at the moment without all the items\nitems(first: 100) {\ntotalCount\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\n... on Video {\nid\nbroadcastType\nisDeleted\nlengthSeconds\npreviewThumbnailURL(width: 240 height: 135)\npublishedAt\nscope\ntitle\nviewCount\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "9c95": function(e, t, n) {
        var i = n("8sB4")(n("i4TT"));
        e.exports = i
    },
    "9nrn": function(e, t, n) {
        var i = n("NDrF")(n("MygC"), "Map");
        e.exports = i
    },
    A2t5: function(e, t, n) {
        var i = n("L3k4");
        e.exports = function(e, t, n) {
            var o = null == e ? void 0 : i(e, t);
            return void 0 === o ? n : o
        }
    },
    AJkw: function(e, t) {
        e.exports = function(e) {
            return function(t, n, i) {
                for (var o = -1, r = Object(t), a = i(t), l = a.length; l--;) {
                    var c = a[e ? l : ++o];
                    if (!1 === n(r[c], c, r)) break
                }
                return t
            }
        }
    },
    Ao0V: function(e, t, n) {
        var i = n("JGv7"),
            o = n("yMkz"),
            r = n("EpL8"),
            a = n("qu3O"),
            l = n("zN4B"),
            c = n("pUak"),
            s = 1,
            d = 2,
            u = "[object Boolean]",
            p = "[object Date]",
            m = "[object Error]",
            f = "[object Map]",
            h = "[object Number]",
            v = "[object RegExp]",
            g = "[object Set]",
            y = "[object String]",
            k = "[object Symbol]",
            b = "[object ArrayBuffer]",
            C = "[object DataView]",
            _ = i ? i.prototype : void 0,
            x = _ ? _.valueOf : void 0;
        e.exports = function(e, t, n, i, _, S, w) {
            switch (n) {
                case C:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case b:
                    return !(e.byteLength != t.byteLength || !S(new o(e), new o(t)));
                case u:
                case p:
                case h:
                    return r(+e, +t);
                case m:
                    return e.name == t.name && e.message == t.message;
                case v:
                case y:
                    return e == t + "";
                case f:
                    var O = l;
                case g:
                    var E = i & s;
                    if (O || (O = c), e.size != t.size && !E) return !1;
                    var I = w.get(e);
                    if (I) return I == t;
                    i |= d, w.set(e, t);
                    var T = a(O(e), O(t), i, _, S, w);
                    return w.delete(e), T;
                case k:
                    if (x) return x.call(e) == x.call(t)
            }
            return !1
        }
    },
    AoO8: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            return c(function(e) {
                e.video && (e.video = Object(a.b)(e.video));
                var t = o.stringify(e);
                return r.o.config.playerBaseURL + "/?" + t
            }(e), t)
        }, t.a = c;
        var i = n("TToO"),
            o = n("OAwv"),
            r = (n.n(o), n("6sO2")),
            a = n("JpYe"),
            l = {
                height: 378,
                width: 620,
                allowScrolling: !0,
                allowFullscreen: !0
            };

        function c(e, t) {
            void 0 === t && (t = l);
            var n, o, r = i.__assign({}, l, t),
                a = '<iframe src="' + e + '" frameborder="0" ' + (r.allowFullscreen ? 'allowfullscreen="true" ' : "") + (r.allowScrolling ? "" : 'scrolling="no" ') + 'height="' + r.height + '" width="' + r.width + '"></iframe>';
            return r.textLink && (a += (n = r.textLink.url, o = r.textLink.text, '<a href="' + n + '" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">' + o + "</a>")), a
        }
    },
    B9Px: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("6sO2"),
            r = n("jXn2"),
            a = n("9u8h"),
            l = n("Aj/L"),
            c = n("O8Ns"),
            s = n("dL0Y");

        function d(e) {
            return function(t, n) {
                return e({
                    store: {
                        dispatch: t,
                        getState: n
                    }
                })
            }
        }
        n.d(t, "a", function() {
            return u
        }), n.d(t, "b", function() {
            return p
        }), n.d(t, "c", function() {
            return m
        }), t.e = function(e, t) {
            var n = this;
            return d(function(r) {
                return i.__awaiter(n, void 0, void 0, function() {
                    var n, l, s;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 3, , 4]), [4, a.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100")];
                            case 1:
                                return n = i.sent(), r.store.dispatch({
                                    type: u,
                                    collections: Object(c.c)(n.body)
                                }), [4, a.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100&containing_item=" + c.a.Video + ":" + t)];
                            case 2:
                                return l = i.sent(), r.store.dispatch({
                                    type: p,
                                    containingCollections: Object(c.c)(l.body),
                                    videoID: t
                                }), [3, 4];
                            case 3:
                                return s = i.sent(), o.j.error(s, "Failed to fetch collections"), r.store.dispatch({
                                    type: m,
                                    errorType: "Fetch Failed",
                                    errorMessage: "Fetching collections for channel " + e + " and video " + t + " failed."
                                }), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            })
        }, t.d = function(e, t, n) {
            var a = this;
            return d(function(s) {
                return i.__awaiter(a, void 0, void 0, function() {
                    var a, d, m, h, g, y, k, b;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                a = s.store.getState(), d = a.collections, m = Object(l.c)(a), h = m ? m.id : "", i.label = 1;
                            case 1:
                                return i.trys.push([1, 4, , 5]), [4, v("/v5/channels/" + e + "/collections/", {
                                    title: t
                                })];
                            case 2:
                                return g = i.sent(), y = Object(c.b)(g.body), d.collections = [y].concat(d.collections), s.store.dispatch({
                                    type: u,
                                    collections: d.collections
                                }), Object(r.b)({
                                    channelID: e,
                                    playlistID: y.id,
                                    userID: h,
                                    title: y.title
                                }), k = {
                                    type: c.a.Video,
                                    id: n
                                }, [4, v("/v5/collections/" + y.id + "/items", k)];
                            case 3:
                                return i.sent(), d.containingCollections = [y].concat(d.containingCollections), s.store.dispatch({
                                    type: p,
                                    containingCollections: d.containingCollections,
                                    videoID: n
                                }), Object(r.a)({
                                    channelID: e,
                                    itemID: n,
                                    itemPosition: -1,
                                    itemType: c.a.Video,
                                    playlistID: y.id,
                                    userID: h
                                }), [3, 5];
                            case 4:
                                return b = i.sent(), o.j.error(b, "Failed to add new collection with video"), s.store.dispatch({
                                    type: f,
                                    errorType: "Create Failed",
                                    errorMessage: "Creating collections for channel " + e + " and video " + n + " with title " + t + "."
                                }), [3, 5];
                            case 5:
                                return [2]
                        }
                    })
                })
            })
        }, t.f = function(e, t, n) {
            var u = this;
            return d(function(d) {
                return i.__awaiter(u, void 0, void 0, function() {
                    var u, m, f, g, y, k, b, C, _;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                u = d.store.getState(), m = Object(s.a)(u), f = Object(l.c)(u), g = f ? f.id : "", i.label = 1;
                            case 1:
                                return i.trys.push([1, 6, , 7]), m.map(function(e) {
                                    return e.id
                                }).includes(e.id) ? (y = JSON.stringify({
                                    type: c.a.Video,
                                    id: t
                                }), k = btoa(y), [4, a.a.deleteOrThrow("/v5/collections/" + e.id + "/items/" + k)]) : [3, 3];
                            case 2:
                                return i.sent(), C = m.filter(function(t) {
                                    return t.id !== e.id
                                }), d.store.dispatch({
                                    type: p,
                                    containingCollections: C,
                                    videoID: t
                                }), Object(r.c)({
                                    channelID: n,
                                    itemID: t,
                                    itemPosition: -1,
                                    itemType: c.a.Video,
                                    playlistID: e.id,
                                    userID: g
                                }), [3, 5];
                            case 3:
                                return b = {
                                    type: c.a.Video,
                                    id: t
                                }, [4, v("/v5/collections/" + e.id + "/items", b)];
                            case 4:
                                i.sent(), C = m.concat([e]), d.store.dispatch({
                                    type: p,
                                    containingCollections: C,
                                    videoID: t
                                }), Object(r.a)({
                                    channelID: n,
                                    itemID: t,
                                    itemPosition: -1,
                                    itemType: c.a.Video,
                                    playlistID: e.id,
                                    userID: g
                                }), i.label = 5;
                            case 5:
                                return [3, 7];
                            case 6:
                                return _ = i.sent(), o.j.error(_, "Failed to fetch collections"), d.store.dispatch({
                                    type: h,
                                    errorType: "Update Failed",
                                    errorMessage: "Updating collection " + e.id + " for channel " + n + " and video " + t + " failed."
                                }), [3, 7];
                            case 7:
                                return [2]
                        }
                    })
                })
            })
        };
        var u = "collections.COLLECTIONS_FETCHED",
            p = "collections.COLLECTIONS_FETCHED_FOR_VIDEO_ID",
            m = "collections.COLLECTIONS_FETCH_FAILED",
            f = "collections.COLLECTIONS_CREATE_FAILED",
            h = "collections.COLLECTIONS_UPDATE_FAILED";
        var v = function(e, t) {
            return a.a.postOrThrow(e, {
                body: t
            })
        }
    },
    BALR: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, i = null == e ? 0 : e.length; ++n < i;)
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
        var i = n("sBY2"),
            o = n("iLYB"),
            r = n("4hEs"),
            a = n("6TIu"),
            l = n("eGfi");

        function c(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var i = e[t];
                this.set(i[0], i[1])
            }
        }
        c.prototype.clear = i, c.prototype.delete = o, c.prototype.get = r, c.prototype.has = a, c.prototype.set = l, e.exports = c
    },
    BhXZ: function(e, t) {
        e.exports = function(e, t) {
            var n = e.length;
            for (e.sort(t); n--;) e[n] = e[n].value;
            return e
        }
    },
    Bxt2: function(e, t, n) {
        var i = n("DRNv");
        e.exports = function(e) {
            return i(this, e).get(e)
        }
    },
    CTFd: function(e, t, n) {
        var i = n("AJkw")();
        e.exports = i
    },
    CUG3: function(e, t, n) {
        var i = n("gKqb"),
            o = n("GVhz"),
            r = 1,
            a = 2;
        e.exports = function(e, t, n, l) {
            var c = n.length,
                s = c,
                d = !l;
            if (null == e) return !s;
            for (e = Object(e); c--;) {
                var u = n[c];
                if (d && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
            }
            for (; ++c < s;) {
                var p = (u = n[c])[0],
                    m = e[p],
                    f = u[1];
                if (d && u[2]) {
                    if (void 0 === m && !(p in e)) return !1
                } else {
                    var h = new i;
                    if (l) var v = l(m, f, p, e, t, h);
                    if (!(void 0 === v ? o(f, m, r | a, l, h) : v)) return !1
                }
            }
            return !0
        }
    },
    CZUI: function(e, t, n) {
        var i = n("U2kw"),
            o = n("8Wze"),
            r = n("kl/u"),
            a = n("NuOc"),
            l = /^\[object .+?Constructor\]$/,
            c = Function.prototype,
            s = Object.prototype,
            d = c.toString,
            u = s.hasOwnProperty,
            p = RegExp("^" + d.call(u).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e.exports = function(e) {
            return !(!r(e) || o(e)) && (i(e) ? p : l).test(a(e))
        }
    },
    Czj7: function(e, t, n) {
        var i = n("U2kw"),
            o = n("2iRz");
        e.exports = function(e) {
            return null != e && o(e.length) && !i(e)
        }
    },
    D4QM: function(e, t, n) {
        var i = /^\./,
            o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            r = /\\(\\)?/g,
            a = n("ROCN")(function(e) {
                var t = [];
                return i.test(e) && t.push(""), e.replace(o, function(e, n, i, o) {
                    t.push(i ? o.replace(r, "$1") : n || e)
                }), t
            });
        e.exports = a
    },
    DRNv: function(e, t, n) {
        var i = n("enQx");
        e.exports = function(e, t) {
            var n = e.__data__;
            return i(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }
    },
    Dz2i: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CollectionManager_EditCollection"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "collectionID"
                        }
                    },
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
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "collection"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "collectionID"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "options"
                            },
                            value: {
                                kind: "ObjectValue",
                                fields: [{
                                    kind: "ObjectField",
                                    name: {
                                        kind: "Name",
                                        value: "includeAllItems"
                                    },
                                    value: {
                                        kind: "BooleanValue",
                                        value: !0
                                    }
                                }]
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "collectionFields"
                                },
                                directives: []
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "itemConnection"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 411
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/collection-fragment.gql"\n#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/item-connection-fragment.gql"\nquery CollectionManager_EditCollection($collectionID: ID!) {\ncollection(id: $collectionID options: { includeAllItems: true}) {\n...collectionFields\n...itemConnection\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var o = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !o[t] && (o[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("OEl7").definitions)), i.definitions = i.definitions.concat(r(n("9Gwb").definitions)), e.exports = i
    },
    EpL8: function(e, t) {
        e.exports = function(e, t) {
            return e === t || e != e && t != t
        }
    },
    F0UT: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d
        });
        var i, o = n("TToO"),
            r = n("GiK3"),
            a = (n.n(r), n("6sO2")),
            l = n("6BvN"),
            c = n("Odds"),
            s = String.fromCharCode(160);
        ! function(e) {
            e.SubmitButton = "SubmitButton", e.TitleInput = "TitleInput"
        }(i || (i = {}));
        var d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    collectionTitle: "",
                    localTitleChanges: !1
                }, t.onNameInputChange = function(e) {
                    t.setState({
                        collectionTitle: e.currentTarget.value,
                        localTitleChanges: !0
                    })
                }, t.onSubmit = function() {
                    t.setState({
                        localTitleChanges: !1
                    }, function() {
                        return t.props.onSubmit(t.state.collectionTitle)
                    })
                }, t.onKeyDown = function(e) {
                    e.keyCode === l.a.Enter && t.canSaveTitle() && t.onSubmit()
                }, t
            }
            return o.__extends(t, e), t.prototype.render = function() {
                var e = Object(a.d)("{currentLength} of {maxLength} characters.", {
                        currentLength: this.state.collectionTitle.length.toString(),
                        maxLength: 100..toString()
                    }, "CollectionCreator"),
                    t = "";
                return !this.state.localTitleChanges && this.props.errorMessage.length > 0 && (t = this.props.errorMessage), r.createElement(c.W, {
                    hint: this.state.collectionTitle.length > 0 ? e : s,
                    error: t.length > 0,
                    errorMessage: t,
                    label: ""
                }, r.createElement(c.Y, null, r.createElement(c.L, {
                    cols: {
                        default: 6,
                        xl: 4
                    }
                }, r.createElement(c._4, {
                    "data-test-selector": i.TitleInput,
                    defaultValue: this.props.defaultTitle,
                    disabled: this.props.disabled,
                    maxLength: 100,
                    onChange: this.onNameInputChange,
                    placeholder: Object(a.d)("Collection name", "CollectionCreator"),
                    type: c._5.Text,
                    onKeyDown: this.onKeyDown
                })), r.createElement(c.L, {
                    cols: 1
                }, r.createElement(c.v, {
                    "data-test-selector": i.SubmitButton,
                    disabled: !this.canSaveTitle(),
                    onClick: this.onSubmit
                }, this.props.callToAction))))
            }, t.prototype.canSaveTitle = function() {
                var e = !(this.state.collectionTitle && this.state.collectionTitle.replace(/\s/g, "").length > 0),
                    t = Boolean(this.state.collectionTitle && this.state.collectionTitle.length > 100),
                    n = this.state.collectionTitle === this.props.defaultTitle;
                return !(e || t || n)
            }, t
        }(r.Component)
    },
    F3kA: function(e, t) {
        e.exports = function(e) {
            return e
        }
    },
    F6hB: function(e, t, n) {
        var i = n("SCwa"),
            o = 1 / 0;
        e.exports = function(e) {
            if ("string" == typeof e || i(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -o ? "-0" : t
        }
    },
    Fbrx: function(e, t, n) {
        var i = n("GVhz"),
            o = n("A2t5"),
            r = n("/MI9"),
            a = n("QQy1"),
            l = n("am5H"),
            c = n("/UYc"),
            s = n("F6hB"),
            d = 1,
            u = 2;
        e.exports = function(e, t) {
            return a(e) && l(t) ? c(s(e), t) : function(n) {
                var a = o(n, e);
                return void 0 === a && a === t ? r(n, e) : i(t, a, d | u)
            }
        }
    },
    FvmC: function(e, t, n) {
        var i = n("NDrF")(n("MygC"), "WeakMap");
        e.exports = i
    },
    Fy4Y: function(e, t, n) {
        var i = n("81TE")(Object.keys, Object);
        e.exports = i
    },
    GVhz: function(e, t, n) {
        var i = n("M+Mb"),
            o = n("VGcK");
        e.exports = function e(t, n, r, a, l) {
            return t === n || (null == t || null == n || !o(t) && !o(n) ? t != t && n != n : i(t, n, r, a, e, l))
        }
    },
    H1YI: function(e, t, n) {
        var i = n("JGv7"),
            o = Object.prototype,
            r = o.hasOwnProperty,
            a = o.toString,
            l = i ? i.toStringTag : void 0;
        e.exports = function(e) {
            var t = r.call(e, l),
                n = e[l];
            try {
                e[l] = void 0;
                var i = !0
            } catch (e) {}
            var o = a.call(e);
            return i && (t ? e[l] = n : delete e[l]), o
        }
    },
    H3TN: function(e, t, n) {
        var i = n("tobj"),
            o = n("VGcK"),
            r = Object.prototype,
            a = r.hasOwnProperty,
            l = r.propertyIsEnumerable,
            c = i(function() {
                return arguments
            }()) ? i : function(e) {
                return o(e) && a.call(e, "callee") && !l.call(e, "callee")
            };
        e.exports = c
    },
    HMFB: function(e, t, n) {
        var i = n("OScx"),
            o = n("r0iv"),
            r = n("Czj7");
        e.exports = function(e) {
            return r(e) ? i(e) : o(e)
        }
    },
    HMFi: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, i = null == e ? 0 : e.length, o = Array(i); ++n < i;) o[n] = t(e[n], n, e);
            return o
        }
    },
    I9kX: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CollectionManager_CreatorCollections"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "creatorLogin"
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
                            value: "after"
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
                                    value: "creatorLogin"
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
                                    value: "collections"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "15"
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
                                            value: "after"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "options"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "includeEmpty"
                                            },
                                            value: {
                                                kind: "BooleanValue",
                                                value: !0
                                            }
                                        }]
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                                                            value: "items"
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
                                                            value: "lengthSeconds"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "thumbnailURL"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "160"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "90"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "updatedAt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "viewCount"
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
                end: 381
            }
        };
        n.loc.source = {
            body: "query CollectionManager_CreatorCollections($creatorLogin: String! $after: Cursor) {\nuser(login: $creatorLogin) {\nid\ncollections(first: 15 after: $after options: { includeEmpty: true }) {\nedges {\ncursor\nnode {\nid\nitems {\ntotalCount\n}\nowner {\nid\nlogin\n}\nlengthSeconds\nthumbnailURL(width: 160 height: 90)\ntitle\nupdatedAt\nviewCount\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\ncurrentUser {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    INOA: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, i = t.length, o = e.length; ++n < i;) e[o + n] = t[n];
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
    J0u9: function(e, t, n) {
        var i = n("2oz3"),
            o = n("50Oj"),
            r = n("L4AJ"),
            a = n("4UmU"),
            l = r(function(e, t) {
                if (null == e) return [];
                var n = t.length;
                return n > 1 && a(e, t[0], t[1]) ? t = [] : n > 2 && a(t[0], t[1], t[2]) && (t = [t[0]]), o(e, i(t, 1), [])
            });
        e.exports = l
    },
    JGv7: function(e, t, n) {
        var i = n("MygC").Symbol;
        e.exports = i
    },
    JYjH: function(e, t, n) {
        var i = n("m2wS"),
            o = n("5hfY"),
            r = n("QQy1"),
            a = n("F6hB");
        e.exports = function(e) {
            return r(e) ? i(a(e)) : o(e)
        }
    },
    KO2S: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            l = n("yWCw"),
            c = n("Snvs"),
            s = n("RH2O"),
            d = n("V5M+"),
            u = n("Aj/L"),
            p = n("3zLD"),
            m = n("+8VM"),
            f = n("zCIC"),
            h = n("oIkB"),
            v = n("jXn2"),
            g = n("O8Ns"),
            y = (n("gpuH"), n("h5eQ")),
            k = n("8wGL"),
            b = n("gDYr"),
            C = n("6WAQ");
        ! function(e) {
            e.Public = "PUBLIC", e.Private = "PRIVATE"
        }(i || (i = {}));
        var _, x = function(e, t) {
                return o.__assign({}, Object(h.a)({
                    collectionID: e.id,
                    title: t.newTitle,
                    thumbnailInput: t.thumbnailInput
                }), {
                    optimisticResponse: {
                        updateCollection: {
                            __typename: "UpdateCollectionPayload",
                            collection: o.__assign({
                                __typename: "Collection"
                            }, e, {
                                title: t.newTitle || e.title
                            })
                        }
                    }
                })
            },
            S = function(e, t, n, i) {
                return o.__assign({}, Object(h.a)({
                    itemID: t,
                    collectionID: e.id,
                    position: n,
                    itemType: g.a.Video
                }), {
                    optimisticResponse: {
                        reorderCollectionItem: {
                            __typename: "ReorderCollectionItemPayload",
                            collection: o.__assign({}, e, {
                                __typename: "Collection",
                                items: o.__assign({}, e.items, {
                                    edges: i
                                })
                            })
                        }
                    }
                })
            },
            w = function(e, t, n) {
                var i = e.items.edges.filter(function(e) {
                        return e.node.id !== t
                    }),
                    r = e.id;
                return o.__assign({}, Object(h.a)({
                    collectionID: r,
                    itemID: t,
                    itemType: n
                }), {
                    optimisticResponse: {
                        removeCollectionItem: {
                            __typename: "RemoveCollectionItemPayload",
                            collection: o.__assign({}, e, {
                                __typename: "Collection",
                                items: o.__assign({}, e.items, {
                                    totalCount: i.length,
                                    edges: i
                                })
                            })
                        }
                    }
                })
            },
            O = function(e, t, n) {
                var r = e.items.edges,
                    a = o.__assign({}, t, {
                        __typename: "Video",
                        broadcastType: C.a.Upload,
                        isDeleted: !1,
                        scope: i.Public,
                        viewCount: 0,
                        publishedAt: (new Date).toString()
                    }),
                    l = r.concat([{
                        node: a,
                        cursor: "optimistic-cursor",
                        __typename: "CollectionItemEdge"
                    }]);
                return o.__assign({}, Object(h.a)({
                    collectionID: e.id,
                    itemID: t.id,
                    itemType: n
                }), {
                    optimisticResponse: {
                        addCollectionItem: {
                            __typename: "AddCollectionItemPayload",
                            collection: o.__assign({
                                __typename: "Collection"
                            }, e, {
                                items: o.__assign({
                                    __typename: "CollectionConnection"
                                }, e.items, {
                                    totalCount: e.items.totalCount + 1,
                                    edges: l
                                })
                            })
                        }
                    }
                })
            },
            E = n("Odds"),
            I = n("j5vp"),
            T = (n("kt/X"), String.fromCharCode(160));
        ! function(e) {
            e.AddVideoButton = "AddVideoButton", e.RemoveVideoButton = "AddVideoButton", e.DoneButton = "DoneButton"
        }(_ || (_ = {}));
        var N = 200,
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        addItemError: !1,
                        removeItemError: !1
                    }, t.onVideoAddHandler = function(e) {
                        t.setState({
                            addItemError: !1
                        }, function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.props.currentUser) return this.setState({
                                                addItemError: !0
                                            }), [2];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.props.addCollectionItem(O(this.props.data.collection, e, g.a.Video))];
                                        case 2:
                                            return n.sent(), Object(v.a)({
                                                channelID: this.props.collection.owner.id,
                                                itemID: e.id,
                                                itemPosition: this.props.data.collection.items.totalCount - 1,
                                                itemType: g.a.Video,
                                                playlistID: this.props.collection.id,
                                                userID: this.props.currentUser.id
                                            }), [3, 4];
                                        case 3:
                                            return t = n.sent(), a.j.error(t, "Failed adding item to collection"), this.setState({
                                                addItemError: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t.onVideoRemoveHandler = function(e) {
                        t.setState({
                            removeItemError: !1
                        }, function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.props.currentUser) return this.setState({
                                                removeItemError: !0
                                            }), [2];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.props.removeCollectionItem(w(this.props.data.collection, e, g.a.Video))];
                                        case 2:
                                            return n.sent(), Object(v.c)({
                                                channelID: this.props.collection.owner.id,
                                                itemID: e,
                                                itemPosition: this.props.data.collection.items.edges.findIndex(function(t) {
                                                    return t.node.id === e
                                                }),
                                                itemType: g.a.Video,
                                                playlistID: this.props.collection.id,
                                                userID: this.props.currentUser.id
                                            }), [3, 4];
                                        case 3:
                                            return t = n.sent(), a.j.error(t, "Failed adding item to collection"), this.setState({
                                                removeItemError: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t.onLoadMoreHandler = function() {
                        if (!t.props.data.user || !t.props.data.user.searchVideos) return Promise.reject(new Error("Encountered unexpected null value for user or searchVideos, cannot load more."));
                        var e = t.props.data.user.searchVideos.edges.length - 1,
                            n = t.props.data.user.searchVideos.edges[e].cursor;
                        return t.props.data.fetchMore({
                            query: I,
                            variables: {
                                creatorID: t.props.data.collection.owner.id,
                                after: n,
                                collectionID: t.props.data.collection.id
                            },
                            updateQuery: j
                        }).then(function() {})
                    }, t.onCompleteClickHandler = function() {
                        t.props.onComplete()
                    }, t.onSearchInputChangeHandler = function(e) {
                        var n = e.currentTarget.value;
                        t.state.searchChangeTimeoutID && clearTimeout(t.state.searchChangeTimeoutID);
                        var i = setTimeout(function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return e.trys.push([0, , 2, 3]), [4, this.props.data.refetch({
                                                creatorID: this.props.data.collection.owner.id,
                                                search: {
                                                    term: n
                                                },
                                                collectionID: this.props.data.collection.id
                                            })];
                                        case 1:
                                            return e.sent(), [3, 3];
                                        case 2:
                                            return this.setState({
                                                searchChangeTimeoutID: void 0
                                            }), [7];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, N);
                        t.setState({
                            searchChangeTimeoutID: i
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = !!(this.props.data.user && this.props.data.user.searchVideos && this.props.data.user.searchVideos.pageInfo.hasNextPage);
                    return r.createElement(E.e, {
                        type: E.j.FadeIn,
                        delay: E.f.Medium,
                        duration: E.g.Medium,
                        enabled: !0
                    }, r.createElement(E._35, {
                        background: E.n.Base,
                        className: "collection-editor-item-selector",
                        display: E.R.Flex,
                        flexDirection: E.T.Column
                    }, r.createElement(E._8, {
                        padding: {
                            x: 3,
                            y: 2
                        }
                    }, r.createElement(E.Q, {
                        fontSize: E.V.Size4
                    }, Object(a.d)("Add videos to collection", "CollectionItemSelectorModal")), r.createElement(E._8, {
                        padding: {
                            y: 1
                        }
                    }, r.createElement(E.W, {
                        label: Object(a.d)("Search your videos", "CollectionItemSelectorModal"),
                        error: !!this.isCollectionFull(),
                        errorMessage: this.isCollectionFull() ? Object(a.d)("This collection has the maximum number of items. Please remove an item to add more.", "CollectionItemSelectorModal") : T,
                        hint: T
                    }, r.createElement(E._27, {
                        onChange: this.onSearchInputChangeHandler,
                        placeholder: Object(a.d)("Filter by video title", "CollectionItemSelectorModal")
                    })))), r.createElement(f.b, {
                        suppressScrollX: !0
                    }, r.createElement(E._8, {
                        display: E.R.Flex,
                        flexDirection: E.T.Column
                    }, this.renderVideoSelectors(), r.createElement(f.a, {
                        enabled: e,
                        loadMore: this.onLoadMoreHandler
                    }))), r.createElement(E._35, {
                        display: E.R.Flex,
                        justifyContent: E._7.Center,
                        padding: {
                            y: 2
                        },
                        background: E.n.Base,
                        flexShrink: 0
                    }, r.createElement(E.v, {
                        "data-test-selector": _.DoneButton,
                        onClick: this.onCompleteClickHandler
                    }, Object(a.d)("Done", "CollectionItemSelectorModal"))), r.createElement(m.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t.prototype.componentWillUnmount = function() {
                    this.state.searchChangeTimeoutID && clearTimeout(this.state.searchChangeTimeoutID)
                }, t.prototype.renderVideoSelectors = function() {
                    var e = this;
                    if (this.state.searchChangeTimeoutID || this.props.data.loading) return r.createElement(E._10, {
                        fillContent: !0,
                        delay: 500
                    });
                    if (this.props.data.error || !this.props.data.user || !this.props.data.user.searchVideos) return r.createElement(E._8, {
                        alignSelf: E.d.Center,
                        justifyContent: E._7.Center
                    }, Object(a.d)("There was an error searching your videos. Please try again.", "CollectionItemSelectorModal"));
                    var t = this.props.data.user.searchVideos.edges.map(function(e) {
                        return e.node
                    });
                    return 0 === t.length ? r.createElement(E._8, {
                        alignSelf: E.d.Center,
                        justifyContent: E._7.Center
                    }, Object(a.d)("No results found.", "CollectionItemSelectorModal")) : t.map(function(n, i) {
                        var o = e.videoIsInCollection(e.props.data.collection, n),
                            a = o ? E.n.Alt2 : E.n.Base;
                        return r.createElement(E._35, {
                            alignItems: E.c.Center,
                            display: E.R.Flex,
                            flexDirection: E.T.Row,
                            flexGrow: 1,
                            key: i,
                            padding: {
                                x: 3,
                                y: .5
                            },
                            background: a
                        }, r.createElement(E._8, {
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                right: .5
                            },
                            ellipsis: !0
                        }, r.createElement(y.a, {
                            video: n,
                            selected: o
                        })), r.createElement(E._8, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, e.renderVideoResultButton(o, t[i])))
                    })
                }, t.prototype.renderVideoResultButton = function(e, t) {
                    var n = this;
                    return e ? r.createElement(E.v, {
                        "data-test-selector": _.RemoveVideoButton,
                        onClick: function() {
                            n.onVideoRemoveHandler(t.id)
                        },
                        type: E.B.Hollow
                    }, Object(a.d)("Remove", "CollectionItemSelectorModal")) : r.createElement(E.v, {
                        "data-test-selector": _.AddVideoButton,
                        onClick: function() {
                            n.onVideoAddHandler(t)
                        },
                        type: E.B.Hollow,
                        disabled: this.isCollectionFull()
                    }, Object(a.d)("Add", "CollectionItemSelectorModal"))
                }, t.prototype.videoIsInCollection = function(e, t) {
                    return -1 !== e.items.edges.findIndex(function(e) {
                        return e.node.id === t.id
                    })
                }, t.prototype.isCollectionFull = function() {
                    return !this.props.data.collection || this.props.data.collection.items.totalCount >= 100
                }, t
            }(r.Component),
            j = function(e, t) {
                if (!t.fetchMoreResult) return e;
                var n = t.fetchMoreResult;
                return n.user && n.user.searchVideos ? {
                    user: o.__assign({}, n.user, {
                        searchVideos: o.__assign({}, n.user.searchVideos, {
                            edges: Object(h.c)(e.user.searchVideos.edges, n.user.searchVideos.edges)
                        })
                    }),
                    collection: e.collection
                } : e
            },
            V = Object(p.compose)(Object(p.graphql)(I, {
                options: function(e) {
                    return {
                        variables: {
                            creatorID: e.collection.owner.id,
                            collectionID: e.collection.id
                        }
                    }
                }
            }), Object(p.graphql)(k, {
                name: "addCollectionItem"
            }), Object(p.graphql)(b, {
                name: "removeCollectionItem"
            }))(D);
        var F, A = Object(s.b)(function(e) {
                return {
                    currentUser: Object(u.c)(e)
                }
            }, function(e, t) {
                return {
                    onComplete: function() {
                        t.onComplete(), e(Object(d.c)())
                    }
                }
            })(V),
            R = n("CIox"),
            P = n("i61F"),
            M = n("j7/Y"),
            L = n("w9tK"),
            U = n("vH/s"),
            B = n("CSlQ"),
            H = n("8/8b"),
            G = n("M0wY"),
            z = n("mi6k"),
            q = n("kk4f"),
            Q = n("jcM9"),
            K = n("F0UT"),
            W = n("btUQ");
        ! function(e) {
            e[e.AddVideos = 0] = "AddVideos", e[e.DeleteButton = 1] = "DeleteButton", e[e.ErrorMessage = 2] = "ErrorMessage", e[e.PlayAllButton = 3] = "PlayAllButton", e[e.SaveButton = 4] = "SaveButton", e[e.Thumbnail = 5] = "Thumbnail"
        }(F || (F = {}));
        var $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveError: ""
                    }, t.onAddVideosClickHandler = function() {
                        t.props.onAddVideosClick(t.props.collection, t.props.onVideosChange)
                    }, t.onDeleteOptionClickHandler = function() {
                        t.props.onDeleteOptionClick(t.props.collection, function() {
                            t.props.history.push("/" + t.props.match.params.creatorLogin + "/manager/collections", {
                                content: U.PageviewContent.CollectionCard,
                                medium: U.PageviewMedium.VideoManagerCollectionEditor
                            })
                        })
                    }, t.onSaveClick = function(e) {
                        t.setState({
                            saveError: ""
                        }, function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, this.props.updateCollection(x(this.props.collection, {
                                                newTitle: e
                                            }))];
                                        case 1:
                                            return n.sent(), [3, 3];
                                        case 2:
                                            return t = n.sent(), a.j.error(t, "Failed to update collection title"), this.setState({
                                                saveError: Object(a.d)("The title update failed to save. Please try again.", "CollectionEditorInfoCard")
                                            }), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(E._35, {
                        background: E.n.Alt,
                        display: E.R.Flex,
                        flexDirection: E.T.Row,
                        alignItems: E.c.Stretch
                    }, r.createElement(E._8, {
                        display: E.R.Flex,
                        flexDirection: E.T.Column
                    }, r.createElement(E._8, {
                        margin: {
                            y: 1
                        }
                    }, r.createElement(E.Q, {
                        color: E.K.Alt,
                        type: E._49.H6,
                        bold: !0
                    }, Object(a.d)("Collection Thumbnail", "CollectionEditorInfoCard"))), r.createElement(q.a, {
                        "data-test-selector": F.Thumbnail,
                        alt: this.props.collection.title,
                        sizes: [{
                            size: "320px"
                        }],
                        src: this.props.collection.thumbnailURL,
                        videoCount: this.props.collection.items.totalCount
                    })), r.createElement(E._8, {
                        display: E.R.Flex,
                        flexDirection: E.T.Column,
                        margin: {
                            left: 3
                        },
                        flexGrow: 2,
                        flexShrink: 0
                    }, r.createElement(E._8, {
                        margin: {
                            y: 1
                        }
                    }, r.createElement(E.Q, {
                        color: E.K.Alt,
                        type: E._49.H6,
                        bold: !0
                    }, Object(a.d)("Title", "CollectionEditorInfoCard"))), r.createElement(E._8, {
                        display: E.R.Flex,
                        flexDirection: E.T.Row
                    }, r.createElement(K.a, {
                        onSubmit: this.onSaveClick,
                        callToAction: Object(a.d)("Save", "CollectionEditorInfoCard"),
                        errorMessage: this.state.saveError,
                        defaultTitle: this.props.collection.title
                    })), r.createElement(E._8, {
                        margin: {
                            top: 1,
                            bottom: 3
                        },
                        display: E.R.Flex,
                        flexDirection: E.T.Row
                    }, r.createElement(E.Q, {
                        type: E._49.Span,
                        color: E.K.Alt2
                    }, Object(a.d)("{totalViewCount, plural, one {# view} other {# views}}", {
                        totalViewCount: this.props.collection.viewCount || 0
                    }, "CollectionEditorInfoCard")), r.createElement(E._8, {
                        padding: {
                            x: 1
                        }
                    }, r.createElement(E.Q, {
                        type: E._49.Span,
                        color: E.K.Alt2
                    }, "·")), r.createElement(E.Q, {
                        type: E._49.Span,
                        color: E.K.Alt2
                    }, Object(z.b)(this.props.collection.lengthSeconds)), r.createElement(E._8, {
                        padding: {
                            x: 1
                        }
                    }, r.createElement(E.Q, {
                        type: E._49.Span,
                        color: E.K.Alt2
                    }, "·")), r.createElement(E.Q, {
                        type: E._49.Span,
                        color: E.K.Alt2
                    }, Object(a.d)("Last updated {updatedAt}", {
                        updatedAt: Object(a.c)(new Date(this.props.collection.updatedAt), "long")
                    }, "CollectionEditorInfoCard")), r.createElement(E._8, {
                        padding: {
                            x: 1
                        }
                    }, r.createElement(E.Q, {
                        type: E._49.Span,
                        color: E.K.Alt2
                    }, "·")), r.createElement(E.Q, {
                        type: E._49.Span,
                        color: E.K.Alt2
                    }, Object(a.d)("{videoCount} of {videoTotal} videos added to collection", {
                        videoCount: this.props.collection.items.totalCount,
                        videoTotal: 100
                    }, "CollectionEditorInfoCard"))), this.managerMenu()))
                }, t.prototype.managerMenu = function() {
                    var e = this.props.collection.items.totalCount >= 100,
                        t = r.createElement(E.v, {
                            "data-test-selector": F.AddVideos,
                            icon: E._25.Plus,
                            onClick: this.onAddVideosClickHandler,
                            type: E.B.Text,
                            disabled: e
                        }, Object(a.d)("Add videos", "CollectionEditorInfoCard"));
                    return e && (t = r.createElement(E._52, {
                        label: Object(a.d)("This collection has the maximum number of items. Please remove an item to add more.", "CollectionEditorInfoCard"),
                        direction: E._54.Bottom
                    }, t)), r.createElement(E._8, {
                        display: E.R.Flex,
                        flexDirection: E.T.Row
                    }, r.createElement(E.v, {
                        "data-test-selector": F.PlayAllButton,
                        icon: E._25.Play,
                        type: E.B.Text,
                        linkTo: "/collections/" + this.props.collection.id
                    }, Object(a.d)("Play All", "CollectionEditorInfoCard")), t, r.createElement(Q.a, {
                        balloonDirection: E.r.BottomCenter,
                        buttonType: E.B.Text,
                        content: {
                            collectionID: this.props.collection.id
                        },
                        tracking: {
                            location: U.PageviewLocation.VideoManagerCollectionEditor
                        }
                    }), r.createElement(E.v, {
                        "data-test-selector": F.DeleteButton,
                        icon: E._25.Trash,
                        type: E.B.Text,
                        onClick: this.onDeleteOptionClickHandler
                    }, Object(a.d)("Delete", "CollectionEditorInfoCard")))
                }, t
            }(r.Component),
            Y = Object(p.compose)(Object(p.graphql)(W, {
                name: "updateCollection"
            }))(Object(R.f)($));
        var J, X = Object(s.b)(null, function(e) {
                return {
                    onDeleteOptionClick: function(t, n) {
                        e(Object(d.d)(G.a, {
                            collection: t,
                            onSuccess: n
                        }))
                    },
                    onAddVideosClick: function(t, n) {
                        e(Object(d.d)(A, {
                            collection: t,
                            onComplete: n
                        }))
                    }
                }
            })(Y),
            Z = function() {
                return r.createElement(E._35, {
                    background: E.n.Alt,
                    display: E.R.Flex,
                    flexDirection: E.T.Row,
                    alignItems: E.c.Stretch,
                    margin: {
                        bottom: 5
                    }
                }, r.createElement(E._8, {
                    display: E.R.Flex,
                    flexDirection: E.T.Column
                }, r.createElement(E._8, {
                    margin: {
                        y: 1
                    }
                }, r.createElement(E._14, {
                    width: 100
                })), r.createElement(E._14, {
                    height: 180,
                    width: 320
                })), r.createElement(E._8, {
                    display: E.R.Flex,
                    flexDirection: E.T.Column,
                    margin: {
                        left: 3
                    },
                    flexGrow: 2,
                    flexShrink: 0
                }, r.createElement(E._8, {
                    margin: {
                        y: 1
                    }
                }, r.createElement(E._14, {
                    width: 50
                })), r.createElement(E._14, {
                    height: 25,
                    width: 400
                }), r.createElement(E._8, {
                    margin: {
                        top: 1,
                        bottom: 3
                    }
                }, r.createElement(E._14, {
                    height: 15,
                    width: 300
                })), r.createElement(E._14, {
                    height: 30,
                    width: 400
                })))
            },
            ee = n("F8kA"),
            te = n("5RjZ"),
            ne = n("KRtN"),
            ie = n("4o7v"),
            oe = n("PwTO"),
            re = n("Z8qZ"),
            ae = n("VoT2");
        n("dAJe");
        ! function(e) {
            e[e.ItemLength = 0] = "ItemLength", e[e.VideoLink = 1] = "VideoLink", e[e.Overlay = 2] = "Overlay"
        }(J || (J = {}));
        var le, ce = Object(P.SortableHandle)(function() {
                return r.createElement(E._24, {
                    asset: E._25.DragHandle
                })
            }),
            se = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveError: !1,
                        deleteError: !1
                    }, t.subHeader = function(e) {
                        return r.createElement(E._35, {
                            display: E.R.Flex,
                            flexDirection: E.T.Row,
                            margin: {
                                top: .5
                            },
                            color: E.K.Alt2
                        }, r.createElement(E._8, {
                            padding: {
                                right: 1
                            }
                        }, r.createElement(E._52, {
                            direction: E._54.Bottom,
                            align: E._53.Center,
                            label: Object(a.d)("Published At", "CollectionItemCard")
                        }, r.createElement(E.Q, null, Object(a.c)(new Date(e.publishedAt), "long")))), r.createElement(E._8, {
                            padding: {
                                right: 1
                            },
                            display: E.R.Flex,
                            alignItems: E.c.Center
                        }, r.createElement(E._34, {
                            "data-test-selector": J.ItemLength,
                            label: Object(a.d)("Length", "CollectionItemCard"),
                            value: Object(z.b)(e.lengthSeconds),
                            icon: E._25.GlyphLength
                        })), r.createElement(E._8, {
                            padding: {
                                right: 1
                            },
                            display: E.R.Flex,
                            alignItems: E.c.Center
                        }, r.createElement(E._34, {
                            label: Object(a.d)("Video Type", "CollectionItemCard"),
                            value: Object(te.a)(e.broadcastType),
                            icon: E._25.NavVideos
                        })))
                    }, t.reportImageInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collectionItem;
                    return r.createElement(E._8, {
                        className: "collection-item-card",
                        margin: {
                            y: 1
                        }
                    }, r.createElement(re.a, null, r.createElement(E._35, {
                        background: E.n.Alt,
                        display: E.R.Flex,
                        className: "collection-item__drag-handle"
                    }, r.createElement(ce, null)), r.createElement(E._8, {
                        alignSelf: E.d.Center,
                        padding: {
                            x: 1
                        }
                    }, this.props.itemIndex + 1), r.createElement(E._8, {
                        flexGrow: 0,
                        flexShrink: 0,
                        position: E._15.Relative
                    }, r.createElement(E.E, {
                        aspect: E.l.Aspect16x9,
                        size: E.F.Size16,
                        onLoad: this.reportImageInteractive,
                        onError: this.reportImageInteractive,
                        src: e.previewThumbnailURL ? e.previewThumbnailURL : "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                        alt: e.title
                    }), this.renderOverlay(this.props.collectionItem)), r.createElement(E._8, {
                        alignItems: E.c.Start,
                        display: E.R.Flex,
                        flexDirection: E.T.Column,
                        flexGrow: 1,
                        flexShrink: 1,
                        justifyContent: E._7.Center,
                        padding: {
                            x: 2
                        }
                    }, r.createElement(E._52, {
                        label: Object(a.d)("Watch this video", "CollectionItemCard"),
                        direction: E._54.Right
                    }, r.createElement(E.Q, {
                        type: E._49.H5,
                        color: E.K.Alt
                    }, r.createElement(ee.a, {
                        "data-test-selector": J.VideoLink,
                        to: {
                            pathname: "/videos/" + this.props.collectionItem.id,
                            state: {
                                content: U.PageviewContent.CollectionItemCard,
                                medium: U.PageviewMedium.VideoManagerCollectionEditor
                            }
                        }
                    }, e.title))), this.subHeader(e)), r.createElement(oe.a, null, r.createElement(ie.a, {
                        value: e.viewCount.toString(),
                        icon: E._25.GlyphViews,
                        label: Object(a.d)("Total videos", "CollectionItemCard")
                    })), r.createElement(ne.a, {
                        options: this.collectionMenuOptions(e)
                    })))
                }, t.prototype.collectionMenuOptions = function(e) {
                    var t = this;
                    return [{
                        asset: E._25.Edit,
                        title: Object(a.d)("Set as collection thumbnail", "CollectionItemCard"),
                        onClick: function() {
                            t.setState({
                                saveError: !1
                            }, function() {
                                return o.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return o.__generator(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return n.trys.push([0, 2, , 3]), [4, this.props.updateCollection(x(this.props.parentCollection, {
                                                    thumbnailInput: {
                                                        id: e.id,
                                                        type: g.a.Video
                                                    }
                                                }))];
                                            case 1:
                                                return n.sent(), [3, 3];
                                            case 2:
                                                return t = n.sent(), a.j.error(t, "Failed to set this video as the collection thumbnail."), this.setState({
                                                    saveError: !0
                                                }), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            })
                        }
                    }, {
                        asset: E._25.Trash,
                        title: Object(a.d)("Remove from collection", "CollectionItemCard"),
                        onClick: function() {
                            t.setState({
                                deleteError: !1
                            }, function() {
                                return o.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return o.__generator(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                if (!this.props.data.currentUser || !this.props.data.currentUser.id) return this.setState({
                                                    deleteError: !0
                                                }), [2];
                                                n.label = 1;
                                            case 1:
                                                return n.trys.push([1, 3, , 4]), [4, this.props.removeCollectionItem(w(this.props.parentCollection, this.props.collectionItem.id, g.a.Video))];
                                            case 2:
                                                return n.sent(), Object(v.c)({
                                                    channelID: this.props.parentCollection.owner.id,
                                                    itemID: e.id,
                                                    itemPosition: this.props.itemIndex,
                                                    itemType: g.a.Video,
                                                    playlistID: this.props.parentCollection.id,
                                                    userID: this.props.data.currentUser.id
                                                }), [3, 4];
                                            case 3:
                                                return t = n.sent(), a.j.error(t, "Failed to set this video as the collection thumbnail."), this.setState({
                                                    deleteError: !0
                                                }), [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    })
                                })
                            })
                        }
                    }]
                }, t.prototype.renderOverlay = function(e) {
                    if (e.isDeleted || e.scope !== i.Public) {
                        var t = null,
                            n = null;
                        return e.isDeleted ? (t = Object(a.d)("Deleted", "CollectionItemCard"), n = r.createElement(E._24, {
                            asset: E._25.Trash
                        })) : e.scope !== i.Public && (n = r.createElement(E._24, {
                            asset: E._25.Lock
                        }), t = Object(a.d)("Private", "CollectionItemCard")), r.createElement(E._35, {
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            alignItems: E.c.Center,
                            background: E.n.Overlay,
                            "data-test-selector": J.Overlay,
                            display: E.R.Flex,
                            flexDirection: E.T.Column,
                            justifyContent: E._7.Center,
                            position: E._15.Absolute
                        }, n, r.createElement(E.Q, null, t))
                    }
                    return null
                }, t
            }(r.Component),
            de = Object(p.compose)(Object(B.d)("CollectionItemCard"), Object(p.graphql)(ae), Object(p.graphql)(W, {
                name: "updateCollection"
            }), Object(p.graphql)(b, {
                name: "removeCollectionItem"
            }))(se),
            ue = Object(P.SortableElement)(function(e) {
                return r.createElement(de, o.__assign({}, e))
            }),
            pe = Object(P.SortableContainer)(function(e) {
                var t = e.collection,
                    n = e.items;
                return r.createElement(E._8, null, n.filter(function(e) {
                    return !!e.id
                }).map(function(e, n) {
                    return r.createElement(ue, {
                        parentCollection: t,
                        collectionItem: e,
                        index: n,
                        key: e.id,
                        itemIndex: n
                    })
                }))
            }),
            me = n("Dz2i"),
            fe = n("pi7n");
        n("/brc");
        ! function(e) {
            e.BackButton = "BackButton", e.AddVideos = "AddVideos", e.NoCollectionItemsCTA = "NoCollectionItemsCTA", e.CollectionItemsUnavailableError = "CollectionItemsUnavailableError", e.CollectionUnavailableError = "CollectionUnavailableError"
        }(le || (le = {}));
        var he = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingTitle: !1,
                        saveError: !1
                    }, t.onSortEnd = function(e) {
                        var n = e.oldIndex,
                            i = e.newIndex;
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return o.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.props.data.collection && n !== i ? (e = Object(P.arrayMove)(this.props.data.collection.items.edges, n, i), [4, this.onItemsChange(e, e[i].node.id, i)]) : [3, 2];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.onItemsChange = function(e, n, i) {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var t, r;
                            return o.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!this.props.data.collection) return [3, 4];
                                        t = S(this.props.data.collection, n, i, e), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.props.reorderCollectionItem(t)];
                                    case 2:
                                        return o.sent(), [3, 4];
                                    case 3:
                                        return r = o.sent(), a.j.error(r, "Collection reordering Mutation failed"), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onAddVideosClickHandler = function() {
                        t.props.data.collection && t.props.onAddVideosClick(t.props.data.collection, t.props.data.refetch)
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t, n = !1;
                    return this.props.data.loading ? (e = this.collectionInfoPlaceholder(), t = this.collectionCardPlaceholders()) : this.props.data.error || !this.props.data.collection ? (e = this.collectionUnavailableError(), t = this.collectionItemsUnavaibleError()) : this.props.data.collection && this.props.data.collection.items.totalCount > 0 ? (e = r.createElement(X, {
                        collection: this.props.data.collection,
                        onVideosChange: this.props.data.refetch
                    }), t = r.createElement(pe, {
                        collection: this.props.data.collection,
                        items: this.props.data.collection.items.edges.map(function(e) {
                            return e.node
                        }),
                        onSortEnd: this.onSortEnd,
                        useDragHandle: !0
                    }), n = this.props.data.collection.items.pageInfo.hasNextPage || !1) : this.props.data.collection && this.props.data.collection.items.totalCount <= 0 ? (e = r.createElement(X, {
                        collection: this.props.data.collection,
                        onVideosChange: this.props.data.refetch
                    }), t = this.noCollectionItemsCTA()) : (e = this.collectionUnavailableError(), t = this.collectionItemsUnavaibleError()), this.props.data.collection && this.props.data.collection.owner && this.props.data.collection.owner.login !== this.props.match.params.creatorLogin ? r.createElement(R.b, {
                        to: "/" + this.props.match.params.creatorLogin + "/manager/collections"
                    }) : r.createElement(f.b, null, r.createElement(E._8, {
                        padding: 3,
                        margin: {
                            bottom: 3
                        },
                        display: E.R.Flex,
                        flexDirection: E.T.Row,
                        className: "collection-editor-page"
                    }, r.createElement(E._8, {
                        flexGrow: 1,
                        margin: {
                            bottom: 3
                        }
                    }, r.createElement(E._8, {
                        margin: {
                            bottom: 1
                        },
                        flexGrow: 1,
                        flexDirection: E.T.Row,
                        display: E.R.Flex
                    }, r.createElement(E._8, {
                        flexGrow: 1
                    }, r.createElement(E.Q, {
                        type: E._49.H3
                    }, Object(a.d)("Edit Collection", "CollectionEditorPagePresentation")))), r.createElement(E._8, {
                        padding: {
                            y: .5
                        }
                    }, r.createElement(E.O, {
                        "data-test-selector": le.BackButton,
                        hoverUnderlineNone: !0,
                        to: {
                            pathname: "/" + this.props.match.params.creatorLogin + "/manager/collections",
                            state: {
                                content: "all_collections",
                                medium: U.PageviewMedium.VideoManagerCollectionEditor
                            }
                        }
                    }, r.createElement(E._8, {
                        display: E.R.Flex,
                        flexDirection: E.T.Row,
                        alignItems: E.c.Center
                    }, r.createElement(E._24, {
                        asset: E._25.ChatSettingsBack,
                        height: 20,
                        width: 20
                    }), r.createElement(E.Q, {
                        align: E._59.Middle,
                        bold: !0
                    }, Object(a.d)("All collections", "CollectionEditorPagePresentation"))))), e, t, r.createElement(f.a, {
                        enabled: n,
                        loadMore: this.props.loadMore
                    }))))
                }, t.prototype.collectionCardPlaceholders = function() {
                    return [r.createElement(H.a, {
                        key: 1
                    }), r.createElement(H.a, {
                        key: 2
                    }), r.createElement(H.a, {
                        key: 3
                    })]
                }, t.prototype.collectionInfoPlaceholder = function() {
                    return r.createElement(Z, null)
                }, t.prototype.noCollectionItemsCTA = function() {
                    return r.createElement(E._8, {
                        alignItems: E.c.Center,
                        "data-test-selector": le.NoCollectionItemsCTA,
                        display: E.R.Flex,
                        flexDirection: E.T.Column,
                        justifyContent: E._7.Center,
                        margin: {
                            top: 5
                        }
                    }, r.createElement(E.Q, {
                        type: E._49.H4
                    }, Object(a.d)("Put all your best videos in one spot.", "CollectionEditorPagePresentation")), r.createElement(E.Q, {
                        type: E._49.H4
                    }, Object(a.d)("Videos organized into collections help your viewers easily find related content.", "CollectionEditorPagePresentation")), r.createElement(E.Q, {
                        type: E._49.H4
                    }, Object(a.d)("Your most recently updated Collection will be featured at the top of channel’s video page.", "CollectionEditorPagePresentation")), r.createElement(E._8, {
                        padding: 2
                    }, r.createElement(E.v, {
                        "data-test-selector": le.AddVideos,
                        icon: E._25.Plus,
                        onClick: this.onAddVideosClickHandler,
                        type: E.B.Hollow
                    }, Object(a.d)("Add videos", "CollectionEditorPagePresentation"))))
                }, t.prototype.collectionItemsUnavaibleError = function() {
                    return r.createElement(E._8, {
                        "data-test-selector": le.CollectionItemsUnavailableError
                    }, Object(a.d)("Something went wrong loading your collections items. Please try again.", "CollectionEditorPagePresentation"))
                }, t.prototype.collectionUnavailableError = function() {
                    return r.createElement(E._8, {
                        "data-test-selector": le.CollectionUnavailableError
                    }, Object(a.d)("Something went wrong loading your collection. Please try again.", "CollectionEditorPagePresentation"))
                }, t
            }(r.Component),
            ve = function(e, t) {
                var n = t.fetchMoreResult;
                if (!n || !n.collection || !n.collection.items) return e;
                var i = e.collection && e.collection.items.edges || [];
                return n.collection.items.edges = i.concat(n.collection.items.edges), n
            },
            ge = Object(p.compose)(Object(p.graphql)(me, {
                options: function(e) {
                    return {
                        variables: {
                            collectionID: e.match.params.collectionID
                        }
                    }
                },
                props: function(e) {
                    return o.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                variables: {
                                    collectionID: e.ownProps.match.params.collectionID
                                },
                                query: me,
                                updateQuery: ve
                            })
                        }
                    })
                }
            }), Object(p.graphql)(fe, {
                name: "reorderCollectionItem"
            }), Object(B.d)("CollectionEditorPage", {
                destination: L.a.VideoManagerCollectionsEditor
            }), Object(M.a)({
                location: U.PageviewLocation.VideoManagerCollectionEditor,
                properties: function(e) {
                    return {
                        channel: e.match.params.creatorLogin
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(he);
        var ye = Object(s.b)(null, function(e) {
                return {
                    onAddVideosClick: function(t, n) {
                        e(Object(d.d)(A, {
                            collection: t,
                            onComplete: n
                        }))
                    }
                }
            })(ge),
            ke = function(e) {
                return r.createElement(c.a, {
                    ownerLogin: e.match.params.creatorLogin,
                    permittedRoles: {
                        editor: !0,
                        staff: !0
                    }
                }, function(t) {
                    var n = t.loading,
                        i = t.permitted;
                    return n || i ? r.createElement(ye, o.__assign({}, e)) : r.createElement(l.a, {
                        message: Object(a.d)("Something went wrong. Please try again.", "CollectionEditorPage")
                    })
                })
            },
            be = n("L2R7"),
            Ce = function(e) {
                return window.location.replace("https://www.twitch.tv/" + encodeURIComponent(e.match.params.creatorLogin) + "/manager/collections/edit/" + e.match.params.collectionID), null
            },
            _e = function(e) {
                return Object(be.a)() ? r.createElement(ke, o.__assign({}, e)) : r.createElement(Ce, o.__assign({}, e))
            };
        n.d(t, "CollectionEditorPage", function() {
            return _e
        })
    },
    KRtN: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("GiK3"),
            r = n("rCmJ"),
            a = n("Odds"),
            l = function(e) {
                var t = e.asset ? o.createElement(a._24, {
                    asset: e.asset
                }) : null;
                return o.createElement(a._6, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, o.createElement(a._8, {
                    alignItems: a.c.Center,
                    display: a.R.Flex,
                    flexGrow: 1,
                    padding: 1
                }, t, o.createElement(a._2, {
                    margin: {
                        left: 1
                    }
                }, o.createElement(a.Q, null, e.title))))
            };
        n.d(t, "a", function() {
            return c
        });
        var c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    showDropMenu: !1
                }, t.menuButtonClickHandler = function() {
                    t.setState(function(e) {
                        return {
                            showDropMenu: !e.showDropMenu
                        }
                    })
                }, t.clickOutHandler = function() {
                    t.setState(function() {
                        return {
                            showDropMenu: !1
                        }
                    })
                }, t
            }
            return i.__extends(t, e), t.prototype.render = function() {
                var e = null;
                return this.state.showDropMenu && (e = this.dropMenu()), o.createElement(a._8, {
                    flexGrow: 0,
                    flexShrink: 0,
                    display: a.R.Flex,
                    position: a._15.Relative
                }, o.createElement(a._2, {
                    fullHeight: !0
                }, o.createElement(r.a, {
                    onClickOut: this.clickOutHandler
                }, o.createElement(a._8, {
                    fullHeight: !0,
                    display: a.R.Flex,
                    alignItems: a.c.Stretch
                }, o.createElement(a.v, {
                    disabled: 0 === this.props.options.length,
                    icon: a._25.More,
                    onClick: this.menuButtonClickHandler,
                    type: a.B.Text
                })), e)))
            }, t.prototype.dropMenu = function() {
                var e = this.props.options.map(function(e, t) {
                    return o.createElement(l, i.__assign({
                        key: t
                    }, e))
                });
                return o.createElement(a.q, {
                    size: a.s.Small,
                    direction: a.r.BottomRight,
                    noTail: !0,
                    show: !0
                }, e)
            }, t
        }(o.Component)
    },
    KYFq: function(e, t, n) {
        var i = n("kl/u"),
            o = n("SCwa"),
            r = NaN,
            a = /^\s+|\s+$/g,
            l = /^[-+]0x[0-9a-f]+$/i,
            c = /^0b[01]+$/i,
            s = /^0o[0-7]+$/i,
            d = parseInt;
        e.exports = function(e) {
            if ("number" == typeof e) return e;
            if (o(e)) return r;
            if (i(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = i(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(a, "");
            var n = c.test(e);
            return n || s.test(e) ? d(e.slice(2), n ? 2 : 8) : l.test(e) ? r : +e
        }
    },
    L3k4: function(e, t, n) {
        var i = n("aIUG"),
            o = n("F6hB");
        e.exports = function(e, t) {
            for (var n = 0, r = (t = i(t, e)).length; null != e && n < r;) e = e[o(t[n++])];
            return n && n == r ? e : void 0
        }
    },
    L4AJ: function(e, t, n) {
        var i = n("F3kA"),
            o = n("MVM9"),
            r = n("iAlu");
        e.exports = function(e, t) {
            return r(o(e, t, i), e + "")
        }
    },
    "M+Mb": function(e, t, n) {
        var i = n("gKqb"),
            o = n("qu3O"),
            r = n("Ao0V"),
            a = n("k6Ms"),
            l = n("bL9o"),
            c = n("mG6l"),
            s = n("mPnA"),
            d = n("YOyG"),
            u = 1,
            p = "[object Arguments]",
            m = "[object Array]",
            f = "[object Object]",
            h = Object.prototype.hasOwnProperty;
        e.exports = function(e, t, n, v, g, y) {
            var k = c(e),
                b = c(t),
                C = k ? m : l(e),
                _ = b ? m : l(t),
                x = (C = C == p ? f : C) == f,
                S = (_ = _ == p ? f : _) == f,
                w = C == _;
            if (w && s(e)) {
                if (!s(t)) return !1;
                k = !0, x = !1
            }
            if (w && !x) return y || (y = new i), k || d(e) ? o(e, t, n, v, g, y) : r(e, t, C, n, v, g, y);
            if (!(n & u)) {
                var O = x && h.call(e, "__wrapped__"),
                    E = S && h.call(t, "__wrapped__");
                if (O || E) {
                    var I = O ? e.value() : e,
                        T = E ? t.value() : t;
                    return y || (y = new i), g(I, T, n, v, y)
                }
            }
            return !!w && (y || (y = new i), a(e, t, n, v, g, y))
        }
    },
    M0TM: function(e, t, n) {
        var i = n("Bh6c"),
            o = n("9nrn"),
            r = n("ymQA"),
            a = 200;
        e.exports = function(e, t) {
            var n = this.__data__;
            if (n instanceof i) {
                var l = n.__data__;
                if (!o || l.length < a - 1) return l.push([e, t]), this.size = ++n.size, this;
                n = this.__data__ = new r(l)
            }
            return n.set(e, t), this.size = n.size, this
        }
    },
    M0wY: function(e, t, n) {
        "use strict";
        var i, o = n("TToO"),
            r = n("GiK3"),
            a = n("3zLD"),
            l = n("RH2O"),
            c = n("6sO2"),
            s = n("7vx8"),
            d = n("oIkB"),
            u = n("V5M+"),
            p = n("I9kX"),
            m = n("+8VM"),
            f = n("rvrg"),
            h = n("Odds");
        ! function(e) {
            e[e.CancelButton = 0] = "CancelButton", e[e.ConfirmButton = 1] = "ConfirmButton", e[e.ErrorAlert = 2] = "ErrorAlert"
        }(i || (i = {}));
        var v = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection,
                        t = null;
                    return this.props.error && (t = r.createElement(h.e, {
                        delay: h.f.Short,
                        type: h.j.BounceIn,
                        enabled: !0
                    }, r.createElement(h._35, {
                        border: !0,
                        margin: {
                            bottom: 1
                        },
                        padding: 1,
                        fullWidth: !0
                    }, r.createElement(h.Q, {
                        bold: !0,
                        color: h.K.Error,
                        "data-test-selector": i.ErrorAlert
                    }, this.props.error)))), r.createElement(h.e, {
                        type: h.j.FadeIn,
                        delay: h.f.Medium,
                        duration: h.g.Medium,
                        enabled: !0
                    }, r.createElement(h._35, {
                        background: h.n.Base,
                        padding: {
                            x: 3,
                            top: 2,
                            bottom: 3
                        }
                    }, r.createElement(h._2, {
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(h.Q, {
                        fontSize: h.V.Size3
                    }, Object(c.d)("Delete Collection", "DeleteCollectionModal"))), r.createElement(h.Q, {
                        fontSize: h.V.Size6
                    }, Object(c.d)("Are you sure you want to delete this collection?", "DeleteCollectionModal")), r.createElement(h.Q, {
                        fontSize: h.V.Size6
                    }, Object(c.d)("This action cannot be undone. ", "DeleteCollectionModal")), r.createElement(h._8, {
                        padding: {
                            y: 2
                        }
                    }, r.createElement(f.a, {
                        collection: e,
                        hideOptionsMenu: !0
                    })), t, r.createElement(h._8, {
                        display: h.R.Flex,
                        flexDirection: h.T.Row,
                        justifyContent: h._7.Center
                    }, r.createElement(h._8, {
                        margin: {
                            x: .5
                        }
                    }, r.createElement(h.v, {
                        "data-test-selector": i.CancelButton,
                        onClick: this.props.onCancel,
                        type: h.B.Hollow
                    }, Object(c.d)("Cancel", "DeleteCollectionModal"))), r.createElement(h._8, {
                        margin: {
                            x: .5
                        }
                    }, r.createElement(h.v, {
                        "data-test-selector": i.ConfirmButton,
                        onClick: this.props.onDeleteRequest,
                        type: h.B.Alert
                    }, Object(c.d)("Delete", "DeleteCollectionModal")))), r.createElement(m.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(r.Component),
            g = n("e6eF");
        n.d(t, "a", function() {
            return b
        });
        var y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.defaultUserError = Object(c.d)("Unable to delete this collection, try again later.", "DeleteCollectionModal"), t.onCancelHandler = function() {
                        t.props.onClose()
                    }, t.onDeleteHandler = function() {
                        t.setState({
                            deletionError: void 0
                        }, function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!this.props.collection.owner) return this.setState({
                                                deletionError: this.defaultUserError
                                            }), [2];
                                            t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.onDeleteRequest(o.__assign({}, Object(d.a)({
                                                collectionID: this.props.collection.id
                                            }), {
                                                refetchQueries: [{
                                                    query: p,
                                                    variables: {
                                                        creatorLogin: this.props.collection.owner.login
                                                    }
                                                }]
                                            }))];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return e = t.sent(), c.j.error(e, "DeleteCollectionModal"), this.setState({
                                                deletionError: this.defaultUserError
                                            }), [2];
                                        case 4:
                                            return this.props.onSuccess(), [2]
                                    }
                                })
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(v, {
                        collection: this.props.collection,
                        error: this.state.deletionError,
                        onCancel: this.onCancelHandler,
                        onDeleteRequest: this.onDeleteHandler
                    })
                }, t
            }(r.Component),
            k = Object(a.compose)(Object(s.a)(g, {
                name: "onDeleteRequest"
            }))(y);
        var b = Object(l.b)(null, function(e, t) {
            return {
                onClose: function() {
                    e(Object(u.c)())
                },
                onSuccess: function() {
                    e(Object(u.c)()), t.onSuccess && t.onSuccess()
                }
            }
        })(k)
    },
    MA13: function(e, t, n) {
        var i = n("MygC")["__core-js_shared__"];
        e.exports = i
    },
    MVM9: function(e, t, n) {
        var i = n("Ii8z"),
            o = Math.max;
        e.exports = function(e, t, n) {
            return t = o(void 0 === t ? e.length - 1 : t, 0),
                function() {
                    for (var r = arguments, a = -1, l = o(r.length - t, 0), c = Array(l); ++a < l;) c[a] = r[t + a];
                    a = -1;
                    for (var s = Array(t + 1); ++a < t;) s[a] = r[a];
                    return s[t] = n(c), i(e, this, s)
                }
        }
    },
    MygC: function(e, t, n) {
        var i = n("1tEs"),
            o = "object" == typeof self && self && self.Object === Object && self,
            r = i || o || Function("return this")();
        e.exports = r
    },
    N8CH: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("GiK3"),
            o = (n.n(i), n("Odds")),
            r = function(e) {
                return i.createElement(o._6, {
                    onClick: e.onClick
                }, i.createElement(o._8, {
                    alignItems: o.c.Start,
                    display: o.R.Flex,
                    flexDirection: o.T.Column,
                    flexGrow: 1,
                    flexShrink: 1,
                    justifyContent: o._7.Center,
                    padding: {
                        x: 2
                    }
                }, e.children))
            }
    },
    NDrF: function(e, t, n) {
        var i = n("CZUI"),
            o = n("6Exb");
        e.exports = function(e, t) {
            var n = o(e, t);
            return i(n) ? n : void 0
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
    O8Ns: function(e, t, n) {
        "use strict";
        var i, o, r = function(e, t, n) {
            var i = e.collectionItems || [];
            return Boolean(i.find(function(e) {
                return e.ObjectType === n && e.id === t
            }))
        };
        ! function(e) {
            e.Public = "public"
        }(i || (i = {})),
        function(e) {
            e.Staff = "staff"
        }(o || (o = {}));
        var a, l = function(e) {
            return {
                __typename: "Collection",
                id: e._id,
                title: e.title,
                state: i.Public,
                thumbnailSrc: e.thumbnails && e.thumbnails.small,
                totalDuration: e.total_duration,
                itemsCount: e.items_count
            }
        };

        function c(e) {
            return e.collections.map(function(e) {
                return l(e)
            })
        }! function(e) {
            e.Video = "video"
        }(a || (a = {})), n.d(t, !1, function() {
            return r
        }), n.d(t, !1, function() {
            return i
        }), n.d(t, !1, function() {
            return o
        }), n.d(t, "b", function() {
            return l
        }), n.d(t, "c", function() {
            return c
        }), n.d(t, "a", function() {
            return a
        })
    },
    OEl7: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "collectionFields"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Collection"
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
                            value: "lengthSeconds"
                        },
                        arguments: [],
                        directives: []
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
                            value: "title"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "viewCount"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "updatedAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "thumbnailURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            value: {
                                kind: "IntValue",
                                value: "320"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 142
            }
        };
        n.loc.source = {
            body: "fragment collectionFields on Collection {\nid\nlengthSeconds\nowner {\nid\nlogin\n}\ntitle\nviewCount\nupdatedAt\nthumbnailURL(width: 320 height: 180)\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    OScx: function(e, t, n) {
        var i = n("YNJY"),
            o = n("H3TN"),
            r = n("mG6l"),
            a = n("mPnA"),
            l = n("cjOD"),
            c = n("YOyG"),
            s = Object.prototype.hasOwnProperty;
        e.exports = function(e, t) {
            var n = r(e),
                d = !n && o(e),
                u = !n && !d && a(e),
                p = !n && !d && !u && c(e),
                m = n || d || u || p,
                f = m ? i(e.length, String) : [],
                h = f.length;
            for (var v in e) !t && !s.call(e, v) || m && ("length" == v || u && ("offset" == v || "parent" == v) || p && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || l(v, h)) || f.push(v);
            return f
        }
    },
    OZxy: function(e, t) {
        var n = Object.prototype.toString;
        e.exports = function(e) {
            return n.call(e)
        }
    },
    "P/Wu": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            o = function() {
                return function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var n = [],
                            i = !0,
                            o = !1,
                            r = void 0;
                        try {
                            for (var a, l = e[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                        } catch (e) {
                            o = !0, r = e
                        } finally {
                            try {
                                !i && l.return && l.return()
                            } finally {
                                if (o) throw r
                            }
                        }
                        return n
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }();
        t.default = function(e) {
            var t, n, m = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
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
                            i = n.distance,
                            o = n.shouldCancelStart;
                        if (2 === e.button || o(e)) return !1;
                        t._touched = !0, t._pos = {
                            x: e.pageX,
                            y: e.pageY
                        };
                        var r = (0, p.closest)(e.target, function(e) {
                            return null != e.sortableInfo
                        });
                        if (r && r.sortableInfo && t.nodeIsChild(r) && !t.state.sorting) {
                            var a = t.props.useDragHandle,
                                l = r.sortableInfo,
                                c = l.index,
                                s = l.collection;
                            if (a && !(0, p.closest)(e.target, function(e) {
                                    return null != e.sortableHandle
                                })) return;
                            t.manager.active = {
                                index: c,
                                collection: s
                            }, "a" === e.target.tagName.toLowerCase() && e.preventDefault(), i || (0 === t.props.pressDelay ? t.handlePress(e) : t.pressTimer = setTimeout(function() {
                                return t.handlePress(e)
                            }, t.props.pressDelay))
                        }
                    }, t.nodeIsChild = function(e) {
                        return e.sortableInfo.manager === t.manager
                    }, t.handleMove = function(e) {
                        var n = t.props,
                            i = n.distance,
                            o = n.pressThreshold;
                        if (!t.state.sorting && t._touched) {
                            t._delta = {
                                x: t._pos.x - e.pageX,
                                y: t._pos.y - e.pageY
                            };
                            var r = Math.abs(t._delta.x) + Math.abs(t._delta.y);
                            i || o && !(o && r >= o) ? i && r >= i && t.manager.isActive() && t.handlePress(e) : (clearTimeout(t.cancelTimer), t.cancelTimer = setTimeout(t.cancel, 0))
                        }
                    }, t.handleEnd = function() {
                        var e = t.props.distance;
                        t._touched = !1, e || t.cancel()
                    }, t.cancel = function() {
                        t.state.sorting || (clearTimeout(t.pressTimer), t.manager.active = null)
                    }, t.handlePress = function(e) {
                        var n = t.manager.getActive();
                        if (n) {
                            var i = t.props,
                                o = i.axis,
                                r = i.getHelperDimensions,
                                a = i.helperClass,
                                l = i.hideSortableGhost,
                                c = i.onSortStart,
                                s = i.useWindowAsScrollContainer,
                                d = n.node,
                                u = n.collection,
                                m = d.sortableInfo.index,
                                h = (0, p.getElementMargin)(d),
                                v = t.container.getBoundingClientRect(),
                                g = r({
                                    index: m,
                                    node: d,
                                    collection: u
                                });
                            t.node = d, t.margin = h, t.width = g.width, t.height = g.height, t.marginOffset = {
                                x: t.margin.left + t.margin.right,
                                y: Math.max(t.margin.top, t.margin.bottom)
                            }, t.boundingClientRect = d.getBoundingClientRect(), t.containerBoundingRect = v, t.index = m, t.newIndex = m, t.axis = {
                                x: o.indexOf("x") >= 0,
                                y: o.indexOf("y") >= 0
                            }, t.offsetEdge = t.getEdgeOffset(d), t.initialOffset = t.getOffset(e), t.initialScroll = {
                                top: t.scrollContainer.scrollTop,
                                left: t.scrollContainer.scrollLeft
                            }, t.initialWindowScroll = {
                                top: window.pageYOffset,
                                left: window.pageXOffset
                            };
                            var y, k = d.querySelectorAll("input, textarea, select"),
                                b = d.cloneNode(!0),
                                C = [].concat(f(b.querySelectorAll("input, textarea, select")));
                            if (C.forEach(function(e, t) {
                                    "file" !== e.type && k[t] && (e.value = k[t].value)
                                }), t.helper = t.document.body.appendChild(b), t.helper.style.position = "fixed", t.helper.style.top = t.boundingClientRect.top - h.top + "px", t.helper.style.left = t.boundingClientRect.left - h.left + "px", t.helper.style.width = t.width + "px", t.helper.style.height = t.height + "px", t.helper.style.boxSizing = "border-box", t.helper.style.pointerEvents = "none", l && (t.sortableGhost = d, d.style.visibility = "hidden", d.style.opacity = 0), t.minTranslate = {}, t.maxTranslate = {}, t.axis.x && (t.minTranslate.x = (s ? 0 : v.left) - t.boundingClientRect.left - t.width / 2, t.maxTranslate.x = (s ? t.contentWindow.innerWidth : v.left + v.width) - t.boundingClientRect.left - t.width / 2), t.axis.y && (t.minTranslate.y = (s ? 0 : v.top) - t.boundingClientRect.top - t.height / 2, t.maxTranslate.y = (s ? t.contentWindow.innerHeight : v.top + v.height) - t.boundingClientRect.top - t.height / 2), a)(y = t.helper.classList).add.apply(y, f(a.split(" ")));
                            t.listenerNode = e.touches ? d : t.contentWindow, p.events.move.forEach(function(e) {
                                return t.listenerNode.addEventListener(e, t.handleSortMove, !1)
                            }), p.events.end.forEach(function(e) {
                                return t.listenerNode.addEventListener(e, t.handleSortEnd, !1)
                            }), t.setState({
                                sorting: !0,
                                sortingIndex: m
                            }), c && c({
                                node: d,
                                index: m,
                                collection: u
                            }, e)
                        }
                    }, t.handleSortMove = function(e) {
                        var n = t.props.onSortMove;
                        e.preventDefault(), t.updatePosition(e), t.animateNodes(), t.autoscroll(), n && n(e)
                    }, t.handleSortEnd = function(e) {
                        var n = t.props,
                            i = n.hideSortableGhost,
                            o = n.onSortEnd,
                            r = t.manager.active.collection;
                        t.listenerNode && (p.events.move.forEach(function(e) {
                            return t.listenerNode.removeEventListener(e, t.handleSortMove)
                        }), p.events.end.forEach(function(e) {
                            return t.listenerNode.removeEventListener(e, t.handleSortEnd)
                        })), t.helper.parentNode.removeChild(t.helper), i && t.sortableGhost && (t.sortableGhost.style.visibility = "", t.sortableGhost.style.opacity = "");
                        for (var a = t.manager.refs[r], l = 0, c = a.length; l < c; l++) {
                            var s = a[l],
                                d = s.node;
                            s.edgeOffset = null, d.style[p.vendorPrefix + "Transform"] = "", d.style[p.vendorPrefix + "TransitionDuration"] = ""
                        }
                        clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.manager.active = null, t.setState({
                            sorting: !1,
                            sortingIndex: null
                        }), "function" == typeof o && o({
                            oldIndex: t.index,
                            newIndex: t.newIndex,
                            collection: r
                        }, e), t._touched = !1
                    }, t.autoscroll = function() {
                        var e = t.translate,
                            n = {
                                x: 0,
                                y: 0
                            },
                            i = {
                                x: 1,
                                y: 1
                            },
                            o = {
                                x: 10,
                                y: 10
                            };
                        e.y >= t.maxTranslate.y - t.height / 2 ? (n.y = 1, i.y = o.y * Math.abs((t.maxTranslate.y - t.height / 2 - e.y) / t.height)) : e.x >= t.maxTranslate.x - t.width / 2 ? (n.x = 1, i.x = o.x * Math.abs((t.maxTranslate.x - t.width / 2 - e.x) / t.width)) : e.y <= t.minTranslate.y + t.height / 2 ? (n.y = -1, i.y = o.y * Math.abs((e.y - t.height / 2 - t.minTranslate.y) / t.height)) : e.x <= t.minTranslate.x + t.width / 2 && (n.x = -1, i.x = o.x * Math.abs((e.x - t.width / 2 - t.minTranslate.x) / t.width)), t.autoscrollInterval && (clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.isAutoScrolling = !1), 0 === n.x && 0 === n.y || (t.autoscrollInterval = setInterval(function() {
                            t.isAutoScrolling = !0;
                            var e = {
                                left: 1 * i.x * n.x,
                                top: 1 * i.y * n.y
                            };
                            t.scrollContainer.scrollTop += e.top, t.scrollContainer.scrollLeft += e.left, t.translate.x += e.left, t.translate.y += e.top, t.animateNodes()
                        }, 5))
                    }, t.manager = new u.default, t.events = {
                        start: t.handleStart,
                        move: t.handleMove,
                        end: t.handleEnd
                    }, (0, d.default)(!(e.distance && e.pressDelay), "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time."), t.state = {}, t
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
                }(n, t), r(n, [{
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
                            i = t.useWindowAsScrollContainer,
                            o = this.props.contentWindow || window;
                        this.container = "function" == typeof n ? n(this.getWrappedInstance()) : (0, s.findDOMNode)(this), this.document = this.container.ownerDocument || document, this.scrollContainer = i ? this.document.body : this.container, this.contentWindow = "function" == typeof o ? o() : o;
                        var r = function(t) {
                            e.events.hasOwnProperty(t) && p.events[t].forEach(function(n) {
                                return e.container.addEventListener(n, e.events[t], !1)
                            })
                        };
                        for (var a in this.events) r(a)
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
                        Array.isArray(e) || (e = [e, e]), (0, d.default)(2 === e.length, "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s", e);
                        var t = e,
                            n = o(t, 2),
                            i = n[0],
                            r = n[1];
                        return [this.getLockPixelOffset(i), this.getLockPixelOffset(r)]
                    }
                }, {
                    key: "getLockPixelOffset",
                    value: function(e) {
                        var t = e,
                            n = e,
                            i = "px";
                        if ("string" == typeof e) {
                            var o = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(e);
                            (0, d.default)(null !== o, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', e), t = n = parseFloat(e), i = o[1]
                        }
                        return (0, d.default)(isFinite(t) && isFinite(n), "lockOffset value should be a finite. Given %s", e), "%" === i && (t = t * this.width / 100, n = n * this.height / 100), {
                            x: t,
                            y: n
                        }
                    }
                }, {
                    key: "updatePosition",
                    value: function(e) {
                        var t = this.props,
                            n = t.lockAxis,
                            i = t.lockToContainerEdges,
                            r = this.getOffset(e),
                            a = {
                                x: r.x - this.initialOffset.x,
                                y: r.y - this.initialOffset.y
                            };
                        if (a.y -= window.pageYOffset - this.initialWindowScroll.top, a.x -= window.pageXOffset - this.initialWindowScroll.left, this.translate = a, i) {
                            var l = this.getLockPixelOffsets(),
                                c = o(l, 2),
                                s = c[0],
                                d = c[1],
                                u = {
                                    x: this.width / 2 - s.x,
                                    y: this.height / 2 - s.y
                                },
                                m = {
                                    x: this.width / 2 - d.x,
                                    y: this.height / 2 - d.y
                                };
                            a.x = (0, p.limit)(this.minTranslate.x + u.x, this.maxTranslate.x - m.x, a.x), a.y = (0, p.limit)(this.minTranslate.y + u.y, this.maxTranslate.y - m.y, a.y)
                        }
                        "x" === n ? a.y = 0 : "y" === n && (a.x = 0), this.helper.style[p.vendorPrefix + "Transform"] = "translate3d(" + a.x + "px," + a.y + "px, 0)"
                    }
                }, {
                    key: "animateNodes",
                    value: function() {
                        var e = this.props,
                            t = e.transitionDuration,
                            n = e.hideSortableGhost,
                            i = this.manager.getOrderedRefs(),
                            o = {
                                left: this.scrollContainer.scrollLeft - this.initialScroll.left,
                                top: this.scrollContainer.scrollTop - this.initialScroll.top
                            },
                            r = {
                                left: this.offsetEdge.left + this.translate.x + o.left,
                                top: this.offsetEdge.top + this.translate.y + o.top
                            },
                            a = {
                                top: window.pageYOffset - this.initialWindowScroll.top,
                                left: window.pageXOffset - this.initialWindowScroll.left
                            };
                        this.newIndex = null;
                        for (var l = 0, c = i.length; l < c; l++) {
                            var s = i[l].node,
                                d = s.sortableInfo.index,
                                u = s.offsetWidth,
                                m = s.offsetHeight,
                                f = {
                                    width: this.width > u ? u / 2 : this.width / 2,
                                    height: this.height > m ? m / 2 : this.height / 2
                                },
                                h = {
                                    x: 0,
                                    y: 0
                                },
                                v = i[l].edgeOffset;
                            v || (i[l].edgeOffset = v = this.getEdgeOffset(s));
                            var g = l < i.length - 1 && i[l + 1],
                                y = l > 0 && i[l - 1];
                            g && !g.edgeOffset && (g.edgeOffset = this.getEdgeOffset(g.node)), d !== this.index ? (t && (s.style[p.vendorPrefix + "TransitionDuration"] = t + "ms"), this.axis.x ? this.axis.y ? d < this.index && (r.left + a.left - f.width <= v.left && r.top + a.top <= v.top + f.height || r.top + a.top + f.height <= v.top) ? (h.x = this.width + this.marginOffset.x, v.left + h.x > this.containerBoundingRect.width - f.width && (h.x = g.edgeOffset.left - v.left, h.y = g.edgeOffset.top - v.top), null === this.newIndex && (this.newIndex = d)) : d > this.index && (r.left + a.left + f.width >= v.left && r.top + a.top + f.height >= v.top || r.top + a.top + f.height >= v.top + m) && (h.x = -(this.width + this.marginOffset.x), v.left + h.x < this.containerBoundingRect.left + f.width && (h.x = y.edgeOffset.left - v.left, h.y = y.edgeOffset.top - v.top), this.newIndex = d) : d > this.index && r.left + a.left + f.width >= v.left ? (h.x = -(this.width + this.marginOffset.x), this.newIndex = d) : d < this.index && r.left + a.left <= v.left + f.width && (h.x = this.width + this.marginOffset.x, null == this.newIndex && (this.newIndex = d)) : this.axis.y && (d > this.index && r.top + a.top + f.height >= v.top ? (h.y = -(this.height + this.marginOffset.y), this.newIndex = d) : d < this.index && r.top + a.top <= v.top + f.height && (h.y = this.height + this.marginOffset.y, null == this.newIndex && (this.newIndex = d))), s.style[p.vendorPrefix + "Transform"] = "translate3d(" + h.x + "px," + h.y + "px,0)") : n && (this.sortableGhost = s, s.style.visibility = "hidden", s.style.opacity = 0)
                        }
                        null == this.newIndex && (this.newIndex = this.index)
                    }
                }, {
                    key: "getWrappedInstance",
                    value: function() {
                        return (0, d.default)(m.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"), this.refs.wrappedInstance
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = m.withRef ? "wrappedInstance" : null;
                        return l.default.createElement(e, i({
                            ref: t
                        }, (0, p.omit)(this.props, "contentWindow", "useWindowAsScrollContainer", "distance", "helperClass", "hideSortableGhost", "transitionDuration", "useDragHandle", "pressDelay", "pressThreshold", "shouldCancelStart", "onSortStart", "onSortMove", "onSortEnd", "axis", "lockAxis", "lockOffset", "lockToContainerEdges", "getContainer", "getHelperDimensions")))
                    }
                }]), n
            }(a.Component), t.displayName = (0, p.provideDisplayName)("sortableList", e), t.defaultProps = {
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
        var a = n("GiK3"),
            l = m(a),
            c = m(n("qUKr")),
            s = n("O27J"),
            d = m(n("crWv")),
            u = m(n("xKuy")),
            p = n("Vgej");

        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e) {
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
    PelN: function(e, t) {},
    PwTO: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n("GiK3"),
            o = (n.n(i), n("Odds")),
            r = n("QmYP"),
            a = (n.n(r), function(e) {
                return i.createElement(o._8, {
                    className: "manager-card__stats-container",
                    display: o.R.Flex,
                    flexGrow: 0,
                    flexShrink: 0,
                    flexWrap: o.U.NoWrap,
                    flexDirection: o.T.Row,
                    alignItems: o.c.Center
                }, e.children)
            })
    },
    QG23: function(e, t, n) {
        var i = n("w1Jz"),
            o = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            var t = this.__data__;
            return i ? void 0 !== t[e] : o.call(t, e)
        }
    },
    QQy1: function(e, t, n) {
        var i = n("mG6l"),
            o = n("SCwa"),
            r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            a = /^\w*$/;
        e.exports = function(e, t) {
            if (i(e)) return !1;
            var n = typeof e;
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !o(e)) || a.test(e) || !r.test(e) || null != t && e in Object(t)
        }
    },
    QmYP: function(e, t) {},
    QxUn: function(e, t, n) {
        var i = n("w1Jz"),
            o = "__lodash_hash_undefined__";
        e.exports = function(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = i && void 0 === t ? o : t, this
        }
    },
    ROCN: function(e, t, n) {
        var i = n("idL5"),
            o = 500;
        e.exports = function(e) {
            var t = i(e, function(e) {
                    return n.size === o && n.clear(), e
                }),
                n = t.cache;
            return t
        }
    },
    Ro3v: function(e, t, n) {
        var i = n("0e1M"),
            o = n("Czj7");
        e.exports = function(e, t) {
            var n = -1,
                r = o(e) ? Array(e.length) : [];
            return i(e, function(e, i, o) {
                r[++n] = t(e, i, o)
            }), r
        }
    },
    SCwa: function(e, t, n) {
        var i = n("43dD"),
            o = n("VGcK"),
            r = "[object Symbol]";
        e.exports = function(e) {
            return "symbol" == typeof e || o(e) && i(e) == r
        }
    },
    SVcC: function(e, t, n) {
        var i = n("KYFq"),
            o = 1 / 0,
            r = 1.7976931348623157e308;
        e.exports = function(e) {
            return e ? (e = i(e)) === o || e === -o ? (e < 0 ? -1 : 1) * r : e == e ? e : 0 : 0 === e ? e : 0
        }
    },
    SjFU: function(e, t, n) {
        var i = n("+cPc"),
            o = n("Fbrx"),
            r = n("F3kA"),
            a = n("mG6l"),
            l = n("JYjH");
        e.exports = function(e) {
            return "function" == typeof e ? e : null == e ? r : "object" == typeof e ? a(e) ? o(e[0], e[1]) : i(e) : l(e)
        }
    },
    Snvs: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("GiK3"),
            r = n("3zLD"),
            a = n("6sO2"),
            l = n("7vx8"),
            c = n("CSlQ"),
            s = n("acVP"),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        loading: !0,
                        permitted: !1,
                        roles: {
                            staff: !1,
                            editor: !1,
                            owner: !1
                        },
                        error: null
                    }, t.logger = a.j.withCategory("role-restricted"), t
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = p(e),
                        n = {
                            loading: e.data.loading,
                            permitted: u(t, e.permittedRoles),
                            roles: t,
                            error: null
                        };
                    e.data.error ? (n.error = new Error(e.data.error.toString()), this.logger.warn("Unable to retrieve data from GraphQL.", {
                        err: n.error
                    })) : e.data.loading || e.data.user && e.data.currentUser || (n.error = new Error("Failed to fetch user information"), this.logger.warn("Failed to fetch user information.", {
                        err: n.error
                    })), this.setState(n)
                }, t.prototype.render = function() {
                    return this.props.children(this.state)
                }, t
            }(o.Component);

        function u(e, t) {
            return !!e.owner || (!(!e.staff || !t.staff) || !(!e.editor || !t.editor))
        }

        function p(e) {
            var t = e.data,
                n = {
                    staff: !1,
                    editor: !1,
                    owner: !1
                };
            return !t.error && !t.loading && t.user && t.currentUser && (n.staff = !(!t.currentUser.roles || !t.currentUser.roles.isStaff), n.editor = !(!t.user.self || !t.user.self.isEditor), n.owner = t.user.id === t.currentUser.id), n
        }
        var m = Object(r.compose)(Object(l.a)(s, {
            options: function(e) {
                return {
                    variables: {
                        contentOwnerLogin: e.ownerLogin
                    }
                }
            }
        }), Object(c.d)("RoleRestricted"))(d);
        n.d(t, !1, function() {
            return d
        }), n.d(t, !1, function() {
            return u
        }), n.d(t, !1, function() {
            return p
        }), n.d(t, "a", function() {
            return m
        })
    },
    U2kw: function(e, t, n) {
        var i = n("43dD"),
            o = n("kl/u"),
            r = "[object AsyncFunction]",
            a = "[object Function]",
            l = "[object GeneratorFunction]",
            c = "[object Proxy]";
        e.exports = function(e) {
            if (!o(e)) return !1;
            var t = i(e);
            return t == a || t == l || t == r || t == c
        }
    },
    "UT8+": function(e, t) {
        e.exports = function(e) {
            var t = this.__data__,
                n = t.delete(e);
            return this.size = t.size, n
        }
    },
    VEC5: function(e, t) {
        e.exports = function(e, t, n, i) {
            for (var o = e.length, r = n + (i ? 1 : -1); i ? r-- : ++r < o;)
                if (t(e[r], r, e)) return r;
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
            var i = e.slice(0);
            if (n >= i.length)
                for (var o = n - i.length; 1 + o--;) i.push(void 0);
            return i.splice(n, 0, i.splice(t, 1)[0]), i
        }, t.omit = function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            return Object.keys(e).reduce(function(t, i) {
                return -1 === n.indexOf(i) && (t[i] = e[i]), t
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
                top: i(t.marginTop),
                right: i(t.marginRight),
                bottom: i(t.marginBottom),
                left: i(t.marginLeft)
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

        function i(e) {
            return "px" === e.substr(-2) ? parseFloat(e) : 0
        }
    },
    VoT2: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CollectionItemCard_CurrentUser"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 59
            }
        };
        n.loc.source = {
            body: "query CollectionItemCard_CurrentUser {\ncurrentUser {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    WFpE: function(e, t, n) {
        var i = n("SCwa");
        e.exports = function(e, t) {
            if (e !== t) {
                var n = void 0 !== e,
                    o = null === e,
                    r = e == e,
                    a = i(e),
                    l = void 0 !== t,
                    c = null === t,
                    s = t == t,
                    d = i(t);
                if (!c && !d && !a && e > t || a && l && s && !c && !d || o && l && s || !n && s || !r) return 1;
                if (!o && !a && !d && e < t || d && n && r && !o && !a || c && n && r || !l && r || !s) return -1
            }
            return 0
        }
    },
    WlEI: function(e, t) {
        e.exports = function() {
            return !1
        }
    },
    YNJY: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
            return i
        }
    },
    YOyG: function(e, t, n) {
        var i = n("y5ks"),
            o = n("usEs"),
            r = n("skb1"),
            a = r && r.isTypedArray,
            l = a ? o(a) : i;
        e.exports = l
    },
    Z8qZ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("GiK3"),
            r = n("Odds"),
            a = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(r._35, {
                        background: r.n.Base,
                        elevation: 1,
                        display: r.R.Flex,
                        flexDirection: r.T.Row,
                        alignItems: r.c.Stretch
                    }, this.props.children)
                }, t
            }(o.Component);
        n.d(t, "a", function() {
            return a
        })
    },
    Zfct: function(e, t, n) {
        var i = n("oDbm"),
            o = n("Bh6c"),
            r = n("9nrn");
        e.exports = function() {
            this.size = 0, this.__data__ = {
                hash: new i,
                map: new(r || o),
                string: new i
            }
        }
    },
    "a/6q": function(e, t, n) {
        var i = n("DRNv");
        e.exports = function(e) {
            return i(this, e).has(e)
        }
    },
    aIUG: function(e, t, n) {
        var i = n("mG6l"),
            o = n("QQy1"),
            r = n("D4QM"),
            a = n("kdNP");
        e.exports = function(e, t) {
            return i(e) ? e : o(e, t) ? [e] : r(a(e))
        }
    },
    acVP: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "RoleRestricted"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "contentOwnerLogin"
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
                                    }]
                                }
                            }]
                        }
                    }, {
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
                                    value: "contentOwnerLogin"
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
                                            value: "isEditor"
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
                end: 147
            }
        };
        n.loc.source = {
            body: "query RoleRestricted($contentOwnerLogin: String!) {\ncurrentUser {\nid\nroles {\nisStaff\n}\n}\nuser(login: $contentOwnerLogin) {\nid\nself {\nisEditor\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    am5H: function(e, t, n) {
        var i = n("kl/u");
        e.exports = function(e) {
            return e == e && !i(e)
        }
    },
    bKut: function(e, t, n) {
        "use strict";
        n("dL0Y")
    },
    bL9o: function(e, t, n) {
        var i = n("t3nn"),
            o = n("9nrn"),
            r = n("uS5W"),
            a = n("57tO"),
            l = n("FvmC"),
            c = n("43dD"),
            s = n("NuOc"),
            d = s(i),
            u = s(o),
            p = s(r),
            m = s(a),
            f = s(l),
            h = c;
        (i && "[object DataView]" != h(new i(new ArrayBuffer(1))) || o && "[object Map]" != h(new o) || r && "[object Promise]" != h(r.resolve()) || a && "[object Set]" != h(new a) || l && "[object WeakMap]" != h(new l)) && (h = function(e) {
            var t = c(e),
                n = "[object Object]" == t ? e.constructor : void 0,
                i = n ? s(n) : "";
            if (i) switch (i) {
                case d:
                    return "[object DataView]";
                case u:
                    return "[object Map]";
                case p:
                    return "[object Promise]";
                case m:
                    return "[object Set]";
                case f:
                    return "[object WeakMap]"
            }
            return t
        }), e.exports = h
    },
    bdk8: function(e, t) {},
    bhVC: function(e, t, n) {
        "use strict";
        var i = n("8Wuk");
        n.d(t, "a", function() {
            return i.a
        }), n.d(t, "b", function() {
            return i.b
        })
    },
    btUQ: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CollectionEditor_UpdateCollection"
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
                                value: "UpdateCollectionInput"
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
                            value: "updateCollection"
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
                                    value: "collection"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "collectionFields"
                                        },
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "itemConnection"
                                        },
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
                end: 410
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/collection-fragment.gql"\n#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/item-connection-fragment.gql"\nmutation CollectionEditor_UpdateCollection($input: UpdateCollectionInput!) {\nupdateCollection(input: $input) {\ncollection {\n...collectionFields\n...itemConnection\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var o = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !o[t] && (o[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("OEl7").definitions)), i.definitions = i.definitions.concat(r(n("9Gwb").definitions)), e.exports = i
    },
    cAee: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.c = function e(t, n, i) {
            return o.__awaiter(this, void 0, void 0, function() {
                var c, d, u, p;
                return o.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]), [4, i.query({
                                query: s,
                                variables: {
                                    videoID: t.id
                                }
                            })];
                        case 1:
                            return c = o.sent().data, d = function(e, t) {
                                return {
                                    id: e.id,
                                    owner: t.owner,
                                    broadcastType: t.broadcastType,
                                    game: t.game
                                }
                            }(t, c.video), u = {
                                channel: d.owner ? d.owner.login : null,
                                channel_id: Number(t.owner.id),
                                game: d.game ? d.game.name : null,
                                partner: !!d.owner && d.owner.roles.isPartner,
                                location: n.location,
                                share_context: n.collectionID ? a.ShareItemContext.Collection : null,
                                share_platform: n.platform,
                                shared_item_id: n.collectionID ? n.collectionID : d.id,
                                shared_item_type: n.collectionID ? a.ShareItemType.Collection : Object(l.a)(d.broadcastType),
                                shared_item_url: n.shareURL,
                                source_item_id: d.id,
                                source_item_type: Object(l.a)(d.broadcastType)
                            }, r.o.tracking.track(a.SpadeEventType.ShareItem, u), [3, 3];
                        case 2:
                            return p = o.sent(), r.j.error(p.toString(), e.name), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        }, t.b = function e(t, n, i) {
            return o.__awaiter(this, void 0, void 0, function() {
                var l, s, d;
                return o.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]), [4, i.query({
                                query: c,
                                variables: {
                                    creatorID: t.owner.id
                                }
                            })];
                        case 1:
                            return l = o.sent().data, s = {
                                channel: l.user ? l.user.login : null,
                                channel_id: Number(t.owner.id),
                                game: null,
                                partner: !!l.user && l.user.roles.isPartner,
                                location: n.location,
                                share_context: null,
                                share_platform: n.platform,
                                shared_item_id: t.id,
                                shared_item_type: a.ShareItemType.Collection,
                                shared_item_url: n.shareURL,
                                source_item_id: t.id,
                                source_item_type: a.SourceItemType.Collection
                            }, r.o.tracking.track(a.SpadeEventType.ShareItem, s), [3, 3];
                        case 2:
                            return d = o.sent(), r.j.error(d.toString(), e.name), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        };
        var i, o = n("TToO"),
            r = n("6sO2"),
            a = n("vH/s"),
            l = n("xrVp"),
            c = n("mvQ0"),
            s = (n.n(c), n("164Z"));
        n.n(s);
        ! function(e) {
            e.Copy = "link", e.Embed = "option_embed", e.Facebook = "fb", e.Link = "option_link", e.Reddit = "reddit", e.Twitter = "twitter", e.Unknown = "", e.VKontakte = "vk", e.Download = "download"
        }(i || (i = {}))
    },
    cXqt: function(e, t, n) {
        var i = n("ymQA"),
            o = n("o3xN"),
            r = n("2urJ");

        function a(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.__data__ = new i; ++t < n;) this.add(e[t])
        }
        a.prototype.add = a.prototype.push = o, a.prototype.has = r, e.exports = a
    },
    cjOD: function(e, t) {
        var n = 9007199254740991,
            i = /^(?:0|[1-9]\d*)$/;
        e.exports = function(e, t) {
            return !!(t = null == t ? n : t) && ("number" == typeof e || i.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
    },
    dAJe: function(e, t) {},
    dL0Y: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.collections.containingCollections
        };
        var i = n("TToO"),
            o = n("6sO2"),
            r = n("B9Px");
        o.o.store.registerReducer("collections", function(e, t) {
            switch (void 0 === e && (e = {
                collections: [],
                videoID: "",
                containingCollections: [],
                errors: {}
            }), t.type) {
                case r.a:
                    return i.__assign({}, e, {
                        collections: t.collections
                    });
                case r.b:
                    return i.__assign({}, e, {
                        videoID: t.videoID,
                        containingCollections: t.containingCollections
                    });
                case r.c:
                    return i.__assign({}, e, {
                        errors: i.__assign({}, e.errors, (n = {}, n[t.errorType] = t.errorMessage, n))
                    });
                default:
                    return e
            }
            var n
        })
    },
    e6eF: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CollectionManager_DeleteCollection"
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
                                value: "DeleteCollectionInput"
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
                            value: "deleteCollection"
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
                                    value: "collection"
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
                end: 133
            }
        };
        n.loc.source = {
            body: "mutation CollectionManager_DeleteCollection($input: DeleteCollectionInput!) {\ndeleteCollection(input: $input) {\ncollection {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    eGfi: function(e, t, n) {
        var i = n("uIws");
        e.exports = function(e, t) {
            var n = this.__data__,
                o = i(n, e);
            return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this
        }
    },
    eWqu: function(e, t, n) {
        var i = n("CTFd"),
            o = n("HMFB");
        e.exports = function(e, t) {
            return e && i(e, t, o)
        }
    },
    eXGG: function(e, t, n) {
        "use strict";
        var i = function(e) {};
        e.exports = function(e, t, n, o, r, a, l, c) {
            if (i(t), !e) {
                var s;
                if (void 0 === t) s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var d = [n, o, r, a, l, c],
                        u = 0;
                    (s = new Error(t.replace(/%s/g, function() {
                        return d[u++]
                    }))).name = "Invariant Violation"
                }
                throw s.framesToPop = 1, s
            }
        }
    },
    enQx: function(e, t) {
        e.exports = function(e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
        }
    },
    f6Cj: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return Object(i.a)(o, {
                u: e
            })
        }, t.c = function(e, t) {
            return Object(i.a)(r, {
                url: e,
                text: t
            })
        }, t.b = function(e, t) {
            return Object(i.a)(a, {
                url: e,
                title: t
            })
        }, t.d = function(e) {
            return Object(i.a)(l, {
                url: e
            })
        };
        var i = n("yDzg"),
            o = "https://www.facebook.com/sharer/sharer.php",
            r = "https://www.twitter.com/share",
            a = "https://www.reddit.com/submit",
            l = "https://vk.com/share.php"
    },
    fXkM: function(e, t) {
        e.exports = function(e, t) {
            return null != e && t in Object(e)
        }
    },
    "g/lL": function(e, t, n) {
        var i = n("INOA"),
            o = n("mG6l");
        e.exports = function(e, t, n) {
            var r = t(e);
            return o(e) ? r : i(r, n(e))
        }
    },
    gDYr: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CollectionEditor_RemoveCollectionItem"
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
                                value: "RemoveCollectionItemInput"
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
                            value: "removeCollectionItem"
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
                                    value: "collection"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "collectionFields"
                                        },
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "itemConnection"
                                        },
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
                end: 422
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/collection-fragment.gql"\n#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/item-connection-fragment.gql"\nmutation CollectionEditor_RemoveCollectionItem($input: RemoveCollectionItemInput!) {\nremoveCollectionItem(input: $input) {\ncollection {\n...collectionFields\n...itemConnection\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var o = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !o[t] && (o[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("OEl7").definitions)), i.definitions = i.definitions.concat(r(n("9Gwb").definitions)), e.exports = i
    },
    gKqb: function(e, t, n) {
        var i = n("Bh6c"),
            o = n("2EIm"),
            r = n("UT8+"),
            a = n("9GW9"),
            l = n("PWbw"),
            c = n("M0TM");

        function s(e) {
            var t = this.__data__ = new i(e);
            this.size = t.size
        }
        s.prototype.clear = o, s.prototype.delete = r, s.prototype.get = a, s.prototype.has = l, s.prototype.set = c, e.exports = s
    },
    gfva: function(e, t, n) {
        var i = n("SVcC");
        e.exports = function(e) {
            var t = i(e),
                n = t % 1;
            return t == t ? n ? t - n : t : 0
        }
    },
    gpuH: function(e, t) {},
    h5eQ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        });
        var i, o = n("GiK3"),
            r = (n.n(o), n("6sO2")),
            a = n("mi6k"),
            l = n("Odds");
        ! function(e) {
            e[e.Metadata = 0] = "Metadata", e[e.Overlay = 1] = "Overlay"
        }(i || (i = {}));
        var c = function(e) {
                var t, n = Object(a.b)(e.video.lengthSeconds);
                return t = e.video.publishedAt ? o.createElement(l.Q, {
                    fontSize: l.V.Size7
                }, Object(r.c)(new Date(e.video.publishedAt), "medium"), o.createElement("span", null, " · "), n) : o.createElement(l.Q, {
                    fontSize: l.V.Size7
                }, n), o.createElement(l._8, {
                    alignItems: l.c.Stretch,
                    display: l.R.Flex,
                    flexDirection: l.T.Row,
                    flexGrow: 1,
                    padding: .5
                }, o.createElement(l._8, {
                    flexGrow: 0,
                    flexShrink: 0,
                    position: l._15.Relative
                }, o.createElement(l.E, {
                    alt: e.video.title,
                    aspect: l.l.Aspect16x9,
                    size: l.F.Size8,
                    src: e.video.previewThumbnailURL
                }), s(e.selected)), o.createElement(l._8, {
                    alignItems: l.c.Start,
                    display: l.R.Flex,
                    flexDirection: l.T.Column,
                    flexGrow: 1,
                    flexShrink: 1,
                    justifyContent: l._7.Center,
                    padding: {
                        x: 1
                    },
                    overflow: l._11.Hidden
                }, o.createElement(l._8, {
                    fullWidth: !0,
                    overflow: l._11.Hidden
                }, o.createElement(l.Q, {
                    type: l._49.H3,
                    fontSize: l.V.Size6,
                    title: e.video.title,
                    ellipsis: !0
                }, e.video.title)), o.createElement("div", {
                    "data-test-selector": i.Metadata
                }, t)))
            },
            s = function(e) {
                return e ? o.createElement(l._35, {
                    background: l.n.Overlay,
                    attachTop: !0,
                    attachLeft: !0,
                    fullWidth: !0,
                    fullHeight: !0,
                    position: l._15.Absolute,
                    alignItems: l.c.Center,
                    "data-test-selector": i.Overlay,
                    display: l.R.Flex,
                    flexDirection: l.T.Column,
                    justifyContent: l._7.Center
                }, o.createElement(l._24, {
                    asset: l._25.Check
                })) : null
            }
    },
    i4TT: function(e, t, n) {
        var i = n("VEC5"),
            o = n("SjFU"),
            r = n("gfva"),
            a = Math.max;
        e.exports = function(e, t, n) {
            var l = null == e ? 0 : e.length;
            if (!l) return -1;
            var c = null == n ? 0 : r(n);
            return c < 0 && (c = a(l + c, 0)), i(e, o(t, 3), c)
        }
    },
    i61F: function(e, t, n) {
        "use strict";
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
        var o = l(n("P/Wu")),
            r = l(n("yauq")),
            a = l(n("tslQ"));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.SortableContainer = o.default, t.SortableElement = r.default, t.SortableHandle = a.default, t.sortableContainer = o.default, t.sortableElement = r.default, t.sortableHandle = a.default
    },
    iAlu: function(e, t, n) {
        var i = n("ndFl"),
            o = n("0zkw")(i);
        e.exports = o
    },
    iLYB: function(e, t, n) {
        var i = n("uIws"),
            o = Array.prototype.splice;
        e.exports = function(e) {
            var t = this.__data__,
                n = i(t, e);
            return !(n < 0 || (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, 0))
        }
    },
    idL5: function(e, t, n) {
        var i = n("ymQA"),
            o = "Expected a function";

        function r(e, t) {
            if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(o);
            var n = function() {
                var i = arguments,
                    o = t ? t.apply(this, i) : i[0],
                    r = n.cache;
                if (r.has(o)) return r.get(o);
                var a = e.apply(this, i);
                return n.cache = r.set(o, a) || r, a
            };
            return n.cache = new(r.Cache || i), n
        }
        r.Cache = i, e.exports = r
    },
    j5vp: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CollectionEditor_SearchCreatorVideos"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "creatorID"
                        }
                    },
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "collectionID"
                        }
                    },
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "after"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Cursor"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "search"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "VideoConnectionSearchParams"
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
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "creatorID"
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
                                    value: "searchVideos"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "6"
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
                                            value: "after"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "search"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "search"
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
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "SearchCardVideo"
                                                        },
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
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "collection"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "collectionID"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "options"
                            },
                            value: {
                                kind: "ObjectValue",
                                fields: [{
                                    kind: "ObjectField",
                                    name: {
                                        kind: "Name",
                                        value: "includeAllItems"
                                    },
                                    value: {
                                        kind: "BooleanValue",
                                        value: !0
                                    }
                                }]
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "collectionFields"
                                },
                                directives: []
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "itemConnection"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 713
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-search-card/models/search-card-video.gql"\n#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/collection-fragment.gql"\n#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/item-connection-fragment.gql"\nquery CollectionEditor_SearchCreatorVideos($creatorID: ID! $collectionID: ID! $after: Cursor $search: VideoConnectionSearchParams) {\nuser(id: $creatorID) {\nid\nsearchVideos(first: 6 after: $after search: $search) {\nedges {\ncursor\nnode {\n...SearchCardVideo\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\ncollection(id: $collectionID options: { includeAllItems: true}) {\n...collectionFields\n...itemConnection\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var o = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !o[t] && (o[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("y+8p").definitions)), i.definitions = i.definitions.concat(r(n("OEl7").definitions)), i.definitions = i.definitions.concat(r(n("9Gwb").definitions)), e.exports = i
    },
    jOt7: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ShareVideo_Content"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoID"
                        }
                    },
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "collectionID"
                        }
                    },
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "hasVideo"
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
                            value: "hasCollection"
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
                            value: "video"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "videoID"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "options"
                            },
                            value: {
                                kind: "ObjectValue",
                                fields: [{
                                    kind: "ObjectField",
                                    name: {
                                        kind: "Name",
                                        value: "includePrivate"
                                    },
                                    value: {
                                        kind: "BooleanValue",
                                        value: !0
                                    }
                                }]
                            }
                        }],
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
                                        value: "hasVideo"
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
                                    value: "title"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "collection"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "collectionID"
                                }
                            }
                        }],
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
                                        value: "hasCollection"
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
                                    value: "title"
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
                end: 451
            }
        };
        n.loc.source = {
            body: "query ShareVideo_Content($videoID: ID! $collectionID: ID! $hasVideo: Boolean! $hasCollection: Boolean!) {\n# If the page specifies a video ID query it directly.\nvideo(id: $videoID options: { includePrivate: true }) @include(if: $hasVideo) {\nid\nowner {\nid\ndisplayName\n}\ntitle\n}\n# If the page is a collection page grab the first video from the collection.\ncollection(id: $collectionID) @include(if: $hasCollection) {\nid\nowner {\nid\ndisplayName\n}\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jXn2: function(e, t, n) {
        "use strict";
        t.b = function(e) {
            i.n.track(o.SpadeEventType.CollectionCreate, {
                channel_id: e.channelID,
                playlist_id: e.playlistID,
                user_id: e.userID,
                title: e.title
            })
        }, t.a = function(e) {
            i.n.track(o.SpadeEventType.CollectionAddItem, {
                channel_id: e.channelID,
                item_id: e.itemID,
                item_position: e.itemPosition,
                item_type: e.itemType,
                playlist_id: e.playlistID,
                user_id: e.userID
            })
        }, t.c = function(e) {
            i.n.track(o.SpadeEventType.CollectionRemoveItem, {
                channel_id: e.channelID,
                item_id: e.itemID,
                item_position: e.itemPosition,
                item_type: e.itemType,
                playlist_id: e.playlistID,
                user_id: e.userID
            })
        };
        var i = n("6sO2"),
            o = n("vH/s")
    },
    jZyZ: function(e, t) {
        e.exports = function(e, t) {
            return e.has(t)
        }
    },
    jcM9: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("3zLD"),
            r = n("6sO2"),
            a = n("zAjo"),
            l = n("sJBK"),
            c = n("jOt7");

        function s(e) {
            return e.owner && e.title ? {
                type: l.a.Video,
                id: e.id,
                owner: {
                    id: e.owner.id,
                    displayName: e.owner.displayName
                },
                title: e.title
            } : null
        }
        var d = Object(o.compose)(Object(o.graphql)(c, {
            options: function(e) {
                var t = e.content;
                return t ? {
                    variables: {
                        collectionID: t.collectionID || "",
                        hasCollection: !!t.collectionID,
                        hasVideo: !!t.videoID,
                        videoID: t.videoID || ""
                    }
                } : {
                    variables: {
                        collectionID: "",
                        hasCollection: !1,
                        hasVideo: !1,
                        videoID: ""
                    }
                }
            },
            props: function(e) {
                var t = i.__assign({}, e, {
                        content: void 0
                    }),
                    n = e.data;
                return n.loading ? t : n.error ? (r.j.error(n.error, "VideoShareBoxContainer"), t) : (n.collection ? t.content = function(e, t) {
                    var n;
                    if (t) {
                        var i = s(t);
                        if (!i) return null;
                        n = i
                    }
                    return e.owner && e.title ? {
                        type: l.a.Collection,
                        id: e.id,
                        owner: {
                            id: e.owner.id,
                            displayName: e.owner.displayName
                        },
                        title: e.title,
                        currentVideo: n
                    } : null
                }(n.collection, n.video) || void 0 : n.video && (t.content = s(n.video) || void 0), t)
            }
        }))(a.a);
        n.d(t, "a", function() {
            return d
        }), n.d(t, !1, function() {
            return l.a
        }), n.d(t, !1, function() {})
    },
    k6Ms: function(e, t, n) {
        var i = n("1nXM"),
            o = 1,
            r = Object.prototype.hasOwnProperty;
        e.exports = function(e, t, n, a, l, c) {
            var s = n & o,
                d = i(e),
                u = d.length;
            if (u != i(t).length && !s) return !1;
            for (var p = u; p--;) {
                var m = d[p];
                if (!(s ? m in t : r.call(t, m))) return !1
            }
            var f = c.get(e);
            if (f && c.get(t)) return f == t;
            var h = !0;
            c.set(e, t), c.set(t, e);
            for (var v = s; ++p < u;) {
                var g = e[m = d[p]],
                    y = t[m];
                if (a) var k = s ? a(y, g, m, t, e, c) : a(g, y, m, e, t, c);
                if (!(void 0 === k ? g === y || l(g, y, n, a, c) : k)) {
                    h = !1;
                    break
                }
                v || (v = "constructor" == m)
            }
            if (h && !v) {
                var b = e.constructor,
                    C = t.constructor;
                b != C && "constructor" in e && "constructor" in t && !("function" == typeof b && b instanceof b && "function" == typeof C && C instanceof C) && (h = !1)
            }
            return c.delete(e), c.delete(t), h
        }
    },
    kdNP: function(e, t, n) {
        var i = n("sa46");
        e.exports = function(e) {
            return null == e ? "" : i(e)
        }
    },
    kjxi: function(e, t, n) {
        var i = n("NDrF"),
            o = function() {
                try {
                    var e = i(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch (e) {}
            }();
        e.exports = o
    },
    kk4f: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            o = n("2KeS"),
            r = n("Aj/L"),
            a = n("B9Px"),
            l = (n("bKut"), n("TToO")),
            c = n("GiK3"),
            s = n("6sO2"),
            d = n("mi6k"),
            u = n("CSlQ"),
            p = n("Odds"),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChangeHandler = function() {
                        return t.props.onSelected(t.props.collection)
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(p._8, {
                        display: p.R.Flex
                    }, c.createElement(p._8, {
                        padding: 2
                    }, c.createElement(p.J, {
                        label: "",
                        onChange: this.onChangeHandler,
                        checked: this.props.videoIsInCollection
                    })), c.createElement(p._8, {
                        padding: 1
                    }, c.createElement(p.E, {
                        aspect: p.l.Aspect16x9,
                        alt: this.props.collection.title,
                        src: this.props.collection.thumbnailSrc || "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                        size: p.F.Size8
                    })), c.createElement(p._8, {
                        padding: 1,
                        display: p.R.Flex,
                        flexDirection: p.T.Column
                    }, c.createElement(p._8, null, c.createElement(p.Q, {
                        ellipsis: !0
                    }, this.props.collection.title)), c.createElement(p._8, {
                        display: p.R.Flex
                    }, c.createElement(p._8, {
                        padding: {
                            right: 1
                        }
                    }, c.createElement(p.Q, null, Object(s.d)("{videoCount} video", {
                        videoCount: this.props.collection.itemsCount
                    }, "CollectionRowPresentation"))), c.createElement(p._8, {
                        padding: {
                            x: 1
                        }
                    }, c.createElement(p.Q, null, "·")), c.createElement(p._8, {
                        padding: {
                            left: 1
                        }
                    }, c.createElement(p.Q, null, Object(d.b)(this.props.collection.totalDuration))))))
                }, t
            }(c.Component),
            f = Object(u.d)("CollectionRow")(m),
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.onCollectionRowChange = function(e) {
                        t.props.updateItemInCollection(e, t.props.videoID, t.props.channelID)
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.channelID && this.props.videoID && this.props.fetchCollectionsForVideo(this.props.channelID, this.props.videoID)
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.channelID && this.props.videoID && this.props.collections ? c.createElement(p._8, null, this.props.collections.map(function(t) {
                        return c.createElement(f, {
                            key: t.id,
                            collection: t,
                            videoIsInCollection: e.props.containingCollections.map(function(e) {
                                return e.id
                            }).indexOf(t.id) > -1,
                            onSelected: e.onCollectionRowChange
                        })
                    })) : c.createElement(p._8, null)
                }, t
            }(c.Component),
            v = Object(u.d)("CollectionsListPresentation")(h);
        var g, y = Object(i.b)(function(e) {
                return {
                    isLoggedIn: Object(r.d)(e),
                    collections: e.collections.collections,
                    containingCollections: e.collections.containingCollections
                }
            }, function(e) {
                return Object(o.b)({
                    fetchCollectionsForVideo: a.e,
                    updateItemInCollection: a.f
                }, e)
            })(v),
            k = n("zDSl"),
            b = n.n(k);
        n("PelN");
        ! function(e) {
            e[e.VideoCountOverlayText = 0] = "VideoCountOverlayText"
        }(g || (g = {}));
        var C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        imageLoadError: !1
                    }, t.onErrorHandler = function() {
                        t.props.latencyTracking.reportInteractive(), t.setState({
                            imageLoadError: !0
                        })
                    }, t.onLoadHandler = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e, t, n = null;
                    return "number" == typeof this.props.videoCount && (n = c.createElement(p._8, {
                        position: p._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0
                    }, c.createElement(p._35, {
                        alignItems: p.c.Center,
                        attachRight: !0,
                        className: "collection-preview-image__wrapper",
                        color: p.K.Overlay,
                        display: p.R.InlineFlex,
                        flexDirection: p.T.Column,
                        fontSize: p.V.Size5,
                        fullHeight: !0,
                        justifyContent: p._7.Center,
                        position: p._15.Absolute,
                        textAlign: p._45.Center
                    }, c.createElement(p._24, {
                        asset: p._25.Collections,
                        height: 19,
                        width: 19
                    }), c.createElement(p.Q, {
                        "data-test-selector": g.VideoCountOverlayText
                    }, Object(s.d)("{videoCount, plural, one {# video} other {# videos}}", {
                        videoCount: this.props.videoCount.toString()
                    }, "CollectionCard"))))), !this.props.src || this.state.imageLoadError ? (e = b.a, t = {
                        "320w": b.a
                    }) : (e = this.props.src, t = this.props.srcSet), c.createElement(p._8, {
                        position: p._15.Relative
                    }, c.createElement(p.N, {
                        alt: this.props.alt,
                        onError: this.onErrorHandler,
                        onLoad: this.onLoadHandler,
                        src: e,
                        srcSet: t,
                        sizes: this.props.sizes
                    }), n)
                }, t
            }(c.Component),
            _ = Object(u.d)("CollectionPreviewImage")(C);
        n.d(t, "b", function() {
            return y
        }), n.d(t, "a", function() {
            return _
        })
    },
    "kl/u": function(e, t) {
        e.exports = function(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
    },
    "kt/X": function(e, t) {},
    m2wS: function(e, t) {
        e.exports = function(e) {
            return function(t) {
                return null == t ? void 0 : t[e]
            }
        }
    },
    mAEY: function(e, t, n) {
        var i = n("JGv7"),
            o = n("H3TN"),
            r = n("mG6l"),
            a = i ? i.isConcatSpreadable : void 0;
        e.exports = function(e) {
            return r(e) || o(e) || !!(a && e && e[a])
        }
    },
    mG6l: function(e, t) {
        var n = Array.isArray;
        e.exports = n
    },
    mPnA: function(e, t, n) {
        (function(e) {
            var i = n("MygC"),
                o = n("WlEI"),
                r = "object" == typeof t && t && !t.nodeType && t,
                a = r && "object" == typeof e && e && !e.nodeType && e,
                l = a && a.exports === r ? i.Buffer : void 0,
                c = (l ? l.isBuffer : void 0) || o;
            e.exports = c
        }).call(t, n("3IRH")(e))
    },
    mvQ0: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoShareBox_CollectionTrackingMeta"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "creatorID"
                        }
                    },
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
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "creatorID"
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
                                            value: "isPartner"
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
            body: "query VideoShareBox_CollectionTrackingMeta($creatorID: ID!) {\nuser(id: $creatorID) {\nid\nlogin\nroles {\nisPartner\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    n8KP: function(e, t, n) {
        var i = n("am5H"),
            o = n("HMFB");
        e.exports = function(e) {
            for (var t = o(e), n = t.length; n--;) {
                var r = t[n],
                    a = e[r];
                t[n] = [r, a, i(a)]
            }
            return t
        }
    },
    ndFl: function(e, t, n) {
        var i = n("NSoo"),
            o = n("kjxi"),
            r = n("F3kA"),
            a = o ? function(e, t) {
                return o(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: i(t),
                    writable: !0
                })
            } : r;
        e.exports = a
    },
    o3xN: function(e, t) {
        var n = "__lodash_hash_undefined__";
        e.exports = function(e) {
            return this.__data__.set(e, n), this
        }
    },
    oDbm: function(e, t, n) {
        var i = n("pgw8"),
            o = n("BaEo"),
            r = n("8xms"),
            a = n("QG23"),
            l = n("QxUn");

        function c(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var i = e[t];
                this.set(i[0], i[1])
            }
        }
        c.prototype.clear = i, c.prototype.delete = o, c.prototype.get = r, c.prototype.has = a, c.prototype.set = l, e.exports = c
    },
    "p+QF": function(e, t) {
        var n = Object.prototype;
        e.exports = function(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || n)
        }
    },
    pLne: function(e, t, n) {
        var i = n("//bJ"),
            o = n("v6CG"),
            r = Object.prototype.propertyIsEnumerable,
            a = Object.getOwnPropertySymbols,
            l = a ? function(e) {
                return null == e ? [] : (e = Object(e), i(a(e), function(t) {
                    return r.call(e, t)
                }))
            } : o;
        e.exports = l
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
        var i = n("w1Jz");
        e.exports = function() {
            this.__data__ = i ? i(null) : {}, this.size = 0
        }
    },
    pi7n: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CollectionEditor_ReorderCollectionItem"
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
                                value: "ReorderCollectionItemInput"
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
                            value: "reorderCollectionItem"
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
                                    value: "collection"
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
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "itemConnection"
                                        },
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
                end: 289
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/item-connection-fragment.gql"\nmutation CollectionEditor_ReorderCollectionItem($input: ReorderCollectionItemInput!) {\nreorderCollectionItem(input: $input) {\ncollection {\nid\n...itemConnection\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var o = {};
        i.definitions = i.definitions.concat(n("9Gwb").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !o[t] && (o[t] = !0, !0)
        })), e.exports = i
    },
    qUKr: function(e, t, n) {
        e.exports = n("xkKI")()
    },
    qu3O: function(e, t, n) {
        var i = n("cXqt"),
            o = n("BALR"),
            r = n("jZyZ"),
            a = 1,
            l = 2;
        e.exports = function(e, t, n, c, s, d) {
            var u = n & a,
                p = e.length,
                m = t.length;
            if (p != m && !(u && m > p)) return !1;
            var f = d.get(e);
            if (f && d.get(t)) return f == t;
            var h = -1,
                v = !0,
                g = n & l ? new i : void 0;
            for (d.set(e, t), d.set(t, e); ++h < p;) {
                var y = e[h],
                    k = t[h];
                if (c) var b = u ? c(k, y, h, t, e, d) : c(y, k, h, e, t, d);
                if (void 0 !== b) {
                    if (b) continue;
                    v = !1;
                    break
                }
                if (g) {
                    if (!o(t, function(e, t) {
                            if (!r(g, t) && (y === e || s(y, e, n, c, d))) return g.push(t)
                        })) {
                        v = !1;
                        break
                    }
                } else if (y !== k && !s(y, k, n, c, d)) {
                    v = !1;
                    break
                }
            }
            return d.delete(e), d.delete(t), v
        }
    },
    r0iv: function(e, t, n) {
        var i = n("p+QF"),
            o = n("Fy4Y"),
            r = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            if (!i(e)) return o(e);
            var t = [];
            for (var n in Object(e)) r.call(e, n) && "constructor" != n && t.push(n);
            return t
        }
    },
    rvrg: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            o = n("V5M+"),
            r = n("TToO"),
            a = n("GiK3"),
            l = n("6sO2"),
            c = n("mi6k"),
            s = n("vH/s"),
            d = n("kk4f"),
            u = n("CSlQ"),
            p = n("Z8qZ"),
            m = n("KRtN"),
            f = n("4o7v"),
            h = n("PwTO"),
            v = n("N8CH"),
            g = n("Odds"),
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.navigateToEdit = function() {
                        var e = t.collectionEditLocationDescriptor();
                        e && l.o.history.push(e)
                    }, t.collectionEditLocationDescriptor = function() {
                        if (t.props.collection.owner) return {
                            pathname: "/" + t.props.collection.owner.login + "/manager/collections/" + t.props.collection.id,
                            state: {
                                content: s.PageviewContent.CollectionCard,
                                medium: s.PageviewMedium.VideoManagerCollectionManager
                            }
                        }
                    }, t.onDeleteOptionClickHandler = function() {
                        t.props.onDeleteOptionClick(t.props.collection)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.props.collection;
                    return t.thumbnailURL && (e = {
                        "160w": t.thumbnailURL
                    }), a.createElement(p.a, null, a.createElement(g._8, {
                        flexShrink: 0
                    }, a.createElement(d.a, {
                        alt: t.title,
                        sizes: [{
                            size: "160px"
                        }],
                        src: t.thumbnailURL,
                        srcSet: e,
                        videoCount: t.items.totalCount
                    })), a.createElement(v.a, {
                        onClick: this.navigateToEdit
                    }, a.createElement(g.Q, {
                        bold: !0,
                        type: g._49.H4,
                        color: g.K.Alt
                    }, t.title), a.createElement(g._52, {
                        direction: g._54.Bottom,
                        label: Object(l.d)("Last Updated", "CollectionManagerCard")
                    }, a.createElement(g.Q, {
                        color: g.K.Alt2
                    }, Object(l.c)(new Date(t.updatedAt), "long")))), a.createElement(h.a, null, this.collectionStats(t)), this.renderCardMenu())
                }, t.prototype.renderCardMenu = function() {
                    if (this.props.hideOptionsMenu || !this.props.collection.owner) return null;
                    var e = [{
                        asset: g._25.Edit,
                        linkTo: this.collectionEditLocationDescriptor(),
                        title: Object(l.d)("Edit", "CollectionManagerCard")
                    }, {
                        asset: g._25.Trash,
                        onClick: this.onDeleteOptionClickHandler,
                        title: Object(l.d)("Delete", "CollectionManagerCard")
                    }];
                    return a.createElement(m.a, {
                        options: e
                    })
                }, t.prototype.collectionStats = function(e) {
                    return [{
                        value: Object(c.b)(e.lengthSeconds),
                        icon: g._25.GlyphLength,
                        label: Object(l.d)("Collection length", "CollectionManagerCard")
                    }, {
                        value: "" + e.viewCount,
                        icon: g._25.GlyphViews,
                        label: Object(l.d)("Views", "CollectionManagerCard")
                    }].map(function(e, t) {
                        return a.createElement(f.a, r.__assign({
                            key: t
                        }, e))
                    })
                }, t
            }(a.Component),
            k = Object(u.d)("CollectionManagerCard", {
                autoReportInteractive: !0
            })(y),
            b = n("M0wY");
        n.d(t, "a", function() {
            return C
        });
        var C = Object(i.b)(null, function(e, t) {
            return {
                onDeleteOptionClick: function(n) {
                    e(Object(o.d)(b.a, {
                        collection: n,
                        onSuccess: t.onDelete
                    }))
                }
            }
        })(k)
    },
    sBY2: function(e, t) {
        e.exports = function() {
            this.__data__ = [], this.size = 0
        }
    },
    sJBK: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e[e.Collection = 0] = "Collection", e[e.Video = 1] = "Video"
            }(i || (i = {}))
    },
    sa46: function(e, t, n) {
        var i = n("JGv7"),
            o = n("HMFi"),
            r = n("mG6l"),
            a = n("SCwa"),
            l = 1 / 0,
            c = i ? i.prototype : void 0,
            s = c ? c.toString : void 0;
        e.exports = function e(t) {
            if ("string" == typeof t) return t;
            if (r(t)) return o(t, e) + "";
            if (a(t)) return s ? s.call(t) : "";
            var n = t + "";
            return "0" == n && 1 / t == -l ? "-0" : n
        }
    },
    skb1: function(e, t, n) {
        (function(e) {
            var i = n("1tEs"),
                o = "object" == typeof t && t && !t.nodeType && t,
                r = o && "object" == typeof e && e && !e.nodeType && e,
                a = r && r.exports === o && i.process,
                l = function() {
                    try {
                        return a && a.binding && a.binding("util")
                    } catch (e) {}
                }();
            e.exports = l
        }).call(t, n("3IRH")(e))
    },
    t3nn: function(e, t, n) {
        var i = n("NDrF")(n("MygC"), "DataView");
        e.exports = i
    },
    tobj: function(e, t, n) {
        var i = n("43dD"),
            o = n("VGcK"),
            r = "[object Arguments]";
        e.exports = function(e) {
            return o(e) && i(e) == r
        }
    },
    tslQ: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
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
                }(n, t), o(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = (0, l.findDOMNode)(this);
                        e.sortableHandle = !0
                    }
                }, {
                    key: "getWrappedInstance",
                    value: function() {
                        return (0, c.default)(d.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"), this.refs.wrappedInstance
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = d.withRef ? "wrappedInstance" : null;
                        return a.default.createElement(e, i({
                            ref: t
                        }, this.props))
                    }
                }]), n
            }(r.Component), t.displayName = (0, s.provideDisplayName)("sortableHandle", e), n
        };
        var r = n("GiK3"),
            a = d(r),
            l = n("O27J"),
            c = d(n("crWv")),
            s = n("Vgej");

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    uIws: function(e, t, n) {
        var i = n("EpL8");
        e.exports = function(e, t) {
            for (var n = e.length; n--;)
                if (i(e[n][0], t)) return n;
            return -1
        }
    },
    uS5W: function(e, t, n) {
        var i = n("NDrF")(n("MygC"), "Promise");
        e.exports = i
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
    vwDu: function(e, t, n) {
        var i = n("DRNv");
        e.exports = function(e) {
            var t = i(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
    },
    w1Jz: function(e, t, n) {
        var i = n("NDrF")(Object, "create");
        e.exports = i
    },
    wSgH: function(e, t, n) {
        var i = n("Czj7");
        e.exports = function(e, t) {
            return function(n, o) {
                if (null == n) return n;
                if (!i(n)) return e(n, o);
                for (var r = n.length, a = t ? r : -1, l = Object(n);
                    (t ? a-- : ++a < r) && !1 !== o(l[a], a, l););
                return n
            }
        }
    },
    wVoL: function(e, t, n) {
        var i = n("DRNv");
        e.exports = function(e, t) {
            var n = i(this, e),
                o = n.size;
            return n.set(e, t), this.size += n.size == o ? 0 : 1, this
        }
    },
    xKuy: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = a(n("9c95")),
            r = a(n("J0u9"));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = function() {
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
                    return (0, o.default)(this.refs[this.active.collection], function(t) {
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
                    return (0, r.default)(this.refs[e], function(e) {
                        return e.node.sortableInfo.index
                    })
                }
            }]), e
        }();
        t.default = l
    },
    xX9u: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("GiK3"),
            r = n("Odds"),
            a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClickHandler = function(e) {
                        t.props.onClick && t.props.onClick(), e.currentTarget.select()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(r._4, {
                        readOnly: !0,
                        type: r._5.Text,
                        value: this.props.value,
                        onClick: this.handleClickHandler
                    })
                }, t
            }(o.Component);
        n.d(t, "a", function() {
            return a
        })
    },
    xkKI: function(e, t, n) {
        "use strict";
        var i = n("+bIS"),
            o = n("eXGG"),
            r = n("0pjK");
        e.exports = function() {
            function e(e, t, n, i, a, l) {
                l !== r && o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
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
            return n.checkPropTypes = i, n.PropTypes = n, n
        }
    },
    "y+8p": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "SearchCardVideo"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Video"
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
                            value: "lengthSeconds"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "previewThumbnailURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            value: {
                                kind: "IntValue",
                                value: "160"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "90"
                            }
                        }],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "publishedAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "title"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 115
            }
        };
        n.loc.source = {
            body: "fragment SearchCardVideo on Video {\nid\nlengthSeconds\npreviewThumbnailURL(width: 160 height: 90)\npublishedAt\ntitle\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    y5ks: function(e, t, n) {
        var i = n("43dD"),
            o = n("2iRz"),
            r = n("VGcK"),
            a = {};
        a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function(e) {
            return r(e) && o(e.length) && !!a[i(e)]
        }
    },
    yMkz: function(e, t, n) {
        var i = n("MygC").Uint8Array;
        e.exports = i
    },
    yauq: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
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
                }(n, t), o(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this.props,
                            t = e.collection,
                            n = e.disabled,
                            i = e.index;
                        n || this.setDraggable(t, i)
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        if (this.props.index !== e.index && this.node && (this.node.sortableInfo.index = e.index), this.props.disabled !== e.disabled) {
                            var t = e.collection,
                                n = e.disabled,
                                i = e.index;
                            n ? this.removeDraggable(t) : this.setDraggable(t, i)
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
                        return (0, s.default)(u.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"), this.refs.wrappedInstance
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = u.withRef ? "wrappedInstance" : null;
                        return a.default.createElement(e, i({
                            ref: t
                        }, (0, d.omit)(this.props, "collection", "disabled", "index")))
                    }
                }]), n
            }(r.Component), t.displayName = (0, d.provideDisplayName)("sortableElement", e), t.contextTypes = {
                manager: l.default.object.isRequired
            }, t.propTypes = {
                index: l.default.number.isRequired,
                collection: l.default.oneOfType([l.default.number, l.default.string]),
                disabled: l.default.bool
            }, t.defaultProps = {
                collection: 0
            }, n
        };
        var r = n("GiK3"),
            a = u(r),
            l = u(n("qUKr")),
            c = n("O27J"),
            s = u(n("crWv")),
            d = n("Vgej");

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    ymQA: function(e, t, n) {
        var i = n("Zfct"),
            o = n("vwDu"),
            r = n("Bxt2"),
            a = n("a/6q"),
            l = n("wVoL");

        function c(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var i = e[t];
                this.set(i[0], i[1])
            }
        }
        c.prototype.clear = i, c.prototype.delete = o, c.prototype.get = r, c.prototype.has = a, c.prototype.set = l, e.exports = c
    },
    zAjo: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("GiK3"),
            r = n("6sO2"),
            a = n("+Znq"),
            l = n("xX9u"),
            c = n("/Cz7"),
            s = n("Odds"),
            d = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = Object(c.a)(this.props.collection.id);
                    return o.createElement("div", null, o.createElement(s.Q, null, Object(r.d)("Collection Link", "VideoShareBox")), o.createElement(l.a, {
                        onClick: function() {
                            e.props.onClick(t)
                        },
                        value: t
                    }))
                }, t
            }(o.Component),
            u = n("cAee"),
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickHandler = function(e) {
                        var n = {
                            location: t.props.tracking.location,
                            platform: u.a.Link,
                            shareURL: e
                        };
                        Object(u.b)(t.props.collection, n, r.o.apollo.client)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(d, i.__assign({}, this.props, {
                        onClick: this.onClickHandler
                    }))
                }, t
            }(o.Component),
            m = n("AoO8"),
            f = n("vH/s"),
            h = n("Ryxq"),
            v = n("sJBK");
        var g = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.content,
                        n = this.getEmbedPlayerContentURL(t);
                    return o.createElement("div", null, o.createElement(s.Q, null, Object(r.d)("Embed Video", "VideoShareBox")), o.createElement(l.a, {
                        onClick: function() {
                            e.props.onClick(n)
                        },
                        value: this.getEmbedPlayerCode(t)
                    }))
                }, t.prototype.getEmbedPlayerCode = function(e) {
                    var t = function(e, t) {
                            var n = {
                                autoplay: !1
                            };
                            switch (e.type) {
                                case v.a.Collection:
                                    e.currentVideo ? (n.video = e.currentVideo.id, n.t = t ? Object(h.a)(t) : void 0) : n.collection = e.id;
                                    break;
                                case v.a.Video:
                                    n.video = e.id, n.t = t ? Object(h.a)(t) : void 0
                            }
                            return n
                        }(e, null !== this.props.selectedVideoStartTime ? this.props.selectedVideoStartTime : void 0),
                        n = e.owner.displayName,
                        i = e.title,
                        o = Object(r.d)("Watch {title} from {displayName} on www.twitch.tv", {
                            displayName: n,
                            title: i
                        }, "VideoShareBox");
                    return Object(m.b)(t, {
                        textLink: {
                            url: this.getEmbedPlayerContentURL(e),
                            text: o
                        },
                        allowScrolling: !1,
                        allowFullscreen: !0
                    })
                }, t.prototype.getEmbedPlayerContentURL = function(e) {
                    switch (e.type) {
                        case v.a.Collection:
                            return e.currentVideo ? Object(c.b)(e.currentVideo.id, {
                                tt_medium: f.PageviewMedium.VideoEmbed,
                                tt_content: f.PageviewContent.TextLink,
                                t: this.props.selectedVideoStartTime
                            }) : Object(c.a)(e.id, {
                                tt_medium: f.PageviewMedium.VideoEmbed,
                                tt_content: f.PageviewContent.TextLink
                            });
                        case v.a.Video:
                            return Object(c.b)(e.id, {
                                tt_medium: f.PageviewMedium.VideoEmbed,
                                tt_content: f.PageviewContent.TextLink,
                                t: this.props.selectedVideoStartTime
                            });
                        default:
                            return e
                    }
                }, t
            }(o.Component),
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickHandler = function(e) {
                        var n = t.props.content;
                        switch (n.type) {
                            case v.a.Collection:
                                n.currentVideo ? t.trackVideoShare(e, n.currentVideo) : t.trackCollectionShare(e, n);
                                break;
                            case v.a.Video:
                                t.trackVideoShare(e, n);
                                break;
                            default:
                                return n
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(g, i.__assign({}, this.props, {
                        onClick: this.onClickHandler
                    }))
                }, t.prototype.trackCollectionShare = function(e, t) {
                    var n = {
                        location: this.props.tracking.location,
                        platform: u.a.Embed,
                        shareURL: e
                    };
                    Object(u.b)(t, n, r.o.apollo.client)
                }, t.prototype.trackVideoShare = function(e, t) {
                    var n = {
                        location: this.props.tracking.location,
                        platform: u.a.Embed,
                        shareURL: e
                    };
                    Object(u.c)(t, n, r.o.apollo.client)
                }, t
            }(o.Component),
            k = n("bhVC"),
            b = [{
                type: k.b.Twitter,
                selector: "twitter-button"
            }, {
                type: k.b.Facebook,
                selector: "fb-button"
            }, {
                type: k.b.VKontakte,
                selector: "vk-button"
            }, {
                type: k.b.Reddit,
                selector: "reddit-button"
            }, {
                type: k.b.Copy,
                selector: "copy-link-button"
            }],
            C = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.content,
                        n = this.getContentURL(t),
                        i = this.getSocialShareContextTitle(t),
                        r = b.map(function(t) {
                            return o.createElement(k.a, {
                                "data-test-selector": t.selector,
                                key: t.type,
                                onShareClick: function(t) {
                                    e.props.onClick(n, t)
                                },
                                text: i,
                                type: t.type,
                                url: n
                            })
                        });
                    return o.createElement(s._8, {
                        display: s.R.Flex,
                        justifyContent: s._7.Between
                    }, r)
                }, t.prototype.getSocialShareContextTitle = function(e) {
                    return Object(r.d)("Check out {title} from {displayName} on www.twitch.tv", {
                        displayName: e.owner.displayName,
                        title: e.title
                    }, "VideoShareBox")
                }, t.prototype.getContentURL = function(e) {
                    switch (e.type) {
                        case v.a.Collection:
                            return e.currentVideo ? Object(c.b)(e.currentVideo.id, {
                                collection: e.id,
                                t: this.props.selectedVideoStartTime
                            }) : Object(c.a)(e.id);
                        case v.a.Video:
                            return Object(c.b)(e.id, {
                                t: this.props.selectedVideoStartTime
                            });
                        default:
                            return e
                    }
                }, t
            }(o.Component),
            _ = function(e) {
                switch (e) {
                    case k.b.Twitter:
                        return u.a.Twitter;
                    case k.b.Reddit:
                        return u.a.Reddit;
                    case k.b.VKontakte:
                        return u.a.VKontakte;
                    case k.b.Facebook:
                        return u.a.Facebook;
                    case k.b.Copy:
                        return u.a.Copy;
                    case k.b.CopyInput:
                        return u.a.Link;
                    case k.b.Download:
                        return u.a.Download;
                    default:
                        return e
                }
            },
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickHandler = function(e, n) {
                        var i = t.props.content;
                        switch (i.type) {
                            case v.a.Collection:
                                i.currentVideo ? t.trackVideoShare(e, i.currentVideo, n, i.id) : t.trackCollectionShare(e, i, n);
                                break;
                            case v.a.Video:
                                t.trackVideoShare(e, i, n);
                                break;
                            default:
                                return i
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(C, i.__assign({}, this.props, {
                        onClick: this.onClickHandler
                    }))
                }, t.prototype.trackCollectionShare = function(e, t, n) {
                    var i = {
                        location: this.props.tracking.location,
                        platform: _(n),
                        shareURL: e
                    };
                    Object(u.b)(t, i, r.o.apollo.client)
                }, t.prototype.trackVideoShare = function(e, t, n, i) {
                    var o = {
                        collectionID: i,
                        location: this.props.tracking.location,
                        platform: _(n),
                        shareURL: e
                    };
                    Object(u.c)(t, o, r.o.apollo.client)
                }, t
            }(o.Component),
            S = n("mi6k"),
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onShareTimestampClick = function(e) {
                        void 0 !== t.props.currentVideoTime && t.props.onVideoStartTimeChange(e.currentTarget.checked ? t.props.currentVideoTime : void 0)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = {};
                    this.props.collectionID && (t.collection = this.props.collectionID), this.props.selectedVideoStartTime && (t.t = this.props.selectedVideoStartTime);
                    var n = Object(c.b)(this.props.video.id, t);
                    return o.createElement("div", null, o.createElement(s.Q, null, Object(r.d)("Video Link", "VideoShareBox")), o.createElement(l.a, {
                        onClick: function() {
                            e.props.onInputClick(n)
                        },
                        value: n
                    }), this.renderCurrentVideoOffsetLinkOption())
                }, t.prototype.renderCurrentVideoOffsetLinkOption = function() {
                    if (void 0 === this.props.currentVideoTime) return null;
                    var e = this.props.selectedVideoStartTime || this.props.currentVideoTime,
                        t = Object(S.b)(e);
                    return o.createElement(s._8, {
                        padding: {
                            top: .5
                        }
                    }, o.createElement(s.J, {
                        id: "video-share-timestamp-toggle",
                        label: Object(r.d)("Skip to {deeplinkTimestamp}", {
                            deeplinkTimestamp: t
                        }, "VideoShareBox"),
                        "data-a-target": "video-share-timestamp-toggle",
                        "data-a-value": void 0 !== this.props.selectedVideoStartTime,
                        checked: !!this.props.selectedVideoStartTime,
                        onChange: this.onShareTimestampClick
                    }))
                }, t
            }(o.Component),
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickHandler = function(e, n) {
                        var i = {
                            collectionID: n,
                            location: t.props.tracking.location,
                            platform: u.a.Link,
                            shareURL: e
                        };
                        Object(u.c)(t.props.video, i, r.o.apollo.client)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(w, i.__assign({}, this.props, {
                        onInputClick: this.onClickHandler
                    }))
                }, t
            }(o.Component);
        n.d(t, "a", function() {
            return E
        });
        var E = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {}, t.onVideoStartTimeChangeHandler = function(e) {
                    t.setState({
                        selectedVideoStartTime: e
                    })
                }, t
            }
            return i.__extends(t, e), t.prototype.render = function() {
                var e = null;
                return this.props.content && (e = this.shareBalloonContent(this.props.content)), o.createElement(a.a, null, o.createElement(s.v, {
                    disabled: !this.props.content,
                    icon: s._25.Share,
                    type: this.props.buttonType
                }, Object(r.d)("Share", "VideoShareBox")), o.createElement(s.q, {
                    direction: this.props.balloonDirection,
                    size: s.s.Small
                }, e))
            }, t.prototype.shareBalloonContent = function(e) {
                return o.createElement(s._8, {
                    padding: 1
                }, o.createElement(x, {
                    content: e,
                    selectedVideoStartTime: this.state.selectedVideoStartTime,
                    tracking: this.props.tracking
                }), this.renderCollectionShareInput(e), this.renderVideoShareInput(e), this.renderEmbedPlayerInput(e))
            }, t.prototype.renderCollectionShareInput = function(e) {
                return e.type !== v.a.Collection ? null : o.createElement(s._8, {
                    padding: {
                        top: 1
                    }
                }, o.createElement(p, {
                    collection: e,
                    tracking: this.props.tracking
                }))
            }, t.prototype.renderVideoShareInput = function(e) {
                var t, n;
                if (e.type === v.a.Collection) {
                    if (!e.currentVideo) return null;
                    n = e.id, t = e.currentVideo
                } else t = e;
                return o.createElement(s._8, {
                    padding: {
                        top: 1
                    }
                }, o.createElement(O, {
                    collectionID: n,
                    currentVideoTime: this.props.currentVideoTime,
                    onVideoStartTimeChange: this.onVideoStartTimeChangeHandler,
                    selectedVideoStartTime: this.state.selectedVideoStartTime,
                    tracking: this.props.tracking,
                    video: t
                }))
            }, t.prototype.renderEmbedPlayerInput = function(e) {
                return o.createElement(s._8, {
                    padding: {
                        top: 1
                    }
                }, o.createElement(y, {
                    content: e,
                    selectedVideoStartTime: this.state.selectedVideoStartTime,
                    tracking: this.props.tracking
                }))
            }, t
        }(o.Component)
    },
    zDSl: function(e, t, n) {
        e.exports = n.p + "assets/missing-video-thumb-320x180-101fcbc1ff84459331417137edd6cfdb.png"
    },
    zN4B: function(e, t) {
        e.exports = function(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(e, i) {
                n[++t] = [i, e]
            }), n
        }
    }
});
//# sourceMappingURL=pages.video-tools.pages.collection-editor-4539eb6000ba02054231695554bbb874.js.map