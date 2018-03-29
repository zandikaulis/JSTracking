webpackJsonp([73], {
    "0shC": function(e, i, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ResumeWatchingVideoTower_CurrentUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "limit"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
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
                            value: "currentUser"
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
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "viewedVideos"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
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
                                            value: "edges"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "node"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "PreviewCardVideo"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 243
            }
        };
        t.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery ResumeWatchingVideoTower_CurrentUser ($limit: Int) {\ncurrentUser {\nid\nlogin\nviewedVideos (first: $limit) {\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        t.definitions = t.definitions.concat(n("qjMx").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var i = e.name.value;
            return !r[i] && (r[i] = !0, !0)
        })), e.exports = t
    },
    BmWY: function(e, i, n) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var t = n("TToO"),
            r = n("GiK3"),
            o = n("3zLD"),
            a = n("6sO2"),
            d = n("7vx8"),
            s = n("vH/s"),
            l = n("peXu"),
            c = n("CSlQ"),
            u = n("VDV3"),
            m = n("Odds"),
            p = n("0shC"),
            v = function(e) {
                function i() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return t.__extends(i, e), i.prototype.componentDidUpdate = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, i.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error || !this.props.data.currentUser || !this.props.data.currentUser.viewedVideos || 0 === this.props.data.currentUser.viewedVideos.edges.length) return null;
                    var e, i = this.props.data.currentUser.viewedVideos.edges.filter(function(e) {
                        return !!e.node.id
                    }).map(function(e) {
                        return e.node
                    });
                    if (i && this.props.directoryWidth > 0) {
                        var n = Object(l.a)(this.props.directoryWidth, 240, 2);
                        this.props.viewAllButton && i.length > n ? (i = i.slice(0, n - 1), e = {
                            subHeader: Object(a.d)("Viewing History", "ViewingHistory"),
                            linkTo: {
                                pathname: "/directory/videos/history",
                                state: {
                                    content: this.props.tracking.content,
                                    medium: this.props.tracking.medium
                                }
                            }
                        }) : i = i.slice(0, n)
                    }
                    return r.createElement("div", null, r.createElement(m._6, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(m.O, {
                        type: m._43.H4,
                        color: m.J.Alt2,
                        fontSize: m.T.Size5,
                        transform: m._42.Uppercase
                    }, Object(a.d)("Resume Watching", "viewedVideos"))), r.createElement(u.b, {
                        videos: i,
                        videoCardSize: m._50.Medium,
                        trackingMedium: s.PageviewMedium.Following,
                        trackingContent: s.PageviewContent.ResumeWatchingVideos,
                        viewAllButtonProps: e
                    }))
                }, i
            }(r.Component),
            g = Object(o.compose)(Object(d.a)(p, {
                options: {
                    variables: {
                        limit: 30
                    }
                }
            }), Object(c.d)("ViewedVideos"))(v);
        n.d(i, "FinishWatchingTowerComponent", function() {
            return v
        }), n.d(i, "FinishWatchingTower", function() {
            return g
        })
    }
});
//# sourceMappingURL=features.following.components.finish-watching-tower-c5aff821203a50c245063e9aed48d497.js.map