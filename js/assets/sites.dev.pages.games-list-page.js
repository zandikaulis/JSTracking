(window.webpackJsonp = window.webpackJsonp || []).push([
    [220], {
        "/ZC1": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("Ue10"),
                i = (n("sL9O"), function(e) {
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
                        return a.createElement(o.Z, {
                            dragOver: this.state.isDraggingOver,
                            error: this.props.error
                        }, a.createElement(o.Qa, {
                            position: o.kb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: o.jc.Above
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
        "/aPz": function(e, t, n) {
            "use strict";
            n.d(t, "e", function() {
                return i
            }), n.d(t, "h", function() {
                return s
            }), n.d(t, "i", function() {
                return u
            }), n.d(t, "j", function() {
                return c
            }), n.d(t, "K", function() {
                return d
            }), n.d(t, "L", function() {
                return l
            }), n.d(t, "o", function() {
                return p
            }), n.d(t, "D", function() {
                return m
            }), n.d(t, "J", function() {
                return g
            }), n.d(t, "t", function() {
                return f
            }), n.d(t, "u", function() {
                return h
            }), n.d(t, "p", function() {
                return b
            }), n.d(t, "w", function() {
                return v
            }), n.d(t, "y", function() {
                return S
            }), n.d(t, "m", function() {
                return E
            }), n.d(t, "d", function() {
                return _
            }), n.d(t, "c", function() {
                return A
            }), n.d(t, "E", function() {
                return y
            }), n.d(t, "b", function() {
                return T
            }), n.d(t, "a", function() {
                return C
            }), n.d(t, "H", function() {
                return O
            }), n.d(t, "I", function() {
                return I
            }), n.d(t, "l", function() {
                return P
            }), n.d(t, "n", function() {
                return w
            }), n.d(t, "F", function() {
                return D
            }), n.d(t, "G", function() {
                return R
            }), n.d(t, "M", function() {
                return U
            }), n.d(t, "s", function() {
                return M
            }), n.d(t, "z", function() {
                return k
            }), n.d(t, "f", function() {
                return G
            }), n.d(t, "g", function() {
                return x
            }), n.d(t, "A", function() {
                return L
            }), n.d(t, "k", function() {
                return B
            }), n.d(t, "r", function() {
                return j
            }), n.d(t, "x", function() {
                return F
            }), n.d(t, "v", function() {
                return N
            }), n.d(t, "q", function() {
                return V
            }), n.d(t, "C", function() {
                return W
            }), n.d(t, "B", function() {
                return Y
            });
            var r = n("/7QA"),
                a = n("0Log"),
                o = n("geRD");

            function i(e) {
                return a.PubsubTopic.BroadcastSettingsUpdate + "." + e
            }

            function s(e) {
                return a.PubsubTopic.ChatRoom + "." + e
            }

            function u(e) {
                return a.PubsubTopic.ChatRoomsChannel + "." + e
            }

            function c(e) {
                return a.PubsubTopic.ChatRoomsUser + "." + e
            }

            function d(e) {
                return a.PubsubTopic.VideoPlayback + "." + e
            }

            function l(e) {
                return a.PubsubTopic.VideoThumbnailProcessing + "." + e
            }

            function p(e) {
                return a.PubsubTopic.ImageUpload + "." + e
            }

            function m(e) {
                return a.PubsubTopic.UploadService + "." + e
            }

            function g(e) {
                return a.PubsubTopic.VideoPlaybackById + "." + e
            }

            function f(e) {
                return a.PubsubTopic.PayoutOnboardingEvents + "." + e
            }

            function h(e) {
                return a.PubsubTopic.Presence + "." + e
            }

            function b(e, t) {
                return a.PubsubTopic.ModerationActionsByUserAndChannel + "." + e + "." + t
            }

            function v(e) {
                return a.PubsubTopic.Raid + "." + e
            }

            function S(e) {
                return a.PubsubTopic.StreamChange + "." + e
            }

            function E(e) {
                return a.PubsubTopic.Friendship + "." + e
            }

            function _(e) {
                return a.PubsubTopic.ChannelBitsPinEvents + "." + e
            }

            function A(e) {
                return a.PubsubTopic.BitsLeaderboardEvents + "." + e.id
            }

            function y(e) {
                return a.PubsubTopic.UserBitsUpdates + "." + e
            }

            function T() {
                return a.PubsubTopic.BitsCampaignEvents + ".updates"
            }

            function C(e) {
                return a.PubsubTopic.ChannelBitsPinEvents + "." + e
            }

            function O(e) {
                return a.PubsubTopic.UserPropertiesUpdates + "." + e
            }

            function I(e) {
                return a.PubsubTopic.UserSubscribeEvents + "." + e
            }

            function P(e) {
                return "follows." + e
            }

            function w(e) {
                return a.PubsubTopic.CampaignGlobalEvents + "." + e
            }

            function D(e) {
                return a.PubsubTopic.CampaignUserEvents + "." + e
            }

            function R(e) {
                return a.PubsubTopic.UserCommerceEvents + "." + e
            }

            function U(e) {
                return a.PubsubTopic.Whispers + "." + e
            }

            function M(e) {
                return a.PubsubTopic.OnsiteNotifications + "." + e
            }

            function k(e) {
                return a.PubsubTopic.StreamChatRoom + "." + e
            }

            function G(e) {
                return a.PubsubTopic.ChannelEventUpdates + "." + e
            }

            function x(e) {
                return a.PubsubTopic.ChannelSquadUpdates + "." + e
            }

            function L(e) {
                return a.PubsubTopic.SubscribersCSV + "." + e
            }

            function B(e) {
                return a.PubsubTopic.CheerbombEventsTopic + "." + e
            }

            function j(e) {
                return a.PubsubTopic.MysteryGift + "." + e
            }

            function F(e) {
                return a.PubsubTopic.SquadUpdates + "." + e
            }

            function N(e) {
                return a.PubsubTopic.PurchaseFulfillmentEvents + "." + e
            }

            function V(e) {
                return a.PubsubTopic.MultiviewChanletUpdate + "." + e
            }

            function W(e) {
                return r.l.subscribe({
                    topic: e.topic,
                    onMessage: function(t) {
                        t.type && !e.type && !e.types || t.type && e.type && t.type !== e.type || t.type && e.types && !e.types.includes(t.type) || Object(o.e)(e.query, e.variables, function(n) {
                            return e.mutator(t, n)
                        }, function(n) {
                            return !!e.skipMessage && e.skipMessage(t, n)
                        })
                    }
                })
            }

            function Y(e) {
                return r.l.subscribe({
                    topic: e.topic,
                    onMessage: function(t) {
                        t.type && t.type !== e.type || Object(o.d)({
                            fragment: e.fragment,
                            id: e.id,
                            mutator: function(n) {
                                return e.mutator(t, n)
                            }
                        })
                    }
                })
            }
        },
        "0Log": function(e, t, n) {
            "use strict";
            var r = n("VSaV");
            n.o(r, "FrienshipChangeType") && n.d(t, "FrienshipChangeType", function() {
                return r.FrienshipChangeType
            }), n.o(r, "ModerationActions") && n.d(t, "ModerationActions", function() {
                return r.ModerationActions
            }), n.o(r, "PubsubMessageType") && n.d(t, "PubsubMessageType", function() {
                return r.PubsubMessageType
            }), n.o(r, "PubsubTopic") && n.d(t, "PubsubTopic", function() {
                return r.PubsubTopic
            }), n.o(r, "PurchaseFulfillmentStatus") && n.d(t, "PurchaseFulfillmentStatus", function() {
                return r.PurchaseFulfillmentStatus
            }), n.o(r, "SquadStatus") && n.d(t, "SquadStatus", function() {
                return r.SquadStatus
            }), n.o(r, "TargetedModerationActions") && n.d(t, "TargetedModerationActions", function() {
                return r.TargetedModerationActions
            });
            var a = n("By5U");
            n.o(a, "FrienshipChangeType") && n.d(t, "FrienshipChangeType", function() {
                return a.FrienshipChangeType
            }), n.o(a, "ModerationActions") && n.d(t, "ModerationActions", function() {
                return a.ModerationActions
            }), n.o(a, "PubsubMessageType") && n.d(t, "PubsubMessageType", function() {
                return a.PubsubMessageType
            }), n.o(a, "PubsubTopic") && n.d(t, "PubsubTopic", function() {
                return a.PubsubTopic
            }), n.o(a, "PurchaseFulfillmentStatus") && n.d(t, "PurchaseFulfillmentStatus", function() {
                return a.PurchaseFulfillmentStatus
            }), n.o(a, "SquadStatus") && n.d(t, "SquadStatus", function() {
                return a.SquadStatus
            }), n.o(a, "TargetedModerationActions") && n.d(t, "TargetedModerationActions", function() {
                return a.TargetedModerationActions
            });
            var o = n("WQCf");
            n.d(t, "FrienshipChangeType", function() {
                return o.a
            }), n.d(t, "ModerationActions", function() {
                return o.b
            }), n.d(t, "PubsubMessageType", function() {
                return o.c
            }), n.d(t, "PubsubTopic", function() {
                return o.d
            }), n.d(t, "PurchaseFulfillmentStatus", function() {
                return o.e
            }), n.d(t, "SquadStatus", function() {
                return o.f
            }), n.d(t, "TargetedModerationActions", function() {
                return o.g
            })
        },
        "635G": function(e, t, n) {
            "use strict";
            n.r(t);
            var r, a = n("mrSG"),
                o = n("q1tI"),
                i = n("/MKj"),
                s = n("fvjX"),
                u = n("V+GM"),
                c = n("Svt6"),
                d = n("aCAx"),
                l = n("NvVO"),
                p = n("2xye"),
                m = n("GnwI"),
                g = n("1mFg"),
                f = n("coZW"),
                h = n("dEJ+"),
                b = n("/7QA"),
                v = n("cZKs"),
                S = n("GD6M"),
                E = n("Ue10"),
                _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            game: null,
                            sendingRequest: !1
                        }, t.onGameSelect = function(e) {
                            var n = e[0];
                            n ? t.setState({
                                game: {
                                    id: n._id,
                                    name: n.name,
                                    giantbomb_id: n.giantbomb_id
                                }
                            }) : t.setState({
                                game: null
                            })
                        }, t.onSubmitClick = function() {
                            t.state.game && (t.setState({
                                sendingRequest: !0
                            }), t.props.onSubmit(t.state.game))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(E.Ya, {
                            className: "dev-add-game-modal",
                            position: E.kb.Relative,
                            fullHeight: !0
                        }, o.createElement(E.Fb, {
                            background: E.r.Base,
                            padding: 2,
                            textAlign: E.Sb.Left,
                            fullWidth: !0
                        }, o.createElement(E.Fb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(E.W, {
                            type: E.Wb.H3,
                            color: E.O.Alt2,
                            fontSize: E.Ca.Size4
                        }, Object(b.d)("Find Game in Giantbomb", "DevAddGameModal"))), null === this.props.addGameStatus ? this.renderGameSearch() : this.renderResponseStatus()), o.createElement(v.a, null))
                    }, t.prototype.renderGameSearch = function() {
                        var e = Object(b.d)("If your game does not appear, please register it first in <x:link>www.giantbomb.com</x:link>.", {
                            "x:link": function(e) {
                                return o.createElement("a", {
                                    key: e,
                                    href: "https://www.giantbomb.com/game/create/"
                                }, e)
                            }
                        }, "DevAddGameModal");
                        return o.createElement(E.Ya, null, o.createElement(E.Ya, {
                            display: E.X.InlineBlock,
                            position: E.kb.Relative,
                            textAlign: E.Sb.Left
                        }, o.createElement(E.W, {
                            color: E.O.Alt2,
                            fontSize: E.Ca.Size7
                        }, e)), o.createElement(E.Fb, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(S.b, {
                            limit: 10,
                            onGameSelect: this.onGameSelect
                        })), o.createElement(E.Ya, null, o.createElement(E.z, {
                            onClick: this.onSubmitClick,
                            disabled: !this.state.game,
                            state: this.state.sendingRequest ? E.E.Loading : E.E.Default
                        }, Object(b.d)("Submit", "DevAddGameModal"))))
                    }, t.prototype.renderResponseStatus = function() {
                        var e = !1,
                            t = "";
                        switch (this.props.addGameStatus) {
                            case r.Success:
                                e = !0, t = Object(b.d)("Your game request will be approved within 48 hours.", "DevAddGameModal");
                                break;
                            case r.AlreadyOwnedByThisCompany:
                                t = Object(b.d)("You already own this game.", "DevAddGameModal");
                                break;
                            case r.AlreadyOwnedByAnotherCompany:
                                t = Object(b.d)("This game is already owned by another company. If you are the owner, please reach out to Twitch Support to claim ownership.", "DevAddGameModal");
                                break;
                            case r.PermissionsError:
                                t = Object(b.d)("You lack permissions.", "DevAddGameModal");
                                break;
                            case r.UnexpectedError:
                                t = Object(b.d)("Unexpected error, please try again.", "DevAddGameModal");
                                break;
                            default:
                                t = Object(b.d)("Unknown response status.", "DevAddGameModal")
                        }
                        return o.createElement(E.Ya, {
                            display: E.X.Flex,
                            fullWidth: !0
                        }, o.createElement(E.tb, {
                            type: e ? E.vb.Success : E.vb.Warn,
                            asset: e ? E.ub.NotificationSuccess : E.ub.NotificationError
                        }), o.createElement(E.Ya, {
                            fullWidth: !0,
                            padding: {
                                left: 1
                            }
                        }, o.createElement(E.W, {
                            type: E.Wb.Strong
                        }, e ? Object(b.d)("Success", "DevAddGameModal") : Object(b.d)("Error", "DevAddGameModal")), o.createElement(E.W, null, t)))
                    }, t
                }(o.Component),
                A = Object(s.compose)(Object(m.b)("DevAddGameModal", {
                    autoReportInteractive: !0
                }))(_);
            ! function(e) {
                e[e.Success = 0] = "Success", e[e.AlreadyOwnedByThisCompany = 1] = "AlreadyOwnedByThisCompany", e[e.AlreadyOwnedByAnotherCompany = 2] = "AlreadyOwnedByAnotherCompany", e[e.PermissionsError = 3] = "PermissionsError", e[e.UnexpectedError = 4] = "UnexpectedError"
            }(r || (r = {}));
            var y, T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            addGameStatus: null
                        }, t.onAddGame = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.props.company) return [2];
                                            if (t = this.props.company.id, this.alreadyOwnsGameID(e.id)) return this.setState({
                                                addGameStatus: r.AlreadyOwnedByThisCompany
                                            }), [2];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), n = c.a + "/v5/rbac/companies/" + t + "/game-application", [4, Object(g.a)(n, {
                                                method: "POST",
                                                body: JSON.stringify({
                                                    game_id: e.id
                                                })
                                            })];
                                        case 2:
                                            switch (a.sent().status) {
                                                case 200:
                                                    return Object(f.d)(f.a.RegisteredGame, e.id.toString()), this.setState({
                                                        addGameStatus: r.Success
                                                    }), [2];
                                                case 409:
                                                    return this.setState({
                                                        addGameStatus: r.AlreadyOwnedByAnotherCompany
                                                    }), [2];
                                                case 403:
                                                    return this.setState({
                                                        addGameStatus: r.PermissionsError
                                                    }), [2];
                                                default:
                                                    return this.setState({
                                                        addGameStatus: r.UnexpectedError
                                                    }), [2]
                                            }
                                            return [3, 4];
                                        case 3:
                                            return a.sent(), this.setState({
                                                addGameStatus: r.UnexpectedError
                                            }), [2];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(A, {
                            onSubmit: this.onAddGame,
                            addGameStatus: this.state.addGameStatus
                        })
                    }, t.prototype.alreadyOwnsGameID = function(e) {
                        return !!this.props.alreadyOwnedGameIDs.find(function(t) {
                            return t === e
                        })
                    }, t
                }(o.Component),
                C = Object(i.connect)(function(e) {
                    return {
                        company: Object(h.c)(e)
                    }
                })(T),
                O = n("uLRL"),
                I = n("PZVp"),
                P = n("/aPz"),
                w = n("kRBY"),
                D = n("Sejb");
            ! function(e) {
                e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
            }(y || (y = {}));
            var R, U = n("/ZC1");
            n("iYk3");
            ! function(e) {
                e.Submit = "SUBMIT_SELECTOR", e.Status = "STATUS_MESSAGE", e.Instructions = "INSTRUCTIONS_MESSAGE", e.PreviewImage = "PreviewImage", e.UploadInfo = "UploadInfo"
            }(R || (R = {}));
            var M = ["image/jpeg", "image/jpg"],
                k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.submitForm = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    return this.props.submitForm(), [2]
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = Object(b.d)("Submit", "DevEditBoxArtModal"),
                            t = Object(b.d)("The image must be a 600px by 800px, JPEG format, without developer, platform, or rating logos.", "DevEditBoxArtModal");
                        return o.createElement(E.Ya, {
                            className: "dev-edit-box-art-modal",
                            position: E.kb.Relative,
                            fullHeight: !0
                        }, o.createElement(E.Fb, {
                            className: "dev-edit-box-art-modal__background-container",
                            background: E.r.Base,
                            fullWidth: !0
                        }, o.createElement(E.Ya, {
                            padding: 2,
                            display: E.X.InlineBlock,
                            position: E.kb.Relative,
                            textAlign: E.Sb.Center,
                            fullWidth: !0
                        }, o.createElement(E.Fb, {
                            textAlign: E.Sb.Left,
                            borderBottom: !0,
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(E.W, {
                            type: E.Wb.H3,
                            color: E.O.Alt2,
                            fontSize: E.Ca.Size4
                        }, Object(b.d)("Edit Boxart for {gameName}", {
                            gameName: this.props.gameName
                        }, "DevEditBoxArtModal"), " ")), o.createElement(E.Ya, {
                            className: "dev-edit-box-art-modal__upload-container",
                            display: E.X.InlineBlock,
                            position: E.kb.Relative,
                            textAlign: E.Sb.Center,
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(E.Ya, {
                            className: "dev-edit-box-art-modal__upload",
                            display: E.X.InlineBlock,
                            position: E.kb.Relative,
                            textAlign: E.Sb.Center
                        }, o.createElement(U.a, {
                            allowedFileTypes: M,
                            onFilesSubmitted: this.props.onImageInputChange
                        }, "" === this.props.imagePreviewURL && x()), "" !== this.props.imagePreviewURL && G(this.props.imagePreviewURL))), o.createElement(E.Fb, {
                            "data-test-selector": R.Instructions,
                            fontSize: E.Ca.Size6,
                            position: E.kb.Relative,
                            textAlign: E.Sb.Center,
                            className: "profile-edit__status-message"
                        }, t), o.createElement(E.Fb, {
                            "data-test-selector": R.Status,
                            fontSize: E.Ca.Size4,
                            position: E.kb.Relative,
                            textAlign: E.Sb.Center,
                            className: "profile-edit__status-message"
                        }, null !== this.props.statusMessage && o.createElement(E.hb, a.__assign({}, function(e) {
                            switch (e) {
                                case y.Success:
                                    return {
                                        label: Object(b.d)("Success! It will take time for boxart to update across site.", "DevEditBoxArt"),
                                        type: E.ib.Success
                                    };
                                case y.UnexpectedError:
                                    return {
                                        label: Object(b.d)("Unexpected error, please try again.", "DevEditBoxArt"),
                                        type: E.ib.Alert
                                    };
                                case y.BadSizeError:
                                    return {
                                        label: Object(b.d)("Image must be 600px by 800px.", "DevEditBoxArt"),
                                        type: E.ib.Alert
                                    };
                                case y.NonImageError:
                                    return {
                                        label: Object(b.d)("You must upload an image.", "DevEditBoxArt"),
                                        type: E.ib.Alert
                                    };
                                case y.WrongFormatError:
                                    return {
                                        label: Object(b.d)("You must select a valid image type.", "DevEditBoxArt"),
                                        type: E.ib.Alert
                                    };
                                case y.TimeoutError:
                                    return {
                                        label: Object(b.d)("Upload timed-out. Please try again.", "DevEditBoxArt"),
                                        type: E.ib.Alert
                                    };
                                case y.Uploading:
                                    return {
                                        label: Object(b.d)("Uploading...", "DevEditBoxArt"),
                                        type: E.ib.Brand
                                    };
                                case y.ImageNotSelected:
                                    return {
                                        label: Object(b.d)("Select a image first.", "DevEditBoxArt"),
                                        type: E.ib.Alert
                                    };
                                default:
                                    return {
                                        label: Object(b.d)("Please try again.", "DevEditBoxArt"),
                                        type: E.ib.Alert
                                    }
                            }
                        }(this.props.statusMessage)))), o.createElement(E.z, {
                            "data-test-selector": R.Submit,
                            onClick: this.submitForm
                        }, e))), o.createElement(v.a, null))
                    }, t
                }(o.Component),
                G = function(e) {
                    return o.createElement(E.Ya, {
                        "data-test-selector": R.PreviewImage,
                        className: "dev-edit-box-art-modal__image-preview"
                    }, o.createElement("img", {
                        src: "" + e
                    }))
                },
                x = function() {
                    return o.createElement(E.Ya, {
                        "data-test-selector": R.UploadInfo,
                        className: "dev-edit-box-art-modal__upload-info"
                    }, o.createElement(E.Ya, null, o.createElement(E.tb, {
                        asset: E.ub.Plus,
                        type: E.vb.Alt2,
                        height: 20,
                        width: 20
                    })), o.createElement(E.W, {
                        type: E.Wb.H3,
                        color: E.O.Alt2,
                        fontSize: E.Ca.Size4
                    }, Object(b.d)("Upload Boxart", "DevEditBoxArtModal")))
                };
            var L, B = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            imagePreviewURL: "",
                            imageFormat: "",
                            statusMessage: null,
                            imageUploaded: !1,
                            currentImage: null
                        }, t.logger = b.k.withCategory("DevEditBoxArtModal"), t.onImageInputChange = function(e) {
                            var n;
                            if (null === e || e.length < 1) t.setState({
                                statusMessage: y.ImageNotSelected
                            });
                            else {
                                n = e[0];
                                var r = Object(D.a)(n);
                                Object(D.b)(n, function(e) {
                                    t.state.currentImage = e, t.setState({
                                        statusMessage: null
                                    })
                                }, function(e) {
                                    var n = null,
                                        a = new Image;
                                    a.onload = function() {
                                        800 === a.height && 600 === a.width || (n = y.BadSizeError), t.setState({
                                            statusMessage: n
                                        })
                                    }, a.src = e, t.setState({
                                        imagePreviewURL: e,
                                        imageFormat: r
                                    })
                                })
                            }
                        }, t.onSubmit = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, o = this;
                                return a.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (!this.state.currentImage) return this.setState({
                                                statusMessage: y.ImageNotSelected
                                            }), [2];
                                            this.setState({
                                                statusMessage: y.Uploading
                                            }), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, function(e, t, n) {
                                                return a.__awaiter(this, void 0, void 0, function() {
                                                    return a.__generator(this, function(r) {
                                                        switch (r.label) {
                                                            case 0:
                                                                return [4, fetch(b.a.apiBaseURL + "/v5/piper/boxart/upload/" + e + "?client_id=" + b.a.authSettings.clientID + "&api_version=" + b.a.defaultAPIVersion + "&format=" + n, {
                                                                    method: "GET",
                                                                    headers: {
                                                                        Authorization: "OAuth " + t
                                                                    }
                                                                })];
                                                            case 1:
                                                                return [2, r.sent().json()]
                                                        }
                                                    })
                                                })
                                            }(this.props.game.id, this.props.authToken, this.state.imageFormat)];
                                        case 2:
                                            return e = i.sent(), t = e.upload.url, n = e.upload.upload_id, [3, 4];
                                        case 3:
                                            return r = i.sent(), this.logger.error(r, "Request for upload ID failed to get expected response from server."), this.setState({
                                                statusMessage: y.UnexpectedError
                                            }), [2];
                                        case 4:
                                            return this.unsubscribe = b.l.subscribe({
                                                topic: Object(P.D)(n),
                                                success: function() {
                                                    try {
                                                        ! function(e, t) {
                                                            if (!t) throw new Error("Attempted to upload an empty file object.");
                                                            var n = decodeURI(e);
                                                            fetch(n, {
                                                                method: "PUT",
                                                                body: new Blob([t])
                                                            })
                                                        }(t, o.state.currentImage)
                                                    } catch (e) {
                                                        o.logger.error(e, "Dev Box Art Upload failed."), o.unsubscribe(), o.setState({
                                                            statusMessage: y.UnexpectedError,
                                                            imagePreviewURL: "",
                                                            imageFormat: ""
                                                        })
                                                    }
                                                    o.timeoutHandle = setTimeout(function() {
                                                        return o.handlePubSubTimeout()
                                                    }, 1e4)
                                                },
                                                failure: function() {
                                                    o.setState({
                                                        statusMessage: y.UnexpectedError,
                                                        imagePreviewURL: ""
                                                    })
                                                },
                                                onMessage: function(e) {
                                                    if (e.upload_id === n) {
                                                        clearTimeout(o.timeoutHandle);
                                                        var t = null;
                                                        switch (e.status) {
                                                            case I.a.POSTPROCESS_COMPLETE:
                                                            case I.a.COMPLETE:
                                                                t = y.Success;
                                                                break;
                                                            case I.a.WIDTH_VALIDATION_FAILED:
                                                            case I.a.HEIGHT_VALIDATION_FAILED:
                                                                t = y.BadSizeError;
                                                                break;
                                                            case I.a.IS_IMAGE_VALIDATION_FAILED:
                                                                t = y.NonImageError;
                                                                break;
                                                            case I.a.IMAGE_FORMAT_VALIDATION_FAILED:
                                                                t = y.WrongFormatError;
                                                                break;
                                                            default:
                                                                t = y.UnexpectedError
                                                        }
                                                        o.unsubscribe && o.unsubscribe();
                                                        var r = "";
                                                        if (o.props.game.id && (r = o.props.game.id.toString()), o.setState({
                                                                statusMessage: t
                                                            }), t === y.Success) return Object(f.d)(f.a.UploadedBoxArt, r), void o.setState({
                                                            imageUploaded: !0
                                                        });
                                                        Object(f.d)(f.a.BoxArtUploadFailed, r), o.setState({
                                                            imageUploaded: !1,
                                                            imagePreviewURL: "",
                                                            imageFormat: "",
                                                            currentImage: null
                                                        })
                                                    }
                                                }
                                            }), [2]
                                    }
                                })
                            })
                        }, t.handlePubSubTimeout = function() {
                            t.unsubscribe(), t.setState({
                                statusMessage: y.TimeoutError
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        void 0 !== this.unsubscribe && this.unsubscribe(), this.timeoutHandle && clearTimeout(this.timeoutHandle)
                    }, t.prototype.render = function() {
                        return o.createElement(k, {
                            imagePreviewURL: this.state.imagePreviewURL,
                            statusMessage: this.state.statusMessage,
                            submitForm: this.onSubmit,
                            onImageInputChange: this.onImageInputChange,
                            gameName: this.props.game.name
                        })
                    }, t
                }(o.Component),
                j = Object(i.connect)(function(e) {
                    return {
                        authToken: Object(w.a)(e)
                    }
                })(B),
                F = (n("Owpq"), {
                    QuarterlyInsightsButton: "QUARTERLY_INSIGHTS_BUTTON",
                    LatestReportButton: "LATEST_REPORT_BUTTON",
                    BoxArtButton: "BOX_ART_BUTTON"
                }),
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            imageLoadError: !1
                        }, t.renderDownloadCSVButton = function() {
                            return t.props.report ? o.createElement(E.Ya, {
                                padding: {
                                    left: 1,
                                    right: 1,
                                    bottom: 1
                                }
                            }, o.createElement(E.z, {
                                "data-test-selector": F.LatestReportButton,
                                onClick: Object(f.c)(f.a.GameCSVExport, t.props.game.id.toString()),
                                linkTo: t.props.report,
                                fullWidth: !0
                            }, Object(b.d)("Export Daily CSV", "DevGameCard"))) : null
                        }, t.onImageLoadError = function(e) {
                            e.preventDefault(), t.setState({
                                imageLoadError: !0
                            })
                        }, t.onEditBoxArtClick = function() {
                            t.props.onEditBoxArtClick(t.props.game)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = Object(b.d)("{gameName} Box Art", {
                            gameName: this.props.game.name
                        }, "DevGameCard");
                        return o.createElement(E.Ya, {
                            padding: {
                                top: 1,
                                bottom: 1
                            },
                            className: "dev-game-card"
                        }, o.createElement(E.G, null, o.createElement(E.I, {
                            src: this.imageSrc(),
                            alt: e,
                            aspect: E.p.Aspect3x4,
                            onError: this.onImageLoadError
                        }), o.createElement(E.H, null, o.createElement(E.Ya, {
                            padding: {
                                top: 1
                            },
                            textAlign: E.Sb.Center
                        }, o.createElement(E.W, {
                            type: E.Wb.H3,
                            fontSize: E.Ca.Size4
                        }, this.props.game.name))), o.createElement(E.Fb, {
                            background: E.r.Overlay,
                            className: "dev-game-card__boxart-edit",
                            margin: 1,
                            position: E.kb.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, o.createElement(E.A, {
                            "data-test-selector": F.BoxArtButton,
                            overlay: !0,
                            icon: E.ub.Edit,
                            onClick: this.onEditBoxArtClick
                        }))), o.createElement(E.Ya, {
                            padding: {
                                top: 1
                            },
                            justifyContent: E.Xa.Center
                        }, this.renderDownloadCSVButton(), o.createElement(E.Ya, {
                            padding: {
                                left: 1,
                                right: 1,
                                bottom: 1
                            }
                        }, o.createElement(E.z, {
                            "data-test-selector": F.QuarterlyInsightsButton,
                            onClick: Object(f.c)(f.a.ViewQuarterlyInsights, this.props.game.id.toString()),
                            linkTo: "/insights/games/" + this.props.game.id,
                            fullWidth: !0
                        }, Object(b.d)("View Quarterly Insights", "DevGameCard")))))
                    }, t.prototype.imageSrc = function() {
                        return this.state.imageLoadError ? "https://static-cdn.jtvnw.net/ttv-boxart/404_boxart.jpg" : "https://twitch-gds-boxart-aws.s3-us-west-2.amazonaws.com/" + encodeURI(this.props.game.name) + ".jpg"
                    }, t
                }(o.Component),
                V = Object(s.compose)(Object(m.b)("DevGameCard"))(N);
            (L || (L = {})).AddGame = "ADD_GAME";
            var W = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderGameCards = function() {
                            return t.props.games.map(function(e) {
                                return o.createElement(V, {
                                    key: e.id,
                                    game: e,
                                    report: t.props.reportsByGame[e.id],
                                    onEditBoxArtClick: t.onEditBoxArtClick
                                })
                            })
                        }, t.onEditBoxArtClick = function(e) {
                            Object(f.d)(f.a.EditBoxArtStarted, e.id.toString()), t.props.showEditBoxArtModal({
                                game: e
                            })
                        }, t.onAddGameClick = function() {
                            Object(f.d)(f.a.AddGameStarted);
                            var e = t.props.games.map(function(e) {
                                return e.id
                            });
                            t.props.showAddGameModal({
                                alreadyOwnedGameIDs: e
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(E.Ya, {
                            className: "dev-games"
                        }, o.createElement(E.sb, {
                            centered: !0
                        }, o.createElement(E.Qa, {
                            margin: {
                                bottom: 2
                            },
                            display: E.X.Flex,
                            justifyContent: E.Xa.Between
                        }, o.createElement("header", null, o.createElement(E.Ya, {
                            display: E.X.Flex
                        }, o.createElement(E.Ya, null, o.createElement(E.W, {
                            type: E.Wb.P,
                            fontSize: E.Ca.Size5
                        }, Object(b.d)("<x:bold>Developer Analytics:</x:bold> CSV data includes select viewer and broadcast data by day for each game across Twitch. The <x:link>Twitch API</x:link> also provides you access to this data.", {
                            "x:bold": function(e) {
                                return o.createElement("strong", {
                                    key: "devSiteDeveloperAnalytics"
                                }, e)
                            },
                            "x:link": function(e) {
                                return o.createElement("a", {
                                    key: "devSiteTwitchApiLink",
                                    href: "https://dev.twitch.tv/docs/api/reference#get-game-analytics",
                                    target: "_blank"
                                }, e)
                            }
                        }, "DevApps")), o.createElement(E.W, {
                            type: E.Wb.P,
                            fontSize: E.Ca.Size5
                        }, Object(b.d)("If the Export CSV Data button does not appear, the game does not meet the minutes-watched threshold for report generation. <x:link>Learn more</x:link>.", {
                            "x:link": function(e) {
                                return o.createElement("a", {
                                    key: "devSiteLearnMore",
                                    href: "https://dev.twitch.tv/docs/game-analytics",
                                    target: "_blank"
                                }, e)
                            }
                        }, "DevApps"))), o.createElement(E.Ya, {
                            margin: {
                                left: 1
                            }
                        }, o.createElement(E.z, {
                            "data-test-selector": L.AddGame,
                            icon: E.ub.Plus,
                            onClick: this.onAddGameClick
                        }, Object(b.d)("Add game", "DevApps")))))), o.createElement(E.Ya, null, o.createElement(E.cc, {
                            gutterSize: E.ec.Large,
                            childWidth: E.dc.Medium,
                            placeholderItems: 5
                        }, this.renderGameCards()))))
                    }, t
                }(o.Component),
                Y = Object(m.b)("DevGamesComponent", {
                    autoReportInteractive: !0
                })(W);
            var z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            games: [],
                            reportsByGame: {}
                        }, t.loadGames = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return a.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            e = [], r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 5, , 6]), [4, Object(g.a)(c.a + "/v5/rbac/current-games")];
                                        case 2:
                                            return 200 !== (t = r.sent()).status ? [3, 4] : [4, t.json()];
                                        case 3:
                                            (n = r.sent()) && (e = n.games.sort(function(e, t) {
                                                return e.id >= t.id ? 1 : -1
                                            })), r.label = 4;
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            return r.sent(), e = [], [3, 6];
                                        case 6:
                                            return [2, e]
                                    }
                                })
                            })
                        }, t.loadGameReports = function() {
                            return a.__awaiter(t, void 0, Promise, function() {
                                var e, t, n, r, o = this;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            e = {}, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 6, , 7]), [4, Object(g.a)(c.a + "/v5/piper/report/games")];
                                        case 2:
                                            return 200 !== (t = a.sent()).status ? [3, 5] : [4, t.json()];
                                        case 3:
                                            return (n = a.sent()) ? (r = n.reports, [4, Promise.all(r.map(function(e) {
                                                return o.getLatestGameReport(e)
                                            }))]) : [3, 5];
                                        case 4:
                                            return a.sent().forEach(function(t) {
                                                if (t) return e[t.GameID] = t.ReportURL, e
                                            }), [2, e];
                                        case 5:
                                            return [3, 7];
                                        case 6:
                                            return a.sent(), [3, 7];
                                        case 7:
                                            return [2, e]
                                    }
                                })
                            })
                        }, t.getLatestGameReport = function(e) {
                            return a.__awaiter(t, void 0, Promise, function() {
                                var t, n;
                                return a.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 4, , 5]), [4, Object(g.a)(c.a + "/v5/piper/report/games/" + e.game_id + "/" + e.report + "/latest")];
                                        case 1:
                                            return 200 !== (t = r.sent()).status ? [3, 3] : [4, t.json()];
                                        case 2:
                                            return n = r.sent(), [2, {
                                                GameID: e.game_id,
                                                ReportURL: n
                                            }];
                                        case 3:
                                            return [3, 5];
                                        case 4:
                                            return r.sent(), [2, null];
                                        case 5:
                                            return [2, null]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.loadGames()];
                                    case 1:
                                        return e = n.sent(), this.setState({
                                            games: e
                                        }), [4, this.loadGameReports()];
                                    case 2:
                                        return t = n.sent(), this.setState({
                                            reportsByGame: t
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return o.createElement(Y, {
                            games: this.state.games,
                            reportsByGame: this.state.reportsByGame,
                            showEditBoxArtModal: this.props.showEditBoxArtModal,
                            showAddGameModal: this.props.showAddGameModal
                        })
                    }, t
                }(o.Component),
                q = Object(s.compose)(Object(O.a)(), Object(m.b)("DevGamesPage", {
                    autoReportInteractive: !0,
                    destination: l.a.DevSiteGames
                }), Object(u.a)({
                    location: p.PageviewLocation.DevSiteGames
                }), Object(i.connect)(null, function(e) {
                    return Object(s.bindActionCreators)({
                        showEditBoxArtModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(d.d)(j, t)
                        },
                        showAddGameModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(d.d)(C, t)
                        }
                    }, e)
                }))(z);
            n.d(t, "DevGamesPage", function() {
                return q
            })
        },
        By5U: function(e, t) {},
        GD6M: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("fvjX"),
                i = n("u5aL"),
                s = n("GnwI"),
                u = n("Ue10"),
                c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            e.preventDefault(), t.props.onClick(t.props.game)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.Va, {
                            onClick: this.onClick
                        }, a.createElement(u.Ya, {
                            padding: 1
                        }, a.createElement(u.W, null, this.props.game.name)))
                    }, t
                }(a.Component),
                d = Object(o.compose)(Object(s.b)("DevGameSuggestion", {
                    autoReportInteractive: !0
                }))(c),
                l = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function() {
                            t.props.onLabelRemove(t.props.game)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.Pb, {
                            onClick: this.onClick,
                            label: this.props.game.name
                        })
                    }, t
                }(a.Component),
                p = 100,
                m = "GAME_SEARCH_INPUT_SELECTOR",
                g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            searchTerm: "",
                            showSuggestions: !1,
                            games: []
                        }, t.onGameSearch = function(e) {
                            e.preventDefault(), t.setState({
                                searchTerm: e.target.value,
                                showSuggestions: e.target.value.length > 0
                            }, function() {
                                t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), t.inputTimer = setTimeout(function() {
                                    return t.props.onInputChange(t.state.searchTerm)
                                }, p)
                            })
                        }, t.onClickOut = function() {
                            t.setState({
                                showSuggestions: !1
                            })
                        }, t.onFocus = function(e) {
                            e.preventDefault(), t.props.gameSuggestions.length && t.setState({
                                showSuggestions: !0
                            })
                        }, t.onLabelClick = function(e) {
                            t.setState(function(t) {
                                var n = t.games.findIndex(function(t) {
                                    return t._id === e._id
                                });
                                return n > -1 ? {
                                    games: t.games.slice(0, n).concat(t.games.slice(n + 1))
                                } : {
                                    games: t.games
                                }
                            }, t.reportGames)
                        }, t.renderSuggestions = function() {
                            return t.props.gameSuggestions.map(function(e, n) {
                                return a.createElement(d, {
                                    key: n,
                                    game: e,
                                    onClick: t.onSuggestionClick
                                })
                            })
                        }, t.renderSelections = function() {
                            return t.state.games.map(function(e) {
                                return a.createElement(u.Ya, {
                                    key: e._id,
                                    display: u.X.InlineBlock,
                                    padding: {
                                        right: .5
                                    }
                                }, a.createElement(l, {
                                    game: e,
                                    onLabelRemove: t.onLabelClick
                                }))
                            })
                        }, t.onSuggestionClick = function(e) {
                            t.props.multi ? t.setState(function(t) {
                                return t.games.some(function(t) {
                                    return t._id === e._id
                                }) ? {
                                    games: t.games,
                                    showSuggestions: !1,
                                    searchTerm: ""
                                } : {
                                    games: t.games.concat([e]),
                                    showSuggestions: !1,
                                    searchTerm: ""
                                }
                            }, t.reportGames) : t.setState({
                                games: [e],
                                showSuggestions: !1,
                                searchTerm: ""
                            }, t.reportGames)
                        }, t.reportGames = function() {
                            t.props.onGameSelect(t.state.games)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        var t = e.gameSuggestions.length !== this.props.gameSuggestions.length;
                        this.setState(function(n) {
                            return !t && n.showSuggestions || t && e.gameSuggestions.length > 0 ? {
                                showSuggestions: !0
                            } : {
                                showSuggestions: n.showSuggestions
                            }
                        })
                    }, t.prototype.render = function() {
                        var e = 0 === this.state.games.length || this.props.multi;
                        return a.createElement(u.Ya, null, a.createElement(i.a, {
                            onClickOut: this.onClickOut
                        }, a.createElement(u.Ya, {
                            position: u.kb.Relative,
                            padding: {
                                bottom: 1
                            }
                        }, e && a.createElement(u.Sa, {
                            "data-test-selector": m,
                            value: this.state.searchTerm,
                            onChange: this.onGameSearch,
                            type: u.Ua.Text,
                            onFocus: this.onFocus
                        }), a.createElement(u.u, {
                            show: this.state.showSuggestions
                        }, this.renderSuggestions())), a.createElement(u.Ya, {
                            padding: {
                                bottom: .5
                            }
                        }, this.renderSelections())))
                    }, t
                }(a.Component),
                f = Object(o.compose)(Object(s.b)("DevGameSearch", {
                    autoReportInteractive: !0
                }))(g),
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            gameSuggestions: t.props.gameSuggestions || []
                        }, t.findGames = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                return r.__generator(this, function(t) {
                                    return e.length ? (this.setState({
                                        gameSuggestions: this.props.gameSuggestions.filter(function(t) {
                                            return t.name.toLowerCase().includes(e.toLowerCase())
                                        })
                                    }), [2]) : (this.setState({
                                        gameSuggestions: this.props.gameSuggestions
                                    }), [2])
                                })
                            })
                        }, t.onGameSelect = function(e) {
                            t.setState({
                                gameSuggestions: []
                            }), e.length || t.setState({
                                gameSuggestions: t.props.gameSuggestions
                            }), t.props.onGameSelect(e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(f, {
                            gameSuggestions: this.state.gameSuggestions,
                            onGameSelect: this.onGameSelect,
                            onInputChange: this.findGames,
                            multi: this.props.multi
                        })
                    }, t
                }(a.Component),
                b = n("Svt6"),
                v = n("+GjP"),
                S = n("1mFg"),
                E = b.a + "/kraken/search/games",
                _ = 7,
                A = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            games: []
                        }, t.findGames = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, n, a, o;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 4, , 5]), e.length ? (t = Object(v.e)(E, {
                                                query: e.trim(),
                                                type: "suggest"
                                            }), [4, Object(S.a)(t)]) : (this.setState({
                                                games: []
                                            }), [2]);
                                        case 1:
                                            return n = r.sent(), a = [], 200 !== n.status ? [3, 3] : [4, n.json()];
                                        case 2:
                                            o = r.sent(), a = o.games, r.label = 3;
                                        case 3:
                                            return a = a.slice(0, this.props.limit || _), this.setState({
                                                games: a
                                            }), [3, 5];
                                        case 4:
                                            return r.sent(), this.setState({
                                                games: []
                                            }), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onGameSelect = function(e) {
                            t.setState({
                                games: []
                            }), t.props.onGameSelect(e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(f, {
                            gameSuggestions: this.state.games,
                            onGameSelect: this.onGameSelect,
                            onInputChange: this.findGames,
                            multi: this.props.multi
                        })
                    }, t
                }(a.Component);
            n.d(t, "a", function() {
                return h
            }), n.d(t, "b", function() {
                return A
            })
        },
        Owpq: function(e, t, n) {},
        PZVp: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.REQUESTED = 0] = "REQUESTED", e[e.POSTPROCESS_STARTED = 1] = "POSTPROCESS_STARTED", e[e.POSTPROCESS_COMPLETE = 2] = "POSTPROCESS_COMPLETE", e[e.COMPLETE = 3] = "COMPLETE", e[e.VALIDATION_FAILED = 4] = "VALIDATION_FAILED", e[e.POSTPROCESS_FAILED = 5] = "POSTPROCESS_FAILED", e[e.POSTPROCESS_RETRYING = 6] = "POSTPROCESS_RETRYING", e[e.FEATURE_SERVICE_FAILED = 7] = "FEATURE_SERVICE_FAILED", e[e.IS_IMAGE_VALIDATION_FAILED = 110] = "IS_IMAGE_VALIDATION_FAILED", e[e.ASPECT_RATIO_VALIDATION_FAILED = 111] = "ASPECT_RATIO_VALIDATION_FAILED", e[e.WIDTH_VALIDATION_FAILED = 112] = "WIDTH_VALIDATION_FAILED", e[e.HEIGHT_VALIDATION_FAILED = 113] = "HEIGHT_VALIDATION_FAILED", e[e.IMAGE_FORMAT_VALIDATION_FAILED = 114] = "IMAGE_FORMAT_VALIDATION_FAILED", e[e.FILE_SIZE_VALIDATION_FAILED = 120] = "FILE_SIZE_VALIDATION_FAILED", e[e.TRANSFORMATION_FAILED = 210] = "TRANSFORMATION_FAILED", e[e.PROCESSING_FAILED = 220] = "PROCESSING_FAILED"
                }(r || (r = {}))
        },
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
        "V+GM": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("cr+I"),
                o = n("q1tI"),
                i = n("wIs1"),
                s = n("/7QA");

            function u(e) {
                return function(t) {
                    var n = function(n) {
                        function i(t) {
                            var a = n.call(this, t) || this;
                            return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                                if (!(a.tracked || e.skip && e.skip(a.props))) {
                                    a.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = r.__assign({}, e.properties));
                                    var n = r.__assign({}, a.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var o = a.referenceTracking,
                                        i = o.content,
                                        u = o.medium,
                                        c = o.content_index,
                                        d = o.email_id;
                                    s.p.tracking.trackPageview(r.__assign({
                                        content: i,
                                        medium: u,
                                        content_index: c,
                                        email_id: d,
                                        location: e.location
                                    }, t))
                                }
                            }, s.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                        }
                        return r.__extends(i, n), i.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, i.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, i.prototype.render = function() {
                            return o.createElement(t, r.__assign({}, this.props))
                        }, i.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? a.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var r = "",
                                    o = a.stringify(t);
                                o.length > 0 && (r = "?" + o), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: r
                                })
                            }
                            return n
                        }, i
                    }(o.Component);
                    return Object(i.a)(n)
                }
            }
            n.d(t, "a", function() {
                return u
            })
        },
        VSaV: function(e, t) {},
        WQCf: function(e, t, n) {
            "use strict";
            n.d(t, "d", function() {
                return d
            }), n.d(t, "c", function() {
                return l
            }), n.d(t, "a", function() {
                return p
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "g", function() {
                return a
            }), n.d(t, "f", function() {
                return s
            }), n.d(t, "e", function() {
                return u
            });
            var r, a, o, i, s, u, c, d = {
                    BitsLeaderboardEvents: "leaderboard-events-v1",
                    BitsCampaignEvents: "bits-campaigns-v1",
                    CampaignGlobalEvents: "campaign-events",
                    CampaignUserEvents: "user-campaign-events",
                    ChannelBitsEvents: "channel-bits-events-v1",
                    ChannelBitsPinEvents: "channel-bit-events-public",
                    ChannelEventUpdates: "channel-event-updates",
                    ChannelSquadUpdates: "channel-squad-updates",
                    ChannelSubscribeEvents: "channel-subscribe-events-v1",
                    CheerbombEventsTopic: "channel-cheer-events-public-v1",
                    BroadcastSettingsUpdate: "broadcast-settings-update",
                    ChatRoom: "chatrooms-room-v1",
                    ChatRoomsChannel: "chatrooms-channel-v1",
                    ChatRoomsUser: "chatrooms-user-v1",
                    Follows: "follows",
                    Friendship: "friendship",
                    ImageUpload: "user-image-update",
                    ModerationActionsByUserAndChannel: "chat_moderator_actions",
                    MultiviewChanletUpdate: "multiview-chanlet-update",
                    MysteryGift: "channel-sub-gifts-v1",
                    OnsiteNotifications: "onsite-notifications",
                    PayoutOnboardingEvents: "payout-onboarding-events",
                    Presence: "presence",
                    PurchaseFulfillmentEvents: "purchase-fulfillment-events",
                    Raid: "raid",
                    SquadUpdates: "squad-updates",
                    StreamChange: "stream-change-v1",
                    StreamChatRoom: "stream-chat-room-v1",
                    SubscribersCSV: "subscribers-csv-v1",
                    UploadService: "upload",
                    UserBitsUpdates: "user-bits-updates-v1",
                    UserCommerceEvents: "user-commerce-events",
                    UserCrateEvents: "user-crate-events-v1",
                    UserPropertiesUpdates: "user-properties-update",
                    UserSubscribeEvents: "user-subscribe-events-v1",
                    VideoPlayback: "video-playback",
                    VideoPlaybackById: "video-playback-by-id",
                    VideoThumbnailProcessing: "video-thumbnail-processing",
                    Whispers: "whispers"
                },
                l = {
                    BitsChannelSettingsEvent: "channel_settings_update",
                    BitsCampaignAddCheermoteEvent: "sponsored-cheermote-add",
                    BitsCampaignRemoveCheermoteEvent: "sponsored-cheermote-remove",
                    BitsCampaignTotalUpdate: "sponsored-cheermote-update-used",
                    BitsCampaignComplete: "sponsored-cheermote-campaign-complete",
                    BitsPinEvent: "bits-pin-event",
                    BitsLeaderboardEvent: "bits-leaderboard-event",
                    ChannelStreamDown: "stream-down",
                    ChannelStreamUp: "stream-up",
                    BroadcastSettingsUpdate: "broadcast_settings_update",
                    ChatNotification: "chat-notification",
                    ChatRoomCreated: "created_room",
                    ChatRoomDeleted: "deleted_room",
                    ChatRoomUpdated: "updated_room",
                    ChatRoomsUserModAction: "user_moderation_action",
                    ChatRoomMessageCreated: "created_room_message",
                    ChatRoomMessageEdited: "edited_room_message",
                    ChatRoomMessageDeleted: "deleted_room_message",
                    ChatRoomsRoomViewUpdated: "updated_room_view",
                    CheerbombEvent: "cheerbomb",
                    Commercial: "commercial",
                    ImageUploadSuccess: "imageuploadsuccess",
                    LiveEvent: "live-event",
                    ModerationAction: "moderation_action",
                    ModeratorAdded: "moderator_added",
                    ModeratorRemoved: "moderator_removed",
                    MultiviewChanletUpdate: "chanlet",
                    MysteryGiftPurchase: "mystery-gift-purchase",
                    OnsiteNotificationCreate: "create-notification",
                    OnsiteNotificationDelete: "delete-notification",
                    OnsiteNotificationsRead: "read-notifications",
                    OnsiteNotificationSummaryUpdate: "update-summary",
                    OnsiteNotificationUpdate: "update-notification",
                    PayoutOnboardingEvent: "payout-onboarding-event",
                    Presence: "presence",
                    PresenceSettings: "settings",
                    PurchaseFulfillmentEvents: "purchase_fulfillment_events",
                    PurgeMessageRequest: "purge_messages_request",
                    RaidCancel: "raid_cancel",
                    RaidUpdate: "raid_update",
                    RaidCancelV2: "raid_cancel_v2",
                    RaidUpdateV2: "raid_update_v2",
                    RaidGoV2: "raid_go_v2",
                    Squad: "squad",
                    StreamChatRoomChatRichEmbed: "chat_rich_embed",
                    StreamChatRoomHostTargetChange: "host_target_change",
                    StreamChatRoomExtensionMessage: "extension_message",
                    StreamDown: "stream_down",
                    StreamUp: "stream_up",
                    SubscribersCSVComplete: "subscribers_csv_complete_v1",
                    SubscribersCSVInProgress: "subscribers_csv_in_progress_v1",
                    UpdatedChannelChatProperty: "updated_channel_chat_property",
                    UploadService: "upload",
                    UserBitsBalanceUpdate: "balance_update",
                    UserBitsBadgeUpdate: "badge_update",
                    UserBitsFirstPurchase: "first_bits_purchase",
                    UserCampaignProgressEvent: "progress",
                    UserCampaignRewardEvent: "reward",
                    UserCrateEvent: "crate-event",
                    UserFollowedEvent: "user-followed",
                    UserGiftEvent: "gift-event",
                    UserMention: "user_mention",
                    UserPropertiesUpdate: "user_properties_update",
                    UserUnfollowedEvent: "user-unfollowed",
                    VideoThumbnailProcessingComplete: "processing_complete",
                    VideoThumbnailProcessingError: "processing_error",
                    ViewCount: "viewcount",
                    Vodcast: "watchparty-vod",
                    WhisperAllThreadsUpdate: "threads",
                    WhisperDeleted: "whisper_deleted",
                    WhisperEdited: "whisper_edited",
                    WhisperReceived: "whisper_received",
                    WhisperSent: "whisper_sent",
                    WhisperThreadUpdate: "thread"
                },
                p = {
                    Accepted: "accepted",
                    Requested: "requested",
                    Removed: "removed",
                    SelfAccepted: "self_accepted",
                    SelfRemoved: "self_removed",
                    SelfRequested: "self_requested"
                };
            ! function(e) {
                e.AddBlockedTerm = "add_blocked_term", e.AddPermittedTerm = "add_permitted_term", e.AutoModEnabled = "automod_enabled", e.AutoModRejected = "automod_rejected", e.DeniedAutoModMessage = "denied_automod_message", e.ApprovedAutoModMessage = "approved_automod_message", e.AutoModCheerRejected = "automod_cheer_rejected", e.Ban = "ban", e.Clear = "clear", e.Delete = "delete", e.DeleteBlockedTerm = "delete_blocked_term", e.DeletePermittedTerm = "delete_permitted_term", e.EmoteOnly = "emoteonly", e.EmoteOnlyOff = "emoteonlyoff", e.FollowersOnly = "followers", e.FollowersOnlyOff = "followersoff", e.Host = "host", e.Mod = "mod", e.ModifiedAutoModProperties = "modified_automod_properties", e.R9kBeta = "r9kbeta", e.R9kBetaOff = "r9kbetaoff", e.Raid = "raid", e.Slow = "slow", e.SlowOff = "slowoff", e.SubsBeta = "subsbeta", e.SubscribersOnly = "subscribers", e.SubscribersOnlyOff = "subscribersoff", e.Timeout = "timeout", e.Unban = "unban", e.Unhost = "unhost", e.Unmod = "unmod", e.Unraid = "unraid", e.Untimeout = "untimeout"
            }(r || (r = {})),
            function(e) {
                e.AutoModMessageRejected = "automod_message_rejected", e.AutoModMessageApproved = "automod_message_approved", e.AutoModMessageDenied = "automod_message_denied", e.AutoModCheerDenied = "automod_cheer_message_denied", e.AutoModCheerTimeout = "automod_cheer_message_timeout"
            }(a || (a = {})),
            function(e) {
                e.Archive = "archive", e.Highlight = "highlight", e.Upload = "upload", e.Premiere = "premiere", e.Rerun = "rerun", e.WatchPartyPremiere = "watch_party_premiere", e.WatchPartyRerun = "watch_party_rerun"
            }(o || (o = {})),
            function(e) {
                e.Private = "private", e.Public = "public"
            }(i || (i = {})),
            function(e) {
                e.Pending = "PENDING", e.Live = "LIVE", e.Ended = "ENDED"
            }(s || (s = {})),
            function(e) {
                e.Success = "fulfilled", e.Failure = "failed"
            }(u || (u = {})),
            function(e) {
                e.Subs = "subs"
            }(c || (c = {}))
        },
        iYk3: function(e, t, n) {},
        sL9O: function(e, t, n) {},
        uLRL: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            });
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("/MKj"),
                i = n("mLw1"),
                s = n("2Ygb"),
                u = n("dEJ+"),
                c = n("Ue10");

            function d() {
                return function(e) {
                    var t = function(t) {
                        function n() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return r.__extends(n, t), n.prototype.render = function() {
                            switch (this.props.loadState) {
                                case u.a.NOT_LOADED:
                                    return a.createElement(c.ab, null);
                                case u.a.LOADED_BUT_PENDING_REVIEW:
                                    return a.createElement(i.a, {
                                        to: "/access-pending"
                                    });
                                case u.a.LOADED_BUT_NOT_FOUND:
                                    return a.createElement(i.a, {
                                        to: "/request-access"
                                    });
                                case u.a.LOADED:
                                    var t = {
                                        company: this.props.company
                                    };
                                    return a.createElement(e, r.__assign({}, this.props, t));
                                case u.a.LOADED_WITH_INTERNAL_ERROR:
                                default:
                                    return a.createElement(i.a, {
                                        to: "/access-pending"
                                    })
                            }
                        }, n.displayName = Object(s.a)(n.name, e), n
                    }(a.Component);
                    return Object(o.connect)(function(e) {
                        return {
                            loadState: Object(u.e)(e),
                            company: Object(u.c)(e),
                            pendingApplication: Object(u.f)(e),
                            errorMsg: Object(u.d)(e)
                        }
                    })(t)
                }
            }
        }
    }
]);