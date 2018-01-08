webpackJsonp([62], {
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
                                var t, C, b, v, S, E;
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
                                            return i.sent(), S = Object(c.a)(t, l, null, u), v && v(S), [2, S];
                                        case 3:
                                            throw E = i.sent(), r.i.error(E, "Unable to ban user"), v && v(Object(o.a)(a())), new Error(a());
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
            S = n("RH2O"),
            E = n("2KeS"),
            y = n("+xm8"),
            k = n("f2i/"),
            _ = n("Aj/L"),
            T = n("KSGD"),
            N = n("6sO2"),
            O = n("7vx8"),
            w = n("5LoI"),
            R = n("oIkB"),
            D = n("V5M+"),
            M = n("zCIC"),
            U = n("sikP"),
            x = n("WNmM"),
            A = n("F8kA"),
            j = n("rCmJ"),
            I = n("+Znq"),
            L = n("NY9D"),
            F = n("yDzg"),
            B = n("bhVC"),
            H = n("0i+s"),
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
            P = Object(v.c)("ClipsManagerSocialShare")(function(e) {
                var t = Object(N.d)("Share", "ClipsManagerSocialShare");
                return s.createElement(I.a, null, s.createElement("div", null, s.createElement(V._30, {
                    label: t
                }, s.createElement(V.v, {
                    ariaLabel: t,
                    type: V.w.Hollow,
                    icon: V._10.Share
                }))), s.createElement(V.p, {
                    direction: V.q.BottomRight,
                    size: V.r.Small
                }, s.createElement(V.U, {
                    display: V.H.Flex,
                    justifyContent: V.T.Between,
                    padding: 1
                }, G.map(function(t) {
                    return s.createElement(B.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(F.a)(e.clip.url, t.params),
                        onShareClick: Object(x.c)(e.clip, e.pageType)
                    })
                })), s.createElement(V.U, {
                    padding: {
                        x: 1,
                        y: .5
                    }
                }, s.createElement(V.M, {
                    label: Object(N.d)("Video Link", "ClipsManagerSocialShare")
                }, s.createElement(V.Q, {
                    readOnly: !0,
                    type: V.R.Text,
                    value: e.clip.url,
                    onFocus: a
                }))), s.createElement(V.U, {
                    padding: {
                        x: 1,
                        y: .5
                    }
                }, s.createElement(V.M, {
                    label: Object(N.d)("Embed Video", "ClipsManagerSocialShare")
                }, s.createElement(V.Q, {
                    readOnly: !0,
                    type: V.R.Text,
                    value: Object(H.a)(e.clip.embedURL),
                    onFocus: a
                })))))
            }),
            W = n("6BvN"),
            q = n("MV8X"),
            K = this,
            Q = {
                TITLE_TEXT: "cmgr-title-text",
                TITLE_INPUT: "cmgr-title-input",
                TITLE_SAVE: "cmgr-title-save",
                TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
            },
            z = 100,
            Y = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.renderTitle = function() {
                        return n.props.canEdit ? s.createElement(V.Q, {
                            id: Q.TITLE_INPUT,
                            "data-test-selector": Q.TITLE_INPUT,
                            type: V.R.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        }) : s.createElement(V._22, {
                            "data-test-selector": Q.TITLE_TEXT
                        }, n.state.title)
                    }, n.renderSaveButton = function() {
                        if (!n.props.canEdit) return null;
                        var e;
                        return e = n.state.hasErrored ? s.createElement(V._22, {
                            color: V.F.Error,
                            bold: !0
                        }, Object(N.d)("Uh-oh. Check for inappropriate language and try again!", "ClipsManagerTitleEdit")) : s.createElement(V._22, {
                            color: V.F.Link,
                            bold: !0
                        }, Object(N.d)("Title Saved!", "ClipsManagerTitleEdit")), s.createElement(V.U, {
                            flexShrink: 0,
                            flexGrow: 0
                        }, s.createElement(V.U, {
                            position: V._3.Relative
                        }, s.createElement(V.u, {
                            "data-test-selector": Q.TITLE_SAVE,
                            disabled: !n.canSaveEditedTitle(),
                            onClick: n.editClipTitle
                        }, Object(N.d)("Save", "ClipsManagerTitleEdit")), s.createElement(V.S, {
                            onClick: n.dismissBalloon,
                            "data-test-selector": Q.TITLE_SAVE_TOOLTIP
                        }, s.createElement(V.p, {
                            direction: V.q.TopRight,
                            show: n.state.isShowingBalloon
                        }, s.createElement(V.U, {
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
                            case W.a.Enter:
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
                    return s.createElement(V.U, {
                        display: V.H.Flex,
                        justifyContent: V.T.Center
                    }, s.createElement(V.U, {
                        flexGrow: 1,
                        padding: 1
                    }, s.createElement(V.M, {
                        id: Q.TITLE_INPUT,
                        label: Object(N.d)("Title", "ClipsManagerTitleEdit"),
                        hint: this.props.canEdit ? e : ""
                    }, s.createElement(V.U, {
                        display: V.H.Flex,
                        flexWrap: V.K.NoWrap
                    }, s.createElement(V.U, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, this.renderTitle()), this.renderSaveButton()))))
                }, t
            }(s.Component),
            $ = Object(O.a)(q, {
                props: function(e) {
                    return {
                        editTitle: function(t) {
                            return l.__awaiter(K, void 0, void 0, function() {
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
                        var e = Object(N.d)("Moderation", "ClipsManagerExpandedRow");
                        return s.createElement(V._30, {
                            label: e
                        }, s.createElement(V.U, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(I.a, null, s.createElement(V.v, {
                            ariaLabel: e,
                            type: V.w.Hollow,
                            icon: V._10.Sword,
                            "data-test-selector": X.MODERATION_BUTTON
                        }), s.createElement(V.p, {
                            "data-test-selector": X.MODERATION_DROPDOWN,
                            direction: V.q.BottomRight
                        }, s.createElement(V.U, {
                            padding: {
                                y: .5
                            }
                        }, s.createElement(V._18, {
                            borderBottom: !0
                        }, s.createElement(V.S, {
                            onClick: n.openTimeoutUserModal
                        }, s.createElement(V.U, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(N.d)("Timeout User (24 hr)", "ClipsManagerExpandedRow"))), s.createElement(V.S, {
                            onClick: n.openBanUserModal
                        }, s.createElement(V.U, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(N.d)("Ban User", "ClipsManagerExpandedRow")))), s.createElement(V.S, {
                            onClick: n.openDeleteAllModal
                        }, s.createElement(V.U, {
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
                        n.openModal(U.d, {
                            clip: n.props.clip,
                            onClose: n.closeModal,
                            onDelete: n.props.onDelete
                        })
                    }, n.openTimeoutUserModal = function() {
                        n.openModal(U.b, {
                            clip: n.props.clip,
                            isTemporary: !0,
                            onClose: n.closeModal
                        })
                    }, n.openBanUserModal = function() {
                        n.openModal(U.b, {
                            clip: n.props.clip,
                            isTemporary: !1,
                            onClose: n.closeModal
                        })
                    }, n.openDeleteAllModal = function() {
                        n.openModal(U.e, {
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
                    return s.createElement(j.a, {
                        onClickOut: this.onClickOutside
                    }, s.createElement(V._18, {
                        "data-target": this.props.dataTarget,
                        background: V.m.Base,
                        display: V.H.Block,
                        elevation: 3,
                        className: "clmgr-table__row-expanded",
                        position: V._3.Relative,
                        margin: {
                            bottom: 3
                        }
                    }, s.createElement(V._18, {
                        display: V.H.Flex,
                        justifyContent: V.T.Between,
                        alignItems: V.c.Center,
                        padding: 1,
                        background: V.m.Alt,
                        borderBottom: !0
                    }, s.createElement(V._30, {
                        label: n,
                        align: V._31.Left
                    }, s.createElement(V.U, {
                        flexGrow: 0
                    }, s.createElement(V.v, {
                        ariaLabel: n,
                        type: V.w.Hollow,
                        icon: V._10.Close,
                        onClick: this.props.onClose
                    }), s.createElement(V.p, {
                        direction: V.q.TopLeft
                    }))), s.createElement(V.U, {
                        display: V.H.Flex
                    }, this.renderModerationIcon(), s.createElement(V._30, {
                        label: a
                    }, s.createElement(V.U, {
                        margin: {
                            right: .5
                        }
                    }, s.createElement(V.v, {
                        ariaLabel: a,
                        type: V.w.Hollow,
                        icon: V._10.Trash,
                        onClick: this.openDeleteModal
                    }))), s.createElement(V.U, {
                        margin: {
                            right: .5
                        }
                    }, s.createElement(P, {
                        clip: this.props.clip,
                        pageType: this.props.pageType
                    })), s.createElement(V._30, {
                        label: Object(N.d)("Watch on Clips Page", "ClipsManagerExpandedRow"),
                        align: V._31.Right
                    }, s.createElement(V.v, {
                        ariaLabel: Object(N.d)("Popout", "ClipsManagerExpandedRow"),
                        type: V.w.Hollow,
                        linkTo: Object(F.a)(this.props.clip.url, {
                            tt_medium: "my_clips"
                        }),
                        icon: V._10.Popout
                    })))), s.createElement(V.U, {
                        padding: 1
                    }, s.createElement(V.N, {
                        gutterSize: V.O.None
                    }, s.createElement(V.G, {
                        cols: {
                            default: 12,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 5,
                            xl: 5
                        }
                    }, s.createElement(V.U, {
                        position: V._3.Relative
                    }, s.createElement(V.j, {
                        ratio: V.k.Aspect16x9
                    }, s.createElement("iframe", {
                        src: Object(F.a)(e.embedURL, {
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
                    }), s.createElement(V._18, {
                        background: V.m.Alt,
                        margin: 1,
                        padding: 1,
                        border: !0
                    }, s.createElement(V.N, null, s.createElement(V.G, {
                        cols: {
                            default: 4
                        }
                    }, s.createElement(V.U, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(V._22, {
                        bold: !0
                    }, Object(N.d)("Created On", "ClipsManagerExpandedRow")), s.createElement(V._22, {
                        ellipsis: !0,
                        transform: V._26.Capitalize,
                        title: t
                    }, t))), s.createElement(V.G, {
                        cols: {
                            default: 4
                        }
                    }, s.createElement(V.U, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(V._22, {
                        bold: !0
                    }, Object(N.d)("Clip Length", "ClipsManagerExpandedRow")), s.createElement(V._22, {
                        ellipsis: !0
                    }, Object(N.d)("{seconds, number}s", {
                        seconds: this.props.clip.durationSeconds
                    }, "ClipsManagerExpandedRow")))), s.createElement(V.G, {
                        cols: {
                            default: 4
                        }
                    }, s.createElement(V.U, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(V._22, {
                        bold: !0
                    }, Object(N.d)("Views", "ClipsManagerExpandedRow")), s.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        ellipsis: !0
                    }, s.createElement(V._9, {
                        asset: V._10.GlyphViews
                    }), s.createElement(V.U, {
                        padding: {
                            left: .5
                        }
                    }, Object(N.f)(e.viewCount, {
                        maximumFractionDigits: 1
                    }))))), s.createElement(V.G, {
                        cols: {
                            default: 4
                        }
                    }, s.createElement(V.U, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(V._22, {
                        bold: !0
                    }, Object(N.d)("Channel", "ClipsManagerExpandedRow")), s.createElement(V._22, {
                        ellipsis: !0
                    }, s.createElement(A.a, {
                        "data-test-selector": X.CHANNEL_LINK,
                        to: "/" + e.broadcaster.login + "/clips",
                        title: e.broadcaster.displayName
                    }, e.broadcaster.displayName)))), s.createElement(V.G, {
                        cols: {
                            default: 4
                        }
                    }, s.createElement(V.U, {
                        padding: {
                            y: .5
                        }
                    }, s.createElement(V._22, {
                        bold: !0
                    }, Object(N.d)("Game", "ClipsManagerExpandedRow")), s.createElement(V._22, {
                        ellipsis: !0
                    }, this.renderGameLink(e)))))))))))
                }, t
            }(s.Component),
            ee = Object(v.c)("ClipsManagerExpandedRow")(Object(O.a)(J)(Z)),
            te = Object(S.a)(null, function(e) {
                return Object(E.bindActionCreators)({
                    showModal: D.d,
                    closeModal: D.c
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
                        }(e) ? s.createElement(V.A, {
                            row: !0
                        }, s.createElement(V.C, {
                            size: V.D.Size3,
                            aspect: V.k.Aspect3x4,
                            imageSrc: function(e) {
                                return ie.a + "/" + e + "-" + ie.b + ".jpg"
                            }(e.title),
                            imageAlt: e.thumbnailAltText
                        }), s.createElement(V.B, null, s.createElement(V.U, {
                            padding: {
                                left: 1
                            }
                        }, s.createElement(V._22, {
                            type: V._27.H5
                        }, e.title), s.createElement(V._22, {
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
                        }), s.createElement(V.B, null, s.createElement(V.U, {
                            padding: {
                                left: 1
                            }
                        }, s.createElement(V._22, {
                            type: V._27.H5
                        }, e.name), s.createElement(V._22, {
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
                    return s.createElement(V.S, {
                        onClick: this.onClick
                    }, s.createElement(V.P, {
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
            le = {
                NO_RESULTS: "cmgr-no-search-results",
                RESULTS_MENU: "cmgr-search-results-menu",
                SEARCH_INPUT: "cmgr-search-input",
                CHANNEL_SEARCH: "cmgr-channel-search",
                GAME_SEARCH: "cmgr-game-search"
            },
            se = 5,
            oe = {
                currentCategory: w.a.Games,
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
                        var e = [s.createElement(V._19, {
                            active: t.state.currentCategory === w.a.Games,
                            onClick: t.setSearchTypeGame,
                            key: le.GAME_SEARCH,
                            "data-test-selector": le.GAME_SEARCH
                        }, Object(N.d)("Game Search", "ClipsManagerSearch"))];
                        return t.props.userRole !== g.Broadcaster && e.push(s.createElement(V._19, {
                            active: t.state.currentCategory === w.a.Users,
                            onClick: t.setSearchTypeChannel,
                            key: le.CHANNEL_SEARCH,
                            "data-test-selector": le.CHANNEL_SEARCH
                        }, Object(N.d)("Channel Search", "ClipsManagerSearch"))), s.createElement(V._20, null, e)
                    }, t.renderSearchResults = function() {
                        if (t.state.isLoading) return s.createElement(V.Y, null);
                        var e = t.state.currentCategory;
                        if (e === w.a.Users) {
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
                        if (e === w.a.Games) {
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
                        return s.createElement(V.U, {
                            "data-test-selector": le.NO_RESULTS,
                            display: V.H.Flex,
                            flexDirection: V.J.Column
                        }, s.createElement(V._18, {
                            textAlign: V._23.Center,
                            padding: {
                                y: 5
                            }
                        }, s.createElement(V._9, {
                            asset: V._10.NavSearch,
                            height: 36,
                            width: 36,
                            type: V._11.Brand
                        }), s.createElement(V._22, {
                            type: V._27.H4
                        }, Object(N.d)("No results found", "ClipsManagerSearch")), s.createElement(V._22, {
                            type: V._27.P,
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
                        t.setState(l.__assign({}, oe, {
                            currentCategory: w.a.Games
                        })), t.context.setSearchType(w.a.Games)
                    }, t.setSearchTypeChannel = function() {
                        t.setState(l.__assign({}, oe, {
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
                            case W.a.Esc:
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
                            case W.a.Up:
                                return void t.focusNext(!1);
                            case W.a.Down:
                                return void t.focusNext(!0);
                            case W.a.Enter:
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
                        if (i === w.a.Games) n = r[e].title, t.context.setSearchTerm(n);
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
                    }, t.searchClient = new ne.a(N.a.algoliaApplicationID, N.a.algoliaAPIKey), t.inputTimer = null, t.state = oe, t.searchResultRefs = [], t
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
                    return s.createElement(V.U, {
                        position: V._3.Relative
                    }, s.createElement(V.U, {
                        margin: {
                            bottom: 1
                        }
                    }, this.renderSearchOptions()), s.createElement(j.a, {
                        onClickOut: this.hideResults
                    }, s.createElement(V._12, {
                        id: le.SEARCH_INPUT,
                        refDelegate: this.setSearchInputRef,
                        onChange: this.onChange,
                        onFocus: this.onFocus,
                        onKeyDown: this.onKeyDown,
                        value: this.state.searchTerm,
                        placeholder: this.state.currentCategory === w.a.Games ? Object(N.d)("Enter a Game", "ClipsManagerSearch") : Object(N.d)("Enter a Channel", "ClipsManagerSearch")
                    }), s.createElement(V.p, {
                        "data-test-selector": le.RESULTS_MENU,
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
                    return s.createElement(V.U, {
                        className: "clmgr-filters-container"
                    }, s.createElement(V.N, {
                        gutterSize: V.O.None
                    }, s.createElement(V.G, {
                        cols: {
                            default: 12,
                            xs: 6,
                            sm: 6,
                            md: 12,
                            lg: 12
                        }
                    }, s.createElement(V.U, {
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(V.U, {
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(V._22, {
                        fontSize: V.L.Size5
                    }, Object(N.d)("List View", "ClipsManagerTable"))), s.createElement(V.U, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(V.U, {
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(V._8, {
                        "data-test-selector": ue,
                        label: Object(N.d)("Clips I've Created", "ClipsManagerTable"),
                        name: "MyClips",
                        checked: this.props.currentUserRole === g.Curator,
                        onChange: this.setCuratorRole
                    })), s.createElement(V.U, null, s.createElement(V._8, {
                        "data-test-selector": pe,
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
                        t = Object(N.g)(new Date(e.createdAt));
                    return s.createElement(V.U, {
                        className: "clmgr-table__row",
                        display: V.H.Flex,
                        overflow: V.Z.Hidden,
                        alignItems: V.c.Center
                    }, s.createElement(V.S, {
                        onClick: this.onRowClick,
                        alpha: !0
                    }, s.createElement(V.N, {
                        "data-target": this.props.dataTarget
                    }, s.createElement(V.G, {
                        cols: 4
                    }, s.createElement(V.U, {
                        display: V.H.Flex,
                        flexWrap: V.K.NoWrap,
                        alignItems: V.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(V.U, {
                        flexShrink: 0,
                        position: V._3.Relative
                    }, s.createElement(V._18, {
                        className: "clmgr-checkbox-bg",
                        background: V.m.Base,
                        position: V._3.Absolute
                    }), s.createElement(V.E, {
                        refDelegate: this.setCheckboxRef,
                        "data-test-selector": fe,
                        label: " ",
                        checked: this.props.isSelected,
                        onChange: this.selectClip
                    })), s.createElement(V.P, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, s.createElement(ge, {
                        imageURL: this.props.clip.thumbnailURL,
                        className: "clmgr-thumb"
                    })), s.createElement(V._22, {
                        type: V._27.H5,
                        title: e.title,
                        ellipsis: !0
                    }, e.title))), s.createElement(V.G, {
                        cols: 2
                    }, s.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(V.P, {
                        ellipsis: !0
                    }, s.createElement(A.a, {
                        to: "/" + e.broadcaster.login + "/clips",
                        title: e.broadcaster.displayName
                    }, e.broadcaster.displayName)))), s.createElement(V.G, {
                        cols: 2
                    }, s.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, this.renderGameLink(e))), s.createElement(V.G, {
                        cols: 2
                    }, s.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(V._22, {
                        title: t,
                        transform: V._26.Capitalize,
                        ellipsis: !0
                    }, t))), s.createElement(V.G, {
                        cols: 2
                    }, s.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        margin: {
                            right: .5
                        }
                    }, s.createElement(V._9, {
                        asset: V._10.GlyphViews
                    })), Object(N.f)(e.viewCount, {
                        maximumFractionDigits: 1
                    }))))))
                }, t.prototype.renderGameLink = function(e) {
                    return e.game ? s.createElement(V.P, {
                        ellipsis: !0
                    }, s.createElement(A.a, {
                        to: Object(L.c)(e.game.name),
                        title: e.game.name
                    }, e.game.name)) : null
                }, t
            }(s.Component),
            be = (n("EDaX"), "clips-manager-table-row"),
            ve = "clips-manager-select-all",
            Se = "clips-manager-batch-delete",
            Ee = "clips-manager-views-sort",
            ye = "clips-manager-createdat-sort",
            ke = "clips-manager-empty-body",
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
                        t.props.showModal(U.d, {
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
                            t.props.showModal(U.c, {
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
                    return this.props.error || !this.props.userID ? null : s.createElement(V.U, {
                        className: "clmgr-body-wrap",
                        display: V.H.Flex,
                        flexWrap: V.K.NoWrap,
                        flexDirection: V.J.ColumnReverse,
                        breakpointMedium: {
                            flexDirection: V.J.Row
                        }
                    }, s.createElement(V.U, {
                        className: "clmgr-table-wrap",
                        display: V.H.Flex,
                        flexGrow: 1,
                        position: V._3.Relative
                    }, s.createElement(V._18, {
                        background: V.m.Base,
                        border: !0,
                        elevation: 3,
                        margin: {
                            bottom: .5
                        },
                        fullWidth: !0
                    }, this.renderHeaderRow()), s.createElement(V._18, {
                        fullWidth: !0,
                        fullHeight: !0
                    }, s.createElement(M.b, null, s.createElement(V._18, {
                        background: V.m.Base,
                        elevation: 2,
                        border: !0
                    }, this.props.clips.length > 0 && !this.state.isNewQueryLoading && this.props.clips.map(function(t) {
                        return e.renderClipRow(t)
                    }), this.state.isNewQueryLoading && this.props.loading && s.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        justifyContent: V.T.Center,
                        padding: 1,
                        fullWidth: !0
                    }, s.createElement(V.Y, {
                        delay: 0
                    })), 0 === this.props.clips.length && !this.props.loading && s.createElement(V.U, {
                        display: V.H.Flex,
                        justifyContent: V.T.Center,
                        textAlign: V._23.Center,
                        padding: 2,
                        fullWidth: !0,
                        fullHeight: !0
                    }, s.createElement(V._22, {
                        type: V._27.H4,
                        color: V.F.Alt2,
                        "data-test-selector": ke
                    }, Object(N.d)("Create Clips to fill this space with the most memorable moments from your favorite Twitch streams and videos. Just hit the Clip button on the video player to try it out. {learnHowLink} to use Clips.", {
                        learnHowLink: s.createElement("a", {
                            target: "_blank",
                            rel: "noopener",
                            href: "https://help.twitch.tv/customer/portal/articles/2442508-how-to-use-clips"
                        }, Object(N.d)("Learn how", "ClipsManagerTable"))
                    }, "ClipsManagerTable"))), s.createElement(M.a, {
                        loadMore: this.loadMore,
                        enabled: !this.props.loading && this.props.hasNextPage
                    }), this.props.loading && !this.state.isNewQueryLoading && s.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        justifyContent: V.T.Center,
                        padding: 1,
                        fullWidth: !0
                    }, s.createElement(V.Y, {
                        delay: 0
                    })))))), s.createElement(V.U, {
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
                        n = s.createElement(V.E, {
                            "data-test-selector": ve,
                            label: " ",
                            checked: t,
                            onChange: this.toggleClipsSelection,
                            disabled: this.state.isNewQueryLoading && this.props.loading
                        });
                    if (e) return s.createElement(V.N, null, s.createElement(V.G, {
                        cols: 12
                    }, s.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        fullHeight: !0
                    }, s.createElement(V.U, {
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, n), s.createElement(V.U, {
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, s.createElement(V._22, null, Object(N.d)("{numClips, number} selected", {
                        numClips: this.state.numberOfSelectedClips
                    }, "ClipsManagerTable"))), s.createElement(V.U, {
                        flexShrink: 0,
                        alignItems: V.c.Center,
                        fullHeight: !0
                    }, s.createElement(V.v, {
                        ariaLabel: Object(N.d)("Delete Clip", "ClipsManagerTable"),
                        icon: V._10.Trash,
                        onClick: this.renderBatchDeleteModal,
                        "data-test-selector": Se
                    })))));
                    var a = this.props.sort,
                        i = a === r.ViewsAscending || a === r.ViewsDescending,
                        l = a === r.CreatedAtAscending || a === r.CreatedAtDescending,
                        o = Object(N.d)("Created", "ClipsManagerTable"),
                        c = Object(N.d)("Views", "ClipsManagerTable");
                    return s.createElement(V.N, null, s.createElement(V.G, {
                        cols: 4
                    }, s.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, s.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        margin: {
                            right: 1
                        }
                    }, n), s.createElement(V._22, null, Object(N.d)("Info", "ClipsManagerTable")))), s.createElement(V.G, {
                        cols: 2
                    }, s.createElement(V.U, {
                        padding: 1
                    }, Object(N.d)("Channel", "ClipsManagerTable"))), s.createElement(V.G, {
                        cols: 2
                    }, s.createElement(V.U, {
                        padding: 1
                    }, Object(N.d)("Game", "ClipsManagerTable"))), s.createElement(V.G, {
                        cols: 2
                    }, s.createElement(V.U, {
                        padding: {
                            y: .5,
                            right: 1
                        },
                        display: V.H.Flex,
                        fullHeight: !0
                    }, s.createElement(V.S, {
                        alpha: !0,
                        onClick: this.toggleCreatedAtSort,
                        "data-test-selector": ye
                    }, s.createElement(V.U, {
                        display: V.H.Flex,
                        flexWrap: V.K.NoWrap,
                        alignContent: V.b.Center,
                        justifyContent: V.T.Between,
                        padding: {
                            x: 1
                        }
                    }, s.createElement(V._22, {
                        color: V.F.Link,
                        title: o,
                        bold: !0,
                        ellipsis: !0
                    }, o), l && s.createElement(V._9, {
                        asset: a === r.CreatedAtDescending ? V._10.GlyphArrDown : V._10.GlyphArrUp,
                        type: V._11.Brand
                    }))))), s.createElement(V.G, {
                        cols: 2
                    }, s.createElement(V.U, {
                        padding: {
                            y: .5,
                            right: 1
                        },
                        display: V.H.Flex,
                        fullHeight: !0
                    }, s.createElement(V.S, {
                        alpha: !0,
                        onClick: this.toggleViewsSort,
                        "data-test-selector": Ee
                    }, s.createElement(V.U, {
                        display: V.H.Flex,
                        flexWrap: V.K.NoWrap,
                        alignContent: V.b.Center,
                        justifyContent: V.T.Between,
                        padding: {
                            x: 1
                        }
                    }, s.createElement(V._22, {
                        color: V.F.Link,
                        title: c,
                        bold: !0,
                        ellipsis: !0
                    }, c), i && s.createElement(V._9, {
                        asset: a === r.ViewsDescending ? V._10.GlyphArrDown : V._10.GlyphArrUp,
                        type: V._11.Brand
                    }))))))
                }, t.prototype.renderClipRow = function(e) {
                    var t = !!this.state.selectedClips[e.slug];
                    if (e.slug === this.state.expandedSlug) {
                        var n = this.props.userRole === g.Curator ? x.a.MyClips : x.a.ClipsOfMyChannel;
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
            Ne = Object(o.compose)(Object(v.c)("ClipsManagerTable"), Object(O.a)(Te, {
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
                                        i = n.user.clips.edges;
                                    return {
                                        user: l.__assign({}, n.user, {
                                            clips: l.__assign({}, n.user.clips, {
                                                edges: Object(R.b)(a, i)
                                            })
                                        })
                                    }
                                }
                            })
                        },
                        onDeleteClip: function(t) {
                            Object(R.d)(Te, e.data.variables, function(e) {
                                var n = e.user.clips.edges;
                                return e.user.clips.edges = n.filter(function(e) {
                                    var n = e.node.slug;
                                    return t.slug !== n
                                }), e
                            })
                        },
                        onDeleteAllClips: function(t) {
                            Object(R.d)(Te, e.data.variables, function(e) {
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
                            Object(R.d)(Te, e.data.variables, function(e) {
                                var n = e.user.clips.edges;
                                return e.user.clips.edges = n.filter(function(e) {
                                    var n = e.node.slug;
                                    return !t.includes(n)
                                }), e
                            })
                        }
                    }
                }
            }), Object(S.a)(null, function(e) {
                return Object(E.bindActionCreators)({
                    showModal: D.d,
                    closeModal: D.c
                }, e)
            }))(_e),
            Oe = n("tYdz"),
            we = function(e) {
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
                    return this.props.data.loading || this.props.data.error || !this.props.data.currentUser ? null : s.createElement(V.U, {
                        className: "scroll-y",
                        padding: {
                            x: 3,
                            top: 3
                        },
                        fullHeight: !0
                    }, s.createElement(V.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(V._22, {
                        type: V._27.H1,
                        fontSize: V.L.Size3
                    }, Object(N.d)("Clips", "ClipsManagerPage"))), s.createElement(Ne, {
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
            Re = Object(o.compose)(Object(v.c)("ClipsManager"), Object(O.a)(Oe), c.e)(we),
            De = Object(S.a)(function(e) {
                return {
                    isLoggedIn: Object(_.d)(e)
                }
            }, function(e) {
                return Object(E.bindActionCreators)({
                    login: function() {
                        return Object(k.f)(y.a.ClipsManager)
                    }
                }, e)
            })(Re),
            Me = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onRoleChange = function(e) {
                        e !== g.Broadcaster && t.props.history.push({
                            pathname: i(t.props.match.params.channelName, e)
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
            Ue = Object(o.compose)(Object(v.c)("ClipsOfMeManagerPage", {
                destination: u.a.ChannelClipsManager
            }), Object(d.a)({
                location: p.PageviewLocation.ChannelClipsManager,
                properties: {
                    is_live: !1
                }
            }), c.e)(Me),
            xe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onRoleChange = function(e) {
                        e !== g.Curator && t.props.history.push({
                            pathname: i(t.props.match.params.channelName, e)
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
            Ae = Object(o.compose)(Object(v.c)("MyClipsManagerPage", {
                destination: u.a.MyClipsManager
            }), Object(d.a)({
                location: p.PageviewLocation.MyClipsManager,
                properties: {
                    is_live: !1
                }
            }), c.e)(xe);
        n.d(t, "ChannelClipsManagerPage", function() {
            return Ue
        }), n.d(t, "MyClipsManagerPage", function() {
            return Ae
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
            S = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            E = function(e) {
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
                    }, t.state = S, t
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
            y = a({
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
            })(E),
            k = n("BhyV"),
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
                    }, t.state = N, t
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
            w = Object(k.compose)(Object(p.c)("ClipsModalDeleteAll"), a({
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
            }))(O),
            R = this,
            D = {
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
                    }, t.state = D, t
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
            U = a({
                props: function(e) {
                    return {
                        deleteClips: function() {
                            return i.__awaiter(R, void 0, void 0, function() {
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
            })(M);
        n.d(t, "a", function() {
            return d
        }), n.d(t, "b", function() {
            return f
        }), n.d(t, "d", function() {
            return y
        }), n.d(t, "e", function() {
            return w
        }), n.d(t, "c", function() {
            return U
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
//# sourceMappingURL=pages.clips-manager-1fd9ce30bbab26d5d0553e9cdce2c603.js.map