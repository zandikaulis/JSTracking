webpackJsonp([51], {
    "+Znq": function(e, t, n) {
        "use strict";
        var i = n("jetF");
        n.d(t, "a", function() {
            return i.a
        })
    },
    "0B06": function(e, t, n) {
        "use strict";
        t.b = function(e) {
            if (!e) return a();
            try {
                var t = new Date(e.replace(/(Z)/i, "")),
                    n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
                return Object(i.g)(n)
            } catch (e) {
                return a()
            }
        }, t.a = function(e) {
            if (e <= 0) return "00:00";
            var t = Math.floor(e / 60).toString(),
                n = Math.floor(e - 60 * Number(t)).toString();
            1 === t.length && (t = "0" + t);
            1 === n.length && (n = "0" + n);
            return t + ":" + n
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
            r = n("6sO2"),
            o = n("7vx8"),
            s = n("vH/s"),
            l = n("CSlQ"),
            d = n("XOun"),
            c = n("kJau"),
            u = n("Odds"),
            p = n("0QL4"),
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
                    if (!e || !e.curator || this.props.data.loading) return a.createElement(u._7, null, this.renderPlaceholders());
                    var t = Object(c.b)(e.curator.login, {
                        tt_medium: "clips_web",
                        tt_content: "curator_name"
                    });
                    return a.createElement(u._7, {
                        ellipsis: this.props.ellipsis
                    }, e.champBadge && e.champBadge.id && a.createElement(u._7, {
                        margin: {
                            right: .5
                        },
                        display: u.Q.InlineBlock
                    }, a.createElement(d.a, {
                        pageType: s.PageviewLocation.ClipsViewing
                    })), a.createElement(u._1, {
                        display: u.Q.Inline
                    }, a.createElement(u.P, {
                        fontSize: this.props.fontSize ? this.props.fontSize : u.U.Size5
                    }, Object(r.d)("Clipped by {curatorName}", {
                        curatorName: a.createElement("a", {
                            href: t,
                            target: "_blank"
                        }, e.curator.displayName)
                    }, "ClipsCurator"))))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.data.clip.curator && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return a.createElement(u.e, {
                        type: u.i.FadeIn,
                        duration: u.g.Long,
                        delay: u.f.Medium,
                        enabled: !0
                    }, a.createElement(u.P, {
                        fontSize: this.props.fontSize ? this.props.fontSize : u.U.Size5
                    }, a.createElement(u._13, {
                        lineCount: 1,
                        width: 80
                    })))
                }, t = i.__decorate([Object(l.d)("ClipsCurator"), Object(o.a)(p)], t)
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
    "2hJ3": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = document.createElement("textarea");
            t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
            var n = !0;
            try {
                n = document.execCommand("copy")
            } catch (e) {
                n = !1
            }
            return document.body.removeChild(t), n
        }
    },
    "3HXW": function(e, t, n) {
        "use strict";
        var i, a, r = n("TToO"),
            o = n("GiK3"),
            s = n("HW6M"),
            l = n("kLf9"),
            d = n("Odds");
        n("cJZy");
        ! function(e) {
            e.LeftHandle = "left-handle", e.Overlay = "overlay", e.Slider = "slider", e.RightHandle = "right-handle"
        }(i || (i = {})),
        function(e) {
            e.LeftHandle = "leftHandle", e.Slider = "slider", e.RightHandle = "rightHandle"
        }(a || (a = {}));
        var c, u = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.leftHandleRef = null, n.rightHandleRef = null, n.sliderHandleRef = null, n.getHandleHandlers = function(e) {
                    switch (e) {
                        case a.LeftHandle:
                            return {
                                handleRef: n.leftHandleRef,
                                mouseMoveHandler: n.onLeftMouseMove,
                                mouseUpHandler: n.onLeftMouseUp
                            };
                        case a.RightHandle:
                            return {
                                handleRef: n.rightHandleRef,
                                mouseMoveHandler: n.onRightMouseMove,
                                mouseUpHandler: n.onRightMouseUp
                            };
                        case a.Slider:
                            return {
                                handleRef: n.sliderHandleRef,
                                mouseMoveHandler: n.onSliderMouseMove,
                                mouseUpHandler: n.onSliderMouseUp
                            };
                        default:
                            return e
                    }
                }, n.addHandleListeners = function(e) {
                    var t = n.getHandleHandlers(e),
                        i = t.handleRef,
                        a = t.mouseMoveHandler,
                        r = t.mouseUpHandler;
                    i && (i.ownerDocument.addEventListener("mousemove", a), i.ownerDocument.addEventListener("mouseup", r))
                }, n.removeHandleListeners = function(e) {
                    var t = n.getHandleHandlers(e),
                        i = t.handleRef,
                        a = t.mouseMoveHandler,
                        r = t.mouseUpHandler;
                    i && (i.ownerDocument.removeEventListener("mousemove", a), i.ownerDocument.removeEventListener("mouseup", r))
                }, n.leftHandleRefHandler = function(e) {
                    n.leftHandleRef = e
                }, n.onLeftMouseDown = function(e) {
                    var t = e.clientX;
                    n.setState(function(e) {
                        return {
                            previousPosition: t,
                            previousBaseValue: e.startOffset
                        }
                    }, function() {
                        n.props.onLeftDragStart && n.props.onLeftDragStart({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        }), n.addHandleListeners(a.LeftHandle)
                    })
                }, n.onLeftMouseUp = function() {
                    n.setState({
                        previousPosition: null,
                        previousBaseValue: null
                    }, function() {
                        n.props.onLeftDragEnd && n.props.onLeftDragEnd({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        }), n.removeHandleListeners(a.LeftHandle)
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
                            previousPosition: t,
                            previousBaseValue: e.endOffset
                        }
                    }, function() {
                        n.props.onRightDragStart && n.props.onRightDragStart({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        }), n.addHandleListeners(a.RightHandle)
                    })
                }, n.onRightMouseUp = function() {
                    n.setState({
                        previousPosition: null,
                        previousBaseValue: null
                    }, function() {
                        n.props.onRightDragEnd && n.props.onRightDragEnd({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        }), n.removeHandleListeners(a.RightHandle)
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
                }, n.sliderHandleRefHandler = function(e) {
                    n.sliderHandleRef = e
                }, n.onSliderMouseDown = function(e) {
                    var t = e.clientX;
                    n.setState(function(e) {
                        return {
                            previousPosition: t,
                            previousBaseValue: e.startOffset
                        }
                    }, function() {
                        n.props.onSliderDragStart && n.props.onSliderDragStart({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        }), n.addHandleListeners(a.Slider)
                    })
                }, n.onSliderMouseUp = function() {
                    n.setState({
                        previousPosition: null,
                        previousBaseValue: null
                    }, function() {
                        n.props.onSliderDragEnd && n.props.onSliderDragEnd({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        }), n.removeHandleListeners(a.Slider)
                    })
                }, n.onSliderMouseMove = function(e) {
                    var t = e.clientX;
                    n.setState(function(e, i) {
                        var a = e.endOffset - e.startOffset,
                            r = n.calculateOffset(t, {
                                startBoundary: i.minOffset,
                                endBoundary: i.maxOffset - a,
                                currentValue: e.startOffset
                            });
                        return {
                            startOffset: r,
                            endOffset: r + a
                        }
                    }, function() {
                        n.props.onSliderDrag && n.props.onSliderDrag({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        })
                    })
                }, n.calculateOffset = function(e, t) {
                    if (null === n.state.previousPosition || null === n.state.previousBaseValue) return t.currentValue;
                    var i = n.convertPixelsToOffsetUnits(e - n.state.previousPosition),
                        a = n.state.previousBaseValue + i;
                    return a < t.startBoundary ? t.startBoundary : a > t.endBoundary ? t.endBoundary : a
                }, n.convertPixelsToOffsetUnits = function(e) {
                    return n.props.parentContainerRef ? 0 === n.props.parentContainerRef.clientWidth ? 0 : e * ((n.props.maxOffset - n.props.minOffset) / n.props.parentContainerRef.clientWidth) : 0
                }, n.addFocus = function() {
                    n.setState({
                        showFocus: !0
                    })
                }, n.removeFocus = function() {
                    n.setState({
                        showFocus: !1
                    })
                }, n.state = {
                    startOffset: t.startOffset,
                    endOffset: t.endOffset,
                    previousPosition: null,
                    previousBaseValue: null,
                    showFocus: !1
                }, n
            }
            return r.__extends(t, e), t.prototype.render = function() {
                var e = s("draggable-slider__content", {
                    "draggable-slider__content--blue": this.props.color === c.Blue,
                    "draggable-slider__content--orange": this.props.color === c.Orange,
                    "draggable-slider__content--focus": this.props.isSliderEnabled && this.state.showFocus
                });
                return o.createElement(d._7, {
                    className: "draggable-slider__container",
                    position: d._14.Relative,
                    display: d.Q.Flex,
                    justifyContent: d._6.Center
                }, o.createElement(d._7, {
                    className: "draggable-slider__popover",
                    position: d._14.Absolute
                }, this.props.popover), o.createElement(d._30, {
                    className: e,
                    fullWidth: !0,
                    display: d.Q.Flex,
                    justifyContent: d._6.Between
                }, o.createElement(l.b, {
                    "data-test-selector": i.LeftHandle,
                    color: this.props.color,
                    handlePosition: l.c.Left,
                    onRef: this.leftHandleRefHandler,
                    onMouseDown: this.onLeftMouseDown,
                    label: this.props.handleLabels && this.props.handleLabels.length > 0 ? {
                        attach: l.a.Left,
                        content: this.props.handleLabels[0]
                    } : null,
                    size: this.props.handleSize
                }), this.renderSliderContent(), o.createElement(l.b, {
                    "data-test-selector": i.RightHandle,
                    color: this.props.color,
                    handlePosition: l.c.Right,
                    onRef: this.rightHandleRefHandler,
                    onMouseDown: this.onRightMouseDown,
                    label: this.props.handleLabels && this.props.handleLabels.length > 0 ? {
                        attach: l.a.Right,
                        content: this.props.handleLabels[1]
                    } : null,
                    size: this.props.handleSize
                })))
            }, t.prototype.renderSliderContent = function() {
                var e = this.props.children;
                this.props.isSliderEnabled && (e = o.createElement("div", {
                    onMouseDown: this.onSliderMouseDown,
                    onMouseEnter: this.addFocus,
                    onMouseLeave: this.removeFocus,
                    ref: this.sliderHandleRefHandler,
                    "data-test-selector": i.Slider
                }, this.props.children));
                var t = s("draggable-slider__overlay", {
                    "draggable-slider__overlay--sliding-enabled": this.props.isSliderEnabled,
                    "draggable-slider__overlay--blue": this.props.color === c.Blue,
                    "draggable-slider__overlay--orange": this.props.color === c.Orange
                });
                return o.createElement(d._7, {
                    className: t,
                    display: d.Q.InlineBlock,
                    overflow: d._10.Hidden,
                    "data-test-selector": i.Overlay,
                    fullWidth: !0
                }, e)
            }, t
        }(o.Component);
        ! function(e) {
            e.Orange = "orange", e.Blue = "blue"
        }(c || (c = {}));
        var p, f = c.Orange;
        ! function(e) {
            e[e.SelectedSection = 0] = "SelectedSection"
        }(p || (p = {}));
        var m = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    startOffset: t.props.startOffset,
                    endOffset: t.props.endOffset
                }, t.handleParentContainerRef = function(e) {
                    t.parentContainerRef = e
                }, t
            }
            return r.__extends(t, e), t.prototype.render = function() {
                var e = this.props.handleSize ? this.props.handleSize : l.d.Small,
                    t = {
                        width: "calc(" + this.calculateWidthPercentage() + "% + " + 2 * e + "px)",
                        marginLeft: "calc(" + this.calculateOffsetPercentage() + "% - " + e + "px)"
                    };
                return o.createElement("div", {
                    ref: this.handleParentContainerRef
                }, o.createElement(d._1, {
                    flexGrow: 0,
                    flexShrink: 0
                }, o.createElement("div", {
                    "data-test-selector": p.SelectedSection,
                    style: t
                }, o.createElement(u, {
                    color: this.props.color || f,
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
                    onSliderDragStart: this.props.onSliderDragStart,
                    onSliderDrag: this.props.onSliderDrag,
                    onSliderDragEnd: this.props.onSliderDragEnd,
                    popover: this.props.popover,
                    handleLabels: this.props.handleLabels,
                    isSliderEnabled: this.props.isSliderEnabled,
                    handleSize: e
                }, this.props.children))))
            }, t.prototype.calculateOffsetPercentage = function() {
                return this.props.startOffset / this.getTotalLength() * 100
            }, t.prototype.calculateWidthPercentage = function() {
                return (this.props.endOffset - this.props.startOffset) / this.getTotalLength() * 100
            }, t.prototype.getTotalLength = function() {
                return this.props.maxOffset - this.props.minOffset
            }, t
        }(o.Component);
        n.d(t, "b", function() {
            return c
        }), n.d(t, !1, function() {
            return f
        }), n.d(t, !1, function() {
            return p
        }), n.d(t, "a", function() {
            return m
        })
    },
    "3KVC": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            void 0 === e && (e = "");
            return i.test(e)
        }, t.b = function(e) {
            void 0 === e && (e = "");
            var t = e.match(i);
            if (null === t) return "";
            if (t && t.length > 0 && void 0 !== t.index) {
                var n = t[1];
                return n
            }
            return ""
        };
        var i = new RegExp("(?:^|\\s)(?:https?://)?(?:(?:www|go).)?twitch.tv/videos/(\\d+)(?:$|\\s)?")
    },
    "3iBR": function(e, t, n) {
        "use strict";
        n.d(t, "m", function() {
            return r
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "b", function() {
            return s
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, "i", function() {
            return d
        }), n.d(t, "k", function() {
            return c
        }), n.d(t, "j", function() {
            return u
        }), n.d(t, "l", function() {
            return p
        }), n.d(t, "g", function() {
            return f
        }), n.d(t, "h", function() {
            return m
        }), n.d(t, "d", function() {
            return h
        }), n.d(t, "e", function() {
            return g
        }), n.d(t, "f", function() {
            return v
        });
        var i, a = n("I89S"),
            r = {
                ERROR_DISPLAY_TIMEOUT: 5e3,
                GET_BALANCE_RATE_LIMIT: 5e3,
                UNDO_PROMPT_DURATION: 5e3
            },
            o = "https://d3aqoihi2n8ty8.cloudfront.net",
            s = o + "/cheer",
            l = o + "/actions",
            d = 8e5,
            c = 1e4,
            u = 500,
            p = 1e3,
            f = "cheer",
            m = a.a.Purple,
            h = "FIRST_PARTY",
            g = "THIRD_PARTY",
            v = ((i = {})[a.a.Gray] = "#979797", i[a.a.Purple] = "#9c3ee8", i[a.a.Green] = "#1db2a5", i[a.a.Blue] = "#0099fe", i[a.a.Red] = "#f43021", i[a.a.Yellow] = "#f3a71a", i)
    },
    "3yQz": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return r
        });
        var i, a = "VIEWS",
            r = "TIME";
        ! function(e) {
            e.Popular = "VIEWS", e.Newest = "TIME"
        }(i || (i = {}))
    },
    "3ydF": function(e, t) {},
    "4Gcm": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        });
        var i = n("TToO"),
            a = n("GiK3"),
            r = (n.n(a), n("CSlQ")),
            o = n("Odds"),
            s = n("Jg0G"),
            l = (n.n(s), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.selectOnFocus = function(e) {
                        e.currentTarget.select(), t.props.onSelection && t.props.onSelection()
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(o._7, i.__assign({
                        position: o._14.Relative,
                        className: "selectable-input-wrapper"
                    }, Object(o._58)(this.props)), a.createElement(o._3, {
                        type: o._4.Text,
                        value: this.props.text,
                        readOnly: !0,
                        onFocus: this.selectOnFocus,
                        icon: this.props.iconAsset,
                        id: this.props.id
                    }), this.props.children)
                }, t = i.__decorate([Object(r.d)("SelectableInput")], t)
            }(a.Component))
    },
    "4bQk": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("+Znq"),
            s = n("7vx8"),
            l = n("oIkB"),
            d = n("2BvQ"),
            c = n("xrVp"),
            u = n("YugT"),
            p = {
                Channel: "channel"
            };
        var f = n("vH/s"),
            m = n("CSlQ"),
            h = n("Odds"),
            g = n("VNvG"),
            v = (n("3ydF"), n("SUA7")),
            y = n("x4k6");
        n.d(t, "b", function() {
            return b
        }), n.d(t, "a", function() {
            return k
        });
        var b;
        ! function(e) {
            e[e.IconOnly = 0] = "IconOnly", e[e.TextOnly = 1] = "TextOnly", e[e.IconAndText = 2] = "IconAndText"
        }(b || (b = {}));
        var k = function(e) {
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
                            var n, a, o, s, l, p, f, m, h, g;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (n = null, a = null, o = null, s = null, l = null, !t.channelID) return [3, 5];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, r.o.apollo.client.query({
                                            query: u,
                                            variables: {
                                                id: t.channelID
                                            }
                                        })];
                                    case 2:
                                        return s = i.sent(), [3, 4];
                                    case 3:
                                        return f = i.sent(), r.j.error(f, "Failed to make query for channel info in FollowEvent reporting.", {
                                            channelID: t.channelID
                                        }), [3, 4];
                                    case 4:
                                        (o = s && s.data && s.data.user) ? l = o.hosting.stream && o.hosting.stream.game ? o.hosting.stream.game.name : o.stream && o.stream.game && o.stream.game.name: r.j.error(new Error("GraphQL empty response"), "Query for channel info in FollowEvent reporting return no data.", {
                                            channelID: t.channelID
                                        }), i.label = 5;
                                    case 5:
                                        if (!(m = r.n.getVideoPlayerTrackingData().vodID)) return [3, 10];
                                        i.label = 6;
                                    case 6:
                                        return i.trys.push([6, 8, , 9]), [4, r.o.apollo.client.query({
                                            query: d,
                                            variables: {
                                                id: m
                                            }
                                        })];
                                    case 7:
                                        return n = i.sent(), [3, 9];
                                    case 8:
                                        return h = i.sent(), r.j.error(h, "Failed to make query for VOd info in FollowEvent reporting.", {
                                            currentVODID: m
                                        }), [3, 9];
                                    case 9:
                                        (a = n && n.data && n.data.video) ? p = Object(c.a)(a.broadcastType): (p = null, r.j.error(new Error("GraphQL empty response"), "Query for video info in FollowEvent reporting return no data.", {
                                            currentVODID: m
                                        })), i.label = 10;
                                    case 10:
                                        return g = {
                                            channel: t.channelLogin,
                                            channel_id: t.channelID,
                                            channel_game: l,
                                            cta_visible: r.n.getVideoPlayerTrackingData().followCTAVisible,
                                            host_channel: t.hostChannelLogin,
                                            host_channel_id: t.hostChannelID,
                                            game: t.game,
                                            partner: o ? o.isPartner : null,
                                            src: t.src,
                                            vod_id: m,
                                            vod_type: p
                                        }, r.n.track(e, g), [2]
                                }
                            })
                        })
                    }(e, {
                        channelLogin: n.user && n.user.login || "",
                        channelID: n.user && n.user.id || "",
                        hostChannelLogin: t.props.hostChannelLogin,
                        hostChannelID: t.props.hostChannelID,
                        src: p.Channel
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
                            Object(l.d)(y, {
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
                            Object(l.d)(y, {
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
                            Object(l.d)(y, {
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
                var t = this.props.isHostedFollow && this.props.channelName ? Object(r.d)("Follow {username}", {
                    username: this.props.channelName
                }, "FollowButton") : Object(r.d)("Follow", "FollowButton");
                return a.createElement(h.u, i.__assign({
                    ariaLabel: t,
                    blurAfterClick: this.props.blurAfterClick,
                    "data-a-target": "follow-button",
                    "data-test-selector": "follow-button",
                    icon: this.props.followUIType === b.TextOnly ? void 0 : h._21.Heart,
                    onClick: e,
                    size: this.props.size,
                    tabIndex: this.props.tabIndex
                }, Object(h._58)(this.props)), this.props.followUIType === b.IconOnly ? null : t)
            }, t.prototype.renderUnfollowButton = function() {
                var e = Object(r.d)("Unfollow", "FollowButton");
                return a.createElement(h.u, i.__assign({
                    ariaLabel: e,
                    blurAfterClick: this.props.blurAfterClick,
                    "data-a-target": "unfollow-button",
                    "data-test-selector": "unfollow-button",
                    icon: this.props.unfollowUIType === b.TextOnly ? void 0 : h._21.Heart,
                    statusAlertIcon: this.props.unfollowUIType === b.TextOnly ? void 0 : h._21.Unheart,
                    statusAlertText: this.props.unfollowUIType === b.IconOnly ? "" : e,
                    tabIndex: this.props.tabIndex,
                    size: this.props.size,
                    onClick: this.toggleFollowing
                }, Object(h._58)(this.props)), this.props.unfollowUIType === b.IconOnly ? null : Object(r.d)("Followed", "FollowButton"))
            }, t.prototype.renderUnfollowButtonWithDropdown = function() {
                var e = this.props.balloonDirection ? this.props.balloonDirection : h.q.BottomRight,
                    t = this.getFollowData(),
                    n = t && t.user ? t.user.displayName : "",
                    i = this.state.disableNotifications ? Object(r.d)("Opt in to notifications to receive updates on this channel's activity, including when they go live.", "FollowButton") : Object(r.d)("You will be notified on this channel's activity, including when they go live.", "FollowButton");
                return a.createElement(h._7, {
                    display: h.Q.Flex,
                    className: "follow-btn",
                    "data-test-selector": "unfollow-button__dropdown"
                }, a.createElement(h._7, null, this.renderUnfollowButton()), a.createElement(o.a, {
                    display: h.Q.InlineFlex,
                    openByDefault: this.state.showDropdown
                }, a.createElement("button", {
                    tabIndex: this.props.tabIndex,
                    "aria-label": Object(r.d)("Dropdown", "FollowButton"),
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
                }, Object(r.d)("You are following {followingName}", {
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
                }, Object(r.d)("Notifications", "FollowButton")))), a.createElement(h._7, {
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
            }, t = i.__decorate([Object(s.a)(y, {
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
        var i = n("RH2O"),
            a = n("Aj/L"),
            r = n("TToO"),
            o = n("GiK3"),
            s = n("CIox"),
            l = n("j7/Y"),
            d = n("w9tK"),
            c = n("vH/s"),
            u = n("CSlQ"),
            p = n("YV3U"),
            f = n("kJau"),
            m = n("HW6M"),
            h = n("3zLD"),
            g = n("6sO2"),
            v = n("7vx8"),
            y = n("rqhk"),
            b = n("3HXW"),
            k = n("kLf9"),
            _ = n("QIXk"),
            S = n("0B06");

        function w(e, t) {
            return {
                startOffset: e,
                endOffset: t
            }
        }
        var O = n("Odds"),
            E = (n("Wc1Y"), 5),
            C = 60,
            N = 1;

        function T(e) {
            return parseFloat(e.toFixed(N))
        }
        var I = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        startOffset: -1,
                        endOffset: -1
                    }, t.onDrag = function(e) {
                        var n = e.endOffset - e.startOffset;
                        n > C || n < E || (t.setState({
                            startOffset: T(e.startOffset),
                            endOffset: T(e.endOffset)
                        }), t.props.playerConnection.sendMessage(Object(y.r)({
                            startOffset: t.state.startOffset,
                            endOffset: t.state.endOffset
                        })))
                    }, t.renderDurationPopover = function() {
                        var e = o.createElement(O.P, {
                            type: O._44.Strong
                        }, t.roundedPopoverDuration() + "s");
                        return o.createElement(O._30, {
                            background: O.m.AccentAlt2,
                            padding: {
                                y: 1,
                                x: 2
                            },
                            fullWidth: !0,
                            textAlign: O._40.Center,
                            overflow: O._10.Hidden
                        }, o.createElement(O.P, {
                            align: O._54.Middle,
                            fontSize: O.U.Size5
                        }, e, " / 60s"), o.createElement(O.P, {
                            align: O._54.Middle,
                            color: O.J.Alt2
                        }, Object(S.a)(t.state.startOffset) + " - " + Object(S.a)(t.state.endOffset)))
                    }, t.isReady = function() {
                        return t.props.isClipResolved && t.isValidOffset(t.state.startOffset) && t.isValidOffset(t.state.endOffset)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = this.isValidOffset(this.state.startOffset),
                        n = this.isValidOffset(this.state.endOffset);
                    if ((!t || !n) && e.initialOffsetStart && e.duration) {
                        var i = {},
                            a = w(e.initialOffsetStart, e.duration);
                        !t && this.isValidOffset(a.startOffset) && (i.startOffset = a.startOffset), !n && this.isValidOffset(a.endOffset) && (i.endOffset = a.endOffset), this.setState(i)
                    }
                }, t.prototype.componentDidUpdate = function() {
                    this.isReady() && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.isReady() && this.props.duration ? o.createElement(O._7, null, o.createElement(O._30, {
                        margin: {
                            y: 4
                        },
                        className: "clips-editor-slider-background"
                    }, o.createElement(b.a, {
                        startOffset: this.state.startOffset,
                        endOffset: this.state.endOffset,
                        minOffset: 0,
                        maxOffset: this.props.duration,
                        onLeftDrag: this.onDrag,
                        onRightDrag: this.onDrag,
                        onSliderDrag: this.onDrag,
                        popover: this.renderDurationPopover(),
                        color: b.b.Blue,
                        isSliderEnabled: !0,
                        handleSize: k.d.Medium
                    }, o.createElement(O._30, {
                        background: O.m.Overlay,
                        padding: {
                            top: 3,
                            bottom: 2
                        },
                        fullWidth: !0,
                        textAlign: O._40.Center,
                        overflow: O._10.Hidden
                    }))), o.createElement(_.a, {
                        clipSlug: this.props.slug,
                        location: c.PageviewLocation.ClipsEditing,
                        broadcasterName: this.props.broadcasterName,
                        startOffset: this.state.startOffset,
                        endOffset: this.state.endOffset
                    })) : this.renderPlaceholder()
                }, t.prototype.renderPlaceholder = function() {
                    return o.createElement(O._7, null, o.createElement(O.e, {
                        type: O.i.Bounce,
                        loop: !0,
                        enabled: !0,
                        duration: O.g.ExtraLong,
                        timing: O.h.EaseInOut
                    }, o.createElement(O._30, {
                        fullWidth: !0,
                        background: O.m.Alt2,
                        margin: {
                            y: 4
                        },
                        padding: {
                            y: 3
                        },
                        textAlign: O._40.Center
                    })), o.createElement(O.e, {
                        type: O.i.Bounce,
                        loop: !0,
                        enabled: !0,
                        duration: O.g.ExtraLong,
                        timing: O.h.EaseInOut,
                        delay: O.f.Medium
                    }, o.createElement(O._30, {
                        fullWidth: !0,
                        background: O.m.Alt2,
                        margin: {
                            y: 4
                        },
                        padding: {
                            top: 2,
                            bottom: 1
                        },
                        textAlign: O._40.Center
                    })))
                }, t.prototype.roundedPopoverDuration = function() {
                    var e = this.state.endOffset - this.state.startOffset;
                    return e >= C - .3 && (e = 60), e <= E + .3 && (e = 5), e.toFixed(1)
                }, t.prototype.isValidOffset = function(e) {
                    return !isNaN(e) && e >= 0
                }, t
            }(o.Component),
            F = Object(h.compose)(Object(y.t)({
                playerId: function(e) {
                    return e.slug
                }
            }), Object(u.d)("ClipsEditor"))(I),
            x = n("oMs9"),
            L = (n("Jbgd"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(O._30, {
                        background: O.m.Base,
                        className: "clips-edit-top-nav",
                        position: O._14.Fixed,
                        fullWidth: !0,
                        attachTop: !0,
                        attachLeft: !0,
                        display: O.Q.Flex,
                        justifyContent: O._6.Center,
                        alignItems: O.c.Center,
                        "data-test-selector": "clips-edit-top-nav-wrapper"
                    }, this.props.showMessage && o.createElement(O._7, {
                        display: O.Q.Flex,
                        justifyContent: O._6.Center,
                        alignItems: O.c.Center
                    }, o.createElement(O.P, {
                        color: O.J.Alt,
                        fontSize: O.U.Size5
                    }, Object(g.d)("Title this clip to publish", "ClipsEditTopNav")), o.createElement(O._7, {
                        margin: {
                            left: .5
                        },
                        display: O.Q.Flex,
                        alignItems: O.c.Center
                    }, o.createElement(O._20, {
                        asset: O._21.Lock,
                        type: O._22.Warn
                    }))))
                }, t
            }(o.Component)),
            D = Object(u.d)("ClipsEditTopNav", {
                autoReportInteractive: !0
            })(L),
            P = n("l21v"),
            j = function() {
                return function(e) {
                    var t = this;
                    this.timerId = null, this.start = function() {
                        t.timerId && t.stop(), t.timerId = setInterval(t.onInterval, t.intervalMillis)
                    }, this.stop = function() {
                        t.timerId && (clearInterval(t.timerId), t.timerId = null)
                    }, this.restart = function(e) {
                        void 0 === e && (e = 0), t.stop(), t.timerId = setTimeout(function() {
                            t.onInterval(), t.start()
                        }, e)
                    }, this.onInterval = e.onInterval, this.intervalMillis = e.intervalMillis
                }
            }(),
            R = (n("ZYcd"), {
                clappy: Object(P.f)("192361", 3),
                clappyDerp: Object(P.f)("192362", 3),
                clappyHype: Object(P.f)("192363", 3)
            });

        function M() {
            switch (Math.floor(17 * Math.random())) {
                case 0:
                    return {
                        icon: R.clappyHype,
                        text: Object(g.d)("Generating your clip...", "ClipsPostEditLoading")
                    };
                case 1:
                    return {
                        icon: R.clappyDerp,
                        text: Object(g.d)("Almost there...", "ClipsPostEditLoading")
                    };
                case 2:
                    return {
                        icon: R.clappyHype,
                        text: Object(g.d)("Just a few more seconds...", "ClipsPostEditLoading")
                    };
                case 3:
                    return {
                        icon: R.clappy,
                        text: Object(g.d)("Grabbing popcorn...", "ClipsPostEditLoading")
                    };
                case 4:
                    return {
                        icon: R.clappyHype,
                        text: Object(g.d)("Summoning your clip...", "ClipsPostEditLoading")
                    };
                case 5:
                    return {
                        icon: R.clappyHype,
                        text: Object(g.d)("The bits are breeding...", "ClipsPostEditLoading")
                    };
                case 6:
                    return {
                        icon: R.clappy,
                        text: Object(g.d)("Building the thing...", "ClipsPostEditLoading")
                    };
                case 7:
                    return {
                        icon: R.clappyDerp,
                        text: Object(g.d)("Spinning up hamsters...", "ClipsPostEditLoading")
                    };
                case 8:
                    return {
                        icon: R.clappy,
                        text: Object(g.d)("Fetching your stick...", "ClipsPostEditLoading")
                    };
                case 9:
                    return {
                        icon: R.clappyDerp,
                        text: Object(g.d)("Applying middle out compression...", "ClipsPostEditLoading")
                    };
                case 10:
                    return {
                        icon: R.clappy,
                        text: Object(g.d)("Searching for llamas...", "ClipsPostEditLoading")
                    };
                case 11:
                    return {
                        icon: R.clappyHype,
                        text: Object(g.d)("Turning on printer...", "ClipsPostEditLoading")
                    };
                case 12:
                    return {
                        icon: R.clappy,
                        text: Object(g.d)("Learning calculus...", "ClipsPostEditLoading")
                    };
                case 13:
                    return {
                        icon: R.clappyDerp,
                        text: Object(g.d)("Training patience...", "ClipsPostEditLoading")
                    };
                case 14:
                    return {
                        icon: R.clappy,
                        text: Object(g.d)("Looking for keys...", "ClipsPostEditLoading")
                    };
                case 15:
                    return {
                        icon: R.clappyDerp,
                        text: Object(g.d)("Baking cake...", "ClipsPostEditLoading")
                    };
                default:
                    return {
                        icon: R.clappyHype,
                        text: Object(g.d)("Searching for hold music...", "ClipsPostEditLoading")
                    }
            }
        }
        var U = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        percent: 0,
                        messageData: M()
                    }, t.onTimerUpdate = function() {
                        t.state.percent >= 100 ? t.countdownTimer.stop() : t.setState({
                            percent: t.state.percent + 1,
                            messageData: t.state.percent % 4 == 0 ? M() : t.state.messageData
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.countdownTimer = new j({
                        onInterval: this.onTimerUpdate,
                        intervalMillis: 500
                    }), this.countdownTimer.start()
                }, t.prototype.componentWillUnmount = function() {
                    this.countdownTimer.stop()
                }, t.prototype.render = function() {
                    return o.createElement(O._30, {
                        className: "clips-post-edit-loading",
                        padding: 4,
                        background: O.m.Base
                    }, o.createElement(O._7, {
                        display: O.Q.Flex,
                        justifyContent: O._6.Between,
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(O.P, {
                        type: O._44.Span,
                        fontSize: O.U.Size6
                    }, Object(g.d)("Publishing Clip!", "ClipsPostEditLoading")), o.createElement(O._7, {
                        display: O.Q.InlineBlock
                    }, this.state.percent, "%")), o.createElement(O._17, {
                        countdown: 50,
                        mask: !0
                    }), o.createElement(O._7, {
                        margin: {
                            top: 2
                        }
                    }, o.createElement(O._7, {
                        className: "clips-post-edit-loading-clappy",
                        display: O.Q.InlineBlock
                    }, o.createElement(O.e, {
                        duration: O.g.ExtraLong,
                        enabled: !0,
                        type: O.i.Bounce,
                        loop: !0,
                        timing: O.h.EaseOut
                    }, o.createElement(O.M, {
                        src: this.state.messageData.icon,
                        alt: Object(g.d)("Clappy looking good", "ClipsPostEditLoading")
                    })), o.createElement(O._7, {
                        position: O._14.Relative
                    }, o.createElement(O.p, {
                        direction: O.q.Right,
                        elevation: 2,
                        show: !0,
                        tailBackground: O.m.AccentAlt,
                        offsetY: "-3.8rem",
                        offsetX: "1.5rem"
                    }, o.createElement(O._30, {
                        padding: 1,
                        background: O.m.AccentAlt
                    }, this.state.messageData.text))))))
                }, t
            }(o.Component),
            B = n("4Gcm"),
            A = n("bhVC"),
            H = n("2hJ3"),
            V = n("WNmM"),
            Q = n("ZxOd"),
            W = (n("Ks2M"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.copyClipURL = function() {
                        Object(H.a)(Object(f.a)(t.props.slug));
                        var e = t.props,
                            n = e.clipId,
                            i = e.gameName,
                            a = e.broadcasterId,
                            r = e.broadcasterLogin;
                        Object(V.c)(n, i, a, r, c.PageviewLocation.ClipsEditing)(A.b.CopyInput)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(O._30, {
                        className: "clips-post-edit-share",
                        padding: 3,
                        background: O.m.Base
                    }, o.createElement(O._7, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(B.a, {
                        text: Object(f.a)(this.props.slug),
                        icon: !0,
                        iconAsset: O._21.Link,
                        onSelection: this.copyClipURL,
                        "data-a-target": "clip-share-input"
                    })), o.createElement(O._7, {
                        display: O.Q.Flex,
                        justifyContent: O._6.Center
                    }, o.createElement(Q.a, {
                        slug: this.props.slug,
                        pageType: c.PageviewLocation.ClipsEditing
                    })))
                }, t
            }(o.Component)),
            z = n("8cOU"),
            G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.isDonePolling(e) && !this.isDonePolling(this.props) && this.props.data.stopPolling()
                }, t.prototype.render = function() {
                    var e = this.props.data.clip,
                        t = null;
                    return t = this.isDonePolling() && e ? o.createElement(W, {
                        slug: this.props.slug,
                        clipId: e.id,
                        broadcasterId: e.broadcaster && e.broadcaster.id,
                        broadcasterLogin: e.broadcaster && e.broadcaster.login,
                        gameName: e.game && e.game.name
                    }) : o.createElement(U, null), o.createElement(O._7, {
                        display: O.Q.Flex,
                        justifyContent: O._6.Center,
                        padding: {
                            top: 4
                        }
                    }, t)
                }, t.prototype.isDonePolling = function(e) {
                    void 0 === e && (e = this.props);
                    var t = e.data,
                        n = t.loading,
                        i = t.clip;
                    return !n && i && i.creationState !== x.a.creating
                }, t
            }(o.Component),
            q = Object(v.a)(z, {
                options: function(e) {
                    return {
                        pollInterval: 1e3,
                        fetchPolicy: "network-only",
                        variables: {
                            slug: e.slug
                        }
                    }
                }
            })(G),
            K = n("ynxC"),
            J = n("0Ssf"),
            $ = n("nU46"),
            Y = n("dPTw"),
            X = (n("DkK3"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.slug,
                        t = o.createElement(O._7, {
                            alignItems: O.c.Center,
                            display: O.Q.Flex,
                            flexDirection: O.S.Row,
                            justifyContent: O._6.Start,
                            margin: {
                                y: 1
                            },
                            ellipsis: !0
                        }, o.createElement(O._30, {
                            display: O.Q.Flex,
                            fontSize: O.U.Size5
                        }, o.createElement(O.P, {
                            type: O._44.Span
                        }, Object(S.b)(this.props.createdAt)), o.createElement(O._7, {
                            margin: {
                                x: .5
                            }
                        }, "•")), o.createElement(J.a, {
                            slug: e,
                            ellipsis: !0
                        }));
                    return o.createElement(O._30, {
                        className: "clips-post-edit-sidebar",
                        display: O.Q.Flex,
                        flexDirection: O.S.Column,
                        background: O.m.Base
                    }, o.createElement(O._30, {
                        borderBottom: !0
                    }, o.createElement(K.a, {
                        slug: e
                    })), o.createElement(O._7, {
                        fullHeight: !0,
                        display: O.Q.Flex,
                        alignItems: O.c.Center
                    }, o.createElement(O._7, {
                        className: "clips-sidebar-info",
                        display: O.Q.Flex,
                        flexDirection: O.S.Column,
                        justifyContent: O._6.Around,
                        padding: 1
                    }, o.createElement(Y.a, {
                        slug: e
                    }), o.createElement($.a, {
                        slug: e
                    }), t)))
                }, t
            }(o.Component)),
            Z = n("vwd7"),
            ee = n("f8OD"),
            te = (n("D9gI"), function(e) {
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
                        var n = t.getClipCreationState(e);
                        return t.getRawMediaExists(e) && (n === x.a.created || n === x.a.failed)
                    }, t.getIsCreationFailed = function(e) {
                        return t.getRawMediaExists(e) && t.getClipCreationState(e) === x.a.failed
                    }, t.getClipCreationState = function(e) {
                        return e.data.clip && e.data.clip.rawMedia && e.data.clip.rawMedia.status || ""
                    }, t.getRawMediaExists = function(e) {
                        return Boolean(e.data.clip && e.data.clip.rawMedia)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    this.maybeRedirectToView(this.props), this.getIsClipResolved(this.props) ? this.props.data.stopPolling() : this.timeoutID = setTimeout(function() {
                        return e.setState({
                            isPollingTimedOut: !0
                        })
                    }, 7e4)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.maybeRedirectToView(e), this.getIsClipResolved(e) && (this.props.data.stopPolling(), clearTimeout(this.timeoutID), this.props.latencyTracking.reportInteractive())
                }, t.prototype.componentWillUnmount = function() {
                    this.timeoutID && clearTimeout(this.timeoutID), this.props.data.stopPolling()
                }, t.prototype.componentDidUpdate = function() {
                    var e = this.getIsClipResolved(this.props) && !this.getIsCreationFailed(this.props);
                    if (!this.props.isPostEdit && !this.hasSentEditClip && e && this.state.isPlayerIframeLoaded && this.props.data.clip && this.props.data.clip.rawMedia) {
                        var t = this.props.data.clip.rawMedia,
                            n = t.defaultClipInitialOffset,
                            i = t.duration,
                            a = t.videoURL,
                            r = w(n, i);
                        this.props.playerConnection.sendMessage(Object(y.r)({
                            startOffset: r.startOffset,
                            endOffset: r.endOffset,
                            videoUrl: a,
                            slug: this.props.slug
                        })), this.hasSentEditClip = !0
                    }
                }, t.prototype.render = function() {
                    if (this.state.isPollingTimedOut || this.getIsCreationFailed(this.props)) return o.createElement(s.b, {
                        to: Object(f.f)(p.a.Default)
                    });
                    var e = this.props.data.clip,
                        t = e && e.rawMedia,
                        n = this.getIsClipResolved(this.props),
                        i = null;
                    i = this.props.isPostEdit ? o.createElement(q, {
                        slug: this.props.slug
                    }) : o.createElement(F, {
                        isClipResolved: n,
                        slug: this.props.slug,
                        broadcasterName: e && e.broadcaster && e.broadcaster.displayName || "",
                        initialOffsetStart: t && t.defaultClipInitialOffset,
                        duration: t && t.duration
                    });
                    var a = m("clips-edit-clip-wrapper", {
                        "clips-post-edit-clip-wrapper": this.props.isPostEdit
                    });
                    return o.createElement(O._7, null, !this.props.isPostEdit && o.createElement(D, {
                        showMessage: n
                    }), o.createElement(O._7, {
                        className: a,
                        margin: {
                            top: 1
                        }
                    }, o.createElement(O._7, {
                        display: O.Q.Flex
                    }, o.createElement(O.j, {
                        ratio: O.k.Aspect16x9
                    }, o.createElement(O._7, {
                        position: O._14.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, o.createElement(Z.b, {
                        slug: this.props.slug,
                        onLoaded: this.onLoaded,
                        playerType: Z.a.Editing
                    }))), this.props.isPostEdit && o.createElement(X, {
                        slug: this.props.slug,
                        createdAt: e && e.createdAt
                    })), i))
                }, t.prototype.maybeRedirectToView = function(e) {
                    e.data.clip && e.data.clip.isPublished && g.o.history.push("/" + e.slug)
                }, t
            }(o.Component)),
            ne = Object(h.compose)(Object(y.t)({
                playerId: function(e) {
                    return e.slug
                }
            }), Object(v.a)(ee, {
                options: function(e) {
                    return {
                        pollInterval: 1e3,
                        fetchPolicy: "network",
                        variables: {
                            slug: e.slug
                        }
                    }
                }
            }), Object(u.d)("EditClip"))(te),
            ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.redirectToLoggedOutError = function(e) {
                        e.shouldRedirectToError && e.history.push(Object(f.f)(p.a.NotLoggedIn))
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.redirectToLoggedOutError(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.redirectToLoggedOutError(e)
                }, t.prototype.render = function() {
                    var e;
                    return "/:slug/edit" === this.props.match.path ? (e = this.props.match.params.slug, o.createElement(s.b, {
                        to: {
                            pathname: "/create",
                            state: r.__assign({}, this.props.location.state, {
                                slug: e
                            })
                        }
                    })) : this.props.location.state && this.props.location.state.slug ? (e = this.props.location.state.slug, o.createElement(O._7, null, o.createElement(ne, {
                        slug: e,
                        isPostEdit: !!this.props.location.state.isPostEdit
                    }))) : o.createElement(s.b, {
                        to: "/"
                    })
                }, t = r.__decorate([Object(u.d)("ClipsEditingPage", {
                    destination: d.a.ClipsEditing,
                    autoReportInteractive: !0
                }), Object(l.a)({
                    location: c.PageviewLocation.ClipsEditing
                })], t)
            }(o.Component);
        var ae = Object(i.b)(function(e) {
            return {
                shouldRedirectToError: Object(a.e)(e) && !Object(a.d)(e)
            }
        })(ie);
        n.d(t, "ClipsCreate", function() {
            return ae
        })
    },
    "8Wuk": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return u
        });
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = (n.n(r), n("6sO2")),
            s = n("2hJ3"),
            l = n("f6Cj"),
            d = n("Odds"),
            c = n("bdk8");
        n.n(c);
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput"
        }(i || (i = {}));
        var u = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.isLink() ? r.createElement("a", a.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(d._58)(n.props)), n.renderIcon()) : r.createElement("button", a.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(d._58)(n.props)), n.renderIcon())
                }, n.onShareClickHandler = function() {
                    n.props.onShareClick && n.props.onShareClick(n.props.type)
                }, n.clearIsCopiedStatus = function() {
                    n.setState({
                        isCopied: !1
                    })
                }, n.getUrl = function() {
                    return n.props.url || window.location.href
                }, n.copyPageUrl = function(e) {
                    e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(s.a)(n.getUrl()), n.setState({
                        isCopied: !0
                    })
                }, n.renderIcon = function() {
                    var e = n.getAssetFromType();
                    return r.createElement(d._7, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, r.createElement(d._20, {
                        asset: e,
                        width: 30,
                        height: 30
                    }))
                }, n.isLink = function() {
                    return n.props.type !== i.Copy
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
                        case i.Copy:
                            return n.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case i.Twitter:
                            return d._21.Twitter;
                        case i.Facebook:
                            return d._21.Facebook;
                        case i.VKontakte:
                            return d._21.VKontakte;
                        case i.Reddit:
                            return d._21.Reddit;
                        case i.Copy:
                        default:
                            return d._21.Copy
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
                        case i.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, n.getLinkTarget = function() {
                    var e = n.props,
                        t = e.text,
                        a = e.type,
                        r = n.getUrl(),
                        o = t || "";
                    switch (a) {
                        case i.Reddit:
                            return Object(l.b)(r, o);
                        case i.VKontakte:
                            return Object(l.d)(r);
                        case i.Facebook:
                            return Object(l.a)(r);
                        case i.Twitter:
                            return Object(l.c)(r, o);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return a.__extends(t, e), t.prototype.render = function() {
                return r.createElement(d._7, {
                    className: "social-button"
                }, r.createElement(d._47, {
                    label: this.getTooltipFromType(),
                    direction: d._49.Top
                }, this.renderLink()))
            }, t
        }(r.Component)
    },
    "8cOU": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsEditPoller"
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
                                    value: "creationState"
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
                end: 130
            }
        };
        n.loc.source = {
            body: "query ClipsEditPoller($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\ndisplayName\nlogin\n}\ngame {\nid\nname\n}\ncreationState\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    AoO8: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            return l(function(e) {
                e.video && (e.video = Object(o.b)(e.video));
                var t = a.stringify(e);
                return r.o.config.playerBaseURL + "/?" + t
            }(e), t)
        }, t.a = l;
        var i = n("TToO"),
            a = n("OAwv"),
            r = (n.n(a), n("6sO2")),
            o = n("JpYe"),
            s = {
                height: 378,
                width: 620,
                allowScrolling: !0,
                allowFullscreen: !0
            };

        function l(e, t) {
            void 0 === t && (t = s);
            var n, a, r = i.__assign({}, s, t),
                o = '<iframe src="' + e + '" frameborder="0" ' + (r.allowFullscreen ? 'allowfullscreen="true" ' : "") + (r.allowScrolling ? "" : 'scrolling="no" ') + 'height="' + r.height + '" width="' + r.width + '"></iframe>';
            return r.textLink && (o += (n = r.textLink.url, a = r.textLink.text, '<a href="' + n + '" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">' + a + "</a>")), o
        }
    },
    CBaN: function(e, t) {},
    CFVp: function(e, t, n) {
        "use strict";
        t.a = function() {
            if (!l) {
                var e = [],
                    t = {};
                Object.keys(r).forEach(function(n) {
                    var i = c(n, r[n]);
                    e.push(i), t[n.toLowerCase()] = i
                }), l = {
                    orderedActions: e,
                    indexedActions: t
                }
            }
            return l
        }, t.b = function() {
            d || (d = function(e) {
                if (l) return l.indexedActions[e.toLowerCase()];
                return c(e, r[e])
            }("Cheer"));
            return d
        };
        var i = n("I89S"),
            a = n("3iBR"),
            r = {
                Cheer: a.d,
                Kreygasm: a.d,
                Kappa: a.d,
                Muxy: a.e,
                Streamlabs: a.e,
                SwiftRage: a.d,
                VoHiYo: a.d
            },
            o = ["LIGHT", "DARK"],
            s = [1, 1.5, 2, 3, 4],
            l = null;
        var d = null;

        function c(e, t) {
            var n = [i.a.Red, i.a.Blue, i.a.Green, i.a.Purple, i.a.Gray],
                a = new Map,
                r = [];
            if ("Cheer" === e) {
                var o = u(e, i.a.Yellow);
                a.set(i.a.Yellow, o), r.push(o)
            }
            return r.push.apply(r, n.map(function(t) {
                var n = u(e, t);
                return a.set(t, n), n
            })), {
                prefix: e,
                type: t,
                tiers: r,
                orderedTiers: r,
                indexedTiers: a
            }
        }

        function u(e, t) {
            for (var n = [], i = {}, r = 0, l = o; r < l.length; r++)
                for (var d = l[r], c = 0, u = s; c < u.length; c++) {
                    var f = u[c];
                    i[d] || (i[d] = {
                        animated: new Map,
                        static: new Map
                    });
                    var m = p(e, d, !0, t, f);
                    n.push(m), i[d].animated.set(f, m.url);
                    var h = p(e, d, !1, t, f);
                    n.push(h), i[d].static.set(f, h.url)
                }
            return {
                id: e + ";" + t,
                bits: t,
                color: a.f[t],
                images: n,
                indexedImages: i
            }
        }

        function p(e, t, n, i, a) {
            var r = n ? "gif" : "png";
            return {
                theme: t,
                isAnimated: n,
                dpiScale: a,
                url: "https://d3aqoihi2n8ty8.cloudfront.net/actions/" + e.toLowerCase() + "/" + t.toLowerCase() + "/" + (n ? "animated" : "static") + "/" + i + "/" + a + "." + r
            }
        }
    },
    D9gI: function(e, t) {},
    DkK3: function(e, t) {},
    I89S: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e[e.Gray = 1] = "Gray", e[e.Purple = 100] = "Purple", e[e.Green = 1e3] = "Green", e[e.Blue = 5e3] = "Blue", e[e.Red = 1e4] = "Red", e[e.Yellow = 1e5] = "Yellow"
            }(i || (i = {}))
    },
    Jbgd: function(e, t) {},
    Jg0G: function(e, t) {},
    Jjeq: function(e, t) {},
    JpYe: function(e, t, n) {
        "use strict";
        t.e = function(e, t, n, a) {
            var o = a || l(t),
                c = "";
            o && (c = "?sort=" + function(e) {
                switch (e) {
                    case s.b:
                        return i.Popular;
                    case s.a:
                        return i.Newest;
                    default:
                        var t = e;
                        return t
                }
            }(o));
            var u = n ? n.toLowerCase() : function(e) {
                var t = d(e);
                return t ? t.toLowerCase() : "all"
            }(t);
            r.o.history.push(e + "/" + u + c)
        }, t.d = l, t.c = d, t.a = function(e) {
            var t = a.parse(e.location.search);
            return e.match.params.collectionID || t.collection || ""
        }, t.f = c, t.b = function(e) {
            if ("" === e) return "";
            if (e.startsWith("v")) return e;
            return "v" + e
        };
        var i, a = n("OAwv"),
            r = (n.n(a), n("6sO2")),
            o = n("6WAQ"),
            s = n("3yQz");

        function l(e) {
            return c(a.parse(e.location.search).sort || "")
        }

        function d(e) {
            switch (e.match.params.filter) {
                case o.a.Archive.toLowerCase():
                    return o.a.Archive;
                case o.a.Highlight.toLowerCase():
                    return o.a.Highlight;
                case o.a.Upload.toLowerCase():
                    return o.a.Upload;
                case o.a.PastPremiere.toLowerCase():
                    return o.a.PastPremiere;
                default:
                    return
            }
        }

        function c(e) {
            switch (e.toUpperCase()) {
                case s.b:
                    return s.b;
                case s.a:
                    return s.a;
                default:
                    return null
            }
        }! function(e) {
            e.Popular = "views", e.Newest = "time"
        }(i || (i = {}))
    },
    Ks2M: function(e, t) {},
    QIXk: function(e, t, n) {
        "use strict";
        var i, a, r, o = n("TToO"),
            s = n("GiK3"),
            l = n("6sO2"),
            d = n("7vx8"),
            c = n("6BvN"),
            u = n("oIkB"),
            p = n("vH/s"),
            f = function(e, t, n, i, a) {
                var r = Date.now() / 1e3;
                l.o.tracking.track(p.SpadeEventType.ClipEdit, {
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
            m = n("CIox");
        ! function(e) {
            e.AlreadyPublished = "already_published", e.EditingWindowExpired = "editing_window_expired", e.InvalidSpeedDuration = "invalid_speed_duration", e.InvalidDuration = "invalid_duration", e.InvalidTitle = "invalid_title", e.Unknown = "unknown"
        }(i || (i = {})),
        function(e) {
            e.InvalidTitle = "invalid_title"
        }(a || (a = {})),
        function(e) {
            e.Unsent = "unsent", e.Sending = "sending", e.Error = "error", e.Successful = "successful"
        }(r || (r = {}));
        var h, g = 5,
            v = 60,
            y = n("Odds"),
            b = n("isxN"),
            k = {
                publishState: r.Unsent,
                errorMessage: null
            },
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = k, t.onError = function(e) {
                        t.setState({
                            publishState: r.Error,
                            errorMessage: e
                        }), t.props.onError(e)
                    }, t.onPublish = function() {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return o.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.setState({
                                                publishState: r.Sending
                                            }), e = this.props.endOffset - this.props.startOffset, this.props.startOffset > this.props.endOffset || e < g || e > v) return this.onError(i.InvalidDuration), [2];
                                        if ("" === this.props.title.trim()) return this.onError(h.emptySubmission), [2];
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
                return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.state.publishState === r.Error && e.title.length > 0 && this.props.title !== e.title && this.setState(k), e.isSubmitted && !this.props.isSubmitted && this.onPublish()
                }, t.prototype.render = function() {
                    var e = this.state.publishState === r.Error,
                        t = this.state.publishState === r.Sending;
                    return s.createElement(y._7, null, s.createElement(y.u, {
                        onClick: this.onPublish,
                        disabled: e,
                        state: t ? y.z.Loading : y.z.Default,
                        size: y.y.Large,
                        blurAfterClick: !0
                    }, Object(l.d)("Publish", "ClipsPublishButton")))
                }, t = o.__decorate([Object(d.a)(b, {
                    name: "publishClip"
                })], t)
            }(s.Component),
            S = Object(m.f)(_),
            w = n("2TZ0"),
            O = {
                TITLE_INPUT: "cmgr-title-input",
                TITLE_SAVE: "cmgr-title-save",
                TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
            };
        ! function(e) {
            e.emptySubmission = "emptySubmission", e.characterLimitReached = "characterLimitReached", e.channelViolation = "channelViolation", e.notCurator = "notCurator", e.unknown = "unknown"
        }(h || (h = {}));
        var E = 100,
            C = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderForClipsViewing = function() {
                        return s.createElement("div", null, s.createElement(y._41, {
                            id: O.TITLE_INPUT,
                            "data-test-selector": O.TITLE_INPUT,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        }), s.createElement(y._7, {
                            display: y.Q.Flex,
                            justifyContent: y._6.Between,
                            alignItems: y.c.Center,
                            padding: {
                                top: 1
                            }
                        }, n.state.showError ? s.createElement(y.P, {
                            color: y.J.Error
                        }, n.getErrorMessage()) : s.createElement(y.P, {
                            color: y.J.Alt2
                        }, n.getRemainingCharacterText()), s.createElement(y._7, {
                            display: y.Q.Flex
                        }, s.createElement(y.u, {
                            "data-test-selector": O.TITLE_SAVE,
                            onClick: n.props.onCancel,
                            type: y.A.Hollow
                        }, Object(l.d)("Cancel", "ClipsTitleEdit")), s.createElement(y._7, {
                            padding: {
                                left: 1
                            }
                        }, n.renderSave()))))
                    }, n.renderForManager = function() {
                        return s.createElement(y.V, {
                            id: O.TITLE_INPUT,
                            label: Object(l.d)("Title", "ClipsTitleEdit"),
                            hint: n.getRemainingCharacterText()
                        }, s.createElement(y._7, {
                            display: y.Q.Flex,
                            flexWrap: y.T.NoWrap
                        }, s.createElement(y._7, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, s.createElement(y._3, {
                            id: O.TITLE_INPUT,
                            "data-test-selector": O.TITLE_INPUT,
                            type: y._4.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        })), s.createElement(y._7, {
                            flexShrink: 0,
                            flexGrow: 0
                        }, s.createElement(y._7, {
                            position: y._14.Relative
                        }, n.renderSave(), s.createElement(y._5, {
                            onClick: n.dismissMessage,
                            "data-test-selector": O.TITLE_SAVE_TOOLTIP
                        }, s.createElement(y.p, {
                            direction: y.q.TopRight,
                            show: n.state.showError || n.state.showSuccess
                        }, s.createElement(y._7, {
                            padding: 1
                        }, n.state.showSuccess ? s.createElement(y.P, {
                            color: y.J.Link
                        }, Object(l.d)("Title Saved!", "ClipsTitleEdit")) : s.createElement(y.P, {
                            color: y.J.Error
                        }, n.getErrorMessage()))))))))
                    }, n.renderForEdit = function() {
                        var e;
                        if ((n.props.startOffset || 0 === n.props.startOffset) && n.props.endOffset) return e = n.state.showError ? s.createElement(y.P, {
                            color: y.J.Error
                        }, n.getErrorMessage()) : 0 === n.state.title.length && n.props.broadcasterName ? s.createElement(y.P, {
                            color: y.J.Alt2
                        }, Object(l.d)("Clips with titles get more views. Help {broadcasterName} get discovered by adding a title.", {
                            broadcasterName: n.props.broadcasterName
                        }, "ClipsTitleEdit")) : s.createElement(y.P, {
                            color: y.J.Alt2
                        }, n.getRemainingCharacterText()), s.createElement(y._7, null, s.createElement(y._7, {
                            fullWidth: !0
                        }, s.createElement(y._3, {
                            id: O.TITLE_INPUT,
                            "data-test-selector": O.TITLE_INPUT,
                            type: y._4.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown,
                            placeholder: Object(l.d)("Add a title (required)", "ClipsTitleEdit"),
                            autoFocus: !0
                        })), s.createElement(y._7, {
                            display: y.Q.Flex,
                            justifyContent: y._6.Between,
                            alignItems: y.c.Center,
                            padding: {
                                top: 1
                            }
                        }, e, s.createElement(y._7, {
                            display: y.Q.Flex
                        }, s.createElement(y._7, {
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
                        return s.createElement(y.u, {
                            "data-test-selector": O.TITLE_SAVE,
                            disabled: !n.canSaveEditedTitle(),
                            onClick: n.editClipTitle
                        }, Object(l.d)("Save", "ClipsTitleEdit"))
                    }, n.onPublishClipError = function(e) {
                        n.setState({
                            showSuccess: !1,
                            showError: !0,
                            error: n.errorMessageToError(e)
                        })
                    }, n.getRemainingCharacterText = function() {
                        return Object(l.d)("{characterCount, number} remaining", {
                            characterCount: E - n.state.title.length
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
                        var t = e.currentTarget.value.slice(0, E);
                        n.setState({
                            title: t,
                            showError: !1,
                            showSuccess: !1
                        })
                    }, n.editClipTitle = function() {
                        return o.__awaiter(n, void 0, void 0, function() {
                            var e, t;
                            return o.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if ("" === this.state.title.trim()) return this.setState({
                                            showError: !0,
                                            error: h.emptySubmission
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
                return o.__extends(t, e), t.prototype.render = function() {
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
                    return e.includes("403:") || e.toLowerCase() === i.InvalidTitle.toLowerCase() || e.toLowerCase() === a.InvalidTitle.toLowerCase() ? h.channelViolation : e === h.emptySubmission ? h.emptySubmission : h.unknown
                }, t
            }(s.Component),
            N = Object(d.a)(w, {
                name: "editTitle"
            })(C);
        n.d(t, !1, function() {
            return O
        }), n.d(t, "b", function() {
            return h
        }), n.d(t, !1, function() {
            return C
        }), n.d(t, "a", function() {
            return N
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
    WNmM: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d
        }), n.d(t, "b", function() {
            return c
        }), n.d(t, "c", function() {
            return p
        });
        var i, a, r = n("6sO2"),
            o = n("8Wuk"),
            s = n("vH/s"),
            l = ((i = {})[o.b.Twitter] = "twitter", i[o.b.Reddit] = "reddit", i[o.b.VKontakte] = "vkontakte", i[o.b.Facebook] = "facebook", i[o.b.Copy] = "link", i[o.b.CopyInput] = "option_link", i),
            d = {
                MyClips: "MyClips",
                ClipsOfMyChannel: "ClipsOfMyChannel"
            },
            c = {
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
                return function(o) {
                    r.o.tracking.track(s.SpadeEventType.VideoShare, {
                        vod_id: e,
                        vod_type: "clip",
                        share_platform: l[o],
                        location: u[a],
                        game: t,
                        channel_id: Number(n || 0),
                        channel: i,
                        live: null
                    })
                }
            }
    },
    Wc1Y: function(e, t) {},
    XOun: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("vH/s"),
            s = "https://help.twitch.tv/customer/portal/articles/2918323-clip-champs-guide",
            l = function(e) {
                var t = e.type;
                r.o.tracking.track(o.SpadeEventType.ClipChampHelpClick, {
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
                    alt: Object(r.d)("clip champ badge", "ClipsCurator"),
                    className: "clips-champ-badge-img",
                    src: "https://s.jtvnw.net/jtv_user_pictures/hosted_images/clipchampbadge"
                }))
            }, t
        }(a.Component)
    },
    YhVV: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = [];
            if (!e || !t) return n;
            var a = /\S+/g,
                r = a.exec(e);
            for (; r;) {
                var o = r[0],
                    s = t[o];
                if (s && "function" != typeof s) {
                    var l = Object(i.d)(e.slice(0, r.index)),
                        d = l ? l.length : r.index;
                    n[d] = {
                        startIndex: d,
                        endIndex: d + o.length,
                        data: {
                            alt: o,
                            images: {
                                themed: !1,
                                sources: {
                                    "1x": Object(i.f)(s.id, 1),
                                    "2x": Object(i.f)(s.id, 2),
                                    "4x": Object(i.f)(s.id, 4)
                                }
                            }
                        }
                    }
                }
                r = a.exec(e)
            }
            return n
        }, t.a = function(e) {
            for (var t = {}, n = 0, i = e; n < i.length; n++)
                for (var o = i[n], s = 0, l = o.emotes; s < l.length; s++)
                    for (var d = l[s], c = a[d.token] || [d.token], u = 0, p = c; u < p.length; u++) {
                        var f = p[u];
                        t[f] && o.id === r || (t[f] = {
                            id: d.id,
                            token: f
                        })
                    }
            return t
        };
        var i = n("l21v");
        var a = {
                "\\:\\&gt\\;": [":>"],
                "\\&gt\\;\\(": [">("],
                "\\&lt\\;\\]": ["<]"],
                "\\&lt\\;3": ["<3"],
                ":-?(?:7|L)": [":-7", ":-L", ":7", ":L"],
                "[oO](_|\\.)[oO]": ["o_o", "O_O", "o_O", "O_o", "o.o", "O.O", "o.O", "O.o"],
                "\\;-?(p|P)": [";-p", ";-P", ";p", ";P"],
                "\\;-?\\)": [";-)", ";)"],
                "\\:-?(o|O)": [":-o", ":-O", ":o", ":O"],
                "\\:-?(p|P)": [":-p", ":-P", ":p", ":P"],
                "\\:-?(S|s)": [":-S", ":-s", ":s", ":S"],
                "\\:-?[\\\\/]": [":-/", ":-\\", ":/", ":\\"],
                "\\:-?[z|Z|\\|]": [":-|", ":-Z", ":-z", ":|", ":Z", ":z"],
                "\\:-?\\(": [":-(", ":("],
                "\\:-?\\)": [":-)", ":)"],
                "\\:-?D": [":-D", ":D"],
                "#-?[\\\\/]": ["#-/", "#-\\", "#/", "#\\"],
                "B-?\\)": ["B-)", "B)"],
                "R-?\\)": ["R-)", "R)"]
            },
            r = "0"
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
    ZYcd: function(e, t) {},
    ZxOd: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("xX9u"),
            s = n("bhVC"),
            l = n("8Wuk"),
            d = n("+Znq"),
            c = n("7vx8"),
            u = n("AoO8"),
            p = n("yDzg"),
            f = n("CSlQ"),
            m = n("sEID"),
            h = n("WNmM"),
            g = n("46tX"),
            v = n("rCmJ"),
            y = n("2hJ3"),
            b = n("f6Cj"),
            k = n("Odds"),
            _ = (n("Jjeq"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getUrl = function() {
                        return t.props.url || window.location.href
                    }, t.onShareClick = function() {
                        t.props.onShareClick && t.props.onShareClick(t.props.type)
                    }, t.copyPageUrl = function() {
                        t.onShareClick(), Object(y.a)(t.getUrl())
                    }, t.renderIcon = function() {
                        var e = t.getAssetFromType();
                        return a.createElement(k._7, {
                            className: "clips-mobile-share-sheet__share-icon clips-social-button__icon " + t.addSocialClassModifier("clips-social-button__icon")
                        }, a.createElement(k._20, {
                            asset: e,
                            fill: !0
                        }))
                    }, t.isLink = function() {
                        return t.props.type !== l.b.Copy
                    }, t.getAssetFromType = function() {
                        switch (t.props.type) {
                            case l.b.Twitter:
                                return k._21.Twitter;
                            case l.b.Facebook:
                                return k._21.Facebook;
                            case l.b.VKontakte:
                                return k._21.VKontakte;
                            case l.b.Reddit:
                                return k._21.Reddit;
                            case l.b.Copy:
                            default:
                                return k._21.Copy
                        }
                    }, t.getLabelFromType = function() {
                        switch (t.props.type) {
                            case l.b.Twitter:
                                return Object(r.d)("Twitter", "ClipsSocialShare");
                            case l.b.Facebook:
                                return Object(r.d)("Facebook", "ClipsSocialShare");
                            case l.b.VKontakte:
                                return Object(r.d)("VK", "ClipsSocialShare");
                            case l.b.Reddit:
                                return Object(r.d)("Reddit", "ClipsSocialShare");
                            case l.b.Copy:
                                return Object(r.d)("Copy", "ClipsSocialShare");
                            default:
                                return ""
                        }
                    }, t.addSocialClassModifier = function(e) {
                        switch (t.props.type) {
                            case l.b.Twitter:
                                return e + "--twitter";
                            case l.b.Reddit:
                                return e + "--reddit";
                            case l.b.Facebook:
                                return e + "--facebook";
                            case l.b.VKontakte:
                                return e + "--vkontakte";
                            case l.b.Copy:
                                return e + "--copy";
                            default:
                                return ""
                        }
                    }, t.getLinkTarget = function() {
                        var e = t.props,
                            n = e.text,
                            i = e.type,
                            a = t.getUrl(),
                            r = n || "";
                        switch (i) {
                            case l.b.Reddit:
                                return Object(b.b)(a, r);
                            case l.b.VKontakte:
                                return Object(b.d)(a);
                            case l.b.Facebook:
                                return Object(b.a)(a);
                            case l.b.Twitter:
                                return Object(b.c)(a, r);
                            default:
                                return ""
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = a.createElement(k._7, {
                        className: "clips-mobile-share-sheet__row",
                        display: k.Q.Flex,
                        alignItems: k.c.Center,
                        key: this.props.type,
                        margin: {
                            bottom: 1,
                            x: 2
                        }
                    }, this.renderIcon(), a.createElement(k._30, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(k.P, {
                        type: k._44.Span
                    }, this.getLabelFromType())));
                    return this.renderLink(e)
                }, t.prototype.renderLink = function(e) {
                    var t = "clips-social-button__link " + this.addSocialClassModifier("clips-social-button__link");
                    return this.isLink() ? a.createElement("a", {
                        href: this.getLinkTarget(),
                        target: "_blank",
                        onClick: this.onShareClick,
                        className: t
                    }, e) : a.createElement("div", {
                        onClick: this.copyPageUrl,
                        className: t
                    }, e)
                }, t
            }(a.Component)),
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isModalOpen: !1,
                        isCopiedModalOpen: !1
                    }, t.onToggleShareButton = function() {
                        t.setState(function(e) {
                            return {
                                isModalOpen: !e.isModalOpen
                            }
                        })
                    }, t.onShareClick = function(e) {
                        t.setState({
                            isModalOpen: !1
                        }), e === l.b.Copy && (t.setState({
                            isCopiedModalOpen: !0
                        }), setTimeout(function() {
                            return t.setState({
                                isCopiedModalOpen: !1
                            })
                        }, 1500))
                    }, t.onClickOut = function() {
                        t.setState({
                            isModalOpen: !1
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.props.clip.id && e.clip.id && this.props.clip.id !== e.clip.id && this.setState({
                        isModalOpen: !1
                    })
                }, t.prototype.render = function() {
                    var e = this,
                        t = Object(r.d)("Share Clip", "ClipsSocialShare"),
                        n = Object(r.d)("Copied!", "ClipsSocialShare");
                    return a.createElement(k._7, {
                        display: k.Q.Flex,
                        justifyContent: k._6.End,
                        alignItems: k.c.Center,
                        margin: {
                            top: 1,
                            bottom: 1
                        }
                    }, a.createElement(k.u, {
                        type: k.A.Hollow,
                        onClick: this.onToggleShareButton,
                        "data-test-selector": "social-share-mobile-button"
                    }, t), this.state.isModalOpen && a.createElement(k._30, {
                        position: k._14.Fixed,
                        background: k.m.Overlay,
                        zIndex: k._57.Above,
                        attachLeft: !0,
                        attachTop: !0,
                        fullHeight: !0,
                        fullWidth: !0
                    }, a.createElement(v.a, {
                        onClickOut: this.onClickOut
                    }, a.createElement(k._7, {
                        position: k._14.Absolute,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        className: "clips-mobile-share-sheet",
                        display: k.Q.Flex,
                        flexDirection: k.S.Column,
                        zIndex: k._57.Above,
                        "data-test-selector": "social-share-mobile-menu-root"
                    }, a.createElement(k.e, {
                        type: k.i.SlideInBottom,
                        enabled: this.state.isModalOpen
                    }, a.createElement(k._30, {
                        background: k.m.Base,
                        elevation: 3,
                        padding: {
                            bottom: 2
                        }
                    }, a.createElement(k._30, {
                        className: "clips-mobile-share-sheet__title",
                        display: k.Q.Flex,
                        flexDirection: k.S.Row,
                        justifyContent: k._6.Between,
                        alignItems: k.c.Center,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            right: 1,
                            left: 2
                        },
                        borderBottom: !0
                    }, a.createElement(k.P, {
                        bold: !0,
                        color: k.J.Alt,
                        type: k._44.Span,
                        fontSize: k.U.Size6,
                        "data-test-selector": "social-share-mobile-menu-title"
                    }, t), a.createElement(k.v, {
                        "data-test-selector": "social-share-mobile-menu-close",
                        icon: k._21.Close,
                        ariaLabel: "Close Share",
                        size: k.w.Large,
                        onClick: this.onToggleShareButton
                    })), a.createElement(k._7, null, m.b.map(function(t) {
                        return a.createElement(_, {
                            key: t.type,
                            type: t.type,
                            text: e.props.clip.title,
                            url: Object(p.a)(e.props.clip.url, t.params),
                            onShareClick: e.onShareClick
                        })
                    }))))))), this.state.isCopiedModalOpen && a.createElement(k._7, {
                        fullWidth: !0,
                        attachLeft: !0,
                        attachBottom: !0,
                        className: "clips-mobile-share-sheet",
                        position: k._14.Fixed,
                        zIndex: k._57.Above
                    }, a.createElement(k.e, {
                        type: k.i.SlideInBottom,
                        duration: k.g.Short,
                        enabled: this.state.isCopiedModalOpen
                    }, a.createElement(k._30, {
                        padding: {
                            x: 1,
                            y: 1
                        },
                        background: k.m.Base,
                        elevation: 3,
                        borderTop: !0,
                        display: k.Q.Flex,
                        alignItems: k.c.Center
                    }, a.createElement(k._7, {
                        margin: {
                            right: .5
                        }
                    }, a.createElement(k.e, {
                        type: k.i.BounceIn,
                        duration: k.g.Medium,
                        delay: k.f.Short,
                        enabled: this.state.isCopiedModalOpen
                    }, a.createElement(k._20, {
                        type: k._22.Success,
                        asset: k._21.Check
                    }))), a.createElement(k.P, {
                        type: k._44.Span,
                        fontSize: k.U.Size4,
                        bold: !0
                    }, n)))))
                }, t
            }(a.Component),
            w = n("bnNq"),
            O = (n("twHn"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.trackLinkShare = function() {
                        var e = t.props.data.clip;
                        if (e) return Object(h.c)(e.id, e.game && e.game.name, e.broadcaster && e.broadcaster.id, e.broadcaster && e.broadcaster.login, t.props.pageType)(s.b.CopyInput)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.data.clip;
                    if (!t && !Object(g.d)(window.navigator.userAgent)) return a.createElement(k._7, null, this.renderPlaceholders());
                    if (!t && Object(g.d)(window.navigator.userAgent)) return a.createElement(k._7, null, this.renderMobilePlaceholders());
                    if (Object(g.d)(window.navigator.userAgent)) return a.createElement(S, {
                        clip: t
                    });
                    var n = Object(r.d)("More", "ClipsSocialShare");
                    return a.createElement(k._7, {
                        display: k.Q.Flex,
                        justifyContent: k._6.End,
                        alignItems: k.c.Center,
                        margin: {
                            y: 1
                        }
                    }, m.b.map(function(n) {
                        return a.createElement(k._7, {
                            display: k.Q.InlineBlock,
                            key: n.type,
                            margin: {
                                right: 1
                            }
                        }, a.createElement(l.a, {
                            key: n.type,
                            type: n.type,
                            text: t.title,
                            url: Object(p.a)(t.url, n.params),
                            onShareClick: Object(h.c)(t.id, t.game && t.game.name, t.broadcaster && t.broadcaster.id, t.broadcaster && t.broadcaster.login, e.props.pageType)
                        }))
                    }), a.createElement(k._7, {
                        display: k.Q.InlineBlock,
                        position: k._14.Relative
                    }, a.createElement(d.a, null, a.createElement(k.u, {
                        type: k.A.Hollow,
                        ariaLabel: n,
                        "data-test-selector": "social-share-button"
                    }, n), a.createElement(k.p, {
                        direction: k.q.BottomRight,
                        noTail: !0
                    }, a.createElement(k._7, {
                        padding: 1
                    }, a.createElement(k.V, {
                        id: "social-share-link",
                        orientation: k.W.Vertical,
                        label: Object(r.d)("Link", "ClipsSocialShare"),
                        "data-test-selector": "social-share-link"
                    }, a.createElement(o.a, {
                        value: t.url,
                        onClick: this.trackLinkShare
                    })), a.createElement(k._7, {
                        padding: {
                            top: 1
                        }
                    }, a.createElement(k.V, {
                        id: "social-share-link",
                        orientation: k.W.Vertical,
                        label: Object(r.d)("Embed Link", "ClipsSocialShare"),
                        "data-test-selector": "social-share-embed-link"
                    }, a.createElement(o.a, {
                        value: Object(u.a)(this.props.data.clip.embedURL),
                        onClick: this.trackLinkShare
                    }))))))))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return a.createElement(k.e, {
                        type: k.i.FadeIn,
                        duration: k.g.Medium,
                        enabled: !0
                    }, a.createElement(k._7, {
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: k.Q.Flex,
                        justifyContent: k._6.End
                    }, a.createElement(k._7, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(k._13, {
                        width: 30,
                        height: 30
                    })), a.createElement(k._7, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(k._13, {
                        width: 30,
                        height: 30
                    })), a.createElement(k._7, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(k._13, {
                        width: 30,
                        height: 30
                    })), a.createElement(k._7, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(k._13, {
                        width: 30,
                        height: 30
                    })), a.createElement(k._7, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(k._13, {
                        width: 46,
                        height: 30
                    }))))
                }, t.prototype.renderMobilePlaceholders = function() {
                    return a.createElement(k._7, {
                        margin: {
                            y: 1
                        },
                        display: k.Q.Flex,
                        justifyContent: k._6.End
                    }, a.createElement(k._7, null, a.createElement(k._13, {
                        width: 72,
                        height: 30
                    })))
                }, t = i.__decorate([Object(f.d)("ClipsSocialShare"), Object(c.a)(w)], t)
            }(a.Component));
        n.d(t, "a", function() {
            return O
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
    bnNq: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsSocialShare"
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
            body: "query ClipsSocialShare($slug: ID!) {\nclip(slug: $slug) {\nid\nurl\nembedURL\ntitle\ngame {\nid\nname\n}\nbroadcaster {\nid\nlogin\n}\n}\n}",
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
            r = n("6sO2"),
            o = n("7vx8"),
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
                    if (!this.props.data.clip || this.props.data.loading) return a.createElement(l._7, null, this.renderPlaceholders());
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
                    }, Object(r.d)("{views} views", {
                        views: Object(r.e)(this.props.data.clip.viewCount)
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
                }, t = i.__decorate([Object(s.d)("ClipsViewCount"), Object(o.a)(d)], t)
            }(a.Component);
        n.d(t, "a", function() {
            return c
        })
    },
    e1CU: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            var n = e,
                i = !1;
            n ? n.split("").map(function(e) {
                return e.charCodeAt(0) > 127
            }).reduce(function(e, t) {
                return e || t
            }) && (i = !0) : n = t;
            return {
                userDisplayName: n,
                isIntl: i
            }
        }
    },
    f6Cj: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return Object(i.a)(a, {
                u: e
            })
        }, t.c = function(e, t) {
            return Object(i.a)(r, {
                url: e,
                text: t
            })
        }, t.b = function(e, t) {
            return Object(i.a)(o, {
                url: e,
                title: t
            })
        }, t.d = function(e) {
            return Object(i.a)(s, {
                url: e
            })
        };
        var i = n("yDzg"),
            a = "https://www.facebook.com/sharer/sharer.php",
            r = "https://www.twitter.com/share",
            o = "https://www.reddit.com/submit",
            s = "https://vk.com/share.php"
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
                                    value: "isPublished"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 255
            }
        };
        n.loc.source = {
            body: "query ClipsRawMedia($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\ndisplayName\n}\nrawMedia {\ndefaultClipInitialOffset\nduration\nfilmStripFrames\nfilmStripSecondsPerFrame\nframeHeight\nframeWidth\nspritesheetURL\nstatus\nvideoURL\n}\nisPublished\ncreatedAt\n}\n}",
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
            r = n("+xm8"),
            o = n("f2i/"),
            s = n("Aj/L"),
            l = n("4bQk");
        var d = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(a.b)({
                login: function() {
                    return Object(o.f)(r.a.FollowButton)
                }
            }, e)
        })(l.a);
        n.d(t, "a", function() {
            return d
        }), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return l.b
        })
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
    iydZ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), t.c = function(e, t) {
            var n = [],
                o = t.indexedActions,
                l = new RegExp("^(" + Object.keys(o).join("|") + ")(\\d+)$", "i"),
                d = e.split(/\s+/);
            return d.forEach(function(e, t) {
                var c = l.exec(e);
                if (c) {
                    var u = c[1].toLowerCase(),
                        p = +c[2],
                        f = o[u];
                    if (f || u !== i.g || (f = Object(a.b)()), f) {
                        var m = f.orderedTiers.find(function(e) {
                            return e.bits <= p
                        });
                        !m && p && (m = f.orderedTiers[0]), m && n.push({
                            type: r.a.Emote,
                            content: {
                                images: s(m),
                                alt: f.prefix,
                                cheerAmount: p,
                                cheerColor: m.color
                            }
                        })
                    }
                } else {
                    var h = n.length && n[n.length - 1],
                        g = "";
                    if (t < d.length - 1 && (g = " "), h && h.type === r.a.Text) h.content += e + g;
                    else {
                        var v = "";
                        t && (v = " "), n.push({
                            type: r.a.Text,
                            content: v + e + g
                        })
                    }
                }
            }), n
        }, t.b = s;
        var i = n("3iBR"),
            a = n("CFVp"),
            r = n("mwvJ"),
            o = {
                indexedActions: {},
                orderedActions: []
            };

        function s(e, t, n) {
            void 0 === n && (n = !0);
            var i, a, r = n ? "animated" : "static";
            return t ? {
                themed: !0,
                dark: (i = {}, i[t + "x"] = e.indexedImages.DARK[r].get(t), i),
                light: (a = {}, a[t + "x"] = e.indexedImages.LIGHT[r].get(t), a)
            } : {
                themed: !0,
                dark: {
                    "1x": e.indexedImages.DARK[r].get(1),
                    "1.5x": e.indexedImages.DARK[r].get(1.5),
                    "2x": e.indexedImages.DARK[r].get(2),
                    "3x": e.indexedImages.DARK[r].get(3),
                    "4x": e.indexedImages.DARK[r].get(4)
                },
                light: {
                    "1x": e.indexedImages.LIGHT[r].get(1),
                    "1.5x": e.indexedImages.LIGHT[r].get(1.5),
                    "2x": e.indexedImages.LIGHT[r].get(2),
                    "3x": e.indexedImages.LIGHT[r].get(3),
                    "4x": e.indexedImages.LIGHT[r].get(4)
                }
            }
        }
    },
    "j7/Y": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("OAwv"),
            r = n("GiK3"),
            o = n("F8kA"),
            s = n("6sO2");

        function l(e) {
            return function(t) {
                var n = function(n) {
                    function o(t) {
                        var a = n.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = a.referenceTracking,
                                    o = r.content,
                                    l = r.medium,
                                    d = r.content_index;
                                s.o.tracking.trackPageview(i.__assign({
                                    content: o,
                                    medium: l,
                                    content_index: d,
                                    location: e.location
                                }, t))
                            }
                        }, s.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return i.__extends(o, n), o.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, o.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, o.prototype.render = function() {
                        return r.createElement(t, i.__assign({}, this.props))
                    }, o.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? a.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                r = a.stringify(t);
                            r.length > 0 && (i = "?" + r), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return n
                    }, o
                }(r.Component);
                return Object(o.f)(n)
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
            r = (n.n(a), n("HM6l")),
            o = n("Odds"),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showBalloon: !!t.props.openByDefault,
                        hasInteracted: !!t.props.openByDefault
                    }, t.toggleBalloonId = Object(r.a)(), t.handleButtonClick = function() {
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
                        })
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
                    if (n.type !== o.p) throw new Error("ToggleBalloonWrapper needs a Balloon as its second child element");
                    var r = a.cloneElement(t, {
                            onClick: this.handleButtonClick
                        }),
                        s = null;
                    (this.state.hasInteracted || this.props.alwaysMountBalloonContent) && (s = a.cloneElement(n, {
                        show: this.state.showBalloon
                    }));
                    var l = r;
                    return this.props.tooltipProps && (l = a.createElement(o._47, i.__assign({}, this.props.tooltipProps), r)), a.createElement(o._7, {
                        "data-toggle-balloon-id": this.toggleBalloonId,
                        display: this.props.display,
                        position: o._14.Relative
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
    kLf9: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return i
        }), n.d(t, "a", function() {
            return a
        }), n.d(t, "d", function() {
            return o
        }), n.d(t, "b", function() {
            return p
        });
        var i, a, r, o, s = n("HW6M"),
            l = (n.n(s), n("GiK3")),
            d = (n.n(l), n("3HXW")),
            c = n("Odds"),
            u = n("CBaN");
        n.n(u);
        ! function(e) {
            e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
        }(i || (i = {})),
        function(e) {
            e[e.Right = 0] = "Right", e[e.Left = 1] = "Left"
        }(a || (a = {})),
        function(e) {
            e[e.HandleLabel = 0] = "HandleLabel", e[e.Handle = 1] = "Handle"
        }(r || (r = {})),
        function(e) {
            e[e.Small = 15] = "Small", e[e.Medium = 25] = "Medium"
        }(o || (o = {}));
        var p = function(e) {
            var t = null;
            e.label && (t = l.createElement(c._7, {
                "data-test-selector": r.HandleLabel,
                className: "draggable-slider-handle__label",
                position: c._14.Absolute,
                attachRight: e.label.attach === a.Right,
                attachLeft: e.label.attach === a.Left
            }, e.label.content));
            var n = s("draggable-slider-handle", {
                "draggable-slider-handle--left": e.handlePosition === i.Left,
                "draggable-slider-handle--right": e.handlePosition === i.Right,
                "draggable-slider-handle--blue": e.color === d.b.Blue,
                "draggable-slider-handle--orange": e.color === d.b.Orange
            });
            return l.createElement(c._7, {
                display: c.Q.Flex,
                flexDirection: c.S.Column,
                position: c._14.Relative
            }, l.createElement(c._1, {
                flexGrow: 0,
                flexShrink: 0,
                className: n,
                display: c.Q.Flex,
                fullHeight: !0
            }, l.createElement("div", {
                "data-test-selector": r.Handle,
                onMouseDown: e.onMouseDown,
                ref: e.onRef
            }, l.createElement(c._20, {
                asset: c._21.DragHandle,
                width: e.size
            }))), t)
        }
    },
    l21v: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("iydZ"),
            o = n("mwvJ"),
            s = new RegExp("(?:^|\\s)(?:https?://)?clips.twitch.tv/(\\w+)(?:/)?(\\w+)?(?:/edit)?(?:$|\\s)?");
        var l = n("YhVV"),
            d = n("3KVC"),
            c = n("e1CU");
        t.a = function(e, t, n, a, r, o) {
            void 0 === o && (o = !1);
            var s;
            s = r ? Object(l.b)(e, r) : function(e) {
                var t = [];
                e && Object.keys(e).forEach(function(n) {
                    var i = e[n];
                    i.forEach(function(e) {
                        t[e.startIndex] = {
                            startIndex: e.startIndex,
                            endIndex: e.endIndex + 1,
                            data: {
                                images: {
                                    themed: !1,
                                    sources: {
                                        "1x": y(n, 1),
                                        "2x": y(n, 2),
                                        "4x": y(n, 4)
                                    }
                                }
                            }
                        }
                    })
                });
                return t
            }(t.emotes);
            var d = Object(c.a)(t.displayName, t.username);
            return {
                badges: t.badges || {},
                bits: t.bits,
                user: i.__assign({}, d, {
                    userLogin: t.username,
                    userID: t.userID,
                    userType: t.userType,
                    color: t.color || f(t.userID)
                }),
                messageParts: e ? m(e, s, t.bits, n, a, d.userDisplayName) : [],
                deleted: o,
                timestamp: Date.now()
            }
        }, t.b = f, t.g = m, t.d = h, t.c = v, t.f = y, t.e = function(e) {
            return {
                src: y(e, 1),
                srcSet: y(e, 1) + " 1x, " + y(e, 2) + " 2x, " + y(e, 3) + " 4x"
            }
        };
        var u = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"],
            p = {};

        function f(e, t) {
            return void 0 === t && (t = 15), "number" != typeof p[e] && (p[e] = Math.floor(Math.random() * t)), u[p[e]]
        }

        function m(e, t, n, a, r, s) {
            void 0 === t && (t = []);
            var l = [],
                d = 0,
                c = h(e);
            t.forEach(function(t) {
                var u = c ? c.slice(d, t.startIndex).join("") : e.slice(d, t.startIndex);
                u && (l = n ? l.concat(g(u, s, r, a)) : l.concat(v(u, s, r))), l.push({
                    type: o.a.Emote,
                    content: i.__assign({
                        alt: c ? c.slice(t.startIndex, t.endIndex).join("") : e.slice(t.startIndex, t.endIndex)
                    }, t.data)
                }), d = t.endIndex
            });
            var u = c ? c.slice(d).join("") : e.slice(d);
            return u && (l = n ? l.concat(g(u, s, r, a)) : l.concat(v(u, s, r))), l
        }

        function h(e) {
            return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g)
        }

        function g(e, t, n, i) {
            if (!i) return v(e, t, n);
            var a = Object(r.c)(e, i).map(function(e) {
                return e.type === o.a.Text ? v(e.content, t, n) : e
            });
            return [].concat.apply([], a)
        }

        function v(e, t, n) {
            var i = /^(?:(https?:\/\/)?(?:[\w@#%\-+=:~]+\.)+[a-z]{2,6}(?:\/[\w./@#%&()\-+=:?~]*)?)$/g,
                r = /([^\w@#%\-+=:~])?(@)([^\u0000-\u007F]+|\w+)+([^\w./@#%&()\-+=:?~]|\s|$)/g,
                l = [],
                c = e.split(/\s+/);
            return c.forEach(function(e, u) {
                i.lastIndex = 0;
                var p = i.exec(e);
                r.lastIndex = 0;
                var f = r.exec(e);
                if (p) {
                    var m = p.index;
                    0 !== m && l.push({
                        type: o.a.Text,
                        content: "" + e.slice(0, m)
                    });
                    var h = i.lastIndex;
                    if (n) l.push({
                        type: o.a.Text,
                        content: " <" + Object(a.d)("deleted link", "CreateMessageData") + "> "
                    });
                    else {
                        var g = (p[1] ? "" : "https://") + e.slice(m, h);
                        if (function(e) {
                                return void 0 === e && (e = ""), s.test(e) && !e.includes("clips.twitch.tv/2017/")
                            }(g)) {
                            var v = function(e) {
                                void 0 === e && (e = "");
                                var t = e.match(s);
                                return null === t ? "" : t && t.length > 0 && void 0 !== t.index ? t[1] : ""
                            }(g);
                            l.push({
                                type: o.a.ClipLink,
                                content: {
                                    slug: v,
                                    url: g,
                                    displayText: e.slice(m, h)
                                }
                            })
                        } else if (Object(d.a)(g)) {
                            var y = Object(d.b)(g);
                            l.push({
                                type: o.a.VideoLink,
                                content: {
                                    id: y,
                                    url: g,
                                    displayText: e.slice(m, h)
                                }
                            })
                        } else l.push({
                            type: o.a.Link,
                            content: {
                                displayText: e.slice(m, h),
                                url: g
                            }
                        })
                    }
                    var b = e.slice(h),
                        k = "";
                    u < c.length - 1 && (k = " "), b && l.push({
                        type: o.a.Text,
                        content: "" + b + k
                    })
                } else {
                    if (!f) {
                        var _ = l.length && l[l.length - 1];
                        k = "";
                        if (u < c.length - 1 && (k = " "), _ && _.type === o.a.Text) _.content += e + k;
                        else {
                            var S = "";
                            u && (S = " "), l.push({
                                type: o.a.Text,
                                content: S + e + k
                            })
                        }
                        return
                    }
                    var w = f[3];
                    l.push({
                        type: o.a.Mention,
                        content: {
                            sender: t,
                            recipient: w
                        }
                    })
                }
            }), l
        }

        function y(e, t) {
            return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/" + Math.min(Math.ceil(t), 3) + ".0"
        }
    },
    mwvJ: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e[e.Text = 0] = "Text", e[e.Mention = 1] = "Mention", e[e.Link = 2] = "Link", e[e.Emote = 3] = "Emote", e[e.ClipLink = 4] = "ClipLink", e[e.VideoLink = 5] = "VideoLink"
            }(i || (i = {}))
    },
    nU46: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("7vx8"),
            o = n("CSlQ"),
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
                    return !this.props.data.clip || this.props.data.loading ? a.createElement(s._7, null, this.renderPlaceholders()) : a.createElement(s.P, {
                        fontSize: this.props.fontSize ? this.props.fontSize : s.U.Size3,
                        type: s._44.Span,
                        lineHeight: s._8.Heading,
                        ellipsis: this.props.ellipsis
                    }, this.props.data.clip.title)
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
                }, t = i.__decorate([Object(o.d)("ClipsTitle"), Object(r.a)(l)], t)
            }(a.Component);
        n.d(t, "a", function() {
            return d
        })
    },
    oMs9: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.creating = "CREATING", e.created = "CREATED", e.failed = "FAILED"
            }(i || (i = {}))
    },
    rqhk: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2");

        function o(e) {
            return function(t) {
                return function(n) {
                    function s(t) {
                        var a = n.call(this, t) || this;
                        return a.messageHandlers = [], a.handlePlayerAdded = function() {
                            a.getPlayer() && !a.isConnected && (a.isConnected = !0, u.off(d, a.handlePlayerAdded), u.on(c, a.handlePlayerRemoved), window.addEventListener("message", a.onIncomingPlayerMessage))
                        }, a.handlePlayerRemoved = function() {
                            !a.getPlayer() && a.isConnected && (a.isConnected = !1, u.off(c, a.handlePlayerRemoved), u.on(d, a.handlePlayerAdded), window.removeEventListener("message", a.onIncomingPlayerMessage))
                        }, a.sendMessage = function(e) {
                            var t = a.getPlayer();
                            t && t.postMessage(e, r.o.config.playerBaseURL)
                        }, a.onIncomingPlayerMessage = function(e) {
                            e.origin === r.o.config.playerBaseURL && e.data.namespace === I && a.messageHandlers.forEach(function(t) {
                                t(e.data)
                            })
                        }, a.updatePlayerProps = function(t) {
                            if (e.requestedPlayerProps && (t.method === C || t.method === N)) {
                                var n = t.args[0],
                                    r = e.requestedPlayerProps.reduce(function(e, t) {
                                        var i = n[t];
                                        return void 0 !== i && a.state.playerProps[t] !== i && (e[t] = i), e
                                    }, {});
                                Object.keys(r).length && a.setState({
                                    playerProps: i.__assign({}, a.state.playerProps, r)
                                })
                            }
                        }, e.requestedPlayerProps && a.messageHandlers.push(a.updatePlayerProps), a.state = {
                            playerProps: {}
                        }, a
                    }
                    return i.__extends(s, n), s.prototype.componentWillMount = function() {
                        u.on(d, this.handlePlayerAdded)
                    }, s.prototype.componentWillUnmount = function() {
                        u.off(d, this.handlePlayerAdded), u.off(c, this.handlePlayerRemoved)
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
                    }, s.displayName = o.name + "(" + (t.displayName || t.name) + ")", s
                }(a.Component)
            }
        }
        var s = n("BzvE"),
            l = {},
            d = "player-storage-added",
            c = "player-storage-removed",
            u = new s.EventEmitter;

        function p(e, t) {
            l[e] = t, u.emit(d)
        }

        function f(e) {
            delete l[e], u.emit(c)
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

        function y() {
            return m({
                method: w
            })
        }

        function b(e) {
            return m({
                method: E,
                arg: e
            })
        }

        function k(e) {
            return m({
                method: O,
                arg: e
            })
        }

        function _() {
            return m({
                method: "fullscreen",
                arg: !1
            })
        }

        function S(e) {
            return m({
                method: "setEditClip",
                arg: e
            })
        }
        var w = "subscribe",
            O = "setclip",
            E = "setAutoplay",
            C = "bridgestateupdate",
            N = "bridgestorestateupdate",
            T = "player.embed.host",
            I = "player.embed.client";
        n.d(t, "t", function() {
            return o
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
            return m
        }), n.d(t, !1, function() {
            return h
        }), n.d(t, !1, function() {
            return g
        }), n.d(t, "h", function() {
            return v
        }), n.d(t, "m", function() {
            return y
        }), n.d(t, "k", function() {
            return b
        }), n.d(t, "l", function() {
            return k
        }), n.d(t, "j", function() {
            return _
        }), n.d(t, "r", function() {
            return S
        }), n.d(t, "g", function() {
            return w
        }), n.d(t, "f", function() {
            return O
        }), n.d(t, "e", function() {
            return E
        }), n.d(t, "c", function() {
            return C
        }), n.d(t, "d", function() {
            return N
        }), n.d(t, "b", function() {
            return T
        }), n.d(t, "a", function() {
            return I
        }), n.d(t, !1, function() {
            return "report"
        }), n.d(t, !1, function() {
            return "delete"
        }), n.d(t, !1, function() {
            return "deleteAll"
        })
    },
    sEID: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return l
        }), n.d(t, "a", function() {
            return d
        });
        var i = n("GiK3"),
            a = (n.n(i), n("8Wuk")),
            r = n("yDzg"),
            o = n("WNmM"),
            s = n("Odds"),
            l = [{
                type: a.b.Twitter,
                params: {
                    tt_medium: "twtr"
                }
            }, {
                type: a.b.Facebook,
                params: {
                    tt_medium: "fb"
                }
            }, {
                type: a.b.Reddit,
                params: {
                    tt_medium: "redt"
                }
            }, {
                type: a.b.Copy
            }],
            d = function(e) {
                return i.createElement(s._7, {
                    className: "clips-social-share",
                    display: s.Q.Flex,
                    flexWrap: s.T.NoWrap
                }, l.map(function(t) {
                    return i.createElement(s._7, {
                        key: t.type,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(a.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(r.a)(e.clip.url, t.params),
                        onShareClick: Object(o.c)(e.clip.id, e.clip.game && e.clip.game.name, e.clip.broadcaster && e.clip.broadcaster.id, e.clip.broadcaster && e.clip.broadcaster.login, e.pageType)
                    }))
                }))
            }
    },
    twHn: function(e, t) {},
    vtXo: function(e, t) {},
    vwd7: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("CSlQ"),
            s = n("rqhk"),
            l = "MOST_RECENT_CLIPS_WATCHED_STORAGE_KEY",
            d = 10;

        function c(e) {
            var t = JSON.parse(r.l.get(l, "[]"));
            t && t.length >= d && (t = t.slice(1, d)), r.l.set(l, JSON.stringify(t.concat([e])))
        }
        var u, p = n("46tX"),
            f = n("Odds");
        n("vtXo");
        ! function(e) {
            e.Viewing = "clips-viewing", e.Editing = "clips-editing"
        }(u || (u = {}));
        var m = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.hasSetPlayerRef = !1, n.setInitialSlug = function(e) {
                    n.state.initialSlug || (n.setState({
                        initialSlug: e
                    }), c(e))
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
                }, i && c(i), n
            }
            return i.__extends(t, e), t.prototype.componentDidMount = function() {
                this.setInitialSlug(this.props.slug)
            }, t.prototype.componentWillReceiveProps = function(e) {
                this.state.initialSlug || this.setInitialSlug(e.slug), this.props.slug !== e.slug && e.slug && this.setClip(e.slug)
            }, t.prototype.componentWillUnmount = function() {
                Object(s.q)(this.props.slug)
            }, t.prototype.componentDidUpdate = function() {
                !this.hasSetPlayerRef && this.playerRef && (this.hasSetPlayerRef = !0, Object(s.s)(this.props.slug, this.playerRef.contentWindow), this.playerRef.contentWindow.postMessage(Object(s.m)(), r.o.config.playerBaseURL))
            }, t.prototype.render = function() {
                if (!this.state.initialSlug) return null;
                var e = !Object(p.c)(navigator.userAgent) && this.props.playerType !== u.Editing;
                return a.createElement(f._30, {
                    className: "clips-video-iframe",
                    position: f._14.Relative,
                    fullWidth: !0,
                    fullHeight: !0
                }, a.createElement(f._30, {
                    display: this.state.isLoaded ? f.Q.Hide : f.Q.Flex,
                    color: f.J.Overlay,
                    alignItems: f.c.Center,
                    justifyContent: f._6.Center,
                    position: f._14.Absolute,
                    fullHeight: !0,
                    fullWidth: !0
                }, a.createElement(f._9, {
                    size: f._28.Large,
                    inheritColor: !0
                })), a.createElement(f._1, {
                    display: this.state.isLoaded ? f.Q.Block : f.Q.HideAccessible,
                    position: f._14.Absolute,
                    fullHeight: !0,
                    fullWidth: !0
                }, a.createElement("iframe", {
                    src: r.o.config.playerBaseURL + "/?player=" + this.props.playerType + "&clip=" + this.state.initialSlug + "&origin=" + window.location.origin + "&branding=false&externalfullscreen=" + e,
                    frameBorder: "0",
                    scrolling: "no",
                    allowFullScreen: !0,
                    ref: this.setPlayerRef,
                    onLoad: this.setIsLoaded
                })))
            }, t.prototype.setClip = function(e) {
                this.playerRef && (this.playerRef.contentWindow.postMessage(Object(s.l)(e), r.o.config.playerBaseURL), c(e))
            }, t = i.__decorate([Object(o.d)("ClipsVideoIframe", {
                autoReportInteractive: !0
            })], t)
        }(a.Component);
        n.d(t, "a", function() {
            return u
        }), n.d(t, "b", function() {
            return m
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
    xX9u: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("Odds"),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClickHandler = function(e) {
                        t.props.onClick && t.props.onClick(), e.currentTarget.select()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(r._3, {
                        readOnly: !0,
                        type: r._4.Text,
                        value: this.props.value,
                        onClick: this.handleClickHandler
                    })
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return o
        })
    },
    ynxC: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("hdYS"),
            s = n("7vx8"),
            l = n("CSlQ"),
            d = n("kJau"),
            c = n("Odds"),
            u = n("U5tC"),
            p = {
                tt_content: "player_profile_img"
            },
            f = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.clip && this.props.data.clip.broadcaster ? a.createElement(c._7, {
                        className: "clips-broadcaster-info",
                        padding: 1,
                        display: c.Q.Flex,
                        alignItems: c.c.Center
                    }, a.createElement("a", {
                        target: "_blank",
                        href: Object(d.c)(this.props.data.clip.broadcaster.login, p)
                    }, a.createElement(c.l, {
                        src: this.props.data.clip.broadcaster.profileImageURL,
                        alt: Object(r.d)("Broadcaster Avatar", "ClipsBroadcasterInfo"),
                        size: 30
                    })), a.createElement(c._7, {
                        display: c.Q.Flex,
                        flexDirection: c.S.Column,
                        flexGrow: 1,
                        margin: {
                            left: 1
                        },
                        ellipsis: !0
                    }, a.createElement("a", {
                        href: Object(d.c)(this.props.data.clip.broadcaster.login, p)
                    }, a.createElement(c.P, {
                        fontSize: c.U.Size4,
                        type: c._44.Span
                    }, this.props.data.clip.broadcaster.displayName), !(!this.props.data.clip.broadcaster.stream || !this.props.data.clip.broadcaster.stream.id) && a.createElement(c._7, {
                        margin: {
                            left: .5
                        },
                        display: c.Q.InlineBlock
                    }, a.createElement(c._11, {
                        label: Object(r.d)("LIVE", "ClipsBroadcasterInfo"),
                        type: c._12.Live
                    }))), a.createElement(c._7, null, a.createElement(c.P, {
                        color: c.J.Alt2,
                        fontSize: c.U.Size5,
                        ellipsis: !0
                    }, this.props.data.clip.game && Object(r.d)("playing {gameName}", {
                        gameName: a.createElement("a", {
                            target: "_blank",
                            href: Object(d.d)(this.props.data.clip.game.name, {
                                tt_medium: "clips_web"
                            })
                        }, this.props.data.clip.game.displayName)
                    }, "ClipsBroadcasterInfo")))), a.createElement(o.a, {
                        isHostedFollow: !1,
                        channelLogin: this.props.data.clip.broadcaster.login,
                        followUIType: o.b.IconAndText,
                        unfollowUIType: o.b.IconOnly,
                        showLoadingPlaceholder: !0
                    })) : a.createElement(c._7, null, this.renderPlaceholders())
                }, t.prototype.renderPlaceholders = function() {
                    return a.createElement(c._7, {
                        padding: 1,
                        display: c.Q.Flex,
                        alignItems: c.c.Center
                    }, a.createElement(c._7, null, a.createElement(c.e, {
                        type: c.i.FadeIn,
                        duration: c.g.Long,
                        enabled: !0
                    }, a.createElement(c._13, {
                        height: 30,
                        width: 30
                    }))), a.createElement(c._30, {
                        fontSize: c.U.Size5,
                        flexGrow: 1,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(c.e, {
                        type: c.i.FadeIn,
                        duration: c.g.Long,
                        enabled: !0
                    }, a.createElement(c._13, {
                        lineCount: 1,
                        width: 80
                    })), a.createElement(c.e, {
                        type: c.i.FadeIn,
                        duration: c.g.Long,
                        delay: c.f.Short,
                        enabled: !0
                    }, a.createElement(c._13, {
                        lineCount: 1,
                        width: 120
                    }))), a.createElement(c._7, null, a.createElement(c.e, {
                        type: c.i.FadeIn,
                        duration: c.g.Long,
                        enabled: !0
                    }, a.createElement(c._13, {
                        height: 30,
                        width: 70
                    }))))
                }, t = i.__decorate([Object(l.d)("ClipsBroadcasterInfo"), Object(s.a)(u)], t)
            }(a.Component);
        n.d(t, "a", function() {
            return f
        })
    }
});
//# sourceMappingURL=sites.clips.pages.create-97b706ea8146c2468996cfc11ee542dc.js.map