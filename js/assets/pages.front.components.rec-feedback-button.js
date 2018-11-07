(window.webpackJsonp = window.webpackJsonp || []).push([
    [146], {
        GyBV: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("mrSG"),
                a = n("q1tI"),
                r = n("/7QA"),
                i = n("eJ65"),
                c = n("Ue10"),
                d = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            e.preventDefault(), e.stopPropagation(), t.props.openModal()
                        }, t.onToggle = function(e) {
                            !e && t.props.onMenuOpen && t.props.onMenuOpen()
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(i.a, {
                            preventDefault: !0,
                            stopPropagation: !0,
                            onToggle: this.onToggle
                        }, a.createElement(c.A, {
                            icon: c.rb.More,
                            size: c.B.Small
                        }), a.createElement(c.Y, {
                            direction: c.v.TopRight,
                            items: [{
                                title: Object(r.d)("I am not interested in this recommendation", "RecFeedbackButton"),
                                onClick: this.onClick,
                                figure: {
                                    icon: c.rb.VisibilityHidden
                                }
                            }]
                        }))
                    }, t
                }(a.Component),
                s = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(c.z, {
                            type: c.F.Text,
                            onClick: this.props.openModal
                        }, Object(r.d)("Not interested?", "RecFeedbackButton"))
                    }, t
                }(a.Component),
                l = n("/MKj"),
                p = n("fvjX"),
                u = n("aCAx"),
                b = n("yR8l"),
                m = n("geRD"),
                k = n("DMoW"),
                f = n("yI6f"),
                h = n("kRI/"),
                g = n("3lt/"),
                v = n("M8Tb");
            var y = function(e) {
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
                                o = null === n ? null : parseInt(n, 10);
                            t.setState({
                                selectedReasonIndex: o
                            })
                        }, t.submitFeedback = function() {
                            var e = t.getCurrentChoiceData(),
                                n = e.contentID,
                                o = e.contentType,
                                a = e.feedbackType,
                                r = e.selectedReason;
                            if (r)
                                if (n && o && a) {
                                    var i = Object(m.a)({
                                            category: a,
                                            itemID: n,
                                            itemType: function(e) {
                                                switch (e) {
                                                    case f.b.Shelf:
                                                        return k.K.SHELF;
                                                    case f.b.Game:
                                                        return k.K.CATEGORY;
                                                    case f.b.Live:
                                                        return k.K.CHANNEL;
                                                    case f.b.Vod:
                                                        return k.K.VOD;
                                                    case f.b.Clip:
                                                        return k.K.UNSPECIFIED;
                                                    default:
                                                        return e
                                                }
                                            }(o),
                                            sourceItemPage: g.PageviewMedium.TwitchHome,
                                            sourceItemRequestID: "todo"
                                        }),
                                        c = t.props.addFeedback(i);
                                    t.props.trackRecFeedbackClickStep({
                                        clickStep: h.a.Submit,
                                        feedbackAction: h.b.Add,
                                        feedbackReason: a,
                                        feedbackedItemID: n,
                                        feedbackType: o
                                    }), t.props.hideContent(c), t.props.closeModal()
                                } else {
                                    var d = "Missing content id for reason: " + r + ", type: " + a + ", content: " + o;
                                    t.logger.error(new Error(d), d)
                                }
                            else t.setState({
                                showError: !0
                            })
                        }, t.getCurrentChoiceData = function() {
                            var e = t.state.selectedReasonIndex;
                            if (null === e) return {};
                            var n = t.props.feedbackReasons[e],
                                o = n.feedbackType,
                                a = n.contentType;
                            return {
                                contentID: t.contentTypeToIDMapping(a),
                                contentType: a,
                                feedbackType: o,
                                selectedReason: n
                            }
                        }, t.closeModal = function() {
                            t.props.closeModal();
                            var e = t.getCurrentChoiceData(),
                                n = e.contentID,
                                o = e.contentType,
                                a = e.feedbackType;
                            t.props.trackRecFeedbackClickStep({
                                clickStep: h.a.Close,
                                feedbackAction: null,
                                feedbackReason: a || null,
                                feedbackedItemID: n || null,
                                feedbackType: o || null
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return a.createElement(c.ab, {
                            title: Object(r.d)("Not interested? Tell us more...", "RecFeedbackModal"),
                            onCloseButtonClick: this.closeModal,
                            size: c.bb.Medium,
                            primaryButtonProps: {
                                children: Object(r.d)("Done", "RecFeedbackModal"),
                                size: c.D.Large,
                                onClick: this.submitFeedback
                            }
                        }, a.createElement(c.Cb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 2,
                                x: 2
                            }
                        }, a.createElement(c.Xa, {
                            margin: {
                                y: .5
                            },
                            visibility: this.state.showError ? c.ec.Visible : c.ec.Hidden,
                            "data-test-selector": "rec-feedback-modal-error"
                        }, a.createElement(c.W, {
                            color: c.O.Error
                        }, Object(r.d)("Please select a reason", "RecFeedbackModal"))), a.createElement(c.W, {
                            type: c.Tb.Span,
                            fontSize: c.Ca.Size4
                        }, this.props.feedbackReasons.map(function(t, n) {
                            return a.createElement(c.Xa, {
                                key: t.text,
                                margin: {
                                    bottom: .5
                                }
                            }, a.createElement(c.nb, {
                                label: t.text,
                                checked: e.state.selectedReasonIndex === n,
                                onChange: e.onRadioChange,
                                value: n.toString()
                            }))
                        }))))
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
                }(a.Component),
                C = Object(b.a)(v, {
                    name: "addFeedback"
                })(y);
            var I = Object(l.connect)(null, function(e) {
                    return Object(p.bindActionCreators)({
                        closeModal: u.c
                    }, e)
                })(C),
                R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openModal = function() {
                            t.props.showModal(I, {
                                shelfID: t.props.shelfID,
                                channelID: t.props.channelID,
                                vodID: t.props.vodID,
                                categoryID: t.props.categoryID,
                                feedbackReasons: t.props.feedbackReasons,
                                hideContent: t.props.hideContent,
                                trackRecFeedbackClickStep: t.props.trackRecFeedbackClickStep
                            }), t.props.onModalOpen()
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return this.props.isShelf ? a.createElement(s, {
                            openModal: this.openModal
                        }) : a.createElement(d, {
                            openModal: this.openModal,
                            onMenuOpen: this.props.onMenuOpen
                        })
                    }, t
                }(a.Component);
            var D = Object(l.connect)(null, function(e) {
                return Object(p.bindActionCreators)({
                    showModal: u.d
                }, e)
            })(R);
            n.d(t, "RecFeedbackButtonComponent", function() {
                return R
            }), n.d(t, "RecFeedbackButton", function() {
                return D
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