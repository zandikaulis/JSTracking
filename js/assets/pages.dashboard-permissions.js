webpackJsonp([121], {
    "3/8U": function(e, t) {},
    "8uM1": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, a = n("TToO"),
            o = n("GiK3"),
            i = n("CIox"),
            s = n("6sO2"),
            l = n("QRuM"),
            c = n("RGTy"),
            d = n("pK/l"),
            u = n("jnhC"),
            m = n("6BvN"),
            h = n("UWcj"),
            p = n("PGY2"),
            E = this,
            _ = function(e, t) {
                return a.__awaiter(E, void 0, void 0, function() {
                    var n;
                    return a.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, Object(p.c)({
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
            g = function(e, t) {
                return a.__awaiter(E, void 0, void 0, function() {
                    var n;
                    return a.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, Object(p.c)({
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
            f = n("Odds"),
            v = {
                "data-test-selector": "cancel-button"
            },
            b = {
                "data-test-selector": "close-button"
            },
            S = {
                "data-test-selector": "remove-button"
            };
        ! function(e) {
            e[e.Pending = 0] = "Pending", e[e.InFlight = 1] = "InFlight", e[e.Failed = 2] = "Failed", e[e.Success = 3] = "Success"
        }(r || (r = {}));
        var y, C, j = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onClickRemove = function() {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var e;
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.setState({
                                            requestState: r.InFlight
                                        }), [4, g(this.props.channelID, this.props.email)];
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
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = o.createElement(o.Fragment, null, o.createElement(f._35, {
                            borderBottom: !0
                        }, o.createElement(f._8, {
                            padding: {
                                y: 2
                            }
                        }, o.createElement(f.Q, {
                            color: f.K.Alt2
                        }, Object(s.d)("Failed to remove authorized streamer. Try again.", "PermissionsRemoveAuthorizedStreamerConfirmation")))), o.createElement(f._8, {
                            display: f.R.Flex,
                            justifyContent: f._7.Center,
                            padding: {
                                top: 2
                            }
                        }, o.createElement(f._8, {
                            margin: {
                                x: 1
                            }
                        }, o.createElement(f.v, a.__assign({}, b, {
                            onClick: this.props.onClose
                        }), Object(s.d)("Close", "PermissionsRemoveAuthorizedStreamerConfirmation"))))),
                        t = o.createElement(o.Fragment, null, o.createElement(f._35, {
                            borderBottom: !0
                        }, o.createElement(f._8, {
                            display: f.R.Flex,
                            justifyContent: f._7.Center,
                            padding: {
                                y: 2
                            }
                        }, o.createElement(f.Q, {
                            color: f.K.Alt2
                        }, this.props.email))), o.createElement(f._8, {
                            display: f.R.Flex,
                            justifyContent: f._7.Center,
                            padding: {
                                top: 2
                            }
                        }, o.createElement(f._8, {
                            margin: {
                                x: 1
                            }
                        }, o.createElement(f.v, a.__assign({}, v, {
                            onClick: this.props.onClose,
                            type: f.B.Text
                        }), Object(s.d)("No, Keep Them", "PermissionsRemoveAuthorizedStreamerConfirmation"))), o.createElement(f._8, {
                            margin: {
                                x: 1
                            }
                        }, o.createElement(f.v, a.__assign({}, S, {
                            disabled: this.state.requestState === r.InFlight,
                            onClick: this.onClickRemove
                        }), Object(s.d)("Yes, Remove Them", "PermissionsRemoveAuthorizedStreamerConfirmation")))));
                    return o.createElement(o.Fragment, null, o.createElement(f._35, {
                        background: f.n.Base,
                        elevation: 3,
                        padding: {
                            x: 2,
                            top: 3,
                            bottom: 2
                        }
                    }, o.createElement(f._35, {
                        borderBottom: !0,
                        padding: {
                            bottom: 2
                        }
                    }, o.createElement(f.Q, {
                        type: f._49.H4,
                        color: f.K.Alt
                    }, Object(s.d)("Remove This Authorized Streamer?", "PermissionsRemoveAuthorizedStreamerConfirmation"))), this.state.requestState === r.Failed ? e : t, o.createElement(f._8, {
                        attachRight: !0,
                        attachTop: !0,
                        className: "modal__close-button",
                        margin: {
                            left: .5
                        },
                        position: f._15.Absolute
                    }, o.createElement(f.v, {
                        onClick: this.props.onClose,
                        type: f.B.Text,
                        overlay: !0
                    }, o.createElement(f._24, {
                        asset: f._25.RemoveTag,
                        width: 16,
                        height: 16
                    })))))
                }, t
            }(o.Component),
            O = {
                "data-test-selector": "email"
            },
            w = {
                "data-test-selector": "send"
            },
            P = {
                "data-test-selector": "remove"
            },
            z = {
                "data-test-selector": "empty"
            },
            R = {
                "data-test-selector": "loading"
            },
            x = {
                "data-test-selector": "error"
            },
            F = {
                "data-test-selector": "not-found"
            };
        ! function(e) {
            e[e.Waiting = 0] = "Waiting", e[e.Error = 1] = "Error", e[e.NotFound = 2] = "NotFound", e[e.Success = 3] = "Success"
        }(y || (y = {})),
        function(e) {
            e[e.Loading = 0] = "Loading", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
        }(C || (C = {}));
        var A, T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        authorizedStreamers: [],
                        emailAddress: "",
                        inviteState: y.Waiting,
                        requestState: C.Loading
                    }, t.updateAuthorizedStreamers = function(e) {
                        t.setState({
                            authorizedStreamers: e
                        })
                    }, t.onChangeEmailAddress = function(e) {
                        t.setState({
                            emailAddress: e.currentTarget.value
                        })
                    }, t.onKeyDown = function(e) {
                        e.keyCode === m.a.Enter && t.sendInvite(t.state.emailAddress)
                    }, t.sendInvite = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.setState({
                                            inviteState: y.Waiting
                                        }), e.length > 0 ? [4, _(this.props.user.id, e)] : [3, 2];
                                    case 1:
                                        (t = n.sent()).isNotFound ? this.setState({
                                            inviteState: y.NotFound
                                        }) : t.isError ? this.setState({
                                            inviteState: y.Error
                                        }) : this.setState({
                                            authorizedStreamers: t.authorizedStreamers,
                                            emailAddress: "",
                                            inviteState: y.Success
                                        }), n.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.resendInvite = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, _(this.props.user.id, e)];
                                    case 1:
                                        return (t = n.sent()).isError || this.setState({
                                            authorizedStreamers: t.authorizedStreamers
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (this.state.requestState === C.Loading) return o.createElement("div", a.__assign({}, R), "Loading...");
                    if (this.state.requestState === C.Error) return o.createElement("div", a.__assign({}, x), "'Error'");
                    var t = o.createElement(f._8, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(f._8, {
                        display: f.R.Flex,
                        flexGrow: 1
                    }, o.createElement(f._8, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, o.createElement(f._4, {
                        type: f._5.Text,
                        onChange: this.onChangeEmailAddress,
                        onKeyDown: this.onKeyDown,
                        value: this.state.emailAddress,
                        placeholder: Object(s.d)("Enter an email address", "PermissionsAuthorizedStreamers")
                    })), o.createElement(f._8, null, o.createElement(f.v, a.__assign({}, w, {
                        onClick: function() {
                            return e.sendInvite(e.state.emailAddress)
                        }
                    }), Object(s.d)("Send Invite", "PermissionsAuthorizedStreamers")))), this.state.inviteState === y.NotFound && o.createElement(f.Q, a.__assign({}, F, {
                        color: f.K.Error,
                        fontSize: f.V.Size7
                    }), Object(s.d)("That email address isn't linked to a Twitch account. Make sure the email is linked to a Twitch account.", "PermissionsAuthorizedStreamers")));
                    return this.state.requestState === C.Success ? 0 === this.state.authorizedStreamers.length ? o.createElement(o.Fragment, null, t, o.createElement(f._8, a.__assign({
                        display: f.R.Flex,
                        flexDirection: f.T.Column,
                        alignItems: f.c.Center,
                        alignContent: f.b.Center,
                        justifyContent: f._7.Center,
                        fullHeight: !0
                    }, z), o.createElement(f._8, {
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(f.m, {
                        src: "https://static-cdn.jtvnw.net/emoticons/v1/58127/2.0",
                        alt: "CoolCat",
                        size: 50
                    })), o.createElement(f.Q, {
                        color: f.K.OverlayAlt,
                        fontSize: f.V.Size5
                    }, Object(s.d)("No authorized streamers to display", "PermissionsAuthorizedStreamers")))) : o.createElement(o.Fragment, null, t, this.state.authorizedStreamers.map(function(t, n) {
                        return o.createElement(f._35, {
                            key: n,
                            alignItems: f.c.Center,
                            borderBottom: !0,
                            display: f.R.Flex,
                            justifyContent: f._7.Between,
                            padding: {
                                bottom: 1
                            }
                        }, o.createElement(f._8, {
                            display: f.R.Flex,
                            alignItems: f.c.Center
                        }, o.createElement(f._8, {
                            margin: {
                                left: 1
                            }
                        }, o.createElement(f.Q, a.__assign({}, O), t.email))), o.createElement(f._8, null, o.createElement(f._8, {
                            margin: {
                                right: 1
                            },
                            display: f.R.InlineFlex
                        }, o.createElement(f.v, {
                            type: f.B.Hollow,
                            onClick: function() {
                                return e.resendInvite(t.email)
                            }
                        }, Object(s.d)("Resend Invite", "PermissionsAuthorizedStreamersRow"))), o.createElement(h.a, {
                            triggerModal: function(n) {
                                return o.createElement(j, {
                                    channelID: e.props.user.id,
                                    email: t.email,
                                    onClose: n,
                                    onSuccess: e.updateAuthorizedStreamers
                                })
                            }
                        }, function(e) {
                            return o.createElement(f.v, a.__assign({
                                type: f.B.Text,
                                onClick: e
                            }, P), Object(s.d)("Remove", "PermissionsAuthorizedStreamersRow"))
                        })))
                    })) : void 0
                }, t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, (n = this.props.user.id, a.__awaiter(E, void 0, void 0, function() {
                                        var e;
                                        return a.__generator(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, Object(p.c)({
                                                        path: "/v5/channels/" + n + "/channel_properties"
                                                    })];
                                                case 1:
                                                    return (e = t.sent()).isError() ? [2, {
                                                        isError: !0,
                                                        authorizedStreamers: []
                                                    }] : [2, {
                                                        isError: !1,
                                                        authorizedStreamers: e.body.authorized_stream_keys
                                                    }]
                                            }
                                        })
                                    }))];
                                case 1:
                                    return (e = t.sent()).isError ? this.setState({
                                        requestState: C.Error
                                    }) : this.setState({
                                        authorizedStreamers: e.authorizedStreamers,
                                        requestState: C.Success
                                    }), [2]
                            }
                            var n
                        })
                    })
                }, t
            }(o.Component),
            D = n("5s0/"),
            I = n("puy8"),
            k = n("m4HT"),
            L = {
                "data-test-selector": "confirm-remove-editor"
            },
            K = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleRemoveEditor = function() {
                        var e = t.props,
                            n = e.onClose;
                        (0, e.onRemoveEditor)(), n()
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(f._35, {
                        background: f.n.Base,
                        elevation: 3,
                        padding: {
                            x: 2,
                            top: 3,
                            bottom: 2
                        }
                    }, o.createElement(f._35, {
                        borderBottom: !0,
                        padding: {
                            bottom: 2
                        }
                    }, o.createElement(f.Q, {
                        type: f._49.H4,
                        color: f.K.Alt
                    }, Object(s.d)("Remove This Editor?", "PermissionsRemoveEditorConfirmation"))), o.createElement(f._35, {
                        borderBottom: !0
                    }, o.createElement(f._8, {
                        display: f.R.Flex,
                        justifyContent: f._7.Center,
                        padding: {
                            y: 2
                        }
                    }, o.createElement(f.Q, {
                        color: f.K.Alt2
                    }, this.props.channel.login))), o.createElement(f._8, {
                        display: f.R.Flex,
                        justifyContent: f._7.Center,
                        padding: {
                            top: 2
                        }
                    }, o.createElement(f._8, {
                        margin: {
                            x: 1
                        }
                    }, o.createElement(f.v, {
                        onClick: this.props.onClose,
                        type: f.B.Text
                    }, Object(s.d)("No, Keep Editor", "PermissionsRemoveEditorConfirmation"))), o.createElement(f._8, {
                        margin: {
                            x: 1
                        }
                    }, o.createElement(f.v, a.__assign({}, L, {
                        onClick: this.handleRemoveEditor
                    }), Object(s.d)("Yes, Remove Editor", "PermissionsRemoveEditorConfirmation")))), o.createElement(f._8, {
                        attachRight: !0,
                        attachTop: !0,
                        className: "modal__close-button",
                        margin: {
                            left: .5
                        },
                        position: f._15.Absolute
                    }, o.createElement(f.v, {
                        onClick: this.props.onClose,
                        type: f.B.Text,
                        overlay: !0
                    }, o.createElement(f._24, {
                        asset: f._25.RemoveTag,
                        width: 16,
                        height: 16
                    }))))
                }, t
            }(o.Component),
            q = n("9u8h"),
            B = this,
            M = function(e) {
                var t = e.channelID,
                    n = e.editorLogin;
                return a.__awaiter(B, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, q.a.postOrThrow("https://api.twitch.tv/v5/permissions/channels/" + t + "/editors", {
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
            N = this,
            Q = this,
            H = function(e) {
                var t = e.channelID,
                    n = e.editorID;
                return a.__awaiter(Q, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, q.a.deleteOrThrow("https://api.twitch.tv/v5/permissions/channels/" + t + "/editors/" + n)];
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                })
            },
            V = {
                "data-test-selector": "login"
            },
            G = {
                "data-test-selector": "empty"
            },
            W = {
                "data-test-selector": "loading"
            },
            U = {
                "data-test-selector": "error"
            },
            Y = {
                "data-test-selector": "add-editor"
            },
            J = {
                "data-test-selector": "add-editor-input"
            },
            X = {
                "data-test-selector": "add-editor-error"
            },
            Z = {
                "data-test-selector": "remove-editor"
            };
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
        }(A || (A = {}));
        var $, ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        channelEditors: [],
                        editorLogin: "",
                        requestState: A.Loading
                    }, t.handleRemoveEditor = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return a.__generator(this, function(n) {
                                return H({
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
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), this.setState({
                                            addEditorRequestState: A.Loading
                                        }), [4, M({
                                            channelID: this.props.user.id,
                                            editorLogin: e
                                        })];
                                    case 1:
                                        return t = n.sent(), this.setState(function(e) {
                                            return {
                                                addEditorRequestState: A.Success,
                                                channelEditors: e.channelEditors.concat([t]),
                                                editorLogin: ""
                                            }
                                        }), [3, 3];
                                    case 2:
                                        return n.sent(), this.setState({
                                            addEditorRequestState: A.Error
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
                        e.keyCode === m.a.Enter && t.handleAddEditor(t.state.editorLogin)
                    }, t.renderAddEditorForm = function() {
                        return o.createElement(f._8, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(f._8, {
                            display: f.R.Flex
                        }, o.createElement(f._8, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, o.createElement(f._4, a.__assign({}, J, {
                            type: f._5.Text,
                            placeholder: Object(s.d)("Add an editor", "ChannelEditors"),
                            onChange: t.handleEditorLoginChange,
                            onKeyDown: t.handleKeyDown,
                            value: t.state.editorLogin
                        }))), o.createElement(f.v, a.__assign({}, Y, {
                            onClick: function() {
                                return t.handleAddEditor(t.state.editorLogin)
                            }
                        }), Object(s.d)("Add", "ChannelEditors"))), t.state.addEditorRequestState === A.Error && o.createElement(f.Q, a.__assign({
                            color: f.K.Error,
                            fontSize: f.V.Size7
                        }, X), Object(s.d)("Failed to add editor. Try again.", "PermissionsChannelEditors")))
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return this.state.requestState === A.Loading ? o.createElement("div", a.__assign({}, W), "Loading...") : this.state.requestState === A.Error ? o.createElement("div", a.__assign({}, U), "'Error'") : this.state.requestState === A.Success ? 0 === this.state.channelEditors.length ? o.createElement(o.Fragment, null, this.renderAddEditorForm(), o.createElement(f._8, a.__assign({
                        display: f.R.Flex,
                        flexDirection: f.T.Column,
                        alignItems: f.c.Center,
                        alignContent: f.b.Center,
                        justifyContent: f._7.Center,
                        fullHeight: !0
                    }, G), o.createElement(f._8, {
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(f.m, {
                        src: "https://static-cdn.jtvnw.net/emoticons/v1/58127/2.0",
                        alt: "CoolCat",
                        size: 50
                    })), o.createElement(f.Q, {
                        color: f.K.OverlayAlt,
                        fontSize: f.V.Size5
                    }, Object(s.d)("No editors to display", "PermissionsChannelEditors")))) : o.createElement(o.Fragment, null, this.renderAddEditorForm(), this.state.channelEditors.map(function(t) {
                        return o.createElement(f._35, {
                            key: t.id,
                            alignItems: f.c.Center,
                            borderBottom: !0,
                            display: f.R.Flex,
                            justifyContent: f._7.Between,
                            padding: {
                                bottom: 1
                            }
                        }, o.createElement(f._8, {
                            display: f.R.Flex,
                            alignItems: f.c.Center
                        }, o.createElement(f.m, {
                            alt: t.login,
                            size: 30,
                            src: Object(I.c)(t.id, 30)
                        }), o.createElement(f._8, {
                            margin: {
                                left: 1
                            }
                        }, o.createElement(f.Q, a.__assign({}, V), t.login))), o.createElement(f._8, null, o.createElement(f._8, {
                            margin: {
                                right: 1
                            },
                            display: f.R.InlineFlex
                        }, o.createElement(D.a, {
                            isPopout: !1,
                            threadID: Object(k.a)(e.props.user.id, t.id)
                        })), o.createElement(h.a, {
                            triggerModal: function(n) {
                                return o.createElement(K, {
                                    channel: t,
                                    onClose: n,
                                    onRemoveEditor: function() {
                                        return e.handleRemoveEditor(t)
                                    }
                                })
                            }
                        }, function(e) {
                            return o.createElement(f.v, a.__assign({}, Z, {
                                onClick: e,
                                type: f.B.Text
                            }), Object(s.d)("Remove", "PermissionsChannelEditors"))
                        })))
                    })) : void 0
                }, t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, (n = this.props.user.id, a.__awaiter(N, void 0, void 0, function() {
                                        return a.__generator(this, function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, q.a.getOrThrow("https://api.twitch.tv/v5/permissions/channels/" + n + "/editors")];
                                                case 1:
                                                    return [2, e.sent().body.editors || []]
                                            }
                                        })
                                    }))];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        channelEditors: e,
                                        requestState: A.Success
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.setState({
                                        requestState: A.Error
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                            var n
                        })
                    })
                }, t
            }(o.Component),
            te = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(u.a, null, o.createElement(f._58, null, o.createElement(f._8, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement("p", null, Object(s.d)("Editors can access your channel's Dashboard to help you manage the following activities:", "ChannelEditorsTooltip"))), o.createElement("ul", null, o.createElement("li", null, Object(s.d)("Editing stream info", "ChannelEditorsTooltip")), o.createElement("li", null, Object(s.d)("Running commercial breaks", "ChannelEditorsTooltip")), o.createElement("li", null, Object(s.d)("Editing video info", "ChannelEditorsTooltip")), o.createElement("li", null, Object(s.d)("Uploading videos", "ChannelEditorsTooltip")), o.createElement("li", null, Object(s.d)("Creating events", "ChannelEditorsTooltip")), o.createElement("li", null, Object(s.d)("Starting Vodcasts", "ChannelEditorsTooltip")))))
                }, t
            }(o.Component),
            ne = n("Cfz3"),
            re = {
                "data-test-selector": "login"
            },
            ae = {
                "data-test-selector": "empty"
            },
            oe = {
                "data-test-selector": "loading"
            },
            ie = {
                "data-test-selector": "error"
            };
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
        }($ || ($ = {}));
        var se = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        editableChannels: [],
                        requestState: $.Loading
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return this.state.requestState === $.Loading ? o.createElement("div", a.__assign({}, oe), "Loading...") : this.state.requestState === $.Error ? o.createElement("div", a.__assign({}, ie), "'Error'") : this.state.requestState === $.Success ? 0 === this.state.editableChannels.length ? o.createElement(f._8, a.__assign({
                        display: f.R.Flex,
                        flexDirection: f.T.Column,
                        alignItems: f.c.Center,
                        alignContent: f.b.Center,
                        justifyContent: f._7.Center,
                        fullHeight: !0
                    }, ae), o.createElement(f._8, {
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(f.m, {
                        src: "https://static-cdn.jtvnw.net/emoticons/v1/58127/2.0",
                        alt: "CoolCat",
                        size: 50
                    })), o.createElement(f.Q, {
                        color: f.K.OverlayAlt,
                        fontSize: f.V.Size5
                    }, Object(s.d)("No channels to display", "DashboardPermissionsPage"))) : o.createElement(o.Fragment, null, this.state.editableChannels.map(function(t) {
                        return o.createElement(f._35, {
                            key: t.id,
                            alignItems: f.c.Center,
                            borderBottom: !0,
                            display: f.R.Flex,
                            justifyContent: f._7.Between,
                            padding: {
                                bottom: 1
                            }
                        }, o.createElement(f._8, {
                            display: f.R.Flex,
                            alignItems: f.c.Center
                        }, o.createElement(f.m, {
                            alt: t.login,
                            size: 30,
                            src: Object(I.c)(t.id, 30)
                        }), o.createElement(f._8, {
                            margin: {
                                left: 1
                            }
                        }, o.createElement(f.Q, a.__assign({}, re), t.login))), o.createElement(f._8, null, o.createElement(f._8, {
                            margin: {
                                right: 1
                            },
                            display: f.R.InlineFlex
                        }, o.createElement(D.a, {
                            threadID: Object(k.a)(e.props.user.id, t.id),
                            isPopout: !1
                        })), o.createElement(f.v, {
                            linkTo: "/" + t.login + "/dashboard",
                            type: f.B.Text
                        }, Object(s.d)("Dashboard", "DashboardPermissionPage"))))
                    })) : void 0
                }, t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, Object(ne.a)(this.props.user.id)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        editableChannels: e,
                                        requestState: $.Success
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.setState({
                                        requestState: $.Error
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t
            }(o.Component),
            le = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(u.a, null, o.createElement(f._58, null, o.createElement(f._8, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement("p", null, Object(s.d)("As an editor, you can access a channel's Dashboard to help the owner manage the following activities:", "DashboardPermissionsPage"))), o.createElement("ul", null, o.createElement("li", null, Object(s.d)("Editing stream info", "DashboardPermissionsPage")), o.createElement("li", null, Object(s.d)("Running commercial breaks", "DashboardPermissionPage")), o.createElement("li", null, Object(s.d)("Editing video info", "DashboardPermissionsPage")), o.createElement("li", null, Object(s.d)("Uploading videos", "DashboardPermissionsPage")), o.createElement("li", null, Object(s.d)("Creating events", "DashboardPermissionsPage")), o.createElement("li", null, Object(s.d)("Starting Vodcasts", "DashboardPermissionsPage")))))
                }, t
            }(o.Component),
            ce = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.children,
                        n = e.className;
                    return o.createElement(f._35, {
                        background: f.n.Base,
                        className: n,
                        elevation: 1,
                        padding: 2,
                        flexGrow: 1
                    }, t)
                }, t
            }(o.Component),
            de = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(f._8, {
                        alignItems: f.c.Center,
                        display: f.R.Flex,
                        margin: {
                            bottom: 2
                        },
                        justifyContent: f._7.Between
                    }, this.props.children)
                }, t
            }(o.Component),
            ue = (n("3/8U"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    s.o.setPageTitle(Object(s.d)("Permissions", "DashboardPermissionsPage"))
                }, t.prototype.render = function() {
                    return this.props.user && this.props.user.login !== this.props.match.params.channelName ? o.createElement(i.b, {
                        to: "/" + this.props.user.login + "/dashboard/live"
                    }) : o.createElement(l.b, {
                        name: "twilight_dashboard_permissions",
                        isStaff: this.props.isStaff
                    }, o.createElement(d.a, null, o.createElement(f._8, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(f.Q, {
                        bold: !0,
                        color: f.K.Alt,
                        fontSize: f.V.Size4,
                        type: f._49.H5
                    }, Object(s.d)("Editors", "DashboardPermissionsPage"))), o.createElement(f._8, {
                        display: f.R.Flex
                    }, o.createElement(ce, null, o.createElement(de, null, o.createElement(f._8, {
                        alignItems: f.c.Center,
                        display: f.R.Flex
                    }, o.createElement(f.Q, {
                        bold: !0,
                        color: f.K.Alt,
                        fontSize: f.V.Size5
                    }, Object(s.d)("Channels you can manage", "DashboardPermissionsPage")), o.createElement(le, null)), o.createElement(f.O, {
                        to: "/dashboard/" + this.props.match.params.channelName
                    }, Object(s.d)("Go to your Channel", "DashboardPermissionsPage"))), this.props.user && o.createElement(se, {
                        user: this.props.user
                    })), o.createElement(ce, null, o.createElement(de, null, o.createElement(f._8, {
                        alignItems: f.c.Center,
                        display: f.R.Flex
                    }, o.createElement(f.Q, {
                        bold: !0,
                        color: f.K.Alt,
                        fontSize: f.V.Size5
                    }, Object(s.d)("People who can manage your channel", "DashboardPermissionsPage")), o.createElement(te, null))), this.props.user && o.createElement(ee, {
                        user: this.props.user
                    }))), o.createElement(f._8, {
                        margin: {
                            bottom: 2,
                            top: 4
                        }
                    }, o.createElement(f.Q, {
                        bold: !0,
                        color: f.K.Alt,
                        fontSize: f.V.Size4,
                        type: f._49.H5
                    }, Object(s.d)("Authorized Streamers", "DashboardPermissionsPage"))), o.createElement(ce, {
                        className: "authorized-streamers-panel"
                    }, o.createElement(de, null, o.createElement(f._8, {
                        alignItems: f.c.Center,
                        display: f.R.Flex
                    }, o.createElement(f.Q, {
                        bold: !0,
                        color: f.K.Alt,
                        fontSize: f.V.Size5
                    }, Object(s.d)("People who can stream to your channel", "PermissionsAuthorizedStreamers")), o.createElement(u.a, null, Object(s.d)("When you invite someone to stream to your channel, we'll send them a new stream key and instructions.", "PermissionsAuthorizedStreamers")))), this.props.user && o.createElement(T, {
                        user: this.props.user
                    })), o.createElement(c.a, null)))
                }, t
            }(o.Component)),
            me = n("3zLD"),
            he = n("RH2O"),
            pe = n("j7/Y"),
            Ee = n("w9tK"),
            _e = n("vH/s"),
            ge = n("Aj/L"),
            fe = n("CSlQ");
        var ve = Object(me.compose)(Object(fe.d)("PermissionsPage", {
            destination: Ee.a.DashboardPermissions,
            autoReportInteractive: !0
        }), Object(pe.a)({
            location: _e.PageviewLocation.DashboardPermissions
        }), Object(he.b)(function(e) {
            var t = Object(ge.c)(e);
            return {
                isStaff: t && t.roles && t.roles.isStaff,
                user: t
            }
        }))(ue);
        n.d(t, "PermissionsPageComponent", function() {
            return ue
        }), n.d(t, "PermissionsPage", function() {
            return ve
        })
    },
    Cfz3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var r = n("TToO"),
            a = n("9u8h"),
            o = this,
            i = function(e) {
                return r.__awaiter(o, void 0, void 0, function() {
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
    Mbk8: function(e, t) {},
    UWcj: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("GiK3"),
            o = n("RH2O"),
            i = n("2KeS"),
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
                            }(a.Component);
                        t.props.showModal(n, {})
                    }, t.closeModal = function() {
                        t.props.closeModal()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(a.Fragment, null, this.props.children(this.openModal), a.createElement(s.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(a.Component);
        var d = Object(o.b)(null, function(e) {
            return Object(i.b)({
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
            a = n("GiK3"),
            o = n("Odds"),
            i = (n("Mbk8"), function(e) {
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
                    return a.createElement("div", {
                        onMouseEnter: this.handleHover,
                        onMouseLeave: this.handleHover
                    }, a.createElement(o._35, {
                        display: o.R.Flex,
                        padding: {
                            x: 1
                        },
                        position: o._15.Relative
                    }, a.createElement(o._35, {
                        className: "hoverable-icon",
                        display: o.R.InlineFlex,
                        color: o.K.Alt2,
                        alignItems: o.c.Center,
                        justifyContent: o._7.Center
                    }, a.createElement(o._24, {
                        asset: o._25.NotificationInfo,
                        width: 16,
                        height: 16
                    })), a.createElement(o.q, {
                        show: this.state.isHovered,
                        direction: n,
                        offsetX: "1rem"
                    }, a.createElement(o._8, {
                        padding: {
                            x: 1,
                            y: 1
                        }
                    }, t))))
                }, t.defaultProps = {
                    direction: o.r.Bottom
                }, t
            }(a.Component));
        n.d(t, "a", function() {
            return i
        })
    }
});
//# sourceMappingURL=pages.dashboard-permissions-8876bbccb059233f6b3c7e78bbc5b352.js.map