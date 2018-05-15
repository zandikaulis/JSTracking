webpackJsonp([121], {
    "3/8U": function(e, t) {},
    "8uM1": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o = n("TToO"),
            a = n("GiK3"),
            i = n("6sO2"),
            s = n("QRuM"),
            l = n("pK/l"),
            c = n("jnhC"),
            d = n("6BvN"),
            u = n("UWcj"),
            m = n("PGY2"),
            h = this,
            p = function(e, t) {
                return o.__awaiter(h, void 0, void 0, function() {
                    var n;
                    return o.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, Object(m.c)({
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
            E = function(e, t) {
                return o.__awaiter(h, void 0, void 0, function() {
                    var n;
                    return o.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, Object(m.c)({
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
            _ = n("Odds"),
            g = {
                "data-test-selector": "cancel-button"
            },
            f = {
                "data-test-selector": "close-button"
            },
            v = {
                "data-test-selector": "remove-button"
            };
        ! function(e) {
            e[e.Pending = 0] = "Pending", e[e.InFlight = 1] = "InFlight", e[e.Failed = 2] = "Failed", e[e.Success = 3] = "Success"
        }(r || (r = {}));
        var b, S, y = function(e) {
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
                                        }), [4, E(this.props.channelID, this.props.email)];
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
                    var e = a.createElement(a.Fragment, null, a.createElement(_._35, {
                            borderBottom: !0
                        }, a.createElement(_._8, {
                            padding: {
                                y: 2
                            }
                        }, a.createElement(_.Q, {
                            color: _.K.Alt2
                        }, Object(i.d)("Failed to remove authorized streamer. Try again.", "PermissionsRemoveAuthorizedStreamerConfirmation")))), a.createElement(_._8, {
                            display: _.R.Flex,
                            justifyContent: _._7.Center,
                            padding: {
                                top: 2
                            }
                        }, a.createElement(_._8, {
                            margin: {
                                x: 1
                            }
                        }, a.createElement(_.v, o.__assign({}, f, {
                            onClick: this.props.onClose
                        }), Object(i.d)("Close", "PermissionsRemoveAuthorizedStreamerConfirmation"))))),
                        t = a.createElement(a.Fragment, null, a.createElement(_._35, {
                            borderBottom: !0
                        }, a.createElement(_._8, {
                            display: _.R.Flex,
                            justifyContent: _._7.Center,
                            padding: {
                                y: 2
                            }
                        }, a.createElement(_.Q, {
                            color: _.K.Alt2
                        }, this.props.email))), a.createElement(_._8, {
                            display: _.R.Flex,
                            justifyContent: _._7.Center,
                            padding: {
                                top: 2
                            }
                        }, a.createElement(_._8, {
                            margin: {
                                x: 1
                            }
                        }, a.createElement(_.v, o.__assign({}, g, {
                            onClick: this.props.onClose,
                            type: _.B.Text
                        }), Object(i.d)("No, Keep Them", "PermissionsRemoveAuthorizedStreamerConfirmation"))), a.createElement(_._8, {
                            margin: {
                                x: 1
                            }
                        }, a.createElement(_.v, o.__assign({}, v, {
                            disabled: this.state.requestState === r.InFlight,
                            onClick: this.onClickRemove
                        }), Object(i.d)("Yes, Remove Them", "PermissionsRemoveAuthorizedStreamerConfirmation")))));
                    return a.createElement(a.Fragment, null, a.createElement(_._35, {
                        background: _.n.Base,
                        elevation: 3,
                        padding: {
                            x: 2,
                            top: 3,
                            bottom: 2
                        }
                    }, a.createElement(_._35, {
                        borderBottom: !0,
                        padding: {
                            bottom: 2
                        }
                    }, a.createElement(_.Q, {
                        type: _._49.H4,
                        color: _.K.Alt
                    }, Object(i.d)("Remove This Authorized Streamer?", "PermissionsRemoveAuthorizedStreamerConfirmation"))), this.state.requestState === r.Failed ? e : t, a.createElement(_._8, {
                        attachRight: !0,
                        attachTop: !0,
                        className: "modal__close-button",
                        margin: {
                            left: .5
                        },
                        position: _._15.Absolute
                    }, a.createElement(_.v, {
                        onClick: this.props.onClose,
                        type: _.B.Text,
                        overlay: !0
                    }, a.createElement(_._24, {
                        asset: _._25.RemoveTag,
                        width: 16,
                        height: 16
                    })))))
                }, t
            }(a.Component),
            C = {
                "data-test-selector": "email"
            },
            j = {
                "data-test-selector": "send"
            },
            w = {
                "data-test-selector": "remove"
            },
            O = {
                "data-test-selector": "empty"
            },
            z = {
                "data-test-selector": "loading"
            },
            P = {
                "data-test-selector": "error"
            },
            R = {
                "data-test-selector": "not-found"
            };
        ! function(e) {
            e[e.Waiting = 0] = "Waiting", e[e.Error = 1] = "Error", e[e.NotFound = 2] = "NotFound", e[e.Success = 3] = "Success"
        }(b || (b = {})),
        function(e) {
            e[e.Loading = 0] = "Loading", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
        }(S || (S = {}));
        var x, F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        authorizedStreamers: [],
                        emailAddress: "",
                        inviteState: b.Waiting,
                        requestState: S.Loading
                    }, t.updateAuthorizedStreamers = function(e) {
                        t.setState({
                            authorizedStreamers: e
                        })
                    }, t.onChangeEmailAddress = function(e) {
                        t.setState({
                            emailAddress: e.currentTarget.value
                        })
                    }, t.onKeyDown = function(e) {
                        e.keyCode === d.a.Enter && t.sendInvite(t.state.emailAddress)
                    }, t.sendInvite = function(e) {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return o.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.setState({
                                            inviteState: b.Waiting
                                        }), e.length > 0 ? [4, p(this.props.user.id, e)] : [3, 2];
                                    case 1:
                                        (t = n.sent()).isNotFound ? this.setState({
                                            inviteState: b.NotFound
                                        }) : t.isError ? this.setState({
                                            inviteState: b.Error
                                        }) : this.setState({
                                            authorizedStreamers: t.authorizedStreamers,
                                            emailAddress: "",
                                            inviteState: b.Success
                                        }), n.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.resendInvite = function(e) {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return o.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, p(this.props.user.id, e)];
                                    case 1:
                                        return (t = n.sent()).isError || this.setState({
                                            authorizedStreamers: t.authorizedStreamers
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (this.state.requestState === S.Loading) return a.createElement("div", o.__assign({}, z), "Loading...");
                    if (this.state.requestState === S.Error) return a.createElement("div", o.__assign({}, P), "'Error'");
                    var t = a.createElement(_._8, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(_._8, {
                        display: _.R.Flex,
                        flexGrow: 1
                    }, a.createElement(_._8, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, a.createElement(_._4, {
                        type: _._5.Text,
                        onChange: this.onChangeEmailAddress,
                        onKeyDown: this.onKeyDown,
                        value: this.state.emailAddress,
                        placeholder: Object(i.d)("Enter an email address", "PermissionsAuthorizedStreamers")
                    })), a.createElement(_._8, null, a.createElement(_.v, o.__assign({}, j, {
                        onClick: function() {
                            return e.sendInvite(e.state.emailAddress)
                        }
                    }), Object(i.d)("Send Invite", "PermissionsAuthorizedStreamers")))), this.state.inviteState === b.NotFound && a.createElement(_.Q, o.__assign({}, R, {
                        color: _.K.Error,
                        fontSize: _.V.Size7
                    }), Object(i.d)("That email address isn't linked to a Twitch account. Make sure the email is linked to a Twitch account.", "PermissionsAuthorizedStreamers")));
                    return this.state.requestState === S.Success ? 0 === this.state.authorizedStreamers.length ? a.createElement(a.Fragment, null, t, a.createElement(_._8, o.__assign({
                        display: _.R.Flex,
                        flexDirection: _.T.Column,
                        alignItems: _.c.Center,
                        alignContent: _.b.Center,
                        justifyContent: _._7.Center,
                        fullHeight: !0
                    }, O), a.createElement(_._8, {
                        padding: {
                            bottom: .5
                        }
                    }, a.createElement(_.m, {
                        src: "https://static-cdn.jtvnw.net/emoticons/v1/58127/2.0",
                        alt: "CoolCat",
                        size: 50
                    })), a.createElement(_.Q, {
                        color: _.K.OverlayAlt,
                        fontSize: _.V.Size5
                    }, Object(i.d)("No authorized streamers to display", "PermissionsAuthorizedStreamers")))) : a.createElement(a.Fragment, null, t, this.state.authorizedStreamers.map(function(t, n) {
                        return a.createElement(_._35, {
                            key: n,
                            alignItems: _.c.Center,
                            borderBottom: !0,
                            display: _.R.Flex,
                            justifyContent: _._7.Between,
                            padding: {
                                bottom: 1
                            }
                        }, a.createElement(_._8, {
                            display: _.R.Flex,
                            alignItems: _.c.Center
                        }, a.createElement(_._8, {
                            margin: {
                                left: 1
                            }
                        }, a.createElement(_.Q, o.__assign({}, C), t.email))), a.createElement(_._8, null, a.createElement(_._8, {
                            margin: {
                                right: 1
                            },
                            display: _.R.InlineFlex
                        }, a.createElement(_.v, {
                            type: _.B.Hollow,
                            onClick: function() {
                                return e.resendInvite(t.email)
                            }
                        }, Object(i.d)("Resend Invite", "PermissionsAuthorizedStreamersRow"))), a.createElement(u.a, {
                            triggerModal: function(n) {
                                return a.createElement(y, {
                                    channelID: e.props.user.id,
                                    email: t.email,
                                    onClose: n,
                                    onSuccess: e.updateAuthorizedStreamers
                                })
                            }
                        }, function(e) {
                            return a.createElement(_.v, o.__assign({
                                type: _.B.Text,
                                onClick: e
                            }, w), Object(i.d)("Remove", "PermissionsAuthorizedStreamersRow"))
                        })))
                    })) : void 0
                }, t.prototype.componentDidMount = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return o.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, (n = this.props.user.id, o.__awaiter(h, void 0, void 0, function() {
                                        var e;
                                        return o.__generator(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, Object(m.c)({
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
                                        requestState: S.Error
                                    }) : this.setState({
                                        authorizedStreamers: e.authorizedStreamers,
                                        requestState: S.Success
                                    }), [2]
                            }
                            var n
                        })
                    })
                }, t
            }(a.Component),
            A = n("puy8"),
            T = {
                "data-test-selector": "confirm-remove-editor"
            },
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleRemoveEditor = function() {
                        var e = t.props,
                            n = e.onClose;
                        (0, e.onRemoveEditor)(), n()
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(_._35, {
                        background: _.n.Base,
                        elevation: 3,
                        padding: {
                            x: 2,
                            top: 3,
                            bottom: 2
                        }
                    }, a.createElement(_._35, {
                        borderBottom: !0,
                        padding: {
                            bottom: 2
                        }
                    }, a.createElement(_.Q, {
                        type: _._49.H4,
                        color: _.K.Alt
                    }, Object(i.d)("Remove This Editor?", "PermissionsRemoveEditorConfirmation"))), a.createElement(_._35, {
                        borderBottom: !0
                    }, a.createElement(_._8, {
                        display: _.R.Flex,
                        justifyContent: _._7.Center,
                        padding: {
                            y: 2
                        }
                    }, a.createElement(_.Q, {
                        color: _.K.Alt2
                    }, this.props.channel.login))), a.createElement(_._8, {
                        display: _.R.Flex,
                        justifyContent: _._7.Center,
                        padding: {
                            top: 2
                        }
                    }, a.createElement(_._8, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(_.v, {
                        onClick: this.props.onClose,
                        type: _.B.Text
                    }, Object(i.d)("No, Keep Editor", "PermissionsRemoveEditorConfirmation"))), a.createElement(_._8, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(_.v, o.__assign({}, T, {
                        onClick: this.handleRemoveEditor
                    }), Object(i.d)("Yes, Remove Editor", "PermissionsRemoveEditorConfirmation")))), a.createElement(_._8, {
                        attachRight: !0,
                        attachTop: !0,
                        className: "modal__close-button",
                        margin: {
                            left: .5
                        },
                        position: _._15.Absolute
                    }, a.createElement(_.v, {
                        onClick: this.props.onClose,
                        type: _.B.Text,
                        overlay: !0
                    }, a.createElement(_._24, {
                        asset: _._25.RemoveTag,
                        width: 16,
                        height: 16
                    }))))
                }, t
            }(a.Component),
            k = n("9u8h"),
            I = this,
            L = function(e) {
                var t = e.channelID,
                    n = e.editorLogin;
                return o.__awaiter(I, void 0, void 0, function() {
                    return o.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, k.a.postOrThrow("https://api.twitch.tv/v5/permissions/channels/" + t + "/editors", {
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
            K = this,
            q = this,
            B = function(e) {
                var t = e.channelID,
                    n = e.editorID;
                return o.__awaiter(q, void 0, void 0, function() {
                    return o.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, k.a.deleteOrThrow("https://api.twitch.tv/v5/permissions/channels/" + t + "/editors/" + n)];
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                })
            },
            M = {
                "data-test-selector": "login"
            },
            N = {
                "data-test-selector": "empty"
            },
            H = {
                "data-test-selector": "loading"
            },
            Q = {
                "data-test-selector": "error"
            },
            V = {
                "data-test-selector": "add-editor"
            },
            G = {
                "data-test-selector": "add-editor-input"
            },
            W = {
                "data-test-selector": "add-editor-error"
            },
            U = {
                "data-test-selector": "remove-editor"
            };
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
        }(x || (x = {}));
        var Y, J = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        channelEditors: [],
                        editorLogin: "",
                        requestState: x.Loading
                    }, t.handleRemoveEditor = function(e) {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return o.__generator(this, function(n) {
                                return B({
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
                                            addEditorRequestState: x.Loading
                                        }), [4, L({
                                            channelID: this.props.user.id,
                                            editorLogin: e
                                        })];
                                    case 1:
                                        return t = n.sent(), this.setState(function(e) {
                                            return {
                                                addEditorRequestState: x.Success,
                                                channelEditors: e.channelEditors.concat([t]),
                                                editorLogin: ""
                                            }
                                        }), [3, 3];
                                    case 2:
                                        return n.sent(), this.setState({
                                            addEditorRequestState: x.Error
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
                        e.keyCode === d.a.Enter && t.handleAddEditor(t.state.editorLogin)
                    }, t.renderAddEditorForm = function() {
                        return a.createElement(_._8, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(_._8, {
                            display: _.R.Flex
                        }, a.createElement(_._8, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, a.createElement(_._4, o.__assign({}, G, {
                            type: _._5.Text,
                            placeholder: Object(i.d)("Add an editor", "ChannelEditors"),
                            onChange: t.handleEditorLoginChange,
                            onKeyDown: t.handleKeyDown,
                            value: t.state.editorLogin
                        }))), a.createElement(_.v, o.__assign({}, V, {
                            onClick: function() {
                                return t.handleAddEditor(t.state.editorLogin)
                            }
                        }), Object(i.d)("Add", "ChannelEditors"))), t.state.addEditorRequestState === x.Error && a.createElement(_.Q, o.__assign({
                            color: _.K.Error,
                            fontSize: _.V.Size7
                        }, W), Object(i.d)("Failed to add editor. Try again.", "PermissionsChannelEditors")))
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return this.state.requestState === x.Loading ? a.createElement("div", o.__assign({}, H), "Loading...") : this.state.requestState === x.Error ? a.createElement("div", o.__assign({}, Q), "'Error'") : this.state.requestState === x.Success ? 0 === this.state.channelEditors.length ? a.createElement(a.Fragment, null, this.renderAddEditorForm(), a.createElement(_._8, o.__assign({
                        display: _.R.Flex,
                        flexDirection: _.T.Column,
                        alignItems: _.c.Center,
                        alignContent: _.b.Center,
                        justifyContent: _._7.Center,
                        fullHeight: !0
                    }, N), a.createElement(_._8, {
                        padding: {
                            bottom: .5
                        }
                    }, a.createElement(_.m, {
                        src: "https://static-cdn.jtvnw.net/emoticons/v1/58127/2.0",
                        alt: "CoolCat",
                        size: 50
                    })), a.createElement(_.Q, {
                        color: _.K.OverlayAlt,
                        fontSize: _.V.Size5
                    }, Object(i.d)("No editors to display", "PermissionsChannelEditors")))) : a.createElement(a.Fragment, null, this.renderAddEditorForm(), this.state.channelEditors.map(function(t) {
                        return a.createElement(_._35, {
                            key: t.id,
                            alignItems: _.c.Center,
                            borderBottom: !0,
                            display: _.R.Flex,
                            justifyContent: _._7.Between,
                            padding: {
                                bottom: 1
                            }
                        }, a.createElement(_._8, {
                            display: _.R.Flex,
                            alignItems: _.c.Center
                        }, a.createElement(_.m, {
                            alt: t.login,
                            size: 30,
                            src: Object(A.c)(t.id, 30)
                        }), a.createElement(_._8, {
                            margin: {
                                left: 1
                            }
                        }, a.createElement(_.Q, o.__assign({}, M), t.login))), a.createElement(_._8, null, a.createElement(_._8, {
                            margin: {
                                right: 1
                            },
                            display: _.R.InlineFlex
                        }, a.createElement(_.v, {
                            type: _.B.Hollow
                        }, Object(i.d)("Whisper", "PermissionsChannelEditors"))), a.createElement(u.a, {
                            triggerModal: function(n) {
                                return a.createElement(D, {
                                    channel: t,
                                    onClose: n,
                                    onRemoveEditor: function() {
                                        return e.handleRemoveEditor(t)
                                    }
                                })
                            }
                        }, function(e) {
                            return a.createElement(_.v, o.__assign({}, U, {
                                onClick: e,
                                type: _.B.Text
                            }), Object(i.d)("Remove", "PermissionsChannelEditors"))
                        })))
                    })) : void 0
                }, t.prototype.componentDidMount = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return o.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, (n = this.props.user.id, o.__awaiter(K, void 0, void 0, function() {
                                        return o.__generator(this, function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, k.a.getOrThrow("https://api.twitch.tv/v5/permissions/channels/" + n + "/editors")];
                                                case 1:
                                                    return [2, e.sent().body.editors || []]
                                            }
                                        })
                                    }))];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        channelEditors: e,
                                        requestState: x.Success
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.setState({
                                        requestState: x.Error
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                            var n
                        })
                    })
                }, t
            }(a.Component),
            X = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(c.a, null, a.createElement(_._58, null, a.createElement(_._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement("p", null, Object(i.d)("Editors can access your channel's Dashboard to help you manage the following activities:", "ChannelEditorsTooltip"))), a.createElement("ul", null, a.createElement("li", null, Object(i.d)("Editing stream info", "ChannelEditorsTooltip")), a.createElement("li", null, Object(i.d)("Running commercial breaks", "ChannelEditorsTooltip")), a.createElement("li", null, Object(i.d)("Editing video info", "ChannelEditorsTooltip")), a.createElement("li", null, Object(i.d)("Uploading videos", "ChannelEditorsTooltip")), a.createElement("li", null, Object(i.d)("Creating events", "ChannelEditorsTooltip")), a.createElement("li", null, Object(i.d)("Starting Vodcasts", "ChannelEditorsTooltip")))))
                }, t
            }(a.Component),
            Z = n("Cfz3"),
            $ = {
                "data-test-selector": "login"
            },
            ee = {
                "data-test-selector": "empty"
            },
            te = {
                "data-test-selector": "loading"
            },
            ne = {
                "data-test-selector": "error"
            };
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
        }(Y || (Y = {}));
        var re = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        editableChannels: [],
                        requestState: Y.Loading
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return this.state.requestState === Y.Loading ? a.createElement("div", o.__assign({}, te), "Loading...") : this.state.requestState === Y.Error ? a.createElement("div", o.__assign({}, ne), "'Error'") : this.state.requestState === Y.Success ? 0 === this.state.editableChannels.length ? a.createElement(_._8, o.__assign({
                        display: _.R.Flex,
                        flexDirection: _.T.Column,
                        alignItems: _.c.Center,
                        alignContent: _.b.Center,
                        justifyContent: _._7.Center,
                        fullHeight: !0
                    }, ee), a.createElement(_._8, {
                        padding: {
                            bottom: .5
                        }
                    }, a.createElement(_.m, {
                        src: "https://static-cdn.jtvnw.net/emoticons/v1/58127/2.0",
                        alt: "CoolCat",
                        size: 50
                    })), a.createElement(_.Q, {
                        color: _.K.OverlayAlt,
                        fontSize: _.V.Size5
                    }, Object(i.d)("No channels to display", "DashboardPermissionsPage"))) : a.createElement(a.Fragment, null, this.state.editableChannels.map(function(e) {
                        return a.createElement(_._35, {
                            key: e.id,
                            alignItems: _.c.Center,
                            borderBottom: !0,
                            display: _.R.Flex,
                            justifyContent: _._7.Between,
                            padding: {
                                bottom: 1
                            }
                        }, a.createElement(_._8, {
                            display: _.R.Flex,
                            alignItems: _.c.Center
                        }, a.createElement(_.m, {
                            alt: e.login,
                            size: 30,
                            src: Object(A.c)(e.id, 30)
                        }), a.createElement(_._8, {
                            margin: {
                                left: 1
                            }
                        }, a.createElement(_.Q, o.__assign({}, $), e.login))), a.createElement(_._8, null, a.createElement(_._8, {
                            margin: {
                                right: 1
                            },
                            display: _.R.InlineFlex
                        }, a.createElement(_.v, {
                            type: _.B.Hollow
                        }, "Whisper")), a.createElement(_.v, {
                            linkTo: "/" + e.login + "/dashboard",
                            type: _.B.Text
                        }, Object(i.d)("Dashboard", "DashboardPermissionPage"))))
                    })) : void 0
                }, t.prototype.componentDidMount = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return o.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, Object(Z.a)(this.props.user.id)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        editableChannels: e,
                                        requestState: Y.Success
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.setState({
                                        requestState: Y.Error
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t
            }(a.Component),
            oe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(c.a, null, a.createElement(_._58, null, a.createElement(_._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement("p", null, Object(i.d)("As an editor, you can access a channel's Dashboard to help the owner manage the following activities:", "DashboardPermissionsPage"))), a.createElement("ul", null, a.createElement("li", null, Object(i.d)("Editing stream info", "DashboardPermissionsPage")), a.createElement("li", null, Object(i.d)("Running commercial breaks", "DashboardPermissionPage")), a.createElement("li", null, Object(i.d)("Editing video info", "DashboardPermissionsPage")), a.createElement("li", null, Object(i.d)("Uploading videos", "DashboardPermissionsPage")), a.createElement("li", null, Object(i.d)("Creating events", "DashboardPermissionsPage")), a.createElement("li", null, Object(i.d)("Starting Vodcasts", "DashboardPermissionsPage")))))
                }, t
            }(a.Component),
            ae = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.children,
                        n = e.className;
                    return a.createElement(_._35, {
                        background: _.n.Base,
                        className: n,
                        elevation: 1,
                        padding: 2,
                        flexGrow: 1
                    }, t)
                }, t
            }(a.Component),
            ie = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(_._8, {
                        alignItems: _.c.Center,
                        display: _.R.Flex,
                        margin: {
                            bottom: 2
                        },
                        justifyContent: _._7.Between
                    }, this.props.children)
                }, t
            }(a.Component),
            se = (n("3/8U"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    i.o.setPageTitle(Object(i.d)("Permissions", "DashboardPermissionsPage"))
                }, t.prototype.render = function() {
                    return a.createElement(s.b, {
                        name: "twilight_dashboard_permissions",
                        isStaff: this.props.isStaff
                    }, a.createElement(l.a, null, a.createElement(_._8, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(_.Q, {
                        bold: !0,
                        color: _.K.Alt,
                        fontSize: _.V.Size4,
                        type: _._49.H5
                    }, Object(i.d)("Editors", "DashboardPermissionsPage"))), a.createElement(_._8, {
                        display: _.R.Flex
                    }, a.createElement(ae, null, a.createElement(ie, null, a.createElement(_._8, {
                        alignItems: _.c.Center,
                        display: _.R.Flex
                    }, a.createElement(_.Q, {
                        bold: !0,
                        color: _.K.Alt,
                        fontSize: _.V.Size5
                    }, Object(i.d)("Channels you can manage", "DashboardPermissionsPage")), a.createElement(oe, null)), a.createElement(_.O, {
                        to: "/dashboard/" + this.props.channelName
                    }, Object(i.d)("Go to your Channel", "DashboardPermissionsPage"))), this.props.user && a.createElement(re, {
                        user: this.props.user
                    })), a.createElement(ae, null, a.createElement(ie, null, a.createElement(_._8, {
                        alignItems: _.c.Center,
                        display: _.R.Flex
                    }, a.createElement(_.Q, {
                        bold: !0,
                        color: _.K.Alt,
                        fontSize: _.V.Size5
                    }, Object(i.d)("People who can manage your channel", "DashboardPermissionsPage")), a.createElement(X, null))), this.props.user && a.createElement(J, {
                        user: this.props.user
                    }))), a.createElement(_._8, {
                        margin: {
                            bottom: 2,
                            top: 4
                        }
                    }, a.createElement(_.Q, {
                        bold: !0,
                        color: _.K.Alt,
                        fontSize: _.V.Size4,
                        type: _._49.H5
                    }, Object(i.d)("Authorized Streamers", "DashboardPermissionsPage"))), a.createElement(ae, {
                        className: "authorized-streamers-panel"
                    }, a.createElement(ie, null, a.createElement(_._8, {
                        alignItems: _.c.Center,
                        display: _.R.Flex
                    }, a.createElement(_.Q, {
                        bold: !0,
                        color: _.K.Alt,
                        fontSize: _.V.Size5
                    }, Object(i.d)("People who can stream to your channel", "PermissionsAuthorizedStreamers")), a.createElement(c.a, null, Object(i.d)("When you invite someone to stream to your channel, we'll send them a new stream key and instructions.", "PermissionsAuthorizedStreamers")))), this.props.user && a.createElement(F, {
                        user: this.props.user
                    }))))
                }, t
            }(a.Component)),
            le = n("3zLD"),
            ce = n("RH2O"),
            de = n("j7/Y"),
            ue = n("w9tK"),
            me = n("vH/s"),
            he = n("Aj/L"),
            pe = n("CSlQ");
        var Ee = Object(le.compose)(Object(pe.d)("PermissionsPage", {
            destination: ue.a.DashboardPermissions,
            autoReportInteractive: !0
        }), Object(de.a)({
            location: me.PageviewLocation.DashboardPermissions
        }), Object(ce.b)(function(e) {
            var t = Object(he.c)(e);
            return {
                isStaff: t && t.roles && t.roles.isStaff,
                user: t
            }
        }))(se);
        n.d(t, "PermissionsPageComponent", function() {
            return se
        }), n.d(t, "PermissionsPage", function() {
            return Ee
        })
    },
    Cfz3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var r = n("TToO"),
            o = n("9u8h"),
            a = this,
            i = function(e) {
                return r.__awaiter(a, void 0, void 0, function() {
                    return r.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, o.a.getOrThrow("https://api.twitch.tv/v5/permissions/channels/" + e + "/editable_channels")];
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
            o = n("GiK3"),
            a = n("RH2O"),
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
        var d = Object(a.b)(null, function(e) {
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
            o = n("GiK3"),
            a = n("Odds"),
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
                    return o.createElement("div", {
                        onMouseEnter: this.handleHover,
                        onMouseLeave: this.handleHover
                    }, o.createElement(a._35, {
                        display: a.R.Flex,
                        padding: {
                            x: 1
                        },
                        position: a._15.Relative
                    }, o.createElement(a._35, {
                        className: "hoverable-icon",
                        display: a.R.InlineFlex,
                        color: a.K.Alt2,
                        alignItems: a.c.Center,
                        justifyContent: a._7.Center
                    }, o.createElement(a._24, {
                        asset: a._25.NotificationInfo,
                        width: 16,
                        height: 16
                    })), o.createElement(a.q, {
                        show: this.state.isHovered,
                        direction: n,
                        offsetX: "1rem"
                    }, o.createElement(a._8, {
                        padding: {
                            x: 1,
                            y: 1
                        }
                    }, t))))
                }, t.defaultProps = {
                    direction: a.r.Bottom
                }, t
            }(o.Component));
        n.d(t, "a", function() {
            return i
        })
    }
});
//# sourceMappingURL=pages.dashboard-permissions-aadb8fd5409309a85165fad4a106f70c.js.map