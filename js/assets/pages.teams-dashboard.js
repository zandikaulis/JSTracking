(window.webpackJsonp = window.webpackJsonp || []).push([
    [79], {
        "/ZC1": function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return i
            });
            var n = r("mrSG"),
                a = r("q1tI"),
                o = r("Ue10"),
                i = (r("sL9O"), function(e) {
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
                    return n.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(o.Z, {
                            dragOver: this.state.isDraggingOver,
                            error: this.props.error
                        }, a.createElement(o.Pa, {
                            position: o.fb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: o.cc.Above
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
        "6TZo": function(e, t, r) {},
        "6XEL": function(e, t, r) {
            "use strict";
            var n = {};

            function a(e) {
                return "/" + e + "/dashboard/achievements/"
            }

            function o(e) {
                return "/" + e.channelLogin + "/dashboard/achievements/" + e.id
            }
            r.d(n, "channelAchievements", function() {
                return a
            }), r.d(n, "achievement", function() {
                return o
            });
            var i, s = r("dG1e"),
                c = r("rSo7"),
                u = r("eAwD");

            function l(e, t, r) {
                return e.sort(function(e, n) {
                    for (var a = 0; a < t.length; a++) {
                        var o = t[a],
                            s = r[a] || i.Ascending,
                            c = d(o(e), o(n)) * s;
                        if (0 !== c) return c
                    }
                    return 0
                })
            }

            function d(e, t) {
                var r = null !== e && void 0 !== e,
                    n = null !== t && void 0 !== t;
                return r && n ? e > t ? 1 : e < t ? -1 : 0 : r ? -1 : n ? 1 : 0
            }! function(e) {
                e[e.Ascending = 1] = "Ascending", e[e.Descending = -1] = "Descending"
            }(i || (i = {})), r.d(t, "b", function() {
                return n
            }), r.d(t, "c", function() {
                return s.a
            }), r.d(t, !1, function() {}), r.d(t, !1, function() {
                return c.a
            }), r.d(t, !1, function() {
                return u.a
            }), r.d(t, "a", function() {
                return i
            }), r.d(t, "d", function() {
                return l
            })
        },
        "8dXP": function(e, t, r) {},
        DEM2: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parse = function(e, t) {
                var r = "string" == typeof e ? new n.Source(e) : e;
                if (!(r instanceof n.Source)) throw new TypeError("Must provide Source. Received: " + String(r));
                return function(e) {
                    var t = e.token;
                    J(e, o.TokenKind.SOF);
                    var r = [];
                    do {
                        r.push(u(e))
                    } while (!Y(e, o.TokenKind.EOF));
                    return {
                        kind: i.DOCUMENT,
                        definitions: r,
                        loc: V(e, t)
                    }
                }((0, o.createLexer)(r, t || {}))
            }, t.parseValue = function(e, t) {
                var r = "string" == typeof e ? new n.Source(e) : e,
                    a = (0, o.createLexer)(r, t || {});
                J(a, o.TokenKind.SOF);
                var i = T(a, !1);
                return J(a, o.TokenKind.EOF), i
            }, t.parseType = function(e, t) {
                var r = "string" == typeof e ? new n.Source(e) : e,
                    a = (0, o.createLexer)(r, t || {});
                J(a, o.TokenKind.SOF);
                var i = N(a);
                return J(a, o.TokenKind.EOF), i
            }, t.parseConstValue = j, t.parseTypeReference = N, t.parseNamedType = w;
            var n = r("k84H"),
                a = r("PUII"),
                o = r("wimG"),
                i = r("xaK5"),
                s = r("R1IW");

            function c(e) {
                var t = J(e, o.TokenKind.NAME);
                return {
                    kind: i.NAME,
                    value: t.value,
                    loc: V(e, t)
                }
            }

            function u(e) {
                if (H(e, o.TokenKind.NAME)) switch (e.token.value) {
                    case "query":
                    case "mutation":
                    case "subscription":
                    case "fragment":
                        return l(e);
                    case "schema":
                    case "scalar":
                    case "type":
                    case "interface":
                    case "union":
                    case "enum":
                    case "input":
                    case "extend":
                    case "directive":
                        return I(e)
                } else {
                    if (H(e, o.TokenKind.BRACE_L)) return l(e);
                    if (A(e)) return I(e)
                }
                throw q(e)
            }

            function l(e) {
                if (H(e, o.TokenKind.NAME)) switch (e.token.value) {
                    case "query":
                    case "mutation":
                    case "subscription":
                        return d(e);
                    case "fragment":
                        return function(e) {
                            var t = e.token;
                            if (Z(e, "fragment"), e.options.experimentalFragmentVariables) return {
                                kind: i.FRAGMENT_DEFINITION,
                                name: E(e),
                                variableDefinitions: h(e),
                                typeCondition: (Z(e, "on"), w(e)),
                                directives: C(e, !1),
                                selectionSet: p(e),
                                loc: V(e, t)
                            };
                            return {
                                kind: i.FRAGMENT_DEFINITION,
                                name: E(e),
                                typeCondition: (Z(e, "on"), w(e)),
                                directives: C(e, !1),
                                selectionSet: p(e),
                                loc: V(e, t)
                            }
                        }(e)
                } else if (H(e, o.TokenKind.BRACE_L)) return d(e);
                throw q(e)
            }

            function d(e) {
                var t = e.token;
                if (H(e, o.TokenKind.BRACE_L)) return {
                    kind: i.OPERATION_DEFINITION,
                    operation: "query",
                    name: void 0,
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: p(e),
                    loc: V(e, t)
                };
                var r = m(e),
                    n = void 0;
                return H(e, o.TokenKind.NAME) && (n = c(e)), {
                    kind: i.OPERATION_DEFINITION,
                    operation: r,
                    name: n,
                    variableDefinitions: h(e),
                    directives: C(e, !1),
                    selectionSet: p(e),
                    loc: V(e, t)
                }
            }

            function m(e) {
                var t = J(e, o.TokenKind.NAME);
                switch (t.value) {
                    case "query":
                        return "query";
                    case "mutation":
                        return "mutation";
                    case "subscription":
                        return "subscription"
                }
                throw q(e, t)
            }

            function h(e) {
                return H(e, o.TokenKind.PAREN_L) ? Q(e, o.TokenKind.PAREN_L, f, o.TokenKind.PAREN_R) : []
            }

            function f(e) {
                var t = e.token;
                return {
                    kind: i.VARIABLE_DEFINITION,
                    variable: b(e),
                    type: (J(e, o.TokenKind.COLON), N(e)),
                    defaultValue: Y(e, o.TokenKind.EQUALS) ? T(e, !0) : void 0,
                    loc: V(e, t)
                }
            }

            function b(e) {
                var t = e.token;
                return J(e, o.TokenKind.DOLLAR), {
                    kind: i.VARIABLE,
                    name: c(e),
                    loc: V(e, t)
                }
            }

            function p(e) {
                var t = e.token;
                return {
                    kind: i.SELECTION_SET,
                    selections: Q(e, o.TokenKind.BRACE_L, g, o.TokenKind.BRACE_R),
                    loc: V(e, t)
                }
            }

            function g(e) {
                return H(e, o.TokenKind.SPREAD) ? function(e) {
                    var t = e.token;
                    if (J(e, o.TokenKind.SPREAD), H(e, o.TokenKind.NAME) && "on" !== e.token.value) return {
                        kind: i.FRAGMENT_SPREAD,
                        name: E(e),
                        directives: C(e, !1),
                        loc: V(e, t)
                    };
                    var r = void 0;
                    "on" === e.token.value && (e.advance(), r = w(e));
                    return {
                        kind: i.INLINE_FRAGMENT,
                        typeCondition: r,
                        directives: C(e, !1),
                        selectionSet: p(e),
                        loc: V(e, t)
                    }
                }(e) : function(e) {
                    var t = e.token,
                        r = c(e),
                        n = void 0,
                        a = void 0;
                    Y(e, o.TokenKind.COLON) ? (n = r, a = c(e)) : a = r;
                    return {
                        kind: i.FIELD,
                        alias: n,
                        name: a,
                        arguments: v(e, !1),
                        directives: C(e, !1),
                        selectionSet: H(e, o.TokenKind.BRACE_L) ? p(e) : void 0,
                        loc: V(e, t)
                    }
                }(e)
            }

            function v(e, t) {
                var r = t ? O : y;
                return H(e, o.TokenKind.PAREN_L) ? Q(e, o.TokenKind.PAREN_L, r, o.TokenKind.PAREN_R) : []
            }

            function y(e) {
                var t = e.token;
                return {
                    kind: i.ARGUMENT,
                    name: c(e),
                    value: (J(e, o.TokenKind.COLON), T(e, !1)),
                    loc: V(e, t)
                }
            }

            function O(e) {
                var t = e.token;
                return {
                    kind: i.ARGUMENT,
                    name: c(e),
                    value: (J(e, o.TokenKind.COLON), j(e)),
                    loc: V(e, t)
                }
            }

            function E(e) {
                if ("on" === e.token.value) throw q(e);
                return c(e)
            }

            function T(e, t) {
                var r = e.token;
                switch (r.kind) {
                    case o.TokenKind.BRACKET_L:
                        return function(e, t) {
                            var r = e.token,
                                n = t ? j : _;
                            return {
                                kind: i.LIST,
                                values: function(e, t, r, n) {
                                    J(e, t);
                                    var a = [];
                                    for (; !Y(e, n);) a.push(r(e));
                                    return a
                                }(e, o.TokenKind.BRACKET_L, n, o.TokenKind.BRACKET_R),
                                loc: V(e, r)
                            }
                        }(e, t);
                    case o.TokenKind.BRACE_L:
                        return function(e, t) {
                            var r = e.token;
                            J(e, o.TokenKind.BRACE_L);
                            var n = [];
                            for (; !Y(e, o.TokenKind.BRACE_R);) n.push(k(e, t));
                            return {
                                kind: i.OBJECT,
                                fields: n,
                                loc: V(e, r)
                            }
                        }(e, t);
                    case o.TokenKind.INT:
                        return e.advance(), {
                            kind: i.INT,
                            value: r.value,
                            loc: V(e, r)
                        };
                    case o.TokenKind.FLOAT:
                        return e.advance(), {
                            kind: i.FLOAT,
                            value: r.value,
                            loc: V(e, r)
                        };
                    case o.TokenKind.STRING:
                    case o.TokenKind.BLOCK_STRING:
                        return D(e);
                    case o.TokenKind.NAME:
                        return "true" === r.value || "false" === r.value ? (e.advance(), {
                            kind: i.BOOLEAN,
                            value: "true" === r.value,
                            loc: V(e, r)
                        }) : "null" === r.value ? (e.advance(), {
                            kind: i.NULL,
                            loc: V(e, r)
                        }) : (e.advance(), {
                            kind: i.ENUM,
                            value: r.value,
                            loc: V(e, r)
                        });
                    case o.TokenKind.DOLLAR:
                        if (!t) return b(e)
                }
                throw q(e)
            }

            function D(e) {
                var t = e.token;
                return e.advance(), {
                    kind: i.STRING,
                    value: t.value,
                    block: t.kind === o.TokenKind.BLOCK_STRING,
                    loc: V(e, t)
                }
            }

            function j(e) {
                return T(e, !0)
            }

            function _(e) {
                return T(e, !1)
            }

            function k(e, t) {
                var r = e.token;
                return {
                    kind: i.OBJECT_FIELD,
                    name: c(e),
                    value: (J(e, o.TokenKind.COLON), T(e, t)),
                    loc: V(e, r)
                }
            }

            function C(e, t) {
                for (var r = []; H(e, o.TokenKind.AT);) r.push(S(e, t));
                return r
            }

            function S(e, t) {
                var r = e.token;
                return J(e, o.TokenKind.AT), {
                    kind: i.DIRECTIVE,
                    name: c(e),
                    arguments: v(e, t),
                    loc: V(e, r)
                }
            }

            function N(e) {
                var t = e.token,
                    r = void 0;
                return Y(e, o.TokenKind.BRACKET_L) ? (r = N(e), J(e, o.TokenKind.BRACKET_R), r = {
                    kind: i.LIST_TYPE,
                    type: r,
                    loc: V(e, t)
                }) : r = w(e), Y(e, o.TokenKind.BANG) ? {
                    kind: i.NON_NULL_TYPE,
                    type: r,
                    loc: V(e, t)
                } : r
            }

            function w(e) {
                var t = e.token;
                return {
                    kind: i.NAMED_TYPE,
                    name: c(e),
                    loc: V(e, t)
                }
            }

            function I(e) {
                var t = A(e) ? e.lookahead() : e.token;
                if (t.kind === o.TokenKind.NAME) switch (t.value) {
                    case "schema":
                        return function(e) {
                            var t = e.token;
                            Z(e, "schema");
                            var r = C(e, !0),
                                n = Q(e, o.TokenKind.BRACE_L, R, o.TokenKind.BRACE_R);
                            return {
                                kind: i.SCHEMA_DEFINITION,
                                directives: r,
                                operationTypes: n,
                                loc: V(e, t)
                            }
                        }(e);
                    case "scalar":
                        return function(e) {
                            var t = e.token,
                                r = L(e);
                            Z(e, "scalar");
                            var n = c(e),
                                a = C(e, !0);
                            return {
                                kind: i.SCALAR_TYPE_DEFINITION,
                                description: r,
                                name: n,
                                directives: a,
                                loc: V(e, t)
                            }
                        }(e);
                    case "type":
                        return function(e) {
                            var t = e.token,
                                r = L(e);
                            Z(e, "type");
                            var n = c(e),
                                a = M(e),
                                o = C(e, !0),
                                s = P(e);
                            return {
                                kind: i.OBJECT_TYPE_DEFINITION,
                                description: r,
                                name: n,
                                interfaces: a,
                                directives: o,
                                fields: s,
                                loc: V(e, t)
                            }
                        }(e);
                    case "interface":
                        return function(e) {
                            var t = e.token,
                                r = L(e);
                            Z(e, "interface");
                            var n = c(e),
                                a = C(e, !0),
                                o = P(e);
                            return {
                                kind: i.INTERFACE_TYPE_DEFINITION,
                                description: r,
                                name: n,
                                directives: a,
                                fields: o,
                                loc: V(e, t)
                            }
                        }(e);
                    case "union":
                        return function(e) {
                            var t = e.token,
                                r = L(e);
                            Z(e, "union");
                            var n = c(e),
                                a = C(e, !0),
                                o = U(e);
                            return {
                                kind: i.UNION_TYPE_DEFINITION,
                                description: r,
                                name: n,
                                directives: a,
                                types: o,
                                loc: V(e, t)
                            }
                        }(e);
                    case "enum":
                        return function(e) {
                            var t = e.token,
                                r = L(e);
                            Z(e, "enum");
                            var n = c(e),
                                a = C(e, !0),
                                o = G(e);
                            return {
                                kind: i.ENUM_TYPE_DEFINITION,
                                description: r,
                                name: n,
                                directives: a,
                                values: o,
                                loc: V(e, t)
                            }
                        }(e);
                    case "input":
                        return function(e) {
                            var t = e.token,
                                r = L(e);
                            Z(e, "input");
                            var n = c(e),
                                a = C(e, !0),
                                o = X(e);
                            return {
                                kind: i.INPUT_OBJECT_TYPE_DEFINITION,
                                description: r,
                                name: n,
                                directives: a,
                                fields: o,
                                loc: V(e, t)
                            }
                        }(e);
                    case "extend":
                        return function(e) {
                            var t = e.lookahead();
                            if (t.kind === o.TokenKind.NAME) switch (t.value) {
                                case "scalar":
                                    return function(e) {
                                        var t = e.token;
                                        Z(e, "extend"), Z(e, "scalar");
                                        var r = c(e),
                                            n = C(e, !0);
                                        if (0 === n.length) throw q(e);
                                        return {
                                            kind: i.SCALAR_TYPE_EXTENSION,
                                            name: r,
                                            directives: n,
                                            loc: V(e, t)
                                        }
                                    }(e);
                                case "type":
                                    return function(e) {
                                        var t = e.token;
                                        Z(e, "extend"), Z(e, "type");
                                        var r = c(e),
                                            n = M(e),
                                            a = C(e, !0),
                                            o = P(e);
                                        if (0 === n.length && 0 === a.length && 0 === o.length) throw q(e);
                                        return {
                                            kind: i.OBJECT_TYPE_EXTENSION,
                                            name: r,
                                            interfaces: n,
                                            directives: a,
                                            fields: o,
                                            loc: V(e, t)
                                        }
                                    }(e);
                                case "interface":
                                    return function(e) {
                                        var t = e.token;
                                        Z(e, "extend"), Z(e, "interface");
                                        var r = c(e),
                                            n = C(e, !0),
                                            a = P(e);
                                        if (0 === n.length && 0 === a.length) throw q(e);
                                        return {
                                            kind: i.INTERFACE_TYPE_EXTENSION,
                                            name: r,
                                            directives: n,
                                            fields: a,
                                            loc: V(e, t)
                                        }
                                    }(e);
                                case "union":
                                    return function(e) {
                                        var t = e.token;
                                        Z(e, "extend"), Z(e, "union");
                                        var r = c(e),
                                            n = C(e, !0),
                                            a = U(e);
                                        if (0 === n.length && 0 === a.length) throw q(e);
                                        return {
                                            kind: i.UNION_TYPE_EXTENSION,
                                            name: r,
                                            directives: n,
                                            types: a,
                                            loc: V(e, t)
                                        }
                                    }(e);
                                case "enum":
                                    return function(e) {
                                        var t = e.token;
                                        Z(e, "extend"), Z(e, "enum");
                                        var r = c(e),
                                            n = C(e, !0),
                                            a = G(e);
                                        if (0 === n.length && 0 === a.length) throw q(e);
                                        return {
                                            kind: i.ENUM_TYPE_EXTENSION,
                                            name: r,
                                            directives: n,
                                            values: a,
                                            loc: V(e, t)
                                        }
                                    }(e);
                                case "input":
                                    return function(e) {
                                        var t = e.token;
                                        Z(e, "extend"), Z(e, "input");
                                        var r = c(e),
                                            n = C(e, !0),
                                            a = X(e);
                                        if (0 === n.length && 0 === a.length) throw q(e);
                                        return {
                                            kind: i.INPUT_OBJECT_TYPE_EXTENSION,
                                            name: r,
                                            directives: n,
                                            fields: a,
                                            loc: V(e, t)
                                        }
                                    }(e)
                            }
                            throw q(e, t)
                        }(e);
                    case "directive":
                        return function(e) {
                            var t = e.token,
                                r = L(e);
                            Z(e, "directive"), J(e, o.TokenKind.AT);
                            var n = c(e),
                                a = B(e);
                            Z(e, "on");
                            var s = function(e) {
                                Y(e, o.TokenKind.PIPE);
                                var t = [];
                                do {
                                    t.push(W(e))
                                } while (Y(e, o.TokenKind.PIPE));
                                return t
                            }(e);
                            return {
                                kind: i.DIRECTIVE_DEFINITION,
                                description: r,
                                name: n,
                                arguments: a,
                                locations: s,
                                loc: V(e, t)
                            }
                        }(e)
                }
                throw q(e, t)
            }

            function A(e) {
                return H(e, o.TokenKind.STRING) || H(e, o.TokenKind.BLOCK_STRING)
            }

            function L(e) {
                if (A(e)) return D(e)
            }

            function R(e) {
                var t = e.token,
                    r = m(e);
                J(e, o.TokenKind.COLON);
                var n = w(e);
                return {
                    kind: i.OPERATION_TYPE_DEFINITION,
                    operation: r,
                    type: n,
                    loc: V(e, t)
                }
            }

            function M(e) {
                var t = [];
                if ("implements" === e.token.value) {
                    e.advance();
                    do {
                        t.push(w(e))
                    } while (H(e, o.TokenKind.NAME))
                }
                return t
            }

            function P(e) {
                return H(e, o.TokenKind.BRACE_L) ? Q(e, o.TokenKind.BRACE_L, F, o.TokenKind.BRACE_R) : []
            }

            function F(e) {
                var t = e.token,
                    r = L(e),
                    n = c(e),
                    a = B(e);
                J(e, o.TokenKind.COLON);
                var s = N(e),
                    u = C(e, !0);
                return {
                    kind: i.FIELD_DEFINITION,
                    description: r,
                    name: n,
                    arguments: a,
                    type: s,
                    directives: u,
                    loc: V(e, t)
                }
            }

            function B(e) {
                return H(e, o.TokenKind.PAREN_L) ? Q(e, o.TokenKind.PAREN_L, x, o.TokenKind.PAREN_R) : []
            }

            function x(e) {
                var t = e.token,
                    r = L(e),
                    n = c(e);
                J(e, o.TokenKind.COLON);
                var a = N(e),
                    s = void 0;
                Y(e, o.TokenKind.EQUALS) && (s = j(e));
                var u = C(e, !0);
                return {
                    kind: i.INPUT_VALUE_DEFINITION,
                    description: r,
                    name: n,
                    type: a,
                    defaultValue: s,
                    directives: u,
                    loc: V(e, t)
                }
            }

            function U(e) {
                var t = [];
                if (Y(e, o.TokenKind.EQUALS)) {
                    Y(e, o.TokenKind.PIPE);
                    do {
                        t.push(w(e))
                    } while (Y(e, o.TokenKind.PIPE))
                }
                return t
            }

            function G(e) {
                return H(e, o.TokenKind.BRACE_L) ? Q(e, o.TokenKind.BRACE_L, K, o.TokenKind.BRACE_R) : []
            }

            function K(e) {
                var t = e.token,
                    r = L(e),
                    n = c(e),
                    a = C(e, !0);
                return {
                    kind: i.ENUM_VALUE_DEFINITION,
                    description: r,
                    name: n,
                    directives: a,
                    loc: V(e, t)
                }
            }

            function X(e) {
                return H(e, o.TokenKind.BRACE_L) ? Q(e, o.TokenKind.BRACE_L, x, o.TokenKind.BRACE_R) : []
            }

            function W(e) {
                var t = e.token,
                    r = c(e);
                if (s.DirectiveLocation.hasOwnProperty(r.value)) return r;
                throw q(e, t)
            }

            function V(e, t) {
                if (!e.options.noLocation) return new z(t, e.lastToken, e.source)
            }

            function z(e, t, r) {
                this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = r
            }

            function H(e, t) {
                return e.token.kind === t
            }

            function Y(e, t) {
                var r = e.token.kind === t;
                return r && e.advance(), r
            }

            function J(e, t) {
                var r = e.token;
                if (r.kind === t) return e.advance(), r;
                throw (0, a.syntaxError)(e.source, r.start, "Expected " + t + ", found " + (0, o.getTokenDesc)(r))
            }

            function Z(e, t) {
                var r = e.token;
                if (r.kind === o.TokenKind.NAME && r.value === t) return e.advance(), r;
                throw (0, a.syntaxError)(e.source, r.start, 'Expected "' + t + '", found ' + (0, o.getTokenDesc)(r))
            }

            function q(e, t) {
                var r = t || e.token;
                return (0, a.syntaxError)(e.source, r.start, "Unexpected " + (0, o.getTokenDesc)(r))
            }

            function Q(e, t, r, n) {
                J(e, t);
                for (var a = [r(e)]; !Y(e, n);) a.push(r(e));
                return a
            }
            z.prototype.toJSON = z.prototype.inspect = function() {
                return {
                    start: this.start,
                    end: this.end
                }
            }
        },
        "Db/j": function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                if (!e) throw new Error(t)
            }
        },
        Jgup: function(e, t, r) {
            "use strict";
            r.d(t, "b", function() {
                return a
            }), r.d(t, "a", function() {
                return o
            });
            var n = r("/7QA");

            function a(e) {
                switch (e.toUpperCase()) {
                    case "A1":
                        return Object(n.d)("Anonymous Proxy", "format-country");
                    case "A2":
                        return Object(n.d)("Satellite Provider", "format-country");
                    case "AD":
                        return Object(n.d)("Andorra", "format-country");
                    case "AE":
                        return Object(n.d)("United Arab Emirates", "format-country");
                    case "AF":
                        return Object(n.d)("Afghanistan", "format-country");
                    case "AG":
                        return Object(n.d)("Antigua and Barbuda", "format-country");
                    case "AI":
                        return Object(n.d)("Anguilla", "format-country");
                    case "AL":
                        return Object(n.d)("Albania", "format-country");
                    case "AM":
                        return Object(n.d)("Armenia", "format-country");
                    case "AO":
                        return Object(n.d)("Angola", "format-country");
                    case "AP":
                        return Object(n.d)("Asia/Pacific Region", "format-country");
                    case "AQ":
                        return Object(n.d)("Antarctica", "format-country");
                    case "AR":
                        return Object(n.d)("Argentina", "format-country");
                    case "AS":
                        return Object(n.d)("American Samoa", "format-country");
                    case "AT":
                        return Object(n.d)("Austria", "format-country");
                    case "AU":
                        return Object(n.d)("Australia", "format-country");
                    case "AW":
                        return Object(n.d)("Aruba", "format-country");
                    case "AX":
                        return Object(n.d)("Aland Islands", "format-country");
                    case "AZ":
                        return Object(n.d)("Azerbaijan", "format-country");
                    case "BA":
                        return Object(n.d)("Bosnia and Herzegovina", "format-country");
                    case "BB":
                        return Object(n.d)("Barbados", "format-country");
                    case "BD":
                        return Object(n.d)("Bangladesh", "format-country");
                    case "BE":
                        return Object(n.d)("Belgium", "format-country");
                    case "BF":
                        return Object(n.d)("Burkina Faso", "format-country");
                    case "BG":
                        return Object(n.d)("Bulgaria", "format-country");
                    case "BH":
                        return Object(n.d)("Bahrain", "format-country");
                    case "BI":
                        return Object(n.d)("Burundi", "format-country");
                    case "BJ":
                        return Object(n.d)("Benin", "format-country");
                    case "BL":
                        return Object(n.d)("Saint Bartelemey", "format-country");
                    case "BM":
                        return Object(n.d)("Bermuda", "format-country");
                    case "BN":
                        return Object(n.d)("Brunei", "format-country");
                    case "BO":
                        return Object(n.d)("Bolivia", "format-country");
                    case "BQ":
                        return Object(n.d)("Bonaire, Saint Eustatius, and Saba", "format-country");
                    case "BR":
                        return Object(n.d)("Brazil", "format-country");
                    case "BS":
                        return Object(n.d)("Bahamas", "format-country");
                    case "BT":
                        return Object(n.d)("Bhutan", "format-country");
                    case "BV":
                        return Object(n.d)("Bouvet Island", "format-country");
                    case "BW":
                        return Object(n.d)("Botswana", "format-country");
                    case "BY":
                        return Object(n.d)("Belarus", "format-country");
                    case "BZ":
                        return Object(n.d)("Belize", "format-country");
                    case "CA":
                        return Object(n.d)("Canada", "format-country");
                    case "CC":
                        return Object(n.d)("Cocos (Keeling) Islands", "format-country");
                    case "CD":
                        return Object(n.d)("Congo, The Democratic Republic of the", "format-country");
                    case "CF":
                        return Object(n.d)("Central African Republic", "format-country");
                    case "CG":
                        return Object(n.d)("Congo", "format-country");
                    case "CH":
                        return Object(n.d)("Switzerland", "format-country");
                    case "CI":
                        return Object(n.d)("Ivory Coast", "format-country");
                    case "CK":
                        return Object(n.d)("Cook Islands", "format-country");
                    case "CL":
                        return Object(n.d)("Chile", "format-country");
                    case "CM":
                        return Object(n.d)("Cameroon", "format-country");
                    case "CN":
                        return Object(n.d)("China", "format-country");
                    case "CO":
                        return Object(n.d)("Colombia", "format-country");
                    case "CR":
                        return Object(n.d)("Costa Rica", "format-country");
                    case "CU":
                        return Object(n.d)("Cuba", "format-country");
                    case "CV":
                        return Object(n.d)("Cape Verde", "format-country");
                    case "CW":
                        return Object(n.d)("Curacao", "format-country");
                    case "CX":
                        return Object(n.d)("Christmas Island", "format-country");
                    case "CY":
                        return Object(n.d)("Cyprus", "format-country");
                    case "CZ":
                        return Object(n.d)("Czech Republic", "format-country");
                    case "DE":
                        return Object(n.d)("Germany", "format-country");
                    case "DJ":
                        return Object(n.d)("Djibouti", "format-country");
                    case "DK":
                        return Object(n.d)("Denmark", "format-country");
                    case "DM":
                        return Object(n.d)("Dominica", "format-country");
                    case "DO":
                        return Object(n.d)("Dominican Republic", "format-country");
                    case "DZ":
                        return Object(n.d)("Algeria", "format-country");
                    case "EC":
                        return Object(n.d)("Ecuador", "format-country");
                    case "EE":
                        return Object(n.d)("Estonia", "format-country");
                    case "EG":
                        return Object(n.d)("Egypt", "format-country");
                    case "EH":
                        return Object(n.d)("Western Sahara", "format-country");
                    case "ER":
                        return Object(n.d)("Eritrea", "format-country");
                    case "ES":
                        return Object(n.d)("Spain", "format-country");
                    case "ET":
                        return Object(n.d)("Ethiopia", "format-country");
                    case "EU":
                        return Object(n.d)("Europe", "format-country");
                    case "FI":
                        return Object(n.d)("Finland", "format-country");
                    case "FJ":
                        return Object(n.d)("Fiji", "format-country");
                    case "FK":
                        return Object(n.d)("Falkland Islands (Malvinas)", "format-country");
                    case "FM":
                        return Object(n.d)("Micronesia", "format-country");
                    case "FO":
                        return Object(n.d)("Faroe Islands", "format-country");
                    case "FR":
                        return Object(n.d)("France", "format-country");
                    case "GA":
                        return Object(n.d)("Gabon", "format-country");
                    case "GB":
                        return Object(n.d)("United Kingdom", "format-country");
                    case "GD":
                        return Object(n.d)("Grenada", "format-country");
                    case "GE":
                        return Object(n.d)("Georgia", "format-country");
                    case "GF":
                        return Object(n.d)("French Guiana", "format-country");
                    case "GG":
                        return Object(n.d)("Guernsey", "format-country");
                    case "GH":
                        return Object(n.d)("Ghana", "format-country");
                    case "GI":
                        return Object(n.d)("Gibraltar", "format-country");
                    case "GL":
                        return Object(n.d)("Greenland", "format-country");
                    case "GM":
                        return Object(n.d)("Gambia", "format-country");
                    case "GN":
                        return Object(n.d)("Guinea", "format-country");
                    case "GP":
                        return Object(n.d)("Guadeloupe", "format-country");
                    case "GQ":
                        return Object(n.d)("Equatorial Guinea", "format-country");
                    case "GR":
                        return Object(n.d)("Greece", "format-country");
                    case "GS":
                        return Object(n.d)("South Georgia and the South Sandwich Islands", "format-country");
                    case "GT":
                        return Object(n.d)("Guatemala", "format-country");
                    case "GU":
                        return Object(n.d)("Guam", "format-country");
                    case "GW":
                        return Object(n.d)("Guinea-Bissau", "format-country");
                    case "GY":
                        return Object(n.d)("Guyana", "format-country");
                    case "HK":
                        return Object(n.d)("Hong Kong", "format-country");
                    case "HM":
                        return Object(n.d)("Heard Island and McDonald Islands", "format-country");
                    case "HN":
                        return Object(n.d)("Honduras", "format-country");
                    case "HR":
                        return Object(n.d)("Croatia", "format-country");
                    case "HT":
                        return Object(n.d)("Haiti", "format-country");
                    case "HU":
                        return Object(n.d)("Hungary", "format-country");
                    case "ID":
                        return Object(n.d)("Indonesia", "format-country");
                    case "IE":
                        return Object(n.d)("Ireland", "format-country");
                    case "IL":
                        return Object(n.d)("Israel", "format-country");
                    case "IM":
                        return Object(n.d)("Isle of Man", "format-country");
                    case "IN":
                        return Object(n.d)("India", "format-country");
                    case "IO":
                        return Object(n.d)("British Indian Ocean Territory", "format-country");
                    case "IQ":
                        return Object(n.d)("Iraq", "format-country");
                    case "IR":
                        return Object(n.d)("Iran", "format-country");
                    case "IS":
                        return Object(n.d)("Iceland", "format-country");
                    case "IT":
                        return Object(n.d)("Italy", "format-country");
                    case "JE":
                        return Object(n.d)("Jersey", "format-country");
                    case "JM":
                        return Object(n.d)("Jamaica", "format-country");
                    case "JO":
                        return Object(n.d)("Jordan", "format-country");
                    case "JP":
                        return Object(n.d)("Japan", "format-country");
                    case "KE":
                        return Object(n.d)("Kenya", "format-country");
                    case "KG":
                        return Object(n.d)("Kyrgyzstan", "format-country");
                    case "KH":
                        return Object(n.d)("Cambodia", "format-country");
                    case "KI":
                        return Object(n.d)("Kiribati", "format-country");
                    case "KM":
                        return Object(n.d)("Comoros", "format-country");
                    case "KN":
                        return Object(n.d)("Saint Kitts and Nevis", "format-country");
                    case "KP":
                        return Object(n.d)("North Korea", "format-country");
                    case "KR":
                        return Object(n.d)("South Korea", "format-country");
                    case "KW":
                        return Object(n.d)("Kuwait", "format-country");
                    case "KY":
                        return Object(n.d)("Cayman Islands", "format-country");
                    case "KZ":
                        return Object(n.d)("Kazakhstan", "format-country");
                    case "LA":
                        return Object(n.d)("Laos", "format-country");
                    case "LB":
                        return Object(n.d)("Lebanon", "format-country");
                    case "LC":
                        return Object(n.d)("Saint Lucia", "format-country");
                    case "LI":
                        return Object(n.d)("Liechtenstein", "format-country");
                    case "LK":
                        return Object(n.d)("Sri Lanka", "format-country");
                    case "LR":
                        return Object(n.d)("Liberia", "format-country");
                    case "LS":
                        return Object(n.d)("Lesotho", "format-country");
                    case "LT":
                        return Object(n.d)("Lithuania", "format-country");
                    case "LU":
                        return Object(n.d)("Luxembourg", "format-country");
                    case "LV":
                        return Object(n.d)("Latvia", "format-country");
                    case "LY":
                        return Object(n.d)("Libya", "format-country");
                    case "MA":
                        return Object(n.d)("Morocco", "format-country");
                    case "MC":
                        return Object(n.d)("Monaco", "format-country");
                    case "MD":
                        return Object(n.d)("Moldova", "format-country");
                    case "ME":
                        return Object(n.d)("Montenegro", "format-country");
                    case "MF":
                        return Object(n.d)("Saint Martin", "format-country");
                    case "MG":
                        return Object(n.d)("Madagascar", "format-country");
                    case "MH":
                        return Object(n.d)("Marshall Islands", "format-country");
                    case "MK":
                        return Object(n.d)("Macedonia", "format-country");
                    case "ML":
                        return Object(n.d)("Mali", "format-country");
                    case "MM":
                        return Object(n.d)("Myanmar", "format-country");
                    case "MN":
                        return Object(n.d)("Mongolia", "format-country");
                    case "MO":
                        return Object(n.d)("Macao", "format-country");
                    case "MP":
                        return Object(n.d)("Northern Mariana Islands", "format-country");
                    case "MQ":
                        return Object(n.d)("Martinique", "format-country");
                    case "MR":
                        return Object(n.d)("Mauritania", "format-country");
                    case "MS":
                        return Object(n.d)("Montserrat", "format-country");
                    case "MT":
                        return Object(n.d)("Malta", "format-country");
                    case "MU":
                        return Object(n.d)("Mauritius", "format-country");
                    case "MV":
                        return Object(n.d)("Maldives", "format-country");
                    case "MW":
                        return Object(n.d)("Malawi", "format-country");
                    case "MX":
                        return Object(n.d)("Mexico", "format-country");
                    case "MY":
                        return Object(n.d)("Malaysia", "format-country");
                    case "MZ":
                        return Object(n.d)("Mozambique", "format-country");
                    case "NA":
                        return Object(n.d)("Namibia", "format-country");
                    case "NC":
                        return Object(n.d)("New Caledonia", "format-country");
                    case "NE":
                        return Object(n.d)("Niger", "format-country");
                    case "NF":
                        return Object(n.d)("Norfolk Island", "format-country");
                    case "NG":
                        return Object(n.d)("Nigeria", "format-country");
                    case "NI":
                        return Object(n.d)("Nicaragua", "format-country");
                    case "NL":
                        return Object(n.d)("Netherlands", "format-country");
                    case "NO":
                        return Object(n.d)("Norway", "format-country");
                    case "NP":
                        return Object(n.d)("Nepal", "format-country");
                    case "NR":
                        return Object(n.d)("Nauru", "format-country");
                    case "NU":
                        return Object(n.d)("Niue", "format-country");
                    case "NZ":
                        return Object(n.d)("New Zealand", "format-country");
                    case "O1":
                        return Object(n.d)("Other Country", "format-country");
                    case "OM":
                        return Object(n.d)("Oman", "format-country");
                    case "PA":
                        return Object(n.d)("Panama", "format-country");
                    case "PE":
                        return Object(n.d)("Peru", "format-country");
                    case "PF":
                        return Object(n.d)("French Polynesia", "format-country");
                    case "PG":
                        return Object(n.d)("Papua New Guinea", "format-country");
                    case "PH":
                        return Object(n.d)("Philippines", "format-country");
                    case "PK":
                        return Object(n.d)("Pakistan", "format-country");
                    case "PL":
                        return Object(n.d)("Poland", "format-country");
                    case "PM":
                        return Object(n.d)("Saint Pierre and Miquelon", "format-country");
                    case "PN":
                        return Object(n.d)("Pitcairn", "format-country");
                    case "PR":
                        return Object(n.d)("Puerto Rico", "format-country");
                    case "PS":
                        return Object(n.d)("Palestine", "format-country");
                    case "PT":
                        return Object(n.d)("Portugal", "format-country");
                    case "PW":
                        return Object(n.d)("Palau", "format-country");
                    case "PY":
                        return Object(n.d)("Paraguay", "format-country");
                    case "QA":
                        return Object(n.d)("Qatar", "format-country");
                    case "RE":
                        return Object(n.d)("Reunion", "format-country");
                    case "RO":
                        return Object(n.d)("Romania", "format-country");
                    case "RS":
                        return Object(n.d)("Serbia", "format-country");
                    case "RU":
                        return Object(n.d)("Russia", "format-country");
                    case "RW":
                        return Object(n.d)("Rwanda", "format-country");
                    case "SA":
                        return Object(n.d)("Saudi Arabia", "format-country");
                    case "SB":
                        return Object(n.d)("Solomon Islands", "format-country");
                    case "SC":
                        return Object(n.d)("Seychelles", "format-country");
                    case "SD":
                        return Object(n.d)("Sudan", "format-country");
                    case "SE":
                        return Object(n.d)("Sweden", "format-country");
                    case "SG":
                        return Object(n.d)("Singapore", "format-country");
                    case "SH":
                        return Object(n.d)("Saint Helena", "format-country");
                    case "SI":
                        return Object(n.d)("Slovenia", "format-country");
                    case "SJ":
                        return Object(n.d)("Svalbard and Jan Mayen", "format-country");
                    case "SK":
                        return Object(n.d)("Slovakia", "format-country");
                    case "SL":
                        return Object(n.d)("Sierra Leone", "format-country");
                    case "SM":
                        return Object(n.d)("San Marino", "format-country");
                    case "SN":
                        return Object(n.d)("Senegal", "format-country");
                    case "SO":
                        return Object(n.d)("Somalia", "format-country");
                    case "SR":
                        return Object(n.d)("Suriname", "format-country");
                    case "SS":
                        return Object(n.d)("South Sudan", "format-country");
                    case "ST":
                        return Object(n.d)("Sao Tome and Principe", "format-country");
                    case "SV":
                        return Object(n.d)("El Salvador", "format-country");
                    case "SX":
                        return Object(n.d)("Sint Maarten", "format-country");
                    case "SY":
                        return Object(n.d)("Syria", "format-country");
                    case "SZ":
                        return Object(n.d)("Swaziland", "format-country");
                    case "TC":
                        return Object(n.d)("Turks and Caicos Islands", "format-country");
                    case "TD":
                        return Object(n.d)("Chad", "format-country");
                    case "TF":
                        return Object(n.d)("French Southern Territories", "format-country");
                    case "TG":
                        return Object(n.d)("Togo", "format-country");
                    case "TH":
                        return Object(n.d)("Thailand", "format-country");
                    case "TJ":
                        return Object(n.d)("Tajikistan", "format-country");
                    case "TK":
                        return Object(n.d)("Tokelau", "format-country");
                    case "TL":
                        return Object(n.d)("East Timor", "format-country");
                    case "TM":
                        return Object(n.d)("Turkmenistan", "format-country");
                    case "TN":
                        return Object(n.d)("Tunisia", "format-country");
                    case "TO":
                        return Object(n.d)("Tonga", "format-country");
                    case "TR":
                        return Object(n.d)("Turkey", "format-country");
                    case "TT":
                        return Object(n.d)("Trinidad and Tobago", "format-country");
                    case "TV":
                        return Object(n.d)("Tuvalu", "format-country");
                    case "TW":
                        return Object(n.d)("Taiwan", "format-country");
                    case "TZ":
                        return Object(n.d)("Tanzania", "format-country");
                    case "UA":
                        return Object(n.d)("Ukraine", "format-country");
                    case "UG":
                        return Object(n.d)("Uganda", "format-country");
                    case "UM":
                        return Object(n.d)("United States Minor Outlying Islands", "format-country");
                    case "US":
                        return Object(n.d)("United States", "format-country");
                    case "UY":
                        return Object(n.d)("Uruguay", "format-country");
                    case "UZ":
                        return Object(n.d)("Uzbekistan", "format-country");
                    case "VA":
                        return Object(n.d)("Vatican City", "format-country");
                    case "VC":
                        return Object(n.d)("Saint Vincent and the Grenadines", "format-country");
                    case "VE":
                        return Object(n.d)("Venezuela", "format-country");
                    case "VG":
                        return Object(n.d)("British Virgin Islands", "format-country");
                    case "VI":
                        return Object(n.d)("U.S. Virgin Islands", "format-country");
                    case "VN":
                        return Object(n.d)("Vietnam", "format-country");
                    case "VU":
                        return Object(n.d)("Vanuatu", "format-country");
                    case "WF":
                        return Object(n.d)("Wallis and Futuna", "format-country");
                    case "WS":
                        return Object(n.d)("Samoa", "format-country");
                    case "YE":
                        return Object(n.d)("Yemen", "format-country");
                    case "YT":
                        return Object(n.d)("Mayotte", "format-country");
                    case "ZA":
                        return Object(n.d)("South Africa", "format-country");
                    case "ZM":
                        return Object(n.d)("Zambia", "format-country");
                    case "ZW":
                        return Object(n.d)("Zimbabwe", "format-country");
                    default:
                        return e
                }
            }
            var o = ["US", "CA", "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "A1", "AQ", "AG", "AR", "AM", "AW", "AP", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "VG", "BN", "BG", "BF", "BI", "KH", "CM", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "TL", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "EU", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "CI", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "KP", "MP", "NO", "OM", "O1", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "A2", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "KR", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "VI", "UG", "UA", "AE", "GB", "UM", "UY", "UZ", "VU", "VA", "VE", "VN", "WF", "EH", "YE", "ZM", "ZW"]
        },
        MafX: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GraphQLError = o;
            var n = r("yI7j"),
                a = r("PO9o");

            function o(e, t, r, n, i, s, c) {
                var u = Array.isArray(t) ? 0 !== t.length ? t : void 0 : t ? [t] : void 0,
                    l = r;
                if (!l && u) {
                    var d = u[0];
                    l = d && d.loc && d.loc.source
                }
                var m = n;
                !m && u && (m = u.reduce(function(e, t) {
                    return t.loc && e.push(t.loc.start), e
                }, [])), m && 0 === m.length && (m = void 0);
                var h = void 0;
                if (n && r) {
                    var f = r;
                    h = n.map(function(e) {
                        return (0, a.getLocation)(f, e)
                    })
                } else u && (h = u.reduce(function(e, t) {
                    return t.loc && e.push((0, a.getLocation)(t.loc.source, t.loc.start)), e
                }, []));
                Object.defineProperties(this, {
                    message: {
                        value: e,
                        enumerable: !0,
                        writable: !0
                    },
                    locations: {
                        value: h || void 0,
                        enumerable: !0
                    },
                    path: {
                        value: i || void 0,
                        enumerable: !0
                    },
                    nodes: {
                        value: u || void 0
                    },
                    source: {
                        value: l || void 0
                    },
                    positions: {
                        value: m || void 0
                    },
                    originalError: {
                        value: s
                    },
                    extensions: {
                        value: c || s && s.extensions
                    }
                }), s && s.stack ? Object.defineProperty(this, "stack", {
                    value: s.stack,
                    writable: !0,
                    configurable: !0
                }) : Error.captureStackTrace ? Error.captureStackTrace(this, o) : Object.defineProperty(this, "stack", {
                    value: Error().stack,
                    writable: !0,
                    configurable: !0
                })
            }
            o.prototype = Object.create(Error.prototype, {
                constructor: {
                    value: o
                },
                name: {
                    value: "GraphQLError"
                },
                toString: {
                    value: function() {
                        return (0, n.printError)(this)
                    }
                }
            })
        },
        "O3/n": function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = r("Ue10"),
                o = function(e) {
                    return n.createElement(a.Xa, {
                        margin: {
                            top: 2,
                            bottom: 1,
                            x: 1
                        }
                    }, n.createElement(a.W, {
                        bold: !0,
                        color: a.O.Alt,
                        fontSize: a.Ca.Size7,
                        transform: a.Ob.Uppercase,
                        type: a.Pb.H4
                    }, e.children))
                };
            r.d(t, "a", function() {
                return o
            })
        },
        PO9o: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getLocation = function(e, t) {
                var r = /\r\n|[\n\r]/g,
                    n = 1,
                    a = t + 1,
                    o = void 0;
                for (;
                    (o = r.exec(e.body)) && o.index < t;) n += 1, a = t + 1 - (o.index + o[0].length);
                return {
                    line: n,
                    column: a
                }
            }
        },
        PUII: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r("MafX");
            Object.defineProperty(t, "GraphQLError", {
                enumerable: !0,
                get: function() {
                    return n.GraphQLError
                }
            });
            var a = r("glbf");
            Object.defineProperty(t, "syntaxError", {
                enumerable: !0,
                get: function() {
                    return a.syntaxError
                }
            });
            var o = r("dPEW");
            Object.defineProperty(t, "locatedError", {
                enumerable: !0,
                get: function() {
                    return o.locatedError
                }
            });
            var i = r("yI7j");
            Object.defineProperty(t, "printError", {
                enumerable: !0,
                get: function() {
                    return i.printError
                }
            });
            var s = r("vvR6");
            Object.defineProperty(t, "formatError", {
                enumerable: !0,
                get: function() {
                    return s.formatError
                }
            })
        },
        Pnqn: function(e, t, r) {
            "use strict";
            r.r(t);
            var n, a, o = r("/MKj"),
                i = r("fvjX"),
                s = r("1/iK"),
                c = r("y5D0"),
                u = r("kRBY"),
                l = r("mrSG"),
                d = r("lTCR"),
                m = r.n(d),
                h = r("q1tI"),
                f = r("mLw1"),
                b = r("yoKv"),
                p = r("4p7I"),
                g = r("/7QA"),
                v = r("ZDlU"),
                y = r("LA8z"),
                O = r("yR8l"),
                E = r("Gw3k"),
                T = r("NvVO"),
                D = r("GnwI"),
                j = r("Ue10"),
                _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            inputValue: "",
                            buttonDisabled: !0,
                            changedSinceSubmit: !1
                        }, t.renderDescriptor = function() {
                            return t.props.descriptor.split("\n").map(function(e, t) {
                                return h.createElement(j.W, {
                                    key: t
                                }, e)
                            })
                        }, t.renderButton = function() {
                            var e = h.createElement(j.z, {
                                    disabled: t.state.buttonDisabled,
                                    onClick: t.handleSubmit
                                }, t.props.buttonText),
                                r = h.createElement(j.Sb, {
                                    label: t.props.errorString,
                                    direction: j.Ub.Right,
                                    show: !0
                                }, e);
                            return t.props.errorString.length && !t.state.changedSinceSubmit ? r : e
                        }, t.handleChangeInput = function(e) {
                            var r = e.target.value;
                            t.setState({
                                inputValue: r,
                                buttonDisabled: 0 === r.length,
                                changedSinceSubmit: !0
                            })
                        }, t.handleSubmit = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                return l.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.setState({
                                                buttonDisabled: !0
                                            }), [4, this.props.submitAction(this.state.inputValue.toLowerCase())];
                                        case 1:
                                            return e.sent(), this.setState({
                                                buttonDisabled: !1,
                                                changedSinceSubmit: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return h.createElement(j.Xa, {
                            alignSelf: j.g.Start,
                            display: j.X.Flex,
                            flexDirection: j.Aa.Column
                        }, h.createElement(j.Xa, {
                            display: j.X.Flex,
                            flexDirection: j.Aa.Row,
                            margin: {
                                bottom: 1
                            }
                        }, h.createElement(j.Ra, {
                            type: j.Ta.Text,
                            placeholder: this.props.placeholder,
                            value: this.state.inputValue,
                            onChange: this.handleChangeInput,
                            maxLength: 25
                        }), h.createElement(j.Xa, null, this.renderButton())), h.createElement(j.Xa, null, this.renderDescriptor()))
                    }, t
                }(h.Component),
                k = r("8/mp");
            r("6TZo");
            ! function(e) {
                e.ToTop = "move-to-top", e.Up = "move-up", e.Down = "move-down", e.ToBottom = "move-to-bottom"
            }(n || (n = {})),
            function(e) {
                e.AllButtons = "all-buttons", e.RemoveOnly = "remove-button-only", e.MoveUpAndRemoveOnly = "move-up-and-remove-buttons-only", e.MoveDownAndRemoveOnly = "move-down-and-remove-buttons-only"
            }(a || (a = {}));
            var C, S, N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isHovered: !1
                        }, t.renderButtons = function() {
                            var e = t.props.buttonConfiguration === a.AllButtons,
                                r = e || t.props.buttonConfiguration === a.MoveUpAndRemoveOnly,
                                o = e || t.props.buttonConfiguration === a.MoveDownAndRemoveOnly;
                            return h.createElement(j.Xa, null, r && h.createElement(j.Sb, {
                                label: Object(g.d)("Move Up", "TeamsDashboard"),
                                direction: j.Ub.Left
                            }, h.createElement(j.z, {
                                type: j.F.Text,
                                blurAfterClick: !0,
                                icon: j.pb.ArrowUp,
                                onClick: t.handleOnMoveClick(n.Up),
                                disabled: t.props.isDisabled
                            })), o && h.createElement(j.Sb, {
                                label: Object(g.d)("Move Down", "TeamsDashboard"),
                                direction: j.Ub.Left
                            }, h.createElement(j.z, {
                                type: j.F.Text,
                                blurAfterClick: !0,
                                icon: j.pb.ArrowDown,
                                onClick: t.handleOnMoveClick(n.Down),
                                disabled: t.props.isDisabled
                            })), r && h.createElement(j.Sb, {
                                label: Object(g.d)("Move To Top", "TeamsDashboard"),
                                direction: j.Ub.Left
                            }, h.createElement(j.z, {
                                type: j.F.Text,
                                blurAfterClick: !0,
                                icon: j.pb.ToTop,
                                onClick: t.handleOnMoveClick(n.ToTop),
                                disabled: t.props.isDisabled
                            })), o && h.createElement(j.Sb, {
                                label: Object(g.d)("Move To Bottom", "TeamsDashboard"),
                                direction: j.Ub.Left
                            }, h.createElement(j.z, {
                                type: j.F.Text,
                                blurAfterClick: !0,
                                icon: j.pb.ToBottom,
                                onClick: t.handleOnMoveClick(n.ToBottom),
                                disabled: t.props.isDisabled
                            })), h.createElement(j.Sb, {
                                label: Object(g.d)("Remove", "TeamsDashboard"),
                                direction: j.Ub.Left
                            }, h.createElement(j.z, {
                                type: j.F.Text,
                                blurAfterClick: !0,
                                icon: j.pb.Trash,
                                onClick: t.handleDeleteClick,
                                disabled: t.props.isDisabled
                            })))
                        }, t.handleMouseEnter = function() {
                            return t.setState({
                                isHovered: !0
                            })
                        }, t.handleMouseLeave = function() {
                            return t.setState({
                                isHovered: !1
                            })
                        }, t.handleDeleteClick = function() {
                            return t.props.onDeleteClick(t.props.member.id)
                        }, t.handleOnMoveClick = function(e) {
                            return function() {
                                t.props.onMoveClick(t.props.member.id, e)
                            }
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = Object(g.d)("{displayName}'s Avatar Image", {
                            displayName: this.props.member.displayName
                        }, "TeamsDashboard");
                        return h.createElement("div", {
                            "data-test-selector": this.props.listItemsSelector,
                            onMouseEnter: this.handleMouseEnter,
                            onMouseLeave: this.handleMouseLeave
                        }, h.createElement(j.zb, {
                            background: this.state.isHovered ? j.r.Base : void 0,
                            display: j.X.Flex,
                            flexDirection: j.Aa.Row,
                            fullWidth: !0,
                            justifyContent: j.Wa.Between,
                            padding: 1
                        }, h.createElement(j.Xa, {
                            display: j.X.Flex,
                            flexDirection: j.Aa.Row,
                            alignItems: j.f.Center
                        }, h.createElement(j.q, {
                            src: this.props.member.avatarSrc,
                            alt: e,
                            size: 30
                        }), h.createElement(j.Xa, {
                            margin: {
                                left: 1
                            }
                        }, h.createElement(j.W, null, this.props.member.displayName))), h.createElement(j.Xa, {
                            display: j.X.Flex,
                            flexDirection: j.Aa.Row,
                            alignItems: j.f.Center
                        }, this.state.isHovered && this.renderButtons())))
                    }, t
                }(h.Component),
                w = function(e) {
                    var t = function(t, r) {
                        var a, o = e.members.findIndex(function(e) {
                            return e.id === t
                        });
                        switch (r) {
                            case n.ToTop:
                                a = 0;
                                break;
                            case n.Up:
                                a = o - 1;
                                break;
                            case n.Down:
                                a = o + 1;
                                break;
                            case n.ToBottom:
                                a = e.members.length - 1;
                                break;
                            default:
                                a = o
                        }
                        e.onMoveClick(t, a)
                    };
                    return h.createElement(j.Xa, {
                        fullWidth: !0,
                        margin: {
                            top: 2,
                            bottom: 2
                        }
                    }, e.header && h.createElement(j.W, {
                        type: j.Pb.H3
                    }, e.header), e.members.length ? function(r) {
                        var n = e.onMoveClick ? t : void 0;
                        return h.createElement(k.b, null, h.createElement(j.Xa, {
                            className: "members-list",
                            display: j.X.Flex,
                            flexDirection: j.Aa.Column
                        }, r.map(function(t, o) {
                            return h.createElement(N, {
                                key: t.id,
                                buttonConfiguration: function(t, r) {
                                    if (!e.onMoveClick) return a.RemoveOnly;
                                    var n = 0 === t,
                                        o = t === r - 1;
                                    return n && o ? a.RemoveOnly : n ? a.MoveDownAndRemoveOnly : o ? a.MoveUpAndRemoveOnly : a.AllButtons
                                }(o, r.length),
                                member: t,
                                listItemsSelector: e.listItemsSelector,
                                onDeleteClick: e.onDeleteClick,
                                onMoveClick: n,
                                isDisabled: e.isDisabled
                            })
                        })))
                    }(e.members) : h.createElement(j.W, null, e.emptyStateText))
                },
                I = function(e) {
                    return h.createElement(k.b, null, h.createElement(j.Xa, {
                        display: j.X.Flex,
                        flexDirection: j.Aa.Column,
                        alignItems: j.f.Start,
                        padding: 2
                    }, h.createElement(j.Xa, {
                        display: j.X.Flex,
                        padding: {
                            bottom: 2
                        },
                        fullWidth: !0
                    }, h.createElement(j.W, {
                        "data-test-selector": e.titleSelector,
                        type: j.Pb.H1
                    }, e.title)), e.children))
                };
            ! function(e) {
                e.Revenue = "revenue", e.Stats = "stats", e.Members = "members", e.FeaturedChannels = "featured-channels", e.Settings = "settings"
            }(C || (C = {})),
            function(e) {
                e.ChannelNotFoundByLogin = "CHANNEL_NOT_FOUND_BY_LOGIN", e.ChannelPendingInvitation = "CHANNEL_PENDING_INVITATION", e.ChannelAlreadyMember = "CHANNEL_ALREADY_MEMBER", e.ChannelAlreadyFeatured = "CHANNEL_ALREADY_FEATURED"
            }(S || (S = {}));
            var A, L = function(e) {
                    for (var t in S)
                        if (e.includes(S[t])) return S[t];
                    return ""
                },
                R = function(e) {
                    switch (e) {
                        case S.ChannelNotFoundByLogin:
                            return Object(g.d)("Channel not found", "TeamsDashboard");
                        case S.ChannelPendingInvitation:
                            return Object(g.d)("Channel has a pending invitation", "TeamsDashboard");
                        case S.ChannelAlreadyMember:
                            return Object(g.d)("Channel is already a member", "TeamsDashboard");
                        case S.ChannelAlreadyFeatured:
                            return Object(g.d)("Channel is already featured", "TeamsDashboard");
                        default:
                            return Object(g.d)("Unknown Error", "TeamsDashboard")
                    }
                },
                M = 100,
                P = function(e) {
                    return e.map(F)
                },
                F = function(e) {
                    return {
                        id: e._id,
                        displayName: e.display_name,
                        avatarSrc: e.logo
                    }
                },
                B = function(e, t) {
                    return e.map(function(e, r) {
                        return {
                            id: e.id,
                            displayName: e.displayName,
                            avatarSrc: e.avatarSrc,
                            checked: t && r < M
                        }
                    })
                },
                x = function(e) {
                    return e.filter(function(e) {
                        return e.checked
                    }).map(function(e) {
                        return e.id
                    })
                },
                U = function() {
                    return Object(g.d)("Twitch username", "TeamsDashboard")
                },
                G = function(e) {
                    switch (e) {
                        case C.Revenue:
                            return Object(g.d)("Revenue", "TeamsDashboard");
                        case C.Stats:
                            return Object(g.d)("Stats", "TeamsDashboard");
                        case C.Members:
                            return Object(g.d)("Members", "TeamsDashboard");
                        case C.FeaturedChannels:
                            return Object(g.d)("Featured Channels", "TeamsDashboard");
                        case C.Settings:
                            return Object(g.d)("Settings", "TeamsDashboard");
                        default:
                            return ""
                    }
                },
                K = r("b6Yk"),
                X = function(e, t) {
                    return l.__awaiter(void 0, void 0, Promise, function() {
                        var r, n, a, o;
                        return l.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return r = "/v5/teams/" + e + "/dashboard/featured_channels", [4, K.a.post(r, {
                                        body: {
                                            channel_login: t
                                        }
                                    })];
                                case 1:
                                    return (n = i.sent()).body && 200 === n.status ? [2, F(n.body.featured_channel.channel)] : (a = n.error.message) && "" !== (o = L(a)) ? [2, Promise.reject(o)] : [2, Promise.reject(JSON.stringify(n.error))]
                            }
                        })
                    })
                },
                W = function(e, t) {
                    return H("/v5/teams/" + e + "/dashboard/channels/" + t + "/membership")
                },
                V = function(e, t) {
                    return H("/v5/teams/" + e + "/dashboard/featured_channels/" + t)
                },
                z = function(e, t) {
                    return H("/v5/teams/" + e + "/dashboard/channels/" + t + "/invitation")
                },
                H = function(e) {
                    return l.__awaiter(void 0, void 0, Promise, function() {
                        return l.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, K.a.delete(e)];
                                case 1:
                                    return [2, 204 === t.sent().status]
                            }
                        })
                    })
                },
                Y = function(e, t, r) {
                    return Z("/v5/teams/" + e + "/dashboard/channels/" + t + "/membership", r)
                },
                J = function(e, t, r) {
                    return Z("/v5/teams/" + e + "/dashboard/featured_channels/" + t, r)
                },
                Z = function(e, t) {
                    return l.__awaiter(void 0, void 0, Promise, function() {
                        return l.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, K.a.put(e, {
                                        body: {
                                            display_position: t
                                        }
                                    })];
                                case 1:
                                    return [2, 204 === r.sent().status]
                            }
                        })
                    })
                },
                q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            featuredChannels: [],
                            tooltipError: "",
                            isDisabled: !1
                        }, t.handleAddFeaturedChannel = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t, r;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            this.setState({
                                                tooltipError: ""
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, X(this.props.teamName, e)];
                                        case 2:
                                            return t = n.sent(), this.setState({
                                                featuredChannels: this.state.featuredChannels.concat(t)
                                            }), [3, 4];
                                        case 3:
                                            return r = n.sent(), this.setState({
                                                tooltipError: R(r)
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleDeleteFeaturedChannel = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                return l.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.setState({
                                                isDisabled: !0
                                            }), [4, V(this.props.teamName, e)];
                                        case 1:
                                            return t.sent() && this.setState({
                                                featuredChannels: this.state.featuredChannels.filter(function(t) {
                                                    return t.id !== e
                                                })
                                            }), this.setState({
                                                isDisabled: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t.handleMoveFeaturedChannel = function(e, r) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return l.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return this.setState({
                                                isDisabled: !0
                                            }), [4, J(this.props.teamName, e, r)];
                                        case 1:
                                            return a.sent() && (t = this.state.featuredChannels.findIndex(function(t) {
                                                return t.id === e
                                            }), (n = this.state.featuredChannels.slice()).splice(r, 0, n.splice(t, 1)[0]), this.setState({
                                                featuredChannels: n
                                            })), this.setState({
                                                isDisabled: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        return l.__awaiter(this, void 0, void 0, function() {
                            var e, t;
                            return l.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return e = this.setState, t = {}, [4, function(e) {
                                            return l.__awaiter(void 0, void 0, Promise, function() {
                                                var t, r, n;
                                                return l.__generator(this, function(a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            return t = "/v5/teams/" + e + "/dashboard/featured_channels", [4, K.a.get(t)];
                                                        case 1:
                                                            return !(r = a.sent()).body || 200 !== r.status || r.error || r.requestError ? [2, []] : (n = r.body.featured_channels.map(function(e) {
                                                                return e.channel
                                                            }), [2, P(n)])
                                                    }
                                                })
                                            })
                                        }(this.props.teamName)];
                                    case 1:
                                        return e.apply(this, [(t.featuredChannels = r.sent(), t)]), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return h.createElement(I, {
                            title: G(C.FeaturedChannels),
                            titleSelector: "featured-channels-page-title"
                        }, h.createElement(_, {
                            descriptor: Object(g.d)("Pick channels to feature. Featured channels do not need to be a member of the team.\nIf none of the featured channels are live, your team will feature a live member based on member ordering.", "TeamsDashboard"),
                            placeholder: U(),
                            buttonText: Object(g.d)("Add", "TeamsDashboard"),
                            submitAction: this.handleAddFeaturedChannel,
                            errorString: this.state.tooltipError
                        }), h.createElement(w, {
                            emptyStateText: Object(g.d)("No featured channels.", "TeamsDashboard"),
                            members: this.state.featuredChannels,
                            listItemsSelector: "featured-channels-list-items",
                            onDeleteClick: this.handleDeleteFeaturedChannel,
                            isDisabled: this.state.isDisabled,
                            onMoveClick: this.handleMoveFeaturedChannel
                        }))
                    }, t = l.__decorate([Object(D.b)("FeaturedChannelsPage", {
                        autoReportInteractive: !0,
                        destination: T.a.TeamsDashboardFeaturedChannels
                    })], t)
                }(h.Component),
                Q = r("6XEL");
            ! function(e) {
                e.StatsRevealed = "stats_revealed", e.RevenueRevealed = "revenue_revealed"
            }(A || (A = {}));
            var $, ee = function(e, t) {
                    return l.__awaiter(void 0, void 0, void 0, function() {
                        var r, n, a;
                        return l.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return r = "/v5/teams/" + e + "/dashboard/members" + (t ? "?" + t + "=true" : ""), [4, Object(Q.c)({
                                        path: r
                                    })];
                                case 1:
                                    return n = o.sent(), a = n.body ? n.body.channels : [], [2, P(a)]
                            }
                        })
                    })
                },
                te = function(e, t) {
                    return l.__awaiter(void 0, void 0, Promise, function() {
                        var r, n, a, o;
                        return l.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return r = "/v5/teams/" + e + "/dashboard/invitations", [4, K.a.post(r, {
                                        body: {
                                            channel_login: t
                                        }
                                    })];
                                case 1:
                                    return (n = i.sent()).body && 200 === n.status ? [2, F(n.body.invitation.channel)] : (a = n.error.message) && "" !== (o = L(a)) ? [2, Promise.reject(o)] : [2, Promise.reject(JSON.stringify(n.error))]
                            }
                        })
                    })
                },
                re = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            members: [],
                            invitations: [],
                            invitationError: "",
                            isDisabled: !1
                        }, t.onInviteClick = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t, r, n;
                                return l.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            this.setState({
                                                invitationError: ""
                                            }), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, te(this.props.teamName, e)];
                                        case 2:
                                            return t = a.sent(), r = this.state.invitations.concat(t), this.setState({
                                                invitations: r
                                            }), [3, 4];
                                        case 3:
                                            return n = a.sent(), this.setState({
                                                invitationError: R(n)
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleMoveMember = function(e, r) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return l.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return this.setState({
                                                isDisabled: !0
                                            }), [4, Y(this.props.teamName, e, r)];
                                        case 1:
                                            return a.sent() && (t = this.state.members.findIndex(function(t) {
                                                return t.id === e
                                            }), (n = this.state.members.slice()).splice(r, 0, n.splice(t, 1)[0]), this.setState({
                                                members: n
                                            })), this.setState({
                                                isDisabled: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t.handleDeleteInvitation = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                return l.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.setState({
                                                isDisabled: !0
                                            }), [4, z(this.props.teamName, e)];
                                        case 1:
                                            return t.sent() && this.setState({
                                                invitations: this.state.invitations.filter(function(t) {
                                                    return t.id !== e
                                                }),
                                                isDisabled: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t.handleDeleteMember = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                return l.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.setState({
                                                isDisabled: !0
                                            }), [4, W(this.props.teamName, e)];
                                        case 1:
                                            return t.sent() && this.setState({
                                                members: this.state.members.filter(function(t) {
                                                    return t.id !== e
                                                }),
                                                isDisabled: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        return l.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return l.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, Promise.all([ee(this.props.teamName), function(e) {
                                            return l.__awaiter(void 0, void 0, void 0, function() {
                                                var t, r, n;
                                                return l.__generator(this, function(a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            return t = "/v5/teams/" + e + "/dashboard/invitations", [4, Object(Q.c)({
                                                                path: t
                                                            })];
                                                        case 1:
                                                            return r = a.sent(), n = r.body ? r.body.invitations.map(function(e) {
                                                                return e.channel
                                                            }) : [], [2, P(n)]
                                                    }
                                                })
                                            })
                                        }(this.props.teamName)])];
                                    case 1:
                                        return e = t.sent(), this.setState({
                                            members: e[0],
                                            invitations: e[1]
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return h.createElement(I, {
                            title: G(C.Members),
                            titleSelector: "members-page-title"
                        }, h.createElement(_, {
                            descriptor: Object(g.d)("Live team members will always be at the top. Order is respected for live members and offline members.\nOrder also determines which member will be featured in the video player.", "TeamsDashboard"),
                            placeholder: U(),
                            buttonText: Object(g.d)("Invite", "TeamsDashboard"),
                            submitAction: this.onInviteClick,
                            errorString: this.state.invitationError
                        }), h.createElement(w, {
                            emptyStateText: Object(g.d)("No pending invitations.", "TeamsDashboard"),
                            header: Object(g.d)("Pending Team Invitations", "TeamsDashboard"),
                            members: this.state.invitations,
                            listItemsSelector: "invitations-list-items",
                            onDeleteClick: this.handleDeleteInvitation,
                            isDisabled: this.state.isDisabled
                        }), h.createElement(w, {
                            emptyStateText: Object(g.d)("No team members yet.", "TeamsDashboard"),
                            header: Object(g.d)("Current Members", "TeamsDashboard"),
                            members: this.state.members,
                            listItemsSelector: "members-list-items",
                            onDeleteClick: this.handleDeleteMember,
                            onMoveClick: this.handleMoveMember,
                            isDisabled: this.state.isDisabled
                        }))
                    }, t = l.__decorate([Object(D.b)("MembersPage", {
                        autoReportInteractive: !0,
                        destination: T.a.TeamsDashboardMembers
                    })], t)
                }(h.Component),
                ne = function(e) {
                    return Object(g.c)(e, {
                        month: "short",
                        year: "numeric",
                        timeZone: "UTC"
                    })
                },
                ae = function(e) {
                    var t = Math.floor(e / 3600),
                        r = Math.floor(e % 3600 / 60),
                        n = e % 60 + "s";
                    return r && (n = r + "m" + n), t && (n = t + "h" + n), n
                },
                oe = function(e) {
                    return new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth()))
                },
                ie = function(e, t) {
                    var r = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth() + 1));
                    return r.getTime() > t.getTime() ? t : r
                },
                se = function(e) {
                    return new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth() - 1))
                },
                ce = function(e) {
                    var t = new Date(e.toISOString());
                    return t.setUTCHours(e.getUTCHours() + 4), t
                },
                ue = function(e) {
                    function t(t) {
                        var r = e.call(this, t) || this;
                        return r.handleChange = function(e) {
                            var t = new Date(e.currentTarget.value),
                                n = oe(t),
                                a = ie(n, r.validatedCurrentDate);
                            r.props.onMonthSelection(n, a)
                        }, r.getDropdownOptions = function(e, t) {
                            for (var r = [], n = oe(e); n >= t; n = se(n)) {
                                var a = n.toISOString();
                                r.push(h.createElement("option", {
                                    key: a,
                                    value: a
                                }, ne(n)))
                            }
                            return r
                        }, r.validatedCurrentDate = t.currentDate < t.earliestDate ? t.earliestDate : t.currentDate, r
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return h.createElement(j.Xa, {
                            className: "month-select-menu"
                        }, h.createElement(j.vb, {
                            disabled: this.props.isDisabled,
                            onChange: this.handleChange
                        }, this.getDropdownOptions(this.validatedCurrentDate, this.props.earliestDate)))
                    }, t = l.__decorate([Object(D.b)("MonthSelectMenuComponent")], t)
                }(h.Component),
                le = ["twitch_subscriptions", "prime_subscriptions", "gift_subscriptions", "bits", "ads", "bounty_board"],
                de = function(e) {
                    switch (e) {
                        case "twitch_subscriptions":
                            return Object(g.d)("Subscriptions", "TeamsDashboardRevenueCategory");
                        case "prime_subscriptions":
                            return Object(g.d)("Twitch Prime", "TeamsDashboardRevenueCategory");
                        case "gift_subscriptions":
                            return Object(g.d)("Gifted Subs", "TeamsDashboardRevenueCategory");
                        case "bits":
                            return Object(g.d)("Bits", "TeamsDashboardRevenueCategory");
                        case "ads":
                            return Object(g.d)("Ads", "TeamsDashboardRevenueCategory");
                        case "bounty_board":
                            return Object(g.d)("Bounties", "TeamDashboardRevenueCategory");
                        default:
                            return ""
                    }
                },
                me = r("WyAD"),
                he = function(e) {
                    return Object(g.f)(e / 100, {
                        style: "currency",
                        currency: "USD"
                    })
                },
                fe = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.canvas && (this.setCanvasResolution(), this.myChart = new me(this.canvas, {
                            type: "bar",
                            data: pe(this.props.datasets, this.props.timestampLabels),
                            options: {
                                tooltips: {
                                    backgroundColor: "rgba(0,0,0,0.8)",
                                    bodyFontColor: "#fff",
                                    bodyFontSize: 14,
                                    bodyFontStyle: "normal",
                                    bodySpacing: 4,
                                    caretSize: 6,
                                    enabled: !0,
                                    intersect: !1,
                                    mode: "index",
                                    multiKeyBackground: "rgba(0,0,0,0)",
                                    position: "nearest",
                                    titleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                                    titleFontSize: 14,
                                    titleFontColor: "#fff",
                                    titleSpacing: 0,
                                    titleMarginBottom: 10,
                                    xPadding: 15,
                                    yPadding: 12,
                                    callbacks: {
                                        title: function(e) {
                                            var t = new Date(e[0].xLabel || "1970-01-01Z"),
                                                r = e.map(function(e) {
                                                    return e.yLabel || "0"
                                                }).reduce(function(e, t) {
                                                    return e + Math.round(parseFloat(t))
                                                }, 0);
                                            return he(r) + " - " + function(e) {
                                                return Object(g.c)(e, {
                                                    weekday: "short",
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                    timeZone: "UTC"
                                                })
                                            }(t)
                                        },
                                        label: function(e, t) {
                                            var r = Math.round(parseFloat(e.yLabel || "0")),
                                                n = "";
                                            return Array.isArray(t.datasets) && void 0 !== e.datasetIndex && (n = t.datasets[e.datasetIndex].label || ""), he(r) + " " + n
                                        }
                                    }
                                },
                                legend: {
                                    position: "bottom",
                                    labels: {
                                        boxWidth: 12
                                    }
                                },
                                responsive: !0,
                                maintainAspectRatio: !1,
                                scales: {
                                    xAxes: [{
                                        stacked: !0,
                                        gridLines: {
                                            display: !1
                                        },
                                        ticks: {
                                            display: !1
                                        }
                                    }],
                                    yAxes: [{
                                        stacked: !0,
                                        gridLines: {
                                            color: "rgba(150,150,150,0.2)",
                                            zeroLineColor: "rgba(150,150,150,0.2)",
                                            tickMarkLength: 5
                                        },
                                        ticks: {
                                            min: 0,
                                            maxTicksLimit: 5,
                                            callback: function(e) {
                                                return he(e)
                                            }
                                        }
                                    }]
                                }
                            }
                        }))
                    }, t.prototype.componentWillUnmount = function() {
                        this.myChart && this.myChart.destroy()
                    }, t.prototype.componentWillUpdate = function(e) {
                        this.myChart.data = pe(e.datasets, e.timestampLabels), this.myChart.update()
                    }, t.prototype.render = function() {
                        var e = this;
                        return h.createElement(j.Pa, {
                            flexGrow: 0,
                            flexShrink: 1,
                            fullWidth: !0
                        }, h.createElement("canvas", {
                            ref: function(t) {
                                return e.canvas = t
                            }
                        }))
                    }, t.prototype.setCanvasResolution = function() {
                        if (this.canvas) {
                            var e = be(this.canvas.getContext("2d"));
                            this.canvas.height = 36 * e, this.canvas.style.height = "36rem", this.canvas.getContext("2d").setTransform(e, 0, 0, e, 0, 0)
                        }
                    }, t = l.__decorate([Object(D.b)("RevenueCanvas", {
                        autoReportInteractive: !0
                    })], t)
                }(h.Component),
                be = function(e) {
                    return 1 / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
                },
                pe = function(e, t) {
                    return {
                        labels: t.slice(0),
                        datasets: e.map(function(e) {
                            return {
                                label: e.categoryLabel,
                                backgroundColor: e.color,
                                borderCapStyle: "round",
                                borderColor: "#6441A4",
                                borderWidth: 0,
                                fill: !0,
                                lineTension: .3,
                                pointRadius: 4,
                                pointBackgroundColor: "#B2A0D2",
                                pointBorderColor: "#B2A0D2",
                                pointBorderWidth: 2,
                                pointHoverRadius: 8,
                                pointHoverBackgroundColor: "#6441A4",
                                pointHoverBorderWidth: 6,
                                pointHoverBorderColor: "#B2A0D2",
                                data: e.data.slice(0),
                                spanGaps: !0
                            }
                        })
                    }
                },
                ge = fe,
                ve = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.formatRevenueChartData = function(e) {
                            var t = {
                                twitch_subscriptions: {
                                    categoryLabel: de("twitch_subscriptions"),
                                    color: j.R.Purple8,
                                    data: []
                                },
                                prime_subscriptions: {
                                    categoryLabel: de("prime_subscriptions"),
                                    color: j.R.PrimeBlue,
                                    data: []
                                },
                                gift_subscriptions: {
                                    categoryLabel: de("gift_subscriptions"),
                                    color: j.R.Purple6,
                                    data: []
                                },
                                bits: {
                                    categoryLabel: de("bits"),
                                    color: "#3dc6ae",
                                    data: []
                                },
                                ads: {
                                    categoryLabel: de("ads"),
                                    color: j.R.Purple11,
                                    data: []
                                },
                                timestampLabels: [],
                                bounty_board: {
                                    categoryLabel: de("bounty_board"),
                                    color: j.R.Yellow,
                                    data: []
                                }
                            };
                            return Object.keys(e).sort().reduce(function(t, r) {
                                return t.timestampLabels.push(r), le.forEach(function(n) {
                                    t[n].data.push(e[r][n])
                                }), t
                            }, t)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = this.formatRevenueChartData(this.props.data),
                            t = le.map(function(t) {
                                return e[t]
                            });
                        return h.createElement(ge, {
                            datasets: t,
                            timestampLabels: e.timestampLabels
                        })
                    }, t
                }(h.PureComponent);
            ! function(e) {
                e.Title = "revenue-summary-item-title", e.Symbol = "revenue-summary-item-symbol", e.Dollars = "revenue-summary-item-dollars"
            }($ || ($ = {}));
            var ye, Oe, Ee = function(e) {
                    var t, r;
                    return e.isLoading ? (t = h.createElement(j.W, {
                        type: j.Pb.H5
                    }, h.createElement(j.eb, {
                        width: 90
                    })), r = h.createElement(j.Xa, null, h.createElement(j.eb, {
                        width: 140,
                        height: 40
                    }))) : (t = h.createElement(j.W, {
                        color: j.O.Alt2,
                        type: j.Pb.H5,
                        "data-test-selector": $.Title
                    }, e.title), r = h.createElement(j.Xa, {
                        alignItems: j.f.Start,
                        display: j.X.Flex,
                        flexDirection: j.Aa.Row
                    }, h.createElement(j.Xa, {
                        margin: {
                            top: .5
                        }
                    }, h.createElement(j.W, {
                        "data-test-selector": $.Symbol,
                        type: j.Pb.H4
                    }, "$")), h.createElement(j.W, {
                        "data-test-selector": $.Dollars,
                        type: j.Pb.H1
                    }, Object(g.f)(Math.floor(e.cents / 100))))), h.createElement(j.Xa, {
                        display: j.X.Flex,
                        flexDirection: j.Aa.Column,
                        flexGrow: 1,
                        margin: 1
                    }, t, r)
                },
                Te = function(e) {
                    var t = e.revenues.reduce(function(e, t) {
                            return e + t.cents
                        }, 0),
                        r = e.revenues.map(function(t, r) {
                            return h.createElement(Ee, {
                                cents: t.cents,
                                key: r,
                                isLoading: e.isLoading,
                                title: t.title + " *"
                            })
                        });
                    return h.createElement(j.zb, {
                        borderMarked: !0,
                        border: !0,
                        fullWidth: !0,
                        background: j.r.Base,
                        display: j.X.Flex,
                        justifyContent: j.Wa.Between,
                        alignItems: j.f.Center,
                        padding: 1
                    }, h.createElement(Ee, {
                        cents: t,
                        isLoading: e.isLoading,
                        title: Object(g.d)("Total", "TeamsDashboardRevenueSummaryBrick") + " *"
                    }), r)
                },
                De = function(e) {
                    return h.createElement(Te, {
                        isLoading: e.isLoading,
                        revenues: je(e.data)
                    })
                },
                je = function(e) {
                    var t = {
                        twitch_subscriptions: 0,
                        prime_subscriptions: 0,
                        gift_subscriptions: 0,
                        bits: 0,
                        ads: 0,
                        bounty_board: 0
                    };
                    return Object.keys(e).forEach(function(r) {
                        var n = e[r];
                        le.forEach(function(e) {
                            t[e] += Math.round(n[e])
                        })
                    }), le.map(function(e) {
                        return {
                            title: de(e),
                            cents: t[e]
                        }
                    })
                },
                _e = r("eJ65"),
                ke = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderMenu = function() {
                            if (t.props.isLoading) return h.createElement(j.eb, {
                                width: 180,
                                height: 30
                            });
                            var e = t.props.members.filter(function(e) {
                                    return e.checked
                                }).length,
                                r = Object(g.d)("Select All", "TeamsDashboard");
                            return t.props.members.length > M && (r = Object(g.d)("Select First {maxSelected, number}", {
                                maxSelected: M
                            }, "TeamsDashboard")), h.createElement(_e.a, {
                                onToggle: t.toggleOpenClose
                            }, h.createElement(j.z, {
                                dropdown: !0,
                                type: j.F.Hollow,
                                disabled: t.props.isDisabled
                            }, Object(g.d)("{checkedCount, plural, one {Stats for # Team Member} other {Stats for # Team Members}}", {
                                checkedCount: e
                            }, "TeamsDashboard")), h.createElement(j.u, {
                                direction: j.v.BottomLeft,
                                elevation: 4,
                                noTail: !0
                            }, h.createElement(k.b, {
                                className: "team-members-select-menu__scroller"
                            }, h.createElement(j.Xa, null, h.createElement(j.zb, {
                                borderBottom: !0,
                                padding: 1
                            }, h.createElement(j.N, {
                                label: r,
                                checked: t.props.groupChecked,
                                onChange: t.props.toggleGroupChecked
                            })), t.props.members.map(function(r) {
                                var n = {
                                    label: r.displayName,
                                    checked: r.checked,
                                    onChange: t.props.toggleMemberChecked.bind(t, r),
                                    disabled: e >= M && !r.checked
                                };
                                return h.createElement(j.Xa, {
                                    key: r.id,
                                    margin: 1
                                }, h.createElement(j.N, l.__assign({}, n)))
                            })))))
                        }, t.toggleOpenClose = function(e) {
                            e && JSON.stringify(t.props.members) !== t.membersPreviouslyCheckedJSON ? t.props.onMemberSelectClose(t.props.members) : t.membersPreviouslyCheckedJSON = JSON.stringify(t.props.members)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return h.createElement(j.Xa, {
                            className: "team-members-select-menu"
                        }, this.renderMenu())
                    }, t = l.__decorate([Object(D.b)("TeamMembersSelectMenu", {
                        autoReportInteractive: !0
                    })], t)
                }(h.Component),
                Ce = function(e, t, r) {
                    return Object.keys(e).reduce(function(r, n) {
                        return r + t(new Date(n), e[n])
                    }, r)
                },
                Se = function(e, t) {
                    var r = encodeURIComponent(e),
                        n = document.createElement("a");
                    n.href = "data:text/csv;charset=utf-8," + r, n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n)
                },
                Ne = function() {
                    return Object(g.d)("Time Zone", "TeamsDashboard")
                },
                we = function() {
                    return Object(g.d)("Export Data", "TeamsDashboard")
                },
                Ie = function(e) {
                    return Ae(e) + " " + Le(e)
                },
                Ae = function(e) {
                    return e.getUTCFullYear() + "-" + Re(e.getUTCMonth() + 1) + "-" + Re(e.getUTCDate())
                },
                Le = function(e) {
                    return Re(e.getUTCHours()) + ":" + Re(e.getUTCMinutes()) + ":" + Re(e.getUTCSeconds())
                },
                Re = function(e) {
                    return Object(g.f)(e, {
                        minimumIntegerDigits: 2,
                        maximumFractionDigits: 0
                    })
                },
                Me = function(e, t, r, n) {
                    return l.__awaiter(void 0, void 0, Promise, function() {
                        var a, o;
                        return l.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return a = "/v5/teams/" + e + "/revenues?channel_ids=" + t + "&start_date=" + r + "&end_date=" + n + "&fraction=day", [4, Object(Q.c)({
                                        path: a
                                    })];
                                case 1:
                                    return o = i.sent(), [2, Pe(r, n, o.body && o.body.revenues ? o.body.revenues : {})]
                            }
                        })
                    })
                },
                Pe = function(e, t, r) {
                    for (var n = Fe(e, t), a = 0, o = Object.keys(r); a < o.length; a++)
                        for (var i = o[a], s = 0, c = Object.keys(r[i]); s < c.length; s++) {
                            var u = c[s];
                            if (le.includes(u))
                                for (var l = 0, d = r[i][u]; l < d.length; l++) {
                                    var m = d[l],
                                        h = Be(m.timestamp);
                                    n[h] && (n[h][u] += m.cents)
                                }
                        }
                    return n
                },
                Fe = function(e, t) {
                    for (var r = {}, n = new Date(Be(e)); n < new Date(t); n.setUTCDate(n.getUTCDate() + 1)) r[n.toISOString()] = {
                        gift_subscriptions: 0,
                        twitch_subscriptions: 0,
                        prime_subscriptions: 0,
                        bits: 0,
                        ads: 0,
                        bounty_board: 0
                    };
                    return r
                },
                Be = function(e) {
                    var t = new Date(e);
                    return new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())).toISOString()
                },
                xe = function() {
                    var e = Object(g.d)("Date", "TeamsDashboard") + "," + Ne(),
                        t = "," + Object(g.d)("Total", "TeamsDashboard") + "\n";
                    return le.reduce(function(e, t) {
                        return e + "," + de(t)
                    }, e) + t
                },
                Ue = function(e, t) {
                    var r = Ae(e) + ",UTC",
                        n = le.reduce(function(e, r) {
                            return e + Math.round(t[r])
                        }, 0),
                        a = "," + Ge(n) + "\n";
                    return le.reduce(function(e, r) {
                        return e + "," + Ge(t[r])
                    }, r) + a
                },
                Ge = function(e) {
                    return Object(g.f)(e / 100, {
                        useGrouping: !1,
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })
                },
                Ke = function(e) {
                    function t(t) {
                        var r = e.call(this, t) || this;
                        return r.toggleMemberChecked = function(e) {
                            var t = r.state.members.slice(),
                                n = t.find(function(t) {
                                    return t.id === e.id
                                });
                            n.checked = !n.checked, r.setState({
                                members: t,
                                groupChecked: !1
                            })
                        }, r.toggleGroupChecked = function() {
                            var e = !r.state.groupChecked,
                                t = B(r.state.members, e);
                            r.setState({
                                groupChecked: e,
                                members: t
                            })
                        }, r.renderChartLoadingSpinner = function() {
                            return h.createElement(j.zb, {
                                attachTop: !0,
                                attachLeft: !0,
                                background: j.r.Base,
                                fullHeight: !0,
                                fullWidth: !0,
                                position: j.fb.Absolute
                            }, h.createElement(j.Za, {
                                delay: 100,
                                fillContent: !0,
                                size: j.xb.Large
                            }))
                        }, r.handleTimeRangeChange = function(e, t) {
                            return l.__awaiter(r, void 0, void 0, function() {
                                var r;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.setState({
                                                isLoadingRevenues: !0
                                            }), [4, Me(this.props.teamName, x(this.state.members), e.toISOString(), t.toISOString())];
                                        case 1:
                                            return r = n.sent(), this.setState({
                                                startTime: e,
                                                endTime: t,
                                                revenues: r,
                                                isLoadingRevenues: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, r.handleMemberSelectionChange = function() {
                            return l.__awaiter(r, void 0, void 0, function() {
                                var e;
                                return l.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.setState({
                                                isLoadingRevenues: !0
                                            }), [4, Me(this.props.teamName, x(this.state.members), this.state.startTime.toISOString(), this.state.endTime.toISOString())];
                                        case 1:
                                            return e = t.sent(), this.setState({
                                                revenues: e,
                                                isLoadingRevenues: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, r.handleCSVClick = function() {
                            var e = Ce(r.state.revenues, Ue, xe());
                            Se(e, G(C.Revenue) + " - " + ne(r.state.startTime) + ".csv")
                        }, r.state = {
                            isLoadingMembers: !0,
                            members: [],
                            startTime: oe(r.props.currentDate),
                            endTime: r.props.currentDate,
                            groupChecked: !0,
                            isLoadingRevenues: !0,
                            revenues: {}
                        }, r
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        return l.__awaiter(this, void 0, void 0, function() {
                            var e, t = this;
                            return l.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, ee(this.props.teamName, A.RevenueRevealed)];
                                    case 1:
                                        return e = r.sent(), this.setState({
                                            isLoadingMembers: !1,
                                            members: B(e, !0)
                                        }, function() {
                                            return l.__awaiter(t, void 0, void 0, function() {
                                                var e;
                                                return l.__generator(this, function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return [4, Me(this.props.teamName, x(this.state.members), this.state.startTime.toISOString(), this.state.endTime.toISOString())];
                                                        case 1:
                                                            return e = t.sent(), this.setState({
                                                                isLoadingRevenues: !1,
                                                                revenues: e
                                                            }), [2]
                                                    }
                                                })
                                            })
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        var e = this.state.isLoadingMembers || this.state.isLoadingRevenues;
                        return h.createElement(I, {
                            title: G(C.Revenue),
                            titleSelector: "revenue-page-title"
                        }, h.createElement(j.zb, {
                            border: !0,
                            fullWidth: !0
                        }, h.createElement(j.Xa, {
                            display: j.X.Flex,
                            flexDirection: j.Aa.Row,
                            justifyContent: j.Wa.Between,
                            margin: 2
                        }, h.createElement(j.Xa, {
                            display: j.X.Flex,
                            flexDirection: j.Aa.Row
                        }, h.createElement(j.Xa, {
                            margin: {
                                right: 1
                            }
                        }, h.createElement(ke, {
                            isDisabled: e,
                            isLoading: this.state.isLoadingMembers,
                            members: this.state.members,
                            groupChecked: this.state.groupChecked,
                            onMemberSelectClose: this.handleMemberSelectionChange,
                            toggleMemberChecked: this.toggleMemberChecked,
                            toggleGroupChecked: this.toggleGroupChecked
                        })), h.createElement(ue, {
                            isDisabled: e,
                            earliestDate: this.props.earliestDataDate,
                            currentDate: this.props.currentDate,
                            onMonthSelection: this.handleTimeRangeChange
                        })), h.createElement(j.Xa, null, h.createElement(j.z, {
                            disabled: e,
                            "data-test-selector": "revenue-csv-button",
                            icon: j.pb.Download,
                            onClick: this.handleCSVClick,
                            type: j.F.Hollow
                        }, we()))), h.createElement(j.Xa, {
                            margin: 2
                        }, h.createElement(De, {
                            isLoading: e,
                            data: this.state.revenues
                        }), h.createElement(j.Xa, {
                            margin: {
                                top: .5
                            }
                        }, h.createElement(j.W, {
                            color: j.O.Alt2
                        }, Object(g.d)("* All revenue values are estimated (in $USD)", "TeamsDashboard")))), h.createElement(j.zb, {
                            background: j.r.Base,
                            borderTop: !0,
                            padding: 2
                        }, h.createElement(j.Xa, {
                            className: "chart-container",
                            position: j.fb.Relative
                        }, h.createElement(ve, {
                            data: this.state.revenues
                        }), e ? this.renderChartLoadingSpinner() : null))))
                    }, t = l.__decorate([Object(D.b)("RevenuePage", {
                        autoReportInteractive: !0,
                        destination: T.a.TeamsDashboardRevenue
                    })], t)
                }(h.Component),
                Xe = r("idPT"),
                We = r("O3/n"),
                Ve = r("Pp1Y"),
                ze = function(e) {
                    var t = e.teamName;
                    return h.createElement(Xe.a, null, h.createElement(j.Xa, {
                        margin: 1
                    }, h.createElement(We.a, null, Object(g.d)("Team Dashboard", "TeamsDashboard")), h.createElement("ul", null, h.createElement(He, {
                        to: "/teams/" + t + "/dashboard/" + C.Revenue,
                        testSelector: "side-nav-revenue"
                    }, G(C.Revenue)), h.createElement(He, {
                        to: "/teams/" + t + "/dashboard/" + C.Stats,
                        testSelector: "side-nav-stats"
                    }, G(C.Stats)), h.createElement(He, {
                        to: "/teams/" + t + "/dashboard/" + C.Members
                    }, G(C.Members)), h.createElement(He, {
                        to: "/teams/" + t + "/dashboard/" + C.FeaturedChannels
                    }, G(C.FeaturedChannels)), h.createElement(He, {
                        to: "/teams/" + t + "/dashboard/" + C.Settings
                    }, G(C.Settings)))))
                },
                He = function(e) {
                    return h.createElement("li", null, h.createElement(Ve.a, {
                        "data-test-selector": e.testSelector,
                        exact: !0,
                        linkTo: e.to
                    }, e.children))
                },
                Ye = r("f00E");
            ! function(e) {
                e.Background = "background", e.Banner = "banner", e.Logo = "logo"
            }(ye || (ye = {})),
            function(e) {
                e.JPEG = "image/jpeg", e.PNG = "image/png"
            }(Oe || (Oe = {}));
            var Je, Ze = function(e, t) {
                    return l.__awaiter(void 0, void 0, Promise, function() {
                        var r, n;
                        return l.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 3, , 4]), [4, qe(e, t)];
                                case 1:
                                    return r = a.sent(), [4, Qe(r.url, t)];
                                case 2:
                                    if (!a.sent()) throw new Error("failed to upload");
                                    return [2, l.__assign({}, t, {
                                        id: r.image_id
                                    })];
                                case 3:
                                    return n = a.sent(), [2, Promise.reject(n)];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                },
                qe = function(e, t) {
                    return l.__awaiter(void 0, void 0, Promise, function() {
                        var r, n, a;
                        return l.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return r = "/v5/teams/" + e + "/image_uploads", n = {
                                        category: t.category,
                                        file_type: t.fileType,
                                        size: t.size
                                    }, [4, K.a.post(r, {
                                        body: n
                                    })];
                                case 1:
                                    return (a = o.sent()).body && 200 === a.status ? [2, a.body] : [2, Promise.reject(a.error)]
                            }
                        })
                    })
                },
                Qe = function(e, t) {
                    return l.__awaiter(void 0, void 0, Promise, function() {
                        var r, n;
                        return l.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return r = new URL(e).toString(), n = {
                                        method: "PUT",
                                        headers: {
                                            "content-length": t.size.toString(),
                                            "content-type": t.fileType
                                        },
                                        body: function(e) {
                                            for (var t = e.indexOf(";base64,") + ";base64,".length, r = e.substring(t), n = atob(r), a = new ArrayBuffer(n.length), o = new Uint8Array(a), i = 0; i < n.length; i++) o[i] = n.charCodeAt(i);
                                            return o
                                        }(t.url)
                                    }, [4, fetch(r, n)];
                                case 1:
                                    return [2, 200 === a.sent().status]
                            }
                        })
                    })
                },
                $e = r("/ZC1");
            ! function(e) {
                e.HoverWrapper = "hover-wrapper", e.Image = "image", e.Placeholder = "placeholder", e.PlaceholderContainer = "placeholder-container"
            }(Je || (Je = {}));
            var et, tt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isHoveringOver: !1
                        }, t.handleFilesSubmitted = function(e) {
                            t.props.onFileSelected(e[0])
                        }, t.handleMouseHover = function() {
                            t.setState(function(e) {
                                return {
                                    isHoveringOver: !e.isHoveringOver
                                }
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = Boolean(this.props.imageSrc),
                            t = this.state.isHoveringOver || this.props.isUploading;
                        return h.createElement(j.Qa, {
                            background: j.r.Alt2,
                            "data-test-selector": Je.HoverWrapper,
                            fullHeight: !0,
                            fullWidth: !0
                        }, h.createElement("div", {
                            onMouseOut: this.handleMouseHover,
                            onMouseOver: this.handleMouseHover
                        }, h.createElement($e.a, {
                            allowedFileTypes: this.props.allowedFileTypes,
                            error: this.props.hasErrored,
                            onFilesSubmitted: this.handleFilesSubmitted
                        }, h.createElement(j.zb, {
                            alignItems: j.f.Center,
                            background: j.r.Alt2,
                            display: j.X.Flex,
                            flexDirection: j.Aa.Column,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: j.Wa.Center,
                            overflow: j.ab.Hidden,
                            textAlign: j.Lb.Center
                        }, h.createElement(j.i, {
                            duration: j.k.Long,
                            enabled: e,
                            type: j.n.FadeIn
                        }, e ? this.renderImage() : null), h.createElement(j.i, {
                            enabled: t,
                            type: j.n.FadeIn
                        }, h.createElement(j.zb, {
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachTop: !0,
                            background: t ? j.r.Overlay : void 0,
                            color: t ? j.O.Overlay : j.O.Alt2,
                            "data-test-selector": Je.PlaceholderContainer,
                            display: !e || t ? j.X.Block : j.X.Hide,
                            position: j.fb.Absolute
                        }, this.props.isUploading ? this.renderLoadingSpinner() : this.renderPlaceholder()))))))
                    }, t.prototype.renderImage = function() {
                        return h.createElement(j.S, {
                            alt: this.props.imageAlt,
                            "data-test-selector": Je.Image,
                            src: this.props.imageSrc
                        })
                    }, t.prototype.renderLoadingSpinner = function() {
                        return h.createElement(j.Za, {
                            fillContent: !0,
                            inheritColor: !0
                        })
                    }, t.prototype.renderPlaceholder = function() {
                        return h.createElement(j.zb, {
                            alignItems: j.f.Center,
                            "data-test-selector": Je.Placeholder,
                            display: j.X.Flex,
                            flexDirection: j.Aa.Column,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: j.Wa.Center
                        }, h.createElement(j.ob, {
                            asset: j.pb.Upload,
                            height: 36,
                            width: 36,
                            type: j.qb.Inherit
                        }), h.createElement(j.W, {
                            fontSize: j.Ca.Size6
                        }, Object(g.d)("Choose a file", "TeamDashboard")))
                    }, t
                }(h.Component),
                rt = [Oe.JPEG, Oe.PNG],
                nt = 5e5,
                at = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hasErrored: !1,
                            isUploading: !1
                        }, t.handleFileSelected = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t, r = this;
                                return l.__generator(this, function(n) {
                                    return t = new FileReader, this.setState({
                                        hasErrored: !1
                                    }), t.onloadend = function() {
                                        return l.__awaiter(r, void 0, void 0, function() {
                                            var r, n, a;
                                            return l.__generator(this, function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        if (r = rt.includes(e.type), n = e.size <= nt, !r || !n) return [2, this.setState({
                                                            hasErrored: !0
                                                        })];
                                                        o.label = 1;
                                                    case 1:
                                                        return o.trys.push([1, 3, 4, 5]), this.setState({
                                                            isUploading: !0
                                                        }), [4, Ze(this.props.teamName, {
                                                            category: this.props.imageCategory,
                                                            fileType: e.type,
                                                            id: null,
                                                            size: e.size,
                                                            url: t.result
                                                        })];
                                                    case 2:
                                                        return a = o.sent(), [3, 5];
                                                    case 3:
                                                        return o.sent(), [2, this.setState({
                                                            hasErrored: !0
                                                        })];
                                                    case 4:
                                                        return this.setState({
                                                            isUploading: !1
                                                        }), [7];
                                                    case 5:
                                                        return this.props.onUpload(a), [2]
                                                }
                                            })
                                        })
                                    }, t.readAsDataURL(e), [2]
                                })
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return h.createElement(tt, {
                            allowedFileTypes: rt,
                            hasErrored: this.state.hasErrored,
                            imageAlt: this.props.imageAlt,
                            imageCategory: this.props.imageCategory,
                            imageSrc: this.props.imageSrc,
                            isUploading: this.state.isUploading,
                            onFileSelected: this.handleFileSelected
                        })
                    }, t
                }(h.Component),
                ot = function(e) {
                    return l.__awaiter(void 0, void 0, Promise, function() {
                        var t, r, n;
                        return l.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return t = "/v5/teams/" + e.name, r = {
                                        background_image_id: e.backgroundImageID,
                                        banner_id: e.bannerID,
                                        display_name: e.displayName,
                                        description_markdown: e.description,
                                        logo_id: e.logoID
                                    }, [4, K.a.put(t, {
                                        body: r
                                    })];
                                case 1:
                                    return (n = a.sent()).body && 200 === n.status ? [2, function(e) {
                                        var t = e.team;
                                        return {
                                            name: t.name,
                                            displayName: t.display_name,
                                            description: t.description_markdown,
                                            logoID: t.logo_id,
                                            logoURL: t.logo_url,
                                            bannerID: t.banner_id,
                                            bannerURL: t.banner_url,
                                            backgroundImageID: t.background_image_id,
                                            backgroundImageURL: t.background_image_url
                                        }
                                    }(n.body)] : [2, Promise.reject(n.error)]
                            }
                        })
                    })
                },
                it = 1e3;
            ! function(e) {
                e.PageTitle = "settings-page-title", e.FormGroupDisplayName = "form-group-display-name", e.FormGroupDescription = "form-group-description", e.FormGroupLogo = "form-group-logo", e.FormGroupBanner = "form-group-banner", e.FormGroupBackground = "form-group-background", e.Button = "button"
            }(et || (et = {}));
            var st, ct, ut, lt, dt = function(e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return r.setTeam = function(e) {
                        r.setState({
                            isDirty: !0,
                            team: l.__assign({}, r.state.team, e)
                        })
                    }, r.handleDisplayNameChange = function(e) {
                        r.setTeam({
                            displayName: e.target.value
                        })
                    }, r.handleDescriptionChange = function(e) {
                        r.setTeam({
                            description: e.target.value
                        })
                    }, r.handleLogoUpload = function(e) {
                        r.setTeam({
                            logoID: e.id,
                            logoURL: e.url
                        })
                    }, r.handleBannerUpload = function(e) {
                        r.setTeam({
                            bannerID: e.id,
                            bannerURL: e.url
                        })
                    }, r.handleBackgroundUpload = function(e) {
                        r.setTeam({
                            backgroundImageID: e.id,
                            backgroundImageURL: e.url
                        })
                    }, r.handleClick = function(e) {
                        return l.__awaiter(r, void 0, void 0, function() {
                            var e, t = this;
                            return l.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.fakeEnabled()) return [2];
                                        this.setState({
                                            isSaving: !0
                                        }), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, ot(this.state.team)];
                                    case 2:
                                        return e = r.sent(), [3, 4];
                                    case 3:
                                        return r.sent(), this.setState({
                                            didError: !0,
                                            isSaving: !1
                                        }), setTimeout(function() {
                                            t.setState({
                                                didError: !1
                                            })
                                        }, it), [2];
                                    case 4:
                                        return this.setState({
                                            didSave: !0,
                                            isDirty: !1,
                                            isSaving: !1,
                                            team: e
                                        }), setTimeout(function() {
                                            t.setState({
                                                didSave: !1
                                            })
                                        }, it), this.props.onUpdate(e), [2]
                                }
                            })
                        })
                    }, r.fakeEnabled = function() {
                        return r.state.didError || r.state.didSave
                    }, r.formatBackgroundLabel = function() {
                        return Object(g.d)("Background Image", "TeamsDashboard")
                    }, r.formatBannerLabel = function() {
                        return Object(g.d)("Banner", "TeamsDashboard")
                    }, r.formatLogoLabel = function() {
                        return Object(g.d)("Logo", "TeamsDashboard")
                    }, r.formatOptionalLabel = function() {
                        return Object(g.d)("optional", "TeamsDashboard")
                    }, r.state = {
                        isDirty: !1,
                        isSaving: !1,
                        didError: !1,
                        didSave: !1,
                        team: t.team
                    }, r.inputID = Object(Ye.b)(), r.textAreaID = Object(Ye.b)(), r
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.state.team;
                    return h.createElement(I, {
                        title: G(C.Settings),
                        titleSelector: et.PageTitle
                    }, h.createElement(j.Xa, {
                        className: "settings-page"
                    }, h.createElement(j.Xa, {
                        fullWidth: !0
                    }, h.createElement(j.Ea, {
                        "data-test-selector": et.FormGroupDisplayName,
                        error: !e.displayName,
                        id: this.inputID,
                        label: Object(g.d)("Display Name", "TeamsDashboard")
                    }, h.createElement(j.Ra, {
                        disabled: this.state.isSaving,
                        error: !e.displayName,
                        id: this.inputID,
                        maxLength: 65,
                        onChange: this.handleDisplayNameChange,
                        required: !0,
                        type: j.Ta.Text,
                        value: e.displayName
                    }))), h.createElement(j.Xa, {
                        margin: {
                            top: 2
                        },
                        fullWidth: !0
                    }, h.createElement(j.Ea, {
                        "data-test-selector": et.FormGroupDescription,
                        id: this.textAreaID,
                        label: Object(g.d)("Description", "TeamsDashboard"),
                        labelOptional: this.formatOptionalLabel(),
                        hint: Object(g.d)("Supports Markdown", "TeamsDashboard")
                    }, h.createElement(j.Mb, {
                        disabled: this.state.isSaving,
                        id: this.textAreaID,
                        maxLength: 1e4,
                        noResize: !0,
                        onChange: this.handleDescriptionChange,
                        rows: 5,
                        value: e.description || ""
                    }))), h.createElement(j.Xa, {
                        margin: {
                            top: 2
                        }
                    }, h.createElement(j.Ea, {
                        "data-test-selector": et.FormGroupLogo,
                        label: this.formatLogoLabel(),
                        labelOptional: this.formatOptionalLabel(),
                        hint: Object(g.d)("Square JPG or PNG at least 600x600px. Max 500 KB.", "TeamsDashboard")
                    }, h.createElement(j.Xa, {
                        className: "logo"
                    }, h.createElement(at, {
                        imageAlt: this.formatLogoLabel(),
                        imageCategory: ye.Logo,
                        imageSrc: e.logoURL,
                        onUpload: this.handleLogoUpload,
                        teamName: e.name
                    })))), h.createElement(j.Xa, {
                        margin: {
                            top: 2
                        }
                    }, h.createElement(j.Ea, {
                        "data-test-selector": et.FormGroupBanner,
                        label: this.formatBannerLabel(),
                        labelOptional: this.formatOptionalLabel(),
                        hint: Object(g.d)("JPG or PNG at least 640x125px. Max 500 KB.", "TeamsDashboard")
                    }, h.createElement(j.Xa, {
                        fullWidth: !0,
                        className: "banner"
                    }, h.createElement(at, {
                        imageAlt: this.formatBannerLabel(),
                        imageCategory: ye.Banner,
                        imageSrc: e.bannerURL,
                        onUpload: this.handleBannerUpload,
                        teamName: e.name
                    })))), h.createElement(j.Xa, {
                        margin: {
                            top: 2
                        }
                    }, h.createElement(j.Ea, {
                        "data-test-selector": et.FormGroupBackground,
                        label: this.formatBackgroundLabel(),
                        labelOptional: this.formatOptionalLabel(),
                        hint: Object(g.d)("JPG or PNG. Max 500 KB.", "TeamsDashboard")
                    }, h.createElement(j.Xa, {
                        fullWidth: !0,
                        className: "background"
                    }, h.createElement(at, {
                        imageAlt: this.formatBackgroundLabel(),
                        imageCategory: ye.Background,
                        imageSrc: e.backgroundImageURL,
                        onUpload: this.handleBackgroundUpload,
                        teamName: e.name
                    })))), h.createElement(j.Xa, {
                        margin: {
                            top: 2
                        }
                    }, this.renderButton())))
                }, t.prototype.renderButton = function() {
                    var e, t, r, n = !this.fakeEnabled() && (!this.state.team.displayName || !this.state.isDirty || this.state.isSaving);
                    return e = this.state.didSave ? j.E.Success : this.state.isSaving ? j.E.Loading : j.E.Default, t = this.state.didSave ? j.F.Success : this.state.didError ? j.F.Alert : j.F.Default, r = this.state.didError ? Object(g.d)("Save Failed", "TeamsDashboard") : Object(g.d)("Save Changes", "TeamsDashboard"), h.createElement(j.z, {
                        "data-test-selector": et.Button,
                        disabled: n,
                        onClick: this.handleClick,
                        state: e,
                        type: t
                    }, h.createElement(j.Xa, {
                        display: j.X.Inline,
                        margin: {
                            x: 4
                        }
                    }, r))
                }, t = l.__decorate([Object(D.b)("SettingsPage", {
                    autoReportInteractive: !0,
                    destination: T.a.TeamsDashboardSettings
                })], t)
            }(h.Component);
            ! function(e) {
                e.AdBreakDuration = "AdBreakDuration", e.AdBreaks = "AdBreaks", e.AverageChatters = "AverageChatters", e.AverageViewers = "AverageViewers", e.ChatMessages = "ChatMessages", e.MinutesWatched = "MinutesWatched", e.NewFollowers = "NewFollowers", e.StreamDuration = "StreamDuration"
            }(ut || (ut = {})),
            function(e) {
                e.Ads = "Ads", e.Audience = "Audience", e.Chat = "Chat"
            }(lt || (lt = {}));
            var mt, ht = ((st = {})[ut.AdBreakDuration] = "commercials", st[ut.AverageChatters] = "chat_activities", st[ut.AverageViewers] = "concurrent_viewers", st[ut.ChatMessages] = "chat_activities", st[ut.MinutesWatched] = "concurrent_viewers", st[ut.NewFollowers] = "follows", st[ut.StreamDuration] = "stream_sessions", st),
                ft = ((ct = {})[ut.AdBreakDuration] = "bar", ct[ut.AverageChatters] = "bar", ct[ut.AverageViewers] = "bar", ct[ut.ChatMessages] = "bar", ct[ut.MinutesWatched] = "bar", ct[ut.NewFollowers] = "line", ct[ut.StreamDuration] = "bar", ct),
                bt = function(e) {
                    switch (e) {
                        case lt.Ads:
                            return Object(g.d)("Ads", "TeamsDashboard");
                        case lt.Audience:
                            return Object(g.d)("Audience", "TeamsDashboard");
                        case lt.Chat:
                            return Object(g.d)("Chat", "TeamsDashboard");
                        default:
                            return ""
                    }
                },
                pt = function(e) {
                    switch (e) {
                        case ut.AdBreakDuration:
                            return Object(g.d)("Ad Break Duration", "TeamsDashboard");
                        case ut.AdBreaks:
                            return Object(g.d)("Ad Breaks", "TeamsDashboard");
                        case ut.AverageChatters:
                            return Object(g.d)("Avg. Chatters", "TeamsDashboard");
                        case ut.AverageViewers:
                            return Object(g.d)("Avg. Viewers", "TeamsDashboard");
                        case ut.ChatMessages:
                            return Object(g.d)("Chat Messages", "TeamsDashboard");
                        case ut.MinutesWatched:
                            return Object(g.d)("Minutes Watched", "TeamsDashboard");
                        case ut.NewFollowers:
                            return Object(g.d)("New Followers", "TeamsDashboard");
                        case ut.StreamDuration:
                            return Object(g.d)("Stream Duration", "TeamsDashboard");
                        default:
                            return ""
                    }
                },
                gt = function(e) {
                    return h.createElement(j.Xa, {
                        className: "metric-select-menu"
                    }, h.createElement(j.vb, {
                        disabled: e.isDisabled,
                        value: e.metric,
                        onChange: function(t) {
                            e.onChange(t.target.value)
                        }
                    }, h.createElement("option", {
                        value: ut.StreamDuration
                    }, pt(ut.StreamDuration)), h.createElement("optgroup", {
                        label: bt(lt.Ads)
                    }, h.createElement("option", {
                        value: ut.AdBreakDuration
                    }, pt(ut.AdBreakDuration))), h.createElement("optgroup", {
                        label: bt(lt.Audience)
                    }, h.createElement("option", {
                        value: ut.AverageViewers
                    }, pt(ut.AverageViewers)), h.createElement("option", {
                        value: ut.MinutesWatched
                    }, pt(ut.MinutesWatched)), h.createElement("option", {
                        value: ut.NewFollowers
                    }, pt(ut.NewFollowers))), h.createElement("optgroup", {
                        label: bt(lt.Chat)
                    }, h.createElement("option", {
                        value: ut.AverageChatters
                    }, pt(ut.AverageChatters)), h.createElement("option", {
                        value: ut.ChatMessages
                    }, pt(ut.ChatMessages)))))
                },
                vt = ((mt = {})[ut.AdBreakDuration] = ae, mt[ut.AverageChatters] = Ot, mt[ut.AverageViewers] = Ot, mt[ut.ChatMessages] = Ot, mt[ut.MinutesWatched] = Ot, mt[ut.NewFollowers] = Ot, mt[ut.StreamDuration] = ae, mt),
                yt = function(e) {
                    var t, r = e.data,
                        n = e.metric,
                        a = vt[n],
                        o = function(e, t) {
                            var r = Object.keys(t),
                                n = r.reduce(function(e, r) {
                                    return e += t[r].count
                                }, 0);
                            if (e === ut.AverageViewers) return n / r.length;
                            return n
                        }(n, r);
                    switch (n) {
                        case ut.AverageViewers:
                            t = Object(g.d)("Average = {number}", {
                                number: h.createElement(j.W, {
                                    type: j.Pb.Strong
                                }, a(o))
                            }, "TeamsDashboardMetricSummary");
                            break;
                        case ut.AdBreakDuration:
                        case ut.AverageChatters:
                        case ut.ChatMessages:
                        case ut.MinutesWatched:
                        case ut.NewFollowers:
                        case ut.StreamDuration:
                            t = Object(g.d)("Total = {numberOrDuration}", {
                                numberOrDuration: h.createElement(j.W, {
                                    type: j.Pb.Strong
                                }, a(o))
                            }, "TeamsDashboardMetricSummary");
                            break;
                        default:
                            throw new Error("Unrecognized metric: " + n)
                    }
                    return h.createElement(j.W, {
                        color: j.O.Alt2,
                        fontSize: j.Ca.Size4
                    }, t)
                };

            function Ot(e) {
                return Object(g.f)(e, {
                    maximumFractionDigits: 0
                })
            }
            var Et, Tt = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillUnmount = function() {
                        this.myChart && this.myChart.destroy()
                    }, t.prototype.componentWillUpdate = function(e) {
                        this.myChart && this.props.chartData.chartType === e.chartData.chartType ? this.updateChartData(e.chartData) : this.rebuildChart(e)
                    }, t.prototype.render = function() {
                        var e = this;
                        return h.createElement(j.Xa, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, h.createElement(j.Pa, {
                            flexGrow: 0,
                            flexShrink: 1,
                            fullWidth: !0
                        }, h.createElement("canvas", {
                            ref: function(t) {
                                return e.canvas = t
                            }
                        })))
                    }, t.prototype.rebuildChart = function(e) {
                        var t = this;
                        this.canvas && (this.myChart && this.myChart.destroy(), this.setCanvasResolution(), this.myChart = new me(this.canvas, {
                            type: e.chartData.chartType,
                            data: {
                                datasets: [{
                                    label: e.chartData.chartLabel,
                                    backgroundColor: "#6441A4",
                                    borderCapStyle: "round",
                                    borderColor: "#6441A4",
                                    borderWidth: 1,
                                    fill: !0,
                                    lineTension: .3,
                                    pointRadius: 4,
                                    pointBackgroundColor: "#B2A0D2",
                                    pointBorderColor: "#B2A0D2",
                                    pointBorderWidth: 2,
                                    pointHoverRadius: 8,
                                    pointHoverBackgroundColor: "#6441A4",
                                    pointHoverBorderWidth: 6,
                                    pointHoverBorderColor: "#B2A0D2",
                                    data: e.chartData.data,
                                    spanGaps: !0
                                }],
                                labels: e.chartData.timeLabels
                            },
                            options: {
                                tooltips: {
                                    callbacks: {
                                        title: function(e, t) {
                                            var r = t.labels[e[0].index];
                                            return function(e) {
                                                var t = ce(e);
                                                return Object(g.c)(e, {
                                                    weekday: "short",
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                    timeZone: "UTC"
                                                }) + " | " + Object(g.c)(e, {
                                                    hour: "numeric",
                                                    timeZone: "UTC"
                                                }) + " - " + Object(g.c)(t, {
                                                    hour: "numeric",
                                                    timeZone: "UTC"
                                                }) + " (4h)"
                                            }(new Date(r))
                                        },
                                        label: function(e, r) {
                                            var n = r.datasets[0].data[e.index];
                                            return t.props.chartData.dataFormatter(n)
                                        },
                                        footer: function(e) {
                                            return t.props.chartData.dataFooters[e[0].index]
                                        }
                                    }
                                },
                                legend: {
                                    position: "bottom",
                                    labels: {
                                        boxWidth: 12
                                    }
                                },
                                maintainAspectRatio: !1,
                                responsive: !0,
                                scales: {
                                    xAxes: [{
                                        gridLines: {
                                            display: !1
                                        },
                                        stacked: !0,
                                        ticks: {
                                            fontColor: "#898395",
                                            callback: function(e) {
                                                var t = new Date(e);
                                                return 0 === t.getUTCHours() ? function(e) {
                                                    return Object(g.c)(e, {
                                                        weekday: "short",
                                                        month: "short",
                                                        day: "numeric",
                                                        timeZone: "UTC"
                                                    })
                                                }(t) : ""
                                            }
                                        }
                                    }],
                                    yAxes: [{
                                        gridLines: {
                                            color: "#EFEEF1",
                                            tickMarkLength: 5,
                                            zeroLineColor: "#EFEEF1"
                                        },
                                        stacked: !0,
                                        ticks: {
                                            maxTicksLimit: 6,
                                            min: 0,
                                            callback: function(e) {
                                                return t.props.chartData.dataFormatter(e)
                                            }
                                        }
                                    }]
                                }
                            }
                        }))
                    }, t.prototype.updateChartData = function(e) {
                        this.myChart.data.datasets && (this.myChart.data.labels = e.timeLabels, this.myChart.data.datasets[0].label = e.chartLabel, this.myChart.data.datasets[0].data = e.data, this.myChart.update())
                    }, t.prototype.setCanvasResolution = function() {
                        if (this.canvas) {
                            var e = Dt(this.canvas.getContext("2d"));
                            this.canvas.height = 36 * e, this.canvas.style.height = "36rem", this.canvas.getContext("2d").setTransform(e, 0, 0, e, 0, 0)
                        }
                    }, t = l.__decorate([Object(D.b)("StatsCanvas")], t)
                }(h.Component),
                Dt = function(e) {
                    return 1 / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
                },
                jt = Tt,
                _t = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e, t, r, n = this.props,
                            a = n.data,
                            o = n.dataType,
                            i = Object.keys(a).sort(function(e, t) {
                                return e.localeCompare(t, void 0, {
                                    numeric: !0
                                })
                            });
                        switch (o) {
                            case ut.AverageViewers:
                            case ut.ChatMessages:
                            case ut.AverageChatters:
                            case ut.MinutesWatched:
                                e = i.map(function(e) {
                                    return a[e].count
                                }), t = g.f, r = i.map(function() {
                                    return ""
                                });
                                break;
                            case ut.AdBreakDuration:
                                e = i.map(function(e) {
                                    return a[e].count
                                }), t = ae, r = i.map(function(e) {
                                    return Object(g.d)("{adBreakCount, plural, one {# Ad Break} other {# Ad Breaks}}", {
                                        adBreakCount: a[e].numberOfDatapoints
                                    }, "TeamsDashboard")
                                });
                                break;
                            case ut.NewFollowers:
                                e = i.reduce(function(e, t) {
                                    return e.push(a[t].count + (e.length ? e[e.length - 1] : 0)), e
                                }, []), t = g.f, r = i.map(function() {
                                    return ""
                                });
                                break;
                            case ut.StreamDuration:
                                e = i.map(function(e) {
                                    return a[e].count
                                }), t = ae, r = i.map(function() {
                                    return ""
                                });
                                break;
                            default:
                                throw new Error("Data type: " + o + " is unrecognized")
                        }
                        var s = {
                            chartType: ft[o],
                            chartLabel: pt(o),
                            timeLabels: i,
                            data: e,
                            dataFormatter: t,
                            dataFooters: r
                        };
                        return h.createElement(jt, {
                            chartData: s
                        })
                    }, t
                }(h.PureComponent),
                kt = function(e) {
                    var t = e.columnName;
                    return h.createElement(j.Ja, null, h.createElement(j.P, {
                        cols: {
                            default: 3
                        }
                    }), h.createElement(j.P, {
                        cols: {
                            default: 5
                        }
                    }, h.createElement(j.W, {
                        bold: !0
                    }, t)), h.createElement(j.P, {
                        cols: {
                            default: 2
                        }
                    }, h.createElement(j.Xa, {
                        textAlign: j.Lb.Right
                    }, h.createElement(j.W, {
                        bold: !0
                    }, Object(g.d)("Views", "TeamsDashboard")))), h.createElement(j.P, {
                        cols: {
                            default: 2
                        }
                    }, h.createElement(j.Xa, {
                        textAlign: j.Lb.Right
                    }, h.createElement(j.W, {
                        bold: !0
                    }, Object(g.d)("Percent", "TeamsDashboard")))))
                },
                Ct = function(e) {
                    var t = e.rowContent;
                    return h.createElement(j.Ja, null, h.createElement(j.P, {
                        cols: {
                            default: 3
                        }
                    }, h.createElement(j.Xa, {
                        fullHeight: !0,
                        display: j.X.Flex,
                        alignItems: j.f.Center
                    }, h.createElement(j.ib, {
                        value: t.percent,
                        mask: !0
                    }))), h.createElement(j.P, {
                        cols: {
                            default: 5
                        }
                    }, h.createElement(j.W, {
                        ellipsis: !0
                    }, t.name)), h.createElement(j.P, {
                        cols: {
                            default: 2
                        }
                    }, h.createElement(j.Xa, {
                        textAlign: j.Lb.Right
                    }, h.createElement(j.W, null, Object(g.f)(t.views)))), h.createElement(j.P, {
                        cols: {
                            default: 2
                        }
                    }, h.createElement(j.Xa, {
                        textAlign: j.Lb.Right
                    }, h.createElement(j.W, null, Object(g.f)(t.percent), "%"))))
                },
                St = function(e, t, r, n) {
                    return 0 === e.length ? wt() : n && 1 === e.length ? It(e[0].name) : At(e, r, t)
                },
                Nt = function(e, t) {
                    return t > 10 ? Object(g.d)("{tableName} (Top 10)", {
                        tableName: e
                    }, "TeamsDashboard") : t > 1 ? Object(g.d)("{tableName} (All)", {
                        tableName: e
                    }, "TeamsDashboard") : Object(g.d)("{tableName}", {
                        tableName: e
                    }, "TeamsDashboard")
                },
                wt = function() {
                    return h.createElement(j.W, {
                        color: j.O.Alt2
                    }, Object(g.d)("Not enough data for us to display", "TeamsDashboard"))
                },
                It = function(e) {
                    return h.createElement(j.W, null, Object(g.d)("The top viewer location was {name}", {
                        name: e
                    }, "TeamsDashboard"))
                },
                At = function(e, t, r) {
                    var n = e.slice(0, 10).map(function(e, t) {
                        var n = e.name,
                            a = e.views,
                            o = Math.round(a / r * 100);
                        return h.createElement(Ct, {
                            key: t,
                            rowContent: {
                                name: n,
                                views: a,
                                percent: o
                            }
                        })
                    });
                    return h.createElement(j.Xa, null, h.createElement(kt, {
                        columnName: t
                    }), n)
                },
                Lt = function(e) {
                    var t, r, n = e.rowData.reduce(function(e, t) {
                            return e + t.views
                        }, 0),
                        a = e.rowData.sort(function(e, t) {
                            return t.views - e.views || e.name.localeCompare(t.name)
                        });
                    return t = e.isLoading ? h.createElement(j.eb, {
                        width: 180
                    }) : Nt(e.tableName, a.length), r = e.isLoading ? h.createElement(j.Xa, null, h.createElement(j.W, null, h.createElement(j.eb, null)), h.createElement(j.W, null, h.createElement(j.eb, null))) : St(a, n, e.columnName, e.isGeo), h.createElement(j.Xa, {
                        display: j.X.Flex,
                        flexDirection: j.Aa.Column,
                        padding: 2,
                        className: "table",
                        flexWrap: j.Ba.NoWrap,
                        fullWidth: !0
                    }, h.createElement(j.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, h.createElement(j.W, {
                        type: j.Pb.H4
                    }, t)), r)
                },
                Rt = function(e) {
                    var t = Object(g.d)("Referrer", "TeamsDashboard"),
                        r = Object(g.d)("Views by Referrer", "TeamsDashboard"),
                        n = "";
                    return e.internalReferral && e.internalReferral.length && (r = Object(g.d)("Views from Outside Twitch", "TeamsDashboard"), n = h.createElement(j.zb, {
                        display: j.X.Flex,
                        flexGrow: 1,
                        borderBottom: !0,
                        borderLeft: !0
                    }, h.createElement(Lt, {
                        isLoading: e.isLoading,
                        tableName: Object(g.d)("Views from Twitch", "TeamsDashboard"),
                        columnName: t,
                        rowData: e.internalReferral
                    }))), h.createElement(j.zb, {
                        className: "all-tables-wrapper",
                        display: j.X.Flex,
                        flexDirection: j.Aa.Row,
                        borderTop: !0
                    }, h.createElement(j.Xa, {
                        display: j.X.Flex,
                        flexGrow: 1,
                        flexDirection: j.Aa.Column,
                        flexWrap: j.Ba.NoWrap
                    }, h.createElement(j.zb, {
                        display: j.X.Flex,
                        flexGrow: 1,
                        borderBottom: !0
                    }, h.createElement(Lt, {
                        isLoading: e.isLoading,
                        tableName: Object(g.d)("Views by Location", "TeamsDashboard"),
                        columnName: Object(g.d)("Location", "TeamsDashboard"),
                        rowData: e.geographical,
                        isGeo: !0
                    })), h.createElement(j.zb, {
                        display: j.X.Flex,
                        flexGrow: 1
                    }, h.createElement(Lt, {
                        isLoading: e.isLoading,
                        tableName: Object(g.d)("Views by Platform", "TeamsDashboard"),
                        columnName: Object(g.d)("Platform", "TeamsDashboard"),
                        rowData: e.platform
                    }))), h.createElement(j.Xa, {
                        display: j.X.Flex,
                        flexGrow: 1,
                        flexDirection: j.Aa.Column,
                        flexWrap: j.Ba.NoWrap
                    }, n, h.createElement(j.zb, {
                        display: j.X.Flex,
                        flexGrow: 1,
                        borderLeft: !0
                    }, h.createElement(Lt, {
                        isLoading: e.isLoading,
                        tableName: r,
                        columnName: t,
                        rowData: e.externalReferral
                    }))))
                },
                Mt = r("Jgup"),
                Pt = r("cSnd"),
                Ft = {
                    geographical: [],
                    platform: [],
                    internalReferral: [],
                    externalReferral: []
                },
                Bt = function(e, t, r, n) {
                    return l.__awaiter(void 0, void 0, Promise, function() {
                        var a, o, i, s;
                        return l.__generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return a = Ft, t.length < 1 ? [2, a] : (o = t.join(","), i = "/v5/teams/" + e + "/stats/video_play_demographics?channel_ids=" + o + "&start_time=" + r + "&end_time=" + n, [4, Object(Q.c)({
                                        path: i
                                    })]);
                                case 1:
                                    return [2, (s = c.sent()).body ? xt(s.body) : a]
                            }
                        })
                    })
                },
                xt = function(e) {
                    for (var t = e.video_play_demographics, r = {
                            geographical: [],
                            platform: [],
                            internalReferral: [],
                            externalReferral: []
                        }, n = 0, a = Object.keys(t.geo); n < a.length; n++) {
                        var o = a[n];
                        r.geographical.push({
                            name: Object(Mt.b)(o),
                            views: t.geo[o]
                        })
                    }
                    for (var i = 0, s = Object.keys(t.platform); i < s.length; i++) {
                        o = s[i];
                        r.platform.push({
                            name: Object(Pt.c)(o),
                            views: t.platform[o]
                        })
                    }
                    for (var c = 0, u = Object.keys(t.referrer.internal); c < u.length; c++) {
                        o = u[c];
                        r.internalReferral.push({
                            name: Object(Pt.b)(o),
                            views: t.referrer.internal[o]
                        })
                    }
                    for (var l = 0, d = Object.keys(t.referrer.external); l < d.length; l++) {
                        o = d[l];
                        r.externalReferral.push({
                            name: Object(Pt.a)(o),
                            views: t.referrer.external[o]
                        })
                    }
                    return r
                },
                Ut = r("NAv5"),
                Gt = function(e, t, r, n, a) {
                    return l.__awaiter(void 0, void 0, Promise, function() {
                        var o, i, s, c, u, d, m, h, f, b;
                        return l.__generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    if (0 === r.length) return [2, Promise.resolve({})];
                                    switch (o = "/v5/teams/" + t + "/stats/" + ht[e] + "?channel_ids=" + r + "&start_time=" + n + "&end_time=" + a, e) {
                                        case ut.AdBreakDuration:
                                            return [3, 1];
                                        case ut.AverageChatters:
                                            return [3, 3];
                                        case ut.AverageViewers:
                                            return [3, 5];
                                        case ut.ChatMessages:
                                            return [3, 7];
                                        case ut.MinutesWatched:
                                            return [3, 9];
                                        case ut.NewFollowers:
                                            return [3, 11];
                                        case ut.StreamDuration:
                                            return [3, 13]
                                    }
                                    return [3, 15];
                                case 1:
                                    return s = Zt, [4, Vt(o)];
                                case 2:
                                    return i = s.apply(void 0, [l.sent(), n, a, nr]), [3, 16];
                                case 3:
                                    return c = Jt, [4, Xt(o)];
                                case 4:
                                    return i = c.apply(void 0, [l.sent(), n, a, tr]), [3, 16];
                                case 5:
                                    return u = Jt, [4, Kt(o)];
                                case 6:
                                    return i = u.apply(void 0, [l.sent(), n, a, qt]), [3, 16];
                                case 7:
                                    return d = Jt, [4, Xt(o)];
                                case 8:
                                    return i = d.apply(void 0, [l.sent(), n, a, rr]), [3, 16];
                                case 9:
                                    return [4, Kt(o)];
                                case 10:
                                    return m = l.sent(), h = Yt(m), i = Jt(h, n, a, Qt), [3, 16];
                                case 11:
                                    return f = Jt, [4, Wt(o)];
                                case 12:
                                    return i = f.apply(void 0, [l.sent(), n, a, er]), [3, 16];
                                case 13:
                                    return b = Jt, [4, zt(o)];
                                case 14:
                                    return i = b.apply(void 0, [l.sent(), n, a, ar]), [3, 16];
                                case 15:
                                    throw new Error("fetch type is not in StatsMetric enum");
                                case 16:
                                    return [2, Ht(i)]
                            }
                        })
                    })
                },
                Kt = function(e) {
                    return l.__awaiter(void 0, void 0, Promise, function() {
                        var t;
                        return l.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, Object(Q.c)({
                                        path: e
                                    })];
                                case 1:
                                    return [2, (t = r.sent()).body ? t.body.concurrent_viewers : {}]
                            }
                        })
                    })
                },
                Xt = function(e) {
                    return l.__awaiter(void 0, void 0, Promise, function() {
                        var t;
                        return l.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, Object(Q.c)({
                                        path: e
                                    })];
                                case 1:
                                    return [2, (t = r.sent()).body ? t.body.chat_activities : {}]
                            }
                        })
                    })
                },
                Wt = function(e) {
                    return l.__awaiter(void 0, void 0, Promise, function() {
                        var t;
                        return l.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, Object(Q.c)({
                                        path: e
                                    })];
                                case 1:
                                    return [2, (t = r.sent()).body ? t.body.follows : {}]
                            }
                        })
                    })
                },
                Vt = function(e) {
                    return l.__awaiter(void 0, void 0, Promise, function() {
                        var t;
                        return l.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, Object(Q.c)({
                                        path: e
                                    })];
                                case 1:
                                    return [2, (t = r.sent()).body ? t.body.commercials : {}]
                            }
                        })
                    })
                },
                zt = function(e) {
                    return l.__awaiter(void 0, void 0, Promise, function() {
                        var t;
                        return l.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, Object(Q.c)({
                                        path: e
                                    })];
                                case 1:
                                    return [2, (t = r.sent()).body ? t.body.stream_sessions : {}]
                            }
                        })
                    })
                },
                Ht = function(e) {
                    for (var t = {}, r = 0, n = Object.keys(e); r < n.length; r++)
                        for (var a = 0, o = e[n[r]]; a < o.length; a++) {
                            var i = o[a],
                                s = i.timestamp,
                                c = i.count,
                                u = i.numberOfDatapoints;
                            t[s] ? (t[s].count += c, t[s].numberOfDatapoints += u) : t[s] = {
                                count: c,
                                numberOfDatapoints: u
                            }
                        }
                    return t
                },
                Yt = function(e) {
                    for (var t = {}, r = 0, n = Object.keys(e); r < n.length; r++) {
                        var a = n[r],
                            o = e[a];
                        t[a] = o.map(function(e) {
                            return {
                                count: 5 * e.count,
                                timestamp: e.timestamp
                            }
                        })
                    }
                    return t
                },
                Jt = function(e, t, r, n) {
                    for (var a = {}, o = 0, i = Object.keys(e); o < i.length; o++) {
                        var s = i[o];
                        a[s] = n(t, r, e[s])
                    }
                    return a
                },
                Zt = function(e, t, r, n) {
                    for (var a = {}, o = 0, i = Object.keys(e); o < i.length; o++) {
                        var s = i[o];
                        a[s] = n(t, r, e[s])
                    }
                    return a
                },
                qt = function(e, t, r) {
                    return $t(e, t, r).map(function(e) {
                        var t = e.count / 48;
                        return {
                            timestamp: e.timestamp,
                            count: t,
                            numberOfDatapoints: 0
                        }
                    })
                },
                Qt = function(e, t, r) {
                    return $t(e, t, r).map(function(e) {
                        return {
                            timestamp: e.timestamp,
                            count: e.count,
                            numberOfDatapoints: 0
                        }
                    })
                },
                $t = function(e, t, r) {
                    for (var n = or(e, t), a = function(e, t) {
                            var r = n.find(function(t) {
                                return t.timestamp === ir(e)
                            });
                            r && (r.count += t)
                        }, o = 0, i = r; o < i.length; o++) {
                        var s = i[o];
                        a(s.timestamp, s.count)
                    }
                    return n
                },
                er = function(e, t, r) {
                    for (var n = or(e, t), a = function(e, t) {
                            var r = n.find(function(t) {
                                return t.timestamp === ir(e)
                            });
                            r && (r.count += t)
                        }, o = 0, i = r; o < i.length; o++) {
                        var s = i[o];
                        a(s.timestamp, s.count)
                    }
                    return n
                },
                tr = function(e, t, r) {
                    for (var n = or(e, t).map(function(e) {
                            return l.__assign({}, e, {
                                sampleSize: 0
                            })
                        }), a = function(e, t) {
                            var r = n.find(function(t) {
                                return t.timestamp === ir(e)
                            });
                            r && 0 !== t && (r.count += t, r.sampleSize += 1)
                        }, o = 0, i = r; o < i.length; o++) {
                        var s = i[o];
                        a(s.timestamp, s.participant_count)
                    }
                    return n.map(function(e) {
                        return {
                            timestamp: e.timestamp,
                            count: e.sampleSize ? Math.floor(e.count / e.sampleSize) : 0,
                            numberOfDatapoints: 0
                        }
                    })
                },
                rr = function(e, t, r) {
                    for (var n = or(e, t), a = function(e, t) {
                            var r = n.find(function(t) {
                                return t.timestamp === ir(e)
                            });
                            r && (r.count += t)
                        }, o = 0, i = r; o < i.length; o++) {
                        var s = i[o];
                        a(s.timestamp, s.message_count)
                    }
                    return n
                },
                nr = function(e, t, r) {
                    for (var n = or(e, t), a = function(e, t) {
                            var r = n.find(function(t) {
                                return t.timestamp === ir(e)
                            });
                            r && (r.count += t, r.numberOfDatapoints += 1)
                        }, o = 0, i = r; o < i.length; o++) {
                        var s = i[o];
                        a(s.timestamp, s.duration_seconds)
                    }
                    return n
                },
                ar = function(e, t, r) {
                    for (var n = or(e, t), a = 0, o = r; a < o.length; a++)
                        for (var i = o[a], s = i.start_time, c = i.end_time, u = new Date(c), l = new Date(s), d = 0, m = n; d < m.length; d++) {
                            var h = m[d],
                                f = new Date(h.timestamp),
                                b = new Date(Date.UTC(f.getUTCFullYear(), f.getUTCMonth(), f.getUTCDate(), f.getUTCHours() + 4));
                            if (Object(Ut.isBefore)(u, f)) break;
                            if (!Object(Ut.isAfter)(l, b)) {
                                if (Object(Ut.isBefore)(u, b)) {
                                    h.count += Object(Ut.differenceInSeconds)(u, l);
                                    break
                                }
                                h.count += Object(Ut.differenceInSeconds)(b, l), l = b
                            }
                        }
                    return n
                },
                or = function(e, t) {
                    for (var r = [], n = new Date(ir(e)), a = new Date(t); n < a;) r.push({
                        timestamp: n.toISOString(),
                        count: 0,
                        numberOfDatapoints: 0
                    }), n = ce(n);
                    return r
                },
                ir = function(e) {
                    var t = new Date(e),
                        r = t.getUTCHours() - t.getUTCHours() % 4;
                    return new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), r)).toISOString()
                },
                sr = [ut.StreamDuration, ut.AverageViewers, ut.MinutesWatched, ut.NewFollowers, ut.AverageChatters, ut.ChatMessages, ut.AdBreaks, ut.AdBreakDuration],
                cr = Object.keys(ht),
                ur = function(e, t, r, n) {
                    return l.__awaiter(void 0, void 0, void 0, function() {
                        var a, o, i, s, c, u, d, m, h, f, b, p;
                        return l.__generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    for (a = {}, o = [], i = 0, s = cr; i < s.length; i++) m = s[i], o.push(Gt(m, e, t, r, n));
                                    return [4, Promise.all(o)];
                                case 1:
                                    for (c = l.sent(), u = 0, d = cr; u < d.length; u++) {
                                        if (m = d[u], h = c.shift() || {}, 0 === Object.keys(h).length) return [2, {}];
                                        for (f = 0, b = Object.keys(h); f < b.length; f++) p = b[f], a[p] || (a[p] = {}), a[p][m] = h[p].count, m === ut.AdBreakDuration && (a[p][ut.AdBreaks] = h[p].numberOfDatapoints)
                                    }
                                    return [2, a]
                            }
                        })
                    })
                },
                lr = function() {
                    var e = Object(g.d)("Start Time", "TeamsDashboard") + "," + Object(g.d)("End Time", "TeamsDashboard") + "," + Ne();
                    return sr.reduce(function(e, t) {
                        return e + "," + pt(t)
                    }, e) + "\n"
                },
                dr = function(e, t) {
                    var r = ce(e),
                        n = Ie(e) + "," + Ie(r) + ",UTC";
                    return sr.reduce(function(e, r) {
                        var n = "" + t[r];
                        return r !== ut.StreamDuration && r !== ut.AdBreakDuration || (n = ae(t[r])), e + "," + n
                    }, n) + "\n"
                },
                mr = function(e) {
                    function t(t) {
                        var r = e.call(this, t) || this;
                        return r.toggleMemberChecked = function(e) {
                            var t = r.state.members.slice(),
                                n = t.find(function(t) {
                                    return t.id === e.id
                                });
                            n && (n.checked = !n.checked, r.setState({
                                members: t,
                                groupChecked: !1
                            }))
                        }, r.toggleGroupChecked = function() {
                            var e = !r.state.groupChecked,
                                t = B(r.state.members, e);
                            r.setState({
                                groupChecked: e,
                                members: t
                            })
                        }, r.handleMemberSelectionChange = function() {
                            return l.__awaiter(r, void 0, void 0, function() {
                                var e, t;
                                return l.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e = this.setState, t = [{}], [4, this.fetchStats(this.state.startTime, this.state.endTime, this.state.metric)];
                                        case 1:
                                            return [2, e.apply(this, [l.__assign.apply(void 0, t.concat([r.sent()]))])]
                                    }
                                })
                            })
                        }, r.fetchStats = function(e, t, n) {
                            return l.__awaiter(r, void 0, void 0, function() {
                                var r, a, o, i, s, c;
                                return l.__generator(this, function(u) {
                                    switch (u.label) {
                                        case 0:
                                            return r = x(this.state.members), a = e.toISOString(), o = t.toISOString(), i = {
                                                isLoadingDemographics: !1,
                                                demographics: Ft,
                                                isLoadingStats: !1,
                                                data: {}
                                            }, n !== ut.AverageViewers ? [3, 2] : (this.setState({
                                                isLoadingDemographics: !0
                                            }), s = i, [4, Bt(this.props.teamName, r, a, o)]);
                                        case 1:
                                            s.demographics = u.sent(), u.label = 2;
                                        case 2:
                                            return this.setState({
                                                isLoadingStats: !0
                                            }), c = i, [4, Gt(n, this.props.teamName, r, a, o)];
                                        case 3:
                                            return c.data = u.sent(), [2, i]
                                    }
                                })
                            })
                        }, r.handleCSVClick = function() {
                            return l.__awaiter(r, void 0, void 0, function() {
                                var e, t;
                                return l.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, ur(this.props.teamName, x(this.state.members), this.state.startTime.toISOString(), this.state.endTime.toISOString())];
                                        case 1:
                                            return e = r.sent(), 0 === Object.keys(e).length ? [2] : (t = Ce(e, dr, lr()), Se(t, G(C.Stats) + " - " + ne(this.state.startTime) + ".csv"), [2])
                                    }
                                })
                            })
                        }, r.handleTimeRangeChange = function(e, t) {
                            return l.__awaiter(r, void 0, void 0, function() {
                                var r;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.setState({
                                                startTime: e,
                                                endTime: t
                                            }), [4, this.fetchStats(e, t, this.state.metric)];
                                        case 1:
                                            return r = n.sent(), this.setState(l.__assign({}, r)), [2]
                                    }
                                })
                            })
                        }, r.onMetricChange = function(e) {
                            return l.__awaiter(r, void 0, void 0, function() {
                                var t;
                                return l.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return this.setState({
                                                metric: e
                                            }), [4, this.fetchStats(this.state.startTime, this.state.endTime, e)];
                                        case 1:
                                            return t = r.sent(), this.setState(l.__assign({}, t)), [2]
                                    }
                                })
                            })
                        }, r.renderChartLoadingSpinner = function() {
                            return h.createElement(j.zb, {
                                attachTop: !0,
                                attachLeft: !0,
                                background: j.r.Alt,
                                fullHeight: !0,
                                fullWidth: !0,
                                position: j.fb.Absolute
                            }, h.createElement(j.Za, {
                                delay: 100,
                                fillContent: !0,
                                size: j.xb.Large
                            }))
                        }, r.renderViewershipTables = function() {
                            return h.createElement(Rt, l.__assign({
                                isLoading: r.state.isLoadingDemographics
                            }, r.state.demographics))
                        }, r.state = {
                            isLoadingMembers: !0,
                            members: [],
                            isLoadingStats: !0,
                            data: {},
                            isLoadingDemographics: !0,
                            demographics: Ft,
                            startTime: oe(r.props.currentDate),
                            endTime: r.props.currentDate,
                            groupChecked: !0,
                            metric: ut.StreamDuration
                        }, r
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        return l.__awaiter(this, void 0, void 0, function() {
                            var e, t = this;
                            return l.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, ee(this.props.teamName, A.StatsRevealed)];
                                    case 1:
                                        return e = r.sent(), this.setState({
                                            isLoadingMembers: !1,
                                            members: B(e, !0)
                                        }, function() {
                                            return l.__awaiter(t, void 0, void 0, function() {
                                                var e;
                                                return l.__generator(this, function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return [4, this.fetchStats(this.state.startTime, this.state.endTime, this.state.metric)];
                                                        case 1:
                                                            return e = t.sent(), this.setState(l.__assign({}, e)), [2]
                                                    }
                                                })
                                            })
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        var e = this.state.isLoadingMembers || this.state.isLoadingStats || this.state.isLoadingDemographics;
                        return h.createElement(I, {
                            title: G(C.Stats),
                            titleSelector: "stats-page-title"
                        }, h.createElement(j.zb, {
                            border: !0,
                            fullWidth: !0
                        }, h.createElement(j.Xa, {
                            display: j.X.Flex,
                            flexDirection: j.Aa.Row,
                            justifyContent: j.Wa.Between,
                            margin: 2
                        }, h.createElement(j.Xa, {
                            display: j.X.Flex,
                            flexDirection: j.Aa.Row
                        }, h.createElement(j.Xa, {
                            margin: {
                                right: 1
                            }
                        }, h.createElement(ke, {
                            isDisabled: e,
                            isLoading: this.state.isLoadingMembers,
                            members: this.state.members,
                            groupChecked: this.state.groupChecked,
                            onMemberSelectClose: this.handleMemberSelectionChange,
                            toggleMemberChecked: this.toggleMemberChecked,
                            toggleGroupChecked: this.toggleGroupChecked
                        })), h.createElement(j.Xa, {
                            margin: {
                                right: 1
                            }
                        }, h.createElement(ue, {
                            isDisabled: e,
                            earliestDate: this.props.earliestDataDate,
                            currentDate: this.props.currentDate,
                            onMonthSelection: this.handleTimeRangeChange
                        })), h.createElement(gt, {
                            isDisabled: e,
                            metric: this.state.metric,
                            onChange: this.onMetricChange
                        })), h.createElement(j.Xa, null, h.createElement(j.z, {
                            disabled: e,
                            "data-test-selector": "stats-csv-button",
                            icon: j.pb.Download,
                            onClick: this.handleCSVClick,
                            type: j.F.Hollow
                        }, we()))), h.createElement(j.Xa, {
                            margin: 2,
                            position: j.fb.Relative
                        }, h.createElement(j.Xa, {
                            className: "metric-summary-container"
                        }, h.createElement(yt, {
                            data: this.state.data,
                            metric: this.state.metric
                        })), h.createElement(j.Xa, {
                            className: "chart-container",
                            margin: {
                                top: 2
                            }
                        }, h.createElement(_t, {
                            data: this.state.data,
                            dataType: this.state.metric
                        })), e ? this.renderChartLoadingSpinner() : null), this.state.metric === ut.AverageViewers ? this.renderViewershipTables() : ""))
                    }, t = l.__decorate([Object(D.b)("StatsPage", {
                        autoReportInteractive: !0,
                        destination: T.a.TeamsDashboardStats
                    })], t)
                }(h.Component),
                hr = r("vjhi"),
                fr = new Date(Date.UTC(2017, 0)),
                br = function(e) {
                    function t(t) {
                        var r = e.call(this, t) || this;
                        return r.state = {
                            isError: !1
                        }, r.logger = g.p.logger.withCategory("team-dashboard-root"), r.redirectToRevenuePage = function() {
                            return h.createElement(f.a, {
                                to: "/teams/" + r.props.match.params.teamName + "/dashboard/" + C.Revenue
                            })
                        }, r.renderRevenuePage = function() {
                            return h.createElement(Ke, {
                                teamName: r.props.match.params.teamName,
                                earliestDataDate: r.earliestDataDate,
                                currentDate: r.currentDate
                            })
                        }, r.renderStatsPage = function() {
                            return h.createElement(mr, {
                                teamName: r.props.match.params.teamName,
                                earliestDataDate: r.earliestDataDate,
                                currentDate: r.currentDate
                            })
                        }, r.renderMembersPage = function() {
                            return h.createElement(re, {
                                teamName: r.props.match.params.teamName
                            })
                        }, r.renderFeaturedChannelsPage = function() {
                            return h.createElement(q, {
                                teamName: r.props.match.params.teamName
                            })
                        }, r.renderSettingsPage = function() {
                            return h.createElement(dt, {
                                team: r.props.data.team,
                                onUpdate: r.handleUpdate
                            })
                        }, r.handleUpdate = function(e) {
                            r.props.data.team && g.p.apollo.client.writeFragment({
                                id: "Team:" + r.props.data.team.id,
                                fragment: pr,
                                data: {
                                    description: e.description,
                                    displayName: e.displayName,
                                    logoID: e.logoID,
                                    logoURL: e.logoURL,
                                    bannerID: e.bannerID,
                                    bannerURL: e.bannerURL,
                                    backgroundImageID: e.backgroundImageID,
                                    backgroundImageURL: e.backgroundImageURL,
                                    __typename: "Team"
                                }
                            })
                        }, r.earliestDataDate = fr, r.currentDate = t.currentDate || new Date, r.currentDate < r.earliestDataDate && (r.currentDate = r.earliestDataDate), r
                    }
                    return l.__extends(t, e), t.prototype.componentDidCatch = function(e, t) {
                        var r = this;
                        this.setState({
                            isError: !0
                        }, function() {
                            r.logger.error(e, "A unhandled exception occurred in the component hierarchy", {
                                info: t
                            })
                        })
                    }, t.prototype.render = function() {
                        var e;
                        return this.state.isError ? e = h.createElement(v.a, {
                            message: Object(g.d)("An error occurred on this page", "TeamDashboardRoot")
                        }) : this.props.isLoggedIn ? e = this.props.data.loading ? h.createElement(j.Za, {
                            fillContent: !0
                        }) : null === this.props.data.team ? h.createElement(y.a, null) : h.createElement(j.Xa, {
                            display: j.X.Flex,
                            flexWrap: j.Ba.NoWrap,
                            fullHeight: !0,
                            overflow: j.ab.Hidden,
                            position: j.fb.Relative
                        }, h.createElement(ze, {
                            teamName: this.props.match.params.teamName
                        }), h.createElement(j.Pa, {
                            flexGrow: 1,
                            fullHeight: !0,
                            fullWidth: !0,
                            position: j.fb.Relative
                        }, h.createElement("main", null, h.createElement(b.a, null, h.createElement(p.a, {
                            exact: !0,
                            path: "/teams/:teamName/dashboard",
                            render: this.redirectToRevenuePage
                        }), h.createElement(p.a, {
                            exact: !0,
                            path: "/teams/:teamName/dashboard/" + C.Revenue,
                            render: this.renderRevenuePage
                        }), h.createElement(p.a, {
                            exact: !0,
                            path: "/teams/:teamName/dashboard/" + C.Stats,
                            render: this.renderStatsPage
                        }), h.createElement(p.a, {
                            exact: !0,
                            path: "/teams/:teamName/dashboard/" + C.Members,
                            render: this.renderMembersPage
                        }), h.createElement(p.a, {
                            exact: !0,
                            path: "/teams/:teamName/dashboard/" + C.FeaturedChannels,
                            render: this.renderFeaturedChannelsPage
                        }), h.createElement(p.a, {
                            exact: !0,
                            path: "/teams/:teamName/dashboard/" + C.Settings,
                            render: this.renderSettingsPage
                        }), h.createElement(p.a, {
                            component: y.a
                        }))))) : (this.props.onAnonymousVisit(), e = h.createElement(j.Za, {
                            fillContent: !0
                        })), h.createElement(j.Xa, {
                            display: j.X.Flex,
                            flexDirection: j.Aa.Column,
                            flexWrap: j.Ba.NoWrap,
                            fullHeight: !0
                        }, h.createElement(E.a, null), e)
                    }, t
                }(h.Component),
                pr = m()(Et || (Et = l.__makeTemplateObject(["fragment updatedTeam on Team {\n  description\n  displayName\n  logoID\n  logoURL\n  bannerID\n  bannerURL\n  backgroundImageID\n  backgroundImageURL\n  __typename\n}"], ["fragment updatedTeam on Team {\n  description\n  displayName\n  logoID\n  logoURL\n  bannerID\n  bannerURL\n  backgroundImageID\n  backgroundImageURL\n  __typename\n}"]))),
                gr = Object(O.a)(hr, {
                    options: function(e) {
                        return {
                            variables: {
                                teamName: e.match.params.teamName
                            }
                        }
                    }
                })(br);
            var vr = Object(o.connect)(function(e) {
                return {
                    isLoggedIn: Object(u.f)(e)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    onAnonymousVisit: function() {
                        return Object(c.e)(s.a.DashboardPage)
                    }
                }, e)
            })(gr);
            r.d(t, "TeamsDashboardRoot", function() {
                return vr
            })
        },
        Pp1Y: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                o = r("uNOt"),
                i = r("Ue10"),
                s = (r("obKW"), function(e) {
                    return a.createElement(i.Qa, {
                        borderRadius: i.x.Medium,
                        display: i.X.Block,
                        fontSize: i.Ca.Size5,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, a.createElement(o.a, n.__assign({
                        activeClassName: "dashboard-side-nav__link--active",
                        className: "dashboard-side-nav__link",
                        exact: e.exact,
                        to: e.linkTo
                    }, Object(i.dc)(e)), e.children))
                });
            r.d(t, "a", function() {
                return s
            })
        },
        R1IW: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.DirectiveLocation = {
                QUERY: "QUERY",
                MUTATION: "MUTATION",
                SUBSCRIPTION: "SUBSCRIPTION",
                FIELD: "FIELD",
                FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION",
                FRAGMENT_SPREAD: "FRAGMENT_SPREAD",
                INLINE_FRAGMENT: "INLINE_FRAGMENT",
                SCHEMA: "SCHEMA",
                SCALAR: "SCALAR",
                OBJECT: "OBJECT",
                FIELD_DEFINITION: "FIELD_DEFINITION",
                ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION",
                INTERFACE: "INTERFACE",
                UNION: "UNION",
                ENUM: "ENUM",
                ENUM_VALUE: "ENUM_VALUE",
                INPUT_OBJECT: "INPUT_OBJECT",
                INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION"
            }
        },
        RnhZ: function(e, t, r) {
            var n = {
                "./af": "K/tc",
                "./af.js": "K/tc",
                "./ar": "jnO4",
                "./ar-dz": "o1bE",
                "./ar-dz.js": "o1bE",
                "./ar-kw": "Qj4J",
                "./ar-kw.js": "Qj4J",
                "./ar-ly": "HP3h",
                "./ar-ly.js": "HP3h",
                "./ar-ma": "CoRJ",
                "./ar-ma.js": "CoRJ",
                "./ar-sa": "gjCT",
                "./ar-sa.js": "gjCT",
                "./ar-tn": "bYM6",
                "./ar-tn.js": "bYM6",
                "./ar.js": "jnO4",
                "./az": "SFxW",
                "./az.js": "SFxW",
                "./be": "H8ED",
                "./be.js": "H8ED",
                "./bg": "hKrs",
                "./bg.js": "hKrs",
                "./bn": "kEOa",
                "./bn.js": "kEOa",
                "./bo": "0mo+",
                "./bo.js": "0mo+",
                "./br": "aIdf",
                "./br.js": "aIdf",
                "./bs": "JVSJ",
                "./bs.js": "JVSJ",
                "./ca": "1xZ4",
                "./ca.js": "1xZ4",
                "./cs": "PA2r",
                "./cs.js": "PA2r",
                "./cv": "A+xa",
                "./cv.js": "A+xa",
                "./cy": "l5ep",
                "./cy.js": "l5ep",
                "./da": "DxQv",
                "./da.js": "DxQv",
                "./de": "tGlX",
                "./de-at": "s+uk",
                "./de-at.js": "s+uk",
                "./de-ch": "u3GI",
                "./de-ch.js": "u3GI",
                "./de.js": "tGlX",
                "./dv": "WYrj",
                "./dv.js": "WYrj",
                "./el": "jUeY",
                "./el.js": "jUeY",
                "./en-au": "Dmvi",
                "./en-au.js": "Dmvi",
                "./en-ca": "OIYi",
                "./en-ca.js": "OIYi",
                "./en-gb": "Oaa7",
                "./en-gb.js": "Oaa7",
                "./en-ie": "4dOw",
                "./en-ie.js": "4dOw",
                "./en-nz": "b1Dy",
                "./en-nz.js": "b1Dy",
                "./eo": "Zduo",
                "./eo.js": "Zduo",
                "./es": "iYuL",
                "./es-do": "CjzT",
                "./es-do.js": "CjzT",
                "./es.js": "iYuL",
                "./et": "7BjC",
                "./et.js": "7BjC",
                "./eu": "D/JM",
                "./eu.js": "D/JM",
                "./fa": "jfSC",
                "./fa.js": "jfSC",
                "./fi": "gekB",
                "./fi.js": "gekB",
                "./fo": "ByF4",
                "./fo.js": "ByF4",
                "./fr": "nyYc",
                "./fr-ca": "2fjn",
                "./fr-ca.js": "2fjn",
                "./fr-ch": "Dkky",
                "./fr-ch.js": "Dkky",
                "./fr.js": "nyYc",
                "./fy": "cRix",
                "./fy.js": "cRix",
                "./gd": "9rRi",
                "./gd.js": "9rRi",
                "./gl": "iEDd",
                "./gl.js": "iEDd",
                "./gom-latn": "DKr+",
                "./gom-latn.js": "DKr+",
                "./he": "x6pH",
                "./he.js": "x6pH",
                "./hi": "3E1r",
                "./hi.js": "3E1r",
                "./hr": "S6ln",
                "./hr.js": "S6ln",
                "./hu": "WxRl",
                "./hu.js": "WxRl",
                "./hy-am": "1rYy",
                "./hy-am.js": "1rYy",
                "./id": "UDhR",
                "./id.js": "UDhR",
                "./is": "BVg3",
                "./is.js": "BVg3",
                "./it": "bpih",
                "./it.js": "bpih",
                "./ja": "B55N",
                "./ja.js": "B55N",
                "./jv": "tUCv",
                "./jv.js": "tUCv",
                "./ka": "IBtZ",
                "./ka.js": "IBtZ",
                "./kk": "bXm7",
                "./kk.js": "bXm7",
                "./km": "6B0Y",
                "./km.js": "6B0Y",
                "./kn": "PpIw",
                "./kn.js": "PpIw",
                "./ko": "Ivi+",
                "./ko.js": "Ivi+",
                "./ky": "lgnt",
                "./ky.js": "lgnt",
                "./lb": "RAwQ",
                "./lb.js": "RAwQ",
                "./lo": "sp3z",
                "./lo.js": "sp3z",
                "./lt": "JvlW",
                "./lt.js": "JvlW",
                "./lv": "uXwI",
                "./lv.js": "uXwI",
                "./me": "KTz0",
                "./me.js": "KTz0",
                "./mi": "aIsn",
                "./mi.js": "aIsn",
                "./mk": "aQkU",
                "./mk.js": "aQkU",
                "./ml": "AvvY",
                "./ml.js": "AvvY",
                "./mr": "Ob0Z",
                "./mr.js": "Ob0Z",
                "./ms": "6+QB",
                "./ms-my": "ZAMP",
                "./ms-my.js": "ZAMP",
                "./ms.js": "6+QB",
                "./my": "honF",
                "./my.js": "honF",
                "./nb": "bOMt",
                "./nb.js": "bOMt",
                "./ne": "OjkT",
                "./ne.js": "OjkT",
                "./nl": "+s0g",
                "./nl-be": "2ykv",
                "./nl-be.js": "2ykv",
                "./nl.js": "+s0g",
                "./nn": "uEye",
                "./nn.js": "uEye",
                "./pa-in": "8/+R",
                "./pa-in.js": "8/+R",
                "./pl": "jVdC",
                "./pl.js": "jVdC",
                "./pt": "8mBD",
                "./pt-br": "0tRk",
                "./pt-br.js": "0tRk",
                "./pt.js": "8mBD",
                "./ro": "lyxo",
                "./ro.js": "lyxo",
                "./ru": "lXzo",
                "./ru.js": "lXzo",
                "./sd": "Z4QM",
                "./sd.js": "Z4QM",
                "./se": "//9w",
                "./se.js": "//9w",
                "./si": "7aV9",
                "./si.js": "7aV9",
                "./sk": "e+ae",
                "./sk.js": "e+ae",
                "./sl": "gVVK",
                "./sl.js": "gVVK",
                "./sq": "yPMs",
                "./sq.js": "yPMs",
                "./sr": "zx6S",
                "./sr-cyrl": "E+lV",
                "./sr-cyrl.js": "E+lV",
                "./sr.js": "zx6S",
                "./ss": "Ur1D",
                "./ss.js": "Ur1D",
                "./sv": "X709",
                "./sv.js": "X709",
                "./sw": "dNwA",
                "./sw.js": "dNwA",
                "./ta": "PeUW",
                "./ta.js": "PeUW",
                "./te": "XLvN",
                "./te.js": "XLvN",
                "./tet": "V2x9",
                "./tet.js": "V2x9",
                "./th": "EOgW",
                "./th.js": "EOgW",
                "./tl-ph": "Dzi0",
                "./tl-ph.js": "Dzi0",
                "./tlh": "z3Vd",
                "./tlh.js": "z3Vd",
                "./tr": "DoHr",
                "./tr.js": "DoHr",
                "./tzl": "z1FC",
                "./tzl.js": "z1FC",
                "./tzm": "wQk9",
                "./tzm-latn": "tT3J",
                "./tzm-latn.js": "tT3J",
                "./tzm.js": "wQk9",
                "./uk": "raLr",
                "./uk.js": "raLr",
                "./ur": "UpQW",
                "./ur.js": "UpQW",
                "./uz": "Loxo",
                "./uz-latn": "AQ68",
                "./uz-latn.js": "AQ68",
                "./uz.js": "Loxo",
                "./vi": "KSF8",
                "./vi.js": "KSF8",
                "./x-pseudo": "/X5v",
                "./x-pseudo.js": "/X5v",
                "./yo": "fzPg",
                "./yo.js": "fzPg",
                "./zh-cn": "XDpg",
                "./zh-cn.js": "XDpg",
                "./zh-hk": "SatO",
                "./zh-hk.js": "SatO",
                "./zh-tw": "kOpN",
                "./zh-tw.js": "kOpN"
            };

            function a(e) {
                var t = o(e);
                return r(t)
            }

            function o(e) {
                var t = n[e];
                if (!(t + 1)) {
                    var r = new Error("Cannot find module '" + e + "'");
                    throw r.code = "MODULE_NOT_FOUND", r
                }
                return t
            }
            a.keys = function() {
                return Object.keys(n)
            }, a.resolve = o, e.exports = a, a.id = "RnhZ"
        },
        b6Yk: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return i
            });
            var n = r("mrSG"),
                a = r("/7QA"),
                o = r("kRBY"),
                i = function() {
                    function e() {}
                    return e.get = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, n.__assign({}, t, {
                                            method: "GET"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                            method: "GET"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, n.__assign({}, t, {
                                            method: "PUT"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                            method: "PUT"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, n.__assign({}, t, {
                                            method: "POST"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                            method: "POST"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, n.__assign({}, t, {
                                            method: "DELETE"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                            method: "DELETE"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            var a, o, i, s;
                            return n.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return t = this.constructOptions(t, r), a = t.headers ? t.headers["Content-Type"] : void 0, o = this.serialize(t.body, a), i = n.__assign({}, t, {
                                            body: o
                                        }), [4, this._fetch(e, i)];
                                    case 1:
                                        return s = c.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, c.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            var a;
                            return n.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 2, , 3]), [4, this.request(e, t, r)];
                                    case 1:
                                        if ((a = o.sent()).requestError) throw a.requestError;
                                        if (a.error) throw new Error("Error while sending legacy-api request: " + a.error.status + " - " + a.error.message);
                                        return [2, n.__assign({}, a, {
                                            body: a.body
                                        })];
                                    case 2:
                                        throw o.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, a.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return n.__awaiter(this, void 0, Promise, function() {
                            var t, r, a, o;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return r = n.sent(), e.ok ? t.body = r : t.error = r, [3, 4];
                                    case 3:
                                        return a = n.sent(), e.headers && e.headers.get && (o = e.headers.get("Content-Type")) && -1 !== o.indexOf("application/json") && (t.requestError = a), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, fetch(this.getAPIURL(e).toString(), t)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.constructOptions = function(e, t) {
                        return e = Object.assign({}, e, {
                            headers: n.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var r = a.p.store.getState(),
                            n = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": a.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (n["Content-Type"] = "application/json; charset=UTF-8");
                        var i = Object(o.e)(r);
                        return i && (n.Authorization = "OAuth " + i.authToken, i.legacyCSRFToken && (n["Twitch-Api-Token"] = i.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            n[e] && delete n[e]
                        }), n
                    }, e.logger = a.p.logger.withCategory("legacy-api"), e
                }()
        },
        cSnd: function(e, t, r) {
            "use strict";
            r.d(t, "c", function() {
                return o
            }), r.d(t, "b", function() {
                return i
            }), r.d(t, "a", function() {
                return s
            });
            var n = r("/7QA"),
                a = function() {
                    return Object(n.d)("Other", "DemographicsData")
                },
                o = function(e) {
                    return {
                        unknown: Object(n.d)("Unknown", "DemographicsData"),
                        tv: Object(n.d)("TV", "DemographicsData"),
                        ios: Object(n.d)("iOS App", "DemographicsData"),
                        web: Object(n.d)("Web", "DemographicsData"),
                        android: Object(n.d)("Android App", "DemographicsData"),
                        mobile_web: Object(n.d)("Mobile Web", "DemographicsData"),
                        mobile_aggregated: Object(n.d)("Mobile", "DemographicsData"),
                        console: Object(n.d)("Console", "DemographicsData"),
                        other: a()
                    }[e] || e
                },
                i = function(e) {
                    return {
                        other: a(),
                        front_page_featured: Object(n.d)("Featured Section - Front Page", "DemographicsData"),
                        creative_page_featured: Object(n.d)("Featured Section - Creative Page", "DemographicsData"),
                        hosted: Object(n.d)("Hosts", "DemographicsData"),
                        email_live_notification: Object(n.d)("Notifications - Email", "DemographicsData"),
                        onsite_notification: Object(n.d)("Notifications - Onsite", "DemographicsData"),
                        followed_channel: Object(n.d)("Followers", "DemographicsData"),
                        directory_browse: Object(n.d)("Browse Page", "DemographicsData"),
                        search: Object(n.d)("Searches", "DemographicsData"),
                        clips_live: Object(n.d)("Clips", "DemographicsData"),
                        friend_presence: Object(n.d)("Friends", "DemographicsData"),
                        top_nav_bar: Object(n.d)("Your Channel Page", "DemographicsData"),
                        recommended_channel: Object(n.d)("Other Recommendations", "DemographicsData"),
                        homepage_carousel: Object(n.d)("Homepage Carousel", "DemographicsData"),
                        homepage_recommendations: Object(n.d)("Homepage Recommendations", "DemographicsData"),
                        other_channel_page: Object(n.d)("Other Channel Page", "DemographicsData")
                    }[e] || Object(n.d)("{name}'s Channel Page", {
                        name: e
                    }, "DemographicsData")
                },
                s = function(e) {
                    var t;
                    return ((t = {
                        facebook: Object(n.d)("Facebook", "DemographicsData"),
                        google: Object(n.d)("Google", "DemographicsData"),
                        reddit: Object(n.d)("Reddit", "DemographicsData"),
                        youtube: Object(n.d)("Youtube", "DemographicsData")
                    })["t.co"] = Object(n.d)("Twitter", "DemographicsData"), t.unknown = Object(n.d)("Direct", "DemographicsData"), t.twitch_aggregate = Object(n.d)("Twitch", "DemographicsData"), t.external_aggregate = Object(n.d)("External", "DemographicsData"), t)[e] || e
                }
        },
        dG1e: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return o
            });
            var n = r("mrSG"),
                a = r("b6Yk");

            function o(e, t) {
                return void 0 === t && (t = {}), n.__awaiter(this, void 0, void 0, function() {
                    var r;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, a.a.request(e.path, e, t)];
                            case 1:
                                return r = n.sent(), [2, new i(r, e)]
                        }
                    })
                })
            }
            var i = function() {
                function e(e, t) {
                    this.status = e.status, this.body = e.body, this.error = e.error, this.requestError = e.requestError, this.request = t
                }
                return e.prototype.isSuccess = function() {
                    return this.status >= 200 && this.status < 400 && !this.requestError
                }, e.prototype.isError = function() {
                    return !this.isSuccess()
                }, e
            }()
        },
        dPEW: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.locatedError = function(e, t, r) {
                if (e && Array.isArray(e.path)) return e;
                return new n.GraphQLError(e && e.message, e && e.nodes || t, e && e.source, e && e.positions, r, e)
            };
            var n = r("MafX")
        },
        eAwD: function(e, t, r) {
            "use strict";

            function n(e) {
                e && requestAnimationFrame(function() {
                    e.scrollIntoView({
                        behavior: "smooth"
                    })
                })
            }
            r.d(t, "a", function() {
                return n
            })
        },
        glbf: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.syntaxError = function(e, t, r) {
                return new n.GraphQLError("Syntax Error: " + r, void 0, e, [t])
            };
            var n = r("MafX")
        },
        idPT: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = r("8/mp"),
                o = r("Ue10"),
                i = (r("8dXP"), function(e) {
                    return n.createElement(o.Qa, {
                        background: o.r.Alt,
                        borderRight: !0,
                        flexShrink: 0,
                        flexGrow: 0,
                        fullHeight: !0,
                        position: o.fb.Relative
                    }, n.createElement("nav", {
                        className: "dashboard-side-nav"
                    }, n.createElement(a.b, {
                        suppressScrollX: !0,
                        contentClassName: "dashboard-side-nav-display-flex"
                    }, e.children)))
                });
            r.d(t, "a", function() {
                return i
            })
        },
        k2fV: function(e, t, r) {
            "use strict";

            function n(e) {
                for (var t = 0; t < e.length && (" " === e[t] || "\t" === e[t]);) t++;
                return t
            }

            function a(e) {
                return n(e) === e.length
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                for (var t = e.split(/\r\n|[\n\r]/g), r = null, o = 1; o < t.length; o++) {
                    var i = t[o],
                        s = n(i);
                    if (s < i.length && (null === r || s < r) && 0 === (r = s)) break
                }
                if (r)
                    for (var c = 1; c < t.length; c++) t[c] = t[c].slice(r);
                for (; t.length > 0 && a(t[0]);) t.shift();
                for (; t.length > 0 && a(t[t.length - 1]);) t.pop();
                return t.join("\n")
            }
        },
        k84H: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Source = void 0;
            var n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r("Db/j"));
            t.Source = function e(t, r, a) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.body = t, this.name = r || "GraphQL request", this.locationOffset = a || {
                    line: 1,
                    column: 1
                }, this.locationOffset.line > 0 || (0, n.default)(0, "line in locationOffset is 1-indexed and must be positive"), this.locationOffset.column > 0 || (0, n.default)(0, "column in locationOffset is 1-indexed and must be positive")
            }
        },
        lTCR: function(e, t, r) {
            var n = r("DEM2").parse;

            function a(e) {
                return e.replace(/[\s,]+/g, " ").trim()
            }
            var o = {},
                i = {};

            function s(e) {
                return a(e.source.body.substring(e.start, e.end))
            }
            var c = !0;

            function u(e) {
                var t = a(e);
                if (o[t]) return o[t];
                var r = n(e);
                if (!r || "Document" !== r.kind) throw new Error("Not a valid GraphQL document.");
                return r = function e(t, r) {
                    var n = Object.prototype.toString.call(t);
                    if ("[object Array]" === n) return t.map(function(t) {
                        return e(t, r)
                    });
                    if ("[object Object]" !== n) throw new Error("Unexpected input.");
                    r && t.loc && delete t.loc, t.loc && (delete t.loc.startToken, delete t.loc.endToken);
                    var a, o, i, s = Object.keys(t);
                    for (a in s) s.hasOwnProperty(a) && (o = t[s[a]], "[object Object]" !== (i = Object.prototype.toString.call(o)) && "[object Array]" !== i || (t[s[a]] = e(o, !0)));
                    return t
                }(r = function(e) {
                    for (var t = {}, r = [], n = 0; n < e.definitions.length; n++) {
                        var a = e.definitions[n];
                        if ("FragmentDefinition" === a.kind) {
                            var o = a.name.value,
                                u = s(a.loc);
                            i.hasOwnProperty(o) && !i[o][u] ? (c && console.warn("Warning: fragment with name " + o + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"), i[o][u] = !0) : i.hasOwnProperty(o) || (i[o] = {}, i[o][u] = !0), t[u] || (t[u] = !0, r.push(a))
                        } else r.push(a)
                    }
                    return e.definitions = r, e
                }(r), !1), o[t] = r, r
            }

            function l() {
                for (var e = Array.prototype.slice.call(arguments), t = e[0], r = "string" == typeof t ? t : t[0], n = 1; n < e.length; n++) e[n] && e[n].kind && "Document" === e[n].kind ? r += e[n].loc.source.body : r += e[n], r += t[n];
                return u(r)
            }
            l.default = l, l.resetCaches = function() {
                o = {}, i = {}
            }, l.disableFragmentWarnings = function() {
                c = !1
            }, e.exports = l
        },
        obKW: function(e, t, r) {},
        rSo7: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return a
            });
            var n = r("/7QA");

            function a(e) {
                var t = Math.floor(e / 60),
                    r = e % 60;
                return t && r ? Object(n.d)("{hours, number}h{minutes, number}m", {
                    hours: t,
                    minutes: r
                }, "StreamSummaryDuration") : t ? Object(n.d)("{hours, number}h", {
                    hours: t
                }, "StreamSummaryDuration") : Object(n.d)("{minutes, number}m", {
                    minutes: r
                }, "StreamSummaryDuration")
            }
        },
        sL9O: function(e, t, r) {},
        vjhi: function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TeamsDashboardRoot"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "teamName"
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
                                value: "team"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "teamName"
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
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "description"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "logoID"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "logoURL"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "bannerID"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "bannerURL"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "backgroundImageID"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "backgroundImageURL"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 177
                }
            };
            r.loc.source = {
                body: "query TeamsDashboardRoot($teamName: String!) {\nteam(name: $teamName) {\nid\nname\ndisplayName\ndescription\nlogoID\nlogoURL\nbannerID\nbannerURL\nbackgroundImageID\nbackgroundImageURL\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        vvR6: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            };
            t.formatError = function(e) {
                return e || (0, a.default)(0, "Received null or undefined error."), n({}, e.extensions, {
                    message: e.message || "An unknown error occurred.",
                    locations: e.locations,
                    path: e.path
                })
            };
            var a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r("Db/j"))
        },
        wimG: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TokenKind = void 0, t.createLexer = function(e, t) {
                var r = new w(s, 0, 0, 0, 0, null);
                return {
                    source: e,
                    options: t,
                    lastToken: r,
                    token: r,
                    line: 1,
                    lineStart: 0,
                    advance: o,
                    lookahead: i
                }
            }, t.getTokenDesc = function(e) {
                var t = e.value;
                return t ? e.kind + ' "' + t + '"' : e.kind
            };
            var n = r("PUII"),
                a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(r("k2fV"));

            function o() {
                return this.lastToken = this.token, this.token = this.lookahead()
            }

            function i() {
                var e = this.token;
                if (e.kind !== c)
                    do {
                        e = e.next || (e.next = A(this, e))
                    } while (e.kind === C);
                return e
            }
            var s = "<SOF>",
                c = "<EOF>",
                u = "!",
                l = "$",
                d = "(",
                m = ")",
                h = "...",
                f = ":",
                b = "=",
                p = "@",
                g = "[",
                v = "]",
                y = "{",
                O = "|",
                E = "}",
                T = "Name",
                D = "Int",
                j = "Float",
                _ = "String",
                k = "BlockString",
                C = "Comment";
            t.TokenKind = {
                SOF: s,
                EOF: c,
                BANG: u,
                DOLLAR: l,
                PAREN_L: d,
                PAREN_R: m,
                SPREAD: h,
                COLON: f,
                EQUALS: b,
                AT: p,
                BRACKET_L: g,
                BRACKET_R: v,
                BRACE_L: y,
                PIPE: O,
                BRACE_R: E,
                NAME: T,
                INT: D,
                FLOAT: j,
                STRING: _,
                BLOCK_STRING: k,
                COMMENT: C
            };
            var S = String.prototype.charCodeAt,
                N = String.prototype.slice;

            function w(e, t, r, n, a, o, i) {
                this.kind = e, this.start = t, this.end = r, this.line = n, this.column = a, this.value = i, this.prev = o, this.next = null
            }

            function I(e) {
                return isNaN(e) ? c : e < 127 ? JSON.stringify(String.fromCharCode(e)) : '"\\u' + ("00" + e.toString(16).toUpperCase()).slice(-4) + '"'
            }

            function A(e, t) {
                var r = e.source,
                    o = r.body,
                    i = o.length,
                    s = function(e, t, r) {
                        var n = e.length,
                            a = t;
                        for (; a < n;) {
                            var o = S.call(e, a);
                            if (9 === o || 32 === o || 44 === o || 65279 === o) ++a;
                            else if (10 === o) ++a, ++r.line, r.lineStart = a;
                            else {
                                if (13 !== o) break;
                                10 === S.call(e, a + 1) ? a += 2 : ++a, ++r.line, r.lineStart = a
                            }
                        }
                        return a
                    }(o, t.end, e),
                    A = e.line,
                    M = 1 + s - e.lineStart;
                if (s >= i) return new w(c, i, i, A, M, t);
                var P = S.call(o, s);
                if (P < 32 && 9 !== P && 10 !== P && 13 !== P) throw (0, n.syntaxError)(r, s, "Cannot contain the invalid character " + I(P) + ".");
                switch (P) {
                    case 33:
                        return new w(u, s, s + 1, A, M, t);
                    case 35:
                        return function(e, t, r, n, a) {
                            var o = e.body,
                                i = void 0,
                                s = t;
                            do {
                                i = S.call(o, ++s)
                            } while (null !== i && (i > 31 || 9 === i));
                            return new w(C, t, s, r, n, a, N.call(o, t + 1, s))
                        }(r, s, A, M, t);
                    case 36:
                        return new w(l, s, s + 1, A, M, t);
                    case 40:
                        return new w(d, s, s + 1, A, M, t);
                    case 41:
                        return new w(m, s, s + 1, A, M, t);
                    case 46:
                        if (46 === S.call(o, s + 1) && 46 === S.call(o, s + 2)) return new w(h, s, s + 3, A, M, t);
                        break;
                    case 58:
                        return new w(f, s, s + 1, A, M, t);
                    case 61:
                        return new w(b, s, s + 1, A, M, t);
                    case 64:
                        return new w(p, s, s + 1, A, M, t);
                    case 91:
                        return new w(g, s, s + 1, A, M, t);
                    case 93:
                        return new w(v, s, s + 1, A, M, t);
                    case 123:
                        return new w(y, s, s + 1, A, M, t);
                    case 124:
                        return new w(O, s, s + 1, A, M, t);
                    case 125:
                        return new w(E, s, s + 1, A, M, t);
                    case 65:
                    case 66:
                    case 67:
                    case 68:
                    case 69:
                    case 70:
                    case 71:
                    case 72:
                    case 73:
                    case 74:
                    case 75:
                    case 76:
                    case 77:
                    case 78:
                    case 79:
                    case 80:
                    case 81:
                    case 82:
                    case 83:
                    case 84:
                    case 85:
                    case 86:
                    case 87:
                    case 88:
                    case 89:
                    case 90:
                    case 95:
                    case 97:
                    case 98:
                    case 99:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 104:
                    case 105:
                    case 106:
                    case 107:
                    case 108:
                    case 109:
                    case 110:
                    case 111:
                    case 112:
                    case 113:
                    case 114:
                    case 115:
                    case 116:
                    case 117:
                    case 118:
                    case 119:
                    case 120:
                    case 121:
                    case 122:
                        return function(e, t, r, n, a) {
                            var o = e.body,
                                i = o.length,
                                s = t + 1,
                                c = 0;
                            for (; s !== i && null !== (c = S.call(o, s)) && (95 === c || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122);) ++s;
                            return new w(T, t, s, r, n, a, N.call(o, t, s))
                        }(r, s, A, M, t);
                    case 45:
                    case 48:
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                        return function(e, t, r, a, o, i) {
                            var s = e.body,
                                c = r,
                                u = t,
                                l = !1;
                            45 === c && (c = S.call(s, ++u));
                            if (48 === c) {
                                if ((c = S.call(s, ++u)) >= 48 && c <= 57) throw (0, n.syntaxError)(e, u, "Invalid number, unexpected digit after 0: " + I(c) + ".")
                            } else u = L(e, u, c), c = S.call(s, u);
                            46 === c && (l = !0, c = S.call(s, ++u), u = L(e, u, c), c = S.call(s, u));
                            69 !== c && 101 !== c || (l = !0, 43 !== (c = S.call(s, ++u)) && 45 !== c || (c = S.call(s, ++u)), u = L(e, u, c));
                            return new w(l ? j : D, t, u, a, o, i, N.call(s, t, u))
                        }(r, s, P, A, M, t);
                    case 34:
                        return 34 === S.call(o, s + 1) && 34 === S.call(o, s + 2) ? function(e, t, r, o, i) {
                            var s = e.body,
                                c = t + 3,
                                u = c,
                                l = 0,
                                d = "";
                            for (; c < s.length && null !== (l = S.call(s, c));) {
                                if (34 === l && 34 === S.call(s, c + 1) && 34 === S.call(s, c + 2)) return d += N.call(s, u, c), new w(k, t, c + 3, r, o, i, (0, a.default)(d));
                                if (l < 32 && 9 !== l && 10 !== l && 13 !== l) throw (0, n.syntaxError)(e, c, "Invalid character within String: " + I(l) + ".");
                                92 === l && 34 === S.call(s, c + 1) && 34 === S.call(s, c + 2) && 34 === S.call(s, c + 3) ? (d += N.call(s, u, c) + '"""', u = c += 4) : ++c
                            }
                            throw (0, n.syntaxError)(e, c, "Unterminated string.")
                        }(r, s, A, M, t) : function(e, t, r, a, o) {
                            var i = e.body,
                                s = t + 1,
                                c = s,
                                u = 0,
                                l = "";
                            for (; s < i.length && null !== (u = S.call(i, s)) && 10 !== u && 13 !== u;) {
                                if (34 === u) return l += N.call(i, c, s), new w(_, t, s + 1, r, a, o, l);
                                if (u < 32 && 9 !== u) throw (0, n.syntaxError)(e, s, "Invalid character within String: " + I(u) + ".");
                                if (++s, 92 === u) {
                                    switch (l += N.call(i, c, s - 1), u = S.call(i, s)) {
                                        case 34:
                                            l += '"';
                                            break;
                                        case 47:
                                            l += "/";
                                            break;
                                        case 92:
                                            l += "\\";
                                            break;
                                        case 98:
                                            l += "\b";
                                            break;
                                        case 102:
                                            l += "\f";
                                            break;
                                        case 110:
                                            l += "\n";
                                            break;
                                        case 114:
                                            l += "\r";
                                            break;
                                        case 116:
                                            l += "\t";
                                            break;
                                        case 117:
                                            var d = R(S.call(i, s + 1), S.call(i, s + 2), S.call(i, s + 3), S.call(i, s + 4));
                                            if (d < 0) throw (0, n.syntaxError)(e, s, "Invalid character escape sequence: \\u" + i.slice(s + 1, s + 5) + ".");
                                            l += String.fromCharCode(d), s += 4;
                                            break;
                                        default:
                                            throw (0, n.syntaxError)(e, s, "Invalid character escape sequence: \\" + String.fromCharCode(u) + ".")
                                    }
                                    c = ++s
                                }
                            }
                            throw (0, n.syntaxError)(e, s, "Unterminated string.")
                        }(r, s, A, M, t)
                }
                throw (0, n.syntaxError)(r, s, function(e) {
                    if (39 === e) return "Unexpected single quote character ('), did you mean to use a double quote (\")?";
                    return "Cannot parse the unexpected character " + I(e) + "."
                }(P))
            }

            function L(e, t, r) {
                var a = e.body,
                    o = t,
                    i = r;
                if (i >= 48 && i <= 57) {
                    do {
                        i = S.call(a, ++o)
                    } while (i >= 48 && i <= 57);
                    return o
                }
                throw (0, n.syntaxError)(e, o, "Invalid number, expected digit but got: " + I(i) + ".")
            }

            function R(e, t, r, n) {
                return M(e) << 12 | M(t) << 8 | M(r) << 4 | M(n)
            }

            function M(e) {
                return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
            }
            w.prototype.toJSON = w.prototype.inspect = function() {
                return {
                    kind: this.kind,
                    value: this.value,
                    line: this.line,
                    column: this.column
                }
            }
        },
        xaK5: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.NAME = "Name", t.DOCUMENT = "Document", t.OPERATION_DEFINITION = "OperationDefinition", t.VARIABLE_DEFINITION = "VariableDefinition", t.VARIABLE = "Variable", t.SELECTION_SET = "SelectionSet", t.FIELD = "Field", t.ARGUMENT = "Argument", t.FRAGMENT_SPREAD = "FragmentSpread", t.INLINE_FRAGMENT = "InlineFragment", t.FRAGMENT_DEFINITION = "FragmentDefinition", t.INT = "IntValue", t.FLOAT = "FloatValue", t.STRING = "StringValue", t.BOOLEAN = "BooleanValue", t.NULL = "NullValue", t.ENUM = "EnumValue", t.LIST = "ListValue", t.OBJECT = "ObjectValue", t.OBJECT_FIELD = "ObjectField", t.DIRECTIVE = "Directive", t.NAMED_TYPE = "NamedType", t.LIST_TYPE = "ListType", t.NON_NULL_TYPE = "NonNullType", t.SCHEMA_DEFINITION = "SchemaDefinition", t.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", t.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", t.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", t.FIELD_DEFINITION = "FieldDefinition", t.INPUT_VALUE_DEFINITION = "InputValueDefinition", t.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", t.UNION_TYPE_DEFINITION = "UnionTypeDefinition", t.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", t.ENUM_VALUE_DEFINITION = "EnumValueDefinition", t.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", t.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", t.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", t.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", t.UNION_TYPE_EXTENSION = "UnionTypeExtension", t.ENUM_TYPE_EXTENSION = "EnumTypeExtension", t.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension", t.DIRECTIVE_DEFINITION = "DirectiveDefinition"
        },
        yI7j: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.printError = function(e) {
                var t = [];
                if (e.nodes) e.nodes.forEach(function(e) {
                    e.loc && t.push(a(e.loc.source, (0, n.getLocation)(e.loc.source, e.loc.start)))
                });
                else if (e.source && e.locations) {
                    var r = e.source;
                    e.locations.forEach(function(e) {
                        t.push(a(r, e))
                    })
                }
                return 0 === t.length ? e.message : [e.message].concat(t).join("\n\n") + "\n"
            };
            var n = r("PO9o");

            function a(e, t) {
                var r = t.line,
                    n = e.locationOffset.line - 1,
                    a = function(e, t) {
                        return 1 === t.line ? e.locationOffset.column - 1 : 0
                    }(e, t),
                    s = r + n,
                    c = t.column + a,
                    u = (s - 1).toString(),
                    l = s.toString(),
                    d = (s + 1).toString(),
                    m = d.length,
                    h = e.body.split(/\r\n|[\n\r]/g);
                return h[0] = o(e.locationOffset.column - 1) + h[0], [e.name + " (" + s + ":" + c + ")", r >= 2 && i(m, u) + ": " + h[r - 2], i(m, l) + ": " + h[r - 1], o(2 + m + c - 1) + "^", r < h.length && i(m, d) + ": " + h[r]].filter(Boolean).join("\n")
            }

            function o(e) {
                return Array(e + 1).join(" ")
            }

            function i(e, t) {
                return o(e - t.length) + t
            }
        }
    }
]);