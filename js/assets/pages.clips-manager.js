webpackJsonp([72], {
    "1OO3": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("7vx8"),
            i = 60,
            l = 60 * i,
            s = 24 * l,
            o = 7 * s,
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
                                return void 0 === d && (d = null), a.__awaiter(t, void 0, void 0, function() {
                                    var t;
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
                                                return [2, a.sent().data];
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
            i = n("GiK3"),
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
            s = ((a = {})[i.b.Twitter] = "twitter", a[i.b.Reddit] = "reddit", a[i.b.VKontakte] = "vkontakte", a[i.b.Facebook] = "facebook", a[i.b.Copy] = "link", a[i.b.CopyInput] = "option_link", a),
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, r = n("TToO"),
            i = n("GiK3"),
            l = n("3zLD"),
            s = n("CIox"),
            o = n("j7/Y"),
            c = n("w9tK"),
            d = n("vH/s");
        ! function(e) {
            e[e.ViewsAscending = 0] = "ViewsAscending", e[e.ViewsDescending = 1] = "ViewsDescending", e[e.CreatedAtAscending = 2] = "CreatedAtAscending", e[e.CreatedAtDescending = 3] = "CreatedAtDescending"
        }(a || (a = {}));
        var u, p = ((h = {})[a.CreatedAtAscending] = "CREATED_AT_ASC", h[a.CreatedAtDescending] = "CREATED_AT_DESC", h[a.ViewsAscending] = "VIEWS_ASC", h[a.ViewsDescending] = "VIEWS_DESC", h);
        ! function(e) {
            e[e.Day = 0] = "Day", e[e.Week = 1] = "Week", e[e.Month = 2] = "Month", e[e.All = 3] = "All"
        }(u || (u = {}));
        var m, h, g, f = ((g = {})[u.Day] = "LAST_DAY", g[u.Week] = "LAST_WEEK", g[u.Month] = "LAST_MONTH", g[u.All] = "ALL_TIME", g);
        ! function(e) {
            e[e.Broadcaster = 0] = "Broadcaster", e[e.Curator = 1] = "Curator"
        }(m || (m = {}));
        var C = n("CSlQ"),
            v = n("RH2O"),
            b = n("2KeS"),
            _ = n("+xm8"),
            E = n("f2i/"),
            k = n("Aj/L"),
            S = n("KSGD"),
            y = n("6sO2"),
            T = n("7vx8"),
            N = n("5LoI"),
            w = n("oIkB"),
            R = n("V5M+"),
            D = n("zCIC"),
            O = n("sikP"),
            M = n("WNmM"),
            x = n("F8kA"),
            I = n("rCmJ"),
            A = n("+Znq"),
            L = n("NY9D"),
            F = n("yDzg"),
            j = n("bhVC"),
            U = n("AoO8"),
            B = n("Odds"),
            V = [{
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

        function G(e) {
            e.currentTarget.select()
        }
        var H = Object(C.d)("ClipsManagerSocialShare")(function(e) {
                var t = Object(y.d)("Share", "ClipsManagerSocialShare");
                return i.createElement(A.a, null, i.createElement("div", null, i.createElement(B._43, {
                    label: t
                }, i.createElement(B.v, {
                    ariaLabel: t,
                    type: B.w.Hollow,
                    icon: B._16.Share
                }))), i.createElement(B.p, {
                    direction: B.q.BottomRight,
                    size: B.r.Small
                }, i.createElement(B._2, {
                    display: B.N.Flex,
                    justifyContent: B._1.Between,
                    padding: 1
                }, V.map(function(t) {
                    return i.createElement(j.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(F.a)(e.clip.url, t.params),
                        onShareClick: Object(M.d)(e.clip, e.pageType)
                    })
                })), i.createElement(B._2, {
                    padding: {
                        x: 1,
                        y: .5
                    }
                }, i.createElement(B.S, {
                    label: Object(y.d)("Video Link", "ClipsManagerSocialShare")
                }, i.createElement(B.Y, {
                    readOnly: !0,
                    type: B.Z.Text,
                    value: e.clip.url,
                    onFocus: G
                }))), i.createElement(B._2, {
                    padding: {
                        x: 1,
                        y: .5
                    }
                }, i.createElement(B.S, {
                    label: Object(y.d)("Embed Video", "ClipsManagerSocialShare")
                }, i.createElement(B.Y, {
                    readOnly: !0,
                    type: B.Z.Text,
                    value: Object(U.a)(e.clip.embedURL),
                    onFocus: G
                })))))
            }),
            P = n("QIXk"),
            W = n("iFCf"),
            Q = (n("qCag"), {
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
                        return n.props.data.currentUser.id === (e && e.curator && e.curator.id) ? i.createElement(P.a, {
                            clipId: e.id,
                            clipSlug: e.slug,
                            clipTitle: e.title,
                            clipBroadcasterId: e.broadcaster ? Number(e.broadcaster.id) : 0,
                            location: d.PageviewLocation.MyClipsManager
                        }) : i.createElement(B.S, {
                            label: Object(y.d)("Title", "ClipsManagerTitleEdit")
                        }, i.createElement(B._2, {
                            display: B.N.Flex,
                            flexWrap: B.Q.NoWrap
                        }, i.createElement(B._2, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(B._35, null, e.title))))
                    }, n.renderGameLink = function(e) {
                        return e.game ? i.createElement(x.a, {
                            "data-test-selector": Q.GAME_LINK,
                            to: Object(L.c)(e.game.name),
                            title: e.game.name
                        }, e.game.name) : null
                    }, n.renderModerationIcon = function() {
                        if (!n.props.clip.broadcaster || n.props.data.currentUser.id !== n.props.clip.broadcaster.id) return null;
                        var e = Object(y.d)("Moderation", "ClipsManagerExpandedRow");
                        return i.createElement(B._43, {
                            label: e
                        }, i.createElement(B._2, {
                            margin: {
                                right: .5
                            }
                        }, i.createElement(A.a, null, i.createElement(B.v, {
                            ariaLabel: e,
                            type: B.w.Hollow,
                            icon: B._16.Sword,
                            "data-test-selector": Q.MODERATION_BUTTON
                        }), i.createElement(B.p, {
                            "data-test-selector": Q.MODERATION_DROPDOWN,
                            direction: B.q.BottomRight
                        }, i.createElement(B._2, {
                            padding: {
                                y: .5
                            }
                        }, i.createElement(B._25, {
                            borderBottom: !0
                        }, i.createElement(B._0, {
                            onClick: n.openTimeoutUserModal
                        }, i.createElement(B._2, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(y.d)("Timeout User (24 hr)", "ClipsManagerExpandedRow"))), i.createElement(B._0, {
                            onClick: n.openBanUserModal
                        }, i.createElement(B._2, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(y.d)("Ban User", "ClipsManagerExpandedRow")))), i.createElement(B._0, {
                            onClick: n.openDeleteAllModal
                        }, i.createElement(B._2, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(y.d)("Delete All Clips from Video", "ClipsManagerExpandedRow"))))))))
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
                        n.openModal(O.d, {
                            slug: n.props.clip.slug,
                            onClose: n.closeModal,
                            onDelete: n.props.onDelete
                        })
                    }, n.openTimeoutUserModal = function() {
                        n.openModal(O.b, {
                            clip: n.props.clip,
                            isTemporary: !0,
                            onClose: n.closeModal
                        })
                    }, n.openBanUserModal = function() {
                        n.openModal(O.b, {
                            clip: n.props.clip,
                            isTemporary: !1,
                            onClose: n.closeModal
                        })
                    }, n.openDeleteAllModal = function() {
                        n.openModal(O.e, {
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
                        t = Object(y.c)(new Date(e.createdAt), "medium"),
                        n = Object(y.d)("Close", "ClipsManagerExpandedRow"),
                        a = Object(y.d)("Delete", "ClipsManagerExpandedRow");
                    return i.createElement(I.a, {
                        onClickOut: this.onClickOutside
                    }, i.createElement(B._25, {
                        "data-target": this.props.dataTarget,
                        background: B.m.Base,
                        display: B.N.Block,
                        elevation: 3,
                        className: "clmgr-table__row-expanded",
                        position: B._9.Relative,
                        margin: {
                            bottom: 3
                        }
                    }, i.createElement(B._25, {
                        display: B.N.Flex,
                        justifyContent: B._1.Between,
                        alignItems: B.c.Center,
                        padding: 1,
                        background: B.m.Alt,
                        borderBottom: !0
                    }, i.createElement(B._43, {
                        label: n,
                        align: B._44.Left
                    }, i.createElement(B._2, {
                        flexGrow: 0
                    }, i.createElement(B.v, {
                        ariaLabel: n,
                        type: B.w.Hollow,
                        icon: B._16.Close,
                        onClick: this.props.onClose
                    }), i.createElement(B.p, {
                        direction: B.q.TopLeft
                    }))), i.createElement(B._2, {
                        display: B.N.Flex
                    }, this.renderModerationIcon(), i.createElement(B._43, {
                        label: a
                    }, i.createElement(B._2, {
                        margin: {
                            right: .5
                        }
                    }, i.createElement(B.v, {
                        ariaLabel: a,
                        type: B.w.Hollow,
                        icon: B._16.Trash,
                        onClick: this.openDeleteModal
                    }))), i.createElement(B._2, {
                        margin: {
                            right: .5
                        }
                    }, i.createElement(H, {
                        clip: this.props.clip,
                        pageType: this.props.pageType
                    })), i.createElement(B._43, {
                        label: Object(y.d)("Watch on Clips Page", "ClipsManagerExpandedRow"),
                        align: B._44.Right
                    }, i.createElement(B.v, {
                        ariaLabel: Object(y.d)("Popout", "ClipsManagerExpandedRow"),
                        type: B.w.Hollow,
                        linkTo: Object(F.a)(this.props.clip.url, {
                            tt_medium: "my_clips"
                        }),
                        icon: B._16.Popout
                    })))), i.createElement(B._2, {
                        padding: 1
                    }, i.createElement(B.U, {
                        gutterSize: B.V.None
                    }, i.createElement(B.J, {
                        cols: {
                            default: 12,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 5,
                            xl: 5
                        }
                    }, i.createElement(B._2, {
                        position: B._9.Relative
                    }, i.createElement(B.j, {
                        ratio: B.k.Aspect16x9
                    }, i.createElement("iframe", {
                        src: Object(F.a)(e.embedURL, {
                            autoplay: "false"
                        }),
                        frameBorder: 0,
                        width: "100%",
                        height: "100%",
                        scrolling: "no",
                        allowFullScreen: !0
                    })))), i.createElement(B.J, {
                        cols: {
                            default: 12,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 7,
                            xl: 7
                        }
                    }, i.createElement(B._2, {
                        display: B.N.Flex,
                        justifyContent: B._1.Center
                    }, i.createElement(B._2, {
                        flexGrow: 1,
                        padding: 1
                    }, this.renderTitle())), i.createElement(B._25, {
                        background: B.m.Alt,
                        margin: 1,
                        padding: 1,
                        border: !0
                    }, i.createElement(B.U, null, i.createElement(B.J, {
                        cols: {
                            default: 4
                        }
                    }, i.createElement(B._2, {
                        padding: {
                            y: .5
                        }
                    }, i.createElement(B._35, {
                        bold: !0
                    }, Object(y.d)("Created On", "ClipsManagerExpandedRow")), i.createElement(B._35, {
                        ellipsis: !0,
                        transform: B._39.Capitalize,
                        title: t
                    }, t))), i.createElement(B.J, {
                        cols: {
                            default: 4
                        }
                    }, i.createElement(B._2, {
                        padding: {
                            y: .5
                        }
                    }, i.createElement(B._35, {
                        bold: !0
                    }, Object(y.d)("Clip Length", "ClipsManagerExpandedRow")), i.createElement(B._35, {
                        ellipsis: !0
                    }, Object(y.d)("{seconds, number}s", {
                        seconds: this.props.clip.durationSeconds
                    }, "ClipsManagerExpandedRow")))), i.createElement(B.J, {
                        cols: {
                            default: 4
                        }
                    }, i.createElement(B._2, {
                        padding: {
                            y: .5
                        }
                    }, i.createElement(B._35, {
                        bold: !0
                    }, Object(y.d)("Views", "ClipsManagerExpandedRow")), i.createElement(B._2, {
                        display: B.N.Flex,
                        alignItems: B.c.Center,
                        ellipsis: !0
                    }, i.createElement(B._15, {
                        asset: B._16.GlyphViews
                    }), i.createElement(B._2, {
                        padding: {
                            left: .5
                        }
                    }, Object(y.f)(e.viewCount, {
                        maximumFractionDigits: 1
                    }))))), i.createElement(B.J, {
                        cols: {
                            default: 4
                        }
                    }, e.broadcaster && i.createElement(B._2, {
                        padding: {
                            y: .5
                        }
                    }, i.createElement(B._35, {
                        bold: !0
                    }, Object(y.d)("Channel", "ClipsManagerExpandedRow")), i.createElement(B._35, {
                        ellipsis: !0
                    }, i.createElement(x.a, {
                        "data-test-selector": Q.CHANNEL_LINK,
                        to: "/" + e.broadcaster.login + "/clips",
                        title: e.broadcaster.displayName
                    }, e.broadcaster.displayName)))), i.createElement(B.J, {
                        cols: {
                            default: 4
                        }
                    }, i.createElement(B._2, {
                        padding: {
                            y: .5
                        }
                    }, i.createElement(B._35, {
                        bold: !0
                    }, Object(y.d)("Game", "ClipsManagerExpandedRow")), i.createElement(B._35, {
                        ellipsis: !0
                    }, this.renderGameLink(e)))))))))))
                }, t
            }(i.Component),
            K = Object(C.d)("ClipsManagerExpandedRow")(Object(T.a)(W)(q));
        var z = Object(v.b)(null, function(e) {
                return Object(b.b)({
                    showModal: R.d,
                    closeModal: R.c
                }, e)
            })(K),
            J = n("6BvN"),
            Y = n("MAZT"),
            $ = n("uTyw");
        var Z = n("Qfvd");
        n("uHjT");
        var X = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderCardContent = function() {
                        var e, n = t.props.searchResult;
                        return function(e) {
                            var t = e;
                            return void 0 !== t.title && void 0 !== t.popularity
                        }(n) ? i.createElement(B.A, {
                            row: !0
                        }, i.createElement(B.C, {
                            size: B.D.Size3,
                            aspect: B.k.Aspect3x4,
                            src: (e = n.title, Z.a + "/" + e + "-" + Z.b + ".jpg"),
                            alt: n.thumbnailAltText
                        }), i.createElement(B.B, {
                            overflow: B._5.Hidden
                        }, i.createElement(B._2, {
                            padding: {
                                left: 1
                            }
                        }, i.createElement(B._35, {
                            type: B._40.H5
                        }, n.title), i.createElement(B._35, {
                            className: "clmgr-result__subtitle",
                            ellipsis: !0
                        }, Object(y.d)("{numViewers, number} viewers", {
                            numViewers: n.popularity
                        }, "ClipsManagerSearch"))))) : function(e) {
                            return void 0 !== e.followers
                        }(n) ? i.createElement(B.A, {
                            row: !0
                        }, i.createElement(B.C, {
                            size: B.D.Size3,
                            aspect: B.k.Aspect1x1,
                            src: n.thumbnail,
                            alt: n.thumbnailAltText
                        }), i.createElement(B.B, {
                            overflow: B._5.Hidden
                        }, i.createElement(B._2, {
                            padding: {
                                left: 1
                            }
                        }, i.createElement(B._35, {
                            type: B._40.H5
                        }, n.name), i.createElement(B._35, {
                            className: "clmgr-result__subtitle",
                            ellipsis: !0
                        }, Object(y.d)("{numFollowers, number} followers", {
                            numFollowers: n.followers
                        }, "ClipsManagerSearch"))))) : void 0
                    }, t.onMouseEnter = function() {
                        t.props.onResultHover(t.props.index)
                    }, t.onClick = function() {
                        t.props.onResultSelect(t.props.index)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(B._0, {
                        onClick: this.onClick
                    }, i.createElement(B.W, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, i.createElement("div", {
                        onMouseEnter: this.onMouseEnter,
                        onKeyDown: this.props.onKeyDown,
                        "data-ref-index": this.props.index,
                        ref: this.props.refDelegate,
                        tabIndex: -1,
                        className: "clmgr-result"
                    }, this.renderCardContent())))
                }, t
            }(i.Component),
            ee = {
                NO_RESULTS: "cmgr-no-search-results",
                RESULTS_MENU: "cmgr-search-results-menu",
                SEARCH_INPUT: "cmgr-search-input",
                CHANNEL_SEARCH: "cmgr-channel-search",
                GAME_SEARCH: "cmgr-game-search"
            },
            te = 5,
            ne = {
                currentCategory: N.a.Games,
                gameResults: [],
                userResults: [],
                isShowingResults: !1,
                isLoading: !1,
                searchTerm: "",
                focusedIndex: null
            },
            ae = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderSearchOptions = function() {
                        var e = [i.createElement(B._26, {
                            active: n.state.currentCategory === N.a.Games,
                            onClick: n.setSearchTypeGame,
                            key: ee.GAME_SEARCH,
                            "data-test-selector": ee.GAME_SEARCH
                        }, Object(y.d)("Game Search", "ClipsManagerSearch"))];
                        return n.props.userRole !== m.Broadcaster && e.push(i.createElement(B._26, {
                            active: n.state.currentCategory === N.a.Users,
                            onClick: n.setSearchTypeChannel,
                            key: ee.CHANNEL_SEARCH,
                            "data-test-selector": ee.CHANNEL_SEARCH
                        }, Object(y.d)("Channel Search", "ClipsManagerSearch"))), i.createElement(B._27, null, e)
                    }, n.renderSearchResults = function() {
                        if (n.state.isLoading) return i.createElement(B._4, null);
                        var e = n.state.currentCategory;
                        if (e === N.a.Users) {
                            var t = n.state.userResults;
                            return 0 === t.length ? n.renderNoResults() : t.map(function(e, t) {
                                return i.createElement(X, {
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
                        if (e === N.a.Games) {
                            var a = n.state.gameResults;
                            return 0 === a.length ? n.renderNoResults() : a.map(function(e, t) {
                                return i.createElement(X, {
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
                        return i.createElement(B._2, {
                            "data-test-selector": ee.NO_RESULTS,
                            display: B.N.Flex,
                            flexDirection: B.P.Column
                        }, i.createElement(B._25, {
                            textAlign: B._36.Center,
                            padding: {
                                y: 5
                            }
                        }, i.createElement(B._15, {
                            asset: B._16.NavSearch,
                            height: 36,
                            width: 36,
                            type: B._17.Brand
                        }), i.createElement(B._35, {
                            type: B._40.H4
                        }, Object(y.d)("No results found", "ClipsManagerSearch")), i.createElement(B._35, {
                            type: B._40.P,
                            color: B.I.Alt
                        }, Object(y.d)("They're probably in another castle", "ClipsManagerSearch"))))
                    }, n.setSearchResultRefs = function(e) {
                        if (null !== e) {
                            var t = e.dataset.refIndex;
                            if (t) {
                                var a = parseInt(t, 0);
                                n.searchResultRefs[a] = e
                            }
                        }
                    }, n.setSearchTypeGame = function() {
                        n.setState(r.__assign({}, ne, {
                            currentCategory: N.a.Games
                        })), n.context.setSearchType(N.a.Games)
                    }, n.setSearchTypeChannel = function() {
                        n.setState(r.__assign({}, ne, {
                            currentCategory: N.a.Users
                        })), n.context.setSearchType(N.a.Users)
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
                            case J.a.Esc:
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
                            case J.a.Up:
                                return void n.focusNext(!1);
                            case J.a.Down:
                                return void n.focusNext(!0);
                            case J.a.Enter:
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
                            var a = n.focusedIndex;
                            return {
                                focusedIndex: null === a ? e ? 0 : t - 1 : e ? a + 1 >= t ? 0 : a + 1 : a - 1 < 0 ? t - 1 : a - 1,
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
                        var t, a = n.state,
                            r = a.currentCategory,
                            i = a.gameResults,
                            l = a.userResults;
                        if (r === N.a.Games) t = i[e].title, n.context.setSearchTerm(t);
                        else {
                            var s = l[e];
                            t = s.name, n.context.setSearchTerm(s.id)
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
                        return n.state.currentCategory === N.a.Games ? n.state.gameResults.length : n.state.userResults.length
                    }, n.performQuery = function() {
                        var e = n.state,
                            t = e.isLoading,
                            a = e.searchTerm,
                            r = e.currentCategory;
                        t && n.setState({
                            isLoading: !0,
                            isShowingResults: !0
                        }), n.searchClient.queryForType(r, a, "", {
                            hitsPerPage: te
                        }).then(function(e) {
                            if (e) {
                                var t = Object($.b)({
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
                    }, n.searchClient = new Y.a(y.a.algoliaApplicationID, y.a.algoliaAPIKey), n.inputTimer = null, n.state = ne, n.searchResultRefs = [], n
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
                        a = t.focusedIndex;
                    null !== a && null === n ? this.blurResultRef(a) : null !== n && a !== n && this.focusResultRef(n)
                }, t.prototype.render = function() {
                    return i.createElement(B._2, {
                        position: B._9.Relative
                    }, i.createElement(B._2, {
                        margin: {
                            bottom: 1
                        }
                    }, this.renderSearchOptions()), i.createElement(I.a, {
                        onClickOut: this.hideResults
                    }, i.createElement(B._18, {
                        id: ee.SEARCH_INPUT,
                        refDelegate: this.setSearchInputRef,
                        onChange: this.onChange,
                        onFocus: this.onFocus,
                        onKeyDown: this.onKeyDown,
                        value: this.state.searchTerm,
                        placeholder: this.state.currentCategory === N.a.Games ? Object(y.d)("Enter a Game", "ClipsManagerSearch") : Object(y.d)("Enter a Channel", "ClipsManagerSearch")
                    }), i.createElement(B.p, {
                        "data-test-selector": ee.RESULTS_MENU,
                        direction: B.q.Bottom,
                        noTail: !0,
                        size: B.r.Large,
                        show: this.state.isShowingResults
                    }, this.renderSearchResults())))
                }, t.contextTypes = {
                    setSearchTerm: S.func,
                    setSearchType: S.func,
                    clearSearch: S.func
                }, t
            }(i.Component),
            re = Object(C.d)("ClipsManagerSearch")(ae),
            ie = (n("3NJ6"), "cmgr-my-clips-radio"),
            le = "cmgr-clips-of-me-radio",
            se = function(e) {
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
                    return i.createElement(B._2, {
                        className: "clmgr-filters-container"
                    }, i.createElement(B.U, {
                        gutterSize: B.V.None
                    }, i.createElement(B.J, {
                        cols: {
                            default: 12,
                            xs: 6,
                            sm: 6,
                            md: 12,
                            lg: 12
                        }
                    }, i.createElement(B._2, {
                        margin: {
                            bottom: .5
                        }
                    }, i.createElement(B._2, {
                        margin: {
                            bottom: .5
                        }
                    }, i.createElement(B._35, {
                        fontSize: B.R.Size5
                    }, Object(y.d)("List View", "ClipsManagerTable"))), i.createElement(B._2, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(B._2, {
                        margin: {
                            bottom: .5
                        }
                    }, i.createElement(B._14, {
                        "data-test-selector": ie,
                        "data-a-target": ie,
                        label: Object(y.d)("Clips I've Created", "ClipsManagerTable"),
                        name: "MyClips",
                        checked: this.props.currentUserRole === m.Curator,
                        onChange: this.setCuratorRole
                    })), i.createElement(B._2, null, i.createElement(B._14, {
                        "data-test-selector": le,
                        "data-a-target": le,
                        label: Object(y.d)("Clips of My Channel", "ClipsManagerTable"),
                        name: "ClipsOfMyChannel",
                        checked: this.props.currentUserRole === m.Broadcaster,
                        onChange: this.setBroadcasterRole
                    }))))), i.createElement(B.J, {
                        cols: {
                            default: 12,
                            xs: 6,
                            sm: 6,
                            md: 12,
                            lg: 12
                        }
                    }, i.createElement(re, {
                        userRole: this.props.currentUserRole
                    }))))
                }, t
            }(i.Component),
            oe = Object(C.d)("ClipsManagerRightColumn")(se),
            ce = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleImageError = function() {
                        n.setState({
                            imageURL: y.a.defaultStreamPreviewURL
                        })
                    }, n.state = {
                        imageURL: t.imageURL
                    }, n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement("img", {
                        src: this.state.imageURL,
                        alt: this.state.imageURL,
                        onError: this.handleImageError,
                        className: this.props.className
                    })
                }, t
            }(i.Component),
            de = (n("1f48"), "clips-manager-row-checkbox"),
            ue = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.selectClip = function() {
                        var e = !t.props.isSelected;
                        t.props.onSelectClip(t.props.clip.slug, e)
                    }, t.onRowClick = function(e) {
                        var n = e.target;
                        null !== t.checkboxRef && n === t.checkboxRef || n.parentElement && n.parentElement.dataset.testSelector === de || t.props.onRowClick(t.props.clip)
                    }, t.setCheckboxRef = function(e) {
                        t.checkboxRef = e
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.clip,
                        t = Object(y.g)(new Date(e.createdAt));
                    return i.createElement(B._2, {
                        "data-a-target": "clips-manager-table-row-container",
                        className: "clmgr-table__row",
                        display: B.N.Flex,
                        overflow: B._5.Hidden,
                        alignItems: B.c.Center
                    }, i.createElement(B._0, {
                        onClick: this.onRowClick,
                        alpha: !0
                    }, i.createElement(B.U, {
                        "data-target": this.props.dataTarget
                    }, i.createElement(B.J, {
                        cols: 4
                    }, i.createElement(B._2, {
                        display: B.N.Flex,
                        flexWrap: B.Q.NoWrap,
                        alignItems: B.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, i.createElement(B._2, {
                        flexShrink: 0,
                        position: B._9.Relative
                    }, i.createElement(B._25, {
                        className: "clmgr-checkbox-bg",
                        background: B.m.Base,
                        position: B._9.Absolute
                    }), i.createElement(B.H, {
                        refDelegate: this.setCheckboxRef,
                        "data-test-selector": de,
                        label: " ",
                        checked: this.props.isSelected,
                        onChange: this.selectClip
                    })), i.createElement(B.W, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(ce, {
                        imageURL: this.props.clip.thumbnailURL,
                        className: "clmgr-thumb"
                    })), i.createElement(B._35, {
                        type: B._40.H5,
                        title: e.title,
                        ellipsis: !0
                    }, e.title))), i.createElement(B.J, {
                        cols: 2
                    }, e.broadcaster && i.createElement(B._2, {
                        display: B.N.Flex,
                        alignItems: B.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, i.createElement(B.W, {
                        ellipsis: !0
                    }, i.createElement(x.a, {
                        to: "/" + e.broadcaster.login + "/clips",
                        title: e.broadcaster.displayName
                    }, e.broadcaster.displayName)))), i.createElement(B.J, {
                        cols: 2
                    }, i.createElement(B._2, {
                        display: B.N.Flex,
                        alignItems: B.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, this.renderGameLink(e))), i.createElement(B.J, {
                        cols: 2
                    }, i.createElement(B._2, {
                        display: B.N.Flex,
                        alignItems: B.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, i.createElement(B._35, {
                        "data-test-selector": "clips-manager-row-time-created",
                        "data-a-target": "clips-manager-row-time-created",
                        title: t,
                        transform: B._39.Capitalize,
                        ellipsis: !0
                    }, t))), i.createElement(B.J, {
                        cols: 2
                    }, i.createElement(B._2, {
                        display: B.N.Flex,
                        alignItems: B.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, i.createElement(B._2, {
                        display: B.N.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: .5
                        }
                    }, i.createElement(B._15, {
                        asset: B._16.GlyphViews
                    })), i.createElement(B._35, {
                        "data-test-selector": "clips-manager-row-view-count",
                        "data-a-target": "clips-manager-row-view-count"
                    }, Object(y.f)(e.viewCount, {
                        maximumFractionDigits: 1
                    })))))))
                }, t.prototype.renderGameLink = function(e) {
                    return e.game ? i.createElement(B.W, {
                        ellipsis: !0
                    }, i.createElement(x.a, {
                        to: Object(L.c)(e.game.name),
                        title: e.game.name
                    }, e.game.name)) : null
                }, t
            }(i.Component),
            pe = (n("EDaX"), "clips-manager-select-all"),
            me = "clips-manager-batch-delete",
            he = "clips-manager-views-sort",
            ge = "clips-manager-createdat-sort",
            fe = "clips-manager-empty-body",
            Ce = function(e) {
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
                            var a;
                            if (t) a = n.selectedClipSlugs.concat([e]);
                            else {
                                var r = n.selectedClipSlugs.indexOf(e);
                                a = n.selectedClipSlugs.splice(r, 1)
                            }
                            return {
                                selectedClipSlugs: a
                            }
                        })
                    }, n.toggleViewsSort = function() {
                        n.props.sort === a.ViewsDescending ? n.props.updateSort(a.ViewsAscending) : n.props.updateSort(a.ViewsDescending)
                    }, n.toggleCreatedAtSort = function() {
                        n.props.sort === a.CreatedAtDescending ? n.props.updateSort(a.CreatedAtAscending) : n.props.updateSort(a.CreatedAtDescending)
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
                        n.props.showModal(O.d, {
                            slug: e,
                            onClose: n.props.closeModal,
                            onDelete: n.props.onDeleteClip
                        })
                    }, n.renderBatchDeleteModal = function() {
                        1 === n.state.selectedClipSlugs.length ? n.renderDeleteClipModal(n.state.selectedClipSlugs[0]) : n.props.showModal(O.c, {
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
                    return this.props.error || !this.props.userID ? null : i.createElement(B._2, {
                        className: "clmgr-body-wrap",
                        display: B.N.Flex,
                        flexWrap: B.Q.NoWrap,
                        flexDirection: B.P.ColumnReverse,
                        breakpointMedium: {
                            flexDirection: B.P.Row
                        }
                    }, i.createElement(B._2, {
                        className: "clmgr-table-wrap",
                        display: B.N.Flex,
                        flexGrow: 1,
                        flexWrap: B.Q.Wrap,
                        position: B._9.Relative
                    }, i.createElement(B._25, {
                        background: B.m.Base,
                        border: !0,
                        elevation: 3,
                        margin: {
                            bottom: .5
                        },
                        fullWidth: !0
                    }, this.renderHeaderRow()), i.createElement(B._25, {
                        fullWidth: !0,
                        fullHeight: !0
                    }, i.createElement(D.b, null, i.createElement(B._25, {
                        background: B.m.Base,
                        elevation: 2,
                        border: !0
                    }, this.props.clips.length > 0 && !this.state.isNewQueryLoading && this.props.clips.map(function(t) {
                        return e.renderClipRow(t)
                    }), this.state.isNewQueryLoading && this.props.loading && i.createElement(B._2, {
                        display: B.N.Flex,
                        alignItems: B.c.Center,
                        justifyContent: B._1.Center,
                        padding: 1,
                        fullWidth: !0
                    }, i.createElement(B._4, {
                        delay: 0
                    })), 0 === this.props.clips.length && !this.props.loading && i.createElement(B._2, {
                        display: B.N.Flex,
                        justifyContent: B._1.Center,
                        textAlign: B._36.Center,
                        padding: 2,
                        fullWidth: !0,
                        fullHeight: !0
                    }, i.createElement(B._35, {
                        type: B._40.H4,
                        color: B.I.Alt2,
                        "data-test-selector": fe
                    }, Object(y.d)("Create Clips to fill this space with the most memorable moments from your favorite Twitch streams and videos. Just hit the Clip button on the video player to try it out. {learnHowLink} to use Clips.", {
                        learnHowLink: i.createElement("a", {
                            target: "_blank",
                            rel: "noopener",
                            href: "https://help.twitch.tv/customer/portal/articles/2442508-how-to-use-clips"
                        }, Object(y.d)("Learn how", "ClipsManagerTable"))
                    }, "ClipsManagerTable"))), i.createElement(D.a, {
                        loadMore: this.loadMore,
                        enabled: !this.props.loading && this.props.hasNextPage
                    }), this.props.loading && !this.state.isNewQueryLoading && i.createElement(B._2, {
                        display: B.N.Flex,
                        alignItems: B.c.Center,
                        justifyContent: B._1.Center,
                        padding: 1,
                        fullWidth: !0
                    }, i.createElement(B._4, {
                        delay: 0
                    })))))), i.createElement(B._2, {
                        breakpointMedium: {
                            margin: {
                                left: 2
                            }
                        },
                        flexShrink: 0
                    }, i.createElement(oe, {
                        updateUserRole: this.props.updateUserRole,
                        currentUserRole: this.props.userRole
                    })))
                }, t.prototype.renderHeaderRow = function() {
                    var e = this.state.selectedClipSlugs.length > 0,
                        t = e && this.state.selectedClipSlugs.length === this.props.clips.length,
                        n = i.createElement(B.H, {
                            "data-test-selector": pe,
                            label: " ",
                            checked: t,
                            onChange: this.toggleClipsSelection,
                            disabled: this.state.isNewQueryLoading && this.props.loading
                        });
                    if (e) return i.createElement(B.U, null, i.createElement(B.J, {
                        cols: 12
                    }, i.createElement(B._2, {
                        display: B.N.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        fullHeight: !0
                    }, i.createElement(B._2, {
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, n), i.createElement(B._2, {
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, i.createElement(B._35, null, Object(y.d)("{numClips, number} selected", {
                        numClips: this.state.selectedClipSlugs.length
                    }, "ClipsManagerTable"))), i.createElement(B._2, {
                        flexShrink: 0,
                        alignItems: B.c.Center,
                        fullHeight: !0
                    }, i.createElement(B.v, {
                        ariaLabel: Object(y.d)("Delete Clip", "ClipsManagerTable"),
                        icon: B._16.Trash,
                        onClick: this.renderBatchDeleteModal,
                        "data-test-selector": me
                    })))));
                    var r = this.props.sort,
                        l = r === a.ViewsAscending || r === a.ViewsDescending,
                        s = r === a.CreatedAtAscending || r === a.CreatedAtDescending,
                        o = Object(y.d)("Created", "ClipsManagerTable"),
                        c = Object(y.d)("Views", "ClipsManagerTable");
                    return i.createElement(B.U, null, i.createElement(B.J, {
                        cols: 4
                    }, i.createElement(B._2, {
                        display: B.N.Flex,
                        alignItems: B.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, i.createElement(B._2, {
                        display: B.N.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, n), i.createElement(B._35, null, Object(y.d)("Info", "ClipsManagerTable")))), i.createElement(B.J, {
                        cols: 2
                    }, i.createElement(B._2, {
                        padding: 1
                    }, Object(y.d)("Channel", "ClipsManagerTable"))), i.createElement(B.J, {
                        cols: 2
                    }, i.createElement(B._2, {
                        padding: 1
                    }, Object(y.d)("Game", "ClipsManagerTable"))), i.createElement(B.J, {
                        cols: 2
                    }, i.createElement(B._2, {
                        padding: {
                            y: .5,
                            right: 1
                        },
                        display: B.N.Flex,
                        fullHeight: !0
                    }, i.createElement(B._0, {
                        alpha: !0,
                        onClick: this.toggleCreatedAtSort,
                        "data-test-selector": ge,
                        "data-a-target": ge
                    }, i.createElement(B._2, {
                        display: B.N.Flex,
                        flexWrap: B.Q.NoWrap,
                        alignContent: B.b.Center,
                        justifyContent: B._1.Between,
                        padding: {
                            x: 1
                        }
                    }, i.createElement(B._35, {
                        color: B.I.Link,
                        title: o,
                        bold: !0,
                        ellipsis: !0
                    }, o), s && i.createElement(B._15, {
                        asset: r === a.CreatedAtDescending ? B._16.GlyphArrDown : B._16.GlyphArrUp,
                        type: B._17.Brand
                    }))))), i.createElement(B.J, {
                        cols: 2
                    }, i.createElement(B._2, {
                        padding: {
                            y: .5,
                            right: 1
                        },
                        display: B.N.Flex,
                        fullHeight: !0
                    }, i.createElement(B._0, {
                        alpha: !0,
                        onClick: this.toggleViewsSort,
                        "data-test-selector": he,
                        "data-a-target": he
                    }, i.createElement(B._2, {
                        display: B.N.Flex,
                        flexWrap: B.Q.NoWrap,
                        alignContent: B.b.Center,
                        justifyContent: B._1.Between,
                        padding: {
                            x: 1
                        }
                    }, i.createElement(B._35, {
                        color: B.I.Link,
                        title: c,
                        bold: !0,
                        ellipsis: !0
                    }, c), l && i.createElement(B._15, {
                        asset: r === a.ViewsDescending ? B._16.GlyphArrDown : B._16.GlyphArrUp,
                        type: B._17.Brand
                    }))))))
                }, t.prototype.renderClipRow = function(e) {
                    var t = this.state.selectedClipSlugs.includes(e.slug);
                    if (e.slug === this.state.expandedSlug) {
                        var n = this.props.userRole === m.Curator ? M.a.MyClips : M.a.ClipsOfMyChannel;
                        return i.createElement(z, {
                            key: e.slug,
                            dataTarget: "clips-manager-table-row",
                            clip: e,
                            onClose: this.closeExpandedRow,
                            onDelete: this.deleteClip,
                            onDeleteAll: this.deleteAllClips,
                            pageType: n
                        })
                    }
                    return i.createElement(ue, {
                        key: e.slug,
                        dataTarget: "clips-manager-table-row",
                        clip: e,
                        isSelected: t,
                        onSelectClip: this.selectClip,
                        onRowClick: this.expandClipRow
                    })
                }, t
            }(i.Component),
            ve = n("zlRb");
        var be = Object(l.compose)(Object(C.d)("ClipsManagerTable"), Object(T.a)(ve, {
                options: function(e) {
                    var t = {
                        sort: p[e.sort],
                        period: f[u.All]
                    };
                    return e.userRole === m.Broadcaster ? t.broadcasterID = e.channelID : t.curatorID = e.channelID, e.searchFilterTerm && (e.searchFilterType === N.a.Users && e.userRole !== m.Broadcaster ? t.broadcasterID = e.searchFilterTerm : t.gameName = e.searchFilterTerm), {
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
                                variables: r.__assign({}, e.data.variables, {
                                    cursor: n
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult,
                                        a = e.user.clips.edges,
                                        i = n.user.clips.edges;
                                    return {
                                        user: r.__assign({}, n.user, {
                                            clips: r.__assign({}, n.user.clips, {
                                                edges: Object(w.b)(a, i)
                                            })
                                        })
                                    }
                                }
                            })
                        },
                        onDeleteClip: function(t) {
                            Object(w.d)(ve, e.data.variables, function(e) {
                                var n = e.user.clips.edges;
                                return e.user.clips.edges = n.filter(function(e) {
                                    return e.node.slug !== t
                                }), e
                            })
                        },
                        onDeleteAllClips: function(t) {
                            Object(w.d)(ve, e.data.variables, function(e) {
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
                            Object(w.d)(ve, e.data.variables, function(e) {
                                var n = e.user.clips.edges;
                                return e.user.clips.edges = n.filter(function(e) {
                                    var n = e.node.slug;
                                    return !t.includes(n)
                                }), e
                            })
                        }
                    }
                }
            }), Object(v.b)(null, function(e) {
                return Object(b.b)({
                    showModal: R.d,
                    closeModal: R.c
                }, e)
            }))(Ce),
            _e = n("tYdz"),
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
                        sortOption: a.CreatedAtDescending,
                        searchType: N.a.Games,
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
                    return this.props.data.loading || this.props.data.error || !this.props.data.currentUser ? null : i.createElement(B._2, {
                        className: "scroll-y",
                        padding: {
                            x: 3,
                            top: 3
                        },
                        fullHeight: !0
                    }, i.createElement(B._2, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(B._35, {
                        type: B._40.H1,
                        fontSize: B.R.Size3
                    }, Object(y.d)("Clips", "ClipsManagerPage"))), i.createElement(be, {
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
                    setSearchTerm: S.func,
                    setSearchType: S.func,
                    clearSearch: S.func
                }, t
            }(i.Component),
            ke = Object(l.compose)(Object(C.d)("ClipsManager"), Object(T.a)(_e), s.e)(Ee);
        var Se = Object(v.b)(function(e) {
            return {
                isLoggedIn: Object(k.d)(e)
            }
        }, function(e) {
            return Object(b.b)({
                login: function() {
                    return Object(E.f)(_.a.ClipsManager)
                }
            }, e)
        })(ke);

        function ye(e, t) {
            return t === m.Curator ? "/" + e + "/manager/clips" : "/" + e + "/manager/clips/channel"
        }
        var Te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onRoleChange = function(e) {
                        e !== m.Broadcaster && t.props.history.push({
                            pathname: ye(t.props.match.params.channelName, e)
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(Se, {
                        channelName: this.props.match.params.channelName,
                        role: m.Broadcaster,
                        onRoleChange: this.onRoleChange
                    })
                }, t
            }(i.Component),
            Ne = Object(l.compose)(Object(C.d)("ClipsOfMeManagerPage", {
                destination: c.a.ChannelClipsManager
            }), Object(o.a)({
                location: d.PageviewLocation.ChannelClipsManager,
                properties: {
                    is_live: !1
                }
            }), s.e)(Te),
            we = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onRoleChange = function(e) {
                        e !== m.Curator && t.props.history.push({
                            pathname: ye(t.props.match.params.channelName, e)
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(Se, {
                        channelName: this.props.match.params.channelName,
                        role: m.Curator,
                        onRoleChange: this.onRoleChange
                    })
                }, t
            }(i.Component),
            Re = Object(l.compose)(Object(C.d)("MyClipsManagerPage", {
                destination: c.a.MyClipsManager
            }), Object(o.a)({
                location: d.PageviewLocation.MyClipsManager,
                properties: {
                    is_live: !1
                }
            }), s.e)(we);
        n.d(t, "ChannelClipsManagerPage", function() {
            return Ne
        }), n.d(t, "MyClipsManagerPage", function() {
            return Re
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
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("6sO2"),
            l = n("rCmJ"),
            s = n("Odds"),
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
                        return t.props.successContent ? r.createElement(s._25, {
                            "data-test-selector": o.SUCCESS_BODY,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: s.m.Alt,
                            fullWidth: !0
                        }, r.createElement(s._35, {
                            type: s._40.Strong
                        }, t.props.successContent)) : null
                    }, t.renderError = function() {
                        return t.props.errorContent ? r.createElement(s._25, {
                            "data-test-selector": o.ERROR_BODY,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: s.m.Alt,
                            fullWidth: !0
                        }, r.createElement(s._35, {
                            type: s._40.Strong,
                            color: s.I.Error
                        }, t.props.errorContent)) : null
                    }, t.onSubmit = function() {
                        t.props.onSubmit()
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.successContent ? r.createElement(l.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(s._25, {
                        padding: 2,
                        background: s.m.Base,
                        className: "clip-modal"
                    }, this.renderSuccess(), r.createElement(s._2, {
                        display: s.N.Flex,
                        justifyContent: s._1.Center
                    }, r.createElement(s._2, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(s.u, {
                        "data-test-selector": o.CANCEL_BUTTON,
                        onClick: this.props.onClose
                    }, Object(i.d)("Close", "ClipsModal")))))) : r.createElement(l.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(s._25, {
                        padding: 2,
                        background: s.m.Base,
                        className: "clip-modal"
                    }, r.createElement(s._25, {
                        "data-test-selector": o.TITLE,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 1
                        }
                    }, this.props.title), r.createElement(s._25, {
                        "data-test-selector": o.MAIN_BODY,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, this.renderError(), this.props.body), r.createElement(s._2, {
                        display: s.N.Flex,
                        justifyContent: s._1.Center
                    }, r.createElement(s._2, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(s.u, {
                        "data-test-selector": o.CANCEL_BUTTON,
                        type: s.z.Text,
                        onClick: this.props.onClose
                    }, Object(i.d)("Cancel", "ClipsModal"))), r.createElement(s._2, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(s.u, {
                        "data-test-selector": o.SUBMIT_BUTTON,
                        type: this.props.buttonType ? this.props.buttonType : s.z.Default,
                        onClick: this.onSubmit,
                        disabled: this.props.submitDisabled
                    }, this.props.buttonContent), this.props.isLoading && r.createElement(s._4, {
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
                        return t.props.isTemporary ? r.createElement(s._35, {
                            type: s._40.H5,
                            ellipsis: !0
                        }, Object(i.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : r.createElement(s._35, {
                            type: s._40.H5,
                            ellipsis: !0
                        }, Object(i.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                    }, t.renderBodyText = function() {
                        return t.props.isTemporary ? r.createElement(s._35, null, Object(i.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                            clipCreator: t.props.targetUser.displayName
                        }, "ClipsModalBanUser")) : r.createElement(s._35, null, Object(i.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                            clipCreator: t.props.targetUser.displayName
                        }, "ClipsModalBanUser"))
                    }, t.renderButtonText = function() {
                        return t.props.isTemporary ? Object(i.d)("Timeout User", "ClipsModalBanUser") : Object(i.d)("Ban User", "ClipsModalBanUser")
                    }, t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(i.d)("Success!", "ClipsModalBanUser") : null
                    }, t.renderFailure = function() {
                        return t.state.hasErrored ? t.props.isTemporary ? Object(i.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(i.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
                    }, t.banUser = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
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
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return r.createElement(c, {
                        onSubmit: this.banUser,
                        onClose: this.props.onClose,
                        title: this.renderTitle(),
                        body: this.renderBodyText(),
                        buttonContent: this.renderButtonText(),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure(),
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            h = Object(u.d)("ClipsModalBanUser")(Object(d.b)(function(e) {
                return {
                    channelID: e.broadcasterID
                }
            })(m)),
            g = n("7vx8"),
            f = n("wnjK");

        function C(e) {
            return Object(g.a)(f, e)
        }
        var v = n("LnKh"),
            b = (n("lTii"), this),
            _ = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            E = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onDeleteClick = function() {
                        return a.__awaiter(n, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
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
                    }, n.state = _, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = [r.createElement(s._35, {
                        key: "title",
                        type: s._40.H4
                    }, Object(i.d)("Delete This Clip", "ClipsModalDelete")), r.createElement(s._2, {
                        key: "message",
                        margin: {
                            top: 1
                        }
                    }, r.createElement(s._35, {
                        type: s._40.P,
                        color: s.I.Alt2
                    }, Object(i.d)("This clip will be permanently deleted.", "ClipsModalDelete")))];
                    if (!this.props.data.clip) return null;
                    var t = null;
                    this.props.data.clip.curator && (t = r.createElement("span", null, " • ", Object(i.d)("Clipped by {curator}", {
                        curator: this.props.data.clip.curator.login
                    }, "ClipsModalDelete")));
                    var n = r.createElement(s._25, {
                        display: s.N.Flex,
                        flexWrap: s.Q.NoWrap
                    }, r.createElement(s._2, {
                        className: "clips-modal-delete__thumb",
                        margin: {
                            right: 1
                        }
                    }, r.createElement(s.j, {
                        ratio: s.k.Aspect16x9
                    }, r.createElement("img", {
                        src: this.props.data.clip.thumbnailURL
                    }))), r.createElement(s._2, null, r.createElement(s._35, {
                        type: s._40.H5
                    }, this.props.data.clip.title), r.createElement(s._35, {
                        color: s.I.Alt2
                    }, Object(i.d)("{created, date, medium}", {
                        created: new Date(this.props.data.clip.createdAt)
                    }, "ClipsModalDelete"), t), r.createElement(s._35, {
                        color: s.I.Alt2
                    }, Object(i.d)("{viewCount, number} views", {
                        viewCount: this.props.data.clip.viewCount
                    }, "ClipsModalDelete"))));
                    return r.createElement(c, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: n,
                        buttonContent: Object(i.d)("Delete", "ClipsModalDelete"),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        successContent: this.state.hasSucceeded ? Object(i.d)("Success!", "ClipsModalDelete") : null,
                        errorContent: this.state.hasErrored ? Object(i.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            k = Object(g.a)(v)(C({
                props: function(e) {
                    return {
                        deleteClip: function(t) {
                            return a.__awaiter(b, void 0, void 0, function() {
                                var n;
                                return a.__generator(this, function(a) {
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
                                            throw n = a.sent(), i.i.error(n, "Failed to delete clip"), n;
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
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.deleteAll = function() {
                        return a.__awaiter(n, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
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
                        return n.state.hasSucceeded ? Object(i.d)("A request has been made to delete the clip. Please wait a few minutes for this to take effect.", "ClipsModalDeleteAll") : null
                    }, n.renderFailure = function() {
                        return n.state.hasErrored ? Object(i.d)("There was a problem deleting this clip.", "ClipsModalDeleteAll") : null
                    }, n.state = N, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = r.createElement(s._35, {
                        type: s._40.P
                    }, Object(i.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                    return r.createElement(c, {
                        onSubmit: this.deleteAll,
                        onClose: this.props.onClose,
                        title: r.createElement(s._35, {
                            type: s._40.H4
                        }, Object(i.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                        body: e,
                        buttonContent: Object(i.d)("Delete", "ClipsModalDeleteAll"),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure()
                    })
                }, t
            }(r.Component),
            R = Object(S.compose)(Object(u.d)("ClipsModalDeleteAll"), C({
                props: function(e) {
                    return {
                        deleteAllClips: function(t, n) {
                            return a.__awaiter(T, void 0, void 0, function() {
                                var r, l, s;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 6, , 7]), r = void 0, n ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        videoID: n
                                                    }
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return l = a.sent(), r = l.data, [3, 5];
                                        case 2:
                                            return t ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        broadcastID: t
                                                    }
                                                }
                                            })] : [3, 4];
                                        case 3:
                                            return l = a.sent(), r = l.data, [3, 5];
                                        case 4:
                                            throw new Error("Invalid broadcastID specified for deleteAllClips");
                                        case 5:
                                            return e.ownProps.onDeleteAll && e.ownProps.onDeleteAll(r.deleteClips.clips), [3, 7];
                                        case 6:
                                            throw s = a.sent(), i.i.error(s, "Failed to delete clips from VOD"), s;
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            }), Object(g.a)(y, {
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
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderSuccess = function() {
                        return n.state.hasSucceeded ? Object(i.d)("Clips successfully deleted.", "ClipsModalBatchDelete") : null
                    }, n.renderError = function() {
                        return n.state.hasErrored ? Object(i.d)("There was a problem deleting this clip.", "ClipsModalBatchDelete") : null
                    }, n.onDeleteClick = function() {
                        return a.__awaiter(n, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
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
                    }, n.state = O, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = r.createElement(s._35, {
                            type: s._40.H4
                        }, Object(i.d)("Delete these clips?", "ClipsModalBatchDelete")),
                        t = r.createElement(s._35, {
                            type: s._40.P
                        }, Object(i.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                    return r.createElement(c, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(i.d)("Delete", "ClipsModalBatchDelete"),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderError()
                    })
                }, t
            }(r.Component),
            x = C({
                props: function(e) {
                    return {
                        deleteClips: function() {
                            return a.__awaiter(D, void 0, void 0, function() {
                                var t;
                                return a.__generator(this, function(n) {
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
                                            throw t = n.sent(), i.i.error(t, "Failed to delete clips"), t;
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
            return c
        }), n.d(t, "b", function() {
            return h
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
        a.definitions = a.definitions.concat(n("kUjr").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = a
    }
});
//# sourceMappingURL=pages.clips-manager-ae910dd655c823efca1654a1d71566ad.js.map