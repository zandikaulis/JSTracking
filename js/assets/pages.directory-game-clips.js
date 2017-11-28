webpackJsonp([48], {
    1012: function(e, t) {},
    1015: function(e, t, n) {
        "use strict";

        function i() {
            return Object(l.d)("Unable to ban user", "BlockUserMutation")
        }

        function a(e) {
            var t = this;
            return Object(s.a)(m, {
                props: function(n) {
                    return {
                        onBanUser: function(a, s) {
                            return void 0 === s && (s = null), o.__awaiter(t, void 0, void 0, function() {
                                var t, m, h, f, g, y;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (t = s ? p.a.Timeout : p.a.Ban, m = e(n.ownProps), h = m.channelID, f = m.onPushMessage, !n.mutate) return [3, 5];
                                            o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), [4, n.mutate(Object(c.a)({
                                                channelID: h,
                                                bannedUserLogin: a,
                                                expiresIn: s && r(s)
                                            }))];
                                        case 2:
                                            return o.sent(), g = Object(u.a)(t, a, null, s), f && f(g), [2, g];
                                        case 3:
                                            throw y = o.sent(), l.i.error(y, "Unable to ban user"), f && f(Object(d.a)(i())), new Error(i());
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            throw f && f(Object(d.a)(i())), new Error(i());
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })
        }

        function r(e) {
            if (!e) return "0s";
            var t = e,
                n = "";
            if (t > v) {
                var i = Math.floor(t / v);
                t -= i * v, n += i + "mo"
            }
            if (t > y) {
                var a = Math.floor(t / y);
                t -= a * y, n += a + "w"
            }
            if (t > g) {
                var r = Math.floor(t / g);
                t -= r * g, n += r + "d"
            }
            if (t > f) {
                var o = Math.floor(t / f);
                t -= o * f, n += o + "h"
            }
            if (t > h) {
                var l = Math.floor(t / h);
                t -= l * h, n += l + "m"
            }
            return t > 0 && (n += t + "s"), n
        }
        t.a = a;
        var o = n(0),
            l = n(2),
            s = n(8),
            c = n(23),
            d = n(964),
            u = n(986),
            p = n(918),
            m = n(1023),
            h = (n.n(m), 60),
            f = 60 * h,
            g = 24 * f,
            y = 7 * g,
            v = 4 * y
    },
    1016: function(e, t, n) {
        "use strict";

        function i() {
            return {
                languagePreferences: Object(c.b)()
            }
        }

        function a(e, t) {
            switch (void 0 === e && (e = i()), t.type) {
                case s.a:
                    return o.__assign({}, e, {
                        languagePreferences: t.languagePreferences
                    });
                default:
                    return e
            }
        }

        function r(e) {
            return e.userPreferences.languagePreferences
        }
        t.a = r;
        var o = n(0),
            l = n(2),
            s = n(993),
            c = n(992);
        l.n.store.registerReducer("userPreferences", a)
    },
    1017: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(E.bindActionCreators)({
                onClose: N.c
            }, e)
        }
        var a = n(0),
            r = n(1),
            o = n(2),
            l = n(963),
            s = n(3),
            c = (n(1125), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(l.a, {
                        allowedFileTypes: this.props.allowedFileTypes,
                        onFilesSubmitted: this.props.processFiles
                    }, r.createElement(s.U, {
                        className: "image-uploader",
                        textAlign: s._22.Center,
                        display: s.H.Flex,
                        flexDirection: s.J.Column,
                        alignItems: s.c.Center,
                        justifyContent: s.T.Center,
                        position: s._2.Relative,
                        fullHeight: !0,
                        fullWidth: !0
                    }, this.renderErrorMessage(), r.createElement(s.U, {
                        position: s._2.Relative
                    }, r.createElement(s.U, {
                        className: "image-uploader__upload-svg--anim-backfill"
                    }, r.createElement(s._8, {
                        asset: s._9.Upload,
                        type: s._10.Alt2,
                        width: 99,
                        height: 76
                    })), r.createElement(s.U, {
                        className: "image-uploader__upload-svg--anim-fill",
                        position: s._2.Absolute,
                        display: this.props.isLoading ? s.H.Block : s.H.Hide,
                        attachTop: !0
                    }, r.createElement(s._8, {
                        asset: s._9.Upload,
                        type: s._10.Brand,
                        width: 99,
                        height: 76
                    }))), this.props.isLoading ? this.renderLoadingState() : this.renderNormalState()))
                }, t.prototype.renderLoadingState = function() {
                    return r.createElement(s.U, {
                        margin: 1,
                        "data-test-selector": "image-uploader-loading"
                    }, r.createElement(s._21, {
                        type: s._26.H4
                    }, Object(o.d)("Uploading", "ImageUploader")))
                }, t.prototype.renderNormalState = function() {
                    var e = Object(o.d)("Browse", "ImageUploader");
                    return r.createElement(s.U, null, r.createElement(s.U, {
                        padding: 1
                    }, r.createElement(s._21, {
                        type: s._26.H4
                    }, Object(o.d)("Drag and drop your image here", "ImageUploader"))), r.createElement(s.U, {
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            x: 1,
                            y: 0
                        },
                        fullWidth: !0,
                        "data-test-selector": "image-uploader-hint"
                    }, r.createElement(s._21, {
                        type: s._26.P,
                        fontSize: s.L.Size7,
                        color: s.F.Alt2
                    }, this.props.hintMessage)), r.createElement(s.U, null, r.createElement(s.u, {
                        ariaLabel: e,
                        type: s.z.Hollow
                    }, e)))
                }, t.prototype.renderErrorMessage = function() {
                    if (this.props.errorMessage) return r.createElement(s.U, {
                        margin: {
                            bottom: 1
                        },
                        "data-test-selector": "image-uploader-error"
                    }, r.createElement(s._21, {
                        type: s._26.H5,
                        color: s.F.Error,
                        bold: !0
                    }, this.props.errorMessage))
                }, t
            }(r.Component)),
            d = n(990),
            u = function(e) {
                return new Promise(function(t, n) {
                    var i = new FileReader;
                    i.onload = function() {
                        var e = p(i.result);
                        t(e)
                    }, i.onerror = function(e) {
                        n(e)
                    }, i.readAsDataURL(e)
                })
            },
            p = function(e) {
                return e.replace(/data:image.*;base64,/, "")
            },
            m = this,
            h = function(e, t, n) {
                return a.__awaiter(m, void 0, void 0, function() {
                    var i, r, o, l, s, c;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return t ? (i = void 0, n ? (s = {}, r = n, [4, u(e)]) : [3, 2]) : [3, 5];
                            case 1:
                                return s[r] = a.sent(), i = s, [3, 4];
                            case 2:
                                return c = {}, o = d.a.Default, [4, u(e)];
                            case 3:
                                c[o] = a.sent(), i = c, a.label = 4;
                            case 4:
                                return [2, i];
                            case 5:
                                return l = new FormData, l.append("files[]", e), [2, l];
                            case 6:
                                return [2]
                        }
                    })
                })
            },
            f = function(e, t) {
                return Object(o.d)("Recommended image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                    imageDimensions: e,
                    imageFileMegabytes: t
                }, "ImageUploader")
            },
            g = function(e, t) {
                return Object(o.d)("Required image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                    imageDimensions: e,
                    imageFileMegabytes: t
                }, "ImageUploader")
            },
            y = function(e) {
                return Object(o.d)("Couldn't upload image. Request returned {statusCode, number}", {
                    statusCode: e
                }, "ImageUploader")
            },
            v = function() {
                return Object(o.d)("File too large.", "ImageUploader")
            },
            b = function() {
                return Object(o.d)("Incompatible format. File must be an image in PNG or JPG format.", "ImageUploader")
            },
            k = n(921),
            C = this,
            _ = function(e, t) {
                return a.__awaiter(C, void 0, void 0, function() {
                    var n;
                    return a.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, k.a.post(e, {
                                    body: t,
                                    credentials: t instanceof FormData ? "include" : void 0
                                })];
                            case 1:
                                if (n = i.sent(), n.status >= 200 && n.status < 300) return [2, n.body];
                                if (n && n.error) throw new Error(JSON.stringify(n.error));
                                if (n && n.requestError) throw new Error(JSON.stringify(n.requestError));
                                throw new Error(y(n.status))
                        }
                    })
                })
            },
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        errorMessage: "",
                        hintMessage: "",
                        allowedFileTypes: ["image/jpeg", "image/png"]
                    }, t.processFiles = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, r;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return t = e[0], (this.setState({
                                            errorMessage: "",
                                            isLoading: !0
                                        }), this.isFileTypeAcceptable(t)) ? [3, 1] : (this.setState({
                                            errorMessage: b(),
                                            isLoading: !1
                                        }), [3, 7]);
                                    case 1:
                                        return this.isFileSizeAcceptable(t) ? [3, 2] : (this.setState({
                                            errorMessage: v(),
                                            isLoading: !1
                                        }), [3, 7]);
                                    case 2:
                                        return [4, h(t, this.props.shouldBase64Encode, this.props.base64EncodedPropertyName)];
                                    case 3:
                                        n = a.sent(), a.label = 4;
                                    case 4:
                                        return a.trys.push([4, 6, , 7]), [4, _(this.props.uploadURL, n)];
                                    case 5:
                                        return i = a.sent(), this.setState({
                                            isLoading: !1
                                        }), this.props.onFinishUploading && this.props.onFinishUploading(i, n), [3, 7];
                                    case 6:
                                        return r = a.sent(), this.setState({
                                            errorMessage: r.message,
                                            isLoading: !1
                                        }), [3, 7];
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = "";
                    e = this.props.isRequiredImageDimensions ? g(this.props.imageDimensions, this.props.maxFileSizeMegabytes) : f(this.props.imageDimensions, this.props.maxFileSizeMegabytes), this.setState({
                        hintMessage: e
                    })
                }, t.prototype.render = function() {
                    return r.createElement(c, {
                        allowedFileTypes: this.state.allowedFileTypes,
                        errorMessage: this.state.errorMessage,
                        hintMessage: this.state.hintMessage,
                        isLoading: this.state.isLoading,
                        processFiles: this.processFiles
                    })
                }, t.prototype.isFileTypeAcceptable = function(e) {
                    return this.state.allowedFileTypes.includes(e.type)
                }, t.prototype.isFileSizeAcceptable = function(e) {
                    var t = 1e6 * this.props.maxFileSizeMegabytes;
                    return e.size <= t
                }, t
            }(r.Component),
            w = n(9),
            E = n(11),
            N = n(50),
            D = n(134),
            O = (n(1126), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(s._17, {
                        className: "image-uploader-modal",
                        background: s.m.Base
                    }, r.createElement(S, a.__assign({
                        onFinishUploading: this.props.onClose
                    }, this.props)), r.createElement(D.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(r.Component)),
            T = Object(w.a)(null, i)(O);
        n.d(t, "a", function() {
            return S
        }), n.d(t, "b", function() {
            return T
        })
    },
    1023: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Chat_BanUserFromChatRoom"
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
                                value: "BanUserFromChatRoomInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "banUserFromChatRoom"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "ban"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "createdAt"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 148
            }
        };
        n.loc.source = {
            body: "mutation Chat_BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {\n  banUserFromChatRoom(input: $input) {\n    ban {\n      createdAt\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1035: function(e, t, n) {
        "use strict";

        function i() {
            return {
                isEditingEnabled: !1
            }
        }

        function a(e, t) {
            switch (void 0 === e && (e = i()), t.type) {
                case s.b:
                    return o.__assign({}, e, {
                        isEditingEnabled: !0
                    });
                case s.a:
                    return o.__assign({}, e, {
                        isEditingEnabled: !1
                    });
                default:
                    return e
            }
        }

        function r(e) {
            return e.directoryHeader.isEditingEnabled
        }
        t.a = r;
        var o = n(0),
            l = n(2),
            s = n(995);
        l.n.store.registerReducer("directoryHeader", a)
    },
    1040: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                isLoggedIn: Object(v.d)(e)
            }
        }

        function a(e) {
            return Object(f.bindActionCreators)({
                login: function() {
                    return Object(y.f)(g.a.DirectoryFollowButton)
                }
            }, e)
        }

        function r(e) {
            return Object(f.bindActionCreators)({
                onCloseModal: j.c
            }, e)
        }

        function o(e) {
            return {
                isHeaderEditEnabled: Object(Q.a)(e),
                isLoggedIn: Object(v.d)(e)
            }
        }

        function l(e) {
            return Object(f.bindActionCreators)({
                login: function() {
                    return Object(y.f)(g.a.ReportChannel)
                },
                onShowModal: j.d,
                onCloseModal: j.c,
                onEnableDirectoryHeaderEdit: R.d,
                onDisableDirectoryHeaderEdit: R.c
            }, e)
        }
        var s, c = n(0),
            d = n(4),
            u = n(1),
            p = n(12),
            m = n(2),
            h = n(9),
            f = n(11),
            g = n(51),
            y = n(35),
            v = n(19),
            b = n(8),
            k = n(23),
            C = n(14),
            _ = n(6),
            S = n(3),
            w = n(1151),
            E = n(1152),
            N = n(1153),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isFollowing: !1
                    }, t.communityDataLoaded = function() {
                        return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.community
                    }, t.toggleFollowing = function() {
                        t.state.isFollowing ? t.unfollowChannel() : t.followChannel(), t.setState(function(e) {
                            return {
                                isFollowing: !e.isFollowing
                            }
                        })
                    }, t.trackResponse = function(e) {
                        if (t.props.data) {
                            var n = "follow" === e ? C.SpadeEventType.CommunityFollow : C.SpadeEventType.CommunityUnfollow;
                            m.n.tracking.track(n, {
                                community_id: t.props.data.community.id,
                                name: t.props.data.community.name,
                                is_official: !1,
                                user_id: t.props.data.currentUser && t.props.data.currentUser.id
                            })
                        }
                    }, t.followChannel = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i = this;
                            return c.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.props.followCommunity && this.props.data ? (e = c.__assign({}, Object(k.a)({
                                            communityID: this.props.data.community.id
                                        }), {
                                            optimisticResponse: {
                                                followCommunity: {
                                                    __typename: "FollowCommunityPayload",
                                                    community: {
                                                        self: {
                                                            follow: {
                                                                followedAt: (new Date).toISOString(),
                                                                __typename: "CommunityFollow"
                                                            },
                                                            __typename: "CommunitySelfConnection"
                                                        },
                                                        __typename: "Community"
                                                    }
                                                }
                                            }
                                        }), [4, this.props.followCommunity(e)]) : [2];
                                    case 1:
                                        return t = a.sent(), n = function(e) {
                                            return i.trackResponse("follow"), e.community.self.follow && (e.community.self.follow.followedAt = t.data.followCommunity.community.self.follow.followedAt), e
                                        }, Object(k.d)(w, {
                                            name: this.props.directoryName
                                        }, n), [2]
                                }
                            })
                        })
                    }, t.unfollowChannel = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.props.unfollowCommunity && this.props.data ? (e = c.__assign({}, Object(k.a)({
                                            communityID: this.props.data.community.id
                                        }), {
                                            optimisticResponse: {
                                                unfollowCommunity: {
                                                    __typename: "UnfollowCommunityPayload",
                                                    follow: null
                                                }
                                            }
                                        }), [4, this.props.unfollowCommunity(e)]) : [2];
                                    case 1:
                                        return i.sent(), t = function(e) {
                                            return n.trackResponse("unfollow"), e.community.self.follow = null, e
                                        }, Object(k.d)(w, {
                                            name: this.props.directoryName
                                        }, t), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.data && !e.data.loading && !e.data.error && e.data.community && this.setState({
                        isFollowing: e.data.community.self && null !== e.data.community.self.follow
                    })
                }, t.prototype.render = function() {
                    var e = Object(m.d)("Follow", "DirectoryFollowButton");
                    return this.props.isLoggedIn ? !this.props.data || this.props.data.loading ? u.createElement(S.U, {
                        margin: {
                            left: 1
                        }
                    }, u.createElement(S._1, {
                        width: 70,
                        height: 30
                    })) : this.communityDataLoaded() ? this.state.isFollowing ? u.createElement(S.U, {
                        display: S.H.Flex,
                        margin: {
                            left: 1
                        },
                        className: "directory-follow-btn"
                    }, u.createElement(S.v, {
                        ariaLabel: Object(m.d)("Unfollow", "DirectoryFollowButton"),
                        onClick: this.toggleFollowing,
                        "data-a-target": "directory-unfollow-button",
                        "data-test-selector": "unfollow-button",
                        icon: S._9.Heart,
                        statusAlertIcon: S._9.Unheart
                    })) : u.createElement(S.U, {
                        margin: {
                            left: 1
                        }
                    }, u.createElement(S.u, c.__assign({
                        ariaLabel: e,
                        "data-a-target": "directory-follow-button",
                        "data-test-selector": "follow-button",
                        icon: S._9.Heart,
                        onClick: this.toggleFollowing
                    }, Object(S._39)(this.props)), e)) : null : u.createElement(S.U, {
                        margin: {
                            left: 1
                        }
                    }, u.createElement(S.u, {
                        ariaLabel: e,
                        icon: S._9.Heart,
                        onClick: this.props.login,
                        "data-a-target": "directory-follow-button"
                    }, e))
                }, t.prototype.reportInteractive = function() {
                    this.props.isLoggedIn ? this.props.directoryName && !this.communityDataLoaded() || this.props.latencyTracking.reportInteractive() : this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(b.a)(w, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.directoryName
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn || !e.directoryName
                    }
                }), Object(b.a)(E, {
                    name: "followCommunity"
                }), Object(b.a)(N, {
                    name: "unfollowCommunity"
                }), Object(_.c)("DirectoryFollowButton")], t)
            }(u.Component),
            O = D,
            T = Object(h.a)(i, a)(O),
            U = n(979),
            F = n(137),
            M = n(407),
            j = n(50),
            R = n(995),
            A = n(417),
            x = n(931),
            I = n(926),
            L = n(923),
            V = n(31),
            B = n(134),
            P = (n(1154), n(1155)),
            G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.tosBanCommunity = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.props.tosBanCommunity ? (e = c.__assign({}, Object(k.a)({
                                            communityID: this.props.communityID
                                        }), {
                                            optimisticResponse: {
                                                tosBanCommunity: {
                                                    community: {
                                                        id: this.props.communityID,
                                                        __typename: "Community"
                                                    },
                                                    __typename: "TosBanCommunityPayload"
                                                }
                                            }
                                        }), [4, this.props.tosBanCommunity(e)]) : [2];
                                    case 1:
                                        return t.sent(), this.props.onCloseModal(), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(S.P, {
                        position: S._2.Relative
                    }, u.createElement(S._17, {
                        background: S.m.Base,
                        className: "community-ban-modal"
                    }, u.createElement(S.U, {
                        padding: 2
                    }, u.createElement(S.U, {
                        margin: {
                            bottom: 2
                        }
                    }, u.createElement(S._21, {
                        type: S._26.H4
                    }, Object(m.d)("Are you sure you want to ban {name}?", {
                        name: this.props.communityName
                    }, "CommunityBanModal"))), u.createElement(S._17, {
                        borderTop: !0
                    }, u.createElement(S.U, {
                        padding: {
                            top: 2
                        },
                        textAlign: S._22.Center
                    }, u.createElement(S.U, {
                        display: S.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, u.createElement(S.u, {
                        type: S.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(m.d)("Cancel", "CommunityBanModal"))), u.createElement(S.U, {
                        display: S.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, u.createElement(S.u, {
                        onClick: this.tosBanCommunity,
                        "data-test-selector": "ban-button"
                    }, Object(m.d)("Ban", "CommunityBanModal")))))), u.createElement(B.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(u.Component),
            H = Object(V.compose)(Object(b.a)(P, {
                name: "tosBanCommunity"
            }))(G),
            z = Object(h.a)(null, r)(H),
            q = n(1156),
            $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingCommunity: !1
                    }, t.openReportModal = function() {
                        t.props.isLoggedIn ? t.props.onShowModal(x.a, {
                            onClose: t.handleReportModalClose,
                            reportContext: {
                                contentID: t.props.data.community.id,
                                contentType: L.a.Community,
                                targetUserID: t.props.data.community.owner.id,
                                extra: t.props.communityName
                            },
                            title: Object(m.d)("Report {communityName}", {
                                communityName: t.props.communityName
                            }, "CommunitiesSettingsCog")
                        }) : t.props.login()
                    }, t.openBanModal = function() {
                        t.props.onShowModal(z, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName
                        })
                    }, t.onEditModeToggle = function() {
                        t.props.isHeaderEditEnabled ? t.props.onDisableDirectoryHeaderEdit() : (m.n.history.push(Object(M.a)(t.props.communityName) + "/details"), t.props.onEnableDirectoryHeaderEdit())
                    }, t.handleReportModalClose = function(e) {
                        (e === I.b.MutationError || e === I.b.Success) && t.props.history.push("/")
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && this.props.data.error ? null : u.createElement(S.U, {
                        position: S._2.Relative
                    }, u.createElement(A.a, null, u.createElement(S.v, {
                        ariaLabel: Object(m.d)("Settings", "CommunitiesSettingsCog"),
                        icon: S._9.Gear
                    }), u.createElement(S.p, {
                        direction: S.q.BottomRight,
                        size: S.r.ExtraSmall,
                        offsetX: "0.5rem"
                    }, this.renderModerationInteractable(), this.renderEditInteractable(), u.createElement(S.S, {
                        onClick: this.openReportModal,
                        "data-test-selector": "report-selector"
                    }, u.createElement(S.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Report", "CommunitiesSettingsCog"))), this.renderBanInteractable())))
                }, t.prototype.renderEditInteractable = function() {
                    return !this.props.data || this.props.data.loading ? null : this.props.data.community && !this.props.data.community.self.permissions.editing ? null : u.createElement(S.S, {
                        onClick: this.onEditModeToggle,
                        "data-test-selector": "edit-selector"
                    }, u.createElement(S.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Edit", "CommunitiesSettingsCog")))
                }, t.prototype.renderModerationInteractable = function() {
                    return !this.props.data || this.props.data.loading ? null : this.props.data.community && !this.props.data.community.self.permissions.banning ? null : u.createElement(S.S, {
                        linkTo: Object(F.a)("/communities/" + this.props.communityName + "/moderation/log"),
                        "data-test-selector": "moderation-selector"
                    }, u.createElement(S.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Moderation", "CommunitiesSettingsCog")))
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data && !this.props.data.loading && this.props.data.community && this.props.data.community.id && this.props.data && this.props.data.currentUser && this.props.data.currentUser.roles && (this.props.data.currentUser.roles.isStaff || this.props.data.currentUser.roles.isSiteAdmin) ? u.createElement(S.S, {
                        onClick: this.openBanModal,
                        "data-test-selector": "ban-selector"
                    }, u.createElement(S.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Ban", "CommunitiesSettingsCog"))) : null
                }, t = c.__decorate([Object(b.a)(q, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.communityName)
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn || !e.communityName
                    }
                }), Object(_.c)("SettingsCog", {
                    autoReportInteractive: !0
                })], t)
            }(u.Component),
            W = $,
            Q = n(1035),
            K = Object(h.a)(o, l)(Object(p.f)(W)),
            Y = n(1063),
            J = n(958);
        n(1157);
        ! function(e) {
            e[e.DirectoryPage = 0] = "DirectoryPage", e[e.DirectoryVideosPage = 1] = "DirectoryVideosPage", e[e.DirectoryClipsPage = 2] = "DirectoryClipsPage", e[e.DirectoryDetailsPage = 3] = "DirectoryDetailsPage"
        }(s || (s = {}));
        var X = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return u.createElement(S.U, {
                        className: "directory-tabs"
                    }, u.createElement(S.U, {
                        display: S.H.Flex,
                        justifyContent: S.T.Between,
                        flexWrap: S.K.NoWrap,
                        fullHeight: !0
                    }, u.createElement(S.U, {
                        display: S.H.Flex,
                        alignItems: S.c.Stretch,
                        flexShrink: 0,
                        flexWrap: S.K.NoWrap
                    }, this.renderTabs(), this.renderGameDetailsTab()), u.createElement(S.U, {
                        display: S.H.Flex,
                        alignItems: S.c.Center,
                        flexShrink: 0,
                        flexWrap: S.K.NoWrap,
                        padding: {
                            x: 2
                        }
                    }, this.renderSettingsCog(), this.renderFollowButton())))
                }, t.prototype.renderTabs = function() {
                    var e = this,
                        t = this.props.directoryType === J.a.Games ? Object(M.d)(this.props.directoryName) : Object(M.a)(this.props.directoryName);
                    return this.getDirectoryTabs().map(function(n, i) {
                        var a = n.label.replace(/ /g, "-").toLowerCase(),
                            r = d("directory-tabs__item", (o = {}, o["directory-tabs__item--first"] = 0 === i, o["directory-tabs__item--selected"] = n.isSelected, o));
                        return u.createElement(S.P, {
                            key: "directory-tabs__item--" + n.label,
                            display: S.H.Flex,
                            alignItems: S.c.Center,
                            flexShrink: 0,
                            "data-a-target": "game-directory-" + a + "-tab"
                        }, u.createElement(p.a, {
                            className: r,
                            to: "" + t + n.path
                        }, e.renderTabData(n.label)));
                        var o
                    })
                }, t.prototype.renderTabData = function(e) {
                    return u.createElement(S.U, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: S.H.Flex
                    }, u.createElement(S._21, {
                        type: S._26.Span,
                        fontSize: S.L.Size5
                    }, e))
                }, t.prototype.renderGameDetailsTab = function() {
                    if (!this.props.showGameDetails) return null;
                    var e, t = d("directory-tabs__item", (a = {}, a["directory-tabs__item--selected"] = this.props.activeTab === s.DirectoryDetailsPage, a)),
                        n = Object(m.d)("Game Details", "DirectoryGameTabs"),
                        i = Object(M.d)(this.props.directoryName) + "/details";
                    return e = m.b.get("commerce_gdp_launch", U.a.Off) !== U.a.On ? u.createElement("a", {
                        className: t,
                        href: Object(F.a)(i),
                        target: Object(F.b)() ? "_blank" : ""
                    }, this.renderTabData(n)) : u.createElement(p.a, {
                        className: t,
                        to: i
                    }, this.renderTabData(n)), u.createElement(S.P, {
                        display: S.H.Flex,
                        alignItems: S.c.Center,
                        flexShrink: 0
                    }, e);
                    var a
                }, t.prototype.renderSettingsCog = function() {
                    return this.props.directoryType !== J.a.Communities ? null : u.createElement(K, {
                        communityName: this.props.directoryName
                    })
                }, t.prototype.renderFollowButton = function() {
                    switch (this.props.directoryType) {
                        case J.a.Communities:
                            return u.createElement(T, {
                                directoryName: this.props.directoryName
                            });
                        case J.a.Games:
                            return u.createElement(Y.a, {
                                gameName: this.props.directoryName,
                                src: "directory"
                            });
                        default:
                            return null
                    }
                }, t.prototype.getDirectoryTabs = function() {
                    var e = this;
                    return [{
                        label: Object(m.d)("Live Channels", "DirectoryGameTabs"),
                        path: "",
                        isSelected: this.props.activeTab === s.DirectoryPage,
                        whitelistDirectories: [J.a.Communities, J.a.Games]
                    }, {
                        label: Object(m.d)("Videos", "DirectoryGameTabs"),
                        path: "/videos/all",
                        isSelected: this.props.activeTab === s.DirectoryVideosPage,
                        whitelistDirectories: [J.a.Games]
                    }, {
                        label: Object(m.d)("Clips", "DirectoryGameTabs"),
                        path: "/clips",
                        isSelected: this.props.activeTab === s.DirectoryClipsPage,
                        whitelistDirectories: [J.a.Games]
                    }, {
                        label: Object(m.d)("Details", "DirectoryHeader"),
                        path: "/details",
                        isSelected: this.props.activeTab === s.DirectoryDetailsPage,
                        whitelistDirectories: [J.a.Communities]
                    }].filter(function(t) {
                        return t.whitelistDirectories.includes(e.props.directoryType)
                    })
                }, t = c.__decorate([Object(_.c)("DirectoryGameTabs")], t)
            }(u.Component),
            Z = X;
        n.d(t, !1, function() {
            return "directory-tabs__item"
        }), n.d(t, !1, function() {
            return "directory-tabs__item--first"
        }), n.d(t, !1, function() {
            return "directory-tabs__item--selected"
        }), n.d(t, "a", function() {
            return s
        }), n.d(t, "b", function() {
            return Z
        })
    },
    1049: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                languagePreferences: Object(s.a)(e)
            }
        }

        function a(e) {
            return Object(o.bindActionCreators)({
                updateLanguagePreferences: l.c,
                clearLanguagePreferences: l.a
            }, e)
        }
        var r = n(9),
            o = n(11),
            l = n(992),
            s = n(1016),
            c = n(0),
            d = n(1),
            u = n(2),
            p = n(30),
            m = n(64),
            h = n(968),
            f = n(6),
            g = n(3),
            y = (n(1050), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleLanguageChange = function(e) {
                        var n = e.currentTarget,
                            i = n.parentElement && n.parentElement.getAttribute("data-language-code");
                        i && t.props.updateLanguagePreferences(i, n.checked)
                    }, t.renderLanguageOption = function(e) {
                        return d.createElement(g.U, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            key: e.code
                        }, d.createElement(g.E, {
                            label: e.label,
                            checked: t.props.languagePreferences.includes(e.code),
                            "data-language-code": e.code,
                            "data-a-target": "language-filter-" + e.code + "-checkbox",
                            onChange: t.handleLanguageChange
                        }))
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.languagePreferences.length;
                    return d.createElement(g.U, {
                        className: "language-select-menu"
                    }, d.createElement(m.a, null, d.createElement(g.u, {
                        "data-test-selector": "language-dropdown-button",
                        "data-a-target": "language-filter-dropdown",
                        dropdown: !0,
                        type: g.z.Hollow
                    }, d.createElement(g.U, {
                        display: g.H.Flex
                    }, Object(u.d)("Language", "LanguageSelectMenu"), d.createElement(g.U, {
                        margin: {
                            left: .5
                        }
                    }, 0 !== e && d.createElement(g.Z, {
                        type: g._0.Brand,
                        label: e.toString()
                    })))), d.createElement(g.p, {
                        direction: g.q.BottomLeft,
                        noTail: !0,
                        "data-a-target": "language-filter-balloon"
                    }, d.createElement(p.b, {
                        className: "language-select-menu__balloon"
                    }, d.createElement(g.U, {
                        padding: .5
                    }, Object(h.b)().map(this.renderLanguageOption))), d.createElement(g._17, {
                        background: g.m.Alt,
                        borderTop: !0,
                        className: "language-select-menu__footer"
                    }, d.createElement(g.u, {
                        type: g.z.Text,
                        onClick: this.props.clearLanguagePreferences,
                        "data-a-target": "language-clear-all"
                    }, Object(u.d)("Clear all", "LanguageSelectMenu"))))))
                }, t = c.__decorate([Object(f.c)("LanguageSelectMenu")], t)
            }(d.Component)),
            v = y,
            b = Object(r.a)(i, a)(v);
        n.d(t, "a", function() {
            return b
        })
    },
    1050: function(e, t) {},
    1060: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        }), n.d(t, "b", function() {
            return c
        }), n.d(t, "c", function() {
            return u
        });
        var i, a = n(2),
            r = n(983),
            o = n(14),
            l = (i = {}, i[r.b.Twitter] = "twitter", i[r.b.Reddit] = "reddit", i[r.b.VKontakte] = "vkontakte", i[r.b.Facebook] = "facebook", i[r.b.Copy] = "link", i),
            s = {
                MyClips: "MyClips",
                ClipsOfMyChannel: "ClipsOfMyChannel"
            },
            c = {
                Game: "TopClipsGame",
                Channel: "TopClipsChannel"
            },
            d = {
                MyClips: o.PageviewLocation.MyClipsManager,
                ClipsOfMyChannel: o.PageviewLocation.ChannelClipsManager,
                TopClipsGame: o.PageviewLocation.ClipsGame,
                TopClipsChannel: o.PageviewLocation.ChannelClips
            },
            u = function(e, t) {
                return function(n) {
                    a.n.tracking.track(o.SpadeEventType.VideoShare, {
                        vod_id: e.id,
                        vod_type: "clip",
                        share_platform: l[n],
                        location: d[t],
                        game: e.game ? e.game.name : null,
                        channel_id: Number(e.broadcaster.id),
                        channel: e.broadcaster.login,
                        live: null
                    })
                }
            }
    },
    1063: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                isLoggedIn: Object(c.d)(e)
            }
        }

        function a(e) {
            return Object(o.bindActionCreators)({
                showLoginModal: function() {
                    return Object(s.f)(l.a.FollowGameButton)
                }
            }, e)
        }
        var r = n(9),
            o = n(11),
            l = n(51),
            s = n(35),
            c = n(19),
            d = n(0),
            u = n(1),
            p = n(31),
            m = n(2),
            h = n(8),
            f = n(23),
            g = n(14),
            y = n(3),
            v = n(1064),
            b = n(1065),
            k = n(1066),
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.follow = function() {
                        return d.__awaiter(t, void 0, void 0, function() {
                            var e, t = this;
                            return d.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.followGame && this.props.data && this.props.data.game ? (e = d.__assign({}, Object(f.a)({
                                            gameID: this.props.data.game.id
                                        }), {
                                            optimisticResponse: {
                                                followGame: {
                                                    __typename: "FollowGamePayload",
                                                    game: {
                                                        self: {
                                                            follow: {
                                                                followedAt: (new Date).toISOString(),
                                                                __typename: "GameFollow"
                                                            },
                                                            __typename: "GameSelfConnection"
                                                        },
                                                        __typename: "Game"
                                                    }
                                                }
                                            },
                                            update: function(e, n) {
                                                var i = n.data.followGame,
                                                    a = e.readQuery({
                                                        query: b,
                                                        variables: {
                                                            name: t.props.gameName
                                                        }
                                                    });
                                                a.game && (a.game.self.follow = i.game.self.follow, e.writeQuery({
                                                    query: b,
                                                    variables: {
                                                        name: t.props.gameName
                                                    },
                                                    data: a
                                                }))
                                            }
                                        }), [4, this.props.followGame(e)]) : [2];
                                    case 1:
                                        return n.sent(), this.track(g.SpadeEventType.GameFollow), [2]
                                }
                            })
                        })
                    }, t.unfollow = function() {
                        return d.__awaiter(t, void 0, void 0, function() {
                            var e, t = this;
                            return d.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.unfollowGame && this.props.data && this.props.data.game ? (e = d.__assign({}, Object(f.a)({
                                            gameID: this.props.data.game.id
                                        }), {
                                            optimisticResponse: {
                                                unfollowGame: {
                                                    __typename: "UnfollowGamePayload",
                                                    follow: null
                                                }
                                            },
                                            update: function(e) {
                                                var n = e.readQuery({
                                                    query: b,
                                                    variables: {
                                                        name: t.props.gameName
                                                    }
                                                });
                                                n.game && (n.game.self.follow = null, e.writeQuery({
                                                    query: b,
                                                    variables: {
                                                        name: t.props.gameName
                                                    },
                                                    data: n
                                                }))
                                            }
                                        }), [4, this.props.unfollowGame(e)]) : [2];
                                    case 1:
                                        return n.sent(), this.track(g.SpadeEventType.GameUnfollow), [2]
                                }
                            })
                        })
                    }, t
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    var e = Object(m.d)("Follow", "FollowGameButton");
                    if (!this.props.isLoggedIn) return u.createElement(y.u, {
                        icon: y._9.Heart,
                        ariaLabel: e,
                        "data-test-selector": "follow-game-button-component",
                        onClick: this.props.showLoginModal
                    }, e);
                    if (this.isLoading) return u.createElement(y._1, {
                        width: 70,
                        height: 30
                    });
                    if (this.isFollowing) {
                        var t = Object(m.d)("Unfollow", "FollowGameButton");
                        return u.createElement(y.v, {
                            ariaLabel: t,
                            "data-test-selector": "follow-game-button-component",
                            icon: y._9.Heart,
                            onClick: this.unfollow,
                            statusAlertIcon: y._9.Unheart
                        })
                    }
                    return u.createElement(y.u, {
                        icon: y._9.Heart,
                        ariaLabel: e,
                        "data-test-selector": "follow-game-button-component",
                        onClick: this.follow,
                        "data-a-target": "game-directory-follow-button"
                    }, e)
                }, Object.defineProperty(t.prototype, "isFollowing", {
                    get: function() {
                        return !!(this.props.data && this.props.data.game && this.props.data.game.self && null !== this.props.data.game.self.follow)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isLoading", {
                    get: function() {
                        return !this.props.data || this.props.data.loading
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.track = function(e) {
                    m.n.tracking.track(e, {
                        src: this.props.src,
                        kind: e === g.SpadeEventType.GameFollow ? "follow" : "unfollow",
                        name: this.props.gameName
                    })
                }, t
            }(u.Component),
            _ = Object(p.compose)(Object(h.a)(b, {
                options: function(e) {
                    return {
                        variables: {
                            name: e.gameName
                        }
                    }
                },
                skip: function(e) {
                    return !e.isLoggedIn || !e.gameName
                }
            }), Object(h.a)(v, {
                name: "followGame"
            }), Object(h.a)(k, {
                name: "unfollowGame"
            }))(C),
            S = Object(r.a)(i, a)(_);
        n.d(t, "a", function() {
            return S
        })
    },
    1064: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowGameButton_FollowGame"
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
                                value: "FollowGameInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "followGame"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "game"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "self"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "follow"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "followedAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 187
            }
        };
        n.loc.source = {
            body: "mutation FollowGameButton_FollowGame($input: FollowGameInput!) {\n  followGame(input: $input) {\n    game {\n      self {\n        follow {\n          followedAt\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1065: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowGameButton_Game"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "name"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "game"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "name"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "self"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "follow"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "followedAt"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 177
            }
        };
        n.loc.source = {
            body: "query FollowGameButton_Game($name: String!) {\n  game(name: $name) {\n    id\n    name\n    self {\n      follow {\n        followedAt\n      }\n    }\n  }\n\n  currentUser {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1066: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowGameButton_UnfollowGame"
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
                                value: "UnfollowGameInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "unfollowGame"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "follow"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "followedAt"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 143
            }
        };
        n.loc.source = {
            body: "mutation FollowGameButton_UnfollowGame($input: UnfollowGameInput!) {\n  unfollowGame(input: $input) {\n    follow {\n      followedAt\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1125: function(e, t) {},
    1126: function(e, t) {},
    1130: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return a
        }), n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        });
        var i = n(958),
            a = function(e) {
                return e.startsWith("/communities") || e.startsWith("/directory/communities") ? i.a.Communities : i.a.Games
            },
            r = function(e) {
                switch (e) {
                    case "communities":
                        return i.a.Communities;
                    case "games":
                        return i.a.Games;
                    case "creative":
                        return i.a.Creative;
                    default:
                        return i.a.Games
                }
            },
            o = function(e) {
                switch (e) {
                    case "communities":
                        return [i.a.Communities, i.a.Creative];
                    case "games":
                        return [i.a.Games];
                    case "creative":
                        return [i.a.Creative];
                    default:
                        return [i.a.Games]
                }
            }
    },
    1135: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                headerEditMode: e.directoryHeader.isEditingEnabled
            }
        }

        function a(e) {
            return Object(d.bindActionCreators)({
                onCloseModal: u.c,
                onShowModal: u.d
            }, e)
        }

        function r(e) {
            return {
                headerEditMode: e.directoryHeader.isEditingEnabled
            }
        }

        function o(e) {
            return Object(d.bindActionCreators)({
                onCloseModal: u.c,
                onDisableDirectoryHeaderEdit: Q.c,
                onShowModal: u.d
            }, e)
        }
        var l = (n(1035), n(0)),
            s = n(1),
            c = n(9),
            d = n(11),
            u = n(50),
            p = n(2),
            m = n(8),
            h = n(23),
            f = n(921),
            g = n(14),
            y = "directory-avatar-edit-menu",
            v = "directory-avatar-overlay",
            b = "directory-avatar-remover",
            k = "directory-avatar-uploader",
            C = "directory-banner-edit-menu",
            _ = "directory-banner-overlay",
            S = "directory-banner-remover",
            w = "directory-banner-uploader",
            E = this,
            N = function(e) {
                return l.__awaiter(E, void 0, void 0, function() {
                    var t;
                    return l.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, f.a.get("https://api.twitch.tv/kraken/communities?name=" + e)];
                            case 1:
                                if ((t = n.sent()) && 200 === t.status && t.body) return [2, t.body];
                                throw new Error
                        }
                    })
                })
            },
            D = function(e) {
                return l.__awaiter(E, void 0, void 0, function() {
                    var t, n;
                    return l.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, N(e)];
                            case 1:
                                return t = i.sent(), [2, t.avatar_image_url];
                            case 2:
                                return n = i.sent(), [2, void 0];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            O = function(e) {
                return l.__awaiter(E, void 0, void 0, function() {
                    var t, n;
                    return l.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, N(e)];
                            case 1:
                                return t = i.sent(), [2, t.cover_image_url];
                            case 2:
                                return n = i.sent(), [2, void 0];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            T = "https://static-cdn.jtvnw.net/community-images/defaults/avatar-285x380.png",
            U = "https://static-cdn.jtvnw.net/community-images/defaults/banner-1200x180.png",
            F = n(958),
            M = function(e) {
                return e === F.a.Communities ? "COMMUNITY" : "GAME"
            },
            j = function() {
                return Object(p.d)("Upload new image", "DirectoryHeader")
            },
            R = function() {
                return Object(p.d)("Remove", "DirectoryHeader")
            },
            A = n(407),
            x = "https://api.twitch.tv/kraken/communities/",
            I = function(e) {
                return "" + x + e + "/images/avatar"
            },
            L = function(e) {
                return "" + x + e + "/images/cover"
            },
            V = function(e) {
                return e === F.a.Communities ? Object(A.b)("communities") : Object(A.b)()
            },
            B = n(1017),
            P = n(990),
            G = n(6),
            H = n(3),
            z = n(1147),
            q = (n(1148), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingAvatar: !1
                    }, t.renderAvatarEditMode = function() {
                        return t.props.headerEditMode ? s.createElement(H.U, null, s.createElement("div", {
                            onClick: t.onAvatarClick
                        }, s.createElement(H.U, {
                            "data-test-selector": v,
                            className: "directory-header__overlay",
                            flexDirection: H.J.Column,
                            textAlign: H._22.Center,
                            display: H.H.Flex,
                            position: H._2.Absolute,
                            alignItems: H.c.Center,
                            justifyContent: H.T.Center,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachTop: !0
                        }, s.createElement(H._17, {
                            color: H.F.Overlay
                        }, s.createElement(H._8, {
                            asset: H._9.Edit
                        })), s.createElement(H._21, {
                            color: H.F.Overlay,
                            type: H._26.P
                        }, Object(p.d)("Change avatar", "DirectoryHeader")))), t.renderAvatarEditMenu()) : null
                    }, t.renderAvatarEditMenu = function() {
                        return t.state.isEditingAvatar ? s.createElement(H.p, {
                            "data-test-selector": y,
                            direction: H.q.BottomLeft,
                            show: !0
                        }, s.createElement(H.S, {
                            "data-test-selector": k,
                            onClick: t.onAvatarUploadClick
                        }, s.createElement(H.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, j())), s.createElement(H.S, {
                            "data-test-selector": b,
                            onClick: t.onAvatarDeleteClick
                        }, s.createElement(H.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, R()))) : null
                    }, t.trackAvatarEdit = function(e) {
                        p.n.tracking.track(g.SpadeEventType.CommunityEdit, {
                            community_id: t.props.data.directory.id,
                            name: t.props.data.directory.name,
                            is_official: !1,
                            user_id: t.props.data.currentUser && t.props.data.currentUser.id,
                            is_admin: t.props.data.currentUser && t.props.data.currentUser.roles.isStaff,
                            is_subadmin: t.props.data.currentUser && t.props.data.currentUser.roles.isSiteAdmin,
                            edit_type: "avatar",
                            old_value: t.props.data.directory.avatarURL,
                            new_value: e || null
                        })
                    }, t.onAvatarClick = function() {
                        t.setState({
                            isEditingAvatar: !t.state.isEditingAvatar
                        })
                    }, t.onAvatarUploadClick = function() {
                        if (!t.props.data || !t.props.data.directory || !t.props.data.directory.id) return null;
                        var e = {
                            uploadURL: I(t.props.data.directory.id),
                            imageDimensions: "600x800",
                            maxFileSizeMegabytes: 1,
                            isRequiredImageDimensions: !0,
                            shouldBase64Encode: !0,
                            base64EncodedPropertyName: P.a.CommunitiesAvatar,
                            onFinishUploading: t.onAvatarDoneUploading
                        };
                        t.props.onShowModal(B.b, e)
                    }, t.onAvatarDeleteClick = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return l.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, f.a.delete(I(this.props.data.directory.id))];
                                    case 1:
                                        return t.sent(), this.trackAvatarEdit(), e = function(e) {
                                            return e.directory.avatarURL = T, e
                                        }, Object(h.d)(z, {
                                            name: this.props.directoryName,
                                            type: M(this.props.directoryType)
                                        }, e), [2]
                                }
                            })
                        })
                    }, t.onAvatarDoneUploading = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return l.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, D(this.props.data.directory.displayName)];
                                    case 1:
                                        return e = i.sent(), t = function(t) {
                                            return e && (n.trackAvatarEdit(e), t.directory.avatarURL = e), t
                                        }, Object(h.d)(z, {
                                            name: this.props.directoryName,
                                            type: M(this.props.directoryType)
                                        }, t), this.props.onCloseModal(), [2]
                                }
                            })
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading || this.props.data.error || !this.props.data.directory ? s.createElement(H._1, {
                        width: 80,
                        height: 112,
                        overlay: !0
                    }) : s.createElement(H.C, {
                        imageAlt: "",
                        imageSrc: this.props.data.directory.avatarURL,
                        size: H.D.Size8,
                        aspect: H.k.BoxArt
                    }), s.createElement(H.U, {
                        className: "directory-header__avatar",
                        margin: {
                            left: 3,
                            bottom: 1
                        },
                        position: H._2.Absolute,
                        attachBottom: !0
                    }, e, this.renderAvatarEditMode())
                }, t = l.__decorate([Object(m.a)(z, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: M(e.directoryType)
                            }
                        }
                    }
                }), Object(G.c)("DirectoryAvatar", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component)),
            $ = q,
            W = Object(c.a)(i, a)($),
            Q = n(995),
            K = n(4),
            Y = n(12),
            J = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    if ("GAMES" !== this.props.directoryType) return null;
                    var e, t = null;
                    if ("IRL" === this.props.directoryName) {
                        var n = Object(p.d)("New to IRL?", "DirectoryHeader"),
                            i = Object(p.d)("Learn More", "DirectoryHeader"),
                            a = void 0;
                        a = s.createElement("a", {
                            target: "_blank",
                            href: "http://link.twitch.tv/irldirectorytooltip",
                            className: "directory-header__link",
                            rel: "noopener noreferrer"
                        }, i), e = s.createElement("span", null, n, " ", a)
                    } else "Always On" === this.props.directoryName && (e = Object(p.d)("24/7 streaming from your favorite brands. Watch together.", "DirectoryHeader"));
                    return e && (t = s.createElement(H._21, {
                        color: H.F.Overlay,
                        type: H._26.P,
                        "data-test-selector": "directory-game-descriptor"
                    }, e)), t
                }, t
            }(s.Component),
            X = J,
            Z = n(1149),
            ee = (n(1150), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingBanner: !1
                    }, t.renderBannerEditMode = function() {
                        return t.props.headerEditMode ? s.createElement(H.U, null, s.createElement("div", {
                            onClick: t.onBannerClick
                        }, s.createElement(H.U, {
                            "data-test-selector": _,
                            className: "directory-header__overlay",
                            flexDirection: H.J.Column,
                            display: H.H.Flex,
                            position: H._2.Absolute,
                            alignItems: H.c.Center,
                            justifyContent: H.T.Center,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachTop: !0
                        }, s.createElement(H.U, {
                            position: H._2.Relative
                        }, s.createElement(H._17, {
                            color: H.F.Overlay,
                            textAlign: H._22.Center
                        }, s.createElement(H._8, {
                            asset: H._9.Edit
                        })), s.createElement(H._21, {
                            color: H.F.Overlay,
                            type: H._26.P
                        }, Object(p.d)("Change cover image", "DirectoryHeader")), t.renderBannerEditMenu()))), s.createElement(H.U, {
                            alignContent: H.b.End,
                            position: H._2.Absolute,
                            textAlign: H._22.Right,
                            margin: 3,
                            attachBottom: !0,
                            attachRight: !0
                        }, s.createElement(H.u, {
                            icon: H._9.Check,
                            onClick: t.onDoneClick
                        }, Object(p.d)("Done", "DirectoryHeader")))) : null
                    }, t.renderBannerEditMenu = function() {
                        return t.state.isEditingBanner ? s.createElement(H.p, {
                            "data-test-selector": C,
                            direction: H.q.BottomCenter,
                            show: !0
                        }, s.createElement(H.S, {
                            "data-test-selector": w,
                            onClick: t.onBannerUploadClick
                        }, s.createElement(H.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, j())), s.createElement(H.S, {
                            "data-test-selector": S,
                            onClick: t.onBannerDeleteClick
                        }, s.createElement(H.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, R()))) : null
                    }, t.trackBannerEdit = function(e) {
                        p.n.tracking.track(g.SpadeEventType.CommunityEdit, {
                            community_id: t.props.data.directory.id,
                            name: t.props.data.directory.name,
                            is_official: !1,
                            user_id: t.props.data.currentUser && t.props.data.currentUser.id,
                            is_admin: t.props.data.currentUser && t.props.data.currentUser.roles.isStaff,
                            is_subadmin: t.props.data.currentUser && t.props.data.currentUser.roles.isSiteAdmin,
                            edit_type: "banner",
                            old_value: t.props.data.directory.coverURL,
                            new_value: e || null
                        })
                    }, t.onDoneClick = function() {
                        t.props.onDisableDirectoryHeaderEdit()
                    }, t.onBannerClick = function() {
                        t.setState({
                            isEditingBanner: !t.state.isEditingBanner
                        })
                    }, t.onBannerUploadClick = function() {
                        if (!t.props.data || !t.props.data.directory || !t.props.data.directory.id) return null;
                        var e = {
                            uploadURL: L(t.props.data.directory.id),
                            imageDimensions: "1200x180",
                            maxFileSizeMegabytes: 3,
                            isRequiredImageDimensions: !0,
                            shouldBase64Encode: !0,
                            base64EncodedPropertyName: P.a.CommunitiesCover,
                            onFinishUploading: t.onBannerDoneUploading
                        };
                        t.props.onShowModal(B.b, e)
                    }, t.onBannerDeleteClick = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return l.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, f.a.delete(L(this.props.data.directory.id))];
                                    case 1:
                                        return t.sent(), this.trackBannerEdit(), e = function(e) {
                                            return e.directory.coverURL = U, e
                                        }, Object(h.d)(Z, {
                                            name: this.props.directoryName,
                                            type: M(this.props.directoryType)
                                        }, e), [2]
                                }
                            })
                        })
                    }, t.onBannerDoneUploading = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return l.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, O(this.props.data.directory.displayName)];
                                    case 1:
                                        return e = i.sent(), t = function(t) {
                                            return e && (n.trackBannerEdit(e), t.directory.coverURL = e), t
                                        }, Object(h.d)(Z, {
                                            name: this.props.directoryName,
                                            type: M(this.props.directoryType)
                                        }, t), this.props.onCloseModal(), [2]
                                }
                            })
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e;
                    if (this.props.data.loading || this.props.data.error || !this.props.data.directory) e = s.createElement(H._1, {
                        width: 200,
                        height: 20,
                        overlay: !0
                    });
                    else {
                        var t = Object(p.d)("{followerCount,number} Followers", {
                                followerCount: this.props.data.directory.followersCount
                            }, "DirectoryHeader"),
                            n = Object(p.d)("{viewerCount,number} Viewers", {
                                viewerCount: this.props.data.directory.viewersCount
                            }, "DirectoryHeader");
                        e = s.createElement(H._21, {
                            color: H.F.Overlay,
                            type: H._26.P
                        }, t, " · ", n)
                    }
                    var i = !1,
                        a = {};
                    this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.directory && (this.props.data.directory.coverURL ? a = {
                        backgroundImage: "url(" + this.props.data.directory.coverURL + ")"
                    } : this.props.data.directory.streams.edges.length && this.props.data.directory.streams.edges.filter(function(e) {
                        return e.node.previewImageURL
                    }).map(function(e) {
                        var t = e.node;
                        i = !0, a = {
                            backgroundImage: "url(" + t.previewImageURL + ")"
                        }
                    }));
                    var r = K("directory-header__banner", {
                        "directory-header__banner--blur": i
                    });
                    return s.createElement(H.U, {
                        position: H._2.Relative,
                        overflow: H.Y.Hidden
                    }, s.createElement("div", {
                        className: r,
                        style: a,
                        "data-test-selector": "directory-banner-image"
                    }), s.createElement(H.U, {
                        className: "directory-header__title",
                        position: H._2.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, s.createElement(Y.a, {
                        to: {
                            pathname: V(this.props.directoryType)
                        },
                        className: "directory-header__link"
                    }, s.createElement(H._8, {
                        asset: H._9.AngleLeft,
                        height: 10
                    }), Object(p.d)("Browse", "DirectoryHeader")), s.createElement(H._21, {
                        color: H.F.Overlay,
                        type: H._26.H2
                    }, this.props.data && this.props.data.directory && this.props.data.directory.displayName), s.createElement(X, l.__assign({}, this.props)), e), this.renderBannerEditMode())
                }, t = l.__decorate([Object(m.a)(Z, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: M(e.directoryType)
                            }
                        }
                    }
                }), Object(G.c)("DirectoryBanner", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component)),
            te = ee,
            ne = Object(c.a)(r, o)(te),
            ie = n(1040),
            ae = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(H.U, {
                        position: H._2.Relative
                    }, s.createElement(ne, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName
                    }), s.createElement(W, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName
                    }), s.createElement(ie.b, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName,
                        activeTab: this.props.activeTab,
                        showGameDetails: this.props.showGameDetails
                    }))
                }, t = l.__decorate([Object(G.c)("DirectoryHeader", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component),
            re = ae;
        n.d(t, !1, function() {
            return ae
        }), n.d(t, "a", function() {
            return re
        })
    },
    1140: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return p
        }), n.d(t, "c", function() {
            return g
        });
        var i, a = n(0),
            r = n(1),
            o = (n.n(r), n(2)),
            l = n(64),
            s = n(6),
            c = n(3);
        ! function(e) {
            e[e.All = 0] = "All", e[e.Month = 1] = "Month", e[e.Week = 2] = "Week", e[e.Day = 3] = "Day", e[e.Trending = 4] = "Trending"
        }(i || (i = {}));
        var d, u, p = (d = {}, d[i.All] = "ALL_TIME", d[i.Day] = "LAST_DAY", d[i.Week] = "LAST_WEEK", d[i.Month] = "LAST_MONTH", d[i.Trending] = "TRENDING", d),
            m = (u = {}, u[i.Trending] = "", u[i.Day] = Object(o.d)("24h", "TopClipsTimeFilter"), u[i.Week] = Object(o.d)("7d", "TopClipsTimeFilter"), u[i.Month] = Object(o.d)("30d", "TopClipsTimeFilter"), u[i.All] = Object(o.d)("all", "TopClipsTimeFilter"), u),
            h = [i.Trending, i.Day, i.Week, i.Month, i.All],
            f = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderFilterButton = function(e) {
                        return r.createElement(c.S, {
                            key: e,
                            onClick: n.updateFilterFuncs[e],
                            "data-a-target": "time-filter-option-" + m[e],
                            selected: e === n.props.timeFilterValue
                        }, r.createElement(c.U, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, n.renderFilterText(e)))
                    }, n.state = {
                        isShowingMenu: !1
                    }, n.updateFilterFuncs = h.reduce(function(e, t) {
                        return e[t] = function() {
                            n.props.updateTimeFilter(t), n.setState({
                                isShowingMenu: !1
                            })
                        }, e
                    }, {}), n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return r.createElement(c.U, {
                        className: "top-clips-time-filter"
                    }, r.createElement(l.a, null, r.createElement(c.u, {
                        dropdown: !0,
                        type: c.z.Hollow,
                        "data-a-target": "time-filter-selection"
                    }, this.renderFilterText(this.props.timeFilterValue)), r.createElement(c.p, {
                        direction: c.q.BottomLeft,
                        noTail: !0
                    }, r.createElement(c.U, {
                        padding: {
                            y: .5
                        }
                    }, h.map(this.renderFilterButton)))))
                }, t.prototype.renderFilterText = function(e) {
                    return e === i.Trending ? r.createElement("span", null, Object(o.d)("Trending", "TopClipsTimeFilter")) : r.createElement(c.U, {
                        display: c.H.Flex
                    }, Object(o.d)("Top", "TopClipsTimeFilter"), r.createElement(c.U, {
                        margin: {
                            left: .5
                        }
                    }, r.createElement(c.Z, {
                        type: c._0.Brand,
                        label: m[e]
                    })))
                }, t
            }(r.Component),
            g = Object(s.c)("TopClipsTimeFilter")(f)
    },
    1147: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryHeader_DirectoryAvatar"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "name"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "type"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "DirectoryType"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "directory"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "name"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "type"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "type"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "avatarURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "80"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "112"
                                    }
                                }],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 272
            }
        };
        n.loc.source = {
            body: "query DirectoryHeader_DirectoryAvatar($name: String!, $type: DirectoryType!) {\n  directory(name: $name, type: $type) {\n    id\n    name\n    displayName\n    avatarURL(width: 80 height: 112)\n  }\n\n  currentUser {\n    id\n    roles {\n      isSiteAdmin\n      isStaff\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1148: function(e, t) {},
    1149: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryHeader_DirectoryBanner"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "name"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "type"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "DirectoryType"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "directory"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "name"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "type"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "type"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "coverURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "1200"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "180"
                                    }
                                }],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "viewersCount"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "followersCount"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "streams"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "1"
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "edges"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "node"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "previewImageURL"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "320"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "180"
                                                            }
                                                        }],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 449
            }
        };
        n.loc.source = {
            body: "query DirectoryHeader_DirectoryBanner($name: String!, $type: DirectoryType!) {\n  directory(name: $name, type: $type) {\n    id\n    name\n    displayName\n    coverURL(width: 1200 height: 180)\n    viewersCount\n    followersCount\n    streams(first: 1) {\n      edges {\n        node {\n          id\n          previewImageURL(width: 320 height: 180)\n        }\n      }\n    }\n  }\n\n  currentUser {\n    id\n    roles {\n      isSiteAdmin\n      isStaff\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1150: function(e, t) {},
    1151: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryFollowButton_Community"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "name"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "community"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "name"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "self"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "follow"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "followedAt"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 192
            }
        };
        n.loc.source = {
            body: "query DirectoryFollowButton_Community($name: String!) {\n  community(name: $name) {\n    id\n    name\n    self {\n      follow {\n        followedAt\n      }\n    }\n  }\n\n  currentUser {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1152: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "DirectoryFollowButton_FollowCommunity"
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
                                value: "FollowCommunityInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "followCommunity"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "community"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "self"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "follow"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "followedAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 212
            }
        };
        n.loc.source = {
            body: "mutation DirectoryFollowButton_FollowCommunity($input: FollowCommunityInput!) {\n  followCommunity(input: $input) {\n    community {\n      self {\n        follow {\n          followedAt\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1153: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "DirectoryFollowButton_UnfollowCommunity"
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
                                value: "UnfollowCommunityInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "unfollowCommunity"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "follow"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "followedAt"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 163
            }
        };
        n.loc.source = {
            body: "mutation DirectoryFollowButton_UnfollowCommunity($input: UnfollowCommunityInput!) {\n  unfollowCommunity(input: $input) {\n    follow {\n      followedAt\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1154: function(e, t) {},
    1155: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CommunityTosBan_TosBanCommunity"
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
                                value: "TOSBanCommunityInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "tosBanCommunity"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "community"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 146
            }
        };
        n.loc.source = {
            body: "mutation CommunityTosBan_TosBanCommunity($input: TOSBanCommunityInput!) {\n  tosBanCommunity(input: $input) {\n    community {\n      id\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1156: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SettingsCog_CommunityUserPermissions"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "name"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "community"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "name"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "owner"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "self"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "permissions"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "banning"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "editing"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 282
            }
        };
        n.loc.source = {
            body: "query SettingsCog_CommunityUserPermissions($name: String!) {\n  community(name: $name) {\n    id\n    owner {\n      id\n    }\n    self {\n      permissions {\n        banning\n        editing\n      }\n    }\n  }\n  currentUser {\n    id\n    roles {\n      isStaff\n      isSiteAdmin\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1157: function(e, t) {},
    1291: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(v.a)(b, e)
        }
        var a = n(0),
            r = n(1),
            o = n(2),
            l = n(88),
            s = n(3),
            c = (n(1308), {
                TITLE: "clips-modal-title",
                MAIN_BODY: "clips-modal-main-body",
                SUCCESS_BODY: "clips-modal-success-body",
                ERROR_BODY: "clips-modal-error-body",
                SUBMIT_BUTTON: "clips-modal-submit-button",
                CANCEL_BUTTON: "clips-modal-cancel-button"
            }),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSuccess = function() {
                        return t.props.successContent ? r.createElement(s._17, {
                            "data-test-selector": c.SUCCESS_BODY,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: s.m.Alt,
                            fullWidth: !0
                        }, r.createElement(s._21, {
                            type: s._26.Strong
                        }, t.props.successContent)) : null
                    }, t.renderError = function() {
                        return t.props.errorContent ? r.createElement(s._17, {
                            "data-test-selector": c.ERROR_BODY,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: s.m.Alt,
                            fullWidth: !0
                        }, r.createElement(s._21, {
                            type: s._26.Strong,
                            color: s.F.Error
                        }, t.props.errorContent)) : null
                    }, t.onSubmit = function() {
                        t.props.onSubmit()
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.successContent ? r.createElement(l.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(s._17, {
                        padding: 2,
                        background: s.m.Base,
                        className: "clip-modal"
                    }, this.renderSuccess(), r.createElement(s.U, {
                        display: s.H.Flex,
                        justifyContent: s.T.Center
                    }, r.createElement(s.U, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(s.u, {
                        "data-test-selector": c.CANCEL_BUTTON,
                        onClick: this.props.onClose
                    }, Object(o.d)("Close", "ClipsModal")))))) : r.createElement(l.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(s._17, {
                        padding: 2,
                        background: s.m.Base,
                        className: "clip-modal"
                    }, r.createElement(s._17, {
                        "data-test-selector": c.TITLE,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 1
                        }
                    }, this.props.title), r.createElement(s._17, {
                        "data-test-selector": c.MAIN_BODY,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, this.renderError(), this.props.body), r.createElement(s.U, {
                        display: s.H.Flex,
                        justifyContent: s.T.Center
                    }, r.createElement(s.U, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(s.u, {
                        "data-test-selector": c.CANCEL_BUTTON,
                        type: s.z.Text,
                        onClick: this.props.onClose
                    }, Object(o.d)("Cancel", "ClipsModal"))), r.createElement(s.U, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(s.u, {
                        "data-test-selector": c.SUBMIT_BUTTON,
                        type: this.props.buttonType ? this.props.buttonType : s.z.Default,
                        onClick: this.onSubmit,
                        disabled: this.props.submitDisabled
                    }, this.props.buttonContent), this.props.isLoading && r.createElement(s.X, {
                        delay: 0
                    })))))
                }, t
            }(r.Component),
            u = n(1015),
            p = n(6),
            m = 86400,
            h = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            f = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.renderTitle = function() {
                        return t.props.isTemporary ? r.createElement(s._21, {
                            type: s._26.H5,
                            ellipsis: !0
                        }, Object(o.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : r.createElement(s._21, {
                            type: s._26.H5,
                            ellipsis: !0
                        }, Object(o.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                    }, t.renderBodyText = function() {
                        return t.props.isTemporary ? r.createElement(s._21, null, Object(o.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                            clipCreator: t.props.clip.curator.displayName
                        }, "ClipsModalBanUser")) : r.createElement(s._21, null, Object(o.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                            clipCreator: t.props.clip.curator.displayName
                        }, "ClipsModalBanUser"))
                    }, t.renderButtonText = function() {
                        return t.props.isTemporary ? Object(o.d)("Timeout User", "ClipsModalBanUser") : Object(o.d)("Ban User", "ClipsModalBanUser")
                    }, t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(o.d)("Success!", "ClipsModalBanUser") : null
                    }, t.renderFailure = function() {
                        return t.state.hasErrored ? t.props.isTemporary ? Object(o.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(o.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
                    }, t.banUser = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e = this.props.clip.curator.login, t = this.props.isTemporary ? this.props.onBanUser(e, m) : this.props.onBanUser(e), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, t];
                                    case 2:
                                        return i.sent(), this.setState({
                                            hasSucceeded: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), this.setState({
                                            hasErrored: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.state = h, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return r.createElement(d, {
                        onSubmit: this.banUser,
                        onClose: this.props.onClose,
                        title: this.renderTitle(),
                        body: this.renderBodyText(),
                        buttonContent: this.renderButtonText(),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure(),
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            g = function(e) {
                return {
                    channelID: e.clip.broadcaster.id
                }
            },
            y = Object(p.c)("ClipsModalBanUser")(Object(u.a)(g)(f)),
            v = n(8),
            b = n(1309),
            k = (n(1310), this),
            C = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            _ = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onDeleteClick = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.deleteClip(this.props.clip)];
                                    case 2:
                                        return t.sent(), this.setState({
                                            isLoading: !1,
                                            hasSucceeded: !0
                                        }), [3, 4];
                                    case 3:
                                        return e = t.sent(), this.setState({
                                            isLoading: !1,
                                            hasErrored: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.state = C, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = [r.createElement(s._21, {
                            key: "title",
                            type: s._26.H4
                        }, Object(o.d)("Delete This Clip", "ClipsModalDelete")), r.createElement(s.U, {
                            key: "message",
                            margin: {
                                top: 1
                            }
                        }, r.createElement(s._21, {
                            type: s._26.P,
                            color: s.F.Alt2
                        }, Object(o.d)("This clip will be permanently deleted.", "ClipsModalDelete")))],
                        t = r.createElement(s._17, {
                            display: s.H.Flex,
                            flexWrap: s.K.NoWrap
                        }, r.createElement(s.U, {
                            className: "clips-modal-delete__thumb",
                            margin: {
                                right: 1
                            }
                        }, r.createElement(s.j, {
                            ratio: s.k.Aspect16x9
                        }, r.createElement("img", {
                            src: this.props.clip.thumbnailURL
                        }))), r.createElement(s.U, null, r.createElement(s._21, {
                            type: s._26.H5
                        }, this.props.clip.title), r.createElement(s._21, {
                            color: s.F.Alt2
                        }, Object(o.d)("{created, date, medium}", {
                            created: new Date(this.props.clip.createdAt)
                        }, "ClipsModalDelete"), " • ", Object(o.d)("Clipped by {curator}", {
                            curator: this.props.clip.curator.login
                        }, "ClipsModalDelete")), r.createElement(s._21, {
                            color: s.F.Alt2
                        }, Object(o.d)("{viewCount, number} views", {
                            viewCount: this.props.clip.viewCount
                        }, "ClipsModalDelete"))));
                    return r.createElement(d, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(o.d)("Delete", "ClipsModalDelete"),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        successContent: this.state.hasSucceeded ? Object(o.d)("Success!", "ClipsModalDelete") : null,
                        errorContent: this.state.hasErrored ? Object(o.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            S = function(e) {
                return {
                    deleteClip: function(t) {
                        return a.__awaiter(k, void 0, void 0, function() {
                            var n;
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, e.mutate({
                                            variables: {
                                                input: {
                                                    slugs: [t.slug]
                                                }
                                            }
                                        })];
                                    case 1:
                                        return i.sent(), e.ownProps.onDelete && e.ownProps.onDelete(t), [3, 3];
                                    case 2:
                                        throw n = i.sent(), o.i.error(n, "Failed to delete clip"), n;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }
                }
            },
            w = i({
                props: S
            })(_),
            E = n(31),
            N = n(1311),
            D = this,
            O = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            T = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.deleteAll = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.deleteAllClips(this.props.broadcastID, this.props.videoID)];
                                    case 2:
                                        return t.sent(), this.setState({
                                            isLoading: !1,
                                            hasSucceeded: !0
                                        }), [3, 4];
                                    case 3:
                                        return e = t.sent(), this.setState({
                                            isLoading: !1,
                                            hasErrored: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(o.d)("A request has been made to delete the clip. Please wait a few minutes for this to take effect.", "ClipsModalDeleteAll") : null
                    }, t.renderFailure = function() {
                        return t.state.hasErrored ? Object(o.d)("There was a problem deleting this clip.", "ClipsModalDeleteAll") : null
                    }, t.state = O, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = r.createElement(s._21, {
                        type: s._26.P
                    }, Object(o.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                    return r.createElement(d, {
                        onSubmit: this.deleteAll,
                        onClose: this.props.onClose,
                        title: r.createElement(s._21, {
                            type: s._26.H4
                        }, Object(o.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                        body: e,
                        buttonContent: Object(o.d)("Delete", "ClipsModalDeleteAll"),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure()
                    })
                }, t
            }(r.Component),
            U = function(e) {
                return {
                    deleteAllClips: function(t, n) {
                        return a.__awaiter(D, void 0, void 0, function() {
                            var i, r, r, l;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 6, , 7]), i = void 0, n ? [4, e.mutate({
                                            variables: {
                                                input: {
                                                    videoID: n
                                                }
                                            }
                                        })] : [3, 2];
                                    case 1:
                                        return r = a.sent(), i = r.data, [3, 5];
                                    case 2:
                                        return t ? [4, e.mutate({
                                            variables: {
                                                input: {
                                                    broadcastID: t
                                                }
                                            }
                                        })] : [3, 4];
                                    case 3:
                                        return r = a.sent(), i = r.data, [3, 5];
                                    case 4:
                                        throw new Error("Invalid broadcastID specified for deleteAllClips");
                                    case 5:
                                        return e.ownProps.onDeleteAll && e.ownProps.onDeleteAll(i.deleteClips.clips), [3, 7];
                                    case 6:
                                        throw l = a.sent(), o.i.error(l, "Failed to delete clips from VOD"), l;
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }
                }
            },
            F = function(e) {
                var t = e.data.clip;
                return t ? {
                    videoID: t.video ? t.video.id : null,
                    broadcastID: t.broadcast.id
                } : {
                    videoID: null,
                    broadcastID: ""
                }
            },
            M = function(e) {
                return {
                    variables: {
                        slug: e.clip.slug
                    }
                }
            },
            j = Object(E.compose)(Object(p.c)("ClipsModalDeleteAll"), i({
                props: U
            }), Object(v.a)(N, {
                props: F,
                options: M
            }))(T),
            R = this,
            A = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            x = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(o.d)("Clips successfully deleted.", "ClipsModalBatchDelete") : null
                    }, t.renderError = function() {
                        return t.state.hasErrored ? Object(o.d)("There was a problem deleting this clip.", "ClipsModalBatchDelete") : null
                    }, t.onDeleteClick = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.deleteClips()];
                                    case 2:
                                        return t.sent(), this.setState({
                                            hasSucceeded: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return e = t.sent(), this.setState({
                                            hasErrored: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.state = A, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = r.createElement(s._21, {
                            type: s._26.H4
                        }, Object(o.d)("Delete these clips?", "ClipsModalBatchDelete")),
                        t = r.createElement(s._21, {
                            type: s._26.P
                        }, Object(o.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                    return r.createElement(d, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(o.d)("Delete", "ClipsModalBatchDelete"),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderError()
                    })
                }, t
            }(r.Component),
            I = function(e) {
                return {
                    deleteClips: function() {
                        return a.__awaiter(R, void 0, void 0, function() {
                            var t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, e.mutate({
                                            variables: {
                                                input: {
                                                    slugs: e.ownProps.clips.map(function(e) {
                                                        return e.slug
                                                    })
                                                }
                                            }
                                        })];
                                    case 1:
                                        return n.sent(), e.ownProps.onBatchDelete && e.ownProps.onBatchDelete(), [3, 3];
                                    case 2:
                                        throw t = n.sent(), o.i.error(t, "Failed to delete clips"), t;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }
                }
            },
            L = i({
                props: I
            })(x);
        n.d(t, "a", function() {
            return d
        }), n.d(t, "b", function() {
            return y
        }), n.d(t, "d", function() {
            return w
        }), n.d(t, "e", function() {
            return j
        }), n.d(t, "c", function() {
            return L
        })
    },
    1308: function(e, t) {},
    1309: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Clips_DeleteClips"
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
                                value: "DeleteClipsInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "deleteClips"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "clips"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "slug"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 131
            }
        };
        n.loc.source = {
            body: "mutation Clips_DeleteClips($input: DeleteClipsInput!) {\n  deleteClips(input: $input) {\n    clips {\n      id\n      slug\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1310: function(e, t) {},
    1311: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsModalDeleteAll_Clip"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "video"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "broadcast"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 138
            }
        };
        n.loc.source = {
            body: "query ClipsModalDeleteAll_Clip($slug: ID!) {\n  clip(slug: $slug) {\n    id\n    video {\n      id\n    }\n    broadcast {\n      id\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1382: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(m.bindActionCreators)({
                showModal: h.d,
                closeModal: h.c
            }, e)
        }

        function a(e) {
            return Object(m.bindActionCreators)({
                showModal: h.d
            }, e)
        }

        function r(e) {
            return Object(m.bindActionCreators)({
                showModal: h.d
            }, e)
        }

        function o(e) {
            return Object(m.bindActionCreators)({
                showModal: h.d
            }, e)
        }
        var l, s = n(1),
            c = n(2),
            d = n(1049),
            u = n(6),
            p = n(9),
            m = n(11),
            h = n(50),
            f = n(0),
            g = n(67),
            y = n(12),
            v = n(407),
            b = n(4),
            k = n(134),
            C = n(1291),
            _ = n(931),
            S = n(923),
            w = n(65),
            E = n(88),
            N = n(3),
            D = (n(1383), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.selectOnFocus = function(e) {
                        e.currentTarget.select(), t.props.onSelection && t.props.onSelection()
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(N.U, f.__assign({
                        position: N._2.Relative,
                        className: "selectable-input-wrapper"
                    }, Object(N._39)(this.props)), s.createElement(N.Q, {
                        type: N.R.Text,
                        value: this.props.text,
                        readOnly: !0,
                        onFocus: this.selectOnFocus,
                        icon: this.props.iconAsset,
                        id: this.props.id
                    }), this.props.children)
                }, t = f.__decorate([Object(u.c)("SelectableInput")], t)
            }(s.Component)),
            O = D,
            T = n(983),
            U = n(136),
            F = n(1060),
            M = [{
                type: T.b.Twitter,
                params: {
                    tt_medium: "twtr"
                }
            }, {
                type: T.b.Facebook,
                params: {
                    tt_medium: "fb"
                }
            }, {
                type: T.b.Reddit,
                params: {
                    tt_medium: "redt"
                }
            }, {
                type: T.b.Copy
            }],
            j = function(e) {
                return s.createElement(N.U, {
                    className: "clips-social-share",
                    display: N.H.Flex,
                    flexWrap: N.K.NoWrap
                }, M.map(function(t) {
                    return s.createElement(N.U, {
                        key: t.type,
                        margin: {
                            right: 1
                        }
                    }, s.createElement(T.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(U.a)(e.clip.url, t.params),
                        onShareClick: Object(F.c)(e.clip, e.pageType)
                    }))
                }))
            },
            R = j,
            A = n(417),
            x = n(8);
        ! function(e) {
            e[e.View = 0] = "View", e[e.Report = 1] = "Report", e[e.Delete = 2] = "Delete", e[e.DeleteAll = 3] = "DeleteAll", e[e.Ban = 4] = "Ban", e[e.Timeout = 5] = "Timeout"
        }(l || (l = {}));
        var I = n(1384),
            L = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderMenuItem = function(e) {
                        var t = n.menuData.get(e);
                        return e && t ? s.createElement(N.S, {
                            key: t.display,
                            onClick: t.destinationHandler,
                            "data-a-target": "clip-moderation-button-" + t.display
                        }, s.createElement(N.U, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, t.display)) : null
                    }, n.menuData = new Map([
                        [l.Report, {
                            display: Object(g.d)("Report", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(l.Report)
                            }
                        }],
                        [l.Delete, {
                            display: Object(g.d)("Delete", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(l.Delete)
                            }
                        }],
                        [l.DeleteAll, {
                            display: Object(g.d)("Delete All Clips from Video", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(l.DeleteAll)
                            }
                        }],
                        [l.Ban, {
                            display: Object(g.d)("Ban User", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(l.Ban)
                            }
                        }],
                        [l.Timeout, {
                            display: Object(g.d)("Timeout User (24 hr)", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(l.Timeout)
                            }
                        }]
                    ]), n
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data,
                        t = this.props.clip;
                    if (!e || !e.currentUser) return null;
                    var n = e.currentUser.isStaff || e.currentUser.isSiteAdmin,
                        i = e.currentUser.id === t.curator.id,
                        a = e.currentUser.id === t.broadcaster.id,
                        r = i || a || n,
                        o = a || n,
                        c = [l.Report];
                    return r && c.push(l.Delete), o && (c.push(l.DeleteAll), c.push(l.Ban), c.push(l.Timeout)), s.createElement(N.U, {
                        className: "moderation-menu"
                    }, s.createElement(A.a, null, s.createElement(N.u, {
                        type: N.z.Hollow,
                        icon: N._9.More,
                        ariaLabel: Object(g.d)("More Options", "ModerationMenu"),
                        "data-a-target": "moderation-menu-button"
                    }), s.createElement(N.p, {
                        direction: N.q.TopRight
                    }, s.createElement(N.U, {
                        padding: {
                            y: .5
                        }
                    }, this.moderationMenuRender(c)))))
                }, t.prototype.moderationMenuRender = function(e) {
                    var t = this;
                    return e.map(function(e) {
                        return t.renderMenuItem(e)
                    })
                }, t = f.__decorate([Object(x.a)(I), Object(u.c)("ModerationMenu")], t)
            }(s.Component),
            V = L,
            B = (n(1385), 2e3),
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isShowingBalloon: !1
                    }, t.timeoutID = null, t.copyClipURL = function() {
                        var e;
                        try {
                            e = document.execCommand("copy")
                        } catch (e) {
                            return void c.i.warn("Failed to copy", e)
                        }
                        e && (t.setState({
                            isShowingBalloon: !0
                        }), t.timeoutID = setTimeout(function() {
                            t.setState({
                                isShowingBalloon: !1
                            })
                        }, B))
                    }, t.dismissBalloon = function() {
                        t.setState({
                            isShowingBalloon: !1
                        }), t.timeoutID && (clearTimeout(t.timeoutID), t.timeoutID = null)
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = s.createElement(y.a, {
                        to: "/" + this.props.clip.broadcaster.login,
                        onClick: this.props.closeModal,
                        "data-a-target": "clip-modal-broadcaster-link"
                    }, this.props.clip.broadcaster.login);
                    return e = this.props.clip.game ? Object(c.d)("{broadcaster} playing {game}", {
                        broadcaster: t,
                        game: s.createElement(y.a, {
                            to: "" + Object(v.d)(this.props.clip.game.name),
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-game-link"
                        }, this.props.clip.game.name)
                    }, "ClipsViewModalContent") : Object(c.d)("{broadcaster}", {
                        broadcaster: t
                    }, "ClipsViewModalContent"), s.createElement(N.U, {
                        className: "clips-view-modal-content"
                    }, s.createElement(N.U, {
                        padding: {
                            bottom: 2
                        }
                    }, s.createElement(N.j, {
                        ratio: N.k.Aspect16x9
                    }, s.createElement("iframe", {
                        src: this.props.clip.embedURL,
                        width: "100%",
                        height: "100%",
                        className: "block aspect__fill",
                        allowFullScreen: !0
                    }))), s.createElement(N.U, {
                        padding: {
                            x: 2,
                            bottom: 2
                        }
                    }, s.createElement(N.U, {
                        display: N.H.Flex,
                        flexWrap: N.K.NoWrap
                    }, s.createElement(N.U, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, s.createElement(E.a, {
                        onClickOut: this.dismissBalloon
                    }, s.createElement(O, {
                        text: this.props.clip.url,
                        icon: !0,
                        iconAsset: N._9.Link,
                        onSelection: this.copyClipURL,
                        "data-a-target": "clip-share-input"
                    }, s.createElement(N.p, {
                        show: this.state.isShowingBalloon,
                        direction: N.q.TopRight
                    }, s.createElement(N.S, {
                        onClick: this.dismissBalloon
                    }, s.createElement(N.U, {
                        padding: 1
                    }, s.createElement(N._21, {
                        bold: !0
                    }, Object(c.d)("Link copied to clipboard", "ClipsViewModalContent")))))))), s.createElement(R, {
                        clip: this.props.clip,
                        pageType: this.props.pageType
                    }), s.createElement(V, {
                        clip: this.props.clip,
                        updateModalViewState: this.props.updateModalViewState
                    }))), s.createElement(N.U, {
                        padding: {
                            x: 2,
                            bottom: 2
                        },
                        display: N.H.Flex,
                        flexWrap: N.K.NoWrap,
                        justifyContent: N.T.Between,
                        fullWidth: !0
                    }, s.createElement(N.U, {
                        flexGrow: 1
                    }, s.createElement(N.P, {
                        ellipsis: !0
                    }, s.createElement(N._17, {
                        display: N.H.Flex,
                        flexWrap: N.K.NoWrap,
                        fontSize: N.L.Size5
                    }, s.createElement(N.U, {
                        ellipsis: !0
                    }, this.props.clip.title), s.createElement(N.U, {
                        flexShrink: 0
                    }, s.createElement(N._21, {
                        type: N._26.Span,
                        color: N.F.Alt2
                    }, " • ", Object(c.d)("{created, date, medium}", {
                        created: new Date(this.props.clip.createdAt)
                    }, "ClipsViewModalContent"))))), s.createElement(N.P, {
                        ellipsis: !0
                    }, s.createElement(N._17, {
                        color: N.F.Alt2
                    }, e, " • ", Object(c.d)("Clipped by {curator}", {
                        curator: s.createElement(y.a, {
                            to: "/" + this.props.clip.curator.login,
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-curator-link"
                        }, this.props.clip.curator.login)
                    }, "ClipsViewModalContent")))), s.createElement(N._17, {
                        display: N.H.Flex,
                        margin: {
                            bottom: 2,
                            left: 2
                        },
                        fontSize: N.L.Size5,
                        color: N.F.Alt2,
                        flexShrink: 0
                    }, s.createElement(N.U, {
                        margin: {
                            right: .5
                        },
                        alignItems: N.c.Center,
                        display: N.H.Flex
                    }, s.createElement(N._8, {
                        asset: N._9.GlyphViews
                    })), Object(c.d)("{viewCount, number} views", {
                        viewCount: this.props.clip.viewCount
                    }, "ClipsViewModalContent"))))
                }, t = f.__decorate([Object(u.c)("ClipsViewModalContent")], t)
            }(s.Component),
            G = P,
            H = (n(1386), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onKeyDown = function(e) {
                        var n = e.charCode || e.keyCode;
                        n === w.a.Left ? t.updateClipBackward() : n === w.a.Right && t.updateClipForward()
                    }, t.updateClipForward = function() {
                        t.updateClipIndex(t.props.clipIndex + 1)
                    }, t.updateClipBackward = function() {
                        t.updateClipIndex(t.props.clipIndex - 1)
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.setUpArrowListeners()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.clipIndex && this.props.clipIndex > 0 && (e = s.createElement(N.U, {
                        position: N._2.Absolute,
                        display: N.H.Flex,
                        alignItems: N.c.Stretch,
                        className: "clip-carousel-button clip-carousel-button--left"
                    }, s.createElement(N.v, {
                        ariaLabel: Object(c.d)("Previous clip", "ClipsViewModalNavigation"),
                        type: N.w.Primary,
                        icon: N._9.AngleLeft,
                        onClick: this.updateClipBackward,
                        "data-test-selector": "clips-view-modal-content-back"
                    }))), s.createElement(N.U, {
                        className: "clips-view-modal-content"
                    }, e, s.createElement(G, {
                        clip: this.props.clip,
                        updateModalViewState: this.props.updateModalViewState,
                        pageType: this.props.pageType,
                        closeModal: this.props.closeModal
                    }), s.createElement(N.U, {
                        position: N._2.Absolute,
                        display: N.H.Flex,
                        alignItems: N.c.Stretch,
                        className: "clip-carousel-button clip-carousel-button--right"
                    }, s.createElement(N.v, {
                        ariaLabel: Object(c.d)("Next clip", "ClipsViewModalNavigation"),
                        type: N.w.Primary,
                        icon: N._9.AngleRight,
                        onClick: this.updateClipForward,
                        "data-test-selector": "clips-view-modal-content-forward"
                    })))
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("keydown", this.onKeyDown)
                }, t.prototype.setUpArrowListeners = function() {
                    document.addEventListener("keydown", this.onKeyDown)
                }, t.prototype.updateClipIndex = function(e) {
                    var t = Math.max(0, e),
                        n = this.props.getClips();
                    n.length - t < 4 && this.props.loadMoreClips(), t < n.length && this.props.showModal(Q, {
                        getClips: this.props.getClips,
                        clip: n[t],
                        clipIndex: t,
                        loadMoreClips: this.props.loadMoreClips,
                        pageType: this.props.pageType
                    })
                }, t
            }(s.Component)),
            z = Object(u.c)("ClipsViewModalNavigation")(H),
            q = Object(p.a)(null, i)(z),
            $ = (n(1387), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        modalView: l.View
                    }, t.setToViewState = function() {
                        t.updateClipsModalViewState(l.View)
                    }, t.updateClipsModalViewState = function(e) {
                        t.setState({
                            modalView: e
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = (n = {}, n["clips-modal-view"] = !0, n["clips-modal-view--wide"] = !1, n);
                    return this.state.modalView === l.Report ? e = s.createElement(_.a, {
                        title: Object(c.d)("Report this Clip", "ClipsViewModal"),
                        reportContext: {
                            contentType: S.a.Clip,
                            contentID: this.props.clip.slug,
                            targetUserID: this.props.clip.broadcaster.id
                        },
                        onClose: this.setToViewState
                    }) : this.state.modalView === l.Delete ? e = s.createElement(C.d, {
                        clip: this.props.clip,
                        onClose: this.setToViewState
                    }) : this.state.modalView === l.DeleteAll ? e = s.createElement(C.e, {
                        clip: this.props.clip,
                        onClose: this.setToViewState
                    }) : this.state.modalView === l.Ban ? e = s.createElement(C.b, {
                        clip: this.props.clip,
                        isTemporary: !1,
                        onClose: this.setToViewState
                    }) : this.state.modalView === l.Timeout ? e = s.createElement(C.b, {
                        clip: this.props.clip,
                        isTemporary: !0,
                        onClose: this.setToViewState
                    }) : (e = s.createElement(q, {
                        getClips: this.props.getClips,
                        clip: this.props.clip,
                        clipIndex: this.props.clipIndex,
                        updateModalViewState: this.updateClipsModalViewState,
                        loadMoreClips: this.props.loadMoreClips,
                        pageType: this.props.pageType
                    }), t["clips-modal-view--wide"] = !0), s.createElement(N.U, {
                        className: b(t)
                    }, e, s.createElement(k.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }));
                    var n
                }, t = f.__decorate([Object(u.c)("ClipsViewModal")], t)
            }(s.Component)),
            W = $,
            Q = Object(p.a)(null, a)(W),
            K = (n(1388), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getClips = function() {
                        return t.props.clips
                    }, t.openModal = function(e) {
                        e.preventDefault(), t.props.showModal(Q, {
                            getClips: t.getClips,
                            clip: t.props.clip,
                            clipIndex: t.props.clipIndex,
                            loadMoreClips: t.props.loadMoreClips,
                            pageType: t.props.pageType
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null,
                        t = null;
                    return this.props.pageType === F.b.Channel && this.props.clip.game && (e = s.createElement(N._17, {
                        position: N._2.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        borderRight: !1,
                        borderBottom: !1,
                        className: "clips-preview-card__boxart"
                    }, s.createElement(y.a, {
                        to: Object(v.d)(this.props.clip.game.name) + "/clips",
                        "data-test-selector": "card-view-game-link",
                        "data-a-target": "clip-game-link"
                    }, s.createElement(N._30, {
                        display: N.H.Block,
                        direction: N._32.Bottom,
                        label: this.props.clip.game.name
                    }, s.createElement(N.C, {
                        imageAlt: this.props.clip.game.name,
                        imageSrc: this.props.clip.game.boxArtURL,
                        aspect: N.k.BoxArt,
                        size: N.D.Size4
                    }))))), this.props.pageType === F.b.Game && (t = s.createElement(N.U, null, s.createElement(y.a, {
                        className: "clips-preview-card__display-name",
                        to: "/" + this.props.clip.broadcaster.login + "/clips"
                    }, this.props.clip.broadcaster.login))), s.createElement(N.U, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(N.A, f.__assign({
                        row: !0
                    }, Object(N._39)(this.props)), s.createElement(N.U, {
                        position: N._2.Relative,
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, s.createElement(y.a, {
                        to: this.props.clip.url,
                        onClick: this.openModal,
                        "data-a-target": "clip-thumbnail-link"
                    }, s.createElement(N.C, {
                        imageSrc: this.props.clip.thumbnailURL || c.n.config.defaultStreamPreviewURL,
                        imageAlt: this.props.clip.title,
                        aspect: N.k.Aspect16x9,
                        size: N.D.Size24
                    })), e), s.createElement(N.B, null, s.createElement(N._21, {
                        type: N._26.H3,
                        fontSize: N.L.Size5
                    }, s.createElement(y.a, {
                        className: "clips-preview-card__title",
                        to: this.props.clip.url,
                        onClick: this.openModal,
                        "data-a-target": "clip-title-link"
                    }, this.props.clip.title)), s.createElement(N._21, {
                        ellipsis: !0
                    }, t), s.createElement(N._21, {
                        color: N.F.Alt2,
                        ellipsis: !0
                    }, Object(c.d)("{created, date, medium}", {
                        created: new Date(this.props.clip.createdAt)
                    }, "ClipsCardView"), s.createElement(N.P, {
                        padding: {
                            x: .5
                        }
                    }, s.createElement("span", null, "·")), s.createElement(N.P, {
                        padding: {
                            right: .5
                        }
                    }, s.createElement("span", null, Object(c.d)("Clipped by", "ClipsCardView"))), s.createElement(y.a, {
                        className: "clips-preview-card__display-name",
                        to: "/" + this.props.clip.curator.login,
                        "data-a-target": "clip-curator-link"
                    }, this.props.clip.curator.login)), s.createElement(N._21, {
                        color: N.F.Alt2
                    }, Object(c.d)("{viewCount, number} views", {
                        viewCount: this.props.clip.viewCount
                    }, "ClipsCardView")))))
                }, t = f.__decorate([Object(u.c)("ClipsCardView")], t)
            }(s.Component)),
            Y = K,
            J = Object(p.a)(null, r)(Y),
            X = n(1140),
            Z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.updateToAllTime = function() {
                        t.props.updateTimeFilter(X.b.All)
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(N.U, {
                        className: "clips-cards"
                    }, s.createElement(N.N, {
                        gutterSize: N.O.None
                    }, 0 === this.props.clips.length ? this.renderEmpty() : this.renderClips()))
                }, t.prototype.renderEmpty = function() {
                    var e = s.createElement(N.U, null, s.createElement(N._21, {
                        fontSize: N.L.Size4
                    }, Object(g.d)("No clips were created in this time period.", "ClipsCards"), s.createElement("br", null), Object(g.d)("Check out all popular clips from this channel instead.", "ClipsCards")), s.createElement(N.U, {
                        margin: 3
                    }, s.createElement(N.u, {
                        type: N.z.Hollow,
                        onClick: this.updateToAllTime
                    }, Object(g.d)("See all popular clips", "ClipCards"))));
                    return this.props.timeFilterValue === X.b.All && (e = s.createElement(N.U, null, s.createElement(N._21, {
                        fontSize: N.L.Size4
                    }, Object(g.d)("No Clips Found", "ClipsCards")), s.createElement(N.U, {
                        margin: 3
                    }, Object(g.d)("{learnClipsLink} to make and share clips of this channel", {
                        learnClipsLink: s.createElement("a", {
                            href: "https://help.twitch.tv/customer/portal/articles/2442508-how-to-use-clips",
                            target: "_blank"
                        }, Object(g.d)("Learn how", "ClipsCards"))
                    }, "ClipsCards")))), s.createElement(N.U, {
                        fullWidth: !0
                    }, s.createElement(N.N, null, s.createElement(N.G, {
                        cols: 3
                    }), s.createElement(N.G, {
                        cols: 6
                    }, s.createElement(N.U, {
                        textAlign: N._22.Center
                    }, e)), s.createElement(N.G, {
                        cols: 3
                    })))
                }, t.prototype.renderClips = function() {
                    var e = this;
                    return this.props.clips.map(function(t, n) {
                        return s.createElement(N.G, {
                            cols: {
                                default: 12,
                                xl: 6
                            },
                            key: t.slug
                        }, s.createElement(J, {
                            clip: t,
                            clips: e.props.clips,
                            clipIndex: n,
                            pageType: e.props.pageType,
                            loadMoreClips: e.props.loadMoreClips,
                            "data-target": "clips-card-view",
                            "data-a-target": "clips-card-" + n
                        }))
                    })
                }, t = f.__decorate([Object(u.c)("ClipCards")], t)
            }(s.Component),
            ee = Z,
            te = Object(p.a)(null, o)(ee),
            ne = function(e) {
                return s.createElement(N.U, null, s.createElement(N.U, {
                    display: N.H.Flex,
                    flexWrap: N.K.NoWrap,
                    justifyContent: N.T.Between,
                    margin: {
                        bottom: 2
                    },
                    fullWidth: !0
                }, s.createElement(N.U, {
                    display: N.H.Flex,
                    flexWrap: N.K.NoWrap
                }, e.pageType === F.b.Game && s.createElement(N.U, {
                    margin: {
                        right: 1
                    }
                }, s.createElement(d.a, null)), s.createElement(N.U, null, s.createElement(X.c, {
                    updateTimeFilter: e.updateTimeFilter,
                    timeFilterValue: e.timeFilterValue
                }))), s.createElement(N.u, {
                    linkTo: "https://twitch.tv/manager/clips",
                    targetBlank: !0,
                    type: N.z.Hollow,
                    "data-a-target": "manage-clips-button"
                }, Object(c.d)("Manage my clips", "TopClips"))), s.createElement(N.U, null, e.isLoading ? s.createElement(N.X, {
                    fillContent: !0
                }) : s.createElement(te, {
                    clips: e.clips,
                    pageType: e.pageType,
                    loadMoreClips: e.loadMoreClips,
                    updateTimeFilter: e.updateTimeFilter,
                    timeFilterValue: e.timeFilterValue
                })))
            },
            ie = Object(u.c)("TopClips", {
                autoReportInteractive: !0
            })(ne);
        n.d(t, !1, function() {
            return ne
        }), n.d(t, "a", function() {
            return ie
        })
    },
    1383: function(e, t) {},
    1384: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ModerationMenu_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isSiteAdmin"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isStaff"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 85
            }
        };
        n.loc.source = {
            body: "query ModerationMenu_User {\n  currentUser {\n    id\n    isSiteAdmin\n    isStaff\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1385: function(e, t) {},
    1386: function(e, t) {},
    1387: function(e, t) {},
    1388: function(e, t) {},
    1849: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsCards__Game"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "gameName"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "limit"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
                        }
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "cursor"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Cursor"
                        }
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "criteria"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "GameClipsInput"
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "game"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "name"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "gameName"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "clips"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "after"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "cursor"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "criteria"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "criteria"
                                        }
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "pageInfo"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "hasNextPage"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "edges"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "node"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "slug"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "embedURL"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "viewCount"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "language"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "curator"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }, {
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "login"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }, {
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "displayName"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "game"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }, {
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "name"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }, {
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "boxArtURL"
                                                                },
                                                                arguments: [{
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "width"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "52"
                                                                    }
                                                                }, {
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "height"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "72"
                                                                    }
                                                                }],
                                                                directives: [],
                                                                selectionSet: null
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "broadcaster"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }, {
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "login"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }, {
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "displayName"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "thumbnailURL"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "createdAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "durationSeconds"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "product"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 842
            }
        };
        n.loc.source = {
            body: "query ClipsCards__Game($gameName: String!, $limit: Int, $cursor: Cursor, $criteria: GameClipsInput) {\n  game(name: $gameName) {\n    id,\n    clips(first: $limit, after: $cursor, criteria: $criteria) {\n      pageInfo {\n        hasNextPage\n      },\n      edges {\n        cursor\n        node {\n          id,\n          slug,\n          url,\n          embedURL,\n          title,\n          viewCount,\n          language,\n          curator {\n            id,\n            login,\n            displayName,\n          },\n          game {\n            id,\n            name,\n            boxArtURL(width: 52 height: 72),\n          },\n          broadcaster {\n            id,\n            login,\n            displayName,\n          },\n          thumbnailURL,\n          createdAt,\n          durationSeconds\n        }\n      }\n    }\n    product {\n      id\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    2030: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                languagePreferences: Object(h.a)(e)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(0),
            r = n(1),
            o = n(2),
            l = n(925),
            s = n(922),
            c = n(14),
            d = n(6),
            u = n(1140),
            p = n(1130),
            m = n(9),
            h = n(1016),
            f = n(66),
            g = n(30),
            y = n(8),
            v = n(23),
            b = n(67),
            k = n(1135),
            C = n(1040),
            _ = n(1382),
            S = n(1060),
            w = n(3),
            E = n(1849),
            N = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.loadMoreTopClips = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
                                return this.canLoadMore() ? [2, this.props.loadMore()] : [2]
                            })
                        })
                    }, t.canLoadMore = function() {
                        var e = t.props.data;
                        return !e.loading && !e.error && "" !== t.props.gameName && e.game && e.game.clips.pageInfo.hasNextPage
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.game) return r.createElement(w.X, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return r.createElement(f.a, {
                        message: Object(b.d)("Error loading data.", "DirectoryGameClipsContent")
                    });
                    if (this.props.data.game) {
                        var e = u.a[this.props.timeFilterValue],
                            t = !!this.props.data.game.product;
                        return r.createElement(g.b, {
                            "data-a-target": "clips-scroller"
                        }, r.createElement(w.U, null, r.createElement(k.a, {
                            directoryType: this.props.directoryType,
                            directoryName: this.props.gameName,
                            activeTab: C.a.DirectoryClipsPage,
                            showGameDetails: t
                        }), r.createElement(w.U, {
                            padding: {
                                top: 2,
                                bottom: 3,
                                x: 3
                            }
                        }, r.createElement(_.a, {
                            clips: this.props.data.game.clips.edges.map(function(e) {
                                return e.node
                            }),
                            pageType: S.b.Game,
                            timeFilterValue: this.props.timeFilterValue,
                            updateTimeFilter: this.props.updateTimeFilter,
                            loadMoreClips: this.loadMoreTopClips,
                            isLoading: !1
                        }), r.createElement(g.a, {
                            enabled: this.canLoadMore(),
                            key: e,
                            loadMore: this.props.loadMore
                        }))))
                    }
                    return r.createElement(f.a, {
                        message: Object(b.d)("Game does not exist", "DirectoryGameClipsContent")
                    })
                }, t = a.__decorate([Object(d.c)("DirectoryGameClipsContent", {
                    autoReportInteractive: !0
                }), Object(y.a)(E, {
                    options: function(e) {
                        return {
                            variables: {
                                gameName: decodeURIComponent(e.gameName),
                                limit: 20,
                                criteria: {
                                    languages: e.languagePreferences,
                                    filter: u.a[e.timeFilterValue]
                                }
                            }
                        }
                    },
                    props: function(e) {
                        return a.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: E,
                                    variables: a.__assign({}, e.data.variables, {
                                        cursor: e.data.game.clips.edges[e.data.game.clips.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            i = n;
                                        return {
                                            game: a.__assign({}, i.game, {
                                                clips: a.__assign({}, i.game.clips, {
                                                    edges: Object(v.b)(e.game.clips.edges, i.game.clips.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                })], t)
            }(r.Component),
            D = N,
            O = Object(m.a)(i)(D),
            T = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.updateTimeFilter = function(e) {
                        n.setState({
                            timeFilterValue: e
                        })
                    }, n.state = {
                        directoryType: Object(p.c)(t.match.path),
                        timeFilterValue: u.b.Day
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), o.n.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.render = function() {
                    return r.createElement(O, {
                        directoryType: this.state.directoryType,
                        gameName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                        updateTimeFilter: this.updateTimeFilter,
                        timeFilterValue: this.state.timeFilterValue
                    })
                }, t = a.__decorate([Object(d.c)("DirectoryGameClipsPage", {
                    destination: s.a.DirectoryGameClips
                }), Object(l.a)({
                    location: c.PageviewLocation.ClipsGame
                })], t)
            }(r.Component),
            U = T;
        n.d(t, "DirectoryGameClipsPage", function() {
            return U
        })
    },
    918: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention", e[e.Ban = 3] = "Ban", e[e.Timeout = 4] = "Timeout", e[e.AutoModRejectedPrompt = 5] = "AutoModRejectedPrompt", e[e.AutoModMessageRejected = 6] = "AutoModMessageRejected", e[e.AutoModMessageAllowed = 7] = "AutoModMessageAllowed", e[e.AutoModMessageDenied = 8] = "AutoModMessageDenied", e[e.Connected = 9] = "Connected", e[e.Disconnected = 10] = "Disconnected", e[e.Reconnect = 11] = "Reconnect", e[e.Hosting = 12] = "Hosting", e[e.Unhost = 13] = "Unhost", e[e.Subscription = 14] = "Subscription", e[e.Resubscription = 15] = "Resubscription", e[e.SubGift = 16] = "SubGift", e[e.Clear = 17] = "Clear", e[e.SubscriberOnlyMode = 18] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 19] = "FollowerOnlyMode", e[e.SlowMode = 20] = "SlowMode", e[e.RoomMods = 21] = "RoomMods", e[e.RoomState = 22] = "RoomState", e[e.Raid = 23] = "Raid", e[e.Unraid = 24] = "Unraid", e[e.Notice = 25] = "Notice", e[e.Info = 26] = "Info", e[e.BadgesUpdated = 27] = "BadgesUpdated", e[e.Purchase = 28] = "Purchase"
        }(i || (i = {}))
    },
    920: function(e, t, n) {
        "use strict";

        function i(e) {
            return e + "-" + Date.now() + "}"
        }
        t.a = i
    },
    921: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var i = n(0),
            a = n(2),
            r = n(19),
            o = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var a, r;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, a), [4, this._fetch(e, t)];
                                case 1:
                                    return r = i.sent(), [4, this.constructLegacyAPIResponse(r)];
                                case 2:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, a.n.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, a;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return n = i.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                case 3:
                                    return a = i.sent(), t.requestError = a, [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(n) {
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
                        headers: i.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var n = a.n.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": a.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                    var o = Object(r.c)(n);
                    return o && (i.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (i["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e
            }()
    },
    922: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseForYou: "browse.for-you",
            ChannelIndex: "channel.index.index",
            ChannelDashboardAchievements: "channel.dashboard.achievements",
            ChannelDashboardModeration: "channel.dashboard.moderation",
            ChannelDashboardStreamSummary: "channel.dashboard.stream-summary",
            ChannelClips: "channel.clips",
            ChannelClipsManager: "videoManager.clips.channel",
            ChannelCollections: "channel.collections",
            ChannelEvents: "channel.events",
            ChatPopout: "chat",
            DevOnly: "dev",
            DirectoryCommunityByLanguage: "directory.community.language",
            DirectoryCommunityIndex: "directory.community.index",
            DirectoryCommunityDetails: "directory.community.details",
            DirectoryGames: "directory.games",
            DirectoryPopular: "directory.popular",
            DirectoryGameIndex: "directory.game.index",
            DirectoryGameClips: "directory.game.clips",
            DirectoryGameDetails: "directory.game.details",
            DirectoryGameVideos: "directory.game.videos",
            DirectoryFollowingIndex: "directory.following.index",
            DirectoryFollowingGames: "directory.following.games",
            DirectoryFollowingVideos: "directory.following.videos.video-type",
            DirectoryFollowingHosts: "directory.following.hosts",
            DirectoryFollowingLiveChannels: "directory.following.channels",
            DirectoryFollowingCommunities: "directory.following.communities",
            EmailVerification: "emailVerification",
            EventDetails: "event.details",
            Index: "index",
            MyClipsManager: "videoManager.clips",
            NotificationSettingsPage: "settings.notificationSettings",
            OnboardingIndex: "onboarding.index",
            ReportUserPage: "reportUser.page",
            StoreMerchPage: "store.merch",
            SubsLandingPage: "subs.landing",
            SubsBroadcasterPage: "subs.broadcaster",
            TeamsDashboardBasicInfo: "teams.dashboard.basic-info",
            TeamsDashboardCustomize: "teams.dashboard.customize",
            TeamsDashboardFeaturedChannels: "teams.dashboard.featured-channels",
            TeamsDashboardMembers: "teams.dashboard.members",
            TeamsDashboardStats: "teams.dashboard.stats",
            TeamsDashboardRevenue: "teams.dashboard.revenue",
            VideosPage: "videos",
            VideoWatchPage: "video",
            VideoManagerPage: "videoManager.page",
            VideoManagerEditPropertiesPage: "videoManager.edit",
            VideoManagerUploadPage: "videoManager.upload",
            VideoManagerUploadListPage: "videoManager.upload-list"
        }
    },
    923: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Community = "COMMUNITY_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT"
        }(i || (i = {}))
    },
    925: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var n = function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0, s.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = a.__assign({}, e.properties));
                                var n = a.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = i.referenceTracking,
                                    o = r.content,
                                    l = r.medium,
                                    c = r.content_index;
                                s.n.tracking.trackPageview(a.__assign({
                                    content: o,
                                    medium: l,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, s.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return a.__extends(i, n), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return o.createElement(t, a.__assign({}, this.props))
                    }, i.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? r.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                a = r.stringify(t);
                            a.length > 0 && (i = "?" + a), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return n
                    }, i
                }(o.Component);
                return Object(l.f)(n)
            }
        }
        var a = n(0),
            r = n(21),
            o = n(1),
            l = n(12),
            s = n(2);
        n.d(t, "a", function() {
            return i
        })
    },
    926: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(4),
            r = n(1),
            o = n(11),
            l = n(2),
            s = n(8),
            c = n(6),
            d = n(930),
            u = n(3),
            p = n(949),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null,
                        t = Object(l.d)("Select One...", "ReportUserModal");
                    return e = this.props.data.loading ? [r.createElement("option", {
                        key: "Loading"
                    }, Object(l.d)("Loading...", "ReportReasonsSelect"))] : Object(d.b)(this.props.data.reportReasons).map(function(e) {
                        return r.createElement("option", {
                            key: e.canonical,
                            value: e.canonical
                        }, e.localized)
                    }), r.createElement(u.U, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.M, {
                        id: "reporting-modal__select",
                        label: Object(l.d)("Select Reason (required)", "ReportUserModal")
                    }, r.createElement(u._14, {
                        id: "reporting-modal__select",
                        "data-test-selector": "reporting-modal.select",
                        disabled: this.props.data.loading || !!this.props.data.error,
                        onChange: this.handleChange,
                        defaultValue: t
                    }, r.createElement("option", {
                        disabled: !0,
                        key: "default"
                    }, t), e)))
                }, t = i.__decorate([Object(c.c)("ReportReasonSelect")], t)
            }(r.Component),
            h = Object(s.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            content: e.reportContentType
                        }
                    }
                }
            })(m),
            f = (n(950), n(951));
        n.d(t, "a", function() {
            return y
        }), n.d(t, "b", function() {
            return g
        }), n.d(t, "c", function() {
            return b
        });
        var g, y = "community_rules_violation";
        ! function(e) {
            e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError"
        }(g || (g = {}));
        var v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        community: null,
                        description: "",
                        reason: null,
                        isCommunityReason: !1,
                        selectedCommunityID: null,
                        selectedCommunityName: null
                    }, t.headerMessage = Object(l.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: r.createElement("br", null),
                        tosLink: r.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(l.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.selectCommunity = function(e) {
                        t.setState({
                            selectedCommunityID: e.target.value,
                            selectedCommunityName: e.target.name
                        })
                    }, t.handleSubmit = function(e) {
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description, t.state.selectedCommunityID, t.state.selectedCommunityName) : t.props.onError(g.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        if (!t.props.data || t.props.data.loading || t.props.data.error || !t.props.data.user) return null;
                        var n = t.props.data.user.directories.nodes.filter(function(e) {
                            return "COMMUNITY" === e.directoryType
                        });
                        n.length && e === y ? t.setState({
                            reason: e,
                            selectedCommunityID: n[0].id,
                            selectedCommunityName: n[0].name,
                            isCommunityReason: !0
                        }) : t.setState({
                            reason: e,
                            isCommunityReason: !1
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(u.U, {
                        display: u.H.Flex,
                        flexDirection: u.J.Column,
                        alignItems: u.c.Center,
                        justifyContent: u.T.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === g.Success ? r.createElement("div", null, r.createElement(u.u, {
                        onClick: this.props.onClose
                    }, r.createElement(u.U, {
                        padding: {
                            x: 2
                        }
                    }, Object(l.d)("Close", "ReportUser")))) : r.createElement("div", null, r.createElement(u.U, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u._21, {
                        type: u._26.H4
                    }, this.props.title), r.createElement(u._17, {
                        color: u.F.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), r.createElement("form", null, r.createElement(u._17, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, r.createElement(h, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), this.renderCommunitiesSelector(), r.createElement(u.M, {
                        id: "reporting__text-area",
                        label: Object(l.d)("Description (required)", "ReportUser")
                    }, r.createElement(u._23, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), r.createElement(u._17, {
                        display: u.H.Flex,
                        justifyContent: u.T.Center
                    }, r.createElement(u.u, {
                        onClick: this.handleSubmit
                    }, r.createElement(u.U, {
                        padding: {
                            x: 2
                        }
                    }, Object(l.d)("Send", "ReportUser"))))))
                }, t.prototype.renderCommunitiesSelector = function() {
                    if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.user) return null;
                    if (this.state.isCommunityReason) {
                        var e = this.props.data.user.directories.nodes.filter(function(e) {
                                return "COMMUNITY" === e.directoryType
                            }),
                            t = e.map(function(e) {
                                return r.createElement("option", {
                                    key: e.id,
                                    value: e.id,
                                    name: e.name
                                }, e.displayName)
                            });
                        return r.createElement(u.U, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(u.M, {
                            id: "reporting__select-community",
                            label: Object(l.d)("Community", "ReportUser")
                        }, r.createElement(u._14, {
                            id: "reporting__select-community",
                            "data-test-selector": "reporting.select-community",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.selectCommunity
                        }, t)))
                    }
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case g.FormError:
                            e = Object(l.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case g.MutationError:
                            e = Object(l.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case g.Success:
                            e = Object(l.d)("Thank you for your report.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = a({
                        "reporting__error-container": this.props.submitStatus !== g.Success,
                        "reporting__success-container": this.props.submitStatus === g.Success
                    });
                    return r.createElement(u._17, {
                        className: t,
                        fullWidth: this.props.submitStatus !== g.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(r.Component),
            b = Object(o.compose)(Object(s.a)(f, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        variables: {
                            userId: e.targetUserID
                        }
                    }
                }
            }))(v)
    },
    930: function(e, t, n) {
        "use strict";

        function i(e) {
            if (e) {
                var t = e.map(function(e) {
                    return e.id
                });
                return o().filter(function(e) {
                    return t.includes(e.canonical)
                })
            }
            return o()
        }
        var a = function(e, t) {
                return 'community report (<a href="{link}">{link}</a>) {description}'.replace(/{link}/g, "https://www.twitch.tv/communities/{communityName}".replace("{communityName}", e)).replace(/{description}/, t)
            },
            r = n(2),
            o = function() {
                return [{
                    localized: Object(r.d)("Site Suspension Evasion", "ReportUserModal"),
                    canonical: "tos_ban_evasion"
                }, {
                    localized: Object(r.d)("Chat Ban Evasion", "ReportUserModal"),
                    canonical: "chat_ban_evasion"
                }, {
                    localized: Object(r.d)("Self-Harm", "ReportUserModal"),
                    canonical: "selfharm"
                }, {
                    localized: Object(r.d)("Attempts or Threats to Harm", "ReportUserModal"),
                    canonical: "harm"
                }, {
                    localized: Object(r.d)("Harassment", "ReportUserModal"),
                    canonical: "harassment"
                }, {
                    localized: Object(r.d)("Hate Speech", "ReportUserModal"),
                    canonical: "hate_speech"
                }, {
                    localized: Object(r.d)("Offensive Username", "ReportUserModal"),
                    canonical: "offensive_username"
                }, {
                    localized: Object(r.d)("Impersonation", "ReportUserModal"),
                    canonical: "impersonation"
                }, {
                    localized: Object(r.d)("Spam, Scams, or Other Malicious Content", "ReportUserModal"),
                    canonical: "spam"
                }, {
                    localized: Object(r.d)("Porn or Other Sexually Explicit Content", "ReportUserModal"),
                    canonical: "porn"
                }, {
                    localized: Object(r.d)("Nudity or Sexual Behavior/Attire", "ReportUserModal"),
                    canonical: "nudity"
                }, {
                    localized: Object(r.d)("Extreme Violence, Gore, or Other Obscene Content", "ReportUserModal"),
                    canonical: "gore"
                }, {
                    localized: Object(r.d)("Underaged User", "ReportUserModal"),
                    canonical: "underaged"
                }, {
                    localized: Object(r.d)("Cheating in Online Game", "ReportUserModal"),
                    canonical: "cheating"
                }, {
                    localized: Object(r.d)("Prohibited Game", "ReportUserModal"),
                    canonical: "prohibited"
                }, {
                    localized: Object(r.d)("Miscategorized Content or Other Category Violation", "ReportUserModal"),
                    canonical: "miscategorized"
                }, {
                    localized: Object(r.d)("Community Rules Violation", "ReportUserModal"),
                    canonical: "community_rules_violation"
                }, {
                    localized: Object(r.d)("Community is Violating Terms of Service", "ReportUserModal"),
                    canonical: "community_tos_violation"
                }, {
                    localized: Object(r.d)("Bits Acceptable Use Policy Violation", "ReportUserModal"),
                    canonical: "bits_violation"
                }, {
                    localized: Object(r.d)("Other Terms of Service Violation", "ReportUserModal"),
                    canonical: "other"
                }]
            };
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return i
        })
    },
    931: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(s.bindActionCreators)({
                closeModal: d.c
            }, e)
        }
        var a = n(932),
            r = n(0),
            o = n(1),
            l = n(9),
            s = n(11),
            c = n(134),
            d = n(50),
            u = n(6),
            p = n(3),
            m = (n(957), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClose = function(e) {
                        t.props.closeModal(), t.props.onClose && t.props.onClose(e)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(p._17, {
                        className: "reporting-modal__container",
                        background: p.m.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, o.createElement(a.a, {
                        onClose: this.handleClose,
                        reportContext: this.props.reportContext,
                        title: this.props.title,
                        defaultDescription: this.props.defaultDescription
                    }), o.createElement(c.a, null))
                }, t
            }(o.Component)),
            h = Object(s.compose)(Object(u.c)("ReportUserModal"), Object(l.a)(null, i))(m);
        n.d(t, !1, function() {}), n.d(t, !1, function() {
            return a.a
        }), n.d(t, !1, function() {
            return m
        }), n.d(t, "a", function() {
            return h
        })
    },
    932: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                sessionUser: e.session.user
            }
        }
        n.d(t, "a", function() {
            return k
        });
        var a = n(0),
            r = n(1),
            o = (n.n(r), n(9)),
            l = n(11),
            s = n(2),
            c = n(8),
            d = n(23),
            u = n(14),
            p = n(6),
            m = n(926),
            h = n(923),
            f = n(930),
            g = n(926),
            y = n(952),
            v = (n.n(y), n(953)),
            b = (n.n(v), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        submitStatus: g.b.Unsubmitted
                    }, t.handleSubmit = function(e, n, i, r) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, o, t, l;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (e !== m.a) return [3, 5];
                                        t = {
                                            userID: this.props.reportContext.targetUserID,
                                            communityID: i || "",
                                            reason: n
                                        }, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.reportUserInCommunity(Object(d.a)(t))];
                                    case 2:
                                        return a.sent(), s.n.tracking.track(u.SpadeEventType.CommunityModeration, {
                                            community_id: i,
                                            name: r,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            target_id: this.props.reportContext.targetUserID,
                                            action: "report",
                                            reason: e
                                        }), this.setState({
                                            submitStatus: g.b.Success
                                        }), [3, 4];
                                    case 3:
                                        return o = a.sent(), s.i.error(o, "ReportUserInCommunity Mutation failed."), this.setState({
                                            submitStatus: g.b.MutationError
                                        }), [3, 4];
                                    case 4:
                                        return [3, 9];
                                    case 5:
                                        t = {
                                            description: n,
                                            reason: e,
                                            content: this.props.reportContext.contentType,
                                            contentID: this.props.reportContext.contentID,
                                            extra: this.props.reportContext.extra,
                                            targetID: this.props.reportContext.targetUserID
                                        }, this.props.reportContext.contentType === h.a.Community && this.props.reportContext.extra && (t.description = Object(f.a)(this.props.reportContext.extra, n)), a.label = 6;
                                    case 6:
                                        return a.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(d.a)(t))];
                                    case 7:
                                        return a.sent(), this.props.reportContext.contentType === h.a.Community && s.n.tracking.track(u.SpadeEventType.CommunityReport, {
                                            community_id: this.props.reportContext.contentID,
                                            name: this.props.reportContext.extra,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            reason: e
                                        }), this.setState({
                                            submitStatus: g.b.Success
                                        }), [3, 9];
                                    case 8:
                                        return l = a.sent(), s.i.error(l, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: g.b.MutationError
                                        }), [3, 9];
                                    case 9:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleChildError = function(e) {
                        return t.setState({
                            submitStatus: e
                        })
                    }, t.handleClose = function() {
                        t.props.onClose && t.props.onClose(t.state.submitStatus)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose()
                }, t.prototype.render = function() {
                    return r.createElement(g.c, {
                        onClose: this.handleClose,
                        onError: this.handleChildError,
                        onSubmit: this.handleSubmit,
                        reportContentType: this.props.reportContext.contentType,
                        submitStatus: this.state.submitStatus,
                        targetUserID: this.props.reportContext.targetUserID,
                        title: this.props.title,
                        defaultDescription: this.props.defaultDescription
                    })
                }, t
            }(r.Component)),
            k = Object(l.compose)(Object(c.a)(y, {
                name: "reportUserInCommunity"
            }), Object(c.a)(v, {
                name: "reportUser"
            }), Object(p.c)("ReportUser"), Object(o.a)(i, null))(b)
    },
    949: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportReasons"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "content"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ReportContentType"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "reportReasons"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "content"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "content"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 118
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_ReportReasons($content: ReportContentType!) {\n  reportReasons(content: $content) {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    950: function(e, t) {},
    951: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_UserCommunities"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "userId"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                    value: "userId"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "directories"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "nodes"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "displayName"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "directoryType"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 201
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_UserCommunities($userId: ID!) {\n  user(id: $userId) {\n    id\n    directories {\n      nodes {\n        id\n        name\n        displayName\n        directoryType\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    952: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportUserCommunity"
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
                                value: "ReportUserInCommunityInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "reportUserInCommunity"
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
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 157
            }
        };
        n.loc.source = {
            body: "mutation ReportUserModal_ReportUserCommunity($input: ReportUserInCommunityInput!) {\n  reportUserInCommunity(input: $input) {\n    user {\n      id\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    953: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportUser"
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
                                value: "ReportContentInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "reportContent"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "contentID"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 120
            }
        };
        n.loc.source = {
            body: "mutation ReportUserModal_ReportUser($input: ReportContentInput!) {\n  reportContent(input: $input) {\n    contentID\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    957: function(e, t) {},
    958: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
        }(i || (i = {}))
    },
    963: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var i = n(0),
            a = n(1),
            r = (n.n(a), n(3)),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isDraggingOver: !1
                    }, t.refHandler = function(e) {
                        t.fileInputRef = e
                    }, t.onFilePickerClick = function() {
                        t.fileInputRef.click()
                    }, t.onDragOver = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !0
                        })
                    }, t.onDragLeave = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        })
                    }, t.onFileInputChange = function(e) {
                        e.preventDefault(), t.finalizeSelections(e.target.files)
                    }, t.onFileDrop = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        }), t.finalizeSelections(e.dataTransfer.files)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement("div", {
                        "data-test-selector": "file-picker-root",
                        onClick: this.onFilePickerClick,
                        onDragLeave: this.onDragLeave,
                        onDragOver: this.onDragOver,
                        onDrop: this.onFileDrop
                    }, a.createElement(r.I, {
                        dragOver: this.state.isDraggingOver
                    }, a.createElement(r.P, {
                        display: r.H.Hide
                    }, a.createElement("input", {
                        accept: this.props.allowedFileTypes.join(","),
                        multiple: this.props.multiFile || !1,
                        onChange: this.onFileInputChange,
                        ref: this.refHandler,
                        type: "file"
                    })), this.props.children))
                }, t.prototype.finalizeSelections = function(e) {
                    e && this.props.onFilesSubmitted(Array.from(e))
                }, t
            }(a.Component)
    },
    964: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                type: a.a.Info,
                id: Object(r.a)("notice"),
                message: e
            }
        }
        t.a = i;
        var a = n(918),
            r = n(920)
    },
    968: function(e, t, n) {
        "use strict";

        function i(e) {
            return void 0 === e && (e = !1), [{
                code: "asl",
                label: "American Sign Language"
            }, {
                code: "other",
                label: e ? Object(r.d)("Other", "broadcaster-languages") : "Other"
            }]
        }

        function a() {
            var e = r.n.intl.getLanguageCode(),
                t = function(t) {
                    return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                };
            return o.slice().sort(function(e, n) {
                var i = t(e),
                    a = t(n);
                return i !== a ? i - a : i + ":" + e.label < a + ":" + n.label ? -1 : 1
            }).concat(i(!0))
        }
        n.d(t, "a", function() {
            return l
        }), t.b = a;
        var r = n(2),
            o = [{
                code: "ar",
                label: "العربية"
            }, {
                code: "bg",
                label: "Български"
            }, {
                code: "cs",
                label: "Čeština"
            }, {
                code: "da",
                label: "Dansk"
            }, {
                code: "de",
                label: "Deutsch"
            }, {
                code: "el",
                label: "Ελληνικά"
            }, {
                code: "en",
                label: "English"
            }, {
                code: "es",
                label: "Español"
            }, {
                code: "fi",
                label: "Suomi"
            }, {
                code: "fr",
                label: "Français"
            }, {
                code: "hu",
                label: "Magyar"
            }, {
                code: "it",
                label: "Italiano"
            }, {
                code: "ja",
                label: "日本語"
            }, {
                code: "ko",
                label: "한국어"
            }, {
                code: "nl",
                label: "Nederlands"
            }, {
                code: "no",
                label: "Norsk"
            }, {
                code: "pl",
                label: "Polski"
            }, {
                code: "pt",
                label: "Português"
            }, {
                code: "ru",
                label: "Русский"
            }, {
                code: "sk",
                label: "Slovenčina"
            }, {
                code: "sv",
                label: "Svenska"
            }, {
                code: "th",
                label: "ภาษาไทย"
            }, {
                code: "tr",
                label: "Türkçe"
            }, {
                code: "vi",
                label: "Tiếng Việt"
            }, {
                code: "zh-hk",
                label: "中文(粵語)"
            }, {
                code: "zh",
                label: "中文"
            }],
            l = new Set(o.concat(i()).map(function(e) {
                return e.code
            }))
    },
    979: function(e, t, n) {
        "use strict";
        var i, a = n(0),
            r = n(1),
            o = n(2);
        ! function(e) {
            e.On = "on", e.Off = "off", e.StaffOnly = "staff"
        }(i || (i = {}));
        var l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = o.b.get(this.props.name, i.Off);
                    return e === i.On || e === i.StaffOnly && this.props.isStaff ? r.Children.only(this.props.children) : null
                }, t
            }(r.Component),
            s = l;
        n.d(t, "a", function() {
            return i
        }), n.d(t, !1, function() {
            return l
        }), n.d(t, !1, function() {
            return s
        })
    },
    983: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(u.a)(p, {
                u: e
            })
        }

        function a(e, t) {
            return Object(u.a)(m, {
                url: e,
                text: t
            })
        }

        function r(e, t) {
            return Object(u.a)(h, {
                url: e,
                title: t
            })
        }

        function o(e) {
            return Object(u.a)(f, {
                url: e
            })
        }
        var l = n(0),
            s = n(1),
            c = n(2),
            d = n(994),
            u = n(136),
            p = "https://www.facebook.com/sharer/sharer.php",
            m = "https://www.twitter.com/share",
            h = "https://www.reddit.com/submit",
            f = "https://vk.com/share.php",
            g = n(3);
        n(1012);
        n.d(t, "b", function() {
            return y
        }), n.d(t, "a", function() {
            return v
        });
        var y;
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy"
        }(y || (y = {}));
        var v = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.isLink() ? s.createElement("a", l.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(g._39)(n.props)), n.renderIcon()) : s.createElement("button", l.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(g._39)(n.props)), n.renderIcon())
                }, n.onShareClickHandler = function() {
                    n.props.onShareClick && n.props.onShareClick(n.props.type)
                }, n.clearIsCopiedStatus = function() {
                    n.setState({
                        isCopied: !1
                    })
                }, n.getUrl = function() {
                    return n.props.url || window.location.href
                }, n.copyPageUrl = function(e) {
                    e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(d.a)(n.getUrl()), n.setState({
                        isCopied: !0
                    })
                }, n.renderIcon = function() {
                    var e = n.getAssetFromType();
                    return s.createElement(g.U, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, s.createElement(g._8, {
                        asset: e,
                        width: 30,
                        height: 30
                    }))
                }, n.isLink = function() {
                    return n.props.type !== y.Copy
                }, n.getTooltipFromType = function() {
                    switch (n.props.type) {
                        case y.Twitter:
                            return "Twitter";
                        case y.Reddit:
                            return "Reddit";
                        case y.Facebook:
                            return "Facebook";
                        case y.VKontakte:
                            return "VKontakte";
                        case y.Copy:
                            return n.state.isCopied ? Object(c.d)("Copied", "SocialButton") : Object(c.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case y.Twitter:
                            return g._9.Twitter;
                        case y.Facebook:
                            return g._9.Facebook;
                        case y.VKontakte:
                            return g._9.VKontakte;
                        case y.Reddit:
                            return g._9.Reddit;
                        case y.Copy:
                        default:
                            return g._9.Copy
                    }
                }, n.addSocialClassModifier = function(e) {
                    switch (n.props.type) {
                        case y.Twitter:
                            return e + "--twitter";
                        case y.Reddit:
                            return e + "--reddit";
                        case y.Facebook:
                            return e + "--facebook";
                        case y.VKontakte:
                            return e + "--vkontakte";
                        case y.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, n.getLinkTarget = function() {
                    var e = n.props,
                        t = e.text,
                        l = e.type,
                        s = n.getUrl(),
                        c = t || "";
                    switch (l) {
                        case y.Reddit:
                            return r(s, c);
                        case y.VKontakte:
                            return o(s);
                        case y.Facebook:
                            return i(s);
                        case y.Twitter:
                            return a(s, c);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return l.__extends(t, e), t.prototype.render = function() {
                return s.createElement(g.U, {
                    className: "social-button"
                }, s.createElement(g._30, {
                    label: this.getTooltipFromType(),
                    direction: g._32.Top
                }, this.renderLink()))
            }, t
        }(s.Component)
    },
    986: function(e, t, n) {
        "use strict";

        function i(e, t, n, i) {
            return {
                type: e,
                id: Object(a.a)(t + "-mod"),
                userLogin: t,
                reason: n,
                duration: i
            }
        }
        t.a = i;
        var a = n(920)
    },
    990: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            CommunitiesAvatar: "avatar_image",
            CommunitiesCover: "cover_image",
            Default: "encoded_image",
            EventCoverImage: "event_cover_image"
        }
    },
    992: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = this;
            return function(i) {
                return o.__awaiter(n, void 0, void 0, function() {
                    var n, a;
                    return o.__generator(this, function(o) {
                        return n = new Set(r()), t ? n.add(e) : n.delete(e), a = Array.from(n), l.k.set(d, a), i(Object(c.b)(a)), [2]
                    })
                })
            }
        }

        function a() {
            var e = this;
            return function(t) {
                return o.__awaiter(e, void 0, void 0, function() {
                    return o.__generator(this, function(e) {
                        return l.k.set(d, []), t(Object(c.b)([])), [2]
                    })
                })
            }
        }

        function r() {
            return l.k.get(d, []).filter(function(e) {
                return s.a.has(e)
            })
        }
        t.c = i, t.a = a, t.b = r;
        var o = n(0),
            l = n(2),
            s = n(968),
            c = n(993),
            d = "languageDirectoryFilters"
    },
    993: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                type: a,
                languagePreferences: e
            }
        }
        n.d(t, "a", function() {
            return a
        }), t.b = i;
        var a = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED"
    },
    994: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = document.createElement("textarea");
            t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
            var n = !0;
            try {
                n = document.execCommand("copy")
            } catch (e) {
                n = !1
            }
            return document.body.removeChild(t), n
        }
        t.a = i
    },
    995: function(e, t, n) {
        "use strict";

        function i() {
            return {
                type: r
            }
        }

        function a() {
            return {
                type: o
            }
        }
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        }), t.d = i, t.c = a;
        var r = "header.DIRECTORY_HEADER_EDIT_ENABLED",
            o = "header.DIRECTORY_HEADER_EDIT_DISABLED"
    }
});
//# sourceMappingURL=pages.directory-game-clips-3afc43be46bcd5bacc6c31911fd13cb3.js.map