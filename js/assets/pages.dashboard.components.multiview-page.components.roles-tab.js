(window.webpackJsonp = window.webpackJsonp || []).push([
    [154], {
        "/ZC1": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n("mrSG"),
                r = n("q1tI"),
                o = n("Ue10"),
                i = (n("sL9O"), function(e) {
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
        "2/NB": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }), n.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.JPEG = "image/jpeg", e.PNG = "image/png", e.GIF = "image/gif"
                }(a || (a = {}));
            var r = [a.JPEG, a.PNG]
        },
        "B+LW": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                o = n("/MKj"),
                i = n("fvjX"),
                l = n("aCAx"),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openModal = function() {
                            var e = t,
                                n = function(t) {
                                    function n() {
                                        return null !== t && t.apply(this, arguments) || this
                                    }
                                    return a.__extends(n, t), n.prototype.render = function() {
                                        return e.props.triggerModal(e.closeModal)
                                    }, n
                                }(r.Component);
                            t.props.showModal(n, {})
                        }, t.closeModal = function() {
                            t.props.closeModal()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.children(this.openModal)
                    }, t
                }(r.Component);
            var c = Object(o.connect)(null, function(e) {
                return Object(i.bindActionCreators)({
                    showModal: l.d,
                    closeModal: l.c
                }, e)
            })(s);
            n.d(t, "a", function() {
                return c
            })
        },
        CDtL: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var a = n("mrSG"),
                r = n("/7QA"),
                o = n("PZVp"),
                i = n("/aPz"),
                l = n("2/NB"),
                s = n("Lxz1"),
                c = 1e4,
                u = function() {
                    return function(e, t) {
                        var n = this;
                        this.getUploadURL = e, this.onFinishUploading = t, this.uploadFile = function(e) {
                            return new Promise(function(t, u) {
                                return a.__awaiter(n, void 0, void 0, function() {
                                    var n, d, m, p, g, f = this;
                                    return a.__generator(this, function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return a.trys.push([0, 3, , 4]), [4, this.getUploadURL(e)];
                                            case 1:
                                                return n = a.sent(), d = n.url, m = n.uploadID, [4, fetch(d, {
                                                    body: e,
                                                    method: "PUT"
                                                })];
                                            case 2:
                                                return (p = a.sent()).status > 300 && u(new Error(Object(s.e)(p.status))), this.unsubscribe = r.l.subscribe({
                                                    topic: Object(i.D)(m),
                                                    success: function() {
                                                        f.timeoutID = setTimeout(function() {
                                                            f.unsubscribe(), u(new Error(Object(s.d)()))
                                                        }, c)
                                                    },
                                                    failure: function() {
                                                        clearTimeout(f.timeoutID), u(new Error(Object(s.d)()))
                                                    },
                                                    onMessage: function(e) {
                                                        if (e.upload_id === m) {
                                                            switch (clearTimeout(f.timeoutID), e.status) {
                                                                case o.a.POSTPROCESS_COMPLETE:
                                                                    f.onFinishUploading && f.onFinishUploading(), t();
                                                                    break;
                                                                case o.a.WIDTH_VALIDATION_FAILED:
                                                                case o.a.HEIGHT_VALIDATION_FAILED:
                                                                    u(new Error(Object(s.c)()));
                                                                    break;
                                                                case o.a.FILE_SIZE_VALIDATION_FAILED:
                                                                    u(new Error(Object(s.a)()));
                                                                    break;
                                                                case o.a.IS_IMAGE_VALIDATION_FAILED:
                                                                    u(new Error(Object(s.b)(l.b)));
                                                                    break;
                                                                default:
                                                                    u(new Error(Object(s.d)()))
                                                            }
                                                            f.unsubscribe && f.unsubscribe()
                                                        }
                                                    }
                                                }), [3, 4];
                                            case 3:
                                                return g = a.sent(), r.k.error(g, "unable to upload image"), u(new Error(Object(s.d)())), [3, 4];
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
        CS6u: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                o = n("9rZX"),
                i = n("fvjX"),
                l = n("GnwI"),
                s = n("Ue10"),
                c = (n("xefp"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return r.createElement(o, {
                            overlayClassName: "modal__backdrop",
                            className: "modal__content",
                            isOpen: this.props.isOpen,
                            ariaHideApp: !1
                        }, r.createElement(s.Ya, {
                            className: "multiview-modal"
                        }, r.createElement(s.Fb, {
                            className: "multiview-modal__content",
                            padding: 4,
                            margin: {
                                top: 5
                            },
                            background: s.r.Base
                        }, this.props.children)))
                    }, t
                }(r.Component)),
                u = Object(i.compose)(Object(l.b)("MultiviewModal"))(c);
            n.d(t, !1, function() {
                return c
            }), n.d(t, "a", function() {
                return u
            })
        },
        Driw: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                o = n("q1tI"),
                i = n("/7QA"),
                l = n("cZKs"),
                s = n("eJ65"),
                c = n("B+LW"),
                u = n("Ue10");
            ! function(e) {
                e.Edit = "more-balloon__edit", e.Delete = "more-balloon__delete", e.DeleteConfirm = "more-balloon__delete-confirm"
            }(a || (a = {}));
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
                            "data-test-selector": a.Delete
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
                            "data-test-selector": a.DeleteConfirm,
                            onClick: t.onDeleteClick.bind(t, e)
                        }, Object(i.e)("Delete", "MultiviewMoreBalloon")))), o.createElement(l.a, {
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
                    }, o.createElement(s.a, {
                        hideBalloonOnInsideClick: !0
                    }, o.createElement(u.z, {
                        icon: u.ub.More,
                        type: u.F.Text
                    }), o.createElement(u.u, {
                        direction: this.props.last ? u.v.TopRight : u.v.BottomRight,
                        tailOffset: 8
                    }, this.props.onEdit && o.createElement(u.Va, {
                        onClick: this.props.onEdit,
                        "data-test-selector": a.Edit
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
            n.d(t, !1, function() {
                return a
            }), n.d(t, "a", function() {
                return d
            })
        },
        Lxz1: function(e, t, n) {
            "use strict";
            n.d(t, "f", function() {
                return i
            }), n.d(t, "g", function() {
                return l
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "a", function() {
                return u
            }), n.d(t, "d", function() {
                return d
            }), n.d(t, "b", function() {
                return p
            });
            var a, r = n("/7QA"),
                o = n("2/NB"),
                i = function(e, t) {
                    return Object(r.d)("Recommended image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                        imageDimensions: e,
                        imageFileMegabytes: t
                    }, "ImageUploader")
                },
                l = function(e, t) {
                    return Object(r.d)("Required image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                        imageDimensions: e,
                        imageFileMegabytes: t
                    }, "ImageUploader")
                },
                s = function(e) {
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
                m = ((a = {})[o.a.JPEG] = "JPG", a[o.a.PNG] = "PNG", a[o.a.GIF] = "GIF", a),
                p = function(e) {
                    var t = e.map(function(e) {
                        return m[e]
                    });
                    return t.length > 1 && (t[t.length - 1] = "or " + t[t.length - 1]), Object(r.d)("Incompatible format. File must be an image in {allowedTypes} format.", {
                        allowedTypes: t.join(", ")
                    }, "ImageUploader")
                }
        },
        PZVp: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e[e.REQUESTED = 0] = "REQUESTED", e[e.POSTPROCESS_STARTED = 1] = "POSTPROCESS_STARTED", e[e.POSTPROCESS_COMPLETE = 2] = "POSTPROCESS_COMPLETE", e[e.COMPLETE = 3] = "COMPLETE", e[e.VALIDATION_FAILED = 4] = "VALIDATION_FAILED", e[e.POSTPROCESS_FAILED = 5] = "POSTPROCESS_FAILED", e[e.POSTPROCESS_RETRYING = 6] = "POSTPROCESS_RETRYING", e[e.FEATURE_SERVICE_FAILED = 7] = "FEATURE_SERVICE_FAILED", e[e.IS_IMAGE_VALIDATION_FAILED = 110] = "IS_IMAGE_VALIDATION_FAILED", e[e.ASPECT_RATIO_VALIDATION_FAILED = 111] = "ASPECT_RATIO_VALIDATION_FAILED", e[e.WIDTH_VALIDATION_FAILED = 112] = "WIDTH_VALIDATION_FAILED", e[e.HEIGHT_VALIDATION_FAILED = 113] = "HEIGHT_VALIDATION_FAILED", e[e.IMAGE_FORMAT_VALIDATION_FAILED = 114] = "IMAGE_FORMAT_VALIDATION_FAILED", e[e.FILE_SIZE_VALIDATION_FAILED = 120] = "FILE_SIZE_VALIDATION_FAILED", e[e.TRANSFORMATION_FAILED = 210] = "TRANSFORMATION_FAILED", e[e.PROCESSING_FAILED = 220] = "PROCESSING_FAILED"
                }(a || (a = {}))
        },
        hoVs: function(e, t) {
            var n = {
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
            n.loc.source = {
                body: "mutation CreateMultiviewContentAttributeImageUploadConfig($input: CreateMultiviewContentAttributeImageUploadConfigInput!) {\ncreateMultiviewContentAttributeImageUploadConfig(input: $input) {\nuploadID\nuploadURL\nimageURL\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        il7S: function(e, t, n) {
            "use strict";
            var a, r;
            n.d(t, "a", function() {
                    return a
                }), n.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.Group = "group", e.Team = "team", e.Player = "player", e.Role = "role"
                }(a || (a = {})),
                function(e) {
                    e.Group = "Group", e.Team = "Team", e.Player = "Player", e.Role = "Role"
                }(r || (r = {}))
        },
        khW5: function(e, t, n) {},
        qIvo: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                o = n("q1tI"),
                i = n("fvjX"),
                l = n("/7QA"),
                s = n("/ZC1"),
                c = n("yR8l"),
                u = n("geRD"),
                d = n("CDtL"),
                m = n("Ue10"),
                p = n("hoVs"),
                g = (n("khW5"), ["image/*"]);
            ! function(e) {
                e.Container = "content-attribute-image-uploader__test__container", e.InfoText = "content-attribute-image-uploader__test__info-text", e.PreviewImage = "content-attribute-image-uploader__test__preview-image"
            }(a || (a = {}));
            var f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            uploading: !1,
                            imageURL: t.props.existingImageURL
                        }, t.getPreviewImage = function() {
                            var e = null;
                            if (t.state.imageURL) e = o.createElement(m.Ya, null, o.createElement(m.S, {
                                "data-test-selector": a.PreviewImage,
                                src: t.state.imageURL,
                                alt: t.state.imageURL
                            }));
                            else {
                                var n = "";
                                t.state.uploading && (n = "content-attribute-image-uploader__upload-svg--anim-fill"), e = o.createElement(m.Ya, {
                                    className: n
                                }, o.createElement(m.tb, {
                                    "data-test-selector": a.PreviewImage,
                                    asset: m.ub.Upload,
                                    type: m.vb.Alt2,
                                    height: 80,
                                    width: 80
                                }))
                            }
                            return e
                        }, t.onImageInputChange = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, n, a;
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
                                            return n = r.sent(), [4, new d.a(this.getUploadServiceInputFn(n), this.getOnSuccessfulUploadFn(n.imageURL).bind(this)).uploadFile(t)];
                                        case 3:
                                            return r.sent(), [3, 5];
                                        case 4:
                                            return a = r.sent(), this.handleUploadError(a), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t.createImageUploadConfig = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, this.props.createImageUploadConfig(Object(u.a)({
                                                channelID: this.props.channelID
                                            }))];
                                        case 1:
                                            if ((e = n.sent()).data && e.data.createMultiviewContentAttributeImageUploadConfig) return [2, {
                                                uploadID: (t = e.data.createMultiviewContentAttributeImageUploadConfig).uploadID,
                                                uploadURL: t.uploadURL,
                                                imageURL: t.imageURL
                                            }];
                                            throw new Error("Failed to get image upload config")
                                    }
                                })
                            })
                        }, t.getUploadServiceInputFn = function(e) {
                            return function(n) {
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
                        return o.createElement(m.Ya, {
                            className: "content-attribute-image-uploader",
                            display: m.X.InlineBlock,
                            position: m.kb.Relative,
                            textAlign: m.Sb.Left
                        }, o.createElement(m.Ya, {
                            className: "content-attribute-image-uploader__container",
                            "data-test-selector": a.Container,
                            textAlign: m.Sb.Left
                        }, o.createElement(s.a, {
                            allowedFileTypes: g,
                            onFilesSubmitted: this.onImageInputChange
                        }, o.createElement(m.Fb, {
                            display: m.X.Flex,
                            alignItems: m.f.Start
                        }, o.createElement(m.Qa, {
                            className: "content-attribute-image-uploader__preview-image",
                            display: m.X.Flex,
                            margin: 1
                        }, this.getPreviewImage()), o.createElement(m.Ya, {
                            className: "content-attribute-image-uploader__info-text",
                            "data-test-selector": a.InfoText,
                            display: m.X.Flex,
                            flexDirection: m.Aa.Column,
                            flexGrow: 1,
                            textAlign: m.Sb.Left,
                            margin: 1,
                            padding: 2
                        }, o.createElement(m.W, {
                            fontSize: m.Ca.Size5
                        }, Object(l.e)("Drag and drop or select file to upload", "MultiviewContentAttributeImageUploader")), o.createElement(m.W, {
                            fontSize: m.Ca.Size6
                        }, this.props.hintMessage))))))
                    }, t
                }(o.Component),
                b = Object(i.compose)(Object(c.a)(p, {
                    name: "createImageUploadConfig"
                }))(f);
            n.d(t, !1, function() {
                return a
            }), n.d(t, !1, function() {
                return f
            }), n.d(t, "a", function() {
                return b
            })
        },
        sL9O: function(e, t, n) {},
        tgcK: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, r = n("mrSG"),
                o = n("q1tI"),
                i = n("fvjX"),
                l = n("/7QA"),
                s = n("GnwI"),
                c = n("IFXb"),
                u = n("8/mp"),
                d = n("qIvo"),
                m = n("CS6u"),
                p = n("Ue10");
            ! function(e) {
                e.Cancel = "edit-role-modal__cancel", e.Update = "edit-role-modal__update", e.Value = "edit-role-modal__value", e.ValueForm = "edit-role-modal__value-form", e.ImageUploader = "edit-role-modal__image-updloader"
            }(a || (a = {}));
            var g, f = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.uploadingImageURL = function() {
                            n.setState({
                                isUploadingImage: !0
                            })
                        }, n.addImageURL = function(e) {
                            var t = r.__assign({}, n.state.role, {
                                imageURL: e
                            });
                            n.setState({
                                role: t,
                                isUploadingImage: !1
                            })
                        }, n.handleImageUploadFailure = function(e) {
                            l.k.error(e, "Failed to upload image via upload service");
                            var t = Object(l.e)("There was a problem uploading the role icon", "EditRoleModal");
                            n.setState({
                                isUploadingImage: !1,
                                errorMessage: t
                            })
                        }, n.onRoleNameChange = function(e) {
                            var t = e.target.value,
                                a = r.__assign({}, n.state.role, {
                                    value: t
                                });
                            n.setState({
                                role: a
                            })
                        }, n.validRoleName = function() {
                            return !!n.state.role.value
                        }, n.canSave = function() {
                            return !n.state.isSaving && n.validRoleName()
                        }, n.updateRole = function() {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var e, t;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.validRoleName()) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), e = "", n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.props.updateRole(this.state.role)];
                                        case 2:
                                            return n.sent(), [3, 4];
                                        case 3:
                                            return t = n.sent(), l.k.error(t, "Error updating role"), e = Object(l.e)("There was a problem saving this role", "EditRoleModal"), [3, 4];
                                        case 4:
                                            return this.setState({
                                                isSaving: !1,
                                                errorMessage: e
                                            }), [2]
                                    }
                                })
                            })
                        }, n.state = {
                            isUploadingImage: !1,
                            isSaving: !1,
                            errorMessage: "",
                            role: t.role
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.role;
                        return o.createElement(m.a, {
                            isOpen: !0
                        }, o.createElement(p.Fb, {
                            display: p.X.Flex,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            justifyContent: p.Xa.Between,
                            borderBottom: !0
                        }, o.createElement(p.Ya, {
                            flexGrow: 0,
                            flexShrink: 1
                        }, o.createElement(p.W, {
                            type: p.Wb.H3
                        }, Object(l.e)("Edit Role", "EditRoleModal"))), o.createElement(p.Ya, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, o.createElement(p.z, {
                            onClick: this.props.onClose,
                            "data-test-selector": a.Cancel,
                            type: p.F.Text
                        }, Object(l.e)("Cancel", "EditRoleModal")), o.createElement(p.Ya, {
                            margin: {
                                left: 1
                            },
                            display: p.X.InlineBlock
                        }, o.createElement(p.z, {
                            onClick: this.updateRole,
                            "data-test-selector": a.Update,
                            disabled: !this.canSave()
                        }, Object(l.e)("Update", "EditRoleModal"))))), o.createElement(p.Ya, {
                            margin: {
                                y: 1
                            }
                        }, this.state.errorMessage && o.createElement(p.Da, {
                            errorMessage: this.state.errorMessage
                        })), o.createElement(u.b, null, o.createElement(p.Ya, {
                            padding: {
                                right: 2
                            }
                        }, o.createElement(p.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(p.Ea, {
                            id: "role-name",
                            "data-test-selector": a.ValueForm,
                            label: Object(l.e)("Role Name", "EditRoleModal"),
                            error: !this.validRoleName(),
                            errorMessage: Object(l.e)("Invalid Role Name", "EditRoleModal")
                        }, o.createElement(p.Sa, {
                            type: p.Ua.Text,
                            "data-test-selector": a.Value,
                            onChange: this.onRoleNameChange,
                            value: e.value
                        }))), o.createElement(p.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(p.Ea, {
                            label: Object(l.e)("Role Icon", "EditRoleModal"),
                            error: "" !== this.state.errorMessage,
                            errorMessage: this.state.errorMessage
                        }, o.createElement(d.a, {
                            "data-test-selector": a.ImageUploader,
                            channelID: this.props.channelID,
                            onSuccess: this.addImageURL,
                            onLoading: this.uploadingImageURL,
                            onError: this.handleImageUploadFailure,
                            existingImageURL: this.state.role.imageURL,
                            hintMessage: Object(l.e)("Recommended size: 112 x 112, and less than 100kb", "EditRoleModal")
                        }))))))
                    }, t
                }(o.Component),
                b = n("Driw"),
                E = n("il7S");
            ! function(e) {
                e.EmptyList = "roles-tab__empty-list", e.AddRow = "roles-tab__add-row", e.AddButton = "roles-tab__add-button"
            }(g || (g = {}));
            var h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isAddingRole: !1,
                            addingRoleName: "",
                            errorMessage: "",
                            isSaving: !1
                        }, t.filteredRoleContentAttributes = function() {
                            return t.props.availableContentAttributes.filter(function(e) {
                                return e.key === E.a.Role
                            })
                        }, t.renderEditRoleModal = function() {
                            if (t.state.role) return o.createElement(f, {
                                channelID: t.props.channelID,
                                role: t.state.role,
                                onClose: t.closeRoleModal,
                                updateRole: t.updateRole
                            })
                        }, t.startAddingNewRole = function() {
                            t.setState({
                                isAddingRole: !0,
                                addingRoleName: ""
                            })
                        }, t.cancelAddingRole = function() {
                            t.setState({
                                isAddingRole: !1
                            })
                        }, t.editRole = function(e) {
                            t.setState({
                                role: e
                            })
                        }, t.closeRoleModal = function() {
                            t.setState({
                                role: void 0
                            })
                        }, t.onRoleNameChange = function(e) {
                            t.setState({
                                addingRoleName: e.target.value
                            })
                        }, t.validRoleName = function() {
                            return !!t.state.addingRoleName
                        }, t.createRole = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.validRoleName()) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), e = "", n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.props.createContentAttributes([{
                                                key: E.a.Role,
                                                name: E.b.Role,
                                                value: this.state.addingRoleName
                                            }])];
                                        case 2:
                                            return n.sent(), this.setState({
                                                isAddingRole: !1
                                            }), [3, 4];
                                        case 3:
                                            return t = n.sent(), l.k.error(t, "Error creating role"), e = Object(l.e)("There was a problem creating this role", "RolesTab"), [3, 4];
                                        case 4:
                                            return this.setState({
                                                isSaving: !1,
                                                errorMessage: e
                                            }), [2]
                                    }
                                })
                            })
                        }, t.updateRole = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return t = r.__assign({
                                                ownerChannelID: this.props.channelID
                                            }, e), [4, this.props.updateContentAttributes([t])];
                                        case 1:
                                            return n.sent(), this.closeRoleModal(), [2]
                                    }
                                })
                            })
                        }, t.deleteRole = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return r.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 2, , 3]), [4, this.props.deleteContentAttributes([e.id])];
                                        case 1:
                                            return a.sent(), [3, 3];
                                        case 2:
                                            return t = a.sent(), l.k.error(t, "Could not delete role"), n = Object(l.e)("There was a problem deleting this role", "RolesTab"), this.setState({
                                                errorMessage: n
                                            }), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.filteredRoleContentAttributes();
                        return o.createElement(c.a, null, o.createElement(p.Fb, {
                            display: p.X.Flex,
                            justifyContent: p.Xa.Between,
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderBottom: !0
                        }, o.createElement(p.W, {
                            type: p.Wb.H4,
                            bold: !0
                        }, Object(l.e)("Roles", "RolesTab")), o.createElement(p.Ya, null, o.createElement(p.z, {
                            "data-test-selector": g.AddButton,
                            icon: p.ub.Plus,
                            type: p.F.Hollow,
                            onClick: this.startAddingNewRole
                        }, Object(l.e)("Add Role", "RolesTab")))), o.createElement(p.Ya, {
                            margin: {
                                y: 1
                            }
                        }, this.state.errorMessage && o.createElement(p.Da, {
                            errorMessage: this.state.errorMessage
                        })), o.createElement(p.Ya, {
                            display: p.X.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, o.createElement(p.P, {
                            cols: 9,
                            offset: 1
                        }, o.createElement(p.W, {
                            bold: !0,
                            fontSize: p.Ca.Size5
                        }, Object(l.e)("Role Name", "RolesTab"))), o.createElement(p.P, {
                            cols: 2
                        }, o.createElement(p.W, {
                            bold: !0,
                            fontSize: p.Ca.Size5
                        }, Object(l.e)("Last Modified", "RolesTab")))), !t.length && o.createElement(p.W, {
                            "data-test-selector": g.EmptyList,
                            italic: !0
                        }, Object(l.e)("No Roles", "RolesTab")), this.state.isAddingRole && o.createElement(p.Fb, {
                            "data-test-selector": g.AddRow,
                            background: p.r.Base,
                            elevation: 1,
                            alignItems: p.f.Center,
                            justifyContent: p.Xa.Between,
                            display: p.X.Flex,
                            flexDirection: p.Aa.Row,
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(p.Ya, {
                            flexDirection: p.Aa.Column,
                            padding: 2,
                            flexGrow: 1
                        }, o.createElement(p.Sa, {
                            autoFocus: !0,
                            placeholder: Object(l.e)("Add Role Name", "RolesTab"),
                            onChange: this.onRoleNameChange,
                            type: p.Ua.Text,
                            value: this.state.addingRoleName
                        })), o.createElement(p.z, {
                            type: p.F.Hollow,
                            onClick: this.cancelAddingRole
                        }, Object(l.e)("Cancel", "RolesTab")), o.createElement(p.Ya, {
                            margin: {
                                x: 1
                            },
                            display: p.X.InlineBlock
                        }, o.createElement(p.z, {
                            disabled: !this.validRoleName() || this.state.isSaving,
                            onClick: this.createRole
                        }, Object(l.e)("Save", "RolesTab")))), t.map(function(n, a) {
                            return o.createElement(p.Fb, {
                                background: p.r.Base,
                                elevation: 1,
                                alignItems: p.f.Center,
                                justifyContent: p.Xa.Between,
                                display: p.X.Flex,
                                flexDirection: p.Aa.Row,
                                margin: {
                                    bottom: 1
                                },
                                padding: 2,
                                key: a
                            }, o.createElement(p.P, {
                                cols: 1
                            }, n.imageURL && o.createElement(p.q, {
                                src: n.imageURL,
                                alt: n.value,
                                size: 30
                            })), o.createElement(p.P, {
                                cols: 9
                            }, o.createElement(p.W, {
                                fontSize: p.Ca.Size5
                            }, n.value)), o.createElement(p.P, {
                                cols: 2
                            }, o.createElement(p.Ya, {
                                display: p.X.Flex,
                                alignItems: p.f.Center
                            }, o.createElement(p.Ya, {
                                flexGrow: 1
                            }, n.updatedAt && o.createElement(p.W, {
                                fontSize: p.Ca.Size5
                            }, Object(l.c)(new Date(n.updatedAt), "medium"))), o.createElement(b.a, {
                                onEdit: e.editRole.bind(e, n),
                                onDelete: e.deleteRole.bind(e, n),
                                deleteModalMessage: Object(l.e)("Are you sure you want to delete role: {value}?", {
                                    value: n.value
                                }, "RolesTab"),
                                last: a === t.length - 1
                            }))))
                        }), this.renderEditRoleModal())
                    }, t
                }(o.Component),
                I = Object(i.compose)(Object(s.b)("RolesTab"))(h);
            n.d(t, "TestSelectors", function() {
                return g
            }), n.d(t, "RolesTabComponent", function() {
                return h
            }), n.d(t, "RolesTab", function() {
                return I
            })
        },
        xefp: function(e, t, n) {}
    }
]);