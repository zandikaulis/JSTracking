(window.webpackJsonp = window.webpackJsonp || []).push([
    [136], {
        "27KN": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return c
            });
            n("mrSG");
            var r = n("Yurh"),
                o = n("yI6f");

            function a() {
                return {
                    id: "fake-id",
                    userID: "fake user",
                    itemID: "fake item id",
                    itemType: o.b.Game,
                    category: r.a.NotInterested,
                    lastUpdated: "2017-08-31T04:21:03Z"
                }
            }

            function c(e) {
                return new Array(e).fill(a())
            }
        },
        GyBV: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                o = n("q1tI"),
                a = n("/7QA"),
                c = n("/MKj"),
                s = n("fvjX"),
                i = n("aCAx"),
                l = n("cZKs"),
                d = n("27KN"),
                p = n("yI6f"),
                u = n("kRI/"),
                b = n("Ue10");
            var f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedReasonIndex: null,
                        showError: !1
                    }, t.logger = a.p.logger.withCategory("recs-feedback"), t.onRadioChange = function(e) {
                        t.state.showError && t.setState({
                            showError: !1
                        });
                        var n = e.currentTarget.getAttribute("value"),
                            r = null === n ? null : parseInt(n, 10);
                        t.setState({
                            selectedReasonIndex: r
                        })
                    }, t.submitFeedback = function() {
                        var e = t.getCurrentChoiceData(),
                            n = e.contentID,
                            r = e.contentType,
                            o = e.feedbackType,
                            a = e.selectedReason;
                        if (a)
                            if (n && r && o) {
                                var c = Promise.resolve(Object(d.b)());
                                t.props.trackRecFeedbackClickStep({
                                    clickStep: u.a.Submit,
                                    feedbackAction: u.b.Add,
                                    feedbackReason: o,
                                    feedbackedItemID: n,
                                    feedbackType: r
                                }), t.props.hideContent(c), t.props.closeModal()
                            } else {
                                var s = "Missing content id for reason: " + a + ", type: " + o + ", content: " + r;
                                t.logger.error(new Error(s), s)
                            }
                        else t.setState({
                            showError: !0
                        })
                    }, t.getCurrentChoiceData = function() {
                        var e = t.state.selectedReasonIndex;
                        if (null === e) return {};
                        var n = t.props.feedbackReasons[e],
                            r = n.feedbackType,
                            o = n.contentType;
                        return {
                            contentID: t.contentTypeToIDMapping(o),
                            contentType: o,
                            feedbackType: r,
                            selectedReason: n
                        }
                    }, t.trackRecFeedbackStepClose = function() {
                        var e = t.getCurrentChoiceData(),
                            n = e.contentID,
                            r = e.contentType,
                            o = e.feedbackType;
                        t.props.trackRecFeedbackClickStep({
                            clickStep: u.a.Close,
                            feedbackAction: null,
                            feedbackReason: o || null,
                            feedbackedItemID: n || null,
                            feedbackType: r || null
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return o.createElement(b.Xa, null, o.createElement(b.Bb, {
                        background: b.r.Alt,
                        borderRadius: b.x.Large
                    }, o.createElement(b.Bb, {
                        borderBottom: !0,
                        padding: {
                            y: 2
                        },
                        textAlign: b.Nb.Center
                    }, o.createElement(b.Xa, {
                        margin: {
                            x: 5
                        }
                    }, o.createElement(b.W, {
                        type: b.Rb.H3,
                        bold: !0
                    }, Object(a.d)("Not interested? Tell us more...", "RecFeedbackModal")))), o.createElement(b.Bb, {
                        borderBottom: !0,
                        padding: 2
                    }, o.createElement(b.W, {
                        type: b.Rb.Span,
                        fontSize: b.Ca.Size4
                    }, this.props.feedbackReasons.map(function(t, n) {
                        return o.createElement(b.Xa, {
                            key: t.text,
                            margin: {
                                bottom: .5
                            }
                        }, o.createElement(b.nb, {
                            label: t.text,
                            checked: e.state.selectedReasonIndex === n,
                            onChange: e.onRadioChange,
                            value: n.toString()
                        }))
                    }))), o.createElement(b.Bb, {
                        display: b.X.Flex,
                        justifyContent: b.Wa.End,
                        alignItems: b.f.Center,
                        padding: 1,
                        background: b.r.Alt2,
                        borderRadius: b.x.Large
                    }, this.state.showError && o.createElement(b.Xa, {
                        margin: {
                            right: 1
                        },
                        "data-test-selector": "rec-feedback-modal-error"
                    }, o.createElement(b.W, {
                        color: b.O.Error
                    }, Object(a.d)("Please select a reason", "RecFeedbackModal"))), o.createElement(b.z, {
                        size: b.D.Large,
                        onClick: this.submitFeedback,
                        "data-test-selector": "rec-feedback-modal-submit"
                    }, Object(a.d)("Done", "RecFeedbackModal")))), o.createElement(l.a, {
                        onClose: this.trackRecFeedbackStepClose
                    }))
                }, t.prototype.contentTypeToIDMapping = function(e) {
                    switch (e) {
                        case p.b.Shelf:
                            return this.props.shelfID;
                        case p.b.Game:
                            return this.props.categoryID;
                        case p.b.Live:
                            return this.props.channelID;
                        case p.b.Vod:
                            return this.props.vodID;
                        case p.b.Clip:
                            return null;
                        default:
                            return e
                    }
                }, t
            }(o.Component);
            var k = Object(c.connect)(null, function(e) {
                    return Object(s.bindActionCreators)({
                        closeModal: i.c
                    }, e)
                })(f),
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            e.preventDefault(), e.stopPropagation(), t.props.showModal(k, {
                                shelfID: t.props.shelfID,
                                channelID: t.props.channelID,
                                vodID: t.props.vodID,
                                categoryID: t.props.categoryID,
                                feedbackReasons: t.props.feedbackReasons,
                                hideContent: t.props.hideContent,
                                trackRecFeedbackClickStep: t.props.trackRecFeedbackClickStep
                            }), t.props.onClick()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(b.Ub, {
                            label: Object(a.d)("Not interested?", "RecFeedbackButton"),
                            direction: b.Wb.Right
                        }, o.createElement(b.A, {
                            icon: b.rb.VisibilityHidden,
                            size: b.B.Small,
                            onClick: this.onClick
                        }))
                    }, t
                }(o.Component);
            var h = Object(c.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    showModal: i.d
                }, e)
            })(m);
            n.d(t, "RecFeedbackButtonComponent", function() {
                return m
            }), n.d(t, "RecFeedbackButton", function() {
                return h
            })
        }
    }
]);