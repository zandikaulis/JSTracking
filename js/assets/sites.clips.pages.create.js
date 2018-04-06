webpackJsonp([55], {
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
    "3HXW": function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("GiK3"),
            s = n("Odds");
        n("cJZy");
        ! function(e) {
            e.Left = "left", e.Right = "right"
        }(i || (i = {}));
        var o, l = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.leftHandleRef = null, n.rightHandleRef = null, n.renderHandle = function(e) {
                    var t, r;
                    switch (e) {
                        case i.Left:
                            t = n.onLeftMouseDown, r = n.leftHandleRefHandler;
                            break;
                        case i.Right:
                            t = n.onRightMouseDown, r = n.rightHandleRefHandler;
                            break;
                        default:
                            return e
                    }
                    return a.createElement(s._0, {
                        className: "draggable-slider__handle",
                        display: s.P.Flex,
                        fullHeight: !0
                    }, a.createElement("div", {
                        onMouseDown: t,
                        ref: r
                    }, a.createElement(s._19, {
                        asset: s._20.DragHandle
                    })))
                }, n.getHandleHandlers = function(e) {
                    switch (e) {
                        case i.Left:
                            return {
                                handleRef: n.leftHandleRef,
                                mouseMoveHandler: n.onLeftMouseMove,
                                mouseUpHandler: n.onLeftMouseUp
                            };
                        case i.Right:
                            return {
                                handleRef: n.rightHandleRef,
                                mouseMoveHandler: n.onRightMouseMove,
                                mouseUpHandler: n.onRightMouseUp
                            };
                        default:
                            return e
                    }
                }, n.addHandleListeners = function(e) {
                    var t = n.getHandleHandlers(e),
                        i = t.handleRef,
                        r = t.mouseMoveHandler,
                        a = t.mouseUpHandler;
                    i && (i.ownerDocument.addEventListener("mousemove", r), i.ownerDocument.addEventListener("mouseup", a))
                }, n.removeHandleListeners = function(e) {
                    var t = n.getHandleHandlers(e),
                        i = t.handleRef,
                        r = t.mouseMoveHandler,
                        a = t.mouseUpHandler;
                    i && (i.ownerDocument.removeEventListener("mousemove", r), i.ownerDocument.removeEventListener("mouseup", a))
                }, n.leftHandleRefHandler = function(e) {
                    n.leftHandleRef = e
                }, n.onLeftMouseDown = function(e) {
                    var t = e.clientX;
                    n.setState(function(e) {
                        return {
                            startDragX: t,
                            startDragValue: e.startOffset
                        }
                    }, function() {
                        n.props.onLeftDragStart && n.props.onLeftDragStart({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        }), n.addHandleListeners(i.Left)
                    })
                }, n.onLeftMouseUp = function() {
                    n.setState({
                        startDragX: null,
                        startDragValue: null
                    }, function() {
                        n.props.onLeftDragEnd && n.props.onLeftDragEnd({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        }), n.removeHandleListeners(i.Left)
                    })
                }, n.onLeftMouseMove = function(e) {
                    var t = e.clientX;
                    n.setState(function(e, i) {
                        return {
                            startOffset: n.calculateOffset(t, {
                                startBoundary: i.minOffset,
                                endBoundary: e.endOffset,
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
                    var t = e.clientX;
                    n.setState(function(e) {
                        return {
                            startDragX: t,
                            startDragValue: e.endOffset
                        }
                    }, function() {
                        n.props.onRightDragStart && n.props.onRightDragStart({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        }), n.addHandleListeners(i.Right)
                    })
                }, n.onRightMouseUp = function() {
                    n.setState({
                        startDragX: null,
                        startDragValue: null
                    }, function() {
                        n.props.onRightDragEnd && n.props.onRightDragEnd({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        }), n.removeHandleListeners(i.Right)
                    })
                }, n.onRightMouseMove = function(e) {
                    var t = e.clientX;
                    n.setState(function(e, i) {
                        return {
                            startOffset: e.startOffset,
                            endOffset: n.calculateOffset(t, {
                                startBoundary: e.startOffset,
                                endBoundary: i.maxOffset,
                                currentValue: e.endOffset
                            })
                        }
                    }, function() {
                        n.props.onRightDrag && n.props.onRightDrag({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        })
                    })
                }, n.calculateOffset = function(e, t) {
                    if (null === n.state.startDragX || null === n.state.startDragValue) return t.currentValue;
                    var i = n.convertPixelsToOffsetUnits(e - n.state.startDragX),
                        r = n.state.startDragValue + i;
                    return r < t.startBoundary ? t.startBoundary : r > t.endBoundary ? t.endBoundary : r
                }, n.convertPixelsToOffsetUnits = function(e) {
                    return n.props.parentContainerRef ? 0 === n.props.parentContainerRef.clientWidth ? 0 : e * ((n.props.maxOffset - n.props.minOffset) / n.props.parentContainerRef.clientWidth) : 0
                }, n.state = {
                    startOffset: t.startOffset,
                    endOffset: t.endOffset,
                    startDragX: null,
                    startDragValue: null
                }, n
            }
            return r.__extends(t, e), t.prototype.render = function() {
                return a.createElement(s._6, {
                    position: s._13.Relative,
                    display: s.P.Flex,
                    justifyContent: s._5.Center
                }, a.createElement(s._6, {
                    className: "draggable-slider__popover",
                    position: s._13.Absolute
                }, this.props.popover), a.createElement(s._29, {
                    background: s.m.AccentAlt2,
                    fullWidth: !0,
                    display: s.P.Flex,
                    justifyContent: s._5.Between
                }, this.renderHandle(i.Left), a.createElement(s._6, {
                    display: s.P.InlineBlock,
                    fullWidth: !0
                }, this.props.children), this.renderHandle(i.Right)))
            }, t
        }(a.Component);
        ! function(e) {
            e[e.SegmentBox = 0] = "SegmentBox"
        }(o || (o = {}));
        var d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    startOffset: t.props.startOffset,
                    endOffset: t.props.endOffset
                }, t.handleParentContainerRef = function(e) {
                    return t.parentContainerRef = e
                }, t
            }
            return r.__extends(t, e), t.prototype.render = function() {
                var e = {
                    width: this.calculateWidthPercentage() + "%",
                    marginLeft: this.calculateOffsetPercentage() + "%"
                };
                return a.createElement("div", {
                    ref: this.handleParentContainerRef
                }, a.createElement(s._0, {
                    flexGrow: 0,
                    flexShrink: 0
                }, a.createElement("div", {
                    "data-test-selector": o.SegmentBox,
                    style: e
                }, a.createElement(l, {
                    minOffset: this.props.minOffset,
                    maxOffset: this.props.maxOffset,
                    startOffset: this.props.startOffset,
                    endOffset: this.props.endOffset,
                    parentContainerRef: this.parentContainerRef,
                    onLeftDragStart: this.props.onLeftDragStart,
                    onLeftDrag: this.props.onLeftDrag,
                    onLeftDragEnd: this.props.onLeftDragEnd,
                    onRightDragStart: this.props.onRightDragStart,
                    onRightDrag: this.props.onRightDrag,
                    onRightDragEnd: this.props.onRightDragEnd,
                    popover: this.props.popover
                }, this.props.children))))
            }, t.prototype.calculateOffsetPercentage = function() {
                return this.props.startOffset / this.getTotalLength() * 100
            }, t.prototype.calculateWidthPercentage = function() {
                return (this.props.endOffset - this.props.startOffset) / this.getTotalLength() * 100
            }, t.prototype.getTotalLength = function() {
                return this.props.maxOffset - this.props.minOffset
            }, t
        }(a.Component);
        n.d(t, !1, function() {
            return o
        }), n.d(t, "a", function() {
            return d
        })
    },
    "7WFF": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("CIox"),
            s = n("3zLD"),
            o = n("7vx8"),
            l = n("rqhk"),
            d = n("vH/s"),
            u = n("3HXW"),
            c = n("QIXk");

        function p(e, t) {
            return {
                startOffset: e,
                endOffset: e + t
            }
        }
        var f = n("Odds"),
            m = 5,
            h = 60,
            g = 1;

        function v(e) {
            return parseFloat(e.toFixed(g))
        }
        var O, E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.initialOffsets = p(t.props.rawMedia.defaultClipInitialOffset, t.props.rawMedia.duration - t.props.rawMedia.defaultClipInitialOffset), t.state = {
                        startOffset: t.initialOffsets.startOffset,
                        endOffset: t.initialOffsets.endOffset,
                        minOffset: 0,
                        maxOffset: t.props.rawMedia.duration
                    }, t.onDrag = function(e) {
                        var n = e.endOffset - e.startOffset;
                        n > h || n < m || (t.setState({
                            startOffset: v(e.startOffset),
                            endOffset: v(e.endOffset)
                        }), t.props.playerConnection.sendMessage(Object(l.r)({
                            startOffset: t.state.startOffset,
                            endOffset: t.state.endOffset
                        })))
                    }, t.renderDurationPopover = function() {
                        return r.createElement(f._29, {
                            background: f.m.Overlay,
                            padding: {
                                y: 2,
                                x: 1
                            },
                            fullWidth: !0,
                            textAlign: f._39.Center,
                            overflow: f._9.Hidden
                        }, r.createElement(f.O, {
                            align: f._53.Middle,
                            ellipsis: !0
                        }, t.state.startOffset + " - " + t.state.endOffset))
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.isClipResolved ? r.createElement(f._6, null, r.createElement(f._29, {
                        padding: {
                            y: 4
                        }
                    }, r.createElement(u.a, {
                        startOffset: this.state.startOffset,
                        endOffset: this.state.endOffset,
                        minOffset: this.state.minOffset,
                        maxOffset: this.state.maxOffset,
                        onLeftDrag: this.onDrag,
                        onRightDrag: this.onDrag,
                        popover: this.renderDurationPopover()
                    }, r.createElement(f._29, {
                        background: f.m.Overlay,
                        padding: {
                            y: 2,
                            x: 1
                        },
                        fullWidth: !0,
                        textAlign: f._39.Center,
                        overflow: f._9.Hidden
                    }, r.createElement(f.O, {
                        align: f._53.Middle,
                        ellipsis: !0
                    }, this.state.startOffset + " - " + this.state.endOffset)))), r.createElement(c.a, {
                        clipSlug: this.props.slug,
                        location: d.PageviewLocation.ClipsEditing,
                        broadcasterName: this.props.broadcasterName,
                        startOffset: this.state.startOffset,
                        endOffset: this.state.endOffset
                    })) : r.createElement(f._6, null, r.createElement(f.u, {
                        disabled: !0
                    }))
                }, t
            }(r.Component),
            y = Object(l.t)({
                playerId: function(e) {
                    return e.slug
                }
            })(E);
        ! function(e) {
            e.creating = "CREATING", e.created = "CREATED", e.failed = "FAILED"
        }(O || (O = {}));
        var S = n("6sO2"),
            C = n("CSlQ"),
            _ = (n("Jbgd"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(f._29, {
                        background: f.m.Base,
                        className: "clips-edit-top-nav",
                        position: f._13.Fixed,
                        fullWidth: !0,
                        attachTop: !0,
                        attachLeft: !0,
                        display: f.P.Flex,
                        justifyContent: f._5.Center,
                        alignItems: f.c.Center,
                        "data-test-selector": "clips-edit-top-nav-wrapper"
                    }, this.props.showMessage && r.createElement(f._6, {
                        display: f.P.Flex,
                        justifyContent: f._5.Center,
                        alignItems: f.c.Center
                    }, r.createElement(f.O, {
                        color: f.J.Alt,
                        fontSize: f.T.Size5
                    }, Object(S.d)("Title this clip to publish", "ClipsEditTopNav")), r.createElement(f._6, {
                        margin: {
                            left: .5
                        },
                        display: f.P.Flex,
                        alignItems: f.c.Center
                    }, r.createElement(f._19, {
                        asset: f._20.Lock,
                        type: f._21.Warn
                    }))))
                }, t
            }(r.Component)),
            b = Object(C.d)("ClipsEditTopNav", {
                autoReportInteractive: !0
            })(_),
            k = n("vwd7"),
            T = n("f8OD"),
            w = (n("D9gI"), function(e) {
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
                        var n = t.getRawMediaStatus(e);
                        return t.getRawMediaExists(e) && (n === O.created || n === O.failed)
                    }, t.getIsCreationFailed = function(e) {
                        return t.getRawMediaExists(e) && t.getRawMediaStatus(e) === O.failed
                    }, t.getRawMediaStatus = function(e) {
                        return e.data.clip && e.data.clip.rawMedia && e.data.clip.rawMedia.status || ""
                    }, t.getRawMediaExists = function(e) {
                        return Boolean(e.data.clip && e.data.clip.rawMedia)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
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
                    if (!this.hasSentEditClip && e && this.state.isPlayerIframeLoaded && this.props.data.clip && this.props.data.clip.rawMedia) {
                        var t = this.props.data.clip.rawMedia,
                            n = t.defaultClipInitialOffset,
                            i = t.duration,
                            r = t.videoURL,
                            a = p(n, i - n);
                        this.props.playerConnection.sendMessage(Object(l.r)({
                            startOffset: a.startOffset,
                            endOffset: a.endOffset,
                            videoUrl: r,
                            slug: this.props.slug
                        })), this.hasSentEditClip = !0
                    }
                }, t.prototype.render = function() {
                    if (this.state.isPollingTimedOut || this.getIsCreationFailed(this.props)) return r.createElement(a.b, {
                        to: "/500"
                    });
                    var e = this.props.data.clip;
                    return e && e.rawMedia && this.getIsClipResolved(this.props) ? r.createElement(f._6, null, r.createElement(b, {
                        showMessage: !0
                    }), r.createElement(f._6, {
                        className: "clips-edit-clip-wrapper",
                        margin: {
                            top: 1
                        }
                    }, r.createElement(f.j, {
                        ratio: f.k.Aspect16x9
                    }, r.createElement(f._6, {
                        position: f._13.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, r.createElement(k.b, {
                        slug: this.props.slug,
                        onLoaded: this.onLoaded,
                        playerType: k.a.Editing
                    }))), r.createElement(y, {
                        isClipResolved: this.getIsClipResolved(this.props),
                        slug: this.props.slug,
                        broadcasterName: e.broadcaster && e.broadcaster.displayName || "",
                        rawMedia: e.rawMedia
                    }))) : r.createElement(b, {
                        showMessage: !1
                    })
                }, t
            }(r.Component)),
            P = Object(s.compose)(Object(l.t)({
                playerId: function(e) {
                    return e.slug
                }
            }), Object(o.a)(T, {
                options: function(e) {
                    return {
                        pollInterval: 1e3,
                        fetchPolicy: "network",
                        variables: {
                            slug: e.slug
                        }
                    }
                }
            }))(w),
            R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return "/:slug/edit" === this.props.match.path ? (e = this.props.match.params.slug, r.createElement(a.b, {
                        to: {
                            pathname: "/create",
                            state: {
                                slug: e
                            }
                        }
                    })) : this.props.location.state && this.props.location.state.slug ? (e = this.props.location.state.slug, r.createElement(f._6, null, r.createElement(P, {
                        slug: e
                    }))) : r.createElement(a.b, {
                        to: "/"
                    })
                }, t
            }(r.Component);
        n.d(t, "ClipsCreate", function() {
            return R
        })
    },
    D9gI: function(e, t) {},
    Jbgd: function(e, t) {},
    QIXk: function(e, t, n) {
        "use strict";
        var i, r, a, s = n("TToO"),
            o = n("GiK3"),
            l = n("6sO2"),
            d = n("7vx8"),
            u = n("6BvN"),
            c = n("oIkB"),
            p = n("vH/s"),
            f = function(e, t, n, i, r) {
                var a = Date.now() / 1e3;
                l.o.tracking.track(p.SpadeEventType.ClipEdit, {
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
            m = n("CIox");
        ! function(e) {
            e.AlreadyPublished = "already_published", e.EditingWindowExpired = "editing_window_expired", e.InvalidSpeedDuration = "invalid_speed_duration", e.InvalidDuration = "invalid_duration", e.InvalidTitle = "invalid_title", e.Unknown = "unknown"
        }(i || (i = {})),
        function(e) {
            e.InvalidTitle = "invalid_title"
        }(r || (r = {})),
        function(e) {
            e.Unsent = "unsent", e.Sending = "sending", e.Error = "error", e.Successful = "successful"
        }(a || (a = {}));
        var h, g = 5,
            v = 60,
            O = n("Odds"),
            E = n("isxN"),
            y = {
                publishState: a.Unsent,
                errorMessage: null
            },
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = y, t.onError = function(e) {
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
                                            }), e = this.props.endOffset - this.props.startOffset, this.props.startOffset > this.props.endOffset || e < g || e > v) return this.setState({
                                            publishState: a.Error,
                                            errorMessage: i.InvalidDuration
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
                                        return (t = r.sent()).data.publishClip && t.data.publishClip.error && t.data.publishClip.error.message ? (n = t.data.publishClip.error.message, this.onError(n)) : (this.setState({
                                            publishState: a.Successful
                                        }), this.props.history.push("/" + this.props.slug)), [3, 4];
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
                    this.state.publishState === a.Error && e.title.length > 0 && this.props.title !== e.title && this.setState(y), e.isSubmitted && !this.props.isSubmitted && this.onPublish()
                }, t.prototype.render = function() {
                    var e = this.props.title.length < 1 || this.state.publishState === a.Error,
                        t = this.state.publishState === a.Sending;
                    return o.createElement(O._6, null, o.createElement(O.u, {
                        onClick: this.onPublish,
                        disabled: e,
                        state: t ? O.z.Loading : O.z.Default,
                        size: O.y.Large,
                        blurAfterClick: !0
                    }, Object(l.d)("Publish", "ClipsPublishButton")))
                }, t = s.__decorate([Object(d.a)(E, {
                    name: "publishClip"
                })], t)
            }(o.Component),
            C = Object(m.f)(S),
            _ = n("2TZ0"),
            b = {
                TITLE_INPUT: "cmgr-title-input",
                TITLE_SAVE: "cmgr-title-save",
                TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
            };
        ! function(e) {
            e.emptySubmission = "emptySubmission", e.characterLimitReached = "characterLimitReached", e.channelViolation = "channelViolation", e.notCurator = "notCurator", e.unknown = "unknown"
        }(h || (h = {}));
        var k = 100,
            T = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderForClipsViewing = function() {
                        return o.createElement("div", null, o.createElement(O._40, {
                            id: b.TITLE_INPUT,
                            "data-test-selector": b.TITLE_INPUT,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        }), o.createElement(O._6, {
                            display: O.P.Flex,
                            justifyContent: O._5.Between,
                            alignItems: O.c.Center,
                            padding: {
                                top: 1
                            }
                        }, n.state.showError ? o.createElement(O.O, {
                            color: O.J.Error
                        }, n.getErrorMessage()) : o.createElement(O.O, {
                            color: O.J.Alt2
                        }, n.getRemainingCharacterText()), o.createElement(O._6, {
                            display: O.P.Flex
                        }, o.createElement(O.u, {
                            "data-test-selector": b.TITLE_SAVE,
                            onClick: n.props.onCancel,
                            type: O.A.Hollow
                        }, Object(l.d)("Cancel", "ClipsTitleEdit")), o.createElement(O._6, {
                            padding: {
                                left: 1
                            }
                        }, n.renderSave()))))
                    }, n.renderForManager = function() {
                        return o.createElement(O.U, {
                            id: b.TITLE_INPUT,
                            label: Object(l.d)("Title", "ClipsTitleEdit"),
                            hint: n.getRemainingCharacterText()
                        }, o.createElement(O._6, {
                            display: O.P.Flex,
                            flexWrap: O.S.NoWrap
                        }, o.createElement(O._6, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, o.createElement(O._2, {
                            id: b.TITLE_INPUT,
                            "data-test-selector": b.TITLE_INPUT,
                            type: O._3.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        })), o.createElement(O._6, {
                            flexShrink: 0,
                            flexGrow: 0
                        }, o.createElement(O._6, {
                            position: O._13.Relative
                        }, n.renderSave(), o.createElement(O._4, {
                            onClick: n.dismissMessage,
                            "data-test-selector": b.TITLE_SAVE_TOOLTIP
                        }, o.createElement(O.p, {
                            direction: O.q.TopRight,
                            show: n.state.showError || n.state.showSuccess
                        }, o.createElement(O._6, {
                            padding: 1
                        }, n.state.showSuccess ? o.createElement(O.O, {
                            color: O.J.Link
                        }, Object(l.d)("Title Saved!", "ClipsTitleEdit")) : o.createElement(O.O, {
                            color: O.J.Error
                        }, n.getErrorMessage()))))))))
                    }, n.renderForEdit = function() {
                        var e;
                        if ((n.props.startOffset || 0 === n.props.startOffset) && n.props.endOffset) return e = n.state.showError ? o.createElement(O.O, {
                            color: O.J.Alt2
                        }, n.getErrorMessage()) : 0 === n.state.title.length && n.props.broadcasterName ? o.createElement(O.O, {
                            color: O.J.Alt2
                        }, Object(l.d)("Clips with titles get more views. Help {broadcasterName} get discovered by adding a title.", {
                            broadcasterName: n.props.broadcasterName
                        }, "ClipsTitleEdit")) : o.createElement(O.O, {
                            color: O.J.Alt2
                        }, n.getRemainingCharacterText()), o.createElement(O._6, null, o.createElement(O._6, {
                            fullWidth: !0
                        }, o.createElement(O._2, {
                            id: b.TITLE_INPUT,
                            "data-test-selector": b.TITLE_INPUT,
                            type: O._3.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown,
                            placeholder: Object(l.d)("Add a title (required)", "ClipsTitleEdit"),
                            autoFocus: !0
                        })), o.createElement(O._6, {
                            display: O.P.Flex,
                            justifyContent: O._5.Between,
                            alignItems: O.c.Center,
                            padding: {
                                top: 1
                            }
                        }, e, o.createElement(O._6, {
                            display: O.P.Flex
                        }, o.createElement(O._6, {
                            padding: {
                                left: 1
                            }
                        }, o.createElement(C, {
                            isSubmitted: n.state.showSuccess,
                            title: n.state.title,
                            slug: n.props.clipSlug,
                            startOffset: n.props.startOffset,
                            endOffset: n.props.endOffset,
                            onError: n.onPublishClipError
                        })))))
                    }, n.renderSave = function() {
                        return o.createElement(O.u, {
                            "data-test-selector": b.TITLE_SAVE,
                            disabled: !n.canSaveEditedTitle(),
                            onClick: n.editClipTitle
                        }, Object(l.d)("Save", "ClipsTitleEdit"))
                    }, n.onPublishClipError = function(e) {
                        n.errorMessageToError(e)
                    }, n.getRemainingCharacterText = function() {
                        return Object(l.d)("{characterCount, number} remaining", {
                            characterCount: k - n.state.title.length
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
                        var t = e.currentTarget.value.slice(0, k);
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
                                            error: h.emptySubmission
                                        }), [2];
                                        n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, this.props.editTitle(Object(c.a)({
                                            title: this.state.title.trim(),
                                            slug: this.props.clipSlug
                                        }))];
                                    case 2:
                                        return (e = n.sent()).data.updateClip && e.data.updateClip.error ? (this.setState({
                                            showError: !0,
                                            error: this.errorMessageToError(e.data.updateClip.error.message)
                                        }), [2]) : (this.props.clipBroadcasterId && this.props.clipId && this.props.clipTitle && f(Number(this.props.clipBroadcasterId), this.props.clipId, this.props.clipSlug, this.props.clipTitle, this.props.location), this.onSuccess(), [3, 4]);
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
                            case u.a.Enter:
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
                        case h.channelViolation:
                            return Object(l.d)("Uh-oh. Check for inappropriate language and try again!", "ClipsTitleEdit");
                        case h.emptySubmission:
                            return Object(l.d)("Please add a title.", "ClipsTitleEdit");
                        default:
                            return Object(l.d)("Whoops. Something went wrong.", "ClipsTitleEdit")
                    }
                }, t.prototype.errorMessageToError = function(e) {
                    return e.includes("403:") || e.toLowerCase() === i.InvalidTitle.toLowerCase() || e.toLowerCase() === r.InvalidTitle.toLowerCase() ? h.channelViolation : h.unknown
                }, t
            }(o.Component),
            w = Object(d.a)(_, {
                name: "editTitle"
            })(T);
        n.d(t, !1, function() {
            return b
        }), n.d(t, !1, function() {
            return h
        }), n.d(t, !1, function() {
            return T
        }), n.d(t, "a", function() {
            return w
        })
    },
    cJZy: function(e, t) {},
    f8OD: function(e, t) {
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
        n.loc.source = {
            body: "query ClipsRawMedia($slug: ID!) {\nclip(slug: $slug) {\nbroadcaster {\ndisplayName\n}\nrawMedia {\ndefaultClipInitialOffset\nduration\nfilmStripFrames\nfilmStripSecondsPerFrame\nframeHeight\nframeWidth\nspritesheetURL\nstatus\nvideoURL\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    icZh: function(e, t, n) {
        "use strict";
        t.a = s, t.b = function(e) {
            var t = s();
            t && t.length >= a && (t = t.slice(1, a));
            i.l.set(r, JSON.stringify(t.concat([e])))
        };
        var i = n("6sO2"),
            r = "MOST_RECENT_CLIPS_WATCHED_STORAGE_KEY",
            a = 10;

        function s() {
            return JSON.parse(i.l.get(r, "[]"))
        }
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
    rqhk: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("kJau");

        function s(e) {
            return function(t) {
                return function(n) {
                    function o(t) {
                        var r = n.call(this, t) || this;
                        return r.messageHandlers = [], r.handlePlayerAdded = function() {
                            r.getPlayer() && !r.isConnected && (r.isConnected = !0, c.off(d, r.handlePlayerAdded), c.on(u, r.handlePlayerRemoved), window.addEventListener("message", r.onIncomingPlayerMessage))
                        }, r.handlePlayerRemoved = function() {
                            !r.getPlayer() && r.isConnected && (r.isConnected = !1, c.off(u, r.handlePlayerRemoved), c.on(d, r.handlePlayerAdded), window.removeEventListener("message", r.onIncomingPlayerMessage))
                        }, r.sendMessage = function(e) {
                            var t = r.getPlayer();
                            t && t.postMessage(e, a.a)
                        }, r.onIncomingPlayerMessage = function(e) {
                            e.origin === a.a && e.data.namespace === R && r.messageHandlers.forEach(function(t) {
                                t(e.data)
                            })
                        }, r.updatePlayerProps = function(t) {
                            if (e.requestedPlayerProps && (t.method === T || t.method === w)) {
                                var n = t.args[0],
                                    a = e.requestedPlayerProps.reduce(function(e, t) {
                                        var i = n[t];
                                        return void 0 !== i && r.state.playerProps[t] !== i && (e[t] = i), e
                                    }, {});
                                Object.keys(a).length && r.setState({
                                    playerProps: i.__assign({}, r.state.playerProps, a)
                                })
                            }
                        }, e.requestedPlayerProps && r.messageHandlers.push(r.updatePlayerProps), r.state = {
                            playerProps: {}
                        }, r
                    }
                    return i.__extends(o, n), o.prototype.componentWillMount = function() {
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
                        return r.createElement(t, i.__assign({}, this.props, e))
                    }, o.prototype.getPlayer = function() {
                        return l[e.playerId(this.props)]
                    }, o.prototype.registerMessageHandler = function(e) {
                        this.messageHandlers.push(e)
                    }, o.displayName = s.name + "(" + (t.displayName || t.name) + ")", o
                }(r.Component)
            }
        }
        var o = n("BzvE"),
            l = {},
            d = "player-storage-added",
            u = "player-storage-removed",
            c = new o.EventEmitter;

        function p(e, t) {
            l[e] = t, c.emit(d)
        }

        function f(e) {
            delete l[e], c.emit(u)
        }

        function m(e) {
            return {
                args: [void 0 === e.arg ? {} : e.arg],
                method: e.method,
                namespace: void 0 === e.namespace ? P : e.namespace
            }
        }

        function h() {
            return m({
                method: "pause"
            })
        }

        function g() {
            return m({
                method: "play"
            })
        }

        function v(e) {
            return m({
                method: "closeModeration",
                arg: e
            })
        }

        function O() {
            return m({
                method: _
            })
        }

        function E(e) {
            return m({
                method: k,
                arg: e
            })
        }

        function y(e) {
            return m({
                method: b,
                arg: e
            })
        }

        function S() {
            return m({
                method: "fullscreen",
                arg: !1
            })
        }

        function C(e) {
            return m({
                method: "setEditClip",
                arg: e
            })
        }
        var _ = "subscribe",
            b = "setclip",
            k = "setAutoplay",
            T = "bridgestateupdate",
            w = "bridgestorestateupdate",
            P = "player.embed.host",
            R = "player.embed.client";
        n.d(t, "t", function() {
            return s
        }), n.d(t, "p", function() {
            return l
        }), n.d(t, "n", function() {
            return d
        }), n.d(t, "o", function() {
            return u
        }), n.d(t, "i", function() {
            return c
        }), n.d(t, "s", function() {
            return p
        }), n.d(t, "q", function() {
            return f
        }), n.d(t, !1, function() {
            return m
        }), n.d(t, !1, function() {
            return h
        }), n.d(t, !1, function() {
            return g
        }), n.d(t, "h", function() {
            return v
        }), n.d(t, "m", function() {
            return O
        }), n.d(t, "k", function() {
            return E
        }), n.d(t, "l", function() {
            return y
        }), n.d(t, "j", function() {
            return S
        }), n.d(t, "r", function() {
            return C
        }), n.d(t, "g", function() {
            return _
        }), n.d(t, "f", function() {
            return b
        }), n.d(t, "e", function() {
            return k
        }), n.d(t, "c", function() {
            return T
        }), n.d(t, "d", function() {
            return w
        }), n.d(t, "b", function() {
            return P
        }), n.d(t, "a", function() {
            return R
        }), n.d(t, !1, function() {
            return "report"
        }), n.d(t, !1, function() {
            return "delete"
        }), n.d(t, !1, function() {
            return "deleteAll"
        })
    },
    vtXo: function(e, t) {},
    vwd7: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("GiK3"),
            s = n("CSlQ"),
            o = n("rqhk"),
            l = n("kJau"),
            d = n("icZh"),
            u = n("46tX"),
            c = n("Odds");
        n("vtXo");
        ! function(e) {
            e.Viewing = "clips-viewing", e.Editing = "clips-editing"
        }(i || (i = {}));
        var p = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.hasSetPlayerRef = !1, n.setInitialSlug = function(e) {
                    n.state.initialSlug || (n.setState({
                        initialSlug: e
                    }), Object(d.b)(e))
                }, n.setPlayerRef = function(e) {
                    n.playerRef = e
                }, n.setIsLoaded = function() {
                    n.setState({
                        isLoaded: !0
                    }), n.props.onLoaded && n.props.onLoaded()
                };
                var i = n.props.slug;
                return n.state = {
                    initialSlug: i,
                    isLoaded: !1
                }, i && Object(d.b)(i), n
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
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return p
        })
    }
});
//# sourceMappingURL=sites.clips.pages.create-ff356dfdcc5ec59131c5f94a84b6dfdc.js.map