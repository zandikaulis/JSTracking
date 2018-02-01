webpackJsonp([66], {
    "1OO3": function(e, t, n) {
        "use strict";

        function a() {
            return Object(i.d)("Unable to ban user", "BlockUserMutation")
        }
        t.a = function(e) {
            var t = this;
            return Object(l.a)(u, {
                props: function(n) {
                    return {
                        onBanUser: function(l, u) {
                            return void 0 === u && (u = null), r.__awaiter(t, void 0, void 0, function() {
                                var t, C, b, v, E, k;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (t = u ? d.a.Timeout : d.a.Ban, C = e(n.ownProps), b = C.channelID, v = C.onPushMessage, !n.mutate) return [3, 5];
                                            r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, n.mutate(Object(s.a)({
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
                                                        var r = Math.floor(t / g);
                                                        t -= r * g, n += r + "w"
                                                    }
                                                    if (t > h) {
                                                        var i = Math.floor(t / h);
                                                        t -= i * h, n += i + "d"
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
                                            return r.sent(), E = Object(c.a)(t, l, null, u), v && v(E), [2, E];
                                        case 3:
                                            throw k = r.sent(), i.i.error(k, "Unable to ban user"), v && v(Object(o.a)(a())), new Error(a());
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
        var r = n("TToO"),
            i = n("6sO2"),
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
    "3NJ6": function(e, t) {},
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
                                    value: "ban"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
        var r = {};
        a.definitions = a.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }(n("kUjr").definitions)), e.exports = a
    },
    Ncf8: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n, r) {
            return {
                type: e,
                id: Object(a.a)(t + "-mod"),
                userLogin: t,
                reason: n,
                duration: r
            }
        };
        var a = n("INp2")
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
        }), n.d(t, "c", function() {
            return u
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
                id: Object(r.a)("notice"),
                message: e
            }
        };
        var a = n("qkCi"),
            r = n("INp2")
    },
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
        var g, f = (b = {}, b[m.Day] = "LAST_DAY", b[m.Week] = "LAST_WEEK", b[m.Month] = "LAST_MONTH", b[m.All] = "ALL_TIME", b);
        ! function(e) {
            e[e.Broadcaster = 0] = "Broadcaster", e[e.Curator = 1] = "Curator"
        }(g || (g = {}));
        var C, b, v = n("CSlQ"),
            E = n("RH2O"),
            k = n("2KeS"),
            y = n("+xm8"),
            S = n("f2i/"),
            _ = n("Aj/L"),
            T = n("KSGD"),
            N = n("6sO2"),
            O = n("7vx8"),
            w = n("5LoI"),
            M = n("oIkB"),
            R = n("V5M+"),
            D = n("zCIC"),
            x = n("sikP"),
            j = n("WNmM"),
            A = n("F8kA"),
            I = n("rCmJ"),
            L = n("+Znq"),
            F = n("NY9D"),
            U = n("yDzg"),
            B = n("bhVC"),
            X = n("0i+s"),
            V = n("Odds"),
            G = [{
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
            H = Object(v.d)("ClipsManagerSocialShare")(function(e) {
                var t = Object(N.d)("Share", "ClipsManagerSocialShare");
                return s.createElement(L.a, null, s.createElement("div", null, s.createElement(V._33, {
                    label: t
                }, s.createElement(V.v, {
                    ariaLabel: t,
                    type: V.w.Hollow,
                    icon: V._13.Share
                }))), s.createElement(V.p, {
                    direction: V.q.BottomRight,
                    size: V.r.Small
                }, s.createElement(V.X, {
                    display: V.J.Flex,
                    justifyContent: V.W.Between,
                    padding: 1
                }, G.map(function(t) {
                    return s.createElement(B.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(U.a)(e.clip.url, t.params),
                        onShareClick: Object(j.c)(e.clip, e.pageType)
                    })
                })), s.createElement(V.X, {
                    padding: {
                        x: 1,
                        y: .5
                    }
                }, s.createElement(V.O, {
                    label: Object(N.d)("Video Link", "ClipsManagerSocialShare")
                }, s.createElement(V.T, {
                    readOnly: !0,
                    type: V.U.Text,
                    value: e.clip.url,
                    onFocus: a
                }))), s.createElement(V.X, {
                    padding: {
                        x: 1,
                        y: .5
                    }
                }, s.createElement(V.O, {
                    label: Object(N.d)("Embed Video", "ClipsManagerSocialShare")
                }, s.createElement(V.T, {
                    readOnly: !0,
                    type: V.U.Text,
                    value: Object(X.a)(e.clip.embedURL),
                    onFocus: a
                })))))
            }),
            P = n("6BvN"),
            W = function(e) {
                var t = Date.now() / 1e3;
                N.n.tracking.track(p.SpadeEventType.ClipEdit, {
                    channel_id: Number(e.broadcaster.id),
                    client_time: t,
                    clip_edit_session_id: e.id + "," + Math.floor(t),
                    clip_id: e.id,
                    clip_slug: e.slug,
                    effect_name: "title",
                    effect_setting: e.title,
                    front_end: !0,
                    location: p.PageviewLocation.MyClipsManager
                })
            },
            J = n("MV8X"),
            q = this,
            Q = {
                TITLE_TEXT: "cmgr-title-text",
                TITLE_INPUT: "cmgr-title-input",
                TITLE_SAVE: "cmgr-title-save",
                TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
            },
            z = 100,
            K = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.renderTitle = function() {
                        return n.props.canEdit ? s.createElement(V.T, {
                            id: Q.TITLE_INPUT,
                            "data-test-selector": Q.TITLE_INPUT,
                            type: V.U.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        }) : s.createElement(V._25, {
                            "data-test-selector": Q.TITLE_TEXT
                        }, n.state.title)
                    }, n.renderSaveButton = function() {
                        if (!n.props.canEdit) return null;
                        var e;
                        return e = n.state.hasErrored ? s.createElement(V._25, {
                            color: V.F.Error,
                            bold: !0
                        }, Object(N.d)("Uh-oh. Check for inappropriate language and try again!", "ClipsManagerTitleEdit")) : s.createElement(V._25, {
                            color: V.F.Link,
                            bold: !0
                        }, Object(N.d)("Title Saved!", "ClipsManagerTitleEdit")), s.createElement(V.X, {
                            flexShrink: 0,
                            flexGrow: 0
                        }, s.createElement(V.X, {
                            position: V._6.Relative
                        }, s.createElement(V.u, {
                            "data-test-selector": Q.TITLE_SAVE,
                            disabled: !n.canSaveEditedTitle(),
                            onClick: n.editClipTitle
                        }, Object(N.d)("Save", "ClipsManagerTitleEdit")), s.createElement(V.V, {
                            onClick: n.dismissBalloon,
                            "data-test-selector": Q.TITLE_SAVE_TOOLTIP
                        }, s.createElement(V.p, {
                            direction: V.q.TopRight,
                            show: n.state.isShowingBalloon
                        }, s.createElement(V.X, {
                            padding: 1
                        }, e)))))
                    }, n.dismissBalloon = function() {
                        n.setState({
                            isShowingBalloon: !1
                        })
                    }, n.handleTitleEdit = function(e) {
                        var t = e.currentTarget.value.slice(0, z);
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
                                        return e.sent(), W(this.props.clip), this.setState({
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
                            case P.a.Enter:
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
                    var e = Object(N.d)("{characterCount, number} remaining", {
                        characterCount: z - this.state.trimmedTitle.length
                    }, "ClipsManagerTitleEdit");
                    return s.createElement(V.X, {
                        display: V.J.Flex,
                        justifyContent: V.W.Center
                    }, s.createElement(V.X, {
                        flexGrow: 1,
                        padding: 1
                    }, s.createElement(V.O, {
                        id: Q.TITLE_INPUT,
                        label: Object(N.d)("Title", "ClipsManagerTitleEdit"),
                        hint: this.props.canEdit ? e : ""
                    }, s.createElement(V.X, {
                        display: V.J.Flex,
                        flexWrap: V.M.NoWrap
                    }, s.createElement(V.X, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, this.renderTitle()), this.renderSaveButton()))))
                }, t
            }(s.Component),
            $ = Object(O.a)(J, {
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
                                            throw n = a.sent(), N.i.error(n, "Failed to edit clip title"), n;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(K),
            Y = n("iFCf"),
            Z = (n("qCag"), {
                MODERATION_DROPDOWN: "cmgr-moderation-dropdown",
                MODERATION_BUTTON: "cmgr-moderation-button",
                GAME_LINK: "cmgr-expanded-game-link",
                CHANNEL_LINK: "cmgr-expanded-channel-link"
            }),
            ee = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.renderGameLink = function(e) {
                        return e.game ? s.createElement(A.a, {
                            "data-test-selector": Z.GAME_LINK,
                            to: Object(F.c)(e.game.name),
                            title: e.game.name
                        }, e.game.name) : null
                    }, n.renderModerationIcon = function() {
                        if (n.props.data.currentUser.id !== n.props.clip.broadcaster.id) return null;
                        var e = Object(N.d)("Moderation", "ClipsManagerExpandedRow");
                        return s.createElement(V._33, {
                            label: e
                        }, s.createElement(V.X, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(L.a, null, s.createElement(V.v, {
                            ariaLabel: e,
                            type: V.w.Hollow,
                            icon: V._13.Sword,
                            "data-test-selector": Z.MODERATION_BUTTON
                        }), s.createElement(V.p, {
                            "data-test-selector": Z.MODERATION_DROPDOWN,
                            direction: V.q.BottomRight
                        }, s.createElement(V.X, {
                            padding: {
                                y: .5
                            }
                        }, s.createElement(V._21, {
                            borderBottom: !0
                        }, s.createElement(V.V, {
                            onClick: n.openTimeoutUserModal
                        }, s.createElement(V.X, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(N.d)("Timeout User (24 hr)", "ClipsManagerExpandedRow"))), s.createElement(V.V, {
                            onClick: n.openBanUserModal
                        }, s.createElement(V.X, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(N.d)("Ban User", "ClipsManagerExpandedRow")))), s.createElement(V.V, {
                            onClick: n.openDeleteAllModal
                        }, s.createElement(V.X, {
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
                        t = Object(N.c)(new Date(e.createdAt), "medium"),
                        n = Object(N.d)("Close", "ClipsManagerExpandedRow"),
                        a = Object(N.d)("Delete", "ClipsManagerExpandedRow");
                    return s.createElement(I.a, {
                        onClickOut: this.onClickOutside
                    }, s.createElement(V._21, {
                        "data-target": this.props.dataTarget,
                        background: V.m.Base,
                        display: V.J.Block,
                        elevation: 3,
                        className: "clmgr-table__row-expanded",
                        position: V._6.Relative,
                        margin: {
                            bottom: 3
                        }
                    }, s.createElement(V._21, {
                        display: V.J.Flex,
                        justifyContent: V.W.Between,
                        alignItems: V.c.Center,
                        padding: 1,
                        background: V.m.Alt,
                        borderBottom: !0
                    }, s.createElement(V._33, {
                        label: n,
                        align: V._34.Left
                    }, s.createElement(V.X, {
                        flexGrow: 0
                    }, s.createElement(V.v, {
                        ariaLabel: n,
                        type: V.w.Hollow,
                        icon: V._13.Close,
                        onClick: this.props.onClose
                    }), s.createElement(V.p, {
                        direction: V.q.TopLeft
                    }))), s.createElement(V.X, {
                        display: V.J.Flex
                    }, this.renderModerationIcon(), s.createElement(V._33, {
                        label: a
                    }, s.createElement(V.X, {
                        margin: {
                            right: .5
                        }
                    }, s.createElement(V.v, {
                        ariaLabel: a,
                        type: V.w.Hollow,
                        icon: V._13.Trash,
                        onClick: this.openDeleteModal
                    }))), s.createElement(V.X, {
                        margin: {
                            right: .5
                        }
                    }, s.createElement(H, {
                        clip: this.props.clip,
                        pageType: this.props.pageType
                    })), s.createElement(V._33, {
                        label: Object(N.d)("Watch on Clips Page", "ClipsManagerExpandedRow"),
                        align: V._34.Right
                    }, s.createElement(V.v, {
                        ariaLabel: Object(N.d)("Popout", "ClipsManagerExpandedRow"),
                        type: V.w.Hollow,
                        linkTo: Object(U.a)(this.props.clip.url, {
                            tt_medium: "my_clips"
                        }),
                        icon: V._13.Popout
                    })))), s.createElement(V.X, {
                        padding: 1
                    }, s.createElement(V.Q, {
                        gutterSize: V.R.None
                    }, s.createElement(V.G, {
                        cols: {
                            default: 12,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 5,
                            xl: 5
                        }
                    }, s.createElement(V.X, {
                        position: V._6.Relative
                    }, s.createElement(V.j, {
                        ratio: V.k.Aspect16x9
                    }, s.createElement("iframe", {
                        src: Object(U.a)(e.embedURL, {
                            autoplay: "false"
                        }),
                        frameBorder: 0,
                        width: "100%",
                        height: "100%",
                        scrolling: "no",
                        allowFullScreen: !0
                    })))), s.createElement(V.G, {
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
                    }), s.createElement(V._21, {
                        background: V.m.Alt,
                        margin: 1,
                        padding: 1,
                        border: !0
                    }, s.createElement(V.Q, null, s.createElement(V.G, {
                        cols: {
                            default: 4
                        }
                    }, s.createElement(V.X, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(V._25, {
                        bold: !0
                    }, Object(N.d)("Created On", "ClipsManagerExpandedRow")), s.createElement(V._25, {
                        ellipsis: !0,
                        transform: V._29.Capitalize,
                        title: t
                    }, t))), s.createElement(V.G, {
                        cols: {
                            default: 4
                        }
                    }, s.createElement(V.X, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(V._25, {
                        bold: !0
                    }, Object(N.d)("Clip Length", "ClipsManagerExpandedRow")), s.createElement(V._25, {
                        ellipsis: !0
                    }, Object(N.d)("{seconds, number}s", {
                        seconds: this.props.clip.durationSeconds
                    }, "ClipsManagerExpandedRow")))), s.createElement(V.G, {
                        cols: {
                            default: 4
                        }
                    }, s.createElement(V.X, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(V._25, {
                        bold: !0
                    }, Object(N.d)("Views", "ClipsManagerExpandedRow")), s.createElement(V.X, {
                        display: V.J.Flex,
                        alignItems: V.c.Center,
                        ellipsis: !0
                    }, s.createElement(V._12, {
                        asset: V._13.GlyphViews
                    }), s.createElement(V.X, {
                        padding: {
                            left: .5
                        }
                    }, Object(N.f)(e.viewCount, {
                        maximumFractionDigits: 1
                    }))))), s.createElement(V.G, {
                        cols: {
                            default: 4
                        }
                    }, s.createElement(V.X, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(V._25, {
                        bold: !0
                    }, Object(N.d)("Channel", "ClipsManagerExpandedRow")), s.createElement(V._25, {
                        ellipsis: !0
                    }, s.createElement(A.a, {
                        "data-test-selector": Z.CHANNEL_LINK,
                        to: "/" + e.broadcaster.login + "/clips",
                        title: e.broadcaster.displayName
                    }, e.broadcaster.displayName)))), s.createElement(V.G, {
                        cols: {
                            default: 4
                        }
                    }, s.createElement(V.X, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(V._25, {
                        bold: !0
                    }, Object(N.d)("Game", "ClipsManagerExpandedRow")), s.createElement(V._25, {
                        ellipsis: !0
                    }, this.renderGameLink(e)))))))))))
                }, t
            }(s.Component),
            te = Object(v.d)("ClipsManagerExpandedRow")(Object(O.a)(Y)(ee)),
            ne = Object(E.b)(null, function(e) {
                return Object(k.b)({
                    showModal: R.d,
                    closeModal: R.c
                }, e)
            })(te),
            ae = n("MAZT"),
            re = n("uTyw"),
            ie = n("Qfvd"),
            le = (n("uHjT"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderCardContent = function() {
                        var e = t.props.searchResult;
                        return function(e) {
                            var t = e;
                            return void 0 !== t.title && void 0 !== t.popularity
                        }(e) ? s.createElement(V.A, {
                            row: !0
                        }, s.createElement(V.C, {
                            size: V.D.Size3,
                            aspect: V.k.Aspect3x4,
                            imageSrc: function(e) {
                                return ie.a + "/" + e + "-" + ie.b + ".jpg"
                            }(e.title),
                            imageAlt: e.thumbnailAltText
                        }), s.createElement(V.B, null, s.createElement(V.X, {
                            padding: {
                                left: 1
                            }
                        }, s.createElement(V._25, {
                            type: V._30.H5
                        }, e.title), s.createElement(V._25, {
                            className: "clmgr-result__subtitle",
                            ellipsis: !0
                        }, Object(N.d)("{numViewers, number} viewers", {
                            numViewers: e.popularity
                        }, "ClipsManagerSearch"))))) : function(e) {
                            return void 0 !== e.followers
                        }(e) ? s.createElement(V.A, {
                            row: !0
                        }, s.createElement(V.C, {
                            size: V.D.Size3,
                            aspect: V.k.Aspect1x1,
                            imageSrc: e.thumbnail,
                            imageAlt: e.thumbnailAltText
                        }), s.createElement(V.B, null, s.createElement(V.X, {
                            padding: {
                                left: 1
                            }
                        }, s.createElement(V._25, {
                            type: V._30.H5
                        }, e.name), s.createElement(V._25, {
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
                    return s.createElement(V.V, {
                        onClick: this.onClick
                    }, s.createElement(V.S, {
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
            se = {
                NO_RESULTS: "cmgr-no-search-results",
                RESULTS_MENU: "cmgr-search-results-menu",
                SEARCH_INPUT: "cmgr-search-input",
                CHANNEL_SEARCH: "cmgr-channel-search",
                GAME_SEARCH: "cmgr-game-search"
            },
            oe = 5,
            ce = {
                currentCategory: w.a.Games,
                gameResults: [],
                userResults: [],
                isShowingResults: !1,
                isLoading: !1,
                searchTerm: "",
                focusedIndex: null
            },
            de = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.renderSearchOptions = function() {
                        var e = [s.createElement(V._22, {
                            active: t.state.currentCategory === w.a.Games,
                            onClick: t.setSearchTypeGame,
                            key: se.GAME_SEARCH,
                            "data-test-selector": se.GAME_SEARCH
                        }, Object(N.d)("Game Search", "ClipsManagerSearch"))];
                        return t.props.userRole !== g.Broadcaster && e.push(s.createElement(V._22, {
                            active: t.state.currentCategory === w.a.Users,
                            onClick: t.setSearchTypeChannel,
                            key: se.CHANNEL_SEARCH,
                            "data-test-selector": se.CHANNEL_SEARCH
                        }, Object(N.d)("Channel Search", "ClipsManagerSearch"))), s.createElement(V._23, null, e)
                    }, t.renderSearchResults = function() {
                        if (t.state.isLoading) return s.createElement(V._1, null);
                        var e = t.state.currentCategory;
                        if (e === w.a.Users) {
                            var n = t.state.userResults;
                            return 0 === n.length ? t.renderNoResults() : n.map(function(e, n) {
                                return s.createElement(le, {
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
                        if (e === w.a.Games) {
                            var a = t.state.gameResults;
                            return 0 === a.length ? t.renderNoResults() : a.map(function(e, n) {
                                return s.createElement(le, {
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
                        return s.createElement(V.X, {
                            "data-test-selector": se.NO_RESULTS,
                            display: V.J.Flex,
                            flexDirection: V.L.Column
                        }, s.createElement(V._21, {
                            textAlign: V._26.Center,
                            padding: {
                                y: 5
                            }
                        }, s.createElement(V._12, {
                            asset: V._13.NavSearch,
                            height: 36,
                            width: 36,
                            type: V._14.Brand
                        }), s.createElement(V._25, {
                            type: V._30.H4
                        }, Object(N.d)("No results found", "ClipsManagerSearch")), s.createElement(V._25, {
                            type: V._30.P,
                            color: V.F.Alt
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
                        t.setState(l.__assign({}, ce, {
                            currentCategory: w.a.Games
                        })), t.context.setSearchType(w.a.Games)
                    }, t.setSearchTypeChannel = function() {
                        t.setState(l.__assign({}, ce, {
                            currentCategory: w.a.Users
                        })), t.context.setSearchType(w.a.Users)
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
                            case P.a.Esc:
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
                            case P.a.Up:
                                return void t.focusNext(!1);
                            case P.a.Down:
                                return void t.focusNext(!0);
                            case P.a.Enter:
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
                        if (r === w.a.Games) n = i[e].title, t.context.setSearchTerm(n);
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
                        return t.state.currentCategory === w.a.Games ? t.state.gameResults.length : t.state.userResults.length
                    }, t.performQuery = function() {
                        var e = t.state,
                            n = e.isLoading,
                            a = e.searchTerm,
                            r = e.currentCategory;
                        n && t.setState({
                            isLoading: !0,
                            isShowingResults: !0
                        }), t.searchClient.queryForType(r, a, "", {
                            hitsPerPage: oe
                        }).then(function(e) {
                            if (e) {
                                var n = Object(re.b)({
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
                    }, t.searchClient = new ae.a(N.a.algoliaApplicationID, N.a.algoliaAPIKey), t.inputTimer = null, t.state = ce, t.searchResultRefs = [], t
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
                    return s.createElement(V.X, {
                        position: V._6.Relative
                    }, s.createElement(V.X, {
                        margin: {
                            bottom: 1
                        }
                    }, this.renderSearchOptions()), s.createElement(I.a, {
                        onClickOut: this.hideResults
                    }, s.createElement(V._15, {
                        id: se.SEARCH_INPUT,
                        refDelegate: this.setSearchInputRef,
                        onChange: this.onChange,
                        onFocus: this.onFocus,
                        onKeyDown: this.onKeyDown,
                        value: this.state.searchTerm,
                        placeholder: this.state.currentCategory === w.a.Games ? Object(N.d)("Enter a Game", "ClipsManagerSearch") : Object(N.d)("Enter a Channel", "ClipsManagerSearch")
                    }), s.createElement(V.p, {
                        "data-test-selector": se.RESULTS_MENU,
                        direction: V.q.Bottom,
                        noTail: !0,
                        size: V.r.Large,
                        show: this.state.isShowingResults
                    }, this.renderSearchResults())))
                }, t.contextTypes = {
                    setSearchTerm: T.func,
                    setSearchType: T.func,
                    clearSearch: T.func
                }, t
            }(s.Component),
            ue = Object(v.d)("ClipsManagerSearch")(de),
            pe = (n("3NJ6"), "cmgr-my-clips-radio"),
            me = "cmgr-clips-of-me-radio",
            he = function(e) {
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
                    return s.createElement(V.X, {
                        className: "clmgr-filters-container"
                    }, s.createElement(V.Q, {
                        gutterSize: V.R.None
                    }, s.createElement(V.G, {
                        cols: {
                            default: 12,
                            xs: 6,
                            sm: 6,
                            md: 12,
                            lg: 12
                        }
                    }, s.createElement(V.X, {
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(V.X, {
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(V._25, {
                        fontSize: V.N.Size5
                    }, Object(N.d)("List View", "ClipsManagerTable"))), s.createElement(V.X, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(V.X, {
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(V._11, {
                        "data-test-selector": pe,
                        label: Object(N.d)("Clips I've Created", "ClipsManagerTable"),
                        name: "MyClips",
                        checked: this.props.currentUserRole === g.Curator,
                        onChange: this.setCuratorRole
                    })), s.createElement(V.X, null, s.createElement(V._11, {
                        "data-test-selector": me,
                        label: Object(N.d)("Clips of My Channel", "ClipsManagerTable"),
                        name: "ClipsOfMyChannel",
                        checked: this.props.currentUserRole === g.Broadcaster,
                        onChange: this.setBroadcasterRole
                    }))))), s.createElement(V.G, {
                        cols: {
                            default: 12,
                            xs: 6,
                            sm: 6,
                            md: 12,
                            lg: 12
                        }
                    }, s.createElement(ue, {
                        userRole: this.props.currentUserRole
                    }))))
                }, t
            }(s.Component),
            ge = Object(v.d)("ClipsManagerRightColumn")(he),
            fe = function(e) {
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
            Ce = (n("1f48"), "clips-manager-row-checkbox"),
            be = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.selectClip = function() {
                        var e = !t.props.isSelected;
                        t.props.onSelectClip(t.props.clip, e)
                    }, t.onRowClick = function(e) {
                        var n = e.target;
                        null !== t.checkboxRef && n === t.checkboxRef || n.parentElement && n.parentElement.dataset.testSelector === Ce || t.props.onRowClick(t.props.clip)
                    }, t.setCheckboxRef = function(e) {
                        t.checkboxRef = e
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.clip,
                        t = Object(N.g)(new Date(e.createdAt));
                    return s.createElement(V.X, {
                        className: "clmgr-table__row",
                        display: V.J.Flex,
                        overflow: V._2.Hidden,
                        alignItems: V.c.Center
                    }, s.createElement(V.V, {
                        onClick: this.onRowClick,
                        alpha: !0
                    }, s.createElement(V.Q, {
                        "data-target": this.props.dataTarget
                    }, s.createElement(V.G, {
                        cols: 4
                    }, s.createElement(V.X, {
                        display: V.J.Flex,
                        flexWrap: V.M.NoWrap,
                        alignItems: V.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(V.X, {
                        flexShrink: 0,
                        position: V._6.Relative
                    }, s.createElement(V._21, {
                        className: "clmgr-checkbox-bg",
                        background: V.m.Base,
                        position: V._6.Absolute
                    }), s.createElement(V.E, {
                        refDelegate: this.setCheckboxRef,
                        "data-test-selector": Ce,
                        label: " ",
                        checked: this.props.isSelected,
                        onChange: this.selectClip
                    })), s.createElement(V.S, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, s.createElement(fe, {
                        imageURL: this.props.clip.thumbnailURL,
                        className: "clmgr-thumb"
                    })), s.createElement(V._25, {
                        type: V._30.H5,
                        title: e.title,
                        ellipsis: !0
                    }, e.title))), s.createElement(V.G, {
                        cols: 2
                    }, s.createElement(V.X, {
                        display: V.J.Flex,
                        alignItems: V.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(V.S, {
                        ellipsis: !0
                    }, s.createElement(A.a, {
                        to: "/" + e.broadcaster.login + "/clips",
                        title: e.broadcaster.displayName
                    }, e.broadcaster.displayName)))), s.createElement(V.G, {
                        cols: 2
                    }, s.createElement(V.X, {
                        display: V.J.Flex,
                        alignItems: V.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, this.renderGameLink(e))), s.createElement(V.G, {
                        cols: 2
                    }, s.createElement(V.X, {
                        display: V.J.Flex,
                        alignItems: V.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(V._25, {
                        title: t,
                        transform: V._29.Capitalize,
                        ellipsis: !0
                    }, t))), s.createElement(V.G, {
                        cols: 2
                    }, s.createElement(V.X, {
                        display: V.J.Flex,
                        alignItems: V.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(V.X, {
                        display: V.J.Flex,
                        alignItems: V.c.Center,
                        margin: {
                            right: .5
                        }
                    }, s.createElement(V._12, {
                        asset: V._13.GlyphViews
                    })), Object(N.f)(e.viewCount, {
                        maximumFractionDigits: 1
                    }))))))
                }, t.prototype.renderGameLink = function(e) {
                    return e.game ? s.createElement(V.S, {
                        ellipsis: !0
                    }, s.createElement(A.a, {
                        to: Object(F.c)(e.game.name),
                        title: e.game.name
                    }, e.game.name)) : null
                }, t
            }(s.Component),
            ve = (n("EDaX"), "clips-manager-table-row"),
            Ee = "clips-manager-select-all",
            ke = "clips-manager-batch-delete",
            ye = "clips-manager-views-sort",
            Se = "clips-manager-createdat-sort",
            _e = "clips-manager-empty-body",
            Te = function(e) {
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
                                var r = t.selectedClips,
                                    i = e.slug;
                                r[i];
                                a = l.__rest(r, ["symbol" == typeof i ? i : i + ""])
                            }
                            return {
                                numberOfSelectedClips: Object.keys(a).length,
                                selectedClips: a
                            };
                            var s
                        })
                    }, t.toggleViewsSort = function() {
                        t.props.sort === i.ViewsDescending ? t.props.updateSort(i.ViewsAscending) : t.props.updateSort(i.ViewsDescending)
                    }, t.toggleCreatedAtSort = function() {
                        t.props.sort === i.CreatedAtDescending ? t.props.updateSort(i.CreatedAtAscending) : t.props.updateSort(i.CreatedAtDescending)
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
                            var r = t.state.selectedClips,
                                i = [],
                                l = Object.keys(t.state.selectedClips).reduce(function(e, t) {
                                    return e.push(r[t]), e
                                }, i);
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
                    return this.props.error || !this.props.userID ? null : s.createElement(V.X, {
                        className: "clmgr-body-wrap",
                        display: V.J.Flex,
                        flexWrap: V.M.NoWrap,
                        flexDirection: V.L.ColumnReverse,
                        breakpointMedium: {
                            flexDirection: V.L.Row
                        }
                    }, s.createElement(V.X, {
                        className: "clmgr-table-wrap",
                        display: V.J.Flex,
                        flexGrow: 1,
                        position: V._6.Relative
                    }, s.createElement(V._21, {
                        background: V.m.Base,
                        border: !0,
                        elevation: 3,
                        margin: {
                            bottom: .5
                        },
                        fullWidth: !0
                    }, this.renderHeaderRow()), s.createElement(V._21, {
                        fullWidth: !0,
                        fullHeight: !0
                    }, s.createElement(D.b, null, s.createElement(V._21, {
                        background: V.m.Base,
                        elevation: 2,
                        border: !0
                    }, this.props.clips.length > 0 && !this.state.isNewQueryLoading && this.props.clips.map(function(t) {
                        return e.renderClipRow(t)
                    }), this.state.isNewQueryLoading && this.props.loading && s.createElement(V.X, {
                        display: V.J.Flex,
                        alignItems: V.c.Center,
                        justifyContent: V.W.Center,
                        padding: 1,
                        fullWidth: !0
                    }, s.createElement(V._1, {
                        delay: 0
                    })), 0 === this.props.clips.length && !this.props.loading && s.createElement(V.X, {
                        display: V.J.Flex,
                        justifyContent: V.W.Center,
                        textAlign: V._26.Center,
                        padding: 2,
                        fullWidth: !0,
                        fullHeight: !0
                    }, s.createElement(V._25, {
                        type: V._30.H4,
                        color: V.F.Alt2,
                        "data-test-selector": _e
                    }, Object(N.d)("Create Clips to fill this space with the most memorable moments from your favorite Twitch streams and videos. Just hit the Clip button on the video player to try it out. {learnHowLink} to use Clips.", {
                        learnHowLink: s.createElement("a", {
                            target: "_blank",
                            rel: "noopener",
                            href: "https://help.twitch.tv/customer/portal/articles/2442508-how-to-use-clips"
                        }, Object(N.d)("Learn how", "ClipsManagerTable"))
                    }, "ClipsManagerTable"))), s.createElement(D.a, {
                        loadMore: this.loadMore,
                        enabled: !this.props.loading && this.props.hasNextPage
                    }), this.props.loading && !this.state.isNewQueryLoading && s.createElement(V.X, {
                        display: V.J.Flex,
                        alignItems: V.c.Center,
                        justifyContent: V.W.Center,
                        padding: 1,
                        fullWidth: !0
                    }, s.createElement(V._1, {
                        delay: 0
                    })))))), s.createElement(V.X, {
                        breakpointMedium: {
                            margin: {
                                left: 2
                            }
                        },
                        flexShrink: 0
                    }, s.createElement(ge, {
                        updateUserRole: this.props.updateUserRole,
                        currentUserRole: this.props.userRole
                    })))
                }, t.prototype.renderHeaderRow = function() {
                    var e = this.state.numberOfSelectedClips > 0,
                        t = e && this.state.numberOfSelectedClips === this.props.clips.length,
                        n = s.createElement(V.E, {
                            "data-test-selector": Ee,
                            label: " ",
                            checked: t,
                            onChange: this.toggleClipsSelection,
                            disabled: this.state.isNewQueryLoading && this.props.loading
                        });
                    if (e) return s.createElement(V.Q, null, s.createElement(V.G, {
                        cols: 12
                    }, s.createElement(V.X, {
                        display: V.J.Flex,
                        alignItems: V.c.Center,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        fullHeight: !0
                    }, s.createElement(V.X, {
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, n), s.createElement(V.X, {
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, s.createElement(V._25, null, Object(N.d)("{numClips, number} selected", {
                        numClips: this.state.numberOfSelectedClips
                    }, "ClipsManagerTable"))), s.createElement(V.X, {
                        flexShrink: 0,
                        alignItems: V.c.Center,
                        fullHeight: !0
                    }, s.createElement(V.v, {
                        ariaLabel: Object(N.d)("Delete Clip", "ClipsManagerTable"),
                        icon: V._13.Trash,
                        onClick: this.renderBatchDeleteModal,
                        "data-test-selector": ke
                    })))));
                    var a = this.props.sort,
                        r = a === i.ViewsAscending || a === i.ViewsDescending,
                        l = a === i.CreatedAtAscending || a === i.CreatedAtDescending,
                        o = Object(N.d)("Created", "ClipsManagerTable"),
                        c = Object(N.d)("Views", "ClipsManagerTable");
                    return s.createElement(V.Q, null, s.createElement(V.G, {
                        cols: 4
                    }, s.createElement(V.X, {
                        display: V.J.Flex,
                        alignItems: V.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(V.X, {
                        display: V.J.Flex,
                        alignItems: V.c.Center,
                        margin: {
                            right: 1
                        }
                    }, n), s.createElement(V._25, null, Object(N.d)("Info", "ClipsManagerTable")))), s.createElement(V.G, {
                        cols: 2
                    }, s.createElement(V.X, {
                        padding: 1
                    }, Object(N.d)("Channel", "ClipsManagerTable"))), s.createElement(V.G, {
                        cols: 2
                    }, s.createElement(V.X, {
                        padding: 1
                    }, Object(N.d)("Game", "ClipsManagerTable"))), s.createElement(V.G, {
                        cols: 2
                    }, s.createElement(V.X, {
                        padding: {
                            y: .5,
                            right: 1
                        },
                        display: V.J.Flex,
                        fullHeight: !0
                    }, s.createElement(V.V, {
                        alpha: !0,
                        onClick: this.toggleCreatedAtSort,
                        "data-test-selector": Se
                    }, s.createElement(V.X, {
                        display: V.J.Flex,
                        flexWrap: V.M.NoWrap,
                        alignContent: V.b.Center,
                        justifyContent: V.W.Between,
                        padding: {
                            x: 1
                        }
                    }, s.createElement(V._25, {
                        color: V.F.Link,
                        title: o,
                        bold: !0,
                        ellipsis: !0
                    }, o), l && s.createElement(V._12, {
                        asset: a === i.CreatedAtDescending ? V._13.GlyphArrDown : V._13.GlyphArrUp,
                        type: V._14.Brand
                    }))))), s.createElement(V.G, {
                        cols: 2
                    }, s.createElement(V.X, {
                        padding: {
                            y: .5,
                            right: 1
                        },
                        display: V.J.Flex,
                        fullHeight: !0
                    }, s.createElement(V.V, {
                        alpha: !0,
                        onClick: this.toggleViewsSort,
                        "data-test-selector": ye
                    }, s.createElement(V.X, {
                        display: V.J.Flex,
                        flexWrap: V.M.NoWrap,
                        alignContent: V.b.Center,
                        justifyContent: V.W.Between,
                        padding: {
                            x: 1
                        }
                    }, s.createElement(V._25, {
                        color: V.F.Link,
                        title: c,
                        bold: !0,
                        ellipsis: !0
                    }, c), r && s.createElement(V._12, {
                        asset: a === i.ViewsDescending ? V._13.GlyphArrDown : V._13.GlyphArrUp,
                        type: V._14.Brand
                    }))))))
                }, t.prototype.renderClipRow = function(e) {
                    var t = !!this.state.selectedClips[e.slug];
                    if (e.slug === this.state.expandedSlug) {
                        var n = this.props.userRole === g.Curator ? j.a.MyClips : j.a.ClipsOfMyChannel;
                        return s.createElement(ne, {
                            key: e.slug,
                            dataTarget: ve,
                            clip: e,
                            onClose: this.closeExpandedRow,
                            onDelete: this.deleteClip,
                            onDeleteAll: this.deleteAllClips,
                            pageType: n
                        })
                    }
                    return s.createElement(be, {
                        key: e.slug,
                        dataTarget: ve,
                        clip: e,
                        isSelected: t,
                        onSelectClip: this.selectClip,
                        onRowClick: this.expandClipRow
                    })
                }, t
            }(s.Component),
            Ne = n("zlRb"),
            Oe = Object(o.compose)(Object(v.d)("ClipsManagerTable"), Object(O.a)(Ne, {
                options: function(e) {
                    var t = {
                        sort: h[e.sort],
                        period: f[m.All]
                    };
                    return e.userRole === g.Broadcaster ? t.broadcasterID = e.channelID : t.curatorID = e.channelID, e.searchFilterTerm && (e.searchFilterType === w.a.Users && e.userRole !== g.Broadcaster ? t.broadcasterID = e.searchFilterTerm : t.gameName = e.searchFilterTerm), {
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
                                                edges: Object(M.b)(a, r)
                                            })
                                        })
                                    }
                                }
                            })
                        },
                        onDeleteClip: function(t) {
                            Object(M.d)(Ne, e.data.variables, function(e) {
                                var n = e.user.clips.edges;
                                return e.user.clips.edges = n.filter(function(e) {
                                    var n = e.node.slug;
                                    return t.slug !== n
                                }), e
                            })
                        },
                        onDeleteAllClips: function(t) {
                            Object(M.d)(Ne, e.data.variables, function(e) {
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
                            Object(M.d)(Ne, e.data.variables, function(e) {
                                var n = e.user.clips.edges;
                                return e.user.clips.edges = n.filter(function(e) {
                                    var n = e.node.slug;
                                    return !t.includes(n)
                                }), e
                            })
                        }
                    }
                }
            }), Object(E.b)(null, function(e) {
                return Object(k.b)({
                    showModal: R.d,
                    closeModal: R.c
                }, e)
            }))(Te),
            we = n("tYdz"),
            Me = function(e) {
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
                        searchType: w.a.Games,
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
                    return this.props.data.loading || this.props.data.error || !this.props.data.currentUser ? null : s.createElement(V.X, {
                        className: "scroll-y",
                        padding: {
                            x: 3,
                            top: 3
                        },
                        fullHeight: !0
                    }, s.createElement(V.X, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(V._25, {
                        type: V._30.H1,
                        fontSize: V.N.Size3
                    }, Object(N.d)("Clips", "ClipsManagerPage"))), s.createElement(Oe, {
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
            Re = Object(o.compose)(Object(v.d)("ClipsManager"), Object(O.a)(we), c.e)(Me),
            De = Object(E.b)(function(e) {
                return {
                    isLoggedIn: Object(_.d)(e)
                }
            }, function(e) {
                return Object(k.b)({
                    login: function() {
                        return Object(S.f)(y.a.ClipsManager)
                    }
                }, e)
            })(Re),
            xe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onRoleChange = function(e) {
                        e !== g.Broadcaster && t.props.history.push({
                            pathname: r(t.props.match.params.channelName, e)
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(De, {
                        channelName: this.props.match.params.channelName,
                        role: g.Broadcaster,
                        onRoleChange: this.onRoleChange
                    })
                }, t
            }(s.Component),
            je = Object(o.compose)(Object(v.d)("ClipsOfMeManagerPage", {
                destination: u.a.ChannelClipsManager
            }), Object(d.a)({
                location: p.PageviewLocation.ChannelClipsManager,
                properties: {
                    is_live: !1
                }
            }), c.e)(xe),
            Ae = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onRoleChange = function(e) {
                        e !== g.Curator && t.props.history.push({
                            pathname: r(t.props.match.params.channelName, e)
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(De, {
                        channelName: this.props.match.params.channelName,
                        role: g.Curator,
                        onRoleChange: this.onRoleChange
                    })
                }, t
            }(s.Component),
            Ie = Object(o.compose)(Object(v.d)("MyClipsManagerPage", {
                destination: u.a.MyClipsManager
            }), Object(d.a)({
                location: p.PageviewLocation.MyClipsManager,
                properties: {
                    is_live: !1
                }
            }), c.e)(Ae);
        n.d(t, "ChannelClipsManagerPage", function() {
            return je
        }), n.d(t, "MyClipsManagerPage", function() {
            return Ie
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
    sikP: function(e, t, n) {
        "use strict";

        function a(e) {
            return Object(C.a)(b, e)
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
                        return t.props.successContent ? i.createElement(o._21, {
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
                        }, i.createElement(o._25, {
                            type: o._30.Strong
                        }, t.props.successContent)) : null
                    }, t.renderError = function() {
                        return t.props.errorContent ? i.createElement(o._21, {
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
                        }, i.createElement(o._25, {
                            type: o._30.Strong,
                            color: o.F.Error
                        }, t.props.errorContent)) : null
                    }, t.onSubmit = function() {
                        t.props.onSubmit()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.successContent ? i.createElement(s.a, {
                        onClickOut: this.props.onClose
                    }, i.createElement(o._21, {
                        padding: 2,
                        background: o.m.Base,
                        className: "clip-modal"
                    }, this.renderSuccess(), i.createElement(o.X, {
                        display: o.J.Flex,
                        justifyContent: o.W.Center
                    }, i.createElement(o.X, {
                        margin: {
                            x: 1
                        }
                    }, i.createElement(o.u, {
                        "data-test-selector": c.CANCEL_BUTTON,
                        onClick: this.props.onClose
                    }, Object(l.d)("Close", "ClipsModal")))))) : i.createElement(s.a, {
                        onClickOut: this.props.onClose
                    }, i.createElement(o._21, {
                        padding: 2,
                        background: o.m.Base,
                        className: "clip-modal"
                    }, i.createElement(o._21, {
                        "data-test-selector": c.TITLE,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 1
                        }
                    }, this.props.title), i.createElement(o._21, {
                        "data-test-selector": c.MAIN_BODY,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, this.renderError(), this.props.body), i.createElement(o.X, {
                        display: o.J.Flex,
                        justifyContent: o.W.Center
                    }, i.createElement(o.X, {
                        margin: {
                            x: 1
                        }
                    }, i.createElement(o.u, {
                        "data-test-selector": c.CANCEL_BUTTON,
                        type: o.z.Text,
                        onClick: this.props.onClose
                    }, Object(l.d)("Cancel", "ClipsModal"))), i.createElement(o.X, {
                        margin: {
                            x: 1
                        }
                    }, i.createElement(o.u, {
                        "data-test-selector": c.SUBMIT_BUTTON,
                        type: this.props.buttonType ? this.props.buttonType : o.z.Default,
                        onClick: this.onSubmit,
                        disabled: this.props.submitDisabled
                    }, this.props.buttonContent), this.props.isLoading && i.createElement(o._1, {
                        delay: 0
                    })))))
                }, t
            }(i.Component),
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
                        return t.props.isTemporary ? i.createElement(o._25, {
                            type: o._30.H5,
                            ellipsis: !0
                        }, Object(l.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : i.createElement(o._25, {
                            type: o._30.H5,
                            ellipsis: !0
                        }, Object(l.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                    }, t.renderBodyText = function() {
                        return t.props.isTemporary ? i.createElement(o._25, null, Object(l.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                            clipCreator: t.props.clip.curator.displayName
                        }, "ClipsModalBanUser")) : i.createElement(o._25, null, Object(l.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                            clipCreator: t.props.clip.curator.displayName
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
            f = Object(p.d)("ClipsModalBanUser")(Object(u.a)(function(e) {
                return {
                    channelID: e.clip.broadcaster.id
                }
            })(g)),
            C = n("7vx8"),
            b = n("wnjK"),
            v = (n("lTii"), this),
            E = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            k = function(e) {
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
                    }, t.state = E, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = [i.createElement(o._25, {
                            key: "title",
                            type: o._30.H4
                        }, Object(l.d)("Delete This Clip", "ClipsModalDelete")), i.createElement(o.X, {
                            key: "message",
                            margin: {
                                top: 1
                            }
                        }, i.createElement(o._25, {
                            type: o._30.P,
                            color: o.F.Alt2
                        }, Object(l.d)("This clip will be permanently deleted.", "ClipsModalDelete")))],
                        t = i.createElement(o._21, {
                            display: o.J.Flex,
                            flexWrap: o.M.NoWrap
                        }, i.createElement(o.X, {
                            className: "clips-modal-delete__thumb",
                            margin: {
                                right: 1
                            }
                        }, i.createElement(o.j, {
                            ratio: o.k.Aspect16x9
                        }, i.createElement("img", {
                            src: this.props.clip.thumbnailURL
                        }))), i.createElement(o.X, null, i.createElement(o._25, {
                            type: o._30.H5
                        }, this.props.clip.title), i.createElement(o._25, {
                            color: o.F.Alt2
                        }, Object(l.d)("{created, date, medium}", {
                            created: new Date(this.props.clip.createdAt)
                        }, "ClipsModalDelete"), " • ", Object(l.d)("Clipped by {curator}", {
                            curator: this.props.clip.curator.login
                        }, "ClipsModalDelete")), i.createElement(o._25, {
                            color: o.F.Alt2
                        }, Object(l.d)("{viewCount, number} views", {
                            viewCount: this.props.clip.viewCount
                        }, "ClipsModalDelete"))));
                    return i.createElement(d, {
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
            }(i.Component),
            y = a({
                props: function(e) {
                    return {
                        deleteClip: function(t) {
                            return r.__awaiter(v, void 0, void 0, function() {
                                var n;
                                return r.__generator(this, function(a) {
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
            S = n("3zLD"),
            _ = n("wqRA"),
            T = this,
            N = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            O = function(e) {
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
                    var e = i.createElement(o._25, {
                        type: o._30.P
                    }, Object(l.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                    return i.createElement(d, {
                        onSubmit: this.deleteAll,
                        onClose: this.props.onClose,
                        title: i.createElement(o._25, {
                            type: o._30.H4
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
            w = Object(S.compose)(Object(p.d)("ClipsModalDeleteAll"), a({
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
            }))(O),
            M = this,
            R = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            D = function(e) {
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
                    }, t.state = R, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = i.createElement(o._25, {
                            type: o._30.H4
                        }, Object(l.d)("Delete these clips?", "ClipsModalBatchDelete")),
                        t = i.createElement(o._25, {
                            type: o._30.P
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
                            return r.__awaiter(M, void 0, void 0, function() {
                                var t;
                                return r.__generator(this, function(n) {
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
            })(D);
        n.d(t, "a", function() {
            return d
        }), n.d(t, "b", function() {
            return f
        }), n.d(t, "d", function() {
            return y
        }), n.d(t, "e", function() {
            return w
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
//# sourceMappingURL=pages.clips-manager-af4a0765a063f2ba94350a4d57866e01.js.map