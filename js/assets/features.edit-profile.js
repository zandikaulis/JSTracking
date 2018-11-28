(window.webpackJsonp = window.webpackJsonp || []).push([
    [144], {
        "/ZC1": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return o
            });
            var r = a("mrSG"),
                n = a("q1tI"),
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        return n.createElement(i.Z, {
                            dragOver: this.state.isDraggingOver,
                            error: this.props.error
                        }, n.createElement(i.Qa, {
                            position: i.kb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: i.jc.Above
                        }, n.createElement("input", {
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
                }(n.Component))
        },
        "9s3o": function(e, t, a) {},
        JK2O: function(e, t, a) {},
        Jx49: function(e, t, a) {
            "use strict";
            var r, n = a("/MKj"),
                i = a("fvjX"),
                o = a("aCAx"),
                s = a("kRBY"),
                l = a("mrSG"),
                u = a("TSYQ"),
                c = a("q1tI"),
                d = a("/7QA"),
                m = a("/ZC1"),
                p = a("cZKs"),
                g = a("yR8l"),
                f = a("yLwq"),
                b = a("Ue10"),
                h = (a("JK2O"), function(e) {
                    var t = {
                        "default-avatar__selected": e.selected,
                        "default-avatar": !0
                    };
                    return c.createElement(b.Ya, {
                        padding: {
                            bottom: 1
                        }
                    }, c.createElement("div", {
                        onClick: function() {
                            e.onSelect(e.index)
                        },
                        "aria-label": Object(d.d)("Click to select Default Avatar Number {index, number}", {
                            index: e.index
                        }, "Default Avatar")
                    }, c.createElement(b.Fb, {
                        fullHeight: !0,
                        fullWidth: !0,
                        position: b.kb.Relative,
                        className: u(t),
                        borderRadius: b.x.Small,
                        overflow: b.db.Hidden
                    }, c.createElement("img", {
                        alt: Object(d.d)("Default Avatar Number {index, number}", {
                            index: e.index
                        }, "Default Avatar"),
                        src: e.imageSrc
                    }))))
                }),
                v = a("94Uw"),
                S = a("Sejb"),
                I = a("kMGJ"),
                E = a("vpah"),
                k = a("eaSl"),
                y = a("GnwI"),
                A = (a("bWJD"), a("c81k"));
            ! function(e) {
                e.PreviewImage = "preview-image", e.UpdateButton = "update-button", e.StatusMessage = "status-message"
            }(r || (r = {}));
            var U = ["image/*"],
                _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            statusMessage: null,
                            imagePreviewURL: "",
                            currentImageHasTallAspectRatio: !1,
                            imageFormat: ""
                        }, t.currentImage = null, t.logger = d.k.withCategory("ProfileImagePicker"), t.pubsubTimeout = 0, t.successCloseTimeout = 0, t.onImageInputChange = function(e) {
                            var a;
                            if (null !== e) {
                                a = e[0];
                                var r = Object(S.a)(a),
                                    n = (a.size / 1024 / 1024).toFixed(4);
                                parseInt(n, 10) > 10 ? t.setState({
                                    statusMessage: E.b.BadSizeError
                                }) : (t.setState({
                                    selectedImageIndex: void 0,
                                    imagePreviewURL: "",
                                    imageFormat: "",
                                    currentImageHasTallAspectRatio: !1
                                }), Object(S.b)(a, function(e) {
                                    t.currentImage = e, t.setState({
                                        statusMessage: null
                                    })
                                }, function(e) {
                                    var a = new Image,
                                        n = !1;
                                    a.onload = function() {
                                        a.width < a.height && (n = !0), t.setState({
                                            currentImageHasTallAspectRatio: n
                                        })
                                    }, a.src = e, t.setState({
                                        imagePreviewURL: e,
                                        imageFormat: r
                                    })
                                }))
                            } else t.setState({
                                statusMessage: E.b.ImageNotSelected
                            })
                        }, t.onUpdateButtonClick = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t, a = this;
                                return l.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e.preventDefault(), void 0 !== this.state.selectedImageIndex ? (this.setDefaultAvatar(), [2]) : this.currentImage ? (this.setState({
                                                statusMessage: E.b.Uploading
                                            }), t = this, [4, Object(k.a)({
                                                userID: this.props.userID,
                                                authToken: this.props.authToken,
                                                imageType: v.a.ProfileImage,
                                                format: this.state.imageFormat,
                                                image: this.currentImage,
                                                onUploadCompletion: function(e) {
                                                    a.setState({
                                                        statusMessage: e
                                                    }), e === E.b.Success ? a.handleImageUpdated() : (a.setState({
                                                        imagePreviewURL: "",
                                                        imageFormat: ""
                                                    }), a.currentImage = null)
                                                },
                                                onUploadError: function() {
                                                    a.setState({
                                                        statusMessage: E.b.UnexpectedError,
                                                        selectedImageIndex: void 0,
                                                        imagePreviewURL: "",
                                                        currentImageHasTallAspectRatio: !1
                                                    })
                                                },
                                                onUploadTimeout: function() {
                                                    a.setState({
                                                        statusMessage: E.b.TimeoutError
                                                    })
                                                }
                                            })]) : (this.setState({
                                                statusMessage: E.b.ImageNotSelected
                                            }), [2]);
                                        case 1:
                                            return t.cancelUpload = r.sent(), [2]
                                    }
                                })
                            })
                        }, t.onDefaultImageSelected = function(e) {
                            t.setState({
                                selectedImageIndex: e,
                                imagePreviewURL: Object(f.a)(f.b[e], 300)
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.cancelUpload && this.cancelUpload(), this.pubsubTimeout && clearTimeout(this.pubsubTimeout), this.successCloseTimeout && clearTimeout(this.successCloseTimeout)
                    }, t.prototype.render = function() {
                        var e = this,
                            t = f.b.map(function(t, a) {
                                return c.createElement(h, {
                                    key: t.id,
                                    imageSrc: Object(f.a)(t, 300),
                                    index: a,
                                    onSelect: e.onDefaultImageSelected,
                                    selected: e.state.selectedImageIndex === a
                                })
                            }),
                            a = null;
                        if ("" !== this.state.imagePreviewURL) {
                            var n = {
                                "profile-edit__image-preview": !0,
                                "profile-edit__image-preview-tall": this.state.currentImageHasTallAspectRatio
                            };
                            a = c.createElement(b.Fb, {
                                className: u(n),
                                position: b.kb.Relative,
                                background: b.r.Base
                            }, c.createElement(b.Ra, {
                                borderRadius: b.x.Small,
                                overflow: b.db.Hidden
                            }, c.createElement("img", {
                                "data-test-selector": r.PreviewImage,
                                src: "" + this.state.imagePreviewURL
                            })))
                        }
                        var i = null;
                        "" === this.state.imagePreviewURL && (i = c.createElement(b.Ya, {
                            className: "profile-edit__upload-info"
                        }, c.createElement(b.Ya, null, c.createElement(b.tb, {
                            asset: b.ub.Plus,
                            type: b.vb.Alt2,
                            height: 20,
                            width: 20
                        })), c.createElement(b.W, {
                            type: b.Wb.H3,
                            color: b.O.Alt2,
                            fontSize: b.Ca.Size4
                        }, Object(d.d)("Upload a Photo", "Profile Edit"))));
                        var o = null;
                        this.props.showCloser && (o = c.createElement(p.a, null));
                        var s = null;
                        if (null !== this.state.statusMessage) {
                            var l = Object(E.c)(this.state.statusMessage),
                                g = l.message,
                                v = l.type;
                            s = c.createElement(b.hb, {
                                label: g,
                                type: v
                            })
                        }
                        var S = this.props.login;
                        return this.props.displayName && (S = this.props.displayName), c.createElement(b.Ya, {
                            className: "profile-edit",
                            position: b.kb.Relative,
                            fullHeight: !0
                        }, c.createElement(b.Fb, {
                            className: "profile-edit__background-container",
                            background: b.r.Base,
                            fullWidth: !0
                        }, c.createElement(b.Ya, {
                            padding: 2,
                            display: b.X.InlineBlock,
                            position: b.kb.Relative,
                            textAlign: b.Sb.Center,
                            fullWidth: !0
                        }, c.createElement(b.Fb, {
                            textAlign: b.Sb.Left,
                            borderBottom: !0,
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(b.W, {
                            type: b.Wb.H3,
                            color: b.O.Alt2,
                            fontSize: b.Ca.Size4
                        }, Object(d.d)("Edit Profile Picture for {userName}", {
                            userName: S
                        }, "Profile Edit"), " ")), c.createElement(b.Ya, {
                            className: "profile-edit__upload-container",
                            display: b.X.InlineBlock,
                            position: b.kb.Relative,
                            textAlign: b.Sb.Center,
                            margin: {
                                bottom: 1
                            }
                        }, c.createElement(b.Ya, {
                            className: "profile-edit__upload",
                            display: b.X.InlineBlock,
                            position: b.kb.Relative,
                            textAlign: b.Sb.Center
                        }, c.createElement(m.a, {
                            allowedFileTypes: U,
                            onFilesSubmitted: this.onImageInputChange
                        }, i), a)), c.createElement(b.Fb, {
                            "data-test-selector": r.StatusMessage,
                            fontSize: b.Ca.Size4,
                            position: b.kb.Relative,
                            textAlign: b.Sb.Center,
                            className: "profile-edit__status-message"
                        }, s), c.createElement(b.Fb, {
                            borderBottom: !0,
                            padding: {
                                bottom: .5
                            },
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(b.Ya, {
                            textAlign: b.Sb.Left,
                            margin: {
                                bottom: 1
                            }
                        }, c.createElement(b.W, {
                            type: b.Wb.H3,
                            color: b.O.Alt2,
                            fontSize: b.Ca.Size5
                        }, Object(d.d)("Or select one of these", "Profile Edit"))), c.createElement(b.cc, {
                            childWidth: b.dc.ExtraSmall,
                            gutterSize: b.ec.ExtraSmall,
                            placeholderItems: 3
                        }, t)), c.createElement(b.Ya, {
                            display: b.X.Flex,
                            justifyContent: b.Xa.Center
                        }, c.createElement(b.z, {
                            "data-test-selector": r.UpdateButton,
                            onClick: this.onUpdateButtonClick,
                            size: b.D.Large
                        }, Object(d.d)("Update", "Profile Edit"))))), o)
                    }, t.prototype.setDefaultAvatar = function() {
                        return l.__awaiter(this, void 0, void 0, function() {
                            var e, t, a;
                            return l.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.setState({
                                            statusMessage: E.b.Uploading
                                        }), e = E.b.UnexpectedError, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, Object(I.b)(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                    case 2:
                                        return 204 === (t = r.sent()).status || 200 === t.status ? e = E.b.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                    case 3:
                                        return a = r.sent(), this.logger.error(a, "Default Avatar PUT failed."), [3, 4];
                                    case 4:
                                        return e === E.b.Success ? this.handleImageUpdated() : this.setState({
                                            statusMessage: e
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.handleImageUpdated = function() {
                        return l.__awaiter(this, void 0, void 0, function() {
                            return l.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return e.trys.push([0, 2, , 3]), [4, this.props.data.refetch()];
                                    case 1:
                                        return e.sent(), this.setState({
                                            statusMessage: E.b.Success
                                        }), this.successCloseTimeout = setTimeout(this.props.closeModal, 1e3), [3, 3];
                                    case 2:
                                        return e.sent(), this.setState({
                                            imagePreviewURL: "",
                                            imageFormat: ""
                                        }), this.currentImage = null, [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }(c.Component),
                O = Object(i.compose)(Object(y.b)("Profile Edit", {
                    autoReportInteractive: !0
                }), Object(g.a)(A, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                }))(_);
            var w = Object(n.connect)(function(e) {
                return {
                    authToken: Object(s.a)(e)
                }
            }, function(e, t) {
                return Object(i.bindActionCreators)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(o.c)()
                    }
                }, e)
            })(O);
            a.d(t, "a", function() {
                return w
            })
        },
        Sejb: function(e, t, a) {
            "use strict";

            function r(e, t, a) {
                var r = new FileReader;
                r.onloadend = function() {
                    a && a(r.result)
                }, r.readAsDataURL(e);
                var n = new FileReader;
                n.onloadend = function() {
                    t(n.result)
                }, n.readAsArrayBuffer(e)
            }

            function n(e) {
                var t = "";
                if (e && e.name) {
                    var a = e.name;
                    t = a.slice((Math.max(0, a.lastIndexOf(".")) || 1 / 0) + 1)
                }
                return "" === t && (t = "png"), t
            }
            a.d(t, "b", function() {
                return r
            }), a.d(t, "a", function() {
                return n
            })
        },
        bWJD: function(e, t, a) {},
        c81k: function(e, t) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "UserProfileEditor"
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
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    alias: {
                                        kind: "Name",
                                        value: "profileImageURL70x70"
                                    },
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
                                            value: "70"
                                        }
                                    }],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    alias: {
                                        kind: "Name",
                                        value: "profileImageURL300x300"
                                    },
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
                                            value: "300"
                                        }
                                    }],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 178
                }
            };
            a.loc.source = {
                body: "query UserProfileEditor($login: String!) {\nuser(login: $login) {\nid\nlogin\nprofileImageURL70x70: profileImageURL(width: 70)\nprofileImageURL300x300: profileImageURL(width: 300)\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = a
        },
        eaSl: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return u
            });
            var r = a("mrSG"),
                n = a("/7QA"),
                i = a("/aPz"),
                o = a("kMGJ"),
                s = a("vpah"),
                l = 1e4;

            function u(e) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var t, a, u, c, d, m, p, g, f, b, h, v, S, I, E, k, y;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                t = e.authToken, a = e.userID, u = e.format, c = e.image, d = e.imageType, m = e.onUploadCompletion, p = e.onUploadError, g = e.onUploadTimeout, f = e.timeout, b = void 0 === f ? l : f, h = n.k.withCategory("Upload image"), r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, Object(o.a)(a, t, d, u)];
                            case 2:
                                return I = r.sent(), v = I.upload_url, S = I.upload_id, [3, 4];
                            case 3:
                                return E = r.sent(), h.error(E, "Request for upload ID failed to get expected response from server"), p(), [2];
                            case 4:
                                return y = n.l.subscribe({
                                    topic: Object(i.o)(a),
                                    success: function() {
                                        try {
                                            Object(o.c)(v, c)
                                        } catch (e) {
                                            return h.error(e, "Image Upload Failed"), y(), void p()
                                        }
                                        k = setTimeout(function() {
                                            y(), g()
                                        }, b)
                                    },
                                    failure: function() {
                                        p()
                                    },
                                    onMessage: function(e) {
                                        if (e.upload_id === S) {
                                            clearTimeout(k);
                                            var t = function(e) {
                                                switch (e) {
                                                    case s.a.Success:
                                                        return s.b.Success;
                                                    case s.a.BadSize:
                                                        return s.b.BadSizeError;
                                                    case s.a.NonImage:
                                                        return s.b.NonImageError;
                                                    case s.a.WrongFormat:
                                                        return s.b.WrongFormatError;
                                                    default:
                                                        return s.b.UnexpectedError
                                                }
                                            }(e.status);
                                            m(t)
                                        }
                                    }
                                }), [2, function() {
                                    clearTimeout(k), y()
                                }]
                        }
                    })
                })
            }
        },
        g9Rq: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a("mrSG"),
                n = a("q1tI"),
                i = a("/MKj"),
                o = a("fvjX"),
                s = a("/7QA"),
                l = a("aCAx"),
                u = a("Jx49"),
                c = a("GnwI"),
                d = a("Ue10"),
                m = (a("9s3o"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openModal = function(e) {
                            e.stopPropagation(), t.props.showModal(u.a, {
                                userID: t.props.userID,
                                login: t.props.login,
                                displayName: t.props.displayName,
                                showCloser: !0
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return n.createElement(d.Ya, {
                            className: "edit-profile-overlay",
                            display: d.X.Flex,
                            justifyContent: d.Xa.Center,
                            alignContent: d.e.Center,
                            fullHeight: !0,
                            fullWidth: !0
                        }, n.createElement(d.A, {
                            overlay: !0,
                            ariaLabel: Object(s.d)("Edit Profile", "ChannelHeader"),
                            icon: d.ub.Edit,
                            onClick: this.openModal
                        }))
                    }, t
                }(n.Component));
            var p = Object(o.compose)(Object(i.connect)(null, function(e) {
                return Object(o.bindActionCreators)({
                    showModal: l.d
                }, e)
            }), Object(c.b)("EditProfileOverlay", {
                autoReportInteractive: !0
            }))(m);
            a.d(t, "PublicProps", function() {}), a.d(t, "EditProfileOverlay", function() {
                return p
            })
        },
        kMGJ: function(e, t, a) {
            "use strict";
            a.d(t, "c", function() {
                return o
            }), a.d(t, "b", function() {
                return s
            }), a.d(t, "a", function() {
                return l
            });
            var r = a("mrSG"),
                n = a("/7QA"),
                i = a("yLwq");

            function o(e, t) {
                if (!t) throw new Error("Attempted to upload an empty file object.");
                var a = decodeURI(e);
                return fetch(a, {
                    method: "PUT",
                    body: new Blob([t])
                })
            }

            function s(e, t, a) {
                if (void 0 === a) throw new Error("No default avatar selected.");
                return fetch(n.a.apiBaseURL + "/kraken/users/" + e + "/default_images?client_id=" + n.a.authSettings.clientID + "&api_version=" + n.a.defaultAPIVersion, {
                    method: "PUT",
                    headers: {
                        Authorization: "OAuth " + t,
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify({
                        default_profile_image: i.b[a].id
                    })
                })
            }

            function l(e, t, a, i) {
                return r.__awaiter(this, void 0, void 0, function() {
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, fetch(n.a.apiBaseURL + "/kraken/users/" + e + "/upload_image?client_id=" + n.a.authSettings.clientID + "&api_version=" + n.a.defaultAPIVersion + "&image_type=" + a + "&format=" + i, {
                                    method: "POST",
                                    headers: {
                                        Authorization: "OAuth " + t
                                    }
                                })];
                            case 1:
                                return [2, r.sent().json()]
                        }
                    })
                })
            }
        },
        sL9O: function(e, t, a) {},
        vpah: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return r
            }), a.d(t, "b", function() {
                return n
            }), a.d(t, "c", function() {
                return s
            });
            var r, n, i = a("/7QA"),
                o = a("Ue10");

            function s(e) {
                switch (e) {
                    case n.Success:
                        return {
                            message: Object(i.d)("Success!", "Profile Edit"),
                            type: o.ib.Success
                        };
                    case n.UnexpectedError:
                        return {
                            message: Object(i.d)("Unexpected error, please try again.", "Profile Edit"),
                            type: o.ib.Alert
                        };
                    case n.BadSizeError:
                        return {
                            message: Object(i.d)("Image might exceed 10MB.", "Profile Edit"),
                            type: o.ib.Alert
                        };
                    case n.NonImageError:
                        return {
                            message: Object(i.d)("You must upload an image.", "Profile Edit"),
                            type: o.ib.Alert
                        };
                    case n.WrongFormatError:
                        return {
                            message: Object(i.d)("You must select a valid image type.", "Profile Edit"),
                            type: o.ib.Alert
                        };
                    case n.TimeoutError:
                        return {
                            message: Object(i.d)("Upload timed-out. Please try again.", "Profile Edit"),
                            type: o.ib.Alert
                        };
                    case n.Uploading:
                        return {
                            message: Object(i.d)("Uploading....", "Profile Edit"),
                            type: o.ib.Brand
                        };
                    case n.ImageNotSelected:
                        return {
                            message: Object(i.d)("Select a image first.", "Profile Edit"),
                            type: o.ib.Alert
                        };
                    default:
                        return {
                            message: Object(i.d)("Please try again.", "Profile Edit"),
                            type: o.ib.Alert
                        }
                }
            }! function(e) {
                e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
            }(r || (r = {})),
            function(e) {
                e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
            }(n || (n = {}))
        }
    }
]);