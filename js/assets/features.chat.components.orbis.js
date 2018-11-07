(window.webpackJsonp = window.webpackJsonp || []).push([
    [189], {
        IhlH: function(e, t, n) {},
        T3fw: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("/MKj"),
                a = n("kRBY"),
                r = n("mrSG"),
                o = n("q1tI"),
                s = n("/7QA"),
                l = n("eJ65"),
                d = n("yR8l"),
                c = n("Ue10"),
                u = n("gRl6"),
                m = (n("IhlH"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickInteraction = function(e) {
                            t.props.sendMessage(":act " + e.currentTarget.getAttribute("data-action")), t.toggleBalloonRef.toggleBalloon()
                        }, t.setToggleBalloonRef = function(e) {
                            return t.toggleBalloonRef = e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.getPresetText();
                        return this.props.isLoggedIn && 0 !== e.length ? o.createElement(c.Cb, {
                            className: "orbis",
                            display: c.X.Flex,
                            flexDirection: c.Aa.Column,
                            alignItems: c.f.Stretch,
                            background: c.r.Base,
                            flexShrink: 0,
                            borderBottom: !0
                        }, o.createElement(l.a, {
                            ref: this.setToggleBalloonRef
                        }, o.createElement("div", {
                            className: "orbis__dropdown-container",
                            "data-test-selector": "orbis-dropdown-container"
                        }, o.createElement(c.Xa, {
                            padding: {
                                y: 1,
                                x: 2
                            },
                            display: c.X.Flex,
                            justifyContent: c.Wa.Between,
                            flexWrap: c.Ba.NoWrap
                        }, o.createElement(c.Xa, {
                            ellipsis: !0,
                            padding: {
                                right: 1
                            }
                        }, o.createElement(c.W, {
                            type: c.Tb.Span
                        }, Object(s.d)("Interactions Available", "Orbis"))), o.createElement(c.Xa, {
                            display: c.X.Flex,
                            justifyContent: c.Wa.Between,
                            alignItems: c.f.Center,
                            flexShrink: 0
                        }, o.createElement(c.Xa, {
                            className: "orbis__dropdown-icon",
                            display: c.X.Flex,
                            justifyContent: c.Wa.Between,
                            alignItems: c.f.Center
                        }, o.createElement(c.qb, {
                            asset: c.rb.AngleRight
                        }))))), o.createElement(c.u, {
                            offsetY: "1px",
                            noTail: !0
                        }, o.createElement(c.Xa, {
                            className: "orbis__dropdown-content",
                            padding: 1
                        }, this.renderInteractions(e))))) : null
                    }, t.prototype.renderInteractions = function(e) {
                        for (var t = [], n = 0, i = e; n < i.length; n++) {
                            var a = i[n];
                            t.push(this.renderInteraction(a))
                        }
                        return t
                    }, t.prototype.renderInteraction = function(e) {
                        return e ? o.createElement(c.Ua, {
                            onClick: this.onClickInteraction,
                            key: e,
                            "data-action": e,
                            "data-test-selector": "orbis-interaction"
                        }, o.createElement(c.Pa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, o.createElement(c.W, {
                            ellipsis: !0
                        }, e))) : null
                    }, t.prototype.getPresetText = function() {
                        if (!(this.props.data && this.props.data.user && this.props.data.user.stream && this.props.data.user.stream.platform && "PlayStation" === this.props.data.user.stream.platform.__typename && this.props.data.user.stream.platform.title && this.props.data.user.stream.platform.title.presetText)) return [];
                        var e = this.props.data.user.stream.platform.title.presetText;
                        return e.some(function(e) {
                            return !!e
                        }) ? e : []
                    }, t
                }(o.Component)),
                p = Object(d.a)(u, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn || !e.channelLogin
                    }
                })(m);
            var g = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(a.f)(e)
                }
            })(p);
            n.d(t, "Orbis", function() {
                return g
            }), n.d(t, "PublicProps", function() {})
        },
        gRl6: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Chat_OrbisPresetText"
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
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
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
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "platform"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "InlineFragment",
                                                    typeCondition: {
                                                        kind: "NamedType",
                                                        name: {
                                                            kind: "Name",
                                                            value: "PlayStation"
                                                        }
                                                    },
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "title"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "presetText"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 146
                }
            };
            n.loc.source = {
                body: "query Chat_OrbisPresetText ($login: String!) {\nuser(login: $login) {\nid\nstream {\nid\nplatform {\n... on PlayStation {\ntitle {\npresetText\n}\n}\n}\n}\n}\n}",
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