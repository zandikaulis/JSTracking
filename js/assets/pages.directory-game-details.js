webpackJsonp([50], {
    1013: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(E.bindActionCreators)({
                onClose: D.c
            }, e)
        }
        var a = n(0),
            r = n(1),
            o = n(2),
            l = n(959),
            s = n(3),
            c = (n(1121), function(e) {
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
            d = n(985),
            u = function(e) {
                return new Promise(function(t, n) {
                    var i = new FileReader;
                    i.onload = function() {
                        var e = m(i.result);
                        t(e)
                    }, i.onerror = function(e) {
                        n(e)
                    }, i.readAsDataURL(e)
                })
            },
            m = function(e) {
                return e.replace(/data:image.*;base64,/, "")
            },
            p = this,
            f = function(e, t, n) {
                return a.__awaiter(p, void 0, void 0, function() {
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
            v = function(e, t) {
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
            h = function() {
                return Object(o.d)("File too large.", "ImageUploader")
            },
            k = function() {
                return Object(o.d)("Incompatible format. File must be an image in PNG or JPG format.", "ImageUploader")
            },
            b = n(917),
            S = this,
            _ = function(e, t) {
                return a.__awaiter(S, void 0, void 0, function() {
                    var n;
                    return a.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, b.a.post(e, {
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
            N = function(e) {
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
                                            errorMessage: k(),
                                            isLoading: !1
                                        }), [3, 7]);
                                    case 1:
                                        return this.isFileSizeAcceptable(t) ? [3, 2] : (this.setState({
                                            errorMessage: h(),
                                            isLoading: !1
                                        }), [3, 7]);
                                    case 2:
                                        return [4, f(t, this.props.shouldBase64Encode, this.props.base64EncodedPropertyName)];
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
                    e = this.props.isRequiredImageDimensions ? g(this.props.imageDimensions, this.props.maxFileSizeMegabytes) : v(this.props.imageDimensions, this.props.maxFileSizeMegabytes), this.setState({
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
            C = n(8),
            E = n(11),
            D = n(50),
            w = n(134),
            F = (n(1122), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(s._17, {
                        className: "image-uploader-modal",
                        background: s.m.Base
                    }, r.createElement(N, a.__assign({
                        onFinishUploading: this.props.onClose
                    }, this.props)), r.createElement(w.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(r.Component)),
            O = Object(C.a)(null, i)(F);
        n.d(t, "a", function() {
            return N
        }), n.d(t, "b", function() {
            return O
        })
    },
    1030: function(e, t, n) {
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
            s = n(990);
        l.n.store.registerReducer("directoryHeader", a)
    },
    1036: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                isLoggedIn: Object(h.d)(e)
            }
        }

        function a(e) {
            return Object(v.bindActionCreators)({
                login: function() {
                    return Object(y.f)(g.a.DirectoryFollowButton)
                }
            }, e)
        }

        function r(e) {
            return Object(v.bindActionCreators)({
                onCloseModal: j.c
            }, e)
        }

        function o(e) {
            return {
                isHeaderEditEnabled: Object(W.a)(e),
                isLoggedIn: Object(h.d)(e)
            }
        }

        function l(e) {
            return Object(v.bindActionCreators)({
                login: function() {
                    return Object(y.f)(g.a.ReportChannel)
                },
                onShowModal: j.d,
                onCloseModal: j.c,
                onEnableDirectoryHeaderEdit: I.d,
                onDisableDirectoryHeaderEdit: I.c
            }, e)
        }
        var s, c = n(0),
            d = n(4),
            u = n(1),
            m = n(12),
            p = n(2),
            f = n(8),
            v = n(11),
            g = n(51),
            y = n(35),
            h = n(19),
            k = n(9),
            b = n(23),
            S = n(14),
            _ = n(6),
            N = n(3),
            C = n(1145),
            E = n(1146),
            D = (n(1147), n(1148)),
            w = function(e) {
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
                            var n = "follow" === e ? S.SpadeEventType.CommunityFollow : S.SpadeEventType.CommunityUnfollow;
                            p.n.tracking.track(n, {
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
                                        return this.props.followCommunity && this.props.data ? (e = c.__assign({}, Object(b.a)({
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
                                        }, Object(b.d)(C, {
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
                                        return this.props.unfollowCommunity && this.props.data ? (e = c.__assign({}, Object(b.a)({
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
                                        }, Object(b.d)(C, {
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
                    var e = Object(p.d)("Follow", "DirectoryFollowButton");
                    return this.props.isLoggedIn ? !this.props.data || this.props.data.loading ? u.createElement(N.U, {
                        margin: {
                            left: 1
                        }
                    }, u.createElement(N._1, {
                        width: 70,
                        height: 30
                    })) : this.communityDataLoaded() ? this.state.isFollowing ? u.createElement(N.U, {
                        display: N.H.Flex,
                        margin: {
                            left: 1
                        },
                        className: "directory-follow-btn"
                    }, u.createElement("button", {
                        "aria-label": Object(p.d)("Unfollow", "DirectoryFollowButton"),
                        className: "directory-follow-btn__status-btn",
                        onClick: this.toggleFollowing,
                        "data-a-target": "directory-unfollow-button",
                        "data-test-selector": "unfollow-button"
                    }, u.createElement(N.U, {
                        display: N.H.Block,
                        className: "directory-follow-btn__status-btn--hover"
                    }, u.createElement(N._8, {
                        asset: N._9.Unheart
                    })), u.createElement(N.U, {
                        display: N.H.Block,
                        className: "directory-follow-btn__status-btn--primary"
                    }, u.createElement(N._8, {
                        asset: N._9.Heart
                    })))) : u.createElement(N.U, {
                        margin: {
                            left: 1
                        }
                    }, u.createElement(N.u, c.__assign({
                        ariaLabel: e,
                        "data-a-target": "directory-follow-button",
                        "data-test-selector": "follow-button",
                        icon: N._9.Heart,
                        onClick: this.toggleFollowing
                    }, Object(N._39)(this.props)), e)) : null : u.createElement(N.U, {
                        margin: {
                            left: 1
                        }
                    }, u.createElement(N.u, {
                        ariaLabel: e,
                        icon: N._9.Heart,
                        onClick: this.props.login,
                        "data-a-target": "directory-follow-button"
                    }, e))
                }, t.prototype.reportInteractive = function() {
                    this.props.isLoggedIn ? this.props.directoryName && !this.communityDataLoaded() || this.props.latencyTracking.reportInteractive() : this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(k.a)(C, {
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
                }), Object(k.a)(E, {
                    name: "followCommunity"
                }), Object(k.a)(D, {
                    name: "unfollowCommunity"
                }), Object(_.c)("DirectoryFollowButton")], t)
            }(u.Component),
            F = w,
            O = Object(f.a)(i, a)(F),
            U = n(966),
            R = n(137),
            T = n(406),
            j = n(50),
            I = n(990),
            G = n(416),
            x = n(928),
            A = n(921),
            L = n(919),
            M = n(31),
            P = n(134),
            B = (n(1149), n(1150)),
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.tosBanCommunity = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.props.tosBanCommunity ? (e = c.__assign({}, Object(b.a)({
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
                    return u.createElement(N.P, {
                        position: N._2.Relative
                    }, u.createElement(N._17, {
                        background: N.m.Base,
                        className: "community-ban-modal"
                    }, u.createElement(N.U, {
                        padding: 2
                    }, u.createElement(N.U, {
                        margin: {
                            bottom: 2
                        }
                    }, u.createElement(N._21, {
                        type: N._26.H4
                    }, Object(p.d)("Are you sure you want to ban {name}?", {
                        name: this.props.communityName
                    }, "CommunityBanModal"))), u.createElement(N._17, {
                        borderTop: !0
                    }, u.createElement(N.U, {
                        padding: {
                            top: 2
                        },
                        textAlign: N._22.Center
                    }, u.createElement(N.U, {
                        display: N.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, u.createElement(N.u, {
                        type: N.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(p.d)("Cancel", "CommunityBanModal"))), u.createElement(N.U, {
                        display: N.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, u.createElement(N.u, {
                        onClick: this.tosBanCommunity,
                        "data-test-selector": "ban-button"
                    }, Object(p.d)("Ban", "CommunityBanModal")))))), u.createElement(P.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(u.Component),
            H = Object(M.compose)(Object(k.a)(B, {
                name: "tosBanCommunity"
            }))(V),
            q = Object(f.a)(null, r)(H),
            z = n(1151),
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
                            title: Object(p.d)("Report {communityName}", {
                                communityName: t.props.communityName
                            }, "CommunitiesSettingsCog")
                        }) : t.props.login()
                    }, t.openBanModal = function() {
                        t.props.onShowModal(q, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName
                        })
                    }, t.onEditModeToggle = function() {
                        t.props.isHeaderEditEnabled ? t.props.onDisableDirectoryHeaderEdit() : (p.n.history.push(Object(T.a)(t.props.communityName) + "/details"), t.props.onEnableDirectoryHeaderEdit())
                    }, t.handleReportModalClose = function(e) {
                        (e === A.b.MutationError || e === A.b.Success) && t.props.history.push("/")
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && this.props.data.error ? null : u.createElement(N.U, {
                        position: N._2.Relative
                    }, u.createElement(G.a, null, u.createElement(N.v, {
                        ariaLabel: Object(p.d)("Settings", "CommunitiesSettingsCog"),
                        icon: N._9.Gear
                    }), u.createElement(N.p, {
                        direction: N.q.BottomRight,
                        size: N.r.ExtraSmall,
                        offsetX: "0.5rem"
                    }, this.renderModerationInteractable(), this.renderEditInteractable(), u.createElement(N.S, {
                        onClick: this.openReportModal,
                        "data-test-selector": "report-selector"
                    }, u.createElement(N.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(p.d)("Report", "CommunitiesSettingsCog"))), this.renderBanInteractable())))
                }, t.prototype.renderEditInteractable = function() {
                    return !this.props.data || this.props.data.loading ? null : this.props.data.community && !this.props.data.community.self.permissions.editing ? null : u.createElement(N.S, {
                        onClick: this.onEditModeToggle,
                        "data-test-selector": "edit-selector"
                    }, u.createElement(N.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(p.d)("Edit", "CommunitiesSettingsCog")))
                }, t.prototype.renderModerationInteractable = function() {
                    return !this.props.data || this.props.data.loading ? null : this.props.data.community && !this.props.data.community.self.permissions.banning ? null : u.createElement(N.S, {
                        linkTo: Object(R.a)("/communities/" + this.props.communityName + "/moderation/log"),
                        "data-test-selector": "moderation-selector"
                    }, u.createElement(N.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(p.d)("Moderation", "CommunitiesSettingsCog")))
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data && !this.props.data.loading && this.props.data.community && this.props.data.community.id && this.props.data && this.props.data.currentUser && this.props.data.currentUser.roles && (this.props.data.currentUser.roles.isStaff || this.props.data.currentUser.roles.isSiteAdmin) ? u.createElement(N.S, {
                        onClick: this.openBanModal,
                        "data-test-selector": "ban-selector"
                    }, u.createElement(N.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(p.d)("Ban", "CommunitiesSettingsCog"))) : null
                }, t = c.__decorate([Object(k.a)(z, {
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
            Q = $,
            W = n(1030),
            J = Object(f.a)(o, l)(Object(m.f)(Q)),
            X = n(1058),
            Y = n(954);
        n(1152);
        ! function(e) {
            e[e.DirectoryPage = 0] = "DirectoryPage", e[e.DirectoryVideosPage = 1] = "DirectoryVideosPage", e[e.DirectoryClipsPage = 2] = "DirectoryClipsPage", e[e.DirectoryDetailsPage = 3] = "DirectoryDetailsPage"
        }(s || (s = {}));
        var K = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return u.createElement(N.U, {
                        className: "directory-tabs"
                    }, u.createElement(N.U, {
                        display: N.H.Flex,
                        justifyContent: N.T.Between,
                        flexWrap: N.K.NoWrap,
                        fullHeight: !0
                    }, u.createElement(N.U, {
                        display: N.H.Flex,
                        alignItems: N.c.Stretch,
                        flexShrink: 0,
                        flexWrap: N.K.NoWrap
                    }, this.renderTabs(), this.renderGameDetailsTab()), u.createElement(N.U, {
                        display: N.H.Flex,
                        alignItems: N.c.Center,
                        flexShrink: 0,
                        flexWrap: N.K.NoWrap,
                        padding: {
                            x: 2
                        }
                    }, this.renderSettingsCog(), this.renderFollowButton())))
                }, t.prototype.renderTabs = function() {
                    var e = this,
                        t = this.props.directoryType === Y.a.Games ? Object(T.d)(this.props.directoryName) : Object(T.a)(this.props.directoryName);
                    return this.getDirectoryTabs().map(function(n, i) {
                        var a = n.label.replace(/ /g, "-").toLowerCase(),
                            r = d("directory-tabs__item", (o = {}, o["directory-tabs__item--first"] = 0 === i, o["directory-tabs__item--selected"] = n.isSelected, o));
                        return u.createElement(N.P, {
                            key: "directory-tabs__item--" + n.label,
                            display: N.H.Flex,
                            alignItems: N.c.Center,
                            flexShrink: 0,
                            "data-a-target": "game-directory-" + a + "-tab"
                        }, u.createElement(m.a, {
                            className: r,
                            to: "" + t + n.path
                        }, e.renderTabData(n.label)));
                        var o
                    })
                }, t.prototype.renderTabData = function(e) {
                    return u.createElement(N.U, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: N.H.Flex
                    }, u.createElement(N._21, {
                        type: N._26.Span,
                        fontSize: N.L.Size5
                    }, e))
                }, t.prototype.renderGameDetailsTab = function() {
                    if (!this.props.showGameDetails) return null;
                    var e, t = d("directory-tabs__item", (a = {}, a["directory-tabs__item--selected"] = this.props.activeTab === s.DirectoryDetailsPage, a)),
                        n = Object(p.d)("Game Details", "DirectoryGameTabs"),
                        i = Object(T.d)(this.props.directoryName) + "/details";
                    return e = p.b.get("commerce_gdp_launch", U.a.Off) !== U.a.On ? u.createElement("a", {
                        className: t,
                        href: Object(R.a)(i),
                        target: Object(R.b)() ? "_blank" : ""
                    }, this.renderTabData(n)) : u.createElement(m.a, {
                        className: t,
                        to: i
                    }, this.renderTabData(n)), u.createElement(N.P, {
                        display: N.H.Flex,
                        alignItems: N.c.Center,
                        flexShrink: 0
                    }, e);
                    var a
                }, t.prototype.renderSettingsCog = function() {
                    return this.props.directoryType !== Y.a.Communities ? null : u.createElement(J, {
                        communityName: this.props.directoryName
                    })
                }, t.prototype.renderFollowButton = function() {
                    switch (this.props.directoryType) {
                        case Y.a.Communities:
                            return u.createElement(O, {
                                directoryName: this.props.directoryName
                            });
                        case Y.a.Games:
                            return u.createElement(X.a, {
                                gameName: this.props.directoryName,
                                src: "directory"
                            });
                        default:
                            return null
                    }
                }, t.prototype.getDirectoryTabs = function() {
                    var e = this;
                    return [{
                        label: Object(p.d)("Live Channels", "DirectoryGameTabs"),
                        path: "",
                        isSelected: this.props.activeTab === s.DirectoryPage,
                        whitelistDirectories: [Y.a.Communities, Y.a.Games]
                    }, {
                        label: Object(p.d)("Videos", "DirectoryGameTabs"),
                        path: "/videos/all",
                        isSelected: this.props.activeTab === s.DirectoryVideosPage,
                        whitelistDirectories: [Y.a.Games]
                    }, {
                        label: Object(p.d)("Clips", "DirectoryGameTabs"),
                        path: "/clips",
                        isSelected: this.props.activeTab === s.DirectoryClipsPage,
                        whitelistDirectories: [Y.a.Games]
                    }, {
                        label: Object(p.d)("Details", "DirectoryHeader"),
                        path: "/details",
                        isSelected: this.props.activeTab === s.DirectoryDetailsPage,
                        whitelistDirectories: [Y.a.Communities]
                    }].filter(function(t) {
                        return t.whitelistDirectories.includes(e.props.directoryType)
                    })
                }, t = c.__decorate([Object(_.c)("DirectoryGameTabs")], t)
            }(u.Component),
            Z = K;
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
    1058: function(e, t, n) {
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
        var r = n(8),
            o = n(11),
            l = n(51),
            s = n(35),
            c = n(19),
            d = n(0),
            u = n(1),
            m = n(31),
            p = n(2),
            f = n(9),
            v = n(23),
            g = n(14),
            y = n(3),
            h = n(1059),
            k = n(1060),
            b = n(1061),
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.follow = function() {
                        return d.__awaiter(t, void 0, void 0, function() {
                            var e, t = this;
                            return d.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.followGame && this.props.data && this.props.data.game ? (e = d.__assign({}, Object(v.a)({
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
                                                        query: k,
                                                        variables: {
                                                            name: t.props.gameName
                                                        }
                                                    });
                                                a.game && (a.game.self.follow = i.game.self.follow, e.writeQuery({
                                                    query: k,
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
                                        return this.props.unfollowGame && this.props.data && this.props.data.game ? (e = d.__assign({}, Object(v.a)({
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
                                                    query: k,
                                                    variables: {
                                                        name: t.props.gameName
                                                    }
                                                });
                                                n.game && (n.game.self.follow = null, e.writeQuery({
                                                    query: k,
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
                    var e = Object(p.d)("Follow", "FollowGameButton");
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
                        var t = Object(p.d)("Unfollow", "FollowGameButton");
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
                    p.n.tracking.track(e, {
                        src: this.props.src,
                        kind: e === g.SpadeEventType.GameFollow ? "follow" : "unfollow",
                        name: this.props.gameName
                    })
                }, t
            }(u.Component),
            _ = Object(m.compose)(Object(f.a)(k, {
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
            }), Object(f.a)(h, {
                name: "followGame"
            }), Object(f.a)(b, {
                name: "unfollowGame"
            }))(S),
            N = Object(r.a)(i, a)(_);
        n.d(t, "a", function() {
            return N
        })
    },
    1059: function(e, t) {
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
    1060: function(e, t) {
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
    1061: function(e, t) {
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
    1121: function(e, t) {},
    1122: function(e, t) {},
    1131: function(e, t, n) {
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
                onDisableDirectoryHeaderEdit: W.c,
                onShowModal: u.d
            }, e)
        }
        var l = (n(1030), n(0)),
            s = n(1),
            c = n(8),
            d = n(11),
            u = n(50),
            m = n(2),
            p = n(9),
            f = n(23),
            v = n(917),
            g = n(14),
            y = "directory-avatar-edit-menu",
            h = "directory-avatar-overlay",
            k = "directory-avatar-remover",
            b = "directory-avatar-uploader",
            S = "directory-banner-edit-menu",
            _ = "directory-banner-overlay",
            N = "directory-banner-remover",
            C = "directory-banner-uploader",
            E = this,
            D = function(e) {
                return l.__awaiter(E, void 0, void 0, function() {
                    var t;
                    return l.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, v.a.get("https://api.twitch.tv/kraken/communities?name=" + e)];
                            case 1:
                                if ((t = n.sent()) && 200 === t.status && t.body) return [2, t.body];
                                throw new Error
                        }
                    })
                })
            },
            w = function(e) {
                return l.__awaiter(E, void 0, void 0, function() {
                    var t, n;
                    return l.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, D(e)];
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
            F = function(e) {
                return l.__awaiter(E, void 0, void 0, function() {
                    var t, n;
                    return l.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, D(e)];
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
            O = "https://static-cdn.jtvnw.net/community-images/defaults/avatar-285x380.png",
            U = "https://static-cdn.jtvnw.net/community-images/defaults/banner-1200x180.png",
            R = n(954),
            T = function(e) {
                return e === R.a.Communities ? "COMMUNITY" : "GAME"
            },
            j = function() {
                return Object(m.d)("Upload new image", "DirectoryHeader")
            },
            I = function() {
                return Object(m.d)("Remove", "DirectoryHeader")
            },
            G = n(406),
            x = "https://api.twitch.tv/kraken/communities/",
            A = function(e) {
                return "" + x + e + "/images/avatar"
            },
            L = function(e) {
                return "" + x + e + "/images/cover"
            },
            M = function(e) {
                return e === R.a.Communities ? Object(G.b)("communities") : Object(G.b)()
            },
            P = n(1013),
            B = n(985),
            V = n(6),
            H = n(3),
            q = n(1141),
            z = (n(1142), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingAvatar: !1
                    }, t.renderAvatarEditMode = function() {
                        return t.props.headerEditMode ? s.createElement(H.U, null, s.createElement("div", {
                            onClick: t.onAvatarClick
                        }, s.createElement(H.U, {
                            "data-test-selector": h,
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
                        }, Object(m.d)("Change avatar", "DirectoryHeader")))), t.renderAvatarEditMenu()) : null
                    }, t.renderAvatarEditMenu = function() {
                        return t.state.isEditingAvatar ? s.createElement(H.p, {
                            "data-test-selector": y,
                            direction: H.q.BottomLeft,
                            show: !0
                        }, s.createElement(H.S, {
                            "data-test-selector": b,
                            onClick: t.onAvatarUploadClick
                        }, s.createElement(H.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, j())), s.createElement(H.S, {
                            "data-test-selector": k,
                            onClick: t.onAvatarDeleteClick
                        }, s.createElement(H.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, I()))) : null
                    }, t.trackAvatarEdit = function(e) {
                        m.n.tracking.track(g.SpadeEventType.CommunityEdit, {
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
                            uploadURL: A(t.props.data.directory.id),
                            imageDimensions: "600x800",
                            maxFileSizeMegabytes: 1,
                            isRequiredImageDimensions: !0,
                            shouldBase64Encode: !0,
                            base64EncodedPropertyName: B.a.CommunitiesAvatar,
                            onFinishUploading: t.onAvatarDoneUploading
                        };
                        t.props.onShowModal(P.b, e)
                    }, t.onAvatarDeleteClick = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return l.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, v.a.delete(A(this.props.data.directory.id))];
                                    case 1:
                                        return t.sent(), this.trackAvatarEdit(), e = function(e) {
                                            return e.directory.avatarURL = O, e
                                        }, Object(f.d)(q, {
                                            name: this.props.directoryName,
                                            type: T(this.props.directoryType)
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
                                        return [4, w(this.props.data.directory.displayName)];
                                    case 1:
                                        return e = i.sent(), t = function(t) {
                                            return e && (n.trackAvatarEdit(e), t.directory.avatarURL = e), t
                                        }, Object(f.d)(q, {
                                            name: this.props.directoryName,
                                            type: T(this.props.directoryType)
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
                }, t = l.__decorate([Object(p.a)(q, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: T(e.directoryType)
                            }
                        }
                    }
                }), Object(V.c)("DirectoryAvatar", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component)),
            $ = z,
            Q = Object(c.a)(i, a)($),
            W = n(990),
            J = n(4),
            X = n(12),
            Y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    if ("GAMES" !== this.props.directoryType) return null;
                    var e, t = null;
                    if ("IRL" === this.props.directoryName) {
                        var n = Object(m.d)("New to IRL?", "DirectoryHeader"),
                            i = Object(m.d)("Learn More", "DirectoryHeader"),
                            a = void 0;
                        a = s.createElement("a", {
                            target: "_blank",
                            href: "http://link.twitch.tv/irldirectorytooltip",
                            className: "directory-header__link",
                            rel: "noopener noreferrer"
                        }, i), e = s.createElement("span", null, n, " ", a)
                    } else "Always On" === this.props.directoryName && (e = Object(m.d)("24/7 streaming from your favorite brands. Watch together.", "DirectoryHeader"));
                    return e && (t = s.createElement(H._21, {
                        color: H.F.Overlay,
                        type: H._26.P,
                        "data-test-selector": "directory-game-descriptor"
                    }, e)), t
                }, t
            }(s.Component),
            K = Y,
            Z = n(1143),
            ee = (n(1144), function(e) {
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
                        }, Object(m.d)("Change cover image", "DirectoryHeader")), t.renderBannerEditMenu()))), s.createElement(H.U, {
                            alignContent: H.b.End,
                            position: H._2.Absolute,
                            textAlign: H._22.Right,
                            margin: 3,
                            attachBottom: !0,
                            attachRight: !0
                        }, s.createElement(H.u, {
                            icon: H._9.Check,
                            onClick: t.onDoneClick
                        }, Object(m.d)("Done", "DirectoryHeader")))) : null
                    }, t.renderBannerEditMenu = function() {
                        return t.state.isEditingBanner ? s.createElement(H.p, {
                            "data-test-selector": S,
                            direction: H.q.BottomCenter,
                            show: !0
                        }, s.createElement(H.S, {
                            "data-test-selector": C,
                            onClick: t.onBannerUploadClick
                        }, s.createElement(H.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, j())), s.createElement(H.S, {
                            "data-test-selector": N,
                            onClick: t.onBannerDeleteClick
                        }, s.createElement(H.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, I()))) : null
                    }, t.trackBannerEdit = function(e) {
                        m.n.tracking.track(g.SpadeEventType.CommunityEdit, {
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
                            base64EncodedPropertyName: B.a.CommunitiesCover,
                            onFinishUploading: t.onBannerDoneUploading
                        };
                        t.props.onShowModal(P.b, e)
                    }, t.onBannerDeleteClick = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return l.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, v.a.delete(L(this.props.data.directory.id))];
                                    case 1:
                                        return t.sent(), this.trackBannerEdit(), e = function(e) {
                                            return e.directory.coverURL = U, e
                                        }, Object(f.d)(Z, {
                                            name: this.props.directoryName,
                                            type: T(this.props.directoryType)
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
                                        return [4, F(this.props.data.directory.displayName)];
                                    case 1:
                                        return e = i.sent(), t = function(t) {
                                            return e && (n.trackBannerEdit(e), t.directory.coverURL = e), t
                                        }, Object(f.d)(Z, {
                                            name: this.props.directoryName,
                                            type: T(this.props.directoryType)
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
                        var t = Object(m.d)("{followerCount,number} Followers", {
                                followerCount: this.props.data.directory.followersCount
                            }, "DirectoryHeader"),
                            n = Object(m.d)("{viewerCount,number} Viewers", {
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
                    var r = J("directory-header__banner", {
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
                    }, s.createElement(X.a, {
                        to: {
                            pathname: M(this.props.directoryType)
                        },
                        className: "directory-header__link"
                    }, s.createElement(H._8, {
                        asset: H._9.AngleLeft,
                        height: 10
                    }), Object(m.d)("Browse", "DirectoryHeader")), s.createElement(H._21, {
                        color: H.F.Overlay,
                        type: H._26.H2
                    }, this.props.data && this.props.data.directory && this.props.data.directory.displayName), s.createElement(K, l.__assign({}, this.props)), e), this.renderBannerEditMode())
                }, t = l.__decorate([Object(p.a)(Z, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: T(e.directoryType)
                            }
                        }
                    }
                }), Object(V.c)("DirectoryBanner", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component)),
            te = ee,
            ne = Object(c.a)(r, o)(te),
            ie = n(1036),
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
                    }), s.createElement(Q, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName
                    }), s.createElement(ie.b, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName,
                        activeTab: this.props.activeTab,
                        showGameDetails: this.props.showGameDetails
                    }))
                }, t = l.__decorate([Object(V.c)("DirectoryHeader", {
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
    1141: function(e, t) {
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
    1142: function(e, t) {},
    1143: function(e, t) {
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
    1144: function(e, t) {},
    1145: function(e, t) {
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
    1146: function(e, t) {
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
    1147: function(e, t) {},
    1148: function(e, t) {
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
    1149: function(e, t) {},
    1150: function(e, t) {
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
    1151: function(e, t) {
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
    1152: function(e, t) {},
    1279: function(e, t, n) {
        "use strict";
        var i = n(1),
            a = n(2),
            r = n(66),
            o = n(3),
            l = function() {
                return i.createElement(r.a, {
                    message: Object(a.d)("Sorry. Unless you’ve got a time machine, that content is unavailable.", "PageNotFound")
                }, i.createElement(o.U, {
                    margin: {
                        top: 2
                    }
                }, i.createElement(o.u, {
                    linkTo: "/directory",
                    "data-a-target": "browse-channels-button"
                }, Object(a.d)("Browse channels", "PageNotFound"))))
            };
        n.d(t, "a", function() {
            return l
        })
    },
    1307: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(68),
            o = n(2),
            l = n(142),
            s = "DIRECT_ENTITLEMENT",
            c = n(3),
            d = (n(1391), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderUnavailableText = function() {
                        var e = t.props.options.isInGameContent ? Object(o.d)("This content is currently unavailable", "FuelBuyButton") : Object(o.d)("This game is currently unavailable", "FuelBuyButton");
                        return a.createElement(c._21, {
                            italic: !0,
                            "data-target": "fuel-buy-button-unavailable"
                        }, e)
                    }, t.renderBuyNowButton = function(e, n, i) {
                        var r = null;
                        if (n && n.length > 1) {
                            var l = Object(o.d)("Includes {crates} Twitch Crates!", {
                                crates: n.length
                            }, "FuelBuyButton");
                            r = a.createElement(c._21, {
                                className: "fuel-buy-button__crates",
                                "data-target": "fuel-buy-button-crates"
                            }, l)
                        }
                        var s = i ? "fuel-buy-button-content" : "fuel-buy-button";
                        return a.createElement(c.U, {
                            alignItems: c.c.Center
                        }, a.createElement(c.u, {
                            fullWidth: !0,
                            icon: n && n.length > 0 ? c._9.Crate : void 0,
                            purchase: e,
                            onClick: t.props.onClickBuyNow,
                            "data-target": s
                        }, Object(o.d)("Buy Now", "FuelBuyButton")), r)
                    }, t.onClickClaimOffer = function() {
                        if (t.props.onClickClaimOffer) {
                            var e = t.props.options,
                                n = e.primeOffers,
                                i = e.gameID,
                                a = n && n.find(function(e) {
                                    return e.content.game.id === i && e.deliveryMethod === s
                                });
                            a && t.props.onClickClaimOffer(a.id)
                        }
                    }, t.renderExternalAcquisitionLink = function(e) {
                        return a.createElement("a", {
                            href: e.href,
                            target: "_blank"
                        }, e.children)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.options,
                        t = e.info,
                        n = e.primeOffers,
                        i = e.gameID,
                        d = e.countryCode,
                        u = e.externalAcquisition,
                        m = e.crates,
                        p = e.userHasPrime,
                        f = e.isInGameContent,
                        v = n && n.find(function(e) {
                            return e.content && e.content.game && e.content.game.id === i && e.deliveryMethod === s
                        }),
                        g = d && Object(l.b)(d),
                        y = !v || !g;
                    if (t.isEntitled) return a.createElement(c._21, {
                        "data-target": "fuel-buy-button-purchased"
                    }, Object(o.d)("Purchased", "FuelBuyButton"));
                    if (0 === t.price.length && u && u.isExternal) return a.createElement("div", {
                        "data-target": "fuel-buy-button-external"
                    }, a.createElement(r, {
                        source: u.description,
                        renderers: {
                            Link: this.renderExternalAcquisitionLink
                        }
                    }));
                    if (!t.isForSale && y) return this.renderUnavailableText();
                    if (!v) return this.renderBuyNowButton(t.price, m, f);
                    var h = [],
                        k = a.createElement("div", {
                            className: "fuel-buy-button__prime-button",
                            key: "fuel-claim"
                        }, a.createElement(c.u, {
                            onClick: this.onClickClaimOffer
                        }, Object(o.d)("Claim Offer", "FuelBuyButton"))),
                        b = a.createElement(c._8, {
                            asset: c._9.Crown,
                            type: c._10.Prime,
                            width: 16,
                            height: 16,
                            key: "fuel-crown"
                        });
                    if (p) h = [b, k];
                    else {
                        var S = v ? Object(o.d)("Free", "FuelBuyButton") : t.price;
                        h = [b, a.createElement(c._21, {
                            bold: !0,
                            className: "fuel-buy-button__prime-price",
                            "data-target": "fuel-buy-button-prime-price",
                            key: "fuel-price"
                        }, S), k]
                    }
                    return a.createElement(c.U, {
                        flexDirection: c.J.Row,
                        display: c.H.Flex,
                        alignItems: c.c.Center,
                        "data-target": "fuel-buy-button-prime"
                    }, h)
                }, t
            }(a.Component)),
            u = d;
        n.d(t, "a", function() {
            return u
        })
    },
    1308: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "productInfo"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "ProductInfo"
                    }
                },
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
                            value: "asin"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "crateASINs"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "description"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "imageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "size"
                            },
                            value: {
                                kind: "IntValue",
                                value: "256"
                            }
                        }],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "isEntitled"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "isFeatured"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "isForSale"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "price"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "purchaseURL"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 169
            }
        };
        n.loc.source = {
            body: "fragment productInfo on ProductInfo {\n  id\n  asin\n  crateASINs\n  description\n  imageURL(size: 256)\n  isEntitled\n  isFeatured\n  isForSale\n  price\n  purchaseURL\n  title\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1335: function(e, t, n) {
        "use strict";

        function i(e) {
            if (e.game && e.product) {
                var t, n;
                e.user && (t = e.user.displayName, n = e.user.id);
                var i = {
                    location: c.PageviewLocation.Channel,
                    game_id: e.game.id,
                    game_name: e.game.name,
                    developer: e.product.developer,
                    genre: e.product.genres,
                    asin: e.info.asin,
                    channel: t,
                    channel_id: n,
                    crate: e.info.crateASINs
                };
                s.n.tracking.track(c.SpadeEventType.FuelBuyButton, i)
            }
        }

        function a(e, t, n, a) {
            n = n || t && t.lastBroadcast && t.lastBroadcast.game;
            var o = n && n.product;
            if (n && o) {
                i({
                    user: t,
                    game: n,
                    product: o,
                    info: e
                });
                var l = "";
                t && t.isCommerceRevShareEnabled && (l = "&br_id=" + t.id);
                r(e.purchaseURL + l, a)
            }
        }

        function r(e, t) {
            var n = window.open(e, "Twitch", "width=1024,height=600,scrollbars=yes");
            n && !Object(o.a)() && (n.focus(), Object(l.a)(n, function(e) {
                t(e)
            }))
        }
        var o = n(955),
            l = n(941),
            s = n(2),
            c = n(14);
        t.a = a
    },
    1336: function(e, t, n) {
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }
        var a = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "fuelProduct"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "GameProduct"
                    }
                },
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
                            value: "acquisition"
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
                                    value: "description"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isExternal"
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
                            value: "developer"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "esrbRating"
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
                                    value: "details"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "iconURL"
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
                            value: "featureDetails"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "genres"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "inGameContent"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "inGameContent"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "info"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "productInfo"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "launchPlatform"
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
                                    value: "description"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isExternal"
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
                            value: "supportedPlatforms"
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
                                    value: "iconURL"
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
                end: 501
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/fuel/models/product-info.gql"\n#import "twilight/features/fuel/models/in-game-content.gql"\n\nfragment fuelProduct on GameProduct {\n  id\n  acquisition {\n    id\n    description\n    isExternal\n  }\n  developer\n  esrbRating {\n    id\n    details\n    iconURL\n  }\n  featureDetails\n  genres\n  inGameContent {\n    ...inGameContent\n  }\n  info {\n    ...productInfo\n  }\n  launchPlatform {\n    id\n    description\n    isExternal\n  }\n  supportedPlatforms {\n    id\n    name\n    iconURL\n  }\n}\n\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n(1308).definitions)), a.definitions = a.definitions.concat(i(n(1394).definitions)), e.exports = a
    },
    1391: function(e, t) {},
    1392: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = a.test(e.info.price),
                i = a.test(t.info.price);
            if (n && i) {
                var r = +e.info.price.replace("$", ""),
                    o = +t.info.price.replace("$", ""),
                    l = r - o;
                return 0 !== l ? l : e.info.title.localeCompare(t.info.title)
            }
            return n && !i ? -1 : i ? 1 : e.info.price.localeCompare(t.info.price)
        }
        t.a = i;
        var a = /^\$[\d]+.[\d]{2}$/
    },
    1393: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "fuelGame"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Game"
                    }
                },
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
                            value: "product"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "fuelProduct"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 135
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/fuel/models/fuel-product.gql"\n\nfragment fuelGame on Game {\n  id\n  name\n  product {\n    ...fuelProduct\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n(1336).definitions)), e.exports = i
    },
    1394: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "inGameContent"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "InGameContent"
                    }
                },
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
                            value: "description"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "info"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "productInfo"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "tags"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 160
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/fuel/models/product-info.gql"\n\nfragment inGameContent on InGameContent {\n  id\n  description\n  info {\n    ...productInfo\n  }\n  tags\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n(1308).definitions)), e.exports = i
    },
    1395: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "fuelPrimeOffer"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "PrimeOffer"
                    }
                },
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
                            value: "deliveryMethod"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "content"
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
                                    }]
                                }
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
            body: "\nfragment fuelPrimeOffer on PrimeOffer {\n  id\n  deliveryMethod\n  content {\n    game {\n      id\n      name\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1844: function(e, t) {},
    1845: function(e, t, n) {
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }
        var a = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryGameDetails"
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
                                    value: "product"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "fuelProductFull"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "fuelGame"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "primeOffers"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "fuelPrimeOffer"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
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
                                    value: "hasPrime"
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
                end: 414
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/fuel/models/fuel-product-full.gql"\n#import "twilight/features/fuel/models/fuel-game.gql"\n#import "twilight/features/fuel/models/fuel-prime-offer.gql"\n\nquery DirectoryGameDetails($name: String!) {\n game(name: $name) {\n   product {\n     ...fuelProductFull\n   }\n   ...fuelGame\n }\n primeOffers {\n   ...fuelPrimeOffer\n }\n requestInfo {\n   countryCode\n }\n currentUser {\n   id\n   hasPrime\n }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n(1846).definitions)), a.definitions = a.definitions.concat(i(n(1393).definitions)), a.definitions = a.definitions.concat(i(n(1395).definitions)), e.exports = a
    },
    1846: function(e, t, n) {
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }
        var a = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "fuelProductFull"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "GameProduct"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "fuelProduct"
                        },
                        directives: []
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "publisher"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "websiteURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "eulaURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "supportURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "minimumSystemRequirement"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "systemRequirement"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "recommendedSystemRequirement"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "systemRequirement"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "supportedLanguages"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "productLangauge"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 462
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/fuel/models/fuel-product.gql"\n#import "twilight/features/fuel/models/product-language.gql"\n#import "twilight/features/fuel/models/system-requirement.gql"\n\nfragment fuelProductFull on GameProduct {\n  ...fuelProduct\n\n  publisher\n  websiteURL\n  eulaURL\n  supportURL\n  minimumSystemRequirement {\n    ...systemRequirement\n  }\n  recommendedSystemRequirement {\n    ...systemRequirement\n  }\n  supportedLanguages {\n    ...productLangauge\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n(1336).definitions)), a.definitions = a.definitions.concat(i(n(1847).definitions)), a.definitions = a.definitions.concat(i(n(1848).definitions)), e.exports = a
    },
    1847: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "productLangauge"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "ProductLanguage"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                            value: "hasInterface"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "hasAudio"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "hasSubtitles"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 100
            }
        };
        n.loc.source = {
            body: "fragment productLangauge on ProductLanguage {\n  language\n  hasInterface\n  hasAudio\n  hasSubtitles\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1848: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "systemRequirement"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "SystemRequirement"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "osVersion"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "processor"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "ram"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "videoCard"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "directXVersion"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "hardDriveSpace"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "other"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 136
            }
        };
        n.loc.source = {
            body: "fragment systemRequirement on SystemRequirement {\n  osVersion\n  processor\n  ram\n  videoCard\n  directXVersion\n  hardDriveSpace\n  other\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    2019: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0),
            a = n(1),
            r = n(2),
            o = n(66),
            l = n(1279),
            s = n(30),
            c = n(9),
            d = n(1131),
            u = n(1036),
            m = n(1392),
            p = n(6),
            f = n(954),
            v = n(68),
            g = n(1335),
            y = n(1307),
            h = n(3),
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBuyInGameContentNow = function() {
                        Object(g.a)(t.props.content.info, null, t.props.game, t.onPopupClose)
                    }, t.onPopupClose = function() {
                        return null
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.content,
                        t = e.description,
                        n = e.info,
                        i = e.tags,
                        r = n.description,
                        o = n.imageURL,
                        l = n.title,
                        s = i.join(", "),
                        c = {
                            info: n,
                            countryCode: this.props.countryCode,
                            crates: n.crateASINs,
                            gameID: this.props.game.id,
                            isInGameContent: !0,
                            userHasPrime: this.props.hasPrime
                        };
                    return a.createElement(h.G, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 6
                        }
                    }, a.createElement(h.U, {
                        margin: {
                            bottom: 3
                        }
                    }, a.createElement(h.N, {
                        gutterSize: h.O.Default
                    }, a.createElement(h.G, {
                        cols: 4
                    }, a.createElement(h.j, {
                        ratio: h.k.Aspect1x1
                    }, a.createElement("img", {
                        src: o
                    }))), a.createElement(h.G, {
                        cols: 8
                    }, a.createElement(h._21, {
                        type: h._26.P,
                        fontSize: h.L.Size4,
                        title: l
                    }, l), a.createElement(h._21, {
                        type: h._26.P,
                        color: h.F.Alt2,
                        title: s
                    }, s), a.createElement(h.U, {
                        display: h.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexWrap: h.K.NoWrap,
                        padding: {
                            bottom: 1,
                            top: 2
                        }
                    }, a.createElement(y.a, {
                        onClickBuyNow: this.onBuyInGameContentNow,
                        options: c
                    })), a.createElement(h._36, null, a.createElement(v, {
                        source: r || t
                    }))))))
                }, t
            }(a.Component),
            b = Object(p.c)("FeaturedContent")(k),
            S = b,
            _ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.alt ? h.m.Alt : h.m.Base;
                    return a.createElement(h._17, {
                        background: e,
                        border: !0,
                        padding: {
                            left: 3,
                            right: 3
                        }
                    }, this.props.children)
                }, t
            }(a.Component),
            N = Object(p.c)("GameDetailsSection")(_),
            C = N,
            E = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(h._17, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(h._21, {
                        type: h._26.H3
                    }, this.props.title))
                }, t
            }(a.Component),
            D = Object(p.c)("GameDetailsTitle")(E),
            w = D,
            F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.contentList;
                    if (0 === t.length) return null;
                    var n = t.map(function(t, n) {
                        return a.createElement(S, {
                            content: t,
                            countryCode: e.props.countryCode,
                            game: e.props.game,
                            hasPrime: e.props.hasPrime,
                            key: n
                        })
                    });
                    return a.createElement(C, {
                        alt: !0
                    }, a.createElement(w, {
                        title: Object(r.d)("Game Add-Ons", "FeaturedContentRow")
                    }), a.createElement(h.N, {
                        gutterSize: h.O.Large
                    }, n))
                }, t
            }(a.Component),
            O = Object(p.c)("FeaturedContentRow")(F),
            U = O,
            R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(h.U, {
                        className: "game-detail-box"
                    }, "Game Detail Box")
                }, t = i.__decorate([Object(p.c)("GameDetailBox")], t)
            }(a.Component),
            T = R,
            j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.game.product || !this.props.game.product.info) return null;
                    var e = this.props.game.product,
                        t = e.info,
                        n = e.featureDetails,
                        i = e.supportedLanguages,
                        o = e.minimumSystemRequirement,
                        l = e.recommendedSystemRequirement,
                        s = n.map(function(e, t) {
                            return a.createElement("li", {
                                key: t
                            }, a.createElement(v, {
                                source: e
                            }))
                        }),
                        c = i.map(function(e, t) {
                            return [a.createElement(h.G, {
                                key: t + "lang",
                                cols: 3
                            }, a.createElement(h.U, null, e.language)), a.createElement(h.G, {
                                key: t + "int",
                                cols: 3
                            }, a.createElement(h._17, {
                                textAlign: h._22.Center
                            }, e.hasInterface && a.createElement(h._8, {
                                asset: h._9.Check,
                                type: h._10.Success
                            }))), a.createElement(h.G, {
                                key: t + "audio",
                                cols: 3
                            }, a.createElement(h._17, {
                                textAlign: h._22.Center
                            }, e.hasAudio && a.createElement(h._8, {
                                asset: h._9.Check,
                                type: h._10.Success
                            }))), a.createElement(h.G, {
                                key: t + "subs",
                                cols: 3
                            }, a.createElement(h._17, {
                                textAlign: h._22.Center
                            }, e.hasSubtitles && a.createElement(h._8, {
                                asset: h._9.Check,
                                type: h._10.Success
                            }))), a.createElement(h.G, {
                                key: t + "hr",
                                cols: 12
                            }, a.createElement(h._17, {
                                margin: {
                                    top: .5,
                                    bottom: .5
                                },
                                borderBottom: !0,
                                alignContent: h.b.Stretch
                            }))]
                        }),
                        d = this.renderSystemRequirements(o),
                        u = this.renderSystemRequirements(l);
                    return a.createElement(h._17, {
                        className: "game-info-section",
                        borderTop: !0,
                        padding: {
                            left: 3,
                            right: 3,
                            bottom: 3
                        },
                        background: h.m.Base
                    }, a.createElement(h.N, {
                        gutterSize: h.O.Large
                    }, a.createElement(h.G, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6
                        }
                    }, a.createElement(h.U, {
                        margin: {
                            top: 4
                        }
                    }, a.createElement(h.U, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(h._21, {
                        type: h._26.H3
                    }, Object(r.d)("Description", "DirectoryGameDetailsPage"))), a.createElement(h._36, null, a.createElement(v, {
                        source: t.description
                    }))), a.createElement(h.U, {
                        margin: {
                            top: 4
                        }
                    }, a.createElement(h.U, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(h._21, {
                        type: h._26.H3
                    }, Object(r.d)("Features", "DirectoryGameDetailsPage"))), a.createElement(h._36, null, a.createElement("ul", null, s))), a.createElement(h._17, {
                        margin: {
                            top: 4
                        },
                        fontSize: h.L.Size6
                    }, a.createElement(h._21, {
                        type: h._26.H3
                    }, Object(r.d)("Information", "DirectoryGameDetailsPage")), this.renderRow(Object(r.d)("Title: ", "DirectoryGameDetailsPage"), t.title), this.renderRow(Object(r.d)("Developer: ", "DirectoryGameDetailsPage"), e.developer), this.renderRow(Object(r.d)("Publisher: ", "DirectoryGameDetailsPage"), e.publisher), this.renderRowLink(Object(r.d)("More Info: ", "DirectoryGameDetailsPage"), Object(r.d)("Website", "DirectoryGameDetailsPage"), e.websiteURL), this.renderRowLink(Object(r.d)("License Agreement: ", "DirectoryGameDetailsPage"), Object(r.d)("Check out the EULA", "DirectoryGameDetailsPage"), e.eulaURL), this.renderRowLink(Object(r.d)("Need Help? ", "DirectoryGameDetailsPage"), Object(r.d)("Contact Support", "DirectoryGameDetailsPage"), e.supportURL))), a.createElement(h.G, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6
                        }
                    }, a.createElement(h.U, {
                        margin: {
                            top: 4
                        }
                    }, a.createElement(h._21, {
                        type: h._26.H3
                    }, Object(r.d)("Hardware Requirements", "DirectoryGameDetailsPage")), a.createElement(h.U, {
                        padding: {
                            top: 1,
                            bottom: 1
                        }
                    }, a.createElement(h._21, {
                        type: h._26.H4,
                        bold: !0
                    }, Object(r.d)("Minimum", "DirectoryGameDetailsPage"))), d, a.createElement(h.U, {
                        padding: {
                            top: 1,
                            bottom: 1
                        }
                    }, a.createElement(h._21, {
                        type: h._26.H4,
                        bold: !0
                    }, Object(r.d)("Recommended", "DirectoryGameDetailsPage"))), u), a.createElement(h.U, {
                        margin: {
                            top: 4
                        }
                    }, a.createElement(h.U, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(h._21, {
                        type: h._26.H3
                    }, Object(r.d)("Language Support", "DirectoryGameDetailsPage"))), a.createElement(h.N, null, a.createElement(h.G, {
                        cols: 3
                    }, a.createElement(h._17, {
                        color: h.F.Alt2
                    }, Object(r.d)("Language", "DirectoryGameDetailsPage"))), a.createElement(h.G, {
                        cols: 3
                    }, a.createElement(h._17, {
                        color: h.F.Alt2,
                        textAlign: h._22.Center
                    }, Object(r.d)("Audio", "DirectoryGameDetailsPage"))), a.createElement(h.G, {
                        cols: 3
                    }, a.createElement(h._17, {
                        color: h.F.Alt2,
                        textAlign: h._22.Center
                    }, Object(r.d)("Interface", "DirectoryGameDetailsPage"))), a.createElement(h.G, {
                        cols: 3
                    }, a.createElement(h._17, {
                        color: h.F.Alt2,
                        textAlign: h._22.Center
                    }, Object(r.d)("Subtitles", "DirectoryGameDetailsPage"))), a.createElement(h.G, {
                        cols: 12
                    }, a.createElement(h._17, {
                        borderBottom: !0,
                        margin: {
                            top: .5,
                            bottom: .5
                        }
                    })), c)))))
                }, t.prototype.renderSystemRequirements = function(e) {
                    return a.createElement(h.U, null, this.renderRow(Object(r.d)("OS:", "DirectoryGameDetailsPage"), e.osVersion), this.renderRow(Object(r.d)("Processor:", "DirectoryGameDetailsPage"), e.processor), this.renderRow(Object(r.d)("Memory:", "DirectoryGameDetailsPage"), e.ram), this.renderRow(Object(r.d)("Graphics Card:", "DirectoryGameDetailsPage"), e.videoCard), this.renderRow(Object(r.d)("DirectX:", "DirectoryGameDetailsPage"), e.directXVersion), this.renderRow(Object(r.d)("Hard Drive Space:", "DirectoryGameDetailsPage"), e.hardDriveSpace), this.renderRow(Object(r.d)("Other:", "DirectoryGameDetailsPage"), e.other))
                }, t.prototype.renderRow = function(e, t) {
                    return t ? a.createElement(h.U, {
                        display: h.H.Flex,
                        flexDirection: h.J.Row,
                        flexWrap: h.K.NoWrap
                    }, a.createElement(h._17, {
                        color: h.F.Alt2,
                        padding: {
                            right: 1
                        },
                        display: h.H.Flex,
                        flexShrink: 0
                    }, e), a.createElement(h.U, {
                        display: h.H.Flex,
                        flexGrow: 1
                    }, t)) : null
                }, t.prototype.renderRowLink = function(e, t, n) {
                    return this.renderRow(e, a.createElement("a", {
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, t))
                }, t
            }(a.Component),
            I = Object(p.c)("GameInfoSection")(j),
            G = I,
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(h.U, {
                        className: "game-media"
                    }, "Videos and Screenshots")
                }, t = i.__decorate([Object(p.c)("GameMedia")], t)
            }(a.Component),
            A = x,
            L = (n(1844), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBuyInGameContentNow = function() {
                        Object(g.a)(t.props.content.info, null, t.props.game, t.onPopupClose)
                    }, t.onPopupClose = function() {
                        return null
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = this.props.content,
                        n = t.info,
                        i = t.tags,
                        o = n.crateASINs,
                        l = n.imageURL,
                        s = n.price,
                        c = n.title,
                        d = i.join(", "),
                        u = {
                            info: n,
                            countryCode: this.props.countryCode,
                            crates: n.crateASINs,
                            gameID: this.props.game.id,
                            isInGameContent: !0,
                            userHasPrime: this.props.hasPrime
                        },
                        m = a.createElement(y.a, {
                            onClickBuyNow: this.onBuyInGameContentNow,
                            options: u
                        });
                    if (o.length > 1) {
                        var p = Object(r.d)("{numCrates} Twitch Crates", {
                            numCrates: o.length
                        }, "InGameContentCrateReward");
                        e = a.createElement(h._17, {
                            className: "in-game-content__crates",
                            attachBottom: !0,
                            padding: {
                                left: 1,
                                right: 1
                            },
                            position: h._2.Absolute,
                            textAlign: h._22.Right
                        }, p)
                    }
                    return a.createElement(h.U, {
                        margin: {
                            bottom: 3
                        }
                    }, a.createElement(h._17, {
                        className: "in-game-content",
                        border: !0,
                        fullHeight: !0,
                        position: h._2.Relative
                    }, a.createElement(h.j, {
                        ratio: h.k.Aspect1x1
                    }, a.createElement("img", {
                        src: l
                    })), a.createElement(h._17, {
                        background: h.m.Base,
                        padding: 1
                    }, a.createElement(h.U, {
                        className: "in-game-content__info-header"
                    }, a.createElement(h._21, {
                        type: h._26.P,
                        fontSize: h.L.Size5,
                        bold: !0,
                        title: c
                    }, c), a.createElement(h._21, {
                        type: h._26.P,
                        color: h.F.Alt2,
                        title: d
                    }, d)), a.createElement(h.U, {
                        className: "in-game-content__price",
                        position: h._2.Relative
                    }, a.createElement("p", {
                        title: s
                    }, s), e), a.createElement(h.U, {
                        className: "in-game-content__buy-button",
                        position: h._2.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        margin: {
                            left: 1,
                            bottom: 1,
                            right: 1
                        }
                    }, m))))
                }, t
            }(a.Component)),
            M = Object(p.c)("InGameContent")(L),
            P = M,
            B = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.contentList;
                    if (0 === t.length) return null;
                    var n = t.map(function(t, n) {
                        return a.createElement(P, {
                            content: t,
                            countryCode: e.props.countryCode,
                            game: e.props.game,
                            hasPrime: e.props.hasPrime,
                            key: n
                        })
                    });
                    return a.createElement(C, {
                        alt: !0
                    }, a.createElement(w, {
                        title: Object(r.d)("In-Game Content", "FeaturedContentRow")
                    }), a.createElement(h._33, {
                        childWidth: h._34.Medium,
                        gutterSize: h._35.Small,
                        noGrow: !0
                    }, n))
                }, t
            }(a.Component),
            V = Object(p.c)("InGameContentRow")(B),
            H = V,
            q = n(1845),
            z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        sortedInGameContent: []
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), r.n.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data && e.data.game,
                        n = t && t.product;
                    if (n) {
                        var i = n.inGameContent.slice().sort(m.a);
                        this.setState({
                            sortedInGameContent: i
                        })
                    }
                }, t.prototype.render = function() {
                    if (this.props.data.loading) return a.createElement(h.X, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return a.createElement(o.a, {
                        message: Object(r.d)("Error loading data.", "DirectoryGameDetailsPage")
                    });
                    if (!this.props.data.game || !this.props.data.game.product || !this.props.data.game.product.id) return a.createElement(l.a, null);
                    var e = this.props.data,
                        t = e.currentUser,
                        n = e.game,
                        i = this.props.data.requestInfo.countryCode,
                        c = t && t.hasPrime,
                        m = [],
                        p = [];
                    return this.state.sortedInGameContent.forEach(function(e) {
                        e.info.isFeatured ? m.push(e) : p.push(e)
                    }), a.createElement(s.b, {
                        suppressScrollX: !0
                    }, a.createElement(h.U, null, a.createElement(d.a, {
                        directoryName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                        directoryType: f.a.Games,
                        activeTab: u.a.DirectoryDetailsPage,
                        showGameDetails: !0
                    }), a.createElement(T, null), a.createElement(A, null), a.createElement(U, {
                        contentList: m,
                        countryCode: i,
                        game: n,
                        hasPrime: c
                    }), a.createElement(H, {
                        contentList: p,
                        countryCode: i,
                        game: n,
                        hasPrime: c
                    }), a.createElement(G, {
                        game: this.props.data.game
                    })))
                }, t
            }(a.Component),
            $ = Object(p.c)("DirectoryGameDetails")(z),
            Q = Object(c.a)(q, {
                options: function(e) {
                    return {
                        variables: {
                            name: decodeURIComponent(e.match.params.encodedCommunityName)
                        }
                    }
                }
            })($),
            W = Q;
        n.d(t, "DirectoryGameDetailsPage", function() {
            return W
        })
    },
    917: function(e, t, n) {
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
    919: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Community = "COMMUNITY_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT"
        }(i || (i = {}))
    },
    921: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(4),
            r = n(1),
            o = n(11),
            l = n(2),
            s = n(9),
            c = n(6),
            d = n(926),
            u = n(3),
            m = n(944),
            p = function(e) {
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
            f = Object(s.a)(m, {
                options: function(e) {
                    return {
                        variables: {
                            content: e.reportContentType
                        }
                    }
                }
            })(p),
            v = (n(945), n(946));
        n.d(t, "a", function() {
            return y
        }), n.d(t, "b", function() {
            return g
        }), n.d(t, "c", function() {
            return k
        });
        var g, y = "community_rules_violation";
        ! function(e) {
            e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError"
        }(g || (g = {}));
        var h = function(e) {
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
                    }, r.createElement(f, {
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
            k = Object(o.compose)(Object(s.a)(v, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        variables: {
                            userId: e.targetUserID
                        }
                    }
                }
            }))(h)
    },
    926: function(e, t, n) {
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
    927: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                sessionUser: e.session.user
            }
        }
        n.d(t, "a", function() {
            return b
        });
        var a = n(0),
            r = n(1),
            o = (n.n(r), n(8)),
            l = n(11),
            s = n(2),
            c = n(9),
            d = n(23),
            u = n(14),
            m = n(6),
            p = n(921),
            f = n(919),
            v = n(926),
            g = n(921),
            y = n(947),
            h = (n.n(y), n(948)),
            k = (n.n(h), function(e) {
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
                                        if (e !== p.a) return [3, 5];
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
                                        }, this.props.reportContext.contentType === f.a.Community && this.props.reportContext.extra && (t.description = Object(v.a)(this.props.reportContext.extra, n)), a.label = 6;
                                    case 6:
                                        return a.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(d.a)(t))];
                                    case 7:
                                        return a.sent(), this.props.reportContext.contentType === f.a.Community && s.n.tracking.track(u.SpadeEventType.CommunityReport, {
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
            b = Object(l.compose)(Object(c.a)(y, {
                name: "reportUserInCommunity"
            }), Object(c.a)(h, {
                name: "reportUser"
            }), Object(m.c)("ReportUser"), Object(o.a)(i, null))(k)
    },
    928: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(s.bindActionCreators)({
                closeModal: d.c
            }, e)
        }
        var a = n(927),
            r = n(0),
            o = n(1),
            l = n(8),
            s = n(11),
            c = n(134),
            d = n(50),
            u = n(6),
            m = n(3),
            p = (n(953), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClose = function(e) {
                        t.props.closeModal(), t.props.onClose && t.props.onClose(e)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(m._17, {
                        className: "reporting-modal__container",
                        background: m.m.Base,
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
            f = Object(s.compose)(Object(u.c)("ReportUserModal"), Object(l.a)(null, i))(p);
        n.d(t, !1, function() {}), n.d(t, !1, function() {
            return a.a
        }), n.d(t, !1, function() {
            return p
        }), n.d(t, "a", function() {
            return f
        })
    },
    941: function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!e) return void a.i.warn("[onPopupClose] Attempted to observe a window that failed to open.");
            var n = setInterval(function() {
                var i = !1,
                    a = !1;
                try {
                    i = e.closed, a = !!e.success
                } catch (e) {}
                if (i || a) {
                    t(a);
                    try {
                        e.close()
                    } catch (e) {}
                    clearInterval(n)
                }
            }, 500)
        }
        t.a = i;
        var a = n(2)
    },
    944: function(e, t) {
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
    945: function(e, t) {},
    946: function(e, t) {
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
    947: function(e, t) {
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
    948: function(e, t) {
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
    953: function(e, t) {},
    954: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
        }(i || (i = {}))
    },
    955: function(e, t, n) {
        "use strict";

        function i(e) {
            return e || (e = navigator.userAgent), !!a.exec(e)
        }
        t.a = i;
        var a = /\scurse\/\d/
    },
    959: function(e, t, n) {
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
    966: function(e, t, n) {
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
    985: function(e, t, n) {
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
    990: function(e, t, n) {
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
//# sourceMappingURL=pages.directory-game-details-cdbb0e069f5fe6bad9893198f107c272.js.map