webpackJsonp([77], {
    BBWW: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SideNav_SubscribedChannels"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "cursor"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Cursor"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "isLive"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Boolean"
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
                                    value: "subscribedChannels"
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
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "after"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "cursor"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "live"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "isLive"
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
                                            value: "pageInfo"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "hasNextPage"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
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
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
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
                                                            value: "displayName"
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
                                                            value: "profileImageURL"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "70"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "broadcastSettings"
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
                                                                    value: "title"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
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
                                                                    value: "viewersCount"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "game"
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
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "type"
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
                end: 344
            }
        };
        t.loc.source = {
            body: "query SideNav_SubscribedChannels($limit: Int $cursor: Cursor $isLive: Boolean) {\ncurrentUser {\nid\nsubscribedChannels(first: $limit after: $cursor live: $isLive){\npageInfo{\nhasNextPage\n}\nedges {\ncursor\nnode{\nid\ndisplayName\nlogin\nprofileImageURL(width: 70)\nbroadcastSettings {\nid\ntitle\n}\nstream {\nid\nviewersCount\ngame {\nid\nname\n}\ntype\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    Rxng: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("TToO"),
            a = t("GiK3"),
            s = t("3zLD"),
            r = t("6sO2"),
            l = t("yWCw"),
            d = t("7vx8"),
            o = t("2o2f"),
            c = t("CSlQ"),
            u = t("+3pi"),
            p = t("abYt"),
            m = t("SZoP"),
            h = t("vH/s"),
            v = t("4t/L"),
            k = t("Odds"),
            b = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.onChannelClick = function() {
                        n.props.onChannelClick(n.props.index, n.props.channel)
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = Object(m.a)(this.props.channel.login, this.props.channel.displayName, !0);
                    return a.createElement(v.a, {
                        avatarAlt: e,
                        avatarSrc: this.props.channel.profileImageURL,
                        collapsed: this.props.collapsed,
                        linkTo: {
                            pathname: "/" + this.props.channel.login,
                            state: {
                                content: h.PageviewContent.SubscribedChannels,
                                medium: h.PageviewMedium.SideNav
                            }
                        },
                        metadataLeft: this.renderMetadataLeft(),
                        metadataRight: this.renderMetadataRight(),
                        onClick: this.onChannelClick,
                        offline: !1,
                        title: e,
                        titleElement: Object(m.a)(this.props.channel.login, this.props.channel.displayName),
                        tooltipContent: this.renderTooltipContent()
                    })
                }, n.prototype.renderMetadataLeft = function() {
                    return this.props.channel.stream && this.props.channel.stream.game ? this.props.channel.stream.game.name : null
                }, n.prototype.renderMetadataRight = function() {
                    return this.props.channel.stream && this.props.channel.stream.id ? a.createElement(k._8, {
                        display: k.R.Flex,
                        alignItems: k.c.Center
                    }, a.createElement(k.G, {
                        status: k.I.Live,
                        size: k.H.Small
                    }), a.createElement(k._8, {
                        margin: {
                            left: .5
                        }
                    }, Object(r.e)(this.props.channel.stream.viewersCount || 0))) : null
                }, n.prototype.renderTooltipContent = function() {
                    if (this.props.channel.stream && this.props.channel.broadcastSettings && this.props.channel.broadcastSettings.title) return a.createElement(k.Q, {
                        color: k.K.Base
                    }, this.props.channel.broadcastSettings.title)
                }, n = i.__decorate([Object(c.d)("SubscribedChannel", {
                    autoReportInteractive: !0
                })], n)
            }(a.Component),
            g = t("yDaU"),
            C = t("BBWW");
        t.d(n, "SubscribedChannelsComponent", function() {
            return f
        }), t.d(n, "SubscribedChannels", function() {
            return N
        });
        var S = 3,
            f = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        displayAmount: S
                    }, n.onClickShowMore = function() {
                        var e = n.props.data.currentUser && n.props.data.currentUser.subscribedChannels && n.props.data.currentUser.subscribedChannels.edges ? n.props.data.currentUser.subscribedChannels.edges.length : 0,
                            t = Math.min(n.state.displayAmount + S, e);
                        n.setState({
                            displayAmount: t
                        })
                    }, n.onClickShowLess = function() {
                        var e = n.state.displayAmount;
                        n.state.displayAmount % S != 0 ? e -= e % S : e -= S, n.setState({
                            displayAmount: e
                        })
                    }, n
                }
                return i.__extends(n, e), n.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, n.prototype.render = function() {
                    var e;
                    if (this.props.data.error) e = a.createElement(l.a, {
                        key: "subscribed-channels-error"
                    });
                    else {
                        if (this.props.data.loading || !this.hasLiveSubscriptions()) return null;
                        e = this.renderSubscribedChannels();
                        var n = this.renderShowMore();
                        n && e.push(n)
                    }
                    return a.createElement(k._8, {
                        className: "subscribed-channels"
                    }, a.createElement(p.a, {
                        title: Object(r.d)("Subscribed Channels", "SubscribedChannels"),
                        collapsed: this.props.collapsed,
                        collapsedIcon: k._25.Star
                    }), e)
                }, n.prototype.renderSubscribedChannels = function() {
                    var e = [];
                    if (!(this.props.data && this.props.data.currentUser && this.props.data.currentUser.subscribedChannels && this.props.data.currentUser.subscribedChannels.edges)) return e;
                    for (var n = 0; n < this.props.data.currentUser.subscribedChannels.edges.length && n < this.state.displayAmount; n++) {
                        var t = this.props.data.currentUser.subscribedChannels.edges[n].node;
                        t && t.stream && t.stream.type === o.a.Live && e.push(a.createElement(b, {
                            collapsed: this.props.collapsed,
                            key: "subscribed-channels-" + t.id,
                            channel: t,
                            resubAvailable: !0,
                            onChannelClick: this.onChannelClick,
                            index: n
                        }))
                    }
                    return e
                }, n.prototype.renderShowMore = function() {
                    return this.props.collapsed || !this.props.data || !this.props.data.currentUser || !this.props.data.currentUser.subscribedChannels || !this.props.data.currentUser.subscribedChannels.edges || this.props.data.currentUser.subscribedChannels.edges.length <= S ? null : a.createElement(u.a, {
                        key: "subscribed-channels-show-more",
                        onClickMore: this.onClickShowMore,
                        onClickLess: this.onClickShowLess,
                        lessDisabled: this.state.displayAmount <= S,
                        moreDisabled: this.state.displayAmount >= this.props.data.currentUser.subscribedChannels.edges.length
                    })
                }, n.prototype.onChannelClick = function(e, n) {
                    Object(g.d)(e, n.stream ? n.stream.type : null)
                }, n.prototype.hasLiveSubscriptions = function() {
                    return !!this.props.data.currentUser && !!this.props.data.currentUser.subscribedChannels && !!this.props.data.currentUser.subscribedChannels.edges && this.props.data.currentUser.subscribedChannels.edges.length > 0
                }, n
            }(a.Component),
            N = Object(s.compose)(Object(d.a)(C, {
                options: {
                    pollInterval: 6e5,
                    variables: {
                        limit: 50,
                        cursor: null,
                        isLive: !0
                    }
                }
            }), Object(c.d)("SubscribedChannels"))(f)
    }
});
//# sourceMappingURL=features.side-nav.components.subscribed-channels.component-9d2ce7369d5445f46e57b44bd5c9f525.js.map