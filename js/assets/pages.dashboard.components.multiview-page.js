(window.webpackJsonp = window.webpackJsonp || []).push([
    [158], {
        "7MYR": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "CreateContentAttributes"
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
                                    value: "CreateMultiviewContentAttributesInput"
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
                                value: "createMultiviewContentAttributes"
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
                                        value: "succeededCreates"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "multiviewContentAttribute"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "failedCreates"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "multiviewContentAttribute"
                                            },
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
                    end: 331
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/dashboard/components/multiview-page/models/content-attribute-fragment.gql"\nmutation CreateContentAttributes($input: CreateMultiviewContentAttributesInput!){\ncreateMultiviewContentAttributes(input: $input) {\nsucceededCreates {\n...multiviewContentAttribute\n}\nfailedCreates {\n...multiviewContentAttribute\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("sRk+").definitions)), e.exports = a
        },
        BwG8: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "CreateChanlet"
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
                                    value: "CreateChanletInput"
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
                                value: "createChanlet"
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
                                        value: "channelID"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "chanlet"
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
                                                value: "name"
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
                    end: 136
                }
            };
            n.loc.source = {
                body: "mutation CreateChanlet($input: CreateChanletInput!){\ncreateChanlet(input: $input) {\nchannelID\nchanlet {\nid\nname\n# chanletStreamKey\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        TFsW: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "dashboardChanlet"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Channel"
                        }
                    },
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
                                value: "contentAttributes"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "multiviewContentAttribute"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 217
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/dashboard/components/multiview-page/models/content-attribute-fragment.gql"\nfragment dashboardChanlet on Channel {\nid\nname\n# chanletStreamKey\ncontentAttributes {\n...multiviewContentAttribute\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("sRk+").definitions)), e.exports = a
        },
        V2z7: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChanletsTab"
                    },
                    variableDefinitions: [{
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
                                        value: "channelLogin"
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
                                        value: "channel"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "chanlets"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "dashboardChanlet"
                                                    },
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "availableContentAttributes"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "multiviewContentAttribute"
                                                    },
                                                    directives: []
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
                    end: 372
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/dashboard/components/multiview-page/models/content-attribute-fragment.gql"\n#import "twilight/pages/dashboard/components/multiview-page/models/chanlet-fragment.gql"\nquery ChanletsTab($channelLogin: String!) {\nuser(login: $channelLogin) {\nid\nchannel {\nchanlets {\n...dashboardChanlet\n}\navailableContentAttributes {\n...multiviewContentAttribute\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }
            a.definitions = a.definitions.concat(r(n("sRk+").definitions)), a.definitions = a.definitions.concat(r(n("TFsW").definitions)), e.exports = a
        },
        mcoV: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, i, r, l = n("/MKj"),
                o = n("kRBY"),
                s = n("mrSG"),
                c = n("q1tI"),
                u = n("fvjX"),
                d = n("/7QA"),
                m = n("LA8z"),
                p = n("8/mp"),
                h = n("yR8l"),
                b = n("geRD"),
                v = n("GnwI"),
                C = n("eJ65"),
                f = n("IFXb"),
                k = n("9rZX"),
                g = n("Ue10"),
                y = (n("xefp"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return c.createElement(k, {
                            overlayClassName: "modal__backdrop",
                            className: "modal__content",
                            isOpen: this.props.isOpen,
                            ariaHideApp: !1
                        }, c.createElement(g.Xa, {
                            className: "multiview-modal"
                        }, c.createElement(g.Cb, {
                            className: "multiview-modal__content",
                            padding: 4,
                            margin: {
                                top: 5
                            },
                            background: g.r.Base
                        }, this.props.children)))
                    }, t
                }(c.Component)),
                E = Object(u.compose)(Object(v.b)("MultiviewModal"))(y);
            ! function(e) {
                e.Group = "group", e.Player = "player", e.Role = "role"
            }(a || (a = {})),
            function(e) {
                e.Group = "Group", e.Player = "Player", e.Role = "Role"
            }(i || (i = {})),
            function(e) {
                e.ChanletList = "chanlets-tab__chanlet-list", e.GroupList = "chanlets-tab__group-list", e.EmptyList = "chanlets-tab__empty-list"
            }(r || (r = {}));
            var S, w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isChanletModalOpen: !1,
                            isChanletGroupModalOpen: !1,
                            isSaving: !1
                        }, t.onGroupNameChange = function(e) {
                            var n = e.target.value,
                                a = Object.assign({}, t.state.contentAttribute, {
                                    value: n
                                });
                            t.setState({
                                contentAttribute: a
                            })
                        }, t.createChanlet = function() {
                            return s.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return s.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            this.setState({
                                                isSaving: !0
                                            }), t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.createChanlet()];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return e = t.sent(), d.k.error(e, "Could not create content attribute"), [3, 4];
                                        case 4:
                                            return this.closeChanletModal(), [2]
                                    }
                                })
                            })
                        }, t.createChanletGroup = function() {
                            return s.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return s.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            this.setState({
                                                isSaving: !0
                                            }), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), e = this.state.contentAttribute, t = s.__assign({
                                                __typename: "MultiviewContentAttributeParams"
                                            }, e), [4, this.props.createContentAttributes([t])];
                                        case 2:
                                            return a.sent(), [3, 4];
                                        case 3:
                                            return n = a.sent(), d.k.error(n, "Could not create content attribute"), [3, 4];
                                        case 4:
                                            return this.closeChanletGroupModal(), [2]
                                    }
                                })
                            })
                        }, t.openChanletModal = function() {
                            t.setState({
                                isChanletModalOpen: !0,
                                isSaving: !1
                            })
                        }, t.closeChanletModal = function() {
                            t.setState({
                                isChanletModalOpen: !1,
                                isSaving: !1
                            })
                        }, t.openChanletGroupModal = function() {
                            var e = {
                                __typename: "MultiviewContentAttribute",
                                key: a.Group,
                                name: i.Group,
                                value: ""
                            };
                            t.setState({
                                contentAttribute: e,
                                isChanletGroupModalOpen: !0,
                                isSaving: !1
                            })
                        }, t.editChanletGroupModal = function(e) {
                            t.setState({
                                contentAttribute: e,
                                isChanletGroupModalOpen: !0,
                                isSaving: !1
                            })
                        }, t.closeChanletGroupModal = function() {
                            t.setState({
                                isChanletGroupModalOpen: !1,
                                isSaving: !1
                            })
                        }, t.renderMoreButton = function(e, t) {
                            return c.createElement(g.Xa, {
                                margin: {
                                    right: .5
                                }
                            }, c.createElement(C.a, null, c.createElement(g.z, {
                                icon: g.rb.More,
                                type: g.F.Text
                            }), c.createElement(g.u, {
                                direction: g.v.BottomRight,
                                tailOffset: 8
                            }, c.createElement(g.Ua, {
                                onClick: e
                            }, c.createElement(g.Xa, {
                                className: "chanlets-tab__balloon-item",
                                padding: {
                                    x: 1,
                                    y: 1
                                },
                                display: g.X.Flex,
                                alignItems: g.f.Center
                            }, c.createElement(g.qb, {
                                asset: g.rb.Edit,
                                type: g.sb.Brand
                            }), c.createElement(g.Xa, {
                                margin: {
                                    left: 1
                                }
                            }, Object(d.e)("Edit", "ChanletsGroup")))), t && c.createElement(g.Ua, {
                                onClick: t
                            }, c.createElement(g.Xa, {
                                className: "chanlets-tab__balloon-item",
                                padding: {
                                    x: 1,
                                    y: 1
                                },
                                display: g.X.Flex,
                                alignItems: g.f.Center
                            }, c.createElement(g.qb, {
                                asset: g.rb.Trash,
                                type: g.sb.Brand
                            }), c.createElement(g.Xa, {
                                margin: {
                                    left: 1
                                }
                            }, Object(d.e)("Delete", "ChanletsGroup")))))))
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return c.createElement(f.a, null, this.renderChanletGroups(), this.renderChanlets())
                    }, t.prototype.renderChanletGroups = function() {
                        var e = this,
                            t = this.props.availableContentAttributes.filter(function(e) {
                                return e.key === a.Group
                            });
                        return c.createElement(g.Xa, {
                            margin: {
                                bottom: 3
                            }
                        }, c.createElement(g.Cb, {
                            display: g.X.Flex,
                            justifyContent: g.Wa.Between,
                            padding: {
                                bottom: 2
                            }
                        }, c.createElement(g.W, {
                            type: g.Tb.H4,
                            bold: !0
                        }, Object(d.e)("Chanlet Groups", "ChanletsTab")), c.createElement(g.Xa, null, c.createElement(g.z, {
                            icon: g.rb.Plus,
                            type: g.F.Hollow,
                            onClick: this.openChanletGroupModal
                        }, Object(d.e)("Add Group", "ChanletsTab")))), !t.length && this.renderEmptyList(Object(d.e)("No Chanlet Groups", "ChanletsGroup")), t.map(function(t) {
                            return c.createElement(g.Cb, {
                                background: g.r.Base,
                                elevation: 1,
                                padding: 2,
                                alignItems: g.f.Center,
                                justifyContent: g.Wa.Between,
                                display: g.X.Flex,
                                flexDirection: g.Aa.Row,
                                margin: {
                                    bottom: 1
                                },
                                key: t.id
                            }, c.createElement(g.W, null, t.value), e.renderMoreButton(e.editChanletGroupModal.bind(e, t)))
                        }), this.renderChanletGroupModal())
                    }, t.prototype.renderChanlets = function() {
                        var e = this,
                            t = this.props.chanlets;
                        return c.createElement(g.Xa, null, c.createElement(g.Cb, {
                            display: g.X.Flex,
                            justifyContent: g.Wa.Between,
                            padding: {
                                bottom: 2
                            }
                        }, c.createElement(g.W, {
                            type: g.Tb.H4,
                            bold: !0
                        }, Object(d.e)("All Chanlets", "ChanletsTab")), c.createElement(g.Xa, null, c.createElement(g.z, {
                            icon: g.rb.Plus,
                            type: g.F.Hollow,
                            onClick: this.openChanletModal
                        }, Object(d.e)("Add Chanlet", "ChanletsTab")))), !t.length && this.renderEmptyList(Object(d.e)("No Chanlets", "ChanletsGroup")), t.map(function(n) {
                            return c.createElement(g.Cb, {
                                background: g.r.Base,
                                elevation: 1,
                                padding: 2,
                                margin: {
                                    bottom: 1
                                },
                                alignItems: g.f.Center,
                                justifyContent: g.Wa.Between,
                                display: g.X.Flex,
                                flexDirection: g.Aa.Row,
                                key: n.id
                            }, c.createElement(g.W, null, n.name), e.renderMoreButton(e.openChanletModal.bind(e, t)))
                        }), this.renderChanletModal())
                    }, t.prototype.renderChanletModal = function() {
                        return c.createElement(E, {
                            isOpen: this.state.isChanletModalOpen
                        }, c.createElement(g.Cb, {
                            display: g.X.Flex,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            justifyContent: g.Wa.Between
                        }, c.createElement(g.Xa, {
                            flexGrow: 0,
                            flexShrink: 1
                        }, c.createElement(g.W, {
                            type: g.Tb.H3
                        }, Object(d.e)("Edit Channel", "ChanletsTab"))), c.createElement(g.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, c.createElement(g.z, {
                            onClick: this.closeChanletModal,
                            type: g.F.Text
                        }, this.cancelText()), c.createElement(g.z, {
                            onClick: this.createChanlet,
                            disabled: this.state.isSaving
                        }, Object(d.e)("Save Chanlet", "ChanletsTab")))), c.createElement(p.b, null, c.createElement(g.Ja, {
                            gutterSize: g.Ka.Large
                        }, c.createElement(g.P, {
                            cols: {
                                default: 12,
                                md: 6,
                                lg: 5
                            }
                        }, c.createElement(g.Xa, null)), c.createElement(g.P, {
                            cols: {
                                default: 12,
                                md: 6,
                                lg: 7
                            }
                        }, c.createElement(g.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(g.Ea, {
                            id: "chanlet-title",
                            label: Object(d.e)("Chanlet Title", "ChanletsTab")
                        }, c.createElement(g.Ra, {
                            type: g.Ta.Text
                        })))))))
                    }, t.prototype.renderChanletGroupModal = function() {
                        var e = this.state.contentAttribute;
                        if (e) return c.createElement(E, {
                            isOpen: this.state.isChanletGroupModalOpen
                        }, c.createElement(g.Cb, {
                            display: g.X.Flex,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            justifyContent: g.Wa.Between
                        }, c.createElement(g.Xa, {
                            flexGrow: 0,
                            flexShrink: 1
                        }, c.createElement(g.W, {
                            type: g.Tb.H3
                        }, Object(d.e)("Edit Metadata Group", "ChanletsTab"))), c.createElement(g.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, c.createElement(g.z, {
                            onClick: this.closeChanletGroupModal,
                            type: g.F.Text
                        }, this.cancelText()), c.createElement(g.z, {
                            onClick: this.createChanletGroup,
                            disabled: this.state.isSaving
                        }, Object(d.e)("Save Group", "ChanletsTab")))), c.createElement(p.b, null, c.createElement(g.Cb, {
                            background: g.r.Alt,
                            padding: 2,
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(g.Ea, {
                            id: "group-name",
                            label: Object(d.e)("Group Name", "ChanletsTab")
                        }, c.createElement(g.Ra, {
                            type: g.Ta.Text,
                            onChange: this.onGroupNameChange,
                            value: e.value
                        })))))
                    }, t.prototype.renderEmptyList = function(e) {
                        return c.createElement(g.Cb, {
                            "data-test-selector": r.EmptyList,
                            padding: {
                                y: 2
                            },
                            borderTop: !0
                        }, c.createElement(g.W, {
                            italic: !0,
                            color: g.O.Alt2
                        }, e))
                    }, t.prototype.cancelText = function() {
                        return Object(d.e)("Cancel", "ChanletsTab")
                    }, t
                }(c.Component),
                A = Object(u.compose)(Object(v.b)("ChanletsTab"))(w),
                N = n("bRMw"),
                T = n("BwG8"),
                M = n("7MYR"),
                O = n("V2z7");
            ! function(e) {
                e.Tabs = "multiview-page__tabs", e.WrongUser = "multiview-page__wrong-user"
            }(S || (S = {}));
            var _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeIndex: 0
                        }, t.renderChanletsTab = function() {
                            if (t.props.data && t.props.data.user && t.props.data.user.channel) {
                                var e = t.props.data.user.channel;
                                return c.createElement(A, {
                                    channelID: t.props.data.user.id,
                                    chanlets: e.chanlets || [],
                                    availableContentAttributes: e.availableContentAttributes || [],
                                    createChanlet: t.createChanlet,
                                    updateChanlet: t.updateChanlet,
                                    createContentAttributes: t.createContentAttributes,
                                    updateContentAttributes: t.updateContentAttributes
                                })
                            }
                        }, t.renderTeamsTab = function() {
                            if (t.props.data && t.props.data.user && t.props.data.user.channel) {
                                var e = t.props.data.user.channel;
                                return c.createElement(A, {
                                    channelID: t.props.data.user.id,
                                    chanlets: e.chanlets || [],
                                    availableContentAttributes: e.availableContentAttributes || [],
                                    createChanlet: t.createChanlet,
                                    updateChanlet: t.updateChanlet,
                                    createContentAttributes: t.createContentAttributes,
                                    updateContentAttributes: t.updateContentAttributes
                                })
                            }
                        }, t.renderPlayersTab = function() {
                            if (t.props.data && t.props.data.user && t.props.data.user.channel) {
                                var e = t.props.data.user.channel;
                                return c.createElement(A, {
                                    channelID: t.props.data.user.id,
                                    chanlets: e.chanlets || [],
                                    availableContentAttributes: e.availableContentAttributes || [],
                                    createChanlet: t.createChanlet,
                                    updateChanlet: t.updateChanlet,
                                    createContentAttributes: t.createContentAttributes,
                                    updateContentAttributes: t.updateContentAttributes
                                })
                            }
                        }, t.renderRolesTab = function() {
                            if (t.props.data && t.props.data.user && t.props.data.user.channel) {
                                var e = t.props.data.user.channel;
                                return c.createElement(A, {
                                    channelID: t.props.data.user.id,
                                    chanlets: e.chanlets || [],
                                    availableContentAttributes: e.availableContentAttributes || [],
                                    createChanlet: t.createChanlet,
                                    updateChanlet: t.updateChanlet,
                                    createContentAttributes: t.createContentAttributes,
                                    updateContentAttributes: t.updateContentAttributes
                                })
                            }
                        }, t.createChanlet = function() {
                            return s.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return s.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return (e = this.props.data.user && this.props.data.user.id) ? [4, this.props.createChanlet(Object(b.a)({
                                                channelID: e
                                            }))] : [2];
                                        case 1:
                                            return t = n.sent(), Object(b.e)(O, {
                                                channelLogin: this.props.match.params.channelLogin
                                            }, function(e) {
                                                var n = e.user && e.user.channel;
                                                if (n && n.chanlets) {
                                                    var a = t.data && t.data.createChanlet && t.data.createChanlet.chanlet;
                                                    if (a) {
                                                        var i = s.__assign({}, a, {
                                                            contentAttributes: []
                                                        });
                                                        n.chanlets.push(i)
                                                    }
                                                }
                                                return e
                                            }), [2]
                                    }
                                })
                            })
                        }, t.updateChanlet = function() {
                            return s.__awaiter(t, void 0, void 0, function() {
                                return s.__generator(this, function(e) {
                                    return [2]
                                })
                            })
                        }, t.createContentAttributes = function(e) {
                            return s.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return s.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, this.props.createContentAttributes(Object(b.a)({
                                                params: e
                                            }))];
                                        case 1:
                                            return t = n.sent(), Object(b.e)(O, {
                                                channelLogin: this.props.match.params.channelLogin
                                            }, function(e) {
                                                var n = e.user && e.user.channel;
                                                if (n && n.availableContentAttributes) {
                                                    var a = t.data && t.data.createMultiviewContentAttributes && t.data.createMultiviewContentAttributes.succeededCreates;
                                                    a && (n.availableContentAttributes = n.availableContentAttributes.concat(a))
                                                }
                                                return e
                                            }), [2]
                                    }
                                })
                            })
                        }, t.updateContentAttributes = function(e) {
                            return s.__awaiter(t, void 0, void 0, function() {
                                return s.__generator(this, function(e) {
                                    return [2]
                                })
                            })
                        }, t.onTabClick = function(e, n) {
                            e.preventDefault(), t.setState({
                                activeIndex: n
                            })
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (!Object(N.b)(N.a, this.props.match.params.channelLogin)) return c.createElement(m.a, null);
                        if (this.props.data.loading) return c.createElement(g.Za, {
                            fillContent: !0
                        });
                        if (this.props.data.error || !this.props.data.user || !this.props.data.user.channel) return c.createElement(g.Xa, {
                            padding: 2
                        }, c.createElement(g.W, {
                            italic: !0
                        }, Object(d.e)("There was an issue loading your Multiview settings.", "MultiviewPage")));
                        if (this.props.user && this.props.user.id !== this.props.data.user.id) {
                            var e = this.props.user.login;
                            return c.createElement(g.Xa, {
                                padding: 2,
                                "data-test-selector": S.WrongUser
                            }, c.createElement(g.W, {
                                italic: !0
                            }, Object(d.e)("You can not edit the Multiview settings for this channel. <x:link>Click here</x:link> to get to your channel’s Multiview dashboard", {
                                "x:link": function(t) {
                                    return c.createElement(g.U, {
                                        to: "/" + e + "/dashboard/multiview"
                                    }, t)
                                }
                            }, "MultiviewPage")))
                        }
                        return c.createElement(p.b, null, c.createElement(g.Xa, {
                            padding: 2
                        }, c.createElement(g.Lb, {
                            "data-test-selector": S.Tabs,
                            activeTabIndex: this.state.activeIndex,
                            justifyContent: g.Wa.Start,
                            tabs: [{
                                onClick: this.onTabClick,
                                label: Object(d.e)("Chanlets", "MultiviewPage")
                            }, {
                                onClick: this.onTabClick,
                                label: Object(d.e)("Teams", "MultiviewPage")
                            }, {
                                onClick: this.onTabClick,
                                label: Object(d.e)("Players", "MultiviewPage")
                            }, {
                                onClick: this.onTabClick,
                                label: Object(d.e)("Roles", "MultiviewPage")
                            }]
                        }), c.createElement(g.Xa, {
                            padding: 2
                        }, this.renderTabContent())))
                    }, t.prototype.renderTabContent = function() {
                        switch (this.state.activeIndex) {
                            case 0:
                                return this.renderChanletsTab();
                            case 1:
                                return this.renderTeamsTab();
                            case 2:
                                return this.renderPlayersTab();
                            case 3:
                                return this.renderRolesTab();
                            default:
                                return c.createElement(g.Xa, null)
                        }
                    }, t
                }(c.Component),
                F = Object(u.compose)(Object(v.b)("Multiview"), Object(h.a)(O, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.match.params.channelLogin
                            }
                        }
                    }
                }), Object(h.a)(T, {
                    name: "createChanlet"
                }), Object(h.a)(M, {
                    name: "createContentAttributes"
                }))(_);
            var G = Object(l.connect)(function(e) {
                return {
                    user: Object(o.e)(e)
                }
            })(F);
            n.d(t, "FEATURE_FLAG", function() {
                return "cc_v2_flag"
            }), n.d(t, "MultiviewPage", function() {
                return G
            })
        },
        "sRk+": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "multiviewContentAttribute"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "MultiviewContentAttribute"
                        }
                    },
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
                                value: "key"
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
                                value: "parentID"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "parentKey"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "value"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "valueShortName"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 119
                }
            };
            n.loc.source = {
                body: "fragment multiviewContentAttribute on MultiviewContentAttribute {\nid\nkey\nname\nparentID\nparentKey\nvalue\nvalueShortName\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        xefp: function(e, t, n) {}
    }
]);