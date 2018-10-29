(window.webpackJsonp = window.webpackJsonp || []).push([
    [132], {
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
                        }, r.createElement(i.Pa, {
                            position: i.fb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: i.cc.Above
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
        "7lJP": function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("/MKj"),
                r = a("fvjX"),
                i = a("aCAx"),
                o = a("kRBY"),
                s = a("mrSG"),
                l = a("q1tI"),
                u = a("oJmH"),
                c = a("/7QA"),
                d = a("/ZC1"),
                p = a("cZKs"),
                m = a("yR8l"),
                g = a("/aPz"),
                f = a("94Uw"),
                b = a("Sejb"),
                h = a("kMGJ"),
                v = a("vpah"),
                I = a("GnwI"),
                E = a("Ue10"),
                S = (a("DGtd"), a("MTto")),
                y = ["image/*"],
                U = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            statusMessage: null,
                            imageUpdated: !1,
                            loading: !1
                        }, t.currentImage = null, t.logger = c.k.withCategory("UserImageUploader"), t.onImageInputChange = function(e) {
                            var a;
                            if (null !== e) {
                                t.setState({
                                    loading: !0,
                                    statusMessage: null
                                }), a = e[0];
                                var n = Object(b.a)(a),
                                    r = (a.size / 1024 / 1024).toFixed(4);
                                parseInt(r, 10) > 10 ? t.setState({
                                    loading: !1,
                                    statusMessage: v.b.BadSizeError
                                }) : Object(b.b)(a, function(e) {
                                    return s.__awaiter(t, void 0, void 0, function() {
                                        var t, a, r, i, o = this;
                                        return s.__generator(this, function(s) {
                                            switch (s.label) {
                                                case 0:
                                                    this.currentImage = e, s.label = 1;
                                                case 1:
                                                    return s.trys.push([1, 3, , 4]), [4, Object(h.a)(this.props.userID, this.props.authToken, this.props.imageType, n)];
                                                case 2:
                                                    return t = s.sent(), a = t.upload_url, r = t.upload_id, [3, 4];
                                                case 3:
                                                    return i = s.sent(), this.logger.error(i, "Request for upload ID failed to get expected response from server."), this.setState({
                                                        loading: !1,
                                                        statusMessage: v.b.UnexpectedError
                                                    }), [2];
                                                case 4:
                                                    return this.unsubscribe = c.l.subscribe({
                                                        topic: Object(g.n)(this.props.userID),
                                                        success: function() {
                                                            try {
                                                                Object(h.c)(a, o.currentImage)
                                                            } catch (e) {
                                                                o.logger.error(e, "Image upload failed."), o.unsubscribe(), o.setState({
                                                                    loading: !1,
                                                                    statusMessage: v.b.UnexpectedError
                                                                })
                                                            }
                                                            o.timeoutHandle = setTimeout(function() {
                                                                return o.handlePubSubTimeout()
                                                            }, 1e4)
                                                        },
                                                        failure: function() {
                                                            o.setState({
                                                                loading: !1,
                                                                statusMessage: v.b.UnexpectedError
                                                            })
                                                        },
                                                        onMessage: function(e) {
                                                            if (e.upload_id === r) {
                                                                clearTimeout(o.timeoutHandle);
                                                                var t = null;
                                                                e.status === v.a.Success ? t = v.b.Success : e.status === v.a.BadSize ? (t = v.b.BadSizeError, o.currentImage = null) : e.status === v.a.NonImage ? (t = v.b.NonImageError, o.currentImage = null) : e.status === v.a.WrongFormat ? (t = v.b.WrongFormatError, o.currentImage = null) : (t = v.b.UnexpectedError, o.currentImage = null), o.unsubscribe && o.unsubscribe(), o.setState({
                                                                    statusMessage: t,
                                                                    imageUpdated: e.status === v.a.Success,
                                                                    loading: !1
                                                                })
                                                            }
                                                        }
                                                    }), [2]
                                            }
                                        })
                                    })
                                })
                            } else t.setState({
                                statusMessage: v.b.ImageNotSelected
                            })
                        }, t.handlePubSubTimeout = function() {
                            t.unsubscribe(), t.setState({
                                loading: !1,
                                statusMessage: v.b.TimeoutError
                            })
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillUnmount = function() {
                        void 0 !== this.unsubscribe && this.unsubscribe(), this.timeoutHandle && clearTimeout(this.timeoutHandle)
                    }, t.prototype.componentDidUpdate = function() {
                        var e = this;
                        this.state.imageUpdated && setTimeout(function() {
                            e.props.data && e.props.data.refetch(), e.setState({
                                imageUpdated: !1
                            }), e.props.closeModal()
                        }, 1e3)
                    }, t.prototype.render = function() {
                        var e = this.props.login;
                        this.props.displayName && (e = this.props.displayName);
                        var t = Object(c.d)("Editing profile banner for {userName}", {
                            userName: e
                        }, "UserImageUploader");
                        this.props.imageType === f.a.ChannelOfflineImage && (t = Object(c.d)("Editing video banner for {userName}", {
                            userName: e
                        }, "UserImageUploader"));
                        var a = null;
                        if (this.state.loading) a = l.createElement(E.Xa, {
                            className: "user-image-uploader__upload-svg--anim-fill",
                            position: E.fb.Relative,
                            "data-test-selector": "loading-status"
                        }, l.createElement(E.ob, {
                            asset: E.pb.Upload,
                            type: E.qb.Brand,
                            width: 99,
                            height: 76
                        }));
                        else {
                            var n = Object(c.d)("Recommended image size: 1200x380 and less than 10MB.", "UserImageUploader");
                            this.props.imageType === f.a.ChannelOfflineImage && (n = Object(c.d)("Recommended image size: 1920x1080 and less than 10MB.", "UserImageUploader")), a = l.createElement(E.Xa, null, l.createElement(E.Xa, {
                                className: "user-image-uploader__upload-info"
                            }, l.createElement(E.Xa, null, l.createElement(E.ob, {
                                asset: E.pb.Plus,
                                type: E.qb.Alt2,
                                height: 20,
                                width: 20
                            })), l.createElement(E.W, {
                                type: E.Pb.H3,
                                color: E.O.Alt2,
                                fontSize: E.Ca.Size4
                            }, Object(c.d)("Upload a Photo", "User Image Uploader"))), l.createElement(E.Xa, {
                                className: "user-image-uploader__upload-recommendation",
                                position: E.fb.Absolute,
                                textAlign: E.Lb.Left,
                                attachLeft: !0,
                                attachBottom: !0,
                                margin: {
                                    left: 3,
                                    bottom: 1
                                }
                            }, l.createElement(E.W, {
                                type: E.Pb.H6,
                                color: E.O.Alt2,
                                fontSize: E.Ca.Size8,
                                align: E.Zb.TextBottom
                            }, n)))
                        }
                        var r = null;
                        this.props.showCloser && (r = l.createElement(p.a, null));
                        var i = null;
                        if (null !== this.state.statusMessage) {
                            var o = Object(v.c)(this.state.statusMessage);
                            i = l.createElement(E.cb, {
                                label: o.message,
                                type: o.type
                            })
                        }
                        return l.createElement(E.Xa, {
                            className: "user-image-uploader",
                            position: E.fb.Relative,
                            fullHeight: !0
                        }, l.createElement(E.zb, {
                            className: "user-image-uploader__background-container",
                            background: E.r.Base,
                            fullWidth: !0
                        }, l.createElement(E.Xa, {
                            padding: 2,
                            display: E.X.InlineBlock,
                            position: E.fb.Relative,
                            textAlign: E.Lb.Center,
                            fullWidth: !0
                        }, l.createElement(E.zb, {
                            borderBottom: !0,
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(E.W, {
                            type: E.Pb.H3,
                            fontSize: E.Ca.Size4
                        }, t)), l.createElement(E.Xa, {
                            className: "user-image-uploader__upload-container",
                            display: E.X.InlineBlock,
                            position: E.fb.Relative,
                            textAlign: E.Lb.Center,
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement(E.Xa, {
                            className: "user-image-uploader__upload",
                            display: E.X.InlineBlock,
                            position: E.fb.Relative,
                            textAlign: E.Lb.Center
                        }, l.createElement(d.a, {
                            allowedFileTypes: y,
                            onFilesSubmitted: this.onImageInputChange
                        }, a))), l.createElement(E.zb, {
                            "data-test-selector": "status-message",
                            fontSize: E.Ca.Size4,
                            position: E.fb.Relative,
                            textAlign: E.Lb.Center,
                            className: "user-image-uploader__status-message"
                        }, i))), r)
                    }, t
                }(l.Component),
                O = Object(u.compose)(Object(I.b)("User Image Upload"), Object(m.a)(S, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                }))(U);
            var _ = Object(n.connect)(function(e) {
                return {
                    authToken: Object(o.a)(e)
                }
            }, function(e, t) {
                return Object(r.bindActionCreators)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(i.c)()
                    }
                }, e)
            })(O);
            a.d(t, "UserImageUploader", function() {
                return _
            }), a.d(t, "PublicProps", function() {})
        },
        DGtd: function(e, t, a) {},
        MTto: function(e, t) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "UserImageUploader"
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
                                    name: {
                                        kind: "Name",
                                        value: "bannerImageURL"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "offlineImageURL"
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
                    end: 108
                }
            };
            a.loc.source = {
                body: "query UserImageUploader($login: String!) {\nuser(login: $login) {\nid\nlogin\nbannerImageURL\nofflineImageURL\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = a
        },
        Sejb: function(e, t, a) {
            "use strict";

            function n(e, t, a) {
                var n = new FileReader;
                n.onloadend = function() {
                    a && a(n.result)
                }, n.readAsDataURL(e);
                var r = new FileReader;
                r.onloadend = function() {
                    t(r.result)
                }, r.readAsArrayBuffer(e)
            }

            function r(e) {
                var t = "";
                if (e && e.name) {
                    var a = e.name;
                    t = a.slice((Math.max(0, a.lastIndexOf(".")) || 1 / 0) + 1)
                }
                return "" === t && (t = "png"), t
            }
            a.d(t, "b", function() {
                return n
            }), a.d(t, "a", function() {
                return r
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
            var n = a("mrSG"),
                r = a("/7QA"),
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
                return fetch(r.a.apiBaseURL + "/kraken/users/" + e + "/default_images?client_id=" + r.a.authSettings.clientID + "&api_version=" + r.a.defaultAPIVersion, {
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
                return n.__awaiter(this, void 0, void 0, function() {
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, fetch(r.a.apiBaseURL + "/kraken/users/" + e + "/upload_image?client_id=" + r.a.authSettings.clientID + "&api_version=" + r.a.defaultAPIVersion + "&image_type=" + a + "&format=" + i, {
                                    method: "POST",
                                    headers: {
                                        Authorization: "OAuth " + t
                                    }
                                })];
                            case 1:
                                return [2, n.sent().json()]
                        }
                    })
                })
            }
        },
        sL9O: function(e, t, a) {},
        vpah: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            }), a.d(t, "b", function() {
                return r
            }), a.d(t, "c", function() {
                return s
            });
            var n, r, i = a("/7QA"),
                o = a("Ue10");

            function s(e) {
                switch (e) {
                    case r.Success:
                        return {
                            message: Object(i.d)("Success!", "Profile Edit"),
                            type: o.db.Success
                        };
                    case r.UnexpectedError:
                        return {
                            message: Object(i.d)("Unexpected error, please try again.", "Profile Edit"),
                            type: o.db.Alert
                        };
                    case r.BadSizeError:
                        return {
                            message: Object(i.d)("Image might exceed 10MB.", "Profile Edit"),
                            type: o.db.Alert
                        };
                    case r.NonImageError:
                        return {
                            message: Object(i.d)("You must upload an image.", "Profile Edit"),
                            type: o.db.Alert
                        };
                    case r.WrongFormatError:
                        return {
                            message: Object(i.d)("You must select a valid image type.", "Profile Edit"),
                            type: o.db.Alert
                        };
                    case r.TimeoutError:
                        return {
                            message: Object(i.d)("Upload timed-out. Please try again.", "Profile Edit"),
                            type: o.db.Alert
                        };
                    case r.Uploading:
                        return {
                            message: Object(i.d)("Uploading....", "Profile Edit"),
                            type: o.db.Brand
                        };
                    case r.ImageNotSelected:
                        return {
                            message: Object(i.d)("Select a image first.", "Profile Edit"),
                            type: o.db.Alert
                        };
                    default:
                        return {
                            message: Object(i.d)("Please try again.", "Profile Edit"),
                            type: o.db.Alert
                        }
                }
            }! function(e) {
                e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
            }(n || (n = {})),
            function(e) {
                e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
            }(r || (r = {}))
        }
    }
]);