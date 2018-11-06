(window.webpackJsonp = window.webpackJsonp || []).push([
    [63], {
        "/HY+": function(e, t, n) {
            "use strict";
            var i = n("dAHa"),
                a = n("mrSG"),
                r = n("q1tI"),
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(u.Cb, {
                            className: "reporting-modal__container",
                            background: u.r.Base,
                            padding: {
                                x: 2,
                                y: 3
                            }
                        }, r.createElement(i.b, {
                            onClose: this.handleClose,
                            reportContext: this.props.reportContext,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        }), r.createElement(l.a, null))
                    }, t
                }(r.Component));
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
        "/nm5": function(e, t, n) {},
        "0FG4": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "b", function() {
                return c
            });
            var i, a = n("RcPG"),
                r = n("a1OF");
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
                                    "1x": Object(r.d)(t, 1),
                                    "2x": Object(r.d)(t, 2),
                                    "4x": Object(r.d)(t, 4)
                                },
                                themed: !1
                            },
                            alt: e
                        }
                    }(e, s.id);
                    return {
                        type: a.a.Emote,
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
                    var a = i[n];
                    if (a && a.emotes)
                        for (var r = 0, s = a.emotes; r < s.length; r++) {
                            var c = s[r];
                            if (c && c.id && c.token)
                                for (var d = 0, u = l[c.token] || [c.token]; d < u.length; d++) {
                                    var p = u[d];
                                    t[p] && a.id === o || (t[p] = {
                                        id: c.id,
                                        token: p
                                    })
                                }
                        }
                }
                return t
            }
        },
        "0INk": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "a", function() {
                return d
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                r = n("2xye"),
                o = n("gAd6"),
                s = function() {
                    var e = a.o.getLastPageview();
                    return e && e.location || r.PageviewLocation.None
                },
                l = function(e) {
                    a.o.trackItemSectionClick({
                        carousel_content: r.PageviewContent.Video,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: r.PageviewContent.PreviewCardGameName,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: r.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                c = function(e) {
                    a.o.trackItemSectionClick({
                        carousel_content: r.PageviewContent.PreviewCardGameBalloonGame,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: r.PageviewContent.PreviewCardGameBalloonGame,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: r.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                d = function(e) {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, l, c, d, u = this;
                        return i.__generator(this, function(p) {
                            switch (p.label) {
                                case 0:
                                    return p.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return i.__awaiter(u, void 0, void 0, function() {
                                            var t;
                                            return i.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, a.p.apollo.client.query({
                                                            query: o,
                                                            variables: {
                                                                name: e
                                                            }
                                                        })];
                                                    case 1:
                                                        return [2, (t = n.sent().data).game && t.game.id]
                                                }
                                            })
                                        })
                                    }), [4, Promise.all(t)];
                                case 1:
                                    return n = p.sent(), l = n.filter(function(e) {
                                        return !!e
                                    }), c = l.map(function() {
                                        return r.TwitchDataType.Game
                                    }), d = l.map(function() {
                                        return null
                                    }), a.o.trackItemSectionLoad({
                                        carousel_content: r.PageviewContent.PreviewCardGameBalloonGame,
                                        rendered_item_count: l.length,
                                        rendered_item_list: l,
                                        rendered_item_types: c,
                                        rendered_items_viewcounts: d,
                                        location: s()
                                    }), [3, 3];
                                case 2:
                                    return p.sent(), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }
        },
        "0Rl0": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("q1tI"),
                a = n("Ue10"),
                r = function() {
                    return i.createElement(a.G, null, i.createElement(a.o, {
                        ratio: a.p.Aspect16x9
                    }, i.createElement(a.gb, null)), i.createElement(a.H, null, i.createElement(a.Xa, {
                        display: a.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(a.Xa, {
                        display: a.X.InlineBlock,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, i.createElement(a.gb, {
                        width: 40,
                        height: 56
                    })), i.createElement(a.Xa, {
                        display: a.X.InlineBlock,
                        margin: {
                            top: 1
                        }
                    }, i.createElement(a.W, null, i.createElement(a.gb, {
                        width: 150
                    })), i.createElement(a.W, {
                        fontSize: a.Ca.Size7
                    }, i.createElement(a.gb, {
                        width: 100
                    }))))))
                }
        },
        "0T/G": function(e, t) {},
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
                    end: 176
                }
            };
            n.loc.source = {
                body: "query ReportUserModal_ReportUserData($targetUserID: ID!) {\ntargetUser: user(id: $targetUserID lookupType: ALL) {\nid\nlogin\ndisplayName\n}\ncurrentUser {\nid\nblockedUsers {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "2hLa": function(e, t, n) {},
        "3Bft": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var i = {
                Prime: "prime",
                Tier1: "1000",
                Tier2: "2000",
                Tier3: "3000",
                Custom: "Custom"
            }
        },
        "41XU": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChannelBanner"
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
                    end: 100
                }
            };
            n.loc.source = {
                body: "query ChannelBanner($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nlogin\nbannerImageURL\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "4c/Z": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/7QA"),
                o = n("ZDlU"),
                s = n("yR8l"),
                l = n("V+GM"),
                c = n("NvVO"),
                d = n("2xye"),
                u = n("GnwI"),
                p = n("8/mp"),
                m = n("Bh3T"),
                h = n("irYM"),
                v = n("LfZz"),
                g = n("Jhye"),
                f = n("ug+5"),
                b = n("RcPG"),
                k = n("a1OF");
            n("p52R"), n("ZtEv"), n("60o1");

            function y(e) {
                var t = {};
                return e.forEach(function(e) {
                    t[e.from] = {
                        startIndex: e.from,
                        id: e.emoteID
                    }
                }), t
            }
            var C = n("Ue10"),
                E = /^(https?:\/\/)?(www.)?twitch\.tv/;

            function S(e, t, n, i) {
                void 0 === t && (t = []);
                for (var r, o = [], s = e.split(/\n/), l = function(e, l) {
                        if (e > 0 && (l += s[e - 1].length + 1), i && "" === s[e]) return o.push(a.createElement(C.W, {
                            key: e
                        }, "\n")), r = l, "continue";
                        var c = t.map(function(e) {
                                return function(e, t) {
                                    return {
                                        emoteID: e.emoteID,
                                        from: e.from - t,
                                        to: e.to - t,
                                        setID: e.setID
                                    }
                                }(e, l)
                            }).filter(function(t) {
                                return ! function(e, t) {
                                    return e.from < 0 || e.from >= t || e.to < 0 || e.to >= t
                                }(t, s[e].length)
                            }),
                            d = Object(k.e)(s[e], y(c), 0, {}, !1, n);
                        o.push(a.createElement(C.W, {
                            key: e
                        }, function(e) {
                            for (var t = [], n = 0; n < e.length; n++) {
                                var i = e[n];
                                switch (i.type) {
                                    case b.a.ClipLink:
                                        t.push(a.createElement("a", {
                                            key: n,
                                            href: i.content.url,
                                            target: "_blank"
                                        }, i.content.url));
                                        break;
                                    case b.a.VideoLink:
                                    case b.a.Link:
                                        i.content.url.match(E) ? t.push(a.createElement(C.U, {
                                            key: n,
                                            to: i.content.url.replace(E, "")
                                        }, i.content.displayText)) : t.push(a.createElement("a", {
                                            key: n,
                                            href: i.content.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer"
                                        }, i.content.displayText));
                                        break;
                                    case b.a.Mention:
                                        t.push(a.createElement(C.U, {
                                            key: n,
                                            to: "/" + i.content.recipient
                                        }, i.content.recipient));
                                        break;
                                    case b.a.Emote:
                                        i.content.images.themed || t.push(a.createElement("img", {
                                            key: n,
                                            src: i.content.images.sources["1x"],
                                            alt: i.content.alt
                                        }));
                                        break;
                                    case b.a.Text:
                                        t.push(a.createElement("span", {
                                            key: n
                                        }, i.content))
                                }
                            }
                            return t
                        }(d))), r = l
                    }, c = 0, d = 0; c < s.length; c++) l(c, d), d = r;
                return o
            }
            n("z8L7");
            var w, _, N, T, O = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = Object(r.d)("No description listed", "EventLandingDescription");
                        return "" !== this.props.description && (e = this.props.description), a.createElement(C.Xa, null, a.createElement(C.W, {
                            transform: C.Sb.Uppercase,
                            type: C.Tb.H5,
                            color: C.O.Alt2
                        }, Object(r.d)("Description", "EventLandingDescription")), a.createElement(C.Xa, {
                            margin: {
                                top: 1
                            },
                            className: "event-landing-description__text"
                        }, S(e, [], "", !0)))
                    }, t = i.__decorate([Object(u.b)("EventLandingDescription")], t)
                }(a.Component),
                I = Object(u.b)("TimetableHeader", {
                    autoReportInteractive: !0
                })(function(e) {
                    var t = a.createElement(h.a, {
                        eventID: e.event.id,
                        eventTypename: "EventCollection",
                        areNotificationsEnabled: e.event.self.isFollowing,
                        channelID: e.event.owner && e.event.owner.id || void 0,
                        channelLogin: e.event.owner && e.event.owner.login || void 0,
                        eventLocation: f.a.EventDetails
                    });
                    e.event.isLive && (t = a.createElement(C.z, {
                        linkTo: {
                            pathname: "/" + e.event.liveChannelLogin,
                            state: {
                                content: "call_to_action",
                                medium: "event_page"
                            }
                        }
                    }, Object(r.d)("Watch Now", "TimetableHeader")));
                    var n = a.createElement(C.Xa, {
                            display: C.X.Flex
                        }, a.createElement(C.Xa, {
                            margin: {
                                right: 1
                            }
                        }, t), a.createElement(C.Xa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(g.a, {
                            id: e.event.id,
                            title: e.event.title,
                            eventLocation: f.a.EventDetails
                        })), e.event.owner && a.createElement(v.a, {
                            targetUser: {
                                id: e.event.owner.id,
                                displayName: e.event.owner.displayName
                            },
                            eventID: e.event.id,
                            balloonDirection: C.v.Bottom
                        })),
                        i = a.createElement(C.Xa, null, Object(r.d)("To Be Announced", "TimetableHeader"));
                    e.event.startAt && (i = e.event.isLive ? a.createElement(C.Xa, {
                        display: C.X.Flex
                    }, a.createElement(C.Xa, null, a.createElement(C.K, {
                        status: C.M.Live
                    })), a.createElement(C.Cb, {
                        margin: {
                            left: .5
                        }
                    }, a.createElement(C.W, null, Object(r.d)("Happening Now", "TimetableHeader")))) : a.createElement(C.Xa, null, a.createElement(C.W, null, Object(r.j)(e.event.startAt, {
                        weekday: "long",
                        month: "short",
                        day: "numeric"
                    }))));
                    var o = null;
                    if (e.event.startAt && e.event.endAt) {
                        var s = Object(r.j)(e.event.endAt, {
                            weekday: "long",
                            month: "short",
                            day: "numeric",
                            timeZoneName: "short"
                        });
                        o = a.createElement(C.Xa, null, a.createElement(C.W, null, Object(r.d)("to {endDate}", {
                            endDate: s
                        }, "TimetableHeader")))
                    }
                    return a.createElement(C.Xa, {
                        margin: .5
                    }, a.createElement(C.Cb, {
                        border: !0,
                        background: C.r.Base
                    }, a.createElement(C.Xa, null, a.createElement("img", {
                        src: e.event.imageURL
                    })), a.createElement(C.Xa, {
                        margin: 1
                    }, a.createElement(C.Cb, {
                        borderBottom: !0,
                        padding: {
                            y: 1
                        }
                    }, a.createElement(C.W, {
                        type: C.Tb.H3
                    }, e.event.title)), a.createElement(C.Cb, {
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            y: .5
                        }
                    }, i, o), a.createElement(C.Xa, {
                        margin: {
                            y: 1
                        }
                    }, n))), a.createElement(C.Cb, {
                        border: !0,
                        background: C.r.Base,
                        margin: {
                            top: 1
                        }
                    }, a.createElement(C.Xa, {
                        margin: 1
                    }, a.createElement(O, {
                        description: e.event.description
                    }))))
                }),
                R = n("ZbA5"),
                L = n("oB8h"),
                x = n("yWUM"),
                F = n("TSYQ"),
                D = n("hyVY"),
                A = (n("Ljgq"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hovered: !1,
                            didAnimatedPreviewLoad: !1,
                            didAnimatedPreviewFailToLoad: !1
                        }, t.onMouseEnterHandler = function() {
                            t.setState({
                                hovered: !0
                            })
                        }, t.onMouseLeaveHandler = function() {
                            t.setState({
                                hovered: !1
                            })
                        }, t.onPreviewImageLoad = function(e) {
                            t.props.latencyTracking.reportInteractive(), e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                                didAnimatedPreviewLoad: !0
                            })
                        }, t.onPreviewImageLoadError = function(e) {
                            e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                                didAnimatedPreviewFailToLoad: !0
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = "?t=";
                        return this.props.offsetSeconds && this.props.offsetSeconds > 0 && (e += Object(x.a)(this.props.offsetSeconds)), a.createElement("div", i.__assign({
                            onMouseEnter: this.onMouseEnterHandler,
                            onMouseLeave: this.onMouseLeaveHandler
                        }, Object(C.hc)(this.props)), a.createElement(C.G, null, a.createElement(C.U, {
                            to: {
                                pathname: "/videos/" + this.props.video.id,
                                search: e,
                                state: this.props.tracking
                            },
                            title: this.props.video.title || "",
                            "data-test-selector": "preview-image-link",
                            hoverUnderlineNone: !0
                        }, a.createElement(C.Xa, {
                            fullWidth: !0
                        }, a.createElement(C.o, {
                            overflow: !0
                        }, a.createElement("div", null, a.createElement(C.Cb, {
                            display: C.X.InlineFlex,
                            position: C.hb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: .5,
                            zIndex: C.gc.Default,
                            fontSize: C.Ca.Size6,
                            background: C.r.Overlay,
                            color: C.O.Overlay,
                            className: "event-video-card__preview-overlay-stat"
                        }, a.createElement(C.Bb, {
                            "data-test-selector": "video-view-count",
                            icon: C.rb.GlyphViews,
                            label: Object(r.d)("views", "EventVideoCard"),
                            value: Object(r.g)(this.props.video.viewCount || 0)
                        })), a.createElement(C.Cb, {
                            display: C.X.InlineFlex,
                            position: C.hb.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            margin: .5,
                            zIndex: C.gc.Default,
                            fontSize: C.Ca.Size6,
                            background: C.r.Overlay,
                            color: C.O.Overlay,
                            className: "event-video-card__preview-overlay-stat"
                        }, a.createElement(C.Bb, {
                            "data-test-selector": "video-length",
                            icon: C.rb.GlyphLength,
                            label: Object(r.d)("length", "EventVideoCard"),
                            value: Object(D.b)(this.props.video.lengthSeconds || 0)
                        })), this.videoPreviewImage()))))))
                    }, t.prototype.videoPreviewImage = function() {
                        var e = this.state.hovered && !this.state.didAnimatedPreviewFailToLoad ? this.props.video.animatedPreviewURL : this.props.video.previewThumbnailURL,
                            t = F("event-video-card__image-wrapper"),
                            n = F("event-video-card__preview-image", {
                                "event-video-card__preview-image--animated": this.state.hovered && this.state.didAnimatedPreviewLoad
                            });
                        return a.createElement(C.o, {
                            overflow: !0
                        }, a.createElement("div", {
                            className: t
                        }, a.createElement(C.Pa, {
                            flexShrink: 0
                        }, a.createElement("figure", null, a.createElement(C.o, {
                            ratio: C.p.Aspect16x9
                        }, a.createElement("img", {
                            alt: this.props.video.title || "",
                            className: n,
                            "data-test-selector": "preview-image",
                            onLoad: this.onPreviewImageLoad,
                            onError: this.onPreviewImageLoadError,
                            src: e || ""
                        }))))))
                    }, t
                }(a.Component)),
                U = Object(u.b)("EventVideoCard")(A);

            function P(e) {
                var t = null;
                e.videos && e.videos.edges && e.videos.edges.length > 0 && (t = function(e) {
                    var t = e.offsetSeconds,
                        n = e.node,
                        i = null;
                    if (n) {
                        var a = null;
                        n.owner && n.owner.displayName && n.owner.id && n.owner.login && (a = n.owner), i = {
                            __typename: "Video",
                            id: n.id,
                            game: null,
                            lengthSeconds: n.lengthSeconds || 0,
                            owner: a,
                            animatedPreviewURL: n.animatedPreviewURL,
                            previewThumbnailURL: n.previewThumbnailURL,
                            publishedAt: n.publishedAt || "",
                            self: null,
                            title: n.title || "",
                            viewCount: n.viewCount || 0,
                            restriction: null,
                            contentTags: null
                        }
                    }
                    return {
                        offsetSeconds: t,
                        node: i
                    }
                }(e.videos.edges[0]));
                var n = null;
                null !== e.channel && (n = {
                    id: e.channel.id || "",
                    login: e.channel.login || "",
                    displayName: e.channel.displayName || "",
                    profileImageURL: e.channel.profileImageURL || ""
                });
                var i = null;
                null !== e.owner && (i = {
                    id: e.owner.id || "",
                    login: e.owner.login || "",
                    displayName: e.owner.displayName || ""
                });
                var a = null;
                null !== e.game && (a = {
                    id: e.game.id,
                    name: e.game.name,
                    displayName: e.game.displayName || e.game.name,
                    boxArtURL: e.game.boxArtURL || ""
                });
                var r = _.SINGLE;
                return "PREMIERE" === e.type && (r = _.PREMIERE), {
                    id: e.id,
                    type: r,
                    owner: i,
                    title: e.title,
                    description: e.description,
                    imageURL: e.imageURL,
                    startAt: e.startAt,
                    endAt: e.endAt,
                    channel: n,
                    game: a,
                    self: {
                        isFollowing: e.self && e.self.isFollowing || !1
                    },
                    parent: e.parent,
                    video: t,
                    premiere: function(e) {
                        if (!e.premiere) return null;
                        return {
                            status: e.premiere.status,
                            pastPremiere: e.premiere.pastPremiere
                        }
                    }(e)
                }
            }

            function j(e, t) {
                var n = new Date;
                return t && (n = t),
                    function(e, t) {
                        if (t < e.endAt) return e.premiere ? e.premiere.status === N.STARTED : t > e.startAt;
                        return !1
                    }(e, n) ? T.LIVE : function(e, t) {
                        if (e.premiere) return t < e.endAt;
                        return t < e.startAt
                    }(e, n) ? T.FUTURE : T.PAST
            }! function(e) {
                e.EVENT_LEAF = "EventLeaf", e.EVENT_COLLECTION = "EventCollection"
            }(w || (w = {})),
            function(e) {
                e.PREMIERE = "Premiere", e.SINGLE = "Live Stream"
            }(_ || (_ = {})),
            function(e) {
                e.UNSCHEDULED = "UNSCHEDULED", e.SCHEDULED = "SCHEDULED", e.CANCELLED = "CANCELLED", e.STARTED = "STARTED", e.SUCCESS = "SUCCESS", e.FAILED = "FAILED", e.UNKNOWN = "UNKNOWN"
            }(N || (N = {})),
            function(e) {
                e.LIVE = "LIVE", e.FUTURE = "FUTURE", e.PAST = "PAST"
            }(T || (T = {}));
            n("9Gue");
            var M = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onExpandClick = function() {
                            return t.props.onExpand(t.props.event.id)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.expanded ? this.expandedSegment() : this.collapsedSegment()
                    }, t.prototype.collapsedSegment = function() {
                        var e = Object(r.c)(this.props.event.startAt, {
                                month: "short"
                            }),
                            t = Object(r.c)(this.props.event.startAt, {
                                day: "numeric"
                            }),
                            n = j({
                                startAt: this.props.event.startAt,
                                endAt: this.props.event.endAt
                            }),
                            i = null;
                        n === T.LIVE && (i = a.createElement(C.Xa, {
                            flexShrink: 0
                        }, a.createElement(C.eb, {
                            label: Object(r.d)("Live", "EventLandingPage"),
                            type: C.fb.Live
                        })));
                        var o, s, l = a.createElement(C.Cb, {
                            display: C.X.Flex,
                            borderBottom: !0,
                            padding: {
                                y: 1
                            }
                        }, a.createElement("button", {
                            "data-test-selector": "collapsed-segment-title",
                            onClick: this.onExpandClick
                        }, a.createElement(C.W, {
                            className: "timetable-segment__title-link",
                            bold: !0,
                            color: C.O.Link,
                            type: C.Tb.H5,
                            ellipsis: !0
                        }, this.props.event.title)));
                        i && (l = a.createElement(C.Cb, {
                            borderBottom: !0,
                            padding: {
                                y: 1
                            },
                            display: C.X.Flex,
                            flexWrap: C.Ba.NoWrap,
                            alignItems: C.f.Center
                        }, i, a.createElement(C.Xa, {
                            display: C.X.Flex,
                            margin: {
                                left: .5
                            }
                        }, a.createElement("button", {
                            onClick: this.onExpandClick
                        }, a.createElement(C.W, {
                            className: "timetable-segment__title-link",
                            bold: !0,
                            color: C.O.Link,
                            type: C.Tb.H5,
                            ellipsis: !0
                        }, this.props.event.title))))), this.props.event.channel && (o = this.props.event.channel.id || void 0, s = this.props.event.channel.login || void 0);
                        var c = a.createElement(h.a, {
                            eventID: this.props.event.id,
                            eventTypename: "EventLeaf",
                            areNotificationsEnabled: this.props.event.self.isFollowing,
                            eventLocation: f.a.EventDetails,
                            channelID: o,
                            channelLogin: s,
                            small: !0
                        });
                        n === T.LIVE ? c = a.createElement(C.Xa, null, a.createElement(C.z, {
                            linkTo: {
                                pathname: "/" + s,
                                state: {
                                    content: "call_to_action",
                                    medium: "event_page"
                                }
                            },
                            size: C.D.Small
                        }, this.getWatchNowText())) : n === T.PAST && (c = null);
                        var d = null;
                        return this.props.event.game && (d = a.createElement(a.Fragment, null, a.createElement(C.Xa, {
                            margin: {
                                x: 1
                            }
                        }, "•"), a.createElement(C.Xa, {
                            margin: {
                                right: 1
                            },
                            display: C.X.Flex,
                            alignItems: C.f.Center,
                            overflow: C.cb.Hidden
                        }, a.createElement(C.Xa, {
                            margin: {
                                right: .5
                            }
                        }, a.createElement(C.Cb, {
                            display: C.X.Flex,
                            alignItems: C.f.Center,
                            color: C.O.Alt2
                        }, a.createElement(C.qb, {
                            asset: C.rb.NavGames,
                            width: 18,
                            height: 18
                        }))), a.createElement(C.W, {
                            fontSize: C.Ca.Size5,
                            ellipsis: !0
                        }, a.createElement(C.U, {
                            to: "/directory/game/" + encodeURIComponent(this.props.event.game.name)
                        }, this.props.event.game.displayName))))), a.createElement("div", null, a.createElement(C.Cb, {
                            className: "timetable-segment__row",
                            border: !0,
                            fullWidth: !0,
                            margin: {
                                y: 1
                            },
                            display: C.X.Flex,
                            flexWrap: C.Ba.NoWrap,
                            alignItems: C.f.Center,
                            background: C.r.Base
                        }, a.createElement(C.Xa, {
                            className: "timetable-segment__calendar-date",
                            display: C.X.Flex,
                            flexShrink: 0,
                            flexDirection: C.Aa.Column,
                            justifyContent: C.Wa.Center,
                            alignItems: C.f.Center
                        }, a.createElement(C.W, {
                            fontSize: C.Ca.Size6,
                            transform: C.Sb.Uppercase
                        }, e), a.createElement(C.W, {
                            fontSize: C.Ca.Size3
                        }, t)), a.createElement(C.Xa, {
                            overflow: C.cb.Hidden,
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, l, a.createElement(C.Xa, {
                            display: C.X.Flex,
                            justifyContent: C.Wa.Between,
                            alignItems: C.f.Center,
                            flexWrap: C.Ba.NoWrap,
                            overflow: C.cb.Hidden
                        }, a.createElement(C.Xa, {
                            padding: {
                                y: 1
                            },
                            display: C.X.Flex,
                            overflow: C.cb.Hidden
                        }, a.createElement(C.Xa, {
                            flexShrink: 0
                        }, a.createElement(C.W, {
                            type: C.Tb.H5
                        }, Object(r.j)(this.props.event.startAt, {
                            weekday: "long",
                            timezoneName: "short"
                        }))), d), c))))
                    }, t.prototype.expandedSegment = function() {
                        var e, t, n = {
                                backgroundImage: "url(" + this.props.event.imageURL + ")"
                            },
                            i = j({
                                startAt: this.props.event.startAt,
                                endAt: this.props.event.endAt
                            });
                        this.props.event.channel && (e = this.props.event.channel.id || void 0, t = this.props.event.channel.login || void 0);
                        var o = a.createElement(h.a, {
                            eventID: this.props.event.id,
                            eventTypename: "EventSegment",
                            areNotificationsEnabled: this.props.event.self.isFollowing,
                            channelID: e,
                            channelLogin: t,
                            eventLocation: f.a.EventDetails
                        });
                        if (i === T.LIVE) o = a.createElement(C.z, {
                            linkTo: {
                                pathname: "/" + t,
                                state: {
                                    content: "call_to_action",
                                    medium: "event_page"
                                }
                            }
                        }, this.getWatchNowText());
                        else if (i === T.PAST && this.props.event.video && this.props.event.video.node) {
                            var s = "";
                            this.props.event.video.offsetSeconds && (s = "t=" + Object(x.a)(this.props.event.video.offsetSeconds)), o = a.createElement(C.z, {
                                linkTo: {
                                    pathname: "/videos/" + this.props.event.video.node.id,
                                    search: s,
                                    state: {
                                        content: d.PageviewContent.EventPast,
                                        medium: d.PageviewMedium.EventDetails
                                    }
                                }
                            }, Object(r.d)("Watch Video", "TimetableSegment"))
                        } else i === T.PAST && (o = a.createElement(C.z, {
                            disabled: !0
                        }, Object(r.d)("Past Event", "TimetableSegment")));
                        var l = null;
                        if (this.props.event.game && this.props.event.game.boxArtURL && (l = a.createElement(C.Xa, {
                                className: "timetable-segment__expanded-image",
                                flexShrink: 0,
                                margin: {
                                    right: 2
                                }
                            }, a.createElement("img", {
                                src: this.props.event.game.boxArtURL,
                                height: 130,
                                width: 93
                            }))), i === T.LIVE && this.props.event.channel && this.props.event.channel.stream && this.props.event.channel.stream.previewImageURL && (l = a.createElement(C.Xa, {
                                position: C.hb.Relative
                            }, a.createElement(C.Xa, {
                                position: C.hb.Absolute,
                                attachLeft: !0,
                                attachTop: !0,
                                padding: .5
                            }, a.createElement(R.a, {
                                type: L.a.Live
                            })), a.createElement("img", {
                                src: this.props.event.channel.stream.previewImageURL,
                                height: 120,
                                width: 190
                            }))), i === T.PAST && this.props.event.video && this.props.event.video.node) {
                            var c = {
                                content: d.PageviewContent.EventPast,
                                medium: d.PageviewMedium.EventDetails
                            };
                            l = a.createElement("div", {
                                className: "timetable-segment__video-embed"
                            }, a.createElement(U, {
                                video: this.props.event.video.node,
                                offsetSeconds: this.props.event.video.offsetSeconds,
                                tracking: c
                            }))
                        }
                        var u = a.createElement(C.W, {
                            color: C.O.Overlay
                        }, Object(r.j)(this.props.event.startAt, {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            timeZoneName: "short"
                        }));
                        i === T.LIVE && (u = a.createElement(C.Xa, {
                            position: C.hb.Relative
                        }, a.createElement(C.W, {
                            color: C.O.Overlay
                        }, "" + Object(r.c)(this.props.event.startAt, {
                            weekday: "long",
                            month: "long",
                            day: "numeric"
                        })), a.createElement(C.W, {
                            color: C.O.Overlay
                        }, Object(r.d)("Happening Now until", "TimeTableSegment") + " " + Object(r.j)(this.props.event.endAt, {
                            timeZoneName: "short"
                        }))));
                        var p = null;
                        return this.props.event.game && (p = a.createElement(C.Xa, {
                            className: "events-landing-collection__game-link",
                            margin: {
                                right: 1
                            },
                            display: C.X.Flex,
                            alignItems: C.f.Center
                        }, a.createElement(C.Xa, {
                            margin: {
                                right: .5
                            }
                        }, a.createElement(C.Cb, {
                            display: C.X.Flex,
                            alignItems: C.f.Center,
                            color: C.O.Alt2,
                            overflow: C.cb.Hidden
                        }, a.createElement(C.qb, {
                            asset: C.rb.NavGames,
                            width: 18,
                            height: 18
                        }))), a.createElement(C.W, {
                            fontSize: C.Ca.Size5,
                            ellipsis: !0
                        }, a.createElement(C.U, {
                            to: "/directory/game/" + encodeURIComponent(this.props.event.game.name)
                        }, this.props.event.game.displayName)))), a.createElement(C.Cb, {
                            border: !0,
                            elevation: 2,
                            fullWidth: !0,
                            margin: {
                                y: 1
                            },
                            background: C.r.Base,
                            position: C.hb.Relative
                        }, a.createElement(C.Xa, {
                            position: C.hb.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            padding: {
                                top: .5,
                                right: .5
                            }
                        }, a.createElement(C.z, {
                            overlay: !0,
                            type: C.F.Text,
                            icon: C.rb.Close,
                            onClick: this.props.onDismissExpand
                        })), a.createElement(C.Cb, {
                            borderBottom: !0
                        }, a.createElement("div", {
                            style: n
                        }, a.createElement("div", {
                            className: "events-landing-collection__expanded-segment-header"
                        }, a.createElement(C.Xa, {
                            display: C.X.Flex,
                            alignItems: C.f.End,
                            flexWrap: C.Ba.NoWrap,
                            padding: {
                                top: 3,
                                x: 2,
                                bottom: 1
                            }
                        }, l, a.createElement(C.Xa, {
                            className: "events-landing-collection__meta",
                            flexGrow: 1
                        }, a.createElement(C.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(C.Xa, {
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(C.W, {
                            color: C.O.Overlay,
                            type: C.Tb.H3
                        }, this.props.event.title)), u), a.createElement(C.Xa, {
                            display: C.X.Flex,
                            alignItems: C.f.Center,
                            flexWrap: C.Ba.NoWrap,
                            justifyContent: C.Wa.Between
                        }, p, a.createElement(C.Xa, {
                            display: C.X.Flex,
                            flexWrap: C.Ba.NoWrap,
                            flexShrink: 0
                        }, a.createElement(C.Xa, {
                            margin: {
                                right: 1
                            }
                        }, o), a.createElement(C.Xa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(g.a, {
                            id: this.props.event.id,
                            title: this.props.event.title,
                            channelID: e,
                            channelLogin: t,
                            eventLocation: f.a.EventDetails
                        })), a.createElement(v.a, {
                            targetUser: {
                                id: t || "",
                                displayName: this.props.event.channel && this.props.event.channel.displayName || "User"
                            },
                            eventID: this.props.event.id,
                            balloonDirection: C.v.BottomRight,
                            tailOffset: 10
                        })))))))), a.createElement(C.Xa, {
                            margin: 2
                        }, a.createElement(O, {
                            description: this.props.event.description
                        })))
                    }, t.prototype.getWatchNowText = function() {
                        return Object(r.d)("Watch Now", "TimetableSegment")
                    }, t
                }(a.PureComponent),
                W = Object(u.b)("EventCollectionSegment", {
                    autoReportInteractive: !0
                })(M);

            function B(e) {
                return null !== e
            }
            var z = n("IxV+"),
                X = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.loadNextPage = function() {
                            return n.setState({
                                loadingForward: !0
                            }), n.props.loadNextPage()
                        }, n.loadPreviousPage = function() {
                            return n.setState({
                                loadingForward: !1
                            }), n.props.loadPreviousPage()
                        }, n.unexpand = function() {
                            n.setState({
                                expandedEvent: null
                            })
                        }, n.setExpanded = function(e) {
                            r.p.history.replace(i.__assign({}, r.p.history.location, {
                                state: i.__assign({}, r.p.history.location.state, {
                                    expandedSegmentID: e
                                })
                            })), n.setState({
                                expandedEvent: e
                            })
                        };
                        var a = null;
                        return n.props.defaultLeaves && n.props.defaultLeaves.length && (a = n.props.defaultLeaves[0].id), n.state = {
                            expandedEvent: a,
                            loadingForward: !0
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.props.eventLeaves && this.props.eventLeaves.length || null === this.state.expandedEvent && e.eventLeaves && e.eventLeaves.length && this.setState({
                            expandedEvent: e.eventLeaves[0].id
                        })
                    }, t.prototype.componentDidMount = function() {
                        this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props.eventLeaves.map(function(t) {
                                return a.createElement(W, {
                                    key: t.id,
                                    expanded: t.id === e.state.expandedEvent,
                                    event: t,
                                    onDismissExpand: e.unexpand,
                                    onExpand: e.setExpanded
                                })
                            }),
                            n = null;
                        this.props.hasPreviousPage && (n = a.createElement(C.Xa, {
                            fullWidth: !0,
                            display: C.X.Flex,
                            justifyContent: C.Wa.Center
                        }, a.createElement(C.z, {
                            type: C.F.Text,
                            icon: C.rb.GlyphArrUp,
                            onClick: this.loadPreviousPage
                        }, Object(r.d)("Load Earlier Events", "TimetableSchedule"))));
                        var i = null;
                        return this.props.loading && (i = a.createElement(C.Za, null)), a.createElement(C.Xa, {
                            className: "events-landing-collection__main-col",
                            position: C.hb.Relative,
                            margin: {
                                left: 3
                            }
                        }, a.createElement(C.Cb, {
                            display: C.X.Flex,
                            justifyContent: C.Wa.Between,
                            margin: {
                                y: 1
                            },
                            padding: {
                                bottom: 1
                            },
                            borderBottom: !0
                        }, a.createElement(C.W, {
                            transform: C.Sb.Uppercase,
                            color: C.O.Alt2,
                            type: C.Tb.H5
                        }, Object(r.d)("Schedule", "TimetableSchedule"))), a.createElement(C.Xa, null, n, !this.state.loadingForward && i, t, this.state.loadingForward && i, a.createElement(p.a, {
                            enabled: this.props.hasNextPage,
                            loadMore: this.loadNextPage
                        })))
                    }, t.prototype.onRender = function() {
                        this.props.eventLeaves.length && this.props.latencyTracking.reportInteractive()
                    }, t = i.__decorate([Object(s.a)(z, {
                        options: function(e) {
                            var t = null;
                            return e.defaultLeaves && e.defaultLeaves.length && (t = e.defaultLeaves[e.defaultLeaves.length - 1].id), {
                                variables: {
                                    eventID: e.event.id,
                                    nextCount: 10,
                                    nextCursor: "",
                                    prevCount: null,
                                    prevCursor: null,
                                    criteria: {
                                        firstPageOptions: {
                                            eventID: t,
                                            endsAfter: e.now
                                        }
                                    }
                                }
                            }
                        },
                        props: function(e) {
                            var t = e.ownProps.defaultLeaves || [];
                            return {
                                eventLeaves: function(e, t) {
                                    var n = new Map;
                                    return e.forEach(function(e) {
                                        n.set(e.id, e)
                                    }), e.concat(t.filter(function(e) {
                                        return !n.has(e.id)
                                    }))
                                }(function(e) {
                                    return (e.event && e.event.__typename === w.EVENT_COLLECTION && e.event.leaves && e.event.leaves.edges || []).map(function(e) {
                                        if (!e.node) return null;
                                        var t;
                                        if (!e.node.channel) return null;
                                        var n = null;
                                        e.node.channel.stream && (n = {
                                            previewImageURL: e.node.channel.stream.previewImageURL
                                        }), t = {
                                            id: e.node.channel.id || "",
                                            login: e.node.channel.login || "",
                                            displayName: e.node.channel.displayName || "",
                                            profileImageURL: e.node.channel.profileImageURL || "",
                                            stream: n
                                        };
                                        var i = null;
                                        e.node.game && (i = {
                                            id: e.node.game.id,
                                            name: e.node.game.name,
                                            displayName: e.node.game.displayName,
                                            boxArtURL: e.node.game.boxArtURL || ""
                                        });
                                        var a = null;
                                        return e.node.videos && e.node.videos.edges && e.node.videos.edges.length && (a = {
                                            node: e.node.videos.edges[0].node,
                                            offsetSeconds: e.node.videos.edges[0].offsetSeconds
                                        }), {
                                            id: e.node.id,
                                            title: e.node.title,
                                            description: e.node.description,
                                            imageURL: e.node.imageURL,
                                            startAt: new Date(e.node.startAt),
                                            endAt: new Date(e.node.endAt),
                                            channel: t,
                                            game: i,
                                            video: a,
                                            self: {
                                                isFollowing: e.node.self && e.node.self.isFollowing || !1
                                            }
                                        }
                                    }).filter(B)
                                }(e.data), t),
                                hasNextPage: e.data.event && e.data.event.__typename === w.EVENT_COLLECTION && e.data.event.leaves && e.data.event.leaves.pageInfo.hasNextPage,
                                hasPreviousPage: e.data.event && e.data.event.__typename === w.EVENT_COLLECTION && e.data.event.leaves && e.data.event.leaves.pageInfo.hasPreviousPage,
                                loading: e.data.loading,
                                loadNextPage: function() {
                                    return e.data.fetchMore({
                                        variables: {
                                            eventID: e.data.event && e.data.event.__typename === w.EVENT_COLLECTION && e.data.event.id,
                                            nextCount: 10,
                                            nextCursor: function(e) {
                                                return e.event && e.event.__typename === w.EVENT_COLLECTION && e.event.leaves && e.event.leaves.edges && 0 !== e.event.leaves.edges.length ? e.event.leaves.edges[e.event.leaves.edges.length - 1].cursor : ""
                                            }(e.data),
                                            prevCount: null,
                                            prevCursor: null
                                        },
                                        updateQuery: function(e, t) {
                                            var n = t.fetchMoreResult;
                                            if (!(n && n.event && e.event && n.event.__typename === w.EVENT_COLLECTION && e.event.__typename === w.EVENT_COLLECTION && e.event.leaves && n.event.leaves)) return e;
                                            var a = e.event.leaves.edges || [],
                                                r = n.event.leaves.edges || [];
                                            return i.__assign({}, e, {
                                                event: i.__assign({}, e.event, {
                                                    leaves: i.__assign({}, e.event.leaves, {
                                                        edges: a.concat(r),
                                                        pageInfo: i.__assign({}, e.event.leaves.pageInfo, {
                                                            hasNextPage: n.event.leaves.pageInfo.hasNextPage,
                                                            hasPreviousPage: e.event.leaves.pageInfo.hasPreviousPage
                                                        })
                                                    })
                                                })
                                            })
                                        }
                                    })
                                },
                                loadPreviousPage: function() {
                                    return e.data.fetchMore({
                                        variables: {
                                            eventID: e.data.event && e.data.event.__typename === w.EVENT_COLLECTION && e.data.event.id,
                                            nextCount: null,
                                            nextCursor: null,
                                            prevCount: 10,
                                            prevCursor: function(e) {
                                                return e.event && e.event.__typename === w.EVENT_COLLECTION && e.event.leaves && e.event.leaves.edges && 0 !== e.event.leaves.edges.length ? e.event.leaves.edges[0].cursor : ""
                                            }(e.data)
                                        },
                                        updateQuery: function(e, t) {
                                            var n = t.fetchMoreResult;
                                            if (!(n && n.event && e.event && n.event.__typename === w.EVENT_COLLECTION && e.event.__typename === w.EVENT_COLLECTION && e.event.leaves && n.event.leaves)) return e;
                                            var a = e.event.leaves.edges || [],
                                                r = n.event.leaves.edges || [];
                                            return i.__assign({}, e, {
                                                event: i.__assign({}, e.event, {
                                                    leaves: i.__assign({}, e.event.leaves, {
                                                        edges: r.concat(a),
                                                        pageInfo: i.__assign({}, e.event.leaves.pageInfo, {
                                                            hasNextPage: e.event.leaves.pageInfo.hasNextPage,
                                                            hasPreviousPage: n.event.leaves.pageInfo.hasPreviousPage
                                                        })
                                                    })
                                                })
                                            })
                                        }
                                    })
                                }
                            }
                        }
                    })], t)
                }(a.Component),
                V = Object(u.b)("EventCollectionSchedule")(X),
                G = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            now: new Date
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(V, i.__assign({}, this.props, {
                            now: this.state.now
                        }))
                    }, t
                }(a.Component),
                H = (n("gl36"), Object(u.b)("EventCollectionPageComponent", {
                    autoReportInteractive: !0
                })(function(e) {
                    return a.createElement(C.Xa, {
                        className: "events-landing-collection",
                        margin: {
                            top: 3
                        }
                    }, a.createElement(m.b, {
                        suppressScrollX: !0,
                        disableDebounce: !0
                    }), a.createElement(C.Xa, {
                        className: "events-landing-collection__info-col"
                    }, a.createElement(p.c, null, a.createElement(I, {
                        event: e.event
                    }))), a.createElement(G, {
                        event: e.event,
                        defaultLeaves: e.defaultLeaves
                    }))
                })),
                q = n("zxEZ"),
                Q = n("sSlw"),
                K = (n("jKKg"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            countdownActive: !0
                        }, t.cancelCountdown = function() {
                            t.setState({
                                countdownActive: !1
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = F({
                                "event-landing-action__progress": this.state.countdownActive
                            }),
                            t = "";
                        "function" == typeof r.d && (t = Object(r.d)("This event is Live! Head to the channel page to watch and chat.", "EventLandingAction"), this.state.countdownActive && (t = Object(r.d)("This event is Live! Redirecting to the channel page in 5 seconds.", "EventLandingAction")));
                        var n = a.createElement(C.Xa, {
                                margin: {
                                    left: 1
                                }
                            }, a.createElement(C.z, {
                                linkTo: {
                                    pathname: "/" + this.props.login,
                                    state: {
                                        content: "cancelled_countdown",
                                        medium: "event_page"
                                    }
                                }
                            }, Object(r.d)("Go to Channel", "EventLandingAction"))),
                            i = null;
                        this.state.countdownActive && (n = a.createElement(C.Xa, {
                            margin: {
                                left: 1
                            }
                        }, a.createElement(C.z, {
                            onClick: this.cancelCountdown
                        }, Object(r.d)("Cancel", "EventLandingAction"))), i = a.createElement(C.kb, {
                            animationDirection: C.lb.Down,
                            animationDuration: 5,
                            onAnimationEnd: this.props.onCountdownSuccess,
                            size: C.mb.Small
                        }));
                        var o = a.createElement(C.K, {
                            status: C.M.Live
                        });
                        return this.props.premiere && (o = a.createElement(C.qb, {
                            asset: C.rb.VideoPremiere,
                            type: C.sb.Live,
                            width: 10
                        })), a.createElement(C.Xa, null, a.createElement(C.Cb, {
                            display: C.X.Flex,
                            flexWrap: C.Ba.NoWrap,
                            border: !0,
                            margin: {
                                top: 2
                            },
                            alignItems: C.f.Center,
                            className: "event-landing-action__strip",
                            background: C.r.Base
                        }, a.createElement(C.Xa, {
                            display: C.X.InlineFlex,
                            flexShrink: 0,
                            margin: {
                                right: 1
                            }
                        }, o), a.createElement(C.Xa, {
                            className: "event-landing-action__message",
                            display: C.X.InlineFlex,
                            flexWrap: C.Ba.Wrap,
                            flexGrow: 1
                        }, t), a.createElement(C.Xa, {
                            display: C.X.InlineFlex,
                            flexShrink: 0
                        }, n)), a.createElement(C.Xa, {
                            className: e
                        }, i))
                    }, t
                }(a.Component)),
                $ = Object(u.b)("EventLandingAction")(K),
                Z = (n("2hLa"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = j({
                                startAt: new Date(this.props.startAt),
                                endAt: new Date(this.props.endAt),
                                premiere: this.props.premiere ? {
                                    status: this.props.premiere.status
                                } : void 0
                            }),
                            t = a.createElement(C.z, {
                                disabled: !0
                            }, Object(r.d)("Past Event", "EventLandingTitle"));
                        return e === T.LIVE ? t = a.createElement(C.z, {
                            linkTo: {
                                pathname: "/" + this.props.channel.login,
                                state: {
                                    content: "call_to_action",
                                    medium: "event_page"
                                }
                            }
                        }, Object(r.d)("Watch Now", "EventLandingTitle")) : e === T.FUTURE && (t = a.createElement(h.a, {
                            eventID: this.props.id,
                            eventTypename: "EventLeaf",
                            areNotificationsEnabled: !(!this.props.self || !this.props.self.isFollowing),
                            channelID: this.props.channel.id || "",
                            channelLogin: this.props.channel.login || "",
                            eventLocation: f.a.EventDetails
                        })), a.createElement(C.Cb, {
                            borderBottom: !0
                        }, a.createElement(C.W, {
                            type: C.Tb.H2,
                            className: "event-landing-title__heading"
                        }, this.props.title), a.createElement(C.Xa, {
                            display: C.X.Flex,
                            margin: {
                                top: 2,
                                bottom: 3
                            }
                        }, a.createElement(C.Xa, {
                            margin: {
                                right: 1
                            }
                        }, t), a.createElement(C.Xa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(g.a, {
                            id: this.props.id,
                            title: this.props.title,
                            channelID: this.props.channel.id || "",
                            channelLogin: this.props.channel.login || "",
                            eventLocation: f.a.EventDetails
                        })), a.createElement(v.a, {
                            targetUser: {
                                id: this.props.channel.id || "",
                                displayName: this.props.channel.displayName || this.props.channel.login || ""
                            },
                            eventID: this.props.id,
                            balloonDirection: C.v.Bottom
                        })))
                    }, t
                }(a.Component)),
                Y = Object(u.b)("EventLandingTitle")(Z),
                J = n("GFmA"),
                ee = n("daWW"),
                te = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null;
                        return this.props.pastPremiere && (e = a.createElement(ee.a, {
                            listContext: J.b.MixedGameAndChannelList,
                            trackingContent: d.PageviewContent.EventPast,
                            trackingMedium: d.PageviewMedium.EventDetails,
                            videos: [this.props.pastPremiere]
                        })), a.createElement(C.Cb, {
                            padding: {
                                top: 2
                            }
                        }, a.createElement(C.W, {
                            transform: C.Sb.Uppercase,
                            type: C.Tb.H5,
                            color: C.O.Alt2
                        }, Object(r.d)("Videos", "EventLandingVideos")), a.createElement(C.Xa, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(C.Xa, null, e)))
                    }, t = i.__decorate([Object(u.b)("EventLandingVideos")], t)
                }(a.Component),
                ne = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onCountdownSuccess = function() {
                            t.props.goToVideo(t.props.channel.login || "")
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        j({
                            startAt: new Date(this.props.startAt),
                            endAt: new Date(this.props.endAt),
                            premiere: this.props.premiere ? {
                                status: this.props.premiere.status
                            } : void 0
                        }) !== T.LIVE || this.props.noRedirect || (e = a.createElement($, {
                            id: this.props.id,
                            login: this.props.channel.login || "",
                            premiere: this.props.premiere || null,
                            onCountdownSuccess: this.onCountdownSuccess
                        }));
                        var t = null;
                        return this.props.premiere && this.props.premiere.pastPremiere && this.props.premiere.pastPremiere.id && (t = a.createElement(te, {
                            pastPremiere: this.props.premiere.pastPremiere
                        })), a.createElement(C.Xa, null, a.createElement(Y, {
                            id: this.props.id,
                            title: this.props.title,
                            startAt: this.props.startAt,
                            endAt: this.props.endAt,
                            channel: this.props.channel,
                            self: this.props.self,
                            premiere: this.props.premiere
                        }), e, t, a.createElement(O, {
                            description: this.props.description
                        }))
                    }, t = i.__decorate([Object(u.b)("EventLandingBody", {
                        autoReportInteractive: !0
                    })], t)
                }(a.Component),
                ie = n("rO6o"),
                ae = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = new Date(this.props.startAt);
                        return a.createElement(C.G, {
                            row: !0
                        }, a.createElement(C.Pa, {
                            flexShrink: 0
                        }, a.createElement(C.I, {
                            size: C.J.Size32,
                            aspect: C.p.Aspect16x9,
                            src: this.props.imageURL,
                            alt: "" !== this.props.imageURL ? this.props.title : ""
                        }, a.createElement(ie.a, {
                            date: e
                        }))))
                    }, t = i.__decorate([Object(u.b)("EventLandingImage", {
                        autoReportInteractive: !0
                    })], t)
                }(a.Component),
                re = n("kduP"),
                oe = n("5zf8");
            var se = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderGameBoxArt = function(e, t) {
                            return a.createElement(C.I, {
                                src: e,
                                alt: t,
                                aspect: C.p.Aspect3x4,
                                size: C.J.Size4
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e, t, n = new Date(this.props.startAt),
                            o = new Date(this.props.endAt),
                            s = null,
                            l = null,
                            c = null;
                        return t = this.props.eventType === _.PREMIERE ? Object(r.d)("Premiere", "EventLandingInfo") : Object(r.d)("Live Stream", "EventLandingInfo"), e = a.createElement(C.Xa, {
                            margin: {
                                top: 3
                            }
                        }, a.createElement(C.W, {
                            transform: C.Sb.Uppercase,
                            type: C.Tb.H5,
                            color: C.O.Alt2
                        }, Object(r.d)("Event Type", "EventLandingInfo")), a.createElement(C.Xa, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(C.W, {
                            fontSize: C.Ca.Size5
                        }, t))), this.props.game && (this.props.game.boxArtURL && this.props.game.displayName && (l = a.createElement(C.Xa, {
                            display: C.X.InlineFlex
                        }, this.renderGameBoxArt(this.props.game.boxArtURL, this.props.game.displayName))), s = a.createElement(C.Xa, {
                            margin: {
                                top: 3
                            }
                        }, a.createElement(C.W, {
                            transform: C.Sb.Uppercase,
                            type: C.Tb.H5,
                            color: C.O.Alt2
                        }, Object(r.d)("Streaming", "EventLandingInfo")), a.createElement(C.U, {
                            to: {
                                pathname: Object(re.c)(this.props.game.displayName),
                                state: {
                                    content: "event_game",
                                    medium: "event_page"
                                }
                            }
                        }, a.createElement(C.Xa, {
                            display: C.X.Flex,
                            flexWrap: C.Ba.Wrap,
                            alignItems: C.f.Center,
                            margin: {
                                top: 1
                            }
                        }, l, a.createElement(C.Xa, {
                            display: C.X.InlineFlex,
                            margin: {
                                left: 1
                            }
                        }, a.createElement(C.W, {
                            fontSize: C.Ca.Size5
                        }, this.props.game.displayName)))))), this.props.channel.profileImageURL && this.props.channel.displayName && (c = a.createElement(C.Xa, {
                            display: C.X.InlineFlex
                        }, a.createElement(C.q, {
                            size: 40,
                            src: this.props.channel.profileImageURL,
                            alt: Object(r.d)("{channelDisplayName}'s profile picture", {
                                channelDisplayName: this.props.channel.displayName
                            }, "EventLandingInfo")
                        }))), a.createElement(C.Xa, {
                            margin: {
                                x: 3
                            },
                            padding: {
                                y: 2
                            }
                        }, a.createElement(C.Xa, null, a.createElement(C.W, {
                            transform: C.Sb.Uppercase,
                            type: C.Tb.H5,
                            color: C.O.Alt2
                        }, Object(r.d)("Date & Time", "EventLandingInfo")), a.createElement(C.Xa, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(C.W, {
                            fontSize: C.Ca.Size5
                        }, function(e, t) {
                            var n = new Date;
                            t && (n = t);
                            var a = {
                                weekday: "long",
                                month: "short",
                                day: "numeric"
                            };
                            return n.getFullYear() !== e.getFullYear() && (a = i.__assign({}, a, {
                                year: "numeric"
                            })), Object(r.c)(e, a)
                        }(n))), a.createElement(C.Xa, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(C.W, {
                            fontSize: C.Ca.Size5
                        }, function(e) {
                            return Object(r.j)(e, {
                                timeZoneName: "short"
                            })
                        }(n))), a.createElement(C.Xa, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(C.W, {
                            fontSize: C.Ca.Size5
                        }, function(e, t) {
                            var n = Math.abs(e.getTime() / 1e3 - t.getTime() / 1e3);
                            return Object(oe.b)(n)
                        }(n, o)))), e, a.createElement(C.Xa, {
                            margin: {
                                top: 3
                            }
                        }, a.createElement(C.W, {
                            transform: C.Sb.Uppercase,
                            type: C.Tb.H5,
                            color: C.O.Alt2
                        }, Object(r.d)("Starring", "EventLandingInfo")), a.createElement(C.U, {
                            to: {
                                pathname: "/" + this.props.channel.login,
                                state: {
                                    content: "author_avatar",
                                    medium: "event_page"
                                }
                            }
                        }, a.createElement(C.Xa, {
                            display: C.X.Flex,
                            flexWrap: C.Ba.Wrap,
                            alignItems: C.f.Center,
                            margin: {
                                top: 1
                            }
                        }, c, a.createElement(C.Xa, {
                            display: C.X.InlineFlex,
                            margin: {
                                left: 1
                            }
                        }, a.createElement(C.W, {
                            fontSize: C.Ca.Size5
                        }, "" !== this.props.channel.displayName ? this.props.channel.displayName : this.props.channel.login))))), s)
                    }, t = i.__decorate([Object(u.b)("EventLandingInfo")], t)
                }(a.Component),
                le = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return a.createElement(C.Cb, {
                            background: C.r.Base
                        }, a.createElement(C.Cb, {
                            border: !0
                        }, a.createElement(ae, {
                            title: this.props.title,
                            imageURL: this.props.imageURL,
                            startAt: this.props.startAt
                        })), a.createElement(C.Cb, {
                            borderRight: !0,
                            borderLeft: !0,
                            borderBottom: !0
                        }, a.createElement(se, {
                            startAt: this.props.startAt,
                            endAt: this.props.endAt,
                            channel: this.props.channel,
                            game: this.props.game,
                            eventType: this.props.eventType
                        })))
                    }, t = i.__decorate([Object(u.b)("EventLandingSidePanel")], t)
                }(a.Component),
                ce = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.eventLeaf.channel ? a.createElement(C.Xa, {
                            position: C.hb.Relative
                        }, this.renderChannelInfo(this.props.eventLeaf.channel), a.createElement(C.Xa, {
                            display: C.X.Flex,
                            flexWrap: C.Ba.NoWrap,
                            margin: {
                                left: 3,
                                top: 3,
                                right: 3
                            }
                        }, a.createElement(C.Xa, {
                            flexShrink: 0,
                            flexGrow: 0,
                            margin: {
                                right: 3
                            }
                        }, a.createElement(le, {
                            title: this.props.eventLeaf.title,
                            imageURL: this.props.eventLeaf.imageURL,
                            startAt: this.props.eventLeaf.startAt,
                            endAt: this.props.eventLeaf.endAt,
                            channel: this.props.eventLeaf.channel,
                            game: this.props.eventLeaf.game,
                            eventType: this.props.eventLeaf.type
                        })), a.createElement(C.Xa, {
                            flexGrow: 1
                        }, a.createElement(ne, {
                            id: this.props.eventLeaf.id,
                            title: this.props.eventLeaf.title,
                            description: this.props.eventLeaf.description,
                            startAt: this.props.eventLeaf.startAt,
                            endAt: this.props.eventLeaf.endAt,
                            channel: this.props.eventLeaf.channel,
                            self: this.props.eventLeaf.self,
                            premiere: this.props.eventLeaf.premiere,
                            noRedirect: this.props.noRedirect,
                            goToVideo: this.props.goToVideo
                        })))) : null
                    }, t.prototype.renderChannelInfo = function(e) {
                        return a.createElement(Q.a, null, a.createElement(q.a, {
                            currentPage: q.b.Events,
                            channelLogin: e.login
                        }))
                    }, t
                }(a.Component),
                de = Object(u.b)("EventLeafPageComponent", {
                    autoReportInteractive: !0
                })(ce);

            function ue(e) {
                var t = null;
                null !== e.owner && (t = {
                    id: e.owner.id || "",
                    login: e.owner.login || "",
                    displayName: e.owner.displayName || ""
                });
                var n = T.FUTURE,
                    i = null;
                if (e.nextLeaf && e.nextLeaf.edges && e.nextLeaf.edges.length) {
                    var a = e.nextLeaf.edges[0];
                    a.node && (n = j({
                        startAt: new Date(a.node.startAt),
                        endAt: new Date(a.node.endAt)
                    }), i = a.node.channel && a.node.channel.login || null)
                }
                var r = null;
                e.collectionStart && (r = new Date(e.collectionStart));
                var o = null;
                return e.collectionEnd && (o = new Date(e.collectionEnd)), {
                    id: e.id,
                    title: e.title,
                    description: e.description,
                    imageURL: e.collectionImageURL,
                    startAt: r,
                    endAt: o,
                    isLive: n === T.LIVE,
                    liveChannelLogin: i,
                    owner: t,
                    self: {
                        isFollowing: e.self && e.self.isFollowing || !1
                    }
                }
            }
            var pe = n("8n2l"),
                me = (n("axFM"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.clearExpandedSegmentHistory = function() {
                            t.props.location.state && r.p.history.replace(i.__assign({}, r.p.history.location, {
                                state: i.__assign({}, r.p.history.location.state, {
                                    expandedSegmentID: void 0
                                })
                            }))
                        }, t.goToVideo = function(e) {
                            t.props.history.push("/" + e)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return this.loadingSpinner();
                        if (this.props.data.error || !this.props.data.event) return this.errorPage();
                        if (function(e) {
                                return e.event && e.event.__typename && e.event.__typename === w.EVENT_LEAF || !1
                            }(this.props.data)) {
                            if (P(this.props.data.event).parent) {
                                var e = function(e) {
                                    var t = null;
                                    return e.channel && (t = i.__assign({}, e.channel, {
                                        stream: null
                                    })), {
                                        id: e.id,
                                        title: e.title,
                                        description: e.description,
                                        imageURL: e.imageURL,
                                        startAt: new Date(e.startAt),
                                        endAt: new Date(e.endAt),
                                        channel: t,
                                        game: e.game,
                                        video: e.video,
                                        self: {
                                            isFollowing: e.self.isFollowing
                                        }
                                    }
                                }(P(this.props.data.event));
                                return this.eventCollection(ue(this.props.data.event.parent), [e])
                            }
                            return this.eventLeaf(P(this.props.data.event))
                        }
                        return function(e) {
                            return e.event && e.event.__typename && e.event.__typename === w.EVENT_COLLECTION || !1
                        }(this.props.data) ? this.eventCollection(ue(this.props.data.event)) : this.errorPage()
                    }, t.prototype.eventLeaf = function(e) {
                        return this.canRenderLeaf(e) ? a.createElement(C.Xa, {
                            position: C.hb.Relative
                        }, a.createElement(de, {
                            eventLeaf: e,
                            noRedirect: this.props.location.state && this.props.location.state.noRedirect,
                            goToVideo: this.goToVideo
                        })) : this.errorPage()
                    }, t.prototype.canRenderLeaf = function(e) {
                        return e.channel && e.channel.id && e.channel.login
                    }, t.prototype.eventCollection = function(e, t) {
                        return a.createElement(H, {
                            event: e,
                            defaultLeaves: t
                        })
                    }, t.prototype.errorPage = function() {
                        return a.createElement(o.a, {
                            message: Object(r.d)("Error loading data.", "EventLandingPage")
                        })
                    }, t.prototype.loadingSpinner = function() {
                        return a.createElement(C.Xa, {
                            margin: {
                                top: 3
                            }
                        }, a.createElement(C.Za, {
                            fillContent: !0
                        }))
                    }, t.prototype.onRender = function() {
                        this.props.data.event && (this.props.latencyTracking.reportInteractive(), this.props.data.event.title && r.p.setPageTitle(this.props.data.event.title)), this.clearExpandedSegmentHistory()
                    }, t = i.__decorate([Object(s.a)(pe, {
                        options: function(e) {
                            return {
                                variables: {
                                    eventName: e.location.state && e.location.state.expandedSegmentID || e.match.params.eventName
                                }
                            }
                        }
                    }), Object(u.b)("EventLandingPage", {
                        destination: c.a.EventDetails
                    }), Object(l.a)({
                        location: d.PageviewLocation.EventDetails,
                        skip: function(e) {
                            return e.data.loading || !!e.data.error
                        }
                    })], t)
                }(a.Component)),
                he = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return e.match.params.eventName !== this.props.match.params.eventName
                    }, t.prototype.render = function() {
                        return a.createElement(me, i.__assign({}, this.props))
                    }, t
                }(a.Component);
            n.d(t, "EventLandingPage", function() {
                return he
            })
        },
        "4qQ0": function(e, t, n) {
            "use strict";
            var i, a;
            n.d(t, "a", function() {
                    return i
                }), n.d(t, "b", function() {
                    return a
                }),
                function(e) {
                    e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.Room = "ROOM_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT", e.Whisper = "WHISPER_REPORT"
                }(i || (i = {})),
                function(e) {
                    e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
                }(a || (a = {}))
        },
        "5NSO": function(e, t, n) {},
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return l
            });
            var i, a, r = n("/7QA");

            function o(e, t) {
                switch (e) {
                    case i.Second:
                        return Object(r.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case i.Minute:
                        return Object(r.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case i.Hour:
                        return Object(r.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case i.Day:
                        return Object(r.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case i.Week:
                        return Object(r.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case i.Month:
                        return Object(r.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                switch (e) {
                    case i.Second:
                        return Object(r.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case i.Minute:
                        return Object(r.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case i.Hour:
                        return Object(r.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case i.Day:
                        return Object(r.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case i.Week:
                        return Object(r.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case i.Month:
                        return Object(r.d)("{monthCount}mo", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function l(e, t) {
                var n;
                switch (void 0 === t && (t = a.Humanized), t === a.ClockAuto && (t = e >= 3600 ? a.ClockHMS : a.ClockMS), t) {
                    case a.ClockHM:
                    case a.ClockHMS:
                        n = i.Hour;
                        break;
                    case a.ClockMS:
                        n = i.Minute
                }
                var l = 2;
                t === a.ClockHMS && (l = 3);
                var d = function(e, t) {
                        void 0 === t && (t = i.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === i.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === i.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === i.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === i.Day ? n : n.days <= 26 || t === i.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    u = Object.keys(d);
                if (u.forEach(function(e, n) {
                        t !== a.Humanized && t !== a.HumanizedShort || d[e] || delete d[e], n < u.length - l && delete d[e]
                    }), t === a.Humanized) return function(e) {
                    return e.months ? o(i.Month, e.months) : e.weeks && e.days ? o(i.Week, e.weeks) + " " + o(i.Day, e.days) : e.weeks ? o(i.Week, e.weeks) : e.days && e.hours ? o(i.Day, e.days) + " " + o(i.Hour, e.hours) : e.days ? o(i.Day, e.days) : e.hours && e.minutes ? o(i.Hour, e.hours) + " " + o(i.Minute, e.minutes) : e.hours ? o(i.Hour, e.hours) : e.minutes && e.seconds ? o(i.Minute, e.minutes) + " " + o(i.Second, e.seconds) : e.minutes ? o(i.Minute, e.minutes) : o(i.Second, e.seconds || 0)
                }(d);
                if (t === a.HumanizedShort) return function(e) {
                    return e.months ? s(i.Month, e.months) : e.weeks && e.days ? "" + s(i.Week, e.weeks) + s(i.Day, e.days) : e.weeks ? s(i.Week, e.weeks) : e.days && e.hours ? "" + s(i.Day, e.days) + s(i.Hour, e.hours) : e.days ? s(i.Day, e.days) : e.hours && e.minutes ? "" + s(i.Hour, e.hours) + s(i.Minute, e.minutes) : e.hours ? s(i.Hour, e.hours) : e.minutes && e.seconds ? "" + s(i.Minute, e.minutes) + s(i.Second, e.seconds) : e.minutes ? s(i.Minute, e.minutes) : s(i.Second, e.seconds || 0)
                }(d);
                var p = ":",
                    m = !1;
                switch (r.p.intl.getLanguageCode()) {
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
                        m = !0
                }
                var h = d.seconds || 0,
                    v = d.minutes || 0,
                    g = d.hours || 0;
                switch (t) {
                    case a.ClockHM:
                    case a.ClockHMS:
                        var f = (m ? c(g, 2) : g) + p + c(v, 2);
                        return t === a.ClockHMS && (f += p + c(h, 2)), f;
                    case a.ClockMS:
                        return (m ? c(v, 2) : v) + p + c(h, 2)
                }
            }

            function c(e, t) {
                var n = e.toString();
                return n.length < t ? "0".repeat(t - n.length) + n : n
            }! function(e) {
                e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
            }(i || (i = {})),
            function(e) {
                e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
            }(a || (a = {}))
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
        "6j5V": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("RcPG");

            function a(e) {
                return {
                    type: i.a.Text,
                    content: e
                }
            }
        },
        "80G/": function(e, t, n) {},
        "86FS": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("H1ft"),
                o = n("SWMh"),
                s = n("cr+I"),
                l = n("/7QA"),
                c = n("GFmA"),
                d = n("0INk"),
                u = n("yWUM"),
                p = n("vRsq"),
                m = n("2xye"),
                h = n("GnwI"),
                v = n("4HIT"),
                g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t.gameChangesWithLinks = function() {
                            return t.props.videoGameChanges.map(function(e) {
                                var n = {
                                    t: Object(u.a)(e.offset)
                                };
                                return t.props.collectionID && (n.collection = t.props.collectionID), i.__assign({}, e, {
                                    linkTo: {
                                        pathname: "/videos/" + t.props.video.id,
                                        search: s.stringify(n),
                                        state: {
                                            content: m.PageviewContent.PreviewCardGameBalloonGame,
                                            medium: t.props.tracking.medium
                                        }
                                    }
                                })
                            })
                        }, t.trackVideoGameBalloonClick = function(e) {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(d.b)({
                                videoID: e,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: t.props.tracking.content_index,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t.trackVideoGameBalloonItemClick = function(e, n) {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(d.c)({
                                videoID: e,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: n,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            context: this.props.context,
                            onClick: this.onClickHandler,
                            title: this.props.video.title,
                            linkTo: {
                                pathname: Object(p.i)(void 0, this.props.video.id),
                                state: this.getLinkState(),
                                search: this.generateSearchString()
                            },
                            thumbnailImageProps: {
                                src: this.props.video.previewThumbnailURL,
                                alt: this.props.video.title || ""
                            },
                            channelDisplayName: this.props.video.owner && this.props.video.owner.displayName || "",
                            channelLogin: this.props.video.owner && this.props.video.owner.login || "",
                            channelLinkTo: {
                                pathname: "/" + (this.props.video.owner ? this.props.video.owner.login : ""),
                                state: this.getLinkState()
                            },
                            channelImageProps: {
                                src: this.props.video.owner && this.props.video.owner.profileImageURL || "",
                                alt: this.props.video.owner && this.props.video.owner.displayName || ""
                            },
                            gameTitle: this.props.video.game && this.props.video.game.name || "",
                            gameTitleLinkTo: {
                                pathname: "/directory/game/" + encodeURI(this.props.video.game && this.props.video.game.name || ""),
                                state: this.getLinkState()
                            },
                            gameBoxArtImageProps: {
                                src: this.props.video.game && this.props.video.game.boxArtURL || l.a.defaultBoxArtURL,
                                alt: this.props.video.game ? this.props.video.game.displayName : ""
                            },
                            videoGameChanges: this.gameChangesWithLinks(),
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            datePublished: this.props.video.publishedAt,
                            viewCount: this.props.video.viewCount || 0,
                            durationInSeconds: !this.props.hideDuration && this.props.video.lengthSeconds ? this.props.video.lengthSeconds : void 0,
                            animatedImageProps: this.props.video.animatedPreviewURL ? {
                                src: this.props.video.animatedPreviewURL,
                                alt: ""
                            } : void 0,
                            watchedProgressPercent: this.getVideoPreviousWatchPercentage() || 0,
                            listPosition: this.props.listPosition,
                            topBar: this.props.topBar,
                            restriction: this.getRestrictionProps(),
                            trackImageLatency: this.props.trackImageLatency,
                            onVideoGameBalloonClick: this.trackVideoGameBalloonClick,
                            onVideoGameBalloonItemClick: this.trackVideoGameBalloonItemClick,
                            trackingContext: this.props.tracking,
                            tagListProps: !0 !== this.props.hideTags && this.props.video.contentTags ? {
                                tags: this.props.video.contentTags,
                                linkPath: v.a.PopularTag
                            } : void 0
                        };
                        return a.createElement(c.a, i.__assign({}, e))
                    }, t.prototype.generateSearchString = function() {
                        var e = {};
                        this.props.collectionID && (e.collection = this.props.collectionID);
                        var t = s.stringify(e);
                        return t ? "?" + t : ""
                    }, t.prototype.getVideoPreviousWatchPercentage = function() {
                        return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / (this.props.video.lengthSeconds || 1 / 0) * 100 : null
                    }, t.prototype.getRestrictionProps = function() {
                        var e = this.props.video.restriction && this.props.video.restriction.productName ? "/products/" + this.props.video.restriction.productName : "";
                        return {
                            productName: this.props.video.restriction && this.props.video.restriction.productName,
                            title: this.props.video.restriction && this.props.video.restriction.productTitle,
                            canViewRestricted: this.props.video.self && !this.props.video.self.isRestricted || !1,
                            upsellLinkTo: {
                                pathname: e,
                                state: this.getLinkState()
                            }
                        }
                    }, t.prototype.getLinkState = function() {
                        return {
                            content: this.props.tracking.content,
                            content_index: this.props.tracking.content_index,
                            medium: this.props.tracking.medium
                        }
                    }, t
                }(a.Component),
                f = Object(h.b)("VideoPreviewCard", {
                    autoReportInteractive: !0
                })(g);
            n.d(t, "a", function() {
                return b
            });
            var b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        videoGameChanges: []
                    }, t.maybeFetchVideoMarkers = function(e, n) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.promise = Object(o.a)(e, n, this.props.video.game), [4, this.promise];
                                    case 1:
                                        return t = i.sent(), this.setState({
                                            videoGameChanges: t
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(f, i.__assign({
                        videoGameChanges: this.state.videoGameChanges
                    }, this.props))
                }, t.prototype.componentWillMount = function() {
                    this.props.multipleVideoGameMarkersType && this.props.multipleVideoGameMarkersType !== r.a.None && !this.promise && this.maybeFetchVideoMarkers(this.props.video.id, this.props.video.lengthSeconds || 0)
                }, t
            }(a.Component)
        },
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
        "8n2l": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "EventLandingPage_Event"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "eventName"
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
                                value: "now"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Time"
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
                                value: "event"
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
                                        value: "eventName"
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
                                        value: "__typename"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "EventLeaf"
                                        }
                                    },
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "EventLeafContent"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "EventCollection"
                                        }
                                    },
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "EventCollectionContent"
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
                    end: 335
                }
            };
            i.loc.source = {
                body: '#import "twilight/pages/event-landing/models/event-leaf-fragment.gql"\n#import "twilight/pages/event-landing/models/event-collection-fragment.gql"\nquery EventLandingPage_Event($eventName: ID! $now: Time) {\nevent(id: $eventName) {\n__typename\n...on EventLeaf {\n...EventLeafContent\n}\n...on EventCollection {\n...EventCollectionContent\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(r(n("DzcT").definitions)), i.definitions = i.definitions.concat(r(n("cESk").definitions)), e.exports = i
        },
        "94Uw": function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.ProfileImage = "profile_image", e.ProfileBanner = "profile_banner", e.ChannelOfflineImage = "channel_offline_image"
                }(i || (i = {}))
        },
        "9Gue": function(e, t, n) {},
        "9RDd": function(e, t, n) {},
        B3R5: function(e, t, n) {},
        BOil: function(e, t, n) {},
        BhFH: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i = n("mrSG"),
                a = n("yR8l"),
                r = n("8jSG"),
                o = n("cMjZ"),
                s = n("kSkr");

            function l() {
                var e = this;
                return Object(a.a)(s, {
                    props: function(t) {
                        return {
                            blockUserMutation: function(n, a, s, l) {
                                return i.__awaiter(e, void 0, void 0, function() {
                                    return i.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: {
                                                            targetUserID: n,
                                                            sourceContext: s,
                                                            reason: a
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
                                                            fragment: r
                                                        });
                                                        t && (t.blockedUsers.push({
                                                            id: n,
                                                            __typename: "User"
                                                        }), e.writeFragment({
                                                            id: Object(o.a)(l),
                                                            fragment: r,
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
        "CFw/": function(e, t, n) {
            e.exports = n.p + "assets/notification_upsell_arrow-c9d4ff7c87444b45d813.png"
        },
        DXJk: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Events_FollowEvent"
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
                                    value: "FollowEventInput"
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
                                value: "followEvent"
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
                                        value: "event"
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
                                                    value: "EventCollection"
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
                                                                value: "isFollowing"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "EventLeaf"
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
                                                                value: "isFollowing"
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
                    end: 193
                }
            };
            n.loc.source = {
                body: "mutation Events_FollowEvent($input: FollowEventInput!) {\nfollowEvent(input: $input) {\nevent {\n...on EventCollection {\nid\nself {\nisFollowing\n}\n}\n...on EventLeaf {\nid\nself {\nisFollowing\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        DzcT: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "EventLeafContent"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "EventLeaf"
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
                                value: "type"
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
                                value: "description"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "imageURL"
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
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "startAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "endAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "channel"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "boxArtURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "285"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "380"
                                        }
                                    }],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "parent"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "EventCollectionContent"
                                    },
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
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isFollowing"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "premiere"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "PremiereContent"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "videos"
                            },
                            arguments: [],
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
                                                value: "offsetSeconds"
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
                                                        value: "PreviewCardVideo"
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
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "PremiereContent"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Premiere"
                        }
                    },
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
                                value: "pastPremiere"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "PreviewCardVideo"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 693
                }
            };
            i.loc.source = {
                body: '#import "twilight/pages/event-landing/models/event-collection-fragment.gql"\n#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nfragment EventLeafContent on EventLeaf {\nid\ntype\nowner {\nid\nlogin\ndisplayName\nprofileImageURL(width:300)\n}\ntitle\ndescription\nimageURL(width:320 height:180)\nstartAt\nendAt\nchannel {\nid\nlogin\ndisplayName\nprofileImageURL(width:300)\n}\ngame {\nid\nname\ndisplayName\nboxArtURL(width:285 height:380)\n}\nparent {\n...EventCollectionContent\n}\nself {\nisFollowing\n}\npremiere {\n...PremiereContent\n}\nvideos {\nedges {\noffsetSeconds\nnode {\n...PreviewCardVideo\n}\n}\n}\n}\nfragment PremiereContent on Premiere {\nstatus\npastPremiere {\n...PreviewCardVideo\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(r(n("cESk").definitions)), i.definitions = i.definitions.concat(r(n("he03").definitions)), e.exports = i
        },
        Fj9y: function(e, t, n) {},
        GFmA: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/7QA"),
                o = n("5zf8"),
                s = n("Ue10"),
                l = (n("Fj9y"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonItemClick = function() {
                            t.props.onBalloonItemClick && t.props.onBalloonItemClick(t.props.videoID, t.props.index)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            src: this.props.gameChange.thumbnailUrl,
                            alt: this.props.gameChange.label
                        };
                        return a.createElement(s.Xa, {
                            className: "preview-card-game-balloon-row",
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap
                        }, a.createElement(s.Ua, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, a.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row,
                            padding: .5
                        }, a.createElement(s.Cb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: s.x.Small,
                            overflow: s.cb.Hidden,
                            position: s.hb.Relative
                        }, a.createElement(s.o, {
                            align: s.d.Center,
                            ratio: s.p.BoxArt
                        }, a.createElement(s.S, i.__assign({}, e))), a.createElement(s.Cb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: s.f.Center,
                            background: s.r.Overlay,
                            color: s.O.Overlay,
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center,
                            position: s.hb.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, a.createElement(s.qb, {
                            asset: s.rb.Play,
                            type: s.sb.Inherit
                        }))), a.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, a.createElement(s.Xa, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, a.createElement(s.W, null, this.props.gameChange.label)), a.createElement(s.Xa, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, a.createElement(s.W, null, Object(o.b)(this.props.gameChange.duration)))))))
                    }, t
                }(a.Component)),
                c = n("0INk"),
                d = n("8/mp"),
                u = n("eJ65"),
                p = (n("vDRX"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonToggle = function(e) {
                            t.props.onBalloonClick && !e && t.props.onBalloonClick(t.props.videoID)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.videoGameChanges.length > 0) {
                            var e = this.props.videoGameChanges.map(function(e) {
                                return e.label
                            });
                            Object(c.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return a.createElement(s.Xa, {
                            className: "preview-card-game-balloon",
                            display: s.X.InlineBlock,
                            position: s.hb.Relative,
                            margin: {
                                top: .5
                            }
                        }, a.createElement(u.a, {
                            key: "game-balloon",
                            display: s.X.Inline,
                            onToggle: this.onBalloonToggle
                        }, a.createElement(s.z, {
                            type: s.F.Hollow,
                            icon: s.rb.ViewerList
                        }, a.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row
                        }, a.createElement(s.W, null, Object(r.d)("Chapters", "PreviewCardGameBalloon")), a.createElement(s.Xa, {
                            margin: {
                                left: 1
                            }
                        }, a.createElement(s.eb, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), a.createElement(s.u, {
                            direction: s.v.TopLeft,
                            size: s.w.Medium
                        }, a.createElement(s.Xa, {
                            overflow: s.cb.Hidden,
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexWrap: s.Ba.NoWrap
                        }, a.createElement(s.Xa, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, a.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(r.d)("Chapter Select", "PreviewCardGameBalloon"))), a.createElement(s.Xa, {
                            className: "preview-card-game-balloon__content",
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: s.Ba.NoWrap
                        }, a.createElement(d.b, null, a.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexWrap: s.Ba.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return a.createElement(l, {
                                index: n,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(a.Component)),
                m = n("kduP"),
                h = n("2xye"),
                v = function(e) {
                    return a.createElement(s.Xa, null, a.createElement(s.W, {
                        color: s.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, i) {
                        return a.createElement(s.Pa, {
                            key: n
                        }, a.createElement(s.U, {
                            to: {
                                pathname: Object(m.c)(t.label),
                                state: {
                                    content: h.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: s.V.Inherit
                        }, t.label, g(n, i.length - 1) ? null : ", "))
                    })))
                },
                g = function(e, t) {
                    return e === t
                },
                f = n("N0BP"),
                b = (n("XA5B"), function(e) {
                    var t = a.createElement(s.Cb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: s.x.Small,
                        overflow: s.cb.Hidden
                    }, a.createElement(s.o, {
                        ratio: e.aspect || s.p.BoxArt,
                        align: s.d.Center
                    }, a.createElement(s.S, i.__assign({}, e.imageProps))));
                    return e.linkTo && (t = a.createElement(s.U, i.__assign({}, Object(f.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            b.displayName = "PreviewCardIconicImage";
            var k, y = n("TSYQ"),
                C = (n("cRsL"), function(e) {
                    var t = y("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return a.createElement(s.Xa, {
                        display: s.X.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: s.Wa.Between,
                        alignItems: s.f.Center,
                        className: t
                    }, a.createElement(s.Xa, {
                        display: s.X.InlineFlex
                    }, a.createElement(s.W, {
                        "data-test-selector": "top-bar-title-selector",
                        color: s.O.Overlay,
                        bold: !0,
                        transform: s.Sb.Uppercase
                    }, e.title)), e.subTitle && a.createElement(s.Xa, {
                        display: s.X.InlineFlex
                    }, a.createElement(s.W, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: s.O.Overlay
                    }, e.subTitle)))
                }),
                E = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = a.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, a.createElement(s.kb, {
                        borderRadius: s.x.None,
                        size: s.mb.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var r = 1,
                        o = null;
                    return e.topBar && (o = a.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, a.createElement(C, i.__assign({}, e.topBar))), r = 3), a.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, a.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), a.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), a.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), a.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-right-selector"
                    }, e.bottomRight))
                }),
                S = (n("kF1+"), function(e) {
                    var t = e.icon && a.createElement(s.Xa, {
                        display: s.X.Flex,
                        margin: {
                            right: .5
                        }
                    }, a.createElement(s.qb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? a.createElement(s.Cb, {
                        alignItems: s.f.Center,
                        background: s.r.Overlay,
                        borderRadius: s.x.Small,
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        fontSize: s.Ca.Size6,
                        justifyContent: s.Wa.Center
                    }, t, a.createElement(s.W, null, e.value)) : a.createElement(s.Cb, {
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, a.createElement(s.W, null, e.value))
                }),
                w = n("GnwI"),
                _ = (n("B3R5"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            didAnimatedPreviewLoad: !1,
                            didAnimatedPreviewFailToLoad: !1,
                            isHovered: !1
                        }, t.onImageError = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t.onImageLoad = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t.onAnimatedImageLoad = function(e) {
                            void 0 !== t.props.animatedImageProps && e.currentTarget.src === t.props.animatedImageProps.src && t.setState({
                                didAnimatedPreviewLoad: !0
                            })
                        }, t.onAnimatedImageLoadError = function(e) {
                            void 0 !== t.props.animatedImageProps && e.currentTarget.src === t.props.animatedImageProps.src && t.setState({
                                didAnimatedPreviewFailToLoad: !0
                            })
                        }, t.handleFocus = function() {
                            t.setState({
                                isHovered: !0
                            })
                        }, t.handleBlur = function() {
                            t.setState({
                                isHovered: !1
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.trackImageLatency || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = {};
                        return this.props.animatedImageProps && (e = {
                            onMouseEnter: this.handleFocus,
                            onMouseLeave: this.handleBlur,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur
                        }), a.createElement("div", i.__assign({}, e, {
                            onClick: this.props.onClick
                        }), a.createElement(s.Cb, {
                            background: s.r.Alt2,
                            overflow: s.cb.Hidden
                        }, a.createElement(s.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = y("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? a.createElement("div", {
                            className: n
                        }, a.createElement(s.S, i.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : a.createElement("div", {
                            className: n
                        }, a.createElement(s.S, i.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(a.Component)),
                N = Object(w.b)("PreviewCardThumbnail")(_),
                T = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return a.createElement(s.Xa, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, a.createElement(s.W, {
                            color: s.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : a.createElement(s.U, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: s.V.Inherit
                        }, e.text)))
                    })), a.createElement("div", null, a.createElement(s.U, i.__assign({}, Object(f.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: s.V.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), a.createElement(s.W, {
                        type: s.Tb.H3,
                        fontSize: s.Ca.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), a.createElement(s.Xa, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                O = n("H1ft"),
                I = n("ZbA5"),
                R = n("QVaV"),
                L = n("hyVY"),
                x = n("MXoD"),
                F = n("0LAi");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(k || (k = {}));
            var D, A, U = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(r.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(r.d)("unlocked", "VideoPreviewCardRestriction") : Object(r.d)("locked", "VideoPreviewCardRestriction"),
                        i = t ? s.rb.Unlock : s.rb.Lock;
                    return a.createElement(s.Xa, null, !t && a.createElement(s.Cb, {
                        background: s.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        position: s.hb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: s.gc.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: s.Pb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: s.f.Center,
                        alignContent: s.e.Center,
                        flexDirection: s.Aa.Column,
                        flexWrap: s.Ba.Wrap,
                        justifyContent: s.Wa.Center,
                        "data-test-selector": k.LockSelector
                    }, a.createElement(s.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(s.W, {
                        color: s.O.Overlay,
                        fontSize: s.Ca.Size5,
                        "data-test-selector": k.UpsellSelector
                    }, Object(r.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), a.createElement(s.Xa, null, a.createElement(s.z, {
                        type: s.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), a.createElement(s.Cb, {
                        display: s.X.InlineFlex,
                        position: s.hb.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: s.gc.Default,
                        fontSize: s.Ca.Size6,
                        background: s.r.Overlay,
                        borderRadius: s.x.Medium,
                        color: s.O.Overlay
                    }, a.createElement(s.Wb, {
                        direction: this.props.attachTop ? s.Yb.Bottom : s.Yb.Top,
                        align: s.Xb.Right,
                        label: n
                    }, a.createElement(s.qb, {
                        asset: i,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(a.PureComponent);
            n("5NSO");

            function P(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function j(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(D || (D = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(A || (A = {}));
            var M = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getTrackingContext = function(e) {
                            var n = t.props.trackingContext;
                            return {
                                content: n && n.content ? n.content : e,
                                medium: n && n.medium
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement("div", i.__assign({
                            className: "preview-card"
                        }, Object(f.a)(this.props)), a.createElement(s.Cb, {
                            position: s.hb.Relative,
                            borderRadius: s.x.Medium,
                            overflow: s.cb.Hidden
                        }, this.renderVODRestrictionOverlay(), a.createElement(s.U, {
                            to: Object(x.a)(this.getTrackingContext(h.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && a.createElement(N, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: P(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), a.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(s.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), a.createElement(s.Xa, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && a.createElement(s.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, a.createElement(this.props.contextualCardActionProps.component, i.__assign({}, this.props.contextualCardActionProps.props)))))
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? a.createElement(E, {
                            topLeft: a.createElement(I.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(S, {
                                value: Object(r.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : P(this.props) ? a.createElement(E, {
                            topLeft: void 0 !== this.props.durationInSeconds && a.createElement(S, {
                                value: Object(L.b)(this.props.durationInSeconds),
                                icon: s.rb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && a.createElement(S, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: a.createElement(S, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? a.createElement(S, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }) : null,
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : j(this.props) ? a.createElement(E, {
                            topLeft: a.createElement(S, {
                                value: Object(L.b)(this.props.durationInSeconds),
                                icon: s.rb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(S, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? a.createElement(S, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }) : null
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return P(this.props) && this.props.listPosition ? Object(r.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return P(this.props) || j(this.props) ? Object(r.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === A.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? a.createElement(s.Xa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(b, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(x.a)(this.getTrackingContext(h.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: s.p.BoxArt,
                            "data-test-selector": D.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === A.SingleGameList || this.props.context === A.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? a.createElement(s.Xa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(b, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(x.a)(this.getTrackingContext(h.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: s.p.Aspect1x1,
                            "data-test-selector": D.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(R.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(x.a)(this.getTrackingContext(h.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), j(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(r.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : P(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== A.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(x.a)(this.getTrackingContext(h.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), a.createElement(a.Fragment, null, a.createElement(T, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(x.a)(this.getTrackingContext(h.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? a.createElement(s.Xa, {
                            margin: {
                                top: .5
                            }
                        }, a.createElement(F.a, i.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return P(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? a.createElement(U, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!P(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === O.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, i) {
                        switch (e) {
                            case O.a.Balloon:
                                return a.createElement(p, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: i
                                });
                            case O.a.Inline:
                                return a.createElement(v, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case O.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(a.Component),
                W = Object(w.b)("PreviewCard", {
                    autoReportInteractive: !0
                })(M);
            n.d(t, !1, function() {
                return D
            }), n.d(t, "b", function() {
                return A
            }), n.d(t, !1, function() {
                return M
            }), n.d(t, "a", function() {
                return W
            })
        },
        H1ft: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            });
            var i, a = n("/7QA"),
                r = n("D7An");
            ! function(e) {
                e.None = "None", e.Inline = "Inline", e.Balloon = "Balloon"
            }(i || (i = {}));
            var o = function() {
                switch (a.p.experiments.getAssignment(r.b.Archer)) {
                    case "balloon":
                        return i.Balloon;
                    case "inline":
                        return i.Inline;
                    case "control":
                    default:
                        return i.None
                }
            }
        },
        HXcb: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChannelPage_ChannelHeader"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "videos"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "follows"
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
                                        value: "cheer"
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
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "followButtonFragment"
                                    },
                                    directives: []
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
                    end: 375
                }
            };
            i.loc.source = {
                body: '#import "twilight/common/queries/follow-button-fragment.gql"\nquery ChannelPage_ChannelHeader($login: String!) {\nuser(login: $login) {\nid\nlogin\ndisplayName\nprofileImageURL(width: 70)\nroles {\nisPartner\n}\nstream {\nid\n}\nvideos {\ntotalCount\n}\nfollowers {\ntotalCount\n}\nfollows {\ntotalCount\n}\ncheer {\nid\n}\n...followButtonFragment\n}\ncurrentUser {\nid\nroles {\nisStaff\nisSiteAdmin\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("V94A").definitions)), e.exports = i
        },
        HrG3: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var i = n("q1tI"),
                a = n("/7QA"),
                r = n("Ue10"),
                o = (n("RFKy"), "view-all-button-selector");

            function s(e) {
                var t = i.createElement(r.Xa, {
                    padding: 1,
                    fullHeight: !0,
                    flexDirection: r.Aa.Column,
                    justifyContent: r.Wa.Center,
                    display: r.X.Flex
                }, i.createElement(r.W, {
                    color: r.O.Link,
                    fontSize: r.Ca.Size4,
                    noWrap: !0
                }, Object(a.d)("View All", "Following--ViewAllButton")), i.createElement(r.W, {
                    color: r.O.Alt2,
                    fontSize: r.Ca.Size4,
                    noWrap: !0
                }, e.subHeader));
                return e.linkTo && (t = i.createElement(r.U, {
                    to: e.linkTo,
                    className: "following__view-all__link",
                    hoverUnderlineNone: !0
                }, t)), i.createElement("div", {
                    className: "following__view-all",
                    onClick: e.onClickViewAll,
                    "data-test-selector": o
                }, i.createElement(r.Xa, {
                    margin: {
                        bottom: 5
                    }
                }, i.createElement(r.o, {
                    ratio: e.aspectRatio
                }, i.createElement(r.Cb, {
                    background: r.r.Alt2,
                    fullHeight: !0
                }, t))))
            }
        },
        "IxV+": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "EventLandingPage_Schedule"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "eventID"
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
                                value: "nextCount"
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
                                value: "nextCursor"
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
                                value: "prevCount"
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
                                value: "prevCursor"
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
                                value: "criteria"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "EventConnectionCriteriaInput"
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
                                value: "event"
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
                                        value: "eventID"
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
                                        value: "__typename"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "EventCollection"
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
                                                value: "leaves"
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
                                                        value: "nextCount"
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
                                                        value: "nextCursor"
                                                    }
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "last"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "prevCount"
                                                    }
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "before"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "prevCursor"
                                                    }
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "criteria"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "criteria"
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
                                                                        value: "title"
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
                                                                        value: "imageURL"
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
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "startAt"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "endAt"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "channel"
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
                                                                                        value: "previewImageURL"
                                                                                    },
                                                                                    arguments: [{
                                                                                        kind: "Argument",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "width"
                                                                                        },
                                                                                        value: {
                                                                                            kind: "IntValue",
                                                                                            value: "380"
                                                                                        }
                                                                                    }, {
                                                                                        kind: "Argument",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "height"
                                                                                        },
                                                                                        value: {
                                                                                            kind: "IntValue",
                                                                                            value: "240"
                                                                                        }
                                                                                    }],
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
                                                                                value: "boxArtURL"
                                                                            },
                                                                            arguments: [{
                                                                                kind: "Argument",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "width"
                                                                                },
                                                                                value: {
                                                                                    kind: "IntValue",
                                                                                    value: "285"
                                                                                }
                                                                            }, {
                                                                                kind: "Argument",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "height"
                                                                                },
                                                                                value: {
                                                                                    kind: "IntValue",
                                                                                    value: "380"
                                                                                }
                                                                            }],
                                                                            directives: []
                                                                        }]
                                                                    }
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "videos"
                                                                    },
                                                                    arguments: [{
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "first"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "1"
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
                                                                                                value: "PreviewCardVideo"
                                                                                            },
                                                                                            directives: []
                                                                                        }]
                                                                                    }
                                                                                }, {
                                                                                    kind: "Field",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "offsetSeconds"
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
                                                                                value: "isFollowing"
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
                                                                value: "cursor"
                                                            },
                                                            arguments: [],
                                                            directives: []
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
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "hasPreviousPage"
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
                    end: 826
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery EventLandingPage_Schedule($eventID: ID! $nextCount: Int $nextCursor: Cursor $prevCount: Int $prevCursor: Cursor $criteria: EventConnectionCriteriaInput) {\nevent(id: $eventID) {\n__typename\n...on EventCollection {\nid\nleaves(first: $nextCount after: $nextCursor last: $prevCount before: $prevCursor criteria: $criteria) {\nedges {\nnode {\nid\ntitle\ndescription\nimageURL(width: 320 height: 180)\nstartAt\nendAt\nchannel {\nid\nlogin\ndisplayName\nprofileImageURL(width: 300)\nstream {\nid\npreviewImageURL(width: 380 height: 240)\n}\n}\ngame {\nid\nname\ndisplayName\nboxArtURL(width: 285 height: 380)\n}\nvideos(first: 1) {\nedges {\nnode {\n...PreviewCardVideo\n}\noffsetSeconds\n}\n}\nself {\nisFollowing\n}\n}\ncursor\n}\npageInfo {\nhasNextPage\nhasPreviousPage\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("he03").definitions)), e.exports = i
        },
        Jhye: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/7QA"),
                o = n("X7Ac"),
                s = n("eJ65");
            var l = n("ug+5"),
                c = n("Ue10"),
                d = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onShareClicked = function(e) {
                            var n = "";
                            switch (e) {
                                case o.b.Twitter:
                                    n = "twitter";
                                    break;
                                case o.b.Facebook:
                                    n = "facebook";
                                    break;
                                case o.b.Reddit:
                                    n = "reddit";
                                    break;
                                case o.b.VKontakte:
                                    n = "vk";
                                    break;
                                case o.b.Copy:
                                    n = "url";
                                    break;
                                default:
                                    n = "unknown"
                            }
                            Object(l.c)({
                                shareMedium: n,
                                eventID: t.props.id,
                                channelLogin: t.props.channelLogin || "undefined",
                                channelID: t.props.channelID || "undefined",
                                location: t.props.eventLocation
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = function(e) {
                                return "https://www.twitch.tv/events/" + e
                            }(this.props.id),
                            t = this.props.children;
                        return this.props.children || (t = a.createElement(c.z, {
                            dropdown: !0,
                            type: c.F.Hollow
                        }, Object(r.d)("Share", "ShareEvent"))), a.createElement(s.a, null, t, a.createElement(c.u, {
                            direction: this.props.balloonDirection
                        }, a.createElement(c.Xa, {
                            padding: 1
                        }, a.createElement(c.Xa, {
                            display: c.X.Flex,
                            flexDirection: c.Aa.Row,
                            flexWrap: c.Ba.NoWrap,
                            justifyContent: c.Wa.Center
                        }, a.createElement(o.a, {
                            type: o.b.Twitter,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        }), a.createElement(o.a, {
                            type: o.b.Facebook,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        }), a.createElement(o.a, {
                            type: o.b.Reddit,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        }), a.createElement(o.a, {
                            type: o.b.VKontakte,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        }), a.createElement(o.a, {
                            type: o.b.Copy,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        })))))
                    }, t
                }(a.Component);
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
        KriR: function(e, t, n) {
            "use strict";
            n.d(t, "g", function() {
                return r
            }), n.d(t, "d", function() {
                return u
            }), n.d(t, "f", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "c", function() {
                return d
            });
            var i = n("/7QA"),
                a = n("2xye");

            function r(e) {
                var t = {
                    channel: e.channelLogin,
                    channel_id: e.channelId,
                    payment_type: e.paymentType,
                    payment_flow: e.paymentFlow,
                    quantity: e.quantity,
                    action: e.action,
                    action_detail: e.actionDetail,
                    product_id: e.productId,
                    ticket_price: e.ticketPrice,
                    currency: e.currency,
                    saved_payment: e.savedPayment,
                    checkout_source: e.trackingContext.source
                };
                e.trackingContext.detail && (t.checkout_source_detail = e.trackingContext.detail), i.o.track(a.SpadeEventType.PaymentFormInteraction, t)
            }
            var o, s, l, c, d, u = function() {
                function e(e) {
                    this.store = {
                        savedPaymentAvailable: null,
                        savedPaymentDisplayed: null
                    }, this.counter = 0, this.config = {
                        allowDuplicateEvents: !(!e || !e.allowDuplicateEvents)
                    }
                }
                return e.prototype.get = function(e) {
                    return this.store[e]
                }, e.prototype.set = function(e) {
                    this.store = Object.assign(this.store, e)
                }, e.prototype.reportEvent = function() {
                    (0 === this.counter || this.config.allowDuplicateEvents) && (this.counter++, function(e) {
                        var t = {
                            saved_payment_available: e.savedPaymentAvailable,
                            saved_payment_displayed: e.savedPaymentDisplayed
                        };
                        i.o.track(a.SpadeEventType.PaymentFormDisplay, t)
                    }(this.store))
                }, e
            }();
            ! function(e) {
                e.Failed = "failed", e.Pending = "pending", e.Success = "success"
            }(o || (o = {})),
            function(e) {
                e.MysteryGifting = "mystery_gifting", e.Gifting = "gifting", e.Personal = "personal"
            }(s || (s = {})),
            function(e) {
                e.RecurlyCreditCard = "recurly_credit_card", e.RecurlyPaypal = "recurly_paypal", e.RecurlyPayWithAmazon = "recurly_pay_with_amazon", e.ZuoraCreditCard = "zuora_credit_card", e.Xsolla = "xsolla"
            }(l || (l = {})),
            function(e) {
                e.VendorLoginClick = "vendor_login_click", e.CompletePurchaseClick = "complete_purchase_click", e.PaypalTokenError = "paypal_token_error", e.RadioButtonClick = "radio_button_click", e.TokenError = "token_error", e.PriceChangeAlert = "price_change_alert", e.UnsupportedCountryAlert = "unsupported_country_alert"
            }(c || (c = {})),
            function(e) {
                e.ChannelSubscribeButton = "channel_subscribe_button_click", e.Direct = "direct_url_link", e.EmotePicker = "emote_picker_click", e.Extension = "extension_click", e.TurboSubscribeButton = "turbo_subscribe_button_click", e.ViewerCard = "viewer_card_click"
            }(d || (d = {}))
        },
        L5dg: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("q1tI"),
                a = n("0Rl0"),
                r = function(e) {
                    for (var t = [], n = void 0 === e.placeholderCount ? 20 : e.placeholderCount, r = 0; r < n; r++) t.push(i.createElement(a.a, {
                        key: r
                    }));
                    return i.createElement(i.Fragment, null, t)
                }
        },
        LfZz: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("/MKj"),
                r = n("fvjX"),
                o = n("1/iK"),
                s = n("aCAx"),
                l = n("y5D0"),
                c = n("kRBY"),
                d = n("/HY+"),
                u = n("q1tI"),
                p = n("/7QA"),
                m = n("eJ65"),
                h = n("4qQ0"),
                v = n("Ue10"),
                g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleReportClick = function() {
                            if (!t.props.isLoggedIn) return t.props.login();
                            if (t.props.targetUser) {
                                var e = "https://www.twitch.tv/events/" + t.props.eventID;
                                t.props.showReportUserModal({
                                    reportContext: {
                                        contentType: h.a.User,
                                        targetUserID: t.props.targetUser.id
                                    },
                                    title: Object(p.d)("Report {channelName}", {
                                        channelName: t.props.targetUser.displayName
                                    }, "EventMoreMenu"),
                                    defaultDescription: "Report event: " + e
                                })
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return u.createElement(m.a, null, u.createElement(v.z, {
                            icon: v.rb.More,
                            type: v.F.Hollow
                        }), u.createElement(v.u, {
                            direction: this.props.balloonDirection,
                            tailOffset: this.props.tailOffset
                        }, u.createElement(v.Xa, {
                            padding: {
                                y: 1
                            }
                        }, u.createElement(v.Ua, {
                            disabled: !this.props.targetUser,
                            onClick: this.handleReportClick
                        }, u.createElement(v.Xa, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(p.d)("Report", "EventMoreMenu"))))))
                    }, t
                }(u.Component);
            var f = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(c.f)(e)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    login: function() {
                        return Object(l.e)(o.a.ReportChannel)
                    },
                    showReportUserModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(s.d)(d.a, t)
                    }
                }, e)
            })(g);
            n.d(t, "a", function() {
                return f
            })
        },
        Ljgq: function(e, t, n) {},
        MJbm: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/7QA"),
                o = (n("efEE"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.logger = r.p.logger.withCategory("resize-detector"), t.onScroll = function() {
                            var e = t.container,
                                n = e.offsetWidth,
                                i = e.offsetHeight,
                                a = e.offsetLeft,
                                r = e.offsetTop;
                            t.logger.debug("Resize Detector -- onScroll"), n === t.width && i === t.height && r === t.top && a === t.left || (t.width = n, t.height = i, t.props.onResize(n, i, r, a)), t.reset()
                        }, t.setGrowDivRef = function(e) {
                            return t.growDiv = e
                        }, t.setGrowChildDivRef = function(e) {
                            return t.growChildDiv = e
                        }, t.setShrinkDivRef = function(e) {
                            return t.shrinkDiv = e
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement("div", {
                            className: "resize-detector"
                        }, a.createElement("div", {
                            className: "resize-detector",
                            ref: this.setGrowDivRef
                        }, a.createElement("div", {
                            className: "resize-detector__grow",
                            ref: this.setGrowChildDivRef
                        })), a.createElement("div", {
                            className: "resize-detector",
                            ref: this.setShrinkDivRef
                        }, a.createElement("div", {
                            className: "resize-detector__shrink"
                        })))
                    }, t.prototype.componentDidMount = function() {
                        if (this.growDiv) {
                            this.growDiv.parentElement || this.logger.warn("growDiv.parentElement is undefined!"), this.container = this.growDiv.parentElement.parentElement;
                            var e = this.container.style.position;
                            if ("relative" !== e && "absolute" !== e && "fixed" !== e) {
                                var t = window.getComputedStyle(this.container);
                                t && "static" === t.getPropertyValue("position") && (this.container.style.position = "relative")
                            }
                            this.onScroll(), this.growDiv.addEventListener("scroll", this.onScroll), this.shrinkDiv.addEventListener("scroll", this.onScroll)
                        } else this.logger.warn("growDiv is undefined!")
                    }, t.prototype.componentWillUnmount = function() {
                        this.growDiv.removeEventListener("scroll", this.onScroll), this.shrinkDiv.removeEventListener("scroll", this.onScroll)
                    }, t.prototype.reset = function() {
                        var e = this.growDiv,
                            t = this.shrinkDiv,
                            n = this.growChildDiv.style;
                        n.width = "100000px", n.height = "100000px", e.scrollLeft = 1e5, e.scrollTop = 1e5, t.scrollLeft = 1e5, t.scrollTop = 1e5
                    }, t
                }(a.Component));
            n.d(t, "a", function() {
                return o
            })
        },
        MPK0: function(e, t, n) {},
        Oy4H: function(e, t, n) {},
        PfQt: function(e, t, n) {
            "use strict";
            var i = n("HrG3");
            n.d(t, "a", function() {
                return i.a
            })
        },
        QjI3: function(e, t, n) {
            "use strict";
            var i, a = n("mrSG"),
                r = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                l = n("ZS2+"),
                c = n("UUve"),
                d = n("1/iK"),
                u = n("aCAx"),
                p = n("kRBY"),
                m = n("GnwI"),
                h = n("oJmH"),
                v = n("/7QA"),
                g = n("2+sX"),
                f = n("u5aL"),
                b = n("eJ65"),
                k = n("yR8l"),
                y = n("x7UT"),
                C = n("3Bft"),
                E = n("tIid"),
                S = n("ht6z"),
                w = n("/aPz"),
                _ = n("KriR"),
                N = n("W8Fi"),
                T = n("br9A"),
                O = n("Ue10"),
                I = (n("a7aT"), n("z+dA"));
            ! function(e) {
                e.SubButton = "subscribe-button__dropdown", e.BalloonLayerButton = "subscribe-button__balloon-layer-btn", e.DefaultButton = "subscribe-button__default-btn", e.SubscribeBalloon = "subscribe-button__subscribe-balloon"
            }(i || (i = {}));
            var R = l.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(193)]).then(n.bind(null, "f+qK"))
                }, "SubscribeBalloon"),
                L = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            inPrimeRegion: !1
                        }, t.modalLevel = "top_page", t.renderBalloonContentForBalloonLayer = function() {
                            return r.createElement(f.a, {
                                onClickOut: t.handleBalloonClickOut
                            }, r.createElement(O.Xa, {
                                "data-a-target": "sub-balloon",
                                refDelegate: t.setBalloonContentRefDelegate
                            }, t.balloonWrapperContent))
                        }, t.handleButtonClick = function() {
                            t.balloonContentRef || (t.props.balloonLayer.show({
                                direction: t.getBalloonDirection(),
                                ref: t.containerRef,
                                content: t.renderBalloonContentForBalloonLayer(),
                                contentHeight: 0,
                                closeOnScroll: !0
                            }), t.handleMenuToggle(!1))
                        }, t.handleBalloonClickOut = function() {
                            t.handleMenuToggle(!0), t.props.balloonLayer.hide({
                                force: !0
                            })
                        }, t.setBalloonWrapperContent = function(e) {
                            t.balloonWrapperContent = e
                        }, t.handleSubMenuAction = function(e) {
                            new Set([T.a.ClickCheckout, T.a.BuyGiftSub, T.a.BuyMysteryGift, T.a.BuyCustomMysteryGift, T.a.BuyGiftToPaidUpgrade, T.a.BuyPaidUpgrade]).has(e.action) && t.checkAndDisplaySubscriptionCheckout();
                            var n = t.props.data,
                                i = n.user,
                                a = !!(i && i.self && i.self.subscriptionBenefit),
                                r = n.requestInfo && Object(S.a)(n.requestInfo.countryCode);
                            Object(T.b)({
                                action: e.action || "",
                                channelLogin: t.props.channelLogin || "",
                                channelID: i && i.id || "",
                                checkoutButtonTier: e.checkoutButtonTier,
                                hasSubCredit: i && i.self && i.self.canPrimeSubscribe,
                                hostChannelID: t.props.hostChannelID,
                                hostChannelLogin: t.props.hostChannelLogin,
                                isMenuOpen: e.action !== T.a.OpenSubMenu,
                                mysteryGiftCount: e.mysteryGiftCount,
                                sub_location: "channel_page",
                                modal: !a,
                                modalLevel: a ? "" : t.modalLevel.slice(),
                                showPrimeContent: r,
                                giftRecipient: e.giftRecipient || null
                            }), !e.modalLevel || e.action !== T.a.ClickMoreSubOptions && e.action !== T.a.ClickBack || (t.modalLevel = e.modalLevel)
                        }, t.handleMenuToggle = function(e) {
                            t.handleSubMenuAction({
                                action: e ? T.a.CloseSubMenu : T.a.OpenSubMenu
                            })
                        }, t.getBalloonDirection = function() {
                            var e = t.props.balloonDirection || O.v.BottomRight;
                            return t.props.hostChannelID && (e = O.v.TopLeft), e
                        }, t.setContainerRefDelegate = function(e) {
                            t.containerRef = e
                        }, t.setBalloonContentRefDelegate = function(e) {
                            t.balloonContentRef = e
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.reportInteractive && this.isUserDataReady(this.props) && this.props.reportInteractive(), this.checkAndDisplaySubscriptionCheckout()
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.props.channelLogin && !this.isUserDataReady(this.props) || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.props.reportInteractive && this.props.data && !this.props.data.loading && this.props.reportInteractive(), !this.isUserDataReady(e) && this.isUserDataReady(this.props) && this.checkAndDisplaySubscriptionCheckout()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.isUserDataReady(e) && e.pubsub.messages.subscriptionInfo !== this.props.pubsub.messages.subscriptionInfo && this.props.data.refetch()
                    }, t.prototype.componentWillUnmount = function() {
                        Object(c.d)()
                    }, t.prototype.render = function() {
                        var e = this.props.data;
                        if (!e || e.loading || e.error) return null;
                        var t = e.user;
                        if (!t) return null;
                        var n = t.self,
                            a = t.subscriptionProducts;
                        if (!a) return null;
                        var o = a.filter(function(e) {
                            return e
                        });
                        if (0 === o.length) return null;
                        if (this.props.hideEsportsSubscription && Object(E.a)(t.id || "", this.props.sessionUser)) return null;
                        var s = e.requestInfo && Object(S.a)(e.requestInfo.countryCode),
                            l = !(!n || !n.subscriptionBenefit),
                            c = Object(E.a)(t.id || "", this.props.sessionUser),
                            d = 1 === o.length;
                        o.some(function(e) {
                            return !e.emoteSetID
                        }) && (d = !0);
                        var u = null;
                        n && n.subscriptionBenefit && (u = n.subscriptionBenefit.purchasedWithPrime ? C.a.Prime : n.subscriptionBenefit.tier, this.modalLevel = "");
                        var p, m = l ? Object(v.d)("All-Access Pass", "SubscribeButton") : Object(v.d)("Get the All-Access Pass", "SubscribeButton"),
                            h = n && Object(N.h)(o, n.subscriptionBenefit);
                        if (l) {
                            var g = "";
                            if (g = d ? Object(v.d)("Subscribed", "SubscribeButton") : h ? Object(v.d)("Continue Sub for $1", "SubscribeButton") : Object(v.d)("Gift A Sub", "SubscribeButton"), p = this.props.hostChannelID ? Object(v.d)("Subscribed to {username}", {
                                    username: t.displayName || ""
                                }, "SubscribeButton") : g, d && !c) return r.createElement(O.z, {
                                disabled: !0,
                                ariaLabel: p,
                                icon: O.rb.Star
                            }, p);
                            c && (p = m)
                        } else p = c ? m : this.props.hostChannelID ? Object(v.d)("Subscribe to {username}", {
                            username: t.displayName || ""
                        }, "SubscribeButton") : Object(v.d)("Subscribe", "SubscribeButton");
                        var f = r.createElement(O.z, {
                                ariaLabel: p,
                                "data-a-target": l ? "subscribed-button" : "subscribe-button",
                                "data-test-selector": i.SubButton,
                                dropdown: !this.props.hideDropdownArrow,
                                fullWidth: !0,
                                icon: this.getButtonIcon(l, u),
                                onClick: this.props.renderBalloonInBalloonLayer ? this.handleButtonClick : void 0,
                                type: this.getButtonType(l)
                            }, p),
                            k = o[0];
                        return this.setBalloonWrapperContent(r.createElement(R, {
                            authToken: this.props.authToken,
                            channelLogin: this.props.channelLogin || "",
                            "data-test-selector": i.SubscribeBalloon,
                            handleSubMenuAction: this.handleSubMenuAction,
                            inPrimeRegion: s,
                            isEsportChannel: c,
                            isNonStandardSub: d,
                            isStaff: !(!this.props.sessionUser || !this.props.sessionUser.roles) && this.props.sessionUser.roles.isStaff,
                            isSubscribed: l,
                            productId: k ? k.id : "",
                            subbedTier: u || C.a.Prime,
                            userHasPrime: !1
                        })), this.props.renderBalloonInBalloonLayer ? r.createElement(O.Xa, {
                            "data-test-selector": i.BalloonLayerButton,
                            refDelegate: this.setContainerRefDelegate
                        }, f) : r.createElement(O.Xa, {
                            className: h ? "subscribe-button--promo" : ""
                        }, r.createElement(b.a, {
                            "data-test-selector": i.DefaultButton,
                            onToggle: this.handleMenuToggle
                        }, f, r.createElement(O.u, {
                            "data-a-target": "sub-balloon",
                            direction: this.getBalloonDirection(),
                            size: O.w.Large
                        }, this.balloonWrapperContent)))
                    }, t.prototype.getButtonType = function(e) {
                        O.F.Default;
                        return e && void 0 !== this.props.subscribedButtonType ? this.props.subscribedButtonType : e ? O.F.Success : this.props.unsubscribedButtonType || O.F.Default
                    }, t.prototype.getButtonIcon = function(e, t) {
                        var n = void 0;
                        return e ? n = t === C.a.Prime ? O.rb.Crown : O.rb.Star : this.props.forceIcon && (n = O.rb.StarHollow), n
                    }, t.prototype.isUserDataReady = function(e) {
                        return e.data && e.data.user && !e.data.loading && !e.data.error
                    }, t.prototype.checkAndDisplaySubscriptionCheckout = function() {
                        var e = v.n.get(c.b, "");
                        if (e) {
                            var t = this.props.data.user;
                            if (t && t.subscriptionProducts) t.subscriptionProducts.filter(function(e) {
                                return e
                            }).map(function(e) {
                                return e.name
                            }).includes(e) ? this.props.sessionUser ? this.props.showSubscriptionCheckoutModal({
                                mysteryGiftCount: Number(v.n.get(c.a, "")),
                                productName: e,
                                recipientLogin: v.n.get(c.c, ""),
                                trackingContext: {
                                    source: _.c.ChannelSubscribeButton
                                }
                            }) : this.props.showLoginModal() : Object(c.d)()
                        }
                    }, t
                }(r.Component),
                x = Object(h.compose)(Object(k.a)(I, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(y.a)([{
                    topic: function(e) {
                        return Object(w.F)(e.data.currentUser && e.data.currentUser.id || "")
                    },
                    mapMessageTypesToProps: {
                        "*": "subscriptionInfo"
                    },
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }]), Object(g.e)())(L),
                F = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.reportInteractive = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(x, {
                            authToken: this.props.authToken,
                            balloonDirection: this.props.balloonDirection,
                            channelLogin: this.props.channelLogin,
                            forceIcon: this.props.forceIcon,
                            hideEsportsSubscription: this.props.hideEsportsSubscription,
                            hideDropdownArrow: this.props.hideDropdownArrow,
                            hostChannelID: this.props.hostChannelID,
                            hostChannelLogin: this.props.hostChannelLogin,
                            renderBalloonInBalloonLayer: this.props.renderBalloonInBalloonLayer,
                            reportInteractive: this.reportInteractive,
                            sessionUser: this.props.sessionUser,
                            showLoginModal: this.props.showLoginModal,
                            showSubscriptionCheckoutModal: this.props.showSubscriptionCheckoutModal,
                            subscribedButtonType: this.props.subscribedButtonType,
                            unsubscribedButtonType: this.props.unsubscribedButtonType,
                            updateContainerWidth: this.props.updateContainerWidth
                        })
                    }, t = a.__decorate([Object(m.b)("SubscribeButton")], t)
                }(r.Component);
            var D = Object(o.connect)(function(e) {
                return {
                    authToken: Object(p.a)(e),
                    sessionUser: Object(p.e)(e)
                }
            }, function(e) {
                return Object(s.bindActionCreators)({
                    showLoginModal: Object(c.e)(d.a.ChannelSubscriptionButton),
                    showSubscriptionCheckoutModal: function(e) {
                        var t = a.__rest(e, []);
                        return Object(u.d)(l.a, {
                            component: "CheckoutModal",
                            loader: function() {
                                return Promise.all([n.e(0), n.e(204)]).then(n.bind(null, "KJv/"))
                            },
                            componentProps: t
                        })
                    }
                }, e)
            })(F);
            n.d(t, !1, function() {
                return F
            }), n.d(t, "a", function() {
                return D
            }), n.d(t, !1, function() {
                return i
            }), n.d(t, !1, function() {
                return L
            }), n.d(t, !1, function() {
                return x
            })
        },
        RFKy: function(e, t, n) {},
        RQ6e: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("TSYQ"),
                r = n("q1tI"),
                o = n("/7QA"),
                s = n("fvjX"),
                l = n("yR8l"),
                c = n("GnwI");
            var d = n("Ue10"),
                u = n("gIsd"),
                p = function(e) {
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
                        this.props.data.loading ? e = [r.createElement("option", {
                            key: "Loading"
                        }, Object(o.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || [{
                            id: "other",
                            text: Object(o.d)("Other Terms of Service Violation", "ReportUserModal")
                        }]).map(function(e) {
                            return r.createElement("option", {
                                key: e.id,
                                value: e.id
                            }, e.text)
                        });
                        return r.createElement(d.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(d.Ea, {
                            id: "reporting-modal__select",
                            label: Object(o.d)("Select Reason (required)", "ReportUserModal")
                        }, r.createElement(d.xb, {
                            id: "reporting-modal__select",
                            "data-test-selector": "reporting-modal.select",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.handleChange,
                            defaultValue: t
                        }, r.createElement("option", {
                            disabled: !0,
                            key: "default"
                        }, t), e)))
                    }, t
                }(r.Component),
                m = Object(s.compose)(Object(l.a)(u, {
                    options: function(e) {
                        return {
                            variables: {
                                content: e.reportContentType
                            }
                        }
                    }
                }), Object(c.b)("ReportReasonSelect"))(p);
            n("y4Ne");
            n.d(t, "a", function() {
                return h
            }), n.d(t, "b", function() {
                return v
            });
            var h;
            ! function(e) {
                e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError"
            }(h || (h = {}));
            var v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        description: "",
                        reason: null
                    }, t.headerMessage = Object(o.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: r.createElement("br", null),
                        tosLink: r.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(o.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.handleSubmit = function(e) {
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description) : t.props.onError(h.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        t.setState({
                            reason: e
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(d.Xa, {
                        display: d.X.Flex,
                        flexDirection: d.Aa.Column,
                        alignItems: d.f.Center,
                        justifyContent: d.Wa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === h.Success ? r.createElement("div", null, r.createElement(d.z, {
                        onClick: this.props.onClose
                    }, r.createElement(d.Xa, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Close", "ReportUser")))) : r.createElement("div", null, r.createElement(d.Xa, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, r.createElement(d.W, {
                        type: d.Tb.H4
                    }, this.props.title), r.createElement(d.Cb, {
                        color: d.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), r.createElement("form", null, r.createElement(d.Cb, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, r.createElement(m, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), r.createElement(d.Ea, {
                        id: "reporting__text-area",
                        label: Object(o.d)("Description (required)", "ReportUser")
                    }, r.createElement(d.Qb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), r.createElement(d.Cb, {
                        display: d.X.Flex,
                        justifyContent: d.Wa.Center
                    }, r.createElement(d.z, {
                        onClick: this.handleSubmit
                    }, r.createElement(d.Xa, {
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
                        default:
                            return null
                    }
                    var t = a({
                        "reporting__error-container": this.props.submitStatus !== h.Success,
                        "reporting__success-container": this.props.submitStatus === h.Success
                    });
                    return r.createElement(d.Cb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== h.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(r.Component)
        },
        RXle: function(e, t, n) {
            "use strict";
            var i = n("86FS");
            n.d(t, "VideoPreviewCard", function() {
                return i.a
            });
            n("0T/G");
            var a = n("0Rl0");
            n.d(t, "VideoPreviewCardPlaceholder", function() {
                return a.a
            })
        },
        RuiO: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Core_Services_Spade_SubEvent_User"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
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
                                value: "withVideo"
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
                                value: "videoID"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
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
                                        value: "channelID"
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
                                                value: "canPrimeSubscribe"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "subscriptionBenefit"
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
                                                        value: "tier"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "purchasedWithPrime"
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
                                            value: "withVideo"
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
                    end: 266
                }
            };
            n.loc.source = {
                body: "query Core_Services_Spade_SubEvent_User($channelID: ID! $withVideo: Boolean! $videoID: ID) {\nuser(id: $channelID) {\nid\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\ntier\npurchasedWithPrime\n}\n}\n}\nvideo(id: $videoID) @include(if: $withVideo) {\nid\nbroadcastType\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        SWMh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("mrSG"),
                a = n("b6Yk"),
                r = function(e, t, n) {
                    return i.__awaiter(void 0, void 0, Promise, function() {
                        var r, o;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    r = null, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, a.a.get("/v5/videos/" + e + "/markers")];
                                case 2:
                                    return (o = i.sent()).body && o.body.markers.game_changes && (r = o.body.markers.game_changes.sort(function(e, t) {
                                        return e.time - t.time
                                    }).map(function(e, n, i) {
                                        var a = i[n + 1];
                                        return {
                                            duration: a ? a.time - e.time : t - e.time,
                                            offset: e.time,
                                            label: e.label,
                                            thumbnailUrl: e.thumbnail.sheet_url,
                                            videoID: o.body.vod_id
                                        }
                                    }), n && n.boxArtURL && r.unshift({
                                        duration: r[0].offset,
                                        videoID: e,
                                        offset: 0,
                                        label: n.name,
                                        thumbnailUrl: n.boxArtURL
                                    })), [3, 4];
                                case 3:
                                    return i.sent(), [3, 4];
                                case 4:
                                    return [2, r || []]
                            }
                        })
                    })
                }
        },
        UUve: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "a", function() {
                return s
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "e", function() {
                return d
            });
            var i = n("/7QA"),
                a = n("y5D0"),
                r = "SUB_CHECKOUT__PRODUCT",
                o = "SUB_CHECKOUT__RECIPIENT",
                s = "SUB_CHECKOUT__MYSTERY_GIFT_COUNT",
                l = [r, o, s];

            function c() {
                l.forEach(function(e) {
                    return i.n.remove(e)
                })
            }

            function d(e) {
                return function() {
                    return Object(a.e)(e, {
                        onClose: c
                    })
                }
            }
        },
        W8Fi: function(e, t, n) {
            "use strict";

            function i(e) {
                return e.some(function(e) {
                    return !!e.self && !!e.self.promotion
                })
            }

            function a(e) {
                return e.some(function(e) {
                    return !!e.giftPromotion
                })
            }

            function r(e) {
                return e.some(function(e) {
                    return !!e.self && !!e.self.paidUpgradePromotion
                })
            }

            function o(e, t) {
                var n;
                return t ? n = e.giftPromotion : e.self && (n = e.self.promotion), n ? n.newPrice : e.price
            }

            function s(e, t) {
                var n;
                return t ? n = e.giftPromotion : e.self && (n = e.self.promotion), n ? parseInt(n.discountValue, 10) : 0
            }

            function l(e) {
                return e.self && e.self.paidUpgradePromotion ? e.self.paidUpgradePromotion.newPrice : e.price
            }

            function c(e) {
                return e.find(function(e) {
                    return !!e.self && !!e.self.paidUpgradePromotion
                }) || null
            }

            function d(e, t) {
                return !!e && !!t && r(e) && !t.paidUpgrade && !!t.gift && t.gift.isGift
            }
            n.d(t, "g", function() {
                return i
            }), n.d(t, "e", function() {
                return a
            }), n.d(t, "f", function() {
                return r
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "h", function() {
                return d
            })
        },
        X7Ac: function(e, t, n) {
            "use strict";
            var i = n("wbMx");
            n.d(t, "a", function() {
                return i.a
            }), n.d(t, "b", function() {
                return i.b
            })
        },
        XA5B: function(e, t, n) {},
        ZbA5: function(e, t, n) {
            "use strict";
            var i, a, r, o, s = n("mrSG"),
                l = n("TSYQ"),
                c = n("q1tI"),
                d = n("/7QA"),
                u = n("oB8h"),
                p = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var m = ((i = {})[u.a.Live] = "stream-type-indicator--live", i[u.a.Premiere] = "stream-type-indicator--premiere", i[u.a.Rerun] = "stream-type-indicator--rerun", i[u.a.WatchParty] = "stream-type-indicator--rerun", i),
                h = ((a = {})[u.a.Premiere] = p.rb.VideoPremiere, a[u.a.Rerun] = p.rb.VideoRerun, a[u.a.WatchParty] = p.rb.VideoRerun, a),
                v = ((r = {})[u.a.Premiere] = p.sb.Live, r[u.a.Rerun] = p.sb.Inherit, r[u.a.WatchParty] = p.sb.Inherit, r),
                g = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(p.Cb, {
                            className: this.getClassNames(),
                            color: p.O.Overlay,
                            background: p.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: p.x.Small,
                            display: p.X.Flex
                        }, c.createElement(p.Xa, {
                            display: p.X.Flex,
                            alignItems: p.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), c.createElement(p.W, {
                            type: p.Tb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[m[this.props.type]] = !0, l(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? c.createElement(p.Cb, {
                            borderRadius: p.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === u.a.Live ? c.createElement(p.Xa, {
                            className: "stream-type-indicator__live-wrapper",
                            display: p.X.Flex,
                            alignItems: p.f.Center
                        }, c.createElement(p.K, {
                            status: p.M.Live,
                            size: p.L.Small
                        })) : c.createElement(p.qb, {
                            asset: h[this.props.type],
                            type: v[this.props.type],
                            width: 14,
                            height: 14
                        })
                    }, t.prototype.getLabel = function() {
                        if (this.props.hosting) return Object(d.d)("Hosting", "StreamTypeIndicator");
                        switch (this.props.type) {
                            case u.a.Live:
                                return Object(d.d)("LIVE", "StreamTypeIndicator");
                            case u.a.Premiere:
                                return Object(d.d)("Premiere", "StreamTypeIndicator");
                            case u.a.Rerun:
                            case u.a.WatchParty:
                                return Object(d.d)("Rerun", "StreamTypeIndicator");
                            default:
                                return ""
                        }
                    }, t
                }(c.Component);
            n.d(t, !1, function() {
                return o
            }), n.d(t, "a", function() {
                return g
            })
        },
        ZtEv: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "e", function() {
                return r
            }), n.d(t, "a", function() {
                return o
            });
            var i, a, r, o, s = n("0Log");
            n.d(t, "d", function() {
                    return s.ModerationActions
                }),
                function(e) {
                    e[e.Message = 0] = "Message", e[e.ExtensionMessage = 1] = "ExtensionMessage", e[e.Moderation = 2] = "Moderation", e[e.ModerationAction = 3] = "ModerationAction", e[e.TargetedModerationAction = 4] = "TargetedModerationAction", e[e.AutoMod = 5] = "AutoMod", e[e.SubscriberOnlyMode = 6] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 7] = "FollowerOnlyMode", e[e.SlowMode = 8] = "SlowMode", e[e.EmoteOnlyMode = 9] = "EmoteOnlyMode", e[e.R9KMode = 10] = "R9KMode", e[e.Connected = 11] = "Connected", e[e.Disconnected = 12] = "Disconnected", e[e.Reconnect = 13] = "Reconnect", e[e.Hosting = 14] = "Hosting", e[e.Unhost = 15] = "Unhost", e[e.Hosted = 16] = "Hosted", e[e.Subscription = 17] = "Subscription", e[e.Resubscription = 18] = "Resubscription", e[e.GiftPaidUpgrade = 19] = "GiftPaidUpgrade", e[e.AnonGiftPaidUpgrade = 20] = "AnonGiftPaidUpgrade", e[e.SubGift = 21] = "SubGift", e[e.AnonSubGift = 22] = "AnonSubGift", e[e.Clear = 23] = "Clear", e[e.RoomMods = 24] = "RoomMods", e[e.RoomState = 25] = "RoomState", e[e.Raid = 26] = "Raid", e[e.Unraid = 27] = "Unraid", e[e.Ritual = 28] = "Ritual", e[e.Notice = 29] = "Notice", e[e.Info = 30] = "Info", e[e.BadgesUpdated = 31] = "BadgesUpdated", e[e.Purchase = 32] = "Purchase", e[e.BitsCharity = 33] = "BitsCharity", e[e.CrateGift = 34] = "CrateGift", e[e.RewardGift = 35] = "RewardGift", e[e.SubMysteryGift = 36] = "SubMysteryGift", e[e.AnonSubMysteryGift = 37] = "AnonSubMysteryGift"
                }(i || (i = {})),
                function(e) {
                    e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention"
                }(a || (a = {})),
                function(e) {
                    e[e.Ban = 0] = "Ban", e[e.Timeout = 1] = "Timeout", e[e.Delete = 2] = "Delete"
                }(r || (r = {})),
                function(e) {
                    e[e.MessageRejectedPrompt = 0] = "MessageRejectedPrompt", e[e.CheerMessageRejectedPrompt = 1] = "CheerMessageRejectedPrompt", e[e.MessageRejected = 2] = "MessageRejected", e[e.MessageAllowed = 3] = "MessageAllowed", e[e.MessageDenied = 4] = "MessageDenied", e[e.CheerMessageDenied = 5] = "CheerMessageDenied", e[e.CheerMessageTimeout = 6] = "CheerMessageTimeout", e[e.MessageModApproved = 7] = "MessageModApproved", e[e.MessageModDenied = 8] = "MessageModDenied"
                }(o || (o = {}))
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
                return h
            }), n.d(t, "d", function() {
                return v
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                r = n("oe5X"),
                o = n("0FG4"),
                s = n("kRBY"),
                l = n("60o1"),
                c = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"],
                d = {};

            function u(e, t, n, a, r, o, s) {
                void 0 === r && (r = !1), void 0 === o && (o = !1), void 0 === s && (s = !1);
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
                    messageParts: m(e, t.emotes || {}, t.bits, n, a, t.username),
                    deleted: r,
                    banned: s,
                    hidden: o,
                    timestamp: Date.now()
                }
            }

            function p(e, t) {
                return void 0 === t && (t = 15), "number" != typeof d[e] && (d[e] = Math.floor(Math.random() * t)), c[d[e]]
            }

            function m(e, t, n, i, l, c) {
                var d = Object(s.e)(a.p.store.getState()),
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
                return Object(r.a)(e, u)
            }

            function h(e) {
                return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g)
            }

            function v(e, t) {
                return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/" + Math.min(Math.ceil(t), 3) + ".0"
            }
        },
        a7aT: function(e, t, n) {},
        axFM: function(e, t, n) {},
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                r = n("kRBY"),
                o = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            var a, r, o, s;
                            return i.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, r = this.serialize(t.body, a), o = i.__assign({}, t, {
                                            body: r
                                        }), [4, this._fetch(e, o)];
                                    case 1:
                                        return s = l.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, l.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            var a;
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((a = r.sent()).requestError) throw a.requestError;
                                        if (a.error) throw new Error("Error while sending legacy-api request: " + a.error.status + " - " + a.error.message);
                                        return [2, i.__assign({}, a, {
                                            body: a.body
                                        })];
                                    case 2:
                                        throw r.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, a.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return i.__awaiter(this, void 0, Promise, function() {
                            var t, n, a, r;
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
                                        return a = i.sent(), e.headers && e.headers.get && (r = e.headers.get("Content-Type")) && -1 !== r.indexOf("application/json") && (t.requestError = a), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), i.__awaiter(this, void 0, Promise, function() {
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
                        var n = a.p.store.getState(),
                            i = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": a.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(r.e)(n);
                        return o && (i.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (i["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            i[e] && delete i[e]
                        }), i
                    }, e.logger = a.p.logger.withCategory("legacy-api"), e
                }()
        },
        br9A: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return c
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                r = n("2xye"),
                o = n("I6K6"),
                s = n("RuiO"),
                l = {
                    BuyCustomMysteryGift: "buy_custom_mystery_gift",
                    BuyGiftSub: "buy_gift_sub",
                    BuyGiftToPaidUpgrade: "buy_gift_to_paid_upgrade",
                    BuyMysteryGift: "buy_mystery_gift",
                    BuyPaidUpgrade: "buy_paid_upgrade",
                    ChangeTier: "change_tier",
                    ClickCheckout: "click_checkout_button",
                    ClickMoreSubOptions: "more_options_click",
                    ClickGiftSubOptions: "gift_options_click",
                    ClickPrimeFAQ: "click_prime_faq",
                    ClickSignupForPrime: "click_signup_for_prime",
                    ClickBack: "back_top_level",
                    CloseSubMenu: "close_subscribe_menu",
                    GiftASub: "gift_a_sub",
                    OpenSubMenu: "open_subscribe_menu",
                    SubWithPrime: "samus_spend_credit"
                };

            function c(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, l, c, d, u, p, m, h, v, g, f, b;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                t = a.o.getVideoPlayerTrackingData().vodID, n = !!t, l = {
                                    channelID: e.channelID,
                                    withVideo: !1
                                }, n && (l.withVideo = !0, l.videoID = t), c = null, i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, a.p.apollo.client.query({
                                    query: s,
                                    variables: l
                                })];
                            case 2:
                                return c = i.sent(), [3, 4];
                            case 3:
                                return d = i.sent(), a.k.error(d, "Failed to make query for channel info in FollowEvent reporting.", {
                                    channelID: e.channelID
                                }), [3, 4];
                            case 4:
                                return u = c && c.data && c.data.user || null, c && !u && a.k.error(new Error("GraphQL empty response"), "Query for channel info in SubEvent reporting returned no data.", {
                                    channelID: e.channelID
                                }), p = null, c && n && ((m = c && c.data && c.data.video) ? p = Object(o.a)(m.broadcastType) : a.k.error(new Error("GraphQL empty response"), "Query for video info in SubEvent reporting returned no data.", {
                                    currentVideoID: t
                                })), h = u && u.self, v = h ? !!h.subscriptionBenefit : null, g = h && h.subscriptionBenefit && h.subscriptionBenefit.purchasedWithPrime || !1, f = h ? h.canPrimeSubscribe : null, b = {
                                    action: e.action,
                                    can_subscribe: f,
                                    channel: e.channelLogin,
                                    channel_id: e.channelID,
                                    checkout_button_tier: e.checkoutButtonTier,
                                    has_sub_credit: e.hasSubCredit,
                                    host_channel: e.hostChannelLogin,
                                    host_channel_id: e.hostChannelID,
                                    is_menu_open: e.isMenuOpen,
                                    is_subscribed: v,
                                    is_subscribed_current_tier: h && h.subscriptionBenefit && h.subscriptionBenefit.tier,
                                    mystery_gift_count: e.mysteryGiftCount || null,
                                    sub_location: e.sub_location,
                                    sub_recipient: e.giftRecipient,
                                    modal: e.modal,
                                    modal_level: e.modalLevel || "",
                                    show_prime_content: e.showPrimeContent,
                                    show_resub: u ? f && g : null,
                                    vod_id: t,
                                    vod_type: p,
                                    viewport_height: window.innerHeight,
                                    viewport_width: window.innerWidth
                                }, a.o.track(r.SpadeEventType.Subscription, b), [2]
                        }
                    })
                })
            }
        },
        cESk: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "EventCollectionContent"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "EventCollection"
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
                                value: "title"
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
                            alias: {
                                kind: "Name",
                                value: "collectionImageURL"
                            },
                            name: {
                                kind: "Name",
                                value: "imageURL"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "width"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "720"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "405"
                                }
                            }],
                            directives: []
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "collectionStart"
                            },
                            name: {
                                kind: "Name",
                                value: "startAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "collectionEnd"
                            },
                            name: {
                                kind: "Name",
                                value: "endAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "nextLeaf"
                            },
                            name: {
                                kind: "Name",
                                value: "leaves"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "first"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "1"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "criteria"
                                },
                                value: {
                                    kind: "ObjectValue",
                                    fields: [{
                                        kind: "ObjectField",
                                        name: {
                                            kind: "Name",
                                            value: "firstPageOptions"
                                        },
                                        value: {
                                            kind: "ObjectValue",
                                            fields: [{
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "endsAfter"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "now"
                                                    }
                                                }
                                            }]
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
                                                        value: "startAt"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "endAt"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "channel"
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
                                        value: "isFollowing"
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
                    end: 364
                }
            };
            n.loc.source = {
                body: "fragment EventCollectionContent on EventCollection {\nid\ntitle\ndescription\ncollectionImageURL: imageURL(width:720 height:405)\ncollectionStart: startAt\ncollectionEnd: endAt\nnextLeaf: leaves(first: 1 criteria: { firstPageOptions: { endsAfter: $now } }) {\nedges {\nnode {\nid\nstartAt\nendAt\nchannel {\nid\nlogin\n}\n}\n}\n}\nowner {\nid\nlogin\ndisplayName\n}\nself {\nisFollowing\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        cMjZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("o4DC");

            function a(e) {
                return e && Object(i.c)(e) || ""
            }
        },
        cRsL: function(e, t, n) {},
        dAHa: function(e, t, n) {
            "use strict";
            var i, a = n("mrSG"),
                r = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                l = n("/7QA"),
                c = n("yR8l"),
                d = n("BhFH"),
                u = n("iS14"),
                p = n("geRD"),
                m = n("f00E"),
                h = n("D7An"),
                v = n("2xye"),
                g = n("GnwI"),
                f = n("QVaV"),
                b = n("Ue10"),
                k = (n("MPK0"), "report-wizard-block"),
                y = "report-wizard-unblock",
                C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return r.createElement(b.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": k
                            }, r.createElement(b.Xa, {
                                display: b.X.Flex,
                                alignItems: b.f.Center
                            }, r.createElement(b.qb, {
                                type: b.sb.Brand,
                                asset: b.rb.Ban
                            }), r.createElement(b.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(l.d)("Block {user}", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return r.createElement(b.Xa, {
                                className: "reporting-wizard__block-actions",
                                display: b.X.Flex,
                                alignItems: b.f.Center
                            }, r.createElement(b.qb, {
                                type: b.sb.Success,
                                asset: b.rb.FollowCheck
                            }), r.createElement(b.Xa, {
                                margin: {
                                    right: 1
                                }
                            }, r.createElement(b.W, {
                                className: "block-user__success",
                                type: b.Tb.Span
                            }, Object(l.d)("{user} blocked", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))), r.createElement(b.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": y
                            }, r.createElement(b.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(l.d)("Unblock", "ReportWizardBlockActions"))))
                        }, t.handleBlock = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(f.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return r.createElement(b.Cb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, r.createElement(b.Xa, null, Object(l.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), r.createElement(b.Cb, {
                            color: b.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, r.createElement(b.cc, {
                            baseFontSize: b.Ca.Size6
                        }, r.createElement("p", null, Object(l.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), r.createElement("ul", null, r.createElement("li", null, Object(l.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), r.createElement("li", null, Object(l.d)("Prevent them from hosting you", "ReportWizardBlockActions")), r.createElement("li", null, Object(l.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), r.createElement("li", null, Object(l.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), r.createElement(b.Xa, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(r.Component),
                E = n("4qQ0");
            ! function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(i || (i = {}));
            var S, w = {
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
                _ = {
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
                        getTitle: w.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: w.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(l.d)("They're participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: E.b.Harassment
                    },
                    violence: {
                        getTitle: function() {
                            return Object(l.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: E.b.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(l.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: E.b.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(l.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: E.b.Other
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
                        reportReason: E.b.Spam
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
                        reportReason: E.b.Impersonation
                    },
                    underage: {
                        getTitle: function() {
                            return Object(l.d)("They're underage (12 or younger)", "ReportModalWizard")
                        },
                        value: "underage",
                        reportReason: E.b.Underaged
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
                        reportReason: E.b.Other
                    },
                    inappropriateBadge: {
                        getTitle: function() {
                            return Object(l.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                        },
                        value: "emote/subscriber badge",
                        reportReason: E.b.Other
                    },
                    noModeration: {
                        getTitle: function() {
                            return Object(l.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                        },
                        value: "not moderating chat",
                        reportReason: E.b.Other
                    },
                    inappropriateExtension: {
                        getTitle: function() {
                            return Object(l.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: E.b.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(l.d)("They're cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: E.b.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(l.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: E.b.BitsViolation
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(l.d)("Their content is labeled incorrectly", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: E.b.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(l.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: E.b.Miscategorized
                    },
                    video_general: {
                        getTitle: w.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(l.d)("They're using hate speech, hateful symbols, or hateful media", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: E.b.HatefulConduct
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(l.d)("They're harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: E.b.Harassment
                    },
                    abusiveViolence: {
                        getTitle: w.abusiveViolence,
                        value: "threatening violence",
                        reportReason: E.b.Harm
                    },
                    commitingViolence: {
                        getTitle: w.commitingViolence,
                        value: "committing violence",
                        reportReason: E.b.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(l.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: E.b.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(l.d)("They're purposely revealing personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: E.b.Harassment
                    },
                    threat_me: {
                        getTitle: function() {
                            return Object(l.d)("At me", "ReportModalWizard")
                        },
                        value: "against me",
                        reportReason: E.b.Harm
                    },
                    threat_person: {
                        getTitle: function() {
                            return Object(l.d)("At someone else", "ReportModalWizard")
                        },
                        value: "against another person",
                        reportReason: E.b.Harm
                    },
                    threat_group: {
                        getTitle: function() {
                            return Object(l.d)("At a group of people", "ReportModalWizard")
                        },
                        value: "against group of people",
                        reportReason: E.b.Harm
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
                        reportReason: E.b.Prohibited
                    },
                    sexuallyViolent: {
                        getTitle: function() {
                            return Object(l.d)("Violent sexual conduct", "ReportModalWizard")
                        },
                        value: "sexually violent",
                        reportReason: E.b.SexualViolence
                    },
                    childAnimal: {
                        getTitle: function() {
                            return Object(l.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                        },
                        value: "sexual conduct; child or animal",
                        reportReason: E.b.SexualViolence
                    },
                    pornographic: {
                        getTitle: function() {
                            return Object(l.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                        },
                        value: "pornographic",
                        reportReason: E.b.SexualContent
                    },
                    gory: {
                        getTitle: function() {
                            return Object(l.d)("Extreme violence or gore", "ReportModalWizard")
                        },
                        value: "gory",
                        reportReason: E.b.Gore
                    },
                    suggestive: {
                        getTitle: function() {
                            return Object(l.d)("Sexually suggestive content", "ReportModalWizard")
                        },
                        value: "sexually suggestive",
                        reportReason: E.b.SexualContent
                    },
                    nudity: {
                        getTitle: function() {
                            return Object(l.d)("Full or partial nudity", "ReportModalWizard")
                        },
                        value: "nudity",
                        reportReason: E.b.SexualContent
                    },
                    other: {
                        getTitle: function() {
                            return Object(l.d)("There's something else wrong with it...", "ReportModalWizard")
                        },
                        value: "other",
                        reportReason: E.b.Other
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
                        reportReason: E.b.TosBanEvasion
                    },
                    evasion_chat: {
                        getTitle: function() {
                            return Object(l.d)("A chat ban from one or more channels", "ReportModalWizard")
                        },
                        value: "chat ban",
                        reportReason: E.b.ChatBanEvasion
                    },
                    evasion_messaging: {
                        getTitle: function() {
                            return Object(l.d)("A block from messaging me", "ReportModalWizard")
                        },
                        value: "messaging block",
                        reportReason: E.b.ChatBanEvasion
                    },
                    impersonation_me: {
                        getTitle: w.me,
                        value: "impersonating me",
                        reportReason: E.b.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(l.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: E.b.Impersonation
                    },
                    impersonation_other: {
                        getTitle: w.someoneElse,
                        value: "impersonating someone else",
                        reportReason: E.b.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(l.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: E.b.SelfHarm
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
                        reportContext: E.a.Whisper
                    },
                    username: {
                        getTitle: function() {
                            return Object(l.d)("In the username", "ReportModalWizard")
                        },
                        value: "username",
                        reportReason: E.b.OffensiveUsername
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
                        reportReason: E.b.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: w.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: w.abusive,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: w.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: E.b.Harm
                    },
                    external_commitingViolence: {
                        getTitle: w.commitingViolence,
                        value: "external site; committing violence",
                        reportReason: E.b.Harm
                    },
                    conduct_impersonation: {
                        getTitle: function() {
                            return Object(l.d)("impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: E.b.Impersonation
                    },
                    spam: {
                        getTitle: function() {
                            return Object(l.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                        },
                        value: "spam",
                        reportReason: E.b.Spam
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
                                a = n.value;
                            t.props.onChangeText(i, a)
                        }, t.onSelect = function(e) {
                            if (t.props.currentCard.items && e.currentTarget.parentElement) {
                                var n = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                    i = t.props.currentCard.items[n];
                                t.props.onChangeRadio(i)
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? r.createElement(b.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return r.createElement(b.Xa, {
                            className: "reporting-wizard-card"
                        }, e, r.createElement(b.Ea, {
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
                                    return r.createElement(b.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case i.Link:
                                    return r.createElement(b.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, r.createElement(b.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, r.createElement(b.Xa, {
                                        display: b.X.Flex
                                    }, r.createElement(b.Xa, {
                                        display: b.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, r.createElement(b.qb, {
                                        asset: b.rb.Document
                                    })), t.getTitle())));
                                case i.Textarea:
                                    var a = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        o = t.required && (!a || !!a && 0 === a.trim().length);
                                    return r.createElement(b.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, r.createElement(b.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(l.d)("Optional", "ReportModalWizardCard")
                                    }, r.createElement(b.Qb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && o,
                                        value: a,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case i.MultipleChoice:
                                default:
                                    return r.createElement(b.Xa, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, r.createElement(b.nb, {
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
                }(r.Component),
                T = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(S || (S = {}));
            var O, I, R, L = {
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
                x = {
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
                F = {
                    getDescription: function() {
                        return Object(l.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: x.thanks,
                    type: S.Info,
                    value: "end card"
                },
                D = {
                    socialMedia: a.__assign({}, F, {
                        items: [_.endBlurb_socialmedia]
                    }),
                    violence: a.__assign({}, F, {
                        items: [_.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: x.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [_.endLink_DMCA, _.endLink_trademark, _.endLink_devAgreement],
                        type: S.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: x.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [_.endLink_selfharm],
                        type: S.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: x.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [_.endLink_eventCoC],
                        value: "twitch event end",
                        type: S.Info
                    }
                },
                A = {
                    getTitle: x.report,
                    getLabel: function() {
                        return Object(l.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [_.video, _.whisper, _.chat, _.room, _.profile, _.username, _.report_other],
                    type: S.MultipleChoice,
                    value: "content type"
                },
                U = {
                    identifyUser: {
                        getTitle: x.reportVideo,
                        getLabel: L.identifyUser,
                        items: [_.video_streamer, _.video_someoneElse, _.video_chatSomeone],
                        type: S.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: x.reportVideo,
                        getLabel: L.contentGeneral,
                        items: [_.revealPersonalInfo, _.video_labeling, _.video_inactive, _.video_general, _.report_ip, _.violateDevAgreement, _.selfharm],
                        type: S.MultipleChoice,
                        value: "video report reason"
                    },
                    general: {
                        getTitle: x.reportVideo,
                        getLabel: L.content,
                        items: [_.report_username, _.violence, _.abusive, _.cheating, _.scam, _.inappropriateContent, _.evasion, _.impersonation, _.underage, _.bitsViolation],
                        type: S.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                P = {
                    content: {
                        getTitle: x.reportMessage,
                        getLabel: L.contentGeneral,
                        items: [_.revealPersonalInfo, _.evasion, _.spam, _.maliciousRaid, _.report_username, _.messaging_general, _.selfharm],
                        type: S.MultipleChoice,
                        value: "message report reason"
                    },
                    general: {
                        getTitle: x.reportMessage,
                        getLabel: L.content,
                        items: [_.report_emotes, _.violence, _.abusive, _.inappropriateContent, _.impersonation, _.underage, _.bitsViolation],
                        type: S.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                j = a.__assign({}, P.content, {
                    getDescription: function() {
                        return Object(l.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                    }
                }),
                M = {
                    content: {
                        getTitle: x.reportProfile,
                        getLabel: L.contentGeneral,
                        items: [_.revealPersonalInfo, _.inappropriateBadge, _.inappropriateExtension, _.noModeration, _.profile_general, _.report_ip, _.violateDevAgreement, _.selfharm],
                        type: S.MultipleChoice,
                        value: "profile report reason"
                    },
                    general: {
                        getTitle: x.reportProfile,
                        getLabel: L.content,
                        items: [_.report_username, _.violence, _.abusive, _.scam, _.inappropriateContent, _.evasion, _.impersonation, _.underage, _.bitsViolation],
                        type: S.MultipleChoice,
                        value: "profile general report reason"
                    }
                },
                W = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: L.identifyUser,
                    items: [_.report_channelOwner, _.report_member],
                    value: "room report user",
                    type: S.MultipleChoice
                },
                B = {
                    getTitle: x.tellUsMore,
                    items: [_.input_description],
                    type: S.Confirm,
                    value: "tell us more"
                },
                z = {
                    banEvasion: a.__assign({}, B, {
                        items: [_.input_usernames, _.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: a.__assign({}, B, {
                        items: [_.input_link, _.input_connection, _.input_description],
                        nextCard: D.socialMedia,
                        value: "social media tell us more"
                    })
                },
                X = {
                    content: {
                        getTitle: x.reportAbusive,
                        getLabel: L.relevantStatements,
                        items: [_.hateSpeech, _.harassment, _.abusiveViolence, _.commitingViolence, _.swatting, _.personalInfo],
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
                        items: [_.threat_me, _.threat_person, _.threat_group, _.threat_selfharm],
                        type: S.MultipleChoice,
                        value: "violence type"
                    }
                },
                V = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(l.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [_.location_onTwitch, _.location_anotherSite, _.location_TwitchEvent],
                        type: S.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: L.thisPersonIs,
                        getDescription: function() {
                            return Object(l.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [_.external_incitingRaids, _.external_threatening, _.external_harassment],
                        type: S.MultipleChoice,
                        nextCard: z.socialMedia,
                        value: "external site conduct"
                    },
                    external_violence: a.__assign({}, X.violence, {
                        items: [_.threat_me, _.threat_person, _.threat_group],
                        nextCard: z.socialMedia
                    }),
                    external_abusive: a.__assign({}, X.content, {
                        items: [_.hateSpeech, _.harassment, _.external_abusiveViolence, _.external_commitingViolence, _.swatting, _.personalInfo],
                        nextCard: z.socialMedia
                    })
                },
                G = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: L.contentGeneral,
                    items: [_.spam_bot, _.spam_scam, _.spam_repeated],
                    type: S.MultipleChoice,
                    value: "spam type"
                },
                H = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: L.relevantStatements,
                    items: [_.inappropriate_game, _.gory, _.sexuallyViolent, _.childAnimal, _.pornographic, _.suggestive, _.nudity, _.other],
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
                    items: [_.evasion_chat, _.evasion_sitewide, _.evasion_messaging],
                    type: S.MultipleChoice,
                    nextCard: z.banEvasion
                },
                Q = {
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
                    items: [_.impersonation_me, _.impersonation_brand, _.impersonation_other],
                    type: S.MultipleChoice,
                    value: "impersonation type"
                },
                K = A,
                $ = B,
                Z = F,
                Y = {
                    video: U.identifyUser,
                    whisper: j,
                    chat: P.content,
                    profile: M.content,
                    room: W,
                    "somewhere else": V.identifyLocation,
                    streamer: U.content,
                    "someone else in video": U.content,
                    "someone in chat": P.content,
                    general_video: U.general,
                    general_messaging: P.general,
                    general_profile: M.general,
                    "channel owner": M.content,
                    "community member": P.content,
                    "on twitch": M.content,
                    "another site": V.externalSite,
                    "twitch event": D.twitchEvent,
                    "brigading/raids": z.socialMedia,
                    threatening: V.external_violence,
                    "hateful/harassing": V.external_abusive,
                    "external site; threatening violence": V.external_violence,
                    "external site; committing violence": V.external_violence,
                    "external site; scam": z.socialMedia,
                    "ban evasion": q,
                    spam: G,
                    hateful: X.content,
                    impersonation: Q,
                    "violence/threats": X.violence,
                    "threatening violence": X.violence,
                    "committing violence": X.violence,
                    abusive: X.content,
                    "inappropriate content": H,
                    "intellectual property": D.legal,
                    "violating developer agreement": D.legal
                },
                J = {
                    selfharm: D.selfharm,
                    harm: D.violence,
                    other: Z
                },
                ee = {
                    CHANNEL_FEED_POST_REPORT: M.content,
                    COMMUNITY_REPORT: M.content,
                    CHAT_REPORT: P.content,
                    CLIP_REPORT: U.content,
                    EVENT_REPORT: M.content,
                    EXTENSION_REPORT: M.content,
                    LIVE_UP_REPORT: M.content,
                    ROOM_REPORT: W,
                    WHISPER_REPORT: j,
                    VOD_COMMENT_REPORT: P.content
                },
                te = "report-wizard-back",
                ne = "report-wizard-close",
                ie = "report-wizard-next",
                ae = "report-wizard-submit",
                re = function(e) {
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
                            return r.createElement(b.Xa, {
                                margin: {
                                    top: 1
                                }
                            }, r.createElement(b.W, null, Object(l.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(l.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                i = ne,
                                a = !1,
                                o = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case S.MultipleChoice:
                                    e = Object(l.d)("Next", "ReportModalWizard"), n = t.handleNext, i = ie, a = !t.state.currentSelection;
                                    break;
                                case S.Confirm:
                                    e = Object(l.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, a = !t.state.userTextInput, i = ae
                            }
                            return r.createElement(b.Xa, null, o, r.createElement(b.z, {
                                onClick: n,
                                disabled: a,
                                "data-test-selector": i
                            }, r.createElement(b.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return r.createElement(b.Xa, {
                                margin: {
                                    right: 1
                                },
                                display: b.X.InlineBlock
                            }, r.createElement(b.z, {
                                type: b.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": te
                            }, r.createElement(b.Xa, {
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
                                return t.props.trackClose(R.Finish, t.state.currentCard.value)
                            }), t.props.onClose()
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    i = t.state.prevSelections.concat(t.state.currentSelection),
                                    a = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    r = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    o = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = e.nextCard || $;
                                Y[t.state.currentSelection.value] && (s = Y[t.state.currentSelection.value]);
                                var l = t.state.currentSelection.reportReason || t.state.reportReason,
                                    c = s.type === S.Info;
                                t.setState({
                                    currentCard: s,
                                    reportReason: l,
                                    prevCards: c ? [] : n,
                                    prevSelections: i,
                                    targetUnknown: r,
                                    currentSelection: a || null,
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
                                    a = n && 0 === n.trim().length;
                                return !n || a
                            }).length
                        }, t.handleSubmit = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, r = this;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e = Object(l.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (a.sent(), this.props.submitStatus) {
                                                case T.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case T.a.Success:
                                                    i = Z, J[t] && (i = J[t]), this.state.currentCard.nextCard && (i = this.state.currentCard.nextCard), this.setState({
                                                        currentCard: i,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return r.trackNavigation(I.Submit)
                                                    });
                                                    break;
                                                case T.a.UserError:
                                                    this.setState({
                                                        error: Object(l.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case T.a.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(l.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(T.a.FormError), this.setState({
                                                error: e
                                            }), a.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, r, o = this;
                                return a.__generator(this, function(a) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], i = !n.differentTarget && this.state.targetUnknown, r = this.state.displacedSelections, this.state.currentSelection && (r = r.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: r,
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
                    return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(R.Close, this.state.currentCard.value)
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === S.Info && this.state.currentCard.blockPrompt ? r.createElement(C, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? r.createElement(b.Cb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === S.Info ? null : this.renderPrimer();
                        return r.createElement(b.Cb, {
                            className: "reporting-wizard",
                            display: b.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: b.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, r.createElement(b.W, {
                            bold: !0,
                            fontSize: b.Ca.Size4
                        }, this.getTitle()), n, r.createElement(b.Xa, {
                            margin: {
                                y: 1
                            }
                        }, r.createElement(N, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === T.a.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(r.Component),
                oe = n("s8Ou"),
                se = n("0hI/");
            n.d(t, "c", function() {
                    return I
                }), n.d(t, "a", function() {
                    return R
                }), n.d(t, "b", function() {
                    return ce
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(O || (O = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(I || (I = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(R || (R = {}));
            var le = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, i) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var n, r, o, s = this;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (n = i === E.a.Whisper ? i : this.props.reportContext.contentType, null === (r = {
                                                description: t,
                                                reason: e,
                                                content: n,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: T.a.UserError
                                        }), [2];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(p.a)(r))];
                                    case 2:
                                        return a.sent(), this.setState({
                                            submitStatus: T.a.Success
                                        }, function() {
                                            s.state.showWizard || s.trackAction(O.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return o = a.sent(), l.k.error(o, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: T.a.MutationError
                                        }), [3, 4];
                                    case 4:
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
                        n.props.blockUserMutation(n.props.data.targetUser.id, void 0, void 0, a.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !0
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, a.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(I.Open, void 0, e) : n.trackAction(O.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(I.Close, t, void 0, e) : n.trackAction(O.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, i, a) {
                        l.p.tracking.track(v.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === T.a.Success,
                            modal_type: "wizard_v1",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: a,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: i
                        })
                    }, n.trackAction = function(e) {
                        l.p.tracking.track(v.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === T.a.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(m.a)();
                    var i = l.p.experiments.getAssignment(h.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: T.a.Unsubmitted,
                        showWizard: "yes" === i,
                        openEventSent: !1,
                        closeEventSent: !1,
                        userBlocked: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackOpen()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose(), this.state.showWizard || this.trackClose()
                }, t.prototype.render = function() {
                    if (this.props.data.error) return r.createElement(b.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(b.W, {
                        fontSize: b.Ca.Size5
                    }, Object(l.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return r.createElement(b.gb, {
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
                        return this.state.showWizard ? this.props.data.loading ? r.createElement(b.Za, null) : r.createElement(re, a.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : r.createElement(T.b, a.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return r.createElement(b.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(b.W, {
                        fontSize: b.Ca.Size5
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
            }(r.Component);
            var ce = Object(s.compose)(Object(c.a)(oe, {
                name: "reportUser"
            }), Object(c.a)(se, {
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
            }, null))(le)
        },
        daWW: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("GFmA"),
                o = n("PfQt"),
                s = n("GnwI"),
                l = n("RXle"),
                c = n("L5dg"),
                d = n("Ue10"),
                u = function(e) {
                    var t = null,
                        n = null;
                    if (null === e.videos) t = a.createElement(c.a, {
                        placeholderCount: e.placeholderCount
                    });
                    else {
                        e.viewAllButtonProps && (n = a.createElement(o.a, i.__assign({}, e.viewAllButtonProps)));
                        var s = e.videos.map(function(t, n) {
                            return a.createElement(d.Xa, {
                                "data-a-target": "video-tower-card-" + n,
                                key: "video-" + n,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(l.VideoPreviewCard, {
                                hideGameArt: e.hideGameArt,
                                context: e.listContext || r.b.MixedGameAndChannelList,
                                tracking: {
                                    content: e.trackingContent,
                                    content_index: n,
                                    medium: e.trackingMedium
                                },
                                video: t,
                                trackImageLatency: 0 === n,
                                multipleVideoGameMarkersType: e.multipleVideoGameMarkersType,
                                hideTags: e.hideTags
                            }))
                        });
                        t = a.createElement(a.Fragment, null, s)
                    }
                    return a.createElement(d.Zb, {
                        gutterSize: d.bc.Small,
                        childWidth: e.videoCardSize || d.ac.Large,
                        placeholderItems: 20
                    }, t, n)
                },
                p = Object(s.b)("VideoTower", {
                    autoReportInteractive: !0
                })(u);
            n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return p
            })
        },
        efEE: function(e, t, n) {},
        gAd6: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoPreviewCardGameID"
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
                                value: "game"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 73
                }
            };
            n.loc.source = {
                body: "query VideoPreviewCardGameID($name: String!) {\ngame(name: $name) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
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
        gl36: function(e, t, n) {},
        he03: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "PreviewCardVideo"
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
                                value: "animatedPreviewURL"
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
                                        value: "boxArtURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "40"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "56"
                                        }
                                    }],
                                    directives: []
                                }, {
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
                                            value: "50"
                                        }
                                    }],
                                    directives: []
                                }]
                            }
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
                                        value: "isRestricted"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "viewingHistory"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "position"
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
                                        }]
                                    }
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
                                value: "restriction"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "productName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "productTitle"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contentTags"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "tagFragment"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 454
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nfragment PreviewCardVideo on Video {\nanimatedPreviewURL\ngame {\nboxArtURL(width: 40 height: 56)\nid\ndisplayName\nname\n}\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\nprofileImageURL(width: 50)\n}\npreviewThumbnailURL(width: 320 height: 180)\npublishedAt\nself {\nisRestricted\nviewingHistory {\nposition\nupdatedAt\n}\n}\ntitle\nviewCount\nrestriction {\nproductName\nproductTitle\n}\ncontentTags {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = i
        },
        i6WW: function(e, t, n) {
            "use strict";
            var i = n("/7QA"),
                a = n("RcPG"),
                r = new RegExp("(?:^|\\s)(?:https?://)?clips.twitch.tv/(\\w+)(?:/)?(\\w+)?(?:/edit)?(?:$|\\s)?"),
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
                    type: a.a.Text,
                    content: " <" + Object(i.d)("deleted link", "CreateMessageData") + "> "
                };
                var c = n[1],
                    d = n[2],
                    u = "" + (c || "https://") + d;
                if (t.parseClips && function(e) {
                        void 0 === e && (e = "");
                        var t = r.test(e) && !e.includes("clips.twitch.tv/2017/"),
                            n = o.test(e);
                        return t || n
                    }(u)) {
                    var p = function(e) {
                        void 0 === e && (e = "");
                        var t = e.match(r);
                        if (t && t.length > 0 && void 0 !== t.index) return t[1];
                        var n = e.match(o);
                        return n && n.length > 0 && void 0 !== n.index ? n[2] : ""
                    }(u);
                    return {
                        type: a.a.ClipLink,
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
                        type: a.a.VideoLink,
                        content: {
                            id: m,
                            url: u,
                            displayText: e
                        }
                    }
                }
                return {
                    type: a.a.Link,
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
                a = n("yR8l"),
                r = n("8jSG"),
                o = n("cMjZ"),
                s = n("zixI");

            function l() {
                var e = this;
                return Object(a.a)(s, {
                    props: function(t) {
                        return {
                            unblockUserMutation: function(n, a) {
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
                                                            id: Object(o.a)(a),
                                                            fragment: r
                                                        });
                                                        t && (t.blockedUsers = t.blockedUsers.filter(function(e) {
                                                            return null !== e && e.id !== n
                                                        }), e.writeFragment({
                                                            id: Object(o.a)(a),
                                                            fragment: r,
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
        irYM: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                a = n("fvjX"),
                r = n("1/iK"),
                o = n("y5D0"),
                s = n("kRBY"),
                l = n("mrSG"),
                c = n("q1tI"),
                d = n("/7QA"),
                u = n("yR8l"),
                p = n("geRD"),
                m = n("ug+5"),
                h = n("Ue10"),
                v = n("DXJk"),
                g = n("wSZZ"),
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleButton = function(e) {
                            return e && (e.stopPropagation(), e.preventDefault()), t.toggleFollowing()
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = Object(d.d)("Remind Me", "FollowEvent"),
                            t = Object(d.d)("Reminder Set", "FollowEvent");
                        if (this.props.small) {
                            var n = e,
                                i = h.rb.Heart;
                            return this.props.areNotificationsEnabled && (n = t, i = h.rb.FollowCheck), c.createElement(h.Wb, {
                                label: n,
                                direction: this.props.tooltipDirection
                            }, c.createElement(h.A, {
                                size: h.B.Default,
                                icon: i,
                                onClick: this.handleButton,
                                ariaLabel: n
                            }))
                        }
                        return c.createElement(h.z, {
                            type: this.props.areNotificationsEnabled ? h.F.Success : h.F.Default,
                            onClick: this.handleButton,
                            icon: this.props.areNotificationsEnabled ? h.rb.FollowCheck : h.rb.Heart,
                            ariaLabel: this.props.areNotificationsEnabled ? t : e
                        }, this.props.areNotificationsEnabled ? t : e)
                    }, t.prototype.toggleFollowing = function() {
                        if (!this.props.isLoggedIn) return this.props.login();
                        this.props.areNotificationsEnabled ? this.triggerUnfollowMutation() : this.triggerFollowMutation(), Object(m.d)({
                            action: this.props.areNotificationsEnabled ? m.b.EmailReminderOff : m.b.EmailReminderOn,
                            channelLogin: this.props.channelLogin || "undefined",
                            channelID: this.props.channelID || "undefined",
                            eventID: this.props.eventID,
                            location: this.props.eventLocation
                        })
                    }, t.prototype.triggerFollowMutation = function() {
                        var e, t = {
                            eventID: this.props.eventID
                        };
                        e = "EventCollection" === this.props.eventTypename ? {
                            followEvent: {
                                __typename: "FollowEventPayload",
                                event: {
                                    __typename: "EventCollection",
                                    id: this.props.eventID,
                                    self: {
                                        __typename: "EventSelfConnection",
                                        isFollowing: !0
                                    }
                                }
                            }
                        } : {
                            followEvent: {
                                __typename: "FollowEventPayload",
                                event: {
                                    __typename: "EventLeaf",
                                    id: this.props.eventID,
                                    self: {
                                        __typename: "EventSelfConnection",
                                        isFollowing: !0
                                    }
                                }
                            }
                        };
                        var n = Object(p.b)(t, e);
                        this.props.followEvent(n)
                    }, t.prototype.triggerUnfollowMutation = function() {
                        var e, t = {
                            eventID: this.props.eventID
                        };
                        e = "EventCollection" === this.props.eventTypename ? {
                            unfollowEvent: {
                                __typename: "UnfollowEventPayload",
                                event: {
                                    __typename: "EventCollection",
                                    id: this.props.eventID,
                                    self: {
                                        __typename: "EventSelfConnection",
                                        isFollowing: !1
                                    }
                                }
                            }
                        } : {
                            unfollowEvent: {
                                __typename: "UnfollowEventPayload",
                                event: {
                                    __typename: "EventLeaf",
                                    id: this.props.eventID,
                                    self: {
                                        __typename: "EventSelfConnection",
                                        isFollowing: !1
                                    }
                                }
                            }
                        };
                        var n = Object(p.b)(t, e);
                        this.props.unfollowEvent(n)
                    }, t
                }(c.PureComponent),
                b = Object(a.compose)(Object(u.a)(v, {
                    name: "followEvent"
                }), Object(u.a)(g, {
                    name: "unfollowEvent"
                }))(f);
            var k = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(s.f)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    login: function() {
                        return Object(o.e)(r.a.EventFollowButton)
                    }
                }, e)
            })(b);
            n.d(t, "a", function() {
                return k
            })
        },
        jKKg: function(e, t, n) {},
        jeZI: function(e, t, n) {},
        "kF1+": function(e, t, n) {},
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
        kVMo: function(e, t, n) {},
        km1c: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("TSYQ"),
                r = n("q1tI"),
                o = n("oJmH"),
                s = n("/7QA"),
                l = n("ZS2+"),
                c = n("MJbm"),
                d = n("eJ65"),
                u = n("yR8l"),
                p = n("x7UT"),
                m = n("0Log"),
                h = n("/aPz"),
                v = n("D7An"),
                g = n("gOYK"),
                f = n("d2C5"),
                b = n("jSzL"),
                k = n("Ahlu"),
                y = n("/MKj"),
                C = n("fvjX"),
                E = n("aCAx"),
                S = n("7CzK"),
                w = n("94Uw"),
                _ = n("Ue10"),
                N = (n("/nm5"), n("41XU")),
                T = l.a.wrap(function() {
                    return n.e(143).then(n.bind(null, "7lJP"))
                }, "UserImageUploader"),
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openModal = function() {
                            var e = t.props.data && t.props.data.user;
                            e && e.id && e.login && t.props.showModal(T, {
                                userID: e.id,
                                login: e.login,
                                displayName: e.displayName || e.login,
                                imageType: w.a.ProfileBanner,
                                showCloser: !0,
                                successCallback: t.imageUploaded
                            })
                        }, t.imageUploaded = function() {
                            t.props.data && t.props.data.refetch()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e, t, n = "channel-banner__image-default",
                            i = "channel-banner__header-type",
                            o = {
                                "channel-banner--open": !this.props.collapsed,
                                "channel-banner--side-nav": this.props.isSideNavBanner
                            },
                            l = {
                                "channel-banner__image--side-nav": this.props.isSideNavBanner
                            },
                            c = {
                                "channel-banner__edit-overlay-button--side-nav": this.props.isSideNavBanner
                            },
                            d = this.props.data;
                        d && !d.loading && this.props.firstPageLoaded && d.user && d.user.bannerImageURL ? (n = "channel-banner__image-loaded", t = {
                            backgroundImage: "url(" + d.user.bannerImageURL + ")"
                        }) : (l["channel-banner__image--default"] = !0, t = {
                            backgroundImage: "url(" + S + ")"
                        }), this.props.isSideNavBanner && (i = "channel-banner__side-nav-type");
                        var u = null;
                        if (this.props.canEdit) {
                            var p = this.props.isSideNavBanner ? r.createElement(_.Xa, {
                                display: _.X.Flex,
                                padding: {
                                    x: 3
                                },
                                justifyContent: _.Wa.Between,
                                fullWidth: !0
                            }, r.createElement(_.qb, {
                                asset: _.rb.Edit
                            }), r.createElement(_.W, null, Object(s.d)("Edit", "ChannelBanner"))) : r.createElement(_.Xa, null, r.createElement(_.Xa, null, r.createElement(_.qb, {
                                asset: _.rb.Edit
                            })), Object(s.d)("Update Profile Banner", "ChannelBanner"));
                            u = r.createElement(_.Cb, {
                                className: a("channel-banner__edit-overlay", c),
                                background: _.r.Overlay,
                                position: _.hb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                fullWidth: !0
                            }, r.createElement("button", {
                                className: "channel-banner__edit-overlay-button",
                                "data-test-selector": "channel-banner__edit-overlay-interactable",
                                onClick: this.openModal
                            }, r.createElement(_.Xa, {
                                display: _.X.Flex,
                                alignItems: _.f.Center,
                                flexDirection: _.Aa.Column,
                                justifyContent: _.Wa.Center
                            }, p)))
                        }
                        return e = r.createElement("div", {
                            className: a("channel-banner__image", l),
                            "data-test-selector": n,
                            style: t
                        }, u), r.createElement("div", {
                            className: a("channel-banner", o),
                            "data-test-selector": i,
                            onTransitionEnd: this.props.onTransitionEnd
                        }, r.createElement(_.Pa, {
                            fullWidth: !0,
                            fullHeight: !0
                        }, e))
                    }, t.prototype.componentWillUnmount = function() {
                        this.props.closeModal()
                    }, t
                }(r.Component),
                I = Object(u.a)(N, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin || !e.firstPageLoaded
                    }
                })(O);
            var R, L = Object(y.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded
                    }
                }, function(e) {
                    return Object(C.bindActionCreators)({
                        closeModal: E.c,
                        showModal: E.d
                    }, e)
                })(I),
                x = n("tuvy"),
                F = n("i4un"),
                D = n("dIU+"),
                A = n("GnwI"),
                U = n("Ba7Q"),
                P = n("QjI3"),
                j = (n("BOil"), n("HXcb"));
            n.d(t, "a", function() {
                return G
            }), n.d(t, "b", function() {
                return H
            }), n.d(t, "d", function() {
                return B
            }), n.d(t, "c", function() {
                return Q
            });
            var M, W = l.a.wrap(function() {
                return n.e(144).then(n.bind(null, "g9Rq"))
            }, "EditProfileOverlay");
            ! function(e) {
                e.SocialButtonsDefault = "channel-header__social-buttons-default", e.SocialButtonsVariantB = "channel-header__social-buttons-variant-b"
            }(M || (M = {}));
            var B, z = "channel-header__edit-profile-overlay",
                X = "channel-header__verified-badge",
                V = "channel-header__live-indicator",
                G = "yes",
                H = "browser-notifications-upsell-seen";
            ! function(e) {
                e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
            }(B || (B = {}));
            var q = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.verifiedBadgeElement = r.createElement(_.Wb, {
                            label: Object(s.d)("Verified", "ChannelHeader"),
                            direction: _.Yb.Right
                        }, r.createElement(_.Xa, {
                            className: "channel-header__verified",
                            "data-target": X,
                            display: _.X.Flex,
                            alignItems: _.f.Center,
                            margin: {
                                left: 1
                            }
                        }, r.createElement(_.qb, {
                            asset: _.rb.Verified
                        }))), n.ChannelStatusIndicatorElement = r.createElement(_.Xa, {
                            margin: {
                                left: 1
                            },
                            "data-target": V
                        }, r.createElement(_.Wb, {
                            label: Object(s.d)("Live Now", "ChannelHeader"),
                            direction: _.Yb.Right
                        }, r.createElement(_.K, {
                            status: _.M.Live,
                            pulse: !0
                        }))), n.onResetOffline = function() {
                            n.resetOfflineTimer = void 0, n.setState({
                                live: !1
                            })
                        }, n.renderAvatarEditButton = function() {
                            return n.props.data && n.props.data.user && n.props.data.user.id && n.props.data.user.login && n.isChannelEditor() ? r.createElement(_.Cb, {
                                className: z,
                                background: _.r.Overlay,
                                position: _.hb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                fullHeight: !0,
                                fullWidth: !0,
                                display: _.X.InlineFlex,
                                alignItems: _.f.Center,
                                justifyContent: _.Wa.Center
                            }, r.createElement(W, {
                                userID: n.props.data.user.id,
                                login: n.props.data.user.login,
                                displayName: n.props.data.user.displayName || n.props.data.user.login
                            })) : null
                        }, n.toggleChannelBanner = function() {
                            n.setState(function(e) {
                                var t = !e.bannerSlideIn;
                                return t ? {
                                    bannerHidden: !e.bannerHidden,
                                    bannerSlideIn: t
                                } : {
                                    bannerSlideIn: t
                                }
                            })
                        }, n.completedBannerAnimation = function() {
                            n.setState(function(e) {
                                return e.bannerSlideIn ? e : {
                                    bannerHidden: !0
                                }
                            })
                        }, n.onUpdateDebounce = function() {
                            if (!n.resizeAnimationFrame && n.channelHeader) {
                                var e = n.channelHeader.querySelector('[data-target="channel-header-left"]');
                                n.updateWidth(n.getWidth(e).width), n.resizeAnimationFrame = requestAnimationFrame(n.handleWindowResize)
                            }
                        }, n.handleWindowResize = function() {
                            n.resizeAnimationFrame = null, n.getChannelHeaderSize()
                        }, n.maybeShowBrowserNotificationsUpsell = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return !s.m.get(H, !1) && Object(f.a)() && Object(b.c)() && s.p.experiments.getAssignment(v.b.BrowserNotificationsUpsell) === G ? [4, g.a.hasPushSubscription()] : [3, 3];
                                        case 1:
                                            return e.sent() ? [3, 3] : (s.m.set(H, !0), this.props.showBrowserNotificationsUpsellModal(), [4, g.a.userSubscribe(k.a.Channel)]);
                                        case 2:
                                            e.sent(), this.props.closeBrowserNotificationsUpsellModal(), e.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, n.saveChannelHeaderRef = function(e) {
                            return n.channelHeader = e
                        }, n.toggleLiveNotificationsBtnShown = function(e) {
                            n.setState({
                                showLiveNotificationsButton: e
                            })
                        }, n.state = {
                            live: !1,
                            bannerHidden: !0,
                            bannerSlideIn: !1
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.componentWillMount = function() {
                        this.setState({
                            live: this.isLiveGraphQL(this.props)
                        })
                    }, t.prototype.componentDidMount = function() {
                        window.addEventListener("resize", this.onUpdateDebounce), !this.props.data || this.props.data.loading || this.props.data.error || this.getChannelHeaderSize(), this.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props,
                            n = e.pubsub.messages.viewCount,
                            i = t.pubsub.messages.viewCount;
                        e.channelLogin !== t.channelLogin ? (this.clearResetOfflineTimer(), this.setState({
                            live: this.isLiveGraphQL(e),
                            showLiveNotificationsButton: void 0
                        })) : n && n !== i ? (this.clearResetOfflineTimer(), this.resetOfflineTimer = setTimeout(this.onResetOffline, 6e4), this.setState({
                            live: !0
                        })) : this.isLiveGraphQL(e) !== this.isLiveGraphQL(t) && (this.clearResetOfflineTimer(), this.setState({
                            live: this.isLiveGraphQL(e)
                        })), e.data && !e.data.loading && void 0 === this.state.showLiveNotificationsButton && this.setState({
                            showLiveNotificationsButton: this.getFollowingState(e)
                        })
                    }, t.prototype.componentDidUpdate = function() {
                        this.channelHeader && this.updateWidth(this.getWidth(this.channelHeader.querySelector('[data-target="channel-header-left"]')).width), this.onUpdateDebounce(), this.reportInteractive()
                    }, t.prototype.componentWillUnmount = function() {
                        this.resizeAnimationFrame && cancelAnimationFrame(this.resizeAnimationFrame), window.removeEventListener("resize", this.onUpdateDebounce)
                    }, t.prototype.updateWidth = function(e) {
                        var t = e !== this.width || this.width !== this.prevWidth;
                        void 0 !== this.width && (this.prevWidth = this.width), this.width !== e && (this.width = e), t && (this.resizeAnimationFrame && (cancelAnimationFrame(this.resizeAnimationFrame), this.resizeAnimationFrame = null), this.onUpdateDebounce())
                    }, t.prototype.render = function() {
                        var e, t, n = 0,
                            i = 0,
                            o = 0,
                            l = s.a.defaultAvatarURL;
                        this.props.data && this.props.data.user && !this.props.data.loading && !this.props.data.error && (n = this.props.data.user.videos && this.props.data.user.videos.totalCount || 0, i = this.props.data.user.followers && this.props.data.user.followers.totalCount || 0, o = this.props.data.user.follows && this.props.data.user.follows.totalCount || 0, l = this.props.data.user.profileImageURL || s.a.defaultAvatarURL, e = this.props.data.user.displayName, t = this.props.data.user.roles && this.props.data.user.roles.isPartner);
                        var u, p = this.state.live && !this.isActiveTab(B.Channel),
                            m = this.createChannelLinks(n, i, o),
                            h = {
                                "channel-header__user": !0,
                                "channel-header__user--selected": this.isActiveTab(B.Channel)
                            },
                            v = r.createElement(_.Xa, {
                                display: _.X.Flex,
                                flexWrap: _.Ba.NoWrap,
                                alignItems: _.f.Center,
                                flexShrink: 0
                            }, r.createElement(_.Xa, {
                                className: "channel-header__user-avatar channel-header__user-avatar--active",
                                margin: {
                                    right: 1
                                },
                                display: _.X.Flex,
                                flexShrink: 0,
                                alignItems: _.f.Stretch
                            }, r.createElement(_.Xa, {
                                position: _.hb.Relative
                            }, r.createElement(_.q, {
                                size: 36,
                                src: l,
                                alt: e || ""
                            }), this.renderAvatarEditButton())), e ? r.createElement(_.W, {
                                type: _.Tb.H5
                            }, e) : r.createElement(_.Xa, {
                                alignItems: _.f.Center
                            }, r.createElement(_.gb, {
                                lineCount: 1,
                                width: 120
                            })), p && this.ChannelStatusIndicatorElement, t && this.verifiedBadgeElement);
                        u = this.isActiveTab(B.Channel) ? r.createElement("div", {
                            className: "channel-header__banner-toggle",
                            onClick: this.toggleChannelBanner,
                            "data-target": "channel-header__channel-link",
                            "data-a-target": "user-channel-header-item"
                        }, v) : this.props.channelLogin ? r.createElement(_.U, {
                            to: "/" + this.props.channelLogin || "#",
                            "data-target": "channel-header__channel-link",
                            "data-a-target": "user-channel-header-item",
                            hoverUnderlineNone: !0
                        }, v) : v;
                        var g = this.state.bannerHidden ? _.X.HideAccessible : _.X.Block,
                            f = null,
                            b = this.renderSocialButtons();
                        return this.isActiveTab(B.Channel) && (f = r.createElement(_.Xa, {
                            display: g
                        }, r.createElement(L, {
                            channelLogin: this.props.channelLogin,
                            canEdit: this.isChannelEditor(),
                            collapsed: !this.state.bannerSlideIn,
                            onTransitionEnd: this.completedBannerAnimation
                        }))), r.createElement(_.Xa, {
                            className: "channel-header",
                            flexShrink: 0
                        }, f, r.createElement(_.Xa, {
                            display: _.X.Flex,
                            justifyContent: _.Wa.Between,
                            flexWrap: _.Ba.NoWrap,
                            fullHeight: !0,
                            refDelegate: this.saveChannelHeaderRef,
                            margin: {
                                x: 3
                            }
                        }, r.createElement(_.Xa, {
                            display: _.X.Flex,
                            alignItems: _.f.Stretch,
                            flexShrink: 0,
                            flexWrap: _.Ba.NoWrap,
                            "data-target": "channel-header-left"
                        }, r.createElement(_.Pa, {
                            className: a(h),
                            padding: {
                                y: .5,
                                right: 2
                            },
                            display: _.X.Flex,
                            flexWrap: _.Ba.NoWrap,
                            alignItems: _.f.Center,
                            flexShrink: 0
                        }, u), this.renderTabs(m), r.createElement(_.Xa, {
                            className: "channel-header__item channel-header__item--no-underline",
                            padding: {
                                x: 1
                            },
                            flexShrink: 0,
                            alignSelf: _.g.Center,
                            "data-target": "channel-header-button"
                        }, r.createElement(d.a, {
                            alwaysMountBalloonContent: !0
                        }, r.createElement(_.A, {
                            icon: _.rb.NavMore,
                            ariaLabel: Object(s.d)("More", "ChannelHeader")
                        }), r.createElement(_.u, {
                            direction: _.v.Bottom,
                            noTail: !0
                        }, r.createElement(_.Xa, {
                            padding: {
                                y: 1
                            }
                        }, this.renderDropdown(m)))))), b), r.createElement(c.a, {
                            onResize: this.onUpdateDebounce
                        }))
                    }, t.prototype.isLiveGraphQL = function(e) {
                        if (e.data && e.data.user) return !!e.data.user.stream && "" !== e.data.user.stream.id
                    }, t.prototype.clearResetOfflineTimer = function() {
                        this.resetOfflineTimer && (clearTimeout(this.resetOfflineTimer), this.resetOfflineTimer = void 0)
                    }, t.prototype.generateUserLink = function(e) {
                        void 0 === e && (e = "");
                        var t = this.props.channelLogin;
                        return t ? "/" + t + "/" + e : "#"
                    }, t.prototype.renderTabs = function(e) {
                        var t = this;
                        return e.map(function(e) {
                            var n = e.count ? r.createElement(_.Xa, {
                                    className: "channel-header__item-count",
                                    display: _.X.Flex,
                                    margin: {
                                        left: .5
                                    }
                                }, r.createElement(_.W, {
                                    type: _.Tb.Span,
                                    fontSize: _.Ca.Size5
                                }, e.count)) : null,
                                i = t.generateUserLink(e.pathSuffix),
                                a = e.label.toLowerCase() + "-channel-header-item";
                            return r.createElement(_.Pa, {
                                key: "channel-header__item--" + e.label,
                                alignItems: _.f.Center,
                                flexShrink: 0
                            }, r.createElement(_.U, {
                                className: "channel-header__item channel-header__item--hide " + (e.isSelected ? "channel-header__item--selected" : ""),
                                to: i,
                                "data-target": "channel-header-item",
                                "data-a-target": a,
                                "data-test-selector": a,
                                hoverUnderlineNone: !0
                            }, r.createElement(_.Xa, {
                                padding: {
                                    x: 2,
                                    y: .5
                                },
                                display: _.X.Flex
                            }, r.createElement(_.W, {
                                type: _.Tb.Span,
                                fontSize: _.Ca.Size5
                            }, e.label), n)))
                        })
                    }, t.prototype.renderDropdown = function(e) {
                        var t = this;
                        return e.map(function(e) {
                            var n = e.count ? r.createElement(_.Xa, {
                                    className: "channel-header__item-count",
                                    display: _.X.Flex,
                                    margin: {
                                        left: .5
                                    }
                                }, r.createElement(_.W, {
                                    type: _.Tb.Span
                                }, e.count)) : null,
                                i = t.generateUserLink(e.pathSuffix);
                            return r.createElement(_.Xa, {
                                key: "channel-header__dropdown-item--" + e.label,
                                "data-target": "channel-header-dropdown-item"
                            }, r.createElement(_.Ua, {
                                linkTo: i,
                                disabled: "#" === i
                            }, r.createElement(_.Xa, {
                                className: "channel-header__dropdown-hover-target",
                                padding: {
                                    y: .5,
                                    x: 1
                                },
                                display: _.X.Flex
                            }, r.createElement(_.W, {
                                type: _.Tb.Span
                            }, e.label), n)))
                        })
                    }, t.prototype.createChannelLinks = function(e, t, n) {
                        var i = [{
                            label: Object(s.d)("Videos", "ChannelHeader"),
                            count: Object(s.f)(e),
                            pathSuffix: Object(x.b)() ? "videos" : "videos/all",
                            isSelected: this.isActiveTab(B.Videos)
                        }];
                        return Object(x.b)() || Object(x.a)() || (i = i.concat([{
                            label: Object(s.d)("Clips", "ChannelHeader"),
                            pathSuffix: "clips",
                            isSelected: this.isActiveTab(B.Clips)
                        }, {
                            label: Object(s.d)("Collections", "ChannelHeader"),
                            pathSuffix: "collections",
                            isSelected: this.isActiveTab(B.Collections)
                        }])), i.concat([{
                            label: Object(s.d)("Events", "ChannelHeader"),
                            pathSuffix: "events",
                            isSelected: this.isActiveTab(B.Events)
                        }, {
                            label: Object(s.d)("Followers", "ChannelHeader"),
                            count: Object(s.f)(t),
                            pathSuffix: "followers",
                            isSelected: this.isActiveTab(B.Followers)
                        }, {
                            label: Object(s.d)("Following", "ChannelHeader"),
                            count: Object(s.f)(n),
                            pathSuffix: "following",
                            isSelected: this.isActiveTab(B.Following)
                        }])
                    }, t.prototype.isActiveTab = function(e) {
                        return B[this.props.currentPage] === B[e]
                    }, t.prototype.isChannelEditor = function() {
                        return !!(this.props.data && this.props.data.currentUser && this.props.data.user && this.props.data.currentUser.roles && (this.props.data.currentUser.id === this.props.data.user.id || this.props.data.currentUser.roles.isStaff || this.props.data.currentUser.roles.isSiteAdmin))
                    }, t.prototype.getChannelHeaderSize = function() {
                        if (this.channelHeader) {
                            var e = this.channelHeader.querySelector('[data-target="channel-header-left"]'),
                                t = this.channelHeader.querySelector('[data-target="channel-header-right"]'),
                                n = this.channelHeader.querySelectorAll('[data-target="channel-header-item"]'),
                                i = this.channelHeader.querySelectorAll('[data-target="channel-header-dropdown-item"]');
                            if (n.length) {
                                var a = this.getWidth(this.channelHeader).width,
                                    r = this.getWidth(e).width + this.getWidth(t).width + 20 - a;
                                if (r > 0)
                                    for (var o = n.length - 1; o >= 0; o--) {
                                        if (!(l = n[o]).classList.contains("channel-header__item--hide")) {
                                            var s = this.getWidth(l);
                                            if (l.classList.add("channel-header__item--hide"), i[o].classList.remove("channel-header__item--hide"), (r -= s.width) <= 0) break
                                        }
                                    } else
                                        for (o = 0; o < n.length; o++) {
                                            var l;
                                            if ((l = n[o]).classList.contains("channel-header__item--hide")) {
                                                if (l.classList.remove("channel-header__item--hide"), (s = this.getWidth(l)).width >= Math.abs(r)) {
                                                    l.classList.add("channel-header__item--hide");
                                                    break
                                                }
                                                l.classList.remove("channel-header__item--hide"), i[o].classList.add("channel-header__item--hide"), r += s.width
                                            }
                                        }
                                var c = this.channelHeader.querySelector('[data-target="channel-header-button"]');
                                if (c) {
                                    var d = !this.channelHeader.querySelectorAll('[data-target="channel-header-item"].channel-header__item--hide').length;
                                    c.classList.toggle("channel-header__item--hide", d)
                                }
                            }
                        }
                    }, t.prototype.getWidth = function(e) {
                        return e ? {
                            width: e.clientWidth
                        } : {
                            width: 0
                        }
                    }, t.prototype.reportInteractive = function() {
                        !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.renderSocialButtons = function() {
                        var e = this.getFollowingState(),
                            t = null,
                            n = M.SocialButtonsDefault;
                        if (Object(F.c)()) {
                            var i = a("channel-header__follow-btn", {
                                    "channel-header__follow-btn--following": !!this.state.showLiveNotificationsButton
                                }),
                                o = a("channel-header__notification-toggle-container", {
                                    "channel-header__notification-toggle-container--visible": !!this.state.showLiveNotificationsButton
                                });
                            n = M.SocialButtonsVariantB, t = r.createElement(r.Fragment, null, r.createElement(_.Xa, {
                                className: "channel-header__follow-btn-container",
                                display: _.X.Flex,
                                overflow: _.cb.Hidden,
                                alignItems: _.f.Center,
                                padding: {
                                    x: 1
                                },
                                fullHeight: !0
                            }, r.createElement(_.Xa, {
                                display: _.X.Flex,
                                justifyContent: _.Wa.Center,
                                flexDirection: _.Aa.Column,
                                margin: {
                                    right: 1
                                }
                            }, r.createElement(_.Xa, {
                                display: _.X.InlineFlex,
                                justifyContent: _.Wa.Center
                            }, r.createElement("div", {
                                className: i
                            }, r.createElement(D.a, {
                                updateContainerWidth: this.onUpdateDebounce,
                                channelLogin: this.props.channelLogin,
                                onFollow: this.maybeShowBrowserNotificationsUpsell,
                                followUIType: D.b.IconAndText,
                                unfollowUIType: D.b.IconOnly,
                                onToggleAnimationComplete: this.toggleLiveNotificationsBtnShown,
                                hideDropdownWhenFollowing: !0,
                                fullWidthButton: !0,
                                hollowIcons: !0,
                                animatedButton: !0,
                                useContextualModals: !0
                            })))), r.createElement("div", {
                                className: o
                            }, r.createElement(U.a, {
                                channelLogin: this.props.channelLogin,
                                toggleType: U.b.Button,
                                tabIndex: this.state.showLiveNotificationsButton ? 0 : -1,
                                followData: this.getFollowData(),
                                showTooltips: !0
                            }))), r.createElement(_.Xa, null, r.createElement(P.a, {
                                updateContainerWidth: this.onUpdateDebounce,
                                channelLogin: this.props.channelLogin,
                                hideEsportsSubscription: this.props.hideEsportsSubscription,
                                subscribedButtonType: _.F.Default,
                                unsubscribedButtonType: e ? _.F.Default : _.F.Hollow,
                                forceIcon: !0
                            })))
                        } else(this.props.channelIsHosting || Object(F.e)()) && (n = M.SocialButtonsDefault, t = r.createElement(r.Fragment, null, r.createElement(_.Xa, {
                            display: _.X.Flex,
                            alignItems: _.f.Stretch,
                            margin: {
                                left: 1
                            }
                        }, r.createElement(D.a, {
                            updateContainerWidth: this.onUpdateDebounce,
                            channelLogin: this.props.channelLogin,
                            onFollow: this.maybeShowBrowserNotificationsUpsell,
                            followUIType: D.b.IconAndText,
                            unfollowUIType: D.b.IconOnly,
                            useContextualModals: !0
                        })), r.createElement(_.Xa, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(P.a, {
                            updateContainerWidth: this.onUpdateDebounce,
                            channelLogin: this.props.channelLogin,
                            hideEsportsSubscription: this.props.hideEsportsSubscription
                        }))));
                        return r.createElement(_.Xa, {
                            display: _.X.Flex,
                            flexWrap: _.Ba.NoWrap,
                            flexShrink: 0,
                            alignItems: _.f.Center,
                            className: "channel-header__right",
                            "data-test-selector": n,
                            "data-target": "channel-header-right"
                        }, t)
                    }, t.prototype.getFollowingState = function(e) {
                        return void 0 === e && (e = this.props), !!(e.data && e.data.user && e.data.user.self && e.data.user.self.follower) && null !== e.data.user.self.follower.disableNotifications
                    }, t.prototype.getFollowData = function() {
                        if (this.props.data && this.props.data.user && this.props.data.user.id) return this.props.data.user
                    }, t
                }(r.Component),
                Q = Object(o.compose)(Object(u.a)(j, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(p.a)([{
                    topic: function(e) {
                        return e.channelLogin ? Object(h.H)(e.channelLogin) : ""
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    },
                    mapMessageTypesToProps: (R = {}, R[m.PubsubMessageType.ViewCount] = "viewCount", R)
                }]), Object(A.b)("ChannelHeader"))(q)
        },
        m493: function(e, t, n) {},
        mSxK: function(e, t, n) {
            "use strict";
            var i = n("km1c"),
                a = n("/MKj"),
                r = n("fvjX"),
                o = n("aCAx"),
                s = n("wxwP");
            var l = Object(a.connect)(null, function(e) {
                return Object(r.bindActionCreators)({
                    showBrowserNotificationsUpsellModal: function() {
                        return Object(o.d)(s.a, {})
                    },
                    closeBrowserNotificationsUpsellModal: o.c
                }, e)
            })(i.c);
            n.d(t, "d", function() {
                return i.d
            }), n.d(t, !1, function() {}), n.d(t, "a", function() {
                return i.a
            }), n.d(t, "b", function() {
                return i.b
            }), n.d(t, "c", function() {
                return l
            })
        },
        oe5X: function(e, t, n) {
            "use strict";
            var i = n("XmgI"),
                a = n("RcPG"),
                r = n("0FG4"),
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
                    v = t.links,
                    g = t.mentions,
                    f = m(e),
                    b = "",
                    k = 0;
                return p(f.reduce(function(e, t, p) {
                    if (h(t)) return b = "", e;
                    if (0 === b.length && (k = p), b += t, p !== f.length - 1 && !h(f[p + 1])) return e;
                    var m = u && Object(r.c)(b, k, u);
                    if (m) return e.concat(m);
                    var y = n && Object(i.e)(b, n);
                    if (y) return e.concat(y);
                    var C = v && Object(o.a)(b, v);
                    if (C) return e.concat(C);
                    var E = g && function(e, t) {
                        var n = e.match(c);
                        if (!n) return d(e, t.sessionUser) ? [{
                            type: a.a.CurrentUserHighlight,
                            content: e
                        }] : null;
                        var i = [],
                            r = n[1],
                            o = n[2],
                            u = e.slice(n[0].length);
                        r.length && i.push(Object(l.a)(r));
                        var p = s.a.Default;
                        return d(o, t.sessionUser) ? p = s.a.Recipient : t.sessionUser && t.sessionUser.login === t.senderLogin && (p = s.a.Sender), i.push({
                            type: a.a.Mention,
                            content: {
                                recipient: o,
                                currentUserMentionRelation: p
                            }
                        }), u.length && i.push(Object(l.a)(u)), i
                    }(b, g);
                    return E ? e.concat([E]) : e.concat(Object(l.a)(b))
                }, []))
            }

            function p(e) {
                return e.reduce(function(e, t, n) {
                    return 0 === n ? [].concat.call(e, t) : [].concat.call(e, Object(l.a)(" "), t)
                }, []).reduce(function(e, t, n) {
                    if (0 === n) return e.concat(t);
                    var i = e[e.length - 1];
                    return t.type === a.a.Text && i.type === a.a.Text ? (i.content = "" + i.content + t.content, e) : e.concat(t)
                }, [])
            }

            function m(e) {
                return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g) || []
            }

            function h(e) {
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
        p52R: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.Admin = "admin", e.GlobalMod = "global_mod", e.Moderator = "mod", e.Owner = "owner", e.Staff = "staff", e.Subscriber = "subscriber", e.User = ""
                }(i || (i = {}))
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
                a = "https://www.facebook.com/sharer/sharer.php",
                r = "https://www.twitter.com/share",
                o = "https://www.reddit.com/submit",
                s = "https://vk.com/share.php";

            function l(e) {
                return Object(i.e)(a, {
                    u: e
                })
            }

            function c(e, t) {
                return Object(i.e)(r, {
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
        rO6o: function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                a = n("/7QA"),
                r = n("Ue10"),
                o = (n("z3xZ"), function(e) {
                    var t = Object(a.c)(e.date, {
                            month: "short"
                        }),
                        n = Object(a.c)(e.date, {
                            day: "numeric"
                        });
                    return i.createElement(r.Cb, {
                        background: r.r.Base,
                        elevation: 2,
                        display: r.X.Flex,
                        flexDirection: r.Aa.Column,
                        className: "event-calendar-date",
                        margin: {
                            top: .5,
                            left: .5
                        },
                        position: r.hb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        flexWrap: r.Ba.NoWrap
                    }, i.createElement(r.Cb, {
                        className: "event-calendar-date__month",
                        display: r.X.Flex,
                        justifyContent: r.Wa.Center,
                        background: r.r.AccentAlt2
                    }, i.createElement(r.W, {
                        fontSize: r.Ca.Size6,
                        transform: r.Sb.Uppercase,
                        color: r.O.Overlay
                    }, t)), i.createElement(r.Xa, {
                        display: r.X.Flex,
                        justifyContent: r.Wa.Center
                    }, i.createElement(r.W, {
                        fontSize: r.Ca.Size3,
                        color: r.O.Base
                    }, n)))
                });
            n.d(t, "a", function() {
                return o
            })
        },
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
        tIid: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            });
            var i = n("/7QA"),
                a = "esport_insider_pass_whitelist",
                r = "esports_room_cheering_whitelist";

            function o(e, t, n) {
                return void 0 === n && (n = !1), l(a, e, t, n)
            }

            function s(e, t) {
                return l(r, e, t)
            }

            function l(e, t, n, a) {
                void 0 === a && (a = !1);
                var r = i.b.get(e, []),
                    o = n && n.roles && n.roles.isStaff || a;
                return r.includes(t) || r.includes(t + "-staff") && o
            }
        },
        "ug+5": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "d", function() {
                return l
            });
            var i, a, r = n("/7QA"),
                o = n("2xye");

            function s(e) {
                var t = {
                    share_medium: e.shareMedium,
                    event_id: e.eventID,
                    channel: e.channelLogin,
                    channel_id: e.channelID,
                    location: e.location
                };
                return r.p.tracking.track(o.SpadeEventType.EventShare, t)
            }

            function l(e) {
                var t = {
                    action: e.action,
                    channel: e.channelLogin,
                    channel_id: e.channelID,
                    event_id: e.eventID,
                    location: e.location
                };
                return r.p.tracking.track(o.SpadeEventType.EventFollowing, t)
            }! function(e) {
                e.ChannelEvents = "channel_events", e.DashboardEvents = "dashboard_events", e.EventDetails = "event_details", e.EventManagment = "event_managment", e.EventSidebar = "event_sidebar"
            }(i || (i = {})),
            function(e) {
                e.RemindMeOpen = "remind_me_open_modal", e.EmailReminderOn = "email_reminder_on", e.EmailReminderOff = "email_reminder_off"
            }(a || (a = {}))
        },
        vDRX: function(e, t, n) {},
        wSZZ: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Events_UnfollowEvent"
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
                                    value: "UnfollowEventInput"
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
                                value: "unfollowEvent"
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
                                        value: "event"
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
                                                    value: "EventCollection"
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
                                                                value: "isFollowing"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "EventLeaf"
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
                                                                value: "isFollowing"
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
                    end: 199
                }
            };
            n.loc.source = {
                body: "mutation Events_UnfollowEvent($input: UnfollowEventInput!) {\nunfollowEvent(input: $input) {\nevent {\n...on EventCollection {\nid\nself {\nisFollowing\n}\n}\n...on EventLeaf {\nid\nself {\nisFollowing\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        wbMx: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return d
            });
            var i, a = n("mrSG"),
                r = n("q1tI"),
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
                        return n.props.type === i.Download ? r.createElement("a", a.__assign({
                            href: n.props.url,
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(c.hc)(n.props), {
                            download: n.props.text
                        }), n.renderIcon()) : n.isLink() ? r.createElement("a", a.__assign({
                            href: n.getLinkTarget(),
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(c.hc)(n.props)), n.renderIcon()) : r.createElement("button", a.__assign({
                            onClick: n.copyPageUrl,
                            onMouseLeave: n.clearIsCopiedStatus,
                            className: e
                        }, Object(c.hc)(n.props)), n.renderIcon())
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
                        return r.createElement(c.Xa, {
                            className: "social-button__icon " + n.addSocialClassModifier("social-button__icon"),
                            display: c.X.Flex,
                            alignItems: c.f.Center,
                            justifyContent: c.Wa.Center
                        }, r.createElement(c.qb, {
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
                                return c.rb.Twitter;
                            case i.Facebook:
                                return c.rb.Facebook;
                            case i.VKontakte:
                                return c.rb.VKontakte;
                            case i.Reddit:
                                return c.rb.Reddit;
                            case i.Download:
                                return c.rb.Download;
                            case i.Copy:
                            default:
                                return c.rb.Copy
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
                            a = e.type,
                            r = n.getUrl(),
                            o = t || "";
                        switch (a) {
                            case i.Reddit:
                                return Object(l.b)(r, o);
                            case i.VKontakte:
                                return Object(l.d)(r);
                            case i.Facebook:
                                return Object(l.a)(r);
                            case i.Twitter:
                                return Object(l.c)(r, o);
                            default:
                                return ""
                        }
                    }, n.state = {
                        isCopied: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(c.Xa, {
                        className: "social-button"
                    }, r.createElement(c.Wb, {
                        label: this.getTooltipFromType(),
                        direction: c.Yb.Bottom
                    }, this.renderLink()))
                }, t
            }(r.Component)
        },
        wxwP: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/MKj"),
                o = n("fvjX"),
                s = n("/7QA"),
                l = n("CFw/"),
                c = n.n(l),
                d = n("aCAx"),
                u = n("Ue10"),
                p = (n("9RDd"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement("div", {
                            onClick: this.props.closeModal
                        }, a.createElement(u.i, {
                            type: u.n.FadeIn,
                            duration: u.k.Long,
                            timing: u.m.EaseInOut,
                            enabled: !0
                        }, a.createElement(u.Cb, {
                            className: "browser-push-notifications-upsell",
                            alignItems: u.f.Center,
                            justifyContent: u.Wa.Center,
                            position: u.hb.Fixed,
                            display: u.X.Flex,
                            background: u.r.Overlay,
                            fullHeight: !0,
                            fullWidth: !0,
                            attachTop: !0,
                            attachLeft: !0
                        }, a.createElement(u.Xa, {
                            className: "browser-push-notifications-upsell__container",
                            display: u.X.Flex,
                            textAlign: u.Pb.Center,
                            padding: {
                                x: 1
                            },
                            position: u.hb.Relative
                        }, a.createElement(u.i, {
                            type: u.n.SlideInBottom,
                            duration: u.k.Long,
                            timing: u.m.EaseInOut,
                            enabled: !0
                        }, a.createElement(u.W, {
                            type: u.Tb.H3,
                            fontSize: u.Ca.Size3,
                            lineHeight: u.Ya.Body
                        }, Object(s.d)("Don't miss out when your favorite streamers go live!", "BrowserNotificationsUpsellModal")), a.createElement(u.Xa, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(u.W, {
                            type: u.Tb.H4,
                            fontSize: u.Ca.Size4,
                            color: u.O.OverlayAlt,
                            lineHeight: u.Ya.Body
                        }, Object(s.d)("Turn on Browser Notifications to get updates even when your browser window is minimized", "BrowserNotificationsUpsellModal")))), a.createElement(u.Xa, {
                            className: "browser-push-notifications-upsell__arrow",
                            position: u.hb.Absolute,
                            attachTop: !0,
                            attachLeft: !0
                        }, a.createElement(u.i, {
                            type: u.n.SlideInBottom,
                            delay: u.j.Short,
                            duration: u.k.Long,
                            timing: u.m.EaseInOut,
                            enabled: !0
                        }, a.createElement("img", {
                            src: c.a
                        })))))))
                    }, t
                }(a.Component));
            var m = Object(r.connect)(null, function(e) {
                return Object(o.bindActionCreators)({
                    closeModal: d.c
                }, e)
            })(p);
            n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return m
            })
        },
        y4Ne: function(e, t, n) {},
        yWUM: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = "0h0m1s";

            function a(e) {
                if (0 === e) return i;
                if (!e || e < 0) return "";
                var t = e,
                    n = Math.floor(t / 3600);
                return t %= 3600, n + "h" + Math.floor(t / 60) + "m" + (t %= 60) + "s"
            }
        },
        "z+dA": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChannelPage_SubscribeButton_User"
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "subscriptionProducts"
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
                                                value: "emoteSetID"
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
                                                        value: "paidUpgradePromotion"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "newPrice"
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
                                                value: "canPrimeSubscribe"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "subscriptionBenefit"
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
                                                        value: "purchasedWithPrime"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "tier"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "platform"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "paidUpgrade"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "price"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "startsAt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "tier"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
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
                                                                value: "isGift"
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
                    end: 371
                }
            };
            n.loc.source = {
                body: "query ChannelPage_SubscribeButton_User($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nsubscriptionProducts {\nid\nemoteSetID\nname\nself {\npaidUpgradePromotion {\nnewPrice\n}\n}\n}\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\nplatform\npaidUpgrade {\nprice\nstartsAt\ntier\n}\ngift {\nisGift\n}\n}\n}\n}\ncurrentUser {\nid\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        z3xZ: function(e, t, n) {},
        z8L7: function(e, t, n) {},
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
        },
        zxEZ: function(e, t, n) {
            "use strict";
            var i = n("mSxK");
            n.d(t, "a", function() {
                return i.c
            }), n.d(t, "b", function() {
                return i.d
            })
        }
    }
]);