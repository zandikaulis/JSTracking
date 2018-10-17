(window.webpackJsonp = window.webpackJsonp || []).push([
    [98], {
        "+7pI": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsEditClipInfo"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "broadcaster"
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
                                        value: "curator"
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
                                        value: "durationSeconds"
                                    },
                                    arguments: [],
                                    directives: []
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
                                        value: "isPublished"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "video"
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
                                                value: "broadcastType"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "videoOffsetSeconds"
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
                    end: 236
                }
            };
            n.loc.source = {
                body: "query ClipsEditClipInfo($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\ndisplayName\nlogin\n}\ncurator {\nid\nlogin\n}\ndurationSeconds\ngame {\nid\ndisplayName\n}\nisPublished\ncreatedAt\nvideo {\nid\nbroadcastType\ntitle\n}\nvideoOffsetSeconds\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "+GMQ": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsViewCount"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "viewCount"
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
                    end: 71
                }
            };
            n.loc.source = {
                body: "query ClipsViewCount($slug: ID!) {\nclip(slug: $slug) {\nid\nviewCount\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "+GrQ": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("yR8l"),
                s = n("2xye"),
                l = n("GnwI"),
                c = "https://help.twitch.tv/customer/portal/articles/2918323-clip-champs-guide",
                d = function(e) {
                    var t = e.type;
                    a.p.tracking.track(s.SpadeEventType.ClipChampHelpClick, {
                        target_url: c,
                        type: t.toLowerCase()
                    })
                },
                u = (n("6llN"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function() {
                            d({
                                type: t.props.pageType
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement("a", {
                            href: c,
                            onClick: this.onClick,
                            target: "_blank"
                        }, r.createElement("img", {
                            alt: Object(a.d)("Power Clipper badge", "ClipsCurator"),
                            className: "clips-champ-badge-img",
                            src: "https://s.jtvnw.net/jtv_user_pictures/hosted_images/clipchampbadge"
                        }))
                    }, t
                }(r.Component)),
                p = n("OTul"),
                m = n("Ue10"),
                f = n("xza4"),
                h = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data.clip;
                        if (!e || !e.curator || !e.curator.login || this.props.data.loading) return r.createElement(m.Xa, null, this.renderPlaceholders());
                        var t = Object(p.c)(e.curator.login, {
                            tt_medium: "clips_web",
                            tt_content: "curator_name"
                        });
                        return r.createElement(m.Xa, {
                            ellipsis: this.props.ellipsis
                        }, e.champBadge && e.champBadge.id && r.createElement(m.Xa, {
                            margin: {
                                right: .5
                            },
                            display: m.X.InlineBlock
                        }, r.createElement(u, {
                            pageType: s.PageviewLocation.ClipsViewing
                        })), r.createElement(m.Pa, {
                            display: m.X.Inline
                        }, r.createElement(m.W, {
                            fontSize: this.props.fontSize ? this.props.fontSize : m.Ca.Size5
                        }, Object(a.d)("Clipped by {curatorName}", {
                            curatorName: r.createElement("a", {
                                href: t,
                                target: "_blank"
                            }, e.curator.displayName)
                        }, "ClipsCurator"))))
                    }, t.prototype.reportInteractive = function() {
                        this.props.data.clip && this.props.data.clip.curator && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.renderPlaceholders = function() {
                        return r.createElement(m.i, {
                            type: m.n.FadeIn,
                            duration: m.k.Long,
                            delay: m.j.Medium,
                            enabled: !0
                        }, r.createElement(m.W, {
                            fontSize: this.props.fontSize ? this.props.fontSize : m.Ca.Size5
                        }, r.createElement(m.eb, {
                            lineCount: 1,
                            width: 80
                        })))
                    }, t = i.__decorate([Object(l.b)("ClipsCurator"), Object(o.a)(f)], t)
                }(r.Component);
            n.d(t, "a", function() {
                return h
            })
        },
        "+PZR": function(e, t, n) {
            "use strict";
            var i = function(e, t) {
                    var n = "https://www.twitch.tv/communities/{communityName}".replace("{communityName}", e);
                    return 'community report (<a href="{link}">{link}</a>) {description}'.replace(/{link}/g, n).replace(/{description}/, t)
                },
                r = n("/7QA");

            function a() {
                return [{
                    id: "other",
                    text: Object(r.d)("Other Terms of Service Violation", "ReportUserModal")
                }]
            }
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            })
        },
        "+T1G": function(e, t, n) {},
        "/2kD": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ClipsTitleEdit_UpdateClip"
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
                                    value: "UpdateClipInput"
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
                                value: "updateClip"
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
                                        value: "clip"
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
                                                value: "message"
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
                    end: 130
                }
            };
            n.loc.source = {
                body: "mutation ClipsTitleEdit_UpdateClip($input: UpdateClipInput!) {\nupdateClip(input: $input) {\nclip {\nid\ntitle\n}\nerror {\nmessage\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "/HY+": function(e, t, n) {
            "use strict";
            var i = n("dAHa"),
                r = n("mrSG"),
                a = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                l = n("cZKs"),
                c = n("aCAx"),
                d = n("GnwI"),
                u = n("Ue10"),
                p = (n("Oy4H"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClose = function(e, n) {
                            t.props.closeModal(), t.props.onClose && t.props.onClose(e, n)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.yb, {
                            className: "reporting-modal__container",
                            background: u.r.Base,
                            padding: {
                                x: 2,
                                y: 3
                            }
                        }, a.createElement(i.b, {
                            onClose: this.handleClose,
                            reportContext: this.props.reportContext,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        }), a.createElement(l.a, null))
                    }, t
                }(a.Component));
            var m = Object(s.compose)(Object(d.b)("ReportUserModal"), Object(o.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: c.c
                }, e)
            }))(p);
            n.d(t, !1, function() {}), n.d(t, !1, function() {
                return i.c
            }), n.d(t, !1, function() {
                return i.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return i.b
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return m
            })
        },
        "/R0k": function(e, t, n) {},
        "/mWu": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("yR8l"),
                o = n("GnwI"),
                s = n("Ue10"),
                l = n("a4lT"),
                c = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        return !this.props.data.clip || this.props.data.loading ? r.createElement(s.Xa, null, this.renderPlaceholders()) : r.createElement(s.W, {
                            fontSize: this.props.fontSize ? this.props.fontSize : s.Ca.Size3,
                            type: s.Ob.Span,
                            lineHeight: s.Ya.Heading,
                            ellipsis: this.props.ellipsis
                        }, this.props.data.clip.title)
                    }, t.prototype.reportInteractive = function() {
                        this.props.data.clip && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.renderPlaceholders = function() {
                        return r.createElement(s.i, {
                            type: s.n.FadeIn,
                            duration: s.k.Long,
                            delay: s.j.Short,
                            enabled: !0
                        }, r.createElement(s.W, {
                            fontSize: this.props.fontSize ? this.props.fontSize : s.Ca.Size3
                        }, r.createElement(s.eb, {
                            lineCount: 1,
                            width: 100
                        })))
                    }, t = i.__decorate([Object(o.b)("ClipsTitle"), Object(a.a)(l)], t)
                }(r.Component);
            n.d(t, "a", function() {
                return c
            })
        },
        "06uF": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return c
            }), n.d(t, "a", function() {
                return d
            }), n.d(t, "c", function() {
                return u
            });
            var i = n("mrSG"),
                r = n("/7QA"),
                a = n("t5Gm"),
                o = 2,
                s = {
                    version: o,
                    vendorPreferences: {}
                },
                l = r.p.logger.withCategory("gdpr-storage");

            function c() {
                return p(r.p.storage.get(a.b, null))
            }

            function d() {
                var e = r.p.storage.get(a.b, s);
                return p(e) ? e.vendorPreferences : (l.warn("stored vendor preferences are invalid", {
                    storedPrefs: e
                }), {})
            }

            function u(e) {
                var t = d(),
                    n = {
                        version: o,
                        vendorPreferences: i.__assign({}, t, e)
                    };
                r.p.storage.set(a.b, n)
            }

            function p(e) {
                return e && "object" == typeof e && !Array.isArray(e) && void 0 !== e.version && "number" == typeof e.version && e.vendorPreferences && "object" == typeof e.vendorPreferences && !Array.isArray(e.vendorPreferences)
            }
        },
        "0FG4": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "b", function() {
                return c
            });
            var i, r = n("RcPG"),
                a = n("a1OF");
            ! function(e) {
                e[e.Position = 0] = "Position", e[e.Token = 1] = "Token"
            }(i || (i = {}));
            var o = "0";

            function s(e, t, n) {
                var o = n.type === i.Position ? t : e,
                    s = n.map[o];
                if (s) {
                    var l = function(e, t) {
                        return {
                            images: {
                                sources: {
                                    "1x": Object(a.d)(t, 1),
                                    "2x": Object(a.d)(t, 2),
                                    "4x": Object(a.d)(t, 4)
                                },
                                themed: !1
                            },
                            alt: e
                        }
                    }(e, s.id);
                    return {
                        type: r.a.Emote,
                        content: l
                    }
                }
                return null
            }
            var l = {
                "\\:\\&gt\\;": [":>"],
                "\\&gt\\;\\(": [">("],
                "\\&lt\\;\\]": ["<]"],
                "\\&lt\\;3": ["<3"],
                ":-?(?:7|L)": [":-7", ":-L", ":7", ":L"],
                "[oO](_|\\.)[oO]": ["o_o", "O_O", "o_O", "O_o", "o.o", "O.O", "o.O", "O.o"],
                "\\;-?(p|P)": [";-p", ";-P", ";p", ";P"],
                "\\;-?\\)": [";-)", ";)"],
                "\\:-?(o|O)": [":-o", ":-O", ":o", ":O"],
                "\\:-?(p|P)": [":-p", ":-P", ":p", ":P"],
                "\\:-?(S|s)": [":-S", ":-s", ":s", ":S"],
                "\\:-?[\\\\/]": [":-/", ":-\\", ":/", ":\\"],
                "\\:-?[z|Z|\\|]": [":-|", ":-Z", ":-z", ":|", ":Z", ":z"],
                "\\:-?\\(": [":-(", ":("],
                "\\:-?\\)": [":-)", ":)"],
                "\\:-?D": [":-D", ":D"],
                "#-?[\\\\/]": ["#-/", "#-\\", "#/", "#\\"],
                "B-?\\)": ["B-)", "B)"],
                "R-?\\)": ["R-)", "R)"]
            };

            function c(e) {
                for (var t = {}, n = 0, i = e; n < i.length; n++) {
                    var r = i[n];
                    if (r && r.emotes)
                        for (var a = 0, s = r.emotes; a < s.length; a++) {
                            var c = s[a];
                            if (c && c.id && c.token)
                                for (var d = 0, u = l[c.token] || [c.token]; d < u.length; d++) {
                                    var p = u[d];
                                    t[p] && r.id === o || (t[p] = {
                                        id: c.id,
                                        token: p
                                    })
                                }
                        }
                }
                return t
            }
        },
        "0OKo": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("1uls");

            function o(e) {
                return {
                    latencyTracking: function(e, t) {
                        return new a.a(e, t)
                    }(e),
                    rootLatencyTracker: s()
                }
            }

            function s() {
                return new a.a("Root")
            }
            n("gCs8");

            function l(e, t) {
                return function(t) {
                    return function(n) {
                        function a() {
                            return null !== n && n.apply(this, arguments) || this
                        }
                        return i.__extends(a, n), a.prototype.render = function() {
                            return r.createElement(t, i.__assign({}, this.props, o(e)))
                        }, a.displayName = "WithLatencyTracking(" + (t.displayName || t.name || "Component") + ")", a
                    }(r.Component)
                }
            }
            n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "a", function() {
                return l
            })
        },
        "0hI/": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportUserData"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "targetUserID"
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
                            alias: {
                                kind: "Name",
                                value: "targetUser"
                            },
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
                                        value: "targetUserID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "lookupType"
                                },
                                value: {
                                    kind: "EnumValue",
                                    value: "ALL"
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "directories"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "nodes"
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
                                                        value: "directoryType"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "blockedUsers"
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
                    end: 236
                }
            };
            n.loc.source = {
                body: "query ReportUserModal_ReportUserData($targetUserID: ID!) {\ntargetUser: user(id: $targetUserID lookupType: ALL) {\nid\nlogin\ndisplayName\ndirectories {\nnodes {\nid\nname\ndisplayName\ndirectoryType\n}\n}\n}\ncurrentUser {\nid\nblockedUsers {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "1ZgY": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsBroadcasterInfo"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "broadcaster"
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
                                                    value: "28"
                                                }
                                            }],
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
                                                value: "login"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "stream"
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
                    end: 174
                }
            };
            n.loc.source = {
                body: "query ClipsBroadcasterInfo($slug: ID!) {\nclip(slug: $slug) {\nid\ngame {\nid\nname\ndisplayName\n}\nbroadcaster {\nid\nprofileImageURL(width: 28)\ndisplayName\nlogin\nstream {\nid\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "3dkm": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return o
            });
            var i = n("/7QA");

            function r() {
                return Object(i.d)("N/A", "ClipsRelativeTimeHelper")
            }

            function a(e) {
                if (!e) return r();
                try {
                    var t = new Date(e.replace(/(Z)/i, "")),
                        n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
                    return Object(i.h)(n)
                } catch (e) {
                    return r()
                }
            }

            function o(e) {
                if (e <= 0) return "00:00";
                var t = Math.floor(e / 60).toString(),
                    n = Math.floor(e - 60 * Number(t)).toString();
                return 1 === t.length && (t = "0" + t), 1 === n.length && (n = "0" + n), t + ":" + n
            }
        },
        "4L7N": function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("kRBY"),
                a = n("mrSG"),
                o = n("q1tI"),
                s = n("VwyG"),
                l = n("X7Ac"),
                c = n("yR8l"),
                d = n("MLDe"),
                u = n("v8tf"),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.data.clip,
                            n = "";
                        if (t && t.videoQualities) {
                            var i = t.videoQualities[0];
                            n = i.sourceURL
                        }
                        var r = this.props,
                            a = r.broadcasterId,
                            c = r.broadcasterLogin,
                            u = r.forceShow;
                        return o.createElement(s.a, {
                            ownerLogin: this.props.broadcasterLogin,
                            permittedRoles: {
                                editor: !0,
                                staff: !0
                            }
                        }, function(i) {
                            var r = i.permitted;
                            return n && (r || u) ? o.createElement(l.a, {
                                type: l.b.Download,
                                text: e.props.slug,
                                url: n,
                                onShareClick: t ? Object(d.c)(t.id, t.game && t.game.name, a, c, e.props.pageType) : void 0
                            }) : null
                        })
                    }, t
                }(o.Component),
                m = Object(c.a)(u)(p);
            var f = Object(i.connect)(function(e) {
                var t = Object(r.e)(e);
                return {
                    userLogin: t ? t.login : ""
                }
            })(m);
            n.d(t, "a", function() {
                return f
            })
        },
        "4mFl": function(e, t, n) {},
        "4qQ0": function(e, t, n) {
            "use strict";
            var i, r;
            n.d(t, "a", function() {
                    return i
                }), n.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Community = "COMMUNITY_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.Room = "ROOM_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT", e.Whisper = "WHISPER_REPORT"
                }(i || (i = {})),
                function(e) {
                    e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
                }(r || (r = {}))
        },
        "4w0E": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Chat_BanUserFromChatRoom"
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
                                    value: "BanUserFromChatRoomInput"
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
                                value: "banUserFromChatRoom"
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
                    end: 126
                }
            };
            n.loc.source = {
                body: "mutation Chat_BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {\nbanUserFromChatRoom(input: $input) {\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "5EAu": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "PublishClip"
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
                                    value: "PublishClipInput"
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
                                value: "publishClip"
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
                                        value: "clip"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
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
                                                value: "slug"
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
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "message"
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
                    end: 120
                }
            };
            n.loc.source = {
                body: "mutation PublishClip($input: PublishClipInput!) {\npublishClip(input: $input) {\nclip {\ntitle\nslug\n}\nerror {\nmessage\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "5jJa": function(e, t) {
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
                                        value: "isMinimumGDPRConsentAge"
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
                    end: 90
                }
            };
            n.loc.source = {
                body: "query GDPRConsent {\ncurrentUser {\nid\nisMinimumGDPRConsentAge\n}\nrequestInfo {\nisFromEEA\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "5zXJ": function(e, t, n) {
            "use strict";
            n.d(t, "v", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "t", function() {
                return c
            }), n.d(t, "n", function() {
                return d
            }), n.d(t, "p", function() {
                return u
            }), n.d(t, "q", function() {
                return p
            }), n.d(t, "o", function() {
                return m
            }), n.d(t, "r", function() {
                return f
            }), n.d(t, "l", function() {
                return h
            }), n.d(t, "m", function() {
                return g
            }), n.d(t, "j", function() {
                return v
            }), n.d(t, "g", function() {
                return E
            }), n.d(t, "e", function() {
                return b
            }), n.d(t, "i", function() {
                return y
            }), n.d(t, "h", function() {
                return T
            }), n.d(t, "f", function() {
                return O
            }), n.d(t, "k", function() {
                return S
            }), n.d(t, "u", function() {
                return _
            }), n.d(t, "s", function() {
                return k
            }), n.d(t, "d", function() {
                return N
            });
            var i, r = n("uYEN"),
                a = {
                    ERROR_DISPLAY_TIMEOUT: 5e3,
                    GET_BALANCE_RATE_LIMIT: 5e3,
                    UNDO_PROMPT_DURATION: 5e3
                },
                o = "https://d3aqoihi2n8ty8.cloudfront.net",
                s = o + "/cheer",
                l = o + "/actions",
                c = "bonus",
                d = 8e5,
                u = 1e5,
                p = 25e4,
                m = 500,
                f = 1e3,
                h = "cheer",
                g = r.a.Purple,
                v = "UNKNOWN",
                E = "FIRST_PARTY",
                b = "CUSTOM",
                y = "SPONSORED",
                T = "THIRD_PARTY",
                O = "DISPLAY_ONLY",
                S = ((i = {})[r.a.Gray] = "#979797", i[r.a.Purple] = "#9c3ee8", i[r.a.Green] = "#1db2a5", i[r.a.Blue] = "#0099fe", i[r.a.Red] = "#f43021", i[r.a.Yellow] = "#f3a71a", i),
                _ = "bits_sponsored_cheermotes",
                k = "bits_sponsored_cheermotes_announcement",
                N = "bits_charity_event"
        },
        "60o1": function(e, t, n) {
            "use strict";

            function i(e, t) {
                var n = e,
                    i = !1;
                return n ? function(e) {
                    return e.split("").map(function(e) {
                        return e.charCodeAt(0) > 127
                    }).reduce(function(e, t) {
                        return e || t
                    })
                }(n) && (i = !0) : n = t, {
                    userDisplayName: n,
                    isIntl: i
                }
            }
            n.d(t, "a", function() {
                return i
            })
        },
        "6FuP": function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.Orange = "orange", e.Blue = "blue"
                }(i || (i = {}))
        },
        "6j5V": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("RcPG");

            function r(e) {
                return {
                    type: i.a.Text,
                    content: e
                }
            }
        },
        "6llN": function(e, t, n) {},
        "8jSG": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "blockedUsers"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "User"
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
                                value: "blockedUsers"
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
                    end: 56
                }
            };
            n.loc.source = {
                body: "fragment blockedUsers on User {\nid\nblockedUsers {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "99qK": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsEditPoller"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "broadcaster"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "creationState"
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
                    end: 130
                }
            };
            n.loc.source = {
                body: "query ClipsEditPoller($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\ndisplayName\nlogin\n}\ngame {\nid\nname\n}\ncreationState\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        AKMF: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var i = n("mrSG"),
                r = n("/7QA"),
                a = n("S1Za");

            function o(e) {
                return e.videoPlayer.activeVideoPlayerInstanceRefID
            }
            r.p.store.registerReducer("videoPlayer", function(e, t) {
                switch (void 0 === e && (e = {
                    activeVideoPlayerInstanceRefID: void 0
                }), t.type) {
                    case a.a:
                        return i.__assign({}, e, {
                            activeVideoPlayerInstanceRefID: t.playerRefID
                        });
                    default:
                        return e
                }
            })
        },
        Addw: function(e, t, n) {
            "use strict";

            function i(e) {
                var t = Math.floor(e / 3600),
                    n = Math.floor((e - 3600 * t) / 60),
                    i = e - 3600 * t - 60 * n;
                return t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), i < 10 && (i = "0" + i), t + "h" + n + "m" + i + "s"
            }
            n.d(t, "a", function() {
                return i
            })
        },
        Ar2k: function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                a = n("TSYQ"),
                o = n("q1tI"),
                s = n("/0dD"),
                l = n("76Lv"),
                c = n("Ue10"),
                d = (n("f0/i"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t = ((e = {})[Object(l.b)(s.a.Dark)] = this.props.forceDarkTheme, e),
                            n = r.__assign({
                                direction: c.v.Right,
                                show: !0
                            }, this.props.balloonProps);
                        return o.createElement(c.Xa, {
                            className: a("rich-content-tooltip", t)
                        }, this.props.children, o.createElement(c.u, r.__assign({}, n), o.createElement("div", {
                            ref: this.props.refCallback,
                            className: "rich-content-tooltip__pointer-target"
                        }, o.createElement(c.Xa, {
                            padding: .5
                        }, this.props.content))))
                    }, t
                }(o.Component)),
                u = n("/7QA"),
                p = (n("lX3L"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            isError: !1,
                            options: null,
                            richOptions: null,
                            hovering: !1
                        }, n.logger = u.p.logger.withCategory("tooltip-layer"), n.clearTimeoutAndRun = function(e, t) {
                            void 0 === t && (t = 0), n.displayTimeout && (clearTimeout(n.displayTimeout), n.displayTimeout = 0), n.displayTimeout = setTimeout(function() {
                                e(), n.displayTimeout = 0
                            }, t)
                        }, n.setRef = function(e) {
                            n.removeEventListeners(), n.addEventListeners(e), n.ref = e
                        }, n.addEventListeners = function(e) {
                            e && (e.addEventListener("mouseenter", n.handleMouseEnter), e.addEventListener("mouseleave", n.handleMouseLeave), e.addEventListener("click", n.handleMouseClick))
                        }, n.removeEventListeners = function() {
                            n.ref && (n.ref.removeEventListener("mouseenter", n.handleMouseEnter), n.ref.removeEventListener("mouseleave", n.handleMouseLeave), n.ref.removeEventListener("click", n.handleMouseClick))
                        }, n.handleMouseEnter = function() {
                            n.setState({
                                hovering: !0
                            })
                        }, n.handleMouseLeave = function() {
                            n.setState({
                                hovering: !1
                            }, function() {
                                n.displayTimeout || n.hideTooltip()
                            })
                        }, n.handleMouseClick = function() {
                            n.setState({
                                hovering: !1
                            }, function() {
                                n.hideTooltip(!0)
                            })
                        }, i = n, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidCatch = function(e, t) {
                        var n = this;
                        this.setState({
                            isError: !0
                        }, function() {
                            u.p.stats.recordComponentError("TooltipLayer"), n.logger.error(e, "A unhandled exception occurred in the component hierarchy", {
                                info: t
                            })
                        })
                    }, t.prototype.render = function() {
                        if (this.state.isError) return null;
                        var e = this.state.options && this.state.options.from || this.state.richOptions && this.state.richOptions.from;
                        if (!e) return null;
                        var t = this.state.richOptions ? 2 : 0,
                            n = e.getBoundingClientRect(),
                            i = {
                                transform: "translate(" + Math.floor(n.left) + "px, " + Math.floor(n.top) + "px)",
                                width: n.width + t,
                                height: n.height
                            },
                            a = o.createElement("div", {
                                style: {
                                    width: i.width,
                                    height: i.height
                                }
                            }),
                            s = null;
                        return this.state.options ? s = o.createElement(c.Rb, {
                            direction: this.state.options.direction,
                            align: this.state.options.align,
                            label: this.state.options.label,
                            width: this.state.options.width,
                            show: !0
                        }, a) : this.state.richOptions && (s = o.createElement(d, {
                            content: this.state.richOptions.richContent,
                            refCallback: this.state.richOptions.allowHover && this.setRef || void 0,
                            forceDarkTheme: this.state.richOptions.forceDarkTheme,
                            balloonProps: r.__assign({}, this.state.richOptions.balloonProps, {
                                show: !0
                            })
                        }, a)), o.createElement("div", {
                            className: "tooltip-layer",
                            style: i
                        }, s)
                    }, t.prototype.showTooltip = function(e) {
                        var t = this;
                        this.clearTimeoutAndRun(function() {
                            t.setState({
                                options: e,
                                richOptions: null
                            })
                        }), this.hoverTimeout && (clearTimeout(this.hoverTimeout), this.hoverTimeout = 0)
                    }, t.prototype.showRichTooltip = function(e) {
                        var t = this;
                        this.clearTimeoutAndRun(function() {
                            t.setState({
                                richOptions: e,
                                options: null
                            })
                        }, e && e.delayOpenMS && !this.hoverTimeout ? e.delayOpenMS : 0), this.hoverTimeout && (clearTimeout(this.hoverTimeout), this.hoverTimeout = 0)
                    }, t.prototype.hideTooltip = function(e) {
                        var t = this;
                        e || this.state.hovering || this.displayTimeout || (this.hoverTimeout = setTimeout(function() {
                            clearTimeout(t.hoverTimeout), t.hoverTimeout = 0
                        }, 1e3)), this.clearTimeoutAndRun(function() {
                            t.state.hovering || t.setState({
                                options: null,
                                richOptions: null
                            })
                        }, !e && this.state.richOptions && this.state.richOptions.allowHover ? 400 : 0)
                    }, t
                }(o.Component));

            function m() {
                return function(e) {
                    return function(t) {
                        function n() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.logger = u.k.withCategory("TooltipLayer"), e.show = function(t) {
                                i ? i.showTooltip(t) : e.logger.error(new Error, "Attempted to show a tooltip in the global layer, but the global layer was not mounted.")
                            }, e.showRich = function(t) {
                                i ? i.showRichTooltip(t) : e.logger.error(new Error, "Attempted to show a tooltip in the global layer, but the global layer was not mounted.")
                            }, e.hide = function() {
                                i ? i.hideTooltip() : e.logger.error(new Error, "Attempted to show a tooltip in the global layer, but the global layer was not mounted.")
                            }, e
                        }
                        return r.__extends(n, t), n.prototype.render = function() {
                            var t = {
                                tooltipLayer: {
                                    show: this.show,
                                    showRich: this.showRich,
                                    hide: this.hide
                                }
                            };
                            return o.createElement(e, r.__assign({}, this.props, t))
                        }, n.displayName = "WithTooltipLayerManipulation(" + (e.displayName || e.name || "Component") + ")", n
                    }(o.Component)
                }
            }
            n.d(t, "a", function() {
                return d
            }), n.d(t, !1, function() {}), n.d(t, "c", function() {
                return m
            }), n.d(t, "b", function() {
                return p
            }), n.d(t, !1, function() {})
        },
        "BQs+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "b", function() {
                return u
            });
            var i, r = n("mrSG"),
                a = n("/7QA"),
                o = n("2xye"),
                s = n("I6K6"),
                l = n("bTcf"),
                c = n("L7EG");

            function d(e, t, n) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var i, l, u, p;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, n.query({
                                    query: c,
                                    variables: {
                                        videoID: e.id
                                    }
                                })];
                            case 1:
                                return i = r.sent().data, l = function(e, t) {
                                    return {
                                        id: e.id,
                                        owner: t.owner,
                                        broadcastType: t.broadcastType,
                                        game: t.game
                                    }
                                }(e, i.video), u = {
                                    channel: l.owner ? l.owner.login : null,
                                    channel_id: Number(e.owner.id),
                                    game: l.game ? l.game.name : null,
                                    partner: !!l.owner && l.owner.roles.isPartner,
                                    location: t.location,
                                    share_context: t.collectionID ? o.ShareItemContext.Collection : null,
                                    share_platform: t.platform,
                                    shared_item_id: t.collectionID ? t.collectionID : l.id,
                                    shared_item_type: t.collectionID ? o.ShareItemType.Collection : Object(s.a)(l.broadcastType),
                                    shared_item_url: t.shareURL,
                                    source_item_id: l.id,
                                    source_item_type: Object(s.a)(l.broadcastType)
                                }, a.p.tracking.track(o.SpadeEventType.ShareItem, u), [3, 3];
                            case 2:
                                return p = r.sent(), a.k.error(p.toString(), d.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function u(e, t, n) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var i, s, c;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, n.query({
                                    query: l,
                                    variables: {
                                        creatorID: e.owner.id
                                    }
                                })];
                            case 1:
                                return i = r.sent().data, s = {
                                    channel: i.user ? i.user.login : null,
                                    channel_id: Number(e.owner.id),
                                    game: null,
                                    partner: !!i.user && i.user.roles.isPartner,
                                    location: t.location,
                                    share_context: null,
                                    share_platform: t.platform,
                                    shared_item_id: e.id,
                                    shared_item_type: o.ShareItemType.Collection,
                                    shared_item_url: t.shareURL,
                                    source_item_id: e.id,
                                    source_item_type: o.SourceItemType.Collection
                                }, a.p.tracking.track(o.SpadeEventType.ShareItem, s), [3, 3];
                            case 2:
                                return c = r.sent(), a.k.error(c.toString(), u.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }! function(e) {
                e.Copy = "link", e.Embed = "option_embed", e.Facebook = "fb", e.Link = "option_link", e.Reddit = "reddit", e.Twitter = "twitter", e.Unknown = "", e.VKontakte = "vk", e.Download = "download"
            }(i || (i = {}))
        },
        Ba7Q: function(e, t, n) {
            "use strict";
            var i, r = n("/MKj"),
                a = n("kRBY"),
                o = n("mrSG"),
                s = n("TSYQ"),
                l = n("q1tI"),
                c = n("oJmH"),
                d = n("/7QA"),
                u = n("yR8l"),
                p = n("geRD"),
                m = n("JcRA"),
                f = n("0OKo"),
                h = n("Ar2k"),
                g = n("Ue10"),
                v = n("htqZ"),
                E = (n("q5AV"), n("i46O"));
            ! function(e) {
                e.Toggle = "type_toggle", e.Button = "type_button"
            }(i || (i = {}));
            var b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isFollowing: !1,
                            disableNotifications: !0
                        }, t.toggleNotificationsEnabled = function() {
                            var e = t.getFollowData();
                            if (e) {
                                var n = e && e.id || "",
                                    i = {
                                        disableNotifications: !t.state.disableNotifications,
                                        targetID: n
                                    },
                                    r = {
                                        followUser: {
                                            __typename: "FollowUserPayload",
                                            follow: {
                                                __typename: "Follow",
                                                user: {
                                                    __typename: "User",
                                                    id: n,
                                                    self: {
                                                        __typename: "UserSelfConnection",
                                                        follower: {
                                                            __typename: "FollowerEdge",
                                                            disableNotifications: !t.state.disableNotifications
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    };
                                t.props.followUser(Object(p.b)(i, r)), t.setState(function(e) {
                                    return {
                                        disableNotifications: !e.disableNotifications
                                    }
                                })
                            }
                        }, t.setButtonContainerRef = function(e) {
                            t.buttonContainerRef !== e && (t.removeEventListeners(), t.buttonContainerRef = e, t.addEventListeners())
                        }, t.onMouseEnter = function() {
                            if (t.buttonContainerRef && t.props.showTooltips) {
                                var e = t.state.disableNotifications ? Object(d.d)("Turn notifications on", "LiveNotificationsToggle") : Object(d.d)("Turn notifications off", "LiveNotificationsToggle");
                                t.props.tooltipLayer.show({
                                    from: t.buttonContainerRef,
                                    label: e,
                                    direction: g.Tb.Right
                                })
                            }
                        }, t.onMouseLeave = function() {
                            t.props.tooltipLayer.hide()
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentWillMount = function() {
                        var e = this.getFollowData();
                        if (e) {
                            var t = e.self && e.self.follower && e.self.follower.disableNotifications;
                            this.setState({
                                isFollowing: null !== t || !1,
                                disableNotifications: t
                            })
                        }
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = null;
                        e.followData && e.followData ? t = e.followData : !e.data || e.data.loading || e.data.error || (t = e.data.user), t && this.setState({
                            isFollowing: t && t.self && t.self.follower && null !== t.self.follower.disableNotifications || !1,
                            disableNotifications: !(t && t.self && t.self.follower && null !== t.self.follower.disableNotifications) || t.self.follower.disableNotifications
                        })
                    }, t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.addEventListeners()
                    }, t.prototype.componentWillUnmount = function() {
                        this.removeEventListeners()
                    }, t.prototype.render = function() {
                        return this.props.toggleType && this.props.toggleType === i.Button ? this.renderTypeButton() : this.renderTypeToggle()
                    }, t.prototype.renderTypeButton = function() {
                        var e = this.state.disableNotifications,
                            t = e ? g.pb.NotificationBellOff : g.pb.NotificationBell,
                            n = e ? g.pb.NotificationBell : g.pb.NotificationBellOff,
                            i = s("live-notifications__btn");
                        return l.createElement(g.yb, {
                            className: i,
                            refDelegate: this.setButtonContainerRef
                        }, l.createElement(m.a, {
                            tabIndex: this.props.tabIndex || 0,
                            icon: t,
                            iconOnHover: n,
                            type: g.F.Text,
                            onClick: this.toggleNotificationsEnabled
                        }))
                    }, t.prototype.renderTypeToggle = function() {
                        var e, t;
                        return this.state.isFollowing ? this.state.disableNotifications ? (t = "live-notifications-toggle__status-text--disabled", e = Object(d.d)("Opt in to notifications to receive updates on this channel's activity, including when they go live.", "LiveNotificationsToggle")) : (t = "live-notifications-toggle__status-text--enabled", e = Object(d.d)("You will be notified on this channel's activity, including when they go live.", "LiveNotificationsToggle")) : (e = Object(d.d)("Follow this channel to receive notifications when they go live.", "LiveNotificationsToggle"), t = "live-notifications-toggle__status-text--not-following"), l.createElement(g.yb, {
                            color: g.O.Base,
                            display: g.X.Flex,
                            flexWrap: g.Ba.Wrap
                        }, l.createElement(g.Xa, {
                            display: g.X.Flex,
                            flexWrap: g.Ba.NoWrap,
                            fullWidth: !0,
                            justifyContent: g.Wa.Between
                        }, l.createElement(g.Xa, {
                            display: g.X.Flex,
                            padding: {
                                right: 2
                            }
                        }, l.createElement("span", null, l.createElement(g.W, {
                            fontSize: g.Ca.Size4,
                            bold: !0
                        }, Object(d.d)("Notifications", "LiveNotificationsToggle")))), l.createElement(g.Xa, {
                            display: g.X.Flex,
                            flexShrink: 0
                        }, l.createElement(g.Qb, {
                            onChange: this.toggleNotificationsEnabled,
                            checked: !this.state.disableNotifications,
                            "data-test-selector": "live-notifications-toggle__toggle",
                            "data-a-target": "notifications-toggle",
                            disabled: !this.state.isFollowing
                        }))), l.createElement(g.Xa, {
                            display: g.X.InlineFlex,
                            padding: {
                                bottom: 1
                            }
                        }, l.createElement(g.W, {
                            type: g.Ob.Span,
                            color: g.O.Alt2,
                            "data-test-selector": t
                        }, e)))
                    }, t.prototype.getFollowData = function() {
                        return this.props.followData || this.props.data && this.props.data.user
                    }, t.prototype.addEventListeners = function() {
                        this.buttonContainerRef && (this.buttonContainerRef.addEventListener("mouseover", this.onMouseEnter), this.buttonContainerRef.addEventListener("mouseleave", this.onMouseLeave))
                    }, t.prototype.removeEventListeners = function() {
                        this.buttonContainerRef && (this.buttonContainerRef.removeEventListener("mouseover", this.onMouseEnter), this.buttonContainerRef.removeEventListener("mouseleave", this.onMouseLeave))
                    }, t
                }(l.Component),
                y = Object(c.compose)(Object(u.a)(E, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !(e.firstPageLoaded && e.isLoggedIn && e.channelLogin && !e.followData)
                    }
                }), Object(u.a)(v, {
                    name: "followUser"
                }), Object(h.c)(), Object(f.a)("LiveNotificationsToggle"))(b);
            var T = Object(r.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    isLoggedIn: Object(a.f)(e)
                }
            })(y);
            n.d(t, "a", function() {
                return T
            }), n.d(t, "b", function() {
                return i
            })
        },
        BhFH: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i = n("mrSG"),
                r = n("yR8l"),
                a = n("8jSG"),
                o = n("cMjZ"),
                s = n("kSkr");

            function l() {
                var e = this;
                return Object(r.a)(s, {
                    props: function(t) {
                        return {
                            blockUserMutation: function(n, r, s, l) {
                                return i.__awaiter(e, void 0, void 0, function() {
                                    return i.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: {
                                                            targetUserID: n,
                                                            sourceContext: s,
                                                            reason: r
                                                        }
                                                    },
                                                    optimisticResponse: {
                                                        blockUser: {
                                                            __typename: "BlockUserPayload",
                                                            targetUser: {
                                                                __typename: "User",
                                                                id: n
                                                            }
                                                        }
                                                    },
                                                    update: function(e) {
                                                        var t = e.readFragment({
                                                            id: Object(o.a)(l),
                                                            fragment: a
                                                        });
                                                        t && (t.blockedUsers.push({
                                                            id: n,
                                                            __typename: "User"
                                                        }), e.writeFragment({
                                                            id: Object(o.a)(l),
                                                            fragment: a,
                                                            data: t
                                                        }))
                                                    }
                                                })] : [3, 2];
                                            case 1:
                                                return e.sent(), [3, 3];
                                            case 2:
                                                throw new Error("blockUserMutation is not ready");
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })
            }
        },
        C94G: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            }), n.d(t, "b", function() {
                return p
            });
            var i, r, a = n("mrSG"),
                o = n("ix15"),
                s = n("cr+I"),
                l = n("/7QA"),
                c = n("D7An"),
                d = {
                    key: "cvp-log",
                    validValues: ["debug", "error", "info", "warn"],
                    defaultValue: "error"
                };

            function u(e) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var t, r;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                if (i) return e && e(i), [2];
                                a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]), [4, Promise.all([n.e(0), n.e(95)]).then(function() {
                                    var e = n("zK2r");
                                    return "object" == typeof e && e && e.__esModule ? e : Object.assign({}, "object" == typeof e && e, {
                                        default: e
                                    })
                                })];
                            case 2:
                                return t = a.sent(), i = t.Player, e && e(i), [3, 4];
                            case 3:
                                return r = a.sent(), l.p.logger.error(r, "Unable to load twitch-player-ui chunk"), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }

            function p() {
                return a.__awaiter(this, void 0, void 0, function() {
                    var e, t;
                    return a.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (e = l.p.logger.withCategory("player-core"), !(t = function() {
                                        var e = l.p.store.getState(),
                                            t = !(!e.session.user || !e.session.user.roles) && e.session.user.roles.isStaff,
                                            n = l.p.experiments.getAssignment(t ? c.b.CVPStaffVersion : c.b.CVPPlayerVersion),
                                            i = l.p.experiments.getAssignment(c.b.CVPPlayerType);
                                        if (!n) return;
                                        return {
                                            forceAsmJs: i === r.ASM,
                                            logLevel: function() {
                                                var e = s.parse(window.location.search)[d.key];
                                                if (!e || -1 === d.validValues.indexOf(e)) return d.defaultValue;
                                                return e
                                            }(),
                                            value: n
                                        }
                                    }())) return e.warn("Player core load options are invalid", {
                                    playerCoreOptions: t
                                }), [2];
                                n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, Object(o.loadMediaPlayer)(t, !0)];
                            case 2:
                                return n.sent(), [3, 4];
                            case 3:
                                return n.sent(), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }! function(e) {
                e.ASM = "asmjs"
            }(r || (r = {}))
        },
        CLrI: function(e, t, n) {
            "use strict";
            var i, r;
            n.d(t, "a", function() {
                    return i
                }), n.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.TrackingID = "trackingID", e.GameName = "game", e.GameID = "gameID", e.Title = "title", e.Start = "start", e.End = "end"
                }(i || (i = {})),
                function(e) {
                    e.VideoStartTime = "t"
                }(r || (r = {}))
        },
        CYfc: function(e, t, n) {
            "use strict";
            var i = n("vhpE");
            n.d(t, "a", function() {
                return i.a
            }), n.d(t, "b", function() {
                return i.b
            })
        },
        CZEr: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "FollowButton_UnfollowUser"
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
                                    value: "UnfollowUserInput"
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
                                value: "unfollowUser"
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
                                        }, {
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
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "followButtonFragment"
                                                    },
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
                    end: 224
                }
            };
            i.loc.source = {
                body: '#import "twilight/common/queries/follow-button-fragment.gql"\nmutation FollowButton_UnfollowUser($input: UnfollowUserInput!) {\nunfollowUser(input: $input) {\nfollow {\ndisableNotifications\nuser {\n...followButtonFragment\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("V94A").definitions)), e.exports = i
        },
        ClZk: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return s
            }), n.d(t, "f", function() {
                return l
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "e", function() {
                return d
            }), n.d(t, "b", function() {
                return u
            }), n.d(t, "a", function() {
                return p
            });
            var i = n("mrSG"),
                r = n("KxT4"),
                a = n("eLB1"),
                o = n("SmhC");

            function s(e, t) {
                var n = e.gdpr,
                    i = n.status,
                    r = n.vendorPreferences;
                return i !== a.a.Skip && (i === a.a.BelowMinimumAge || !l(Object(o.a)(), r, t))
            }

            function l(e, t, n) {
                return void 0 !== t[n] ? t[n] : e[n].defaultConsent
            }

            function c(e) {
                return Object(r.f)() && e === a.a.ConsentRequired
            }

            function d(e) {
                return function(e) {
                    return e.gdpr.status === a.a.Loading
                }(e) || c(e.gdpr.status)
            }

            function u(e, t) {
                var n = i.__assign({}, e);
                return n = Object.keys(n).reduce(function(e, n) {
                    var r;
                    return i.__assign({}, e, ((r = {})[n] = t, r))
                }, n)
            }

            function p(e, t) {
                return Object.keys(e).every(function(n) {
                    return e[n] === t
                })
            }
        },
        DJtx: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Clips_ModalDelete"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "broadcaster"
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
                                        value: "curator"
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
                                        value: "thumbnailURL"
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
                    end: 143
                }
            };
            n.loc.source = {
                body: "query Clips_ModalDelete($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ncurator {\nid\nlogin\n}\nthumbnailURL\ncreatedAt\nviewCount\ntitle\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "DLy/": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("fvjX"),
                o = n("/7QA"),
                s = n("EuPq"),
                l = n("X7Ac"),
                c = n("wbMx"),
                d = n("eJ65"),
                u = n("yR8l"),
                p = n("EdhP"),
                m = n("+GjP"),
                f = n("GnwI"),
                h = n("CYfc"),
                g = n("MLDe"),
                v = n("4L7N"),
                E = n("QK1T"),
                b = n("u5aL"),
                y = n("Jxh/"),
                T = n("r62z"),
                O = n("Ue10"),
                S = (n("+T1G"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getUrl = function() {
                            return t.props.url || window.location.href
                        }, t.onShareClick = function() {
                            t.props.onShareClick && t.props.onShareClick(t.props.type)
                        }, t.copyPageUrl = function() {
                            t.onShareClick(), Object(y.a)(t.getUrl())
                        }, t.renderIcon = function() {
                            var e = t.getAssetFromType();
                            return r.createElement(O.Xa, {
                                className: "clips-mobile-share-sheet__share-icon clips-social-button__icon " + t.addSocialClassModifier("clips-social-button__icon")
                            }, r.createElement(O.ob, {
                                asset: e,
                                fill: !0
                            }))
                        }, t.isLink = function() {
                            return t.props.type !== c.b.Copy
                        }, t.getAssetFromType = function() {
                            switch (t.props.type) {
                                case c.b.Twitter:
                                    return O.pb.Twitter;
                                case c.b.Facebook:
                                    return O.pb.Facebook;
                                case c.b.VKontakte:
                                    return O.pb.VKontakte;
                                case c.b.Reddit:
                                    return O.pb.Reddit;
                                case c.b.Copy:
                                default:
                                    return O.pb.Copy
                            }
                        }, t.getLabelFromType = function() {
                            switch (t.props.type) {
                                case c.b.Twitter:
                                    return Object(o.d)("Twitter", "ClipsSocialShare");
                                case c.b.Facebook:
                                    return Object(o.d)("Facebook", "ClipsSocialShare");
                                case c.b.VKontakte:
                                    return Object(o.d)("VK", "ClipsSocialShare");
                                case c.b.Reddit:
                                    return Object(o.d)("Reddit", "ClipsSocialShare");
                                case c.b.Copy:
                                    return Object(o.d)("Copy", "ClipsSocialShare");
                                default:
                                    return ""
                            }
                        }, t.addSocialClassModifier = function(e) {
                            switch (t.props.type) {
                                case c.b.Twitter:
                                    return e + "--twitter";
                                case c.b.Reddit:
                                    return e + "--reddit";
                                case c.b.Facebook:
                                    return e + "--facebook";
                                case c.b.VKontakte:
                                    return e + "--vkontakte";
                                case c.b.Copy:
                                    return e + "--copy";
                                default:
                                    return ""
                            }
                        }, t.getLinkTarget = function() {
                            var e = t.props,
                                n = e.text,
                                i = e.type,
                                r = t.getUrl(),
                                a = n || "";
                            switch (i) {
                                case c.b.Reddit:
                                    return Object(T.b)(r, a);
                                case c.b.VKontakte:
                                    return Object(T.d)(r);
                                case c.b.Facebook:
                                    return Object(T.a)(r);
                                case c.b.Twitter:
                                    return Object(T.c)(r, a);
                                default:
                                    return ""
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = r.createElement(O.Xa, {
                            className: "clips-mobile-share-sheet__row",
                            display: O.X.Flex,
                            alignItems: O.f.Center,
                            key: this.props.type,
                            margin: {
                                bottom: 1,
                                x: 2
                            }
                        }, this.renderIcon(), r.createElement(O.yb, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(O.W, {
                            type: O.Ob.Span
                        }, this.getLabelFromType())));
                        return this.renderLink(e)
                    }, t.prototype.renderLink = function(e) {
                        return this.isLink() ? r.createElement("a", {
                            href: this.getLinkTarget(),
                            target: "_blank",
                            onClick: this.onShareClick,
                            "data-test-selector": "clips-social-button__link"
                        }, e) : r.createElement("div", {
                            onClick: this.copyPageUrl,
                            "data-test-selector": "clips-social-button__link"
                        }, e)
                    }, t
                }(r.Component)),
                _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isModalOpen: !1,
                            isCopiedModalOpen: !1
                        }, t.onToggleShareButton = function() {
                            t.setState(function(e) {
                                return {
                                    isModalOpen: !e.isModalOpen
                                }
                            })
                        }, t.onShareClick = function(e) {
                            t.setState({
                                isModalOpen: !1
                            }), e === c.b.Copy && (t.setState({
                                isCopiedModalOpen: !0
                            }), setTimeout(function() {
                                return t.setState({
                                    isCopiedModalOpen: !1
                                })
                            }, 1500))
                        }, t.onClickOut = function() {
                            t.setState({
                                isModalOpen: !1
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.props.clip.id && e.clip.id && this.props.clip.id !== e.clip.id && this.setState({
                            isModalOpen: !1
                        })
                    }, t.prototype.render = function() {
                        var e = this,
                            t = Object(o.d)("Share Clip", "ClipsSocialShare"),
                            n = Object(o.d)("Copied!", "ClipsSocialShare");
                        return r.createElement(O.Xa, {
                            display: O.X.Flex,
                            justifyContent: O.Wa.End,
                            alignItems: O.f.Center,
                            margin: {
                                top: 1,
                                bottom: 1
                            }
                        }, r.createElement(O.z, {
                            type: O.F.Hollow,
                            onClick: this.onToggleShareButton,
                            "data-test-selector": "social-share-mobile-button"
                        }, t), this.state.isModalOpen && r.createElement(O.yb, {
                            position: O.fb.Fixed,
                            background: O.r.Overlay,
                            zIndex: O.bc.Above,
                            attachLeft: !0,
                            attachTop: !0,
                            fullHeight: !0,
                            fullWidth: !0
                        }, r.createElement(b.a, {
                            onClickOut: this.onClickOut
                        }, r.createElement(O.Xa, {
                            position: O.fb.Absolute,
                            attachLeft: !0,
                            attachRight: !0,
                            attachBottom: !0,
                            className: "clips-mobile-share-sheet",
                            display: O.X.Flex,
                            flexDirection: O.Aa.Column,
                            zIndex: O.bc.Above,
                            "data-test-selector": "social-share-mobile-menu-root"
                        }, r.createElement(O.i, {
                            type: O.n.SlideInBottom,
                            enabled: this.state.isModalOpen
                        }, r.createElement(O.yb, {
                            background: O.r.Base,
                            elevation: 3,
                            padding: {
                                bottom: 2
                            }
                        }, r.createElement(O.yb, {
                            className: "clips-mobile-share-sheet__title",
                            display: O.X.Flex,
                            flexDirection: O.Aa.Row,
                            justifyContent: O.Wa.Between,
                            alignItems: O.f.Center,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                right: 1,
                                left: 2
                            },
                            borderBottom: !0
                        }, r.createElement(O.W, {
                            bold: !0,
                            color: O.O.Alt,
                            type: O.Ob.Span,
                            fontSize: O.Ca.Size6,
                            "data-test-selector": "social-share-mobile-menu-title"
                        }, t), r.createElement(O.A, {
                            "data-test-selector": "social-share-mobile-menu-close",
                            icon: O.pb.Close,
                            ariaLabel: "Close Share",
                            size: O.B.Large,
                            onClick: this.onToggleShareButton
                        })), r.createElement(O.Xa, null, h.b.map(function(t) {
                            return r.createElement(S, {
                                key: t.type,
                                type: t.type,
                                text: e.props.clip.title,
                                url: Object(m.e)(e.props.clip.url, t.params),
                                onShareClick: e.onShareClick
                            })
                        }))))))), this.state.isCopiedModalOpen && r.createElement(O.Xa, {
                            fullWidth: !0,
                            attachLeft: !0,
                            attachBottom: !0,
                            className: "clips-mobile-share-sheet",
                            position: O.fb.Fixed,
                            zIndex: O.bc.Above
                        }, r.createElement(O.i, {
                            type: O.n.SlideInBottom,
                            duration: O.k.Short,
                            enabled: this.state.isCopiedModalOpen
                        }, r.createElement(O.yb, {
                            padding: {
                                x: 1,
                                y: 1
                            },
                            background: O.r.Base,
                            elevation: 3,
                            borderTop: !0,
                            display: O.X.Flex,
                            alignItems: O.f.Center
                        }, r.createElement(O.Xa, {
                            margin: {
                                right: .5
                            }
                        }, r.createElement(O.i, {
                            type: O.n.BounceIn,
                            duration: O.k.Medium,
                            delay: O.j.Short,
                            enabled: this.state.isCopiedModalOpen
                        }, r.createElement(O.ob, {
                            type: O.qb.Success,
                            asset: O.pb.Check
                        }))), r.createElement(O.W, {
                            type: O.Ob.Span,
                            fontSize: O.Ca.Size4,
                            bold: !0
                        }, n)))))
                    }, t
                }(r.Component),
                k = n("ydo7"),
                N = (n("rb53"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.trackLinkShare = function() {
                            var e = t.props.data.clip;
                            if (e) return Object(g.c)(e.id, e.game && e.game.name, e.broadcaster && e.broadcaster.id, e.broadcaster && e.broadcaster.login, t.props.pageType)(l.b.CopyInput)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props.data.clip,
                            n = Object(E.c)(window.navigator.userAgent),
                            i = !(!t || !t.id);
                        if (!i && !n) return r.createElement(O.Xa, null, this.renderPlaceholders());
                        if (!i && n) return r.createElement(O.Xa, null, this.renderMobilePlaceholders());
                        if (n) return r.createElement(_, {
                            clip: t
                        });
                        var a = Object(o.d)("More", "ClipsSocialShare");
                        return r.createElement(O.Xa, {
                            display: O.X.Flex,
                            position: O.fb.Relative,
                            zIndex: O.bc.Above,
                            justifyContent: O.Wa.End,
                            alignItems: O.f.Center,
                            margin: {
                                y: 1
                            }
                        }, r.createElement(O.Xa, {
                            display: O.X.InlineBlock,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(v.a, {
                            broadcasterLogin: t.broadcaster && t.broadcaster.login || "",
                            broadcasterId: t.broadcaster && t.broadcaster.id || "",
                            slug: this.props.slug,
                            pageType: this.props.pageType
                        })), h.b.map(function(n) {
                            return r.createElement(O.Xa, {
                                display: O.X.InlineBlock,
                                key: n.type,
                                margin: {
                                    right: 1
                                }
                            }, r.createElement(c.a, {
                                key: n.type,
                                type: n.type,
                                text: t.title,
                                url: Object(m.e)(t.url, n.params),
                                onShareClick: Object(g.c)(t.id, t.game && t.game.name, t.broadcaster && t.broadcaster.id, t.broadcaster && t.broadcaster.login, e.props.pageType)
                            }))
                        }), r.createElement(O.Xa, {
                            display: O.X.InlineBlock,
                            position: O.fb.Relative
                        }, r.createElement(d.a, null, r.createElement(O.z, {
                            type: O.F.Hollow,
                            ariaLabel: a,
                            "data-a-target": "clips-share-button",
                            "data-test-selector": "social-share-button"
                        }, a), r.createElement(O.u, {
                            direction: O.v.BottomRight,
                            noTail: !0
                        }, r.createElement(O.Xa, {
                            padding: 1
                        }, r.createElement(O.Ea, {
                            id: "social-share-link",
                            orientation: O.Fa.Vertical,
                            label: Object(o.d)("Link", "ClipsSocialShare"),
                            "data-test-selector": "social-share-link"
                        }, r.createElement(s.a, {
                            value: t.url,
                            onClick: this.trackLinkShare
                        })), r.createElement(O.Xa, {
                            padding: {
                                top: 1
                            }
                        }, r.createElement(O.Ea, {
                            id: "social-share-link",
                            orientation: O.Fa.Vertical,
                            label: Object(o.d)("Embed Link", "ClipsSocialShare"),
                            "data-test-selector": "social-share-embed-link"
                        }, r.createElement(s.a, {
                            value: Object(p.a)(this.props.data.clip.embedURL),
                            onClick: this.trackLinkShare
                        }))))))))
                    }, t.prototype.reportInteractive = function() {
                        this.props.data.clip && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.renderPlaceholders = function() {
                        return r.createElement(O.i, {
                            type: O.n.FadeIn,
                            duration: O.k.Medium,
                            enabled: !0
                        }, r.createElement(O.Xa, {
                            margin: {
                                top: 1,
                                bottom: 1
                            },
                            display: O.X.Flex,
                            justifyContent: O.Wa.End
                        }, r.createElement(O.Xa, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(O.eb, {
                            width: 30,
                            height: 30
                        })), r.createElement(O.Xa, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(O.eb, {
                            width: 30,
                            height: 30
                        })), r.createElement(O.Xa, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(O.eb, {
                            width: 30,
                            height: 30
                        })), r.createElement(O.Xa, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(O.eb, {
                            width: 30,
                            height: 30
                        })), r.createElement(O.Xa, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(O.eb, {
                            width: 46,
                            height: 30
                        }))))
                    }, t.prototype.renderMobilePlaceholders = function() {
                        return r.createElement(O.Xa, {
                            margin: {
                                y: 1
                            },
                            display: O.X.Flex,
                            justifyContent: O.Wa.End
                        }, r.createElement(O.Xa, null, r.createElement(O.eb, {
                            width: 72,
                            height: 30
                        })))
                    }, t
                }(r.Component)),
                C = Object(a.compose)(Object(f.b)("ClipsSocialShare"), Object(u.a)(k))(N);
            n.d(t, "a", function() {
                return C
            })
        },
        DMoW: function(e, t, n) {
            "use strict";
            var i, r, a, o, s, l, c, d, u, p, m, f, h, g, v, E, b, y, T, O, S, _, k, N, C, R, I, D, A, w, L, M, P, F, U, x, B, V, j, W, G, H, z, X, q, Y, K, Q, Z, $, J, ee, te, ne, ie, re, ae, oe, se, le, ce, de, ue, pe, me, fe, he, ge, ve, Ee, be, ye, Te, Oe, Se, _e, ke, Ne, Ce, Re, Ie, De, Ae, we, Le, Me, Pe, Fe, Ue, xe, Be, Ve, je, We, Ge, He, ze, Xe, qe, Ye, Ke, Qe, Ze, $e, Je, et, tt, nt, it, rt;
            n.d(t, "c", function() {
                    return r
                }), n.d(t, "E", function() {
                    return s
                }), n.d(t, "x", function() {
                    return l
                }), n.d(t, "g", function() {
                    return h
                }), n.d(t, "e", function() {
                    return b
                }), n.d(t, "f", function() {
                    return y
                }), n.d(t, "j", function() {
                    return S
                }), n.d(t, "N", function() {
                    return _
                }), n.d(t, "G", function() {
                    return k
                }), n.d(t, "n", function() {
                    return N
                }), n.d(t, "F", function() {
                    return I
                }), n.d(t, "b", function() {
                    return P
                }), n.d(t, "p", function() {
                    return F
                }), n.d(t, "o", function() {
                    return x
                }), n.d(t, "I", function() {
                    return B
                }), n.d(t, "K", function() {
                    return V
                }), n.d(t, "z", function() {
                    return j
                }), n.d(t, "L", function() {
                    return W
                }), n.d(t, "q", function() {
                    return z
                }), n.d(t, "m", function() {
                    return X
                }), n.d(t, "J", function() {
                    return q
                }), n.d(t, "a", function() {
                    return Y
                }), n.d(t, "t", function() {
                    return K
                }), n.d(t, "v", function() {
                    return Q
                }), n.d(t, "B", function() {
                    return $
                }), n.d(t, "C", function() {
                    return J
                }), n.d(t, "A", function() {
                    return te
                }), n.d(t, "D", function() {
                    return ne
                }), n.d(t, "M", function() {
                    return fe
                }), n.d(t, "l", function() {
                    return Se
                }), n.d(t, "k", function() {
                    return _e
                }), n.d(t, "O", function() {
                    return Re
                }), n.d(t, "y", function() {
                    return Me
                }), n.d(t, "s", function() {
                    return Ue
                }), n.d(t, "i", function() {
                    return Be
                }), n.d(t, "h", function() {
                    return Ve
                }), n.d(t, "u", function() {
                    return je
                }), n.d(t, "H", function() {
                    return Ge
                }), n.d(t, "w", function() {
                    return Ye
                }), n.d(t, "d", function() {
                    return nt
                }), n.d(t, "r", function() {
                    return it
                }),
                function(e) {
                    e.CHANNEL_FEED_COMMENT_REPORT = "CHANNEL_FEED_COMMENT_REPORT", e.CHANNEL_FEED_POST_REPORT = "CHANNEL_FEED_POST_REPORT", e.CHAT_REPORT = "CHAT_REPORT", e.CLIP_REPORT = "CLIP_REPORT", e.COLLECTION_REPORT = "COLLECTION_REPORT", e.CURSE_PRIVATE_GROUP = "CURSE_PRIVATE_GROUP", e.CURSE_PUBLIC_GROUP = "CURSE_PUBLIC_GROUP", e.CURSE_WHISPER = "CURSE_WHISPER", e.EVENT_REPORT = "EVENT_REPORT", e.EXTENSION_REPORT = "EXTENSION_REPORT", e.LIVE_UP_REPORT = "LIVE_UP_REPORT", e.RAID_REPORT = "RAID_REPORT", e.ROOM_REPORT = "ROOM_REPORT", e.SINGS_DUET_SEED_REPORT = "SINGS_DUET_SEED_REPORT", e.SINGS_GROUP_BIO_REPORT = "SINGS_GROUP_BIO_REPORT", e.SINGS_GROUP_CHAT_REPORT = "SINGS_GROUP_CHAT_REPORT", e.SINGS_GROUP_NAME_REPORT = "SINGS_GROUP_NAME_REPORT", e.SINGS_VOD_COMMENT_REPORT = "SINGS_VOD_COMMENT_REPORT", e.USER_REPORT = "USER_REPORT", e.VOD_COMMENT_REPORT = "VOD_COMMENT_REPORT", e.VOD_REPORT = "VOD_REPORT", e.WHISPER_REPORT = "WHISPER_REPORT"
                }(i || (i = {})),
                function(e) {
                    e.CHAT = "CHAT", e.WHISPER = "WHISPER"
                }(r || (r = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.TARGET_ALREADY_MOD = "TARGET_ALREADY_MOD", e.TARGET_IS_CHAT_BANNED = "TARGET_IS_CHAT_BANNED", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(a || (a = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND", e.TARGET_NOT_MOD = "TARGET_NOT_MOD"
                }(o || (o = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.REVOKEE_NOT_FOUND = "REVOKEE_NOT_FOUND", e.REVOKEE_NOT_VIP = "REVOKEE_NOT_VIP"
                }(s || (s = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.GRANTEE_ALREADY_VIP = "GRANTEE_ALREADY_VIP", e.GRANTEE_CHAT_BANNED = "GRANTEE_CHAT_BANNED", e.GRANTEE_NOT_FOUND = "GRANTEE_NOT_FOUND", e.MAX_VIPS_REACHED = "MAX_VIPS_REACHED", e.VIP_ACHIEVEMENT_INCOMPLETE = "VIP_ACHIEVEMENT_INCOMPLETE"
                }(l || (l = {})),
                function(e) {
                    e.PLAYING = "PLAYING", e.STREAMING = "STREAMING", e.WATCHING = "WATCHING"
                }(c || (c = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.IDLE = "IDLE", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(d || (d = {})),
                function(e) {
                    e.IDLE = "IDLE", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(u || (u = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(p || (p = {})),
                function(e) {
                    e.AR = "AR", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.EN_GB = "EN_GB", e.ES = "ES", e.ES_MX = "ES_MX", e.FI = "FI", e.FR = "FR", e.HI = "HI", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.PL = "PL", e.PT = "PT", e.PT_BR = "PT_BR", e.RO = "RO", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH", e.ZH_CN = "ZH_CN", e.ZH_TW = "ZH_TW"
                }(m || (m = {})),
                function(e) {
                    e.AR = "AR", e.ASL = "ASL", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.ES = "ES", e.FI = "FI", e.FR = "FR", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.OTHER = "OTHER", e.PL = "PL", e.PT = "PT", e.RO = "RO", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH", e.ZH_HK = "ZH_HK"
                }(f || (f = {})),
                function(e) {
                    e.ARCHIVE = "ARCHIVE", e.HIGHLIGHT = "HIGHLIGHT", e.PAST_PREMIERE = "PAST_PREMIERE", e.PREMIERE_UPLOAD = "PREMIERE_UPLOAD", e.UPLOAD = "UPLOAD"
                }(h || (h = {})),
                function(e) {
                    e.GET_BITS = "GET_BITS", e.GET_TURBO = "GET_TURBO", e.SUBSCRIBE = "SUBSCRIBE", e.VISIT_URL = "VISIT_URL"
                }(g || (g = {})),
                function(e) {
                    e.ALLTIME = "ALLTIME", e.MONTH = "MONTH", e.WEEK = "WEEK"
                }(v || (v = {})),
                function(e) {
                    e.AD = "AD", e.BUNDLE = "BUNDLE"
                }(E || (E = {})),
                function(e) {
                    e.GAME_TRAILER = "GAME_TRAILER", e.MISC_TRAILER = "MISC_TRAILER", e.PAY_TO_STREAM = "PAY_TO_STREAM"
                }(b || (b = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.CANCELLED = "CANCELLED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE"
                }(y || (y = {})),
                function(e) {
                    e.FIXED_VALUE_OFF = "FIXED_VALUE_OFF", e.NONE = "NONE", e.PERCENT_OFF = "PERCENT_OFF"
                }(T || (T = {})),
                function(e) {
                    e.CHEER = "CHEER"
                }(O || (O = {})),
                function(e) {
                    e.CREATED = "CREATED", e.CREATING = "CREATING", e.FAILED = "FAILED"
                }(S || (S = {})),
                function(e) {
                    e.PRIVATE = "PRIVATE", e.PUBLIC = "PUBLIC"
                }(_ || (_ = {})),
                function(e) {
                    e.ENDED = "ENDED", e.LIVE = "LIVE", e.PENDING = "PENDING", e.UNKNOWN = "UNKNOWN"
                }(k || (k = {})),
                function(e) {
                    e.ARCHIVES_DISABLED = "ARCHIVES_DISABLED", e.BROADCASTER_NOT_LIVE = "BROADCASTER_NOT_LIVE", e.BROADCAST_FORMAT_INVALID_PREMIERE = "BROADCAST_FORMAT_INVALID_PREMIERE", e.BROADCAST_FORMAT_INVALID_RERUN = "BROADCAST_FORMAT_INVALID_RERUN", e.INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR", e.MAX_DESCRIPTION_LENGTH_EXCEEDED = "MAX_DESCRIPTION_LENGTH_EXCEEDED", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED", e.VOD_NOT_READY = "VOD_NOT_READY"
                }(N || (N = {})),
                function(e) {
                    e.DARK = "DARK", e.LIGHT = "LIGHT"
                }(C || (C = {})),
                function(e) {
                    e.CUSTOM = "CUSTOM", e.DISPLAY_ONLY = "DISPLAY_ONLY", e.FIRST_PARTY = "FIRST_PARTY", e.RENDER_ONLY = "RENDER_ONLY", e.SPONSORED = "SPONSORED", e.THIRD_PARTY = "THIRD_PARTY", e.UNKNOWN = "UNKNOWN"
                }(R || (R = {})),
                function(e) {
                    e.AMOUNT_BELOW_MIN_BITS = "AMOUNT_BELOW_MIN_BITS", e.AUTO_MOD_MESSAGE = "AUTO_MOD_MESSAGE", e.AUTO_MOD_PENDING = "AUTO_MOD_PENDING", e.CHANNEL_BLOCKED_TERMS = "CHANNEL_BLOCKED_TERMS", e.CHANNEL_INELIGIBLE = "CHANNEL_INELIGIBLE", e.EMOTE_AMOUNT_BELOW_MIN_BITS = "EMOTE_AMOUNT_BELOW_MIN_BITS", e.INSUFFICIENT_BALANCE = "INSUFFICIENT_BALANCE", e.INVALID_BITS_AMOUNT = "INVALID_BITS_AMOUNT", e.INVALID_BITS_MESSAGE = "INVALID_BITS_MESSAGE", e.INVALID_EVENT_ID = "INVALID_EVENT_ID", e.MESSAGE_LENGTH_EXCEEDED = "MESSAGE_LENGTH_EXCEEDED", e.REQUEST_THROTTLED = "REQUEST_THROTTLED", e.TOO_LARGE_BITS_EMOTE = "TOO_LARGE_BITS_EMOTE", e.TOO_LARGE_CHEER = "TOO_LARGE_CHEER", e.UNKNOWN = "UNKNOWN", e.USER_BANNED = "USER_BANNED", e.USER_INELIGIBLE = "USER_INELIGIBLE", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_MESSAGE = "ZALGO_MESSAGE"
                }(I || (I = {})),
                function(e) {
                    e.NEW_CHATTER = "NEW_CHATTER"
                }(D || (D = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(A || (A = {})),
                function(e) {
                    e.FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED = "FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED", e.SUB_ONLY_MODE_ENFORCEMENT_FAILED = "SUB_ONLY_MODE_ENFORCEMENT_FAILED", e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT"
                }(w || (w = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(L || (L = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.DISMISSED = "DISMISSED", e.ELIGIBLE = "ELIGIBLE", e.REDEEMED = "REDEEMED"
                }(M || (M = {})),
                function(e) {
                    e.DURATION_INVALID = "DURATION_INVALID", e.FORBIDDEN = "FORBIDDEN", e.TARGET_ALREADY_BANNED = "TARGET_ALREADY_BANNED", e.TARGET_IS_ADMIN = "TARGET_IS_ADMIN", e.TARGET_IS_ANONYMOUS = "TARGET_IS_ANONYMOUS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_GLOBAL_MOD = "TARGET_IS_GLOBAL_MOD", e.TARGET_IS_MOD = "TARGET_IS_MOD", e.TARGET_IS_SELF = "TARGET_IS_SELF", e.TARGET_IS_STAFF = "TARGET_IS_STAFF", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(P || (P = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.SUCCESS = "SUCCESS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_MODERATOR = "TARGET_IS_MODERATOR"
                }(F || (F = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.TARGET_NOT_BANNED = "TARGET_NOT_BANNED", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(U || (U = {})),
                function(e) {
                    e.EUR = "EUR", e.GBP = "GBP", e.USD = "USD"
                }(x || (x = {})),
                function(e) {
                    e.MONTH = "MONTH", e.ONE_TIME = "ONE_TIME", e.WEEK = "WEEK", e.YEAR = "YEAR"
                }(B || (B = {})),
                function(e) {
                    e.CHANSUB = "CHANSUB", e.TEAMSUB = "TEAMSUB", e.TURBO = "TURBO"
                }(V || (V = {})),
                function(e) {
                    e.GOOGLE_IAB = "GOOGLE_IAB", e.PRIME = "PRIME", e.RECURLY = "RECURLY", e.XSOLLA_V3 = "XSOLLA_V3", e.ZUORA = "ZUORA"
                }(j || (j = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.CANCELLED = "CANCELLED", e.INACTIVE = "INACTIVE"
                }(W || (W = {})),
                function(e) {
                    e.AMAZON = "AMAZON", e.CREDIT_CARD = "CREDIT_CARD", e.GOOGLE_IAB = "GOOGLE_IAB", e.PAYPAL = "PAYPAL"
                }(G || (G = {})),
                function(e) {
                    e.AMERICAN_EXPRESS = "AMERICAN_EXPRESS", e.DISCOVER = "DISCOVER", e.MASTERCARD = "MASTERCARD", e.VISA = "VISA"
                }(H || (H = {})),
                function(e) {
                    e.COMMUNITY = "COMMUNITY", e.GAME = "GAME"
                }(z || (z = {})),
                function(e) {
                    e.CATEGORY = "CATEGORY", e.CLIP = "CLIP", e.LIVE_CHANNEL = "LIVE_CHANNEL", e.VOD = "VOD"
                }(X || (X = {})),
                function(e) {
                    e.ANDROID = "ANDROID", e.IOS = "IOS", e.WEB = "WEB"
                }(q || (q = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.INACTIVE = "INACTIVE", e.REJECTED_PERMISSIONS = "REJECTED_PERMISSIONS"
                }(Y || (Y = {})),
                function(e) {
                    e.COMPONENT = "COMPONENT", e.HIDDEN = "HIDDEN", e.PANEL = "PANEL", e.VIDEO_OVERLAY = "VIDEO_OVERLAY"
                }(K || (K = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.ASSETS_UPLOADED = "ASSETS_UPLOADED", e.DELETED = "DELETED", e.DEPRECATED = "DEPRECATED", e.IN_REVIEW = "IN_REVIEW", e.IN_TEST = "IN_TEST", e.PENDING_ACTION = "PENDING_ACTION", e.READY_FOR_REVIEW = "READY_FOR_REVIEW", e.REJECTED = "REJECTED", e.RELEASED = "RELEASED", e.UPLOADING = "UPLOADING"
                }(Q || (Q = {})),
                function(e) {
                    e.GAME_COMMERCE = "GAME_COMMERCE", e.GAME_COMMERCE_V2 = "GAME_COMMERCE_V2"
                }(Z || (Z = {})),
                function(e) {
                    e.AFFILIATE = "AFFILIATE", e.CUSTOM_PARTNER = "CUSTOM_PARTNER", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PREMIUM_PARTNER = "PREMIUM_PARTNER", e.STANDARD_PARTNER = "STANDARD_PARTNER", e.UNPAID_PARTNER = "UNPAID_PARTNER"
                }($ || ($ = {})),
                function(e) {
                    e.AGREEMENT_NOT_STARTED = "AGREEMENT_NOT_STARTED", e.AGREEMENT_PENDING_UPGRADE = "AGREEMENT_PENDING_UPGRADE", e.CANCELED = "CANCELED", e.COMPLETED = "COMPLETED", e.PAYOUT_METHOD_NOT_STARTED = "PAYOUT_METHOD_NOT_STARTED", e.PAYOUT_METHOD_PENDING = "PAYOUT_METHOD_PENDING", e.REGISTRATION_NOT_STARTED = "REGISTRATION_NOT_STARTED", e.REVIEW_PENDING = "REVIEW_PENDING", e.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED = "ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED", e.ROYALTY_TAX_INTERVIEW_FAILED = "ROYALTY_TAX_INTERVIEW_FAILED", e.ROYALTY_TAX_INTERVIEW_MISMATCH = "ROYALTY_TAX_INTERVIEW_MISMATCH", e.ROYALTY_TAX_INTERVIEW_NOT_STARTED = "ROYALTY_TAX_INTERVIEW_NOT_STARTED", e.ROYALTY_TAX_INTERVIEW_PENDING = "ROYALTY_TAX_INTERVIEW_PENDING", e.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED = "SERVICE_TAX_INTERVIEW_ACTION_REQUIRED", e.SERVICE_TAX_INTERVIEW_FAILED = "SERVICE_TAX_INTERVIEW_FAILED", e.SERVICE_TAX_INTERVIEW_MISMATCH = "SERVICE_TAX_INTERVIEW_MISMATCH", e.SERVICE_TAX_INTERVIEW_NOT_STARTED = "SERVICE_TAX_INTERVIEW_NOT_STARTED", e.SERVICE_TAX_INTERVIEW_PENDING = "SERVICE_TAX_INTERVIEW_PENDING"
                }(J || (J = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.INTERNAL_ERROR = "INTERNAL_ERROR", e.INVALID_AGREEMENT_VERSION = "INVALID_AGREEMENT_VERSION", e.UNAUTHENTICATED = "UNAUTHENTICATED"
                }(ee || (ee = {})),
                function(e) {
                    e.AFFILIATE = "AFFILIATE", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PARTNER = "PARTNER"
                }(te || (te = {})),
                function(e) {
                    e.CUSTOM = "CUSTOM", e.LEGACY = "LEGACY", e.PREMIUM = "PREMIUM", e.STANDARD = "STANDARD"
                }(ne || (ne = {})),
                function(e) {
                    e.CITY = "CITY", e.COUNTRY = "COUNTRY", e.EMAIL = "EMAIL", e.NAME = "NAME", e.POSTAL = "POSTAL", e.STATE = "STATE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(ie || (ie = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.INTERNAL_ERROR = "INTERNAL_ERROR", e.INVALID_FORMAT = "INVALID_FORMAT", e.UNAUTHENTICATED = "UNAUTHENTICATED"
                }(re || (re = {})),
                function(e) {
                    e.BIRTHDATE = "BIRTHDATE", e.CITY = "CITY", e.COMPANY_NAME = "COMPANY_NAME", e.COUNTRY_CODE = "COUNTRY_CODE", e.EMAIL = "EMAIL", e.FIRST_NAME = "FIRST_NAME", e.LAST_NAME = "LAST_NAME", e.MIDDLE_NAME = "MIDDLE_NAME", e.PARENT_EMAIL = "PARENT_EMAIL", e.PARENT_NAME = "PARENT_NAME", e.POSTAL = "POSTAL", e.STATE_CODE = "STATE_CODE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(ae || (ae = {})),
                function(e) {
                    e.ROYALTY = "ROYALTY", e.SERVICE = "SERVICE"
                }(oe || (oe = {})),
                function(e) {
                    e.BROADCASTER = "BROADCASTER", e.EVERYONE = "EVERYONE", e.MODERATOR = "MODERATOR", e.SUBSCRIBER = "SUBSCRIBER"
                }(se || (se = {})),
                function(e) {
                    e.MAX_ROOMS_LIMIT_EXCEEDED = "MAX_ROOMS_LIMIT_EXCEEDED", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(le || (le = {})),
                function(e) {
                    e.ADMIN = "ADMIN", e.BROADCASTER = "BROADCASTER", e.GLOBALMOD = "GLOBALMOD", e.MOD = "MOD", e.REGULAR = "REGULAR", e.STAFF = "STAFF"
                }(ce || (ce = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(de || (de = {})),
                function(e) {
                    e.AUTO_MOD_ENFORCEMENT_FAILED = "AUTO_MOD_ENFORCEMENT_FAILED", e.EMOTE_ONLY_MODE_ENFORCEMENT_FAILED = "EMOTE_ONLY_MODE_ENFORCEMENT_FAILED", e.FORBIDDEN = "FORBIDDEN", e.R9K_MODE_ENFORCEMENT_FAILED = "R9K_MODE_ENFORCEMENT_FAILED", e.RATE_LIMIT_FAILED = "RATE_LIMIT_FAILED", e.SLOW_MODE_ENFORCEMENT_FAILED = "SLOW_MODE_ENFORCEMENT_FAILED", e.SPAM_ENFORCEMENT_FAILED = "SPAM_ENFORCEMENT_FAILED", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_ENFORCEMENT_FAILED = "ZALGO_ENFORCEMENT_FAILED"
                }(ue || (ue = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.SLOW_MODE_DURATION_INVALID = "SLOW_MODE_DURATION_INVALID"
                }(pe || (pe = {})),
                function(e) {
                    e.CSGO_SKILL = "CSGO_SKILL", e.LOL_SUMMONER_RANK = "LOL_SUMMONER_RANK", e.RELEVANCE = "RELEVANCE", e.VIEWER_COUNT = "VIEWER_COUNT"
                }(me || (me = {})),
                function(e) {
                    e.CONTENT = "CONTENT", e.TOP = "TOP"
                }(fe || (fe = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(he || (he = {})),
                function(e) {
                    e.CLAIMABLE_GIFT_CREATION_ERROR = "CLAIMABLE_GIFT_CREATION_ERROR", e.GIFT_CREATION_ERROR = "GIFT_CREATION_ERROR", e.MAX_GIFTS_FOR_OFFER_EXCEEDED = "MAX_GIFTS_FOR_OFFER_EXCEEDED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(ge || (ge = {})),
                function(e) {
                    e.CLAIM_CODE = "CLAIM_CODE", e.DIRECT_ENTITLEMENT = "DIRECT_ENTITLEMENT", e.EXTERNAL = "EXTERNAL"
                }(ve || (ve = {})),
                function(e) {
                    e.ERROR_STATUS = "ERROR_STATUS", e.GIFT_CLAIMED = "GIFT_CLAIMED", e.GIFT_CLAIM_PENDING = "GIFT_CLAIM_PENDING"
                }(Ee || (Ee = {})),
                function(e) {
                    e.GIFT_NOT_CLAIMABLE = "GIFT_NOT_CLAIMABLE", e.NON_EXISTENT_GIFT = "NON_EXISTENT_GIFT", e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.USER_DOES_NOT_OWN_GIFT = "USER_DOES_NOT_OWN_GIFT"
                }(be || (be = {})),
                function(e) {
                    e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
                }(ye || (ye = {})),
                function(e) {
                    e.TOO_MANY_RECENT_SPENDS = "TOO_MANY_RECENT_SPENDS", e.UNABLE_TO_SPEND = "UNABLE_TO_SPEND"
                }(Te || (Te = {})),
                function(e) {
                    e.OFFER_ALREADY_CLAIMED = "OFFER_ALREADY_CLAIMED", e.UNKNOWN = "UNKNOWN"
                }(Oe || (Oe = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.SERIES = "SERIES"
                }(Se || (Se = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK", e.TRENDING = "TRENDING"
                }(_e || (_e = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK"
                }(ke || (ke = {})),
                function(e) {
                    e.CREATED_AT_ASC = "CREATED_AT_ASC", e.CREATED_AT_DESC = "CREATED_AT_DESC", e.TRENDING = "TRENDING", e.VIEWS_ASC = "VIEWS_ASC", e.VIEWS_DESC = "VIEWS_DESC"
                }(Ne || (Ne = {})),
                function(e) {
                    e.HIGH = "HIGH", e.LOW = "LOW", e.MEDIUM = "MEDIUM"
                }(Ce || (Ce = {})),
                function(e) {
                    e.NOT_PERMITTED = "NOT_PERMITTED", e.NOT_RESTRICTED = "NOT_RESTRICTED", e.PERMITTED = "PERMITTED", e.TEMPORARY = "TEMPORARY"
                }(Re || (Re = {})),
                function(e) {
                    e.BODY_EMPTY = "BODY_EMPTY", e.NOT_DELIVERED = "NOT_DELIVERED", e.TARGET_BANNED = "TARGET_BANNED", e.TARGET_RESTRICTED = "TARGET_RESTRICTED"
                }(Ie || (Ie = {})),
                function(e) {
                    e.ALREADY_LINKED = "ALREADY_LINKED", e.CODE_EXPIRED = "CODE_EXPIRED", e.CODE_INCORRECT = "CODE_INCORRECT"
                }(De || (De = {})),
                function(e) {
                    e.all = "all", e.ps4 = "ps4", e.xbox = "xbox"
                }(Ae || (Ae = {})),
                function(e) {
                    e.ASC = "ASC", e.DESC = "DESC"
                }(we || (we = {})),
                function(e) {
                    e.TIME = "TIME", e.VIEWS = "VIEWS"
                }(Le || (Le = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.EXTENSION = "EXTENSION"
                }(Me || (Me = {})),
                function(e) {
                    e.BITS_KEY_CODE = "BITS_KEY_CODE"
                }(Pe || (Pe = {})),
                function(e) {
                    e.ACCOUNT_TOO_YOUNG = "ACCOUNT_TOO_YOUNG", e.COMMUNITY_NAME_EXISTS = "COMMUNITY_NAME_EXISTS", e.COMMUNITY_NAME_INVALID = "COMMUNITY_NAME_INVALID", e.COMMUNITY_NAME_RESERVED = "COMMUNITY_NAME_RESERVED", e.DESCRIPTION_TOO_LONG = "DESCRIPTION_TOO_LONG", e.DISPLAY_NAME_INVALID = "DISPLAY_NAME_INVALID", e.INVALID_LANGUAGE = "INVALID_LANGUAGE", e.OWN_TO_MANY_COMMUNITIES = "OWN_TO_MANY_COMMUNITIES", e.RULES_TOO_LONG = "RULES_TOO_LONG", e.SUMMARY_TOO_LONG = "SUMMARY_TOO_LONG", e.TWO_FACTOR_NOT_ENABLED = "TWO_FACTOR_NOT_ENABLED", e.UNVERIFIED_EMAIL = "UNVERIFIED_EMAIL"
                }(Fe || (Fe = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED", e.UNKNOWN = "UNKNOWN", e.UNSET = "UNSET"
                }(Ue || (Ue = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING"
                }(xe || (xe = {})),
                function(e) {
                    e.BOUNTY_ALREADY_CLAIMED = "BOUNTY_ALREADY_CLAIMED", e.BOUNTY_LIMIT_REACHED = "BOUNTY_LIMIT_REACHED", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Be || (Be = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Ve || (Ve = {})),
                function(e) {
                    e.PROMPT_FOR_PERMISSIONS = "PROMPT_FOR_PERMISSIONS", e.REQUIRES_CONFIGURATION = "REQUIRES_CONFIGURATION"
                }(je || (je = {})),
                function(e) {
                    e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(We || (We = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Ge || (Ge = {})),
                function(e) {
                    e.BASELINE = "BASELINE", e.HIGH = "HIGH", e.MAIN = "MAIN"
                }(He || (He = {})),
                function(e) {
                    e.HYPE = "HYPE", e.STARTTIME = "STARTTIME"
                }(ze || (ze = {})),
                function(e) {
                    e.CANCELLED = "CANCELLED", e.FAILED = "FAILED", e.SCHEDULED = "SCHEDULED", e.STARTED = "STARTED", e.SUCCESS = "SUCCESS", e.UNKNOWN = "UNKNOWN", e.UNSCHEDULED = "UNSCHEDULED"
                }(Xe || (Xe = {})),
                function(e) {
                    e.PREMIERE = "PREMIERE", e.SEGMENT = "SEGMENT", e.SINGLE = "SINGLE", e.TIMETABLE = "TIMETABLE"
                }(qe || (qe = {})),
                function(e) {
                    e.ALL = "ALL", e.LIVE = "LIVE"
                }(Ye || (Ye = {})),
                function(e) {
                    e.PRICE_ASC = "PRICE_ASC", e.PRICE_DESC = "PRICE_DESC", e.PURCHASE_DATE_ASC = "PURCHASE_DATE_ASC", e.PURCHASE_DATE_DESC = "PURCHASE_DATE_DESC"
                }(Ke || (Ke = {})),
                function(e) {
                    e.ALL = "ALL", e.SUBSCRIPTIONS = "SUBSCRIPTIONS"
                }(Qe || (Qe = {})),
                function(e) {
                    e.SUBSCRIPTION = "SUBSCRIPTION"
                }(Ze || (Ze = {})),
                function(e) {
                    e.MONKEYS = "MONKEYS", e.PURPLE = "PURPLE", e.ROBOTS = "ROBOTS"
                }($e || ($e = {})),
                function(e) {
                    e.ALL = "ALL", e.GIFT = "GIFT", e.PLATFORM = "PLATFORM"
                }(Je || (Je = {})),
                function(e) {
                    e.INVALID_USER_ID = "INVALID_USER_ID", e.UNAUTHORIZED = "UNAUTHORIZED"
                }(et || (et = {})),
                function(e) {
                    e.DELETED = "DELETED", e.PENDING_REVIEW = "PENDING_REVIEW", e.PENDING_REVIEW_SPAM = "PENDING_REVIEW_SPAM", e.PUBLISHED = "PUBLISHED", e.UNPUBLISHED = "UNPUBLISHED"
                }(tt || (tt = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED"
                }(nt || (nt = {})),
                function(e) {
                    e.ITEM = "ITEM", e.LINK_NOTIFICATION = "LINK_NOTIFICATION"
                }(it || (it = {})),
                function(e) {
                    e.SERVICE_DEPENDENCY_FAILURE = "SERVICE_DEPENDENCY_FAILURE", e.UNKNOWN = "UNKNOWN", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED"
                }(rt || (rt = {}))
        },
        EdhP: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return l
            }), n.d(t, "a", function() {
                return c
            });
            var i = n("mrSG"),
                r = n("cr+I"),
                a = n("/7QA"),
                o = n("vRsq"),
                s = {
                    height: 378,
                    width: 620,
                    allowScrolling: !0,
                    allowFullscreen: !0
                };

            function l(e, t) {
                return c(function(e) {
                    e.video && (e.video = Object(o.p)(e.video));
                    var t = r.stringify(e);
                    return a.p.config.playerBaseURL + "/?" + t
                }(e), t)
            }

            function c(e, t) {
                void 0 === t && (t = s);
                var n = i.__assign({}, s, t),
                    r = '<iframe src="' + e + '" frameborder="0" ' + (n.allowFullscreen ? 'allowfullscreen="true" ' : "") + (n.allowScrolling ? "" : 'scrolling="no" ') + 'height="' + n.height + '" width="' + n.width + '"></iframe>';
                return n.textLink && (r += function(e, t) {
                    return '<a href="' + e + '" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">' + t + "</a>"
                }(n.textLink.url, n.textLink.text)), r
            }
        },
        EuPq: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("Ue10"),
                o = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClickHandler = function(e) {
                            t.props.onClick && t.props.onClick(), e.currentTarget.select()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(a.Ra, {
                            readOnly: !0,
                            type: a.Ta.Text,
                            value: this.props.value,
                            onClick: this.handleClickHandler
                        })
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return o
            })
        },
        Fxe2: function(e, t, n) {
            "use strict";

            function i(e) {
                return e && "v" === e.charAt(0) ? e.substring(1) : e
            }
            n.d(t, "a", function() {
                return i
            })
        },
        J9w5: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Core_Services_Spade_Video"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "id"
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
                                        value: "id"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 81
                }
            };
            n.loc.source = {
                body: "query Core_Services_Spade_Video($id: ID!) {\nvideo(id: $id) {\nid\nbroadcastType\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        JQql: function(e, t, n) {},
        JcRA: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("Ue10"),
                o = 300,
                s = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onClick = function(e) {
                            n.state.isIconAnimationEnabled || n.props.onClick && (n.setState({
                                isFocused: !1
                            }), n.props.onClick(e), n.props.onClickAnimationEnd && setTimeout(n.props.onClickAnimationEnd, o))
                        }, n.setTextRef = function(e) {
                            n.textRef = e
                        }, n.onFocus = function() {
                            var e = n.props.text || "";
                            n.setState({
                                currentText: void 0 !== n.props.textOnHover ? n.props.textOnHover : e,
                                isFocused: !0
                            })
                        }, n.onBlur = function() {
                            n.setState({
                                currentText: n.props.text || "",
                                isFocused: !1
                            })
                        }, n.onIconAnimationComplete = function() {
                            n.setState({
                                isIconAnimationEnabled: !1
                            })
                        }, n.state = {
                            currentText: t.text || "",
                            currentIcon: t.icon,
                            currentIconOnHover: t.iconOnHover,
                            isFocused: !1,
                            offsetPixels: 0,
                            isIconAnimationEnabled: !1
                        }, n
                    }
                    return i.__extends(t, e), t.getDerivedStateFromProps = function(e, t) {
                        var n = {};
                        return t.currentText !== e.text && t.currentText !== e.textOnHover && (n.currentText = e.text || ""), t.currentIcon !== e.icon && (n.currentIcon = e.icon, n.isIconAnimationEnabled = !0), t.currentIconOnHover !== e.iconOnHover && (n.currentIconOnHover = e.iconOnHover, n.isIconAnimationEnabled = !0), Object.keys(n).length > 0 ? n : null
                    }, t.prototype.getSnapshotBeforeUpdate = function(e, t) {
                        return this.state.currentText !== t.currentText && this.textRef && (this.prevTextSize = this.textRef.getBoundingClientRect().width), null
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        this.state.currentText !== t.currentText && this.triggerTextTransition()
                    }, t.prototype.render = function() {
                        var e = void 0 === this.props.fullWidthButton || this.props.fullWidthButton;
                        return r.createElement(a.Pa, {
                            fullWidth: e,
                            overflow: a.ab.Hidden
                        }, r.createElement("div", {
                            onMouseEnter: this.onFocus,
                            onMouseLeave: this.onBlur,
                            onFocus: this.onFocus,
                            onBlur: this.onBlur
                        }, r.createElement(a.z, i.__assign({
                            fullWidth: e,
                            blurAfterClick: !0,
                            onClick: this.onClick,
                            type: this.getCurrentType(),
                            tabIndex: this.props.tabIndex,
                            ariaLabel: this.props.ariaLabel
                        }, Object(a.cc)(this.props)), r.createElement(a.Xa, {
                            display: a.X.Flex,
                            justifyContent: a.Wa.Center,
                            alignItems: a.f.Center
                        }, this.renderIcon(), this.renderText()))))
                    }, t.prototype.renderIcon = function() {
                        return r.createElement(a.Pa, {
                            display: a.X.Flex,
                            justifyContent: a.Wa.Center,
                            alignItems: a.f.Center,
                            margin: {
                                right: .5
                            }
                        }, r.createElement("div", {
                            style: {
                                transform: this.getIconTransform(),
                                transition: this.getIconTransition()
                            }
                        }, r.createElement(a.i, {
                            enabled: this.state.isIconAnimationEnabled,
                            onAnimationEnd: this.onIconAnimationComplete,
                            duration: a.k.Long,
                            type: a.n.BounceIn
                        }, r.createElement(a.Xa, {
                            display: a.X.Flex,
                            justifyContent: a.Wa.Center,
                            alignItems: a.f.Center
                        }, r.createElement(a.ob, {
                            type: a.qb.Inherit,
                            asset: this.getIcon()
                        })))))
                    }, t.prototype.renderText = function() {
                        return r.createElement("span", {
                            ref: this.setTextRef,
                            style: {
                                opacity: this.getTextOpacity(),
                                transition: this.getTextTransition()
                            }
                        }, this.state.currentText)
                    }, t.prototype.getIconTransform = function() {
                        var e = "scale(1)",
                            t = "translateX(0px)";
                        return this.state.isFocused && (e = "scale(1.2)"), Math.abs(this.state.offsetPixels) > 15 && (t = "translateX(" + this.state.offsetPixels / 2 + "px)"), t + " " + e
                    }, t.prototype.getIconTransition = function() {
                        return 0 === this.state.offsetPixels ? o + "ms transform ease" : void 0
                    }, t.prototype.getTextOpacity = function() {
                        return 0 !== this.state.offsetPixels ? 0 : 1
                    }, t.prototype.getTextTransition = function() {
                        return 0 !== this.state.offsetPixels ? void 0 : o + "ms opacity ease"
                    }, t.prototype.getCurrentType = function() {
                        return this.state.isFocused && this.props.typeOnHover ? this.props.typeOnHover : this.props.type
                    }, t.prototype.getIcon = function() {
                        return this.state.isFocused && this.state.currentIconOnHover ? this.state.currentIconOnHover : this.state.currentIcon
                    }, t.prototype.triggerTextTransition = function() {
                        var e = this;
                        if (this.textRef) {
                            var t = this.textRef.getBoundingClientRect().width;
                            this.setState({
                                offsetPixels: t - this.prevTextSize
                            }, function() {
                                e.prevTextSize = t, requestAnimationFrame(function() {
                                    requestAnimationFrame(function() {
                                        e.setState({
                                            offsetPixels: 0
                                        })
                                    })
                                })
                            })
                        }
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return s
            })
        },
        Jr7Z: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("yR8l"),
                s = n("GnwI"),
                l = n("Ue10"),
                c = n("+GMQ"),
                d = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        if (!this.props.data.clip || this.props.data.loading) return r.createElement(l.Xa, null, this.renderPlaceholders());
                        var e = this.props.padding && this.props.padding.bottom,
                            t = void 0 === e ? .5 : e;
                        return r.createElement(l.Xa, {
                            display: l.X.Flex,
                            alignItems: l.f.Center,
                            padding: {
                                bottom: t
                            }
                        }, !this.props.hideSymbol && r.createElement(l.Xa, {
                            margin: {
                                right: .5
                            },
                            display: l.X.Flex,
                            alignItems: l.f.Center
                        }, r.createElement(l.ob, {
                            asset: l.pb.GlyphViews,
                            type: l.qb.Brand
                        })), r.createElement(l.W, {
                            bold: !0,
                            type: l.Ob.Span,
                            fontSize: this.props.fontSize ? this.props.fontSize : l.Ca.Size5
                        }, Object(a.d)("{views} views", {
                            views: Object(a.f)(this.props.data.clip.viewCount)
                        }, "ClipsViewCount")))
                    }, t.prototype.reportInteractive = function() {
                        this.props.data.clip && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.renderPlaceholders = function() {
                        return r.createElement(l.i, {
                            type: l.n.FadeIn,
                            duration: l.k.Long,
                            enabled: !0
                        }, r.createElement(l.W, {
                            fontSize: this.props.fontSize ? this.props.fontSize : l.Ca.Size5
                        }, r.createElement(l.eb, {
                            lineCount: 1,
                            width: 80
                        })))
                    }, t = i.__decorate([Object(s.b)("ClipsViewCount"), Object(o.a)(c)], t)
                }(r.Component);
            n.d(t, "a", function() {
                return d
            })
        },
        "Jxh/": function(e, t, n) {
            "use strict";

            function i(e) {
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
            n.d(t, "a", function() {
                return i
            })
        },
        Kcwz: function(e, t, n) {},
        Kgiw: function(e, t, n) {},
        KxT4: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("/7QA"),
                a = n("u0aY"),
                o = n("eLB1");

            function s() {
                return {
                    status: o.a.Loading,
                    vendorPreferences: {}
                }
            }

            function l(e, t) {
                switch (void 0 === e && (e = s()), t.type) {
                    case a.b:
                        return i.__assign({}, e, {
                            status: t.status
                        });
                    case a.c:
                        return i.__assign({}, e, {
                            vendorPreferences: i.__assign({}, e.vendorPreferences, t.vendorPreferences)
                        });
                    case a.a:
                        return s();
                    default:
                        return e
                }
            }
            r.p.store.registerReducer("gdpr", l);
            var c = n("YUvD"),
                d = n("q1tI"),
                u = n("/MKj"),
                p = n("fvjX"),
                m = n("yR8l");

            function f() {
                return window.location.search.includes("gdpr_override")
            }
            var h = n("06uF"),
                g = n("Mn7C"),
                v = n("GnwI"),
                E = n("5jJa"),
                b = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.updateGDPRVendorPreferences(h.a()), this.setNextGDPRStatus(this.props)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.setNextGDPRStatus(e)
                    }, t.prototype.render = function() {
                        return null
                    }, t.prototype.setNextGDPRStatus = function(e) {
                        var t = e.data.requestInfo,
                            n = o.a.Loading,
                            i = !e.data.currentUser || e.data.currentUser.isMinimumGDPRConsentAge;
                        e.data.loading || ((n = e.data.error ? o.a.Error : this.isEEAUser(t.isFromEEA) ? i ? h.b() ? o.a.ConsentSaved : o.a.ConsentRequired : o.a.BelowMinimumAge : o.a.Skip) !== e.status && (e.updateGDPRStatus(n), n === o.a.BelowMinimumAge && Object(g.b)()), e.latencyTracking.reportInteractive())
                    }, t.prototype.isEEAUser = function(e) {
                        return e || f() || window.location.search.includes("eea")
                    }, t
                }(d.Component),
                y = Object(p.compose)(Object(u.connect)(function(e) {
                    return {
                        status: e.gdpr.status
                    }
                }, function(e) {
                    return Object(p.bindActionCreators)({
                        updateGDPRStatus: a.e,
                        updateGDPRVendorPreferences: a.f
                    }, e)
                }), Object(m.a)(E), Object(v.b)("GDPRConsentManager"))(b);

            function T() {
                return f() || r.b.get("gdpr_consent_enabled", !1)
            }
            var O = n("ClZk"),
                S = n("Td8r");
            n.d(t, !1, function() {
                return s
            }), n.d(t, !1, function() {
                return l
            }), n.d(t, "j", function() {
                return c.a
            }), n.d(t, !1, function() {}), n.d(t, "a", function() {
                return y
            }), n.d(t, "f", function() {
                return T
            }), n.d(t, "g", function() {
                return O.c
            }), n.d(t, "i", function() {
                return O.f
            }), n.d(t, !1, function() {
                return O.d
            }), n.d(t, !1, function() {}), n.d(t, "h", function() {
                return O.e
            }), n.d(t, "e", function() {
                return O.b
            }), n.d(t, "d", function() {
                return O.a
            }), n.d(t, "b", function() {
                return o.a
            }), n.d(t, "c", function() {
                return S.a
            })
        },
        L7EG: function(e, t) {
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
        MLDe: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            }), n.d(t, "b", function() {
                return u
            }), n.d(t, "c", function() {
                return m
            }), n.d(t, "d", function() {
                return f
            });
            var i, r, a = n("/7QA"),
                o = n("wbMx"),
                s = n("2xye"),
                l = n("BQs+"),
                c = ((i = {})[o.b.Twitter] = "twitter", i[o.b.Reddit] = "reddit", i[o.b.VKontakte] = "vkontakte", i[o.b.Facebook] = "facebook", i[o.b.Copy] = "link", i[o.b.CopyInput] = "option_link", i[o.b.Download] = "download", i),
                d = {
                    MyClips: "MyClips",
                    ClipsOfMyChannel: "ClipsOfMyChannel"
                },
                u = {
                    Game: "TopClipsGame",
                    Channel: "TopClipsChannel"
                },
                p = ((r = {
                    MyClips: s.PageviewLocation.MyClipsManager,
                    ClipsOfMyChannel: s.PageviewLocation.ChannelClipsManager,
                    TopClipsGame: s.PageviewLocation.ClipsGame,
                    TopClipsChannel: s.PageviewLocation.ChannelClips
                })[s.PageviewLocation.ClipsEditing] = s.PageviewLocation.ClipsEditing, r[s.PageviewLocation.ClipsViewing] = s.PageviewLocation.ClipsViewing, r[s.PageviewLocation.ClipsWatchPage] = s.PageviewLocation.ClipsWatchPage, r),
                m = function(e, t, n, i, r) {
                    return function(o) {
                        a.p.tracking.track(s.SpadeEventType.VideoShare, {
                            vod_id: e,
                            vod_type: s.SpadeVideoBroadcastType.Clip,
                            share_platform: c[o],
                            location: p[r],
                            game: t,
                            channel_id: Number(n || 0),
                            channel: i,
                            live: null
                        })
                    }
                },
                f = function(e, t, n, i, r, o) {
                    return function() {
                        a.p.tracking.track(s.SpadeEventType.VideoShare, {
                            vod_id: e,
                            vod_type: s.SpadeVideoBroadcastType.Clip,
                            share_platform: l.a.Link,
                            location: p[r],
                            game: t,
                            channel_id: Number(n || 0),
                            channel: i,
                            live: null,
                            shared_item_url: o
                        })
                    }
                }
        },
        MPK0: function(e, t, n) {},
        McYG: function(e, t, n) {
            "use strict";

            function i(e, t) {
                return "https://www.twitch.tv/" + t + "/clip/" + e
            }
            n.d(t, "a", function() {
                return i
            })
        },
        Mn7C: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "d", function() {
                return c
            });
            var i, r = n("/7QA"),
                a = n("2xye"),
                o = n("kRBY");

            function s(e, t) {
                var n = Object(o.e)(r.p.store.getState()),
                    i = "";
                try {
                    i = JSON.stringify(t)
                } catch (e) {
                    r.k.withCategory("gdpr-tracking").warn("Failed constructing vendor string")
                }
                var s = {
                    consent_action: e,
                    consent_string: i,
                    user_id: n && n.id || null
                };
                r.o.track(a.SpadeEventType.GDPRConsentSet, s)
            }

            function l() {
                var e = r.p.store.getState().gdpr.vendorPreferences;
                s(i.DeniedByAge, e)
            }

            function c() {
                var e = Object(o.e)(r.p.store.getState());
                r.o.track(a.SpadeEventType.GDPRConsentBannerDisplayed, {
                    user_id: e && e.id || null
                })
            }! function(e) {
                e.Given = "consent_given", e.Denied = "consent_denied", e.DeniedByAge = "consent_denied_age", e.Mixed = "consent_mixed"
            }(i || (i = {}))
        },
        OTsR: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsViewModerationModals"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "broadcaster"
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
                                        value: "curator"
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
                    end: 106
                }
            };
            n.loc.source = {
                body: "query ClipsViewModerationModals($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ncurator {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Oy4H: function(e, t, n) {},
        PDCe: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportUserCommunity"
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
                                    value: "ReportUserInCommunityInput"
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
                                value: "reportUserInCommunity"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 138
                }
            };
            n.loc.source = {
                body: "mutation ReportUserModal_ReportUserCommunity($input: ReportUserInCommunityInput!) {\nreportUserInCommunity(input: $input) {\nuser {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        QVaV: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            });
            var i = n("q1tI"),
                r = /^[\x00-\x7F]*$/,
                a = function(e, t, n) {
                    return void 0 === n && (n = !1), t && e && !o(t) ? n ? t + " (" + e + ")" : i.createElement("span", null, t, " ", i.createElement("span", {
                        className: "intl-login"
                    }, "(" + e + ")")) : t || (e || "")
                };

            function o(e) {
                return r.test(e)
            }
        },
        Qdxp: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FollowButton_User"
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
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "followButtonFragment"
                                    },
                                    directives: []
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
            i.loc.source = {
                body: '#import "twilight/common/queries/follow-button-fragment.gql"\nquery FollowButton_User($login: String!) {\nuser(login: $login) {\nid\n...followButtonFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("V94A").definitions)), e.exports = i
        },
        Qqhu: function(e, t, n) {},
        RQ6e: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("TSYQ"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("fvjX"),
                l = n("yR8l"),
                c = n("GnwI"),
                d = n("+PZR"),
                u = n("Ue10"),
                p = n("gIsd"),
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleChange = function(e) {
                            t.props.onChange && t.props.onChange(e.target.value)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null,
                            t = Object(o.d)("Select One...", "ReportUserModal");
                        this.props.data.loading ? e = [a.createElement("option", {
                            key: "Loading"
                        }, Object(o.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || Object(d.b)()).map(function(e) {
                            return a.createElement("option", {
                                key: e.id,
                                value: e.id
                            }, e.text)
                        });
                        return a.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(u.Ea, {
                            id: "reporting-modal__select",
                            label: Object(o.d)("Select Reason (required)", "ReportUserModal")
                        }, a.createElement(u.ub, {
                            id: "reporting-modal__select",
                            "data-test-selector": "reporting-modal.select",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.handleChange,
                            defaultValue: t
                        }, a.createElement("option", {
                            disabled: !0,
                            key: "default"
                        }, t), e)))
                    }, t
                }(a.Component),
                f = Object(s.compose)(Object(l.a)(p, {
                    options: function(e) {
                        return {
                            variables: {
                                content: e.reportContentType
                            }
                        }
                    }
                }), Object(c.b)("ReportReasonSelect"))(m);
            n("y4Ne");
            n.d(t, "a", function() {
                return g
            }), n.d(t, "b", function() {
                return h
            }), n.d(t, "c", function() {
                return v
            });
            var h, g = "community_rules_violation";
            ! function(e) {
                e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError", e[e.CommunityError = 5] = "CommunityError"
            }(h || (h = {}));
            var v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        community: null,
                        description: "",
                        reason: null,
                        isCommunityReason: !1,
                        selectedCommunityID: null,
                        selectedCommunityName: null
                    }, t.headerMessage = Object(o.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: a.createElement("br", null),
                        tosLink: a.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(o.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.handleSubmit = function(e) {
                        if (e.preventDefault(), t.state.reason && t.state.description.length > 0) {
                            if (t.state.reason === g && !t.state.selectedCommunityID) {
                                if (!t.props.targetUser.directories.nodes.length) return void t.props.onError(h.CommunityError);
                                t.props.onError(h.FormError)
                            }
                            t.props.onSubmit(t.state.reason || "", t.state.description, t.state.selectedCommunityID, t.state.selectedCommunityName)
                        } else t.props.onError(h.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        t.setState({
                            reason: e,
                            isCommunityReason: !1
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(u.Xa, {
                        display: u.X.Flex,
                        flexDirection: u.Aa.Column,
                        alignItems: u.f.Center,
                        justifyContent: u.Wa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === h.Success ? a.createElement("div", null, a.createElement(u.z, {
                        onClick: this.props.onClose
                    }, a.createElement(u.Xa, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Close", "ReportUser")))) : a.createElement("div", null, a.createElement(u.Xa, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, a.createElement(u.W, {
                        type: u.Ob.H4
                    }, this.props.title), a.createElement(u.yb, {
                        color: u.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), a.createElement("form", null, a.createElement(u.yb, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, a.createElement(f, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), a.createElement(u.Ea, {
                        id: "reporting__text-area",
                        label: Object(o.d)("Description (required)", "ReportUser")
                    }, a.createElement(u.Lb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), a.createElement(u.yb, {
                        display: u.X.Flex,
                        justifyContent: u.Wa.Center
                    }, a.createElement(u.z, {
                        onClick: this.handleSubmit
                    }, a.createElement(u.Xa, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Send", "ReportUser"))))))
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case h.FormError:
                            e = Object(o.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case h.MutationError:
                            e = Object(o.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case h.Success:
                            e = Object(o.d)("Thank you for your report.", "ReportUser");
                            break;
                        case h.UserError:
                            e = Object(o.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportUser");
                            break;
                        case h.CommunityError:
                            e = Object(o.d)("A report of this type could not be sent because this user has not selected a Community.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = r({
                        "reporting__error-container": this.props.submitStatus !== h.Success,
                        "reporting__success-container": this.props.submitStatus === h.Success
                    });
                    return a.createElement(u.yb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== h.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(a.Component)
        },
        RcPG: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.Text = 0] = "Text", e[e.ModeratedText = 1] = "ModeratedText", e[e.CurrentUserHighlight = 2] = "CurrentUserHighlight", e[e.Mention = 3] = "Mention", e[e.Link = 4] = "Link", e[e.Emote = 5] = "Emote", e[e.ClipLink = 6] = "ClipLink", e[e.VideoLink = 7] = "VideoLink"
                }(i || (i = {}))
        },
        S1Za: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            });
            var i = "video-player.VIDEO_PLAYER_INSTANCE_STARTED";

            function r(e) {
                return {
                    type: i,
                    playerRefID: e
                }
            }
        },
        SGIe: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            });
            var i, r = n("q1tI"),
                a = n("/7QA"),
                o = n("DMoW"),
                s = n("CLrI"),
                l = n("OTul"),
                c = n("Ue10");
            ! function(e) {
                e.ClipsVideoButtonHighlight = "clips-video-button-highlight"
            }(i || (i = {}));
            var d = function(e) {
                var t, n = e.clip;
                if (!(n.video && n.video.id && null !== n.videoOffsetSeconds && n.broadcaster && n.broadcaster.login && n.video.broadcastType === o.g.ARCHIVE)) {
                    var d = n.video ? Object(a.d)("You can only highlight past broadcasts", "ClipsFullVideoButton") : Object(a.d)("Full video not available", "ClipsFullVideoButton");
                    return r.createElement(c.Rb, {
                        label: d
                    }, r.createElement(c.z, {
                        type: e.buttonType,
                        disabled: !0
                    }, e.callToAction))
                }
                return r.createElement(c.z, {
                    targetBlank: !0,
                    linkTo: Object(l.g)(n.broadcaster.login, n.video.id, (t = {}, t[s.a.TrackingID] = n.id, t[s.a.Start] = n.videoOffsetSeconds.toString(), t[s.a.End] = (n.videoOffsetSeconds + n.durationSeconds).toString(), t[s.a.Title] = n.title || "Clip: " + n.video.title, t[s.a.GameName] = n.game && n.game.displayName || "", t[s.a.GameID] = n.game && n.game.id || "", t)),
                    onClick: e.onClick,
                    type: e.buttonType,
                    "data-test-selector": i.ClipsVideoButtonHighlight
                }, e.callToAction)
            }
        },
        SmhC: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            });
            var i, r = n("mrSG"),
                a = n("Td8r"),
                o = ((i = {})[a.a.Amazon] = {
                    defaultConsent: !0,
                    enabled: !1
                }, i[a.a.ComScore] = {
                    defaultConsent: !1,
                    enabled: !0
                }, i[a.a.Google] = {
                    defaultConsent: !1,
                    enabled: !0
                }, i[a.a.Nielsen] = {
                    defaultConsent: !1,
                    enabled: !0
                }, i[a.a.SalesforceDMP] = {
                    defaultConsent: !1,
                    enabled: !0
                }, i);

            function s() {
                return o
            }

            function l() {
                var e = s();
                return Object.keys(e).reduce(function(t, n) {
                    var i;
                    return e[n].enabled ? r.__assign({}, t, ((i = {})[n] = e[n].defaultConsent, i)) : t
                }, {})
            }
        },
        TVuH: function(e, t, n) {},
        Td8r: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.Amazon = "amazon", e.ComScore = "comscore", e.Google = "google", e.Nielsen = "nielsen", e.SalesforceDMP = "salesforce_dmp"
                }(i || (i = {}))
        },
        "V+GM": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("cr+I"),
                a = n("q1tI"),
                o = n("wIs1"),
                s = n("/7QA");

            function l(e) {
                return function(t) {
                    var n = function(n) {
                        function o(t) {
                            var r = n.call(this, t) || this;
                            return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                                if (!(r.tracked || e.skip && e.skip(r.props))) {
                                    r.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(r.props) : e.properties && (t = i.__assign({}, e.properties));
                                    var n = i.__assign({}, r.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var a = r.referenceTracking,
                                        o = a.content,
                                        l = a.medium,
                                        c = a.content_index,
                                        d = a.email_id;
                                    s.p.tracking.trackPageview(i.__assign({
                                        content: o,
                                        medium: l,
                                        content_index: c,
                                        email_id: d,
                                        location: e.location
                                    }, t))
                                }
                            }, s.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
                        }
                        return i.__extends(o, n), o.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, o.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, o.prototype.render = function() {
                            return a.createElement(t, i.__assign({}, this.props))
                        }, o.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? r.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var i = "",
                                    a = r.stringify(t);
                                a.length > 0 && (i = "?" + a), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: i
                                })
                            }
                            return n
                        }, o
                    }(a.Component);
                    return Object(o.a)(n)
                }
            }
            n.d(t, "a", function() {
                return l
            })
        },
        V94A: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "followButtonFragment"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "User"
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
                                value: "displayName"
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
                                        value: "follower"
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
                    end: 172
                }
            };
            n.loc.source = {
                body: "# Queries the data necessary to render the FollowButton component.\nfragment followButtonFragment on User {\nid\ndisplayName\nlogin\nself {\nfollower {\ndisableNotifications\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Vsf8: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsModalDeleteAll_Clip"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "video"
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
                                        value: "broadcast"
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
                    end: 101
                }
            };
            n.loc.source = {
                body: "query ClipsModalDeleteAll_Clip($slug: ID!) {\nclip(slug: $slug) {\nid\nvideo {\nid\n}\nbroadcast {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        VwyG: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("kRBY"),
                a = n("mrSG"),
                o = n("q1tI"),
                s = n("oJmH"),
                l = n("/7QA"),
                c = n("yR8l"),
                d = n("GnwI"),
                u = n("nt5g"),
                p = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.logger = l.k.withCategory("role-restricted"), n.state = {
                            loading: t.isLoggedIn,
                            permitted: !1,
                            roles: {
                                staff: !1,
                                editor: !1,
                                owner: !1
                            },
                            error: null
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        var t = e.data && e.data.loading,
                            n = this.props.data && this.props.data.loading;
                        (!this.props.isLoggedIn || t && !n) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.maybeSetRoleState(e)
                    }, t.prototype.componentDidMount = function() {
                        this.maybeSetRoleState(this.props)
                    }, t.prototype.render = function() {
                        return this.props.children(this.state)
                    }, t.prototype.maybeSetRoleState = function(e) {
                        if (e.isLoggedIn && e.data) {
                            var t = function(e) {
                                    var t = e.data,
                                        n = {
                                            staff: !1,
                                            editor: !1,
                                            owner: !1
                                        };
                                    t && !t.error && !t.loading && t.user && t.currentUser && (n.staff = !(!t.currentUser.roles || !t.currentUser.roles.isStaff), n.editor = !(!t.user.self || !t.user.self.isEditor), n.owner = t.user.id === t.currentUser.id);
                                    return n
                                }(e),
                                n = {
                                    loading: e.data.loading,
                                    permitted: function(e, t) {
                                        if (e.owner) return !0;
                                        if (e.staff && t.staff) return !0;
                                        if (e.editor && t.editor) return !0;
                                        return !1
                                    }(t, e.permittedRoles),
                                    roles: t,
                                    error: null
                                };
                            e.data.error ? (n.error = new Error(e.data.error.toString()), this.logger.warn("Unable to retrieve data from GraphQL.", {
                                err: n.error
                            })) : e.data.loading || e.data.user && e.data.currentUser || (n.error = new Error("Failed to fetch user information"), this.logger.warn("Failed to fetch user information.", {
                                err: n.error
                            })), this.setState(n)
                        }
                    }, t
                }(o.Component);
            var m = Object(s.compose)(Object(c.a)(u, {
                options: function(e) {
                    return {
                        variables: {
                            contentOwnerLogin: e.ownerLogin
                        }
                    }
                },
                skip: function(e) {
                    return !e.isLoggedIn
                }
            }), Object(d.b)("RoleRestricted"))(p);
            var f = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(r.f)(e)
                }
            })(m);
            n.d(t, "a", function() {
                return f
            })
        },
        WSjS: function(e, t, n) {
            "use strict";
            var i, r, a, o = n("mrSG"),
                s = n("q1tI"),
                l = n("/7QA"),
                c = n("yR8l"),
                d = n("8Ad5"),
                u = n("geRD"),
                p = n("2xye"),
                m = function(e, t, n, i, r) {
                    var a = Date.now() / 1e3;
                    l.p.tracking.track(p.SpadeEventType.ClipEdit, {
                        channel_id: e,
                        clip_edit_session_id: t + "," + Math.floor(a),
                        clip_id: t,
                        clip_slug: n,
                        effect_name: "title",
                        effect_setting: i,
                        front_end: !0,
                        location: r
                    })
                },
                f = function(e, t, n, i, r) {
                    var a = Date.now() / 1e3;
                    l.p.tracking.track(p.SpadeEventType.ClipEdit, {
                        channel_id: e,
                        clip_edit_session_id: t + "," + Math.floor(a),
                        clip_id: t,
                        clip_slug: n,
                        effect_name: "publish-twilight",
                        effect_setting: i,
                        front_end: !0,
                        location: r
                    })
                },
                h = n("9C/b");
            ! function(e) {
                e.AlreadyPublished = "already_published", e.EditingWindowExpired = "editing_window_expired", e.InvalidSpeedDuration = "invalid_speed_duration", e.InvalidDuration = "invalid_duration", e.InvalidTitle = "invalid_title", e.Unknown = "unknown"
            }(i || (i = {})),
            function(e) {
                e.InvalidTitle = "invalid_title"
            }(r || (r = {})),
            function(e) {
                e.Unsent = "unsent", e.Sending = "sending", e.Error = "error", e.Successful = "successful"
            }(a || (a = {}));
            var g, v = 5,
                E = 60,
                b = n("Ue10"),
                y = n("5EAu"),
                T = {
                    publishState: a.Unsent,
                    errorMessage: null
                },
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = T, t.onError = function(e) {
                            t.setState({
                                publishState: a.Error,
                                errorMessage: e
                            }), t.props.onError(e)
                        }, t.onPublish = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return o.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (this.setState({
                                                    publishState: a.Sending
                                                }), e = this.props.endOffset - this.props.startOffset, this.props.startOffset > this.props.endOffset || e < v || e > E) return this.onError(i.InvalidDuration), [2];
                                            if ("" === this.props.title.trim()) return this.onError(g.emptySubmission), [2];
                                            r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.props.publishClip(Object(u.a)({
                                                segments: [{
                                                    offsetSeconds: this.props.startOffset,
                                                    durationSeconds: this.props.endOffset - this.props.startOffset,
                                                    speed: 1
                                                }],
                                                slug: this.props.slug,
                                                title: this.props.title
                                            }))];
                                        case 2:
                                            return (t = r.sent()).data.publishClip && t.data.publishClip.error && t.data.publishClip.error.message ? (n = t.data.publishClip.error.message, this.onError(n)) : (f(Number(this.props.clipBroadcasterId), this.props.clipId, this.props.slug, this.props.title, p.PageviewLocation.ClipsEditing), this.setState({
                                                publishState: a.Successful
                                            }), this.props.history.push("/create", {
                                                isPostEdit: !0,
                                                slug: this.props.slug
                                            })), [3, 4];
                                        case 3:
                                            return r.sent(), n = i.Unknown, this.onError(n), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.state.publishState === a.Error && e.title.length > 0 && this.props.title !== e.title && this.setState(T), e.isSubmitted && !this.props.isSubmitted && this.onPublish()
                    }, t.prototype.render = function() {
                        var e = this.state.publishState === a.Error,
                            t = this.state.publishState === a.Sending;
                        return s.createElement(b.Xa, null, s.createElement(b.z, {
                            onClick: this.onPublish,
                            disabled: e,
                            state: t ? b.E.Loading : b.E.Default,
                            size: b.D.Large,
                            blurAfterClick: !0
                        }, Object(l.d)("Publish", "ClipsPublishButton")))
                    }, t = o.__decorate([Object(c.a)(y, {
                        name: "publishClip"
                    })], t)
                }(s.Component),
                S = Object(h.a)(O),
                _ = n("/2kD"),
                k = {
                    TITLE_INPUT: "cmgr-title-input",
                    TITLE_SAVE: "cmgr-title-save",
                    TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
                };
            ! function(e) {
                e.emptySubmission = "emptySubmission", e.characterLimitReached = "characterLimitReached", e.channelViolation = "channelViolation", e.notCurator = "notCurator", e.unknown = "unknown"
            }(g || (g = {}));
            var N = 100,
                C = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderForClipsViewing = function() {
                            return s.createElement("div", null, s.createElement(b.Lb, {
                                id: k.TITLE_INPUT,
                                "data-test-selector": k.TITLE_INPUT,
                                value: n.state.title,
                                onChange: n.handleTitleEdit,
                                onKeyDown: n.handleKeyDown
                            }), s.createElement(b.Xa, {
                                display: b.X.Flex,
                                justifyContent: b.Wa.Between,
                                alignItems: b.f.Center,
                                padding: {
                                    top: 1
                                }
                            }, n.state.showError ? s.createElement(b.W, {
                                color: b.O.Error
                            }, n.getErrorMessage()) : s.createElement(b.W, {
                                color: b.O.Alt2
                            }, n.getRemainingCharacterText()), s.createElement(b.Xa, {
                                display: b.X.Flex
                            }, s.createElement(b.z, {
                                "data-test-selector": k.TITLE_SAVE,
                                onClick: n.props.onCancel,
                                type: b.F.Hollow
                            }, Object(l.d)("Cancel", "ClipsTitleEdit")), s.createElement(b.Xa, {
                                padding: {
                                    left: 1
                                }
                            }, n.renderSave()))))
                        }, n.renderForManager = function() {
                            return s.createElement(b.Ea, {
                                id: k.TITLE_INPUT,
                                label: Object(l.d)("Title", "ClipsTitleEdit"),
                                hint: n.getRemainingCharacterText()
                            }, s.createElement(b.Xa, {
                                display: b.X.Flex,
                                flexWrap: b.Ba.NoWrap
                            }, s.createElement(b.Xa, {
                                flexGrow: 1,
                                margin: {
                                    right: 1
                                }
                            }, s.createElement(b.Ra, {
                                id: k.TITLE_INPUT,
                                "data-test-selector": k.TITLE_INPUT,
                                type: b.Ta.Text,
                                value: n.state.title,
                                onChange: n.handleTitleEdit,
                                onKeyDown: n.handleKeyDown
                            })), s.createElement(b.Xa, {
                                flexShrink: 0,
                                flexGrow: 0
                            }, s.createElement(b.Xa, {
                                position: b.fb.Relative
                            }, n.renderSave(), s.createElement(b.Ua, {
                                onClick: n.dismissMessage,
                                "data-test-selector": k.TITLE_SAVE_TOOLTIP
                            }, s.createElement(b.u, {
                                direction: b.v.TopRight,
                                show: n.state.showError || n.state.showSuccess
                            }, s.createElement(b.Xa, {
                                padding: 1
                            }, n.state.showSuccess ? s.createElement(b.W, {
                                color: b.O.Link
                            }, Object(l.d)("Title Saved!", "ClipsTitleEdit")) : s.createElement(b.W, {
                                color: b.O.Error
                            }, n.getErrorMessage()))))))))
                        }, n.renderForEdit = function() {
                            var e;
                            if ((n.props.startOffset || 0 === n.props.startOffset) && n.props.endOffset) return e = n.state.showError ? s.createElement(b.W, {
                                color: b.O.Error
                            }, n.getErrorMessage()) : 0 === n.state.title.length && n.props.broadcasterName ? s.createElement(b.W, {
                                color: b.O.Alt2
                            }, Object(l.d)("Clips with titles get more views. Help {broadcasterName} get discovered by adding a title.", {
                                broadcasterName: n.props.broadcasterName
                            }, "ClipsTitleEdit")) : s.createElement(b.W, {
                                color: b.O.Alt2
                            }, n.getRemainingCharacterText()), s.createElement(b.Xa, null, s.createElement(b.Xa, {
                                fullWidth: !0
                            }, s.createElement(b.Ra, {
                                id: k.TITLE_INPUT,
                                "data-test-selector": k.TITLE_INPUT,
                                type: b.Ta.Text,
                                value: n.state.title,
                                onChange: n.handleTitleEdit,
                                onKeyDown: n.handleKeyDown,
                                placeholder: Object(l.d)("Add a title (required)", "ClipsTitleEdit"),
                                size: b.Sa.Large,
                                autoFocus: !0
                            })), s.createElement(b.Xa, {
                                display: b.X.Flex,
                                justifyContent: b.Wa.Between,
                                alignItems: b.f.Center,
                                padding: {
                                    top: 1
                                }
                            }, e, s.createElement(b.Xa, {
                                display: b.X.Flex
                            }, s.createElement(b.Xa, {
                                padding: {
                                    left: 1
                                }
                            }, s.createElement(S, {
                                clipId: n.props.clipId,
                                clipBroadcasterId: n.props.clipBroadcasterId,
                                isSubmitted: n.state.showSuccess,
                                title: n.state.title,
                                slug: n.props.clipSlug,
                                startOffset: n.props.startOffset,
                                endOffset: n.props.endOffset,
                                onError: n.onPublishClipError
                            })))))
                        }, n.renderSave = function() {
                            return s.createElement(b.z, {
                                "data-test-selector": k.TITLE_SAVE,
                                disabled: !n.canSaveEditedTitle(),
                                onClick: n.editClipTitle
                            }, Object(l.d)("Save", "ClipsTitleEdit"))
                        }, n.onPublishClipError = function(e) {
                            n.setState({
                                showSuccess: !1,
                                showError: !0,
                                error: n.errorMessageToError(e)
                            })
                        }, n.getRemainingCharacterText = function() {
                            return Object(l.d)("{characterCount, number} remaining", {
                                characterCount: N - n.state.title.length
                            }, "ClipsTitleEdit")
                        }, n.onSuccess = function() {
                            n.props.onSuccess && n.props.onSuccess(), n.setState({
                                showSuccess: !0,
                                showError: !1,
                                error: null
                            }), setTimeout(function() {
                                n.setState({
                                    showSuccess: !1
                                })
                            }, 1500)
                        }, n.dismissMessage = function() {
                            n.setState({
                                showError: !1,
                                showSuccess: !1
                            })
                        }, n.handleTitleEdit = function(e) {
                            var t = e.currentTarget.value.slice(0, N);
                            n.setState({
                                title: t,
                                showError: !1,
                                showSuccess: !1
                            })
                        }, n.editClipTitle = function() {
                            return o.__awaiter(n, void 0, void 0, function() {
                                var e, t;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if ("" === this.state.title.trim()) return this.setState({
                                                showError: !0,
                                                error: g.emptySubmission
                                            }), [2];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.props.editTitle(Object(u.a)({
                                                title: this.state.title.trim(),
                                                slug: this.props.clipSlug
                                            }))];
                                        case 2:
                                            return (e = n.sent()).data.updateClip && e.data.updateClip.error ? (this.setState({
                                                showError: !0,
                                                error: this.errorMessageToError(e.data.updateClip.error.message)
                                            }), [2]) : (this.props.clipBroadcasterId && this.props.clipId && this.props.clipTitle && m(Number(this.props.clipBroadcasterId), this.props.clipId, this.props.clipSlug, this.props.clipTitle, this.props.location), this.onSuccess(), [3, 4]);
                                        case 3:
                                            return t = n.sent(), this.setState({
                                                showError: !0,
                                                error: this.errorMessageToError(t.message)
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.canSaveEditedTitle = function() {
                            return n.props.clipTitle !== n.state.title.trim()
                        }, n.handleKeyDown = function(e) {
                            switch (e.keyCode) {
                                case d.a.Enter:
                                    return void(n.props.location === p.PageviewLocation.ClipsEditing ? n.setState({
                                        showSuccess: !0
                                    }) : n.canSaveEditedTitle() && n.editClipTitle());
                                default:
                                    return
                            }
                        }, n.state = {
                            title: t.clipTitle ? t.clipTitle.trim() : "",
                            showError: !1,
                            showSuccess: !1,
                            error: null
                        }, n
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return this.props.location === p.PageviewLocation.MyClipsManager ? this.renderForManager() : this.props.location === p.PageviewLocation.ClipsEditing ? this.renderForEdit() : this.renderForClipsViewing()
                    }, t.prototype.getErrorMessage = function() {
                        switch (this.state.error) {
                            case g.channelViolation:
                                return Object(l.d)("Uh-oh. Check for inappropriate language and try again!", "ClipsTitleEdit");
                            case g.emptySubmission:
                                return Object(l.d)("Please add a title.", "ClipsTitleEdit");
                            default:
                                return Object(l.d)("Whoops. Something went wrong.", "ClipsTitleEdit")
                        }
                    }, t.prototype.errorMessageToError = function(e) {
                        return null === e ? g.unknown : e.includes("403:") || e.toLowerCase() === i.InvalidTitle.toLowerCase() || e.toLowerCase() === r.InvalidTitle.toLowerCase() ? g.channelViolation : e === g.emptySubmission ? g.emptySubmission : g.unknown
                    }, t
                }(s.Component),
                R = Object(c.a)(_, {
                    name: "editTitle"
                })(C);
            n.d(t, !1, function() {
                return k
            }), n.d(t, "b", function() {
                return g
            }), n.d(t, !1, function() {
                return C
            }), n.d(t, "a", function() {
                return R
            })
        },
        WnZM: function(e, t, n) {},
        X7Ac: function(e, t, n) {
            "use strict";
            var i = n("wbMx");
            n.d(t, "a", function() {
                return i.a
            }), n.d(t, "b", function() {
                return i.b
            })
        },
        XKWF: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            });
            var i, r = n("vRsq");

            function a(e) {
                switch (e.toUpperCase()) {
                    case i.Popular:
                        return i.Popular;
                    case i.Newest:
                        return i.Newest;
                    default:
                        return null
                }
            }

            function o(e) {
                switch (e) {
                    case r.f.Newest:
                        return i.Newest;
                    case r.f.Popular:
                        return i.Popular;
                    default:
                        return e
                }
            }! function(e) {
                e.Popular = "VIEWS", e.Newest = "TIME"
            }(i || (i = {}))
        },
        XmgI: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "d", function() {
                return l
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "c", function() {
                return d
            });
            var i = n("5zXJ"),
                r = n("RcPG"),
                a = {
                    indexedActions: {},
                    orderedActions: []
                },
                o = /^((?:[A-Za-z0-9]+)(?:[A-Za-z]))([\d]+)$/;

            function s(e, t) {
                var n = [],
                    i = e.split(/\s+/);
                return i.forEach(function(e, a) {
                    var o = l(e, t);
                    if (o) n.push(o);
                    else {
                        var s = n.length && n[n.length - 1],
                            c = "";
                        if (a < i.length - 1 && (c = " "), s && s.type === r.a.Text) s.content += e + c;
                        else {
                            var d = "";
                            a && (d = " "), n.push({
                                type: r.a.Text,
                                content: d + e + c
                            })
                        }
                    }
                }), n
            }

            function l(e, t) {
                var n = e.match(o);
                if (!n) return null;
                var i = n[1].toLowerCase(),
                    a = Number(n[2]),
                    s = t.indexedActions[i];
                if (s) {
                    var l = s.orderedTiers.find(function(e) {
                        return e.bits <= a
                    });
                    if (!l && a && (l = s.orderedTiers[0]), l) return {
                        type: r.a.Emote,
                        content: {
                            images: d(l),
                            alt: s.prefix,
                            cheerAmount: a,
                            cheerColor: l.color
                        }
                    }
                }
                return null
            }

            function c(e, t) {
                var n = function(e) {
                        var t = new Map;
                        return e.orderedActions.forEach(function(e) {
                            e.campaign && t.set(e.prefix, e.campaign)
                        }), t
                    }(t),
                    r = new Map;
                e.forEach(function(e, t) {
                    if (e.alt && n.has(e.alt))
                        if (r.has(e.alt)) {
                            (i = r.get(e.alt)) && (i.total += e.cheerAmount || 0, i.lastAppearance = t)
                        } else {
                            var i = {
                                total: e.cheerAmount || 0,
                                lastAppearance: t,
                                campaign: n.get(e.alt)
                            };
                            r.set(e.alt, i)
                        }
                });
                var a = 1;
                return r.forEach(function(n) {
                    var r = 0;
                    n.campaign.thresholds.forEach(function(e) {
                        n.total >= e.minimumBits && (r = e.matchedPercent)
                    });
                    var o = Math.trunc(n.total * r);
                    if (o > 0) {
                        var s = l(i.t + o, t);
                        s && e.splice(n.lastAppearance + a++, 0, s.content)
                    }
                }), e
            }

            function d(e, t, n) {
                var i, r;
                void 0 === n && (n = !0);
                var a = n ? "animated" : "static";
                return t ? {
                    themed: !0,
                    dark: (i = {}, i[t + "x"] = e.indexedImages.DARK[a].get(t), i),
                    light: (r = {}, r[t + "x"] = e.indexedImages.LIGHT[a].get(t), r)
                } : {
                    themed: !0,
                    dark: {
                        "1x": e.indexedImages.DARK[a].get(1),
                        "1.5x": e.indexedImages.DARK[a].get(1.5),
                        "2x": e.indexedImages.DARK[a].get(2),
                        "3x": e.indexedImages.DARK[a].get(3),
                        "4x": e.indexedImages.DARK[a].get(4)
                    },
                    light: {
                        "1x": e.indexedImages.LIGHT[a].get(1),
                        "1.5x": e.indexedImages.LIGHT[a].get(1.5),
                        "2x": e.indexedImages.LIGHT[a].get(2),
                        "3x": e.indexedImages.LIGHT[a].get(3),
                        "4x": e.indexedImages.LIGHT[a].get(4)
                    }
                }
            }
        },
        YUvD: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("ClZk");

            function a(e) {
                return Object(i.connect)(function(t) {
                    return {
                        gdpr: {
                            status: t.gdpr.status,
                            blockConsentRequiredContent: Object(r.c)(t, e)
                        }
                    }
                }, null, null, {
                    areStatesEqual: function(e, t) {
                        return e.gdpr === t.gdpr
                    }
                })
            }
            n.d(t, "a", function() {
                return a
            }), n.d(t, !1, function() {})
        },
        ZBeb: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "FollowButton_FollowUser"
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
                                        }, {
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
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "followButtonFragment"
                                                    },
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
                    end: 218
                }
            };
            i.loc.source = {
                body: '#import "twilight/common/queries/follow-button-fragment.gql"\nmutation FollowButton_FollowUser($input: FollowUserInput!) {\nfollowUser(input: $input) {\nfollow {\ndisableNotifications\nuser {\n...followButtonFragment\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("V94A").definitions)), e.exports = i
        },
        a1OF: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            }), n.d(t, "b", function() {
                return p
            }), n.d(t, "e", function() {
                return m
            }), n.d(t, "c", function() {
                return f
            }), n.d(t, "d", function() {
                return h
            });
            var i = n("mrSG"),
                r = n("/7QA"),
                a = n("oe5X"),
                o = n("0FG4"),
                s = n("kRBY"),
                l = n("60o1"),
                c = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"],
                d = {};

            function u(e, t, n, r, a, o, s) {
                void 0 === a && (a = !1), void 0 === o && (o = !1), void 0 === s && (s = !1);
                var c = Object(l.a)(t.displayName, t.username);
                return {
                    badges: t.badges || {},
                    bits: t.bits,
                    user: i.__assign({}, c, {
                        userLogin: t.username,
                        userID: t.userID,
                        userType: t.userType,
                        color: t.color || p(t.userID)
                    }),
                    messageParts: m(e, t.emotes || {}, t.bits, n, r, t.username),
                    deleted: a,
                    banned: s,
                    hidden: o,
                    timestamp: Date.now()
                }
            }

            function p(e, t) {
                return void 0 === t && (t = 15), "number" != typeof d[e] && (d[e] = Math.floor(Math.random() * t)), c[d[e]]
            }

            function m(e, t, n, i, l, c) {
                var d = Object(s.e)(r.p.store.getState()),
                    u = {
                        cheers: n ? i : void 0,
                        emotes: {
                            type: o.a.Position,
                            map: t
                        },
                        links: {
                            blockLinks: l,
                            parseClips: !0,
                            parseVods: !0
                        },
                        mentions: {
                            senderLogin: c,
                            sessionUser: d
                        }
                    };
                return Object(a.a)(e, u)
            }

            function f(e) {
                return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g)
            }

            function h(e, t) {
                return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/" + Math.min(Math.ceil(t), 3) + ".0"
            }
        },
        a4lT: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsTitle"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                    end: 63
                }
            };
            n.loc.source = {
                body: "query ClipsTitle($slug: ID!) {\nclip(slug: $slug) {\nid\ntitle\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        bTcf: function(e, t) {
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
        bq0i: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("f00E"),
                s = n("Ue10");
            ! function(e) {
                e.BalloonInsideClickDetector = "balloon-inside-click-detector", e.MouseEnterDetector = "toggle-balloon-wrapper__mouse-enter-detector"
            }(i || (i = {}));
            var l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showBalloon: !!t.props.openByDefault,
                        hasInteracted: !!t.props.openByDefault
                    }, t.toggleBalloonId = Object(o.a)(), t.handleButtonClick = function() {
                        t.setState(function(e) {
                            return {
                                showBalloon: !e.showBalloon,
                                hasInteracted: !0
                            }
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!t.state.showBalloon)
                        })
                    }, t.handleGlobalClick = function(e) {
                        e.target.matches('[data-toggle-balloon-id="' + t.toggleBalloonId + '"] *') || t.hideBalloon()
                    }, t.handleInsideBalloonClick = function() {
                        t.hideBalloon()
                    }, t.handleMouseEnter = function() {
                        t.state.hasInteracted || t.setState({
                            hasInteracted: !0
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.openByDefault && document.addEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.componentWillUpdate = function(e, t) {
                    this.state.showBalloon !== t.showBalloon && (t.showBalloon ? document.addEventListener("click", this.handleGlobalClick, !0) : document.removeEventListener("click", this.handleGlobalClick, !0))
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.render = function() {
                    var e = a.Children.toArray(this.props.children);
                    if (2 !== e.length) throw new Error("ToggleBalloonWrapper should only be given two children: a clickable and a Balloon");
                    var t = e[0],
                        n = e[1];
                    if (n.type !== s.u) throw new Error("ToggleBalloonWrapper needs a Balloon as its second child element");
                    var o = a.cloneElement(t, {
                            onClick: this.handleButtonClick
                        }),
                        l = null;
                    (this.state.hasInteracted || this.props.alwaysMountBalloonContent) && (l = a.cloneElement(n, {
                        show: this.state.showBalloon
                    }), this.props.hideBalloonOnInsideClick && (l = a.createElement("div", {
                        "data-test-selector": i.BalloonInsideClickDetector,
                        onClick: this.handleInsideBalloonClick
                    }, l)));
                    var c = o;
                    return this.props.tooltipProps && (c = a.createElement(s.Rb, r.__assign({}, this.props.tooltipProps), o)), a.createElement(s.Xa, {
                        "data-toggle-balloon-id": this.toggleBalloonId,
                        display: this.props.display,
                        position: s.fb.Relative
                    }, a.createElement("div", {
                        style: {
                            display: "inherit"
                        },
                        onMouseEnter: this.handleMouseEnter,
                        "data-test-selector": i.MouseEnterDetector
                    }, c), l)
                }, t.prototype.toggleBalloon = function(e) {
                    void 0 === e && (e = !this.state.showBalloon), this.setState({
                        showBalloon: e,
                        hasInteracted: !0
                    })
                }, t.prototype.hideBalloon = function() {
                    var e = this;
                    this.setState({
                        showBalloon: !1
                    }, function() {
                        e.props.onToggle && e.props.onToggle(!0)
                    })
                }, t
            }(a.Component)
        },
        cMjZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("o4DC");

            function r(e) {
                return e && Object(i.c)(e) || ""
            }
        },
        dAHa: function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                l = n("/7QA"),
                c = n("yR8l"),
                d = n("BhFH"),
                u = n("iS14"),
                p = n("geRD"),
                m = n("f00E"),
                f = n("D7An"),
                h = n("2xye"),
                g = n("GnwI"),
                v = n("QVaV"),
                E = n("Ue10"),
                b = (n("MPK0"), "report-wizard-block"),
                y = "report-wizard-unblock",
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return a.createElement(E.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": b
                            }, a.createElement(E.Xa, {
                                display: E.X.Flex,
                                alignItems: E.f.Center
                            }, a.createElement(E.ob, {
                                type: E.qb.Brand,
                                asset: E.pb.Ban
                            }), a.createElement(E.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(l.d)("Block {user}", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return a.createElement(E.Xa, {
                                className: "reporting-wizard__block-actions",
                                display: E.X.Flex,
                                alignItems: E.f.Center
                            }, a.createElement(E.ob, {
                                type: E.qb.Success,
                                asset: E.pb.FollowCheck
                            }), a.createElement(E.Xa, {
                                margin: {
                                    right: 1
                                }
                            }, a.createElement(E.W, {
                                className: "block-user__success",
                                type: E.Ob.Span
                            }, Object(l.d)("{user} blocked", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))), a.createElement(E.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": y
                            }, a.createElement(E.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(l.d)("Unblock", "ReportWizardBlockActions"))))
                        }, t.handleBlock = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    return this.props.onBlock(), this.setState({
                                        userBlocked: !0
                                    }), [2]
                                })
                            })
                        }, t.handleUnblock = function() {
                            t.props.onUnblock(), t.setState({
                                userBlocked: !1
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(v.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return a.createElement(E.yb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, a.createElement(E.Xa, null, Object(l.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), a.createElement(E.yb, {
                            color: E.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, a.createElement(E.Xb, {
                            baseFontSize: E.Ca.Size6
                        }, a.createElement("p", null, Object(l.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), a.createElement("ul", null, a.createElement("li", null, Object(l.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), a.createElement("li", null, Object(l.d)("Prevent them from hosting you", "ReportWizardBlockActions")), a.createElement("li", null, Object(l.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), a.createElement("li", null, Object(l.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), a.createElement(E.Xa, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(a.Component),
                O = n("4qQ0");
            ! function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(i || (i = {}));
            var S, _ = {
                    generalFilter: function() {
                        return Object(l.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                    },
                    me: function() {
                        return Object(l.d)("Me", "ReportModalWizard")
                    },
                    someoneElse: function() {
                        return Object(l.d)("Someone else", "ReportModalWizard")
                    },
                    sexuallyCoercive: function() {
                        return Object(l.d)("acting in a sexually coercive or inappropriate way", "ReportModalWizard")
                    },
                    abusiveViolence: function() {
                        return Object(l.d)("They're threatening violence or physical harm", "ReportModalWizard")
                    },
                    commitingViolence: function() {
                        return Object(l.d)("They're committing acts of violence or physical harm", "ReportModalWizard")
                    },
                    threatening: function() {
                        return Object(l.d)("threatening, harming, or endangering someone", "ReportModalWizard")
                    },
                    abusive: function() {
                        return Object(l.d)("being hateful, harassing, or abusive", "ReportModalWizard")
                    }
                },
                k = {
                    input_description: {
                        getTitle: function() {
                            return Object(l.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: i.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(l.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: i.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(l.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: i.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(l.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: i.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(l.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: i.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(l.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: i.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(l.d)("Please submit a report to the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: i.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(l.d)("If you feel you are in immediate danger, please contact your local law enforcement.", "ReportModalWizard")
                        },
                        type: i.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(l.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: i.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(l.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: i.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(l.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: i.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(l.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: i.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(l.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: i.Link
                    },
                    messaging_general: {
                        getTitle: _.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: _.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(l.d)("They're participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: O.b.Harassment
                    },
                    violence: {
                        getTitle: function() {
                            return Object(l.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: O.b.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(l.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: O.b.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(l.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: O.b.Other
                    },
                    abusive: {
                        getTitle: function() {
                            return Object(l.d)("It's hateful, harassing, or abusive", "ReportModalWizard")
                        },
                        value: "abusive"
                    },
                    scam: {
                        getTitle: function() {
                            return Object(l.d)("It contains attempts to scam other community members", "ReportModalWizard")
                        },
                        value: "scam",
                        reportReason: O.b.Spam
                    },
                    emptyStream: {
                        getTitle: function() {
                            return Object(l.d)("There's nobody on the stream", "ReportModalWizard")
                        },
                        value: "empty stream"
                    },
                    impersonation: {
                        getTitle: function() {
                            return Object(l.d)("They're impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: O.b.Impersonation
                    },
                    underage: {
                        getTitle: function() {
                            return Object(l.d)("They're underage (12 or younger)", "ReportModalWizard")
                        },
                        value: "underage",
                        reportReason: O.b.Underaged
                    },
                    report_ip: {
                        getTitle: function() {
                            return Object(l.d)("I think they're using copyrighted content, trademarks, or other intellectual property that's not theirs", "ReportModalWizard")
                        },
                        value: "intellectual property"
                    },
                    inappropriateContent: {
                        getTitle: function() {
                            return Object(l.d)("It's inappropriate or obscene", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    violateDevAgreement: {
                        getTitle: function() {
                            return Object(l.d)("I think they're violating Twitch's Developer Agreement", "ReportModalWizard")
                        },
                        value: "violating developer agreement"
                    },
                    revealPersonalInfo: {
                        getTitle: function() {
                            return Object(l.d)("They might have revealed someone's personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: O.b.Other
                    },
                    inappropriateBadge: {
                        getTitle: function() {
                            return Object(l.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                        },
                        value: "emote/subscriber badge",
                        reportReason: O.b.Other
                    },
                    noModeration: {
                        getTitle: function() {
                            return Object(l.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                        },
                        value: "not moderating chat",
                        reportReason: O.b.Other
                    },
                    inappropriateExtension: {
                        getTitle: function() {
                            return Object(l.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: O.b.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(l.d)("They're cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: O.b.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(l.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: O.b.BitsViolation
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(l.d)("Their content is labeled incorrectly", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: O.b.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(l.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: O.b.Miscategorized
                    },
                    video_general: {
                        getTitle: _.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(l.d)("They're using hate speech, hateful symbols, or hateful media", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: O.b.HatefulConduct
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(l.d)("They're harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: O.b.Harassment
                    },
                    abusiveViolence: {
                        getTitle: _.abusiveViolence,
                        value: "threatening violence",
                        reportReason: O.b.Harm
                    },
                    commitingViolence: {
                        getTitle: _.commitingViolence,
                        value: "committing violence",
                        reportReason: O.b.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(l.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: O.b.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(l.d)("They're purposely revealing personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: O.b.Harassment
                    },
                    threat_me: {
                        getTitle: function() {
                            return Object(l.d)("At me", "ReportModalWizard")
                        },
                        value: "against me",
                        reportReason: O.b.Harm
                    },
                    threat_person: {
                        getTitle: function() {
                            return Object(l.d)("At someone else", "ReportModalWizard")
                        },
                        value: "against another person",
                        reportReason: O.b.Harm
                    },
                    threat_group: {
                        getTitle: function() {
                            return Object(l.d)("At a group of people", "ReportModalWizard")
                        },
                        value: "against group of people",
                        reportReason: O.b.Harm
                    },
                    threat_selfharm: {
                        getTitle: function() {
                            return Object(l.d)("They're threatening self-harm", "ReportModalWizard")
                        },
                        value: "selfharm"
                    },
                    inappropriate_game: {
                        getTitle: function() {
                            return Object(l.d)("The game isn't allowed on Twitch", "ReportModalWizard")
                        },
                        value: "prohibited game",
                        reportReason: O.b.Prohibited
                    },
                    sexuallyViolent: {
                        getTitle: function() {
                            return Object(l.d)("Violent sexual conduct", "ReportModalWizard")
                        },
                        value: "sexually violent",
                        reportReason: O.b.SexualViolence
                    },
                    childAnimal: {
                        getTitle: function() {
                            return Object(l.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                        },
                        value: "sexual conduct; child or animal",
                        reportReason: O.b.SexualViolence
                    },
                    pornographic: {
                        getTitle: function() {
                            return Object(l.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                        },
                        value: "pornographic",
                        reportReason: O.b.SexualContent
                    },
                    gory: {
                        getTitle: function() {
                            return Object(l.d)("Extreme violence or gore", "ReportModalWizard")
                        },
                        value: "gory",
                        reportReason: O.b.Gore
                    },
                    suggestive: {
                        getTitle: function() {
                            return Object(l.d)("Sexually suggestive content", "ReportModalWizard")
                        },
                        value: "sexually suggestive",
                        reportReason: O.b.SexualContent
                    },
                    nudity: {
                        getTitle: function() {
                            return Object(l.d)("Full or partial nudity", "ReportModalWizard")
                        },
                        value: "nudity",
                        reportReason: O.b.SexualContent
                    },
                    other: {
                        getTitle: function() {
                            return Object(l.d)("There's something else wrong with it...", "ReportModalWizard")
                        },
                        value: "other",
                        reportReason: O.b.Other
                    },
                    evasion: {
                        getTitle: function() {
                            return Object(l.d)("They were banned or suspended and are trying to get around it (ban evasion)", "ReportModalWizard")
                        },
                        value: "ban evasion"
                    },
                    evasion_sitewide: {
                        getTitle: function() {
                            return Object(l.d)("A sitewide ban from Twitch", "ReportModalWizard")
                        },
                        value: "sitewide ban",
                        reportReason: O.b.TosBanEvasion
                    },
                    evasion_chat: {
                        getTitle: function() {
                            return Object(l.d)("A chat ban from one or more channels", "ReportModalWizard")
                        },
                        value: "chat ban",
                        reportReason: O.b.ChatBanEvasion
                    },
                    evasion_messaging: {
                        getTitle: function() {
                            return Object(l.d)("A block from messaging me", "ReportModalWizard")
                        },
                        value: "messaging block",
                        reportReason: O.b.ChatBanEvasion
                    },
                    impersonation_me: {
                        getTitle: _.me,
                        value: "impersonating me",
                        reportReason: O.b.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(l.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: O.b.Impersonation
                    },
                    impersonation_other: {
                        getTitle: _.someoneElse,
                        value: "impersonating someone else",
                        reportReason: O.b.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(l.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: O.b.SelfHarm
                    },
                    chat: {
                        getTitle: function() {
                            return Object(l.d)("In a stream chat message", "ReportModalWizard")
                        },
                        value: "chat"
                    },
                    profile: {
                        getTitle: function() {
                            return Object(l.d)("In the profile content, extensions, or emotes", "ReportModalWizard")
                        },
                        value: "profile"
                    },
                    video: {
                        getTitle: function() {
                            return Object(l.d)("In a live stream, video, or clip", "ReportModalWizard")
                        },
                        value: "video"
                    },
                    room: {
                        getTitle: function(e) {
                            return Object(l.d)("In one of {username}'s rooms", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "room"
                    },
                    whisper: {
                        getTitle: function() {
                            return Object(l.d)("In a whisper (private message)", "ReportModalWizard")
                        },
                        value: "whisper",
                        reportContext: O.a.Whisper
                    },
                    username: {
                        getTitle: function() {
                            return Object(l.d)("In the username", "ReportModalWizard")
                        },
                        value: "username",
                        reportReason: O.b.OffensiveUsername
                    },
                    report_other: {
                        getTitle: function() {
                            return Object(l.d)("Somewhere else...", "ReportModalWizard")
                        },
                        value: "somewhere else",
                        omitFromDescription: !0
                    },
                    video_streamer: {
                        getTitle: function() {
                            return Object(l.d)("The streamer or channel owner", "ReportModalWizard")
                        },
                        value: "streamer"
                    },
                    video_someoneElse: {
                        getTitle: function() {
                            return Object(l.d)("Someone else in the video", "ReportModalWizard")
                        },
                        value: "someone else in video"
                    },
                    video_chatSomeone: {
                        getTitle: function() {
                            return Object(l.d)("Someone in chat", "ReportModalWizard")
                        },
                        value: "someone in chat",
                        differentTarget: !0
                    },
                    report_channelOwner: {
                        getTitle: function() {
                            return Object(l.d)("The channel owner", "ReportModalWizard")
                        },
                        value: "channel owner"
                    },
                    report_member: {
                        getTitle: function() {
                            return Object(l.d)("Another community member", "ReportModalWizard")
                        },
                        value: "community member",
                        differentTarget: !0
                    },
                    location_onTwitch: {
                        getTitle: function() {
                            return Object(l.d)("On Twitch", "ReportModalWizard")
                        },
                        value: "on twitch"
                    },
                    location_anotherSite: {
                        getTitle: function() {
                            return Object(l.d)("On another site or service", "RpoertModalWizard")
                        },
                        value: "another site"
                    },
                    location_TwitchEvent: {
                        getTitle: function() {
                            return Object(l.d)("In person, at a Twitch event", "ReportModalWizard")
                        },
                        value: "twitch event"
                    },
                    external_incitingRaids: {
                        getTitle: function() {
                            return Object(l.d)("inciting brigading or malicious raids", "ReportModalWizard")
                        },
                        reportReason: O.b.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: _.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: _.abusive,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: _.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: O.b.Harm
                    },
                    external_commitingViolence: {
                        getTitle: _.commitingViolence,
                        value: "external site; committing violence",
                        reportReason: O.b.Harm
                    },
                    conduct_impersonation: {
                        getTitle: function() {
                            return Object(l.d)("impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: O.b.Impersonation
                    },
                    spam: {
                        getTitle: function() {
                            return Object(l.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                        },
                        value: "spam",
                        reportReason: O.b.Spam
                    },
                    spam_bot: {
                        getTitle: function() {
                            return Object(l.d)("I think this is a bot account", "ReportModalWizard")
                        },
                        value: "bot"
                    },
                    spam_scam: {
                        getTitle: function() {
                            return Object(l.d)("They're trying to scam other community members or sending malicious links", "ReportModalWizard")
                        },
                        value: "scam or malicious links"
                    },
                    spam_repeated: {
                        getTitle: function() {
                            return Object(l.d)("They're sending repeated messages (spam)", "ReportModalWizard")
                        },
                        value: "repeat messages"
                    }
                },
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            var n = e.target,
                                i = n.name,
                                r = n.value;
                            t.props.onChangeText(i, r)
                        }, t.onSelect = function(e) {
                            if (t.props.currentCard.items && e.currentTarget.parentElement) {
                                var n = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                    i = t.props.currentCard.items[n];
                                t.props.onChangeRadio(i)
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? a.createElement(E.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return a.createElement(E.Xa, {
                            className: "reporting-wizard-card"
                        }, e, a.createElement(E.Ea, {
                            label: this.props.currentCard.getLabel ? this.props.currentCard.getLabel() : ""
                        }, this.renderCardItems()))
                    }, t.prototype.renderCardItems = function() {
                        var e = this,
                            t = this.props.currentCard,
                            n = [];
                        return t.items && t.type && (n = t.items.filter(function(e) {
                            return !!e
                        }).map(function(t, n) {
                            switch (t.type) {
                                case i.Text:
                                    return a.createElement(E.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case i.Link:
                                    return a.createElement(E.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, a.createElement(E.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, a.createElement(E.Xa, {
                                        display: E.X.Flex
                                    }, a.createElement(E.Xa, {
                                        display: E.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, a.createElement(E.ob, {
                                        asset: E.pb.Document
                                    })), t.getTitle())));
                                case i.Textarea:
                                    var r = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        o = t.required && (!r || !!r && 0 === r.trim().length);
                                    return a.createElement(E.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, a.createElement(E.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(l.d)("Optional", "ReportModalWizardCard")
                                    }, a.createElement(E.Lb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && o,
                                        value: r,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case i.MultipleChoice:
                                default:
                                    return a.createElement(E.Xa, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, a.createElement(E.lb, {
                                        checked: !!e.props.currentSelection && e.props.currentSelection.value === t.value,
                                        onChange: e.onSelect,
                                        label: t.getTitle(e.props.targetUser.displayName),
                                        "data-a-index": n,
                                        name: "card",
                                        value: t.value
                                    }))
                            }
                        })), n
                    }, t
                }(a.Component),
                C = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(S || (S = {}));
            var R, I, D, A = {
                    contentGeneral: function() {
                        return Object(l.d)("What would you like to report?", "ReportModalWizard")
                    },
                    content: function() {
                        return Object(l.d)("What's wrong with this content?", "ReportModalWizard")
                    },
                    identifyUser: function() {
                        return Object(l.d)("Who do you want to report?", "ReportModalWizard")
                    },
                    thisPersonIs: function() {
                        return Object(l.d)("This person is...", "ReportModalWizard")
                    },
                    relevantStatements: function() {
                        return Object(l.d)("What would you like to report? (Please choose the most relevant statement that applies.)", "ReportModalWizard")
                    }
                },
                w = {
                    report: function(e) {
                        return Object(l.d)("Report {username}", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportVideo: function(e) {
                        return Object(l.d)("Report {username}'s Video", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportMessage: function(e) {
                        return Object(l.d)("Report {username}'s Message", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfile: function(e) {
                        return Object(l.d)("Report {username}'s Profile Or Other Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportAbusive: function(e) {
                        return Object(l.d)("Report {username} for Abusive Conduct", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    tellUsMore: function() {
                        return Object(l.d)("Tell Us More", "ReportModalWizard")
                    },
                    thanks: function() {
                        return Object(l.d)("Thanks for letting us know", "ReportModalWizard")
                    },
                    thanksConcern: function() {
                        return Object(l.d)("Thank you for your concern", "ReportModalWizard")
                    }
                },
                L = {
                    getDescription: function() {
                        return Object(l.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: w.thanks,
                    type: S.Info,
                    value: "end card"
                },
                M = {
                    socialMedia: r.__assign({}, L, {
                        items: [k.endBlurb_socialmedia]
                    }),
                    violence: r.__assign({}, L, {
                        items: [k.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: w.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [k.endLink_DMCA, k.endLink_trademark, k.endLink_devAgreement],
                        type: S.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: w.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [k.endLink_selfharm],
                        type: S.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: w.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [k.endLink_eventCoC],
                        value: "twitch event end",
                        type: S.Info
                    }
                },
                P = {
                    getTitle: w.report,
                    getLabel: function() {
                        return Object(l.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [k.video, k.whisper, k.chat, k.room, k.profile, k.username, k.report_other],
                    type: S.MultipleChoice,
                    value: "content type"
                },
                F = {
                    identifyUser: {
                        getTitle: w.reportVideo,
                        getLabel: A.identifyUser,
                        items: [k.video_streamer, k.video_someoneElse, k.video_chatSomeone],
                        type: S.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: w.reportVideo,
                        getLabel: A.contentGeneral,
                        items: [k.revealPersonalInfo, k.video_labeling, k.video_inactive, k.video_general, k.report_ip, k.violateDevAgreement, k.selfharm],
                        type: S.MultipleChoice,
                        value: "video report reason"
                    },
                    general: {
                        getTitle: w.reportVideo,
                        getLabel: A.content,
                        items: [k.report_username, k.violence, k.abusive, k.cheating, k.scam, k.inappropriateContent, k.evasion, k.impersonation, k.underage, k.bitsViolation],
                        type: S.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                U = {
                    content: {
                        getTitle: w.reportMessage,
                        getLabel: A.contentGeneral,
                        items: [k.revealPersonalInfo, k.evasion, k.spam, k.maliciousRaid, k.report_username, k.messaging_general, k.selfharm],
                        type: S.MultipleChoice,
                        value: "message report reason"
                    },
                    general: {
                        getTitle: w.reportMessage,
                        getLabel: A.content,
                        items: [k.report_emotes, k.violence, k.abusive, k.inappropriateContent, k.impersonation, k.underage, k.bitsViolation],
                        type: S.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                x = r.__assign({}, U.content, {
                    getDescription: function() {
                        return Object(l.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                    }
                }),
                B = {
                    content: {
                        getTitle: w.reportProfile,
                        getLabel: A.contentGeneral,
                        items: [k.revealPersonalInfo, k.inappropriateBadge, k.inappropriateExtension, k.noModeration, k.profile_general, k.report_ip, k.violateDevAgreement, k.selfharm],
                        type: S.MultipleChoice,
                        value: "profile report reason"
                    },
                    general: {
                        getTitle: w.reportProfile,
                        getLabel: A.content,
                        items: [k.report_username, k.violence, k.abusive, k.scam, k.inappropriateContent, k.evasion, k.impersonation, k.underage, k.bitsViolation],
                        type: S.MultipleChoice,
                        value: "profile general report reason"
                    }
                },
                V = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: A.identifyUser,
                    items: [k.report_channelOwner, k.report_member],
                    value: "room report user",
                    type: S.MultipleChoice
                },
                j = {
                    getTitle: w.tellUsMore,
                    items: [k.input_description],
                    type: S.Confirm,
                    value: "tell us more"
                },
                W = {
                    banEvasion: r.__assign({}, j, {
                        items: [k.input_usernames, k.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: r.__assign({}, j, {
                        items: [k.input_link, k.input_connection, k.input_description],
                        nextCard: M.socialMedia,
                        value: "social media tell us more"
                    })
                },
                G = {
                    content: {
                        getTitle: w.reportAbusive,
                        getLabel: A.relevantStatements,
                        items: [k.hateSpeech, k.harassment, k.abusiveViolence, k.commitingViolence, k.swatting, k.personalInfo],
                        type: S.MultipleChoice,
                        value: "abuse type"
                    },
                    violence: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username} for Violence or Threats", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(l.d)("Are the threats or actions directed at you or someone else?", "ReportModalWizard")
                        },
                        items: [k.threat_me, k.threat_person, k.threat_group, k.threat_selfharm],
                        type: S.MultipleChoice,
                        value: "violence type"
                    }
                },
                H = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(l.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [k.location_onTwitch, k.location_anotherSite, k.location_TwitchEvent],
                        type: S.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: A.thisPersonIs,
                        getDescription: function() {
                            return Object(l.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [k.external_incitingRaids, k.external_threatening, k.external_harassment],
                        type: S.MultipleChoice,
                        nextCard: W.socialMedia,
                        value: "external site conduct"
                    },
                    external_violence: r.__assign({}, G.violence, {
                        items: [k.threat_me, k.threat_person, k.threat_group],
                        nextCard: W.socialMedia
                    }),
                    external_abusive: r.__assign({}, G.content, {
                        items: [k.hateSpeech, k.harassment, k.external_abusiveViolence, k.external_commitingViolence, k.swatting, k.personalInfo],
                        nextCard: W.socialMedia
                    })
                },
                z = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: A.contentGeneral,
                    items: [k.spam_bot, k.spam_scam, k.spam_repeated],
                    type: S.MultipleChoice,
                    value: "spam type"
                },
                X = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: A.relevantStatements,
                    items: [k.inappropriate_game, k.gory, k.sexuallyViolent, k.childAnimal, k.pornographic, k.suggestive, k.nudity, k.other],
                    type: S.MultipleChoice,
                    value: "inappropriate content type"
                },
                q = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(l.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [k.evasion_chat, k.evasion_sitewide, k.evasion_messaging],
                    type: S.MultipleChoice,
                    nextCard: W.banEvasion
                },
                Y = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Impersonation", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(l.d)("Who is being impersonated?", "ReportModalWizard")
                    },
                    getDescription: function() {
                        return Object(l.d)("Parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [k.impersonation_me, k.impersonation_brand, k.impersonation_other],
                    type: S.MultipleChoice,
                    value: "impersonation type"
                },
                K = P,
                Q = j,
                Z = L,
                $ = {
                    video: F.identifyUser,
                    whisper: x,
                    chat: U.content,
                    profile: B.content,
                    room: V,
                    "somewhere else": H.identifyLocation,
                    streamer: F.content,
                    "someone else in video": F.content,
                    "someone in chat": U.content,
                    general_video: F.general,
                    general_messaging: U.general,
                    general_profile: B.general,
                    "channel owner": B.content,
                    "community member": U.content,
                    "on twitch": B.content,
                    "another site": H.externalSite,
                    "twitch event": M.twitchEvent,
                    "brigading/raids": W.socialMedia,
                    threatening: H.external_violence,
                    "hateful/harassing": H.external_abusive,
                    "external site; threatening violence": H.external_violence,
                    "external site; committing violence": H.external_violence,
                    "external site; scam": W.socialMedia,
                    "ban evasion": q,
                    spam: z,
                    hateful: G.content,
                    impersonation: Y,
                    "violence/threats": G.violence,
                    "threatening violence": G.violence,
                    "committing violence": G.violence,
                    abusive: G.content,
                    "inappropriate content": X,
                    "intellectual property": M.legal,
                    "violating developer agreement": M.legal
                },
                J = {
                    selfharm: M.selfharm,
                    harm: M.violence,
                    other: Z
                },
                ee = {
                    CHANNEL_FEED_POST_REPORT: B.content,
                    COMMUNITY_REPORT: B.content,
                    CHAT_REPORT: U.content,
                    CLIP_REPORT: F.content,
                    EVENT_REPORT: B.content,
                    EXTENSION_REPORT: B.content,
                    LIVE_UP_REPORT: B.content,
                    ROOM_REPORT: V,
                    WHISPER_REPORT: x,
                    VOD_COMMENT_REPORT: U.content
                },
                te = "report-wizard-back",
                ne = "report-wizard-close",
                ie = "report-wizard-next",
                re = "report-wizard-submit",
                ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || ee[t.props.reportContentType] || K,
                            prevCards: [],
                            currentSelection: null,
                            prevSelections: [],
                            displacedSelections: [],
                            userTextInput: {},
                            error: "",
                            reportReason: t.props.reportReason || "",
                            modalCloseTracked: !1,
                            targetUnknown: !1,
                            reportContext: t.props.reportContentType
                        }, t.renderPrimer = function() {
                            return a.createElement(E.Xa, {
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(E.W, null, Object(l.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(l.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                i = ne,
                                r = !1,
                                o = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case S.MultipleChoice:
                                    e = Object(l.d)("Next", "ReportModalWizard"), n = t.handleNext, i = ie, r = !t.state.currentSelection;
                                    break;
                                case S.Confirm:
                                    e = Object(l.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, r = !t.state.userTextInput, i = re
                            }
                            return a.createElement(E.Xa, null, o, a.createElement(E.z, {
                                onClick: n,
                                disabled: r,
                                "data-test-selector": i
                            }, a.createElement(E.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return a.createElement(E.Xa, {
                                margin: {
                                    right: 1
                                },
                                display: E.X.InlineBlock
                            }, a.createElement(E.z, {
                                type: E.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": te
                            }, a.createElement(E.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, Object(l.d)("Back", "ReportModalWizard"))))
                        }, t.getTitle = function() {
                            return t.state.currentCard.getTitle && t.props.targetUser.displayName && t.props.targetUser.id ? t.state.targetUnknown ? t.state.currentCard.getTitle(Object(l.d)("Another User", "ReportModalWizard")) : t.state.currentCard.getTitle(t.props.targetUser.displayName) : t.state.targetUnknown ? Object(l.d)("Report User", "ReportModalWizard") : t.props.title
                        }, t.handleClose = function() {
                            t.setState({
                                modalCloseTracked: !0
                            }, function() {
                                return t.props.trackClose(D.Finish, t.state.currentCard.value)
                            }), t.props.onClose()
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    i = t.state.prevSelections.concat(t.state.currentSelection),
                                    r = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    a = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    o = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = e.nextCard || Q;
                                $[t.state.currentSelection.value] && (s = $[t.state.currentSelection.value]);
                                var l = t.state.currentSelection.reportReason || t.state.reportReason,
                                    c = s.type === S.Info;
                                t.setState({
                                    currentCard: s,
                                    reportReason: l,
                                    prevCards: c ? [] : n,
                                    prevSelections: i,
                                    targetUnknown: a,
                                    currentSelection: r || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: o
                                }, function() {
                                    return t.trackNavigation(I.Next, e.value)
                                })
                            }
                        }, t.createReportDescription = function() {
                            return "" + (t.state.reportContext !== t.props.reportContentType ? "report context: " + t.props.reportContentType + "\n\n" : "") + t.state.prevSelections.map(function(e) {
                                if (!e.omitFromDescription) return e.value
                            }).filter(function(e) {
                                return !!e
                            }).join(" > ") + "\n\n" + Object.keys(t.state.userTextInput).map(function(e) {
                                return e + ": " + t.state.userTextInput[e]
                            }).join("\n")
                        }, t.requiredInputsNonEmpty = function() {
                            if (t.state.currentCard.items) return 0 === t.state.currentCard.items.filter(function(e) {
                                if (e.type !== i.Textarea || !e.required) return !1;
                                var n = t.state.userTextInput[e.value],
                                    r = n && 0 === n.trim().length;
                                return !n || r
                            }).length
                        }, t.handleSubmit = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, a = this;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e = Object(l.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, null, null, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (r.sent(), this.props.submitStatus) {
                                                case C.b.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case C.b.Success:
                                                    i = Z, J[t] && (i = J[t]), this.state.currentCard.nextCard && (i = this.state.currentCard.nextCard), this.setState({
                                                        currentCard: i,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return a.trackNavigation(I.Submit)
                                                    });
                                                    break;
                                                case C.b.UserError:
                                                    this.setState({
                                                        error: Object(l.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case C.b.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(l.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(C.b.FormError), this.setState({
                                                error: e
                                            }), r.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, a, o = this;
                                return r.__generator(this, function(r) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], i = !n.differentTarget && this.state.targetUnknown, a = this.state.displacedSelections, this.state.currentSelection && (a = a.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: a,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: i
                                    }, function() {
                                        return o.trackNavigation(I.Back, e.value)
                                    }), [2]
                                })
                            })
                        }, t.handleTextInput = function(e, n) {
                            var i = t.state.userTextInput;
                            i[e] = n, t.setState({
                                userTextInput: i
                            })
                        }, t.handleSelection = function(e) {
                            if (t.state.currentCard.items && e !== t.state.currentSelection) {
                                var n = t.state.targetUnknown;
                                if (n) n = 0 === t.state.displacedSelections.filter(function(e) {
                                    return e.differentTarget
                                }).length;
                                var i = t.state.reportContext;
                                (t.state.displacedSelections.filter(function(e) {
                                    return e.reportContext
                                }).length || t.state.currentSelection && t.state.currentSelection.reportContext) && (i = t.props.reportContentType), t.setState({
                                    currentSelection: e,
                                    displacedSelections: [],
                                    userTextInput: {},
                                    targetUnknown: n,
                                    reportContext: i
                                })
                            }
                        }, t.trackNavigation = function(e, n) {
                            t.props.trackAction(e, n, t.state.currentCard.value)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(D.Close, this.state.currentCard.value)
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === S.Info && this.state.currentCard.blockPrompt ? a.createElement(T, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? a.createElement(E.yb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === S.Info ? null : this.renderPrimer();
                        return a.createElement(E.yb, {
                            className: "reporting-wizard",
                            display: E.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: E.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, a.createElement(E.W, {
                            bold: !0,
                            fontSize: E.Ca.Size4
                        }, this.getTitle()), n, a.createElement(E.Xa, {
                            margin: {
                                y: 1
                            }
                        }, a.createElement(N, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === C.b.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(a.Component),
                oe = n("+PZR"),
                se = n("PDCe"),
                le = n("s8Ou"),
                ce = n("0hI/");
            n.d(t, "c", function() {
                    return I
                }), n.d(t, "a", function() {
                    return D
                }), n.d(t, "b", function() {
                    return ue
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(R || (R = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(I || (I = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(D || (D = {}));
            var de = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, i, a, o) {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var n, s, c, d, u = this;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (e !== C.a) return [3, 5];
                                        c = {
                                            userID: this.props.data.targetUser.id,
                                            communityID: i || "",
                                            reason: t
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.reportUserInCommunity(Object(p.a)(c))];
                                    case 2:
                                        return r.sent(), l.p.tracking.track(h.SpadeEventType.CommunityModeration, {
                                            community_id: i,
                                            name: a,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            target_id: this.props.reportContext.targetUserID,
                                            action: "report",
                                            reason: e
                                        }), this.setState({
                                            submitStatus: C.b.Success
                                        }, function() {
                                            u.state.showWizard || u.trackAction(R.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return n = r.sent(), l.k.error(n, "ReportUserInCommunity Mutation failed."), this.setState({
                                            submitStatus: C.b.MutationError
                                        }), [3, 4];
                                    case 4:
                                        return [3, 9];
                                    case 5:
                                        if (s = o === O.a.Whisper ? o : this.props.reportContext.contentType, c = {
                                                description: t,
                                                reason: e,
                                                content: s,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }, this.props.reportContext.contentType === O.a.Community && this.props.reportContext.extra && (c.description = Object(oe.a)(this.props.reportContext.extra, t)), null === c.targetID) return this.setState({
                                            submitStatus: C.b.UserError
                                        }), [2];
                                        r.label = 6;
                                    case 6:
                                        return r.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(p.a)(c))];
                                    case 7:
                                        return r.sent(), this.props.reportContext.contentType === O.a.Community && l.p.tracking.track(h.SpadeEventType.CommunityReport, {
                                            community_id: this.props.reportContext.contentID,
                                            name: this.props.reportContext.extra,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            reason: e
                                        }), this.setState({
                                            submitStatus: C.b.Success
                                        }, function() {
                                            u.state.showWizard || u.trackAction(R.Submit)
                                        }), [3, 9];
                                    case 8:
                                        return d = r.sent(), l.k.error(d, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: C.b.MutationError
                                        }), [3, 9];
                                    case 9:
                                        return [2]
                                }
                            })
                        })
                    }, n.handleChildError = function(e) {
                        return n.setState({
                            submitStatus: e
                        })
                    }, n.handleClose = function() {
                        n.props.onClose && n.props.onClose(n.state.submitStatus, n.state.userBlocked)
                    }, n.onBlock = function() {
                        n.props.blockUserMutation(n.props.data.targetUser.id, void 0, void 0, r.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !0
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, r.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(I.Open, void 0, e) : n.trackAction(R.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(I.Close, t, void 0, e) : n.trackAction(R.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, i, r) {
                        l.p.tracking.track(h.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === C.b.Success,
                            modal_type: "wizard_v1",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: r,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: i
                        })
                    }, n.trackAction = function(e) {
                        l.p.tracking.track(h.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === C.b.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(m.a)();
                    var i = l.p.experiments.getAssignment(f.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: C.b.Unsubmitted,
                        showWizard: "yes" === i,
                        openEventSent: !1,
                        closeEventSent: !1,
                        userBlocked: !1
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackOpen()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose(), this.state.showWizard || this.trackClose()
                }, t.prototype.render = function() {
                    if (this.props.data.error) return a.createElement(E.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(E.W, {
                        fontSize: E.Ca.Size5
                    }, Object(l.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return a.createElement(E.eb, {
                        lineCount: 3
                    });
                    if (this.props.data.targetUser) {
                        var e = {
                            onClose: this.handleClose,
                            onError: this.handleChildError,
                            onSubmit: this.handleSubmit,
                            reportContentType: this.props.reportContext.contentType,
                            submitStatus: this.state.submitStatus,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        };
                        return this.state.showWizard ? this.props.data.loading ? a.createElement(E.Za, null) : a.createElement(ae, r.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : a.createElement(C.c, r.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return a.createElement(E.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(E.W, {
                        fontSize: E.Ca.Size5
                    }, Object(l.d)("The user you are trying to report does not exist", "ReportUser")))
                }, Object.defineProperty(t.prototype, "userBlocked", {
                    get: function() {
                        var e = this;
                        return !!(this.props.data.currentUser && this.props.data.currentUser.blockedUsers && this.props.data.currentUser.blockedUsers.find(function(t) {
                            return !!t && t.id === e.props.reportContext.targetUserID
                        }))
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.Component);
            var ue = Object(s.compose)(Object(c.a)(se, {
                name: "reportUserInCommunity"
            }), Object(c.a)(le, {
                name: "reportUser"
            }), Object(c.a)(ce, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(g.b)("ReportUser", {
                autoReportInteractive: !0
            }), Object(d.a)(), Object(u.a)(), Object(o.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(de)
        },
        "dIU+": function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("fvjX"),
                a = n("1/iK"),
                o = n("y5D0"),
                s = n("kRBY"),
                l = n("mrSG"),
                c = n("TSYQ"),
                d = n("q1tI"),
                u = n("/7QA"),
                p = n("eJ65"),
                m = n("yR8l"),
                f = n("geRD"),
                h = n("J9w5"),
                g = n("I6K6"),
                v = n("sgJZ"),
                E = {
                    Channel: "channel"
                };
            var b, y = n("2xye"),
                T = n("JcRA"),
                O = n("GnwI"),
                S = n("Ba7Q"),
                _ = n("Ar2k"),
                k = n("Ue10"),
                N = n("ZBeb"),
                C = (n("Kcwz"), n("CZEr")),
                R = n("Qdxp");
            ! function(e) {
                e[e.IconOnly = 0] = "IconOnly", e[e.TextOnly = 1] = "TextOnly", e[e.IconAndText = 2] = "IconAndText"
            }(b || (b = {}));
            var I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isFollowing: !1,
                            showDropdown: !1,
                            disableNotifications: !0
                        }, t.userDataLoaded = function() {
                            return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.user
                        }, t.toggleFollowing = function() {
                            var e;
                            t.state.isFollowing ? (t.unfollowUser(), e = y.SpadeEventType.Unfollow) : (t.followUser(), e = y.SpadeEventType.Follow);
                            var n = t.getFollowData();
                            n && function(e, t) {
                                l.__awaiter(this, void 0, void 0, function() {
                                    var n, i, r, a, o, s, c, d, p, m;
                                    return l.__generator(this, function(l) {
                                        switch (l.label) {
                                            case 0:
                                                if (n = null, i = null, r = null, a = null, o = null, !t.channelID) return [3, 5];
                                                l.label = 1;
                                            case 1:
                                                return l.trys.push([1, 3, , 4]), [4, u.p.apollo.client.query({
                                                    query: v,
                                                    variables: {
                                                        id: t.channelID
                                                    }
                                                })];
                                            case 2:
                                                return a = l.sent(), [3, 4];
                                            case 3:
                                                return c = l.sent(), u.k.warn("Failed to make query for channel info in FollowEvent reporting.", {
                                                    err: c,
                                                    channelID: t.channelID
                                                }), [3, 4];
                                            case 4:
                                                (r = a && a.data && a.data.user) ? o = r.hosting.stream && r.hosting.stream.game ? r.hosting.stream.game.name : r.stream && r.stream.game && r.stream.game.name: u.k.warn("Query for channel info in FollowEvent reporting returned no data.", {
                                                    channelID: t.channelID
                                                }), l.label = 5;
                                            case 5:
                                                if (!(d = u.o.getVideoPlayerTrackingData().vodID)) return [3, 10];
                                                l.label = 6;
                                            case 6:
                                                return l.trys.push([6, 8, , 9]), [4, u.p.apollo.client.query({
                                                    query: h,
                                                    variables: {
                                                        id: d
                                                    }
                                                })];
                                            case 7:
                                                return n = l.sent(), [3, 9];
                                            case 8:
                                                return p = l.sent(), u.k.warn("Failed to make query for VOD info in FollowEvent reporting.", {
                                                    err: p,
                                                    currentVODID: d
                                                }), [3, 9];
                                            case 9:
                                                (i = n && n.data && n.data.video) ? s = Object(g.a)(i.broadcastType): (s = null, u.k.warn("Query for video info in FollowEvent reporting return no data.", {
                                                    currentVODID: d
                                                })), l.label = 10;
                                            case 10:
                                                return m = {
                                                    channel: t.channelLogin,
                                                    channel_id: t.channelID,
                                                    channel_game: o,
                                                    cta_visible: u.o.getVideoPlayerTrackingData().followCTAVisible,
                                                    host_channel: t.hostChannelLogin,
                                                    host_channel_id: t.hostChannelID,
                                                    game: t.game,
                                                    partner: r ? r.isPartner : null,
                                                    src: t.src,
                                                    vod_id: d,
                                                    vod_type: s
                                                }, u.o.track(e, m), [2]
                                        }
                                    })
                                })
                            }(e, {
                                channelLogin: n.user && n.user.login || "",
                                channelID: n.user && n.user.id || "",
                                hostChannelLogin: t.props.hostChannelLogin,
                                hostChannelID: t.props.hostChannelID,
                                src: E.Channel
                            }), t.hideTooltip()
                        }, t.followUser = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, r;
                                return l.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e = this.getFollowData(), this.props.followUser && e ? (this.setState({
                                                showDropdown: !0
                                            }), t = {
                                                followUser: {
                                                    __typename: "FollowUserPayload",
                                                    follow: {
                                                        disableNotifications: !1,
                                                        __typename: "Follow",
                                                        user: {
                                                            __typename: "User",
                                                            id: e.user && e.user.id,
                                                            displayName: e.user && e.user.displayName,
                                                            login: e.user && e.user.login,
                                                            self: {
                                                                __typename: "UserSelfConnection",
                                                                follower: {
                                                                    __typename: "FollowerEdge",
                                                                    disableNotifications: !1
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }, n = Object(f.b)({
                                                disableNotifications: !1,
                                                targetID: e.user && e.user.id || ""
                                            }, t), [4, this.props.followUser(n)]) : [2];
                                        case 1:
                                            return (i = a.sent()).data.followUser && i.data.followUser.follow && (r = i.data.followUser.follow, Object(f.e)(R, {
                                                login: this.props.channelLogin
                                            }, function(e) {
                                                var t = e.user;
                                                return t && t.self && (t.self.follower ? t.self.follower.disableNotifications = r.disableNotifications : t.self.follower = {
                                                    __typename: "FollowerEdge",
                                                    disableNotifications: r.disableNotifications
                                                }), e
                                            })), this.props.onFollow && this.props.onFollow(this.props.channelLogin), [2]
                                    }
                                })
                            })
                        }, t.unfollowUser = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return l.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return e = this.getFollowData(), this.props.unfollowUser && e ? (t = {
                                                unfollowUser: {
                                                    __typename: "UnfollowUserPayload",
                                                    follow: {
                                                        disableNotifications: null,
                                                        __typename: "Follow",
                                                        user: {
                                                            __typename: "User",
                                                            id: e.user && e.user.id,
                                                            displayName: e.user && e.user.displayName,
                                                            login: e.user && e.user.login,
                                                            self: {
                                                                __typename: "UserSelfConnection",
                                                                follower: {
                                                                    __typename: "FollowerEdge",
                                                                    disableNotifications: null
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }, n = Object(f.b)({
                                                targetID: e.user && e.user.id || ""
                                            }, t), [4, this.props.unfollowUser(n)]) : [2];
                                        case 1:
                                            return i.sent(), Object(f.e)(R, {
                                                login: this.props.channelLogin
                                            }, function(e) {
                                                var t = e.user;
                                                return t && t.self && (t.self.follower ? t.self.follower.disableNotifications = null : t.self.follower = {
                                                    __typename: "FollowerEdge",
                                                    disableNotifications: null
                                                }), e
                                            }), this.props.onUnfollow && this.props.onUnfollow(this.props.channelLogin), [2]
                                    }
                                })
                            })
                        }, t.getFollowData = function() {
                            return t.props.followData ? t.props.followData : t.props.data
                        }, t.setButtonContainerRef = function(e) {
                            t.buttonContainerRef !== e && (t.removeEventListeners(), t.buttonContainerRef = e, t.addEventListeners())
                        }, t.onMouseEnter = function() {
                            t.buttonContainerRef && t.state.isFollowing && t.props.showTooltips && t.props.tooltipLayer.show({
                                from: t.buttonContainerRef,
                                label: t.getUnfollowText(),
                                direction: k.Tb.Top
                            })
                        }, t.onMouseLeave = function() {
                            t.hideTooltip()
                        }, t.hideTooltip = function() {
                            t.props.tooltipLayer.hide()
                        }, t.onAnimatedButtonComplete = function() {
                            t.props.onToggleAnimationComplete && t.props.onToggleAnimationComplete(t.state.isFollowing)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive(), this.addEventListeners()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.channelLogin && !this.userDataLoaded() || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.reportInteractive()
                    }, t.prototype.componentWillMount = function() {
                        var e = this.props.data || this.props.followData;
                        if (e) {
                            var t = e.user;
                            this.setState({
                                isFollowing: t && t.self && t.self.follower && null !== t.self.follower.disableNotifications || !1,
                                disableNotifications: t && t.self && t.self.follower && t.self.follower.disableNotifications
                            })
                        }
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        if (e.data && !e.data.loading && !e.data.error) {
                            var t = e.data.user;
                            this.setState({
                                isFollowing: t && t.self && t.self.follower && null !== t.self.follower.disableNotifications || !1,
                                disableNotifications: !(t && t.self && t.self.follower && null !== t.self.follower.disableNotifications) || t.self.follower.disableNotifications
                            })
                        }
                    }, t.prototype.componentWillUnmount = function() {
                        this.removeEventListeners()
                    }, t.prototype.render = function() {
                        if (!this.props.isLoggedIn) return this.renderFollowButton(this.props.login);
                        if (this.props.showLoadingPlaceholder && (!this.props.data || this.props.data.loading)) return this.renderPlaceholder();
                        if (this.props.hideWhenFollowing || this.props.currentUserLogin === this.props.channelLogin || !this.props.followData && (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.user)) return null;
                        var e = null;
                        return e = !this.state.isFollowing || this.props.animatedButton ? this.renderFollowButton(this.toggleFollowing) : this.props.hideDropdownWhenFollowing ? this.renderUnfollowButton() : this.renderUnfollowButtonWithDropdown(), d.createElement(k.Xa, {
                            refDelegate: this.setButtonContainerRef
                        }, e)
                    }, t.prototype.renderPlaceholder = function() {
                        switch (this.props.size) {
                            case k.D.Large:
                                return d.createElement(k.eb, {
                                    width: this.props.fullWidthButton ? void 0 : 93,
                                    height: 36
                                });
                            case k.D.Small:
                                return d.createElement(k.eb, {
                                    width: this.props.fullWidthButton ? void 0 : 66,
                                    height: 24
                                });
                            default:
                                return d.createElement(k.eb, {
                                    width: this.props.fullWidthButton ? void 0 : 70,
                                    height: 30
                                })
                        }
                    }, t.prototype.renderFollowButton = function(e) {
                        var t = this.props.isHostedFollow && this.props.channelName ? Object(u.d)("Follow {username}", {
                                username: this.props.channelName
                            }, "FollowButton") : Object(u.d)("Follow", "FollowButton"),
                            n = c("follow-btn--animated"),
                            i = this.state.isFollowing;
                        return this.props.animatedButton ? d.createElement("div", {
                            className: n
                        }, d.createElement(T.a, {
                            text: i ? void 0 : t,
                            icon: i ? k.pb.Heart : k.pb.FollowHollow,
                            iconOnHover: i ? k.pb.Unheart : k.pb.Heart,
                            type: i ? k.F.Text : k.F.Default,
                            typeOnHover: i ? k.F.Alert : void 0,
                            onClick: e,
                            onClickAnimationEnd: this.onAnimatedButtonComplete
                        })) : d.createElement(k.z, l.__assign({
                            ariaLabel: t,
                            blurAfterClick: this.props.blurAfterClick,
                            "data-a-target": "follow-button",
                            "data-test-selector": "follow-button",
                            icon: this.getButtonIcon(),
                            onClick: e,
                            size: this.props.size,
                            tabIndex: this.props.tabIndex,
                            type: this.props.followButtonType || k.F.Default,
                            fullWidth: this.props.fullWidthButton
                        }, Object(k.cc)(this.props)), this.props.followUIType === b.IconOnly ? null : t)
                    }, t.prototype.renderUnfollowButton = function(e) {
                        var t = this.getUnfollowText(),
                            n = c("follow-btn follow-btn--following", {
                                "follow-btn--with-dropdown": e
                            });
                        return d.createElement("button", l.__assign({
                            className: n,
                            "aria-label": t,
                            "data-a-target": "unfollow-button",
                            "data-test-selector": "unfollow-button",
                            tabIndex: this.props.tabIndex,
                            onClick: this.toggleFollowing
                        }, Object(k.cc)(this.props)), d.createElement(k.Xa, {
                            padding: {
                                x: .5
                            },
                            className: "follow-btn__inner",
                            fullWidth: !0,
                            fullHeight: !0
                        }, d.createElement("span", {
                            className: "follow-btn__label",
                            "data-test-selector": "unfollow-button-label"
                        }, this.props.unfollowUIType !== b.TextOnly && d.createElement(k.ob, {
                            asset: k.pb.Heart
                        }), this.props.unfollowUIType !== b.IconOnly && d.createElement(k.Xa, {
                            padding: {
                                x: .5
                            }
                        }, Object(u.d)("Following", "FollowButton"))), d.createElement("span", {
                            className: "follow-btn__label-hover",
                            "data-test-selector": "unfollow-button-label-hover"
                        }, this.props.unfollowUIType !== b.TextOnly && d.createElement(k.ob, {
                            asset: k.pb.Unheart
                        }), this.props.unfollowUIType !== b.IconOnly && d.createElement(k.Xa, {
                            padding: {
                                x: .5
                            }
                        }, t))))
                    }, t.prototype.renderUnfollowButtonWithDropdown = function() {
                        var e = this.props.balloonDirection ? this.props.balloonDirection : k.v.BottomRight;
                        return d.createElement(k.Xa, {
                            display: k.X.Flex,
                            className: "follow-btn",
                            "data-test-selector": "unfollow-button__dropdown"
                        }, d.createElement(k.Xa, null, this.renderUnfollowButton(!0)), d.createElement(p.a, {
                            display: k.X.InlineFlex,
                            openByDefault: this.state.showDropdown
                        }, d.createElement("button", {
                            tabIndex: this.props.tabIndex,
                            "aria-label": Object(u.d)("Dropdown", "FollowButton"),
                            className: "follow-btn__dropdown-toggle",
                            "data-a-target": "follow-dropdown-toggle"
                        }, d.createElement(k.Xa, {
                            justifyContent: k.Wa.Center,
                            display: k.X.Flex,
                            alignItems: k.f.Stretch,
                            fullHeight: !0
                        }, d.createElement(k.ob, {
                            asset: k.pb.GlyphArrDown
                        }))), d.createElement(k.u, {
                            size: k.w.Small,
                            direction: e,
                            "data-a-target": "follow-notifications-balloon"
                        }, d.createElement(k.Xa, {
                            padding: 1
                        }, d.createElement(S.a, {
                            channelLogin: this.props.channelLogin
                        })))))
                    }, t.prototype.getButtonIcon = function() {
                        var e = this.props.hollowIcons && !this.state.isFollowing ? k.pb.FollowHollow : k.pb.Heart;
                        return this.props.followUIType === b.TextOnly ? void 0 : e
                    }, t.prototype.reportInteractive = function() {
                        A(this.props) ? this.props.latencyTracking.reportInteractive() : this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.addEventListeners = function() {
                        this.buttonContainerRef && (this.buttonContainerRef.addEventListener("mouseover", this.onMouseEnter), this.buttonContainerRef.addEventListener("mouseleave", this.onMouseLeave))
                    }, t.prototype.removeEventListeners = function() {
                        this.buttonContainerRef && (this.buttonContainerRef.removeEventListener("mouseover", this.onMouseEnter), this.buttonContainerRef.removeEventListener("mouseleave", this.onMouseLeave))
                    }, t.prototype.getUnfollowText = function() {
                        return Object(u.d)("Unfollow", "FollowButton")
                    }, t
                }(d.Component),
                D = Object(r.compose)(Object(m.a)(R, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: A
                }), Object(m.a)(N, {
                    name: "followUser"
                }), Object(m.a)(C, {
                    name: "unfollowUser"
                }), Object(_.c)(), Object(O.b)("FollowButton"))(I);

            function A(e) {
                return !e.isLoggedIn || (!e.channelLogin || (!!e.followData || e.channelLogin === e.currentUserLogin))
            }
            var w = Object(i.connect)(function(e) {
                var t = Object(s.e)(e);
                return {
                    currentUserLogin: t && t.login,
                    isLoggedIn: Object(s.f)(e)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    login: function() {
                        return Object(o.e)(a.a.FollowButton)
                    }
                }, e)
            })(D);
            n.d(t, "b", function() {
                return b
            }), n.d(t, !1, function() {}), n.d(t, "a", function() {
                return w
            })
        },
        dW6f: function(e, t, n) {},
        dsEc: function(e, t, n) {},
        eFQ3: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("9C/b"),
                a = n("fvjX"),
                o = n("mrSG"),
                s = n("Pw1c"),
                l = n("q1tI"),
                c = [];
            s.onchange = function() {
                c.forEach(function(e) {
                    e()
                })
            };
            var d, u = n("1/iK"),
                p = n("y5D0"),
                m = n("d0ua"),
                f = n("kRBY"),
                h = n("XDQu"),
                g = n("KxT4"),
                v = n("S1Za"),
                E = n("AKMF"),
                b = n("TSYQ"),
                y = n("1hWM"),
                T = n("imBb"),
                O = n("cr+I"),
                S = n("/7QA"),
                _ = n("Fxe2"),
                k = n("f00E"),
                N = n("vRsq"),
                C = n("2xye"),
                R = n("kz7j"),
                I = n("ndwU"),
                D = n("GnwI");
            ! function(e) {
                e.LoadStart = "loadstart", e.Error = "error", e.LoadedMetadata = "loadedmetadata", e.CanPlay = "canplay", e.Playing = "playing", e.Waiting = "waiting", e.Seeking = "seeking", e.Seeked = "seeked", e.Ended = "ended", e.DurationChange = "durationchange", e.TimeUpdate = "timeupdate", e.Play = "play", e.Pause = "pause", e.VolumeChange = "volumechange", e.RateChange = "ratechange"
            }(d || (d = {}));
            var A = n("kxrW"),
                w = n("oKCn"),
                L = n("lTz2"),
                M = n("C94G"),
                P = (n("Qqhu"), n("Addw")),
                F = "debug",
                U = {
                    amazon: !1,
                    comscore: !1,
                    google: !1,
                    nielsen: !1
                },
                x = {
                    allowfullscreen: !0,
                    externalfullscreen: !1,
                    autoplay: !0,
                    branding: !1,
                    channelInfo: !1,
                    controls: !0,
                    debug: !1,
                    height: "100%",
                    playsinline: !0,
                    player: w.e.Site,
                    showInfo: !1,
                    showtheatre: !1,
                    trackingProperties: {
                        client_build_id: S.p.config.buildID,
                        client_app: "twilight"
                    },
                    width: "100%",
                    oauth_token: "",
                    gdpr: U
                },
                B = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.lastGDPR = U, n.hasInitializedOffsets = !1, n.logger = S.k.withCategory("video-player"), n.initializePlayer = function(e) {
                            var t = o.__assign({}, x, {
                                allowfullscreen: !n.props.disableFullscreen,
                                autoplay: !n.props.paused,
                                externalfullscreen: n.props.fullscreen.supported(),
                                gdpr: n.createPlayerGDPROptions(n.props),
                                muted: n.props.muted,
                                showtheatre: !n.props.disableTheatreButton
                            });
                            n.playerBuffering = n.registerBufferingEvent(!!n.props.paused), n.playerPlayed = n.registerPlayedEvent(!!n.props.paused);
                            var i = n.props.playerTypeOverride;
                            i && (t.player = i, n.playerType = i, i === w.e.ClipsEditing && (t.muted = !0)), n.props.channelLogin && (t.channel = n.props.channelLogin, n.lastSetChannel = n.props.channelLogin), n.props.collectionID && (t.collection = n.props.collectionID), n.props.clipSlug && (t.clip = n.props.clipSlug), n.props.vodID && (t.video = Object(N.p)(n.props.vodID), S.o.setVideoPlayerTrackingData({
                                vodID: n.props.vodID
                            })), n.props.showChannelInfoOnHover && (t.showInfo = n.props.showChannelInfoOnHover), void 0 !== n.props.persistUserPreferences && (t.persistUserPreferences = n.props.persistUserPreferences), void 0 !== n.props.nextVideoOffset && n.props.nextVideoOffset >= 0 && (t.time = Object(P.a)(n.props.nextVideoOffset)), t.oauth_token = n.props.authToken || "", t.debug = "true" === O.parse(window.location.search)[F], n.logger.debug("Initializing", t);
                            var r = new e(n.playerRef, t);
                            n.player = r, r.addEventListener(A.a.PlayerReady, n.onPlayerReady), r.addEventListener(A.a.CompanionAdBuffered, n.companionAdBuffered), r.addEventListener(A.a.Online, n.onStreamStatusOnline), r.addEventListener(A.a.Offline, n.onStreamStatusOffline), r.addEventListener(d.Ended, n.onStreamStatusOffline), r.addEventListener(d.Play, n.onPlayerPlay), r.addEventListener(d.Playing, n.onPlayerPlaying), r.addEventListener(d.Seeking, n.onSeeking), r.addEventListener(d.Seeked, n.onSeek), r.addEventListener(d.TimeUpdate, n.onTimeUpdate), r.addEventListener(A.a.TheatreChange, n.onTheatreChange), r.addEventListener(A.a.FullscreenChange, n.onFullScreenChange), r.addEventListener(A.a.ExternalFullscreenChange, n.onExternalFullScreenChange), r.addEventListener(A.a.ClipsModerationOpen, n.onClipsModerationOpen), r.addEventListener(A.a.TransitionToCollectionVOD, n.onTransitionToCollectionVod), r.addEventListener(A.a.TransitionToRecommendedVOD, n.onTransitionToRecommendedVod), r.addEventListener(A.a.OpenStream, n.onOpenStream), r.addEventListener(d.Pause, n.onPause), r.addEventListener(A.a.PersistenPlayerToggle, n.onPersistentPlayerToggled), r.addEventListener(d.LoadedMetadata, n.onMetadataLoaded), r.addEventListener(d.VolumeChange, n.onVolumeChange), r.addEventListener(A.a.PromptLoginModal, n.props.promptLogin), r.addEventListener(A.a.FocusPlayer, n.onFocusPlayer), r.addEventListener(A.a.FollowChannel, n.followChannel), r.addEventListener(A.a.UnfollowChannel, n.unfollowChannel), y.extensionService.registerPlayer(n.player), y.extensionService.setPlayerWindow(window), n.props.onInit && n.props.onInit(r), n.maybeAttachToWindow(n.props)
                        }, n.attachRef = function(e) {
                            return n.playerRef = e
                        }, n.onMetadataLoaded = function() {
                            var e = n.player && n.player.getSessionInfo();
                            e && (n.logger.debug("Got player session info from player instance", e), S.o.setVideoPlayerTrackingData({
                                broadcastID: e.broadcastId,
                                playSessionID: e.playSessionId
                            })), n.setState({
                                metadataLoaded: !0
                            })
                        }, n.onOpenStream = function() {
                            if (n.props.playerTypeOverride === w.e.Frontpage && n.player)
                                if (n.props.channelLogin) S.p.history.push("/" + n.props.channelLogin);
                                else if (n.props.vodID) {
                                var e = Math.floor(n.player.getCurrentTime());
                                S.p.history.push("/videos/" + n.props.vodID + "?t=" + Object(P.a)(e))
                            } else n.props.collectionID && S.p.history.push("/collections/" + n.props.collectionID)
                        }, n.onFocusPlayer = function() {
                            n.props.playerTypeOverride !== w.e.SquadStreamPrimary && n.props.playerTypeOverride !== w.e.SquadStreamSecondary || !n.player || n.props.onFocusPlayer && n.props.channelLogin && n.props.onFocusPlayer()
                        }, n.followChannel = function() {
                            n.player && n.props.followChannel && n.props.channelLogin && n.props.followChannel()
                        }, n.unfollowChannel = function() {
                            n.player && n.props.unfollowChannel && n.props.channelLogin && n.props.unfollowChannel()
                        }, n.onPlayerReady = function() {
                            n.player && (n.logger.debug("Ready"), n.props.latencyTracking.reportInteractive(), n.hasPlayed = !1, n.playerLoaded && n.props.latencyTracking.reportCustomEvent(n.playerLoaded), n.lastFollowingProp && n.player.setFollowing(n.lastFollowingProp), n.setState({
                                playerInitialized: !0
                            }, n.updatePlayerTrackingDataFromProps))
                        }, n.onPlayerPlay = function() {
                            n.logger.debug("onPlay"), n.reportPlayerBuffering(), n.lastPausedProp = !1, n.togglePause(!1)
                        }, n.companionAdBuffered = function(e) {
                            n.props.onCompanionAdBuffered && e && n.props.onCompanionAdBuffered(e)
                        }, n.onPlayerPlaying = function() {
                            n.logger.debug("onPlaying"), n.reportPlayerPlayed(), n.hasPlayed || n.onStreamStatusOnline(), n.hasPlayed = !0, n.lastPausedProp = !1, n.state.playerRefID !== n.props.activeVideoPlayerRefID && n.props.reportPlayerInstanceStarted && n.props.reportPlayerInstanceStarted(n.state.playerRefID), n.togglePause(!1)
                        }, n.onPause = function() {
                            n.logger.debug("onPause"), n.lastPausedProp = !0, n.togglePause(!0)
                        }, n.togglePause = function(e) {
                            n.logger.debug("togglePause", e), n.state.playerPaused !== e && (n.setState({
                                playerPaused: e
                            }), n.props.onPauseToggled && n.props.onPauseToggled(e))
                        }, n.onVolumeChange = function(e) {
                            if (n.logger.debug("Volume Change"), n.player) {
                                var t = e.muted;
                                n.lastMutedProp = t, n.toggleMute(t)
                            }
                        }, n.toggleMute = function(e) {
                            n.setState({
                                playerMuted: e
                            }), n.props.onMuteToggled && n.props.onMuteToggled(e)
                        }, n.onStreamStatusOnline = function() {
                            n.props.onStreamStatusChange && n.props.onStreamStatusChange(A.a.Online)
                        }, n.onStreamStatusOffline = function() {
                            n.props.onStreamStatusChange && n.props.onStreamStatusChange(A.a.Offline)
                        }, n.onTheatreChange = function(e) {
                            e ? (n.logger.debug("Theatre Entered"), n.props.enableTheatreMode && !n.props.theatreModeEnabled && n.props.enableTheatreMode()) : (n.logger.debug("Theatre Exited"), n.props.disableTheatreMode && n.props.theatreModeEnabled && n.props.disableTheatreMode())
                        }, n.onFullScreenChange = function() {
                            n.player && (n.logger.debug("Fullscreen change", n.player.fullscreen), n.player.fullscreen !== n.state.isFullScreen && n.setState({
                                isFullScreen: n.player.fullscreen
                            }))
                        }, n.onExternalFullScreenChange = function() {
                            n.player && (n.logger.debug("External Fullscreen change", n.player.fullscreen), n.player.fullscreen !== n.state.isFullScreen && (n.player.fullscreen ? n.enterFullscreen() : n.exitFullscreen()))
                        }, n.onClipsModerationOpen = function(e) {
                            n.player && (n.logger.debug("Clips Moderation Open", e), n.props.onClipsModerationOpen && n.props.onClipsModerationOpen(e))
                        }, n.onTwilightFullscreenChange = function() {
                            var e = n.props.fullscreen.element(),
                                t = !!e && !!n.playerRef && e.contains(n.playerRef);
                            n.state.isFullScreen && !t && n.exitFullscreen()
                        }, n.onSeek = function() {
                            n.props.onSeek && n.player && n.props.onSeek(n.player.getCurrentTime())
                        }, n.onSeeking = function() {
                            n.props.onSeeking && n.player && n.props.onSeeking(n.player.getCurrentTime())
                        }, n.onTimeUpdate = function() {
                            n.props.onVideoTimeChange && n.player && n.props.onVideoTimeChange(n.player.getCurrentTime())
                        }, n.onHistoryChange = function() {
                            n.state.isFullScreen && n.exitFullscreen()
                        }, n.onTransitionToCollectionVod = function(e) {
                            if (n.props.onNavigationRequest) {
                                var t = {};
                                e.vodId && (t.videoID = Object(_.a)(e.vodId)), e.collectionId && (t.collectionID = e.collectionId), n.props.onNavigationRequest(t)
                            }
                        }, n.onTransitionToRecommendedVod = function(e) {
                            if (n.props.onNavigationRequest) {
                                var t = {};
                                e.vodId && (t.videoID = Object(_.a)(e.vodId)), n.props.onNavigationRequest(t)
                            }
                        }, n.onPersistentPlayerToggled = function() {
                            n.props.togglePersistentPlayer && n.props.togglePersistentPlayer()
                        }, n.updatePlayerTrackingData = function(e) {
                            n.state.playerInitialized && n.player && n.player.setTrackingProperties(function(e, t) {
                                var n = S.o.getLastPageview(),
                                    i = {
                                        host_channel: e.hostChannel,
                                        collapse_right: !e.rightColumnExpanded,
                                        collapse_left: !e.sideNavExpanded,
                                        squad_stream_id: e.squadStreamID,
                                        squad_stream_session_id: e.squadStreamSessionID,
                                        squad_stream_presentation_id: e.squadStreamPresentationID
                                    },
                                    r = e.history.location && e.history.location.state || {},
                                    a = {
                                        item_tracking_id: r.item_tracking_id,
                                        item_position: r.item_position,
                                        row_position: r.row_position,
                                        row_name: r.row_name,
                                        search_query_id: r.search_query_id,
                                        search_session_id: r.search_session_id,
                                        tag_filter_set: r.tag_filter_set,
                                        tag_set: r.tag_set,
                                        tag_streamer_set: r.tag_streamer_set
                                    };
                                return t && (n ? t.debug("Tracking data updated.", {
                                    pageviewProperties: n,
                                    updates: i,
                                    locationStateTrackingProps: a
                                }) : t.debug("pageviewProperties not found; only hosting status updated", {
                                    pageviewProperties: n,
                                    updates: i,
                                    locationStateTrackingProps: a
                                })), o.__assign({}, a, n, i)
                            }(e, S.k))
                        }, n.updatePlayerTrackingDataFromProps = function() {
                            n.updatePlayerTrackingData(n.props)
                        }, n.updatePlayerType = function(e) {
                            var t = e || x.player;
                            n.player && n.playerType !== t && (n.player.setPlayerType(t), n.playerType = t)
                        }, n.maybeRecordClip = function() {
                            n.player && n.state.playerInitialized && !Object(I.a)() && n.player.recordClip()
                        }, n.createPlayerGDPROptions = function(e) {
                            return {
                                amazon: !e.gdprBlockAmazonContent,
                                comscore: !e.gdprBlockComScoreContent,
                                google: !e.gdprBlockGoogleContent,
                                nielsen: !e.gdprBlockNielsenContent
                            }
                        }, n.updatePlayerGDPRConsent = function(e) {
                            if (n.player) try {
                                var t = n.createPlayerGDPROptions(e);
                                t.amazon !== n.lastGDPR.amazon && n.player.setAmazonGDPRConsent(t.amazon), t.comscore !== n.lastGDPR.comscore && n.player.setComscoreGDPRConsent(t.comscore), t.google !== n.lastGDPR.google && n.player.setGoogleGDPRConsent(t.google), t.nielsen !== n.lastGDPR.nielsen && n.player.setNielsenGDPRConsent(t.nielsen), n.lastGDPR = t
                            } catch (e) {
                                var i = {
                                        playerHasGDPR: "function" == typeof n.player.setAmazonGDPRConsent,
                                        userAgent: navigator.userAgent
                                    },
                                    r = "Failed to set player GDPR consent. Data: " + JSON.stringify(i);
                                n.logger.error(new Error("Failed to set player GDPR consent"), r, {
                                    data: i
                                })
                            }
                        }, n.playerCreated = n.registerCreatedEvent(), n.playerLoaded = n.registerLoadedEvent(), n.state = {
                            playerInitialized: !1,
                            isFullScreen: !1,
                            playerPaused: !!t.paused,
                            playerMuted: t.muted,
                            playerRefID: Object(k.a)(),
                            metadataLoaded: !1
                        }, n.playerType = t.playerTypeOverride || x.player, n.lastSetChannel = t.channelLogin, n.lastPausedProp = t.paused, n.lastMutedProp = t.muted, n.lastFollowingProp = t.viewerIsFollowing, n.lastGDPR = n.createPlayerGDPROptions(t), t.fullscreen.addChangeListener(n.onTwilightFullscreenChange), t.instanceRef && t.instanceRef(n), n
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.playerCreated && this.props.latencyTracking.reportCustomEvent(this.playerCreated), this.bindHotKeys(), this.historyUnlistener = this.props.history.listen(this.onHistoryChange), Object(M.b)(), Object(M.a)(this.initializePlayer), S.o.eventEmitter.addListener(C.SpadeEventType.Pageview, this.updatePlayerTrackingDataFromProps)
                    }, t.prototype.componentWillUpdate = function(e, t) {
                        if (t.playerInitialized) {
                            if (this.updatePlayerTrackingData(e), this.updatePlayerType(e.playerTypeOverride), this.player && t.isFullScreen !== this.player.fullscreen && this.player.setFullscreen(t.isFullScreen), this.player) {
                                var n = this.props.editing || {},
                                    i = e.editing || {},
                                    r = n.startOffset,
                                    a = n.endOffset,
                                    o = n.videoUrl,
                                    s = n.isPostEdit;
                                o !== i.videoUrl && i.slug && this.player.setEditClipStream({
                                    videoUrl: i.videoUrl,
                                    slug: i.slug
                                }), s !== i.isPostEdit && this.player.updateClipsEditing({
                                    isPostEdit: i.isPostEdit
                                }), (!(this.hasInitializedOffsets || !i.startOffset || !i.endOffset) || r !== i.startOffset || a !== i.endOffset) && (this.player.updateEditingOffsets([{
                                    startOffset: i.startOffset,
                                    endOffset: i.endOffset
                                }]), this.hasInitializedOffsets || (this.hasInitializedOffsets = !0))
                            }
                            this.player && e.clipSlug && this.props.clipSlug !== e.clipSlug && this.player.setClip(e.clipSlug), this.player && e.theatreModeEnabled !== this.player.getTheatre() && this.player.setTheatre(e.theatreModeEnabled), this.player && e.miniModeEnabled !== this.props.miniModeEnabled && this.player.setMiniPlayerMode(!!e.miniModeEnabled), this.player && t.playerPaused !== this.lastPausedProp && (t.playerPaused ? this.player.pause() : t.playerPaused || this.player.play(), this.lastPausedProp = t.playerPaused), this.player && t.playerMuted !== this.lastMutedProp && (this.player.setMuted(!!t.playerMuted), this.lastMutedProp = !!t.playerMuted), this.player && e.viewerIsFollowing !== this.lastFollowingProp && (this.player.setFollowing(!!e.viewerIsFollowing), this.lastFollowingProp = !!e.viewerIsFollowing), this.updatePlayerGDPRConsent(e);
                            var l = e.channelLogin !== this.lastSetChannel;
                            if (this.player && e.channelLogin && (l || Object(L.a)(this.props, e))) return this.player.pause(), this.resetLatencyTracking(!!e.paused), this.player.setChannel(e.channelLogin), this.lastSetChannel = e.channelLogin, void S.o.setVideoPlayerTrackingData({
                                vodID: void 0
                            });
                            var c = e.collectionID && this.props.collectionID !== e.collectionID,
                                d = e.vodID && this.props.vodID !== e.vodID;
                            if (c || d) {
                                var u = e.vodID ? Object(N.p)(e.vodID) : "";
                                if ("" !== u && S.o.setVideoPlayerTrackingData({
                                        vodID: e.vodID
                                    }), !this.player) return;
                                return this.player.pause(), this.resetLatencyTracking(!!e.paused), void(c || e.collectionID && d ? this.player.setCollection(e.collectionID, u, e.nextVideoOffset) : this.player.setVideo(u, e.nextVideoOffset))
                            }
                            void 0 !== e.nextVideoOffset && e.nextVideoOffset >= 0 && this.props.nextVideoOffset !== e.nextVideoOffset && this.player && this.player.setCurrentTime(e.nextVideoOffset), this.player && e.videoMarkers && this.lastVideoMarkersProp !== e.videoMarkers && (this.lastVideoMarkersProp = e.videoMarkers, this.player.setVideoMarkers(e.videoMarkers));
                            var p = e.playerQualityOverride;
                            this.player && t.metadataLoaded && p && p !== this.lastPlayerQualityOverride && (this.player.setQuality(p), this.lastPlayerQualityOverride = p);
                            var m = e.playerMaxAutoOverride;
                            this.player && t.metadataLoaded && m && m.group !== this.lastPlayerMaxAutoOverride && (this.player.setAutoMaxVideoSize(m.width, m.height), this.lastPlayerMaxAutoOverride = m.group)
                        }
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        if (void 0 !== e.paused && this.props.paused !== e.paused) this.togglePause(e.paused);
                        else {
                            var t = this.props.activeVideoPlayerRefID,
                                n = e.activeVideoPlayerRefID;
                            this.props.allowSimultaneousPlaying || t === n || (n === this.state.playerRefID ? this.togglePause(!1) : n !== this.state.playerRefID && this.togglePause(!0))
                        }
                        void 0 !== e.muted && this.props.muted !== e.muted && this.toggleMute(e.muted)
                    }, t.prototype.render = function() {
                        var e = b("video-player", {
                                "video-player--theatre": this.props.theatreModeEnabled,
                                "video-player--theatre-whispers": this.props.theatreModeEnabled && this.props.isWhispersBottomBarVisible && !this.state.isFullScreen,
                                "video-player--logged-in": this.props.isLoggedIn,
                                "video-player--fullscreen": this.state.isFullScreen
                            }),
                            t = b("video-player__container", {
                                "video-player__container--clips": w.a.includes(this.playerType)
                            });
                        return l.createElement("div", {
                            className: b(e),
                            "data-test-selector": "video-player"
                        }, l.createElement("div", {
                            className: t,
                            ref: this.attachRef
                        }))
                    }, t.prototype.componentWillUnmount = function() {
                        this.state.playerRefID === this.props.activeVideoPlayerRefID && this.props.reportPlayerInstanceStarted && this.props.reportPlayerInstanceStarted(void 0), this.unbindHotKeys(), this.historyUnlistener && this.historyUnlistener(), this.maybeDetachFromWindow(), this.state.isFullScreen && this.exitFullscreen(), this.props.fullscreen.removeChangeListener(this.onTwilightFullscreenChange), this.props.onDestroy && this.props.onDestroy(), S.o.eventEmitter.removeListener(C.SpadeEventType.Pageview, this.updatePlayerTrackingDataFromProps), this.player && (this.player.removeEventListener(A.a.PlayerReady, this.onPlayerReady), this.player.removeEventListener(A.a.CompanionAdBuffered, this.companionAdBuffered), this.player.removeEventListener(A.a.Online, this.onStreamStatusOnline), this.player.removeEventListener(A.a.Offline, this.onStreamStatusOffline), this.player.removeEventListener(d.Ended, this.onStreamStatusOffline), this.player.removeEventListener(d.Play, this.onPlayerPlay), this.player.removeEventListener(d.Playing, this.onPlayerPlaying), this.player.removeEventListener(A.a.TheatreChange, this.onTheatreChange), this.player.removeEventListener(A.a.TransitionToCollectionVOD, this.onTransitionToCollectionVod), this.player.removeEventListener(A.a.FullscreenChange, this.onFullScreenChange), this.player.removeEventListener(A.a.ExternalFullscreenChange, this.onExternalFullScreenChange), this.player.removeEventListener(d.Seeking, this.onSeeking), this.player.removeEventListener(d.Seeked, this.onSeek), this.player.removeEventListener(d.TimeUpdate, this.onTimeUpdate), this.player.removeEventListener(A.a.OpenStream, this.onOpenStream), this.player.removeEventListener(d.Pause, this.onPause), this.player.removeEventListener(A.a.PersistenPlayerToggle, this.onPersistentPlayerToggled), this.player.removeEventListener(d.LoadedMetadata, this.onMetadataLoaded), this.player.removeEventListener(d.VolumeChange, this.onVolumeChange), this.player.removeEventListener(A.a.PromptLoginModal, this.props.promptLogin), this.player.removeEventListener(A.a.FocusPlayer, this.onFocusPlayer), this.player.removeEventListener(A.a.FollowChannel, this.followChannel), this.player.removeEventListener(A.a.UnfollowChannel, this.unfollowChannel), y.extensionService.unregisterPlayer(), this.player.destroy()), S.o.setVideoPlayerTrackingData({
                            vodID: void 0
                        })
                    }, t.prototype.trackMiniPlayerAction = function(e, t) {
                        this.player && this.state.playerInitialized && this.player.trackMiniPlayerAction(e, t)
                    }, t.prototype.resetLatencyTracking = function(e) {
                        this.logger.debug("Resetting latency tracking."), this.hasBuffered = !1, this.hasPlayed = !1, this.hasPaused = !1, this.props.latencyTracking.resetCustomEvents(R.a.Player), this.playerBuffering = this.registerBufferingEvent(e), this.playerPlayed = this.registerPlayedEvent(e), this.playerCreated = void 0, this.playerLoaded = void 0
                    }, t.prototype.registerBufferingEvent = function(e) {
                        return this.props.latencyTracking.registerCustomEvent({
                            benchmark: 1e3,
                            group: R.a.Player,
                            key: R.b.PlayerBuffering,
                            label: R.c.Buffering,
                            doNotTrack: e
                        })
                    }, t.prototype.registerCreatedEvent = function() {
                        return this.props.latencyTracking.registerCustomEvent({
                            benchmark: 1e3,
                            group: R.a.Player,
                            key: R.b.PlayerCreated,
                            label: R.c.Created
                        })
                    }, t.prototype.registerLoadedEvent = function() {
                        return this.props.latencyTracking.registerCustomEvent({
                            benchmark: 2500,
                            group: R.a.Player,
                            key: R.b.PlayerLoaded,
                            label: R.c.Init
                        })
                    }, t.prototype.registerPlayedEvent = function(e) {
                        return this.props.latencyTracking.registerCustomEvent({
                            benchmark: 4e3,
                            group: R.a.Player,
                            key: R.b.PlayerPlayed,
                            label: R.c.FirstFrame,
                            doNotTrack: e
                        })
                    }, t.prototype.shouldSuppressPlaybackTracking = function() {
                        if (this.hasPaused) return !0;
                        var e = this.player;
                        return !e || !e.autoplay
                    }, t.prototype.reportPlayerBuffering = function() {
                        if (!this.hasBuffered && (this.hasBuffered = !0, this.playerBuffering)) {
                            if (this.shouldSuppressPlaybackTracking() && !this.playerBuffering.doNotTrack) return void this.logger.warn("Player was paused or set not to autoplay. Buffering latency tracking data will be suppressed.");
                            this.props.latencyTracking.reportCustomEvent(this.playerBuffering)
                        }
                    }, t.prototype.reportPlayerPlayed = function() {
                        if (!this.hasPlayed && this.playerPlayed) {
                            if (this.shouldSuppressPlaybackTracking() && !this.playerPlayed.doNotTrack) return void this.logger.warn("Player was paused or set not to autoplay. First frame latency tracking data will be suppressed.");
                            this.props.latencyTracking.reportCustomEvent(this.playerPlayed)
                        }
                    }, t.prototype.enterFullscreen = function() {
                        this.setState({
                            isFullScreen: !0
                        }), this.props.fullscreenRef ? this.props.fullscreen.enable(this.props.fullscreenRef) : this.props.fullscreen.enable(this.playerRef), this.props.onFullscreenChange && this.props.onFullscreenChange(!0)
                    }, t.prototype.exitFullscreen = function() {
                        this.state.isFullScreen && (this.setState({
                            isFullScreen: !1
                        }), this.props.fullscreen.disable(), this.props.onFullscreenChange && this.props.onFullscreenChange(!1))
                    }, t.prototype.maybeAttachToWindow = function(e) {
                        O.parse(window.location.search).attachPlayer && e.attachToWindow && this.player && (window.player = this.player)
                    }, t.prototype.maybeDetachFromWindow = function() {
                        window.player = void 0
                    }, t.prototype.bindHotKeys = function() {
                        T.bind("alt+x", this.maybeRecordClip)
                    }, t.prototype.unbindHotKeys = function() {
                        T.unbind("alt+x")
                    }, t.defaultProps = {
                        paused: !1
                    }, t
                }(l.Component),
                V = Object(D.b)("VideoPlayer")(B);
            var j = Object(a.compose)(Object(i.connect)(function(e) {
                return {
                    isWhispersBottomBarVisible: Object(h.b)(e),
                    theatreModeEnabled: e.ui.theatreModeEnabled,
                    rightColumnExpanded: e.ui.rightColumnExpanded,
                    sideNavExpanded: e.ui.sideNavExpanded,
                    isLoggedIn: Object(f.f)(e),
                    authToken: Object(f.a)(e),
                    activeVideoPlayerRefID: Object(E.a)(e),
                    gdprBlockAmazonContent: Object(g.g)(e, g.c.Amazon),
                    gdprBlockComScoreContent: Object(g.g)(e, g.c.ComScore),
                    gdprBlockGoogleContent: Object(g.g)(e, g.c.Google),
                    gdprBlockNielsenContent: Object(g.g)(e, g.c.Nielsen)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    enableTheatreMode: m.F,
                    disableTheatreMode: m.C,
                    togglePersistentPlayer: m.N,
                    reportPlayerInstanceStarted: v.b,
                    promptLogin: function() {
                        return Object(p.e)(u.a.ReportHoster)
                    }
                }, e)
            }), function(e) {
                return function(t) {
                    function n() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.addChangeListener = function(e) {
                            c.push(e)
                        }, e.removeChangeListener = function(e) {
                            c = c.filter(function(t) {
                                return t !== e
                            })
                        }, e
                    }
                    return o.__extends(n, t), n.prototype.render = function() {
                        var t = {
                            fullscreen: {
                                addChangeListener: this.addChangeListener,
                                removeChangeListener: this.removeChangeListener,
                                supported: this.supported,
                                element: this.element,
                                enable: this.enable,
                                disable: this.disable
                            }
                        };
                        return l.createElement(e, o.__assign({}, t, this.props))
                    }, n.prototype.supported = function() {
                        return !!s.enabled
                    }, n.prototype.element = function() {
                        return s.element
                    }, n.prototype.enable = function(e) {
                        s.request(e)
                    }, n.prototype.disable = function() {
                        s.exit()
                    }, n
                }(l.Component)
            }, r.a)(V);

            function W(e, t, n) {
                if (e.collectionID || !e.videoID)
                    if (e.collectionID && e.videoID) {
                        if (n && n.currentVideoID && n.currentCollectionID && n.currentVideoID === e.videoID && n.currentCollectionID === e.collectionID) return;
                        t.push("/videos/" + e.videoID + "?collection=" + e.collectionID)
                    } else !e.collectionID || e.videoID ? S.k.withCategory("video-player").error(new Error("No collection or video specified from the emitted player transition event."), "No collection or video specified from the emitted player transition event.") : t.push("/collections/" + e.collectionID);
                else t.push("/videos/" + e.videoID)
            }
            n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
                return j
            }), n.d(t, "c", function() {
                return W
            }), n.d(t, "a", function() {
                return w.e
            })
        },
        eJ65: function(e, t, n) {
            "use strict";
            var i = n("bq0i");
            n.d(t, "a", function() {
                return i.a
            })
        },
        eLB1: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.Loading = "loading", e.Error = "error", e.Skip = "skip", e.BelowMinimumAge = "below-min-age", e.ConsentRequired = "consent-required", e.ConsentSaved = "consent-saved"
                }(i || (i = {}))
        },
        "f0/i": function(e, t, n) {},
        gIsd: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportReasons"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "content"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ReportContentType"
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
                                value: "reportReasons"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "content"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "content"
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
                                        value: "text"
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
                    end: 114
                }
            };
            n.loc.source = {
                body: "query ReportUserModal_ReportReasons($content: ReportContentType!) {\nreportReasons(content: $content) {\nid\ntext\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        gTu3: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.Default = 0] = "Default", e[e.Recipient = 1] = "Recipient", e[e.Sender = 2] = "Sender"
                }(i || (i = {}))
        },
        htqZ: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "LiveNotificationsToggle_ToggleNotifications"
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
                                                                value: "follower"
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
                                        }]
                                    }
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
                body: "mutation LiveNotificationsToggle_ToggleNotifications($input: FollowUserInput!) {\nfollowUser(input: $input) {\nfollow {\nuser {\nid\nself {\nfollower {\ndisableNotifications\n}\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        hudZ: function(e, t, n) {},
        i0io: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsRawMedia"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "rawMedia"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "defaultClipInitialOffset"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "duration"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
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
                                                value: "videoURL"
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
                    end: 123
                }
            };
            n.loc.source = {
                body: "query ClipsRawMedia($slug: ID!) {\nclip(slug: $slug) {\nid\nrawMedia {\ndefaultClipInitialOffset\nduration\nstatus\nvideoURL\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        i46O: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "LiveNotificationsToggle_User"
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
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "followButtonFragment"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 164
                }
            };
            i.loc.source = {
                body: '#import "twilight/common/queries/follow-button-fragment.gql"\nquery LiveNotificationsToggle_User($login: String!) {\nuser(login: $login) {\n...followButtonFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("V94A").definitions)), e.exports = i
        },
        i6WW: function(e, t, n) {
            "use strict";
            var i = n("/7QA"),
                r = n("RcPG"),
                a = new RegExp("(?:^|\\s)(?:https?://)?clips.twitch.tv/(\\w+)(?:/)?(\\w+)?(?:/edit)?(?:$|\\s)?"),
                o = new RegExp("(?:^|\\s)(?:https?:\\/\\/)?(?:www\\.)?twitch\\.tv\\/(\\w+)\\/clip\\/(\\w+)(?:$|\\s)?");
            var s = new RegExp("(?:^|\\s)(?:https?://)?(?:(?:www|go).)?twitch.tv/videos/(\\d+)(?:$|\\s)?");
            n.d(t, "a", function() {
                return c
            });
            var l = /^(?:(https?:\/\/)?((?:[\w#%\-+=:~]+\.)+[a-z]{2,8}(?:\/[\w./#%&()\-+=:?~]*)?))$/;

            function c(e, t) {
                var n = e.match(l);
                if (!n) return null;
                if (t.blockLinks) return {
                    type: r.a.Text,
                    content: " <" + Object(i.d)("deleted link", "CreateMessageData") + "> "
                };
                var c = n[1],
                    d = n[2],
                    u = "" + (c || "https://") + d;
                if (t.parseClips && function(e) {
                        void 0 === e && (e = "");
                        var t = a.test(e) && !e.includes("clips.twitch.tv/2017/"),
                            n = o.test(e);
                        return t || n
                    }(u)) {
                    var p = function(e) {
                        void 0 === e && (e = "");
                        var t = e.match(a);
                        if (t && t.length > 0 && void 0 !== t.index) return t[1];
                        var n = e.match(o);
                        return n && n.length > 0 && void 0 !== n.index ? n[2] : ""
                    }(u);
                    return {
                        type: r.a.ClipLink,
                        content: {
                            slug: p,
                            url: u,
                            displayText: e
                        }
                    }
                }
                if (t.parseVods && function(e) {
                        return void 0 === e && (e = ""), s.test(e)
                    }(u)) {
                    var m = function(e) {
                        void 0 === e && (e = "");
                        var t = e.match(s);
                        return null === t ? "" : t && t.length > 0 && void 0 !== t.index ? t[1] : ""
                    }(u);
                    return {
                        type: r.a.VideoLink,
                        content: {
                            id: m,
                            url: u,
                            displayText: e
                        }
                    }
                }
                return {
                    type: r.a.Link,
                    content: {
                        displayText: e,
                        url: u
                    }
                }
            }
        },
        iS14: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i = n("mrSG"),
                r = n("yR8l"),
                a = n("8jSG"),
                o = n("cMjZ"),
                s = n("zixI");

            function l() {
                var e = this;
                return Object(r.a)(s, {
                    props: function(t) {
                        return {
                            unblockUserMutation: function(n, r) {
                                return i.__awaiter(e, void 0, void 0, function() {
                                    return i.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: {
                                                            targetUserID: n
                                                        }
                                                    },
                                                    optimisticResponse: {
                                                        unblockUser: {
                                                            __typename: "UnblockUserPayload",
                                                            targetUser: {
                                                                __typename: "User",
                                                                id: n
                                                            }
                                                        }
                                                    },
                                                    update: function(e) {
                                                        var t = e.readFragment({
                                                            id: Object(o.a)(r),
                                                            fragment: a
                                                        });
                                                        t && (t.blockedUsers = t.blockedUsers.filter(function(e) {
                                                            return null !== e && e.id !== n
                                                        }), e.writeFragment({
                                                            id: Object(o.a)(r),
                                                            fragment: a,
                                                            data: t
                                                        }))
                                                    }
                                                })] : [3, 2];
                                            case 1:
                                                return e.sent(), [3, 3];
                                            case 2:
                                                throw new Error("unblockUserMutation is not ready");
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })
            }
        },
        ibn3: function(e, t, n) {},
        "ig/l": function(e, t, n) {
            "use strict";
            var i, r, a = n("6FuP"),
                o = n("mrSG"),
                s = n("TSYQ"),
                l = n("q1tI"),
                c = n("uy8m"),
                d = n("mzKw"),
                u = n("Ue10");
            n("hudZ");
            ! function(e) {
                e.LeftHandle = "left-handle", e.Overlay = "overlay", e.RightHandle = "right-handle", e.SelectedSection = "section", e.Slider = "slider"
            }(i || (i = {})),
            function(e) {
                e.LeftHandle = "leftHandle", e.Slider = "slider", e.RightHandle = "rightHandle"
            }(r || (r = {}));
            var p = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.leftHandleRef = null, n.containerRef = null, n.rightHandleRef = null, n.sliderHandleRef = null, n.getHandleHandlers = function(e) {
                        switch (e) {
                            case r.LeftHandle:
                                return {
                                    handleRef: n.leftHandleRef,
                                    mouseMoveHandler: n.onLeftMouseMove,
                                    mouseUpHandler: n.onLeftMouseUp
                                };
                            case r.RightHandle:
                                return {
                                    handleRef: n.rightHandleRef,
                                    mouseMoveHandler: n.onRightMouseMove,
                                    mouseUpHandler: n.onRightMouseUp
                                };
                            case r.Slider:
                                return {
                                    handleRef: n.sliderHandleRef,
                                    mouseMoveHandler: n.onSliderMouseMove,
                                    mouseUpHandler: n.onSliderMouseUp
                                };
                            default:
                                return e
                        }
                    }, n.addHandleListeners = function(e) {
                        var t = n.getHandleHandlers(e),
                            i = t.handleRef,
                            r = t.mouseMoveHandler,
                            a = t.mouseUpHandler;
                        i && (n.preventUserSelect(), i.ownerDocument.addEventListener("mousemove", r), i.ownerDocument.addEventListener("mouseup", a))
                    }, n.removeHandleListeners = function(e) {
                        var t = n.getHandleHandlers(e),
                            i = t.handleRef,
                            r = t.mouseMoveHandler,
                            a = t.mouseUpHandler;
                        i && (n.allowUserSelect(), i.ownerDocument.removeEventListener("mousemove", r), i.ownerDocument.removeEventListener("mouseup", a))
                    }, n.leftHandleRefHandler = function(e) {
                        n.leftHandleRef = e
                    }, n.onLeftMouseDown = function(e) {
                        if (n.shouldHandleClick(e.button)) {
                            var t = e.clientX;
                            n.setState(function(e) {
                                return {
                                    previousPosition: t,
                                    previousBaseValue: e.startOffset
                                }
                            }, function() {
                                n.props.onLeftDragStart && n.props.onLeftDragStart({
                                    startOffset: n.state.startOffset,
                                    endOffset: n.state.endOffset
                                }), n.addHandleListeners(r.LeftHandle)
                            })
                        }
                    }, n.onLeftMouseUp = function() {
                        n.setState({
                            previousPosition: null,
                            previousBaseValue: null
                        }, function() {
                            n.props.onLeftDragEnd && n.props.onLeftDragEnd({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            }), n.removeHandleListeners(r.LeftHandle)
                        })
                    }, n.onLeftMouseMove = function(e) {
                        var t = e.clientX,
                            i = void 0 === n.props.minLength ? 0 : n.props.minLength,
                            r = void 0 === n.props.maxLength ? n.props.maxOffset - n.props.minOffset : n.props.maxLength;
                        n.setState(function(e, a) {
                            return {
                                startOffset: n.calculateOffset(t, {
                                    startBoundary: Math.max(a.minOffset, e.endOffset - r),
                                    endBoundary: Math.min(e.endOffset, e.endOffset - i),
                                    currentValue: e.startOffset
                                }),
                                endOffset: e.endOffset
                            }
                        }, function() {
                            n.props.onLeftDrag && n.props.onLeftDrag({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            })
                        })
                    }, n.rightHandleRefHandler = function(e) {
                        n.rightHandleRef = e
                    }, n.onRightMouseDown = function(e) {
                        if (n.shouldHandleClick(e.button)) {
                            var t = e.clientX;
                            n.setState(function(e) {
                                return {
                                    previousPosition: t,
                                    previousBaseValue: e.endOffset
                                }
                            }, function() {
                                n.props.onRightDragStart && n.props.onRightDragStart({
                                    startOffset: n.state.startOffset,
                                    endOffset: n.state.endOffset
                                }), n.addHandleListeners(r.RightHandle)
                            })
                        }
                    }, n.onRightMouseUp = function() {
                        n.setState({
                            previousPosition: null,
                            previousBaseValue: null
                        }, function() {
                            n.props.onRightDragEnd && n.props.onRightDragEnd({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            }), n.removeHandleListeners(r.RightHandle)
                        })
                    }, n.onRightMouseMove = function(e) {
                        var t = e.clientX,
                            i = void 0 === n.props.minLength ? 0 : n.props.minLength,
                            r = void 0 === n.props.maxLength ? n.props.maxOffset - n.props.minOffset : n.props.maxLength;
                        n.setState(function(e, a) {
                            return {
                                startOffset: e.startOffset,
                                endOffset: n.calculateOffset(t, {
                                    startBoundary: Math.max(a.minOffset, e.startOffset + i),
                                    endBoundary: Math.min(a.maxOffset, e.startOffset + r),
                                    currentValue: e.endOffset
                                })
                            }
                        }, function() {
                            n.props.onRightDrag && n.props.onRightDrag({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            })
                        })
                    }, n.sliderHandleRefHandler = function(e) {
                        n.sliderHandleRef = e
                    }, n.onSliderMouseDown = function(e) {
                        if (n.shouldHandleClick(e.button)) {
                            var t = e.clientX;
                            n.setState(function(e) {
                                return {
                                    previousPosition: t,
                                    previousBaseValue: e.startOffset
                                }
                            }, function() {
                                n.props.onSliderDragStart && n.props.onSliderDragStart({
                                    startOffset: n.state.startOffset,
                                    endOffset: n.state.endOffset
                                }), n.addHandleListeners(r.Slider)
                            })
                        }
                    }, n.onSliderMouseUp = function() {
                        n.setState({
                            previousPosition: null,
                            previousBaseValue: null
                        }, function() {
                            n.props.onSliderDragEnd && n.props.onSliderDragEnd({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            }), n.removeHandleListeners(r.Slider)
                        })
                    }, n.onSliderMouseMove = function(e) {
                        var t = e.clientX;
                        n.setState(function(e, i) {
                            var r = e.endOffset - e.startOffset,
                                a = n.calculateOffset(t, {
                                    startBoundary: i.minOffset,
                                    endBoundary: i.maxOffset - r,
                                    currentValue: e.startOffset
                                });
                            return {
                                startOffset: a,
                                endOffset: a + r
                            }
                        }, function() {
                            n.props.onSliderDrag && n.props.onSliderDrag({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            })
                        })
                    }, n.calculateOffset = function(e, t) {
                        if (null === n.state.previousPosition || null === n.state.previousBaseValue) return t.currentValue;
                        var i = n.convertPixelsToOffsetUnits(e - n.state.previousPosition),
                            r = n.state.previousBaseValue + i;
                        return r < t.startBoundary ? t.startBoundary : r > t.endBoundary ? t.endBoundary : r
                    }, n.convertPixelsToOffsetUnits = function(e) {
                        return n.containerRef ? 0 === n.containerRef.clientWidth ? 0 : e * ((n.props.maxOffset - n.props.minOffset) / n.containerRef.clientWidth) : 0
                    }, n.addFocus = function() {
                        n.setState({
                            showFocus: !0
                        })
                    }, n.removeFocus = function() {
                        n.setState({
                            showFocus: !1
                        })
                    }, n.preventUserSelect = function() {
                        document.body.style.userSelect = "none"
                    }, n.allowUserSelect = function() {
                        document.body.style.userSelect = "auto"
                    }, n.handleContainerRef = function(e) {
                        n.containerRef = e
                    }, n.state = {
                        startOffset: t.startOffset,
                        endOffset: t.endOffset,
                        previousBaseValue: null,
                        previousPosition: null,
                        showFocus: !1
                    }, n
                }
                return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.startOffset === this.state.startOffset && e.endOffset === this.state.endOffset || this.setState({
                        startOffset: e.startOffset,
                        endOffset: e.endOffset
                    })
                }, t.prototype.render = function() {
                    var e = function(e) {
                            var t = e.maxOffset - e.minOffset,
                                n = (e.endOffset - e.startOffset) / t * 100,
                                i = e.startOffset / t * 100;
                            return {
                                width: "calc(" + n + "% + " + 2 * e.handleSize + "px)",
                                marginLeft: "calc(" + i + "% - " + e.handleSize + "px)"
                            }
                        }({
                            handleSize: this.props.handleSize ? this.props.handleSize : d.c.Small,
                            minOffset: this.props.minOffset,
                            maxOffset: this.props.maxOffset,
                            startOffset: this.state.startOffset,
                            endOffset: this.state.endOffset
                        }),
                        t = s("draggable-slider__wrapper", {
                            "draggable-slider__wrapper--transition": this.props.showTransition
                        }),
                        n = s("draggable-slider__content", {
                            "draggable-slider__content--blue": this.props.color === a.a.Blue,
                            "draggable-slider__content--orange": this.props.color === a.a.Orange,
                            "draggable-slider__content--focus": this.props.isSliderEnabled && this.state.showFocus
                        });
                    return l.createElement("div", {
                        ref: this.handleContainerRef
                    }, l.createElement(u.Pa, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement("div", {
                        className: t,
                        "data-test-selector": i.SelectedSection,
                        style: e
                    }, l.createElement(u.Xa, {
                        className: "draggable-slider__container",
                        position: u.fb.Relative,
                        display: u.X.Flex,
                        justifyContent: u.Wa.Center
                    }, l.createElement(u.Xa, {
                        position: u.fb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, l.createElement(u.Xa, {
                        position: u.fb.Relative,
                        attachTop: !0,
                        fullWidth: !0,
                        display: u.X.Flex,
                        justifyContent: u.Wa.Center
                    }, l.createElement(u.Xa, {
                        position: u.fb.Absolute,
                        attachBottom: !0,
                        margin: {
                            bottom: 1
                        },
                        zIndex: u.bc.Above
                    }, this.props.popover))), l.createElement(u.yb, {
                        className: n,
                        fullWidth: !0,
                        display: u.X.Flex,
                        justifyContent: u.Wa.Between
                    }, l.createElement(d.a, {
                        "data-test-selector": i.LeftHandle,
                        color: this.props.color,
                        handlePosition: d.b.Left,
                        onRef: this.leftHandleRefHandler,
                        onMouseDown: this.onLeftMouseDown,
                        size: this.props.handleSize
                    }), this.renderSliderContent(), l.createElement(d.a, {
                        "data-test-selector": i.RightHandle,
                        color: this.props.color,
                        handlePosition: d.b.Right,
                        onRef: this.rightHandleRefHandler,
                        onMouseDown: this.onRightMouseDown,
                        size: this.props.handleSize
                    }))))))
                }, t.prototype.renderSliderContent = function() {
                    var e = this.props.children;
                    this.props.isSliderEnabled && (e = l.createElement("div", {
                        onMouseDown: this.onSliderMouseDown,
                        onMouseEnter: this.addFocus,
                        onMouseLeave: this.removeFocus,
                        ref: this.sliderHandleRefHandler,
                        "data-test-selector": i.Slider
                    }, this.props.children));
                    var t = s("draggable-slider__overlay", {
                        "draggable-slider__overlay--sliding-enabled": this.props.isSliderEnabled,
                        "draggable-slider__overlay--blue": this.props.color === a.a.Blue,
                        "draggable-slider__overlay--orange": this.props.color === a.a.Orange
                    });
                    return l.createElement(u.Xa, {
                        className: t,
                        display: u.X.InlineBlock,
                        overflow: u.ab.Hidden,
                        "data-test-selector": i.Overlay,
                        fullWidth: !0
                    }, e)
                }, t.prototype.shouldHandleClick = function(e) {
                    return e === c.a.Left
                }, t
            }(l.Component);
            n.d(t, "c", function() {
                return a.a
            }), n.d(t, "a", function() {
                return p
            }), n.d(t, !1, function() {}), n.d(t, "b", function() {
                return d.c
            })
        },
        iyGE: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("yR8l"),
                a = 60,
                o = 60 * a,
                s = 24 * o,
                l = 7 * s,
                c = 4 * l;
            var d, u = n("4w0E");

            function p(e) {
                var t = this;
                return Object(r.a)(u, {
                    props: function(n) {
                        return {
                            banUserMutation: function(r, d) {
                                return void 0 === d && (d = null), i.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                if (t = e(n.ownProps).channelID, !n.mutate) return [3, 5];
                                                i.label = 1;
                                            case 1:
                                                return i.trys.push([1, 3, , 4]), [4, n.mutate({
                                                    variables: {
                                                        input: {
                                                            channelID: t,
                                                            bannedUserLogin: r,
                                                            expiresIn: d && function(e) {
                                                                if (!e) return "0s";
                                                                var t = e,
                                                                    n = "";
                                                                if (t > c) {
                                                                    var i = Math.floor(t / c);
                                                                    t -= i * c, n += i + "mo"
                                                                }
                                                                if (t > l) {
                                                                    var r = Math.floor(t / l);
                                                                    t -= r * l, n += r + "w"
                                                                }
                                                                if (t > s) {
                                                                    var d = Math.floor(t / s);
                                                                    t -= d * s, n += d + "d"
                                                                }
                                                                if (t > o) {
                                                                    var u = Math.floor(t / o);
                                                                    t -= u * o, n += u + "h"
                                                                }
                                                                if (t > a) {
                                                                    var p = Math.floor(t / a);
                                                                    t -= p * a, n += p + "m"
                                                                }
                                                                return t > 0 && (n += t + "s"), n
                                                            }(d)
                                                        }
                                                    }
                                                })];
                                            case 2:
                                                return [2, i.sent().data];
                                            case 3:
                                                throw i.sent(), new Error("Unable to ban user");
                                            case 4:
                                                return [3, 6];
                                            case 5:
                                                throw new Error("Ban user mutation is not ready");
                                            case 6:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })
            }
            n.d(t, "a", function() {
                    return d
                }), n.d(t, "b", function() {
                    return p
                }),
                function(e) {
                    e.Forbidden = "FORBIDDEN", e.TargetNotFound = "TARGET_NOT_FOUND", e.TargetIsSelf = "TARGET_IS_SELF", e.TargetIsAnonymous = "TARGET_IS_ANONYMOUS", e.TargetIsMod = "TARGET_IS_MOD", e.TargetIsBroadcaster = "TARGET_IS_BROADCASTER", e.TargetIsStaff = "TARGET_IS_STAFF", e.TargetIsAdmin = "TARGET_IS_ADMIN", e.TargetIsGlobalMod = "TARGET_IS_GLOBAL_MOD", e.TargetIsAlreadyBanned = "TARGET_ALREADY_BANNED", e.DurationInvalid = "DURATION_INVALID"
                }(d || (d = {}))
        },
        jeZI: function(e, t, n) {},
        jsEL: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("u5aL"),
                s = n("Ue10"),
                l = (n("wC0O"), {
                    TITLE: "clips-modal-title",
                    MAIN_BODY: "clips-modal-main-body",
                    SUCCESS_BODY: "clips-modal-success-body",
                    ERROR_BODY: "clips-modal-error-body",
                    SUBMIT_BUTTON: "clips-modal-submit-button",
                    CANCEL_BUTTON: "clips-modal-cancel-button"
                }),
                c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderSuccess = function() {
                            return t.props.successContent ? r.createElement(s.yb, {
                                "data-test-selector": l.SUCCESS_BODY,
                                padding: {
                                    x: 2,
                                    y: 1
                                },
                                margin: {
                                    bottom: 1
                                },
                                borderMarked: !0,
                                background: s.r.Alt,
                                fullWidth: !0
                            }, r.createElement(s.W, {
                                type: s.Ob.Strong
                            }, t.props.successContent)) : null
                        }, t.renderError = function() {
                            return t.props.errorContent ? r.createElement(s.yb, {
                                "data-test-selector": l.ERROR_BODY,
                                padding: {
                                    x: 1,
                                    y: .5
                                },
                                margin: {
                                    bottom: 1
                                },
                                borderMarked: !0,
                                background: s.r.Alt,
                                fullWidth: !0
                            }, r.createElement(s.W, {
                                type: s.Ob.Strong,
                                color: s.O.Error
                            }, t.props.errorContent)) : null
                        }, t.onSubmit = function() {
                            t.props.onSubmit()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.successContent ? r.createElement(o.a, {
                            onClickOut: this.props.onClose
                        }, r.createElement(s.yb, {
                            padding: 2,
                            background: s.r.Base,
                            className: "clip-modal"
                        }, this.renderSuccess(), r.createElement(s.Xa, {
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center
                        }, r.createElement(s.Xa, {
                            margin: {
                                x: 1
                            }
                        }, r.createElement(s.z, {
                            "data-test-selector": l.CANCEL_BUTTON,
                            onClick: this.props.onClose
                        }, Object(a.d)("Close", "ClipsModal")))))) : r.createElement(o.a, {
                            onClickOut: this.props.onClose
                        }, r.createElement(s.yb, {
                            padding: 2,
                            background: s.r.Base,
                            className: "clip-modal"
                        }, r.createElement(s.yb, {
                            "data-test-selector": l.TITLE,
                            borderBottom: !0,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 1
                            }
                        }, this.props.title), r.createElement(s.yb, {
                            "data-test-selector": l.MAIN_BODY,
                            borderBottom: !0,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 2
                            }
                        }, this.renderError(), this.props.body), r.createElement(s.Xa, {
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center
                        }, r.createElement(s.Xa, {
                            margin: {
                                x: 1
                            }
                        }, r.createElement(s.z, {
                            "data-test-selector": l.CANCEL_BUTTON,
                            type: s.F.Text,
                            onClick: this.props.onClose
                        }, Object(a.d)("Cancel", "ClipsModal"))), r.createElement(s.Xa, {
                            margin: {
                                x: 1
                            }
                        }, r.createElement(s.z, {
                            "data-test-selector": l.SUBMIT_BUTTON,
                            type: this.props.buttonType ? this.props.buttonType : s.F.Default,
                            onClick: this.onSubmit,
                            disabled: this.props.submitDisabled
                        }, this.props.buttonContent), this.props.isLoading && r.createElement(s.Za, {
                            delay: 0
                        })))))
                    }, t
                }(r.Component),
                d = n("iyGE"),
                u = n("GnwI"),
                p = 86400,
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isLoading: !1,
                            hasErrored: !1,
                            hasSucceeded: !1
                        }, t.renderTitle = function() {
                            return t.props.isTemporary ? r.createElement(s.W, {
                                type: s.Ob.H5,
                                ellipsis: !0
                            }, Object(a.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : r.createElement(s.W, {
                                type: s.Ob.H5,
                                ellipsis: !0
                            }, Object(a.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                        }, t.renderBodyText = function() {
                            return t.props.isTemporary ? r.createElement(s.W, null, Object(a.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                                clipCreator: t.props.targetUser.displayName
                            }, "ClipsModalBanUser")) : r.createElement(s.W, null, Object(a.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                                clipCreator: t.props.targetUser.displayName
                            }, "ClipsModalBanUser"))
                        }, t.renderButtonText = function() {
                            return t.props.isTemporary ? Object(a.d)("Timeout User", "ClipsModalBanUser") : Object(a.d)("Ban User", "ClipsModalBanUser")
                        }, t.renderSuccess = function() {
                            return t.state.hasSucceeded ? Object(a.d)("Success!", "ClipsModalBanUser") : null
                        }, t.renderFailure = function() {
                            return t.state.hasErrored ? t.props.isTemporary ? Object(a.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(a.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
                        }, t.banUser = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            this.setState({
                                                isLoading: !0,
                                                hasSucceeded: !1,
                                                hasErrored: !1
                                            }), e = this.props.targetUser.login, t = this.props.isTemporary ? this.props.banUserMutation(e, p) : this.props.banUserMutation(e), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, t];
                                        case 2:
                                            return n.sent().banUserFromChatRoom.error ? this.setState({
                                                hasErrored: !0,
                                                isLoading: !1
                                            }) : this.setState({
                                                hasSucceeded: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 3:
                                            return n.sent(), this.setState({
                                                hasErrored: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return r.createElement(c, {
                            onSubmit: this.banUser,
                            onClose: this.props.onClose,
                            title: this.renderTitle(),
                            body: this.renderBodyText(),
                            buttonContent: this.renderButtonText(),
                            buttonType: s.F.Alert,
                            submitDisabled: this.state.isLoading || this.state.hasSucceeded,
                            successContent: this.renderSuccess(),
                            errorContent: this.renderFailure(),
                            isLoading: this.state.isLoading
                        })
                    }, t
                }(r.Component),
                f = Object(u.b)("ClipsModalBanUser")(Object(d.b)(function(e) {
                    return {
                        channelID: e.broadcasterID
                    }
                })(m)),
                h = n("yR8l"),
                g = n("vUXZ");

            function v(e) {
                return Object(h.a)(g, e)
            }
            var E = n("DJtx"),
                b = (n("n9Ey"), {
                    isLoading: !1,
                    hasErrored: !1,
                    hasSucceeded: !1
                }),
                y = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onDeleteClick = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            this.setState({
                                                isLoading: !0,
                                                hasSucceeded: !1,
                                                hasErrored: !1
                                            }), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), this.props.data.clip ? [4, this.props.deleteClip(this.props.slug)] : [2];
                                        case 2:
                                            return e.sent(), this.setState({
                                                isLoading: !1,
                                                hasSucceeded: !0
                                            }), [3, 4];
                                        case 3:
                                            return e.sent(), this.setState({
                                                isLoading: !1,
                                                hasErrored: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.state = b, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = [r.createElement(s.W, {
                            key: "title",
                            type: s.Ob.H4
                        }, Object(a.d)("Delete This Clip", "ClipsModalDelete")), r.createElement(s.Xa, {
                            key: "message",
                            margin: {
                                top: 1
                            }
                        }, r.createElement(s.W, {
                            type: s.Ob.P,
                            color: s.O.Alt2
                        }, Object(a.d)("This clip will be permanently deleted.", "ClipsModalDelete")))];
                        if (!this.props.data.clip) return null;
                        var t = null;
                        this.props.data.clip.curator && (t = r.createElement("span", null, " • ", Object(a.d)("Clipped by {curator}", {
                            curator: this.props.data.clip.curator.login
                        }, "ClipsModalDelete")));
                        var n = r.createElement(s.yb, {
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap
                        }, r.createElement(s.Xa, {
                            className: "clips-modal-delete__thumb",
                            margin: {
                                right: 1
                            }
                        }, r.createElement(s.o, {
                            ratio: s.p.Aspect16x9
                        }, r.createElement("img", {
                            src: this.props.data.clip.thumbnailURL
                        }))), r.createElement(s.Xa, null, r.createElement(s.W, {
                            type: s.Ob.H5
                        }, this.props.data.clip.title), r.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(a.d)("{created, date, medium}", {
                            created: new Date(this.props.data.clip.createdAt)
                        }, "ClipsModalDelete"), t), r.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(a.d)("{viewCount, number} views", {
                            viewCount: this.props.data.clip.viewCount
                        }, "ClipsModalDelete"))));
                        return r.createElement(c, {
                            onSubmit: this.onDeleteClick,
                            onClose: this.props.onClose,
                            title: e,
                            body: n,
                            buttonContent: Object(a.d)("Delete", "ClipsModalDelete"),
                            buttonType: s.F.Alert,
                            submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                            successContent: this.state.hasSucceeded ? Object(a.d)("Success!", "ClipsModalDelete") : null,
                            errorContent: this.state.hasErrored ? Object(a.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                            isLoading: this.state.isLoading
                        })
                    }, t
                }(r.Component),
                T = Object(h.a)(E)(v({
                    props: function(e) {
                        return {
                            deleteClip: function(t) {
                                return i.__awaiter(void 0, void 0, void 0, function() {
                                    var n;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return i.trys.push([0, 2, , 3]), [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            slugs: [t]
                                                        }
                                                    }
                                                })];
                                            case 1:
                                                return i.sent(), e.ownProps.onDelete && e.ownProps.onDelete(t), [3, 3];
                                            case 2:
                                                throw n = i.sent(), a.k.error(n, "Failed to delete clip"), n;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })(y)),
                O = n("oJmH"),
                S = n("Vsf8"),
                _ = {
                    isLoading: !1,
                    hasErrored: !1,
                    hasSucceeded: !1
                },
                k = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.deleteAll = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            this.setState({
                                                isLoading: !0,
                                                hasSucceeded: !1,
                                                hasErrored: !1
                                            }), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, this.props.deleteAllClips(this.props.broadcastID, this.props.videoID)];
                                        case 2:
                                            return e.sent(), this.setState({
                                                isLoading: !1,
                                                hasSucceeded: !0
                                            }), [3, 4];
                                        case 3:
                                            return e.sent(), this.setState({
                                                isLoading: !1,
                                                hasErrored: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.renderSuccess = function() {
                            return n.state.hasSucceeded ? Object(a.d)("A request has been made to delete the clip. Please wait a few minutes for this to take effect.", "ClipsModalDeleteAll") : null
                        }, n.renderFailure = function() {
                            return n.state.hasErrored ? Object(a.d)("There was a problem deleting this clip.", "ClipsModalDeleteAll") : null
                        }, n.state = _, n
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = r.createElement(s.W, {
                            type: s.Ob.P
                        }, Object(a.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                        return r.createElement(c, {
                            onSubmit: this.deleteAll,
                            onClose: this.props.onClose,
                            title: r.createElement(s.W, {
                                type: s.Ob.H4
                            }, Object(a.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                            body: e,
                            buttonContent: Object(a.d)("Delete", "ClipsModalDeleteAll"),
                            buttonType: s.F.Alert,
                            submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                            isLoading: this.state.isLoading,
                            successContent: this.renderSuccess(),
                            errorContent: this.renderFailure()
                        })
                    }, t
                }(r.Component),
                N = Object(O.compose)(Object(u.b)("ClipsModalDeleteAll"), v({
                    props: function(e) {
                        return {
                            deleteAllClips: function(t, n) {
                                return i.__awaiter(void 0, void 0, void 0, function() {
                                    var r, o, s;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return i.trys.push([0, 6, , 7]), r = void 0, n ? [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            videoID: n
                                                        }
                                                    }
                                                })] : [3, 2];
                                            case 1:
                                                return o = i.sent(), r = o.data, [3, 5];
                                            case 2:
                                                return t ? [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            broadcastID: t
                                                        }
                                                    }
                                                })] : [3, 4];
                                            case 3:
                                                return o = i.sent(), r = o.data, [3, 5];
                                            case 4:
                                                throw new Error("Invalid broadcastID specified for deleteAllClips");
                                            case 5:
                                                return e.ownProps.onDeleteAll && e.ownProps.onDeleteAll(r.deleteClips.clips), [3, 7];
                                            case 6:
                                                throw s = i.sent(), a.k.error(s, "Failed to delete clips from VOD"), s;
                                            case 7:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                }), Object(h.a)(S, {
                    props: function(e) {
                        var t = e.data.clip;
                        return t ? {
                            videoID: t.video ? t.video.id : null,
                            broadcastID: t.broadcast.id
                        } : {
                            videoID: null,
                            broadcastID: ""
                        }
                    },
                    options: function(e) {
                        return {
                            variables: {
                                slug: e.slug
                            }
                        }
                    }
                }))(k),
                C = {
                    isLoading: !1,
                    hasErrored: !1,
                    hasSucceeded: !1
                },
                R = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderSuccess = function() {
                            return n.state.hasSucceeded ? Object(a.d)("Clips successfully deleted.", "ClipsModalBatchDelete") : null
                        }, n.renderError = function() {
                            return n.state.hasErrored ? Object(a.d)("There was a problem deleting this clip.", "ClipsModalBatchDelete") : null
                        }, n.onDeleteClick = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            this.setState({
                                                isLoading: !0,
                                                hasSucceeded: !1,
                                                hasErrored: !1
                                            }), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, this.props.deleteClips()];
                                        case 2:
                                            return e.sent(), this.setState({
                                                hasSucceeded: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 3:
                                            return e.sent(), this.setState({
                                                hasErrored: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.state = C, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = r.createElement(s.W, {
                                type: s.Ob.H4
                            }, Object(a.d)("Delete these clips?", "ClipsModalBatchDelete")),
                            t = r.createElement(s.W, {
                                type: s.Ob.P
                            }, Object(a.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                        return r.createElement(c, {
                            onSubmit: this.onDeleteClick,
                            onClose: this.props.onClose,
                            title: e,
                            body: t,
                            buttonContent: Object(a.d)("Delete", "ClipsModalBatchDelete"),
                            buttonType: s.F.Alert,
                            submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                            isLoading: this.state.isLoading,
                            successContent: this.renderSuccess(),
                            errorContent: this.renderError()
                        })
                    }, t
                }(r.Component),
                I = v({
                    props: function(e) {
                        return {
                            deleteClips: function() {
                                return i.__awaiter(void 0, void 0, void 0, function() {
                                    var t;
                                    return i.__generator(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return n.trys.push([0, 2, , 3]), [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            slugs: e.ownProps.clipSlugs
                                                        }
                                                    }
                                                })];
                                            case 1:
                                                return n.sent(), e.ownProps.onBatchDelete && e.ownProps.onBatchDelete(), [3, 3];
                                            case 2:
                                                throw t = n.sent(), a.k.error(t, "Failed to delete clips"), t;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })(R);
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return f
            }), n.d(t, "d", function() {
                return T
            }), n.d(t, "e", function() {
                return N
            }), n.d(t, "c", function() {
                return I
            })
        },
        kSkr: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "BlockUser"
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
                                    value: "BlockUserInput"
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
                                value: "blockUser"
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
                                        value: "targetUser"
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
                    end: 94
                }
            };
            n.loc.source = {
                body: "mutation BlockUser($input: BlockUserInput!) {\nblockUser(input: $input) {\ntargetUser {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        kxrW: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.PlayerInit = "init", e.ContentShowing = "contentShowing", e.CompanionAdBuffered = "companionadbuffered", e.PlaybackStatistics = "playbackStatistics", e.ChansubRequired = "chansubRequired", e.VideoFailure = "videoFailure", e.Formats = "videoFormats", e.ABSStreamFormatChange = "abs_stream_format_change", e.FormatChanged = "videoFormatChanged", e.TimeChange = "timeChange", e.BufferChange = "bufferChange", e.SegmentChange = "segmentchange", e.UsherFailError = "usherFail", e.CaptionUpdate = "captions", e.SeekFailed = "seekfailed", e.VariantSwitchRequest = "variantSwitchRequested", e.ViewersChange = "viewerschange", e.StreamLoaded = "streamLoaded", e.VideoLoaded = "videoLoaded", e.VideoPaused = "videoPaused", e.QualityChange = "qualitychange", e.Online = "online", e.Offline = "offline", e.Restricted = "restricted", e.CastingChange = "castingchange", e.TheatreChange = "theatrechange", e.MidrollRequested = "midrollrequested", e.ManifestExtraInfo = "manifestExtraInfo", e.TransitionToCollectionVOD = "transitionToCollectionVod", e.TransitionToRecommendedVOD = "transitionToRecommendedVod", e.StitchedAdStart = "stitchedadstart", e.StichedAdEnd = "stitchedadend", e.PersistenPlayerToggle = "persistentPlayerEnableToggle", e.StatsUpdate = "statsupdate", e.PromptLoginModal = "prompt login modal", e.OpenStream = "openStream", e.PlayerReady = "ready", e.FullscreenChange = "fullscreenchange", e.ExternalFullscreenChange = "externalfullscreenchange", e.ClipsModerationOpen = "clips-moderation-open", e.FocusPlayer = "focusPlayer", e.FollowChannel = "followChannel", e.UnfollowChannel = "unfollowChannel"
                }(i || (i = {}))
        },
        lTz2: function(e, t, n) {
            "use strict";

            function i(e, t) {
                return !(!e && !t) && (!t || !e || (t.channelLogin !== e.channelLogin || t.vodID !== e.vodID || t.collectionID !== e.collectionID))
            }

            function r(e, t) {
                return !(!e && !t) && (!t || !e || (e.vodID && !t.vodID || e.collectionID && !t.collectionID))
            }
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            })
        },
        lX3L: function(e, t, n) {},
        lZCe: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.logger = a.p.logger.withCategory("component-experiment");
                        var i = a.p.experiments.getAssignment(n.props.name, n.props.channel ? {
                            channel: n.props.channel
                        } : {});
                        return i && n.props.assignments[i] ? n.logger.debug("Displaying component for experiment", {
                            name: n.props.name,
                            assignment: i
                        }) : n.logger.debug("Displaying fallback component for experiment", {
                            name: n.props.name,
                            assignment: i
                        }), n.state = {
                            assignment: i
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (this.state.assignment && this.props.assignments[this.state.assignment]) {
                            var e = this.props.assignments[this.state.assignment]();
                            return "string" == typeof e ? (window.location.replace(e), null) : e
                        }
                        return this.props.assignments.fallback()
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return o
            })
        },
        mzKw: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "a", function() {
                return d
            });
            var i, r, a, o = n("TSYQ"),
                s = n("q1tI"),
                l = n("6FuP"),
                c = n("Ue10");
            n("dW6f");
            ! function(e) {
                e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
            }(i || (i = {})),
            function(e) {
                e[e.Handle = 0] = "Handle"
            }(r || (r = {})),
            function(e) {
                e[e.Small = 15] = "Small", e[e.Medium = 25] = "Medium"
            }(a || (a = {}));
            var d = function(e) {
                var t = o("draggable-slider-handle", {
                    "draggable-slider-handle--left": e.handlePosition === i.Left,
                    "draggable-slider-handle--right": e.handlePosition === i.Right,
                    "draggable-slider-handle--blue": e.color === l.a.Blue,
                    "draggable-slider-handle--orange": e.color === l.a.Orange
                });
                return s.createElement(c.Pa, {
                    flexGrow: 0,
                    flexShrink: 0,
                    className: t,
                    display: c.X.Flex,
                    fullHeight: !0
                }, s.createElement("div", {
                    "data-test-selector": r.Handle,
                    onMouseDown: e.onMouseDown,
                    ref: e.onRef
                }, s.createElement(c.ob, {
                    asset: c.pb.DragHandle,
                    width: e.size
                })))
            }
        },
        n9Ey: function(e, t, n) {},
        nIRf: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var i = function() {
                return function(e) {
                    var t = this;
                    this.timerId = null, this.start = function() {
                        t.timerId && t.stop(), t.timerId = setInterval(t.onInterval, t.intervalMillis)
                    }, this.stop = function() {
                        t.timerId && (clearInterval(t.timerId), t.timerId = null)
                    }, this.restart = function(e) {
                        void 0 === e && (e = 0), t.stop(), t.timerId = setTimeout(function() {
                            t.onInterval(), t.start()
                        }, e)
                    }, this.onInterval = e.onInterval, this.intervalMillis = e.intervalMillis
                }
            }()
        },
        ndwU: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("/7QA"),
                r = n("D7An");

            function a() {
                return "variant1" === i.p.experiments.getAssignment(r.b.ClipsOnTheBrain)
            }
        },
        nt5g: function(e, t) {
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
        oKCn: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "e", function() {
                    return i
                }), n.d(t, "a", function() {
                    return a
                }), n.d(t, "b", function() {
                    return s
                }), n.d(t, "c", function() {
                    return l
                }), n.d(t, "d", function() {
                    return o
                }),
                function(e) {
                    e.Embed = "embed", e.Feed = "feed", e.Frontpage = "frontpage", e.Site = "site", e.Highlighter = "highlighter", e.Onboarding = "onboarding", e.ClipsViewing = "clips-viewing", e.ClipsWatchPage = "clips-watch", e.ClipsEditing = "clips-editing", e.ClipsEmbed = "clips-embed", e.Dashboard = "dashboard", e.SquadStreamPrimary = "squad-primary", e.SquadStreamSecondary = "squad-secondary"
                }(i || (i = {}));
            var r, a = [i.ClipsEditing, i.ClipsViewing, i.ClipsEmbed];
            ! function(e) {
                e.Auto = "auto", e.HighHighFPS = "1080p60", e.High = "1080p30", e.MediumHighFPS = "720p60", e.Medium = "720p30", e.Low = "360p30", e.VeryLow = "160p30"
            }(r || (r = {}));
            var o, s = {
                    group: "auto",
                    width: 1e5,
                    height: 1e5
                },
                l = {
                    group: "360p30",
                    width: 640,
                    height: 360
                };
            ! function(e) {
                e.Delete = "delete", e.DeleteAll = "deleteAll", e.ReportUser = "report"
            }(o || (o = {}))
        },
        oe5X: function(e, t, n) {
            "use strict";
            var i = n("XmgI"),
                r = n("RcPG"),
                a = n("0FG4"),
                o = n("i6WW"),
                s = n("gTu3"),
                l = n("6j5V"),
                c = /^(['"*([{</]*)@((?:[^\u0000-\u007F]|[\w-])+)/;

            function d(e, t) {
                if (!t) return !1;
                var n = t.displayName,
                    i = t.login;
                return e === n || e.toLowerCase() === i
            }

            function u(e, t) {
                void 0 === t && (t = {});
                var n = t.cheers,
                    u = t.emotes,
                    h = t.links,
                    g = t.mentions,
                    v = m(e),
                    E = "",
                    b = 0;
                return p(v.reduce(function(e, t, p) {
                    if (f(t)) return E = "", e;
                    if (0 === E.length && (b = p), E += t, p !== v.length - 1 && !f(v[p + 1])) return e;
                    var m = u && Object(a.c)(E, b, u);
                    if (m) return e.concat(m);
                    var y = n && Object(i.d)(E, n);
                    if (y) return e.concat(y);
                    var T = h && Object(o.a)(E, h);
                    if (T) return e.concat(T);
                    var O = g && function(e, t) {
                        var n = e.match(c);
                        if (!n) return d(e, t.sessionUser) ? [{
                            type: r.a.CurrentUserHighlight,
                            content: e
                        }] : null;
                        var i = [],
                            a = n[1],
                            o = n[2],
                            u = e.slice(n[0].length);
                        a.length && i.push(Object(l.a)(a));
                        var p = s.a.Default;
                        return d(o, t.sessionUser) ? p = s.a.Recipient : t.sessionUser && t.sessionUser.login === t.senderLogin && (p = s.a.Sender), i.push({
                            type: r.a.Mention,
                            content: {
                                recipient: o,
                                currentUserMentionRelation: p
                            }
                        }), u.length && i.push(Object(l.a)(u)), i
                    }(E, g);
                    return O ? e.concat([O]) : e.concat(Object(l.a)(E))
                }, []))
            }

            function p(e) {
                return e.reduce(function(e, t, n) {
                    return 0 === n ? [].concat.call(e, t) : [].concat.call(e, Object(l.a)(" "), t)
                }, []).reduce(function(e, t, n) {
                    if (0 === n) return e.concat(t);
                    var i = e[e.length - 1];
                    return t.type === r.a.Text && i.type === r.a.Text ? (i.content = "" + i.content + t.content, e) : e.concat(t)
                }, [])
            }

            function m(e) {
                return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g) || []
            }

            function f(e) {
                return /\s/.test(e)
            }
            n.d(t, "a", function() {
                return u
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, !1, function() {
                return m
            })
        },
        pwCS: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("fvjX"),
                a = n("aCAx"),
                o = n("mrSG"),
                s = n("q1tI"),
                l = n("/7QA"),
                c = n("yR8l"),
                d = n("jsEL"),
                u = n("GnwI"),
                p = n("/HY+"),
                m = n("4qQ0"),
                f = n("eFQ3"),
                h = n("oKCn"),
                g = n("QK1T"),
                v = n("OTul"),
                E = n("Ue10"),
                b = (n("qDtz"), n("vl+S")),
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isDismissed: !1,
                            isShowingLiveCTA: !1
                        }, t.dismissWatchLivePrompt = function(e) {
                            e.preventDefault(), t.setState({
                                isDismissed: !0
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.props.slug !== e.slug && this.setState({
                            isShowingLiveCTA: !1
                        }), this.updateLiveVisibility(e)
                    }, t.prototype.render = function() {
                        var e = this.props.data.clip;
                        if (this.state.isDismissed || !this.state.isShowingLiveCTA || !(e && e.game && e.broadcaster && e.broadcaster.stream && e.broadcaster.stream.id)) return null;
                        var t = e.broadcaster,
                            n = e.game,
                            i = t.login ? Object(v.c)(t.login) : Object(v.j)();
                        return s.createElement(E.Xa, {
                            className: "watch-live-prompt",
                            position: E.fb.Absolute,
                            zIndex: E.bc.Above,
                            attachRight: !0
                        }, s.createElement(E.U, {
                            to: i,
                            hoverUnderlineNone: !0,
                            targetBlank: !0
                        }, s.createElement(E.i, {
                            type: E.n.SlideInRight,
                            duration: E.k.Short,
                            enabled: !0
                        }, s.createElement(E.yb, {
                            padding: 1,
                            elevation: 2,
                            background: E.r.Overlay
                        }, s.createElement(E.Xa, {
                            position: E.fb.Relative,
                            display: E.X.Flex,
                            flexDirection: E.Aa.Row,
                            alignItems: E.f.Center
                        }, s.createElement(E.Xa, {
                            position: E.fb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            zIndex: E.bc.Above
                        }, s.createElement(E.cb, {
                            label: Object(l.d)("LIVE", "WatchLivePrompt"),
                            type: E.db.Live
                        })), s.createElement(E.G, {
                            row: !0
                        }, s.createElement(E.I, {
                            src: e.thumbnailURL,
                            alt: Object(l.d)("Clip Thumbnail", "ClipWatchLivePrompt"),
                            aspect: E.p.Aspect16x9,
                            size: E.J.Size6
                        }), s.createElement(E.H, null, s.createElement(E.Xa, {
                            className: "watch-live-prompt__copy",
                            padding: {
                                x: 1
                            }
                        }, s.createElement(E.W, {
                            type: E.Ob.H5,
                            color: E.O.Overlay,
                            lineHeight: E.Ya.Heading,
                            ellipsis: !0
                        }, Object(l.d)("Watch {displayName} Live", {
                            displayName: t.displayName || ""
                        }, "WatchLivePrompt")), s.createElement(E.W, {
                            type: E.Ob.H6,
                            color: E.O.OverlayAlt,
                            lineHeight: E.Ya.Heading,
                            ellipsis: !0
                        }, Object(l.d)("playing {gameName}", {
                            gameName: n.displayName
                        }, "WatchLivePrompt"))))), s.createElement(E.A, {
                            ariaLabel: Object(l.d)("Dismiss watch live prompt", "WatchLivePrompt"),
                            icon: E.pb.Close,
                            onClick: this.dismissWatchLivePrompt,
                            type: E.C.Default,
                            overlay: !0,
                            size: E.B.Large
                        }))))))
                    }, t.prototype.updateLiveVisibility = function(e) {
                        var t = e.currentTime,
                            n = e.data.clip && e.data.clip.durationSeconds;
                        if (n && t) {
                            var i = .6 * n;
                            !this.state.isShowingLiveCTA && t > i && 18 <= n && this.setState({
                                isShowingLiveCTA: !0
                            })
                        }
                    }, t = o.__decorate([Object(c.a)(b)], t)
                }(s.Component),
                T = (n("Kgiw"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(E.Pa, {
                            position: E.fb.Absolute,
                            fullHeight: !0,
                            fullWidth: !0
                        }, s.createElement("div", {
                            ref: this.props.setPlayerWrapperRef
                        }, s.createElement(E.yb, {
                            className: "clips-video-overlay",
                            fullHeight: !0,
                            fullWidth: !0,
                            position: E.fb.Absolute,
                            overflow: E.ab.Hidden
                        }, !Object(g.c)(window.navigator.userAgent) && this.props.playerType === f.a.ClipsViewing && s.createElement(y, {
                            slug: this.props.slug,
                            currentTime: this.props.currentTime
                        })), s.createElement(E.Xa, {
                            position: E.fb.Absolute,
                            fullHeight: !0,
                            fullWidth: !0
                        }, this.props.children)))
                    }, t
                }(s.Component)),
                O = (n("ibn3"), n("OTsR")),
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isLoaded: !1
                        }, t.playerWrapperRef = null, t.onClipsModerationOpen = function(e) {
                            if (e === h.d.ReportUser) {
                                var n = t.props.data.clip && t.props.data.clip.broadcaster ? t.props.data.clip.broadcaster.id : "",
                                    i = t.props.data.clip && t.props.data.clip.curator ? t.props.data.clip.curator.id : "";
                                t.props.showModal(p.a, {
                                    title: Object(l.d)("Report this Clip", "ClipsViewModerationModals"),
                                    reportContext: {
                                        contentType: m.a.Clip,
                                        contentID: t.props.slug,
                                        targetUserID: n,
                                        additionalTrackingID: i
                                    },
                                    onClose: t.props.closeModal
                                })
                            }
                            e === h.d.Delete && t.props.showModal(d.d, {
                                slug: t.props.slug,
                                onClose: t.props.closeModal
                            }), e === h.d.DeleteAll && t.props.showModal(d.e, {
                                slug: t.props.slug,
                                onClose: t.props.closeModal
                            })
                        }, t.setDoneLoading = function() {
                            t.setState({
                                isLoaded: !0
                            }), t.props.onLoaded && t.props.onLoaded()
                        }, t.setPlayerWrapperRef = function(e) {
                            return t.playerWrapperRef = e
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.slug,
                            n = e.playerType;
                        return s.createElement(E.Xa, {
                            flexGrow: 1
                        }, s.createElement(E.o, {
                            ratio: E.p.Aspect16x9
                        }, s.createElement(T, {
                            slug: t,
                            setPlayerWrapperRef: this.setPlayerWrapperRef,
                            playerType: this.props.playerType,
                            currentTime: this.props.currentTime
                        }, s.createElement(E.yb, {
                            className: "clips-video-wrapper",
                            position: E.fb.Relative,
                            fullWidth: !0,
                            fullHeight: !0
                        }, s.createElement(E.yb, {
                            display: this.state.isLoaded ? E.X.Hide : E.X.Flex,
                            color: E.O.Overlay,
                            alignItems: E.f.Center,
                            justifyContent: E.Wa.Center,
                            position: E.fb.Absolute,
                            fullHeight: !0,
                            fullWidth: !0
                        }, s.createElement(E.Za, {
                            size: E.wb.Large,
                            inheritColor: !0
                        })), s.createElement(E.Xa, {
                            display: this.state.isLoaded ? E.X.Block : E.X.HideAccessible,
                            position: E.fb.Absolute,
                            fullHeight: !0,
                            fullWidth: !0
                        }, s.createElement(f.b, {
                            clipSlug: t,
                            playerTypeOverride: n,
                            disableTheatreButton: !0,
                            onInit: this.setDoneLoading,
                            onVideoTimeChange: this.props.setCurrentTime,
                            onClipsModerationOpen: this.onClipsModerationOpen,
                            fullscreenRef: this.playerWrapperRef,
                            editing: this.props.editing
                        }))))))
                    }, t = o.__decorate([Object(u.b)("ClipsVideoPlayer", {
                        autoReportInteractive: !0
                    })], t)
                }(s.Component),
                _ = Object(c.a)(O)(S);
            var k = Object(i.connect)(null, function(e) {
                return Object(r.bindActionCreators)({
                    showModal: a.d,
                    closeModal: a.c
                }, e)
            })(_);
            n.d(t, "a", function() {
                return k
            })
        },
        py0p: function(e, t, n) {},
        q5AV: function(e, t, n) {},
        qDtz: function(e, t, n) {},
        qyP0: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("/MKj"),
                r = n("kRBY"),
                a = n("mrSG"),
                o = n("q1tI"),
                s = n("V+GM"),
                l = n("NvVO"),
                c = n("2xye"),
                d = n("ndwU"),
                u = n("GnwI"),
                p = n("rwoo"),
                m = n("OTul"),
                f = n("TSYQ"),
                h = n("oJmH"),
                g = n("mLw1"),
                v = n("/7QA"),
                E = n("lZCe"),
                b = n("yR8l"),
                y = n("D7An"),
                T = n("DMoW"),
                O = n("oKCn"),
                S = n("ig/l"),
                _ = n("mzKw"),
                k = n("WSjS"),
                N = n("3dkm");

            function C(e, t) {
                return {
                    startOffset: e,
                    endOffset: t
                }
            }
            var R = n("Ue10"),
                I = (n("/R0k"), 1);

            function D(e) {
                return parseFloat(e.toFixed(I))
            }
            var A = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            startOffset: -1,
                            endOffset: -1
                        }, t.onDrag = function(e) {
                            t.setState({
                                startOffset: D(e.startOffset),
                                endOffset: D(e.endOffset)
                            }), t.props.setEditing({
                                startOffset: t.state.startOffset,
                                endOffset: t.state.endOffset
                            })
                        }, t.renderDurationPopover = function() {
                            var e = o.createElement(R.W, {
                                type: R.Ob.Strong
                            }, t.roundedPopoverDuration() + "s");
                            return o.createElement(R.yb, {
                                className: "clips-editor-slider-popover",
                                background: R.r.Alt2,
                                padding: {
                                    y: 1,
                                    x: 2
                                },
                                fullWidth: !0,
                                textAlign: R.Kb.Center,
                                overflow: R.ab.Hidden,
                                border: !0
                            }, o.createElement(R.W, {
                                align: R.Yb.Middle,
                                fontSize: R.Ca.Size5,
                                color: R.O.Alt2
                            }, Object(v.d)("{roundedDuration} / 60s", {
                                roundedDuration: e
                            }, "ClipsEditor")), o.createElement(R.W, {
                                align: R.Yb.Middle,
                                color: R.O.Alt2
                            }, Object(N.a)(t.state.startOffset) + " - " + Object(N.a)(t.state.endOffset)))
                        }, t.isReady = function() {
                            return t.props.isClipResolved && t.isValidOffset(t.state.startOffset) && t.isValidOffset(t.state.endOffset)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.isValidOffset(this.state.startOffset),
                            n = this.isValidOffset(this.state.endOffset);
                        if ((!t || !n) && e.initialOffsetStart && e.duration) {
                            var i = {},
                                r = C(e.initialOffsetStart, e.duration);
                            !t && this.isValidOffset(r.startOffset) && (i.startOffset = r.startOffset), !n && this.isValidOffset(r.endOffset) && (i.endOffset = r.endOffset), this.setState(i)
                        }
                    }, t.prototype.componentDidUpdate = function() {
                        this.isReady() && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.isReady() && this.props.duration ? o.createElement(R.Xa, null, o.createElement(R.yb, {
                            margin: {
                                y: 4
                            },
                            className: "clips-editor-slider-background"
                        }, o.createElement(S.a, {
                            startOffset: this.state.startOffset,
                            endOffset: this.state.endOffset,
                            minOffset: 0,
                            maxOffset: this.props.duration,
                            minLength: 5,
                            maxLength: 60,
                            onLeftDrag: this.onDrag,
                            onRightDrag: this.onDrag,
                            onSliderDrag: this.onDrag,
                            popover: this.renderDurationPopover(),
                            color: S.c.Blue,
                            isSliderEnabled: !0,
                            handleSize: _.c.Medium
                        }, o.createElement(R.Xa, {
                            padding: {
                                top: 3,
                                bottom: 2
                            },
                            fullWidth: !0,
                            textAlign: R.Kb.Center,
                            overflow: R.ab.Hidden
                        }))), o.createElement(k.a, {
                            clipSlug: this.props.slug,
                            location: c.PageviewLocation.ClipsEditing,
                            broadcasterName: this.props.broadcasterName,
                            startOffset: this.state.startOffset,
                            endOffset: this.state.endOffset
                        })) : this.renderPlaceholder()
                    }, t.prototype.renderPlaceholder = function() {
                        return o.createElement(R.Xa, null, o.createElement(R.i, {
                            type: R.n.Bounce,
                            loop: !0,
                            enabled: !0,
                            duration: R.k.ExtraLong,
                            timing: R.m.EaseInOut
                        }, o.createElement(R.yb, {
                            fullWidth: !0,
                            background: R.r.Alt2,
                            margin: {
                                y: 4
                            },
                            padding: {
                                y: 3
                            },
                            textAlign: R.Kb.Center
                        })), o.createElement(R.i, {
                            type: R.n.Bounce,
                            loop: !0,
                            enabled: !0,
                            duration: R.k.ExtraLong,
                            timing: R.m.EaseInOut,
                            delay: R.j.Medium
                        }, o.createElement(R.yb, {
                            fullWidth: !0,
                            background: R.r.Alt2,
                            margin: {
                                y: 4
                            },
                            padding: {
                                top: 2,
                                bottom: 1
                            },
                            textAlign: R.Kb.Center
                        })))
                    }, t.prototype.roundedPopoverDuration = function() {
                        var e = this.state.endOffset - this.state.startOffset;
                        return e >= 59.7 && (e = 60), e <= 5.3 && (e = 5), e.toFixed(1)
                    }, t.prototype.isValidOffset = function(e) {
                        return !isNaN(e) && e >= 0
                    }, t
                }(o.Component),
                w = Object(h.compose)(Object(u.b)("ClipsEditor"))(A),
                L = n("VwyG"),
                M = n("SGIe"),
                P = function(e) {
                    var t = e.clip;
                    return t && t.broadcaster && t.broadcaster.login && t.video && t.videoOffsetSeconds ? o.createElement(R.Xa, {
                        display: R.X.Flex,
                        flexDirection: R.Aa.Row
                    }, o.createElement(R.Xa, {
                        flexGrow: 1,
                        flexShrink: 1
                    }, o.createElement(R.W, {
                        color: R.O.Alt2
                    }, Object(v.d)("Is 1 minute too short? Create longer clips using the Highlighter", "HighlightCTA"))), o.createElement(R.Xa, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, o.createElement(M.a, {
                        buttonType: e.buttonType,
                        callToAction: Object(v.d)("Highlighter", "HighlightCTA"),
                        clip: t,
                        onClick: e.onClick
                    }))) : null
                },
                F = function(e) {
                    var t = e.clip;
                    return t && t.broadcaster && t.broadcaster.login ? o.createElement(L.a, {
                        ownerLogin: t.broadcaster.login,
                        permittedRoles: {
                            owner: !0,
                            editor: !0,
                            staff: !0
                        }
                    }, function(t) {
                        return t.permitted ? o.createElement(P, a.__assign({}, e)) : null
                    }) : null
                },
                U = (n("dsEc"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = f("clips-edit-top-nav", {
                            "clips-edit-top-nav-rollup": this.props.isPostEdit
                        });
                        return o.createElement(R.yb, {
                            background: R.r.Base,
                            className: e,
                            position: R.fb.Fixed,
                            fullWidth: !0,
                            attachTop: !0,
                            attachLeft: !0,
                            display: R.X.Flex,
                            justifyContent: R.Wa.Center,
                            alignItems: R.f.Center,
                            "data-test-selector": "clips-edit-top-nav-wrapper",
                            borderBottom: !0
                        }, this.props.showMessage && o.createElement(R.i, {
                            delay: R.j.Medium,
                            duration: R.k.Medium,
                            enabled: !0,
                            fillMode: R.l.Both,
                            timing: R.m.EaseInOut,
                            type: R.n.SlideInTop
                        }, o.createElement(R.Xa, {
                            display: R.X.Flex,
                            justifyContent: R.Wa.Center,
                            alignItems: R.f.Center
                        }, o.createElement(R.W, {
                            color: R.O.Alt,
                            fontSize: R.Ca.Size5
                        }, Object(v.d)("Title this clip to publish", "ClipsEditTopNav")), o.createElement(R.Xa, {
                            margin: {
                                left: .5
                            },
                            display: R.X.Flex,
                            alignItems: R.f.Center
                        }, o.createElement(R.ob, {
                            asset: R.pb.Lock,
                            type: R.qb.Warn
                        })))))
                    }, t
                }(o.Component)),
                x = Object(u.b)("ClipsEditTopNav", {
                    autoReportInteractive: !0
                })(U),
                B = n("a1OF"),
                V = n("nIRf"),
                j = (n("py0p"), {
                    clappy: Object(B.d)("192361", 3),
                    clappyDerp: Object(B.d)("192362", 3),
                    clappyHype: Object(B.d)("192363", 3)
                });

            function W() {
                switch (Math.floor(17 * Math.random())) {
                    case 0:
                        return {
                            icon: j.clappyHype,
                            text: Object(v.d)("Generating your clip...", "ClipsPostEditLoading")
                        };
                    case 1:
                        return {
                            icon: j.clappyDerp,
                            text: Object(v.d)("Almost there...", "ClipsPostEditLoading")
                        };
                    case 2:
                        return {
                            icon: j.clappyHype,
                            text: Object(v.d)("Just a few more seconds...", "ClipsPostEditLoading")
                        };
                    case 3:
                        return {
                            icon: j.clappy,
                            text: Object(v.d)("Grabbing popcorn...", "ClipsPostEditLoading")
                        };
                    case 4:
                        return {
                            icon: j.clappyHype,
                            text: Object(v.d)("Summoning your clip...", "ClipsPostEditLoading")
                        };
                    case 5:
                        return {
                            icon: j.clappyHype,
                            text: Object(v.d)("The bits are breeding...", "ClipsPostEditLoading")
                        };
                    case 6:
                        return {
                            icon: j.clappy,
                            text: Object(v.d)("Building the thing...", "ClipsPostEditLoading")
                        };
                    case 7:
                        return {
                            icon: j.clappyDerp,
                            text: Object(v.d)("Spinning up hamsters...", "ClipsPostEditLoading")
                        };
                    case 8:
                        return {
                            icon: j.clappy,
                            text: Object(v.d)("Fetching your stick...", "ClipsPostEditLoading")
                        };
                    case 9:
                        return {
                            icon: j.clappyDerp,
                            text: Object(v.d)("Applying middle out compression...", "ClipsPostEditLoading")
                        };
                    case 10:
                        return {
                            icon: j.clappy,
                            text: Object(v.d)("Searching for llamas...", "ClipsPostEditLoading")
                        };
                    case 11:
                        return {
                            icon: j.clappyHype,
                            text: Object(v.d)("Turning on printer...", "ClipsPostEditLoading")
                        };
                    case 12:
                        return {
                            icon: j.clappy,
                            text: Object(v.d)("Learning calculus...", "ClipsPostEditLoading")
                        };
                    case 13:
                        return {
                            icon: j.clappyDerp,
                            text: Object(v.d)("Training patience...", "ClipsPostEditLoading")
                        };
                    case 14:
                        return {
                            icon: j.clappy,
                            text: Object(v.d)("Looking for keys...", "ClipsPostEditLoading")
                        };
                    case 15:
                        return {
                            icon: j.clappyDerp,
                            text: Object(v.d)("Baking cake...", "ClipsPostEditLoading")
                        };
                    default:
                        return {
                            icon: j.clappyHype,
                            text: Object(v.d)("Searching for hold music...", "ClipsPostEditLoading")
                        }
                }
            }
            var G, H = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            percent: 0,
                            messageData: W()
                        }, t.onTimerUpdate = function() {
                            t.state.percent >= 100 ? t.countdownTimer.stop() : t.setState({
                                percent: t.state.percent + 1,
                                messageData: t.state.percent % 4 == 0 ? W() : t.state.messageData
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.countdownTimer = new V.a({
                            onInterval: this.onTimerUpdate,
                            intervalMillis: 500
                        }), this.countdownTimer.start()
                    }, t.prototype.componentWillUnmount = function() {
                        this.countdownTimer.stop()
                    }, t.prototype.render = function() {
                        return o.createElement(R.yb, {
                            className: "clips-post-edit-loading",
                            padding: 4,
                            background: R.r.Base,
                            border: !0
                        }, o.createElement(R.Xa, {
                            display: R.X.Flex,
                            justifyContent: R.Wa.Between,
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(R.W, {
                            type: R.Ob.Span,
                            fontSize: R.Ca.Size6
                        }, Object(v.d)("Publishing Clip!", "ClipsPostEditLoading")), o.createElement(R.Xa, {
                            display: R.X.InlineBlock
                        }, this.state.percent, "%")), o.createElement(R.ib, {
                            animationDirection: R.jb.Up,
                            animationDuration: 50,
                            mask: !0
                        }), o.createElement(R.Xa, {
                            margin: {
                                top: 2
                            }
                        }, o.createElement(R.Xa, {
                            className: "clips-post-edit-loading-clappy",
                            display: R.X.InlineBlock
                        }, o.createElement(R.i, {
                            duration: R.k.ExtraLong,
                            enabled: !0,
                            type: R.n.Bounce,
                            loop: !0,
                            timing: R.m.EaseOut
                        }, o.createElement(R.S, {
                            src: this.state.messageData.icon,
                            alt: Object(v.d)("Clappy looking good", "ClipsPostEditLoading")
                        })), o.createElement(R.Xa, {
                            position: R.fb.Relative
                        }, o.createElement(R.u, {
                            direction: R.v.Right,
                            elevation: 2,
                            show: !0,
                            tailBackground: R.r.Alt2,
                            offsetY: "-3.8rem",
                            offsetX: "1.5rem"
                        }, o.createElement(R.yb, {
                            padding: 1,
                            background: R.r.Alt2
                        }, o.createElement(R.W, {
                            color: R.O.Alt2
                        }, this.state.messageData.text)))))))
                    }, t
                }(o.Component),
                z = n("uX80"),
                X = n("X7Ac"),
                q = n("Jxh/"),
                Y = n("MLDe"),
                K = n("DLy/"),
                Q = (n("WnZM"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            showConfirmation: !1
                        }, t.copyClipURL = function() {
                            Object(q.a)(Object(m.b)(t.props.slug)), t.setState({
                                showConfirmation: !0
                            }), setTimeout(function() {
                                t.setState({
                                    showConfirmation: !1
                                })
                            }, 2e3);
                            var e = t.props,
                                n = e.clipId,
                                i = e.gameName,
                                r = e.broadcasterId,
                                a = e.broadcasterLogin;
                            Object(Y.c)(n, i, r, a, c.PageviewLocation.ClipsEditing)(X.b.CopyInput)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(R.yb, {
                            className: "clips-post-edit-share",
                            padding: 3,
                            background: R.r.Base,
                            border: !0
                        }, o.createElement(R.Xa, {
                            margin: {
                                bottom: 2
                            },
                            position: R.fb.Relative,
                            fullWidth: !0
                        }, o.createElement(z.a, {
                            text: Object(m.b)(this.props.slug),
                            icon: !0,
                            iconAsset: R.pb.Link,
                            onSelection: this.copyClipURL,
                            "data-a-target": "clip-share-input"
                        }), o.createElement(R.u, {
                            tailBackground: R.r.Alt,
                            direction: R.v.TopCenter,
                            show: this.state.showConfirmation,
                            offsetY: "1rem",
                            elevation: 2
                        }, o.createElement(R.yb, {
                            background: R.r.Alt,
                            textAlign: R.Kb.Center,
                            padding: {
                                y: 1
                            }
                        }, o.createElement(R.W, {
                            color: R.O.Alt,
                            fontSize: R.Ca.Size5
                        }, Object(v.d)("Copied!", "ClipsPostEditShare"))))), o.createElement(R.Xa, {
                            display: R.X.Flex,
                            justifyContent: R.Wa.Center
                        }, o.createElement(K.a, {
                            slug: this.props.slug,
                            pageType: c.PageviewLocation.ClipsEditing
                        })))
                    }, t
                }(o.Component)),
                Z = n("99qK"),
                $ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.isDonePolling(e) && !this.isDonePolling(this.props) && this.props.data.stopPolling()
                    }, t.prototype.render = function() {
                        var e = this.props.data.clip,
                            t = !(!this.isDonePolling() || !e),
                            n = null;
                        return n = t && e ? o.createElement(Q, {
                            slug: this.props.slug,
                            clipId: e.id,
                            broadcasterId: e.broadcaster && e.broadcaster.id,
                            broadcasterLogin: e.broadcaster && e.broadcaster.login,
                            gameName: e.game && e.game.name
                        }) : o.createElement(H, null), o.createElement(R.i, {
                            duration: R.k.ExtraLong,
                            enabled: t,
                            fillMode: R.l.Both,
                            timing: R.m.EaseInOut,
                            type: R.n.SlideInBottom
                        }, o.createElement(R.Xa, {
                            display: R.X.Flex,
                            justifyContent: R.Wa.Center,
                            padding: {
                                top: 4
                            }
                        }, n))
                    }, t.prototype.isDonePolling = function(e) {
                        void 0 === e && (e = this.props);
                        var t = e.data,
                            n = t.loading,
                            i = t.clip;
                        return !n && i && i.creationState !== T.j.CREATING
                    }, t
                }(o.Component),
                J = Object(b.a)(Z, {
                    options: function(e) {
                        return {
                            pollInterval: 1e3,
                            fetchPolicy: "network-only",
                            variables: {
                                slug: e.slug
                            }
                        }
                    }
                })($),
                ee = n("r/em"),
                te = n("+GrQ"),
                ne = n("/mWu"),
                ie = n("Jr7Z"),
                re = (n("4mFl"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.slug,
                            t = o.createElement(R.Xa, {
                                alignItems: R.f.Center,
                                display: R.X.Flex,
                                flexDirection: R.Aa.Row,
                                justifyContent: R.Wa.Start,
                                margin: {
                                    y: 1
                                },
                                ellipsis: !0
                            }, o.createElement(R.yb, {
                                display: R.X.Flex,
                                fontSize: R.Ca.Size5
                            }, o.createElement(R.W, {
                                type: R.Ob.Span
                            }, Object(N.b)(this.props.createdAt)), o.createElement(R.Xa, {
                                margin: {
                                    x: .5
                                }
                            }, "•")), o.createElement(te.a, {
                                slug: e,
                                ellipsis: !0
                            }));
                        return o.createElement(R.yb, {
                            className: "clips-post-edit-sidebar",
                            display: R.X.Flex,
                            flexDirection: R.Aa.Column,
                            background: R.r.Base
                        }, o.createElement(R.yb, {
                            className: "clips-post-edit-sidebar-top",
                            borderBottom: !0
                        }, o.createElement(ee.a, {
                            slug: e
                        })), o.createElement(R.Xa, {
                            fullHeight: !0,
                            display: R.X.Flex,
                            alignItems: R.f.Center
                        }, o.createElement(R.Xa, {
                            className: "clips-sidebar-info",
                            display: R.X.Flex,
                            flexDirection: R.Aa.Column,
                            justifyContent: R.Wa.Around,
                            padding: 1
                        }, o.createElement(ie.a, {
                            slug: e
                        }), o.createElement(ne.a, {
                            slug: e
                        }), t)))
                    }, t
                }(o.Component)),
                ae = n("pwCS"),
                oe = n("+7pI"),
                se = n("i0io");
            n("JQql");
            ! function(e) {
                e.HighlighterCTAExperimentTop = "HighlighterCTAExperimentTop", e.HighlighterCTAExperimentBottom = "HighlighterCTAExperimentBottom"
            }(G || (G = {}));
            var le = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isPollingTimedOut: !1,
                            isPlayerLoaded: !1,
                            hideContent: !1,
                            editing: {},
                            shouldAnimate: !0
                        }, t.timeoutID = 0, t.hasSentEditClip = !1, t.onLoaded = function() {
                            t.setState({
                                isPlayerLoaded: !0
                            })
                        }, t.setEditing = function(e) {
                            t.setState({
                                editing: e
                            })
                        }, t.onAnimationEnd = function() {
                            t.setState({
                                shouldAnimate: !1
                            })
                        }, t.getIsClipResolved = function(e) {
                            var n = t.getClipCreationState(e);
                            return t.getRawMediaExists(e) && (n === T.j.CREATED || n === T.j.FAILED)
                        }, t.getIsCreationFailed = function(e) {
                            return t.getRawMediaExists(e) && t.getClipCreationState(e) === T.j.FAILED
                        }, t.getClipCreationState = function(e) {
                            return e.rawMediaPolling.clip && e.rawMediaPolling.clip.rawMedia && e.rawMediaPolling.clip.rawMedia.status || ""
                        }, t.getRawMediaExists = function(e) {
                            return Boolean(e.rawMediaPolling.clip && e.rawMediaPolling.clip.rawMedia)
                        }, t.hideTransitioningState = function() {
                            t.setState({
                                hideContent: !0,
                                shouldAnimate: !0
                            }), setTimeout(function() {
                                t.setState({
                                    hideContent: !1
                                })
                            }, 200)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.maybeRedirectToView(this.props), this.getIsClipResolved(this.props) ? this.props.rawMediaPolling.stopPolling() : this.timeoutID = setTimeout(function() {
                            return e.setState({
                                isPollingTimedOut: !0
                            })
                        }, 7e4)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.maybeRedirectToView(e), !this.props.isPostEdit && e.isPostEdit && (this.hideTransitioningState(), this.setState({
                            editing: {
                                isPostEdit: !0
                            }
                        })), this.getIsClipResolved(e) && (this.props.rawMediaPolling.stopPolling(), clearTimeout(this.timeoutID), this.props.latencyTracking.reportInteractive())
                    }, t.prototype.componentWillUnmount = function() {
                        this.timeoutID && clearTimeout(this.timeoutID), this.props.rawMediaPolling.stopPolling()
                    }, t.prototype.componentDidUpdate = function() {
                        var e = this.getIsClipResolved(this.props) && !this.getIsCreationFailed(this.props);
                        if (!this.props.isPostEdit && !this.hasSentEditClip && e && this.state.isPlayerLoaded && this.props.rawMediaPolling.clip && this.props.rawMediaPolling.clip.rawMedia) {
                            var t = this.props.rawMediaPolling.clip.rawMedia,
                                n = t.defaultClipInitialOffset,
                                i = t.duration,
                                r = t.videoURL,
                                a = C(n, i);
                            this.setState({
                                editing: {
                                    startOffset: a.startOffset,
                                    endOffset: a.endOffset,
                                    videoUrl: r,
                                    slug: this.props.slug
                                }
                            }), this.hasSentEditClip = !0
                        }
                    }, t.prototype.render = function() {
                        var e = this;
                        if (this.state.isPollingTimedOut || this.getIsCreationFailed(this.props)) return o.createElement(g.a, {
                            to: Object(m.h)(p.a.Default)
                        });
                        var t = this.props.data.clip,
                            n = this.props.rawMediaPolling.clip,
                            i = n && n.rawMedia,
                            r = this.getIsClipResolved(this.props),
                            a = null;
                        a = this.props.isPostEdit ? o.createElement(J, {
                            slug: this.props.slug
                        }) : o.createElement(w, {
                            isClipResolved: r,
                            slug: this.props.slug,
                            broadcasterName: t && t.broadcaster && t.broadcaster.displayName || "",
                            initialOffsetStart: i && i.defaultClipInitialOffset,
                            duration: i && i.duration,
                            setEditing: this.setEditing
                        });
                        var s = f("clips-edit-clip-wrapper", {
                            "clips-post-edit-clip-wrapper-hide": this.state.hideContent,
                            "clips-post-edit-clip-wrapper": this.props.isPostEdit
                        });
                        return o.createElement(R.Xa, null, o.createElement(x, {
                            showMessage: r,
                            isPostEdit: this.props.isPostEdit
                        }), o.createElement(E.a, {
                            "data-test-selector": G.HighlighterCTAExperimentTop,
                            name: y.b.VODKirk,
                            assignments: {
                                top: function() {
                                    return e.props.data.clip ? o.createElement(R.Xa, {
                                        padding: {
                                            top: 1,
                                            left: 2,
                                            right: 2
                                        }
                                    }, o.createElement(F, {
                                        clip: e.props.data.clip
                                    })) : null
                                },
                                fallback: function() {
                                    return null
                                }
                            }
                        }), o.createElement(R.i, {
                            duration: R.k.ExtraLong,
                            enabled: this.state.shouldAnimate,
                            fillMode: R.l.Both,
                            timing: R.m.EaseInOut,
                            type: R.n.SlideInBottom,
                            onAnimationEnd: this.onAnimationEnd
                        }, o.createElement(R.Xa, {
                            className: s,
                            padding: 2
                        }, o.createElement(R.yb, {
                            display: R.X.Flex,
                            border: this.props.isPostEdit
                        }, o.createElement(R.o, {
                            ratio: R.p.Aspect16x9
                        }, o.createElement(R.Xa, {
                            position: R.fb.Absolute,
                            fullHeight: !0,
                            fullWidth: !0
                        }, o.createElement(ae.a, {
                            slug: this.props.slug,
                            onLoaded: this.onLoaded,
                            playerType: O.e.ClipsEditing,
                            editing: this.state.editing
                        }))), this.props.isPostEdit && o.createElement(re, {
                            slug: this.props.slug,
                            createdAt: t && t.createdAt
                        })), a, o.createElement(E.a, {
                            "data-test-selector": G.HighlighterCTAExperimentBottom,
                            name: y.b.VODKirk,
                            assignments: {
                                bottom: function() {
                                    return e.props.data.clip ? o.createElement(R.yb, {
                                        borderTop: !0,
                                        padding: {
                                            top: 2
                                        },
                                        margin: {
                                            top: 2
                                        }
                                    }, o.createElement(F, {
                                        buttonType: R.F.Hollow,
                                        clip: e.props.data.clip
                                    })) : null
                                },
                                fallback: function() {
                                    return null
                                }
                            }
                        }))))
                    }, t.prototype.maybeRedirectToView = function(e) {
                        var t = e.data.clip && e.data.clip.isPublished,
                            n = e.data.clip && e.data.clip.curator && this.props.userLogin && e.data.clip.curator.login !== this.props.userLogin;
                        (t || n) && v.p.history.push("/" + e.slug)
                    }, t
                }(o.Component),
                ce = Object(h.compose)(Object(b.a)(se, {
                    name: "rawMediaPolling",
                    options: function(e) {
                        return {
                            pollInterval: 1e3,
                            fetchPolicy: "network",
                            variables: {
                                slug: e.slug
                            }
                        }
                    }
                }), Object(b.a)(oe, {
                    options: function(e) {
                        return {
                            variables: {
                                slug: e.slug
                            }
                        }
                    }
                }), Object(u.b)("EditClip"))(le),
                de = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.clipsMaintenance = Object(d.a)(), t.handleRedirect = function(e) {
                            if (t.clipsMaintenance) e.history.replace(Object(m.h)(p.a.ClipMaintenance));
                            else if ("/:slug/edit" === e.match.path) e.history.replace("/create", a.__assign({}, e.location.state, {
                                slug: e.match.params.slug
                            }));
                            else if (e.shouldRedirectToError) e.history.push(Object(m.h)(p.a.NotLoggedIn));
                            else if (!e.location.state || !e.location.state.slug) return e.history.push("/")
                        }, t.reportInteractive = function() {
                            t.props.latencyTracking.reportInteractive(1)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.handleRedirect(this.props), this.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.handleRedirect(e), this.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.location.state && this.props.location.state.slug;
                        return e ? o.createElement(R.Xa, null, o.createElement(ce, {
                            slug: e,
                            isPostEdit: !!this.props.location.state.isPostEdit,
                            userLogin: this.props.userLogin
                        })) : null
                    }, t = a.__decorate([Object(u.b)("ClipsEditingPage", {
                        destination: l.a.ClipsEditing
                    }), Object(s.a)({
                        location: c.PageviewLocation.ClipsEditing
                    })], t)
                }(o.Component);
            var ue = Object(i.connect)(function(e) {
                var t = Object(r.e)(e);
                return {
                    shouldRedirectToError: Object(r.h)(e) && !Object(r.f)(e),
                    userLogin: t && t.login
                }
            })(de);
            n.d(t, "ClipsCreate", function() {
                return ue
            })
        },
        "r/em": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("yR8l"),
                s = n("dIU+"),
                l = n("GnwI"),
                c = n("OTul"),
                d = n("Ue10"),
                u = n("1ZgY"),
                p = {
                    tt_content: "player_profile_img"
                },
                m = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.clip && this.props.data.clip.broadcaster && this.props.data.clip.broadcaster.login ? r.createElement(d.Xa, {
                            className: "clips-broadcaster-info",
                            padding: 1,
                            display: d.X.Flex,
                            alignItems: d.f.Center
                        }, r.createElement("a", {
                            target: "_blank",
                            href: Object(c.d)(this.props.data.clip.broadcaster.login, p)
                        }, r.createElement(d.q, {
                            src: this.props.data.clip.broadcaster.profileImageURL,
                            alt: Object(a.d)("Broadcaster Avatar", "ClipsBroadcasterInfo"),
                            size: 30
                        })), r.createElement(d.Xa, {
                            display: d.X.Flex,
                            flexDirection: d.Aa.Column,
                            flexGrow: 1,
                            margin: {
                                left: 1
                            },
                            ellipsis: !0
                        }, r.createElement("a", {
                            href: Object(c.d)(this.props.data.clip.broadcaster.login, p)
                        }, r.createElement(d.W, {
                            fontSize: d.Ca.Size4,
                            type: d.Ob.Span
                        }, this.props.data.clip.broadcaster.displayName), !(!this.props.data.clip.broadcaster.stream || !this.props.data.clip.broadcaster.stream.id) && r.createElement(d.Xa, {
                            margin: {
                                left: .5
                            },
                            display: d.X.InlineBlock
                        }, r.createElement(d.cb, {
                            label: Object(a.d)("LIVE", "ClipsBroadcasterInfo"),
                            type: d.db.Live
                        }))), r.createElement(d.Xa, null, r.createElement(d.W, {
                            color: d.O.Alt2,
                            fontSize: d.Ca.Size5,
                            ellipsis: !0
                        }, this.props.data.clip.game && Object(a.d)("playing {gameName}", {
                            gameName: r.createElement("a", {
                                target: "_blank",
                                href: Object(c.e)(this.props.data.clip.game.name, {
                                    tt_medium: "clips_web"
                                })
                            }, this.props.data.clip.game.displayName)
                        }, "ClipsBroadcasterInfo")))), r.createElement(d.Xa, {
                            flexShrink: 1
                        }, r.createElement(s.a, {
                            isHostedFollow: !1,
                            channelLogin: this.props.data.clip.broadcaster.login,
                            followUIType: s.b.IconAndText,
                            unfollowUIType: s.b.IconOnly,
                            showLoadingPlaceholder: !0
                        }))) : r.createElement(d.Xa, null, this.renderPlaceholders())
                    }, t.prototype.renderPlaceholders = function() {
                        return r.createElement(d.Xa, {
                            padding: 1,
                            display: d.X.Flex,
                            alignItems: d.f.Center
                        }, r.createElement(d.Xa, null, r.createElement(d.i, {
                            type: d.n.FadeIn,
                            duration: d.k.Long,
                            enabled: !0
                        }, r.createElement(d.eb, {
                            height: 30,
                            width: 30
                        }))), r.createElement(d.yb, {
                            fontSize: d.Ca.Size5,
                            flexGrow: 1,
                            margin: {
                                x: 1
                            }
                        }, r.createElement(d.i, {
                            type: d.n.FadeIn,
                            duration: d.k.Long,
                            enabled: !0
                        }, r.createElement(d.eb, {
                            lineCount: 1,
                            width: 80
                        })), r.createElement(d.i, {
                            type: d.n.FadeIn,
                            duration: d.k.Long,
                            delay: d.j.Short,
                            enabled: !0
                        }, r.createElement(d.eb, {
                            lineCount: 1,
                            width: 120
                        }))), r.createElement(d.Xa, null, r.createElement(d.i, {
                            type: d.n.FadeIn,
                            duration: d.k.Long,
                            enabled: !0
                        }, r.createElement(d.eb, {
                            height: 30,
                            width: 70
                        }))))
                    }, t = i.__decorate([Object(l.b)("ClipsBroadcasterInfo"), Object(o.a)(u)], t)
                }(r.Component);
            n.d(t, "a", function() {
                return m
            })
        },
        r62z: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "b", function() {
                return d
            }), n.d(t, "d", function() {
                return u
            });
            var i = n("+GjP"),
                r = "https://www.facebook.com/sharer/sharer.php",
                a = "https://www.twitter.com/share",
                o = "https://www.reddit.com/submit",
                s = "https://vk.com/share.php";

            function l(e) {
                return Object(i.e)(r, {
                    u: e
                })
            }

            function c(e, t) {
                return Object(i.e)(a, {
                    url: e,
                    text: t
                })
            }

            function d(e, t) {
                return Object(i.e)(o, {
                    url: e,
                    title: t
                })
            }

            function u(e) {
                return Object(i.e)(s, {
                    url: e
                })
            }
        },
        rb53: function(e, t, n) {},
        s8Ou: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportUser"
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
                                    value: "ReportContentInput"
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
                                value: "reportContent"
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
                                        value: "contentID"
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
                    end: 111
                }
            };
            n.loc.source = {
                body: "mutation ReportUserModal_ReportUser($input: ReportContentInput!) {\nreportContent(input: $input) {\ncontentID\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        sgJZ: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FollowButton_FollowEvent_User"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "id"
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
                                        value: "id"
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
                                        value: "isPartner"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "stream"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hosting"
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
                                                value: "stream"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 157
                }
            };
            n.loc.source = {
                body: "query FollowButton_FollowEvent_User($id: ID!) {\nuser(id: $id) {\nid\nisPartner\nstream {\nid\ngame {\nid\nname\n}\n}\nhosting {\nid\nstream {\nid\ngame {\nid\nname\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        tuvy: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return m
            }), n.d(t, "e", function() {
                return f
            }), n.d(t, "d", function() {
                return h
            }), n.d(t, "b", function() {
                return g
            }), n.d(t, "c", function() {
                return v
            });
            var i = n("/7QA"),
                r = n("D7An"),
                a = null,
                o = null,
                s = null,
                l = null,
                c = "variant_a",
                d = "variant1",
                u = "on",
                p = new RegExp("^/(" + ["overwatchleague", "overwatchleague_allaccess", "overwatchleague_kr", "overwatchleague_fr", "overwatchleague_zh", "overwatchleague_zhtw", "blizzheroes", "BlizzHeroesKR", "BlizzHeroesDE", "BlizzHeroesRU", "BlizzHeroesFR", "camhux", "Hgg_cheering_test", "PlayHearthstone", "PlayHearthstoneRU", "PlayhearthstoneKR", "PlayhearthstoneJP", "PlayHearthstoneFR", "Hearthstoneth", "Hearthstonezhtw"].join("|") + ")", "i");

            function m() {
                return null !== a ? a : a = i.p.experiments.getAssignment(r.b.FrenchVanilla) === c
            }

            function f() {
                return null !== o ? o : o = i.p.experiments.getAssignment(r.b.WatchSombra) === u
            }

            function h(e) {
                return !!e.match(p)
            }

            function g() {
                return null !== s ? s : s = i.p.experiments.getAssignment(r.b.VODVoltron) === d
            }

            function v() {
                return null !== l ? l : l = i.p.experiments.getAssignment(r.b.VODTopShelf) === u
            }
        },
        u0aY: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "e", function() {
                return o
            }), n.d(t, "f", function() {
                return s
            }), n.d(t, "d", function() {
                return l
            });
            var i = "core.gdpr.CONSENT_RESET",
                r = "core.gdpr.STATUS_UPDATED",
                a = "core.gdpr.VENDOR_PREFERENCES_UPDATED";

            function o(e) {
                return {
                    type: r,
                    status: e
                }
            }

            function s(e) {
                return {
                    type: a,
                    vendorPreferences: e
                }
            }

            function l() {
                return {
                    type: i
                }
            }
        },
        uX80: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("fvjX"),
                o = n("GnwI"),
                s = n("Ue10"),
                l = (n("TVuH"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.selectOnFocus = function(e) {
                            e.currentTarget.select(), t.props.onSelection && t.props.onSelection()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return r.createElement(s.Xa, i.__assign({
                            position: s.fb.Relative,
                            className: "selectable-input-wrapper"
                        }, Object(s.cc)(this.props)), r.createElement(s.Ra, {
                            type: s.Ta.Text,
                            value: this.props.text,
                            readOnly: !0,
                            onFocus: this.selectOnFocus,
                            icon: this.props.iconAsset,
                            id: this.props.id
                        }), this.props.children)
                    }, t
                }(r.Component)),
                c = Object(a.compose)(Object(o.b)("SelectableInput"))(l)
        },
        uYEN: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.Gray = 1] = "Gray", e[e.Purple = 100] = "Purple", e[e.Green = 1e3] = "Green", e[e.Blue = 5e3] = "Blue", e[e.Red = 1e4] = "Red", e[e.Yellow = 1e5] = "Yellow"
                }(i || (i = {}))
        },
        uy8m: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.Left = 0] = "Left", e[e.Middle = 1] = "Middle", e[e.Right = 2] = "Right", e[e.Back = 3] = "Back", e[e.Forward = 4] = "Forward"
                }(i || (i = {}))
        },
        v8tf: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsDownloadButton"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "broadcaster"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "videoQualities"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "sourceURL"
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
                    end: 131
                }
            };
            n.loc.source = {
                body: "query ClipsDownloadButton($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ngame {\nid\nname\n}\nvideoQualities {\nsourceURL\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        vRsq: function(e, t, n) {
            "use strict";
            n.d(t, "d", function() {
                return h
            }), n.d(t, "c", function() {
                return g
            }), n.d(t, "a", function() {
                return v
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "f", function() {
                return r
            }), n.d(t, "e", function() {
                return a
            }), n.d(t, "g", function() {
                return s
            }), n.d(t, "u", function() {
                return E
            }), n.d(t, "r", function() {
                return b
            }), n.d(t, "t", function() {
                return y
            }), n.d(t, "m", function() {
                return T
            }), n.d(t, "p", function() {
                return O
            }), n.d(t, "o", function() {
                return S
            }), n.d(t, "B", function() {
                return _
            }), n.d(t, "z", function() {
                return k
            }), n.d(t, "A", function() {
                return N
            }), n.d(t, "w", function() {
                return C
            }), n.d(t, "v", function() {
                return R
            }), n.d(t, "y", function() {
                return I
            }), n.d(t, "x", function() {
                return D
            }), n.d(t, "q", function() {
                return A
            }), n.d(t, "i", function() {
                return w
            }), n.d(t, "h", function() {
                return L
            }), n.d(t, "j", function() {
                return M
            }), n.d(t, "k", function() {
                return P
            }), n.d(t, "s", function() {
                return U
            }), n.d(t, "n", function() {
                return x
            }), n.d(t, "l", function() {
                return B
            });
            var i, r, a, o, s, l = n("cr+I"),
                c = n("/7QA"),
                d = n("QzU5"),
                u = n("+GjP"),
                p = n("DMoW"),
                m = n("tuvy"),
                f = n("XKWF"),
                h = "sort",
                g = "filter",
                v = "range";

            function E(e, t, n, i) {
                var a = i || b(t),
                    o = "";
                a && (o = "?" + h + "=" + function(e) {
                    switch (e) {
                        case f.a.Popular:
                            return r.Popular;
                        case f.a.Newest:
                            return r.Newest;
                        default:
                            var t = e;
                            return t
                    }
                }(a));
                var s = n ? n.toLowerCase() : function(e) {
                    var t = y(e);
                    return t ? t.toLowerCase() : "all"
                }(t);
                c.p.history.push(e + "/" + s + o)
            }

            function b(e) {
                var t = l.parse(e.location.search);
                return Object(f.b)(t.sort || "")
            }

            function y(e) {
                switch (e.match.params.filter) {
                    case d.a.Archive.toLowerCase():
                        return d.a.Archive;
                    case d.a.Highlight.toLowerCase():
                        return d.a.Highlight;
                    case d.a.Upload.toLowerCase():
                        return d.a.Upload;
                    case d.a.PastPremiere.toLowerCase():
                        return d.a.PastPremiere;
                    default:
                        return
                }
            }

            function T(e) {
                var t = l.parse(e.location.search);
                return e.match.params.collectionID || t.collection || null
            }

            function O(e) {
                return "" === e ? "" : e.startsWith("v") ? e : "v" + e
            }

            function S() {
                return Object(m.b)() ? "videos" : "videos/all"
            }

            function _(e) {
                switch (e) {
                    case d.a.Archive:
                        return a.PastBroadcasts;
                    case d.a.Highlight:
                        return a.Highlights;
                    case d.a.PastPremiere:
                        return a.PastPremieres;
                    case d.a.PremiereUpload:
                        return null;
                    case d.a.Upload:
                        return a.Uploads;
                    default:
                        return e
                }
            }

            function k(e) {
                switch (e) {
                    case a.Clips:
                        return o.Clips;
                    case a.Collections:
                        return o.Collections;
                    case a.Highlights:
                        return o.Highlights;
                    case a.PastBroadcasts:
                        return o.PastBroadcasts;
                    case a.PastPremieres:
                        return o.PastPremieres;
                    case a.Uploads:
                        return o.Uploads;
                    case a.All:
                        return o.All;
                    default:
                        return e
                }
            }

            function N(e) {
                switch (e) {
                    case o.Clips:
                        return a.Clips;
                    case o.Collections:
                        return a.Collections;
                    case o.Highlights:
                        return a.Highlights;
                    case o.PastBroadcasts:
                        return a.PastBroadcasts;
                    case o.PastPremieres:
                        return a.PastPremieres;
                    case o.Uploads:
                        return a.Uploads;
                    case o.All:
                        return a.All;
                    default:
                        return e
                }
            }

            function C(e) {
                return e.includes(o.Clips) ? o.Clips : e.includes(o.Collections) ? o.Collections : e.includes(o.Highlights) ? o.Highlights : e.includes(o.PastBroadcasts) ? o.PastBroadcasts : e.includes(o.PastPremieres) ? o.PastPremieres : e.includes(o.Uploads) ? o.Uploads : null
            }

            function R(e) {
                var t = Object(u.a)(e, v);
                if (!t) return null;
                switch (t.toLowerCase()) {
                    case i.All:
                        return i.All;
                    case i.Day:
                        return i.Day;
                    case i.Week:
                        return i.Week;
                    case i.Month:
                        return i.Month;
                    case i.Trending:
                        return i.Trending;
                    default:
                        return null
                }
            }

            function I(e) {
                var t = Object(u.a)(e, h);
                if (!t) return null;
                switch (t.toLowerCase()) {
                    case r.Newest:
                        return r.Newest;
                    case r.Popular:
                        return r.Popular;
                    default:
                        return null
                }
            }

            function D(e) {
                var t = Object(u.a)(e, g);
                if (!t) return null;
                switch (t.toLowerCase()) {
                    case a.Clips:
                        return a.Clips;
                    case a.Collections:
                        return a.Collections;
                    case a.Highlights:
                        return a.Highlights;
                    case a.PastBroadcasts:
                        return a.PastBroadcasts;
                    case a.PastPremieres:
                        return a.PastPremieres;
                    case a.Uploads:
                        return a.Uploads;
                    case a.All:
                        return a.All;
                    default:
                        return null
                }
            }

            function A(e, t) {
                var n = "" + S();
                t && t.filter && (n = t.filter);
                var i = "";
                return t && t.sort && (i = "?" + h + "=" + t.sort), "/" + e + "/" + n + i
            }

            function w(e, t, n) {
                return !t && n ? e ? "/" + e + "/" + s.Collection + "/" + n : "/collections/" + n : e ? "/" + e + "/" + s.Video + "/" + t + (n ? "?collection=" + n : "") : "/videos/" + t + (n ? "?collection=" + n : "")
            }

            function L(e, t) {
                return "/" + e + "/" + s.Clip + "/" + t
            }

            function M(e, t, n) {
                var i = "/" + e,
                    r = U(t),
                    a = function(e) {
                        return e.match.params.contentType === s.Clip && e.match.params.contentID || null
                    }(t),
                    o = x(t),
                    c = l.parse(t.location.search).collection;
                if (i = r ? i.concat("/" + s.Video + "/" + r + (c ? "?collection=" + c : "")) : a ? i.concat("/" + s.Clip + "/" + a) : o && !c ? i.concat("/" + s.Collection + "/" + o) : i.concat("/videos"), n) {
                    var d = F(n);
                    if (Object.keys(d).length > 0) return c ? i + "&" + l.stringify(d) : i + "?" + l.stringify(d)
                }
                return P(e, n)
            }

            function P(e, t) {
                var n = "/" + e + "/videos";
                if (t) {
                    var i = F(t);
                    if (Object.keys(i).length > 0) return n + "?" + l.stringify(i)
                }
                return n
            }

            function F(e) {
                var t = {};
                return e.sort && (t[h] = e.sort), e.filter && (t[g] = e.filter), e.range && (t[v] = e.range), t
            }

            function U(e) {
                return e.match.params.contentType === s.Video && e.match.params.contentID || e.match.params.videoID || null
            }

            function x(e) {
                var t = l.parse(location.search);
                return e.match.params.contentType === s.Collection && e.match.params.contentID || e.match.params.collectionID || t.collection || null
            }

            function B(e) {
                switch (e) {
                    case i.All:
                        return p.k.ALL_TIME;
                    case i.Day:
                        return p.k.LAST_DAY;
                    case i.Week:
                        return p.k.LAST_WEEK;
                    case i.Month:
                        return p.k.LAST_MONTH;
                    case i.Trending:
                        return p.k.TRENDING;
                    default:
                        return e
                }
            }! function(e) {
                e.All = "all", e.Month = "30d", e.Week = "7d", e.Day = "24hr", e.Trending = "trending"
            }(i || (i = {})),
            function(e) {
                e.Popular = "views", e.Newest = "time"
            }(r || (r = {})),
            function(e) {
                e.Clips = "clips", e.Collections = "collections", e.Highlights = "highlights", e.PastBroadcasts = "archives", e.PastPremieres = "past_premieres", e.Uploads = "uploads", e.All = "all"
            }(a || (a = {})),
            function(e) {
                e.Clips = "clips", e.Collections = "collections", e.Highlights = "videos/highlight", e.PastBroadcasts = "videos/archive", e.PastPremieres = "videos/past_premiere", e.Uploads = "videos/upload", e.All = "videos/all"
            }(o || (o = {})),
            function(e) {
                e.Video = "video", e.Clip = "clip", e.Collection = "collection"
            }(s || (s = {}))
        },
        vUXZ: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Clips_DeleteClips"
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
                                    value: "DeleteClipsInput"
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
                                value: "deleteClips"
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
                                        value: "clips"
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
                                                value: "slug"
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
                    end: 106
                }
            };
            n.loc.source = {
                body: "mutation Clips_DeleteClips($input: DeleteClipsInput!) {\ndeleteClips(input: $input) {\nclips {\nid\nslug\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        vhpE: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return m
            }), n.d(t, "a", function() {
                return f
            });
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("wbMx"),
                s = n("+GjP"),
                l = n("2xye"),
                c = n("MLDe"),
                d = n("McYG"),
                u = n("4L7N"),
                p = n("Ue10"),
                m = [{
                    type: o.b.Twitter,
                    params: {
                        tt_medium: "twtr"
                    }
                }, {
                    type: o.b.Facebook,
                    params: {
                        tt_medium: "fb"
                    }
                }, {
                    type: o.b.Reddit,
                    params: {
                        tt_medium: "redt"
                    }
                }, {
                    type: o.b.Copy
                }];
            ! function(e) {
                e.MainContainer = "main-container", e.DownloadButtonContainer = "download-button-container", e.ShareButtonTwitter = "share-button-twitter", e.ShareButtonFacebook = "share-button-facebook", e.ShareButtonReddit = "share-button-reddit", e.ShareButtonCopy = "share-button-copy"
            }(i || (i = {}));
            var f = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = {
                            margin: {
                                right: 1
                            }
                        },
                        t = {};
                    return this.props.asBalloon && (t = {
                        justifyContent: p.Wa.Between
                    }, e = {}), a.createElement(p.Xa, r.__assign({
                        className: "clips-social-share",
                        display: p.X.Flex,
                        flexWrap: p.Ba.NoWrap
                    }, t, {
                        "data-test-selector": i.MainContainer
                    }), a.createElement(p.Xa, r.__assign({
                        display: p.X.InlineBlock
                    }, e, {
                        "data-test-selector": i.DownloadButtonContainer
                    }), a.createElement(u.a, {
                        broadcasterLogin: this.props.clip.broadcaster && this.props.clip.broadcaster.login || "",
                        broadcasterId: this.props.clip.broadcaster && this.props.clip.broadcaster.id || "",
                        slug: this.props.clip.slug,
                        pageType: this.props.pageType
                    })), this.renderSocialButton(e, i.ShareButtonTwitter, o.b.Twitter, {
                        tt_medium: "twtr"
                    }), this.renderSocialButton(e, i.ShareButtonFacebook, o.b.Facebook, {
                        tt_medium: "fb"
                    }), this.renderSocialButton(e, i.ShareButtonReddit, o.b.Reddit, {
                        tt_medium: "redt"
                    }), this.renderSocialButton(e, i.ShareButtonCopy, o.b.Copy))
                }, t.prototype.renderSocialButton = function(e, t, n, i) {
                    var u = Object(s.e)(this.props.clip.url, i);
                    return this.props.pageType === l.PageviewLocation.ClipsWatchPage && this.props.clip.broadcaster && this.props.clip.broadcaster.login && (u = Object(s.e)(Object(d.a)(this.props.clip.slug, this.props.clip.broadcaster.login), i)), a.createElement(p.Xa, r.__assign({
                        key: n
                    }, e, {
                        "data-test-selector": t
                    }), a.createElement(o.a, {
                        key: n,
                        type: n,
                        text: this.props.clip.title,
                        url: u,
                        onShareClick: Object(c.c)(this.props.clip.id, this.props.clip.game && this.props.clip.game.name, this.props.clip.broadcaster && this.props.clip.broadcaster.id, this.props.clip.broadcaster && this.props.clip.broadcaster.login, this.props.pageType)
                    }))
                }, t
            }(a.Component)
        },
        "vl+S": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "WatchLivePrompt"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "durationSeconds"
                                    },
                                    arguments: [],
                                    directives: []
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
                                                value: "displayName"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
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
                                        value: "broadcaster"
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
                                                value: "stream"
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
                                            value: "86"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "45"
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
                    end: 188
                }
            };
            n.loc.source = {
                body: "query WatchLivePrompt($slug: ID!) {\nclip(slug: $slug) {\nid\ndurationSeconds\ngame {\ndisplayName\nid\n}\nbroadcaster {\nid\nlogin\ndisplayName\nstream {\nid\n}\n}\nthumbnailURL(width: 86 height: 45)\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        wC0O: function(e, t, n) {},
        wbMx: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return d
            });
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("Jxh/"),
                l = n("r62z"),
                c = n("Ue10");
            n("jeZI");
            ! function(e) {
                e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput", e[e.Download = 6] = "Download"
            }(i || (i = {}));
            var d = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderLink = function() {
                        var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                        return n.props.type === i.Download ? a.createElement("a", r.__assign({
                            href: n.props.url,
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(c.cc)(n.props), {
                            download: n.props.text
                        }), n.renderIcon()) : n.isLink() ? a.createElement("a", r.__assign({
                            href: n.getLinkTarget(),
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(c.cc)(n.props)), n.renderIcon()) : a.createElement("button", r.__assign({
                            onClick: n.copyPageUrl,
                            onMouseLeave: n.clearIsCopiedStatus,
                            className: e
                        }, Object(c.cc)(n.props)), n.renderIcon())
                    }, n.onShareClickHandler = function() {
                        n.props.onShareClick && n.props.onShareClick(n.props.type)
                    }, n.clearIsCopiedStatus = function() {
                        n.setState({
                            isCopied: !1
                        })
                    }, n.getUrl = function() {
                        return n.props.url || window.location.href
                    }, n.copyPageUrl = function(e) {
                        e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(s.a)(n.getUrl()), n.setState({
                            isCopied: !0
                        })
                    }, n.renderIcon = function() {
                        var e = n.getAssetFromType();
                        return a.createElement(c.Xa, {
                            className: "social-button__icon " + n.addSocialClassModifier("social-button__icon"),
                            display: c.X.Flex,
                            alignItems: c.f.Center,
                            justifyContent: c.Wa.Center
                        }, a.createElement(c.ob, {
                            asset: e
                        }))
                    }, n.isLink = function() {
                        return n.props.type !== i.Copy
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
                                return Object(o.d)("Download", "SocialButton");
                            case i.Copy:
                                return n.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                            default:
                                return ""
                        }
                    }, n.getAssetFromType = function() {
                        switch (n.props.type) {
                            case i.Twitter:
                                return c.pb.Twitter;
                            case i.Facebook:
                                return c.pb.Facebook;
                            case i.VKontakte:
                                return c.pb.VKontakte;
                            case i.Reddit:
                                return c.pb.Reddit;
                            case i.Download:
                                return c.pb.Download;
                            case i.Copy:
                            default:
                                return c.pb.Copy
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
                            r = e.type,
                            a = n.getUrl(),
                            o = t || "";
                        switch (r) {
                            case i.Reddit:
                                return Object(l.b)(a, o);
                            case i.VKontakte:
                                return Object(l.d)(a);
                            case i.Facebook:
                                return Object(l.a)(a);
                            case i.Twitter:
                                return Object(l.c)(a, o);
                            default:
                                return ""
                        }
                    }, n.state = {
                        isCopied: !1
                    }, n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(c.Xa, {
                        className: "social-button"
                    }, a.createElement(c.Rb, {
                        label: this.getTooltipFromType(),
                        direction: c.Tb.Bottom
                    }, this.renderLink()))
                }, t
            }(a.Component)
        },
        xza4: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsCurator"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "curator"
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
                                        value: "champBadge"
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
                    end: 110
                }
            };
            n.loc.source = {
                body: "query ClipsCurator($slug: ID!) {\nclip(slug: $slug) {\nid\ncurator {\nid\ndisplayName\nlogin\n}\nchampBadge {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        y4Ne: function(e, t, n) {},
        ydo7: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsSocialShare"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "url"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "embedURL"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "broadcaster"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 124
                }
            };
            n.loc.source = {
                body: "query ClipsSocialShare($slug: ID!) {\nclip(slug: $slug) {\nid\nurl\nembedURL\ntitle\ngame {\nid\nname\n}\nbroadcaster {\nid\nlogin\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        zixI: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UnblockUser"
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
                                    value: "UnblockUserInput"
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
                                value: "unblockUser"
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
                                        value: "targetUser"
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
                    end: 100
                }
            };
            n.loc.source = {
                body: "mutation UnblockUser($input: UnblockUserInput!) {\nunblockUser(input: $input) {\ntargetUser {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        }
    }
]);