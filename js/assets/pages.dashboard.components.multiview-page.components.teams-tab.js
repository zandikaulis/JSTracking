(window.webpackJsonp = window.webpackJsonp || []).push([
    [153], {
        "/ZC1": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return i
            });
            var n = a("mrSG"),
                r = a("q1tI"),
                o = a("Ue10"),
                i = (a("sL9O"), function(e) {
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
                    return n.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(o.Z, {
                            dragOver: this.state.isDraggingOver,
                            error: this.props.error
                        }, r.createElement(o.Qa, {
                            position: o.kb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: o.jc.Above
                        }, r.createElement("input", {
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
                }(r.Component))
        },
        "2/NB": function(e, t, a) {
            "use strict";
            var n;
            a.d(t, "a", function() {
                    return n
                }), a.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.JPEG = "image/jpeg", e.PNG = "image/png", e.GIF = "image/gif"
                }(n || (n = {}));
            var r = [n.JPEG, n.PNG]
        },
        "B+LW": function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                r = a("q1tI"),
                o = a("/MKj"),
                i = a("fvjX"),
                s = a("aCAx"),
                l = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openModal = function() {
                            var e = t,
                                a = function(t) {
                                    function a() {
                                        return null !== t && t.apply(this, arguments) || this
                                    }
                                    return n.__extends(a, t), a.prototype.render = function() {
                                        return e.props.triggerModal(e.closeModal)
                                    }, a
                                }(r.Component);
                            t.props.showModal(a, {})
                        }, t.closeModal = function() {
                            t.props.closeModal()
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return this.props.children(this.openModal)
                    }, t
                }(r.Component);
            var c = Object(o.connect)(null, function(e) {
                return Object(i.bindActionCreators)({
                    showModal: s.d,
                    closeModal: s.c
                }, e)
            })(l);
            a.d(t, "a", function() {
                return c
            })
        },
        CDtL: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return u
            });
            var n = a("mrSG"),
                r = a("/7QA"),
                o = a("PZVp"),
                i = a("/aPz"),
                s = a("2/NB"),
                l = a("Lxz1"),
                c = 1e4,
                u = function() {
                    return function(e, t) {
                        var a = this;
                        this.getUploadURL = e, this.onFinishUploading = t, this.uploadFile = function(e) {
                            return new Promise(function(t, u) {
                                return n.__awaiter(a, void 0, void 0, function() {
                                    var a, d, p, m, g, f = this;
                                    return n.__generator(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return n.trys.push([0, 3, , 4]), [4, this.getUploadURL(e)];
                                            case 1:
                                                return a = n.sent(), d = a.url, p = a.uploadID, [4, fetch(d, {
                                                    body: e,
                                                    method: "PUT"
                                                })];
                                            case 2:
                                                return (m = n.sent()).status > 300 && u(new Error(Object(l.e)(m.status))), this.unsubscribe = r.l.subscribe({
                                                    topic: Object(i.D)(p),
                                                    success: function() {
                                                        f.timeoutID = setTimeout(function() {
                                                            f.unsubscribe(), u(new Error(Object(l.d)()))
                                                        }, c)
                                                    },
                                                    failure: function() {
                                                        clearTimeout(f.timeoutID), u(new Error(Object(l.d)()))
                                                    },
                                                    onMessage: function(e) {
                                                        if (e.upload_id === p) {
                                                            switch (clearTimeout(f.timeoutID), e.status) {
                                                                case o.a.POSTPROCESS_COMPLETE:
                                                                    f.onFinishUploading && f.onFinishUploading(), t();
                                                                    break;
                                                                case o.a.WIDTH_VALIDATION_FAILED:
                                                                case o.a.HEIGHT_VALIDATION_FAILED:
                                                                    u(new Error(Object(l.c)()));
                                                                    break;
                                                                case o.a.FILE_SIZE_VALIDATION_FAILED:
                                                                    u(new Error(Object(l.a)()));
                                                                    break;
                                                                case o.a.IS_IMAGE_VALIDATION_FAILED:
                                                                    u(new Error(Object(l.b)(s.b)));
                                                                    break;
                                                                default:
                                                                    u(new Error(Object(l.d)()))
                                                            }
                                                            f.unsubscribe && f.unsubscribe()
                                                        }
                                                    }
                                                }), [3, 4];
                                            case 3:
                                                return g = n.sent(), r.k.error(g, "unable to upload image"), u(new Error(Object(l.d)())), [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    })
                                })
                            })
                        }
                    }
                }()
        },
        CS6u: function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                r = a("q1tI"),
                o = a("9rZX"),
                i = a("fvjX"),
                s = a("GnwI"),
                l = a("Ue10"),
                c = (a("xefp"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return r.createElement(o, {
                            overlayClassName: "modal__backdrop",
                            className: "modal__content",
                            isOpen: this.props.isOpen,
                            ariaHideApp: !1
                        }, r.createElement(l.Ya, {
                            className: "multiview-modal"
                        }, r.createElement(l.Fb, {
                            className: "multiview-modal__content",
                            padding: 4,
                            margin: {
                                top: 5
                            },
                            background: l.r.Base
                        }, this.props.children)))
                    }, t
                }(r.Component)),
                u = Object(i.compose)(Object(s.b)("MultiviewModal"))(c);
            a.d(t, !1, function() {
                return c
            }), a.d(t, "a", function() {
                return u
            })
        },
        Driw: function(e, t, a) {
            "use strict";
            var n, r = a("mrSG"),
                o = a("q1tI"),
                i = a("/7QA"),
                s = a("cZKs"),
                l = a("eJ65"),
                c = a("B+LW"),
                u = a("Ue10");
            ! function(e) {
                e.Edit = "more-balloon__edit", e.Delete = "more-balloon__delete", e.DeleteConfirm = "more-balloon__delete-confirm"
            }(n || (n = {}));
            var d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDeleteButton = function() {
                        if (t.props.onDelete) return t.props.deleteModalMessage ? o.createElement(c.a, {
                            triggerModal: t.renderDeleteModal
                        }, t.renderBaseDeleteButton) : t.renderBaseDeleteButton(t.props.onDelete)
                    }, t.renderBaseDeleteButton = function(e) {
                        return o.createElement(u.Va, {
                            onClick: e,
                            "data-test-selector": n.Delete
                        }, o.createElement(u.Ya, {
                            className: "more-balloon__balloon-item",
                            padding: {
                                x: 1,
                                y: 1
                            },
                            display: u.X.Flex,
                            alignItems: u.f.Center
                        }, o.createElement(u.tb, {
                            asset: u.ub.Trash,
                            type: u.vb.Brand
                        }), o.createElement(u.Ya, {
                            margin: {
                                left: 1
                            }
                        }, Object(i.e)("Delete", "MultiviewMoreBalloon"))))
                    }, t.renderDeleteModal = function(e) {
                        if (t.props.deleteModalMessage) return o.createElement(u.Fb, {
                            background: u.r.Base,
                            className: "multiview-more-balloon__delete-prompt",
                            elevation: 3
                        }, o.createElement(u.Fb, {
                            borderBottom: !0,
                            display: u.X.Flex,
                            justifyContent: u.Xa.Center,
                            padding: 2
                        }, o.createElement(u.W, {
                            bold: !0,
                            fontSize: u.Ca.Size4
                        }, t.props.deleteModalMessage)), o.createElement(u.Fb, {
                            background: u.r.Alt,
                            display: u.X.Flex,
                            justifyContent: u.Xa.Center,
                            padding: 2
                        }, o.createElement(u.Ya, {
                            margin: {
                                right: .5
                            }
                        }, o.createElement(u.z, {
                            onClick: e,
                            type: u.F.Hollow
                        }, Object(i.e)("Cancel", "MultiviewMoreBalloon"))), o.createElement(u.Ya, {
                            margin: {
                                left: 1
                            }
                        }, o.createElement(u.z, {
                            "data-test-selector": n.DeleteConfirm,
                            onClick: t.onDeleteClick.bind(t, e)
                        }, Object(i.e)("Delete", "MultiviewMoreBalloon")))), o.createElement(s.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t.onDeleteClick = function(e) {
                        t.props.onDelete && t.props.onDelete(), e()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(u.Ya, {
                        margin: {
                            right: .5
                        }
                    }, o.createElement(l.a, {
                        hideBalloonOnInsideClick: !0
                    }, o.createElement(u.z, {
                        icon: u.ub.More,
                        type: u.F.Text
                    }), o.createElement(u.u, {
                        direction: this.props.last ? u.v.TopRight : u.v.BottomRight,
                        tailOffset: 8
                    }, this.props.onEdit && o.createElement(u.Va, {
                        onClick: this.props.onEdit,
                        "data-test-selector": n.Edit
                    }, o.createElement(u.Ya, {
                        className: "more-balloon__balloon-item",
                        padding: {
                            x: 1,
                            y: 1
                        },
                        display: u.X.Flex,
                        alignItems: u.f.Center
                    }, o.createElement(u.tb, {
                        asset: u.ub.Edit,
                        type: u.vb.Brand
                    }), o.createElement(u.Ya, {
                        margin: {
                            left: 1
                        }
                    }, Object(i.e)("Edit", "MultiviewMoreBalloon")))), this.renderDeleteButton())))
                }, t
            }(o.Component);
            a.d(t, !1, function() {
                return n
            }), a.d(t, "a", function() {
                return d
            })
        },
        GIun: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = function(e) {
                    var t = n.Children.only(e.children);
                    return n.cloneElement(t, {
                        "data-selectable": !0,
                        tabIndex: -1
                    })
                };
            a.d(t, "a", function() {
                return r
            })
        },
        Lxz1: function(e, t, a) {
            "use strict";
            a.d(t, "f", function() {
                return i
            }), a.d(t, "g", function() {
                return s
            }), a.d(t, "e", function() {
                return l
            }), a.d(t, "c", function() {
                return c
            }), a.d(t, "a", function() {
                return u
            }), a.d(t, "d", function() {
                return d
            }), a.d(t, "b", function() {
                return m
            });
            var n, r = a("/7QA"),
                o = a("2/NB"),
                i = function(e, t) {
                    return Object(r.d)("Recommended image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                        imageDimensions: e,
                        imageFileMegabytes: t
                    }, "ImageUploader")
                },
                s = function(e, t) {
                    return Object(r.d)("Required image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                        imageDimensions: e,
                        imageFileMegabytes: t
                    }, "ImageUploader")
                },
                l = function(e) {
                    return Object(r.d)("Couldn't upload image. Request returned {statusCode, number}", {
                        statusCode: e
                    }, "ImageUploader")
                },
                c = function() {
                    return Object(r.d)("The provided image does not have the required dimensions.", "ImageUploader")
                },
                u = function() {
                    return Object(r.d)("File too large.", "ImageUploader")
                },
                d = function() {
                    return Object(r.d)("Unexpected error while uploading your image. Please try again later", "ImageUploader")
                },
                p = ((n = {})[o.a.JPEG] = "JPG", n[o.a.PNG] = "PNG", n[o.a.GIF] = "GIF", n),
                m = function(e) {
                    var t = e.map(function(e) {
                        return p[e]
                    });
                    return t.length > 1 && (t[t.length - 1] = "or " + t[t.length - 1]), Object(r.d)("Incompatible format. File must be an image in {allowedTypes} format.", {
                        allowedTypes: t.join(", ")
                    }, "ImageUploader")
                }
        },
        N3I0: function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                r = a("q1tI"),
                o = a("u5aL"),
                i = a("/7QA"),
                s = a("Ue10"),
                l = function() {
                    return r.createElement(s.Ya, {
                        display: s.X.Flex,
                        flexDirection: s.Aa.Column,
                        justifyContent: s.Xa.Center,
                        alignItems: s.f.Center,
                        flexGrow: 1,
                        fullHeight: !0,
                        padding: {
                            y: 1
                        },
                        zIndex: s.jc.Above
                    }, r.createElement(s.Fb, {
                        color: s.O.Alt2,
                        textAlign: s.Sb.Center,
                        flexShrink: 1
                    }, r.createElement(s.tb, {
                        asset: s.ub.DeadGlitch,
                        width: 46,
                        height: 48
                    })), r.createElement(s.Qa, {
                        margin: {
                            top: 1
                        },
                        textAlign: s.Sb.Center
                    }, r.createElement(s.W, {
                        type: s.Wb.H4,
                        "data-test-selector": "search-error-message"
                    }, Object(i.d)("Search is not available at this time", "DropdownSearchError"))), r.createElement(s.W, {
                        type: s.Wb.P
                    }, Object(i.d)("Please try again later", "DropdownSearchError")))
                },
                c = a("8Ad5"),
                u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            focusSelectable: !1,
                            isInputFocused: !1,
                            isOpen: !1
                        }, t.handleChange = function(e) {
                            t.props.onChange(e.target.value)
                        }, t.handleFocus = function() {
                            t.props.onFocusInput && t.props.onFocusInput(), t.setState({
                                isInputFocused: !0
                            })
                        }, t.handleBlur = function() {
                            t.setState({
                                isInputFocused: !1
                            })
                        }, t.onKeyDown = function(e) {
                            var a = function() {
                                e.preventDefault(), e.stopPropagation()
                            };
                            e.keyCode === c.a.Esc ? t.setState({
                                isOpen: !1
                            }) : e.keyCode === c.a.Up ? (a(), t.focusNext(-1)) : e.keyCode === c.a.Down && (a(), t.focusNext(1))
                        }, t.onClickOut = function() {
                            t.state.isOpen && t.setState({
                                isOpen: !1
                            }), t.props.onClose && t.props.onClose()
                        }, t.onMouseOver = function(e) {
                            var a = e.target.closest("[data-selectable]");
                            a && (a.focus(), a.tabIndex = 0, t.state.currentFocus && (t.state.currentFocus.tabIndex = -1), t.setState({
                                currentFocus: a
                            }), t.props.onFocusChange && t.props.onFocusChange(a))
                        }, t.getInputRef = function(e) {
                            t.inputRef = e
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = void 0 === this.props.showDropdown || this.props.showDropdown,
                            t = this.props.isErrored ? r.createElement(l, null) : r.Children.only(this.props.children),
                            a = r.createElement(s.wb, {
                                onChange: this.handleChange,
                                onKeyDown: this.onKeyDown,
                                onBlur: this.handleBlur,
                                onFocus: this.handleFocus,
                                placeholder: this.props.placeholder,
                                id: "nav-search-input",
                                "data-a-target": "nav-search-input",
                                spellCheck: !1,
                                refDelegate: this.getInputRef,
                                size: this.props.inputSize,
                                autoFocus: this.props.autoFocus
                            });
                        return this.props.inline ? r.createElement(o.a, {
                            onClickOut: this.onClickOut
                        }, r.createElement(s.Fb, {
                            background: this.state.isInputFocused || this.state.isOpen ? s.r.Base : void 0,
                            borderRadius: s.x.Large,
                            padding: .5,
                            position: s.kb.Relative,
                            elevation: this.state.isInputFocused || this.state.isOpen ? 3 : void 0
                        }, a, e && r.createElement(s.Fb, {
                            attachLeft: !0,
                            background: s.r.Base,
                            borderRadius: s.x.Large,
                            display: this.state.isOpen ? s.X.Block : s.X.Hide,
                            fullWidth: !0,
                            padding: {
                                y: 1
                            },
                            position: s.kb.Absolute,
                            zIndex: s.jc.Above,
                            elevation: 3
                        }, r.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))) : r.createElement(o.a, {
                            onClickOut: this.onClickOut
                        }, a, e && r.createElement(s.u, n.__assign({
                            noTail: !0
                        }, this.props.balloonProps, {
                            show: this.state.isOpen
                        }), r.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))
                    }, t.prototype.toggle = function(e) {
                        e !== this.state.isOpen && this.setState({
                            isOpen: e
                        })
                    }, t.prototype.setValue = function(e) {
                        this.inputRef.value = e
                    }, t.prototype.focusNext = function(e) {
                        var t, a = document.querySelectorAll("[data-selectable=true]"),
                            n = document.activeElement,
                            r = Array.prototype.indexOf.call(a, n);
                        if ((t = r < 0 ? e > 0 ? 0 : a.length - 1 : r + e) < 0 && (t = 0), !(t >= a.length)) {
                            var o = a.item(t);
                            o.focus(), o.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                                currentFocus: o
                            }), this.props.onFocusChange && this.props.onFocusChange(o)
                        }
                    }, t
                }(r.Component);
            a.d(t, "a", function() {
                return u
            })
        },
        PZVp: function(e, t, a) {
            "use strict";
            var n;
            a.d(t, "a", function() {
                    return n
                }),
                function(e) {
                    e[e.REQUESTED = 0] = "REQUESTED", e[e.POSTPROCESS_STARTED = 1] = "POSTPROCESS_STARTED", e[e.POSTPROCESS_COMPLETE = 2] = "POSTPROCESS_COMPLETE", e[e.COMPLETE = 3] = "COMPLETE", e[e.VALIDATION_FAILED = 4] = "VALIDATION_FAILED", e[e.POSTPROCESS_FAILED = 5] = "POSTPROCESS_FAILED", e[e.POSTPROCESS_RETRYING = 6] = "POSTPROCESS_RETRYING", e[e.FEATURE_SERVICE_FAILED = 7] = "FEATURE_SERVICE_FAILED", e[e.IS_IMAGE_VALIDATION_FAILED = 110] = "IS_IMAGE_VALIDATION_FAILED", e[e.ASPECT_RATIO_VALIDATION_FAILED = 111] = "ASPECT_RATIO_VALIDATION_FAILED", e[e.WIDTH_VALIDATION_FAILED = 112] = "WIDTH_VALIDATION_FAILED", e[e.HEIGHT_VALIDATION_FAILED = 113] = "HEIGHT_VALIDATION_FAILED", e[e.IMAGE_FORMAT_VALIDATION_FAILED = 114] = "IMAGE_FORMAT_VALIDATION_FAILED", e[e.FILE_SIZE_VALIDATION_FAILED = 120] = "FILE_SIZE_VALIDATION_FAILED", e[e.TRANSFORMATION_FAILED = 210] = "TRANSFORMATION_FAILED", e[e.PROCESSING_FAILED = 220] = "PROCESSING_FAILED"
                }(n || (n = {}))
        },
        hoVs: function(e, t) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "CreateMultiviewContentAttributeImageUploadConfig"
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
                                    value: "CreateMultiviewContentAttributeImageUploadConfigInput"
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
                                value: "createMultiviewContentAttributeImageUploadConfig"
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
                                        value: "uploadID"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "uploadURL"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 221
                }
            };
            a.loc.source = {
                body: "mutation CreateMultiviewContentAttributeImageUploadConfig($input: CreateMultiviewContentAttributeImageUploadConfigInput!) {\ncreateMultiviewContentAttributeImageUploadConfig(input: $input) {\nuploadID\nuploadURL\nimageURL\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = a
        },
        il7S: function(e, t, a) {
            "use strict";
            var n, r;
            a.d(t, "a", function() {
                    return n
                }), a.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.Group = "group", e.Team = "team", e.Player = "player", e.Role = "role"
                }(n || (n = {})),
                function(e) {
                    e.Group = "Group", e.Team = "Team", e.Player = "Player", e.Role = "Role"
                }(r || (r = {}))
        },
        kcKo: function(e, t, a) {},
        khW5: function(e, t, a) {},
        qIvo: function(e, t, a) {
            "use strict";
            var n, r = a("mrSG"),
                o = a("q1tI"),
                i = a("fvjX"),
                s = a("/7QA"),
                l = a("/ZC1"),
                c = a("yR8l"),
                u = a("geRD"),
                d = a("CDtL"),
                p = a("Ue10"),
                m = a("hoVs"),
                g = (a("khW5"), ["image/*"]);
            ! function(e) {
                e.Container = "content-attribute-image-uploader__test__container", e.InfoText = "content-attribute-image-uploader__test__info-text", e.PreviewImage = "content-attribute-image-uploader__test__preview-image"
            }(n || (n = {}));
            var f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            uploading: !1,
                            imageURL: t.props.existingImageURL
                        }, t.getPreviewImage = function() {
                            var e = null;
                            if (t.state.imageURL) e = o.createElement(p.Ya, null, o.createElement(p.S, {
                                "data-test-selector": n.PreviewImage,
                                src: t.state.imageURL,
                                alt: t.state.imageURL
                            }));
                            else {
                                var a = "";
                                t.state.uploading && (a = "content-attribute-image-uploader__upload-svg--anim-fill"), e = o.createElement(p.Ya, {
                                    className: a
                                }, o.createElement(p.tb, {
                                    "data-test-selector": n.PreviewImage,
                                    asset: p.ub.Upload,
                                    type: p.vb.Alt2,
                                    height: 80,
                                    width: 80
                                }))
                            }
                            return e
                        }, t.onImageInputChange = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, a, n;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (this.props.onLoading(), null === e) return this.handleUploadError(new Error("No file is selected")), [2];
                                            this.setState({
                                                uploading: !0,
                                                imageURL: null
                                            }), t = e[0], r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 4, , 5]), [4, this.createImageUploadConfig()];
                                        case 2:
                                            return a = r.sent(), [4, new d.a(this.getUploadServiceInputFn(a), this.getOnSuccessfulUploadFn(a.imageURL).bind(this)).uploadFile(t)];
                                        case 3:
                                            return r.sent(), [3, 5];
                                        case 4:
                                            return n = r.sent(), this.handleUploadError(n), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t.createImageUploadConfig = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return r.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return [4, this.props.createImageUploadConfig(Object(u.a)({
                                                channelID: this.props.channelID
                                            }))];
                                        case 1:
                                            if ((e = a.sent()).data && e.data.createMultiviewContentAttributeImageUploadConfig) return [2, {
                                                uploadID: (t = e.data.createMultiviewContentAttributeImageUploadConfig).uploadID,
                                                uploadURL: t.uploadURL,
                                                imageURL: t.imageURL
                                            }];
                                            throw new Error("Failed to get image upload config")
                                    }
                                })
                            })
                        }, t.getUploadServiceInputFn = function(e) {
                            return function(a) {
                                return r.__awaiter(t, void 0, void 0, function() {
                                    return r.__generator(this, function(t) {
                                        return [2, {
                                            url: e.uploadURL,
                                            uploadID: e.uploadID
                                        }]
                                    })
                                })
                            }
                        }, t.getOnSuccessfulUploadFn = function(e) {
                            return function() {
                                t.setState({
                                    imageURL: e
                                }), t.props.onSuccess(e)
                            }
                        }, t.handleUploadError = function(e) {
                            t.setState({
                                uploading: !1
                            }), t.props.onError(e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(p.Ya, {
                            className: "content-attribute-image-uploader",
                            display: p.X.InlineBlock,
                            position: p.kb.Relative,
                            textAlign: p.Sb.Left
                        }, o.createElement(p.Ya, {
                            className: "content-attribute-image-uploader__container",
                            "data-test-selector": n.Container,
                            textAlign: p.Sb.Left
                        }, o.createElement(l.a, {
                            allowedFileTypes: g,
                            onFilesSubmitted: this.onImageInputChange
                        }, o.createElement(p.Fb, {
                            display: p.X.Flex,
                            alignItems: p.f.Start
                        }, o.createElement(p.Qa, {
                            className: "content-attribute-image-uploader__preview-image",
                            display: p.X.Flex,
                            margin: 1
                        }, this.getPreviewImage()), o.createElement(p.Ya, {
                            className: "content-attribute-image-uploader__info-text",
                            "data-test-selector": n.InfoText,
                            display: p.X.Flex,
                            flexDirection: p.Aa.Column,
                            flexGrow: 1,
                            textAlign: p.Sb.Left,
                            margin: 1,
                            padding: 2
                        }, o.createElement(p.W, {
                            fontSize: p.Ca.Size5
                        }, Object(s.e)("Drag and drop or select file to upload", "MultiviewContentAttributeImageUploader")), o.createElement(p.W, {
                            fontSize: p.Ca.Size6
                        }, this.props.hintMessage))))))
                    }, t
                }(o.Component),
                h = Object(i.compose)(Object(c.a)(m, {
                    name: "createImageUploadConfig"
                }))(f);
            a.d(t, !1, function() {
                return n
            }), a.d(t, !1, function() {
                return f
            }), a.d(t, "a", function() {
                return h
            })
        },
        sL9O: function(e, t, a) {},
        vD5X: function(e, t, a) {
            "use strict";
            a.r(t);
            var n, r = a("mrSG"),
                o = a("q1tI"),
                i = a("fvjX"),
                s = a("/7QA"),
                l = a("GnwI"),
                c = a("IFXb"),
                u = a("8/mp"),
                d = a("qIvo"),
                p = a("GIun"),
                m = a("vV5t"),
                g = a("Driw"),
                f = a("Ue10");
            a("kcKo");
            ! function(e) {
                e.Container = "player-association-list__container", e.AddPlayerButton = "player-association-list__add_player", e.SelectedPlayersRow = "player-association-list__selected_players_row", e.DropdownPlayersRow = "player-association-list__dropdown_players_row", e.NoPlayersMessage = "player-association-list__no_players_message"
            }(n || (n = {}));
            var h, b = function(e) {
                    function t(t) {
                        var a = e.call(this, t) || this;
                        return a.state = {
                            players: new Set,
                            playersMap: new Map,
                            playerSearchTerm: ""
                        }, a.filterPlayersBySearchTerm = function(e) {
                            return a.props.availablePlayers.filter(function(t) {
                                return t.value.toLowerCase().indexOf(e.toLowerCase()) > -1
                            })
                        }, a.renderPlayersRows = function() {
                            return 0 === a.state.playersMap.size ? o.createElement(f.Fb, {
                                background: f.r.Base,
                                elevation: 1,
                                alignItems: f.f.Center,
                                justifyContent: f.Xa.Between,
                                display: f.X.Flex,
                                flexDirection: f.Aa.Row,
                                margin: {
                                    bottom: 1
                                }
                            }, o.createElement(f.Ya, {
                                fullWidth: !0,
                                padding: 2,
                                alignItems: f.f.Center,
                                textAlign: f.Sb.Center
                            }, o.createElement(f.W, {
                                "data-test-selector": n.NoPlayersMessage,
                                fontSize: f.Ca.Size4
                            }, Object(s.e)("No players on this team", "EditTeamPlayerAssociation")))) : Array.from(a.state.playersMap.values()).map(function(e, t) {
                                return o.createElement(f.Fb, {
                                    background: f.r.Base,
                                    elevation: 1,
                                    alignItems: f.f.Center,
                                    justifyContent: f.Xa.Between,
                                    display: f.X.Flex,
                                    flexDirection: f.Aa.Row,
                                    margin: {
                                        bottom: 1
                                    },
                                    key: t,
                                    "data-test-selector": n.SelectedPlayersRow
                                }, o.createElement(f.Ya, {
                                    flexDirection: f.Aa.Column,
                                    padding: 2,
                                    flexGrow: 1
                                }, o.createElement(f.W, {
                                    fontSize: f.Ca.Size4
                                }, e.value)), o.createElement(g.a, {
                                    onDelete: a.removePlayer.bind(a, e),
                                    last: 0 !== t && t === a.state.playersMap.size - 1
                                }))
                            })
                        }, a.renderPlayersDropdown = function() {
                            var e = a.filterPlayersBySearchTerm(a.state.playerSearchTerm);
                            return 0 === e.length ? o.createElement(f.Ya, {
                                padding: 1
                            }, o.createElement(f.W, null, Object(s.e)("No players available", "EditTeamPlayerAssociation"))) : e.map(function(e, t) {
                                return o.createElement(p.a, {
                                    key: t
                                }, o.createElement(f.Va, {
                                    onClick: a.onSelectPlayer.bind(a, e),
                                    selected: a.isPlayerSelected(e),
                                    border: !1,
                                    borderRadius: f.x.None
                                }, o.createElement(f.Ya, {
                                    padding: 1
                                }, o.createElement(f.W, {
                                    "data-test-selector": n.DropdownPlayersRow
                                }, "" + e.value))))
                            })
                        }, a.onSelectPlayer = function(e) {
                            a.state.playersMap.has(e.id) || (a.setState(function(t) {
                                return {
                                    playersMap: t.playersMap.set(e.id, e)
                                }
                            }), a.props.addPlayerAssociation(e))
                        }, a.onPlayerInputChange = function(e) {
                            a.setState({
                                playerSearchTerm: e
                            })
                        }, a.removePlayer = function(e) {
                            a.setState(function(t) {
                                return {
                                    playersMap: function(e, t) {
                                        return e.delete(t), e
                                    }(t.playersMap, e.id)
                                }
                            }), a.props.removePlayerAssociation(e)
                        }, a.isPlayerSelected = function(e) {
                            return a.state.playersMap.has(e.id)
                        }, a.props.team && a.props.availablePlayers.forEach(function(e) {
                            a.props.team && e.parentID === a.props.team.id && a.state.playersMap.set(e.id, e)
                        }), a
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(f.Ya, {
                            fullHeight: !0,
                            className: "player-association-list",
                            "data-test-selector": n.Container,
                            "padding-bottom": 5
                        }, o.createElement(f.Ya, {
                            className: "player-association-list__players-dropdown",
                            "data-test-selector": n.AddPlayerButton,
                            display: f.X.Flex,
                            alignItems: f.f.Center,
                            justifyContent: f.Xa.Between
                        }, o.createElement(f.Ya, null, o.createElement(f.W, {
                            fontSize: f.Ca.Size6
                        }, Object(s.e)("Players", "EditTeamPlayerAssociation"))), o.createElement(m.a, {
                            onChange: this.onPlayerInputChange,
                            balloonDirection: f.v.BottomRight,
                            buttonText: Object(s.e)("Add Player", "EditTeamPlayerAssociation"),
                            ref: this.state.playerSearchTerm
                        }, this.renderPlayersDropdown())), o.createElement(f.Ya, {
                            className: "player-association-list__players-rows",
                            margin: {
                                top: 2
                            }
                        }, this.renderPlayersRows()))
                    }, t
                }(o.Component),
                E = Object(i.compose)()(b),
                y = a("CS6u"),
                v = a("il7S");
            ! function(e) {
                e.Cancel = "edit-team-modal__cancel", e.Save = "edit-team-modal__save", e.Value = "edit-team-modal__value", e.ValueForm = "edit-team-modal__value-form", e.ImageUploader = "edit-team-modal__image-uploader"
            }(h || (h = {}));
            var I, T = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.playersToAssign = new Map, a.playersToUnAssign = new Map, a.onTeamNameChange = function(e) {
                        var t = e.target.value,
                            n = r.__assign({}, a.state.team, {
                                value: t
                            });
                        a.setState({
                            team: n
                        })
                    }, a.validTeamName = function() {
                        return !!a.state.team.value
                    }, a.canSave = function() {
                        return !a.state.isSaving && !a.state.isUploadingImage && a.validTeamName()
                    }, a.onSave = function() {
                        return r.__awaiter(a, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!this.validTeamName()) return [2];
                                        this.setState({
                                            isSaving: !0
                                        }), e = "", a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.onSave(this.state.team, Array.from(this.playersToAssign.values()), Array.from(this.playersToUnAssign.values()))];
                                    case 2:
                                        return a.sent(), [3, 4];
                                    case 3:
                                        return t = a.sent(), s.k.error(t, "Error updating team"), e = Object(s.e)("There was a problem saving this team", "EditTeamModal"), [3, 4];
                                    case 4:
                                        return this.setState({
                                            isSaving: !1,
                                            errorMessage: e
                                        }), [2]
                                }
                            })
                        })
                    }, a.uploadingImageURL = function() {
                        a.setState({
                            isUploadingImage: !0
                        })
                    }, a.addImageURL = function(e) {
                        var t = r.__assign({}, a.state.team, {
                            imageURL: e
                        });
                        a.setState({
                            team: t,
                            isUploadingImage: !1
                        })
                    }, a.handleImageUploadFailure = function(e) {
                        s.k.error(e, "Failed to upload image via upload service");
                        var t = Object(s.e)("There was a problem uploading the team icon", "EditTeamModal");
                        a.setState({
                            isUploadingImage: !1,
                            errorMessage: t
                        })
                    }, a.assignPlayer = function(e) {
                        a.playersToUnAssign.has(e.id) ? a.playersToUnAssign.delete(e.id) : a.playersToAssign.set(e.id, e)
                    }, a.unassignPlayer = function(e) {
                        a.playersToAssign.has(e.id) ? a.playersToAssign.delete(e.id) : a.playersToUnAssign.set(e.id, e)
                    }, a.state = {
                        isSaving: !1,
                        isUploadingImage: !1,
                        errorMessage: "",
                        team: t.team || {
                            __typename: "MultiviewContentAttribute",
                            id: "",
                            key: v.a.Team,
                            name: v.b.Team,
                            parentID: null,
                            parentKey: null,
                            value: "",
                            valueShortName: "",
                            imageURL: "",
                            createdAt: "",
                            updatedAt: ""
                        },
                        playersToAdd: [],
                        playersToRemove: []
                    }, a
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.state.team;
                    return o.createElement(y.a, {
                        isOpen: !0
                    }, o.createElement(u.b, null, o.createElement(f.Ya, {
                        padding: {
                            right: 2
                        },
                        className: "edit-team-modal",
                        display: f.X.Flex,
                        flexDirection: f.Aa.Column
                    }, o.createElement(f.Fb, {
                        display: f.X.Flex,
                        padding: {
                            bottom: 2
                        },
                        margin: {
                            bottom: 2
                        },
                        justifyContent: f.Xa.Between,
                        borderBottom: !0
                    }, o.createElement(f.Ya, {
                        flexGrow: 0,
                        flexShrink: 1
                    }, o.createElement(f.W, {
                        type: f.Wb.H3
                    }, Object(s.e)("Edit Team", "EditTeamModal"))), o.createElement(f.Ya, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, o.createElement(f.z, {
                        onClick: this.props.onClose,
                        "data-test-selector": h.Cancel,
                        type: f.F.Text
                    }, Object(s.e)("Cancel", "EditTeamModal")), o.createElement(f.Ya, {
                        margin: {
                            left: 1
                        },
                        display: f.X.InlineBlock
                    }, o.createElement(f.z, {
                        onClick: this.onSave,
                        "data-test-selector": h.Save,
                        disabled: !this.canSave()
                    }, Object(s.e)("Save", "EditTeamModal"))))), o.createElement(f.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(f.Ea, {
                        id: "team-name",
                        "data-test-selector": h.ValueForm,
                        label: Object(s.e)("Team Name", "EditTeamModal"),
                        error: !this.validTeamName(),
                        errorMessage: Object(s.e)("Must provide a team name", "EditTeamModal")
                    }, o.createElement(f.Ya, {
                        className: "edit-team-modal__team-name-input"
                    }, o.createElement(f.Sa, {
                        type: f.Ua.Text,
                        "data-test-selector": h.Value,
                        onChange: this.onTeamNameChange,
                        value: e.value
                    })))), o.createElement(f.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(f.Ea, {
                        label: Object(s.e)("Team Icon", "EditTeamModal"),
                        error: "" !== this.state.errorMessage,
                        errorMessage: this.state.errorMessage
                    }, o.createElement(d.a, {
                        "data-test-selector": h.ImageUploader,
                        channelID: this.props.channelID,
                        onSuccess: this.addImageURL,
                        onLoading: this.uploadingImageURL,
                        onError: this.handleImageUploadFailure,
                        existingImageURL: this.state.team.imageURL,
                        hintMessage: Object(s.e)("Recommended size: 112 x 112, and less than 100kb", "EditTeamModal")
                    }))), o.createElement(f.Ya, {
                        flexGrow: 1
                    }, o.createElement(E, {
                        team: this.props.team,
                        availablePlayers: this.props.players || [],
                        addPlayerAssociation: this.assignPlayer,
                        removePlayerAssociation: this.unassignPlayer
                    })))))
                }, t
            }(o.Component);
            (I || (I = {})).EmptyList = "teams-tab__empty-list";
            var _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isAddingTeam: !1,
                            errorMessage: "",
                            isSaving: !1
                        }, t.filteredTeamContentAttributes = function() {
                            return t.props.availableContentAttributes.filter(function(e) {
                                return e.key === v.a.Team
                            })
                        }, t.filterUnassignedPlayerContentAttributes = function() {
                            return t.props.availableContentAttributes.filter(function(e) {
                                return e.key === v.a.Player && !e.parentID
                            })
                        }, t.filterPlayerContentAttributesByTeam = function(e) {
                            return t.props.availableContentAttributes.filter(function(t) {
                                return t.key === v.a.Player && t.parentKey === v.a.Team && t.parentID === e
                            })
                        }, t.renderCreateTeamModal = function() {
                            if (t.state.isAddingTeam) return o.createElement(T, {
                                channelID: t.props.channelID,
                                team: null,
                                players: t.filterUnassignedPlayerContentAttributes(),
                                onClose: t.cancelAddingTeam,
                                onSave: t.createTeam
                            })
                        }, t.renderEditTeamModal = function() {
                            if (t.state.team) return o.createElement(T, {
                                channelID: t.props.channelID,
                                team: t.state.team,
                                players: t.filterUnassignedPlayerContentAttributes().concat(t.filterPlayerContentAttributesByTeam(t.state.team.id)),
                                onClose: t.closeTeamModal,
                                onSave: t.updateTeam
                            })
                        }, t.startAddingNewTeam = function() {
                            t.setState({
                                isAddingTeam: !0
                            })
                        }, t.cancelAddingTeam = function() {
                            t.setState({
                                isAddingTeam: !1
                            })
                        }, t.editTeam = function(e) {
                            t.setState({
                                team: e
                            })
                        }, t.closeTeamModal = function() {
                            t.setState({
                                team: void 0
                            })
                        }, t.validTeamName = function(e) {
                            return !!e.value
                        }, t.createTeam = function(e, a) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, n, o, i;
                                return r.__generator(this, function(l) {
                                    switch (l.label) {
                                        case 0:
                                            if (!this.validTeamName(e)) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), t = "", l.label = 1;
                                        case 1:
                                            return l.trys.push([1, 4, , 5]), n = r.__assign({
                                                ownerChannelID: this.props.channelID
                                            }, e), [4, this.props.createContentAttributes([n])];
                                        case 2:
                                            return o = l.sent(), [4, this.props.updateContentAttributes(this.assignPlayersToTeam(o.succeeded[0], a))];
                                        case 3:
                                            return l.sent(), this.cancelAddingTeam(), [3, 5];
                                        case 4:
                                            return i = l.sent(), s.k.error(i, "Error creating team"), t = Object(s.e)("There was a problem creating this team", "TeamsTab"), [3, 5];
                                        case 5:
                                            return this.setState({
                                                isSaving: !1,
                                                errorMessage: t
                                            }), this.closeTeamModal(), [2]
                                    }
                                })
                            })
                        }, t.updateTeam = function(e, a, n) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, o, i, l;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (!this.validTeamName(e)) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), t = "", r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), o = {
                                                ownerChannelID: this.props.channelID,
                                                id: e.id,
                                                key: e.key,
                                                name: e.name,
                                                value: e.value,
                                                valueShortName: e.valueShortName,
                                                imageURL: e.imageURL,
                                                parentKey: e.parentKey,
                                                parentID: e.parentID
                                            }, i = [o].concat(this.assignPlayersToTeam(e, a)).concat(this.unassignPlayersFromTeam(n)), [4, this.props.updateContentAttributes(i)];
                                        case 2:
                                            return r.sent(), [3, 4];
                                        case 3:
                                            return l = r.sent(), s.k.error(l, "Error updating team"), t = Object(s.e)("There was a problem updating this team", "TeamsTab"), [3, 4];
                                        case 4:
                                            return this.setState({
                                                isSaving: !1,
                                                errorMessage: t
                                            }), this.closeTeamModal(), [2]
                                    }
                                })
                            })
                        }, t.deleteTeam = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, a;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 3, , 4]), [4, this.props.updateContentAttributes(this.unassignPlayersFromTeam(this.filterPlayerContentAttributesByTeam(e.id)))];
                                        case 1:
                                            return n.sent(), [4, this.props.deleteContentAttributes([e.id])];
                                        case 2:
                                            return n.sent(), [3, 4];
                                        case 3:
                                            return t = n.sent(), s.k.error(t, "Could not delete team"), a = Object(s.e)("There was a problem deleting this team", "TeamsTab"), this.setState({
                                                errorMessage: a
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.assignPlayersToTeam = function(e, a) {
                            return 0 === a.length ? a : a.map(function(a) {
                                return r.__assign({}, a, {
                                    ownerChannelID: t.props.channelID,
                                    parentKey: v.a.Team,
                                    parentID: e.id
                                })
                            })
                        }, t.unassignPlayersFromTeam = function(e) {
                            return 0 === e.length ? e : e.map(function(e) {
                                return r.__assign({}, e, {
                                    ownerChannelID: t.props.channelID,
                                    parentKey: null,
                                    parentID: null
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.filteredTeamContentAttributes(),
                            a = f.Ca.Size5,
                            n = f.Ca.Size5;
                        return o.createElement(c.a, null, o.createElement(f.Fb, {
                            display: f.X.Flex,
                            justifyContent: f.Xa.Between,
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderBottom: !0
                        }, o.createElement(f.W, {
                            type: f.Wb.H4,
                            bold: !0
                        }, Object(s.e)("Teams", "TeamsTab")), o.createElement(f.Ya, null, o.createElement(f.z, {
                            icon: f.ub.Plus,
                            type: f.F.Hollow,
                            onClick: this.startAddingNewTeam
                        }, Object(s.e)("Add Team", "TeamsTab")))), o.createElement(f.Ya, null, o.createElement(f.Ya, {
                            display: f.X.Flex,
                            flexGrow: 1,
                            padding: {
                                left: 2,
                                right: 0,
                                y: 1
                            }
                        }, o.createElement(f.P, {
                            cols: 5,
                            offset: 1
                        }, o.createElement(f.W, {
                            bold: !0,
                            fontSize: a
                        }, Object(s.e)("Team Name", "TeamsTab"))), o.createElement(f.P, {
                            cols: 4
                        }, o.createElement(f.W, {
                            bold: !0,
                            fontSize: a
                        }, Object(s.e)("Roster", "TeamsTab"))), o.createElement(f.P, {
                            cols: 2
                        }, o.createElement(f.W, {
                            bold: !0,
                            fontSize: a
                        }, Object(s.e)("Last Modified", "TeamsTab"))))), !t.length && o.createElement(f.W, {
                            "data-test-selector": I.EmptyList,
                            italic: !0
                        }, Object(s.e)("No Teams", "TeamsTab")), t.map(function(a, r) {
                            return o.createElement(f.Fb, {
                                background: f.r.Base,
                                elevation: 1,
                                alignItems: f.f.Center,
                                justifyContent: f.Xa.Between,
                                display: f.X.Flex,
                                margin: {
                                    bottom: 1
                                },
                                key: r
                            }, o.createElement(f.Ya, {
                                className: "multiview-dashboard-teams__row",
                                display: f.X.Flex,
                                padding: {
                                    top: 2,
                                    right: 0,
                                    bottom: 2,
                                    left: 2
                                },
                                flexGrow: 1,
                                alignItems: f.f.Center
                            }, o.createElement(f.P, {
                                cols: 1
                            }, a.imageURL && o.createElement(f.q, {
                                src: a.imageURL,
                                alt: a.value,
                                size: 30
                            })), o.createElement(f.P, {
                                cols: 5
                            }, o.createElement(f.W, {
                                fontSize: n
                            }, a.value)), o.createElement(f.P, {
                                cols: 4
                            }, o.createElement(f.Ya, null, o.createElement(f.W, {
                                fontSize: n
                            }, Object(s.e)("{count, plural, one {# player} other {# players}}", {
                                count: e.filterPlayerContentAttributesByTeam(a.id).length
                            }, "TeamsTab")))), o.createElement(f.P, {
                                cols: 2
                            }, o.createElement(f.Ya, {
                                display: f.X.Flex,
                                alignItems: f.f.Center
                            }, o.createElement(f.Ya, {
                                flexGrow: 1
                            }, a.updatedAt && o.createElement(f.W, {
                                fontSize: n
                            }, Object(s.c)(new Date(a.updatedAt), "medium"))), o.createElement(f.Ya, {
                                flexGrow: 0
                            }, o.createElement(g.a, {
                                onEdit: e.editTeam.bind(e, a),
                                onDelete: e.deleteTeam.bind(e, a),
                                deleteModalMessage: Object(s.e)("Are you sure you want to delete team: {value}?", {
                                    value: a.value
                                }, "TeamsTab"),
                                last: r === t.length - 1
                            }))))))
                        }), this.renderCreateTeamModal(), this.renderEditTeamModal())
                    }, t
                }(o.Component),
                S = Object(i.compose)(Object(l.b)("TeamsTab"))(_);
            a.d(t, "TestSelectors", function() {
                return I
            }), a.d(t, "TeamsTabComponent", function() {
                return _
            }), a.d(t, "TeamsTab", function() {
                return S
            })
        },
        vV5t: function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                r = a("q1tI"),
                o = a("N3I0"),
                i = a("8/mp"),
                s = a("eJ65"),
                l = a("Ue10"),
                c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.toggle = function(e) {
                            t.dropdownSearch && t.dropdownSearch.toggle(e), t.balloon && t.balloon.toggleBalloon(e)
                        }, t.setBallonRef = function(e) {
                            t.balloon = e
                        }, t.setSearchRef = function(e) {
                            t.dropdownSearch = e
                        }, t.onBalloonToggle = function(e) {
                            e || (t.dropdownSearch && t.dropdownSearch.setValue(""), t.onInputChange(""))
                        }, t.onSearchFocus = function() {
                            t.dropdownSearch && t.dropdownSearch.toggle(!0)
                        }, t.onInputChange = function(e) {
                            t.onSearchFocus(), t.props.onChange(e)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.onSearchFocus()
                    }, t.prototype.render = function() {
                        return r.createElement(l.Ya, {
                            margin: {
                                right: .5
                            }
                        }, r.createElement(s.a, {
                            onToggle: this.onBalloonToggle,
                            ref: this.setBallonRef
                        }, r.createElement(l.z, {
                            disabled: this.props.disabled,
                            type: l.F.Hollow
                        }, this.props.buttonText), r.createElement(l.u, {
                            direction: this.props.balloonDirection || l.v.BottomLeft,
                            tailOffset: 8
                        }, r.createElement(l.Ya, {
                            position: l.kb.Relative
                        }, r.createElement(o.a, {
                            autoFocus: !0,
                            inline: !0,
                            showDropdown: !0,
                            onChange: this.onInputChange,
                            onFocusInput: this.onSearchFocus,
                            placeholder: this.props.buttonText,
                            ref: this.setSearchRef
                        }, r.createElement(i.b, {
                            className: "content-attribute-dropdown__scrollable-area",
                            suppressScrollX: !0
                        }, r.createElement(l.Ya, null, this.props.children)))))))
                    }, t
                }(r.Component);
            a.d(t, "a", function() {
                return c
            })
        },
        xefp: function(e, t, a) {}
    }
]);