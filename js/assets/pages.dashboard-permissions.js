webpackJsonp([122], {
    "8uM1": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o = n("TToO"),
            i = n("GiK3"),
            a = n("6sO2"),
            s = n("QRuM"),
            l = n("pK/l"),
            c = n("6BvN"),
            d = n("puy8"),
            u = n("UWcj"),
            m = n("Odds"),
            h = {
                "data-test-selector": "confirm-remove-editor"
            },
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleRemoveEditor = function() {
                        var e = t.props,
                            n = e.onClose;
                        (0, e.onRemoveEditor)(), n()
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(m._35, {
                        background: m.n.Base,
                        elevation: 3,
                        padding: {
                            x: 2,
                            top: 3,
                            bottom: 2
                        }
                    }, i.createElement(m._35, {
                        borderBottom: !0,
                        padding: {
                            bottom: 2
                        }
                    }, i.createElement(m.Q, {
                        type: m._49.H4,
                        color: m.K.Alt
                    }, Object(a.d)("Remove This Editor?", "PermissionsRemoveEditorConfirmation"))), i.createElement(m._35, {
                        borderBottom: !0
                    }, i.createElement(m._8, {
                        display: m.R.Flex,
                        justifyContent: m._7.Center,
                        padding: {
                            y: 2
                        }
                    }, i.createElement(m.Q, {
                        color: m.K.Alt2
                    }, this.props.channel.login))), i.createElement(m._8, {
                        display: m.R.Flex,
                        justifyContent: m._7.Center,
                        padding: {
                            top: 2
                        }
                    }, i.createElement(m._8, {
                        margin: {
                            x: 1
                        }
                    }, i.createElement(m.v, {
                        onClick: this.props.onClose,
                        type: m.B.Text
                    }, Object(a.d)("No, Keep Editor", "PermissionsRemoveEditorConfirmation"))), i.createElement(m._8, {
                        margin: {
                            x: 1
                        }
                    }, i.createElement(m.v, o.__assign({}, h, {
                        onClick: this.handleRemoveEditor
                    }), Object(a.d)("Yes, Remove Editor", "PermissionsRemoveEditorConfirmation")))), i.createElement(m._8, {
                        attachRight: !0,
                        attachTop: !0,
                        className: "modal__close-button",
                        margin: {
                            left: .5
                        },
                        position: m._15.Absolute
                    }, i.createElement(m.v, {
                        onClick: this.props.onClose,
                        type: m.B.Text,
                        overlay: !0
                    }, i.createElement(m._24, {
                        asset: m._25.RemoveTag,
                        width: 16,
                        height: 16
                    }))))
                }, t
            }(i.Component),
            E = n("9u8h"),
            g = this,
            _ = function(e) {
                var t = e.channelID,
                    n = e.editorLogin;
                return o.__awaiter(g, void 0, void 0, function() {
                    return o.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, E.a.postOrThrow("https://api.twitch.tv/v5/permissions/channels/" + t + "/editors", {
                                    body: {
                                        granted_to_login: n
                                    }
                                })];
                            case 1:
                                return [2, e.sent().body.editor]
                        }
                    })
                })
            },
            f = this,
            b = this,
            v = function(e) {
                var t = e.channelID,
                    n = e.editorID;
                return o.__awaiter(b, void 0, void 0, function() {
                    return o.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, E.a.deleteOrThrow("https://api.twitch.tv/v5/permissions/channels/" + t + "/editors/" + n)];
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                })
            },
            y = {
                "data-test-selector": "login"
            },
            C = {
                "data-test-selector": "empty"
            },
            j = {
                "data-test-selector": "loading"
            },
            O = {
                "data-test-selector": "error"
            },
            S = {
                "data-test-selector": "add-editor"
            },
            P = {
                "data-test-selector": "add-editor-input"
            },
            w = {
                "data-test-selector": "add-editor-error"
            },
            x = {
                "data-test-selector": "remove-editor"
            };
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
        }(r || (r = {}));
        var R, D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        channelEditors: [],
                        editorLogin: "",
                        requestState: r.Loading
                    }, t.handleRemoveEditor = function(e) {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return o.__generator(this, function(n) {
                                return v({
                                    channelID: this.props.user.id,
                                    editorID: e.id
                                }), t = this.state.channelEditors.filter(function(t) {
                                    return t.id !== e.id
                                }), this.setState({
                                    channelEditors: t
                                }), [2]
                            })
                        })
                    }, t.handleAddEditor = function(e) {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return o.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), this.setState({
                                            addEditorRequestState: r.Loading
                                        }), [4, _({
                                            channelID: this.props.user.id,
                                            editorLogin: e
                                        })];
                                    case 1:
                                        return t = n.sent(), this.setState(function(e) {
                                            return {
                                                addEditorRequestState: r.Success,
                                                channelEditors: e.channelEditors.concat([t]),
                                                editorLogin: ""
                                            }
                                        }), [3, 3];
                                    case 2:
                                        return n.sent(), this.setState({
                                            addEditorRequestState: r.Error
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleEditorLoginChange = function(e) {
                        t.setState({
                            editorLogin: e.target.value
                        })
                    }, t.handleKeyDown = function(e) {
                        e.keyCode === c.a.Enter && t.handleAddEditor(t.state.editorLogin)
                    }, t.renderAddEditorForm = function() {
                        return i.createElement(m._8, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(m._8, {
                            display: m.R.Flex
                        }, i.createElement(m._8, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(m._4, o.__assign({}, P, {
                            type: m._5.Text,
                            placeholder: Object(a.d)("Add an editor", "ChannelEditors"),
                            onChange: t.handleEditorLoginChange,
                            onKeyDown: t.handleKeyDown,
                            value: t.state.editorLogin
                        }))), i.createElement(m.v, o.__assign({}, S, {
                            onClick: function() {
                                return t.handleAddEditor(t.state.editorLogin)
                            }
                        }), Object(a.d)("Add", "ChannelEditors"))), t.state.addEditorRequestState === r.Error && i.createElement(m.Q, o.__assign({
                            color: m.K.Error,
                            fontSize: m.V.Size7
                        }, w), Object(a.d)("Failed to add editor. Try again.", "PermissionsChannelEditors")))
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return this.state.requestState === r.Loading ? i.createElement("div", o.__assign({}, j), "Loading...") : this.state.requestState === r.Error ? i.createElement("div", o.__assign({}, O), "'Error'") : this.state.requestState === r.Success ? 0 === this.state.channelEditors.length ? i.createElement(i.Fragment, null, this.renderAddEditorForm(), i.createElement(m._8, o.__assign({
                        display: m.R.Flex,
                        flexDirection: m.T.Column,
                        alignItems: m.c.Center,
                        alignContent: m.b.Center,
                        justifyContent: m._7.Center,
                        fullHeight: !0
                    }, C), i.createElement(m._8, {
                        padding: {
                            bottom: .5
                        }
                    }, i.createElement(m.m, {
                        src: "https://static-cdn.jtvnw.net/emoticons/v1/58127/2.0",
                        alt: "CoolCat",
                        size: 50
                    })), i.createElement(m.Q, {
                        color: m.K.OverlayAlt,
                        fontSize: m.V.Size5
                    }, Object(a.d)("No editors to display", "PermissionsChannelEditors")))) : i.createElement(i.Fragment, null, this.renderAddEditorForm(), this.state.channelEditors.map(function(t) {
                        return i.createElement(m._35, {
                            key: t.id,
                            alignItems: m.c.Center,
                            borderBottom: !0,
                            display: m.R.Flex,
                            justifyContent: m._7.Between,
                            padding: {
                                bottom: 1
                            }
                        }, i.createElement(m._8, {
                            display: m.R.Flex,
                            alignItems: m.c.Center
                        }, i.createElement(m.m, {
                            alt: t.login,
                            size: 30,
                            src: Object(d.c)(t.id, 30)
                        }), i.createElement(m._8, {
                            margin: {
                                left: 1
                            }
                        }, i.createElement(m.Q, o.__assign({}, y), t.login))), i.createElement(m._8, null, i.createElement(m._8, {
                            margin: {
                                right: 1
                            },
                            display: m.R.InlineFlex
                        }, i.createElement(m.v, {
                            type: m.B.Hollow
                        }, Object(a.d)("Whisper", "PermissionsChannelEditors"))), i.createElement(u.a, {
                            triggerModal: function(n) {
                                return i.createElement(p, {
                                    channel: t,
                                    onClose: n,
                                    onRemoveEditor: function() {
                                        return e.handleRemoveEditor(t)
                                    }
                                })
                            }
                        }, function(e) {
                            return i.createElement(m.v, o.__assign({}, x, {
                                onClick: e,
                                type: m.B.Text
                            }), Object(a.d)("Remove", "PermissionsChannelEditors"))
                        })))
                    })) : void 0
                }, t.prototype.componentDidMount = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return o.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, (n = this.props.user.id, o.__awaiter(f, void 0, void 0, function() {
                                        return o.__generator(this, function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, E.a.getOrThrow("https://api.twitch.tv/v5/permissions/channels/" + n + "/editors")];
                                                case 1:
                                                    return [2, e.sent().body.editors || []]
                                            }
                                        })
                                    }))];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        channelEditors: e,
                                        requestState: r.Success
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.setState({
                                        requestState: r.Error
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                            var n
                        })
                    })
                }, t
            }(i.Component),
            T = n("jnhC"),
            F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(T.a, null, i.createElement(m._58, null, i.createElement(m._8, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement("p", null, Object(a.d)("Editors can access your channel's Dashboard to help you manage the following activities:", "ChannelEditorsTooltip"))), i.createElement("ul", null, i.createElement("li", null, Object(a.d)("Editing stream info", "ChannelEditorsTooltip")), i.createElement("li", null, Object(a.d)("Running commercial breaks", "ChannelEditorsTooltip")), i.createElement("li", null, Object(a.d)("Editing video info", "ChannelEditorsTooltip")), i.createElement("li", null, Object(a.d)("Uploading videos", "ChannelEditorsTooltip")), i.createElement("li", null, Object(a.d)("Creating events", "ChannelEditorsTooltip")), i.createElement("li", null, Object(a.d)("Starting Vodcasts", "ChannelEditorsTooltip")))))
                }, t
            }(i.Component),
            L = this,
            M = {
                "data-test-selector": "login"
            },
            I = {
                "data-test-selector": "empty"
            },
            A = {
                "data-test-selector": "loading"
            },
            K = {
                "data-test-selector": "error"
            };
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
        }(R || (R = {}));
        var k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        editableChannels: [],
                        requestState: R.Loading
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return this.state.requestState === R.Loading ? i.createElement("div", o.__assign({}, A), "Loading...") : this.state.requestState === R.Error ? i.createElement("div", o.__assign({}, K), "'Error'") : this.state.requestState === R.Success ? 0 === this.state.editableChannels.length ? i.createElement(m._8, o.__assign({
                        display: m.R.Flex,
                        flexDirection: m.T.Column,
                        alignItems: m.c.Center,
                        alignContent: m.b.Center,
                        justifyContent: m._7.Center,
                        fullHeight: !0
                    }, I), i.createElement(m._8, {
                        padding: {
                            bottom: .5
                        }
                    }, i.createElement(m.m, {
                        src: "https://static-cdn.jtvnw.net/emoticons/v1/58127/2.0",
                        alt: "CoolCat",
                        size: 50
                    })), i.createElement(m.Q, {
                        color: m.K.OverlayAlt,
                        fontSize: m.V.Size5
                    }, Object(a.d)("No channels to display", "DashboardPermissionsPage"))) : i.createElement(i.Fragment, null, this.state.editableChannels.map(function(e) {
                        return i.createElement(m._35, {
                            key: e.id,
                            alignItems: m.c.Center,
                            borderBottom: !0,
                            display: m.R.Flex,
                            justifyContent: m._7.Between,
                            padding: {
                                bottom: 1
                            }
                        }, i.createElement(m._8, {
                            display: m.R.Flex,
                            alignItems: m.c.Center
                        }, i.createElement(m.m, {
                            alt: e.login,
                            size: 30,
                            src: Object(d.c)(e.id, 30)
                        }), i.createElement(m._8, {
                            margin: {
                                left: 1
                            }
                        }, i.createElement(m.Q, o.__assign({}, M), e.login))), i.createElement(m._8, null, i.createElement(m._8, {
                            margin: {
                                right: 1
                            },
                            display: m.R.InlineFlex
                        }, i.createElement(m.v, {
                            type: m.B.Hollow
                        }, "Whisper")), i.createElement(m.v, {
                            linkTo: "/" + e.login + "/dashboard",
                            type: m.B.Text
                        }, Object(a.d)("Dashboard", "DashboardPermissionPage"))))
                    })) : void 0
                }, t.prototype.componentDidMount = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return o.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, (n = this.props.user.id, o.__awaiter(L, void 0, void 0, function() {
                                        return o.__generator(this, function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, E.a.getOrThrow("https://api.twitch.tv/v5/permissions/channels/" + n + "/editable_channels")];
                                                case 1:
                                                    return [2, e.sent().body.editable_channels || []]
                                            }
                                        })
                                    }))];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        editableChannels: e,
                                        requestState: R.Success
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.setState({
                                        requestState: R.Error
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                            var n
                        })
                    })
                }, t
            }(i.Component),
            B = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(T.a, null, i.createElement(m._58, null, i.createElement(m._8, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement("p", null, Object(a.d)("As an editor, you can access a channel's Dashboard to help the owner manage the following activities:", "DashboardPermissionsPage"))), i.createElement("ul", null, i.createElement("li", null, Object(a.d)("Editing stream info", "DashboardPermissionsPage")), i.createElement("li", null, Object(a.d)("Running commercial breaks", "DashboardPermissionPage")), i.createElement("li", null, Object(a.d)("Editing video info", "DashboardPermissionsPage")), i.createElement("li", null, Object(a.d)("Uploading videos", "DashboardPermissionsPage")), i.createElement("li", null, Object(a.d)("Creating events", "DashboardPermissionsPage")), i.createElement("li", null, Object(a.d)("Starting Vodcasts", "DashboardPermissionsPage")))))
                }, t
            }(i.Component),
            q = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(m._35, {
                        background: m.n.Base,
                        elevation: 1,
                        padding: 2,
                        flexGrow: 1
                    }, this.props.children)
                }, t
            }(i.Component),
            z = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(m._8, {
                        alignItems: m.c.Center,
                        display: m.R.Flex,
                        margin: {
                            bottom: 2
                        },
                        justifyContent: m._7.Between
                    }, this.props.children)
                }, t
            }(i.Component),
            H = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    a.o.setPageTitle(Object(a.d)("Permissions", "DashboardPermissionsPage"))
                }, t.prototype.render = function() {
                    return i.createElement(s.b, {
                        name: "twilight_dashboard_permissions",
                        isStaff: this.props.isStaff
                    }, i.createElement(l.a, null, i.createElement(m._8, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.Q, {
                        bold: !0,
                        color: m.K.Alt,
                        fontSize: m.V.Size4,
                        type: m._49.H5
                    }, Object(a.d)("Editors", "DashboardPermissionsPage"))), i.createElement(m._8, {
                        display: m.R.Flex
                    }, i.createElement(q, null, i.createElement(z, null, i.createElement(m._8, {
                        alignItems: m.c.Center,
                        display: m.R.Flex
                    }, i.createElement(m.Q, {
                        bold: !0,
                        color: m.K.Alt,
                        fontSize: m.V.Size5
                    }, Object(a.d)("Channels you can manage", "DashboardPermissionsPage")), i.createElement(B, null)), i.createElement(m.O, {
                        to: "/dashboard/" + this.props.channelName
                    }, Object(a.d)("Go to your Channel", "DashboardPermissionsPage"))), this.props.user && i.createElement(k, {
                        user: this.props.user
                    })), i.createElement(q, null, i.createElement(z, null, i.createElement(m._8, {
                        alignItems: m.c.Center,
                        display: m.R.Flex
                    }, i.createElement(m.Q, {
                        bold: !0,
                        color: m.K.Alt,
                        fontSize: m.V.Size5
                    }, Object(a.d)("People who can manage your channel", "DashboardPermissionsPage")), i.createElement(F, null))), this.props.user && i.createElement(D, {
                        user: this.props.user
                    })))))
                }, t
            }(i.Component),
            Q = n("3zLD"),
            V = n("RH2O"),
            N = n("j7/Y"),
            G = n("w9tK"),
            U = n("vH/s"),
            W = n("Aj/L"),
            Y = n("CSlQ");
        var J = Object(Q.compose)(Object(Y.d)("PermissionsPage", {
            destination: G.a.DashboardPermissions,
            autoReportInteractive: !0
        }), Object(N.a)({
            location: U.PageviewLocation.DashboardPermissions
        }), Object(V.b)(function(e) {
            var t = Object(W.c)(e);
            return {
                isStaff: t && t.roles && t.roles.isStaff,
                user: t
            }
        }))(H);
        n.d(t, "PermissionsPageComponent", function() {
            return H
        }), n.d(t, "PermissionsPage", function() {
            return J
        })
    },
    Mbk8: function(e, t) {},
    UWcj: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            o = n("GiK3"),
            i = n("RH2O"),
            a = n("2KeS"),
            s = n("+8VM"),
            l = n("V5M+"),
            c = function(e) {
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
                            }(o.Component);
                        t.props.showModal(n, {})
                    }, t.closeModal = function() {
                        t.props.closeModal()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(o.Fragment, null, this.props.children(this.openModal), o.createElement(s.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(o.Component);
        var d = Object(i.b)(null, function(e) {
            return Object(a.b)({
                showModal: l.d,
                closeModal: l.c
            }, e)
        })(c);
        n.d(t, "a", function() {
            return d
        })
    },
    jnhC: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            o = n("GiK3"),
            i = n("Odds"),
            a = (n("Mbk8"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isHovered: !1
                    }, t.handleHover = function() {
                        t.setState(function(e) {
                            return {
                                isHovered: !e.isHovered
                            }
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.children,
                        n = e.direction;
                    return o.createElement("div", {
                        onMouseEnter: this.handleHover,
                        onMouseLeave: this.handleHover
                    }, o.createElement(i._35, {
                        display: i.R.Flex,
                        padding: {
                            x: 1
                        },
                        position: i._15.Relative
                    }, o.createElement(i._35, {
                        className: "hoverable-icon",
                        display: i.R.InlineFlex,
                        color: i.K.Alt2,
                        alignItems: i.c.Center,
                        justifyContent: i._7.Center
                    }, o.createElement(i._24, {
                        asset: i._25.NotificationInfo,
                        width: 16,
                        height: 16
                    })), o.createElement(i.q, {
                        show: this.state.isHovered,
                        direction: n,
                        offsetX: "1rem"
                    }, o.createElement(i._8, {
                        padding: {
                            x: 1,
                            y: 1
                        }
                    }, t))))
                }, t.defaultProps = {
                    direction: i.r.Bottom
                }, t
            }(o.Component));
        n.d(t, "a", function() {
            return a
        })
    }
});
//# sourceMappingURL=pages.dashboard-permissions-3041fc1bd6fabae923d09f9aff15fcb4.js.map