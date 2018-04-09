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
        var i, r, a = n("TToO"),
            s = n("GiK3"),
            o = n("Odds"),
            l = (n("CBaN"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(o._1, {
                        className: "draggable-slider-handle",
                        display: o.Q.Flex,
                        fullHeight: !0
                    }, s.createElement("div", {
                        onMouseDown: this.props.onMouseDown,
                        ref: this.props.onRef
                    }, s.createElement(o._20, {
                        asset: o._21.DragHandle
                    })))
                }, t
            }(s.Component));
        n("cJZy");
        ! function(e) {
            e.LeftHandle = "left-handle", e.RightHandle = "right-handle"
        }(i || (i = {})),
        function(e) {
            e.Left = "left", e.Right = "right"
        }(r || (r = {}));
        var d, c = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.leftHandleRef = null, n.rightHandleRef = null, n.getHandleHandlers = function(e) {
                    switch (e) {
                        case r.Left:
                            return {
                                handleRef: n.leftHandleRef,
                                mouseMoveHandler: n.onLeftMouseMove,
                                mouseUpHandler: n.onLeftMouseUp
                            };
                        case r.Right:
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
                        }), n.addHandleListeners(r.Left)
                    })
                }, n.onLeftMouseUp = function() {
                    n.setState({
                        startDragX: null,
                        startDragValue: null
                    }, function() {
                        n.props.onLeftDragEnd && n.props.onLeftDragEnd({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        }), n.removeHandleListeners(r.Left)
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
                        }), n.addHandleListeners(r.Right)
                    })
                }, n.onRightMouseUp = function() {
                    n.setState({
                        startDragX: null,
                        startDragValue: null
                    }, function() {
                        n.props.onRightDragEnd && n.props.onRightDragEnd({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        }), n.removeHandleListeners(r.Right)
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
            return a.__extends(t, e), t.prototype.render = function() {
                return s.createElement(o._7, {
                    position: o._14.Relative,
                    display: o.Q.Flex,
                    justifyContent: o._6.Center
                }, s.createElement(o._7, {
                    className: "draggable-slider__popover",
                    position: o._14.Absolute
                }, this.props.popover), s.createElement(o._30, {
                    background: o.m.AccentAlt2,
                    fullWidth: !0,
                    display: o.Q.Flex,
                    justifyContent: o._6.Between
                }, s.createElement(l, {
                    "data-test-selector": i.LeftHandle,
                    onRef: this.leftHandleRefHandler,
                    onMouseDown: this.onLeftMouseDown
                }), s.createElement(o._7, {
                    display: o.Q.InlineBlock,
                    fullWidth: !0
                }, this.props.children), s.createElement(l, {
                    "data-test-selector": i.RightHandle,
                    onRef: this.rightHandleRefHandler,
                    onMouseDown: this.onRightMouseDown
                })))
            }, t
        }(s.Component);
        ! function(e) {
            e[e.SelectedSection = 0] = "SelectedSection"
        }(d || (d = {}));
        var u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    startOffset: t.props.startOffset,
                    endOffset: t.props.endOffset
                }, t.handleParentContainerRef = function(e) {
                    t.parentContainerRef = e
                }, t
            }
            return a.__extends(t, e), t.prototype.render = function() {
                var e = {
                    width: this.calculateWidthPercentage() + "%",
                    marginLeft: this.calculateOffsetPercentage() + "%"
                };
                return s.createElement("div", {
                    ref: this.handleParentContainerRef
                }, s.createElement(o._1, {
                    flexGrow: 0,
                    flexShrink: 0
                }, s.createElement("div", {
                    "data-test-selector": d.SelectedSection,
                    style: e
                }, s.createElement(c, {
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
        }(s.Component);
        n.d(t, !1, function() {
            return d
        }), n.d(t, "a", function() {
            return u
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
            s = n("j7/Y"),
            o = n("w9tK"),
            l = n("vH/s"),
            d = n("CSlQ"),
            c = n("3zLD"),
            u = n("7vx8"),
            p = n("rqhk"),
            f = n("3HXW"),
            h = n("QIXk");

        function m(e, t) {
            return {
                startOffset: e,
                endOffset: e + t
            }
        }
        var g = n("Odds"),
            v = 5,
            O = 60,
            y = 1;

        function E(e) {
            return parseFloat(e.toFixed(y))
        }
        var _, S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.initialOffsets = m(t.props.rawMedia.defaultClipInitialOffset, t.props.rawMedia.duration - t.props.rawMedia.defaultClipInitialOffset), t.state = {
                        startOffset: t.initialOffsets.startOffset,
                        endOffset: t.initialOffsets.endOffset,
                        minOffset: 0,
                        maxOffset: t.props.rawMedia.duration
                    }, t.onDrag = function(e) {
                        var n = e.endOffset - e.startOffset;
                        n > O || n < v || (t.setState({
                            startOffset: E(e.startOffset),
                            endOffset: E(e.endOffset)
                        }), t.props.playerConnection.sendMessage(Object(p.r)({
                            startOffset: t.state.startOffset,
                            endOffset: t.state.endOffset
                        })))
                    }, t.renderDurationPopover = function() {
                        return r.createElement(g._30, {
                            background: g.m.Overlay,
                            padding: {
                                y: 2,
                                x: 1
                            },
                            fullWidth: !0,
                            textAlign: g._40.Center,
                            overflow: g._10.Hidden
                        }, r.createElement(g.P, {
                            align: g._54.Middle,
                            ellipsis: !0
                        }, t.state.startOffset + " - " + t.state.endOffset))
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.isClipResolved && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.isClipResolved ? r.createElement(g._7, null, r.createElement(g._30, {
                        padding: {
                            y: 4
                        }
                    }, r.createElement(f.a, {
                        startOffset: this.state.startOffset,
                        endOffset: this.state.endOffset,
                        minOffset: this.state.minOffset,
                        maxOffset: this.state.maxOffset,
                        onLeftDrag: this.onDrag,
                        onRightDrag: this.onDrag,
                        popover: this.renderDurationPopover()
                    }, r.createElement(g._30, {
                        background: g.m.Overlay,
                        padding: {
                            y: 2,
                            x: 1
                        },
                        fullWidth: !0,
                        textAlign: g._40.Center,
                        overflow: g._10.Hidden
                    }, r.createElement(g.P, {
                        align: g._54.Middle,
                        ellipsis: !0
                    }, this.state.startOffset + " - " + this.state.endOffset)))), r.createElement(h.a, {
                        clipSlug: this.props.slug,
                        location: l.PageviewLocation.ClipsEditing,
                        broadcasterName: this.props.broadcasterName,
                        startOffset: this.state.startOffset,
                        endOffset: this.state.endOffset
                    })) : r.createElement(g._7, null, r.createElement(g.u, {
                        disabled: !0
                    }))
                }, t
            }(r.Component),
            C = Object(c.compose)(Object(p.t)({
                playerId: function(e) {
                    return e.slug
                }
            }), Object(d.d)("ClipsEditor"))(S);
        ! function(e) {
            e.creating = "CREATING", e.created = "CREATED", e.failed = "FAILED"
        }(_ || (_ = {}));
        var k = n("6sO2"),
            b = (n("Jbgd"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(g._30, {
                        background: g.m.Base,
                        className: "clips-edit-top-nav",
                        position: g._14.Fixed,
                        fullWidth: !0,
                        attachTop: !0,
                        attachLeft: !0,
                        display: g.Q.Flex,
                        justifyContent: g._6.Center,
                        alignItems: g.c.Center,
                        "data-test-selector": "clips-edit-top-nav-wrapper"
                    }, this.props.showMessage && r.createElement(g._7, {
                        display: g.Q.Flex,
                        justifyContent: g._6.Center,
                        alignItems: g.c.Center
                    }, r.createElement(g.P, {
                        color: g.J.Alt,
                        fontSize: g.U.Size5
                    }, Object(k.d)("Title this clip to publish", "ClipsEditTopNav")), r.createElement(g._7, {
                        margin: {
                            left: .5
                        },
                        display: g.Q.Flex,
                        alignItems: g.c.Center
                    }, r.createElement(g._20, {
                        asset: g._21.Lock,
                        type: g._22.Warn
                    }))))
                }, t
            }(r.Component)),
            T = Object(d.d)("ClipsEditTopNav", {
                autoReportInteractive: !0
            })(b),
            w = n("vwd7"),
            R = n("f8OD"),
            P = (n("D9gI"), function(e) {
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
                        return t.getRawMediaExists(e) && (n === _.created || n === _.failed)
                    }, t.getIsCreationFailed = function(e) {
                        return t.getRawMediaExists(e) && t.getRawMediaStatus(e) === _.failed
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
                    this.getIsClipResolved(e) && (this.props.data.stopPolling(), clearTimeout(this.timeoutID), this.props.latencyTracking.reportInteractive())
                }, t.prototype.componentWillUnmount = function() {
                    this.timeoutID && clearTimeout(this.timeoutID), this.props.data.stopPolling()
                }, t.prototype.componentDidUpdate = function() {
                    var e = this.getIsClipResolved(this.props) && !this.getIsCreationFailed(this.props);
                    if (!this.hasSentEditClip && e && this.state.isPlayerIframeLoaded && this.props.data.clip && this.props.data.clip.rawMedia) {
                        var t = this.props.data.clip.rawMedia,
                            n = t.defaultClipInitialOffset,
                            i = t.duration,
                            r = t.videoURL,
                            a = m(n, i - n);
                        this.props.playerConnection.sendMessage(Object(p.r)({
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
                    return e && e.rawMedia && this.getIsClipResolved(this.props) ? r.createElement(g._7, null, r.createElement(T, {
                        showMessage: !0
                    }), r.createElement(g._7, {
                        className: "clips-edit-clip-wrapper",
                        margin: {
                            top: 1
                        }
                    }, r.createElement(g.j, {
                        ratio: g.k.Aspect16x9
                    }, r.createElement(g._7, {
                        position: g._14.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, r.createElement(w.b, {
                        slug: this.props.slug,
                        onLoaded: this.onLoaded,
                        playerType: w.a.Editing
                    }))), r.createElement(C, {
                        isClipResolved: this.getIsClipResolved(this.props),
                        slug: this.props.slug,
                        broadcasterName: e.broadcaster && e.broadcaster.displayName || "",
                        rawMedia: e.rawMedia
                    }))) : r.createElement(T, {
                        showMessage: !1
                    })
                }, t
            }(r.Component)),
            L = Object(c.compose)(Object(p.t)({
                playerId: function(e) {
                    return e.slug
                }
            }), Object(u.a)(R, {
                options: function(e) {
                    return {
                        pollInterval: 1e3,
                        fetchPolicy: "network",
                        variables: {
                            slug: e.slug
                        }
                    }
                }
            }), Object(d.d)("EditClip"))(P),
            D = function(e) {
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
                    })) : this.props.location.state && this.props.location.state.slug ? (e = this.props.location.state.slug, r.createElement(g._7, null, r.createElement(L, {
                        slug: e
                    }))) : r.createElement(a.b, {
                        to: "/"
                    })
                }, t = i.__decorate([Object(d.d)("ClipsEditingPage", {
                    destination: o.a.ClipsEditing,
                    autoReportInteractive: !0
                }), Object(s.a)({
                    location: l.PageviewLocation.ClipsEditing
                })], t)
            }(r.Component);
        n.d(t, "ClipsCreate", function() {
            return D
        })
    },
    CBaN: function(e, t) {},
    D9gI: function(e, t) {},
    Jbgd: function(e, t) {},
    QIXk: function(e, t, n) {
        "use strict";
        var i, r, a, s = n("TToO"),
            o = n("GiK3"),
            l = n("6sO2"),
            d = n("7vx8"),
            c = n("6BvN"),
            u = n("oIkB"),
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
        var m, g = 5,
            v = 60,
            O = n("Odds"),
            y = n("isxN"),
            E = {
                publishState: a.Unsent,
                errorMessage: null
            },
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = E, t.onError = function(e) {
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
                    this.state.publishState === a.Error && e.title.length > 0 && this.props.title !== e.title && this.setState(E), e.isSubmitted && !this.props.isSubmitted && this.onPublish()
                }, t.prototype.render = function() {
                    var e = this.props.title.length < 1 || this.state.publishState === a.Error,
                        t = this.state.publishState === a.Sending;
                    return o.createElement(O._7, null, o.createElement(O.u, {
                        onClick: this.onPublish,
                        disabled: e,
                        state: t ? O.z.Loading : O.z.Default,
                        size: O.y.Large,
                        blurAfterClick: !0
                    }, Object(l.d)("Publish", "ClipsPublishButton")))
                }, t = s.__decorate([Object(d.a)(y, {
                    name: "publishClip"
                })], t)
            }(o.Component),
            S = Object(h.f)(_),
            C = n("2TZ0"),
            k = {
                TITLE_INPUT: "cmgr-title-input",
                TITLE_SAVE: "cmgr-title-save",
                TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
            };
        ! function(e) {
            e.emptySubmission = "emptySubmission", e.characterLimitReached = "characterLimitReached", e.channelViolation = "channelViolation", e.notCurator = "notCurator", e.unknown = "unknown"
        }(m || (m = {}));
        var b = 100,
            T = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderForClipsViewing = function() {
                        return o.createElement("div", null, o.createElement(O._41, {
                            id: k.TITLE_INPUT,
                            "data-test-selector": k.TITLE_INPUT,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        }), o.createElement(O._7, {
                            display: O.Q.Flex,
                            justifyContent: O._6.Between,
                            alignItems: O.c.Center,
                            padding: {
                                top: 1
                            }
                        }, n.state.showError ? o.createElement(O.P, {
                            color: O.J.Error
                        }, n.getErrorMessage()) : o.createElement(O.P, {
                            color: O.J.Alt2
                        }, n.getRemainingCharacterText()), o.createElement(O._7, {
                            display: O.Q.Flex
                        }, o.createElement(O.u, {
                            "data-test-selector": k.TITLE_SAVE,
                            onClick: n.props.onCancel,
                            type: O.A.Hollow
                        }, Object(l.d)("Cancel", "ClipsTitleEdit")), o.createElement(O._7, {
                            padding: {
                                left: 1
                            }
                        }, n.renderSave()))))
                    }, n.renderForManager = function() {
                        return o.createElement(O.V, {
                            id: k.TITLE_INPUT,
                            label: Object(l.d)("Title", "ClipsTitleEdit"),
                            hint: n.getRemainingCharacterText()
                        }, o.createElement(O._7, {
                            display: O.Q.Flex,
                            flexWrap: O.T.NoWrap
                        }, o.createElement(O._7, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, o.createElement(O._3, {
                            id: k.TITLE_INPUT,
                            "data-test-selector": k.TITLE_INPUT,
                            type: O._4.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        })), o.createElement(O._7, {
                            flexShrink: 0,
                            flexGrow: 0
                        }, o.createElement(O._7, {
                            position: O._14.Relative
                        }, n.renderSave(), o.createElement(O._5, {
                            onClick: n.dismissMessage,
                            "data-test-selector": k.TITLE_SAVE_TOOLTIP
                        }, o.createElement(O.p, {
                            direction: O.q.TopRight,
                            show: n.state.showError || n.state.showSuccess
                        }, o.createElement(O._7, {
                            padding: 1
                        }, n.state.showSuccess ? o.createElement(O.P, {
                            color: O.J.Link
                        }, Object(l.d)("Title Saved!", "ClipsTitleEdit")) : o.createElement(O.P, {
                            color: O.J.Error
                        }, n.getErrorMessage()))))))))
                    }, n.renderForEdit = function() {
                        var e;
                        if ((n.props.startOffset || 0 === n.props.startOffset) && n.props.endOffset) return e = n.state.showError ? o.createElement(O.P, {
                            color: O.J.Alt2
                        }, n.getErrorMessage()) : 0 === n.state.title.length && n.props.broadcasterName ? o.createElement(O.P, {
                            color: O.J.Alt2
                        }, Object(l.d)("Clips with titles get more views. Help {broadcasterName} get discovered by adding a title.", {
                            broadcasterName: n.props.broadcasterName
                        }, "ClipsTitleEdit")) : o.createElement(O.P, {
                            color: O.J.Alt2
                        }, n.getRemainingCharacterText()), o.createElement(O._7, null, o.createElement(O._7, {
                            fullWidth: !0
                        }, o.createElement(O._3, {
                            id: k.TITLE_INPUT,
                            "data-test-selector": k.TITLE_INPUT,
                            type: O._4.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown,
                            placeholder: Object(l.d)("Add a title (required)", "ClipsTitleEdit"),
                            autoFocus: !0
                        })), o.createElement(O._7, {
                            display: O.Q.Flex,
                            justifyContent: O._6.Between,
                            alignItems: O.c.Center,
                            padding: {
                                top: 1
                            }
                        }, e, o.createElement(O._7, {
                            display: O.Q.Flex
                        }, o.createElement(O._7, {
                            padding: {
                                left: 1
                            }
                        }, o.createElement(S, {
                            isSubmitted: n.state.showSuccess,
                            title: n.state.title,
                            slug: n.props.clipSlug,
                            startOffset: n.props.startOffset,
                            endOffset: n.props.endOffset,
                            onError: n.onPublishClipError
                        })))))
                    }, n.renderSave = function() {
                        return o.createElement(O.u, {
                            "data-test-selector": k.TITLE_SAVE,
                            disabled: !n.canSaveEditedTitle(),
                            onClick: n.editClipTitle
                        }, Object(l.d)("Save", "ClipsTitleEdit"))
                    }, n.onPublishClipError = function(e) {
                        n.errorMessageToError(e)
                    }, n.getRemainingCharacterText = function() {
                        return Object(l.d)("{characterCount, number} remaining", {
                            characterCount: b - n.state.title.length
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
                        var t = e.currentTarget.value.slice(0, b);
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
                                            error: m.emptySubmission
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
                            case c.a.Enter:
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
                        case m.channelViolation:
                            return Object(l.d)("Uh-oh. Check for inappropriate language and try again!", "ClipsTitleEdit");
                        case m.emptySubmission:
                            return Object(l.d)("Please add a title.", "ClipsTitleEdit");
                        default:
                            return Object(l.d)("Whoops. Something went wrong.", "ClipsTitleEdit")
                    }
                }, t.prototype.errorMessageToError = function(e) {
                    return e.includes("403:") || e.toLowerCase() === i.InvalidTitle.toLowerCase() || e.toLowerCase() === r.InvalidTitle.toLowerCase() ? m.channelViolation : m.unknown
                }, t
            }(o.Component),
            w = Object(d.a)(C, {
                name: "editTitle"
            })(T);
        n.d(t, !1, function() {
            return k
        }), n.d(t, !1, function() {
            return m
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
    "j7/Y": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("OAwv"),
            a = n("GiK3"),
            s = n("F8kA"),
            o = n("6sO2");

        function l(e) {
            return function(t) {
                var n = function(n) {
                    function s(t) {
                        var r = n.call(this, t) || this;
                        return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                            if (!(r.tracked || e.skip && e.skip(r.props))) {
                                r.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(r.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, r.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var a = r.referenceTracking,
                                    s = a.content,
                                    l = a.medium,
                                    d = a.content_index;
                                o.o.tracking.trackPageview(i.__assign({
                                    content: s,
                                    medium: l,
                                    content_index: d,
                                    location: e.location
                                }, t))
                            }
                        }, o.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : o.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
                    }
                    return i.__extends(s, n), s.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, s.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, s.prototype.render = function() {
                        return a.createElement(t, i.__assign({}, this.props))
                    }, s.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? r.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                a = r.stringify(t);
                            a.length > 0 && (i = "?" + a), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return n
                    }, s
                }(a.Component);
                return Object(s.f)(n)
            }
        }
        n.d(t, "a", function() {
            return l
        })
    },
    rqhk: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2");

        function s(e) {
            return function(t) {
                return function(n) {
                    function o(t) {
                        var r = n.call(this, t) || this;
                        return r.messageHandlers = [], r.handlePlayerAdded = function() {
                            r.getPlayer() && !r.isConnected && (r.isConnected = !0, u.off(d, r.handlePlayerAdded), u.on(c, r.handlePlayerRemoved), window.addEventListener("message", r.onIncomingPlayerMessage))
                        }, r.handlePlayerRemoved = function() {
                            !r.getPlayer() && r.isConnected && (r.isConnected = !1, u.off(c, r.handlePlayerRemoved), u.on(d, r.handlePlayerAdded), window.removeEventListener("message", r.onIncomingPlayerMessage))
                        }, r.sendMessage = function(e) {
                            var t = r.getPlayer();
                            t && t.postMessage(e, a.o.config.playerBaseURL)
                        }, r.onIncomingPlayerMessage = function(e) {
                            e.origin === a.o.config.playerBaseURL && e.data.namespace === P && r.messageHandlers.forEach(function(t) {
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
                        u.on(d, this.handlePlayerAdded)
                    }, o.prototype.componentWillUnmount = function() {
                        u.off(d, this.handlePlayerAdded), u.off(c, this.handlePlayerRemoved)
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
            c = "player-storage-removed",
            u = new o.EventEmitter;

        function p(e, t) {
            l[e] = t, u.emit(d)
        }

        function f(e) {
            delete l[e], u.emit(c)
        }

        function h(e) {
            return {
                args: [void 0 === e.arg ? {} : e.arg],
                method: e.method,
                namespace: void 0 === e.namespace ? R : e.namespace
            }
        }

        function m() {
            return h({
                method: "pause"
            })
        }

        function g() {
            return h({
                method: "play"
            })
        }

        function v(e) {
            return h({
                method: "closeModeration",
                arg: e
            })
        }

        function O() {
            return h({
                method: C
            })
        }

        function y(e) {
            return h({
                method: b,
                arg: e
            })
        }

        function E(e) {
            return h({
                method: k,
                arg: e
            })
        }

        function _() {
            return h({
                method: "fullscreen",
                arg: !1
            })
        }

        function S(e) {
            return h({
                method: "setEditClip",
                arg: e
            })
        }
        var C = "subscribe",
            k = "setclip",
            b = "setAutoplay",
            T = "bridgestateupdate",
            w = "bridgestorestateupdate",
            R = "player.embed.host",
            P = "player.embed.client";
        n.d(t, "t", function() {
            return s
        }), n.d(t, "p", function() {
            return l
        }), n.d(t, "n", function() {
            return d
        }), n.d(t, "o", function() {
            return c
        }), n.d(t, "i", function() {
            return u
        }), n.d(t, "s", function() {
            return p
        }), n.d(t, "q", function() {
            return f
        }), n.d(t, !1, function() {
            return h
        }), n.d(t, !1, function() {
            return m
        }), n.d(t, !1, function() {
            return g
        }), n.d(t, "h", function() {
            return v
        }), n.d(t, "m", function() {
            return O
        }), n.d(t, "k", function() {
            return y
        }), n.d(t, "l", function() {
            return E
        }), n.d(t, "j", function() {
            return _
        }), n.d(t, "r", function() {
            return S
        }), n.d(t, "g", function() {
            return C
        }), n.d(t, "f", function() {
            return k
        }), n.d(t, "e", function() {
            return b
        }), n.d(t, "c", function() {
            return T
        }), n.d(t, "d", function() {
            return w
        }), n.d(t, "b", function() {
            return R
        }), n.d(t, "a", function() {
            return P
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
            s = n("6sO2"),
            o = n("CSlQ"),
            l = n("rqhk"),
            d = n("icZh"),
            c = n("46tX"),
            u = n("Odds");
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
                Object(l.q)(this.props.slug)
            }, t.prototype.componentDidUpdate = function() {
                !this.hasSetPlayerRef && this.playerRef && (this.hasSetPlayerRef = !0, Object(l.s)(this.props.slug, this.playerRef.contentWindow), this.playerRef.contentWindow.postMessage(Object(l.m)(), s.o.config.playerBaseURL))
            }, t.prototype.render = function() {
                return this.state.initialSlug ? a.createElement(u._30, {
                    className: "clips-video-iframe",
                    position: u._14.Relative,
                    fullWidth: !0,
                    fullHeight: !0
                }, a.createElement(u._30, {
                    display: this.state.isLoaded ? u.Q.Hide : u.Q.Flex,
                    color: u.J.Overlay,
                    alignItems: u.c.Center,
                    justifyContent: u._6.Center,
                    position: u._14.Absolute,
                    fullHeight: !0,
                    fullWidth: !0
                }, a.createElement(u._9, {
                    size: u._28.Large,
                    inheritColor: !0
                })), a.createElement(u._1, {
                    display: this.state.isLoaded ? u.Q.Block : u.Q.HideAccessible,
                    position: u._14.Absolute,
                    fullHeight: !0,
                    fullWidth: !0
                }, a.createElement("iframe", {
                    src: s.o.config.playerBaseURL + "/?player=" + this.props.playerType + "&clip=" + this.state.initialSlug + "&origin=" + window.location.origin + "&branding=false&externalfullscreen=" + !Object(c.c)(navigator.userAgent),
                    frameBorder: "0",
                    scrolling: "no",
                    allowFullScreen: !0,
                    ref: this.setPlayerRef,
                    onLoad: this.setIsLoaded
                }))) : null
            }, t.prototype.setClip = function(e) {
                this.playerRef && (this.playerRef.contentWindow.postMessage(Object(l.l)(e), s.o.config.playerBaseURL), Object(d.b)(e))
            }, t = r.__decorate([Object(o.d)("ClipsVideoIframe", {
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
//# sourceMappingURL=sites.clips.pages.create-747e71e1dd11bfab9a0470a513e5109a.js.map