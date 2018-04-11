webpackJsonp([55], {
    "+Znq": function(e, t, n) {
        "use strict";
        var i = n("jetF");
        n.d(t, "a", function() {
            return i.a
        })
    },
    "0B06": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            if (!e) return a();
            try {
                var t = new Date(e.replace(/(Z)/i, "")),
                    n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
                return Object(i.g)(n)
            } catch (e) {
                return a()
            }
        };
        var i = n("6sO2");

        function a() {
            return Object(i.d)("N/A", "ClipsRelativeTimeHelper")
        }
    },
    "0CQq": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsViewCount"
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
                                    value: "viewCount"
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
                end: 71
            }
        };
        n.loc.source = {
            body: "query ClipsViewCount($slug: ID!) {\nclip(slug: $slug) {\nid\nviewCount\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "0Kuu": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsTitle"
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
                end: 63
            }
        };
        n.loc.source = {
            body: "query ClipsTitle($slug: ID!) {\nclip(slug: $slug) {\nid\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "0QL4": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsCurator"
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
                                            value: "displayName"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 110
            }
        };
        n.loc.source = {
            body: "query ClipsCurator($slug: ID!) {\nclip(slug: $slug) {\nid\ncurator {\nid\ndisplayName\nlogin\n}\nchampBadge {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "0Ssf": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2"),
            r = n("7vx8"),
            s = n("vH/s"),
            l = n("CSlQ"),
            d = n("XOun"),
            c = n("kJau"),
            p = n("Odds"),
            u = n("0QL4"),
            f = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.clip;
                    if (!e || !e.curator) return a.createElement(p._7, null, this.renderPlaceholders());
                    var t = Object(c.b)(e.curator.login, {
                        tt_medium: "clips_web",
                        tt_content: "curator_name"
                    });
                    return a.createElement(p._7, {
                        ellipsis: this.props.ellipsis
                    }, e.champBadge && e.champBadge.id && a.createElement(p._7, {
                        margin: {
                            right: .5
                        },
                        display: p.Q.InlineBlock
                    }, a.createElement(d.a, {
                        pageType: s.PageviewLocation.ClipsViewing
                    })), a.createElement(p._1, {
                        display: p.Q.Inline
                    }, a.createElement(p.P, {
                        fontSize: this.props.fontSize ? this.props.fontSize : p.U.Size5
                    }, Object(o.d)("Clipped by {curatorName}", {
                        curatorName: a.createElement("a", {
                            href: t,
                            target: "_blank"
                        }, e.curator.displayName)
                    }, "ClipsCurator"))))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.data.clip.curator && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return a.createElement(p.e, {
                        type: p.i.FadeIn,
                        duration: p.g.Long,
                        delay: p.f.Medium,
                        enabled: !0
                    }, a.createElement(p.P, {
                        fontSize: this.props.fontSize ? this.props.fontSize : p.U.Size5
                    }, a.createElement(p._13, {
                        lineCount: 1,
                        width: 80
                    })))
                }, t = i.__decorate([Object(l.d)("ClipsCurator"), Object(r.a)(u)], t)
            }(a.Component);
        n.d(t, "a", function() {
            return f
        })
    },
    "2BvQ": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Core_Services_Spade_Video"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "id"
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
                            value: "video"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "id"
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
                                    value: "broadcastType"
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
                end: 81
            }
        };
        n.loc.source = {
            body: "query Core_Services_Spade_Video($id: ID!) {\nvideo(id: $id) {\nid\nbroadcastType\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
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
        var i, a, o = n("TToO"),
            r = n("GiK3"),
            s = n("Odds");
        n("CBaN");
        ! function(e) {
            e[e.Right = 0] = "Right", e[e.Left = 1] = "Left"
        }(i || (i = {})),
        function(e) {
            e[e.HandleLabel = 0] = "HandleLabel", e[e.Handle = 1] = "Handle"
        }(a || (a = {}));
        var l, d, c = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return o.__extends(t, e), t.prototype.render = function() {
                var e = null;
                return this.props.label && (e = r.createElement(s._7, {
                    "data-test-selector": a.HandleLabel,
                    className: "draggable-slider-handle__label",
                    position: s._14.Absolute,
                    attachRight: this.props.label.attach === i.Right,
                    attachLeft: this.props.label.attach === i.Left
                }, this.props.label.content)), r.createElement(s._7, {
                    display: s.Q.Flex,
                    flexDirection: s.S.Column,
                    position: s._14.Relative
                }, r.createElement(s._1, {
                    flexGrow: 0,
                    flexShrink: 0,
                    className: "draggable-slider-handle",
                    display: s.Q.Flex,
                    fullHeight: !0
                }, r.createElement("div", {
                    "data-test-selector": a.Handle,
                    onMouseDown: this.props.onMouseDown,
                    ref: this.props.onRef
                }, r.createElement(s._20, {
                    asset: s._21.DragHandle
                }))), e)
            }, t
        }(r.Component);
        n("cJZy");
        ! function(e) {
            e.LeftHandle = "left-handle", e.RightHandle = "right-handle"
        }(l || (l = {})),
        function(e) {
            e.Left = "left", e.Right = "right"
        }(d || (d = {}));
        var p, u = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.leftHandleRef = null, n.rightHandleRef = null, n.getHandleHandlers = function(e) {
                    switch (e) {
                        case d.Left:
                            return {
                                handleRef: n.leftHandleRef,
                                mouseMoveHandler: n.onLeftMouseMove,
                                mouseUpHandler: n.onLeftMouseUp
                            };
                        case d.Right:
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
                        a = t.mouseMoveHandler,
                        o = t.mouseUpHandler;
                    i && (i.ownerDocument.addEventListener("mousemove", a), i.ownerDocument.addEventListener("mouseup", o))
                }, n.removeHandleListeners = function(e) {
                    var t = n.getHandleHandlers(e),
                        i = t.handleRef,
                        a = t.mouseMoveHandler,
                        o = t.mouseUpHandler;
                    i && (i.ownerDocument.removeEventListener("mousemove", a), i.ownerDocument.removeEventListener("mouseup", o))
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
                        }), n.addHandleListeners(d.Left)
                    })
                }, n.onLeftMouseUp = function() {
                    n.setState({
                        startDragX: null,
                        startDragValue: null
                    }, function() {
                        n.props.onLeftDragEnd && n.props.onLeftDragEnd({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        }), n.removeHandleListeners(d.Left)
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
                        }), n.addHandleListeners(d.Right)
                    })
                }, n.onRightMouseUp = function() {
                    n.setState({
                        startDragX: null,
                        startDragValue: null
                    }, function() {
                        n.props.onRightDragEnd && n.props.onRightDragEnd({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        }), n.removeHandleListeners(d.Right)
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
                        a = n.state.startDragValue + i;
                    return a < t.startBoundary ? t.startBoundary : a > t.endBoundary ? t.endBoundary : a
                }, n.convertPixelsToOffsetUnits = function(e) {
                    return n.props.parentContainerRef ? 0 === n.props.parentContainerRef.clientWidth ? 0 : e * ((n.props.maxOffset - n.props.minOffset) / n.props.parentContainerRef.clientWidth) : 0
                }, n.state = {
                    startOffset: t.startOffset,
                    endOffset: t.endOffset,
                    startDragX: null,
                    startDragValue: null
                }, n
            }
            return o.__extends(t, e), t.prototype.render = function() {
                return r.createElement(s._7, {
                    position: s._14.Relative,
                    display: s.Q.Flex,
                    justifyContent: s._6.Center
                }, r.createElement(s._7, {
                    className: "draggable-slider__popover",
                    position: s._14.Absolute
                }, this.props.popover), r.createElement(s._30, {
                    background: s.m.AccentAlt2,
                    fullWidth: !0,
                    display: s.Q.Flex,
                    justifyContent: s._6.Between
                }, r.createElement(c, {
                    "data-test-selector": l.LeftHandle,
                    onRef: this.leftHandleRefHandler,
                    onMouseDown: this.onLeftMouseDown,
                    label: this.props.handleLabels && this.props.handleLabels.length > 0 ? {
                        attach: i.Left,
                        content: this.props.handleLabels[0]
                    } : null
                }), r.createElement(s._7, {
                    display: s.Q.InlineBlock,
                    fullWidth: !0
                }, this.props.children), r.createElement(c, {
                    "data-test-selector": l.RightHandle,
                    onRef: this.rightHandleRefHandler,
                    onMouseDown: this.onRightMouseDown,
                    label: this.props.handleLabels && this.props.handleLabels.length > 0 ? {
                        attach: i.Right,
                        content: this.props.handleLabels[1]
                    } : null
                })))
            }, t
        }(r.Component);
        ! function(e) {
            e[e.SelectedSection = 0] = "SelectedSection"
        }(p || (p = {}));
        var f = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    startOffset: t.props.startOffset,
                    endOffset: t.props.endOffset
                }, t.handleParentContainerRef = function(e) {
                    t.parentContainerRef = e
                }, t
            }
            return o.__extends(t, e), t.prototype.render = function() {
                var e = {
                    width: this.calculateWidthPercentage() + "%",
                    marginLeft: this.calculateOffsetPercentage() + "%"
                };
                return r.createElement("div", {
                    ref: this.handleParentContainerRef
                }, r.createElement(s._1, {
                    flexGrow: 0,
                    flexShrink: 0
                }, r.createElement("div", {
                    "data-test-selector": p.SelectedSection,
                    style: e
                }, r.createElement(u, {
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
                    popover: this.props.popover,
                    handleLabels: this.props.handleLabels
                }, this.props.children))))
            }, t.prototype.calculateOffsetPercentage = function() {
                return this.props.startOffset / this.getTotalLength() * 100
            }, t.prototype.calculateWidthPercentage = function() {
                return (this.props.endOffset - this.props.startOffset) / this.getTotalLength() * 100
            }, t.prototype.getTotalLength = function() {
                return this.props.maxOffset - this.props.minOffset
            }, t
        }(r.Component);
        n.d(t, !1, function() {
            return p
        }), n.d(t, "a", function() {
            return f
        })
    },
    "3ydF": function(e, t) {},
    "4bQk": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2"),
            r = n("+Znq"),
            s = n("7vx8"),
            l = n("oIkB"),
            d = n("2BvQ"),
            c = n("xrVp"),
            p = n("YugT"),
            u = {
                Channel: "channel"
            };
        var f = n("vH/s"),
            m = n("CSlQ"),
            h = n("Odds"),
            g = n("VNvG"),
            v = (n("3ydF"), n("SUA7")),
            k = n("x4k6");
        n.d(t, "b", function() {
            return y
        }), n.d(t, "a", function() {
            return b
        });
        var y;
        ! function(e) {
            e[e.IconOnly = 0] = "IconOnly", e[e.TextOnly = 1] = "TextOnly", e[e.IconAndText = 2] = "IconAndText"
        }(y || (y = {}));
        var b = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    isFollowing: !1,
                    showDropdown: !1,
                    disableNotifications: !0
                }, t.userDataLoaded = function() {
                    return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.user
                }, t.toggleFollowing = function() {
                    var e;
                    t.state.isFollowing ? (t.unfollowUser(), e = f.SpadeEventType.Unfollow) : (t.followUser(), e = f.SpadeEventType.Follow);
                    var n = t.getFollowData();
                    n && function(e, t) {
                        i.__awaiter(this, void 0, void 0, function() {
                            var n, a, r, s, l, u, f, m, h, g;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (n = null, a = null, r = null, s = null, l = null, !t.channelID) return [3, 5];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, o.o.apollo.client.query({
                                            query: p,
                                            variables: {
                                                id: t.channelID
                                            }
                                        })];
                                    case 2:
                                        return s = i.sent(), [3, 4];
                                    case 3:
                                        return f = i.sent(), o.j.error(f, "Failed to make query for channel info in FollowEvent reporting.", {
                                            channelID: t.channelID
                                        }), [3, 4];
                                    case 4:
                                        (r = s && s.data && s.data.user) ? l = r.hosting.stream && r.hosting.stream.game ? r.hosting.stream.game.name : r.stream && r.stream.game && r.stream.game.name: o.j.error(new Error("GraphQL empty response"), "Query for channel info in FollowEvent reporting return no data.", {
                                            channelID: t.channelID
                                        }), i.label = 5;
                                    case 5:
                                        if (!(m = o.n.getVideoPlayerTrackingData().vodID)) return [3, 10];
                                        i.label = 6;
                                    case 6:
                                        return i.trys.push([6, 8, , 9]), [4, o.o.apollo.client.query({
                                            query: d,
                                            variables: {
                                                id: m
                                            }
                                        })];
                                    case 7:
                                        return n = i.sent(), [3, 9];
                                    case 8:
                                        return h = i.sent(), o.j.error(h, "Failed to make query for VOd info in FollowEvent reporting.", {
                                            currentVODID: m
                                        }), [3, 9];
                                    case 9:
                                        (a = n && n.data && n.data.video) ? u = Object(c.a)(a.broadcastType): (u = null, o.j.error(new Error("GraphQL empty response"), "Query for video info in FollowEvent reporting return no data.", {
                                            currentVODID: m
                                        })), i.label = 10;
                                    case 10:
                                        return g = {
                                            channel: t.channelLogin,
                                            channel_id: t.channelID,
                                            channel_game: l,
                                            cta_visible: o.n.getVideoPlayerTrackingData().followCTAVisible,
                                            host_channel: t.hostChannelLogin,
                                            host_channel_id: t.hostChannelID,
                                            game: t.game,
                                            partner: r ? r.isPartner : null,
                                            src: t.src,
                                            vod_id: m,
                                            vod_type: u
                                        }, o.n.track(e, g), [2]
                                }
                            })
                        })
                    }(e, {
                        channelLogin: n.user && n.user.login || "",
                        channelID: n.user && n.user.id || "",
                        hostChannelLogin: t.props.hostChannelLogin,
                        hostChannelID: t.props.hostChannelID,
                        src: u.Channel
                    }), t.setState(function(e) {
                        return {
                            isFollowing: !e.isFollowing,
                            disableNotifications: !1
                        }
                    })
                }, t.followUser = function() {
                    var e = t.getFollowData();
                    if (t.props.followUser && e) {
                        t.setState({
                            showDropdown: !0
                        });
                        var n = i.__assign({}, Object(l.a)({
                            disableNotifications: !1,
                            targetID: e.user && e.user.id || ""
                        }), {
                            optimisticResponse: {
                                followUser: {
                                    __typename: "FollowUserPayload",
                                    follow: {
                                        disableNotifications: !1,
                                        __typename: "Follow"
                                    }
                                }
                            }
                        });
                        t.props.followUser(n).then(function(e) {
                            Object(l.d)(k, {
                                login: t.props.channelLogin
                            }, function(t) {
                                var n = t.user;
                                return n && n.self && (n.self.follower ? n.self.follower.disableNotifications = e.data.followUser.follow.disableNotifications : n.self.follower = {
                                    disableNotifications: e.data.followUser.follow.disableNotifications
                                }), t
                            }), t.props.onFollow && t.props.onFollow(t.props.channelLogin)
                        })
                    }
                }, t.unfollowUser = function() {
                    var e = t.getFollowData();
                    if (t.props.unfollowUser && e) {
                        var n = i.__assign({}, Object(l.a)({
                            targetID: e.user && e.user.id || ""
                        }), {
                            optimisticResponse: {
                                unfollowUser: {
                                    __typename: "UnfollowUserPayload",
                                    follow: {
                                        disableNotifications: null,
                                        __typename: "Follow"
                                    }
                                }
                            }
                        });
                        t.props.unfollowUser(n).then(function() {
                            Object(l.d)(k, {
                                login: t.props.channelLogin
                            }, function(e) {
                                var t = e.user;
                                return t && t.self && (t.self.follower ? t.self.follower.disableNotifications = null : t.self.follower = {
                                    disableNotifications: null
                                }), e
                            }), t.props.onUnfollow && t.props.onUnfollow(t.props.channelLogin)
                        })
                    }
                }, t.toggleNotificationsEnabled = function() {
                    var e = t.getFollowData();
                    if (t.props.followUser && e) {
                        var n = i.__assign({}, Object(l.a)({
                            disableNotifications: !t.state.disableNotifications,
                            targetID: e.user && e.user.id || ""
                        }), {
                            optimisticResponse: {
                                followUser: {
                                    __typename: "FollowUserPayload",
                                    follow: {
                                        disableNotifications: !t.state.disableNotifications,
                                        __typename: "Follow"
                                    }
                                }
                            }
                        });
                        t.props.followUser(n).then(function(e) {
                            Object(l.d)(k, {
                                login: t.props.channelLogin
                            }, function(t) {
                                var n = t.user;
                                return n && n.self && (n.self.follower ? n.self.follower.disableNotifications = e.data.followUser.follow.disableNotifications : n.self.follower = {
                                    disableNotifications: e.data.followUser.follow.disableNotifications
                                }), t
                            })
                        }), t.setState(function(e) {
                            return {
                                disableNotifications: !e.disableNotifications
                            }
                        })
                    }
                }, t.getFollowData = function() {
                    return t.props.followData ? t.props.followData : t.props.data
                }, t
            }
            return i.__extends(t, e), t.prototype.componentDidMount = function() {
                this.reportInteractive()
            }, t.prototype.componentDidUpdate = function() {
                this.props.channelLogin && !this.userDataLoaded() || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.reportInteractive()
            }, t.prototype.componentWillMount = function() {
                var e = this.props.followData;
                if (e) {
                    var t = e.user;
                    this.setState({
                        isFollowing: t && t.self && t.self.follower && null !== t.self.follower.disableNotifications || !1,
                        disableNotifications: t && t.self && t.self.follower && t.self.follower.disableNotifications
                    })
                }
            }, t.prototype.componentWillReceiveProps = function(e) {
                if (e.data && !e.data.loading && !e.data.error) {
                    var t = e.data.user;
                    this.setState({
                        isFollowing: t && t.self && t.self.follower && null !== t.self.follower.disableNotifications || !1,
                        disableNotifications: !(t && t.self && t.self.follower && null !== t.self.follower.disableNotifications) || t.self.follower.disableNotifications
                    })
                }
            }, t.prototype.render = function() {
                return this.props.isLoggedIn ? !this.props.showLoadingPlaceholder || this.props.data && !this.props.data.loading ? this.props.followUser && this.props.unfollowUser && (this.props.followData || this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.user && this.props.data.user.id !== this.props.data.currentUser.id) ? this.state.isFollowing ? this.props.hideWhenFollowing ? null : this.props.hideDropdownWhenFollowing ? this.renderUnfollowButton() : this.renderUnfollowButtonWithDropdown() : this.renderFollowButton(this.toggleFollowing) : null : this.renderPlaceholder() : this.renderFollowButton(this.props.login)
            }, t.prototype.renderPlaceholder = function() {
                switch (this.props.size) {
                    case h.y.Large:
                        return a.createElement(h._13, {
                            width: 93,
                            height: 36
                        });
                    case h.y.Small:
                        return a.createElement(h._13, {
                            width: 66,
                            height: 24
                        });
                    default:
                        return a.createElement(h._13, {
                            width: 70,
                            height: 30
                        })
                }
            }, t.prototype.renderFollowButton = function(e) {
                var t = this.props.isHostedFollow && this.props.channelName ? Object(o.d)("Follow {username}", {
                    username: this.props.channelName
                }, "FollowButton") : Object(o.d)("Follow", "FollowButton");
                return a.createElement(h.u, i.__assign({
                    ariaLabel: t,
                    blurAfterClick: this.props.blurAfterClick,
                    "data-a-target": "follow-button",
                    "data-test-selector": "follow-button",
                    icon: this.props.followUIType === y.TextOnly ? void 0 : h._21.Heart,
                    onClick: e,
                    size: this.props.size,
                    tabIndex: this.props.tabIndex
                }, Object(h._57)(this.props)), this.props.followUIType === y.IconOnly ? null : t)
            }, t.prototype.renderUnfollowButton = function() {
                var e = Object(o.d)("Unfollow", "FollowButton");
                return a.createElement(h.u, i.__assign({
                    ariaLabel: e,
                    blurAfterClick: this.props.blurAfterClick,
                    "data-a-target": "unfollow-button",
                    "data-test-selector": "unfollow-button",
                    icon: this.props.unfollowUIType === y.TextOnly ? void 0 : h._21.Heart,
                    statusAlertIcon: this.props.unfollowUIType === y.TextOnly ? void 0 : h._21.Unheart,
                    statusAlertText: this.props.unfollowUIType === y.IconOnly ? "" : e,
                    tabIndex: this.props.tabIndex,
                    size: this.props.size,
                    onClick: this.toggleFollowing
                }, Object(h._57)(this.props)), this.props.unfollowUIType === y.IconOnly ? null : Object(o.d)("Followed", "FollowButton"))
            }, t.prototype.renderUnfollowButtonWithDropdown = function() {
                var e = this.props.balloonDirection ? this.props.balloonDirection : h.q.BottomRight,
                    t = this.getFollowData(),
                    n = t && t.user ? t.user.displayName : "",
                    i = this.state.disableNotifications ? Object(o.d)("Opt in to notifications to receive updates on this channel's activity, including when they go live.", "FollowButton") : Object(o.d)("You will be notified on this channel's activity, including when they go live.", "FollowButton");
                return a.createElement(h._7, {
                    display: h.Q.Flex,
                    className: "follow-btn",
                    "data-test-selector": "unfollow-button__dropdown"
                }, a.createElement(h._7, null, this.renderUnfollowButton()), a.createElement(r.a, {
                    display: h.Q.InlineFlex,
                    openByDefault: this.state.showDropdown
                }, a.createElement("button", {
                    tabIndex: this.props.tabIndex,
                    "aria-label": Object(o.d)("Dropdown", "FollowButton"),
                    className: "follow-btn__dropdown-toggle",
                    "data-a-target": "follow-dropdown-toggle"
                }, a.createElement(h._7, {
                    justifyContent: h._6.Center,
                    display: h.Q.Flex,
                    alignItems: h.c.Stretch,
                    fullHeight: !0
                }, a.createElement(h._20, {
                    asset: h._21.GlyphArrDown
                }))), a.createElement(h.p, {
                    size: h.r.Small,
                    direction: e,
                    "data-a-target": "follow-notifications-balloon"
                }, a.createElement(h._30, {
                    color: h.J.Base,
                    display: h.Q.Flex,
                    flexWrap: h.T.Wrap,
                    padding: 1
                }, a.createElement(h._7, {
                    display: h.Q.Flex,
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(h.P, {
                    type: h._44.H6
                }, Object(o.d)("You are following {followingName}", {
                    followingName: n
                }, "FollowButton"))), a.createElement(h._7, {
                    display: h.Q.Flex,
                    flexWrap: h.T.NoWrap,
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(h._7, {
                    display: h.Q.Flex,
                    padding: {
                        right: 2
                    }
                }, a.createElement("span", null, a.createElement(h.P, {
                    type: h._44.H6
                }, Object(o.d)("Notifications", "FollowButton")))), a.createElement(h._7, {
                    display: h.Q.Flex,
                    flexShrink: 0
                }, a.createElement(h._46, {
                    onChange: this.toggleNotificationsEnabled,
                    checked: !this.state.disableNotifications,
                    "data-a-target": "notifications-toggle"
                }))), a.createElement(h._7, {
                    display: h.Q.InlineFlex,
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(h.P, {
                    type: h._44.Span,
                    color: h.J.Alt2
                }, i))))))
            }, t.prototype.reportInteractive = function() {
                this.props.isLoggedIn ? (!this.props.channelLogin || this.userDataLoaded() || this.props.followData) && this.props.latencyTracking.reportInteractive() : this.props.latencyTracking.reportInteractive()
            }, t = i.__decorate([Object(s.a)(k, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelLogin
                        }
                    }
                },
                skip: function(e) {
                    return !e.isLoggedIn || !e.channelLogin || !!e.followData
                }
            }), Object(s.a)(g, {
                name: "followUser"
            }), Object(s.a)(v, {
                name: "unfollowUser"
            }), Object(m.d)("FollowButton")], t)
        }(a.Component)
    },
    "7WFF": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("TToO"),
            a = n("GiK3"),
            o = n("CIox"),
            r = n("j7/Y"),
            s = n("w9tK"),
            l = n("vH/s"),
            d = n("CSlQ"),
            c = n("HW6M"),
            p = n("3zLD"),
            u = n("7vx8"),
            f = n("rqhk"),
            m = n("3HXW"),
            h = n("QIXk");

        function g(e, t) {
            return {
                startOffset: e,
                endOffset: t
            }
        }
        var v = n("Odds"),
            k = 5,
            y = 60,
            b = 1;

        function w(e) {
            return parseFloat(e.toFixed(b))
        }
        var _, S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        startOffset: -1,
                        endOffset: -1
                    }, t.onDrag = function(e) {
                        var n = e.endOffset - e.startOffset;
                        n > y || n < k || (t.setState({
                            startOffset: w(e.startOffset),
                            endOffset: w(e.endOffset)
                        }), t.props.playerConnection.sendMessage(Object(f.r)({
                            startOffset: t.state.startOffset,
                            endOffset: t.state.endOffset
                        })))
                    }, t.renderDurationPopover = function() {
                        return a.createElement(v._30, {
                            background: v.m.Overlay,
                            padding: {
                                y: 2,
                                x: 1
                            },
                            fullWidth: !0,
                            textAlign: v._40.Center,
                            overflow: v._10.Hidden
                        }, a.createElement(v.P, {
                            align: v._54.Middle,
                            ellipsis: !0
                        }, t.state.startOffset + " - " + t.state.endOffset))
                    }, t.isReady = function() {
                        return t.props.isClipResolved && t.isValidOffset(t.state.startOffset) && t.isValidOffset(t.state.endOffset)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = this.isValidOffset(this.state.startOffset),
                        n = this.isValidOffset(this.state.endOffset);
                    if ((!t || !n) && e.initialOffsetStart && e.duration) {
                        var i = {},
                            a = g(e.initialOffsetStart, e.duration);
                        !t && this.isValidOffset(a.startOffset) && (i.startOffset = a.startOffset), !n && this.isValidOffset(a.endOffset) && (i.endOffset = a.endOffset), this.setState(i)
                    }
                }, t.prototype.componentDidUpdate = function() {
                    this.isReady() && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.isReady() && this.props.duration ? a.createElement(v._7, null, a.createElement(v._30, {
                        padding: {
                            y: 4
                        }
                    }, a.createElement(m.a, {
                        startOffset: this.state.startOffset,
                        endOffset: this.state.endOffset,
                        minOffset: 0,
                        maxOffset: this.props.duration,
                        onLeftDrag: this.onDrag,
                        onRightDrag: this.onDrag,
                        popover: this.renderDurationPopover()
                    }, a.createElement(v._30, {
                        background: v.m.Overlay,
                        padding: {
                            y: 2,
                            x: 1
                        },
                        fullWidth: !0,
                        textAlign: v._40.Center,
                        overflow: v._10.Hidden
                    }, a.createElement(v.P, {
                        align: v._54.Middle,
                        ellipsis: !0
                    }, this.state.startOffset + " - " + this.state.endOffset)))), a.createElement(h.a, {
                        clipSlug: this.props.slug,
                        location: l.PageviewLocation.ClipsEditing,
                        broadcasterName: this.props.broadcasterName,
                        startOffset: this.state.startOffset,
                        endOffset: this.state.endOffset
                    })) : this.renderPlaceholder()
                }, t.prototype.renderPlaceholder = function() {
                    return a.createElement(v._7, null, a.createElement(v._30, {
                        fullWidth: !0,
                        background: v.m.Alt2,
                        margin: {
                            y: 4
                        },
                        padding: {
                            y: 2
                        },
                        textAlign: v._40.Center
                    }, "Would you give it a second?"))
                }, t.prototype.isValidOffset = function(e) {
                    return !isNaN(e) && e >= 0
                }, t
            }(a.Component),
            E = Object(p.compose)(Object(f.t)({
                playerId: function(e) {
                    return e.slug
                }
            }), Object(d.d)("ClipsEditor"))(S);
        ! function(e) {
            e.creating = "CREATING", e.created = "CREATED", e.failed = "FAILED"
        }(_ || (_ = {}));
        var O = n("6sO2"),
            N = (n("Jbgd"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(v._30, {
                        background: v.m.Base,
                        className: "clips-edit-top-nav",
                        position: v._14.Fixed,
                        fullWidth: !0,
                        attachTop: !0,
                        attachLeft: !0,
                        display: v.Q.Flex,
                        justifyContent: v._6.Center,
                        alignItems: v.c.Center,
                        "data-test-selector": "clips-edit-top-nav-wrapper"
                    }, this.props.showMessage && a.createElement(v._7, {
                        display: v.Q.Flex,
                        justifyContent: v._6.Center,
                        alignItems: v.c.Center
                    }, a.createElement(v.P, {
                        color: v.J.Alt,
                        fontSize: v.U.Size5
                    }, Object(O.d)("Title this clip to publish", "ClipsEditTopNav")), a.createElement(v._7, {
                        margin: {
                            left: .5
                        },
                        display: v.Q.Flex,
                        alignItems: v.c.Center
                    }, a.createElement(v._20, {
                        asset: v._21.Lock,
                        type: v._22.Warn
                    }))))
                }, t
            }(a.Component)),
            C = Object(d.d)("ClipsEditTopNav", {
                autoReportInteractive: !0
            })(N),
            T = n("0B06"),
            D = n("ynxC"),
            F = n("0Ssf"),
            I = n("nU46"),
            L = n("dPTw"),
            P = (n("DkK3"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.slug,
                        t = a.createElement(v._7, {
                            alignItems: v.c.Center,
                            display: v.Q.Flex,
                            flexDirection: v.S.Row,
                            justifyContent: v._6.Start,
                            margin: {
                                y: 1
                            },
                            ellipsis: !0
                        }, a.createElement(v._30, {
                            display: v.Q.Flex,
                            fontSize: v.U.Size5
                        }, a.createElement(v.P, {
                            type: v._44.Span
                        }, Object(T.a)(this.props.createdAt)), a.createElement(v._7, {
                            margin: {
                                x: .5
                            }
                        }, "•")), a.createElement(F.a, {
                            slug: e,
                            ellipsis: !0
                        }));
                    return a.createElement(v._30, {
                        className: "clips-post-edit-sidebar",
                        display: v.Q.Flex,
                        flexDirection: v.S.Column,
                        background: v.m.Base
                    }, a.createElement(v._30, {
                        borderBottom: !0
                    }, a.createElement(D.a, {
                        slug: e
                    })), a.createElement(v._7, {
                        fullHeight: !0,
                        display: v.Q.Flex,
                        alignItems: v.c.Center
                    }, a.createElement(v._7, {
                        className: "clips-sidebar-info",
                        display: v.Q.Flex,
                        flexDirection: v.S.Column,
                        justifyContent: v._6.Around,
                        padding: 1
                    }, a.createElement(L.a, {
                        slug: e
                    }), a.createElement(I.a, {
                        slug: e
                    }), t)))
                }, t
            }(a.Component)),
            x = n("vwd7"),
            U = n("f8OD"),
            R = (n("D9gI"), function(e) {
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
                    if (!this.props.isPostEdit && !this.hasSentEditClip && e && this.state.isPlayerIframeLoaded && this.props.data.clip && this.props.data.clip.rawMedia) {
                        var t = this.props.data.clip.rawMedia,
                            n = t.defaultClipInitialOffset,
                            i = t.duration,
                            a = t.videoURL,
                            o = g(n, i);
                        this.props.playerConnection.sendMessage(Object(f.r)({
                            startOffset: o.startOffset,
                            endOffset: o.endOffset,
                            videoUrl: a,
                            slug: this.props.slug
                        })), this.hasSentEditClip = !0
                    }
                }, t.prototype.render = function() {
                    if (this.state.isPollingTimedOut || this.getIsCreationFailed(this.props)) return a.createElement(o.b, {
                        to: "/500"
                    });
                    var e = this.props.data.clip,
                        t = e && e.rawMedia,
                        n = this.getIsClipResolved(this.props),
                        i = null;
                    i = this.props.isPostEdit ? a.createElement("div", null, "Loader / Share component") : a.createElement(E, {
                        isClipResolved: n,
                        slug: this.props.slug,
                        broadcasterName: e && e.broadcaster && e.broadcaster.displayName || "",
                        initialOffsetStart: t && t.defaultClipInitialOffset,
                        duration: t && t.duration
                    });
                    var r = c("clips-edit-clip-wrapper", {
                        "clips-post-edit-clip-wrapper": this.props.isPostEdit
                    });
                    return a.createElement(v._7, null, !this.props.isPostEdit && a.createElement(C, {
                        showMessage: n
                    }), a.createElement(v._7, {
                        className: r,
                        margin: {
                            top: 1
                        }
                    }, a.createElement(v._7, {
                        display: v.Q.Flex
                    }, a.createElement(v.j, {
                        ratio: v.k.Aspect16x9
                    }, a.createElement(v._7, {
                        position: v._14.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, a.createElement(x.b, {
                        slug: this.props.slug,
                        onLoaded: this.onLoaded,
                        playerType: x.a.Editing
                    }))), this.props.isPostEdit && a.createElement(P, {
                        slug: this.props.slug,
                        createdAt: e && e.createdAt
                    })), i))
                }, t
            }(a.Component)),
            j = Object(p.compose)(Object(f.t)({
                playerId: function(e) {
                    return e.slug
                }
            }), Object(u.a)(U, {
                options: function(e) {
                    return {
                        pollInterval: 1e3,
                        fetchPolicy: "network",
                        variables: {
                            slug: e.slug
                        }
                    }
                }
            }), Object(d.d)("EditClip"))(R),
            B = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return "/:slug/edit" === this.props.match.path ? (e = this.props.match.params.slug, a.createElement(o.b, {
                        to: {
                            pathname: "/create",
                            state: i.__assign({}, this.props.location.state, {
                                slug: e
                            })
                        }
                    })) : this.props.location.state && this.props.location.state.slug ? (e = this.props.location.state.slug, a.createElement(v._7, null, a.createElement(j, {
                        slug: e,
                        isPostEdit: !!this.props.location.state.isPostEdit
                    }))) : a.createElement(o.b, {
                        to: "/"
                    })
                }, t = i.__decorate([Object(d.d)("ClipsEditingPage", {
                    destination: s.a.ClipsEditing,
                    autoReportInteractive: !0
                }), Object(r.a)({
                    location: l.PageviewLocation.ClipsEditing
                })], t)
            }(a.Component);
        n.d(t, "ClipsCreate", function() {
            return B
        })
    },
    CBaN: function(e, t) {},
    D9gI: function(e, t) {},
    DkK3: function(e, t) {},
    Jbgd: function(e, t) {},
    QIXk: function(e, t, n) {
        "use strict";
        var i, a, o, r = n("TToO"),
            s = n("GiK3"),
            l = n("6sO2"),
            d = n("7vx8"),
            c = n("6BvN"),
            p = n("oIkB"),
            u = n("vH/s"),
            f = function(e, t, n, i, a) {
                var o = Date.now() / 1e3;
                l.o.tracking.track(u.SpadeEventType.ClipEdit, {
                    channel_id: e,
                    client_time: o,
                    clip_edit_session_id: t + "," + Math.floor(o),
                    clip_id: t,
                    clip_slug: n,
                    effect_name: "title",
                    effect_setting: i,
                    front_end: !0,
                    location: a
                })
            },
            m = n("CIox");
        ! function(e) {
            e.AlreadyPublished = "already_published", e.EditingWindowExpired = "editing_window_expired", e.InvalidSpeedDuration = "invalid_speed_duration", e.InvalidDuration = "invalid_duration", e.InvalidTitle = "invalid_title", e.Unknown = "unknown"
        }(i || (i = {})),
        function(e) {
            e.InvalidTitle = "invalid_title"
        }(a || (a = {})),
        function(e) {
            e.Unsent = "unsent", e.Sending = "sending", e.Error = "error", e.Successful = "successful"
        }(o || (o = {}));
        var h, g = 5,
            v = 60,
            k = n("Odds"),
            y = n("isxN"),
            b = {
                publishState: o.Unsent,
                errorMessage: null
            },
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = b, t.onError = function(e) {
                        t.setState({
                            publishState: o.Error,
                            errorMessage: e
                        }), t.props.onError(e)
                    }, t.onPublish = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.setState({
                                                publishState: o.Sending
                                            }), e = this.props.endOffset - this.props.startOffset, this.props.startOffset > this.props.endOffset || e < g || e > v) return this.setState({
                                            publishState: o.Error,
                                            errorMessage: i.InvalidDuration
                                        }), [2];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.publishClip(Object(p.a)({
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
                                            publishState: o.Successful
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
                return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.state.publishState === o.Error && e.title.length > 0 && this.props.title !== e.title && this.setState(b), e.isSubmitted && !this.props.isSubmitted && this.onPublish()
                }, t.prototype.render = function() {
                    var e = this.props.title.length < 1 || this.state.publishState === o.Error,
                        t = this.state.publishState === o.Sending;
                    return s.createElement(k._7, null, s.createElement(k.u, {
                        onClick: this.onPublish,
                        disabled: e,
                        state: t ? k.z.Loading : k.z.Default,
                        size: k.y.Large,
                        blurAfterClick: !0
                    }, Object(l.d)("Publish", "ClipsPublishButton")))
                }, t = r.__decorate([Object(d.a)(y, {
                    name: "publishClip"
                })], t)
            }(s.Component),
            _ = Object(m.f)(w),
            S = n("2TZ0"),
            E = {
                TITLE_INPUT: "cmgr-title-input",
                TITLE_SAVE: "cmgr-title-save",
                TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
            };
        ! function(e) {
            e.emptySubmission = "emptySubmission", e.characterLimitReached = "characterLimitReached", e.channelViolation = "channelViolation", e.notCurator = "notCurator", e.unknown = "unknown"
        }(h || (h = {}));
        var O = 100,
            N = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderForClipsViewing = function() {
                        return s.createElement("div", null, s.createElement(k._41, {
                            id: E.TITLE_INPUT,
                            "data-test-selector": E.TITLE_INPUT,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        }), s.createElement(k._7, {
                            display: k.Q.Flex,
                            justifyContent: k._6.Between,
                            alignItems: k.c.Center,
                            padding: {
                                top: 1
                            }
                        }, n.state.showError ? s.createElement(k.P, {
                            color: k.J.Error
                        }, n.getErrorMessage()) : s.createElement(k.P, {
                            color: k.J.Alt2
                        }, n.getRemainingCharacterText()), s.createElement(k._7, {
                            display: k.Q.Flex
                        }, s.createElement(k.u, {
                            "data-test-selector": E.TITLE_SAVE,
                            onClick: n.props.onCancel,
                            type: k.A.Hollow
                        }, Object(l.d)("Cancel", "ClipsTitleEdit")), s.createElement(k._7, {
                            padding: {
                                left: 1
                            }
                        }, n.renderSave()))))
                    }, n.renderForManager = function() {
                        return s.createElement(k.V, {
                            id: E.TITLE_INPUT,
                            label: Object(l.d)("Title", "ClipsTitleEdit"),
                            hint: n.getRemainingCharacterText()
                        }, s.createElement(k._7, {
                            display: k.Q.Flex,
                            flexWrap: k.T.NoWrap
                        }, s.createElement(k._7, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, s.createElement(k._3, {
                            id: E.TITLE_INPUT,
                            "data-test-selector": E.TITLE_INPUT,
                            type: k._4.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        })), s.createElement(k._7, {
                            flexShrink: 0,
                            flexGrow: 0
                        }, s.createElement(k._7, {
                            position: k._14.Relative
                        }, n.renderSave(), s.createElement(k._5, {
                            onClick: n.dismissMessage,
                            "data-test-selector": E.TITLE_SAVE_TOOLTIP
                        }, s.createElement(k.p, {
                            direction: k.q.TopRight,
                            show: n.state.showError || n.state.showSuccess
                        }, s.createElement(k._7, {
                            padding: 1
                        }, n.state.showSuccess ? s.createElement(k.P, {
                            color: k.J.Link
                        }, Object(l.d)("Title Saved!", "ClipsTitleEdit")) : s.createElement(k.P, {
                            color: k.J.Error
                        }, n.getErrorMessage()))))))))
                    }, n.renderForEdit = function() {
                        var e;
                        if ((n.props.startOffset || 0 === n.props.startOffset) && n.props.endOffset) return e = n.state.showError ? s.createElement(k.P, {
                            color: k.J.Alt2
                        }, n.getErrorMessage()) : 0 === n.state.title.length && n.props.broadcasterName ? s.createElement(k.P, {
                            color: k.J.Alt2
                        }, Object(l.d)("Clips with titles get more views. Help {broadcasterName} get discovered by adding a title.", {
                            broadcasterName: n.props.broadcasterName
                        }, "ClipsTitleEdit")) : s.createElement(k.P, {
                            color: k.J.Alt2
                        }, n.getRemainingCharacterText()), s.createElement(k._7, null, s.createElement(k._7, {
                            fullWidth: !0
                        }, s.createElement(k._3, {
                            id: E.TITLE_INPUT,
                            "data-test-selector": E.TITLE_INPUT,
                            type: k._4.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown,
                            placeholder: Object(l.d)("Add a title (required)", "ClipsTitleEdit"),
                            autoFocus: !0
                        })), s.createElement(k._7, {
                            display: k.Q.Flex,
                            justifyContent: k._6.Between,
                            alignItems: k.c.Center,
                            padding: {
                                top: 1
                            }
                        }, e, s.createElement(k._7, {
                            display: k.Q.Flex
                        }, s.createElement(k._7, {
                            padding: {
                                left: 1
                            }
                        }, s.createElement(_, {
                            isSubmitted: n.state.showSuccess,
                            title: n.state.title,
                            slug: n.props.clipSlug,
                            startOffset: n.props.startOffset,
                            endOffset: n.props.endOffset,
                            onError: n.onPublishClipError
                        })))))
                    }, n.renderSave = function() {
                        return s.createElement(k.u, {
                            "data-test-selector": E.TITLE_SAVE,
                            disabled: !n.canSaveEditedTitle(),
                            onClick: n.editClipTitle
                        }, Object(l.d)("Save", "ClipsTitleEdit"))
                    }, n.onPublishClipError = function(e) {
                        n.errorMessageToError(e)
                    }, n.getRemainingCharacterText = function() {
                        return Object(l.d)("{characterCount, number} remaining", {
                            characterCount: O - n.state.title.length
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
                        var t = e.currentTarget.value.slice(0, O);
                        n.setState({
                            title: t,
                            showError: !1,
                            showSuccess: !1
                        })
                    }, n.editClipTitle = function() {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if ("" === this.state.title.trim()) return this.setState({
                                            showError: !0,
                                            error: h.emptySubmission
                                        }), [2];
                                        n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, this.props.editTitle(Object(p.a)({
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
                                return void(n.props.location === u.PageviewLocation.ClipsEditing ? n.setState({
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
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.location === u.PageviewLocation.MyClipsManager ? this.renderForManager() : this.props.location === u.PageviewLocation.ClipsEditing ? this.renderForEdit() : this.renderForClipsViewing()
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
                    return e.includes("403:") || e.toLowerCase() === i.InvalidTitle.toLowerCase() || e.toLowerCase() === a.InvalidTitle.toLowerCase() ? h.channelViolation : h.unknown
                }, t
            }(s.Component),
            C = Object(d.a)(S, {
                name: "editTitle"
            })(N);
        n.d(t, !1, function() {
            return E
        }), n.d(t, !1, function() {
            return h
        }), n.d(t, !1, function() {
            return N
        }), n.d(t, "a", function() {
            return C
        })
    },
    RsvU: function(e, t) {},
    SUA7: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowButton_UnfollowUser"
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
                                value: "UnfollowUserInput"
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
                            value: "unfollowUser"
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
                                    value: "follow"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "disableNotifications"
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
            body: "mutation FollowButton_UnfollowUser($input: UnfollowUserInput!) {\nunfollowUser(input: $input) {\nfollow {\ndisableNotifications\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    U5tC: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsBroadcasterInfo"
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
                                                value: "28"
                                            }
                                        }],
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
                                            value: "login"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "stream"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 174
            }
        };
        n.loc.source = {
            body: "query ClipsBroadcasterInfo($slug: ID!) {\nclip(slug: $slug) {\nid\ngame {\nid\nname\ndisplayName\n}\nbroadcaster {\nid\nprofileImageURL(width: 28)\ndisplayName\nlogin\nstream {\nid\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    VNvG: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowButton_FollowUser"
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
                                value: "FollowUserInput"
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
                            value: "followUser"
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
                                    value: "follow"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "disableNotifications"
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
                end: 124
            }
        };
        n.loc.source = {
            body: "mutation FollowButton_FollowUser($input: FollowUserInput!) {\nfollowUser(input: $input) {\nfollow {\ndisableNotifications\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    XOun: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2"),
            r = n("vH/s"),
            s = "https://help.twitch.tv/customer/portal/articles/2918323-clip-champs-guide",
            l = function(e) {
                var t = e.type;
                o.o.tracking.track(r.SpadeEventType.ClipChampHelpClick, {
                    target_url: s,
                    type: t.toLowerCase()
                })
            };
        n("RsvU");
        n.d(t, "a", function() {
            return d
        });
        var d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.onClick = function() {
                    l({
                        type: t.props.pageType
                    })
                }, t
            }
            return i.__extends(t, e), t.prototype.render = function() {
                return a.createElement("a", {
                    href: s,
                    onClick: this.onClick,
                    target: "_blank"
                }, a.createElement("img", {
                    alt: Object(o.d)("clip champ badge", "ClipsCurator"),
                    className: "clips-champ-badge-img",
                    src: "https://s.jtvnw.net/jtv_user_pictures/hosted_images/clipchampbadge"
                }))
            }, t
        }(a.Component)
    },
    YugT: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowButton_FollowEvent_User"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "id"
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
                            value: "user"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "id"
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
                                    value: "isPartner"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "stream"
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
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hosting"
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
                                            value: "stream"
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
                end: 157
            }
        };
        n.loc.source = {
            body: "query FollowButton_FollowEvent_User($id: ID!) {\nuser(id: $id) {\nid\nisPartner\nstream {\nid\ngame {\nid\nname\n}\n}\nhosting {\nid\nstream {\nid\ngame {\nid\nname\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    cJZy: function(e, t) {},
    dPTw: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2"),
            r = n("7vx8"),
            s = n("CSlQ"),
            l = n("Odds"),
            d = n("0CQq"),
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data.clip) return a.createElement(l._7, null, this.renderPlaceholders());
                    var e = this.props.padding && this.props.padding.bottom,
                        t = void 0 === e ? .5 : e;
                    return a.createElement(l._7, {
                        display: l.Q.Flex,
                        alignItems: l.c.Center,
                        padding: {
                            bottom: t
                        }
                    }, !this.props.hideSymbol && a.createElement(l._7, {
                        margin: {
                            right: .5
                        },
                        display: l.Q.Flex,
                        alignItems: l.c.Center
                    }, a.createElement(l._20, {
                        asset: l._21.GlyphViews,
                        type: l._22.Brand
                    })), a.createElement(l.P, {
                        bold: !0,
                        type: l._44.Span,
                        fontSize: this.props.fontSize ? this.props.fontSize : l.U.Size5
                    }, Object(o.d)("{views} views", {
                        views: Object(o.e)(this.props.data.clip.viewCount)
                    }, "ClipsViewCount")))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return a.createElement(l.e, {
                        type: l.i.FadeIn,
                        duration: l.g.Long,
                        enabled: !0
                    }, a.createElement(l.P, {
                        fontSize: this.props.fontSize ? this.props.fontSize : l.U.Size5
                    }, a.createElement(l._13, {
                        lineCount: 1,
                        width: 80
                    })))
                }, t = i.__decorate([Object(s.d)("ClipsViewCount"), Object(r.a)(d)], t)
            }(a.Component);
        n.d(t, "a", function() {
            return c
        })
    },
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
                            }, {
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
            }],
            loc: {
                start: 0,
                end: 237
            }
        };
        n.loc.source = {
            body: "query ClipsRawMedia($slug: ID!) {\nclip(slug: $slug) {\nbroadcaster {\ndisplayName\n}\nrawMedia {\ndefaultClipInitialOffset\nduration\nfilmStripFrames\nfilmStripSecondsPerFrame\nframeHeight\nframeWidth\nspritesheetURL\nstatus\nvideoURL\n}\ncreatedAt\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    hdYS: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            o = n("+xm8"),
            r = n("f2i/"),
            s = n("Aj/L"),
            l = n("4bQk");
        var d = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(a.b)({
                login: function() {
                    return Object(r.f)(o.a.FollowButton)
                }
            }, e)
        })(l.a);
        n.d(t, "a", function() {
            return d
        }), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return l.b
        })
    },
    icZh: function(e, t, n) {
        "use strict";
        t.a = r, t.b = function(e) {
            var t = r();
            t && t.length >= o && (t = t.slice(1, o));
            i.l.set(a, JSON.stringify(t.concat([e])))
        };
        var i = n("6sO2"),
            a = "MOST_RECENT_CLIPS_WATCHED_STORAGE_KEY",
            o = 10;

        function r() {
            return JSON.parse(i.l.get(a, "[]"))
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
            a = n("OAwv"),
            o = n("GiK3"),
            r = n("F8kA"),
            s = n("6sO2");

        function l(e) {
            return function(t) {
                var n = function(n) {
                    function r(t) {
                        var a = n.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var o = a.referenceTracking,
                                    r = o.content,
                                    l = o.medium,
                                    d = o.content_index;
                                s.o.tracking.trackPageview(i.__assign({
                                    content: r,
                                    medium: l,
                                    content_index: d,
                                    location: e.location
                                }, t))
                            }
                        }, s.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return i.__extends(r, n), r.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, r.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, r.prototype.render = function() {
                        return o.createElement(t, i.__assign({}, this.props))
                    }, r.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? a.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                o = a.stringify(t);
                            o.length > 0 && (i = "?" + o), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return n
                    }, r
                }(o.Component);
                return Object(r.f)(n)
            }
        }
        n.d(t, "a", function() {
            return l
        })
    },
    jetF: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n("TToO"),
            a = n("GiK3"),
            o = (n.n(a), n("HM6l")),
            r = n("Odds"),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showBalloon: !!t.props.openByDefault,
                        hasInteracted: !!t.props.openByDefault
                    }, t.toggleBalloonId = Object(o.a)(), t.handleButtonClick = function() {
                        t.setState(function(e) {
                            return {
                                showBalloon: !e.showBalloon,
                                hasInteracted: !0
                            }
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!t.state.showBalloon)
                        })
                    }, t.handleGlobalClick = function(e) {
                        e.target.matches('[data-toggle-balloon-id="' + t.toggleBalloonId + '"] *') || t.setState({
                            showBalloon: !1
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!t.state.showBalloon)
                        })
                    }, t.onMouseEnter = function() {
                        t.state.hasInteracted || t.setState({
                            hasInteracted: !0
                        }), t.props.onHover && t.props.onHover()
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.openByDefault && document.addEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.componentWillUpdate = function(e, t) {
                    this.state.showBalloon !== t.showBalloon && (t.showBalloon ? document.addEventListener("click", this.handleGlobalClick, !0) : document.removeEventListener("click", this.handleGlobalClick, !0))
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.render = function() {
                    var e = a.Children.toArray(this.props.children);
                    if (2 !== e.length) throw new Error("ToggleBalloonWrapper should only be given two children: a clickable and a Balloon");
                    var t = e[0],
                        n = e[1];
                    if (n.type !== r.p) throw new Error("ToggleBalloonWrapper needs a Balloon as its second child element");
                    var o = a.cloneElement(t, {
                            onClick: this.handleButtonClick
                        }),
                        s = null;
                    (this.state.hasInteracted || this.props.alwaysMountBalloonContent) && (s = a.cloneElement(n, {
                        show: this.state.showBalloon
                    }));
                    var l = o;
                    return this.props.tooltipProps && (l = a.createElement(r._47, i.__assign({}, this.props.tooltipProps), o)), a.createElement(r._7, {
                        "data-toggle-balloon-id": this.toggleBalloonId,
                        display: this.props.display,
                        position: r._14.Relative
                    }, a.createElement("div", {
                        style: {
                            display: "inherit"
                        },
                        onMouseEnter: this.onMouseEnter,
                        "data-test-selector": "toggle-balloon-wrapper__mouse-enter-detector"
                    }, l), s)
                }, t.prototype.toggleBalloon = function(e) {
                    void 0 === e && (e = !this.state.showBalloon), this.setState({
                        showBalloon: e,
                        hasInteracted: !0
                    })
                }, t
            }(a.Component)
    },
    nU46: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            o = n("7vx8"),
            r = n("CSlQ"),
            s = n("Odds"),
            l = n("0Kuu"),
            d = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.clip ? a.createElement(s.P, {
                        fontSize: this.props.fontSize ? this.props.fontSize : s.U.Size3,
                        type: s._44.Span,
                        lineHeight: s._8.Heading,
                        ellipsis: this.props.ellipsis
                    }, this.props.data.clip.title) : a.createElement(s._7, null, this.renderPlaceholders())
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return a.createElement(s.e, {
                        type: s.i.FadeIn,
                        duration: s.g.Long,
                        delay: s.f.Short,
                        enabled: !0
                    }, a.createElement(s.P, {
                        fontSize: this.props.fontSize ? this.props.fontSize : s.U.Size3
                    }, a.createElement(s._13, {
                        lineCount: 1,
                        width: 100
                    })))
                }, t = i.__decorate([Object(r.d)("ClipsTitle"), Object(o.a)(l)], t)
            }(a.Component);
        n.d(t, "a", function() {
            return d
        })
    },
    rqhk: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2");

        function r(e) {
            return function(t) {
                return function(n) {
                    function s(t) {
                        var a = n.call(this, t) || this;
                        return a.messageHandlers = [], a.handlePlayerAdded = function() {
                            a.getPlayer() && !a.isConnected && (a.isConnected = !0, p.off(d, a.handlePlayerAdded), p.on(c, a.handlePlayerRemoved), window.addEventListener("message", a.onIncomingPlayerMessage))
                        }, a.handlePlayerRemoved = function() {
                            !a.getPlayer() && a.isConnected && (a.isConnected = !1, p.off(c, a.handlePlayerRemoved), p.on(d, a.handlePlayerAdded), window.removeEventListener("message", a.onIncomingPlayerMessage))
                        }, a.sendMessage = function(e) {
                            var t = a.getPlayer();
                            t && t.postMessage(e, o.o.config.playerBaseURL)
                        }, a.onIncomingPlayerMessage = function(e) {
                            e.origin === o.o.config.playerBaseURL && e.data.namespace === D && a.messageHandlers.forEach(function(t) {
                                t(e.data)
                            })
                        }, a.updatePlayerProps = function(t) {
                            if (e.requestedPlayerProps && (t.method === N || t.method === C)) {
                                var n = t.args[0],
                                    o = e.requestedPlayerProps.reduce(function(e, t) {
                                        var i = n[t];
                                        return void 0 !== i && a.state.playerProps[t] !== i && (e[t] = i), e
                                    }, {});
                                Object.keys(o).length && a.setState({
                                    playerProps: i.__assign({}, a.state.playerProps, o)
                                })
                            }
                        }, e.requestedPlayerProps && a.messageHandlers.push(a.updatePlayerProps), a.state = {
                            playerProps: {}
                        }, a
                    }
                    return i.__extends(s, n), s.prototype.componentWillMount = function() {
                        p.on(d, this.handlePlayerAdded)
                    }, s.prototype.componentWillUnmount = function() {
                        p.off(d, this.handlePlayerAdded), p.off(c, this.handlePlayerRemoved)
                    }, s.prototype.render = function() {
                        var e = {
                            playerConnection: {
                                sendMessage: this.sendMessage,
                                registerMessageHandler: this.registerMessageHandler,
                                playerProps: this.state.playerProps
                            }
                        };
                        return a.createElement(t, i.__assign({}, this.props, e))
                    }, s.prototype.getPlayer = function() {
                        return l[e.playerId(this.props)]
                    }, s.prototype.registerMessageHandler = function(e) {
                        this.messageHandlers.push(e)
                    }, s.displayName = r.name + "(" + (t.displayName || t.name) + ")", s
                }(a.Component)
            }
        }
        var s = n("BzvE"),
            l = {},
            d = "player-storage-added",
            c = "player-storage-removed",
            p = new s.EventEmitter;

        function u(e, t) {
            l[e] = t, p.emit(d)
        }

        function f(e) {
            delete l[e], p.emit(c)
        }

        function m(e) {
            return {
                args: [void 0 === e.arg ? {} : e.arg],
                method: e.method,
                namespace: void 0 === e.namespace ? T : e.namespace
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

        function k() {
            return m({
                method: S
            })
        }

        function y(e) {
            return m({
                method: O,
                arg: e
            })
        }

        function b(e) {
            return m({
                method: E,
                arg: e
            })
        }

        function w() {
            return m({
                method: "fullscreen",
                arg: !1
            })
        }

        function _(e) {
            return m({
                method: "setEditClip",
                arg: e
            })
        }
        var S = "subscribe",
            E = "setclip",
            O = "setAutoplay",
            N = "bridgestateupdate",
            C = "bridgestorestateupdate",
            T = "player.embed.host",
            D = "player.embed.client";
        n.d(t, "t", function() {
            return r
        }), n.d(t, "p", function() {
            return l
        }), n.d(t, "n", function() {
            return d
        }), n.d(t, "o", function() {
            return c
        }), n.d(t, "i", function() {
            return p
        }), n.d(t, "s", function() {
            return u
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
            return k
        }), n.d(t, "k", function() {
            return y
        }), n.d(t, "l", function() {
            return b
        }), n.d(t, "j", function() {
            return w
        }), n.d(t, "r", function() {
            return _
        }), n.d(t, "g", function() {
            return S
        }), n.d(t, "f", function() {
            return E
        }), n.d(t, "e", function() {
            return O
        }), n.d(t, "c", function() {
            return N
        }), n.d(t, "d", function() {
            return C
        }), n.d(t, "b", function() {
            return T
        }), n.d(t, "a", function() {
            return D
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
        var i, a = n("TToO"),
            o = n("GiK3"),
            r = n("6sO2"),
            s = n("CSlQ"),
            l = n("rqhk"),
            d = n("icZh"),
            c = n("46tX"),
            p = n("Odds");
        n("vtXo");
        ! function(e) {
            e.Viewing = "clips-viewing", e.Editing = "clips-editing"
        }(i || (i = {}));
        var u = function(e) {
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
            return a.__extends(t, e), t.prototype.componentDidMount = function() {
                this.setInitialSlug(this.props.slug)
            }, t.prototype.componentWillReceiveProps = function(e) {
                this.state.initialSlug || this.setInitialSlug(e.slug), this.props.slug !== e.slug && e.slug && this.setClip(e.slug)
            }, t.prototype.componentWillUnmount = function() {
                Object(l.q)(this.props.slug)
            }, t.prototype.componentDidUpdate = function() {
                !this.hasSetPlayerRef && this.playerRef && (this.hasSetPlayerRef = !0, Object(l.s)(this.props.slug, this.playerRef.contentWindow), this.playerRef.contentWindow.postMessage(Object(l.m)(), r.o.config.playerBaseURL))
            }, t.prototype.render = function() {
                return this.state.initialSlug ? o.createElement(p._30, {
                    className: "clips-video-iframe",
                    position: p._14.Relative,
                    fullWidth: !0,
                    fullHeight: !0
                }, o.createElement(p._30, {
                    display: this.state.isLoaded ? p.Q.Hide : p.Q.Flex,
                    color: p.J.Overlay,
                    alignItems: p.c.Center,
                    justifyContent: p._6.Center,
                    position: p._14.Absolute,
                    fullHeight: !0,
                    fullWidth: !0
                }, o.createElement(p._9, {
                    size: p._28.Large,
                    inheritColor: !0
                })), o.createElement(p._1, {
                    display: this.state.isLoaded ? p.Q.Block : p.Q.HideAccessible,
                    position: p._14.Absolute,
                    fullHeight: !0,
                    fullWidth: !0
                }, o.createElement("iframe", {
                    src: r.o.config.playerBaseURL + "/?player=" + this.props.playerType + "&clip=" + this.state.initialSlug + "&origin=" + window.location.origin + "&branding=false&externalfullscreen=" + !Object(c.c)(navigator.userAgent),
                    frameBorder: "0",
                    scrolling: "no",
                    allowFullScreen: !0,
                    ref: this.setPlayerRef,
                    onLoad: this.setIsLoaded
                }))) : null
            }, t.prototype.setClip = function(e) {
                this.playerRef && (this.playerRef.contentWindow.postMessage(Object(l.l)(e), r.o.config.playerBaseURL), Object(d.b)(e))
            }, t = a.__decorate([Object(s.d)("ClipsVideoIframe", {
                autoReportInteractive: !0
            })], t)
        }(o.Component);
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return u
        })
    },
    x4k6: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowButton_User"
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
                                    value: "login"
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
                                            value: "follower"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "disableNotifications"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
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
                end: 151
            }
        };
        n.loc.source = {
            body: "query FollowButton_User($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nlogin\nself {\nfollower {\ndisableNotifications\n}\n}\n}\ncurrentUser {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    ynxC: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2"),
            r = n("hdYS"),
            s = n("7vx8"),
            l = n("CSlQ"),
            d = n("kJau"),
            c = n("CMkR"),
            p = n("Odds"),
            u = n("U5tC"),
            f = {
                tt_content: "player_profile_img"
            },
            m = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.clip && this.props.data.clip.broadcaster ? a.createElement(p._7, {
                        className: "clips-broadcaster-info",
                        padding: 1,
                        display: p.Q.Flex,
                        alignItems: p.c.Center
                    }, a.createElement("a", {
                        target: "_blank",
                        href: Object(d.c)(this.props.data.clip.broadcaster.login, f)
                    }, a.createElement(p.l, {
                        src: this.props.data.clip.broadcaster.profileImageURL,
                        alt: Object(o.d)("Broadcaster Avatar", "ClipsBroadcasterInfo"),
                        size: 30
                    })), a.createElement(p._7, {
                        display: p.Q.Flex,
                        flexDirection: p.S.Column,
                        flexGrow: 1,
                        margin: {
                            left: 1
                        },
                        ellipsis: !0
                    }, a.createElement("a", {
                        href: Object(d.c)(this.props.data.clip.broadcaster.login, f)
                    }, a.createElement(p.P, {
                        fontSize: p.U.Size4,
                        type: p._44.Span
                    }, this.props.data.clip.broadcaster.displayName), !(!this.props.data.clip.broadcaster.stream || !this.props.data.clip.broadcaster.stream.id) && a.createElement(p._7, {
                        margin: {
                            left: .5
                        },
                        display: p.Q.InlineBlock
                    }, a.createElement(p._11, {
                        label: Object(o.d)("LIVE", "ClipsBroadcasterInfo"),
                        type: p._12.Live
                    }))), a.createElement(p._7, null, a.createElement(p.P, {
                        color: p.J.Alt2,
                        fontSize: p.U.Size5,
                        ellipsis: !0
                    }, this.props.data.clip.game && Object(o.d)("playing {gameName}", {
                        gameName: a.createElement("a", {
                            target: "_blank",
                            href: Object(d.d)(this.props.data.clip.game.name, {
                                tt_medium: "clips_web"
                            })
                        }, this.props.data.clip.game.displayName)
                    }, "ClipsBroadcasterInfo")))), a.createElement("div", {
                        onMouseEnter: this.pauseAutoplayTimer,
                        onMouseLeave: this.restartAutoplayTimer
                    }, a.createElement(r.a, {
                        isHostedFollow: !1,
                        channelLogin: this.props.data.clip.broadcaster.login,
                        followUIType: r.b.IconAndText,
                        unfollowUIType: r.b.IconOnly,
                        showLoadingPlaceholder: !0
                    }))) : a.createElement(p._7, null, this.renderPlaceholders())
                }, t.prototype.pauseAutoplayTimer = function() {
                    Object(c.e)(c.b.followButton)
                }, t.prototype.restartAutoplayTimer = function() {
                    Object(c.g)(c.b.followButton)
                }, t.prototype.renderPlaceholders = function() {
                    return a.createElement(p._7, {
                        padding: 1,
                        display: p.Q.Flex,
                        alignItems: p.c.Center
                    }, a.createElement(p._7, null, a.createElement(p.e, {
                        type: p.i.FadeIn,
                        duration: p.g.Long,
                        enabled: !0
                    }, a.createElement(p._13, {
                        height: 30,
                        width: 30
                    }))), a.createElement(p._30, {
                        fontSize: p.U.Size5,
                        flexGrow: 1,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(p.e, {
                        type: p.i.FadeIn,
                        duration: p.g.Long,
                        enabled: !0
                    }, a.createElement(p._13, {
                        lineCount: 1,
                        width: 80
                    })), a.createElement(p.e, {
                        type: p.i.FadeIn,
                        duration: p.g.Long,
                        delay: p.f.Short,
                        enabled: !0
                    }, a.createElement(p._13, {
                        lineCount: 1,
                        width: 120
                    }))), a.createElement(p._7, null, a.createElement(p.e, {
                        type: p.i.FadeIn,
                        duration: p.g.Long,
                        enabled: !0
                    }, a.createElement(p._13, {
                        height: 30,
                        width: 70
                    }))))
                }, t = i.__decorate([Object(l.d)("ClipsBroadcasterInfo"), Object(s.a)(u)], t)
            }(a.Component);
        n.d(t, "a", function() {
            return m
        })
    }
});
//# sourceMappingURL=sites.clips.pages.create-2c7e258acc6f6d58ef75537ee390148c.js.map