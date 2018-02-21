webpackJsonp([72], {
    "1OO3": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("7vx8"),
            i = 60,
            l = 60 * i,
            s = 24 * l,
            o = 7 * s,
            c = 4 * o,
            d = n("MApH");
        n.d(t, "a", function() {
            return u
        }), t.b = function(e) {
            var t = this;
            return Object(r.a)(d, {
                props: function(n) {
                    return {
                        banUserMutation: function(r, d) {
                            return void 0 === d && (d = null), a.__awaiter(t, void 0, void 0, function() {
                                var t, u;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (t = e(n.ownProps).channelID, !n.mutate) return [3, 5];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, n.mutate({
                                                variables: {
                                                    input: {
                                                        channelID: t,
                                                        bannedUserLogin: r,
                                                        expiresIn: d && function(e) {
                                                            if (!e) return "0s";
                                                            var t = e,
                                                                n = "";
                                                            if (t > c) {
                                                                var a = Math.floor(t / c);
                                                                t -= a * c, n += a + "mo"
                                                            }
                                                            if (t > o) {
                                                                var r = Math.floor(t / o);
                                                                t -= r * o, n += r + "w"
                                                            }
                                                            if (t > s) {
                                                                var d = Math.floor(t / s);
                                                                t -= d * s, n += d + "d"
                                                            }
                                                            if (t > l) {
                                                                var u = Math.floor(t / l);
                                                                t -= u * l, n += u + "h"
                                                            }
                                                            if (t > i) {
                                                                var p = Math.floor(t / i);
                                                                t -= p * i, n += p + "m"
                                                            }
                                                            return t > 0 && (n += t + "s"), n
                                                        }(d)
                                                    }
                                                }
                                            })];
                                        case 2:
                                            return u = a.sent(), [2, u.data];
                                        case 3:
                                            throw a.sent(), new Error("Unable to ban user");
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
        };
        var u;
        ! function(e) {
            e.Forbidden = "FORBIDDEN", e.TargetNotFound = "TARGET_NOT_FOUND", e.TargetIsSelf = "TARGET_IS_SELF", e.TargetIsAnonymous = "TARGET_IS_ANONYMOUS", e.TargetIsMod = "TARGET_IS_MOD", e.TargetIsBroadcaster = "TARGET_IS_BROADCASTER", e.TargetIsStaff = "TARGET_IS_STAFF", e.TargetIsAdmin = "TARGET_IS_ADMIN", e.TargetIsGlobalMod = "TARGET_IS_GLOBAL_MOD", e.TargetIsAlreadyBanned = "TARGET_ALREADY_BANNED", e.DurationInvalid = "DURATION_INVALID"
        }(u || (u = {}))
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
        n.loc.source = {
            body: "mutation ClipsTitleEdit_UpdateClip($input: UpdateClipInput!) {\nupdateClip(input: $input) {\nclip {\nid\ntitle\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "3NJ6": function(e, t) {},
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
    QIXk: function(e, t, n) {
        "use strict";
        var a, r = n("TToO"),
            i = n("U7vG"),
            l = n("6sO2"),
            s = n("7vx8"),
            o = n("6BvN"),
            c = n("vH/s"),
            d = function(e, t, n, a, r) {
                var i = Date.now() / 1e3;
                l.n.tracking.track(c.SpadeEventType.ClipEdit, {
                    channel_id: e,
                    client_time: i,
                    clip_edit_session_id: t + "," + Math.floor(i),
                    clip_id: t,
                    clip_slug: n,
                    effect_name: "title",
                    effect_setting: a,
                    front_end: !0,
                    location: r
                })
            },
            u = n("Odds"),
            p = n("2TZ0"),
            m = this,
            h = {
                TITLE_INPUT: "cmgr-title-input",
                TITLE_SAVE: "cmgr-title-save",
                TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
            };
        ! function(e) {
            e.emptySubmission = "emptySubmission", e.characterLimitReached = "characterLimitReached", e.channelViolation = "channelViolation", e.notCurator = "notCurator", e.unknown = "unknown"
        }(a || (a = {}));
        var g = 100,
            f = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderForClipsViewing = function() {
                        return i.createElement("div", null, n.renderInput(), n.renderSave(), i.createElement(u.u, {
                            "data-test-selector": h.TITLE_SAVE,
                            onClick: n.props.onCancel
                        }, Object(l.d)("Cancel", "ClipsTitleEdit")), n.state.showError ? n.getErrorMessage() : n.getRemainingCharacterText())
                    }, n.renderForManager = function() {
                        return i.createElement(u.S, {
                            id: h.TITLE_INPUT,
                            label: Object(l.d)("Title", "ClipsTitleEdit"),
                            hint: n.getRemainingCharacterText()
                        }, i.createElement(u._2, {
                            display: u.N.Flex,
                            flexWrap: u.Q.NoWrap
                        }, i.createElement(u._2, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, n.renderInput()), i.createElement(u._2, {
                            flexShrink: 0,
                            flexGrow: 0
                        }, i.createElement(u._2, {
                            position: u._9.Relative
                        }, n.renderSave(), i.createElement(u._0, {
                            onClick: n.dismissMessage,
                            "data-test-selector": h.TITLE_SAVE_TOOLTIP
                        }, i.createElement(u.p, {
                            direction: u.q.TopRight,
                            show: n.state.showError || n.state.showSuccess
                        }, i.createElement(u._2, {
                            padding: 1
                        }, n.state.showSuccess ? i.createElement(u._35, {
                            color: u.I.Link
                        }, Object(l.d)("Title Saved!", "ClipsTitleEdit")) : i.createElement(u._35, {
                            color: u.I.Error
                        }, n.getErrorMessage()))))))))
                    }, n.renderInput = function() {
                        return i.createElement(u.Y, {
                            id: h.TITLE_INPUT,
                            "data-test-selector": h.TITLE_INPUT,
                            type: u.Z.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        })
                    }, n.renderSave = function() {
                        return i.createElement(u.u, {
                            "data-test-selector": h.TITLE_SAVE,
                            disabled: !n.canSaveEditedTitle(),
                            onClick: n.editClipTitle
                        }, Object(l.d)("Save", "ClipsTitleEdit"))
                    }, n.getRemainingCharacterText = function() {
                        return Object(l.d)("{characterCount, number} remaining", {
                            characterCount: g - n.state.title.length
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
                        var t = e.currentTarget.value.slice(0, g);
                        n.setState({
                            title: t,
                            showError: !1,
                            showSuccess: !1
                        })
                    }, n.editClipTitle = function() {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var e;
                            return r.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if ("" === this.state.title.trim()) return this.setState({
                                            showError: !0,
                                            error: a.emptySubmission
                                        }), [2];
                                        t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.editTitle(this.state.title.trim())];
                                    case 2:
                                        return t.sent(), d(Number(this.props.clipBroadcasterId), this.props.clipId, this.props.clipSlug, this.props.clipTitle, this.props.location), this.onSuccess(), [3, 4];
                                    case 3:
                                        return e = t.sent(), this.setState({
                                            showError: !0,
                                            error: this.errorMessageToError(e)
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
                            case o.a.Enter:
                                return void(n.canSaveEditedTitle() && n.editClipTitle());
                            default:
                                return
                        }
                    }, n.state = {
                        title: t.clipTitle.trim(),
                        showError: !1,
                        showSuccess: !1,
                        error: null
                    }, n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.location === c.PageviewLocation.MyClipsManager ? this.renderForManager() : this.renderForClipsViewing()
                }, t.prototype.getErrorMessage = function() {
                    switch (this.state.error) {
                        case a.channelViolation:
                            return Object(l.d)("Uh-oh. Check for inappropriate language and try again!", "ClipsTitleEdit");
                        case a.emptySubmission:
                            return Object(l.d)("Please add a title.", "ClipsTitleEdit");
                        default:
                            return Object(l.d)("Whoops. Something went wrong.", "ClipsTitleEdit")
                    }
                }, t.prototype.errorMessageToError = function(e) {
                    return e.message.includes("403:") ? a.channelViolation : a.unknown
                }, t
            }(i.Component),
            C = function(e) {
                return {
                    editTitle: function(t) {
                        return r.__awaiter(m, void 0, void 0, function() {
                            var n;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, e.mutate({
                                            variables: {
                                                input: {
                                                    slug: e.ownProps.clipSlug,
                                                    title: t
                                                }
                                            }
                                        })];
                                    case 1:
                                        return a.sent(), [3, 3];
                                    case 2:
                                        throw n = a.sent(), l.i.error(n, "Failed to edit clip title"), n;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }
                }
            },
            v = Object(s.a)(p, {
                props: C
            })(f);
        n.d(t, !1, function() {
            return h
        }), n.d(t, !1, function() {
            return a
        }), n.d(t, !1, function() {
            return f
        }), n.d(t, !1, function() {
            return C
        }), n.d(t, "a", function() {
            return v
        })
    },
    Qfvd: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return r
        });
        var a = "//static-cdn.jtvnw.net/ttv-boxart",
            r = "52x72"
    },
    WNmM: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return c
        }), n.d(t, "d", function() {
            return u
        }), n.d(t, "c", function() {
            return p
        });
        var a, r = n("6sO2"),
            i = n("8Wuk"),
            l = n("vH/s"),
            s = (a = {}, a[i.b.Twitter] = "twitter", a[i.b.Reddit] = "reddit", a[i.b.VKontakte] = "vkontakte", a[i.b.Facebook] = "facebook", a[i.b.Copy] = "link", a[i.b.CopyInput] = "option_link", a),
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
                    r.n.tracking.track(l.SpadeEventType.VideoShare, {
                        vod_id: e.id,
                        vod_type: "clip",
                        share_platform: s[n],
                        location: d[t],
                        game: e.game ? e.game.name : null,
                        channel_id: e.broadcaster ? Number(e.broadcaster.id) : 0,
                        channel: e.broadcaster ? e.broadcaster.login : "",
                        live: null
                    })
                }
            },
            p = function(e) {
                var t = e.targetURL,
                    n = e.type;
                r.n.tracking.track(l.SpadeEventType.ClipChampHelpClick, {
                    target_url: t,
                    type: n.toLowerCase()
                })
            }
    },
    XITx: function(e, t) {},
    aeDV: function(e, t, n) {
        "use strict";

        function a(e) {
            e.currentTarget.select()
        }

        function r(e, t) {
            return t === g.Curator ? "/" + e + "/manager/clips" : "/" + e + "/manager/clips/channel"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, l = n("TToO"),
            s = n("U7vG"),
            o = n("3zLD"),
            c = n("CIox"),
            d = n("j7/Y"),
            u = n("w9tK"),
            p = n("vH/s");
        ! function(e) {
            e[e.ViewsAscending = 0] = "ViewsAscending", e[e.ViewsDescending = 1] = "ViewsDescending", e[e.CreatedAtAscending = 2] = "CreatedAtAscending", e[e.CreatedAtDescending = 3] = "CreatedAtDescending"
        }(i || (i = {}));
        var m, h = (C = {}, C[i.CreatedAtAscending] = "CREATED_AT_ASC", C[i.CreatedAtDescending] = "CREATED_AT_DESC", C[i.ViewsAscending] = "VIEWS_ASC", C[i.ViewsDescending] = "VIEWS_DESC", C);
        ! function(e) {
            e[e.Day = 0] = "Day", e[e.Week = 1] = "Week", e[e.Month = 2] = "Month", e[e.All = 3] = "All"
        }(m || (m = {}));
        var g, f = (v = {}, v[m.Day] = "LAST_DAY", v[m.Week] = "LAST_WEEK", v[m.Month] = "LAST_MONTH", v[m.All] = "ALL_TIME", v);
        ! function(e) {
            e[e.Broadcaster = 0] = "Broadcaster", e[e.Curator = 1] = "Curator"
        }(g || (g = {}));
        var C, v, b = n("CSlQ"),
            _ = n("RH2O"),
            E = n("2KeS"),
            k = n("+xm8"),
            S = n("f2i/"),
            y = n("Aj/L"),
            T = n("KSGD"),
            N = n("6sO2"),
            w = n("7vx8"),
            R = n("5LoI"),
            D = n("oIkB"),
            O = n("V5M+"),
            M = n("zCIC"),
            x = n("sikP"),
            I = n("WNmM"),
            A = n("F8kA"),
            L = n("rCmJ"),
            F = n("+Znq"),
            j = n("NY9D"),
            U = n("yDzg"),
            B = n("bhVC"),
            V = n("AoO8"),
            G = n("Odds"),
            H = [{
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
            P = Object(b.d)("ClipsManagerSocialShare")(function(e) {
                var t = Object(N.d)("Share", "ClipsManagerSocialShare");
                return s.createElement(F.a, null, s.createElement("div", null, s.createElement(G._43, {
                    label: t
                }, s.createElement(G.v, {
                    ariaLabel: t,
                    type: G.w.Hollow,
                    icon: G._16.Share
                }))), s.createElement(G.p, {
                    direction: G.q.BottomRight,
                    size: G.r.Small
                }, s.createElement(G._2, {
                    display: G.N.Flex,
                    justifyContent: G._1.Between,
                    padding: 1
                }, H.map(function(t) {
                    return s.createElement(B.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(U.a)(e.clip.url, t.params),
                        onShareClick: Object(I.d)(e.clip, e.pageType)
                    })
                })), s.createElement(G._2, {
                    padding: {
                        x: 1,
                        y: .5
                    }
                }, s.createElement(G.S, {
                    label: Object(N.d)("Video Link", "ClipsManagerSocialShare")
                }, s.createElement(G.Y, {
                    readOnly: !0,
                    type: G.Z.Text,
                    value: e.clip.url,
                    onFocus: a
                }))), s.createElement(G._2, {
                    padding: {
                        x: 1,
                        y: .5
                    }
                }, s.createElement(G.S, {
                    label: Object(N.d)("Embed Video", "ClipsManagerSocialShare")
                }, s.createElement(G.Y, {
                    readOnly: !0,
                    type: G.Z.Text,
                    value: Object(V.a)(e.clip.embedURL),
                    onFocus: a
                })))))
            }),
            W = n("QIXk"),
            Q = n("iFCf"),
            q = (n("qCag"), {
                MODERATION_DROPDOWN: "cmgr-moderation-dropdown",
                MODERATION_BUTTON: "cmgr-moderation-button",
                GAME_LINK: "cmgr-expanded-game-link",
                CHANNEL_LINK: "cmgr-expanded-channel-link"
            }),
            z = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.renderTitle = function() {
                        var e = n.props.clip;
                        return n.props.data.currentUser.id === (e && e.curator && e.curator.id) ? s.createElement(W.a, {
                            clipId: e.id,
                            clipSlug: e.slug,
                            clipTitle: e.title,
                            clipBroadcasterId: e.broadcaster ? Number(e.broadcaster.id) : 0,
                            location: p.PageviewLocation.MyClipsManager
                        }) : s.createElement(G.S, {
                            label: Object(N.d)("Title", "ClipsManagerTitleEdit")
                        }, s.createElement(G._2, {
                            display: G.N.Flex,
                            flexWrap: G.Q.NoWrap
                        }, s.createElement(G._2, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, s.createElement(G._35, null, e.title))))
                    }, n.renderGameLink = function(e) {
                        return e.game ? s.createElement(A.a, {
                            "data-test-selector": q.GAME_LINK,
                            to: Object(j.c)(e.game.name),
                            title: e.game.name
                        }, e.game.name) : null
                    }, n.renderModerationIcon = function() {
                        if (!n.props.clip.broadcaster || n.props.data.currentUser.id !== n.props.clip.broadcaster.id) return null;
                        var e = Object(N.d)("Moderation", "ClipsManagerExpandedRow");
                        return s.createElement(G._43, {
                            label: e
                        }, s.createElement(G._2, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(F.a, null, s.createElement(G.v, {
                            ariaLabel: e,
                            type: G.w.Hollow,
                            icon: G._16.Sword,
                            "data-test-selector": q.MODERATION_BUTTON
                        }), s.createElement(G.p, {
                            "data-test-selector": q.MODERATION_DROPDOWN,
                            direction: G.q.BottomRight
                        }, s.createElement(G._2, {
                            padding: {
                                y: .5
                            }
                        }, s.createElement(G._25, {
                            borderBottom: !0
                        }, s.createElement(G._0, {
                            onClick: n.openTimeoutUserModal
                        }, s.createElement(G._2, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(N.d)("Timeout User (24 hr)", "ClipsManagerExpandedRow"))), s.createElement(G._0, {
                            onClick: n.openBanUserModal
                        }, s.createElement(G._2, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(N.d)("Ban User", "ClipsManagerExpandedRow")))), s.createElement(G._0, {
                            onClick: n.openDeleteAllModal
                        }, s.createElement(G._2, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(N.d)("Delete All Clips from Video", "ClipsManagerExpandedRow"))))))))
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
                            slug: n.props.clip.slug,
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
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.clip,
                        t = Object(N.c)(new Date(e.createdAt), "medium"),
                        n = Object(N.d)("Close", "ClipsManagerExpandedRow"),
                        a = Object(N.d)("Delete", "ClipsManagerExpandedRow");
                    return s.createElement(L.a, {
                        onClickOut: this.onClickOutside
                    }, s.createElement(G._25, {
                        "data-target": this.props.dataTarget,
                        background: G.m.Base,
                        display: G.N.Block,
                        elevation: 3,
                        className: "clmgr-table__row-expanded",
                        position: G._9.Relative,
                        margin: {
                            bottom: 3
                        }
                    }, s.createElement(G._25, {
                        display: G.N.Flex,
                        justifyContent: G._1.Between,
                        alignItems: G.c.Center,
                        padding: 1,
                        background: G.m.Alt,
                        borderBottom: !0
                    }, s.createElement(G._43, {
                        label: n,
                        align: G._44.Left
                    }, s.createElement(G._2, {
                        flexGrow: 0
                    }, s.createElement(G.v, {
                        ariaLabel: n,
                        type: G.w.Hollow,
                        icon: G._16.Close,
                        onClick: this.props.onClose
                    }), s.createElement(G.p, {
                        direction: G.q.TopLeft
                    }))), s.createElement(G._2, {
                        display: G.N.Flex
                    }, this.renderModerationIcon(), s.createElement(G._43, {
                        label: a
                    }, s.createElement(G._2, {
                        margin: {
                            right: .5
                        }
                    }, s.createElement(G.v, {
                        ariaLabel: a,
                        type: G.w.Hollow,
                        icon: G._16.Trash,
                        onClick: this.openDeleteModal
                    }))), s.createElement(G._2, {
                        margin: {
                            right: .5
                        }
                    }, s.createElement(P, {
                        clip: this.props.clip,
                        pageType: this.props.pageType
                    })), s.createElement(G._43, {
                        label: Object(N.d)("Watch on Clips Page", "ClipsManagerExpandedRow"),
                        align: G._44.Right
                    }, s.createElement(G.v, {
                        ariaLabel: Object(N.d)("Popout", "ClipsManagerExpandedRow"),
                        type: G.w.Hollow,
                        linkTo: Object(U.a)(this.props.clip.url, {
                            tt_medium: "my_clips"
                        }),
                        icon: G._16.Popout
                    })))), s.createElement(G._2, {
                        padding: 1
                    }, s.createElement(G.U, {
                        gutterSize: G.V.None
                    }, s.createElement(G.J, {
                        cols: {
                            default: 12,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 5,
                            xl: 5
                        }
                    }, s.createElement(G._2, {
                        position: G._9.Relative
                    }, s.createElement(G.j, {
                        ratio: G.k.Aspect16x9
                    }, s.createElement("iframe", {
                        src: Object(U.a)(e.embedURL, {
                            autoplay: "false"
                        }),
                        frameBorder: 0,
                        width: "100%",
                        height: "100%",
                        scrolling: "no",
                        allowFullScreen: !0
                    })))), s.createElement(G.J, {
                        cols: {
                            default: 12,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 7,
                            xl: 7
                        }
                    }, s.createElement(G._2, {
                        display: G.N.Flex,
                        justifyContent: G._1.Center
                    }, s.createElement(G._2, {
                        flexGrow: 1,
                        padding: 1
                    }, this.renderTitle())), s.createElement(G._25, {
                        background: G.m.Alt,
                        margin: 1,
                        padding: 1,
                        border: !0
                    }, s.createElement(G.U, null, s.createElement(G.J, {
                        cols: {
                            default: 4
                        }
                    }, s.createElement(G._2, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(G._35, {
                        bold: !0
                    }, Object(N.d)("Created On", "ClipsManagerExpandedRow")), s.createElement(G._35, {
                        ellipsis: !0,
                        transform: G._39.Capitalize,
                        title: t
                    }, t))), s.createElement(G.J, {
                        cols: {
                            default: 4
                        }
                    }, s.createElement(G._2, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(G._35, {
                        bold: !0
                    }, Object(N.d)("Clip Length", "ClipsManagerExpandedRow")), s.createElement(G._35, {
                        ellipsis: !0
                    }, Object(N.d)("{seconds, number}s", {
                        seconds: this.props.clip.durationSeconds
                    }, "ClipsManagerExpandedRow")))), s.createElement(G.J, {
                        cols: {
                            default: 4
                        }
                    }, s.createElement(G._2, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(G._35, {
                        bold: !0
                    }, Object(N.d)("Views", "ClipsManagerExpandedRow")), s.createElement(G._2, {
                        display: G.N.Flex,
                        alignItems: G.c.Center,
                        ellipsis: !0
                    }, s.createElement(G._15, {
                        asset: G._16.GlyphViews
                    }), s.createElement(G._2, {
                        padding: {
                            left: .5
                        }
                    }, Object(N.f)(e.viewCount, {
                        maximumFractionDigits: 1
                    }))))), s.createElement(G.J, {
                        cols: {
                            default: 4
                        }
                    }, e.broadcaster && s.createElement(G._2, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(G._35, {
                        bold: !0
                    }, Object(N.d)("Channel", "ClipsManagerExpandedRow")), s.createElement(G._35, {
                        ellipsis: !0
                    }, s.createElement(A.a, {
                        "data-test-selector": q.CHANNEL_LINK,
                        to: "/" + e.broadcaster.login + "/clips",
                        title: e.broadcaster.displayName
                    }, e.broadcaster.displayName)))), s.createElement(G.J, {
                        cols: {
                            default: 4
                        }
                    }, s.createElement(G._2, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(G._35, {
                        bold: !0
                    }, Object(N.d)("Game", "ClipsManagerExpandedRow")), s.createElement(G._35, {
                        ellipsis: !0
                    }, this.renderGameLink(e)))))))))))
                }, t
            }(s.Component),
            K = Object(b.d)("ClipsManagerExpandedRow")(Object(w.a)(Q)(z)),
            J = Object(_.b)(null, function(e) {
                return Object(E.b)({
                    showModal: O.d,
                    closeModal: O.c
                }, e)
            })(K),
            Y = n("6BvN"),
            $ = n("MAZT"),
            Z = n("uTyw"),
            X = n("Qfvd"),
            ee = (n("uHjT"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderCardContent = function() {
                        var e = t.props.searchResult;
                        return function(e) {
                            var t = e;
                            return void 0 !== t.title && void 0 !== t.popularity
                        }(e) ? s.createElement(G.A, {
                            row: !0
                        }, s.createElement(G.C, {
                            size: G.D.Size3,
                            aspect: G.k.Aspect3x4,
                            src: function(e) {
                                return X.a + "/" + e + "-" + X.b + ".jpg"
                            }(e.title),
                            alt: e.thumbnailAltText
                        }), s.createElement(G.B, {
                            overflow: G._5.Hidden
                        }, s.createElement(G._2, {
                            padding: {
                                left: 1
                            }
                        }, s.createElement(G._35, {
                            type: G._40.H5
                        }, e.title), s.createElement(G._35, {
                            className: "clmgr-result__subtitle",
                            ellipsis: !0
                        }, Object(N.d)("{numViewers, number} viewers", {
                            numViewers: e.popularity
                        }, "ClipsManagerSearch"))))) : function(e) {
                            return void 0 !== e.followers
                        }(e) ? s.createElement(G.A, {
                            row: !0
                        }, s.createElement(G.C, {
                            size: G.D.Size3,
                            aspect: G.k.Aspect1x1,
                            src: e.thumbnail,
                            alt: e.thumbnailAltText
                        }), s.createElement(G.B, {
                            overflow: G._5.Hidden
                        }, s.createElement(G._2, {
                            padding: {
                                left: 1
                            }
                        }, s.createElement(G._35, {
                            type: G._40.H5
                        }, e.name), s.createElement(G._35, {
                            className: "clmgr-result__subtitle",
                            ellipsis: !0
                        }, Object(N.d)("{numFollowers, number} followers", {
                            numFollowers: e.followers
                        }, "ClipsManagerSearch"))))) : void 0
                    }, t.onMouseEnter = function() {
                        t.props.onResultHover(t.props.index)
                    }, t.onClick = function() {
                        t.props.onResultSelect(t.props.index)
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(G._0, {
                        onClick: this.onClick
                    }, s.createElement(G.W, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, s.createElement("div", {
                        onMouseEnter: this.onMouseEnter,
                        onKeyDown: this.props.onKeyDown,
                        "data-ref-index": this.props.index,
                        ref: this.props.refDelegate,
                        tabIndex: -1,
                        className: "clmgr-result"
                    }, this.renderCardContent())))
                }, t
            }(s.Component)),
            te = {
                NO_RESULTS: "cmgr-no-search-results",
                RESULTS_MENU: "cmgr-search-results-menu",
                SEARCH_INPUT: "cmgr-search-input",
                CHANNEL_SEARCH: "cmgr-channel-search",
                GAME_SEARCH: "cmgr-game-search"
            },
            ne = 5,
            ae = {
                currentCategory: R.a.Games,
                gameResults: [],
                userResults: [],
                isShowingResults: !1,
                isLoading: !1,
                searchTerm: "",
                focusedIndex: null
            },
            re = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.renderSearchOptions = function() {
                        var e = [s.createElement(G._26, {
                            active: t.state.currentCategory === R.a.Games,
                            onClick: t.setSearchTypeGame,
                            key: te.GAME_SEARCH,
                            "data-test-selector": te.GAME_SEARCH
                        }, Object(N.d)("Game Search", "ClipsManagerSearch"))];
                        return t.props.userRole !== g.Broadcaster && e.push(s.createElement(G._26, {
                            active: t.state.currentCategory === R.a.Users,
                            onClick: t.setSearchTypeChannel,
                            key: te.CHANNEL_SEARCH,
                            "data-test-selector": te.CHANNEL_SEARCH
                        }, Object(N.d)("Channel Search", "ClipsManagerSearch"))), s.createElement(G._27, null, e)
                    }, t.renderSearchResults = function() {
                        if (t.state.isLoading) return s.createElement(G._4, null);
                        var e = t.state.currentCategory;
                        if (e === R.a.Users) {
                            var n = t.state.userResults;
                            return 0 === n.length ? t.renderNoResults() : n.map(function(e, n) {
                                return s.createElement(ee, {
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
                        if (e === R.a.Games) {
                            var a = t.state.gameResults;
                            return 0 === a.length ? t.renderNoResults() : a.map(function(e, n) {
                                return s.createElement(ee, {
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
                        return s.createElement(G._2, {
                            "data-test-selector": te.NO_RESULTS,
                            display: G.N.Flex,
                            flexDirection: G.P.Column
                        }, s.createElement(G._25, {
                            textAlign: G._36.Center,
                            padding: {
                                y: 5
                            }
                        }, s.createElement(G._15, {
                            asset: G._16.NavSearch,
                            height: 36,
                            width: 36,
                            type: G._17.Brand
                        }), s.createElement(G._35, {
                            type: G._40.H4
                        }, Object(N.d)("No results found", "ClipsManagerSearch")), s.createElement(G._35, {
                            type: G._40.P,
                            color: G.I.Alt
                        }, Object(N.d)("They're probably in another castle", "ClipsManagerSearch"))))
                    }, t.setSearchResultRefs = function(e) {
                        if (null !== e) {
                            var n = e.dataset.refIndex;
                            if (n) {
                                var a = parseInt(n, 0);
                                t.searchResultRefs[a] = e
                            }
                        }
                    }, t.setSearchTypeGame = function() {
                        t.setState(l.__assign({}, ae, {
                            currentCategory: R.a.Games
                        })), t.context.setSearchType(R.a.Games)
                    }, t.setSearchTypeChannel = function() {
                        t.setState(l.__assign({}, ae, {
                            currentCategory: R.a.Users
                        })), t.context.setSearchType(R.a.Users)
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
                            case Y.a.Esc:
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
                            case Y.a.Up:
                                return void t.focusNext(!1);
                            case Y.a.Down:
                                return void t.focusNext(!0);
                            case Y.a.Enter:
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
                            var a, r = t.focusedIndex;
                            return a = null === r ? e ? 0 : n - 1 : e ? r + 1 >= n ? 0 : r + 1 : r - 1 < 0 ? n - 1 : r - 1, {
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
                            r = a.currentCategory,
                            i = a.gameResults,
                            l = a.userResults;
                        if (r === R.a.Games) n = i[e].title, t.context.setSearchTerm(n);
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
                        return t.state.currentCategory === R.a.Games ? t.state.gameResults.length : t.state.userResults.length
                    }, t.performQuery = function() {
                        var e = t.state,
                            n = e.isLoading,
                            a = e.searchTerm,
                            r = e.currentCategory;
                        n && t.setState({
                            isLoading: !0,
                            isShowingResults: !0
                        }), t.searchClient.queryForType(r, a, "", {
                            hitsPerPage: ne
                        }).then(function(e) {
                            if (e) {
                                var n = Object(Z.b)({
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
                    }, t.searchClient = new $.a(N.a.algoliaApplicationID, N.a.algoliaAPIKey), t.inputTimer = null, t.state = ae, t.searchResultRefs = [], t
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
                    return s.createElement(G._2, {
                        position: G._9.Relative
                    }, s.createElement(G._2, {
                        margin: {
                            bottom: 1
                        }
                    }, this.renderSearchOptions()), s.createElement(L.a, {
                        onClickOut: this.hideResults
                    }, s.createElement(G._18, {
                        id: te.SEARCH_INPUT,
                        refDelegate: this.setSearchInputRef,
                        onChange: this.onChange,
                        onFocus: this.onFocus,
                        onKeyDown: this.onKeyDown,
                        value: this.state.searchTerm,
                        placeholder: this.state.currentCategory === R.a.Games ? Object(N.d)("Enter a Game", "ClipsManagerSearch") : Object(N.d)("Enter a Channel", "ClipsManagerSearch")
                    }), s.createElement(G.p, {
                        "data-test-selector": te.RESULTS_MENU,
                        direction: G.q.Bottom,
                        noTail: !0,
                        size: G.r.Large,
                        show: this.state.isShowingResults
                    }, this.renderSearchResults())))
                }, t.contextTypes = {
                    setSearchTerm: T.func,
                    setSearchType: T.func,
                    clearSearch: T.func
                }, t
            }(s.Component),
            ie = Object(b.d)("ClipsManagerSearch")(re),
            le = (n("3NJ6"), "cmgr-my-clips-radio"),
            se = "cmgr-clips-of-me-radio",
            oe = function(e) {
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
                    return s.createElement(G._2, {
                        className: "clmgr-filters-container"
                    }, s.createElement(G.U, {
                        gutterSize: G.V.None
                    }, s.createElement(G.J, {
                        cols: {
                            default: 12,
                            xs: 6,
                            sm: 6,
                            md: 12,
                            lg: 12
                        }
                    }, s.createElement(G._2, {
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(G._2, {
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(G._35, {
                        fontSize: G.R.Size5
                    }, Object(N.d)("List View", "ClipsManagerTable"))), s.createElement(G._2, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(G._2, {
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(G._14, {
                        "data-test-selector": le,
                        "data-a-target": le,
                        label: Object(N.d)("Clips I've Created", "ClipsManagerTable"),
                        name: "MyClips",
                        checked: this.props.currentUserRole === g.Curator,
                        onChange: this.setCuratorRole
                    })), s.createElement(G._2, null, s.createElement(G._14, {
                        "data-test-selector": se,
                        "data-a-target": se,
                        label: Object(N.d)("Clips of My Channel", "ClipsManagerTable"),
                        name: "ClipsOfMyChannel",
                        checked: this.props.currentUserRole === g.Broadcaster,
                        onChange: this.setBroadcasterRole
                    }))))), s.createElement(G.J, {
                        cols: {
                            default: 12,
                            xs: 6,
                            sm: 6,
                            md: 12,
                            lg: 12
                        }
                    }, s.createElement(ie, {
                        userRole: this.props.currentUserRole
                    }))))
                }, t
            }(s.Component),
            ce = Object(b.d)("ClipsManagerRightColumn")(oe),
            de = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.handleImageError = function() {
                        n.setState({
                            imageURL: N.a.defaultStreamPreviewURL
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
            ue = (n("1f48"), "clips-manager-row-checkbox"),
            pe = "clips-manager-row-time-created",
            me = "clips-manager-row-view-count",
            he = function(e) {
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
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.clip,
                        t = Object(N.g)(new Date(e.createdAt));
                    return s.createElement(G._2, {
                        "data-a-target": "clips-manager-table-row-container",
                        className: "clmgr-table__row",
                        display: G.N.Flex,
                        overflow: G._5.Hidden,
                        alignItems: G.c.Center
                    }, s.createElement(G._0, {
                        onClick: this.onRowClick,
                        alpha: !0
                    }, s.createElement(G.U, {
                        "data-target": this.props.dataTarget
                    }, s.createElement(G.J, {
                        cols: 4
                    }, s.createElement(G._2, {
                        display: G.N.Flex,
                        flexWrap: G.Q.NoWrap,
                        alignItems: G.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(G._2, {
                        flexShrink: 0,
                        position: G._9.Relative
                    }, s.createElement(G._25, {
                        className: "clmgr-checkbox-bg",
                        background: G.m.Base,
                        position: G._9.Absolute
                    }), s.createElement(G.H, {
                        refDelegate: this.setCheckboxRef,
                        "data-test-selector": ue,
                        label: " ",
                        checked: this.props.isSelected,
                        onChange: this.selectClip
                    })), s.createElement(G.W, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, s.createElement(de, {
                        imageURL: this.props.clip.thumbnailURL,
                        className: "clmgr-thumb"
                    })), s.createElement(G._35, {
                        type: G._40.H5,
                        title: e.title,
                        ellipsis: !0
                    }, e.title))), s.createElement(G.J, {
                        cols: 2
                    }, e.broadcaster && s.createElement(G._2, {
                        display: G.N.Flex,
                        alignItems: G.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(G.W, {
                        ellipsis: !0
                    }, s.createElement(A.a, {
                        to: "/" + e.broadcaster.login + "/clips",
                        title: e.broadcaster.displayName
                    }, e.broadcaster.displayName)))), s.createElement(G.J, {
                        cols: 2
                    }, s.createElement(G._2, {
                        display: G.N.Flex,
                        alignItems: G.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, this.renderGameLink(e))), s.createElement(G.J, {
                        cols: 2
                    }, s.createElement(G._2, {
                        display: G.N.Flex,
                        alignItems: G.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(G._35, {
                        "data-test-selector": pe,
                        "data-a-target": pe,
                        title: t,
                        transform: G._39.Capitalize,
                        ellipsis: !0
                    }, t))), s.createElement(G.J, {
                        cols: 2
                    }, s.createElement(G._2, {
                        display: G.N.Flex,
                        alignItems: G.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(G._2, {
                        display: G.N.Flex,
                        alignItems: G.c.Center,
                        margin: {
                            right: .5
                        }
                    }, s.createElement(G._15, {
                        asset: G._16.GlyphViews
                    })), s.createElement(G._35, {
                        "data-test-selector": me,
                        "data-a-target": me
                    }, Object(N.f)(e.viewCount, {
                        maximumFractionDigits: 1
                    })))))))
                }, t.prototype.renderGameLink = function(e) {
                    return e.game ? s.createElement(G.W, {
                        ellipsis: !0
                    }, s.createElement(A.a, {
                        to: Object(j.c)(e.game.name),
                        title: e.game.name
                    }, e.game.name)) : null
                }, t
            }(s.Component),
            ge = (n("EDaX"), "clips-manager-table-row"),
            fe = "clips-manager-select-all",
            Ce = "clips-manager-batch-delete",
            ve = "clips-manager-views-sort",
            be = "clips-manager-createdat-sort",
            _e = "clips-manager-empty-body",
            Ee = function(e) {
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
                            if (n) a = t.selectedClipSlugs.concat([e]);
                            else {
                                var r = t.selectedClipSlugs.indexOf(e);
                                a = t.selectedClipSlugs.splice(r, 1)
                            }
                            return {
                                selectedClipSlugs: a
                            }
                        })
                    }, t.toggleViewsSort = function() {
                        t.props.sort === i.ViewsDescending ? t.props.updateSort(i.ViewsAscending) : t.props.updateSort(i.ViewsDescending)
                    }, t.toggleCreatedAtSort = function() {
                        t.props.sort === i.CreatedAtDescending ? t.props.updateSort(i.CreatedAtAscending) : t.props.updateSort(i.CreatedAtDescending)
                    }, t.deleteSelectedClips = function() {
                        t.props.onBatchDeleteClips(t.state.selectedClipSlugs), t.setState({
                            selectedClipSlugs: []
                        })
                    }, t.deleteClip = function(e) {
                        t.props.onDeleteClip(e), t.selectClip(e, !1)
                    }, t.deleteAllClips = function(e) {
                        t.props.onDeleteAllClips(e)
                    }, t.toggleClipsSelection = function() {
                        var e = t.props.clips;
                        t.state.selectedClipSlugs.length === e.length ? t.clearClipsSelection() : t.setState({
                            selectedClipSlugs: e.map(function(e) {
                                return e.slug
                            })
                        })
                    }, t.clearClipsSelection = function() {
                        t.setState({
                            selectedClipSlugs: []
                        })
                    }, t.renderDeleteClipModal = function(e) {
                        t.props.showModal(x.d, {
                            slug: e,
                            onClose: t.props.closeModal,
                            onDelete: t.props.onDeleteClip
                        })
                    }, t.renderBatchDeleteModal = function() {
                        1 === t.state.selectedClipSlugs.length ? t.renderDeleteClipModal(t.state.selectedClipSlugs[0]) : t.props.showModal(x.c, {
                            clipSlugs: t.state.selectedClipSlugs,
                            onClose: t.props.closeModal,
                            onBatchDelete: t.deleteSelectedClips
                        })
                    }, t.reportInteractive = function() {
                        !t.props.loading && t.props.userID && t.props.latencyTracking.reportInteractive()
                    }, t.state = {
                        selectedClipSlugs: [],
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
                    return this.props.error || !this.props.userID ? null : s.createElement(G._2, {
                        className: "clmgr-body-wrap",
                        display: G.N.Flex,
                        flexWrap: G.Q.NoWrap,
                        flexDirection: G.P.ColumnReverse,
                        breakpointMedium: {
                            flexDirection: G.P.Row
                        }
                    }, s.createElement(G._2, {
                        className: "clmgr-table-wrap",
                        display: G.N.Flex,
                        flexGrow: 1,
                        flexWrap: G.Q.Wrap,
                        position: G._9.Relative
                    }, s.createElement(G._25, {
                        background: G.m.Base,
                        border: !0,
                        elevation: 3,
                        margin: {
                            bottom: .5
                        },
                        fullWidth: !0
                    }, this.renderHeaderRow()), s.createElement(G._25, {
                        fullWidth: !0,
                        fullHeight: !0
                    }, s.createElement(M.b, null, s.createElement(G._25, {
                        background: G.m.Base,
                        elevation: 2,
                        border: !0
                    }, this.props.clips.length > 0 && !this.state.isNewQueryLoading && this.props.clips.map(function(t) {
                        return e.renderClipRow(t)
                    }), this.state.isNewQueryLoading && this.props.loading && s.createElement(G._2, {
                        display: G.N.Flex,
                        alignItems: G.c.Center,
                        justifyContent: G._1.Center,
                        padding: 1,
                        fullWidth: !0
                    }, s.createElement(G._4, {
                        delay: 0
                    })), 0 === this.props.clips.length && !this.props.loading && s.createElement(G._2, {
                        display: G.N.Flex,
                        justifyContent: G._1.Center,
                        textAlign: G._36.Center,
                        padding: 2,
                        fullWidth: !0,
                        fullHeight: !0
                    }, s.createElement(G._35, {
                        type: G._40.H4,
                        color: G.I.Alt2,
                        "data-test-selector": _e
                    }, Object(N.d)("Create Clips to fill this space with the most memorable moments from your favorite Twitch streams and videos. Just hit the Clip button on the video player to try it out. {learnHowLink} to use Clips.", {
                        learnHowLink: s.createElement("a", {
                            target: "_blank",
                            rel: "noopener",
                            href: "https://help.twitch.tv/customer/portal/articles/2442508-how-to-use-clips"
                        }, Object(N.d)("Learn how", "ClipsManagerTable"))
                    }, "ClipsManagerTable"))), s.createElement(M.a, {
                        loadMore: this.loadMore,
                        enabled: !this.props.loading && this.props.hasNextPage
                    }), this.props.loading && !this.state.isNewQueryLoading && s.createElement(G._2, {
                        display: G.N.Flex,
                        alignItems: G.c.Center,
                        justifyContent: G._1.Center,
                        padding: 1,
                        fullWidth: !0
                    }, s.createElement(G._4, {
                        delay: 0
                    })))))), s.createElement(G._2, {
                        breakpointMedium: {
                            margin: {
                                left: 2
                            }
                        },
                        flexShrink: 0
                    }, s.createElement(ce, {
                        updateUserRole: this.props.updateUserRole,
                        currentUserRole: this.props.userRole
                    })))
                }, t.prototype.renderHeaderRow = function() {
                    var e = this.state.selectedClipSlugs.length > 0,
                        t = e && this.state.selectedClipSlugs.length === this.props.clips.length,
                        n = s.createElement(G.H, {
                            "data-test-selector": fe,
                            label: " ",
                            checked: t,
                            onChange: this.toggleClipsSelection,
                            disabled: this.state.isNewQueryLoading && this.props.loading
                        });
                    if (e) return s.createElement(G.U, null, s.createElement(G.J, {
                        cols: 12
                    }, s.createElement(G._2, {
                        display: G.N.Flex,
                        alignItems: G.c.Center,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        fullHeight: !0
                    }, s.createElement(G._2, {
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, n), s.createElement(G._2, {
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, s.createElement(G._35, null, Object(N.d)("{numClips, number} selected", {
                        numClips: this.state.selectedClipSlugs.length
                    }, "ClipsManagerTable"))), s.createElement(G._2, {
                        flexShrink: 0,
                        alignItems: G.c.Center,
                        fullHeight: !0
                    }, s.createElement(G.v, {
                        ariaLabel: Object(N.d)("Delete Clip", "ClipsManagerTable"),
                        icon: G._16.Trash,
                        onClick: this.renderBatchDeleteModal,
                        "data-test-selector": Ce
                    })))));
                    var a = this.props.sort,
                        r = a === i.ViewsAscending || a === i.ViewsDescending,
                        l = a === i.CreatedAtAscending || a === i.CreatedAtDescending,
                        o = Object(N.d)("Created", "ClipsManagerTable"),
                        c = Object(N.d)("Views", "ClipsManagerTable");
                    return s.createElement(G.U, null, s.createElement(G.J, {
                        cols: 4
                    }, s.createElement(G._2, {
                        display: G.N.Flex,
                        alignItems: G.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(G._2, {
                        display: G.N.Flex,
                        alignItems: G.c.Center,
                        margin: {
                            right: 1
                        }
                    }, n), s.createElement(G._35, null, Object(N.d)("Info", "ClipsManagerTable")))), s.createElement(G.J, {
                        cols: 2
                    }, s.createElement(G._2, {
                        padding: 1
                    }, Object(N.d)("Channel", "ClipsManagerTable"))), s.createElement(G.J, {
                        cols: 2
                    }, s.createElement(G._2, {
                        padding: 1
                    }, Object(N.d)("Game", "ClipsManagerTable"))), s.createElement(G.J, {
                        cols: 2
                    }, s.createElement(G._2, {
                        padding: {
                            y: .5,
                            right: 1
                        },
                        display: G.N.Flex,
                        fullHeight: !0
                    }, s.createElement(G._0, {
                        alpha: !0,
                        onClick: this.toggleCreatedAtSort,
                        "data-test-selector": be,
                        "data-a-target": be
                    }, s.createElement(G._2, {
                        display: G.N.Flex,
                        flexWrap: G.Q.NoWrap,
                        alignContent: G.b.Center,
                        justifyContent: G._1.Between,
                        padding: {
                            x: 1
                        }
                    }, s.createElement(G._35, {
                        color: G.I.Link,
                        title: o,
                        bold: !0,
                        ellipsis: !0
                    }, o), l && s.createElement(G._15, {
                        asset: a === i.CreatedAtDescending ? G._16.GlyphArrDown : G._16.GlyphArrUp,
                        type: G._17.Brand
                    }))))), s.createElement(G.J, {
                        cols: 2
                    }, s.createElement(G._2, {
                        padding: {
                            y: .5,
                            right: 1
                        },
                        display: G.N.Flex,
                        fullHeight: !0
                    }, s.createElement(G._0, {
                        alpha: !0,
                        onClick: this.toggleViewsSort,
                        "data-test-selector": ve,
                        "data-a-target": ve
                    }, s.createElement(G._2, {
                        display: G.N.Flex,
                        flexWrap: G.Q.NoWrap,
                        alignContent: G.b.Center,
                        justifyContent: G._1.Between,
                        padding: {
                            x: 1
                        }
                    }, s.createElement(G._35, {
                        color: G.I.Link,
                        title: c,
                        bold: !0,
                        ellipsis: !0
                    }, c), r && s.createElement(G._15, {
                        asset: a === i.ViewsDescending ? G._16.GlyphArrDown : G._16.GlyphArrUp,
                        type: G._17.Brand
                    }))))))
                }, t.prototype.renderClipRow = function(e) {
                    var t = this.state.selectedClipSlugs.includes(e.slug);
                    if (e.slug === this.state.expandedSlug) {
                        var n = this.props.userRole === g.Curator ? I.a.MyClips : I.a.ClipsOfMyChannel;
                        return s.createElement(J, {
                            key: e.slug,
                            dataTarget: ge,
                            clip: e,
                            onClose: this.closeExpandedRow,
                            onDelete: this.deleteClip,
                            onDeleteAll: this.deleteAllClips,
                            pageType: n
                        })
                    }
                    return s.createElement(he, {
                        key: e.slug,
                        dataTarget: ge,
                        clip: e,
                        isSelected: t,
                        onSelectClip: this.selectClip,
                        onRowClick: this.expandClipRow
                    })
                }, t
            }(s.Component),
            ke = n("zlRb"),
            Se = Object(o.compose)(Object(b.d)("ClipsManagerTable"), Object(w.a)(ke, {
                options: function(e) {
                    var t = {
                        sort: h[e.sort],
                        period: f[m.All]
                    };
                    return e.userRole === g.Broadcaster ? t.broadcasterID = e.channelID : t.curatorID = e.channelID, e.searchFilterTerm && (e.searchFilterType === R.a.Users && e.userRole !== g.Broadcaster ? t.broadcasterID = e.searchFilterTerm : t.gameName = e.searchFilterTerm), {
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
                                        r = n.user.clips.edges;
                                    return {
                                        user: l.__assign({}, n.user, {
                                            clips: l.__assign({}, n.user.clips, {
                                                edges: Object(D.b)(a, r)
                                            })
                                        })
                                    }
                                }
                            })
                        },
                        onDeleteClip: function(t) {
                            Object(D.d)(ke, e.data.variables, function(e) {
                                var n = e.user.clips.edges;
                                return e.user.clips.edges = n.filter(function(e) {
                                    return e.node.slug !== t
                                }), e
                            })
                        },
                        onDeleteAllClips: function(t) {
                            Object(D.d)(ke, e.data.variables, function(e) {
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
                            Object(D.d)(ke, e.data.variables, function(e) {
                                var n = e.user.clips.edges;
                                return e.user.clips.edges = n.filter(function(e) {
                                    var n = e.node.slug;
                                    return !t.includes(n)
                                }), e
                            })
                        }
                    }
                }
            }), Object(_.b)(null, function(e) {
                return Object(E.b)({
                    showModal: O.d,
                    closeModal: O.c
                }, e)
            }))(Ee),
            ye = n("tYdz"),
            Te = function(e) {
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
                        sortOption: i.CreatedAtDescending,
                        searchType: R.a.Games,
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
                    return this.props.data.loading || this.props.data.error || !this.props.data.currentUser ? null : s.createElement(G._2, {
                        className: "scroll-y",
                        padding: {
                            x: 3,
                            top: 3
                        },
                        fullHeight: !0
                    }, s.createElement(G._2, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(G._35, {
                        type: G._40.H1,
                        fontSize: G.R.Size3
                    }, Object(N.d)("Clips", "ClipsManagerPage"))), s.createElement(Se, {
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
            Ne = Object(o.compose)(Object(b.d)("ClipsManager"), Object(w.a)(ye), c.e)(Te),
            we = Object(_.b)(function(e) {
                return {
                    isLoggedIn: Object(y.d)(e)
                }
            }, function(e) {
                return Object(E.b)({
                    login: function() {
                        return Object(S.f)(k.a.ClipsManager)
                    }
                }, e)
            })(Ne),
            Re = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onRoleChange = function(e) {
                        e !== g.Broadcaster && t.props.history.push({
                            pathname: r(t.props.match.params.channelName, e)
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(we, {
                        channelName: this.props.match.params.channelName,
                        role: g.Broadcaster,
                        onRoleChange: this.onRoleChange
                    })
                }, t
            }(s.Component),
            De = Object(o.compose)(Object(b.d)("ClipsOfMeManagerPage", {
                destination: u.a.ChannelClipsManager
            }), Object(d.a)({
                location: p.PageviewLocation.ChannelClipsManager,
                properties: {
                    is_live: !1
                }
            }), c.e)(Re),
            Oe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onRoleChange = function(e) {
                        e !== g.Curator && t.props.history.push({
                            pathname: r(t.props.match.params.channelName, e)
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(we, {
                        channelName: this.props.match.params.channelName,
                        role: g.Curator,
                        onRoleChange: this.onRoleChange
                    })
                }, t
            }(s.Component),
            Me = Object(o.compose)(Object(b.d)("MyClipsManagerPage", {
                destination: u.a.MyClipsManager
            }), Object(d.a)({
                location: p.PageviewLocation.MyClipsManager,
                properties: {
                    is_live: !1
                }
            }), c.e)(Oe);
        n.d(t, "ChannelClipsManagerPage", function() {
            return De
        }), n.d(t, "MyClipsManagerPage", function() {
            return Me
        })
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
                end: 247
            }
        };
        n.loc.source = {
            body: "fragment clip on Clip {\nid\nslug\nurl\nembedURL\ntitle\nviewCount\nlanguage\ncurator {\nid\nlogin\ndisplayName\n}\ngame {\nid\nname\nboxArtURL(width: 52 height: 72)\n}\nbroadcaster {\nid\nlogin\ndisplayName\n}\nthumbnailURL\ncreatedAt\ndurationSeconds\nchampBadge {\nid\n}\n}",
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

        function a(e) {
            return Object(f.a)(C, e)
        }
        var r = n("TToO"),
            i = n("U7vG"),
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
                        return t.props.successContent ? i.createElement(o._25, {
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
                        }, i.createElement(o._35, {
                            type: o._40.Strong
                        }, t.props.successContent)) : null
                    }, t.renderError = function() {
                        return t.props.errorContent ? i.createElement(o._25, {
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
                        }, i.createElement(o._35, {
                            type: o._40.Strong,
                            color: o.I.Error
                        }, t.props.errorContent)) : null
                    }, t.onSubmit = function() {
                        t.props.onSubmit()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.successContent ? i.createElement(s.a, {
                        onClickOut: this.props.onClose
                    }, i.createElement(o._25, {
                        padding: 2,
                        background: o.m.Base,
                        className: "clip-modal"
                    }, this.renderSuccess(), i.createElement(o._2, {
                        display: o.N.Flex,
                        justifyContent: o._1.Center
                    }, i.createElement(o._2, {
                        margin: {
                            x: 1
                        }
                    }, i.createElement(o.u, {
                        "data-test-selector": c.CANCEL_BUTTON,
                        onClick: this.props.onClose
                    }, Object(l.d)("Close", "ClipsModal")))))) : i.createElement(s.a, {
                        onClickOut: this.props.onClose
                    }, i.createElement(o._25, {
                        padding: 2,
                        background: o.m.Base,
                        className: "clip-modal"
                    }, i.createElement(o._25, {
                        "data-test-selector": c.TITLE,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 1
                        }
                    }, this.props.title), i.createElement(o._25, {
                        "data-test-selector": c.MAIN_BODY,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, this.renderError(), this.props.body), i.createElement(o._2, {
                        display: o.N.Flex,
                        justifyContent: o._1.Center
                    }, i.createElement(o._2, {
                        margin: {
                            x: 1
                        }
                    }, i.createElement(o.u, {
                        "data-test-selector": c.CANCEL_BUTTON,
                        type: o.z.Text,
                        onClick: this.props.onClose
                    }, Object(l.d)("Cancel", "ClipsModal"))), i.createElement(o._2, {
                        margin: {
                            x: 1
                        }
                    }, i.createElement(o.u, {
                        "data-test-selector": c.SUBMIT_BUTTON,
                        type: this.props.buttonType ? this.props.buttonType : o.z.Default,
                        onClick: this.onSubmit,
                        disabled: this.props.submitDisabled
                    }, this.props.buttonContent), this.props.isLoading && i.createElement(o._4, {
                        delay: 0
                    })))))
                }, t
            }(i.Component),
            u = n("1OO3"),
            p = n("CSlQ"),
            m = 86400,
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        hasErrored: !1,
                        hasSucceeded: !1
                    }, t.renderTitle = function() {
                        return t.props.isTemporary ? i.createElement(o._35, {
                            type: o._40.H5,
                            ellipsis: !0
                        }, Object(l.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : i.createElement(o._35, {
                            type: o._40.H5,
                            ellipsis: !0
                        }, Object(l.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                    }, t.renderBodyText = function() {
                        return t.props.isTemporary ? i.createElement(o._35, null, Object(l.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                            clipCreator: t.props.targetUser.displayName
                        }, "ClipsModalBanUser")) : i.createElement(o._35, null, Object(l.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                            clipCreator: t.props.targetUser.displayName
                        }, "ClipsModalBanUser"))
                    }, t.renderButtonText = function() {
                        return t.props.isTemporary ? Object(l.d)("Timeout User", "ClipsModalBanUser") : Object(l.d)("Ban User", "ClipsModalBanUser")
                    }, t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(l.d)("Success!", "ClipsModalBanUser") : null
                    }, t.renderFailure = function() {
                        return t.state.hasErrored ? t.props.isTemporary ? Object(l.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(l.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
                    }, t.banUser = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e = this.props.targetUser.login, t = this.props.isTemporary ? this.props.banUserMutation(e, m) : this.props.banUserMutation(e), n.label = 1;
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
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return i.createElement(d, {
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
            }(i.Component),
            g = Object(p.d)("ClipsModalBanUser")(Object(u.b)(function(e) {
                return {
                    channelID: e.broadcasterID
                }
            })(h)),
            f = n("7vx8"),
            C = n("wnjK"),
            v = n("LnKh"),
            b = (n("lTii"), this),
            _ = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            E = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onDeleteClick = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
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
                    }, t.state = _, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = [i.createElement(o._35, {
                        key: "title",
                        type: o._40.H4
                    }, Object(l.d)("Delete This Clip", "ClipsModalDelete")), i.createElement(o._2, {
                        key: "message",
                        margin: {
                            top: 1
                        }
                    }, i.createElement(o._35, {
                        type: o._40.P,
                        color: o.I.Alt2
                    }, Object(l.d)("This clip will be permanently deleted.", "ClipsModalDelete")))];
                    if (!this.props.data.clip) return null;
                    var t = null;
                    this.props.data.clip.curator && (t = i.createElement("span", null, " • ", Object(l.d)("Clipped by {curator}", {
                        curator: this.props.data.clip.curator.login
                    }, "ClipsModalDelete")));
                    var n = i.createElement(o._25, {
                        display: o.N.Flex,
                        flexWrap: o.Q.NoWrap
                    }, i.createElement(o._2, {
                        className: "clips-modal-delete__thumb",
                        margin: {
                            right: 1
                        }
                    }, i.createElement(o.j, {
                        ratio: o.k.Aspect16x9
                    }, i.createElement("img", {
                        src: this.props.data.clip.thumbnailURL
                    }))), i.createElement(o._2, null, i.createElement(o._35, {
                        type: o._40.H5
                    }, this.props.data.clip.title), i.createElement(o._35, {
                        color: o.I.Alt2
                    }, Object(l.d)("{created, date, medium}", {
                        created: new Date(this.props.data.clip.createdAt)
                    }, "ClipsModalDelete"), t), i.createElement(o._35, {
                        color: o.I.Alt2
                    }, Object(l.d)("{viewCount, number} views", {
                        viewCount: this.props.data.clip.viewCount
                    }, "ClipsModalDelete"))));
                    return i.createElement(d, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: n,
                        buttonContent: Object(l.d)("Delete", "ClipsModalDelete"),
                        buttonType: o.z.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        successContent: this.state.hasSucceeded ? Object(l.d)("Success!", "ClipsModalDelete") : null,
                        errorContent: this.state.hasErrored ? Object(l.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                        isLoading: this.state.isLoading
                    })
                }, t
            }(i.Component),
            k = Object(f.a)(v)(a({
                props: function(e) {
                    return {
                        deleteClip: function(t) {
                            return r.__awaiter(b, void 0, void 0, function() {
                                var n;
                                return r.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 2, , 3]), [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        slugs: [t]
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
            })(E)),
            S = n("3zLD"),
            y = n("wqRA"),
            T = this,
            N = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            w = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.deleteAll = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
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
                    }, t.state = N, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = i.createElement(o._35, {
                        type: o._40.P
                    }, Object(l.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                    return i.createElement(d, {
                        onSubmit: this.deleteAll,
                        onClose: this.props.onClose,
                        title: i.createElement(o._35, {
                            type: o._40.H4
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
            }(i.Component),
            R = Object(S.compose)(Object(p.d)("ClipsModalDeleteAll"), a({
                props: function(e) {
                    return {
                        deleteAllClips: function(t, n) {
                            return r.__awaiter(T, void 0, void 0, function() {
                                var a, i, s;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 6, , 7]), a = void 0, n ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        videoID: n
                                                    }
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return i = r.sent(), a = i.data, [3, 5];
                                        case 2:
                                            return t ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        broadcastID: t
                                                    }
                                                }
                                            })] : [3, 4];
                                        case 3:
                                            return i = r.sent(), a = i.data, [3, 5];
                                        case 4:
                                            throw new Error("Invalid broadcastID specified for deleteAllClips");
                                        case 5:
                                            return e.ownProps.onDeleteAll && e.ownProps.onDeleteAll(a.deleteClips.clips), [3, 7];
                                        case 6:
                                            throw s = r.sent(), l.i.error(s, "Failed to delete clips from VOD"), s;
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            }), Object(f.a)(y, {
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
            }))(w),
            D = this,
            O = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            M = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(l.d)("Clips successfully deleted.", "ClipsModalBatchDelete") : null
                    }, t.renderError = function() {
                        return t.state.hasErrored ? Object(l.d)("There was a problem deleting this clip.", "ClipsModalBatchDelete") : null
                    }, t.onDeleteClick = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
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
                    }, t.state = O, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = i.createElement(o._35, {
                            type: o._40.H4
                        }, Object(l.d)("Delete these clips?", "ClipsModalBatchDelete")),
                        t = i.createElement(o._35, {
                            type: o._40.P
                        }, Object(l.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                    return i.createElement(d, {
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
            }(i.Component),
            x = a({
                props: function(e) {
                    return {
                        deleteClips: function() {
                            return r.__awaiter(D, void 0, void 0, function() {
                                var t;
                                return r.__generator(this, function(n) {
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
                                            throw t = n.sent(), l.i.error(t, "Failed to delete clips"), t;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(M);
        n.d(t, "a", function() {
            return d
        }), n.d(t, "b", function() {
            return g
        }), n.d(t, "d", function() {
            return k
        }), n.d(t, "e", function() {
            return R
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
        a.loc.source = {
            body: '#import "twilight/features/top-clips/models/clip-fragment.gql"\nquery ClipsManagerTable_User($login: String! $limit: Int $cursor: Cursor $criteria: UserClipsInput){\nuser(login: $login) {\nid\ndisplayName\nclips(first: $limit after: $cursor criteria: $criteria) {\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\n...clip\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }(n("kUjr").definitions)), e.exports = a
    }
});
//# sourceMappingURL=pages.clips-manager-4e40bcf6e8f8665091134a05cfbee919.js.map