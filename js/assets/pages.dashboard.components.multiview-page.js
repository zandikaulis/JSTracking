(window.webpackJsonp = window.webpackJsonp || []).push([
    [164], {
        "7MYR": function(e, t, n) {
            var i = {
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
            i.loc.source = {
                body: '#import "twilight/pages/dashboard/components/multiview-page/models/content-attribute-fragment.gql"\nmutation CreateContentAttributes($input: CreateMultiviewContentAttributesInput!){\ncreateMultiviewContentAttributes(input: $input) {\nsucceededCreates {\n...multiviewContentAttribute\n}\nfailedCreates {\n...multiviewContentAttribute\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("sRk+").definitions)), e.exports = i
        },
        "9vM1": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UpdateContentAttributes"
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
                                    value: "UpdateMultiviewContentAttributesInput"
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
                                value: "updateMultiviewContentAttributes"
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
                                        value: "succeededUpdates"
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
                                        value: "failedUpdates"
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
            i.loc.source = {
                body: '#import "twilight/pages/dashboard/components/multiview-page/models/content-attribute-fragment.gql"\nmutation UpdateContentAttributes($input: UpdateMultiviewContentAttributesInput!){\nupdateMultiviewContentAttributes(input: $input) {\nsucceededUpdates {\n...multiviewContentAttribute\n}\nfailedUpdates {\n...multiviewContentAttribute\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("sRk+").definitions)), e.exports = i
        },
        BwG8: function(e, t, n) {
            var i = {
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
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "dashboardChanlet"
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
                    end: 218
                }
            };
            i.loc.source = {
                body: '#import "twilight/pages/dashboard/components/multiview-page/models/chanlet-fragment.gql"\nmutation CreateChanlet($input: CreateChanletInput!){\ncreateChanlet(input: $input) {\nchannelID\nchanlet {\n...dashboardChanlet\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("TFsW").definitions)), e.exports = i
        },
        KXXx: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "DeleteContentAttributes"
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
                                    value: "DeleteMultiviewContentAttributesInput"
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
                                value: "deleteMultiviewContentAttributes"
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
                                        value: "succeededDeletes"
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
                                        value: "failedDeletes"
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
            i.loc.source = {
                body: '#import "twilight/pages/dashboard/components/multiview-page/models/content-attribute-fragment.gql"\nmutation DeleteContentAttributes($input: DeleteMultiviewContentAttributesInput!){\ndeleteMultiviewContentAttributes(input: $input) {\nsucceededDeletes {\n...multiviewContentAttribute\n}\nfailedDeletes {\n...multiviewContentAttribute\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("sRk+").definitions)), e.exports = i
        },
        TFsW: function(e, t, n) {
            var i = {
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
                                value: "chanletStreamKey"
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
                                        value: "previewImageURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "270"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "480"
                                        }
                                    }],
                                    directives: []
                                }]
                            }
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
                    end: 266
                }
            };
            i.loc.source = {
                body: '#import "twilight/pages/dashboard/components/multiview-page/models/content-attribute-fragment.gql"\nfragment dashboardChanlet on Channel {\nid\nname\nchanletStreamKey\nstream {\npreviewImageURL(height: 270 width: 480)\n}\ncontentAttributes {\n...multiviewContentAttribute\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("sRk+").definitions)), e.exports = i
        },
        V2z7: function(e, t, n) {
            var i = {
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
            i.loc.source = {
                body: '#import "twilight/pages/dashboard/components/multiview-page/models/content-attribute-fragment.gql"\n#import "twilight/pages/dashboard/components/multiview-page/models/chanlet-fragment.gql"\nquery ChanletsTab($channelLogin: String!) {\nuser(login: $channelLogin) {\nid\nchannel {\nchanlets {\n...dashboardChanlet\n}\navailableContentAttributes {\n...multiviewContentAttribute\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(r(n("sRk+").definitions)), i.definitions = i.definitions.concat(r(n("TFsW").definitions)), e.exports = i
        },
        "aw+h": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UpdateChanlet"
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
                                    value: "UpdateChanletContentAttributesInput"
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
                                value: "updateChanletContentAttributes"
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
                                        value: "chanlet"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 242
                }
            };
            i.loc.source = {
                body: '#import "twilight/pages/dashboard/components/multiview-page/models/chanlet-fragment.gql"\nmutation UpdateChanlet($input: UpdateChanletContentAttributesInput!){\nupdateChanletContentAttributes(input: $input) {\nchanlet {\n...dashboardChanlet\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("TFsW").definitions)), e.exports = i
        },
        mcoV: function(e, t, n) {
            "use strict";
            n.r(t);
            var i, a = n("/MKj"),
                r = n("kRBY"),
                l = n("mrSG"),
                s = n("q1tI"),
                o = n("4p7I"),
                u = n("yoKv"),
                d = n("fvjX"),
                c = n("/7QA"),
                m = n("ZS2+"),
                p = n("LA8z"),
                v = n("8/mp"),
                b = n("yR8l"),
                k = n("geRD"),
                h = n("GnwI"),
                f = n("bRMw"),
                g = n("Ue10"),
                C = n("BwG8"),
                A = n("7MYR"),
                w = n("KXXx"),
                N = n("V2z7"),
                S = n("aw+h"),
                y = n("9vM1"),
                D = m.a.wrap(function() {
                    return n.e(155).then(n.bind(null, "Jtig"))
                }, "ChanletsTab"),
                T = m.a.wrap(function() {
                    return n.e(154).then(n.bind(null, "iw5t"))
                }, "PlayersTab"),
                F = m.a.wrap(function() {
                    return n.e(153).then(n.bind(null, "tgcK"))
                }, "RolesTab"),
                O = m.a.wrap(function() {
                    return n.e(152).then(n.bind(null, "vD5X"))
                }, "TeamsTab");
            ! function(e) {
                e.Tabs = "multiview-page__tabs", e.WrongUser = "multiview-page__wrong-user", e.ChanletsTab = "multiview-page__chanlets-tab", e.TeamsTab = "multiview-page__teams-tab", e.PlayersTab = "multiview-page__players-tab", e.RolesTab = "multiview-page__roles-tab"
            }(i || (i = {}));
            var M = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderChanletsTab = function() {
                            if (!t.props.data || !t.props.data.user || !t.props.data.user.channel) return s.createElement(g.Za, {
                                fillContent: !0
                            });
                            var e = t.props.data.user.channel;
                            return s.createElement(D, {
                                "data-test-selector": i.ChanletsTab,
                                channelID: t.props.data.user.id,
                                chanlets: e.chanlets || [],
                                availableContentAttributes: e.availableContentAttributes || [],
                                createChanlet: t.createChanlet,
                                updateChanlet: t.updateChanlet,
                                createContentAttributes: t.createContentAttributes,
                                deleteContentAttributes: t.deleteContentAttributes,
                                updateContentAttributes: t.updateContentAttributes
                            })
                        }, t.renderTeamsTab = function() {
                            if (!t.props.data || !t.props.data.user || !t.props.data.user.channel) return s.createElement(g.Za, {
                                fillContent: !0
                            });
                            var e = t.props.data.user.channel;
                            return s.createElement(O, {
                                "data-test-selector": i.TeamsTab,
                                channelID: t.props.data.user.id,
                                availableContentAttributes: e.availableContentAttributes || [],
                                createContentAttributes: t.createContentAttributes,
                                updateContentAttributes: t.updateContentAttributes,
                                deleteContentAttributes: t.deleteContentAttributes
                            })
                        }, t.renderPlayersTab = function() {
                            if (!t.props.data || !t.props.data.user || !t.props.data.user.channel) return s.createElement(g.Za, {
                                fillContent: !0
                            });
                            var e = t.props.data.user.channel;
                            return s.createElement(T, {
                                "data-test-selector": i.PlayersTab,
                                channelID: t.props.data.user.id,
                                availableContentAttributes: e.availableContentAttributes || [],
                                createContentAttributes: t.createContentAttributes,
                                updateContentAttributes: t.updateContentAttributes,
                                deleteContentAttributes: t.deleteContentAttributes
                            })
                        }, t.renderRolesTab = function() {
                            if (!t.props.data || !t.props.data.user || !t.props.data.user.channel) return s.createElement(g.Za, {
                                fillContent: !0
                            });
                            var e = t.props.data.user.channel;
                            return s.createElement(F, {
                                "data-test-selector": i.RolesTab,
                                channelID: t.props.data.user.id,
                                availableContentAttributes: e.availableContentAttributes || [],
                                createContentAttributes: t.createContentAttributes,
                                updateContentAttributes: t.updateContentAttributes,
                                deleteContentAttributes: t.deleteContentAttributes
                            })
                        }, t.createChanlet = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return (e = this.props.data.user && this.props.data.user.id) ? [4, this.props.createChanlet(Object(k.a)({
                                                channelID: e
                                            }))] : [2];
                                        case 1:
                                            return t = n.sent(), Object(k.e)(N, {
                                                channelLogin: this.props.match.params.channelLogin
                                            }, function(e) {
                                                var n = e.user && e.user.channel;
                                                if (n && n.chanlets) {
                                                    var i = t.data && t.data.createChanlet && t.data.createChanlet.chanlet;
                                                    i && n.chanlets.push(l.__assign({}, i))
                                                }
                                                return e
                                            }), [2]
                                    }
                                })
                            })
                        }, t.updateChanlet = function(e, n) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return l.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return this.props.data.user && this.props.data.user.id ? [4, this.props.updateChanlet(Object(k.a)({
                                                chanletID: e,
                                                contentAttributeIDs: n
                                            }))] : [2];
                                        case 1:
                                            return t = i.sent(), Object(k.e)(N, {
                                                channelLogin: this.props.match.params.channelLogin
                                            }, function(e) {
                                                var n = e.user && e.user.channel;
                                                if (n && n.chanlets) {
                                                    var i = t.data && t.data.updateChanletContentAttributes && t.data.updateChanletContentAttributes.chanlet;
                                                    if (i) {
                                                        var a = l.__assign({}, i);
                                                        for (var r in n.chanlets)
                                                            if (n.chanlets[r].id === a.id) {
                                                                n.chanlets[r] = a;
                                                                break
                                                            }
                                                    }
                                                }
                                                return e
                                            }), [2]
                                    }
                                })
                            })
                        }, t.createContentAttributes = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, this.props.createContentAttributes(Object(k.a)({
                                                params: e
                                            }))];
                                        case 1:
                                            return t = n.sent(), Object(k.e)(N, {
                                                channelLogin: this.props.match.params.channelLogin
                                            }, function(e) {
                                                var n = e.user && e.user.channel;
                                                if (n && n.availableContentAttributes) {
                                                    var i = t.data && t.data.createMultiviewContentAttributes && t.data.createMultiviewContentAttributes.succeededCreates;
                                                    i && (n.availableContentAttributes = n.availableContentAttributes.concat(i))
                                                }
                                                return e
                                            }), [2]
                                    }
                                })
                            })
                        }, t.updateContentAttributes = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, this.props.updateContentAttributes(Object(k.a)({
                                                params: e
                                            }))];
                                        case 1:
                                            return t = n.sent(), Object(k.e)(N, {
                                                channelLogin: this.props.match.params.channelLogin
                                            }, function(e) {
                                                var n = e.user && e.user.channel;
                                                if (n && n.availableContentAttributes) {
                                                    var i = t.data && t.data.updateMultiviewContentAttributes && t.data.updateMultiviewContentAttributes.succeededUpdates;
                                                    if (i)
                                                        for (var a = function(e) {
                                                                var t = n.availableContentAttributes.findIndex(function(t) {
                                                                    return t.id === e.id
                                                                });
                                                                t > -1 && (n.availableContentAttributes[t] = e)
                                                            }, r = 0, l = i; r < l.length; r++) {
                                                            a(l[r])
                                                        }
                                                }
                                                return e
                                            }), [2]
                                    }
                                })
                            })
                        }, t.deleteContentAttributes = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, this.props.deleteContentAttributes(Object(k.a)({
                                                IDs: e
                                            }))];
                                        case 1:
                                            return t = n.sent(), Object(k.e)(N, {
                                                channelLogin: this.props.match.params.channelLogin
                                            }, function(e) {
                                                var n = e.user && e.user.channel;
                                                if (n && n.availableContentAttributes) {
                                                    var i = t.data && t.data.deleteMultiviewContentAttributes && t.data.deleteMultiviewContentAttributes.succeededDeletes;
                                                    if (i)
                                                        for (var a = 0, r = i; a < r.length; a++) {
                                                            var l = r[a],
                                                                s = n.availableContentAttributes.indexOf(l);
                                                            s > -1 && (n.availableContentAttributes = n.availableContentAttributes.splice(s, 1))
                                                        }
                                                }
                                                return e
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (!Object(f.b)(f.a, this.props.match.params.channelLogin)) return s.createElement(p.a, null);
                        if (this.props.data.loading) return s.createElement(g.Za, {
                            fillContent: !0
                        });
                        if (this.props.data.error || !this.props.data.user || !this.props.data.user.channel) return s.createElement(g.Xa, {
                            padding: 2
                        }, s.createElement(g.W, {
                            italic: !0
                        }, Object(c.e)("There was an issue loading your Multiview settings.", "MultiviewPage")));
                        if (this.props.user && this.props.user.id !== this.props.data.user.id) {
                            var e = this.props.user.login;
                            return s.createElement(g.Xa, {
                                padding: 2,
                                "data-test-selector": i.WrongUser
                            }, s.createElement(g.W, {
                                italic: !0
                            }, Object(c.e)("You can not edit the Multiview settings for this channel. <x:link>Click here</x:link> to get to your channel’s Multiview dashboard", {
                                "x:link": function(t) {
                                    return s.createElement(g.U, {
                                        to: "/" + e + "/dashboard/multiview"
                                    }, t)
                                }
                            }, "MultiviewPage")))
                        }
                        for (var t = [{
                                linkTo: "",
                                label: Object(c.e)("Chanlets", "MultiviewPage")
                            }, {
                                linkTo: "/teams",
                                label: Object(c.e)("Teams", "MultiviewPage")
                            }, {
                                linkTo: "/players",
                                label: Object(c.e)("Players", "MultiviewPage")
                            }, {
                                linkTo: "/roles",
                                label: Object(c.e)("Roles", "MultiviewPage")
                            }], n = 0, a = 0; a < t.length; a++) this.props.location.pathname.match(t[a].linkTo) && (n = a), t[a].linkTo = "/" + this.props.match.params.channelLogin + "/dashboard/multiview" + t[a].linkTo;
                        return s.createElement(v.b, null, s.createElement(g.Xa, {
                            padding: 2
                        }, s.createElement(g.Nb, {
                            "data-test-selector": i.Tabs,
                            activeTabIndex: n,
                            justifyContent: g.Wa.Start,
                            tabs: t
                        }), s.createElement(g.Xa, {
                            padding: 2
                        }, s.createElement(u.a, null, s.createElement(o.a, {
                            path: "/" + this.props.match.params.channelLogin + "/dashboard/multiview/teams",
                            exact: !0,
                            render: this.renderTeamsTab
                        }), s.createElement(o.a, {
                            path: "/" + this.props.match.params.channelLogin + "/dashboard/multiview/players",
                            exact: !0,
                            render: this.renderPlayersTab
                        }), s.createElement(o.a, {
                            path: "/" + this.props.match.params.channelLogin + "/dashboard/multiview/roles",
                            exact: !0,
                            render: this.renderRolesTab
                        }), s.createElement(o.a, {
                            render: this.renderChanletsTab
                        })))))
                    }, t
                }(s.Component),
                _ = Object(d.compose)(Object(h.b)("Multiview"), Object(b.a)(N, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.match.params.channelLogin
                            }
                        }
                    }
                }), Object(b.a)(C, {
                    name: "createChanlet"
                }), Object(b.a)(S, {
                    name: "updateChanlet"
                }), Object(b.a)(A, {
                    name: "createContentAttributes"
                }), Object(b.a)(y, {
                    name: "updateContentAttributes"
                }), Object(b.a)(w, {
                    name: "deleteContentAttributes"
                }))(M);
            var L = Object(a.connect)(function(e) {
                return {
                    user: Object(r.e)(e)
                }
            })(_);
            n.d(t, "MultiviewPage", function() {
                return L
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
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "imageURL"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 128
                }
            };
            n.loc.source = {
                body: "fragment multiviewContentAttribute on MultiviewContentAttribute {\nid\nkey\nname\nparentID\nparentKey\nvalue\nvalueShortName\nimageURL\n}",
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