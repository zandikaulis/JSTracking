(window.webpackJsonp = window.webpackJsonp || []).push([
    [53, 142], {
        "/ZC1": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("Ue10"),
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(r.Z, {
                            dragOver: this.state.isDraggingOver,
                            error: this.props.error
                        }, i.createElement(r.Qa, {
                            position: r.kb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: r.jc.Above
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
        "1koF": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ProfileImageSetting"
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
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
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
                    end: 94
                }
            };
            n.loc.source = {
                body: "query ProfileImageSetting {\ncurrentUser {\nid\nlogin\ndisplayName\nprofileImageURL(width: 300)\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "45NR": function(e, t, n) {},
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return l
            });
            var a, i, r = n("/7QA");

            function o(e, t) {
                switch (e) {
                    case a.Second:
                        return Object(r.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case a.Minute:
                        return Object(r.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case a.Hour:
                        return Object(r.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case a.Day:
                        return Object(r.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case a.Week:
                        return Object(r.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case a.Month:
                        return Object(r.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                switch (e) {
                    case a.Second:
                        return Object(r.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case a.Minute:
                        return Object(r.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case a.Hour:
                        return Object(r.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case a.Day:
                        return Object(r.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case a.Week:
                        return Object(r.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case a.Month:
                        return Object(r.d)("{monthCount}mo", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function l(e, t) {
                var n;
                switch (void 0 === t && (t = i.Humanized), t === i.ClockAuto && (t = e >= 3600 ? i.ClockHMS : i.ClockMS), t) {
                    case i.ClockHM:
                    case i.ClockHMS:
                        n = a.Hour;
                        break;
                    case i.ClockMS:
                        n = a.Minute
                }
                var l = 2;
                t === i.ClockHMS && (l = 3);
                var c = function(e, t) {
                        void 0 === t && (t = a.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === a.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === a.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === a.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === a.Day ? n : n.days <= 26 || t === a.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    d = Object.keys(c);
                if (d.forEach(function(e, n) {
                        t !== i.Humanized && t !== i.HumanizedShort || c[e] || delete c[e], n < d.length - l && delete c[e]
                    }), t === i.Humanized) return function(e) {
                    return e.months ? o(a.Month, e.months) : e.weeks && e.days ? o(a.Week, e.weeks) + " " + o(a.Day, e.days) : e.weeks ? o(a.Week, e.weeks) : e.days && e.hours ? o(a.Day, e.days) + " " + o(a.Hour, e.hours) : e.days ? o(a.Day, e.days) : e.hours && e.minutes ? o(a.Hour, e.hours) + " " + o(a.Minute, e.minutes) : e.hours ? o(a.Hour, e.hours) : e.minutes && e.seconds ? o(a.Minute, e.minutes) + " " + o(a.Second, e.seconds) : e.minutes ? o(a.Minute, e.minutes) : o(a.Second, e.seconds || 0)
                }(c);
                if (t === i.HumanizedShort) return function(e) {
                    return e.months ? s(a.Month, e.months) : e.weeks && e.days ? "" + s(a.Week, e.weeks) + s(a.Day, e.days) : e.weeks ? s(a.Week, e.weeks) : e.days && e.hours ? "" + s(a.Day, e.days) + s(a.Hour, e.hours) : e.days ? s(a.Day, e.days) : e.hours && e.minutes ? "" + s(a.Hour, e.hours) + s(a.Minute, e.minutes) : e.hours ? s(a.Hour, e.hours) : e.minutes && e.seconds ? "" + s(a.Minute, e.minutes) + s(a.Second, e.seconds) : e.minutes ? s(a.Minute, e.minutes) : s(a.Second, e.seconds || 0)
                }(c);
                var m = ":",
                    p = !1;
                switch (r.p.intl.getLanguageCode()) {
                    case "cy":
                    case "da":
                    case "fi":
                    case "id":
                    case "nb":
                    case "si":
                        m = ".";
                        break;
                    case "af":
                    case "fr":
                    case "lt":
                        p = !0
                }
                var g = c.seconds || 0,
                    f = c.minutes || 0,
                    h = c.hours || 0;
                switch (t) {
                    case i.ClockHM:
                    case i.ClockHMS:
                        var b = (p ? u(h, 2) : h) + m + u(f, 2);
                        return t === i.ClockHMS && (b += m + u(g, 2)), b;
                    case i.ClockMS:
                        return (p ? u(f, 2) : f) + m + u(g, 2)
                }
            }

            function u(e, t) {
                var n = e.toString();
                return n.length < t ? "0".repeat(t - n.length) + n : n
            }! function(e) {
                e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
            }(a || (a = {})),
            function(e) {
                e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
            }(i || (i = {}))
        },
        "7PeK": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("Ue10"),
                o = (n("KwO+"), function(e) {
                    var t = null;
                    e.footer && (t = i.createElement(r.Fb, {
                        padding: 2,
                        background: r.r.Alt2
                    }, e.footer));
                    var n = {};
                    e.header || (n = {
                        topRight: r.x.Medium,
                        topLeft: r.x.Medium
                    });
                    var o = a.__assign({
                        bottomLeft: r.x.Medium,
                        bottomRight: r.x.Medium
                    }, n);
                    return i.createElement(i.Fragment, null, e.header, i.createElement(r.Fb, {
                        background: r.r.Base,
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
        "7lJP": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("/MKj"),
                i = n("fvjX"),
                r = n("aCAx"),
                o = n("kRBY"),
                s = n("mrSG"),
                l = n("q1tI"),
                u = n("oJmH"),
                c = n("/7QA"),
                d = n("/ZC1"),
                m = n("cZKs"),
                p = n("yR8l"),
                g = n("94Uw"),
                f = n("Sejb"),
                h = n("vpah"),
                b = n("eaSl"),
                v = n("GnwI"),
                y = n("Ue10"),
                E = (n("DGtd"), n("MTto")),
                S = ["image/*"],
                k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            statusMessage: null,
                            imageUpdated: !1,
                            loading: !1
                        }, t.currentImage = null, t.onImageInputChange = function(e) {
                            var n;
                            if (null !== e) {
                                t.setState({
                                    loading: !0,
                                    statusMessage: null
                                }), n = e[0];
                                var a = Object(f.a)(n),
                                    i = (n.size / 1024 / 1024).toFixed(4);
                                parseInt(i, 10) > 10 ? t.setState({
                                    loading: !1,
                                    statusMessage: h.b.BadSizeError
                                }) : Object(f.b)(n, function(e) {
                                    return s.__awaiter(t, void 0, void 0, function() {
                                        var t, n = this;
                                        return s.__generator(this, function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return this.currentImage = e, t = this, [4, Object(b.a)({
                                                        userID: this.props.userID,
                                                        authToken: this.props.authToken,
                                                        imageType: this.props.imageType,
                                                        format: a,
                                                        image: this.currentImage,
                                                        onUploadCompletion: function(e) {
                                                            var t = e === h.b.Success;
                                                            t || (n.currentImage = null), n.setState({
                                                                statusMessage: e,
                                                                imageUpdated: t,
                                                                loading: !1
                                                            })
                                                        },
                                                        onUploadError: function() {
                                                            n.setState({
                                                                loading: !1,
                                                                statusMessage: h.b.UnexpectedError
                                                            })
                                                        },
                                                        onUploadTimeout: function() {
                                                            n.setState({
                                                                loading: !1,
                                                                statusMessage: h.b.TimeoutError
                                                            })
                                                        }
                                                    })];
                                                case 1:
                                                    return t.cancelUpload = i.sent(), [2]
                                            }
                                        })
                                    })
                                })
                            } else t.setState({
                                statusMessage: h.b.ImageNotSelected
                            })
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillUnmount = function() {
                        this.cancelUpload && this.cancelUpload(), this.timeoutHandle && clearTimeout(this.timeoutHandle)
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
                        this.props.imageType === g.a.ChannelOfflineImage && (t = Object(c.d)("Editing video banner for {userName}", {
                            userName: e
                        }, "UserImageUploader"));
                        var n = null;
                        if (this.state.loading) n = l.createElement(y.Ya, {
                            className: "user-image-uploader__upload-svg--anim-fill",
                            position: y.kb.Relative,
                            "data-test-selector": "loading-status"
                        }, l.createElement(y.tb, {
                            asset: y.ub.Upload,
                            type: y.vb.Brand,
                            width: 99,
                            height: 76
                        }));
                        else {
                            var a = Object(c.d)("Recommended image size: 1200x480 and less than 10MB.", "UserImageUploader");
                            this.props.imageType === g.a.ChannelOfflineImage && (a = Object(c.d)("Recommended image size: 1920x1080 and less than 10MB.", "UserImageUploader")), n = l.createElement(y.Ya, null, l.createElement(y.Ya, {
                                className: "user-image-uploader__upload-info"
                            }, l.createElement(y.Ya, null, l.createElement(y.tb, {
                                asset: y.ub.Plus,
                                type: y.vb.Alt2,
                                height: 20,
                                width: 20
                            })), l.createElement(y.W, {
                                type: y.Wb.H3,
                                color: y.O.Alt2,
                                fontSize: y.Ca.Size4
                            }, Object(c.d)("Upload a Photo", "User Image Uploader"))), l.createElement(y.Ya, {
                                className: "user-image-uploader__upload-recommendation",
                                position: y.kb.Absolute,
                                textAlign: y.Sb.Left,
                                attachLeft: !0,
                                attachBottom: !0,
                                margin: {
                                    left: 3,
                                    bottom: 1
                                }
                            }, l.createElement(y.W, {
                                type: y.Wb.H6,
                                color: y.O.Alt2,
                                fontSize: y.Ca.Size8,
                                align: y.gc.TextBottom
                            }, a)))
                        }
                        var i = null;
                        this.props.showCloser && (i = l.createElement(m.a, null));
                        var r = null;
                        if (null !== this.state.statusMessage) {
                            var o = Object(h.c)(this.state.statusMessage);
                            r = l.createElement(y.hb, {
                                label: o.message,
                                type: o.type
                            })
                        }
                        return l.createElement(y.Ya, {
                            className: "user-image-uploader",
                            position: y.kb.Relative,
                            fullHeight: !0
                        }, l.createElement(y.Fb, {
                            className: "user-image-uploader__background-container",
                            background: y.r.Base,
                            fullWidth: !0
                        }, l.createElement(y.Ya, {
                            padding: 2,
                            display: y.X.InlineBlock,
                            position: y.kb.Relative,
                            textAlign: y.Sb.Center,
                            fullWidth: !0
                        }, l.createElement(y.Fb, {
                            borderBottom: !0,
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(y.W, {
                            type: y.Wb.H3,
                            fontSize: y.Ca.Size4
                        }, t)), l.createElement(y.Ya, {
                            className: "user-image-uploader__upload-container",
                            display: y.X.InlineBlock,
                            position: y.kb.Relative,
                            textAlign: y.Sb.Center,
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement(y.Ya, {
                            className: "user-image-uploader__upload",
                            display: y.X.InlineBlock,
                            position: y.kb.Relative,
                            textAlign: y.Sb.Center
                        }, l.createElement(d.a, {
                            allowedFileTypes: S,
                            onFilesSubmitted: this.onImageInputChange
                        }, n))), l.createElement(y.Fb, {
                            "data-test-selector": "status-message",
                            fontSize: y.Ca.Size4,
                            position: y.kb.Relative,
                            textAlign: y.Sb.Center,
                            className: "user-image-uploader__status-message"
                        }, r))), i)
                    }, t
                }(l.Component),
                _ = Object(u.compose)(Object(v.b)("User Image Upload"), Object(p.a)(E, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                }))(k);
            var w = Object(a.connect)(function(e) {
                return {
                    authToken: Object(o.a)(e)
                }
            }, function(e, t) {
                return Object(i.bindActionCreators)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(r.c)()
                    }
                }, e)
            })(_);
            n.d(t, "UserImageUploader", function() {
                return w
            }), n.d(t, "PublicProps", function() {})
        },
        "8Z7p": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Bio = "Description specified is too long", e.DisplayName = "You may not change your display name, only the capitalization of it.", e.EmailDomainNotAllowed = "Admins must use their work email", e.EmailNotAllowed = "Email disabled for reuse", e.EmailNotValid = "Email address is not valid", e.SudoTokenInvalid = "invalid sudo token", e.SudoTokenMissing = "missing sudo token"
                }(a || (a = {}))
        },
        "94Uw": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.ProfileImage = "profile_image", e.ProfileBanner = "profile_banner", e.ChannelOfflineImage = "channel_offline_image"
                }(a || (a = {}))
        },
        DGtd: function(e, t, n) {},
        EOaz: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, i = n("/MKj"),
                r = n("fvjX"),
                o = n("1/iK"),
                s = n("y5D0"),
                l = n("kRBY"),
                u = n("mrSG"),
                c = n("q1tI"),
                d = n("4p7I"),
                m = n("mLw1"),
                p = n("9C/b"),
                g = n("yoKv"),
                f = n("/7QA"),
                h = n("ZS2+"),
                b = n("ZDlU"),
                v = n("Bh3T"),
                y = n("sSlw"),
                E = n("OCR+"),
                S = n("oJmH"),
                k = n("V+GM"),
                _ = n("NvVO"),
                w = n("2xye"),
                O = n("GnwI"),
                U = n("BK8n"),
                I = n("7PeK"),
                N = n("c0Zc"),
                C = n("EpBn"),
                T = n("Ue10"),
                D = function() {
                    return c.createElement(C.a, {
                        label: Object(f.d)("Disable Your Twitch Account", "DisableAccountLink"),
                        orientation: T.Fa.Horizontal
                    }, Object(f.d)("If you want to disable your Twitch account, you can do so from the <x:link>Disable Account</x:link> page.", {
                        "x:link": function(e) {
                            return c.createElement(T.U, {
                                to: "/user/disable-account",
                                "data-a-target": "disable-account-link"
                            }, e)
                        }
                    }, "DisableAccountLink"))
                },
                P = n("yR8l"),
                j = n("wUQP"),
                x = n("b6Yk"),
                R = n("EMHe"),
                A = n("rwxT"),
                F = n("8Z7p"),
                M = n("w+Ve"),
                L = n("Ww25"),
                B = n("geRD"),
                z = n("fWal"),
                H = n("pchi"),
                V = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            checked: !1,
                            error: !1,
                            updating: !1
                        }, t.onToggle = function() {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, a;
                                return u.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            this.setState({
                                                error: !1,
                                                updating: !0
                                            }), e = this.props, t = e.userID, n = e.emailReusable, a = Object(B.b)({
                                                userID: t,
                                                IsEmailReusable: !n
                                            }, {
                                                updateUserEmailReusable: {
                                                    user: {
                                                        id: t,
                                                        isEmailReusable: !n,
                                                        __typename: "User"
                                                    },
                                                    __typename: "UpdateUserEmailReusablePayload"
                                                }
                                            }), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, this.props.updateEmailReusable(a)];
                                        case 2:
                                            return i.sent(), [3, 4];
                                        case 3:
                                            return i.sent(), this.setState({
                                                error: !0
                                            }), [3, 4];
                                        case 4:
                                            return this.setState({
                                                updating: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(z.a, {
                            id: "settings-profile-multi-account-setting",
                            label: Object(f.d)("Enable additional account creation", "MultiAccountSetting"),
                            description: this.renderDescription(),
                            checked: this.props.emailReusable,
                            disabled: this.state.updating || !this.props.emailVerified,
                            error: this.state.error,
                            onChange: this.onToggle
                        })
                    }, t.prototype.renderDescription = function() {
                        return this.props.emailVerified ? Object(f.d)("Additional Twitch accounts can be created using this verified email address", "MultiAccountSetting") : Object(f.d)("You must have a verified email address to modify this setting", "MultiAccountSetting")
                    }, t
                }(c.Component),
                q = Object(P.a)(H, {
                    name: "updateEmailReusable"
                })(V),
                W = 5e3,
                Y = "multi_account_setting_feature_flag";
            ! function(e) {
                e[e.Error = 0] = "Error", e[e.CanSendVerificationEmail = 1] = "CanSendVerificationEmail", e[e.VerificationEmailSent = 2] = "VerificationEmailSent"
            }(a || (a = {}));
            var G, J = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            verificationEmailStatus: a.CanSendVerificationEmail,
                            working: !1,
                            verificationEmailSentTime: ""
                        }, t.logger = f.k.withCategory("email-settings"), t.multiAccountFeatureReleased = Object(j.b)(Y), t.onClickVerify = function() {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var e, t, n = this;
                                return u.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            this.setState({
                                                working: !0
                                            }), e = a.Error, t = this.state.verificationEmailSentTime, i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, x.a.put("/kraken/users/" + this.props.userID, {
                                                body: {
                                                    email: this.props.email
                                                }
                                            })];
                                        case 2:
                                            return 200 === i.sent().status && (e = a.VerificationEmailSent, t = new Date(Date.now()).toISOString()), [3, 4];
                                        case 3:
                                            return i.sent(), this.logger.warn("Request to send verification email failed for user:", {
                                                login: this.props.login
                                            }), [3, 4];
                                        case 4:
                                            return this.setState({
                                                verificationEmailStatus: e,
                                                working: !1
                                            }, function() {
                                                return n.feedbackTimerHandle = setTimeout(function() {
                                                    return n.setState({
                                                        verificationEmailStatus: a.CanSendVerificationEmail,
                                                        verificationEmailSentTime: t
                                                    })
                                                }, W)
                                            }), [2]
                                    }
                                })
                            })
                        }, t.updateVerificationEmailSentTime = function() {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return u.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            e = this.state.verificationEmailSentTime, n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, x.a.get("/kraken/users/" + this.props.userID + "/verificationstatus", {})];
                                        case 2:
                                            return 200 === (t = n.sent()).status && void 0 !== t.body && (e = t.body.modified), [3, 4];
                                        case 3:
                                            return n.sent(), this.logger.warn("Request to get email verification status failed for user:", {
                                                login: this.props.login
                                            }), [3, 4];
                                        case 4:
                                            return this.setState({
                                                verificationEmailSentTime: e
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.loading || this.updateVerificationEmailSentTime()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.loading && !this.props.loading && this.updateVerificationEmailSentTime()
                    }, t.prototype.componentWillUnmount = function() {
                        this.feedbackTimerHandle && clearTimeout(this.feedbackTimerHandle)
                    }, t.prototype.render = function() {
                        var e = this.props.disabled || this.state.working;
                        return c.createElement(c.Fragment, null, c.createElement(C.a, {
                            id: "profile-account-info-setting__email-input",
                            error: this.state.verificationEmailStatus === a.Error,
                            label: Object(f.d)("Email", "EmailSettings")
                        }, c.createElement(T.Ya, {
                            display: T.X.Flex
                        }, c.createElement(T.Ya, {
                            flexGrow: 1
                        }, c.createElement(T.Sa, {
                            id: "profile-account-info-setting__email-input",
                            type: T.Ua.Email,
                            disabled: !0,
                            value: this.props.email,
                            "data-a-target": "profile-email-input"
                        })), c.createElement(T.A, {
                            ariaLabel: Object(f.d)("Change Email", "EmailSettings"),
                            icon: T.ub.Edit,
                            linkTo: "/settings/profile/change_email",
                            "data-a-target": "profile-email-change-link"
                        }), this.renderVerifyButton(e)), c.createElement(L.a, {
                            text: this.renderVerificationMessage(),
                            textDataTarget: "profile-email-description"
                        })), this.multiAccountFeatureReleased && c.createElement(q, {
                            emailVerified: this.props.verified,
                            emailReusable: this.props.reusable,
                            userID: this.props.userID
                        }))
                    }, t.prototype.renderVerifyButton = function(e) {
                        if (this.props.loading || this.props.verified) return null;
                        switch (this.state.verificationEmailStatus) {
                            case a.CanSendVerificationEmail:
                                return c.createElement(T.z, {
                                    type: T.F.Default,
                                    disabled: e,
                                    onClick: this.onClickVerify,
                                    "data-a-target": "profile-email-verify-button"
                                }, Object(f.d)("Verify", "EmailSettings"));
                            case a.VerificationEmailSent:
                                return c.createElement(T.z, {
                                    type: T.F.Success,
                                    disabled: !0,
                                    "data-a-target": "profile-email-sent-button"
                                }, Object(f.d)("Email Sent", "EmailSettings"));
                            case a.Error:
                                return c.createElement(T.z, {
                                    type: T.F.Alert,
                                    disabled: !0,
                                    "data-a-target": "profile-email-error-button"
                                }, Object(f.d)("Error", "EmailSettings"));
                            default:
                                return null
                        }
                    }, t.prototype.renderVerificationMessage = function() {
                        if (this.props.loading) return null;
                        if (this.props.verified) return Object(f.d)("<x:strong>Verified.</x:strong> This email is linked to your account.", {
                            "x:strong": function(e) {
                                return c.createElement("strong", null, e)
                            }
                        }, "EmailSettings");
                        switch (this.state.verificationEmailStatus) {
                            case a.CanSendVerificationEmail:
                            case a.VerificationEmailSent:
                                return "" === this.state.verificationEmailSentTime ? Object(f.d)("<x:strong>Unverified.</x:strong> Verification email sent!", {
                                    "x:strong": function(e) {
                                        return c.createElement("strong", null, e)
                                    }
                                }, "EmailSettings") : Object(f.d)("<x:strong>Unverified.</x:strong> Verification email sent {sentDate}.", {
                                    "x:strong": function(e) {
                                        return c.createElement("strong", null, e)
                                    },
                                    sentDate: Object(f.c)(new Date(this.state.verificationEmailSentTime))
                                }, "EmailSettings");
                            default:
                                return null
                        }
                    }, t
                }(c.Component),
                Q = n("5e4V"),
                X = n("5zf8");
            ! function(e) {
                e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.Eligible = 2] = "Eligible", e[e.NotEligible = 3] = "NotEligible"
            }(G || (G = {}));
            var K, Z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            status: G.Loading
                        }, t.logger = f.k.withCategory("username-setting"), t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.emailVerified && this.fetchChangeEligibility()
                    }, t.prototype.componentDidUpdate = function(e) {
                        !e.emailVerified && this.props.emailVerified && this.fetchChangeEligibility()
                    }, t.prototype.render = function() {
                        return c.createElement(C.a, {
                            label: Object(f.d)("Username", "UsernameSetting"),
                            error: this.state.status === G.Error,
                            errorMessage: this.state.status === G.Error ? this.renderErrorMessage() : void 0
                        }, c.createElement(T.Ya, {
                            display: T.X.Flex
                        }, c.createElement(T.Ya, {
                            flexGrow: 1
                        }, c.createElement(T.Sa, {
                            type: T.Ua.Text,
                            disabled: !0,
                            value: this.props.login,
                            "data-a-target": "profile-username-input"
                        })), this.state.status === G.Eligible && c.createElement(T.A, {
                            ariaLabel: Object(f.d)("Edit Username", "UsernameSetting"),
                            icon: T.ub.Edit,
                            linkTo: "https://www.twitch.tv/logins/new",
                            "data-a-target": "profile-edit-username-button"
                        })), c.createElement(L.a, {
                            textDataTarget: "profile-username-description",
                            text: this.renderChangeEligibilityMessage()
                        }))
                    }, t.prototype.renderChangeEligibilityMessage = function() {
                        if (!1 === this.props.emailVerified) return Object(f.d)("You must have a verified email to update your username", "UsernameSetting");
                        switch (this.state.status) {
                            case G.Loading:
                                return Object(f.d)("Loading username change eligibility...", "UsernameSetting");
                            case G.Eligible:
                                return Object(f.d)("You may update your username", "UsernameSetting");
                            case G.NotEligible:
                                return this.state.eligibilityTimeISO && Object(f.d)("You may update your username again in {distanceFromNow}", {
                                    distanceFromNow: function(e) {
                                        var t = Date.now(),
                                            n = (new Date(e).getTime() - t) / 1e3;
                                        if (!(n <= 0)) return Object(X.b)(n)
                                    }(this.state.eligibilityTimeISO) || ""
                                }, "UsernameSetting");
                            default:
                                return null
                        }
                    }, t.prototype.renderErrorMessage = function() {
                        return Object(f.d)("We had trouble fetching your rename eligibility - please try again later", "UsernameSetting")
                    }, t.prototype.fetchChangeEligibility = function() {
                        return u.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return u.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), [4, x.a.get("/kraken/user/rename_status?scope=user_read")];
                                    case 1:
                                        return (e = t.sent()).body && e.body.is_rename_eligible ? this.setState({
                                            status: G.Eligible
                                        }) : e.body && !1 === e.body.is_rename_eligible ? this.setState({
                                            status: G.NotEligible,
                                            eligibilityTimeISO: e.body.rename_eligible_at
                                        }) : this.setState({
                                            status: G.Error
                                        }), [3, 3];
                                    case 2:
                                        return t.sent(), this.logger.warn("Failed to fetch rename_status for user " + this.props.login), this.setState({
                                            status: G.Error
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }(c.Component),
                $ = ["ko", "ja", "zh", "zh-cn", "zh-tw", "zh-hk"],
                ee = "profile-account-info-setting__bio-input",
                te = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(c.Fragment, null, c.createElement(J, {
                            disabled: this.props.controlsDisabled,
                            email: this.props.email,
                            userID: this.props.id,
                            loading: this.props.loading,
                            login: this.props.login,
                            reusable: this.props.emailReusable,
                            verified: this.props.emailVerified
                        }), c.createElement(Z, {
                            emailVerified: this.props.emailVerified,
                            login: this.props.login
                        }), c.createElement(C.a, {
                            id: "profile-account-info-setting__displayname-input",
                            error: !!this.props.displayNameError,
                            errorMessage: this.props.displayNameError ? this.renderDisplayNameError() : void 0,
                            label: Object(f.d)("Display Name", "ProfileAccountInfo")
                        }, c.createElement(T.Sa, {
                            id: "profile-account-info-setting__displayname-input",
                            "data-a-target": "profile-displayname-input",
                            type: T.Ua.Text,
                            disabled: this.props.controlsDisabled,
                            onChange: this.props.onDisplayNameChange,
                            value: this.props.displayName
                        }), c.createElement(L.a, {
                            textDataTarget: "profile-displayname-description",
                            text: this.renderDisplayNameDescription()
                        })), c.createElement(C.a, {
                            id: ee,
                            error: !!this.props.bioError,
                            errorMessage: this.props.bioError ? this.renderBioError() : void 0,
                            label: Object(f.d)("Bio", "ProfileAccountInfo")
                        }, c.createElement(T.Tb, {
                            id: ee,
                            disabled: this.props.controlsDisabled,
                            onChange: this.props.onBioChange,
                            maxLength: 300,
                            noResize: !0,
                            value: this.props.bio,
                            "data-a-target": "profile-bio-input"
                        }), c.createElement(L.a, {
                            textDataTarget: "profile-bio-description",
                            text: Object(f.d)("Who you are in fewer than 300 characters", "ProfileAccountInfo")
                        })))
                    }, t.prototype.renderDisplayNameDescription = function() {
                        return this.userHasCJKLanguageSet() ? Object(f.d)("Customize your display name! Setting a display name with Chinese, Japanese, or Korean characters will prevent you from changing it again for 60 days — requests to undo it will not be honored! Display names that do not adhere to Twitch Rules of Conduct may result in an indefinite suspension of your account.", "ProfleAccountInfo") : Object(f.d)("Customize capitalization for your username", "ProfileAccountInfo")
                    }, t.prototype.renderBioError = function() {
                        return Object(f.d)("Your description is too long", "ProfileAccountInfo")
                    }, t.prototype.renderDisplayNameError = function() {
                        return Object(f.d)("You may not change your display name, only the capitalization of it", "ProfileAccountInfo")
                    }, t.prototype.userHasCJKLanguageSet = function() {
                        var e = Object(Q.a)();
                        return !!e && $.includes(e)
                    }, t
                }(c.Component),
                ne = n("Iu7G"),
                ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            bio: null,
                            bioError: !1,
                            displayName: null,
                            displayNameError: !1,
                            email: null,
                            saveStatus: R.b.Working
                        }, t.logger = f.k.withCategory("profile-account-info-settings"), t.onBioChange = function(e) {
                            return t.setState({
                                bio: e.currentTarget.value,
                                bioError: !1
                            }, t.checkForDirtyState)
                        }, t.onDisplayNameChange = function(e) {
                            return t.setState({
                                displayName: e.currentTarget.value,
                                displayNameError: !1
                            }, t.checkForDirtyState)
                        }, t.onClickSave = function() {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, a, i, r, o = this;
                                return u.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (!this.props.data.currentUser) return [2];
                                            this.setState({
                                                saveStatus: R.b.Working
                                            }), e = R.b.Error, t = !1, n = !1, s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, x.a.put("/kraken/users/" + this.props.data.currentUser.id, {
                                                body: this.buildRequestBody()
                                            })];
                                        case 2:
                                            return a = s.sent(), i = a.error && a.error.message, 200 === a.status ? e = R.b.Success : i ? i.includes(F.a.DisplayName) ? t = !0 : i.includes(F.a.Bio) ? n = !0 : this.logErrorToSentinel(a) : this.logErrorToSentinel(a), [3, 4];
                                        case 3:
                                            return r = s.sent(), this.logger.warn("Network error submitting profile for user", {
                                                user: this.props.data.currentUser && this.props.data.currentUser.login,
                                                error: r
                                            }), [3, 4];
                                        case 4:
                                            return this.setState({
                                                saveStatus: e,
                                                bioError: n,
                                                displayNameError: t
                                            }, function() {
                                                e === R.b.Success && o.props.data.refetch && o.props.data.refetch()
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        !this.props.data.loading && this.props.data.currentUser && this.hydrateState(this.props)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.data.loading && !e.data.loading && e.data.currentUser && this.hydrateState(e)
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.currentUser,
                            n = e.loading;
                        if (e.error || !t && !n) return c.createElement(I.a, null, c.createElement(U.a, null, c.createElement(M.a, null)));
                        var a = c.createElement(A.a, {
                            status: this.state.saveStatus,
                            onClickSave: this.onClickSave
                        });
                        return c.createElement(I.a, {
                            footer: a
                        }, c.createElement(U.a, {
                            id: "profile_settings"
                        }, c.createElement(te, {
                            loading: n,
                            bio: this.state.bio || "",
                            bioError: this.state.bioError,
                            controlsDisabled: this.state.saveStatus === R.b.Working || n,
                            displayName: this.state.displayName || "",
                            displayNameError: this.state.displayNameError,
                            email: this.state.email || "",
                            emailReusable: !(!t || !t.isEmailReusable),
                            emailVerified: !(!t || !t.isEmailVerified),
                            id: t && t.id || "",
                            login: t && t.login || "",
                            onBioChange: this.onBioChange,
                            onDisplayNameChange: this.onDisplayNameChange
                        })))
                    }, t.prototype.checkForDirtyState = function() {
                        if (!this.props.data.currentUser) return !1;
                        var e = this.state.bio !== this.props.data.currentUser.description || this.state.email !== this.props.data.currentUser.email || this.state.displayName !== this.props.data.currentUser.displayName;
                        this.setState({
                            saveStatus: e ? R.b.DirtyChanges : R.b.NoChanges
                        })
                    }, t.prototype.buildRequestBody = function() {
                        return {
                            displayname: this.state.displayName,
                            description: this.state.bio,
                            on_site: 1
                        }
                    }, t.prototype.logErrorToSentinel = function(e) {
                        this.logger.error(e.requestError || new Error("Unrecognized User Service response error when submitting profile for user"), e.error && e.error.message || "error missing", {
                            user: this.props.data.currentUser && this.props.data.currentUser.login,
                            status: e.status,
                            error: e.error,
                            requestError: e.requestError
                        })
                    }, t.prototype.hydrateState = function(e) {
                        e.data.currentUser && this.setState({
                            bio: e.data.currentUser.description,
                            displayName: e.data.currentUser.displayName,
                            email: e.data.currentUser.email,
                            saveStatus: R.b.NoChanges
                        })
                    }, t
                }(c.Component),
                ie = Object(P.a)(ne, {
                    options: {
                        variables: {
                            skipEmailReusable: !Object(j.b)(Y)
                        }
                    }
                })(ae),
                re = n("aCAx"),
                oe = n("7CzK"),
                se = n.n(oe),
                le = n("7lJP"),
                ue = n("94Uw"),
                ce = n("HcQF");
            n("45NR");
            ! function(e) {
                e.Placeholder = "profile-banner-setting__placeholder", e.UploadButton = "profile-banner-setting__upload-button", e.Image = "profile-banner-setting__image", e.DefaultBanner = "profile-banner-setting__default-banner"
            }(K || (K = {}));
            var de = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openModal = function() {
                            var e = t.props.data && t.props.data.currentUser;
                            e && e.id && e.login && e.displayName && t.props.showModal(le.UserImageUploader, {
                                userID: e.id,
                                login: e.login,
                                displayName: e.displayName,
                                imageType: ue.a.ProfileBanner,
                                showCloser: !0,
                                successCallback: t.imageUploaded
                            })
                        }, t.imageUploaded = function() {
                            t.props.data && t.props.data.refetch()
                        }, t.shouldReportInteractive = function() {
                            t.props.data.loading && !t.props.data.error || t.props.latencyTracking.reportInteractive()
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.shouldReportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.shouldReportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e && e.currentUser;
                        if (!e.loading && !t) return c.createElement(T.W, {
                            type: T.Wb.Span,
                            color: T.O.Error
                        }, Object(f.d)("Sorry, something went wrong. Please try again later.", "ProfileBannerSetting"));
                        var n = Object(f.d)("Profile Banner", "ProfileBannerSetting"),
                            a = null;
                        return a = e.loading ? c.createElement(T.jb, {
                            "data-test-selector": K.Placeholder,
                            "data-a-target": "profile-banner-image",
                            height: 140,
                            width: 440
                        }) : t && t.bannerImageURL ? c.createElement(T.S, {
                            src: t.bannerImageURL,
                            alt: n,
                            className: "profile-banner-setting__current-image",
                            "data-a-target": "profile-banner-image",
                            "data-test-selector": K.Image
                        }) : c.createElement("div", {
                            className: "profile-banner-setting__current-image profile-banner-setting__current-image--default",
                            style: {
                                backgroundImage: "url(" + se.a + ")"
                            },
                            "data-a-target": "profile-banner-image",
                            "data-test-selector": K.DefaultBanner
                        }), c.createElement(T.Ya, {
                            className: "profile-banner-setting"
                        }, c.createElement(T.Ya, {
                            display: T.X.Flex,
                            flexDirection: T.Aa.Row
                        }, c.createElement(T.Fb, {
                            borderRadius: T.x.Medium,
                            overflow: T.db.Hidden,
                            margin: {
                                right: 2
                            }
                        }, a), c.createElement(T.Ya, {
                            margin: {
                                y: "auto"
                            }
                        }, c.createElement(T.z, {
                            ariaLabel: Object(f.d)("Update Profile Banner", "ProfileBannerSetting"),
                            type: T.F.Hollow,
                            onClick: this.openModal,
                            "data-a-target": "profile-banner-upload-button",
                            "data-test-selector": K.UploadButton
                        }, c.createElement(T.Ya, {
                            padding: {
                                x: 1
                            }
                        }, Object(f.d)("Update", "ProfileBannerSetting"))), c.createElement(L.a, {
                            text: Object(f.d)("File format: JPEG, PNG, GIF (recommended 1200x480, max 10MB)", "ProfileBannerSetting")
                        }))))
                    }, t
                }(c.Component),
                me = Object(S.compose)(Object(O.b)("ProfileBannerSetting"), Object(P.a)(ce))(de);
            var pe, ge = Object(i.connect)(null, function(e) {
                    return Object(r.bindActionCreators)({
                        showModal: re.d
                    }, e)
                })(me),
                fe = n("Jx49"),
                he = n("1koF");
            n("LNkj");
            (pe || (pe = {})).UploadButton = "profile-image-setting__upload-button";
            var be = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openModal = function() {
                            var e = t.props.data && t.props.data.currentUser;
                            e && e.id && e.login && e.displayName && t.props.showModal(fe.a, {
                                userID: e.id,
                                login: e.login,
                                displayName: e.displayName,
                                showCloser: !0
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(1)
                    }, t.prototype.render = function() {
                        var e = this.props.data && this.props.data.currentUser,
                            t = c.createElement(T.jb, {
                                height: 140,
                                width: 140
                            });
                        return e && e.profileImageURL && (t = c.createElement(O.a, {
                            src: e.profileImageURL,
                            alt: Object(f.d)("Profile Picture", "ProfileImageSetting"),
                            className: "profile-image-setting__current-image",
                            "data-a-target": "profile-image"
                        })), c.createElement(T.Ya, {
                            className: "profile-image-setting"
                        }, c.createElement(T.Ya, {
                            display: T.X.Flex,
                            flexDirection: T.Aa.Row
                        }, c.createElement(T.Fb, {
                            borderRadius: T.x.Medium,
                            overflow: T.db.Hidden,
                            margin: {
                                right: 2
                            }
                        }, t), c.createElement(T.Ya, {
                            margin: {
                                y: "auto"
                            }
                        }, c.createElement(T.z, {
                            ariaLabel: Object(f.d)("Update Profile Picture", "ProfileImageSetting"),
                            type: T.F.Hollow,
                            onClick: this.openModal,
                            "data-a-target": "profile-image-upload-button",
                            "data-test-selector": pe.UploadButton
                        }, c.createElement(T.Ya, {
                            padding: {
                                x: 1
                            }
                        }, Object(f.d)("Update", "ProfileImageSetting"))), c.createElement(L.a, {
                            text: Object(f.d)("File format: JPEG, PNG, GIF (max size 256x256, 10MB)", "ProfileImageSetting")
                        }))))
                    }, t
                }(c.Component),
                ve = Object(S.compose)(Object(O.b)("ProfileImageSetting"), Object(P.a)(he))(be);
            var ye, Ee, Se = Object(i.connect)(null, function(e) {
                    return Object(r.bindActionCreators)({
                        showModal: re.d
                    }, e)
                })(ve),
                ke = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(c.Fragment, null, c.createElement(N.a, {
                            title: Object(f.d)("Profile Picture", "SettingsProfilePage")
                        }), c.createElement(I.a, null, c.createElement(U.a, null, c.createElement(Se, null))), c.createElement(N.a, {
                            title: Object(f.d)("Profile Banner", "SettingsProfilePage")
                        }), c.createElement(I.a, null, c.createElement(U.a, null, c.createElement(ge, null))), c.createElement(N.a, {
                            title: Object(f.d)("Profile Settings", "SettingsProfilePage"),
                            description: Object(f.d)("Change identifying details for your account", "SettingsProfilePage")
                        }), c.createElement(ie, null), c.createElement(N.a, {
                            title: Object(f.d)("Disabling Your Twitch Account", "SettingsProfilePage"),
                            description: Object(f.d)("Completely deactivate your account", "SettingsProfilePage")
                        }), c.createElement(I.a, null, c.createElement(D, null)))
                    }, t
                }(c.Component),
                _e = Object(S.compose)(Object(O.b)("SettingsProfilePage", {
                    autoReportInteractive: !0,
                    destination: _.a.SettingsProfile
                }), Object(k.a)({
                    location: w.PageviewLocation.SettingsPage
                }))(ke),
                we = n("ht6z"),
                Oe = n("IwUd"),
                Ue = Object(E.a)();
            ! function(e) {
                e.PrimeTab = "settings-tabs__prime-tab", e.TurboTab = "settings-tabs__turbo-tab", e.DesktopTab = "settings-tabs__desktop-tab"
            }(ye || (ye = {})),
            function(e) {
                e.Channel = "channel", e.Notifications = "notifications", e.Profile = "profile", e.Security = "security", e.Connections = "connections", e.Prime = "prime", e.Turbo = "turbo", e.Recommendations = "recommendations", e.Desktop = "desktop"
            }(Ee || (Ee = {}));
            var Ie = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return c.createElement(T.Ya, {
                            className: "settings-tabs",
                            padding: {
                                x: Le,
                                top: Le
                            }
                        }, c.createElement(T.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, c.createElement(T.W, {
                            type: T.Wb.H2
                        }, Object(f.d)("Settings", "SettingsTabs"))), c.createElement(T.Ya, null, c.createElement(T.Hb, null, f.p.integrations.appSettings && c.createElement(T.Gb, {
                            linkTo: "/settings/desktop",
                            active: this.props.tabName === Ee.Desktop,
                            "data-test-selector": ye.DesktopTab,
                            "data-a-target": "desktop-tab"
                        }, Object(f.d)("General", "SettingsTabs")), c.createElement(T.Gb, {
                            linkTo: "/settings/profile",
                            active: this.props.tabName === Ee.Profile,
                            "data-a-target": "profile-tab"
                        }, Object(f.d)("Profile", "SettingsTabs")), this.renderPremiumTab(), c.createElement(T.Gb, {
                            linkTo: "/settings/channel",
                            active: this.props.tabName === Ee.Channel,
                            "data-a-target": "channel-tab"
                        }, Object(f.d)("Channel and Videos", "SettingsTabs")), c.createElement(T.Gb, {
                            linkTo: "/settings/security",
                            active: this.props.tabName === Ee.Security,
                            "data-a-target": "security-tab"
                        }, Object(f.d)("Security and Privacy", "SettingsTabs")), c.createElement(T.Gb, {
                            linkTo: "/settings/notifications",
                            active: this.props.tabName === Ee.Notifications,
                            "data-a-target": "notifications-tab"
                        }, Object(f.d)("Notifications", "SettingsTab")), c.createElement(T.Gb, {
                            linkTo: "/settings/connections",
                            active: this.props.tabName === Ee.Connections,
                            "data-a-target": "connections-tab"
                        }, Object(f.d)("Connections", "SettingsTabs")), Ue() && c.createElement(T.Gb, {
                            linkTo: "/settings/recommendations",
                            active: this.props.tabName === Ee.Recommendations,
                            "data-a-target": "recommendations-tab"
                        }, Object(f.d)("Recommendations", "SettingsTabs")))))
                    }, t.prototype.renderPremiumTab = function() {
                        var e = Object(f.d)("Twitch Prime", "SettingsTabs");
                        if (!this.props.data.currentUser || !this.props.data.requestInfo) return c.createElement(T.Gb, {
                            disabled: !0
                        }, e);
                        var t = this.props.data.currentUser,
                            n = t.hasPrime;
                        return !t.hasTurbo && Object(we.a)(this.props.data.requestInfo.countryCode) || n ? c.createElement(T.Gb, {
                            linkTo: "/settings/prime",
                            active: this.props.tabName === Ee.Prime,
                            "data-test-selector": ye.PrimeTab,
                            "data-a-target": "prime-tab"
                        }, e) : c.createElement(T.Gb, {
                            linkTo: "/settings/turbo",
                            active: this.props.tabName === Ee.Turbo,
                            "data-test-selector": ye.TurboTab,
                            "data-a-target": "turbo-tab"
                        }, Object(f.d)("Twitch Turbo", "SettingsTabs"))
                    }, t
                }(c.Component),
                Ne = Object(S.compose)(Object(O.b)("SettingsTabs"), Object(P.a)(Oe))(Ie),
                Ce = (n("EPme"), Object(E.a)()),
                Te = h.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(148)]).then(n.bind(null, "1qL7"))
                }, "ChangeEmailPage"),
                De = h.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(148)]).then(n.bind(null, "kLO1"))
                }, "SettingsTurboPage"),
                Pe = h.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(148)]).then(n.bind(null, "lRpU"))
                }, "SettingsPrimePage"),
                je = h.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(148)]).then(n.bind(null, "LJ0+"))
                }, "SettingsChannelPage"),
                xe = h.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(148)]).then(n.bind(null, "KXpU"))
                }, "SettingsSecurityPage"),
                Re = h.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(148)]).then(n.bind(null, "+oVX"))
                }, "SettingsNotificationsPage"),
                Ae = h.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(148)]).then(n.bind(null, "t1je"))
                }, "SettingsConnectionsPage"),
                Fe = h.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(148)]).then(n.bind(null, "bm35"))
                }, "SettingsRecommendationsPage"),
                Me = h.a.wrap(function() {
                    return n.e(147).then(n.bind(null, "Rpd6"))
                }, "SettingsDesktopPage"),
                Le = 3,
                Be = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.redirectToProfilePage = function() {
                            return f.p.integrations.appSettings ? c.createElement(m.a, {
                                to: "/settings/desktop"
                            }) : c.createElement(m.a, {
                                to: "/settings/profile"
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        f.p.setPageTitle()
                    }, t.prototype.render = function() {
                        return this.props.isLoggedIn ? c.createElement(T.Ya, {
                            padding: {
                                x: Le
                            },
                            fullHeight: !0,
                            fullWidth: !0,
                            display: T.X.Flex,
                            flexDirection: T.Aa.Column,
                            flexWrap: T.Ba.NoWrap
                        }, c.createElement(v.b, {
                            addPaddingWhenPlayerIsPersisting: !0
                        }), c.createElement(y.a, null, c.createElement(Ne, {
                            tabName: this.props.match.params.tab
                        })), c.createElement(T.Ya, {
                            className: "settings-root__content",
                            padding: {
                                y: 2
                            }
                        }, c.createElement(g.a, null, f.p.integrations.appSettings && c.createElement(d.a, {
                            exact: !0,
                            path: "/settings/desktop",
                            component: Me
                        }), c.createElement(d.a, {
                            exact: !0,
                            path: "/settings/profile",
                            component: _e
                        }), c.createElement(d.a, {
                            exact: !0,
                            path: "/settings/profile/change_email",
                            component: Te
                        }), c.createElement(d.a, {
                            exact: !0,
                            path: "/settings/prime",
                            component: Pe
                        }), c.createElement(d.a, {
                            exact: !0,
                            path: "/settings/turbo",
                            component: De
                        }), c.createElement(d.a, {
                            exact: !0,
                            path: "/settings/channel",
                            component: je
                        }), c.createElement(d.a, {
                            exact: !0,
                            path: "/settings/security",
                            component: xe
                        }), c.createElement(d.a, {
                            exact: !0,
                            path: "/settings/notifications",
                            component: Re
                        }), c.createElement(d.a, {
                            exact: !0,
                            path: "/settings/connections",
                            component: Ae
                        }), Ce() && c.createElement(d.a, {
                            exact: !0,
                            path: "/settings/recommendations",
                            component: Fe
                        }), c.createElement(d.a, {
                            path: "/settings",
                            render: this.redirectToProfilePage
                        })))) : (this.props.login(), c.createElement(b.a, {
                            message: Object(f.d)("You must be logged in to view this page", "SettingsRoot")
                        }))
                    }, t
                }(c.Component),
                ze = Object(p.a)(Be);
            var He = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(l.f)(e)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    login: function() {
                        return Object(s.e)(o.a.SettingsPage)
                    }
                }, e)
            })(ze);
            n.d(t, "SettingsRoot", function() {
                return He
            })
        },
        EPme: function(e, t, n) {},
        HcQF: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ProfileBannerSetting"
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
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "displayName"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 82
                }
            };
            n.loc.source = {
                body: "query ProfileBannerSetting {\ncurrentUser {\nid\nlogin\ndisplayName\nbannerImageURL\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Iu7G: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_ProfilePage_AccountInfoSettings"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "skipEmailReusable"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
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
                                        value: "description"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "email"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isEmailVerified"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isEmailReusable"
                                    },
                                    arguments: [],
                                    directives: [{
                                        kind: "Directive",
                                        name: {
                                            kind: "Name",
                                            value: "skip"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "if"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "skipEmailReusable"
                                                }
                                            }
                                        }]
                                    }]
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
                    end: 197
                }
            };
            n.loc.source = {
                body: "query Settings_ProfilePage_AccountInfoSettings($skipEmailReusable: Boolean!) {\ncurrentUser {\nid\ndescription\ndisplayName\nemail\nisEmailVerified\nisEmailReusable @skip(if: $skipEmailReusable)\nlogin\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        IwUd: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SettingsTabs_User"
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
                                        value: "hasTurbo"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hasPrime"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "requestInfo"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                    end: 92
                }
            };
            n.loc.source = {
                body: "query SettingsTabs_User {\ncurrentUser {\nid\nhasTurbo\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        JK2O: function(e, t, n) {},
        Jx49: function(e, t, n) {
            "use strict";
            var a, i = n("/MKj"),
                r = n("fvjX"),
                o = n("aCAx"),
                s = n("kRBY"),
                l = n("mrSG"),
                u = n("TSYQ"),
                c = n("q1tI"),
                d = n("/7QA"),
                m = n("/ZC1"),
                p = n("cZKs"),
                g = n("yR8l"),
                f = n("yLwq"),
                h = n("Ue10"),
                b = (n("JK2O"), function(e) {
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
                v = n("94Uw"),
                y = n("Sejb"),
                E = n("kMGJ"),
                S = n("vpah"),
                k = n("eaSl"),
                _ = n("GnwI"),
                w = (n("bWJD"), n("c81k"));
            ! function(e) {
                e.PreviewImage = "preview-image", e.UpdateButton = "update-button", e.StatusMessage = "status-message"
            }(a || (a = {}));
            var O = ["image/*"],
                U = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            statusMessage: null,
                            imagePreviewURL: "",
                            currentImageHasTallAspectRatio: !1,
                            imageFormat: ""
                        }, t.currentImage = null, t.logger = d.k.withCategory("ProfileImagePicker"), t.pubsubTimeout = 0, t.successCloseTimeout = 0, t.onImageInputChange = function(e) {
                            var n;
                            if (null !== e) {
                                n = e[0];
                                var a = Object(y.a)(n),
                                    i = (n.size / 1024 / 1024).toFixed(4);
                                parseInt(i, 10) > 10 ? t.setState({
                                    statusMessage: S.b.BadSizeError
                                }) : (t.setState({
                                    selectedImageIndex: void 0,
                                    imagePreviewURL: "",
                                    imageFormat: "",
                                    currentImageHasTallAspectRatio: !1
                                }), Object(y.b)(n, function(e) {
                                    t.currentImage = e, t.setState({
                                        statusMessage: null
                                    })
                                }, function(e) {
                                    var n = new Image,
                                        i = !1;
                                    n.onload = function() {
                                        n.width < n.height && (i = !0), t.setState({
                                            currentImageHasTallAspectRatio: i
                                        })
                                    }, n.src = e, t.setState({
                                        imagePreviewURL: e,
                                        imageFormat: a
                                    })
                                }))
                            } else t.setState({
                                statusMessage: S.b.ImageNotSelected
                            })
                        }, t.onUpdateButtonClick = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t, n = this;
                                return l.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e.preventDefault(), void 0 !== this.state.selectedImageIndex ? (this.setDefaultAvatar(), [2]) : this.currentImage ? (this.setState({
                                                statusMessage: S.b.Uploading
                                            }), t = this, [4, Object(k.a)({
                                                userID: this.props.userID,
                                                authToken: this.props.authToken,
                                                imageType: v.a.ProfileImage,
                                                format: this.state.imageFormat,
                                                image: this.currentImage,
                                                onUploadCompletion: function(e) {
                                                    n.setState({
                                                        statusMessage: e
                                                    }), e === S.b.Success ? n.handleImageUpdated() : (n.setState({
                                                        imagePreviewURL: "",
                                                        imageFormat: ""
                                                    }), n.currentImage = null)
                                                },
                                                onUploadError: function() {
                                                    n.setState({
                                                        statusMessage: S.b.UnexpectedError,
                                                        selectedImageIndex: void 0,
                                                        imagePreviewURL: "",
                                                        currentImageHasTallAspectRatio: !1
                                                    })
                                                },
                                                onUploadTimeout: function() {
                                                    n.setState({
                                                        statusMessage: S.b.TimeoutError
                                                    })
                                                }
                                            })]) : (this.setState({
                                                statusMessage: S.b.ImageNotSelected
                                            }), [2]);
                                        case 1:
                                            return t.cancelUpload = a.sent(), [2]
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
                            t = f.b.map(function(t, n) {
                                return c.createElement(b, {
                                    key: t.id,
                                    imageSrc: Object(f.a)(t, 300),
                                    index: n,
                                    onSelect: e.onDefaultImageSelected,
                                    selected: e.state.selectedImageIndex === n
                                })
                            }),
                            n = null;
                        if ("" !== this.state.imagePreviewURL) {
                            var i = {
                                "profile-edit__image-preview": !0,
                                "profile-edit__image-preview-tall": this.state.currentImageHasTallAspectRatio
                            };
                            n = c.createElement(h.Fb, {
                                className: u(i),
                                position: h.kb.Relative,
                                background: h.r.Base
                            }, c.createElement(h.Ra, {
                                borderRadius: h.x.Small,
                                overflow: h.db.Hidden
                            }, c.createElement("img", {
                                "data-test-selector": a.PreviewImage,
                                src: "" + this.state.imagePreviewURL
                            })))
                        }
                        var r = null;
                        "" === this.state.imagePreviewURL && (r = c.createElement(h.Ya, {
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
                        var o = null;
                        this.props.showCloser && (o = c.createElement(p.a, null));
                        var s = null;
                        if (null !== this.state.statusMessage) {
                            var l = Object(S.c)(this.state.statusMessage),
                                g = l.message,
                                v = l.type;
                            s = c.createElement(h.hb, {
                                label: g,
                                type: v
                            })
                        }
                        var y = this.props.login;
                        return this.props.displayName && (y = this.props.displayName), c.createElement(h.Ya, {
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
                            userName: y
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
                            allowedFileTypes: O,
                            onFilesSubmitted: this.onImageInputChange
                        }, r), n)), c.createElement(h.Fb, {
                            "data-test-selector": a.StatusMessage,
                            fontSize: h.Ca.Size4,
                            position: h.kb.Relative,
                            textAlign: h.Sb.Center,
                            className: "profile-edit__status-message"
                        }, s), c.createElement(h.Fb, {
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
                            "data-test-selector": a.UpdateButton,
                            onClick: this.onUpdateButtonClick,
                            size: h.D.Large
                        }, Object(d.d)("Update", "Profile Edit"))))), o)
                    }, t.prototype.setDefaultAvatar = function() {
                        return l.__awaiter(this, void 0, void 0, function() {
                            var e, t, n;
                            return l.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        this.setState({
                                            statusMessage: S.b.Uploading
                                        }), e = S.b.UnexpectedError, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, Object(E.b)(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                    case 2:
                                        return 204 === (t = a.sent()).status || 200 === t.status ? e = S.b.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                    case 3:
                                        return n = a.sent(), this.logger.error(n, "Default Avatar PUT failed."), [3, 4];
                                    case 4:
                                        return e === S.b.Success ? this.handleImageUpdated() : this.setState({
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
                                            statusMessage: S.b.Success
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
                I = Object(r.compose)(Object(_.b)("Profile Edit", {
                    autoReportInteractive: !0
                }), Object(g.a)(w, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                }))(U);
            var N = Object(i.connect)(function(e) {
                return {
                    authToken: Object(s.a)(e)
                }
            }, function(e, t) {
                return Object(r.bindActionCreators)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(o.c)()
                    }
                }, e)
            })(I);
            n.d(t, "a", function() {
                return N
            })
        },
        "KwO+": function(e, t, n) {},
        LNkj: function(e, t, n) {},
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
        "OCR+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var a, i = n("/7QA"),
                r = n("D7An"),
                o = n("kRBY"),
                s = "gladiator_staff_alpha";

            function l() {
                var e = null;
                return function() {
                    if (null === e) {
                        var t = Object(o.e)(i.p.store.getState()),
                            n = t && t.roles && t.roles.isStaff;
                        e = !(!n || !i.b.get(s, !1)) || i.p.experiments.getAssignment(r.b.DiscoGladiator) === a.Variant1
                    }
                    return e
                }
            }! function(e) {
                e.Control = "control", e.Variant1 = "variant1"
            }(a || (a = {}))
        },
        Sejb: function(e, t, n) {
            "use strict";

            function a(e, t, n) {
                var a = new FileReader;
                a.onloadend = function() {
                    n && n(a.result)
                }, a.readAsDataURL(e);
                var i = new FileReader;
                i.onloadend = function() {
                    t(i.result)
                }, i.readAsArrayBuffer(e)
            }

            function i(e) {
                var t = "";
                if (e && e.name) {
                    var n = e.name;
                    t = n.slice((Math.max(0, n.lastIndexOf(".")) || 1 / 0) + 1)
                }
                return "" === t && (t = "png"), t
            }
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return i
            })
        },
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n("mrSG"),
                i = n("/7QA"),
                r = n("kRBY"),
                o = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, a.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, a.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, a.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, a.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            var i, r, o, s;
                            return a.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), i = t.headers ? t.headers["Content-Type"] : void 0, r = this.serialize(t.body, i), o = a.__assign({}, t, {
                                            body: r
                                        }), [4, this._fetch(e, o)];
                                    case 1:
                                        return s = l.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, l.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            var i;
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((i = r.sent()).requestError) throw i.requestError;
                                        if (i.error) throw new Error("Error while sending legacy-api request: " + i.error.status + " - " + i.error.message);
                                        return [2, a.__assign({}, i, {
                                            body: i.body
                                        })];
                                    case 2:
                                        throw r.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, i.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return a.__awaiter(this, void 0, Promise, function() {
                            var t, n, i, r;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return n = a.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                    case 3:
                                        return i = a.sent(), e.headers && e.headers.get && (r = e.headers.get("Content-Type")) && -1 !== r.indexOf("application/json") && (t.requestError = i), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, fetch(this.getAPIURL(e).toString(), t)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.constructOptions = function(e, t) {
                        return e = Object.assign({}, e, {
                            headers: a.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var n = i.p.store.getState(),
                            a = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": i.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (a["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(r.e)(n);
                        return o && (a.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (a["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            a[e] && delete a[e]
                        }), a
                    }, e.logger = i.p.logger.withCategory("legacy-api"), e
                }()
        },
        bWJD: function(e, t, n) {},
        c0Zc: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                i = n("Ue10");

            function r(e) {
                var t = null;
                return e.description && (t = a.createElement(i.Ya, {
                    margin: {
                        top: 1
                    }
                }, a.createElement(i.W, {
                    color: i.O.Alt2
                }, e.description))), a.createElement(i.Ya, {
                    margin: {
                        bottom: 2
                    }
                }, a.createElement(i.W, {
                    type: i.Wb.H3,
                    fontSize: i.Ca.Size4,
                    color: i.O.Alt,
                    bold: !0
                }, e.title), t)
            }
            n.d(t, "a", function() {
                return r
            })
        },
        c81k: function(e, t) {
            var n = {
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
            n.loc.source = {
                body: "query UserProfileEditor($login: String!) {\nuser(login: $login) {\nid\nlogin\nprofileImageURL70x70: profileImageURL(width: 70)\nprofileImageURL300x300: profileImageURL(width: 300)\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        eaSl: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var a = n("mrSG"),
                i = n("/7QA"),
                r = n("/aPz"),
                o = n("kMGJ"),
                s = n("vpah"),
                l = 1e4;

            function u(e) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var t, n, u, c, d, m, p, g, f, h, b, v, y, E, S, k, _;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                t = e.authToken, n = e.userID, u = e.format, c = e.image, d = e.imageType, m = e.onUploadCompletion, p = e.onUploadError, g = e.onUploadTimeout, f = e.timeout, h = void 0 === f ? l : f, b = i.k.withCategory("Upload image"), a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]), [4, Object(o.a)(n, t, d, u)];
                            case 2:
                                return E = a.sent(), v = E.upload_url, y = E.upload_id, [3, 4];
                            case 3:
                                return S = a.sent(), b.error(S, "Request for upload ID failed to get expected response from server"), p(), [2];
                            case 4:
                                return _ = i.l.subscribe({
                                    topic: Object(r.o)(n),
                                    success: function() {
                                        try {
                                            Object(o.c)(v, c)
                                        } catch (e) {
                                            return b.error(e, "Image Upload Failed"), _(), void p()
                                        }
                                        k = setTimeout(function() {
                                            _(), g()
                                        }, h)
                                    },
                                    failure: function() {
                                        p()
                                    },
                                    onMessage: function(e) {
                                        if (e.upload_id === y) {
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
                                    clearTimeout(k), _()
                                }]
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
            var a = n("mrSG"),
                i = n("/7QA"),
                r = n("yLwq");

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
                return fetch(i.a.apiBaseURL + "/kraken/users/" + e + "/default_images?client_id=" + i.a.authSettings.clientID + "&api_version=" + i.a.defaultAPIVersion, {
                    method: "PUT",
                    headers: {
                        Authorization: "OAuth " + t,
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify({
                        default_profile_image: r.b[n].id
                    })
                })
            }

            function l(e, t, n, r) {
                return a.__awaiter(this, void 0, void 0, function() {
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, fetch(i.a.apiBaseURL + "/kraken/users/" + e + "/upload_image?client_id=" + i.a.authSettings.clientID + "&api_version=" + i.a.defaultAPIVersion + "&image_type=" + n + "&format=" + r, {
                                    method: "POST",
                                    headers: {
                                        Authorization: "OAuth " + t
                                    }
                                })];
                            case 1:
                                return [2, a.sent().json()]
                        }
                    })
                })
            }
        },
        pchi: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UpdateEmailReusable"
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
                                    value: "UpdateUserEmailReusableInput"
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
                                value: "updateUserEmailReusable"
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
                                        value: "user"
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
                                                value: "isEmailReusable"
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
                    end: 142
                }
            };
            n.loc.source = {
                body: "mutation UpdateEmailReusable($input: UpdateUserEmailReusableInput!) {\nupdateUserEmailReusable(input: $input) {\nuser {\nid\nisEmailReusable\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        sL9O: function(e, t, n) {},
        vpah: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return s
            });
            var a, i, r = n("/7QA"),
                o = n("Ue10");

            function s(e) {
                switch (e) {
                    case i.Success:
                        return {
                            message: Object(r.d)("Success!", "Profile Edit"),
                            type: o.ib.Success
                        };
                    case i.UnexpectedError:
                        return {
                            message: Object(r.d)("Unexpected error, please try again.", "Profile Edit"),
                            type: o.ib.Alert
                        };
                    case i.BadSizeError:
                        return {
                            message: Object(r.d)("Image might exceed 10MB.", "Profile Edit"),
                            type: o.ib.Alert
                        };
                    case i.NonImageError:
                        return {
                            message: Object(r.d)("You must upload an image.", "Profile Edit"),
                            type: o.ib.Alert
                        };
                    case i.WrongFormatError:
                        return {
                            message: Object(r.d)("You must select a valid image type.", "Profile Edit"),
                            type: o.ib.Alert
                        };
                    case i.TimeoutError:
                        return {
                            message: Object(r.d)("Upload timed-out. Please try again.", "Profile Edit"),
                            type: o.ib.Alert
                        };
                    case i.Uploading:
                        return {
                            message: Object(r.d)("Uploading....", "Profile Edit"),
                            type: o.ib.Brand
                        };
                    case i.ImageNotSelected:
                        return {
                            message: Object(r.d)("Select a image first.", "Profile Edit"),
                            type: o.ib.Alert
                        };
                    default:
                        return {
                            message: Object(r.d)("Please try again.", "Profile Edit"),
                            type: o.ib.Alert
                        }
                }
            }! function(e) {
                e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
            }(a || (a = {})),
            function(e) {
                e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
            }(i || (i = {}))
        },
        "w+Ve": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n("q1tI"),
                i = n("/7QA"),
                r = n("ZDlU"),
                o = function() {
                    return a.createElement(r.a, {
                        message: Object(i.d)("Error loading user data. Please try again later.", "SettingsPageError")
                    })
                }
        }
    }
]);