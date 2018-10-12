(window.webpackJsonp = window.webpackJsonp || []).push([
    [148, 132], {
        "+XQV": function(e, t, n) {
            "use strict";
            var r = n("tJV7");
            n.o(r, "AutohostStrategy") && n.d(t, "AutohostStrategy", function() {
                return r.AutohostStrategy
            }), n.o(r, "ChommentsPublishingMode") && n.d(t, "ChommentsPublishingMode", function() {
                return r.ChommentsPublishingMode
            }), n.o(r, "DEFAULT_AUTOHOST_SETTINGS") && n.d(t, "DEFAULT_AUTOHOST_SETTINGS", function() {
                return r.DEFAULT_AUTOHOST_SETTINGS
            }), n.o(r, "DEFAULT_VIDEO_MODERATION_SETTINGS") && n.d(t, "DEFAULT_VIDEO_MODERATION_SETTINGS", function() {
                return r.DEFAULT_VIDEO_MODERATION_SETTINGS
            }), n.o(r, "FollowersDurationSeconds") && n.d(t, "FollowersDurationSeconds", function() {
                return r.FollowersDurationSeconds
            }), n.o(r, "RaidPreference") && n.d(t, "RaidPreference", function() {
                return r.RaidPreference
            }), n.o(r, "RequestState") && n.d(t, "RequestState", function() {
                return r.RequestState
            });
            var a = n("+vgv");
            n.d(t, "RequestState", function() {
                return a.a
            });
            var o = n("TFjr");
            n.d(t, "AutohostStrategy", function() {
                return o.a
            }), n.d(t, "DEFAULT_AUTOHOST_SETTINGS", function() {
                return o.b
            }), n.d(t, "RaidPreference", function() {
                return o.c
            });
            var i = n("qzvl");
            n.d(t, "ChommentsPublishingMode", function() {
                return i.a
            }), n.d(t, "DEFAULT_VIDEO_MODERATION_SETTINGS", function() {
                return i.b
            }), n.d(t, "FollowersDurationSeconds", function() {
                return i.c
            })
        },
        "+vgv": function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.Success = 2] = "Success"
                }(r || (r = {}))
        },
        "/ZC1": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("mrSG"),
                a = n("q1tI"),
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(o.X, {
                            dragOver: this.state.isDraggingOver,
                            error: this.props.error
                        }, a.createElement(o.Na, {
                            position: o.db.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: o.ac.Above
                        }, a.createElement("input", {
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
                }(a.Component))
        },
        "3aEF": function(e, t, n) {},
        "3hKJ": function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n("Ue10"),
                o = function(e) {
                    return r.createElement(a.xb, {
                        className: "settings-page-header",
                        borderTop: !0,
                        borderRight: !0,
                        borderLeft: !0,
                        borderRadius: {
                            topLeft: a.x.Medium,
                            topRight: a.x.Medium
                        },
                        background: a.r.Base
                    }, r.createElement(a.Sa, {
                        linkTo: e.linkToParent,
                        onClick: e.onClick,
                        type: a.Ta.Alpha
                    }, r.createElement(a.Va, {
                        display: a.W.Flex,
                        flexWrap: a.Z.NoWrap
                    }, r.createElement(a.Va, {
                        display: a.W.Flex,
                        padding: {
                            x: 1
                        }
                    }, r.createElement(a.mb, {
                        asset: a.nb.AngleLeft,
                        height: 20,
                        width: 20
                    })), r.createElement(a.Va, {
                        flexGrow: 1,
                        margin: 2
                    }, r.createElement(a.V, {
                        bold: !0,
                        fontSize: a.Aa.Size4
                    }, e.title), r.createElement(a.V, {
                        color: a.O.Alt2
                    }, e.description)))))
                };
            n.d(t, "a", function() {
                return o
            })
        },
        "4mBO": function(e, t, n) {
            "use strict";
            var r, a = n("mrSG"),
                o = n("q1tI"),
                i = n("1rIY"),
                s = (r = Object(i.a)("LiveDashboardDeferredLoading", {
                    canRenderAnyComponent: !1,
                    loadFirst: {},
                    registerReportLoaded: function() {
                        return function() {
                            return null
                        }
                    },
                    reportLoaded: function() {
                        return null
                    }
                })).InnerProvider,
                l = r.withContext,
                c = function(e, t) {
                    return void 0 === t && (t = {}),
                        function(n) {
                            return {
                                canRenderAnyComponent: n.canRenderAnyComponent,
                                loadFirst: n.loadFirst,
                                reportLoaded: n.registerReportLoaded(e, t)
                            }
                        }
                };

            function d(e, t) {
                return void 0 === t && (t = {}),
                    function(n) {
                        return l(c(e, t))(function(t) {
                            return void 0 !== t.loadFirst[e] || t.canRenderAnyComponent ? o.createElement(n, a.__assign({}, t)) : null
                        })
                    }
            }
            var u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        canRenderDeferredComponents: 0 === t.props.loadFirst.length,
                        loadFirst: t.props.loadFirst.reduce(function(e, t) {
                            return e[t] = !1, e
                        }, {})
                    }, t.autoReportLoadedNames = {}, t.hasLoadedDeferredComponents = !1, t.initialLoadTimestamp = Date.now(), t.registerReportLoaded = function(e, n) {
                        return void 0 !== t.state.loadFirst[e] ? (n.autoReportLoaded && (t.autoReportLoadedNames[e] = !0), function() {
                            t.setState(function(t) {
                                var n;
                                return {
                                    loadFirst: a.__assign({}, t.loadFirst, (n = {}, n[e] = !0, n))
                                }
                            })
                        }) : function() {
                            return null
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    this.setState(function(t) {
                        return {
                            loadFirst: a.__assign({}, t.loadFirst, e.autoReportLoadedNames)
                        }
                    })
                }, t.prototype.componentDidUpdate = function() {
                    var e = this;
                    if (!this.hasLoadedDeferredComponents) {
                        var t = this.state.loadFirst,
                            n = Object.keys(t).every(function(e) {
                                return t[e]
                            });
                        n && this.setState({
                            canRenderDeferredComponents: n
                        }, function() {
                            e.hasLoadedDeferredComponents = !0
                        })
                    }
                }, t.prototype.render = function() {
                    return o.createElement(s, {
                        value: {
                            canRenderAnyComponent: this.state.canRenderDeferredComponents || this.hasReachedMaximumDeferredTime,
                            loadFirst: this.state.loadFirst,
                            registerReportLoaded: this.registerReportLoaded
                        }
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "hasReachedMaximumDeferredTime", {
                    get: function() {
                        var e = this.props.maximumDeferredTime,
                            t = void 0 !== e ? e : 15e3;
                        return Date.now() >= this.initialLoadTimestamp + t
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(o.Component);
            n.d(t, !1, function() {
                return s
            }), n.d(t, !1, function() {
                return l
            }), n.d(t, "b", function() {
                return d
            }), n.d(t, "a", function() {
                return u
            })
        },
        "6Ll5": function(e, t, n) {},
        "7PeK": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("Ue10"),
                i = (n("KwO+"), function(e) {
                    var t = null;
                    e.footer && (t = a.createElement(o.xb, {
                        padding: 2,
                        background: o.r.Alt2
                    }, e.footer));
                    var n = {};
                    e.header || (n = {
                        topRight: o.x.Medium,
                        topLeft: o.x.Medium
                    });
                    var i = r.__assign({
                        bottomLeft: o.x.Medium,
                        bottomRight: o.x.Medium
                    }, n);
                    return a.createElement(a.Fragment, null, e.header, a.createElement(o.xb, {
                        background: o.r.Base,
                        margin: {
                            bottom: 4
                        },
                        border: !0,
                        borderRadius: i
                    }, e.children, t))
                });
            n.d(t, "a", function() {
                return i
            })
        },
        "7WKn": function(e, t, n) {},
        "7lJP": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("/MKj"),
                a = n("fvjX"),
                o = n("aCAx"),
                i = n("kRBY"),
                s = n("mrSG"),
                l = n("q1tI"),
                c = n("oJmH"),
                d = n("/7QA"),
                u = n("/ZC1"),
                p = n("cZKs"),
                h = n("yR8l"),
                m = n("/aPz"),
                g = n("94Uw"),
                f = n("Sejb"),
                b = n("kMGJ"),
                v = n("vpah"),
                y = n("GnwI"),
                S = n("Ue10"),
                E = (n("DGtd"), n("MTto")),
                C = ["image/*"],
                _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            statusMessage: null,
                            imageUpdated: !1,
                            loading: !1
                        }, t.currentImage = null, t.logger = d.j.withCategory("UserImageUploader"), t.onImageInputChange = function(e) {
                            var n;
                            if (null !== e) {
                                t.setState({
                                    loading: !0,
                                    statusMessage: null
                                }), n = e[0];
                                var r = Object(f.a)(n),
                                    a = (n.size / 1024 / 1024).toFixed(4);
                                parseInt(a, 10) > 10 ? t.setState({
                                    loading: !1,
                                    statusMessage: v.b.BadSizeError
                                }) : Object(f.b)(n, function(e) {
                                    return s.__awaiter(t, void 0, void 0, function() {
                                        var t, n, a, o, i = this;
                                        return s.__generator(this, function(s) {
                                            switch (s.label) {
                                                case 0:
                                                    this.currentImage = e, s.label = 1;
                                                case 1:
                                                    return s.trys.push([1, 3, , 4]), [4, Object(b.a)(this.props.userID, this.props.authToken, this.props.imageType, r)];
                                                case 2:
                                                    return t = s.sent(), n = t.upload_url, a = t.upload_id, [3, 4];
                                                case 3:
                                                    return o = s.sent(), this.logger.error(o, "Request for upload ID failed to get expected response from server."), this.setState({
                                                        loading: !1,
                                                        statusMessage: v.b.UnexpectedError
                                                    }), [2];
                                                case 4:
                                                    return this.unsubscribe = d.k.subscribe({
                                                        topic: Object(m.n)(this.props.userID),
                                                        success: function() {
                                                            try {
                                                                Object(b.c)(n, i.currentImage)
                                                            } catch (e) {
                                                                i.logger.error(e, "Image upload failed."), i.unsubscribe(), i.setState({
                                                                    loading: !1,
                                                                    statusMessage: v.b.UnexpectedError
                                                                })
                                                            }
                                                            i.timeoutHandle = setTimeout(function() {
                                                                return i.handlePubSubTimeout()
                                                            }, 1e4)
                                                        },
                                                        failure: function() {
                                                            i.setState({
                                                                loading: !1,
                                                                statusMessage: v.b.UnexpectedError
                                                            })
                                                        },
                                                        onMessage: function(e) {
                                                            if (e.upload_id === a) {
                                                                clearTimeout(i.timeoutHandle);
                                                                var t = null;
                                                                e.status === v.a.Success ? t = v.b.Success : e.status === v.a.BadSize ? (t = v.b.BadSizeError, i.currentImage = null) : e.status === v.a.NonImage ? (t = v.b.NonImageError, i.currentImage = null) : e.status === v.a.WrongFormat ? (t = v.b.WrongFormatError, i.currentImage = null) : (t = v.b.UnexpectedError, i.currentImage = null), i.unsubscribe && i.unsubscribe(), i.setState({
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
                        var t = Object(d.d)("Editing profile banner for {userName}", {
                            userName: e
                        }, "UserImageUploader");
                        this.props.imageType === g.a.ChannelOfflineImage && (t = Object(d.d)("Editing video banner for {userName}", {
                            userName: e
                        }, "UserImageUploader"));
                        var n = null;
                        if (this.state.loading) n = l.createElement(S.Va, {
                            className: "user-image-uploader__upload-svg--anim-fill",
                            position: S.db.Relative,
                            "data-test-selector": "loading-status"
                        }, l.createElement(S.mb, {
                            asset: S.nb.Upload,
                            type: S.ob.Brand,
                            width: 99,
                            height: 76
                        }));
                        else {
                            var r = Object(d.d)("Recommended image size: 1200x380 and less than 10MB.", "UserImageUploader");
                            this.props.imageType === g.a.ChannelOfflineImage && (r = Object(d.d)("Recommended image size: 1920x1080 and less than 10MB.", "UserImageUploader")), n = l.createElement(S.Va, null, l.createElement(S.Va, {
                                className: "user-image-uploader__upload-info"
                            }, l.createElement(S.Va, null, l.createElement(S.mb, {
                                asset: S.nb.Plus,
                                type: S.ob.Alt2,
                                height: 20,
                                width: 20
                            })), l.createElement(S.V, {
                                type: S.Nb.H3,
                                color: S.O.Alt2,
                                fontSize: S.Aa.Size4
                            }, Object(d.d)("Upload a Photo", "User Image Uploader"))), l.createElement(S.Va, {
                                className: "user-image-uploader__upload-recommendation",
                                position: S.db.Absolute,
                                textAlign: S.Jb.Left,
                                attachLeft: !0,
                                attachBottom: !0,
                                margin: {
                                    left: 3,
                                    bottom: 1
                                }
                            }, l.createElement(S.V, {
                                type: S.Nb.H6,
                                color: S.O.Alt2,
                                fontSize: S.Aa.Size8,
                                align: S.Xb.TextBottom
                            }, r)))
                        }
                        var a = null;
                        this.props.showCloser && (a = l.createElement(p.a, null));
                        var o = null;
                        if (null !== this.state.statusMessage) {
                            var i = Object(v.c)(this.state.statusMessage);
                            o = l.createElement(S.ab, {
                                label: i.message,
                                type: i.type
                            })
                        }
                        return l.createElement(S.Va, {
                            className: "user-image-uploader",
                            position: S.db.Relative,
                            fullHeight: !0
                        }, l.createElement(S.xb, {
                            className: "user-image-uploader__background-container",
                            background: S.r.Base,
                            fullWidth: !0
                        }, l.createElement(S.Va, {
                            padding: 2,
                            display: S.W.InlineBlock,
                            position: S.db.Relative,
                            textAlign: S.Jb.Center,
                            fullWidth: !0
                        }, l.createElement(S.xb, {
                            borderBottom: !0,
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(S.V, {
                            type: S.Nb.H3,
                            fontSize: S.Aa.Size4
                        }, t)), l.createElement(S.Va, {
                            className: "user-image-uploader__upload-container",
                            display: S.W.InlineBlock,
                            position: S.db.Relative,
                            textAlign: S.Jb.Center,
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement(S.Va, {
                            className: "user-image-uploader__upload",
                            display: S.W.InlineBlock,
                            position: S.db.Relative,
                            textAlign: S.Jb.Center
                        }, l.createElement(u.a, {
                            allowedFileTypes: C,
                            onFilesSubmitted: this.onImageInputChange
                        }, n))), l.createElement(S.xb, {
                            "data-test-selector": "status-message",
                            fontSize: S.Aa.Size4,
                            position: S.db.Relative,
                            textAlign: S.Jb.Center,
                            className: "user-image-uploader__status-message"
                        }, o))), a)
                    }, t
                }(l.Component),
                w = Object(c.compose)(Object(y.c)("User Image Upload"), Object(h.a)(E, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                }))(_);
            var O = Object(r.connect)(function(e) {
                return {
                    authToken: Object(i.a)(e)
                }
            }, function(e, t) {
                return Object(a.bindActionCreators)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(o.c)()
                    }
                }, e)
            })(w);
            n.d(t, "UserImageUploader", function() {
                return O
            }), n.d(t, "PublicProps", function() {})
        },
        "8ENv": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                a = i(n("J2m7")),
                o = i(n("xweI"));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.refs = {}
                }
                return r(e, [{
                    key: "add",
                    value: function(e, t) {
                        this.refs[e] || (this.refs[e] = []), this.refs[e].push(t)
                    }
                }, {
                    key: "remove",
                    value: function(e, t) {
                        var n = this.getIndex(e, t); - 1 !== n && this.refs[e].splice(n, 1)
                    }
                }, {
                    key: "isActive",
                    value: function() {
                        return this.active
                    }
                }, {
                    key: "getActive",
                    value: function() {
                        var e = this;
                        return (0, a.default)(this.refs[this.active.collection], function(t) {
                            return t.node.sortableInfo.index == e.active.index
                        })
                    }
                }, {
                    key: "getIndex",
                    value: function(e, t) {
                        return this.refs[e].indexOf(t)
                    }
                }, {
                    key: "getOrderedRefs",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.active.collection;
                        return (0, o.default)(this.refs[e], function(e) {
                            return e.node.sortableInfo.index
                        })
                    }
                }]), e
            }();
            t.default = s
        },
        "94Uw": function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.ProfileImage = "profile_image", e.ProfileBanner = "profile_banner", e.ChannelOfflineImage = "channel_offline_image"
                }(r || (r = {}))
        },
        "9kwc": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "StatsWidget"
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
                                                value: "viewersCount"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "profileViewCount"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "followers"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "totalCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "subscriberScore"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "countBreakdown"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "count"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "current"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "next"
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
                    end: 202
                }
            };
            n.loc.source = {
                body: "query StatsWidget($login: String!) {\nuser(login: $login) {\nid\nstream {\nid\nviewersCount\ncreatedAt\n}\nprofileViewCount\nfollowers {\ntotalCount\n}\nsubscriberScore {\ncountBreakdown {\ncount\n}\ncurrent\nnext\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "B+LW": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("/MKj"),
                i = n("fvjX"),
                s = n("aCAx"),
                l = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openModal = function() {
                            var e = t,
                                n = function(t) {
                                    function n() {
                                        return null !== t && t.apply(this, arguments) || this
                                    }
                                    return r.__extends(n, t), n.prototype.render = function() {
                                        return e.props.triggerModal(e.closeModal)
                                    }, n
                                }(a.Component);
                            t.props.showModal(n, {})
                        }, t.closeModal = function() {
                            t.props.closeModal()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.children(this.openModal)
                    }, t
                }(a.Component);
            var c = Object(o.connect)(null, function(e) {
                return Object(i.bindActionCreators)({
                    showModal: s.d,
                    closeModal: s.c
                }, e)
            })(l);
            n.d(t, "a", function() {
                return c
            })
        },
        B2xO: function(e, t, n) {},
        BCEg: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();
            t.default = function(e) {
                var t, n, d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    withRef: !1
                };
                return n = t = function(t) {
                    function n() {
                        return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, n),
                            function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, t), a(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = (0, s.findDOMNode)(this);
                            e.sortableHandle = !0
                        }
                    }, {
                        key: "getWrappedInstance",
                        value: function() {
                            return (0, l.default)(d.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"), this.refs.wrappedInstance
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = d.withRef ? "wrappedInstance" : null;
                            return i.default.createElement(e, r({
                                ref: t
                            }, this.props))
                        }
                    }]), n
                }(o.Component), t.displayName = (0, c.provideDisplayName)("sortableHandle", e), n
            };
            var o = n("q1tI"),
                i = d(o),
                s = n("i8i4"),
                l = d(n("QLaP")),
                c = n("jTc+");

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        CEZT: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("mrSG"),
                a = n("b6Yk"),
                o = function(e) {
                    return r.__awaiter(void 0, void 0, Promise, function() {
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, a.a.getOrThrow("https://api.twitch.tv/v5/permissions/channels/" + e + "/editable_channels")];
                                case 1:
                                    return [2, t.sent().body.editable_channels || []]
                            }
                        })
                    })
                }
        },
        DGtd: function(e, t, n) {},
        EkNY: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "d", function() {
                return a
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "c", function() {
                return l
            }), n.d(t, "l", function() {
                return h
            }), n.d(t, "m", function() {
                return m
            }), n.d(t, "k", function() {
                return g
            }), n.d(t, "j", function() {
                return f
            }), n.d(t, "g", function() {
                return b
            }), n.d(t, "i", function() {
                return v
            }), n.d(t, "e", function() {
                return y
            }), n.d(t, "f", function() {
                return S
            }), n.d(t, "h", function() {
                return E
            });
            var r, a, o, i, s, l, c = n("mrSG"),
                d = n("/7QA"),
                u = n("2xye"),
                p = n("lDS7");
            ! function(e) {
                e.Added = "added", e.Removed = "removed"
            }(r || (r = {})),
            function(e) {
                e.SliderMove = "slidermove", e.StreamDelayClick = "streamdelayclick"
            }(a || (a = {})),
            function(e) {
                e.Click = "click"
            }(o || (o = {})),
            function(e) {
                e.Hover = "hover"
            }(i || (i = {})),
            function(e) {
                e.StorePastBroadcasts = "store_past_broadcasts"
            }(s || (s = {})),
            function(e) {
                e.ExpandedView = "expanded_view", e.RunAd = "run_ad", e.StreamDelay = "stream_delay", e.StreamInformation = "stream_info_update", e.StreamMarker = "stream_marker", e.BountyBoard = "bounty_board", e.StartBounty = "start_bounty", e.CancelBounty = "cancel_bounty", e.StopBounty = "stop_bounty", e.CheckBounties = "check_bounties"
            }(l || (l = {}));
            var h = function(e) {
                    var t = e.streamTime;
                    d.o.tracking.track(u.SpadeEventType.StreamSummaryBannerClick, {
                        stream_time: new Date(t).getTime() / 1e3
                    })
                },
                m = function(e) {
                    E(l.StreamInformation, {
                        target_name: "update",
                        update_successful: e
                    })
                },
                g = function(e) {
                    d.o.tracking.track(u.SpadeEventType.LiveDashboardStreamStats, {
                        action: i.Hover,
                        target_name: e,
                        stats_configuration: JSON.stringify(d.l.get("streamStatsConfiguration", p.a))
                    })
                },
                f = function(e) {
                    d.o.tracking.track(u.SpadeEventType.LiveDashboardStreamHealthEvent, {
                        action: o.Click,
                        target_name: e
                    })
                },
                b = function(e, t, n) {
                    d.o.tracking.track(u.SpadeEventType.AutoHostChannelUpdate, {
                        time: Date.now(),
                        location: "dashboard",
                        login: t,
                        target_channel: e,
                        action: n
                    })
                },
                v = function(e, t, n, r) {
                    E(l.StreamDelay, {
                        type: e,
                        slider_start_position: t,
                        slider_position: n,
                        update_successful: r
                    })
                },
                y = function(e) {
                    d.o.tracking.track(u.SpadeEventType.BroadcastPageClick, {
                        time: Date.now(),
                        broadcast_software: e
                    })
                },
                S = function(e) {
                    d.o.tracking.track(u.SpadeEventType.DashboardSettingsInteraction, {
                        setting_name: e.settingName,
                        setting_value: e.settingValue,
                        content: e.content,
                        medium: e.medium,
                        channel_id: e.channelID
                    })
                },
                E = function(e, t) {
                    d.o.tracking.track(u.SpadeEventType.LiveDashboardInteraction, c.__assign({
                        action: e
                    }, t || {}))
                }
        },
        FEav: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "UploadVideoPlayerBanner_User"
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
                    end: 98
                }
            };
            n.loc.source = {
                body: "query UploadVideoPlayerBanner_User($login: String!) {\nuser(login: $login) {\nid\nofflineImageURL\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        GIun: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = function(e) {
                    var t = r.Children.only(e.children);
                    return r.cloneElement(t, {
                        "data-selectable": !0,
                        tabIndex: -1
                    })
                };
            n.d(t, "a", function() {
                return a
            })
        },
        HOmj: function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ToggleRitualsEnabled"
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
                                    value: "ToggleRitualsEnabledInput"
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
                                value: "toggleRitualsEnabled"
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
                                        value: "isEnabled"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "user"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ritualsEnabled"
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
                    end: 215
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/chat/models/rituals-enabled-fragment.gql"\nmutation ToggleRitualsEnabled($input: ToggleRitualsEnabledInput!) {\ntoggleRitualsEnabled(input: $input) {\nisEnabled\nuser {\n...ritualsEnabled\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("pKQ0").definitions)), e.exports = r
        },
        JBqe: function(e, t, n) {
            "use strict";
            var r, a, o = n("mrSG"),
                i = n("q1tI"),
                s = n("x7UT"),
                l = n("0Log"),
                c = n("/aPz"),
                d = n("1rIY"),
                u = n("kxrW"),
                p = n("b6Yk"),
                h = function(e) {
                    return o.__awaiter(void 0, void 0, void 0, function() {
                        var t;
                        return o.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, p.a.get("/v5/streams/" + e)];
                                case 1:
                                    return [2, !(!(t = n.sent()).body || !t.body.stream)]
                            }
                        })
                    })
                },
                m = (r = Object(d.a)("IsStreamLiveContext", {
                    isLive: void 0,
                    onStreamStatusChange: function() {
                        return null
                    }
                })).InnerProvider,
                g = r.withContext,
                f = function(e) {
                    return e
                };

            function b(e) {
                return g(f)(e)
            }
            var v = 3e5,
                y = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.fetchIsStreamLiveLegacyAPI = function() {
                            return o.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, h(this.props.channelID)];
                                        case 1:
                                            return e = t.sent(), this.setState({
                                                isLive: e
                                            }), [2]
                                    }
                                })
                            })
                        }, n.onStreamStatusChange = function(e) {
                            n.setLiveState(e === u.a.Online)
                        }, n.pollLegacyAPI = function() {
                            n.legacyAPIIntervalID = setInterval(n.fetchIsStreamLiveLegacyAPI, v)
                        }, n.resetLegacyAPIPoll = function() {
                            n.legacyAPIIntervalID && (clearInterval(n.legacyAPIIntervalID), n.pollLegacyAPI())
                        }, n.setInitialLiveState = function() {
                            return o.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return void 0 !== this.state.isLive ? [3, 2] : [4, h(this.props.channelID)];
                                        case 1:
                                            e = t.sent(), void 0 === this.state.isLive && this.setState({
                                                isLive: e
                                            }), t.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }, n.state = {
                            onStreamStatusChange: n.onStreamStatusChange
                        }, n
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.onPubsubUpdate(), this.setInitialLiveState(), this.pollLegacyAPI()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onPubsubUpdate()
                    }, t.prototype.componentWillUnmount = function() {
                        this.legacyAPIIntervalID && clearInterval(this.legacyAPIIntervalID)
                    }, t.prototype.render = function() {
                        return i.createElement(m, {
                            value: this.state
                        }, this.props.children)
                    }, t.prototype.onPubsubUpdate = function() {
                        var e = this.props.pubsub.messages,
                            t = e.streamUp && e.streamUp.server_time || 0,
                            n = e.streamDown && e.streamDown.server_time || 0;
                        (t || n) && this.setLiveState(t > n)
                    }, t.prototype.setLiveState = function(e) {
                        this.resetLegacyAPIPoll(), e !== this.state.isLive && this.setState({
                            isLive: e
                        })
                    }, t
                }(i.Component),
                S = Object(s.a)([{
                    topic: function(e) {
                        return Object(c.F)(e.channelID)
                    },
                    mapMessageTypesToProps: (a = {}, a[l.PubsubMessageType.ChannelStreamUp] = "streamUp", a[l.PubsubMessageType.ChannelStreamDown] = "streamDown", a)
                }])(y);
            n.d(t, !1, function() {
                return m
            }), n.d(t, !1, function() {
                return g
            }), n.d(t, "b", function() {
                return b
            }), n.d(t, !1, function() {
                return y
            }), n.d(t, "a", function() {
                return S
            })
        },
        "Jxh/": function(e, t, n) {
            "use strict";

            function r(e) {
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
                return r
            })
        },
        K1Va: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UpdateBroadcastSettings"
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
                                    value: "UpdateBroadcastSettingsInput"
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
                                value: "updateBroadcastSettings"
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
                                        value: "broadcastSettings"
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
                                                value: "isMature"
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
                    end: 152
                }
            };
            n.loc.source = {
                body: "mutation UpdateBroadcastSettings($input: UpdateBroadcastSettingsInput!) {\nupdateBroadcastSettings(input: $input) {\nbroadcastSettings {\nid\nisMature\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "KwO+": function(e, t, n) {},
        MTto: function(e, t) {
            var n = {
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
            n.loc.source = {
                body: "query UserImageUploader($login: String!) {\nuser(login: $login) {\nid\nlogin\nbannerImageURL\nofflineImageURL\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        N3I0: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("u5aL"),
                i = n("/7QA"),
                s = n("Ue10"),
                l = function() {
                    return a.createElement(s.Va, {
                        display: s.W.Flex,
                        flexDirection: s.Y.Column,
                        justifyContent: s.Ua.Center,
                        alignItems: s.f.Center,
                        flexGrow: 1,
                        fullHeight: !0,
                        padding: {
                            y: 1
                        },
                        zIndex: s.ac.Above
                    }, a.createElement(s.xb, {
                        color: s.O.Alt2,
                        textAlign: s.Jb.Center,
                        flexShrink: 1
                    }, a.createElement(s.mb, {
                        asset: s.nb.DeadGlitch,
                        width: 46,
                        height: 48
                    })), a.createElement(s.Na, {
                        margin: {
                            top: 1
                        },
                        textAlign: s.Jb.Center
                    }, a.createElement(s.V, {
                        type: s.Nb.H4,
                        "data-test-selector": "search-error-message"
                    }, Object(i.d)("Search is not available at this time", "DropdownSearchError"))), a.createElement(s.V, {
                        type: s.Nb.P
                    }, Object(i.d)("Please try again later", "DropdownSearchError")))
                },
                c = n("8Ad5"),
                d = function(e) {
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
                            var n = function() {
                                e.preventDefault(), e.stopPropagation()
                            };
                            e.keyCode === c.a.Esc ? t.setState({
                                isOpen: !1
                            }) : e.keyCode === c.a.Up ? (n(), t.focusNext(-1)) : e.keyCode === c.a.Down && (n(), t.focusNext(1))
                        }, t.onClickOut = function() {
                            t.state.isOpen && t.setState({
                                isOpen: !1
                            }), t.props.onClose && t.props.onClose()
                        }, t.onMouseOver = function(e) {
                            var n = e.target.closest("[data-selectable]");
                            n && (n.focus(), n.tabIndex = 0, t.state.currentFocus && (t.state.currentFocus.tabIndex = -1), t.setState({
                                currentFocus: n
                            }), t.props.onFocusChange && t.props.onFocusChange(n))
                        }, t.getInputRef = function(e) {
                            t.inputRef = e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = void 0 === this.props.showDropdown || this.props.showDropdown,
                            t = this.props.isErrored ? a.createElement(l, null) : a.Children.only(this.props.children),
                            n = a.createElement(s.pb, {
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
                        return this.props.inline ? a.createElement(o.a, {
                            onClickOut: this.onClickOut
                        }, a.createElement(s.xb, {
                            background: this.state.isInputFocused || this.state.isOpen ? s.r.Base : void 0,
                            borderRadius: s.x.Large,
                            padding: .5,
                            position: s.db.Relative,
                            elevation: this.state.isInputFocused || this.state.isOpen ? 3 : void 0
                        }, n, e && a.createElement(s.xb, {
                            attachLeft: !0,
                            background: s.r.Base,
                            borderRadius: s.x.Large,
                            display: this.state.isOpen ? s.W.Block : s.W.Hide,
                            fullWidth: !0,
                            padding: {
                                y: 1
                            },
                            position: s.db.Absolute,
                            zIndex: s.ac.Above,
                            elevation: 3
                        }, a.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))) : a.createElement(o.a, {
                            onClickOut: this.onClickOut
                        }, n, e && a.createElement(s.u, r.__assign({
                            noTail: !0
                        }, this.props.balloonProps, {
                            show: this.state.isOpen
                        }), a.createElement("div", {
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
                        var t, n = document.querySelectorAll("[data-selectable=true]"),
                            r = document.activeElement,
                            a = Array.prototype.indexOf.call(n, r);
                        if ((t = a < 0 ? e > 0 ? 0 : n.length - 1 : a + e) < 0 && (t = 0), !(t >= n.length)) {
                            var o = n.item(t);
                            o.focus(), o.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                                currentFocus: o
                            }), this.props.onFocusChange && this.props.onFocusChange(o)
                        }
                    }, t
                }(a.Component);
            n.d(t, "a", function() {
                return d
            })
        },
        NkOX: function(e, t, n) {
            "use strict";
            var r, a;
            n.d(t, "a", function() {
                    return r
                }), n.d(t, "b", function() {
                    return a
                }),
                function(e) {
                    e.AdsWidget = "ads-widget", e.BountyBoardWidget = "bounty-board-widget", e.ExtensionLiveConfigure = "extension-live-configure", e.HostWidget = "host-widget", e.LiveChat = "live-chat", e.SquadStream = "squad-stream", e.Stats = "stats", e.StreamDelay = "stream-delay", e.StreamHealth = "stream-health", e.StreamInformation = "stream-information", e.StreamMarker = "stream-marker", e.VideoPreview = "video-preview", e.VideoProducerWidget = "video-producer-widget"
                }(r || (r = {})),
                function(e) {
                    e.AdsWidget = "ads_widget", e.BountyBoardWidget = "bounty_board_widget", e.ExtensionLiveConfigureWidget = "extension_config_widget", e.HostWidget = "host_widget", e.LiveChatWidget = "chat_widget", e.SquadStreamWidget = "squad_stream_widget", e.StatsWidget = "stats_widget", e.StreamDelayWidget = "stream_delay_widget", e.StreamHealthWidget = "stream_health_widget", e.StreamInformationWidget = "stream_information_widget", e.StreamMarkerWidget = "stream_marker_widget", e.VideoPreviewWidget = "video_preview_widget", e.VideoProducerWidget = "video_producer_widget"
                }(a || (a = {}))
        },
        NmtA: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DropsSettingsForm_GetUser"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 79
                }
            };
            n.loc.source = {
                body: "query DropsSettingsForm_GetUser($login: String!) {\nuser(login: $login) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Nxrd: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayMove = t.sortableHandle = t.sortableElement = t.sortableContainer = t.SortableHandle = t.SortableElement = t.SortableContainer = void 0;
            var r = n("jTc+");
            Object.defineProperty(t, "arrayMove", {
                enumerable: !0,
                get: function() {
                    return r.arrayMove
                }
            });
            var a = s(n("ezMb")),
                o = s(n("hk6T")),
                i = s(n("BCEg"));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.SortableContainer = a.default, t.SortableElement = o.default, t.SortableHandle = i.default, t.sortableContainer = a.default, t.sortableElement = o.default, t.sortableHandle = i.default
        },
        SMeG: function(e, t, n) {},
        Sejb: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                var r = new FileReader;
                r.onloadend = function() {
                    n && n(r.result)
                }, r.readAsDataURL(e);
                var a = new FileReader;
                a.onloadend = function() {
                    t(a.result)
                }, a.readAsArrayBuffer(e)
            }

            function a(e) {
                var t = "";
                if (e && e.name) {
                    var n = e.name;
                    t = n.slice((Math.max(0, n.lastIndexOf(".")) || 1 / 0) + 1)
                }
                return "" === t && (t = "png"), t
            }
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return a
            })
        },
        TFjr: function(e, t, n) {
            "use strict";
            var r, a;
            n.d(t, "a", function() {
                    return r
                }), n.d(t, "c", function() {
                    return a
                }), n.d(t, "b", function() {
                    return o
                }),
                function(e) {
                    e.Random = "random", e.Ordered = "ordered"
                }(r || (r = {})),
                function(e) {
                    e.All = "all", e.Network = "network", e.None = "none"
                }(a || (a = {}));
            var o = {
                vodcastHosting: !1,
                enabled: !1,
                strategy: r.Random,
                teamHost: !1,
                raidPreference: a.None
            }
        },
        "b/5F": function(e, t, n) {},
        bDCY: function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RitualsEnabled_User"
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
                            alias: {
                                kind: "Name",
                                value: "channel"
                            },
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
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "ritualsEnabled"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 153
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/chat/models/rituals-enabled-fragment.gql"\nquery RitualsEnabled_User($id: ID!) {\nchannel: user(id: $id) {\n...ritualsEnabled\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("pKQ0").definitions)), e.exports = r
        },
        bS3I: function(e, t, n) {},
        c0Zc: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n("Ue10");

            function o(e) {
                var t = null;
                return e.description && (t = r.createElement(a.Va, {
                    margin: {
                        top: 1
                    }
                }, r.createElement(a.V, {
                    color: a.O.Alt2
                }, e.description))), r.createElement(a.Va, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(a.V, {
                    type: a.Nb.H3,
                    fontSize: a.Aa.Size4,
                    color: a.O.Alt,
                    bold: !0
                }, e.title), t)
            }
            n.d(t, "a", function() {
                return o
            })
        },
        ezMb: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                a = function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e)) return function(e, t) {
                            var n = [],
                                r = !0,
                                a = !1,
                                o = void 0;
                            try {
                                for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                            } catch (e) {
                                a = !0, o = e
                            } finally {
                                try {
                                    !r && s.return && s.return()
                                } finally {
                                    if (a) throw o
                                }
                            }
                            return n
                        }(e, t);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();
            t.default = function(e) {
                var t, n, h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    withRef: !1
                };
                return n = t = function(t) {
                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var t = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                        return t.handleStart = function(e) {
                            var n = t.props,
                                r = n.distance,
                                a = n.shouldCancelStart;
                            if (2 === e.button || a(e)) return !1;
                            t._touched = !0, t._pos = {
                                x: e.pageX,
                                y: e.pageY
                            };
                            var o = (0, p.closest)(e.target, function(e) {
                                return null != e.sortableInfo
                            });
                            if (o && o.sortableInfo && t.nodeIsChild(o) && !t.state.sorting) {
                                var i = t.props.useDragHandle,
                                    s = o.sortableInfo,
                                    l = s.index,
                                    c = s.collection;
                                if (i && !(0, p.closest)(e.target, function(e) {
                                        return null != e.sortableHandle
                                    })) return;
                                t.manager.active = {
                                    index: l,
                                    collection: c
                                }, "a" === e.target.tagName.toLowerCase() && e.preventDefault(), r || (0 === t.props.pressDelay ? t.handlePress(e) : t.pressTimer = setTimeout(function() {
                                    return t.handlePress(e)
                                }, t.props.pressDelay))
                            }
                        }, t.nodeIsChild = function(e) {
                            return e.sortableInfo.manager === t.manager
                        }, t.handleMove = function(e) {
                            var n = t.props,
                                r = n.distance,
                                a = n.pressThreshold;
                            if (!t.state.sorting && t._touched) {
                                t._delta = {
                                    x: t._pos.x - e.pageX,
                                    y: t._pos.y - e.pageY
                                };
                                var o = Math.abs(t._delta.x) + Math.abs(t._delta.y);
                                r || a && !(a && o >= a) ? r && o >= r && t.manager.isActive() && t.handlePress(e) : (clearTimeout(t.cancelTimer), t.cancelTimer = setTimeout(t.cancel, 0))
                            }
                        }, t.handleEnd = function() {
                            var e = t.props.distance;
                            t._touched = !1, e || t.cancel()
                        }, t.cancel = function() {
                            t.state.sorting || (clearTimeout(t.pressTimer), t.manager.active = null)
                        }, t.handlePress = function(e) {
                            var n = t.manager.getActive();
                            if (n) {
                                var r = t.props,
                                    a = r.axis,
                                    o = r.getHelperDimensions,
                                    i = r.helperClass,
                                    s = r.hideSortableGhost,
                                    l = r.onSortStart,
                                    c = r.useWindowAsScrollContainer,
                                    d = n.node,
                                    u = n.collection,
                                    h = d.sortableInfo.index,
                                    g = (0, p.getElementMargin)(d),
                                    f = t.container.getBoundingClientRect(),
                                    b = o({
                                        index: h,
                                        node: d,
                                        collection: u
                                    });
                                t.node = d, t.margin = g, t.width = b.width, t.height = b.height, t.marginOffset = {
                                    x: t.margin.left + t.margin.right,
                                    y: Math.max(t.margin.top, t.margin.bottom)
                                }, t.boundingClientRect = d.getBoundingClientRect(), t.containerBoundingRect = f, t.index = h, t.newIndex = h, t.axis = {
                                    x: a.indexOf("x") >= 0,
                                    y: a.indexOf("y") >= 0
                                }, t.offsetEdge = t.getEdgeOffset(d), t.initialOffset = t.getOffset(e), t.initialScroll = {
                                    top: t.scrollContainer.scrollTop,
                                    left: t.scrollContainer.scrollLeft
                                }, t.initialWindowScroll = {
                                    top: window.pageYOffset,
                                    left: window.pageXOffset
                                };
                                var v, y = d.querySelectorAll("input, textarea, select"),
                                    S = d.cloneNode(!0),
                                    E = [].concat(m(S.querySelectorAll("input, textarea, select")));
                                if (E.forEach(function(e, t) {
                                        "file" !== e.type && y[t] && (e.value = y[t].value)
                                    }), t.helper = t.document.body.appendChild(S), t.helper.style.position = "fixed", t.helper.style.top = t.boundingClientRect.top - g.top + "px", t.helper.style.left = t.boundingClientRect.left - g.left + "px", t.helper.style.width = t.width + "px", t.helper.style.height = t.height + "px", t.helper.style.boxSizing = "border-box", t.helper.style.pointerEvents = "none", s && (t.sortableGhost = d, d.style.visibility = "hidden", d.style.opacity = 0), t.minTranslate = {}, t.maxTranslate = {}, t.axis.x && (t.minTranslate.x = (c ? 0 : f.left) - t.boundingClientRect.left - t.width / 2, t.maxTranslate.x = (c ? t.contentWindow.innerWidth : f.left + f.width) - t.boundingClientRect.left - t.width / 2), t.axis.y && (t.minTranslate.y = (c ? 0 : f.top) - t.boundingClientRect.top - t.height / 2, t.maxTranslate.y = (c ? t.contentWindow.innerHeight : f.top + f.height) - t.boundingClientRect.top - t.height / 2), i)(v = t.helper.classList).add.apply(v, m(i.split(" ")));
                                t.listenerNode = e.touches ? d : t.contentWindow, p.events.move.forEach(function(e) {
                                    return t.listenerNode.addEventListener(e, t.handleSortMove, !1)
                                }), p.events.end.forEach(function(e) {
                                    return t.listenerNode.addEventListener(e, t.handleSortEnd, !1)
                                }), t.setState({
                                    sorting: !0,
                                    sortingIndex: h
                                }), l && l({
                                    node: d,
                                    index: h,
                                    collection: u
                                }, e)
                            }
                        }, t.handleSortMove = function(e) {
                            var n = t.props.onSortMove;
                            e.preventDefault(), t.updatePosition(e), t.animateNodes(), t.autoscroll(), n && n(e)
                        }, t.handleSortEnd = function(e) {
                            var n = t.props,
                                r = n.hideSortableGhost,
                                a = n.onSortEnd,
                                o = t.manager.active.collection;
                            t.listenerNode && (p.events.move.forEach(function(e) {
                                return t.listenerNode.removeEventListener(e, t.handleSortMove)
                            }), p.events.end.forEach(function(e) {
                                return t.listenerNode.removeEventListener(e, t.handleSortEnd)
                            })), t.helper.parentNode.removeChild(t.helper), r && t.sortableGhost && (t.sortableGhost.style.visibility = "", t.sortableGhost.style.opacity = "");
                            for (var i = t.manager.refs[o], s = 0, l = i.length; s < l; s++) {
                                var c = i[s],
                                    d = c.node;
                                c.edgeOffset = null, d.style[p.vendorPrefix + "Transform"] = "", d.style[p.vendorPrefix + "TransitionDuration"] = ""
                            }
                            clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.manager.active = null, t.setState({
                                sorting: !1,
                                sortingIndex: null
                            }), "function" == typeof a && a({
                                oldIndex: t.index,
                                newIndex: t.newIndex,
                                collection: o
                            }, e), t._touched = !1
                        }, t.autoscroll = function() {
                            var e = t.translate,
                                n = {
                                    x: 0,
                                    y: 0
                                },
                                r = {
                                    x: 1,
                                    y: 1
                                },
                                a = {
                                    x: 10,
                                    y: 10
                                };
                            e.y >= t.maxTranslate.y - t.height / 2 ? (n.y = 1, r.y = a.y * Math.abs((t.maxTranslate.y - t.height / 2 - e.y) / t.height)) : e.x >= t.maxTranslate.x - t.width / 2 ? (n.x = 1, r.x = a.x * Math.abs((t.maxTranslate.x - t.width / 2 - e.x) / t.width)) : e.y <= t.minTranslate.y + t.height / 2 ? (n.y = -1, r.y = a.y * Math.abs((e.y - t.height / 2 - t.minTranslate.y) / t.height)) : e.x <= t.minTranslate.x + t.width / 2 && (n.x = -1, r.x = a.x * Math.abs((e.x - t.width / 2 - t.minTranslate.x) / t.width)), t.autoscrollInterval && (clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.isAutoScrolling = !1), 0 === n.x && 0 === n.y || (t.autoscrollInterval = setInterval(function() {
                                t.isAutoScrolling = !0;
                                var e = {
                                    left: 1 * r.x * n.x,
                                    top: 1 * r.y * n.y
                                };
                                t.scrollContainer.scrollTop += e.top, t.scrollContainer.scrollLeft += e.left, t.translate.x += e.left, t.translate.y += e.top, t.animateNodes()
                            }, 5))
                        }, t.manager = new u.default, t.events = {
                            start: t.handleStart,
                            move: t.handleMove,
                            end: t.handleEnd
                        }, (0, d.default)(!(e.distance && e.pressDelay), "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time."), t.state = {}, t
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, t), o(n, [{
                        key: "getChildContext",
                        value: function() {
                            return {
                                manager: this.manager
                            }
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.getContainer,
                                r = t.useWindowAsScrollContainer,
                                a = this.props.contentWindow || window;
                            this.container = "function" == typeof n ? n(this.getWrappedInstance()) : (0, c.findDOMNode)(this), this.document = this.container.ownerDocument || document, this.scrollContainer = r ? this.document.body : this.container, this.contentWindow = "function" == typeof a ? a() : a;
                            var o = function(t) {
                                e.events.hasOwnProperty(t) && p.events[t].forEach(function(n) {
                                    return e.container.addEventListener(n, e.events[t], !1)
                                })
                            };
                            for (var i in this.events) o(i)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this,
                                t = function(t) {
                                    e.events.hasOwnProperty(t) && p.events[t].forEach(function(n) {
                                        return e.container.removeEventListener(n, e.events[t])
                                    })
                                };
                            for (var n in this.events) t(n)
                        }
                    }, {
                        key: "getEdgeOffset",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                top: 0,
                                left: 0
                            };
                            if (e) {
                                var n = {
                                    top: t.top + e.offsetTop,
                                    left: t.left + e.offsetLeft
                                };
                                return e.parentNode !== this.container ? this.getEdgeOffset(e.parentNode, n) : n
                            }
                        }
                    }, {
                        key: "getOffset",
                        value: function(e) {
                            return {
                                x: e.touches ? e.touches[0].pageX : e.pageX,
                                y: e.touches ? e.touches[0].pageY : e.pageY
                            }
                        }
                    }, {
                        key: "getLockPixelOffsets",
                        value: function() {
                            var e = this.props.lockOffset;
                            Array.isArray(e) || (e = [e, e]), (0, d.default)(2 === e.length, "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s", e);
                            var t = e,
                                n = a(t, 2),
                                r = n[0],
                                o = n[1];
                            return [this.getLockPixelOffset(r), this.getLockPixelOffset(o)]
                        }
                    }, {
                        key: "getLockPixelOffset",
                        value: function(e) {
                            var t = e,
                                n = e,
                                r = "px";
                            if ("string" == typeof e) {
                                var a = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(e);
                                (0, d.default)(null !== a, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', e), t = n = parseFloat(e), r = a[1]
                            }
                            return (0, d.default)(isFinite(t) && isFinite(n), "lockOffset value should be a finite. Given %s", e), "%" === r && (t = t * this.width / 100, n = n * this.height / 100), {
                                x: t,
                                y: n
                            }
                        }
                    }, {
                        key: "updatePosition",
                        value: function(e) {
                            var t = this.props,
                                n = t.lockAxis,
                                r = t.lockToContainerEdges,
                                o = this.getOffset(e),
                                i = {
                                    x: o.x - this.initialOffset.x,
                                    y: o.y - this.initialOffset.y
                                };
                            if (i.y -= window.pageYOffset - this.initialWindowScroll.top, i.x -= window.pageXOffset - this.initialWindowScroll.left, this.translate = i, r) {
                                var s = this.getLockPixelOffsets(),
                                    l = a(s, 2),
                                    c = l[0],
                                    d = l[1],
                                    u = {
                                        x: this.width / 2 - c.x,
                                        y: this.height / 2 - c.y
                                    },
                                    h = {
                                        x: this.width / 2 - d.x,
                                        y: this.height / 2 - d.y
                                    };
                                i.x = (0, p.limit)(this.minTranslate.x + u.x, this.maxTranslate.x - h.x, i.x), i.y = (0, p.limit)(this.minTranslate.y + u.y, this.maxTranslate.y - h.y, i.y)
                            }
                            "x" === n ? i.y = 0 : "y" === n && (i.x = 0), this.helper.style[p.vendorPrefix + "Transform"] = "translate3d(" + i.x + "px," + i.y + "px, 0)"
                        }
                    }, {
                        key: "animateNodes",
                        value: function() {
                            var e = this.props,
                                t = e.transitionDuration,
                                n = e.hideSortableGhost,
                                r = this.manager.getOrderedRefs(),
                                a = {
                                    left: this.scrollContainer.scrollLeft - this.initialScroll.left,
                                    top: this.scrollContainer.scrollTop - this.initialScroll.top
                                },
                                o = {
                                    left: this.offsetEdge.left + this.translate.x + a.left,
                                    top: this.offsetEdge.top + this.translate.y + a.top
                                },
                                i = {
                                    top: window.pageYOffset - this.initialWindowScroll.top,
                                    left: window.pageXOffset - this.initialWindowScroll.left
                                };
                            this.newIndex = null;
                            for (var s = 0, l = r.length; s < l; s++) {
                                var c = r[s].node,
                                    d = c.sortableInfo.index,
                                    u = c.offsetWidth,
                                    h = c.offsetHeight,
                                    m = {
                                        width: this.width > u ? u / 2 : this.width / 2,
                                        height: this.height > h ? h / 2 : this.height / 2
                                    },
                                    g = {
                                        x: 0,
                                        y: 0
                                    },
                                    f = r[s].edgeOffset;
                                f || (r[s].edgeOffset = f = this.getEdgeOffset(c));
                                var b = s < r.length - 1 && r[s + 1],
                                    v = s > 0 && r[s - 1];
                                b && !b.edgeOffset && (b.edgeOffset = this.getEdgeOffset(b.node)), d !== this.index ? (t && (c.style[p.vendorPrefix + "TransitionDuration"] = t + "ms"), this.axis.x ? this.axis.y ? d < this.index && (o.left + i.left - m.width <= f.left && o.top + i.top <= f.top + m.height || o.top + i.top + m.height <= f.top) ? (g.x = this.width + this.marginOffset.x, f.left + g.x > this.containerBoundingRect.width - m.width && (g.x = b.edgeOffset.left - f.left, g.y = b.edgeOffset.top - f.top), null === this.newIndex && (this.newIndex = d)) : d > this.index && (o.left + i.left + m.width >= f.left && o.top + i.top + m.height >= f.top || o.top + i.top + m.height >= f.top + h) && (g.x = -(this.width + this.marginOffset.x), f.left + g.x < this.containerBoundingRect.left + m.width && (g.x = v.edgeOffset.left - f.left, g.y = v.edgeOffset.top - f.top), this.newIndex = d) : d > this.index && o.left + i.left + m.width >= f.left ? (g.x = -(this.width + this.marginOffset.x), this.newIndex = d) : d < this.index && o.left + i.left <= f.left + m.width && (g.x = this.width + this.marginOffset.x, null == this.newIndex && (this.newIndex = d)) : this.axis.y && (d > this.index && o.top + i.top + m.height >= f.top ? (g.y = -(this.height + this.marginOffset.y), this.newIndex = d) : d < this.index && o.top + i.top <= f.top + m.height && (g.y = this.height + this.marginOffset.y, null == this.newIndex && (this.newIndex = d))), c.style[p.vendorPrefix + "Transform"] = "translate3d(" + g.x + "px," + g.y + "px,0)") : n && (this.sortableGhost = c, c.style.visibility = "hidden", c.style.opacity = 0)
                            }
                            null == this.newIndex && (this.newIndex = this.index)
                        }
                    }, {
                        key: "getWrappedInstance",
                        value: function() {
                            return (0, d.default)(h.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"), this.refs.wrappedInstance
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = h.withRef ? "wrappedInstance" : null;
                            return s.default.createElement(e, r({
                                ref: t
                            }, (0, p.omit)(this.props, "contentWindow", "useWindowAsScrollContainer", "distance", "helperClass", "hideSortableGhost", "transitionDuration", "useDragHandle", "pressDelay", "pressThreshold", "shouldCancelStart", "onSortStart", "onSortMove", "onSortEnd", "axis", "lockAxis", "lockOffset", "lockToContainerEdges", "getContainer", "getHelperDimensions")))
                        }
                    }]), n
                }(i.Component), t.displayName = (0, p.provideDisplayName)("sortableList", e), t.defaultProps = {
                    axis: "y",
                    transitionDuration: 300,
                    pressDelay: 0,
                    pressThreshold: 5,
                    distance: 0,
                    useWindowAsScrollContainer: !1,
                    hideSortableGhost: !0,
                    shouldCancelStart: function(e) {
                        if (-1 !== ["input", "textarea", "select", "option", "button"].indexOf(e.target.tagName.toLowerCase())) return !0
                    },
                    lockToContainerEdges: !1,
                    lockOffset: "50%",
                    getHelperDimensions: function(e) {
                        var t = e.node;
                        return {
                            width: t.offsetWidth,
                            height: t.offsetHeight
                        }
                    }
                }, t.propTypes = {
                    axis: l.default.oneOf(["x", "y", "xy"]),
                    distance: l.default.number,
                    lockAxis: l.default.string,
                    helperClass: l.default.string,
                    transitionDuration: l.default.number,
                    contentWindow: l.default.any,
                    onSortStart: l.default.func,
                    onSortMove: l.default.func,
                    onSortEnd: l.default.func,
                    shouldCancelStart: l.default.func,
                    pressDelay: l.default.number,
                    useDragHandle: l.default.bool,
                    useWindowAsScrollContainer: l.default.bool,
                    hideSortableGhost: l.default.bool,
                    lockToContainerEdges: l.default.bool,
                    lockOffset: l.default.oneOfType([l.default.number, l.default.string, l.default.arrayOf(l.default.oneOfType([l.default.number, l.default.string]))]),
                    getContainer: l.default.func,
                    getHelperDimensions: l.default.func
                }, t.childContextTypes = {
                    manager: l.default.object.isRequired
                }, n
            };
            var i = n("q1tI"),
                s = h(i),
                l = h(n("17x9")),
                c = n("i8i4"),
                d = h(n("QLaP")),
                u = h(n("8ENv")),
                p = n("jTc+");

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function m(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }
        },
        hk6T: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();
            t.default = function(e) {
                var t, n, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    withRef: !1
                };
                return n = t = function(t) {
                    function n() {
                        return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, n),
                            function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, t), a(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.collection,
                                n = e.disabled,
                                r = e.index;
                            n || this.setDraggable(t, r)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            if (this.props.index !== e.index && this.node && (this.node.sortableInfo.index = e.index), this.props.disabled !== e.disabled) {
                                var t = e.collection,
                                    n = e.disabled,
                                    r = e.index;
                                n ? this.removeDraggable(t) : this.setDraggable(t, r)
                            } else this.props.collection !== e.collection && (this.removeDraggable(this.props.collection), this.setDraggable(e.collection, e.index))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.props,
                                t = e.collection,
                                n = e.disabled;
                            n || this.removeDraggable(t)
                        }
                    }, {
                        key: "setDraggable",
                        value: function(e, t) {
                            var n = this.node = (0, l.findDOMNode)(this);
                            n.sortableInfo = {
                                index: t,
                                collection: e,
                                manager: this.context.manager
                            }, this.ref = {
                                node: n
                            }, this.context.manager.add(e, this.ref)
                        }
                    }, {
                        key: "removeDraggable",
                        value: function(e) {
                            this.context.manager.remove(e, this.ref)
                        }
                    }, {
                        key: "getWrappedInstance",
                        value: function() {
                            return (0, c.default)(u.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"), this.refs.wrappedInstance
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = u.withRef ? "wrappedInstance" : null;
                            return i.default.createElement(e, r({
                                ref: t
                            }, (0, d.omit)(this.props, "collection", "disabled", "index")))
                        }
                    }]), n
                }(o.Component), t.displayName = (0, d.provideDisplayName)("sortableElement", e), t.contextTypes = {
                    manager: s.default.object.isRequired
                }, t.propTypes = {
                    index: s.default.number.isRequired,
                    collection: s.default.oneOfType([s.default.number, s.default.string]),
                    disabled: s.default.bool
                }, t.defaultProps = {
                    collection: 0
                }, n
            };
            var o = n("q1tI"),
                i = u(o),
                s = u(n("17x9")),
                l = n("i8i4"),
                c = u(n("QLaP")),
                d = n("jTc+");

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        irnM: function(e, t, n) {},
        izCx: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DashboardSettingsIndex_Channel"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelName"
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
                            alias: {
                                kind: "Name",
                                value: "channel"
                            },
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
                                        value: "channelName"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 105
                }
            };
            n.loc.source = {
                body: "query DashboardSettingsIndex_Channel($channelName: String!) {\nchannel: user(login: $channelName) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "jTc+": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayMove = function(e, t, n) {
                var r = e.slice(0);
                if (n >= r.length)
                    for (var a = n - r.length; 1 + a--;) r.push(void 0);
                return r.splice(n, 0, r.splice(t, 1)[0]), r
            }, t.omit = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return Object.keys(e).reduce(function(t, r) {
                    return -1 === n.indexOf(r) && (t[r] = e[r]), t
                }, {})
            }, t.closest = function(e, t) {
                for (; e;) {
                    if (t(e)) return e;
                    e = e.parentNode
                }
            }, t.limit = function(e, t, n) {
                if (n < e) return e;
                if (n > t) return t;
                return n
            }, t.getElementMargin = function(e) {
                var t = window.getComputedStyle(e);
                return {
                    top: r(t.marginTop),
                    right: r(t.marginRight),
                    bottom: r(t.marginBottom),
                    left: r(t.marginLeft)
                }
            }, t.provideDisplayName = function(e, t) {
                var n = t.displayName || t.name;
                return n ? e + "(" + n + ")" : e
            };
            t.events = {
                start: ["touchstart", "mousedown"],
                move: ["touchmove", "mousemove"],
                end: ["touchend", "touchcancel", "mouseup"]
            }, t.vendorPrefix = function() {
                if ("undefined" == typeof window || "undefined" == typeof document) return "";
                var e = window.getComputedStyle(document.documentElement, "") || ["-moz-hidden-iframe"],
                    t = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1];
                switch (t) {
                    case "ms":
                        return "ms";
                    default:
                        return t && t.length ? t[0].toUpperCase() + t.substr(1) : ""
                }
            }();

            function r(e) {
                return "px" === e.substr(-2) ? parseFloat(e) : 0
            }
        },
        kMGJ: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return i
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                o = n("yLwq");

            function i(e, t) {
                if (!t) throw new Error("Attempted to upload an empty file object.");
                var n = decodeURI(e);
                return fetch(n, {
                    method: "PUT",
                    body: new Blob([t])
                })
            }

            function s(e, t, n) {
                if (void 0 === n) throw new Error("No default avatar selected.");
                return fetch(a.a.apiBaseURL + "/kraken/users/" + e + "/default_images?client_id=" + a.a.authSettings.clientID + "&api_version=" + a.a.defaultAPIVersion, {
                    method: "PUT",
                    headers: {
                        Authorization: "OAuth " + t,
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify({
                        default_profile_image: o.b[n].id
                    })
                })
            }

            function l(e, t, n, o) {
                return r.__awaiter(this, void 0, void 0, function() {
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, fetch(a.a.apiBaseURL + "/kraken/users/" + e + "/upload_image?client_id=" + a.a.authSettings.clientID + "&api_version=" + a.a.defaultAPIVersion + "&image_type=" + n + "&format=" + o, {
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
        lDS7: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("oJmH"),
                i = n("/7QA"),
                s = n("yR8l"),
                l = n("5zf8"),
                c = n("GnwI"),
                d = n("EkNY"),
                u = n("Ue10"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hidden: !t.props.showStat
                        }, t.handleHover = function() {
                            var e;
                            switch (t.props.statType) {
                                case E.CURRENT_VIEWERS:
                                    e = "viewers_value";
                                    break;
                                case E.STREAM_UP_TIME:
                                    e = "uptime_value";
                                    break;
                                case E.NUMBER_OF_CLIPS:
                                    e = "clips_value";
                                    break;
                                case E.TOTAL_VIEWS:
                                    e = "views_value";
                                    break;
                                case E.FOLLOWERS:
                                    e = "followers_value";
                                    break;
                                case E.SUBSCRIPTIONS:
                                    e = "subscribers_value";
                                    break;
                                default:
                                    e = "unknown"
                            }
                            Object(d.k)(e)
                        }, t.handleClick = function() {
                            t.setState({
                                hidden: !t.state.hidden
                            });
                            var e = i.l.get("streamStatsConfiguration", C);
                            e[t.props.statType] = !e[t.props.statType], i.l.set("streamStatsConfiguration", e)
                        }, t.renderStat = function() {
                            var e = Object(i.d)("Offline", "LiveDashboard");
                            return t.state.hidden ? a.createElement(u.Qb, {
                                label: t.props.statDescription || e,
                                direction: u.Sb.Right
                            }, Object(i.d)("Hover to view", "LiveDashboard")) : a.createElement(u.Qb, {
                                label: Object(i.d)("Click to hide", "LiveDashboard"),
                                direction: u.Sb.Right
                            }, t.props.statDescription || e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.color;
                        return a.createElement(u.xb, {
                            margin: {
                                left: 1
                            },
                            fontSize: u.Aa.Size5,
                            color: e
                        }, a.createElement("span", {
                            onClick: this.handleClick,
                            onMouseOver: this.handleHover
                        }, this.renderStat()))
                    }, t
                }(a.Component),
                h = n("xTFG"),
                m = n("NkOX"),
                g = n("qYDK"),
                f = n("4mBO"),
                b = n("JBqe"),
                v = n("6XEL"),
                y = n("9kwc");
            n.d(t, "a", function() {
                return C
            }), n.d(t, "b", function() {
                return E
            }), n.d(t, "c", function() {
                return w
            });
            var S, E, C = {
                showViewers: !0,
                showUptime: !0,
                showViews: !0,
                showFollowers: !0,
                showSubs: !0,
                showClips: !0,
                showSubScore: !0
            };
            ! function(e) {
                e.CURRENT_VIEWERS_COUNT = "current-viewers-count", e.NUMBER_OF_CLIPS = "number-of-clips"
            }(S || (S = {})),
            function(e) {
                e.CURRENT_VIEWERS = "showViewers", e.STREAM_UP_TIME = "showUptime", e.TOTAL_VIEWS = "showViews", e.FOLLOWERS = "showFollowers", e.NUMBER_OF_CLIPS = "showClips", e.SUBSCRIPTIONS = "showSubs"
            }(E || (E = {}));
            var _ = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.getStreamInfo = function() {
                            return n.props.data && n.props.data.user && n.props.data.user.stream
                        }, n.renderViewersCount = function() {
                            var e = n.getStreamInfo(),
                                t = e && null !== e.viewersCount ? Object(i.e)(e.viewersCount) : 0,
                                r = n.state.statsConfig && n.state.statsConfig[E.CURRENT_VIEWERS],
                                o = n.props.isLive;
                            return a.createElement(p, {
                                "data-test-selector": S.CURRENT_VIEWERS_COUNT,
                                statDescription: o ? t + " " + Object(i.d)("Viewers", "LiveDashboard") : null,
                                statType: E.CURRENT_VIEWERS,
                                showStat: r,
                                color: o ? u.O.Live : void 0
                            })
                        }, n.renderStreamTime = function() {
                            var e = n.getStreamInfo(),
                                t = e && e.createdAt || (new Date).toISOString(),
                                r = n.props.isLive;
                            return a.createElement(p, {
                                statDescription: r ? Object(l.b)((Date.now() - new Date(t).getTime()) / 1e3, l.a.ClockHM) : null,
                                statType: E.STREAM_UP_TIME,
                                showStat: !n.state.statsConfig || n.state.statsConfig[E.STREAM_UP_TIME],
                                color: r ? u.O.Base : void 0
                            })
                        }, n.renderNumberOfClips = function() {
                            var e = n.state.broadcastClipsCount,
                                t = n.props.isLive;
                            return a.createElement(p, {
                                "data-test-selector": S.NUMBER_OF_CLIPS,
                                statDescription: t ? Object(i.e)(e) + " " + (1 === e ? Object(i.d)("Clip", "LiveDashboard") : Object(i.d)("Clips", "LiveDashboard")) : null,
                                statType: E.NUMBER_OF_CLIPS,
                                showStat: n.state.statsConfig && n.state.statsConfig[E.NUMBER_OF_CLIPS],
                                color: t ? u.O.Base : void 0
                            })
                        }, n.renderSubscriptionStat = function() {
                            var e = Object(i.d)("Subscribers", "LiveDashboard"),
                                t = Object(i.d)("Sub Points", "LiveDashboard"),
                                r = n.props.data && n.props.data.user && null !== n.props.data.user.subscriberScore ? n.props.data.user.subscriberScore : null,
                                o = r && r.countBreakdown;
                            if (!r || !o) return null;
                            var s = Object(i.e)(o.reduce(function(e, t) {
                                    return e + t.count
                                }, 0)),
                                l = Object(i.e)(r.current);
                            return r.next ? a.createElement(u.xb, {
                                color: u.O.Alt2,
                                display: u.W.Flex,
                                alignItems: u.f.Center,
                                margin: {
                                    bottom: .5
                                }
                            }, a.createElement(u.Qb, {
                                label: Object(i.d)("Subscribers shows number of active subs.\n Sub points unlock additional emote slots.", "LiveDashboard"),
                                direction: u.Sb.Right
                            }, a.createElement(u.mb, {
                                asset: u.nb.Star
                            })), a.createElement(p, {
                                statDescription: s + " " + e + " (" + l + " / " + Object(i.e)(r.next) + " " + t + ")",
                                statType: E.SUBSCRIPTIONS,
                                showStat: n.state.statsConfig && n.state.statsConfig[E.SUBSCRIPTIONS],
                                color: u.O.Base
                            })) : a.createElement(u.xb, {
                                color: u.O.Alt2,
                                display: u.W.Flex,
                                alignItems: u.f.Center,
                                margin: {
                                    bottom: .5
                                }
                            }, a.createElement(u.Qb, {
                                label: Object(i.d)("Congrats on reaching the max number of emote slots", "LiveDashboard"),
                                direction: u.Sb.Right
                            }, a.createElement(u.mb, {
                                asset: u.nb.Star
                            })), a.createElement(p, {
                                statDescription: s + " " + e + " (" + l + " " + t + ")",
                                statType: E.SUBSCRIPTIONS,
                                showStat: n.state.statsConfig && n.state.statsConfig[E.SUBSCRIPTIONS],
                                color: u.O.Base
                            }))
                        }, n.setFetchBroadcastClipsCountInterval = function() {
                            n.intervalID && clearInterval(n.intervalID), n.fetchBroadcastClipsCount(), n.intervalID = setInterval(n.fetchBroadcastClipsCount, 3e4)
                        }, n.fetchBroadcastClipsCount = function() {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var e, t, n, a, o;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e = this.getStreamInfo(), (t = e && e.id) ? [4, Object(v.c)({
                                                path: "/v4/broadcasts/" + t + "/clips/count"
                                            })] : (this.props.latencyTracking.reportInteractive(), this.props.reportLoaded(), [2]);
                                        case 1:
                                            return (n = r.sent()).body && !n.error ? (a = n.body.count, this.setState({
                                                broadcastClipsCount: a
                                            })) : (o = "Unable to fetch broadcast clips count", i.j.error(new Error(o), o)), this.props.latencyTracking.reportInteractive(), this.props.reportLoaded(), [2]
                                    }
                                })
                            })
                        };
                        var o = i.l.get("streamStatsConfiguration", null);
                        return n.state = {
                            statsConfig: o || C,
                            broadcastClipsCount: 0
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading || this.setFetchBroadcastClipsCountInterval()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && this.setFetchBroadcastClipsCountInterval()
                    }, t.prototype.componentWillUnmount = function() {
                        this.intervalID && clearInterval(this.intervalID)
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return null;
                        var e = this.props.data.user,
                            t = e && e.followers,
                            n = Object(i.e)(e && e.profileViewCount || 0),
                            r = e && t && null !== t.totalCount ? Object(i.e)(t.totalCount) : 0;
                        return a.createElement(g.a, {
                            title: Object(i.d)("Stats", "LiveDashboard")
                        }, a.createElement(u.Va, {
                            padding: 2
                        }, a.createElement(u.xb, {
                            color: u.O.Alt2,
                            display: u.W.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(u.Qb, {
                            label: Object(i.d)("The number of people currently watching your channel", "LiveDashboard"),
                            direction: u.Sb.Right
                        }, a.createElement(u.mb, {
                            asset: u.nb.GlyphLive
                        })), this.renderViewersCount()), a.createElement(u.xb, {
                            color: u.O.Alt2,
                            display: u.W.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(u.Qb, {
                            label: Object(i.d)("How long you have been broadcasting for this session", "LiveDashboard"),
                            direction: u.Sb.Right
                        }, a.createElement(u.mb, {
                            asset: u.nb.Timeout
                        })), this.renderStreamTime()), a.createElement(u.xb, {
                            color: u.O.Alt2,
                            display: u.W.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(u.Qb, {
                            label: Object(i.d)("The number of clips that have been created", "LiveDashboard"),
                            direction: u.Sb.Right
                        }, a.createElement(u.xb, {
                            className: "stats-widget-clips-icon",
                            display: u.W.InlineFlex
                        }, a.createElement(u.mb, {
                            asset: u.nb.Clip,
                            height: 20,
                            width: 20
                        }))), this.renderNumberOfClips()), a.createElement(u.xb, {
                            color: u.O.Alt2,
                            display: u.W.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(u.Qb, {
                            label: Object(i.d)("The number of people who have viewed the channel", "LiveDashboard"),
                            direction: u.Sb.Right
                        }, a.createElement(u.mb, {
                            asset: u.nb.GlyphViews
                        })), a.createElement(p, {
                            statDescription: n + " " + Object(i.d)("Views", "LiveDashboard"),
                            statType: E.TOTAL_VIEWS,
                            showStat: !this.state.statsConfig || this.state.statsConfig[E.TOTAL_VIEWS],
                            color: u.O.Base
                        })), a.createElement(u.xb, {
                            color: u.O.Alt2,
                            display: u.W.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(u.Qb, {
                            label: Object(i.d)("The number of people currently following your channel", "LiveDashboard"),
                            direction: u.Sb.Right
                        }, a.createElement(u.mb, {
                            asset: u.nb.Heart
                        })), a.createElement(p, {
                            statDescription: r + " " + Object(i.d)("Followers", "LiveDashboard"),
                            statType: E.FOLLOWERS,
                            showStat: !this.state.statsConfig || this.state.statsConfig[E.FOLLOWERS],
                            color: u.O.Base
                        })), this.renderSubscriptionStat()))
                    }, t
                }(a.Component),
                w = Object(o.compose)(Object(f.b)(m.a.Stats), b.b, Object(h.b)(m.a.Stats, {
                    autoReportCardVisibility: !0
                }), Object(s.a)(y, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin,
                                policy: "network-only"
                            },
                            pollInterval: 3e4
                        }
                    }
                }), Object(c.c)("Stats"))(_)
        },
        m1a8: function(e, t, n) {},
        mAXC: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n("Ue10"),
                o = function(e) {
                    return r.createElement(a.Va, {
                        className: "settings-row"
                    }, r.createElement(a.Sa, {
                        linkTo: e.linkTo,
                        type: a.Ta.Alpha
                    }, r.createElement(a.xb, {
                        padding: 2,
                        alignItems: a.f.Center,
                        display: a.W.Flex,
                        flexWrap: a.Z.NoWrap
                    }, r.createElement(a.Va, {
                        flexGrow: 1
                    }, r.createElement(a.V, {
                        fontSize: a.Aa.Size6,
                        bold: !0
                    }, e.text), r.createElement(a.V, {
                        type: a.Nb.Span
                    }, e.description)), r.createElement(a.Va, null, r.createElement(a.mb, {
                        asset: a.nb.AngleRight
                    })))))
                };
            n.d(t, "a", function() {
                return o
            })
        },
        ne2S: function(e, t, n) {},
        odMz: function(e, t, n) {
            "use strict";
            var r, a;
            ! function(e) {
                e[e.RemoveTarget = 0] = "RemoveTarget", e[e.SetGrabbed = 1] = "SetGrabbed", e[e.SetTarget = 2] = "SetTarget"
            }(r || (r = {})),
            function(e) {
                e.Bottom = "bottom", e.Top = "top"
            }(a || (a = {}));
            var o = function() {
                return function(e, t) {
                    void 0 === t && (t = !1), this.name = e, this.isCollapsed = t, this.isGrabbed = !1
                }
            }();
            n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "a", function() {
                return o
            })
        },
        "oz3/": function(e, t, n) {},
        pKQ0: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "ritualsEnabled"
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
                                value: "settings"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isRitualsEnabled"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isRitualsWhitelisted"
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
                    end: 89
                }
            };
            n.loc.source = {
                body: "fragment ritualsEnabled on User {\nid\nsettings {\nisRitualsEnabled\nisRitualsWhitelisted\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        pXWX: function(e, t, n) {
            e.exports = n.p + "assets/fallback-avatar-c3e7f53e20817a5c44b2.png"
        },
        qNlw: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, a = n("/MKj"),
                o = n("kRBY"),
                i = n("mrSG"),
                s = n("q1tI"),
                l = n("4p7I"),
                c = n("mLw1"),
                d = n("jKe7"),
                u = n("EOHf"),
                p = n("/7QA"),
                h = n("8Ad5"),
                m = n("3hKJ"),
                g = n("7PeK"),
                f = n("cZKs"),
                b = n("6XEL"),
                v = function(e, t) {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        var n;
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, Object(b.c)({
                                        path: "/v5/channels/" + e + "/channel_properties/authorized_stream_key",
                                        method: "POST",
                                        body: {
                                            email: t
                                        }
                                    })];
                                case 1:
                                    return (n = r.sent()).isError() ? [2, {
                                        isError: !0,
                                        isNotFound: 404 === n.status,
                                        authorizedStreamers: []
                                    }] : [2, {
                                        isError: !1,
                                        isNotFound: !1,
                                        authorizedStreamers: n.body.authorized_stream_keys
                                    }]
                            }
                        })
                    })
                },
                y = function(e, t) {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        var n;
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, Object(b.c)({
                                        path: "/v5/channels/" + e + "/channel_properties/authorized_stream_key/" + t,
                                        method: "DELETE"
                                    })];
                                case 1:
                                    return (n = r.sent()).isError() ? [2, {
                                        isError: !0,
                                        authorizedStreamers: []
                                    }] : [2, {
                                        isError: !1,
                                        authorizedStreamers: n.body.authorized_stream_keys
                                    }]
                            }
                        })
                    })
                },
                S = n("Ue10"),
                E = (n("3aEF"), {
                    "data-test-selector": "cancel-button"
                }),
                C = {
                    "data-test-selector": "close-button"
                },
                _ = {
                    "data-test-selector": "remove-button"
                };
            ! function(e) {
                e[e.Pending = 0] = "Pending", e[e.InFlight = 1] = "InFlight", e[e.Failed = 2] = "Failed", e[e.Success = 3] = "Success"
            }(r || (r = {}));
            var w, O, k = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onClickRemove = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return i.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.setState({
                                                requestState: r.InFlight
                                            }), [4, y(this.props.channelID, this.props.email)];
                                        case 1:
                                            return (e = t.sent()).isError ? this.setState({
                                                requestState: r.Failed
                                            }) : (this.setState({
                                                requestState: r.Success
                                            }), this.props.onSuccess(e.authorizedStreamers), this.props.onClose()), [2]
                                    }
                                })
                            })
                        }, n.state = {
                            requestState: r.Pending
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = s.createElement(s.Fragment, null, s.createElement(S.xb, {
                                borderBottom: !0
                            }, s.createElement(S.Va, {
                                padding: {
                                    y: 2
                                }
                            }, s.createElement(S.V, {
                                color: S.O.Alt2
                            }, Object(p.d)("Failed to remove authorized streamer. Try again.", "ChannelSettingsAuthorizedStreamersPage")))), s.createElement(S.Va, {
                                display: S.W.Flex,
                                justifyContent: S.Ua.Center,
                                padding: {
                                    top: 2
                                }
                            }, s.createElement(S.Va, {
                                margin: {
                                    x: 1
                                }
                            }, s.createElement(S.z, i.__assign({}, C, {
                                onClick: this.props.onClose
                            }), Object(p.d)("Close", "ChannelSettingsAuthorizedStreamersPage"))))),
                            t = s.createElement(s.Fragment, null, s.createElement(S.Va, null, s.createElement(S.Va, {
                                display: S.W.Flex,
                                justifyContent: S.Ua.Center,
                                padding: {
                                    y: 2
                                }
                            }, s.createElement(S.V, {
                                color: S.O.Alt2
                            }, this.props.email))), s.createElement(S.xb, {
                                background: S.r.Alt,
                                display: S.W.Flex,
                                justifyContent: S.Ua.Center,
                                padding: 2
                            }, s.createElement(S.Va, {
                                margin: {
                                    x: 1
                                }
                            }, s.createElement(S.z, i.__assign({}, E, {
                                onClick: this.props.onClose,
                                type: S.F.Hollow
                            }), Object(p.d)("No, Keep Them", "ChannelSettingsAuthorizedStreamersPage"))), s.createElement(S.Va, {
                                margin: {
                                    x: 1
                                }
                            }, s.createElement(S.z, i.__assign({}, _, {
                                disabled: this.state.requestState === r.InFlight,
                                onClick: this.onClickRemove
                            }), Object(p.d)("Yes, Remove Them", "ChannelSettingsAuthorizedStreamersPage")))));
                        return s.createElement(S.xb, {
                            background: S.r.Base,
                            elevation: 3,
                            className: "remove-streamer-modal"
                        }, s.createElement(S.xb, {
                            borderBottom: !0,
                            padding: 2,
                            display: S.W.Flex,
                            justifyContent: S.Ua.Center
                        }, s.createElement(S.V, {
                            bold: !0,
                            fontSize: S.Aa.Size4
                        }, Object(p.d)("Remove This Authorized Streamer?", "ChannelSettingsAuthorizedStreamersPage"))), this.state.requestState === r.Failed ? e : t, s.createElement(f.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(s.Component),
                x = n("IFXb"),
                I = n("B+LW"),
                T = (n("m1a8"), {
                    "data-test-selector": "email"
                }),
                D = {
                    "data-test-selector": "send"
                },
                P = {
                    "data-test-selector": "remove"
                },
                R = {
                    "data-test-selector": "empty"
                },
                j = {
                    "data-test-selector": "error"
                },
                M = {
                    "data-test-selector": "not-found"
                };
            ! function(e) {
                e.Waiting = "waiting", e.Error = "error", e.NotFound = "notFound", e.Success = "success"
            }(w || (w = {})),
            function(e) {
                e.Loading = "loading", e.Success = "success", e.Error = "error"
            }(O || (O = {}));
            var N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            authorizedStreamers: [],
                            emailAddress: "",
                            inviteState: w.Waiting,
                            requestState: O.Loading
                        }, t.updateAuthorizedStreamers = function(e) {
                            t.setState({
                                authorizedStreamers: e
                            })
                        }, t.handleEmailAddressChange = function(e) {
                            t.setState({
                                emailAddress: e.currentTarget.value
                            })
                        }, t.handleKeyDown = function(e) {
                            e.keyCode === h.a.Enter && t.sendInvite(t.state.emailAddress)
                        }, t.sendInvite = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.setState({
                                                inviteState: w.Waiting
                                            }), e.length > 0 ? [4, v(this.props.user.id, e)] : [3, 2];
                                        case 1:
                                            (t = n.sent()).isNotFound ? this.setState({
                                                inviteState: w.NotFound
                                            }) : t.isError ? this.setState({
                                                inviteState: w.Error
                                            }) : this.setState({
                                                authorizedStreamers: t.authorizedStreamers,
                                                emailAddress: "",
                                                inviteState: w.Success
                                            }), n.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }, t.resendInvite = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, v(this.props.user.id, e)];
                                        case 1:
                                            return (t = n.sent()).isError || this.setState({
                                                authorizedStreamers: t.authorizedStreamers
                                            }), [2]
                                    }
                                })
                            })
                        }, t.renderSuccess = function() {
                            var e = t.state.inviteState === w.Error || t.state.inviteState === w.NotFound,
                                n = s.createElement(S.Va, {
                                    margin: {
                                        bottom: 2
                                    }
                                }, s.createElement(S.Va, {
                                    display: S.W.Flex,
                                    flexGrow: 1,
                                    padding: {
                                        bottom: 1
                                    }
                                }, s.createElement(S.Va, {
                                    flexGrow: 1,
                                    margin: {
                                        right: 1
                                    }
                                }, s.createElement(S.Pa, {
                                    error: e,
                                    type: S.Ra.Text,
                                    onChange: t.handleEmailAddressChange,
                                    onKeyDown: t.handleKeyDown,
                                    value: t.state.emailAddress,
                                    placeholder: Object(p.d)("Enter an email address", "ChannelSettingsAuthorizedStreamersPage")
                                }), s.createElement(S.Va, {
                                    margin: {
                                        top: 1
                                    }
                                }, t.state.inviteState === w.NotFound && s.createElement(S.V, i.__assign({}, M, {
                                    color: S.O.Error,
                                    fontSize: S.Aa.Size6
                                }), Object(p.d)("That email address isn't linked to a Twitch account. Make sure the email is linked to a Twitch account.", "ChannelSettingsAuthorizedStreamersPage")))), s.createElement(S.Va, null, s.createElement(S.z, i.__assign({}, D, {
                                    onClick: function() {
                                        return t.sendInvite(t.state.emailAddress)
                                    }
                                }), s.createElement(S.Va, {
                                    padding: {
                                        x: 1
                                    }
                                }, Object(p.d)("Send Invite", "ChannelSettingsAuthorizedStreamersPage"))))));
                            return s.createElement(s.Fragment, null, n, 0 === t.state.authorizedStreamers.length ? s.createElement(S.Va, i.__assign({
                                display: S.W.Flex,
                                flexDirection: S.Y.Column,
                                alignItems: S.f.Center,
                                alignContent: S.e.Center,
                                justifyContent: S.Ua.Center,
                                padding: {
                                    y: 5
                                }
                            }, R), s.createElement(S.Va, {
                                padding: {
                                    bottom: .5
                                }
                            }, s.createElement(S.q, {
                                src: "https://static-cdn.jtvnw.net/emoticons/v1/58127/2.0",
                                alt: "CoolCat",
                                size: 50
                            })), s.createElement(S.V, {
                                color: S.O.Alt2,
                                fontSize: S.Aa.Size5
                            }, Object(p.d)("No authorized streamers to display", "ChannelSettingsAuthorizedStreamersPage"))) : t.state.authorizedStreamers.map(function(e, n) {
                                return s.createElement(S.xb, {
                                    key: n,
                                    alignItems: S.f.Center,
                                    borderBottom: !0,
                                    display: S.W.Flex,
                                    justifyContent: S.Ua.Between,
                                    padding: {
                                        bottom: 1,
                                        top: 1
                                    }
                                }, s.createElement(S.Va, {
                                    display: S.W.Flex,
                                    alignItems: S.f.Center
                                }, s.createElement(S.V, i.__assign({}, T), e.email)), s.createElement(S.Va, null, s.createElement(S.Va, {
                                    margin: {
                                        right: 1
                                    },
                                    display: S.W.InlineFlex
                                }, s.createElement(S.z, {
                                    type: S.F.Hollow,
                                    onClick: function() {
                                        return t.resendInvite(e.email)
                                    }
                                }, Object(p.d)("Resend Invite", "ChannelSettingsAuthorizedStreamersPage"))), s.createElement(I.a, {
                                    triggerModal: function(n) {
                                        return s.createElement(k, {
                                            channelID: t.props.user.id,
                                            email: e.email,
                                            onClose: n,
                                            onSuccess: t.updateAuthorizedStreamers
                                        })
                                    }
                                }, function(e) {
                                    return s.createElement(S.z, i.__assign({
                                        type: S.F.Text,
                                        onClick: e
                                    }, P), Object(p.d)("Remove", "ChannelSettingsAuthorizedStreamersPage"))
                                })))
                            }))
                        }, t.renderError = function() {
                            return s.createElement(S.Va, i.__assign({
                                display: S.W.Flex,
                                flexDirection: S.Y.Column,
                                alignItems: S.f.Center,
                                alignContent: S.e.Center,
                                justifyContent: S.Ua.Center,
                                padding: {
                                    top: 5,
                                    right: 0,
                                    bottom: 5,
                                    left: 0
                                }
                            }, j), s.createElement(S.Va, {
                                padding: {
                                    top: 5,
                                    bottom: .5
                                }
                            }, s.createElement(S.q, {
                                src: "https://static-cdn.jtvnw.net/emoticons/v1/86/2.0",
                                alt: "BibleThump",
                                size: 50
                            })), s.createElement(S.V, {
                                color: S.O.Alt2,
                                fontSize: S.Aa.Size5
                            }, Object(p.d)("An error occurred while loading authorized streamers for your channel.", "ChannelSettingsAuthorizedStreamersPage")))
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.user || this.state.requestState === O.Loading) return s.createElement(x.a, null, s.createElement(S.cb, {
                            height: 600
                        }));
                        var e = s.createElement(m.a, {
                            title: Object(p.d)("People who can stream to your channel", "ChannelSettingsAuthorizedStreamersPage"),
                            linkToParent: "/" + this.props.user.login + "/dashboard/settings"
                        });
                        return s.createElement(x.a, null, s.createElement(g.a, {
                            header: e
                        }, s.createElement(S.xb, {
                            background: S.r.Base,
                            elevation: 1,
                            padding: 2,
                            flexGrow: 1,
                            fullWidth: !0,
                            className: "editable-channels-page"
                        }, s.createElement(S.xb, {
                            fullWidth: !0,
                            fullHeight: !0,
                            display: S.W.Flex,
                            justifyContent: S.Ua.Center,
                            margin: 1
                        }, s.createElement(S.P, {
                            cols: 6
                        }, this.state.requestState === O.Success ? this.renderSuccess() : this.renderError())))))
                    }, t.prototype.componentDidMount = function() {
                        this.fetchAuthorizedStreamers()
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.props.user && this.props.channelLogin !== e.channelLogin && this.fetchAuthorizedStreamers()
                    }, t.prototype.fetchAuthorizedStreamers = function() {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.props.user ? [4, function(e) {
                                            return i.__awaiter(void 0, void 0, void 0, function() {
                                                var t;
                                                return i.__generator(this, function(n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return [4, Object(b.c)({
                                                                path: "/v5/channels/" + e + "/channel_properties"
                                                            })];
                                                        case 1:
                                                            return (t = n.sent()).isError() ? [2, {
                                                                isError: !0,
                                                                authorizedStreamers: []
                                                            }] : [2, {
                                                                isError: !1,
                                                                authorizedStreamers: t.body.authorized_stream_keys
                                                            }]
                                                    }
                                                })
                                            })
                                        }(this.props.user.id)] : [2];
                                    case 1:
                                        return (e = t.sent()).isError ? this.setState({
                                            requestState: O.Error
                                        }) : this.setState({
                                            authorizedStreamers: e.authorizedStreamers,
                                            requestState: O.Success
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }(s.Component),
                A = n("fvjX"),
                F = n("V+GM"),
                L = n("NvVO"),
                V = n("2xye"),
                U = n("GnwI"),
                W = n("BK8n"),
                B = n("G1cX"),
                z = n("Nxrd"),
                q = n("f00E"),
                K = n("b6Yk"),
                H = n("H/lO"),
                G = n("NZDK");

            function Y(e) {
                var t = e.settings;
                return {
                    vodcastHosting: !t.deprioritize_vodcast,
                    enabled: t.enabled,
                    strategy: t.strategy,
                    teamHost: t.team_host,
                    raidPreference: t.can_be_raided_by
                }
            }
            var Q = function(e, t, n, r) {
                    if (t) {
                        var a = document.querySelectorAll(".autohost-list-item");
                        if (!(a.length < 1)) {
                            var o = document.activeElement,
                                i = Array.prototype.indexOf.call(a, o),
                                s = i;
                            switch (e) {
                                case h.a.Space:
                                    return n ? (r && (a.item(r).tabIndex = 0), {
                                        isSorting: !1,
                                        selectedIndex: null
                                    }) : i >= 0 ? (a.item(i).tabIndex = -1, {
                                        isSorting: !0,
                                        selectedIndex: i
                                    }) : void 0;
                                case h.a.Up:
                                    if (0 === i) return;
                                    s = i < 0 ? a.length - 1 : i - 1;
                                    break;
                                case h.a.Down:
                                    if ((s = i + 1) >= a.length) return;
                                    break;
                                default:
                                    return
                            }
                            if (!n) {
                                var l = a.item(s);
                                l.focus(), l.tabIndex = 0, r && (a.item(r).tabIndex = -1)
                            }
                            if (null !== r) {
                                var c = Object(z.arrayMove)(t, i, s);
                                return n ? {
                                    autohostChannels: c,
                                    selectedIndex: s
                                } : {
                                    autohostChannels: c
                                }
                            }
                        }
                    }
                },
                X = function(e, t) {
                    return !(e !== h.a.Space || !t)
                },
                J = n("+XQV");

            function Z(e) {
                return {
                    publishingMode: e.publishing_mode,
                    followersOnlyDurationSeconds: e.followers_only_duration_seconds || J.FollowersDurationSeconds.Off
                }
            }
            var $ = n("yLwq"),
                ee = n("N3I0"),
                te = n("GIun"),
                ne = n("8/mp"),
                re = n("TSYQ"),
                ae = n("N0BP"),
                oe = (n("ne2S"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hovered: !1
                        }, t.onRemoveClick = function() {
                            t.props.onRemoveClick(t.props.user)
                        }, t.onMouseEnter = function() {
                            t.setState({
                                hovered: !0
                            })
                        }, t.onMouseLeave = function() {
                            t.setState({
                                hovered: !1
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = Object(p.d)("Remove", "AutohostListItem"),
                            t = !this.props.isSorting && this.state.hovered,
                            n = {
                                "autohost-list-item": !0,
                                "autohost-list-item--hovered": t,
                                "autohost-list-item--selected": this.props.selected
                            },
                            r = null;
                        (t || this.props.selected) && (r = s.createElement(S.Va, {
                            className: "autohost-list-item--remove",
                            padding: {
                                right: 1
                            },
                            display: S.W.Flex,
                            attachRight: !0
                        }, s.createElement(S.Qb, {
                            label: e,
                            direction: S.Sb.Left
                        }, s.createElement(S.A, {
                            "data-test-selector": "AUTO_HOST_REMOVE_BUTTON",
                            ariaLabel: e,
                            icon: S.nb.Trash,
                            onClick: this.onRemoveClick,
                            overlay: !0
                        }))));
                        var a = this.props.user.avatar || Object($.c)(this.props.user.id, 64);
                        return s.createElement(S.Na, i.__assign({
                            className: re(n),
                            padding: {
                                y: 1,
                                x: 1
                            }
                        }, Object(ae.a)(this.props)), s.createElement("div", {
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave,
                            tabIndex: -1
                        }, s.createElement(S.G, {
                            row: !0
                        }, s.createElement(S.Va, {
                            className: "autohost-list-item__avatar"
                        }, s.createElement(S.o, {
                            ratio: S.p.Aspect1x1
                        }, s.createElement("img", {
                            alt: this.props.user.name,
                            src: a,
                            draggable: !1
                        }))), s.createElement(S.Va, {
                            flexGrow: 1,
                            display: S.W.Flex,
                            position: S.db.Relative
                        }, s.createElement(S.Na, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, s.createElement(S.V, {
                            type: S.Nb.Span,
                            ellipsis: !0
                        }, this.props.user.name))), r)))
                    }, t
                }(s.Component)),
                ie = Object(z.SortableElement)(function(e) {
                    return s.createElement(oe, i.__assign({}, e))
                }),
                se = (n("r6fx"), function(e) {
                    return s.createElement(ne.b, {
                        className: "autohost-list-edit",
                        suppressScrollX: !0
                    }, s.createElement("ul", {
                        onKeyDown: e.onKeyDown,
                        role: "listbox",
                        tabIndex: 0,
                        "data-test-selector": "AUTO_HOST_LIST_SELECTOR"
                    }, e.autohostChannels && e.autohostChannels.map(function(t, n) {
                        return s.createElement("li", {
                            key: t.id
                        }, s.createElement(ie, {
                            user: t,
                            index: n,
                            onRemoveClick: e.onHostRemoved,
                            isSorting: e.isSorting,
                            selected: e.selectedIndex === n
                        }))
                    })))
                }),
                le = Object(z.SortableContainer)(function(e) {
                    return s.createElement(se, i.__assign({}, e))
                }),
                ce = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onAddClick = function() {
                            t.props.onAddClick(t.props.user)
                        }, t.onAddedClick = function() {
                            t.props.onAddedClick(t.props.user)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        e = this.props.user.added ? s.createElement(S.z, {
                            onClick: this.onAddedClick,
                            "data-test-selector": "AUTO_HOST_REMOVE_BUTTON",
                            icon: S.nb.Check,
                            statusAlertIcon: S.nb.Trash,
                            statusAlertText: Object(p.d)("Remove", "AutohostUserResultCard")
                        }, Object(p.d)("Added", "AutohostUserResultCard")) : s.createElement(S.z, {
                            type: S.F.Hollow,
                            onClick: this.onAddClick,
                            "data-test-selector": "AUTO_HOST_ADD_BUTTON"
                        }, Object(p.d)("Add", "AutohostUserResultCard"));
                        var t = this.props.user.avatar || Object($.c)(this.props.user.id, 64);
                        return s.createElement(S.Va, i.__assign({
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(ae.a)(this.props)), s.createElement(S.G, {
                            row: !0
                        }, s.createElement(S.I, {
                            alt: this.props.user.name,
                            src: t,
                            size: S.J.Size4,
                            aspect: S.p.Aspect1x1
                        }), s.createElement(S.Va, {
                            flexGrow: 1,
                            display: S.W.Flex,
                            position: S.db.Relative
                        }, s.createElement(S.Na, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, s.createElement(S.V, {
                            type: S.Nb.Span,
                            ellipsis: !0
                        }, this.props.user.name))), e))
                    }, t
                }(s.Component),
                de = (n("B2xO"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.userSearch = null, t.setUserSearchRef = function(e) {
                            t.userSearch = e
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.userSearch && e.isUserSearchOpen !== this.props.isUserSearchOpen && this.userSearch.toggle(e.isUserSearchOpen)
                    }, t.prototype.render = function() {
                        var e = this,
                            t = null;
                        return this.props.isWaiting ? t = s.createElement(S.Xa, {
                            fillContent: !0
                        }) : this.props.userResults && (t = this.props.userResults.map(function(t) {
                            return s.createElement(te.a, {
                                key: t.id
                            }, s.createElement(ce, {
                                user: t,
                                onAddClick: e.props.onHostAdded,
                                onAddedClick: e.props.onHostRemoved,
                                key: t.id
                            }))
                        })), s.createElement(S.Va, {
                            className: "autohost-list",
                            alignContent: S.e.Center
                        }, s.createElement(S.Va, {
                            position: S.db.Relative,
                            margin: {
                                y: 1
                            }
                        }, s.createElement(ee.a, {
                            onChange: this.props.onUserInputChange,
                            onFocusInput: this.props.onFocusInput,
                            ref: this.setUserSearchRef,
                            placeholder: Object(p.d)("Search channels to host", "AutohostList"),
                            balloonProps: {
                                show: this.props.isUserSearchOpen,
                                direction: S.v.Bottom,
                                size: S.w.Large
                            },
                            onClose: this.props.onSearchClose,
                            isErrored: this.props.isSearchErrored
                        }, s.createElement(S.Va, {
                            className: "autohost-list__user-search"
                        }, s.createElement(ne.b, {
                            contentClassName: "autohost-list__user-search-content",
                            suppressScrollX: !0
                        }, s.createElement(S.Va, {
                            fullWidth: !0
                        }, t, s.createElement(ne.a, {
                            enabled: !this.props.isWaiting && this.props.isUserSearchOpen,
                            loadMore: this.props.loadMore
                        })))))), s.createElement(le, {
                            onHostRemoved: this.props.onHostRemoved,
                            autohostChannels: this.props.autohostChannels,
                            onSortEnd: this.props.onSortEnd,
                            lockToContainerEdges: !0,
                            lockAxis: "y",
                            helperClass: "autohost-list-item--selected",
                            onSortStart: this.props.onSortStart,
                            isSorting: this.props.isSorting,
                            selectedIndex: this.props.selectedIndex,
                            distance: 20,
                            onKeyDown: this.props.onKeyDown
                        }))
                    }, t
                }(s.Component)),
                ue = 100,
                pe = "/kraken/streams/recommended",
                he = "kraken/autohost/list",
                me = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            userResults: [],
                            userTerm: "",
                            isUserSearchOpen: !1,
                            queryID: "",
                            isWaiting: !1,
                            autohostChannels: [],
                            recommendedChannels: null,
                            currentPage: 0,
                            selectedIndex: null
                        }, n.onUserInputChange = function(e) {
                            if (n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), n.props.onUserInput(), !e) return n.setRecommendedChannels(), void n.setState(function() {
                                return {
                                    userTerm: "",
                                    isWaiting: !1,
                                    currentPage: 0
                                }
                            });
                            n.setState({
                                userTerm: e,
                                userResults: [],
                                isWaiting: !0,
                                currentPage: 0
                            }), n.inputTimer = setTimeout(function() {
                                return n.doUserSearch(e)
                            }, ue)
                        }, n.loadMore = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                var e, t, n, r, a;
                                return i.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (!this.state.userTerm || this.state.queryID || this.state.isWaiting || !0 === this.state.exhaustedHits) return [2];
                                            e = this.state.currentPage + 1, t = null, o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(H.a.Users, this.state.userTerm, "", {
                                                page: e
                                            })];
                                        case 2:
                                            return t = o.sent(), [3, 4];
                                        case 3:
                                            return n = o.sent(), p.j.error(n, "Algolia page search failed"), this.setState({
                                                isUserSearchOpen: !0
                                            }), this.props.onError(""), [2];
                                        case 4:
                                            return t && t.users ? (r = this.deserializeUserResults(t), a = t.exhaustedHits, this.setState(function(t) {
                                                return {
                                                    userResults: t.userResults.concat(r),
                                                    isUserSearchOpen: !0,
                                                    isWaiting: !1,
                                                    currentPage: e,
                                                    exhaustedHits: a
                                                }
                                            }), [2]) : [2]
                                    }
                                })
                            })
                        }, n.addChannel = function(e) {
                            return i.__awaiter(n, void 0, void 0, function() {
                                var t, n, r, a = this;
                                return i.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (!this.state.autohostChannels) return [2];
                                            (t = this.state.autohostChannels.map(function(e) {
                                                return e.id
                                            })).push(e.id), o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), [4, K.a.putOrThrow(he, {
                                                body: {
                                                    targets: t.join(",")
                                                }
                                            })];
                                        case 2:
                                            return o.sent(), [3, 4];
                                        case 3:
                                            return n = o.sent(), r = Object(p.d)("Unable to add user to auto host list", "AutohostList"), p.j.error(n, r, {
                                                target: e
                                            }), this.props.onError(r), [2];
                                        case 4:
                                            return this.setState(function(t) {
                                                return {
                                                    userResults: a.updateAdded(t.userResults, e.id, !0) || [],
                                                    recommendedChannels: a.updateAdded(t.recommendedChannels, e.id, !0),
                                                    autohostChannels: t.autohostChannels.concat([e])
                                                }
                                            }), [2]
                                    }
                                })
                            })
                        }, n.onFocusInput = function() {
                            n.state.userTerm ? n.state.isUserSearchOpen || n.setState({
                                isUserSearchOpen: !0
                            }) : n.setRecommendedChannels()
                        }, n.setRecommendedChannels = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                var e, t, n, r = this;
                                return i.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (this.state.recommendedChannels) return this.setState(function(e) {
                                                return {
                                                    userResults: e.recommendedChannels || [],
                                                    isUserSearchOpen: !0
                                                }
                                            }), [2];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, K.a.getOrThrow(pe)];
                                        case 2:
                                            return e = a.sent(), [3, 4];
                                        case 3:
                                            return t = a.sent(), p.j.error(t, "Unable to retrieve recomended channels"), [2];
                                        case 4:
                                            return e.body && (n = e.body.recommended_streams.map(function(e) {
                                                var t = String(e.channel._id);
                                                return {
                                                    id: t,
                                                    name: e.channel.display_name,
                                                    login: e.channel.name,
                                                    avatar: e.channel.logo,
                                                    added: !!r.state.autohostChannels.find(function(e) {
                                                        return e.id === t
                                                    })
                                                }
                                            }), this.setState({
                                                recommendedChannels: n,
                                                userResults: n,
                                                isUserSearchOpen: !0
                                            })), [2]
                                    }
                                })
                            })
                        }, n.onSearchClose = function() {
                            n.setState({
                                isUserSearchOpen: !1
                            })
                        }, n.fetchChannelsList = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                var e, t, n, r;
                                return i.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 2, , 3]), [4, K.a.getOrThrow(he)];
                                        case 1:
                                            return e = a.sent(), [3, 3];
                                        case 2:
                                            return t = a.sent(), n = Object(p.d)("Unable to fetch auto host list", "AutohostList"), p.j.error(t, n), this.props.onError(n), [2];
                                        case 3:
                                            return e.body && (r = e.body.targets.map(function(e) {
                                                return {
                                                    id: String(e._id),
                                                    name: e.display_name,
                                                    login: e.name,
                                                    avatar: e.logo
                                                }
                                            }), this.setState({
                                                autohostChannels: r
                                            })), [2]
                                    }
                                })
                            })
                        }, n.removeChannel = function(e) {
                            return i.__awaiter(n, void 0, void 0, function() {
                                var t, n, r, a, o, s = this;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (!this.state.autohostChannels) return [2];
                                            if (this.setState({
                                                    isSorting: !1,
                                                    selectedIndex: null
                                                }), t = [], 1 !== this.state.autohostChannels.length) return [3, 5];
                                            i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, K.a.deleteOrThrow(he)];
                                        case 2:
                                            return i.sent(), [3, 4];
                                        case 3:
                                            return n = i.sent(), this.reportChannelError(e, n), [2];
                                        case 4:
                                            return [3, 9];
                                        case 5:
                                            if (t = this.state.autohostChannels.slice(), (r = t.findIndex(function(t) {
                                                    return e.id === t.id
                                                })) < 0) return this.reportChannelError(e, new Error("User not found in auto host list")), [2];
                                            t.splice(r, 1), a = t.map(function(e) {
                                                return e.id
                                            }), i.label = 6;
                                        case 6:
                                            return i.trys.push([6, 8, , 9]), [4, K.a.putOrThrow(he, {
                                                body: {
                                                    targets: a.join(",")
                                                }
                                            })];
                                        case 7:
                                            return i.sent(), [3, 9];
                                        case 8:
                                            return o = i.sent(), this.reportChannelError(e, o), [2];
                                        case 9:
                                            return this.setState(function(n) {
                                                return {
                                                    userResults: s.updateAdded(n.userResults, e.id, !1) || [],
                                                    recommendedChannels: s.updateAdded(n.recommendedChannels, e.id, !1),
                                                    autohostChannels: t
                                                }
                                            }), [2]
                                    }
                                })
                            })
                        }, n.updateAdded = function(e, t, n) {
                            var r = e ? e.findIndex(function(e) {
                                    return t === e.id
                                }) : -1,
                                a = e;
                            return e && r >= 0 && (a = B(e, function(e) {
                                return e[r]
                            }, function(e) {
                                return e.added = n, e
                            })), a
                        }, n.onKeyDown = function(e) {
                            var t = Q(e.keyCode, n.state.autohostChannels, n.state.isSorting, n.state.selectedIndex);
                            t && n.setState(t), X(e.keyCode, n.state.isSorting) && n.updateList(n.state.autohostChannels)
                        }, n.onChannelOrderChange = function(e) {
                            return i.__awaiter(n, void 0, void 0, function() {
                                var t;
                                return i.__generator(this, function(n) {
                                    return e.newIndex === e.oldIndex ? (this.setState({
                                        isSorting: !1
                                    }), [2]) : (t = Object(z.arrayMove)(this.state.autohostChannels, e.oldIndex, e.newIndex), this.setState({
                                        autohostChannels: t,
                                        isSorting: !1
                                    }), this.updateList(t), [2])
                                })
                            })
                        }, n.onChannelOrderChangeStart = function() {
                            return n.setState({
                                isSorting: !0
                            })
                        }, n.searchClient = new G.a({
                            appId: p.a.algoliaApplicationID,
                            apiKey: p.a.algoliaAPIKey,
                            apolloClient: p.o.apollo.client,
                            logger: p.j,
                            config: p.a,
                            stats: p.o.stats
                        }), n
                    }
                    return i.__extends(t, e), t.prototype.componentWillMount = function() {
                        return i.__awaiter(this, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                return this.fetchChannelsList(), [2]
                            })
                        })
                    }, t.prototype.render = function() {
                        return s.createElement(de, {
                            onUserInputChange: this.onUserInputChange,
                            isUserSearchOpen: this.state.isUserSearchOpen,
                            userResults: this.state.userResults,
                            onHostAdded: this.addChannel,
                            onFocusInput: this.onFocusInput,
                            autohostChannels: this.state.autohostChannels,
                            onHostRemoved: this.removeChannel,
                            isSearchErrored: this.props.isSearchErrored,
                            isWaiting: this.state.isWaiting,
                            onSearchClose: this.onSearchClose,
                            loadMore: this.loadMore,
                            onSortEnd: this.onChannelOrderChange,
                            onSortStart: this.onChannelOrderChangeStart,
                            isSorting: this.state.isSorting,
                            onKeyDown: this.onKeyDown,
                            selectedIndex: this.state.selectedIndex
                        })
                    }, t.prototype.doUserSearch = function(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t, n, r, a;
                            return i.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        this.inputTimer = 0, t = Object(q.a)(), this.setState({
                                            queryID: t
                                        }), n = null, o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(H.a.Users, e, t)];
                                    case 2:
                                        return n = o.sent(), [3, 4];
                                    case 3:
                                        return r = o.sent(), p.j.error(r, "Algolia autohost user search failed"), this.setState({
                                            isWaiting: !1,
                                            isUserSearchOpen: !0
                                        }), this.props.onError(""), [2];
                                    case 4:
                                        return n && n.users ? (a = this.deserializeUserResults(n), this.setState({
                                            userResults: a,
                                            isUserSearchOpen: !0,
                                            isWaiting: !1,
                                            exhaustedHits: n.exhaustedHits,
                                            queryID: ""
                                        }), [2]) : [2]
                                }
                            })
                        })
                    }, t.prototype.deserializeUserResults = function(e) {
                        var t = this;
                        return e.users ? e.users.hits.filter(function(e) {
                            return !t.props.user || e.objectID !== t.props.user.id
                        }).map(function(e) {
                            return {
                                id: e.objectID,
                                avatar: e.profile_image,
                                name: e.name,
                                login: e.login,
                                added: !!t.state.autohostChannels.find(function(t) {
                                    return t.id === e.objectID
                                })
                            }
                        }) : []
                    }, t.prototype.reportChannelError = function(e, t) {
                        var n = Object(p.d)("Unable to remove channel from auto host list", "AutohostList");
                        p.j.error(t, n, {
                            target: e
                        }), this.props.onError(n)
                    }, t.prototype.updateList = function(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t, n, r;
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = e.map(function(e) {
                                            return e.id
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, K.a.putOrThrow(he, {
                                            body: {
                                                targets: t.join(",")
                                            }
                                        })];
                                    case 2:
                                        return a.sent(), [3, 4];
                                    case 3:
                                        return n = a.sent(), r = Object(p.d)("Unable to re order auto host list", "AutohostList"), p.j.error(n, r), this.props.onError(r), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }(s.Component);
            var ge, fe = Object(a.connect)(function(e) {
                    return {
                        user: Object(o.e)(e)
                    }
                })(me),
                be = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            autohostError: void 0
                        }, t.handleAutohostError = function(e) {
                            t.setState({
                                autohostError: e
                            })
                        }, t.handleAutohostInput = function() {
                            t.setState({
                                autohostError: void 0
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = s.createElement(m.a, {
                            title: Object(p.d)("Host list", "AuthohostListPage"),
                            linkToParent: "/" + this.props.match.params.channelLogin + "/dashboard/settings"
                        });
                        return s.createElement(x.a, null, s.createElement(g.a, {
                            header: e
                        }, s.createElement(W.a, {
                            error: !!this.state.autohostError,
                            errorMessage: this.state.autohostError
                        }, s.createElement(S.Va, {
                            display: S.W.Flex,
                            justifyContent: S.Ua.Center
                        }, s.createElement(fe, {
                            onError: this.handleAutohostError,
                            onUserInput: this.handleAutohostInput,
                            isSearchErrored: !!this.state.autohostError
                        })))))
                    }, t
                }(s.Component),
                ve = Object(A.compose)(Object(U.c)("AutohostListPage", {
                    autoReportInteractive: !0,
                    destination: L.a.AutohostSettings
                }), Object(F.a)({
                    location: V.PageviewLocation.AutohostSettings
                }))(be),
                ye = n("yR8l"),
                Se = n("c0Zc"),
                Ee = n("EpBn"),
                Ce = n("mAXC"),
                _e = n("fWal"),
                we = n("+vgv"),
                Oe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleToggleEnabled = function(e) {
                            t.props.saveSettings({
                                enabled: e
                            })
                        }, t.handleToggleTeamHost = function(e) {
                            t.props.saveSettings({
                                teamHost: e
                            })
                        }, t.handleToggleVodcastHosting = function(e) {
                            t.props.saveSettings({
                                vodcastHosting: e
                            })
                        }, t.handleSetRandomAutohostStrategy = function() {
                            t.props.saveSettings({
                                strategy: J.AutohostStrategy.Random
                            })
                        }, t.handleSetOrderedAutohostStrategy = function() {
                            t.props.saveSettings({
                                strategy: J.AutohostStrategy.Ordered
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = !this.props.saving && this.props.requestState === we.a.Loading,
                            t = this.props.saving;
                        return s.createElement(g.a, null, this.props.requestState === we.a.Error && s.createElement(W.a, null, s.createElement(S.V, {
                            color: S.O.Error
                        }, Object(p.d)("Something went wrong. Give it another try later.", "AutohostSettings"))), s.createElement(_e.a, {
                            label: Object(p.d)("Auto host channels", "AutohostSettings"),
                            name: "enabled",
                            showPlaceholder: e,
                            disabled: t,
                            checked: this.props.autohostSettings.enabled,
                            onChange: this.handleToggleEnabled,
                            description: Object(p.d)("Automatically host channels from your host list when you're offline", "AutohostSettings"),
                            id: "auto-host-channels-toggle",
                            "data-test-selector": "auto-host-channels-toggle"
                        }), s.createElement(_e.a, {
                            label: Object(p.d)("Host team channels", "AutohostSettings"),
                            name: "teamHost",
                            showPlaceholder: e,
                            disabled: t,
                            checked: this.props.autohostSettings.teamHost,
                            onChange: this.handleToggleTeamHost,
                            id: "team-host",
                            description: Object(p.d)("Include team channels in your host list", "AutohostSettings")
                        }), s.createElement(_e.a, {
                            label: Object(p.d)("Host pre-recorded videos", "AutohostSettings"),
                            name: "vodcastHosting",
                            showPlaceholder: e,
                            disabled: t,
                            checked: this.props.autohostSettings.vodcastHosting,
                            onChange: this.handleToggleVodcastHosting,
                            description: Object(p.d)("Include channels streaming pre-recorded video, like Premieres or Reruns", "AutohostSettings"),
                            id: "vodcast-hosting-toggle"
                        }), s.createElement(Ee.a, {
                            orientation: S.Da.Horizontal,
                            label: Object(p.d)("Hosting priority", "AutohostSettings")
                        }, s.createElement(S.Va, {
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(S.jb, {
                            disabled: this.props.requestState === we.a.Loading,
                            checked: this.props.autohostSettings.strategy === J.AutohostStrategy.Ordered,
                            onChange: this.handleSetOrderedAutohostStrategy,
                            label: Object(p.d)("Host channels by the order they appear in the list", "AutohostSettings"),
                            name: "hostPriority",
                            value: J.AutohostStrategy.Ordered
                        })), s.createElement(S.jb, {
                            disabled: this.props.requestState === we.a.Loading,
                            checked: this.props.autohostSettings.strategy === J.AutohostStrategy.Random,
                            onChange: this.handleSetRandomAutohostStrategy,
                            label: Object(p.d)("Host channels randomly from the list", "AutohostSettings"),
                            name: "hostPriority",
                            value: J.AutohostStrategy.Random
                        })), s.createElement(Ce.a, {
                            text: Object(p.d)("Host list", "AutohostSettings"),
                            description: Object(p.d)("Add and manage your hosted channels", "AutohostSettings"),
                            linkTo: "/" + this.props.channelName + "/dashboard/settings/autohost"
                        }))
                    }, t
                }(s.Component),
                ke = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleSetRaidPreference = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(t) {
                                    return [2, this.props.saveSettings({
                                        raidPreference: e.currentTarget.value
                                    })]
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return s.createElement(g.a, null, this.props.requestState === we.a.Error && s.createElement(W.a, null, s.createElement(S.V, {
                            color: S.O.Error
                        }, Object(p.d)("Something went wrong. Give it another try later.", "RaidSettingsForm"))), s.createElement(Ee.a, {
                            orientation: S.Da.Horizontal,
                            label: Object(p.d)("Raid", "RaidSettingsForm")
                        }, s.createElement(S.Va, {
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(S.jb, {
                            disabled: this.props.requestState === we.a.Loading,
                            checked: this.props.raidPreference === J.RaidPreference.All,
                            onChange: this.handleSetRaidPreference,
                            label: Object(p.d)("Allow all raids", "RaidSettingsForm"),
                            name: "raidPreference",
                            value: J.RaidPreference.All
                        })), s.createElement(S.Va, {
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(S.jb, {
                            disabled: this.props.requestState === we.a.Loading,
                            checked: this.props.raidPreference === J.RaidPreference.Network,
                            onChange: this.handleSetRaidPreference,
                            label: Object(p.d)("Only allow raids from friends, teammates, and followed channels", "RaidSettingsForm"),
                            name: "raidPreference",
                            value: J.RaidPreference.Network
                        })), s.createElement(S.Va, {
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(S.jb, {
                            disabled: this.props.requestState === we.a.Loading,
                            checked: this.props.raidPreference === J.RaidPreference.None,
                            onChange: this.handleSetRaidPreference,
                            label: Object(p.d)("Block all raids", "RaidSettingsForm"),
                            name: "raidPreference",
                            value: J.RaidPreference.None
                        }))))
                    }, t
                }(s.Component),
                xe = Object(U.c)("RaidSettingsForm")(ke),
                Ie = function(e) {
                    return s.createElement(s.Fragment, null, s.createElement(Se.a, {
                        title: Object(p.d)("Auto Hosting", "DashboardSettings")
                    }), s.createElement(Oe, {
                        channelName: e.channelName,
                        autohostSettings: e.autohostSettings,
                        requestState: e.requestState,
                        saving: e.saving,
                        saveSettings: e.saveSettings
                    }), s.createElement(Se.a, {
                        title: Object(p.d)("Raids", "DashboardSettings")
                    }), s.createElement(xe, {
                        raidPreference: e.autohostSettings.raidPreference,
                        requestState: e.requestState,
                        saveSettings: e.saveSettings
                    }))
                },
                Te = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            autohostSettings: J.DEFAULT_AUTOHOST_SETTINGS,
                            requestState: J.RequestState.Loading,
                            saving: !1
                        }, t.logger = p.o.logger.withCategory("raid-settings-form"), t.saveSettings = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return i.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return this.setState({
                                                requestState: J.RequestState.Loading,
                                                saving: !0
                                            }), [4, function(e) {
                                                return i.__awaiter(this, void 0, Promise, function() {
                                                    var t;
                                                    return i.__generator(this, function(n) {
                                                        switch (n.label) {
                                                            case 0:
                                                                return [4, K.a.put("/kraken/autohost/settings", {
                                                                    body: function(e) {
                                                                        return {
                                                                            deprioritize_vodcast: !e.vodcastHosting,
                                                                            enabled: e.enabled,
                                                                            strategy: e.strategy,
                                                                            team_host: e.teamHost,
                                                                            can_be_raided_by: e.raidPreference
                                                                        }
                                                                    }(e)
                                                                })];
                                                            case 1:
                                                                return (t = n.sent()).error || t.requestError ? [2, {
                                                                    isError: !0,
                                                                    autohostSettings: void 0,
                                                                    error: t.error || t.requestError
                                                                }] : [2, {
                                                                    isError: !1,
                                                                    autohostSettings: Y(t.body)
                                                                }]
                                                        }
                                                    })
                                                })
                                            }(i.__assign({}, this.state.autohostSettings, e))];
                                        case 1:
                                            return (t = r.sent()).isError ? (this.setState({
                                                requestState: J.RequestState.Error,
                                                saving: !1
                                            }), n = new Error("Channel Properties Settings error"), this.logger.error(n, "Failed to load channel data", t.error)) : this.setState({
                                                autohostSettings: t.autohostSettings,
                                                requestState: J.RequestState.Success,
                                                saving: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, function() {
                                            return i.__awaiter(this, void 0, Promise, function() {
                                                var e;
                                                return i.__generator(this, function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return [4, K.a.get("/kraken/autohost/settings")];
                                                        case 1:
                                                            return (e = t.sent()).error || e.requestError ? [2, {
                                                                isError: !0,
                                                                autohostSettings: void 0
                                                            }] : [2, {
                                                                isError: !1,
                                                                autohostSettings: Y(e.body)
                                                            }]
                                                    }
                                                })
                                            })
                                        }()];
                                    case 1:
                                        return (e = t.sent()).isError ? this.setState({
                                            requestState: J.RequestState.Error
                                        }) : this.setState({
                                            autohostSettings: e.autohostSettings,
                                            requestState: J.RequestState.Success
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return s.createElement(Ie, {
                            channelName: this.props.channelName,
                            autohostSettings: this.state.autohostSettings,
                            requestState: this.state.requestState,
                            saving: this.state.saving,
                            saveSettings: this.saveSettings
                        })
                    }, t
                }(s.Component),
                De = n("EkNY"),
                Pe = n("Jxh/"),
                Re = n("geRD"),
                je = function(e) {
                    var t = e.saving || e.errorLoading;
                    return s.createElement(_e.a, {
                        id: "settings-channel-page-mature-content",
                        label: Object(p.d)("Mature Content", "MatureContentToggle"),
                        description: Object(p.d)("Enable this setting if your stream contains content that may be inappropriate for younger audiences. You may never broadcast sexual activity, nudity, threats or extreme violence. Doing so will result in immediate, irrevocable termination of your account. Please make sure your content will comply with the <x:link>Terms of Service</x:link> before broadcasting", {
                            "x:link": function(e) {
                                return s.createElement("a", {
                                    href: "https://www.twitch.tv/p/terms-of-service/"
                                }, e)
                            }
                        }, "MatureContentToggle"),
                        error: e.errorSaving || e.errorLoading,
                        checked: e.checked,
                        onChange: e.onChange,
                        disabled: t,
                        showPlaceholder: e.loading
                    })
                },
                Me = n("K1Va"),
                Ne = n("sZD3"),
                Ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            checked: !1,
                            saving: !1,
                            errorSaving: !1
                        }, t.logger = p.o.logger.withCategory("settings").withCategory("mature-content"), t.onCheckBoxChange = function(e) {
                            t.setState({
                                checked: e,
                                saving: !0
                            }, function() {
                                t.updateBroadcastSettings(e)
                            })
                        }, t.updateBroadcastSettings = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n, r;
                                return i.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (this.logger.debug("Updating broadcast settings", {
                                                    isMature: e
                                                }), !(t = this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update broadcast settings."), [2];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.updateBroadcastSettings(Object(Re.a)({
                                                userID: t,
                                                isMature: e
                                            }))];
                                        case 2:
                                            return a.sent(), n = function(t) {
                                                var n = t && t.currentUser,
                                                    r = n && n.broadcastSettings;
                                                return r ? {
                                                    currentUser: i.__assign({}, n, {
                                                        broadcastSettings: i.__assign({}, r, {
                                                            isMature: e
                                                        })
                                                    })
                                                } : t
                                            }, Object(Re.e)(Ne, {}, n), this.logger.debug("Updated broadcast settings", {
                                                isMature: e
                                            }), this.setState({
                                                saving: !1,
                                                errorSaving: !1
                                            }), [3, 4];
                                        case 3:
                                            return r = a.sent(), this.logger.warn("Failed to update broadcast settings", {
                                                err: r
                                            }), this.setState({
                                                saving: !1,
                                                errorSaving: !0,
                                                checked: !e
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = e.data,
                            n = t.currentUser;
                        if (!t.loading && this.props.data.loading) {
                            var r = n && n.broadcastSettings && n.broadcastSettings.isMature || !1;
                            this.setState({
                                checked: r
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.data.currentUser,
                            t = e && e.broadcastSettings,
                            n = !!this.props.data.error || !this.props.data.loading && !t;
                        return s.createElement(je, {
                            checked: this.state.checked,
                            saving: this.state.saving,
                            loading: this.props.data.loading,
                            errorLoading: n,
                            errorSaving: this.state.errorSaving,
                            onChange: this.onCheckBoxChange
                        })
                    }, t
                }(s.Component),
                Fe = Object(A.compose)(Object(U.c)("MatureContentToggle"), Object(ye.a)(Ne, {
                    options: {
                        fetchPolicy: "network-only"
                    }
                }), Object(ye.a)(Me, {
                    name: "updateBroadcastSettings"
                }))(Ae),
                Le = (n("oz3/"), {
                    "data-test-selector": "i-understand-button"
                }),
                Ve = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(S.xb, {
                            className: "stream-key-confirm-modal",
                            borderBottom: !0,
                            background: S.r.Base,
                            elevation: 3,
                            padding: {
                                x: 2,
                                top: 3,
                                bottom: 2
                            }
                        }, s.createElement(S.xb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 2
                            }
                        }, s.createElement(S.V, {
                            type: S.Nb.H4,
                            color: S.O.Alt
                        }, Object(p.d)("Stream Key", "StreamKeySettingsForm"))), s.createElement(S.Va, {
                            padding: {
                                y: 2
                            }
                        }, s.createElement(S.V, {
                            color: S.O.Error,
                            bold: !0
                        }, Object(p.d)("Never share your stream key with anyone or show it on stream! Twitch Staff, Admins, or Global Moderators will never ask you for this information.", "StreamKeySettingsForm"))), s.createElement(S.xb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 2
                            }
                        }, Object(p.d)('Please click "I Understand" if you understand the above and would like to view your stream key.', "StreamKeySettingsForm")), s.createElement(S.Va, {
                            display: S.W.Flex,
                            justifyContent: S.Ua.Center,
                            padding: {
                                top: 2
                            }
                        }, s.createElement(S.z, i.__assign({}, Le, {
                            onClick: Object(A.compose)(this.props.showStreamKey, this.props.onClose)
                        }), Object(p.d)("I Understand", "StreamKeySettingsForm"))), s.createElement(f.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(s.Component),
                Ue = "TOGGLE_ID_STORE_PAST_BROADCASTS",
                We = 5e3;
            ! function(e) {
                e.ChannelPropertiesError = "channel-properties-settings-form-channel-properties-error", e.CopyButton = "channel-properties-settings-form-copy-button", e.ResetButton = "channel-properties-settings-form-reset-buton", e.ToggleIdIngestResilience = "toggle-id-ingest-resilience"
            }(ge || (ge = {}));
            var Be, ze, qe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            streamKeyCopied: !1,
                            backupStreamKeyCopied: !1
                        }, t.isResilienceIngestTurnedOff = function() {
                            return t.props.channelProperties && 0 === t.props.channelProperties.numBackupStreamsAllowed && 0 === t.props.channelProperties.disconnectSlateDuration || !1
                        }, t.onToggleResilentIngest = function(e) {
                            var n;
                            n = t.isResilienceIngestTurnedOff() && e ? ze.BackupSlate : ze.Off, t.props.handleResilientIngestPreference(n)
                        }, t.renderStorePastBroadcasts = function() {
                            return s.createElement(_e.a, {
                                id: Ue,
                                label: Object(p.d)("Store past broadcasts", "StreamKeySettingsForm"),
                                description: Object(p.d)("Automatically save broadcasts for up to 14 days (60 days for Partners, Turbo and Prime users)", "StreamKeySettingsForm"),
                                error: !!t.props.saveVodsError,
                                errorMessage: t.props.saveVodsError || "",
                                disabled: t.props.saveVodsSaving,
                                checked: !(!t.props.channelProperties || !t.props.channelProperties.saveVods),
                                onChange: t.props.handleSaveVodsToggled,
                                showPlaceholder: t.props.saveVodsState === we.a.Loading
                            })
                        }, t.renderMatureContent = function() {
                            return s.createElement(Fe, null)
                        }, t.renderOptimizationPreference = function() {
                            return s.createElement(Ee.a, {
                                orientation: S.Da.Horizontal,
                                label: Object(p.d)("Optimization preference", "StreamKeySettingsForm"),
                                error: !!t.props.latencyPrefError,
                                errorMessage: t.props.latencyPrefError || ""
                            }, s.createElement(S.Va, {
                                padding: {
                                    bottom: 1
                                }
                            }, s.createElement(S.jb, {
                                disabled: t.props.latencyPrefState === we.a.Loading,
                                checked: !(!t.props.channelProperties || t.props.channelProperties.latencyPreference !== Be.Normal),
                                onChange: t.handleSetLatencyPreference,
                                label: Object(p.d)("Normal latency: Best for highest video quality, highest resolution, and to reduce video buffering", "StreamKeySettingsForm"),
                                name: "optPreference",
                                value: Be.Normal
                            })), s.createElement(S.jb, {
                                disabled: t.props.latencyPrefState === we.a.Loading,
                                checked: !(!t.props.channelProperties || t.props.channelProperties.latencyPreference !== Be.Low),
                                onChange: t.handleSetLatencyPreference,
                                label: Object(p.d)("Low latency: Best for near real-time interactions with viewers", "StreamKeySettingsForm"),
                                name: "optPreference",
                                value: Be.Low
                            }))
                        }, t.hideStreamKeyLink = function() {
                            return s.createElement(S.T, {
                                onClick: t.props.handleStreamKeyDisplayToggled
                            }, Object(p.d)("Hide", "StreamKeySettingsForm"))
                        }, t.showStreamKeyLink = function() {
                            return s.createElement(I.a, {
                                triggerModal: function(e) {
                                    return s.createElement(Ve, {
                                        onClose: e,
                                        showStreamKey: t.props.handleStreamKeyDisplayToggled
                                    })
                                }
                            }, function(e) {
                                return s.createElement(S.T, {
                                    onClick: e
                                }, Object(p.d)("Show", "StreamKeySettingsForm"))
                            })
                        }, t.setKeyInputRef = function(e) {
                            return t.keyInput = e
                        }, t.setBackupKeyInputRef = function(e) {
                            return t.backupKeyInput = e
                        }, t.handleSetLatencyPreference = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(t) {
                                    return [2, this.props.handleSetLatencyPreference(e.currentTarget.value)]
                                })
                            })
                        }, t.handleSetResilientIngestPreference = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(t) {
                                    return [2, this.props.handleResilientIngestPreference(e.currentTarget.value)]
                                })
                            })
                        }, t.copyToClipboard = function(e, n) {
                            e && (Object(Pe.a)(e.value) && (n ? t.setState({
                                backupStreamKeyCopied: !0
                            }, t.handleResetStreamKeyCopiedState) : t.setState({
                                streamKeyCopied: !0
                            }, t.handleResetStreamKeyCopiedState)))
                        }, t.handleCopyToClipboard = function() {
                            t.copyToClipboard(t.keyInput, !1)
                        }, t.handleBackupKeyCopyToClipboard = function() {
                            t.copyToClipboard(t.backupKeyInput, !0)
                        }, t.resetStreamKeyCopiedState = function() {
                            return t.setState({
                                streamKeyCopied: !1,
                                backupStreamKeyCopied: !1
                            })
                        }, t.handleResetStreamKeyCopiedState = function(e) {
                            t.resetStreamKeyCopiedStateTimeout && clearTimeout(t.resetStreamKeyCopiedStateTimeout), e ? t.resetStreamKeyCopiedState() : t.resetStreamKeyCopiedStateTimeout = setTimeout(t.resetStreamKeyCopiedState, We)
                        }, t.handleResetStreamKeyClicked = function() {
                            t.props.handleResetStreamKeyClicked(), t.handleResetStreamKeyCopiedState(!0)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.channelPropertiesError) return s.createElement(g.a, {
                            "data-test-selector": ge.ChannelPropertiesError
                        }, s.createElement(W.a, null, s.createElement(S.V, {
                            color: S.O.Error
                        }, this.props.channelPropertiesError)));
                        var e = this.props.channelProperties && (this.props.channelProperties.backupControlsEnabled || this.props.channelProperties.disconnectSlateControlsEnabled) || !1;
                        return s.createElement(g.a, null, this.renderStreamKey(), e && this.renderResilientIngest(), this.renderStorePastBroadcasts(), this.renderMatureContent(), this.props.channelProperties && this.props.channelProperties.latencyControlsEnabled && this.renderOptimizationPreference())
                    }, t.prototype.renderResilientIngest = function() {
                        var e = this.isResilienceIngestTurnedOff();
                        return s.createElement(_e.a, {
                            id: ge.ToggleIdIngestResilience,
                            label: Object(p.d)("Ingest Resilience", "ResilienceStreamKeySettingsForm"),
                            description: Object(p.d)("Improve resilience against ingest failures by either starting a backup ingest stream or a slate", "ResilienceStreamKeySettingsForm"),
                            error: !(!this.props.streamKeyError || !this.props.resilientIngestError),
                            errorMessage: this.props.streamKeyError && this.props.resilientIngestError || "",
                            disabled: this.props.resilientIngestState === we.a.Loading || this.props.resilientIngestState === we.a.Error,
                            checked: !e,
                            onChange: this.onToggleResilentIngest
                        }, this.renderResilientIngestOption())
                    }, t.prototype.renderFallbackKeyOption = function() {
                        var e = this.props.channelProperties ? this.props.channelProperties.backupStreamKey : "";
                        return s.createElement(S.Va, {
                            display: S.W.Flex,
                            flexDirection: S.Y.Column,
                            padding: {
                                top: 1
                            }
                        }, s.createElement(S.Va, {
                            padding: {
                                bottom: .5
                            }
                        }, s.createElement(S.V, {
                            color: S.O.Alt,
                            bold: !0
                        }, Object(p.d)("Fallback Stream key", "ResilienceStreamKeySettingsForm"))), s.createElement(S.Va, {
                            display: S.W.Flex,
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(S.Va, {
                            flexGrow: 1,
                            padding: {
                                right: .5
                            }
                        }, s.createElement(S.Pa, {
                            readOnly: !0,
                            type: this.props.showStreamKey ? S.Ra.Text : S.Ra.Password,
                            value: e,
                            refDelegate: this.setBackupKeyInputRef
                        })), s.createElement(S.z, {
                            ariaLabel: Object(p.d)("Copy Stream Key", "ResilienceStreamKeySettingsForm"),
                            "data-test-selector": ge.CopyButton,
                            disabled: this.state.backupStreamKeyCopied,
                            onClick: this.handleBackupKeyCopyToClipboard
                        }, this.state.backupStreamKeyCopied ? Object(p.d)("Copied", "ResilienceStreamKeySettingsForm") : Object(p.d)("Copy", "ResilienceStreamKeySettingsForm"))), s.createElement(S.Va, {
                            display: S.W.Flex
                        }, s.createElement(S.V, {
                            color: S.O.Alt
                        }, Object(p.d)("If your primary stream fails, we will automatically fallback to a backup stream", "ResilienceStreamKeySettingsForm"))), s.createElement(S.Va, {
                            padding: {
                                top: .5
                            }
                        }, this.props.showStreamKey ? this.hideStreamKeyLink() : this.showStreamKeyLink()))
                    }, t.prototype.renderResilientIngestOption = function() {
                        var e = this.props.channelProperties && this.props.channelProperties.disconnectSlateControlsEnabled && this.props.channelProperties.disconnectSlateDuration > 0 || !1,
                            t = this.props.channelProperties && this.props.channelProperties.backupControlsEnabled && this.props.channelProperties.numBackupStreamsAllowed > 0 || !1;
                        return s.createElement(S.Va, {
                            display: S.W.Flex,
                            margin: {
                                top: 1
                            }
                        }, s.createElement(S.Va, {
                            flexGrow: 1,
                            padding: {
                                right: .5,
                                bottom: 1
                            }
                        }, this.props.channelProperties && this.props.channelProperties.disconnectSlateControlsEnabled && s.createElement(S.Va, {
                            padding: {
                                bottom: .5
                            }
                        }, s.createElement(S.jb, {
                            disabled: !1,
                            checked: e,
                            onChange: this.handleSetResilientIngestPreference,
                            label: Object(p.d)("<x:bold>Backup Slate</x:bold>: If your primary stream fails, keep your channel LIVE for 90 seconds, while you troubleshoot and re-ingest", {
                                "x:bold": function(e) {
                                    return s.createElement(S.V, {
                                        type: S.Nb.Span,
                                        bold: !0
                                    }, e)
                                }
                            }, "ResilienceStreamKeySettingsForm"),
                            name: "optResiliencePreference",
                            value: ze.BackupSlate
                        })), this.props.channelProperties && this.props.channelProperties.backupControlsEnabled && s.createElement(S.Va, {
                            padding: {
                                bottom: .5
                            }
                        }, s.createElement(S.jb, {
                            disabled: !1,
                            checked: t,
                            onChange: this.handleSetResilientIngestPreference,
                            label: Object(p.d)("<x:bold>Backup Ingest Stream</x:bold>: Ingest a backup stream to Twitch. If your primary stream fails, we will automatically fallback to your backup setup", {
                                "x:bold": function(e) {
                                    return s.createElement(S.V, {
                                        type: S.Nb.Span,
                                        bold: !0
                                    }, e)
                                }
                            }, "ResilienceStreamKeySettingsForm"),
                            name: "optResiliencePreference",
                            value: ze.BackupIngest
                        }), t && this.renderFallbackKeyOption())))
                    }, t.prototype.renderStreamKey = function() {
                        var e = S.E.Default,
                            t = this.props.resetStatus,
                            n = t === we.a.Loading;
                        t === we.a.Success ? e = S.E.Success : t === we.a.Error ? n = !0 : t === we.a.Loading && (e = S.E.Loading);
                        var r = this.state.streamKeyCopied;
                        return s.createElement(Ee.a, {
                            label: Object(p.d)("Primary Stream key", "StreamKeySettingsForm"),
                            error: !!this.props.streamKeyError,
                            errorMessage: this.props.streamKeyError || ""
                        }, s.createElement(S.Va, {
                            display: S.W.Flex
                        }, s.createElement(S.Va, {
                            flexGrow: 1,
                            padding: {
                                right: .5
                            }
                        }, s.createElement(S.Pa, {
                            readOnly: !0,
                            type: this.props.showStreamKey ? S.Ra.Text : S.Ra.Password,
                            value: this.props.channelProperties ? this.props.channelProperties.streamKey : "",
                            refDelegate: this.setKeyInputRef
                        })), s.createElement(S.z, {
                            ariaLabel: Object(p.d)("Copy Stream Key", "StreamKeySettingsForm"),
                            "data-test-selector": ge.CopyButton,
                            disabled: r || t === we.a.Error || t === we.a.Loading,
                            onClick: this.handleCopyToClipboard
                        }, r ? Object(p.d)("Copied", "StreamKeySettingsForm") : Object(p.d)("Copy", "StreamKeySettingsForm")), s.createElement(S.Va, {
                            padding: {
                                left: 1
                            }
                        }, s.createElement(S.z, {
                            ariaLabel: Object(p.d)("Reset Stream Key", "StreamKeySettingsForm"),
                            "data-test-selector": ge.ResetButton,
                            disabled: n,
                            onClick: this.handleResetStreamKeyClicked,
                            state: e,
                            type: S.F.Hollow
                        }, Object(p.d)("Reset", "StreamKeySettings")))), s.createElement(S.Va, {
                            padding: {
                                top: .5
                            }
                        }, this.props.showStreamKey ? this.hideStreamKeyLink() : this.showStreamKeyLink()))
                    }, t
                }(s.Component),
                Ke = Object(U.c)("ChannelPropertiesSettingsForm")(qe),
                He = 1,
                Ge = 90;
            ! function(e) {
                e.Normal = "normal", e.Low = "low"
            }(Be || (Be = {})),
            function(e) {
                e.BackupSlate = "backup_slate", e.BackupIngest = "backup_ingest", e.Off = "off"
            }(ze || (ze = {}));
            var Ye = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        channelProperties: null,
                        channelPropertiesError: null,
                        streamKeyError: null,
                        showStreamKey: !1,
                        resetKeyState: we.a.Loading,
                        saveVodsState: we.a.Loading,
                        saveVodsError: null,
                        saveVodsSaving: !1,
                        latencyPrefState: we.a.Loading,
                        latencyPrefError: null,
                        resilientIngestState: we.a.Loading,
                        resilientIngestError: null
                    }, t.logger = p.o.logger.withCategory("stream-key-settings"), t.fetchChannelProperties = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, a, o;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.props.user) return [2];
                                        r = "/v5/channels/" + this.props.user.id + "/channel_properties", i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, K.a.get(r)];
                                    case 2:
                                        return n = i.sent(), this.setState({
                                            channelProperties: this.deserializeChannelProperties(n),
                                            resetKeyState: null,
                                            saveVodsState: null,
                                            latencyPrefState: null,
                                            resilientIngestState: null
                                        }), [3, 4];
                                    case 3:
                                        return a = i.sent(), e = a, [3, 4];
                                    case 4:
                                        return n && n.error && (e = new Error("Channel Properties Settings error"), t = n.error), e ? (o = Object(p.d)("Failed to load channel properties.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to load channel data", t), this.setState({
                                            channelPropertiesError: o
                                        }), [2]) : [2]
                                }
                            })
                        })
                    }, t.toggleStreamKeyDisplay = function() {
                        t.setState(function(e) {
                            return {
                                showStreamKey: !e.showStreamKey
                            }
                        })
                    }, t.resetStreamKey = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, a, o, s = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.props.user) return [2];
                                        this.resetStreamKeyTimeout && clearTimeout(this.resetStreamKeyTimeout), this.setState({
                                            resetKeyState: we.a.Loading
                                        }), r = "/v5/channels/" + this.props.user.id + "/channel_properties/regenerate_stream_key", i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, K.a.put(r)];
                                    case 2:
                                        return n = i.sent(), this.setState({
                                            channelProperties: this.deserializeChannelProperties(n),
                                            resetKeyState: we.a.Success
                                        }), [3, 4];
                                    case 3:
                                        return a = i.sent(), e = a, [3, 4];
                                    case 4:
                                        return n && n.error && (e = new Error("Channel Properties Settings error"), t = n.error), e && (o = Object(p.d)("Failed to reset stream key.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to reset stream key", t), this.setState({
                                            streamKeyError: o,
                                            resetKeyState: we.a.Error
                                        })), this.resetStreamKeyTimeout = setTimeout(function() {
                                            return s.setState({
                                                resetKeyState: null,
                                                streamKeyError: null
                                            })
                                        }, We), [2]
                                }
                            })
                        })
                    }, t.setSaveVods = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, a, o, s, l, c;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.props.user || !this.state.channelProperties) return [2];
                                        this.setState({
                                            saveVodsSaving: !0
                                        }), r = "/v5/channels/" + this.props.user.id + "/channel_properties", i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, K.a.put(r, {
                                            body: {
                                                save_vods: !this.state.channelProperties.saveVods
                                            }
                                        })];
                                    case 2:
                                        return n = i.sent(), this.setState({
                                            channelProperties: this.deserializeChannelProperties(n),
                                            saveVodsSaving: !1
                                        }), [3, 4];
                                    case 3:
                                        return a = i.sent(), e = a, [3, 4];
                                    case 4:
                                        return n && n.error && (e = new Error("Channel Properties Settings error"), t = n.error), e ? (o = Object(p.d)("Failed to update broadcast preference.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to update vods preference", t), this.setState({
                                            saveVodsError: o,
                                            saveVodsState: we.a.Error,
                                            saveVodsSaving: !1
                                        }), [2]) : (s = p.n.getLastPageview(), l = null, c = null, s && (l = s.medium || null, c = s.content || null), Object(De.f)({
                                            settingName: De.b.StorePastBroadcasts,
                                            settingValue: this.state.channelProperties.saveVods.toString(),
                                            content: c,
                                            medium: l,
                                            channelID: this.props.user.id
                                        }), [2])
                                }
                            })
                        })
                    }, t.setLatencyPreference = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, a, o, s;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.props.user || !this.state.channelProperties) return [2];
                                        this.setState({
                                            latencyPrefState: we.a.Loading
                                        }), a = "/v5/channels/" + this.props.user.id + "/channel_properties", i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, K.a.put(a, {
                                            body: {
                                                latency: e
                                            }
                                        })];
                                    case 2:
                                        return r = i.sent(), this.setState({
                                            channelProperties: this.deserializeChannelProperties(r),
                                            latencyPrefState: we.a.Success
                                        }), [3, 4];
                                    case 3:
                                        return o = i.sent(), t = o, [3, 4];
                                    case 4:
                                        return r && r.error && (t = new Error("Channel Properties Settings error"), n = r.error), t ? (s = Object(p.d)("Failed to update optimization preference.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(t, "Failed to update latency preference", n), this.setState({
                                            latencyPrefError: s,
                                            latencyPrefState: we.a.Error
                                        }), [2]) : [2]
                                }
                            })
                        })
                    }, t.setResilientIngestPreference = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, a, o, s, l, c;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.props.user || !this.state.channelProperties) return [2];
                                        e === ze.BackupSlate ? (t = 0, n = Ge) : e === ze.BackupIngest ? (t = He, n = 0) : e === ze.Off && (t = 0, n = 0), this.setState({
                                            resilientIngestState: we.a.Loading
                                        }), s = "/v5/channels/" + this.props.user.id + "/channel_properties", i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, K.a.put(s, {
                                            body: {
                                                num_backup_streams_allowed: t,
                                                disconnect_slate_duration: n
                                            }
                                        })];
                                    case 2:
                                        return o = i.sent(), this.setState({
                                            channelProperties: this.deserializeChannelProperties(o),
                                            resilientIngestState: we.a.Success
                                        }), [3, 4];
                                    case 3:
                                        return l = i.sent(), r = l, [3, 4];
                                    case 4:
                                        return o && o.error && (r = new Error("Channel Properties Settings error"), a = o.error), r ? (c = Object(p.d)("Failed to update ingest resilience preference. Please refresh the page and try again.", "ResilienceStreamKeySettingsForm"), this.logger.error(r, "Failed to update ingest resilience preference", a), this.setState({
                                            resilientIngestState: we.a.Error,
                                            resilientIngestError: c
                                        }), [2]) : [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.fetchChannelProperties()
                }, t.prototype.render = function() {
                    return s.createElement(Ke, {
                        channelProperties: this.state.channelProperties,
                        channelPropertiesError: this.state.channelPropertiesError,
                        showStreamKey: this.state.showStreamKey,
                        handleStreamKeyDisplayToggled: this.toggleStreamKeyDisplay,
                        resetStatus: this.state.resetKeyState,
                        handleResetStreamKeyClicked: this.resetStreamKey,
                        streamKeyError: this.state.streamKeyError,
                        saveVodsState: this.state.saveVodsState,
                        saveVodsError: this.state.saveVodsError,
                        saveVodsSaving: this.state.saveVodsSaving,
                        handleSaveVodsToggled: this.setSaveVods,
                        latencyPrefState: this.state.latencyPrefState,
                        latencyPrefError: this.state.latencyPrefError,
                        handleSetLatencyPreference: this.setLatencyPreference,
                        resilientIngestState: this.state.resilientIngestState,
                        resilientIngestError: this.state.resilientIngestError,
                        handleResilientIngestPreference: this.setResilientIngestPreference
                    })
                }, t.prototype.deserializeChannelProperties = function(e) {
                    return e.body && this.props.user ? {
                        streamKey: "live_" + this.props.user.id + "_" + e.body.stream_key,
                        backupStreamKey: "live_" + this.props.user.id + "_" + e.body.backup_stream_keys[0],
                        latencyControlsEnabled: e.body.latency_controls_enabled,
                        latencyPreference: e.body.latency,
                        saveVods: e.body.save_vods,
                        backupControlsEnabled: e.body.backup_controls_enabled,
                        disconnectSlateControlsEnabled: e.body.disconnect_slate_controls_enabled,
                        numBackupStreamsAllowed: e.body.num_backup_streams_allowed,
                        disconnectSlateDuration: e.body.disconnect_slate_duration
                    } : null
                }, t
            }(s.Component);
            var Qe, Xe = Object(a.connect)(function(e) {
                    return {
                        user: Object(o.e)(e)
                    }
                })(Ye),
                Je = n("oJmH"),
                Ze = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.dropsSettingsError) return s.createElement(g.a, null, s.createElement(W.a, null, s.createElement(S.V, {
                            color: S.O.Error
                        }, this.props.dropsSettingsError)));
                        var e = s.createElement(S.T, {
                                to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                            }, Object(p.d)("Learn more", "DropSettingsForm")),
                            t = Object(p.d)("Alert your viewers when they have a chance to earn in-game loot. {learnMoreLink}", {
                                learnMoreLink: e
                            }, "DropSettingsForm");
                        return s.createElement(g.a, null, s.createElement(_e.a, {
                            label: Object(p.d)("Drops", "DropSettingsForm"),
                            showPlaceholder: null === this.props.requestState || this.props.requestState === we.a.Loading,
                            checked: !!this.props.isDropsEnabled,
                            onChange: this.props.handleDropSettingsToggle,
                            description: t,
                            id: "drops-settings-toggle"
                        }))
                    }, t
                }(s.Component),
                $e = Object(U.c)("DropsSettingsForm")(Ze),
                et = n("NmtA"),
                tt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isDropsEnabled: null,
                            dropsSettingsError: null,
                            requestState: null
                        }, t.logger = p.o.logger.withCategory("stream-key-settings"), t.fetchDrops = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, a, o, s;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (null !== this.state.requestState || !e.data || !e.data.user) return [2];
                                            this.setState({
                                                requestState: we.a.Loading
                                            }), a = "/kraken/channels/" + e.data.user.id + "/vhs", i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, K.a.get(a)];
                                        case 2:
                                            return (r = i.sent()).body && this.setState({
                                                isDropsEnabled: !r.body.opt_out_status,
                                                requestState: we.a.Success
                                            }), [3, 4];
                                        case 3:
                                            return o = i.sent(), t = o, [3, 4];
                                        case 4:
                                            return r && r.error && (t = new Error("Drops Settings error"), n = r.error), t ? (s = Object(p.d)("Failed to load Drops.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(t, "Failed to load channel data", n), this.setState({
                                                dropsSettingsError: s
                                            }), [2]) : [2]
                                    }
                                })
                            })
                        }, t.toggleDropsSetting = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, a, o;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (!this.props.data || !this.props.data.user) return [2];
                                            this.setState({
                                                requestState: we.a.Loading
                                            }), r = "/kraken/channels/" + this.props.data.user.id + "/vhs", i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 6, , 7]), this.state.isDropsEnabled ? [4, K.a.delete(r)] : [3, 3];
                                        case 2:
                                            return n = i.sent(), [3, 5];
                                        case 3:
                                            return [4, K.a.put(r)];
                                        case 4:
                                            n = i.sent(), i.label = 5;
                                        case 5:
                                            return this.setState({
                                                isDropsEnabled: !this.state.isDropsEnabled,
                                                requestState: we.a.Success
                                            }), [3, 7];
                                        case 6:
                                            return a = i.sent(), e = a, [3, 7];
                                        case 7:
                                            return n && n.error && (e = new Error("Drops Settings error"), t = n.error), e ? (o = Object(p.d)("Failed to update drops.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to update drops preference", t), this.setState({
                                                dropsSettingsError: o,
                                                requestState: we.a.Error
                                            }), [2]) : [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.fetchDrops(this.props)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.fetchDrops(e)
                    }, t.prototype.render = function() {
                        return s.createElement($e, {
                            isDropsEnabled: this.state.isDropsEnabled,
                            dropsSettingsError: this.state.dropsSettingsError,
                            requestState: this.state.requestState,
                            handleDropSettingsToggle: this.toggleDropsSetting
                        })
                    }, t
                }(s.Component),
                nt = Object(Je.compose)(Object(ye.a)(et, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }))(tt),
                rt = n("pXWX"),
                at = n.n(rt);
            n("bS3I");
            ! function(e) {
                e.AcceptLink = "team-invitations-item__accept-link", e.DeclineLink = "team-invitations-item__decline-link"
            }(Qe || (Qe = {}));
            var ot, it = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onDeclineClicked = function() {
                            t.props.declineInvitation(t.props.index)
                        }, t.onAcceptClick = function() {
                            t.props.acceptInvitation(t.props.index)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = Object(p.d)("Accept", "TeamInvitationsItem"),
                            t = Object(p.d)("Decline", "TeamInvitationsItem");
                        return s.createElement(S.Va, i.__assign({
                            padding: {
                                y: 1,
                                x: 1
                            }
                        }, Object(ae.a)(this.props), {
                            className: "team-invitations-item"
                        }), s.createElement(S.G, {
                            row: !0
                        }, s.createElement(S.Va, {
                            className: "team-invitations-item__avatar"
                        }, s.createElement(S.o, {
                            ratio: S.p.Aspect1x1
                        }, s.createElement(U.b, {
                            src: this.props.invitation.logo || at.a,
                            alt: Object(p.d)("{displayName} Team Logo", {
                                displayName: this.props.invitation.displayName
                            }, "TeamInvitationsItem")
                        }))), s.createElement(S.Va, {
                            flexGrow: 1,
                            display: S.W.Flex,
                            position: S.db.Relative
                        }, s.createElement(S.Na, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, s.createElement(S.V, {
                            type: S.Nb.Span,
                            ellipsis: !0
                        }, this.props.invitation.name))), s.createElement(S.Va, {
                            padding: {
                                right: 2
                            }
                        }, s.createElement(S.z, {
                            ariaLabel: e,
                            onClick: this.onAcceptClick,
                            type: S.F.Success,
                            "data-test-selector": Qe.AcceptLink
                        }, e)), s.createElement(S.Va, null, s.createElement(S.z, {
                            ariaLabel: t,
                            onClick: this.onDeclineClicked,
                            type: S.F.Alert,
                            "data-test-selector": Qe.DeclineLink
                        }, t))))
                    }, t
                }(s.Component),
                st = Object(U.c)("TeamInvitationsItem")(it),
                lt = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this;
                        return this.props.invitations.length < 1 && !this.props.formErrorMessage ? null : s.createElement(Ee.a, {
                            label: Object(p.d)("Invitations", "TeamInvitations"),
                            error: !!this.props.formErrorMessage,
                            errorMessage: this.props.formErrorMessage
                        }, this.props.invitations.map(function(t, n) {
                            return s.createElement(st, {
                                key: t.name,
                                invitation: t,
                                index: n,
                                acceptInvitation: e.props.acceptInvitation,
                                declineInvitation: e.props.declineInvitation
                            })
                        }))
                    }, t
                }(s.Component),
                ct = Object(U.c)("TeamInvitations")(lt);
            n("b/5F");
            ! function(e) {
                e.EditLink = "team-manager-item__edit-link", e.ViewLink = "team-manager-item__view-link"
            }(ot || (ot = {}));
            var dt = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return s.createElement(S.Va, i.__assign({
                            padding: {
                                y: 1,
                                x: 1
                            }
                        }, Object(ae.a)(this.props), {
                            className: "team-manager-item"
                        }), s.createElement(S.G, {
                            row: !0
                        }, s.createElement(S.xb, {
                            className: "team-manager-item__avatar",
                            borderRadius: S.x.Medium,
                            overflow: S.Ya.Hidden
                        }, s.createElement(S.o, {
                            ratio: S.p.Aspect1x1
                        }, s.createElement(U.b, {
                            src: this.props.team.logo || at.a,
                            alt: Object(p.d)("{displayName} Team Logo", {
                                displayName: this.props.team.displayName
                            }, "TeamManagerItem")
                        }))), s.createElement(S.Va, {
                            flexGrow: 1,
                            display: S.W.Flex,
                            position: S.db.Relative
                        }, s.createElement(S.Na, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, s.createElement(S.V, {
                            type: S.Nb.Span,
                            ellipsis: !0
                        }, this.props.team.name))), s.createElement(S.Va, {
                            padding: {
                                right: 2
                            }
                        }, s.createElement(S.T, {
                            to: "/teams/" + this.props.team.name + "/dashboard",
                            "data-test-selector": ot.EditLink
                        }, Object(p.d)("Edit", "TeamManagerItem"))), s.createElement(S.Va, null, s.createElement(S.T, {
                            to: "/team/" + this.props.team.name,
                            "data-test-selector": ot.ViewLink
                        }, Object(p.d)("View", "TeamManagerItem")))))
                    }, t
                }(s.Component),
                ut = Object(U.c)("TeamManagerItem")(dt),
                pt = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.teams.length < 1 && !this.props.formErrorMessage ? null : s.createElement(Ee.a, {
                            label: Object(p.d)("Manager", "TeamManager"),
                            error: !!this.props.formErrorMessage,
                            errorMessage: this.props.formErrorMessage
                        }, this.props.teams.map(function(e) {
                            return s.createElement(ut, {
                                key: e.name,
                                team: e
                            })
                        }))
                    }, t
                }(s.Component),
                ht = Object(U.c)("TeamManager")(pt),
                mt = n("fbdC"),
                gt = n("aCAx"),
                ft = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClick = function() {
                            t.props.showModal({
                                message: t.props.message,
                                confirmButton: t.props.confirmButton,
                                onConfirmClick: t.props.onConfirmClick
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(S.A, i.__assign({}, this.props, {
                            onClick: this.handleClick
                        }))
                    }, t
                }(s.Component);
            var bt = Object(a.connect)(null, function(e) {
                    return {
                        showModal: function(t) {
                            return e(Object(gt.d)(mt.a, t))
                        }
                    }
                })(ft),
                vt = (n("irnM"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickRemove = function() {
                            t.props.onClickRemove(t.props.index)
                        }, t.onChangeRevenue = function() {
                            t.props.onChangeRevenue(t.props.index)
                        }, t.onChangeStats = function() {
                            t.props.onChangeStats(t.props.index)
                        }, t.onChangePrimary = function() {
                            t.props.onChangePrimary(t.props.index)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = Object(p.d)("Remove", "TeamMembershipsItem"),
                            t = Object(p.d)("Do you want to remove yourself from this team?", "TeamMembershipsItem"),
                            n = null;
                        return this.props.showPrimaryInput && (n = s.createElement(S.Va, {
                            padding: {
                                right: 2
                            }
                        }, s.createElement(S.jb, {
                            "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_PRIMARY_INPUT",
                            name: "team-memberships-main-radio",
                            onChange: this.onChangePrimary,
                            label: Object(p.d)("Main", "TeamMembershipsItem"),
                            disabled: this.props.updating,
                            checked: this.props.membership.primary
                        }))), s.createElement(S.Va, i.__assign({
                            padding: {
                                y: 1,
                                x: 1
                            }
                        }, Object(ae.a)(this.props), {
                            className: "team-memberships-item"
                        }), s.createElement(S.G, {
                            row: !0
                        }, s.createElement(S.xb, {
                            className: "team-memberships-item__avatar",
                            flexShrink: 0,
                            borderRadius: S.x.Medium,
                            overflow: S.Ya.Hidden
                        }, s.createElement(S.o, {
                            ratio: S.p.Aspect1x1
                        }, s.createElement(U.b, {
                            src: this.props.membership.team.logo || at.a,
                            alt: Object(p.d)("{displayName} Team Logo", {
                                displayName: this.props.membership.team.displayName
                            }, "TeamMembershipsItem")
                        }))), s.createElement(S.Va, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1,
                            position: S.db.Relative,
                            ellipsis: !0
                        }, s.createElement(S.T, {
                            to: "/team/" + this.props.membership.team.name
                        }, s.createElement(S.V, {
                            type: S.Nb.Span,
                            ellipsis: !0
                        }, this.props.membership.team.displayName))), s.createElement(S.Va, {
                            padding: {
                                right: 2
                            }
                        }, s.createElement(S.N, {
                            "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_STATS_INPUT",
                            onChange: this.onChangeStats,
                            label: Object(p.d)("Stats", "TeamMembershipsItem"),
                            disabled: this.props.updating,
                            checked: this.props.membership.statsRevealed
                        })), s.createElement(S.Va, {
                            padding: {
                                right: 2
                            }
                        }, s.createElement(S.N, {
                            "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_REVENUE_INPUT",
                            onChange: this.onChangeRevenue,
                            label: Object(p.d)("Revenue", "TeamMembershipsItem"),
                            disabled: this.props.updating,
                            checked: this.props.membership.revenueRevealed
                        })), n, s.createElement(S.Qb, {
                            label: e
                        }, s.createElement(bt, {
                            ariaLabel: e,
                            icon: S.nb.Trash,
                            onConfirmClick: this.onClickRemove,
                            disabled: this.props.updating,
                            message: s.createElement(S.V, {
                                fontSize: S.Aa.Size4
                            }, t),
                            confirmButton: s.createElement(S.z, {
                                type: S.F.Alert
                            }, Object(p.d)("Leave Team", "TeamMembershipsItem"))
                        }))))
                    }, t
                }(s.Component)),
                yt = Object(U.c)("TeamMembershipsItem")(vt),
                St = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this;
                        return this.props.memberships.length < 1 && !this.props.formErrorMessage ? null : s.createElement(Ee.a, {
                            label: Object(p.d)("Member", "TeamMemberships"),
                            error: !!this.props.formErrorMessage,
                            errorMessage: this.props.formErrorMessage
                        }, this.props.memberships.map(function(t, n) {
                            return s.createElement(yt, {
                                index: n,
                                key: t.team.name,
                                onClickRemove: e.props.onClickRemove,
                                onChangeStats: e.props.onChangeStats,
                                onChangeRevenue: e.props.onChangeRevenue,
                                onChangePrimary: e.props.onChangePrimary,
                                showPrimaryInput: e.props.memberships.length > 1,
                                membership: t,
                                updating: e.props.updating
                            })
                        }))
                    }, t
                }(s.Component),
                Et = Object(U.c)("TeamMemberships")(St),
                Ct = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return s.createElement(g.a, null, s.createElement(ht, {
                            teams: this.props.managedTeams,
                            formErrorMessage: this.props.managedError
                        }), s.createElement(ct, {
                            invitations: this.props.invitations,
                            acceptInvitation: this.props.acceptInvitation,
                            declineInvitation: this.props.declineInvitation,
                            formErrorMessage: this.props.invitationsError
                        }), s.createElement(Et, {
                            memberships: this.props.memberships,
                            formErrorMessage: this.props.membershipsError,
                            onClickRemove: this.props.onClickRemove,
                            onChangeStats: this.props.onChangeStats,
                            onChangeRevenue: this.props.onChangeRevenue,
                            onChangePrimary: this.props.onChangePrimary,
                            updating: this.props.updatingToggles
                        }))
                    }, t
                }(s.Component),
                _t = Object(U.c)("TeamSettings")(Ct),
                wt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            membershipsError: "",
                            memberships: [],
                            updatingToggles: !1,
                            invitationsError: "",
                            invitations: [],
                            updatingInvitations: !1,
                            managedError: "",
                            managedTeams: []
                        }, t.logger = p.o.logger.withCategory("team-settings"), t.deleteMembership = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, a, o, s, l;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (!this.props.user || 0 === this.state.memberships.length) return [2];
                                            this.setState({
                                                updatingToggles: !0
                                            }), a = this.state.memberships[e], o = "/v5/channels/" + this.props.user.id + "/teams/" + a.team.name + "/membership", i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, K.a.deleteOrThrow(o)];
                                        case 2:
                                            return r = i.sent(), [3, 4];
                                        case 3:
                                            return s = i.sent(), t = s, [3, 4];
                                        case 4:
                                            return r && r.error && (t = new Error("Team Memberships error"), n = r.error), t ? (l = Object(p.d)("Unable to remove team membership", "TeamMemberships"), this.logger.error(t, l, n), this.setState({
                                                membershipsError: l,
                                                updatingToggles: !1
                                            }), [2]) : (this.setState(function(t) {
                                                var n = t.memberships.slice();
                                                return n.splice(e, 1), {
                                                    memberships: n,
                                                    updatingToggles: !1
                                                }
                                            }), [2])
                                    }
                                })
                            })
                        }, t.onChangePrimary = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, a, o, s = this;
                                return i.__generator(this, function(l) {
                                    switch (l.label) {
                                        case 0:
                                            if (this.state.memberships[e].primary) return [2];
                                            this.setState({
                                                updatingToggles: !0
                                            }), l.label = 1;
                                        case 1:
                                            return l.trys.push([1, 3, , 4]), [4, this.putChannelsMembership(i.__assign({}, this.state.memberships[e], {
                                                primary: !0
                                            }))];
                                        case 2:
                                            return n = l.sent(), [3, 4];
                                        case 3:
                                            return a = l.sent(), t = a, [3, 4];
                                        case 4:
                                            return n && n.error && (t = new Error("Team Memberships error"), r = n.error), t ? (o = Object(p.d)("Unable to update main team", "TeamMemberships"), this.logger.error(t, o, r), this.setState({
                                                membershipsError: o,
                                                updatingToggles: !1
                                            }), [2]) : (this.setState(function(t) {
                                                var n = s.state.memberships.findIndex(function(e) {
                                                        return e.primary
                                                    }),
                                                    r = B(t.memberships, function(t) {
                                                        return t[e]
                                                    }, function(e) {
                                                        return e.primary = !0, e
                                                    });
                                                return n >= 0 && (r[n].primary = !1), {
                                                    memberships: r,
                                                    updatingToggles: !1
                                                }
                                            }), [2])
                                    }
                                })
                            })
                        }, t.onChangeRevenue = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, a, o;
                                return i.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            this.setState({
                                                updatingToggles: !0
                                            }), s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, this.putChannelsMembership(i.__assign({}, this.state.memberships[e], {
                                                revenueRevealed: !this.state.memberships[e].revenueRevealed
                                            }))];
                                        case 2:
                                            return n = s.sent(), [3, 4];
                                        case 3:
                                            return a = s.sent(), t = a, [3, 4];
                                        case 4:
                                            return n && n.error && (t = new Error("Team Memberships error"), r = n.error), t ? (o = Object(p.d)("Unable to update revenue preferences", "TeamMemberships"), this.logger.error(t, o, r), this.setState({
                                                membershipsError: o,
                                                updatingToggles: !1
                                            }), [2]) : (this.setState(function(t) {
                                                return {
                                                    memberships: B(t.memberships, function(t) {
                                                        return t[e]
                                                    }, function(e) {
                                                        return e.revenueRevealed = !e.revenueRevealed, e
                                                    }),
                                                    updatingToggles: !1
                                                }
                                            }), [2])
                                    }
                                })
                            })
                        }, t.onChangeStats = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, a, o;
                                return i.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            this.setState({
                                                updatingToggles: !0
                                            }), s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, this.putChannelsMembership(i.__assign({}, this.state.memberships[e], {
                                                statsRevealed: !this.state.memberships[e].statsRevealed
                                            }))];
                                        case 2:
                                            return n = s.sent(), [3, 4];
                                        case 3:
                                            return a = s.sent(), t = a, [3, 4];
                                        case 4:
                                            return n && n.error && (t = new Error("Team Memberships error"), r = n.error), t ? (o = Object(p.d)("Unable to update stats preferences", "TeamMemberships"), this.logger.error(t, o, r), this.setState({
                                                membershipsError: o,
                                                updatingToggles: !1
                                            }), [2]) : (this.setState(function(t) {
                                                return {
                                                    memberships: B(t.memberships, function(t) {
                                                        return t[e]
                                                    }, function(e) {
                                                        return e.statsRevealed = !e.statsRevealed, e
                                                    }),
                                                    updatingToggles: !1
                                                }
                                            }), [2])
                                    }
                                })
                            })
                        }, t.putChannelsMembership = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.props.user ? (t = "/v5/channels/" + this.props.user.id + "/teams/" + e.team.name + "/membership", [4, K.a.put(t, {
                                                body: {
                                                    primary: e.primary,
                                                    revenue_revealed: e.revenueRevealed,
                                                    stats_revealed: e.statsRevealed
                                                }
                                            })]) : [2];
                                        case 1:
                                            return [2, n.sent()]
                                    }
                                })
                            })
                        }, t.fetchTeamsMembership = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, a, o;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (!this.props.user) return [2];
                                            r = "/v5/channels/" + this.props.user.id + "/memberships", i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, K.a.get(r)];
                                        case 2:
                                            return t = i.sent(), this.setState({
                                                memberships: this.deserializeMemberships(t),
                                                updatingToggles: !1
                                            }), [3, 4];
                                        case 3:
                                            return a = i.sent(), e = a, [3, 4];
                                        case 4:
                                            return t && t.error && (e = new Error("Team Memberships error"), n = t.error), e ? (o = Object(p.d)("Failed to load Team data.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to load Team data", n), this.setState({
                                                membershipsError: o
                                            }), [2]) : [2]
                                    }
                                })
                            })
                        }, t.deserializeMemberships = function(e) {
                            return e.body ? e.body.memberships.map(function(e) {
                                return {
                                    team: {
                                        name: e.team.name,
                                        displayName: e.team.display_name,
                                        logo: e.team.logo_url
                                    },
                                    primary: e.primary,
                                    revenueRevealed: e.revenue_revealed,
                                    statsRevealed: e.stats_revealed
                                }
                            }) : []
                        }, t.fetchInvitations = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r;
                                return i.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.props.user) return [2];
                                            e = "/v5/channels/" + this.props.user.id + "/invitations", a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, K.a.getOrThrow(e)];
                                        case 2:
                                            return t = a.sent(), this.setState({
                                                invitations: this.deserializeInvitations(t)
                                            }), [3, 4];
                                        case 3:
                                            return n = a.sent(), r = Object(p.d)("Failed to load Team data.  Please refresh the page and try again", "TeamInvitations"), this.logger.error(n, "Failed to load Team data"), this.setState({
                                                invitationsError: r
                                            }), [2];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.declineInvitation = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this.respondToInvitation(e, !1)];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        }, t.acceptInvitation = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this.respondToInvitation(e, !0)];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        }, t.respondToInvitation = function(e, n) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, r, a, o, s, l, c;
                                return i.__generator(this, function(d) {
                                    switch (d.label) {
                                        case 0:
                                            if (!this.props.user || 0 === this.state.invitations.length) return [2];
                                            this.setState({
                                                updatingInvitations: !0
                                            }), o = this.state.invitations[e], s = "/v5/channels/" + this.props.user.id + "/teams/" + o.name + "/invitation", d.label = 1;
                                        case 1:
                                            return d.trys.push([1, 3, , 4]), [4, K.a.put(s, {
                                                body: {
                                                    accepted: n
                                                }
                                            })];
                                        case 2:
                                            return a = d.sent(), [3, 4];
                                        case 3:
                                            return l = d.sent(), t = l, [3, 4];
                                        case 4:
                                            return a && a.error && (t = new Error("Team Invitations error"), r = a.error), t ? (c = Object(p.d)("Unable to respond to invitation", "TeamInvitations"), this.logger.error(t, c, r), this.setState({
                                                invitationsError: c,
                                                updatingInvitations: !1
                                            }), [2]) : (this.setState(function(t) {
                                                var r = t.invitations.slice();
                                                r.splice(e, 1);
                                                var a = t.memberships.slice();
                                                return n && a.push({
                                                    team: i.__assign({}, o),
                                                    revenueRevealed: !1,
                                                    statsRevealed: !1,
                                                    primary: !1
                                                }), {
                                                    memberships: a,
                                                    invitations: r,
                                                    updatingInvitations: !1
                                                }
                                            }), [2])
                                    }
                                })
                            })
                        }, t.deserializeInvitations = function(e) {
                            return e.body ? e.body.invitations.map(function(e) {
                                return {
                                    name: e.team.name,
                                    displayName: e.team.display_name,
                                    logo: e.team.logo_url
                                }
                            }) : []
                        }, t.fetchManagedTeams = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r;
                                return i.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.props.user) return [2];
                                            e = "/v5/users/" + this.props.user.id + "/teams", a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, K.a.getOrThrow(e)];
                                        case 2:
                                            return t = a.sent(), this.setState({
                                                managedTeams: this.deserializeTeams(t)
                                            }), [3, 4];
                                        case 3:
                                            return n = a.sent(), r = Object(p.d)("Failed to load Team data.  Please refresh the page and try again", "TeamManager"), this.logger.error(n, "Failed to load Team data"), this.setState({
                                                managedError: r
                                            }), [2];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.deserializeTeams = function(e) {
                            return e.body ? e.body.teams.map(function(e) {
                                return {
                                    name: e.name,
                                    displayName: e.display_name,
                                    logo: e.logo_url
                                }
                            }) : []
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillMount = function() {
                        this.fetchTeamsMembership(), this.fetchInvitations(), this.fetchManagedTeams()
                    }, t.prototype.render = function() {
                        return this.hasTeamContentToShow() ? s.createElement(s.Fragment, null, s.createElement(Se.a, {
                            title: Object(p.d)("My Teams", "TeamMemberships"),
                            description: Object(p.d)("Manage your teams here", "TeamMemberships")
                        }), s.createElement(_t, {
                            memberships: this.state.memberships,
                            membershipsError: this.state.membershipsError,
                            onClickRemove: this.deleteMembership,
                            onChangeStats: this.onChangeStats,
                            onChangeRevenue: this.onChangeRevenue,
                            onChangePrimary: this.onChangePrimary,
                            updatingToggles: this.state.updatingToggles,
                            managedTeams: this.state.managedTeams,
                            managedError: this.state.managedError,
                            invitations: this.state.invitations,
                            acceptInvitation: this.acceptInvitation,
                            declineInvitation: this.declineInvitation,
                            invitationsError: this.state.invitationsError
                        })) : null
                    }, t.prototype.hasTeamContentToShow = function() {
                        return this.state.invitations.length > 0 || this.state.managedTeams.length > 0 || this.state.memberships.length > 0
                    }, t
                }(s.Component);
            var Ot, kt = Object(a.connect)(function(e) {
                    return {
                        user: Object(o.e)(e)
                    }
                })(wt),
                xt = n("4rCz"),
                It = n("7lJP"),
                Tt = n("94Uw"),
                Dt = n("Ww25"),
                Pt = n("FEav");
            ! function(e) {
                e.Banner = "upload-video-player__banner", e.OfflineImage = "upload-video-player__offline-image", e.ErrorMessage = "upload-video-player__error-message"
            }(Ot || (Ot = {}));
            var Rt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            deletionError: !1,
                            working: !1
                        }, t.onClickDelete = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return i.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!(this.props.data && this.props.data.user && this.props.data.user.id)) return [2];
                                            this.setState({
                                                working: !0
                                            }), e = !1, t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, K.a.putOrThrow("/kraken/users/" + this.props.data.user.id + "/default_images?client_id=" + p.a.authSettings.clientID + "&api_version=" + p.a.defaultAPIVersion, {
                                                body: {
                                                    default_channel_offline_image: "empty_channel_offline_image"
                                                }
                                            })];
                                        case 2:
                                            return t.sent(), Object(Re.e)(Pt, {
                                                login: this.props.user && this.props.user.login
                                            }, function(e) {
                                                return e.user && (e.user.offlineImageURL = null), e
                                            }), [3, 4];
                                        case 3:
                                            return t.sent(), e = !0, [3, 4];
                                        case 4:
                                            return this.setState({
                                                deletionError: e,
                                                working: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t.imageUploaded = function() {
                            t.props.data && t.props.data.refetch()
                        }, t.showModal = function() {
                            var e = t.props.user;
                            e && t.props.showModal(It.UserImageUploader, {
                                userID: e.id,
                                login: e.login,
                                displayName: e.displayName,
                                imageType: Tt.a.ChannelOfflineImage,
                                showCloser: !0,
                                successCallback: t.imageUploaded
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = null,
                            t = null;
                        if (this.props.data && this.props.data.user && this.props.data.user.offlineImageURL) {
                            e = s.createElement("img", {
                                "data-test-selector": Ot.OfflineImage,
                                height: 90,
                                width: 160,
                                src: this.props.data.user.offlineImageURL
                            });
                            var n = Object(xt.d)("Remove my Video Player Banner Image", "UploadVideoPlayerBanner");
                            t = s.createElement(S.Va, {
                                margin: {
                                    x: 2
                                }
                            }, s.createElement(S.A, {
                                ariaLabel: n,
                                disabled: this.state.working,
                                icon: S.nb.Trash,
                                onClick: this.onClickDelete
                            }))
                        } else e = s.createElement(S.mb, {
                            asset: S.nb.Camera,
                            type: S.ob.Alt2,
                            height: 90,
                            width: 160
                        });
                        return s.createElement(S.Va, null, s.createElement(Se.a, {
                            title: Object(xt.d)("Video Player Banner", "UploadVideoPlayerBanner"),
                            description: Object(xt.d)("This is displayed on the player when your channel is offline.", "UploadVideoPlayerBanner")
                        }), s.createElement(g.a, null, s.createElement(W.a, null, s.createElement(S.Va, {
                            display: S.W.Flex
                        }, s.createElement(S.xb, {
                            borderRadius: S.x.Medium,
                            overflow: S.Ya.Hidden
                        }, e), s.createElement(S.Va, {
                            padding: {
                                left: 2,
                                top: 1
                            }
                        }, s.createElement(S.Va, {
                            display: S.W.Flex
                        }, s.createElement(S.z, {
                            "data-test-selector": Ot.Banner,
                            onClick: this.showModal,
                            type: S.F.Hollow
                        }, s.createElement(S.Va, {
                            padding: {
                                x: 1
                            }
                        }, Object(xt.d)("Update", "UploadVideoPlayerBanner"))), t), s.createElement(Dt.a, {
                            text: Object(xt.d)("Max 10mb GIF, JPG, or PNG", "UploadVideoPlayerBanner")
                        }), this.state.deletionError && s.createElement(S.V, {
                            color: S.O.Error,
                            "data-test-selector": Ot.ErrorMessage
                        }, Object(xt.d)("Sorry, something went wrong. Please try again later.", "UploadVideoPlayerBanner")))))))
                    }, t
                }(s.Component),
                jt = Object(ye.a)(Pt, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.user && e.user.login
                            }
                        }
                    }
                })(Rt);
            var Mt, Nt = Object(a.connect)(function(e) {
                    return {
                        user: Object(o.e)(e)
                    }
                }, function(e) {
                    return Object(A.bindActionCreators)({
                        showModal: gt.d
                    }, e)
                })(jt),
                At = function(e) {
                    return s.createElement(Ee.a, {
                        orientation: S.Da.Horizontal,
                        label: Object(p.d)("Followers-only mode", "DashboardSettingsModPrefFollowersOnly")
                    }, s.createElement(S.Va, {
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(S.Va, {
                        display: S.W.Flex
                    }, s.createElement(S.Va, null, s.createElement(S.sb, {
                        onChange: e.onSetFollowersOnlyDuration,
                        value: e.followersOnlyDurationSeconds.toString()
                    }, s.createElement("option", {
                        value: J.FollowersDurationSeconds.Off
                    }, Object(p.d)("Off", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                        value: J.FollowersDurationSeconds.TenMinutes
                    }, Object(p.d)("10 Minutes", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                        value: J.FollowersDurationSeconds.ThirtyMinutes
                    }, Object(p.d)("30 Minutes", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                        value: J.FollowersDurationSeconds.OneHour
                    }, Object(p.d)("1 Hour", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                        value: J.FollowersDurationSeconds.OneDay
                    }, Object(p.d)("1 Day", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                        value: J.FollowersDurationSeconds.OneWeek
                    }, Object(p.d)("1 Week", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                        value: J.FollowersDurationSeconds.OneMonth
                    }, Object(p.d)("1 Month", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                        value: J.FollowersDurationSeconds.ThreeMonths
                    }, Object(p.d)("3 Months", "DashboardSettingsModPrefFollowersOnly"))))), s.createElement(Dt.a, {
                        text: Object(p.d)("When enabled, viewers must follow you for the specified amount of time before they are allowed to post messages on your videos.", "DashboardSettingsModPrefFollowersOnly")
                    })))
                },
                Ft = function(e) {
                    return s.createElement(Ee.a, {
                        orientation: S.Da.Horizontal,
                        label: Object(p.d)("Messages on videos", "DashboardSettingsModPrefMessages")
                    }, s.createElement(S.Va, {
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(S.jb, {
                        disabled: e.requestState === we.a.Loading,
                        checked: e.publishingMode === J.ChommentsPublishingMode.Open,
                        onChange: e.onSetPublishingMode,
                        label: Object(p.d)("Allow all messages on videos except for those caught by AutoMod", "DashboardSettingsModPrefMessages"),
                        name: "chommentsPublishingMode",
                        value: J.ChommentsPublishingMode.Open
                    })), s.createElement(S.Va, {
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(S.jb, {
                        disabled: e.requestState === we.a.Loading,
                        checked: e.publishingMode === J.ChommentsPublishingMode.Review,
                        onChange: e.onSetPublishingMode,
                        label: Object(p.d)("Hold all messages on videos for review", "DashboardSettingsModPrefMessages"),
                        name: "chommentsPublishingMode",
                        value: J.ChommentsPublishingMode.Review
                    })), s.createElement(S.Va, {
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(S.jb, {
                        disabled: e.requestState === we.a.Loading,
                        checked: e.publishingMode === J.ChommentsPublishingMode.Disabled,
                        onChange: e.onSetPublishingMode,
                        label: Object(p.d)("Disable all messages on videos", "DashboardSettingsModPrefMessages"),
                        name: "chommentsPublishingMode",
                        value: J.ChommentsPublishingMode.Disabled
                    })))
                },
                Lt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleSetPublishingMode = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(t) {
                                    return this.props.saveSettings({
                                        publishingMode: e.currentTarget.value
                                    }), [2]
                                })
                            })
                        }, t.handleSetFollowersOnlyDuration = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(t) {
                                    return this.props.saveSettings({
                                        followersOnlyDurationSeconds: Number(e.currentTarget.value)
                                    }), [2]
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return s.createElement(S.Va, null, s.createElement(Se.a, {
                            title: Object(p.d)("Video Moderation", "DashboardSettingsModPref")
                        }), s.createElement(g.a, null, this.props.requestState === we.a.Error && s.createElement(W.a, null, s.createElement(S.V, {
                            color: S.O.Error
                        }, Object(p.d)("Something went wrong. Give it another try later.", "DashboardSettingsModPrefMessagesError"))), s.createElement(Ft, {
                            onSetPublishingMode: this.handleSetPublishingMode,
                            publishingMode: this.props.moderationSettings.publishingMode,
                            requestState: this.props.requestState
                        }), s.createElement(At, {
                            onSetFollowersOnlyDuration: this.handleSetFollowersOnlyDuration,
                            followersOnlyDurationSeconds: this.props.moderationSettings.followersOnlyDurationSeconds
                        })))
                    }, t
                }(s.Component),
                Vt = Object(U.c)("VideoModerationSettings")(Lt),
                Ut = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            moderationSettings: J.DEFAULT_VIDEO_MODERATION_SETTINGS,
                            requestState: J.RequestState.Loading
                        }, t.logger = p.o.logger.withCategory("followers-only-settings-form"), t.saveSettings = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return i.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return this.setState({
                                                requestState: J.RequestState.Loading
                                            }), [4, function(e, t) {
                                                return i.__awaiter(this, void 0, Promise, function() {
                                                    var n;
                                                    return i.__generator(this, function(r) {
                                                        switch (r.label) {
                                                            case 0:
                                                                return [4, K.a.put("/kraken/videos/channels/" + e + "/settings", {
                                                                    body: function(e) {
                                                                        return {
                                                                            publishing_mode: e.publishingMode,
                                                                            followers_only_duration_seconds: e.followersOnlyDurationSeconds
                                                                        }
                                                                    }(t)
                                                                })];
                                                            case 1:
                                                                return (n = r.sent()).error || n.requestError ? [2, {
                                                                    isError: !0,
                                                                    moderationSettings: void 0,
                                                                    error: n.error || n.requestError
                                                                }] : [2, {
                                                                    isError: !1,
                                                                    moderationSettings: Z(n.body)
                                                                }]
                                                        }
                                                    })
                                                })
                                            }(this.props.channelID, i.__assign({}, this.state.moderationSettings, e))];
                                        case 1:
                                            return (t = r.sent()).isError ? (this.setState({
                                                requestState: J.RequestState.Error
                                            }), n = new Error("Channel Properties Settings error"), this.logger.error(n, "Failed to load channel data", t.error)) : this.setState({
                                                moderationSettings: t.moderationSettings,
                                                requestState: J.RequestState.Success
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, function(e) {
                                            return i.__awaiter(this, void 0, Promise, function() {
                                                var t;
                                                return i.__generator(this, function(n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return [4, K.a.get("/kraken/videos/channels/" + e + "/settings")];
                                                        case 1:
                                                            return (t = n.sent()).error || t.requestError ? [2, {
                                                                isError: !0,
                                                                moderationSettings: void 0
                                                            }] : [2, {
                                                                isError: !1,
                                                                moderationSettings: Z(t.body)
                                                            }]
                                                    }
                                                })
                                            })
                                        }(this.props.channelID)];
                                    case 1:
                                        return (e = t.sent()).isError ? this.setState({
                                            requestState: J.RequestState.Error
                                        }) : this.setState({
                                            moderationSettings: e.moderationSettings,
                                            requestState: J.RequestState.Success
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return s.createElement(Vt, {
                            moderationSettings: this.state.moderationSettings,
                            requestState: this.state.requestState,
                            saveSettings: this.saveSettings
                        })
                    }, t
                }(s.Component),
                Wt = n("wo8Z"),
                Bt = n("bDCY"),
                zt = n("HOmj"),
                qt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isInFlight: !1,
                            isLastRequestErrored: !1
                        }, t.onNewChatterRitualToggled = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n, r;
                                return i.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.props.channelID) return [2];
                                            this.setState({
                                                isInFlight: !0,
                                                isLastRequestErrored: !1
                                            }), t = {
                                                channelID: this.props.channelID,
                                                isEnabled: e
                                            }, n = {
                                                toggleRitualsEnabled: {
                                                    isEnabled: e,
                                                    __typename: "ToggleRitualsEnabledPayload",
                                                    user: {
                                                        id: this.props.channelID,
                                                        __typename: "User",
                                                        settings: {
                                                            isRitualsEnabled: e,
                                                            isRitualsWhitelisted: !0,
                                                            __typename: "UserSettings"
                                                        }
                                                    }
                                                }
                                            }, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.toggleRitualsEnabled(Object(Re.b)(t, n))];
                                        case 2:
                                            return a.sent(), [3, 4];
                                        case 3:
                                            return r = a.sent(), this.setState({
                                                isLastRequestErrored: !0
                                            }), p.j.warn(r, "Failed to toggle ritual"), [3, 4];
                                        case 4:
                                            return this.setState({
                                                isInFlight: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (!this.show) return null;
                        var e = this.props.data;
                        return s.createElement(s.Fragment, null, s.createElement(Se.a, {
                            title: Object(p.d)("Viewer milestones", "RitualsSettingsSection")
                        }), s.createElement(g.a, null, s.createElement(_e.a, {
                            showPlaceholder: !e || e.loading,
                            id: "new-chatter-ritual",
                            label: Object(p.d)("New chatter announcements", "RitualsSettingsSection"),
                            checked: !!(e && e.channel && e.channel.settings && e.channel.settings.isRitualsEnabled),
                            description: Object(p.d)("Allow your community to celebrate their first time chatting on your channel.", "RitualsSettingsSection"),
                            disabled: this.state.isInFlight,
                            error: this.state.isLastRequestErrored || !(!e || !e.error),
                            onChange: this.onNewChatterRitualToggled
                        })))
                    }, Object.defineProperty(t.prototype, "show", {
                        get: function() {
                            return Object(Wt.a)() && this.props.data && !this.props.data.error && this.props.data.channel && this.props.data.channel.settings && this.props.data.channel.settings.isRitualsWhitelisted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(s.Component),
                Kt = Object(Je.compose)(Object(ye.a)(Bt, {
                    options: function(e) {
                        return {
                            variables: {
                                id: e.channelID
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelID || !Object(Wt.a)()
                    }
                }), Object(ye.a)(zt, {
                    name: "toggleRitualsEnabled"
                }))(qt),
                Ht = n("izCx"),
                Gt = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.data.channel;
                        return s.createElement(x.a, null, s.createElement(Se.a, {
                            title: Object(p.d)("Stream Key & Preferences", "DashboardSettings")
                        }), s.createElement(Xe, null), s.createElement(Nt, null), s.createElement(Te, {
                            channelName: this.props.match.params.channelName
                        }), s.createElement(kt, null), s.createElement(Se.a, {
                            title: Object(p.d)("Drops", "DashboardSettings")
                        }), s.createElement(nt, {
                            channelName: this.props.match.params.channelName
                        }), e && e.id && s.createElement(Ut, {
                            channelID: e.id
                        }), s.createElement(Kt, {
                            channelID: e && e.id
                        }))
                    }, t
                }(s.Component),
                Yt = Object(A.compose)(Object(ye.a)(Ht, {
                    options: function(e) {
                        return {
                            variables: {
                                channelName: e.match.params.channelName
                            }
                        }
                    }
                }), Object(U.c)("DashboardSettingsIndexPage", {
                    autoReportInteractive: !0,
                    destination: L.a.DashboardSettingsIndex
                }), Object(F.a)({
                    location: V.PageviewLocation.DashboardSettingsIndex
                }))(Gt),
                Qt = n("3iFw"),
                Xt = n("rqzT"),
                Jt = n("NMMG"),
                Zt = {
                    "data-test-selector": "display-name"
                },
                $t = {
                    "data-test-selector": "empty"
                },
                en = function(e) {
                    return 0 === e.channels.length ? s.createElement(S.Va, i.__assign({
                        display: S.W.Flex,
                        flexDirection: S.Y.Column,
                        alignItems: S.f.Center,
                        alignContent: S.e.Center,
                        justifyContent: S.Ua.Center,
                        padding: {
                            top: 5,
                            right: 0,
                            bottom: 5,
                            left: 0
                        }
                    }, $t), s.createElement(S.Va, {
                        padding: {
                            bottom: .5
                        }
                    }, s.createElement(S.q, {
                        src: "https://static-cdn.jtvnw.net/emoticons/v1/58127/2.0",
                        alt: Object(p.d)("CoolCat", "ChannelSettingsEditableChannelsPage"),
                        size: 50
                    })), s.createElement(S.V, {
                        color: S.O.Alt2,
                        fontSize: S.Aa.Size5
                    }, Object(p.d)("No channels to display", "ChannelSettingsEditableChannelsPage"))) : s.createElement(S.P, {
                        cols: 6
                    }, e.channels.map(function(t) {
                        return s.createElement(S.xb, {
                            key: t.id,
                            alignItems: S.f.Center,
                            borderBottom: !0,
                            display: S.W.Flex,
                            justifyContent: S.Ua.Between,
                            padding: {
                                bottom: 1,
                                top: 1
                            }
                        }, s.createElement(S.Va, {
                            display: S.W.Flex,
                            alignItems: S.f.Center
                        }, s.createElement(S.T, {
                            to: "/" + t.login
                        }, s.createElement(S.q, {
                            alt: t.displayname,
                            size: 30,
                            src: function(e) {
                                return e.profile_image && e.profile_image["50x50"] ? e.profile_image["50x50"].url : Object($.c)(e.id, 50)
                            }(t)
                        })), s.createElement(S.Va, {
                            margin: {
                                left: 1
                            }
                        }, s.createElement(S.T, {
                            to: "/" + t.login
                        }, s.createElement(S.V, i.__assign({}, Zt), t.displayname)))), s.createElement(S.Va, null, s.createElement(S.Va, {
                            margin: {
                                right: 1
                            },
                            display: S.W.InlineFlex
                        }, s.createElement(Xt.a, {
                            buttonType: S.F.Hollow,
                            threadID: Object(Jt.a)(e.user.id, t.id),
                            isPopout: !1
                        })), s.createElement(S.z, {
                            linkTo: "/" + t.login + "/dashboard/live",
                            type: S.F.Text
                        }, Object(p.d)("Dashboard", "ChannelSettingsEditableChannelsPage"))))
                    }))
                },
                tn = {
                    "data-test-selector": "error"
                },
                nn = function() {
                    return s.createElement(S.Va, i.__assign({
                        display: S.W.Flex,
                        flexDirection: S.Y.Column,
                        alignItems: S.f.Center,
                        alignContent: S.e.Center,
                        justifyContent: S.Ua.Center,
                        padding: {
                            top: 5,
                            right: 0,
                            bottom: 5,
                            left: 0
                        }
                    }, tn), s.createElement(S.Va, {
                        padding: {
                            top: 5,
                            bottom: .5
                        }
                    }, s.createElement(S.q, {
                        src: "https://static-cdn.jtvnw.net/emoticons/v1/86/2.0",
                        alt: Object(p.d)("BibleThump", "ChannelSettingsEditableChannelsPage"),
                        size: 50
                    })), s.createElement(S.V, {
                        color: S.O.Alt2,
                        fontSize: S.Aa.Size5
                    }, Object(p.d)("An error occured while loading channels you can manage.", "ChannelSettingsEditableChannelsPage")))
                },
                rn = n("CEZT");
            n("rCIv");
            ! function(e) {
                e[e.Loading = 0] = "Loading", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
            }(Mt || (Mt = {}));
            var an = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            editableChannels: [],
                            requestState: Mt.Loading
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillMount = function() {
                        this.setEditableChannels()
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.props.user && this.props.channelLogin !== e.channelLogin && this.setEditableChannels()
                    }, t.prototype.render = function() {
                        if (!this.props.user || this.state.requestState === Mt.Loading) return s.createElement(x.a, null, s.createElement(S.cb, {
                            height: 600
                        }));
                        var e = s.createElement(m.a, {
                            title: Object(p.d)("Channels you can manage", "ChannelSettingsEditableChannelsPage"),
                            linkToParent: "/" + this.props.user.login + "/dashboard/settings"
                        });
                        return s.createElement(s.Fragment, null, s.createElement(x.a, null, s.createElement(g.a, {
                            header: e
                        }, s.createElement(S.xb, {
                            background: S.r.Base,
                            elevation: 1,
                            padding: 2,
                            flexGrow: 1,
                            fullWidth: !0,
                            className: "editable-channels-page"
                        }, s.createElement(S.xb, {
                            fullWidth: !0,
                            fullHeight: !0,
                            display: S.W.Flex,
                            justifyContent: S.Ua.Center,
                            margin: 1
                        }, this.state.requestState === Mt.Success ? s.createElement(en, {
                            channels: this.state.editableChannels,
                            user: this.props.user
                        }) : s.createElement(nn, null))))), s.createElement(Qt.Whispers, null))
                    }, t.prototype.setEditableChannels = function() {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!this.props.user) return [2];
                                        t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, Object(rn.a)(this.props.user.id)];
                                    case 2:
                                        return e = t.sent(), this.setState({
                                            editableChannels: e,
                                            requestState: Mt.Success
                                        }), [3, 4];
                                    case 3:
                                        return t.sent(), this.setState({
                                            requestState: Mt.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }(s.Component),
                on = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.user,
                            n = t && t.login,
                            r = t && t.roles && t.roles.isStaff;
                        return this.props.match.params.channelLogin === n || r ? s.createElement(d.a, null, s.createElement(l.a, {
                            path: "/:channelLogin/dashboard/settings/channel",
                            exact: !0,
                            render: function() {
                                return s.createElement(an, {
                                    user: e.props.user,
                                    channelLogin: e.props.match.params.channelLogin
                                })
                            }
                        }), s.createElement(l.a, {
                            path: "/:channelLogin/dashboard/settings/stream",
                            exact: !0,
                            render: function() {
                                return s.createElement(N, {
                                    user: e.props.user,
                                    channelLogin: e.props.match.params.channelLogin
                                })
                            }
                        }), s.createElement(l.a, {
                            path: "/:channelLogin/dashboard/settings/autohost",
                            exact: !0,
                            component: ve
                        }), s.createElement(l.a, {
                            path: "/:channelLogin/dashboard/settings/moderation",
                            exact: !0,
                            render: function(e) {
                                var t = e.match;
                                return s.createElement(c.a, {
                                    to: "/" + t.params.channelLogin + "/dashboard/settings"
                                })
                            }
                        }), s.createElement(l.a, {
                            path: "/:channelLogin/dashboard/settings/streamkey",
                            exact: !0,
                            render: function(e) {
                                var t = e.match;
                                return s.createElement(c.a, {
                                    to: "/" + t.params.channelLogin + "/dashboard/settings"
                                })
                            }
                        }), s.createElement(l.a, {
                            path: "/:channelName/dashboard/settings",
                            exact: !0,
                            component: Yt
                        }), s.createElement(l.a, {
                            component: u.a
                        })) : s.createElement(c.a, {
                            to: "/" + n + "/dashboard/settings"
                        })
                    }, t
                }(s.Component);
            var sn = Object(a.connect)(function(e) {
                return {
                    user: Object(o.e)(e)
                }
            })(on);
            n.d(t, "DashboardSettingsRoot", function() {
                return sn
            })
        },
        qYDK: function(e, t, n) {
            "use strict";
            var r, a, o, i, s = n("fvjX"),
                l = n("1rIY"),
                c = (r = Object(l.a)("DragAndDropLayoutContext", {
                    dropCard: function() {
                        return null
                    },
                    onCardsUpdate: function() {
                        return null
                    },
                    updateCard: function() {
                        return null
                    }
                })).InnerProvider,
                d = r.withContext,
                u = n("mrSG"),
                p = n("q1tI"),
                h = n("/7QA"),
                m = n("odMz"),
                g = n("Ue10"),
                f = (n("7WKn"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setContainerRef = function(e) {
                            t.containerRef = e
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.setPlaceholderStyles()
                    }, t.prototype.componentDidUpdate = function() {
                        this.setPlaceholderStyles()
                    }, t.prototype.render = function() {
                        return p.createElement(g.Va, {
                            breakpointLarge: {
                                margin: {
                                    bottom: 2
                                }
                            },
                            className: "drag-and-drop-card-placeholder" + (this.props.show ? "" : " drag-and-drop-card-placeholder__hide"),
                            fullWidth: !0,
                            margin: {
                                bottom: 1
                            },
                            refDelegate: this.setContainerRef
                        })
                    }, t.prototype.setPlaceholderStyles = function() {
                        var e = this.props.cloneStyleRef;
                        if (e && this.containerRef) {
                            var t = e.getBoundingClientRect(),
                                n = t.height,
                                r = t.width;
                            this.containerRef.style.height = n + "px", this.containerRef.style.width = r + "px"
                        }
                    }, t
                }(p.Component)),
                b = n("eJ65"),
                v = n("N0BP"),
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleMouseDown = function(e) {
                            e.stopPropagation()
                        }, t.setContainerRef = function(e) {
                            t.containerRef = e
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.containerRef.addEventListener("mousedown", this.handleMouseDown)
                    }, t.prototype.componentWillUnmount = function() {
                        this.containerRef.removeEventListener("mousedown", this.handleMouseDown)
                    }, t.prototype.render = function() {
                        return p.createElement(g.Va, {
                            position: g.db.Relative,
                            refDelegate: this.setContainerRef
                        }, p.createElement(b.a, null, p.createElement(g.A, u.__assign({
                            ariaLabel: Object(h.d)("Options", "CogWheelComponent"),
                            icon: g.nb.Gear
                        }, Object(v.a)(this.props))), p.createElement(g.u, {
                            offsetY: "0",
                            offsetX: "1rem",
                            direction: g.v.Left,
                            size: g.w.Small
                        }, this.props.children)))
                    }, t
                }(p.Component),
                S = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return p.createElement(g.xb, {
                            className: "drag-and-drop-card-title",
                            color: g.O.Base,
                            fontSize: g.Aa.Size5,
                            margin: {
                                y: "auto"
                            }
                        }, this.props.title)
                    }, t
                }(p.Component);
            n("SMeG");
            ! function(e) {
                e.ContentCollapsed = "drag-and-drop-card-content__collapsed"
            }(a || (a = {})),
            function(e) {
                e.Card = "drag-and-drop-card", e.Container = "drag-and-drop-card-container", e.Content = "drag-and-drop-card-content"
            }(o || (o = {})),
            function(e) {
                e.Carat = "carat", e.Card = "card", e.Container = "container", e.Header = "header"
            }(i || (i = {}));
            var E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleContainerMouseEnter = function(e) {
                        var n = e.clientY;
                        if (t.props.grabbedCard && !t.isHoveringSelf) {
                            var r = t.getPlaceholderPosition(n);
                            t.props.updateCard(t.props.card.name, {
                                placeholderPosition: r
                            }, m.b.SetTarget)
                        }
                    }, t.handleContainerMouseLeave = function() {
                        if (t.props.grabbedCard) {
                            var e = t.props.card;
                            t.props.updateCard(e.name, {
                                placeholderPosition: void 0
                            }, m.b.RemoveTarget)
                        }
                    }, t.handleContainerMouseMove = function(e) {
                        var n = e.clientY;
                        if (t.isHoveringOtherCard) {
                            var r = t.getPlaceholderPosition(n);
                            t.props.updateCard(t.props.card.name, {
                                placeholderPosition: r
                            }, m.b.SetTarget)
                        }
                    }, t.getPlaceholderPosition = function(e) {
                        var n = t[i.Container].getBoundingClientRect();
                        return e > n.top + n.height / 2 ? m.c.Bottom : m.c.Top
                    }, t.handleCaratClick = function() {
                        var e = t.props.card,
                            n = e.name,
                            r = e.isCollapsed;
                        t.props.updateCard(n, {
                            isCollapsed: !r
                        })
                    }, t.handleCaratMouseDown = function(e) {
                        e.stopPropagation()
                    }, t.handleCardMouseMove = function(e) {
                        var n = e.movementX,
                            r = e.movementY;
                        if (t.props.card.isGrabbed) {
                            var a = t[i.Card];
                            a.style.left = parseInt(a.style.left || "0", 10) + n + "px", a.style.top = parseInt(a.style.top || "0", 10) + r + "px"
                        }
                    }, t.handleHeaderMouseDown = function(e) {
                        var n = e.clientY,
                            r = t[i.Card],
                            a = r.getBoundingClientRect(),
                            o = a.top,
                            s = a.left,
                            l = a.width;
                        r.style.left = s + "px", r.style.top = o + "px", r.style.width = l + "px";
                        var c = t.getPlaceholderPosition(n),
                            d = t.props.card.name;
                        t.props.updateCard(d, {
                            placeholderPosition: c
                        }, m.b.SetGrabbed), t.props.updateCard(d, {}, m.b.SetTarget)
                    }, t.handleCardMouseUp = function() {
                        if (t.props.card.isGrabbed) {
                            var e = t[i.Card];
                            e.style.left = null, e.style.top = null, e.style.width = "100%", t.props.dropCard()
                        }
                        var n = t.props.card;
                        (n.placeholderPosition || n.isGrabbed) && t.props.updateCard(n.name, {
                            isGrabbed: !1,
                            placeholderPosition: void 0
                        })
                    }, t.registerRef = function(e) {
                        return function(n) {
                            t[e] = n
                        }
                    }, t.addEventListeners = function() {
                        var e = t[i.Container];
                        e.addEventListener("mousemove", t.handleContainerMouseMove), e.addEventListener("mouseleave", t.handleContainerMouseLeave), e.addEventListener("mouseenter", t.handleContainerMouseEnter), t[i.Carat].addEventListener("mousedown", t.handleCaratMouseDown), t[i.Header].addEventListener("mousedown", t.handleHeaderMouseDown), window.addEventListener("mouseup", t.handleCardMouseUp), window.addEventListener("mousemove", t.handleCardMouseMove)
                    }, t.removeEventListeners = function() {
                        var e = t[i.Container];
                        e.removeEventListener("mousemove", t.handleContainerMouseMove), e.removeEventListener("mouseleave", t.handleContainerMouseLeave), e.removeEventListener("mouseenter", t.handleContainerMouseEnter), t[i.Carat].removeEventListener("mousedown", t.handleCaratMouseDown), t[i.Header].removeEventListener("mousedown", t.handleHeaderMouseDown), window.removeEventListener("mouseup", t.handleCardMouseUp), window.removeEventListener("mousemove", t.handleCardMouseMove)
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.card.isCollapsed !== this.props.card.isCollapsed && this.props.onCardsUpdate()
                }, t.prototype.componentDidMount = function() {
                    this.addEventListeners(), this.props.updateCard(this.props.card.name, {
                        cardRef: this[i.Card]
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.removeEventListeners()
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.cogWheel,
                        n = e.card,
                        r = n.isCollapsed,
                        s = n.isGrabbed,
                        l = n.placeholderPosition,
                        c = e.grabbedCard;
                    return p.createElement(g.Va, {
                        "data-test-selector": o.Container,
                        display: g.W.Flex,
                        flexDirection: g.Y.Column,
                        refDelegate: this.registerRef(i.Container)
                    }, p.createElement(f, {
                        cloneStyleRef: c && c.cardRef,
                        show: l === m.c.Top
                    }), p.createElement(g.xb, {
                        background: g.r.Base,
                        border: !0,
                        breakpointLarge: {
                            margin: {
                                bottom: 2
                            }
                        },
                        className: "drag-and-drop-card-container" + (s ? " drag-and-drop-card-container__grabbed" : ""),
                        "data-test-selector": o.Card,
                        display: g.W.Flex,
                        elevation: s ? 4 : 1,
                        flexDirection: g.Y.Column,
                        margin: {
                            bottom: 1
                        },
                        refDelegate: this.registerRef(i.Card)
                    }, p.createElement(g.xb, {
                        alignContent: g.e.Center,
                        alignItems: g.f.Center,
                        borderBottom: !0,
                        className: "drag-and-drop-card-header",
                        display: g.W.Flex,
                        justifyContent: g.Ua.Between,
                        padding: {
                            x: 1
                        },
                        position: g.db.Relative,
                        refDelegate: this.registerRef(i.Header)
                    }, p.createElement(g.Va, {
                        display: g.W.Flex,
                        justifyContent: g.Ua.Center
                    }, p.createElement(g.Va, {
                        margin: {
                            right: 1
                        }
                    }, p.createElement(g.Va, {
                        className: "drag-and-drop-card-carat" + (r ? "__collapsed" : ""),
                        refDelegate: this.registerRef(i.Carat)
                    }, p.createElement(g.A, {
                        ariaLabel: Object(h.d)("Collapse/Expand", "DragAndDropCard"),
                        icon: g.nb.GlyphArrDown,
                        onClick: this.handleCaratClick
                    }))), p.createElement(S, {
                        title: this.props.title
                    })), p.createElement(g.Va, {
                        display: g.W.Flex,
                        alignItems: g.f.Center
                    }, t && p.createElement(y, {
                        "data-a-target": this.props.cogWheelTarget
                    }, t), p.createElement(g.Va, {
                        margin: {
                            top: .5,
                            left: 1
                        }
                    }, p.createElement(g.mb, {
                        asset: g.nb.DragHandle
                    })))), p.createElement(g.Va, {
                        className: "drag-and-drop-card-content" + (r ? " " + a.ContentCollapsed : ""),
                        "data-test-selector": o.Content,
                        position: g.db.Relative
                    }, r && this.props.unmountOnCollapse ? null : this.props.children)), p.createElement(f, {
                        cloneStyleRef: c && c.cardRef,
                        show: l === m.c.Bottom
                    }))
                }, Object.defineProperty(t.prototype, "isHoveringOtherCard", {
                    get: function() {
                        var e = this.props.targetCard;
                        return !(!e || e.cardRef !== this[i.Card] || !this.props.grabbedCard)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isHoveringSelf", {
                    get: function() {
                        var e = this.props.grabbedCard;
                        return !(!e || e.cardRef !== this[i.Card])
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(p.Component);
            i.Carat, i.Card, i.Container, i.Header;
            var C, _ = E,
                w = (C = Object(l.a)("DragAndDropCardContext", {
                    card: new m.a("unknown")
                })).InnerProvider,
                O = C.withContext;
            var k = Object(s.compose)(d(function(e) {
                    return e
                }), O(function(e) {
                    return e
                }))(_),
                x = n("i8i4"),
                I = n("8/mp"),
                T = n("b+ID"),
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setRootContainerRef = function(e) {
                            t.rootContainerRef = e
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.rootContainerRef.appendChild(this.props.element)
                    }, t.prototype.render = function() {
                        return p.createElement(g.Va, {
                            refDelegate: this.setRootContainerRef
                        })
                    }, t
                }(p.Component),
                P = (n("6Ll5"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleContainerMouseOver = function() {
                            var e = t.props.grabbedCard;
                            e && e.cardRef && !t.props.targetCard && t.props.updateCard(t.placeholderName, {
                                column: t.props.column,
                                placeholderPosition: m.c.Bottom,
                                row: t.props.row
                            }, m.b.SetTarget)
                        }, t.handleContainerMouseLeave = function() {
                            t.props.grabbedCard && t.props.targetCard && t.props.updateCard(t.placeholderName, {}, m.b.RemoveTarget)
                        }, t.setContainerRef = function(e) {
                            t.containerRef = e
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.containerRef.addEventListener("mouseover", this.handleContainerMouseOver), this.containerRef.addEventListener("mouseleave", this.handleContainerMouseLeave)
                    }, t.prototype.componentWillUnmount = function() {
                        this.containerRef.removeEventListener("mouseove", this.handleContainerMouseOver), this.containerRef.removeEventListener("mouseleave", this.handleContainerMouseLeave)
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.grabbedCard,
                            n = e.targetCard;
                        return p.createElement(g.xb, {
                            alignContent: g.e.Stretch,
                            alignItems: g.f.Stretch,
                            breakpointLarge: {
                                margin: {
                                    right: 2
                                },
                                padding: {
                                    y: 2
                                }
                            },
                            className: "drag-and-drop-layout-column",
                            display: g.W.Flex,
                            flexDirection: g.Y.Column,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: g.Ua.Start,
                            margin: {
                                right: 1
                            },
                            padding: {
                                y: 1
                            },
                            refDelegate: this.setContainerRef
                        }, this.props.children, p.createElement(f, {
                            cloneStyleRef: t && t.cardRef,
                            show: !(!n || n.name !== this.placeholderName)
                        }))
                    }, Object.defineProperty(t.prototype, "placeholderName", {
                        get: function() {
                            return this.props.column + "-" + this.props.row + "-placeholder"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(p.Component)),
                R = (n("uZYF"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.handleCardsUpdate = function() {
                            var e = n.props.onCardsUpdate;
                            e && e(n.state.roots.map(function(e) {
                                return e.map(function(e) {
                                    return n.state.cards[e.name]
                                })
                            }))
                        }, n.dropCard = function() {
                            n.setState(function(e) {
                                var t, n, r = e.common,
                                    a = r.grabbedCard,
                                    o = r.targetCard,
                                    i = e.cards,
                                    s = e.roots;
                                if (a && o && a.name !== o.name && (s.forEach(function(e, r) {
                                        e.forEach(function(e, i) {
                                            e.name === a.name ? t = {
                                                column: r,
                                                el: e.el,
                                                name: e.name,
                                                row: i
                                            } : e.name === o.name && (n = {
                                                column: r,
                                                el: e.el,
                                                name: e.name,
                                                row: i
                                            })
                                        })
                                    }), n || (n = {
                                        column: o.column || 0,
                                        el: o.el,
                                        name: o.name,
                                        row: o.row || 0
                                    }), t && n)) {
                                    var l = s[t.column],
                                        c = s[n.column],
                                        d = o.placeholderPosition === m.c.Bottom;
                                    c.splice(n.row + (d ? 1 : 0), 0, t), t.column === n.column ? c.splice(t.row + (t.row > n.row ? 1 : 0), 1) : l.splice(t.row, 1)
                                }
                                return {
                                    cards: i,
                                    common: u.__assign({}, e.common, {
                                        grabbedCard: void 0,
                                        targetCard: void 0
                                    }),
                                    roots: s
                                }
                            }, n.handleCardsUpdate)
                        }, n.updateCard = function(e, t, r) {
                            void 0 === t && (t = {}), n.setState(function(n) {
                                var a = u.__assign({}, n),
                                    o = a.cards,
                                    i = !!o[e],
                                    s = u.__assign({}, o[e] || new m.a(e), t);
                                switch (r) {
                                    case m.b.RemoveTarget:
                                        a.common = u.__assign({}, n.common, {
                                            targetCard: void 0
                                        });
                                        break;
                                    case m.b.SetGrabbed:
                                        s.isGrabbed = !0, a.common = u.__assign({}, a.common, {
                                            grabbedCard: s
                                        });
                                        break;
                                    case m.b.SetTarget:
                                        a.common = u.__assign({}, a.common, {
                                            targetCard: s
                                        })
                                }
                                return i && (a.cards[e] = s), a
                            })
                        };
                        var r = {},
                            a = t.initialCardsState.map(function(e) {
                                return e.map(function(e) {
                                    return e.el = document.createElement("div"), r[e.name] = e, {
                                        el: e.el,
                                        name: e.name
                                    }
                                })
                            });
                        return n.state = {
                            cards: r,
                            common: {
                                dropCard: n.dropCard,
                                onCardsUpdate: n.handleCardsUpdate,
                                updateCard: n.updateCard
                            },
                            roots: a
                        }, n
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.handleCardsUpdate()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props.isExpandedView;
                        return p.createElement(p.Fragment, null, p.createElement(I.b, {
                            className: "drag-and-drop-layout-scrollable-area" + (t ? "__expanded-view" : "")
                        }, p.createElement(g.Va, {
                            alignContent: g.e.Stretch,
                            alignItems: g.f.Stretch,
                            className: "drag-and-drop-layout",
                            display: g.W.Flex,
                            flexDirection: g.Y.Row,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: g.Ua.Between
                        }, this.state.roots.map(function(t, n) {
                            return p.createElement(P, {
                                column: n,
                                key: n,
                                grabbedCard: e.state.common.grabbedCard,
                                targetCard: e.state.common.targetCard,
                                row: t.length - 1,
                                updateCard: e.updateCard
                            }, t.map(function(e) {
                                var t = e.el,
                                    n = e.name;
                                return p.createElement(D, {
                                    element: t,
                                    key: n
                                })
                            }))
                        }))), p.createElement(c, {
                            value: this.state.common
                        }, Object.keys(this.state.cards).map(function(t) {
                            var n = e.state.cards[t];
                            return x.createPortal(p.createElement(w, {
                                value: {
                                    card: n
                                }
                            }, e.props.cards[n.name]), n.el)
                        })))
                    }, t
                }(p.Component));
            var j = Object(T.b)(function(e) {
                return {
                    isExpandedView: e.isExpandedView
                }
            })(R);
            n.d(t, "a", function() {
                return k
            }), n.d(t, "b", function() {
                return j
            })
        },
        qzvl: function(e, t, n) {
            "use strict";
            var r, a;
            n.d(t, "a", function() {
                    return r
                }), n.d(t, "c", function() {
                    return a
                }), n.d(t, "b", function() {
                    return o
                }),
                function(e) {
                    e.Open = "open", e.Review = "review", e.Disabled = "disabled"
                }(r || (r = {})),
                function(e) {
                    e[e.Off = 0] = "Off", e[e.TenMinutes = 600] = "TenMinutes", e[e.ThirtyMinutes = 1800] = "ThirtyMinutes", e[e.OneHour = 3600] = "OneHour", e[e.OneDay = 86400] = "OneDay", e[e.OneWeek = 604800] = "OneWeek", e[e.OneMonth = 2592e3] = "OneMonth", e[e.ThreeMonths = 7776e3] = "ThreeMonths"
                }(a || (a = {}));
            var o = {
                publishingMode: r.Open,
                followersOnlyDurationSeconds: a.OneDay
            }
        },
        r6fx: function(e, t, n) {},
        rCIv: function(e, t, n) {},
        sL9O: function(e, t, n) {},
        sZD3: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_ChannelVideo_MatureContent"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "currentUser"
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
                                        value: "broadcastSettings"
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
                                                value: "isMature"
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
                    end: 98
                }
            };
            n.loc.source = {
                body: "query Settings_ChannelVideo_MatureContent {\ncurrentUser {\nid\nbroadcastSettings {\nid\nisMature\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        tJV7: function(e, t) {},
        uZYF: function(e, t, n) {},
        vpah: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return s
            });
            var r, a, o = n("/7QA"),
                i = n("Ue10");

            function s(e) {
                switch (e) {
                    case a.Success:
                        return {
                            message: Object(o.d)("Success!", "Profile Edit"),
                            type: i.bb.Success
                        };
                    case a.UnexpectedError:
                        return {
                            message: Object(o.d)("Unexpected error, please try again.", "Profile Edit"),
                            type: i.bb.Alert
                        };
                    case a.BadSizeError:
                        return {
                            message: Object(o.d)("Image might exceed 10MB.", "Profile Edit"),
                            type: i.bb.Alert
                        };
                    case a.NonImageError:
                        return {
                            message: Object(o.d)("You must upload an image.", "Profile Edit"),
                            type: i.bb.Alert
                        };
                    case a.WrongFormatError:
                        return {
                            message: Object(o.d)("You must select a valid image type.", "Profile Edit"),
                            type: i.bb.Alert
                        };
                    case a.TimeoutError:
                        return {
                            message: Object(o.d)("Upload timed-out. Please try again.", "Profile Edit"),
                            type: i.bb.Alert
                        };
                    case a.Uploading:
                        return {
                            message: Object(o.d)("Uploading....", "Profile Edit"),
                            type: i.bb.Brand
                        };
                    case a.ImageNotSelected:
                        return {
                            message: Object(o.d)("Select a image first.", "Profile Edit"),
                            type: i.bb.Alert
                        };
                    default:
                        return {
                            message: Object(o.d)("Please try again.", "Profile Edit"),
                            type: i.bb.Alert
                        }
                }
            }! function(e) {
                e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
            }(r || (r = {})),
            function(e) {
                e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
            }(a || (a = {}))
        },
        wo8Z: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("/7QA"),
                a = function() {
                    return r.l.get("ritualsFeatureFlagOverride", r.b.get("viewer_milestones_enabled", !1))
                }
        },
        xTFG: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return l
            });
            var r, a = n("1rIY"),
                o = (r = Object(a.a)("CardsTrackingContext", {
                    registerReportCardVisibility: function() {
                        return function() {
                            return null
                        }
                    }
                })).InnerProvider,
                i = r.withContext,
                s = function(e, t) {
                    return function(n) {
                        return {
                            reportCardVisibility: (0, n.registerReportCardVisibility)(e, t)
                        }
                    }
                };

            function l(e, t) {
                return function(n) {
                    return i(s(e, t))(n)
                }
            }
        }
    }
]);