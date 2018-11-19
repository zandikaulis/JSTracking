(window.webpackJsonp = window.webpackJsonp || []).push([
    [150], {
        "/ZC1": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return o
            });
            var n = a("mrSG"),
                r = a("q1tI"),
                i = a("Ue10"),
                o = (a("sL9O"), function(e) {
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
                        return r.createElement(i.Z, {
                            dragOver: this.state.isDraggingOver,
                            error: this.props.error
                        }, r.createElement(i.Qa, {
                            position: i.kb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: i.jc.Above
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
                i = a("/MKj"),
                o = a("fvjX"),
                l = a("aCAx"),
                s = function(e) {
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
            var u = Object(i.connect)(null, function(e) {
                return Object(o.bindActionCreators)({
                    showModal: l.d,
                    closeModal: l.c
                }, e)
            })(s);
            a.d(t, "a", function() {
                return u
            })
        },
        CDtL: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return c
            });
            var n = a("mrSG"),
                r = a("/7QA"),
                i = a("PZVp"),
                o = a("/aPz"),
                l = a("2/NB"),
                s = a("Lxz1"),
                u = 1e4,
                c = function() {
                    return function(e, t) {
                        var a = this;
                        this.getUploadURL = e, this.onFinishUploading = t, this.uploadFile = function(e) {
                            return new Promise(function(t, c) {
                                return n.__awaiter(a, void 0, void 0, function() {
                                    var a, m, d, p, g, f = this;
                                    return n.__generator(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return n.trys.push([0, 3, , 4]), [4, this.getUploadURL(e)];
                                            case 1:
                                                return a = n.sent(), m = a.url, d = a.uploadID, [4, fetch(m, {
                                                    body: e,
                                                    method: "PUT"
                                                })];
                                            case 2:
                                                return (p = n.sent()).status > 300 && c(new Error(Object(s.e)(p.status))), this.unsubscribe = r.l.subscribe({
                                                    topic: Object(o.D)(d),
                                                    success: function() {
                                                        f.timeoutID = setTimeout(function() {
                                                            f.unsubscribe(), c(new Error(Object(s.d)()))
                                                        }, u)
                                                    },
                                                    failure: function() {
                                                        clearTimeout(f.timeoutID), c(new Error(Object(s.d)()))
                                                    },
                                                    onMessage: function(e) {
                                                        if (e.upload_id === d) {
                                                            switch (clearTimeout(f.timeoutID), e.status) {
                                                                case i.a.POSTPROCESS_COMPLETE:
                                                                    f.onFinishUploading && f.onFinishUploading(), t();
                                                                    break;
                                                                case i.a.WIDTH_VALIDATION_FAILED:
                                                                case i.a.HEIGHT_VALIDATION_FAILED:
                                                                    c(new Error(Object(s.c)()));
                                                                    break;
                                                                case i.a.FILE_SIZE_VALIDATION_FAILED:
                                                                    c(new Error(Object(s.a)()));
                                                                    break;
                                                                case i.a.IS_IMAGE_VALIDATION_FAILED:
                                                                    c(new Error(Object(s.b)(l.b)));
                                                                    break;
                                                                default:
                                                                    c(new Error(Object(s.d)()))
                                                            }
                                                            f.unsubscribe && f.unsubscribe()
                                                        }
                                                    }
                                                }), [3, 4];
                                            case 3:
                                                return g = n.sent(), r.k.error(g, "unable to upload image"), c(new Error(Object(s.d)())), [3, 4];
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
                i = a("9rZX"),
                o = a("fvjX"),
                l = a("GnwI"),
                s = a("Ue10"),
                u = (a("xefp"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return r.createElement(i, {
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
                c = Object(o.compose)(Object(l.b)("MultiviewModal"))(u);
            a.d(t, !1, function() {
                return u
            }), a.d(t, "a", function() {
                return c
            })
        },
        Driw: function(e, t, a) {
            "use strict";
            var n, r = a("mrSG"),
                i = a("q1tI"),
                o = a("/7QA"),
                l = a("cZKs"),
                s = a("eJ65"),
                u = a("B+LW"),
                c = a("Ue10");
            ! function(e) {
                e.Edit = "more-balloon__edit", e.Delete = "more-balloon__delete", e.DeleteConfirm = "more-balloon__delete-confirm"
            }(n || (n = {}));
            var m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDeleteButton = function() {
                        if (t.props.onDelete) return t.props.deleteModalMessage ? i.createElement(u.a, {
                            triggerModal: t.renderDeleteModal
                        }, t.renderBaseDeleteButton) : t.renderBaseDeleteButton(t.props.onDelete)
                    }, t.renderBaseDeleteButton = function(e) {
                        return i.createElement(c.Va, {
                            onClick: e,
                            "data-test-selector": n.Delete
                        }, i.createElement(c.Ya, {
                            className: "more-balloon__balloon-item",
                            padding: {
                                x: 1,
                                y: 1
                            },
                            display: c.X.Flex,
                            alignItems: c.f.Center
                        }, i.createElement(c.tb, {
                            asset: c.ub.Trash,
                            type: c.vb.Brand
                        }), i.createElement(c.Ya, {
                            margin: {
                                left: 1
                            }
                        }, Object(o.e)("Delete", "MultiviewMoreBalloon"))))
                    }, t.renderDeleteModal = function(e) {
                        if (t.props.deleteModalMessage) return i.createElement(c.Fb, {
                            background: c.r.Base,
                            className: "multiview-more-balloon__delete-prompt",
                            elevation: 3
                        }, i.createElement(c.Fb, {
                            borderBottom: !0,
                            display: c.X.Flex,
                            justifyContent: c.Xa.Center,
                            padding: 2
                        }, i.createElement(c.W, {
                            bold: !0,
                            fontSize: c.Ca.Size4
                        }, t.props.deleteModalMessage)), i.createElement(c.Fb, {
                            background: c.r.Alt,
                            display: c.X.Flex,
                            justifyContent: c.Xa.Center,
                            padding: 2
                        }, i.createElement(c.Ya, {
                            margin: {
                                right: .5
                            }
                        }, i.createElement(c.z, {
                            onClick: e,
                            type: c.F.Hollow
                        }, Object(o.e)("Cancel", "MultiviewMoreBalloon"))), i.createElement(c.Ya, {
                            margin: {
                                left: 1
                            }
                        }, i.createElement(c.z, {
                            "data-test-selector": n.DeleteConfirm,
                            onClick: t.onDeleteClick.bind(t, e)
                        }, Object(o.e)("Delete", "MultiviewMoreBalloon")))), i.createElement(l.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t.onDeleteClick = function(e) {
                        t.props.onDelete && t.props.onDelete(), e()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(c.Ya, {
                        margin: {
                            right: .5
                        }
                    }, i.createElement(s.a, null, i.createElement(c.z, {
                        icon: c.ub.More,
                        type: c.F.Text
                    }), i.createElement(c.u, {
                        direction: this.props.last ? c.v.TopRight : c.v.BottomRight,
                        tailOffset: 8
                    }, this.props.onEdit && i.createElement(c.Va, {
                        onClick: this.props.onEdit,
                        "data-test-selector": n.Edit
                    }, i.createElement(c.Ya, {
                        className: "more-balloon__balloon-item",
                        padding: {
                            x: 1,
                            y: 1
                        },
                        display: c.X.Flex,
                        alignItems: c.f.Center
                    }, i.createElement(c.tb, {
                        asset: c.ub.Edit,
                        type: c.vb.Brand
                    }), i.createElement(c.Ya, {
                        margin: {
                            left: 1
                        }
                    }, Object(o.e)("Edit", "MultiviewMoreBalloon")))), this.renderDeleteButton())))
                }, t
            }(i.Component);
            a.d(t, !1, function() {
                return n
            }), a.d(t, "a", function() {
                return m
            })
        },
        Lxz1: function(e, t, a) {
            "use strict";
            a.d(t, "f", function() {
                return o
            }), a.d(t, "g", function() {
                return l
            }), a.d(t, "e", function() {
                return s
            }), a.d(t, "c", function() {
                return u
            }), a.d(t, "a", function() {
                return c
            }), a.d(t, "d", function() {
                return m
            }), a.d(t, "b", function() {
                return p
            });
            var n, r = a("/7QA"),
                i = a("2/NB"),
                o = function(e, t) {
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
                u = function() {
                    return Object(r.d)("The provided image does not have the required dimensions.", "ImageUploader")
                },
                c = function() {
                    return Object(r.d)("File too large.", "ImageUploader")
                },
                m = function() {
                    return Object(r.d)("Unexpected error while uploading your image. Please try again later", "ImageUploader")
                },
                d = ((n = {})[i.a.JPEG] = "JPG", n[i.a.PNG] = "PNG", n[i.a.GIF] = "GIF", n),
                p = function(e) {
                    var t = e.map(function(e) {
                        return d[e]
                    });
                    return t.length > 1 && (t[t.length - 1] = "or " + t[t.length - 1]), Object(r.d)("Incompatible format. File must be an image in {allowedTypes} format.", {
                        allowedTypes: t.join(", ")
                    }, "ImageUploader")
                }
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
        khW5: function(e, t, a) {},
        sL9O: function(e, t, a) {},
        vD5X: function(e, t, a) {
            "use strict";
            a.r(t);
            var n, r = a("mrSG"),
                i = a("q1tI"),
                o = a("fvjX"),
                l = a("/7QA"),
                s = a("GnwI"),
                u = a("IFXb"),
                c = a("8/mp"),
                m = a("/ZC1"),
                d = a("yR8l"),
                p = a("geRD"),
                g = a("CDtL"),
                f = a("Ue10"),
                b = a("hoVs"),
                E = (a("khW5"), ["image/*"]);
            ! function(e) {
                e.Container = "content-attribute-image-uploader__test__container", e.InfoText = "content-attribute-image-uploader__test__info-text", e.PreviewImage = "content-attribute-image-uploader__test__preview-image"
            }(n || (n = {}));
            var h, I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            uploading: !1,
                            imageURL: t.props.existingImageURL
                        }, t.getPreviewImage = function() {
                            var e = null;
                            if (t.state.imageURL) e = i.createElement(f.Ya, null, i.createElement(f.S, {
                                "data-test-selector": n.PreviewImage,
                                src: t.state.imageURL,
                                alt: t.state.imageURL
                            }));
                            else {
                                var a = "";
                                t.state.uploading && (a = "content-attribute-image-uploader__upload-svg--anim-fill"), e = i.createElement(f.Ya, {
                                    className: a
                                }, i.createElement(f.tb, {
                                    "data-test-selector": n.PreviewImage,
                                    asset: f.ub.Upload,
                                    type: f.vb.Alt2,
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
                                            return a = r.sent(), [4, new g.a(this.getUploadServiceInputFn(a), this.getOnSuccessfulUploadFn(a.imageURL).bind(this)).uploadFile(t)];
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
                                            return [4, this.props.createImageUploadConfig(Object(p.a)({
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
                        return i.createElement(f.Ya, {
                            className: "content-attribute-image-uploader",
                            display: f.X.InlineBlock,
                            position: f.kb.Relative,
                            textAlign: f.Sb.Left
                        }, i.createElement(f.Ya, {
                            className: "content-attribute-image-uploader__container",
                            "data-test-selector": n.Container,
                            textAlign: f.Sb.Left
                        }, i.createElement(m.a, {
                            allowedFileTypes: E,
                            onFilesSubmitted: this.onImageInputChange
                        }, i.createElement(f.Fb, {
                            display: f.X.Flex,
                            alignItems: f.f.Start
                        }, i.createElement(f.Qa, {
                            className: "content-attribute-image-uploader__preview-image",
                            display: f.X.Flex,
                            margin: 1
                        }, this.getPreviewImage()), i.createElement(f.Ya, {
                            className: "content-attribute-image-uploader__info-text",
                            "data-test-selector": n.InfoText,
                            display: f.X.Flex,
                            flexDirection: f.Aa.Column,
                            flexGrow: 1,
                            textAlign: f.Sb.Left,
                            margin: 1,
                            padding: 2
                        }, i.createElement(f.W, {
                            fontSize: f.Ca.Size5
                        }, Object(l.e)("Drag and drop or select file to upload", "MultiviewContentAttributeImageUploader")), i.createElement(f.W, {
                            fontSize: f.Ca.Size6
                        }, this.props.hintMessage))))))
                    }, t
                }(i.Component),
                v = Object(o.compose)(Object(d.a)(b, {
                    name: "createImageUploadConfig"
                }))(I),
                _ = a("CS6u"),
                T = a("il7S");
            ! function(e) {
                e.Cancel = "edit-team-modal__cancel", e.Save = "edit-team-modal__save", e.Value = "edit-team-modal__value", e.ValueForm = "edit-team-modal__value-form", e.ImageUploader = "edit-team-modal__image-uploader"
            }(h || (h = {}));
            var S, D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isSaving: !1,
                            isUploadingImage: !1,
                            errorMessage: "",
                            team: {
                                __typename: "MultiviewContentAttribute",
                                id: "",
                                key: T.a.Team,
                                name: T.b.Team,
                                parentID: null,
                                parentKey: null,
                                value: "",
                                valueShortName: "",
                                imageURL: "",
                                createdAt: "",
                                updatedAt: ""
                            }
                        }, t.onTeamNameChange = function(e) {
                            var a = e.target.value,
                                n = r.__assign({}, t.state.team, {
                                    value: a
                                });
                            t.setState({
                                team: n
                            })
                        }, t.validTeamName = function() {
                            return !!t.state.team.value
                        }, t.canSave = function() {
                            return !t.state.isSaving && !t.state.isUploadingImage && t.validTeamName()
                        }, t.onSave = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return r.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.validTeamName()) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), e = "", a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.onSave(this.state.team)];
                                        case 2:
                                            return a.sent(), [3, 4];
                                        case 3:
                                            return t = a.sent(), l.k.error(t, "Error updating team"), e = Object(l.e)("There was a problem saving this team", "EditTeamModal"), [3, 4];
                                        case 4:
                                            return this.setState({
                                                isSaving: !1,
                                                errorMessage: e
                                            }), [2]
                                    }
                                })
                            })
                        }, t.uploadingImageURL = function() {
                            t.setState({
                                isUploadingImage: !0
                            })
                        }, t.addImageURL = function(e) {
                            var a = r.__assign({}, t.state.team, {
                                imageURL: e
                            });
                            t.setState({
                                team: a,
                                isUploadingImage: !1
                            })
                        }, t.handleImageUploadFailure = function(e) {
                            l.k.error(e, "Failed to upload image via upload service");
                            var a = Object(l.e)("There was a problem uploading the team icon", "EditTeamModal");
                            t.setState({
                                isUploadingImage: !1,
                                errorMessage: a
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.team && this.setState({
                            team: this.props.team
                        })
                    }, t.prototype.render = function() {
                        var e = this.state.team;
                        return i.createElement(_.a, {
                            isOpen: !0
                        }, i.createElement(f.Ya, {
                            className: "edit-team-modal"
                        }, i.createElement(f.Fb, {
                            display: f.X.Flex,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            justifyContent: f.Xa.Between,
                            borderBottom: !0
                        }, i.createElement(f.Ya, {
                            flexGrow: 0,
                            flexShrink: 1
                        }, i.createElement(f.W, {
                            type: f.Wb.H3
                        }, Object(l.e)("Edit Team", "EditTeamModal"))), i.createElement(f.Ya, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, i.createElement(f.z, {
                            onClick: this.props.onClose,
                            "data-test-selector": h.Cancel,
                            type: f.F.Text
                        }, Object(l.e)("Cancel", "EditTeamModal")), i.createElement(f.Ya, {
                            margin: {
                                left: 1
                            },
                            display: f.X.InlineBlock
                        }, i.createElement(f.z, {
                            onClick: this.onSave,
                            "data-test-selector": h.Save,
                            disabled: !this.canSave()
                        }, Object(l.e)("Save", "EditTeamModal"))))), i.createElement(c.b, null, i.createElement(f.Ya, null, i.createElement(f.Ya, {
                            padding: {
                                right: 2
                            },
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(f.Ea, {
                            id: "team-name",
                            "data-test-selector": h.ValueForm,
                            label: Object(l.e)("Team Name", "EditTeamModal"),
                            error: !this.validTeamName(),
                            errorMessage: Object(l.e)("Must provide a team name", "EditTeamModal")
                        }, i.createElement(f.Ya, {
                            className: "edit-team-modal__team-name-input"
                        }, i.createElement(f.Sa, {
                            type: f.Ua.Text,
                            "data-test-selector": h.Value,
                            onChange: this.onTeamNameChange,
                            value: e.value
                        })))), i.createElement(f.Ya, {
                            padding: {
                                right: 2
                            }
                        }, i.createElement(f.Ea, {
                            label: Object(l.e)("Team Icon", "EditTeamModal")
                        }, i.createElement(v, {
                            "data-test-selector": h.ImageUploader,
                            channelID: this.props.channelID,
                            onSuccess: this.addImageURL,
                            onLoading: this.uploadingImageURL,
                            onError: this.handleImageUploadFailure,
                            existingImageURL: this.state.team.imageURL,
                            hintMessage: Object(l.e)("Recommended size: 112 x 112, and less than 100kb", "EditTeamModal")
                        })), this.state.errorMessage && i.createElement(f.Da, {
                            errorMessage: this.state.errorMessage
                        }))))))
                    }, t
                }(i.Component),
                A = a("Driw");
            (S || (S = {})).EmptyList = "teams-tab__empty-list";
            var C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isAddingTeam: !1,
                            errorMessage: "",
                            isSaving: !1
                        }, t.filteredTeamContentAttributes = function() {
                            return t.props.availableContentAttributes.filter(function(e) {
                                return e.key === T.a.Team
                            })
                        }, t.renderCreateTeamModal = function() {
                            if (t.state.isAddingTeam) return i.createElement(D, {
                                channelID: t.props.channelID,
                                team: null,
                                onClose: t.cancelAddingTeam,
                                onSave: t.createTeam
                            })
                        }, t.renderEditTeamModal = function() {
                            if (t.state.team) return i.createElement(D, {
                                channelID: t.props.channelID,
                                team: t.state.team,
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
                        }, t.createTeam = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, a, n;
                                return r.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (!this.validTeamName(e)) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), t = "", i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), a = r.__assign({
                                                ownerChannelID: this.props.channelID
                                            }, e), [4, this.props.createContentAttributes([a])];
                                        case 2:
                                            return i.sent(), this.cancelAddingTeam(), [3, 4];
                                        case 3:
                                            return n = i.sent(), l.k.error(n, "Error creating team"), t = Object(l.e)("There was a problem creating this team", "TeamsTab"), [3, 4];
                                        case 4:
                                            return this.setState({
                                                isSaving: !1,
                                                errorMessage: t
                                            }), this.closeTeamModal(), [2]
                                    }
                                })
                            })
                        }, t.updateTeam = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, a, n;
                                return r.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (!this.validTeamName(e)) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), t = "", i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), a = r.__assign({
                                                ownerChannelID: this.props.channelID
                                            }, e), [4, this.props.updateContentAttributes([a])];
                                        case 2:
                                            return i.sent(), [3, 4];
                                        case 3:
                                            return n = i.sent(), l.k.error(n, "Error updating team"), t = Object(l.e)("There was a problem updating this team", "TeamsTab"), [3, 4];
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
                                            return n.trys.push([0, 2, , 3]), [4, this.props.deleteContentAttributes([e.id])];
                                        case 1:
                                            return n.sent(), [3, 3];
                                        case 2:
                                            return t = n.sent(), l.k.error(t, "Could not delete team"), a = Object(l.e)("There was a problem deleting this team", "TeamsTab"), this.setState({
                                                errorMessage: a
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
                            t = this.filteredTeamContentAttributes(),
                            a = f.Ca.Size5,
                            n = f.Ca.Size5;
                        return i.createElement(u.a, null, i.createElement(f.Fb, {
                            display: f.X.Flex,
                            justifyContent: f.Xa.Between,
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderBottom: !0
                        }, i.createElement(f.W, {
                            type: f.Wb.H4,
                            bold: !0
                        }, Object(l.e)("Teams", "TeamsTab")), i.createElement(f.Ya, null, i.createElement(f.z, {
                            icon: f.ub.Plus,
                            type: f.F.Hollow,
                            onClick: this.startAddingNewTeam
                        }, Object(l.e)("Add Team", "TeamsTab")))), i.createElement(f.Ya, null, i.createElement(f.Ya, {
                            display: f.X.Flex,
                            flexGrow: 1,
                            padding: {
                                left: 2,
                                right: 0,
                                y: 1
                            }
                        }, i.createElement(f.P, {
                            cols: 5,
                            offset: 1
                        }, i.createElement(f.W, {
                            bold: !0,
                            fontSize: a
                        }, Object(l.e)("Team Name", "TeamsTab"))), i.createElement(f.P, {
                            cols: 4
                        }, i.createElement(f.W, {
                            bold: !0,
                            fontSize: a
                        }, Object(l.e)("Roster", "TeamsTab"))), i.createElement(f.P, {
                            cols: 2
                        }, i.createElement(f.W, {
                            bold: !0,
                            fontSize: a
                        }, Object(l.e)("Last Modified", "TeamsTab"))))), !t.length && i.createElement(f.W, {
                            "data-test-selector": S.EmptyList,
                            italic: !0
                        }, Object(l.e)("No Teams", "TeamsTab")), t.map(function(a, r) {
                            return i.createElement(f.Fb, {
                                background: f.r.Base,
                                elevation: 1,
                                alignItems: f.f.Center,
                                justifyContent: f.Xa.Between,
                                display: f.X.Flex,
                                margin: {
                                    bottom: 1
                                },
                                key: r
                            }, i.createElement(f.Ya, {
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
                            }, i.createElement(f.P, {
                                cols: 1
                            }, a.imageURL && i.createElement(f.q, {
                                src: a.imageURL,
                                alt: a.value,
                                size: 30
                            })), i.createElement(f.P, {
                                cols: 5
                            }, i.createElement(f.W, {
                                fontSize: n
                            }, a.value)), i.createElement(f.P, {
                                cols: 4
                            }, i.createElement(f.W, {
                                fontSize: n
                            }, Object(l.e)("0 player", "TeamsTab"))), i.createElement(f.P, {
                                cols: 2
                            }, i.createElement(f.Ya, {
                                display: f.X.Flex,
                                alignItems: f.f.Center
                            }, i.createElement(f.Ya, {
                                flexGrow: 1
                            }, a.updatedAt && i.createElement(f.W, {
                                fontSize: n
                            }, Object(l.c)(new Date(a.updatedAt), "medium"))), i.createElement(f.Ya, {
                                flexGrow: 0
                            }, i.createElement(A.a, {
                                onEdit: e.editTeam.bind(e, a),
                                onDelete: e.deleteTeam.bind(e, a),
                                deleteModalMessage: Object(l.e)("Are you sure you want to delete team: {value}?", {
                                    value: a.value
                                }, "TeamsTab"),
                                last: r === t.length - 1
                            }))))))
                        }), this.renderCreateTeamModal(), this.renderEditTeamModal())
                    }, t
                }(i.Component),
                O = Object(o.compose)(Object(s.b)("TeamsTab"))(C);
            a.d(t, "TestSelectors", function() {
                return S
            }), a.d(t, "TeamsTabComponent", function() {
                return C
            }), a.d(t, "TeamsTab", function() {
                return O
            })
        },
        xefp: function(e, t, a) {}
    }
]);