(window.webpackJsonp = window.webpackJsonp || []).push([
    [166, 144], {
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
            var i = n("TFjr");
            n.d(t, "AutohostStrategy", function() {
                return i.a
            }), n.d(t, "DEFAULT_AUTOHOST_SETTINGS", function() {
                return i.b
            }), n.d(t, "RaidPreference", function() {
                return i.c
            });
            var o = n("qzvl");
            n.d(t, "ChommentsPublishingMode", function() {
                return o.a
            }), n.d(t, "DEFAULT_VIDEO_MODERATION_SETTINGS", function() {
                return o.b
            }), n.d(t, "FollowersDurationSeconds", function() {
                return o.c
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
                return o
            });
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("Ue10"),
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(i.Z, {
                            dragOver: this.state.isDraggingOver,
                            error: this.props.error
                        }, a.createElement(i.Pa, {
                            position: i.jb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: i.ic.Above
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
        "0HR6": function(e, t, n) {},
        "3hKJ": function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n("Ue10"),
                i = function(e) {
                    return r.createElement(a.Eb, {
                        className: "settings-page-header",
                        borderTop: !0,
                        borderRight: !0,
                        borderLeft: !0,
                        borderRadius: {
                            topLeft: a.x.Medium,
                            topRight: a.x.Medium
                        },
                        background: a.r.Base
                    }, r.createElement(a.Ua, {
                        linkTo: e.linkToParent,
                        onClick: e.onClick,
                        type: a.Va.Alpha
                    }, r.createElement(a.Xa, {
                        display: a.X.Flex,
                        flexWrap: a.Ba.NoWrap
                    }, r.createElement(a.Xa, {
                        display: a.X.Flex,
                        padding: {
                            x: 1
                        }
                    }, r.createElement(a.sb, {
                        asset: a.tb.AngleLeft,
                        height: 20,
                        width: 20
                    })), r.createElement(a.Xa, {
                        flexGrow: 1,
                        margin: 2
                    }, r.createElement(a.W, {
                        bold: !0,
                        fontSize: a.Ca.Size4
                    }, e.title), r.createElement(a.W, {
                        color: a.O.Alt2
                    }, e.description)))))
                };
            n.d(t, "a", function() {
                return i
            })
        },
        "4bS+": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DashboardSettingsIndexPage"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 94
                }
            };
            n.loc.source = {
                body: "query DashboardSettingsIndexPage($channelLogin: String!) {\nuser(login: $channelLogin) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "4mBO": function(e, t, n) {
            "use strict";
            var r, a = n("mrSG"),
                i = n("q1tI"),
                o = n("1rIY"),
                s = (r = Object(o.a)("LiveDashboardDeferredLoading", {
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
                            return void 0 !== t.loadFirst[e] || t.canRenderAnyComponent ? i.createElement(n, a.__assign({}, t)) : null
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
                    return i.createElement(s, {
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
            }(i.Component);
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
                i = n("Ue10"),
                o = (n("KwO+"), function(e) {
                    var t = null;
                    e.footer && (t = a.createElement(i.Eb, {
                        padding: 2,
                        background: i.r.Alt2
                    }, e.footer));
                    var n = {};
                    e.header || (n = {
                        topRight: i.x.Medium,
                        topLeft: i.x.Medium
                    });
                    var o = r.__assign({
                        bottomLeft: i.x.Medium,
                        bottomRight: i.x.Medium
                    }, n);
                    return a.createElement(a.Fragment, null, e.header, a.createElement(i.Eb, {
                        background: i.r.Base,
                        margin: {
                            bottom: 4
                        },
                        border: !0,
                        borderRadius: o
                    }, e.children, t))
                });
            n.d(t, "a", function() {
                return o
            })
        },
        "7WKn": function(e, t, n) {},
        "7lJP": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("/MKj"),
                a = n("fvjX"),
                i = n("aCAx"),
                o = n("kRBY"),
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
                        }, t.currentImage = null, t.logger = d.k.withCategory("UserImageUploader"), t.onImageInputChange = function(e) {
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
                                        var t, n, a, i, o = this;
                                        return s.__generator(this, function(s) {
                                            switch (s.label) {
                                                case 0:
                                                    this.currentImage = e, s.label = 1;
                                                case 1:
                                                    return s.trys.push([1, 3, , 4]), [4, Object(b.a)(this.props.userID, this.props.authToken, this.props.imageType, r)];
                                                case 2:
                                                    return t = s.sent(), n = t.upload_url, a = t.upload_id, [3, 4];
                                                case 3:
                                                    return i = s.sent(), this.logger.error(i, "Request for upload ID failed to get expected response from server."), this.setState({
                                                        loading: !1,
                                                        statusMessage: v.b.UnexpectedError
                                                    }), [2];
                                                case 4:
                                                    return this.unsubscribe = d.l.subscribe({
                                                        topic: Object(m.n)(this.props.userID),
                                                        success: function() {
                                                            try {
                                                                Object(b.c)(n, o.currentImage)
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
                                                            if (e.upload_id === a) {
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
                        var t = Object(d.d)("Editing profile banner for {userName}", {
                            userName: e
                        }, "UserImageUploader");
                        this.props.imageType === g.a.ChannelOfflineImage && (t = Object(d.d)("Editing video banner for {userName}", {
                            userName: e
                        }, "UserImageUploader"));
                        var n = null;
                        if (this.state.loading) n = l.createElement(S.Xa, {
                            className: "user-image-uploader__upload-svg--anim-fill",
                            position: S.jb.Relative,
                            "data-test-selector": "loading-status"
                        }, l.createElement(S.sb, {
                            asset: S.tb.Upload,
                            type: S.ub.Brand,
                            width: 99,
                            height: 76
                        }));
                        else {
                            var r = Object(d.d)("Recommended image size: 1200x380 and less than 10MB.", "UserImageUploader");
                            this.props.imageType === g.a.ChannelOfflineImage && (r = Object(d.d)("Recommended image size: 1920x1080 and less than 10MB.", "UserImageUploader")), n = l.createElement(S.Xa, null, l.createElement(S.Xa, {
                                className: "user-image-uploader__upload-info"
                            }, l.createElement(S.Xa, null, l.createElement(S.sb, {
                                asset: S.tb.Plus,
                                type: S.ub.Alt2,
                                height: 20,
                                width: 20
                            })), l.createElement(S.W, {
                                type: S.Vb.H3,
                                color: S.O.Alt2,
                                fontSize: S.Ca.Size4
                            }, Object(d.d)("Upload a Photo", "User Image Uploader"))), l.createElement(S.Xa, {
                                className: "user-image-uploader__upload-recommendation",
                                position: S.jb.Absolute,
                                textAlign: S.Rb.Left,
                                attachLeft: !0,
                                attachBottom: !0,
                                margin: {
                                    left: 3,
                                    bottom: 1
                                }
                            }, l.createElement(S.W, {
                                type: S.Vb.H6,
                                color: S.O.Alt2,
                                fontSize: S.Ca.Size8,
                                align: S.fc.TextBottom
                            }, r)))
                        }
                        var a = null;
                        this.props.showCloser && (a = l.createElement(p.a, null));
                        var i = null;
                        if (null !== this.state.statusMessage) {
                            var o = Object(v.c)(this.state.statusMessage);
                            i = l.createElement(S.gb, {
                                label: o.message,
                                type: o.type
                            })
                        }
                        return l.createElement(S.Xa, {
                            className: "user-image-uploader",
                            position: S.jb.Relative,
                            fullHeight: !0
                        }, l.createElement(S.Eb, {
                            className: "user-image-uploader__background-container",
                            background: S.r.Base,
                            fullWidth: !0
                        }, l.createElement(S.Xa, {
                            padding: 2,
                            display: S.X.InlineBlock,
                            position: S.jb.Relative,
                            textAlign: S.Rb.Center,
                            fullWidth: !0
                        }, l.createElement(S.Eb, {
                            borderBottom: !0,
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(S.W, {
                            type: S.Vb.H3,
                            fontSize: S.Ca.Size4
                        }, t)), l.createElement(S.Xa, {
                            className: "user-image-uploader__upload-container",
                            display: S.X.InlineBlock,
                            position: S.jb.Relative,
                            textAlign: S.Rb.Center,
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement(S.Xa, {
                            className: "user-image-uploader__upload",
                            display: S.X.InlineBlock,
                            position: S.jb.Relative,
                            textAlign: S.Rb.Center
                        }, l.createElement(u.a, {
                            allowedFileTypes: C,
                            onFilesSubmitted: this.onImageInputChange
                        }, n))), l.createElement(S.Eb, {
                            "data-test-selector": "status-message",
                            fontSize: S.Ca.Size4,
                            position: S.jb.Relative,
                            textAlign: S.Rb.Center,
                            className: "user-image-uploader__status-message"
                        }, i))), a)
                    }, t
                }(l.Component),
                w = Object(c.compose)(Object(y.b)("User Image Upload"), Object(h.a)(E, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                }))(_);
            var k = Object(r.connect)(function(e) {
                return {
                    authToken: Object(o.a)(e)
                }
            }, function(e, t) {
                return Object(a.bindActionCreators)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(i.c)()
                    }
                }, e)
            })(w);
            n.d(t, "UserImageUploader", function() {
                return k
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
                a = o(n("J2m7")),
                i = o(n("xweI"));

            function o(e) {
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
                        return (0, i.default)(this.refs[e], function(e) {
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
                i = n("/MKj"),
                o = n("fvjX"),
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
            var c = Object(i.connect)(null, function(e) {
                return Object(o.bindActionCreators)({
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
                            return o.default.createElement(e, r({
                                ref: t
                            }, this.props))
                        }
                    }]), n
                }(i.Component), t.displayName = (0, c.provideDisplayName)("sortableHandle", e), n
            };
            var i = n("q1tI"),
                o = d(i),
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
                return i
            });
            var r = n("mrSG"),
                a = n("b6Yk"),
                i = function(e) {
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
            var r, a, i, o, s, l, c = n("mrSG"),
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
            }(i || (i = {})),
            function(e) {
                e.Hover = "hover"
            }(o || (o = {})),
            function(e) {
                e.StorePastBroadcasts = "store_past_broadcasts"
            }(s || (s = {})),
            function(e) {
                e.ExpandedView = "expanded_view", e.RunAd = "run_ad", e.StreamDelay = "stream_delay", e.StreamInformation = "stream_info_update", e.StreamMarker = "stream_marker", e.BountyBoard = "bounty_board", e.StartBounty = "start_bounty", e.CancelBounty = "cancel_bounty", e.StopBounty = "stop_bounty", e.CheckBounties = "check_bounties"
            }(l || (l = {}));
            var h = function(e) {
                    var t = e.streamTime;
                    d.p.tracking.track(u.SpadeEventType.StreamSummaryBannerClick, {
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
                    d.p.tracking.track(u.SpadeEventType.LiveDashboardStreamStats, {
                        action: o.Hover,
                        target_name: e,
                        stats_configuration: JSON.stringify(d.m.get("streamStatsConfiguration", p.a))
                    })
                },
                f = function(e) {
                    d.p.tracking.track(u.SpadeEventType.LiveDashboardStreamHealthEvent, {
                        action: i.Click,
                        target_name: e
                    })
                },
                b = function(e, t, n) {
                    d.p.tracking.track(u.SpadeEventType.AutoHostChannelUpdate, {
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
                    d.p.tracking.track(u.SpadeEventType.BroadcastPageClick, {
                        time: Date.now(),
                        broadcast_software: e
                    })
                },
                S = function(e) {
                    d.p.tracking.track(u.SpadeEventType.DashboardSettingsInteraction, {
                        setting_name: e.settingName,
                        setting_value: e.settingValue,
                        content: e.content,
                        medium: e.medium,
                        channel_id: e.channelID
                    })
                },
                E = function(e, t) {
                    d.p.tracking.track(u.SpadeEventType.LiveDashboardInteraction, c.__assign({
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
            var r, a, i = n("mrSG"),
                o = n("q1tI"),
                s = n("x7UT"),
                l = n("0Log"),
                c = n("/aPz"),
                d = n("1rIY"),
                u = n("kxrW"),
                p = n("b6Yk"),
                h = function(e) {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        var t;
                        return i.__generator(this, function(n) {
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
                            return i.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return i.__generator(this, function(t) {
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
                            return i.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return i.__generator(this, function(t) {
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
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.onPubsubUpdate(), this.setInitialLiveState(), this.pollLegacyAPI()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onPubsubUpdate()
                    }, t.prototype.componentWillUnmount = function() {
                        this.legacyAPIIntervalID && clearInterval(this.legacyAPIIntervalID)
                    }, t.prototype.render = function() {
                        return o.createElement(m, {
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
                }(o.Component),
                S = Object(s.a)([{
                    topic: function(e) {
                        return Object(c.I)(e.channelID)
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
        L7tE: function(e, t, n) {},
        LZzM: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("fvjX"),
                o = n("/7QA"),
                s = n("cZKs"),
                l = n("Ue10"),
                c = (n("oz3/"), {
                    "data-test-selector": "i-understand-button"
                }),
                d = {
                    "data-test-selector": "close-button"
                },
                u = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(l.Eb, {
                            className: "stream-key-confirm-modal",
                            borderBottom: !0,
                            background: l.r.Base,
                            elevation: 3,
                            padding: {
                                x: 2,
                                top: 3,
                                bottom: 2
                            }
                        }, a.createElement(l.Eb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 2
                            }
                        }, a.createElement(l.W, {
                            type: l.Vb.H4,
                            color: l.O.Alt
                        }, Object(o.d)("Stream Key", "StreamKeySettingsForm"))), a.createElement(l.Xa, {
                            padding: {
                                y: 2
                            }
                        }, a.createElement(l.W, {
                            color: l.O.Error,
                            bold: !0
                        }, Object(o.d)("Never share your stream key with anyone or show it on stream! Twitch Staff, Admins, or Global Moderators will never ask you for this information.", "StreamKeySettingsForm"))), a.createElement(l.Eb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 2
                            }
                        }, Object(o.d)('Please click "I Understand" if you understand the above and would like to view your stream key.', "StreamKeySettingsForm")), a.createElement(l.Xa, {
                            display: l.X.Flex,
                            justifyContent: l.Wa.Center,
                            padding: {
                                top: 2
                            }
                        }, a.createElement(l.z, r.__assign({}, c, {
                            onClick: Object(i.compose)(this.props.showStreamKey, this.props.onClose)
                        }), Object(o.d)("I Understand", "StreamKeySettingsForm"))), a.createElement(s.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(a.Component);
            n.d(t, !1, function() {
                return c
            }), n.d(t, !1, function() {
                return d
            }), n.d(t, "a", function() {
                return u
            })
        },
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
                i = n("u5aL"),
                o = n("/7QA"),
                s = n("Ue10"),
                l = function() {
                    return a.createElement(s.Xa, {
                        display: s.X.Flex,
                        flexDirection: s.Aa.Column,
                        justifyContent: s.Wa.Center,
                        alignItems: s.f.Center,
                        flexGrow: 1,
                        fullHeight: !0,
                        padding: {
                            y: 1
                        },
                        zIndex: s.ic.Above
                    }, a.createElement(s.Eb, {
                        color: s.O.Alt2,
                        textAlign: s.Rb.Center,
                        flexShrink: 1
                    }, a.createElement(s.sb, {
                        asset: s.tb.DeadGlitch,
                        width: 46,
                        height: 48
                    })), a.createElement(s.Pa, {
                        margin: {
                            top: 1
                        },
                        textAlign: s.Rb.Center
                    }, a.createElement(s.W, {
                        type: s.Vb.H4,
                        "data-test-selector": "search-error-message"
                    }, Object(o.d)("Search is not available at this time", "DropdownSearchError"))), a.createElement(s.W, {
                        type: s.Vb.P
                    }, Object(o.d)("Please try again later", "DropdownSearchError")))
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
                            n = a.createElement(s.vb, {
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
                        return this.props.inline ? a.createElement(i.a, {
                            onClickOut: this.onClickOut
                        }, a.createElement(s.Eb, {
                            background: this.state.isInputFocused || this.state.isOpen ? s.r.Base : void 0,
                            borderRadius: s.x.Large,
                            padding: .5,
                            position: s.jb.Relative,
                            elevation: this.state.isInputFocused || this.state.isOpen ? 3 : void 0
                        }, n, e && a.createElement(s.Eb, {
                            attachLeft: !0,
                            background: s.r.Base,
                            borderRadius: s.x.Large,
                            display: this.state.isOpen ? s.X.Block : s.X.Hide,
                            fullWidth: !0,
                            padding: {
                                y: 1
                            },
                            position: s.jb.Absolute,
                            zIndex: s.ic.Above,
                            elevation: 3
                        }, a.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))) : a.createElement(i.a, {
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
                            var i = n.item(t);
                            i.focus(), i.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                                currentFocus: i
                            }), this.props.onFocusChange && this.props.onFocusChange(i)
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
                    e.ActivityFeed = "activity-feed", e.AdsWidget = "ads-widget", e.BountyBoardWidget = "bounty-board-widget", e.ExtensionLiveConfigure = "extension-live-configure", e.HostWidget = "host-widget", e.LiveChat = "live-chat", e.SquadStream = "squad-stream", e.Stats = "stats", e.StreamDelay = "stream-delay", e.StreamHealth = "stream-health", e.StreamInformation = "stream-information", e.StreamMarker = "stream-marker", e.VideoPreview = "video-preview", e.VideoProducerWidget = "video-producer-widget"
                }(r || (r = {})),
                function(e) {
                    e.ActivityFeedWidget = "activity_feed_widget", e.AdsWidget = "ads_widget", e.BountyBoardWidget = "bounty_board_widget", e.ExtensionLiveConfigureWidget = "extension_config_widget", e.HostWidget = "host_widget", e.LiveChatWidget = "chat_widget", e.SquadStreamWidget = "squad_stream_widget", e.StatsWidget = "stats_widget", e.StreamDelayWidget = "stream_delay_widget", e.StreamHealthWidget = "stream_health_widget", e.StreamInformationWidget = "stream_information_widget", e.StreamMarkerWidget = "stream_marker_widget", e.VideoPreviewWidget = "video_preview_widget", e.VideoProducerWidget = "video_producer_widget"
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
                i = s(n("hk6T")),
                o = s(n("BCEg"));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.SortableContainer = a.default, t.SortableElement = i.default, t.SortableHandle = o.default, t.sortableContainer = a.default, t.sortableElement = i.default, t.sortableHandle = o.default
        },
        OZZe: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "EditableChannelsPage"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 94
                }
            };
            n.loc.source = {
                body: "query EditableChannelsPage($channelLogin: String!) {\nuser(login: $channelLogin) {\nid\nlogin\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
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
                    return i
                }),
                function(e) {
                    e.Random = "random", e.Ordered = "ordered"
                }(r || (r = {})),
                function(e) {
                    e.All = "all", e.Network = "network", e.None = "none"
                }(a || (a = {}));
            var i = {
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

            function i(e) {
                var t = null;
                return e.description && (t = r.createElement(a.Xa, {
                    margin: {
                        top: 1
                    }
                }, r.createElement(a.W, {
                    color: a.O.Alt2
                }, e.description))), r.createElement(a.Xa, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(a.W, {
                    type: a.Vb.H3,
                    fontSize: a.Ca.Size4,
                    color: a.O.Alt,
                    bold: !0
                }, e.title), t)
            }
            n.d(t, "a", function() {
                return i
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
                                i = void 0;
                            try {
                                for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                            } catch (e) {
                                a = !0, i = e
                            } finally {
                                try {
                                    !r && s.return && s.return()
                                } finally {
                                    if (a) throw i
                                }
                            }
                            return n
                        }(e, t);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                i = function() {
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
                            var i = (0, p.closest)(e.target, function(e) {
                                return null != e.sortableInfo
                            });
                            if (i && i.sortableInfo && t.nodeIsChild(i) && !t.state.sorting) {
                                var o = t.props.useDragHandle,
                                    s = i.sortableInfo,
                                    l = s.index,
                                    c = s.collection;
                                if (o && !(0, p.closest)(e.target, function(e) {
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
                                var i = Math.abs(t._delta.x) + Math.abs(t._delta.y);
                                r || a && !(a && i >= a) ? r && i >= r && t.manager.isActive() && t.handlePress(e) : (clearTimeout(t.cancelTimer), t.cancelTimer = setTimeout(t.cancel, 0))
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
                                    i = r.getHelperDimensions,
                                    o = r.helperClass,
                                    s = r.hideSortableGhost,
                                    l = r.onSortStart,
                                    c = r.useWindowAsScrollContainer,
                                    d = n.node,
                                    u = n.collection,
                                    h = d.sortableInfo.index,
                                    g = (0, p.getElementMargin)(d),
                                    f = t.container.getBoundingClientRect(),
                                    b = i({
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
                                    }), t.helper = t.document.body.appendChild(S), t.helper.style.position = "fixed", t.helper.style.top = t.boundingClientRect.top - g.top + "px", t.helper.style.left = t.boundingClientRect.left - g.left + "px", t.helper.style.width = t.width + "px", t.helper.style.height = t.height + "px", t.helper.style.boxSizing = "border-box", t.helper.style.pointerEvents = "none", s && (t.sortableGhost = d, d.style.visibility = "hidden", d.style.opacity = 0), t.minTranslate = {}, t.maxTranslate = {}, t.axis.x && (t.minTranslate.x = (c ? 0 : f.left) - t.boundingClientRect.left - t.width / 2, t.maxTranslate.x = (c ? t.contentWindow.innerWidth : f.left + f.width) - t.boundingClientRect.left - t.width / 2), t.axis.y && (t.minTranslate.y = (c ? 0 : f.top) - t.boundingClientRect.top - t.height / 2, t.maxTranslate.y = (c ? t.contentWindow.innerHeight : f.top + f.height) - t.boundingClientRect.top - t.height / 2), o)(v = t.helper.classList).add.apply(v, m(o.split(" ")));
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
                                i = t.manager.active.collection;
                            t.listenerNode && (p.events.move.forEach(function(e) {
                                return t.listenerNode.removeEventListener(e, t.handleSortMove)
                            }), p.events.end.forEach(function(e) {
                                return t.listenerNode.removeEventListener(e, t.handleSortEnd)
                            })), t.helper.parentNode.removeChild(t.helper), r && t.sortableGhost && (t.sortableGhost.style.visibility = "", t.sortableGhost.style.opacity = "");
                            for (var o = t.manager.refs[i], s = 0, l = o.length; s < l; s++) {
                                var c = o[s],
                                    d = c.node;
                                c.edgeOffset = null, d.style[p.vendorPrefix + "Transform"] = "", d.style[p.vendorPrefix + "TransitionDuration"] = ""
                            }
                            clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.manager.active = null, t.setState({
                                sorting: !1,
                                sortingIndex: null
                            }), "function" == typeof a && a({
                                oldIndex: t.index,
                                newIndex: t.newIndex,
                                collection: i
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
                    }(n, t), i(n, [{
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
                            var i = function(t) {
                                e.events.hasOwnProperty(t) && p.events[t].forEach(function(n) {
                                    return e.container.addEventListener(n, e.events[t], !1)
                                })
                            };
                            for (var o in this.events) i(o)
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
                                i = n[1];
                            return [this.getLockPixelOffset(r), this.getLockPixelOffset(i)]
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
                                i = this.getOffset(e),
                                o = {
                                    x: i.x - this.initialOffset.x,
                                    y: i.y - this.initialOffset.y
                                };
                            if (o.y -= window.pageYOffset - this.initialWindowScroll.top, o.x -= window.pageXOffset - this.initialWindowScroll.left, this.translate = o, r) {
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
                                o.x = (0, p.limit)(this.minTranslate.x + u.x, this.maxTranslate.x - h.x, o.x), o.y = (0, p.limit)(this.minTranslate.y + u.y, this.maxTranslate.y - h.y, o.y)
                            }
                            "x" === n ? o.y = 0 : "y" === n && (o.x = 0), this.helper.style[p.vendorPrefix + "Transform"] = "translate3d(" + o.x + "px," + o.y + "px, 0)"
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
                                i = {
                                    left: this.offsetEdge.left + this.translate.x + a.left,
                                    top: this.offsetEdge.top + this.translate.y + a.top
                                },
                                o = {
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
                                b && !b.edgeOffset && (b.edgeOffset = this.getEdgeOffset(b.node)), d !== this.index ? (t && (c.style[p.vendorPrefix + "TransitionDuration"] = t + "ms"), this.axis.x ? this.axis.y ? d < this.index && (i.left + o.left - m.width <= f.left && i.top + o.top <= f.top + m.height || i.top + o.top + m.height <= f.top) ? (g.x = this.width + this.marginOffset.x, f.left + g.x > this.containerBoundingRect.width - m.width && (g.x = b.edgeOffset.left - f.left, g.y = b.edgeOffset.top - f.top), null === this.newIndex && (this.newIndex = d)) : d > this.index && (i.left + o.left + m.width >= f.left && i.top + o.top + m.height >= f.top || i.top + o.top + m.height >= f.top + h) && (g.x = -(this.width + this.marginOffset.x), f.left + g.x < this.containerBoundingRect.left + m.width && (g.x = v.edgeOffset.left - f.left, g.y = v.edgeOffset.top - f.top), this.newIndex = d) : d > this.index && i.left + o.left + m.width >= f.left ? (g.x = -(this.width + this.marginOffset.x), this.newIndex = d) : d < this.index && i.left + o.left <= f.left + m.width && (g.x = this.width + this.marginOffset.x, null == this.newIndex && (this.newIndex = d)) : this.axis.y && (d > this.index && i.top + o.top + m.height >= f.top ? (g.y = -(this.height + this.marginOffset.y), this.newIndex = d) : d < this.index && i.top + o.top <= f.top + m.height && (g.y = this.height + this.marginOffset.y, null == this.newIndex && (this.newIndex = d))), c.style[p.vendorPrefix + "Transform"] = "translate3d(" + g.x + "px," + g.y + "px,0)") : n && (this.sortableGhost = c, c.style.visibility = "hidden", c.style.opacity = 0)
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
                }(o.Component), t.displayName = (0, p.provideDisplayName)("sortableList", e), t.defaultProps = {
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
            var o = n("q1tI"),
                s = h(o),
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
                            return o.default.createElement(e, r({
                                ref: t
                            }, (0, d.omit)(this.props, "collection", "disabled", "index")))
                        }
                    }]), n
                }(i.Component), t.displayName = (0, d.provideDisplayName)("sortableElement", e), t.contextTypes = {
                    manager: s.default.object.isRequired
                }, t.propTypes = {
                    index: s.default.number.isRequired,
                    collection: s.default.oneOfType([s.default.number, s.default.string]),
                    disabled: s.default.bool
                }, t.defaultProps = {
                    collection: 0
                }, n
            };
            var i = n("q1tI"),
                o = u(i),
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
        jreu: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("mrSG"),
                a = n("b6Yk"),
                i = function(e) {
                    var t = e.channelID,
                        n = e.editorID;
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, a.a.deleteOrThrow("/v5/permissions/channels/" + t + "/editors/" + n)];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                    })
                }
        },
        kMGJ: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("yLwq");

            function o(e, t) {
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
                        default_profile_image: i.b[n].id
                    })
                })
            }

            function l(e, t, n, i) {
                return r.__awaiter(this, void 0, void 0, function() {
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, fetch(a.a.apiBaseURL + "/kraken/users/" + e + "/upload_image?client_id=" + a.a.authSettings.clientID + "&api_version=" + a.a.defaultAPIVersion + "&image_type=" + n + "&format=" + i, {
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
        kMWa: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "AuthorizedStreamersPage"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 97
                }
            };
            n.loc.source = {
                body: "query AuthorizedStreamersPage($channelLogin: String!) {\nuser(login: $channelLogin) {\nid\nlogin\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        lDS7: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("oJmH"),
                o = n("/7QA"),
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
                            var e = o.m.get("streamStatsConfiguration", C);
                            e[t.props.statType] = !e[t.props.statType], o.m.set("streamStatsConfiguration", e)
                        }, t.renderStat = function() {
                            var e = Object(o.d)("Offline", "LiveDashboard");
                            return t.state.hidden ? a.createElement(u.Yb, {
                                label: t.props.statDescription || e,
                                direction: u.ac.Right
                            }, Object(o.d)("Hover to view", "LiveDashboard")) : a.createElement(u.Yb, {
                                label: Object(o.d)("Click to hide", "LiveDashboard"),
                                direction: u.ac.Right
                            }, t.props.statDescription || e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.color;
                        return a.createElement(u.Eb, {
                            margin: {
                                left: 1
                            },
                            fontSize: u.Ca.Size5,
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
                                t = e && null !== e.viewersCount ? Object(o.f)(e.viewersCount) : 0,
                                r = n.state.statsConfig && n.state.statsConfig[E.CURRENT_VIEWERS],
                                i = n.props.isLive;
                            return a.createElement(p, {
                                "data-test-selector": S.CURRENT_VIEWERS_COUNT,
                                statDescription: i ? t + " " + Object(o.d)("Viewers", "LiveDashboard") : null,
                                statType: E.CURRENT_VIEWERS,
                                showStat: r,
                                color: i ? u.O.Live : void 0
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
                                statDescription: t ? Object(o.f)(e) + " " + (1 === e ? Object(o.d)("Clip", "LiveDashboard") : Object(o.d)("Clips", "LiveDashboard")) : null,
                                statType: E.NUMBER_OF_CLIPS,
                                showStat: n.state.statsConfig && n.state.statsConfig[E.NUMBER_OF_CLIPS],
                                color: t ? u.O.Base : void 0
                            })
                        }, n.renderSubscriptionStat = function() {
                            var e = Object(o.d)("Subscribers", "LiveDashboard"),
                                t = Object(o.d)("Sub Points", "LiveDashboard"),
                                r = n.props.data && n.props.data.user && null !== n.props.data.user.subscriberScore ? n.props.data.user.subscriberScore : null,
                                i = r && r.countBreakdown;
                            if (!r || !i) return null;
                            var s = Object(o.f)(i.reduce(function(e, t) {
                                    return e + t.count
                                }, 0)),
                                l = Object(o.f)(r.current);
                            return r.next ? a.createElement(u.Eb, {
                                color: u.O.Alt2,
                                display: u.X.Flex,
                                alignItems: u.f.Center,
                                margin: {
                                    bottom: .5
                                }
                            }, a.createElement(u.Yb, {
                                label: Object(o.d)("Subscribers shows number of active subs.\n Sub points unlock additional emote slots.", "LiveDashboard"),
                                direction: u.ac.Right
                            }, a.createElement(u.sb, {
                                asset: u.tb.Star
                            })), a.createElement(p, {
                                statDescription: s + " " + e + " (" + l + " / " + Object(o.f)(r.next) + " " + t + ")",
                                statType: E.SUBSCRIPTIONS,
                                showStat: n.state.statsConfig && n.state.statsConfig[E.SUBSCRIPTIONS],
                                color: u.O.Base
                            })) : a.createElement(u.Eb, {
                                color: u.O.Alt2,
                                display: u.X.Flex,
                                alignItems: u.f.Center,
                                margin: {
                                    bottom: .5
                                }
                            }, a.createElement(u.Yb, {
                                label: Object(o.d)("Congrats on reaching the max number of emote slots", "LiveDashboard"),
                                direction: u.ac.Right
                            }, a.createElement(u.sb, {
                                asset: u.tb.Star
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
                                var e, t, n, a, i;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e = this.getStreamInfo(), (t = e && e.id) ? [4, Object(v.c)({
                                                path: "/v4/broadcasts/" + t + "/clips/count"
                                            })] : (this.props.latencyTracking.reportInteractive(), this.props.reportLoaded(), [2]);
                                        case 1:
                                            return (n = r.sent()).body && !n.error ? (a = n.body.count, this.setState({
                                                broadcastClipsCount: a
                                            })) : (i = "Unable to fetch broadcast clips count", o.k.error(new Error(i), i)), this.props.latencyTracking.reportInteractive(), this.props.reportLoaded(), [2]
                                    }
                                })
                            })
                        };
                        var i = o.m.get("streamStatsConfiguration", null);
                        return n.state = {
                            statsConfig: i || C,
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
                            n = Object(o.f)(e && e.profileViewCount || 0),
                            r = e && t && null !== t.totalCount ? Object(o.f)(t.totalCount) : 0;
                        return a.createElement(g.a, {
                            title: Object(o.d)("Stats", "LiveDashboard")
                        }, a.createElement(u.Xa, {
                            padding: 2
                        }, a.createElement(u.Eb, {
                            color: u.O.Alt2,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(u.Yb, {
                            label: Object(o.d)("The number of people currently watching your channel", "LiveDashboard"),
                            direction: u.ac.Right
                        }, a.createElement(u.sb, {
                            asset: u.tb.GlyphLive
                        })), this.renderViewersCount()), a.createElement(u.Eb, {
                            color: u.O.Alt2,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(u.Yb, {
                            label: Object(o.d)("How long you have been broadcasting for this session", "LiveDashboard"),
                            direction: u.ac.Right
                        }, a.createElement(u.sb, {
                            asset: u.tb.Timeout
                        })), this.renderStreamTime()), a.createElement(u.Eb, {
                            color: u.O.Alt2,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(u.Yb, {
                            label: Object(o.d)("The number of clips that have been created", "LiveDashboard"),
                            direction: u.ac.Right
                        }, a.createElement(u.Eb, {
                            className: "stats-widget-clips-icon",
                            display: u.X.InlineFlex
                        }, a.createElement(u.sb, {
                            asset: u.tb.Clip,
                            height: 20,
                            width: 20
                        }))), this.renderNumberOfClips()), a.createElement(u.Eb, {
                            color: u.O.Alt2,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(u.Yb, {
                            label: Object(o.d)("The number of people who have viewed the channel", "LiveDashboard"),
                            direction: u.ac.Right
                        }, a.createElement(u.sb, {
                            asset: u.tb.GlyphViews
                        })), a.createElement(p, {
                            statDescription: n + " " + Object(o.d)("Views", "LiveDashboard"),
                            statType: E.TOTAL_VIEWS,
                            showStat: !this.state.statsConfig || this.state.statsConfig[E.TOTAL_VIEWS],
                            color: u.O.Base
                        })), a.createElement(u.Eb, {
                            color: u.O.Alt2,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(u.Yb, {
                            label: Object(o.d)("The number of people currently following your channel", "LiveDashboard"),
                            direction: u.ac.Right
                        }, a.createElement(u.sb, {
                            asset: u.tb.Heart
                        })), a.createElement(p, {
                            statDescription: r + " " + Object(o.d)("Followers", "LiveDashboard"),
                            statType: E.FOLLOWERS,
                            showStat: !this.state.statsConfig || this.state.statsConfig[E.FOLLOWERS],
                            color: u.O.Base
                        })), this.renderSubscriptionStat()))
                    }, t
                }(a.Component),
                w = Object(i.compose)(Object(f.b)(m.a.Stats), b.b, Object(h.b)(m.a.Stats, {
                    autoReportCardVisibility: !0
                }), Object(s.a)(y, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            pollInterval: 3e4,
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    }
                }), Object(c.b)("Stats"))(_)
        },
        mAXC: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n("Ue10"),
                i = function(e) {
                    return r.createElement(a.Xa, {
                        className: "settings-row"
                    }, r.createElement(a.Ua, {
                        linkTo: e.linkTo,
                        type: a.Va.Alpha
                    }, r.createElement(a.Eb, {
                        padding: 2,
                        alignItems: a.f.Center,
                        display: a.X.Flex,
                        flexWrap: a.Ba.NoWrap
                    }, r.createElement(a.Xa, {
                        flexGrow: 1
                    }, r.createElement(a.W, {
                        fontSize: a.Ca.Size6,
                        bold: !0
                    }, e.text), r.createElement(a.W, {
                        type: a.Vb.Span
                    }, e.description)), r.createElement(a.Xa, null, r.createElement(a.sb, {
                        asset: a.tb.AngleRight
                    })))))
                };
            n.d(t, "a", function() {
                return i
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
            var i = function() {
                return function(e, t) {
                    void 0 === t && (t = !1), this.name = e, this.isCollapsed = t, this.isGrabbed = !1
                }
            }();
            n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "a", function() {
                return i
            })
        },
        okVe: function(e, t, n) {},
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
                i = n("kRBY"),
                o = n("mrSG"),
                s = n("q1tI"),
                l = n("4p7I"),
                c = n("mLw1"),
                d = n("jKe7"),
                u = n("/7QA"),
                p = n("EOHf"),
                h = n("9C/b"),
                m = n("fvjX"),
                g = n("ZDlU"),
                f = n("yR8l"),
                b = n("V+GM"),
                v = n("8Ad5"),
                y = n("NvVO"),
                S = n("2xye"),
                E = n("GnwI"),
                C = n("3hKJ"),
                _ = n("7PeK"),
                w = n("cZKs"),
                k = n("6XEL"),
                O = function(e, t) {
                    return o.__awaiter(void 0, void 0, void 0, function() {
                        var n;
                        return o.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, Object(k.c)({
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
                I = function(e, t) {
                    return o.__awaiter(void 0, void 0, void 0, function() {
                        var n;
                        return o.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, Object(k.c)({
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
                x = n("Ue10"),
                T = (n("okVe"), {
                    "data-test-selector": "cancel-button"
                }),
                R = {
                    "data-test-selector": "close-button"
                },
                D = {
                    "data-test-selector": "remove-button"
                };
            ! function(e) {
                e[e.Pending = 0] = "Pending", e[e.InFlight = 1] = "InFlight", e[e.Failed = 2] = "Failed", e[e.Success = 3] = "Success"
            }(r || (r = {}));
            var P, j, M = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onClickRemove = function() {
                            return o.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.setState({
                                                requestState: r.InFlight
                                            }), [4, I(this.props.channelID, this.props.email)];
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
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = s.createElement(s.Fragment, null, s.createElement(x.Eb, {
                                borderBottom: !0
                            }, s.createElement(x.Xa, {
                                padding: {
                                    y: 2
                                }
                            }, s.createElement(x.W, {
                                color: x.O.Alt2
                            }, Object(u.d)("Failed to remove authorized streamer. Try again.", "ChannelSettingsAuthorizedStreamersPage")))), s.createElement(x.Xa, {
                                display: x.X.Flex,
                                justifyContent: x.Wa.Center,
                                padding: {
                                    top: 2
                                }
                            }, s.createElement(x.Xa, {
                                margin: {
                                    x: 1
                                }
                            }, s.createElement(x.z, o.__assign({}, R, {
                                onClick: this.props.onClose
                            }), Object(u.d)("Close", "ChannelSettingsAuthorizedStreamersPage"))))),
                            t = s.createElement(s.Fragment, null, s.createElement(x.Xa, null, s.createElement(x.Xa, {
                                display: x.X.Flex,
                                justifyContent: x.Wa.Center,
                                padding: {
                                    y: 2
                                }
                            }, s.createElement(x.W, {
                                color: x.O.Alt2
                            }, this.props.email))), s.createElement(x.Eb, {
                                background: x.r.Alt,
                                display: x.X.Flex,
                                justifyContent: x.Wa.Center,
                                padding: 2
                            }, s.createElement(x.Xa, {
                                margin: {
                                    x: 1
                                }
                            }, s.createElement(x.z, o.__assign({}, T, {
                                onClick: this.props.onClose,
                                type: x.F.Hollow
                            }), Object(u.d)("No, Keep Them", "ChannelSettingsAuthorizedStreamersPage"))), s.createElement(x.Xa, {
                                margin: {
                                    x: 1
                                }
                            }, s.createElement(x.z, o.__assign({}, D, {
                                disabled: this.state.requestState === r.InFlight,
                                onClick: this.onClickRemove
                            }), Object(u.d)("Yes, Remove Them", "ChannelSettingsAuthorizedStreamersPage")))));
                        return s.createElement(x.Eb, {
                            background: x.r.Base,
                            elevation: 3,
                            className: "remove-streamer-modal"
                        }, s.createElement(x.Eb, {
                            borderBottom: !0,
                            padding: 2,
                            display: x.X.Flex,
                            justifyContent: x.Wa.Center
                        }, s.createElement(x.W, {
                            bold: !0,
                            fontSize: x.Ca.Size4
                        }, Object(u.d)("Remove This Authorized Streamer?", "ChannelSettingsAuthorizedStreamersPage"))), this.state.requestState === r.Failed ? e : t, s.createElement(w.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(s.Component),
                L = n("IFXb"),
                F = n("B+LW"),
                A = n("kMWa"),
                N = (n("rJj9"), {
                    "data-test-selector": "email"
                }),
                U = {
                    "data-test-selector": "send"
                },
                X = {
                    "data-test-selector": "remove"
                },
                B = {
                    "data-test-selector": "empty"
                },
                W = {
                    "data-test-selector": "error"
                },
                z = {
                    "data-test-selector": "not-found"
                };
            ! function(e) {
                e.Waiting = "waiting", e.Error = "error", e.NotFound = "notFound", e.Success = "success"
            }(P || (P = {})),
            function(e) {
                e.Loading = "loading", e.Success = "success", e.Error = "error"
            }(j || (j = {}));
            var q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            authorizedStreamers: [],
                            emailAddress: "",
                            inviteState: P.Waiting,
                            requestState: j.Loading
                        }, t.updateAuthorizedStreamers = function(e) {
                            t.setState({
                                authorizedStreamers: e
                            })
                        }, t.handleEmailAddressChange = function(e) {
                            t.setState({
                                emailAddress: e.currentTarget.value
                            })
                        }, t.handleKeyDown = function(e) {
                            e.keyCode === v.a.Enter && t.sendInvite(t.state.emailAddress)
                        }, t.sendInvite = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return o.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return (t = this.props.data.user) && t.id ? (this.setState({
                                                inviteState: P.Waiting
                                            }), e.length > 0 ? [4, O(t.id, e)] : [3, 2]) : [2];
                                        case 1:
                                            (n = r.sent()).isNotFound ? this.setState({
                                                inviteState: P.NotFound
                                            }) : n.isError ? this.setState({
                                                inviteState: P.Error
                                            }) : this.setState({
                                                authorizedStreamers: n.authorizedStreamers,
                                                emailAddress: "",
                                                inviteState: P.Success
                                            }), r.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }, t.resendInvite = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return o.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return (t = this.props.data.user) && t.id ? [4, O(t.id, e)] : [2];
                                        case 1:
                                            return (n = r.sent()).isError || this.setState({
                                                authorizedStreamers: n.authorizedStreamers
                                            }), [2]
                                    }
                                })
                            })
                        }, t.renderSuccess = function() {
                            var e = t.props.data.user;
                            if (!e || !e.id) return null;
                            var n = t.state.inviteState === P.Error || t.state.inviteState === P.NotFound,
                                r = s.createElement(x.Xa, {
                                    margin: {
                                        bottom: 2
                                    }
                                }, s.createElement(x.Xa, {
                                    display: x.X.Flex,
                                    flexGrow: 1,
                                    padding: {
                                        bottom: 1
                                    }
                                }, s.createElement(x.Xa, {
                                    flexGrow: 1,
                                    margin: {
                                        right: 1
                                    }
                                }, s.createElement(x.Ra, {
                                    error: n,
                                    type: x.Ta.Text,
                                    onChange: t.handleEmailAddressChange,
                                    onKeyDown: t.handleKeyDown,
                                    value: t.state.emailAddress,
                                    placeholder: Object(u.d)("Enter an email address", "ChannelSettingsAuthorizedStreamersPage")
                                }), s.createElement(x.Xa, {
                                    margin: {
                                        top: 1
                                    }
                                }, t.state.inviteState === P.NotFound && s.createElement(x.W, o.__assign({}, z, {
                                    color: x.O.Error,
                                    fontSize: x.Ca.Size6
                                }), Object(u.d)("That email address isn't linked to a Twitch account. Make sure the email is linked to a Twitch account.", "ChannelSettingsAuthorizedStreamersPage")))), s.createElement(x.Xa, null, s.createElement(x.z, o.__assign({}, U, {
                                    onClick: function() {
                                        return t.sendInvite(t.state.emailAddress)
                                    }
                                }), s.createElement(x.Xa, {
                                    padding: {
                                        x: 1
                                    }
                                }, Object(u.d)("Send Invite", "ChannelSettingsAuthorizedStreamersPage"))))));
                            return s.createElement(s.Fragment, null, r, 0 === t.state.authorizedStreamers.length ? s.createElement(x.Xa, o.__assign({
                                display: x.X.Flex,
                                flexDirection: x.Aa.Column,
                                alignItems: x.f.Center,
                                alignContent: x.e.Center,
                                justifyContent: x.Wa.Center,
                                padding: {
                                    y: 5
                                }
                            }, B), s.createElement(x.Xa, {
                                padding: {
                                    bottom: .5
                                }
                            }, s.createElement(x.q, {
                                src: "https://static-cdn.jtvnw.net/emoticons/v1/58127/2.0",
                                alt: "CoolCat",
                                size: 50
                            })), s.createElement(x.W, {
                                color: x.O.Alt2,
                                fontSize: x.Ca.Size5
                            }, Object(u.d)("No authorized streamers to display", "ChannelSettingsAuthorizedStreamersPage"))) : t.state.authorizedStreamers.map(function(n, r) {
                                return s.createElement(x.Eb, {
                                    key: r,
                                    alignItems: x.f.Center,
                                    borderBottom: !0,
                                    display: x.X.Flex,
                                    justifyContent: x.Wa.Between,
                                    padding: {
                                        bottom: 1,
                                        top: 1
                                    }
                                }, s.createElement(x.Xa, {
                                    display: x.X.Flex,
                                    alignItems: x.f.Center
                                }, s.createElement(x.W, o.__assign({}, N), n.email)), s.createElement(x.Xa, null, s.createElement(x.Xa, {
                                    margin: {
                                        right: 1
                                    },
                                    display: x.X.InlineFlex
                                }, s.createElement(x.z, {
                                    type: x.F.Hollow,
                                    onClick: function() {
                                        return t.resendInvite(n.email)
                                    }
                                }, Object(u.d)("Resend Invite", "ChannelSettingsAuthorizedStreamersPage"))), s.createElement(F.a, {
                                    triggerModal: function(r) {
                                        return s.createElement(M, {
                                            channelID: e.id,
                                            email: n.email,
                                            onClose: r,
                                            onSuccess: t.updateAuthorizedStreamers
                                        })
                                    }
                                }, function(e) {
                                    return s.createElement(x.z, o.__assign({
                                        type: x.F.Text,
                                        onClick: e
                                    }, X), Object(u.d)("Remove", "ChannelSettingsAuthorizedStreamersPage"))
                                })))
                            }))
                        }, t.renderError = function() {
                            return s.createElement(x.Xa, o.__assign({
                                display: x.X.Flex,
                                flexDirection: x.Aa.Column,
                                alignItems: x.f.Center,
                                alignContent: x.e.Center,
                                justifyContent: x.Wa.Center,
                                padding: {
                                    top: 5,
                                    right: 0,
                                    bottom: 5,
                                    left: 0
                                }
                            }, W), s.createElement(x.Xa, {
                                padding: {
                                    top: 5,
                                    bottom: .5
                                }
                            }, s.createElement(x.q, {
                                src: "https://static-cdn.jtvnw.net/emoticons/v1/86/2.0",
                                alt: "BibleThump",
                                size: 50
                            })), s.createElement(x.W, {
                                color: x.O.Alt2,
                                fontSize: x.Ca.Size5
                            }, Object(u.d)("An error occurred while loading authorized streamers for your channel.", "ChannelSettingsAuthorizedStreamersPage")))
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        return o.__awaiter(this, void 0, void 0, function() {
                            return o.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.props.data.loading ? [3, 2] : [4, this.fetchAuthorizedStreamers()];
                                    case 1:
                                        e.sent(), this.props.latencyTracking.reportInteractive(), e.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.componentDidUpdate = function(e) {
                        return o.__awaiter(this, void 0, void 0, function() {
                            return o.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return !e.data.loading || this.props.data.loading ? [3, 2] : [4, this.fetchAuthorizedStreamers()];
                                    case 1:
                                        t.sent(), this.props.latencyTracking.reportInteractive(), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.error,
                            n = e.loading,
                            r = e.user,
                            a = this.state.requestState;
                        if (n || a === j.Loading) return s.createElement(L.a, null, s.createElement(x.ib, {
                            height: 600
                        }));
                        if (t || !r || !r.login || !r.id) return s.createElement(g.a, null);
                        var i = s.createElement(C.a, {
                            title: Object(u.d)("People who can stream to your channel", "ChannelSettingsAuthorizedStreamersPage"),
                            linkToParent: "/" + r.login + "/dashboard/settings"
                        });
                        return s.createElement(L.a, null, s.createElement(_.a, {
                            header: i
                        }, s.createElement(x.Eb, {
                            background: x.r.Base,
                            elevation: 1,
                            padding: 2,
                            flexGrow: 1,
                            fullWidth: !0,
                            className: "editable-channels-page"
                        }, s.createElement(x.Eb, {
                            fullWidth: !0,
                            fullHeight: !0,
                            display: x.X.Flex,
                            justifyContent: x.Wa.Center,
                            margin: 1
                        }, s.createElement(x.P, {
                            cols: 6
                        }, this.state.requestState === j.Success ? this.renderSuccess() : this.renderError())))))
                    }, t.prototype.fetchAuthorizedStreamers = function() {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var e, t;
                            return o.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return (e = this.props.data.user) && e.id ? [4, function(e) {
                                            return o.__awaiter(void 0, void 0, void 0, function() {
                                                var t;
                                                return o.__generator(this, function(n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return [4, Object(k.c)({
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
                                        }(e.id)] : [2];
                                    case 1:
                                        return (t = n.sent()).isError ? this.setState({
                                            requestState: j.Error
                                        }) : this.setState({
                                            authorizedStreamers: t.authorizedStreamers,
                                            requestState: j.Success
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }(s.Component),
                K = Object(m.compose)(h.a, Object(f.a)(A, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.match.params.channelLogin
                            }
                        }
                    }
                }), Object(E.b)("AuthorizedStreamersPage", {
                    destination: y.a.AuthorizedStreamers
                }), Object(b.a)({
                    location: S.PageviewLocation.AuthorizedStreamers
                }))(q),
                V = n("BK8n"),
                H = n("G1cX"),
                G = n("Nxrd"),
                Y = n("f00E"),
                Q = n("b6Yk"),
                Z = n("H/lO"),
                J = n("NZDK");

            function $(e) {
                var t = e.settings;
                return {
                    vodcastHosting: !t.deprioritize_vodcast,
                    enabled: t.enabled,
                    strategy: t.strategy,
                    teamHost: t.team_host,
                    raidPreference: t.can_be_raided_by
                }
            }
            var ee = function(e, t, n, r) {
                    if (t) {
                        var a = document.querySelectorAll(".autohost-list-item");
                        if (!(a.length < 1)) {
                            var i = document.activeElement,
                                o = Array.prototype.indexOf.call(a, i),
                                s = o;
                            switch (e) {
                                case v.a.Space:
                                    return n ? (r && (a.item(r).tabIndex = 0), {
                                        isSorting: !1,
                                        selectedIndex: null
                                    }) : o >= 0 ? (a.item(o).tabIndex = -1, {
                                        isSorting: !0,
                                        selectedIndex: o
                                    }) : void 0;
                                case v.a.Up:
                                    if (0 === o) return;
                                    s = o < 0 ? a.length - 1 : o - 1;
                                    break;
                                case v.a.Down:
                                    if ((s = o + 1) >= a.length) return;
                                    break;
                                default:
                                    return
                            }
                            if (!n) {
                                var l = a.item(s);
                                l.focus(), l.tabIndex = 0, r && (a.item(r).tabIndex = -1)
                            }
                            if (null !== r) {
                                var c = Object(G.arrayMove)(t, o, s);
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
                te = function(e, t) {
                    return !(e !== v.a.Space || !t)
                },
                ne = n("+XQV");

            function re(e) {
                return {
                    publishingMode: e.publishing_mode,
                    followersOnlyDurationSeconds: e.followers_only_duration_seconds || ne.FollowersDurationSeconds.Off
                }
            }
            var ae = n("yLwq"),
                ie = function(e) {
                    return e.profile_image && e.profile_image["50x50"] ? e.profile_image["50x50"].url : Object(ae.c)(e.id, 50)
                },
                oe = n("N3I0"),
                se = n("GIun"),
                le = n("8/mp"),
                ce = n("TSYQ"),
                de = n("N0BP"),
                ue = (n("ne2S"), function(e) {
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
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("Remove", "AutohostListItem"),
                            t = !this.props.isSorting && this.state.hovered,
                            n = {
                                "autohost-list-item": !0,
                                "autohost-list-item--hovered": t,
                                "autohost-list-item--selected": this.props.selected
                            },
                            r = null;
                        (t || this.props.selected) && (r = s.createElement(x.Xa, {
                            className: "autohost-list-item--remove",
                            padding: {
                                right: 1
                            },
                            display: x.X.Flex,
                            attachRight: !0
                        }, s.createElement(x.Yb, {
                            label: e,
                            direction: x.ac.Left
                        }, s.createElement(x.A, {
                            "data-test-selector": "AUTO_HOST_REMOVE_BUTTON",
                            ariaLabel: e,
                            icon: x.tb.Trash,
                            onClick: this.onRemoveClick,
                            overlay: !0
                        }))));
                        var a = this.props.user.avatar || Object(ae.c)(this.props.user.id, 64);
                        return s.createElement(x.Pa, o.__assign({
                            className: ce(n),
                            padding: {
                                y: 1,
                                x: 1
                            }
                        }, Object(de.a)(this.props)), s.createElement("div", {
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave,
                            tabIndex: -1
                        }, s.createElement(x.G, {
                            row: !0
                        }, s.createElement(x.Xa, {
                            className: "autohost-list-item__avatar"
                        }, s.createElement(x.o, {
                            ratio: x.p.Aspect1x1
                        }, s.createElement("img", {
                            alt: this.props.user.name,
                            src: a,
                            draggable: !1
                        }))), s.createElement(x.Xa, {
                            flexGrow: 1,
                            display: x.X.Flex,
                            position: x.jb.Relative
                        }, s.createElement(x.Pa, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, s.createElement(x.W, {
                            type: x.Vb.Span,
                            ellipsis: !0
                        }, this.props.user.name))), r)))
                    }, t
                }(s.Component)),
                pe = Object(G.SortableElement)(function(e) {
                    return s.createElement(ue, o.__assign({}, e))
                }),
                he = (n("r6fx"), function(e) {
                    return s.createElement(le.b, {
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
                        }, s.createElement(pe, {
                            user: t,
                            index: n,
                            onRemoveClick: e.onHostRemoved,
                            isSorting: e.isSorting,
                            selected: e.selectedIndex === n
                        }))
                    })))
                }),
                me = Object(G.SortableContainer)(function(e) {
                    return s.createElement(he, o.__assign({}, e))
                }),
                ge = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onAddClick = function() {
                            t.props.onAddClick(t.props.user)
                        }, t.onAddedClick = function() {
                            t.props.onAddedClick(t.props.user)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        e = this.props.user.added ? s.createElement(x.z, {
                            onClick: this.onAddedClick,
                            "data-test-selector": "AUTO_HOST_REMOVE_BUTTON",
                            icon: x.tb.Check,
                            statusAlertIcon: x.tb.Trash,
                            statusAlertText: Object(u.d)("Remove", "AutohostUserResultCard")
                        }, Object(u.d)("Added", "AutohostUserResultCard")) : s.createElement(x.z, {
                            type: x.F.Hollow,
                            onClick: this.onAddClick,
                            "data-test-selector": "AUTO_HOST_ADD_BUTTON"
                        }, Object(u.d)("Add", "AutohostUserResultCard"));
                        var t = this.props.user.avatar || Object(ae.c)(this.props.user.id, 64);
                        return s.createElement(x.Xa, o.__assign({
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(de.a)(this.props)), s.createElement(x.G, {
                            row: !0
                        }, s.createElement(x.I, {
                            alt: this.props.user.name,
                            src: t,
                            size: x.J.Size4,
                            aspect: x.p.Aspect1x1
                        }), s.createElement(x.Xa, {
                            flexGrow: 1,
                            display: x.X.Flex,
                            position: x.jb.Relative
                        }, s.createElement(x.Pa, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, s.createElement(x.W, {
                            type: x.Vb.Span,
                            ellipsis: !0
                        }, this.props.user.name))), e))
                    }, t
                }(s.Component),
                fe = (n("B2xO"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.userSearch = null, t.setUserSearchRef = function(e) {
                            t.userSearch = e
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.userSearch && e.isUserSearchOpen !== this.props.isUserSearchOpen && this.userSearch.toggle(e.isUserSearchOpen)
                    }, t.prototype.render = function() {
                        var e = this,
                            t = null;
                        return this.props.isWaiting ? t = s.createElement(x.Za, {
                            fillContent: !0
                        }) : this.props.userResults && (t = this.props.userResults.map(function(t) {
                            return s.createElement(se.a, {
                                key: t.id
                            }, s.createElement(ge, {
                                user: t,
                                onAddClick: e.props.onHostAdded,
                                onAddedClick: e.props.onHostRemoved,
                                key: t.id
                            }))
                        })), s.createElement(x.Xa, {
                            className: "autohost-list",
                            alignContent: x.e.Center
                        }, s.createElement(x.Xa, {
                            position: x.jb.Relative,
                            margin: {
                                y: 1
                            }
                        }, s.createElement(oe.a, {
                            onChange: this.props.onUserInputChange,
                            onFocusInput: this.props.onFocusInput,
                            ref: this.setUserSearchRef,
                            placeholder: Object(u.d)("Search channels to host", "AutohostList"),
                            balloonProps: {
                                show: this.props.isUserSearchOpen,
                                direction: x.v.Bottom,
                                size: x.w.Large
                            },
                            onClose: this.props.onSearchClose,
                            isErrored: this.props.isSearchErrored
                        }, s.createElement(x.Xa, {
                            className: "autohost-list__user-search"
                        }, s.createElement(le.b, {
                            contentClassName: "autohost-list__user-search-content",
                            suppressScrollX: !0
                        }, s.createElement(x.Xa, {
                            fullWidth: !0
                        }, t, s.createElement(le.a, {
                            enabled: !this.props.isWaiting && this.props.isUserSearchOpen,
                            loadMore: this.props.loadMore
                        })))))), s.createElement(me, {
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
                be = 100,
                ve = "/kraken/streams/recommended",
                ye = "kraken/autohost/list",
                Se = function(e) {
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
                            }, be)
                        }, n.loadMore = function() {
                            return o.__awaiter(n, void 0, void 0, function() {
                                var e, t, n, r, a;
                                return o.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (!this.state.userTerm || this.state.queryID || this.state.isWaiting || !0 === this.state.exhaustedHits) return [2];
                                            e = this.state.currentPage + 1, t = null, i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(Z.a.Users, this.state.userTerm, "", {
                                                page: e
                                            })];
                                        case 2:
                                            return t = i.sent(), [3, 4];
                                        case 3:
                                            return n = i.sent(), u.k.error(n, "Algolia page search failed"), this.setState({
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
                            return o.__awaiter(n, void 0, void 0, function() {
                                var t, n, r, a = this;
                                return o.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (!this.state.autohostChannels) return [2];
                                            (t = this.state.autohostChannels.map(function(e) {
                                                return e.id
                                            })).push(e.id), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, Q.a.putOrThrow(ye, {
                                                body: {
                                                    targets: t.join(",")
                                                }
                                            })];
                                        case 2:
                                            return i.sent(), [3, 4];
                                        case 3:
                                            return n = i.sent(), r = Object(u.d)("Unable to add user to auto host list", "AutohostList"), u.k.error(n, r, {
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
                            return o.__awaiter(n, void 0, void 0, function() {
                                var e, t, n, r = this;
                                return o.__generator(this, function(a) {
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
                                            return a.trys.push([1, 3, , 4]), [4, Q.a.getOrThrow(ve)];
                                        case 2:
                                            return e = a.sent(), [3, 4];
                                        case 3:
                                            return t = a.sent(), u.k.error(t, "Unable to retrieve recomended channels"), [2];
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
                            return o.__awaiter(n, void 0, void 0, function() {
                                var e, t, n, r;
                                return o.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 2, , 3]), [4, Q.a.getOrThrow(ye)];
                                        case 1:
                                            return e = a.sent(), [3, 3];
                                        case 2:
                                            return t = a.sent(), n = Object(u.d)("Unable to fetch auto host list", "AutohostList"), u.k.error(t, n), this.props.onError(n), [2];
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
                            return o.__awaiter(n, void 0, void 0, function() {
                                var t, n, r, a, i, s = this;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (!this.state.autohostChannels) return [2];
                                            if (this.setState({
                                                    isSorting: !1,
                                                    selectedIndex: null
                                                }), t = [], 1 !== this.state.autohostChannels.length) return [3, 5];
                                            o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), [4, Q.a.deleteOrThrow(ye)];
                                        case 2:
                                            return o.sent(), [3, 4];
                                        case 3:
                                            return n = o.sent(), this.reportChannelError(e, n), [2];
                                        case 4:
                                            return [3, 9];
                                        case 5:
                                            if (t = this.state.autohostChannels.slice(), (r = t.findIndex(function(t) {
                                                    return e.id === t.id
                                                })) < 0) return this.reportChannelError(e, new Error("User not found in auto host list")), [2];
                                            t.splice(r, 1), a = t.map(function(e) {
                                                return e.id
                                            }), o.label = 6;
                                        case 6:
                                            return o.trys.push([6, 8, , 9]), [4, Q.a.putOrThrow(ye, {
                                                body: {
                                                    targets: a.join(",")
                                                }
                                            })];
                                        case 7:
                                            return o.sent(), [3, 9];
                                        case 8:
                                            return i = o.sent(), this.reportChannelError(e, i), [2];
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
                            return e && r >= 0 && (a = H(e, function(e) {
                                return e[r]
                            }, function(e) {
                                return e.added = n, e
                            })), a
                        }, n.onKeyDown = function(e) {
                            var t = ee(e.keyCode, n.state.autohostChannels, n.state.isSorting, n.state.selectedIndex);
                            t && n.setState(t), te(e.keyCode, n.state.isSorting) && n.updateList(n.state.autohostChannels)
                        }, n.onChannelOrderChange = function(e) {
                            return o.__awaiter(n, void 0, void 0, function() {
                                var t;
                                return o.__generator(this, function(n) {
                                    return e.newIndex === e.oldIndex ? (this.setState({
                                        isSorting: !1
                                    }), [2]) : (t = Object(G.arrayMove)(this.state.autohostChannels, e.oldIndex, e.newIndex), this.setState({
                                        autohostChannels: t,
                                        isSorting: !1
                                    }), this.updateList(t), [2])
                                })
                            })
                        }, n.onChannelOrderChangeStart = function() {
                            return n.setState({
                                isSorting: !0
                            })
                        }, n.searchClient = new J.a({
                            appId: u.a.algoliaApplicationID,
                            apiKey: u.a.algoliaAPIKey,
                            apolloClient: u.p.apollo.client,
                            logger: u.k,
                            config: u.a,
                            stats: u.p.stats
                        }), n
                    }
                    return o.__extends(t, e), t.prototype.componentWillMount = function() {
                        return o.__awaiter(this, void 0, void 0, function() {
                            return o.__generator(this, function(e) {
                                return this.fetchChannelsList(), [2]
                            })
                        })
                    }, t.prototype.render = function() {
                        return s.createElement(fe, {
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
                        return o.__awaiter(this, void 0, void 0, function() {
                            var t, n, r, a;
                            return o.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        this.inputTimer = 0, t = Object(Y.a)(), this.setState({
                                            queryID: t
                                        }), n = null, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(Z.a.Users, e, t)];
                                    case 2:
                                        return n = i.sent(), [3, 4];
                                    case 3:
                                        return r = i.sent(), u.k.error(r, "Algolia autohost user search failed"), this.setState({
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
                        var n = Object(u.d)("Unable to remove channel from auto host list", "AutohostList");
                        u.k.error(t, n, {
                            target: e
                        }), this.props.onError(n)
                    }, t.prototype.updateList = function(e) {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var t, n, r;
                            return o.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = e.map(function(e) {
                                            return e.id
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, Q.a.putOrThrow(ye, {
                                            body: {
                                                targets: t.join(",")
                                            }
                                        })];
                                    case 2:
                                        return a.sent(), [3, 4];
                                    case 3:
                                        return n = a.sent(), r = Object(u.d)("Unable to re order auto host list", "AutohostList"), u.k.error(n, r), this.props.onError(r), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }(s.Component);
            var Ee, Ce = Object(a.connect)(function(e) {
                    return {
                        user: Object(i.e)(e)
                    }
                })(Se),
                _e = function(e) {
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
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = s.createElement(C.a, {
                            title: Object(u.d)("Host list", "AuthohostListPage"),
                            linkToParent: "/" + this.props.match.params.channelLogin + "/dashboard/settings"
                        });
                        return s.createElement(L.a, null, s.createElement(_.a, {
                            header: e
                        }, s.createElement(V.a, {
                            error: !!this.state.autohostError,
                            errorMessage: this.state.autohostError
                        }, s.createElement(x.Xa, {
                            display: x.X.Flex,
                            justifyContent: x.Wa.Center
                        }, s.createElement(Ce, {
                            onError: this.handleAutohostError,
                            onUserInput: this.handleAutohostInput,
                            isSearchErrored: !!this.state.autohostError
                        })))))
                    }, t
                }(s.Component),
                we = Object(m.compose)(Object(E.b)("AutohostListPage", {
                    autoReportInteractive: !0,
                    destination: y.a.AutohostSettings
                }), Object(b.a)({
                    location: S.PageviewLocation.AutohostSettings
                }))(_e),
                ke = n("c0Zc"),
                Oe = n("EpBn"),
                Ie = n("mAXC"),
                xe = n("fWal"),
                Te = n("+vgv"),
                Re = function(e) {
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
                                strategy: ne.AutohostStrategy.Random
                            })
                        }, t.handleSetOrderedAutohostStrategy = function() {
                            t.props.saveSettings({
                                strategy: ne.AutohostStrategy.Ordered
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = !this.props.saving && this.props.requestState === Te.a.Loading,
                            t = this.props.saving;
                        return s.createElement(_.a, null, this.props.requestState === Te.a.Error && s.createElement(V.a, null, s.createElement(x.W, {
                            color: x.O.Error
                        }, Object(u.d)("Something went wrong. Give it another try later.", "AutohostSettings"))), s.createElement(xe.a, {
                            label: Object(u.d)("Auto host channels", "AutohostSettings"),
                            name: "enabled",
                            showPlaceholder: e,
                            disabled: t,
                            checked: this.props.autohostSettings.enabled,
                            onChange: this.handleToggleEnabled,
                            description: Object(u.d)("Automatically host channels from your host list when you're offline", "AutohostSettings"),
                            id: "auto-host-channels-toggle",
                            "data-test-selector": "auto-host-channels-toggle"
                        }), s.createElement(xe.a, {
                            label: Object(u.d)("Host team channels", "AutohostSettings"),
                            name: "teamHost",
                            showPlaceholder: e,
                            disabled: t,
                            checked: this.props.autohostSettings.teamHost,
                            onChange: this.handleToggleTeamHost,
                            id: "team-host",
                            description: Object(u.d)("Include team channels in your host list", "AutohostSettings")
                        }), s.createElement(xe.a, {
                            label: Object(u.d)("Host pre-recorded videos", "AutohostSettings"),
                            name: "vodcastHosting",
                            showPlaceholder: e,
                            disabled: t,
                            checked: this.props.autohostSettings.vodcastHosting,
                            onChange: this.handleToggleVodcastHosting,
                            description: Object(u.d)("Include channels streaming pre-recorded video, like Premieres or Reruns", "AutohostSettings"),
                            id: "vodcast-hosting-toggle"
                        }), s.createElement(Oe.a, {
                            orientation: x.Fa.Horizontal,
                            label: Object(u.d)("Hosting priority", "AutohostSettings")
                        }, s.createElement(x.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(x.pb, {
                            disabled: this.props.requestState === Te.a.Loading,
                            checked: this.props.autohostSettings.strategy === ne.AutohostStrategy.Ordered,
                            onChange: this.handleSetOrderedAutohostStrategy,
                            label: Object(u.d)("Host channels by the order they appear in the list", "AutohostSettings"),
                            name: "hostPriority",
                            value: ne.AutohostStrategy.Ordered
                        })), s.createElement(x.pb, {
                            disabled: this.props.requestState === Te.a.Loading,
                            checked: this.props.autohostSettings.strategy === ne.AutohostStrategy.Random,
                            onChange: this.handleSetRandomAutohostStrategy,
                            label: Object(u.d)("Host channels randomly from the list", "AutohostSettings"),
                            name: "hostPriority",
                            value: ne.AutohostStrategy.Random
                        })), s.createElement(Ie.a, {
                            text: Object(u.d)("Host list", "AutohostSettings"),
                            description: Object(u.d)("Add and manage your hosted channels", "AutohostSettings"),
                            linkTo: "/" + this.props.channelName + "/dashboard/settings/autohost"
                        }))
                    }, t
                }(s.Component),
                De = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleSetRaidPreference = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(t) {
                                    return [2, this.props.saveSettings({
                                        raidPreference: e.currentTarget.value
                                    })]
                                })
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return s.createElement(_.a, null, this.props.requestState === Te.a.Error && s.createElement(V.a, null, s.createElement(x.W, {
                            color: x.O.Error
                        }, Object(u.d)("Something went wrong. Give it another try later.", "RaidSettingsForm"))), s.createElement(Oe.a, {
                            orientation: x.Fa.Horizontal,
                            label: Object(u.d)("Raid", "RaidSettingsForm")
                        }, s.createElement(x.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(x.pb, {
                            disabled: this.props.requestState === Te.a.Loading,
                            checked: this.props.raidPreference === ne.RaidPreference.All,
                            onChange: this.handleSetRaidPreference,
                            label: Object(u.d)("Allow all raids", "RaidSettingsForm"),
                            name: "raidPreference",
                            value: ne.RaidPreference.All
                        })), s.createElement(x.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(x.pb, {
                            disabled: this.props.requestState === Te.a.Loading,
                            checked: this.props.raidPreference === ne.RaidPreference.Network,
                            onChange: this.handleSetRaidPreference,
                            label: Object(u.d)("Only allow raids from friends, teammates, and followed channels", "RaidSettingsForm"),
                            name: "raidPreference",
                            value: ne.RaidPreference.Network
                        })), s.createElement(x.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(x.pb, {
                            disabled: this.props.requestState === Te.a.Loading,
                            checked: this.props.raidPreference === ne.RaidPreference.None,
                            onChange: this.handleSetRaidPreference,
                            label: Object(u.d)("Block all raids", "RaidSettingsForm"),
                            name: "raidPreference",
                            value: ne.RaidPreference.None
                        }))))
                    }, t
                }(s.Component),
                Pe = Object(E.b)("RaidSettingsForm")(De),
                je = function(e) {
                    return s.createElement(s.Fragment, null, s.createElement(ke.a, {
                        title: Object(u.d)("Auto Hosting", "DashboardSettings")
                    }), s.createElement(Re, {
                        channelName: e.channelName,
                        autohostSettings: e.autohostSettings,
                        requestState: e.requestState,
                        saving: e.saving,
                        saveSettings: e.saveSettings
                    }), s.createElement(ke.a, {
                        title: Object(u.d)("Raids", "DashboardSettings")
                    }), s.createElement(Pe, {
                        raidPreference: e.autohostSettings.raidPreference,
                        requestState: e.requestState,
                        saveSettings: e.saveSettings
                    }))
                },
                Me = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            autohostSettings: ne.DEFAULT_AUTOHOST_SETTINGS,
                            requestState: ne.RequestState.Loading,
                            saving: !1
                        }, t.logger = u.p.logger.withCategory("raid-settings-form"), t.saveSettings = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return o.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return this.setState({
                                                requestState: ne.RequestState.Loading,
                                                saving: !0
                                            }), [4, function(e) {
                                                return o.__awaiter(this, void 0, Promise, function() {
                                                    var t;
                                                    return o.__generator(this, function(n) {
                                                        switch (n.label) {
                                                            case 0:
                                                                return [4, Q.a.put("/kraken/autohost/settings", {
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
                                                                    autohostSettings: $(t.body)
                                                                }]
                                                        }
                                                    })
                                                })
                                            }(o.__assign({}, this.state.autohostSettings, e))];
                                        case 1:
                                            return (t = r.sent()).isError ? (this.setState({
                                                requestState: ne.RequestState.Error,
                                                saving: !1
                                            }), n = new Error("Channel Properties Settings error"), this.logger.error(n, "Failed to load channel data", t.error)) : this.setState({
                                                autohostSettings: t.autohostSettings,
                                                requestState: ne.RequestState.Success,
                                                saving: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return o.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, function() {
                                            return o.__awaiter(this, void 0, Promise, function() {
                                                var e;
                                                return o.__generator(this, function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return [4, Q.a.get("/kraken/autohost/settings")];
                                                        case 1:
                                                            return (e = t.sent()).error || e.requestError ? [2, {
                                                                isError: !0,
                                                                autohostSettings: void 0
                                                            }] : [2, {
                                                                isError: !1,
                                                                autohostSettings: $(e.body)
                                                            }]
                                                    }
                                                })
                                            })
                                        }()];
                                    case 1:
                                        return (e = t.sent()).isError ? this.setState({
                                            requestState: ne.RequestState.Error
                                        }) : this.setState({
                                            autohostSettings: e.autohostSettings,
                                            requestState: ne.RequestState.Success
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return s.createElement(je, {
                            channelName: this.props.channelName,
                            autohostSettings: this.state.autohostSettings,
                            requestState: this.state.requestState,
                            saving: this.state.saving,
                            saveSettings: this.saveSettings
                        })
                    }, t
                }(s.Component),
                Le = n("EkNY"),
                Fe = n("Jxh/"),
                Ae = n("geRD"),
                Ne = function(e) {
                    var t = e.saving || e.errorLoading;
                    return s.createElement(xe.a, {
                        id: "settings-channel-page-mature-content",
                        label: Object(u.d)("Mature Content", "MatureContentToggle"),
                        description: Object(u.d)("Enable this setting if your stream contains content that may be inappropriate for younger audiences. You may never broadcast sexual activity, nudity, threats or extreme violence. Doing so will result in immediate, irrevocable termination of your account. Please make sure your content will comply with the <x:link>Terms of Service</x:link> before broadcasting", {
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
                Ue = n("K1Va"),
                Xe = n("sZD3"),
                Be = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            checked: !1,
                            saving: !1,
                            errorSaving: !1
                        }, t.logger = u.p.logger.withCategory("settings").withCategory("mature-content"), t.onCheckBoxChange = function(e) {
                            t.setState({
                                checked: e,
                                saving: !0
                            }, function() {
                                t.updateBroadcastSettings(e)
                            })
                        }, t.updateBroadcastSettings = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t, n, r;
                                return o.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (this.logger.debug("Updating broadcast settings", {
                                                    isMature: e
                                                }), !(t = this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update broadcast settings."), [2];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.updateBroadcastSettings(Object(Ae.a)({
                                                userID: t,
                                                isMature: e
                                            }))];
                                        case 2:
                                            return a.sent(), n = function(t) {
                                                var n = t && t.currentUser,
                                                    r = n && n.broadcastSettings;
                                                return r ? {
                                                    currentUser: o.__assign({}, n, {
                                                        broadcastSettings: o.__assign({}, r, {
                                                            isMature: e
                                                        })
                                                    })
                                                } : t
                                            }, Object(Ae.e)(Xe, {}, n), this.logger.debug("Updated broadcast settings", {
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
                    return o.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
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
                        return s.createElement(Ne, {
                            checked: this.state.checked,
                            saving: this.state.saving,
                            loading: this.props.data.loading,
                            errorLoading: n,
                            errorSaving: this.state.errorSaving,
                            onChange: this.onCheckBoxChange
                        })
                    }, t
                }(s.Component),
                We = Object(m.compose)(Object(E.b)("MatureContentToggle"), Object(f.a)(Xe, {
                    options: {
                        fetchPolicy: "network-only"
                    }
                }), Object(f.a)(Ue, {
                    name: "updateBroadcastSettings"
                }))(Be),
                ze = n("LZzM"),
                qe = "TOGGLE_ID_STORE_PAST_BROADCASTS",
                Ke = 5e3;
            ! function(e) {
                e.ChannelPropertiesError = "channel-properties-settings-form-channel-properties-error", e.CopyButton = "channel-properties-settings-form-copy-button", e.ResetButton = "channel-properties-settings-form-reset-buton", e.ToggleIdIngestResilience = "toggle-id-ingest-resilience"
            }(Ee || (Ee = {}));
            var Ve, He, Ge = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            streamKeyCopied: !1,
                            backupStreamKeyCopied: !1
                        }, t.isResilienceIngestTurnedOff = function() {
                            return t.props.channelProperties && 0 === t.props.channelProperties.numBackupStreamsAllowed && 0 === t.props.channelProperties.disconnectSlateDuration || !1
                        }, t.onToggleResilentIngest = function(e) {
                            var n;
                            n = t.isResilienceIngestTurnedOff() && e ? He.BackupSlate : He.Off, t.props.handleResilientIngestPreference(n)
                        }, t.renderStorePastBroadcasts = function() {
                            return s.createElement(xe.a, {
                                id: qe,
                                label: Object(u.d)("Store past broadcasts", "StreamKeySettingsForm"),
                                description: Object(u.d)("Automatically save broadcasts for up to 14 days (60 days for Partners, Turbo and Prime users)", "StreamKeySettingsForm"),
                                error: !!t.props.saveVodsError,
                                errorMessage: t.props.saveVodsError || "",
                                disabled: t.props.saveVodsSaving,
                                checked: !(!t.props.channelProperties || !t.props.channelProperties.saveVods),
                                onChange: t.props.handleSaveVodsToggled,
                                showPlaceholder: t.props.saveVodsState === Te.a.Loading
                            })
                        }, t.renderMatureContent = function() {
                            return s.createElement(We, null)
                        }, t.renderOptimizationPreference = function() {
                            return s.createElement(Oe.a, {
                                orientation: x.Fa.Horizontal,
                                label: Object(u.d)("Optimization preference", "StreamKeySettingsForm"),
                                error: !!t.props.latencyPrefError,
                                errorMessage: t.props.latencyPrefError || ""
                            }, s.createElement(x.Xa, {
                                padding: {
                                    bottom: 1
                                }
                            }, s.createElement(x.pb, {
                                disabled: t.props.latencyPrefState === Te.a.Loading,
                                checked: !(!t.props.channelProperties || t.props.channelProperties.latencyPreference !== Ve.Normal),
                                onChange: t.handleSetLatencyPreference,
                                label: Object(u.d)("Normal latency: Best for highest video quality, highest resolution, and to reduce video buffering", "StreamKeySettingsForm"),
                                name: "optPreference",
                                value: Ve.Normal
                            })), s.createElement(x.pb, {
                                disabled: t.props.latencyPrefState === Te.a.Loading,
                                checked: !(!t.props.channelProperties || t.props.channelProperties.latencyPreference !== Ve.Low),
                                onChange: t.handleSetLatencyPreference,
                                label: Object(u.d)("Low latency: Best for near real-time interactions with viewers", "StreamKeySettingsForm"),
                                name: "optPreference",
                                value: Ve.Low
                            }))
                        }, t.hideStreamKeyLink = function() {
                            return s.createElement(x.U, {
                                onClick: t.props.handleStreamKeyDisplayToggled
                            }, Object(u.d)("Hide", "StreamKeySettingsForm"))
                        }, t.showStreamKeyLink = function() {
                            return s.createElement(F.a, {
                                triggerModal: function(e) {
                                    return s.createElement(ze.a, {
                                        onClose: e,
                                        showStreamKey: t.props.handleStreamKeyDisplayToggled
                                    })
                                }
                            }, function(e) {
                                return s.createElement(x.U, {
                                    onClick: e
                                }, Object(u.d)("Show", "StreamKeySettingsForm"))
                            })
                        }, t.setKeyInputRef = function(e) {
                            return t.keyInput = e
                        }, t.setBackupKeyInputRef = function(e) {
                            return t.backupKeyInput = e
                        }, t.handleSetLatencyPreference = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(t) {
                                    return [2, this.props.handleSetLatencyPreference(e.currentTarget.value)]
                                })
                            })
                        }, t.handleSetResilientIngestPreference = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(t) {
                                    return [2, this.props.handleResilientIngestPreference(e.currentTarget.value)]
                                })
                            })
                        }, t.copyToClipboard = function(e, n) {
                            e && (Object(Fe.a)(e.value) && (n ? t.setState({
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
                            t.resetStreamKeyCopiedStateTimeout && clearTimeout(t.resetStreamKeyCopiedStateTimeout), e ? t.resetStreamKeyCopiedState() : t.resetStreamKeyCopiedStateTimeout = setTimeout(t.resetStreamKeyCopiedState, Ke)
                        }, t.handleResetStreamKeyClicked = function() {
                            t.props.handleResetStreamKeyClicked(), t.handleResetStreamKeyCopiedState(!0)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.channelPropertiesError) return s.createElement(_.a, {
                            "data-test-selector": Ee.ChannelPropertiesError
                        }, s.createElement(V.a, null, s.createElement(x.W, {
                            color: x.O.Error
                        }, this.props.channelPropertiesError)));
                        var e = this.props.channelProperties && (this.props.channelProperties.backupControlsEnabled || this.props.channelProperties.disconnectSlateControlsEnabled) || !1;
                        return s.createElement(_.a, null, this.renderStreamKey(), e && this.renderResilientIngest(), this.renderStorePastBroadcasts(), this.renderMatureContent(), this.props.channelProperties && this.props.channelProperties.latencyControlsEnabled && this.renderOptimizationPreference())
                    }, t.prototype.renderResilientIngest = function() {
                        var e = this.isResilienceIngestTurnedOff();
                        return s.createElement(xe.a, {
                            id: Ee.ToggleIdIngestResilience,
                            label: Object(u.d)("Ingest Resilience", "ResilienceStreamKeySettingsForm"),
                            description: Object(u.d)("Improve resilience against ingest failures by either starting a backup ingest stream or a slate", "ResilienceStreamKeySettingsForm"),
                            error: !(!this.props.streamKeyError || !this.props.resilientIngestError),
                            errorMessage: this.props.streamKeyError && this.props.resilientIngestError || "",
                            disabled: this.props.resilientIngestState === Te.a.Loading || this.props.resilientIngestState === Te.a.Error,
                            checked: !e,
                            onChange: this.onToggleResilentIngest
                        }, this.renderResilientIngestOption())
                    }, t.prototype.renderFallbackKeyOption = function() {
                        var e = this.props.channelProperties ? this.props.channelProperties.backupStreamKey : "";
                        return s.createElement(x.Xa, {
                            display: x.X.Flex,
                            flexDirection: x.Aa.Column,
                            padding: {
                                top: 1
                            }
                        }, s.createElement(x.Xa, {
                            padding: {
                                bottom: .5
                            }
                        }, s.createElement(x.W, {
                            color: x.O.Alt,
                            bold: !0
                        }, Object(u.d)("Fallback Stream key", "ResilienceStreamKeySettingsForm"))), s.createElement(x.Xa, {
                            display: x.X.Flex,
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(x.Xa, {
                            flexGrow: 1,
                            padding: {
                                right: .5
                            }
                        }, s.createElement(x.Ra, {
                            readOnly: !0,
                            type: this.props.showStreamKey ? x.Ta.Text : x.Ta.Password,
                            value: e,
                            refDelegate: this.setBackupKeyInputRef
                        })), s.createElement(x.z, {
                            ariaLabel: Object(u.d)("Copy Stream Key", "ResilienceStreamKeySettingsForm"),
                            "data-test-selector": Ee.CopyButton,
                            disabled: this.state.backupStreamKeyCopied,
                            onClick: this.handleBackupKeyCopyToClipboard
                        }, this.state.backupStreamKeyCopied ? Object(u.d)("Copied", "ResilienceStreamKeySettingsForm") : Object(u.d)("Copy", "ResilienceStreamKeySettingsForm"))), s.createElement(x.Xa, {
                            display: x.X.Flex
                        }, s.createElement(x.W, {
                            color: x.O.Alt
                        }, Object(u.d)("If your primary stream fails, we will automatically fallback to a backup stream", "ResilienceStreamKeySettingsForm"))), s.createElement(x.Xa, {
                            padding: {
                                top: .5
                            }
                        }, this.props.showStreamKey ? this.hideStreamKeyLink() : this.showStreamKeyLink()))
                    }, t.prototype.renderResilientIngestOption = function() {
                        var e = this.props.channelProperties && this.props.channelProperties.disconnectSlateControlsEnabled && this.props.channelProperties.disconnectSlateDuration > 0 || !1,
                            t = this.props.channelProperties && this.props.channelProperties.backupControlsEnabled && this.props.channelProperties.numBackupStreamsAllowed > 0 || !1;
                        return s.createElement(x.Xa, {
                            display: x.X.Flex,
                            margin: {
                                top: 1
                            }
                        }, s.createElement(x.Xa, {
                            flexGrow: 1,
                            padding: {
                                right: .5,
                                bottom: 1
                            }
                        }, this.props.channelProperties && this.props.channelProperties.disconnectSlateControlsEnabled && s.createElement(x.Xa, {
                            padding: {
                                bottom: .5
                            }
                        }, s.createElement(x.pb, {
                            disabled: !1,
                            checked: e,
                            onChange: this.handleSetResilientIngestPreference,
                            label: Object(u.d)("<x:bold>Backup Slate</x:bold>: If your primary stream fails, keep your channel LIVE for 90 seconds, while you troubleshoot and re-ingest", {
                                "x:bold": function(e) {
                                    return s.createElement(x.W, {
                                        type: x.Vb.Span,
                                        bold: !0
                                    }, e)
                                }
                            }, "ResilienceStreamKeySettingsForm"),
                            name: "optResiliencePreference",
                            value: He.BackupSlate
                        })), this.props.channelProperties && this.props.channelProperties.backupControlsEnabled && s.createElement(x.Xa, {
                            padding: {
                                bottom: .5
                            }
                        }, s.createElement(x.pb, {
                            disabled: !1,
                            checked: t,
                            onChange: this.handleSetResilientIngestPreference,
                            label: Object(u.d)("<x:bold>Backup Ingest Stream</x:bold>: Ingest a backup stream to Twitch. If your primary stream fails, we will automatically fallback to your backup setup", {
                                "x:bold": function(e) {
                                    return s.createElement(x.W, {
                                        type: x.Vb.Span,
                                        bold: !0
                                    }, e)
                                }
                            }, "ResilienceStreamKeySettingsForm"),
                            name: "optResiliencePreference",
                            value: He.BackupIngest
                        }), t && this.renderFallbackKeyOption())))
                    }, t.prototype.renderStreamKey = function() {
                        var e = x.E.Default,
                            t = this.props.resetStatus,
                            n = t === Te.a.Loading;
                        t === Te.a.Success ? e = x.E.Success : t === Te.a.Error ? n = !0 : t === Te.a.Loading && (e = x.E.Loading);
                        var r = this.state.streamKeyCopied;
                        return s.createElement(Oe.a, {
                            label: Object(u.d)("Primary Stream key", "StreamKeySettingsForm"),
                            error: !!this.props.streamKeyError,
                            errorMessage: this.props.streamKeyError || ""
                        }, s.createElement(x.Xa, {
                            display: x.X.Flex
                        }, s.createElement(x.Xa, {
                            flexGrow: 1,
                            padding: {
                                right: .5
                            }
                        }, s.createElement(x.Ra, {
                            readOnly: !0,
                            type: this.props.showStreamKey ? x.Ta.Text : x.Ta.Password,
                            value: this.props.channelProperties ? this.props.channelProperties.streamKey : "",
                            refDelegate: this.setKeyInputRef
                        })), s.createElement(x.z, {
                            ariaLabel: Object(u.d)("Copy Stream Key", "StreamKeySettingsForm"),
                            "data-test-selector": Ee.CopyButton,
                            disabled: r || t === Te.a.Error || t === Te.a.Loading,
                            onClick: this.handleCopyToClipboard
                        }, r ? Object(u.d)("Copied", "StreamKeySettingsForm") : Object(u.d)("Copy", "StreamKeySettingsForm")), s.createElement(x.Xa, {
                            padding: {
                                left: 1
                            }
                        }, s.createElement(x.z, {
                            ariaLabel: Object(u.d)("Reset Stream Key", "StreamKeySettingsForm"),
                            "data-test-selector": Ee.ResetButton,
                            disabled: n,
                            onClick: this.handleResetStreamKeyClicked,
                            state: e,
                            type: x.F.Hollow
                        }, Object(u.d)("Reset", "StreamKeySettings")))), s.createElement(x.Xa, {
                            padding: {
                                top: .5
                            }
                        }, this.props.showStreamKey ? this.hideStreamKeyLink() : this.showStreamKeyLink()))
                    }, t
                }(s.Component),
                Ye = Object(E.b)("ChannelPropertiesSettingsForm")(Ge),
                Qe = 1,
                Ze = 90;
            ! function(e) {
                e.Normal = "normal", e.Low = "low"
            }(Ve || (Ve = {})),
            function(e) {
                e.BackupSlate = "backup_slate", e.BackupIngest = "backup_ingest", e.Off = "off"
            }(He || (He = {}));
            var Je = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        channelProperties: null,
                        channelPropertiesError: null,
                        streamKeyError: null,
                        showStreamKey: !1,
                        resetKeyState: Te.a.Loading,
                        saveVodsState: Te.a.Loading,
                        saveVodsError: null,
                        saveVodsSaving: !1,
                        latencyPrefState: Te.a.Loading,
                        latencyPrefError: null,
                        resilientIngestState: Te.a.Loading,
                        resilientIngestError: null
                    }, t.logger = u.p.logger.withCategory("stream-key-settings"), t.fetchChannelProperties = function() {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, a, i;
                            return o.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!this.props.user) return [2];
                                        r = "/v5/channels/" + this.props.user.id + "/channel_properties", o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, Q.a.get(r)];
                                    case 2:
                                        return n = o.sent(), this.setState({
                                            channelProperties: this.deserializeChannelProperties(n),
                                            resetKeyState: null,
                                            saveVodsState: null,
                                            latencyPrefState: null,
                                            resilientIngestState: null
                                        }), [3, 4];
                                    case 3:
                                        return a = o.sent(), e = a, [3, 4];
                                    case 4:
                                        return n && n.error && (e = new Error("Channel Properties Settings error"), t = n.error), e ? (i = Object(u.d)("Failed to load channel properties.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to load channel data", t), this.setState({
                                            channelPropertiesError: i
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
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, a, i, s = this;
                            return o.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!this.props.user) return [2];
                                        this.resetStreamKeyTimeout && clearTimeout(this.resetStreamKeyTimeout), this.setState({
                                            resetKeyState: Te.a.Loading
                                        }), r = "/v5/channels/" + this.props.user.id + "/channel_properties/regenerate_stream_key", o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, Q.a.put(r)];
                                    case 2:
                                        return n = o.sent(), this.setState({
                                            channelProperties: this.deserializeChannelProperties(n),
                                            resetKeyState: Te.a.Success
                                        }), [3, 4];
                                    case 3:
                                        return a = o.sent(), e = a, [3, 4];
                                    case 4:
                                        return n && n.error && (e = new Error("Channel Properties Settings error"), t = n.error), e && (i = Object(u.d)("Failed to reset stream key.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to reset stream key", t), this.setState({
                                            streamKeyError: i,
                                            resetKeyState: Te.a.Error
                                        })), this.resetStreamKeyTimeout = setTimeout(function() {
                                            return s.setState({
                                                resetKeyState: null,
                                                streamKeyError: null
                                            })
                                        }, Ke), [2]
                                }
                            })
                        })
                    }, t.setSaveVods = function() {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, a, i, s, l, c;
                            return o.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!this.props.user || !this.state.channelProperties) return [2];
                                        this.setState({
                                            saveVodsSaving: !0
                                        }), r = "/v5/channels/" + this.props.user.id + "/channel_properties", o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, Q.a.put(r, {
                                            body: {
                                                save_vods: !this.state.channelProperties.saveVods
                                            }
                                        })];
                                    case 2:
                                        return n = o.sent(), this.setState({
                                            channelProperties: this.deserializeChannelProperties(n),
                                            saveVodsSaving: !1
                                        }), [3, 4];
                                    case 3:
                                        return a = o.sent(), e = a, [3, 4];
                                    case 4:
                                        return n && n.error && (e = new Error("Channel Properties Settings error"), t = n.error), e ? (i = Object(u.d)("Failed to update broadcast preference.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to update vods preference", t), this.setState({
                                            saveVodsError: i,
                                            saveVodsState: Te.a.Error,
                                            saveVodsSaving: !1
                                        }), [2]) : (s = u.o.getLastPageview(), l = null, c = null, s && (l = s.medium || null, c = s.content || null), Object(Le.f)({
                                            settingName: Le.b.StorePastBroadcasts,
                                            settingValue: this.state.channelProperties.saveVods.toString(),
                                            content: c,
                                            medium: l,
                                            channelID: this.props.user.id
                                        }), [2])
                                }
                            })
                        })
                    }, t.setLatencyPreference = function(e) {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, a, i, s;
                            return o.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!this.props.user || !this.state.channelProperties) return [2];
                                        this.setState({
                                            latencyPrefState: Te.a.Loading
                                        }), a = "/v5/channels/" + this.props.user.id + "/channel_properties", o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, Q.a.put(a, {
                                            body: {
                                                latency: e
                                            }
                                        })];
                                    case 2:
                                        return r = o.sent(), this.setState({
                                            channelProperties: this.deserializeChannelProperties(r),
                                            latencyPrefState: Te.a.Success
                                        }), [3, 4];
                                    case 3:
                                        return i = o.sent(), t = i, [3, 4];
                                    case 4:
                                        return r && r.error && (t = new Error("Channel Properties Settings error"), n = r.error), t ? (s = Object(u.d)("Failed to update optimization preference.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(t, "Failed to update latency preference", n), this.setState({
                                            latencyPrefError: s,
                                            latencyPrefState: Te.a.Error
                                        }), [2]) : [2]
                                }
                            })
                        })
                    }, t.setResilientIngestPreference = function(e) {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, a, i, s, l, c;
                            return o.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!this.props.user || !this.state.channelProperties) return [2];
                                        e === He.BackupSlate ? (t = 0, n = Ze) : e === He.BackupIngest ? (t = Qe, n = 0) : e === He.Off && (t = 0, n = 0), this.setState({
                                            resilientIngestState: Te.a.Loading
                                        }), s = "/v5/channels/" + this.props.user.id + "/channel_properties", o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, Q.a.put(s, {
                                            body: {
                                                num_backup_streams_allowed: t,
                                                disconnect_slate_duration: n
                                            }
                                        })];
                                    case 2:
                                        return i = o.sent(), this.setState({
                                            channelProperties: this.deserializeChannelProperties(i),
                                            resilientIngestState: Te.a.Success
                                        }), [3, 4];
                                    case 3:
                                        return l = o.sent(), r = l, [3, 4];
                                    case 4:
                                        return i && i.error && (r = new Error("Channel Properties Settings error"), a = i.error), r ? (c = Object(u.d)("Failed to update ingest resilience preference. Please refresh the page and try again.", "ResilienceStreamKeySettingsForm"), this.logger.error(r, "Failed to update ingest resilience preference", a), this.setState({
                                            resilientIngestState: Te.a.Error,
                                            resilientIngestError: c
                                        }), [2]) : [2]
                                }
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.fetchChannelProperties()
                }, t.prototype.render = function() {
                    return s.createElement(Ye, {
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
            var $e, et = Object(a.connect)(function(e) {
                    return {
                        user: Object(i.e)(e)
                    }
                })(Je),
                tt = n("oJmH"),
                nt = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.dropsSettingsError) return s.createElement(_.a, null, s.createElement(V.a, null, s.createElement(x.W, {
                            color: x.O.Error
                        }, this.props.dropsSettingsError)));
                        var e = s.createElement(x.U, {
                                to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                            }, Object(u.d)("Learn more", "DropSettingsForm")),
                            t = Object(u.d)("Alert your viewers when they have a chance to earn in-game loot. {learnMoreLink}", {
                                learnMoreLink: e
                            }, "DropSettingsForm");
                        return s.createElement(_.a, null, s.createElement(xe.a, {
                            label: Object(u.d)("Drops", "DropSettingsForm"),
                            showPlaceholder: null === this.props.requestState || this.props.requestState === Te.a.Loading,
                            checked: !!this.props.isDropsEnabled,
                            onChange: this.props.handleDropSettingsToggle,
                            description: t,
                            id: "drops-settings-toggle"
                        }))
                    }, t
                }(s.Component),
                rt = Object(E.b)("DropsSettingsForm")(nt),
                at = n("NmtA"),
                it = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isDropsEnabled: null,
                            dropsSettingsError: null,
                            requestState: null
                        }, t.logger = u.p.logger.withCategory("stream-key-settings"), t.fetchDrops = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, a, i, s;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (null !== this.state.requestState || !e.data || !e.data.user) return [2];
                                            this.setState({
                                                requestState: Te.a.Loading
                                            }), a = "/kraken/channels/" + e.data.user.id + "/vhs", o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), [4, Q.a.get(a)];
                                        case 2:
                                            return (r = o.sent()).body && this.setState({
                                                isDropsEnabled: !r.body.opt_out_status,
                                                requestState: Te.a.Success
                                            }), [3, 4];
                                        case 3:
                                            return i = o.sent(), t = i, [3, 4];
                                        case 4:
                                            return r && r.error && (t = new Error("Drops Settings error"), n = r.error), t ? (s = Object(u.d)("Failed to load Drops.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(t, "Failed to load channel data", n), this.setState({
                                                dropsSettingsError: s
                                            }), [2]) : [2]
                                    }
                                })
                            })
                        }, t.toggleDropsSetting = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, a, i;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (!this.props.data || !this.props.data.user) return [2];
                                            this.setState({
                                                requestState: Te.a.Loading
                                            }), r = "/kraken/channels/" + this.props.data.user.id + "/vhs", o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 6, , 7]), this.state.isDropsEnabled ? [4, Q.a.delete(r)] : [3, 3];
                                        case 2:
                                            return n = o.sent(), [3, 5];
                                        case 3:
                                            return [4, Q.a.put(r)];
                                        case 4:
                                            n = o.sent(), o.label = 5;
                                        case 5:
                                            return this.setState({
                                                isDropsEnabled: !this.state.isDropsEnabled,
                                                requestState: Te.a.Success
                                            }), [3, 7];
                                        case 6:
                                            return a = o.sent(), e = a, [3, 7];
                                        case 7:
                                            return n && n.error && (e = new Error("Drops Settings error"), t = n.error), e ? (i = Object(u.d)("Failed to update drops.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to update drops preference", t), this.setState({
                                                dropsSettingsError: i,
                                                requestState: Te.a.Error
                                            }), [2]) : [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.fetchDrops(this.props)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.fetchDrops(e)
                    }, t.prototype.render = function() {
                        return s.createElement(rt, {
                            isDropsEnabled: this.state.isDropsEnabled,
                            dropsSettingsError: this.state.dropsSettingsError,
                            requestState: this.state.requestState,
                            handleDropSettingsToggle: this.toggleDropsSetting
                        })
                    }, t
                }(s.Component),
                ot = Object(tt.compose)(Object(f.a)(at, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }))(it),
                st = function(e) {
                    return s.createElement(s.Fragment, null, s.createElement(ke.a, {
                        title: Object(u.d)("Permissions", "DashboardSettings")
                    }), s.createElement(x.Eb, {
                        background: x.r.Base,
                        border: !0,
                        borderRadius: x.x.Large,
                        margin: {
                            bottom: 4
                        }
                    }, s.createElement(Ie.a, {
                        text: Object(u.d)("Channels you can manage as an editor", "ChannelPermissionsSettings"),
                        description: Object(u.d)("As an editor, you can access a channel's Dashboard", "ChannelPermissionsSettings"),
                        linkTo: "/" + e.channelLogin + "/dashboard/settings/managed-channels"
                    }), s.createElement(Ie.a, {
                        text: Object(u.d)("People who can stream to your channel", "ChannelPermissionsSettings"),
                        description: Object(u.d)("When you invite someone to stream on your channel, we'll send them a new stream key and instructions", "ChannelPermissionsSettings"),
                        linkTo: "/" + e.channelLogin + "/dashboard/settings/authorized-streamers"
                    })))
                },
                lt = n("pXWX"),
                ct = n.n(lt);
            n("bS3I");
            ! function(e) {
                e.AcceptLink = "team-invitations-item__accept-link", e.DeclineLink = "team-invitations-item__decline-link"
            }($e || ($e = {}));
            var dt, ut = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onDeclineClicked = function() {
                            t.props.declineInvitation(t.props.index)
                        }, t.onAcceptClick = function() {
                            t.props.acceptInvitation(t.props.index)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = Object(u.d)("Accept", "TeamInvitationsItem"),
                            t = Object(u.d)("Decline", "TeamInvitationsItem");
                        return s.createElement(x.Xa, o.__assign({
                            padding: {
                                y: 1,
                                x: 1
                            }
                        }, Object(de.a)(this.props), {
                            className: "team-invitations-item"
                        }), s.createElement(x.G, {
                            row: !0
                        }, s.createElement(x.Xa, {
                            className: "team-invitations-item__avatar"
                        }, s.createElement(x.o, {
                            ratio: x.p.Aspect1x1
                        }, s.createElement(E.a, {
                            src: this.props.invitation.logo || ct.a,
                            alt: Object(u.d)("{displayName} Team Logo", {
                                displayName: this.props.invitation.displayName
                            }, "TeamInvitationsItem")
                        }))), s.createElement(x.Xa, {
                            flexGrow: 1,
                            display: x.X.Flex,
                            position: x.jb.Relative
                        }, s.createElement(x.Pa, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, s.createElement(x.W, {
                            type: x.Vb.Span,
                            ellipsis: !0
                        }, this.props.invitation.name))), s.createElement(x.Xa, {
                            padding: {
                                right: 2
                            }
                        }, s.createElement(x.z, {
                            ariaLabel: e,
                            onClick: this.onAcceptClick,
                            type: x.F.Success,
                            "data-test-selector": $e.AcceptLink
                        }, e)), s.createElement(x.Xa, null, s.createElement(x.z, {
                            ariaLabel: t,
                            onClick: this.onDeclineClicked,
                            type: x.F.Alert,
                            "data-test-selector": $e.DeclineLink
                        }, t))))
                    }, t
                }(s.Component),
                pt = Object(E.b)("TeamInvitationsItem")(ut),
                ht = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this;
                        return this.props.invitations.length < 1 && !this.props.formErrorMessage ? null : s.createElement(Oe.a, {
                            label: Object(u.d)("Invitations", "TeamInvitations"),
                            error: !!this.props.formErrorMessage,
                            errorMessage: this.props.formErrorMessage
                        }, this.props.invitations.map(function(t, n) {
                            return s.createElement(pt, {
                                key: t.name,
                                invitation: t,
                                index: n,
                                acceptInvitation: e.props.acceptInvitation,
                                declineInvitation: e.props.declineInvitation
                            })
                        }))
                    }, t
                }(s.Component),
                mt = Object(E.b)("TeamInvitations")(ht);
            n("b/5F");
            ! function(e) {
                e.EditLink = "team-manager-item__edit-link", e.ViewLink = "team-manager-item__view-link"
            }(dt || (dt = {}));
            var gt = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return s.createElement(x.Xa, o.__assign({
                            padding: {
                                y: 1,
                                x: 1
                            }
                        }, Object(de.a)(this.props), {
                            className: "team-manager-item"
                        }), s.createElement(x.G, {
                            row: !0
                        }, s.createElement(x.Eb, {
                            className: "team-manager-item__avatar",
                            borderRadius: x.x.Medium,
                            overflow: x.cb.Hidden
                        }, s.createElement(x.o, {
                            ratio: x.p.Aspect1x1
                        }, s.createElement(E.a, {
                            src: this.props.team.logo || ct.a,
                            alt: Object(u.d)("{displayName} Team Logo", {
                                displayName: this.props.team.displayName
                            }, "TeamManagerItem")
                        }))), s.createElement(x.Xa, {
                            flexGrow: 1,
                            display: x.X.Flex,
                            position: x.jb.Relative
                        }, s.createElement(x.Pa, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, s.createElement(x.W, {
                            type: x.Vb.Span,
                            ellipsis: !0
                        }, this.props.team.name))), s.createElement(x.Xa, {
                            padding: {
                                right: 2
                            }
                        }, s.createElement(x.U, {
                            to: "/teams/" + this.props.team.name + "/dashboard",
                            "data-test-selector": dt.EditLink
                        }, Object(u.d)("Edit", "TeamManagerItem"))), s.createElement(x.Xa, null, s.createElement(x.U, {
                            to: "/team/" + this.props.team.name,
                            "data-test-selector": dt.ViewLink
                        }, Object(u.d)("View", "TeamManagerItem")))))
                    }, t
                }(s.Component),
                ft = Object(E.b)("TeamManagerItem")(gt),
                bt = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.teams.length < 1 && !this.props.formErrorMessage ? null : s.createElement(Oe.a, {
                            label: Object(u.d)("Manager", "TeamManager"),
                            error: !!this.props.formErrorMessage,
                            errorMessage: this.props.formErrorMessage
                        }, this.props.teams.map(function(e) {
                            return s.createElement(ft, {
                                key: e.name,
                                team: e
                            })
                        }))
                    }, t
                }(s.Component),
                vt = Object(E.b)("TeamManager")(bt),
                yt = n("fbdC"),
                St = n("aCAx"),
                Et = function(e) {
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
                    return o.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(x.A, o.__assign({}, this.props, {
                            onClick: this.handleClick
                        }))
                    }, t
                }(s.Component);
            var Ct = Object(a.connect)(null, function(e) {
                    return {
                        showModal: function(t) {
                            return e(Object(St.d)(yt.a, t))
                        }
                    }
                })(Et),
                _t = (n("irnM"), function(e) {
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
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = Object(u.d)("Remove", "TeamMembershipsItem"),
                            t = Object(u.d)("Do you want to remove yourself from this team?", "TeamMembershipsItem"),
                            n = null;
                        return this.props.showPrimaryInput && (n = s.createElement(x.Xa, {
                            padding: {
                                right: 2
                            }
                        }, s.createElement(x.pb, {
                            "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_PRIMARY_INPUT",
                            name: "team-memberships-main-radio",
                            onChange: this.onChangePrimary,
                            label: Object(u.d)("Main", "TeamMembershipsItem"),
                            disabled: this.props.updating,
                            checked: this.props.membership.primary
                        }))), s.createElement(x.Xa, o.__assign({
                            padding: {
                                y: 1,
                                x: 1
                            }
                        }, Object(de.a)(this.props), {
                            className: "team-memberships-item"
                        }), s.createElement(x.G, {
                            row: !0
                        }, s.createElement(x.Eb, {
                            className: "team-memberships-item__avatar",
                            flexShrink: 0,
                            borderRadius: x.x.Medium,
                            overflow: x.cb.Hidden
                        }, s.createElement(x.o, {
                            ratio: x.p.Aspect1x1
                        }, s.createElement(E.a, {
                            src: this.props.membership.team.logo || ct.a,
                            alt: Object(u.d)("{displayName} Team Logo", {
                                displayName: this.props.membership.team.displayName
                            }, "TeamMembershipsItem")
                        }))), s.createElement(x.Xa, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1,
                            position: x.jb.Relative,
                            ellipsis: !0
                        }, s.createElement(x.U, {
                            to: "/team/" + this.props.membership.team.name
                        }, s.createElement(x.W, {
                            type: x.Vb.Span,
                            ellipsis: !0
                        }, this.props.membership.team.displayName))), s.createElement(x.Xa, {
                            padding: {
                                right: 2
                            }
                        }, s.createElement(x.N, {
                            "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_STATS_INPUT",
                            onChange: this.onChangeStats,
                            label: Object(u.d)("Stats", "TeamMembershipsItem"),
                            disabled: this.props.updating,
                            checked: this.props.membership.statsRevealed
                        })), s.createElement(x.Xa, {
                            padding: {
                                right: 2
                            }
                        }, s.createElement(x.N, {
                            "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_REVENUE_INPUT",
                            onChange: this.onChangeRevenue,
                            label: Object(u.d)("Revenue", "TeamMembershipsItem"),
                            disabled: this.props.updating,
                            checked: this.props.membership.revenueRevealed
                        })), n, s.createElement(x.Yb, {
                            label: e
                        }, s.createElement(Ct, {
                            ariaLabel: e,
                            icon: x.tb.Trash,
                            onConfirmClick: this.onClickRemove,
                            disabled: this.props.updating,
                            message: s.createElement(x.W, {
                                fontSize: x.Ca.Size4
                            }, t),
                            confirmButton: s.createElement(x.z, {
                                type: x.F.Alert
                            }, Object(u.d)("Leave Team", "TeamMembershipsItem"))
                        }))))
                    }, t
                }(s.Component)),
                wt = Object(E.b)("TeamMembershipsItem")(_t),
                kt = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this;
                        return this.props.memberships.length < 1 && !this.props.formErrorMessage ? null : s.createElement(Oe.a, {
                            label: Object(u.d)("Member", "TeamMemberships"),
                            error: !!this.props.formErrorMessage,
                            errorMessage: this.props.formErrorMessage
                        }, this.props.memberships.map(function(t, n) {
                            return s.createElement(wt, {
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
                Ot = Object(E.b)("TeamMemberships")(kt),
                It = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return s.createElement(_.a, null, s.createElement(vt, {
                            teams: this.props.managedTeams,
                            formErrorMessage: this.props.managedError
                        }), s.createElement(mt, {
                            invitations: this.props.invitations,
                            acceptInvitation: this.props.acceptInvitation,
                            declineInvitation: this.props.declineInvitation,
                            formErrorMessage: this.props.invitationsError
                        }), s.createElement(Ot, {
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
                xt = Object(E.b)("TeamSettings")(It),
                Tt = function(e) {
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
                        }, t.logger = u.p.logger.withCategory("team-settings"), t.deleteMembership = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, a, i, s, l;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (!this.props.user || 0 === this.state.memberships.length) return [2];
                                            this.setState({
                                                updatingToggles: !0
                                            }), a = this.state.memberships[e], i = "/v5/channels/" + this.props.user.id + "/teams/" + a.team.name + "/membership", o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), [4, Q.a.deleteOrThrow(i)];
                                        case 2:
                                            return r = o.sent(), [3, 4];
                                        case 3:
                                            return s = o.sent(), t = s, [3, 4];
                                        case 4:
                                            return r && r.error && (t = new Error("Team Memberships error"), n = r.error), t ? (l = Object(u.d)("Unable to remove team membership", "TeamMemberships"), this.logger.error(t, l, n), this.setState({
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
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, a, i, s = this;
                                return o.__generator(this, function(l) {
                                    switch (l.label) {
                                        case 0:
                                            if (this.state.memberships[e].primary) return [2];
                                            this.setState({
                                                updatingToggles: !0
                                            }), l.label = 1;
                                        case 1:
                                            return l.trys.push([1, 3, , 4]), [4, this.putChannelsMembership(o.__assign({}, this.state.memberships[e], {
                                                primary: !0
                                            }))];
                                        case 2:
                                            return n = l.sent(), [3, 4];
                                        case 3:
                                            return a = l.sent(), t = a, [3, 4];
                                        case 4:
                                            return n && n.error && (t = new Error("Team Memberships error"), r = n.error), t ? (i = Object(u.d)("Unable to update main team", "TeamMemberships"), this.logger.error(t, i, r), this.setState({
                                                membershipsError: i,
                                                updatingToggles: !1
                                            }), [2]) : (this.setState(function(t) {
                                                var n = s.state.memberships.findIndex(function(e) {
                                                        return e.primary
                                                    }),
                                                    r = H(t.memberships, function(t) {
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
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, a, i;
                                return o.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            this.setState({
                                                updatingToggles: !0
                                            }), s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, this.putChannelsMembership(o.__assign({}, this.state.memberships[e], {
                                                revenueRevealed: !this.state.memberships[e].revenueRevealed
                                            }))];
                                        case 2:
                                            return n = s.sent(), [3, 4];
                                        case 3:
                                            return a = s.sent(), t = a, [3, 4];
                                        case 4:
                                            return n && n.error && (t = new Error("Team Memberships error"), r = n.error), t ? (i = Object(u.d)("Unable to update revenue preferences", "TeamMemberships"), this.logger.error(t, i, r), this.setState({
                                                membershipsError: i,
                                                updatingToggles: !1
                                            }), [2]) : (this.setState(function(t) {
                                                return {
                                                    memberships: H(t.memberships, function(t) {
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
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, a, i;
                                return o.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            this.setState({
                                                updatingToggles: !0
                                            }), s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, this.putChannelsMembership(o.__assign({}, this.state.memberships[e], {
                                                statsRevealed: !this.state.memberships[e].statsRevealed
                                            }))];
                                        case 2:
                                            return n = s.sent(), [3, 4];
                                        case 3:
                                            return a = s.sent(), t = a, [3, 4];
                                        case 4:
                                            return n && n.error && (t = new Error("Team Memberships error"), r = n.error), t ? (i = Object(u.d)("Unable to update stats preferences", "TeamMemberships"), this.logger.error(t, i, r), this.setState({
                                                membershipsError: i,
                                                updatingToggles: !1
                                            }), [2]) : (this.setState(function(t) {
                                                return {
                                                    memberships: H(t.memberships, function(t) {
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
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.props.user ? (t = "/v5/channels/" + this.props.user.id + "/teams/" + e.team.name + "/membership", [4, Q.a.put(t, {
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
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, a, i;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (!this.props.user) return [2];
                                            r = "/v5/channels/" + this.props.user.id + "/memberships", o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), [4, Q.a.get(r)];
                                        case 2:
                                            return t = o.sent(), this.setState({
                                                memberships: this.deserializeMemberships(t),
                                                updatingToggles: !1
                                            }), [3, 4];
                                        case 3:
                                            return a = o.sent(), e = a, [3, 4];
                                        case 4:
                                            return t && t.error && (e = new Error("Team Memberships error"), n = t.error), e ? (i = Object(u.d)("Failed to load Team data.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to load Team data", n), this.setState({
                                                membershipsError: i
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
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r;
                                return o.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.props.user) return [2];
                                            e = "/v5/channels/" + this.props.user.id + "/invitations", a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, Q.a.getOrThrow(e)];
                                        case 2:
                                            return t = a.sent(), this.setState({
                                                invitations: this.deserializeInvitations(t)
                                            }), [3, 4];
                                        case 3:
                                            return n = a.sent(), r = Object(u.d)("Failed to load Team data.  Please refresh the page and try again", "TeamInvitations"), this.logger.error(n, "Failed to load Team data"), this.setState({
                                                invitationsError: r
                                            }), [2];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.declineInvitation = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this.respondToInvitation(e, !1)];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        }, t.acceptInvitation = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this.respondToInvitation(e, !0)];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        }, t.respondToInvitation = function(e, n) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t, r, a, i, s, l, c;
                                return o.__generator(this, function(d) {
                                    switch (d.label) {
                                        case 0:
                                            if (!this.props.user || 0 === this.state.invitations.length) return [2];
                                            this.setState({
                                                updatingInvitations: !0
                                            }), i = this.state.invitations[e], s = "/v5/channels/" + this.props.user.id + "/teams/" + i.name + "/invitation", d.label = 1;
                                        case 1:
                                            return d.trys.push([1, 3, , 4]), [4, Q.a.put(s, {
                                                body: {
                                                    accepted: n
                                                }
                                            })];
                                        case 2:
                                            return a = d.sent(), [3, 4];
                                        case 3:
                                            return l = d.sent(), t = l, [3, 4];
                                        case 4:
                                            return a && a.error && (t = new Error("Team Invitations error"), r = a.error), t ? (c = Object(u.d)("Unable to respond to invitation", "TeamInvitations"), this.logger.error(t, c, r), this.setState({
                                                invitationsError: c,
                                                updatingInvitations: !1
                                            }), [2]) : (this.setState(function(t) {
                                                var r = t.invitations.slice();
                                                r.splice(e, 1);
                                                var a = t.memberships.slice();
                                                return n && a.push({
                                                    team: o.__assign({}, i),
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
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r;
                                return o.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.props.user) return [2];
                                            e = "/v5/users/" + this.props.user.id + "/teams", a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, Q.a.getOrThrow(e)];
                                        case 2:
                                            return t = a.sent(), this.setState({
                                                managedTeams: this.deserializeTeams(t)
                                            }), [3, 4];
                                        case 3:
                                            return n = a.sent(), r = Object(u.d)("Failed to load Team data.  Please refresh the page and try again", "TeamManager"), this.logger.error(n, "Failed to load Team data"), this.setState({
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
                    return o.__extends(t, e), t.prototype.componentWillMount = function() {
                        this.fetchTeamsMembership(), this.fetchInvitations(), this.fetchManagedTeams()
                    }, t.prototype.render = function() {
                        return this.hasTeamContentToShow() ? s.createElement(s.Fragment, null, s.createElement(ke.a, {
                            title: Object(u.d)("My Teams", "TeamMemberships"),
                            description: Object(u.d)("Manage your teams here", "TeamMemberships")
                        }), s.createElement(xt, {
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
            var Rt, Dt = Object(a.connect)(function(e) {
                    return {
                        user: Object(i.e)(e)
                    }
                })(Tt),
                Pt = n("4rCz"),
                jt = n("7lJP"),
                Mt = n("94Uw"),
                Lt = n("Ww25"),
                Ft = n("FEav");
            ! function(e) {
                e.Banner = "upload-video-player__banner", e.OfflineImage = "upload-video-player__offline-image", e.ErrorMessage = "upload-video-player__error-message"
            }(Rt || (Rt = {}));
            var At = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            deletionError: !1,
                            working: !1
                        }, t.onClickDelete = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!(this.props.data && this.props.data.user && this.props.data.user.id)) return [2];
                                            this.setState({
                                                working: !0
                                            }), e = !1, t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, Q.a.putOrThrow("/kraken/users/" + this.props.data.user.id + "/default_images?client_id=" + u.a.authSettings.clientID + "&api_version=" + u.a.defaultAPIVersion, {
                                                body: {
                                                    default_channel_offline_image: "empty_channel_offline_image"
                                                }
                                            })];
                                        case 2:
                                            return t.sent(), Object(Ae.e)(Ft, {
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
                            e && t.props.showModal(jt.UserImageUploader, {
                                userID: e.id,
                                login: e.login,
                                displayName: e.displayName,
                                imageType: Mt.a.ChannelOfflineImage,
                                showCloser: !0,
                                successCallback: t.imageUploaded
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = null,
                            t = null;
                        if (this.props.data && this.props.data.user && this.props.data.user.offlineImageURL) {
                            e = s.createElement("img", {
                                "data-test-selector": Rt.OfflineImage,
                                height: 90,
                                width: 160,
                                src: this.props.data.user.offlineImageURL
                            });
                            var n = Object(Pt.d)("Remove my Video Player Banner Image", "UploadVideoPlayerBanner");
                            t = s.createElement(x.Xa, {
                                margin: {
                                    x: 2
                                }
                            }, s.createElement(x.A, {
                                ariaLabel: n,
                                disabled: this.state.working,
                                icon: x.tb.Trash,
                                onClick: this.onClickDelete
                            }))
                        } else e = s.createElement(x.sb, {
                            asset: x.tb.Camera,
                            type: x.ub.Alt2,
                            height: 90,
                            width: 160
                        });
                        return s.createElement(x.Xa, null, s.createElement(ke.a, {
                            title: Object(Pt.d)("Video Player Banner", "UploadVideoPlayerBanner"),
                            description: Object(Pt.d)("This is displayed on the player when your channel is offline.", "UploadVideoPlayerBanner")
                        }), s.createElement(_.a, null, s.createElement(V.a, null, s.createElement(x.Xa, {
                            display: x.X.Flex
                        }, s.createElement(x.Eb, {
                            borderRadius: x.x.Medium,
                            overflow: x.cb.Hidden
                        }, e), s.createElement(x.Xa, {
                            padding: {
                                left: 2,
                                top: 1
                            }
                        }, s.createElement(x.Xa, {
                            display: x.X.Flex
                        }, s.createElement(x.z, {
                            "data-test-selector": Rt.Banner,
                            onClick: this.showModal,
                            type: x.F.Hollow
                        }, s.createElement(x.Xa, {
                            padding: {
                                x: 1
                            }
                        }, Object(Pt.d)("Update", "UploadVideoPlayerBanner"))), t), s.createElement(Lt.a, {
                            text: Object(Pt.d)("Max 10mb GIF, JPG, or PNG", "UploadVideoPlayerBanner")
                        }), this.state.deletionError && s.createElement(x.W, {
                            color: x.O.Error,
                            "data-test-selector": Rt.ErrorMessage
                        }, Object(Pt.d)("Sorry, something went wrong. Please try again later.", "UploadVideoPlayerBanner")))))))
                    }, t
                }(s.Component),
                Nt = Object(f.a)(Ft, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.user && e.user.login
                            }
                        }
                    }
                })(At);
            var Ut, Xt = Object(a.connect)(function(e) {
                    return {
                        user: Object(i.e)(e)
                    }
                }, function(e) {
                    return Object(m.bindActionCreators)({
                        showModal: St.d
                    }, e)
                })(Nt),
                Bt = function(e) {
                    return s.createElement(Oe.a, {
                        orientation: x.Fa.Horizontal,
                        label: Object(u.d)("Followers-only mode", "DashboardSettingsModPrefFollowersOnly")
                    }, s.createElement(x.Xa, {
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(x.Xa, {
                        display: x.X.Flex
                    }, s.createElement(x.Xa, null, s.createElement(x.zb, {
                        onChange: e.onSetFollowersOnlyDuration,
                        value: e.followersOnlyDurationSeconds.toString()
                    }, s.createElement("option", {
                        value: ne.FollowersDurationSeconds.Off
                    }, Object(u.d)("Off", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                        value: ne.FollowersDurationSeconds.TenMinutes
                    }, Object(u.d)("10 Minutes", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                        value: ne.FollowersDurationSeconds.ThirtyMinutes
                    }, Object(u.d)("30 Minutes", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                        value: ne.FollowersDurationSeconds.OneHour
                    }, Object(u.d)("1 Hour", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                        value: ne.FollowersDurationSeconds.OneDay
                    }, Object(u.d)("1 Day", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                        value: ne.FollowersDurationSeconds.OneWeek
                    }, Object(u.d)("1 Week", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                        value: ne.FollowersDurationSeconds.OneMonth
                    }, Object(u.d)("1 Month", "DashboardSettingsModPrefFollowersOnly")), s.createElement("option", {
                        value: ne.FollowersDurationSeconds.ThreeMonths
                    }, Object(u.d)("3 Months", "DashboardSettingsModPrefFollowersOnly"))))), s.createElement(Lt.a, {
                        text: Object(u.d)("When enabled, viewers must follow you for the specified amount of time before they are allowed to post messages on your videos.", "DashboardSettingsModPrefFollowersOnly")
                    })))
                },
                Wt = function(e) {
                    return s.createElement(Oe.a, {
                        orientation: x.Fa.Horizontal,
                        label: Object(u.d)("Messages on videos", "DashboardSettingsModPrefMessages")
                    }, s.createElement(x.Xa, {
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(x.pb, {
                        disabled: e.requestState === Te.a.Loading,
                        checked: e.publishingMode === ne.ChommentsPublishingMode.Open,
                        onChange: e.onSetPublishingMode,
                        label: Object(u.d)("Allow all messages on videos except for those caught by AutoMod", "DashboardSettingsModPrefMessages"),
                        name: "chommentsPublishingMode",
                        value: ne.ChommentsPublishingMode.Open
                    })), s.createElement(x.Xa, {
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(x.pb, {
                        disabled: e.requestState === Te.a.Loading,
                        checked: e.publishingMode === ne.ChommentsPublishingMode.Review,
                        onChange: e.onSetPublishingMode,
                        label: Object(u.d)("Hold all messages on videos for review", "DashboardSettingsModPrefMessages"),
                        name: "chommentsPublishingMode",
                        value: ne.ChommentsPublishingMode.Review
                    })), s.createElement(x.Xa, {
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(x.pb, {
                        disabled: e.requestState === Te.a.Loading,
                        checked: e.publishingMode === ne.ChommentsPublishingMode.Disabled,
                        onChange: e.onSetPublishingMode,
                        label: Object(u.d)("Disable all messages on videos", "DashboardSettingsModPrefMessages"),
                        name: "chommentsPublishingMode",
                        value: ne.ChommentsPublishingMode.Disabled
                    })))
                },
                zt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleSetPublishingMode = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(t) {
                                    return this.props.saveSettings({
                                        publishingMode: e.currentTarget.value
                                    }), [2]
                                })
                            })
                        }, t.handleSetFollowersOnlyDuration = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(t) {
                                    return this.props.saveSettings({
                                        followersOnlyDurationSeconds: Number(e.currentTarget.value)
                                    }), [2]
                                })
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return s.createElement(x.Xa, null, s.createElement(ke.a, {
                            title: Object(u.d)("Video Moderation", "DashboardSettingsModPref")
                        }), s.createElement(_.a, null, this.props.requestState === Te.a.Error && s.createElement(V.a, null, s.createElement(x.W, {
                            color: x.O.Error
                        }, Object(u.d)("Something went wrong. Give it another try later.", "DashboardSettingsModPrefMessagesError"))), s.createElement(Wt, {
                            onSetPublishingMode: this.handleSetPublishingMode,
                            publishingMode: this.props.moderationSettings.publishingMode,
                            requestState: this.props.requestState
                        }), s.createElement(Bt, {
                            onSetFollowersOnlyDuration: this.handleSetFollowersOnlyDuration,
                            followersOnlyDurationSeconds: this.props.moderationSettings.followersOnlyDurationSeconds
                        })))
                    }, t
                }(s.Component),
                qt = Object(E.b)("VideoModerationSettings")(zt),
                Kt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            moderationSettings: ne.DEFAULT_VIDEO_MODERATION_SETTINGS,
                            requestState: ne.RequestState.Loading
                        }, t.logger = u.p.logger.withCategory("followers-only-settings-form"), t.saveSettings = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return o.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return this.setState({
                                                requestState: ne.RequestState.Loading
                                            }), [4, function(e, t) {
                                                return o.__awaiter(this, void 0, Promise, function() {
                                                    var n;
                                                    return o.__generator(this, function(r) {
                                                        switch (r.label) {
                                                            case 0:
                                                                return [4, Q.a.put("/kraken/videos/channels/" + e + "/settings", {
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
                                                                    moderationSettings: re(n.body)
                                                                }]
                                                        }
                                                    })
                                                })
                                            }(this.props.channelID, o.__assign({}, this.state.moderationSettings, e))];
                                        case 1:
                                            return (t = r.sent()).isError ? (this.setState({
                                                requestState: ne.RequestState.Error
                                            }), n = new Error("Channel Properties Settings error"), this.logger.error(n, "Failed to load channel data", t.error)) : this.setState({
                                                moderationSettings: t.moderationSettings,
                                                requestState: ne.RequestState.Success
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return o.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, function(e) {
                                            return o.__awaiter(this, void 0, Promise, function() {
                                                var t;
                                                return o.__generator(this, function(n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return [4, Q.a.get("/kraken/videos/channels/" + e + "/settings")];
                                                        case 1:
                                                            return (t = n.sent()).error || t.requestError ? [2, {
                                                                isError: !0,
                                                                moderationSettings: void 0
                                                            }] : [2, {
                                                                isError: !1,
                                                                moderationSettings: re(t.body)
                                                            }]
                                                    }
                                                })
                                            })
                                        }(this.props.channelID)];
                                    case 1:
                                        return (e = t.sent()).isError ? this.setState({
                                            requestState: ne.RequestState.Error
                                        }) : this.setState({
                                            moderationSettings: e.moderationSettings,
                                            requestState: ne.RequestState.Success
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return s.createElement(qt, {
                            moderationSettings: this.state.moderationSettings,
                            requestState: this.state.requestState,
                            saveSettings: this.saveSettings
                        })
                    }, t
                }(s.Component),
                Vt = n("wo8Z"),
                Ht = n("bDCY"),
                Gt = n("HOmj"),
                Yt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isInFlight: !1,
                            isLastRequestErrored: !1
                        }, t.onNewChatterRitualToggled = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t, n, r;
                                return o.__generator(this, function(a) {
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
                                            return a.trys.push([1, 3, , 4]), [4, this.props.toggleRitualsEnabled(Object(Ae.b)(t, n))];
                                        case 2:
                                            return a.sent(), [3, 4];
                                        case 3:
                                            return r = a.sent(), this.setState({
                                                isLastRequestErrored: !0
                                            }), u.k.warn(r, "Failed to toggle ritual"), [3, 4];
                                        case 4:
                                            return this.setState({
                                                isInFlight: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        if (!this.show) return null;
                        var e = this.props.data;
                        return s.createElement(s.Fragment, null, s.createElement(ke.a, {
                            title: Object(u.d)("Viewer milestones", "RitualsSettingsSection")
                        }), s.createElement(_.a, null, s.createElement(xe.a, {
                            showPlaceholder: !e || e.loading,
                            id: "new-chatter-ritual",
                            label: Object(u.d)("New chatter announcements", "RitualsSettingsSection"),
                            checked: !!(e && e.channel && e.channel.settings && e.channel.settings.isRitualsEnabled),
                            description: Object(u.d)("Allow your community to celebrate their first time chatting on your channel.", "RitualsSettingsSection"),
                            disabled: this.state.isInFlight,
                            error: this.state.isLastRequestErrored || !(!e || !e.error),
                            onChange: this.onNewChatterRitualToggled
                        })))
                    }, Object.defineProperty(t.prototype, "show", {
                        get: function() {
                            return Object(Vt.a)() && this.props.data && !this.props.data.error && this.props.data.channel && this.props.data.channel.settings && this.props.data.channel.settings.isRitualsWhitelisted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(s.Component),
                Qt = Object(tt.compose)(Object(f.a)(Ht, {
                    options: function(e) {
                        return {
                            variables: {
                                id: e.channelID
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelID || !Object(Vt.a)()
                    }
                }), Object(f.a)(Gt, {
                    name: "toggleRitualsEnabled"
                }))(Yt),
                Zt = n("4bS+"),
                Jt = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.data.user,
                            n = e.match.params.channelLogin;
                        return s.createElement(L.a, null, s.createElement(ke.a, {
                            title: Object(u.d)("Stream Key & Preferences", "DashboardSettings")
                        }), s.createElement(et, null), s.createElement(st, {
                            channelLogin: n
                        }), s.createElement(Xt, null), s.createElement(Me, {
                            channelName: n
                        }), s.createElement(Dt, null), s.createElement(ke.a, {
                            title: Object(u.d)("Drops", "DashboardSettings")
                        }), s.createElement(ot, {
                            channelName: n
                        }), t && t.id && s.createElement(Kt, {
                            channelID: t.id
                        }), s.createElement(Qt, {
                            channelID: t && t.id
                        }))
                    }, t
                }(s.Component),
                $t = Object(m.compose)(Object(f.a)(Zt, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.match.params.channelLogin
                            }
                        }
                    }
                }), Object(E.b)("DashboardSettingsIndexPage", {
                    autoReportInteractive: !0,
                    destination: y.a.DashboardSettingsIndex
                }), Object(b.a)({
                    location: S.PageviewLocation.DashboardSettingsIndex
                }))(Jt),
                en = n("3iFw"),
                tn = "twilight.dashboard-managed-channels-explanation-dismissed",
                nn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            dismissed: u.m.get(tn, !1)
                        }, t.handleCloseButtonClick = function() {
                            t.setState({
                                dismissed: !0
                            }, function() {
                                u.m.set(tn, !0)
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return this.state.dismissed ? null : s.createElement(x.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(x.P, {
                            cols: 6,
                            offset: 3
                        }, s.createElement(x.Na, {
                            closeButtonAriaLabel: Object(u.d)("Close", "DashboardSettingsEditableChannelsPage"),
                            closeButtonOnClick: this.handleCloseButtonClick,
                            description: Object(u.d)("Editors have permissions to modify settings and carry out key actions on a creator's channel.", "DashboardSettingsEditableChannelsPage"),
                            narrow: !0,
                            title: Object(u.d)("Editor Role", "DashboardSettingsEditableChannelsPage"),
                            type: x.Oa.Neutral
                        })))
                    }, t
                }(s.Component),
                rn = n("rqzT"),
                an = n("NMMG"),
                on = function() {
                    return s.createElement(x.Xa, {
                        alignItems: x.f.Center,
                        display: x.X.Flex,
                        flexDirection: x.Aa.Column,
                        fullHeight: !0,
                        justifyContent: x.Wa.Center
                    }, s.createElement(x.Xa, {
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(x.q, {
                        src: "https://static-cdn.jtvnw.net/emoticons/v1/58127/2.0",
                        alt: Object(u.d)("CoolCat", "ChannelSettingsEditableChannelsPage"),
                        size: 50
                    })), s.createElement(x.W, {
                        color: x.O.Alt2,
                        fontSize: x.Ca.Size5
                    }, Object(u.d)("No channels to display", "ChannelSettingsEditableChannelsPage")))
                },
                sn = n("jreu");
            n("0HR6");
            ! function(e) {
                e.CancelButton = "cancel-button", e.ErrorMessage = "error-message", e.KeepButton = "keep-button", e.RemoveButton = "remove-button", e.RetryButton = "retry-button"
            }(Ut || (Ut = {}));
            var ln, cn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isRequestInFlight: !1,
                            retryable: !1
                        }, t.renderRetry = function() {
                            return s.createElement(s.Fragment, null, s.createElement(dn, null, s.createElement(x.W, {
                                color: x.O.Error,
                                "data-test-selector": Ut.ErrorMessage
                            }, Object(u.d)("Failed to remove yourself as an editor on this channel.", "EditableChannelsRemoveConfirmation"))), s.createElement(un, null, s.createElement(x.Xa, {
                                margin: {
                                    right: .5
                                }
                            }, s.createElement(x.z, {
                                "data-test-selector": Ut.CancelButton,
                                onClick: t.props.onClose,
                                type: x.F.Hollow
                            }, Object(u.d)("Cancel", "EditableChannelsRemoveConfirmation"))), s.createElement(x.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, s.createElement(x.z, {
                                "data-test-selector": Ut.RetryButton,
                                disabled: t.state.isRequestInFlight,
                                onClick: t.onRemoveClick,
                                state: t.state.isRequestInFlight ? x.E.Loading : x.E.Default
                            }, Object(u.d)("Retry", "EditableChannelsRemoveConfirmation")))))
                        }, t.renderConfirmation = function() {
                            var e = t.props.channel,
                                n = t.state.isRequestInFlight;
                            return s.createElement(s.Fragment, null, s.createElement(dn, null, s.createElement(x.q, {
                                alt: e.login,
                                size: 50,
                                src: ie(e)
                            }), s.createElement(x.Xa, {
                                margin: {
                                    top: .5
                                }
                            }, s.createElement(x.W, {
                                color: x.O.Alt2,
                                fontSize: x.Ca.Size5
                            }, e.displayname))), s.createElement(un, null, s.createElement(x.Xa, {
                                margin: {
                                    right: .5
                                }
                            }, s.createElement(x.z, {
                                "data-test-selector": Ut.KeepButton,
                                disabled: n,
                                onClick: t.props.onClose,
                                type: x.F.Hollow
                            }, Object(u.d)("No, Keep", "EditableChannelsRemoveConfirmation"))), s.createElement(x.Xa, {
                                margin: {
                                    left: 1
                                }
                            }, s.createElement(x.z, {
                                "data-test-selector": Ut.RemoveButton,
                                disabled: n,
                                onClick: t.onRemoveClick,
                                state: n ? x.E.Loading : x.E.Default
                            }, Object(u.d)("Yes, Remove", "EditableChannelsRemoveConfirmation")))))
                        }, t.onRemoveClick = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, a;
                                return o.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            e = this.props, t = e.channel.id, n = e.onClose, r = e.onSuccess, a = e.userID, this.setState({
                                                isRequestInFlight: !0
                                            }), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, Object(sn.a)({
                                                channelID: t,
                                                editorID: a
                                            })];
                                        case 2:
                                            return i.sent(), this.setState({
                                                isRequestInFlight: !1
                                            }, function() {
                                                r(t), n()
                                            }), [3, 4];
                                        case 3:
                                            return i.sent(), this.setState({
                                                retryable: !0,
                                                isRequestInFlight: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(x.Eb, {
                            background: x.r.Base,
                            className: "remove-confirmation",
                            elevation: 3
                        }, s.createElement(x.Eb, {
                            borderBottom: !0,
                            display: x.X.Flex,
                            justifyContent: x.Wa.Center,
                            padding: 2
                        }, s.createElement(x.W, {
                            bold: !0,
                            fontSize: x.Ca.Size4
                        }, Object(u.d)("Remove Yourself as an Editor on This Channel?", "EditableChannelsRemoveConfirmation"))), this.state.retryable ? this.renderRetry() : this.renderConfirmation(), s.createElement(w.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(s.Component),
                dn = function(e) {
                    var t = e.children;
                    return s.createElement(x.Xa, {
                        alignItems: x.f.Center,
                        display: x.X.Flex,
                        flexDirection: x.Aa.Column,
                        justifyContent: x.Wa.Center,
                        padding: {
                            y: 2
                        }
                    }, t)
                },
                un = function(e) {
                    var t = e.children;
                    return s.createElement(x.Eb, {
                        background: x.r.Alt,
                        display: x.X.Flex,
                        justifyContent: x.Wa.Center,
                        padding: 2
                    }, t)
                },
                pn = {
                    "data-test-selector": "display-name"
                },
                hn = function(e) {
                    var t = e.channels,
                        n = e.userID;
                    if (0 === t.length) return s.createElement(on, null);
                    var r = Object(u.d)("Remove yourself as an editor", "EditableChannelList");
                    return s.createElement(x.P, {
                        cols: 6,
                        offset: 3
                    }, t.map(function(t) {
                        return s.createElement(x.Eb, {
                            key: t.id,
                            alignItems: x.f.Center,
                            borderBottom: !0,
                            display: x.X.Flex,
                            justifyContent: x.Wa.Between,
                            padding: {
                                bottom: 1,
                                top: 1
                            }
                        }, s.createElement(x.Xa, {
                            display: x.X.Flex,
                            alignItems: x.f.Center
                        }, s.createElement(x.U, {
                            to: "/" + t.login
                        }, s.createElement(x.q, {
                            alt: t.displayname,
                            size: 30,
                            src: ie(t)
                        })), s.createElement(x.Xa, {
                            margin: {
                                left: 1
                            }
                        }, s.createElement(x.U, {
                            to: "/" + t.login
                        }, s.createElement(x.W, o.__assign({}, pn), t.displayname)))), s.createElement(x.Xa, null, s.createElement(x.Xa, {
                            margin: {
                                right: 1
                            },
                            display: x.X.InlineFlex
                        }, s.createElement(x.z, {
                            linkTo: "/" + t.login + "/dashboard/live",
                            type: x.F.Text
                        }, Object(u.d)("Dashboard", "ChannelSettingsEditableChannelsPage"))), s.createElement(x.Xa, {
                            margin: {
                                right: 1
                            },
                            display: x.X.InlineFlex
                        }, s.createElement(rn.a, {
                            isButtonIcon: !0,
                            threadID: Object(an.a)(n, t.id),
                            isPopout: !1
                        })), s.createElement(F.a, {
                            triggerModal: function(r) {
                                return s.createElement(cn, {
                                    channel: t,
                                    onClose: r,
                                    onSuccess: e.onChannelRemoved,
                                    userID: n
                                })
                            }
                        }, function(e) {
                            return s.createElement(x.Yb, {
                                label: r
                            }, s.createElement(x.A, {
                                ariaLabel: r,
                                icon: x.tb.Trash,
                                onClick: e
                            }))
                        })))
                    }))
                },
                mn = function() {
                    return s.createElement(x.Xa, {
                        alignItems: x.f.Center,
                        display: x.X.Flex,
                        flexDirection: x.Aa.Column,
                        fullHeight: !0,
                        justifyContent: x.Wa.Center
                    }, s.createElement(x.Xa, {
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(x.q, {
                        src: "https://static-cdn.jtvnw.net/emoticons/v1/86/2.0",
                        alt: Object(u.d)("BibleThump", "ChannelSettingsEditableChannelsPage"),
                        size: 50
                    })), s.createElement(x.W, {
                        color: x.O.Alt2,
                        fontSize: x.Ca.Size5
                    }, Object(u.d)("An error occurred while loading channels you can manage.", "ChannelSettingsEditableChannelsPage")))
                },
                gn = n("CEZT"),
                fn = n("OZZe");
            n("L7tE");
            ! function(e) {
                e[e.Loading = 0] = "Loading", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
            }(ln || (ln = {}));
            var bn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            editableChannels: [],
                            requestState: ln.Loading
                        }, t.handleChannelRemoved = function(e) {
                            t.setState(function(t) {
                                return {
                                    editableChannels: t.editableChannels.filter(function(t) {
                                        return t.id !== e
                                    })
                                }
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        return o.__awaiter(this, void 0, void 0, function() {
                            return o.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.props.data.loading ? [3, 2] : [4, this.setEditableChannels()];
                                    case 1:
                                        e.sent(), this.props.latencyTracking.reportInteractive(), e.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.componentDidUpdate = function(e) {
                        return o.__awaiter(this, void 0, void 0, function() {
                            return o.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return !e.data.loading || this.props.data.loading ? [3, 2] : [4, this.setEditableChannels()];
                                    case 1:
                                        t.sent(), this.props.latencyTracking.reportInteractive(), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.error,
                            n = e.loading,
                            r = e.user,
                            a = this.state.requestState;
                        if (n || a === ln.Loading) return s.createElement(L.a, null, s.createElement(x.ib, {
                            height: 600
                        }));
                        if (t || !r || !r.login || !r.id) return s.createElement(g.a, null);
                        var i = s.createElement(C.a, {
                            title: Object(u.d)("Channels you can manage as an editor", "ChannelSettingsEditableChannelsPage"),
                            linkToParent: "/" + r.login + "/dashboard/settings"
                        });
                        return s.createElement(s.Fragment, null, s.createElement(L.a, null, s.createElement(_.a, {
                            header: i
                        }, s.createElement(x.Eb, {
                            background: x.r.Base,
                            className: "editable-channels-page",
                            elevation: 1,
                            padding: 2,
                            fullWidth: !0
                        }, a === ln.Success && s.createElement(s.Fragment, null, s.createElement(nn, null), s.createElement(hn, {
                            channels: this.state.editableChannels,
                            onChannelRemoved: this.handleChannelRemoved,
                            userID: r.id
                        })), a === ln.Error && s.createElement(mn, null)))), s.createElement(en.Whispers, null))
                    }, t.prototype.setEditableChannels = function() {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var e, t;
                            return o.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!(e = this.props.data.user) || !e.id) return [2];
                                        n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, Object(gn.a)(e.id)];
                                    case 2:
                                        return t = n.sent(), this.setState({
                                            editableChannels: t,
                                            requestState: ln.Success
                                        }), [3, 4];
                                    case 3:
                                        return n.sent(), this.setState({
                                            requestState: ln.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }(s.Component),
                vn = Object(m.compose)(h.a, Object(f.a)(fn, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.match.params.channelLogin
                            }
                        }
                    }
                }), Object(E.b)("EditableChannelsPage", {
                    destination: y.a.EditableChannels
                }), Object(b.a)({
                    location: S.PageviewLocation.EditableChannels
                }))(bn),
                yn = n("m9vr"),
                Sn = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        u.p.setPageTitle(Object(u.d)("Dashboard Settings", "DashboardSettingsRoot"))
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.match.params.channelLogin,
                            n = e.user;
                        return t !== (n && n.login) ? s.createElement(yn.a, null) : s.createElement(d.a, null, s.createElement(l.a, {
                            exact: !0,
                            path: "/:channelLogin/dashboard/settings/authorized-streamers",
                            component: K
                        }), s.createElement(l.a, {
                            exact: !0,
                            path: "/:channelLogin/dashboard/settings/autohost",
                            component: we
                        }), s.createElement(l.a, {
                            exact: !0,
                            path: "/:channelLogin/dashboard/settings/managed-channels",
                            component: vn
                        }), s.createElement(c.a, {
                            exact: !0,
                            path: "/:channelLogin/dashboard/settings/moderation",
                            to: "/:channelLogin/dashboard/settings"
                        }), s.createElement(c.a, {
                            exact: !0,
                            path: "/:channelLogin/dashboard/settings/streamkey",
                            to: "/:channelLogin/dashboard/settings"
                        }), s.createElement(l.a, {
                            exact: !0,
                            path: "/:channelLogin/dashboard/settings",
                            component: $t
                        }), s.createElement(l.a, {
                            component: p.a
                        }))
                    }, t
                }(s.Component);
            var En = Object(a.connect)(function(e) {
                return {
                    user: Object(i.e)(e)
                }
            })(Sn);
            n.d(t, "DashboardSettingsRoot", function() {
                return En
            })
        },
        qYDK: function(e, t, n) {
            "use strict";
            var r, a, i, o, s = n("fvjX"),
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
                        return p.createElement(g.Xa, {
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
                        return p.createElement(g.Xa, {
                            position: g.jb.Relative,
                            refDelegate: this.setContainerRef
                        }, p.createElement(b.a, null, p.createElement(g.A, u.__assign({
                            ariaLabel: Object(h.d)("Options", "CogWheelComponent"),
                            icon: g.tb.Gear
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
                        return p.createElement(g.Eb, {
                            className: "drag-and-drop-card-title",
                            color: g.O.Base,
                            fontSize: g.Ca.Size5,
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
            }(i || (i = {})),
            function(e) {
                e.Carat = "carat", e.Card = "card", e.Container = "container", e.Header = "header"
            }(o || (o = {}));
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
                        var n = t[o.Container].getBoundingClientRect();
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
                            var a = t[o.Card];
                            a.style.left = parseInt(a.style.left || "0", 10) + n + "px", a.style.top = parseInt(a.style.top || "0", 10) + r + "px"
                        }
                    }, t.handleHeaderMouseDown = function(e) {
                        var n = e.clientY,
                            r = t[o.Card],
                            a = r.getBoundingClientRect(),
                            i = a.top,
                            s = a.left,
                            l = a.width;
                        r.style.left = s + "px", r.style.top = i + "px", r.style.width = l + "px";
                        var c = t.getPlaceholderPosition(n),
                            d = t.props.card.name;
                        t.props.updateCard(d, {
                            placeholderPosition: c
                        }, m.b.SetGrabbed), t.props.updateCard(d, {}, m.b.SetTarget)
                    }, t.handleCardMouseUp = function() {
                        if (t.props.card.isGrabbed) {
                            var e = t[o.Card];
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
                        var e = t[o.Container];
                        e.addEventListener("mousemove", t.handleContainerMouseMove), e.addEventListener("mouseleave", t.handleContainerMouseLeave), e.addEventListener("mouseenter", t.handleContainerMouseEnter), t[o.Carat].addEventListener("mousedown", t.handleCaratMouseDown), t[o.Header].addEventListener("mousedown", t.handleHeaderMouseDown), window.addEventListener("mouseup", t.handleCardMouseUp), window.addEventListener("mousemove", t.handleCardMouseMove)
                    }, t.removeEventListeners = function() {
                        var e = t[o.Container];
                        e.removeEventListener("mousemove", t.handleContainerMouseMove), e.removeEventListener("mouseleave", t.handleContainerMouseLeave), e.removeEventListener("mouseenter", t.handleContainerMouseEnter), t[o.Carat].removeEventListener("mousedown", t.handleCaratMouseDown), t[o.Header].removeEventListener("mousedown", t.handleHeaderMouseDown), window.removeEventListener("mouseup", t.handleCardMouseUp), window.removeEventListener("mousemove", t.handleCardMouseMove)
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.card.isCollapsed !== this.props.card.isCollapsed && this.props.onCardsUpdate()
                }, t.prototype.componentDidMount = function() {
                    this.addEventListeners(), this.props.updateCard(this.props.card.name, {
                        cardRef: this[o.Card]
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
                    return p.createElement(g.Xa, {
                        "data-test-selector": i.Container,
                        display: g.X.Flex,
                        flexDirection: g.Aa.Column,
                        refDelegate: this.registerRef(o.Container)
                    }, p.createElement(f, {
                        cloneStyleRef: c && c.cardRef,
                        show: l === m.c.Top
                    }), p.createElement(g.Eb, {
                        background: g.r.Base,
                        border: !0,
                        breakpointLarge: {
                            margin: {
                                bottom: 2
                            }
                        },
                        className: "drag-and-drop-card-container" + (s ? " drag-and-drop-card-container__grabbed" : ""),
                        "data-test-selector": i.Card,
                        display: g.X.Flex,
                        elevation: s ? 4 : 1,
                        flexDirection: g.Aa.Column,
                        margin: {
                            bottom: 1
                        },
                        refDelegate: this.registerRef(o.Card)
                    }, p.createElement(g.Eb, {
                        alignContent: g.e.Center,
                        alignItems: g.f.Center,
                        borderBottom: !0,
                        className: "drag-and-drop-card-header",
                        display: g.X.Flex,
                        justifyContent: g.Wa.Between,
                        padding: {
                            x: 1
                        },
                        position: g.jb.Relative,
                        refDelegate: this.registerRef(o.Header)
                    }, p.createElement(g.Xa, {
                        display: g.X.Flex,
                        justifyContent: g.Wa.Center
                    }, p.createElement(g.Xa, {
                        margin: {
                            right: 1
                        }
                    }, p.createElement(g.Xa, {
                        className: "drag-and-drop-card-carat" + (r ? "__collapsed" : ""),
                        refDelegate: this.registerRef(o.Carat)
                    }, p.createElement(g.A, {
                        ariaLabel: Object(h.d)("Collapse/Expand", "DragAndDropCard"),
                        icon: g.tb.GlyphArrDown,
                        onClick: this.handleCaratClick
                    }))), p.createElement(S, {
                        title: this.props.title
                    })), p.createElement(g.Xa, {
                        display: g.X.Flex,
                        alignItems: g.f.Center
                    }, t && p.createElement(y, {
                        "data-a-target": this.props.cogWheelTarget
                    }, t), p.createElement(g.Xa, {
                        margin: {
                            top: .5,
                            left: 1
                        }
                    }, p.createElement(g.sb, {
                        asset: g.tb.DragHandle
                    })))), p.createElement(g.Xa, {
                        className: "drag-and-drop-card-content" + (r ? " " + a.ContentCollapsed : ""),
                        "data-test-selector": i.Content,
                        position: g.jb.Relative
                    }, r && this.props.unmountOnCollapse ? null : this.props.children)), p.createElement(f, {
                        cloneStyleRef: c && c.cardRef,
                        show: l === m.c.Bottom
                    }))
                }, Object.defineProperty(t.prototype, "isHoveringOtherCard", {
                    get: function() {
                        var e = this.props.targetCard;
                        return !(!e || e.cardRef !== this[o.Card] || !this.props.grabbedCard)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isHoveringSelf", {
                    get: function() {
                        var e = this.props.grabbedCard;
                        return !(!e || e.cardRef !== this[o.Card])
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(p.Component);
            o.Carat, o.Card, o.Container, o.Header;
            var C, _ = E,
                w = (C = Object(l.a)("DragAndDropCardContext", {
                    card: new m.a("unknown")
                })).InnerProvider,
                k = C.withContext;
            var O = Object(s.compose)(d(function(e) {
                    return e
                }), k(function(e) {
                    return e
                }))(_),
                I = n("i8i4"),
                x = n("8/mp"),
                T = n("b+ID"),
                R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setRootContainerRef = function(e) {
                            t.rootContainerRef = e
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.rootContainerRef.appendChild(this.props.element)
                    }, t.prototype.render = function() {
                        return p.createElement(g.Xa, {
                            refDelegate: this.setRootContainerRef
                        })
                    }, t
                }(p.Component),
                D = (n("6Ll5"), function(e) {
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
                        return p.createElement(g.Eb, {
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
                            display: g.X.Flex,
                            flexDirection: g.Aa.Column,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: g.Wa.Start,
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
                P = (n("uZYF"), function(e) {
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
                                    i = r.targetCard,
                                    o = e.cards,
                                    s = e.roots;
                                if (a && i && a.name !== i.name && (s.forEach(function(e, r) {
                                        e.forEach(function(e, o) {
                                            e.name === a.name ? t = {
                                                column: r,
                                                el: e.el,
                                                name: e.name,
                                                row: o
                                            } : e.name === i.name && (n = {
                                                column: r,
                                                el: e.el,
                                                name: e.name,
                                                row: o
                                            })
                                        })
                                    }), n || (n = {
                                        column: i.column || 0,
                                        el: i.el,
                                        name: i.name,
                                        row: i.row || 0
                                    }), t && n)) {
                                    var l = s[t.column],
                                        c = s[n.column],
                                        d = i.placeholderPosition === m.c.Bottom;
                                    c.splice(n.row + (d ? 1 : 0), 0, t), t.column === n.column ? c.splice(t.row + (t.row > n.row ? 1 : 0), 1) : l.splice(t.row, 1)
                                }
                                return {
                                    cards: o,
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
                                    i = a.cards,
                                    o = !!i[e],
                                    s = u.__assign({}, i[e] || new m.a(e), t);
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
                                return o && (a.cards[e] = s), a
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
                        return p.createElement(p.Fragment, null, p.createElement(x.b, {
                            className: "drag-and-drop-layout-scrollable-area" + (t ? "__expanded-view" : "")
                        }, p.createElement(g.Xa, {
                            alignContent: g.e.Stretch,
                            alignItems: g.f.Stretch,
                            className: "drag-and-drop-layout",
                            display: g.X.Flex,
                            flexDirection: g.Aa.Row,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: g.Wa.Between
                        }, this.state.roots.map(function(t, n) {
                            return p.createElement(D, {
                                column: n,
                                key: n,
                                grabbedCard: e.state.common.grabbedCard,
                                targetCard: e.state.common.targetCard,
                                row: t.length - 1,
                                updateCard: e.updateCard
                            }, t.map(function(e) {
                                var t = e.el,
                                    n = e.name;
                                return p.createElement(R, {
                                    element: t,
                                    key: n
                                })
                            }))
                        }))), p.createElement(c, {
                            value: this.state.common
                        }, Object.keys(this.state.cards).map(function(t) {
                            var n = e.state.cards[t];
                            return I.createPortal(p.createElement(w, {
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
            })(P);
            n.d(t, "a", function() {
                return O
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
                    return i
                }),
                function(e) {
                    e.Open = "open", e.Review = "review", e.Disabled = "disabled"
                }(r || (r = {})),
                function(e) {
                    e[e.Off = 0] = "Off", e[e.TenMinutes = 600] = "TenMinutes", e[e.ThirtyMinutes = 1800] = "ThirtyMinutes", e[e.OneHour = 3600] = "OneHour", e[e.OneDay = 86400] = "OneDay", e[e.OneWeek = 604800] = "OneWeek", e[e.OneMonth = 2592e3] = "OneMonth", e[e.ThreeMonths = 7776e3] = "ThreeMonths"
                }(a || (a = {}));
            var i = {
                publishingMode: r.Open,
                followersOnlyDurationSeconds: a.OneDay
            }
        },
        r6fx: function(e, t, n) {},
        rJj9: function(e, t, n) {},
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
            var r, a, i = n("/7QA"),
                o = n("Ue10");

            function s(e) {
                switch (e) {
                    case a.Success:
                        return {
                            message: Object(i.d)("Success!", "Profile Edit"),
                            type: o.hb.Success
                        };
                    case a.UnexpectedError:
                        return {
                            message: Object(i.d)("Unexpected error, please try again.", "Profile Edit"),
                            type: o.hb.Alert
                        };
                    case a.BadSizeError:
                        return {
                            message: Object(i.d)("Image might exceed 10MB.", "Profile Edit"),
                            type: o.hb.Alert
                        };
                    case a.NonImageError:
                        return {
                            message: Object(i.d)("You must upload an image.", "Profile Edit"),
                            type: o.hb.Alert
                        };
                    case a.WrongFormatError:
                        return {
                            message: Object(i.d)("You must select a valid image type.", "Profile Edit"),
                            type: o.hb.Alert
                        };
                    case a.TimeoutError:
                        return {
                            message: Object(i.d)("Upload timed-out. Please try again.", "Profile Edit"),
                            type: o.hb.Alert
                        };
                    case a.Uploading:
                        return {
                            message: Object(i.d)("Uploading....", "Profile Edit"),
                            type: o.hb.Brand
                        };
                    case a.ImageNotSelected:
                        return {
                            message: Object(i.d)("Select a image first.", "Profile Edit"),
                            type: o.hb.Alert
                        };
                    default:
                        return {
                            message: Object(i.d)("Please try again.", "Profile Edit"),
                            type: o.hb.Alert
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
                    return r.m.get("ritualsFeatureFlagOverride", r.b.get("viewer_milestones_enabled", !1))
                }
        },
        xTFG: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return l
            });
            var r, a = n("1rIY"),
                i = (r = Object(a.a)("CardsTrackingContext", {
                    registerReportCardVisibility: function() {
                        return function() {
                            return null
                        }
                    }
                })).InnerProvider,
                o = r.withContext,
                s = function(e, t) {
                    return function(n) {
                        return {
                            reportCardVisibility: (0, n.registerReportCardVisibility)(e, t)
                        }
                    }
                };

            function l(e, t) {
                return function(n) {
                    return o(s(e, t))(n)
                }
            }
        }
    }
]);