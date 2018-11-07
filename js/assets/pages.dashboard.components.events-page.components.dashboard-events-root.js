(window.webpackJsonp = window.webpackJsonp || []).push([
    [172], {
        "+58i": function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("NAv5"),
                o = n("q1tI"),
                s = n("/7QA"),
                l = n("HEnu"),
                d = n("u5aL"),
                c = n("8Ad5"),
                u = n("HGFl"),
                m = n("Ue10"),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.optionElement();
                        return this.props.disabled && this.props.disabledMessage ? o.createElement(m.Yb, {
                            direction: m.ac.Bottom,
                            align: m.Zb.Left,
                            width: 130,
                            display: m.X.Flex,
                            label: this.props.disabledMessage
                        }, e) : e
                    }, t.prototype.optionElement = function() {
                        var e = this.props,
                            t = e.displayValue,
                            n = e.selected,
                            a = e.value,
                            i = e.onClick,
                            r = e.disabled;
                        return o.createElement(m.Ua, {
                            hover: n,
                            "data-value": a,
                            "data-display-value": t,
                            onClick: i,
                            disabled: r,
                            type: m.Va.Alpha
                        }, o.createElement(m.Xa, {
                            refDelegate: this.props.refDelegate,
                            padding: .5
                        }, t || a))
                    }, t
                }(o.Component),
                v = n("Rzn4"),
                g = (n("ZYLp"), new Date("INVALID DATE")),
                f = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.onFocus = function() {
                            n.setState({
                                isOpen: !0
                            })
                        }, n.onInputChange = function(e) {
                            var t = e.currentTarget.value;
                            t !== n.state.displayValue && n.setValue(t)
                        }, n.onKeyDown = function(e) {
                            if ((e.charCode || e.keyCode) === c.a.Tab) {
                                var t = n.formatTime(n.state.displayValue);
                                n.setValue(t, t, !0)
                            }
                        }, n.closeDropdown = function() {
                            n.setState({
                                isOpen: !1
                            })
                        }, n.onBlur = function(e) {
                            var t = n.formatTime(e.currentTarget.value);
                            n.setValue(t, t)
                        }, n.onClickTime = function(e) {
                            var t = e.currentTarget.getAttribute("data-value"),
                                a = e.currentTarget.getAttribute("data-display-value") || t;
                            n.setValue(a, a, !0)
                        }, n.setInputRef = function(e) {
                            return n.textInput = e
                        }, n.setSelectedTimeRef = function(e) {
                            return n.selectedTime = e
                        };
                        var a = t.defaultDate ? n.timeToString(t.defaultDate) : "";
                        return n.state = {
                            isOpen: !1,
                            displayValue: a,
                            value: a
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function(e, t) {
                        this.state.isOpen && !t.isOpen && this.selectedTime && this.selectedTime.scrollIntoView && this.selectedTime.scrollIntoView()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props.options.map(function(t) {
                                return o.createElement(p, i.__assign({}, t, {
                                    key: t.value,
                                    onClick: e.onClickTime,
                                    selected: t.value === e.state.value,
                                    refDelegate: t.value === e.state.value ? e.setSelectedTimeRef : void 0
                                }))
                            });
                        return o.createElement(m.Xa, {
                            position: m.jb.Relative,
                            "data-a-target": "time-pick-field",
                            className: "time-picker"
                        }, o.createElement(d.a, {
                            onClickOut: this.closeDropdown
                        }, o.createElement(m.Ra, {
                            type: m.Ta.Text,
                            onFocus: this.onFocus,
                            onChange: this.onInputChange,
                            onBlur: this.onBlur,
                            onKeyDown: this.onKeyDown,
                            refDelegate: this.setInputRef,
                            value: this.state.displayValue
                        }), o.createElement(m.Xa, {
                            className: "time-picker__balloon",
                            position: m.jb.Absolute
                        }, o.createElement(m.u, {
                            noTail: !0,
                            show: this.state.isOpen,
                            "data-a-target": "time-selector-balloon"
                        }, o.createElement(m.Eb, {
                            className: "time-picker__dropdown"
                        }, t)))))
                    }, t.prototype.getTime = function(e) {
                        try {
                            return Object(u.d)(e || this.state.value)
                        } catch (e) {
                            return g
                        }
                    }, t.prototype.setValue = function(e, t, n) {
                        var a = this.props.options.find(function(n) {
                            return n.displayValue === (t || e)
                        });
                        e = a && a.value ? a.value : e, t = a && a.displayValue ? a.displayValue : t || e, this.setState({
                            isOpen: (!this.state.isOpen || !n) && this.state.isOpen,
                            displayValue: t,
                            value: e,
                            time: this.getTime(e)
                        }), this.notifyChange(e)
                    }, t.prototype.notifyChange = function(e) {
                        if (this.props.onChange) try {
                            var t = Object(u.d)(e, new Date);
                            this.props.onChange(t, e)
                        } catch (t) {
                            this.props.onChange(g, e)
                        }
                    }, t.prototype.timeToString = function(e) {
                        return Object(u.b)(e, u.a.timeString)
                    }, t.prototype.formatTime = function(e) {
                        var t = Object(v.a)(e);
                        if (this.props.validateTime && this.props.validateTime(t)) {
                            var n = Object(u.d)(t, new Date);
                            t = this.timeToString(n)
                        }
                        return t
                    }, t
                }(o.Component),
                h = n("y6KF");

            function k(e) {
                void 0 === e && (e = void 0);
                for (var t = [], n = ["00", "30"], a = e ? e.getHours() : 0; a < 24; ++a)
                    for (var i = 0, r = n; i < r.length; i++) {
                        var o = r[i];
                        a > 11 ? t.push((12 === a ? 12 : a - 12) + ":" + o + "pm") : t.push((0 === a ? 12 : a) + ":" + o + "am")
                    }
                return e && e.getMinutes() >= 30 ? t.splice(0, 2) : e && t.splice(0, 1), t
            }! function(e) {
                e.Now = "NOW"
            }(a || (a = {}));
            var E = new Date("INVALID DATE"),
                b = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.onChangeTime = function(e, t) {
                            if (t === a.Now) {
                                var i = new Date;
                                n.setDateTime(i, i, t)
                            } else n.setTime(e, t)
                        }, n.onChangeDate = function(e) {
                            Object(r.isToday)(e) || n.state.timeValue !== a.Now || n.setTime(E, ""), n.setDate(e)
                        };
                        var i = n.props.defaultDate || Object(r.setMinutes)(Object(r.addHours)(new Date, 3), 0);
                        return n.state = {
                            computedDateTime: i,
                            time: i,
                            date: i
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(m.Xa, {
                            display: m.X.Flex,
                            flexDirection: m.Aa.Row,
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(m.Xa, {
                            padding: {
                                right: 2
                            },
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(m.Ea, {
                            id: "event-start-date",
                            label: this.props.dateLabel,
                            error: this.state.invalidDate,
                            errorMessage: this.props.dateErrorMessage
                        }, o.createElement(l.a, {
                            inputProps: {
                                readOnly: !0
                            },
                            defaultDate: this.state.date,
                            onChange: this.onChangeDate
                        }))), o.createElement(m.Ea, {
                            id: "event-start-time",
                            label: this.props.timeLabel,
                            error: this.state.invalidTime,
                            errorMessage: this.props.timeErrorMessage
                        }, o.createElement(f, {
                            defaultDate: this.state.time,
                            onChange: this.onChangeTime,
                            validateTime: v.c,
                            options: this.generateTimeOptions()
                        })))
                    }, t.prototype.componentWillUpdate = function(e, t) {
                        this.state.computedDateTime === t.computedDateTime && this.state.timeValue === t.timeValue || this.props.onChange && this.props.onChange(t.timeValue === a.Now ? new Date : t.computedDateTime)
                    }, t.prototype.generateValidTimeStrings = function() {
                        return Object(r.isToday)(this.state.date) && !this.props.allowPast ? k(new Date) : k()
                    }, t.prototype.generateTimeOptions = function() {
                        var e = this.generateValidTimeStrings().map(function(e) {
                            return {
                                value: e,
                                disabled: !1
                            }
                        });
                        return this.props.removeNow || e.unshift({
                            value: a.Now,
                            displayValue: Object(s.d)("Now", "EventModalDateTimePicker"),
                            disabled: !this.props.video || this.props.video.status !== h.l,
                            disabledMessage: Object(s.d)("Video is still being processed", "EventModalDateTimePicker")
                        }), e
                    }, t.prototype.setDateTime = function(e, t, n) {
                        var a = this.computeDateTime(e, t);
                        this.setState({
                            date: e,
                            time: t,
                            timeValue: n,
                            computedDateTime: a,
                            invalidDate: !this.props.allowPast && Object(r.isPast)(Object(r.endOfDay)(e)) || !Object(r.isValid)(e),
                            invalidTime: !Object(r.isValid)(t)
                        })
                    }, t.prototype.setTime = function(e, t) {
                        var n = this.state.date,
                            a = this.computeDateTime(n, e);
                        this.setState({
                            time: e,
                            timeValue: t,
                            computedDateTime: a,
                            invalidDate: !this.props.allowPast && Object(r.isPast)(Object(r.endOfDay)(n)),
                            invalidTime: !this.props.allowPast && Object(r.isPast)(a) || !Object(r.isValid)(a)
                        })
                    }, t.prototype.setDate = function(e) {
                        var t = this.computeDateTime(e, this.state.time);
                        this.setState({
                            date: e,
                            computedDateTime: t,
                            invalidDate: !this.props.allowPast && Object(r.isPast)(Object(r.endOfDay)(e)) || !Object(r.isValid)(t),
                            invalidTime: !this.props.allowPast && Object(r.isPast)(t)
                        })
                    }, t.prototype.computeDateTime = function(e, t) {
                        return e && t && Object(r.isValid)(e) && Object(r.isValid)(t) ? (e.setHours(t.getHours()), e.setMinutes(t.getMinutes()), e.setSeconds(0), e) : E
                    }, t
                }(o.Component);
            n.d(t, !1, function() {
                return a
            }), n.d(t, !1, function() {
                return k
            }), n.d(t, "a", function() {
                return b
            })
        },
        "/ZC1": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("Ue10"),
                o = (n("sL9O"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isDraggingOver: !1
                        }, t.onDragEnter = function(e) {
                            e.preventDefault(), t.setState({
                                isDraggingOver: !0
                            })
                        }, t.onDragLeave = function(e) {
                            e.preventDefault(), t.setState({
                                isDraggingOver: !1
                            })
                        }, t.onFileInputChange = function(e) {
                            e.preventDefault(), t.finalizeSelections(e.target.files), e.target.value = ""
                        }, t.onFileDrop = function(e) {
                            e.preventDefault(), t.setState({
                                isDraggingOver: !1
                            }), t.finalizeSelections(e.dataTransfer.files)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(r.Z, {
                            dragOver: this.state.isDraggingOver,
                            error: this.props.error
                        }, i.createElement(r.Pa, {
                            position: r.jb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: r.ic.Above
                        }, i.createElement("input", {
                            "data-a-target": "file-picker-input",
                            "data-test-selector": "file-picker-input",
                            className: "drag-and-drop-file-picker__input",
                            accept: this.props.allowedFileTypes.join(","),
                            multiple: this.props.multiFile || !1,
                            onChange: this.onFileInputChange,
                            type: "file",
                            onDragLeave: this.onDragLeave,
                            onDragEnter: this.onDragEnter,
                            onDrop: this.onFileDrop
                        })), this.props.children)
                    }, t.prototype.finalizeSelections = function(e) {
                        e && this.props.onFilesSubmitted(Array.from(e))
                    }, t
                }(i.Component))
        },
        "0b5K": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "EventModal_GetEventLeaf"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "eventID"
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
                                value: "event"
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
                                        value: "eventID"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "InlineFragment",
                                    typeCondition: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "EventLeaf"
                                        }
                                    },
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ManagerEventLeaf"
                                            },
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
                                                value: "description"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "defaultTimeZone"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "owner"
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
                    end: 252
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/dashboard/components/events-page/queries/event-leaf-fragment.gql"\nquery EventModal_GetEventLeaf($eventID: ID!) {\nevent(id: $eventID) {\n...on EventLeaf {\n...ManagerEventLeaf\nlanguage\ndescription\ndefaultTimeZone\nowner {\nid\n}\n}\n}\n}',
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
            }(n("293+").definitions)), e.exports = a
        },
        "0vTG": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DashboardEvents_ManagedLeaves"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelLogin"
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
                                value: "isFuture"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
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
                                value: "after"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Time"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "before"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Time"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "sort"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "SortOrder"
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
                                        value: "channelLogin"
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
                                        value: "managedEventLeaves"
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
                                            kind: "ObjectValue",
                                            fields: [{
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "endsAfter"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "after"
                                                    }
                                                }
                                            }, {
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "endsBefore"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "before"
                                                    }
                                                }
                                            }, {
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "sortOrder"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "sort"
                                                    }
                                                }
                                            }]
                                        }
                                    }],
                                    directives: [{
                                        kind: "Directive",
                                        name: {
                                            kind: "Name",
                                            value: "connection"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "key"
                                            },
                                            value: {
                                                kind: "StringValue",
                                                value: "future-managed-event-leaves",
                                                block: !1
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "filter"
                                            },
                                            value: {
                                                kind: "ListValue",
                                                values: []
                                            }
                                        }]
                                    }, {
                                        kind: "Directive",
                                        name: {
                                            kind: "Name",
                                            value: "include"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "if"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "isFuture"
                                                }
                                            }
                                        }]
                                    }],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ManagedEventLeaves"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "managedEventLeaves"
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
                                            kind: "ObjectValue",
                                            fields: [{
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "endsAfter"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "after"
                                                    }
                                                }
                                            }, {
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "endsBefore"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "before"
                                                    }
                                                }
                                            }, {
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "sortOrder"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "sort"
                                                    }
                                                }
                                            }]
                                        }
                                    }],
                                    directives: [{
                                        kind: "Directive",
                                        name: {
                                            kind: "Name",
                                            value: "connection"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "key"
                                            },
                                            value: {
                                                kind: "StringValue",
                                                value: "past-managed-event-leaves",
                                                block: !1
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "filter"
                                            },
                                            value: {
                                                kind: "ListValue",
                                                values: []
                                            }
                                        }]
                                    }, {
                                        kind: "Directive",
                                        name: {
                                            kind: "Name",
                                            value: "skip"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "if"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "isFuture"
                                                }
                                            }
                                        }]
                                    }],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ManagedEventLeaves"
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
                    end: 727
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/dashboard/components/events-page/models/managed-leaves-fragment.gql"\nquery DashboardEvents_ManagedLeaves($channelLogin: String! $isFuture: Boolean! $limit: Int $after: Time $before: Time $sort: SortOrder $cursor: Cursor) {\nuser(login: $channelLogin) {\nid\nmanagedEventLeaves(first: $limit after: $cursor criteria: {endsAfter: $after endsBefore: $before sortOrder: $sort}) @connection(key: "future-managed-event-leaves" filter: []) @include(if: $isFuture) {\n...ManagedEventLeaves\n}\nmanagedEventLeaves(first: $limit after: $cursor criteria: {endsAfter: $after endsBefore: $before sortOrder: $sort}) @connection(key: "past-managed-event-leaves" filter: []) @skip(if: $isFuture) {\n...ManagedEventLeaves\n}\n}\n}',
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
            }(n("9QBf").definitions)), e.exports = a
        },
        "2/NB": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }), n.d(t, "b", function() {
                    return i
                }),
                function(e) {
                    e.JPEG = "image/jpeg", e.PNG = "image/png", e.GIF = "image/gif"
                }(a || (a = {}));
            var i = [a.JPEG, a.PNG]
        },
        "293+": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "ManagerEventLeaf"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "EventLeaf"
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
                                value: "title"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "startAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "endAt"
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
                                value: "channel"
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
                                value: "parent"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "imageURL"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "imageURL"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "width"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "320"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "180"
                                }
                            }],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "stats"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "followingCount"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "isDeleted"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 217
                }
            };
            n.loc.source = {
                body: "fragment ManagerEventLeaf on EventLeaf {\nid\ntitle\nstartAt\nendAt\ngame {\nid\ndisplayName\n}\nchannel {\nid\nlogin\ndisplayName\n}\nparent {\nid\ntitle\nimageURL\n}\nimageURL(width:320 height:180)\nstats {\nfollowingCount\n}\nisDeleted\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "3A4o": function(e, t, n) {},
        "4Q4g": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "EventModal_CreateTimetableEvent"
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
                                    value: "CreateTimetableEventInput"
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
                                value: "createTimetableEvent"
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
                                        value: "event"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ManagerEventCollection"
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
                    end: 252
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/dashboard/components/events-page/queries/event-collection-fragment.gql"\nmutation EventModal_CreateTimetableEvent($input: CreateTimetableEventInput!) {\ncreateTimetableEvent(input: $input) {\nevent {\n...ManagerEventCollection\n}\n}\n}',
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
            }(n("Y0z8").definitions)), e.exports = a
        },
        "4jyH": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Delete_Event_Collection"
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
                                    value: "DeleteEventCollectionInput"
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
                                value: "deleteEventCollection"
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
                                        value: "event"
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
                                                value: "isDeleted"
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
                    end: 137
                }
            };
            n.loc.source = {
                body: "mutation Delete_Event_Collection($input: DeleteEventCollectionInput!) {\ndeleteEventCollection(input: $input) {\nevent {\nid\nisDeleted\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "7N+d": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Delete_Event_Leaf"
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
                                    value: "DeleteEventLeafInput"
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
                                value: "deleteEventLeaf"
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
                                        value: "event"
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
                    end: 109
                }
            };
            n.loc.source = {
                body: "mutation Delete_Event_Leaf($input: DeleteEventLeafInput!) {\ndeleteEventLeaf(input: $input) {\nevent {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "8QY8": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "EventModal_UpdateSingleEvent"
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
                                    value: "UpdateSingleEventInput"
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
                                value: "updateSingleEvent"
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
                                        value: "event"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ManagerEventLeaf"
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
                    end: 231
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/dashboard/components/events-page/queries/event-leaf-fragment.gql"\nmutation EventModal_UpdateSingleEvent($input: UpdateSingleEventInput!) {\nupdateSingleEvent(input: $input) {\nevent {\n...ManagerEventLeaf\n}\n}\n}',
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
            }(n("293+").definitions)), e.exports = a
        },
        "9QBf": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "ManagedEventLeaves"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "EventLeafConnection"
                        }
                    },
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hasPreviousPage"
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
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "EventLeaf"
                                                }
                                            },
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "ManagerEventLeaf"
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
                }],
                loc: {
                    start: 0,
                    end: 251
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/dashboard/components/events-page/queries/event-leaf-fragment.gql"\nfragment ManagedEventLeaves on EventLeafConnection {\npageInfo {\nhasNextPage\nhasPreviousPage\n}\nedges {\ncursor\nnode {\n...on EventLeaf {\n...ManagerEventLeaf\n}\n}\n}\n}',
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
            }(n("293+").definitions)), e.exports = a
        },
        "9rlX": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("/7QA"),
                o = n("Ue10"),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            t.props.onChange({
                                language: e.currentTarget.value
                            })
                        }, t.renderLanguageOption = function(e) {
                            return i.createElement("option", {
                                key: e.languageCode,
                                value: e.languageCode
                            }, e.name)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(o.Ea, {
                            id: "event-language",
                            label: Object(r.d)("Event Language", "EventModal")
                        }, i.createElement(o.zb, {
                            name: "event-language",
                            onChange: this.onChange,
                            disabled: this.props.disabled,
                            defaultValue: this.props.defaultLanguage
                        }, r.a.locales.map(this.renderLanguageOption)))
                    }, t
                }(i.Component);
            n.d(t, "a", function() {
                return s
            })
        },
        AOo2: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "EventModal_CreateSegmentEvent"
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
                                    value: "CreateSegmentEventInput"
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
                                value: "createSegmentEvent"
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
                                        value: "event"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ManagerEventLeaf"
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
                    end: 234
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/dashboard/components/events-page/queries/event-leaf-fragment.gql"\nmutation EventModal_CreateSegmentEvent($input: CreateSegmentEventInput!) {\ncreateSegmentEvent(input: $input) {\nevent {\n...ManagerEventLeaf\n}\n}\n}',
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
            }(n("293+").definitions)), e.exports = a
        },
        AmIn: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("NAv5"),
                r = n("q1tI"),
                o = n("/7QA"),
                s = n("8/mp"),
                l = n("CbMu"),
                d = n("+58i"),
                c = n("xeRp"),
                u = n("gT8k"),
                m = n("9rlX"),
                p = n("Rzn4"),
                v = n("dKHc"),
                g = n("Wwq8"),
                f = n("JNgr"),
                h = n("Ue10"),
                k = (n("3A4o"), function() {
                    return Object(i.setMinutes)(Object(i.addHours)(new Date, 4), 0)
                }),
                E = function(e) {
                    return e ? e.join(",") : ""
                };

            function b(e) {
                return e ? {
                    description: e.description || "",
                    gameID: e.game.id,
                    gameName: e.game.name,
                    language: e.language,
                    startTime: e.startTime,
                    endTime: e.endTime,
                    timeZoneID: e.timeZoneID,
                    title: e.title,
                    imageUrl: e.imageUrl || void 0
                } : {
                    description: "",
                    gameID: "",
                    gameName: "",
                    language: Object(f.a)(),
                    startTime: Object(i.setMinutes)(Object(i.addHours)(new Date, 3), 0),
                    endTime: k(),
                    timeZoneID: Object(g.a)(),
                    title: ""
                }
            }
            var N = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.validator = new v.b(b()), n.onCancel = function() {
                            n.props.closeModal()
                        }, n.onConfirm = function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return a.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return e = this.validator.editsAreValid(this.state.edits), this.setState({
                                                fieldErrors: this.validator.getFieldErrors()
                                            }), e ? [4, this.props.onCommit(Object(l.b)(this.state.edits, this.props.owner.id, void 0))] : [2];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        }, n.onFinishUploading = function(e) {
                            n.setState(function(t) {
                                return {
                                    edits: a.__assign({}, t.edits, {
                                        imageID: e._id
                                    })
                                }
                            })
                        }, n.onTitleChange = function(e) {
                            var t = e.currentTarget.value;
                            n.setState(function(e) {
                                return {
                                    edits: a.__assign({}, e.edits, {
                                        title: t
                                    })
                                }
                            })
                        }, n.onDescriptionChange = function(e) {
                            var t = e.currentTarget.value;
                            n.setState(function(e) {
                                return {
                                    edits: a.__assign({}, e.edits, {
                                        description: t
                                    })
                                }
                            })
                        }, n.onGameChange = function(e) {
                            var t = e.objectID,
                                i = e.name;
                            n.setState(function(e) {
                                return {
                                    edits: a.__assign({}, e.edits, {
                                        gameID: t,
                                        gameName: i
                                    })
                                }
                            })
                        }, n.onChangeStartDate = function(e) {
                            n.setState(function(t) {
                                return {
                                    edits: a.__assign({}, t.edits, {
                                        startTime: e
                                    })
                                }
                            })
                        }, n.onChangeEndDate = function(e) {
                            n.setState(function(t) {
                                return {
                                    edits: a.__assign({}, t.edits, {
                                        endTime: e
                                    })
                                }
                            })
                        }, n.onLanguageChange = function(e) {
                            var t = e.language;
                            n.setState(function(e) {
                                return {
                                    edits: a.__assign({}, e.edits, {
                                        language: t
                                    })
                                }
                            })
                        }, n.state = {
                            edits: b(n.props.event),
                            fieldErrors: n.validator.getFieldErrors()
                        }, n.validator.addValidatorForField(i.isValid, v.a.StartTime), n.validator.addValidatorForField(function(e) {
                            return Object(i.isValid)(e) && e > n.state.edits.startTime
                        }, v.a.EndTime), n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        this.props.serviceError && (e = r.createElement(h.Xa, null, r.createElement(h.W, {
                            fontSize: h.Ca.Size4,
                            color: h.O.Error
                        }, this.props.serviceError)));
                        var t = this.props.parent ? r.createElement(h.Xa, {
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(h.Ea, {
                                id: "series-name",
                                label: Object(o.d)("Series Name", "EventsModal")
                            }, this.props.parent.title)) : null,
                            n = this.props.parent ? null : r.createElement(h.Ea, {
                                label: "",
                                error: !!this.state.fieldErrors.language,
                                errorMessage: E(this.state.fieldErrors.language)
                            }, r.createElement(h.Xa, {
                                display: h.X.Flex,
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(m.a, {
                                onChange: this.onLanguageChange,
                                disabled: !1,
                                defaultLanguage: this.state.edits.language
                            }))),
                            a = this.state.fieldErrors.endTime ? r.createElement(h.W, {
                                color: h.O.Error
                            }, E(this.state.fieldErrors.endTime)) : null;
                        return r.createElement(h.Xa, {
                            className: "event-modal"
                        }, r.createElement(h.Eb, {
                            className: "event-modal__content",
                            padding: 4,
                            margin: {
                                top: 5
                            },
                            background: h.r.Base
                        }, r.createElement(h.Eb, {
                            display: h.X.Flex,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            justifyContent: h.Wa.Between,
                            borderBottom: !0
                        }, r.createElement(h.Xa, {
                            flexGrow: 0,
                            flexShrink: 1
                        }, r.createElement(h.W, {
                            type: h.Vb.H3
                        }, Object(o.d)("Create an Event", "EventsModal"))), r.createElement(h.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, r.createElement(h.z, {
                            type: h.F.Text,
                            onClick: this.onCancel
                        }, Object(o.d)("Cancel", "EventsModal")), r.createElement(h.z, {
                            onClick: this.onConfirm
                        }, Object(o.d)("Save", "EventsModal")))), e, r.createElement(s.b, null, r.createElement(r.Fragment, null, r.createElement(h.Ja, {
                            gutterSize: h.Ka.Large
                        }, r.createElement(h.P, {
                            cols: {
                                default: 12,
                                md: 6,
                                lg: 5
                            }
                        }, r.createElement(c.a, {
                            user: this.props.owner,
                            onFinishUploading: this.onFinishUploading,
                            initialImageData: this.props.event && this.props.event.imageUrl && new URL(this.props.event.imageUrl) || void 0
                        })), r.createElement(h.P, {
                            cols: {
                                default: 12,
                                md: 6,
                                lg: 7
                            }
                        }, t, r.createElement(h.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(h.Ea, {
                            id: "event-title",
                            label: Object(o.d)("Event Title", "EventsModal"),
                            error: !!this.state.fieldErrors.title,
                            errorMessage: E(this.state.fieldErrors.title || [])
                        }, r.createElement(h.Ra, {
                            onChange: this.onTitleChange,
                            value: this.state.edits.title,
                            type: h.Ta.Text,
                            maxLength: 140,
                            placeholder: Object(o.d)("Your title is also used in reminders and social media posts. ({limit} character limit)", {
                                limit: 140
                            }, "EventsModal")
                        }))), r.createElement(h.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(h.Ea, {
                            label: Object(o.d)("Event Description", "EventsModal"),
                            error: !!this.state.fieldErrors.description,
                            errorMessage: E(this.state.fieldErrors.description)
                        }, r.createElement(h.Sb, {
                            placeholder: Object(o.d)("Tell viewers why they should watch your event", "EventsModal"),
                            onChange: this.onDescriptionChange,
                            value: this.state.edits.description || "",
                            disabled: !1
                        }))), r.createElement(d.a, {
                            onChange: this.onChangeStartDate,
                            dateLabel: Object(o.d)("Start Date", "EventsModal"),
                            timeLabel: Object(o.d)("Start Time ({localeName})", {
                                localeName: Object(p.b)()
                            }, "EventsModal"),
                            dateErrorMessage: Object(o.d)("The start date is invalid", "EventsModal"),
                            timeErrorMessage: Object(o.d)("The start time is invalid", "EventsModal"),
                            defaultDate: this.state.edits.startTime,
                            allowPast: !0,
                            removeNow: !0
                        }), a, r.createElement(d.a, {
                            onChange: this.onChangeEndDate,
                            dateLabel: Object(o.d)("End Date", "EventsModal"),
                            timeLabel: Object(o.d)("End Time ({localeName})", {
                                localeName: Object(p.b)()
                            }, "EventsModal"),
                            dateErrorMessage: Object(o.d)("The end date is invalid", "EventsModal"),
                            timeErrorMessage: Object(o.d)("The end time is invalid", "EventsModal"),
                            defaultDate: this.state.edits.endTime || k(),
                            allowPast: !0,
                            removeNow: !0
                        }), n, r.createElement(h.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(h.Ea, {
                            id: "event-game",
                            label: Object(o.d)("Event Category/Game", "EventsModal"),
                            error: !!this.state.fieldErrors.gameID,
                            errorMessage: E(this.state.fieldErrors.gameID)
                        }, r.createElement(u.a, {
                            currentGameTitle: this.props.event && this.props.event.game && this.props.event.game.name || "",
                            onChange: this.onGameChange
                        })))))))))
                    }, t
                }(r.Component),
                y = N;
            n.d(t, !1, function() {
                return b
            }), n.d(t, !1, function() {
                return N
            }), n.d(t, "a", function() {
                return y
            })
        },
        CbMu: function(e, t, n) {
            "use strict";
            var a = n("mrSG");
            var i = n("Wwq8");

            function r(e) {
                return {
                    end_time: new Date(e.endTime).toISOString(),
                    description: e.description,
                    start_time: new Date(e.startTime).toISOString(),
                    title: e.title,
                    cover_image_id: e.imageID,
                    cover_image_url: e.imageUrl,
                    game_id: parseInt(e.game.id, 10),
                    time_zone_id: e.timeZoneID,
                    language: e.language
                }
            }
            n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            });
            var o = function(e) {
                    var t = {
                        description: e.description || "",
                        imageUrl: e.imageUrl || "",
                        title: e.title || ""
                    };
                    return a.__assign({
                        endTime: e.endTime,
                        gameID: e.game.id,
                        gameName: e.game.name,
                        language: e.language,
                        startTime: e.startTime,
                        timeZoneID: e.timeZoneID || Object(i.a)()
                    }, t)
                },
                s = function(e, t, n) {
                    var i = n,
                        r = a.__assign({}, e);
                    return i || (i = function(e, t) {
                        void 0 === t && (t = {});
                        var n = new Date;
                        n.setHours(n.getHours() + 12);
                        var i = new Date;
                        return i.setHours(i.getHours() + 12), a.__assign({
                            __typename: "EventModel",
                            id: null,
                            eventID: null,
                            title: "",
                            imageID: null,
                            imageUrl: null,
                            description: null,
                            ownerID: e,
                            game: {
                                __typename: "Game",
                                id: "",
                                name: ""
                            },
                            language: "",
                            startTime: n,
                            endTime: i,
                            timeZoneID: "America/Los_Angeles"
                        }, t)
                    }(t, r)), r.gameID && r.gameName && (i.game.id = r.gameID, i.game.name = r.gameName, delete r.gameID, delete r.gameName), a.__assign({}, i, r)
                }
        },
        CcE2: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("Ue10"),
                o = (n("DOqp"), {
                    onConfirm: "ON_CONFIRM",
                    onCancel: "ON_CANCEL"
                }),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onConfirm = function() {
                            t.props.closeModal(), setTimeout(function() {
                                t.props.onConfirm()
                            }, 0)
                        }, t.onCancel = function() {
                            t.props.closeModal(), t.props.onCancel && t.props.onCancel()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(r.Eb, {
                            className: "vm-edit-cancel-modal",
                            background: r.r.Base,
                            padding: 2
                        }, i.createElement(r.Xa, null, i.createElement(r.W, {
                            type: r.Vb.H3
                        }, this.props.title), i.createElement(r.Xa, {
                            padding: {
                                y: 1
                            }
                        }, this.props.body), i.createElement(r.Xa, {
                            padding: 1,
                            display: r.X.Flex,
                            justifyContent: r.Wa.End,
                            alignItems: r.f.End,
                            alignContent: r.e.End
                        }, i.createElement(r.Xa, null, i.createElement(r.z, {
                            type: r.F.Default,
                            onClick: this.onConfirm,
                            "data-test-selector": o.onConfirm,
                            "data-a-target": "on-confirm"
                        }, this.props.okText)), i.createElement(r.Xa, {
                            margin: {
                                left: 1
                            }
                        }, i.createElement(r.z, {
                            type: r.F.Hollow,
                            onClick: this.onCancel,
                            "data-test-selector": o.onCancel
                        }, this.props.cancelText)))))
                    }, t
                }(i.PureComponent);
            n.d(t, !1, function() {
                return o
            }), n.d(t, "a", function() {
                return s
            })
        },
        DEM2: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parse = function(e, t) {
                var n = "string" == typeof e ? new a.Source(e) : e;
                if (!(n instanceof a.Source)) throw new TypeError("Must provide Source. Received: " + String(n));
                return function(e) {
                    var t = e.token;
                    H(e, r.TokenKind.SOF);
                    var n = [];
                    do {
                        n.push(d(e))
                    } while (!$(e, r.TokenKind.EOF));
                    return {
                        kind: o.DOCUMENT,
                        definitions: n,
                        loc: q(e, t)
                    }
                }((0, r.createLexer)(n, t || {}))
            }, t.parseValue = function(e, t) {
                var n = "string" == typeof e ? new a.Source(e) : e,
                    i = (0, r.createLexer)(n, t || {});
                H(i, r.TokenKind.SOF);
                var o = y(i, !1);
                return H(i, r.TokenKind.EOF), o
            }, t.parseType = function(e, t) {
                var n = "string" == typeof e ? new a.Source(e) : e,
                    i = (0, r.createLexer)(n, t || {});
                H(i, r.TokenKind.SOF);
                var o = O(i);
                return H(i, r.TokenKind.EOF), o
            }, t.parseConstValue = _, t.parseTypeReference = O, t.parseNamedType = L;
            var a = n("k84H"),
                i = n("PUII"),
                r = n("wimG"),
                o = n("xaK5"),
                s = n("R1IW");

            function l(e) {
                var t = H(e, r.TokenKind.NAME);
                return {
                    kind: o.NAME,
                    value: t.value,
                    loc: q(e, t)
                }
            }

            function d(e) {
                if (W(e, r.TokenKind.NAME)) switch (e.token.value) {
                    case "query":
                    case "mutation":
                    case "subscription":
                    case "fragment":
                        return c(e);
                    case "schema":
                    case "scalar":
                    case "type":
                    case "interface":
                    case "union":
                    case "enum":
                    case "input":
                    case "extend":
                    case "directive":
                        return F(e)
                } else {
                    if (W(e, r.TokenKind.BRACE_L)) return c(e);
                    if (j(e)) return F(e)
                }
                throw Q(e)
            }

            function c(e) {
                if (W(e, r.TokenKind.NAME)) switch (e.token.value) {
                    case "query":
                    case "mutation":
                    case "subscription":
                        return u(e);
                    case "fragment":
                        return function(e) {
                            var t = e.token;
                            if (Y(e, "fragment"), e.options.experimentalFragmentVariables) return {
                                kind: o.FRAGMENT_DEFINITION,
                                name: N(e),
                                variableDefinitions: p(e),
                                typeCondition: (Y(e, "on"), L(e)),
                                directives: C(e, !1),
                                selectionSet: f(e),
                                loc: q(e, t)
                            };
                            return {
                                kind: o.FRAGMENT_DEFINITION,
                                name: N(e),
                                typeCondition: (Y(e, "on"), L(e)),
                                directives: C(e, !1),
                                selectionSet: f(e),
                                loc: q(e, t)
                            }
                        }(e)
                } else if (W(e, r.TokenKind.BRACE_L)) return u(e);
                throw Q(e)
            }

            function u(e) {
                var t = e.token;
                if (W(e, r.TokenKind.BRACE_L)) return {
                    kind: o.OPERATION_DEFINITION,
                    operation: "query",
                    name: void 0,
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: f(e),
                    loc: q(e, t)
                };
                var n = m(e),
                    a = void 0;
                return W(e, r.TokenKind.NAME) && (a = l(e)), {
                    kind: o.OPERATION_DEFINITION,
                    operation: n,
                    name: a,
                    variableDefinitions: p(e),
                    directives: C(e, !1),
                    selectionSet: f(e),
                    loc: q(e, t)
                }
            }

            function m(e) {
                var t = H(e, r.TokenKind.NAME);
                switch (t.value) {
                    case "query":
                        return "query";
                    case "mutation":
                        return "mutation";
                    case "subscription":
                        return "subscription"
                }
                throw Q(e, t)
            }

            function p(e) {
                return W(e, r.TokenKind.PAREN_L) ? Z(e, r.TokenKind.PAREN_L, v, r.TokenKind.PAREN_R) : []
            }

            function v(e) {
                var t = e.token;
                return {
                    kind: o.VARIABLE_DEFINITION,
                    variable: g(e),
                    type: (H(e, r.TokenKind.COLON), O(e)),
                    defaultValue: $(e, r.TokenKind.EQUALS) ? y(e, !0) : void 0,
                    loc: q(e, t)
                }
            }

            function g(e) {
                var t = e.token;
                return H(e, r.TokenKind.DOLLAR), {
                    kind: o.VARIABLE,
                    name: l(e),
                    loc: q(e, t)
                }
            }

            function f(e) {
                var t = e.token;
                return {
                    kind: o.SELECTION_SET,
                    selections: Z(e, r.TokenKind.BRACE_L, h, r.TokenKind.BRACE_R),
                    loc: q(e, t)
                }
            }

            function h(e) {
                return W(e, r.TokenKind.SPREAD) ? function(e) {
                    var t = e.token;
                    if (H(e, r.TokenKind.SPREAD), W(e, r.TokenKind.NAME) && "on" !== e.token.value) return {
                        kind: o.FRAGMENT_SPREAD,
                        name: N(e),
                        directives: C(e, !1),
                        loc: q(e, t)
                    };
                    var n = void 0;
                    "on" === e.token.value && (e.advance(), n = L(e));
                    return {
                        kind: o.INLINE_FRAGMENT,
                        typeCondition: n,
                        directives: C(e, !1),
                        selectionSet: f(e),
                        loc: q(e, t)
                    }
                }(e) : function(e) {
                    var t = e.token,
                        n = l(e),
                        a = void 0,
                        i = void 0;
                    $(e, r.TokenKind.COLON) ? (a = n, i = l(e)) : i = n;
                    return {
                        kind: o.FIELD,
                        alias: a,
                        name: i,
                        arguments: k(e, !1),
                        directives: C(e, !1),
                        selectionSet: W(e, r.TokenKind.BRACE_L) ? f(e) : void 0,
                        loc: q(e, t)
                    }
                }(e)
            }

            function k(e, t) {
                var n = t ? b : E;
                return W(e, r.TokenKind.PAREN_L) ? Z(e, r.TokenKind.PAREN_L, n, r.TokenKind.PAREN_R) : []
            }

            function E(e) {
                var t = e.token;
                return {
                    kind: o.ARGUMENT,
                    name: l(e),
                    value: (H(e, r.TokenKind.COLON), y(e, !1)),
                    loc: q(e, t)
                }
            }

            function b(e) {
                var t = e.token;
                return {
                    kind: o.ARGUMENT,
                    name: l(e),
                    value: (H(e, r.TokenKind.COLON), _(e)),
                    loc: q(e, t)
                }
            }

            function N(e) {
                if ("on" === e.token.value) throw Q(e);
                return l(e)
            }

            function y(e, t) {
                var n = e.token;
                switch (n.kind) {
                    case r.TokenKind.BRACKET_L:
                        return function(e, t) {
                            var n = e.token,
                                a = t ? _ : T;
                            return {
                                kind: o.LIST,
                                values: function(e, t, n, a) {
                                    H(e, t);
                                    var i = [];
                                    for (; !$(e, a);) i.push(n(e));
                                    return i
                                }(e, r.TokenKind.BRACKET_L, a, r.TokenKind.BRACKET_R),
                                loc: q(e, n)
                            }
                        }(e, t);
                    case r.TokenKind.BRACE_L:
                        return function(e, t) {
                            var n = e.token;
                            H(e, r.TokenKind.BRACE_L);
                            var a = [];
                            for (; !$(e, r.TokenKind.BRACE_R);) a.push(S(e, t));
                            return {
                                kind: o.OBJECT,
                                fields: a,
                                loc: q(e, n)
                            }
                        }(e, t);
                    case r.TokenKind.INT:
                        return e.advance(), {
                            kind: o.INT,
                            value: n.value,
                            loc: q(e, n)
                        };
                    case r.TokenKind.FLOAT:
                        return e.advance(), {
                            kind: o.FLOAT,
                            value: n.value,
                            loc: q(e, n)
                        };
                    case r.TokenKind.STRING:
                    case r.TokenKind.BLOCK_STRING:
                        return D(e);
                    case r.TokenKind.NAME:
                        return "true" === n.value || "false" === n.value ? (e.advance(), {
                            kind: o.BOOLEAN,
                            value: "true" === n.value,
                            loc: q(e, n)
                        }) : "null" === n.value ? (e.advance(), {
                            kind: o.NULL,
                            loc: q(e, n)
                        }) : (e.advance(), {
                            kind: o.ENUM,
                            value: n.value,
                            loc: q(e, n)
                        });
                    case r.TokenKind.DOLLAR:
                        if (!t) return g(e)
                }
                throw Q(e)
            }

            function D(e) {
                var t = e.token;
                return e.advance(), {
                    kind: o.STRING,
                    value: t.value,
                    block: t.kind === r.TokenKind.BLOCK_STRING,
                    loc: q(e, t)
                }
            }

            function _(e) {
                return y(e, !0)
            }

            function T(e) {
                return y(e, !1)
            }

            function S(e, t) {
                var n = e.token;
                return {
                    kind: o.OBJECT_FIELD,
                    name: l(e),
                    value: (H(e, r.TokenKind.COLON), y(e, t)),
                    loc: q(e, n)
                }
            }

            function C(e, t) {
                for (var n = []; W(e, r.TokenKind.AT);) n.push(I(e, t));
                return n
            }

            function I(e, t) {
                var n = e.token;
                return H(e, r.TokenKind.AT), {
                    kind: o.DIRECTIVE,
                    name: l(e),
                    arguments: k(e, t),
                    loc: q(e, n)
                }
            }

            function O(e) {
                var t = e.token,
                    n = void 0;
                return $(e, r.TokenKind.BRACKET_L) ? (n = O(e), H(e, r.TokenKind.BRACKET_R), n = {
                    kind: o.LIST_TYPE,
                    type: n,
                    loc: q(e, t)
                }) : n = L(e), $(e, r.TokenKind.BANG) ? {
                    kind: o.NON_NULL_TYPE,
                    type: n,
                    loc: q(e, t)
                } : n
            }

            function L(e) {
                var t = e.token;
                return {
                    kind: o.NAMED_TYPE,
                    name: l(e),
                    loc: q(e, t)
                }
            }

            function F(e) {
                var t = j(e) ? e.lookahead() : e.token;
                if (t.kind === r.TokenKind.NAME) switch (t.value) {
                    case "schema":
                        return function(e) {
                            var t = e.token;
                            Y(e, "schema");
                            var n = C(e, !0),
                                a = Z(e, r.TokenKind.BRACE_L, A, r.TokenKind.BRACE_R);
                            return {
                                kind: o.SCHEMA_DEFINITION,
                                directives: n,
                                operationTypes: a,
                                loc: q(e, t)
                            }
                        }(e);
                    case "scalar":
                        return function(e) {
                            var t = e.token,
                                n = w(e);
                            Y(e, "scalar");
                            var a = l(e),
                                i = C(e, !0);
                            return {
                                kind: o.SCALAR_TYPE_DEFINITION,
                                description: n,
                                name: a,
                                directives: i,
                                loc: q(e, t)
                            }
                        }(e);
                    case "type":
                        return function(e) {
                            var t = e.token,
                                n = w(e);
                            Y(e, "type");
                            var a = l(e),
                                i = M(e),
                                r = C(e, !0),
                                s = x(e);
                            return {
                                kind: o.OBJECT_TYPE_DEFINITION,
                                description: n,
                                name: a,
                                interfaces: i,
                                directives: r,
                                fields: s,
                                loc: q(e, t)
                            }
                        }(e);
                    case "interface":
                        return function(e) {
                            var t = e.token,
                                n = w(e);
                            Y(e, "interface");
                            var a = l(e),
                                i = C(e, !0),
                                r = x(e);
                            return {
                                kind: o.INTERFACE_TYPE_DEFINITION,
                                description: n,
                                name: a,
                                directives: i,
                                fields: r,
                                loc: q(e, t)
                            }
                        }(e);
                    case "union":
                        return function(e) {
                            var t = e.token,
                                n = w(e);
                            Y(e, "union");
                            var a = l(e),
                                i = C(e, !0),
                                r = U(e);
                            return {
                                kind: o.UNION_TYPE_DEFINITION,
                                description: n,
                                name: a,
                                directives: i,
                                types: r,
                                loc: q(e, t)
                            }
                        }(e);
                    case "enum":
                        return function(e) {
                            var t = e.token,
                                n = w(e);
                            Y(e, "enum");
                            var a = l(e),
                                i = C(e, !0),
                                r = X(e);
                            return {
                                kind: o.ENUM_TYPE_DEFINITION,
                                description: n,
                                name: a,
                                directives: i,
                                values: r,
                                loc: q(e, t)
                            }
                        }(e);
                    case "input":
                        return function(e) {
                            var t = e.token,
                                n = w(e);
                            Y(e, "input");
                            var a = l(e),
                                i = C(e, !0),
                                r = B(e);
                            return {
                                kind: o.INPUT_OBJECT_TYPE_DEFINITION,
                                description: n,
                                name: a,
                                directives: i,
                                fields: r,
                                loc: q(e, t)
                            }
                        }(e);
                    case "extend":
                        return function(e) {
                            var t = e.lookahead();
                            if (t.kind === r.TokenKind.NAME) switch (t.value) {
                                case "scalar":
                                    return function(e) {
                                        var t = e.token;
                                        Y(e, "extend"), Y(e, "scalar");
                                        var n = l(e),
                                            a = C(e, !0);
                                        if (0 === a.length) throw Q(e);
                                        return {
                                            kind: o.SCALAR_TYPE_EXTENSION,
                                            name: n,
                                            directives: a,
                                            loc: q(e, t)
                                        }
                                    }(e);
                                case "type":
                                    return function(e) {
                                        var t = e.token;
                                        Y(e, "extend"), Y(e, "type");
                                        var n = l(e),
                                            a = M(e),
                                            i = C(e, !0),
                                            r = x(e);
                                        if (0 === a.length && 0 === i.length && 0 === r.length) throw Q(e);
                                        return {
                                            kind: o.OBJECT_TYPE_EXTENSION,
                                            name: n,
                                            interfaces: a,
                                            directives: i,
                                            fields: r,
                                            loc: q(e, t)
                                        }
                                    }(e);
                                case "interface":
                                    return function(e) {
                                        var t = e.token;
                                        Y(e, "extend"), Y(e, "interface");
                                        var n = l(e),
                                            a = C(e, !0),
                                            i = x(e);
                                        if (0 === a.length && 0 === i.length) throw Q(e);
                                        return {
                                            kind: o.INTERFACE_TYPE_EXTENSION,
                                            name: n,
                                            directives: a,
                                            fields: i,
                                            loc: q(e, t)
                                        }
                                    }(e);
                                case "union":
                                    return function(e) {
                                        var t = e.token;
                                        Y(e, "extend"), Y(e, "union");
                                        var n = l(e),
                                            a = C(e, !0),
                                            i = U(e);
                                        if (0 === a.length && 0 === i.length) throw Q(e);
                                        return {
                                            kind: o.UNION_TYPE_EXTENSION,
                                            name: n,
                                            directives: a,
                                            types: i,
                                            loc: q(e, t)
                                        }
                                    }(e);
                                case "enum":
                                    return function(e) {
                                        var t = e.token;
                                        Y(e, "extend"), Y(e, "enum");
                                        var n = l(e),
                                            a = C(e, !0),
                                            i = X(e);
                                        if (0 === a.length && 0 === i.length) throw Q(e);
                                        return {
                                            kind: o.ENUM_TYPE_EXTENSION,
                                            name: n,
                                            directives: a,
                                            values: i,
                                            loc: q(e, t)
                                        }
                                    }(e);
                                case "input":
                                    return function(e) {
                                        var t = e.token;
                                        Y(e, "extend"), Y(e, "input");
                                        var n = l(e),
                                            a = C(e, !0),
                                            i = B(e);
                                        if (0 === a.length && 0 === i.length) throw Q(e);
                                        return {
                                            kind: o.INPUT_OBJECT_TYPE_EXTENSION,
                                            name: n,
                                            directives: a,
                                            fields: i,
                                            loc: q(e, t)
                                        }
                                    }(e)
                            }
                            throw Q(e, t)
                        }(e);
                    case "directive":
                        return function(e) {
                            var t = e.token,
                                n = w(e);
                            Y(e, "directive"), H(e, r.TokenKind.AT);
                            var a = l(e),
                                i = V(e);
                            Y(e, "on");
                            var s = function(e) {
                                $(e, r.TokenKind.PIPE);
                                var t = [];
                                do {
                                    t.push(K(e))
                                } while ($(e, r.TokenKind.PIPE));
                                return t
                            }(e);
                            return {
                                kind: o.DIRECTIVE_DEFINITION,
                                description: n,
                                name: a,
                                arguments: i,
                                locations: s,
                                loc: q(e, t)
                            }
                        }(e)
                }
                throw Q(e, t)
            }

            function j(e) {
                return W(e, r.TokenKind.STRING) || W(e, r.TokenKind.BLOCK_STRING)
            }

            function w(e) {
                if (j(e)) return D(e)
            }

            function A(e) {
                var t = e.token,
                    n = m(e);
                H(e, r.TokenKind.COLON);
                var a = L(e);
                return {
                    kind: o.OPERATION_TYPE_DEFINITION,
                    operation: n,
                    type: a,
                    loc: q(e, t)
                }
            }

            function M(e) {
                var t = [];
                if ("implements" === e.token.value) {
                    e.advance();
                    do {
                        t.push(L(e))
                    } while (W(e, r.TokenKind.NAME))
                }
                return t
            }

            function x(e) {
                return W(e, r.TokenKind.BRACE_L) ? Z(e, r.TokenKind.BRACE_L, R, r.TokenKind.BRACE_R) : []
            }

            function R(e) {
                var t = e.token,
                    n = w(e),
                    a = l(e),
                    i = V(e);
                H(e, r.TokenKind.COLON);
                var s = O(e),
                    d = C(e, !0);
                return {
                    kind: o.FIELD_DEFINITION,
                    description: n,
                    name: a,
                    arguments: i,
                    type: s,
                    directives: d,
                    loc: q(e, t)
                }
            }

            function V(e) {
                return W(e, r.TokenKind.PAREN_L) ? Z(e, r.TokenKind.PAREN_L, P, r.TokenKind.PAREN_R) : []
            }

            function P(e) {
                var t = e.token,
                    n = w(e),
                    a = l(e);
                H(e, r.TokenKind.COLON);
                var i = O(e),
                    s = void 0;
                $(e, r.TokenKind.EQUALS) && (s = _(e));
                var d = C(e, !0);
                return {
                    kind: o.INPUT_VALUE_DEFINITION,
                    description: n,
                    name: a,
                    type: i,
                    defaultValue: s,
                    directives: d,
                    loc: q(e, t)
                }
            }

            function U(e) {
                var t = [];
                if ($(e, r.TokenKind.EQUALS)) {
                    $(e, r.TokenKind.PIPE);
                    do {
                        t.push(L(e))
                    } while ($(e, r.TokenKind.PIPE))
                }
                return t
            }

            function X(e) {
                return W(e, r.TokenKind.BRACE_L) ? Z(e, r.TokenKind.BRACE_L, G, r.TokenKind.BRACE_R) : []
            }

            function G(e) {
                var t = e.token,
                    n = w(e),
                    a = l(e),
                    i = C(e, !0);
                return {
                    kind: o.ENUM_VALUE_DEFINITION,
                    description: n,
                    name: a,
                    directives: i,
                    loc: q(e, t)
                }
            }

            function B(e) {
                return W(e, r.TokenKind.BRACE_L) ? Z(e, r.TokenKind.BRACE_L, P, r.TokenKind.BRACE_R) : []
            }

            function K(e) {
                var t = e.token,
                    n = l(e);
                if (s.DirectiveLocation.hasOwnProperty(n.value)) return n;
                throw Q(e, t)
            }

            function q(e, t) {
                if (!e.options.noLocation) return new z(t, e.lastToken, e.source)
            }

            function z(e, t, n) {
                this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n
            }

            function W(e, t) {
                return e.token.kind === t
            }

            function $(e, t) {
                var n = e.token.kind === t;
                return n && e.advance(), n
            }

            function H(e, t) {
                var n = e.token;
                if (n.kind === t) return e.advance(), n;
                throw (0, i.syntaxError)(e.source, n.start, "Expected " + t + ", found " + (0, r.getTokenDesc)(n))
            }

            function Y(e, t) {
                var n = e.token;
                if (n.kind === r.TokenKind.NAME && n.value === t) return e.advance(), n;
                throw (0, i.syntaxError)(e.source, n.start, 'Expected "' + t + '", found ' + (0, r.getTokenDesc)(n))
            }

            function Q(e, t) {
                var n = t || e.token;
                return (0, i.syntaxError)(e.source, n.start, "Unexpected " + (0, r.getTokenDesc)(n))
            }

            function Z(e, t, n, a) {
                H(e, t);
                for (var i = [n(e)]; !$(e, a);) i.push(n(e));
                return i
            }
            z.prototype.toJSON = z.prototype.inspect = function() {
                return {
                    start: this.start,
                    end: this.end
                }
            }
        },
        DOqp: function(e, t, n) {},
        "Db/j": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                if (!e) throw new Error(t)
            }
        },
        HEnu: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("NAv5"),
                r = n("FOa4"),
                o = n("q1tI"),
                s = n("Ue10"),
                l = (n("WHSC"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setInputRef = function(e) {
                            return t.textInput = e
                        }, t.setContainerRef = function(e) {
                            return t.containerElement = e
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this._picker = new r({
                            field: this.textInput,
                            onSelect: this.props.onChange,
                            theme: "inline",
                            minDate: this.props.minDate,
                            maxDate: this.props.maxDate,
                            defaultDate: this.props.defaultDate,
                            setDefaultDate: !0,
                            container: this.containerElement,
                            format: "MMMM D, YYYY",
                            toString: function(e, t) {
                                return Object(i.format)(e, t)
                            }
                        })
                    }, t.prototype.componentDidUpdate = function(e) {
                        (this.dateDidChange(e.minDate, this.props.minDate) || this.dateDidChange(e.maxDate, this.props.maxDate)) && this.setDateRangeIfPresent(this.props.minDate, this.props.maxDate), this.dateDidChange(e.defaultDate, this.props.defaultDate) && this.setDate(this.props.defaultDate)
                    }, t.prototype.render = function() {
                        var e = this.props.inputProps;
                        return o.createElement(s.Xa, {
                            className: "date-picker",
                            "data-a-target": "date-picker"
                        }, o.createElement(s.Ra, a.__assign({
                            type: s.Ta.Text,
                            refDelegate: this.setInputRef
                        }, e)), o.createElement("div", {
                            className: "date-picker__container",
                            ref: this.setContainerRef
                        }))
                    }, t.prototype.setDate = function(e) {
                        e || (this.textInput.value = ""), this._picker.setDate(e || new Date, !0)
                    }, t.prototype.setDateRangeIfPresent = function(e, t) {
                        e && this._picker.setMinDate(e), t && this._picker.setMaxDate(t)
                    }, t.prototype.dateDidChange = function(e, t) {
                        return (e ? e.getTime() : null) !== (t ? t.getTime() : null)
                    }, t
                }(o.Component));
            n.d(t, "a", function() {
                return l
            })
        },
        HGFl: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            });
            var a = n("NAv5"),
                i = {
                    RFC3399: "YYYY-MM-DDTHH:mm:ssZ",
                    timeString: "h:mma"
                };

            function r(e, t) {
                return Object(a.format)(e, t)
            }

            function o(e) {
                return Object(a.parse)(e)
            }

            function s(e, t) {
                var n = e.split(":");
                if (2 !== n.length) throw new Error("invalid time string: " + e);
                var a = parseInt(n[0], 10),
                    i = parseInt(n[1].substring(0, 2), 10),
                    r = n[1].substring(n[1].length - 2);
                if (12 === a && "am" === r && (a = 0), "pm" === r && a < 12 && (a += 12), isNaN(a) || a < 0 || a > 23 || isNaN(i) || i < 0 || i > 59) throw new Error("invalid time string: " + e);
                var o = t || new Date;
                return o.setHours(a, i), o
            }
        },
        IejX: function(e, t, n) {},
        JNgr: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n("5e4V"),
                i = function() {
                    return Object(a.b)()[0] || "en"
                }
        },
        Jhye: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("/7QA"),
                o = n("X7Ac"),
                s = n("eJ65");
            var l = n("ug+5"),
                d = n("Ue10"),
                c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onShareClicked = function(e) {
                            var n = "";
                            switch (e) {
                                case o.b.Twitter:
                                    n = "twitter";
                                    break;
                                case o.b.Facebook:
                                    n = "facebook";
                                    break;
                                case o.b.Reddit:
                                    n = "reddit";
                                    break;
                                case o.b.VKontakte:
                                    n = "vk";
                                    break;
                                case o.b.Copy:
                                    n = "url";
                                    break;
                                default:
                                    n = "unknown"
                            }
                            Object(l.c)({
                                shareMedium: n,
                                eventID: t.props.id,
                                channelLogin: t.props.channelLogin || "undefined",
                                channelID: t.props.channelID || "undefined",
                                location: t.props.eventLocation
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = function(e) {
                                return "https://www.twitch.tv/events/" + e
                            }(this.props.id),
                            t = this.props.children;
                        return this.props.children || (t = i.createElement(d.z, {
                            dropdown: !0,
                            type: d.F.Hollow
                        }, Object(r.d)("Share", "ShareEvent"))), i.createElement(s.a, null, t, i.createElement(d.u, {
                            direction: this.props.balloonDirection
                        }, i.createElement(d.Xa, {
                            padding: 1
                        }, i.createElement(d.Xa, {
                            display: d.X.Flex,
                            flexDirection: d.Aa.Row,
                            flexWrap: d.Ba.NoWrap,
                            justifyContent: d.Wa.Center
                        }, i.createElement(o.a, {
                            type: o.b.Twitter,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        }), i.createElement(o.a, {
                            type: o.b.Facebook,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        }), i.createElement(o.a, {
                            type: o.b.Reddit,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        }), i.createElement(o.a, {
                            type: o.b.VKontakte,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        }), i.createElement(o.a, {
                            type: o.b.Copy,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        })))))
                    }, t
                }(i.Component);
            n.d(t, "a", function() {
                return c
            })
        },
        "Jxh/": function(e, t, n) {
            "use strict";

            function a(e) {
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
            n.d(t, "a", function() {
                return a
            })
        },
        Lxz1: function(e, t, n) {
            "use strict";
            n.d(t, "f", function() {
                return o
            }), n.d(t, "g", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "d", function() {
                return u
            }), n.d(t, "b", function() {
                return p
            });
            var a, i = n("/7QA"),
                r = n("2/NB"),
                o = function(e, t) {
                    return Object(i.d)("Recommended image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                        imageDimensions: e,
                        imageFileMegabytes: t
                    }, "ImageUploader")
                },
                s = function(e, t) {
                    return Object(i.d)("Required image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                        imageDimensions: e,
                        imageFileMegabytes: t
                    }, "ImageUploader")
                },
                l = function(e) {
                    return Object(i.d)("Couldn't upload image. Request returned {statusCode, number}", {
                        statusCode: e
                    }, "ImageUploader")
                },
                d = function() {
                    return Object(i.d)("The provided image does not have the required dimensions.", "ImageUploader")
                },
                c = function() {
                    return Object(i.d)("File too large.", "ImageUploader")
                },
                u = function() {
                    return Object(i.d)("Unexpected error while uploading your image. Please try again later", "ImageUploader")
                },
                m = ((a = {})[r.a.JPEG] = "JPG", a[r.a.PNG] = "PNG", a[r.a.GIF] = "GIF", a),
                p = function(e) {
                    var t = e.map(function(e) {
                        return m[e]
                    });
                    return t.length > 1 && (t[t.length - 1] = "or " + t[t.length - 1]), Object(i.d)("Incompatible format. File must be an image in {allowedTypes} format.", {
                        allowedTypes: t.join(", ")
                    }, "ImageUploader")
                }
        },
        LyrF: function(e, t, n) {},
        MafX: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GraphQLError = r;
            var a = n("yI7j"),
                i = n("PO9o");

            function r(e, t, n, a, o, s, l) {
                var d = Array.isArray(t) ? 0 !== t.length ? t : void 0 : t ? [t] : void 0,
                    c = n;
                if (!c && d) {
                    var u = d[0];
                    c = u && u.loc && u.loc.source
                }
                var m = a;
                !m && d && (m = d.reduce(function(e, t) {
                    return t.loc && e.push(t.loc.start), e
                }, [])), m && 0 === m.length && (m = void 0);
                var p = void 0;
                if (a && n) {
                    var v = n;
                    p = a.map(function(e) {
                        return (0, i.getLocation)(v, e)
                    })
                } else d && (p = d.reduce(function(e, t) {
                    return t.loc && e.push((0, i.getLocation)(t.loc.source, t.loc.start)), e
                }, []));
                Object.defineProperties(this, {
                    message: {
                        value: e,
                        enumerable: !0,
                        writable: !0
                    },
                    locations: {
                        value: p || void 0,
                        enumerable: !0
                    },
                    path: {
                        value: o || void 0,
                        enumerable: !0
                    },
                    nodes: {
                        value: d || void 0
                    },
                    source: {
                        value: c || void 0
                    },
                    positions: {
                        value: m || void 0
                    },
                    originalError: {
                        value: s
                    },
                    extensions: {
                        value: l || s && s.extensions
                    }
                }), s && s.stack ? Object.defineProperty(this, "stack", {
                    value: s.stack,
                    writable: !0,
                    configurable: !0
                }) : Error.captureStackTrace ? Error.captureStackTrace(this, r) : Object.defineProperty(this, "stack", {
                    value: Error().stack,
                    writable: !0,
                    configurable: !0
                })
            }
            r.prototype = Object.create(Error.prototype, {
                constructor: {
                    value: r
                },
                name: {
                    value: "GraphQLError"
                },
                toString: {
                    value: function() {
                        return (0, a.printError)(this)
                    }
                }
            })
        },
        NLLf: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("/7QA"),
                o = n("/ZC1"),
                s = n("Ue10"),
                l = (n("aDUZ"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(o.a, {
                            allowedFileTypes: this.props.allowedFileTypes,
                            onFilesSubmitted: this.props.processFiles,
                            error: !!this.props.errorMessage
                        }, i.createElement(s.Xa, {
                            className: "image-uploader",
                            textAlign: s.Rb.Center,
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            alignItems: s.f.Center,
                            justifyContent: s.Wa.Center,
                            position: s.jb.Relative,
                            fullHeight: !0,
                            fullWidth: !0
                        }, this.renderErrorMessage(), i.createElement(s.Xa, {
                            position: s.jb.Relative
                        }, i.createElement(s.Xa, {
                            className: "image-uploader__upload-svg--anim-backfill"
                        }, i.createElement(s.sb, {
                            asset: s.tb.Upload,
                            type: s.ub.Alt2,
                            width: this.props.iconWidth || 99,
                            height: this.props.iconWidth || 76
                        })), i.createElement(s.Xa, {
                            className: "image-uploader__upload-svg--anim-fill",
                            position: s.jb.Absolute,
                            display: this.props.isLoading ? s.X.Block : s.X.Hide,
                            attachTop: !0
                        }, i.createElement(s.sb, {
                            asset: s.tb.Upload,
                            type: s.ub.Brand,
                            width: this.props.iconWidth || 99,
                            height: this.props.iconHeight || 76
                        }))), this.props.isLoading ? this.renderLoadingState() : this.renderNormalState()))
                    }, t.prototype.renderLoadingState = function() {
                        return i.createElement(s.Xa, {
                            margin: 1,
                            "data-test-selector": "image-uploader-loading"
                        }, i.createElement(s.W, {
                            type: s.Vb.H4
                        }, Object(r.d)("Uploading", "ImageUploader")))
                    }, t.prototype.renderNormalState = function() {
                        var e = Object(r.d)("Browse", "ImageUploader");
                        return i.createElement(s.Xa, null, i.createElement(s.Xa, null, i.createElement(s.W, {
                            type: s.Vb.H4
                        }, Object(r.d)("Drag and drop your image here", "ImageUploader"))), i.createElement(s.Xa, {
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                x: 1,
                                y: 0
                            },
                            fullWidth: !0,
                            "data-test-selector": "image-uploader-hint"
                        }, i.createElement(s.W, {
                            type: s.Vb.P,
                            fontSize: s.Ca.Size7,
                            color: s.O.Alt2
                        }, this.props.hintMessage)), i.createElement(s.Xa, null, i.createElement(s.z, {
                            ariaLabel: e,
                            type: s.F.Hollow
                        }, e)))
                    }, t.prototype.renderErrorMessage = function() {
                        if (this.props.errorMessage) return i.createElement(s.Xa, {
                            margin: {
                                bottom: 1
                            },
                            "data-test-selector": "image-uploader-error"
                        }, i.createElement(s.W, {
                            type: s.Vb.H5,
                            color: s.O.Error,
                            bold: !0
                        }, this.props.errorMessage))
                    }, t
                }(i.Component)),
                d = n("2/NB"),
                c = n("Lxz1"),
                u = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            isLoading: !1,
                            errorMessage: "",
                            hintMessage: "",
                            allowedFileTypes: d.b
                        }, n.processFiles = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var t, n;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return t = e[0], this.setState({
                                                errorMessage: "",
                                                isLoading: !0
                                            }), this.isFileTypeAcceptable(t) ? [3, 1] : (this.setState({
                                                errorMessage: Object(c.b)(this.state.allowedFileTypes),
                                                isLoading: !1
                                            }), [3, 5]);
                                        case 1:
                                            return this.isFileSizeAcceptable(t) ? [3, 2] : (this.setState({
                                                errorMessage: Object(c.a)(),
                                                isLoading: !1
                                            }), [3, 5]);
                                        case 2:
                                            return a.trys.push([2, 4, , 5]), [4, this.props.provider.uploadFile(t)];
                                        case 3:
                                            return a.sent(), this.props.onClose && this.props.onClose(), [3, 5];
                                        case 4:
                                            return n = a.sent(), this.setState({
                                                errorMessage: n.message,
                                                isLoading: !1
                                            }), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t.allowedFileTypes && (n.state.allowedFileTypes = t.allowedFileTypes), n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = "";
                        e = this.props.isRequiredImageDimensions ? Object(c.g)(this.props.imageDimensions, this.props.maxFileSizeMegabytes) : Object(c.f)(this.props.imageDimensions, this.props.maxFileSizeMegabytes), this.setState({
                            hintMessage: e
                        })
                    }, t.prototype.render = function() {
                        return i.createElement(l, {
                            allowedFileTypes: this.state.allowedFileTypes,
                            errorMessage: this.state.errorMessage,
                            hintMessage: this.state.hintMessage,
                            isLoading: this.state.isLoading,
                            processFiles: this.processFiles,
                            iconHeight: this.props.iconHeight,
                            iconWidth: this.props.iconWidth
                        })
                    }, t.prototype.isFileTypeAcceptable = function(e) {
                        return this.state.allowedFileTypes.includes(e.type)
                    }, t.prototype.isFileSizeAcceptable = function(e) {
                        var t = 1048576 * this.props.maxFileSizeMegabytes;
                        return e.size <= t
                    }, t
                }(i.Component);
            n.d(t, "a", function() {
                return u
            })
        },
        PO9o: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getLocation = function(e, t) {
                var n = /\r\n|[\n\r]/g,
                    a = 1,
                    i = t + 1,
                    r = void 0;
                for (;
                    (r = n.exec(e.body)) && r.index < t;) a += 1, i = t + 1 - (r.index + r[0].length);
                return {
                    line: a,
                    column: i
                }
            }
        },
        PUII: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n("MafX");
            Object.defineProperty(t, "GraphQLError", {
                enumerable: !0,
                get: function() {
                    return a.GraphQLError
                }
            });
            var i = n("glbf");
            Object.defineProperty(t, "syntaxError", {
                enumerable: !0,
                get: function() {
                    return i.syntaxError
                }
            });
            var r = n("dPEW");
            Object.defineProperty(t, "locatedError", {
                enumerable: !0,
                get: function() {
                    return r.locatedError
                }
            });
            var o = n("yI7j");
            Object.defineProperty(t, "printError", {
                enumerable: !0,
                get: function() {
                    return o.printError
                }
            });
            var s = n("vvR6");
            Object.defineProperty(t, "formatError", {
                enumerable: !0,
                get: function() {
                    return s.formatError
                }
            })
        },
        R1IW: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.DirectiveLocation = {
                QUERY: "QUERY",
                MUTATION: "MUTATION",
                SUBSCRIPTION: "SUBSCRIPTION",
                FIELD: "FIELD",
                FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION",
                FRAGMENT_SPREAD: "FRAGMENT_SPREAD",
                INLINE_FRAGMENT: "INLINE_FRAGMENT",
                SCHEMA: "SCHEMA",
                SCALAR: "SCALAR",
                OBJECT: "OBJECT",
                FIELD_DEFINITION: "FIELD_DEFINITION",
                ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION",
                INTERFACE: "INTERFACE",
                UNION: "UNION",
                ENUM: "ENUM",
                ENUM_VALUE: "ENUM_VALUE",
                INPUT_OBJECT: "INPUT_OBJECT",
                INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION"
            }
        },
        RBja: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DashboardEvents_ManagedEvents"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelLogin"
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
                                value: "isFuture"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
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
                                value: "after"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Time"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "before"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Time"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "sort"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "SortOrder"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "collectionsLimit"
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
                                value: "collectionsCursor"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Cursor"
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
                                        value: "channelLogin"
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
                                        value: "managedEventCollections"
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
                                                value: "collectionsLimit"
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
                                                value: "collectionsCursor"
                                            }
                                        }
                                    }],
                                    directives: [{
                                        kind: "Directive",
                                        name: {
                                            kind: "Name",
                                            value: "connection"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "key"
                                            },
                                            value: {
                                                kind: "StringValue",
                                                value: "managed-event-collections",
                                                block: !1
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "filter"
                                            },
                                            value: {
                                                kind: "ListValue",
                                                values: [{
                                                    kind: "StringValue",
                                                    value: "channelLogin",
                                                    block: !1
                                                }]
                                            }
                                        }]
                                    }],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ManagedEventCollections"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "managedEventLeaves"
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
                                            kind: "ObjectValue",
                                            fields: [{
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "endsAfter"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "after"
                                                    }
                                                }
                                            }, {
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "endsBefore"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "before"
                                                    }
                                                }
                                            }, {
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "sortOrder"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "sort"
                                                    }
                                                }
                                            }]
                                        }
                                    }],
                                    directives: [{
                                        kind: "Directive",
                                        name: {
                                            kind: "Name",
                                            value: "connection"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "key"
                                            },
                                            value: {
                                                kind: "StringValue",
                                                value: "future-managed-event-leaves",
                                                block: !1
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "filter"
                                            },
                                            value: {
                                                kind: "ListValue",
                                                values: []
                                            }
                                        }]
                                    }, {
                                        kind: "Directive",
                                        name: {
                                            kind: "Name",
                                            value: "include"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "if"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "isFuture"
                                                }
                                            }
                                        }]
                                    }],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ManagedEventLeaves"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "managedEventLeaves"
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
                                            kind: "ObjectValue",
                                            fields: [{
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "endsAfter"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "after"
                                                    }
                                                }
                                            }, {
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "endsBefore"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "before"
                                                    }
                                                }
                                            }, {
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "sortOrder"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "sort"
                                                    }
                                                }
                                            }]
                                        }
                                    }],
                                    directives: [{
                                        kind: "Directive",
                                        name: {
                                            kind: "Name",
                                            value: "connection"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "key"
                                            },
                                            value: {
                                                kind: "StringValue",
                                                value: "past-managed-event-leaves",
                                                block: !1
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "filter"
                                            },
                                            value: {
                                                kind: "ListValue",
                                                values: []
                                            }
                                        }]
                                    }, {
                                        kind: "Directive",
                                        name: {
                                            kind: "Name",
                                            value: "skip"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "if"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "isFuture"
                                                }
                                            }
                                        }]
                                    }],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ManagedEventLeaves"
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
                    end: 1071
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/dashboard/components/events-page/models/managed-collections-fragment.gql"\n#import "twilight/pages/dashboard/components/events-page/models/managed-leaves-fragment.gql"\nquery DashboardEvents_ManagedEvents($channelLogin: String! $isFuture: Boolean! $limit: Int $after: Time $before: Time $sort: SortOrder $collectionsLimit: Int $cursor: Cursor $collectionsCursor: Cursor) {\nuser(login: $channelLogin) {\nid\nlogin\ndisplayName\nmanagedEventCollections(first: $collectionsLimit after: $collectionsCursor) @connection(key: "managed-event-collections" filter: ["channelLogin"]) {\n...ManagedEventCollections\n}\nmanagedEventLeaves(first: $limit after: $cursor criteria: {endsAfter: $after endsBefore: $before sortOrder: $sort}) @connection(key: "future-managed-event-leaves" filter: []) @include(if: $isFuture) {\n...ManagedEventLeaves\n}\nmanagedEventLeaves(first: $limit after: $cursor criteria: {endsAfter: $after endsBefore: $before sortOrder: $sort}) @connection(key: "past-managed-event-leaves" filter: []) @skip(if: $isFuture) {\n...ManagedEventLeaves\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }
            a.definitions = a.definitions.concat(r(n("zs9K").definitions)), a.definitions = a.definitions.concat(r(n("9QBf").definitions)), e.exports = a
        },
        RnhZ: function(e, t, n) {
            var a = {
                "./af": "K/tc",
                "./af.js": "K/tc",
                "./ar": "jnO4",
                "./ar-dz": "o1bE",
                "./ar-dz.js": "o1bE",
                "./ar-kw": "Qj4J",
                "./ar-kw.js": "Qj4J",
                "./ar-ly": "HP3h",
                "./ar-ly.js": "HP3h",
                "./ar-ma": "CoRJ",
                "./ar-ma.js": "CoRJ",
                "./ar-sa": "gjCT",
                "./ar-sa.js": "gjCT",
                "./ar-tn": "bYM6",
                "./ar-tn.js": "bYM6",
                "./ar.js": "jnO4",
                "./az": "SFxW",
                "./az.js": "SFxW",
                "./be": "H8ED",
                "./be.js": "H8ED",
                "./bg": "hKrs",
                "./bg.js": "hKrs",
                "./bn": "kEOa",
                "./bn.js": "kEOa",
                "./bo": "0mo+",
                "./bo.js": "0mo+",
                "./br": "aIdf",
                "./br.js": "aIdf",
                "./bs": "JVSJ",
                "./bs.js": "JVSJ",
                "./ca": "1xZ4",
                "./ca.js": "1xZ4",
                "./cs": "PA2r",
                "./cs.js": "PA2r",
                "./cv": "A+xa",
                "./cv.js": "A+xa",
                "./cy": "l5ep",
                "./cy.js": "l5ep",
                "./da": "DxQv",
                "./da.js": "DxQv",
                "./de": "tGlX",
                "./de-at": "s+uk",
                "./de-at.js": "s+uk",
                "./de-ch": "u3GI",
                "./de-ch.js": "u3GI",
                "./de.js": "tGlX",
                "./dv": "WYrj",
                "./dv.js": "WYrj",
                "./el": "jUeY",
                "./el.js": "jUeY",
                "./en-au": "Dmvi",
                "./en-au.js": "Dmvi",
                "./en-ca": "OIYi",
                "./en-ca.js": "OIYi",
                "./en-gb": "Oaa7",
                "./en-gb.js": "Oaa7",
                "./en-ie": "4dOw",
                "./en-ie.js": "4dOw",
                "./en-nz": "b1Dy",
                "./en-nz.js": "b1Dy",
                "./eo": "Zduo",
                "./eo.js": "Zduo",
                "./es": "iYuL",
                "./es-do": "CjzT",
                "./es-do.js": "CjzT",
                "./es.js": "iYuL",
                "./et": "7BjC",
                "./et.js": "7BjC",
                "./eu": "D/JM",
                "./eu.js": "D/JM",
                "./fa": "jfSC",
                "./fa.js": "jfSC",
                "./fi": "gekB",
                "./fi.js": "gekB",
                "./fo": "ByF4",
                "./fo.js": "ByF4",
                "./fr": "nyYc",
                "./fr-ca": "2fjn",
                "./fr-ca.js": "2fjn",
                "./fr-ch": "Dkky",
                "./fr-ch.js": "Dkky",
                "./fr.js": "nyYc",
                "./fy": "cRix",
                "./fy.js": "cRix",
                "./gd": "9rRi",
                "./gd.js": "9rRi",
                "./gl": "iEDd",
                "./gl.js": "iEDd",
                "./gom-latn": "DKr+",
                "./gom-latn.js": "DKr+",
                "./he": "x6pH",
                "./he.js": "x6pH",
                "./hi": "3E1r",
                "./hi.js": "3E1r",
                "./hr": "S6ln",
                "./hr.js": "S6ln",
                "./hu": "WxRl",
                "./hu.js": "WxRl",
                "./hy-am": "1rYy",
                "./hy-am.js": "1rYy",
                "./id": "UDhR",
                "./id.js": "UDhR",
                "./is": "BVg3",
                "./is.js": "BVg3",
                "./it": "bpih",
                "./it.js": "bpih",
                "./ja": "B55N",
                "./ja.js": "B55N",
                "./jv": "tUCv",
                "./jv.js": "tUCv",
                "./ka": "IBtZ",
                "./ka.js": "IBtZ",
                "./kk": "bXm7",
                "./kk.js": "bXm7",
                "./km": "6B0Y",
                "./km.js": "6B0Y",
                "./kn": "PpIw",
                "./kn.js": "PpIw",
                "./ko": "Ivi+",
                "./ko.js": "Ivi+",
                "./ky": "lgnt",
                "./ky.js": "lgnt",
                "./lb": "RAwQ",
                "./lb.js": "RAwQ",
                "./lo": "sp3z",
                "./lo.js": "sp3z",
                "./lt": "JvlW",
                "./lt.js": "JvlW",
                "./lv": "uXwI",
                "./lv.js": "uXwI",
                "./me": "KTz0",
                "./me.js": "KTz0",
                "./mi": "aIsn",
                "./mi.js": "aIsn",
                "./mk": "aQkU",
                "./mk.js": "aQkU",
                "./ml": "AvvY",
                "./ml.js": "AvvY",
                "./mr": "Ob0Z",
                "./mr.js": "Ob0Z",
                "./ms": "6+QB",
                "./ms-my": "ZAMP",
                "./ms-my.js": "ZAMP",
                "./ms.js": "6+QB",
                "./my": "honF",
                "./my.js": "honF",
                "./nb": "bOMt",
                "./nb.js": "bOMt",
                "./ne": "OjkT",
                "./ne.js": "OjkT",
                "./nl": "+s0g",
                "./nl-be": "2ykv",
                "./nl-be.js": "2ykv",
                "./nl.js": "+s0g",
                "./nn": "uEye",
                "./nn.js": "uEye",
                "./pa-in": "8/+R",
                "./pa-in.js": "8/+R",
                "./pl": "jVdC",
                "./pl.js": "jVdC",
                "./pt": "8mBD",
                "./pt-br": "0tRk",
                "./pt-br.js": "0tRk",
                "./pt.js": "8mBD",
                "./ro": "lyxo",
                "./ro.js": "lyxo",
                "./ru": "lXzo",
                "./ru.js": "lXzo",
                "./sd": "Z4QM",
                "./sd.js": "Z4QM",
                "./se": "//9w",
                "./se.js": "//9w",
                "./si": "7aV9",
                "./si.js": "7aV9",
                "./sk": "e+ae",
                "./sk.js": "e+ae",
                "./sl": "gVVK",
                "./sl.js": "gVVK",
                "./sq": "yPMs",
                "./sq.js": "yPMs",
                "./sr": "zx6S",
                "./sr-cyrl": "E+lV",
                "./sr-cyrl.js": "E+lV",
                "./sr.js": "zx6S",
                "./ss": "Ur1D",
                "./ss.js": "Ur1D",
                "./sv": "X709",
                "./sv.js": "X709",
                "./sw": "dNwA",
                "./sw.js": "dNwA",
                "./ta": "PeUW",
                "./ta.js": "PeUW",
                "./te": "XLvN",
                "./te.js": "XLvN",
                "./tet": "V2x9",
                "./tet.js": "V2x9",
                "./th": "EOgW",
                "./th.js": "EOgW",
                "./tl-ph": "Dzi0",
                "./tl-ph.js": "Dzi0",
                "./tlh": "z3Vd",
                "./tlh.js": "z3Vd",
                "./tr": "DoHr",
                "./tr.js": "DoHr",
                "./tzl": "z1FC",
                "./tzl.js": "z1FC",
                "./tzm": "wQk9",
                "./tzm-latn": "tT3J",
                "./tzm-latn.js": "tT3J",
                "./tzm.js": "wQk9",
                "./uk": "raLr",
                "./uk.js": "raLr",
                "./ur": "UpQW",
                "./ur.js": "UpQW",
                "./uz": "Loxo",
                "./uz-latn": "AQ68",
                "./uz-latn.js": "AQ68",
                "./uz.js": "Loxo",
                "./vi": "KSF8",
                "./vi.js": "KSF8",
                "./x-pseudo": "/X5v",
                "./x-pseudo.js": "/X5v",
                "./yo": "fzPg",
                "./yo.js": "fzPg",
                "./zh-cn": "XDpg",
                "./zh-cn.js": "XDpg",
                "./zh-hk": "SatO",
                "./zh-hk.js": "SatO",
                "./zh-tw": "kOpN",
                "./zh-tw.js": "kOpN"
            };

            function i(e) {
                var t = r(e);
                return n(t)
            }

            function r(e) {
                var t = a[e];
                if (!(t + 1)) {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return t
            }
            i.keys = function() {
                return Object.keys(a)
            }, i.resolve = r, e.exports = i, i.id = "RnhZ"
        },
        Rzn4: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            });
            var a = function() {
                    return (new Date).toLocaleTimeString("en-us", {
                        timeZoneName: "short"
                    }).split(" ")[2]
                },
                i = function(e) {
                    return Boolean(e.match(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]\s*(am|pm)?$/i))
                },
                r = function(e) {
                    if (e.match(/^([0-9]|0[0-9]|1[0-9]|2[0-3])(am|pm)$/i)) {
                        var t = e.substr(e.length - 2);
                        return e.replace(t, ":00" + t)
                    }
                    return e
                }
        },
        U0Nx: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DashboardEvents_Collection"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelLogin"
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
                                value: "eventName"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "isFuture"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
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
                                value: "after"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Time"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "before"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Time"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "sort"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "SortOrder"
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
                                        value: "channelLogin"
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
                                value: "event"
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
                                        value: "eventName"
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
                                        value: "__typename"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "EventCollection"
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
                                                value: "title"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isDeleted"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "imageURL"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "width"
                                                },
                                                value: {
                                                    kind: "IntValue",
                                                    value: "320"
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "height"
                                                },
                                                value: {
                                                    kind: "IntValue",
                                                    value: "180"
                                                }
                                            }],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "stats"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "followingCount"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "managedLeaves"
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
                                                    kind: "ObjectValue",
                                                    fields: [{
                                                        kind: "ObjectField",
                                                        name: {
                                                            kind: "Name",
                                                            value: "endsAfter"
                                                        },
                                                        value: {
                                                            kind: "Variable",
                                                            name: {
                                                                kind: "Name",
                                                                value: "after"
                                                            }
                                                        }
                                                    }, {
                                                        kind: "ObjectField",
                                                        name: {
                                                            kind: "Name",
                                                            value: "endsBefore"
                                                        },
                                                        value: {
                                                            kind: "Variable",
                                                            name: {
                                                                kind: "Name",
                                                                value: "before"
                                                            }
                                                        }
                                                    }, {
                                                        kind: "ObjectField",
                                                        name: {
                                                            kind: "Name",
                                                            value: "sortOrder"
                                                        },
                                                        value: {
                                                            kind: "Variable",
                                                            name: {
                                                                kind: "Name",
                                                                value: "sort"
                                                            }
                                                        }
                                                    }]
                                                }
                                            }],
                                            directives: [{
                                                kind: "Directive",
                                                name: {
                                                    kind: "Name",
                                                    value: "connection"
                                                },
                                                arguments: [{
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "key"
                                                    },
                                                    value: {
                                                        kind: "StringValue",
                                                        value: "event-collection-future-leaves",
                                                        block: !1
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "filter"
                                                    },
                                                    value: {
                                                        kind: "ListValue",
                                                        values: [{
                                                            kind: "StringValue",
                                                            value: "eventName",
                                                            block: !1
                                                        }]
                                                    }
                                                }]
                                            }, {
                                                kind: "Directive",
                                                name: {
                                                    kind: "Name",
                                                    value: "include"
                                                },
                                                arguments: [{
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "if"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isFuture"
                                                        }
                                                    }
                                                }]
                                            }],
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
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "hasPreviousPage"
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
                                                                    kind: "InlineFragment",
                                                                    typeCondition: {
                                                                        kind: "NamedType",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "EventLeaf"
                                                                        }
                                                                    },
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "FragmentSpread",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "ManagerEventLeaf"
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
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "managedLeaves"
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
                                                    kind: "ObjectValue",
                                                    fields: [{
                                                        kind: "ObjectField",
                                                        name: {
                                                            kind: "Name",
                                                            value: "endsAfter"
                                                        },
                                                        value: {
                                                            kind: "Variable",
                                                            name: {
                                                                kind: "Name",
                                                                value: "after"
                                                            }
                                                        }
                                                    }, {
                                                        kind: "ObjectField",
                                                        name: {
                                                            kind: "Name",
                                                            value: "endsBefore"
                                                        },
                                                        value: {
                                                            kind: "Variable",
                                                            name: {
                                                                kind: "Name",
                                                                value: "before"
                                                            }
                                                        }
                                                    }, {
                                                        kind: "ObjectField",
                                                        name: {
                                                            kind: "Name",
                                                            value: "sortOrder"
                                                        },
                                                        value: {
                                                            kind: "Variable",
                                                            name: {
                                                                kind: "Name",
                                                                value: "sort"
                                                            }
                                                        }
                                                    }]
                                                }
                                            }],
                                            directives: [{
                                                kind: "Directive",
                                                name: {
                                                    kind: "Name",
                                                    value: "connection"
                                                },
                                                arguments: [{
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "key"
                                                    },
                                                    value: {
                                                        kind: "StringValue",
                                                        value: "event-collection-past-leaves",
                                                        block: !1
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "filter"
                                                    },
                                                    value: {
                                                        kind: "ListValue",
                                                        values: [{
                                                            kind: "StringValue",
                                                            value: "eventName",
                                                            block: !1
                                                        }]
                                                    }
                                                }]
                                            }, {
                                                kind: "Directive",
                                                name: {
                                                    kind: "Name",
                                                    value: "skip"
                                                },
                                                arguments: [{
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "if"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isFuture"
                                                        }
                                                    }
                                                }]
                                            }],
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
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "hasPreviousPage"
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
                                                                    kind: "InlineFragment",
                                                                    typeCondition: {
                                                                        kind: "NamedType",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "EventLeaf"
                                                                        }
                                                                    },
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "FragmentSpread",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "ManagerEventLeaf"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 1083
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/dashboard/components/events-page/queries/event-leaf-fragment.gql"\nquery DashboardEvents_Collection($channelLogin: String! $eventName: ID! $isFuture: Boolean! $limit: Int $after: Time $before: Time $sort: SortOrder $cursor: Cursor) {\nuser(login: $channelLogin) {\nid\nlogin\ndisplayName\n}\nevent(id: $eventName) {\n__typename\n...on EventCollection {\nid\ntitle\nisDeleted\nimageURL(width:320 height:180)\nstats {\nfollowingCount\n}\nmanagedLeaves (first: $limit after: $cursor criteria: { endsAfter: $after endsBefore: $before sortOrder: $sort }) @connection(key:"event-collection-future-leaves" filter:["eventName"]) @include(if: $isFuture) {\npageInfo {\nhasNextPage\nhasPreviousPage\n}\nedges {\ncursor\nnode {\n...on EventLeaf {\n...ManagerEventLeaf\n}\n}\n}\n}\nmanagedLeaves (first: $limit after: $cursor criteria: { endsAfter: $after endsBefore: $before sortOrder: $sort }) @connection(key:"event-collection-past-leaves" filter:["eventName"]) @skip(if: $isFuture) {\npageInfo {\nhasNextPage\nhasPreviousPage\n}\nedges {\ncursor\nnode {\n...on EventLeaf {\n...ManagerEventLeaf\n}\n}\n}\n}\n}\n}\n}',
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
            }(n("293+").definitions)), e.exports = a
        },
        "V/+G": function(e, t, n) {},
        WHSC: function(e, t, n) {},
        Wwq8: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var a = function() {
                return Intl.DateTimeFormat().resolvedOptions().timeZone
            }
        },
        X7Ac: function(e, t, n) {
            "use strict";
            var a = n("wbMx");
            n.d(t, "a", function() {
                return a.a
            }), n.d(t, "b", function() {
                return a.b
            })
        },
        Y0z8: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "ManagerEventCollection"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "EventCollection"
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
                                value: "title"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "description"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "defaultTimeZone"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "imageURL"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "width"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "320"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "180"
                                }
                            }],
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
                                value: "isDeleted"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "owner"
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
                                        value: "__typename"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "__typename"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 176
                }
            };
            n.loc.source = {
                body: "fragment ManagerEventCollection on EventCollection {\nid\ntitle\ndescription\ndefaultTimeZone\nimageURL(width:320 height:180)\nlanguage\nisDeleted\nowner {\nid\n__typename\n}\n__typename\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        YwGE: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            });
            var a = {
                    Created: "created",
                    Downloading: "downloading",
                    Transmuxing: "transmuxing",
                    Failed: "failed",
                    Complete: "complete"
                },
                i = "public"
        },
        ZYLp: function(e, t, n) {},
        ZvSv: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, i = n("mrSG"),
                r = n("q1tI"),
                o = n("4p7I"),
                s = n("jKe7"),
                l = n("/7QA"),
                d = n("cr+I"),
                c = n("fvjX"),
                u = n("yR8l"),
                m = n("V+GM"),
                p = n("geRD"),
                v = n("NvVO"),
                g = n("2xye"),
                f = n("GnwI"),
                h = n("ePeS"),
                k = n("9rZX"),
                E = n("ZDlU"),
                b = n("8/mp"),
                N = n("AmIn"),
                y = n("AOo2"),
                D = n("0b5K"),
                _ = n("lvY1");

            function T(e) {
                var t = {
                    action: e.action,
                    status: e.status || null,
                    id: e.id || null,
                    channel: e.channel || null,
                    channel_id: e.channelID || null,
                    title: e.title || null,
                    start_time_utc: e.startTimeUTC || null,
                    end_time_utc: e.endTimeUTC || null,
                    time_zone_id: e.timeZoneID || null,
                    game_id: e.gameID ? +e.gameID : null,
                    description: e.description || null,
                    cover_image_id: e.coverImageID || null
                };
                return l.p.tracking.track(g.SpadeEventType.EventManager, t)
            }

            function S(e, t, n, a, i, r) {
                T({
                    action: e,
                    status: t,
                    id: n,
                    channelID: a,
                    channel: i,
                    title: r.title,
                    startTimeUTC: r.startTime.getTime() / 1e3,
                    endTimeUTC: r.endTime.getTime() / 1e3,
                    timeZoneID: r.timeZoneID,
                    gameID: r.game.id,
                    description: r.description,
                    coverImageID: r.coverImage && r.coverImage.id
                })
            }

            function C(e, t, n) {
                T({
                    action: e,
                    status: t,
                    id: n.eventID,
                    title: n.title,
                    timeZoneID: n.timeZoneID,
                    description: n.description,
                    coverImageID: n.coverImageID
                })
            }! function(e) {
                e.CreateEventOpenModal = "create_event_open_modal", e.CreateEventCloseModal = "create_event_close_modal", e.EditEventOpenModal = "edit_event_open_modal", e.EditEventCloseModal = "edit_event_close_modal", e.CreateEventDone = "create_event_done", e.EditEventDone = "edit_event_done", e.DeleteEventYes = "delete_event_yes", e.DeleteEventNo = "delete_event_no"
            }(a || (a = {}));
            var I = n("0vTG"),
                O = n("U0Nx"),
                L = n("293+"),
                F = n("Ue10"),
                j = "https://static-cdn.jtvnw.net/twitch-event-images-v2/default/town-320x180",
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: ""
                        }, t.onCommit = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, o, s, d = this;
                                return i.__generator(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            if (t = Object(l.d)("An unexpected error occured creating your event", "SegmentEventModal"), !(this.props.user && this.props.user.id && this.props.user.login && e)) return this.setState({
                                                error: t
                                            }), [2];
                                            if (n = this.props.user.login, r = a.CreateEventDone, o = !0, !this.props.eventID) return [3, 5];
                                            c.label = 1;
                                        case 1:
                                            return c.trys.push([1, 3, , 4]), r = a.EditEventDone, s = this.props.eventID, [4, this.props.updateEvent(i.__assign({}, Object(p.a)({
                                                coverImageID: e.imageID,
                                                description: e.description,
                                                endAt: e.endTime,
                                                gameID: e.game.id,
                                                id: this.props.eventID,
                                                startAt: e.startTime,
                                                title: e.title
                                            }), {
                                                optimisticResponse: {
                                                    updateSegmentEvent: {
                                                        event: {
                                                            id: s,
                                                            title: e.title,
                                                            startAt: e.startTime.toISOString(),
                                                            endAt: e.endTime.toISOString(),
                                                            game: {
                                                                id: e.game.id,
                                                                displayName: e.game.name,
                                                                __typename: "Game"
                                                            },
                                                            channel: {
                                                                id: e.ownerID,
                                                                login: this.props.user.login,
                                                                displayName: this.props.user.displayName || this.props.user.login,
                                                                __typename: "User"
                                                            },
                                                            parent: e.parent || this.props.parent || null,
                                                            imageURL: j,
                                                            stats: {
                                                                followingCount: 0,
                                                                __typename: "EventStats"
                                                            },
                                                            isDeleted: !1,
                                                            __typename: "EventLeaf"
                                                        },
                                                        __typename: "UpdateSegmentEventPayload"
                                                    }
                                                },
                                                update: function(e, t) {
                                                    var n = t.data;
                                                    e.writeFragment({
                                                        id: "EventLeaf:" + s,
                                                        fragment: L,
                                                        data: i.__assign({}, n.updateSegmentEvent.event)
                                                    })
                                                }
                                            }))];
                                        case 2:
                                            return c.sent(), this.props.closeModal(), [3, 4];
                                        case 3:
                                            return c.sent(), this.setState({
                                                error: t
                                            }), o = !1, [3, 4];
                                        case 4:
                                            return [3, 8];
                                        case 5:
                                            return c.trys.push([5, 7, , 8]), [4, this.props.createEvent(i.__assign({}, Object(p.a)({
                                                channelID: e.ownerID,
                                                coverImageID: e.imageID,
                                                description: e.description || "",
                                                endAt: e.endTime,
                                                gameID: e.game.id,
                                                ownerID: e.ownerID,
                                                parentID: e.parent && e.parent.id || this.props.parent && this.props.parent.id || "",
                                                startAt: e.startTime,
                                                title: e.title
                                            }), {
                                                optimisticResponse: {
                                                    createSegmentEvent: {
                                                        event: {
                                                            id: "-",
                                                            parent: e.parent || this.props.parent || null,
                                                            title: e.title,
                                                            startAt: e.startTime.toISOString(),
                                                            endAt: e.endTime.toISOString(),
                                                            game: {
                                                                id: e.game.id,
                                                                displayName: e.game.name,
                                                                __typename: "Game"
                                                            },
                                                            channel: {
                                                                id: e.ownerID,
                                                                login: this.props.user.login,
                                                                displayName: this.props.user.displayName || this.props.user.login,
                                                                __typename: "User"
                                                            },
                                                            imageURL: j,
                                                            stats: {
                                                                followingCount: 0,
                                                                __typename: "EventStats"
                                                            },
                                                            isDeleted: !1,
                                                            __typename: "EventLeaf"
                                                        },
                                                        __typename: "CreateSegmentEventPayload"
                                                    }
                                                },
                                                update: function(t, a) {
                                                    var r = a.data;
                                                    if (r.createSegmentEvent.event) {
                                                        var o = new Date(r.createSegmentEvent.event.endAt) > new Date;
                                                        try {
                                                            var s = t.readQuery({
                                                                query: O,
                                                                variables: {
                                                                    eventName: e.parent && e.parent.id || d.props.parent && d.props.parent.id || "",
                                                                    isFuture: o
                                                                }
                                                            });
                                                            s && t.writeQuery({
                                                                query: O,
                                                                variables: {
                                                                    eventName: e.parent && e.parent.id || d.props.parent && d.props.parent.id || "",
                                                                    channelLogin: n,
                                                                    isFuture: o
                                                                },
                                                                data: i.__assign({}, s, {
                                                                    event: i.__assign({}, s.event, {
                                                                        managedLeaves: i.__assign({}, s.event && s.event.managedLeaves || {}, {
                                                                            edges: (s.event && s.event.managedLeaves && s.event.managedLeaves.edges || []).concat([{
                                                                                cursor: "",
                                                                                node: r.createSegmentEvent.event,
                                                                                __typename: "EventLeafEdge"
                                                                            }])
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        } catch (e) {}
                                                        try {
                                                            var l = t.readQuery({
                                                                query: I,
                                                                variables: {
                                                                    channelLogin: n,
                                                                    isFuture: o
                                                                }
                                                            });
                                                            l && t.writeQuery({
                                                                query: I,
                                                                variables: {
                                                                    channelLogin: n,
                                                                    isFuture: o
                                                                },
                                                                data: i.__assign({}, l, {
                                                                    user: i.__assign({}, l.user, {
                                                                        managedEventLeaves: i.__assign({}, l.user && l.user.managedEventLeaves || {}, {
                                                                            edges: (l.user && l.user.managedEventLeaves && l.user.managedEventLeaves.edges || []).concat([{
                                                                                cursor: "",
                                                                                node: r.createSegmentEvent.event,
                                                                                __typename: "EventLeafEdge"
                                                                            }])
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        } catch (e) {}
                                                    }
                                                }
                                            }))];
                                        case 6:
                                            return c.sent(), this.props.closeModal(), [3, 8];
                                        case 7:
                                            return c.sent(), this.setState({
                                                error: t
                                            }), o = !1, [3, 8];
                                        case 8:
                                            return S(r, o, this.props.eventID, this.props.user && this.props.user.id, this.props.user && this.props.user.login, e), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.user) return null;
                        if (this.props.data && this.props.data.loading) return r.createElement(F.Xa, {
                            fullWidth: !0,
                            fullHeight: !0
                        }, r.createElement(F.Za, null));
                        var e = void 0;
                        this.props.data && this.props.data.event && this.props.data.event.game && (e = {
                            __typename: "EventModel",
                            eventID: this.props.data.event.id,
                            parent: this.props.data.event.parent || this.props.parent || void 0,
                            title: this.props.data.event.title,
                            imageUrl: this.props.eventID ? this.props.data.event.imageURL : this.props.data.event.parent && this.props.data.event.parent.imageURL || this.props.parent && this.props.parent.imageURL || j,
                            description: this.props.data.event.description,
                            ownerID: this.props.data.event.owner && this.props.data.event.owner.id || "",
                            imageID: null,
                            game: {
                                id: this.props.data.event.game.id,
                                name: this.props.data.event.game.displayName,
                                __typename: "Game"
                            },
                            language: this.props.data.event.language,
                            startTime: new Date(this.props.data.event.startAt),
                            endTime: new Date(this.props.data.event.endAt),
                            timeZoneID: this.props.data.event.defaultTimeZone
                        });
                        var t = {
                                id: this.props.user.id || "",
                                login: this.props.user.login || "",
                                displayName: this.props.user.displayName || this.props.user.login || "",
                                __typename: "User"
                            },
                            n = "" !== this.state.error;
                        return r.createElement(N.a, {
                            closeModal: this.props.closeModal,
                            onCommit: this.onCommit,
                            event: e,
                            serviceError: n ? this.state.error : null,
                            owner: t,
                            parent: this.props.data && this.props.data.event && this.props.data.event.parent || this.props.parent || void 0
                        })
                    }, t = i.__decorate([Object(u.a)(D, {
                        skip: function(e) {
                            return !e.eventID
                        },
                        options: function(e) {
                            return {
                                variables: {
                                    eventID: e.eventID
                                }
                            }
                        }
                    }), Object(u.a)(_, {
                        name: "updateEvent"
                    }), Object(u.a)(y, {
                        name: "createEvent"
                    })], t)
                }(r.Component),
                A = n("zrmy"),
                M = n("8QY8"),
                x = "https://static-cdn.jtvnw.net/twitch-event-images-v2/default/town-320x180",
                R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: ""
                        }, t.onCommit = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, o, s;
                                return i.__generator(this, function(d) {
                                    switch (d.label) {
                                        case 0:
                                            if (t = Object(l.d)("An unexpected error occured creating your event", "SingleEventModal"), !(this.props.user && this.props.user.id && this.props.user.login && e)) return this.setState({
                                                error: t
                                            }), [2];
                                            if (n = this.props.user.login, r = a.CreateEventDone, o = !0, !this.props.eventID) return [3, 5];
                                            d.label = 1;
                                        case 1:
                                            return d.trys.push([1, 3, , 4]), r = a.EditEventDone, s = this.props.eventID, [4, this.props.updateEvent(i.__assign({}, Object(p.a)({
                                                id: this.props.eventID,
                                                channelID: e.ownerID,
                                                coverImageID: e.imageID,
                                                defaultTimeZone: e.timeZoneID,
                                                description: e.description,
                                                endAt: e.endTime,
                                                startAt: e.startTime,
                                                gameID: e.game.id,
                                                language: e.language,
                                                ownerID: e.ownerID,
                                                title: e.title
                                            }), {
                                                optimisticResponse: {
                                                    updateSingleEvent: {
                                                        event: {
                                                            id: s,
                                                            title: e.title,
                                                            startAt: e.startTime.toISOString(),
                                                            endAt: e.endTime.toISOString(),
                                                            game: {
                                                                id: e.game.id,
                                                                displayName: e.game.name,
                                                                __typename: "Game"
                                                            },
                                                            channel: {
                                                                id: e.ownerID,
                                                                login: this.props.user.login,
                                                                displayName: this.props.user.displayName || this.props.user.login,
                                                                __typename: "User"
                                                            },
                                                            parent: null,
                                                            imageURL: x,
                                                            stats: {
                                                                followingCount: 0,
                                                                __typename: "EventStats"
                                                            },
                                                            isDeleted: !1,
                                                            __typename: "EventLeaf"
                                                        },
                                                        __typename: "UpdateSingleEventPayload"
                                                    }
                                                },
                                                update: function(e, t) {
                                                    var n = t.data;
                                                    e.writeFragment({
                                                        id: "EventLeaf:" + s,
                                                        fragment: L,
                                                        data: i.__assign({}, n.updateSingleEvent.event)
                                                    })
                                                }
                                            }))];
                                        case 2:
                                            return d.sent(), this.props.closeModal(), [3, 4];
                                        case 3:
                                            return d.sent(), this.setState({
                                                error: t
                                            }), o = !1, [3, 4];
                                        case 4:
                                            return [3, 8];
                                        case 5:
                                            return d.trys.push([5, 7, , 8]), [4, this.props.createEvent(i.__assign({}, Object(p.a)({
                                                channelID: e.ownerID,
                                                coverImageID: e.imageID,
                                                defaultTimeZone: e.timeZoneID,
                                                description: e.description || "",
                                                endAt: e.endTime,
                                                startAt: e.startTime,
                                                gameID: e.game.id,
                                                language: e.language,
                                                ownerID: e.ownerID,
                                                title: e.title
                                            }), {
                                                optimisticResponse: {
                                                    createSingleEvent: {
                                                        event: {
                                                            id: "-",
                                                            title: e.title,
                                                            startAt: e.startTime.toISOString(),
                                                            endAt: e.endTime.toISOString(),
                                                            game: {
                                                                id: e.game.id,
                                                                displayName: e.game.name,
                                                                __typename: "Game"
                                                            },
                                                            channel: {
                                                                id: e.ownerID,
                                                                login: this.props.user.login,
                                                                displayName: this.props.user.displayName || this.props.user.login,
                                                                __typename: "User"
                                                            },
                                                            parent: null,
                                                            imageURL: x,
                                                            stats: {
                                                                followingCount: 0,
                                                                __typename: "EventStats"
                                                            },
                                                            isDeleted: !1,
                                                            __typename: "EventLeaf"
                                                        },
                                                        __typename: "CreateSingleEventPayload"
                                                    }
                                                },
                                                update: function(e, t) {
                                                    var a = t.data;
                                                    if (a.createSingleEvent.event) {
                                                        var r = new Date(a.createSingleEvent.event.endAt) > new Date;
                                                        try {
                                                            var o = e.readQuery({
                                                                query: I,
                                                                variables: {
                                                                    channelLogin: n,
                                                                    isFuture: r
                                                                }
                                                            });
                                                            o && e.writeQuery({
                                                                query: I,
                                                                variables: {
                                                                    channelLogin: n,
                                                                    isFuture: r
                                                                },
                                                                data: i.__assign({}, o, {
                                                                    user: i.__assign({}, o.user, {
                                                                        managedEventLeaves: i.__assign({}, o.user && o.user.managedEventLeaves || {}, {
                                                                            edges: (o.user && o.user.managedEventLeaves && o.user.managedEventLeaves.edges || []).concat([{
                                                                                node: a.createSingleEvent.event,
                                                                                cursor: "",
                                                                                __typename: "EventLeafEdge"
                                                                            }])
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        } catch (e) {}
                                                    }
                                                }
                                            }))];
                                        case 6:
                                            return d.sent(), this.props.closeModal(), [3, 8];
                                        case 7:
                                            return d.sent(), this.setState({
                                                error: t
                                            }), o = !1, [3, 8];
                                        case 8:
                                            return S(r, o, this.props.eventID, this.props.user && this.props.user.id, this.props.user && this.props.user.login, e), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.user) return null;
                        if (this.props.data && this.props.data.loading) return r.createElement(F.Xa, {
                            fullWidth: !0,
                            fullHeight: !0
                        }, r.createElement(F.Za, null));
                        var e = void 0;
                        this.props.data && this.props.data.event && this.props.data.event.game && (e = {
                            __typename: "EventModel",
                            eventID: this.props.data.event.id,
                            title: this.props.data.event.title,
                            imageUrl: this.props.data.event.imageURL,
                            description: this.props.data.event.description,
                            ownerID: this.props.data.event.owner && this.props.data.event.owner.id || "",
                            imageID: null,
                            game: {
                                id: this.props.data.event.game.id,
                                name: this.props.data.event.game.displayName,
                                __typename: "Game"
                            },
                            language: this.props.data.event.language,
                            startTime: new Date(this.props.data.event.startAt),
                            endTime: new Date(this.props.data.event.endAt),
                            timeZoneID: this.props.data.event.defaultTimeZone
                        });
                        var t = {
                                id: this.props.user.id || "",
                                login: this.props.user.login || "",
                                displayName: this.props.user.displayName || this.props.user.login || "",
                                __typename: "User"
                            },
                            n = "" !== this.state.error;
                        return r.createElement(N.a, {
                            closeModal: this.props.closeModal,
                            onCommit: this.onCommit,
                            event: e,
                            serviceError: n ? this.state.error : null,
                            owner: t
                        })
                    }, t = i.__decorate([Object(u.a)(D, {
                        skip: function(e) {
                            return !e.eventID
                        },
                        options: function(e) {
                            return {
                                variables: {
                                    eventID: e.eventID
                                }
                            }
                        }
                    }), Object(u.a)(M, {
                        name: "updateEvent"
                    }), Object(u.a)(A, {
                        name: "createEvent"
                    })], t)
                }(r.Component),
                V = n("xeRp"),
                P = n("9rlX"),
                U = (n("IejX"), function(e) {
                    return e ? e.join(",") : ""
                }),
                X = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onCancel = function() {
                            n.props.closeModal()
                        }, n.onConfirm = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return i.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return e = this.props.getFieldErrors(this.state.fieldValues), this.setState({
                                                fieldErrors: e
                                            }), e.hasErrors ? [2] : [4, this.props.onCommit(this.state.fieldValues)];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        }, n.onFinishUploading = function(e) {
                            n.setState(function(t) {
                                return {
                                    fieldValues: i.__assign({}, t.fieldValues, {
                                        imageID: e._id
                                    })
                                }
                            })
                        }, n.onTitleChange = function(e) {
                            var t = e.currentTarget.value;
                            n.setState(function(e) {
                                return {
                                    fieldValues: i.__assign({}, e.fieldValues, {
                                        title: t
                                    })
                                }
                            })
                        }, n.onDescriptionChange = function(e) {
                            var t = e.currentTarget.value;
                            n.setState(function(e) {
                                return {
                                    fieldValues: i.__assign({}, e.fieldValues, {
                                        description: t
                                    })
                                }
                            })
                        }, n.onLanguageChange = function(e) {
                            var t = e.language;
                            n.setState(function(e) {
                                return {
                                    fieldValues: i.__assign({}, e.fieldValues, {
                                        language: t
                                    })
                                }
                            })
                        }, n.state = {
                            fieldValues: i.__assign({}, n.props.eventFieldValues),
                            fieldErrors: {}
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        return this.props.serviceError && (e = r.createElement(F.Xa, null, r.createElement(F.W, {
                            fontSize: F.Ca.Size4,
                            color: F.O.Error
                        }, this.props.serviceError))), r.createElement(F.Xa, {
                            className: "event-modal"
                        }, r.createElement(F.Eb, {
                            className: "event-modal__content",
                            padding: 4,
                            margin: {
                                top: 5
                            },
                            background: F.r.Base
                        }, r.createElement(F.Eb, {
                            display: F.X.Flex,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            justifyContent: F.Wa.Between,
                            borderBottom: !0
                        }, r.createElement(F.Xa, {
                            flexGrow: 0,
                            flexShrink: 1
                        }, r.createElement(F.W, {
                            type: F.Vb.H3
                        }, Object(l.d)("Create a Series", "CollectionModal"))), r.createElement(F.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, r.createElement(F.z, {
                            type: F.F.Text,
                            onClick: this.onCancel
                        }, Object(l.d)("Cancel", "CollectionModal")), r.createElement(F.z, {
                            onClick: this.onConfirm
                        }, Object(l.d)("Save", "CollectionModal")))), e, r.createElement(b.b, null, r.createElement(r.Fragment, null, r.createElement(F.Ja, {
                            gutterSize: F.Ka.Large
                        }, r.createElement(F.P, {
                            cols: {
                                default: 12,
                                md: 6,
                                lg: 5
                            }
                        }, r.createElement(V.a, {
                            user: this.props.owner,
                            onFinishUploading: this.onFinishUploading,
                            initialImageData: this.props.imageUrl ? new URL(this.props.imageUrl) : void 0
                        })), r.createElement(F.P, {
                            cols: {
                                default: 12,
                                md: 6,
                                lg: 7
                            }
                        }, r.createElement(F.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(F.Ea, {
                            id: "event-title",
                            label: Object(l.d)("Event Title", "CollectionModal"),
                            error: !!this.state.fieldErrors.title,
                            errorMessage: U(this.state.fieldErrors.title)
                        }, r.createElement(F.Ra, {
                            onChange: this.onTitleChange,
                            value: this.state.fieldValues.title,
                            type: F.Ta.Text,
                            maxLength: 140,
                            placeholder: Object(l.d)("Your title is also used in reminders and social media posts. ({limit} character limit)", {
                                limit: 140
                            }, "CollectionModal")
                        }))), r.createElement(F.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(F.Ea, {
                            label: Object(l.d)("Event Description", "CollectionModal"),
                            error: !!this.state.fieldErrors.description,
                            errorMessage: U(this.state.fieldErrors.description)
                        }, r.createElement(F.Sb, {
                            placeholder: Object(l.d)("Tell viewers why they should watch your series", "CollectionModal"),
                            onChange: this.onDescriptionChange,
                            value: this.state.fieldValues.description,
                            disabled: !1
                        }))), r.createElement(F.Ea, {
                            label: "",
                            error: !!this.state.fieldErrors.language,
                            errorMessage: U(this.state.fieldErrors.language)
                        }, r.createElement(F.Xa, {
                            display: F.X.Flex,
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(P.a, {
                            onChange: this.onLanguageChange,
                            disabled: !1,
                            defaultLanguage: this.state.fieldValues.language
                        })))))))))
                    }, t
                }(r.Component),
                G = n("4Q4g"),
                B = n("pM79"),
                K = n("fQJ0"),
                q = n("Wwq8"),
                z = n("JNgr"),
                W = n("mvg9"),
                $ = "https://static-cdn.jtvnw.net/twitch-event-images-v2/default/town-320x180",
                H = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: ""
                        }, t.onCommit = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, o, s, d, c, u, m;
                                return i.__generator(this, function(v) {
                                    switch (v.label) {
                                        case 0:
                                            if (t = Object(l.d)("An unexpected error occurred creating your event", "TimetableEventModal"), !(this.props.user && this.props.user.id && this.props.user.login && e)) return this.setState({
                                                error: t
                                            }), [2];
                                            if (n = e.imageID ? e.imageID : null, r = Object(q.a)(), o = this.props.user.login, s = this.props.user.id, d = a.CreateEventDone, c = !0, !this.props.eventID) return [3, 5];
                                            v.label = 1;
                                        case 1:
                                            return v.trys.push([1, 3, , 4]), d = a.EditEventDone, m = this.props.eventID, [4, this.props.updateTimetableEvent(i.__assign({}, Object(p.a)({
                                                id: this.props.eventID,
                                                coverImageID: n,
                                                defaultTimeZone: r,
                                                description: e.description,
                                                language: e.language,
                                                title: e.title
                                            }), {
                                                optimisticResponse: {
                                                    updateTimetableEvent: {
                                                        event: {
                                                            id: m,
                                                            title: e.title,
                                                            description: e.description,
                                                            defaultTimeZone: r,
                                                            imageURL: $,
                                                            language: e.language,
                                                            isDeleted: !1,
                                                            owner: {
                                                                id: s,
                                                                __typename: "User"
                                                            },
                                                            __typename: "EventCollection"
                                                        },
                                                        __typename: "UpdateTimetableEventPayload"
                                                    }
                                                }
                                            }))];
                                        case 2:
                                            return v.sent(), this.props.closeModal(), [3, 4];
                                        case 3:
                                            return v.sent(), this.setState({
                                                error: t
                                            }), c = !1, [3, 4];
                                        case 4:
                                            return [3, 8];
                                        case 5:
                                            return v.trys.push([5, 7, , 8]), [4, this.props.createTimetableEvent(i.__assign({}, Object(p.a)({
                                                coverImageID: n,
                                                defaultTimeZone: r,
                                                description: e.description,
                                                language: e.language,
                                                ownerID: s,
                                                title: e.title
                                            }), {
                                                optimisticResponse: {
                                                    createTimetableEvent: {
                                                        event: {
                                                            id: "-",
                                                            title: e.title,
                                                            description: e.description,
                                                            defaultTimeZone: r,
                                                            imageURL: $,
                                                            language: e.language,
                                                            isDeleted: !1,
                                                            owner: {
                                                                id: s,
                                                                __typename: "User"
                                                            },
                                                            __typename: "EventCollection"
                                                        },
                                                        __typename: "CreateTimetableEventPayload"
                                                    }
                                                },
                                                update: function(e, t) {
                                                    var n = t.data;
                                                    if (n.createTimetableEvent.event) {
                                                        var a = e.readQuery({
                                                            query: W,
                                                            variables: {
                                                                channelLogin: o
                                                            }
                                                        });
                                                        if (a && a.user) {
                                                            var r = n.createTimetableEvent.event,
                                                                s = {
                                                                    __typename: "EventCollectionEdge",
                                                                    cursor: "",
                                                                    node: {
                                                                        id: r.id,
                                                                        title: r.title,
                                                                        imageURL: r.imageURL,
                                                                        isDeleted: r.isDeleted,
                                                                        stats: {
                                                                            __typename: "EventStats",
                                                                            followingCount: 0
                                                                        },
                                                                        managedLeaves: null,
                                                                        __typename: "EventCollection"
                                                                    }
                                                                },
                                                                l = (a.user.managedEventCollections && a.user.managedEventCollections.edges || []).concat([s]),
                                                                d = a.user.managedEventCollections && a.user.managedEventCollections.pageInfo && a.user.managedEventCollections.pageInfo.hasNextPage || !1,
                                                                c = i.__assign({}, a, {
                                                                    user: i.__assign({}, a.user, {
                                                                        managedEventCollections: {
                                                                            __typename: "EventCollectionConnection",
                                                                            pageInfo: {
                                                                                __typename: "PageInfo",
                                                                                hasNextPage: d
                                                                            },
                                                                            edges: l
                                                                        }
                                                                    })
                                                                });
                                                            e.writeQuery({
                                                                query: W,
                                                                variables: {
                                                                    channelLogin: o
                                                                },
                                                                data: c
                                                            })
                                                        }
                                                    }
                                                }
                                            }))];
                                        case 6:
                                            return u = v.sent(), this.props.closeModal(), this.props.onCreate && u.data && u.data.createTimetableEvent && u.data.createTimetableEvent.event ? (m = u.data.createTimetableEvent.event.id, C(d, !0, {
                                                eventID: this.props.eventID,
                                                title: e.title,
                                                timeZoneID: r,
                                                description: e.description,
                                                coverImageID: n
                                            }), this.props.onCreate(m), [2]) : [3, 8];
                                        case 7:
                                            return v.sent(), this.setState({
                                                error: t
                                            }), c = !1, [3, 8];
                                        case 8:
                                            return C(d, c, {
                                                eventID: this.props.eventID,
                                                title: e.title,
                                                timeZoneID: r,
                                                description: e.description,
                                                coverImageID: n
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.user) return null;
                        if (this.props.data && this.props.data.loading) return r.createElement(F.Xa, {
                            fullWidth: !0,
                            fullHeight: !0
                        }, r.createElement(F.Za, null));
                        var e, t = void 0;
                        this.props.data && this.props.data.event && function(e) {
                            return !(!e || "EventCollection" !== e.__typename)
                        }(this.props.data.event) ? (e = {
                            title: this.props.data.event.title,
                            description: this.props.data.event.description,
                            language: this.props.data.event.language
                        }, t = this.props.data.event.imageURL) : e = {
                            title: "",
                            description: "",
                            language: Object(z.a)()
                        };
                        var n = {
                                id: this.props.user.id || "",
                                login: this.props.user.login || "",
                                displayName: this.props.user.displayName || this.props.user.login || "",
                                __typename: "User"
                            },
                            a = "" !== this.state.error;
                        return r.createElement(X, {
                            closeModal: this.props.closeModal,
                            onCommit: this.onCommit,
                            eventFieldValues: e,
                            serviceError: a ? this.state.error : null,
                            owner: n,
                            getFieldErrors: this.getFieldErrors,
                            imageUrl: t
                        })
                    }, t.prototype.getFieldErrors = function(e) {
                        var t = function(e) {
                                return Object(l.d)("The {fieldName} field is required", {
                                    fieldName: e
                                }, "TimetableEventModal")
                            },
                            n = {};
                        return e.title || (n.title = [t("Title")]), e.language || (n.language = [t("Language")]), e.description || (n.description = [t("Description")]), n.hasErrors = !!n.title || !!n.language || !!n.description, n
                    }, t = i.__decorate([Object(u.a)(B, {
                        skip: function(e) {
                            return !e.eventID
                        },
                        options: function(e) {
                            return {
                                variables: {
                                    eventID: e.eventID
                                }
                            }
                        }
                    }), Object(u.a)(K, {
                        name: "updateTimetableEvent"
                    }), Object(u.a)(G, {
                        name: "createTimetableEvent"
                    })], t)
                }(r.Component),
                Y = n("/MKj"),
                Q = n("aCAx"),
                Z = n("CcE2"),
                J = n("Jhye"),
                ee = n("ug+5"),
                te = (n("sqZK"), "delete-button"),
                ne = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderTitle = function() {
                            var e = Object(l.d)("Events", "DashboardEventsHeader"),
                                n = r.createElement(F.W, {
                                    type: F.Vb.H4,
                                    bold: !0
                                }, e),
                                a = null,
                                i = null,
                                o = null;
                            return t.props.navigatedCollection && (a = r.createElement(F.Xa, {
                                display: F.X.Flex
                            }, r.createElement(F.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, r.createElement(F.W, {
                                type: F.Vb.H4,
                                bold: !0
                            }, "/ ", t.props.navigatedCollection.title))), i = r.createElement(F.Xa, {
                                margin: {
                                    right: 1
                                }
                            }, r.createElement(F.I, {
                                size: F.J.Size8,
                                aspect: F.p.Aspect16x9,
                                src: t.props.navigatedCollection.imageURL,
                                alt: "" !== t.props.navigatedCollection.imageURL ? t.props.navigatedCollection.title : ""
                            })), n = r.createElement(F.U, {
                                to: "/" + t.props.channelName + "/dashboard/events"
                            }, r.createElement(F.W, {
                                type: F.Vb.H4,
                                bold: !0
                            }, e)), t.props.navigatedCollection.stats && (o = r.createElement(F.W, null, t.props.navigatedCollection.stats.followingCount, " ", Object(l.d)("Reminders Set", "DashboardEventsHeader")))), r.createElement(r.Fragment, null, r.createElement(F.Xa, {
                                display: F.X.Flex
                            }, i, r.createElement(F.Xa, {
                                display: F.X.Flex,
                                flexDirection: F.Aa.Column
                            }, r.createElement(F.Xa, {
                                display: F.X.Flex,
                                flexDirection: F.Aa.Row
                            }, n, a), o)))
                        }, t.renderButtonRow = function() {
                            var e = t.props.navigatedCollection && r.createElement(F.Xa, {
                                display: F.X.Flex
                            }, r.createElement(J.a, {
                                id: t.props.navigatedCollection.id,
                                title: t.props.navigatedCollection.title,
                                eventLocation: ee.a.DashboardEvents
                            }, r.createElement(F.z, {
                                type: F.F.Hollow,
                                icon: F.tb.Share
                            }, Object(l.d)("Share", "DashboardEventsHeader"))), r.createElement(F.Xa, {
                                margin: {
                                    x: 1
                                }
                            }, r.createElement(F.z, {
                                type: F.F.Hollow,
                                icon: F.tb.Edit,
                                onClick: t.handleEditEvent
                            }, Object(l.d)("Edit", "DashboardEventsHeader"))), r.createElement(F.z, {
                                "data-a-target": te,
                                type: F.F.Hollow,
                                onClick: t.deleteEventCollection,
                                icon: F.tb.Trash
                            }, Object(l.d)("Delete", "DashboardEventsHeader")));
                            return r.createElement(F.Xa, {
                                display: F.X.Flex,
                                flexDirection: F.Aa.Row,
                                alignItems: F.f.Center
                            }, e, r.createElement(F.Xa, {
                                margin: {
                                    left: 1
                                }
                            }, r.createElement(F.z, {
                                icon: F.tb.Plus,
                                onClick: t.props.openEventCreator
                            }, Object(l.d)("Add Event", "DashboardEventsHeader"))))
                        }, t.deleteEventCollection = function() {
                            t.props.navigatedCollection && t.props.showDeleteModal({
                                onConfirm: t.handleDeleteModalConfirm,
                                onCancel: t.handleDeleteModalCancel,
                                title: Object(l.d)("Delete Series", "DashboardEventsHeader"),
                                body: Object(l.d)("Are you sure you want to delete your series {seriesTitle} and all events within it?", {
                                    seriesTitle: t.props.navigatedCollection.title
                                }, "DashboardEventsHeader"),
                                okText: Object(l.d)("Yes", "DashboardEventsHeader"),
                                cancelText: Object(l.d)("Cancel", "DashboardEventsHeader"),
                                closeModal: t.handleDeleteModalClose
                            })
                        }, t.handleDeleteModalClose = function() {
                            t.props.closeDeleteModal()
                        }, t.handleDeleteModalConfirm = function() {
                            t.props.deleteEventCollection && t.props.navigatedCollection && t.props.deleteEventCollection(t.props.navigatedCollection.id)
                        }, t.handleDeleteModalCancel = function() {
                            T({
                                action: a.DeleteEventNo,
                                id: t.props.navigatedCollection && t.props.navigatedCollection.id
                            })
                        }, t.handleEditEvent = function() {
                            t.props.navigatedCollection && t.props.openCollectionEventEditor(t.props.navigatedCollection.id)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(F.Eb, {
                            className: "dashboard-events-header",
                            alignItems: F.f.Center,
                            borderBottom: !0,
                            background: F.r.Base,
                            display: F.X.Flex,
                            flexDirection: F.Aa.Row,
                            justifyContent: F.Wa.Center,
                            position: F.jb.Relative,
                            zIndex: F.ic.Default,
                            fullWidth: !0
                        }, r.createElement(F.Xa, {
                            margin: {
                                x: 3
                            },
                            className: "dashboard-events-header__content",
                            display: F.X.Flex,
                            justifyContent: F.Wa.Between,
                            fullWidth: !0
                        }, this.renderTitle(), this.renderButtonRow()))
                    }, t
                }(r.Component),
                ae = Object(f.b)("DashboardEventsHeaderComponent", {
                    autoReportInteractive: !0
                })(ne);
            var ie = Object(Y.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded
                    }
                }, function(e) {
                    return Object(c.bindActionCreators)({
                        showDeleteModal: function(e) {
                            var t = i.__rest(e, []);
                            return Object(Q.d)(Z.a, t)
                        },
                        closeDeleteModal: function() {
                            return Object(Q.c)()
                        }
                    }, e)
                })(ae),
                re = n("oJmH"),
                oe = n("eJ65"),
                se = (n("xUty"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.editEventLeaf = function() {
                            t.props.editEventLeaf && t.props.editEventLeaf(t.props.id)
                        }, t.renderInfoBar = function(e) {
                            var n = e;
                            return t.props.channelDisplayName && (n += " • " + t.props.channelDisplayName), t.props.gameDisplayName && (n += " • " + t.props.gameDisplayName), n + " • " + t.props.followingCount + " " + Object(l.d)("Reminders", "DashboardEventsLeafCard")
                        }, t.deleteEventLeaf = function() {
                            t.props.showDeleteModal({
                                onConfirm: t.handleDeleteModalConfirm,
                                onCancel: t.handleDeleteModalCancel,
                                title: Object(l.d)("Delete Event", "DashboardEventsLeafCard"),
                                body: Object(l.d)("Are you sure you want to delete your event {eventTitle}?", {
                                    eventTitle: t.props.title
                                }, "DashboardEventsLeafCard"),
                                okText: Object(l.d)("Yes", "DashboardEventsLeafCard"),
                                cancelText: Object(l.d)("Cancel", "DashboardEventsLeafCard"),
                                closeModal: t.handleDeleteModalClose
                            })
                        }, t.handleDeleteModalClose = function() {
                            t.props.closeDeleteModal()
                        }, t.handleDeleteModalConfirm = function() {
                            t.props.deleteEventLeaf(t.props.id, t.props.channelID, t.props.channelLogin)
                        }, t.handleDeleteModalCancel = function() {
                            T({
                                action: a.DeleteEventNo,
                                id: t.props.id,
                                channel: t.props.channelLogin,
                                channelID: t.props.channelID
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = Object(l.j)(new Date(this.props.startAt), {
                            timeZoneName: "short"
                        });
                        return r.createElement(F.Xa, null, r.createElement(F.Eb, {
                            className: "dashboard-events-leaf-card__row",
                            margin: {
                                y: 1
                            },
                            display: F.X.Flex,
                            flexWrap: F.Ba.NoWrap,
                            alignItems: F.f.Center,
                            background: F.r.Base,
                            elevation: 1,
                            borderRadius: F.x.Small
                        }, r.createElement(F.Xa, {
                            fullWidth: !0,
                            display: F.X.Flex,
                            justifyContent: F.Wa.Between,
                            flexDirection: F.Aa.Row
                        }, r.createElement(F.Xa, {
                            display: F.X.Flex,
                            flexDirection: F.Aa.Row
                        }, r.createElement(F.Xa, {
                            className: "dashboard-events-leaf-card__image",
                            overflow: F.cb.Hidden,
                            flexShrink: 0
                        }, r.createElement(F.I, {
                            size: F.J.Size16,
                            aspect: F.p.Aspect16x9,
                            src: this.props.imageURL,
                            alt: "" !== this.props.imageURL ? this.props.title : ""
                        })), r.createElement(F.Xa, {
                            margin: {
                                left: 1
                            },
                            display: F.X.Flex,
                            flexDirection: F.Aa.Column,
                            justifyContent: F.Wa.Center
                        }, r.createElement(F.Xa, null, this.props.parentTitle), r.createElement(F.Xa, null, r.createElement(F.U, {
                            to: "/events/" + this.props.id
                        }, r.createElement(F.W, {
                            bold: !0,
                            type: F.Vb.H5
                        }, this.props.title))), r.createElement(F.Xa, null, this.renderInfoBar(e)))), r.createElement(F.Xa, {
                            margin: {
                                left: 1,
                                right: 1
                            },
                            display: F.X.Flex,
                            flexShrink: 0,
                            alignItems: F.f.Center
                        }, r.createElement(F.Xa, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(J.a, {
                            id: this.props.id,
                            title: this.props.title,
                            eventLocation: ee.a.DashboardEvents,
                            channelID: this.props.channelID,
                            channelLogin: this.props.channelLogin,
                            balloonDirection: F.v.BottomRight
                        }, r.createElement(F.z, {
                            type: F.F.Hollow,
                            icon: F.tb.Share
                        }, Object(l.d)("Share", "DashboardEventsLeafCard")))), r.createElement(F.Xa, {
                            margin: {
                                right: .5
                            }
                        }, r.createElement(oe.a, null, r.createElement(F.z, {
                            icon: F.tb.More,
                            type: F.F.Text
                        }), r.createElement(F.u, {
                            direction: F.v.BottomRight,
                            tailOffset: 8
                        }, r.createElement(F.Ua, {
                            onClick: this.editEventLeaf
                        }, r.createElement(F.Xa, {
                            className: "dashboard-events-leaf-card__balloon-item",
                            padding: {
                                x: 1,
                                y: 1
                            },
                            display: F.X.Flex,
                            alignItems: F.f.Center
                        }, r.createElement(F.sb, {
                            asset: F.tb.Edit,
                            type: F.ub.Brand
                        }), r.createElement(F.Xa, {
                            margin: {
                                left: 1
                            }
                        }, Object(l.d)("Edit", "DashboardEventsLeafCard")))), r.createElement(F.Ua, {
                            "data-a-target": "delete-button",
                            onClick: this.deleteEventLeaf
                        }, r.createElement(F.Xa, {
                            className: "dashboard-events-leaf-card__balloon-item",
                            padding: {
                                x: 1,
                                y: 1
                            },
                            display: F.X.Flex,
                            alignItems: F.f.Center
                        }, r.createElement(F.sb, {
                            asset: F.tb.Trash,
                            type: F.ub.Brand
                        }), r.createElement(F.Xa, {
                            margin: {
                                left: 1
                            }
                        }, Object(l.d)("Delete", "DashboardEventsLeafCard")))))))))))
                    }, t
                }(r.Component)),
                le = Object(f.b)("DashboardEventsLeafCardComponent", {
                    autoReportInteractive: !0
                })(se);
            var de = Object(Y.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded
                    }
                }, function(e) {
                    return Object(c.bindActionCreators)({
                        showDeleteModal: function(e) {
                            var t = i.__rest(e, []);
                            return Object(Q.d)(Z.a, t)
                        },
                        closeDeleteModal: function() {
                            return Object(Q.c)()
                        }
                    }, e)
                })(le),
                ce = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.eventLeaves.map(function(t) {
                                return r.createElement(de, {
                                    key: t.id,
                                    id: t.id,
                                    title: t.title,
                                    startAt: t.startAt,
                                    gameDisplayName: t.game && t.game.displayName || null,
                                    channelID: t.channel && t.channel.id || "",
                                    channelLogin: t.channel && t.channel.login || "",
                                    channelDisplayName: t.channel && t.channel.displayName || null,
                                    parentTitle: t.parent && t.parent.title || null,
                                    imageURL: t.imageURL,
                                    followingCount: t.stats.followingCount,
                                    editEventLeaf: t.parent ? e.props.editSegmentEventLeaf : e.props.editEventLeaf,
                                    deleteEventLeaf: e.props.deleteEventLeaf
                                })
                            });
                        return r.createElement(F.Xa, {
                            margin: {
                                bottom: 3
                            }
                        }, r.createElement(F.Eb, {
                            display: F.X.Flex,
                            justifyContent: F.Wa.Between,
                            padding: {
                                bottom: .5
                            },
                            borderBottom: !0
                        }, r.createElement(F.W, {
                            color: F.O.Alt2,
                            type: F.Vb.H5
                        }, this.props.dateString)), t)
                    }, t
                }(r.Component),
                ue = Object(f.b)("DashboardEventsLeafGroup", {
                    autoReportInteractive: !0
                })(ce);
            var me, pe = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.eventLeaves && function(e, t, n, a) {
                            var i = {
                                    weekday: "long",
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric"
                                },
                                o = [],
                                s = [];
                            if (!e || 0 === e.length) return o;
                            for (var d = 0, c = e[d]; !c;) {
                                if (++d >= e.length) return o;
                                c = e[d]
                            }
                            for (var u = new Date(c.startAt), m = Object(l.c)(u, i); d < e.length; d++) {
                                var p = e[d];
                                if (p) {
                                    var v = new Date(p.startAt),
                                        g = Object(l.c)(v, i);
                                    g === m ? s.push(p) : (o.push(r.createElement(ue, {
                                        key: m,
                                        dateString: m,
                                        eventLeaves: s,
                                        editEventLeaf: t,
                                        editSegmentEventLeaf: n,
                                        deleteEventLeaf: a
                                    })), m = g, s = [p]), d === e.length - 1 && o.push(r.createElement(ue, {
                                        key: m,
                                        dateString: m,
                                        eventLeaves: s,
                                        editEventLeaf: t,
                                        editSegmentEventLeaf: n,
                                        deleteEventLeaf: a
                                    }))
                                }
                            }
                            return o
                        }(this.props.eventLeaves, this.props.editEventLeaf, this.props.editSegmentEventLeaf, this.props.deleteEventLeaf);
                        return r.createElement(F.Xa, {
                            position: F.jb.Relative
                        }, e, r.createElement(b.a, {
                            enabled: this.props.hasNextPage,
                            loadMore: this.props.loadNextPage
                        }))
                    }, t
                }(r.Component),
                ve = Object(re.compose)(Object(f.b)("DashboardEventsList", {
                    autoReportInteractive: !0
                }))(pe),
                ge = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(r.Fragment, null, r.createElement(F.U, {
                            to: "/" + this.props.channelName + "/dashboard/events/" + this.props.collection.id
                        }, r.createElement(F.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(F.W, {
                            fontSize: F.Ca.Size5
                        }, this.props.collection.title))))
                    }, t
                }(r.Component),
                fe = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.eventCollections.map(function(t) {
                                return r.createElement(ge, {
                                    key: t.id,
                                    channelName: e.props.channelName,
                                    collection: t
                                })
                            }),
                            n = this.props.hasMoreSeries && r.createElement(F.Xa, {
                                display: F.X.Flex,
                                justifyContent: F.Wa.Center
                            }, r.createElement(F.z, {
                                "data-a-target": "load-more",
                                type: F.F.Text,
                                icon: F.tb.GlyphArrDown,
                                onClick: this.props.loadNextSeriesPage
                            }, Object(l.d)("Load More", "DashboardEventsSidenav")));
                        return r.createElement(F.Xa, null, r.createElement(F.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(F.W, {
                            transform: F.Ub.Uppercase,
                            color: F.O.Alt2,
                            type: F.Vb.H5
                        }, Object(l.d)("Series", "DashboardEventsSidenav"))), r.createElement(F.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(F.z, {
                            icon: F.tb.Plus,
                            onClick: this.props.openEventCreator
                        }, Object(l.d)("Add Series", "DashboardEventsSidenav"))), t, n)
                    }, t
                }(r.Component),
                he = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(F.wb, null, r.createElement(F.xb, {
                            name: "events-toggle",
                            label: Object(l.d)("Future Events", "DashboardEventsToggle"),
                            defaultChecked: this.props.filter === h.a.Future,
                            onChange: this.props.handleToggleChange,
                            value: h.a.Future
                        }), r.createElement(F.xb, {
                            name: "events-toggle",
                            label: Object(l.d)("Past Events", "DashboardEventsToggle"),
                            defaultChecked: this.props.filter === h.a.Past,
                            onChange: this.props.handleToggleChange,
                            value: h.a.Past
                        }))
                    }, t
                }(r.Component),
                ke = Object(re.compose)(Object(f.b)("DashboardEventsToggle", {
                    autoReportInteractive: !0
                }))(he);
            n("ind5");
            ! function(e) {
                e.Single = "SINGLE", e.Segment = "SEGMENT", e.Timetable = "TIMETABLE"
            }(me || (me = {}));
            var Ee = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isModalOpen: !1,
                            isSegmentEvent: !1,
                            editableEventID: void 0,
                            modalType: me.Single
                        }, t.openSingleEventCreation = function() {
                            t.setState({
                                isModalOpen: !0,
                                editableEventID: void 0,
                                modalType: me.Single
                            }), t.trackEventModalAction(a.CreateEventOpenModal)
                        }, t.openSegmentEventCreation = function() {
                            t.setState({
                                isModalOpen: !0,
                                isSegmentEvent: !0,
                                editableEventID: void 0,
                                modalType: me.Segment
                            }), t.trackEventModalAction(a.CreateEventOpenModal)
                        }, t.openTimetableEventCreation = function() {
                            t.setState({
                                isModalOpen: !0,
                                editableEventID: void 0,
                                modalType: me.Timetable
                            }), t.trackEventModalAction(a.CreateEventOpenModal)
                        }, t.openSingleEventEditor = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(t) {
                                    return this.setState({
                                        isModalOpen: !0,
                                        editableEventID: e,
                                        modalType: me.Single
                                    }), this.trackEventModalAction(a.EditEventOpenModal, e), [2]
                                })
                            })
                        }, t.openSegmentEventEditor = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(t) {
                                    return this.setState({
                                        isModalOpen: !0,
                                        isSegmentEvent: !0,
                                        editableEventID: e,
                                        modalType: me.Segment
                                    }), this.trackEventModalAction(a.EditEventOpenModal, e), [2]
                                })
                            })
                        }, t.openTimetableEventEditor = function(e) {
                            t.setState({
                                isModalOpen: !0,
                                editableEventID: e,
                                modalType: me.Timetable
                            }), t.trackEventModalAction(a.EditEventOpenModal, e)
                        }, t.closeModal = function() {
                            t.state.editableEventID ? t.trackEventModalAction(a.EditEventCloseModal) : t.trackEventModalAction(a.CreateEventCloseModal), t.setState({
                                isModalOpen: !1,
                                isSegmentEvent: !1,
                                editableEventID: void 0
                            })
                        }, t.trackEventModalAction = function(e, n) {
                            T({
                                action: e,
                                id: n,
                                channel: t.props.user && t.props.user.login,
                                channelID: t.props.user && t.props.user.id
                            })
                        }, t.onTimetableCreated = function(e) {
                            l.p.history.push(i.__assign({}, l.p.history.location, {
                                pathname: l.p.history.location.pathname + "/" + e
                            }))
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e, t = null;
                        if (this.props.loading) t = this.renderLoadingSpinner();
                        else if (this.props.error || !this.props.user) t = this.renderPageError();
                        else {
                            var n = [];
                            if (this.props.eventLeaves && this.props.eventLeaves.edges)
                                for (var a = 0, i = this.props.eventLeaves.edges; a < i.length; a++) {
                                    (p = i[a]) && p.node && !p.node.isDeleted && n.push(p.node)
                                }
                            var o = null,
                                s = Object(l.d)("Add Event", "DashboardEventsLayout");
                            (!this.props.eventLeaves || 0 === n.length && this.props.filter === h.a.Future) && (o = this.props.navigatedCollection ? r.createElement(F.Xa, {
                                display: F.X.Flex,
                                justifyContent: F.Wa.Center
                            }, r.createElement(F.Xa, {
                                display: F.X.Flex,
                                flexDirection: F.Aa.Column,
                                justifyContent: F.Wa.Center,
                                margin: {
                                    top: 5
                                }
                            }, r.createElement(F.S, {
                                className: "dashboard-events-layout__empty-image",
                                src: "https://static-cdn.jtvnw.net/emoticons/v1/86/1.0",
                                srcSet: {
                                    "1x": "https://static-cdn.jtvnw.net/emoticons/v1/86/1.0",
                                    "2x": "https://static-cdn.jtvnw.net/emoticons/v1/86/2.0",
                                    "3x": "https://static-cdn.jtvnw.net/emoticons/v1/86/3.0"
                                },
                                alt: Object(l.d)("No Events in this Series", "DashboardEventsLayout")
                            }), r.createElement(F.Xa, {
                                display: F.X.Flex,
                                textAlign: F.Rb.Center,
                                flexDirection: F.Aa.Column,
                                justifyContent: F.Wa.Center,
                                margin: {
                                    top: 1
                                }
                            }, r.createElement(F.W, {
                                color: F.O.Alt2
                            }, Object(l.d)("Yikes! Empty Series are invisible.", "DashboardEventsLayout"), r.createElement("br", null), Object(l.d)("To make your series visible, add an event.", "DashboardEventsLayout"))), r.createElement(F.Xa, {
                                display: F.X.Flex,
                                justifyContent: F.Wa.Center,
                                margin: {
                                    top: 2
                                }
                            }, r.createElement(F.z, {
                                icon: F.tb.Plus,
                                onClick: this.openSegmentEventCreation
                            }, s)))) : r.createElement(F.Xa, {
                                display: F.X.Flex,
                                justifyContent: F.Wa.Center
                            }, r.createElement(F.Xa, {
                                display: F.X.Flex,
                                flexDirection: F.Aa.Column,
                                justifyContent: F.Wa.Center,
                                margin: {
                                    top: 5
                                }
                            }, r.createElement(F.S, {
                                className: "dashboard-events-layout__empty-image",
                                src: "https://static-cdn.jtvnw.net/emoticons/v1/86/1.0",
                                srcSet: {
                                    "1x": "https://static-cdn.jtvnw.net/emoticons/v1/86/1.0",
                                    "2x": "https://static-cdn.jtvnw.net/emoticons/v1/86/2.0",
                                    "3x": "https://static-cdn.jtvnw.net/emoticons/v1/86/3.0"
                                },
                                alt: Object(l.d)("No Events Created", "DashboardEventsLayout")
                            }), r.createElement(F.Xa, {
                                display: F.X.Flex,
                                textAlign: F.Rb.Center,
                                flexDirection: F.Aa.Column,
                                justifyContent: F.Wa.Center,
                                margin: {
                                    top: 1
                                }
                            }, r.createElement(F.W, {
                                color: F.O.Alt2
                            }, Object(l.d)("Aw, you have no events.", "DashboardEventsLayout"), r.createElement("br", null), Object(l.d)("Let's make some!", "DashboardEventsLayout"))), r.createElement(F.Xa, {
                                display: F.X.Flex,
                                justifyContent: F.Wa.Center,
                                margin: {
                                    top: 2
                                }
                            }, r.createElement(F.z, {
                                icon: F.tb.Plus,
                                onClick: this.openSingleEventCreation
                            }, s)))));
                            var d = null;
                            if (this.props.eventCollections && this.props.eventCollections.edges && this.props.loadNextCollectionsPage) {
                                for (var c = [], u = 0, m = this.props.eventCollections.edges; u < m.length; u++) {
                                    var p;
                                    (p = m[u]) && p.node && !p.node.isDeleted && c.push(p.node)
                                }
                                d = r.createElement(F.Xa, {
                                    display: F.X.Flex,
                                    margin: {
                                        right: 3
                                    },
                                    flexShrink: 0,
                                    className: "dashboard-events-layout__left-col"
                                }, r.createElement(b.c, {
                                    bottomPixelThreshold: 200
                                }, r.createElement(fe, {
                                    channelName: this.props.user && this.props.user.login || "",
                                    eventCollections: c,
                                    hasMoreSeries: this.props.hasNextCollectionsPage || !1,
                                    loadNextSeriesPage: this.props.loadNextCollectionsPage,
                                    openEventCreator: this.openTimetableEventCreation
                                })))
                            }
                            t = r.createElement(F.Xa, {
                                margin: {
                                    x: 3
                                },
                                display: F.X.Flex,
                                flexDirection: F.Aa.Row,
                                flexGrow: 1
                            }, d, r.createElement(F.Xa, {
                                className: "dashboard-events-layout__right-col",
                                flexGrow: 1
                            }, r.createElement(F.Xa, {
                                margin: {
                                    bottom: 2
                                },
                                display: F.X.Flex
                            }, r.createElement(ke, {
                                filter: this.props.filter,
                                handleToggleChange: this.props.handleToggleChange
                            })), r.createElement(ve, {
                                eventLeaves: n,
                                hasNextPage: this.props.hasNextPage,
                                loadNextPage: this.props.loadNextPage,
                                editEventLeaf: this.openSingleEventEditor,
                                editSegmentEventLeaf: this.openSegmentEventEditor,
                                deleteEventLeaf: this.props.deleteEventLeaf
                            }), o))
                        }
                        switch (this.state.modalType) {
                            case me.Timetable:
                                e = r.createElement(H, {
                                    user: this.props.user,
                                    closeModal: this.closeModal,
                                    onCreate: this.onTimetableCreated,
                                    eventID: this.state.editableEventID
                                });
                                break;
                            case me.Segment:
                                e = r.createElement(w, {
                                    user: this.props.user,
                                    closeModal: this.closeModal,
                                    eventID: this.state.editableEventID,
                                    parent: this.props.navigatedCollection
                                });
                                break;
                            default:
                                e = r.createElement(R, {
                                    user: this.props.user,
                                    closeModal: this.closeModal,
                                    eventID: this.state.editableEventID
                                })
                        }
                        return r.createElement(F.Xa, {
                            className: "dashboard-events-layout",
                            fullHeight: !0,
                            display: F.X.Flex,
                            justifyContent: F.Wa.Center,
                            flexDirection: F.Aa.Column
                        }, r.createElement(F.Xa, null, r.createElement(ie, {
                            channelName: this.props.user && this.props.user.login || "",
                            navigatedCollection: this.props.navigatedCollection || null,
                            openEventCreator: this.props.navigatedCollection ? this.openSegmentEventCreation : this.openSingleEventCreation,
                            deleteEventCollection: this.props.deleteEventCollection,
                            openCollectionEventEditor: this.openTimetableEventEditor
                        })), r.createElement(b.b, {
                            className: "dashboard-events-layout__scroll-container",
                            disableDebounce: !0
                        }, r.createElement(F.Xa, {
                            display: F.X.Flex,
                            justifyContent: F.Wa.Center
                        }, r.createElement(F.Xa, {
                            className: "dashboard-events-layout__main-content",
                            margin: {
                                top: 3
                            },
                            flexGrow: 1
                        }, r.createElement(F.Xa, {
                            display: F.X.Flex,
                            flexDirection: F.Aa.Row
                        }, t)))), r.createElement(k, {
                            overlayClassName: "modal__backdrop",
                            className: "modal__content",
                            isOpen: this.state.isModalOpen,
                            ariaHideApp: !1
                        }, e))
                    }, t.prototype.renderPageError = function() {
                        return r.createElement(E.a, {
                            message: Object(l.d)("Error loading data.", "DashboardEventsLayout")
                        })
                    }, t.prototype.renderLoadingSpinner = function() {
                        return r.createElement(F.Xa, {
                            flexGrow: 1
                        }, r.createElement(F.Za, {
                            fillContent: !0
                        }))
                    }, t
                }(r.Component),
                be = Object(f.b)("DashboardEventsLayout", {
                    autoReportInteractive: !0
                })(Ee);

            function Ne(e) {
                var t = new Map;
                return e.filter(function(e) {
                    return !(!e || !e.node || t.has(e.node.id)) && (t.set(e.node.id, !0), !0)
                })
            }

            function ye(e, t) {
                var n = e.slice();
                return n.sort(function(e, n) {
                    return e && e.node || n && n.node ? e && e.node ? n && n.node ? t ? new Date(e.node.startAt).getTime() - new Date(n.node.startAt).getTime() : new Date(n.node.startAt).getTime() - new Date(e.node.startAt).getTime() : -1 : 1 : 0
                }), n
            }
            var De, _e, Te = n("lTCR"),
                Se = n.n(Te),
                Ce = Se()(De || (De = i.__makeTemplateObject(["fragment deletedEventLeaf on EventLeaf {\n  isDeleted\n  __typename\n}"], ["fragment deletedEventLeaf on EventLeaf {\n  isDeleted\n  __typename\n}"]))),
                Ie = n("7N+d"),
                Oe = n("RBja"),
                Le = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.deleteEventLeaf = function(e, n, a) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, , 3]), [4, this.props.deleteEventLeaf(e)];
                                        case 1:
                                            return t.sent(), this.trackDeleteEvent(!0, e, n, a), [3, 3];
                                        case 2:
                                            return t.sent(), this.trackDeleteEvent(!1, e, n, a), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.trackDeleteEvent = function(e, t, n, i) {
                            T({
                                action: a.DeleteEventYes,
                                status: e,
                                id: t,
                                channelID: n,
                                channel: i
                            })
                        }, t.handleToggleChange = function(e) {
                            var n = Object(h.b)(e.currentTarget.value),
                                a = d.parse(t.props.location.search);
                            n !== h.a.Future ? a.filter = n : delete a.filter, t.props.history.replace(i.__assign({}, t.props.location, {
                                search: d.stringify(a)
                            }))
                        }, t.getFilterValue = function() {
                            return Object(h.b)(d.parse(t.props.location.search).filter)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.render = function() {
                        var e = this.props.data.loading,
                            t = !!this.props.data.error || !this.props.data.user,
                            n = !1,
                            a = !1;
                        this.props.data && this.props.data.user && (this.props.data.user.managedEventLeaves && this.props.data.user.managedEventLeaves.pageInfo && (n = this.props.data.user.managedEventLeaves.pageInfo.hasNextPage), this.props.data.user.managedEventCollections && this.props.data.user.managedEventCollections.pageInfo && (a = this.props.data.user.managedEventCollections.pageInfo.hasNextPage));
                        var i = this.getFilterValue();
                        return r.createElement(be, {
                            loading: e,
                            error: t,
                            user: this.props.data.user,
                            filter: i,
                            handleToggleChange: this.handleToggleChange,
                            eventLeaves: this.props.data.user && this.props.data.user.managedEventLeaves,
                            eventCollections: this.props.data.user ? this.props.data.user.managedEventCollections : void 0,
                            hasNextPage: n,
                            hasNextCollectionsPage: a,
                            loadNextPage: this.props.loadNextLeavesPage,
                            loadNextCollectionsPage: this.props.loadNextCollectionsPage,
                            deleteEventLeaf: this.deleteEventLeaf
                        })
                    }, t.prototype.onRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t
                }(r.Component),
                Fe = Object(c.compose)(Object(f.b)("DashboardEventsAllPage", {
                    destination: v.a.DashboardEventsAll
                }), Object(m.a)({
                    location: g.PageviewLocation.DashboardEventsAll
                }), Object(u.a)(Oe, {
                    options: function(e) {
                        var t = Object(h.b)(d.parse(e.location.search).filter);
                        return {
                            variables: {
                                channelLogin: e.match.params.channelName,
                                limit: 10,
                                after: t === h.a.Future ? (new Date).toISOString() : null,
                                before: t === h.a.Past ? (new Date).toISOString() : null,
                                sort: t === h.a.Past ? "DESC" : null,
                                collectionsLimit: 20,
                                isFuture: t === h.a.Future
                            }
                        }
                    },
                    props: function(e) {
                        return i.__assign({}, e, {
                            data: i.__assign({}, e.data, {
                                user: i.__assign({}, e.data.user, {
                                    managedEventLeaves: i.__assign({}, e.data.user && e.data.user.managedEventLeaves || {}, {
                                        edges: e.data.user && e.data.user.managedEventLeaves && e.data.user.managedEventLeaves.edges && ye(e.data.user.managedEventLeaves.edges, e.data.variables.isFuture) || []
                                    })
                                })
                            }),
                            loadNextLeavesPage: function() {
                                if (e.data.user && e.data.user.managedEventLeaves && e.data.user.managedEventLeaves.edges) {
                                    for (var t = "", n = e.data.user.managedEventLeaves.edges.length - 1; n > 0; n--) {
                                        var a = e.data.user.managedEventLeaves.edges[n];
                                        if (a && a.cursor) {
                                            t = a.cursor;
                                            break
                                        }
                                    }
                                    if ("" !== t) return e.data.fetchMore({
                                        query: I,
                                        variables: i.__assign({}, e.data.variables, {
                                            cursor: t
                                        }),
                                        updateQuery: function(e, t) {
                                            var n = t.fetchMoreResult,
                                                a = e.user && e.user.managedEventLeaves && e.user.managedEventLeaves.edges || [];
                                            return n.user && n.user.managedEventLeaves && n.user.managedEventLeaves.edges && (a = Ne(a = a.concat(n.user.managedEventLeaves.edges))), {
                                                user: i.__assign({}, e.user, {
                                                    managedEventLeaves: i.__assign({}, n.user && n.user.managedEventLeaves || {}, {
                                                        edges: a
                                                    })
                                                })
                                            }
                                        }
                                    })
                                }
                            },
                            loadNextCollectionsPage: function() {
                                if (e.data.user && e.data.user.managedEventCollections && e.data.user.managedEventCollections.edges) {
                                    var t = e.data.user.managedEventCollections.edges[Math.max(e.data.user.managedEventCollections.edges.length - 1, 0)],
                                        n = t && t.cursor || "";
                                    return e.data.fetchMore({
                                        query: W,
                                        variables: {
                                            channelLogin: e.data.variables.channelLogin,
                                            collectionsCursor: n,
                                            collectionsLimit: 10
                                        },
                                        updateQuery: function(e, t) {
                                            var n = t.fetchMoreResult,
                                                a = e.user && e.user.managedEventCollections && e.user.managedEventCollections.edges || [];
                                            return n.user && n.user.managedEventCollections && n.user.managedEventCollections.edges && (a = a.concat(n.user.managedEventCollections.edges)), {
                                                user: i.__assign({}, e.user, {
                                                    managedEventCollections: i.__assign({}, n.user && n.user.managedEventCollections || {}, {
                                                        edges: a
                                                    })
                                                })
                                            }
                                        }
                                    })
                                }
                            }
                        })
                    }
                }), Object(u.a)(Ie, {
                    props: function(e) {
                        return {
                            deleteEventLeaf: function(t) {
                                return e.mutate(i.__assign({}, Object(p.a)({
                                    eventID: t
                                }), {
                                    optimisticResponse: {
                                        deleteEventLeaf: {
                                            __typename: "DeleteEventLeafPayload",
                                            event: {
                                                __typename: "EventLeaf",
                                                id: t
                                            }
                                        }
                                    },
                                    update: function(e) {
                                        e.writeFragment({
                                            id: "EventLeaf:" + t,
                                            fragment: Ce,
                                            data: {
                                                isDeleted: !0,
                                                __typename: "EventLeaf"
                                            }
                                        })
                                    }
                                }))
                            }
                        }
                    }
                }))(Le),
                je = Se()(_e || (_e = i.__makeTemplateObject(["fragment deletedEventCollection on EventCollection {\n  isDeleted\n  __typename\n}"], ["fragment deletedEventCollection on EventCollection {\n  isDeleted\n  __typename\n}"]))),
                we = n("4jyH"),
                Ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.deleteEventLeaf = function(e, n, a) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, , 3]), [4, this.props.deleteEventLeaf(e)];
                                        case 1:
                                            return t.sent(), this.trackDeleteEvent(!0, e, n, a), [3, 3];
                                        case 2:
                                            return t.sent(), this.trackDeleteEvent(!1, e, n, a), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.deleteEventCollection = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, , 3]), [4, this.props.deleteEventCollection(e, this.props.match.params.channelName)];
                                        case 1:
                                            return t.sent(), this.trackDeleteEvent(!0, e), this.props.history.push("/" + this.props.match.params.channelName + "/dashboard/events/"), [3, 3];
                                        case 2:
                                            return t.sent(), this.trackDeleteEvent(!1, e), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.trackDeleteEvent = function(e, t, n, i) {
                            T({
                                action: a.DeleteEventYes,
                                status: e,
                                id: t,
                                channelID: n,
                                channel: i
                            })
                        }, t.handleToggleChange = function(e) {
                            var n = Object(h.b)(e.currentTarget.value),
                                a = d.parse(t.props.location.search);
                            n !== h.a.Future ? a.filter = n : delete a.filter, t.props.history.replace(i.__assign({}, t.props.location, {
                                search: d.stringify(a)
                            }))
                        }, t.getFilterValue = function() {
                            return Object(h.b)(d.parse(t.props.location.search).filter)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.render = function() {
                        var e, t = this.props.data.loading,
                            n = !!this.props.data.error || !this.props.data.event,
                            a = !1;
                        this.props.data && this.props.data.event && (e = this.props.data.event, this.props.data.event.managedLeaves && this.props.data.event.managedLeaves.pageInfo && (a = this.props.data.event.managedLeaves.pageInfo.hasNextPage));
                        var i = this.getFilterValue();
                        return r.createElement(be, {
                            loading: t,
                            error: n,
                            user: this.props.data.user,
                            navigatedCollection: e,
                            handleToggleChange: this.handleToggleChange,
                            filter: i,
                            eventLeaves: this.props.data.event && this.props.data.event.managedLeaves,
                            hasNextPage: a,
                            loadNextPage: this.props.loadNextCollectionPage,
                            deleteEventLeaf: this.deleteEventLeaf,
                            deleteEventCollection: this.deleteEventCollection
                        })
                    }, t.prototype.onRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t
                }(r.Component),
                Me = Object(c.compose)(Object(u.a)(O, {
                    options: function(e) {
                        var t = Object(h.b)(d.parse(e.location.search).filter);
                        return {
                            variables: {
                                eventName: e.match.params.eventID,
                                limit: 10,
                                after: t === h.a.Future ? (new Date).toISOString() : null,
                                before: t === h.a.Past ? (new Date).toISOString() : null,
                                isFuture: t === h.a.Future,
                                sort: t === h.a.Past ? "DESC" : null
                            }
                        }
                    },
                    props: function(e) {
                        return i.__assign({}, e, {
                            data: i.__assign({}, e.data, {
                                user: i.__assign({}, e.data.user),
                                event: i.__assign({}, e.data.event, {
                                    managedLeaves: i.__assign({}, e.data.event && e.data.event.managedLeaves || {}, {
                                        edges: e.data.event && e.data.event.managedLeaves && e.data.event.managedLeaves.edges && ye(e.data.event.managedLeaves.edges, e.data.variables.isFuture) || []
                                    })
                                })
                            }),
                            loadNextCollectionPage: function() {
                                if (e.data.event && e.data.event.managedLeaves && e.data.event.managedLeaves.edges) {
                                    for (var t = "", n = e.data.event.managedLeaves.edges.length - 1; n > 0; n--) {
                                        var a = e.data.event.managedLeaves.edges[n];
                                        if (a && a.cursor) {
                                            t = a.cursor;
                                            break
                                        }
                                    }
                                    if ("" !== t) return e.data.fetchMore({
                                        query: O,
                                        variables: i.__assign({}, e.data.variables, {
                                            cursor: t
                                        }),
                                        updateQuery: function(e, t) {
                                            var n = t.fetchMoreResult,
                                                a = e.event && e.event.managedLeaves && e.event.managedLeaves.edges || [];
                                            return n.event && n.event.managedLeaves && n.event.managedLeaves.edges && (a = Ne(a = a.concat(n.event.managedLeaves.edges))), {
                                                user: e.user,
                                                event: i.__assign({}, n.event, {
                                                    managedLeaves: i.__assign({}, n.event && n.event.managedLeaves || {}, {
                                                        edges: a
                                                    })
                                                })
                                            }
                                        }
                                    })
                                }
                            }
                        })
                    }
                }), Object(u.a)(Ie, {
                    props: function(e) {
                        return {
                            deleteEventLeaf: function(t) {
                                return e.mutate(i.__assign({}, Object(p.a)({
                                    eventID: t
                                }), {
                                    optimisticResponse: {
                                        deleteEventLeaf: {
                                            __typename: "DeleteEventLeafPayload",
                                            event: {
                                                __typename: "EventLeaf",
                                                id: t,
                                                isDeleted: !0
                                            }
                                        }
                                    },
                                    update: function(e) {
                                        e.writeFragment({
                                            id: "EventLeaf:" + t,
                                            fragment: Ce,
                                            data: {
                                                isDeleted: !0,
                                                __typename: "EventLeaf"
                                            }
                                        })
                                    }
                                }))
                            }
                        }
                    }
                }), Object(u.a)(we, {
                    props: function(e) {
                        return {
                            deleteEventCollection: function(t, n) {
                                return e.mutate(i.__assign({}, Object(p.a)({
                                    eventID: t
                                }), {
                                    optimisticResponse: {
                                        deleteEventCollection: {
                                            __typename: "DeleteEventCollectionPayload",
                                            event: {
                                                __typename: "EventCollection",
                                                id: t,
                                                isDeleted: !0
                                            }
                                        }
                                    },
                                    update: function(e) {
                                        e.writeFragment({
                                            id: "EventCollection:" + t,
                                            fragment: je,
                                            data: {
                                                isDeleted: !0,
                                                __typename: "EventCollection"
                                            }
                                        });
                                        var a = null;
                                        try {
                                            if ((a = e.readQuery({
                                                    query: I,
                                                    variables: {
                                                        channelLogin: n,
                                                        isFuture: !0
                                                    }
                                                })) && a.user && a.user.managedEventLeaves && a.user.managedEventLeaves.edges)
                                                for (var i = 0, r = a.user.managedEventLeaves.edges; i < r.length; i++) {
                                                    (l = r[i]) && l.node && l.node.parent && l.node.parent.id === t && e.writeFragment({
                                                        id: "EventLeaf:" + l.node.id,
                                                        fragment: Ce,
                                                        data: {
                                                            isDeleted: !0,
                                                            __typename: "EventLeaf"
                                                        }
                                                    })
                                                }
                                        } catch (e) {}
                                        try {
                                            if ((a = e.readQuery({
                                                    query: I,
                                                    variables: {
                                                        channelLogin: n,
                                                        isFuture: !1
                                                    }
                                                })) && a.user && a.user.managedEventLeaves && a.user.managedEventLeaves.edges)
                                                for (var o = 0, s = a.user.managedEventLeaves.edges; o < s.length; o++) {
                                                    var l;
                                                    (l = s[o]) && l.node && l.node.parent && l.node.parent.id === t && e.writeFragment({
                                                        id: "EventLeaf:" + l.node.id,
                                                        fragment: Ce,
                                                        data: {
                                                            isDeleted: !0,
                                                            __typename: "EventLeaf"
                                                        }
                                                    })
                                                }
                                        } catch (e) {}
                                    }
                                }))
                            }
                        }
                    }
                }), Object(f.b)("DashboardEventsCollectionPage", {
                    destination: v.a.DashboardEventsCollection
                }), Object(m.a)({
                    location: g.PageviewLocation.DashboardEventsCollection
                }))(Ae),
                xe = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        l.p.setPageTitle(Object(l.d)("Events", "DashboardEventsRoot"))
                    }, t.prototype.render = function() {
                        return r.createElement(s.a, null, r.createElement(o.a, {
                            exact: !0,
                            path: "/:channelName/dashboard/events/:eventID",
                            component: Me
                        }), r.createElement(o.a, {
                            exact: !0,
                            path: "/:channelName/dashboard/events",
                            component: Fe
                        }))
                    }, t
                }(r.Component);
            n.d(t, "DashboardEventsRoot", function() {
                return xe
            })
        },
        aDUZ: function(e, t, n) {},
        dKHc: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            });
            var a, i, r = n("/7QA");
            ! function(e) {
                e.Description = "description", e.EndTime = "endTime", e.GameID = "gameID", e.GameName = "gameName", e.imageID = "imageID", e.Language = "language", e.StartTime = "startTime", e.Title = "title"
            }(i || (i = {}));
            var o = function() {
                function e(t) {
                    var n = this;
                    this.RequiredFields = [i.Title, i.Description, i.Language, i.StartTime, i.GameID, i.GameName], this.errorsForMissingFields = {}, this.validatorsForFields = {}, this.editsAreValid = function(t) {
                        t && n.updateEventEdits(t);
                        var a = n.RequiredFields.filter(n.findMissingFields);
                        a.forEach(function(t) {
                            n.errorsForMissingFields[t] = n.errorsForMissingFields[t] || [], n.errorsForMissingFields[t].push(Object(r.d)("The {fieldName} field is required", {
                                fieldName: e.FormDisplayName[t]
                            }, "EventModal"))
                        });
                        var i = n.runCustomValidators();
                        return a.length <= 0 && i
                    }, this.errorMessageFor = function(e) {
                        return n.errorsForMissingFields[e] && n.errorsForMissingFields[e].join(", ")
                    }, this.findMissingFields = function(e) {
                        var t = Object.keys(n.eventEdits).indexOf(e) < 0,
                            a = n.eventEdits[e],
                            i = Boolean(!a);
                        return "string" == typeof a && (i = !a.trim().length), t || i
                    }, this.updateEventEdits(t)
                }
                return e.prototype.getFieldErrors = function() {
                    return this.errorsForMissingFields
                }, e.prototype.addValidatorForField = function(e, t) {
                    this.validatorsForFields[t] = e
                }, e.prototype.updateEventEdits = function(e) {
                    this.eventEdits = e, this.errorsForMissingFields = {}
                }, e.prototype.runCustomValidators = function() {
                    var t = this;
                    return Object.keys(this.eventEdits).reduce(function(n, a) {
                        var i = t.validatorsForFields[a],
                            o = t.eventEdits[a];
                        return i && !i(o) ? (t.errorsForMissingFields[a] = t.errorsForMissingFields[a] || [], t.errorsForMissingFields[a].push(Object(r.d)("The {fieldName} field is invalid", {
                            fieldName: e.FormDisplayName[a]
                        }, "EventModal")), !1) : n
                    }, !0)
                }, e.FormDisplayName = ((a = {})[i.Description] = "Description", a[i.EndTime] = "End Time", a[i.GameID] = "Game", a[i.GameName] = "Game", a[i.imageID] = "Image", a[i.Language] = "Language", a[i.StartTime] = "Start Time", a[i.Title] = "Title", a), e
            }()
        },
        dPEW: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.locatedError = function(e, t, n) {
                if (e && Array.isArray(e.path)) return e;
                return new a.GraphQLError(e && e.message, e && e.nodes || t, e && e.source, e && e.positions, n, e)
            };
            var a = n("MafX")
        },
        ePeS: function(e, t, n) {
            "use strict";
            var a;

            function i(e) {
                switch (e) {
                    case "past":
                        return a.Past;
                    case "future":
                    default:
                        return a.Future
                }
            }
            n.d(t, "a", function() {
                    return a
                }), n.d(t, "b", function() {
                    return i
                }),
                function(e) {
                    e.Future = "future", e.Past = "past"
                }(a || (a = {}))
        },
        fQJ0: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "EventModal_UpdateTimetableEvent"
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
                                    value: "UpdateTimetableEventInput"
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
                                value: "updateTimetableEvent"
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
                                        value: "event"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ManagerEventCollection"
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
                    end: 252
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/dashboard/components/events-page/queries/event-collection-fragment.gql"\nmutation EventModal_UpdateTimetableEvent($input: UpdateTimetableEventInput!) {\nupdateTimetableEvent(input: $input) {\nevent {\n...ManagerEventCollection\n}\n}\n}',
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
            }(n("Y0z8").definitions)), e.exports = a
        },
        gT8k: function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("q1tI"),
                o = n("9kXc"),
                s = n("Ue10"),
                l = n("TSYQ"),
                d = n("/7QA"),
                c = n("u5aL"),
                u = n("8/mp"),
                m = n("8Ad5"),
                p = n("fk61"),
                v = (n("V/+G"), function(e) {
                    return r.createElement(s.Xa, {
                        attachTop: !0,
                        attachRight: !0,
                        attachLeft: !0,
                        attachBottom: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        display: s.X.Flex,
                        flexDirection: s.Aa.Column,
                        justifyContent: s.Wa.Center,
                        alignItems: s.f.Center,
                        position: s.jb.Absolute
                    }, r.createElement(s.Xa, {
                        textAlign: s.Rb.Center,
                        flexShrink: 1
                    }, r.createElement(s.sb, {
                        asset: e.icon,
                        width: 46,
                        height: 48,
                        type: s.ub.Alt2
                    })), r.createElement(s.Xa, {
                        margin: {
                            top: 1
                        },
                        textAlign: s.Rb.Center
                    }, r.createElement(s.W, {
                        type: s.Vb.H4,
                        color: s.O.Alt2
                    }, e.titleText)), r.createElement(s.Xa, {
                        textAlign: s.Rb.Center
                    }, r.createElement(s.W, {
                        type: s.Vb.P,
                        color: s.O.Alt2
                    }, e.subText)))
                });
            ! function(e) {
                e[e.Confirm = 1] = "Confirm", e[e.Dismiss = 2] = "Dismiss", e[e.Up = 3] = "Up", e[e.Down = 4] = "Down"
            }(a || (a = {}));
            var g = {};
            g[m.a.Esc] = a.Dismiss, g[m.a.Enter] = a.Confirm, g[m.a.Tab] = a.Confirm, g[m.a.Up] = a.Up, g[m.a.Down] = a.Down;
            var f = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onFocus = function() {
                            n.props.searchTerm && n.setState({
                                isOpen: !0
                            })
                        }, n.onClickOut = function() {
                            n.state.isOpen && n.handleInteraction(a.Dismiss)
                        }, n.onKeyDown = function(e) {
                            var t = g[e.keyCode];
                            t && n.handleInteraction(t)
                        }, n.handleInteraction = function(e) {
                            switch (e) {
                                case a.Dismiss:
                                    "" === n.props.searchTerm ? n.props.selectEmptyGame() : n.props.initialGameTitle ? n.props.selectGameByName(n.props.initialGameTitle) : n.props.gameResults && n.props.gameResults.length > 0 && n.props.selectGame(n.state.highlightedGameIndex), n.setState({
                                        isOpen: !1
                                    });
                                    break;
                                case a.Confirm:
                                    n.props.searchTerm && n.props.gameResults ? n.props.selectGame(n.state.highlightedGameIndex) : n.props.selectEmptyGame(), n.setState({
                                        isOpen: !1
                                    });
                                    break;
                                case a.Up:
                                    if (!n.props.gameResults) return;
                                    n.setState({
                                        highlightedGameIndex: Math.max(0, n.state.highlightedGameIndex - 1)
                                    });
                                    break;
                                case a.Down:
                                    if (!n.props.gameResults) return;
                                    n.setState({
                                        highlightedGameIndex: Math.min(n.props.gameResults.length - 1, n.state.highlightedGameIndex + 1)
                                    })
                            }
                        }, n.onChange = function(e) {
                            var t = e.target.value;
                            "" === t && n.props.selectEmptyGame(), n.setState({
                                isOpen: !!t,
                                highlightedGameIndex: 0
                            }, function() {
                                n.props.startNewSearch(t)
                            })
                        }, n.onClickGame = function(e) {
                            var t = parseInt(e.currentTarget.getAttribute("data-game-index"), 10);
                            n.props.selectGame(t), n.setState({
                                isOpen: !1
                            })
                        }, n.state = n.state = {
                            isOpen: !1,
                            highlightedGameIndex: 0
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement("div", {
                            className: "game-selector__search-container",
                            "data-click-out-id": "game-selector-search-balloon",
                            "data-a-target": "game-field",
                            onKeyDown: this.onKeyDown
                        }, r.createElement(c.a, {
                            onClickOut: this.onClickOut
                        }, r.createElement(s.Ra, {
                            key: this.props.initialGameTitle + "-" + this.props.redrawKey,
                            type: s.Ta.Text,
                            icon: s.tb.NavGames,
                            name: "game",
                            onChange: this.onChange,
                            onFocus: this.onFocus,
                            defaultValue: this.props.searchTerm
                        }), r.createElement(s.u, {
                            direction: s.v.Bottom,
                            noTail: !0,
                            size: s.w.Large,
                            show: this.state.isOpen,
                            offsetY: "5px",
                            "data-a-target": "game-selector-search-balloon"
                        }, this.renderSearchResult())))
                    }, t.prototype.renderSearchResult = function() {
                        var e = l("game-selector__search-panel", {
                                "game-selector__search-panel--closed": !this.state.isOpen
                            }),
                            t = null;
                        return 0 === this.props.searchTerm.length || (t = this.props.gameResults ? this.props.gameResults.length > 0 ? this.renderGameResults(this.props.gameResults, this.state.highlightedGameIndex) : this.props.isSearchPending ? r.createElement(s.Za, {
                            fillContent: !0
                        }) : r.createElement(v, {
                            icon: s.tb.SearchNoResults,
                            titleText: Object(d.d)("No results found", "EventGameSelector"),
                            subText: Object(d.d)("They're probably in another castle", "EventGameSelector")
                        }) : r.createElement(v, {
                            icon: s.tb.DeadGlitch,
                            titleText: Object(d.d)("Search is not available at this time", "EventGameSelector"),
                            subText: Object(d.d)("Please try again later", "EventGameSelector")
                        })), r.createElement("div", {
                            className: e,
                            tabIndex: 0
                        }, r.createElement(s.Eb, {
                            attachTop: !0,
                            attachRight: !0,
                            attachLeft: !0,
                            attachBottom: !0,
                            background: s.r.Base,
                            position: s.jb.Absolute,
                            overflow: s.cb.Hidden,
                            display: s.X.Block
                        }, r.createElement(u.b, {
                            suppressScrollX: !0,
                            "data-a-target": "search-scroller"
                        }, r.createElement(s.Xa, {
                            margin: {
                                top: .5,
                                bottom: .5
                            }
                        }, t, r.createElement(u.a, {
                            enabled: this.state.isOpen,
                            loadMore: this.props.triggerLoadMore,
                            pixelThreshold: 50
                        })))))
                    }, t.prototype.renderGameResults = function(e, t) {
                        var n = this;
                        return e.map(function(e, a, i) {
                            var o = i[t] === i[a];
                            return r.createElement(p.a, {
                                id: "game_" + e.title,
                                key: "game_" + e.title,
                                imageAlt: e.thumbnailAltText,
                                onClick: n.onClickGame,
                                title: e.title ? e.title : "",
                                hover: o,
                                "data-game-highlighted": o,
                                "data-game-index": a
                            })
                        })
                    }, t
                }(r.Component),
                h = n("H/lO"),
                k = n("NZDK"),
                E = 10,
                b = function() {
                    return function() {
                        var e = this;
                        this.searchCode = function(t, n) {
                            return i.__awaiter(e, void 0, Promise, function() {
                                var e;
                                return i.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 2, , 3]), [4, this.searchClient.queryForType(h.a.Games, t, t, {
                                                hitsPerPage: E,
                                                page: n
                                            })];
                                        case 1:
                                            return [2, a.sent()];
                                        case 2:
                                            throw e = a.sent(), d.k.error(e, "Algolia type results search failed"), e;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, this.searchClient = new k.a({
                            appId: d.a.algoliaApplicationID,
                            apiKey: d.a.algoliaAPIKey,
                            apolloClient: d.p.apollo.client,
                            logger: d.k,
                            config: d.a,
                            stats: d.p.stats
                        })
                    }
                }(),
                N = [],
                y = {
                    objectID: "",
                    name: ""
                },
                D = function(e) {
                    return {
                        objectID: "",
                        name: e
                    }
                },
                _ = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.startNewSearch = function(e) {
                            n.setState({
                                isSearchPending: !0,
                                searchTerm: e,
                                nextAlgoliaPage: 0
                            }, n.triggerLoadMore)
                        }, n.triggerLoadMore = function() {
                            return n.searchClient.searchCode(n.state.searchTerm, n.state.nextAlgoliaPage).then(function(e) {
                                n.resolveLoadMore(e)
                            })
                        }, n.resolveLoadMore = function(e) {
                            if (!e || e.id === n.state.searchTerm) {
                                var t = void 0;
                                if (e) {
                                    var a = void 0;
                                    n.state.gameResults && (a = {
                                        totalHits: n.state.gameResults.length,
                                        results: n.state.gameResults
                                    });
                                    var i = Object(o.b)({
                                        searchResults: e,
                                        append: n.state.nextAlgoliaPage > 0,
                                        currentGameResults: a
                                    }).currentGameResults;
                                    t = i ? i.results : N
                                }
                                n.setState({
                                    gameResults: t,
                                    isSearchPending: !1,
                                    nextAlgoliaPage: n.state.nextAlgoliaPage + 1
                                })
                            }
                        }, n.selectGame = function(e) {
                            if (n.state.gameResults && n.state.gameResults.length && n.state.gameResults[e] && n.state.gameResults[e].title) {
                                var t = n.state.gameResults[e];
                                if (t.title) {
                                    var a = {
                                        objectID: t.id,
                                        name: t.title
                                    };
                                    n.setSelectedGameState(a)
                                } else n.selectEmptyGame()
                            } else n.selectEmptyGame()
                        }, n.selectGameByName = function(e) {
                            n.setSelectedGameState(D(e), !1)
                        }, n.selectEmptyGame = function() {
                            n.setSelectedGameState(y)
                        }, n.setSelectedGameState = function(e, t) {
                            void 0 === t && (t = !0), n.setState({
                                selectedGame: e,
                                searchTerm: e.name,
                                redrawKey: Math.random()
                            }, function() {
                                t && n.fireChangeGame()
                            })
                        }, n.fireChangeGame = function() {
                            n.props.onChange(n.state.selectedGame)
                        }, n.searchClient = new b, n.state = n.state = {
                            searchTerm: t.currentGameTitle,
                            gameResults: N,
                            isSearchPending: !1,
                            nextAlgoliaPage: 0,
                            selectedGame: D(t.currentGameTitle),
                            redrawKey: Math.random()
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.startNewSearch(this.props.currentGameTitle)
                    }, t.prototype.render = function() {
                        return this.props.disabled ? r.createElement("div", {
                            className: "game-selector__search-container"
                        }, r.createElement(s.Ra, {
                            value: this.props.currentGameTitle,
                            type: s.Ta.Text,
                            icon: s.tb.NavGames,
                            disabled: !0
                        })) : r.createElement(f, {
                            redrawKey: this.state.redrawKey,
                            searchTerm: this.state.searchTerm,
                            initialGameTitle: this.state.selectedGame.name,
                            gameResults: this.state.gameResults,
                            isSearchPending: this.state.isSearchPending,
                            startNewSearch: this.startNewSearch,
                            selectGame: this.selectGame,
                            selectEmptyGame: this.selectEmptyGame,
                            selectGameByName: this.selectGameByName,
                            triggerLoadMore: this.triggerLoadMore
                        })
                    }, t
                }(r.Component);
            n.d(t, !1, function() {
                return N
            }), n.d(t, !1, function() {
                return y
            }), n.d(t, "a", function() {
                return _
            })
        },
        glbf: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.syntaxError = function(e, t, n) {
                return new a.GraphQLError("Syntax Error: " + n, void 0, e, [t])
            };
            var a = n("MafX")
        },
        ind5: function(e, t, n) {},
        jeZI: function(e, t, n) {},
        k2fV: function(e, t, n) {
            "use strict";

            function a(e) {
                for (var t = 0; t < e.length && (" " === e[t] || "\t" === e[t]);) t++;
                return t
            }

            function i(e) {
                return a(e) === e.length
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                for (var t = e.split(/\r\n|[\n\r]/g), n = null, r = 1; r < t.length; r++) {
                    var o = t[r],
                        s = a(o);
                    if (s < o.length && (null === n || s < n) && 0 === (n = s)) break
                }
                if (n)
                    for (var l = 1; l < t.length; l++) t[l] = t[l].slice(n);
                for (; t.length > 0 && i(t[0]);) t.shift();
                for (; t.length > 0 && i(t[t.length - 1]);) t.pop();
                return t.join("\n")
            }
        },
        k84H: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Source = void 0;
            var a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n("Db/j"));
            t.Source = function e(t, n, i) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.body = t, this.name = n || "GraphQL request", this.locationOffset = i || {
                    line: 1,
                    column: 1
                }, this.locationOffset.line > 0 || (0, a.default)(0, "line in locationOffset is 1-indexed and must be positive"), this.locationOffset.column > 0 || (0, a.default)(0, "column in locationOffset is 1-indexed and must be positive")
            }
        },
        lTCR: function(e, t, n) {
            var a = n("DEM2").parse;

            function i(e) {
                return e.replace(/[\s,]+/g, " ").trim()
            }
            var r = {},
                o = {};

            function s(e) {
                return i(e.source.body.substring(e.start, e.end))
            }
            var l = !0;

            function d(e) {
                var t = i(e);
                if (r[t]) return r[t];
                var n = a(e);
                if (!n || "Document" !== n.kind) throw new Error("Not a valid GraphQL document.");
                return n = function e(t, n) {
                    var a = Object.prototype.toString.call(t);
                    if ("[object Array]" === a) return t.map(function(t) {
                        return e(t, n)
                    });
                    if ("[object Object]" !== a) throw new Error("Unexpected input.");
                    n && t.loc && delete t.loc, t.loc && (delete t.loc.startToken, delete t.loc.endToken);
                    var i, r, o, s = Object.keys(t);
                    for (i in s) s.hasOwnProperty(i) && (r = t[s[i]], "[object Object]" !== (o = Object.prototype.toString.call(r)) && "[object Array]" !== o || (t[s[i]] = e(r, !0)));
                    return t
                }(n = function(e) {
                    for (var t = {}, n = [], a = 0; a < e.definitions.length; a++) {
                        var i = e.definitions[a];
                        if ("FragmentDefinition" === i.kind) {
                            var r = i.name.value,
                                d = s(i.loc);
                            o.hasOwnProperty(r) && !o[r][d] ? (l && console.warn("Warning: fragment with name " + r + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"), o[r][d] = !0) : o.hasOwnProperty(r) || (o[r] = {}, o[r][d] = !0), t[d] || (t[d] = !0, n.push(i))
                        } else n.push(i)
                    }
                    return e.definitions = n, e
                }(n), !1), r[t] = n, n
            }

            function c() {
                for (var e = Array.prototype.slice.call(arguments), t = e[0], n = "string" == typeof t ? t : t[0], a = 1; a < e.length; a++) e[a] && e[a].kind && "Document" === e[a].kind ? n += e[a].loc.source.body : n += e[a], n += t[a];
                return d(n)
            }
            c.default = c, c.resetCaches = function() {
                r = {}, o = {}
            }, c.disableFragmentWarnings = function() {
                l = !1
            }, e.exports = c
        },
        lvY1: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "EventModal_UpdateSegmentEvent"
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
                                    value: "UpdateSegmentEventInput"
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
                                value: "updateSegmentEvent"
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
                                        value: "event"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ManagerEventLeaf"
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
                    end: 234
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/dashboard/components/events-page/queries/event-leaf-fragment.gql"\nmutation EventModal_UpdateSegmentEvent($input: UpdateSegmentEventInput!) {\nupdateSegmentEvent(input: $input) {\nevent {\n...ManagerEventLeaf\n}\n}\n}',
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
            }(n("293+").definitions)), e.exports = a
        },
        mvg9: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DashboardEvents_ManagedCollections"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelLogin"
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
                                value: "collectionsLimit"
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
                                value: "collectionsCursor"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Cursor"
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
                                        value: "channelLogin"
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
                                        value: "managedEventCollections"
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
                                                value: "collectionsLimit"
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
                                                value: "collectionsCursor"
                                            }
                                        }
                                    }],
                                    directives: [{
                                        kind: "Directive",
                                        name: {
                                            kind: "Name",
                                            value: "connection"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "key"
                                            },
                                            value: {
                                                kind: "StringValue",
                                                value: "managed-event-collections",
                                                block: !1
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "filter"
                                            },
                                            value: {
                                                kind: "ListValue",
                                                values: [{
                                                    kind: "StringValue",
                                                    value: "channelLogin",
                                                    block: !1
                                                }]
                                            }
                                        }]
                                    }],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ManagedEventCollections"
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
                    end: 428
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/dashboard/components/events-page/models/managed-collections-fragment.gql"\nquery DashboardEvents_ManagedCollections($channelLogin: String! $collectionsLimit: Int $collectionsCursor: Cursor) {\nuser(login: $channelLogin) {\nid\nmanagedEventCollections(first: $collectionsLimit after: $collectionsCursor) @connection(key: "managed-event-collections" filter: ["channelLogin"]) {\n...ManagedEventCollections\n}\n}\n}',
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
            }(n("zs9K").definitions)), e.exports = a
        },
        pM79: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "EventModal_GetEventCollection"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "eventID"
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
                                value: "event"
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
                                        value: "eventID"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "ManagerEventCollection"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 200
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/dashboard/components/events-page/queries/event-collection-fragment.gql"\nquery EventModal_GetEventCollection($eventID: ID!) {\nevent(id: $eventID) {\n...ManagerEventCollection\n}\n}',
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
            }(n("Y0z8").definitions)), e.exports = a
        },
        r62z: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "d", function() {
                return u
            });
            var a = n("+GjP"),
                i = "https://www.facebook.com/sharer/sharer.php",
                r = "https://www.twitter.com/share",
                o = "https://www.reddit.com/submit",
                s = "https://vk.com/share.php";

            function l(e) {
                return Object(a.e)(i, {
                    u: e
                })
            }

            function d(e, t) {
                return Object(a.e)(r, {
                    url: e,
                    text: t
                })
            }

            function c(e, t) {
                return Object(a.e)(o, {
                    url: e,
                    title: t
                })
            }

            function u(e) {
                return Object(a.e)(s, {
                    url: e
                })
            }
        },
        sL9O: function(e, t, n) {},
        sqZK: function(e, t, n) {},
        "ug+5": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "d", function() {
                return l
            });
            var a, i, r = n("/7QA"),
                o = n("2xye");

            function s(e) {
                var t = {
                    share_medium: e.shareMedium,
                    event_id: e.eventID,
                    channel: e.channelLogin,
                    channel_id: e.channelID,
                    location: e.location
                };
                return r.p.tracking.track(o.SpadeEventType.EventShare, t)
            }

            function l(e) {
                var t = {
                    action: e.action,
                    channel: e.channelLogin,
                    channel_id: e.channelID,
                    event_id: e.eventID,
                    location: e.location
                };
                return r.p.tracking.track(o.SpadeEventType.EventFollowing, t)
            }! function(e) {
                e.ChannelEvents = "channel_events", e.DashboardEvents = "dashboard_events", e.EventDetails = "event_details", e.EventManagment = "event_managment", e.EventSidebar = "event_sidebar"
            }(a || (a = {})),
            function(e) {
                e.RemindMeOpen = "remind_me_open_modal", e.EmailReminderOn = "email_reminder_on", e.EmailReminderOff = "email_reminder_off"
            }(i || (i = {}))
        },
        ulzF: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            });
            var a = function(e) {
                    return new Promise(function(t, n) {
                        var a = new FileReader;
                        a.onload = function() {
                            var e = i(a.result);
                            t(e)
                        }, a.onerror = function(e) {
                            n(e)
                        }, a.readAsDataURL(e)
                    })
                },
                i = function(e) {
                    return e.replace(/data:image.*;base64,/, "")
                }
        },
        vvR6: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            };
            t.formatError = function(e) {
                return e || (0, i.default)(0, "Received null or undefined error."), a({}, e.extensions, {
                    message: e.message || "An unknown error occurred.",
                    locations: e.locations,
                    path: e.path
                })
            };
            var i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n("Db/j"))
        },
        wbMx: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return c
            });
            var a, i = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                s = n("Jxh/"),
                l = n("r62z"),
                d = n("Ue10");
            n("jeZI");
            ! function(e) {
                e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput", e[e.Download = 6] = "Download"
            }(a || (a = {}));
            var c = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderLink = function() {
                        var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                        return n.props.type === a.Download ? r.createElement("a", i.__assign({
                            href: n.props.url,
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(d.jc)(n.props), {
                            download: n.props.text
                        }), n.renderIcon()) : n.isLink() ? r.createElement("a", i.__assign({
                            href: n.getLinkTarget(),
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(d.jc)(n.props)), n.renderIcon()) : r.createElement("button", i.__assign({
                            onClick: n.copyPageUrl,
                            onMouseLeave: n.clearIsCopiedStatus,
                            className: e
                        }, Object(d.jc)(n.props)), n.renderIcon())
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
                        return r.createElement(d.Xa, {
                            className: "social-button__icon " + n.addSocialClassModifier("social-button__icon"),
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            justifyContent: d.Wa.Center
                        }, r.createElement(d.sb, {
                            asset: e
                        }))
                    }, n.isLink = function() {
                        return n.props.type !== a.Copy
                    }, n.getTooltipFromType = function() {
                        switch (n.props.type) {
                            case a.Twitter:
                                return "Twitter";
                            case a.Reddit:
                                return "Reddit";
                            case a.Facebook:
                                return "Facebook";
                            case a.VKontakte:
                                return "VKontakte";
                            case a.Download:
                                return Object(o.d)("Download", "SocialButton");
                            case a.Copy:
                                return n.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                            default:
                                return ""
                        }
                    }, n.getAssetFromType = function() {
                        switch (n.props.type) {
                            case a.Twitter:
                                return d.tb.Twitter;
                            case a.Facebook:
                                return d.tb.Facebook;
                            case a.VKontakte:
                                return d.tb.VKontakte;
                            case a.Reddit:
                                return d.tb.Reddit;
                            case a.Download:
                                return d.tb.Download;
                            case a.Copy:
                            default:
                                return d.tb.Copy
                        }
                    }, n.addSocialClassModifier = function(e) {
                        switch (n.props.type) {
                            case a.Twitter:
                                return e + "--twitter";
                            case a.Reddit:
                                return e + "--reddit";
                            case a.Facebook:
                                return e + "--facebook";
                            case a.VKontakte:
                                return e + "--vkontakte";
                            case a.Download:
                                return e + "--download";
                            case a.Copy:
                                return e + "--copy";
                            default:
                                return ""
                        }
                    }, n.getLinkTarget = function() {
                        var e = n.props,
                            t = e.text,
                            i = e.type,
                            r = n.getUrl(),
                            o = t || "";
                        switch (i) {
                            case a.Reddit:
                                return Object(l.b)(r, o);
                            case a.VKontakte:
                                return Object(l.d)(r);
                            case a.Facebook:
                                return Object(l.a)(r);
                            case a.Twitter:
                                return Object(l.c)(r, o);
                            default:
                                return ""
                        }
                    }, n.state = {
                        isCopied: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(d.Xa, {
                        className: "social-button"
                    }, r.createElement(d.Yb, {
                        label: this.getTooltipFromType(),
                        direction: d.ac.Bottom
                    }, this.renderLink()))
                }, t
            }(r.Component)
        },
        wimG: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TokenKind = void 0, t.createLexer = function(e, t) {
                var n = new L(s, 0, 0, 0, 0, null);
                return {
                    source: e,
                    options: t,
                    lastToken: n,
                    token: n,
                    line: 1,
                    lineStart: 0,
                    advance: r,
                    lookahead: o
                }
            }, t.getTokenDesc = function(e) {
                var t = e.value;
                return t ? e.kind + ' "' + t + '"' : e.kind
            };
            var a = n("PUII"),
                i = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n("k2fV"));

            function r() {
                return this.lastToken = this.token, this.token = this.lookahead()
            }

            function o() {
                var e = this.token;
                if (e.kind !== l)
                    do {
                        e = e.next || (e.next = j(this, e))
                    } while (e.kind === C);
                return e
            }
            var s = "<SOF>",
                l = "<EOF>",
                d = "!",
                c = "$",
                u = "(",
                m = ")",
                p = "...",
                v = ":",
                g = "=",
                f = "@",
                h = "[",
                k = "]",
                E = "{",
                b = "|",
                N = "}",
                y = "Name",
                D = "Int",
                _ = "Float",
                T = "String",
                S = "BlockString",
                C = "Comment";
            t.TokenKind = {
                SOF: s,
                EOF: l,
                BANG: d,
                DOLLAR: c,
                PAREN_L: u,
                PAREN_R: m,
                SPREAD: p,
                COLON: v,
                EQUALS: g,
                AT: f,
                BRACKET_L: h,
                BRACKET_R: k,
                BRACE_L: E,
                PIPE: b,
                BRACE_R: N,
                NAME: y,
                INT: D,
                FLOAT: _,
                STRING: T,
                BLOCK_STRING: S,
                COMMENT: C
            };
            var I = String.prototype.charCodeAt,
                O = String.prototype.slice;

            function L(e, t, n, a, i, r, o) {
                this.kind = e, this.start = t, this.end = n, this.line = a, this.column = i, this.value = o, this.prev = r, this.next = null
            }

            function F(e) {
                return isNaN(e) ? l : e < 127 ? JSON.stringify(String.fromCharCode(e)) : '"\\u' + ("00" + e.toString(16).toUpperCase()).slice(-4) + '"'
            }

            function j(e, t) {
                var n = e.source,
                    r = n.body,
                    o = r.length,
                    s = function(e, t, n) {
                        var a = e.length,
                            i = t;
                        for (; i < a;) {
                            var r = I.call(e, i);
                            if (9 === r || 32 === r || 44 === r || 65279 === r) ++i;
                            else if (10 === r) ++i, ++n.line, n.lineStart = i;
                            else {
                                if (13 !== r) break;
                                10 === I.call(e, i + 1) ? i += 2 : ++i, ++n.line, n.lineStart = i
                            }
                        }
                        return i
                    }(r, t.end, e),
                    j = e.line,
                    M = 1 + s - e.lineStart;
                if (s >= o) return new L(l, o, o, j, M, t);
                var x = I.call(r, s);
                if (x < 32 && 9 !== x && 10 !== x && 13 !== x) throw (0, a.syntaxError)(n, s, "Cannot contain the invalid character " + F(x) + ".");
                switch (x) {
                    case 33:
                        return new L(d, s, s + 1, j, M, t);
                    case 35:
                        return function(e, t, n, a, i) {
                            var r = e.body,
                                o = void 0,
                                s = t;
                            do {
                                o = I.call(r, ++s)
                            } while (null !== o && (o > 31 || 9 === o));
                            return new L(C, t, s, n, a, i, O.call(r, t + 1, s))
                        }(n, s, j, M, t);
                    case 36:
                        return new L(c, s, s + 1, j, M, t);
                    case 40:
                        return new L(u, s, s + 1, j, M, t);
                    case 41:
                        return new L(m, s, s + 1, j, M, t);
                    case 46:
                        if (46 === I.call(r, s + 1) && 46 === I.call(r, s + 2)) return new L(p, s, s + 3, j, M, t);
                        break;
                    case 58:
                        return new L(v, s, s + 1, j, M, t);
                    case 61:
                        return new L(g, s, s + 1, j, M, t);
                    case 64:
                        return new L(f, s, s + 1, j, M, t);
                    case 91:
                        return new L(h, s, s + 1, j, M, t);
                    case 93:
                        return new L(k, s, s + 1, j, M, t);
                    case 123:
                        return new L(E, s, s + 1, j, M, t);
                    case 124:
                        return new L(b, s, s + 1, j, M, t);
                    case 125:
                        return new L(N, s, s + 1, j, M, t);
                    case 65:
                    case 66:
                    case 67:
                    case 68:
                    case 69:
                    case 70:
                    case 71:
                    case 72:
                    case 73:
                    case 74:
                    case 75:
                    case 76:
                    case 77:
                    case 78:
                    case 79:
                    case 80:
                    case 81:
                    case 82:
                    case 83:
                    case 84:
                    case 85:
                    case 86:
                    case 87:
                    case 88:
                    case 89:
                    case 90:
                    case 95:
                    case 97:
                    case 98:
                    case 99:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 104:
                    case 105:
                    case 106:
                    case 107:
                    case 108:
                    case 109:
                    case 110:
                    case 111:
                    case 112:
                    case 113:
                    case 114:
                    case 115:
                    case 116:
                    case 117:
                    case 118:
                    case 119:
                    case 120:
                    case 121:
                    case 122:
                        return function(e, t, n, a, i) {
                            var r = e.body,
                                o = r.length,
                                s = t + 1,
                                l = 0;
                            for (; s !== o && null !== (l = I.call(r, s)) && (95 === l || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122);) ++s;
                            return new L(y, t, s, n, a, i, O.call(r, t, s))
                        }(n, s, j, M, t);
                    case 45:
                    case 48:
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                        return function(e, t, n, i, r, o) {
                            var s = e.body,
                                l = n,
                                d = t,
                                c = !1;
                            45 === l && (l = I.call(s, ++d));
                            if (48 === l) {
                                if ((l = I.call(s, ++d)) >= 48 && l <= 57) throw (0, a.syntaxError)(e, d, "Invalid number, unexpected digit after 0: " + F(l) + ".")
                            } else d = w(e, d, l), l = I.call(s, d);
                            46 === l && (c = !0, l = I.call(s, ++d), d = w(e, d, l), l = I.call(s, d));
                            69 !== l && 101 !== l || (c = !0, 43 !== (l = I.call(s, ++d)) && 45 !== l || (l = I.call(s, ++d)), d = w(e, d, l));
                            return new L(c ? _ : D, t, d, i, r, o, O.call(s, t, d))
                        }(n, s, x, j, M, t);
                    case 34:
                        return 34 === I.call(r, s + 1) && 34 === I.call(r, s + 2) ? function(e, t, n, r, o) {
                            var s = e.body,
                                l = t + 3,
                                d = l,
                                c = 0,
                                u = "";
                            for (; l < s.length && null !== (c = I.call(s, l));) {
                                if (34 === c && 34 === I.call(s, l + 1) && 34 === I.call(s, l + 2)) return u += O.call(s, d, l), new L(S, t, l + 3, n, r, o, (0, i.default)(u));
                                if (c < 32 && 9 !== c && 10 !== c && 13 !== c) throw (0, a.syntaxError)(e, l, "Invalid character within String: " + F(c) + ".");
                                92 === c && 34 === I.call(s, l + 1) && 34 === I.call(s, l + 2) && 34 === I.call(s, l + 3) ? (u += O.call(s, d, l) + '"""', d = l += 4) : ++l
                            }
                            throw (0, a.syntaxError)(e, l, "Unterminated string.")
                        }(n, s, j, M, t) : function(e, t, n, i, r) {
                            var o = e.body,
                                s = t + 1,
                                l = s,
                                d = 0,
                                c = "";
                            for (; s < o.length && null !== (d = I.call(o, s)) && 10 !== d && 13 !== d;) {
                                if (34 === d) return c += O.call(o, l, s), new L(T, t, s + 1, n, i, r, c);
                                if (d < 32 && 9 !== d) throw (0, a.syntaxError)(e, s, "Invalid character within String: " + F(d) + ".");
                                if (++s, 92 === d) {
                                    switch (c += O.call(o, l, s - 1), d = I.call(o, s)) {
                                        case 34:
                                            c += '"';
                                            break;
                                        case 47:
                                            c += "/";
                                            break;
                                        case 92:
                                            c += "\\";
                                            break;
                                        case 98:
                                            c += "\b";
                                            break;
                                        case 102:
                                            c += "\f";
                                            break;
                                        case 110:
                                            c += "\n";
                                            break;
                                        case 114:
                                            c += "\r";
                                            break;
                                        case 116:
                                            c += "\t";
                                            break;
                                        case 117:
                                            var u = A(I.call(o, s + 1), I.call(o, s + 2), I.call(o, s + 3), I.call(o, s + 4));
                                            if (u < 0) throw (0, a.syntaxError)(e, s, "Invalid character escape sequence: \\u" + o.slice(s + 1, s + 5) + ".");
                                            c += String.fromCharCode(u), s += 4;
                                            break;
                                        default:
                                            throw (0, a.syntaxError)(e, s, "Invalid character escape sequence: \\" + String.fromCharCode(d) + ".")
                                    }
                                    l = ++s
                                }
                            }
                            throw (0, a.syntaxError)(e, s, "Unterminated string.")
                        }(n, s, j, M, t)
                }
                throw (0, a.syntaxError)(n, s, function(e) {
                    if (39 === e) return "Unexpected single quote character ('), did you mean to use a double quote (\")?";
                    return "Cannot parse the unexpected character " + F(e) + "."
                }(x))
            }

            function w(e, t, n) {
                var i = e.body,
                    r = t,
                    o = n;
                if (o >= 48 && o <= 57) {
                    do {
                        o = I.call(i, ++r)
                    } while (o >= 48 && o <= 57);
                    return r
                }
                throw (0, a.syntaxError)(e, r, "Invalid number, expected digit but got: " + F(o) + ".")
            }

            function A(e, t, n, a) {
                return M(e) << 12 | M(t) << 8 | M(n) << 4 | M(a)
            }

            function M(e) {
                return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
            }
            L.prototype.toJSON = L.prototype.inspect = function() {
                return {
                    kind: this.kind,
                    value: this.value,
                    line: this.line,
                    column: this.column
                }
            }
        },
        xUty: function(e, t, n) {},
        xaK5: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.NAME = "Name", t.DOCUMENT = "Document", t.OPERATION_DEFINITION = "OperationDefinition", t.VARIABLE_DEFINITION = "VariableDefinition", t.VARIABLE = "Variable", t.SELECTION_SET = "SelectionSet", t.FIELD = "Field", t.ARGUMENT = "Argument", t.FRAGMENT_SPREAD = "FragmentSpread", t.INLINE_FRAGMENT = "InlineFragment", t.FRAGMENT_DEFINITION = "FragmentDefinition", t.INT = "IntValue", t.FLOAT = "FloatValue", t.STRING = "StringValue", t.BOOLEAN = "BooleanValue", t.NULL = "NullValue", t.ENUM = "EnumValue", t.LIST = "ListValue", t.OBJECT = "ObjectValue", t.OBJECT_FIELD = "ObjectField", t.DIRECTIVE = "Directive", t.NAMED_TYPE = "NamedType", t.LIST_TYPE = "ListType", t.NON_NULL_TYPE = "NonNullType", t.SCHEMA_DEFINITION = "SchemaDefinition", t.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", t.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", t.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", t.FIELD_DEFINITION = "FieldDefinition", t.INPUT_VALUE_DEFINITION = "InputValueDefinition", t.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", t.UNION_TYPE_DEFINITION = "UnionTypeDefinition", t.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", t.ENUM_VALUE_DEFINITION = "EnumValueDefinition", t.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", t.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", t.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", t.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", t.UNION_TYPE_EXTENSION = "UnionTypeExtension", t.ENUM_TYPE_EXTENSION = "EnumTypeExtension", t.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension", t.DIRECTIVE_DEFINITION = "DirectiveDefinition"
        },
        xeRp: function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("TSYQ"),
                o = n("q1tI"),
                s = n("/7QA"),
                l = n("NLLf"),
                d = n("b6Yk"),
                c = n("ulzF"),
                u = n("Lxz1");
            ! function(e) {
                e.CommunitiesAvatar = "avatar_image", e.CommunitiesCover = "cover_image", e.Default = "encoded_image", e.EventCoverImage = "event_cover_image"
            }(a || (a = {}));
            var m, p = function() {
                    return function(e, t, n, r) {
                        var o = this;
                        this.uploadURL = e, this.shouldBase64Encode = t, this.base64EncodedPropertyName = n, this.onFinishUploading = r, this.uploadFile = function(e) {
                            return i.__awaiter(o, void 0, void 0, function() {
                                var t, n, r, o, s, l, m, p;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return this.shouldBase64Encode ? (o = void 0, this.base64EncodedPropertyName ? (t = {}, s = this.base64EncodedPropertyName, [4, Object(c.a)(e)]) : [3, 2]) : [3, 5];
                                        case 1:
                                            return t[s] = i.sent(), o = t, [3, 4];
                                        case 2:
                                            return n = {}, l = a.Default, [4, Object(c.a)(e)];
                                        case 3:
                                            n[l] = i.sent(), o = n, i.label = 4;
                                        case 4:
                                            return r = o, [3, 6];
                                        case 5:
                                            (m = new FormData).append("files[]", e), r = m, i.label = 6;
                                        case 6:
                                            return [4, d.a.post(this.uploadURL, {
                                                body: r,
                                                credentials: r instanceof FormData ? "include" : void 0
                                            })];
                                        case 7:
                                            if ((p = i.sent()) && p.error) throw new Error(JSON.stringify(p.error));
                                            if (p.status > 300) {
                                                if (p && p.requestError) throw new Error(JSON.stringify(p.requestError));
                                                throw new Error(Object(u.e)(p.status))
                                            }
                                            return this.onFinishUploading && this.onFinishUploading(p.body, r), [2]
                                    }
                                })
                            })
                        }
                    }
                }(),
                v = n("2/NB"),
                g = n("GnwI"),
                f = n("Ue10"),
                h = (n("LyrF"), "data:image/jpg;base64,"),
                k = "default:town";
            ! function(e) {
                e.ImagePreview = "ImagePreview", e.RemoveButton = "RemoveButton", e.DragDropWrapper = "DragDropWrapper"
            }(m || (m = {}));
            var E = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            srcString: null,
                            isDraggingOver: !1,
                            isResetting: !1
                        }, n.dragOverDepth = 0, n.onDragEnter = function() {
                            n.dragOverDepth++, 1 === n.dragOverDepth && n.setState({
                                isDraggingOver: !0
                            })
                        }, n.onDragLeave = function() {
                            n.dragOverDepth--, 0 === n.dragOverDepth && n.setState({
                                isDraggingOver: !1
                            })
                        }, n.onDrop = function() {
                            n.dragOverDepth = 0, n.setState({
                                isDraggingOver: !1
                            })
                        }, n.onFinishUploading = function(e, t) {
                            !t || t instanceof FormData || !t.event_cover_image || n.setState({
                                srcString: "" + h + t.event_cover_image
                            }), n.props.onFinishUploading(e)
                        }, n.removeImage = function() {
                            n.setState({
                                srcString: null,
                                isResetting: !0
                            }, function() {
                                n.setState({
                                    isResetting: !1
                                })
                            }), n.props.onFinishUploading({
                                _id: k
                            })
                        }, n.state.srcString = t.initialImageData && t.initialImageData.toString(), n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = null,
                            t = null;
                        if (this.state.srcString) {
                            var n = r({
                                "event-modal-image-uploader__preview-image": !0,
                                "event-modal-image-uploader__preview-image--preview-mode": !1 === this.state.isDraggingOver
                            });
                            e = o.createElement(f.Eb, {
                                display: f.X.Flex,
                                justifyContent: f.Wa.Center,
                                alignItems: f.f.Center,
                                background: f.r.Alt,
                                position: f.jb.Absolute,
                                attachBottom: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                attachTop: !0
                            }, o.createElement("img", {
                                "data-test-selector": m.ImagePreview,
                                className: n,
                                src: this.state.srcString
                            })), t = o.createElement(f.Xa, {
                                justifyContent: f.Wa.Center,
                                display: f.X.Flex,
                                margin: {
                                    y: 1
                                }
                            }, o.createElement(f.z, {
                                "data-a-target": "remove-button",
                                "data-test-selector": m.RemoveButton,
                                type: f.F.Hollow,
                                onClick: this.removeImage,
                                icon: f.tb.RemoveTag
                            }, Object(s.d)("Remove", "EventModalImageUploader")))
                        }
                        var i = r({
                                "event-modal-image-uploader__uploader": !0,
                                "event-modal-image-uploader__uploader--preview-mode": null !== e && !1 === this.state.isDraggingOver
                            }),
                            d = new p("https://api.twitch.tv/v5/channels/" + this.props.user.id + "/event_cover_images", !0, a.EventCoverImage, this.onFinishUploading);
                        return o.createElement(f.Xa, {
                            className: "event-modal-image-uploader",
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(f.Ea, {
                            id: "event-image",
                            label: Object(s.d)("Event Image", "EventModal"),
                            labelOptional: Object(s.d)("optional", "EventModal")
                        }, o.createElement(f.Xa, {
                            className: "event-modal-image-uploader__container"
                        }, o.createElement(f.Xa, {
                            className: "event-modal-image-uploader__uploader"
                        }, o.createElement(f.o, {
                            ratio: f.p.Aspect16x9
                        }, o.createElement(f.Pa, {
                            className: i,
                            position: f.jb.Absolute,
                            fullWidth: !0,
                            fullHeight: !0
                        }, o.createElement("div", {
                            onDragEnter: this.onDragEnter,
                            onDragLeave: this.onDragLeave,
                            onDrop: this.onDrop,
                            "data-a-target": "event-image-placeholder",
                            "data-test-selector": m.DragDropWrapper
                        }, !this.state.isResetting && o.createElement(l.a, {
                            allowedFileTypes: [v.a.JPEG],
                            imageDimensions: "676x380",
                            iconHeight: 36,
                            iconWidth: 36,
                            maxFileSizeMegabytes: 1,
                            provider: d
                        }))), e))), t))
                    }, t
                }(o.Component),
                b = Object(g.b)("EventModalImageUploader", {
                    autoReportInteractive: !0
                })(E);
            n.d(t, "b", function() {
                return "380"
            }), n.d(t, "c", function() {
                return "676"
            }), n.d(t, !1, function() {
                return h
            }), n.d(t, !1, function() {
                return m
            }), n.d(t, !1, function() {
                return E
            }), n.d(t, "a", function() {
                return b
            })
        },
        y6KF: function(e, t, n) {
            "use strict";
            n.d(t, "f", function() {
                return r
            }), n.d(t, "e", function() {
                return o
            }), n.d(t, "r", function() {
                return i
            }), n.d(t, "p", function() {
                return c
            }), n.d(t, "k", function() {
                return u
            }), n.d(t, "n", function() {
                return m
            }), n.d(t, "j", function() {
                return p
            }), n.d(t, "l", function() {
                return v
            }), n.d(t, "m", function() {
                return g
            }), n.d(t, "o", function() {
                return f
            }), n.d(t, "s", function() {
                return h
            }), n.d(t, "t", function() {
                return k
            }), n.d(t, "h", function() {
                return E
            }), n.d(t, "g", function() {
                return b
            }), n.d(t, "i", function() {
                return N
            }), n.d(t, "q", function() {
                return y
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "c", function() {
                return l
            }), n.d(t, "d", function() {
                return d
            });
            var a = n("YwGE");
            n.d(t, "a", function() {
                return a.a
            });
            var i, r = "generated",
                o = "custom";
            ! function(e) {
                e.Private = "PRIVATE", e.Public = "PUBLIC"
            }(i || (i = {}));
            var s, l, d, c = "uploading",
                u = "pending_transcode",
                m = "transcoding",
                p = "failed",
                v = "recorded",
                g = "recording",
                f = "unprocessed",
                h = [v, g],
                k = [m, u, p, f, c],
                E = "FORMAT_NOT_SUPPORTED",
                b = "BAD_ASSET",
                N = "INTERNAL_ERROR",
                y = {
                    VIDEO_PREMIERE_STATUS_UNSCHEDULED: "unscheduled",
                    VIDEO_PREMIERE_STATUS_SCHEDULED: "scheduled",
                    VIDEO_PREMIERE_STATUS_STARTED: "started",
                    VIDEO_PREMIERE_STATUS_FAILED: "failed"
                };
            ! function(e) {
                e.Youtube = "youtube"
            }(s || (s = {})),
            function(e) {
                e.None = "NONE", e.Expiring = "EXPIRING"
            }(l || (l = {})),
            function(e) {
                e.Everyone = "", e.SubOnly = "sub_only"
            }(d || (d = {}))
        },
        yI7j: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.printError = function(e) {
                var t = [];
                if (e.nodes) e.nodes.forEach(function(e) {
                    e.loc && t.push(i(e.loc.source, (0, a.getLocation)(e.loc.source, e.loc.start)))
                });
                else if (e.source && e.locations) {
                    var n = e.source;
                    e.locations.forEach(function(e) {
                        t.push(i(n, e))
                    })
                }
                return 0 === t.length ? e.message : [e.message].concat(t).join("\n\n") + "\n"
            };
            var a = n("PO9o");

            function i(e, t) {
                var n = t.line,
                    a = e.locationOffset.line - 1,
                    i = function(e, t) {
                        return 1 === t.line ? e.locationOffset.column - 1 : 0
                    }(e, t),
                    s = n + a,
                    l = t.column + i,
                    d = (s - 1).toString(),
                    c = s.toString(),
                    u = (s + 1).toString(),
                    m = u.length,
                    p = e.body.split(/\r\n|[\n\r]/g);
                return p[0] = r(e.locationOffset.column - 1) + p[0], [e.name + " (" + s + ":" + l + ")", n >= 2 && o(m, d) + ": " + p[n - 2], o(m, c) + ": " + p[n - 1], r(2 + m + l - 1) + "^", n < p.length && o(m, u) + ": " + p[n]].filter(Boolean).join("\n")
            }

            function r(e) {
                return Array(e + 1).join(" ")
            }

            function o(e, t) {
                return r(e - t.length) + t
            }
        },
        zrmy: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "EventModal_CreateSingleEvent"
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
                                    value: "CreateSingleEventInput"
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
                                value: "createSingleEvent"
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
                                        value: "event"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ManagerEventLeaf"
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
                    end: 231
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/dashboard/components/events-page/queries/event-leaf-fragment.gql"\nmutation EventModal_CreateSingleEvent($input: CreateSingleEventInput!) {\ncreateSingleEvent(input: $input) {\nevent {\n...ManagerEventLeaf\n}\n}\n}',
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
            }(n("293+").definitions)), e.exports = a
        },
        zs9K: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "ManagedEventCollections"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "EventCollectionConnection"
                        }
                    },
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
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "EventCollection"
                                                }
                                            },
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
                                                        value: "imageURL"
                                                    },
                                                    arguments: [{
                                                        kind: "Argument",
                                                        name: {
                                                            kind: "Name",
                                                            value: "width"
                                                        },
                                                        value: {
                                                            kind: "IntValue",
                                                            value: "320"
                                                        }
                                                    }, {
                                                        kind: "Argument",
                                                        name: {
                                                            kind: "Name",
                                                            value: "height"
                                                        },
                                                        value: {
                                                            kind: "IntValue",
                                                            value: "180"
                                                        }
                                                    }],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "stats"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "followingCount"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isDeleted"
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
                    end: 217
                }
            };
            n.loc.source = {
                body: "fragment ManagedEventCollections on EventCollectionConnection {\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\nid\n...on EventCollection {\ntitle\nimageURL(width:320 height:180)\nstats {\nfollowingCount\n}\nisDeleted\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        }
    }
]);