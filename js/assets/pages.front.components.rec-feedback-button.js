(window.webpackJsonp = window.webpackJsonp || []).push([
    [147], {
        GyBV: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                i = n("eJ65"),
                c = n("Ue10"),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            e.preventDefault(), e.stopPropagation(), t.props.openModal()
                        }, t.onToggle = function(e) {
                            !e && t.props.onMenuOpen && t.props.onMenuOpen()
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(i.a, {
                            preventDefault: !0,
                            stopPropagation: !0,
                            onToggle: this.onToggle
                        }, r.createElement(c.A, {
                            icon: c.tb.More,
                            size: c.B.Small
                        }), r.createElement(c.Y, {
                            direction: c.v.TopRight,
                            size: c.w.Small,
                            items: [{
                                title: Object(a.d)("I am not interested in this recommendation", "RecFeedbackButton"),
                                onClick: this.onClick,
                                figure: {
                                    icon: c.tb.VisibilityHidden
                                }
                            }]
                        }))
                    }, t
                }(r.Component),
                d = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(c.z, {
                            type: c.F.Text,
                            onClick: this.props.openModal,
                            size: c.D.Small
                        }, Object(a.d)("Not interested?", "RecFeedbackButton"))
                    }, t
                }(r.Component),
                l = n("/MKj"),
                p = n("fvjX"),
                u = n("aCAx"),
                m = n("yR8l"),
                b = n("geRD"),
                k = n("DMoW"),
                f = n("yI6f"),
                h = n("kRI/"),
                I = n("3lt/"),
                g = n("M8Tb");
            var v = function(e) {
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
                                o = null === n ? null : parseInt(n, 10);
                            t.setState({
                                selectedReasonIndex: o
                            })
                        }, t.submitFeedback = function() {
                            var e = t.getCurrentChoiceData(),
                                n = e.contentID,
                                o = e.contentType,
                                r = e.feedbackType,
                                a = e.selectedReason;
                            if (a)
                                if (n && o && r) {
                                    var i = Object(b.a)({
                                            category: r,
                                            itemID: n,
                                            itemType: function(e) {
                                                switch (e) {
                                                    case f.b.Shelf:
                                                        return k.M.SHELF;
                                                    case f.b.Game:
                                                        return k.M.CATEGORY;
                                                    case f.b.Live:
                                                        return k.M.CHANNEL;
                                                    case f.b.Vod:
                                                        return k.M.VOD;
                                                    case f.b.Clip:
                                                        return k.M.UNSPECIFIED;
                                                    default:
                                                        return e
                                                }
                                            }(o),
                                            sourceItemPage: I.PageviewMedium.TwitchHome,
                                            sourceItemRequestID: t.props.sourceItemRequestID || "",
                                            sourceItemTrackingID: t.props.sourceItemTrackingID || ""
                                        }),
                                        c = t.props.addFeedback(i);
                                    t.props.trackRecFeedbackClickStep({
                                        clickStep: h.a.Submit,
                                        feedbackAction: h.b.Add,
                                        feedbackReason: r,
                                        feedbackedItemID: n,
                                        feedbackType: o
                                    }), t.props.hideContent(c), t.props.closeModal()
                                } else {
                                    var s = "Missing content id for reason: " + a + ", type: " + r + ", content: " + o;
                                    t.logger.error(new Error(s), s)
                                }
                            else t.setState({
                                showError: !0
                            })
                        }, t.getCurrentChoiceData = function() {
                            var e = t.state.selectedReasonIndex;
                            if (null === e) return {};
                            var n = t.props.feedbackReasons[e],
                                o = n.feedbackType,
                                r = n.contentType;
                            return {
                                contentID: t.contentTypeToIDMapping(r),
                                contentType: r,
                                feedbackType: o,
                                selectedReason: n
                            }
                        }, t.closeModal = function() {
                            t.props.closeModal(), t.props.trackRecFeedbackClickStep({
                                clickStep: h.a.Close,
                                feedbackAction: null,
                                feedbackReason: null,
                                feedbackedItemID: null,
                                feedbackType: null
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return r.createElement(c.ab, {
                            title: Object(a.d)("Not interested? Tell us more...", "RecFeedbackModal"),
                            onCloseButtonClick: this.closeModal,
                            size: c.bb.Medium,
                            primaryButtonProps: {
                                children: Object(a.d)("Done", "RecFeedbackModal"),
                                size: c.D.Large,
                                onClick: this.submitFeedback
                            }
                        }, r.createElement(c.Eb, {
                            borderBottom: !0,
                            padding: {
                                top: 2,
                                x: 2
                            }
                        }, r.createElement(c.W, {
                            type: c.Vb.Span,
                            fontSize: c.Ca.Size4
                        }, this.props.feedbackReasons.map(function(t, n) {
                            return r.createElement(c.Xa, {
                                key: t.text,
                                margin: {
                                    bottom: .5
                                }
                            }, r.createElement(c.pb, {
                                label: t.text,
                                checked: e.state.selectedReasonIndex === n,
                                onChange: e.onRadioChange,
                                value: n.toString(),
                                error: e.state.showError
                            }))
                        })), r.createElement(c.Xa, {
                            margin: {
                                y: .5
                            },
                            visibility: this.state.showError ? c.gc.Visible : c.gc.Hidden,
                            "data-test-selector": "rec-feedback-modal-error"
                        }, r.createElement(c.W, {
                            color: c.O.Error
                        }, Object(a.d)("Please select a reason", "RecFeedbackModalSelection")))))
                    }, t.prototype.contentTypeToIDMapping = function(e) {
                        switch (e) {
                            case f.b.Shelf:
                                return this.props.shelfID;
                            case f.b.Game:
                                return this.props.categoryID;
                            case f.b.Live:
                                return this.props.channelID;
                            case f.b.Vod:
                                return this.props.vodID;
                            case f.b.Clip:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(r.Component),
                D = Object(m.a)(g, {
                    name: "addFeedback"
                })(v);
            var y = Object(l.connect)(null, function(e) {
                    return Object(p.bindActionCreators)({
                        closeModal: u.c
                    }, e)
                })(D),
                R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openModal = function() {
                            t.props.showModal(y, {
                                shelfID: t.props.shelfID,
                                channelID: t.props.channelID,
                                vodID: t.props.vodID,
                                categoryID: t.props.categoryID,
                                feedbackReasons: t.props.feedbackReasons,
                                hideContent: t.props.hideContent,
                                trackRecFeedbackClickStep: t.props.trackRecFeedbackClickStep,
                                sourceItemRequestID: t.props.sourceItemRequestID,
                                sourceItemTrackingID: t.props.sourceItemTrackingID
                            }), t.props.onModalOpen()
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return this.props.isShelf ? r.createElement(d, {
                            openModal: this.openModal
                        }) : r.createElement(s, {
                            openModal: this.openModal,
                            onMenuOpen: this.props.onMenuOpen
                        })
                    }, t
                }(r.Component);
            var C = Object(l.connect)(null, function(e) {
                return Object(p.bindActionCreators)({
                    showModal: u.d
                }, e)
            })(R);
            n.d(t, "RecFeedbackButtonComponent", function() {
                return R
            }), n.d(t, "RecFeedbackButton", function() {
                return C
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