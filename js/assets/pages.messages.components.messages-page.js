webpackJsonp([31], {
    Y1tk: function(e, t, n) {
        e.exports = n.p + "assets/deprecated-bb746356673a86291107f8b330c6391d.png"
    },
    jWoj: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n("RH2O"),
            a = n("2KeS"),
            o = n("+xm8"),
            r = n("f2i/"),
            i = n("Aj/L"),
            c = n("TToO"),
            l = n("GiK3"),
            d = n("6sO2"),
            g = n("Y1tk"),
            u = n.n(g),
            h = n("Odds"),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.initiateDownload = function() {
                        var e = document.createElement("a");
                        e.href = t.props.fileURL, e.download = "twitch-message-history", e.target = "_blank", e.setAttribute("style", "visibility: hidden"), document.body.appendChild(e), e.click(), document.body.removeChild(e)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(h._8, {
                        className: "file-download-button"
                    }, l.createElement(h.v, {
                        icon: h._25.Download,
                        type: h.B.Default,
                        onClick: this.initiateDownload
                    }, Object(d.d)("Download", "FileDownload")))
                }, t
            }(l.Component),
            p = n("yWCw"),
            y = n("w9tK"),
            f = n("9u8h"),
            _ = n("CSlQ"),
            b = "deprecated_messages_download_enabled";

        function E() {
            return d.b.get(b, !1)
        }
        n("mdIJ");
        var w = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    errorLoadingMessageHistory: !1,
                    hasLoadedMessageHistory: !E()
                }, t.fetchMessageHistory = function() {
                    return c.__awaiter(t, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.sessionUser ? [4, f.a.get("/kraken/users/" + this.props.sessionUser.id + "/messages")] : [2, null];
                                case 1:
                                    return 200 === (e = t.sent()).status ? this.setState({
                                        errorLoadingMessageHistory: !1,
                                        fileURL: e.body && e.body.url,
                                        hasLoadedMessageHistory: !0
                                    }) : this.setState({
                                        errorLoadingMessageHistory: !0,
                                        hasLoadedMessageHistory: !0
                                    }), [2]
                            }
                        })
                    })
                }, t
            }
            return c.__extends(t, e), t.prototype.componentDidMount = function() {
                this.props.sessionUser && E() ? this.fetchMessageHistory() : this.props.latencyTracking.reportInteractive()
            }, t.prototype.componentDidUpdate = function(e, t) {
                this.state.hasLoadedMessageHistory && !t.hasLoadedMessageHistory && this.props.latencyTracking.reportInteractive()
            }, t.prototype.render = function() {
                return void 0 === this.props.sessionUser ? (this.props.login(), l.createElement(p.a, {
                    message: Object(d.d)("You must be logged in to view this page", "MessagesPage")
                })) : this.state.errorLoadingMessageHistory ? l.createElement(p.a, {
                    message: Object(d.d)("Oops, something went wrong.", "MessagesPage")
                }) : l.createElement(h._8, {
                    className: "messages-page",
                    alignItems: h.c.Center,
                    display: h.R.Flex,
                    fullWidth: !0,
                    fullHeight: !0,
                    justifyContent: h._7.Center,
                    position: h._15.Absolute
                }, l.createElement(h._8, {
                    alignItems: h.c.Center,
                    className: "messages-page__body",
                    display: h.R.Flex,
                    flexDirection: h.T.Column
                }, !this.state.hasLoadedMessageHistory && this.renderPlaceholder(), this.state.hasLoadedMessageHistory && this.renderLoadedBody()))
            }, t.prototype.renderPlaceholder = function() {
                return l.createElement(l.Fragment, null, l.createElement(h._8, {
                    justifyContent: h._7.Center
                }, l.createElement(h._14, {
                    height: 130,
                    width: 180
                })), l.createElement(h._8, {
                    margin: {
                        bottom: 1,
                        top: 4
                    }
                }, l.createElement(h._14, {
                    height: 15,
                    width: 370
                }), l.createElement(h._8, {
                    margin: {
                        y: 1
                    }
                }), l.createElement(h._14, {
                    height: 15,
                    width: 380
                }), l.createElement(h._8, {
                    margin: {
                        y: 1
                    }
                }), l.createElement(h._14, {
                    height: 15,
                    width: 65
                }), l.createElement(h._8, {
                    margin: {
                        y: 2
                    }
                }), l.createElement(h._14, {
                    height: 15,
                    width: 310
                }), l.createElement(h._8, {
                    margin: {
                        y: 2
                    }
                }), l.createElement(h._14, {
                    height: 15,
                    width: 390
                }), l.createElement(h._8, {
                    margin: {
                        y: 1
                    }
                }), l.createElement(h._14, {
                    height: 15,
                    width: 300
                })), l.createElement(h._8, {
                    justifyContent: h._7.Center
                }, l.createElement(h._14, {
                    height: 25,
                    width: 100
                })))
            }, t.prototype.renderLoadedBody = function() {
                return l.createElement(l.Fragment, null, l.createElement(h.N, {
                    src: u.a,
                    alt: Object(d.d)("Envelope fading into smoke", "MessagesPage")
                }), l.createElement(h._8, {
                    margin: {
                        y: 1
                    }
                }, l.createElement(h.Q, {
                    fontSize: h.V.Size5
                }, Object(d.d)("Messages have been deprecated due to legacy technology. This allows us to work on new ways for you to contact others on Twitch!", "MessagesPage")), l.createElement(h._8, {
                    margin: {
                        y: .5
                    }
                }), this.getActionCopy(), l.createElement(h._8, {
                    margin: {
                        y: .5
                    }
                }), l.createElement(h.Q, {
                    fontSize: h.V.Size5
                }, Object(d.d)('Streamers: You can still contact all your subscribers by clicking "Send e-mail to my subs" from the Channel Analytics page!', "MessagesPage"))), this.getDownloadContent())
            }, t.prototype.getActionCopy = function() {
                return E() ? l.createElement(h.Q, {
                    fontSize: h.V.Size5
                }, Object(d.d)("You can download your old messages until August 1.", "MessagesPage")) : l.createElement(h.Q, {
                    fontSize: h.V.Size5
                }, Object(d.d)("Check back on May 11 to download your old messages.", "MessagesPage"))
            }, t.prototype.getDownloadContent = function() {
                return E() ? this.state.fileURL ? l.createElement(m, {
                    fileURL: this.state.fileURL
                }) : l.createElement(h.Q, {
                    bold: !0
                }, Object(d.d)("You have no messages to download.", "MessagesPage")) : null
            }, t = c.__decorate([Object(_.d)("MessagesPage", {
                destination: y.a.MessagesPage
            })], t)
        }(l.Component);
        var M = Object(s.b)(function(e) {
            return {
                sessionUser: Object(i.c)(e)
            }
        }, function(e) {
            return Object(a.b)({
                login: function() {
                    return Object(r.f)(o.a.MessagesPage)
                }
            }, e)
        })(w);
        n.d(t, "MessagesPage", function() {
            return M
        })
    },
    mdIJ: function(e, t) {}
});
//# sourceMappingURL=pages.messages.components.messages-page-5d7f77c04f04ae1056ae14458ef77892.js.map