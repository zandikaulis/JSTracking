(window.webpackJsonp = window.webpackJsonp || []).push([
    [145], {
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
        DfXv: function(e, t, n) {},
        DzC7: function(e, t, n) {},
        NCCa: function(e, t, n) {},
        Nly3: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, a = n("mrSG"),
                i = n("q1tI"),
                o = n("mLw1"),
                s = n("/7QA"),
                l = n("IFXb"),
                c = n("8Ad5"),
                d = n("B+LW"),
                u = n("mZc/"),
                m = n("Ue10"),
                h = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = e.className;
                        return i.createElement(m.Cb, {
                            background: m.r.Base,
                            className: n,
                            elevation: 1,
                            padding: 2,
                            flexGrow: 1,
                            fullHeight: !0,
                            fullWidth: !0
                        }, t)
                    }, t
                }(i.Component),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(m.Xa, {
                            alignItems: m.f.Center,
                            display: m.X.Flex,
                            margin: {
                                bottom: 2
                            },
                            justifyContent: m.Wa.Between
                        }, this.props.children)
                    }, t
                }(i.Component),
                E = n("cZKs"),
                f = n("6XEL"),
                g = function(e, t) {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        var n;
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, Object(f.c)({
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
                b = function(e, t) {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        var n;
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, Object(f.c)({
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
                S = (n("DzC7"), {
                    "data-test-selector": "cancel-button"
                }),
                C = {
                    "data-test-selector": "close-button"
                },
                y = {
                    "data-test-selector": "remove-button"
                };
            ! function(e) {
                e[e.Pending = 0] = "Pending", e[e.InFlight = 1] = "InFlight", e[e.Failed = 2] = "Failed", e[e.Success = 3] = "Success"
            }(r || (r = {}));
            var v, _, z = function(e) {
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
                                            }), [4, b(this.props.channelID, this.props.email)];
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
                        var e = i.createElement(i.Fragment, null, i.createElement(m.Cb, {
                                borderBottom: !0
                            }, i.createElement(m.Xa, {
                                padding: {
                                    y: 2
                                }
                            }, i.createElement(m.W, {
                                color: m.O.Alt2
                            }, Object(s.d)("Failed to remove authorized streamer. Try again.", "PermissionsRemoveAuthorizedStreamerConfirmation")))), i.createElement(m.Xa, {
                                display: m.X.Flex,
                                justifyContent: m.Wa.Center,
                                padding: {
                                    top: 2
                                }
                            }, i.createElement(m.Xa, {
                                margin: {
                                    x: 1
                                }
                            }, i.createElement(m.z, a.__assign({}, C, {
                                onClick: this.props.onClose
                            }), Object(s.d)("Close", "PermissionsRemoveAuthorizedStreamerConfirmation"))))),
                            t = i.createElement(i.Fragment, null, i.createElement(m.Xa, null, i.createElement(m.Xa, {
                                display: m.X.Flex,
                                justifyContent: m.Wa.Center,
                                padding: {
                                    y: 2
                                }
                            }, i.createElement(m.W, {
                                color: m.O.Alt2
                            }, this.props.email))), i.createElement(m.Cb, {
                                background: m.r.Alt,
                                display: m.X.Flex,
                                justifyContent: m.Wa.Center,
                                padding: 2
                            }, i.createElement(m.Xa, {
                                margin: {
                                    x: 1
                                }
                            }, i.createElement(m.z, a.__assign({}, S, {
                                onClick: this.props.onClose,
                                type: m.F.Hollow
                            }), Object(s.d)("No, Keep Them", "PermissionsRemoveAuthorizedStreamerConfirmation"))), i.createElement(m.Xa, {
                                margin: {
                                    x: 1
                                }
                            }, i.createElement(m.z, a.__assign({}, y, {
                                disabled: this.state.requestState === r.InFlight,
                                onClick: this.onClickRemove
                            }), Object(s.d)("Yes, Remove Them", "PermissionsRemoveAuthorizedStreamerConfirmation")))));
                        return i.createElement(m.Cb, {
                            background: m.r.Base,
                            elevation: 3,
                            className: "remove-streamer-modal"
                        }, i.createElement(m.Cb, {
                            borderBottom: !0,
                            padding: 2,
                            display: m.X.Flex,
                            justifyContent: m.Wa.Center
                        }, i.createElement(m.W, {
                            bold: !0,
                            fontSize: m.Ca.Size4
                        }, Object(s.d)("Remove This Authorized Streamer?", "PermissionsRemoveAuthorizedStreamerConfirmation"))), this.state.requestState === r.Failed ? e : t, i.createElement(E.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(i.Component),
                w = (n("DfXv"), {
                    "data-test-selector": "email"
                }),
                P = {
                    "data-test-selector": "send"
                },
                j = {
                    "data-test-selector": "remove"
                },
                O = {
                    "data-test-selector": "empty"
                },
                X = {
                    "data-test-selector": "loading"
                },
                x = {
                    "data-test-selector": "error"
                },
                A = {
                    "data-test-selector": "not-found"
                };
            ! function(e) {
                e[e.Waiting = 0] = "Waiting", e[e.Error = 1] = "Error", e[e.NotFound = 2] = "NotFound", e[e.Success = 3] = "Success"
            }(v || (v = {})),
            function(e) {
                e[e.Loading = 0] = "Loading", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
            }(_ || (_ = {}));
            var W, F = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            authorizedStreamers: [],
                            emailAddress: "",
                            inviteState: v.Waiting,
                            requestState: _.Loading
                        }, t.updateAuthorizedStreamers = function(e) {
                            t.setState({
                                authorizedStreamers: e
                            })
                        }, t.handleEmailAddressChange = function(e) {
                            t.setState({
                                emailAddress: e.currentTarget.value
                            })
                        }, t.handleKeyDown = function(e) {
                            e.keyCode === c.a.Enter && t.sendInvite(t.state.emailAddress)
                        }, t.sendInvite = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.setState({
                                                inviteState: v.Waiting
                                            }), e.length > 0 ? [4, g(this.props.user.id, e)] : [3, 2];
                                        case 1:
                                            (t = n.sent()).isNotFound ? this.setState({
                                                inviteState: v.NotFound
                                            }) : t.isError ? this.setState({
                                                inviteState: v.Error
                                            }) : this.setState({
                                                authorizedStreamers: t.authorizedStreamers,
                                                emailAddress: "",
                                                inviteState: v.Success
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
                                            return [4, g(this.props.user.id, e)];
                                        case 1:
                                            return (t = n.sent()).isError || this.setState({
                                                authorizedStreamers: t.authorizedStreamers
                                            }), [2]
                                    }
                                })
                            })
                        }, t.isEmpty = function() {
                            return t.state.requestState === _.Success && 0 === t.state.authorizedStreamers.length
                        }, t.renderSuccess = function() {
                            var e = i.createElement(m.Xa, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(m.Xa, {
                                display: m.X.Flex,
                                flexGrow: 1
                            }, i.createElement(m.Xa, {
                                flexGrow: 1,
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(m.Ra, {
                                type: m.Ta.Text,
                                onChange: t.handleEmailAddressChange,
                                onKeyDown: t.handleKeyDown,
                                value: t.state.emailAddress,
                                placeholder: Object(s.d)("Enter an email address", "PermissionsAuthorizedStreamers")
                            })), i.createElement(m.Xa, null, i.createElement(m.z, a.__assign({}, P, {
                                onClick: function() {
                                    return t.sendInvite(t.state.emailAddress)
                                }
                            }), Object(s.d)("Send Invite", "PermissionsAuthorizedStreamers")))), t.state.inviteState === v.NotFound && i.createElement(m.W, a.__assign({}, A, {
                                color: m.O.Error,
                                fontSize: m.Ca.Size7
                            }), Object(s.d)("That email address isn't linked to a Twitch account. Make sure the email is linked to a Twitch account.", "PermissionsAuthorizedStreamers")));
                            return i.createElement(i.Fragment, null, e, t.isEmpty() ? i.createElement(m.Xa, a.__assign({
                                display: m.X.Flex,
                                flexDirection: m.Aa.Column,
                                alignItems: m.f.Center,
                                alignContent: m.e.Center,
                                justifyContent: m.Wa.Center,
                                padding: {
                                    y: 5
                                }
                            }, O), i.createElement(m.Xa, {
                                padding: {
                                    bottom: .5
                                }
                            }, i.createElement(m.q, {
                                src: "https://static-cdn.jtvnw.net/emoticons/v1/58127/2.0",
                                alt: "CoolCat",
                                size: 50
                            })), i.createElement(m.W, {
                                color: m.O.Alt2,
                                fontSize: m.Ca.Size5
                            }, Object(s.d)("No authorized streamers to display", "PermissionsAuthorizedStreamers"))) : t.state.authorizedStreamers.map(function(e, n) {
                                return i.createElement(m.Cb, {
                                    key: n,
                                    alignItems: m.f.Center,
                                    borderBottom: !0,
                                    display: m.X.Flex,
                                    justifyContent: m.Wa.Between,
                                    padding: {
                                        bottom: 1,
                                        top: 1
                                    }
                                }, i.createElement(m.Xa, {
                                    display: m.X.Flex,
                                    alignItems: m.f.Center
                                }, i.createElement(m.Xa, {
                                    margin: {
                                        left: 1
                                    }
                                }, i.createElement(m.W, a.__assign({}, w), e.email))), i.createElement(m.Xa, null, i.createElement(m.Xa, {
                                    margin: {
                                        right: 1
                                    },
                                    display: m.X.InlineFlex
                                }, i.createElement(m.z, {
                                    type: m.F.Hollow,
                                    onClick: function() {
                                        return t.resendInvite(e.email)
                                    }
                                }, Object(s.d)("Resend Invite", "PermissionsAuthorizedStreamersRow"))), i.createElement(d.a, {
                                    triggerModal: function(n) {
                                        return i.createElement(z, {
                                            channelID: t.props.user.id,
                                            email: e.email,
                                            onClose: n,
                                            onSuccess: t.updateAuthorizedStreamers
                                        })
                                    }
                                }, function(e) {
                                    return i.createElement(m.z, a.__assign({
                                        type: m.F.Text,
                                        onClick: e
                                    }, j), Object(s.d)("Remove", "PermissionsAuthorizedStreamersRow"))
                                })))
                            }))
                        }, t.renderError = function() {
                            return i.createElement(m.Xa, a.__assign({
                                display: m.X.Flex,
                                flexDirection: m.Aa.Column,
                                alignItems: m.f.Center,
                                alignContent: m.e.Center,
                                justifyContent: m.Wa.Center,
                                padding: {
                                    top: 5,
                                    right: 0,
                                    bottom: 5,
                                    left: 0
                                }
                            }, x), i.createElement(m.Xa, {
                                padding: {
                                    top: 5,
                                    bottom: .5
                                }
                            }, i.createElement(m.q, {
                                src: "https://static-cdn.jtvnw.net/emoticons/v1/86/2.0",
                                alt: "BibleThump",
                                size: 50
                            })), i.createElement(m.W, {
                                color: m.O.Alt2,
                                fontSize: m.Ca.Size5
                            }, Object(s.d)("An error occurred while loading authorized streamers for your channel.", "DashboardPermissionsPage")))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.user && this.state.requestState !== _.Loading ? i.createElement(h, {
                            className: "authorized-streamers-panel"
                        }, i.createElement(p, null, i.createElement(m.Xa, {
                            alignItems: m.f.Center,
                            display: m.X.Flex
                        }, i.createElement(m.W, {
                            bold: !0,
                            color: m.O.Alt,
                            fontSize: m.Ca.Size5
                        }, Object(s.d)("People who can stream to your channel", "PermissionsAuthorizedStreamers")), i.createElement(u.a, {
                            size: m.w.Medium
                        }, Object(s.d)("When you invite someone to stream to your channel, we'll send them a new stream key and instructions.", "PermissionsAuthorizedStreamers")))), this.state.requestState === _.Success ? this.renderSuccess() : this.renderError()) : i.createElement(m.gb, a.__assign({}, X, {
                            height: 300,
                            width: 533
                        }))
                    }, t.prototype.componentWillMount = function() {
                        this.fetchAuthorizedStreamers()
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.props.user && this.props.channelName !== e.channelName && this.fetchAuthorizedStreamers()
                    }, t.prototype.fetchAuthorizedStreamers = function() {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.props.user ? [4, function(e) {
                                            return a.__awaiter(void 0, void 0, void 0, function() {
                                                var t;
                                                return a.__generator(this, function(n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return [4, Object(f.c)({
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
                                            requestState: _.Error
                                        }) : this.setState({
                                            authorizedStreamers: e.authorizedStreamers,
                                            requestState: _.Success
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }(i.Component),
                D = n("rqzT"),
                I = n("b6Yk"),
                k = n("jreu"),
                q = n("NMMG"),
                T = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(u.a, {
                            size: m.w.Medium
                        }, i.createElement(m.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(m.W, {
                            fontSize: m.Ca.Size6,
                            type: m.Sb.P
                        }, Object(s.d)("Editors can access your channel's Dashboard to help you manage the following activities:", "ChannelEditorsTooltip"))), i.createElement(m.bc, null, i.createElement("ul", null, i.createElement("li", null, i.createElement(m.W, {
                            fontSize: m.Ca.Size6,
                            type: m.Sb.P
                        }, Object(s.d)("Editing stream info", "ChannelEditorsTooltip"))), i.createElement("li", null, i.createElement(m.W, {
                            fontSize: m.Ca.Size6,
                            type: m.Sb.P
                        }, Object(s.d)("Running commercial breaks", "ChannelEditorsTooltip"))), i.createElement("li", null, i.createElement(m.W, {
                            fontSize: m.Ca.Size6,
                            type: m.Sb.P
                        }, Object(s.d)("Editing video info", "ChannelEditorsTooltip"))), i.createElement("li", null, i.createElement(m.W, {
                            fontSize: m.Ca.Size6,
                            type: m.Sb.P
                        }, Object(s.d)("Uploading videos", "ChannelEditorsTooltip"))), i.createElement("li", null, i.createElement(m.W, {
                            fontSize: m.Ca.Size6,
                            type: m.Sb.P
                        }, Object(s.d)("Creating events", "ChannelEditorsTooltip"))), i.createElement("li", null, i.createElement(m.W, {
                            fontSize: m.Ca.Size6,
                            type: m.Sb.P
                        }, Object(s.d)("Starting Reruns", "ChannelEditorsTooltip"))), i.createElement("li", null, i.createElement(m.W, {
                            fontSize: m.Ca.Size6,
                            type: m.Sb.P
                        }, Object(s.d)("Adding stream markers", "ChannelEditorsTooltip"))), i.createElement("li", null, i.createElement(m.W, {
                            fontSize: m.Ca.Size6,
                            type: m.Sb.P
                        }, Object(s.d)("Downloading VODs", "ChannelEditorsTooltip"))))))
                    }, t
                }(i.Component),
                N = n("yLwq"),
                R = function(e) {
                    return e.profile_image && e.profile_image["50x50"] ? e.profile_image["50x50"].url : Object(N.c)(e.id, 50)
                },
                L = (n("cQGI"), {
                    "data-test-selector": "confirm-remove-editor"
                }),
                M = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleRemoveEditor = function() {
                            var e = t.props,
                                n = e.onClose;
                            (0, e.onRemoveEditor)(), n()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.channel;
                        return i.createElement(m.Cb, {
                            background: m.r.Base,
                            elevation: 3,
                            className: "remove-editor-confirmation"
                        }, i.createElement(m.Cb, {
                            borderBottom: !0,
                            padding: 2,
                            display: m.X.Flex,
                            justifyContent: m.Wa.Center
                        }, i.createElement(m.W, {
                            bold: !0,
                            fontSize: m.Ca.Size4
                        }, Object(s.d)("Remove This Editor?", "PermissionsRemoveEditorConfirmation"))), i.createElement(m.Xa, null, i.createElement(m.Xa, {
                            display: m.X.Flex,
                            alignItems: m.f.Center,
                            flexDirection: m.Aa.Column,
                            justifyContent: m.Wa.Center,
                            padding: {
                                y: 2
                            }
                        }, i.createElement(m.q, {
                            alt: e.login,
                            size: 50,
                            src: R(e)
                        }), i.createElement(m.Xa, {
                            margin: {
                                top: 1
                            }
                        }, i.createElement(m.W, {
                            color: m.O.Alt2,
                            fontSize: m.Ca.Size5
                        }, e.login)))), i.createElement(m.Cb, {
                            background: m.r.Alt,
                            display: m.X.Flex,
                            justifyContent: m.Wa.Center,
                            padding: 2
                        }, i.createElement(m.Xa, {
                            margin: {
                                x: 1
                            }
                        }, i.createElement(m.z, {
                            onClick: this.props.onClose,
                            type: m.F.Hollow
                        }, Object(s.d)("No, Keep Editor", "PermissionsRemoveEditorConfirmation"))), i.createElement(m.Xa, {
                            margin: {
                                x: 1
                            }
                        }, i.createElement(m.z, a.__assign({}, L, {
                            onClick: this.handleRemoveEditor
                        }), Object(s.d)("Yes, Remove Editor", "PermissionsRemoveEditorConfirmation")))), i.createElement(E.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(i.Component),
                B = function(e) {
                    var t = e.channelID,
                        n = e.editorLogin;
                    return a.__awaiter(void 0, void 0, Promise, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, I.a.postOrThrow("https://api.twitch.tv/v5/permissions/channels/" + t + "/editors", {
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
                G = {
                    "data-test-selector": "display-name"
                },
                H = {
                    "data-test-selector": "empty"
                },
                K = {
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
                Z = {
                    "data-test-selector": "add-editor-error"
                },
                V = {
                    "data-test-selector": "remove-editor"
                };
            ! function(e) {
                e[e.Loading = 0] = "Loading", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
            }(W || (W = {}));
            var Q, $ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            channelEditors: [],
                            editorLogin: "",
                            requestState: W.Loading
                        }, t.handleRemoveEditor = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return a.__generator(this, function(n) {
                                    return Object(k.a)({
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
                                                addEditorRequestState: W.Loading
                                            }), [4, B({
                                                channelID: this.props.user.id,
                                                editorLogin: e
                                            })];
                                        case 1:
                                            return t = n.sent(), this.setState(function(e) {
                                                return {
                                                    addEditorRequestState: W.Success,
                                                    channelEditors: e.channelEditors.concat([t]),
                                                    editorLogin: ""
                                                }
                                            }), [3, 3];
                                        case 2:
                                            return n.sent(), this.setState({
                                                addEditorRequestState: W.Error
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
                            return i.createElement(m.Xa, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(m.Xa, {
                                display: m.X.Flex
                            }, i.createElement(m.Xa, {
                                flexGrow: 1,
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(m.Ra, a.__assign({}, J, {
                                type: m.Ta.Text,
                                placeholder: Object(s.d)("Add an editor", "ChannelEditors"),
                                onChange: t.handleEditorLoginChange,
                                onKeyDown: t.handleKeyDown,
                                value: t.state.editorLogin
                            }))), i.createElement(m.z, a.__assign({}, Y, {
                                onClick: function() {
                                    return t.handleAddEditor(t.state.editorLogin)
                                }
                            }), Object(s.d)("Add", "ChannelEditors"))), t.state.addEditorRequestState === W.Error && i.createElement(m.W, a.__assign({
                                color: m.O.Error,
                                fontSize: m.Ca.Size7
                            }, Z), Object(s.d)("Failed to add editor. Try again.", "PermissionsChannelEditors")))
                        }, t.isEmpty = function() {
                            return t.state.requestState === W.Success && 0 === t.state.channelEditors.length
                        }, t.renderSuccess = function() {
                            return i.createElement(i.Fragment, null, t.renderAddEditorForm(), t.isEmpty() ? i.createElement(m.Xa, a.__assign({
                                display: m.X.Flex,
                                flexDirection: m.Aa.Column,
                                alignItems: m.f.Center,
                                alignContent: m.e.Center,
                                justifyContent: m.Wa.Center,
                                padding: {
                                    y: 5
                                }
                            }, H), i.createElement(m.Xa, {
                                padding: {
                                    bottom: .5
                                }
                            }, i.createElement(m.q, {
                                src: "https://static-cdn.jtvnw.net/emoticons/v1/58127/2.0",
                                alt: "CoolCat",
                                size: 50
                            })), i.createElement(m.W, {
                                color: m.O.Alt2,
                                fontSize: m.Ca.Size5
                            }, Object(s.d)("No editors to display", "PermissionsChannelEditors"))) : t.state.channelEditors.map(function(e) {
                                return i.createElement(m.Cb, {
                                    key: e.id,
                                    alignItems: m.f.Center,
                                    borderBottom: !0,
                                    display: m.X.Flex,
                                    justifyContent: m.Wa.Between,
                                    padding: {
                                        bottom: 1,
                                        top: 1
                                    }
                                }, i.createElement(m.Xa, {
                                    display: m.X.Flex,
                                    alignItems: m.f.Center
                                }, i.createElement(m.U, {
                                    to: "/" + e.login
                                }, i.createElement(m.q, {
                                    alt: e.displayname,
                                    size: 30,
                                    src: R(e)
                                })), i.createElement(m.Xa, {
                                    margin: {
                                        left: 1
                                    }
                                }, i.createElement(m.U, {
                                    to: "/" + e.login
                                }, i.createElement(m.W, a.__assign({}, G), e.displayname)))), i.createElement(m.Xa, null, i.createElement(m.Xa, {
                                    margin: {
                                        right: 1
                                    },
                                    display: m.X.InlineFlex
                                }, i.createElement(D.a, {
                                    buttonType: m.F.Hollow,
                                    isPopout: !1,
                                    threadID: Object(q.a)(t.props.user.id, e.id)
                                })), i.createElement(d.a, {
                                    triggerModal: function(n) {
                                        return i.createElement(M, {
                                            channel: e,
                                            onClose: n,
                                            onRemoveEditor: function() {
                                                return t.handleRemoveEditor(e)
                                            }
                                        })
                                    }
                                }, function(e) {
                                    return i.createElement(m.z, a.__assign({}, V, {
                                        onClick: e,
                                        type: m.F.Text
                                    }), Object(s.d)("Remove", "PermissionsChannelEditors"))
                                })))
                            }))
                        }, t.renderError = function() {
                            return i.createElement(m.Xa, a.__assign({
                                display: m.X.Flex,
                                flexDirection: m.Aa.Column,
                                alignItems: m.f.Center,
                                alignContent: m.e.Center,
                                justifyContent: m.Wa.Center,
                                padding: {
                                    top: 5,
                                    right: 0,
                                    bottom: 5,
                                    left: 0
                                }
                            }, U), i.createElement(m.Xa, {
                                padding: {
                                    top: 5,
                                    bottom: .5
                                }
                            }, i.createElement(m.q, {
                                src: "https://static-cdn.jtvnw.net/emoticons/v1/86/2.0",
                                alt: "BibleThump",
                                size: 50
                            })), i.createElement(m.W, {
                                color: m.O.Alt2,
                                fontSize: m.Ca.Size5
                            }, Object(s.d)("An error occurred while loading people who can manage your channel.", "DashboardPermissionsPage")))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.user && this.state.requestState !== W.Loading ? i.createElement(h, null, i.createElement(p, null, i.createElement(m.Xa, {
                            alignItems: m.f.Center,
                            display: m.X.Flex
                        }, i.createElement(m.W, {
                            bold: !0,
                            color: m.O.Alt,
                            fontSize: m.Ca.Size5
                        }, Object(s.d)("People who can manage your channel", "DashboardPermissionsPage")), i.createElement(T, null))), this.state.requestState === W.Success ? this.renderSuccess() : this.renderError()) : i.createElement(m.gb, a.__assign({}, K, {
                            height: 300,
                            width: 533
                        }))
                    }, t.prototype.componentWillMount = function() {
                        this.fetchChannelEditors()
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.props.user && this.props.channelName !== e.channelName && this.fetchChannelEditors()
                    }, t.prototype.fetchChannelEditors = function() {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!this.props.user) return [2];
                                        t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, function(e) {
                                            return a.__awaiter(void 0, void 0, Promise, function() {
                                                return a.__generator(this, function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return [4, I.a.getOrThrow("https://api.twitch.tv/v5/permissions/channels/" + e + "/editors")];
                                                        case 1:
                                                            return [2, t.sent().body.editors || []]
                                                    }
                                                })
                                            })
                                        }(this.props.user.id)];
                                    case 2:
                                        return e = t.sent(), this.setState({
                                            channelEditors: e,
                                            requestState: W.Success
                                        }), [3, 4];
                                    case 3:
                                        return t.sent(), this.setState({
                                            requestState: W.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }(i.Component),
                ee = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(u.a, {
                            size: m.w.Medium
                        }, i.createElement(m.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(m.W, {
                            fontSize: m.Ca.Size6,
                            type: m.Sb.P
                        }, Object(s.d)("As an editor, you can access a channel's Dashboard to help the owner manage the following activities:", "DashboardPermissionsPage"))), i.createElement(m.bc, null, i.createElement("ul", null, i.createElement("li", null, i.createElement(m.W, {
                            fontSize: m.Ca.Size6,
                            type: m.Sb.P
                        }, Object(s.d)("Editing stream info", "DashboardPermissionsPage"))), i.createElement("li", null, i.createElement(m.W, {
                            fontSize: m.Ca.Size6,
                            type: m.Sb.P
                        }, Object(s.d)("Running commercial breaks", "DashboardPermissionPage"))), i.createElement("li", null, i.createElement(m.W, {
                            fontSize: m.Ca.Size6,
                            type: m.Sb.P
                        }, Object(s.d)("Editing video info", "DashboardPermissionsPage"))), i.createElement("li", null, i.createElement(m.W, {
                            fontSize: m.Ca.Size6,
                            type: m.Sb.P
                        }, Object(s.d)("Uploading videos", "DashboardPermissionsPage"))), i.createElement("li", null, i.createElement(m.W, {
                            fontSize: m.Ca.Size6,
                            type: m.Sb.P
                        }, Object(s.d)("Creating events", "DashboardPermissionsPage"))), i.createElement("li", null, i.createElement(m.W, {
                            fontSize: m.Ca.Size6,
                            type: m.Sb.P
                        }, Object(s.d)("Starting Vodcasts", "DashboardPermissionsPage"))))))
                    }, t
                }(i.Component),
                te = n("CEZT"),
                ne = {
                    "data-test-selector": "display-name"
                },
                re = {
                    "data-test-selector": "empty"
                },
                ae = {
                    "data-test-selector": "loading"
                },
                ie = {
                    "data-test-selector": "error"
                };
            ! function(e) {
                e[e.Loading = 0] = "Loading", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
            }(Q || (Q = {}));
            var oe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            editableChannels: [],
                            requestState: Q.Loading
                        }, t.isEmpty = function() {
                            return t.state.requestState === Q.Success && 0 === t.state.editableChannels.length
                        }, t.renderSuccess = function() {
                            return t.isEmpty() ? i.createElement(m.Xa, a.__assign({
                                display: m.X.Flex,
                                flexDirection: m.Aa.Column,
                                alignItems: m.f.Center,
                                alignContent: m.e.Center,
                                justifyContent: m.Wa.Center,
                                padding: {
                                    top: 5,
                                    right: 0,
                                    bottom: 5,
                                    left: 0
                                }
                            }, re), i.createElement(m.Xa, {
                                padding: {
                                    top: 5,
                                    bottom: .5
                                }
                            }, i.createElement(m.q, {
                                src: "https://static-cdn.jtvnw.net/emoticons/v1/58127/2.0",
                                alt: "CoolCat",
                                size: 50
                            })), i.createElement(m.W, {
                                color: m.O.Alt2,
                                fontSize: m.Ca.Size5
                            }, Object(s.d)("No channels to display", "DashboardPermissionsPage"))) : t.state.editableChannels.map(function(e) {
                                return i.createElement(m.Cb, {
                                    key: e.id,
                                    alignItems: m.f.Center,
                                    borderBottom: !0,
                                    display: m.X.Flex,
                                    justifyContent: m.Wa.Between,
                                    padding: {
                                        bottom: 1,
                                        top: 1
                                    }
                                }, i.createElement(m.Xa, {
                                    display: m.X.Flex,
                                    alignItems: m.f.Center
                                }, i.createElement(m.U, {
                                    to: "/" + e.login
                                }, i.createElement(m.q, {
                                    alt: e.displayname,
                                    size: 30,
                                    src: R(e)
                                })), i.createElement(m.Xa, {
                                    margin: {
                                        left: 1
                                    }
                                }, i.createElement(m.U, {
                                    to: "/" + e.login
                                }, i.createElement(m.W, a.__assign({}, ne), e.displayname)))), i.createElement(m.Xa, null, i.createElement(m.Xa, {
                                    margin: {
                                        right: 1
                                    },
                                    display: m.X.InlineFlex
                                }, i.createElement(D.a, {
                                    buttonType: m.F.Hollow,
                                    threadID: Object(q.a)(t.props.user.id, e.id),
                                    isPopout: !1
                                })), i.createElement(m.z, {
                                    linkTo: "/" + e.login + "/dashboard/live",
                                    type: m.F.Text
                                }, Object(s.d)("Dashboard", "DashboardPermissionPage"))))
                            })
                        }, t.renderError = function() {
                            return i.createElement(m.Xa, a.__assign({
                                display: m.X.Flex,
                                flexDirection: m.Aa.Column,
                                alignItems: m.f.Center,
                                alignContent: m.e.Center,
                                justifyContent: m.Wa.Center,
                                padding: {
                                    top: 5,
                                    right: 0,
                                    bottom: 5,
                                    left: 0
                                }
                            }, ie), i.createElement(m.Xa, {
                                padding: {
                                    top: 5,
                                    bottom: .5
                                }
                            }, i.createElement(m.q, {
                                src: "https://static-cdn.jtvnw.net/emoticons/v1/86/2.0",
                                alt: "BibleThump",
                                size: 50
                            })), i.createElement(m.W, {
                                color: m.O.Alt2,
                                fontSize: m.Ca.Size5
                            }, Object(s.d)("An error occured while loading channels you can manage.", "DashboardPermissionsPage")))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.user && this.state.requestState !== Q.Loading ? i.createElement(h, null, i.createElement(p, null, i.createElement(m.Xa, {
                            alignItems: m.f.Center,
                            display: m.X.Flex
                        }, i.createElement(m.W, {
                            bold: !0,
                            color: m.O.Alt,
                            fontSize: m.Ca.Size5
                        }, Object(s.d)("Channels you can manage", "DashboardPermissionsPage")), i.createElement(ee, null)), i.createElement(m.U, {
                            to: "/" + this.props.channelName
                        }, Object(s.d)("Go to your Channel", "DashboardPermissionsPage"))), this.state.requestState === Q.Success ? this.renderSuccess() : this.renderError()) : i.createElement(m.gb, a.__assign({}, ae, {
                            height: 300,
                            width: 533
                        }))
                    }, t.prototype.componentWillMount = function() {
                        this.fetchEditableChannels()
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.props.user && this.props.channelName !== e.channelName && this.fetchEditableChannels()
                    }, t.prototype.fetchEditableChannels = function() {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!this.props.user) return [2];
                                        t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, Object(te.a)(this.props.user.id)];
                                    case 2:
                                        return e = t.sent(), this.setState({
                                            editableChannels: e,
                                            requestState: Q.Success
                                        }), [3, 4];
                                    case 3:
                                        return t.sent(), this.setState({
                                            requestState: Q.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }(i.Component),
                se = n("GIFg"),
                le = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(se.a, {
                            withWhispersButton: !0
                        })
                    }, t
                }(i.Component),
                ce = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        s.p.setPageTitle(Object(s.d)("Permissions", "DashboardPermissionsPage"))
                    }, t.prototype.render = function() {
                        return this.props.user && this.props.user.login !== this.props.match.params.channelName ? i.createElement(o.a, {
                            to: "/" + this.props.user.login + "/dashboard/live"
                        }) : i.createElement(i.Fragment, null, i.createElement(l.a, null, i.createElement(m.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(m.W, {
                            bold: !0,
                            color: m.O.Alt,
                            fontSize: m.Ca.Size4,
                            type: m.Sb.H3
                        }, Object(s.d)("Editors", "DashboardPermissionsPage"))), i.createElement(m.Ja, {
                            gutterSize: m.Ka.Medium
                        }, i.createElement(m.P, {
                            cols: {
                                default: 12,
                                md: 6
                            }
                        }, i.createElement(oe, {
                            user: this.props.user,
                            channelName: this.props.match.params.channelName
                        })), i.createElement(m.P, {
                            cols: {
                                default: 12,
                                md: 6
                            }
                        }, i.createElement(m.Xa, {
                            breakpointMedium: {
                                margin: {
                                    top: 0
                                }
                            },
                            margin: {
                                top: 2
                            }
                        }, i.createElement($, {
                            user: this.props.user,
                            channelName: this.props.match.params.channelName
                        })))), i.createElement(m.Xa, {
                            margin: {
                                bottom: 2,
                                top: 4
                            }
                        }, i.createElement(m.W, {
                            bold: !0,
                            color: m.O.Alt,
                            fontSize: m.Ca.Size4,
                            type: m.Sb.H5
                        }, Object(s.d)("Authorized Streamers", "DashboardPermissionsPage"))), i.createElement(m.Ja, {
                            gutterSize: m.Ka.Medium
                        }, i.createElement(m.P, {
                            cols: {
                                default: 12,
                                md: 6
                            }
                        }, i.createElement(F, {
                            user: this.props.user,
                            channelName: this.props.match.params.channelName
                        })), i.createElement(m.P, {
                            cols: {
                                default: 12,
                                md: 6
                            }
                        }))), i.createElement(le, null))
                    }, t
                }(i.Component),
                de = n("oJmH"),
                ue = n("/MKj"),
                me = n("V+GM"),
                he = n("NvVO"),
                pe = n("2xye"),
                Ee = n("kRBY"),
                fe = n("GnwI");
            var ge = Object(de.compose)(Object(fe.b)("PermissionsPage", {
                destination: he.a.DashboardPermissions,
                autoReportInteractive: !0
            }), Object(me.a)({
                location: pe.PageviewLocation.DashboardPermissions
            }), Object(ue.connect)(function(e) {
                var t = Object(Ee.e)(e);
                return {
                    isStaff: t && t.roles && t.roles.isStaff,
                    user: t
                }
            }))(ce);
            n.d(t, "PermissionsPageComponent", function() {
                return ce
            }), n.d(t, "PermissionsPage", function() {
                return ge
            })
        },
        cQGI: function(e, t, n) {},
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
        "mZc/": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("Ue10"),
                o = (n("NCCa"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isHovered: !1
                        }, t.handleMouseEnter = function() {
                            t.setState({
                                isHovered: !0
                            })
                        }, t.handleMouseLeave = function() {
                            t.setState({
                                isHovered: !1
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = e.direction,
                            r = e.size;
                        return a.createElement("div", {
                            onMouseEnter: this.handleMouseEnter,
                            onMouseLeave: this.handleMouseLeave
                        }, a.createElement(i.Cb, {
                            display: i.X.Flex,
                            margin: {
                                x: 1
                            },
                            position: i.hb.Relative
                        }, a.createElement(i.Cb, {
                            className: "hoverable-icon",
                            display: i.X.InlineFlex,
                            color: i.O.Alt2,
                            alignItems: i.f.Center,
                            justifyContent: i.Wa.Center
                        }, a.createElement(i.qb, {
                            asset: i.rb.NotificationInfo,
                            width: 16,
                            height: 16
                        })), a.createElement(i.u, {
                            show: this.state.isHovered,
                            direction: n,
                            size: r
                        }, a.createElement(i.Xa, {
                            padding: {
                                x: 1,
                                y: 1
                            }
                        }, t))))
                    }, t.defaultProps = {
                        direction: i.v.Bottom,
                        size: i.w.Small
                    }, t
                }(a.Component));
            n.d(t, "a", function() {
                return o
            })
        }
    }
]);