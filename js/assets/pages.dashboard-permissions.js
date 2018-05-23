webpackJsonp([113], {
    "8uM1": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, i = n("TToO"),
            o = n("GiK3"),
            a = n("CIox"),
            s = n("6sO2"),
            l = n("QRuM"),
            c = n("RGTy"),
            d = n("pK/l"),
            u = n("6BvN"),
            m = n("UWcj"),
            h = n("jnhC"),
            p = n("Odds"),
            E = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.children,
                        n = e.className;
                    return o.createElement(p._35, {
                        background: p.n.Base,
                        className: n,
                        elevation: 1,
                        padding: 2,
                        flexGrow: 1,
                        fullHeight: !0,
                        fullWidth: !0
                    }, t)
                }, t
            }(o.Component),
            f = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(p._8, {
                        alignItems: p.c.Center,
                        display: p.R.Flex,
                        margin: {
                            bottom: 2
                        },
                        justifyContent: p._7.Between
                    }, this.props.children)
                }, t
            }(o.Component),
            _ = n("+8VM"),
            g = n("PGY2"),
            S = this,
            b = function(e, t) {
                return i.__awaiter(S, void 0, void 0, function() {
                    var n;
                    return i.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, Object(g.c)({
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
            v = function(e, t) {
                return i.__awaiter(S, void 0, void 0, function() {
                    var n;
                    return i.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, Object(g.c)({
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
            y = (n("YSdj"), {
                "data-test-selector": "cancel-button"
            }),
            C = {
                "data-test-selector": "close-button"
            },
            z = {
                "data-test-selector": "remove-button"
            };
        ! function(e) {
            e[e.Pending = 0] = "Pending", e[e.InFlight = 1] = "InFlight", e[e.Failed = 2] = "Failed", e[e.Success = 3] = "Success"
        }(r || (r = {}));
        var j, P, w = function(e) {
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
                                        }), [4, v(this.props.channelID, this.props.email)];
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
                    var e = o.createElement(o.Fragment, null, o.createElement(p._35, {
                            borderBottom: !0
                        }, o.createElement(p._8, {
                            padding: {
                                y: 2
                            }
                        }, o.createElement(p.Q, {
                            color: p.K.Alt2
                        }, Object(s.d)("Failed to remove authorized streamer. Try again.", "PermissionsRemoveAuthorizedStreamerConfirmation")))), o.createElement(p._8, {
                            display: p.R.Flex,
                            justifyContent: p._7.Center,
                            padding: {
                                top: 2
                            }
                        }, o.createElement(p._8, {
                            margin: {
                                x: 1
                            }
                        }, o.createElement(p.v, i.__assign({}, C, {
                            onClick: this.props.onClose
                        }), Object(s.d)("Close", "PermissionsRemoveAuthorizedStreamerConfirmation"))))),
                        t = o.createElement(o.Fragment, null, o.createElement(p._8, null, o.createElement(p._8, {
                            display: p.R.Flex,
                            justifyContent: p._7.Center,
                            padding: {
                                y: 2
                            }
                        }, o.createElement(p.Q, {
                            color: p.K.Alt2
                        }, this.props.email))), o.createElement(p._35, {
                            background: p.n.Alt,
                            display: p.R.Flex,
                            justifyContent: p._7.Center,
                            padding: 2
                        }, o.createElement(p._8, {
                            margin: {
                                x: 1
                            }
                        }, o.createElement(p.v, i.__assign({}, y, {
                            onClick: this.props.onClose,
                            type: p.B.Hollow
                        }), Object(s.d)("No, Keep Them", "PermissionsRemoveAuthorizedStreamerConfirmation"))), o.createElement(p._8, {
                            margin: {
                                x: 1
                            }
                        }, o.createElement(p.v, i.__assign({}, z, {
                            disabled: this.state.requestState === r.InFlight,
                            onClick: this.onClickRemove
                        }), Object(s.d)("Yes, Remove Them", "PermissionsRemoveAuthorizedStreamerConfirmation")))));
                    return o.createElement(p._35, {
                        background: p.n.Base,
                        elevation: 3,
                        className: "remove-streamer-modal"
                    }, o.createElement(p._35, {
                        borderBottom: !0,
                        padding: 2,
                        display: p.R.Flex,
                        justifyContent: p._7.Center
                    }, o.createElement(p.Q, {
                        bold: !0,
                        fontSize: p.V.Size4
                    }, Object(s.d)("Remove This Authorized Streamer?", "PermissionsRemoveAuthorizedStreamerConfirmation"))), this.state.requestState === r.Failed ? e : t, o.createElement(_.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(o.Component),
            O = (n("RYKF"), {
                "data-test-selector": "email"
            }),
            x = {
                "data-test-selector": "send"
            },
            R = {
                "data-test-selector": "remove"
            },
            A = {
                "data-test-selector": "empty"
            },
            F = {
                "data-test-selector": "loading"
            },
            T = {
                "data-test-selector": "error"
            },
            D = {
                "data-test-selector": "not-found"
            };
        ! function(e) {
            e[e.Waiting = 0] = "Waiting", e[e.Error = 1] = "Error", e[e.NotFound = 2] = "NotFound", e[e.Success = 3] = "Success"
        }(j || (j = {})),
        function(e) {
            e[e.Loading = 0] = "Loading", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
        }(P || (P = {}));
        var I, k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        authorizedStreamers: [],
                        emailAddress: "",
                        inviteState: j.Waiting,
                        requestState: P.Loading
                    }, t.updateAuthorizedStreamers = function(e) {
                        t.setState({
                            authorizedStreamers: e
                        })
                    }, t.handleEmailAddressChange = function(e) {
                        t.setState({
                            emailAddress: e.currentTarget.value
                        })
                    }, t.handleKeyDown = function(e) {
                        e.keyCode === u.a.Enter && t.sendInvite(t.state.emailAddress)
                    }, t.sendInvite = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.setState({
                                            inviteState: j.Waiting
                                        }), e.length > 0 ? [4, b(this.props.user.id, e)] : [3, 2];
                                    case 1:
                                        (t = n.sent()).isNotFound ? this.setState({
                                            inviteState: j.NotFound
                                        }) : t.isError ? this.setState({
                                            inviteState: j.Error
                                        }) : this.setState({
                                            authorizedStreamers: t.authorizedStreamers,
                                            emailAddress: "",
                                            inviteState: j.Success
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
                                        return [4, b(this.props.user.id, e)];
                                    case 1:
                                        return (t = n.sent()).isError || this.setState({
                                            authorizedStreamers: t.authorizedStreamers
                                        }), [2]
                                }
                            })
                        })
                    }, t.isEmpty = function() {
                        return t.state.requestState === P.Success && 0 === t.state.authorizedStreamers.length
                    }, t.renderSuccess = function() {
                        var e = o.createElement(p._8, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(p._8, {
                            display: p.R.Flex,
                            flexGrow: 1
                        }, o.createElement(p._8, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, o.createElement(p._4, {
                            type: p._5.Text,
                            onChange: t.handleEmailAddressChange,
                            onKeyDown: t.handleKeyDown,
                            value: t.state.emailAddress,
                            placeholder: Object(s.d)("Enter an email address", "PermissionsAuthorizedStreamers")
                        })), o.createElement(p._8, null, o.createElement(p.v, i.__assign({}, x, {
                            onClick: function() {
                                return t.sendInvite(t.state.emailAddress)
                            }
                        }), Object(s.d)("Send Invite", "PermissionsAuthorizedStreamers")))), t.state.inviteState === j.NotFound && o.createElement(p.Q, i.__assign({}, D, {
                            color: p.K.Error,
                            fontSize: p.V.Size7
                        }), Object(s.d)("That email address isn't linked to a Twitch account. Make sure the email is linked to a Twitch account.", "PermissionsAuthorizedStreamers")));
                        return o.createElement(o.Fragment, null, e, t.isEmpty() ? o.createElement(p._8, i.__assign({
                            display: p.R.Flex,
                            flexDirection: p.T.Column,
                            alignItems: p.c.Center,
                            alignContent: p.b.Center,
                            justifyContent: p._7.Center,
                            padding: {
                                y: 5
                            }
                        }, A), o.createElement(p._8, {
                            padding: {
                                bottom: .5
                            }
                        }, o.createElement(p.m, {
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/58127/2.0",
                            alt: "CoolCat",
                            size: 50
                        })), o.createElement(p.Q, {
                            color: p.K.Alt2,
                            fontSize: p.V.Size5
                        }, Object(s.d)("No authorized streamers to display", "PermissionsAuthorizedStreamers"))) : t.state.authorizedStreamers.map(function(e, n) {
                            return o.createElement(p._35, {
                                key: n,
                                alignItems: p.c.Center,
                                borderBottom: !0,
                                display: p.R.Flex,
                                justifyContent: p._7.Between,
                                padding: {
                                    bottom: 1,
                                    top: 1
                                }
                            }, o.createElement(p._8, {
                                display: p.R.Flex,
                                alignItems: p.c.Center
                            }, o.createElement(p._8, {
                                margin: {
                                    left: 1
                                }
                            }, o.createElement(p.Q, i.__assign({}, O), e.email))), o.createElement(p._8, null, o.createElement(p._8, {
                                margin: {
                                    right: 1
                                },
                                display: p.R.InlineFlex
                            }, o.createElement(p.v, {
                                type: p.B.Hollow,
                                onClick: function() {
                                    return t.resendInvite(e.email)
                                }
                            }, Object(s.d)("Resend Invite", "PermissionsAuthorizedStreamersRow"))), o.createElement(m.a, {
                                triggerModal: function(n) {
                                    return o.createElement(w, {
                                        channelID: t.props.user.id,
                                        email: e.email,
                                        onClose: n,
                                        onSuccess: t.updateAuthorizedStreamers
                                    })
                                }
                            }, function(e) {
                                return o.createElement(p.v, i.__assign({
                                    type: p.B.Text,
                                    onClick: e
                                }, R), Object(s.d)("Remove", "PermissionsAuthorizedStreamersRow"))
                            })))
                        }))
                    }, t.renderError = function() {
                        return o.createElement(p._8, i.__assign({
                            display: p.R.Flex,
                            flexDirection: p.T.Column,
                            alignItems: p.c.Center,
                            alignContent: p.b.Center,
                            justifyContent: p._7.Center,
                            padding: {
                                top: 5,
                                right: 0,
                                bottom: 5,
                                left: 0
                            }
                        }, T), o.createElement(p._8, {
                            padding: {
                                top: 5,
                                bottom: .5
                            }
                        }, o.createElement(p.m, {
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/86/2.0",
                            alt: "BibleThump",
                            size: 50
                        })), o.createElement(p.Q, {
                            color: p.K.Alt2,
                            fontSize: p.V.Size5
                        }, Object(s.d)("An error occurred while loading authorized streamers for your channel.", "DashboardPermissionsPage")))
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.user && this.state.requestState !== P.Loading ? o.createElement(E, {
                        className: "authorized-streamers-panel"
                    }, o.createElement(f, null, o.createElement(p._8, {
                        alignItems: p.c.Center,
                        display: p.R.Flex
                    }, o.createElement(p.Q, {
                        bold: !0,
                        color: p.K.Alt,
                        fontSize: p.V.Size5
                    }, Object(s.d)("People who can stream to your channel", "PermissionsAuthorizedStreamers")), o.createElement(h.a, {
                        size: p.s.Medium
                    }, Object(s.d)("When you invite someone to stream to your channel, we'll send them a new stream key and instructions.", "PermissionsAuthorizedStreamers")))), this.state.requestState === P.Success ? this.renderSuccess() : this.renderError()) : o.createElement(p._14, i.__assign({}, F, {
                        height: 300,
                        width: 533
                    }))
                }, t.prototype.componentWillMount = function() {
                    this.fetchAuthorizedStreamers()
                }, t.prototype.componentDidUpdate = function(e) {
                    this.props.user && this.props.channelName !== e.channelName && this.fetchAuthorizedStreamers()
                }, t.prototype.fetchAuthorizedStreamers = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.user ? [4, (n = this.props.user.id, i.__awaiter(S, void 0, void 0, function() {
                                        var e;
                                        return i.__generator(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, Object(g.c)({
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
                                    }))] : [2];
                                case 1:
                                    return (e = t.sent()).isError ? this.setState({
                                        requestState: P.Error
                                    }) : this.setState({
                                        authorizedStreamers: e.authorizedStreamers,
                                        requestState: P.Success
                                    }), [2]
                            }
                            var n
                        })
                    })
                }, t
            }(o.Component),
            Q = n("5s0/"),
            K = n("m4HT"),
            N = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(h.a, {
                        size: p.s.Medium
                    }, o.createElement(p._8, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(p.Q, {
                        fontSize: p.V.Size6,
                        type: p._49.P
                    }, Object(s.d)("Editors can access your channel's Dashboard to help you manage the following activities:", "ChannelEditorsTooltip"))), o.createElement(p._58, null, o.createElement("ul", null, o.createElement("li", null, o.createElement(p.Q, {
                        fontSize: p.V.Size6,
                        type: p._49.P
                    }, Object(s.d)("Editing stream info", "ChannelEditorsTooltip"))), o.createElement("li", null, o.createElement(p.Q, {
                        fontSize: p.V.Size6,
                        type: p._49.P
                    }, Object(s.d)("Running commercial breaks", "ChannelEditorsTooltip"))), o.createElement("li", null, o.createElement(p.Q, {
                        fontSize: p.V.Size6,
                        type: p._49.P
                    }, Object(s.d)("Editing video info", "ChannelEditorsTooltip"))), o.createElement("li", null, o.createElement(p.Q, {
                        fontSize: p.V.Size6,
                        type: p._49.P
                    }, Object(s.d)("Uploading videos", "ChannelEditorsTooltip"))), o.createElement("li", null, o.createElement(p.Q, {
                        fontSize: p.V.Size6,
                        type: p._49.P
                    }, Object(s.d)("Creating events", "ChannelEditorsTooltip"))), o.createElement("li", null, o.createElement(p.Q, {
                        fontSize: p.V.Size6,
                        type: p._49.P
                    }, Object(s.d)("Starting Vodcasts", "ChannelEditorsTooltip"))))))
                }, t
            }(o.Component),
            V = n("puy8"),
            L = function(e) {
                return e.profile_image && e.profile_image["50x50"] ? e.profile_image["50x50"].url : Object(V.c)(e.id, 50)
            },
            M = (n("Wvrm"), {
                "data-test-selector": "confirm-remove-editor"
            }),
            q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleRemoveEditor = function() {
                        var e = t.props,
                            n = e.onClose;
                        (0, e.onRemoveEditor)(), n()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.channel;
                    return o.createElement(p._35, {
                        background: p.n.Base,
                        elevation: 3,
                        className: "remove-editor-confirmation"
                    }, o.createElement(p._35, {
                        borderBottom: !0,
                        padding: 2,
                        display: p.R.Flex,
                        justifyContent: p._7.Center
                    }, o.createElement(p.Q, {
                        bold: !0,
                        fontSize: p.V.Size4
                    }, Object(s.d)("Remove This Editor?", "PermissionsRemoveEditorConfirmation"))), o.createElement(p._8, null, o.createElement(p._8, {
                        display: p.R.Flex,
                        alignItems: p.c.Center,
                        flexDirection: p.T.Column,
                        justifyContent: p._7.Center,
                        padding: {
                            y: 2
                        }
                    }, o.createElement(p.m, {
                        alt: e.login,
                        size: 50,
                        src: L(e)
                    }), o.createElement(p._8, {
                        margin: {
                            top: 1
                        }
                    }, o.createElement(p.Q, {
                        color: p.K.Alt2,
                        fontSize: p.V.Size5
                    }, e.login)))), o.createElement(p._35, {
                        background: p.n.Alt,
                        display: p.R.Flex,
                        justifyContent: p._7.Center,
                        padding: 2
                    }, o.createElement(p._8, {
                        margin: {
                            x: 1
                        }
                    }, o.createElement(p.v, {
                        onClick: this.props.onClose,
                        type: p.B.Hollow
                    }, Object(s.d)("No, Keep Editor", "PermissionsRemoveEditorConfirmation"))), o.createElement(p._8, {
                        margin: {
                            x: 1
                        }
                    }, o.createElement(p.v, i.__assign({}, M, {
                        onClick: this.handleRemoveEditor
                    }), Object(s.d)("Yes, Remove Editor", "PermissionsRemoveEditorConfirmation")))), o.createElement(_.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(o.Component),
            B = n("9u8h"),
            H = this,
            W = function(e) {
                var t = e.channelID,
                    n = e.editorLogin;
                return i.__awaiter(H, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, B.a.postOrThrow("https://api.twitch.tv/v5/permissions/channels/" + t + "/editors", {
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
            G = this,
            Y = this,
            U = function(e) {
                var t = e.channelID,
                    n = e.editorID;
                return i.__awaiter(Y, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, B.a.deleteOrThrow("https://api.twitch.tv/v5/permissions/channels/" + t + "/editors/" + n)];
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                })
            },
            Z = {
                "data-test-selector": "login"
            },
            J = {
                "data-test-selector": "empty"
            },
            X = {
                "data-test-selector": "loading"
            },
            $ = {
                "data-test-selector": "error"
            },
            ee = {
                "data-test-selector": "add-editor"
            },
            te = {
                "data-test-selector": "add-editor-input"
            },
            ne = {
                "data-test-selector": "add-editor-error"
            },
            re = {
                "data-test-selector": "remove-editor"
            };
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
        }(I || (I = {}));
        var ie, oe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        channelEditors: [],
                        editorLogin: "",
                        requestState: I.Loading
                    }, t.handleRemoveEditor = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return i.__generator(this, function(n) {
                                return U({
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
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), this.setState({
                                            addEditorRequestState: I.Loading
                                        }), [4, W({
                                            channelID: this.props.user.id,
                                            editorLogin: e
                                        })];
                                    case 1:
                                        return t = n.sent(), this.setState(function(e) {
                                            return {
                                                addEditorRequestState: I.Success,
                                                channelEditors: e.channelEditors.concat([t]),
                                                editorLogin: ""
                                            }
                                        }), [3, 3];
                                    case 2:
                                        return n.sent(), this.setState({
                                            addEditorRequestState: I.Error
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
                        e.keyCode === u.a.Enter && t.handleAddEditor(t.state.editorLogin)
                    }, t.renderAddEditorForm = function() {
                        return o.createElement(p._8, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(p._8, {
                            display: p.R.Flex
                        }, o.createElement(p._8, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, o.createElement(p._4, i.__assign({}, te, {
                            type: p._5.Text,
                            placeholder: Object(s.d)("Add an editor", "ChannelEditors"),
                            onChange: t.handleEditorLoginChange,
                            onKeyDown: t.handleKeyDown,
                            value: t.state.editorLogin
                        }))), o.createElement(p.v, i.__assign({}, ee, {
                            onClick: function() {
                                return t.handleAddEditor(t.state.editorLogin)
                            }
                        }), Object(s.d)("Add", "ChannelEditors"))), t.state.addEditorRequestState === I.Error && o.createElement(p.Q, i.__assign({
                            color: p.K.Error,
                            fontSize: p.V.Size7
                        }, ne), Object(s.d)("Failed to add editor. Try again.", "PermissionsChannelEditors")))
                    }, t.isEmpty = function() {
                        return t.state.requestState === I.Success && 0 === t.state.channelEditors.length
                    }, t.renderSuccess = function() {
                        return o.createElement(o.Fragment, null, t.renderAddEditorForm(), t.isEmpty() ? o.createElement(p._8, i.__assign({
                            display: p.R.Flex,
                            flexDirection: p.T.Column,
                            alignItems: p.c.Center,
                            alignContent: p.b.Center,
                            justifyContent: p._7.Center,
                            padding: {
                                y: 5
                            }
                        }, J), o.createElement(p._8, {
                            padding: {
                                bottom: .5
                            }
                        }, o.createElement(p.m, {
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/58127/2.0",
                            alt: "CoolCat",
                            size: 50
                        })), o.createElement(p.Q, {
                            color: p.K.Alt2,
                            fontSize: p.V.Size5
                        }, Object(s.d)("No editors to display", "PermissionsChannelEditors"))) : t.state.channelEditors.map(function(e) {
                            return o.createElement(p._35, {
                                key: e.id,
                                alignItems: p.c.Center,
                                borderBottom: !0,
                                display: p.R.Flex,
                                justifyContent: p._7.Between,
                                padding: {
                                    bottom: 1,
                                    top: 1
                                }
                            }, o.createElement(p._8, {
                                display: p.R.Flex,
                                alignItems: p.c.Center
                            }, o.createElement(p.m, {
                                alt: e.login,
                                size: 30,
                                src: L(e)
                            }), o.createElement(p._8, {
                                margin: {
                                    left: 1
                                }
                            }, o.createElement(p.Q, i.__assign({}, Z), e.login))), o.createElement(p._8, null, o.createElement(p._8, {
                                margin: {
                                    right: 1
                                },
                                display: p.R.InlineFlex
                            }, o.createElement(Q.a, {
                                buttonType: p.B.Hollow,
                                isPopout: !1,
                                threadID: Object(K.a)(t.props.user.id, e.id)
                            })), o.createElement(m.a, {
                                triggerModal: function(n) {
                                    return o.createElement(q, {
                                        channel: e,
                                        onClose: n,
                                        onRemoveEditor: function() {
                                            return t.handleRemoveEditor(e)
                                        }
                                    })
                                }
                            }, function(e) {
                                return o.createElement(p.v, i.__assign({}, re, {
                                    onClick: e,
                                    type: p.B.Text
                                }), Object(s.d)("Remove", "PermissionsChannelEditors"))
                            })))
                        }))
                    }, t.renderError = function() {
                        return o.createElement(p._8, i.__assign({
                            display: p.R.Flex,
                            flexDirection: p.T.Column,
                            alignItems: p.c.Center,
                            alignContent: p.b.Center,
                            justifyContent: p._7.Center,
                            padding: {
                                top: 5,
                                right: 0,
                                bottom: 5,
                                left: 0
                            }
                        }, $), o.createElement(p._8, {
                            padding: {
                                top: 5,
                                bottom: .5
                            }
                        }, o.createElement(p.m, {
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/86/2.0",
                            alt: "BibleThump",
                            size: 50
                        })), o.createElement(p.Q, {
                            color: p.K.Alt2,
                            fontSize: p.V.Size5
                        }, Object(s.d)("An error occurred while loading people who can manage your channel.", "DashboardPermissionsPage")))
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.user && this.state.requestState !== I.Loading ? o.createElement(E, null, o.createElement(f, null, o.createElement(p._8, {
                        alignItems: p.c.Center,
                        display: p.R.Flex
                    }, o.createElement(p.Q, {
                        bold: !0,
                        color: p.K.Alt,
                        fontSize: p.V.Size5
                    }, Object(s.d)("People who can manage your channel", "DashboardPermissionsPage")), o.createElement(N, null))), this.state.requestState === I.Success ? this.renderSuccess() : this.renderError()) : o.createElement(p._14, i.__assign({}, X, {
                        height: 300,
                        width: 533
                    }))
                }, t.prototype.componentWillMount = function() {
                    this.fetchChannelEditors()
                }, t.prototype.componentDidUpdate = function(e) {
                    this.props.user && this.props.channelName !== e.channelName && this.fetchChannelEditors()
                }, t.prototype.fetchChannelEditors = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!this.props.user) return [2];
                                    t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, , 4]), [4, (n = this.props.user.id, i.__awaiter(G, void 0, void 0, function() {
                                        return i.__generator(this, function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, B.a.getOrThrow("https://api.twitch.tv/v5/permissions/channels/" + n + "/editors")];
                                                case 1:
                                                    return [2, e.sent().body.editors || []]
                                            }
                                        })
                                    }))];
                                case 2:
                                    return e = t.sent(), this.setState({
                                        channelEditors: e,
                                        requestState: I.Success
                                    }), [3, 4];
                                case 3:
                                    return t.sent(), this.setState({
                                        requestState: I.Error
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                            var n
                        })
                    })
                }, t
            }(o.Component),
            ae = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(h.a, {
                        size: p.s.Medium
                    }, o.createElement(p._8, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(p.Q, {
                        fontSize: p.V.Size6,
                        type: p._49.P
                    }, Object(s.d)("As an editor, you can access a channel's Dashboard to help the owner manage the following activities:", "DashboardPermissionsPage"))), o.createElement(p._58, null, o.createElement("ul", null, o.createElement("li", null, o.createElement(p.Q, {
                        fontSize: p.V.Size6,
                        type: p._49.P
                    }, Object(s.d)("Editing stream info", "DashboardPermissionsPage"))), o.createElement("li", null, o.createElement(p.Q, {
                        fontSize: p.V.Size6,
                        type: p._49.P
                    }, Object(s.d)("Running commercial breaks", "DashboardPermissionPage"))), o.createElement("li", null, o.createElement(p.Q, {
                        fontSize: p.V.Size6,
                        type: p._49.P
                    }, Object(s.d)("Editing video info", "DashboardPermissionsPage"))), o.createElement("li", null, o.createElement(p.Q, {
                        fontSize: p.V.Size6,
                        type: p._49.P
                    }, Object(s.d)("Uploading videos", "DashboardPermissionsPage"))), o.createElement("li", null, o.createElement(p.Q, {
                        fontSize: p.V.Size6,
                        type: p._49.P
                    }, Object(s.d)("Creating events", "DashboardPermissionsPage"))), o.createElement("li", null, o.createElement(p.Q, {
                        fontSize: p.V.Size6,
                        type: p._49.P
                    }, Object(s.d)("Starting Vodcasts", "DashboardPermissionsPage"))))))
                }, t
            }(o.Component),
            se = n("Cfz3"),
            le = {
                "data-test-selector": "login"
            },
            ce = {
                "data-test-selector": "empty"
            },
            de = {
                "data-test-selector": "loading"
            },
            ue = {
                "data-test-selector": "error"
            };
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
        }(ie || (ie = {}));
        var me = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        editableChannels: [],
                        requestState: ie.Loading
                    }, t.isEmpty = function() {
                        return t.state.requestState === ie.Success && 0 === t.state.editableChannels.length
                    }, t.renderSuccess = function() {
                        return t.isEmpty() ? o.createElement(p._8, i.__assign({
                            display: p.R.Flex,
                            flexDirection: p.T.Column,
                            alignItems: p.c.Center,
                            alignContent: p.b.Center,
                            justifyContent: p._7.Center,
                            padding: {
                                top: 5,
                                right: 0,
                                bottom: 5,
                                left: 0
                            }
                        }, ce), o.createElement(p._8, {
                            padding: {
                                top: 5,
                                bottom: .5
                            }
                        }, o.createElement(p.m, {
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/58127/2.0",
                            alt: "CoolCat",
                            size: 50
                        })), o.createElement(p.Q, {
                            color: p.K.Alt2,
                            fontSize: p.V.Size5
                        }, Object(s.d)("No channels to display", "DashboardPermissionsPage"))) : t.state.editableChannels.map(function(e) {
                            return o.createElement(p._35, {
                                key: e.id,
                                alignItems: p.c.Center,
                                borderBottom: !0,
                                display: p.R.Flex,
                                justifyContent: p._7.Between,
                                padding: {
                                    bottom: 1,
                                    top: 1
                                }
                            }, o.createElement(p._8, {
                                display: p.R.Flex,
                                alignItems: p.c.Center
                            }, o.createElement(p.m, {
                                alt: e.login,
                                size: 30,
                                src: L(e)
                            }), o.createElement(p._8, {
                                margin: {
                                    left: 1
                                }
                            }, o.createElement(p.Q, i.__assign({}, le), e.login))), o.createElement(p._8, null, o.createElement(p._8, {
                                margin: {
                                    right: 1
                                },
                                display: p.R.InlineFlex
                            }, o.createElement(Q.a, {
                                buttonType: p.B.Hollow,
                                threadID: Object(K.a)(t.props.user.id, e.id),
                                isPopout: !1
                            })), o.createElement(p.v, {
                                linkTo: "/" + e.login + "/dashboard",
                                type: p.B.Text
                            }, Object(s.d)("Dashboard", "DashboardPermissionPage"))))
                        })
                    }, t.renderError = function() {
                        return o.createElement(p._8, i.__assign({
                            display: p.R.Flex,
                            flexDirection: p.T.Column,
                            alignItems: p.c.Center,
                            alignContent: p.b.Center,
                            justifyContent: p._7.Center,
                            padding: {
                                top: 5,
                                right: 0,
                                bottom: 5,
                                left: 0
                            }
                        }, ue), o.createElement(p._8, {
                            padding: {
                                top: 5,
                                bottom: .5
                            }
                        }, o.createElement(p.m, {
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/86/2.0",
                            alt: "BibleThump",
                            size: 50
                        })), o.createElement(p.Q, {
                            color: p.K.Alt2,
                            fontSize: p.V.Size5
                        }, Object(s.d)("An error occured while loading channels you can manage.", "DashboardPermissionsPage")))
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.user && this.state.requestState !== ie.Loading ? o.createElement(E, null, o.createElement(f, null, o.createElement(p._8, {
                        alignItems: p.c.Center,
                        display: p.R.Flex
                    }, o.createElement(p.Q, {
                        bold: !0,
                        color: p.K.Alt,
                        fontSize: p.V.Size5
                    }, Object(s.d)("Channels you can manage", "DashboardPermissionsPage")), o.createElement(ae, null)), o.createElement(p.O, {
                        to: "/" + this.props.channelName
                    }, Object(s.d)("Go to your Channel", "DashboardPermissionsPage"))), this.state.requestState === ie.Success ? this.renderSuccess() : this.renderError()) : o.createElement(p._14, i.__assign({}, de, {
                        height: 300,
                        width: 533
                    }))
                }, t.prototype.componentWillMount = function() {
                    this.fetchEditableChannels()
                }, t.prototype.componentDidUpdate = function(e) {
                    this.props.user && this.props.channelName !== e.channelName && this.fetchEditableChannels()
                }, t.prototype.fetchEditableChannels = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!this.props.user) return [2];
                                    t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, , 4]), [4, Object(se.a)(this.props.user.id)];
                                case 2:
                                    return e = t.sent(), this.setState({
                                        editableChannels: e,
                                        requestState: ie.Success
                                    }), [3, 4];
                                case 3:
                                    return t.sent(), this.setState({
                                        requestState: ie.Error
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t
            }(o.Component),
            he = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    s.o.setPageTitle(Object(s.d)("Permissions", "DashboardPermissionsPage"))
                }, t.prototype.render = function() {
                    return this.props.user && this.props.user.login !== this.props.match.params.channelName ? o.createElement(a.b, {
                        to: "/" + this.props.user.login + "/dashboard/live"
                    }) : o.createElement(l.b, {
                        name: "twilight_dashboard_permissions",
                        isStaff: this.props.isStaff
                    }, o.createElement(d.a, null, o.createElement(p._8, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(p.Q, {
                        bold: !0,
                        color: p.K.Alt,
                        fontSize: p.V.Size4,
                        type: p._49.H5
                    }, Object(s.d)("Editors", "DashboardPermissionsPage"))), o.createElement(p.Y, {
                        gutterSize: p.Z.Medium
                    }, o.createElement(p.L, {
                        cols: {
                            default: 12,
                            md: 6
                        }
                    }, o.createElement(me, {
                        user: this.props.user,
                        channelName: this.props.match.params.channelName
                    })), o.createElement(p.L, {
                        cols: {
                            default: 12,
                            md: 6
                        }
                    }, o.createElement(p._8, {
                        breakpointMedium: {
                            margin: {
                                top: 0
                            }
                        },
                        margin: {
                            top: 2
                        }
                    }, o.createElement(oe, {
                        user: this.props.user,
                        channelName: this.props.match.params.channelName
                    })))), o.createElement(p._8, {
                        margin: {
                            bottom: 2,
                            top: 4
                        }
                    }, o.createElement(p.Q, {
                        bold: !0,
                        color: p.K.Alt,
                        fontSize: p.V.Size4,
                        type: p._49.H5
                    }, Object(s.d)("Authorized Streamers", "DashboardPermissionsPage"))), o.createElement(p.Y, {
                        gutterSize: p.Z.Medium
                    }, o.createElement(p.L, {
                        cols: {
                            default: 12,
                            md: 6
                        }
                    }, o.createElement(k, {
                        user: this.props.user,
                        channelName: this.props.match.params.channelName
                    })), o.createElement(p.L, {
                        cols: {
                            default: 12,
                            md: 6
                        }
                    })), o.createElement(c.a, null)))
                }, t
            }(o.Component),
            pe = n("3zLD"),
            Ee = n("RH2O"),
            fe = n("j7/Y"),
            _e = n("w9tK"),
            ge = n("vH/s"),
            Se = n("Aj/L"),
            be = n("CSlQ");
        var ve = Object(pe.compose)(Object(be.d)("PermissionsPage", {
            destination: _e.a.DashboardPermissions,
            autoReportInteractive: !0
        }), Object(fe.a)({
            location: ge.PageviewLocation.DashboardPermissions
        }), Object(Ee.b)(function(e) {
            var t = Object(Se.c)(e);
            return {
                isStaff: t && t.roles && t.roles.isStaff,
                user: t
            }
        }))(he);
        n.d(t, "PermissionsPageComponent", function() {
            return he
        }), n.d(t, "PermissionsPage", function() {
            return ve
        })
    },
    Cfz3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var r = n("TToO"),
            i = n("9u8h"),
            o = this,
            a = function(e) {
                return r.__awaiter(o, void 0, void 0, function() {
                    return r.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, i.a.getOrThrow("https://api.twitch.tv/v5/permissions/channels/" + e + "/editable_channels")];
                            case 1:
                                return [2, t.sent().body.editable_channels || []]
                        }
                    })
                })
            }
    },
    Mbk8: function(e, t) {},
    QRuM: function(e, t, n) {
        "use strict";
        var r, i = n("TToO"),
            o = n("GiK3"),
            a = n("6sO2");
        ! function(e) {
            e.On = "on", e.Off = "off", e.StaffOnly = "staff"
        }(r || (r = {}));
        var s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = a.b.get(this.props.name, r.Off);
                    return e === r.On || e === r.StaffOnly && this.props.isStaff ? this.props.children : null
                }, t
            }(o.Component),
            l = s;
        n.d(t, "a", function() {
            return r
        }), n.d(t, "c", function() {
            return s
        }), n.d(t, "b", function() {
            return l
        })
    },
    RYKF: function(e, t) {},
    UWcj: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            o = n("RH2O"),
            a = n("2KeS"),
            s = n("V5M+"),
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
                            }(i.Component);
                        t.props.showModal(n, {})
                    }, t.closeModal = function() {
                        t.props.closeModal()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.children(this.openModal)
                }, t
            }(i.Component);
        var c = Object(o.b)(null, function(e) {
            return Object(a.b)({
                showModal: s.d,
                closeModal: s.c
            }, e)
        })(l);
        n.d(t, "a", function() {
            return c
        })
    },
    Wvrm: function(e, t) {},
    YSdj: function(e, t) {},
    jnhC: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            o = n("Odds"),
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
                        n = e.direction,
                        r = e.size;
                    return i.createElement("div", {
                        onMouseEnter: this.handleHover,
                        onMouseLeave: this.handleHover
                    }, i.createElement(o._35, {
                        display: o.R.Flex,
                        margin: {
                            x: 1
                        },
                        position: o._15.Relative
                    }, i.createElement(o._35, {
                        className: "hoverable-icon",
                        display: o.R.InlineFlex,
                        color: o.K.Alt2,
                        alignItems: o.c.Center,
                        justifyContent: o._7.Center
                    }, i.createElement(o._24, {
                        asset: o._25.NotificationInfo,
                        width: 16,
                        height: 16
                    })), i.createElement(o.q, {
                        show: this.state.isHovered,
                        direction: n,
                        size: r
                    }, i.createElement(o._8, {
                        padding: {
                            x: 1,
                            y: 1
                        }
                    }, t))))
                }, t.defaultProps = {
                    direction: o.r.Bottom,
                    size: o.s.Small
                }, t
            }(i.Component));
        n.d(t, "a", function() {
            return a
        })
    }
});
//# sourceMappingURL=pages.dashboard-permissions-e7bc612411fecb38bdcff79c401b909a.js.map