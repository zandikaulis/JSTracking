webpackJsonp([76], {
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
    QIXk: function(e, t, n) {
        "use strict";
        var i, a, r, l = n("TToO"),
            s = n("GiK3"),
            o = n("6sO2"),
            c = n("7vx8"),
            d = n("6BvN"),
            u = n("oIkB"),
            p = n("vH/s"),
            m = function(e, t, n, i, a) {
                var r = Date.now() / 1e3;
                o.o.tracking.track(p.SpadeEventType.ClipEdit, {
                    channel_id: e,
                    client_time: r,
                    clip_edit_session_id: t + "," + Math.floor(r),
                    clip_id: t,
                    clip_slug: n,
                    effect_name: "title",
                    effect_setting: i,
                    front_end: !0,
                    location: a
                })
            },
            h = n("CIox");
        ! function(e) {
            e.AlreadyPublished = "already_published", e.EditingWindowExpired = "editing_window_expired", e.InvalidSpeedDuration = "invalid_speed_duration", e.InvalidDuration = "invalid_duration", e.InvalidTitle = "invalid_title", e.Unknown = "unknown"
        }(i || (i = {})),
        function(e) {
            e.InvalidTitle = "invalid_title"
        }(a || (a = {})),
        function(e) {
            e.Unsent = "unsent", e.Sending = "sending", e.Error = "error", e.Successful = "successful"
        }(r || (r = {}));
        var g, f = 5,
            C = 60,
            v = n("Odds"),
            b = n("isxN"),
            E = {
                publishState: r.Unsent,
                errorMessage: null
            },
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = E, t.onError = function(e) {
                        t.setState({
                            publishState: r.Error,
                            errorMessage: e
                        }), t.props.onError(e)
                    }, t.onPublish = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return l.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.setState({
                                                publishState: r.Sending
                                            }), e = this.props.endOffset - this.props.startOffset, this.props.startOffset > this.props.endOffset || e < f || e > C) return this.onError(i.InvalidDuration), [2];
                                        if ("" === this.props.title.trim()) return this.onError(g.emptySubmission), [2];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.publishClip(Object(u.a)({
                                            segments: [{
                                                offsetSeconds: this.props.startOffset,
                                                durationSeconds: this.props.endOffset - this.props.startOffset,
                                                speed: 1
                                            }],
                                            slug: this.props.slug,
                                            title: this.props.title
                                        }))];
                                    case 2:
                                        return (t = a.sent()).data.publishClip && t.data.publishClip.error && t.data.publishClip.error.message ? (n = t.data.publishClip.error.message, this.onError(n)) : (this.setState({
                                            publishState: r.Successful
                                        }), this.props.history.push("/create", {
                                            isPostEdit: !0,
                                            slug: this.props.slug
                                        })), [3, 4];
                                    case 3:
                                        return a.sent(), n = i.Unknown, this.onError(n), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.state.publishState === r.Error && e.title.length > 0 && this.props.title !== e.title && this.setState(E), e.isSubmitted && !this.props.isSubmitted && this.onPublish()
                }, t.prototype.render = function() {
                    var e = this.state.publishState === r.Error,
                        t = this.state.publishState === r.Sending;
                    return s.createElement(v._8, null, s.createElement(v.v, {
                        onClick: this.onPublish,
                        disabled: e,
                        state: t ? v.A.Loading : v.A.Default,
                        size: v.z.Large,
                        blurAfterClick: !0
                    }, Object(o.d)("Publish", "ClipsPublishButton")))
                }, t = l.__decorate([Object(c.a)(b, {
                    name: "publishClip"
                })], t)
            }(s.Component),
            S = Object(h.f)(k),
            y = n("2TZ0"),
            _ = {
                TITLE_INPUT: "cmgr-title-input",
                TITLE_SAVE: "cmgr-title-save",
                TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
            };
        ! function(e) {
            e.emptySubmission = "emptySubmission", e.characterLimitReached = "characterLimitReached", e.channelViolation = "channelViolation", e.notCurator = "notCurator", e.unknown = "unknown"
        }(g || (g = {}));
        var T = 100,
            w = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderForClipsViewing = function() {
                        return s.createElement("div", null, s.createElement(v._43, {
                            id: _.TITLE_INPUT,
                            "data-test-selector": _.TITLE_INPUT,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        }), s.createElement(v._8, {
                            display: v.R.Flex,
                            justifyContent: v._7.Between,
                            alignItems: v.c.Center,
                            padding: {
                                top: 1
                            }
                        }, n.state.showError ? s.createElement(v.Q, {
                            color: v.K.Error
                        }, n.getErrorMessage()) : s.createElement(v.Q, {
                            color: v.K.Alt2
                        }, n.getRemainingCharacterText()), s.createElement(v._8, {
                            display: v.R.Flex
                        }, s.createElement(v.v, {
                            "data-test-selector": _.TITLE_SAVE,
                            onClick: n.props.onCancel,
                            type: v.B.Hollow
                        }, Object(o.d)("Cancel", "ClipsTitleEdit")), s.createElement(v._8, {
                            padding: {
                                left: 1
                            }
                        }, n.renderSave()))))
                    }, n.renderForManager = function() {
                        return s.createElement(v.W, {
                            id: _.TITLE_INPUT,
                            label: Object(o.d)("Title", "ClipsTitleEdit"),
                            hint: n.getRemainingCharacterText()
                        }, s.createElement(v._8, {
                            display: v.R.Flex,
                            flexWrap: v.U.NoWrap
                        }, s.createElement(v._8, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, s.createElement(v._4, {
                            id: _.TITLE_INPUT,
                            "data-test-selector": _.TITLE_INPUT,
                            type: v._5.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        })), s.createElement(v._8, {
                            flexShrink: 0,
                            flexGrow: 0
                        }, s.createElement(v._8, {
                            position: v._15.Relative
                        }, n.renderSave(), s.createElement(v._6, {
                            onClick: n.dismissMessage,
                            "data-test-selector": _.TITLE_SAVE_TOOLTIP
                        }, s.createElement(v.q, {
                            direction: v.r.TopRight,
                            show: n.state.showError || n.state.showSuccess
                        }, s.createElement(v._8, {
                            padding: 1
                        }, n.state.showSuccess ? s.createElement(v.Q, {
                            color: v.K.Link
                        }, Object(o.d)("Title Saved!", "ClipsTitleEdit")) : s.createElement(v.Q, {
                            color: v.K.Error
                        }, n.getErrorMessage()))))))))
                    }, n.renderForEdit = function() {
                        var e;
                        if ((n.props.startOffset || 0 === n.props.startOffset) && n.props.endOffset) return e = n.state.showError ? s.createElement(v.Q, {
                            color: v.K.Error
                        }, n.getErrorMessage()) : 0 === n.state.title.length && n.props.broadcasterName ? s.createElement(v.Q, {
                            color: v.K.Alt2
                        }, Object(o.d)("Clips with titles get more views. Help {broadcasterName} get discovered by adding a title.", {
                            broadcasterName: n.props.broadcasterName
                        }, "ClipsTitleEdit")) : s.createElement(v.Q, {
                            color: v.K.Alt2
                        }, n.getRemainingCharacterText()), s.createElement(v._8, null, s.createElement(v._8, {
                            fullWidth: !0
                        }, s.createElement(v._4, {
                            id: _.TITLE_INPUT,
                            "data-test-selector": _.TITLE_INPUT,
                            type: v._5.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown,
                            placeholder: Object(o.d)("Add a title (required)", "ClipsTitleEdit"),
                            autoFocus: !0
                        })), s.createElement(v._8, {
                            display: v.R.Flex,
                            justifyContent: v._7.Between,
                            alignItems: v.c.Center,
                            padding: {
                                top: 1
                            }
                        }, e, s.createElement(v._8, {
                            display: v.R.Flex
                        }, s.createElement(v._8, {
                            padding: {
                                left: 1
                            }
                        }, s.createElement(S, {
                            isSubmitted: n.state.showSuccess,
                            title: n.state.title,
                            slug: n.props.clipSlug,
                            startOffset: n.props.startOffset,
                            endOffset: n.props.endOffset,
                            onError: n.onPublishClipError
                        })))))
                    }, n.renderSave = function() {
                        return s.createElement(v.v, {
                            "data-test-selector": _.TITLE_SAVE,
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
                        return l.__awaiter(n, void 0, void 0, function() {
                            var e, t;
                            return l.__generator(this, function(n) {
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
                return l.__extends(t, e), t.prototype.render = function() {
                    return this.props.location === p.PageviewLocation.MyClipsManager ? this.renderForManager() : this.props.location === p.PageviewLocation.ClipsEditing ? this.renderForEdit() : this.renderForClipsViewing()
                }, t.prototype.getErrorMessage = function() {
                    switch (this.state.error) {
                        case g.channelViolation:
                            return Object(o.d)("Uh-oh. Check for inappropriate language and try again!", "ClipsTitleEdit");
                        case g.emptySubmission:
                            return Object(o.d)("Please add a title.", "ClipsTitleEdit");
                        default:
                            return Object(o.d)("Whoops. Something went wrong.", "ClipsTitleEdit")
                    }
                }, t.prototype.errorMessageToError = function(e) {
                    return e.includes("403:") || e.toLowerCase() === i.InvalidTitle.toLowerCase() || e.toLowerCase() === a.InvalidTitle.toLowerCase() ? g.channelViolation : e === g.emptySubmission ? g.emptySubmission : g.unknown
                }, t
            }(s.Component),
            N = Object(c.a)(y, {
                name: "editTitle"
            })(w);
        n.d(t, !1, function() {
            return _
        }), n.d(t, "b", function() {
            return g
        }), n.d(t, !1, function() {
            return w
        }), n.d(t, "a", function() {
            return N
        })
    },
    Qfvd: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        });
        var i = "//static-cdn.jtvnw.net/ttv-boxart",
            a = "52x72"
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
        var i, a, r = n("6sO2"),
            l = n("8Wuk"),
            s = n("vH/s"),
            o = ((i = {})[l.b.Twitter] = "twitter", i[l.b.Reddit] = "reddit", i[l.b.VKontakte] = "vkontakte", i[l.b.Facebook] = "facebook", i[l.b.Copy] = "link", i[l.b.CopyInput] = "option_link", i),
            c = {
                MyClips: "MyClips",
                ClipsOfMyChannel: "ClipsOfMyChannel"
            },
            d = {
                Game: "TopClipsGame",
                Channel: "TopClipsChannel"
            },
            u = ((a = {
                MyClips: s.PageviewLocation.MyClipsManager,
                ClipsOfMyChannel: s.PageviewLocation.ChannelClipsManager,
                TopClipsGame: s.PageviewLocation.ClipsGame,
                TopClipsChannel: s.PageviewLocation.ChannelClips
            })[s.PageviewLocation.ClipsEditing] = s.PageviewLocation.ClipsEditing, a[s.PageviewLocation.ClipsViewing] = s.PageviewLocation.ClipsViewing, a),
            p = function(e, t, n, i, a) {
                return function(l) {
                    r.o.tracking.track(s.SpadeEventType.VideoShare, {
                        vod_id: e,
                        vod_type: "clip",
                        share_platform: o[l],
                        location: u[a],
                        game: t,
                        channel_id: Number(n || 0),
                        channel: i,
                        live: null
                    })
                }
            }
    },
    XITx: function(e, t) {},
    aeDV: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, a = n("TToO"),
            r = n("GiK3"),
            l = n("3zLD"),
            s = n("CIox"),
            o = n("j7/Y"),
            c = n("w9tK"),
            d = n("vH/s");
        ! function(e) {
            e[e.ViewsAscending = 0] = "ViewsAscending", e[e.ViewsDescending = 1] = "ViewsDescending", e[e.CreatedAtAscending = 2] = "CreatedAtAscending", e[e.CreatedAtDescending = 3] = "CreatedAtDescending"
        }(i || (i = {}));
        var u, p = ((h = {})[i.CreatedAtAscending] = "CREATED_AT_ASC", h[i.CreatedAtDescending] = "CREATED_AT_DESC", h[i.ViewsAscending] = "VIEWS_ASC", h[i.ViewsDescending] = "VIEWS_DESC", h);
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
            E = n("+xm8"),
            k = n("f2i/"),
            S = n("Aj/L"),
            y = n("KSGD"),
            _ = n("6sO2"),
            T = n("7vx8"),
            w = n("5LoI"),
            N = n("oIkB"),
            R = n("V5M+"),
            O = n("zCIC"),
            D = n("sikP"),
            M = n("WNmM"),
            x = n("F8kA"),
            L = n("rCmJ"),
            I = n("+Znq"),
            A = n("NY9D"),
            j = n("yDzg"),
            F = n("bhVC"),
            U = n("AoO8"),
            B = n("Odds"),
            V = [{
                type: F.b.Twitter,
                params: {
                    tt_medium: "twtr"
                }
            }, {
                type: F.b.Facebook,
                params: {
                    tt_medium: "fb"
                }
            }, {
                type: F.b.VKontakte
            }, {
                type: F.b.Reddit,
                params: {
                    tt_medium: "redt"
                }
            }, {
                type: F.b.Copy
            }];

        function P(e) {
            e.currentTarget.select()
        }
        var Q = Object(C.d)("ClipsManagerSocialShare")(function(e) {
                var t = Object(_.d)("Share", "ClipsManagerSocialShare");
                return r.createElement(I.a, null, r.createElement("div", null, r.createElement(B._49, {
                    label: t
                }, r.createElement(B.w, {
                    ariaLabel: t,
                    type: B.y.Hollow,
                    icon: B._23.Share
                }))), r.createElement(B.q, {
                    direction: B.r.BottomRight,
                    size: B.s.Small
                }, r.createElement(B._8, {
                    display: B.R.Flex,
                    justifyContent: B._7.Between,
                    padding: 1
                }, V.map(function(t) {
                    return r.createElement(F.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(j.a)(e.clip.url, t.params),
                        onShareClick: Object(M.c)(e.clip.id, e.clip.game && e.clip.game.name, e.clip.broadcaster && e.clip.broadcaster.id, e.clip.broadcaster && e.clip.broadcaster.login, e.pageType)
                    })
                })), r.createElement(B._8, {
                    padding: {
                        x: 1,
                        y: .5
                    }
                }, r.createElement(B.W, {
                    label: Object(_.d)("Video Link", "ClipsManagerSocialShare")
                }, r.createElement(B._4, {
                    readOnly: !0,
                    type: B._5.Text,
                    value: e.clip.url,
                    onFocus: P
                }))), r.createElement(B._8, {
                    padding: {
                        x: 1,
                        y: .5
                    }
                }, r.createElement(B.W, {
                    label: Object(_.d)("Embed Video", "ClipsManagerSocialShare")
                }, r.createElement(B._4, {
                    readOnly: !0,
                    type: B._5.Text,
                    value: Object(U.a)(e.clip.embedURL),
                    onFocus: P
                })))))
            }),
            H = n("QIXk"),
            G = n("iFCf"),
            K = (n("qCag"), {
                MODERATION_DROPDOWN: "cmgr-moderation-dropdown",
                MODERATION_BUTTON: "cmgr-moderation-button",
                GAME_LINK: "cmgr-expanded-game-link",
                CHANNEL_LINK: "cmgr-expanded-channel-link"
            }),
            W = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderTitle = function() {
                        var e = n.props.clip;
                        return n.props.data.currentUser.id === (e && e.curator && e.curator.id) ? r.createElement(H.a, {
                            clipId: e.id,
                            clipSlug: e.slug,
                            clipTitle: e.title,
                            clipBroadcasterId: e.broadcaster ? Number(e.broadcaster.id) : 0,
                            location: d.PageviewLocation.MyClipsManager
                        }) : r.createElement(B.W, {
                            label: Object(_.d)("Title", "ClipsManagerTitleEdit")
                        }, r.createElement(B._8, {
                            display: B.R.Flex,
                            flexWrap: B.U.NoWrap
                        }, r.createElement(B._8, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(B.Q, null, e.title))))
                    }, n.renderGameLink = function(e) {
                        return e.game ? r.createElement(x.a, {
                            "data-test-selector": K.GAME_LINK,
                            to: Object(A.c)(e.game.name),
                            title: e.game.name
                        }, e.game.name) : null
                    }, n.renderModerationIcon = function() {
                        if (!n.props.clip.broadcaster || n.props.data.currentUser.id !== n.props.clip.broadcaster.id) return null;
                        var e = Object(_.d)("Moderation", "ClipsManagerExpandedRow");
                        return r.createElement(B._49, {
                            label: e
                        }, r.createElement(B._8, {
                            margin: {
                                right: .5
                            }
                        }, r.createElement(I.a, null, r.createElement(B.w, {
                            ariaLabel: e,
                            type: B.y.Hollow,
                            icon: B._23.Sword,
                            "data-test-selector": K.MODERATION_BUTTON
                        }), r.createElement(B.q, {
                            "data-test-selector": K.MODERATION_DROPDOWN,
                            direction: B.r.BottomRight
                        }, r.createElement(B._8, {
                            padding: {
                                y: .5
                            }
                        }, r.createElement(B._32, {
                            borderBottom: !0
                        }, r.createElement(B._6, {
                            onClick: n.openTimeoutUserModal
                        }, r.createElement(B._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(_.d)("Timeout User (24 hr)", "ClipsManagerExpandedRow"))), r.createElement(B._6, {
                            onClick: n.openBanUserModal
                        }, r.createElement(B._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(_.d)("Ban User", "ClipsManagerExpandedRow")))), r.createElement(B._6, {
                            onClick: n.openDeleteAllModal
                        }, r.createElement(B._8, {
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
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.clip,
                        t = Object(_.c)(new Date(e.createdAt), "medium"),
                        n = Object(_.d)("Close", "ClipsManagerExpandedRow"),
                        i = Object(_.d)("Delete", "ClipsManagerExpandedRow");
                    return r.createElement(L.a, {
                        onClickOut: this.onClickOutside
                    }, r.createElement(B._32, {
                        "data-target": this.props.dataTarget,
                        background: B.n.Base,
                        display: B.R.Block,
                        elevation: 3,
                        className: "clmgr-table__row-expanded",
                        position: B._15.Relative,
                        margin: {
                            bottom: 3
                        }
                    }, r.createElement(B._32, {
                        display: B.R.Flex,
                        justifyContent: B._7.Between,
                        alignItems: B.c.Center,
                        padding: 1,
                        background: B.n.Alt,
                        borderBottom: !0
                    }, r.createElement(B._49, {
                        label: n,
                        align: B._50.Left
                    }, r.createElement(B._8, {
                        flexGrow: 0
                    }, r.createElement(B.w, {
                        ariaLabel: n,
                        type: B.y.Hollow,
                        icon: B._23.Close,
                        onClick: this.props.onClose
                    }), r.createElement(B.q, {
                        direction: B.r.TopLeft
                    }))), r.createElement(B._8, {
                        display: B.R.Flex
                    }, this.renderModerationIcon(), r.createElement(B._49, {
                        label: i
                    }, r.createElement(B._8, {
                        margin: {
                            right: .5
                        }
                    }, r.createElement(B.w, {
                        ariaLabel: i,
                        type: B.y.Hollow,
                        icon: B._23.Trash,
                        onClick: this.openDeleteModal
                    }))), r.createElement(B._8, {
                        margin: {
                            right: .5
                        }
                    }, r.createElement(Q, {
                        clip: this.props.clip,
                        pageType: this.props.pageType
                    })), r.createElement(B._49, {
                        label: Object(_.d)("Watch on Clips Page", "ClipsManagerExpandedRow"),
                        align: B._50.Right
                    }, r.createElement(B.w, {
                        ariaLabel: Object(_.d)("Popout", "ClipsManagerExpandedRow"),
                        type: B.y.Hollow,
                        linkTo: Object(j.a)(this.props.clip.url, {
                            tt_medium: "my_clips"
                        }),
                        icon: B._23.Popout
                    })))), r.createElement(B._8, {
                        padding: 1
                    }, r.createElement(B.Y, {
                        gutterSize: B.Z.None
                    }, r.createElement(B.L, {
                        cols: {
                            default: 12,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 5,
                            xl: 5
                        }
                    }, r.createElement(B._8, {
                        position: B._15.Relative
                    }, r.createElement(B.k, {
                        ratio: B.l.Aspect16x9
                    }, r.createElement("iframe", {
                        src: Object(j.a)(e.embedURL, {
                            autoplay: "false"
                        }),
                        frameBorder: 0,
                        width: "100%",
                        height: "100%",
                        scrolling: "no",
                        allowFullScreen: !0
                    })))), r.createElement(B.L, {
                        cols: {
                            default: 12,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 7,
                            xl: 7
                        }
                    }, r.createElement(B._8, {
                        display: B.R.Flex,
                        justifyContent: B._7.Center
                    }, r.createElement(B._8, {
                        flexGrow: 1,
                        padding: 1
                    }, this.renderTitle())), r.createElement(B._32, {
                        background: B.n.Alt,
                        margin: 1,
                        padding: 1,
                        border: !0
                    }, r.createElement(B.Y, null, r.createElement(B.L, {
                        cols: {
                            default: 4
                        }
                    }, r.createElement(B._8, {
                        padding: {
                            y: .5
                        }
                    }, r.createElement(B.Q, {
                        bold: !0
                    }, Object(_.d)("Created On", "ClipsManagerExpandedRow")), r.createElement(B.Q, {
                        ellipsis: !0,
                        transform: B._45.Capitalize,
                        title: t
                    }, t))), r.createElement(B.L, {
                        cols: {
                            default: 4
                        }
                    }, r.createElement(B._8, {
                        padding: {
                            y: .5
                        }
                    }, r.createElement(B.Q, {
                        bold: !0
                    }, Object(_.d)("Clip Length", "ClipsManagerExpandedRow")), r.createElement(B.Q, {
                        ellipsis: !0
                    }, Object(_.d)("{seconds, number}s", {
                        seconds: this.props.clip.durationSeconds
                    }, "ClipsManagerExpandedRow")))), r.createElement(B.L, {
                        cols: {
                            default: 4
                        }
                    }, r.createElement(B._8, {
                        padding: {
                            y: .5
                        }
                    }, r.createElement(B.Q, {
                        bold: !0
                    }, Object(_.d)("Views", "ClipsManagerExpandedRow")), r.createElement(B._8, {
                        display: B.R.Flex,
                        alignItems: B.c.Center,
                        ellipsis: !0
                    }, r.createElement(B._22, {
                        asset: B._23.GlyphViews
                    }), r.createElement(B._8, {
                        padding: {
                            left: .5
                        }
                    }, Object(_.f)(e.viewCount, {
                        maximumFractionDigits: 1
                    }))))), r.createElement(B.L, {
                        cols: {
                            default: 4
                        }
                    }, e.broadcaster && r.createElement(B._8, {
                        padding: {
                            y: .5
                        }
                    }, r.createElement(B.Q, {
                        bold: !0
                    }, Object(_.d)("Channel", "ClipsManagerExpandedRow")), r.createElement(B.Q, {
                        ellipsis: !0
                    }, r.createElement(x.a, {
                        "data-test-selector": K.CHANNEL_LINK,
                        to: "/" + e.broadcaster.login + "/clips",
                        title: e.broadcaster.displayName
                    }, e.broadcaster.displayName)))), r.createElement(B.L, {
                        cols: {
                            default: 4
                        }
                    }, r.createElement(B._8, {
                        padding: {
                            y: .5
                        }
                    }, r.createElement(B.Q, {
                        bold: !0
                    }, Object(_.d)("Game", "ClipsManagerExpandedRow")), r.createElement(B.Q, {
                        ellipsis: !0
                    }, this.renderGameLink(e)))))))))))
                }, t
            }(r.Component),
            q = Object(C.d)("ClipsManagerExpandedRow")(Object(T.a)(G)(W));
        var z = Object(v.b)(null, function(e) {
                return Object(b.b)({
                    showModal: R.d,
                    closeModal: R.c
                }, e)
            })(q),
            Y = n("6BvN"),
            $ = n("MAZT"),
            J = n("uTyw");
        var X = n("Qfvd");
        n("uHjT");
        var Z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderCardContent = function() {
                        var e, n = t.props.searchResult;
                        return function(e) {
                            var t = e;
                            return void 0 !== t.title && void 0 !== t.popularity
                        }(n) ? r.createElement(B.C, {
                            row: !0
                        }, r.createElement(B.E, {
                            size: B.F.Size3,
                            aspect: B.l.Aspect3x4,
                            src: (e = n.title, X.a + "/" + e + "-" + X.b + ".jpg"),
                            alt: n.thumbnailAltText
                        }), r.createElement(B.D, {
                            overflow: B._11.Hidden
                        }, r.createElement(B._8, {
                            padding: {
                                left: 1
                            }
                        }, r.createElement(B.Q, {
                            type: B._46.H5
                        }, n.title), r.createElement(B.Q, {
                            className: "clmgr-result__subtitle",
                            ellipsis: !0
                        }, Object(_.d)("{numViewers, number} viewers", {
                            numViewers: n.popularity
                        }, "ClipsManagerSearch"))))) : function(e) {
                            return void 0 !== e.followers
                        }(n) ? r.createElement(B.C, {
                            row: !0
                        }, r.createElement(B.E, {
                            size: B.F.Size3,
                            aspect: B.l.Aspect1x1,
                            src: n.thumbnail,
                            alt: n.thumbnailAltText
                        }), r.createElement(B.D, {
                            overflow: B._11.Hidden
                        }, r.createElement(B._8, {
                            padding: {
                                left: 1
                            }
                        }, r.createElement(B.Q, {
                            type: B._46.H5
                        }, n.name), r.createElement(B.Q, {
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
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(B._6, {
                        onClick: this.onClick
                    }, r.createElement(B._2, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, r.createElement("div", {
                        onMouseEnter: this.onMouseEnter,
                        onKeyDown: this.props.onKeyDown,
                        "data-ref-index": this.props.index,
                        ref: this.props.refDelegate,
                        tabIndex: -1,
                        className: "clmgr-result"
                    }, this.renderCardContent())))
                }, t
            }(r.Component),
            ee = {
                NO_RESULTS: "cmgr-no-search-results",
                RESULTS_MENU: "cmgr-search-results-menu",
                SEARCH_INPUT: "cmgr-search-input",
                CHANNEL_SEARCH: "cmgr-channel-search",
                GAME_SEARCH: "cmgr-game-search"
            },
            te = 5,
            ne = {
                currentCategory: w.a.Games,
                gameResults: [],
                userResults: [],
                isShowingResults: !1,
                isLoading: !1,
                searchTerm: "",
                focusedIndex: null
            },
            ie = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderSearchOptions = function() {
                        var e = [r.createElement(B._33, {
                            active: n.state.currentCategory === w.a.Games,
                            onClick: n.setSearchTypeGame,
                            key: ee.GAME_SEARCH,
                            "data-test-selector": ee.GAME_SEARCH
                        }, Object(_.d)("Game Search", "ClipsManagerSearch"))];
                        return n.props.userRole !== m.Broadcaster && e.push(r.createElement(B._33, {
                            active: n.state.currentCategory === w.a.Users,
                            onClick: n.setSearchTypeChannel,
                            key: ee.CHANNEL_SEARCH,
                            "data-test-selector": ee.CHANNEL_SEARCH
                        }, Object(_.d)("Channel Search", "ClipsManagerSearch"))), r.createElement(B._34, null, e)
                    }, n.renderSearchResults = function() {
                        if (n.state.isLoading) return r.createElement(B._10, null);
                        var e = n.state.currentCategory;
                        if (e === w.a.Users) {
                            var t = n.state.userResults;
                            return 0 === t.length ? n.renderNoResults() : t.map(function(e, t) {
                                return r.createElement(Z, {
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
                        if (e === w.a.Games) {
                            var i = n.state.gameResults;
                            return 0 === i.length ? n.renderNoResults() : i.map(function(e, t) {
                                return r.createElement(Z, {
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
                        return r.createElement(B._8, {
                            "data-test-selector": ee.NO_RESULTS,
                            display: B.R.Flex,
                            flexDirection: B.T.Column
                        }, r.createElement(B._32, {
                            textAlign: B._42.Center,
                            padding: {
                                y: 5
                            }
                        }, r.createElement(B._22, {
                            asset: B._23.NavSearch,
                            height: 36,
                            width: 36,
                            type: B._24.Brand
                        }), r.createElement(B.Q, {
                            type: B._46.H4
                        }, Object(_.d)("No results found", "ClipsManagerSearch")), r.createElement(B.Q, {
                            type: B._46.P,
                            color: B.K.Alt
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
                        n.setState(a.__assign({}, ne, {
                            currentCategory: w.a.Games
                        })), n.context.setSearchType(w.a.Games)
                    }, n.setSearchTypeChannel = function() {
                        n.setState(a.__assign({}, ne, {
                            currentCategory: w.a.Users
                        })), n.context.setSearchType(w.a.Users)
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
                            a = i.currentCategory,
                            r = i.gameResults,
                            l = i.userResults;
                        if (a === w.a.Games) t = r[e].title, n.context.setSearchTerm(t);
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
                        return n.state.currentCategory === w.a.Games ? n.state.gameResults.length : n.state.userResults.length
                    }, n.performQuery = function() {
                        var e = n.state,
                            t = e.isLoading,
                            i = e.searchTerm,
                            a = e.currentCategory;
                        t && n.setState({
                            isLoading: !0,
                            isShowingResults: !0
                        }), n.searchClient.queryForType(a, i, "", {
                            hitsPerPage: te
                        }).then(function(e) {
                            if (e) {
                                var t = Object(J.b)({
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
                    }, n.searchClient = new $.a({
                        appId: _.a.algoliaApplicationID,
                        apiKey: _.a.algoliaAPIKey,
                        apolloClient: _.o.apollo.client,
                        logger: _.j,
                        config: _.a
                    }), n.state = ne, n.searchResultRefs = [], n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
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
                    return r.createElement(B._8, {
                        position: B._15.Relative
                    }, r.createElement(B._8, {
                        margin: {
                            bottom: 1
                        }
                    }, this.renderSearchOptions()), r.createElement(L.a, {
                        onClickOut: this.hideResults
                    }, r.createElement(B._25, {
                        id: ee.SEARCH_INPUT,
                        refDelegate: this.setSearchInputRef,
                        onChange: this.onChange,
                        onFocus: this.onFocus,
                        onKeyDown: this.onKeyDown,
                        value: this.state.searchTerm,
                        placeholder: this.state.currentCategory === w.a.Games ? Object(_.d)("Enter a Game", "ClipsManagerSearch") : Object(_.d)("Enter a Channel", "ClipsManagerSearch")
                    }), r.createElement(B.q, {
                        "data-test-selector": ee.RESULTS_MENU,
                        direction: B.r.Bottom,
                        noTail: !0,
                        size: B.s.Large,
                        show: this.state.isShowingResults
                    }, this.renderSearchResults())))
                }, t.contextTypes = {
                    setSearchTerm: y.func,
                    setSearchType: y.func,
                    clearSearch: y.func
                }, t
            }(r.Component),
            ae = Object(C.d)("ClipsManagerSearch")(ie),
            re = (n("3NJ6"), "cmgr-my-clips-radio"),
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
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return r.createElement(B._8, {
                        className: "clmgr-filters-container"
                    }, r.createElement(B.Y, {
                        gutterSize: B.Z.None
                    }, r.createElement(B.L, {
                        cols: {
                            default: 12,
                            xs: 6,
                            sm: 6,
                            md: 12,
                            lg: 12
                        }
                    }, r.createElement(B._8, {
                        margin: {
                            bottom: .5
                        }
                    }, r.createElement(B._8, {
                        margin: {
                            bottom: .5
                        }
                    }, r.createElement(B.Q, {
                        fontSize: B.V.Size5
                    }, Object(_.d)("List View", "ClipsManagerTable"))), r.createElement(B._8, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(B._8, {
                        margin: {
                            bottom: .5
                        }
                    }, r.createElement(B._20, {
                        "data-test-selector": re,
                        "data-a-target": re,
                        label: Object(_.d)("Clips I've Created", "ClipsManagerTable"),
                        name: "MyClips",
                        checked: this.props.currentUserRole === m.Curator,
                        onChange: this.setCuratorRole
                    })), r.createElement(B._8, null, r.createElement(B._20, {
                        "data-test-selector": le,
                        "data-a-target": le,
                        label: Object(_.d)("Clips of My Channel", "ClipsManagerTable"),
                        name: "ClipsOfMyChannel",
                        checked: this.props.currentUserRole === m.Broadcaster,
                        onChange: this.setBroadcasterRole
                    }))))), r.createElement(B.L, {
                        cols: {
                            default: 12,
                            xs: 6,
                            sm: 6,
                            md: 12,
                            lg: 12
                        }
                    }, r.createElement(ae, {
                        userRole: this.props.currentUserRole
                    }))))
                }, t
            }(r.Component),
            oe = Object(C.d)("ClipsManagerRightColumn")(se),
            ce = function(e) {
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
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement("img", {
                        src: this.state.imageURL,
                        alt: this.state.imageURL,
                        onError: this.handleImageError,
                        className: this.props.className
                    })
                }, t
            }(r.Component),
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
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.clip,
                        t = Object(_.h)(new Date(e.createdAt));
                    return r.createElement(B._8, {
                        "data-a-target": "clips-manager-table-row-container",
                        className: "clmgr-table__row",
                        display: B.R.Flex,
                        overflow: B._11.Hidden,
                        alignItems: B.c.Center
                    }, r.createElement("div", {
                        onClick: this.onRowClick,
                        style: {
                            cursor: "pointer",
                            width: "100%"
                        }
                    }, r.createElement(B.Y, {
                        "data-target": this.props.dataTarget
                    }, r.createElement(B.L, {
                        cols: 4
                    }, r.createElement(B._8, {
                        display: B.R.Flex,
                        flexWrap: B.U.NoWrap,
                        alignItems: B.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, r.createElement(B._8, {
                        flexShrink: 0,
                        position: B._15.Relative
                    }, r.createElement(B._32, {
                        className: "clmgr-checkbox-bg",
                        background: B.n.Base,
                        position: B._15.Absolute
                    }), r.createElement(B.J, {
                        refDelegate: this.setCheckboxRef,
                        "data-test-selector": de,
                        label: " ",
                        checked: this.props.isSelected,
                        onChange: this.selectClip
                    })), r.createElement(B._2, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, r.createElement(ce, {
                        imageURL: this.props.clip.thumbnailURL,
                        className: "clmgr-thumb"
                    })), r.createElement(B.Q, {
                        type: B._46.H5,
                        title: e.title,
                        ellipsis: !0
                    }, e.title))), r.createElement(B.L, {
                        cols: 2
                    }, e.broadcaster && r.createElement(B._8, {
                        display: B.R.Flex,
                        alignItems: B.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, r.createElement(B._2, {
                        ellipsis: !0
                    }, r.createElement(x.a, {
                        to: "/" + e.broadcaster.login + "/clips",
                        title: e.broadcaster.displayName
                    }, e.broadcaster.displayName)))), r.createElement(B.L, {
                        cols: 2
                    }, r.createElement(B._8, {
                        display: B.R.Flex,
                        alignItems: B.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, this.renderGameLink(e))), r.createElement(B.L, {
                        cols: 2
                    }, r.createElement(B._8, {
                        display: B.R.Flex,
                        alignItems: B.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, r.createElement(B.Q, {
                        "data-test-selector": "clips-manager-row-time-created",
                        "data-a-target": "clips-manager-row-time-created",
                        title: t,
                        transform: B._45.Capitalize,
                        ellipsis: !0
                    }, t))), r.createElement(B.L, {
                        cols: 2
                    }, r.createElement(B._8, {
                        display: B.R.Flex,
                        alignItems: B.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, r.createElement(B._8, {
                        display: B.R.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: .5
                        }
                    }, r.createElement(B._22, {
                        asset: B._23.GlyphViews
                    })), r.createElement(B.Q, {
                        "data-test-selector": "clips-manager-row-view-count",
                        "data-a-target": "clips-manager-row-view-count"
                    }, Object(_.f)(e.viewCount, {
                        maximumFractionDigits: 1
                    })))))))
                }, t.prototype.renderGameLink = function(e) {
                    return e.game ? r.createElement(B._2, {
                        ellipsis: !0
                    }, r.createElement(x.a, {
                        to: Object(A.c)(e.game.name),
                        title: e.game.name
                    }, e.game.name)) : null
                }, t
            }(r.Component),
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
                        return a.__awaiter(n, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
                                return this.props.loading || this.props.error || !this.props.clips ? [2] : [2, this.props.loadMore().then(function() {})]
                            })
                        })
                    }, n.selectClip = function(e, t) {
                        void 0 === t && (t = !0), n.setState(function(n) {
                            var i = n.selectedClipSlugs;
                            if (t) i = i.concat([e]);
                            else {
                                var a = i.indexOf(e);
                                i = i.filter(function(e, t) {
                                    return t !== a
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
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
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
                    return this.props.error || !this.props.userID ? null : r.createElement(B._8, {
                        className: "clmgr-body-wrap",
                        display: B.R.Flex,
                        flexWrap: B.U.NoWrap,
                        flexDirection: B.T.ColumnReverse,
                        breakpointMedium: {
                            flexDirection: B.T.Row
                        }
                    }, r.createElement(B._8, {
                        className: "clmgr-table-wrap",
                        display: B.R.Flex,
                        flexGrow: 1,
                        flexWrap: B.U.Wrap,
                        position: B._15.Relative
                    }, r.createElement(B._32, {
                        background: B.n.Base,
                        border: !0,
                        elevation: 3,
                        margin: {
                            bottom: .5
                        },
                        fullWidth: !0
                    }, this.renderHeaderRow()), r.createElement(B._32, {
                        fullWidth: !0,
                        fullHeight: !0
                    }, r.createElement(O.b, null, r.createElement(B._32, {
                        background: B.n.Base,
                        elevation: 2,
                        border: !0
                    }, this.props.clips.length > 0 && !this.state.isNewQueryLoading && this.props.clips.map(function(t) {
                        return e.renderClipRow(t)
                    }), this.state.isNewQueryLoading && this.props.loading && r.createElement(B._8, {
                        display: B.R.Flex,
                        alignItems: B.c.Center,
                        justifyContent: B._7.Center,
                        padding: 1,
                        fullWidth: !0
                    }, r.createElement(B._10, {
                        delay: 0
                    })), 0 === this.props.clips.length && !this.props.loading && r.createElement(B._8, {
                        display: B.R.Flex,
                        justifyContent: B._7.Center,
                        textAlign: B._42.Center,
                        padding: 2,
                        fullWidth: !0,
                        fullHeight: !0
                    }, r.createElement(B.Q, {
                        type: B._46.H4,
                        color: B.K.Alt2,
                        "data-test-selector": fe
                    }, Object(_.d)("Create Clips to fill this space with the most memorable moments from your favorite Twitch streams and videos. Just hit the Clip button on the video player to try it out. {learnHowLink} to use Clips.", {
                        learnHowLink: r.createElement("a", {
                            target: "_blank",
                            rel: "noopener",
                            href: "https://help.twitch.tv/customer/portal/articles/2442508-how-to-use-clips"
                        }, Object(_.d)("Learn how", "ClipsManagerTable"))
                    }, "ClipsManagerTable"))), r.createElement(O.a, {
                        loadMore: this.loadMore,
                        enabled: !this.props.loading && this.props.hasNextPage
                    }), this.props.loading && !this.state.isNewQueryLoading && r.createElement(B._8, {
                        display: B.R.Flex,
                        alignItems: B.c.Center,
                        justifyContent: B._7.Center,
                        padding: 1,
                        fullWidth: !0
                    }, r.createElement(B._10, {
                        delay: 0
                    })))))), r.createElement(B._8, {
                        breakpointMedium: {
                            margin: {
                                left: 2
                            }
                        },
                        flexShrink: 0
                    }, r.createElement(oe, {
                        updateUserRole: this.props.updateUserRole,
                        currentUserRole: this.props.userRole
                    })))
                }, t.prototype.renderHeaderRow = function() {
                    var e = this.state.selectedClipSlugs.length > 0,
                        t = e && this.state.selectedClipSlugs.length === this.props.clips.length,
                        n = r.createElement(B.J, {
                            "data-test-selector": pe,
                            label: " ",
                            checked: t,
                            onChange: this.toggleClipsSelection,
                            disabled: this.state.isNewQueryLoading && this.props.loading
                        });
                    if (e) return r.createElement(B.Y, null, r.createElement(B.L, {
                        cols: 12
                    }, r.createElement(B._8, {
                        display: B.R.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        fullHeight: !0
                    }, r.createElement(B._8, {
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, n), r.createElement(B._8, {
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, r.createElement(B.Q, null, Object(_.d)("{numClips, number} selected", {
                        numClips: this.state.selectedClipSlugs.length
                    }, "ClipsManagerTable"))), r.createElement(B._8, {
                        flexShrink: 0,
                        alignItems: B.c.Center,
                        fullHeight: !0
                    }, r.createElement(B.w, {
                        ariaLabel: Object(_.d)("Delete Clip", "ClipsManagerTable"),
                        icon: B._23.Trash,
                        onClick: this.renderBatchDeleteModal,
                        "data-test-selector": me
                    })))));
                    var a = this.props.sort,
                        l = a === i.ViewsAscending || a === i.ViewsDescending,
                        s = a === i.CreatedAtAscending || a === i.CreatedAtDescending,
                        o = Object(_.d)("Created", "ClipsManagerTable"),
                        c = Object(_.d)("Views", "ClipsManagerTable");
                    return r.createElement(B.Y, null, r.createElement(B.L, {
                        cols: 4
                    }, r.createElement(B._8, {
                        display: B.R.Flex,
                        alignItems: B.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, r.createElement(B._8, {
                        display: B.R.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, n), r.createElement(B.Q, null, Object(_.d)("Info", "ClipsManagerTable")))), r.createElement(B.L, {
                        cols: 2
                    }, r.createElement(B._8, {
                        padding: 1
                    }, Object(_.d)("Channel", "ClipsManagerTable"))), r.createElement(B.L, {
                        cols: 2
                    }, r.createElement(B._8, {
                        padding: 1
                    }, Object(_.d)("Game", "ClipsManagerTable"))), r.createElement(B.L, {
                        cols: 2
                    }, r.createElement(B._8, {
                        padding: {
                            y: .5,
                            right: 1
                        },
                        display: B.R.Flex,
                        fullHeight: !0
                    }, r.createElement(B._6, {
                        alpha: !0,
                        onClick: this.toggleCreatedAtSort,
                        "data-test-selector": ge,
                        "data-a-target": ge
                    }, r.createElement(B._8, {
                        display: B.R.Flex,
                        flexWrap: B.U.NoWrap,
                        alignContent: B.b.Center,
                        justifyContent: B._7.Between,
                        padding: {
                            x: 1
                        }
                    }, r.createElement(B.Q, {
                        color: B.K.Link,
                        title: o,
                        bold: !0,
                        ellipsis: !0
                    }, o), s && r.createElement(B._22, {
                        asset: a === i.CreatedAtDescending ? B._23.GlyphArrDown : B._23.GlyphArrUp,
                        type: B._24.Brand
                    }))))), r.createElement(B.L, {
                        cols: 2
                    }, r.createElement(B._8, {
                        padding: {
                            y: .5,
                            right: 1
                        },
                        display: B.R.Flex,
                        fullHeight: !0
                    }, r.createElement(B._6, {
                        alpha: !0,
                        onClick: this.toggleViewsSort,
                        "data-test-selector": he,
                        "data-a-target": he
                    }, r.createElement(B._8, {
                        display: B.R.Flex,
                        flexWrap: B.U.NoWrap,
                        alignContent: B.b.Center,
                        justifyContent: B._7.Between,
                        padding: {
                            x: 1
                        }
                    }, r.createElement(B.Q, {
                        color: B.K.Link,
                        title: c,
                        bold: !0,
                        ellipsis: !0
                    }, c), l && r.createElement(B._22, {
                        asset: a === i.ViewsDescending ? B._23.GlyphArrDown : B._23.GlyphArrUp,
                        type: B._24.Brand
                    }))))))
                }, t.prototype.renderClipRow = function(e) {
                    var t = this.state.selectedClipSlugs.includes(e.slug);
                    if (e.slug === this.state.expandedSlug) {
                        var n = this.props.userRole === m.Curator ? M.a.MyClips : M.a.ClipsOfMyChannel;
                        return r.createElement(z, {
                            key: e.slug,
                            dataTarget: "clips-manager-table-row",
                            clip: e,
                            onClose: this.closeExpandedRow,
                            onDelete: this.deleteClip,
                            onDeleteAll: this.deleteAllClips,
                            pageType: n
                        })
                    }
                    return r.createElement(ue, {
                        key: e.slug,
                        dataTarget: "clips-manager-table-row",
                        clip: e,
                        isSelected: t,
                        onSelectClip: this.selectClip,
                        onRowClick: this.expandClipRow
                    })
                }, t
            }(r.Component),
            ve = n("zlRb");
        var be = Object(l.compose)(Object(C.d)("ClipsManagerTable"), Object(T.a)(ve, {
                options: function(e) {
                    var t = {
                        sort: p[e.sort],
                        period: f[u.All]
                    };
                    return e.userRole === m.Broadcaster ? t.broadcasterID = e.channelID : t.curatorID = e.channelID, e.searchFilterTerm && (e.searchFilterType === w.a.Users && e.userRole !== m.Broadcaster ? t.broadcasterID = e.searchFilterTerm : t.gameName = e.searchFilterTerm), {
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
                                variables: a.__assign({}, e.data.variables, {
                                    cursor: n
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult,
                                        i = e.user.clips.edges,
                                        r = n.user.clips.edges;
                                    return {
                                        user: a.__assign({}, n.user, {
                                            clips: a.__assign({}, n.user.clips, {
                                                edges: Object(N.c)(i, r)
                                            })
                                        })
                                    }
                                }
                            })
                        },
                        onDeleteClip: function(t) {
                            Object(N.e)(ve, e.data.variables, function(e) {
                                var n = e.user.clips.edges;
                                return e.user.clips.edges = n.filter(function(e) {
                                    return e.node.slug !== t
                                }), e
                            })
                        },
                        onDeleteAllClips: function(t) {
                            Object(N.e)(ve, e.data.variables, function(e) {
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
                            Object(N.e)(ve, e.data.variables, function(e) {
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
            Ee = n("tYdz"),
            ke = function(e) {
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
                        searchType: w.a.Games,
                        searchTerm: null
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.props.isLoggedIn || this.props.login()
                }, t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.loading || this.props.data.error || !this.props.data.currentUser ? null : r.createElement(B._8, {
                        className: "scroll-y",
                        padding: {
                            x: 3,
                            top: 3
                        },
                        fullHeight: !0
                    }, r.createElement(B._8, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(B.Q, {
                        type: B._46.H1,
                        fontSize: B.V.Size3
                    }, Object(_.d)("Clips", "ClipsManagerPage"))), r.createElement(be, {
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
            }(r.Component),
            Se = Object(l.compose)(Object(C.d)("ClipsManager"), Object(T.a)(Ee), s.f)(ke);
        var ye = Object(v.b)(function(e) {
            return {
                isLoggedIn: Object(S.d)(e)
            }
        }, function(e) {
            return Object(b.b)({
                login: function() {
                    return Object(k.f)(E.a.ClipsManager)
                }
            }, e)
        })(Se);

        function _e(e, t) {
            return t === m.Curator ? "/" + e + "/manager/clips" : "/" + e + "/manager/clips/channel"
        }
        var Te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onRoleChange = function(e) {
                        e !== m.Broadcaster && t.props.history.push({
                            pathname: _e(t.props.match.params.channelName, e)
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(ye, {
                        channelName: this.props.match.params.channelName,
                        role: m.Broadcaster,
                        onRoleChange: this.onRoleChange
                    })
                }, t
            }(r.Component),
            we = Object(l.compose)(Object(C.d)("ClipsOfMeManagerPage", {
                destination: c.a.ChannelClipsManager
            }), Object(o.a)({
                location: d.PageviewLocation.ChannelClipsManager,
                properties: {
                    is_live: !1
                }
            }), s.f)(Te),
            Ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onRoleChange = function(e) {
                        e !== m.Curator && t.props.history.push({
                            pathname: _e(t.props.match.params.channelName, e)
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(ye, {
                        channelName: this.props.match.params.channelName,
                        role: m.Curator,
                        onRoleChange: this.onRoleChange
                    })
                }, t
            }(r.Component),
            Re = Object(l.compose)(Object(C.d)("MyClipsManagerPage", {
                autoReportInteractive: !0,
                destination: c.a.MyClipsManager
            }), Object(o.a)({
                location: d.PageviewLocation.MyClipsManager,
                properties: {
                    is_live: !1
                }
            }), s.f)(Ne);
        n.d(t, "ChannelClipsManagerPage", function() {
            return we
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
            a = n("GiK3"),
            r = n("6sO2"),
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
                        return t.props.successContent ? a.createElement(s._32, {
                            "data-test-selector": o.SUCCESS_BODY,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: s.n.Alt,
                            fullWidth: !0
                        }, a.createElement(s.Q, {
                            type: s._46.Strong
                        }, t.props.successContent)) : null
                    }, t.renderError = function() {
                        return t.props.errorContent ? a.createElement(s._32, {
                            "data-test-selector": o.ERROR_BODY,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: s.n.Alt,
                            fullWidth: !0
                        }, a.createElement(s.Q, {
                            type: s._46.Strong,
                            color: s.K.Error
                        }, t.props.errorContent)) : null
                    }, t.onSubmit = function() {
                        t.props.onSubmit()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.successContent ? a.createElement(l.a, {
                        onClickOut: this.props.onClose
                    }, a.createElement(s._32, {
                        padding: 2,
                        background: s.n.Base,
                        className: "clip-modal"
                    }, this.renderSuccess(), a.createElement(s._8, {
                        display: s.R.Flex,
                        justifyContent: s._7.Center
                    }, a.createElement(s._8, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(s.v, {
                        "data-test-selector": o.CANCEL_BUTTON,
                        onClick: this.props.onClose
                    }, Object(r.d)("Close", "ClipsModal")))))) : a.createElement(l.a, {
                        onClickOut: this.props.onClose
                    }, a.createElement(s._32, {
                        padding: 2,
                        background: s.n.Base,
                        className: "clip-modal"
                    }, a.createElement(s._32, {
                        "data-test-selector": o.TITLE,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 1
                        }
                    }, this.props.title), a.createElement(s._32, {
                        "data-test-selector": o.MAIN_BODY,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, this.renderError(), this.props.body), a.createElement(s._8, {
                        display: s.R.Flex,
                        justifyContent: s._7.Center
                    }, a.createElement(s._8, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(s.v, {
                        "data-test-selector": o.CANCEL_BUTTON,
                        type: s.B.Text,
                        onClick: this.props.onClose
                    }, Object(r.d)("Cancel", "ClipsModal"))), a.createElement(s._8, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(s.v, {
                        "data-test-selector": o.SUBMIT_BUTTON,
                        type: this.props.buttonType ? this.props.buttonType : s.B.Default,
                        onClick: this.onSubmit,
                        disabled: this.props.submitDisabled
                    }, this.props.buttonContent), this.props.isLoading && a.createElement(s._10, {
                        delay: 0
                    })))))
                }, t
            }(a.Component),
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
                        return t.props.isTemporary ? a.createElement(s.Q, {
                            type: s._46.H5,
                            ellipsis: !0
                        }, Object(r.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : a.createElement(s.Q, {
                            type: s._46.H5,
                            ellipsis: !0
                        }, Object(r.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                    }, t.renderBodyText = function() {
                        return t.props.isTemporary ? a.createElement(s.Q, null, Object(r.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                            clipCreator: t.props.targetUser.displayName
                        }, "ClipsModalBanUser")) : a.createElement(s.Q, null, Object(r.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                            clipCreator: t.props.targetUser.displayName
                        }, "ClipsModalBanUser"))
                    }, t.renderButtonText = function() {
                        return t.props.isTemporary ? Object(r.d)("Timeout User", "ClipsModalBanUser") : Object(r.d)("Ban User", "ClipsModalBanUser")
                    }, t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(r.d)("Success!", "ClipsModalBanUser") : null
                    }, t.renderFailure = function() {
                        return t.state.hasErrored ? t.props.isTemporary ? Object(r.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(r.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
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
                    return a.createElement(c, {
                        onSubmit: this.banUser,
                        onClose: this.props.onClose,
                        title: this.renderTitle(),
                        body: this.renderBodyText(),
                        buttonContent: this.renderButtonText(),
                        buttonType: s.B.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure(),
                        isLoading: this.state.isLoading
                    })
                }, t
            }(a.Component),
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
            E = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            k = function(e) {
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
                    }, n.state = E, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = [a.createElement(s.Q, {
                        key: "title",
                        type: s._46.H4
                    }, Object(r.d)("Delete This Clip", "ClipsModalDelete")), a.createElement(s._8, {
                        key: "message",
                        margin: {
                            top: 1
                        }
                    }, a.createElement(s.Q, {
                        type: s._46.P,
                        color: s.K.Alt2
                    }, Object(r.d)("This clip will be permanently deleted.", "ClipsModalDelete")))];
                    if (!this.props.data.clip) return null;
                    var t = null;
                    this.props.data.clip.curator && (t = a.createElement("span", null, " • ", Object(r.d)("Clipped by {curator}", {
                        curator: this.props.data.clip.curator.login
                    }, "ClipsModalDelete")));
                    var n = a.createElement(s._32, {
                        display: s.R.Flex,
                        flexWrap: s.U.NoWrap
                    }, a.createElement(s._8, {
                        className: "clips-modal-delete__thumb",
                        margin: {
                            right: 1
                        }
                    }, a.createElement(s.k, {
                        ratio: s.l.Aspect16x9
                    }, a.createElement("img", {
                        src: this.props.data.clip.thumbnailURL
                    }))), a.createElement(s._8, null, a.createElement(s.Q, {
                        type: s._46.H5
                    }, this.props.data.clip.title), a.createElement(s.Q, {
                        color: s.K.Alt2
                    }, Object(r.d)("{created, date, medium}", {
                        created: new Date(this.props.data.clip.createdAt)
                    }, "ClipsModalDelete"), t), a.createElement(s.Q, {
                        color: s.K.Alt2
                    }, Object(r.d)("{viewCount, number} views", {
                        viewCount: this.props.data.clip.viewCount
                    }, "ClipsModalDelete"))));
                    return a.createElement(c, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: n,
                        buttonContent: Object(r.d)("Delete", "ClipsModalDelete"),
                        buttonType: s.B.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        successContent: this.state.hasSucceeded ? Object(r.d)("Success!", "ClipsModalDelete") : null,
                        errorContent: this.state.hasErrored ? Object(r.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                        isLoading: this.state.isLoading
                    })
                }, t
            }(a.Component),
            S = Object(g.a)(v)(C({
                props: function(e) {
                    return {
                        deleteClip: function(t) {
                            return i.__awaiter(b, void 0, void 0, function() {
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
                                            throw n = i.sent(), r.j.error(n, "Failed to delete clip"), n;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(k)),
            y = n("3zLD"),
            _ = n("wqRA"),
            T = this,
            w = {
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
                        return n.state.hasSucceeded ? Object(r.d)("A request has been made to delete the clip. Please wait a few minutes for this to take effect.", "ClipsModalDeleteAll") : null
                    }, n.renderFailure = function() {
                        return n.state.hasErrored ? Object(r.d)("There was a problem deleting this clip.", "ClipsModalDeleteAll") : null
                    }, n.state = w, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = a.createElement(s.Q, {
                        type: s._46.P
                    }, Object(r.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                    return a.createElement(c, {
                        onSubmit: this.deleteAll,
                        onClose: this.props.onClose,
                        title: a.createElement(s.Q, {
                            type: s._46.H4
                        }, Object(r.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                        body: e,
                        buttonContent: Object(r.d)("Delete", "ClipsModalDeleteAll"),
                        buttonType: s.B.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure()
                    })
                }, t
            }(a.Component),
            R = Object(y.compose)(Object(u.d)("ClipsModalDeleteAll"), C({
                props: function(e) {
                    return {
                        deleteAllClips: function(t, n) {
                            return i.__awaiter(T, void 0, void 0, function() {
                                var a, l, s;
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
                                            return l = i.sent(), a = l.data, [3, 5];
                                        case 2:
                                            return t ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        broadcastID: t
                                                    }
                                                }
                                            })] : [3, 4];
                                        case 3:
                                            return l = i.sent(), a = l.data, [3, 5];
                                        case 4:
                                            throw new Error("Invalid broadcastID specified for deleteAllClips");
                                        case 5:
                                            return e.ownProps.onDeleteAll && e.ownProps.onDeleteAll(a.deleteClips.clips), [3, 7];
                                        case 6:
                                            throw s = i.sent(), r.j.error(s, "Failed to delete clips from VOD"), s;
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            }), Object(g.a)(_, {
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
            M = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderSuccess = function() {
                        return n.state.hasSucceeded ? Object(r.d)("Clips successfully deleted.", "ClipsModalBatchDelete") : null
                    }, n.renderError = function() {
                        return n.state.hasErrored ? Object(r.d)("There was a problem deleting this clip.", "ClipsModalBatchDelete") : null
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
                    var e = a.createElement(s.Q, {
                            type: s._46.H4
                        }, Object(r.d)("Delete these clips?", "ClipsModalBatchDelete")),
                        t = a.createElement(s.Q, {
                            type: s._46.P
                        }, Object(r.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                    return a.createElement(c, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(r.d)("Delete", "ClipsModalBatchDelete"),
                        buttonType: s.B.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderError()
                    })
                }, t
            }(a.Component),
            x = C({
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
                                            throw t = n.sent(), r.j.error(t, "Failed to delete clips"), t;
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
            return S
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
        var a = {};
        i.definitions = i.definitions.concat(n("kUjr").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    }
});
//# sourceMappingURL=pages.clips-manager-08e60ba7ea075e97e5219c2fadf53d9e.js.map