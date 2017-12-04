webpackJsonp([33], {
    1007: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                headerEditMode: e.directoryHeader.isEditingEnabled
            }
        }

        function i(e) {
            return Object(c.bindActionCreators)({
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
            return Object(c.bindActionCreators)({
                onCloseModal: u.c,
                onDisableDirectoryHeaderEdit: Q.c,
                onShowModal: u.d
            }, e)
        }
        var l = (n(897), n(0)),
            s = n(1),
            d = n(7),
            c = n(9),
            u = n(36),
            m = n(2),
            p = n(6),
            g = n(21),
            h = n(810),
            v = n(12),
            f = "directory-avatar-edit-menu",
            y = "directory-avatar-overlay",
            k = "directory-avatar-remover",
            b = "directory-avatar-uploader",
            S = "directory-banner-edit-menu",
            _ = "directory-banner-overlay",
            N = "directory-banner-remover",
            E = "directory-banner-uploader",
            C = this,
            w = function(e) {
                return l.__awaiter(C, void 0, void 0, function() {
                    var t;
                    return l.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, h.a.get("https://api.twitch.tv/kraken/communities?name=" + e)];
                            case 1:
                                if ((t = n.sent()) && 200 === t.status && t.body) return [2, t.body];
                                throw new Error
                        }
                    })
                })
            },
            D = function(e) {
                return l.__awaiter(C, void 0, void 0, function() {
                    var t, n;
                    return l.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, w(e)];
                            case 1:
                                return t = a.sent(), [2, t.avatar_image_url];
                            case 2:
                                return n = a.sent(), [2, void 0];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            F = function(e) {
                return l.__awaiter(C, void 0, void 0, function() {
                    var t, n;
                    return l.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, w(e)];
                            case 1:
                                return t = a.sent(), [2, t.cover_image_url];
                            case 2:
                                return n = a.sent(), [2, void 0];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            T = "https://static-cdn.jtvnw.net/community-images/defaults/avatar-285x380.png",
            O = "https://static-cdn.jtvnw.net/community-images/defaults/banner-1200x180.png",
            U = n(824),
            I = function(e) {
                return e === U.a.Communities ? "COMMUNITY" : "GAME"
            },
            L = function() {
                return Object(m.d)("Upload new image", "DirectoryHeader")
            },
            R = function() {
                return Object(m.d)("Remove", "DirectoryHeader")
            },
            A = n(374),
            j = "https://api.twitch.tv/kraken/communities/",
            x = function(e) {
                return "" + j + e + "/images/avatar"
            },
            P = function(e) {
                return "" + j + e + "/images/cover"
            },
            M = function(e) {
                return e === U.a.Communities ? Object(A.b)("communities") : Object(A.b)()
            },
            V = n(878),
            B = n(850),
            G = n(5),
            H = n(3),
            W = n(1016),
            z = (n(1017), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingAvatar: !1
                    }, t.renderAvatarEditMode = function() {
                        return t.props.headerEditMode ? s.createElement(H.U, null, s.createElement("div", {
                            onClick: t.onAvatarClick
                        }, s.createElement(H.U, {
                            "data-test-selector": y,
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
                            "data-test-selector": f,
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
                        }, L())), s.createElement(H.S, {
                            "data-test-selector": k,
                            onClick: t.onAvatarDeleteClick
                        }, s.createElement(H.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, R()))) : null
                    }, t.trackAvatarEdit = function(e) {
                        m.n.tracking.track(v.SpadeEventType.CommunityEdit, {
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
                            uploadURL: x(t.props.data.directory.id),
                            imageDimensions: "600x800",
                            maxFileSizeMegabytes: 1,
                            isRequiredImageDimensions: !0,
                            shouldBase64Encode: !0,
                            base64EncodedPropertyName: B.a.CommunitiesAvatar,
                            onFinishUploading: t.onAvatarDoneUploading
                        };
                        t.props.onShowModal(V.b, e)
                    }, t.onAvatarDeleteClick = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return l.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, h.a.delete(x(this.props.data.directory.id))];
                                    case 1:
                                        return t.sent(), this.trackAvatarEdit(), e = function(e) {
                                            return e.directory.avatarURL = T, e
                                        }, Object(g.d)(W, {
                                            name: this.props.directoryName,
                                            type: I(this.props.directoryType)
                                        }, e), [2]
                                }
                            })
                        })
                    }, t.onAvatarDoneUploading = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return l.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, D(this.props.data.directory.displayName)];
                                    case 1:
                                        return e = a.sent(), t = function(t) {
                                            return e && (n.trackAvatarEdit(e), t.directory.avatarURL = e), t
                                        }, Object(g.d)(W, {
                                            name: this.props.directoryName,
                                            type: I(this.props.directoryType)
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
                }, t = l.__decorate([Object(p.a)(W, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: I(e.directoryType)
                            }
                        }
                    }
                }), Object(G.c)("DirectoryAvatar", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component)),
            q = z,
            $ = Object(d.a)(a, i)(q),
            Q = n(854),
            Y = n(4),
            J = n(10),
            X = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    if ("GAMES" !== this.props.directoryType) return null;
                    var e, t = null;
                    if ("IRL" === this.props.directoryName) {
                        var n = Object(m.d)("New to IRL?", "DirectoryHeader"),
                            a = Object(m.d)("Learn More", "DirectoryHeader"),
                            i = void 0;
                        i = s.createElement("a", {
                            target: "_blank",
                            href: "http://link.twitch.tv/irldirectorytooltip",
                            className: "directory-header__link",
                            rel: "noopener noreferrer"
                        }, a), e = s.createElement("span", null, n, " ", i)
                    } else "Always On" === this.props.directoryName && (e = Object(m.d)("24/7 streaming from your favorite brands. Watch together.", "DirectoryHeader"));
                    return e && (t = s.createElement(H._21, {
                        color: H.F.Overlay,
                        type: H._26.P,
                        "data-test-selector": "directory-game-descriptor"
                    }, e)), t
                }, t
            }(s.Component),
            K = X,
            Z = n(1018),
            ee = (n(1019), function(e) {
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
                            "data-test-selector": E,
                            onClick: t.onBannerUploadClick
                        }, s.createElement(H.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, L())), s.createElement(H.S, {
                            "data-test-selector": N,
                            onClick: t.onBannerDeleteClick
                        }, s.createElement(H.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, R()))) : null
                    }, t.trackBannerEdit = function(e) {
                        m.n.tracking.track(v.SpadeEventType.CommunityEdit, {
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
                            uploadURL: P(t.props.data.directory.id),
                            imageDimensions: "1200x180",
                            maxFileSizeMegabytes: 3,
                            isRequiredImageDimensions: !0,
                            shouldBase64Encode: !0,
                            base64EncodedPropertyName: B.a.CommunitiesCover,
                            onFinishUploading: t.onBannerDoneUploading
                        };
                        t.props.onShowModal(V.b, e)
                    }, t.onBannerDeleteClick = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return l.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, h.a.delete(P(this.props.data.directory.id))];
                                    case 1:
                                        return t.sent(), this.trackBannerEdit(), e = function(e) {
                                            return e.directory.coverURL = O, e
                                        }, Object(g.d)(Z, {
                                            name: this.props.directoryName,
                                            type: I(this.props.directoryType)
                                        }, e), [2]
                                }
                            })
                        })
                    }, t.onBannerDoneUploading = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return l.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, F(this.props.data.directory.displayName)];
                                    case 1:
                                        return e = a.sent(), t = function(t) {
                                            return e && (n.trackBannerEdit(e), t.directory.coverURL = e), t
                                        }, Object(g.d)(Z, {
                                            name: this.props.directoryName,
                                            type: I(this.props.directoryType)
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
                    var a = !1,
                        i = {};
                    this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.directory && (this.props.data.directory.coverURL ? i = {
                        backgroundImage: "url(" + this.props.data.directory.coverURL + ")"
                    } : this.props.data.directory.streams.edges.length && this.props.data.directory.streams.edges.filter(function(e) {
                        return e.node.previewImageURL
                    }).map(function(e) {
                        var t = e.node;
                        a = !0, i = {
                            backgroundImage: "url(" + t.previewImageURL + ")"
                        }
                    }));
                    var r = Y("directory-header__banner", {
                        "directory-header__banner--blur": a
                    });
                    return s.createElement(H.U, {
                        position: H._2.Relative,
                        overflow: H.Y.Hidden
                    }, s.createElement("div", {
                        className: r,
                        style: i,
                        "data-test-selector": "directory-banner-image"
                    }), s.createElement(H.U, {
                        className: "directory-header__title",
                        position: H._2.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, s.createElement(J.a, {
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
                                type: I(e.directoryType)
                            }
                        }
                    }
                }), Object(G.c)("DirectoryBanner", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component)),
            te = ee,
            ne = Object(d.a)(r, o)(te),
            ae = n(905),
            ie = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(H.U, {
                        position: H._2.Relative
                    }, s.createElement(ne, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName
                    }), s.createElement($, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName
                    }), s.createElement(ae.b, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName,
                        activeTab: this.props.activeTab,
                        showGameDetails: this.props.showGameDetails
                    }))
                }, t = l.__decorate([Object(G.c)("DirectoryHeader", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component),
            re = ie;
        n.d(t, !1, function() {
            return ie
        }), n.d(t, "a", function() {
            return re
        })
    },
    1008: function(e, t) {},
    1009: function(e, t) {},
    1016: function(e, t) {
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
    1017: function(e, t) {},
    1018: function(e, t) {
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
    1019: function(e, t) {},
    1020: function(e, t) {
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
    1021: function(e, t) {
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
    1022: function(e, t) {
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
    1023: function(e, t) {},
    1024: function(e, t) {
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
    1025: function(e, t) {
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
    1026: function(e, t) {},
    1038: function(e, t, n) {
        "use strict";

        function a(e) {
            return Object(v.bindActionCreators)({
                onCloseModal: f.c
            }, e)
        }

        function i(e) {
            return Object(v.bindActionCreators)({
                onCloseModal: f.c
            }, e)
        }

        function r(e) {
            return Object(v.bindActionCreators)({
                onShowModal: f.d
            }, e)
        }
        var o = n(0),
            l = n(1),
            s = n(2),
            d = n(908),
            c = n(909),
            u = n(49),
            m = n(374),
            p = n(12),
            g = n(824),
            h = n(7),
            v = n(9),
            f = n(36),
            y = n(385),
            k = n(6),
            b = n(5),
            S = n(31),
            _ = n(104),
            N = n(21),
            E = function(e) {
                switch (e) {
                    case "TARGET_USER_OWNER":
                        return Object(s.d)("You cannot ban or timeout the owner of this community", "BanTimeoutErrorMessages");
                    case "TARGET_USER_MOD":
                        return Object(s.d)("You cannot ban or timeout a moderator", "BanTimeoutErrorMessages");
                    case "TARGET_USER_SELF":
                        return Object(s.d)("You cannot ban or timeout yourself", "BanTimeoutErrorMessages");
                    case "TARGET_USER_STAFF":
                        return Object(s.d)("You cannot ban or timeout a staff member", "BanTimeoutErrorMessages");
                    case "NOT_PERMITTED":
                        return Object(s.d)("The user is already banned from this community", "BanTimeoutErrorMessages");
                    default:
                        return Object(s.d)("Something went wrong", "BanTimeoutErrorMessages")
                }
            },
            C = n(3),
            w = n(1075),
            D = (n(1076), "error-message"),
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? l.createElement(C.U, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(C._21, {
                            color: C.F.Error,
                            type: C._26.H4,
                            "data-test-selector": D
                        }, E(t.state.error))) : null
                    }, t.onReasonChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            reason: n
                        })
                    }, t.banUserFromCommunity = function() {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return o.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.banUserFromCommunity ? (e = o.__assign({}, Object(N.a)({
                                            communityID: this.props.communityID,
                                            userID: this.props.userID,
                                            reason: this.state.reason
                                        }), {
                                            optimisticResponse: {
                                                banUserFromCommunity: {
                                                    error: null,
                                                    __typename: "BanUserFromCommunityPayload"
                                                }
                                            }
                                        }), [4, this.props.banUserFromCommunity(e)]) : [2];
                                    case 1:
                                        return t = n.sent(), null === t.data.banUserFromCommunity.error ? (s.n.tracking.track(p.SpadeEventType.CommunityModeration, {
                                            community_id: this.props.communityID,
                                            name: this.props.communityName,
                                            is_official: !1,
                                            user_id: this.props.currentUserID,
                                            target_id: this.props.userID,
                                            action: "ban",
                                            reason: this.state.reason
                                        }), this.props.onCloseModal()) : this.setState({
                                            error: t.data.banUserFromCommunity.error
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(C.P, {
                        position: C._2.Relative
                    }, l.createElement(C._17, {
                        background: C.m.Base,
                        className: "stream-ban-modal"
                    }, l.createElement(C.U, {
                        padding: 2
                    }, this.renderErrorMessage(), l.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(C._21, {
                        type: C._26.H4
                    }, Object(s.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), l.createElement(C._17, {
                        borderTop: !0
                    }, l.createElement(C.U, {
                        margin: {
                            y: 2
                        }
                    }, l.createElement(C._21, {
                        bold: !0
                    }, Object(s.d)("Reason (Required)", "StreamBanModal")), l.createElement(C.Q, {
                        type: C.R.Text,
                        placeholder: Object(s.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), l.createElement(C._17, {
                        borderTop: !0
                    }, l.createElement(C.U, {
                        padding: {
                            top: 2
                        },
                        textAlign: C._22.Center
                    }, l.createElement(C.U, {
                        display: C.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, l.createElement(C.u, {
                        type: C.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(s.d)("Cancel", "StreamBanModal"))), l.createElement(C.U, {
                        display: C.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, l.createElement(C.u, {
                        onClick: this.banUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "ban-button"
                    }, Object(s.d)("Ban", "StreamBanModal")))))), l.createElement(_.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(l.Component),
            T = Object(S.compose)(Object(k.a)(w, {
                name: "banUserFromCommunity"
            }))(F),
            O = Object(h.a)(null, a)(T),
            U = (n(1077), n(1078)),
            I = "error-message",
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        durationHours: 2,
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? l.createElement(C.U, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(C._21, {
                            color: C.F.Error,
                            type: C._26.H4,
                            "data-test-selector": I
                        }, E(t.state.error))) : null
                    }, t.onReasonChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            reason: n
                        })
                    }, t.onDurationHoursChange = function(e) {
                        var n = parseInt(e.target.value, 10);
                        t.setState({
                            durationHours: n
                        })
                    }, t.timeoutUserFromCommunity = function() {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return o.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.timeoutUserFromCommunity ? (e = o.__assign({}, Object(N.a)({
                                            communityID: this.props.communityID,
                                            durationHours: this.state.durationHours,
                                            userID: this.props.userID,
                                            reason: this.state.reason
                                        }), {
                                            optimisticResponse: {
                                                timeoutUserFromCommunity: {
                                                    error: null,
                                                    __typename: "TimeoutUserFromCommunityPayload"
                                                }
                                            }
                                        }), [4, this.props.timeoutUserFromCommunity(e)]) : [2];
                                    case 1:
                                        return t = n.sent(), null === t.data.timeoutUserFromCommunity.error ? (s.n.tracking.track(p.SpadeEventType.CommunityModeration, {
                                            community_id: this.props.communityID,
                                            name: this.props.communityName,
                                            is_official: !1,
                                            user_id: this.props.currentUserID,
                                            target_id: this.props.userID,
                                            action: "timeout",
                                            reason: this.state.reason,
                                            duration: this.state.durationHours
                                        }), this.props.onCloseModal()) : this.setState({
                                            error: t.data.timeoutUserFromCommunity.error
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(C.P, {
                        position: C._2.Relative
                    }, l.createElement(C._17, {
                        background: C.m.Base,
                        className: "stream-timeout-modal"
                    }, l.createElement(C.U, {
                        padding: 2
                    }, this.renderErrorMessage(), l.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(C._21, {
                        type: C._26.H4
                    }, Object(s.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), l.createElement(C._17, {
                        borderTop: !0
                    }, l.createElement(C.U, {
                        margin: {
                            y: 2
                        }
                    }, l.createElement(C._21, {
                        bold: !0
                    }, Object(s.d)("Reason (Required)", "StreamTimeoutModal")), l.createElement(C.Q, {
                        type: C.R.Text,
                        placeholder: Object(s.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), l.createElement(C.U, {
                        margin: {
                            y: 2
                        }
                    }, l.createElement(C._21, {
                        bold: !0
                    }, Object(s.d)("Duration", "StreamTimeoutModal")), l.createElement(C._14, {
                        defaultValue: "2",
                        onChange: this.onDurationHoursChange
                    }, l.createElement("option", {
                        value: "2"
                    }, Object(s.d)("2 hours", "StreamTimeoutModal")), l.createElement("option", {
                        value: "4"
                    }, Object(s.d)("4 hours", "StreamTimeoutModal")), l.createElement("option", {
                        value: "8"
                    }, Object(s.d)("8 hours", "StreamTimeoutModal")), l.createElement("option", {
                        value: "12"
                    }, Object(s.d)("12 hours", "StreamTimeoutModal")), l.createElement("option", {
                        value: "24"
                    }, Object(s.d)("24 hours", "StreamTimeoutModal")))), l.createElement(C._17, {
                        borderTop: !0
                    }, l.createElement(C.U, {
                        padding: {
                            top: 2
                        },
                        textAlign: C._22.Center
                    }, l.createElement(C.U, {
                        display: C.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, l.createElement(C.u, {
                        type: C.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(s.d)("Cancel", "StreamTimeoutModal"))), l.createElement(C.U, {
                        display: C.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, l.createElement(C.u, {
                        onClick: this.timeoutUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "timeout-button"
                    }, Object(s.d)("Timeout", "StreamTimeoutModal")))))), l.createElement(_.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(l.Component),
            R = Object(S.compose)(Object(k.a)(U, {
                name: "timeoutUserFromCommunity"
            }))(L),
            A = Object(h.a)(null, i)(R),
            j = n(1079),
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamBanClick = function() {
                        var e = Object(u.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(O, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t.onStreamTimeoutClick = function() {
                        var e = Object(u.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(A, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? l.createElement(y.a, null, l.createElement(C.v, {
                        ariaLabel: Object(s.d)("Moderation", "DirectoryGamePage"),
                        icon: C._9.ChatRiskFlag
                    }), l.createElement(C.p, {
                        direction: C.q.BottomRight,
                        size: C.r.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? l.createElement(C.S, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, l.createElement(C.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(s.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? l.createElement(C.S, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, l.createElement(C.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(s.d)("Timeout", "StreamFlag"))) : null
                }, t = o.__decorate([Object(k.a)(j, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.communityName)
                            }
                        }
                    }
                }), Object(b.c)("StreamFlagComponent", {
                    autoReportInteractive: !0
                })], t)
            }(l.Component),
            P = x,
            M = Object(h.a)(null, r)(P),
            V = n(932),
            B = (n(1080), function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.getLinkTo = function(e, n) {
                        var a = t.props.directoryType === g.a.Communities ? p.PageviewMedium.Community : p.PageviewMedium.Game;
                        return t.props.trackingMedium && (a = t.props.trackingMedium), {
                            pathname: e,
                            state: {
                                medium: a,
                                content: p.PageviewContent.Live,
                                content_index: n
                            }
                        }
                    }, t.state = {
                        isPremiereExperimentActive: !1
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return o.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, s.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return e = t.sent(), "yes" === e && s.b.get("premiere_video_manager_staff", !1) && this.setState({
                                        isPremiereExperimentActive: !0
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = this.props.streamNode,
                        t = this.props.streamIndex;
                    if (!e.broadcaster) return null;
                    var n = null,
                        a = null;
                    if (this.props.directoryType === g.a.Communities && (n = l.createElement(C.U, {
                            className: "card card__flag",
                            position: C._2.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, l.createElement(M, {
                            communityName: this.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        }))), this.props.directoryType === g.a.Communities && e.game) a = l.createElement(d.a, {
                        imageSrc: e.previewImageURL || s.a.defaultStreamPreviewURL,
                        imageAlt: e.broadcaster.login + " cover image",
                        viewerCount: e.viewersCount || 0,
                        title: e.title || V.a,
                        channelName: Object(u.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                        gameImageSrc: e.game.boxArtURL || s.a.defaultBoxArtURL,
                        gameTitle: e.game.name,
                        gameLinkTo: this.getLinkTo(Object(m.d)(e.game.name), t),
                        linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                        channelNameLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                        streamType: e.type
                    });
                    else {
                        var i = null;
                        this.state.isPremiereExperimentActive && "string" == typeof e.type && e.type && (i = l.createElement(C.U, {
                            position: C._2.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            padding: .5
                        }, l.createElement(c.a, {
                            type: e.type
                        }))), a = l.createElement(C.U, {
                            position: C._2.Relative
                        }, l.createElement(C._27, {
                            linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                            title: e.title || V.a,
                            imageAlt: e.broadcaster.login + " cover image",
                            imageSrc: e.previewImageURL,
                            info: Object(V.b)(e.viewersCount, Object(u.a)(e.broadcaster.login, e.broadcaster.displayName, !0)),
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                        }), i)
                    }
                    return l.createElement("div", {
                        "data-target": t ? "" : "directory-first-item",
                        style: {
                            order: t
                        }
                    }, l.createElement(C.U, {
                        className: "card",
                        position: C._2.Relative,
                        margin: {
                            bottom: 2
                        },
                        "data-target": "directory-game__card_container"
                    }, a, n))
                }, t
            }(l.Component)),
            G = B;
        n.d(t, "a", function() {
            return "directory-first-item"
        }), n.d(t, !1, function() {
            return "directory-game__card_container"
        }), n.d(t, "b", function() {
            return G
        })
    },
    1048: function(e, t, n) {
        "use strict";

        function a(e, t, n) {
            return void 0 === n && (n = 1), t && e ? Math.floor(e / t) * n : -1
        }
        t.a = a
    },
    1062: function(e, t, n) {
        "use strict";

        function a(e) {
            var t = i.createElement(l.U, {
                padding: 1,
                fullHeight: !0,
                flexDirection: l.J.Column,
                justifyContent: l.T.Center,
                display: l.H.Flex
            }, i.createElement(l._21, {
                color: l.F.Link,
                fontSize: l.L.Size4,
                noWrap: !0
            }, Object(o.d)("View All", "Following--ViewAllButton")), i.createElement(l._21, {
                color: l.F.Alt2,
                fontSize: l.L.Size4,
                noWrap: !0
            }, e.subHeader));
            return e.linkTo && (t = i.createElement(r.a, {
                to: e.linkTo,
                className: "following__view-all__link"
            }, t)), i.createElement("div", {
                className: "following__view-all",
                onClick: e.onClickViewAll,
                "data-test-selector": d
            }, i.createElement(l.U, null, i.createElement(l.j, {
                ratio: e.aspectRatio
            }, i.createElement(l._17, {
                background: l.m.Alt2,
                fullHeight: !0
            }, t))))
        }
        t.a = a;
        var i = n(1),
            r = (n.n(i), n(10)),
            o = n(2),
            l = n(3),
            s = n(1379),
            d = (n.n(s), "view-all-button-selector")
    },
    1075: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CommunityStreamBan_BanUser"
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
                                value: "BanUserFromCommunityInput"
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
                            value: "banUserFromCommunity"
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
                                    value: "error"
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
                end: 130
            }
        };
        n.loc.source = {
            body: "mutation CommunityStreamBan_BanUser($input: BanUserFromCommunityInput!) {\n  banUserFromCommunity(input: $input) {\n    error\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1076: function(e, t) {},
    1077: function(e, t) {},
    1078: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CommunityStreamTimeout_TimeoutUser"
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
                                value: "TimeoutUserFromCommunityInput"
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
                            value: "timeoutUserFromCommunity"
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
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "error"
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
                end: 188
            }
        };
        n.loc.source = {
            body: "mutation CommunityStreamTimeout_TimeoutUser($input: TimeoutUserFromCommunityInput!) {\n  timeoutUserFromCommunity(input: $input) {\n    community {\n      id\n      name\n    }\n    error\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1079: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryGame_CommunityPermissions"
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
                                                    value: "timingOut"
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
                end: 205
            }
        };
        n.loc.source = {
            body: "query DirectoryGame_CommunityPermissions($name: String!) {\n  community(name: $name) {\n    id\n    self {\n      permissions {\n        banning\n        timingOut\n      }\n    }\n  }\n  currentUser {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1080: function(e, t) {},
    1280: function(e, t, n) {
        "use strict";

        function a() {
            return i.createElement(o.U, {
                margin: {
                    bottom: 2
                }
            }, i.createElement(o._21, {
                type: o._26.H4,
                color: o.F.Alt2,
                fontSize: o.L.Size5,
                transform: o._25.Uppercase,
                "data-a-target": "international-section-header"
            }, Object(r.d)("Channels in English", "DirectoryInternationalSectionHeader")))
        }
        var i = n(1),
            r = n(2),
            o = n(3);
        n.d(t, "a", function() {
            return a
        })
    },
    129: function(e, t, n) {
        "use strict";

        function a(e) {
            return r.b.get(l.a, !1) || r.a.buildType !== o.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? s + e : s + e.pathname
        }

        function i() {
            return !r.b.get(l.a, !1) && r.a.buildType === o.a.Production
        }
        var r = n(2),
            o = n(16),
            l = n(262);
        t.a = a, t.b = i;
        var s = "https://www.twitch.tv"
    },
    1322: function(e, t, n) {
        "use strict";
        var a = n(0),
            i = n(1),
            r = n(2),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.configScript = null, t.enabledChannelNames = new Set(r.b.get("sizmek_versatag_channels", [])), t.enabledGameIDs = new Set(r.b.get("sizmek_versatag_games", [])), t.logger = r.i.withCategory("sizmek-versatag"), t.trackingScript = null, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    (this.props.gameID && this.enabledGameIDs.has(this.props.gameID) || this.props.channelName && this.enabledChannelNames.has(this.props.channelName)) && this.injectScripts()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    (e.gameID && this.enabledGameIDs.has(e.gameID) && this.props.gameID !== e.gameID || e.channelName && this.enabledChannelNames.has(e.channelName) && this.props.channelName !== e.channelName) && this.reloadScripts()
                }, t.prototype.componentWillUnmount = function() {
                    this.removeScripts()
                }, t.prototype.render = function() {
                    return null
                }, t.prototype.reloadScripts = function() {
                    this.removeScripts(), this.injectScripts()
                }, t.prototype.removeScripts = function() {
                    try {
                        this.configScript && (document.body.removeChild(this.configScript), this.configScript = null, this.logger.debug("VersaTag config script removed.")), this.trackingScript && (document.body.removeChild(this.trackingScript), this.trackingScript = null, this.logger.debug("VersaTag tracking script removed."));
                        var e = document.querySelector('[src^="https://bs.serving-sys.com/Serving?"]');
                        e && (document.body.removeChild(e), this.logger.debug("Extra VersaTag scripts removed."))
                    } catch (e) {
                        this.logger.warn("Failed to remove VersaTag", {
                            error: e
                        })
                    }
                }, t.prototype.injectScripts = function() {
                    try {
                        document.querySelector('[data-target="' + t.configScriptSelector + '"]') || (this.configScript = document.createElement("script"), this.configScript.setAttribute("data-target", t.configScriptSelector), this.configScript.innerHTML = "\n          versaTag = {\n            id: '8034',\n            sync: 0,\n            dispType: 'js',\n            ptcl: 'HTTPS',\n            bsUrl: 'bs.serving-sys.com/BurstingPipe',\n            activityParams: {\n              OrderID: '',\n              Session: '',\n              Value: '',\n              productid: '',\n              productinfo: '',\n              Quantity: '',\n            },\n            retargetParams: {},\n            dynamicRetargetParams: {},\n            conditionalParams: {},\n          };\n        ", document.body.appendChild(this.configScript), this.logger.debug("VersaTag config script created.")), document.querySelector('[data-target="' + t.trackingScriptSelector + '"]') || (this.trackingScript = document.createElement("script"), this.trackingScript.setAttribute("data-target", t.trackingScriptSelector), this.trackingScript.id = "ebOneTagUrlId", this.trackingScript.async = !0, this.trackingScript.src = "https://secure-ds.serving-sys.com/SemiCachedScripts/ebOneTag.js", document.body.appendChild(this.trackingScript), this.logger.debug("VersaTag tracking script created."))
                    } catch (e) {
                        this.logger.warn("Failed to create VersaTag", {
                            error: e
                        })
                    }
                }, t.configScriptSelector = "sizmek-versatag-config", t.trackingScriptSelector = "sizmek-versatag-tracking", t
            }(i.Component);
        n.d(t, "a", function() {
            return o
        })
    },
    1379: function(e, t) {},
    1868: function(e, t) {},
    1869: function(e, t) {},
    1870: function(e, t) {},
    1871: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Events_UpdateEventBroadcastNotifications"
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
                                value: "UpdateEventBroadcastNotificationsInput"
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
                            value: "updateEventBroadcastNotifications"
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
                                    value: "eventBroadcast"
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
                                                    value: "emailEnabled"
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
                end: 238
            }
        };
        n.loc.source = {
            body: "mutation Events_UpdateEventBroadcastNotifications($input: UpdateEventBroadcastNotificationsInput!) {\n  updateEventBroadcastNotifications(input: $input) {\n    eventBroadcast {\n      id\n      self {\n        emailEnabled\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1872: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GamePage_Events"
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
                                    value: "featuredEventBroadcasts"
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
                                            value: "live"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "InlineEventBroadcast"
                                                },
                                                directives: []
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
                                                            value: "stream"
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
                                                                    value: "viewersCount"
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
                                            value: "future"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "InlineEventBroadcast"
                                                },
                                                directives: []
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
                                                            value: "emailEnabled"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "past"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "InlineEventBroadcast"
                                                },
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "highlights"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "videos"
                                                },
                                                arguments: [{
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "first"
                                                    },
                                                    value: {
                                                        kind: "IntValue",
                                                        value: "3"
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "type"
                                                    },
                                                    value: {
                                                        kind: "EnumValue",
                                                        value: "HIGHLIGHT"
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "sort"
                                                    },
                                                    value: {
                                                        kind: "EnumValue",
                                                        value: "VIEWS"
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
                                                                            value: "thumbnailURLs"
                                                                        },
                                                                        arguments: [{
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "height"
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "54"
                                                                            }
                                                                        }, {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "width"
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "96"
                                                                            }
                                                                        }],
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
                                                                            value: "lengthSeconds"
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
                                                alias: {
                                                    kind: "Name",
                                                    value: "vods"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "videos"
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
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "type"
                                                    },
                                                    value: {
                                                        kind: "EnumValue",
                                                        value: "ARCHIVE"
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
                                                                            value: "thumbnailURLs"
                                                                        },
                                                                        arguments: [{
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "height"
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "54"
                                                                            }
                                                                        }, {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "width"
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "96"
                                                                            }
                                                                        }],
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
                                                                            value: "lengthSeconds"
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
                            }]
                        }
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "InlineEventBroadcast"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "EventBroadcast"
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
                            value: "startAt"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "endAt"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "coverImageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            value: {
                                kind: "IntValue",
                                value: "340"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "193"
                            }
                        }],
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 1135
            }
        };
        n.loc.source = {
            body: "query GamePage_Events($name: String!) {\n  game(name: $name) {\n    id\n    name\n\n    featuredEventBroadcasts {\n      live {\n        ...InlineEventBroadcast\n        owner {\n          stream {\n            id\n            viewersCount\n          }\n        }\n      }\n      future {\n        ...InlineEventBroadcast\n        self {\n          emailEnabled\n        }\n      }\n      past {\n        ...InlineEventBroadcast\n        highlights: videos(first: 3, type:HIGHLIGHT, sort:VIEWS) {\n          edges {\n            node {\n              id\n              title\n              thumbnailURLs(height: 54, width:96)\n              viewCount\n              lengthSeconds\n            }\n          }\n        }\n        vods: videos(first: 1, type:ARCHIVE) {\n          edges {\n            node {\n              id\n              title\n              thumbnailURLs(height: 54, width:96)\n              viewCount\n              lengthSeconds\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment InlineEventBroadcast on EventBroadcast {\n  id\n  title\n  startAt\n  endAt\n  coverImageURL(width:340, height:193)\n  owner {\n    id\n    login\n    displayName\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1873: function(e, t) {},
    1874: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GamePage_Game"
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
                            value: "languages"
                        }
                    },
                    type: {
                        kind: "ListType",
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
                                    value: "streams"
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
                                        value: "languages"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "languages"
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
                                                                        value: "285"
                                                                    }
                                                                }, {
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "height"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "380"
                                                                    }
                                                                }],
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
                                    }, {
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 666
            }
        };
        n.loc.source = {
            body: "query GamePage_Game($name: String!, $type: DirectoryType!, $limit: Int, $languages: [String!], $cursor: Cursor) {\n  directory(name: $name, type: $type) {\n    id\n    displayName\n    streams(first: $limit, after: $cursor, languages: $languages) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          viewersCount\n          previewImageURL(width: 320 height: 180)\n          broadcaster {\n            id\n            login\n            displayName\n          }\n          game {\n            id\n            boxArtURL(width: 285 height: 380)\n            name\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1875: function(e, t, n) {
        e.exports = n.p + "assets/hearthstone-classes-b3b59eedbe78268cf62299a41ec09be1.png"
    },
    1876: function(e, t, n) {
        e.exports = n.p + "assets/hearthstone-modes-2390ca3de0f916ce2c85d7b26b665138.png"
    },
    1877: function(e, t, n) {
        e.exports = n.p + "assets/overwatch-chars-062a1df5ff2aaa76eb8e129940ef964a.png"
    },
    1878: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GamePage_Game"
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
                            value: "languages"
                        }
                    },
                    type: {
                        kind: "ListType",
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
                            value: "filters"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "StreamMetadataFilterInput"
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Community"
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
                                            value: "streams"
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
                                                value: "languages"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "languages"
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
                                                                                value: "40"
                                                                            }
                                                                        }, {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "height"
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "56"
                                                                            }
                                                                        }],
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
                                                            }, {
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "type"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
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
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "InlineFragment",
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
                                                value: "languages"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "languages"
                                                }
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "filters"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "filters"
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
                                                                                value: "40"
                                                                            }
                                                                        }, {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "height"
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "56"
                                                                            }
                                                                        }],
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
                                                            }, {
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "type"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
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
                end: 1437
            }
        };
        n.loc.source = {
            body: "query GamePage_Game($name: String!, $type: DirectoryType!, $limit: Int, $languages: [String!], $cursor: Cursor, $filters: StreamMetadataFilterInput) {\n  directory(name: $name, type: $type) {\n    id\n    displayName\n    ... on Community {\n      id\n      streams(first: $limit, after: $cursor, languages: $languages) {\n        edges {\n          cursor\n          node {\n            id\n            title\n            viewersCount\n            previewImageURL(width: 320 height: 180)\n            broadcaster {\n              id\n              login\n              displayName\n            }\n            game {\n              id\n              boxArtURL(width: 40 height: 56)\n              name\n            }\n            type\n          }\n        }\n        pageInfo {\n          hasNextPage\n        }\n      }\n    }\n    ... on Game {\n      id\n      product {\n        id\n      }\n      streams(first: $limit, after: $cursor, languages: $languages, filters: $filters) {\n        edges {\n          cursor\n          node {\n            id\n            title\n            viewersCount\n            previewImageURL(width: 320 height: 180)\n            broadcaster {\n              id\n              login\n              displayName\n            }\n            game {\n              id\n              boxArtURL(width: 40 height: 56)\n              name\n            }\n            type\n          }\n        }\n        pageInfo {\n          hasNextPage\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1879: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GamePage_Game"
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
                            value: "languages"
                        }
                    },
                    type: {
                        kind: "ListType",
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
                                    value: "streams"
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
                                        value: "languages"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "languages"
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
                                                                        value: "285"
                                                                    }
                                                                }, {
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "height"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "380"
                                                                    }
                                                                }],
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
                                    }, {
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 666
            }
        };
        n.loc.source = {
            body: "query GamePage_Game($name: String!, $type: DirectoryType!, $limit: Int, $languages: [String!], $cursor: Cursor) {\n  directory(name: $name, type: $type) {\n    id\n    displayName\n    streams(first: $limit, after: $cursor, languages: $languages) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          viewersCount\n          previewImageURL(width: 320 height: 180)\n          broadcaster {\n            id\n            login\n            displayName\n          }\n          game {\n            id\n            boxArtURL(width: 285 height: 380)\n            name\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    2059: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }

        function i(e) {
            return {
                isLoggedIn: Object(se.d)(e)
            }
        }

        function r(e, t, n) {
            return e + "?tt_medium=" + I.PageviewMedium.Game + "&tt_content=" + t + "&tt_content_index=" + n
        }

        function o(e) {
            for (var t = "", n = [], a = 0, i = he.length; a < i && n.length <= 1; a++) t = he[a], n = e.split(t).map(function(e) {
                return e.trim()
            }).filter(function(e) {
                return e.length
            });
            if (n.length <= 1) return {
                prefix: e,
                postfix: "",
                best: e
            };
            for (var r = 0, o = ""; 0 === o.length;) r--, o = n.slice(r).join(t);
            return {
                prefix: n.slice(0, n.length + r).join(t).trim(),
                postfix: o,
                best: o
            }
        }

        function l(e) {
            if (0 === e.length) return [];
            for (var t = "", n = [], a = 0, i = 0, r = he.length; i < r && a <= 1; i++) t = he[i], n = e.map(function(e) {
                return e.split(t).map(function(e) {
                    return e.trim()
                }).filter(function(e) {
                    return e.length
                })
            }), a = Math.min.apply(Math, n.map(function(e) {
                return e.length
            }));
            for (var l = 0, s = -1, d = 0; d < a; d++) ! function(e) {
                var t = n.reduce(function(t, a, i) {
                    for (var r = 0; r < i; r++) {
                        var o = n[r];
                        a[e] !== o[e] && (t += 1)
                    }
                    return t
                }, 0);
                t > l && (l = t, s = e)
            }(d);
            return -1 === s ? e.map(function(e) {
                return {
                    full: e,
                    identifier: o(e).best
                }
            }) : e.map(function(e, t) {
                return {
                    full: e,
                    identifier: n[t][s]
                }
            })
        }

        function s(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded,
                sideNavExpanded: e.ui.sideNavExpanded
            }
        }

        function d(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }

        function c(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }

        function u(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }

        function m(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }

        function p(e) {
            return {
                languagePreferences: Object(_.a)(e),
                sideNavExpanded: e.ui.sideNavExpanded,
                languageCode: e.session.languageCode,
                firstPageLoaded: e.session.firstPageLoaded
            }
        }

        function g(e) {
            return Object(b.bindActionCreators)({
                onShowModal: S.d
            }, e)
        }

        function h(e) {
            return {
                sideNavExpanded: e.ui.sideNavExpanded
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var v, f = n(0),
            y = n(1),
            k = n(7),
            b = n(9),
            S = n(36),
            _ = n(877),
            N = n(2),
            E = n(918),
            C = n(66),
            w = n(380),
            D = n(6),
            F = n(811),
            T = n(21),
            O = n(808),
            U = n(110),
            I = n(12),
            L = n(874),
            R = n(381),
            A = n(1007),
            j = n(905),
            x = n(5),
            P = n(443),
            M = n(1322),
            V = n(824),
            B = n(923),
            G = [{
                Maps: [{
                    name: "cs_agency",
                    display_name: "Agency"
                }, {
                    name: "cs_assault",
                    display_name: "Assault"
                }, {
                    name: "de_austria",
                    display_name: "Austria"
                }, {
                    name: "de_cache",
                    display_name: "Cache"
                }, {
                    name: "de_canals",
                    display_name: "Canals"
                }, {
                    name: "de_cbble",
                    display_name: "Cobblestone"
                }, {
                    name: "custom",
                    display_name: "Custom"
                }, {
                    name: "deathmatch",
                    display_name: "Deathmatch"
                }, {
                    name: "de_dust",
                    display_name: "Dust"
                }, {
                    name: "de_dust2",
                    display_name: "Dust II"
                }, {
                    name: "guardian",
                    display_name: "Guardian"
                }, {
                    name: "de_inferno",
                    display_name: "Inferno"
                }, {
                    name: "cs_insertion",
                    display_name: "Insertion"
                }, {
                    name: "cs_italy",
                    display_name: "Italy"
                }, {
                    name: "de_mirage",
                    display_name: "Mirage"
                }, {
                    name: "de_nuke",
                    display_name: "Nuke"
                }, {
                    name: "cs_office",
                    display_name: "Office"
                }, {
                    name: "de_overpass",
                    display_name: "Overpass"
                }, {
                    name: "de_train",
                    display_name: "Train"
                }, {
                    name: "wargames",
                    display_name: "War Games"
                }, {
                    name: "weaponsexpert",
                    display_name: "Weapons Expert"
                }]
            }],
            H = n(28),
            W = n(47),
            z = n(3),
            q = (n(1868), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.balloonOpen = !1, t.onChangeSearchTerm = function(e) {
                        t.props.onSearch(e.currentTarget.value)
                    }, t.onToggle = function(e) {
                        return t.balloonOpen = !e
                    }, t.renderSections = function() {
                        return t.props.sections ? t.props.sections.map(function(e) {
                            return [y.createElement(z.P, {
                                padding: {
                                    x: 1,
                                    top: .5
                                },
                                key: "header"
                            }, y.createElement(z._21, {
                                color: z.F.Alt2
                            }, e.title)), e.items]
                        }) : null
                    }, t.renderSelected = function() {
                        return t.props.selected ? y.createElement(z._17, {
                            borderBottom: !0
                        }, y.createElement(z.P, {
                            padding: {
                                x: 1,
                                top: .5
                            }
                        }, y.createElement(z._21, {
                            color: z.F.Alt2
                        }, t.props.selectedTitle)), t.props.selected) : null
                    }, t.setSearchRef = function(e) {
                        t.props.searchRefDelegate && t.props.searchRefDelegate(e)
                    }, t.setToggleRef = function(e) {
                        return t.toggleRef = e
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    (!this.props.selected && e.selected || this.props.selected && !e.selected) && this.balloonOpen && this.toggleRef && this.toggleRef.toggleBalloon(!1)
                }, t.prototype.render = function() {
                    return this.props.isError ? null : this.props.isLoading ? y.createElement(z.U, {
                        margin: {
                            left: 1
                        },
                        display: z.H.Flex,
                        justifyContent: z.T.Center,
                        alignItems: z.c.Center
                    }, y.createElement(z._1, {
                        width: 70,
                        height: 30
                    })) : y.createElement(z.U, {
                        className: "selectable-filter",
                        margin: {
                            left: 1
                        }
                    }, y.createElement(W.a, {
                        onToggle: this.onToggle,
                        ref: this.setToggleRef
                    }, y.createElement(z.u, f.__assign({
                        dropdown: !0,
                        type: z.z.Hollow
                    }, Object(z._39)(this.props)), y.createElement(z.U, {
                        display: z.H.Flex
                    }, this.props.title)), y.createElement(z.p, {
                        direction: z.q.BottomLeft,
                        noTail: !0
                    }, y.createElement(z.U, {
                        className: "selectable-filter__balloon",
                        padding: {
                            y: .5
                        }
                    }, y.createElement(z._17, {
                        padding: 1,
                        borderBottom: !0
                    }, y.createElement(z._11, {
                        refDelegate: this.setSearchRef,
                        onChange: this.onChangeSearchTerm,
                        placeholder: this.props.searchPlaceholder
                    })), this.renderSelected(), y.createElement(H.b, {
                        className: "selectable-filter__scroll-container"
                    }, y.createElement(z.U, null, this.renderSections()))))))
                }, t
            }(y.Component)),
            $ = q,
            Q = (n(1869), function(e) {
                return y.createElement(z.S, f.__assign({
                    onClick: e.onClick,
                    key: e.key,
                    disabled: e.disabled
                }, Object(z._39)(e)), y.createElement(z.U, {
                    className: "selectable-filter-item",
                    display: z.H.Flex,
                    flexDirection: z.J.Row,
                    alignItems: z.c.Center,
                    margin: {
                        y: .5,
                        x: 1
                    },
                    flexWrap: z.K.NoWrap
                }, e.spriteWidth && y.createElement(z.U, {
                    className: "selectable-filter-item__avatar-container",
                    flexShrink: 0
                }, y.createElement("div", {
                    className: "selectable-filter-item__avatar",
                    style: {
                        backgroundImage: "url(" + e.spriteAsset + ")",
                        backgroundPositionX: e.spriteOffsetX ? -1 * e.spriteOffsetX : 0,
                        backgroundPositionY: e.spriteOffsetY ? -1 * e.spriteOffsetY : 0,
                        width: e.spriteWidth ? e.spriteWidth + "px" : "3rem",
                        height: e.spriteWidth ? e.spriteHeight + "px" : "3rem",
                        zoom: e.spriteWidth > 0 ? 30 / e.spriteWidth : 1,
                        border: "none"
                    }
                })), y.createElement(z.P, {
                    margin: {
                        left: 1
                    },
                    flexGrow: 1,
                    ellipsis: !0
                }, y.createElement(z._21, {
                    fontSize: z.L.Size5
                }, e.name)), e.withClose && y.createElement(z._8, {
                    asset: z._9.Close
                })))
            }),
            Y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.getSections = function() {
                        var e = [];
                        if (t.state.content) {
                            var n = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                a = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null;
                            t.state.content.forEach(function(i) {
                                Object.keys(i).forEach(function(r) {
                                    var o = [];
                                    i[r].forEach(function(e) {
                                        t.state.selected && t.state.selected.name === e.name || n && !e.name.match(n) && a && !e.name.match(a) || o.push(t.renderMap(e, function() {
                                            return t.onSelect(e)
                                        }))
                                    }), o.length && e.push({
                                        title: r,
                                        items: o
                                    })
                                })
                            })
                        }
                        return e
                    }, t.getSelected = function() {
                        if (t.state.selected) {
                            var e = function() {
                                return t.setState({
                                    selected: void 0,
                                    searchTerm: void 0
                                }, function() {
                                    t.searchRef && (t.searchRef.value = ""), t.props.onSelect()
                                })
                            };
                            return t.renderMap(t.state.selected, e, !0)
                        }
                    }, t.loadData = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            return f.__generator(this, function(e) {
                                return this.state.isLoading || this.state.isError || this.state.content ? [2] : (this.setState({
                                    content: G
                                }), [2])
                            })
                        })
                    }, t.onSearch = function(e) {
                        return t.setState({
                            searchTerm: e
                        })
                    }, t.onSelect = function(e) {
                        t.setState({
                            selected: e,
                            searchTerm: void 0
                        }, function() {
                            t.searchRef && (t.searchRef.value = ""), t.props.onSelect(e.name)
                        })
                    }, t.renderMap = function(e, t, n) {
                        return void 0 === n && (n = !1), y.createElement(Q, {
                            key: e.name,
                            "data-a-name": e.name,
                            name: e.display_name,
                            onClick: t,
                            withClose: n
                        })
                    }, t.setSearchRef = function(e) {
                        return t.searchRef = e
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return y.createElement($, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(N.d)("Search by Map", "CSGOMapFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(N.d)("Selected Map", "CSGOMapFilter"),
                        title: this.state.selected ? this.state.selected.display_name : Object(N.d)("Map", "CSGOMapFilter"),
                        "data-test-selector": "csgo-filter-selector"
                    })
                }, t
            }(y.Component),
            J = Y,
            X = Object(k.a)(a)(J),
            K = n(376),
            Z = n(4),
            ee = function() {
                var e = function() {
                    return y.createElement(z.U, {
                        className: "featured-events-layout__column",
                        margin: {
                            bottom: 3
                        }
                    }, y.createElement(z.U, {
                        margin: {
                            bottom: 1
                        }
                    }, y.createElement(z._1, {
                        height: 60
                    })), y.createElement(z._21, null, y.createElement(z._1, {
                        width: 130
                    })), y.createElement(z._21, null, y.createElement(z._1, {
                        width: 105
                    })))
                };
                return y.createElement(z.U, {
                    fullWidth: !0
                }, y.createElement(z.U, {
                    margin: {
                        bottom: 2
                    }
                }, y.createElement(z._21, null, y.createElement(z._1, {
                    width: 150
                }))), [1, 2, 3].map(function(t) {
                    return y.createElement(e, {
                        key: t
                    })
                }))
            },
            te = (n(1870), function(e) {
                var t = {
                    backgroundImage: "url(" + e.imageURL + ")"
                };
                return y.createElement(z._17, {
                    className: "event",
                    margin: {
                        bottom: 1
                    },
                    border: !0
                }, y.createElement("div", {
                    className: "event__header",
                    style: t
                }, y.createElement("div", {
                    className: "event__header-overlay"
                }, y.createElement(z._21, {
                    type: z._26.H5,
                    bold: !0
                }, e.title))), e.children)
            }),
            ne = Object(x.c)("EventCard", {
                autoReportInteractive: !0
            })(te),
            ae = function(e) {
                var t = e.events.map(function(e, t) {
                    if (!e.owner) return null;
                    var n = e.owner.stream;
                    if (!n) return null;
                    var a = {
                        pathname: "/" + e.owner.login,
                        state: {
                            medium: I.PageviewMedium.Game,
                            content: I.PageviewContent.EventLive,
                            content_index: t
                        }
                    };
                    return y.createElement(ne, {
                        key: e.id,
                        title: e.title,
                        imageURL: e.coverImageURL,
                        eventIDs: [e.id]
                    }, y.createElement(z.U, {
                        padding: 1,
                        alignItems: z.c.Baseline,
                        display: z.H.Flex,
                        justifyContent: z.T.Between
                    }, y.createElement(z._21, {
                        type: z._26.P
                    }, Object(N.d)("{viewerCount, number} viewers", {
                        viewerCount: n.viewersCount
                    }, "Events"), " - ", e.owner.displayName), y.createElement(z.u, {
                        linkTo: a
                    }, Object(N.d)("Watch Now", "Events"))))
                });
                return y.createElement(z.U, null, t)
            },
            ie = Object(x.c)("LiveEvents", {
                autoReportInteractive: !0
            })(ae),
            re = n(378),
            oe = function(e) {
                var t = e.events.map(function(e, t) {
                    if (0 === e.videos.length) return null;
                    var n = e.videos.map(function(n, a) {
                        var i = Object(re.a)(n.lengthSeconds || 0),
                            r = a === e.videos.length - 1 ? "event__video-last" : "",
                            o = {
                                pathname: "/videos/" + n.id,
                                state: {
                                    medium: I.PageviewMedium.Game,
                                    content: I.PageviewContent.EventPast,
                                    content_index: t
                                }
                            };
                        return y.createElement(z.S, {
                            key: n.id,
                            linkTo: o,
                            alpha: !0
                        }, y.createElement(z.U, {
                            className: "event__video " + r,
                            padding: 1
                        }, y.createElement(z.U, {
                            className: "event__video-card"
                        }, y.createElement(z.A, {
                            row: !0
                        }, y.createElement(z.C, {
                            imageSrc: n.thumbnailURL,
                            imageAlt: n.title,
                            size: z.D.Size6
                        }), y.createElement(z.B, null, y.createElement(z.U, {
                            padding: {
                                left: 1
                            }
                        }, y.createElement(z._21, {
                            type: z._26.H6
                        }, n.title), y.createElement(z.U, {
                            className: "event__broadcast-details"
                        }, y.createElement(z._21, {
                            type: z._26.P
                        }, Object(N.d)("{viewCount, number} views", {
                            viewCount: n.viewCount
                        }, "Events"), " · ", i))))))))
                    });
                    return y.createElement(ne, {
                        key: e.id,
                        title: e.title,
                        imageURL: e.imageURL,
                        eventIDs: [e.id]
                    }, n)
                });
                return y.createElement(z.U, null, t)
            },
            le = Object(x.c)("PastEvents", {
                autoReportInteractive: !0
            })(oe),
            se = n(17),
            de = n(1871),
            ce = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.unfollowEvent = function(e) {
                        e && (e.stopPropagation(), e.preventDefault()), t.props.updateEventBroadcastNotifications(Object(T.a)({
                            eventID: t.props.eventID,
                            emailEnabled: !1
                        })), N.n.tracking.track(I.SpadeEventType.EventFollowing, {
                            action: "email_reminder_off",
                            event_id: t.props.eventID,
                            location: "directory"
                        })
                    }, t.followEvent = function(e) {
                        e && (e.stopPropagation(), e.preventDefault()), t.props.updateEventBroadcastNotifications(Object(T.a)({
                            eventID: t.props.eventID,
                            emailEnabled: !0
                        })), N.n.tracking.track(I.SpadeEventType.EventFollowing, {
                            action: "email_reminder_on",
                            event_id: t.props.eventID,
                            location: "directory"
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.isLoggedIn) return null;
                    var e = z._9.Heart,
                        t = this.followEvent,
                        n = Object(N.d)("Remind Me", "Events");
                    return this.props.areNotificationsEnabled && (e = z._9.FollowCheck, t = this.unfollowEvent, n = Object(N.d)("Reminder Set", "Events")), y.createElement(z._30, {
                        label: n,
                        align: z._31.Right
                    }, y.createElement(z.v, {
                        size: z.x.Default,
                        icon: e,
                        onClick: t,
                        ariaLabel: n
                    }))
                }, t = f.__decorate([Object(D.a)(de, {
                    name: "updateEventBroadcastNotifications"
                }), Object(x.c)("NotifyMeComponent")], t)
            }(y.Component),
            ue = ce,
            me = Object(k.a)(i)(ue),
            pe = function(e) {
                var t = 0,
                    n = e.events.map(function(e) {
                        var n = e.broadcasts.map(function(n, a) {
                                return y.createElement(z.S, {
                                    key: n.id,
                                    linkTo: r("https://twitch.tv/events/" + n.id, I.PageviewContent.EventUpcoming, t++),
                                    alpha: !0
                                }, y.createElement(z.U, {
                                    className: "event__broadcast-wrapper"
                                }, y.createElement(z.U, {
                                    className: Z("event__broadcast", {
                                        "event__broadcast-last": a === e.broadcasts.length - 1
                                    }),
                                    padding: {
                                        y: .5,
                                        left: 2,
                                        right: 1
                                    },
                                    margin: {
                                        left: 2
                                    },
                                    display: z.H.Flex,
                                    flexWrap: z.K.NoWrap,
                                    justifyContent: z.T.Between
                                }, y.createElement(z.U, {
                                    display: z.H.Flex,
                                    flexShrink: 1
                                }, y.createElement(z.U, {
                                    className: "event__broadcast-header",
                                    fullWidth: !0
                                }, y.createElement(z._21, {
                                    bold: !0
                                }, Object(N.c)(n.startAt, "medium"), n.title && " - ", n.title)), y.createElement(z.U, {
                                    className: "event__broadcast-details"
                                }, Object(N.d)("{start,time,short} - {end,time,short}", {
                                    start: n.startAt,
                                    end: n.endAt
                                }, "UpcomingEvents"))), y.createElement(z.U, {
                                    display: z.H.Flex,
                                    flexShrink: 0,
                                    margin: {
                                        left: 1
                                    },
                                    alignSelf: z.d.Center
                                }, y.createElement(me, {
                                    eventID: n.id,
                                    areNotificationsEnabled: n.notificationsEnabled
                                })))))
                            }),
                            a = e.broadcasts.map(function(e) {
                                return e.id
                            });
                        return y.createElement(ne, {
                            key: a.join(""),
                            imageURL: e.imageURL,
                            title: e.title,
                            eventIDs: a
                        }, n)
                    });
                return y.createElement(z.U, null, n)
            },
            ge = Object(x.c)("UpcomingEvents", {
                autoReportInteractive: !0
            })(pe),
            he = [" | ", " - "],
            ve = n(1872),
            fe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.tracked = !1, t
                }
                return f.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    if (this.props.data.loading) return y.createElement(ee, null);
                    if (this.props.data.error || null === this.props.data.game) return y.createElement(z._17, {
                        color: z.F.Alt2,
                        display: z.H.Flex,
                        justifyContent: z.T.Center,
                        alignItems: z.c.Center,
                        fullWidth: !0
                    }, y.createElement(z._8, {
                        asset: z._9.DeadGlitch,
                        width: 46,
                        height: 48
                    }));
                    var e = !1,
                        t = null,
                        n = this.props.data.game.featuredEventBroadcasts.live.filter(this.isNotNull);
                    0 !== n.length && (e = !0, t = y.createElement(z.U, {
                        margin: {
                            bottom: 3
                        }
                    }, y.createElement(z.U, {
                        margin: {
                            bottom: 1
                        }
                    }, y.createElement(z._21, {
                        type: z._26.H4
                    }, Object(N.d)("Live Events", "Events"))), y.createElement(z.U, null, y.createElement(ie, {
                        events: n
                    }))));
                    var a = null,
                        i = this.props.data.game.featuredEventBroadcasts.future.filter(this.isNotNull),
                        r = this.convertUpcomingEvents(i);
                    0 !== r.length && (e = !0, a = y.createElement(z.U, {
                        margin: {
                            bottom: 3
                        }
                    }, y.createElement(z.U, {
                        margin: {
                            bottom: 1
                        }
                    }, y.createElement(z._21, {
                        type: z._26.H4
                    }, Object(N.d)("Upcoming Events", "Events"))), y.createElement(z.U, null, y.createElement(ge, {
                        events: r
                    }))));
                    var o = null,
                        l = this.props.data.game.featuredEventBroadcasts.past.filter(this.isNotNull),
                        s = this.convertPastEvents(l);
                    return 0 !== s.length && (e = !0, o = y.createElement(z.U, {
                        margin: {
                            bottom: 3
                        }
                    }, y.createElement(z.U, {
                        margin: {
                            bottom: 1
                        }
                    }, y.createElement(z._21, {
                        type: z._26.H4
                    }, Object(N.d)("Recent Events", "Events"))), y.createElement(z.U, null, y.createElement(le, {
                        events: s
                    })))), y.createElement(z.U, {
                        className: Z({
                            "featured-events-layout__column": e
                        })
                    }, t, a, o)
                }, t.prototype.trackPresentation = function(e, t, n) {
                    var a = e.map(function(e) {
                            return e.id
                        }),
                        i = [];
                    t.forEach(function(e) {
                        var t = e.broadcasts.map(function(e) {
                            return e.id
                        });
                        i.push.apply(i, t)
                    });
                    var r = n.map(function(e) {
                        return e.id
                    });
                    N.n.tracking.track(I.SpadeEventType.FeaturedEventPresentation, {
                        game: this.props.data.game ? this.props.data.game.name : "unknown game",
                        live_events: JSON.stringify(a),
                        upcoming_events: JSON.stringify(i),
                        past_events: JSON.stringify(r)
                    })
                }, t.prototype.convertUpcomingEvents = function(e) {
                    var t = new Map;
                    e.forEach(function(e) {
                        var n = e.owner;
                        if (null !== n) {
                            var a = t.get(n.id) || [];
                            a.push(e), t.set(n.id, a)
                        }
                    });
                    var n = [];
                    return t.forEach(function(e) {
                        var t = new Map;
                        e.forEach(function(e) {
                            var n = o(e.title),
                                a = t.get(n.prefix) || [];
                            a.push(e), t.has(n.prefix) || t.set(n.prefix, a)
                        }), t.forEach(function(e, t) {
                            n.push({
                                title: t,
                                imageURL: e[0].coverImageURL,
                                broadcasts: e.map(function(e) {
                                    return {
                                        id: e.id,
                                        title: o(e.title).postfix,
                                        startAt: new Date(e.startAt),
                                        endAt: new Date(e.endAt),
                                        notificationsEnabled: !!e.self && e.self.emailEnabled
                                    }
                                }),
                                broadcaster: e[0].owner
                            })
                        })
                    }), n
                }, t.prototype.convertPastEvents = function(e) {
                    return e.map(function(e) {
                        var t = [];
                        e.highlights && e.highlights.edges.length > 0 ? t = e.highlights.edges : e.vods && e.vods.edges.length > 0 && (t = e.vods.edges);
                        var n = l(t.map(function(e) {
                            return e.node.title
                        }));
                        return {
                            id: e.id,
                            title: e.title,
                            imageURL: e.coverImageURL,
                            videos: t.map(function(e, t) {
                                return {
                                    id: e.node.id,
                                    title: n[t].identifier,
                                    thumbnailURL: e.node.thumbnailURLs[0],
                                    viewCount: e.node.viewCount,
                                    lengthSeconds: e.node.lengthSeconds
                                }
                            })
                        }
                    })
                }, t.prototype.isNotNull = function(e) {
                    return null !== e
                }, t.prototype.onRender = function() {
                    if (!this.props.data.loading && !this.tracked && !this.props.data.error && this.props.data.game) {
                        var e = this.props.data.game.featuredEventBroadcasts;
                        this.trackPresentation(e.live.filter(this.isNotNull), this.convertUpcomingEvents(e.future.filter(this.isNotNull)), this.convertPastEvents(e.past.filter(this.isNotNull))), this.tracked = !0
                    }
                }, t = f.__decorate([Object(D.a)(ve, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.gameName
                            }
                        }
                    }
                })], t)
            }(y.Component),
            ye = fe,
            ke = n(1038),
            be = (n(1873), "directory-container"),
            Se = "direectory-grid-grid-layout",
            _e = "directory-grid-sidebar-layout",
            Ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderAdLessGrid = function() {
                        return t.renderGrid(!1)
                    }, t.renderGrid = function(e) {
                        void 0 === e && (e = !0);
                        var n = null;
                        return e && (n = y.createElement(L.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: R.d.directory,
                            slotID: R.b.directory.rectangle,
                            adSize: R.c.directory.rectangle,
                            targeting: {
                                pagetype: R.a.games,
                                game: t.props.directoryName
                            },
                            key: -1,
                            autoEnable: !1
                        })), y.createElement(z.U, {
                            flexShrink: 0,
                            "data-target": be,
                            "data-test-selector": Se
                        }, y.createElement(z._33, {
                            gutterSize: z._35.Small,
                            childWidth: z._34.Large,
                            placeholderItems: 20
                        }, n, t.props.children), y.createElement(H.a, {
                            enabled: t.props.canLoadMore,
                            loadMore: t.props.loadMore,
                            pixelThreshold: 200
                        }))
                    }, t.renderSidebar = function() {
                        return y.createElement(z.U, {
                            display: z.H.Flex,
                            flexWrap: z.K.NoWrap,
                            "data-test-selector": _e
                        }, y.createElement(z.U, {
                            flexGrow: 1,
                            display: z.H.Flex
                        }, y.createElement(z.U, {
                            flexShrink: 0
                        }, y.createElement(z._33, {
                            gutterSize: z._35.Small,
                            childWidth: z._34.Medium,
                            placeholderItems: 20
                        }, t.props.children), y.createElement(H.a, {
                            enabled: t.props.canLoadMore,
                            loadMore: t.props.loadMore,
                            pixelThreshold: 200
                        }))), y.createElement(z.U, {
                            display: z.H.Flex,
                            flexGrow: 0,
                            flexShrink: 0,
                            margin: {
                                left: 3
                            }
                        }, y.createElement(z.U, {
                            display: z.H.Flex,
                            flexDirection: z.J.Column
                        }, y.createElement(L.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 0,
                                width: 320,
                                height: 250
                            },
                            adUnit: R.d.directory,
                            slotID: R.b.directory.rectangle,
                            adSize: R.c.directory.rectangle,
                            targeting: {
                                pagetype: R.a.games,
                                game: t.props.directoryName
                            },
                            key: -1,
                            autoEnable: !1
                        }), t.props.firstPageLoaded ? y.createElement(ye, {
                            gameName: t.props.communityName
                        }) : y.createElement(ee, null))))
                    }, t.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + be + '"]'),
                            t = document.querySelector('[data-target="' + ke.a + '"]'),
                            n = document.querySelector("#" + R.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.updateDisplayAdOrder), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.sideNavExpanded !== e.sideNavExpanded && this.updateDisplayAdOrder()
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.updateDisplayAdOrder)
                }, t.prototype.render = function() {
                    if (this.isEventApprovedDirectory(this.props.communityName)) {
                        var e = {
                                shown: this.renderSidebar,
                                hidden: this.renderGrid,
                                fallback: this.renderGrid
                            },
                            t = this.renderAdLessGrid;
                        return y.createElement(K.a, {
                            name: "TWILIGHT_EVENT_GAME_DIRECTORY",
                            assignments: e,
                            loader: t
                        })
                    }
                    return this.renderGrid()
                }, t.prototype.isEventApprovedDirectory = function(e) {
                    return N.n.dynamicSettings.get("event_directory_enabled_games", []).includes(e.toLowerCase())
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                }, t
            }(y.Component),
            Ee = Object(x.c)("DirectoryGrid")(Ne),
            Ce = Object(k.a)(s)(Ee),
            we = n(908),
            De = n(49),
            Fe = n(374),
            Te = n(1062),
            Oe = n(1048),
            Ue = n(1874),
            Ie = n(1280),
            Le = n(932),
            Re = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading && !this.props.data.directory || this.props.data.error || !this.props.data.directory) return null;
                    var t, n = Object(N.d)("Channels in English", "DirectoryInternationalSection"),
                        a = this.props.data.directory.streams.edges || [],
                        i = this.props.directoryWidth;
                    if (i && i > 0) {
                        var r = Object(Oe.a)(i, 240, 2);
                        r < a.length && (a = a.slice(0, r - 1), t = y.createElement(Te.a, {
                            subHeader: n,
                            linkTo: {
                                pathname: this.getViewAllPath(),
                                state: {
                                    medium: "GAME" === this.props.type ? I.PageviewMedium.Game : I.PageviewMedium.Community,
                                    content: I.PageviewContent.Game
                                }
                            }
                        }))
                    }
                    var o = "COMMUNITY" === this.props.type ? I.PageviewMedium.Community : I.PageviewMedium.Game,
                        l = Object(N.d)("Untitled Broadcast", "DirectoryInternationalSection"),
                        s = a.filter(function(e) {
                            var t = e.node;
                            return t.broadcaster && t.broadcaster.login
                        }).map(function(t, n) {
                            var a = t.node;
                            return a.broadcaster ? "COMMUNITY" === e.props.type && a.game ? y.createElement(z.U, {
                                key: a.id,
                                margin: {
                                    bottom: 2
                                }
                            }, y.createElement(we.a, {
                                imageSrc: a.previewImageURL || N.a.defaultStreamPreviewURL,
                                imageAlt: a.broadcaster.login + " cover image",
                                viewerCount: a.viewersCount || 0,
                                title: a.title || l,
                                channelName: Object(De.a)(a.broadcaster.login, a.broadcaster.displayName, !0),
                                gameImageSrc: a.game.boxArtURL || N.a.defaultBoxArtURL,
                                gameTitle: a.game.name,
                                gameLinkTo: {
                                    pathname: Object(Fe.d)(a.game.name),
                                    state: {
                                        medium: I.PageviewMedium.Community,
                                        content: I.PageviewContent.Live,
                                        content_index: n
                                    }
                                },
                                linkTo: {
                                    pathname: "/" + a.broadcaster.login,
                                    state: {
                                        medium: I.PageviewMedium.Community,
                                        content: I.PageviewContent.Live,
                                        content_index: n
                                    }
                                },
                                channelNameLinkTo: {
                                    pathname: "/" + a.broadcaster.login + "/videos",
                                    state: {
                                        medium: o,
                                        content: I.PageviewContent.Live,
                                        content_index: n
                                    }
                                }
                            })) : y.createElement(z.U, {
                                key: a.id,
                                margin: {
                                    bottom: 2
                                }
                            }, y.createElement(z._27, {
                                linkTo: {
                                    pathname: "/" + a.broadcaster.login,
                                    state: {
                                        content: I.PageviewContent.Live,
                                        content_index: n,
                                        medium: o
                                    }
                                },
                                title: a.title || l,
                                imageAlt: a.broadcaster.login + " cover image",
                                imageSrc: a.previewImageURL,
                                info: Object(Le.b)(a.viewersCount, Object(De.a)(a.broadcaster.login, a.broadcaster.displayName, !0)),
                                "data-a-target": "card-" + n,
                                "data-a-id": "card-" + (a.broadcaster.login || "").replace(/ /g, "")
                            })) : null
                        });
                    return y.createElement("div", null, y.createElement(Ie.a, null), y.createElement(z._33, {
                        gutterSize: z._35.Small,
                        childWidth: z._34.Medium,
                        placeholderItems: 20
                    }, s, t))
                }, t.prototype.getViewAllPath = function() {
                    return "COMMUNITY" === this.props.type ? Object(Fe.a)(this.props.name) + "/" + this.props.languageCode : Object(Fe.d)(this.props.name) + "/" + this.props.languageCode
                }, t = f.__decorate([Object(D.a)(Ue, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.name),
                                limit: 30,
                                languages: [e.languageCode],
                                type: e.type
                            }
                        }
                    }
                }), Object(x.c)("DirectoryInternationalSection", {
                    autoReportInteractive: !0
                })], t)
            }(y.Component),
            Ae = Re,
            je = n(1875),
            xe = n.n(je),
            Pe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = N.n.logger.withCategory("hearthstone-class-filter"), t.getItems = function() {
                        var e = [];
                        if (t.state.content) {
                            var n = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                a = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null;
                            t.state.content.forEach(function(i) {
                                Object.keys(i).forEach(function(r) {
                                    i[r].forEach(function(i) {
                                        t.state.selected && t.state.selected.name === i.name || n && !i.name.match(n) && a && !i.name.match(a) || e.push(t.renderCharacter(i, function() {
                                            return t.onSelect(i)
                                        }))
                                    })
                                })
                            })
                        }
                        return e
                    }, t.getSelected = function() {
                        if (t.state.selected) {
                            var e = function() {
                                return t.setState({
                                    selected: void 0,
                                    searchTerm: void 0
                                }, function() {
                                    t.searchRef && (t.searchRef.value = ""), t.props.onSelect()
                                })
                            };
                            return t.renderCharacter(t.state.selected, e, !0)
                        }
                    }, t.loadData = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return f.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, n.e(72).then(n.bind(null, 2060))];
                                    case 2:
                                        return e = a.sent(), this.setState({
                                            content: e,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return t = a.sent(), this.logger.error(t, "Failed to load Hearthstone class data"), this.setState({
                                            isError: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onSearch = function(e) {
                        return t.setState({
                            searchTerm: e
                        })
                    }, t.onSelect = function(e) {
                        t.setState({
                            selected: e,
                            searchTerm: void 0
                        }, function() {
                            t.searchRef && (t.searchRef.value = ""), t.props.onSelect(e.class)
                        })
                    }, t.renderCharacter = function(e, t, n) {
                        return void 0 === n && (n = !1), y.createElement(Q, {
                            key: e.name,
                            name: e.class,
                            onClick: t,
                            spriteAsset: xe.a,
                            spriteOffsetX: e.sprite_x_offset,
                            spriteOffsetY: e.sprite_y_offset,
                            spriteWidth: e.image_width,
                            spriteHeight: e.image_height,
                            withClose: n
                        })
                    }, t.setSearchRef = function(e) {
                        return t.searchRef = e
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    var e = Object(N.d)("Class", "HearthstoneClassFilter");
                    return y.createElement($, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(N.d)("Search by Class", "HearthstoneClassFilter"),
                        selected: this.getSelected(),
                        sections: [{
                            title: e,
                            items: this.getItems()
                        }],
                        selectedTitle: Object(N.d)("Selected Class", "HearthstoneClassFilter"),
                        title: this.state.selected ? this.state.selected.class : e
                    })
                }, t
            }(y.Component),
            Me = Pe,
            Ve = Object(k.a)(d)(Me),
            Be = n(1876),
            Ge = n.n(Be),
            He = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = N.n.logger.withCategory("hearthstone-mode-filter"), t.getSections = function() {
                        var e = [];
                        if (t.state.content) {
                            var n = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                a = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null;
                            t.state.content.forEach(function(i) {
                                Object.keys(i).forEach(function(r) {
                                    var o = [];
                                    i[r].forEach(function(e) {
                                        t.state.selected && t.state.selected.name === e.name || n && !e.name.match(n) && a && !e.name.match(a) || o.push(t.renderCharacter(e, function() {
                                            return t.onSelect(e)
                                        }))
                                    }), o.length && e.push({
                                        title: r,
                                        items: o
                                    })
                                })
                            })
                        }
                        return e
                    }, t.getSelected = function() {
                        if (t.state.selected) {
                            var e = function() {
                                return t.setState({
                                    selected: void 0,
                                    searchTerm: void 0
                                }, function() {
                                    t.searchRef && (t.searchRef.value = ""), t.props.onSelect()
                                })
                            };
                            return t.renderCharacter(t.state.selected, e, !0)
                        }
                    }, t.loadData = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return f.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, n.e(71).then(n.bind(null, 2061))];
                                    case 2:
                                        return e = a.sent(), this.setState({
                                            content: e,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return t = a.sent(), this.logger.error(t, "Failed to load Hearthstone mode data"), this.setState({
                                            isError: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onSearch = function(e) {
                        return t.setState({
                            searchTerm: e
                        })
                    }, t.onSelect = function(e) {
                        t.setState({
                            selected: e,
                            searchTerm: void 0
                        }, function() {
                            t.searchRef && (t.searchRef.value = ""), t.props.onSelect(e.name)
                        })
                    }, t.renderCharacter = function(e, t, n) {
                        return void 0 === n && (n = !1), y.createElement(Q, {
                            key: e.name,
                            name: e.display_name,
                            onClick: t,
                            spriteAsset: Ge.a,
                            spriteOffsetX: e.sprite_x_offset,
                            spriteOffsetY: e.sprite_y_offset,
                            spriteWidth: e.image_height,
                            spriteHeight: e.image_height,
                            withClose: n
                        })
                    }, t.setSearchRef = function(e) {
                        return t.searchRef = e
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return y.createElement($, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(N.d)("Search by Mode", "HearthstoneModeFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(N.d)("Selected Mode", "HearthstoneModeFilter"),
                        title: this.state.selected ? this.state.selected.display_name : Object(N.d)("Mode", "HearthstoneModeFilter")
                    })
                }, t
            }(y.Component),
            We = He,
            ze = Object(k.a)(c)(We),
            qe = n(20),
            $e = n(810),
            Qe = "en_US",
            Ye = {
                en: "en_US",
                de: "de_DE",
                es: "es_ES",
                "es-mx": "es_ES",
                fr: "fr_FR",
                it: "it_IT",
                hu: "hu_HU",
                pl: "pl_PL",
                pt: "pt_BR",
                "pt-br": "pt_BR",
                vi: "vn_VN",
                tr: "tr_TR",
                ro: "ro_RO",
                cs: "cs_CZ",
                el: "el_GR",
                ru: "ru_RU",
                th: "th_TH",
                "zh-cn": "zh_CN",
                "zh-tw": "zh_TW",
                ja: "ja_JP",
                ko: "ko_KR"
            },
            Je = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = N.n.logger.withCategory("league-filter"), t.getSections = function() {
                        var e = [],
                            n = [];
                        if (t.state.content) {
                            var a = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                i = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null;
                            Object.keys(t.state.content.data).forEach(function(r) {
                                if (t.state.content) {
                                    var o = t.state.content.data[r];
                                    if (t.state.selected && t.state.selected.name === o.name) return;
                                    if (a && !o.name.match(a) && i && !o.name.match(i)) return;
                                    var l = t.renderCharacter(o, function() {
                                        return t.onSelect(o)
                                    });
                                    o.channels > 0 ? e.push(l) : n.push(l)
                                }
                            })
                        }
                        var r = [];
                        return e.length > 0 && r.push({
                            title: Object(N.d)("Champions Online", "LeagueFilter"),
                            items: e
                        }), n.length > 0 && r.push({
                            title: Object(N.d)("Champions Offline", "LeagueFilter"),
                            items: n
                        }), r
                    }, t.getSelected = function() {
                        if (t.state.selected) {
                            var e = function() {
                                t.setState({
                                    selected: void 0,
                                    searchTerm: void 0
                                }, function() {
                                    t.searchRef && (t.searchRef.value = ""), t.props.onSelect()
                                })
                            };
                            return t.renderCharacter(t.state.selected, e, !0)
                        }
                    }, t.loadData = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, a, i, r;
                            return f.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), e = N.n.intl.getLanguageCode(), t = e ? Ye[e] || Qe : Qe, n = $e.a.getAPIURL("/api/lol/champions?" + qe.stringify({
                                            locale: t,
                                            on_site: 1
                                        })).toString(), a = this.setState, i = {}, [4, $e.a.get(n)];
                                    case 2:
                                        return a.apply(this, [(i.content = o.sent().body, i.isLoading = !1, i)]), [3, 4];
                                    case 3:
                                        return r = o.sent(), this.logger.error(r, "Failed to load LoL champion data"), this.setState({
                                            isError: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onSearch = function(e) {
                        return t.setState({
                            searchTerm: e
                        })
                    }, t.onSelect = function(e) {
                        t.setState({
                            selected: e,
                            searchTerm: void 0
                        }, function() {
                            t.searchRef && (t.searchRef.value = ""), t.props.onSelect(e.id)
                        })
                    }, t.renderCharacter = function(e, n, a) {
                        void 0 === a && (a = !1);
                        var i = "https://ddragon.leagueoflegends.com/cdn/" + t.state.content.version + "/img/sprite/" + e.image.sprite,
                            r = e.name.replace(/[.']/g, "").replace(/ /g, "").toLowerCase();
                        return y.createElement(Q, {
                            disabled: 0 === e.channels,
                            key: e.id,
                            name: e.name,
                            onClick: n,
                            spriteAsset: i,
                            spriteOffsetX: e.image.x,
                            spriteOffsetY: e.image.y,
                            spriteWidth: e.image.w,
                            spriteHeight: e.image.h,
                            withClose: a,
                            "data-a-target": "champion-filter-" + r
                        })
                    }, t.setSearchRef = function(e) {
                        return t.searchRef = e
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return y.createElement($, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(N.d)("Search by Champion", "LeagueFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(N.d)("Selected Champion", "LeagueFilter"),
                        title: this.state.selected ? this.state.selected.name : Object(N.d)("Champion", "LeagueFilter"),
                        "data-a-target": "league-champion-filter-dropdown"
                    })
                }, t
            }(y.Component),
            Xe = Je,
            Ke = Object(k.a)(u)(Xe),
            Ze = n(1877),
            et = n.n(Ze),
            tt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = N.n.logger.withCategory("overwatch-filter"), t.getSections = function() {
                        var e = [],
                            n = [],
                            a = [],
                            i = [];
                        if (t.state.content) {
                            var r = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                o = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null,
                                l = function(e, n) {
                                    t.state.selected && t.state.selected.character === e.character || r && !e.display_name.match(r) && o && !e.display_name.match(o) || n.push(t.renderCharacter(e, function() {
                                        return t.onSelectCharacter(e)
                                    }))
                                };
                            t.state.content[0].Offense.forEach(function(t) {
                                return l(t, e)
                            }), t.state.content[1].Defense.forEach(function(e) {
                                return l(e, n)
                            }), t.state.content[2].Tank.forEach(function(e) {
                                return l(e, a)
                            }), t.state.content[3].Support.forEach(function(e) {
                                return l(e, i)
                            })
                        }
                        var s = [];
                        return e.length > 0 && s.push({
                            title: Object(N.d)("Offense", "OverwatchFilter"),
                            items: e
                        }), n.length > 0 && s.push({
                            title: Object(N.d)("Defense", "OverwatchFilter"),
                            items: n
                        }), a.length > 0 && s.push({
                            title: Object(N.d)("Tank", "OverwatchFilter"),
                            items: a
                        }), i.length > 0 && s.push({
                            title: Object(N.d)("Support", "OverwatchFilter"),
                            items: i
                        }), s
                    }, t.getSelected = function() {
                        if (t.state.selected) {
                            var e = function() {
                                return t.setState({
                                    selected: void 0,
                                    searchTerm: void 0
                                }, function() {
                                    t.searchRef && (t.searchRef.value = ""), t.props.onSelect()
                                })
                            };
                            return t.renderCharacter(t.state.selected, e, !0)
                        }
                    }, t.loadData = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return f.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, n.e(70).then(n.bind(null, 2062))];
                                    case 2:
                                        return e = a.sent(), this.setState({
                                            content: e,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return t = a.sent(), this.logger.error(t, "Failed to load Overwatch character data"), this.setState({
                                            isError: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onSearch = function(e) {
                        return t.setState({
                            searchTerm: e
                        })
                    }, t.onSelectCharacter = function(e) {
                        t.setState({
                            selected: e,
                            searchTerm: void 0
                        }, function() {
                            t.searchRef && (t.searchRef.value = ""), t.props.onSelect(e.character)
                        })
                    }, t.renderCharacter = function(e, t, n) {
                        return void 0 === n && (n = !1), y.createElement(Q, {
                            key: e.character,
                            name: e.display_name,
                            onClick: t,
                            spriteAsset: et.a,
                            spriteOffsetX: e.sprite_x_offset,
                            spriteOffsetY: e.sprite_y_offset,
                            spriteWidth: e.image_width,
                            spriteHeight: e.image_height,
                            withClose: n
                        })
                    }, t.setSearchRef = function(e) {
                        return t.searchRef = e
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return y.createElement($, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(N.d)("Search by Hero", "OverwatchFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(N.d)("Selected Hero", "OverwatchFilter"),
                        title: this.state.selected ? this.state.selected.display_name : Object(N.d)("Hero", "OverwatchFilter")
                    })
                }, t
            }(y.Component),
            nt = tt,
            at = Object(k.a)(m)(nt),
            it = n(1878);
        ! function(e) {
            e.Hearthstone = "hearthstone", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
        }(v || (v = {}));
        var rt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.getAdditionalFilters = function() {
                        if (n.state.directoryType === V.a.Communities) return null;
                        switch (decodeURI(n.props.match.params.encodedCommunityName).toLowerCase()) {
                            case v.Hearthstone:
                                return [y.createElement(Ve, {
                                    onSelect: n.props.onSelectHearthstoneClass,
                                    key: "class"
                                }), y.createElement(ze, {
                                    onSelect: n.props.onSelectHearthstoneMode,
                                    key: "mode"
                                })];
                            case v.League:
                                return y.createElement(Ke, {
                                    onSelect: n.props.onSelectLeagueChampion
                                });
                            case v.Overwatch:
                                return y.createElement(at, {
                                    onSelect: n.props.onSelectOverwatchCharacter
                                });
                            case v.CSGO:
                                return y.createElement(X, {
                                    onSelect: n.props.onSelectCSGOMap,
                                    key: "map"
                                });
                            default:
                                return null
                        }
                    }, n.onResize = function(e) {
                        n.setState({
                            directoryWidth: e
                        })
                    }, n.onSlotAdded = function() {
                        n.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(R.b.directory).length && U.a.display(R.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, n.state = {
                        directoryType: Object(B.c)(t.match.path),
                        directoryWidth: -1,
                        numSlotsAdded: 0
                    }, n
                }
                return f.__extends(t, e), t.prototype.componentWillMount = function() {
                    R.g.addListener(R.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.match.path !== e.match.path && this.setState({
                        directoryType: Object(B.c)(e.match.path)
                    })
                }, t.prototype.componentWillUnmount = function() {
                    R.g.removeListener(R.e, this.onSlotAdded)
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading && !this.props.data.directory) return y.createElement(z.X, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return y.createElement(C.a, {
                        message: Object(N.d)("Error loading data.", "DirectoryGamePage")
                    });
                    if (!this.props.data.directory) return y.createElement(C.a, {
                        message: Object(N.d)("Game does not exist", "DirectoryGamePage")
                    });
                    var t = null,
                        n = null;
                    "en" !== this.props.languageCode && (n = y.createElement(z.U, {
                        margin: {
                            bottom: 2
                        }
                    }, y.createElement(z._21, {
                        type: z._26.H4,
                        color: z.F.Alt2,
                        fontSize: z.L.Size5,
                        transform: z._25.Uppercase,
                        "data-a-target": "international-section-header"
                    }, Object(N.d)("All Channels", "DirectoryInternationalSection"))), t = y.createElement(Ae, {
                        name: this.props.match.params.encodedCommunityName,
                        type: this.props.match.path.startsWith("/communities") ? "COMMUNITY" : "GAME",
                        directoryWidth: this.state.directoryWidth,
                        languageCode: this.props.languageCode
                    }));
                    var a, i = this.props.data.directory.streams.edges.filter(function(e) {
                        var t = e.node;
                        return t.broadcaster && t.broadcaster.login
                    }).map(function(t, n) {
                        var a = t.node;
                        return y.createElement(ke.b, {
                            directoryName: decodeURIComponent(e.props.match.params.encodedCommunityName),
                            directoryType: e.state.directoryType,
                            streamIndex: n,
                            streamNode: a,
                            key: a.id
                        })
                    });
                    if (i.length > 0) {
                        var r = !this.props.data.loading && !this.props.data.error && "" !== this.props.data.directory.id && !!this.props.data.directory.streams.pageInfo.hasNextPage;
                        a = y.createElement(Ce, {
                            directoryName: this.props.data.directory.displayName,
                            communityName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                            canLoadMore: r,
                            loadMore: this.props.loadMore
                        }, i)
                    } else {
                        var o = Object(N.d)("There are currently no channels streaming to this community", "DirectoryGamePage");
                        this.state.directoryType === V.a.Games && (o = Object(N.d)("No live channels for this game", "DirectoryGamePage")), a = y.createElement(z.U, {
                            display: z.H.Flex,
                            alignItems: z.c.Center,
                            justifyContent: z.T.Center,
                            fullWidth: !0,
                            padding: {
                                y: 3
                            }
                        }, y.createElement(z._21, {
                            color: z.F.Alt2,
                            fontSize: z.L.Size4,
                            italic: !0
                        }, o))
                    }
                    var l = !!this.props.data.directory.product;
                    return y.createElement(z.U, null, y.createElement(P.b, {
                        className: "directory-game-page"
                    }), y.createElement(A.a, {
                        directoryType: this.state.directoryType,
                        directoryName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                        activeTab: j.a.DirectoryPage,
                        showGameDetails: l
                    }), y.createElement(z.U, {
                        padding: {
                            top: 2,
                            bottom: 3,
                            x: 3
                        }
                    }, y.createElement(L.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: R.d.directory,
                        slotID: R.b.directory.banner,
                        adSize: R.c.directory.banner,
                        targeting: {
                            pagetype: R.a.games,
                            game: this.props.data.directory.displayName
                        },
                        autoEnable: !1
                    }), t, y.createElement(z.U, {
                        margin: {
                            bottom: 2
                        },
                        display: z.H.Flex,
                        flexDirection: z.J.Row
                    }, y.createElement(E.a, null), this.getAdditionalFilters()), n, a, y.createElement(w.a, {
                        onResize: this.onResize
                    })), this.props.firstPageLoaded && y.createElement(M.a, {
                        gameID: this.props.data.directory.id
                    }))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || (this.props.latencyTracking.reportInteractive(), this.props.data.directory && N.n.setPageTitle(this.props.data.directory.displayName))
                }, t = f.__decorate([Object(D.a)(it, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.match.params.encodedCommunityName),
                                limit: 30,
                                languages: e.languagePreferences,
                                type: e.match.path.startsWith("/communities") ? "COMMUNITY" : "GAME",
                                filters: {
                                    hearthstoneBroadcasterHeroName: "",
                                    hearthstoneBroadcasterHeroClass: e.hearthstoneClass || "",
                                    hearthstoneGameMode: e.hearthstoneMode || "",
                                    overwatchBroadcasterCharacter: e.overwatchCharacter || "",
                                    leagueOfLegendsChampionID: e.leagueChampion ? e.leagueChampion.toString() : "",
                                    counterStrikeMap: e.csgoMap || "",
                                    counterStrikeSkill: ""
                                }
                            }
                        }
                    },
                    props: function(e) {
                        return f.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: it,
                                    variables: f.__assign({}, e.data.variables, {
                                        cursor: e.data.directory.streams.edges[e.data.directory.streams.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            a = n;
                                        return {
                                            directory: f.__assign({}, a.directory, {
                                                streams: f.__assign({}, a.directory.streams, {
                                                    edges: Object(T.b)(e.directory.streams.edges, a.directory.streams.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(x.c)("DirectoryGamePage", {
                    destination: O.a.DirectoryGameIndex
                }), Object(F.a)({
                    location: I.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            game: e.data.directory ? e.data.directory.displayName : null
                        }
                    }
                })], t)
            }(y.Component),
            ot = rt,
            lt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.onSelectHearthstoneClass = function(e) {
                        return t.setState({
                            hearthstoneClass: e
                        })
                    }, t.onSelectHearthstoneMode = function(e) {
                        return t.setState({
                            hearthstoneMode: e
                        })
                    }, t.onSelectLeagueChampion = function(e) {
                        return t.setState({
                            leagueChampion: e
                        })
                    }, t.onSelectOverwatchCharacter = function(e) {
                        return t.setState({
                            overwatchCharacter: e
                        })
                    }, t.onSelectCSGOMap = function(e) {
                        return t.setState({
                            csgoMap: e
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    var e = ot;
                    return y.createElement(e, f.__assign({
                        hearthstoneClass: this.state.hearthstoneClass,
                        hearthstoneMode: this.state.hearthstoneMode,
                        leagueChampion: this.state.leagueChampion,
                        csgoMap: this.state.csgoMap,
                        onSelectHearthstoneClass: this.onSelectHearthstoneClass,
                        onSelectHearthstoneMode: this.onSelectHearthstoneMode,
                        onSelectLeagueChampion: this.onSelectLeagueChampion,
                        onSelectOverwatchCharacter: this.onSelectOverwatchCharacter,
                        onSelectCSGOMap: this.onSelectCSGOMap,
                        overwatchCharacter: this.state.overwatchCharacter
                    }, this.props))
                }, t
            }(y.Component),
            st = Object(k.a)(p, g)(lt),
            dt = n(1879),
            ct = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onSlotAdded = function() {
                        n.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(R.b.directory).length && U.a.display(R.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, n.state = {
                        directoryType: Object(B.c)(t.match.path),
                        numSlotsAdded: 0
                    }, n
                }
                return f.__extends(t, e), t.prototype.componentWillMount = function() {
                    R.g.addListener(R.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    R.g.removeListener(R.e, this.onSlotAdded)
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading && !this.props.data.directory) return y.createElement(z.X, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return y.createElement(C.a, {
                        message: Object(N.d)("Error loading data.", "DirectoryByLanguagePapge")
                    });
                    if (!this.props.data.directory) return y.createElement(C.a, {
                        message: Object(N.d)("Game does not exist", "DirectoryByLanguagePapge")
                    });
                    var t, n = this.props.data.directory.streams.edges.filter(function(e) {
                        var t = e.node;
                        return t.broadcaster && t.broadcaster.login
                    }).map(function(t, n) {
                        var a = t.node;
                        return y.createElement(ke.b, {
                            directoryName: decodeURIComponent(e.props.match.params.encodedCommunityName),
                            directoryType: e.state.directoryType,
                            streamIndex: n,
                            streamNode: a,
                            key: a.id
                        })
                    });
                    if (n.length > 0) {
                        var a = !this.props.data.loading && !this.props.data.error && "" !== this.props.data.directory.id && !!this.props.data.directory.streams.pageInfo.hasNextPage;
                        t = y.createElement(Ce, {
                            directoryName: this.props.data.directory.displayName,
                            communityName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                            canLoadMore: a,
                            loadMore: this.props.loadMore
                        }, n)
                    } else {
                        var i = Object(N.d)("There are currently no channels streaming to this community", "DirectoryByLanguagePapge");
                        this.state.directoryType === V.a.Games && (i = Object(N.d)("No live channels for this game", "DirectoryByLanguagePapge")), t = y.createElement(z.U, {
                            display: z.H.Flex,
                            alignItems: z.c.Center,
                            justifyContent: z.T.Center,
                            fullWidth: !0,
                            padding: {
                                y: 3
                            }
                        }, y.createElement(z._21, {
                            color: z.F.Alt2,
                            fontSize: z.L.Size4,
                            italic: !0
                        }, i))
                    }
                    var r = !!this.props.data.directory.product;
                    return y.createElement(H.b, {
                        className: "game",
                        "data-a-target": "game-scroller"
                    }, y.createElement(z.U, null, y.createElement(A.a, {
                        directoryType: this.state.directoryType,
                        directoryName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                        showGameDetails: r
                    }), y.createElement(z.U, {
                        padding: {
                            top: 2,
                            bottom: 3,
                            x: 3
                        }
                    }, y.createElement(L.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: R.d.directory,
                        slotID: R.b.directory.banner,
                        adSize: R.c.directory.banner,
                        targeting: {
                            pagetype: R.a.games,
                            game: this.props.data.directory.displayName
                        },
                        autoEnable: !1
                    }), y.createElement(Ie.a, null), t)))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || (this.props.latencyTracking.reportInteractive(), this.props.data.directory && N.n.setPageTitle(this.props.data.directory.displayName))
                }, t = f.__decorate([Object(D.a)(dt, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.match.params.encodedCommunityName),
                                limit: 30,
                                languages: [e.match.params.encodedLanguage],
                                type: e.match.path.startsWith("/communities") ? "COMMUNITY" : "GAME"
                            }
                        }
                    },
                    props: function(e) {
                        return f.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: dt,
                                    variables: f.__assign({}, e.data.variables, {
                                        cursor: e.data.directory.streams.edges[e.data.directory.streams.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            a = n;
                                        return {
                                            directory: f.__assign({}, a.directory, {
                                                streams: f.__assign({}, a.directory.streams, {
                                                    edges: Object(T.b)(e.directory.streams.edges, a.directory.streams.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(x.c)("DirectoryCommunityByLanguagePage", {
                    destination: O.a.DirectoryCommunityByLanguage
                }), Object(F.a)({
                    location: I.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            game: e.data.directory ? e.data.directory.displayName : null
                        }
                    }
                })], t)
            }(y.Component),
            ut = ct,
            mt = Object(k.a)(h)(ut);
        n.d(t, "DirectoryGamePage", function() {
            return st
        }), n.d(t, "DirectoryCommunityByLanguagePage", function() {
            return mt
        })
    },
    262: function(e, t, n) {
        "use strict";
        var a = n(0),
            i = n(20),
            r = n(1),
            o = n(2),
            l = n(16),
            s = "legacy_routes_enabled",
            d = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.isEnabled = !1, n.onHistoryChange = function(e, t) {
                        return n.isEnabled ? "REPLACE" === t ? void n.logger.debug("Skipping legacy route processing, due to history replace.") : e && e.pathname ? (n.logger.debug("Location changed", {
                            path: e.pathname
                        }), void n.legacyRoutes.forEach(function(t) {
                            try {
                                if (e.pathname.match(t)) {
                                    n.logger.debug("Found legacy route. Reloading...");
                                    var a = "" !== e.search ? i.parse(e.search) : {};
                                    a["from-redirect"] = "true";
                                    var r = i.stringify(a),
                                        s = o.a.buildType === l.a.Dev ? window.location.host : window.location.hostname,
                                        d = window.location.protocol + "//" + s + e.pathname + "?" + r;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: d
                                    }), void window.location.replace(d)
                                }
                            } catch (e) {
                                o.i.withCategory("legacy").error(e, "Unable to determine legacy reload match", {
                                    regex: t
                                })
                            }
                        })) : void n.logger.debug("Unable to process history change. Path is null or empty.") : void n.logger.debug("Legacy routing not enabled.")
                    }, n.processRedirectParam = function(e) {
                        if (e && e.pathname && e.search) {
                            var t = "" !== e.search ? i.parse(e.search) : {};
                            if (t["from-redirect"]) {
                                delete t["from-redirect"];
                                var a = i.stringify(t),
                                    r = "";
                                a.length > 0 && (r = "?" + a), n.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: r
                                })
                            }
                        }
                    }, n.isEnabled = o.b.get(s, !1), n.logger = o.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t.prototype.componentDidMount = function() {
                    this.processRedirectParam(this.props.history.location)
                }, t.prototype.buildRoutes = function() {
                    if (!this.isEnabled) return [];
                    this.logger.debug("Building legacy routes...");
                    var e = o.b.get("legacy_routes", []),
                        t = [];
                    if (!e || 0 === e.length) return this.logger.debug("No legacy routes found in settings."), t;
                    for (var n = 0, a = e; n < a.length; n++) {
                        var i = a[n];
                        try {
                            var r = new RegExp(i, "i");
                            t.push(r)
                        } catch (e) {
                            this.logger.debug("Failed to parse route!", {
                                val: i,
                                err: e
                            })
                        }
                    }
                    return this.logger.debug("Done building legacy routes!", {
                        count: t.length
                    }), t
                }, t
            }(r.Component),
            c = d;
        n.d(t, "a", function() {
            return s
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return c
        })
    },
    376: function(e, t, n) {
        "use strict";
        var a = n(0),
            i = n(1),
            r = n(2),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        assignmentDetermined: !1,
                        assignment: ""
                    }, t.logger = r.n.logger.withCategory("component-experiment"), t.didUnmount = !1, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, r.n.experiments.getAssignment(this.props.name, this.props.channel ? {
                                        channel: this.props.channel
                                    } : {})];
                                case 1:
                                    return e = t.sent(), this.didUnmount ? [2] : (e && this.props.assignments[e] ? this.logger.debug("Displaying component for experiment", {
                                        name: this.props.name,
                                        assignment: e
                                    }) : this.logger.debug("Displaying fallback component for experiment", {
                                        name: this.props.name,
                                        assignment: e
                                    }), this.setState({
                                        assignment: e,
                                        assignmentDetermined: !0
                                    }), [2])
                            }
                        })
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.didUnmount = !0
                }, t.prototype.render = function() {
                    if (!this.state.assignmentDetermined) return this.props.loader();
                    if (this.props.assignments[this.state.assignment]) {
                        var e = this.props.assignments[this.state.assignment]();
                        return "string" == typeof e ? (window.location.replace(e), null) : e
                    }
                    return this.props.assignments.fallback()
                }, t
            }(i.Component),
            l = o;
        n.d(t, "a", function() {
            return l
        })
    },
    378: function(e, t, n) {
        "use strict";

        function a(e, t) {
            var n = Math.floor(e % 60),
                a = Math.floor(e % 3600 / 60),
                r = Math.floor(e / 3600);
            return t && t.zeroPadAll ? i(r, 2) + ":" + i(a, 2) + ":" + i(n, 2) : r ? r + ":" + i(a, 2) + ":" + i(n, 2) : a + ":" + i(n, 2)
        }

        function i(e, t) {
            return t -= e.toString().length, t > 0 ? new Array(t + (/\./.test(e.toString()) ? 2 : 1)).join("0") + e : e.toString()
        }
        t.a = a
    },
    381: function(e, t, n) {
        "use strict";

        function a(e) {
            p.emit(u, e)
        }

        function i(e) {
            p.emit(m, e)
        }
        n.d(t, "b", function() {
            return l
        }), n.d(t, "c", function() {
            return s
        }), n.d(t, "d", function() {
            return d
        }), n.d(t, "a", function() {
            return c
        }), n.d(t, "f", function() {
            return u
        }), n.d(t, "e", function() {
            return m
        }), n.d(t, "g", function() {
            return p
        }), t.i = a, t.h = i;
        var r = n(24),
            o = (n.n(r), n(2)),
            l = {
                directory: {
                    banner: "dfp-directory-banner",
                    rectangle: "dfp-directory-rectangle"
                },
                channel250: "google_companion_300x250",
                anonFront: {
                    rect: "Twitch_FPMedRect_holder",
                    banner: "Twitch_FPopaBanner_holder",
                    takeover: "Twitch_FPTakeoverSkinv2_holder",
                    bottom: "Twitch_FP970Bottom_holder",
                    sizzle: "sizzle_strip"
                },
                front: {
                    leaderboard: "hpto_logged_in_leaderboard",
                    rightTop: "hpto_logged_in_rcol_top",
                    rightBottom: "hpto_logged_in_rcol_bottom"
                }
            },
            s = {
                directory: {
                    banner: [
                        [970, 66],
                        [970, 250],
                        [728, 90]
                    ],
                    rectangle: [
                        [300, 250]
                    ]
                },
                channel250: [300, 250],
                anonFront: {
                    rect: [
                        [300, 250]
                    ],
                    banner: [
                        [970, 418],
                        [970, 67],
                        [970, 250],
                        [970, 150],
                        [980, 250]
                    ],
                    takeover: [
                        [1, 1]
                    ],
                    bottom: [
                        [970, 66],
                        [728, 90]
                    ],
                    sizzle: [
                        [980, 250]
                    ]
                },
                front: {
                    leaderboard: [
                        [970, 66],
                        [728, 90]
                    ],
                    rightTop: [
                        [300, 250]
                    ],
                    rightBottom: [
                        [300, 600]
                    ]
                }
            },
            d = {
                directory: "/" + o.a.dfpNetworkCode + "/twitch/directory",
                channel: "/" + o.a.dfpNetworkCode + "/twitch/channels",
                frontpage: "/" + o.a.dfpNetworkCode + "/twitch/homepage",
                sizzle: "/" + o.a.dfpNetworkCode + "/twitch/sizzle_strip"
            },
            c = {
                games: "games",
                channel: "channel",
                frontpage: "homepage"
            },
            u = "ads.slot-render-end",
            m = "ads.slot-ready",
            p = new r.EventEmitter
    },
    808: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = {
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
            DirectoryPopularByLanguage: "directory.popular.language",
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
    810: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var a = n(0),
            i = n(2),
            r = n(17),
            o = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
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
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
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
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
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
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
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
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        var i, r;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), i = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, i), [4, this._fetch(e, t)];
                                case 1:
                                    return r = a.sent(), [4, this.constructLegacyAPIResponse(r)];
                                case 2:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, i.n.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t, n, i;
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
                                    return i = a.sent(), t.requestError = i, [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), a.__awaiter(this, void 0, void 0, function() {
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
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var n = i.n.store.getState(),
                        a = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": i.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (a["Content-Type"] = "application/json; charset=UTF-8");
                    var o = Object(r.c)(n);
                    return o && (a.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (a["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        a[e] && delete a[e]
                    }), a
                }, e
            }()
    },
    811: function(e, t, n) {
        "use strict";

        function a(e) {
            return function(t) {
                var n = function(n) {
                    function a(t) {
                        var a = n.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0, s.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = a.referenceTracking,
                                    o = r.content,
                                    l = r.medium,
                                    d = r.content_index;
                                s.n.tracking.trackPageview(i.__assign({
                                    content: o,
                                    medium: l,
                                    content_index: d,
                                    location: e.location
                                }, t))
                            }
                        }, s.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return i.__extends(a, n), a.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, a.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, a.prototype.render = function() {
                        return o.createElement(t, i.__assign({}, this.props))
                    }, a.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? r.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var a = "",
                                i = r.stringify(t);
                            i.length > 0 && (a = "?" + i), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: a
                            })
                        }
                        return n
                    }, a
                }(o.Component);
                return Object(l.f)(n)
            }
        }
        var i = n(0),
            r = n(20),
            o = n(1),
            l = n(10),
            s = n(2);
        n.d(t, "a", function() {
            return a
        })
    },
    824: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
        }(a || (a = {}))
    },
    832: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var a = n(0),
            i = n(1),
            r = (n.n(i), n(3)),
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
                return a.__extends(t, e), t.prototype.render = function() {
                    return i.createElement("div", {
                        "data-test-selector": "file-picker-root",
                        onClick: this.onFilePickerClick,
                        onDragLeave: this.onDragLeave,
                        onDragOver: this.onDragOver,
                        onDrop: this.onFileDrop
                    }, i.createElement(r.I, {
                        dragOver: this.state.isDraggingOver
                    }, i.createElement(r.P, {
                        display: r.H.Hide
                    }, i.createElement("input", {
                        accept: this.props.allowedFileTypes.join(","),
                        multiple: this.props.multiFile || !1,
                        onChange: this.onFileInputChange,
                        ref: this.refHandler,
                        type: "file"
                    })), this.props.children))
                }, t.prototype.finalizeSelections = function(e) {
                    e && this.props.onFilesSubmitted(Array.from(e))
                }, t
            }(i.Component)
    },
    836: function(e, t, n) {
        "use strict";
        var a, i = n(0),
            r = n(1),
            o = n(2);
        ! function(e) {
            e.On = "on", e.Off = "off", e.StaffOnly = "staff"
        }(a || (a = {}));
        var l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = o.b.get(this.props.name, a.Off);
                    return e === a.On || e === a.StaffOnly && this.props.isStaff ? r.Children.only(this.props.children) : null
                }, t
            }(r.Component),
            s = l;
        n.d(t, "a", function() {
            return a
        }), n.d(t, !1, function() {
            return l
        }), n.d(t, "b", function() {
            return s
        })
    },
    837: function(e, t, n) {
        "use strict";

        function a(e) {
            return void 0 === e && (e = !1), [{
                code: "asl",
                label: "American Sign Language"
            }, {
                code: "other",
                label: e ? Object(r.d)("Other", "broadcaster-languages") : "Other"
            }]
        }

        function i() {
            var e = r.n.intl.getLanguageCode(),
                t = function(t) {
                    return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                };
            return o.slice().sort(function(e, n) {
                var a = t(e),
                    i = t(n);
                return a !== i ? a - i : a + ":" + e.label < i + ":" + n.label ? -1 : 1
            }).concat(a(!0))
        }
        n.d(t, "a", function() {
            return l
        }), t.b = i;
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
            l = new Set(o.concat(a()).map(function(e) {
                return e.code
            }))
    },
    850: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = {
            CommunitiesAvatar: "avatar_image",
            CommunitiesCover: "cover_image",
            Default: "encoded_image",
            EventCoverImage: "event_cover_image"
        }
    },
    851: function(e, t, n) {
        "use strict";

        function a(e, t) {
            var n = this;
            return function(a) {
                return o.__awaiter(n, void 0, void 0, function() {
                    var n, i;
                    return o.__generator(this, function(o) {
                        return n = new Set(r()), t ? n.add(e) : n.delete(e), i = Array.from(n), l.k.set(c, i), a(Object(d.b)(i)), [2]
                    })
                })
            }
        }

        function i() {
            var e = this;
            return function(t) {
                return o.__awaiter(e, void 0, void 0, function() {
                    return o.__generator(this, function(e) {
                        return l.k.set(c, []), t(Object(d.b)([])), [2]
                    })
                })
            }
        }

        function r() {
            return l.k.get(c, []).filter(function(e) {
                return s.a.has(e)
            })
        }
        t.c = a, t.a = i, t.b = r;
        var o = n(0),
            l = n(2),
            s = n(837),
            d = n(852),
            c = "languageDirectoryFilters"
    },
    852: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                type: i,
                languagePreferences: e
            }
        }
        n.d(t, "a", function() {
            return i
        }), t.b = a;
        var i = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED"
    },
    854: function(e, t, n) {
        "use strict";

        function a() {
            return {
                type: r
            }
        }

        function i() {
            return {
                type: o
            }
        }
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        }), t.d = a, t.c = i;
        var r = "header.DIRECTORY_HEADER_EDIT_ENABLED",
            o = "header.DIRECTORY_HEADER_EDIT_DISABLED"
    },
    874: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                trackingSet: e.ads.trackingSet
            }
        }
        var i = n(7),
            r = n(0),
            o = n(1),
            l = n(2),
            s = n(110),
            d = n(381),
            c = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            u = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            m = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = l.i.withCategory("ad-slot"), n.createSlot = function(e) {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var t, n;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.state.slotCreated) return [2];
                                        this.setState({
                                            slotCreated: !0
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, s.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable)];
                                    case 2:
                                        return t = a.sent(), Object(d.h)(t.getSlotElementId()), this.setState({
                                            slot: t
                                        }), [3, 4];
                                    case 3:
                                        return n = a.sent(), this.logger.warn("Unable to create ad slot", {
                                            slotID: e.slotID,
                                            adUnit: e.adUnit,
                                            adSize: e.adSize,
                                            targeting: e.targeting,
                                            autoEnable: e.autoEnable
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.setRef = function(e) {
                        return n.slotRef = e
                    }, n.onSlotRenderEnd = function(e) {
                        var t = e.slot.getSlotElementId();
                        if (n.state.slot && t === n.props.slotID) {
                            if (n.logger.debug("Ad slot render ended", {
                                    elementID: t,
                                    lineItemID: e.lineItemId,
                                    createdID: e.creativeId,
                                    isEmpty: e.isEmpty,
                                    serviceName: e.serviceName,
                                    size: e.size
                                }), e.isEmpty) return;
                            if (!n.slotRef) return;
                            if (n.props.slotID === d.b.anonFront.takeover) return void(document.body.classList.contains("takeover") && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            if (n.props.slotID === d.b.directory.banner) {
                                var a = n.slotRef.querySelector(c);
                                return void(a && 1 !== a.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            if (n.props.slotID === d.b.directory.rectangle) {
                                var a = n.slotRef.querySelector(u);
                                return void(a && 1 !== a.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            })
                        }
                    }, n.slotRendered = function(e) {
                        n.props.slotRendered && n.props.slotRendered(e)
                    }, n.state = {
                        shouldDisplay: !1
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    d.g.addListener(d.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), d.g.removeListener(d.f, this.onSlotRenderEnd), this.state.slot && s.a.destroySlot(this.state.slot)
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return t.shouldDisplay !== this.state.shouldDisplay
                }, t.prototype.render = function() {
                    var e = r.__assign({}, this.props.injectStyles);
                    return this.state.shouldDisplay || (e.display = "none"), o.createElement("div", {
                        style: e,
                        id: this.props.slotID,
                        ref: this.setRef
                    })
                }, t
            }(o.Component),
            p = m,
            g = Object(i.a)(a)(p);
        n.d(t, "a", function() {
            return g
        })
    },
    877: function(e, t, n) {
        "use strict";

        function a() {
            return {
                languagePreferences: Object(d.b)()
            }
        }

        function i(e, t) {
            switch (void 0 === e && (e = a()), t.type) {
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
            s = n(852),
            d = n(851);
        l.n.store.registerReducer("userPreferences", i)
    },
    878: function(e, t, n) {
        "use strict";

        function a(e) {
            return Object(C.bindActionCreators)({
                onClose: w.c
            }, e)
        }
        var i = n(0),
            r = n(1),
            o = n(2),
            l = n(832),
            s = n(3),
            d = (n(994), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
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
            c = n(850),
            u = function(e) {
                return new Promise(function(t, n) {
                    var a = new FileReader;
                    a.onload = function() {
                        var e = m(a.result);
                        t(e)
                    }, a.onerror = function(e) {
                        n(e)
                    }, a.readAsDataURL(e)
                })
            },
            m = function(e) {
                return e.replace(/data:image.*;base64,/, "")
            },
            p = this,
            g = function(e, t, n) {
                return i.__awaiter(p, void 0, void 0, function() {
                    var a, r, o, l, s, d;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return t ? (a = void 0, n ? (s = {}, r = n, [4, u(e)]) : [3, 2]) : [3, 5];
                            case 1:
                                return s[r] = i.sent(), a = s, [3, 4];
                            case 2:
                                return d = {}, o = c.a.Default, [4, u(e)];
                            case 3:
                                d[o] = i.sent(), a = d, i.label = 4;
                            case 4:
                                return [2, a];
                            case 5:
                                return l = new FormData, l.append("files[]", e), [2, l];
                            case 6:
                                return [2]
                        }
                    })
                })
            },
            h = function(e, t) {
                return Object(o.d)("Recommended image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                    imageDimensions: e,
                    imageFileMegabytes: t
                }, "ImageUploader")
            },
            v = function(e, t) {
                return Object(o.d)("Required image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                    imageDimensions: e,
                    imageFileMegabytes: t
                }, "ImageUploader")
            },
            f = function(e) {
                return Object(o.d)("Couldn't upload image. Request returned {statusCode, number}", {
                    statusCode: e
                }, "ImageUploader")
            },
            y = function() {
                return Object(o.d)("File too large.", "ImageUploader")
            },
            k = function() {
                return Object(o.d)("Incompatible format. File must be an image in PNG or JPG format.", "ImageUploader")
            },
            b = n(810),
            S = this,
            _ = function(e, t) {
                return i.__awaiter(S, void 0, void 0, function() {
                    var n;
                    return i.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, b.a.post(e, {
                                    body: t,
                                    credentials: t instanceof FormData ? "include" : void 0
                                })];
                            case 1:
                                if (n = a.sent(), n.status >= 200 && n.status < 300) return [2, n.body];
                                if (n && n.error) throw new Error(JSON.stringify(n.error));
                                if (n && n.requestError) throw new Error(JSON.stringify(n.requestError));
                                throw new Error(f(n.status))
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
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, n, a, r;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
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
                                            errorMessage: y(),
                                            isLoading: !1
                                        }), [3, 7]);
                                    case 2:
                                        return [4, g(t, this.props.shouldBase64Encode, this.props.base64EncodedPropertyName)];
                                    case 3:
                                        n = i.sent(), i.label = 4;
                                    case 4:
                                        return i.trys.push([4, 6, , 7]), [4, _(this.props.uploadURL, n)];
                                    case 5:
                                        return a = i.sent(), this.setState({
                                            isLoading: !1
                                        }), this.props.onFinishUploading && this.props.onFinishUploading(a, n), [3, 7];
                                    case 6:
                                        return r = i.sent(), this.setState({
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
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = "";
                    e = this.props.isRequiredImageDimensions ? v(this.props.imageDimensions, this.props.maxFileSizeMegabytes) : h(this.props.imageDimensions, this.props.maxFileSizeMegabytes), this.setState({
                        hintMessage: e
                    })
                }, t.prototype.render = function() {
                    return r.createElement(d, {
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
            E = n(7),
            C = n(9),
            w = n(36),
            D = n(104),
            F = (n(995), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(s._17, {
                        className: "image-uploader-modal",
                        background: s.m.Base
                    }, r.createElement(N, i.__assign({
                        onFinishUploading: this.props.onClose
                    }, this.props)), r.createElement(D.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(r.Component)),
            T = Object(E.a)(null, a)(F);
        n.d(t, "a", function() {
            return N
        }), n.d(t, "b", function() {
            return T
        })
    },
    897: function(e, t, n) {
        "use strict";

        function a() {
            return {
                isEditingEnabled: !1
            }
        }

        function i(e, t) {
            switch (void 0 === e && (e = a()), t.type) {
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
            s = n(854);
        l.n.store.registerReducer("directoryHeader", i)
    },
    905: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                isLoggedIn: Object(y.d)(e)
            }
        }

        function i(e) {
            return Object(h.bindActionCreators)({
                login: function() {
                    return Object(f.f)(v.a.DirectoryFollowButton)
                }
            }, e)
        }

        function r(e) {
            return Object(h.bindActionCreators)({
                onCloseModal: L.c
            }, e)
        }

        function o(e) {
            return {
                isHeaderEditEnabled: Object(Q.a)(e),
                isLoggedIn: Object(y.d)(e)
            }
        }

        function l(e) {
            return Object(h.bindActionCreators)({
                login: function() {
                    return Object(f.f)(v.a.ReportChannel)
                },
                onShowModal: L.d,
                onCloseModal: L.c,
                onEnableDirectoryHeaderEdit: R.d,
                onDisableDirectoryHeaderEdit: R.c
            }, e)
        }
        var s, d = n(0),
            c = n(4),
            u = n(1),
            m = n(10),
            p = n(2),
            g = n(7),
            h = n(9),
            v = n(48),
            f = n(32),
            y = n(17),
            k = n(6),
            b = n(21),
            S = n(12),
            _ = n(5),
            N = n(3),
            E = n(1020),
            C = n(1021),
            w = n(1022),
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
                            var n = "follow" === e ? S.SpadeEventType.CommunityFollow : S.SpadeEventType.CommunityUnfollow;
                            p.n.tracking.track(n, {
                                community_id: t.props.data.community.id,
                                name: t.props.data.community.name,
                                is_official: !1,
                                user_id: t.props.data.currentUser && t.props.data.currentUser.id
                            })
                        }
                    }, t.followChannel = function() {
                        return d.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, a = this;
                            return d.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.props.followCommunity && this.props.data ? (e = d.__assign({}, Object(b.a)({
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
                                        return t = i.sent(), n = function(e) {
                                            return a.trackResponse("follow"), e.community.self.follow && (e.community.self.follow.followedAt = t.data.followCommunity.community.self.follow.followedAt), e
                                        }, Object(b.d)(E, {
                                            name: this.props.directoryName
                                        }, n), [2]
                                }
                            })
                        })
                    }, t.unfollowChannel = function() {
                        return d.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return d.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.props.unfollowCommunity && this.props.data ? (e = d.__assign({}, Object(b.a)({
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
                                        return a.sent(), t = function(e) {
                                            return n.trackResponse("unfollow"), e.community.self.follow = null, e
                                        }, Object(b.d)(E, {
                                            name: this.props.directoryName
                                        }, t), [2]
                                }
                            })
                        })
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
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
                    }, u.createElement(N.v, {
                        ariaLabel: Object(p.d)("Unfollow", "DirectoryFollowButton"),
                        onClick: this.toggleFollowing,
                        "data-a-target": "directory-unfollow-button",
                        "data-test-selector": "unfollow-button",
                        icon: N._9.Heart,
                        statusAlertIcon: N._9.Unheart
                    })) : u.createElement(N.U, {
                        margin: {
                            left: 1
                        }
                    }, u.createElement(N.u, d.__assign({
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
                }, t = d.__decorate([Object(k.a)(E, {
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
                }), Object(k.a)(C, {
                    name: "followCommunity"
                }), Object(k.a)(w, {
                    name: "unfollowCommunity"
                }), Object(_.c)("DirectoryFollowButton")], t)
            }(u.Component),
            F = D,
            T = Object(g.a)(a, i)(F),
            O = n(836),
            U = n(129),
            I = n(374),
            L = n(36),
            R = n(854),
            A = n(385),
            j = n(377),
            x = n(135),
            P = n(261),
            M = n(31),
            V = n(104),
            B = (n(1023), n(1024)),
            G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.tosBanCommunity = function() {
                        return d.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return d.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.props.tosBanCommunity ? (e = d.__assign({}, Object(b.a)({
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
                return d.__extends(t, e), t.prototype.render = function() {
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
                    }, Object(p.d)("Ban", "CommunityBanModal")))))), u.createElement(V.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(u.Component),
            H = Object(M.compose)(Object(k.a)(B, {
                name: "tosBanCommunity"
            }))(G),
            W = Object(g.a)(null, r)(H),
            z = n(1025),
            q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingCommunity: !1
                    }, t.openReportModal = function() {
                        t.props.isLoggedIn ? t.props.onShowModal(j.a, {
                            onClose: t.handleReportModalClose,
                            reportContext: {
                                contentID: t.props.data.community.id,
                                contentType: P.a.Community,
                                targetUserID: t.props.data.community.owner.id,
                                extra: t.props.communityName
                            },
                            title: Object(p.d)("Report {communityName}", {
                                communityName: t.props.communityName
                            }, "CommunitiesSettingsCog")
                        }) : t.props.login()
                    }, t.openBanModal = function() {
                        t.props.onShowModal(W, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName
                        })
                    }, t.onEditModeToggle = function() {
                        t.props.isHeaderEditEnabled ? t.props.onDisableDirectoryHeaderEdit() : (p.n.history.push(Object(I.a)(t.props.communityName) + "/details"), t.props.onEnableDirectoryHeaderEdit())
                    }, t.handleReportModalClose = function(e) {
                        (e === x.b.MutationError || e === x.b.Success) && t.props.history.push("/")
                    }, t
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && this.props.data.error ? null : u.createElement(N.U, {
                        position: N._2.Relative
                    }, u.createElement(A.a, null, u.createElement(N.v, {
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
                        linkTo: Object(U.a)("/communities/" + this.props.communityName + "/moderation/log"),
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
                }, t = d.__decorate([Object(k.a)(z, {
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
            $ = q,
            Q = n(897),
            Y = Object(g.a)(o, l)(Object(m.f)($)),
            J = n(928),
            X = n(824);
        n(1026);
        ! function(e) {
            e[e.DirectoryPage = 0] = "DirectoryPage", e[e.DirectoryVideosPage = 1] = "DirectoryVideosPage", e[e.DirectoryClipsPage = 2] = "DirectoryClipsPage", e[e.DirectoryDetailsPage = 3] = "DirectoryDetailsPage"
        }(s || (s = {}));
        var K = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        t = this.props.directoryType === X.a.Games ? Object(I.d)(this.props.directoryName) : Object(I.a)(this.props.directoryName);
                    return this.getDirectoryTabs().map(function(n, a) {
                        var i = n.label.replace(/ /g, "-").toLowerCase(),
                            r = c("directory-tabs__item", (o = {}, o["directory-tabs__item--first"] = 0 === a, o["directory-tabs__item--selected"] = n.isSelected, o));
                        return u.createElement(N.P, {
                            key: "directory-tabs__item--" + n.label,
                            display: N.H.Flex,
                            alignItems: N.c.Center,
                            flexShrink: 0,
                            "data-a-target": "game-directory-" + i + "-tab"
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
                    var e, t = c("directory-tabs__item", (i = {}, i["directory-tabs__item--selected"] = this.props.activeTab === s.DirectoryDetailsPage, i)),
                        n = Object(p.d)("Game Details", "DirectoryGameTabs"),
                        a = Object(I.d)(this.props.directoryName) + "/details";
                    return e = p.b.get("commerce_gdp_launch", O.a.Off) !== O.a.On ? u.createElement("a", {
                        className: t,
                        href: Object(U.a)(a),
                        target: Object(U.b)() ? "_blank" : ""
                    }, this.renderTabData(n)) : u.createElement(m.a, {
                        className: t,
                        to: a
                    }, this.renderTabData(n)), u.createElement(N.P, {
                        display: N.H.Flex,
                        alignItems: N.c.Center,
                        flexShrink: 0
                    }, e);
                    var i
                }, t.prototype.renderSettingsCog = function() {
                    return this.props.directoryType !== X.a.Communities ? null : u.createElement(Y, {
                        communityName: this.props.directoryName
                    })
                }, t.prototype.renderFollowButton = function() {
                    switch (this.props.directoryType) {
                        case X.a.Communities:
                            return u.createElement(T, {
                                directoryName: this.props.directoryName
                            });
                        case X.a.Games:
                            return u.createElement(J.a, {
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
                        whitelistDirectories: [X.a.Communities, X.a.Games]
                    }, {
                        label: Object(p.d)("Videos", "DirectoryGameTabs"),
                        path: "/videos/all",
                        isSelected: this.props.activeTab === s.DirectoryVideosPage,
                        whitelistDirectories: [X.a.Games]
                    }, {
                        label: Object(p.d)("Clips", "DirectoryGameTabs"),
                        path: "/clips",
                        isSelected: this.props.activeTab === s.DirectoryClipsPage,
                        whitelistDirectories: [X.a.Games]
                    }, {
                        label: Object(p.d)("Details", "DirectoryHeader"),
                        path: "/details",
                        isSelected: this.props.activeTab === s.DirectoryDetailsPage,
                        whitelistDirectories: [X.a.Communities]
                    }].filter(function(t) {
                        return t.whitelistDirectories.includes(e.props.directoryType)
                    })
                }, t = d.__decorate([Object(_.c)("DirectoryGameTabs")], t)
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
    908: function(e, t, n) {
        "use strict";
        var a = n(0),
            i = n(1),
            r = n(10),
            o = n(2),
            l = n(909),
            s = n(3),
            d = (n(1009), function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.state = {
                        isPremiereExperimentActive: !1
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, o.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return e = t.sent(), "yes" === e && o.b.get("premiere_video_manager_staff", !1) && this.setState({
                                        isPremiereExperimentActive: !0
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = null;
                    !0 !== this.state.isPremiereExperimentActive && this.props.vodcast && (e = i.createElement(s.U, {
                        display: s.H.InlineBlock,
                        padding: {
                            right: .5
                        }
                    }, i.createElement(s.Z, {
                        label: Object(o.d)("Vodcast", "LiveChannelCard")
                    })));
                    var t = Object(o.d)("{viewerCount, plural, one {# viewer on {channel}} other {# viewers on {channel}}}", {
                        viewerCount: this.props.viewerCount,
                        channel: i.createElement(r.a, {
                            to: this.props.channelNameLinkTo,
                            className: "live-channel-card__videos",
                            "data-a-target": "live-channel-card-channel-name-link"
                        }, this.props.channelName)
                    }, "Live Channel Card");
                    return i.createElement("div", a.__assign({
                        className: "live-channel-card"
                    }, Object(s._39)(this.props)), i.createElement(s.A, {
                        key: this.props.title
                    }, i.createElement(s.U, {
                        fullWidth: !0
                    }, i.createElement(s.j, {
                        overflow: !0
                    }, i.createElement("div", null, i.createElement(r.a, {
                        to: this.props.linkTo,
                        title: this.props.title,
                        "data-a-target": "live-channel-card-thumbnail-link"
                    }, i.createElement(s.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc,
                        aspect: s.k.Aspect16x9
                    })), this.renderContentType(), this.renderGameBoxArt()))), i.createElement(s.B, null, i.createElement(r.a, {
                        to: this.props.linkTo,
                        className: "live-channel-card__channel",
                        "data-a-target": "live-channel-card-title-link"
                    }, i.createElement(s.P, {
                        margin: {
                            top: .5
                        }
                    }, i.createElement(s._21, {
                        type: s._26.H3,
                        fontSize: s.L.Size5,
                        ellipsis: !0,
                        className: "live-channel-card__title"
                    }, this.props.title))), i.createElement(s.U, {
                        className: "live-channel-card__meta",
                        display: s.H.Flex,
                        flexWrap: s.K.NoWrap
                    }, e, i.createElement(s._21, {
                        type: s._26.Span,
                        ellipsis: !0
                    }, t)))))
                }, t.prototype.renderGameBoxArt = function() {
                    var e = this.props.gameLinkTo,
                        t = this.props.gameTitle,
                        n = this.props.gameImageSrc;
                    return t && e ? i.createElement(r.a, {
                        to: e,
                        title: t,
                        "data-a-target": "live-channel-card-game-link"
                    }, i.createElement(s._17, {
                        className: "live-channel-card__boxart",
                        position: s._2.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, i.createElement(s._30, {
                        display: s.H.Block,
                        direction: s._32.Bottom,
                        label: t
                    }, i.createElement(s.C, {
                        imageSrc: n,
                        imageAlt: t,
                        aspect: s.k.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? i.createElement(s.U, {
                        position: s._2.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, i.createElement(l.a, {
                        type: this.props.streamType
                    })) : null
                }, t
            }(i.Component)),
            c = d;
        n.d(t, !1, function() {
            return d
        }), n.d(t, "a", function() {
            return c
        })
    },
    909: function(e, t, n) {
        "use strict";
        var a, i, r, o = n(4),
            l = n(1),
            s = n(2),
            d = n(274),
            c = n(3),
            u = (n(1008), a = {}, a[d.a.Live] = "stream-type-indicator--live", a[d.a.Premiere] = "stream-type-indicator--premiere", a[d.a.Rerun] = "stream-type-indicator--rerun", a[d.a.WatchParty] = "stream-type-indicator--rerun", a),
            m = (i = {}, i[d.a.Premiere] = c._9.VideoPremiere, i[d.a.Rerun] = c._9.VideoRerun, i[d.a.WatchParty] = c._9.VideoRerun, i),
            p = (r = {}, r[d.a.Premiere] = c._10.Live, r[d.a.Rerun] = c._10.Inherit, r[d.a.WatchParty] = c._10.Inherit, r),
            g = function(e) {
                var t = {
                    "stream-type-indicator": !0
                };
                t[u[e.type]] = !0;
                var n;
                n = e.type === d.a.Live ? l.createElement(c.U, {
                    className: "stream-type-indicator__live-wrapper",
                    display: c.H.Flex,
                    alignItems: c.c.Center
                }, l.createElement(c.V, {
                    size: c.W.Small
                })) : l.createElement(c._8, {
                    asset: m[e.type],
                    type: p[e.type],
                    width: 14,
                    height: 14
                });
                var a;
                switch (e.type) {
                    case d.a.Live:
                        a = Object(s.d)("Live", "StreamTypeIndicator");
                        break;
                    case d.a.Premiere:
                        a = Object(s.d)("Premiere", "StreamTypeIndicator");
                        break;
                    case d.a.Rerun:
                    case d.a.WatchParty:
                        a = Object(s.d)("Rerun", "StreamTypeIndicator");
                        break;
                    default:
                        a = ""
                }
                return l.createElement(c._17, {
                    className: o(t),
                    background: c.m.Overlay,
                    padding: {
                        x: .5
                    },
                    borderRadius: c.s.Small,
                    display: c.H.Flex
                }, l.createElement(c.U, {
                    display: c.H.Flex,
                    margin: {
                        right: .5
                    }
                }, n), l.createElement(c._21, {
                    type: c._26.Span
                }, a))
            };
        n.d(t, "a", function() {
            return g
        })
    },
    918: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                languagePreferences: Object(s.a)(e)
            }
        }

        function i(e) {
            return Object(o.bindActionCreators)({
                updateLanguagePreferences: l.c,
                clearLanguagePreferences: l.a
            }, e)
        }
        var r = n(7),
            o = n(9),
            l = n(851),
            s = n(877),
            d = n(0),
            c = n(1),
            u = n(2),
            m = n(28),
            p = n(47),
            g = n(837),
            h = n(5),
            v = n(3),
            f = (n(919), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleLanguageChange = function(e) {
                        var n = e.currentTarget,
                            a = n.parentElement && n.parentElement.getAttribute("data-language-code");
                        a && t.props.updateLanguagePreferences(a, n.checked)
                    }, t.renderLanguageOption = function(e) {
                        return c.createElement(v.U, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            key: e.code
                        }, c.createElement(v.E, {
                            label: e.label,
                            checked: t.props.languagePreferences.includes(e.code),
                            "data-language-code": e.code,
                            "data-a-target": "language-filter-" + e.code + "-checkbox",
                            onChange: t.handleLanguageChange
                        }))
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.languagePreferences.length;
                    return c.createElement(v.U, {
                        className: "language-select-menu"
                    }, c.createElement(p.a, null, c.createElement(v.u, {
                        "data-test-selector": "language-dropdown-button",
                        "data-a-target": "language-filter-dropdown",
                        dropdown: !0,
                        type: v.z.Hollow
                    }, c.createElement(v.U, {
                        display: v.H.Flex
                    }, Object(u.d)("Language", "LanguageSelectMenu"), c.createElement(v.U, {
                        margin: {
                            left: .5
                        }
                    }, 0 !== e && c.createElement(v.Z, {
                        type: v._0.Brand,
                        label: e.toString()
                    })))), c.createElement(v.p, {
                        direction: v.q.BottomLeft,
                        noTail: !0,
                        "data-a-target": "language-filter-balloon"
                    }, c.createElement(m.b, {
                        className: "language-select-menu__balloon"
                    }, c.createElement(v.U, {
                        padding: .5
                    }, Object(g.b)().map(this.renderLanguageOption))), c.createElement(v._17, {
                        background: v.m.Alt,
                        borderTop: !0,
                        className: "language-select-menu__footer"
                    }, c.createElement(v.u, {
                        type: v.z.Text,
                        onClick: this.props.clearLanguagePreferences,
                        "data-a-target": "language-clear-all"
                    }, Object(u.d)("Clear all", "LanguageSelectMenu"))))))
                }, t = d.__decorate([Object(h.c)("LanguageSelectMenu")], t)
            }(c.Component)),
            y = f,
            k = Object(r.a)(a, i)(y);
        n.d(t, "a", function() {
            return k
        })
    },
    919: function(e, t) {},
    923: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return i
        }), n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        });
        var a = n(824),
            i = function(e) {
                return e.startsWith("/communities") || e.startsWith("/directory/communities") ? a.a.Communities : a.a.Games
            },
            r = function(e) {
                switch (e) {
                    case "communities":
                        return a.a.Communities;
                    case "games":
                        return a.a.Games;
                    case "creative":
                        return a.a.Creative;
                    default:
                        return a.a.Games
                }
            },
            o = function(e) {
                switch (e) {
                    case "communities":
                        return [a.a.Communities, a.a.Creative];
                    case "games":
                        return [a.a.Games];
                    case "creative":
                        return [a.a.Creative];
                    default:
                        return [a.a.Games]
                }
            }
    },
    928: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                isLoggedIn: Object(d.d)(e)
            }
        }

        function i(e) {
            return Object(o.bindActionCreators)({
                showLoginModal: function() {
                    return Object(s.f)(l.a.FollowGameButton)
                }
            }, e)
        }
        var r = n(7),
            o = n(9),
            l = n(48),
            s = n(32),
            d = n(17),
            c = n(0),
            u = n(1),
            m = n(31),
            p = n(2),
            g = n(6),
            h = n(21),
            v = n(12),
            f = n(3),
            y = n(929),
            k = n(930),
            b = n(931),
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.follow = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t = this;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.followGame && this.props.data && this.props.data.game ? (e = c.__assign({}, Object(h.a)({
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
                                                var a = n.data.followGame,
                                                    i = e.readQuery({
                                                        query: k,
                                                        variables: {
                                                            name: t.props.gameName
                                                        }
                                                    });
                                                i.game && (i.game.self.follow = a.game.self.follow, e.writeQuery({
                                                    query: k,
                                                    variables: {
                                                        name: t.props.gameName
                                                    },
                                                    data: i
                                                }))
                                            }
                                        }), [4, this.props.followGame(e)]) : [2];
                                    case 1:
                                        return n.sent(), this.track(v.SpadeEventType.GameFollow), [2]
                                }
                            })
                        })
                    }, t.unfollow = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t = this;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.unfollowGame && this.props.data && this.props.data.game ? (e = c.__assign({}, Object(h.a)({
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
                                        return n.sent(), this.track(v.SpadeEventType.GameUnfollow), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(p.d)("Follow", "FollowGameButton");
                    if (!this.props.isLoggedIn) return u.createElement(f.u, {
                        icon: f._9.Heart,
                        ariaLabel: e,
                        "data-test-selector": "follow-game-button-component",
                        onClick: this.props.showLoginModal
                    }, e);
                    if (this.isLoading) return u.createElement(f._1, {
                        width: 70,
                        height: 30
                    });
                    if (this.isFollowing) {
                        var t = Object(p.d)("Unfollow", "FollowGameButton");
                        return u.createElement(f.v, {
                            ariaLabel: t,
                            "data-test-selector": "follow-game-button-component",
                            icon: f._9.Heart,
                            onClick: this.unfollow,
                            statusAlertIcon: f._9.Unheart
                        })
                    }
                    return u.createElement(f.u, {
                        icon: f._9.Heart,
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
                        kind: e === v.SpadeEventType.GameFollow ? "follow" : "unfollow",
                        name: this.props.gameName
                    })
                }, t
            }(u.Component),
            _ = Object(m.compose)(Object(g.a)(k, {
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
            }), Object(g.a)(y, {
                name: "followGame"
            }), Object(g.a)(b, {
                name: "unfollowGame"
            }))(S),
            N = Object(r.a)(a, i)(_);
        n.d(t, "a", function() {
            return N
        })
    },
    929: function(e, t) {
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
    930: function(e, t) {
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
    931: function(e, t) {
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
    932: function(e, t, n) {
        "use strict";
        var a = n(0),
            i = n(1),
            r = n(2),
            o = function(e, t) {
                return Object(r.d)("{viewerCount,number} viewers on {channel}", {
                    viewerCount: e,
                    channel: t
                }, "DirectoryGamePage")
            },
            l = Object(r.d)("Untitled Broadcast", "StreamThumbnail"),
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return i.createElement("div", null, Object(r.d)("View All", "DirectoryInternationalSection"))
                }, t
            }(i.Component),
            d = s;
        n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, !1, function() {
            return d
        })
    },
    994: function(e, t) {},
    995: function(e, t) {}
});
//# sourceMappingURL=pages.directory-by-language-09b2d984c059139f9a8b33f6b3e2da9b.js.map