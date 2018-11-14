(window.webpackJsonp = window.webpackJsonp || []).push([
    [145], {
        "/ZC1": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return s
            });
            var r = a("mrSG"),
                i = a("q1tI"),
                n = a("Ue10"),
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
                        return i.createElement(n.Z, {
                            dragOver: this.state.isDraggingOver,
                            error: this.props.error
                        }, i.createElement(n.Qa, {
                            position: n.kb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: n.jc.Above
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
        "9s3o": function(e, t, a) {},
        JK2O: function(e, t, a) {},
        Jx49: function(e, t, a) {
            "use strict";
            var r, i = a("/MKj"),
                n = a("fvjX"),
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
                    return c.createElement(h.Ya, {
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
                    }, c.createElement(h.Fb, {
                        fullHeight: !0,
                        fullWidth: !0,
                        position: h.kb.Relative,
                        className: u(t),
                        borderRadius: h.x.Small,
                        overflow: h.db.Hidden
                    }, c.createElement("img", {
                        alt: Object(d.d)("Default Avatar Number {index, number}", {
                            index: e.index
                        }, "Default Avatar"),
                        src: e.imageSrc
                    }))))
                }),
                S = a("94Uw"),
                I = a("Sejb"),
                E = a("kMGJ"),
                k = a("vpah"),
                y = a("GnwI"),
                A = (a("bWJD"), a("c81k"));
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
                                var r = Object(I.a)(a),
                                    i = (a.size / 1024 / 1024).toFixed(4);
                                parseInt(i, 10) > 10 ? t.setState({
                                    statusMessage: k.b.BadSizeError
                                }) : (t.setState({
                                    selectedImageIndex: void 0,
                                    imagePreviewURL: "",
                                    imageFormat: "",
                                    currentImageHasTallAspectRatio: !1
                                }), Object(I.b)(a, function(e) {
                                    t.currentImage = e, t.setState({
                                        statusMessage: null
                                    })
                                }, function(e) {
                                    var a = new Image,
                                        i = !1;
                                    a.onload = function() {
                                        a.width < a.height && (i = !0), t.setState({
                                            currentImageHasTallAspectRatio: i
                                        })
                                    }, a.src = e, t.setState({
                                        imagePreviewURL: e,
                                        imageFormat: r
                                    })
                                }))
                            } else t.setState({
                                statusMessage: k.b.ImageNotSelected
                            })
                        }, t.onUpdateButtonClick = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t, a, r, i, n = this;
                                return l.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (e.preventDefault(), void 0 !== this.state.selectedImageIndex) return this.setDefaultAvatar(), [2];
                                            if (!this.currentImage) return this.setState({
                                                statusMessage: k.b.ImageNotSelected
                                            }), [2];
                                            this.setState({
                                                statusMessage: k.b.Uploading
                                            }), s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, Object(E.a)(this.props.userID, this.props.authToken, S.a.ProfileImage, this.state.imageFormat)];
                                        case 2:
                                            return t = s.sent(), a = t.upload_url, r = t.upload_id, [3, 4];
                                        case 3:
                                            return i = s.sent(), this.logger.error(i, "Request for upload ID failed to get expected response from server."), this.setState({
                                                statusMessage: k.b.UnexpectedError
                                            }), [2];
                                        case 4:
                                            return this.unsubscribe = d.l.subscribe({
                                                topic: Object(b.o)(this.props.userID),
                                                success: function() {
                                                    try {
                                                        Object(E.c)(a, n.currentImage)
                                                    } catch (e) {
                                                        n.logger.error(e, "Profile Image upload failed."), n.unsubscribe(), n.setState({
                                                            statusMessage: k.b.UnexpectedError,
                                                            selectedImageIndex: void 0,
                                                            imagePreviewURL: "",
                                                            imageFormat: "",
                                                            currentImageHasTallAspectRatio: !1
                                                        })
                                                    }
                                                    n.pubsubTimeout = setTimeout(function() {
                                                        return n.handlePubSubTimeout()
                                                    }, 1e4)
                                                },
                                                failure: function() {
                                                    n.setState({
                                                        statusMessage: k.b.UnexpectedError,
                                                        selectedImageIndex: void 0,
                                                        imagePreviewURL: "",
                                                        currentImageHasTallAspectRatio: !1
                                                    })
                                                },
                                                onMessage: function(e) {
                                                    if (e.upload_id === r) {
                                                        clearTimeout(n.pubsubTimeout);
                                                        var t = null;
                                                        t = e.status === k.a.Success ? k.b.Success : e.status === k.a.BadSize ? k.b.BadSizeError : e.status === k.a.NonImage ? k.b.NonImageError : e.status === k.a.WrongFormat ? k.b.WrongFormatError : k.b.UnexpectedError, n.unsubscribe && n.unsubscribe(), n.setState({
                                                            statusMessage: t
                                                        }), t === k.b.Success ? n.handleImageUpdated() : (n.setState({
                                                            imagePreviewURL: "",
                                                            imageFormat: ""
                                                        }), n.currentImage = null)
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
                                statusMessage: k.b.TimeoutError
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
                            var i = {
                                "profile-edit__image-preview": !0,
                                "profile-edit__image-preview-tall": this.state.currentImageHasTallAspectRatio
                            };
                            a = c.createElement(h.Fb, {
                                className: u(i),
                                position: h.kb.Relative,
                                background: h.r.Base
                            }, c.createElement(h.Ra, {
                                borderRadius: h.x.Small,
                                overflow: h.db.Hidden
                            }, c.createElement("img", {
                                "data-test-selector": r.PreviewImage,
                                src: "" + this.state.imagePreviewURL
                            })))
                        }
                        var n = null;
                        "" === this.state.imagePreviewURL && (n = c.createElement(h.Ya, {
                            className: "profile-edit__upload-info"
                        }, c.createElement(h.Ya, null, c.createElement(h.tb, {
                            asset: h.ub.Plus,
                            type: h.vb.Alt2,
                            height: 20,
                            width: 20
                        })), c.createElement(h.W, {
                            type: h.Wb.H3,
                            color: h.O.Alt2,
                            fontSize: h.Ca.Size4
                        }, Object(d.d)("Upload a Photo", "Profile Edit"))));
                        var s = null;
                        this.props.showCloser && (s = c.createElement(p.a, null));
                        var o = null;
                        if (null !== this.state.statusMessage) {
                            var l = Object(k.c)(this.state.statusMessage),
                                g = l.message,
                                b = l.type;
                            o = c.createElement(h.hb, {
                                label: g,
                                type: b
                            })
                        }
                        var S = this.props.login;
                        return this.props.displayName && (S = this.props.displayName), c.createElement(h.Ya, {
                            className: "profile-edit",
                            position: h.kb.Relative,
                            fullHeight: !0
                        }, c.createElement(h.Fb, {
                            className: "profile-edit__background-container",
                            background: h.r.Base,
                            fullWidth: !0
                        }, c.createElement(h.Ya, {
                            padding: 2,
                            display: h.X.InlineBlock,
                            position: h.kb.Relative,
                            textAlign: h.Sb.Center,
                            fullWidth: !0
                        }, c.createElement(h.Fb, {
                            textAlign: h.Sb.Left,
                            borderBottom: !0,
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(h.W, {
                            type: h.Wb.H3,
                            color: h.O.Alt2,
                            fontSize: h.Ca.Size4
                        }, Object(d.d)("Edit Profile Picture for {userName}", {
                            userName: S
                        }, "Profile Edit"), " ")), c.createElement(h.Ya, {
                            className: "profile-edit__upload-container",
                            display: h.X.InlineBlock,
                            position: h.kb.Relative,
                            textAlign: h.Sb.Center,
                            margin: {
                                bottom: 1
                            }
                        }, c.createElement(h.Ya, {
                            className: "profile-edit__upload",
                            display: h.X.InlineBlock,
                            position: h.kb.Relative,
                            textAlign: h.Sb.Center
                        }, c.createElement(m.a, {
                            allowedFileTypes: _,
                            onFilesSubmitted: this.onImageInputChange
                        }, n), a)), c.createElement(h.Fb, {
                            "data-test-selector": r.StatusMessage,
                            fontSize: h.Ca.Size4,
                            position: h.kb.Relative,
                            textAlign: h.Sb.Center,
                            className: "profile-edit__status-message"
                        }, o), c.createElement(h.Fb, {
                            borderBottom: !0,
                            padding: {
                                bottom: .5
                            },
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(h.Ya, {
                            textAlign: h.Sb.Left,
                            margin: {
                                bottom: 1
                            }
                        }, c.createElement(h.W, {
                            type: h.Wb.H3,
                            color: h.O.Alt2,
                            fontSize: h.Ca.Size5
                        }, Object(d.d)("Or select one of these", "Profile Edit"))), c.createElement(h.cc, {
                            childWidth: h.dc.ExtraSmall,
                            gutterSize: h.ec.ExtraSmall,
                            placeholderItems: 3
                        }, t)), c.createElement(h.Ya, {
                            display: h.X.Flex,
                            justifyContent: h.Xa.Center
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
                                            statusMessage: k.b.Uploading
                                        }), e = k.b.UnexpectedError, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, Object(E.b)(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                    case 2:
                                        return 204 === (t = r.sent()).status || 200 === t.status ? e = k.b.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                    case 3:
                                        return a = r.sent(), this.logger.error(a, "Default Avatar PUT failed."), [3, 4];
                                    case 4:
                                        return e === k.b.Success ? this.handleImageUpdated() : this.setState({
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
                                            statusMessage: k.b.Success
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
                U = Object(n.compose)(Object(y.b)("Profile Edit", {
                    autoReportInteractive: !0
                }), Object(g.a)(A, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                }))(O);
            var w = Object(i.connect)(function(e) {
                return {
                    authToken: Object(o.a)(e)
                }
            }, function(e, t) {
                return Object(n.bindActionCreators)({
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
                var i = new FileReader;
                i.onloadend = function() {
                    t(i.result)
                }, i.readAsArrayBuffer(e)
            }

            function i(e) {
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
                return i
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
                i = a("fvjX"),
                n = a("aCAx"),
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
                        return o.createElement(d.Ya, {
                            className: "edit-profile-overlay",
                            display: d.X.Flex,
                            justifyContent: d.Xa.Center,
                            alignContent: d.e.Center,
                            fullHeight: !0,
                            fullWidth: !0
                        }, o.createElement(d.A, {
                            overlay: !0,
                            ariaLabel: Object(l.d)("Edit Profile", "ChannelHeader"),
                            icon: d.ub.Edit,
                            onClick: this.openModal
                        }))
                    }, t = s.__decorate([Object(c.b)("EditProfileOverlay")], t)
                }(o.Component));
            var p = Object(r.connect)(null, function(e) {
                return Object(i.bindActionCreators)({
                    showModal: n.d
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
                i = a("/7QA"),
                n = a("yLwq");

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
                return fetch(i.a.apiBaseURL + "/kraken/users/" + e + "/default_images?client_id=" + i.a.authSettings.clientID + "&api_version=" + i.a.defaultAPIVersion, {
                    method: "PUT",
                    headers: {
                        Authorization: "OAuth " + t,
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify({
                        default_profile_image: n.b[a].id
                    })
                })
            }

            function l(e, t, a, n) {
                return r.__awaiter(this, void 0, void 0, function() {
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, fetch(i.a.apiBaseURL + "/kraken/users/" + e + "/upload_image?client_id=" + i.a.authSettings.clientID + "&api_version=" + i.a.defaultAPIVersion + "&image_type=" + a + "&format=" + n, {
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
                return i
            }), a.d(t, "c", function() {
                return o
            });
            var r, i, n = a("/7QA"),
                s = a("Ue10");

            function o(e) {
                switch (e) {
                    case i.Success:
                        return {
                            message: Object(n.d)("Success!", "Profile Edit"),
                            type: s.ib.Success
                        };
                    case i.UnexpectedError:
                        return {
                            message: Object(n.d)("Unexpected error, please try again.", "Profile Edit"),
                            type: s.ib.Alert
                        };
                    case i.BadSizeError:
                        return {
                            message: Object(n.d)("Image might exceed 10MB.", "Profile Edit"),
                            type: s.ib.Alert
                        };
                    case i.NonImageError:
                        return {
                            message: Object(n.d)("You must upload an image.", "Profile Edit"),
                            type: s.ib.Alert
                        };
                    case i.WrongFormatError:
                        return {
                            message: Object(n.d)("You must select a valid image type.", "Profile Edit"),
                            type: s.ib.Alert
                        };
                    case i.TimeoutError:
                        return {
                            message: Object(n.d)("Upload timed-out. Please try again.", "Profile Edit"),
                            type: s.ib.Alert
                        };
                    case i.Uploading:
                        return {
                            message: Object(n.d)("Uploading....", "Profile Edit"),
                            type: s.ib.Brand
                        };
                    case i.ImageNotSelected:
                        return {
                            message: Object(n.d)("Select a image first.", "Profile Edit"),
                            type: s.ib.Alert
                        };
                    default:
                        return {
                            message: Object(n.d)("Please try again.", "Profile Edit"),
                            type: s.ib.Alert
                        }
                }
            }! function(e) {
                e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
            }(r || (r = {})),
            function(e) {
                e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
            }(i || (i = {}))
        }
    }
]);