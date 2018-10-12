(window.webpackJsonp = window.webpackJsonp || []).push([
    [135], {
        EJJy: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                o = n("q1tI"),
                a = n("/7QA"),
                c = n("/MKj"),
                s = n("fvjX"),
                i = n("aCAx"),
                l = n("cZKs"),
                d = n("jtyt"),
                u = n("QfIU"),
                p = n("Ue10");
            var b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedReasonIndex: null,
                        showError: !1
                    }, t.logger = a.o.logger.withCategory("recs-feedback"), t.onRadioChange = function(e) {
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
                                var c = Promise.resolve(Object(u.b)());
                                t.props.hideContent(c), t.props.closeModal()
                            } else {
                                var s = "Missing content id for reason: " + n + ", type: " + r + ", content: " + o;
                                t.logger.error(new Error(s), s)
                            }
                        } else t.setState({
                            showError: !0
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return o.createElement(p.Va, null, o.createElement(p.xb, {
                        background: p.r.Alt,
                        borderRadius: p.x.Large
                    }, o.createElement(p.xb, {
                        borderBottom: !0,
                        padding: {
                            y: 2
                        },
                        textAlign: p.Jb.Center
                    }, o.createElement(p.Va, {
                        margin: {
                            x: 5
                        }
                    }, o.createElement(p.V, {
                        type: p.Nb.H3,
                        bold: !0
                    }, Object(a.d)("Not interested? Tell us more...", "RecFeedbackModal")))), o.createElement(p.xb, {
                        borderBottom: !0,
                        padding: 2
                    }, o.createElement(p.V, {
                        type: p.Nb.Span,
                        fontSize: p.Aa.Size4
                    }, this.props.feedbackReasons.map(function(t, n) {
                        return o.createElement(p.Va, {
                            key: t.text,
                            margin: {
                                bottom: .5
                            }
                        }, o.createElement(p.jb, {
                            label: t.text,
                            checked: e.state.selectedReasonIndex === n,
                            onChange: e.onRadioChange,
                            value: n.toString()
                        }))
                    }))), o.createElement(p.xb, {
                        display: p.W.Flex,
                        justifyContent: p.Ua.End,
                        alignItems: p.f.Center,
                        padding: 1,
                        background: p.r.Alt2,
                        borderRadius: p.x.Large
                    }, this.state.showError && o.createElement(p.Va, {
                        margin: {
                            right: 1
                        },
                        "data-test-selector": "rec-feedback-modal-error"
                    }, o.createElement(p.V, {
                        color: p.O.Error
                    }, Object(a.d)("Please select a reason", "RecFeedbackModal"))), o.createElement(p.z, {
                        size: p.D.Large,
                        onClick: this.submitFeedback,
                        "data-test-selector": "rec-feedback-modal-submit"
                    }, Object(a.d)("Done", "RecFeedbackModal")))), o.createElement(l.a, null))
                }, t.prototype.contentTypeToIDMapping = function(e) {
                    switch (e) {
                        case d.a.Shelf:
                            return this.props.shelfID;
                        case d.a.Category:
                            return this.props.categoryID;
                        case d.a.Channel:
                            return this.props.channelID;
                        case d.a.Vod:
                            return this.props.vodID;
                        default:
                            return e
                    }
                }, t
            }(o.Component);
            var f = Object(c.connect)(null, function(e) {
                    return Object(s.bindActionCreators)({
                        closeModal: i.c
                    }, e)
                })(b),
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function() {
                            t.props.showModal(f, {
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
                        return o.createElement(p.Qb, {
                            label: Object(a.d)("Not interested?", "RecFeedbackButton"),
                            direction: p.Sb.Right
                        }, o.createElement(p.A, {
                            icon: p.nb.VisibilityHidden,
                            size: p.B.Small,
                            onClick: this.onClick
                        }))
                    }, t
                }(o.Component);
            var m = Object(c.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    showModal: i.d
                }, e)
            })(h);
            n.d(t, "RecFeedbackButtonComponent", function() {
                return h
            }), n.d(t, "RecFeedbackButton", function() {
                return m
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