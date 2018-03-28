webpackJsonp([59], {
    "2TZ0": function(e, t) {
        var i = {
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
        i.loc.source = {
            body: "mutation ClipsTitleEdit_UpdateClip($input: UpdateClipInput!) {\nupdateClip(input: $input) {\nclip {\nid\ntitle\n}\nerror {\nmessage\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = i
    },
    "7WFF": function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, r = i("TToO"),
            a = i("GiK3"),
            s = i("CIox"),
            o = i("3zLD"),
            l = i("7vx8"),
            d = i("rqhk"),
            u = i("vH/s"),
            c = i("QIXk"),
            p = i("Odds"),
            m = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.isClipResolved ? a.createElement(p._6, null, a.createElement(c.a, {
                        clipSlug: this.props.slug,
                        location: u.PageviewLocation.ClipsEditing,
                        broadcasterName: this.props.broadcasterName,
                        startOffset: this.props.startOffset,
                        endOffset: this.props.endOffset
                    })) : a.createElement(p._6, null, a.createElement(p.u, {
                        disabled: !0
                    }))
                }, t
            }(a.Component);
        ! function(e) {
            e.creating = "CREATING", e.created = "CREATED", e.failed = "FAILED"
        }(n || (n = {}));
        var f = i("vwd7"),
            h = i("f8OD"),
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isPollingTimedOut: !1,
                        isPlayerIframeLoaded: !1
                    }, t.timeoutID = 0, t.hasSentEditClip = !1, t.onLoaded = function() {
                        t.setState({
                            isPlayerIframeLoaded: !0
                        })
                    }, t.getIsClipResolved = function(e) {
                        var i = t.getRawMediaStatus(e);
                        return t.getRawMediaExists(e) && (i === n.created || i === n.failed)
                    }, t.getIsCreationFailed = function(e) {
                        return t.getRawMediaExists(e) && t.getRawMediaStatus(e) === n.failed
                    }, t.getRawMediaStatus = function(e) {
                        return e.data.clip && e.data.clip.rawMedia && e.data.clip.rawMedia.status || ""
                    }, t.getRawMediaExists = function(e) {
                        return Boolean(e.data.clip && e.data.clip.rawMedia)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    this.getIsClipResolved(this.props) ? this.props.data.stopPolling() : this.timeoutID = setTimeout(function() {
                        return e.setState({
                            isPollingTimedOut: !0
                        })
                    }, 7e4)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.getIsClipResolved(e) && (this.props.data.stopPolling(), clearTimeout(this.timeoutID))
                }, t.prototype.componentWillUnmount = function() {
                    this.timeoutID && clearTimeout(this.timeoutID), this.props.data.stopPolling()
                }, t.prototype.componentDidUpdate = function() {
                    var e = this.getIsClipResolved(this.props) && !this.getIsCreationFailed(this.props);
                    !this.hasSentEditClip && e && this.state.isPlayerIframeLoaded && this.props.data.clip && this.props.data.clip.rawMedia && (this.props.playerConnection.sendMessage(Object(d.r)(this.props.data.clip.rawMedia)), this.hasSentEditClip = !0)
                }, t.prototype.render = function() {
                    if (this.state.isPollingTimedOut || this.getIsCreationFailed(this.props)) return a.createElement(s.b, {
                        to: "/500"
                    });
                    var e = this.props.data.clip;
                    if (!e || !e.rawMedia) return a.createElement(p._6, null);
                    var t, i, n = (t = e.rawMedia.defaultClipInitialOffset, i = e.rawMedia.duration - e.rawMedia.defaultClipInitialOffset, {
                        startOffset: t,
                        endOffset: t + i
                    });
                    return a.createElement(p._6, null, a.createElement(f.b, {
                        slug: this.props.slug,
                        onLoaded: this.onLoaded,
                        playerType: f.a.Editing
                    }), a.createElement(m, {
                        isClipResolved: this.getIsClipResolved(this.props),
                        slug: this.props.slug,
                        broadcasterName: e.broadcaster && e.broadcaster.displayName || "",
                        startOffset: n.startOffset,
                        endOffset: n.endOffset
                    }))
                }, t
            }(a.Component),
            v = Object(o.compose)(Object(d.t)({
                playerId: function(e) {
                    return e.slug
                }
            }), Object(l.a)(h, {
                options: function(e) {
                    return {
                        pollInterval: 1e3,
                        fetchPolicy: "network",
                        variables: {
                            slug: e.slug
                        }
                    }
                }
            }))(g),
            E = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return "/:slug/edit" === this.props.match.path ? (e = this.props.match.params.slug, a.createElement(s.b, {
                        to: {
                            pathname: "/create",
                            state: {
                                slug: e
                            }
                        }
                    })) : this.props.location.state && this.props.location.state.slug ? (e = this.props.location.state.slug, a.createElement(p._6, null, a.createElement(v, {
                        slug: e
                    }))) : a.createElement(s.b, {
                        to: "/"
                    })
                }, t
            }(a.Component);
        i.d(t, "ClipsCreate", function() {
            return E
        })
    },
    QIXk: function(e, t, i) {
        "use strict";
        var n, r, a, s = i("TToO"),
            o = i("GiK3"),
            l = i("6sO2"),
            d = i("7vx8"),
            u = i("6BvN"),
            c = i("oIkB"),
            p = i("vH/s"),
            m = function(e, t, i, n, r) {
                var a = Date.now() / 1e3;
                l.o.tracking.track(p.SpadeEventType.ClipEdit, {
                    channel_id: e,
                    client_time: a,
                    clip_edit_session_id: t + "," + Math.floor(a),
                    clip_id: t,
                    clip_slug: i,
                    effect_name: "title",
                    effect_setting: n,
                    front_end: !0,
                    location: r
                })
            },
            f = i("CIox");
        ! function(e) {
            e.AlreadyPublished = "already_published", e.EditingWindowExpired = "editing_window_expired", e.InvalidSpeedDuration = "invalid_speed_duration", e.InvalidDuration = "invalid_duration", e.InvalidTitle = "invalid_title", e.Unknown = "unknown"
        }(n || (n = {})),
        function(e) {
            e.InvalidTitle = "invalid_title"
        }(r || (r = {})),
        function(e) {
            e.Unsent = "unsent", e.Sending = "sending", e.Error = "error", e.Successful = "successful"
        }(a || (a = {}));
        var h, g = 5,
            v = 60,
            E = i("Odds"),
            y = i("isxN"),
            S = {
                publishState: a.Unsent,
                errorMessage: null
            },
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = S, t.onError = function(e) {
                        t.setState({
                            publishState: a.Error,
                            errorMessage: e
                        }), t.props.onError(e)
                    }, t.onPublish = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var e, t, i;
                            return s.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.setState({
                                                publishState: a.Sending
                                            }), e = this.props.endOffset - this.props.startOffset, this.props.startOffset > this.props.endOffset || e < g || e > v) return this.setState({
                                            publishState: a.Error,
                                            errorMessage: n.InvalidDuration
                                        }), [2];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.publishClip(Object(c.a)({
                                            segments: [{
                                                offsetSeconds: this.props.startOffset,
                                                durationSeconds: this.props.endOffset - this.props.startOffset,
                                                speed: 1
                                            }],
                                            slug: this.props.slug,
                                            title: this.props.title
                                        }))];
                                    case 2:
                                        return (t = r.sent()).data.publishClip && t.data.publishClip.error && t.data.publishClip.error.message ? (i = t.data.publishClip.error.message, this.onError(i)) : (this.setState({
                                            publishState: a.Successful
                                        }), this.props.history.push("/" + this.props.slug)), [3, 4];
                                    case 3:
                                        return r.sent(), i = n.Unknown, this.onError(i), [3, 4];
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
                    var e = this.props.title.length < 1 || this.state.publishState === a.Error,
                        t = this.state.publishState === a.Sending;
                    return o.createElement(E._6, null, o.createElement(E.u, {
                        onClick: this.onPublish,
                        disabled: e,
                        state: t ? E.z.Loading : E.z.Default,
                        size: E.y.Large,
                        blurAfterClick: !0
                    }, Object(l.d)("Publish", "ClipsPublishButton")))
                }, t = s.__decorate([Object(d.a)(y, {
                    name: "publishClip"
                })], t)
            }(o.Component),
            b = Object(f.f)(k),
            C = i("2TZ0"),
            T = {
                TITLE_INPUT: "cmgr-title-input",
                TITLE_SAVE: "cmgr-title-save",
                TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
            };
        ! function(e) {
            e.emptySubmission = "emptySubmission", e.characterLimitReached = "characterLimitReached", e.channelViolation = "channelViolation", e.notCurator = "notCurator", e.unknown = "unknown"
        }(h || (h = {}));
        var _ = 100,
            w = function(e) {
                function t(t) {
                    var i = e.call(this, t) || this;
                    return i.renderForClipsViewing = function() {
                        return o.createElement("div", null, o.createElement(E._40, {
                            id: T.TITLE_INPUT,
                            "data-test-selector": T.TITLE_INPUT,
                            value: i.state.title,
                            onChange: i.handleTitleEdit,
                            onKeyDown: i.handleKeyDown
                        }), o.createElement(E._6, {
                            display: E.P.Flex,
                            justifyContent: E._5.Between,
                            alignItems: E.c.Center,
                            padding: {
                                top: 1
                            }
                        }, i.state.showError ? o.createElement(E.O, {
                            color: E.J.Error
                        }, i.getErrorMessage()) : o.createElement(E.O, {
                            color: E.J.Alt2
                        }, i.getRemainingCharacterText()), o.createElement(E._6, {
                            display: E.P.Flex
                        }, o.createElement(E.u, {
                            "data-test-selector": T.TITLE_SAVE,
                            onClick: i.props.onCancel,
                            type: E.A.Hollow
                        }, Object(l.d)("Cancel", "ClipsTitleEdit")), o.createElement(E._6, {
                            padding: {
                                left: 1
                            }
                        }, i.renderSave()))))
                    }, i.renderForManager = function() {
                        return o.createElement(E.U, {
                            id: T.TITLE_INPUT,
                            label: Object(l.d)("Title", "ClipsTitleEdit"),
                            hint: i.getRemainingCharacterText()
                        }, o.createElement(E._6, {
                            display: E.P.Flex,
                            flexWrap: E.S.NoWrap
                        }, o.createElement(E._6, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, o.createElement(E._2, {
                            id: T.TITLE_INPUT,
                            "data-test-selector": T.TITLE_INPUT,
                            type: E._3.Text,
                            value: i.state.title,
                            onChange: i.handleTitleEdit,
                            onKeyDown: i.handleKeyDown
                        })), o.createElement(E._6, {
                            flexShrink: 0,
                            flexGrow: 0
                        }, o.createElement(E._6, {
                            position: E._13.Relative
                        }, i.renderSave(), o.createElement(E._4, {
                            onClick: i.dismissMessage,
                            "data-test-selector": T.TITLE_SAVE_TOOLTIP
                        }, o.createElement(E.p, {
                            direction: E.q.TopRight,
                            show: i.state.showError || i.state.showSuccess
                        }, o.createElement(E._6, {
                            padding: 1
                        }, i.state.showSuccess ? o.createElement(E.O, {
                            color: E.J.Link
                        }, Object(l.d)("Title Saved!", "ClipsTitleEdit")) : o.createElement(E.O, {
                            color: E.J.Error
                        }, i.getErrorMessage()))))))))
                    }, i.renderForEdit = function() {
                        var e;
                        if ((i.props.startOffset || 0 === i.props.startOffset) && i.props.endOffset) return e = i.state.showError ? o.createElement(E.O, {
                            color: E.J.Alt2
                        }, i.getErrorMessage()) : 0 === i.state.title.length && i.props.broadcasterName ? o.createElement(E.O, {
                            color: E.J.Alt2
                        }, Object(l.d)("Clips with titles get more views. Help {broadcasterName} get discovered by adding a title.", {
                            broadcasterName: i.props.broadcasterName
                        }, "ClipsTitleEdit")) : o.createElement(E.O, {
                            color: E.J.Alt2
                        }, i.getRemainingCharacterText()), o.createElement(E._6, {
                            display: E.P.Flex,
                            flexWrap: E.S.NoWrap
                        }, o.createElement(E._6, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, o.createElement(E._2, {
                            id: T.TITLE_INPUT,
                            "data-test-selector": T.TITLE_INPUT,
                            type: E._3.Text,
                            value: i.state.title,
                            onChange: i.handleTitleEdit,
                            onKeyDown: i.handleKeyDown
                        })), o.createElement(E._6, {
                            display: E.P.Flex,
                            justifyContent: E._5.Between,
                            alignItems: E.c.Center,
                            padding: {
                                top: 1
                            }
                        }, e, o.createElement(E._6, {
                            display: E.P.Flex
                        }, o.createElement(E._6, {
                            padding: {
                                left: 1
                            }
                        }, o.createElement(b, {
                            isSubmitted: i.state.showSuccess,
                            title: i.state.title,
                            slug: i.props.clipSlug,
                            startOffset: i.props.startOffset,
                            endOffset: i.props.endOffset,
                            onError: i.onPublishClipError
                        })))))
                    }, i.renderSave = function() {
                        return o.createElement(E.u, {
                            "data-test-selector": T.TITLE_SAVE,
                            disabled: !i.canSaveEditedTitle(),
                            onClick: i.editClipTitle
                        }, Object(l.d)("Save", "ClipsTitleEdit"))
                    }, i.onPublishClipError = function(e) {
                        i.errorMessageToError(e)
                    }, i.getRemainingCharacterText = function() {
                        return Object(l.d)("{characterCount, number} remaining", {
                            characterCount: _ - i.state.title.length
                        }, "ClipsTitleEdit")
                    }, i.onSuccess = function() {
                        i.props.onSuccess && i.props.onSuccess(), i.setState({
                            showSuccess: !0,
                            showError: !1,
                            error: null
                        }), setTimeout(function() {
                            i.setState({
                                showSuccess: !1
                            })
                        }, 1500)
                    }, i.dismissMessage = function() {
                        i.setState({
                            showError: !1,
                            showSuccess: !1
                        })
                    }, i.handleTitleEdit = function(e) {
                        var t = e.currentTarget.value.slice(0, _);
                        i.setState({
                            title: t,
                            showError: !1,
                            showSuccess: !1
                        })
                    }, i.editClipTitle = function() {
                        return s.__awaiter(i, void 0, void 0, function() {
                            var e, t;
                            return s.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if ("" === this.state.title.trim()) return this.setState({
                                            showError: !0,
                                            error: h.emptySubmission
                                        }), [2];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.editTitle(Object(c.a)({
                                            title: this.state.title.trim(),
                                            slug: this.props.clipSlug
                                        }))];
                                    case 2:
                                        return (e = i.sent()).data.updateClip && e.data.updateClip.error ? (this.setState({
                                            showError: !0,
                                            error: this.errorMessageToError(e.data.updateClip.error.message)
                                        }), [2]) : (this.props.clipBroadcasterId && this.props.clipId && this.props.clipTitle && m(Number(this.props.clipBroadcasterId), this.props.clipId, this.props.clipSlug, this.props.clipTitle, this.props.location), this.onSuccess(), [3, 4]);
                                    case 3:
                                        return t = i.sent(), this.setState({
                                            showError: !0,
                                            error: this.errorMessageToError(t.message)
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, i.canSaveEditedTitle = function() {
                        return i.props.clipTitle !== i.state.title.trim()
                    }, i.handleKeyDown = function(e) {
                        switch (e.keyCode) {
                            case u.a.Enter:
                                return void(i.props.location === p.PageviewLocation.ClipsEditing ? i.setState({
                                    showSuccess: !0
                                }) : i.canSaveEditedTitle() && i.editClipTitle());
                            default:
                                return
                        }
                    }, i.state = {
                        title: t.clipTitle ? t.clipTitle.trim() : "",
                        showError: !1,
                        showSuccess: !1,
                        error: null
                    }, i
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return this.props.location === p.PageviewLocation.MyClipsManager ? this.renderForManager() : this.props.location === p.PageviewLocation.ClipsEditing ? this.renderForEdit() : this.renderForClipsViewing()
                }, t.prototype.getErrorMessage = function() {
                    switch (this.state.error) {
                        case h.channelViolation:
                            return Object(l.d)("Uh-oh. Check for inappropriate language and try again!", "ClipsTitleEdit");
                        case h.emptySubmission:
                            return Object(l.d)("Please add a title.", "ClipsTitleEdit");
                        default:
                            return Object(l.d)("Whoops. Something went wrong.", "ClipsTitleEdit")
                    }
                }, t.prototype.errorMessageToError = function(e) {
                    return e.includes("403:") || e.toLowerCase() === n.InvalidTitle.toLowerCase() || e.toLowerCase() === r.InvalidTitle.toLowerCase() ? h.channelViolation : h.unknown
                }, t
            }(o.Component),
            O = Object(d.a)(C, {
                name: "editTitle"
            })(w);
        i.d(t, !1, function() {
            return T
        }), i.d(t, !1, function() {
            return h
        }), i.d(t, !1, function() {
            return w
        }), i.d(t, "a", function() {
            return O
        })
    },
    f8OD: function(e, t) {
        var i = {
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
                                            value: "filmStripFrames"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "filmStripSecondsPerFrame"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "frameHeight"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "frameWidth"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "spritesheetURL"
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
                end: 227
            }
        };
        i.loc.source = {
            body: "query ClipsRawMedia($slug: ID!) {\nclip(slug: $slug) {\nbroadcaster {\ndisplayName\n}\nrawMedia {\ndefaultClipInitialOffset\nduration\nfilmStripFrames\nfilmStripSecondsPerFrame\nframeHeight\nframeWidth\nspritesheetURL\nstatus\nvideoURL\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = i
    },
    icZh: function(e, t, i) {
        "use strict";
        t.a = s, t.b = function(e) {
            var t = s();
            t && t.length >= a && (t = t.slice(1, a));
            n.l.set(r, JSON.stringify(t.concat([e])))
        };
        var n = i("6sO2"),
            r = "MOST_RECENT_CLIPS_WATCHED_STORAGE_KEY",
            a = 10;

        function s() {
            return JSON.parse(n.l.get(r, "[]"))
        }
    },
    isxN: function(e, t) {
        var i = {
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
        i.loc.source = {
            body: "mutation PublishClip($input: PublishClipInput!) {\npublishClip(input: $input) {\nclip {\ntitle\nslug\n}\nerror {\nmessage\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = i
    },
    rqhk: function(e, t, i) {
        "use strict";
        var n = i("TToO"),
            r = i("GiK3"),
            a = i("kJau");

        function s(e) {
            return function(t) {
                return function(i) {
                    function o(t) {
                        var r = i.call(this, t) || this;
                        return r.messageHandlers = [], r.handlePlayerAdded = function() {
                            r.getPlayer() && !r.isConnected && (r.isConnected = !0, c.off(d, r.handlePlayerAdded), c.on(u, r.handlePlayerRemoved), window.addEventListener("message", r.onIncomingPlayerMessage))
                        }, r.handlePlayerRemoved = function() {
                            !r.getPlayer() && r.isConnected && (r.isConnected = !1, c.off(u, r.handlePlayerRemoved), c.on(d, r.handlePlayerAdded), window.removeEventListener("message", r.onIncomingPlayerMessage))
                        }, r.sendMessage = function(e) {
                            var t = r.getPlayer();
                            t && t.postMessage(e, a.a)
                        }, r.onIncomingPlayerMessage = function(e) {
                            e.origin === a.a && e.data.namespace === I && r.messageHandlers.forEach(function(t) {
                                t(e.data)
                            })
                        }, r.updatePlayerProps = function(t) {
                            if (e.requestedPlayerProps && (t.method === w || t.method === O)) {
                                var i = t.args[0],
                                    a = e.requestedPlayerProps.reduce(function(e, t) {
                                        var n = i[t];
                                        return void 0 !== n && r.state.playerProps[t] !== n && (e[t] = n), e
                                    }, {});
                                Object.keys(a).length && r.setState({
                                    playerProps: n.__assign({}, r.state.playerProps, a)
                                })
                            }
                        }, e.requestedPlayerProps && r.messageHandlers.push(r.updatePlayerProps), r.state = {
                            playerProps: {}
                        }, r
                    }
                    return n.__extends(o, i), o.prototype.componentWillMount = function() {
                        c.on(d, this.handlePlayerAdded)
                    }, o.prototype.componentWillUnmount = function() {
                        c.off(d, this.handlePlayerAdded), c.off(u, this.handlePlayerRemoved)
                    }, o.prototype.render = function() {
                        var e = {
                            playerConnection: {
                                sendMessage: this.sendMessage,
                                registerMessageHandler: this.registerMessageHandler,
                                playerProps: this.state.playerProps
                            }
                        };
                        return r.createElement(t, n.__assign({}, this.props, e))
                    }, o.prototype.getPlayer = function() {
                        return l[e.playerId(this.props)]
                    }, o.prototype.registerMessageHandler = function(e) {
                        this.messageHandlers.push(e)
                    }, o.displayName = s.name + "(" + (t.displayName || t.name) + ")", o
                }(r.Component)
            }
        }
        var o = i("BzvE"),
            l = {},
            d = "player-storage-added",
            u = "player-storage-removed",
            c = new o.EventEmitter;

        function p(e, t) {
            l[e] = t, c.emit(d)
        }

        function m(e) {
            delete l[e], c.emit(u)
        }

        function f(e) {
            return {
                args: [void 0 === e.arg ? {} : e.arg],
                method: e.method,
                namespace: void 0 === e.namespace ? P : e.namespace
            }
        }

        function h() {
            return f({
                method: "pause"
            })
        }

        function g() {
            return f({
                method: "play"
            })
        }

        function v(e) {
            return f({
                method: "closeModeration",
                arg: e
            })
        }

        function E() {
            return f({
                method: C
            })
        }

        function y(e) {
            return f({
                method: _,
                arg: e
            })
        }

        function S(e) {
            return f({
                method: T,
                arg: e
            })
        }

        function k() {
            return f({
                method: "fullscreen",
                arg: !1
            })
        }

        function b(e) {
            return f({
                method: "setEditClip",
                arg: e
            })
        }
        var C = "subscribe",
            T = "setclip",
            _ = "setAutoplay",
            w = "bridgestateupdate",
            O = "bridgestorestateupdate",
            P = "player.embed.host",
            I = "player.embed.client";
        i.d(t, "t", function() {
            return s
        }), i.d(t, "p", function() {
            return l
        }), i.d(t, "n", function() {
            return d
        }), i.d(t, "o", function() {
            return u
        }), i.d(t, "i", function() {
            return c
        }), i.d(t, "s", function() {
            return p
        }), i.d(t, "q", function() {
            return m
        }), i.d(t, !1, function() {
            return f
        }), i.d(t, !1, function() {
            return h
        }), i.d(t, !1, function() {
            return g
        }), i.d(t, "h", function() {
            return v
        }), i.d(t, "m", function() {
            return E
        }), i.d(t, "k", function() {
            return y
        }), i.d(t, "l", function() {
            return S
        }), i.d(t, "j", function() {
            return k
        }), i.d(t, "r", function() {
            return b
        }), i.d(t, "g", function() {
            return C
        }), i.d(t, "f", function() {
            return T
        }), i.d(t, "e", function() {
            return _
        }), i.d(t, "c", function() {
            return w
        }), i.d(t, "d", function() {
            return O
        }), i.d(t, "b", function() {
            return P
        }), i.d(t, "a", function() {
            return I
        }), i.d(t, !1, function() {
            return "report"
        }), i.d(t, !1, function() {
            return "delete"
        }), i.d(t, !1, function() {
            return "deleteAll"
        })
    },
    vtXo: function(e, t) {},
    vwd7: function(e, t, i) {
        "use strict";
        var n, r = i("TToO"),
            a = i("GiK3"),
            s = i("CSlQ"),
            o = i("rqhk"),
            l = i("kJau"),
            d = i("icZh"),
            u = i("46tX"),
            c = i("Odds");
        i("vtXo");
        ! function(e) {
            e.Viewing = "clips-viewing", e.Editing = "clips-editing"
        }(n || (n = {}));
        var p = function(e) {
            function t(t) {
                var i = e.call(this, t) || this;
                i.hasSetPlayerRef = !1, i.setInitialSlug = function(e) {
                    i.state.initialSlug || (i.setState({
                        initialSlug: e
                    }), Object(d.b)(e))
                }, i.setPlayerRef = function(e) {
                    i.playerRef = e
                }, i.setIsLoaded = function() {
                    i.setState({
                        isLoaded: !0
                    }), i.props.onLoaded && i.props.onLoaded()
                };
                var n = i.props.slug;
                return i.state = {
                    initialSlug: n,
                    isLoaded: !1
                }, n && Object(d.b)(n), i
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                this.setInitialSlug(this.props.slug)
            }, t.prototype.componentWillReceiveProps = function(e) {
                this.state.initialSlug || this.setInitialSlug(e.slug), this.props.slug !== e.slug && e.slug && this.setClip(e.slug)
            }, t.prototype.componentWillUnmount = function() {
                Object(o.q)(this.props.slug)
            }, t.prototype.componentDidUpdate = function() {
                !this.hasSetPlayerRef && this.playerRef && (this.hasSetPlayerRef = !0, Object(o.s)(this.props.slug, this.playerRef.contentWindow), this.playerRef.contentWindow.postMessage(Object(o.m)(), l.a))
            }, t.prototype.render = function() {
                return this.state.initialSlug ? a.createElement(c._29, {
                    className: "clips-video-iframe",
                    position: c._13.Relative,
                    fullWidth: !0,
                    fullHeight: !0
                }, a.createElement(c._29, {
                    display: this.state.isLoaded ? c.P.Hide : c.P.Flex,
                    color: c.J.Overlay,
                    alignItems: c.c.Center,
                    justifyContent: c._5.Center,
                    position: c._13.Absolute,
                    fullHeight: !0,
                    fullWidth: !0
                }, a.createElement(c._8, {
                    size: c._27.Large,
                    inheritColor: !0
                })), a.createElement(c._0, {
                    display: this.state.isLoaded ? c.P.Block : c.P.HideAccessible,
                    position: c._13.Absolute,
                    fullHeight: !0,
                    fullWidth: !0
                }, a.createElement("iframe", {
                    src: l.a + "/?player=" + this.props.playerType + "&clip=" + this.state.initialSlug + "&origin=" + window.location.origin + "&branding=false&externalfullscreen=" + !Object(u.c)(navigator.userAgent),
                    frameBorder: "0",
                    scrolling: "no",
                    allowFullScreen: !0,
                    ref: this.setPlayerRef,
                    onLoad: this.setIsLoaded
                }))) : null
            }, t.prototype.setClip = function(e) {
                this.playerRef && (this.playerRef.contentWindow.postMessage(Object(o.l)(e), l.a), Object(d.b)(e))
            }, t = r.__decorate([Object(s.d)("ClipsVideoIframe", {
                autoReportInteractive: !0
            })], t)
        }(a.Component);
        i.d(t, "a", function() {
            return n
        }), i.d(t, "b", function() {
            return p
        })
    }
});
//# sourceMappingURL=sites.clips.pages.create-9e075af47072f9d962abfe745d8ad02a.js.map