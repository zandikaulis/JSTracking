webpackJsonp([91], {
    "1OO3": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("7vx8"),
            a = 60,
            s = 60 * a,
            l = 24 * s,
            o = 7 * l,
            c = 4 * o;
        var d, u = n("MApH");
        n.d(t, "a", function() {
                return d
            }), t.b = function(e) {
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
                                                                if (t > o) {
                                                                    var r = Math.floor(t / o);
                                                                    t -= r * o, n += r + "w"
                                                                }
                                                                if (t > l) {
                                                                    var d = Math.floor(t / l);
                                                                    t -= d * l, n += d + "d"
                                                                }
                                                                if (t > s) {
                                                                    var u = Math.floor(t / s);
                                                                    t -= u * s, n += u + "h"
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
            },
            function(e) {
                e.Forbidden = "FORBIDDEN", e.TargetNotFound = "TARGET_NOT_FOUND", e.TargetIsSelf = "TARGET_IS_SELF", e.TargetIsAnonymous = "TARGET_IS_ANONYMOUS", e.TargetIsMod = "TARGET_IS_MOD", e.TargetIsBroadcaster = "TARGET_IS_BROADCASTER", e.TargetIsStaff = "TARGET_IS_STAFF", e.TargetIsAdmin = "TARGET_IS_ADMIN", e.TargetIsGlobalMod = "TARGET_IS_GLOBAL_MOD", e.TargetIsAlreadyBanned = "TARGET_ALREADY_BANNED", e.DurationInvalid = "DURATION_INVALID"
            }(d || (d = {}))
    },
    "1f48": function(e, t) {},
    "2TZ0": function(e, t) {
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
    "3NJ6": function(e, t) {},
    "8Wuk": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return u
        });
        var i, r = n("TToO"),
            a = n("GiK3"),
            s = (n.n(a), n("6sO2")),
            l = n("2hJ3"),
            o = n("f6Cj"),
            c = n("Odds"),
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
                    return n.props.type === i.Download ? a.createElement("a", r.__assign({
                        href: n.props.url,
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(c._63)(n.props), {
                        download: n.props.text
                    }), n.renderIcon()) : n.isLink() ? a.createElement("a", r.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(c._63)(n.props)), n.renderIcon()) : a.createElement("button", r.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(c._63)(n.props)), n.renderIcon())
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
                    return a.createElement(c._8, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon"),
                        display: c.R.Flex,
                        justifyContent: c._7.Center,
                        alignItems: c.c.Center
                    }, a.createElement(c._24, {
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
                            return Object(s.d)("Download", "SocialButton");
                        case i.Copy:
                            return n.state.isCopied ? Object(s.d)("Copied", "SocialButton") : Object(s.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case i.Twitter:
                            return c._25.Twitter;
                        case i.Facebook:
                            return c._25.Facebook;
                        case i.VKontakte:
                            return c._25.VKontakte;
                        case i.Reddit:
                            return c._25.Reddit;
                        case i.Download:
                            return c._25.Download;
                        case i.Copy:
                        default:
                            return c._25.Copy
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
                        s = t || "";
                    switch (r) {
                        case i.Reddit:
                            return Object(o.b)(a, s);
                        case i.VKontakte:
                            return Object(o.d)(a);
                        case i.Facebook:
                            return Object(o.a)(a);
                        case i.Twitter:
                            return Object(o.c)(a, s);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return r.__extends(t, e), t.prototype.render = function() {
                return a.createElement(c._8, {
                    className: "social-button"
                }, a.createElement(c._52, {
                    label: this.getTooltipFromType(),
                    direction: c._54.Bottom
                }, this.renderLink()))
            }, t
        }(a.Component)
    },
    AoO8: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            return o(function(e) {
                e.video && (e.video = Object(s.b)(e.video));
                var t = r.stringify(e);
                return a.o.config.playerBaseURL + "/?" + t
            }(e), t)
        }, t.a = o;
        var i = n("TToO"),
            r = n("OAwv"),
            a = (n.n(r), n("6sO2")),
            s = n("JpYe"),
            l = {
                height: 378,
                width: 620,
                allowScrolling: !0,
                allowFullscreen: !0
            };

        function o(e, t) {
            void 0 === t && (t = l);
            var n, r, a = i.__assign({}, l, t),
                s = '<iframe src="' + e + '" frameborder="0" ' + (a.allowFullscreen ? 'allowfullscreen="true" ' : "") + (a.allowScrolling ? "" : 'scrolling="no" ') + 'height="' + a.height + '" width="' + a.width + '"></iframe>';
            return a.textLink && (s += (n = a.textLink.url, r = a.textLink.text, '<a href="' + n + '" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">' + r + "</a>")), s
        }
    },
    EDaX: function(e, t) {},
    LnKh: function(e, t) {
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
    McFO: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("Aj/L"),
            a = n("TToO"),
            s = n("GiK3"),
            l = n("Snvs"),
            o = n("bhVC"),
            c = n("7vx8"),
            d = n("WNmM"),
            u = n("U2Sd"),
            p = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.data.clip,
                        n = t && t.curator && t.curator.login === this.props.userLogin,
                        i = "";
                    if (t && t.videoQualities) {
                        var r = t.videoQualities[0];
                        i = r.sourceURL
                    }
                    var a = this.props,
                        c = a.broadcasterId,
                        u = a.broadcasterLogin,
                        p = a.forceShow;
                    return s.createElement(l.a, {
                        ownerLogin: this.props.broadcasterLogin,
                        permittedRoles: {
                            editor: !0,
                            staff: !0
                        }
                    }, function(r) {
                        var a = r.permitted;
                        return i && (a || n || p) ? s.createElement(o.a, {
                            type: o.b.Download,
                            text: e.props.slug,
                            url: i,
                            onShareClick: t ? Object(d.c)(t.id, t.game && t.game.name, c, u, e.props.pageType) : void 0
                        }) : null
                    })
                }, t
            }(s.Component),
            m = Object(c.a)(u)(p);
        var g = Object(i.b)(function(e) {
            var t = Object(r.c)(e);
            return {
                userLogin: t ? t.login : ""
            }
        })(m);
        n.d(t, "a", function() {
            return g
        })
    },
    QIXk: function(e, t, n) {
        "use strict";
        var i, r, a, s = n("TToO"),
            l = n("GiK3"),
            o = n("6sO2"),
            c = n("7vx8"),
            d = n("6BvN"),
            u = n("oIkB"),
            p = n("vH/s"),
            m = function(e, t, n, i, r) {
                var a = Date.now() / 1e3;
                o.o.tracking.track(p.SpadeEventType.ClipEdit, {
                    channel_id: e,
                    client_time: a,
                    clip_edit_session_id: t + "," + Math.floor(a),
                    clip_id: t,
                    clip_slug: n,
                    effect_name: "title",
                    effect_setting: i,
                    front_end: !0,
                    location: r
                })
            },
            g = function(e, t, n, i, r) {
                var a = Date.now() / 1e3;
                o.o.tracking.track(p.SpadeEventType.ClipEdit, {
                    channel_id: e,
                    client_time: a,
                    clip_edit_session_id: t + "," + Math.floor(a),
                    clip_id: t,
                    clip_slug: n,
                    effect_name: "publish-twilight",
                    effect_setting: i,
                    front_end: !0,
                    location: r
                })
            },
            h = n("CIox");
        ! function(e) {
            e.AlreadyPublished = "already_published", e.EditingWindowExpired = "editing_window_expired", e.InvalidSpeedDuration = "invalid_speed_duration", e.InvalidDuration = "invalid_duration", e.InvalidTitle = "invalid_title", e.Unknown = "unknown"
        }(i || (i = {})),
        function(e) {
            e.InvalidTitle = "invalid_title"
        }(r || (r = {})),
        function(e) {
            e.Unsent = "unsent", e.Sending = "sending", e.Error = "error", e.Successful = "successful"
        }(a || (a = {}));
        var f, v = 5,
            b = 60,
            C = n("Odds"),
            k = n("isxN"),
            S = {
                publishState: a.Unsent,
                errorMessage: null
            },
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = S, t.onError = function(e) {
                        t.setState({
                            publishState: a.Error,
                            errorMessage: e
                        }), t.props.onError(e)
                    }, t.onPublish = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return s.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.setState({
                                                publishState: a.Sending
                                            }), e = this.props.endOffset - this.props.startOffset, this.props.startOffset > this.props.endOffset || e < v || e > b) return this.onError(i.InvalidDuration), [2];
                                        if ("" === this.props.title.trim()) return this.onError(f.emptySubmission), [2];
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
                                        return (t = r.sent()).data.publishClip && t.data.publishClip.error && t.data.publishClip.error.message ? (n = t.data.publishClip.error.message, this.onError(n)) : (g(Number(this.props.clipBroadcasterId), this.props.clipId, this.props.slug, this.props.title, p.PageviewLocation.ClipsEditing), this.setState({
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
                return s.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.state.publishState === a.Error && e.title.length > 0 && this.props.title !== e.title && this.setState(S), e.isSubmitted && !this.props.isSubmitted && this.onPublish()
                }, t.prototype.render = function() {
                    var e = this.state.publishState === a.Error,
                        t = this.state.publishState === a.Sending;
                    return l.createElement(C._8, null, l.createElement(C.v, {
                        onClick: this.onPublish,
                        disabled: e,
                        state: t ? C.A.Loading : C.A.Default,
                        size: C.z.Large,
                        blurAfterClick: !0
                    }, Object(o.d)("Publish", "ClipsPublishButton")))
                }, t = s.__decorate([Object(c.a)(k, {
                    name: "publishClip"
                })], t)
            }(l.Component),
            y = Object(h.f)(E),
            _ = n("2TZ0"),
            w = {
                TITLE_INPUT: "cmgr-title-input",
                TITLE_SAVE: "cmgr-title-save",
                TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
            };
        ! function(e) {
            e.emptySubmission = "emptySubmission", e.characterLimitReached = "characterLimitReached", e.channelViolation = "channelViolation", e.notCurator = "notCurator", e.unknown = "unknown"
        }(f || (f = {}));
        var T = 100,
            N = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderForClipsViewing = function() {
                        return l.createElement("div", null, l.createElement(C._46, {
                            id: w.TITLE_INPUT,
                            "data-test-selector": w.TITLE_INPUT,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        }), l.createElement(C._8, {
                            display: C.R.Flex,
                            justifyContent: C._7.Between,
                            alignItems: C.c.Center,
                            padding: {
                                top: 1
                            }
                        }, n.state.showError ? l.createElement(C.Q, {
                            color: C.K.Error
                        }, n.getErrorMessage()) : l.createElement(C.Q, {
                            color: C.K.Alt2
                        }, n.getRemainingCharacterText()), l.createElement(C._8, {
                            display: C.R.Flex
                        }, l.createElement(C.v, {
                            "data-test-selector": w.TITLE_SAVE,
                            onClick: n.props.onCancel,
                            type: C.B.Hollow
                        }, Object(o.d)("Cancel", "ClipsTitleEdit")), l.createElement(C._8, {
                            padding: {
                                left: 1
                            }
                        }, n.renderSave()))))
                    }, n.renderForManager = function() {
                        return l.createElement(C.W, {
                            id: w.TITLE_INPUT,
                            label: Object(o.d)("Title", "ClipsTitleEdit"),
                            hint: n.getRemainingCharacterText()
                        }, l.createElement(C._8, {
                            display: C.R.Flex,
                            flexWrap: C.U.NoWrap
                        }, l.createElement(C._8, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, l.createElement(C._4, {
                            id: w.TITLE_INPUT,
                            "data-test-selector": w.TITLE_INPUT,
                            type: C._5.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        })), l.createElement(C._8, {
                            flexShrink: 0,
                            flexGrow: 0
                        }, l.createElement(C._8, {
                            position: C._15.Relative
                        }, n.renderSave(), l.createElement(C._6, {
                            onClick: n.dismissMessage,
                            "data-test-selector": w.TITLE_SAVE_TOOLTIP
                        }, l.createElement(C.q, {
                            direction: C.r.TopRight,
                            show: n.state.showError || n.state.showSuccess
                        }, l.createElement(C._8, {
                            padding: 1
                        }, n.state.showSuccess ? l.createElement(C.Q, {
                            color: C.K.Link
                        }, Object(o.d)("Title Saved!", "ClipsTitleEdit")) : l.createElement(C.Q, {
                            color: C.K.Error
                        }, n.getErrorMessage()))))))))
                    }, n.renderForEdit = function() {
                        var e;
                        if ((n.props.startOffset || 0 === n.props.startOffset) && n.props.endOffset) return e = n.state.showError ? l.createElement(C.Q, {
                            color: C.K.Error
                        }, n.getErrorMessage()) : 0 === n.state.title.length && n.props.broadcasterName ? l.createElement(C.Q, {
                            color: C.K.Alt2
                        }, Object(o.d)("Clips with titles get more views. Help {broadcasterName} get discovered by adding a title.", {
                            broadcasterName: n.props.broadcasterName
                        }, "ClipsTitleEdit")) : l.createElement(C.Q, {
                            color: C.K.Alt2
                        }, n.getRemainingCharacterText()), l.createElement(C._8, null, l.createElement(C._8, {
                            fullWidth: !0
                        }, l.createElement(C._4, {
                            id: w.TITLE_INPUT,
                            "data-test-selector": w.TITLE_INPUT,
                            type: C._5.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown,
                            placeholder: Object(o.d)("Add a title (required)", "ClipsTitleEdit"),
                            autoFocus: !0
                        })), l.createElement(C._8, {
                            display: C.R.Flex,
                            justifyContent: C._7.Between,
                            alignItems: C.c.Center,
                            padding: {
                                top: 1
                            }
                        }, e, l.createElement(C._8, {
                            display: C.R.Flex
                        }, l.createElement(C._8, {
                            padding: {
                                left: 1
                            }
                        }, l.createElement(y, {
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
                        return l.createElement(C.v, {
                            "data-test-selector": w.TITLE_SAVE,
                            disabled: !n.canSaveEditedTitle(),
                            onClick: n.editClipTitle
                        }, Object(o.d)("Save", "ClipsTitleEdit"))
                    }, n.onPublishClipError = function(e) {
                        n.setState({
                            showSuccess: !1,
                            showError: !0,
                            error: n.errorMessageToError(e)
                        })
                    }, n.getRemainingCharacterText = function() {
                        return Object(o.d)("{characterCount, number} remaining", {
                            characterCount: T - n.state.title.length
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
                        var t = e.currentTarget.value.slice(0, T);
                        n.setState({
                            title: t,
                            showError: !1,
                            showSuccess: !1
                        })
                    }, n.editClipTitle = function() {
                        return s.__awaiter(n, void 0, void 0, function() {
                            var e, t;
                            return s.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if ("" === this.state.title.trim()) return this.setState({
                                            showError: !0,
                                            error: f.emptySubmission
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
                return s.__extends(t, e), t.prototype.render = function() {
                    return this.props.location === p.PageviewLocation.MyClipsManager ? this.renderForManager() : this.props.location === p.PageviewLocation.ClipsEditing ? this.renderForEdit() : this.renderForClipsViewing()
                }, t.prototype.getErrorMessage = function() {
                    switch (this.state.error) {
                        case f.channelViolation:
                            return Object(o.d)("Uh-oh. Check for inappropriate language and try again!", "ClipsTitleEdit");
                        case f.emptySubmission:
                            return Object(o.d)("Please add a title.", "ClipsTitleEdit");
                        default:
                            return Object(o.d)("Whoops. Something went wrong.", "ClipsTitleEdit")
                    }
                }, t.prototype.errorMessageToError = function(e) {
                    return e.includes("403:") || e.toLowerCase() === i.InvalidTitle.toLowerCase() || e.toLowerCase() === r.InvalidTitle.toLowerCase() ? f.channelViolation : e === f.emptySubmission ? f.emptySubmission : f.unknown
                }, t
            }(l.Component),
            R = Object(c.a)(_, {
                name: "editTitle"
            })(N);
        n.d(t, !1, function() {
            return w
        }), n.d(t, "b", function() {
            return f
        }), n.d(t, !1, function() {
            return N
        }), n.d(t, "a", function() {
            return R
        })
    },
    Qfvd: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return r
        });
        var i = "//static-cdn.jtvnw.net/ttv-boxart",
            r = "52x72"
    },
    Snvs: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("3zLD"),
            s = n("6sO2"),
            l = n("7vx8"),
            o = n("CSlQ"),
            c = n("acVP"),
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
                    }, t.logger = s.j.withCategory("role-restricted"), t
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
            }(r.Component);

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
        var m = Object(a.compose)(Object(l.a)(c, {
            options: function(e) {
                return {
                    variables: {
                        contentOwnerLogin: e.ownerLogin
                    }
                }
            }
        }), Object(o.d)("RoleRestricted"))(d);
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
    U2Sd: function(e, t) {
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
                end: 152
            }
        };
        n.loc.source = {
            body: "query ClipsDownloadButton($slug: ID!) {\nclip(slug: $slug) {\nid\ncurator {\nid\nlogin\n}\nbroadcaster {\nid\n}\ngame {\nid\nname\n}\nvideoQualities {\nsourceURL\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    WNmM: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        }), n.d(t, "b", function() {
            return d
        }), n.d(t, "c", function() {
            return p
        });
        var i, r, a = n("6sO2"),
            s = n("8Wuk"),
            l = n("vH/s"),
            o = ((i = {})[s.b.Twitter] = "twitter", i[s.b.Reddit] = "reddit", i[s.b.VKontakte] = "vkontakte", i[s.b.Facebook] = "facebook", i[s.b.Copy] = "link", i[s.b.CopyInput] = "option_link", i[s.b.Download] = "download", i),
            c = {
                MyClips: "MyClips",
                ClipsOfMyChannel: "ClipsOfMyChannel"
            },
            d = {
                Game: "TopClipsGame",
                Channel: "TopClipsChannel"
            },
            u = ((r = {
                MyClips: l.PageviewLocation.MyClipsManager,
                ClipsOfMyChannel: l.PageviewLocation.ChannelClipsManager,
                TopClipsGame: l.PageviewLocation.ClipsGame,
                TopClipsChannel: l.PageviewLocation.ChannelClips
            })[l.PageviewLocation.ClipsEditing] = l.PageviewLocation.ClipsEditing, r[l.PageviewLocation.ClipsViewing] = l.PageviewLocation.ClipsViewing, r),
            p = function(e, t, n, i, r) {
                return function(s) {
                    a.o.tracking.track(l.SpadeEventType.VideoShare, {
                        vod_id: e,
                        vod_type: "clip",
                        share_platform: o[s],
                        location: u[r],
                        game: t,
                        channel_id: Number(n || 0),
                        channel: i,
                        live: null
                    })
                }
            }
    },
    XITx: function(e, t) {},
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
    aeDV: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, r = n("TToO"),
            a = n("GiK3"),
            s = n("3zLD"),
            l = n("CIox"),
            o = n("j7/Y"),
            c = n("w9tK"),
            d = n("vH/s");
        ! function(e) {
            e[e.ViewsAscending = 0] = "ViewsAscending", e[e.ViewsDescending = 1] = "ViewsDescending", e[e.CreatedAtAscending = 2] = "CreatedAtAscending", e[e.CreatedAtDescending = 3] = "CreatedAtDescending"
        }(i || (i = {}));
        var u, p = ((g = {})[i.CreatedAtAscending] = "CREATED_AT_ASC", g[i.CreatedAtDescending] = "CREATED_AT_DESC", g[i.ViewsAscending] = "VIEWS_ASC", g[i.ViewsDescending] = "VIEWS_DESC", g);
        ! function(e) {
            e[e.Day = 0] = "Day", e[e.Week = 1] = "Week", e[e.Month = 2] = "Month", e[e.All = 3] = "All"
        }(u || (u = {}));
        var m, g, h, f = ((h = {})[u.Day] = "LAST_DAY", h[u.Week] = "LAST_WEEK", h[u.Month] = "LAST_MONTH", h[u.All] = "ALL_TIME", h);
        ! function(e) {
            e[e.Broadcaster = 0] = "Broadcaster", e[e.Curator = 1] = "Curator"
        }(m || (m = {}));
        var v = n("CSlQ"),
            b = n("RH2O"),
            C = n("2KeS"),
            k = n("+xm8"),
            S = n("f2i/"),
            E = n("Aj/L"),
            y = n("KSGD"),
            _ = n("6sO2"),
            w = n("7vx8"),
            T = n("5LoI"),
            N = n("oIkB"),
            R = n("V5M+"),
            O = n("zCIC"),
            D = n("sikP"),
            x = n("WNmM"),
            M = n("F8kA"),
            I = n("rCmJ"),
            L = n("+Znq"),
            F = n("NY9D"),
            A = n("yDzg"),
            j = n("bhVC"),
            U = n("AoO8"),
            B = n("McFO"),
            V = n("Odds"),
            Q = [{
                type: j.b.Twitter,
                params: {
                    tt_medium: "twtr"
                }
            }, {
                type: j.b.Facebook,
                params: {
                    tt_medium: "fb"
                }
            }, {
                type: j.b.VKontakte
            }, {
                type: j.b.Reddit,
                params: {
                    tt_medium: "redt"
                }
            }, {
                type: j.b.Copy
            }];

        function P(e) {
            e.currentTarget.select()
        }
        var G = Object(v.d)("ClipsManagerSocialShare")(function(e) {
                var t = Object(_.d)("Share", "ClipsManagerSocialShare");
                return a.createElement(L.a, null, a.createElement("div", null, a.createElement(V._52, {
                    label: t
                }, a.createElement(V.w, {
                    ariaLabel: t,
                    type: V.y.Hollow,
                    icon: V._25.Share
                }))), a.createElement(V.q, {
                    direction: V.r.BottomRight
                }, a.createElement(V._8, {
                    display: V.R.Flex,
                    justifyContent: V._7.Between,
                    padding: 1
                }, a.createElement(B.a, {
                    broadcasterLogin: e.clip.broadcaster && e.clip.broadcaster.login || "",
                    broadcasterId: e.clip.broadcaster && e.clip.broadcaster.id || "",
                    slug: e.clip.slug,
                    pageType: e.pageType,
                    forceShow: !0
                }), Q.map(function(t) {
                    return a.createElement(j.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(A.a)(e.clip.url, t.params),
                        onShareClick: Object(x.c)(e.clip.id, e.clip.game && e.clip.game.name, e.clip.broadcaster && e.clip.broadcaster.id, e.clip.broadcaster && e.clip.broadcaster.login, e.pageType)
                    })
                })), a.createElement(V._8, {
                    padding: {
                        x: 1,
                        y: .5
                    }
                }, a.createElement(V.W, {
                    label: Object(_.d)("Video Link", "ClipsManagerSocialShare")
                }, a.createElement(V._4, {
                    readOnly: !0,
                    type: V._5.Text,
                    value: e.clip.url,
                    onFocus: P
                }))), a.createElement(V._8, {
                    padding: {
                        x: 1,
                        y: .5
                    }
                }, a.createElement(V.W, {
                    label: Object(_.d)("Embed Video", "ClipsManagerSocialShare")
                }, a.createElement(V._4, {
                    readOnly: !0,
                    type: V._5.Text,
                    value: Object(U.a)(e.clip.embedURL),
                    onFocus: P
                })))))
            }),
            H = n("QIXk"),
            K = n("iFCf"),
            W = (n("qCag"), {
                MODERATION_DROPDOWN: "cmgr-moderation-dropdown",
                MODERATION_BUTTON: "cmgr-moderation-button",
                GAME_LINK: "cmgr-expanded-game-link",
                CHANNEL_LINK: "cmgr-expanded-channel-link"
            }),
            q = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderTitle = function() {
                        var e = n.props.clip;
                        return n.props.data.currentUser.id === (e && e.curator && e.curator.id) ? a.createElement(H.a, {
                            clipId: e.id,
                            clipSlug: e.slug,
                            clipTitle: e.title,
                            clipBroadcasterId: e.broadcaster ? Number(e.broadcaster.id) : 0,
                            location: d.PageviewLocation.MyClipsManager
                        }) : a.createElement(V.W, {
                            label: Object(_.d)("Title", "ClipsManagerTitleEdit")
                        }, a.createElement(V._8, {
                            display: V.R.Flex,
                            flexWrap: V.U.NoWrap
                        }, a.createElement(V._8, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, a.createElement(V.Q, null, e.title))))
                    }, n.renderGameLink = function(e) {
                        return e.game ? a.createElement(M.a, {
                            "data-test-selector": W.GAME_LINK,
                            to: Object(F.c)(e.game.name),
                            title: e.game.name
                        }, e.game.name) : null
                    }, n.renderModerationIcon = function() {
                        if (!n.props.clip.broadcaster || n.props.data.currentUser.id !== n.props.clip.broadcaster.id) return null;
                        var e = Object(_.d)("Moderation", "ClipsManagerExpandedRow");
                        return a.createElement(V._52, {
                            label: e
                        }, a.createElement(V._8, {
                            margin: {
                                right: .5
                            }
                        }, a.createElement(L.a, null, a.createElement(V.w, {
                            ariaLabel: e,
                            type: V.y.Hollow,
                            icon: V._25.Sword,
                            "data-test-selector": W.MODERATION_BUTTON
                        }), a.createElement(V.q, {
                            "data-test-selector": W.MODERATION_DROPDOWN,
                            direction: V.r.BottomRight
                        }, a.createElement(V._8, {
                            padding: {
                                y: .5
                            }
                        }, a.createElement(V._35, {
                            borderBottom: !0
                        }, a.createElement(V._6, {
                            onClick: n.openTimeoutUserModal
                        }, a.createElement(V._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(_.d)("Timeout User (24 hr)", "ClipsManagerExpandedRow"))), a.createElement(V._6, {
                            onClick: n.openBanUserModal
                        }, a.createElement(V._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(_.d)("Ban User", "ClipsManagerExpandedRow")))), a.createElement(V._6, {
                            onClick: n.openDeleteAllModal
                        }, a.createElement(V._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(_.d)("Delete All Clips from Video", "ClipsManagerExpandedRow"))))))))
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
                        n.openModal(D.d, {
                            slug: n.props.clip.slug,
                            onClose: n.closeModal,
                            onDelete: n.props.onDelete
                        })
                    }, n.openTimeoutUserModal = function() {
                        n.props.clip.broadcaster && n.openModal(D.b, {
                            targetUser: n.props.clip.curator,
                            broadcasterID: n.props.clip.broadcaster.id,
                            isTemporary: !0,
                            onClose: n.closeModal
                        })
                    }, n.openBanUserModal = function() {
                        n.props.clip.broadcaster && n.openModal(D.b, {
                            targetUser: n.props.clip.curator,
                            broadcasterID: n.props.clip.broadcaster.id,
                            isTemporary: !1,
                            onClose: n.closeModal
                        })
                    }, n.openDeleteAllModal = function() {
                        n.openModal(D.e, {
                            slug: n.props.clip.slug,
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
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.clip,
                        t = Object(_.c)(new Date(e.createdAt), "medium"),
                        n = Object(_.d)("Close", "ClipsManagerExpandedRow"),
                        i = Object(_.d)("Delete", "ClipsManagerExpandedRow");
                    return a.createElement(I.a, {
                        onClickOut: this.onClickOutside
                    }, a.createElement(V._35, {
                        "data-target": this.props.dataTarget,
                        background: V.n.Base,
                        display: V.R.Block,
                        elevation: 3,
                        className: "clmgr-table__row-expanded",
                        position: V._15.Relative,
                        margin: {
                            bottom: 3
                        }
                    }, a.createElement(V._35, {
                        display: V.R.Flex,
                        justifyContent: V._7.Between,
                        alignItems: V.c.Center,
                        padding: 1,
                        background: V.n.Alt,
                        borderBottom: !0
                    }, a.createElement(V._52, {
                        label: n,
                        align: V._53.Left
                    }, a.createElement(V._8, {
                        flexGrow: 0
                    }, a.createElement(V.w, {
                        ariaLabel: n,
                        type: V.y.Hollow,
                        icon: V._25.Close,
                        onClick: this.props.onClose
                    }), a.createElement(V.q, {
                        direction: V.r.TopLeft
                    }))), a.createElement(V._8, {
                        display: V.R.Flex
                    }, this.renderModerationIcon(), a.createElement(V._52, {
                        label: i
                    }, a.createElement(V._8, {
                        margin: {
                            right: .5
                        }
                    }, a.createElement(V.w, {
                        ariaLabel: i,
                        type: V.y.Hollow,
                        icon: V._25.Trash,
                        onClick: this.openDeleteModal
                    }))), a.createElement(V._8, {
                        margin: {
                            right: .5
                        }
                    }, a.createElement(G, {
                        clip: this.props.clip,
                        pageType: this.props.pageType
                    })), a.createElement(V._52, {
                        label: Object(_.d)("Watch on Clips Page", "ClipsManagerExpandedRow"),
                        align: V._53.Right
                    }, a.createElement(V.w, {
                        ariaLabel: Object(_.d)("Popout", "ClipsManagerExpandedRow"),
                        type: V.y.Hollow,
                        linkTo: Object(A.a)(this.props.clip.url, {
                            tt_medium: "my_clips"
                        }),
                        icon: V._25.Popout
                    })))), a.createElement(V._8, {
                        padding: 1
                    }, a.createElement(V.Y, {
                        gutterSize: V.Z.None
                    }, a.createElement(V.L, {
                        cols: {
                            default: 12,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 5,
                            xl: 5
                        }
                    }, a.createElement(V._8, {
                        position: V._15.Relative
                    }, a.createElement(V.k, {
                        ratio: V.l.Aspect16x9
                    }, a.createElement("iframe", {
                        src: Object(A.a)(e.embedURL, {
                            autoplay: "false"
                        }),
                        frameBorder: 0,
                        width: "100%",
                        height: "100%",
                        scrolling: "no",
                        allowFullScreen: !0
                    })))), a.createElement(V.L, {
                        cols: {
                            default: 12,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 7,
                            xl: 7
                        }
                    }, a.createElement(V._8, {
                        display: V.R.Flex,
                        justifyContent: V._7.Center
                    }, a.createElement(V._8, {
                        flexGrow: 1,
                        padding: 1
                    }, this.renderTitle())), a.createElement(V._35, {
                        background: V.n.Alt,
                        margin: 1,
                        padding: 1,
                        border: !0
                    }, a.createElement(V.Y, null, a.createElement(V.L, {
                        cols: {
                            default: 4
                        }
                    }, a.createElement(V._8, {
                        padding: {
                            y: .5
                        }
                    }, a.createElement(V.Q, {
                        bold: !0
                    }, Object(_.d)("Created On", "ClipsManagerExpandedRow")), a.createElement(V.Q, {
                        ellipsis: !0,
                        transform: V._48.Capitalize,
                        title: t
                    }, t))), a.createElement(V.L, {
                        cols: {
                            default: 4
                        }
                    }, a.createElement(V._8, {
                        padding: {
                            y: .5
                        }
                    }, a.createElement(V.Q, {
                        bold: !0
                    }, Object(_.d)("Clip Length", "ClipsManagerExpandedRow")), a.createElement(V.Q, {
                        ellipsis: !0
                    }, Object(_.d)("{seconds, number}s", {
                        seconds: this.props.clip.durationSeconds
                    }, "ClipsManagerExpandedRow")))), a.createElement(V.L, {
                        cols: {
                            default: 4
                        }
                    }, a.createElement(V._8, {
                        padding: {
                            y: .5
                        }
                    }, a.createElement(V.Q, {
                        bold: !0
                    }, Object(_.d)("Views", "ClipsManagerExpandedRow")), a.createElement(V._8, {
                        display: V.R.Flex,
                        alignItems: V.c.Center,
                        ellipsis: !0
                    }, a.createElement(V._24, {
                        asset: V._25.GlyphViews
                    }), a.createElement(V._8, {
                        padding: {
                            left: .5
                        }
                    }, Object(_.f)(e.viewCount, {
                        maximumFractionDigits: 1
                    }))))), a.createElement(V.L, {
                        cols: {
                            default: 4
                        }
                    }, e.broadcaster && a.createElement(V._8, {
                        padding: {
                            y: .5
                        }
                    }, a.createElement(V.Q, {
                        bold: !0
                    }, Object(_.d)("Channel", "ClipsManagerExpandedRow")), a.createElement(V.Q, {
                        ellipsis: !0
                    }, a.createElement(M.a, {
                        "data-test-selector": W.CHANNEL_LINK,
                        to: "/" + e.broadcaster.login + "/clips",
                        title: e.broadcaster.displayName || ""
                    }, e.broadcaster.displayName)))), a.createElement(V.L, {
                        cols: {
                            default: 4
                        }
                    }, a.createElement(V._8, {
                        padding: {
                            y: .5
                        }
                    }, a.createElement(V.Q, {
                        bold: !0
                    }, Object(_.d)("Game", "ClipsManagerExpandedRow")), a.createElement(V.Q, {
                        ellipsis: !0
                    }, this.renderGameLink(e)))))))))))
                }, t
            }(a.Component),
            z = Object(v.d)("ClipsManagerExpandedRow")(Object(w.a)(K)(q));
        var $ = Object(b.b)(null, function(e) {
                return Object(C.b)({
                    showModal: R.d,
                    closeModal: R.c
                }, e)
            })(z),
            Y = n("6BvN"),
            J = n("MAZT"),
            X = n("uTyw");
        var Z = n("Qfvd");
        n("uHjT");
        var ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderCardContent = function() {
                        var e, n = t.props.searchResult;
                        return function(e) {
                            var t = e;
                            return void 0 !== t.title && void 0 !== t.popularity
                        }(n) ? a.createElement(V.C, {
                            row: !0
                        }, a.createElement(V.E, {
                            size: V.F.Size3,
                            aspect: V.l.Aspect3x4,
                            src: (e = n.title, Z.a + "/" + e + "-" + Z.b + ".jpg"),
                            alt: n.thumbnailAltText
                        }), a.createElement(V.D, {
                            overflow: V._11.Hidden
                        }, a.createElement(V._8, {
                            padding: {
                                left: 1
                            }
                        }, a.createElement(V.Q, {
                            type: V._49.H5
                        }, n.title), a.createElement(V.Q, {
                            className: "clmgr-result__subtitle",
                            ellipsis: !0
                        }, Object(_.d)("{numViewers, number} viewers", {
                            numViewers: n.popularity
                        }, "ClipsManagerSearch"))))) : function(e) {
                            return void 0 !== e.followers
                        }(n) ? a.createElement(V.C, {
                            row: !0
                        }, a.createElement(V.E, {
                            size: V.F.Size3,
                            aspect: V.l.Aspect1x1,
                            src: n.thumbnail,
                            alt: n.thumbnailAltText
                        }), a.createElement(V.D, {
                            overflow: V._11.Hidden
                        }, a.createElement(V._8, {
                            padding: {
                                left: 1
                            }
                        }, a.createElement(V.Q, {
                            type: V._49.H5
                        }, n.name), a.createElement(V.Q, {
                            className: "clmgr-result__subtitle",
                            ellipsis: !0
                        }, Object(_.d)("{numFollowers, number} followers", {
                            numFollowers: n.followers
                        }, "ClipsManagerSearch"))))) : void 0
                    }, t.onMouseEnter = function() {
                        t.props.onResultHover(t.props.index)
                    }, t.onClick = function() {
                        t.props.onResultSelect(t.props.index)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(V._6, {
                        onClick: this.onClick
                    }, a.createElement(V._2, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, a.createElement("div", {
                        onMouseEnter: this.onMouseEnter,
                        onKeyDown: this.props.onKeyDown,
                        "data-ref-index": this.props.index,
                        ref: this.props.refDelegate,
                        tabIndex: -1,
                        className: "clmgr-result"
                    }, this.renderCardContent())))
                }, t
            }(a.Component),
            te = {
                NO_RESULTS: "cmgr-no-search-results",
                RESULTS_MENU: "cmgr-search-results-menu",
                SEARCH_INPUT: "cmgr-search-input",
                CHANNEL_SEARCH: "cmgr-channel-search",
                GAME_SEARCH: "cmgr-game-search"
            },
            ne = 5,
            ie = {
                currentCategory: T.a.Games,
                gameResults: [],
                userResults: [],
                isShowingResults: !1,
                isLoading: !1,
                searchTerm: "",
                focusedIndex: null
            },
            re = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderSearchOptions = function() {
                        var e = [a.createElement(V._36, {
                            active: n.state.currentCategory === T.a.Games,
                            onClick: n.setSearchTypeGame,
                            key: te.GAME_SEARCH,
                            "data-test-selector": te.GAME_SEARCH
                        }, Object(_.d)("Game Search", "ClipsManagerSearch"))];
                        return n.props.userRole !== m.Broadcaster && e.push(a.createElement(V._36, {
                            active: n.state.currentCategory === T.a.Users,
                            onClick: n.setSearchTypeChannel,
                            key: te.CHANNEL_SEARCH,
                            "data-test-selector": te.CHANNEL_SEARCH
                        }, Object(_.d)("Channel Search", "ClipsManagerSearch"))), a.createElement(V._37, null, e)
                    }, n.renderSearchResults = function() {
                        if (n.state.isLoading) return a.createElement(V._10, null);
                        var e = n.state.currentCategory;
                        if (e === T.a.Users) {
                            var t = n.state.userResults;
                            return 0 === t.length ? n.renderNoResults() : t.map(function(e, t) {
                                return a.createElement(ee, {
                                    key: e.id + "_" + t,
                                    searchResult: e,
                                    index: t,
                                    onResultHover: n.focusResult,
                                    onResultSelect: n.selectResult,
                                    refDelegate: n.setSearchResultRefs,
                                    onKeyDown: n.onKeyDown
                                })
                            })
                        }
                        if (e === T.a.Games) {
                            var i = n.state.gameResults;
                            return 0 === i.length ? n.renderNoResults() : i.map(function(e, t) {
                                return a.createElement(ee, {
                                    key: e.id + "_" + t,
                                    searchResult: e,
                                    index: t,
                                    onResultHover: n.focusResult,
                                    onResultSelect: n.selectResult,
                                    refDelegate: n.setSearchResultRefs,
                                    onKeyDown: n.onKeyDown
                                })
                            })
                        }
                    }, n.renderNoResults = function() {
                        return a.createElement(V._8, {
                            "data-test-selector": te.NO_RESULTS,
                            display: V.R.Flex,
                            flexDirection: V.T.Column
                        }, a.createElement(V._35, {
                            textAlign: V._45.Center,
                            padding: {
                                y: 5
                            }
                        }, a.createElement(V._24, {
                            asset: V._25.NavSearch,
                            height: 36,
                            width: 36,
                            type: V._26.Brand
                        }), a.createElement(V.Q, {
                            type: V._49.H4
                        }, Object(_.d)("No results found", "ClipsManagerSearch")), a.createElement(V.Q, {
                            type: V._49.P,
                            color: V.K.Alt
                        }, Object(_.d)("They're probably in another castle", "ClipsManagerSearch"))))
                    }, n.setSearchResultRefs = function(e) {
                        if (null !== e) {
                            var t = e.dataset.refIndex;
                            if (t) {
                                var i = parseInt(t, 0);
                                n.searchResultRefs[i] = e
                            }
                        }
                    }, n.setSearchTypeGame = function() {
                        n.setState(r.__assign({}, ie, {
                            currentCategory: T.a.Games
                        })), n.context.setSearchType(T.a.Games)
                    }, n.setSearchTypeChannel = function() {
                        n.setState(r.__assign({}, ie, {
                            currentCategory: T.a.Users
                        })), n.context.setSearchType(T.a.Users)
                    }, n.onChange = function(e) {
                        n.setState({
                            searchTerm: e.currentTarget.value,
                            isLoading: !0
                        }, function() {
                            "" === n.state.searchTerm && n.context.clearSearch(), n.performQuery()
                        })
                    }, n.onFocus = function() {
                        n.setState({
                            isLoading: !0,
                            isShowingResults: !0
                        }), n.performQuery()
                    }, n.onKeyDown = function(e) {
                        switch (e.keyCode) {
                            case Y.a.Esc:
                                return e.preventDefault(), void("" !== n.state.searchTerm ? (n.setState({
                                    searchTerm: "",
                                    focusedIndex: null
                                }, function() {
                                    n.performQuery(), n.focusSearchInput()
                                }), n.context.clearSearch()) : n.setState({
                                    isShowingResults: !1,
                                    focusedIndex: null
                                }, function() {
                                    n.focusSearchInput()
                                }));
                            case Y.a.Up:
                                return void n.focusNext(!1);
                            case Y.a.Down:
                                return void n.focusNext(!0);
                            case Y.a.Enter:
                                return void(null !== n.state.focusedIndex && n.selectResult(n.state.focusedIndex));
                            default:
                                return n.setState({
                                    focusedIndex: null
                                }), void n.focusSearchInput()
                        }
                    }, n.focusNext = function(e) {
                        void 0 === e && (e = !0);
                        var t = n.getResultsLength();
                        0 !== t && n.setState(function(n) {
                            var i = n.focusedIndex;
                            return {
                                focusedIndex: null === i ? e ? 0 : t - 1 : e ? i + 1 >= t ? 0 : i + 1 : i - 1 < 0 ? t - 1 : i - 1,
                                isShowingResults: !0
                            }
                        })
                    }, n.focusResult = function(e) {
                        n.setState({
                            focusedIndex: e
                        })
                    }, n.focusResultRef = function(e) {
                        var t = n.searchResultRefs[e];
                        t && t.focus()
                    }, n.blurResultRef = function(e) {
                        var t = n.searchResultRefs[e];
                        t && t.blur()
                    }, n.focusSearchInput = function() {
                        n.searchInputRef && n.searchInputRef.focus()
                    }, n.selectResult = function(e) {
                        var t, i = n.state,
                            r = i.currentCategory,
                            a = i.gameResults,
                            s = i.userResults;
                        if (r === T.a.Games) t = a[e].title, n.context.setSearchTerm(t);
                        else {
                            var l = s[e];
                            t = l.name, n.context.setSearchTerm(l.id)
                        }
                        n.focusSearchInput(), n.setState({
                            focusedIndex: null,
                            searchTerm: t,
                            isShowingResults: !1
                        })
                    }, n.hideResults = function() {
                        n.setState({
                            isShowingResults: !1
                        })
                    }, n.getResultsLength = function() {
                        return n.state.currentCategory === T.a.Games ? n.state.gameResults.length : n.state.userResults.length
                    }, n.performQuery = function() {
                        var e = n.state,
                            t = e.isLoading,
                            i = e.searchTerm,
                            r = e.currentCategory;
                        t && n.setState({
                            isLoading: !0,
                            isShowingResults: !0
                        }), n.searchClient.queryForType(r, i, "", {
                            hitsPerPage: ne
                        }).then(function(e) {
                            if (e) {
                                var t = Object(X.b)({
                                    searchResults: e
                                });
                                n.setState({
                                    gameResults: t.currentGameResults ? t.currentGameResults.results : [],
                                    userResults: t.currentUserResults ? t.currentUserResults.results : [],
                                    isLoading: !1
                                })
                            } else n.setState({
                                gameResults: [],
                                userResults: [],
                                isLoading: !1
                            })
                        })
                    }, n.setSearchInputRef = function(e) {
                        n.searchInputRef = e
                    }, n.searchClient = new J.a({
                        appId: _.a.algoliaApplicationID,
                        apiKey: _.a.algoliaAPIKey,
                        apolloClient: _.o.apollo.client,
                        logger: _.j,
                        config: _.a
                    }), n.state = ie, n.searchResultRefs = [], n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.userRole !== this.props.userRole && this.setState({
                        searchTerm: "",
                        isShowingResults: !1
                    })
                }, t.prototype.componentDidUpdate = function(e, t) {
                    var n = this.state.focusedIndex,
                        i = t.focusedIndex;
                    null !== i && null === n ? this.blurResultRef(i) : null !== n && i !== n && this.focusResultRef(n)
                }, t.prototype.render = function() {
                    return a.createElement(V._8, {
                        position: V._15.Relative
                    }, a.createElement(V._8, {
                        margin: {
                            bottom: 1
                        }
                    }, this.renderSearchOptions()), a.createElement(I.a, {
                        onClickOut: this.hideResults
                    }, a.createElement(V._27, {
                        id: te.SEARCH_INPUT,
                        refDelegate: this.setSearchInputRef,
                        onChange: this.onChange,
                        onFocus: this.onFocus,
                        onKeyDown: this.onKeyDown,
                        value: this.state.searchTerm,
                        placeholder: this.state.currentCategory === T.a.Games ? Object(_.d)("Enter a Game", "ClipsManagerSearch") : Object(_.d)("Enter a Channel", "ClipsManagerSearch")
                    }), a.createElement(V.q, {
                        "data-test-selector": te.RESULTS_MENU,
                        direction: V.r.Bottom,
                        noTail: !0,
                        size: V.s.Large,
                        show: this.state.isShowingResults
                    }, this.renderSearchResults())))
                }, t.contextTypes = {
                    setSearchTerm: y.func,
                    setSearchType: y.func,
                    clearSearch: y.func
                }, t
            }(a.Component),
            ae = Object(v.d)("ClipsManagerSearch")(re),
            se = (n("3NJ6"), "cmgr-my-clips-radio"),
            le = "cmgr-clips-of-me-radio",
            oe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setCuratorRole = function() {
                        t.props.updateUserRole(m.Curator)
                    }, t.setBroadcasterRole = function() {
                        t.props.updateUserRole(m.Broadcaster)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(V._8, {
                        className: "clmgr-filters-container"
                    }, a.createElement(V.Y, {
                        gutterSize: V.Z.None
                    }, a.createElement(V.L, {
                        cols: {
                            default: 12,
                            xs: 6,
                            sm: 6,
                            md: 12,
                            lg: 12
                        }
                    }, a.createElement(V._8, {
                        margin: {
                            bottom: .5
                        }
                    }, a.createElement(V._8, {
                        margin: {
                            bottom: .5
                        }
                    }, a.createElement(V.Q, {
                        fontSize: V.V.Size5
                    }, Object(_.d)("List View", "ClipsManagerTable"))), a.createElement(V._8, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(V._8, {
                        margin: {
                            bottom: .5
                        }
                    }, a.createElement(V._21, {
                        "data-test-selector": se,
                        "data-a-target": se,
                        label: Object(_.d)("Clips I've Created", "ClipsManagerTable"),
                        name: "MyClips",
                        checked: this.props.currentUserRole === m.Curator,
                        onChange: this.setCuratorRole
                    })), a.createElement(V._8, null, a.createElement(V._21, {
                        "data-test-selector": le,
                        "data-a-target": le,
                        label: Object(_.d)("Clips of My Channel", "ClipsManagerTable"),
                        name: "ClipsOfMyChannel",
                        checked: this.props.currentUserRole === m.Broadcaster,
                        onChange: this.setBroadcasterRole
                    }))))), a.createElement(V.L, {
                        cols: {
                            default: 12,
                            xs: 6,
                            sm: 6,
                            md: 12,
                            lg: 12
                        }
                    }, a.createElement(ae, {
                        userRole: this.props.currentUserRole
                    }))))
                }, t
            }(a.Component),
            ce = Object(v.d)("ClipsManagerRightColumn")(oe),
            de = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleImageError = function() {
                        n.setState({
                            imageURL: _.a.defaultStreamPreviewURL
                        })
                    }, n.state = {
                        imageURL: t.imageURL
                    }, n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement("img", {
                        src: this.state.imageURL,
                        alt: this.state.imageURL,
                        onError: this.handleImageError,
                        className: this.props.className
                    })
                }, t
            }(a.Component),
            ue = (n("1f48"), "clips-manager-row-checkbox"),
            pe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.selectClip = function() {
                        var e = !t.props.isSelected;
                        t.props.onSelectClip(t.props.clip.slug, e)
                    }, t.onRowClick = function(e) {
                        var n = e.target;
                        null !== t.checkboxRef && n === t.checkboxRef || n.parentElement && n.parentElement.dataset.testSelector === ue || t.props.onRowClick(t.props.clip)
                    }, t.setCheckboxRef = function(e) {
                        t.checkboxRef = e
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.clip,
                        t = Object(_.h)(new Date(e.createdAt));
                    return a.createElement(V._8, {
                        "data-a-target": "clips-manager-table-row-container",
                        className: "clmgr-table__row",
                        display: V.R.Flex,
                        overflow: V._11.Hidden,
                        alignItems: V.c.Center
                    }, a.createElement("div", {
                        onClick: this.onRowClick,
                        style: {
                            cursor: "pointer",
                            width: "100%"
                        }
                    }, a.createElement(V.Y, {
                        "data-target": this.props.dataTarget
                    }, a.createElement(V.L, {
                        cols: 4
                    }, a.createElement(V._8, {
                        display: V.R.Flex,
                        flexWrap: V.U.NoWrap,
                        alignItems: V.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, a.createElement(V._8, {
                        flexShrink: 0,
                        position: V._15.Relative
                    }, a.createElement(V._35, {
                        className: "clmgr-checkbox-bg",
                        background: V.n.Base,
                        position: V._15.Absolute
                    }), a.createElement(V.J, {
                        refDelegate: this.setCheckboxRef,
                        "data-test-selector": ue,
                        label: " ",
                        checked: this.props.isSelected,
                        onChange: this.selectClip
                    })), a.createElement(V._2, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, a.createElement(de, {
                        imageURL: this.props.clip.thumbnailURL,
                        className: "clmgr-thumb"
                    })), a.createElement(V.Q, {
                        type: V._49.H5,
                        title: e.title,
                        ellipsis: !0
                    }, e.title))), a.createElement(V.L, {
                        cols: 2
                    }, e.broadcaster && a.createElement(V._8, {
                        display: V.R.Flex,
                        alignItems: V.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, a.createElement(V._2, {
                        ellipsis: !0
                    }, a.createElement(M.a, {
                        to: "/" + e.broadcaster.login + "/clips",
                        title: e.broadcaster.displayName || ""
                    }, e.broadcaster.displayName)))), a.createElement(V.L, {
                        cols: 2
                    }, a.createElement(V._8, {
                        display: V.R.Flex,
                        alignItems: V.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, this.renderGameLink(e))), a.createElement(V.L, {
                        cols: 2
                    }, a.createElement(V._8, {
                        display: V.R.Flex,
                        alignItems: V.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, a.createElement(V.Q, {
                        "data-test-selector": "clips-manager-row-time-created",
                        "data-a-target": "clips-manager-row-time-created",
                        title: t,
                        transform: V._48.Capitalize,
                        ellipsis: !0
                    }, t))), a.createElement(V.L, {
                        cols: 2
                    }, a.createElement(V._8, {
                        display: V.R.Flex,
                        alignItems: V.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, a.createElement(V._8, {
                        display: V.R.Flex,
                        alignItems: V.c.Center,
                        margin: {
                            right: .5
                        }
                    }, a.createElement(V._24, {
                        asset: V._25.GlyphViews
                    })), a.createElement(V.Q, {
                        "data-test-selector": "clips-manager-row-view-count",
                        "data-a-target": "clips-manager-row-view-count"
                    }, Object(_.f)(e.viewCount, {
                        maximumFractionDigits: 1
                    })))))))
                }, t.prototype.renderGameLink = function(e) {
                    return e.game ? a.createElement(V._2, {
                        ellipsis: !0
                    }, a.createElement(M.a, {
                        to: Object(F.c)(e.game.name),
                        title: e.game.name
                    }, e.game.name)) : null
                }, t
            }(a.Component),
            me = (n("EDaX"), "clips-manager-select-all"),
            ge = "clips-manager-batch-delete",
            he = "clips-manager-views-sort",
            fe = "clips-manager-createdat-sort",
            ve = "clips-manager-empty-body",
            be = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.expandClipRow = function(e) {
                        n.setState({
                            expandedSlug: e.slug
                        })
                    }, n.closeExpandedRow = function() {
                        n.setState({
                            expandedSlug: null
                        })
                    }, n.loadMore = function() {
                        return r.__awaiter(n, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                return this.props.loading || this.props.error || !this.props.clips ? [2] : [2, this.props.loadMore().then(function() {})]
                            })
                        })
                    }, n.selectClip = function(e, t) {
                        void 0 === t && (t = !0), n.setState(function(n) {
                            var i = n.selectedClipSlugs;
                            if (t) i = i.concat([e]);
                            else {
                                var r = i.indexOf(e);
                                i = i.filter(function(e, t) {
                                    return t !== r
                                })
                            }
                            return {
                                selectedClipSlugs: i
                            }
                        })
                    }, n.toggleViewsSort = function() {
                        n.props.sort === i.ViewsDescending ? n.props.updateSort(i.ViewsAscending) : n.props.updateSort(i.ViewsDescending)
                    }, n.toggleCreatedAtSort = function() {
                        n.props.sort === i.CreatedAtDescending ? n.props.updateSort(i.CreatedAtAscending) : n.props.updateSort(i.CreatedAtDescending)
                    }, n.deleteSelectedClips = function() {
                        n.props.onBatchDeleteClips(n.state.selectedClipSlugs), n.setState({
                            selectedClipSlugs: []
                        })
                    }, n.deleteClip = function(e) {
                        n.props.onDeleteClip(e), n.selectClip(e, !1)
                    }, n.deleteAllClips = function(e) {
                        n.props.onDeleteAllClips(e)
                    }, n.toggleClipsSelection = function() {
                        var e = n.props.clips;
                        n.state.selectedClipSlugs.length === e.length ? n.clearClipsSelection() : n.setState({
                            selectedClipSlugs: e.map(function(e) {
                                return e.slug
                            })
                        })
                    }, n.clearClipsSelection = function() {
                        n.setState({
                            selectedClipSlugs: []
                        })
                    }, n.renderDeleteClipModal = function(e) {
                        n.props.showModal(D.d, {
                            slug: e,
                            onClose: n.props.closeModal,
                            onDelete: n.props.onDeleteClip
                        })
                    }, n.renderBatchDeleteModal = function() {
                        1 === n.state.selectedClipSlugs.length ? n.renderDeleteClipModal(n.state.selectedClipSlugs[0]) : n.props.showModal(D.c, {
                            clipSlugs: n.state.selectedClipSlugs,
                            onClose: n.props.closeModal,
                            onBatchDelete: n.deleteSelectedClips
                        })
                    }, n.reportInteractive = function() {
                        !n.props.loading && n.props.userID && n.props.latencyTracking.reportInteractive()
                    }, n.state = {
                        selectedClipSlugs: [],
                        expandedSlug: null,
                        isNewQueryLoading: !1
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.loading && ((e.sort !== this.props.sort || e.userRole !== this.props.userRole || e.searchFilterType !== this.props.searchFilterType || e.searchFilterTerm !== this.props.searchFilterTerm) && (this.clearClipsSelection(), this.setState({
                        isNewQueryLoading: !0
                    })));
                    this.state.isNewQueryLoading && !e.loading && this.setState({
                        isNewQueryLoading: !1
                    })
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.error || !this.props.userID ? null : a.createElement(V._8, {
                        className: "clmgr-body-wrap",
                        display: V.R.Flex,
                        flexWrap: V.U.NoWrap,
                        flexDirection: V.T.ColumnReverse,
                        breakpointMedium: {
                            flexDirection: V.T.Row
                        }
                    }, a.createElement(V._8, {
                        className: "clmgr-table-wrap",
                        display: V.R.Flex,
                        flexGrow: 1,
                        flexWrap: V.U.Wrap,
                        position: V._15.Relative
                    }, a.createElement(V._35, {
                        background: V.n.Base,
                        border: !0,
                        elevation: 3,
                        margin: {
                            bottom: .5
                        },
                        fullWidth: !0
                    }, this.renderHeaderRow()), a.createElement(V._35, {
                        fullWidth: !0,
                        fullHeight: !0
                    }, a.createElement(O.b, null, a.createElement(V._35, {
                        background: V.n.Base,
                        elevation: 2,
                        border: !0
                    }, this.props.clips.length > 0 && !this.state.isNewQueryLoading && this.props.clips.map(function(t) {
                        return e.renderClipRow(t)
                    }), this.state.isNewQueryLoading && this.props.loading && a.createElement(V._8, {
                        display: V.R.Flex,
                        alignItems: V.c.Center,
                        justifyContent: V._7.Center,
                        padding: 1,
                        fullWidth: !0
                    }, a.createElement(V._10, {
                        delay: 0
                    })), 0 === this.props.clips.length && !this.props.loading && a.createElement(V._8, {
                        display: V.R.Flex,
                        justifyContent: V._7.Center,
                        textAlign: V._45.Center,
                        padding: 2,
                        fullWidth: !0,
                        fullHeight: !0
                    }, a.createElement(V.Q, {
                        type: V._49.H4,
                        color: V.K.Alt2,
                        "data-test-selector": ve
                    }, Object(_.d)("Create Clips to fill this space with the most memorable moments from your favorite Twitch streams and videos. Just hit the Clip button on the video player to try it out. {learnHowLink} to use Clips.", {
                        learnHowLink: a.createElement("a", {
                            target: "_blank",
                            rel: "noopener",
                            href: "https://help.twitch.tv/customer/portal/articles/2442508-how-to-use-clips"
                        }, Object(_.d)("Learn how", "ClipsManagerTable"))
                    }, "ClipsManagerTable"))), a.createElement(O.a, {
                        loadMore: this.loadMore,
                        enabled: !this.props.loading && this.props.hasNextPage
                    }), this.props.loading && !this.state.isNewQueryLoading && a.createElement(V._8, {
                        display: V.R.Flex,
                        alignItems: V.c.Center,
                        justifyContent: V._7.Center,
                        padding: 1,
                        fullWidth: !0
                    }, a.createElement(V._10, {
                        delay: 0
                    })))))), a.createElement(V._8, {
                        breakpointMedium: {
                            margin: {
                                left: 2
                            }
                        },
                        flexShrink: 0
                    }, a.createElement(ce, {
                        updateUserRole: this.props.updateUserRole,
                        currentUserRole: this.props.userRole
                    })))
                }, t.prototype.renderHeaderRow = function() {
                    var e = this.state.selectedClipSlugs.length > 0,
                        t = e && this.state.selectedClipSlugs.length === this.props.clips.length,
                        n = a.createElement(V.J, {
                            "data-test-selector": me,
                            label: " ",
                            checked: t,
                            onChange: this.toggleClipsSelection,
                            disabled: this.state.isNewQueryLoading && this.props.loading
                        });
                    if (e) return a.createElement(V.Y, null, a.createElement(V.L, {
                        cols: 12
                    }, a.createElement(V._8, {
                        display: V.R.Flex,
                        alignItems: V.c.Center,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        fullHeight: !0
                    }, a.createElement(V._8, {
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, n), a.createElement(V._8, {
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, a.createElement(V.Q, null, Object(_.d)("{numClips, number} selected", {
                        numClips: this.state.selectedClipSlugs.length
                    }, "ClipsManagerTable"))), a.createElement(V._8, {
                        flexShrink: 0,
                        alignItems: V.c.Center,
                        fullHeight: !0
                    }, a.createElement(V.w, {
                        ariaLabel: Object(_.d)("Delete Clip", "ClipsManagerTable"),
                        icon: V._25.Trash,
                        onClick: this.renderBatchDeleteModal,
                        "data-test-selector": ge
                    })))));
                    var r = this.props.sort,
                        s = r === i.ViewsAscending || r === i.ViewsDescending,
                        l = r === i.CreatedAtAscending || r === i.CreatedAtDescending,
                        o = Object(_.d)("Created", "ClipsManagerTable"),
                        c = Object(_.d)("Views", "ClipsManagerTable");
                    return a.createElement(V.Y, null, a.createElement(V.L, {
                        cols: 4
                    }, a.createElement(V._8, {
                        display: V.R.Flex,
                        alignItems: V.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, a.createElement(V._8, {
                        display: V.R.Flex,
                        alignItems: V.c.Center,
                        margin: {
                            right: 1
                        }
                    }, n), a.createElement(V.Q, null, Object(_.d)("Info", "ClipsManagerTable")))), a.createElement(V.L, {
                        cols: 2
                    }, a.createElement(V._8, {
                        padding: 1
                    }, Object(_.d)("Channel", "ClipsManagerTable"))), a.createElement(V.L, {
                        cols: 2
                    }, a.createElement(V._8, {
                        padding: 1
                    }, Object(_.d)("Game", "ClipsManagerTable"))), a.createElement(V.L, {
                        cols: 2
                    }, a.createElement(V._8, {
                        padding: {
                            y: .5,
                            right: 1
                        },
                        display: V.R.Flex,
                        fullHeight: !0
                    }, a.createElement(V._6, {
                        alpha: !0,
                        onClick: this.toggleCreatedAtSort,
                        "data-test-selector": fe,
                        "data-a-target": fe
                    }, a.createElement(V._8, {
                        display: V.R.Flex,
                        flexWrap: V.U.NoWrap,
                        alignContent: V.b.Center,
                        justifyContent: V._7.Between,
                        padding: {
                            x: 1
                        }
                    }, a.createElement(V.Q, {
                        color: V.K.Link,
                        title: o,
                        bold: !0,
                        ellipsis: !0
                    }, o), l && a.createElement(V._24, {
                        asset: r === i.CreatedAtDescending ? V._25.GlyphArrDown : V._25.GlyphArrUp,
                        type: V._26.Brand
                    }))))), a.createElement(V.L, {
                        cols: 2
                    }, a.createElement(V._8, {
                        padding: {
                            y: .5,
                            right: 1
                        },
                        display: V.R.Flex,
                        fullHeight: !0
                    }, a.createElement(V._6, {
                        alpha: !0,
                        onClick: this.toggleViewsSort,
                        "data-test-selector": he,
                        "data-a-target": he
                    }, a.createElement(V._8, {
                        display: V.R.Flex,
                        flexWrap: V.U.NoWrap,
                        alignContent: V.b.Center,
                        justifyContent: V._7.Between,
                        padding: {
                            x: 1
                        }
                    }, a.createElement(V.Q, {
                        color: V.K.Link,
                        title: c,
                        bold: !0,
                        ellipsis: !0
                    }, c), s && a.createElement(V._24, {
                        asset: r === i.ViewsDescending ? V._25.GlyphArrDown : V._25.GlyphArrUp,
                        type: V._26.Brand
                    }))))))
                }, t.prototype.renderClipRow = function(e) {
                    var t = this.state.selectedClipSlugs.includes(e.slug);
                    if (e.slug === this.state.expandedSlug) {
                        var n = this.props.userRole === m.Curator ? x.a.MyClips : x.a.ClipsOfMyChannel;
                        return a.createElement($, {
                            key: e.slug,
                            dataTarget: "clips-manager-table-row",
                            clip: e,
                            onClose: this.closeExpandedRow,
                            onDelete: this.deleteClip,
                            onDeleteAll: this.deleteAllClips,
                            pageType: n
                        })
                    }
                    return a.createElement(pe, {
                        key: e.slug,
                        dataTarget: "clips-manager-table-row",
                        clip: e,
                        isSelected: t,
                        onSelectClip: this.selectClip,
                        onRowClick: this.expandClipRow
                    })
                }, t
            }(a.Component),
            Ce = n("zlRb");
        var ke = Object(s.compose)(Object(v.d)("ClipsManagerTable"), Object(w.a)(Ce, {
                options: function(e) {
                    var t = {
                        sort: p[e.sort],
                        period: f[u.All]
                    };
                    return e.userRole === m.Broadcaster ? t.broadcasterID = e.channelID : t.curatorID = e.channelID, e.searchFilterTerm && (e.searchFilterType === T.a.Users && e.userRole !== m.Broadcaster ? t.broadcasterID = e.searchFilterTerm : t.gameName = e.searchFilterTerm), {
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
                        i = !1;
                    return e.data.user && e.data.user.clips && (n = e.data.user.id, t = e.data.user.clips.edges.map(function(e) {
                        return e.node
                    }), i = e.data.user.clips.pageInfo.hasNextPage), {
                        userID: n,
                        clips: t,
                        loading: e.data.loading,
                        hasNextPage: i,
                        error: e.data.error,
                        loadMore: function() {
                            var t = e.data.user.clips.edges,
                                n = t[t.length - 1].cursor;
                            return e.data.fetchMore({
                                variables: r.__assign({}, e.data.variables, {
                                    cursor: n
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult,
                                        i = e.user.clips.edges,
                                        a = n.user.clips.edges;
                                    return {
                                        user: r.__assign({}, n.user, {
                                            clips: r.__assign({}, n.user.clips, {
                                                edges: Object(N.c)(i, a)
                                            })
                                        })
                                    }
                                }
                            })
                        },
                        onDeleteClip: function(t) {
                            Object(N.e)(Ce, e.data.variables, function(e) {
                                var n = e.user.clips.edges;
                                return e.user.clips.edges = n.filter(function(e) {
                                    return e.node.slug !== t
                                }), e
                            })
                        },
                        onDeleteAllClips: function(t) {
                            Object(N.e)(Ce, e.data.variables, function(e) {
                                var n = e.user.clips.edges;
                                return e.user.clips.edges = n.filter(function(e) {
                                    var n = e.node.slug;
                                    return !t.some(function(e) {
                                        return e === n
                                    })
                                }), e
                            })
                        },
                        onBatchDeleteClips: function(t) {
                            Object(N.e)(Ce, e.data.variables, function(e) {
                                var n = e.user.clips.edges;
                                return e.user.clips.edges = n.filter(function(e) {
                                    var n = e.node.slug;
                                    return !t.includes(n)
                                }), e
                            })
                        }
                    }
                }
            }), Object(b.b)(null, function(e) {
                return Object(C.b)({
                    showModal: R.d,
                    closeModal: R.c
                }, e)
            }))(be),
            Se = n("tYdz"),
            Ee = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
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
                        sortOption: i.CreatedAtDescending,
                        searchType: T.a.Games,
                        searchTerm: null
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.props.isLoggedIn || this.props.login()
                }, t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.loading || this.props.data.error || !this.props.data.currentUser ? null : a.createElement(V._8, {
                        className: "scroll-y",
                        padding: {
                            x: 3,
                            top: 3
                        },
                        fullHeight: !0
                    }, a.createElement(V._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(V.Q, {
                        type: V._49.H1,
                        fontSize: V.V.Size3
                    }, Object(_.d)("Clips", "ClipsManagerPage"))), a.createElement(ke, {
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
                    setSearchTerm: y.func,
                    setSearchType: y.func,
                    clearSearch: y.func
                }, t
            }(a.Component),
            ye = Object(s.compose)(Object(v.d)("ClipsManager"), Object(w.a)(Se), l.f)(Ee);
        var _e = Object(b.b)(function(e) {
            return {
                isLoggedIn: Object(E.d)(e)
            }
        }, function(e) {
            return Object(C.b)({
                login: function() {
                    return Object(S.f)(k.a.ClipsManager)
                }
            }, e)
        })(ye);

        function we(e, t) {
            return t === m.Curator ? "/" + e + "/manager/clips" : "/" + e + "/manager/clips/channel"
        }
        var Te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onRoleChange = function(e) {
                        e !== m.Broadcaster && t.props.history.push({
                            pathname: we(t.props.match.params.channelName, e)
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(_e, {
                        channelName: this.props.match.params.channelName,
                        role: m.Broadcaster,
                        onRoleChange: this.onRoleChange
                    })
                }, t
            }(a.Component),
            Ne = Object(s.compose)(Object(v.d)("ClipsOfMeManagerPage", {
                destination: c.a.ChannelClipsManager
            }), Object(o.a)({
                location: d.PageviewLocation.ChannelClipsManager,
                properties: {
                    is_live: !1
                }
            }), l.f)(Te),
            Re = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onRoleChange = function(e) {
                        e !== m.Curator && t.props.history.push({
                            pathname: we(t.props.match.params.channelName, e)
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(_e, {
                        channelName: this.props.match.params.channelName,
                        role: m.Curator,
                        onRoleChange: this.onRoleChange
                    })
                }, t
            }(a.Component),
            Oe = Object(s.compose)(Object(v.d)("MyClipsManagerPage", {
                autoReportInteractive: !0,
                destination: c.a.MyClipsManager
            }), Object(o.a)({
                location: d.PageviewLocation.MyClipsManager,
                properties: {
                    is_live: !1
                }
            }), l.f)(Re);
        n.d(t, "ChannelClipsManagerPage", function() {
            return Ne
        }), n.d(t, "MyClipsManagerPage", function() {
            return Oe
        })
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
    f6Cj: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return Object(i.a)(r, {
                u: e
            })
        }, t.c = function(e, t) {
            return Object(i.a)(a, {
                url: e,
                text: t
            })
        }, t.b = function(e, t) {
            return Object(i.a)(s, {
                url: e,
                title: t
            })
        }, t.d = function(e) {
            return Object(i.a)(l, {
                url: e
            })
        };
        var i = n("yDzg"),
            r = "https://www.facebook.com/sharer/sharer.php",
            a = "https://www.twitter.com/share",
            s = "https://www.reddit.com/submit",
            l = "https://vk.com/share.php"
    },
    iFCf: function(e, t) {
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
    isxN: function(e, t) {
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
                            value: "viewCount"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "language"
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
                            value: "durationSeconds"
                        },
                        arguments: [],
                        directives: []
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
            }],
            loc: {
                start: 0,
                end: 274
            }
        };
        n.loc.source = {
            body: "fragment clip on Clip {\nid\nslug\nurl\nembedURL\ntitle\nviewCount\nlanguage\ncurator {\nid\nlogin\ndisplayName\n}\ngame {\nid\nname\nboxArtURL(width: 52 height: 72)\n}\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\nthumbnailURL\ncreatedAt\ndurationSeconds\nchampBadge {\nid\n}\n}",
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
    sikP: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            s = n("rCmJ"),
            l = n("Odds"),
            o = (n("XITx"), {
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
                        return t.props.successContent ? r.createElement(l._35, {
                            "data-test-selector": o.SUCCESS_BODY,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: l.n.Alt,
                            fullWidth: !0
                        }, r.createElement(l.Q, {
                            type: l._49.Strong
                        }, t.props.successContent)) : null
                    }, t.renderError = function() {
                        return t.props.errorContent ? r.createElement(l._35, {
                            "data-test-selector": o.ERROR_BODY,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: l.n.Alt,
                            fullWidth: !0
                        }, r.createElement(l.Q, {
                            type: l._49.Strong,
                            color: l.K.Error
                        }, t.props.errorContent)) : null
                    }, t.onSubmit = function() {
                        t.props.onSubmit()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.successContent ? r.createElement(s.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(l._35, {
                        padding: 2,
                        background: l.n.Base,
                        className: "clip-modal"
                    }, this.renderSuccess(), r.createElement(l._8, {
                        display: l.R.Flex,
                        justifyContent: l._7.Center
                    }, r.createElement(l._8, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(l.v, {
                        "data-test-selector": o.CANCEL_BUTTON,
                        onClick: this.props.onClose
                    }, Object(a.d)("Close", "ClipsModal")))))) : r.createElement(s.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(l._35, {
                        padding: 2,
                        background: l.n.Base,
                        className: "clip-modal"
                    }, r.createElement(l._35, {
                        "data-test-selector": o.TITLE,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 1
                        }
                    }, this.props.title), r.createElement(l._35, {
                        "data-test-selector": o.MAIN_BODY,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, this.renderError(), this.props.body), r.createElement(l._8, {
                        display: l.R.Flex,
                        justifyContent: l._7.Center
                    }, r.createElement(l._8, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(l.v, {
                        "data-test-selector": o.CANCEL_BUTTON,
                        type: l.B.Text,
                        onClick: this.props.onClose
                    }, Object(a.d)("Cancel", "ClipsModal"))), r.createElement(l._8, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(l.v, {
                        "data-test-selector": o.SUBMIT_BUTTON,
                        type: this.props.buttonType ? this.props.buttonType : l.B.Default,
                        onClick: this.onSubmit,
                        disabled: this.props.submitDisabled
                    }, this.props.buttonContent), this.props.isLoading && r.createElement(l._10, {
                        delay: 0
                    })))))
                }, t
            }(r.Component),
            d = n("1OO3"),
            u = n("CSlQ"),
            p = 86400,
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        hasErrored: !1,
                        hasSucceeded: !1
                    }, t.renderTitle = function() {
                        return t.props.isTemporary ? r.createElement(l.Q, {
                            type: l._49.H5,
                            ellipsis: !0
                        }, Object(a.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : r.createElement(l.Q, {
                            type: l._49.H5,
                            ellipsis: !0
                        }, Object(a.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                    }, t.renderBodyText = function() {
                        return t.props.isTemporary ? r.createElement(l.Q, null, Object(a.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                            clipCreator: t.props.targetUser.displayName
                        }, "ClipsModalBanUser")) : r.createElement(l.Q, null, Object(a.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
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
                        buttonType: l.B.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure(),
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            g = Object(u.d)("ClipsModalBanUser")(Object(d.b)(function(e) {
                return {
                    channelID: e.broadcasterID
                }
            })(m)),
            h = n("7vx8"),
            f = n("wnjK");

        function v(e) {
            return Object(h.a)(f, e)
        }
        var b = n("LnKh"),
            C = (n("lTii"), this),
            k = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            S = function(e) {
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
                    }, n.state = k, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = [r.createElement(l.Q, {
                        key: "title",
                        type: l._49.H4
                    }, Object(a.d)("Delete This Clip", "ClipsModalDelete")), r.createElement(l._8, {
                        key: "message",
                        margin: {
                            top: 1
                        }
                    }, r.createElement(l.Q, {
                        type: l._49.P,
                        color: l.K.Alt2
                    }, Object(a.d)("This clip will be permanently deleted.", "ClipsModalDelete")))];
                    if (!this.props.data.clip) return null;
                    var t = null;
                    this.props.data.clip.curator && (t = r.createElement("span", null, " • ", Object(a.d)("Clipped by {curator}", {
                        curator: this.props.data.clip.curator.login
                    }, "ClipsModalDelete")));
                    var n = r.createElement(l._35, {
                        display: l.R.Flex,
                        flexWrap: l.U.NoWrap
                    }, r.createElement(l._8, {
                        className: "clips-modal-delete__thumb",
                        margin: {
                            right: 1
                        }
                    }, r.createElement(l.k, {
                        ratio: l.l.Aspect16x9
                    }, r.createElement("img", {
                        src: this.props.data.clip.thumbnailURL
                    }))), r.createElement(l._8, null, r.createElement(l.Q, {
                        type: l._49.H5
                    }, this.props.data.clip.title), r.createElement(l.Q, {
                        color: l.K.Alt2
                    }, Object(a.d)("{created, date, medium}", {
                        created: new Date(this.props.data.clip.createdAt)
                    }, "ClipsModalDelete"), t), r.createElement(l.Q, {
                        color: l.K.Alt2
                    }, Object(a.d)("{viewCount, number} views", {
                        viewCount: this.props.data.clip.viewCount
                    }, "ClipsModalDelete"))));
                    return r.createElement(c, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: n,
                        buttonContent: Object(a.d)("Delete", "ClipsModalDelete"),
                        buttonType: l.B.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        successContent: this.state.hasSucceeded ? Object(a.d)("Success!", "ClipsModalDelete") : null,
                        errorContent: this.state.hasErrored ? Object(a.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            E = Object(h.a)(b)(v({
                props: function(e) {
                    return {
                        deleteClip: function(t) {
                            return i.__awaiter(C, void 0, void 0, function() {
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
                                            throw n = i.sent(), a.j.error(n, "Failed to delete clip"), n;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(S)),
            y = n("3zLD"),
            _ = n("wqRA"),
            w = this,
            T = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            N = function(e) {
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
                    }, n.state = T, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = r.createElement(l.Q, {
                        type: l._49.P
                    }, Object(a.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                    return r.createElement(c, {
                        onSubmit: this.deleteAll,
                        onClose: this.props.onClose,
                        title: r.createElement(l.Q, {
                            type: l._49.H4
                        }, Object(a.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                        body: e,
                        buttonContent: Object(a.d)("Delete", "ClipsModalDeleteAll"),
                        buttonType: l.B.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure()
                    })
                }, t
            }(r.Component),
            R = Object(y.compose)(Object(u.d)("ClipsModalDeleteAll"), v({
                props: function(e) {
                    return {
                        deleteAllClips: function(t, n) {
                            return i.__awaiter(w, void 0, void 0, function() {
                                var r, s, l;
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
                                            return s = i.sent(), r = s.data, [3, 5];
                                        case 2:
                                            return t ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        broadcastID: t
                                                    }
                                                }
                                            })] : [3, 4];
                                        case 3:
                                            return s = i.sent(), r = s.data, [3, 5];
                                        case 4:
                                            throw new Error("Invalid broadcastID specified for deleteAllClips");
                                        case 5:
                                            return e.ownProps.onDeleteAll && e.ownProps.onDeleteAll(r.deleteClips.clips), [3, 7];
                                        case 6:
                                            throw l = i.sent(), a.j.error(l, "Failed to delete clips from VOD"), l;
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            }), Object(h.a)(_, {
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
            }))(N),
            O = this,
            D = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            x = function(e) {
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
                    }, n.state = D, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = r.createElement(l.Q, {
                            type: l._49.H4
                        }, Object(a.d)("Delete these clips?", "ClipsModalBatchDelete")),
                        t = r.createElement(l.Q, {
                            type: l._49.P
                        }, Object(a.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                    return r.createElement(c, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(a.d)("Delete", "ClipsModalBatchDelete"),
                        buttonType: l.B.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderError()
                    })
                }, t
            }(r.Component),
            M = v({
                props: function(e) {
                    return {
                        deleteClips: function() {
                            return i.__awaiter(O, void 0, void 0, function() {
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
                                            throw t = n.sent(), a.j.error(t, "Failed to delete clips"), t;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(x);
        n.d(t, "a", function() {
            return c
        }), n.d(t, "b", function() {
            return g
        }), n.d(t, "d", function() {
            return E
        }), n.d(t, "e", function() {
            return R
        }), n.d(t, "c", function() {
            return M
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
    zlRb: function(e, t, n) {
        var i = {
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
                    }
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
        i.loc.source = {
            body: '#import "twilight/features/top-clips/models/clip-fragment.gql"\nquery ClipsManagerTable_User($login: String! $limit: Int $cursor: Cursor $criteria: UserClipsInput){\nuser(login: $login) {\nid\ndisplayName\nclips(first: $limit after: $cursor criteria: $criteria) {\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\n...clip\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(n("kUjr").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = i
    }
});
//# sourceMappingURL=pages.clips-manager-892fb7d92cb84ba4eab1417529f954a9.js.map