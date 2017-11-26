webpackJsonp([46], {
    1002: function(e, t) {},
    1003: function(e, t) {},
    1004: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return e === r.SECOND ? Object(s.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                secondCount: t
            }, "formatDuration") : e === r.MINUTE ? Object(s.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                minuteCount: t
            }, "formatDuration") : e === r.DAY ? Object(s.d)("{dayCount, plural, one {# day} other {# days}}", {
                dayCount: t
            }, "formatDuration") : e === r.HOUR ? Object(s.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                hourCount: t
            }, "formatDuration") : e === r.WEEK ? Object(s.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                weekCount: t
            }, "formatDuration") : e === r.MONTH ? Object(s.d)("{monthCount, plural, one {# month} other {# months}}", {
                monthCount: t
            }, "formatDuration") : ""
        }

        function a(e) {
            if (e < 60) return i(r.SECOND, e);
            var t = Math.floor(e / 60),
                n = e % 60;
            if (t < 60) return n ? i(r.MINUTE, t) + " " + i(r.SECOND, n) : i(r.MINUTE, t);
            var a = Math.floor(t / 60);
            if (t %= 60, a < 24) return t ? i(r.HOUR, a) + " " + i(r.MINUTE, t) : i(r.HOUR, a);
            var s = Math.floor(a / 24);
            if (a %= 24, s < 7) return a ? i(r.DAY, s) + " " + i(r.HOUR, a) : i(r.DAY, s);
            if (s <= 26) {
                var o = Math.floor(s / 7);
                return s %= 7, s ? i(r.WEEK, o) + " " + i(r.DAY, s) : i(r.WEEK, o)
            }
            var l = Math.round((s + 3) / 30);
            return i(r.MONTH, l)
        }
        t.a = a;
        var r, s = n(2);
        ! function(e) {
            e[e.SECOND = 0] = "SECOND", e[e.MINUTE = 1] = "MINUTE", e[e.HOUR = 2] = "HOUR", e[e.DAY = 3] = "DAY", e[e.WEEK = 4] = "WEEK", e[e.MONTH = 5] = "MONTH"
        }(r || (r = {}))
    },
    1008: function(e, t) {},
    1010: function(e, t, n) {
        "use strict";
        var i = n(1032);
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return i.b
        }), n.d(t, "a", function() {
            return i.a
        })
    },
    1032: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                isLoggedIn: Object(T.d)(e)
            }
        }

        function a(e, t, n) {
            var i = new FileReader;
            i.onloadend = function() {
                n && n(i.result)
            }, i.readAsDataURL(e);
            var a = new FileReader;
            a.onloadend = function() {
                t(a.result)
            }, a.readAsArrayBuffer(e)
        }

        function r(e, t) {
            if (!t) throw new Error("Attempted to upload an empty file object.");
            var n = decodeURI(e);
            return fetch(n, {
                method: "PUT",
                body: new Blob([t])
            })
        }

        function s(e, t, n) {
            if (void 0 === n) throw new Error("No default avatar selected.");
            return fetch(f.a.krakenEndpoint + "/users/" + e + "/default_images?client_id=" + f.a.authClientID + "&api_version=" + f.a.defaultAPIVersion, {
                method: "PUT",
                headers: {
                    Authorization: "OAuth " + t,
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    default_profile_image: X[n].id
                })
            })
        }

        function o(e, t, n) {
            return m.__awaiter(this, void 0, void 0, function() {
                var i;
                return m.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, fetch(f.a.krakenEndpoint + "/users/" + e + "/upload_image?client_id=" + f.a.authClientID + "&api_version=" + f.a.defaultAPIVersion + "&image_type=" + n, {
                                method: "POST",
                                headers: {
                                    Authorization: "OAuth " + t
                                }
                            })];
                        case 1:
                            return i = a.sent(), [2, i.json()]
                    }
                })
            })
        }

        function l(e) {
            switch (e) {
                case J.Success:
                    return {
                        message: Object(f.d)("Success!", "Profile Edit"),
                        type: A._0.Success
                    };
                case J.UnexpectedError:
                    return {
                        message: Object(f.d)("Unexpected error, please try again.", "Profile Edit"),
                        type: A._0.Alert
                    };
                case J.BadSizeError:
                    return {
                        message: Object(f.d)("Image might exceed 10MB.", "Profile Edit"),
                        type: A._0.Alert
                    };
                case J.NonImageError:
                    return {
                        message: Object(f.d)("You must upload an image.", "Profile Edit"),
                        type: A._0.Alert
                    };
                case J.WrongFormatError:
                    return {
                        message: Object(f.d)("You must select a valid image type.", "Profile Edit"),
                        type: A._0.Alert
                    };
                case J.TimeoutError:
                    return {
                        message: Object(f.d)("Upload timed-out. Please try again.", "Profile Edit"),
                        type: A._0.Alert
                    };
                case J.Uploading:
                    return {
                        message: Object(f.d)("Uploading....", "Profile Edit"),
                        type: A._0.Brand
                    };
                case J.ImageNotSelected:
                    return {
                        message: Object(f.d)("Select a image first.", "Profile Edit"),
                        type: A._0.Alert
                    };
                default:
                    return {
                        message: Object(f.d)("Please try again.", "Profile Edit"),
                        type: A._0.Alert
                    }
            }
        }

        function c(e) {
            return {
                authToken: Object(T.a)(e)
            }
        }

        function u(e, t) {
            return Object(W.bindActionCreators)({
                closeModal: function() {
                    return t.successCallback && t.successCallback(), Object(V.c)()
                }
            }, e)
        }

        function d(e) {
            return Object(W.bindActionCreators)({
                showModal: V.d
            }, e)
        }
        var p, m = n(0),
            h = n(4),
            b = n(1),
            g = n(12),
            f = n(2),
            v = n(275),
            S = n(417),
            k = n(64),
            y = n(9),
            _ = n(137),
            E = n(8),
            T = n(19),
            N = n(941),
            C = n(939),
            w = n(964),
            P = n(979),
            U = n(942),
            O = n(915),
            A = n(3),
            I = (n(1037), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handlePromoBuy = function(e) {
                        var n = Object(U.b)({
                            trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                            channelID: t.props.channelID,
                            purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                            bitsAmount: e.currentTarget.dataset.bitsAmount,
                            location: O.b.GetBitsButton
                        });
                        n && t.props.onPromoBuyClose(n)
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = b.createElement(A.U, null, b.createElement(A.U, {
                        padding: {
                            x: 5,
                            y: 2
                        },
                        textAlign: A._22.Center
                    }, b.createElement(A._21, {
                        type: A._26.H4,
                        bold: !0
                    }, Object(f.d)("Cheer Bits for your Favorite Streamer!", "Bits--FirstTimeUserPrompt"))), b.createElement(A.U, {
                        padding: {
                            x: 2,
                            bottom: 1
                        }
                    }, b.createElement(A._21, {
                        type: A._26.Span,
                        color: A.F.Alt
                    }, Object(f.d)("Bits are fun, animated emotes. Cheering Bits celebrates moments you love with the community right in chat and similar to subscribing, helps support Partners and Affiliates.", "Bits--FirstTimeUserPrompt"), b.createElement(A.P, {
                        margin: {
                            left: .5
                        }
                    }, b.createElement("a", {
                        onClick: this.props.toggleShowTutorial
                    }, Object(f.d)("How do I cheer?", "Bits--FirstTimeUserPrompt"))))), b.createElement(A.U, {
                        padding: {
                            bottom: 2
                        },
                        textAlign: A._22.Center
                    }, b.createElement(A.P, {
                        margin: {
                            bottom: 1
                        }
                    }, b.createElement(A._21, {
                        type: A._26.H6,
                        bold: !0,
                        className: "bits-first-time-user-prompt__promo-header"
                    }, Object(f.d)("First Time Purchaser Discount Pack!", "Bits--FirstTimeUserPrompt"))), b.createElement(A.u, {
                        onClick: this.handlePromoBuy,
                        "data-purchase-url": this.props.promo.url,
                        "data-bits-amount": this.props.promo.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.promo.bits
                    }, Object(f.d)("{price} For {amount} Bits", {
                        price: this.props.promo.price,
                        amount: this.props.promo.bits
                    }, "Bits--FirstTimeUserPrompt"))));
                    return this.props.isShowingTutorial ? b.createElement(A.U, {
                        className: "bits-first-time-user-prompt",
                        fullWidth: !0
                    }, b.createElement(A.U, {
                        className: "bits-first-time-user-prompt__tutorial-back-button"
                    }, b.createElement(A.u, {
                        onClick: this.props.toggleShowTutorial,
                        type: A.z.Text
                    }, b.createElement(A._8, {
                        asset: A._9.Play,
                        height: 8
                    }), " ", Object(f.d)("Back", "Bits--FirstTimeUserPrompt"))), b.createElement(A.U, {
                        textAlign: A._22.Center,
                        padding: {
                            x: 2,
                            bottom: 2,
                            top: 5
                        },
                        fullHeight: !0
                    }, b.createElement(A.e, {
                        type: A.i.SlideInLeft,
                        duration: A.g.Long,
                        enabled: !0
                    }, b.createElement(P.a, null)))) : this.props.animateFirstTimeUserIntro ? b.createElement(A.P, {
                        className: "bits-first-time-user-prompt"
                    }, b.createElement(A.e, {
                        type: A.i.SlideInRight,
                        duration: A.g.Long,
                        enabled: this.props.animateFirstTimeUserIntro
                    }, e)) : b.createElement(A.U, {
                        className: "bits-first-time-user-prompt"
                    }, e)
                }, t
            }(b.Component)),
            D = I,
            F = n(961),
            x = n(958),
            B = n(6),
            R = n(1038),
            j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hideFirstTimeUserIntro: !1
                    }, t.trackBitsCardInteraction = function(e, n) {
                        var i = {
                            actionName: e,
                            emoteType: n && n.emoteType,
                            emoteLevel: n && n.emoteLevel,
                            location: O.b.GetBitsButton,
                            displayedBalance: t.props.bitsBalance || 0
                        };
                        Object(O.h)(i)
                    }, t.onClose = function() {}, t.onPromoBuyClose = function(e) {
                        Object(N.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.loading) return b.createElement(A._17, {
                        "data-a-target": "get-bits-button-content-loading",
                        display: A.H.Flex,
                        flexDirection: A.J.Column,
                        alignItems: A.c.Center,
                        justifyContent: A.T.Center,
                        textAlign: A._22.Center,
                        padding: {
                            y: 5
                        }
                    }, b.createElement(A.X, {
                        delay: 0
                    }), b.createElement(A.U, {
                        padding: {
                            top: 2
                        }
                    }, b.createElement(A._21, {
                        italic: !0
                    }, Object(f.d)("Fetching bits", "Bits--GetBitsButtonContent"))));
                    if (this.props.bitsOffers) {
                        var e = this.props.bitsOffers.find(function(e) {
                            return e.type === F.b && e.isPromo
                        });
                        e && e.type === F.b && this.props.channelID && !this.state.hideFirstTimeUserIntro && b.createElement(D, {
                            promo: e,
                            animateFirstTimeUserIntro: this.props.animateFirstTimeUserIntro,
                            isShowingTutorial: this.props.isShowingTutorial,
                            toggleShowTutorial: this.props.toggleShowTutorial,
                            trackBitsCardInteraction: this.trackBitsCardInteraction,
                            channelID: this.props.channelID,
                            onPromoBuyClose: this.onPromoBuyClose
                        })
                    }
                    var t = null;
                    void 0 !== this.props.bitsBalance && this.props.bitsConfig ? t = b.createElement(A._17, {
                        borderBottom: !0,
                        textAlign: A._22.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, b.createElement(A._21, {
                        type: A._26.Span
                    }, Object(f.d)("You have {bitsBalance}", {
                        bitsBalance: b.createElement(C.a, {
                            withImage: !0,
                            withText: !0,
                            count: this.props.bitsBalance,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))) : void 0 === this.props.bitsBalance && this.props.bitsConfig && (t = b.createElement(A._17, {
                        borderBottom: !0,
                        textAlign: A._22.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, b.createElement(A._21, {
                        type: A._26.Span
                    }, Object(f.d)("{bitsGem} Log in to see your Bits balance", {
                        bitsGem: b.createElement(C.a, {
                            count: 100,
                            withImage: !0,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))));
                    var n = null;
                    return this.props.bitsConfig && this.props.channelLogin && (n = b.createElement(w.a, {
                        bitsConfig: this.props.bitsConfig,
                        channelLogin: this.props.channelLogin,
                        closeAllBits: this.onClose,
                        onClose: this.onClose,
                        trackBitsCardInteraction: this.trackBitsCardInteraction,
                        location: O.b.GetBitsButton,
                        hidePromos: !1,
                        hideWateb: !0
                    })), b.createElement(A.U, {
                        className: "get-bits-button-content"
                    }, t, n)
                }, t = m.__decorate([Object(B.c)("GetBitsButtonContent"), Object(y.a)(R, {
                    name: "data",
                    props: function(e) {
                        var t, n;
                        e.data && e.data.user && e.data.user.cheer && (t = Object(x.a)(e.data.user.cheer.emotes), n = e.data.user.id);
                        var i, a;
                        return e.data && e.data.currentUser ? (a = e.data.currentUser.bitsBalance, i = e.data.currentUser.bitsOffers) : e.data && e.data.bitsOffers && (i = e.data.bitsOffers), {
                            loading: e.data && e.data.loading,
                            bitsOffers: i,
                            bitsBalance: a,
                            bitsConfig: t,
                            channelID: n
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    },
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin,
                                withChannel: !!e.channelLogin,
                                isLoggedIn: e.isLoggedIn
                            }
                        }
                    }
                })], t)
            }(b.Component),
            L = j,
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isShowingTutorial: !1,
                        animateFirstTimeUserIntro: !1
                    }, t.toggleBalloon = function(e) {
                        t.setState({
                            animateFirstTimeUserIntro: !1
                        }), e || Object(O.h)({
                            actionName: O.a.BuyMain,
                            location: O.b.GetBitsButton,
                            displayedBalance: 0
                        })
                    }, t.toggleShowTutorial = function() {
                        t.setState({
                            isShowingTutorial: !t.state.isShowingTutorial,
                            animateFirstTimeUserIntro: !0
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.channelLogin && (e = b.createElement(L, {
                        isLoggedIn: this.props.isLoggedIn,
                        channelLogin: this.props.channelLogin,
                        toggleShowTutorial: this.toggleShowTutorial,
                        isShowingTutorial: this.state.isShowingTutorial,
                        animateFirstTimeUserIntro: this.state.animateFirstTimeUserIntro
                    })), b.createElement(k.a, {
                        onToggle: this.toggleBalloon
                    }, b.createElement(A.u, {
                        dropdown: !0
                    }, Object(f.d)("Get Bits", "Bits--GetBitsButton")), b.createElement(A.p, {
                        direction: A.q.BottomRight,
                        size: A.r.Large
                    }, e))
                }, t = m.__decorate([Object(B.c)("GetBitsButton")], t)
            }(b.Component),
            H = M,
            G = Object(E.a)(i)(H),
            W = n(11),
            V = n(50),
            z = n(959),
            q = n(134),
            K = n(36),
            $ = (n(1039), function(e) {
                var t = function() {
                        e.onSelect(e.index)
                    },
                    n = {
                        "default-avatar__selected": e.selected,
                        "default-avatar": !0
                    };
                return b.createElement(A.U, {
                    padding: {
                        bottom: 1
                    }
                }, b.createElement("div", {
                    onClick: t,
                    "aria-label": Object(f.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, b.createElement(A._17, {
                    border: !0,
                    fullHeight: !0,
                    fullWidth: !0,
                    position: A._2.Relative,
                    className: h(n)
                }, b.createElement("img", {
                    alt: Object(f.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            });
        ! function(e) {
            e.ProfileImage = "profile_image", e.ProfileBanner = "profile_banner", e.ChannelOfflineImage = "channel_offline_image"
        }(p || (p = {}));
        var Y;
        ! function(e) {
            e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
        }(Y || (Y = {}));
        var J;
        ! function(e) {
            e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
        }(J || (J = {}));
        var Q = (n(1040), n(1041)),
            X = [{
                id: "profile_image_001",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-300x300.jpg"
            }, {
                id: "profile_image_002",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/27103734-3cda-44d6-a384-f2ab71e4bb85-profile_image-300x300.jpg"
            }, {
                id: "profile_image_003",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/49988c7b-57bc-4dee-bd4f-6df4ad215d3a-profile_image-300x300.jpg"
            }, {
                id: "profile_image_004",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/0ecbb6c3-fecb-4016-8115-aa467b7c36ed-profile_image-300x300.jpg"
            }, {
                id: "profile_image_005",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/cd618d3e-f14d-4960-b7cf-094231b04735-profile_image-300x300.jpg"
            }, {
                id: "profile_image_006",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5-profile_image-300x300.jpg"
            }, {
                id: "profile_image_007",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/b83b1794-7df9-4878-916c-88c2ad2e4f9f-profile_image-300x300.jpg"
            }],
            Z = ["image/*"],
            ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imagePreviewURL: "",
                        profileUpdated: !1,
                        currentImageHasTallAspectRatio: !1
                    }, t.currentImage = null, t.logger = f.i.withCategory("ProfileImagePicker"), t.onImageInputChange = function(e) {
                        var n;
                        if (null === e) return void t.setState({
                            statusMessage: J.ImageNotSelected
                        });
                        n = e[0];
                        var i = (n.size / 1024 / 1024).toFixed(4);
                        if (parseInt(i, 10) > 10) return void t.setState({
                            statusMessage: J.BadSizeError
                        });
                        t.setState({
                            selectedImageIndex: void 0,
                            imagePreviewURL: "",
                            currentImageHasTallAspectRatio: !1
                        }), a(n, function(e) {
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
                                imagePreviewURL: e
                            })
                        })
                    }, t.onUpdateButtonClick = function(e) {
                        return m.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, a, s = this;
                            return m.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (e.preventDefault(), void 0 !== this.state.selectedImageIndex) return this.setDefaultAvatar(), [2];
                                        if (!this.currentImage) return this.setState({
                                            statusMessage: J.ImageNotSelected
                                        }), [2];
                                        this.setState({
                                            statusMessage: J.Uploading
                                        }), l.label = 1;
                                    case 1:
                                        return l.trys.push([1, 3, , 4]), [4, o(this.props.userID, this.props.authToken, p.ProfileImage)];
                                    case 2:
                                        return t = l.sent(), n = t.upload_url, i = t.upload_id, [3, 4];
                                    case 3:
                                        return a = l.sent(), this.logger.error(a, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: J.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = f.j.subscribe({
                                            topic: Object(K.c)(this.props.userID),
                                            success: function() {
                                                try {
                                                    r(n, s.currentImage)
                                                } catch (e) {
                                                    s.logger.error(e, "Profile Image upload failed."), s.unsubscribe(), s.setState({
                                                        statusMessage: J.UnexpectedError,
                                                        selectedImageIndex: void 0,
                                                        imagePreviewURL: "",
                                                        currentImageHasTallAspectRatio: !1
                                                    })
                                                }
                                                s.timeoutHandle = setTimeout(function() {
                                                    return s.handlePubSubTimeout()
                                                }, 1e4)
                                            },
                                            failure: function() {
                                                s.setState({
                                                    statusMessage: J.UnexpectedError,
                                                    selectedImageIndex: void 0,
                                                    imagePreviewURL: "",
                                                    currentImageHasTallAspectRatio: !1
                                                })
                                            },
                                            onMessage: function(e) {
                                                if (e.upload_id === i) {
                                                    clearTimeout(s.timeoutHandle);
                                                    var t = null,
                                                        n = s.state.imagePreviewURL;
                                                    e.status === Y.Success ? t = J.Success : e.status === Y.BadSize ? (t = J.BadSizeError, n = "", s.currentImage = null) : e.status === Y.NonImage ? (t = J.NonImageError, n = "", s.currentImage = null) : e.status === Y.WrongFormat ? (t = J.WrongFormatError, n = "", s.currentImage = null) : (t = J.UnexpectedError, n = "", s.currentImage = null), s.unsubscribe && s.unsubscribe(), s.setState({
                                                        statusMessage: t,
                                                        imagePreviewURL: n
                                                    }), s.state.statusMessage === J.Success && s.setState({
                                                        profileUpdated: !0
                                                    })
                                                }
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, t.onDefaultImageSelected = function(e) {
                        t.setState({
                            selectedImageIndex: e,
                            imagePreviewURL: X[e].uri
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: J.TimeoutError
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    void 0 !== this.unsubscribe && this.unsubscribe(), this.timeoutHandle && clearTimeout(this.timeoutHandle)
                }, t.prototype.componentDidUpdate = function() {
                    var e = this;
                    this.state.profileUpdated && setTimeout(function() {
                        e.props.data && e.props.data.refetch(), e.props.closeModal()
                    }, 1e3)
                }, t.prototype.render = function() {
                    var e = this,
                        t = X.map(function(t, n) {
                            return b.createElement($, {
                                key: t.id,
                                imageSrc: t.uri,
                                index: n,
                                onSelect: e.onDefaultImageSelected,
                                selected: e.state.selectedImageIndex === n
                            })
                        }),
                        n = "" !== this.state.imagePreviewURL,
                        i = null;
                    if (n) {
                        var a = {
                            "profile-edit__image-preview": !0,
                            "profile-edit__image-preview-tall": this.state.currentImageHasTallAspectRatio
                        };
                        i = b.createElement(A.U, {
                            className: h(a),
                            "data-test-selector": "preview-image",
                            position: A._2.Relative
                        }, b.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var r = "" === this.state.imagePreviewURL,
                        s = null;
                    r && (s = b.createElement(A.U, {
                        className: "profile-edit__upload-info"
                    }, b.createElement(A.U, null, b.createElement(A._8, {
                        asset: A._9.Plus,
                        type: A._10.Alt2,
                        height: 20,
                        width: 20
                    })), b.createElement(A._21, {
                        type: A._26.H3,
                        color: A.F.Alt2,
                        fontSize: A.L.Size4
                    }, Object(f.d)("Upload a Photo", "Profile Edit"))));
                    var o = null;
                    this.props.showCloser && (o = b.createElement(q.a, null));
                    var c = null;
                    if (null !== this.state.statusMessage) {
                        var u = l(this.state.statusMessage),
                            d = u.message,
                            p = u.type;
                        c = b.createElement(A.Z, {
                            label: d,
                            type: p
                        })
                    }
                    var m = this.props.login;
                    return this.props.displayName && (m = this.props.displayName), b.createElement(A.U, {
                        className: "profile-edit",
                        position: A._2.Relative,
                        fullHeight: !0
                    }, b.createElement(A._17, {
                        className: "profile-edit__background-container",
                        background: A.m.Base,
                        fullWidth: !0
                    }, b.createElement(A.U, {
                        padding: 2,
                        display: A.H.InlineBlock,
                        position: A._2.Relative,
                        textAlign: A._22.Center,
                        fullWidth: !0
                    }, b.createElement(A._17, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        }
                    }, b.createElement(A._21, {
                        type: A._26.H3,
                        fontSize: A.L.Size4
                    }, Object(f.d)("Editing profile picture for {userName}", {
                        userName: m
                    }, "Profile Edit"), " ")), b.createElement(A.U, {
                        className: "profile-edit__upload-container",
                        display: A.H.InlineBlock,
                        position: A._2.Relative,
                        textAlign: A._22.Center,
                        margin: {
                            bottom: 1
                        }
                    }, b.createElement(A.U, {
                        className: "profile-edit__upload",
                        display: A.H.InlineBlock,
                        position: A._2.Relative,
                        textAlign: A._22.Center
                    }, b.createElement(z.a, {
                        allowedFileTypes: Z,
                        onFilesSubmitted: this.onImageInputChange
                    }, s), i)), b.createElement(A._17, {
                        "data-test-selector": "status-message",
                        fontSize: A.L.Size4,
                        position: A._2.Relative,
                        textAlign: A._22.Center,
                        className: "profile-edit__status-message"
                    }, c), b.createElement(A._17, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, b.createElement(A.U, {
                        margin: {
                            bottom: 1
                        }
                    }, b.createElement(A._21, {
                        type: A._26.H3,
                        fontSize: A.L.Size5
                    }, Object(f.d)("Or select one of these", "Profile Edit"))), b.createElement(A._33, {
                        childWidth: A._34.ExtraSmall,
                        gutterSize: A._35.ExtraSmall,
                        placeholderItems: 3
                    }, t)), b.createElement(A.U, {
                        display: A.H.Flex,
                        justifyContent: A.T.Center
                    }, b.createElement(A.u, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick
                    }, Object(f.d)("Update", "Profile Edit"))))), o)
                }, t.prototype.setDefaultAvatar = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return m.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    this.setState({
                                        statusMessage: J.Uploading
                                    }), e = J.UnexpectedError, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, s(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                case 2:
                                    return t = i.sent(), 204 === t.status || 200 === t.status ? e = J.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                case 3:
                                    return n = i.sent(), this.logger.error(n, "Default Avatar PUT failed."), [3, 4];
                                case 4:
                                    return this.setState({
                                        statusMessage: e,
                                        profileUpdated: e === J.Success
                                    }), [2]
                            }
                        })
                    })
                }, t = m.__decorate([Object(y.a)(Q, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(b.Component),
            te = Object(B.c)("Profile Edit")(ee),
            ne = Object(E.a)(c, u)(te),
            ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        t.props.showModal(ne, {
                            userID: t.props.userID,
                            login: t.props.login,
                            displayName: t.props.displayName,
                            showCloser: !0
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return b.createElement(A.U, null, b.createElement("div", {
                        onClick: this.openModal
                    }, b.createElement(A._8, {
                        asset: A._9.Edit,
                        height: 36,
                        width: 36,
                        fill: !0,
                        type: A._10.Brand
                    })))
                }, t = m.__decorate([Object(B.c)("EditProfileOverlay")], t)
            }(b.Component),
            ae = ie,
            re = Object(E.a)(null, d)(ae),
            se = n(934),
            oe = (n(1042), n(1043));
        n.d(t, "b", function() {
            return le
        }), n.d(t, "a", function() {
            return pe
        });
        var le, ce = "channel-header__verified-badge",
            ue = "channel-header__live-indicator";
        ! function(e) {
            e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
        }(le || (le = {}));
        var de = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        live: !1
                    }, t.verifiedBadgeElement = b.createElement(A._30, {
                        label: Object(f.d)("Verified", "ChannelHeader"),
                        direction: A._32.Right
                    }, b.createElement(A.U, {
                        className: "channel-header__verified",
                        "data-target": ce,
                        display: A.H.Flex,
                        alignItems: A.c.Center,
                        margin: {
                            left: 1
                        }
                    }, b.createElement(A._8, {
                        asset: A._9.Verified
                    }))), t.liveIndicatorElement = b.createElement(A.U, {
                        margin: {
                            left: 1
                        },
                        "data-target": ue
                    }, b.createElement(A._30, {
                        label: Object(f.d)("Live Now", "ChannelHeader"),
                        direction: A._32.Right
                    }, b.createElement(A.V, {
                        pulse: !0
                    }))), t.renderAvatarEditButton = function() {
                        return t.props.data && t.props.data && t.props.data.currentUser && t.props.data.user && t.props.data.currentUser.roles && (t.props.data.currentUser.id === t.props.data.user.id || t.props.data.currentUser.roles.isStaff || t.props.data.currentUser.roles.isSiteAdmin) ? b.createElement(A.U, {
                            className: "channel-header__edit-profile-overlay",
                            position: A._2.Absolute
                        }, b.createElement(re, {
                            userID: t.props.data.user.id,
                            login: t.props.data.user.login,
                            displayName: t.props.data.user.displayName
                        })) : null
                    }, t.onUpdateDebounce = function() {
                        if (!t.resizeAnimationFrame && t.channelHeader) {
                            var e = t.channelHeader.querySelector('[data-target="channel-header-left"]');
                            t.updateWidth(t.getWidth(e).width), t.resizeAnimationFrame = requestAnimationFrame(t.handleWindowResize)
                        }
                    }, t.handleWindowResize = function() {
                        t.resizeAnimationFrame = null, t.getChannelHeaderSize()
                    }, t.saveChannelHeaderRef = function(e) {
                        return t.channelHeader = e
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.updateLiveState(this.props)
                }, t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onUpdateDebounce), !this.props.data || this.props.data.loading || this.props.data.error || this.getChannelHeaderSize(), this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.updateLiveState(e)
                }, t.prototype.componentDidUpdate = function() {
                    this.channelHeader && this.updateWidth(this.getWidth(this.channelHeader.querySelector('[data-target="channel-header-left"]')).width), this.onUpdateDebounce(), this.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.resizeAnimationFrame && cancelAnimationFrame(this.resizeAnimationFrame), window.removeEventListener("resize", this.onUpdateDebounce)
                }, t.prototype.updateWidth = function(e) {
                    var t = e !== this.width || this.width !== this.prevWidth;
                    void 0 !== this.width && (this.prevWidth = this.width), this.width !== e && (this.width = e), t && (this.resizeAnimationFrame && (cancelAnimationFrame(this.resizeAnimationFrame), this.resizeAnimationFrame = null), this.onUpdateDebounce())
                }, t.prototype.render = function() {
                    var e, t, n = 0,
                        i = 0,
                        a = 0,
                        r = f.a.defaultAvatarURL;
                    this.props.data && this.props.data.user && !this.props.data.loading && !this.props.data.error && (n = this.props.data.user.videos.totalCount, i = this.props.data.user.followers.totalCount, a = this.props.data.user.follows.totalCount, r = this.props.data.user.profileImageURL, e = this.props.data.user.displayName, t = this.props.data.user.roles.isPartner);
                    var s = this.state.live && le[this.props.currentPage] !== le[le.Channel],
                        o = this.createChannelLinks(n, i, a),
                        l = {
                            "channel-header__user": !0,
                            "channel-header__user--selected": le[this.props.currentPage] === le[le.Channel]
                        },
                        c = null;
                    this.canRenderBitsButton() && (c = b.createElement(A.U, {
                        margin: {
                            left: 1
                        }
                    }, b.createElement(G, {
                        channelLogin: this.props.channelLogin
                    })));
                    var u, d = b.createElement(A.U, {
                        display: A.H.Flex,
                        flexWrap: A.K.NoWrap,
                        alignItems: A.c.Center,
                        flexShrink: 0
                    }, b.createElement(A.U, {
                        className: "channel-header__user-avatar channel-header__user-avatar--active",
                        margin: {
                            right: 1
                        },
                        display: A.H.Flex,
                        flexShrink: 0,
                        alignItems: A.c.Stretch
                    }, b.createElement(A.l, {
                        size: 36,
                        imageSrc: r,
                        imageAlt: e || ""
                    }), this.renderAvatarEditButton()), e ? b.createElement(A._21, {
                        type: A._26.H5
                    }, e) : b.createElement(A.U, {
                        alignItems: A.c.Center
                    }, b.createElement(A._1, {
                        lineCount: 1,
                        width: 120
                    })), s && this.liveIndicatorElement, t && this.verifiedBadgeElement);
                    return u = this.props.data && this.props.data.user && this.props.data.user.login ? b.createElement(g.a, {
                        to: "/" + this.props.data.user.login,
                        "data-target": "channel-header__channel-link",
                        "data-a-target": "user-channel-header-item"
                    }, d) : d, b.createElement(A.U, {
                        className: "channel-header",
                        flexShrink: 0,
                        padding: {
                            x: 3
                        }
                    }, b.createElement(A.U, {
                        display: A.H.Flex,
                        justifyContent: A.T.Between,
                        flexWrap: A.K.NoWrap,
                        fullHeight: !0,
                        refDelegate: this.saveChannelHeaderRef
                    }, b.createElement(A.U, {
                        display: A.H.Flex,
                        alignItems: A.c.Stretch,
                        flexShrink: 0,
                        flexWrap: A.K.NoWrap,
                        "data-target": "channel-header-left"
                    }, b.createElement(A.P, {
                        className: h(l),
                        padding: {
                            y: .5,
                            right: 2
                        },
                        display: A.H.Flex,
                        flexWrap: A.K.NoWrap,
                        alignItems: A.c.Center,
                        flexShrink: 0
                    }, u), this.renderTabs(o), b.createElement(A.U, {
                        className: "channel-header__item channel-header__item--no-underline",
                        padding: {
                            x: 1
                        },
                        display: A.H.Flex,
                        flexShrink: 0,
                        alignSelf: A.d.Center,
                        "data-target": "channel-header-button"
                    }, b.createElement(k.a, {
                        alwaysMountBalloonContent: !0
                    }, b.createElement(A.v, {
                        icon: A._9.NavMore,
                        ariaLabel: Object(f.d)("More", "ChannelHeader")
                    }), b.createElement(A.p, {
                        direction: A.q.Bottom,
                        noTail: !0
                    }, b.createElement(A.U, {
                        padding: {
                            y: 1
                        }
                    }, this.renderDropdown(o)))))), b.createElement(A.U, {
                        display: A.H.Flex,
                        flexWrap: A.K.NoWrap,
                        flexShrink: 0,
                        alignItems: A.c.Center,
                        className: "channel-header__right",
                        "data-target": "channel-header-right"
                    }, b.createElement(A.U, {
                        className: "channel-header__follow-button",
                        display: A.H.Flex,
                        alignItems: A.c.Stretch,
                        margin: {
                            left: 1
                        }
                    }, b.createElement(v.a, {
                        updateContainerWidth: this.onUpdateDebounce,
                        isHostedFollow: !1,
                        channelLogin: this.props.channelLogin
                    })), b.createElement(A.U, {
                        margin: {
                            left: 1
                        }
                    }, b.createElement(se.b, {
                        updateContainerWidth: this.onUpdateDebounce,
                        channelLogin: this.props.channelLogin
                    })), c)), b.createElement(S.a, {
                        onResize: this.onUpdateDebounce
                    }))
                }, t.prototype.updateLiveState = function(e) {
                    !e.data || e.data.loading || e.data.error || this.setState({
                        live: !!e.data.user.stream && "" !== e.data.user.stream.id
                    })
                }, t.prototype.generateUserLink = function(e, t) {
                    void 0 === e && (e = ""), void 0 === t && (t = !1);
                    var n = this.props.data && this.props.data.user && this.props.data.user.login;
                    if (!n) return "#";
                    var i = "/" + n + "/" + e;
                    return t ? Object(_.a)(i) : i
                }, t.prototype.renderTabs = function(e) {
                    var t = this;
                    return e.map(function(e) {
                        var n = e.count ? b.createElement(A.U, {
                                className: "channel-header__item-count",
                                display: A.H.Flex,
                                margin: {
                                    left: .5
                                }
                            }, b.createElement(A._21, {
                                type: A._26.Span,
                                fontSize: A.L.Size5
                            }, e.count)) : null,
                            i = t.generateUserLink(e.pathSuffix, e.isExternal),
                            a = {};
                        return e.isExternal && (a.target = Object(_.b)() ? "_blank" : ""), b.createElement(A.P, {
                            key: "channel-header__item--" + e.label,
                            display: A.H.Flex,
                            alignItems: A.c.Center,
                            flexShrink: 0
                        }, b.createElement(g.a, m.__assign({
                            className: "channel-header__item hide " + (e.isSelected ? "channel-header__item--selected" : "")
                        }, a, {
                            to: i,
                            disabled: "#" === i,
                            "data-target": "channel-header-item",
                            "data-a-target": e.label.toLowerCase() + "-channel-header-item"
                        }), b.createElement(A.U, {
                            padding: {
                                x: 2,
                                y: .5
                            },
                            display: A.H.Flex
                        }, b.createElement(A._21, {
                            type: A._26.Span,
                            fontSize: A.L.Size5
                        }, e.label), n)))
                    })
                }, t.prototype.renderDropdown = function(e) {
                    var t = this;
                    return e.map(function(e) {
                        var n = e.count ? b.createElement(A.U, {
                                className: "channel-header__item-count",
                                display: A.H.Flex,
                                margin: {
                                    left: .5
                                }
                            }, b.createElement(A._21, {
                                type: A._26.Span
                            }, e.count)) : null,
                            i = t.generateUserLink(e.pathSuffix, e.isExternal),
                            a = {};
                        return e.isExternal && (a.targetBlank = !0), b.createElement(A.U, {
                            key: "channel-header__dropdown-item--" + e.label,
                            "data-target": "channel-header-dropdown-item"
                        }, b.createElement(A.S, m.__assign({
                            linkTo: i,
                            disabled: "#" === i
                        }, a), b.createElement(A.U, {
                            className: "channel-header__dropdown-hover-target",
                            padding: {
                                y: .5,
                                x: 1
                            },
                            display: A.H.Flex
                        }, b.createElement(A._21, {
                            type: A._26.Span
                        }, e.label), n)))
                    })
                }, t.prototype.createChannelLinks = function(e, t, n) {
                    return [{
                        label: Object(f.d)("Videos", "ChannelHeader"),
                        count: Object(f.e)(e),
                        pathSuffix: "videos/all",
                        isExternal: !1,
                        isSelected: le[this.props.currentPage] === le[le.Videos]
                    }, {
                        label: Object(f.d)("Clips", "ChannelHeader"),
                        pathSuffix: "clips",
                        isExternal: !1,
                        isSelected: le[this.props.currentPage] === le[le.Clips]
                    }, {
                        label: Object(f.d)("Collections", "ChannelHeader"),
                        pathSuffix: "collections",
                        isExternal: !1,
                        isSelected: le[this.props.currentPage] === le[le.Collections]
                    }, {
                        label: Object(f.d)("Events", "ChannelHeader"),
                        pathSuffix: "events",
                        isExternal: !1,
                        isSelected: le[this.props.currentPage] === le[le.Events]
                    }, {
                        label: Object(f.d)("Followers", "ChannelHeader"),
                        count: Object(f.e)(t),
                        pathSuffix: "followers",
                        isExternal: !0,
                        isSelected: le[this.props.currentPage] === le[le.Followers]
                    }, {
                        label: Object(f.d)("Following", "ChannelHeader"),
                        count: Object(f.e)(n),
                        pathSuffix: "following",
                        isExternal: !0,
                        isSelected: le[this.props.currentPage] === le[le.Following]
                    }]
                }, t.prototype.getChannelHeaderSize = function() {
                    if (this.channelHeader) {
                        var e = this.channelHeader.querySelector('[data-target="channel-header-left"]'),
                            t = this.channelHeader.querySelector('[data-target="channel-header-right"]'),
                            n = this.channelHeader.querySelectorAll('[data-target="channel-header-item"]'),
                            i = this.channelHeader.querySelectorAll('[data-target="channel-header-dropdown-item"]');
                        if (n.length) {
                            var a = this.getWidth(this.channelHeader).width,
                                r = this.getWidth(e).width,
                                s = this.getWidth(t).width,
                                o = r + s + 20 - a;
                            if (o > 0)
                                for (var l = n.length - 1; l >= 0; l--) {
                                    var c = n[l];
                                    if (!c.classList.contains("hide")) {
                                        var u = this.getWidth(c);
                                        if (c.classList.add("hide"), i[l].classList.remove("hide"), (o -= u.width) <= 0) break
                                    }
                                } else
                                    for (var l = 0; l < n.length; l++) {
                                        var c = n[l];
                                        if (c.classList.contains("hide")) {
                                            c.classList.remove("hide");
                                            var u = this.getWidth(c);
                                            if (u.width >= Math.abs(o)) {
                                                c.classList.add("hide");
                                                break
                                            }
                                            c.classList.remove("hide"), i[l].classList.add("hide"), o += u.width
                                        }
                                    }
                            var d = this.channelHeader.querySelector('[data-target="channel-header-button"]');
                            if (d) {
                                var p = !this.channelHeader.querySelectorAll('[data-target="channel-header-item"].hide').length;
                                d.classList.toggle("hide", p)
                            }
                        }
                    }
                }, t.prototype.canRenderBitsButton = function() {
                    return this.props.data && !this.props.data.loading && this.props.currentPage !== le.Clips && this.props.data.currentUser && this.props.data.user && this.props.data.user.cheer
                }, t.prototype.getWidth = function(e) {
                    return e ? {
                        width: e.clientWidth
                    } : {
                        width: 0
                    }
                }, t.prototype.reportInteractive = function() {
                    !this.props.data || this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t = m.__decorate([Object(y.a)(oe, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(B.c)("ChannelHeader")], t)
            }(b.Component),
            pe = de
    },
    1037: function(e, t) {},
    1038: function(e, t, n) {
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
                    value: "GetBitsButton_Bits"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "isLoggedIn"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "withChannel"
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
                    },
                    defaultValue: null
                }, {
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
                            value: "bitsOffers"
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
                                        value: "isLoggedIn"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "bitsOffersFragment"
                                },
                                directives: []
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
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "include"
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
                                        value: "isLoggedIn"
                                    }
                                }
                            }]
                        }],
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
                                    value: "idSHA1"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsBalance"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsOffers"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "bitsOffersFragment"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
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
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "include"
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
                                        value: "withChannel"
                                    }
                                }
                            }]
                        }],
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "cheer"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 803
            }
        };
        a.loc.source = {
            body: '# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally, use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\n#import "twilight/features/bits/models/bits-offers-fragment.gql"\n#import "twilight/features/chat/models/cheer-fragment.gql"\n\nquery GetBitsButton_Bits($isLoggedIn: Boolean!, $withChannel: Boolean!, $login: String!) {\n  bitsOffers @skip(if: $isLoggedIn) {\n    ...bitsOffersFragment\n  }\n  currentUser @include(if: $isLoggedIn) {\n    id\n    idSHA1\n    bitsBalance\n    bitsOffers {\n      ...bitsOffersFragment\n    }\n  }\n  user(login: $login) @include(if: $withChannel) {\n    id\n    ...cheer\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n(962).definitions)), a.definitions = a.definitions.concat(i(n(963).definitions)), e.exports = a
    },
    1039: function(e, t) {},
    1040: function(e, t) {},
    1041: function(e, t) {
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
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 121
            }
        };
        n.loc.source = {
            body: "query UserProfileEditor($login: String!) {\n  user(login: $login) {\n    id\n    login\n    profileImageURL(width: 70)\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1042: function(e, t) {},
    1043: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_ChannelHeader"
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
                            }, {
                                kind: "Field",
                                alias: null,
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
                                            value: "isPartner"
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
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "videos"
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
                                            value: "totalCount"
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
                                    value: "followers"
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
                                            value: "totalCount"
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
                                    value: "follows"
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
                                            value: "totalCount"
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
                                    value: "cheer"
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
                end: 423
            }
        };
        n.loc.source = {
            body: "query ChannelPage_ChannelHeader($login: String!) {\n  user(login: $login) {\n    id\n    login\n    displayName\n    profileImageURL(width: 70)\n    roles {\n      isPartner\n    }\n    stream {\n      id\n    }\n    videos {\n      totalCount\n    }\n    followers {\n      totalCount\n    }\n    follows {\n      totalCount\n    }\n    cheer {\n      id\n    }\n  }\n  currentUser {\n    id\n    roles {\n      isStaff\n      isSiteAdmin\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1046: function(e, t, n) {
        "use strict";
        var i = n(970);
        n.d(t, "a", function() {
            return i.a
        }), n.d(t, "b", function() {
            return i.b
        })
    },
    1049: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n(1),
            a = (n.n(i), n(3)),
            r = function() {
                return i.createElement(a.A, null, i.createElement(a.j, {
                    ratio: a.k.Aspect16x9
                }, i.createElement(a._1, null)), i.createElement(a.B, null, i.createElement(a.U, {
                    display: a.H.Flex,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(a.U, {
                    display: a.H.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, i.createElement(a._1, {
                    width: 40,
                    height: 56
                })), i.createElement(a.U, {
                    display: a.H.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, i.createElement(a._21, null, i.createElement(a._1, {
                    width: 150
                })), i.createElement(a._21, {
                    fontSize: a.L.Size7
                }, i.createElement(a._1, {
                    width: 100
                }))))))
            }
    },
    1130: function(e, t, n) {
        "use strict";
        var i = n(1138);
        n.d(t, "VideoPreviewCard", function() {
            return i.a
        });
        var a = n(1140),
            r = (n.n(a), n(1049));
        n.d(t, "VideoPreviewCardPlaceholder", function() {
            return r.a
        })
    },
    1138: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(4),
            r = n(21),
            s = n(1),
            o = n(12),
            l = n(2),
            c = n(52),
            u = n(419),
            d = n(6),
            p = n(272),
            m = n(998),
            h = n(917),
            b = n(978),
            g = function() {
                function e() {}
                return e.getResumeTime = function(t, n) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var a, r, s, o, c, u;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return a = l.n.store.getState(), a.session.user && a.session.user.id ? (e.currentRequest || (window.location.pathname !== e.lastPath && delete e.cachedResponse, e.cachedResponse ? e.currentRequest = e.cachedResponse : e.currentRequest = h.a.get("/api/resumewatching/user?id=" + (a.session.user && a.session.user.id), {
                                        credentials: "include"
                                    }, {
                                        excludeHeaders: ["Authorization", "Client-ID", "Twitch-Api-Token", "X-Requested-With"]
                                    })), [4, e.currentRequest]) : [3, 2];
                                case 1:
                                    return r = i.sent(), !r.error && r.body && r.body.videos && Array.isArray(r.body.videos) ? (e.lastPath = window.location.pathname, e.cachedResponse = Promise.resolve(r), delete e.currentRequest, s = r.body.videos.find(function(e) {
                                        return e && e.video_id === Object(m.a)(t) || e.video_id === Object(b.a)(t)
                                    }), [2, Promise.resolve(s ? s.position : void 0)]) : (delete e.currentRequest, [2, Promise.resolve(void 0)]);
                                case 2:
                                    return o = Object(b.a)(t), c = l.n.storage.get("vodResumeTimes", {}), c[o] ? [2, Promise.resolve(c[o])] : n === p.a.Archive && (u = l.n.storage.get("livestreamResumeTimes", {}), u[t]) ? [2, Promise.resolve(u[t])] : [2, Promise.resolve(void 0)]
                            }
                        })
                    })
                }, e
            }(),
            f = n(3);
        n(1139);
        n.d(t, "a", function() {
            return S
        });
        var v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        didAnimatedPreviewLoad: !1,
                        didAnimatedPreviewFailToLoad: !1
                    }, t.ignoreResumeTimeResponse = !1, t.getResumeData = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, g.getResumeTime(this.props.video.id, this.props.video.broadcastType)];
                                    case 1:
                                        return e = t.sent(), this.ignoreResumeTimeResponse ? [2] : (e !== this.state.resumeOffsetSeconds && this.setState({
                                            resumeOffsetSeconds: e
                                        }), [2])
                                }
                            })
                        })
                    }, t.onMouseEnter = function() {
                        t.setState({
                            hovered: !0
                        })
                    }, t.onMouseLeave = function() {
                        t.setState({
                            hovered: !1
                        })
                    }, t.onPreviewImageLoad = function(e) {
                        t.props.latencyTracking.reportInteractive(), e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                            didAnimatedPreviewLoad: !0
                        })
                    }, t.onPreviewImageLoadError = function(e) {
                        e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                            didAnimatedPreviewFailToLoad: !0
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.getResumeData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.video.id !== e.video.id && this.setState({
                        resumeOffsetSeconds: void 0
                    }, this.getResumeData)
                }, t.prototype.componentWillUnmount = function() {
                    this.ignoreResumeTimeResponse = !0
                }, t.prototype.render = function() {
                    var e = null;
                    if (this.state.resumeOffsetSeconds) {
                        var t = this.state.resumeOffsetSeconds / this.props.video.lengthSeconds * 100;
                        e = s.createElement(f.U, {
                            position: f._2.Absolute,
                            attachBottom: !0,
                            fullWidth: !0
                        }, s.createElement(f._5, {
                            size: f._6.Small,
                            value: t,
                            mask: !0
                        }))
                    }
                    return s.createElement("div", i.__assign({
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }, Object(f._39)(this.props)), s.createElement(f.A, null, s.createElement(f.U, {
                        fullWidth: !0
                    }, s.createElement(f.j, {
                        overflow: !0
                    }, s.createElement("div", null, s.createElement(f._17, {
                        display: f.H.InlineFlex,
                        position: f._2.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: .5,
                        zIndex: f._38.Default,
                        fontSize: f.L.Size6,
                        background: f.m.Overlay,
                        color: f.F.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, s.createElement(f._16, {
                        "data-test-selector": "video-view-count",
                        icon: f._9.GlyphViews,
                        label: Object(l.d)("views", "VideoPreviewCard"),
                        value: Object(l.f)(this.props.video.viewCount)
                    })), s.createElement(f._17, {
                        display: f.H.InlineFlex,
                        position: f._2.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: .5,
                        zIndex: f._38.Default,
                        fontSize: f.L.Size6,
                        background: f.m.Overlay,
                        color: f.F.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, s.createElement(f._16, {
                        "data-test-selector": "video-length",
                        icon: f._9.GlyphLength,
                        label: Object(l.d)("length", "VideoPreviewCard"),
                        value: Object(u.a)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage(), e))), s.createElement(f.B, null, s.createElement(f.U, {
                        display: f.H.Flex,
                        flexDirection: f.J.Row,
                        flexWrap: f.K.NoWrap,
                        padding: {
                            top: 1
                        }
                    }, this.props.hideGameArt ? null : this.gameBoxArt(), this.videoMetaData()))))
                }, t.prototype.generateSearchString = function() {
                    var e = {};
                    this.props.collectionID && (e.collection = this.props.collectionID);
                    var t = r.stringify(e);
                    return t ? "?" + t : ""
                }, t.prototype.videoPreviewImage = function() {
                    var e = this.state.hovered && !this.state.didAnimatedPreviewFailToLoad,
                        t = e ? this.props.video.animatedPreviewURL : this.props.video.previewThumbnailURL,
                        n = a("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": !(void 0 === this.state.resumeOffsetSeconds || this.state.hovered)
                        }),
                        i = a("video-preview-card__preview-image", {
                            "video-preview-card__preview-image--animated": this.state.hovered && this.state.didAnimatedPreviewLoad
                        });
                    return s.createElement(f.j, {
                        overflow: !0
                    }, s.createElement(o.a, {
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: {
                                content: this.props.trackingContent,
                                medium: this.props.trackingMedium
                            },
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-image-link",
                        "data-test-selector": "preview-image-link"
                    }, s.createElement("div", {
                        className: n
                    }, s.createElement(f.P, {
                        flexShrink: 0
                    }, s.createElement("figure", null, s.createElement(f.j, {
                        ratio: f.k.Aspect16x9
                    }, s.createElement("img", {
                        alt: this.props.video.title,
                        className: i,
                        "data-test-selector": "preview-image",
                        onLoad: this.onPreviewImageLoad,
                        onError: this.onPreviewImageLoadError,
                        src: t
                    })))))))
                }, t.prototype.gameBoxArt = function() {
                    if (!this.showGameArt() || !this.props.video.game) return null;
                    var e = this.props.video.game,
                        t = {
                            pathname: "/directory/games/" + encodeURI(e.name),
                            state: {
                                content: this.props.trackingContent,
                                medium: this.props.trackingMedium
                            }
                        },
                        n = a("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": !(void 0 === this.state.resumeOffsetSeconds || this.state.hovered)
                        });
                    return s.createElement(f.U, {
                        "data-test-selector": "game-box-art",
                        display: f.H.InlineFlex,
                        flexShrink: 0
                    }, s.createElement(o.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, s.createElement(f.P, {
                        margin: {
                            right: 1
                        }
                    }, s.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, s.createElement(f._30, {
                        display: f.H.Block,
                        direction: f._32.Bottom,
                        label: e.name
                    }, s.createElement("div", {
                        className: n
                    }, s.createElement(f.C, {
                        aspect: f.k.BoxArt,
                        imageAlt: e.name,
                        imageSrc: e.boxArtURL || l.a.defaultBoxArtURL
                    })))))))
                }, t.prototype.videoMetaData = function() {
                    var e = Object(l.c)(new Date(this.props.video.publishedAt), "medium"),
                        t = null;
                    if (this.props.video.owner) {
                        var n = {
                            pathname: "/" + this.props.video.owner.login,
                            state: {
                                content: this.props.trackingContent,
                                medium: this.props.trackingMedium
                            }
                        };
                        t = s.createElement(o.a, {
                            to: n,
                            className: "video-preview-card__owner-display-name",
                            "data-a-target": "video-preview-card-channel-link",
                            "data-test-selector": "video-owner",
                            title: Object(c.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                        }, Object(c.a)(this.props.video.owner.login, this.props.video.owner.displayName))
                    }
                    return s.createElement(f.U, {
                        display: f.H.Flex,
                        flexDirection: f.J.Column
                    }, s.createElement(f.U, {
                        "data-test-selector": "video-title",
                        overflow: f.Y.Hidden,
                        position: f._2.Relative
                    }, s.createElement(f._21, {
                        color: f.F.Base,
                        fontSize: f.L.Size5
                    }, s.createElement(o.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: {
                                content: this.props.trackingContent,
                                medium: this.props.trackingMedium
                            },
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), s.createElement(f.U, {
                        flexShrink: 0,
                        flexGrow: 0
                    }, s.createElement(f._21, {
                        type: f._26.Span,
                        color: f.F.Alt2
                    }, e, s.createElement("span", null, " · "), t)))
                }, t.prototype.showGameArt = function() {
                    return !this.props.hideGameArt && this.props.video.game && "" !== this.props.video.game.name
                }, t
            }(s.Component),
            S = Object(d.c)("VideoPreviewCard")(v)
    },
    1139: function(e, t) {},
    1140: function(e, t) {},
    1278: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = {
                share_medium: e.shareMedium,
                event_id: e.eventID,
                channel: e.channelLogin,
                channel_id: e.channelID,
                location: e.location
            };
            return s.n.tracking.track(o.SpadeEventType.EventShare, t)
        }

        function a(e) {
            var t = {
                action: e.action,
                channel: e.channelLogin,
                channel_id: e.channelID,
                event_id: e.eventID,
                location: e.location
            };
            return s.n.tracking.track(o.SpadeEventType.EventFollowing, t)
        }
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return l
        }), t.c = i, t.d = a;
        var r, s = n(2),
            o = n(14);
        ! function(e) {
            e.ChannelEvents = "channel_events", e.EventDetails = "event_details", e.EventManagment = "event_managment"
        }(r || (r = {}));
        var l;
        ! function(e) {
            e.RemindMeOpen = "remind_me_open_modal", e.EmailReminderOn = "email_reminder_on", e.EmailReminderOff = "email_reminder_off"
        }(l || (l = {}))
    },
    1284: function(e, t, n) {
        "use strict";
        var i = n(1),
            a = n(6),
            r = n(1130),
            s = n(1049),
            o = n(3),
            l = function(e) {
                var t = [];
                if (null === e.videos)
                    for (var n = void 0 === e.placeholderCount ? 20 : e.placeholderCount, a = 0; a < n; a++) t.push(i.createElement(s.a, {
                        key: a
                    }));
                else t = e.videos.map(function(t, n) {
                    return i.createElement(o.U, {
                        key: "video-" + n,
                        padding: {
                            bottom: 2
                        }
                    }, i.createElement(r.VideoPreviewCard, {
                        hideGameArt: e.hideGameArt,
                        trackingContent: e.trackingContent,
                        trackingMedium: e.trackingMedium,
                        video: t
                    }))
                });
                return i.createElement(o._33, {
                    gutterSize: o._35.Small,
                    childWidth: o._34.Medium,
                    placeholderItems: 20
                }, t)
            },
            c = Object(a.c)("VideoTower", {
                autoReportInteractive: !0
            })(l);
        n.d(t, !1, function() {
            return 20
        }), n.d(t, !1, function() {
            return l
        }), n.d(t, "a", function() {
            return c
        })
    },
    1384: function(e, t, n) {
        "use strict";
        var i = n(1),
            a = n(2),
            r = n(3),
            s = (n(1385), function(e) {
                var t = Object(a.c)(e.date, {
                        month: "short"
                    }),
                    n = Object(a.c)(e.date, {
                        day: "numeric"
                    });
                return i.createElement(r._17, {
                    background: r.m.Base,
                    elevation: 2,
                    display: r.H.Flex,
                    flexDirection: r.J.Column,
                    className: "event-calendar-date",
                    margin: {
                        top: .5,
                        left: .5
                    },
                    position: r._2.Absolute,
                    attachTop: !0,
                    attachLeft: !0
                }, i.createElement(r._17, {
                    className: "event-calendar-date__month",
                    display: r.H.Flex,
                    justifyContent: r.T.Center,
                    background: r.m.AccentAlt2
                }, i.createElement(r._21, {
                    fontSize: r.L.Size6,
                    transform: r._25.Uppercase,
                    color: r.F.Overlay
                }, t)), i.createElement(r.U, {
                    display: r.H.Flex,
                    justifyContent: r.T.Center
                }, i.createElement(r._21, {
                    fontSize: r.L.Size3,
                    color: r.F.Base
                }, n)))
            });
        n.d(t, "a", function() {
            return s
        })
    },
    1385: function(e, t) {},
    1386: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                isLoggedIn: Object(c.d)(e)
            }
        }

        function a(e) {
            return Object(s.bindActionCreators)({
                login: function() {
                    return Object(l.f)(o.a.EventFollowButton)
                }
            }, e)
        }
        var r = n(8),
            s = n(11),
            o = n(51),
            l = n(35),
            c = n(19),
            u = n(0),
            d = n(1),
            p = n(31),
            m = n(2),
            h = n(64),
            b = n(23),
            g = n(1278),
            f = n(3),
            v = n(1387),
            S = n(1388),
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleOpen = function(e) {
                        e && Object(g.d)({
                            action: g.b.RemindMeOpen,
                            channelLogin: t.props.channelLogin,
                            channelID: t.props.channelID,
                            eventID: t.props.eventID,
                            location: t.props.eventLocation
                        })
                    }, t.handleToggle = function() {
                        if (!t.props.isLoggedIn) return t.props.login();
                        if (t.props.areNotificationsEnabled) {
                            var e = u.__assign({}, Object(b.a)({
                                eventID: t.props.eventID
                            }), {
                                optimisticResponse: {
                                    unfollowEvent: {
                                        __typename: "UnfollowEventPayload",
                                        event: {
                                            __typename: "Event",
                                            id: t.props.eventID,
                                            self: {
                                                __typename: "EventSelfConnection",
                                                isFollowing: !1
                                            }
                                        }
                                    }
                                }
                            });
                            t.props.unfollowEvent(e)
                        } else {
                            var e = u.__assign({}, Object(b.a)({
                                eventID: t.props.eventID
                            }), {
                                optimisticResponse: {
                                    followEvent: {
                                        __typename: "FollowEventPayload",
                                        event: {
                                            __typename: "Event",
                                            id: t.props.eventID,
                                            self: {
                                                __typename: "EventSelfConnection",
                                                isFollowing: !0
                                            }
                                        }
                                    }
                                }
                            });
                            t.props.followEvent(e)
                        }
                        Object(g.d)({
                            action: t.props.areNotificationsEnabled ? g.b.EmailReminderOff : g.b.EmailReminderOn,
                            channelLogin: t.props.channelLogin,
                            channelID: t.props.channelID,
                            eventID: t.props.eventID,
                            location: t.props.eventLocation
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return d.createElement(h.a, {
                        onToggle: this.handleOpen
                    }, d.createElement(f.u, {
                        dropdown: !0
                    }, Object(m.d)("Remind Me", "FollowEvent")), d.createElement(f.p, {
                        direction: this.props.balloonDirection
                    }, d.createElement(f.U, {
                        padding: 1
                    }, d.createElement(f._17, {
                        display: f.H.Flex,
                        flexDirection: f.J.Row,
                        flexWrap: f.K.NoWrap,
                        justifyContent: f.T.Between,
                        margin: {
                            bottom: 1
                        },
                        padding: {
                            bottom: 1
                        },
                        borderBottom: !0
                    }, d.createElement(f._21, null, Object(m.d)("Reminders", "FollowEvent")), d.createElement(f._29, {
                        checked: this.props.areNotificationsEnabled,
                        onChange: this.handleToggle
                    })), d.createElement(f._21, {
                        color: f.F.Alt
                    }, Object(m.d)("Turn on reminders to be notified when this event starts.", "FollowEvent")))))
                }, t
            }(d.Component),
            y = Object(p.compose)(Object(p.graphql)(v, {
                name: "followEvent"
            }), Object(p.graphql)(S, {
                name: "unfollowEvent"
            }))(k),
            _ = Object(r.a)(i, a)(y);
        n.d(t, "a", function() {
            return _
        })
    },
    1387: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Events_FollowEvent"
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
                                value: "FollowEventInput"
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
                            value: "followEvent"
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
                                    value: "event"
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
                                                    value: "isFollowing"
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
                end: 162
            }
        };
        n.loc.source = {
            body: "mutation Events_FollowEvent($input: FollowEventInput!) {\n  followEvent(input: $input) {\n    event {\n      id\n      self {\n        isFollowing\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1388: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Events_FollowEvent"
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
                                value: "UnfollowEventInput"
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
                            value: "unfollowEvent"
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
                                    value: "event"
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
                                                    value: "isFollowing"
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
                end: 166
            }
        };
        n.loc.source = {
            body: "mutation Events_FollowEvent($input: UnfollowEventInput!) {\n  unfollowEvent(input: $input) {\n    event {\n      id\n      self {\n        isFollowing\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1389: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                isLoggedIn: Object(d.d)(e)
            }
        }

        function a(e) {
            return Object(o.bindActionCreators)({
                login: function() {
                    return Object(u.f)(l.a.ReportChannel)
                },
                showReportUserModal: function(e) {
                    var t = r.__rest(e, []);
                    return Object(c.d)(p.a, t)
                }
            }, e)
        }
        var r = n(0),
            s = n(8),
            o = n(11),
            l = n(51),
            c = n(50),
            u = n(35),
            d = n(19),
            p = n(928),
            m = n(1),
            h = n(2),
            b = n(64),
            g = n(919),
            f = n(3),
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleReportClick = function() {
                        if (!t.props.isLoggedIn) return t.props.login();
                        var e = "https://www.twitch.tv/events/" + t.props.eventID;
                        t.props.showReportUserModal({
                            reportContext: {
                                contentType: g.a.User,
                                targetUserID: t.props.targetUser.id
                            },
                            title: Object(h.d)("Report {channelName}", {
                                channelName: t.props.targetUser.displayName
                            }, "EventMoreMenu"),
                            defaultDescription: "Report event: " + e
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return m.createElement(b.a, null, m.createElement(f.u, {
                        icon: f._9.More,
                        type: f.z.Hollow
                    }), m.createElement(f.p, {
                        direction: this.props.balloonDirection
                    }, m.createElement(f.U, {
                        padding: {
                            y: 1
                        }
                    }, m.createElement(f.S, {
                        onClick: this.handleReportClick
                    }, m.createElement(f.U, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, Object(h.d)("Report", "EventMoreMenu"))))))
                }, t
            }(m.Component),
            S = Object(s.a)(i, a)(v);
        n.d(t, "a", function() {
            return S
        })
    },
    1390: function(e, t, n) {
        "use strict";

        function i(e) {
            return "https://www.twitch.tv/events/" + e
        }
        var a = n(0),
            r = n(1),
            s = n(2),
            o = n(1046),
            l = n(64),
            c = n(1278),
            u = n(3),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onShareClicked = function(e) {
                        var n = "";
                        switch (e) {
                            case o.b.Twitter:
                                n = "twitter";
                                break;
                            case o.b.Facebook:
                                n = "facebook";
                                break;
                            case o.b.Reddit:
                                n = "reddit";
                                break;
                            case o.b.VKontakte:
                                n = "vk";
                                break;
                            default:
                                n = "unknown"
                        }
                        Object(c.c)({
                            shareMedium: n,
                            eventID: t.props.id,
                            channelLogin: t.props.channelLogin,
                            channelID: t.props.channelID,
                            location: t.props.eventLocation
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = i(this.props.id);
                    return r.createElement(l.a, null, r.createElement(u.u, {
                        dropdown: !0,
                        type: u.z.Hollow
                    }, Object(s.d)("Share", "ShareEvent")), r.createElement(u.p, {
                        direction: this.props.balloonDirection
                    }, r.createElement(u.U, {
                        padding: 1
                    }, r.createElement(u.U, {
                        display: u.H.Flex,
                        flexDirection: u.J.Row,
                        flexWrap: u.K.NoWrap,
                        justifyContent: u.T.Center
                    }, r.createElement(o.a, {
                        type: o.b.Twitter,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), r.createElement(o.a, {
                        type: o.b.Facebook,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), r.createElement(o.a, {
                        type: o.b.Reddit,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), r.createElement(o.a, {
                        type: o.b.VKontakte,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), r.createElement(o.a, {
                        type: o.b.Copy,
                        text: this.props.title,
                        url: e
                    })))))
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return d
        })
    },
    1852: function(e, t) {},
    1853: function(e, t) {},
    1854: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "EventLandingPage_Event"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "eventName"
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
                            value: "event"
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
                                    value: "eventName"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "SingleEvent"
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
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "channel"
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
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
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
                                                    value: "isFollowing"
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
                                            value: "__typename"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "PremiereEvent"
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
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "channel"
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
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "premiere"
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
                                                    value: "status"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "pastPremiere"
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
                                                            value: "broadcastType"
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
                                                            value: "thumbnailURLs"
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
                                                            value: "animatedPreviewURL"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "previewThumbnailURL"
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
                                                            value: "publishedAt"
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
                                            value: "imageURL"
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
                                                    value: "isFollowing"
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
                                            value: "__typename"
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
                end: 1396
            }
        };
        n.loc.source = {
            body: "query EventLandingPage_Event($eventName: ID!) {\n  event(id: $eventName) {\n    ...on SingleEvent {\n      id\n      title\n      description\n      startAt\n      endAt\n      game {\n        id\n        displayName\n        boxArtURL(width:285, height:380)\n      }\n      channel {\n        id\n        login\n        displayName\n        profileImageURL(width:300)\n      }\n      imageURL(width:320, height:180)\n      self {\n        isFollowing\n      }\n      __typename\n    }\n    ...on PremiereEvent {\n      id\n      title\n      description\n      startAt\n      endAt\n      game {\n        id\n        displayName\n        boxArtURL(width:285, height:380)\n      }\n      channel {\n        id\n        login\n        displayName\n        profileImageURL(width:300)\n      }\n      premiere {\n        status\n        pastPremiere {\n          id\n          broadcastType\n          description\n          thumbnailURLs(width: 320 height: 180)\n          viewCount\n          title\n          animatedPreviewURL\n          previewThumbnailURL(width: 320 height: 180)\n          publishedAt\n          lengthSeconds\n          owner {\n            id\n            login\n            displayName\n          }\n          game {\n            id\n            name\n            boxArtURL(width: 285 height: 380)\n          }\n        }\n      }\n      imageURL(width:320, height:180)\n      self {\n        isFollowing\n      }\n      __typename\n    }\n  }\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1855: function(e, t) {},
    2023: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = new Date;
            return t && (n = t), a(e, n) ? y.LIVE : r(e, n) ? y.FUTURE : y.PAST
        }

        function a(e, t) {
            if (t < e.endAt) {
                if (e.eventType === _.PREMIERE_EVENT) return !!e.premiere && e.premiere.status === c.STARTED;
                if (e.eventType === _.SINGLE_EVENT) return t > e.startAt
            }
            return !1
        }

        function r(e, t) {
            return e.eventType === _.PREMIERE_EVENT ? t < e.endAt : e.eventType === _.SINGLE_EVENT && t < e.startAt
        }

        function s(e, t) {
            var n = new Date;
            t && (n = t);
            var i = {
                weekday: "long",
                month: "short",
                day: "numeric"
            };
            return n.getFullYear() !== e.getFullYear() && (i = u.__assign({}, i, {
                year: "numeric"
            })), Object(p.c)(e, i)
        }

        function o(e) {
            var t = {
                timeZoneName: "short"
            };
            return Object(p.h)(e, t)
        }

        function l(e, t) {
            var n = Math.abs(e.getTime() / 1e3 - t.getTime() / 1e3);
            return Object(V.a)(n)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c, u = n(0),
            d = n(1),
            p = n(2),
            m = n(66),
            h = n(9),
            b = n(922),
            g = n(918),
            f = n(14),
            v = n(1010),
            S = n(6),
            k = n(4);
        ! function(e) {
            e.UNSCHEDULED = "UNSCHEDULED", e.SCHEDULED = "SCHEDULED", e.CANCELLED = "CANCELLED", e.STARTED = "STARTED", e.SUCCESS = "SUCCESS", e.FAILED = "FAILED"
        }(c || (c = {}));
        var y;
        ! function(e) {
            e.LIVE = "LIVE", e.FUTURE = "FUTURE", e.PAST = "PAST"
        }(y || (y = {}));
        var _;
        ! function(e) {
            e.SINGLE_EVENT = "SingleEvent", e.PREMIERE_EVENT = "PremiereEvent"
        }(_ || (_ = {}));
        var E = n(3),
            T = (n(1852), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        countdownActive: !0
                    }, t.cancelCountdown = function() {
                        t.setState({
                            countdownActive: !1
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = k({
                            "event-landing-action__progress": this.state.countdownActive
                        }),
                        t = "";
                    "function" == typeof p.d && (t = Object(p.d)("This event is Live! Head to the channel page to watch and chat.", "EventLandingAction"), this.state.countdownActive && (t = Object(p.d)("This event is Live! Redirecting to the channel page in 5 seconds.", "EventLandingAction")));
                    var n = d.createElement(E.U, {
                            margin: {
                                left: 1
                            }
                        }, d.createElement(E.u, {
                            linkTo: {
                                pathname: "/" + this.props.login,
                                state: {
                                    content: "cancelled_countdown",
                                    medium: "event_page"
                                }
                            }
                        }, Object(p.d)("Go to Channel", "EventLandingAction"))),
                        i = null;
                    this.state.countdownActive && (n = d.createElement(E.U, {
                        margin: {
                            left: 1
                        }
                    }, d.createElement(E.u, {
                        onClick: this.cancelCountdown
                    }, Object(p.d)("Cancel", "EventLandingAction"))), i = d.createElement(E._5, {
                        countdown: 5,
                        onCountdownEnd: this.props.onCountdownSuccess,
                        size: E._6.Small
                    }));
                    var a = d.createElement(E.V, null);
                    return this.props.eventType === _.PREMIERE_EVENT && (a = d.createElement(E._8, {
                        asset: E._9.VideoPremiere,
                        type: E._10.Live,
                        width: 10
                    })), d.createElement(E.U, null, d.createElement(E._17, {
                        display: E.H.Flex,
                        flexWrap: E.K.NoWrap,
                        border: !0,
                        margin: {
                            top: 2
                        },
                        alignItems: E.c.Center,
                        className: "event-landing-action__strip",
                        background: E.m.Base
                    }, d.createElement(E.U, {
                        display: E.H.InlineFlex,
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, a), d.createElement(E.U, {
                        className: "event-landing-action__message",
                        display: E.H.InlineFlex,
                        flexWrap: E.K.Wrap,
                        flexGrow: 1
                    }, t), d.createElement(E.U, {
                        display: E.H.InlineFlex,
                        flexShrink: 0
                    }, n)), d.createElement(E.U, {
                        className: e
                    }, i))
                }, t
            }(d.Component)),
            N = Object(S.c)("EventLandingAction")(T),
            C = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(p.d)("No description listed", "EventLandingDescription");
                    return "" !== this.props.description && (e = this.props.description), d.createElement(E._17, {
                        padding: {
                            top: 2
                        }
                    }, d.createElement(E._21, {
                        transform: E._25.Uppercase,
                        type: E._26.H5,
                        color: E.F.Alt2
                    }, Object(p.d)("Description", "EventLandingDescription")), d.createElement(E.U, {
                        margin: {
                            top: 1
                        }
                    }, d.createElement(E.U, null, d.createElement(E._21, {
                        fontSize: E.L.Size5
                    }, e))))
                }, t = u.__decorate([Object(S.c)("EventLandingDescription")], t)
            }(d.Component),
            w = C,
            P = n(1386),
            U = n(1389),
            O = n(1390),
            A = n(1278),
            I = (n(1853), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = {
                            startAt: new Date(this.props.startAt),
                            endAt: new Date(this.props.endAt),
                            premiere: this.props.premiere,
                            eventType: this.props.eventType
                        },
                        t = i(e),
                        n = d.createElement(E.u, {
                            disabled: !0
                        }, Object(p.d)("Past Event", "EventLandingTitle"));
                    return t === y.LIVE ? n = d.createElement(E.u, {
                        linkTo: {
                            pathname: "/" + this.props.channel.login,
                            state: {
                                content: "call_to_action",
                                medium: "event_page"
                            }
                        }
                    }, Object(p.d)("Watch Now", "EventLandingTitle")) : t === y.FUTURE && (n = d.createElement(P.a, {
                        eventID: this.props.id,
                        areNotificationsEnabled: !(!this.props.self || !this.props.self.isFollowing),
                        channelID: this.props.channel.id,
                        channelLogin: this.props.channel.login,
                        eventLocation: A.a.EventDetails
                    })), d.createElement(E._17, {
                        borderBottom: !0
                    }, d.createElement(E._21, {
                        type: E._26.H2,
                        className: "event-landing-title__heading"
                    }, this.props.title), d.createElement(E.U, {
                        display: E.H.Flex,
                        margin: {
                            top: 2,
                            bottom: 3
                        }
                    }, d.createElement(E.U, {
                        margin: {
                            right: 1
                        }
                    }, n), d.createElement(E.U, {
                        margin: {
                            right: 1
                        }
                    }, d.createElement(O.a, {
                        id: this.props.id,
                        title: this.props.title,
                        channelID: this.props.channel.id,
                        channelLogin: this.props.channel.login,
                        eventLocation: A.a.EventDetails
                    })), d.createElement(U.a, {
                        targetUser: {
                            id: this.props.channel.id,
                            displayName: this.props.channel.displayName
                        },
                        eventID: this.props.id,
                        balloonDirection: E.q.Bottom
                    })))
                }, t
            }(d.Component)),
            D = Object(S.c)("EventLandingTitle")(I),
            F = n(1284),
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return d.createElement(E._17, {
                        padding: {
                            top: 2
                        }
                    }, d.createElement(E._21, {
                        transform: E._25.Uppercase,
                        type: E._26.H5,
                        color: E.F.Alt2
                    }, Object(p.d)("Videos", "EventLandingVideos")), d.createElement(E.U, {
                        margin: {
                            top: 1
                        }
                    }, d.createElement(E.U, null, d.createElement(F.a, {
                        trackingContent: f.PageviewContent.EventPast,
                        trackingMedium: f.PageviewMedium.EventDetails,
                        videos: [this.props.pastPremiere]
                    }))))
                }, t = u.__decorate([Object(S.c)("EventLandingVideos")], t)
            }(d.Component),
            B = x,
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onCountdownSuccess = function() {
                        t.props.goToVideo()
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    var e = {
                            startAt: new Date(this.props.startAt),
                            endAt: new Date(this.props.endAt),
                            premiere: this.props.premiere,
                            eventType: this.props.eventType
                        },
                        t = i(e),
                        n = null;
                    t === y.LIVE && (n = d.createElement(N, {
                        id: this.props.id,
                        login: this.props.channel.login,
                        eventType: this.props.eventType,
                        onCountdownSuccess: this.onCountdownSuccess
                    }));
                    var a = null;
                    return this.props.eventType === _.PREMIERE_EVENT && this.props.premiere && this.props.premiere.pastPremiere && (a = d.createElement(B, {
                        pastPremiere: this.props.premiere.pastPremiere
                    })), d.createElement(E.U, null, d.createElement(D, {
                        id: this.props.id,
                        title: this.props.title,
                        startAt: this.props.startAt,
                        endAt: this.props.endAt,
                        channel: this.props.channel,
                        self: this.props.self,
                        premiere: this.props.premiere,
                        eventType: this.props.eventType
                    }), n, a, d.createElement(w, {
                        description: this.props.description
                    }))
                }, t = u.__decorate([Object(S.c)("EventLandingBody", {
                    autoReportInteractive: !0
                })], t)
            }(d.Component),
            j = R,
            L = n(1384),
            M = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    var e = new Date(this.props.startAt);
                    return d.createElement(E.A, {
                        row: !0
                    }, d.createElement(E.P, {
                        flexShrink: 0
                    }, d.createElement(E.C, {
                        size: E.D.Size32,
                        aspect: E.k.Aspect16x9,
                        imageSrc: this.props.imageURL,
                        imageAlt: this.props.title
                    }, d.createElement(L.a, {
                        date: e
                    }))))
                }, t = u.__decorate([Object(S.c)("EventLandingImage", {
                    autoReportInteractive: !0
                })], t)
            }(d.Component),
            H = M,
            G = n(12),
            W = n(406),
            V = n(1004),
            z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderGameBoxArt = function() {
                        var e = t.props.game.boxArtURL;
                        return d.createElement(E.C, {
                            imageSrc: e,
                            imageAlt: t.props.game.displayName,
                            aspect: E.k.Aspect3x4,
                            size: E.D.Size4
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = new Date(this.props.startAt),
                        n = new Date(this.props.endAt);
                    switch (this.props.eventType) {
                        case _.SINGLE_EVENT:
                            e = Object(p.d)("Live Stream", "EventLandingInfo");
                            break;
                        case _.PREMIERE_EVENT:
                            e = Object(p.d)("Premiere", "EventLandingInfo");
                            break;
                        default:
                            e = Object(p.d)("Unknown", "EventLandingInfo")
                    }
                    return d.createElement(E.U, {
                        margin: {
                            x: 3
                        },
                        padding: {
                            y: 2
                        }
                    }, d.createElement(E.U, null, d.createElement(E._21, {
                        transform: E._25.Uppercase,
                        type: E._26.H5,
                        color: E.F.Alt2
                    }, Object(p.d)("Date & Time", "EventLandingInfo")), d.createElement(E.U, {
                        margin: {
                            top: 1
                        }
                    }, d.createElement(E._21, {
                        fontSize: E.L.Size5
                    }, s(t))), d.createElement(E.U, {
                        margin: {
                            top: 1
                        }
                    }, d.createElement(E._21, {
                        fontSize: E.L.Size5
                    }, o(t))), d.createElement(E.U, {
                        margin: {
                            top: 1
                        }
                    }, d.createElement(E._21, {
                        fontSize: E.L.Size5
                    }, l(t, n)))), d.createElement(E.U, {
                        margin: {
                            top: 3
                        }
                    }, d.createElement(E._21, {
                        transform: E._25.Uppercase,
                        type: E._26.H5,
                        color: E.F.Alt2
                    }, Object(p.d)("Event Type", "EventLandingInfo")), d.createElement(E.U, {
                        margin: {
                            top: 1
                        }
                    }, d.createElement(E._21, {
                        fontSize: E.L.Size5
                    }, e))), d.createElement(E.U, {
                        margin: {
                            top: 3
                        }
                    }, d.createElement(E._21, {
                        transform: E._25.Uppercase,
                        type: E._26.H5,
                        color: E.F.Alt2
                    }, Object(p.d)("Starring", "EventLandingInfo")), d.createElement(G.a, {
                        to: {
                            pathname: "/" + this.props.channel.login,
                            state: {
                                content: "author_avatar",
                                medium: "event_page"
                            }
                        }
                    }, d.createElement(E.U, {
                        display: E.H.Flex,
                        flexWrap: E.K.Wrap,
                        alignItems: E.c.Center,
                        margin: {
                            top: 1
                        }
                    }, d.createElement(E.U, {
                        display: E.H.InlineFlex
                    }, d.createElement(E.l, {
                        size: 40,
                        imageSrc: this.props.channel.profileImageURL,
                        imageAlt: "User profile picture"
                    })), d.createElement(E.U, {
                        display: E.H.InlineFlex,
                        margin: {
                            left: 1
                        }
                    }, d.createElement(E._21, {
                        fontSize: E.L.Size5
                    }, this.props.channel.displayName))))), d.createElement(E.U, {
                        margin: {
                            top: 3
                        }
                    }, d.createElement(E._21, {
                        transform: E._25.Uppercase,
                        type: E._26.H5,
                        color: E.F.Alt2
                    }, Object(p.d)("Streaming", "EventLandingInfo")), d.createElement(G.a, {
                        to: {
                            pathname: Object(W.d)(this.props.game.displayName),
                            state: {
                                content: "event_game",
                                medium: "event_page"
                            }
                        }
                    }, d.createElement(E.U, {
                        display: E.H.Flex,
                        flexWrap: E.K.Wrap,
                        alignItems: E.c.Center,
                        margin: {
                            top: 1
                        }
                    }, d.createElement(E.U, {
                        display: E.H.InlineFlex
                    }, this.renderGameBoxArt()), d.createElement(E.U, {
                        display: E.H.InlineFlex,
                        margin: {
                            left: 1
                        }
                    }, d.createElement(E._21, {
                        fontSize: E.L.Size5
                    }, this.props.game.displayName))))))
                }, t = u.__decorate([Object(S.c)("EventLandingInfo")], t)
            }(d.Component),
            q = z,
            K = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return d.createElement(E._17, {
                        background: E.m.Base
                    }, d.createElement(E._17, {
                        border: !0
                    }, d.createElement(H, {
                        title: this.props.title,
                        imageURL: this.props.imageURL,
                        startAt: this.props.startAt
                    })), d.createElement(E._17, {
                        borderRight: !0,
                        borderLeft: !0,
                        borderBottom: !0
                    }, d.createElement(q, {
                        startAt: this.props.startAt,
                        endAt: this.props.endAt,
                        channel: this.props.channel,
                        game: this.props.game,
                        eventType: this.props.eventType
                    })))
                }, t = u.__decorate([Object(S.c)("EventLandingSidePanel")], t)
            }(d.Component),
            $ = K,
            Y = n(1854),
            J = (n(1855), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.goToVideo = function() {
                        t.props.history.push("/" + t.props.data.event.channel.login)
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e = d.createElement(E.U, {
                        margin: {
                            top: 3
                        }
                    }, d.createElement(E.X, {
                        fillContent: !0
                    }));
                    return this.props.data.error || !this.props.data.loading && !this.props.data.event ? d.createElement(m.a, {
                        message: Object(p.d)("Error loading data.", "EventLandingPage")
                    }) : (this.props.data.event && (e = d.createElement(E.U, null, d.createElement(v.a, {
                        currentPage: v.b.Events,
                        channelLogin: this.props.data.event ? this.props.data.event.channel.login : ""
                    }), d.createElement(E.U, {
                        display: E.H.Flex,
                        flexWrap: E.K.NoWrap,
                        margin: {
                            left: 3,
                            top: 3,
                            right: 3
                        },
                        className: "event-landing-page__wrapper"
                    }, d.createElement(E.U, {
                        flexShrink: 0,
                        flexGrow: 0,
                        margin: {
                            right: 3
                        }
                    }, d.createElement($, {
                        title: this.props.data.event.title,
                        imageURL: this.props.data.event.imageURL,
                        startAt: this.props.data.event.startAt,
                        endAt: this.props.data.event.endAt,
                        channel: this.props.data.event.channel,
                        game: this.props.data.event.game,
                        eventType: this.props.data.event.__typename
                    })), d.createElement(E.U, {
                        flexGrow: 1
                    }, d.createElement(j, {
                        id: this.props.data.event.id,
                        title: this.props.data.event.title,
                        description: this.props.data.event.description,
                        startAt: this.props.data.event.startAt,
                        endAt: this.props.data.event.endAt,
                        channel: this.props.data.event.channel,
                        self: this.props.data.event.self,
                        eventType: this.props.data.event.__typename,
                        premiere: this.props.data.event.premiere,
                        goToVideo: this.goToVideo
                    }))))), d.createElement(E.U, null, e))
                }, t.prototype.onRender = function() {
                    this.props.data.event && (this.props.latencyTracking.reportInteractive(), this.props.data.event.title && p.n.setPageTitle(this.props.data.event.title))
                }, t = u.__decorate([Object(h.a)(Y, {
                    options: function(e) {
                        return {
                            variables: {
                                eventName: e.match.params.eventName
                            }
                        }
                    }
                }), Object(S.c)("EventLandingPage", {
                    destination: g.a.EventDetails,
                    autoReportInteractive: !0
                }), Object(b.a)({
                    location: f.PageviewLocation.EventDetails,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    }
                })], t)
            }(d.Component)),
            Q = J;
        n.d(t, "EventLandingPage", function() {
            return Q
        })
    },
    411: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Ready = 0] = "Ready", e[e.Dimensions = 1] = "Dimensions", e[e.RequestAd = 2] = "RequestAd", e[e.OnStart = 3] = "OnStart", e[e.OnCredit = 4] = "OnCredit", e[e.OnFinish = 5] = "OnFinish", e[e.OnClose = 6] = "OnClose", e[e.OnError = 7] = "OnError", e[e.Adblock = 8] = "Adblock", e[e.LimitReached = 9] = "LimitReached"
        }(i || (i = {}))
    },
    915: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = {
                action_name: e.actionName,
                action_type: "click",
                client_time: (new Date).getTime(),
                displayed_balance: e.displayedBalance,
                emote_level: e.emoteLevel,
                emote_type: e.emoteType,
                bits_location: e.location || d.ChatTooltip
            };
            c.m.track(u.SpadeEventType.BitsCardInteraction, t)
        }

        function a(e) {
            return e && m[e] ? m[e] : (c.i.error(new Error('Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), 'Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), p.Buy100)
        }

        function r(e) {
            var t = {
                channel: e.channel,
                channel_id: e.channelID,
                available: e.available,
                host: "twitch.tv"
            };
            c.m.track(u.SpadeEventType.BitsAdsAvailability, t)
        }

        function s(e) {
            var t = {
                distinct_id: c.n.session.deviceID,
                host: "twitch.tv",
                request_id: e.requestID,
                campaign_id: e.campaignID,
                adblock: e.adblock
            };
            c.m.track(u.SpadeEventType.BitsAdsImpression, t)
        }

        function o(e) {
            var t = c.m.getLastPageview(),
                n = {
                    location: t ? t.location || "" : "",
                    ad_returned: null,
                    campaign_id: e.campaignID,
                    distinct_id: c.n.session.deviceID,
                    host: "twitch.tv",
                    request_id: e.requestID,
                    request_method: e.requestMethod
                };
            c.m.track(u.SpadeEventType.BitsAdsRequest, n)
        }
        t.h = i, n.d(t, "b", function() {
            return d
        }), n.d(t, "a", function() {
            return p
        }), t.d = a, t.e = r, t.f = s, n.d(t, "c", function() {
            return l
        }), t.g = o;
        var l, c = n(2),
            u = n(14),
            d = {
                ChatTooltip: "card",
                GetBitsButton: "get_bits_button",
                BitsLandingPage: "bits_landing_page"
            },
            p = {
                BuyMain: "buy_main",
                Buy100: "buy_100",
                Buy500: "buy_500",
                Buy1000: "buy_1000",
                Buy1500: "buy_1500",
                Buy5000: "buy_5000",
                Buy10000: "buy_10000",
                Buy25000: "buy_25000",
                CloseCard: "menu_close",
                OpenCard: "menu_open",
                PreviewEmote: "emote_preview",
                WatchAd: "watch_ad",
                WatchAnotherAd: "watch_another_ad"
            },
            m = {
                100: p.Buy100,
                500: p.Buy500,
                1e3: p.Buy1000,
                1500: p.Buy1500,
                5e3: p.Buy5000,
                1e4: p.Buy10000,
                25e3: p.Buy25000
            };
        ! function(e) {
            e.ShowAdButton = "show_ad_button"
        }(l || (l = {}))
    },
    917: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n(0),
            a = n(2),
            r = n(19),
            s = function() {
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
                    var s = Object(r.c)(n);
                    return s && (i.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (i["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e
            }()
    },
    918: function(e, t, n) {
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
            s = n(11),
            o = n(2),
            l = n(9),
            c = n(6),
            u = n(926),
            d = n(3),
            p = n(944),
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
                        t = Object(o.d)("Select One...", "ReportUserModal");
                    return e = this.props.data.loading ? [r.createElement("option", {
                        key: "Loading"
                    }, Object(o.d)("Loading...", "ReportReasonsSelect"))] : Object(u.b)(this.props.data.reportReasons).map(function(e) {
                        return r.createElement("option", {
                            key: e.canonical,
                            value: e.canonical
                        }, e.localized)
                    }), r.createElement(d.U, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(d.M, {
                        id: "reporting-modal__select",
                        label: Object(o.d)("Select Reason (required)", "ReportUserModal")
                    }, r.createElement(d._14, {
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
            h = Object(l.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            content: e.reportContentType
                        }
                    }
                }
            })(m),
            b = (n(945), n(946));
        n.d(t, "a", function() {
            return f
        }), n.d(t, "b", function() {
            return g
        }), n.d(t, "c", function() {
            return S
        });
        var g, f = "community_rules_violation";
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
                    }, t.headerMessage = Object(o.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: r.createElement("br", null),
                        tosLink: r.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(o.d)("terms of service", "ReportUser"))
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
                        n.length && e === f ? t.setState({
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
                    return r.createElement(d.U, {
                        display: d.H.Flex,
                        flexDirection: d.J.Column,
                        alignItems: d.c.Center,
                        justifyContent: d.T.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === g.Success ? r.createElement("div", null, r.createElement(d.u, {
                        onClick: this.props.onClose
                    }, r.createElement(d.U, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Close", "ReportUser")))) : r.createElement("div", null, r.createElement(d.U, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(d._21, {
                        type: d._26.H4
                    }, this.props.title), r.createElement(d._17, {
                        color: d.F.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), r.createElement("form", null, r.createElement(d._17, {
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
                    }), this.renderCommunitiesSelector(), r.createElement(d.M, {
                        id: "reporting__text-area",
                        label: Object(o.d)("Description (required)", "ReportUser")
                    }, r.createElement(d._23, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), r.createElement(d._17, {
                        display: d.H.Flex,
                        justifyContent: d.T.Center
                    }, r.createElement(d.u, {
                        onClick: this.handleSubmit
                    }, r.createElement(d.U, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Send", "ReportUser"))))))
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
                        return r.createElement(d.U, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(d.M, {
                            id: "reporting__select-community",
                            label: Object(o.d)("Community", "ReportUser")
                        }, r.createElement(d._14, {
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
                            e = Object(o.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case g.MutationError:
                            e = Object(o.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case g.Success:
                            e = Object(o.d)("Thank you for your report.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = a({
                        "reporting__error-container": this.props.submitStatus !== g.Success,
                        "reporting__success-container": this.props.submitStatus === g.Success
                    });
                    return r.createElement(d._17, {
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
            S = Object(s.compose)(Object(l.a)(b, {
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
    922: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var n = function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0, l.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = a.__assign({}, e.properties));
                                var n = a.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = i.referenceTracking,
                                    s = r.content,
                                    o = r.medium,
                                    c = r.content_index;
                                l.n.tracking.trackPageview(a.__assign({
                                    content: s,
                                    medium: o,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, l.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return a.__extends(i, n), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return s.createElement(t, a.__assign({}, this.props))
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
                }(s.Component);
                return Object(o.f)(n)
            }
        }
        var a = n(0),
            r = n(21),
            s = n(1),
            o = n(12),
            l = n(2);
        n.d(t, "a", function() {
            return i
        })
    },
    923: function(e, t, n) {
        "use strict";

        function i(e) {
            return "subscribe-button-modal-tab-" + e
        }
        var a, r = n(0),
            s = n(1),
            o = n(2),
            l = n(936),
            c = n(136),
            u = n(271),
            d = n(6),
            p = n(935),
            m = n(410),
            h = n(952),
            b = n(937),
            g = n(269),
            f = n(3),
            v = (n(973), "gift-subscription-button"),
            S = "subscribe-button";
        ! function(e) {
            e[e.Prime = 0] = "Prime", e[e.Tier1 = 1] = "Tier1", e[e.Tier2 = 2] = "Tier2", e[e.Tier3 = 3] = "Tier3"
        }(a || (a = {}));
        var k = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.toggleActiveTab = function(e) {
                        if (e.currentTarget.parentElement) switch (e.currentTarget.parentElement.getAttribute("data-a-target")) {
                            case "subscribe-button-modal-tab-" + a.Prime:
                                n.setState({
                                    activeTab: a.Prime,
                                    currentPurchasePrice: n.messages.tier1Price
                                }), n.props.onSelectTierTab(a.Prime);
                                break;
                            case "subscribe-button-modal-tab-" + a.Tier1:
                                n.setState({
                                    activeTab: a.Tier1,
                                    currentPurchasePrice: n.messages.tier1Price
                                }), n.props.onSelectTierTab(a.Tier1);
                                break;
                            case "subscribe-button-modal-tab-" + a.Tier2:
                                n.setState({
                                    activeTab: a.Tier2,
                                    currentPurchasePrice: n.messages.tier2Price
                                }), n.props.onSelectTierTab(a.Tier2);
                                break;
                            case "subscribe-button-modal-tab-" + a.Tier3:
                                n.setState({
                                    activeTab: a.Tier3,
                                    currentPurchasePrice: n.messages.tier3Price
                                }), n.props.onSelectTierTab(a.Tier3);
                                break;
                            default:
                                n.setState({
                                    activeTab: a.Prime,
                                    currentPurchasePrice: n.messages.tier1Price
                                }), n.props.onSelectTierTab(a.Prime)
                        }
                    }, n.getTabTitle = function() {
                        switch (n.state.activeTab) {
                            case a.Prime:
                                return n.messages.freeSubWithPrime;
                            case a.Tier1:
                                return n.messages.tier1Sub;
                            case a.Tier2:
                                return n.messages.tier2Sub;
                            case a.Tier3:
                                return n.messages.tier3Sub;
                            default:
                                return n.messages.tier1Sub
                        }
                    }, n.getTierSubscribeButton = function() {
                        var e = n.props.subscriptionProducts[n.state.activeTab - 1];
                        return n.props.isGift ? n.props.giftRecipient ? s.createElement(f.u, {
                            ariaLabel: n.messages.giftSubscription + " " + n.state.currentPurchasePrice,
                            "data-test-selector": v,
                            onClick: n.reportGiftCheckoutAction,
                            targetBlank: !0,
                            purchase: n.state.currentPurchasePrice,
                            linkTo: Object(c.a)(e.url, {
                                recipient: n.props.giftRecipient
                            })
                        }, n.messages.giftSubscription) : s.createElement(f.u, {
                            ariaLabel: n.messages.giftSubscription + " " + n.state.currentPurchasePrice,
                            "data-test-selector": v,
                            onClick: n.onGiftSelect,
                            purchase: n.state.currentPurchasePrice
                        }, n.messages.giftSubscription) : n.state.subbedTier === n.state.activeTab && n.state.activeTab === a.Prime ? s.createElement(h.a, {
                            authToken: n.props.authToken,
                            "data-a-target": "subscribe-with-prime-button",
                            isSubscribed: n.props.isSubscribed,
                            isSubscribedWithPrime: n.props.subbedTier === p.a,
                            onSubscribedWithPrime: n.onSubscribedWithPrime,
                            reportSubMenuAction: n.props.reportSubMenuAction,
                            subLogin: n.props.subLogin,
                            userHasPrime: n.props.userHasPrime,
                            canPrimeSubscribe: n.props.canPrimeSubscribe
                        }) : s.createElement(m.a, {
                            isSubbedToTier: n.state.subbedTier === n.state.activeTab,
                            tierPrice: n.state.currentPurchasePrice,
                            reportSubAction: n.props.reportSubMenuAction,
                            url: e.url,
                            "data-a-target": "subscribe-now-button",
                            "data-test-selector": S
                        })
                    }, n.onSubscribedWithPrime = function() {
                        n.props.onSubscribedWithPrime && n.props.onSubscribedWithPrime()
                    }, n.reportGiftCheckoutAction = function() {
                        n.props.reportSubMenuAction({
                            action: g.a.BuyGiftSub,
                            checkoutButtonTier: n.state.currentPurchasePrice,
                            giftRecipient: n.props.giftRecipient ? n.props.giftRecipient : null
                        })
                    }, n.onGiftSelect = function() {
                        n.props.reportSubMenuAction({
                            action: g.a.GiftASub,
                            checkoutButtonTier: n.state.currentPurchasePrice
                        }), n.props.onGiftSelect && n.props.onGiftSelect()
                    }, n.mapSubbedTierToTabs = function(e) {
                        e.subbedTier === l.a.Prime ? (n.setState({
                            activeTab: a.Prime,
                            subbedTier: a.Prime
                        }), e.onSelectTierTab(a.Prime)) : e.subbedTier === l.a.Tier1 ? (n.setState({
                            activeTab: a.Tier1,
                            subbedTier: a.Tier1
                        }), e.onSelectTierTab(a.Tier1)) : e.subbedTier === l.a.Tier2 ? (n.setState({
                            activeTab: a.Tier2,
                            subbedTier: a.Tier2
                        }), e.onSelectTierTab(a.Tier2)) : e.subbedTier === l.a.Tier3 ? (n.setState({
                            activeTab: a.Tier3,
                            subbedTier: a.Tier3
                        }), e.onSelectTierTab(a.Tier3)) : e.isGift ? e.onSelectTierTab(n.state.activeTab) : e.onSelectTierTab(a.Prime)
                    }, n.getExtraEmotes = function(e) {
                        return (e === a.Tier2 ? Object(u.b)(n.props.subscriptionProducts[1].emotes) : Object(u.b)(n.props.subscriptionProducts[2].emotes.concat(n.props.subscriptionProducts[1].emotes))).map(function(e) {
                            return s.createElement(f.U, {
                                display: f.H.InlineFlex,
                                margin: {
                                    right: .5
                                },
                                key: e.id
                            }, s.createElement("img", {
                                srcSet: "https://static-cdn.jtvnw.net/emoticons/v1/" + e.srcSet
                            }))
                        })
                    }, n.state = {
                        activeTab: a.Tier1,
                        currentPurchasePrice: n.props.subscriptionProducts[0].price,
                        subbedTier: null
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.setMessages(this.props), this.mapSubbedTierToTabs(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.setMessages(e)
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    this.state.subbedTier && (e = s.createElement(f.U, {
                        display: f.H.InlineFlex,
                        margin: {
                            right: .5
                        },
                        className: "subscription-balloon-options__subbed-star"
                    }, s.createElement(f._8, {
                        asset: f._9.Star
                    })));
                    var t = s.createElement(f._21, null),
                        n = null,
                        r = null,
                        c = null,
                        u = s.createElement(f.U, {
                            display: f.H.InlineFlex
                        }, this.state.subbedTier === a.Tier3 && e, s.createElement(f._18, {
                            active: this.state.activeTab === a.Tier3,
                            "data-a-target": i(a.Tier3),
                            onClick: this.toggleActiveTab
                        }, this.messages.tier3TabName));
                    this.hasDiscount(this.props) && this.state.activeTab !== a.Prime && (t = s.createElement(f.U, null, s.createElement(f._21, {
                        className: "tw-subscription-modal__old-price"
                    }, s.createElement("s", null, Object(b.a)(this.props.subscriptionProducts[this.state.activeTab - 1].self.oldPrice), " / Month")), s.createElement(f._21, {
                        className: "tw-subscription-modal__new-price",
                        type: f._26.H5,
                        bold: !0
                    }, Object(b.a)(this.props.subscriptionProducts[this.state.activeTab - 1].self.newPrice), " for the first month (Save 50%)"))), this.props.subbedTier !== l.a.Prime || this.props.isGift || (n = s.createElement(f.U, {
                        display: f.H.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, s.createElement(f.U, {
                        display: f.H.InlineFlex,
                        margin: {
                            right: 1
                        },
                        className: "subscription-balloon-options__prime-crown"
                    }, s.createElement(f._8, {
                        asset: f._9.Crown
                    })), s.createElement(f._18, {
                        active: this.state.activeTab === a.Prime,
                        "data-a-target": i(a.Prime),
                        onClick: this.toggleActiveTab
                    }, this.messages.prime))), this.props.subbedTier && this.props.subbedTier !== l.a.Tier1 || (r = s.createElement(f.U, {
                        display: f.H.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === a.Tier1 && e, s.createElement(f._18, {
                        active: this.state.activeTab === a.Tier1,
                        "data-a-target": i(a.Tier1),
                        onClick: this.toggleActiveTab
                    }, this.messages.tier1TabName))), this.props.subbedTier && this.props.subbedTier !== l.a.Prime && this.props.subbedTier !== l.a.Tier1 && this.props.subbedTier !== l.a.Tier2 || (c = s.createElement(f.U, {
                        display: f.H.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === a.Tier2 && e, s.createElement(f._18, {
                        active: this.state.activeTab === a.Tier2,
                        "data-a-target": i(a.Tier2),
                        onClick: this.toggleActiveTab
                    }, this.messages.tier2TabName)));
                    var d = null;
                    return (this.messages.tier2EmoteCount > 0 && this.state.activeTab === a.Tier2 || this.messages.tier3EmoteCount > 0 && this.state.activeTab === a.Tier3) && (d = s.createElement(f.U, {
                        display: f.H.InlineFlex,
                        alignItems: f.c.Center
                    }, this.getExtraEmotes(this.state.activeTab), s.createElement(f._21, {
                        bold: !0
                    }, Object(o.d)("Plus {extraEmoteCount, number} extra channel emote(s)", {
                        extraEmoteCount: this.state.activeTab === a.Tier2 ? this.messages.tier2EmoteCount : this.messages.tier3EmoteCount
                    }, "SubTierTabs")))), s.createElement(f.U, {
                        className: "channel-header__subscription-balloon-options"
                    }, s.createElement(f.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(f._19, null, n, r, c, u)), s.createElement(f.U, null, s.createElement(f.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(f._21, {
                        type: f._26.H5,
                        bold: !0
                    }, this.getTabTitle())), s.createElement(f.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(f._21, null, this.messages.subTierBenefits)), d, t, s.createElement(f.U, {
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, this.getTierSubscribeButton())))
                }, t.prototype.setMessages = function(e) {
                    var t = e.subscriptionProducts[1].emotes.length,
                        n = t + e.subscriptionProducts[2].emotes.length;
                    this.messages = {
                        tier2EmoteCount: t,
                        tier3EmoteCount: n,
                        prime: Object(o.d)("Prime", "SubTierTabs"),
                        subscribed: Object(o.d)("Subscribed", "SubTierTabs"),
                        subTierBenefits: Object(o.d)("Includes {availableEmoteCount, number} emoticon(s), subscriber badge, customizable messages upon subscribing, and ad-free viewing", {
                            availableEmoteCount: e.subscriptionProducts[0].emotes.length
                        }, "SubTierTabs"),
                        tier1Price: e.subscriptionProducts[0].price,
                        tier2Price: e.subscriptionProducts[1].price,
                        tier3Price: e.subscriptionProducts[2].price,
                        tier1TabName: e.subscriptionProducts[0].price,
                        tier2TabName: e.subscriptionProducts[1].price,
                        tier3TabName: e.subscriptionProducts[2].price,
                        subscribeNow: Object(o.d)("Subscribe Now", "SubTierTabs"),
                        freeSubWithPrime: Object(o.d)("Free Channel Sub with Twitch Prime", "SubTierTabs"),
                        giftSubscription: Object(o.d)("Gift A Subscription", "SubTierTabs"),
                        tier1Sub: e.subscriptionProducts[0].displayName,
                        tier2Sub: e.subscriptionProducts[1].displayName,
                        tier3Sub: e.subscriptionProducts[2].displayName
                    }, this.hasDiscount(e) && (this.messages.tier1Price = Object(b.a)(e.subscriptionProducts[0].self.newPrice), this.messages.tier2Price = Object(b.a)(e.subscriptionProducts[1].self.newPrice), this.messages.tier3Price = Object(b.a)(e.subscriptionProducts[2].self.newPrice))
                }, t.prototype.isSubscriptionDiscountReady = function(e) {
                    return void 0 !== e.subscriptionProducts[0].self
                }, t.prototype.hasDiscount = function(e) {
                    return !!this.isSubscriptionDiscountReady(e) && Object(b.b)(e.subscriptionProducts)
                }, t = r.__decorate([Object(d.c)("SubTierTabs")], t)
            }(s.Component),
            y = k;
        n.d(t, !1, function() {
            return v
        }), n.d(t, !1, function() {
            return S
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, !1, function() {
            return i
        }), n.d(t, "a", function() {
            return y
        })
    },
    925: function(e, t, n) {
        "use strict";
        var i, a = n(4),
            r = n(1),
            s = n(404),
            o = n(407),
            l = n(405),
            c = n(3);
        n(994);
        ! function(e) {
            e[e.Normal = 0] = "Normal", e[e.Small = 1] = "Small", e[e.Medium = 2] = "Medium", e[e.ExtraSmall = 3] = "ExtraSmall"
        }(i || (i = {}));
        var u;
        ! function(e) {
            e[e.ImageAndText = 0] = "ImageAndText", e[e.ImageOnly = 1] = "ImageOnly", e[e.TextOnly = 2] = "TextOnly", e[e.InlineTextOnly = 3] = "InlineTextOnly", e[e.Inline = 4] = "Inline"
        }(u || (u = {}));
        var d = function(e) {
            var t = e.bitsConfig.indexedActions[e.prefix.toLowerCase()];
            t || (t = Object(o.b)());
            var n = t.orderedTiers.find(function(t) {
                return t.bits <= (e.amount || 100)
            });
            n || (n = t.orderedTiers[0]);
            var d = null,
                p = a("cheermote-for-amount__cheer-amount", {
                    "cheermote-for-amount__cheer-amount--small": e.size === i.Small || e.size === i.ExtraSmall
                }, {
                    "cheermote-for-amount__cheer-amount--medium": e.size === i.Medium
                }, {
                    "cheermote-for-amount__display--table-cell": e.display !== u.InlineTextOnly && e.display !== u.Inline
                });
            e.amount && e.display !== u.ImageOnly && (d = r.createElement(c.P, {
                padding: e.size === i.Small ? 0 : void 0,
                textAlign: e.size === i.Small ? c._22.Center : void 0
            }, r.createElement("strong", {
                className: p,
                style: {
                    color: n.color
                }
            }, e.amount)));
            var m = a("cheermote-for-amount__cheer-image", {
                    "cheermote-for-amount__cheer-image--inline": e.display === u.Inline
                }, {
                    "cheermote-for-amount__cheer-image--small": e.size === i.Small
                }, {
                    "cheermote-for-amount__cheer-image--extra-small": e.size === i.ExtraSmall
                }, {
                    "cheermote-for-amount__display--table-cell": e.display !== u.InlineTextOnly && e.display !== u.Inline && e.size !== i.Small
                }),
                h = r.createElement(l.a, {
                    className: m,
                    sources: Object(s.b)(n, 4, e.animated)
                });
            return e.display !== u.TextOnly && e.display !== u.InlineTextOnly || (h = null), e.display === u.InlineTextOnly || e.display === u.Inline ? r.createElement(c.U, {
                className: "cheermote-for-amount",
                display: c.H.Inline
            }, h, d) : r.createElement(c.U, {
                className: "cheermote-for-amount"
            }, h, d)
        };
        n.d(t, "a", function() {
            return d
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return u
        })
    },
    926: function(e, t, n) {
        "use strict";

        function i(e) {
            if (e) {
                var t = e.map(function(e) {
                    return e.id
                });
                return s().filter(function(e) {
                    return t.includes(e.canonical)
                })
            }
            return s()
        }
        var a = function(e, t) {
                return 'community report (<a href="{link}">{link}</a>) {description}'.replace(/{link}/g, "https://www.twitch.tv/communities/{communityName}".replace("{communityName}", e)).replace(/{description}/, t)
            },
            r = n(2),
            s = function() {
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
            return k
        });
        var a = n(0),
            r = n(1),
            s = (n.n(r), n(8)),
            o = n(11),
            l = n(2),
            c = n(9),
            u = n(23),
            d = n(14),
            p = n(6),
            m = n(921),
            h = n(919),
            b = n(926),
            g = n(921),
            f = n(947),
            v = (n.n(f), n(948)),
            S = (n.n(v), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        submitStatus: g.b.Unsubmitted
                    }, t.handleSubmit = function(e, n, i, r) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, s, t, o;
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
                                        return a.trys.push([1, 3, , 4]), [4, this.props.reportUserInCommunity(Object(u.a)(t))];
                                    case 2:
                                        return a.sent(), l.n.tracking.track(d.SpadeEventType.CommunityModeration, {
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
                                        return s = a.sent(), l.i.error(s, "ReportUserInCommunity Mutation failed."), this.setState({
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
                                        }, this.props.reportContext.contentType === h.a.Community && this.props.reportContext.extra && (t.description = Object(b.a)(this.props.reportContext.extra, n)), a.label = 6;
                                    case 6:
                                        return a.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(u.a)(t))];
                                    case 7:
                                        return a.sent(), this.props.reportContext.contentType === h.a.Community && l.n.tracking.track(d.SpadeEventType.CommunityReport, {
                                            community_id: this.props.reportContext.contentID,
                                            name: this.props.reportContext.extra,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            reason: e
                                        }), this.setState({
                                            submitStatus: g.b.Success
                                        }), [3, 9];
                                    case 8:
                                        return o = a.sent(), l.i.error(o, "ReportUser Mutation failed."), this.setState({
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
            k = Object(o.compose)(Object(c.a)(f, {
                name: "reportUserInCommunity"
            }), Object(c.a)(v, {
                name: "reportUser"
            }), Object(p.c)("ReportUser"), Object(s.a)(i, null))(S)
    },
    928: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(l.bindActionCreators)({
                closeModal: u.c
            }, e)
        }
        var a = n(927),
            r = n(0),
            s = n(1),
            o = n(8),
            l = n(11),
            c = n(134),
            u = n(50),
            d = n(6),
            p = n(3),
            m = (n(953), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClose = function(e) {
                        t.props.closeModal(), t.props.onClose && t.props.onClose(e)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(p._17, {
                        className: "reporting-modal__container",
                        background: p.m.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, s.createElement(a.a, {
                        onClose: this.handleClose,
                        reportContext: this.props.reportContext,
                        title: this.props.title,
                        defaultDescription: this.props.defaultDescription
                    }), s.createElement(c.a, null))
                }, t
            }(s.Component)),
            h = Object(l.compose)(Object(d.c)("ReportUserModal"), Object(o.a)(null, i))(m);
        n.d(t, !1, function() {}), n.d(t, !1, function() {
            return a.a
        }), n.d(t, !1, function() {
            return m
        }), n.d(t, "a", function() {
            return h
        })
    },
    934: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                authToken: Object(o.a)(e)
            }
        }
        var a = n(0),
            r = n(1),
            s = n(8),
            o = n(19),
            l = n(6),
            c = n(935),
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.reportInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(c.b, {
                        authToken: this.props.authToken,
                        hostChannelID: this.props.hostChannelID,
                        hostChannelLogin: this.props.hostChannelLogin,
                        channelLogin: this.props.channelLogin,
                        updateContainerWidth: this.props.updateContainerWidth,
                        reportInteractive: this.reportInteractive
                    })
                }, t = a.__decorate([Object(l.c)("SubscribeButton")], t)
            }(r.Component),
            d = Object(s.a)(i)(u);
        n.d(t, !1, function() {
            return u
        }), n.d(t, "b", function() {
            return d
        }), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return c.a
        }), n.d(t, !1, function() {
            return c.b
        })
    },
    935: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = new Map;
            return t.set(F.b.Prime, null), e.forEach(function(e, n) {
                t.set(n + 1, e)
            }), t
        }
        var a, r = n(0),
            s = n(1),
            o = n(2),
            l = n(64),
            c = n(9),
            u = n(109),
            d = n(936),
            p = n(142),
            m = n(23),
            h = n(36),
            b = n(20),
            g = n(6),
            f = n(65),
            v = n(89),
            S = n(139),
            k = n(409),
            y = n(30),
            _ = n(52),
            E = n(136),
            T = n(957),
            N = n(269),
            C = n(3),
            w = (n(972), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedUser: null
                    }, t.messages = {
                        noResults: Object(o.d)("No Results", "GiftRecipientSearchResult"),
                        buyGift: Object(o.d)("Buy Gift Subscription", "GiftRecipientSearchResult"),
                        searchHint: Object(o.d)("Start typing to see a list of suggestions here.", "GiftRecipientSearchResult")
                    }, t.reportGiftCheckoutAction = function() {
                        t.props.reportSubMenuAction({
                            action: N.a.BuyGiftSub,
                            checkoutButtonTier: t.props.selectedProductPrice,
                            giftRecipient: t.state.selectedUser ? t.state.selectedUser.login : null
                        })
                    }, t.onUserClick = function(e) {
                        for (var n = e.target; n.parentElement && !n.dataset.user_id;) n = n.parentElement;
                        n.dataset.user_id && n.dataset.user_login && n.dataset.user_name ? t.setState({
                            selectedUser: {
                                id: n.dataset.userId || "",
                                login: n.dataset.user_login || "",
                                name: n.dataset.user_name || ""
                            }
                        }) : t.setState({
                            selectedUser: null
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    (e.isWaiting || e.isErrored || !e.hasInput) && this.setState({
                        selectedUser: null
                    })
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.isWaiting ? s.createElement(C.U, {
                        fullHeight: !0
                    }, s.createElement(C.X, {
                        fillContent: !0
                    })) : this.props.hasInput ? this.props.isErrored ? this.getErrorMessage() : this.props.userResults && this.props.userResults.totalHits > 0 ? this.getUserResultContent() : this.getNoResultsMessage() : s.createElement(C.U, {
                        margin: 1
                    }, s.createElement(C._21, {
                        color: C.F.Alt2
                    }, this.messages.searchHint)), s.createElement("div", {
                        onKeyDown: this.props.onKeyDown
                    }, s.createElement(C._17, {
                        className: "gift-recipient-search-result-view",
                        background: C.m.Alt,
                        position: C._2.Relative,
                        overflow: C.Y.Hidden,
                        display: C.H.Block,
                        margin: {
                            bottom: 2
                        },
                        borderLeft: !0,
                        borderBottom: !0,
                        borderRight: !0
                    }, s.createElement(C.P, {
                        overflow: C.Y.Hidden,
                        position: C._2.Relative
                    }, s.createElement(y.b, {
                        suppressScrollX: !0
                    }, s.createElement(C.U, null, e, s.createElement(y.a, {
                        enabled: !this.props.isWaiting && this.props.hasInput,
                        loadMore: this.props.loadMore
                    }))))), this.getBuyGiftButton())
                }, t.prototype.getBuyGiftButton = function() {
                    var e = Object(E.a)(this.props.selectedProductURL, {
                            recipient: this.state.selectedUser ? this.state.selectedUser.login : ""
                        }),
                        t = s.createElement(T.a, {
                            subProductId: this.props.selectedProductId,
                            giftRecipient: this.state.selectedUser ? this.state.selectedUser.login : null,
                            onClick: this.reportGiftCheckoutAction,
                            checkoutURL: e
                        }),
                        n = null;
                    if (this.state.selectedUser) {
                        var i = Object(_.a)(this.state.selectedUser.login || "", this.state.selectedUser.name || "");
                        n = s.createElement(C.P, {
                            margin: {
                                x: 1
                            }
                        }, s.createElement(C._21, null, Object(o.d)("for {displayName}", {
                            displayName: s.createElement(C._21, {
                                bold: !0,
                                type: C._26.Span
                            }, i)
                        }, "GiftRecipientSearchResult")))
                    }
                    return s.createElement(C.U, {
                        display: C.H.Flex,
                        alignItems: C.c.Center,
                        fullWidth: !0
                    }, t, n)
                }, t.prototype.getErrorMessage = function() {
                    return s.createElement(C.U, {
                        fullWidth: !0,
                        textAlign: C._22.Center,
                        justifyContent: C.T.Center
                    }, s.createElement(C._21, null, Object(o.d)("Something went wrong", "GiftRecipientSearchResult")))
                }, t.prototype.getUserResultContent = function() {
                    var e = this;
                    return this.props.userResults ? this.props.userResults.results.map(function(t) {
                        var n = Object(_.a)(t.login || "", t.name || "");
                        return s.createElement(C.S, {
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: "git-recipient-result__" + t.id,
                            "data-user_id": t.id,
                            "data-user_login": t.login,
                            "data-user_name": t.name,
                            onClick: e.onUserClick,
                            "data-test-selector": "subscribe-button__gift_search_result"
                        }, s.createElement(C.U, {
                            padding: .5
                        }, s.createElement(C.A, {
                            row: !0
                        }, s.createElement(C.C, {
                            imageAlt: t.thumbnailAltText,
                            imageSrc: t.thumbnail ? t.thumbnail : "",
                            size: C.D.Size4,
                            aspect: C.k.Aspect1x1
                        }), s.createElement(C.B, null, s.createElement(C.P, {
                            padding: {
                                x: 1
                            }
                        }, s.createElement(C._21, {
                            type: C._26.H5,
                            ellipsis: !0
                        }, n))))))
                    }) : s.createElement(C._1, null)
                }, t.prototype.getNoResultsMessage = function() {
                    return s.createElement(C.U, {
                        margin: 1
                    }, s.createElement(C._21, {
                        color: C.F.Alt2
                    }, this.messages.noResults))
                }, t = r.__decorate([Object(g.c)("GiftRecipientSearchResultPanel")], t)
            }(s.Component)),
            P = w,
            U = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.selectedSubProduct ? (this.formatMessages(), s.createElement(C.U, {
                        padding: 2
                    }, s.createElement(C.U, null, s.createElement(C.U, {
                        display: C.H.Flex,
                        justifyContent: C.T.Between,
                        alignItems: C.c.Center,
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.giftSubscription), s.createElement(C.u, {
                        type: C.z.Text,
                        "data-a-target": "subscribe-back-button",
                        icon: C._9.AngleLeft,
                        onClick: this.props.onBack
                    }, s.createElement(C.U, {
                        alignItems: C.c.Center,
                        display: C.H.InlineFlex
                    }, s.createElement(C._21, null, this.messages.back)))), s.createElement(C.U, null, s.createElement(C._21, null, this.messages.giftSingleMonth), s.createElement(C.U, {
                        display: C.H.Flex,
                        justifyContent: C.T.Center,
                        fullWidth: !0
                    }, s.createElement(C.P, {
                        fullWidth: !0
                    }, s.createElement("div", null, s.createElement(C._11, {
                        onChange: this.handleChange,
                        onKeyDown: this.props.onKeyDown,
                        id: "gift-recipient-search",
                        placeholder: this.messages.searchPlaceholder
                    }), s.createElement(P, {
                        hasInput: this.props.hasInput,
                        userResults: this.props.userResults,
                        isErrored: this.props.isErrored,
                        isWaiting: this.props.isWaiting,
                        loadMore: this.props.loadMore,
                        onKeyDown: this.props.onKeyDown,
                        selectedProductId: this.props.selectedSubProduct.id,
                        selectedProductURL: this.props.selectedSubProduct.url,
                        selectedProductPrice: this.props.selectedSubProduct.price,
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })))))))) : s.createElement(C._1, null)
                }, t.prototype.formatMessages = function() {
                    this.messages = {
                        giftSubscription: Object(o.d)("Choose a Gift Recipient", "GiftRecipientSearch"),
                        giftSingleMonth: Object(o.d)("{subDisplayName}: {giftPrice} Gift Subscription (Single Month)", {
                            subDisplayName: this.props.selectedSubProduct ? this.props.selectedSubProduct.displayName : "",
                            giftPrice: this.props.selectedSubProduct ? this.props.selectedSubProduct.price : ""
                        }, "GiftRecipientSearch"),
                        back: Object(o.d)("Back", "GiftRecipientSearch"),
                        searchPlaceholder: Object(o.d)("Search for a Twitch ID", "GiftRecipientSearch")
                    }
                }, t
            }(s.Component),
            O = 50,
            A = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onChange = function(e) {
                        if (t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), !e) return void t.setState(t.getEmptyState());
                        t.setState({
                            isWaiting: !0
                        }), t.inputTimer = setTimeout(function() {
                            return t.doSearch(e)
                        }, O)
                    }, t.loadMore = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(v.a.Users, this.state.term, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = a.sent(), [3, 4];
                                    case 3:
                                        return n = a.sent(), this.setState(r.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0
                                        })), [2];
                                    case 4:
                                        return t ? (i = Object(k.b)({
                                            searchResults: t,
                                            append: e > 0,
                                            currentUserResults: this.state.currentUserResults
                                        }), this.setState({
                                            currentUserResults: i.currentUserResults,
                                            term: this.state.term,
                                            hasInput: !0,
                                            isWaiting: !1,
                                            currentPage: e,
                                            exhaustedHits: i.exhaustedHits
                                        }), [2]) : (this.setState(r.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0
                                        })), [2])
                                }
                            })
                        })
                    }, t.onKeyDown = function(e) {
                        t.state.term && (e.keyCode === f.a.Esc ? t.setState({
                            hasInput: !1
                        }) : e.keyCode === f.a.Up ? t.focusNext(-1) : e.keyCode === f.a.Down && t.focusNext(1))
                    }, t.state = t.getEmptyState(), t.searchClient = new S.a(o.a.algoliaApplicationID, o.a.algoliaAPIKey), t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(U, {
                        onChange: this.onChange,
                        loadMore: this.loadMore,
                        onKeyDown: this.onKeyDown,
                        userResults: this.state.currentUserResults,
                        hasInput: this.state.hasInput,
                        isErrored: this.state.isErrored,
                        isWaiting: this.state.isWaiting,
                        onBack: this.props.onBack,
                        selectedSubProduct: this.props.selectedSubProduct,
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })
                }, t.prototype.getEmptyState = function() {
                    return {
                        currentUserResults: {
                            totalHits: 0,
                            results: []
                        },
                        term: "",
                        hasInput: !1,
                        isErrored: !1,
                        queryID: "",
                        isWaiting: !1,
                        currentPage: -1,
                        focusSelectable: !1,
                        exhaustedHits: !1
                    }
                }, t.prototype.doSearch = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, a, s, o;
                        return r.__generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, n = b.a(), i = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !i && !!this.state.currentFocus
                                    }), l.label = 1;
                                case 1:
                                    return l.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(v.a.Users, e, n)];
                                case 2:
                                    return a = l.sent(), [3, 4];
                                case 3:
                                    return s = l.sent(), this.setState(r.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        hasInput: !0,
                                        term: e
                                    })), [2];
                                case 4:
                                    return a ? this.state.queryID !== a.id ? [2] : (o = Object(k.b)({
                                        searchResults: a,
                                        append: !1
                                    }), this.setState(function(n) {
                                        return r.__assign({}, n, o, {
                                            queryID: "",
                                            term: e,
                                            hasInput: !0,
                                            isWaiting: !1,
                                            currentPage: t
                                        })
                                    }), [2]) : (this.setState(r.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        hasInput: !0,
                                        term: e
                                    })), [2])
                            }
                        })
                    })
                }, t.prototype.focusNext = function(e) {
                    var t, n = document.querySelectorAll("[data-ts_selectable=true]"),
                        i = document.activeElement,
                        a = Array.prototype.indexOf.call(n, i);
                    if (t = a < 0 ? e > 0 ? 0 : n.length - 1 : a + e, t < 0 && (t = 0), !(t >= n.length)) {
                        var r = n.item(t);
                        r.focus(), r.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: r
                        })
                    }
                }, t = r.__decorate([Object(g.c)("GiftRecipientSearch")], t)
            }(s.Component),
            I = A,
            D = n(940),
            F = n(923),
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.setMessages()
                }, t.prototype.render = function() {
                    return s.createElement(C.U, {
                        padding: 2
                    }, s.createElement(C.U, null, s.createElement(C.U, {
                        display: C.H.Flex,
                        justifyContent: C.T.Between,
                        alignItems: C.c.Center,
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.allSubscriptions), s.createElement(C.u, {
                        type: C.z.Text,
                        "data-a-target": "subscribe-back-button",
                        "data-test-selector": "subscribe-button__back-button",
                        icon: C._9.AngleLeft,
                        onClick: this.props.onBack
                    }, s.createElement(C.U, {
                        alignItems: C.c.Center,
                        display: C.H.InlineFlex
                    }, s.createElement(C._21, null, this.messages.back)))), s.createElement(F.a, {
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.props.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        userHasPrime: !1,
                        canPrimeSubscribe: !1,
                        isSubscribed: this.props.isSubscribed
                    })))
                }, t.prototype.setMessages = function() {
                    this.messages = {
                        back: Object(o.d)("Back", "PaidSubOptions"),
                        allSubscriptions: Object(o.d)("All Paid Subscriptions", "PaidSubOptions")
                    }
                }, t
            }(s.Component),
            B = x,
            R = n(934),
            j = n(952);
        ! function(e) {
            e[e.Top = 0] = "Top", e[e.SubOptions = 1] = "SubOptions", e[e.GiftOptions = 2] = "GiftOptions", e[e.RecipientSelect = 3] = "RecipientSelect"
        }(a || (a = {}));
        var L = n(937),
            M = n(974),
            H = (n(975), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleTopPageSubButtonClick = function() {
                        n.props.reportSubMenuAction({
                            action: N.a.ClickCheckout,
                            checkoutButtonTier: n.messages.tier1Price
                        })
                    }, n.showGiftOptions = function() {
                        n.props.reportSubMenuAction({
                            action: N.a.ClickGiftSubOptions,
                            modalLevel: "second_page"
                        }), n.setState(function() {
                            return {
                                currentPage: a.GiftOptions
                            }
                        })
                    }, n.showSubOptions = function() {
                        n.props.reportSubMenuAction({
                            action: N.a.ClickMoreSubOptions,
                            modalLevel: "second_page"
                        }), n.setState(function() {
                            return {
                                currentPage: a.SubOptions
                            }
                        })
                    }, n.showRecipientSelect = function() {
                        n.setState(function() {
                            return {
                                currentPage: a.RecipientSelect
                            }
                        })
                    }, n.showTop = function() {
                        n.setState(function() {
                            return {
                                currentPage: a.Top
                            }
                        })
                    }, n.goToPreviousPage = function() {
                        return n.props.reportSubMenuAction({
                            action: N.a.ClickBack,
                            modalLevel: n.state.currentPage === a.SubOptions || n.state.currentPage === a.GiftOptions ? "top_page" : "second_page"
                        }), n.state.currentPage === a.SubOptions || n.state.currentPage === a.GiftOptions ? void n.showTop() : n.state.currentPage === a.RecipientSelect ? void n.showGiftOptions() : void 0
                    }, n.onSelectTierTab = function(e) {
                        var t = n.tabToSubProduct.get(e);
                        if (t) {
                            var i = n.props.subscriptionProducts.findIndex(function(e) {
                                return e.price === t.price
                            });
                            i !== n.state.selectedSubProductIndex && n.setState({
                                selectedSubProductIndex: i
                            }), n.props.onSelectTierTab(t.price)
                        } else n.props.onSelectTierTab(R.a)
                    }, n.state = {
                        currentPage: a.Top,
                        selectedSubProductIndex: 0,
                        giftingEnabled: !1
                    }, n.tabToSubProduct = i(t.subscriptionProducts), n
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (!this.isSubscriptionDiscountReady(e) && this.isDiscountDataReady(e)) {
                        if (e.data.error) return;
                        var t = Object.assign({}, e.data.user.subscriptionProducts);
                        this.props.setPromotionData(t)
                    }
                }, t.prototype.render = function() {
                    return this.setMessages(), this.state.currentPage === a.Top ? this.getTopPage() : this.state.currentPage === a.SubOptions ? this.getPaidOptionsPage() : this.state.currentPage === a.GiftOptions ? this.getGiftOptionsPage() : this.state.currentPage === a.RecipientSelect ? this.getGiftRecipientSearchPage() : this.getTopPage()
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, o.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        giftingEnabled: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.getPaidOptionsPage = function() {
                    return s.createElement(B, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        isSubscribed: !1,
                        hasDiscount: this.hasDiscount(this.props)
                    })
                }, t.prototype.getGiftOptionsPage = function() {
                    return s.createElement(C.U, {
                        padding: 2
                    }, s.createElement(D.a, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        onGiftSelect: this.showRecipientSelect
                    }))
                }, t.prototype.getGiftRecipientSearchPage = function() {
                    return s.createElement(I, {
                        onBack: this.goToPreviousPage,
                        selectedSubProduct: this.props.subscriptionProducts[this.state.selectedSubProductIndex],
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })
                }, t.prototype.getTopPage = function() {
                    var e = null,
                        t = null,
                        n = null,
                        i = s.createElement(C._21, null, this.messages.tier1PricePerMonth),
                        a = this.messages.tier1Price;
                    return this.hasDiscount(this.props) && (i = s.createElement(C.U, null, s.createElement(C._21, {
                        className: "tw-subscription-modal__old-price"
                    }, s.createElement("s", null, this.messages.tier1PricePerMonth)), s.createElement(C._21, {
                        className: "tw-subscription-modal__new-price",
                        type: C._26.H5,
                        bold: !0
                    }, this.messages.discountMessage, " ")), a = Object(L.a)(this.props.subscriptionProducts[0].self.newPrice)), (this.props.inPrimeRegion || this.props.userHasPrime) && (n = this.renderPrimeSection()), this.props.isNonStandardSub || (e = s.createElement(C.U, {
                        margin: {
                            right: 1
                        },
                        display: C.H.Inline
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.seeMoreSubOptions,
                        onClick: this.showSubOptions,
                        type: C.z.Hollow,
                        "data-test-selector": "subscribe-button__more-sub-options-button",
                        "data-a-target": "see-more-sub-options-button"
                    }, this.messages.seeMoreSubOptions))), this.state.giftingEnabled && (t = s.createElement(C.U, {
                        display: C.H.Inline
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.giftSubscription,
                        onClick: this.showGiftOptions,
                        type: C.z.Hollow,
                        "data-test-selector": "subscribe-button__gift"
                    }, this.messages.giftSubscription))), s.createElement(C.U, {
                        padding: 2
                    }, n, s.createElement(C.U, null, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.paidSubscription), i, s.createElement(C.U, {
                        display: C.H.Flex
                    }, s.createElement(C.U, {
                        margin: {
                            right: 1,
                            top: 1
                        }
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.subscribeTier1,
                        "data-a-target": "tier1-subscribe-button",
                        "data-test-selector": "subscribe-button__top-page-sub-button",
                        linkTo: this.props.subscriptionProducts[0].url,
                        onClick: this.handleTopPageSubButtonClick,
                        purchase: a,
                        targetBlank: !0
                    }, this.messages.subscribe)))), s.createElement(C.U, {
                        margin: {
                            right: 1,
                            top: 2
                        }
                    }, e, t))
                }, t.prototype.renderPrimeSection = function() {
                    var e = this.props.userHasPrime ? this.messages.useFreeChannelSub : this.messages.primeUpsell;
                    return s.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(C.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.freeSubWithPrime)), s.createElement(C.U, null, s.createElement(C.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(C._21, null, e)), s.createElement(j.a, {
                        authToken: this.props.authToken,
                        "data-a-target": "subscribe-with-prime-button",
                        isSubscribed: !1,
                        isSubscribedWithPrime: !1,
                        onSubscribedWithPrime: this.props.onSubscribedWithPrime,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subLogin: this.props.subLogin,
                        userHasPrime: this.props.userHasPrime,
                        canPrimeSubscribe: this.props.canPrimeSubscribe
                    })))
                }, t.prototype.setMessages = function() {
                    var e = this.props.subscriptionProducts[0].price;
                    this.hasDiscount(this.props) && this.props.subscriptionProducts[0].self.isEligibleForDiscount && (e = Object(L.a)(this.props.subscriptionProducts[0].self.newPrice)), this.messages = {
                        useFreeChannelSub: Object(o.d)("Use your free channel subscription to directly support your favorite streamer. {upsellTextLink}", {
                            upsellTextLink: s.createElement("a", {
                                href: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                                target: "_blank"
                            }, Object(o.d)("Learn more about your free sub", "BalloonNonSubbedUser"))
                        }, "BalloonNonSubbedUser"),
                        primeUpsell: Object(o.d)("{upsellTextBold}, plus get free game loot every month, ad-free viewing, and loads more with Twitch Prime.", {
                            upsellTextBold: s.createElement("strong", null, Object(o.d)("Support your favorite streamer", "BalloonNonSubbedUser"))
                        }, "BalloonNonSubbedUser"),
                        freeSubWithPrime: Object(o.d)("Free Channel Sub with Twitch Prime", "BalloonNonSubbedUser"),
                        changeSubscription: Object(o.d)("Change Your Subscription", "BalloonNonSubbedUser"),
                        seeMoreSubOptions: Object(o.d)("More Paid Subscription Options", "BalloonNonSubbedUser"),
                        tier1Price: Object(o.d)("{tier1Price}", {
                            tier1Price: e
                        }, "BalloonNonSubbedUser"),
                        paidSubscription: Object(o.d)("Paid Subscription", "BalloonNonSubbedUser"),
                        tier1PricePerMonth: Object(o.d)("{price} / Month", {
                            price: this.props.subscriptionProducts[0].price
                        }, "BalloonNonSubbedUser"),
                        subscribeTier1: Object(o.d)("Subscribe {tier1Price}", {
                            tier1Price: e
                        }, "BalloonNonSubbedUser"),
                        subscribeToUser: Object(o.d)("Subscribe to {username}", {
                            username: this.props.channelDisplayName
                        }, "BalloonNonSubbedUser"),
                        subscribe: Object(o.d)("Subscribe", "BalloonNonSubbedUser"),
                        back: Object(o.d)("Back", "BalloonNonSubbedUser"),
                        allSubscriptions: Object(o.d)("All Paid Subscriptions", "BalloonNonSubbedUser"),
                        chooseGiftSubscription: Object(o.d)("Choose A Gift Subscription", "BalloonNonSubbedUser"),
                        discountMessage: Object(o.d)("{price} for the first month (Save 50%)", {
                            price: e
                        }, "BalloonNonSubbedUser"),
                        giftSubscription: Object(o.d)("Gift a Subscription", "BalloonNonSubbedUser"),
                        giftDiscountDisclaimer: Object(o.d)("Promotions do not apply to Gift Subscriptions", "BalloonNonSubbedUser")
                    }
                }, t.prototype.isDiscountDataReady = function(e) {
                    return e.data.user && e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0 && e.data.user.subscriptionProducts[0] && e.data.user.subscriptionProducts[0].self && void 0 !== e.data.user.subscriptionProducts[0].self.isEligibleForDiscount
                }, t.prototype.isSubscriptionDiscountReady = function(e) {
                    return void 0 !== e.subscriptionProducts[0].self
                }, t.prototype.hasDiscount = function(e) {
                    return !!this.isDiscountDataReady(e) && Object(L.b)(e.subscriptionProducts)
                }, t = r.__decorate([Object(c.a)(M, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(g.c)("BalloonNonSubbedUser")], t)
            }(s.Component)),
            G = H,
            W = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.showTop = function() {
                        n.setState(function() {
                            return {
                                currentPage: a.Top
                            }
                        })
                    }, n.showRecipientSelect = function() {
                        n.setState(function() {
                            return {
                                currentPage: a.RecipientSelect
                            }
                        })
                    }, n.showGiftOptions = function() {
                        n.props.reportSubMenuAction({
                            action: N.a.ClickGiftSubOptions
                        }), n.setState(function() {
                            return {
                                currentPage: a.GiftOptions
                            }
                        })
                    }, n.showSubOptions = function() {
                        n.setState(function() {
                            return {
                                currentPage: a.SubOptions
                            }
                        })
                    }, n.goToPreviousPage = function() {
                        return n.state.currentPage === a.GiftOptions || n.state.currentPage === a.SubOptions || n.state.giftShortcut ? (n.showTop(), void n.setState({
                            giftShortcut: !1
                        })) : n.state.currentPage === a.RecipientSelect ? void n.showGiftOptions() : void 0
                    }, n.onGiftSelect = function() {
                        n.props.reportSubMenuAction({
                            action: N.a.GiftASub,
                            checkoutButtonTier: n.props.subscriptionProducts[0].price
                        }), n.setState({
                            selectedSubProductIndex: 0,
                            giftShortcut: !0
                        }), n.showRecipientSelect()
                    }, n.handleTopPageSubButtonClick = function() {
                        n.props.reportSubMenuAction({
                            action: N.a.ClickCheckout,
                            checkoutButtonTier: n.props.subscriptionProducts[0].price
                        })
                    }, n.onSelectTierTab = function(e) {
                        var t = n.tabToSubProduct.get(e);
                        if (t) {
                            var i = n.props.subscriptionProducts.findIndex(function(e) {
                                return e.price === t.price
                            });
                            i !== n.state.selectedSubProductIndex && n.setState({
                                selectedSubProductIndex: i
                            }), n.props.onSelectTierTab(t.price)
                        } else n.props.onSelectTierTab(R.a)
                    }, n.state = {
                        currentPage: a.Top,
                        selectedSubProductIndex: 0,
                        giftShortcut: !1,
                        giftingEnabled: !1
                    }, n.tabToSubProduct = i(t.subscriptionProducts), n
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.setMessages(), this.state.currentPage === a.Top ? this.getTopPage() : this.state.currentPage === a.SubOptions ? this.getSubOptionsPage() : this.state.currentPage === a.GiftOptions ? this.getGiftOptionsPage() : this.state.currentPage === a.RecipientSelect ? this.getGiftRecipientSearchPage() : this.getTopPage()
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, o.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        giftingEnabled: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.getGiftRecipientSearchPage = function() {
                    return s.createElement(I, {
                        onBack: this.goToPreviousPage,
                        selectedSubProduct: this.props.subscriptionProducts[this.state.selectedSubProductIndex],
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })
                }, t.prototype.getGiftOptionsPage = function() {
                    return s.createElement(C.U, {
                        padding: 2
                    }, s.createElement(D.a, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        subscriptionProducts: this.props.subscriptionProducts,
                        onGiftSelect: this.showRecipientSelect,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction
                    }))
                }, t.prototype.getSubOptionsPage = function() {
                    return s.createElement(B, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        hasDiscount: !1,
                        isSubscribed: !0
                    })
                }, t.prototype.getTopPageGiftSection = function() {
                    return s.createElement(C.U, null, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.helpGrow), s.createElement(C.U, {
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: C.H.Flex
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.giftSubscription + " " + this.props.subscriptionProducts[0].price,
                        onClick: this.onGiftSelect,
                        purchase: this.props.subscriptionProducts[0].price
                    }, this.messages.giftSubscription), s.createElement(C.U, {
                        margin: {
                            left: 1
                        }
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.giftOptions,
                        onClick: this.showGiftOptions,
                        type: C.z.Hollow
                    }, this.messages.giftOptions))))
                }, t.prototype.getTopPageUpgradeSection = function() {
                    return s.createElement(C.U, null, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.upgradeSubscription), s.createElement(F.a, {
                        authToken: this.props.authToken,
                        onSubscribedWithPrime: this.props.onSubscribedWithPrime,
                        subLogin: this.props.subLogin,
                        userHasPrime: this.props.userHasPrime,
                        canPrimeSubscribe: this.props.canPrimeSubscribe,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        subbedTier: this.props.subbedTier,
                        subscriptionProducts: this.props.subscriptionProducts,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        onGiftSelect: this.showRecipientSelect,
                        isSubscribed: !0
                    }))
                }, t.prototype.getGiftInfoSection = function() {
                    var e, t, n = null;
                    return this.props.giftPaidUpgrade ? (e = this.messages.yourSubscription, t = this.messages.giftInfo, n = this.messages.giftUpgradeInfo) : (e = this.messages.yourGiftSub, t = this.messages.giftInfoWithExpiration), s.createElement(C.U, null, s.createElement(C._21, {
                        bold: !0,
                        type: C._26.H4
                    }, e), s.createElement(C.P, {
                        margin: {
                            y: 1
                        }
                    }, s.createElement(C._21, null, t)), n)
                }, t.prototype.getGiftExtendSection = function() {
                    var e = null,
                        t = null;
                    return this.props.isNonStandardSub || (e = s.createElement(C.U, {
                        margin: {
                            right: 1
                        },
                        display: C.H.Inline
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.seeMoreSubOptions,
                        onClick: this.showSubOptions,
                        type: C.z.Hollow,
                        "data-a-target": "see-more-sub-options-button"
                    }, this.messages.seeMoreSubOptions))), t = s.createElement(C.U, {
                        display: C.H.Inline
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.giftSubscription,
                        onClick: this.showGiftOptions,
                        type: C.z.Hollow
                    }, this.messages.giftSubscription)), s.createElement(C.U, null, s.createElement(C.U, {
                        margin: {
                            top: 1
                        }
                    }, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.extendSubscription), s.createElement(C.P, {
                        margin: {
                            top: 1
                        }
                    }, s.createElement(C._21, null, this.messages.tier1PricePerMonth)), s.createElement(C.U, {
                        margin: {
                            right: 1,
                            top: 1
                        }
                    }, s.createElement(C.u, {
                        ariaLabel: this.props.subscriptionProducts[0].price,
                        "data-a-target": "tier1-subscribe-button",
                        linkTo: this.props.subscriptionProducts[0].url,
                        onClick: this.handleTopPageSubButtonClick,
                        purchase: this.props.subscriptionProducts[0].price,
                        targetBlank: !0
                    }, this.messages.subscribe))), s.createElement(C.U, {
                        margin: {
                            right: 1,
                            top: 2
                        }
                    }, e, t))
                }, t.prototype.getTopPage = function() {
                    return this.state.giftingEnabled ? this.props.userHasGiftSub ? this.props.userHasGiftSub && !this.props.giftPaidUpgrade ? s.createElement(C.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, s.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getGiftExtendSection()) : s.createElement(C.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, s.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getTopPageGiftSection()) : s.createElement(C.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, s.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getTopPageGiftSection()), this.getTopPageUpgradeSection()) : s.createElement(C.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, this.getTopPageUpgradeSection())
                }, t.prototype.setMessages = function() {
                    switch (this.props.subbedTier) {
                        case d.a.Tier1:
                            this.props.subscriptionProducts[0].price;
                            break;
                        case d.a.Tier2:
                            this.props.subscriptionProducts[1].price;
                            break;
                        case d.a.Tier3:
                            this.props.subscriptionProducts[2].price;
                            break;
                        default:
                            this.props.subscriptionProducts[0].price
                    }
                    this.messages = {
                        upgradeSubscription: Object(o.d)("Upgrade Your Subscription", "BalloonSubbedUser"),
                        helpGrow: Object(o.d)("Help Grow {streamer}'s Community", {
                            streamer: this.props.channelDisplayName
                        }, "BalloonSubbedUser"),
                        giftSubscription: Object(o.d)("Gift A Subscription", "BalloonSubbedUser"),
                        giftOptions: Object(o.d)("More Gift Options", "BalloonSubbedUser"),
                        chooseGiftSubscription: Object(o.d)("Choose A Gift Subscription", "BalloonSubbedUser"),
                        back: Object(o.d)("Back", "BalloonSubbedUser"),
                        yourSubscription: Object(o.d)("Your Subscription", "BalloonSubbedUser"),
                        extendSubscription: Object(o.d)("Extend Your Subscription", "BalloonSubbedUser"),
                        yourGiftSub: Object(o.d)("Your Gift Subscription", "BalloonSubbedUser"),
                        seeMoreSubOptions: Object(o.d)("More Paid Subscription Options", "BalloonSubbedUser"),
                        subscribe: Object(o.d)("Subscribe", "BalloonSubbedUser"),
                        giftInfo: Object(o.d)("{giftPrice} Gift Subscription from {giftSender}", {
                            giftPrice: this.getCurrentSubPrice(),
                            giftSender: s.createElement(C._21, {
                                bold: !0,
                                type: C._26.Span
                            }, this.props.giftSender || "")
                        }, "BalloonSubbedUser"),
                        giftUpgradeInfo: Object(o.d)("Your new {upgradePrice} Paid Subscription will begin on {subStartDate}", {
                            upgradePrice: this.props.giftPaidUpgrade ? this.props.giftPaidUpgrade.price : "",
                            subStartDate: this.getFormattedGiftUpgradeStartDate()
                        }, "BalloonSubbedUser"),
                        giftInfoWithExpiration: Object(o.d)("{giftPrice} Subscription from {giftSender} - Benefits expire on {giftEndDate}", {
                            giftPrice: this.getCurrentSubPrice(),
                            giftSender: s.createElement(C._21, {
                                bold: !0,
                                type: C._26.Span
                            }, this.props.giftSender || ""),
                            giftEndDate: this.getFormattedGiftEndDate()
                        }, "BalloonSubbedUser"),
                        tier1PricePerMonth: Object(o.d)("{price} / Month", {
                            price: this.props.subscriptionProducts[0].price
                        }, "BalloonSubbedUser"),
                        allSubscriptions: Object(o.d)("All Paid Subscriptions", "BalloonSubbedUser")
                    }
                }, t.prototype.getFormattedGiftUpgradeStartDate = function() {
                    var e = "";
                    if (this.props.giftPaidUpgrade && this.props.giftPaidUpgrade.startsAt) try {
                        e = Object(o.c)(new Date(this.props.giftPaidUpgrade.startsAt), {
                            month: "long",
                            day: "numeric"
                        })
                    } catch (t) {
                        o.i.debug(t, "There was an error formatting gift upgrade start date."), e = ""
                    }
                    return e
                }, t.prototype.getFormattedGiftEndDate = function() {
                    var e = "";
                    if (this.props.giftSubEndDate) try {
                        e = Object(o.c)(new Date(this.props.giftSubEndDate), {
                            month: "long",
                            day: "numeric"
                        })
                    } catch (t) {
                        o.i.debug(t, "There was an error formatting gift end date."), e = ""
                    }
                    return e
                }, t.prototype.getCurrentSubPrice = function() {
                    switch (this.props.subbedTier) {
                        case "1000":
                            return this.props.subscriptionProducts[0].price;
                        case "2000":
                            return this.props.subscriptionProducts[1].price;
                        case "3000":
                            return this.props.subscriptionProducts[2].price;
                        default:
                            return this.props.subscriptionProducts[0].price
                    }
                }, t = r.__decorate([Object(g.c)("BalloonSubbedUser")], t)
            }(s.Component),
            V = W,
            z = (n(976), n(977));
        n.d(t, "a", function() {
            return q
        }), n.d(t, "b", function() {
            return $
        });
        var q = "prime",
            K = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isSubscribed: !1,
                        activeTierPrice: q,
                        subbedTier: null,
                        subData: null,
                        inPrimeRegion: !1,
                        isNonStandardSub: !1,
                        isGiftSub: !1,
                        hasReconciledUser: !1,
                        subGiftingEnabled: !1
                    }, t.modalLevel = "top_page", t.reportSubMenuAction = function(e) {
                        Object(N.b)({
                            action: e.action || "",
                            channelLogin: t.props.channelLogin || "",
                            channelID: t.props.data && t.props.data.user.id,
                            checkoutButtonTier: e.checkoutButtonTier || t.state.activeTierPrice.slice(),
                            hasSubCredit: !!t.props.data.user.self && t.props.data.user.self.canPrimeSubscribe,
                            hostChannelID: t.props.hostChannelID,
                            hostChannelLogin: t.props.hostChannelLogin,
                            isMenuOpen: !(e.action === N.a.OpenSubMenu),
                            sub_location: "channel_page",
                            modal: !t.state.isSubscribed,
                            modalLevel: t.state.isSubscribed ? "" : t.modalLevel.slice(),
                            showPrimeContent: t.state.inPrimeRegion,
                            giftRecipient: e.giftRecipient || null
                        }), !e.modalLevel || e.action !== N.a.ClickMoreSubOptions && e.action !== N.a.ClickBack || (t.modalLevel = e.modalLevel, t.setState({
                            activeTierPrice: q
                        }))
                    }, t.handleMenuToggle = function(e) {
                        t.reportSubMenuAction({
                            action: e ? N.a.CloseSubMenu : N.a.OpenSubMenu
                        })
                    }, t.onSelectTierTab = function(e) {
                        t.state.activeTierPrice !== e && t.setState({
                            activeTierPrice: e
                        })
                    }, t.onSubscribedWithPrime = function() {
                        t.reportSubMenuAction({
                            action: N.a.SubWithPrime
                        }), t.modalLevel = "", t.setState({
                            isSubscribed: !0,
                            subbedTier: d.a.Prime
                        }), Object(m.d)(z, {
                            login: t.props.channelLogin
                        }, function(e) {
                            return e.user && e.user.self && (e.user.self.canPrimeSubscribe = !1, e.user.self.subscriptionBenefit = {
                                id: Object(b.a)(),
                                purchasedWithPrime: !0,
                                tier: q,
                                endsAt: null,
                                paidUpgrade: null,
                                gift: {
                                    isGift: !1,
                                    gifter: null,
                                    __typename: "SubscriptionGift"
                                },
                                __typename: "SubscriptionBenefit"
                            }), e
                        })
                    }, t.setMessages = function() {
                        var e;
                        e = t.state.subGiftingEnabled ? Object(o.d)("Gift A Sub", "SubscribeButton") : Object(o.d)("Subscribed", "SubscribeButton"), t.messages = {
                            subscribe: t.props.hostChannelID ? Object(o.d)("Subscribe to {username}", {
                                username: t.props.data.user.displayName
                            }, "SubscribeButton") : Object(o.d)("Subscribe", "SubscribeButton"),
                            subscribed: t.props.hostChannelID ? Object(o.d)("Subscribed to {username}", {
                                username: t.props.data.user.displayName
                            }, "SubscribeButton") : e,
                            discountMessage: Object(o.d)("Get 50% off the first month of any paid Subscription", "SubscribeButton")
                        }
                    }, t.setPromotionData = function(e) {
                        if (t.state) {
                            var n = Object.assign({}, t.state.subData);
                            if (null !== n) {
                                for (var i = [], a = 0; a < 3; a++) {
                                    var r = Object.assign({}, n.subscriptionProducts[a]);
                                    r.self = e[a].self, i.push(r)
                                }
                                n.subscriptionProducts = i, t.setState({
                                    subData: n
                                })
                            }
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.reportInteractive && this.isUserDataReady(this.props) && this.props.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.channelLogin && !this.isUserDataReady(this.props) || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.props.reportInteractive && this.isUserDataReady(this.props) && this.props.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (this.isUserDataReady(e) && e.pubsub.messages.subscriptionInfo !== this.props.pubsub.messages.subscriptionInfo && this.props.data.refetch(), this.props.channelLogin !== e.channelLogin && this.setState({
                            subData: null,
                            isSubscribed: !1,
                            hasReconciledUser: !1
                        }), this.isUserDataReady(e) && this.hasSubscriptionProducts(e)) {
                        if (!this.state.inPrimeRegion && e.data.requestInfo && Object(p.b)(e.data.requestInfo.countryCode) && this.setState({
                                inPrimeRegion: !0
                            }), e.data.currentUser && this.isOwnChannel(e)) return void this.setState({
                            hasReconciledUser: !0
                        });
                        if (this.setState({
                                subData: e.data.user,
                                isNonStandardSub: 1 === e.data.user.subscriptionProducts.length
                            }), e.data.user.subscriptionProducts.some(this.isSubscriptionProductInvalid) && this.setState({
                                isNonStandardSub: !0
                            }), e.data.currentUser && e.data.user.self)
                            if (e.data.user.self.subscriptionBenefit) {
                                var t = e.data.user.self.subscriptionBenefit.purchasedWithPrime ? q : e.data.user.self.subscriptionBenefit.tier;
                                this.modalLevel = "";
                                var n = e.data.user.self.subscriptionBenefit.gift.isGift;
                                this.setState({
                                    isSubscribed: !0,
                                    subbedTier: t,
                                    hasReconciledUser: !0,
                                    isGiftSub: n
                                })
                            } else this.setState({
                                isSubscribed: !1,
                                hasReconciledUser: !0
                            });
                        else this.setState({
                            hasReconciledUser: !0
                        })
                    }
                }, t.prototype.render = function() {
                    if (!this.shouldRender() || !this.hasSubscriptionProducts(this.props)) return null;
                    if (this.setMessages(), this.props.data.currentUser && this.state.isSubscribed && this.state.isNonStandardSub) return s.createElement(C.u, {
                        disabled: !0,
                        ariaLabel: this.messages.subscribed,
                        icon: C._9.Star
                    }, this.messages.subscribed);
                    var e = this.state.subbedTier === d.a.Prime ? C._9.Crown : C._9.Star,
                        t = this.state.isSubscribed ? this.messages.subscribed : this.messages.subscribe,
                        n = this.state.isSubscribed ? "subscribed-button" : "subscribe-button",
                        i = s.createElement(C.u, {
                            "data-a-target": n,
                            "data-test-selector": "subscribe-button__dropdown",
                            ariaLabel: t,
                            type: this.state.isSubscribed ? C.z.Success : C.z.Default,
                            dropdown: !0,
                            icon: this.state.isSubscribed ? e : void 0
                        }, t),
                        a = this.props.hostChannelID ? C.q.TopLeft : C.q.BottomRight;
                    return s.createElement(l.a, {
                        onToggle: this.handleMenuToggle
                    }, i, s.createElement(C.p, {
                        size: C.r.Large,
                        direction: a,
                        "data-a-target": "sub-balloon"
                    }, this.renderBalloonContent()))
                }, t.prototype.renderBalloonContent = function() {
                    if (!this.state.subData) return o.i.debug("NOT rendering sub balloon; sub data not yet ready", {
                        state: this.state
                    }), null;
                    if (o.i.debug("rendering sub balloon", {
                            state: this.state
                        }), this.props.data.currentUser) {
                        if (this.state.isSubscribed) return s.createElement(V, {
                            authToken: this.props.authToken,
                            canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                            channelDisplayName: this.state.subData.displayName,
                            onSelectTierTab: this.onSelectTierTab,
                            reportSubMenuAction: this.reportSubMenuAction,
                            subbedTier: this.state.subbedTier,
                            isNonStandardSub: this.state.isNonStandardSub,
                            subscriptionProducts: this.state.subData.subscriptionProducts,
                            onSubscribedWithPrime: this.onSubscribedWithPrime,
                            userHasPrime: this.props.data.currentUser.hasPrime,
                            userHasGiftSub: this.state.isGiftSub,
                            subLogin: this.state.subData.login,
                            giftSubEndDate: this.props.data.user.self && this.props.data.user.self.subscriptionBenefit ? this.props.data.user.self.subscriptionBenefit.endsAt : void 0,
                            giftPaidUpgrade: this.props.data.user.self && this.props.data.user.self.subscriptionBenefit && this.props.data.user.self.subscriptionBenefit.paidUpgrade ? this.props.data.user.self.subscriptionBenefit.paidUpgrade : void 0,
                            giftSender: this.getGiftSender()
                        });
                        var e = null;
                        return this.hasDiscount() && (e = s.createElement(C.U, {
                            className: "tw-subscription-modal__discount-bar"
                        }, s.createElement(C._21, null, this.messages.discountMessage))), s.createElement(C.U, null, e, s.createElement(G, {
                            authToken: this.props.authToken,
                            channelDisplayName: this.state.subData.displayName,
                            channelLogin: this.props.channelLogin,
                            canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                            inPrimeRegion: this.state.inPrimeRegion,
                            isNonStandardSub: this.state.isNonStandardSub,
                            onSelectTierTab: this.onSelectTierTab,
                            onSubscribedWithPrime: this.onSubscribedWithPrime,
                            reportSubMenuAction: this.reportSubMenuAction,
                            subLogin: this.state.subData.login,
                            subscriptionProducts: this.state.subData.subscriptionProducts,
                            userHasPrime: this.props.data.currentUser.hasPrime,
                            setPromotionData: this.setPromotionData
                        }))
                    }
                    return s.createElement(G, {
                        authToken: this.props.authToken,
                        channelDisplayName: this.state.subData.displayName,
                        channelLogin: this.props.channelLogin,
                        canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                        inPrimeRegion: this.state.inPrimeRegion,
                        isNonStandardSub: this.state.isNonStandardSub,
                        onSelectTierTab: this.onSelectTierTab,
                        onSubscribedWithPrime: this.onSubscribedWithPrime,
                        reportSubMenuAction: this.reportSubMenuAction,
                        subLogin: this.state.subData.login,
                        subscriptionProducts: this.state.subData.subscriptionProducts,
                        userHasPrime: !1,
                        setPromotionData: this.setPromotionData
                    })
                }, t.prototype.hasSubscriptionProducts = function(e) {
                    return e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0
                }, t.prototype.shouldRender = function() {
                    return !!this.isUserDataReady(this.props) && (!this.hasSubscriptionProducts(this.props) || !!this.isSubscriptionReady())
                }, t.prototype.isUserDataReady = function(e) {
                    return e.data && e.data.user && !e.data.loading && !e.data.error
                }, t.prototype.isOwnChannel = function(e) {
                    return e.data.user.id === (e.data.currentUser && e.data.currentUser.id)
                }, t.prototype.isSubscriptionReady = function() {
                    return this.state.subData && this.state.hasReconciledUser
                }, t.prototype.getGiftSender = function() {
                    return this.state.isGiftSub && this.props.data.user.self && this.props.data.user.self.subscriptionBenefit && this.props.data.user.self.subscriptionBenefit.gift.isGift ? this.props.data.user.self.subscriptionBenefit.gift.gifter.displayName : null
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    e = "no", n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, o.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 2:
                                    return e = n.sent(), [3, 4];
                                case 3:
                                    return t = n.sent(), e = "no", [3, 4];
                                case 4:
                                    return this.setState({
                                        subGiftingEnabled: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.isSubscriptionProductInvalid = function(e) {
                    return !e.emoteSetID
                }, t.prototype.isSubscriptionDiscountReady = function(e) {
                    return !(!e || !e.subData) && void 0 !== e.subData.subscriptionProducts[0].self
                }, t.prototype.hasDiscount = function() {
                    var e = this.state;
                    return !!this.isSubscriptionDiscountReady(e) && (!(!e || !e.subData) && Object(L.b)(e.subData.subscriptionProducts))
                }, t = r.__decorate([Object(c.a)(z, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(u.a)([{
                    topic: function(e) {
                        return Object(h.n)(e.data.currentUser && e.data.currentUser.id || "")
                    },
                    mapMessageTypesToProps: {
                        "*": "subscriptionInfo"
                    },
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }])], t)
            }(s.Component),
            $ = K
    },
    936: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            Prime: "prime",
            Tier1: "1000",
            Tier2: "2000",
            Tier3: "3000"
        }
    },
    937: function(e, t, n) {
        "use strict";

        function i(e) {
            return "$" + (e / 100).toFixed(2).toString()
        }

        function a(e) {
            if (e[0].self && e[1].self && e[2].self) {
                if (e[0].self.isEligibleForDiscount) return !0;
                if (e[1].self.isEligibleForDiscount) return !0;
                if (e[2].self.isEligibleForDiscount) return !0
            }
            return !1
        }
        t.a = i, t.b = a
    },
    939: function(e, t, n) {
        "use strict";

        function i(e) {
            var t, n = Object(r.d)("{bitsAmount} Bits", {
                bitsAmount: e.count.toString()
            }, "Bits--BitsCount");
            if (e.withImage) {
                var i = e.bitsConfig.indexedActions[o.e];
                i || (i = Object(c.b)());
                var d = i.orderedTiers.find(function(t) {
                    return t.bits <= e.count
                });
                if (d) {
                    var p = Object(l.b)(d);
                    return void 0 !== e.themeOverride && (e.themeOverride === s.a.Light ? p.dark = p.light : p.light = p.dark), t = a.createElement(u.a, {
                        className: "bits-count--img",
                        sources: p
                    }), a.createElement("strong", {
                        className: "bits-count",
                        "data-a-target": "bits-count"
                    }, a.createElement("span", null, t, " ", e.withText ? n : ""))
                }
            }
            return a.createElement("strong", {
                className: "bits-count",
                "data-a-target": "bits-count"
            }, a.createElement("span", null, n))
        }
        var a = n(1),
            r = n(2),
            s = n(37),
            o = n(268),
            l = n(404),
            c = n(407),
            u = n(405);
        n(1002);
        n.d(t, "a", function() {
            return i
        })
    },
    940: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(2),
            s = n(923),
            o = n(3),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onGiftSelect = function() {
                        t.props.onGiftSelect && t.props.onGiftSelect()
                    }, t.onSelectTierTab = function(e) {
                        t.props.onSelectTierTab && t.props.onSelectTierTab(e)
                    }, t.reportSubMenuAction = function(e) {
                        t.props.reportSubMenuAction && t.props.reportSubMenuAction(e)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(o.U, null, a.createElement(o.U, {
                        display: o.H.Flex,
                        justifyContent: o.T.Between,
                        alignItems: o.c.Center,
                        fullWidth: !0
                    }, a.createElement(o._21, {
                        bold: !0,
                        type: o._26.H5
                    }, Object(r.d)("Choose A Gift Subscription", "GiftTierTabs")), a.createElement(o.u, {
                        type: o.z.Text,
                        icon: o._9.AngleLeft,
                        onClick: this.props.onBack,
                        "data-test-selector": "sub-gift-select-back-button"
                    }, a.createElement(o.U, {
                        alignItems: o.c.Center,
                        display: o.H.InlineFlex
                    }, a.createElement(o._21, null, Object(r.d)("Back", "GiftTierTabs"))))), a.createElement(s.a, {
                        isGift: !0,
                        giftRecipient: this.props.giftRecipient,
                        onGiftSelect: this.onGiftSelect,
                        channelDisplayName: this.props.channelDisplayName,
                        subscriptionProducts: this.props.subscriptionProducts,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.reportSubMenuAction,
                        userHasPrime: !1,
                        canPrimeSubscribe: !1,
                        isSubscribed: !1
                    }))
                }, t
            }(a.Component),
            c = l;
        n.d(t, !1, function() {
            return "sub-gift-select-back-button"
        }), n.d(t, "a", function() {
            return c
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
    942: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = 0,
                n = 0,
                i = 0;
            return e.forEach(function(e) {
                e.cheerAmount && (t = Math.max(t, e.cheerAmount), n = n ? Math.min(n, e.cheerAmount) : e.cheerAmount, i += e.cheerAmount)
            }), {
                total: i,
                smallestCheermote: n,
                largestCheermote: t
            }
        }

        function a(e) {
            var t = e.messageBits,
                n = t.total,
                i = t.largestCheermote,
                a = t.smallestCheermote;
            if (n) {
                var r = {
                    cheerAboveMaxBitsPerEmote: i > l.k,
                    totalAboveBalance: n > e.balance,
                    totalBelowCheerMinimum: n < e.cheerMinimumBits,
                    totalBelowEmoteMinimum: a < e.emoteMinimumBits,
                    inputLongerThanMaxBitsMessage: e.inputValue.length > l.j,
                    inputStartsWithCommand: e.inputValue.startsWith("/")
                };
                if (Object.keys(r).some(function(e) {
                        return r[e]
                    })) return s.__assign({
                    canSpend: !1
                }, r)
            }
            return {
                canSpend: !0
            }
        }

        function r(e) {
            var t = e.purchaseUrl;
            if (t) {
                e.trackBitsCardInteraction(Object(c.d)(e.bitsAmount), {
                    location: e.location
                });
                var n = t.replace("{channelID}", e.channelID),
                    i = window.open(n, "Twitch", "width=1024,height=600,scrollbars=yes");
                return !i || Object(o.a)() ? (e.closeAllBits && e.closeAllBits(), void e.trackBitsCardInteraction(c.a.CloseCard, {
                    location: e.location
                })) : (i.focus(), i)
            }
        }
        t.a = i, t.c = a, t.b = r;
        var s = n(0),
            o = n(955),
            l = n(268),
            c = n(915)
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
    952: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return a.__awaiter(this, void 0, void 0, function() {
                var n, i, r, l, c;
                return a.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            n = "https://api.twitch.tv/api/premium/credit/spend_token?channel_id=" + e, i = 1, a.label = 1;
                        case 1:
                            if (!(i <= o)) return [3, 7];
                            a.label = 2;
                        case 2:
                            return a.trys.push([2, 5, , 6]), [4, fetch(n, {
                                method: "POST",
                                headers: {
                                    "Client-ID": s.n.config.legacyClientID,
                                    Accept: "application/json; charset=UTF-8",
                                    "content-type": "application/json; charset=UTF-8",
                                    Authorization: "OAuth " + t
                                }
                            })];
                        case 3:
                            return r = a.sent(), [4, r.body];
                        case 4:
                            return l = a.sent(), [2, l];
                        case 5:
                            if (c = a.sent(), i === o) throw c;
                            return [3, 6];
                        case 6:
                            return ++i, [3, 1];
                        case 7:
                            return [2]
                    }
                })
            })
        }
        var a = n(0),
            r = n(1),
            s = n(2),
            o = 3,
            l = n(269),
            c = n(3),
            u = "subscribe-button__subscribe-with-prime",
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isSubscribing: !1,
                        primeSubFailure: !0
                    }, t.handleStartPrimeTrialClick = function() {
                        t.props.reportSubMenuAction({
                            action: l.a.ClickSignupForPrime
                        })
                    }, t.handleSubWithPrimeClick = function() {
                        t.setState({
                            isSubscribing: !0
                        }, function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return a.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 3, 4, 5]), this.props.authToken && this.props.userHasPrime && this.props.subLogin ? [4, i(this.props.subLogin, this.props.authToken)] : [3, 2];
                                        case 1:
                                            t.sent(), this.props.onSubscribedWithPrime(), t.label = 2;
                                        case 2:
                                            return [3, 5];
                                        case 3:
                                            return e = t.sent(), s.i.error(e, "Failed to subscribe with Prime", {
                                                subLogin: this.props.subLogin
                                            }), this.setState({
                                                isSubscribing: !1,
                                                primeSubFailure: !0
                                            }), [3, 5];
                                        case 4:
                                            return this.setState({
                                                isSubscribing: !1
                                            }), [7];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.setMessages()
                }, t.prototype.render = function() {
                    var e = this.props.isSubscribedWithPrime && this.props.canPrimeSubscribe;
                    return this.props.userHasPrime ? this.props.isSubscribed && !e ? r.createElement(c.u, a.__assign({
                        ariaLabel: this.messages.subscribed,
                        "data-test-selector": u,
                        disabled: !0,
                        icon: c._9.Crown
                    }, Object(c._39)(this.props)), this.messages.subscribed) : this.props.canPrimeSubscribe ? r.createElement(c.u, a.__assign({
                        ariaLabel: this.messages.subscribeFree,
                        "data-test-selector": u,
                        disabled: this.state.isSubscribing,
                        icon: c._9.Crown,
                        state: this.state.isSubscribing ? c.y.Loading : c.y.Default,
                        onClick: this.handleSubWithPrimeClick
                    }, Object(c._39)(this.props)), e ? this.messages.resubscribeFree : this.messages.subscribeFree) : r.createElement(c.u, a.__assign({
                        ariaLabel: this.messages.primeSubNotAvailable,
                        "data-test-selector": u,
                        disabled: !0,
                        icon: c._9.Crown
                    }, Object(c._39)(this.props)), this.messages.primeSubNotAvailable) : r.createElement(c.u, a.__assign({
                        ariaLabel: this.messages.startPrimeTrial,
                        "data-test-selector": u,
                        icon: c._9.Crown,
                        linkTo: s.a.tryPrimeURI,
                        onClick: this.handleStartPrimeTrialClick
                    }, Object(c._39)(this.props), {
                        targetBlank: !0
                    }), this.messages.startPrimeTrial)
                }, t.prototype.setMessages = function() {
                    this.messages = {
                        subscribed: Object(s.d)("Subscribed", "SubscribeWithPrime"),
                        startPrimeTrial: Object(s.d)("Start Your Free Trial", "SubscribeWithPrime"),
                        primeSubNotAvailable: Object(s.d)("Not yet!", "SubscribeWithPrime"),
                        subscribeFree: Object(s.d)("Subscribe Free", "SubscribeWithPrime"),
                        resubscribeFree: Object(s.d)("Resubscribe Free", "SubscribeWithPrime")
                    }
                }, t
            }(r.Component),
            p = d;
        n.d(t, !1, function() {
            return u
        }), n.d(t, "a", function() {
            return p
        })
    },
    953: function(e, t) {},
    955: function(e, t, n) {
        "use strict";

        function i(e) {
            return e || (e = navigator.userAgent), !!a.exec(e)
        }
        t.a = i;
        var a = /\scurse\/\d/
    },
    957: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(2),
            s = n(9),
            o = n(6),
            l = n(3),
            c = n(971),
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        canGift: !1,
                        giftingEnabled: !1
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.data && e.data.user && e.data.user.self ? this.setState({
                        canGift: e.data.user.self.canGift
                    }) : this.setState({
                        canGift: !1
                    })
                }, t.prototype.render = function() {
                    return this.state.giftingEnabled ? a.createElement(l.u, {
                        targetBlank: !0,
                        disabled: !this.state.canGift,
                        onClick: this.props.onClick,
                        linkTo: this.props.checkoutURL,
                        "data-test-selector": "gift-subscribe-button"
                    }, Object(r.d)("Gift Subscription", "GiftSubscribeButton")) : null
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, r.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 1:
                                    return e = t.sent(), "yes" === e ? this.setState({
                                        giftingEnabled: !0
                                    }) : this.setState({
                                        giftingEnabled: !1
                                    }), [2]
                            }
                        })
                    })
                }, t = i.__decorate([Object(o.c)("GiftSubscribeButton"), Object(s.a)(c, {
                    options: function(e) {
                        return {
                            variables: {
                                recipientLogin: e.giftRecipient,
                                subProductId: e.subProductId
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.giftRecipient || !e.subProductId
                    }
                })], t)
            }(a.Component),
            d = u;
        n.d(t, !1, function() {
            return "gift-subscribe-button"
        }), n.d(t, "a", function() {
            return d
        })
    },
    958: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = [],
                n = {};
            return e.forEach(function(e) {
                var i = e.tiers.map(function(e) {
                    var t = new Map,
                        n = new Map,
                        i = new Map,
                        r = new Map;
                    return e.images.forEach(function(e) {
                        "LIGHT" === e.theme ? e.isAnimated ? n.set(e.dpiScale, e.url) : t.set(e.dpiScale, e.url) : e.isAnimated ? r.set(e.dpiScale, e.url) : i.set(e.dpiScale, e.url)
                    }), a.__assign({
                        indexedImages: {
                            LIGHT: {
                                static: t,
                                animated: n
                            },
                            DARK: {
                                static: i,
                                animated: r
                            }
                        }
                    }, e)
                });
                i.sort(function(e, t) {
                    return t.bits - e.bits
                });
                var r = a.__assign({}, e, {
                    indexedTiers: new Map(i.map(function(e) {
                        return [e.bits, e]
                    })),
                    orderedTiers: i
                });
                t.push(r), n[r.prefix.toLowerCase()] = r
            }), {
                indexedActions: n,
                orderedActions: t
            }
        }
        t.a = i;
        var a = n(0)
    },
    959: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n(0),
            a = n(1),
            r = (n.n(a), n(3)),
            s = function(e) {
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
    961: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        });
        var i = "AD",
            a = "BUNDLE"
    },
    962: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "bitsOffersFragment"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "BitsOffer"
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
                            value: "type"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "bits"
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
                                value: "BitsBundleOffer"
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
                                    value: "discount"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isPromo"
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
                                    value: "includesVAT"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "promotion"
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
                                            value: "type"
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
                end: 197
            }
        };
        n.loc.source = {
            body: "fragment bitsOffersFragment on BitsOffer {\n  id\n  type\n  bits\n  ... on BitsBundleOffer {\n    price\n    discount\n    isPromo\n    url\n    includesVAT\n    promotion {\n      id\n      type \n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    963: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "cheer"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "User"
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
                            value: "cheer"
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
                                    value: "emotes"
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
                                            value: "prefix"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
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
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "tiers"
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
                                                    value: "bits"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "color"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "images"
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
                                                            value: "theme"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "isAnimated"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "dpiScale"
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
                end: 270
            }
        };
        n.loc.source = {
            body: "fragment cheer on User {\n  cheer {\n    id\n    emotes {\n      id\n      prefix\n      type\n      tiers {\n        id\n        bits\n        color\n        images {\n          id\n          url\n          theme\n          isAnimated\n          dpiScale\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    964: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(h.bindActionCreators)({
                closeModal: c.c
            }, e)
        }

        function a(e) {
            return p.__awaiter(this, void 0, void 0, function() {
                var t, n, i, a, r;
                return p.__generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            if (t = b.b.get("bits_truex_partner_hash", ""), !(n = b.b.get("bits_truex_api_url", "")) || !t) return b.i.warn("Truex API info missing from dynamic settings"), [2, S.Error];
                            s.label = 1;
                        case 1:
                            return s.trys.push([1, 5, , 6]), [4, fetch(n + "?placement.key=" + t + "&user.uid=" + e + "&max_activities=1")];
                        case 2:
                            return i = s.sent(), i.ok ? [4, i.json()] : [3, 4];
                        case 3:
                            if ((a = s.sent()) && Array.isArray(a) && a.length) return [2, S.Available];
                            s.label = 4;
                        case 4:
                            return [2, S.Unavailable];
                        case 5:
                            return r = s.sent(), b.i.warn("Failed checking ad availability from TrueX, probably due to AdBlock", r), [2, S.AdBlocked];
                        case 6:
                            return [2]
                    }
                })
            })
        }

        function r(e) {
            return {
                adModalOpen: Object(u.b)(e, N),
                isLoggedIn: Object(d.d)(e)
            }
        }

        function s(e) {
            return {
                showWatchAdModal: function(t) {
                    return e(Object(c.d)(N, t))
                }
            }
        }
        var o, l = n(8),
            c = n(50),
            u = n(91),
            d = n(19),
            p = n(0),
            m = n(1),
            h = n(11),
            b = n(2),
            g = n(134),
            f = n(9),
            v = n(23);
        ! function(e) {
            e[e.ExitEarly = 0] = "ExitEarly", e[e.Unknown = 1] = "Unknown", e[e.Adblock = 2] = "Adblock", e[e.LimitReached = 3] = "LimitReached"
        }(o || (o = {}));
        var S, k = n(411),
            y = n(915),
            _ = n(3),
            E = n(992),
            T = (n(993), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.hasAwarded = !1, t.messageHandler = function(e) {
                        return p.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, a, a, r, s;
                            return p.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (e.origin !== window.location.origin) return [2];
                                        if (!(t = e.data) || "trueXAd" !== t.msgSrc) return [2];
                                        switch (n = t.type) {
                                            case k.a.Ready:
                                                return [3, 1];
                                            case k.a.RequestAd:
                                                return [3, 2];
                                            case k.a.Dimensions:
                                                return [3, 3];
                                            case k.a.OnStart:
                                                return [3, 4];
                                            case k.a.OnCredit:
                                                return [3, 5];
                                            case k.a.OnClose:
                                            case k.a.OnFinish:
                                            case k.a.LimitReached:
                                            case k.a.Adblock:
                                            case k.a.OnError:
                                                return [3, 9]
                                        }
                                        return [3, 10];
                                    case 1:
                                        return i = {
                                            msgSrc: "wateb-ad-modal",
                                            tuid: this.props.tuid
                                        }, e.source.postMessage(i, "*"), [2];
                                    case 2:
                                        try {
                                            if (!(a = JSON.parse(t.activityJSON))) return [2];
                                            Object(y.g)({
                                                campaignID: a.campaign_id.toString(),
                                                requestID: t.requestID,
                                                requestMethod: this.props.requestRef
                                            })
                                        } catch (e) {}
                                        return [2];
                                    case 3:
                                        return t.height && t.width && this.setState({
                                            customDimensions: {
                                                height: t.height,
                                                width: t.width
                                            }
                                        }), [3, 10];
                                    case 4:
                                        try {
                                            if (!(a = JSON.parse(t.activityJSON))) return [2];
                                            Object(y.f)({
                                                requestID: t.requestID,
                                                adblock: !1,
                                                campaignID: a.campaign_id.toString()
                                            })
                                        } catch (e) {}
                                        return [2];
                                    case 5:
                                        return l.trys.push([5, 7, , 8]), [4, this.props.redeemTrueXAd(Object(v.a)({
                                            args: t.engagement.signature_argument_string,
                                            signature: t.engagement.signature,
                                            trueXAd: {
                                                creativeID: t.engagement.ad.creative_id,
                                                campaignID: t.engagement.ad.campaign_id,
                                                name: t.engagement.ad.name,
                                                currencyAmount: t.engagement.ad.currency_amount
                                            },
                                            targetID: this.props.channelID
                                        }))];
                                    case 6:
                                        return r = l.sent(), this.hasAwarded = !0, this.props.onBitsAwarded && this.props.onBitsAwarded(r.data.redeemTrueXAd.grantedBits), [3, 8];
                                    case 7:
                                        return s = l.sent(), b.i.warn("Error while redeeming bits for truex ad", s), this.props.onError && this.props.onError(o.Unknown), [3, 8];
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        return this.props.onError && (t.type === k.a.LimitReached ? this.props.onError(o.LimitReached) : t.type === k.a.Adblock ? this.props.onError(o.Adblock) : t.type === k.a.OnError ? this.props.onError(o.Unknown) : this.hasAwarded || this.props.onError(o.ExitEarly)), this.props.closeModal(), [3, 10];
                                    case 10:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentWillMount = function() {
                    window.addEventListener("message", this.messageHandler)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("message", this.messageHandler)
                }, t.prototype.render = function() {
                    return m.createElement(_._17, {
                        background: _.m.Base
                    }, m.createElement("div", {
                        className: "t-watch-ads-modal",
                        style: this.state.customDimensions
                    }, m.createElement(g.a, null), m.createElement("iframe", {
                        src: "/products/bits/ad"
                    })))
                }, t = p.__decorate([Object(f.a)(E, {
                    name: "redeemTrueXAd"
                })], t)
            }(m.Component)),
            N = Object(l.a)(null, i)(T),
            C = n(4),
            w = n(30),
            P = n(941);
        ! function(e) {
            e[e.Error = 0] = "Error", e[e.AdBlocked = 1] = "AdBlocked", e[e.Unavailable = 2] = "Unavailable", e[e.Available = 3] = "Available"
        }(S || (S = {}));
        var U, O = n(925),
            A = function(e) {
                return m.createElement(_.U, {
                    display: _.H.Flex,
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    fullWidth: !0,
                    flexWrap: _.K.NoWrap,
                    padding: {
                        y: 1
                    }
                }, m.createElement(O.a, {
                    prefix: "cheer",
                    amount: e.amount,
                    bitsConfig: e.bitsConfig
                }), m.createElement(_.U, {
                    display: _.H.Flex,
                    padding: {
                        top: 1
                    },
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    flexWrap: _.K.NoWrap
                }, m.createElement(_._21, {
                    type: _._26.H4,
                    bold: !0
                }, Object(b.d)("You got {bitsAmount,number} Bits!", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward")), m.createElement(_.P, {
                    padding: {
                        top: 1
                    }
                }, m.createElement(_._21, {
                    color: _.F.Alt2
                }, Object(b.d)("{bitsAmount,number} Bits were added to your Bit inventory.", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward"), m.createElement("br", null), Object(b.d)("You can use these Bits to Cheer!", "Bits--WatchAdAward")))), m.createElement(_.U, {
                    display: _.H.Flex,
                    padding: {
                        x: 1,
                        top: 3
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.T.Between
                }, m.createElement(_.u, {
                    onClick: e.onStartCheering
                }, Object(b.d)("Start Cheering", "Bits--WatchAdAward")), m.createElement(_.u, {
                    type: _.z.Hollow,
                    onClick: e.onWatchAnother,
                    disabled: !e.hasAdAvailable
                }, Object(b.d)("Watch Another", "Bits--WatchAdAward"))))
            },
            I = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasAdAvailable: !0
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentWillMount = function() {
                    return p.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return p.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, a(this.props.truexUserID)];
                                case 1:
                                    return e = t.sent(), e !== S.Available && this.setState({
                                        hasAdAvailable: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return m.createElement(A, p.__assign({}, this.props, {
                        hasAdAvailable: this.state.hasAdAvailable
                    }))
                }, t
            }(m.Component),
            D = n(268),
            F = (n(995), function(e) {
                var t = Object(b.d)("Something's wrong!", "Bits--WatchAdError"),
                    n = Object(b.d)("Something went wrong. Wait a while and try again.", "Bits--WatchAdError"),
                    i = "adserrorgeneric";
                switch (e.type) {
                    case o.Adblock:
                        i = "adserroradblock", n = Object(b.d)("We can't load this Ad, probably because Ad Blocking software is running. To watch an ad and get Bits, please disable all Ad Blocking software.", "Bits--WatchAdError");
                        break;
                    case o.LimitReached:
                        i = "adserrorlimit", t = Object(b.d)("Ad Limit Reached", "Bits--WatchAdError"), n = Object(b.d)("That's all the Ads we have for now. Try again tomorrow!", "Bits--WatchAdError");
                        break;
                    case o.ExitEarly:
                        n = Object(b.d)("To get Bits, you must view and interact with the Ad for the minimum amount of time.", "Bits--WatchAdError")
                }
                var a = m.createElement(_.U, {
                    className: "watch-ad-error__footer",
                    display: _.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.T.Center
                }, m.createElement(_.u, {
                    onClick: e.onTryAgain
                }, Object(b.d)("Try Again", "Bits--WatchAdError")));
                return e.type === o.LimitReached && (a = m.createElement(_.U, {
                    className: "watch-ad-error__footer",
                    display: _.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.T.Between
                }, m.createElement(_.u, {
                    onClick: e.onClose
                }, Object(b.d)("Got It", "Bits--WatchAdError")), m.createElement(_.u, {
                    onClick: e.onTryAgain,
                    type: _.z.Hollow
                }, Object(b.d)("Buy Bits", "Bits--WatchAdError")))), m.createElement(_.U, {
                    padding: {
                        x: 1
                    },
                    display: _.H.Flex,
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    fullWidth: !0,
                    flexWrap: _.K.NoWrap
                }, m.createElement(_.U, {
                    padding: {
                        y: 2
                    }
                }, m.createElement("img", {
                    className: "watch-ad-error__error-image",
                    src: D.a + "/light/static/1/" + i + ".png"
                })), m.createElement(_.U, {
                    padding: {
                        bottom: 1
                    }
                }, m.createElement(_._21, {
                    type: _._26.H4,
                    bold: !0
                }, t)), m.createElement(_._21, {
                    color: _.F.Alt2
                }, n), a)
            }),
            x = function(e) {
                var t = null;
                return e.disableWatchAd && (t = Object(b.d)("Try again later", "Bits--WatchAdOffer")), m.createElement(_._17, {
                    className: "bits-buy-card__offer-row",
                    display: _.H.Flex,
                    flexShrink: 0,
                    borderBottom: !0,
                    justifyContent: _.T.Between,
                    flexWrap: _.K.NoWrap,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, m.createElement(_.U, {
                    padding: {
                        right: 4
                    }
                }, m.createElement("strong", null, Object(b.d)("Get {minBitsCount} or more Bits by watching short ads", {
                    minBitsCount: e.minPayout
                }, "Bits--WatchAdOffer"))), m.createElement(_.U, {
                    flexShrink: 0,
                    display: _.H.Flex,
                    flexDirection: _.J.Column,
                    alignItems: _.c.End
                }, m.createElement(_.u, {
                    type: _.z.Hollow,
                    "data-a-target": "bits-watch-ad",
                    onClick: e.onWatchAdClick,
                    disabled: e.disableWatchAd
                }, Object(b.d)("Watch Ad", "Bits--WatchAdOffer")), t && m.createElement(_.U, {
                    className: "bits-buy-card__sub-text",
                    alignSelf: _.d.Stretch,
                    textAlign: _._22.Center,
                    margin: {
                        top: .5
                    }
                }, t)))
            },
            B = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        enableWatchAd: !0
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentWillMount = function() {
                    return p.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return p.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, a(this.props.truexUserID)];
                                case 1:
                                    return e = t.sent(), Object(y.e)({
                                        channel: this.props.channelLogin,
                                        channelID: this.props.channelID,
                                        available: e === S.Available
                                    }), e !== S.Available && e !== S.AdBlocked && this.setState({
                                        enableWatchAd: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return B.test(navigator.userAgent) ? null : m.createElement(x, p.__assign({}, this.props, {
                        disableWatchAd: !this.state.enableWatchAd
                    }))
                }, t
            }(m.Component),
            j = n(961),
            L = n(404),
            M = n(942),
            H = n(407),
            G = n(405),
            W = n(996);
        n(997);
        ! function(e) {
            e[e.Inactive = 0] = "Inactive", e[e.Error = 1] = "Error", e[e.Awarded = 2] = "Awarded"
        }(U || (U = {}));
        var V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        wateb: U.Inactive,
                        watebError: null,
                        bitsAwarded: 0
                    }, t.handleBuyClick = function(e) {
                        var n = t.props.data && t.props.data.user ? t.props.data.user.id : "",
                            i = Object(M.b)({
                                trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                                channelID: n,
                                purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                                bitsAmount: e.currentTarget.dataset.bitsAmount,
                                closeAllBits: t.props.closeAllBits,
                                location: t.props.location
                            });
                        i && (t.onBuyPopupClose(i), t.props.onClose())
                    }, t.onBuyPopupClose = function(e) {
                        Object(P.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t.onAdBitsAwarded = function(e) {
                        t.props.data && !t.props.data.loading && t.props.data.refetch(), t.setState({
                            wateb: U.Awarded,
                            bitsAwarded: e
                        })
                    }, t.handleWatchAdClick = function() {
                        return p.__awaiter(t, void 0, void 0, function() {
                            return p.__generator(this, function(e) {
                                return this.props.data && this.props.data.currentUser && this.props.data.user ? (this.props.showWatchAdModal({
                                    tuid: this.props.data.currentUser.idSHA1,
                                    onBitsAwarded: this.onAdBitsAwarded,
                                    onError: this.receiveAdErrorState,
                                    requestRef: y.c.ShowAdButton,
                                    channelID: this.props.data.user.id
                                }), [2]) : [2]
                            })
                        })
                    }, t.receiveAdErrorState = function(e) {
                        t.setState({
                            wateb: U.Error,
                            watebError: e
                        })
                    }, t.resetAdErrorState = function() {
                        t.state.wateb === U.Error && (t.setState({
                            wateb: U.Inactive
                        }), t.props.data && t.props.data.refetch())
                    }, t
                }
                return p.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return !e.adModalOpen
                }, t.prototype.render = function() {
                    var e = this,
                        t = {
                            border: !0,
                            background: _.m.Base,
                            fullWidth: !0,
                            elevation: 3
                        },
                        n = C({
                            "bits-buy-card": !0,
                            "bits-buy-card__chat-tooltip": this.props.location === y.b.ChatTooltip
                        }),
                        i = null;
                    if (this.props.location === y.b.ChatTooltip && (i = m.createElement("button", {
                            className: "bits-buy-card__close",
                            onClick: this.props.onClose,
                            "data-a-target": "bits-buy-card-close-button"
                        }, m.createElement(_._8, {
                            asset: _._9.Close,
                            height: 11,
                            width: 11
                        }))), !this.props.data || this.props.data.loading) return m.createElement(_._17, p.__assign({
                        className: n,
                        "data-a-target": "bits-buy-card-loading",
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.T.Center,
                        textAlign: _._22.Center
                    }, t), m.createElement(_.X, {
                        delay: 0
                    }), m.createElement(_.U, {
                        padding: {
                            top: 2
                        }
                    }, m.createElement(_._21, {
                        italic: !0
                    }, Object(b.d)("Fetching bits", "Bits--BuyCard"))));
                    if (this.props.data.error) return m.createElement(_.U, p.__assign({
                        className: C(n, "bits-buy-card--shorter"),
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.T.Center,
                        padding: 2,
                        textAlign: _._22.Center,
                        "data-a-target": "bits-buy-card-error"
                    }, t), i, m.createElement(_._21, {
                        italic: !0
                    }, Object(b.d)("Bits prices are unavailable right now. Check back again later.", "Bits--BuyCard")));
                    var a = this.renderWatebCard();
                    if (a) return m.createElement(_._17, p.__assign({
                        className: C(n, "bits-buy-card--shorter"),
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.T.Center,
                        textAlign: _._22.Center,
                        padding: 1
                    }, t), i, a);
                    var r = [];
                    this.props.data.currentUser ? r = this.props.data.currentUser.bitsOffers : this.props.data.bitsOffers && (r = this.props.data.bitsOffers);
                    var s = r.length,
                        o = null,
                        l = [],
                        c = null;
                    r.filter(function(e) {
                        return e.type === j.b
                    }).some(function(e) {
                        return e.includesVAT
                    }) && (c = m.createElement(_._21, {
                        italic: !0,
                        type: _._26.P,
                        color: _.F.Alt
                    }, Object(b.d)("Prices include VAT", "Bits--BuyCard")));
                    var u = this.props.data.user ? this.props.data.user.id : "";
                    r.forEach(function(t, n) {
                        if (t.type === j.a) {
                            if (!e.props.channelLogin) return null;
                            var i = e.props.data && e.props.data.currentUser ? e.props.data.currentUser.idSHA1 : "";
                            return void(o = m.createElement(R, {
                                key: "wateb",
                                minPayout: t.bits,
                                onWatchAdClick: e.handleWatchAdClick,
                                truexUserID: i,
                                channelID: u,
                                channelLogin: e.props.channelLogin
                            }))
                        }
                        var a = null,
                            r = t.promotion && null !== t.promotion;
                        r && "first_time_purchase" === t.promotion.type ? a = m.createElement(_.U, {
                            className: "bits-buy-card__bonus-text bits-buy-card__bonus-text-headline"
                        }, m.createElement(_._21, {
                            type: _._26.Strong,
                            fontSize: _.L.Size6
                        }, Object(b.d)("Special Offer: 1st Time Buyers", "Bits--BuyCard"))) : r && "black_friday_2017" === t.promotion.id && (a = m.createElement(_.U, {
                            className: "bits-buy-card__bonus-text bits-buy-card__bonus-text-headline"
                        }, m.createElement(_._21, {
                            type: _._26.Strong,
                            fontSize: _.L.Size6
                        }, Object(b.d)("Flash Sale: Now thru Nov. 27!", "Bits--BuyCard"))));
                        var c = null;
                        t.discount && (c = m.createElement("div", {
                            className: "bits-buy-card__sub-text"
                        }, Object(b.d)("{percentOff,number,percent} discount", {
                            percentOff: t.discount
                        }, "Bits--BuyCard")));
                        var d = null;
                        !r || "first_time_purchase" !== t.promotion.type && "single_purchase" !== t.promotion.type || (d = m.createElement("div", {
                            className: "bits-buy-card__sub-text"
                        }, Object(b.d)("one per account", "Bits--BuyCard")));
                        var p = n + 1 < s,
                            h = p ? _._17 : _.U,
                            g = m.createElement(h, {
                                className: "bits-buy-card__offer-row",
                                key: t.id,
                                flexShrink: 0,
                                display: _.H.Flex,
                                justifyContent: _.T.Center,
                                borderBottom: p,
                                flexDirection: _.J.Column,
                                padding: {
                                    x: 2,
                                    y: 1
                                }
                            }, a, m.createElement(_.U, {
                                display: _.H.Flex,
                                justifyContent: _.T.Between,
                                alignItems: _.c.Center
                            }, m.createElement(_.U, {
                                flexGrow: 1
                            }, m.createElement(_._21, {
                                type: _._26.H5,
                                color: _.F.Base,
                                bold: !0
                            }, t.bits, " Bits ", null), e.getAvailableTiers(t.bits)), m.createElement(_.U, {
                                flexShrink: 0,
                                display: _.H.Flex,
                                flexDirection: _.J.Column,
                                alignItems: _.c.End
                            }, m.createElement(_.u, {
                                onClick: e.handleBuyClick,
                                "data-purchase-url": t.url,
                                "data-bits-amount": t.bits,
                                "data-a-target": "bits-purchase-button-" + t.bits
                            }, t.price), (c || d) && m.createElement(_.U, {
                                alignSelf: _.d.Stretch,
                                textAlign: _._22.Right,
                                margin: {
                                    top: .5
                                }
                            }, c, d))));
                        r ? e.props.hidePromos || l.unshift(g) : l.push(g)
                    }), o && !this.props.hideWateb && l.unshift(o);
                    var d = null;
                    this.props.data && this.props.channelLogin && this.props.data.user && this.props.data.user.cheer.settings.cheerMinimumBits > 1 && (d = m.createElement(_._21, {
                        color: _.F.Alt
                    }, Object(b.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                        displayName: this.props.data.user.displayName || this.props.channelLogin,
                        minBits: this.props.data.user.cheer.settings.cheerMinimumBits
                    }, "Bits--BuyCard")));
                    var h = null;
                    this.props.data.currentUser && (h = m.createElement(_._21, {
                        color: _.F.Alt
                    }, Object(b.d)("You have {totalBits} Bits", {
                        totalBits: m.createElement("strong", {
                            "data-a-target": "buy-card-bits-count"
                        }, this.props.data.currentUser.bitsBalance)
                    }, "Bits--BuyCard")));
                    var g = null;
                    this.props.location === y.b.ChatTooltip && (g = m.createElement(_._17, {
                        className: "bits-buy-card__header",
                        padding: {
                            x: 1,
                            bottom: 1
                        },
                        borderBottom: !0,
                        flexShrink: 0
                    }, m.createElement(_.U, {
                        margin: {
                            bottom: 1
                        }
                    }, m.createElement(_._21, {
                        type: _._26.H4,
                        color: _.F.Alt
                    }, Object(b.d)("Purchase Bits", "Bits--BuyCard")), c), h, d));
                    var f = null;
                    return f = this.props.fullsize ? m.createElement(_.U, {
                        className: "bits-buy-card__full-size",
                        flexGrow: 1,
                        flexWrap: _.K.NoWrap,
                        display: _.H.Flex,
                        flexDirection: _.J.Column
                    }, l) : m.createElement(w.b, {
                        className: "bits-buy-card__scroll-view"
                    }, m.createElement(_.U, {
                        flexGrow: 1,
                        flexWrap: _.K.NoWrap,
                        display: _.H.Flex,
                        flexDirection: _.J.Column
                    }, l)), m.createElement(_._17, p.__assign({
                        className: n,
                        padding: {
                            top: 1
                        },
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        "data-a-target": "bits-buy-card"
                    }, t), i, g, f)
                }, t.prototype.renderWatebCard = function() {
                    if (this.props.data && this.props.data.currentUser) switch (this.state.wateb) {
                        case U.Awarded:
                            return m.createElement(I, {
                                bitsConfig: this.props.bitsConfig,
                                amount: this.state.bitsAwarded,
                                onStartCheering: this.props.onClose,
                                onWatchAnother: this.handleWatchAdClick,
                                truexUserID: this.props.data.currentUser.idSHA1
                            });
                        case U.Error:
                            return m.createElement(F, {
                                type: this.state.watebError || o.Unknown,
                                onClose: this.props.onClose,
                                onTryAgain: this.resetAdErrorState
                            });
                        default:
                            return !1
                    }
                }, t.prototype.getAvailableTiers = function(e) {
                    var t = this.props.bitsConfig.indexedActions[D.e];
                    t || (t = Object(H.b)());
                    var n = t.orderedTiers.filter(function(t) {
                        return t.bits <= e
                    }).reverse();
                    return m.createElement(_.U, {
                        padding: {
                            top: .5
                        },
                        className: "bits-buy-card__tier-bits-images"
                    }, n.map(function(e) {
                        return m.createElement(G.a, {
                            key: e.bits,
                            sources: Object(L.b)(e, 2, !1)
                        })
                    }))
                }, t = p.__decorate([Object(f.a)(W, {
                    name: "data",
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin,
                                withChannel: !!e.channelLogin,
                                isLoggedIn: e.isLoggedIn
                            }
                        }
                    }
                })], t)
            }(m.Component),
            z = V,
            q = Object(l.a)(r, s)(z);
        n.d(t, !1, function() {
            return r
        }), n.d(t, !1, function() {
            return s
        }), n.d(t, "a", function() {
            return q
        })
    },
    970: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(d.a)(p, {
                u: e
            })
        }

        function a(e, t) {
            return Object(d.a)(m, {
                url: e,
                text: t
            })
        }

        function r(e, t) {
            return Object(d.a)(h, {
                url: e,
                title: t
            })
        }

        function s(e) {
            return Object(d.a)(b, {
                url: e
            })
        }
        var o = n(0),
            l = n(1),
            c = n(2),
            u = n(989),
            d = n(136),
            p = "https://www.facebook.com/sharer/sharer.php",
            m = "https://www.twitter.com/share",
            h = "https://www.reddit.com/submit",
            b = "https://vk.com/share.php",
            g = n(3);
        n(1008);
        n.d(t, "b", function() {
            return f
        }), n.d(t, "a", function() {
            return v
        });
        var f;
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy"
        }(f || (f = {}));
        var v = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.isLink() ? l.createElement("a", o.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(g._39)(n.props)), n.renderIcon()) : l.createElement("button", o.__assign({
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
                    e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(u.a)(n.getUrl()), n.setState({
                        isCopied: !0
                    })
                }, n.renderIcon = function() {
                    var e = n.getAssetFromType();
                    return l.createElement(g.U, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, l.createElement(g._8, {
                        asset: e,
                        width: 30,
                        height: 30
                    }))
                }, n.isLink = function() {
                    return n.props.type !== f.Copy
                }, n.getTooltipFromType = function() {
                    switch (n.props.type) {
                        case f.Twitter:
                            return "Twitter";
                        case f.Reddit:
                            return "Reddit";
                        case f.Facebook:
                            return "Facebook";
                        case f.VKontakte:
                            return "VKontakte";
                        case f.Copy:
                            return n.state.isCopied ? Object(c.d)("Copied", "SocialButton") : Object(c.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case f.Twitter:
                            return g._9.Twitter;
                        case f.Facebook:
                            return g._9.Facebook;
                        case f.VKontakte:
                            return g._9.VKontakte;
                        case f.Reddit:
                            return g._9.Reddit;
                        case f.Copy:
                        default:
                            return g._9.Copy
                    }
                }, n.addSocialClassModifier = function(e) {
                    switch (n.props.type) {
                        case f.Twitter:
                            return e + "--twitter";
                        case f.Reddit:
                            return e + "--reddit";
                        case f.Facebook:
                            return e + "--facebook";
                        case f.VKontakte:
                            return e + "--vkontakte";
                        case f.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, n.getLinkTarget = function() {
                    var e = n.props,
                        t = e.text,
                        o = e.type,
                        l = n.getUrl(),
                        c = t || "";
                    switch (o) {
                        case f.Reddit:
                            return r(l, c);
                        case f.VKontakte:
                            return s(l);
                        case f.Facebook:
                            return i(l);
                        case f.Twitter:
                            return a(l, c);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return o.__extends(t, e), t.prototype.render = function() {
                return l.createElement(g.U, {
                    className: "social-button"
                }, l.createElement(g._30, {
                    label: this.getTooltipFromType(),
                    direction: g._32.Top
                }, this.renderLink()))
            }, t
        }(l.Component)
    },
    971: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GiftSubscribeButton_Gift_Eligibility"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "recipientLogin"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "subProductId"
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
                                    value: "recipientLogin"
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
                                            value: "canGift"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "product"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "subProductId"
                                                }
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
            }],
            loc: {
                start: 0,
                end: 195
            }
        };
        n.loc.source = {
            body: "query GiftSubscribeButton_Gift_Eligibility($recipientLogin: String, $subProductId: String!) {\n  user(login: $recipientLogin) {\n    id\n    self {\n      canGift(product: $subProductId)\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    972: function(e, t) {},
    973: function(e, t) {},
    974: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SubscribeButton_Promotion"
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
                                    value: "subscriptionProducts"
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
                                                    value: "isEligibleForDiscount"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "newPrice"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "oldPrice"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "discountType"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "discountType"
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
                end: 246
            }
        };
        n.loc.source = {
            body: "query ChannelPage_SubscribeButton_Promotion($login: String!) {\n  user(login: $login) {\n    id\n    subscriptionProducts {\n      id\n      self {\n\t\t\t\tisEligibleForDiscount\n\t\t\t\tnewPrice\n\t\t\t\toldPrice\n\t\t\t\tdiscountType\n\t\t\t\tdiscountType\n\t\t\t}\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    975: function(e, t) {},
    976: function(e, t) {},
    977: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SubscribeButton_User"
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
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "subscriptionProducts"
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
                                            value: "emoteSetID"
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
                                            value: "emotes"
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
                                            value: "canPrimeSubscribe"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "subscriptionBenefit"
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
                                                    value: "purchasedWithPrime"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "tier"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "endsAt"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "paidUpgrade"
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
                                                            value: "startsAt"
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
                                                    value: "gift"
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
                                                            value: "isGift"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "gifter"
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
                                                                    value: "displayName"
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
                                    value: "hasPrime"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 673
            }
        };
        n.loc.source = {
            body: "query ChannelPage_SubscribeButton_User($login: String!) {\n  user(login: $login) {\n    id\n    login\n    displayName\n    subscriptionProducts {\n      id\n      price\n      url\n      emoteSetID\n      displayName\n      name\n      emotes {\n        id\n      }\n    }\n    self {\n      canPrimeSubscribe\n      subscriptionBenefit {\n        id\n        purchasedWithPrime\n        tier\n        endsAt\n        paidUpgrade {\n          price\n          startsAt\n        }\n        gift {\n          isGift\n          gifter {\n            id\n            displayName\n          }\n        }\n      }\n    }\n  }\n  currentUser {\n    id\n    login\n    hasPrime\n  }\n  requestInfo {\n    countryCode\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    978: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = Math.floor(e / 3600),
                n = Math.floor((e - 3600 * t) / 60),
                i = e - 3600 * t - 60 * n;
            return t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), i < 10 && (i = "0" + i), t + "h" + n + "m" + i + "s"
        }

        function a(e) {
            return "" === e ? "" : e.startsWith("v") ? e : "v" + e
        }
        t.b = i, t.a = a
    },
    979: function(e, t, n) {
        "use strict";
        var i = n(1),
            a = n(2),
            r = n(268),
            s = n(405),
            o = n(3),
            l = (n(1003), {
                themed: !0,
                dark: {
                    "1x": r.a + "/dark/animated/1/cheertutorial.gif"
                },
                light: {
                    "1x": r.a + "/light/animated/1/cheertutorial.gif"
                }
            }),
            c = function() {
                return i.createElement(o.U, {
                    display: o.H.Flex,
                    padding: {
                        top: 5
                    },
                    flexGrow: 1,
                    flexDirection: o.J.Column,
                    justifyContent: o.T.Center,
                    alignItems: o.c.Center
                }, i.createElement(o._21, {
                    type: o._26.H4,
                    bold: !0
                }, i.createElement(s.a, {
                    className: "cheermote-help__tutorial-image",
                    sources: l
                }), Object(a.d)("How to Cheer", "Bits--CheermoteHelp")), i.createElement("p", {
                    className: "t-bits-card__contents-body t-bits-card__contents-body--narrow"
                }, Object(a.d)('Type "cheer" + the number of Bits you want to Cheer.', "Bits--CheermoteHelp")))
            };
        n.d(t, "a", function() {
            return c
        })
    },
    989: function(e, t, n) {
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
    992: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "WatchAdModal_Redeeem"
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
                                value: "RedeemTrueXAdInput"
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
                            value: "redeemTrueXAd"
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
                                    value: "grantedBits"
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
                end: 114
            }
        };
        n.loc.source = {
            body: "mutation WatchAdModal_Redeeem($input:RedeemTrueXAdInput!) {\n  redeemTrueXAd(input:$input) {\n    grantedBits\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    993: function(e, t) {},
    994: function(e, t) {},
    995: function(e, t) {},
    996: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Bits_BuyCard_Offers"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "withChannel"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "isLoggedIn"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "channelLogin"
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
                            value: "bitsOffers"
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
                                        value: "isLoggedIn"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "bitsOffersFragment"
                                },
                                directives: []
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
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "include"
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
                                        value: "isLoggedIn"
                                    }
                                }
                            }]
                        }],
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
                                    value: "idSHA1"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsBalance"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsOffers"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "bitsOffersFragment"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
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
                                value: "login"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "channelLogin"
                                }
                            }
                        }],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "include"
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
                                        value: "withChannel"
                                    }
                                }
                            }]
                        }],
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
                                    value: "cheer"
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
                                            value: "settings"
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
                                                    value: "cheerMinimumBits"
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
                end: 528
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/bits/models/bits-offers-fragment.gql"\n\nquery Bits_BuyCard_Offers($withChannel: Boolean!, $isLoggedIn: Boolean!, $channelLogin: String!) {\n  bitsOffers @skip(if: $isLoggedIn) {\n    ...bitsOffersFragment\n  }\n  currentUser @include(if: $isLoggedIn) {\n    id\n    idSHA1\n    bitsBalance\n    bitsOffers {\n      ...bitsOffersFragment\n    }\n  }\n  user(login: $channelLogin) @include(if: $withChannel) {\n    id\n    displayName\n    cheer {\n      id\n      settings {\n        cheerMinimumBits\n      }\n    }\n  }\n}\n',
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
        }(n(962).definitions)), e.exports = i
    },
    997: function(e, t) {},
    998: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && "v" === e.charAt(0) ? e.substring(1) : e
        }
        t.a = i
    }
});
//# sourceMappingURL=pages.event-landing-page-ad66fd975db03022fd1bade9e053a99b.js.map