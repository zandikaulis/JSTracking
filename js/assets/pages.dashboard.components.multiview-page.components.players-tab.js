(window.webpackJsonp = window.webpackJsonp || []).push([
    [155], {
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
            var c = Object(i.connect)(null, function(e) {
                return Object(o.bindActionCreators)({
                    showModal: l.d,
                    closeModal: l.c
                }, e)
            })(s);
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
                i = a("PZVp"),
                o = a("/aPz"),
                l = a("2/NB"),
                s = a("Lxz1"),
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
                                                return (m = n.sent()).status > 300 && u(new Error(Object(s.e)(m.status))), this.unsubscribe = r.l.subscribe({
                                                    topic: Object(o.D)(p),
                                                    success: function() {
                                                        f.timeoutID = setTimeout(function() {
                                                            f.unsubscribe(), u(new Error(Object(s.d)()))
                                                        }, c)
                                                    },
                                                    failure: function() {
                                                        clearTimeout(f.timeoutID), u(new Error(Object(s.d)()))
                                                    },
                                                    onMessage: function(e) {
                                                        if (e.upload_id === p) {
                                                            switch (clearTimeout(f.timeoutID), e.status) {
                                                                case i.a.POSTPROCESS_COMPLETE:
                                                                    f.onFinishUploading && f.onFinishUploading(), t();
                                                                    break;
                                                                case i.a.WIDTH_VALIDATION_FAILED:
                                                                case i.a.HEIGHT_VALIDATION_FAILED:
                                                                    u(new Error(Object(s.c)()));
                                                                    break;
                                                                case i.a.FILE_SIZE_VALIDATION_FAILED:
                                                                    u(new Error(Object(s.a)()));
                                                                    break;
                                                                case i.a.IS_IMAGE_VALIDATION_FAILED:
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
                                                return g = n.sent(), r.k.error(g, "unable to upload image"), u(new Error(Object(s.d)())), [3, 4];
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
                c = (a("xefp"), function(e) {
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
                u = Object(o.compose)(Object(l.b)("MultiviewModal"))(c);
            a.d(t, !1, function() {
                return c
            }), a.d(t, "a", function() {
                return u
            })
        },
        Driw: function(e, t, a) {
            "use strict";
            var n, r = a("mrSG"),
                i = a("q1tI"),
                o = a("/7QA"),
                l = a("cZKs"),
                s = a("eJ65"),
                c = a("B+LW"),
                u = a("Ue10");
            ! function(e) {
                e.Edit = "more-balloon__edit", e.Delete = "more-balloon__delete", e.DeleteConfirm = "more-balloon__delete-confirm"
            }(n || (n = {}));
            var d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDeleteButton = function() {
                        if (t.props.onDelete) return t.props.deleteModalMessage ? i.createElement(c.a, {
                            triggerModal: t.renderDeleteModal
                        }, t.renderBaseDeleteButton) : t.renderBaseDeleteButton(t.props.onDelete)
                    }, t.renderBaseDeleteButton = function(e) {
                        return i.createElement(u.Va, {
                            onClick: e,
                            "data-test-selector": n.Delete
                        }, i.createElement(u.Ya, {
                            className: "more-balloon__balloon-item",
                            padding: {
                                x: 1,
                                y: 1
                            },
                            display: u.X.Flex,
                            alignItems: u.f.Center
                        }, i.createElement(u.tb, {
                            asset: u.ub.Trash,
                            type: u.vb.Brand
                        }), i.createElement(u.Ya, {
                            margin: {
                                left: 1
                            }
                        }, Object(o.e)("Delete", "MultiviewMoreBalloon"))))
                    }, t.renderDeleteModal = function(e) {
                        if (t.props.deleteModalMessage) return i.createElement(u.Fb, {
                            background: u.r.Base,
                            className: "multiview-more-balloon__delete-prompt",
                            elevation: 3
                        }, i.createElement(u.Fb, {
                            borderBottom: !0,
                            display: u.X.Flex,
                            justifyContent: u.Xa.Center,
                            padding: 2
                        }, i.createElement(u.W, {
                            bold: !0,
                            fontSize: u.Ca.Size4
                        }, t.props.deleteModalMessage)), i.createElement(u.Fb, {
                            background: u.r.Alt,
                            display: u.X.Flex,
                            justifyContent: u.Xa.Center,
                            padding: 2
                        }, i.createElement(u.Ya, {
                            margin: {
                                right: .5
                            }
                        }, i.createElement(u.z, {
                            onClick: e,
                            type: u.F.Hollow
                        }, Object(o.e)("Cancel", "MultiviewMoreBalloon"))), i.createElement(u.Ya, {
                            margin: {
                                left: 1
                            }
                        }, i.createElement(u.z, {
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
                    return i.createElement(u.Ya, {
                        margin: {
                            right: .5
                        }
                    }, i.createElement(s.a, {
                        hideBalloonOnInsideClick: !0
                    }, i.createElement(u.z, {
                        icon: u.ub.More,
                        type: u.F.Text
                    }), i.createElement(u.u, {
                        direction: this.props.last ? u.v.TopRight : u.v.BottomRight,
                        tailOffset: 8
                    }, this.props.onEdit && i.createElement(u.Va, {
                        onClick: this.props.onEdit,
                        "data-test-selector": n.Edit
                    }, i.createElement(u.Ya, {
                        className: "more-balloon__balloon-item",
                        padding: {
                            x: 1,
                            y: 1
                        },
                        display: u.X.Flex,
                        alignItems: u.f.Center
                    }, i.createElement(u.tb, {
                        asset: u.ub.Edit,
                        type: u.vb.Brand
                    }), i.createElement(u.Ya, {
                        margin: {
                            left: 1
                        }
                    }, Object(o.e)("Edit", "MultiviewMoreBalloon")))), this.renderDeleteButton())))
                }, t
            }(i.Component);
            a.d(t, !1, function() {
                return n
            }), a.d(t, "a", function() {
                return d
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
                return c
            }), a.d(t, "a", function() {
                return u
            }), a.d(t, "d", function() {
                return d
            }), a.d(t, "b", function() {
                return m
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
                c = function() {
                    return Object(r.d)("The provided image does not have the required dimensions.", "ImageUploader")
                },
                u = function() {
                    return Object(r.d)("File too large.", "ImageUploader")
                },
                d = function() {
                    return Object(r.d)("Unexpected error while uploading your image. Please try again later", "ImageUploader")
                },
                p = ((n = {})[i.a.JPEG] = "JPG", n[i.a.PNG] = "PNG", n[i.a.GIF] = "GIF", n),
                m = function(e) {
                    var t = e.map(function(e) {
                        return p[e]
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
        iw5t: function(e, t, a) {
            "use strict";
            a.r(t);
            var n, r = a("mrSG"),
                i = a("q1tI"),
                o = a("fvjX"),
                l = a("/7QA"),
                s = a("GnwI"),
                c = a("IFXb"),
                u = a("8/mp"),
                d = a("qIvo"),
                p = a("CS6u"),
                m = a("Ue10");
            ! function(e) {
                e.Cancel = "edit-player-modal__cancel", e.Update = "edit-player-modal__update", e.Value = "edit-player-modal__value", e.ValueForm = "edit-player-modal__value-form", e.ImageUploader = "edit-player-modal__image-uploader"
            }(n || (n = {}));
            var g, f = function(e) {
                    function t(t) {
                        var a = e.call(this, t) || this;
                        return a.uploadingImageURL = function() {
                            a.setState({
                                isUploadingImage: !0
                            })
                        }, a.addImageURL = function(e) {
                            var t = r.__assign({}, a.state.player, {
                                imageURL: e
                            });
                            a.setState({
                                player: t,
                                isUploadingImage: !1
                            })
                        }, a.handleImageUploadFailure = function(e) {
                            l.k.error(e, "Failed to upload image via upload service");
                            var t = Object(l.e)("There was a problem uploading the player icon", "EditPlayerModal");
                            a.setState({
                                isUploadingImage: !1,
                                errorMessage: t
                            })
                        }, a.onPlayerNameChange = function(e) {
                            var t = e.target.value,
                                n = r.__assign({}, a.state.player, {
                                    value: t
                                });
                            a.setState({
                                player: n
                            })
                        }, a.validPlayerName = function() {
                            return !!a.state.player.value
                        }, a.canSave = function() {
                            return !a.state.isSaving && a.validPlayerName()
                        }, a.updatePlayer = function() {
                            return r.__awaiter(a, void 0, void 0, function() {
                                var e, t;
                                return r.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.validPlayerName()) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), e = "", a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.updatePlayer(this.state.player)];
                                        case 2:
                                            return a.sent(), [3, 4];
                                        case 3:
                                            return t = a.sent(), l.k.error(t, "Error updating player"), e = Object(l.e)("There was a problem saving this player", "EditPlayerModal"), [3, 4];
                                        case 4:
                                            return this.setState({
                                                isSaving: !1,
                                                errorMessage: e
                                            }), [2]
                                    }
                                })
                            })
                        }, a.state = {
                            isUploadingImage: !1,
                            isSaving: !1,
                            errorMessage: "",
                            player: t.player
                        }, a
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.player;
                        return i.createElement(p.a, {
                            isOpen: !0
                        }, i.createElement(m.Fb, {
                            display: m.X.Flex,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            justifyContent: m.Xa.Between,
                            borderBottom: !0
                        }, i.createElement(m.Ya, {
                            flexGrow: 0,
                            flexShrink: 1
                        }, i.createElement(m.W, {
                            type: m.Wb.H3
                        }, Object(l.e)("Edit Player", "EditPlayerModal"))), i.createElement(m.Ya, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, i.createElement(m.z, {
                            onClick: this.props.onClose,
                            "data-test-selector": n.Cancel,
                            type: m.F.Text
                        }, Object(l.e)("Cancel", "EditPlayerModal")), i.createElement(m.Ya, {
                            margin: {
                                left: 1
                            },
                            display: m.X.InlineBlock
                        }, i.createElement(m.z, {
                            onClick: this.updatePlayer,
                            "data-test-selector": n.Update,
                            disabled: !this.canSave()
                        }, Object(l.e)("Update", "EditPlayerModal"))))), i.createElement(m.Ya, {
                            margin: {
                                y: 1
                            }
                        }, this.state.errorMessage && i.createElement(m.Da, {
                            errorMessage: this.state.errorMessage
                        })), i.createElement(u.b, null, i.createElement(m.Ya, {
                            padding: {
                                right: 2
                            }
                        }, i.createElement(m.Ya, {
                            padding: {
                                bottom: 2
                            }
                        }, i.createElement(m.Ea, {
                            id: "player-name",
                            "data-test-selector": n.ValueForm,
                            label: Object(l.e)("Player Name", "EditPlayerModal"),
                            error: !this.validPlayerName(),
                            errorMessage: Object(l.e)("Invalid Player Name", "EditPlayerModal")
                        }, i.createElement(m.Sa, {
                            type: m.Ua.Text,
                            "data-test-selector": n.Value,
                            onChange: this.onPlayerNameChange,
                            value: e.value
                        }))), i.createElement(m.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(m.Ea, {
                            label: Object(l.e)("Player Icon", "EditPlayerModal"),
                            error: "" !== this.state.errorMessage,
                            errorMessage: this.state.errorMessage
                        }, i.createElement(d.a, {
                            "data-test-selector": n.ImageUploader,
                            channelID: this.props.channelID,
                            onSuccess: this.addImageURL,
                            onLoading: this.uploadingImageURL,
                            onError: this.handleImageUploadFailure,
                            existingImageURL: this.state.player.imageURL,
                            hintMessage: Object(l.e)("Recommended size: 112 x 112, and less than 100kb", "EditPlayerModal")
                        }))))))
                    }, t
                }(i.Component),
                b = a("Driw"),
                E = a("il7S");
            ! function(e) {
                e.EmptyList = "players-tab__empty-list", e.AddRow = "players-tab__add-row", e.AddButton = "players-tab__add-button"
            }(g || (g = {}));
            var y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isAddingPlayer: !1,
                            addingPlayerName: "",
                            errorMessage: "",
                            isSaving: !1
                        }, t.filteredPlayerContentAttributes = function() {
                            return t.props.availableContentAttributes.filter(function(e) {
                                return e.key === E.a.Player
                            })
                        }, t.renderEditPlayerModal = function() {
                            if (t.state.player) return i.createElement(f, {
                                channelID: t.props.channelID,
                                player: t.state.player,
                                onClose: t.closePlayerModal,
                                updatePlayer: t.updatePlayer
                            })
                        }, t.startAddingNewPlayer = function() {
                            t.setState({
                                isAddingPlayer: !0,
                                addingPlayerName: ""
                            })
                        }, t.cancelAddingPlayer = function() {
                            t.setState({
                                isAddingPlayer: !1
                            })
                        }, t.editPlayer = function(e) {
                            t.setState({
                                player: e
                            })
                        }, t.closePlayerModal = function() {
                            t.setState({
                                player: void 0
                            })
                        }, t.onPlayerNameChange = function(e) {
                            t.setState({
                                addingPlayerName: e.target.value
                            })
                        }, t.validPlayerName = function() {
                            return !!t.state.addingPlayerName
                        }, t.createPlayer = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return r.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.validPlayerName()) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), e = "", a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.createContentAttributes([{
                                                key: E.a.Player,
                                                name: E.b.Player,
                                                value: this.state.addingPlayerName
                                            }])];
                                        case 2:
                                            return a.sent(), this.setState({
                                                isAddingPlayer: !1
                                            }), [3, 4];
                                        case 3:
                                            return t = a.sent(), l.k.error(t, "Error creating player"), e = Object(l.e)("There was a problem creating this player", "PlayersTab"), [3, 4];
                                        case 4:
                                            return this.setState({
                                                isSaving: !1,
                                                errorMessage: e
                                            }), [2]
                                    }
                                })
                            })
                        }, t.updatePlayer = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return r.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return t = r.__assign({
                                                ownerChannelID: this.props.channelID
                                            }, e), [4, this.props.updateContentAttributes([t])];
                                        case 1:
                                            return a.sent(), this.closePlayerModal(), [2]
                                    }
                                })
                            })
                        }, t.deletePlayer = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, a;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, this.props.deleteContentAttributes([e.id])];
                                        case 1:
                                            return n.sent(), [3, 3];
                                        case 2:
                                            return t = n.sent(), l.k.error(t, "Could not delete player"), a = Object(l.e)("There was a problem deleting this player", "PlayersTab"), this.setState({
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
                            t = this.filteredPlayerContentAttributes();
                        return i.createElement(c.a, null, i.createElement(m.Fb, {
                            display: m.X.Flex,
                            justifyContent: m.Xa.Between,
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderBottom: !0
                        }, i.createElement(m.W, {
                            type: m.Wb.H4,
                            bold: !0
                        }, Object(l.e)("Players", "PlayersTab")), i.createElement(m.Ya, null, i.createElement(m.z, {
                            "data-test-selector": g.AddButton,
                            icon: m.ub.Plus,
                            type: m.F.Hollow,
                            onClick: this.startAddingNewPlayer
                        }, Object(l.e)("Add Player", "PlayersTab")))), i.createElement(m.Ya, {
                            margin: {
                                y: 1
                            }
                        }, this.state.errorMessage && i.createElement(m.Da, {
                            errorMessage: this.state.errorMessage
                        })), i.createElement(m.Ya, {
                            display: m.X.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, i.createElement(m.P, {
                            cols: 9,
                            offset: 1
                        }, i.createElement(m.W, {
                            bold: !0,
                            fontSize: m.Ca.Size5
                        }, Object(l.e)("Player Name", "PlayersTab"))), i.createElement(m.P, {
                            cols: 2
                        }, i.createElement(m.W, {
                            bold: !0,
                            fontSize: m.Ca.Size5
                        }, Object(l.e)("Last Modified", "PlayersTab")))), !t.length && i.createElement(m.W, {
                            "data-test-selector": g.EmptyList,
                            italic: !0
                        }, Object(l.e)("No Players", "PlayersTab")), this.state.isAddingPlayer && i.createElement(m.Fb, {
                            "data-test-selector": g.AddRow,
                            background: m.r.Base,
                            elevation: 1,
                            alignItems: m.f.Center,
                            justifyContent: m.Xa.Between,
                            display: m.X.Flex,
                            flexDirection: m.Aa.Row,
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(m.Ya, {
                            flexDirection: m.Aa.Column,
                            padding: 2,
                            flexGrow: 1
                        }, i.createElement(m.Sa, {
                            autoFocus: !0,
                            placeholder: Object(l.e)("Add Player Name", "PlayersTab"),
                            onChange: this.onPlayerNameChange,
                            type: m.Ua.Text,
                            value: this.state.addingPlayerName
                        })), i.createElement(m.z, {
                            type: m.F.Hollow,
                            onClick: this.cancelAddingPlayer
                        }, Object(l.e)("Cancel", "PlayersTab")), i.createElement(m.Ya, {
                            margin: {
                                x: 1
                            },
                            display: m.X.InlineBlock
                        }, i.createElement(m.z, {
                            disabled: !this.validPlayerName() || this.state.isSaving,
                            onClick: this.createPlayer
                        }, Object(l.e)("Save", "PlayersTab")))), t.map(function(a, n) {
                            return i.createElement(m.Fb, {
                                background: m.r.Base,
                                elevation: 1,
                                alignItems: m.f.Center,
                                justifyContent: m.Xa.Between,
                                display: m.X.Flex,
                                flexDirection: m.Aa.Row,
                                margin: {
                                    bottom: 1
                                },
                                padding: 2,
                                key: n
                            }, i.createElement(m.P, {
                                cols: 1
                            }, a.imageURL && i.createElement(m.q, {
                                src: a.imageURL,
                                alt: a.value,
                                size: 30
                            })), i.createElement(m.P, {
                                cols: 5
                            }, i.createElement(m.W, {
                                fontSize: m.Ca.Size5
                            }, a.value)), i.createElement(m.P, {
                                cols: 4
                            }), i.createElement(m.P, {
                                cols: 2
                            }, i.createElement(m.Ya, {
                                display: m.X.Flex,
                                alignItems: m.f.Center
                            }, i.createElement(m.Ya, {
                                flexGrow: 1
                            }, a.updatedAt && i.createElement(m.W, {
                                fontSize: m.Ca.Size5
                            }, Object(l.c)(new Date(a.updatedAt), "medium"))), i.createElement(b.a, {
                                onEdit: e.editPlayer.bind(e, a),
                                onDelete: e.deletePlayer.bind(e, a),
                                deleteModalMessage: Object(l.e)("Are you sure you want to delete player: {value}?", {
                                    value: a.value
                                }, "PlayersTab"),
                                last: n === t.length - 1
                            }))))
                        }), this.renderEditPlayerModal())
                    }, t
                }(i.Component),
                h = Object(o.compose)(Object(s.b)("PlayersTab"))(y);
            a.d(t, "TestSelectors", function() {
                return g
            }), a.d(t, "PlayersTabComponent", function() {
                return y
            }), a.d(t, "PlayersTab", function() {
                return h
            })
        },
        khW5: function(e, t, a) {},
        qIvo: function(e, t, a) {
            "use strict";
            var n, r = a("mrSG"),
                i = a("q1tI"),
                o = a("fvjX"),
                l = a("/7QA"),
                s = a("/ZC1"),
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
                            if (t.state.imageURL) e = i.createElement(p.Ya, null, i.createElement(p.S, {
                                "data-test-selector": n.PreviewImage,
                                src: t.state.imageURL,
                                alt: t.state.imageURL
                            }));
                            else {
                                var a = "";
                                t.state.uploading && (a = "content-attribute-image-uploader__upload-svg--anim-fill"), e = i.createElement(p.Ya, {
                                    className: a
                                }, i.createElement(p.tb, {
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
                        return i.createElement(p.Ya, {
                            className: "content-attribute-image-uploader",
                            display: p.X.InlineBlock,
                            position: p.kb.Relative,
                            textAlign: p.Sb.Left
                        }, i.createElement(p.Ya, {
                            className: "content-attribute-image-uploader__container",
                            "data-test-selector": n.Container,
                            textAlign: p.Sb.Left
                        }, i.createElement(s.a, {
                            allowedFileTypes: g,
                            onFilesSubmitted: this.onImageInputChange
                        }, i.createElement(p.Fb, {
                            display: p.X.Flex,
                            alignItems: p.f.Start
                        }, i.createElement(p.Qa, {
                            className: "content-attribute-image-uploader__preview-image",
                            display: p.X.Flex,
                            margin: 1
                        }, this.getPreviewImage()), i.createElement(p.Ya, {
                            className: "content-attribute-image-uploader__info-text",
                            "data-test-selector": n.InfoText,
                            display: p.X.Flex,
                            flexDirection: p.Aa.Column,
                            flexGrow: 1,
                            textAlign: p.Sb.Left,
                            margin: 1,
                            padding: 2
                        }, i.createElement(p.W, {
                            fontSize: p.Ca.Size5
                        }, Object(l.e)("Drag and drop or select file to upload", "MultiviewContentAttributeImageUploader")), i.createElement(p.W, {
                            fontSize: p.Ca.Size6
                        }, this.props.hintMessage))))))
                    }, t
                }(i.Component),
                b = Object(o.compose)(Object(c.a)(m, {
                    name: "createImageUploadConfig"
                }))(f);
            a.d(t, !1, function() {
                return n
            }), a.d(t, !1, function() {
                return f
            }), a.d(t, "a", function() {
                return b
            })
        },
        sL9O: function(e, t, a) {},
        xefp: function(e, t, a) {}
    }
]);