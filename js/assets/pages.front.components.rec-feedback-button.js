(window.webpackJsonp = window.webpackJsonp || []).push([
    [146], {
        GyBV: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                o = n("q1tI"),
                r = n("/7QA"),
                c = n("/MKj"),
                i = n("fvjX"),
                d = n("aCAx"),
                s = n("cZKs"),
                l = n("yR8l"),
                u = n("geRD"),
                p = n("DMoW"),
                b = n("yI6f"),
                k = n("kRI/"),
                m = n("3lt/"),
                f = n("Ue10"),
                h = n("M8Tb");
            var g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            selectedReasonIndex: null,
                            showError: !1
                        }, t.logger = r.p.logger.withCategory("recs-feedback"), t.onRadioChange = function(e) {
                            t.state.showError && t.setState({
                                showError: !1
                            });
                            var n = e.currentTarget.getAttribute("value"),
                                a = null === n ? null : parseInt(n, 10);
                            t.setState({
                                selectedReasonIndex: a
                            })
                        }, t.submitFeedback = function() {
                            var e = t.getCurrentChoiceData(),
                                n = e.contentID,
                                a = e.contentType,
                                o = e.feedbackType,
                                r = e.selectedReason;
                            if (r)
                                if (n && a && o) {
                                    var c = Object(u.a)({
                                            category: o,
                                            itemID: n,
                                            itemType: function(e) {
                                                switch (e) {
                                                    case b.b.Shelf:
                                                        return p.K.SHELF;
                                                    case b.b.Game:
                                                        return p.K.CATEGORY;
                                                    case b.b.Live:
                                                        return p.K.CHANNEL;
                                                    case b.b.Vod:
                                                        return p.K.VOD;
                                                    case b.b.Clip:
                                                        return p.K.UNSPECIFIED;
                                                    default:
                                                        return e
                                                }
                                            }(a),
                                            sourceItemPage: m.PageviewMedium.TwitchHome,
                                            sourceItemRequestID: "todo"
                                        }),
                                        i = t.props.addFeedback(c);
                                    t.props.trackRecFeedbackClickStep({
                                        clickStep: k.a.Submit,
                                        feedbackAction: k.b.Add,
                                        feedbackReason: o,
                                        feedbackedItemID: n,
                                        feedbackType: a
                                    }), t.props.hideContent(i), t.props.closeModal()
                                } else {
                                    var d = "Missing content id for reason: " + r + ", type: " + o + ", content: " + a;
                                    t.logger.error(new Error(d), d)
                                }
                            else t.setState({
                                showError: !0
                            })
                        }, t.getCurrentChoiceData = function() {
                            var e = t.state.selectedReasonIndex;
                            if (null === e) return {};
                            var n = t.props.feedbackReasons[e],
                                a = n.feedbackType,
                                o = n.contentType;
                            return {
                                contentID: t.contentTypeToIDMapping(o),
                                contentType: o,
                                feedbackType: a,
                                selectedReason: n
                            }
                        }, t.trackRecFeedbackStepClose = function() {
                            var e = t.getCurrentChoiceData(),
                                n = e.contentID,
                                a = e.contentType,
                                o = e.feedbackType;
                            t.props.trackRecFeedbackClickStep({
                                clickStep: k.a.Close,
                                feedbackAction: null,
                                feedbackReason: o || null,
                                feedbackedItemID: n || null,
                                feedbackType: a || null
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return o.createElement(f.Xa, null, o.createElement(f.Cb, {
                            background: f.r.Alt,
                            borderRadius: f.x.Large
                        }, o.createElement(f.Cb, {
                            borderBottom: !0,
                            padding: {
                                y: 2
                            },
                            textAlign: f.Pb.Center
                        }, o.createElement(f.Xa, {
                            margin: {
                                x: 5
                            }
                        }, o.createElement(f.W, {
                            type: f.Tb.H3,
                            bold: !0,
                            "data-test-selector": "rec-feedback-modal-header"
                        }, Object(r.d)("Not interested? Tell us more...", "RecFeedbackModal")))), o.createElement(f.Cb, {
                            borderBottom: !0,
                            padding: 2
                        }, o.createElement(f.W, {
                            type: f.Tb.Span,
                            fontSize: f.Ca.Size4
                        }, this.props.feedbackReasons.map(function(t, n) {
                            return o.createElement(f.Xa, {
                                key: t.text,
                                margin: {
                                    bottom: .5
                                }
                            }, o.createElement(f.nb, {
                                label: t.text,
                                checked: e.state.selectedReasonIndex === n,
                                onChange: e.onRadioChange,
                                value: n.toString()
                            }))
                        }))), o.createElement(f.Cb, {
                            display: f.X.Flex,
                            justifyContent: f.Wa.End,
                            alignItems: f.f.Center,
                            padding: 1,
                            background: f.r.Alt2,
                            borderRadius: f.x.Large
                        }, this.state.showError && o.createElement(f.Xa, {
                            margin: {
                                right: 1
                            },
                            "data-test-selector": "rec-feedback-modal-error"
                        }, o.createElement(f.W, {
                            color: f.O.Error
                        }, Object(r.d)("Please select a reason", "RecFeedbackModal"))), o.createElement(f.z, {
                            size: f.D.Large,
                            onClick: this.submitFeedback,
                            "data-test-selector": "rec-feedback-modal-submit"
                        }, Object(r.d)("Done", "RecFeedbackModal")))), o.createElement(s.a, {
                            onClose: this.trackRecFeedbackStepClose
                        }))
                    }, t.prototype.contentTypeToIDMapping = function(e) {
                        switch (e) {
                            case b.b.Shelf:
                                return this.props.shelfID;
                            case b.b.Game:
                                return this.props.categoryID;
                            case b.b.Live:
                                return this.props.channelID;
                            case b.b.Vod:
                                return this.props.vodID;
                            case b.b.Clip:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(o.Component),
                C = Object(l.a)(h, {
                    name: "addFeedback"
                })(g);
            var v = Object(c.connect)(null, function(e) {
                    return Object(i.bindActionCreators)({
                        closeModal: d.c
                    }, e)
                })(C),
                R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            e.preventDefault(), e.stopPropagation(), t.props.showModal(v, {
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(f.Wb, {
                            label: Object(r.d)("Not interested?", "RecFeedbackButton"),
                            direction: f.Yb.Right
                        }, o.createElement(f.A, {
                            icon: f.rb.VisibilityHidden,
                            size: f.B.Small,
                            onClick: this.onClick
                        }))
                    }, t
                }(o.Component);
            var y = Object(c.connect)(null, function(e) {
                return Object(i.bindActionCreators)({
                    showModal: d.d
                }, e)
            })(R);
            n.d(t, "RecFeedbackButtonComponent", function() {
                return R
            }), n.d(t, "RecFeedbackButton", function() {
                return y
            })
        },
        M8Tb: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "AddRecommendationFeedback"
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
                                    value: "AddRecommendationFeedbackInput"
                                }
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "addRecommendationFeedback"
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
                                    name: {
                                        kind: "Name",
                                        value: "recommendationFeedback"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 154
                }
            };
            n.loc.source = {
                body: "mutation AddRecommendationFeedback($input: AddRecommendationFeedbackInput!) {\naddRecommendationFeedback(input: $input) {\nrecommendationFeedback {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        }
    }
]);