(window.webpackJsonp = window.webpackJsonp || []).push([
    [134], {
        "/ZC1": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return s
            });
            var r = a("mrSG"),
                n = a("q1tI"),
                i = a("Ue10"),
                s = (a("sL9O"), function(e) {
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
                        }, n.createElement(i.Pa, {
                            position: i.hb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: i.ec.Above
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
                s = a("aCAx"),
                o = a("kRBY"),
                l = a("mrSG"),
                u = a("TSYQ"),
                c = a("q1tI"),
                d = a("/7QA"),
                m = a("/ZC1"),
                p = a("cZKs"),
                g = a("yR8l"),
                f = a("yLwq"),
                b = a("/aPz"),
                h = a("Ue10"),
                v = (a("JK2O"), function(e) {
                    var t = {
                        "default-avatar__selected": e.selected,
                        "default-avatar": !0
                    };
                    return c.createElement(h.Xa, {
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
                    }, c.createElement(h.Bb, {
                        fullHeight: !0,
                        fullWidth: !0,
                        position: h.hb.Relative,
                        className: u(t),
                        borderRadius: h.x.Small,
                        overflow: h.cb.Hidden
                    }, c.createElement("img", {
                        alt: Object(d.d)("Default Avatar Number {index, number}", {
                            index: e.index
                        }, "Default Avatar"),
                        src: e.imageSrc
                    }))))
                }),
                I = a("94Uw"),
                S = a("Sejb"),
                E = a("kMGJ"),
                y = a("vpah"),
                A = a("GnwI"),
                k = (a("bWJD"), a("c81k"));
            ! function(e) {
                e.PreviewImage = "preview-image", e.UpdateButton = "update-button", e.StatusMessage = "status-message"
            }(r || (r = {}));
            var _ = ["image/*"],
                O = function(e) {
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
                                    statusMessage: y.b.BadSizeError
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
                                statusMessage: y.b.ImageNotSelected
                            })
                        }, t.onUpdateButtonClick = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t, a, r, n, i = this;
                                return l.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (e.preventDefault(), void 0 !== this.state.selectedImageIndex) return this.setDefaultAvatar(), [2];
                                            if (!this.currentImage) return this.setState({
                                                statusMessage: y.b.ImageNotSelected
                                            }), [2];
                                            this.setState({
                                                statusMessage: y.b.Uploading
                                            }), s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, Object(E.a)(this.props.userID, this.props.authToken, I.a.ProfileImage, this.state.imageFormat)];
                                        case 2:
                                            return t = s.sent(), a = t.upload_url, r = t.upload_id, [3, 4];
                                        case 3:
                                            return n = s.sent(), this.logger.error(n, "Request for upload ID failed to get expected response from server."), this.setState({
                                                statusMessage: y.b.UnexpectedError
                                            }), [2];
                                        case 4:
                                            return this.unsubscribe = d.l.subscribe({
                                                topic: Object(b.n)(this.props.userID),
                                                success: function() {
                                                    try {
                                                        Object(E.c)(a, i.currentImage)
                                                    } catch (e) {
                                                        i.logger.error(e, "Profile Image upload failed."), i.unsubscribe(), i.setState({
                                                            statusMessage: y.b.UnexpectedError,
                                                            selectedImageIndex: void 0,
                                                            imagePreviewURL: "",
                                                            imageFormat: "",
                                                            currentImageHasTallAspectRatio: !1
                                                        })
                                                    }
                                                    i.pubsubTimeout = setTimeout(function() {
                                                        return i.handlePubSubTimeout()
                                                    }, 1e4)
                                                },
                                                failure: function() {
                                                    i.setState({
                                                        statusMessage: y.b.UnexpectedError,
                                                        selectedImageIndex: void 0,
                                                        imagePreviewURL: "",
                                                        currentImageHasTallAspectRatio: !1
                                                    })
                                                },
                                                onMessage: function(e) {
                                                    if (e.upload_id === r) {
                                                        clearTimeout(i.pubsubTimeout);
                                                        var t = null;
                                                        t = e.status === y.a.Success ? y.b.Success : e.status === y.a.BadSize ? y.b.BadSizeError : e.status === y.a.NonImage ? y.b.NonImageError : e.status === y.a.WrongFormat ? y.b.WrongFormatError : y.b.UnexpectedError, i.unsubscribe && i.unsubscribe(), i.setState({
                                                            statusMessage: t
                                                        }), t === y.b.Success ? i.handleImageUpdated() : (i.setState({
                                                            imagePreviewURL: "",
                                                            imageFormat: ""
                                                        }), i.currentImage = null)
                                                    }
                                                }
                                            }), [2]
                                    }
                                })
                            })
                        }, t.onDefaultImageSelected = function(e) {
                            t.setState({
                                selectedImageIndex: e,
                                imagePreviewURL: Object(f.a)(f.b[e], 300)
                            })
                        }, t.handlePubSubTimeout = function() {
                            t.unsubscribe(), t.setState({
                                statusMessage: y.b.TimeoutError
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        void 0 !== this.unsubscribe && this.unsubscribe(), this.pubsubTimeout && clearTimeout(this.pubsubTimeout), this.successCloseTimeout && clearTimeout(this.successCloseTimeout)
                    }, t.prototype.render = function() {
                        var e = this,
                            t = f.b.map(function(t, a) {
                                return c.createElement(v, {
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
                            a = c.createElement(h.Bb, {
                                className: u(n),
                                position: h.hb.Relative,
                                background: h.r.Base
                            }, c.createElement(h.Qa, {
                                borderRadius: h.x.Small,
                                overflow: h.cb.Hidden
                            }, c.createElement("img", {
                                "data-test-selector": r.PreviewImage,
                                src: "" + this.state.imagePreviewURL
                            })))
                        }
                        var i = null;
                        "" === this.state.imagePreviewURL && (i = c.createElement(h.Xa, {
                            className: "profile-edit__upload-info"
                        }, c.createElement(h.Xa, null, c.createElement(h.qb, {
                            asset: h.rb.Plus,
                            type: h.sb.Alt2,
                            height: 20,
                            width: 20
                        })), c.createElement(h.W, {
                            type: h.Rb.H3,
                            color: h.O.Alt2,
                            fontSize: h.Ca.Size4
                        }, Object(d.d)("Upload a Photo", "Profile Edit"))));
                        var s = null;
                        this.props.showCloser && (s = c.createElement(p.a, null));
                        var o = null;
                        if (null !== this.state.statusMessage) {
                            var l = Object(y.c)(this.state.statusMessage),
                                g = l.message,
                                b = l.type;
                            o = c.createElement(h.eb, {
                                label: g,
                                type: b
                            })
                        }
                        var I = this.props.login;
                        return this.props.displayName && (I = this.props.displayName), c.createElement(h.Xa, {
                            className: "profile-edit",
                            position: h.hb.Relative,
                            fullHeight: !0
                        }, c.createElement(h.Bb, {
                            className: "profile-edit__background-container",
                            background: h.r.Base,
                            fullWidth: !0
                        }, c.createElement(h.Xa, {
                            padding: 2,
                            display: h.X.InlineBlock,
                            position: h.hb.Relative,
                            textAlign: h.Nb.Center,
                            fullWidth: !0
                        }, c.createElement(h.Bb, {
                            textAlign: h.Nb.Left,
                            borderBottom: !0,
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(h.W, {
                            type: h.Rb.H3,
                            color: h.O.Alt2,
                            fontSize: h.Ca.Size4
                        }, Object(d.d)("Edit Profile Picture for {userName}", {
                            userName: I
                        }, "Profile Edit"), " ")), c.createElement(h.Xa, {
                            className: "profile-edit__upload-container",
                            display: h.X.InlineBlock,
                            position: h.hb.Relative,
                            textAlign: h.Nb.Center,
                            margin: {
                                bottom: 1
                            }
                        }, c.createElement(h.Xa, {
                            className: "profile-edit__upload",
                            display: h.X.InlineBlock,
                            position: h.hb.Relative,
                            textAlign: h.Nb.Center
                        }, c.createElement(m.a, {
                            allowedFileTypes: _,
                            onFilesSubmitted: this.onImageInputChange
                        }, i), a)), c.createElement(h.Bb, {
                            "data-test-selector": r.StatusMessage,
                            fontSize: h.Ca.Size4,
                            position: h.hb.Relative,
                            textAlign: h.Nb.Center,
                            className: "profile-edit__status-message"
                        }, o), c.createElement(h.Bb, {
                            borderBottom: !0,
                            padding: {
                                bottom: .5
                            },
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(h.Xa, {
                            textAlign: h.Nb.Left,
                            margin: {
                                bottom: 1
                            }
                        }, c.createElement(h.W, {
                            type: h.Rb.H3,
                            color: h.O.Alt2,
                            fontSize: h.Ca.Size5
                        }, Object(d.d)("Or select one of these", "Profile Edit"))), c.createElement(h.Xb, {
                            childWidth: h.Yb.ExtraSmall,
                            gutterSize: h.Zb.ExtraSmall,
                            placeholderItems: 3
                        }, t)), c.createElement(h.Xa, {
                            display: h.X.Flex,
                            justifyContent: h.Wa.Center
                        }, c.createElement(h.z, {
                            "data-test-selector": r.UpdateButton,
                            onClick: this.onUpdateButtonClick,
                            size: h.D.Large
                        }, Object(d.d)("Update", "Profile Edit"))))), s)
                    }, t.prototype.setDefaultAvatar = function() {
                        return l.__awaiter(this, void 0, void 0, function() {
                            var e, t, a;
                            return l.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.setState({
                                            statusMessage: y.b.Uploading
                                        }), e = y.b.UnexpectedError, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, Object(E.b)(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                    case 2:
                                        return 204 === (t = r.sent()).status || 200 === t.status ? e = y.b.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                    case 3:
                                        return a = r.sent(), this.logger.error(a, "Default Avatar PUT failed."), [3, 4];
                                    case 4:
                                        return e === y.b.Success ? this.handleImageUpdated() : this.setState({
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
                                            statusMessage: y.b.Success
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
                U = Object(i.compose)(Object(A.b)("Profile Edit", {
                    autoReportInteractive: !0
                }), Object(g.a)(k, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                }))(O);
            var w = Object(n.connect)(function(e) {
                return {
                    authToken: Object(o.a)(e)
                }
            }, function(e, t) {
                return Object(i.bindActionCreators)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(s.c)()
                    }
                }, e)
            })(U);
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
        g9Rq: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a("/MKj"),
                n = a("fvjX"),
                i = a("aCAx"),
                s = a("mrSG"),
                o = a("q1tI"),
                l = a("/7QA"),
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
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return o.createElement(d.Xa, {
                            className: "edit-profile-overlay",
                            display: d.X.Flex,
                            justifyContent: d.Wa.Center,
                            alignContent: d.e.Center,
                            fullHeight: !0,
                            fullWidth: !0
                        }, o.createElement(d.A, {
                            overlay: !0,
                            ariaLabel: Object(l.d)("Edit Profile", "ChannelHeader"),
                            icon: d.rb.Edit,
                            onClick: this.openModal
                        }))
                    }, t = s.__decorate([Object(c.b)("EditProfileOverlay")], t)
                }(o.Component));
            var p = Object(r.connect)(null, function(e) {
                return Object(n.bindActionCreators)({
                    showModal: i.d
                }, e)
            })(m);
            a.d(t, "PublicProps", function() {}), a.d(t, "EditProfileOverlay", function() {
                return p
            })
        },
        kMGJ: function(e, t, a) {
            "use strict";
            a.d(t, "c", function() {
                return s
            }), a.d(t, "b", function() {
                return o
            }), a.d(t, "a", function() {
                return l
            });
            var r = a("mrSG"),
                n = a("/7QA"),
                i = a("yLwq");

            function s(e, t) {
                if (!t) throw new Error("Attempted to upload an empty file object.");
                var a = decodeURI(e);
                return fetch(a, {
                    method: "PUT",
                    body: new Blob([t])
                })
            }

            function o(e, t, a) {
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
                return o
            });
            var r, n, i = a("/7QA"),
                s = a("Ue10");

            function o(e) {
                switch (e) {
                    case n.Success:
                        return {
                            message: Object(i.d)("Success!", "Profile Edit"),
                            type: s.fb.Success
                        };
                    case n.UnexpectedError:
                        return {
                            message: Object(i.d)("Unexpected error, please try again.", "Profile Edit"),
                            type: s.fb.Alert
                        };
                    case n.BadSizeError:
                        return {
                            message: Object(i.d)("Image might exceed 10MB.", "Profile Edit"),
                            type: s.fb.Alert
                        };
                    case n.NonImageError:
                        return {
                            message: Object(i.d)("You must upload an image.", "Profile Edit"),
                            type: s.fb.Alert
                        };
                    case n.WrongFormatError:
                        return {
                            message: Object(i.d)("You must select a valid image type.", "Profile Edit"),
                            type: s.fb.Alert
                        };
                    case n.TimeoutError:
                        return {
                            message: Object(i.d)("Upload timed-out. Please try again.", "Profile Edit"),
                            type: s.fb.Alert
                        };
                    case n.Uploading:
                        return {
                            message: Object(i.d)("Uploading....", "Profile Edit"),
                            type: s.fb.Brand
                        };
                    case n.ImageNotSelected:
                        return {
                            message: Object(i.d)("Select a image first.", "Profile Edit"),
                            type: s.fb.Alert
                        };
                    default:
                        return {
                            message: Object(i.d)("Please try again.", "Profile Edit"),
                            type: s.fb.Alert
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