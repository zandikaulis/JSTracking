webpackJsonp([31], {
    "0i+s": function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            void 0 === t && (t = i);
            var n = a.__assign({}, i, t),
                r = '<iframe src="' + e + '" frameborder="0" ' + (n.allowFullscreen ? 'allowfullscreen="true" ' : "") + (n.allowScrolling ? "" : 'scrolling="no" ') + 'height="' + n.height + '" width="' + n.width + '"></iframe>';
            return n.textLink && (r += function(e, t) {
                return '<a href="' + e + '" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">' + t + "</a>"
            }(n.textLink.url, n.textLink.text)), r
        };
        var a = n("TToO"),
            i = {
                height: 378,
                width: 620,
                allowScrolling: !0,
                allowFullscreen: !0
            }
    },
    "1OO3": function(e, t, n) {
        "use strict";

        function a() {
            return Object(r.d)("Unable to ban user", "BlockUserMutation")
        }
        t.a = function(e) {
            var t = this;
            return Object(l.a)(u, {
                props: function(n) {
                    return {
                        onBanUser: function(l, u) {
                            return void 0 === u && (u = null), i.__awaiter(t, void 0, void 0, function() {
                                var t, C, b, v, y, k;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (t = u ? d.a.Timeout : d.a.Ban, C = e(n.ownProps), b = C.channelID, v = C.onPushMessage, !n.mutate) return [3, 5];
                                            i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, n.mutate(Object(s.a)({
                                                channelID: b,
                                                bannedUserLogin: l,
                                                expiresIn: u && function(e) {
                                                    if (!e) return "0s";
                                                    var t = e,
                                                        n = "";
                                                    if (t > f) {
                                                        var a = Math.floor(t / f);
                                                        t -= a * f, n += a + "mo"
                                                    }
                                                    if (t > g) {
                                                        var i = Math.floor(t / g);
                                                        t -= i * g, n += i + "w"
                                                    }
                                                    if (t > h) {
                                                        var r = Math.floor(t / h);
                                                        t -= r * h, n += r + "d"
                                                    }
                                                    if (t > m) {
                                                        var l = Math.floor(t / m);
                                                        t -= l * m, n += l + "h"
                                                    }
                                                    if (t > p) {
                                                        var s = Math.floor(t / p);
                                                        t -= s * p, n += s + "m"
                                                    }
                                                    return t > 0 && (n += t + "s"), n
                                                }(u)
                                            }))];
                                        case 2:
                                            return i.sent(), y = Object(c.a)(t, l, null, u), v && v(y), [2, y];
                                        case 3:
                                            throw k = i.sent(), r.i.error(k, "Unable to ban user"), v && v(Object(o.a)(a())), new Error(a());
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            throw v && v(Object(o.a)(a())), new Error(a());
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })
        };
        var i = n("TToO"),
            r = n("6sO2"),
            l = n("7vx8"),
            s = n("oIkB"),
            o = n("aUOx"),
            c = n("Ncf8"),
            d = n("qkCi"),
            u = n("MApH"),
            p = (n.n(u), 60),
            m = 60 * p,
            h = 24 * m,
            g = 7 * h,
            f = 4 * g
    },
    "1f48": function(e, t) {},
    "2hJ3": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = document.createElement("textarea");
            t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
            var n = !0;
            try {
                n = document.execCommand("copy")
            } catch (e) {
                n = !1
            }
            return document.body.removeChild(t), n
        }
    },
    "3NJ6": function(e, t) {},
    "8Wuk": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            i = n("U7vG"),
            r = n("6sO2"),
            l = n("2hJ3"),
            s = n("yDzg"),
            o = "https://www.facebook.com/sharer/sharer.php",
            c = "https://www.twitter.com/share",
            d = "https://www.reddit.com/submit",
            u = "https://vk.com/share.php",
            p = n("Odds");
        n("bdk8");
        n.d(t, "b", function() {
            return m
        }), n.d(t, "a", function() {
            return h
        });
        var m;
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput"
        }(m || (m = {}));
        var h = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.isLink() ? i.createElement("a", a.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(p._39)(n.props)), n.renderIcon()) : i.createElement("button", a.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(p._39)(n.props)), n.renderIcon())
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
                    var e = n.getAssetFromType();
                    return i.createElement(p.U, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, i.createElement(p._9, {
                        asset: e,
                        width: 30,
                        height: 30
                    }))
                }, n.isLink = function() {
                    return n.props.type !== m.Copy
                }, n.getTooltipFromType = function() {
                    switch (n.props.type) {
                        case m.Twitter:
                            return "Twitter";
                        case m.Reddit:
                            return "Reddit";
                        case m.Facebook:
                            return "Facebook";
                        case m.VKontakte:
                            return "VKontakte";
                        case m.Copy:
                            return n.state.isCopied ? Object(r.d)("Copied", "SocialButton") : Object(r.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case m.Twitter:
                            return p._10.Twitter;
                        case m.Facebook:
                            return p._10.Facebook;
                        case m.VKontakte:
                            return p._10.VKontakte;
                        case m.Reddit:
                            return p._10.Reddit;
                        case m.Copy:
                        default:
                            return p._10.Copy
                    }
                }, n.addSocialClassModifier = function(e) {
                    switch (n.props.type) {
                        case m.Twitter:
                            return e + "--twitter";
                        case m.Reddit:
                            return e + "--reddit";
                        case m.Facebook:
                            return e + "--facebook";
                        case m.VKontakte:
                            return e + "--vkontakte";
                        case m.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, n.getLinkTarget = function() {
                    var e = n.props,
                        t = e.text,
                        a = e.type,
                        i = n.getUrl(),
                        r = t || "";
                    switch (a) {
                        case m.Reddit:
                            return function(e, t) {
                                return Object(s.a)(d, {
                                    url: e,
                                    title: t
                                })
                            }(i, r);
                        case m.VKontakte:
                            return function(e) {
                                return Object(s.a)(u, {
                                    url: e
                                })
                            }(i);
                        case m.Facebook:
                            return function(e) {
                                return Object(s.a)(o, {
                                    u: e
                                })
                            }(i);
                        case m.Twitter:
                            return function(e, t) {
                                return Object(s.a)(c, {
                                    url: e,
                                    text: t
                                })
                            }(i, r);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return a.__extends(t, e), t.prototype.render = function() {
                return i.createElement(p.U, {
                    className: "social-button"
                }, i.createElement(p._30, {
                    label: this.getTooltipFromType(),
                    direction: p._32.Top
                }, this.renderLink()))
            }, t
        }(i.Component)
    },
    EDaX: function(e, t) {},
    INp2: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e + "-" + Date.now() + "}"
        }
    },
    MApH: function(e, t) {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "ban"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "createdAt"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
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
            body: "mutation Chat_BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {\nbanUserFromChatRoom(input: $input) {\nban {\ncreatedAt\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    MV8X: function(e, t, n) {
        var a = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ClipsManagerTitleEdit_UpdateClip"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "clip"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "clip"
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
                end: 181
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/top-clips/models/clip-fragment.gql"\nmutation ClipsManagerTitleEdit_UpdateClip($input: UpdateClipInput!) {\nupdateClip(input: $input) {\nclip {\n...clip\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var i = {};
        a.definitions = a.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !i[t] && (i[t] = !0, !0)
            })
        }(n("kUjr").definitions)), e.exports = a
    },
    Ncf8: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n, i) {
            return {
                type: e,
                id: Object(a.a)(t + "-mod"),
                userLogin: t,
                reason: n,
                duration: i
            }
        };
        var a = n("INp2")
    },
    Qfvd: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return i
        });
        var a = "//static-cdn.jtvnw.net/ttv-boxart",
            i = "52x72"
    },
    WNmM: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return c
        }), n.d(t, "c", function() {
            return u
        });
        var a, i = n("6sO2"),
            r = n("8Wuk"),
            l = n("vH/s"),
            s = (a = {}, a[r.b.Twitter] = "twitter", a[r.b.Reddit] = "reddit", a[r.b.VKontakte] = "vkontakte", a[r.b.Facebook] = "facebook", a[r.b.Copy] = "link", a[r.b.CopyInput] = "option_link", a),
            o = {
                MyClips: "MyClips",
                ClipsOfMyChannel: "ClipsOfMyChannel"
            },
            c = {
                Game: "TopClipsGame",
                Channel: "TopClipsChannel"
            },
            d = {
                MyClips: l.PageviewLocation.MyClipsManager,
                ClipsOfMyChannel: l.PageviewLocation.ChannelClipsManager,
                TopClipsGame: l.PageviewLocation.ClipsGame,
                TopClipsChannel: l.PageviewLocation.ChannelClips
            },
            u = function(e, t) {
                return function(n) {
                    i.n.tracking.track(l.SpadeEventType.VideoShare, {
                        vod_id: e.id,
                        vod_type: "clip",
                        share_platform: s[n],
                        location: d[t],
                        game: e.game ? e.game.name : null,
                        channel_id: Number(e.broadcaster.id),
                        channel: e.broadcaster.login,
                        live: null
                    })
                }
            }
    },
    XITx: function(e, t) {},
    aUOx: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return {
                type: a.a.Info,
                id: Object(i.a)("notice"),
                message: e
            }
        };
        var a = n("qkCi"),
            i = n("INp2")
    },
    aeDV: function(e, t, n) {
        "use strict";

        function a(e) {
            e.currentTarget.select()
        }

        function i(e, t) {
            return t === g.Curator ? "/" + e + "/manager/clips" : "/" + e + "/manager/clips/channel"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, l = n("TToO"),
            s = n("U7vG"),
            o = n("BhyV"),
            c = n("CIox"),
            d = n("j7/Y"),
            u = n("w9tK"),
            p = n("vH/s");
        ! function(e) {
            e[e.ViewsAscending = 0] = "ViewsAscending", e[e.ViewsDescending = 1] = "ViewsDescending", e[e.CreatedAtAscending = 2] = "CreatedAtAscending", e[e.CreatedAtDescending = 3] = "CreatedAtDescending"
        }(r || (r = {}));
        var m, h = (C = {}, C[r.CreatedAtAscending] = "CREATED_AT_ASC", C[r.CreatedAtDescending] = "CREATED_AT_DESC", C[r.ViewsAscending] = "VIEWS_ASC", C[r.ViewsDescending] = "VIEWS_DESC", C);
        ! function(e) {
            e[e.Day = 0] = "Day", e[e.Week = 1] = "Week", e[e.Month = 2] = "Month", e[e.All = 3] = "All"
        }(m || (m = {}));
        var g, f = (b = {}, b[m.Day] = "LAST_DAY", b[m.Week] = "LAST_WEEK", b[m.Month] = "LAST_MONTH", b[m.All] = "ALL_TIME", b);
        ! function(e) {
            e[e.Broadcaster = 0] = "Broadcaster", e[e.Curator = 1] = "Curator"
        }(g || (g = {}));
        var C, b, v = n("CSlQ"),
            y = n("RH2O"),
            k = n("2KeS"),
            S = n("+xm8"),
            E = n("f2i/"),
            _ = n("Aj/L"),
            T = n("KSGD"),
            w = n("6sO2"),
            M = n("7vx8"),
            O = n("5LoI"),
            D = n("oIkB"),
            N = n("V5M+"),
            R = n("zCIC"),
            x = n("sikP"),
            U = n("WNmM"),
            A = n("F8kA"),
            j = n("rCmJ"),
            I = n("+Znq"),
            L = n("NY9D"),
            F = n("yDzg"),
            B = n("bhVC"),
            V = n("0i+s"),
            H = n("Odds"),
            P = [{
                type: B.b.Twitter,
                params: {
                    tt_medium: "twtr"
                }
            }, {
                type: B.b.Facebook,
                params: {
                    tt_medium: "fb"
                }
            }, {
                type: B.b.VKontakte
            }, {
                type: B.b.Reddit,
                params: {
                    tt_medium: "redt"
                }
            }, {
                type: B.b.Copy
            }],
            G = Object(v.c)("ClipsManagerSocialShare")(function(e) {
                var t = Object(w.d)("Share", "ClipsManagerSocialShare");
                return s.createElement(I.a, null, s.createElement("div", null, s.createElement(H._30, {
                    label: t
                }, s.createElement(H.v, {
                    ariaLabel: t,
                    type: H.w.Hollow,
                    icon: H._10.Share
                }))), s.createElement(H.p, {
                    direction: H.q.BottomRight,
                    size: H.r.Small
                }, s.createElement(H.U, {
                    display: H.H.Flex,
                    justifyContent: H.T.Between,
                    padding: 1
                }, P.map(function(t) {
                    return s.createElement(B.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(F.a)(e.clip.url, t.params),
                        onShareClick: Object(U.c)(e.clip, e.pageType)
                    })
                })), s.createElement(H.U, {
                    padding: {
                        x: 1,
                        y: .5
                    }
                }, s.createElement(H.M, {
                    label: Object(w.d)("Video Link", "ClipsManagerSocialShare")
                }, s.createElement(H.Q, {
                    readOnly: !0,
                    type: H.R.Text,
                    value: e.clip.url,
                    onFocus: a
                }))), s.createElement(H.U, {
                    padding: {
                        x: 1,
                        y: .5
                    }
                }, s.createElement(H.M, {
                    label: Object(w.d)("Embed Video", "ClipsManagerSocialShare")
                }, s.createElement(H.Q, {
                    readOnly: !0,
                    type: H.R.Text,
                    value: Object(V.a)(e.clip.embedURL),
                    onFocus: a
                })))))
            }),
            K = n("6BvN"),
            W = n("MV8X"),
            q = this,
            z = {
                TITLE_TEXT: "cmgr-title-text",
                TITLE_INPUT: "cmgr-title-input",
                TITLE_SAVE: "cmgr-title-save",
                TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
            },
            Q = 100,
            Y = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.renderTitle = function() {
                        return n.props.canEdit ? s.createElement(H.Q, {
                            id: z.TITLE_INPUT,
                            "data-test-selector": z.TITLE_INPUT,
                            type: H.R.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        }) : s.createElement(H._22, {
                            "data-test-selector": z.TITLE_TEXT
                        }, n.state.title)
                    }, n.renderSaveButton = function() {
                        if (!n.props.canEdit) return null;
                        var e;
                        return e = n.state.hasErrored ? s.createElement(H._22, {
                            color: H.F.Error,
                            bold: !0
                        }, Object(w.d)("Uh-oh. Check for inappropriate language and try again!", "ClipsManagerTitleEdit")) : s.createElement(H._22, {
                            color: H.F.Link,
                            bold: !0
                        }, Object(w.d)("Title Saved!", "ClipsManagerTitleEdit")), s.createElement(H.U, {
                            flexShrink: 0,
                            flexGrow: 0
                        }, s.createElement(H.U, {
                            position: H._3.Relative
                        }, s.createElement(H.u, {
                            "data-test-selector": z.TITLE_SAVE,
                            disabled: !n.canSaveEditedTitle(),
                            onClick: n.editClipTitle
                        }, Object(w.d)("Save", "ClipsManagerTitleEdit")), s.createElement(H.S, {
                            onClick: n.dismissBalloon,
                            "data-test-selector": z.TITLE_SAVE_TOOLTIP
                        }, s.createElement(H.p, {
                            direction: H.q.TopRight,
                            show: n.state.isShowingBalloon
                        }, s.createElement(H.U, {
                            padding: 1
                        }, e)))))
                    }, n.dismissBalloon = function() {
                        n.setState({
                            isShowingBalloon: !1
                        })
                    }, n.handleTitleEdit = function(e) {
                        var t = e.currentTarget.value.slice(0, Q);
                        n.setState({
                            title: t,
                            trimmedTitle: t.trim()
                        })
                    }, n.editClipTitle = function() {
                        return l.__awaiter(n, void 0, void 0, function() {
                            return l.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return e.trys.push([0, 2, , 3]), [4, this.props.editTitle(this.state.title)];
                                    case 1:
                                        return e.sent(), this.setState({
                                            isShowingBalloon: !0,
                                            hasErrored: !1
                                        }), [3, 3];
                                    case 2:
                                        return e.sent(), this.setState({
                                            isShowingBalloon: !0,
                                            hasErrored: !0
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, n.canSaveEditedTitle = function() {
                        return n.props.clip.title !== n.state.trimmedTitle && "" !== n.state.trimmedTitle
                    }, n.handleKeyDown = function(e) {
                        switch (e.keyCode) {
                            case K.a.Enter:
                                return void(n.canSaveEditedTitle() && n.editClipTitle());
                            default:
                                return
                        }
                    }, n.state = {
                        title: t.clip.title,
                        trimmedTitle: t.clip.title.trim(),
                        isShowingBalloon: !1,
                        hasErrored: !1
                    }, n
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = Object(w.d)("{characterCount, number} remaining", {
                        characterCount: Q - this.state.trimmedTitle.length
                    }, "ClipsManagerTitleEdit");
                    return s.createElement(H.U, {
                        display: H.H.Flex,
                        justifyContent: H.T.Center
                    }, s.createElement(H.U, {
                        flexGrow: 1,
                        padding: 1
                    }, s.createElement(H.M, {
                        id: z.TITLE_INPUT,
                        label: Object(w.d)("Title", "ClipsManagerTitleEdit"),
                        hint: this.props.canEdit ? e : ""
                    }, s.createElement(H.U, {
                        display: H.H.Flex,
                        flexWrap: H.K.NoWrap
                    }, s.createElement(H.U, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, this.renderTitle()), this.renderSaveButton()))))
                }, t
            }(s.Component),
            $ = Object(M.a)(W, {
                props: function(e) {
                    return {
                        editTitle: function(t) {
                            return l.__awaiter(q, void 0, void 0, function() {
                                var n;
                                return l.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 2, , 3]), [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        slug: e.ownProps.clip.slug,
                                                        title: t
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return a.sent(), [3, 3];
                                        case 2:
                                            throw n = a.sent(), w.i.error(n, "Failed to edit clip title"), n;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(Y),
            J = n("hSb5"),
            X = (n("qCag"), {
                MODERATION_DROPDOWN: "cmgr-moderation-dropdown",
                MODERATION_BUTTON: "cmgr-moderation-button",
                GAME_LINK: "cmgr-expanded-game-link",
                CHANNEL_LINK: "cmgr-expanded-channel-link"
            }),
            Z = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.renderGameLink = function(e) {
                        return e.game ? s.createElement(A.a, {
                            "data-test-selector": X.GAME_LINK,
                            to: Object(L.c)(e.game.name),
                            title: e.game.name
                        }, e.game.name) : null
                    }, n.renderModerationIcon = function() {
                        if (n.props.data.currentUser.id !== n.props.clip.broadcaster.id) return null;
                        var e = Object(w.d)("Moderation", "ClipsManagerExpandedRow");
                        return s.createElement(H._30, {
                            label: e
                        }, s.createElement(H.U, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(I.a, null, s.createElement(H.v, {
                            ariaLabel: e,
                            type: H.w.Hollow,
                            icon: H._10.Sword,
                            "data-test-selector": X.MODERATION_BUTTON
                        }), s.createElement(H.p, {
                            "data-test-selector": X.MODERATION_DROPDOWN,
                            direction: H.q.BottomRight
                        }, s.createElement(H.U, {
                            padding: {
                                y: .5
                            }
                        }, s.createElement(H._18, {
                            borderBottom: !0
                        }, s.createElement(H.S, {
                            onClick: n.openTimeoutUserModal
                        }, s.createElement(H.U, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(w.d)("Timeout User (24 hr)", "ClipsManagerExpandedRow"))), s.createElement(H.S, {
                            onClick: n.openBanUserModal
                        }, s.createElement(H.U, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(w.d)("Ban User", "ClipsManagerExpandedRow")))), s.createElement(H.S, {
                            onClick: n.openDeleteAllModal
                        }, s.createElement(H.U, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(w.d)("Delete All Clips from Video", "ClipsManagerExpandedRow"))))))))
                    }, n.openModal = function(e, t) {
                        void 0 === t && (t = {}), n.setState({
                            isModalOpen: !0
                        }), n.props.showModal(e, t)
                    }, n.closeModal = function() {
                        n.setState({
                            isModalOpen: !1
                        }), n.props.closeModal()
                    }, n.onClickOutside = function() {
                        n.state.isModalOpen || n.props.onClose()
                    }, n.openDeleteModal = function() {
                        n.openModal(x.d, {
                            clip: n.props.clip,
                            onClose: n.closeModal,
                            onDelete: n.props.onDelete
                        })
                    }, n.openTimeoutUserModal = function() {
                        n.openModal(x.b, {
                            clip: n.props.clip,
                            isTemporary: !0,
                            onClose: n.closeModal
                        })
                    }, n.openBanUserModal = function() {
                        n.openModal(x.b, {
                            clip: n.props.clip,
                            isTemporary: !1,
                            onClose: n.closeModal
                        })
                    }, n.openDeleteAllModal = function() {
                        n.openModal(x.e, {
                            clip: n.props.clip,
                            onClose: n.closeModal,
                            onDeleteAll: n.props.onDeleteAll
                        })
                    }, n.reportInteractive = function() {
                        var e = n.props.data;
                        e && !e.loading && e.currentUser && n.props.latencyTracking.reportInteractive()
                    }, n.state = {
                        title: t.clip.title,
                        isModalOpen: !1
                    }, n
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.clip,
                        t = Object(w.c)(new Date(e.createdAt), "medium"),
                        n = Object(w.d)("Close", "ClipsManagerExpandedRow"),
                        a = Object(w.d)("Delete", "ClipsManagerExpandedRow");
                    return s.createElement(j.a, {
                        onClickOut: this.onClickOutside
                    }, s.createElement(H._18, {
                        "data-target": this.props.dataTarget,
                        background: H.m.Base,
                        display: H.H.Block,
                        elevation: 3,
                        className: "clmgr-table__row-expanded",
                        position: H._3.Relative,
                        margin: {
                            bottom: 3
                        }
                    }, s.createElement(H._18, {
                        display: H.H.Flex,
                        justifyContent: H.T.Between,
                        alignItems: H.c.Center,
                        padding: 1,
                        background: H.m.Alt,
                        borderBottom: !0
                    }, s.createElement(H._30, {
                        label: n,
                        align: H._31.Left
                    }, s.createElement(H.U, {
                        flexGrow: 0
                    }, s.createElement(H.v, {
                        ariaLabel: n,
                        type: H.w.Hollow,
                        icon: H._10.Close,
                        onClick: this.props.onClose
                    }), s.createElement(H.p, {
                        direction: H.q.TopLeft
                    }))), s.createElement(H.U, {
                        display: H.H.Flex
                    }, this.renderModerationIcon(), s.createElement(H._30, {
                        label: a
                    }, s.createElement(H.U, {
                        margin: {
                            right: .5
                        }
                    }, s.createElement(H.v, {
                        ariaLabel: a,
                        type: H.w.Hollow,
                        icon: H._10.Trash,
                        onClick: this.openDeleteModal
                    }))), s.createElement(H.U, {
                        margin: {
                            right: .5
                        }
                    }, s.createElement(G, {
                        clip: this.props.clip,
                        pageType: this.props.pageType
                    })), s.createElement(H._30, {
                        label: Object(w.d)("Watch on Clips Page", "ClipsManagerExpandedRow"),
                        align: H._31.Right
                    }, s.createElement(H.v, {
                        ariaLabel: Object(w.d)("Popout", "ClipsManagerExpandedRow"),
                        type: H.w.Hollow,
                        linkTo: Object(F.a)(this.props.clip.url, {
                            tt_medium: "my_clips"
                        }),
                        icon: H._10.Popout
                    })))), s.createElement(H.U, {
                        padding: 1
                    }, s.createElement(H.N, {
                        gutterSize: H.O.None
                    }, s.createElement(H.G, {
                        cols: {
                            default: 12,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 5,
                            xl: 5
                        }
                    }, s.createElement(H.U, {
                        position: H._3.Relative
                    }, s.createElement(H.j, {
                        ratio: H.k.Aspect16x9
                    }, s.createElement("iframe", {
                        src: Object(F.a)(e.embedURL, {
                            autoplay: "false"
                        }),
                        frameBorder: 0,
                        width: "100%",
                        height: "100%",
                        scrolling: "no",
                        allowFullScreen: !0
                    })))), s.createElement(H.G, {
                        cols: {
                            default: 12,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 7,
                            xl: 7
                        }
                    }, s.createElement($, {
                        clip: e,
                        canEdit: this.props.data.currentUser.id === e.curator.id
                    }), s.createElement(H._18, {
                        background: H.m.Alt,
                        margin: 1,
                        padding: 1,
                        border: !0
                    }, s.createElement(H.N, null, s.createElement(H.G, {
                        cols: {
                            default: 4
                        }
                    }, s.createElement(H.U, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(H._22, {
                        bold: !0
                    }, Object(w.d)("Created On", "ClipsManagerExpandedRow")), s.createElement(H._22, {
                        ellipsis: !0,
                        transform: H._26.Capitalize,
                        title: t
                    }, t))), s.createElement(H.G, {
                        cols: {
                            default: 4
                        }
                    }, s.createElement(H.U, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(H._22, {
                        bold: !0
                    }, Object(w.d)("Clip Length", "ClipsManagerExpandedRow")), s.createElement(H._22, {
                        ellipsis: !0
                    }, Object(w.d)("{seconds, number}s", {
                        seconds: this.props.clip.durationSeconds
                    }, "ClipsManagerExpandedRow")))), s.createElement(H.G, {
                        cols: {
                            default: 4
                        }
                    }, s.createElement(H.U, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(H._22, {
                        bold: !0
                    }, Object(w.d)("Views", "ClipsManagerExpandedRow")), s.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        ellipsis: !0
                    }, s.createElement(H._9, {
                        asset: H._10.GlyphViews
                    }), s.createElement(H.U, {
                        padding: {
                            left: .5
                        }
                    }, Object(w.f)(e.viewCount, {
                        maximumFractionDigits: 1
                    }))))), s.createElement(H.G, {
                        cols: {
                            default: 4
                        }
                    }, s.createElement(H.U, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(H._22, {
                        bold: !0
                    }, Object(w.d)("Channel", "ClipsManagerExpandedRow")), s.createElement(H._22, {
                        ellipsis: !0
                    }, s.createElement(A.a, {
                        "data-test-selector": X.CHANNEL_LINK,
                        to: "/" + e.broadcaster.login + "/clips",
                        title: e.broadcaster.displayName
                    }, e.broadcaster.displayName)))), s.createElement(H.G, {
                        cols: {
                            default: 4
                        }
                    }, s.createElement(H.U, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(H._22, {
                        bold: !0
                    }, Object(w.d)("Game", "ClipsManagerExpandedRow")), s.createElement(H._22, {
                        ellipsis: !0
                    }, this.renderGameLink(e)))))))))))
                }, t
            }(s.Component),
            ee = Object(v.c)("ClipsManagerExpandedRow")(Object(M.a)(J)(Z)),
            te = Object(y.a)(null, function(e) {
                return Object(k.bindActionCreators)({
                    showModal: N.d,
                    closeModal: N.c
                }, e)
            })(ee),
            ne = n("MAZT"),
            ae = n("uTyw"),
            ie = n("Qfvd"),
            re = (n("uHjT"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderCardContent = function() {
                        var e = t.props.searchResult;
                        return function(e) {
                            var t = e;
                            return void 0 !== t.title && void 0 !== t.popularity
                        }(e) ? s.createElement(H.A, {
                            row: !0
                        }, s.createElement(H.C, {
                            size: H.D.Size3,
                            aspect: H.k.Aspect3x4,
                            imageSrc: function(e) {
                                return ie.a + "/" + e + "-" + ie.b + ".jpg"
                            }(e.title),
                            imageAlt: e.thumbnailAltText
                        }), s.createElement(H.B, null, s.createElement(H.U, {
                            padding: {
                                left: 1
                            }
                        }, s.createElement(H._22, {
                            type: H._27.H5
                        }, e.title), s.createElement(H._22, {
                            className: "clmgr-result__subtitle",
                            ellipsis: !0
                        }, Object(w.d)("{numViewers, number} viewers", {
                            numViewers: e.popularity
                        }, "ClipsManagerSearch"))))) : function(e) {
                            return void 0 !== e.followers
                        }(e) ? s.createElement(H.A, {
                            row: !0
                        }, s.createElement(H.C, {
                            size: H.D.Size3,
                            aspect: H.k.Aspect1x1,
                            imageSrc: e.thumbnail,
                            imageAlt: e.thumbnailAltText
                        }), s.createElement(H.B, null, s.createElement(H.U, {
                            padding: {
                                left: 1
                            }
                        }, s.createElement(H._22, {
                            type: H._27.H5
                        }, e.name), s.createElement(H._22, {
                            className: "clmgr-result__subtitle",
                            ellipsis: !0
                        }, Object(w.d)("{numFollowers, number} followers", {
                            numFollowers: e.followers
                        }, "ClipsManagerSearch"))))) : void 0
                    }, t.onMouseEnter = function() {
                        t.props.onResultHover(t.props.index)
                    }, t.onClick = function() {
                        t.props.onResultSelect(t.props.index)
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(H.S, null, s.createElement(H.P, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, s.createElement("div", {
                        onMouseEnter: this.onMouseEnter,
                        onClick: this.onClick,
                        onKeyDown: this.props.onKeyDown,
                        "data-ref-index": this.props.index,
                        ref: this.props.refDelegate,
                        tabIndex: -1,
                        className: "clmgr-result"
                    }, this.renderCardContent())))
                }, t
            }(s.Component)),
            le = {
                NO_RESULTS: "cmgr-no-search-results",
                RESULTS_MENU: "cmgr-search-results-menu",
                SEARCH_INPUT: "cmgr-search-input",
                CHANNEL_SEARCH: "cmgr-channel-search",
                GAME_SEARCH: "cmgr-game-search"
            },
            se = 5,
            oe = {
                currentCategory: O.a.Games,
                gameResults: [],
                userResults: [],
                isShowingResults: !1,
                isLoading: !1,
                searchTerm: "",
                focusedIndex: null
            },
            ce = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.renderSearchOptions = function() {
                        var e = [s.createElement(H._19, {
                            active: t.state.currentCategory === O.a.Games,
                            onClick: t.setSearchTypeGame,
                            key: le.GAME_SEARCH,
                            "data-test-selector": le.GAME_SEARCH
                        }, Object(w.d)("Game Search", "ClipsManagerSearch"))];
                        return t.props.userRole !== g.Broadcaster && e.push(s.createElement(H._19, {
                            active: t.state.currentCategory === O.a.Users,
                            onClick: t.setSearchTypeChannel,
                            key: le.CHANNEL_SEARCH,
                            "data-test-selector": le.CHANNEL_SEARCH
                        }, Object(w.d)("Channel Search", "ClipsManagerSearch"))), s.createElement(H._20, null, e)
                    }, t.renderSearchResults = function() {
                        if (t.state.isLoading) return s.createElement(H.Y, null);
                        var e = t.state.currentCategory;
                        if (e === O.a.Users) {
                            var n = t.state.userResults;
                            return 0 === n.length ? t.renderNoResults() : n.map(function(e, n) {
                                return s.createElement(re, {
                                    key: e.id + "_" + n,
                                    searchResult: e,
                                    index: n,
                                    onResultHover: t.focusResult,
                                    onResultSelect: t.selectResult,
                                    refDelegate: t.setSearchResultRefs,
                                    onKeyDown: t.onKeyDown
                                })
                            })
                        }
                        if (e === O.a.Games) {
                            var a = t.state.gameResults;
                            return 0 === a.length ? t.renderNoResults() : a.map(function(e, n) {
                                return s.createElement(re, {
                                    key: e.id + "_" + n,
                                    searchResult: e,
                                    index: n,
                                    onResultHover: t.focusResult,
                                    onResultSelect: t.selectResult,
                                    refDelegate: t.setSearchResultRefs,
                                    onKeyDown: t.onKeyDown
                                })
                            })
                        }
                    }, t.renderNoResults = function() {
                        return s.createElement(H.U, {
                            "data-test-selector": le.NO_RESULTS,
                            display: H.H.Flex,
                            flexDirection: H.J.Column
                        }, s.createElement(H._18, {
                            textAlign: H._23.Center,
                            padding: {
                                y: 5
                            }
                        }, s.createElement(H._9, {
                            asset: H._10.NavSearch,
                            height: 36,
                            width: 36,
                            type: H._11.Brand
                        }), s.createElement(H._22, {
                            type: H._27.H4
                        }, Object(w.d)("No results found", "ClipsManagerSearch")), s.createElement(H._22, {
                            type: H._27.P,
                            color: H.F.Alt
                        }, Object(w.d)("They're probably in another castle", "ClipsManagerSearch"))))
                    }, t.setSearchResultRefs = function(e) {
                        if (null !== e) {
                            var n = e.dataset.refIndex;
                            if (n) {
                                var a = parseInt(n, 0);
                                t.searchResultRefs[a] = e
                            }
                        }
                    }, t.setSearchTypeGame = function() {
                        t.setState(l.__assign({}, oe, {
                            currentCategory: O.a.Games
                        })), t.context.setSearchType(O.a.Games)
                    }, t.setSearchTypeChannel = function() {
                        t.setState(l.__assign({}, oe, {
                            currentCategory: O.a.Users
                        })), t.context.setSearchType(O.a.Users)
                    }, t.onChange = function(e) {
                        t.setState({
                            searchTerm: e.currentTarget.value,
                            isLoading: !0
                        }, function() {
                            "" === t.state.searchTerm && t.context.clearSearch(), t.performQuery()
                        })
                    }, t.onFocus = function() {
                        t.setState({
                            isLoading: !0,
                            isShowingResults: !0
                        }), t.performQuery()
                    }, t.onKeyDown = function(e) {
                        switch (e.keyCode) {
                            case K.a.Esc:
                                return e.preventDefault(), void("" !== t.state.searchTerm ? (t.setState({
                                    searchTerm: "",
                                    focusedIndex: null
                                }, function() {
                                    t.performQuery(), t.focusSearchInput()
                                }), t.context.clearSearch()) : t.setState({
                                    isShowingResults: !1,
                                    focusedIndex: null
                                }, function() {
                                    t.focusSearchInput()
                                }));
                            case K.a.Up:
                                return void t.focusNext(!1);
                            case K.a.Down:
                                return void t.focusNext(!0);
                            case K.a.Enter:
                                return void(null !== t.state.focusedIndex && t.selectResult(t.state.focusedIndex));
                            default:
                                return t.setState({
                                    focusedIndex: null
                                }), void t.focusSearchInput()
                        }
                    }, t.focusNext = function(e) {
                        void 0 === e && (e = !0);
                        var n = t.getResultsLength();
                        0 !== n && t.setState(function(t) {
                            var a, i = t.focusedIndex;
                            return a = null === i ? e ? 0 : n - 1 : e ? i + 1 >= n ? 0 : i + 1 : i - 1 < 0 ? n - 1 : i - 1, {
                                focusedIndex: a,
                                isShowingResults: !0
                            }
                        })
                    }, t.focusResult = function(e) {
                        t.setState({
                            focusedIndex: e
                        })
                    }, t.focusResultRef = function(e) {
                        var n = t.searchResultRefs[e];
                        n && n.focus()
                    }, t.blurResultRef = function(e) {
                        var n = t.searchResultRefs[e];
                        n && n.blur()
                    }, t.focusSearchInput = function() {
                        t.searchInputRef && t.searchInputRef.focus()
                    }, t.selectResult = function(e) {
                        var n, a = t.state,
                            i = a.currentCategory,
                            r = a.gameResults,
                            l = a.userResults;
                        if (i === O.a.Games) n = r[e].title, t.context.setSearchTerm(n);
                        else {
                            var s = l[e];
                            n = s.name, t.context.setSearchTerm(s.id)
                        }
                        t.focusSearchInput(), t.setState({
                            focusedIndex: null,
                            searchTerm: n,
                            isShowingResults: !1
                        })
                    }, t.hideResults = function() {
                        t.setState({
                            isShowingResults: !1
                        })
                    }, t.getResultsLength = function() {
                        return t.state.currentCategory === O.a.Games ? t.state.gameResults.length : t.state.userResults.length
                    }, t.performQuery = function() {
                        var e = t.state,
                            n = e.isLoading,
                            a = e.searchTerm,
                            i = e.currentCategory;
                        n && t.setState({
                            isLoading: !0,
                            isShowingResults: !0
                        }), t.searchClient.queryForType(i, a, "", {
                            hitsPerPage: se
                        }).then(function(e) {
                            if (e) {
                                var n = Object(ae.b)({
                                    searchResults: e
                                });
                                t.setState({
                                    gameResults: n.currentGameResults ? n.currentGameResults.results : [],
                                    userResults: n.currentUserResults ? n.currentUserResults.results : [],
                                    isLoading: !1
                                })
                            } else t.setState({
                                gameResults: [],
                                userResults: [],
                                isLoading: !1
                            })
                        })
                    }, t.setSearchInputRef = function(e) {
                        t.searchInputRef = e
                    }, t.searchClient = new ne.a(w.a.algoliaApplicationID, w.a.algoliaAPIKey), t.inputTimer = null, t.state = oe, t.searchResultRefs = [], t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.userRole !== this.props.userRole && this.setState({
                        searchTerm: "",
                        isShowingResults: !1
                    })
                }, t.prototype.componentDidUpdate = function(e, t) {
                    var n = this.state.focusedIndex,
                        a = t.focusedIndex;
                    null !== a && null === n ? this.blurResultRef(a) : null !== n && a !== n && this.focusResultRef(n)
                }, t.prototype.render = function() {
                    return s.createElement(H.U, {
                        position: H._3.Relative
                    }, s.createElement(H.U, {
                        margin: {
                            bottom: 1
                        }
                    }, this.renderSearchOptions()), s.createElement(j.a, {
                        onClickOut: this.hideResults
                    }, s.createElement(H._12, {
                        id: le.SEARCH_INPUT,
                        refDelegate: this.setSearchInputRef,
                        onChange: this.onChange,
                        onFocus: this.onFocus,
                        onKeyDown: this.onKeyDown,
                        value: this.state.searchTerm,
                        placeholder: this.state.currentCategory === O.a.Games ? Object(w.d)("Enter a Game", "ClipsManagerSearch") : Object(w.d)("Enter a Channel", "ClipsManagerSearch")
                    }), s.createElement(H.p, {
                        "data-test-selector": le.RESULTS_MENU,
                        direction: H.q.Bottom,
                        noTail: !0,
                        size: H.r.Large,
                        show: this.state.isShowingResults
                    }, this.renderSearchResults())))
                }, t.contextTypes = {
                    setSearchTerm: T.func,
                    setSearchType: T.func,
                    clearSearch: T.func
                }, t
            }(s.Component),
            de = Object(v.c)("ClipsManagerSearch")(ce),
            ue = (n("3NJ6"), "cmgr-my-clips-radio"),
            pe = "cmgr-clips-of-me-radio",
            me = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setCuratorRole = function() {
                        t.props.updateUserRole(g.Curator)
                    }, t.setBroadcasterRole = function() {
                        t.props.updateUserRole(g.Broadcaster)
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(H.U, {
                        className: "clmgr-filters-container"
                    }, s.createElement(H.N, {
                        gutterSize: H.O.None
                    }, s.createElement(H.G, {
                        cols: {
                            default: 12,
                            xs: 6,
                            sm: 6,
                            md: 12,
                            lg: 12
                        }
                    }, s.createElement(H.U, {
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(H.U, {
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(H._22, {
                        fontSize: H.L.Size5
                    }, Object(w.d)("List View", "ClipsManagerTable"))), s.createElement(H.U, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(H.U, {
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(H._8, {
                        "data-test-selector": ue,
                        label: Object(w.d)("Clips I've Created", "ClipsManagerTable"),
                        name: "MyClips",
                        checked: this.props.currentUserRole === g.Curator,
                        onChange: this.setCuratorRole
                    })), s.createElement(H.U, null, s.createElement(H._8, {
                        "data-test-selector": pe,
                        label: Object(w.d)("Clips of My Channel", "ClipsManagerTable"),
                        name: "ClipsOfMyChannel",
                        checked: this.props.currentUserRole === g.Broadcaster,
                        onChange: this.setBroadcasterRole
                    }))))), s.createElement(H.G, {
                        cols: {
                            default: 12,
                            xs: 6,
                            sm: 6,
                            md: 12,
                            lg: 12
                        }
                    }, s.createElement(de, {
                        userRole: this.props.currentUserRole
                    }))))
                }, t
            }(s.Component),
            he = Object(v.c)("ClipsManagerRightColumn")(me),
            ge = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.handleImageError = function() {
                        n.setState({
                            imageURL: w.a.defaultStreamPreviewURL
                        })
                    }, n.state = {
                        imageURL: t.imageURL
                    }, n
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return s.createElement("img", {
                        src: this.state.imageURL,
                        alt: this.state.imageURL,
                        onError: this.handleImageError,
                        className: this.props.className
                    })
                }, t
            }(s.Component),
            fe = (n("1f48"), "clips-manager-row-checkbox"),
            Ce = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.selectClip = function() {
                        var e = !t.props.isSelected;
                        t.props.onSelectClip(t.props.clip, e)
                    }, t.onRowClick = function(e) {
                        var n = e.target;
                        null !== t.checkboxRef && n === t.checkboxRef || n.parentElement && n.parentElement.dataset.testSelector === fe || t.props.onRowClick(t.props.clip)
                    }, t.setCheckboxRef = function(e) {
                        t.checkboxRef = e
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.clip,
                        t = Object(w.g)(new Date(e.createdAt));
                    return s.createElement(H.U, {
                        className: "clmgr-table__row",
                        display: H.H.Flex,
                        overflow: H.Z.Hidden,
                        alignItems: H.c.Center
                    }, s.createElement(H.S, {
                        onClick: this.onRowClick,
                        alpha: !0
                    }, s.createElement(H.N, {
                        "data-target": this.props.dataTarget
                    }, s.createElement(H.G, {
                        cols: 4
                    }, s.createElement(H.U, {
                        display: H.H.Flex,
                        flexWrap: H.K.NoWrap,
                        alignItems: H.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(H.U, {
                        flexShrink: 0,
                        position: H._3.Relative
                    }, s.createElement(H._18, {
                        className: "clmgr-checkbox-bg",
                        background: H.m.Base,
                        position: H._3.Absolute
                    }), s.createElement(H.E, {
                        refDelegate: this.setCheckboxRef,
                        "data-test-selector": fe,
                        label: " ",
                        checked: this.props.isSelected,
                        onChange: this.selectClip
                    })), s.createElement(H.P, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, s.createElement(ge, {
                        imageURL: this.props.clip.thumbnailURL,
                        className: "clmgr-thumb"
                    })), s.createElement(H._22, {
                        type: H._27.H5,
                        title: e.title,
                        ellipsis: !0
                    }, e.title))), s.createElement(H.G, {
                        cols: 2
                    }, s.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(H.P, {
                        ellipsis: !0
                    }, s.createElement(A.a, {
                        to: "/" + e.broadcaster.login + "/clips",
                        title: e.broadcaster.displayName
                    }, e.broadcaster.displayName)))), s.createElement(H.G, {
                        cols: 2
                    }, s.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, this.renderGameLink(e))), s.createElement(H.G, {
                        cols: 2
                    }, s.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(H._22, {
                        title: t,
                        transform: H._26.Capitalize,
                        ellipsis: !0
                    }, t))), s.createElement(H.G, {
                        cols: 2
                    }, s.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: .5
                        }
                    }, s.createElement(H._9, {
                        asset: H._10.GlyphViews
                    })), Object(w.f)(e.viewCount, {
                        maximumFractionDigits: 1
                    }))))))
                }, t.prototype.renderGameLink = function(e) {
                    return e.game ? s.createElement(H.P, {
                        ellipsis: !0
                    }, s.createElement(A.a, {
                        to: Object(L.c)(e.game.name),
                        title: e.game.name
                    }, e.game.name)) : null
                }, t
            }(s.Component),
            be = (n("EDaX"), "clips-manager-table-row"),
            ve = "clips-manager-select-all",
            ye = "clips-manager-batch-delete",
            ke = "clips-manager-views-sort",
            Se = "clips-manager-createdat-sort",
            Ee = "clips-manager-empty-body",
            _e = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.expandClipRow = function(e) {
                        t.setState({
                            expandedSlug: e.slug
                        })
                    }, t.closeExpandedRow = function() {
                        t.setState({
                            expandedSlug: null
                        })
                    }, t.loadMore = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            return l.__generator(this, function(e) {
                                return this.props.loading || this.props.error || !this.props.clips ? [2] : [2, this.props.loadMore().then(function() {})]
                            })
                        })
                    }, t.selectClip = function(e, n) {
                        void 0 === n && (n = !0), t.setState(function(t) {
                            var a;
                            if (n) a = l.__assign({}, t.selectedClips, (s = {}, s[e.slug] = e, s));
                            else {
                                var i = t.selectedClips,
                                    r = e.slug;
                                i[r];
                                a = l.__rest(i, ["symbol" == typeof r ? r : r + ""])
                            }
                            return {
                                numberOfSelectedClips: Object.keys(a).length,
                                selectedClips: a
                            };
                            var s
                        })
                    }, t.toggleViewsSort = function() {
                        t.props.sort === r.ViewsDescending ? t.props.updateSort(r.ViewsAscending) : t.props.updateSort(r.ViewsDescending)
                    }, t.toggleCreatedAtSort = function() {
                        t.props.sort === r.CreatedAtDescending ? t.props.updateSort(r.CreatedAtAscending) : t.props.updateSort(r.CreatedAtDescending)
                    }, t.deleteSelectedClips = function() {
                        t.props.onBatchDeleteClips(Object.keys(t.state.selectedClips)), t.setState({
                            numberOfSelectedClips: 0,
                            selectedClips: {}
                        })
                    }, t.deleteClip = function(e) {
                        t.props.onDeleteClip(e), t.selectClip(e, !1)
                    }, t.deleteAllClips = function(e) {
                        t.props.onDeleteAllClips(e)
                    }, t.toggleClipsSelection = function() {
                        var e = t.props.clips,
                            n = t.state.numberOfSelectedClips === e.length;
                        if (n) t.clearClipsSelection();
                        else {
                            var a = e.reduce(function(e, t) {
                                return e[t.slug] = t, e
                            }, {});
                            t.setState({
                                selectedClips: a,
                                numberOfSelectedClips: n ? 0 : Object.keys(a).length
                            })
                        }
                    }, t.clearClipsSelection = function() {
                        t.setState({
                            selectedClips: {},
                            numberOfSelectedClips: 0
                        })
                    }, t.renderDeleteClipModal = function(e) {
                        t.props.showModal(x.d, {
                            clip: e,
                            onClose: t.props.closeModal,
                            onDelete: t.props.onDeleteClip
                        })
                    }, t.renderBatchDeleteModal = function() {
                        var e = Object.keys(t.state.selectedClips);
                        if (1 === t.state.numberOfSelectedClips) {
                            var n = e[0],
                                a = t.state.selectedClips[n];
                            t.renderDeleteClipModal(a)
                        } else {
                            var i = t.state.selectedClips,
                                r = [],
                                l = Object.keys(t.state.selectedClips).reduce(function(e, t) {
                                    return e.push(i[t]), e
                                }, r);
                            t.props.showModal(x.c, {
                                clips: l,
                                onClose: t.props.closeModal,
                                onBatchDelete: t.deleteSelectedClips
                            })
                        }
                    }, t.reportInteractive = function() {
                        !t.props.loading && t.props.userID && t.props.latencyTracking.reportInteractive()
                    }, t.state = {
                        numberOfSelectedClips: 0,
                        selectedClips: {},
                        expandedSlug: null,
                        isNewQueryLoading: !1
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (e.loading) {
                        (e.sort !== this.props.sort || e.userRole !== this.props.userRole || e.searchFilterType !== this.props.searchFilterType || e.searchFilterTerm !== this.props.searchFilterTerm) && (this.clearClipsSelection(), this.setState({
                            isNewQueryLoading: !0
                        }))
                    }
                    this.state.isNewQueryLoading && !e.loading && this.setState({
                        isNewQueryLoading: !1
                    })
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.error || !this.props.userID ? null : s.createElement(H.U, {
                        className: "clmgr-body-wrap",
                        display: H.H.Flex,
                        flexWrap: H.K.NoWrap,
                        flexDirection: H.J.ColumnReverse,
                        breakpointMedium: {
                            flexDirection: H.J.Row
                        }
                    }, s.createElement(H.U, {
                        className: "clmgr-table-wrap",
                        display: H.H.Flex,
                        flexGrow: 1,
                        position: H._3.Relative
                    }, s.createElement(H._18, {
                        background: H.m.Base,
                        border: !0,
                        elevation: 3,
                        margin: {
                            bottom: .5
                        },
                        fullWidth: !0
                    }, this.renderHeaderRow()), s.createElement(H._18, {
                        background: H.m.Base,
                        elevation: 2,
                        border: !0,
                        fullWidth: !0,
                        fullHeight: !0
                    }, s.createElement(R.b, null, s.createElement(H.U, null, this.props.clips.length > 0 && !this.state.isNewQueryLoading && this.props.clips.map(function(t) {
                        return e.renderClipRow(t)
                    }), this.state.isNewQueryLoading && this.props.loading && s.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        justifyContent: H.T.Center,
                        padding: 1,
                        fullWidth: !0
                    }, s.createElement(H.Y, {
                        delay: 0
                    })), 0 === this.props.clips.length && !this.props.loading && s.createElement(H.U, {
                        display: H.H.Flex,
                        justifyContent: H.T.Center,
                        textAlign: H._23.Center,
                        padding: 2,
                        fullWidth: !0,
                        fullHeight: !0
                    }, s.createElement(H._22, {
                        type: H._27.H4,
                        color: H.F.Alt2,
                        "data-test-selector": Ee
                    }, Object(w.d)("Create Clips to fill this space with the most memorable moments from your favorite Twitch streams and videos. Just hit the Clip button on the video player to try it out. {learnHowLink} to use Clips.", {
                        learnHowLink: s.createElement("a", {
                            target: "_blank",
                            rel: "noopener",
                            href: "https://help.twitch.tv/customer/portal/articles/2442508-how-to-use-clips"
                        }, Object(w.d)("Learn how", "ClipsManagerTable"))
                    }, "ClipsManagerTable"))), s.createElement(R.a, {
                        loadMore: this.loadMore,
                        enabled: !this.props.loading && this.props.hasNextPage
                    }), this.props.loading && !this.state.isNewQueryLoading && s.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        justifyContent: H.T.Center,
                        padding: 1,
                        fullWidth: !0
                    }, s.createElement(H.Y, {
                        delay: 0
                    })))))), s.createElement(H.U, {
                        breakpointMedium: {
                            margin: {
                                left: 2
                            }
                        },
                        flexShrink: 0
                    }, s.createElement(he, {
                        updateUserRole: this.props.updateUserRole,
                        currentUserRole: this.props.userRole
                    })))
                }, t.prototype.renderHeaderRow = function() {
                    var e = this.state.numberOfSelectedClips > 0,
                        t = e && this.state.numberOfSelectedClips === this.props.clips.length,
                        n = s.createElement(H.E, {
                            "data-test-selector": ve,
                            label: " ",
                            checked: t,
                            onChange: this.toggleClipsSelection,
                            disabled: this.state.isNewQueryLoading && this.props.loading
                        });
                    if (e) return s.createElement(H.N, null, s.createElement(H.G, {
                        cols: 12
                    }, s.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        fullHeight: !0
                    }, s.createElement(H.U, {
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, n), s.createElement(H.U, {
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, s.createElement(H._22, null, Object(w.d)("{numClips, number} selected", {
                        numClips: this.state.numberOfSelectedClips
                    }, "ClipsManagerTable"))), s.createElement(H.U, {
                        flexShrink: 0,
                        alignItems: H.c.Center,
                        fullHeight: !0
                    }, s.createElement(H.v, {
                        ariaLabel: Object(w.d)("Delete Clip", "ClipsManagerTable"),
                        icon: H._10.Trash,
                        onClick: this.renderBatchDeleteModal,
                        "data-test-selector": ye
                    })))));
                    var a = this.props.sort,
                        i = a === r.ViewsAscending || a === r.ViewsDescending,
                        l = a === r.CreatedAtAscending || a === r.CreatedAtDescending,
                        o = Object(w.d)("Created", "ClipsManagerTable"),
                        c = Object(w.d)("Views", "ClipsManagerTable");
                    return s.createElement(H.N, null, s.createElement(H.G, {
                        cols: 4
                    }, s.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: 1
                        }
                    }, n), s.createElement(H._22, null, Object(w.d)("Info", "ClipsManagerTable")))), s.createElement(H.G, {
                        cols: 2
                    }, s.createElement(H.U, {
                        padding: 1
                    }, Object(w.d)("Channel", "ClipsManagerTable"))), s.createElement(H.G, {
                        cols: 2
                    }, s.createElement(H.U, {
                        padding: 1
                    }, Object(w.d)("Game", "ClipsManagerTable"))), s.createElement(H.G, {
                        cols: 2
                    }, s.createElement(H.U, {
                        padding: {
                            y: .5,
                            right: 1
                        },
                        display: H.H.Flex,
                        fullHeight: !0
                    }, s.createElement(H.S, {
                        alpha: !0,
                        onClick: this.toggleCreatedAtSort,
                        "data-test-selector": Se
                    }, s.createElement(H.U, {
                        display: H.H.Flex,
                        flexWrap: H.K.NoWrap,
                        alignContent: H.b.Center,
                        justifyContent: H.T.Between,
                        padding: {
                            x: 1
                        }
                    }, s.createElement(H._22, {
                        color: H.F.Link,
                        title: o,
                        bold: !0,
                        ellipsis: !0
                    }, o), l && s.createElement(H._9, {
                        asset: a === r.CreatedAtDescending ? H._10.GlyphArrDown : H._10.GlyphArrUp,
                        type: H._11.Brand
                    }))))), s.createElement(H.G, {
                        cols: 2
                    }, s.createElement(H.U, {
                        padding: {
                            y: .5,
                            right: 1
                        },
                        display: H.H.Flex,
                        fullHeight: !0
                    }, s.createElement(H.S, {
                        alpha: !0,
                        onClick: this.toggleViewsSort,
                        "data-test-selector": ke
                    }, s.createElement(H.U, {
                        display: H.H.Flex,
                        flexWrap: H.K.NoWrap,
                        alignContent: H.b.Center,
                        justifyContent: H.T.Between,
                        padding: {
                            x: 1
                        }
                    }, s.createElement(H._22, {
                        color: H.F.Link,
                        title: c,
                        bold: !0,
                        ellipsis: !0
                    }, c), i && s.createElement(H._9, {
                        asset: a === r.ViewsDescending ? H._10.GlyphArrDown : H._10.GlyphArrUp,
                        type: H._11.Brand
                    }))))))
                }, t.prototype.renderClipRow = function(e) {
                    var t = !!this.state.selectedClips[e.slug];
                    if (e.slug === this.state.expandedSlug) {
                        var n = this.props.userRole === g.Curator ? U.a.MyClips : U.a.ClipsOfMyChannel;
                        return s.createElement(te, {
                            key: e.slug,
                            dataTarget: be,
                            clip: e,
                            onClose: this.closeExpandedRow,
                            onDelete: this.deleteClip,
                            onDeleteAll: this.deleteAllClips,
                            pageType: n
                        })
                    }
                    return s.createElement(Ce, {
                        key: e.slug,
                        dataTarget: be,
                        clip: e,
                        isSelected: t,
                        onSelectClip: this.selectClip,
                        onRowClick: this.expandClipRow
                    })
                }, t
            }(s.Component),
            Te = n("zlRb"),
            we = Object(o.compose)(Object(v.c)("ClipsManagerTable"), Object(M.a)(Te, {
                options: function(e) {
                    var t = {
                        sort: h[e.sort],
                        period: f[m.All]
                    };
                    return e.userRole === g.Broadcaster ? t.broadcasterID = e.channelID : t.curatorID = e.channelID, e.searchFilterTerm && (e.searchFilterType === O.a.Users && e.userRole !== g.Broadcaster ? t.broadcasterID = e.searchFilterTerm : t.gameName = e.searchFilterTerm), {
                        variables: {
                            login: e.channelName,
                            limit: 20,
                            criteria: t
                        },
                        notifyOnNetworkStatusChange: !0
                    }
                },
                props: function(e) {
                    var t = [],
                        n = "",
                        a = !1;
                    return e.data.user && e.data.user.clips && (n = e.data.user.id, t = e.data.user.clips.edges.map(function(e) {
                        return e.node
                    }), a = e.data.user.clips.pageInfo.hasNextPage), {
                        userID: n,
                        clips: t,
                        loading: e.data.loading,
                        hasNextPage: a,
                        error: e.data.error,
                        loadMore: function() {
                            var t = e.data.user.clips.edges,
                                n = t[t.length - 1].cursor;
                            return e.data.fetchMore({
                                variables: l.__assign({}, e.data.variables, {
                                    cursor: n
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult,
                                        a = e.user.clips.edges,
                                        i = n.user.clips.edges;
                                    return {
                                        user: l.__assign({}, n.user, {
                                            clips: l.__assign({}, n.user.clips, {
                                                edges: Object(D.b)(a, i)
                                            })
                                        })
                                    }
                                }
                            })
                        },
                        onDeleteClip: function(t) {
                            Object(D.d)(Te, e.data.variables, function(e) {
                                var n = e.user.clips.edges;
                                return e.user.clips.edges = n.filter(function(e) {
                                    var n = e.node.slug;
                                    return t.slug !== n
                                }), e
                            })
                        },
                        onDeleteAllClips: function(t) {
                            Object(D.d)(Te, e.data.variables, function(e) {
                                var n = e.user.clips.edges;
                                return e.user.clips.edges = n.filter(function(e) {
                                    var n = e.node.slug;
                                    return !t.some(function(e) {
                                        return e.slug === n
                                    })
                                }), e
                            })
                        },
                        onBatchDeleteClips: function(t) {
                            Object(D.d)(Te, e.data.variables, function(e) {
                                var n = e.user.clips.edges;
                                return e.user.clips.edges = n.filter(function(e) {
                                    var n = e.node.slug;
                                    return !t.includes(n)
                                }), e
                            })
                        }
                    }
                }
            }), Object(y.a)(null, function(e) {
                return Object(k.bindActionCreators)({
                    showModal: N.d,
                    closeModal: N.c
                }, e)
            }))(_e),
            Me = n("tYdz"),
            Oe = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.getChildContext = function() {
                        return {
                            setSearchTerm: n.setSearchTerm,
                            setSearchType: n.setSearchType,
                            clearSearch: n.clearSearch
                        }
                    }, n.setSortOption = function(e) {
                        n.setState({
                            sortOption: e
                        })
                    }, n.setSearchTerm = function(e) {
                        n.setState({
                            searchTerm: e
                        })
                    }, n.setSearchType = function(e) {
                        e !== n.state.searchType && n.setState({
                            searchType: e,
                            searchTerm: null
                        })
                    }, n.clearSearch = function() {
                        n.setState({
                            searchTerm: null
                        })
                    }, n.setUserRole = function(e) {
                        e !== n.state.userRole && (n.setState({
                            userRole: e,
                            searchTerm: null
                        }), n.props.onRoleChange(e))
                    }, n.reportInteractive = function() {
                        var e = n.props.data;
                        e && !e.loading && e.currentUser && n.props.latencyTracking.reportInteractive()
                    }, n.state = {
                        userRole: t.role,
                        sortOption: r.CreatedAtDescending,
                        searchType: O.a.Games,
                        searchTerm: null
                    }, n
                }
                return l.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.props.isLoggedIn || this.props.login()
                }, t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.loading || this.props.data.error || !this.props.data.currentUser ? null : s.createElement(H.U, {
                        className: "scroll-y",
                        padding: 3,
                        fullHeight: !0
                    }, s.createElement(H.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(H._22, {
                        type: H._27.H1,
                        fontSize: H.L.Size3
                    }, Object(w.d)("Clips", "ClipsManagerPage"))), s.createElement(we, {
                        channelName: this.props.data.currentUser.login,
                        channelID: this.props.data.currentUser.id,
                        sort: this.state.sortOption,
                        updateSort: this.setSortOption,
                        userRole: this.state.userRole,
                        updateUserRole: this.setUserRole,
                        searchFilterTerm: this.state.searchTerm,
                        searchFilterType: this.state.searchType
                    }))
                }, t.childContextTypes = {
                    setSearchTerm: T.func,
                    setSearchType: T.func,
                    clearSearch: T.func
                }, t
            }(s.Component),
            De = Object(o.compose)(Object(v.c)("ClipsManager"), Object(M.a)(Me), c.e)(Oe),
            Ne = Object(y.a)(function(e) {
                return {
                    isLoggedIn: Object(_.d)(e)
                }
            }, function(e) {
                return Object(k.bindActionCreators)({
                    login: function() {
                        return Object(E.f)(S.a.ClipsManager)
                    }
                }, e)
            })(De),
            Re = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onRoleChange = function(e) {
                        e !== g.Broadcaster && t.props.history.push({
                            pathname: i(t.props.match.params.channelName, e)
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(Ne, {
                        channelName: this.props.match.params.channelName,
                        role: g.Broadcaster,
                        onRoleChange: this.onRoleChange
                    })
                }, t
            }(s.Component),
            xe = Object(o.compose)(Object(v.c)("ClipsOfMeManagerPage", {
                destination: u.a.ChannelClipsManager
            }), Object(d.a)({
                location: p.PageviewLocation.ChannelClipsManager,
                properties: {
                    is_live: !1
                }
            }), c.e)(Re),
            Ue = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onRoleChange = function(e) {
                        e !== g.Curator && t.props.history.push({
                            pathname: i(t.props.match.params.channelName, e)
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(Ne, {
                        channelName: this.props.match.params.channelName,
                        role: g.Curator,
                        onRoleChange: this.onRoleChange
                    })
                }, t
            }(s.Component),
            Ae = Object(o.compose)(Object(v.c)("MyClipsManagerPage", {
                destination: u.a.MyClipsManager
            }), Object(d.a)({
                location: p.PageviewLocation.MyClipsManager,
                properties: {
                    is_live: !1
                }
            }), c.e)(Ue);
        n.d(t, "ChannelClipsManagerPage", function() {
            return xe
        }), n.d(t, "MyClipsManagerPage", function() {
            return Ae
        })
    },
    bdk8: function(e, t) {},
    bhVC: function(e, t, n) {
        "use strict";
        var a = n("8Wuk");
        n.d(t, "a", function() {
            return a.a
        }), n.d(t, "b", function() {
            return a.b
        })
    },
    hSb5: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsManagerExpandedRow_CurrentUser"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 64
            }
        };
        n.loc.source = {
            body: "query ClipsManagerExpandedRow_CurrentUser {\ncurrentUser {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "j7/Y": function(e, t, n) {
        "use strict";

        function a(e) {
            return function(t) {
                var n = function(n) {
                    function a(t) {
                        var a = n.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0, o.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = a.referenceTracking,
                                    l = r.content,
                                    s = r.medium,
                                    c = r.content_index;
                                o.n.tracking.trackPageview(i.__assign({
                                    content: l,
                                    medium: s,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, o.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : o.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return i.__extends(a, n), a.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, a.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, a.prototype.render = function() {
                        return l.createElement(t, i.__assign({}, this.props))
                    }, a.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? r.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var a = "",
                                i = r.stringify(t);
                            i.length > 0 && (a = "?" + i), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: a
                            })
                        }
                        return n
                    }, a
                }(l.Component);
                return Object(s.f)(n)
            }
        }
        var i = n("TToO"),
            r = n("OAwv"),
            l = n("U7vG"),
            s = n("F8kA"),
            o = n("6sO2");
        n.d(t, "a", function() {
            return a
        })
    },
    kUjr: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "clip"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Clip"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "slug"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "url"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "embedURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "title"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "viewCount"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "language"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        value: "52"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "72"
                                    }
                                }],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "thumbnailURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "createdAt"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "durationSeconds"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 229
            }
        };
        n.loc.source = {
            body: "fragment clip on Clip {\nid\nslug\nurl\nembedURL\ntitle\nviewCount\nlanguage\ncurator {\nid\nlogin\ndisplayName\n}\ngame {\nid\nname\nboxArtURL(width: 52 height: 72)\n}\nbroadcaster {\nid\nlogin\ndisplayName\n}\nthumbnailURL\ncreatedAt\ndurationSeconds\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    lTii: function(e, t) {},
    qCag: function(e, t) {},
    qkCi: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention", e[e.Ban = 3] = "Ban", e[e.Timeout = 4] = "Timeout", e[e.AutoModRejectedPrompt = 5] = "AutoModRejectedPrompt", e[e.AutoModMessageRejected = 6] = "AutoModMessageRejected", e[e.AutoModMessageAllowed = 7] = "AutoModMessageAllowed", e[e.AutoModMessageDenied = 8] = "AutoModMessageDenied", e[e.Connected = 9] = "Connected", e[e.Disconnected = 10] = "Disconnected", e[e.Reconnect = 11] = "Reconnect", e[e.Hosting = 12] = "Hosting", e[e.Unhost = 13] = "Unhost", e[e.Subscription = 14] = "Subscription", e[e.Resubscription = 15] = "Resubscription", e[e.SubGift = 16] = "SubGift", e[e.Clear = 17] = "Clear", e[e.SubscriberOnlyMode = 18] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 19] = "FollowerOnlyMode", e[e.SlowMode = 20] = "SlowMode", e[e.EmoteOnlyMode = 21] = "EmoteOnlyMode", e[e.RoomMods = 22] = "RoomMods", e[e.RoomState = 23] = "RoomState", e[e.Raid = 24] = "Raid", e[e.Unraid = 25] = "Unraid", e[e.Notice = 26] = "Notice", e[e.Info = 27] = "Info", e[e.BadgesUpdated = 28] = "BadgesUpdated", e[e.Purchase = 29] = "Purchase", e[e.BitsCharity = 30] = "BitsCharity", e[e.CrateGift = 31] = "CrateGift"
        }(a || (a = {}))
    },
    sikP: function(e, t, n) {
        "use strict";

        function a(e) {
            return Object(C.a)(b, e)
        }
        var i = n("TToO"),
            r = n("U7vG"),
            l = n("6sO2"),
            s = n("rCmJ"),
            o = n("Odds"),
            c = (n("XITx"), {
                TITLE: "clips-modal-title",
                MAIN_BODY: "clips-modal-main-body",
                SUCCESS_BODY: "clips-modal-success-body",
                ERROR_BODY: "clips-modal-error-body",
                SUBMIT_BUTTON: "clips-modal-submit-button",
                CANCEL_BUTTON: "clips-modal-cancel-button"
            }),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSuccess = function() {
                        return t.props.successContent ? r.createElement(o._18, {
                            "data-test-selector": c.SUCCESS_BODY,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: o.m.Alt,
                            fullWidth: !0
                        }, r.createElement(o._22, {
                            type: o._27.Strong
                        }, t.props.successContent)) : null
                    }, t.renderError = function() {
                        return t.props.errorContent ? r.createElement(o._18, {
                            "data-test-selector": c.ERROR_BODY,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: o.m.Alt,
                            fullWidth: !0
                        }, r.createElement(o._22, {
                            type: o._27.Strong,
                            color: o.F.Error
                        }, t.props.errorContent)) : null
                    }, t.onSubmit = function() {
                        t.props.onSubmit()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.successContent ? r.createElement(s.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(o._18, {
                        padding: 2,
                        background: o.m.Base,
                        className: "clip-modal"
                    }, this.renderSuccess(), r.createElement(o.U, {
                        display: o.H.Flex,
                        justifyContent: o.T.Center
                    }, r.createElement(o.U, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(o.u, {
                        "data-test-selector": c.CANCEL_BUTTON,
                        onClick: this.props.onClose
                    }, Object(l.d)("Close", "ClipsModal")))))) : r.createElement(s.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(o._18, {
                        padding: 2,
                        background: o.m.Base,
                        className: "clip-modal"
                    }, r.createElement(o._18, {
                        "data-test-selector": c.TITLE,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 1
                        }
                    }, this.props.title), r.createElement(o._18, {
                        "data-test-selector": c.MAIN_BODY,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, this.renderError(), this.props.body), r.createElement(o.U, {
                        display: o.H.Flex,
                        justifyContent: o.T.Center
                    }, r.createElement(o.U, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(o.u, {
                        "data-test-selector": c.CANCEL_BUTTON,
                        type: o.z.Text,
                        onClick: this.props.onClose
                    }, Object(l.d)("Cancel", "ClipsModal"))), r.createElement(o.U, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(o.u, {
                        "data-test-selector": c.SUBMIT_BUTTON,
                        type: this.props.buttonType ? this.props.buttonType : o.z.Default,
                        onClick: this.onSubmit,
                        disabled: this.props.submitDisabled
                    }, this.props.buttonContent), this.props.isLoading && r.createElement(o.Y, {
                        delay: 0
                    })))))
                }, t
            }(r.Component),
            u = n("1OO3"),
            p = n("CSlQ"),
            m = 86400,
            h = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            g = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.renderTitle = function() {
                        return t.props.isTemporary ? r.createElement(o._22, {
                            type: o._27.H5,
                            ellipsis: !0
                        }, Object(l.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : r.createElement(o._22, {
                            type: o._27.H5,
                            ellipsis: !0
                        }, Object(l.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                    }, t.renderBodyText = function() {
                        return t.props.isTemporary ? r.createElement(o._22, null, Object(l.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                            clipCreator: t.props.clip.curator.displayName
                        }, "ClipsModalBanUser")) : r.createElement(o._22, null, Object(l.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                            clipCreator: t.props.clip.curator.displayName
                        }, "ClipsModalBanUser"))
                    }, t.renderButtonText = function() {
                        return t.props.isTemporary ? Object(l.d)("Timeout User", "ClipsModalBanUser") : Object(l.d)("Ban User", "ClipsModalBanUser")
                    }, t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(l.d)("Success!", "ClipsModalBanUser") : null
                    }, t.renderFailure = function() {
                        return t.state.hasErrored ? t.props.isTemporary ? Object(l.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(l.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
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
                                        }), e = this.props.clip.curator.login, t = this.props.isTemporary ? this.props.onBanUser(e, m) : this.props.onBanUser(e), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, t];
                                    case 2:
                                        return n.sent(), this.setState({
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
                    }, t.state = h, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return r.createElement(d, {
                        onSubmit: this.banUser,
                        onClose: this.props.onClose,
                        title: this.renderTitle(),
                        body: this.renderBodyText(),
                        buttonContent: this.renderButtonText(),
                        buttonType: o.z.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure(),
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            f = Object(p.c)("ClipsModalBanUser")(Object(u.a)(function(e) {
                return {
                    channelID: e.clip.broadcaster.id
                }
            })(g)),
            C = n("7vx8"),
            b = n("wnjK"),
            v = (n("lTii"), this),
            y = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            k = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onDeleteClick = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.props.deleteClip(this.props.clip)];
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
                    }, t.state = y, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = [r.createElement(o._22, {
                            key: "title",
                            type: o._27.H4
                        }, Object(l.d)("Delete This Clip", "ClipsModalDelete")), r.createElement(o.U, {
                            key: "message",
                            margin: {
                                top: 1
                            }
                        }, r.createElement(o._22, {
                            type: o._27.P,
                            color: o.F.Alt2
                        }, Object(l.d)("This clip will be permanently deleted.", "ClipsModalDelete")))],
                        t = r.createElement(o._18, {
                            display: o.H.Flex,
                            flexWrap: o.K.NoWrap
                        }, r.createElement(o.U, {
                            className: "clips-modal-delete__thumb",
                            margin: {
                                right: 1
                            }
                        }, r.createElement(o.j, {
                            ratio: o.k.Aspect16x9
                        }, r.createElement("img", {
                            src: this.props.clip.thumbnailURL
                        }))), r.createElement(o.U, null, r.createElement(o._22, {
                            type: o._27.H5
                        }, this.props.clip.title), r.createElement(o._22, {
                            color: o.F.Alt2
                        }, Object(l.d)("{created, date, medium}", {
                            created: new Date(this.props.clip.createdAt)
                        }, "ClipsModalDelete"), " • ", Object(l.d)("Clipped by {curator}", {
                            curator: this.props.clip.curator.login
                        }, "ClipsModalDelete")), r.createElement(o._22, {
                            color: o.F.Alt2
                        }, Object(l.d)("{viewCount, number} views", {
                            viewCount: this.props.clip.viewCount
                        }, "ClipsModalDelete"))));
                    return r.createElement(d, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(l.d)("Delete", "ClipsModalDelete"),
                        buttonType: o.z.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        successContent: this.state.hasSucceeded ? Object(l.d)("Success!", "ClipsModalDelete") : null,
                        errorContent: this.state.hasErrored ? Object(l.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            S = a({
                props: function(e) {
                    return {
                        deleteClip: function(t) {
                            return i.__awaiter(v, void 0, void 0, function() {
                                var n;
                                return i.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 2, , 3]), [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        slugs: [t.slug]
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return a.sent(), e.ownProps.onDelete && e.ownProps.onDelete(t), [3, 3];
                                        case 2:
                                            throw n = a.sent(), l.i.error(n, "Failed to delete clip"), n;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(k),
            E = n("BhyV"),
            _ = n("wqRA"),
            T = this,
            w = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            M = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.deleteAll = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
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
                    }, t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(l.d)("A request has been made to delete the clip. Please wait a few minutes for this to take effect.", "ClipsModalDeleteAll") : null
                    }, t.renderFailure = function() {
                        return t.state.hasErrored ? Object(l.d)("There was a problem deleting this clip.", "ClipsModalDeleteAll") : null
                    }, t.state = w, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = r.createElement(o._22, {
                        type: o._27.P
                    }, Object(l.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                    return r.createElement(d, {
                        onSubmit: this.deleteAll,
                        onClose: this.props.onClose,
                        title: r.createElement(o._22, {
                            type: o._27.H4
                        }, Object(l.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                        body: e,
                        buttonContent: Object(l.d)("Delete", "ClipsModalDeleteAll"),
                        buttonType: o.z.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure()
                    })
                }, t
            }(r.Component),
            O = Object(E.compose)(Object(p.c)("ClipsModalDeleteAll"), a({
                props: function(e) {
                    return {
                        deleteAllClips: function(t, n) {
                            return i.__awaiter(T, void 0, void 0, function() {
                                var a, r, s;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return i.trys.push([0, 6, , 7]), a = void 0, n ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        videoID: n
                                                    }
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return r = i.sent(), a = r.data, [3, 5];
                                        case 2:
                                            return t ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        broadcastID: t
                                                    }
                                                }
                                            })] : [3, 4];
                                        case 3:
                                            return r = i.sent(), a = r.data, [3, 5];
                                        case 4:
                                            throw new Error("Invalid broadcastID specified for deleteAllClips");
                                        case 5:
                                            return e.ownProps.onDeleteAll && e.ownProps.onDeleteAll(a.deleteClips.clips), [3, 7];
                                        case 6:
                                            throw s = i.sent(), l.i.error(s, "Failed to delete clips from VOD"), s;
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            }), Object(C.a)(_, {
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
                            slug: e.clip.slug
                        }
                    }
                }
            }))(M),
            D = this,
            N = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            R = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(l.d)("Clips successfully deleted.", "ClipsModalBatchDelete") : null
                    }, t.renderError = function() {
                        return t.state.hasErrored ? Object(l.d)("There was a problem deleting this clip.", "ClipsModalBatchDelete") : null
                    }, t.onDeleteClick = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
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
                    }, t.state = N, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = r.createElement(o._22, {
                            type: o._27.H4
                        }, Object(l.d)("Delete these clips?", "ClipsModalBatchDelete")),
                        t = r.createElement(o._22, {
                            type: o._27.P
                        }, Object(l.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                    return r.createElement(d, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(l.d)("Delete", "ClipsModalBatchDelete"),
                        buttonType: o.z.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderError()
                    })
                }, t
            }(r.Component),
            x = a({
                props: function(e) {
                    return {
                        deleteClips: function() {
                            return i.__awaiter(D, void 0, void 0, function() {
                                var t;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        slugs: e.ownProps.clips.map(function(e) {
                                                            return e.slug
                                                        })
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return n.sent(), e.ownProps.onBatchDelete && e.ownProps.onBatchDelete(), [3, 3];
                                        case 2:
                                            throw t = n.sent(), l.i.error(t, "Failed to delete clips"), t;
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
            return d
        }), n.d(t, "b", function() {
            return f
        }), n.d(t, "d", function() {
            return S
        }), n.d(t, "e", function() {
            return O
        }), n.d(t, "c", function() {
            return x
        })
    },
    tYdz: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsManager_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 52
            }
        };
        n.loc.source = {
            body: "query ClipsManager_User {\ncurrentUser {\nid\nlogin\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    uHjT: function(e, t) {},
    w9tK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseGamesAndCommunities: "browse.games-and-communities",
            ChannelIndex: "channel.index.index",
            ChannelDashboardAchievements: "channel.dashboard.achievements",
            ChannelDashboardExtensions: "channel.dashboard.extensions",
            ChannelDashboardModeration: "channel.dashboard.moderation",
            ChannelDashboardStreamSummary: "channel.dashboard.stream-summary",
            ChannelClips: "channel.clips",
            ChannelClipsManager: "videoManager.clips.channel",
            ChannelCollections: "channel.collections",
            ChannelEvents: "channel.events",
            ChatPopout: "chat",
            DevOnly: "dev",
            DirectoryCommunityByLanguage: "directory.community.language",
            DirectoryCommunityIndex: "directory.community.index",
            DirectoryCommunityDetails: "directory.community.details",
            DirectoryGames: "directory.games",
            DirectoryPopular: "directory.popular",
            DirectoryPopularByLanguage: "directory.popular.language",
            DirectoryGameIndex: "directory.game.index",
            DirectoryGameClips: "directory.game.clips",
            DirectoryGameDetails: "directory.game.details",
            DirectoryGameVideos: "directory.game.videos",
            DirectoryFollowingIndex: "directory.following.index",
            DirectoryFollowingGames: "directory.following.games",
            DirectoryFollowingVideos: "directory.following.videos.video-type",
            DirectoryFollowingHosts: "directory.following.hosts",
            DirectoryFollowingLiveChannels: "directory.following.channels",
            DirectoryFollowingCommunities: "directory.following.communities",
            EmailVerification: "emailVerification",
            EventDetails: "event.details",
            ForYou: "for-you",
            Index: "index",
            MyClipsManager: "videoManager.clips",
            NotificationSettingsPage: "settings.notificationSettings",
            OnboardingIndex: "onboarding.index",
            ReportUserPage: "reportUser.page",
            StoreMerchPage: "store.merch",
            SubsLandingPage: "subs.landing",
            SubsBroadcasterPage: "subs.broadcaster",
            TeamsDashboardBasicInfo: "teams.dashboard.basic-info",
            TeamsDashboardCustomize: "teams.dashboard.customize",
            TeamsDashboardFeaturedChannels: "teams.dashboard.featured-channels",
            TeamsDashboardMembers: "teams.dashboard.members",
            TeamsDashboardStats: "teams.dashboard.stats",
            TeamsDashboardRevenue: "teams.dashboard.revenue",
            VideosPage: "videos",
            VideoWatchPage: "video",
            VideoManagerPage: "videoManager.page",
            VideoManagerEditPropertiesPage: "videoManager.edit",
            VideoManagerUploadPage: "videoManager.upload",
            VideoManagerUploadListPage: "videoManager.upload-list"
        }
    },
    wnjK: function(e, t) {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "slug"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
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
    wqRA: function(e, t) {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
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
    zlRb: function(e, t, n) {
        var a = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsManagerTable_User"
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
                    },
                    defaultValue: null
                }, {
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
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
                            value: "UserClipsInput"
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "clips"
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
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "hasNextPage"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                            value: "clip"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 323
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/top-clips/models/clip-fragment.gql"\nquery ClipsManagerTable_User($login: String! $limit: Int $cursor: Cursor $criteria: UserClipsInput){\nuser(login: $login) {\nid\ndisplayName\nclips(first: $limit after: $cursor criteria: $criteria) {\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\n...clip\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var i = {};
        a.definitions = a.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !i[t] && (i[t] = !0, !0)
            })
        }(n("kUjr").definitions)), e.exports = a
    }
});
//# sourceMappingURL=pages.clips-manager-21e9f62c5f5ed16fb413291eb18b455a.js.map