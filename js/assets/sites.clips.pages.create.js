webpackJsonp([52], {
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
                    if (!e || !e.curator || this.props.data.loading) return a.createElement(u._8, null, this.renderPlaceholders());
                    var t = Object(c.b)(e.curator.login, {
                        tt_medium: "clips_web",
                        tt_content: "curator_name"
                    });
                    return a.createElement(u._8, {
                        ellipsis: this.props.ellipsis
                    }, e.champBadge && e.champBadge.id && a.createElement(u._8, {
                        margin: {
                            right: .5
                        },
                        display: u.R.InlineBlock
                    }, a.createElement(d.a, {
                        pageType: s.PageviewLocation.ClipsViewing
                    })), a.createElement(u._2, {
                        display: u.R.Inline
                    }, a.createElement(u.Q, {
                        fontSize: this.props.fontSize ? this.props.fontSize : u.V.Size5
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
                        type: u.j.FadeIn,
                        duration: u.g.Long,
                        delay: u.f.Medium,
                        enabled: !0
                    }, a.createElement(u.Q, {
                        fontSize: this.props.fontSize ? this.props.fontSize : u.V.Size5
                    }, a.createElement(u._14, {
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
            t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.fontSize = "12pt", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
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
        var i, a, r = n("VmM7"),
            o = n("TToO"),
            s = n("HW6M"),
            l = n("GiK3"),
            d = n("cvQl"),
            c = n("kLf9"),
            u = n("Odds");
        n("cJZy");
        ! function(e) {
            e.LeftHandle = "left-handle", e.Overlay = "overlay", e.RightHandle = "right-handle", e.SelectedSection = "section", e.Slider = "slider"
        }(i || (i = {})),
        function(e) {
            e.LeftHandle = "leftHandle", e.Slider = "slider", e.RightHandle = "rightHandle"
        }(a || (a = {}));
        var p = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.leftHandleRef = null, n.containerRef = null, n.rightHandleRef = null, n.sliderHandleRef = null, n.getHandleHandlers = function(e) {
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
                    i && (n.preventUserSelect(), i.ownerDocument.addEventListener("mousemove", a), i.ownerDocument.addEventListener("mouseup", r))
                }, n.removeHandleListeners = function(e) {
                    var t = n.getHandleHandlers(e),
                        i = t.handleRef,
                        a = t.mouseMoveHandler,
                        r = t.mouseUpHandler;
                    i && (n.allowUserSelect(), i.ownerDocument.removeEventListener("mousemove", a), i.ownerDocument.removeEventListener("mouseup", r))
                }, n.leftHandleRefHandler = function(e) {
                    n.leftHandleRef = e
                }, n.onLeftMouseDown = function(e) {
                    if (n.shouldHandleClick(e.button)) {
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
                    }
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
                    var t = e.clientX,
                        i = void 0 === n.props.minLength ? 0 : n.props.minLength,
                        a = void 0 === n.props.maxLength ? n.props.maxOffset - n.props.minOffset : n.props.maxLength;
                    n.setState(function(e, r) {
                        return {
                            startOffset: n.calculateOffset(t, {
                                startBoundary: Math.max(r.minOffset, e.endOffset - a),
                                endBoundary: Math.min(e.endOffset, e.endOffset - i),
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
                    if (n.shouldHandleClick(e.button)) {
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
                    }
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
                    var t = e.clientX,
                        i = void 0 === n.props.minLength ? 0 : n.props.minLength,
                        a = void 0 === n.props.maxLength ? n.props.maxOffset - n.props.minOffset : n.props.maxLength;
                    n.setState(function(e, r) {
                        return {
                            startOffset: e.startOffset,
                            endOffset: n.calculateOffset(t, {
                                startBoundary: Math.max(r.minOffset, e.startOffset + i),
                                endBoundary: Math.min(r.maxOffset, e.startOffset + a),
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
                    if (n.shouldHandleClick(e.button)) {
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
                    }
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
                    return n.containerRef ? 0 === n.containerRef.clientWidth ? 0 : e * ((n.props.maxOffset - n.props.minOffset) / n.containerRef.clientWidth) : 0
                }, n.addFocus = function() {
                    n.setState({
                        showFocus: !0
                    })
                }, n.removeFocus = function() {
                    n.setState({
                        showFocus: !1
                    })
                }, n.preventUserSelect = function() {
                    document.body.style.userSelect = "none"
                }, n.allowUserSelect = function() {
                    document.body.style.userSelect = "auto"
                }, n.handleContainerRef = function(e) {
                    n.containerRef = e
                }, n.state = {
                    startOffset: t.startOffset,
                    endOffset: t.endOffset,
                    previousBaseValue: null,
                    previousPosition: null,
                    showFocus: !1
                }, n
            }
            return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                e.startOffset === this.state.startOffset && e.endOffset === this.state.endOffset || this.setState({
                    startOffset: e.startOffset,
                    endOffset: e.endOffset
                })
            }, t.prototype.render = function() {
                var e, t, n, a, o = this.props.handleSize ? this.props.handleSize : c.c.Small,
                    d = (e = {
                        handleSize: o,
                        minOffset: this.props.minOffset,
                        maxOffset: this.props.maxOffset,
                        startOffset: this.state.startOffset,
                        endOffset: this.state.endOffset
                    }, t = e.maxOffset - e.minOffset, n = (e.endOffset - e.startOffset) / t * 100, a = e.startOffset / t * 100, {
                        width: "calc(" + n + "% + " + 2 * e.handleSize + "px)",
                        marginLeft: "calc(" + a + "% - " + e.handleSize + "px)"
                    }),
                    p = s("draggable-slider__content", {
                        "draggable-slider__content--blue": this.props.color === r.a.Blue,
                        "draggable-slider__content--orange": this.props.color === r.a.Orange,
                        "draggable-slider__content--focus": this.props.isSliderEnabled && this.state.showFocus
                    });
                return l.createElement("div", {
                    ref: this.handleContainerRef
                }, l.createElement(u._2, {
                    flexGrow: 0,
                    flexShrink: 0
                }, l.createElement("div", {
                    "data-test-selector": i.SelectedSection,
                    style: d
                }, l.createElement(u._8, {
                    className: "draggable-slider__container",
                    position: u._15.Relative,
                    display: u.R.Flex,
                    justifyContent: u._7.Center
                }, l.createElement(u._8, {
                    position: u._15.Absolute,
                    attachTop: !0,
                    fullWidth: !0
                }, l.createElement(u._8, {
                    position: u._15.Relative,
                    attachTop: !0,
                    fullWidth: !0,
                    display: u.R.Flex,
                    justifyContent: u._7.Center
                }, l.createElement(u._8, {
                    position: u._15.Absolute,
                    attachBottom: !0,
                    margin: {
                        bottom: 1
                    }
                }, this.props.popover))), l.createElement(u._35, {
                    className: p,
                    fullWidth: !0,
                    display: u.R.Flex,
                    justifyContent: u._7.Between
                }, l.createElement(c.a, {
                    "data-test-selector": i.LeftHandle,
                    color: this.props.color,
                    handlePosition: c.b.Left,
                    onRef: this.leftHandleRefHandler,
                    onMouseDown: this.onLeftMouseDown,
                    size: this.props.handleSize
                }), this.renderSliderContent(), l.createElement(c.a, {
                    "data-test-selector": i.RightHandle,
                    color: this.props.color,
                    handlePosition: c.b.Right,
                    onRef: this.rightHandleRefHandler,
                    onMouseDown: this.onRightMouseDown,
                    size: this.props.handleSize
                }))))))
            }, t.prototype.renderSliderContent = function() {
                var e = this.props.children;
                this.props.isSliderEnabled && (e = l.createElement("div", {
                    onMouseDown: this.onSliderMouseDown,
                    onMouseEnter: this.addFocus,
                    onMouseLeave: this.removeFocus,
                    ref: this.sliderHandleRefHandler,
                    "data-test-selector": i.Slider
                }, this.props.children));
                var t = s("draggable-slider__overlay", {
                    "draggable-slider__overlay--sliding-enabled": this.props.isSliderEnabled,
                    "draggable-slider__overlay--blue": this.props.color === r.a.Blue,
                    "draggable-slider__overlay--orange": this.props.color === r.a.Orange
                });
                return l.createElement(u._8, {
                    className: t,
                    display: u.R.InlineBlock,
                    overflow: u._11.Hidden,
                    "data-test-selector": i.Overlay,
                    fullWidth: !0
                }, e)
            }, t.prototype.shouldHandleClick = function(e) {
                return e === d.a.Left
            }, t
        }(l.Component);
        n.d(t, "c", function() {
            return r.a
        }), n.d(t, "a", function() {
            return p
        }), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return c.c
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
                    return a.createElement(o._8, i.__assign({
                        position: o._15.Relative,
                        className: "selectable-input-wrapper"
                    }, Object(o._63)(this.props)), a.createElement(o._4, {
                        type: o._5.Text,
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
            return k
        }), n.d(t, "a", function() {
            return b
        });
        var k;
        ! function(e) {
            e[e.IconOnly = 0] = "IconOnly", e[e.TextOnly = 1] = "TextOnly", e[e.IconAndText = 2] = "IconAndText"
        }(k || (k = {}));
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
                            Object(l.e)(y, {
                                login: t.props.channelLogin
                            }, function(t) {
                                var n = t.user;
                                return n && n.self && (n.self.follower ? n.self.follower.disableNotifications = e.data.followUser.follow.disableNotifications : n.self.follower = {
                                    __typename: "FollowerEdge",
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
                            Object(l.e)(y, {
                                login: t.props.channelLogin
                            }, function(e) {
                                var t = e.user;
                                return t && t.self && (t.self.follower ? t.self.follower.disableNotifications = null : t.self.follower = {
                                    __typename: "FollowerEdge",
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
                            Object(l.e)(y, {
                                login: t.props.channelLogin
                            }, function(t) {
                                var n = t.user;
                                return n && n.self && (n.self.follower ? n.self.follower.disableNotifications = e.data.followUser.follow.disableNotifications : n.self.follower = {
                                    __typename: "FollowerEdge",
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
                return this.props.isLoggedIn ? !this.props.showLoadingPlaceholder || this.props.data && !this.props.data.loading ? this.props.currentUserLogin !== this.props.channelLogin && this.props.followUser && this.props.unfollowUser && (this.props.followData || this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.user) ? this.state.isFollowing ? this.props.hideWhenFollowing ? null : this.props.hideDropdownWhenFollowing ? this.renderUnfollowButton() : this.renderUnfollowButtonWithDropdown() : this.renderFollowButton(this.toggleFollowing) : null : this.renderPlaceholder() : this.renderFollowButton(this.props.login)
            }, t.prototype.renderPlaceholder = function() {
                switch (this.props.size) {
                    case h.z.Large:
                        return a.createElement(h._14, {
                            width: 93,
                            height: 36
                        });
                    case h.z.Small:
                        return a.createElement(h._14, {
                            width: 66,
                            height: 24
                        });
                    default:
                        return a.createElement(h._14, {
                            width: 70,
                            height: 30
                        })
                }
            }, t.prototype.renderFollowButton = function(e) {
                var t = this.props.isHostedFollow && this.props.channelName ? Object(r.d)("Follow {username}", {
                    username: this.props.channelName
                }, "FollowButton") : Object(r.d)("Follow", "FollowButton");
                return a.createElement(h.v, i.__assign({
                    ariaLabel: t,
                    blurAfterClick: this.props.blurAfterClick,
                    "data-a-target": "follow-button",
                    "data-test-selector": "follow-button",
                    icon: this.props.followUIType === k.TextOnly ? void 0 : h._25.Heart,
                    onClick: e,
                    size: this.props.size,
                    tabIndex: this.props.tabIndex
                }, Object(h._63)(this.props)), this.props.followUIType === k.IconOnly ? null : t)
            }, t.prototype.renderUnfollowButton = function() {
                var e = Object(r.d)("Unfollow", "FollowButton");
                return a.createElement(h.v, i.__assign({
                    ariaLabel: e,
                    blurAfterClick: this.props.blurAfterClick,
                    "data-a-target": "unfollow-button",
                    "data-test-selector": "unfollow-button",
                    icon: this.props.unfollowUIType === k.TextOnly ? void 0 : h._25.Heart,
                    statusAlertIcon: this.props.unfollowUIType === k.TextOnly ? void 0 : h._25.Unheart,
                    statusAlertText: this.props.unfollowUIType === k.IconOnly ? "" : e,
                    tabIndex: this.props.tabIndex,
                    size: this.props.size,
                    onClick: this.toggleFollowing
                }, Object(h._63)(this.props)), this.props.unfollowUIType === k.IconOnly ? null : Object(r.d)("Followed", "FollowButton"))
            }, t.prototype.renderUnfollowButtonWithDropdown = function() {
                var e = this.props.balloonDirection ? this.props.balloonDirection : h.r.BottomRight,
                    t = this.getFollowData(),
                    n = t && t.user && t.user.displayName || "",
                    i = this.state.disableNotifications ? Object(r.d)("Opt in to notifications to receive updates on this channel's activity, including when they go live.", "FollowButton") : Object(r.d)("You will be notified on this channel's activity, including when they go live.", "FollowButton");
                return a.createElement(h._8, {
                    display: h.R.Flex,
                    className: "follow-btn",
                    "data-test-selector": "unfollow-button__dropdown"
                }, a.createElement(h._8, null, this.renderUnfollowButton()), a.createElement(o.a, {
                    display: h.R.InlineFlex,
                    openByDefault: this.state.showDropdown
                }, a.createElement("button", {
                    tabIndex: this.props.tabIndex,
                    "aria-label": Object(r.d)("Dropdown", "FollowButton"),
                    className: "follow-btn__dropdown-toggle",
                    "data-a-target": "follow-dropdown-toggle"
                }, a.createElement(h._8, {
                    justifyContent: h._7.Center,
                    display: h.R.Flex,
                    alignItems: h.c.Stretch,
                    fullHeight: !0
                }, a.createElement(h._24, {
                    asset: h._25.GlyphArrDown
                }))), a.createElement(h.q, {
                    size: h.s.Small,
                    direction: e,
                    "data-a-target": "follow-notifications-balloon"
                }, a.createElement(h._35, {
                    color: h.K.Base,
                    display: h.R.Flex,
                    flexWrap: h.U.Wrap,
                    padding: 1
                }, a.createElement(h._8, {
                    display: h.R.Flex,
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(h.Q, {
                    type: h._49.H6
                }, Object(r.d)("You are following {followingName}", {
                    followingName: n
                }, "FollowButton"))), a.createElement(h._8, {
                    display: h.R.Flex,
                    flexWrap: h.U.NoWrap,
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(h._8, {
                    display: h.R.Flex,
                    padding: {
                        right: 2
                    }
                }, a.createElement("span", null, a.createElement(h.Q, {
                    type: h._49.H6
                }, Object(r.d)("Notifications", "FollowButton")))), a.createElement(h._8, {
                    display: h.R.Flex,
                    flexShrink: 0
                }, a.createElement(h._51, {
                    onChange: this.toggleNotificationsEnabled,
                    checked: !this.state.disableNotifications,
                    "data-a-target": "notifications-toggle"
                }))), a.createElement(h._8, {
                    display: h.R.InlineFlex,
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(h.Q, {
                    type: h._49.Span,
                    color: h.K.Alt2
                }, i))))))
            }, t.prototype.reportInteractive = function() {
                _(this.props) ? this.props.latencyTracking.reportInteractive() : this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
            }, t = i.__decorate([Object(s.a)(y, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelLogin
                        }
                    }
                },
                skip: function(e) {
                    return _(e)
                }
            }), Object(s.a)(g, {
                name: "followUser"
            }), Object(s.a)(v, {
                name: "unfollowUser"
            }), Object(m.d)("FollowButton")], t)
        }(a.Component);

        function _(e) {
            return !e.isLoggedIn || (!e.channelLogin || (!!e.followData || e.channelLogin === e.currentUserLogin))
        }
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
            s = n("j7/Y"),
            l = n("w9tK"),
            d = n("vH/s"),
            c = n("CSlQ"),
            u = n("YV3U"),
            p = n("kJau"),
            f = n("HW6M"),
            m = n("3zLD"),
            h = n("CIox"),
            g = n("6sO2"),
            v = n("7vx8"),
            y = n("rqhk"),
            k = n("3HXW"),
            b = n("kLf9"),
            _ = n("QIXk"),
            S = n("0B06");

        function w(e, t) {
            return {
                startOffset: e,
                endOffset: t
            }
        }
        var O = n("Odds"),
            E = (n("Wc1Y"), 1);

        function C(e) {
            return parseFloat(e.toFixed(E))
        }
        var N = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        startOffset: -1,
                        endOffset: -1
                    }, t.onDrag = function(e) {
                        t.setState({
                            startOffset: C(e.startOffset),
                            endOffset: C(e.endOffset)
                        }), t.props.playerConnection.sendMessage(Object(y.r)({
                            startOffset: t.state.startOffset,
                            endOffset: t.state.endOffset
                        }))
                    }, t.renderDurationPopover = function() {
                        var e = o.createElement(O.Q, {
                            type: O._49.Strong
                        }, t.roundedPopoverDuration() + "s");
                        return o.createElement(O._35, {
                            className: "clips-editor-slider-popover",
                            background: O.n.Alt2,
                            padding: {
                                y: 1,
                                x: 2
                            },
                            fullWidth: !0,
                            textAlign: O._45.Center,
                            overflow: O._11.Hidden,
                            border: !0
                        }, o.createElement(O.Q, {
                            align: O._59.Middle,
                            fontSize: O.V.Size5,
                            color: O.K.Alt2
                        }, e, " / 60s"), o.createElement(O.Q, {
                            align: O._59.Middle,
                            color: O.K.Alt2
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
                    return this.isReady() && this.props.duration ? o.createElement(O._8, null, o.createElement(O._35, {
                        margin: {
                            y: 4
                        },
                        className: "clips-editor-slider-background"
                    }, o.createElement(k.a, {
                        startOffset: this.state.startOffset,
                        endOffset: this.state.endOffset,
                        minOffset: 0,
                        maxOffset: this.props.duration,
                        minLength: 5,
                        maxLength: 60,
                        onLeftDrag: this.onDrag,
                        onRightDrag: this.onDrag,
                        onSliderDrag: this.onDrag,
                        popover: this.renderDurationPopover(),
                        color: k.c.Blue,
                        isSliderEnabled: !0,
                        handleSize: b.c.Medium
                    }, o.createElement(O._8, {
                        padding: {
                            top: 3,
                            bottom: 2
                        },
                        fullWidth: !0,
                        textAlign: O._45.Center,
                        overflow: O._11.Hidden
                    }))), o.createElement(_.a, {
                        clipSlug: this.props.slug,
                        location: d.PageviewLocation.ClipsEditing,
                        broadcasterName: this.props.broadcasterName,
                        startOffset: this.state.startOffset,
                        endOffset: this.state.endOffset
                    })) : this.renderPlaceholder()
                }, t.prototype.renderPlaceholder = function() {
                    return o.createElement(O._8, null, o.createElement(O.e, {
                        type: O.j.Bounce,
                        loop: !0,
                        enabled: !0,
                        duration: O.g.ExtraLong,
                        timing: O.i.EaseInOut
                    }, o.createElement(O._35, {
                        fullWidth: !0,
                        background: O.n.Alt2,
                        margin: {
                            y: 4
                        },
                        padding: {
                            y: 3
                        },
                        textAlign: O._45.Center
                    })), o.createElement(O.e, {
                        type: O.j.Bounce,
                        loop: !0,
                        enabled: !0,
                        duration: O.g.ExtraLong,
                        timing: O.i.EaseInOut,
                        delay: O.f.Medium
                    }, o.createElement(O._35, {
                        fullWidth: !0,
                        background: O.n.Alt2,
                        margin: {
                            y: 4
                        },
                        padding: {
                            top: 2,
                            bottom: 1
                        },
                        textAlign: O._45.Center
                    })))
                }, t.prototype.roundedPopoverDuration = function() {
                    var e = this.state.endOffset - this.state.startOffset;
                    return e >= 59.7 && (e = 60), e <= 5.3 && (e = 5), e.toFixed(1)
                }, t.prototype.isValidOffset = function(e) {
                    return !isNaN(e) && e >= 0
                }, t
            }(o.Component),
            T = Object(m.compose)(Object(y.t)({
                playerId: function(e) {
                    return e.slug
                }
            }), Object(c.d)("ClipsEditor"))(N),
            F = n("oMs9"),
            I = (n("Jbgd"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = f("clips-edit-top-nav", {
                        "clips-edit-top-nav-rollup": this.props.isPostEdit
                    });
                    return o.createElement(O._35, {
                        background: O.n.Base,
                        className: e,
                        position: O._15.Fixed,
                        fullWidth: !0,
                        attachTop: !0,
                        attachLeft: !0,
                        display: O.R.Flex,
                        justifyContent: O._7.Center,
                        alignItems: O.c.Center,
                        "data-test-selector": "clips-edit-top-nav-wrapper",
                        borderBottom: !0
                    }, this.props.showMessage && o.createElement(O.e, {
                        delay: O.f.Medium,
                        duration: O.g.Medium,
                        enabled: !0,
                        fillMode: O.h.Both,
                        timing: O.i.EaseInOut,
                        type: O.j.SlideInTop
                    }, o.createElement(O._8, {
                        display: O.R.Flex,
                        justifyContent: O._7.Center,
                        alignItems: O.c.Center
                    }, o.createElement(O.Q, {
                        color: O.K.Alt,
                        fontSize: O.V.Size5
                    }, Object(g.d)("Title this clip to publish", "ClipsEditTopNav")), o.createElement(O._8, {
                        margin: {
                            left: .5
                        },
                        display: O.R.Flex,
                        alignItems: O.c.Center
                    }, o.createElement(O._24, {
                        asset: O._25.Lock,
                        type: O._26.Warn
                    })))))
                }, t
            }(o.Component)),
            x = Object(c.d)("ClipsEditTopNav", {
                autoReportInteractive: !0
            })(I),
            L = n("l21v"),
            D = function() {
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
                clappy: Object(L.f)("192361", 3),
                clappyDerp: Object(L.f)("192362", 3),
                clappyHype: Object(L.f)("192363", 3)
            });

        function j() {
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
        var P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        percent: 0,
                        messageData: j()
                    }, t.onTimerUpdate = function() {
                        t.state.percent >= 100 ? t.countdownTimer.stop() : t.setState({
                            percent: t.state.percent + 1,
                            messageData: t.state.percent % 4 == 0 ? j() : t.state.messageData
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.countdownTimer = new D({
                        onInterval: this.onTimerUpdate,
                        intervalMillis: 500
                    }), this.countdownTimer.start()
                }, t.prototype.componentWillUnmount = function() {
                    this.countdownTimer.stop()
                }, t.prototype.render = function() {
                    return o.createElement(O._35, {
                        className: "clips-post-edit-loading",
                        padding: 4,
                        background: O.n.Base,
                        border: !0
                    }, o.createElement(O._8, {
                        display: O.R.Flex,
                        justifyContent: O._7.Between,
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(O.Q, {
                        type: O._49.Span,
                        fontSize: O.V.Size6
                    }, Object(g.d)("Publishing Clip!", "ClipsPostEditLoading")), o.createElement(O._8, {
                        display: O.R.InlineBlock
                    }, this.state.percent, "%")), o.createElement(O._18, {
                        animationDirection: O._19.Up,
                        animationDuration: 50,
                        mask: !0
                    }), o.createElement(O._8, {
                        margin: {
                            top: 2
                        }
                    }, o.createElement(O._8, {
                        className: "clips-post-edit-loading-clappy",
                        display: O.R.InlineBlock
                    }, o.createElement(O.e, {
                        duration: O.g.ExtraLong,
                        enabled: !0,
                        type: O.j.Bounce,
                        loop: !0,
                        timing: O.i.EaseOut
                    }, o.createElement(O.N, {
                        src: this.state.messageData.icon,
                        alt: Object(g.d)("Clappy looking good", "ClipsPostEditLoading")
                    })), o.createElement(O._8, {
                        position: O._15.Relative
                    }, o.createElement(O.q, {
                        direction: O.r.Right,
                        elevation: 2,
                        show: !0,
                        tailBackground: O.n.Alt2,
                        offsetY: "-3.8rem",
                        offsetX: "1.5rem"
                    }, o.createElement(O._35, {
                        padding: 1,
                        background: O.n.Alt2
                    }, o.createElement(O.Q, {
                        color: O.K.Alt2
                    }, this.state.messageData.text)))))))
                }, t
            }(o.Component),
            M = n("4Gcm"),
            B = n("bhVC"),
            U = n("2hJ3"),
            V = n("WNmM"),
            A = n("ZxOd"),
            H = (n("Ks2M"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showConfirmation: !1
                    }, t.copyClipURL = function() {
                        Object(U.a)(Object(p.a)(t.props.slug)), t.setState({
                            showConfirmation: !0
                        }), setTimeout(function() {
                            t.setState({
                                showConfirmation: !1
                            })
                        }, 2e3);
                        var e = t.props,
                            n = e.clipId,
                            i = e.gameName,
                            a = e.broadcasterId,
                            r = e.broadcasterLogin;
                        Object(V.c)(n, i, a, r, d.PageviewLocation.ClipsEditing)(B.b.CopyInput)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(O._35, {
                        className: "clips-post-edit-share",
                        padding: 3,
                        background: O.n.Base,
                        border: !0
                    }, o.createElement(O._8, {
                        margin: {
                            bottom: 2
                        },
                        position: O._15.Relative,
                        fullWidth: !0
                    }, o.createElement(M.a, {
                        text: Object(p.a)(this.props.slug),
                        icon: !0,
                        iconAsset: O._25.Link,
                        onSelection: this.copyClipURL,
                        "data-a-target": "clip-share-input"
                    }), o.createElement(O.q, {
                        tailBackground: O.n.Alt,
                        direction: O.r.TopCenter,
                        show: this.state.showConfirmation,
                        offsetY: "1rem",
                        elevation: 2
                    }, o.createElement(O._35, {
                        background: O.n.Alt,
                        textAlign: O._45.Center,
                        padding: {
                            y: 1
                        }
                    }, o.createElement(O.Q, {
                        color: O.K.Alt,
                        fontSize: O.V.Size5
                    }, Object(g.d)("Copied!", "ClipsPostEditShare"))))), o.createElement(O._8, {
                        display: O.R.Flex,
                        justifyContent: O._7.Center
                    }, o.createElement(A.a, {
                        slug: this.props.slug,
                        pageType: d.PageviewLocation.ClipsEditing
                    })))
                }, t
            }(o.Component)),
            W = n("8cOU"),
            z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.isDonePolling(e) && !this.isDonePolling(this.props) && this.props.data.stopPolling()
                }, t.prototype.render = function() {
                    var e = this.props.data.clip,
                        t = !(!this.isDonePolling() || !e),
                        n = null;
                    return n = t && e ? o.createElement(H, {
                        slug: this.props.slug,
                        clipId: e.id,
                        broadcasterId: e.broadcaster && e.broadcaster.id,
                        broadcasterLogin: e.broadcaster && e.broadcaster.login,
                        gameName: e.game && e.game.name
                    }) : o.createElement(P, null), o.createElement(O.e, {
                        duration: O.g.ExtraLong,
                        enabled: t,
                        fillMode: O.h.Both,
                        timing: O.i.EaseInOut,
                        type: O.j.SlideInBottom
                    }, o.createElement(O._8, {
                        display: O.R.Flex,
                        justifyContent: O._7.Center,
                        padding: {
                            top: 4
                        }
                    }, n))
                }, t.prototype.isDonePolling = function(e) {
                    void 0 === e && (e = this.props);
                    var t = e.data,
                        n = t.loading,
                        i = t.clip;
                    return !n && i && i.creationState !== F.a.creating
                }, t
            }(o.Component),
            G = Object(v.a)(W, {
                options: function(e) {
                    return {
                        pollInterval: 1e3,
                        fetchPolicy: "network-only",
                        variables: {
                            slug: e.slug
                        }
                    }
                }
            })(z),
            K = n("ynxC"),
            Q = n("0Ssf"),
            q = n("nU46"),
            $ = n("dPTw"),
            Y = (n("DkK3"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.slug,
                        t = o.createElement(O._8, {
                            alignItems: O.c.Center,
                            display: O.R.Flex,
                            flexDirection: O.T.Row,
                            justifyContent: O._7.Start,
                            margin: {
                                y: 1
                            },
                            ellipsis: !0
                        }, o.createElement(O._35, {
                            display: O.R.Flex,
                            fontSize: O.V.Size5
                        }, o.createElement(O.Q, {
                            type: O._49.Span
                        }, Object(S.b)(this.props.createdAt)), o.createElement(O._8, {
                            margin: {
                                x: .5
                            }
                        }, "•")), o.createElement(Q.a, {
                            slug: e,
                            ellipsis: !0
                        }));
                    return o.createElement(O._35, {
                        className: "clips-post-edit-sidebar",
                        display: O.R.Flex,
                        flexDirection: O.T.Column,
                        background: O.n.Base
                    }, o.createElement(O._35, {
                        className: "clips-post-edit-sidebar-top",
                        borderBottom: !0
                    }, o.createElement(K.a, {
                        slug: e
                    })), o.createElement(O._8, {
                        fullHeight: !0,
                        display: O.R.Flex,
                        alignItems: O.c.Center
                    }, o.createElement(O._8, {
                        className: "clips-sidebar-info",
                        display: O.R.Flex,
                        flexDirection: O.T.Column,
                        justifyContent: O._7.Around,
                        padding: 1
                    }, o.createElement($.a, {
                        slug: e
                    }), o.createElement(q.a, {
                        slug: e
                    }), t)))
                }, t
            }(o.Component)),
            J = n("vwd7"),
            X = n("f8OD"),
            Z = (n("D9gI"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isPollingTimedOut: !1,
                        isPlayerIframeLoaded: !1,
                        hideContent: !1,
                        shouldAnimate: !0
                    }, t.timeoutID = 0, t.hasSentEditClip = !1, t.onLoaded = function() {
                        t.setState({
                            isPlayerIframeLoaded: !0
                        })
                    }, t.onAnimationEnd = function() {
                        t.setState({
                            shouldAnimate: !1
                        })
                    }, t.getIsClipResolved = function(e) {
                        var n = t.getClipCreationState(e);
                        return t.getRawMediaExists(e) && (n === F.a.created || n === F.a.failed)
                    }, t.getIsCreationFailed = function(e) {
                        return t.getRawMediaExists(e) && t.getClipCreationState(e) === F.a.failed
                    }, t.getClipCreationState = function(e) {
                        return e.data.clip && e.data.clip.rawMedia && e.data.clip.rawMedia.status || ""
                    }, t.getRawMediaExists = function(e) {
                        return Boolean(e.data.clip && e.data.clip.rawMedia)
                    }, t.hideTransitioningState = function() {
                        t.setState({
                            hideContent: !0,
                            shouldAnimate: !0
                        }), setTimeout(function() {
                            t.setState({
                                hideContent: !1
                            })
                        }, 200)
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
                    this.maybeRedirectToView(e), !this.props.isPostEdit && e.isPostEdit && (this.hideTransitioningState(), this.props.playerConnection.sendMessage(Object(y.r)({
                        isPostEdit: !0
                    }))), this.getIsClipResolved(e) && (this.props.data.stopPolling(), clearTimeout(this.timeoutID), this.props.latencyTracking.reportInteractive())
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
                    if (this.state.isPollingTimedOut || this.getIsCreationFailed(this.props)) return o.createElement(h.b, {
                        to: Object(p.f)(u.a.Default)
                    });
                    var e = this.props.data.clip,
                        t = e && e.rawMedia,
                        n = this.getIsClipResolved(this.props),
                        i = null;
                    i = this.props.isPostEdit ? o.createElement(G, {
                        slug: this.props.slug
                    }) : o.createElement(T, {
                        isClipResolved: n,
                        slug: this.props.slug,
                        broadcasterName: e && e.broadcaster && e.broadcaster.displayName || "",
                        initialOffsetStart: t && t.defaultClipInitialOffset,
                        duration: t && t.duration
                    });
                    var a = f("clips-edit-clip-wrapper", {
                        "clips-post-edit-clip-wrapper-hide": this.state.hideContent,
                        "clips-post-edit-clip-wrapper": this.props.isPostEdit
                    });
                    return o.createElement(O._8, null, o.createElement(x, {
                        showMessage: n,
                        isPostEdit: this.props.isPostEdit
                    }), o.createElement(O.e, {
                        duration: O.g.ExtraLong,
                        enabled: this.state.shouldAnimate,
                        fillMode: O.h.Both,
                        timing: O.i.EaseInOut,
                        type: O.j.SlideInBottom,
                        onAnimationEnd: this.onAnimationEnd
                    }, o.createElement(O._8, {
                        className: a,
                        padding: 2
                    }, o.createElement(O._35, {
                        display: O.R.Flex,
                        border: this.props.isPostEdit
                    }, o.createElement(O.k, {
                        ratio: O.l.Aspect16x9
                    }, o.createElement(O._8, {
                        position: O._15.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, o.createElement(J.b, {
                        slug: this.props.slug,
                        onLoaded: this.onLoaded,
                        playerType: J.a.Editing
                    }))), this.props.isPostEdit && o.createElement(Y, {
                        slug: this.props.slug,
                        createdAt: e && e.createdAt
                    })), i)))
                }, t.prototype.maybeRedirectToView = function(e) {
                    var t = e.data.clip && e.data.clip.isPublished,
                        n = e.data.clip && e.data.clip.curator && this.props.userLogin && e.data.clip.curator.login !== this.props.userLogin;
                    (t || n) && g.o.history.push("/" + e.slug)
                }, t
            }(o.Component)),
            ee = Object(m.compose)(Object(y.t)({
                playerId: function(e) {
                    return e.slug
                }
            }), Object(v.a)(X, {
                options: function(e) {
                    return {
                        pollInterval: 1e3,
                        fetchPolicy: "network",
                        variables: {
                            slug: e.slug
                        }
                    }
                }
            }), Object(c.d)("EditClip"))(Z),
            te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleRedirect = function(e) {
                        if ("/:slug/edit" === e.match.path) e.history.replace("/create", r.__assign({}, e.location.state, {
                            slug: e.match.params.slug
                        }));
                        else if (e.shouldRedirectToError) e.history.push(Object(p.f)(u.a.NotLoggedIn));
                        else if (!e.location.state || !e.location.state.slug) return e.history.push("/")
                    }, t.reportInteractive = function() {
                        t.props.latencyTracking.reportInteractive(1)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.handleRedirect(this.props), this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.handleRedirect(e), this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.location.state && this.props.location.state.slug;
                    return e ? o.createElement(O._8, null, o.createElement(ee, {
                        slug: e,
                        isPostEdit: !!this.props.location.state.isPostEdit,
                        userLogin: this.props.userLogin
                    })) : null
                }, t = r.__decorate([Object(c.d)("ClipsEditingPage", {
                    destination: l.a.ClipsEditing
                }), Object(s.a)({
                    location: d.PageviewLocation.ClipsEditing
                })], t)
            }(o.Component);
        var ne = Object(i.b)(function(e) {
            var t = Object(a.c)(e);
            return {
                shouldRedirectToError: Object(a.e)(e) && !Object(a.d)(e),
                userLogin: t && t.login
            }
        })(te);
        n.d(t, "ClipsCreate", function() {
            return ne
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
                    }, Object(d._63)(n.props)), n.renderIcon()) : r.createElement("button", a.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(d._63)(n.props)), n.renderIcon())
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
                    return r.createElement(d._8, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, r.createElement(d._24, {
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
                            return d._25.Twitter;
                        case i.Facebook:
                            return d._25.Facebook;
                        case i.VKontakte:
                            return d._25.VKontakte;
                        case i.Reddit:
                            return d._25.Reddit;
                        case i.Copy:
                        default:
                            return d._25.Copy
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
                return r.createElement(d._8, {
                    className: "social-button"
                }, r.createElement(d._52, {
                    label: this.getTooltipFromType(),
                    direction: d._54.Top
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
        t.c = l, t.b = function(e, t) {
            return d(l(e), t)
        }, t.a = d;
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

        function l(e) {
            e.video && (e.video = Object(o.b)(e.video));
            var t = a.stringify(e);
            return r.o.config.playerBaseURL + "/?" + t
        }

        function d(e, t) {
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
                canCheer: t <= a.k,
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
            k = n("isxN"),
            b = {
                publishState: r.Unsent,
                errorMessage: null
            },
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = b, t.onError = function(e) {
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
                    this.state.publishState === r.Error && e.title.length > 0 && this.props.title !== e.title && this.setState(b), e.isSubmitted && !this.props.isSubmitted && this.onPublish()
                }, t.prototype.render = function() {
                    var e = this.state.publishState === r.Error,
                        t = this.state.publishState === r.Sending;
                    return s.createElement(y._8, null, s.createElement(y.v, {
                        onClick: this.onPublish,
                        disabled: e,
                        state: t ? y.A.Loading : y.A.Default,
                        size: y.z.Large,
                        blurAfterClick: !0
                    }, Object(l.d)("Publish", "ClipsPublishButton")))
                }, t = o.__decorate([Object(d.a)(k, {
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
                        return s.createElement("div", null, s.createElement(y._46, {
                            id: O.TITLE_INPUT,
                            "data-test-selector": O.TITLE_INPUT,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        }), s.createElement(y._8, {
                            display: y.R.Flex,
                            justifyContent: y._7.Between,
                            alignItems: y.c.Center,
                            padding: {
                                top: 1
                            }
                        }, n.state.showError ? s.createElement(y.Q, {
                            color: y.K.Error
                        }, n.getErrorMessage()) : s.createElement(y.Q, {
                            color: y.K.Alt2
                        }, n.getRemainingCharacterText()), s.createElement(y._8, {
                            display: y.R.Flex
                        }, s.createElement(y.v, {
                            "data-test-selector": O.TITLE_SAVE,
                            onClick: n.props.onCancel,
                            type: y.B.Hollow
                        }, Object(l.d)("Cancel", "ClipsTitleEdit")), s.createElement(y._8, {
                            padding: {
                                left: 1
                            }
                        }, n.renderSave()))))
                    }, n.renderForManager = function() {
                        return s.createElement(y.W, {
                            id: O.TITLE_INPUT,
                            label: Object(l.d)("Title", "ClipsTitleEdit"),
                            hint: n.getRemainingCharacterText()
                        }, s.createElement(y._8, {
                            display: y.R.Flex,
                            flexWrap: y.U.NoWrap
                        }, s.createElement(y._8, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, s.createElement(y._4, {
                            id: O.TITLE_INPUT,
                            "data-test-selector": O.TITLE_INPUT,
                            type: y._5.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        })), s.createElement(y._8, {
                            flexShrink: 0,
                            flexGrow: 0
                        }, s.createElement(y._8, {
                            position: y._15.Relative
                        }, n.renderSave(), s.createElement(y._6, {
                            onClick: n.dismissMessage,
                            "data-test-selector": O.TITLE_SAVE_TOOLTIP
                        }, s.createElement(y.q, {
                            direction: y.r.TopRight,
                            show: n.state.showError || n.state.showSuccess
                        }, s.createElement(y._8, {
                            padding: 1
                        }, n.state.showSuccess ? s.createElement(y.Q, {
                            color: y.K.Link
                        }, Object(l.d)("Title Saved!", "ClipsTitleEdit")) : s.createElement(y.Q, {
                            color: y.K.Error
                        }, n.getErrorMessage()))))))))
                    }, n.renderForEdit = function() {
                        var e;
                        if ((n.props.startOffset || 0 === n.props.startOffset) && n.props.endOffset) return e = n.state.showError ? s.createElement(y.Q, {
                            color: y.K.Error
                        }, n.getErrorMessage()) : 0 === n.state.title.length && n.props.broadcasterName ? s.createElement(y.Q, {
                            color: y.K.Alt2
                        }, Object(l.d)("Clips with titles get more views. Help {broadcasterName} get discovered by adding a title.", {
                            broadcasterName: n.props.broadcasterName
                        }, "ClipsTitleEdit")) : s.createElement(y.Q, {
                            color: y.K.Alt2
                        }, n.getRemainingCharacterText()), s.createElement(y._8, null, s.createElement(y._8, {
                            fullWidth: !0
                        }, s.createElement(y._4, {
                            id: O.TITLE_INPUT,
                            "data-test-selector": O.TITLE_INPUT,
                            type: y._5.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown,
                            placeholder: Object(l.d)("Add a title (required)", "ClipsTitleEdit"),
                            autoFocus: !0
                        })), s.createElement(y._8, {
                            display: y.R.Flex,
                            justifyContent: y._7.Between,
                            alignItems: y.c.Center,
                            padding: {
                                top: 1
                            }
                        }, e, s.createElement(y._8, {
                            display: y.R.Flex
                        }, s.createElement(y._8, {
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
                        return s.createElement(y.v, {
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
    VmM7: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.Orange = "orange", e.Blue = "blue"
            }(i || (i = {}))
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
            var a = /[^\s\.,\!]+/g,
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
            k = n("f6Cj"),
            b = n("Odds"),
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
                        return a.createElement(b._8, {
                            className: "clips-mobile-share-sheet__share-icon clips-social-button__icon " + t.addSocialClassModifier("clips-social-button__icon")
                        }, a.createElement(b._24, {
                            asset: e,
                            fill: !0
                        }))
                    }, t.isLink = function() {
                        return t.props.type !== l.b.Copy
                    }, t.getAssetFromType = function() {
                        switch (t.props.type) {
                            case l.b.Twitter:
                                return b._25.Twitter;
                            case l.b.Facebook:
                                return b._25.Facebook;
                            case l.b.VKontakte:
                                return b._25.VKontakte;
                            case l.b.Reddit:
                                return b._25.Reddit;
                            case l.b.Copy:
                            default:
                                return b._25.Copy
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
                                return Object(k.b)(a, r);
                            case l.b.VKontakte:
                                return Object(k.d)(a);
                            case l.b.Facebook:
                                return Object(k.a)(a);
                            case l.b.Twitter:
                                return Object(k.c)(a, r);
                            default:
                                return ""
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = a.createElement(b._8, {
                        className: "clips-mobile-share-sheet__row",
                        display: b.R.Flex,
                        alignItems: b.c.Center,
                        key: this.props.type,
                        margin: {
                            bottom: 1,
                            x: 2
                        }
                    }, this.renderIcon(), a.createElement(b._35, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(b.Q, {
                        type: b._49.Span
                    }, this.getLabelFromType())));
                    return this.renderLink(e)
                }, t.prototype.renderLink = function(e) {
                    return this.isLink() ? a.createElement("a", {
                        href: this.getLinkTarget(),
                        target: "_blank",
                        onClick: this.onShareClick,
                        "data-test-selector": "clips-social-button__link"
                    }, e) : a.createElement("div", {
                        onClick: this.copyPageUrl,
                        "data-test-selector": "clips-social-button__link"
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
                    return a.createElement(b._8, {
                        display: b.R.Flex,
                        justifyContent: b._7.End,
                        alignItems: b.c.Center,
                        margin: {
                            top: 1,
                            bottom: 1
                        }
                    }, a.createElement(b.v, {
                        type: b.B.Hollow,
                        onClick: this.onToggleShareButton,
                        "data-test-selector": "social-share-mobile-button"
                    }, t), this.state.isModalOpen && a.createElement(b._35, {
                        position: b._15.Fixed,
                        background: b.n.Overlay,
                        zIndex: b._62.Above,
                        attachLeft: !0,
                        attachTop: !0,
                        fullHeight: !0,
                        fullWidth: !0
                    }, a.createElement(v.a, {
                        onClickOut: this.onClickOut
                    }, a.createElement(b._8, {
                        position: b._15.Absolute,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        className: "clips-mobile-share-sheet",
                        display: b.R.Flex,
                        flexDirection: b.T.Column,
                        zIndex: b._62.Above,
                        "data-test-selector": "social-share-mobile-menu-root"
                    }, a.createElement(b.e, {
                        type: b.j.SlideInBottom,
                        enabled: this.state.isModalOpen
                    }, a.createElement(b._35, {
                        background: b.n.Base,
                        elevation: 3,
                        padding: {
                            bottom: 2
                        }
                    }, a.createElement(b._35, {
                        className: "clips-mobile-share-sheet__title",
                        display: b.R.Flex,
                        flexDirection: b.T.Row,
                        justifyContent: b._7.Between,
                        alignItems: b.c.Center,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            right: 1,
                            left: 2
                        },
                        borderBottom: !0
                    }, a.createElement(b.Q, {
                        bold: !0,
                        color: b.K.Alt,
                        type: b._49.Span,
                        fontSize: b.V.Size6,
                        "data-test-selector": "social-share-mobile-menu-title"
                    }, t), a.createElement(b.w, {
                        "data-test-selector": "social-share-mobile-menu-close",
                        icon: b._25.Close,
                        ariaLabel: "Close Share",
                        size: b.x.Large,
                        onClick: this.onToggleShareButton
                    })), a.createElement(b._8, null, m.b.map(function(t) {
                        return a.createElement(_, {
                            key: t.type,
                            type: t.type,
                            text: e.props.clip.title,
                            url: Object(p.a)(e.props.clip.url, t.params),
                            onShareClick: e.onShareClick
                        })
                    }))))))), this.state.isCopiedModalOpen && a.createElement(b._8, {
                        fullWidth: !0,
                        attachLeft: !0,
                        attachBottom: !0,
                        className: "clips-mobile-share-sheet",
                        position: b._15.Fixed,
                        zIndex: b._62.Above
                    }, a.createElement(b.e, {
                        type: b.j.SlideInBottom,
                        duration: b.g.Short,
                        enabled: this.state.isCopiedModalOpen
                    }, a.createElement(b._35, {
                        padding: {
                            x: 1,
                            y: 1
                        },
                        background: b.n.Base,
                        elevation: 3,
                        borderTop: !0,
                        display: b.R.Flex,
                        alignItems: b.c.Center
                    }, a.createElement(b._8, {
                        margin: {
                            right: .5
                        }
                    }, a.createElement(b.e, {
                        type: b.j.BounceIn,
                        duration: b.g.Medium,
                        delay: b.f.Short,
                        enabled: this.state.isCopiedModalOpen
                    }, a.createElement(b._24, {
                        type: b._26.Success,
                        asset: b._25.Check
                    }))), a.createElement(b.Q, {
                        type: b._49.Span,
                        fontSize: b.V.Size4,
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
                    if (!t && !Object(g.d)(window.navigator.userAgent)) return a.createElement(b._8, null, this.renderPlaceholders());
                    if (!t && Object(g.d)(window.navigator.userAgent)) return a.createElement(b._8, null, this.renderMobilePlaceholders());
                    if (Object(g.d)(window.navigator.userAgent)) return a.createElement(S, {
                        clip: t
                    });
                    var n = Object(r.d)("More", "ClipsSocialShare");
                    return a.createElement(b._8, {
                        display: b.R.Flex,
                        justifyContent: b._7.End,
                        alignItems: b.c.Center,
                        margin: {
                            y: 1
                        }
                    }, m.b.map(function(n) {
                        return a.createElement(b._8, {
                            display: b.R.InlineBlock,
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
                    }), a.createElement(b._8, {
                        display: b.R.InlineBlock,
                        position: b._15.Relative
                    }, a.createElement(d.a, null, a.createElement(b.v, {
                        type: b.B.Hollow,
                        ariaLabel: n,
                        "data-test-selector": "social-share-button"
                    }, n), a.createElement(b.q, {
                        direction: b.r.BottomRight,
                        noTail: !0
                    }, a.createElement(b._8, {
                        padding: 1
                    }, a.createElement(b.W, {
                        id: "social-share-link",
                        orientation: b.X.Vertical,
                        label: Object(r.d)("Link", "ClipsSocialShare"),
                        "data-test-selector": "social-share-link"
                    }, a.createElement(o.a, {
                        value: t.url,
                        onClick: this.trackLinkShare
                    })), a.createElement(b._8, {
                        padding: {
                            top: 1
                        }
                    }, a.createElement(b.W, {
                        id: "social-share-link",
                        orientation: b.X.Vertical,
                        label: Object(r.d)("Embed Link", "ClipsSocialShare"),
                        "data-test-selector": "social-share-embed-link"
                    }, a.createElement(o.a, {
                        value: Object(u.a)(this.props.data.clip.embedURL),
                        onClick: this.trackLinkShare
                    }))))))))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return a.createElement(b.e, {
                        type: b.j.FadeIn,
                        duration: b.g.Medium,
                        enabled: !0
                    }, a.createElement(b._8, {
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: b.R.Flex,
                        justifyContent: b._7.End
                    }, a.createElement(b._8, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(b._14, {
                        width: 30,
                        height: 30
                    })), a.createElement(b._8, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(b._14, {
                        width: 30,
                        height: 30
                    })), a.createElement(b._8, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(b._14, {
                        width: 30,
                        height: 30
                    })), a.createElement(b._8, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(b._14, {
                        width: 30,
                        height: 30
                    })), a.createElement(b._8, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(b._14, {
                        width: 46,
                        height: 30
                    }))))
                }, t.prototype.renderMobilePlaceholders = function() {
                    return a.createElement(b._8, {
                        margin: {
                            y: 1
                        },
                        display: b.R.Flex,
                        justifyContent: b._7.End
                    }, a.createElement(b._8, null, a.createElement(b._14, {
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
    cvQl: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e[e.Left = 0] = "Left", e[e.Middle = 1] = "Middle", e[e.Right = 2] = "Right", e[e.Back = 3] = "Back", e[e.Forward = 4] = "Forward"
            }(i || (i = {}))
    },
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
                    if (!this.props.data.clip || this.props.data.loading) return a.createElement(l._8, null, this.renderPlaceholders());
                    var e = this.props.padding && this.props.padding.bottom,
                        t = void 0 === e ? .5 : e;
                    return a.createElement(l._8, {
                        display: l.R.Flex,
                        alignItems: l.c.Center,
                        padding: {
                            bottom: t
                        }
                    }, !this.props.hideSymbol && a.createElement(l._8, {
                        margin: {
                            right: .5
                        },
                        display: l.R.Flex,
                        alignItems: l.c.Center
                    }, a.createElement(l._24, {
                        asset: l._25.GlyphViews,
                        type: l._26.Brand
                    })), a.createElement(l.Q, {
                        bold: !0,
                        type: l._49.Span,
                        fontSize: this.props.fontSize ? this.props.fontSize : l.V.Size5
                    }, Object(r.d)("{views} views", {
                        views: Object(r.e)(this.props.data.clip.viewCount)
                    }, "ClipsViewCount")))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return a.createElement(l.e, {
                        type: l.j.FadeIn,
                        duration: l.g.Long,
                        enabled: !0
                    }, a.createElement(l.Q, {
                        fontSize: this.props.fontSize ? this.props.fontSize : l.V.Size5
                    }, a.createElement(l._14, {
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
                end: 276
            }
        };
        n.loc.source = {
            body: "query ClipsRawMedia($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\ndisplayName\n}\ncurator {\nid\nlogin\n}\nrawMedia {\ndefaultClipInitialOffset\nduration\nfilmStripFrames\nfilmStripSecondsPerFrame\nframeHeight\nframeWidth\nspritesheetURL\nstatus\nvideoURL\n}\nisPublished\ncreatedAt\n}\n}",
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
            var t = Object(s.c)(e);
            return {
                currentUserLogin: t && t.login,
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
        }), n.d(t, "b", function() {
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
                    if (n.type !== o.q) throw new Error("ToggleBalloonWrapper needs a Balloon as its second child element");
                    var r = a.cloneElement(t, {
                            onClick: this.handleButtonClick
                        }),
                        s = null;
                    (this.state.hasInteracted || this.props.alwaysMountBalloonContent) && (s = a.cloneElement(n, {
                        show: this.state.showBalloon
                    }));
                    var l = r;
                    return this.props.tooltipProps && (l = a.createElement(o._52, i.__assign({}, this.props.tooltipProps), r)), a.createElement(o._8, {
                        "data-toggle-balloon-id": this.toggleBalloonId,
                        display: this.props.display,
                        position: o._15.Relative
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
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "a", function() {
            return u
        });
        var i, a, r, o = n("HW6M"),
            s = (n.n(o), n("GiK3")),
            l = (n.n(s), n("VmM7")),
            d = n("Odds"),
            c = n("CBaN");
        n.n(c);
        ! function(e) {
            e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
        }(i || (i = {})),
        function(e) {
            e[e.Handle = 0] = "Handle"
        }(a || (a = {})),
        function(e) {
            e[e.Small = 15] = "Small", e[e.Medium = 25] = "Medium"
        }(r || (r = {}));
        var u = function(e) {
            var t = o("draggable-slider-handle", {
                "draggable-slider-handle--left": e.handlePosition === i.Left,
                "draggable-slider-handle--right": e.handlePosition === i.Right,
                "draggable-slider-handle--blue": e.color === l.a.Blue,
                "draggable-slider-handle--orange": e.color === l.a.Orange
            });
            return s.createElement(d._2, {
                flexGrow: 0,
                flexShrink: 0,
                className: t,
                display: d.R.Flex,
                fullHeight: !0
            }, s.createElement("div", {
                "data-test-selector": a.Handle,
                onMouseDown: e.onMouseDown,
                ref: e.onRef
            }, s.createElement(d._24, {
                asset: d._25.DragHandle,
                width: e.size
            })))
        }
    },
    l21v: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("Aj/L"),
            o = n("iydZ"),
            s = n("mwvJ"),
            l = new RegExp("(?:^|\\s)(?:https?://)?clips.twitch.tv/(\\w+)(?:/)?(\\w+)?(?:/edit)?(?:$|\\s)?");
        var d = n("YhVV"),
            c = n("3KVC"),
            u = n("e1CU");
        t.a = function(e, t, n, a, r, o) {
            void 0 === o && (o = !1);
            var s;
            s = r ? Object(d.b)(e, r) : function(e) {
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
                                        "1x": S(n, 1),
                                        "2x": S(n, 2),
                                        "4x": S(n, 4)
                                    }
                                }
                            }
                        }
                    })
                });
                return t
            }(t.emotes);
            var l = Object(u.a)(t.displayName, t.username);
            return {
                badges: t.badges || {},
                bits: t.bits,
                user: i.__assign({}, l, {
                    userLogin: t.username,
                    userID: t.userID,
                    userType: t.userType,
                    color: t.color || v(t.userID)
                }),
                messageParts: e ? y(e, s, t.bits, n, a, t.username) : [],
                deleted: o,
                timestamp: Date.now()
            }
        }, t.b = v, t.g = y, t.d = k, t.c = _, t.f = S, t.e = function(e) {
            return {
                src: S(e, 1),
                srcSet: S(e, 1) + " 1x, " + S(e, 2) + " 2x, " + S(e, 3) + " 4x"
            }
        };
        var p = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"],
            f = {},
            m = /^(?:(https?:\/\/)?(?:[\w@#%\-+=:~]+\.)+[a-z]{2,8}(?:\/[\w./@#%&()\-+=:?~]*)?)$/g,
            h = /@([^\u0000-\u007F]|[\w-])+/,
            g = /['"*([{</]+/;

        function v(e, t) {
            return void 0 === t && (t = 15), "number" != typeof f[e] && (f[e] = Math.floor(Math.random() * t)), p[f[e]]
        }

        function y(e, t, n, a, r, o) {
            void 0 === t && (t = []);
            var l = [],
                d = 0,
                c = k(e);
            t.forEach(function(t) {
                var u = c ? c.slice(d, t.startIndex).join("") : e.slice(d, t.startIndex);
                u && (l = n ? l.concat(b(u, o, r, a)) : l.concat(_(u, o, r))), l.push({
                    type: s.a.Emote,
                    content: i.__assign({
                        alt: c ? c.slice(t.startIndex, t.endIndex).join("") : e.slice(t.startIndex, t.endIndex)
                    }, t.data)
                }), d = t.endIndex
            });
            var u = c ? c.slice(d).join("") : e.slice(d);
            return u && (l = n ? l.concat(b(u, o, r, a)) : l.concat(_(u, o, r))), l
        }

        function k(e) {
            return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g)
        }

        function b(e, t, n, i) {
            if (!i) return _(e, t, n);
            var a = Object(o.c)(e, i).map(function(e) {
                return e.type === s.a.Text ? _(e.content, t, n) : e
            });
            return [].concat.apply([], a)
        }

        function _(e, t, n) {
            var i = [],
                o = e.split(/\s+/),
                d = Object(r.c)(a.o.store.getState());
            return o.forEach(function(e, r) {
                m.lastIndex = 0, h.lastIndex = 0;
                var u = m.exec(e),
                    p = 0 === r,
                    f = r === o.length - 1,
                    v = function(e, t, n, i, a) {
                        var r = [],
                            o = e.indexOf("@"),
                            l = e.match(h),
                            d = e.slice(0, o),
                            c = 0 === d.length || g.test(d);
                        if (!l || l.length < 1 || !c) return r;
                        var u = l[0].slice(1);
                        o > 0 && r.push({
                            type: s.a.Text,
                            content: (n ? "" : " ") + e.slice(0, o)
                        });
                        r.push({
                            type: s.a.Mention,
                            content: {
                                sender: t,
                                recipient: u,
                                isCurrentUserRecipient: w(u, a)
                            }
                        });
                        var p = o + u.length + 1;
                        p < e.length && r.push({
                            type: s.a.Text,
                            content: e.slice(p) + (i ? "" : " ")
                        });
                        return r
                    }(e, t, p, f, d);
                if (u) {
                    var y = u.index;
                    0 !== y && i.push({
                        type: s.a.Text,
                        content: "" + e.slice(0, y)
                    });
                    var k = m.lastIndex;
                    if (n) i.push({
                        type: s.a.Text,
                        content: " <" + Object(a.d)("deleted link", "CreateMessageData") + "> "
                    });
                    else {
                        var b = (u[1] ? "" : "https://") + e.slice(y, k);
                        if (function(e) {
                                return void 0 === e && (e = ""), l.test(e) && !e.includes("clips.twitch.tv/2017/")
                            }(b)) {
                            var _ = function(e) {
                                void 0 === e && (e = "");
                                var t = e.match(l);
                                return null === t ? "" : t && t.length > 0 && void 0 !== t.index ? t[1] : ""
                            }(b);
                            i.push({
                                type: s.a.ClipLink,
                                content: {
                                    slug: _,
                                    url: b,
                                    displayText: e.slice(y, k)
                                }
                            })
                        } else if (Object(c.a)(b)) {
                            var S = Object(c.b)(b);
                            i.push({
                                type: s.a.VideoLink,
                                content: {
                                    id: S,
                                    url: b,
                                    displayText: e.slice(y, k)
                                }
                            })
                        } else i.push({
                            type: s.a.Link,
                            content: {
                                displayText: e.slice(y, k),
                                url: b
                            }
                        })
                    }
                    var O = e.slice(k),
                        E = "";
                    r < o.length - 1 && (E = " "), O && i.push({
                        type: s.a.Text,
                        content: "" + O + E
                    })
                } else if (v.length > 0) i.push.apply(i, v);
                else if (w(e, d)) i.push({
                    type: s.a.CurrentUserHighlight,
                    content: e
                });
                else {
                    var C = i.length && i[i.length - 1];
                    E = f ? "" : " ";
                    if (C && C.type === s.a.Text) C.content += e + E;
                    else {
                        var N = p ? "" : " ";
                        i.push({
                            type: s.a.Text,
                            content: N + e + E
                        })
                    }
                }
            }), i
        }

        function S(e, t) {
            return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/" + Math.min(Math.ceil(t), 3) + ".0"
        }

        function w(e, t) {
            if (!t) return !1;
            var n = t.displayName,
                i = t.login;
            return e === n || e.toLowerCase() === i
        }
    },
    mwvJ: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e[e.Text = 0] = "Text", e[e.CurrentUserHighlight = 1] = "CurrentUserHighlight", e[e.Mention = 2] = "Mention", e[e.Link = 3] = "Link", e[e.Emote = 4] = "Emote", e[e.ClipLink = 5] = "ClipLink", e[e.VideoLink = 6] = "VideoLink"
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
                    return !this.props.data.clip || this.props.data.loading ? a.createElement(s._8, null, this.renderPlaceholders()) : a.createElement(s.Q, {
                        fontSize: this.props.fontSize ? this.props.fontSize : s.V.Size3,
                        type: s._49.Span,
                        lineHeight: s._9.Heading,
                        ellipsis: this.props.ellipsis
                    }, this.props.data.clip.title)
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return a.createElement(s.e, {
                        type: s.j.FadeIn,
                        duration: s.g.Long,
                        delay: s.f.Short,
                        enabled: !0
                    }, a.createElement(s.Q, {
                        fontSize: this.props.fontSize ? this.props.fontSize : s.V.Size3
                    }, a.createElement(s._14, {
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
    onRC: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "followButtonFragment"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "User"
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
            }],
            loc: {
                start: 0,
                end: 172
            }
        };
        n.loc.source = {
            body: "# Queries the data necessary to render the FollowButton component.\nfragment followButtonFragment on User {\nid\ndisplayName\nlogin\nself {\nfollower {\ndisableNotifications\n}\n}\n}",
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
                            e.origin === r.o.config.playerBaseURL && e.data.namespace === F && a.messageHandlers.forEach(function(t) {
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

        function k(e) {
            return m({
                method: E,
                arg: e
            })
        }

        function b(e) {
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
            F = "player.embed.client";
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
            return k
        }), n.d(t, "l", function() {
            return b
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
            return F
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
                return i.createElement(s._8, {
                    className: "clips-social-share",
                    display: s.R.Flex,
                    flexWrap: s.U.NoWrap
                }, l.map(function(t) {
                    return i.createElement(s._8, {
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
            o = n("AoO8"),
            s = n("CSlQ"),
            l = n("rqhk"),
            d = "MOST_RECENT_CLIPS_WATCHED_STORAGE_KEY",
            c = 10;

        function u(e) {
            var t = JSON.parse(r.l.get(d, "[]"));
            t && t.length >= c && (t = t.slice(1, c)), r.l.set(d, JSON.stringify(t.concat([e])))
        }
        var p, f = n("46tX"),
            m = n("Odds");
        n("vtXo");
        ! function(e) {
            e.Viewing = "clips-viewing", e.Editing = "clips-editing"
        }(p || (p = {}));
        var h = {
                allow: "autoplay"
            },
            g = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.hasSetPlayerRef = !1, n.setInitialSlug = function(e) {
                        n.state.initialSlug || (n.setState({
                            initialSlug: e
                        }), u(e))
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
                    }, i && u(i), n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setInitialSlug(this.props.slug)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.initialSlug || this.setInitialSlug(e.slug), this.props.slug !== e.slug && e.slug && this.setClip(e.slug)
                }, t.prototype.componentWillUnmount = function() {
                    Object(l.q)(this.props.slug)
                }, t.prototype.componentDidUpdate = function() {
                    !this.hasSetPlayerRef && this.playerRef && (this.hasSetPlayerRef = !0, Object(l.s)(this.props.slug, this.playerRef.contentWindow), this.playerRef.contentWindow.postMessage(Object(l.m)(), r.o.config.playerBaseURL))
                }, t.prototype.render = function() {
                    return this.state.initialSlug ? a.createElement(m._35, {
                        className: "clips-video-iframe",
                        position: m._15.Relative,
                        fullWidth: !0,
                        fullHeight: !0
                    }, a.createElement(m._35, {
                        display: this.state.isLoaded ? m.R.Hide : m.R.Flex,
                        color: m.K.Overlay,
                        alignItems: m.c.Center,
                        justifyContent: m._7.Center,
                        position: m._15.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, a.createElement(m._10, {
                        size: m._33.Large,
                        inheritColor: !0
                    })), a.createElement(m._2, {
                        display: this.state.isLoaded ? m.R.Block : m.R.HideAccessible,
                        position: m._15.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, a.createElement("iframe", i.__assign({
                        src: Object(o.c)({
                            player: this.props.playerType,
                            clip: this.state.initialSlug,
                            origin: window.location.origin,
                            branding: !1,
                            playsinline: !0,
                            externalfullscreen: !Object(f.c)(navigator.userAgent) && this.props.playerType !== p.Editing,
                            muted: this.props.playerType === p.Editing
                        })
                    }, h, {
                        frameBorder: "0",
                        scrolling: "no",
                        allowFullScreen: !0,
                        ref: this.setPlayerRef,
                        onLoad: this.setIsLoaded
                    })))) : null
                }, t.prototype.setClip = function(e) {
                    this.playerRef && (this.playerRef.contentWindow.postMessage(Object(l.l)(e), r.o.config.playerBaseURL), u(e))
                }, t = i.__decorate([Object(s.d)("ClipsVideoIframe", {
                    autoReportInteractive: !0
                })], t)
            }(a.Component);
        n.d(t, "a", function() {
            return p
        }), n.d(t, "b", function() {
            return g
        })
    },
    x4k6: function(e, t, n) {
        var i = {
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "followButtonFragment"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 156
            }
        };
        i.loc.source = {
            body: '#import "twilight/common/queries/follow-button-fragment.gql"\nquery FollowButton_User($login: String!) {\nuser(login: $login) {\nid\n...followButtonFragment\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(n("onRC").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
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
                    return a.createElement(r._4, {
                        readOnly: !0,
                        type: r._5.Text,
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
                    return this.props.data.clip && this.props.data.clip.broadcaster ? a.createElement(c._8, {
                        className: "clips-broadcaster-info",
                        padding: 1,
                        display: c.R.Flex,
                        alignItems: c.c.Center
                    }, a.createElement("a", {
                        target: "_blank",
                        href: Object(d.c)(this.props.data.clip.broadcaster.login, p)
                    }, a.createElement(c.m, {
                        src: this.props.data.clip.broadcaster.profileImageURL,
                        alt: Object(r.d)("Broadcaster Avatar", "ClipsBroadcasterInfo"),
                        size: 30
                    })), a.createElement(c._8, {
                        display: c.R.Flex,
                        flexDirection: c.T.Column,
                        flexGrow: 1,
                        margin: {
                            left: 1
                        },
                        ellipsis: !0
                    }, a.createElement("a", {
                        href: Object(d.c)(this.props.data.clip.broadcaster.login, p)
                    }, a.createElement(c.Q, {
                        fontSize: c.V.Size4,
                        type: c._49.Span
                    }, this.props.data.clip.broadcaster.displayName), !(!this.props.data.clip.broadcaster.stream || !this.props.data.clip.broadcaster.stream.id) && a.createElement(c._8, {
                        margin: {
                            left: .5
                        },
                        display: c.R.InlineBlock
                    }, a.createElement(c._12, {
                        label: Object(r.d)("LIVE", "ClipsBroadcasterInfo"),
                        type: c._13.Live
                    }))), a.createElement(c._8, null, a.createElement(c.Q, {
                        color: c.K.Alt2,
                        fontSize: c.V.Size5,
                        ellipsis: !0
                    }, this.props.data.clip.game && Object(r.d)("playing {gameName}", {
                        gameName: a.createElement("a", {
                            target: "_blank",
                            href: Object(d.d)(this.props.data.clip.game.name, {
                                tt_medium: "clips_web"
                            })
                        }, this.props.data.clip.game.displayName)
                    }, "ClipsBroadcasterInfo")))), a.createElement(c._8, {
                        flexShrink: 1
                    }, a.createElement(o.a, {
                        isHostedFollow: !1,
                        channelLogin: this.props.data.clip.broadcaster.login,
                        followUIType: o.b.IconAndText,
                        unfollowUIType: o.b.IconOnly,
                        showLoadingPlaceholder: !0
                    }))) : a.createElement(c._8, null, this.renderPlaceholders())
                }, t.prototype.renderPlaceholders = function() {
                    return a.createElement(c._8, {
                        padding: 1,
                        display: c.R.Flex,
                        alignItems: c.c.Center
                    }, a.createElement(c._8, null, a.createElement(c.e, {
                        type: c.j.FadeIn,
                        duration: c.g.Long,
                        enabled: !0
                    }, a.createElement(c._14, {
                        height: 30,
                        width: 30
                    }))), a.createElement(c._35, {
                        fontSize: c.V.Size5,
                        flexGrow: 1,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(c.e, {
                        type: c.j.FadeIn,
                        duration: c.g.Long,
                        enabled: !0
                    }, a.createElement(c._14, {
                        lineCount: 1,
                        width: 80
                    })), a.createElement(c.e, {
                        type: c.j.FadeIn,
                        duration: c.g.Long,
                        delay: c.f.Short,
                        enabled: !0
                    }, a.createElement(c._14, {
                        lineCount: 1,
                        width: 120
                    }))), a.createElement(c._8, null, a.createElement(c.e, {
                        type: c.j.FadeIn,
                        duration: c.g.Long,
                        enabled: !0
                    }, a.createElement(c._14, {
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
//# sourceMappingURL=sites.clips.pages.create-2f6cedb0f3cff160be41c34f15605e01.js.map