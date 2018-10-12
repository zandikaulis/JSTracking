(window.webpackJsonp = window.webpackJsonp || []).push([
    [136], {
        FL2a: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                o = n("q1tI"),
                a = n("eJ65"),
                s = n("/MKj"),
                c = n("fvjX"),
                i = n("aCAx"),
                l = n("/7QA"),
                d = n("cZKs"),
                p = n("jtyt"),
                u = n("QfIU"),
                h = n("Ue10");
            var f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedReasonIndex: null,
                        showError: !1
                    }, t.logger = l.o.logger.withCategory("recs-feedback"), t.onRadioChange = function(e) {
                        t.state.showError && t.setState({
                            showError: !1
                        });
                        var n = e.currentTarget.getAttribute("value"),
                            r = null === n ? null : parseInt(n, 10);
                        t.setState({
                            selectedReasonIndex: r
                        })
                    }, t.submitFeedback = function() {
                        var e = t.state.selectedReasonIndex;
                        if (null !== e) {
                            var n = t.props.feedbackReasons[e],
                                r = n.feedbackType,
                                o = n.contentType,
                                a = t.contentTypeToIDMapping(o);
                            if (a) {
                                var s = Promise.resolve(Object(u.b)());
                                t.props.hideContent(s), t.props.closeModal()
                            } else {
                                var c = "Missing content id for reason: " + n + ", type: " + r + ", content: " + o;
                                t.logger.error(new Error(c), c)
                            }
                        } else t.setState({
                            showError: !0
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return o.createElement(h.xb, {
                        padding: 2,
                        background: h.r.Alt
                    }, o.createElement(h.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(h.V, {
                        type: h.Nb.H2
                    }, Object(l.d)("Tell us more...", "RecFeedbackModal"))), o.createElement(h.V, {
                        type: h.Nb.Span,
                        fontSize: h.Aa.Size4
                    }, this.props.feedbackReasons.map(function(t, n) {
                        return o.createElement(h.Va, {
                            key: t.text,
                            margin: {
                                bottom: .5
                            }
                        }, o.createElement(h.jb, {
                            label: t.text,
                            checked: e.state.selectedReasonIndex === n,
                            onChange: e.onRadioChange,
                            value: n.toString()
                        }))
                    })), o.createElement(h.Va, {
                        margin: {
                            top: 2
                        }
                    }, o.createElement(h.z, {
                        onClick: this.submitFeedback,
                        "data-test-selector": "rec-feedback-modal-submit"
                    }, Object(l.d)("Done", "RecFeedbackModal"))), this.state.showError && o.createElement(h.Va, {
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "rec-feedback-modal-error"
                    }, o.createElement(h.V, {
                        color: h.O.Error
                    }, Object(l.d)("Please select a reason", "RecFeedbackModal"))), o.createElement(d.a, null))
                }, t.prototype.contentTypeToIDMapping = function(e) {
                    switch (e) {
                        case p.a.Shelf:
                            return this.props.shelfID;
                        case p.a.Category:
                            return this.props.categoryID;
                        case p.a.Channel:
                            return this.props.channelID;
                        case p.a.Vod:
                            return this.props.vodID;
                        default:
                            return e
                    }
                }, t
            }(o.Component);
            var b = Object(s.connect)(null, function(e) {
                    return Object(c.bindActionCreators)({
                        closeModal: i.c
                    }, e)
                })(f),
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function() {
                            t.props.showModal(b, {
                                shelfID: t.props.shelfID,
                                channelID: t.props.channelID,
                                vodID: t.props.vodID,
                                categoryID: t.props.categoryID,
                                feedbackReasons: t.props.feedbackReasons,
                                hideContent: t.props.hideContent
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(h.Sa, {
                            onClick: this.onClick
                        }, o.createElement(h.Va, {
                            padding: 1,
                            display: h.W.Flex,
                            alignItems: h.f.Center
                        }, o.createElement(h.Va, {
                            margin: {
                                right: 1
                            },
                            display: h.W.Flex,
                            alignItems: h.f.Center
                        }, o.createElement(h.mb, {
                            asset: h.nb.Halt
                        })), Object(l.d)("I am not interested in this recommendation", "RecFeedbackDropdown")))
                    }, t
                }(o.Component);
            var I = Object(s.connect)(null, function(e) {
                    return Object(c.bindActionCreators)({
                        showModal: i.d
                    }, e)
                })(m),
                g = n("j4u0"),
                y = Object(g.a)(),
                k = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return y() ? o.createElement(a.a, {
                            display: h.W.InlineBlock
                        }, o.createElement(h.A, {
                            icon: h.nb.NavMore
                        }), o.createElement(h.u, {
                            size: h.w.Large,
                            direction: h.v.BottomCenter
                        }, o.createElement(I, {
                            shelfID: this.props.shelfID,
                            channelID: this.props.channelID,
                            vodID: this.props.vodID,
                            categoryID: this.props.categoryID,
                            feedbackReasons: this.props.feedbackReasons,
                            hideContent: this.props.hideContent
                        }))) : null
                    }, t
                }(o.Component);
            n.d(t, "RecFeedbackDots", function() {
                return k
            })
        },
        QfIU: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return a
            });
            n("mrSG");
            var r = n("jtyt");

            function o() {
                return {
                    id: "fake-id",
                    userID: "fake user",
                    itemID: "fake item id",
                    itemType: r.a.Category,
                    category: r.b.NotInterested,
                    lastUpdated: "2017-08-31T04:21:03Z"
                }
            }

            function a(e) {
                return new Array(e).fill(o())
            }
        }
    }
]);